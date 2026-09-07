import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Shield, KeyRound, Lock, ArrowRight, ShieldCheck, AlertCircle, ArrowLeft, Sun, Moon } from "lucide-react";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";

export default function SSOVerify() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, showToast } = useUser();
  const { isDark, toggleTheme, t } = useTheme();

  const [employeeId, setEmployeeId] = useState("EMP-2024-8842");
  const [password, setPassword] = useState("••••••••");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    if (!employeeId.trim()) {
      setError("Please provide a valid Institutional Employee ID");
      return;
    }
    if (!password.trim()) {
      setError("Please enter your Gateway credentials");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      login("learner", `${employeeId.toLowerCase()}@statsaarthi.gov.in`);
      showToast("SSO Verification Successful. Session established.", "success");
      navigate("/officer");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-canvas dark:bg-canvas-dark flex flex-col justify-between relative overflow-hidden text-slate-800 dark:text-slate-100 transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-canvas-card-dark border-b border-slate-200 dark:border-slate-800 relative z-10">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">
            D
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">DAKSH</span>
            <span className="text-2xs text-primary font-medium tracking-wide">National Gateway Verification</span>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            {isDark ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} />}
          </button>
          <Link to="/login" className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors">
            <ArrowLeft size={14} /> {t("btn_back") || "Back"}
          </Link>
        </div>
      </header>

      {/* Main Verification Card */}
      <main className="flex flex-1 items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-md bg-white dark:bg-canvas-card-dark border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-7">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary mx-auto flex items-center justify-center mb-4">
              <Shield size={28} />
            </div>
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t("sso_title") || "Parichay National SSO Gateway"}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {t("sso_subtitle") || "Single Sign-On authentication for verified central and state personnel"}
            </p>
          </div>

          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 flex items-center gap-2 text-xs text-red-700 dark:text-red-300">
              <AlertCircle size={16} className="text-red-500 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {t("sso_empid_label") || "Institutional Employee ID / PRAN"}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  placeholder={t("sso_empid_placeholder") || "e.g. EMP-2024-8842"}
                  className="input-field pl-10"
                />
                <KeyRound size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                {t("sso_password_label") || "Gateway Password / Token"}
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-field pl-10"
                />
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div className="p-3.5 bg-canvas dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-start gap-2.5 text-2xs text-slate-500 dark:text-slate-400 mt-2">
              <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{t("sso_security_notice") || "256-bit encrypted authentication session compliant with DPDP standards."}</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 text-xs font-bold mt-4 shadow-md shadow-orange/20"
            >
              {loading ? (
                <span>Verifying Credentials...</span>
              ) : (
                <span className="flex items-center justify-center gap-1.5">
                  <span>{t("btn_verify_continue") || "Authenticate & Open Dashboard"}</span>
                  <ArrowRight size={15} />
                </span>
              )}
            </button>
          </form>
        </div>
      </main>

      <footer className="text-center py-4 text-2xs text-slate-400 border-t border-slate-200 dark:border-slate-800">
        DAKSH · National Single Sign-On Gateway Parichay Integration
      </footer>
    </div>
  );
}
