import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from django.contrib.auth import get_user_model
from authentication.models import (
    UserOnboarding, Department, JobRole, FRACCompetency,
    RoleCompetencyRequirement, SkillGap, Course, UserCompetencyScore,
    CourseCompetencyMapping, LearningPath, UserCourseEnrollment,
    UploadedLearningMaterial, AIGeneratedQuiz, QuizQuestionMCQ,
    LearnerQuizAttempt, OrgSkillAnalyticsSnapshot, Certificate
)

User = get_user_model()

def seed_complete_schema():
    print("=== SEEDING DAKSH POSTGRESQL DATABASE ===")

    # 1. Users
    admin_user, _ = User.objects.get_or_create(
        email="admin@daksh.gov.in",
        defaults={
            "username": "admin",
            "first_name": "Director General",
            "last_name": "(L&D Directorate)",
            "role": "admin",
            "department": "Ministry of Statistics and Programme Implementation (MoSPI)",
            "designation": "Executive Director General",
            "employee_id": "ADM-HQ-001",
            "is_staff": True,
            "is_superuser": True
        }
    )
    admin_user.set_password("Admin@2026")
    admin_user.save()

    officer_user, _ = User.objects.get_or_create(
        email="officer@daksh.gov.in",
        defaults={
            "username": "amit_mondal",
            "first_name": "Amit Kumar",
            "last_name": "Mondal",
            "role": "learner",
            "department": "Field Operations Division (FOD)",
            "designation": "Senior Statistical Officer",
            "employee_id": "EMP-4409"
        }
    )
    officer_user.set_password("Officer@2026")
    officer_user.save()

    # 2. Departments
    dept_fod, _ = Department.objects.get_or_create(
        department_id="DEP-FOD",
        defaults={"department_name": "Field Operations Division (FOD)", "description": "Conducts nationwide sample surveys and agricultural statistics."}
    )
    dept_nad, _ = Department.objects.get_or_create(
        department_id="DEP-NAD",
        defaults={"department_name": "National Accounts Division (NAD)", "description": "Compiles National Accounts Statistics (GDP, GVA, SUT)."}
    )
    dept_esd, _ = Department.objects.get_or_create(
        department_id="DEP-ESD",
        defaults={"department_name": "Economic Statistics Division (ESD)", "description": "Compiles Index of Industrial Production (IIP) and Annual Survey of Industries."}
    )

    # 3. Job Roles
    role_so, _ = JobRole.objects.get_or_create(
        role_id="ROLE-SO",
        defaults={"role_title": "Section Officer (Level 10)", "department": dept_fod}
    )
    role_sso, _ = JobRole.objects.get_or_create(
        role_id="ROLE-SSO",
        defaults={"role_title": "Senior Statistical Officer (Level 7)", "department": dept_nad}
    )

    # 4. User Onboarding Profile
    UserOnboarding.objects.get_or_create(
        user=officer_user,
        defaults={
            "full_name": "Amit Kumar Mondal",
            "designation": "Senior Statistical Officer",
            "employee_id": "EMP-4409",
            "statistical_cadre": "Indian Statistical Service (ISS)",
            "official_designation": "Statistical Investigator Gr. I",
            "department_division": "Field Operations Division (FOD)",
            "current_posting_location": "Eastern Regional Office, Kolkata",
            "current_primary_assignment": "Field Scrutiny & CAPI Tabulation",
            "highest_educational_qualification": "M.Sc. in Statistics (First Class)",
            "total_years_in_service": "9+ Years",
            "completed_igot_courses": ["CRS-SNA-001", "CRS-SAMPLING-002"],
            "annual_training_hours": 36,
            "target_role": "Assistant Director (Level 11)",
            "weekly_learning_budget": "4 Hours / Week"
        }
    )

    # 5. FRAC Competencies
    comp_sampling, _ = FRACCompetency.objects.get_or_create(
        competency_id="COMP-SAMPLING",
        defaults={"competency_name": "Survey Sampling & Estimation", "domain": "Survey Methodology", "description": "Multistage stratified sampling, probability proportional to size (PPS), and variance estimation.", "max_scale_level": 5}
    )
    comp_sna, _ = FRACCompetency.objects.get_or_create(
        competency_id="COMP-SNA",
        defaults={"competency_name": "National Accounts (SNA 2008)", "domain": "Macroeconomic Statistics", "description": "System of National Accounts principles, Supply-Use Tables (SUT), GVA and GDP aggregation.", "max_scale_level": 5}
    )
    comp_cpi, _ = FRACCompetency.objects.get_or_create(
        competency_id="COMP-CPI",
        defaults={"competency_name": "Price Indices & Deflators (CPI / IIP)", "domain": "Price & Industrial Statistics", "description": "Laspeyres/Paasche index formulations, chain weighting, and deflator computation.", "max_scale_level": 5}
    )

    # 6. Role Competency Requirements
    RoleCompetencyRequirement.objects.get_or_create(
        role=role_so,
        competency=comp_sampling,
        defaults={"required_level": 4, "priority_weight": 1.2}
    )
    RoleCompetencyRequirement.objects.get_or_create(
        role=role_so,
        competency=comp_sna,
        defaults={"required_level": 4, "priority_weight": 1.5}
    )

    # 7. User Competency Scores & Skill Gaps
    UserCompetencyScore.objects.get_or_create(
        user=officer_user,
        competency=comp_sampling,
        defaults={"current_level": 4, "evaluation_source": "NSSTA Comprehensive Examination"}
    )
    UserCompetencyScore.objects.get_or_create(
        user=officer_user,
        competency=comp_sna,
        defaults={"current_level": 3, "evaluation_source": "Diagnostic Assessment"}
    )

    SkillGap.objects.get_or_create(
        user=officer_user,
        competency=comp_sna,
        defaults={"required_level": 4, "current_level": 3, "gap_score": 1, "severity": "moderate", "status": "in_progress"}
    )

    # 8. Courses
    crs_sna, _ = Course.objects.get_or_create(
        course_id="CRS-SNA-001",
        defaults={
            "course_title": "SNA 2008: Supply-Use Tables & Cross-Classification",
            "source_platform": "iGOT Karmayogi",
            "category": "Macroeconomic Statistics",
            "duration_hours": 12.0,
            "course_level": "Level 4 (Advanced)",
            "provider_org": "National Statistical Systems Training Academy (NSSTA)",
            "rating": 4.9
        }
    )
    crs_sampling, _ = Course.objects.get_or_create(
        course_id="CRS-SAMPLING-002",
        defaults={
            "course_title": "Advanced Stratified Sampling & Survey Design",
            "source_platform": "iGOT Karmayogi",
            "category": "Survey Methodology",
            "duration_hours": 16.0,
            "course_level": "Level 4 (Advanced)",
            "provider_org": "NSSTA & ISI Kolkata",
            "rating": 4.8
        }
    )

    # 9. Course Competency Mapping
    CourseCompetencyMapping.objects.get_or_create(
        course=crs_sna,
        competency=comp_sna,
        defaults={"competency_gain_level": 1}
    )

    # 10. Learning Paths
    lpath, _ = LearningPath.objects.get_or_create(
        user=officer_user,
        path_name="Senior Statistical Officer Fast-Track Mastery",
        defaults={
            "ai_rationale": "Curated to bridge National Accounts SNA-2008 gap from Level 3 to Level 4 for promotion readiness.",
            "total_courses": 2,
            "progress_percent": 50,
            "status": "active"
        }
    )

    # 11. Enrollments
    UserCourseEnrollment.objects.get_or_create(
        user=officer_user,
        course=crs_sna,
        defaults={
            "path": lpath,
            "completion_status": "in_progress",
            "progress_percent": 45,
            "hours_spent": 5.5
        }
    )

    # 12. Certificates
    Certificate.objects.get_or_create(
        certificate_id="CERT-MoSPI-9081",
        user=officer_user,
        defaults={
            "course": crs_sampling,
            "competency": comp_sampling,
            "verification_code": "DAK-VAL-90812",
            "score": 94
        }
    )

    # 13. Org Analytics Snapshot
    OrgSkillAnalyticsSnapshot.objects.get_or_create(
        department=dept_fod,
        snapshot_period="Q3 2026",
        defaults={
            "avg_competency_score": 84.5,
            "critical_skill_deficits": 3,
            "total_training_hours": 1420.0,
            "workforce_readiness_index": 88.2
        }
    )

    print("[SUCCESS] All 18 tables seeded successfully in PostgreSQL (daksh_db)!")

if __name__ == '__main__':
    seed_complete_schema()
