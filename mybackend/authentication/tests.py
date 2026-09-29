from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status

User = get_user_model()

class AuthenticationAPITests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.register_url = reverse('auth_register')
        self.login_url = reverse('auth_login')
        self.user_url = reverse('auth_current_user')
        self.onboarding_url = reverse('auth_onboarding')
        self.health_url = reverse('auth_health')

        self.test_user_data = {
            "email": "test.officer@daksh.gov.in",
            "password": "Password@123",
            "confirm_password": "Password@123",
            "name": "Priya Sharma",
            "role": "learner",
            "department": "National Accounts Division",
            "designation": "Assistant Director"
        }

        self.test_onboarding_data = {
            "name": "Dr. Priya Sharma",
            "employeeId": "ISS-ND-4091",
            "cadre": "Indian Statistical Service (ISS - Group A)",
            "officialDesignation": "Joint Director",
            "ministry": "Ministry of Statistics and Programme Implementation (MoSPI)",
            "organisation": "National Accounts Division (NAD)",
            "postingLocation": "New Delhi (Headquarters / Sardar Patel Bhawan)",
            "weeklyLearningBudget": "6 Hours / Week"
        }

    def test_health_check(self):
        response = self.client.get(self.health_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get('status'), 'healthy')

    def test_user_registration_success(self):
        response = self.client.post(self.register_url, self.test_user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('tokens', response.data)
        self.assertIn('access', response.data['tokens'])
        self.assertEqual(response.data['user']['email'], self.test_user_data['email'])
        self.assertEqual(response.data['user']['role'], 'learner')

    def test_user_registration_password_mismatch(self):
        bad_data = self.test_user_data.copy()
        bad_data['confirm_password'] = 'Mismatch@123'
        response = self.client.post(self.register_url, bad_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_login_success(self):
        # First register
        self.client.post(self.register_url, self.test_user_data, format='json')
        
        # Then login
        login_payload = {
            "email": self.test_user_data['email'],
            "password": self.test_user_data['password']
        }
        response = self.client.post(self.login_url, login_payload, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('tokens', response.data)
        self.assertIn('access', response.data['tokens'])

    def test_user_login_invalid_password(self):
        self.client.post(self.register_url, self.test_user_data, format='json')
        response = self.client.post(self.login_url, {
            "email": self.test_user_data['email'],
            "password": "WrongPassword@123"
        }, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_protected_current_user_endpoint(self):
        # Register and extract token
        reg_res = self.client.post(self.register_url, self.test_user_data, format='json')
        token = reg_res.data['tokens']['access']

        # Request user endpoint with Bearer Token
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        response = self.client.get(self.user_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['user']['email'], self.test_user_data['email'])

    def test_onboarding_unauthenticated(self):
        response = self.client.get(self.onboarding_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_onboarding_submission_and_retrieval(self):
        # 1. Register user
        reg_res = self.client.post(self.register_url, self.test_user_data, format='json')
        token = reg_res.data['tokens']['access']
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')

        # 2. Check initial onboarding state (should be not_onboarded)
        get_res1 = self.client.get(self.onboarding_url)
        self.assertEqual(get_res1.status_code, status.HTTP_200_OK)
        self.assertEqual(get_res1.data.get('is_onboarded'), False)

        # 3. Submit onboarding form
        post_res = self.client.post(self.onboarding_url, self.test_onboarding_data, format='json')
        self.assertEqual(post_res.status_code, status.HTTP_200_OK)
        self.assertEqual(post_res.data.get('status'), 'success')
        self.assertEqual(post_res.data['profile']['employee_id'], self.test_onboarding_data['employeeId'])
        self.assertEqual(post_res.data['profile']['statistical_cadre'], self.test_onboarding_data['cadre'])
        self.assertEqual(post_res.data['user']['is_onboarded'], True)

        # 4. Retrieve onboarding profile
        get_res2 = self.client.get(self.onboarding_url)
        self.assertEqual(get_res2.status_code, status.HTTP_200_OK)
        self.assertEqual(get_res2.data.get('is_onboarded'), True)
        self.assertEqual(get_res2.data['profile']['full_name'], self.test_onboarding_data['name'])
        self.assertEqual(get_res2.data['profile']['organisation'], self.test_onboarding_data['organisation'])

