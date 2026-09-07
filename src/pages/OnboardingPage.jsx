import { useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User, Check, ArrowRight, Sparkles, Building, Briefcase,
  MapPin, Camera, X, Sun, Moon, CheckSquare, ShieldCheck
} from "lucide-react";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";
import SearchableCombobox from "../components/SearchableCombobox";
import {
  CENTRAL_MINISTRIES_AND_DEPARTMENTS,
  SUBORDINATE_ORGANISATIONS_CATALOG,
  ALL_CIVIL_SERVICE_DESIGNATIONS_CATALOG
} from "../data/igotMasterData";

// -------------------------------------------------------------------------
// MASTER DATA FOR ONBOARDING
// -------------------------------------------------------------------------
const STATISTICAL_CADRES = [
  // Central Statistical & Economic Services
  { label: "Indian Statistical Service (ISS - Group A)", category: "Central Civil Services", badge: "Group A" },
  { label: "Subordinate Statistical Service (SSS - Group B)", category: "Central Civil Services", badge: "Group B" },
  { label: "Indian Economic Service (IES - Group A)", category: "Central Civil Services", badge: "Group A" },
  { label: "Field Operations Division (NSSO / FOD Cadre)", category: "MoSPI Field Operations", badge: "Field Ops" },
  { label: "National Statistical Systems Training Academy (NSSTA Cadre)", category: "Academic & Training", badge: "NSSTA" },
  { label: "Survey Design & Research Division (SDRD / SDC Cadre)", category: "Survey Methodology", badge: "SDRD" },
  { label: "Data Quality & Informatics Division (DQAD Cadre)", category: "Data Architecture", badge: "Informatics" },
  { label: "National Accounts Division (NAD Cadre)", category: "Macroeconomic Statistics", badge: "NAD" },
  { label: "Price Statistics Division (PSD Cadre)", category: "Price Indices", badge: "PSD" },

  // Central Secretariat & Digital India Services
  { label: "Central Secretariat Service (CSS / CSSS)", category: "Central Secretariat", badge: "Civil Service" },
  { label: "National Informatics Centre (NIC / IT & Analytics Cadre)", category: "Digital India / MeitY", badge: "IT & AI" },
  { label: "Indian Information Service (IIS - Dissemination)", category: "Media & Dissemination", badge: "Group A" },
  { label: "Central Engineering & Spatial GIS Technical Cadre", category: "Technical & Spatial", badge: "GIS" },
  { label: "Ministry Planning & Monitoring Division (PMD)", category: "Policy & Planning", badge: "Planning" },

  // State Government Statistical & Planning Services (DES)
  { label: "State Directorate of Economics & Statistics (State DES)", category: "State Statistical Cadre", badge: "State Bureau" },
  { label: "District Statistical & Planning Cadre (DSO / DPO)", category: "State Statistical Cadre", badge: "District Level" },
  { label: "State Civil / Administrative Services (SCS)", category: "State Administration", badge: "State Service" },
  { label: "State Survey & Revenue Enumeration Cadre", category: "State Revenue", badge: "Survey" },

  // Statutory, Banking & Autonomous Research Bodies
  { label: "Indian Statistical Institute (ISI Research Cadre)", category: "Statutory & Academic", badge: "Research" },
  { label: "Reserve Bank of India (RBI / DSIM Statistical Cadre)", category: "Banking & Finance", badge: "RBI" },
  { label: "SEBI / NABARD Economic Research & Analytics Cadre", category: "Financial Regulatory", badge: "Analytics" },
  { label: "NITI Aayog Development & Monitoring Evaluation Office (DMEO)", category: "Public Policy", badge: "NITI" },
  { label: "Public Sector Enterprise (PSU Data Analytics Cadre)", category: "Public Sector", badge: "PSU" },
  { label: "National Sample Survey Zonal Cadre (Regional)", category: "Field Cadre", badge: "Zonal" }
];

