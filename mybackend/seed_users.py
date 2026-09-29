import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from django.contrib.auth import get_user_model
from authentication.serializers import LoginSerializer

User = get_user_model()

def seed():
    # 1. Admin Superuser
    admin_email = "admin@daksh.gov.in"
    if not User.objects.filter(email=admin_email).exists():
        admin_user = User.objects.create_superuser(
            username="admin",
            email=admin_email,
            password="Admin@2026",
            first_name="Director General",
            last_name="(L&D Directorate)",
            role="admin",
            department="Ministry of Statistics and Programme Implementation (MoSPI)",
            designation="Executive Director General",
            employee_id="ADM-HQ-001",
            posting_location="Headquarters, New Delhi"
        )
        print(f"[+] Created Superuser Admin: {admin_user.email} (Password: Admin@2026)")
    else:
        print(f"[*] Admin {admin_email} already exists.")

    # 2. Officer Demo Account (Amit Kumar Mondal)
    officer_email = "officer@daksh.gov.in"
    if not User.objects.filter(email=officer_email).exists():
        officer = User.objects.create_user(
            username="amit_mondal",
            email=officer_email,
            password="Officer@2026",
            first_name="Amit Kumar",
            last_name="Mondal",
            role="learner",
            department="Field Operations Division (FOD)",
            designation="Senior Statistical Officer",
            employee_id="EMP-4409",
            posting_location="Eastern Regional Office, Kolkata"
        )
        print(f"[+] Created Demo Officer: {officer.email} (Password: Officer@2026)")
    else:
        print(f"[*] Officer {officer_email} already exists.")

    # 3. Verify Login Validation
    serializer = LoginSerializer(data={"email": admin_email, "password": "Admin@2026"})
    if serializer.is_valid():
        print("[SUCCESS] LoginSerializer test PASSED for Admin!")
    else:
        print("[ERROR] LoginSerializer validation failed:", serializer.errors)

if __name__ == '__main__':
    seed()
