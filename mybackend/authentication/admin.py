from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import (
    User, UserOnboarding, Department, JobRole, FRACCompetency,
    RoleCompetencyRequirement, SkillGap, Course, UserCompetencyScore,
    CourseCompetencyMapping, LearningPath, UserCourseEnrollment,
    UploadedLearningMaterial, AIGeneratedQuiz, QuizQuestionMCQ,
    LearnerQuizAttempt, OrgSkillAnalyticsSnapshot, Certificate
)

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'username', 'role', 'department', 'designation', 'employee_id', 'is_staff')
    list_filter = ('role', 'is_staff', 'is_superuser', 'is_active', 'department')
    search_fields = ('email', 'username', 'employee_id', 'department', 'designation')
    ordering = ('email',)

    fieldsets = UserAdmin.fieldsets + (
        ('Official Profile Details', {
            'fields': ('role', 'employee_id', 'department', 'designation', 'posting_location', 'phone_number', 'cadre')
        }),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Official Profile Details', {
            'fields': ('email', 'role', 'employee_id', 'department', 'designation', 'posting_location', 'phone_number', 'cadre')
        }),
    )

@admin.register(UserOnboarding)
class UserOnboardingAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'user', 'designation', 'statistical_cadre', 'department_division', 'annual_training_hours')
    search_fields = ('full_name', 'designation', 'employee_id', 'department_division')

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('department_id', 'department_name')
    search_fields = ('department_id', 'department_name')

@admin.register(JobRole)
class JobRoleAdmin(admin.ModelAdmin):
    list_display = ('role_id', 'role_title', 'department')
    list_filter = ('department',)
    search_fields = ('role_id', 'role_title')

@admin.register(FRACCompetency)
class FRACCompetencyAdmin(admin.ModelAdmin):
    list_display = ('competency_id', 'competency_name', 'domain', 'max_scale_level')
    list_filter = ('domain',)
    search_fields = ('competency_id', 'competency_name', 'domain')

@admin.register(RoleCompetencyRequirement)
class RoleCompetencyRequirementAdmin(admin.ModelAdmin):
    list_display = ('requirement_id', 'role', 'competency', 'required_level', 'priority_weight')
    list_filter = ('required_level', 'role')

@admin.register(SkillGap)
class SkillGapAdmin(admin.ModelAdmin):
    list_display = ('gap_id', 'user', 'competency', 'required_level', 'current_level', 'gap_score', 'severity', 'status')
    list_filter = ('severity', 'status')
    search_fields = ('user__email', 'competency__competency_name')

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('course_id', 'course_title', 'source_platform', 'duration_hours', 'course_level', 'rating')
    list_filter = ('source_platform', 'course_level')
    search_fields = ('course_id', 'course_title', 'provider_org')

@admin.register(UserCompetencyScore)
class UserCompetencyScoreAdmin(admin.ModelAdmin):
    list_display = ('user_competency_id', 'user', 'competency', 'current_level', 'evaluation_source', 'last_evaluated_at')
    list_filter = ('current_level', 'evaluation_source')
    search_fields = ('user__email', 'competency__competency_name')

@admin.register(CourseCompetencyMapping)
class CourseCompetencyMappingAdmin(admin.ModelAdmin):
    list_display = ('mapping_id', 'course', 'competency', 'competency_gain_level')
    search_fields = ('course__course_title', 'competency__competency_name')

@admin.register(LearningPath)
class LearningPathAdmin(admin.ModelAdmin):
    list_display = ('path_id', 'user', 'path_name', 'total_courses', 'progress_percent', 'status')
    list_filter = ('status',)
    search_fields = ('user__email', 'path_name')

@admin.register(UserCourseEnrollment)
class UserCourseEnrollmentAdmin(admin.ModelAdmin):
    list_display = ('enrollment_id', 'user', 'course', 'completion_status', 'progress_percent', 'hours_spent', 'enrollment_date')
    list_filter = ('completion_status',)
    search_fields = ('user__email', 'course__course_title')

@admin.register(UploadedLearningMaterial)
class UploadedLearningMaterialAdmin(admin.ModelAdmin):
    list_display = ('material_id', 'title', 'uploaded_by_user', 'file_type', 'competency', 'extracted_text_tokens', 'created_at')
    list_filter = ('file_type',)
    search_fields = ('title', 'uploaded_by_user__email')

class QuizQuestionMCQInline(admin.TabularInline):
    model = QuizQuestionMCQ
    extra = 1

@admin.register(AIGeneratedQuiz)
class AIGeneratedQuizAdmin(admin.ModelAdmin):
    list_display = ('quiz_id', 'quiz_title', 'difficulty_level', 'generated_by_llm', 'total_questions', 'passing_score_pct', 'created_at')
    list_filter = ('difficulty_level', 'generated_by_llm')
    search_fields = ('quiz_title',)
    inlines = [QuizQuestionMCQInline]

@admin.register(QuizQuestionMCQ)
class QuizQuestionMCQAdmin(admin.ModelAdmin):
    list_display = ('question_id', 'quiz', 'correct_option', 'mapped_competency')
    list_filter = ('correct_option',)
    search_fields = ('question_text', 'quiz__quiz_title')

@admin.register(LearnerQuizAttempt)
class LearnerQuizAttemptAdmin(admin.ModelAdmin):
    list_display = ('attempt_id', 'user', 'quiz', 'score_obtained', 'passed', 'attempted_at')
    list_filter = ('passed',)
    search_fields = ('user__email', 'quiz__quiz_title')

@admin.register(OrgSkillAnalyticsSnapshot)
class OrgSkillAnalyticsSnapshotAdmin(admin.ModelAdmin):
    list_display = ('snapshot_id', 'department', 'snapshot_period', 'avg_competency_score', 'workforce_readiness_index', 'critical_skill_deficits')
    list_filter = ('snapshot_period', 'department')

@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ('certificate_id', 'user', 'course', 'competency', 'verification_code', 'score', 'issued_date')
    search_fields = ('certificate_id', 'verification_code', 'user__email')
