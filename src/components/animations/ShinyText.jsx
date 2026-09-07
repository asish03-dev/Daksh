/**
 * ShinyText (React Bits Template)
 * Creates a sweeping metallic / holographic shine across text.
 */
export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = "",
}) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${
        disabled
          ? "text-slate-900 dark:text-white"
          : "bg-gradient-to-r from-slate-900 via-orange-500 to-slate-900 dark:from-slate-100 dark:via-amber-400 dark:to-slate-100 bg-[length:200%_auto] animate-[shine_4s_linear_infinite]"
      } ${className}`}
      style={{
        animationDuration,
      }}
    >
      {text}
    </span>
  );
}
