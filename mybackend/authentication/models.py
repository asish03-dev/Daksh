from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

# =============================================================================
# 1. MASTER USER AUTHENTICATION MODEL
# =============================================================================
class User(AbstractUser):
    ROLE_CHOICES = (
        ('learner', 'Officer / Learner'),
        ('admin', 'MoSPI Administrator'),
    )

    email = models.EmailField(unique=True, verbose_name="Official Email")
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='learner')
    employee_id = models.CharField(max_length=50, blank=True, null=True, verbose_name="Govt / Employee ID")
    department = models.CharField(max_length=150, blank=True, null=True, verbose_name="Ministry / Department")
    designation = models.CharField(max_length=150, blank=True, null=True, verbose_name="Official Designation")
    posting_location = models.CharField(max_length=150, blank=True, null=True, verbose_name="Posting Location")
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    cadre = models.CharField(max_length=100, blank=True, null=True, default="Indian Statistical Service (ISS)")
    is_onboarded = models.BooleanField(default=False, verbose_name="Onboarding Completed")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return f"{self.email} ({self.get_role_display()})"


# =============================================================================
# 2. USER ONBOARDING / OFFICER PROFILE
# =============================================================================
class UserOnboarding(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, primary_key=True, related_name='onboarding_profile')
    full_name = models.CharField(max_length=200)
    designation = models.CharField(max_length=150)
    employee_id = models.CharField(max_length=100, blank=True, null=True)
    statistical_cadre = models.CharField(max_length=150, default="Indian Statistical Service (ISS)")
    official_designation = models.CharField(max_length=150, blank=True, null=True)
    department_division = models.CharField(max_length=150, blank=True, null=True)
    organisation = models.CharField(max_length=150, blank=True, null=True, verbose_name="Subordinate Organisation / Directorate")
    current_posting_location = models.CharField(max_length=150, blank=True, null=True)
    current_primary_assignment = models.CharField(max_length=255, blank=True, null=True)
    highest_educational_qualification = models.CharField(max_length=150, blank=True, null=True)
    total_years_in_service = models.CharField(max_length=50, blank=True, null=True)
    completed_igot_courses = models.JSONField(default=list, blank=True)
    programmes_attended = models.TextField(blank=True, null=True)
    external_certifications = models.TextField(blank=True, null=True)
    annual_training_hours = models.IntegerField(default=20)
    uploaded_file = models.FileField(upload_to='officer_docs/', blank=True, null=True)
    avatar = models.TextField(blank=True, null=True, verbose_name="Passport Photo / Avatar Data URL")
    target_role = models.CharField(max_length=150, blank=True, null=True)
    weekly_learning_budget = models.CharField(max_length=100, default="4 Hours / Week")
    is_onboarded = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Profile: {self.full_name} ({self.user.email})"


# =============================================================================
# 3. DEPARTMENT / DIVISION
# =============================================================================
class Department(models.Model):
    department_id = models.CharField(max_length=50, primary_key=True)
    department_name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.department_name} ({self.department_id})"


# =============================================================================
# 4. JOB ROLE
# =============================================================================
class JobRole(models.Model):
    role_id = models.CharField(max_length=50, primary_key=True)
    role_title = models.CharField(max_length=200)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='job_roles')

    def __str__(self):
        return f"{self.role_title} ({self.department.department_name})"


# =============================================================================
# 5. FRAC COMPETENCY
# =============================================================================
class FRACCompetency(models.Model):
    competency_id = models.CharField(max_length=50, primary_key=True)
    domain = models.CharField(max_length=150)
    competency_name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    max_scale_level = models.IntegerField(default=5)

    class Meta:
        verbose_name = "FRAC Competency"
        verbose_name_plural = "FRAC Competencies"

    def __str__(self):
        return f"{self.competency_name} [{self.domain}]"


# =============================================================================
# 6. ROLE COMPETENCY REQUIREMENTS
# =============================================================================
class RoleCompetencyRequirement(models.Model):
    requirement_id = models.AutoField(primary_key=True)
    role = models.ForeignKey(JobRole, on_delete=models.CASCADE, related_name='competency_requirements')
    competency = models.ForeignKey(FRACCompetency, on_delete=models.CASCADE, related_name='role_requirements')
    required_level = models.IntegerField(default=3)
    priority_weight = models.FloatField(default=1.0)

    def __str__(self):
        return f"{self.role.role_title} -> {self.competency.competency_name} (Lvl {self.required_level})"


