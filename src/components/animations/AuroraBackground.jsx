import { motion, useReducedMotion } from "framer-motion";

/**
 * AuroraBackground (React Bits Template)
 * Creates dynamic, flowing aurora gradient waves for modern high-tech visual depth.
 */
export default function AuroraBackground({
  children,
  className = "",
  showRadialGradient = true,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative flex flex-col items-center justify-start overflow-hidden bg-slate-950 text-slate-100 transition-colors ${className}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className={`
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#0D9488_10%,#3B82F6_18%,#8B5CF6_26%,#10B981_34%,#14B8A6_42%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[24px] invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-40 will-change-transform
          `}
        />
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {showRadialGradient && (
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_center,transparent_20%,black)] pointer-events-none -z-10" />
      )}

      {children}
    </div>
  );
}
