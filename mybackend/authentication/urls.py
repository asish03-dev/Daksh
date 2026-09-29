from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (
    RegisterView, LoginView, CurrentUserView,
    UserOnboardingView, HealthCheckView
)

urlpatterns = [
    path('health/', HealthCheckView.as_view(), name='auth_health'),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('login/', LoginView.as_view(), name='auth_login'),
    path('user/', CurrentUserView.as_view(), name='auth_current_user'),
    path('onboarding/', UserOnboardingView.as_view(), name='auth_onboarding'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

