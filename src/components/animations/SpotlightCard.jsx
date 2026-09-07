import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * High-Performance Zero-Jitter SpotlightCard
 * Updates CSS variables directly on mousemove without triggering React re-renders.
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(14, 165, 233, 0.12)",
  borderColor = "rgba(14, 165, 233, 0.3)",
  onClick,
}) {
  const cardRef = useRef(null);
  const spotlightRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (!cardRef.current || !spotlightRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.setProperty("--x", `${x}px`);
    spotlightRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseEnter = () => {
    if (shouldReduceMotion || !spotlightRef.current) return;
    spotlightRef.current.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (!spotlightRef.current) return;
    spotlightRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden skeuo-card ${className}`}
      style={{ contain: "paint" }}
    >
      {/* Physical Top Specular Reflection */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent z-10" />

      {/* Dynamic Cursor Spotlight Layer (GPU accelerated CSS variables) */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px transition-opacity duration-200 z-0 opacity-0"
        style={{
          background: `radial-gradient(400px circle at var(--x, -200px) var(--y, -200px), ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
