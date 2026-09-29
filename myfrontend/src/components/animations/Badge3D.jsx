import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Badge3D - Holographic 3D Floating Token & Reward Component
 */
export default function Badge3D({
  icon: Icon,
  title,
  subtitle,
  tier = "gold", // "gold" | "emerald" | "cyan" | "purple"
  size = "md",
  className = "",
  onClick
}) {
  const [isHovered, setIsHovered] = useState(false);

  const tierColors = {
    gold: {
      bg: "from-amber-400 via-orange to-yellow-500",
      glow: "rgba(245, 158, 11, 0.4)",
      border: "border-amber-300/40",
      text: "text-amber-600 dark:text-amber-300"
    },
    emerald: {
      bg: "from-emerald-400 via-teal-600 to-emerald-700",
      glow: "rgba(16, 185, 129, 0.4)",
      border: "border-emerald-300/40",
      text: "text-emerald-600 dark:text-emerald-300"
    },
    cyan: {
      bg: "from-cyan-400 via-blue-600 to-indigo-700",
      glow: "rgba(6, 182, 212, 0.4)",
      border: "border-cyan-300/40",
      text: "text-cyan-600 dark:text-cyan-300"
    },
    purple: {
      bg: "from-purple-400 via-indigo-600 to-fuchsia-700",
      glow: "rgba(168, 85, 247, 0.4)",
      border: "border-purple-300/40",
      text: "text-purple-600 dark:text-purple-300"
    }
  };

  const currentTier = tierColors[tier] || tierColors.gold;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-canvas-card-dark border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-shadow cursor-pointer select-none overflow-hidden ${className}`}
      style={{
        boxShadow: isHovered ? `0 12px 28px -6px ${currentTier.glow}` : undefined
      }}
    >
      {/* 3D Holographic Shimmer Sweep */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />

      {/* 3D Coin/Medal Token */}
      <div className="relative shrink-0">
        <div
          className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${currentTier.bg} flex items-center justify-center text-white shadow-lg relative overflow-hidden`}
          style={{
            transform: isHovered ? "rotateY(15deg) scale(1.05)" : "rotateY(0deg) scale(1)",
            transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
        >
          {/* Specular bevel ring */}
          <div className="absolute inset-0 border-2 border-white/40 rounded-2xl pointer-events-none" />
          {Icon && <Icon size={20} strokeWidth={2.5} className="drop-shadow-md" />}
        </div>
      </div>

      {/* Badge Description */}
      {(title || subtitle) && (
        <div className="text-left min-w-0 pr-1">
          {title && (
            <h4 className="text-xs font-black text-slate-900 dark:text-white truncate leading-tight">
              {title}
            </h4>
          )}
          {subtitle && (
            <p className={`text-[10px] font-bold ${currentTier.text} truncate mt-0.5`}>
              {subtitle}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}
