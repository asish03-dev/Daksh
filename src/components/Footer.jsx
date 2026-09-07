import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const PLATFORM_LINKS = ["Member Portal", "Executive Console", "SETU", "Recommended Tracks", "Competency Diagnostics"];
const RESOURCE_LINKS = ["Documentation", "Statistical Framework", "Assessment Guidelines", "Knowledge Base", "Support"];

export default function Footer() {
  const { t } = useTheme();

  return (
    <footer className="bg-white dark:bg-canvas-card-dark text-slate-500 dark:text-slate-400 mt-auto border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-3 group" aria-label="DAKSH home">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:bg-primary-hover transition-colors">
                D
              </div>
              <span className="text-slate-900 dark:text-white font-extrabold text-base tracking-tight">DAKSH</span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
              DAKSH — AI-Powered Competency Intelligence & Assessment Platform with SETU. Designed for continuous statistical upskilling, automated scrutiny, and source-grounded capability benchmarking.
            </p>
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {["National Standards", "Encrypted Architecture", "Grounded AI"].map((label) => (
                <span
                  key={label}
                  className="text-2xs px-2.5 py-1 rounded-lg font-bold bg-canvas dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Platform links */}
          <div>
            <p className="text-2xs font-bold uppercase tracking-widest text-primary mb-3.5">Platform</p>
            <ul className="space-y-2 text-xs font-semibold">
              {PLATFORM_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    to="/login"
                    className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource links */}
          <div>
            <p className="text-2xs font-bold uppercase tracking-widest text-orange mb-3.5">Resources</p>
            <ul className="space-y-2 text-xs font-semibold">
              {RESOURCE_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-600 dark:text-slate-400 hover:text-orange dark:hover:text-orange transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-2xs text-slate-400 border-t border-slate-200 dark:border-slate-800">
          <span>StatSaarthi — Official Workforce Competency Intelligence & Assessment System</span>
          <span>Role-Based Framework · Continuous Upskilling · Source-Verified Learning Paths</span>
        </div>
      </div>
    </footer>
  );
}
