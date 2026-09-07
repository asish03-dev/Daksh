import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Eye, EyeOff, ShieldCheck, Mail, Lock, User,
  Building, X, ArrowRight, ShieldAlert, CheckCircle2, Sparkles, ArrowLeft, KeyRound
} from "lucide-react";
import { LoadingSpinner } from "./ui";
import { useUser } from "../context/UserContext";
import { BRAND_CONFIG } from "../config/branding";

export default function AuthModal({
  isOpen,
  initialRole = "learner",
  initialIsSignup = false,
  onClose
}) {
  const navigate = useNavigate();
  const { login, signup, showToast } = useUser();

  const [role, setRole] = useState(initialRole); // 'learner' | 'admin'
  const [isSignup, setIsSignup] = useState(initialIsSignup);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ssoView, setSsoView] = useState(false); // Parichay SSO Gateway View

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const passwordVal = watch("password");

  if (!isOpen) return null;

  const handleClose = () => {
    reset();
    setSsoView(false);
    onClose?.();
  };

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      handleClose();

      if (role === "admin") {
        login("admin", data.adminId || "ADM-HQ-001");
        navigate("/admin");
      } else {
        if (isSignup) {
          signup({
            role: "learner",
            name: data.name || data.fullName || "",
            email: data.email || "",
            department: ""
          });
          navigate("/onboarding");
        } else {
          login("learner", data.email || "priya.sharma@statsaarthi.gov.in");
          navigate("/officer");
        }
      }
    }, 600);
  };

  const onSsoSubmit = (data) => {
    setLoading(true);
    showToast("Authenticating credentials with Jan Parichay National SSO Gateway...", "info");
    setTimeout(() => {
      setLoading(false);
      handleClose();
      login("learner", data.ssoId || "priya.sharma@statsaarthi.gov.in");
      navigate("/officer");
    }, 750);
  };

  return (
    <div
      className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden transition-all my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ========================================================================= */}
        {/* 1. PARICHAY NATIONAL SSO GATEWAY SCREEN (POPS UP ON CLICKING SSO)         */}
        {/* ========================================================================= */}
        {ssoView ? (
          <div className="p-6 sm:p-7 space-y-5 animate-fadeIn">
            {/* Parichay Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setSsoView(false)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-2xs font-extrabold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
                  NIC SSO Live
                </span>
              </div>

              <button
                onClick={handleClose}
                className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 flex items-center justify-center cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 mx-auto flex items-center justify-center shadow-sm mb-2">
                <ShieldCheck size={26} />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                Jan Parichay • National SSO
              </h3>
              <p className="text-xs text-slate-500">
                Single Sign-On Authentication for Ministry Officials
              </p>
            </div>

            <form onSubmit={handleSubmit(onSsoSubmit)} className="space-y-3.5 pt-1">
              <div>
                <label className="block text-2xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Parichay / e-Pramaan ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    {...register("ssoId", { required: "Parichay ID is required" })}
                    placeholder="Enter your Parichay / Gov ID"
                    className="input-field text-xs pl-8 font-medium"
                    autoFocus
                  />
                  <User size={14} className="absolute left-2.5 top-3 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-2xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Parichay Password / Security PIN
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("ssoPassword", { required: "Password is required" })}
                    placeholder="Enter your Parichay password"
                    className="input-field text-xs pl-8 pr-8 font-medium"
                  />
                  <Lock size={14} className="absolute left-2.5 top-3 text-slate-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 mt-4 transition-all cursor-pointer"
              >
                {loading ? <LoadingSpinner size="sm" /> : <><ShieldCheck size={15} /> Authenticate with Jan Parichay</>}
              </button>
            </form>
          </div>
        ) : (
          /* ========================================================================= */
          /* 2. STANDARD MODAL (OFFICER / ADMIN TABS WITH EMPTY BOXES)                 */
          /* ========================================================================= */
          <>
            {/* TOP MODAL HEADER */}
            <div className="px-6 pt-5 pb-3 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <img
                  src="/assets/daksh-logo.png"
                  alt="DAKSH"
                  className="h-7 w-auto object-contain brightness-100 dark:brightness-110"
                />
                <div>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Official Ministry Access Portal
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* ROLE SWITCHER: OFFICER PORTAL vs ADMIN PORTAL */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { setRole("learner"); }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    role === "learner"
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300"
                  }`}
                >
                  <User size={14} />
                  <span>Officer Portal</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setRole("admin"); setIsSignup(false); }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    role === "admin"
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300"
                  }`}
                >
                  <ShieldCheck size={14} />
                  <span>Admin Portal</span>
                </button>
              </div>

              {/* 1-CLICK QUICK DEMO TEST PROFILES */}
              <div>
                <p className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 text-center">
                  ⚡ 1-Click Demo Profiles (For Instant Evaluation)
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      login("learner", "amit.mondal@railnet.gov.in");
                      handleClose();
                      navigate("/officer");
                    }}
                    className="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-[11px] font-bold hover:bg-teal-100 transition-all cursor-pointer"
                    title="Login as Frontline Officer (FOD)"
                  >
                    👤 Amit Mondal (FOD)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      login("learner", "suparna.chatterjee@statsaarthi.gov.in");
                      handleClose();
                      navigate("/officer");
                    }}
                    className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-[11px] font-bold hover:bg-indigo-100 transition-all cursor-pointer"
                    title="Login as Section Officer (NAD)"
                  >
                    👤 Suparna Chatterjee (NAD)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      login("admin", "admin@statsaarthi.gov.in");
                      handleClose();
                      navigate("/admin");
                    }}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-[11px] font-bold hover:bg-slate-200 transition-all cursor-pointer"
                    title="Login as DG Training Administrator"
                  >
                    🛡️ DG Admin
                  </button>
                </div>
              </div>
            </div>

            {/* OFFICER TABS: SIGN IN vs CREATE ACCOUNT */}
            {role === "learner" && (
              <div className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <button
                  type="button"
                  onClick={() => setIsSignup(false)}
                  className={`flex-1 py-3 text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    !isSignup
                      ? "text-primary border-b-2 border-primary bg-primary/5"
                      : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setIsSignup(true)}
                  className={`flex-1 py-3 text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    isSignup
                      ? "text-primary border-b-2 border-primary bg-primary/5"
                      : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  }`}
                >
                  Create Account
                </button>
              </div>
            )}

            {/* FORM BODY */}
            <div className="p-5 sm:p-6 space-y-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
                {/* ------------------------------------------------------------- */}
                {/* ADMIN FORM: EMPTY BOXES WITH PLACEHOLDERS                     */}
                {/* ------------------------------------------------------------- */}
                {role === "admin" && (
                  <>
                    <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center gap-2.5 text-xs text-blue-900 dark:text-blue-200 mb-2">
                      <ShieldCheck size={18} className="text-blue-700 dark:text-blue-400 shrink-0" />
                      <span>MoSPI Administrative & L&D Directorate Access</span>
                    </div>

                    <div>
                      <label className="block text-2xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Admin ID
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          {...register("adminId", { required: "Admin ID is required" })}
                          placeholder="admin@statsaarthi.gov.in"
                          defaultValue="admin@statsaarthi.gov.in"
                          className="input-field text-xs pl-8 font-medium font-mono"
                        />
                        <KeyRound size={14} className="absolute left-2.5 top-3 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-2xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Admin Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          {...register("adminPassword", { required: "Password is required" })}
                          placeholder="Admin@2026"
                          defaultValue="Admin@2026"
                          className="input-field text-xs pl-8 pr-8 font-medium"
                        />
                        <Lock size={14} className="absolute left-2.5 top-3 text-slate-400" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full text-xs py-2.5 font-bold shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer"
                    >
                      {loading ? <LoadingSpinner size="sm" /> : <><ShieldCheck size={14} /> Access Admin Console</>}
                    </button>
                  </>
                )}

                {/* ------------------------------------------------------------- */}
                {/* OFFICER SIGN IN FORM: EMPTY BOXES WITH PLACEHOLDERS           */}
                {/* ------------------------------------------------------------- */}
                {role === "learner" && !isSignup && (
                  <>
                    <div>
                      <label className="block text-2xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Official Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          {...register("email", { required: "Email is required" })}
                          placeholder="Enter your email"
                          className="input-field text-xs pl-8 font-medium"
                        />
                        <Mail size={14} className="absolute left-2.5 top-3 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-2xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={() => showToast("Password reset instructions sent to your official email.", "info")}
                          className="text-[11px] text-orange hover:underline font-semibold"
                        >
                          Forgot password?
                        </button>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          {...register("password", { required: "Password is required" })}
                          placeholder="Enter your password"
                          className="input-field text-xs pl-8 pr-8 font-medium"
                        />
                        <Lock size={14} className="absolute left-2.5 top-3 text-slate-400" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full text-xs py-2.5 font-bold shadow-md flex items-center justify-center gap-2 mt-3 cursor-pointer"
                    >
                      {loading ? <LoadingSpinner size="sm" /> : <><ArrowRight size={14} /> Sign In to Officer Portal</>}
                    </button>
                  </>
                )}

                {/* ------------------------------------------------------------- */}
                {/* OFFICER CREATE ACCOUNT FORM: (NO NAME, WITH CONFIRM PASSWORD) */}
                {/* ------------------------------------------------------------- */}
                {role === "learner" && isSignup && (
                  <>
                    <div>
                      <label className="block text-2xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Official NIC / MoSPI Email
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          {...register("email", { required: "Official email is required" })}
                          placeholder="Enter your email"
                          className="input-field text-xs pl-8 font-medium"
                        />
                        <Mail size={14} className="absolute left-2.5 top-3 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-2xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          {...register("password", { required: "Password is required" })}
                          placeholder="Enter your password"
                          className="input-field text-xs pl-8 pr-8 font-medium"
                        />
                        <Lock size={14} className="absolute left-2.5 top-3 text-slate-400" />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600"
                        >
                          {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-2xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (val) => val === passwordVal || "Passwords do not match"
                          })}
                          placeholder="Confirm your password"
                          className="input-field text-xs pl-8 pr-8 font-medium"
                        />
                        <Lock size={14} className="absolute left-2.5 top-3 text-slate-400" />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-600"
                        >
                          {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-[10px] text-red-500 mt-1 font-semibold">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full text-xs py-2.5 font-bold shadow-md flex items-center justify-center gap-2 mt-3 cursor-pointer"
                    >
                      {loading ? <LoadingSpinner size="sm" /> : <><Sparkles size={14} /> Create Officer Account</>}
                    </button>
                  </>
                )}
              </form>

              {/* PARICHAY SSO BUTTON AT THE BOTTOM */}
              {role === "learner" && (
                <div className="pt-2">
                  <div className="relative my-3 text-center">
                    <hr className="border-slate-200 dark:border-slate-800" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-white dark:bg-slate-900 px-3 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      or government single sign-on
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSsoView(true)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/80 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all shadow-xs cursor-pointer"
                  >
                    <ShieldCheck size={16} className="text-blue-600 dark:text-blue-400" />
                    <span>Sign in with Parichay (National SSO)</span>
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