# =============================================================================
# 7. SKILL GAP
# =============================================================================
class SkillGap(models.Model):
    SEVERITY_CHOICES = (
        ('critical', 'Critical'),
        ('moderate', 'Moderate'),
        ('mastered', 'Mastered'),
    )
    STATUS_CHOICES = (
        ('unaddressed', 'Unaddressed'),
        ('in_progress', 'In Progress'),
        ('resolved', 'Resolved'),
    )

    gap_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='skill_gaps')
    competency = models.ForeignKey(FRACCompetency, on_delete=models.CASCADE, related_name='user_skill_gaps')
    required_level = models.IntegerField(default=3)
    current_level = models.IntegerField(default=1)
    gap_score = models.IntegerField(default=0)
    severity = models.CharField(max_length=20, choices=SEVERITY_CHOICES, default='moderate')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='unaddressed')

    def __str__(self):
        return f"{self.user.email} - {self.competency.competency_name} (Gap: {self.gap_score})"


# =============================================================================
# 8. COURSES
# =============================================================================
class Course(models.Model):
    course_id = models.CharField(max_length=100, primary_key=True)
    source_platform = models.CharField(max_length=100, default="iGOT Karmayogi")
    course_title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=150, blank=True, null=True)
    duration_hours = models.FloatField(default=10.0)
    course_level = models.CharField(max_length=50, default="Advanced")
    external_url_or_api = models.URLField(max_length=500, blank=True, null=True)
    provider_org = models.CharField(max_length=150, default="iGOT Karmayogi Bharat")
    rating = models.FloatField(default=4.8)

    def __str__(self):
        return f"{self.course_title} ({self.source_platform})"


# =============================================================================
# 9. USER COMPETENCY SCORES
# =============================================================================
class UserCompetencyScore(models.Model):
    user_competency_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='competency_scores')
    competency = models.ForeignKey(FRACCompetency, on_delete=models.CASCADE, related_name='user_scores')
    current_level = models.IntegerField(default=1)
    evaluation_source = models.CharField(max_length=100, default="Diagnostic Assessment")
    last_evaluated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.email} - {self.competency.competency_name} (Lvl {self.current_level})"


# =============================================================================
# 10. COURSE COMPETENCY MAPPING
# =============================================================================
class CourseCompetencyMapping(models.Model):
    mapping_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='competency_mappings')
    competency = models.ForeignKey(FRACCompetency, on_delete=models.CASCADE, related_name='course_mappings')
    competency_gain_level = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.course.course_title} -> {self.competency.competency_name} (+{self.competency_gain_level})"


# =============================================================================
# 11. LEARNING PATHS
# =============================================================================
class LearningPath(models.Model):
    path_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='learning_paths')
    path_name = models.CharField(max_length=255)
    ai_rationale = models.TextField(blank=True, null=True)
    total_courses = models.IntegerField(default=1)
    progress_percent = models.IntegerField(default=0)
    status = models.CharField(max_length=20, default="active")

    def __str__(self):
        return f"{self.path_name} for {self.user.email}"


# =============================================================================
# 12. USER COURSE ENROLLMENTS
# =============================================================================
class UserCourseEnrollment(models.Model):
    STATUS_CHOICES = (
        ('not_started', 'Not Started'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
    )

    enrollment_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='enrollments')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='user_enrollments')
    path = models.ForeignKey(LearningPath, on_delete=models.SET_NULL, null=True, blank=True, related_name='path_enrollments')
    enrollment_date = models.DateTimeField(auto_now_add=True)
    completion_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='in_progress')
    progress_percent = models.IntegerField(default=0)
    hours_spent = models.FloatField(default=0.0)
    completion_date = models.DateTimeField(null=True, blank=True)
    certificate_url = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return f"{self.user.email} enrolled in {self.course.course_title} ({self.completion_status})"


