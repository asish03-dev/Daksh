import { createContext, useContext, useState, useEffect } from "react";
import { CheckCircle2, Info, AlertTriangle, X } from "lucide-react";
import {
  OFFICER_PROFILE, ADMIN_PROFILE, HARDCODED_OFFICERS, COMPETENCIES as INITIAL_COMPETENCIES,
  COURSES as INITIAL_COURSES
} from "../data/mockData";
import AuthModal from "../components/AuthModal";

const UserContext = createContext(null);

const DEFAULT_AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80"
];

export { DEFAULT_AVATARS };

const TOAST_ICONS = {
  success: <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />,
  info: <Info size={16} className="text-sky-400 shrink-0" />,
  warning: <AlertTriangle size={16} className="text-amber-400 shrink-0" />,
  error: <AlertTriangle size={16} className="text-red-400 shrink-0" />,
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("statsaarthi_user");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.email === "amit.mondal@railnet.gov.in" || parsed.name === "Amit Kumar Mondal") {
          return { ...HARDCODED_OFFICERS.amit_mondal, onboarded: true };
        }
        if (parsed.email === "suparna.chatterjee@statsaarthi.gov.in" || parsed.name === "Suparna Chatterjee") {
          return { ...HARDCODED_OFFICERS.suparna_chatterjee, onboarded: true };
        }
        return parsed;
      }
    } catch (e) {}
    return {
      ...HARDCODED_OFFICERS.amit_mondal,
      onboarded: true,
    };
  });

  const [activeOfficerKey, setActiveOfficerKey] = useState(() => {
    return user?.email?.includes("suparna") ? "suparna_chatterjee" : "amit_mondal";
  });

  const [competencies, setCompetencies] = useState(() => {
    try {
      const saved = localStorage.getItem("statsaarthi_competencies");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return INITIAL_COMPETENCIES;
  });

  const [courses, setCourses] = useState(() => {
    try {
      const saved = localStorage.getItem("statsaarthi_courses");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const existingIds = new Set(parsed.map((c) => c.id));
          const merged = [...parsed];
          for (const c of INITIAL_COURSES) {
            if (!existingIds.has(c.id)) {
              merged.push(c);
            }
          }
          return merged;
        }
      }
    } catch (e) {}
    return INITIAL_COURSES;
  });

  const [certificates, setCertificates] = useState(() => {
    try {
      const saved = localStorage.getItem("statsaarthi_certs");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [
      {
        id: "CERT-MoSPI-9081",
        title: "Civil Services Public Service Delivery & Statutory Governance Accreditation",
        competency: "Citizen Service Delivery & Public Administration",
        score: 94,
        issuedDate: "15 August 2026",
        verificationCode: "STA-VAL-90812",
      },
      {
        id: "CERT-MoSPI-9082",
        title: "Cyber Hygiene & CERT-In Incident Escalation Accreditation",
        competency: "Cyber Security, Data Privacy & CERT-In Mandates",
        score: 98,
        issuedDate: "28 August 2026",
        verificationCode: "STA-VAL-90818",
      }
    ];
  });

  const [toast, setToast] = useState(null);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("statsaarthi_user", JSON.stringify(user));
      localStorage.setItem("statsaarthi_competencies", JSON.stringify(competencies));
      localStorage.setItem("statsaarthi_courses", JSON.stringify(courses));
      localStorage.setItem("statsaarthi_certs", JSON.stringify(certificates));
    } catch (e) {}
  }, [user, competencies, courses, certificates]);

  const showToast = (message, type = "success") => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => setToast(null), 4000);
  };

  const login = (role = "learner", identifier = "") => {
    if (role === "admin" || identifier.toLowerCase().includes("admin")) {
      setUser({
        id: "ADM-9021",
        name: ADMIN_PROFILE.name,
        email: ADMIN_PROFILE.email,
        role: "admin",
        department: ADMIN_PROFILE.department,
        designation: ADMIN_PROFILE.designation,
        postingLocation: "Headquarters, New Delhi",
        avatar: DEFAULT_AVATARS[1],
        experience: "15+ Years",
        selectedSkills: ["National Accounts", "Survey Design", "Organizational Leadership"],
        weeklyCommitment: "Executive Review",
        skillReadiness: 94,
        onboarded: true,
      });
      showToast("Authenticated as Executive Administrator (DG Training)", "info");
    } else if (identifier.toLowerCase().includes("suparna")) {
      setUser({
        ...HARDCODED_OFFICERS.suparna_chatterjee,
        onboarded: true
      });
      setActiveOfficerKey("suparna_chatterjee");
      showToast("Welcome Section Officer Suparna Chatterjee!", "success");
    } else {
      // Default to Amit Kumar Mondal
      setUser({
        ...HARDCODED_OFFICERS.amit_mondal,
        onboarded: true
      });
      setActiveOfficerKey("amit_mondal");
      showToast("Welcome Ticket Examiner Amit Kumar Mondal!", "success");
    }
  };

  const switchOfficer = (officerKey) => {
    if (officerKey === "suparna_chatterjee") {
      setUser({ ...HARDCODED_OFFICERS.suparna_chatterjee, onboarded: true });
      setActiveOfficerKey("suparna_chatterjee");
      showToast("Switched active view to Suparna Chatterjee (Section Officer)", "info");
    } else if (officerKey === "amit_mondal") {
      setUser({ ...HARDCODED_OFFICERS.amit_mondal, onboarded: true });
      setActiveOfficerKey("amit_mondal");
      showToast("Switched active view to Amit Kumar Mondal (Ticket Examiner)", "info");
    }
  };

  const addPathwayToLearningHub = (pathway) => {
    if (!pathway || !pathway.id) return;
    setCourses((prev) => {
      const exists = prev.some((c) => c.id === pathway.id);
      if (exists) {
        return prev.map((c) => c.id === pathway.id ? { ...c, status: "in_progress", progress: 15 } : c);
      }
      return [
        {
          id: pathway.id,
          title: pathway.title,
          provider: pathway.provider,
          hours: pathway.hours,
          progress: 10,
          status: "in_progress",
          category: "iGOT Karmayogi Bharat",
          summary: pathway.targetedGap || "Curated statutory learning pathway for assessed competency deficit."
        },
        ...prev
      ];
    });
    showToast(`Added "${pathway.title}" to active Learning Hub roadmap!`, "success");
  };

  const signup = ({ role = "learner", email = "", name = "" }) => {
    setUser({
      id: `EMP-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name || "Officer Candidate",
      email: email || "officer@statsaarthi.gov.in",
      role: role,
      employeeId: `EMP-${Math.floor(1000 + Math.random() * 9000)}`,
      cadre: "Civil Services Cadre",
      officialDesignation: "Probationary Officer",
      designation: "Probationary Officer",
      department: "Ministry Operations",
      postingLocation: "Headquarters",
      primaryAssignment: "Administration & Field Scrutiny",
      qualification: "Bachelor's Degree",
      serviceTenure: "1 Year",
      completedCourseIds: [],
      annualTrainingHours: 20,
      avatar: DEFAULT_AVATARS[0],
      targetRole: "Section Officer (Level 10)",
      weeklyLearningBudget: "4 Hours / Week",
      weeklyHoursLogged: 0,
      streakDays: 1,
      selectedSkills: ["e-Office", "Cyber Hygiene"],
      skillReadiness: 60,
      onboarded: true,
    });
    showToast("Officer profile created successfully!", "success");
  };

  const updateProfile = (data) => {
    setUser((prev) => ({ ...prev, ...data, onboarded: true }));
    if (data.completedCourseIds && Array.isArray(data.completedCourseIds)) {
      setCourses((prev) =>
        prev.map((c) =>
          data.completedCourseIds.includes(c.id)
            ? { ...c, status: "completed", progress: 100, completedDate: "Prior Certified" }
            : c
        )
      );
    }
    showToast("Profile and competency targets synchronized!", "success");
  };

  const enrollCourse = (courseId) => {
    setCourses((prev) => prev.map((c) => c.id === courseId ? { ...c, status: "in_progress", progress: 20 } : c));
    const crs = courses.find((c) => c.id === courseId);
    showToast(`Enrolled in "${crs?.title || "Course"}". Added to active curriculum.`, "success");
  };

  const passQuiz = (quizTitle, competencyName, score = 90, competencyCode = "") => {
    const compName = competencyName || quizTitle || "Statistical Competency";
    setCompetencies((prev) =>
      prev.map((c) => {
        if (
          (competencyCode && c.code === competencyCode) ||
          (competencyName && c.name?.toLowerCase() === competencyName.toLowerCase()) ||
          c.name?.toLowerCase().includes(compName.toLowerCase()) ||
          compName.toLowerCase().includes(c.name?.toLowerCase())
        ) {
          const nextLevel = Math.min(5, c.currentLevel + 1);
          return { ...c, currentLevel: nextLevel, status: nextLevel >= c.requiredLevel ? "mastered" : "in_progress" };
        }
        return c;
      })
    );

    const newCert = {
      id: `CERT-${Math.floor(1000 + Math.random() * 9000)}`,
      title: `${compName} Mastery Certificate`,
      competency: compName,
      score: score,
      issuedDate: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" }),
      verificationCode: `STA-VAL-${Math.floor(10000 + Math.random() * 90000)}`,
    };
    setCertificates((prev) => [newCert, ...prev]);
    setUser((prev) => ({ ...prev, skillReadiness: Math.min(100, prev.skillReadiness + 5) }));
    showToast(`Assessment completed (${score}%). ${compName} leveled up!`, "success");
  };

  const [authModalState, setAuthModalState] = useState({
    isOpen: false,
    role: "learner",
    isSignup: false,
  });

  const openAuthModal = (role = "learner", isSignup = false) => {
    setAuthModalState({ isOpen: true, role, isSignup });
  };

  const closeAuthModal = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const logout = () => {
    try {
      localStorage.removeItem("statsaarthi_user");
      localStorage.removeItem("statsaarthi_competencies");
      localStorage.removeItem("statsaarthi_courses");
      localStorage.removeItem("statsaarthi_certs");
      localStorage.removeItem("statsaarthi_onboarding_step");
    } catch (e) {}
    setUser(null);
    setActiveOfficerKey("amit_mondal");
    showToast("Signed out successfully.", "info");
  };

  return (
    <UserContext.Provider
      value={{
        user, activeOfficerKey, competencies, courses, certificates, toast,
        authModalState, openAuthModal, closeAuthModal,
        login, signup, switchOfficer, addPathwayToLearningHub, updateProfile,
        enrollCourse, passQuiz, showToast, logout,
      }}
    >
      {children}

      {/* Global Auth Modal Popup */}
      <AuthModal
        isOpen={authModalState.isOpen}
        initialRole={authModalState.role}
        initialIsSignup={authModalState.isSignup}
        onClose={closeAuthModal}
      />

      {/* Global Toast */}
      {toast && (
        <div
          key={toast.id}
          className="fixed bottom-5 right-5 z-[9999] max-w-sm"
          style={{ animation: "toastIn 0.25s ease-out both" }}
          role="alert"
          aria-live="polite"
        >
          <div
            className="flex items-start gap-3 px-4 py-3.5 rounded-xl text-sm font-medium"
            style={{
              background: "#0F1117",
              border: "1px solid rgba(13,148,136,0.35)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              color: "#F1F5F9",
            }}
          >
            {TOAST_ICONS[toast.type] || TOAST_ICONS.success}
            <span className="flex-1 leading-snug">{toast.message}</span>
            <button
              onClick={() => setToast(null)}
              aria-label="Dismiss notification"
              className="text-slate-400 hover:text-slate-200 transition-colors ml-1 shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
}
