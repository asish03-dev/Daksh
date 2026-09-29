import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, ArrowUpRight } from "lucide-react";

/**
 * SetuOrb3D - 3D Quantum AI Floating Orb & Orbital Gyro Core
 * 
 * Futuristic holographic floating AI assistant with gyroscopic energy rings,
 * pulsating core particles, and interactive hover sound/visual aura.
 */
export default function SetuOrb3D({ onClick, label = "SETU", subtitle = "Statistical Mentor" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", damping: 15 }}
      className="fixed bottom-6 right-6 z-40 select-none group cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center gap-3">
        {/* Expanded Pill Header on Hover */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0.9, x: 0 }}
          className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-2xl glass-sovereign border border-primary/30 shadow-2xl backdrop-blur-2xl text-left"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80" />
          <div>
            <p className="text-xs font-black text-slate-900 dark:text-white leading-tight flex items-center gap-1">
              <span>{label}</span>
            </p>
            <p className="text-[10px] text-slate-500 dark:text-cyan-300/90 font-bold leading-none mt-0.5">
              {subtitle}
            </p>
          </div>
          <ArrowUpRight size={13} className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-1" />
        </motion.div>

        {/* 3D Quantum Gyro Orb Container */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          {/* Ambient Outer Halo Wave */}
          <motion.div
            animate={{
              scale: isHovered ? [1.2, 1.4, 1.2] : [1, 1.15, 1],
              opacity: isHovered ? [0.6, 0.9, 0.6] : [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-2 rounded-full bg-gradient-to-tr from-orange via-amber-500 to-cyan-400 blur-md pointer-events-none"
          />

          {/* Gyroscopic Energy Ring 1 (Clockwise) */}
          <div
            className="absolute inset-0 rounded-full border border-orange/60 dark:border-amber-400/80 pointer-events-none"
            style={{
              transform: "rotateX(65deg) rotateY(20deg)",
              animation: "spin 4s linear infinite"
            }}
          />

          {/* Gyroscopic Energy Ring 2 (Counter-Clockwise) */}
          <div
            className="absolute inset-0 rounded-full border border-cyan-400/60 dark:border-cyan-300/80 pointer-events-none"
            style={{
              transform: "rotateX(65deg) rotateY(-40deg)",
              animation: "spin 6s linear infinite reverse"
            }}
          />

          {/* Pulsating Quantum Core */}
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F1117] via-[#161B26] to-[#0A0C11] border-2 border-white/20 shadow-2xl flex items-center justify-center overflow-hidden z-10"
            style={{
              boxShadow: "0 0 25px rgba(20, 184, 166, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.4)"
            }}
          >
            {/* Hologram Light Ray */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-cyan-400/30 pointer-events-none" />

            {/* Core Icon */}
            <BrainCircuit size={20} className="text-white relative z-10 drop-shadow-[0_2px_8px_rgba(20,184,166,0.8)]" />

            {/* Sparkle Glint */}
            <Sparkles size={10} className="absolute top-1 right-1 text-amber-300 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
