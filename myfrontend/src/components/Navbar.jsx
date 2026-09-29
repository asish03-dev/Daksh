import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Sun, Moon, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
import { BRAND_CONFIG } from "../config/branding";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme, lang, toggleLang, t } = useTheme();
  const { openAuthModal } = useUser();

  const NAV_LINKS = [
    { label: t("nav_platform") || "Platform", href: "/" },
    { label: t("nav_features") || "Features", href: "/#features" },
    { label: t("nav_workflow") || "Workflow", href: "/#workflow" },
  ];

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6 w-full max-w-7xl mx-auto pointer-events-none">
      {/* Floating Island Navigation Container */}
      <div className="pointer-events-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-island dark:shadow-island-dark transition-all duration-200 px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group select-none"
            aria-label="Home"
          >
            <img
              src="/assets/daksh-logo.png"
              alt="DAKSH"
              className="h-8 w-auto object-contain brightness-100 dark:brightness-110 group-hover:scale-102 transition-transform"
            />
            <div className="flex flex-col leading-tight">
              <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-primary/10 text-primary dark:text-teal-400 border border-primary/20 self-start">
                MOSPI AI
              </span>
              <span className="text-2xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                {BRAND_CONFIG.platformTitle}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav
            className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/60 p-1 rounded-xl border border-slate-200/50 dark:border-slate-700/50"
            aria-label="Site navigation"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = location.pathname === href;
              return (
                <a
                  key={label}
                  href={href}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-all duration-150 ${
                    isActive
                      ? "bg-white dark:bg-slate-900 text-primary dark:text-teal-400 shadow-sm"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Switcher (EN / हिन्दी) */}
            <button
              onClick={toggleLang}
              aria-label={`Switch Language. Current: ${lang === "en" ? "English" : "हिन्दी"}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
            >
              <Globe size={13} className="text-primary" />
              <span>{lang === "en" ? "हिन्दी" : "English"}</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
            >
              {isDark ? (
                <Sun size={15} className="text-amber-400" />
              ) : (
                <Moon size={15} className="text-slate-700" />
              )}
            </button>

            <button
              onClick={() => openAuthModal("learner", false)}
              className="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
            >
              {t("btn_signin") || "Sign In"}
            </button>

            <button
              onClick={() => openAuthModal("learner", true)}
              className="btn-primary text-xs py-2 px-4 shadow-sm font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t("nav_getstarted") || "Get Started"}</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            >
              {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
            </button>
            <button
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div
            className="md:hidden border-t border-slate-200 dark:border-slate-800 pt-3 pb-2 mt-2 flex flex-col gap-2"
            role="navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs font-semibold py-2 px-3 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={toggleLang}
                className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 py-2 rounded-lg border border-slate-200 dark:border-slate-700"
              >
                <Globe size={14} className="text-primary" />
                <span>{lang === "en" ? "हिन्दी में बदलें" : "Switch to English"}</span>
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { setMenuOpen(false); openAuthModal("learner", false); }}
                  className="btn-secondary text-xs text-center py-2 font-bold cursor-pointer"
                >
                  {t("btn_signin") || "Sign In"}
                </button>
                <button
                  onClick={() => { setMenuOpen(false); openAuthModal("learner", true); }}
                  className="btn-primary text-xs text-center py-2 font-bold cursor-pointer"
                >
                  {t("nav_getstarted") || "Get Started"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
