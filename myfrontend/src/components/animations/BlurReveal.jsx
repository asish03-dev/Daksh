import { motion, useReducedMotion } from "framer-motion";

/**
 * BlurReveal (React Bits Primitive)
 * Staggered blur-to-crisp text & element reveal animation.
 */
export default function BlurReveal({
  children,
  delay = 0,
  duration = 0.35,
  className = "",
  as = "div",
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple ease-out-expo
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
