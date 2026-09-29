from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.password_validation import validate_password
from .models import (
    UserOnboarding, FRACCompetency, JobRole,
    RoleCompetencyRequirement, UserCompetencyScore, SkillGap
)

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer to return authenticated user information.
    """
    onboarding_profile = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'role',
            'employee_id',
            'department',
            'designation',
            'posting_location',
            'phone_number',
            'cadre',
            'is_onboarded',
            'onboarding_profile',
            'date_joined',
        )
        read_only_fields = ('id', 'date_joined')

    def get_onboarding_profile(self, obj):
        try:
            if hasattr(obj, 'onboarding_profile') and obj.onboarding_profile:
                p = obj.onboarding_profile
                return {
                    'full_name': p.full_name,
                    'employee_id': p.employee_id,
                    'statistical_cadre': p.statistical_cadre,
                    'official_designation': p.official_designation or p.designation,
                    'department_division': p.department_division,
                    'organisation': p.organisation,
                    'current_posting_location': p.current_posting_location,
                    'avatar': p.avatar,
                    'target_role': p.target_role,
                    'weekly_learning_budget': p.weekly_learning_budget,
                    'is_onboarded': p.is_onboarded,
                }
        except Exception:
            pass
        return None


class UserOnboardingSerializer(serializers.ModelSerializer):
    """
    Serializer for creating and updating the Officer Onboarding Profile.
    Accepts both snake_case and camelCase field names from frontend.
    """
    # Accept frontend alternate keys
    name = serializers.CharField(required=False, write_only=True, allow_blank=True)
    employeeId = serializers.CharField(required=False, write_only=True, allow_blank=True)
    cadre = serializers.CharField(required=False, write_only=True, allow_blank=True)
    officialDesignation = serializers.CharField(required=False, write_only=True, allow_blank=True)
    ministry = serializers.CharField(required=False, write_only=True, allow_blank=True)
    postingLocation = serializers.CharField(required=False, write_only=True, allow_blank=True)
    weeklyLearningBudget = serializers.CharField(required=False, write_only=True, allow_blank=True)

    class Meta:
        model = UserOnboarding
        fields = (
            'full_name',
            'name',
            'employee_id',
            'employeeId',
            'statistical_cadre',
            'cadre',
            'official_designation',
            'officialDesignation',
            'designation',
            'department_division',
            'ministry',
            'organisation',
            'current_posting_location',
            'postingLocation',
            'current_primary_assignment',
            'highest_educational_qualification',
            'total_years_in_service',
            'completed_igot_courses',
            'avatar',
            'target_role',
            'weekly_learning_budget',
            'weeklyLearningBudget',
            'is_onboarded',
            'created_at',
            'updated_at',
        )
        read_only_fields = ('created_at', 'updated_at')
        extra_kwargs = {
            'full_name': {'required': False, 'allow_blank': True},
            'employee_id': {'required': False, 'allow_blank': True},
            'statistical_cadre': {'required': False, 'allow_blank': True},
            'official_designation': {'required': False, 'allow_blank': True},
            'designation': {'required': False, 'allow_blank': True},
            'department_division': {'required': False, 'allow_blank': True},
            'current_posting_location': {'required': False, 'allow_blank': True},
        }

    def validate(self, attrs):
        # Resolve aliases from frontend
        full_name = attrs.pop('name', None) or attrs.get('full_name')
        if full_name:
            attrs['full_name'] = full_name.strip()

        employee_id = attrs.pop('employeeId', None) or attrs.get('employee_id')
        if employee_id:
            attrs['employee_id'] = employee_id.strip()

        cadre = attrs.pop('cadre', None) or attrs.get('statistical_cadre')
        if cadre:
            attrs['statistical_cadre'] = cadre.strip()

        designation = (
            attrs.pop('officialDesignation', None) or
            attrs.get('official_designation') or
            attrs.get('designation')
        )
        if designation:
            attrs['official_designation'] = designation.strip()
            attrs['designation'] = designation.strip()

        department = attrs.pop('ministry', None) or attrs.get('department_division')
        if department:
            attrs['department_division'] = department.strip()

        location = attrs.pop('postingLocation', None) or attrs.get('current_posting_location')
        if location:
            attrs['current_posting_location'] = location.strip()

        budget = attrs.pop('weeklyLearningBudget', None) or attrs.get('weekly_learning_budget')
        if budget:
            attrs['weekly_learning_budget'] = budget.strip()

        return attrs

    def save(self, **kwargs):
        user = self.context.get('request').user if 'request' in self.context else kwargs.get('user')
        if not user or not user.is_authenticated:
            raise serializers.ValidationError("Authenticated user context is required.")

        validated_data = {**self.validated_data, **kwargs}
        validated_data['is_onboarded'] = True

        # Extract name parts for User model
        full_name = validated_data.get('full_name', '')
        if full_name:
            name_parts = full_name.split(' ', 1)
            user.first_name = name_parts[0]
            user.last_name = name_parts[1] if len(name_parts) > 1 else ""

        if validated_data.get('employee_id'):
            user.employee_id = validated_data['employee_id']
        if validated_data.get('statistical_cadre'):
            user.cadre = validated_data['statistical_cadre']
        if validated_data.get('official_designation'):
            user.designation = validated_data['official_designation']
        if validated_data.get('department_division'):
            user.department = validated_data['department_division']
        if validated_data.get('current_posting_location'):
            user.posting_location = validated_data['current_posting_location']
        user.is_onboarded = True
        user.save()

        # Update or create UserOnboarding profile
        profile, created = UserOnboarding.objects.update_or_create(
            user=user,
            defaults=validated_data
        )

        # Baseline Competency initialization if not already present
        self._initialize_baseline_competencies(user)

        return profile

    def _initialize_baseline_competencies(self, user):
        """
        Auto-initialize core FRAC competencies and initial skill gaps if user is newly onboarded.
        """
        try:
            if not user.competency_scores.exists():
                comps = FRACCompetency.objects.all()[:5]
                for comp in comps:
                    UserCompetencyScore.objects.get_or_create(
                        user=user,
                        competency=comp,
                        defaults={
                            'current_level': 2,
                            'evaluation_source': 'Initial Deployment Calibration'
                        }
                    )
                    SkillGap.objects.get_or_create(
                        user=user,
                        competency=comp,
                        defaults={
                            'required_level': 4,
                            'current_level': 2,
                            'gap_score': 2,
                            'severity': 'moderate',
                            'status': 'unaddressed'
                        }
                    )
        except Exception:
            pass


class RegisterSerializer(serializers.ModelSerializer):
    """
    Serializer for user registration (Sign up).
    """
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={'input_type': 'password'}
    )
    confirm_password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )
    name = serializers.CharField(write_only=True, required=False, allow_blank=True)

    class Meta:
        model = User
        fields = (
            'email',
            'name',
            'username',
            'password',
            'confirm_password',
            'role',
            'employee_id',
            'department',
            'designation',
            'posting_location',
        )
        extra_kwargs = {
            'username': {'required': False},
            'email': {'required': True},
        }

    def validate(self, attrs):
        # 1. Password confirmation check
        if attrs.get('password') != attrs.get('confirm_password'):
            raise serializers.ValidationError({"password": "Passwords do not match."})

        # 2. Email uniqueness check
        email = attrs.get('email', '').strip().lower()
        if User.objects.filter(email__iexact=email).exists():
            raise serializers.ValidationError({"email": "An account with this official email already exists."})

        return attrs

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        name = validated_data.pop('name', '').strip()
        email = validated_data.get('email').strip().lower()
        
        # Derive username and name if not provided
        username = validated_data.get('username') or email.split('@')[0]
        first_name = ""
        last_name = ""
        if name:
            name_parts = name.split(' ', 1)
            first_name = name_parts[0]
            last_name = name_parts[1] if len(name_parts) > 1 else ""

        # Auto-generate employee_id if missing
        employee_id = validated_data.get('employee_id') or f"EMP-{User.objects.count() + 1001}"

        user = User.objects.create_user(
            username=username,
            email=email,
            password=validated_data.get('password'),
            first_name=first_name,
            last_name=last_name,
            role=validated_data.get('role', 'learner'),
            employee_id=employee_id,
            department=validated_data.get('department', 'Ministry Operations'),
            designation=validated_data.get('designation', 'Statistical Officer'),
            posting_location=validated_data.get('posting_location', 'Headquarters'),
            is_onboarded=False
        )
        return user


class LoginSerializer(serializers.Serializer):
    """
    Serializer for user authentication (Login).
    """
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, write_only=True, style={'input_type': 'password'})

    def validate(self, attrs):
        email = attrs.get('email', '').strip().lower()
        password = attrs.get('password')

        if not email or not password:
            raise serializers.ValidationError("Please provide both email and password.")

        # Authenticate using email as USERNAME_FIELD
        user = authenticate(username=email, password=password)

        if not user:
            # Fallback check in case case-sensitivity or username was passed
            try:
                user_obj = User.objects.get(email__iexact=email)
                if user_obj.check_password(password):
                    user = user_obj
            except User.DoesNotExist:
                pass

        if not user:
            raise serializers.ValidationError("Invalid email or password credentials.")

        if not user.is_active:
            raise serializers.ValidationError("This account has been deactivated.")

        attrs['user'] = user
        return attrs
