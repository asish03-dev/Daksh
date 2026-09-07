import { Link } from "react-router-dom";
import { LogOut, ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";
import { useSidebarState } from "../hooks/useSidebarState";
import { useTheme } from "../context/ThemeContext";

/**
 * Executive Navy Blue Glassmorphism Sidebar
 * Deep Navy Blue Palette (#0B192C) with Royal Navy accents and clean Gov Initials Avatar
 */
export default function Sidebar({ navItems, active, onSelect, onLogout, user, subtitle = "Executive Console" }) {
  const [isOpen, toggle] = useSidebarState(true);
  const { isDark, toggleTheme, t } = useTheme();

  return (
    <aside
      id="sidebar-nav"
      aria-label="Main navigation"
      className="flex flex-col h-full shrink-0 overflow-hidden transition-all duration-200 z-30 select-none backdrop-blur-2xl bg-[#0369A1]/95 dark:bg-[#07192C]/95 border-r border-[#0284C7]/40 dark:border-sky-900/50 shadow-[0_20px_50px_rgba(2,132,199,0.25)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white"
      style={{
        width: isOpen ? "256px" : "72px",
      }}
    >
      {/* Physical Top Specular Sky Glow Reflection */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-300/60 to-transparent z-20" />

      {/* 1. OFFICER / ADMIN IDENTITY HEADER WITH COLLAPSE TOGGLE */}
      <div
        className="flex items-center border-b border-white/15 dark:border-sky-900/40 overflow-hidden shrink-0 bg-[#0274B3]/70 dark:bg-[#06101E]/60 backdrop-blur-md"
        style={{
          padding: isOpen ? "16px 14px 16px 16px" : "16px 0",
          justifyContent: isOpen ? "space-between" : "center",
          minHeight: "72px",
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            {/* Sovereign Initials Avatar Badge */}
            <div className="w-10 h-10 rounded-xl bg-sky-900/80 text-sky-200 flex items-center justify-center font-black text-xs shadow-md shadow-sky-950/40 ring-1 ring-sky-300/40">
              {(user?.name || "DA")
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()
                .slice(0, 2) || "SO"}
            </div>
            <span
              className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0369A1] dark:border-[#07192C] animate-pulse"
              title="Session Active • Verified"
            />
          </div>

          {isOpen && (
            <div className="leading-tight min-w-0 overflow-hidden text-left" style={{ transition: "opacity 100ms ease" }}>
              <span className="font-extrabold text-white tracking-tight text-xs block truncate">
                {user?.name || "Statistical Officer"}
              </span>
              <span className="text-[10px] text-sky-100/85 font-bold block truncate mt-0.5">
                {user?.cadre ? "ISS Cadre • Group A" : subtitle}
              </span>
            </div>
          )}
        </div>

        {/* Top Collapse Toggle Arrow */}
        <button
          onClick={toggle}
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          className={`p-1.5 rounded-xl text-sky-100 hover:text-white hover:bg-white/15 transition-all cursor-pointer shrink-0 ${
            !isOpen ? "mt-1" : ""
          }`}
          title={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>

      {/* 2. NAVIGATION ITEMS WITH SKY BLUE ACTIVE STYLE */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin py-4 px-3 space-y-1.5">
        {navItems.map(({ id, label, icon: Icon, badge }) => {
          const isActive = active === id;
          return (
            <div key={id} className="relative group">
              <button
                onClick={() => onSelect(id)}
                aria-current={isActive ? "page" : undefined}
                aria-label={!isOpen ? label : undefined}
                className={`relative flex items-center gap-3 py-2.5 rounded-xl text-xs transition-all duration-150 cursor-pointer w-full text-left ${
                  isActive
                    ? "bg-[#0284C7] dark:bg-[#1E3E62] text-white font-black shadow-lg shadow-sky-950/30 ring-1 ring-sky-300/60"
                    : "text-sky-100 hover:text-white hover:bg-white/15 font-semibold"
                }`}
                style={{
                  justifyContent: isOpen ? "flex-start" : "center",
                  paddingLeft: isOpen ? "14px" : "0",
                  paddingRight: isOpen ? "12px" : "0",
                }}
              >
                <Icon
                  size={17}
                  className={`shrink-0 transition-colors ${
                    isActive ? "text-sky-200 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" : "text-sky-200/80 group-hover:text-white"
                  }`}
                />
                {isOpen && (
                  <div className="flex items-center justify-between flex-1 min-w-0">
                    <span className="truncate" style={{ transition: "opacity 100ms ease" }}>
                      {label}
                    </span>
                    {badge && (
                      <span
                        className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ml-1.5 shrink-0 ${
                          isActive
                            ? "bg-white/20 text-white border border-white/30"
                            : "bg-[#025688]/80 text-sky-200 border border-sky-300/20"
                        }`}
                      >
                        {badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
              {!isOpen && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 border border-slate-700">
                  {label}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* 3. SLEEK FLAT SIGN OUT BUTTON AT BOTTOM */}
      <div className="p-3 border-t border-white/15 dark:border-sky-900/40 bg-[#0274B3]/70 dark:bg-[#06101E]/60 backdrop-blur-md shrink-0">
        <div className="relative group">
          <button
            onClick={onLogout}
            aria-label="Sign out"
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-bold w-full text-sky-100 hover:text-rose-100 hover:bg-rose-600/30 active:bg-rose-600/40 transition-all cursor-pointer text-left border border-transparent hover:border-rose-400/40 group/btn"
            style={{
              justifyContent: isOpen ? "flex-start" : "center",
            }}
          >
            <LogOut size={16} className="shrink-0 text-sky-200 group-hover/btn:text-rose-200 transition-colors" />
            {isOpen && <span className="font-extrabold">{t("btn_logout") || "Sign Out"}</span>}
          </button>
          {!isOpen && (
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1 bg-slate-900 text-rose-300 text-xs font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 border border-slate-700">
              Sign Out
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