const POSTING_LOCATIONS = [
  { label: "New Delhi (Headquarters / Sardar Patel Bhawan)", category: "National HQ" },
  { label: "Kolkata (Regional Center / Mahalanobis Bhawan)", category: "Eastern Hub" },
  { label: "Mumbai (Zonal Center / Konkan Hub)", category: "Western Hub" },
  { label: "Chennai (Regional Office / Southern Hub)", category: "Southern Hub" },
  { label: "Bengaluru (Regional Office / Tech Cell)", category: "Southern Hub" },
  { label: "Hyderabad (Regional Office / Telangana Cell)", category: "Southern Hub" },
  { label: "Jaipur (Field Office / Western Zone)", category: "Northern Hub" },
  { label: "Nagpur (Sub-Division / Central Hub)", category: "Central Hub" },
  { label: "Guwahati (North Eastern Zonal Office)", category: "North East" },
  { label: "Lucknow (State Directorate / UP Hub)", category: "Northern Hub" },
  { label: "Patna (Regional Center / Bihar Hub)", category: "Eastern Hub" },
  { label: "Bhubaneswar (Regional Center / Odisha Hub)", category: "Eastern Hub" },
  { label: "Ahmedabad (Regional Office / Gujarat Hub)", category: "Western Hub" },
  { label: "Chandigarh (Regional Center / Punjab & Haryana)", category: "Northern Hub" }
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isEditMode = searchParams.get("mode") === "edit";

  const { user, updateProfile, showToast } = useUser();
  const { isDark, toggleTheme } = useTheme();
  const fileInputRef = useRef(null);

  // Form State (Clean Initial Empty State)
  const [formData, setFormData] = useState({
    name: user?.name || "",
    employeeId: user?.employeeId || "",
    cadre: user?.cadre || "",
    officialDesignation: user?.officialDesignation || user?.designation || "",
    designation: user?.designation || "",
    ministry: user?.ministry || "",
    department: user?.department || "",
    organisation: user?.organisation || "",
    postingLocation: user?.postingLocation || "",
    avatar: user?.avatar || "",
    verifiedServiceRecords: true
  });

  // Photo Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
        showToast("Official passport photo uploaded!", "success");
      };
      reader.readAsDataURL(file);
    }
  };

  // Save & Exit (Interim Save)
  const handleSaveAndExit = () => {
    updateProfile(formData);
    showToast("Profile draft saved successfully!", "success");
    navigate("/officer");
  };

  // Complete Onboarding and Navigate to Officer Dashboard
  const handleCompleteOnboarding = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.employeeId.trim() || !formData.cadre || !formData.officialDesignation) {
      showToast("Please fill in all mandatory fields (Name, Employee ID, Cadre, Designation).", "error");
      return;
    }

    updateProfile({
      ...formData,
      designation: formData.officialDesignation,
      onboardingCompleted: true
    });

    showToast("Officer deployment profile configured successfully! Welcome to DAKSH.", "success");
    navigate("/officer");
  };

  const getInitials = (n) => {
    if (!n) return "OF";
    const parts = n.split(" ").filter(Boolean);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return n.slice(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-canvas-dark text-slate-900 dark:text-slate-100 flex flex-col justify-between font-sans transition-colors duration-200">
      {/* TOP GOVERNMENT APP BAR */}
      <header className="w-full bg-white dark:bg-canvas-card-dark border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-40 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center font-black text-sm shadow-md">
            D
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white">
                DAKSH
              </span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-primary text-white">
                MoSPI
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              National Statistical Learning & Competency Governance Portal
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary transition-all cursor-pointer"
            title="Toggle Dark / Light Theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={handleSaveAndExit}
            className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer hidden sm:block"
          >
            Save & Exit
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="max-w-3xl w-full mx-auto px-4 py-8 sm:py-10 flex-1 flex flex-col justify-center">
        {/* OFFICER ONBOARDING CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card bg-white dark:bg-canvas-card-dark rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 text-left"
        >
          {/* Header */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-primary text-white mb-2 inline-block">
              Officer Registration
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Officer Cadre & Deployment Profile
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Configure your official MoSPI / Civil Service deployment details to calibrate your personalized learning environment.
            </p>
          </div>

          <form onSubmit={handleCompleteOnboarding} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Officer Full Name */}
              <div>
                <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Officer Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field text-xs font-semibold"
                />
              </div>

              {/* Employee ID */}
              <div>
                <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Employee / Cadre ID *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter employee / cadre ID"
                  value={formData.employeeId}
                  onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                  className="input-field text-xs font-mono font-semibold"
                />
              </div>

              {/* Service Group / Statistical Cadre */}
              <div>
                <SearchableCombobox
                  label="Statistical Cadre / Service Group"
                  value={formData.cadre}
                  onChange={(val) => setFormData({ ...formData, cadre: val })}
                  options={STATISTICAL_CADRES}
                  placeholder="Select cadre..."
                  searchPlaceholder="Search cadre"
                  allowCustom={true}
                  required={true}
                  helperText="Official Central / State service cadre."
                />
              </div>

              {/* Official Designation (250+ Exhaustive Database) */}
              <div>
                <SearchableCombobox
                  label="Designation"
                  value={formData.officialDesignation}
                  onChange={(val) => setFormData({ ...formData, officialDesignation: val, designation: val })}
                  options={ALL_CIVIL_SERVICE_DESIGNATIONS_CATALOG}
                  placeholder="Select designation"
                  searchPlaceholder="Search designation"
                  allowCustom={true}
                  required={true}
                />
              </div>

              {/* Ministry / Department (150+ Exhaustive Database) */}
              <div>
                <SearchableCombobox
                  label="Ministry / Department"
                  value={formData.ministry || formData.department}
                  onChange={(val) => setFormData({ ...formData, ministry: val, department: val })}
                  options={CENTRAL_MINISTRIES_AND_DEPARTMENTS}
                  placeholder="Select ministry"
                  searchPlaceholder="Search ministry"
                  allowCustom={true}
                  required={true}
                />
              </div>

              {/* Subordinate Organisation / Directorate */}
              <div>
                <SearchableCombobox
                  label="Organisation"
                  value={formData.organisation}
                  onChange={(val) => setFormData({ ...formData, organisation: val })}
                  options={SUBORDINATE_ORGANISATIONS_CATALOG}
                  placeholder="Select organisation"
                  searchPlaceholder="Search organisation"
                  allowCustom={true}
                  required={true}
                />
              </div>

              {/* Current Posting Location */}
              <div className="sm:col-span-2">
                <SearchableCombobox
                  label="Current Posting Location"
                  value={formData.postingLocation}
                  onChange={(val) => setFormData({ ...formData, postingLocation: val })}
                  options={POSTING_LOCATIONS}
                  placeholder="Select location..."
                  searchPlaceholder="Search location"
                  allowCustom={true}
                  required={true}
                />
              </div>
            </div>

            {/* Photo Upload Section */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center gap-4">
              <div className="relative shrink-0">
                {formData.avatar ? (
                  <img
                    src={formData.avatar}
                    alt={formData.name || "Officer"}
                    className="w-16 h-16 rounded-2xl object-cover shadow-md border border-slate-200 dark:border-slate-700"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary dark:text-teal-400 flex items-center justify-center font-black text-xl shadow-md">
                    {getInitials(formData.name)}
                  </div>
                )}
                {formData.avatar && (
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, avatar: "" })}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer shadow-md"
                    title="Remove Photo"
                  >
                    <X size={10} strokeWidth={3} />
                  </button>
                )}
              </div>

              <div className="space-y-1 text-center sm:text-left flex-1">
                <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Official Passport Photo (Optional)
                </h4>
                <p className="text-2xs text-slate-500 dark:text-slate-400">
                  Upload official JPEG/PNG photo or use generated Gov initials badge.
                </p>
                <div className="pt-0.5">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-canvas-card-dark border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-primary flex items-center gap-1.5 cursor-pointer shadow-xs inline-flex"
                  >
                    <Camera size={13} className="text-primary" />
                    <span>{formData.avatar ? "Change Photo" : "Upload Photo"}</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={handleSaveAndExit}
                className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <CheckSquare size={14} />
                <span>Save Draft</span>
              </button>

              <button
                type="submit"
                className="btn-primary px-8 py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-xl hover:scale-102 transition-transform cursor-pointer"
              >
                <span>Complete Profile & Enter Dashboard</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="w-full py-4 text-center text-2xs text-slate-400 dark:text-slate-500 border-t border-slate-200/60 dark:border-slate-800/60">
        DAKSH • National Statistical System Capacity Building & Governance
      </footer>
    </div>
  );
}
