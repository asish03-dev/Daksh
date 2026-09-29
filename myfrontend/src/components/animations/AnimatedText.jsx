import { motion } from "framer-motion";

/**
 * SplitText component: Staggers letters/words on entry with spring physics
 */
export function SplitText({
  text = "",
  className = "",
  delay = 0,
  splitBy = "words", // "words" | "letters"
}) {
  const items = splitBy === "letters" ? Array.from(text) : text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: splitBy === "letters" ? 0.025 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
    >
      {items.map((item, idx) => (
        <motion.span
          key={idx}
          variants={itemVariants}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * ShinyText component: Shimmering light sweep across text (React Bits style)
 */
export function ShinyText({ text, className = "", shimmerWidth = 100 }) {
  return (
    <span
      className={`relative inline-block bg-[linear-gradient(110deg,#1C1917,45%,#0D9488,55%,#1C1917)] dark:bg-[linear-gradient(110deg,#F8FAFC,45%,#14B8A6,55%,#F8FAFC)] bg-[length:250%_100%] bg-clip-text text-transparent animate-shimmer font-bold ${className}`}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </span>
  );
}

/**
 * BlurFadeText: Fades in smoothly with subtle unblurring
 */
export function BlurFadeText({ text, className = "", delay = 0.1 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {text}
    </motion.div>
  );
}

/**
 * FloatUp: "niche theke veshe asbe" (smooth sliding up from bottom on scroll)
 */
export function FloatUp({ children, delay = 0, yOffset = 30, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.65,
        delay: delay * 0.001,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
