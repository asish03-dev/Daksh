from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from .models import UserOnboarding
from .serializers import (
    RegisterSerializer, LoginSerializer,
    UserSerializer, UserOnboardingSerializer
)

User = get_user_model()

def get_tokens_for_user(user):
    """
    Generate SimpleJWT access and refresh tokens for a user.
    """
    refresh = RefreshToken.for_user(user)
    # Add custom claims to the token payload
    refresh['role'] = user.role
    refresh['email'] = user.email
    refresh['username'] = user.username
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class RegisterView(generics.CreateAPIView):
    """
    POST /api/auth/register/
    Registers a new officer or administrator.
    """
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        tokens = get_tokens_for_user(user)

        return Response({
            "status": "success",
            "message": "Officer account registered successfully.",
            "user": UserSerializer(user).data,
            "tokens": tokens
        }, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    """
    POST /api/auth/login/
    Authenticates user and returns JWT token pair.
    """
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        tokens = get_tokens_for_user(user)

        return Response({
            "status": "success",
            "message": f"Welcome back, {user.first_name or user.username}!",
            "user": UserSerializer(user).data,
            "tokens": tokens
        }, status=status.HTTP_200_OK)


class CurrentUserView(APIView):
    """
    GET /api/auth/user/
    Returns currently logged-in user profile. Requires Bearer Token.
    """
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({
            "status": "success",
            "user": serializer.data
        }, status=status.HTTP_200_OK)


class UserOnboardingView(APIView):
    """
    GET  /api/auth/onboarding/ -> Fetch officer onboarding deployment details
    POST /api/auth/onboarding/ -> Submit / update officer deployment profile
    PUT  /api/auth/onboarding/ -> Update officer deployment profile
    """
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            profile = request.user.onboarding_profile
            serializer = UserOnboardingSerializer(profile)
            return Response({
                "status": "success",
                "is_onboarded": request.user.is_onboarded,
                "profile": serializer.data,
                "user": UserSerializer(request.user).data
            }, status=status.HTTP_200_OK)
        except UserOnboarding.DoesNotExist:
            return Response({
                "status": "not_onboarded",
                "is_onboarded": False,
                "profile": None,
                "user": UserSerializer(request.user).data
            }, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = UserOnboardingSerializer(
            data=request.data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        profile = serializer.save()

        # Reload user object
        request.user.refresh_from_db()

        return Response({
            "status": "success",
            "message": "Officer cadre & deployment profile configured successfully.",
            "profile": UserOnboardingSerializer(profile).data,
            "user": UserSerializer(request.user).data
        }, status=status.HTTP_200_OK)

    def put(self, request):
        return self.post(request)


class HealthCheckView(APIView):
    """
    GET /api/auth/health/
    Verifies backend service status.
    """
    permission_classes = (AllowAny,)

    def get(self, request):
        return Response({
            "status": "healthy",
            "service": "Daksh / DAKSH Authentication API",
            "version": "1.0.0"
        }, status=status.HTTP_200_OK)