# =============================================================================
# 13. UPLOADED LEARNING MATERIALS
# =============================================================================
class UploadedLearningMaterial(models.Model):
    material_id = models.AutoField(primary_key=True)
    uploaded_by_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='uploaded_materials')
    title = models.CharField(max_length=255)
    file_type = models.CharField(max_length=50, default="PDF")
    file_storage_url = models.FileField(upload_to='learning_materials/')
    competency = models.ForeignKey(FRACCompetency, on_delete=models.SET_NULL, null=True, blank=True, related_name='materials')
    extracted_text_tokens = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.file_type})"


# =============================================================================
# 14. AI GENERATED QUIZZES
# =============================================================================
class AIGeneratedQuiz(models.Model):
    quiz_id = models.AutoField(primary_key=True)
    material = models.ForeignKey(UploadedLearningMaterial, on_delete=models.SET_NULL, null=True, blank=True, related_name='generated_quizzes')
    quiz_title = models.CharField(max_length=255)
    difficulty_level = models.CharField(max_length=50, default="Moderate")
    generated_by_llm = models.CharField(max_length=100, default="SETU AI Copilot")
    total_questions = models.IntegerField(default=5)
    passing_score_pct = models.IntegerField(default=80)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "AI Generated Quiz"
        verbose_name_plural = "AI Generated Quizzes"

    def __str__(self):
        return f"{self.quiz_title} [{self.difficulty_level}]"


# =============================================================================
# 15. QUIZ QUESTIONS MCQ
# =============================================================================
class QuizQuestionMCQ(models.Model):
    OPTION_CHOICES = (
        ('A', 'A'),
        ('B', 'B'),
        ('C', 'C'),
        ('D', 'D'),
    )

    question_id = models.AutoField(primary_key=True)
    quiz = models.ForeignKey(AIGeneratedQuiz, on_delete=models.CASCADE, related_name='questions')
    question_text = models.TextField()
    option_a = models.CharField(max_length=500)
    option_b = models.CharField(max_length=500)
    option_c = models.CharField(max_length=500)
    option_d = models.CharField(max_length=500)
    correct_option = models.CharField(max_length=1, choices=OPTION_CHOICES)
    ai_explanation = models.TextField(blank=True, null=True)
    mapped_competency = models.ForeignKey(FRACCompetency, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"Q: {self.question_text[:50]}... (Answer: {self.correct_option})"


# =============================================================================
# 16. LEARNER QUIZ ATTEMPTS
# =============================================================================
class LearnerQuizAttempt(models.Model):
    attempt_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='quiz_attempts')
    quiz = models.ForeignKey(AIGeneratedQuiz, on_delete=models.CASCADE, related_name='attempts')
    score_obtained = models.FloatField(default=0.0)
    passed = models.BooleanField(default=False)
    ai_feedback = models.TextField(blank=True, null=True)
    attempted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} - {self.quiz.quiz_title} ({self.score_obtained}%)"


# =============================================================================
# 17. ORG SKILL ANALYTICS SNAPSHOTS
# =============================================================================
class OrgSkillAnalyticsSnapshot(models.Model):
    snapshot_id = models.AutoField(primary_key=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='analytics_snapshots')
    snapshot_period = models.CharField(max_length=50, default="Q3 2026")
    avg_competency_score = models.FloatField(default=80.0)
    critical_skill_deficits = models.IntegerField(default=0)
    total_training_hours = models.FloatField(default=0.0)
    workforce_readiness_index = models.FloatField(default=85.0)
    recorded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Snapshot {self.department.department_name} ({self.snapshot_period})"


# =============================================================================
# 18. CERTIFICATE
# =============================================================================
class Certificate(models.Model):
    certificate_id = models.CharField(max_length=100, primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='certificates')
    course = models.ForeignKey(Course, on_delete=models.SET_NULL, null=True, blank=True, related_name='issued_certificates')
    competency = models.ForeignKey(FRACCompetency, on_delete=models.SET_NULL, null=True, blank=True, related_name='issued_certificates')
    issued_date = models.DateField(auto_now_add=True)
    verification_code = models.CharField(max_length=100, unique=True)
    score = models.IntegerField(default=90)

    def __str__(self):
        return f"Certificate {self.certificate_id} - {self.user.email}"
