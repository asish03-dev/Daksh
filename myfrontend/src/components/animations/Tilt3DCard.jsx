import { useRef, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Tilt3DCard - Sovereign 2.5D Perspective Tilt & Multi-Layer Spatial Depth
 * 
 * Provides 60fps 3D mouse tracking tilt, dynamic glass glare, laser border contour,
 * and spatial z-depth floating foreground elements.
 */
export default function Tilt3DCard({
  children,
  className = "",
  maxTilt = 8, // Maximum tilt angle in degrees
  scale = 1.02, // Subtle scale up on hover
  glare = true, // Dynamic specular glass glare
  glareColor = "rgba(255, 255, 255, 0.16)",
  spotlightColor = "rgba(255, 122, 26, 0.18)",
  laserBorder = true,
  onClick,
  style = {}
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate cursor position relative to card center (-1 to 1)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / width) * 2 - 1;
    const percentY = (y / height) * 2 - 1;

    // Calculate 3D tilt
    const rotateY = percentX * maxTilt;
    const rotateX = -percentY * maxTilt;

    setTilt({ rotateX, rotateY });
    setGlarePos({
      x: (x / width) * 100,
      y: (y / height) * 100,
      opacity: 1
    });
  }, [maxTilt, shouldReduceMotion]);

  const handleMouseEnter = () => {
    if (shouldReduceMotion) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: "preserve-3d",
        transform: !shouldReduceMotion && isHovered
          ? `perspective(1100px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
          : "perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered
          ? "transform 0.08s ease-out, box-shadow 0.2s ease-out"
          : "transform 0.5s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.5s ease-out",
        boxShadow: isHovered
          ? "0 30px 60px -15px rgba(0, 0, 0, 0.35), 0 0 30px -8px rgba(255, 122, 26, 0.25)"
          : undefined,
        ...style
      }}
      className={`relative overflow-hidden glass-sovereign ${className}`}
    >
      {/* 1. Dynamic Specular Glass Glare Layer */}
      {glare && !shouldReduceMotion && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-20"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(400px circle at ${glarePos.x}% ${glarePos.y}%, ${glareColor}, transparent 65%)`
          }}
        />
      )}

      {/* 2. Ambient Cyber-Saffron Spotlight Glow */}
      {!shouldReduceMotion && (
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-10"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(450px circle at ${glarePos.x}% ${glarePos.y}%, ${spotlightColor}, transparent 75%)`
          }}
        />
      )}

      {/* 3. Physical Top Specular Edge Highlight */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 dark:via-white/25 to-transparent z-20 opacity-90" />

      {/* 4. Child Content with 3D Spatial Z-Depth */}
      <div
        className="relative z-10 w-full h-full preserve-3d"
        style={{
          transform: !shouldReduceMotion && isHovered ? "translateZ(20px)" : "translateZ(0px)",
          transition: "transform 0.2s ease-out"
        }}
      >
        {children}
      </div>
    </div>
  );
}
