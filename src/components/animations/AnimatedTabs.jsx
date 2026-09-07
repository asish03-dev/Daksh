import { motion, useReducedMotion } from "framer-motion";

/**
 * AnimatedTabs (React Bits / Linear Style)
 * Sliding fluid pill capsule indicator across tab items with spring physics.
 */
export default function AnimatedTabs({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  layoutId = "activeTabIndicator",
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`flex items-center gap-1 p-1 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-200/60 dark:border-slate-700/60 ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors duration-150 z-10 ${
              isActive
                ? "text-slate-950 dark:text-white"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={shouldReduceMotion ? undefined : layoutId}
                className="absolute inset-0 bg-white dark:bg-slate-900 rounded-lg shadow-xs border border-slate-200/60 dark:border-slate-700/60 -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="flex items-center gap-1.5">
              {tab.icon && <tab.icon size={13} className={isActive ? "text-orange" : "text-slate-400"} />}
              {tab.label}
              {tab.badge !== undefined && (
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isActive ? "bg-orange-50 dark:bg-orange/20 text-orange font-black" : "bg-slate-200/60 dark:bg-slate-700 text-slate-500"
                }`}>
                  {tab.badge}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
