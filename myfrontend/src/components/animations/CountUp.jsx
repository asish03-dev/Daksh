import { useEffect, useRef, useState } from "react";

/**
 * Smooth CountUp number animation component.
 * Supports both `to` and `end` props, ensures zero NaN bugs.
 */
export default function CountUp({
  to,
  end,
  from = 0,
  duration = 1.2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  separator = ",",
}) {
  const targetRaw = to !== undefined ? to : end !== undefined ? end : 0;
  const targetNumber = typeof targetRaw === "string" ? parseFloat(targetRaw.replace(/[^0-9.-]+/g, "")) || 0 : Number(targetRaw) || 0;
  const startNumber = typeof from === "string" ? parseFloat(from.replace(/[^0-9.-]+/g, "")) || 0 : Number(from) || 0;

  const [value, setValue] = useState(startNumber);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetNumber, startNumber, duration]);

  const animateCount = () => {
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateValue = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // EaseOutQuart curve
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = startNumber + (targetNumber - startNumber) * easeProgress;

      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      } else {
        setValue(targetNumber);
      }
    };

    requestAnimationFrame(updateValue);
  };

  const formatNumber = (num) => {
    if (isNaN(num)) return `${prefix}0${suffix}`;
    const fixed = num.toFixed(decimals);
    if (separator) {
      const parts = fixed.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      return `${prefix}${parts.join(".")}${suffix}`;
    }
    return `${prefix}${fixed}${suffix}`;
  };

  return (
    <span ref={elementRef} className={className}>
      {formatNumber(value)}
    </span>
  );
}
