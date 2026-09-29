import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * DecryptedText (React Bits Template)
 * High-tech cyber scramble text decryption effect.
 */
export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "opacity-70 text-orange dark:text-amber-400 font-mono",
  animateOn = "hover",
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const revealedIndices = useRef(new Set());
  const iterationRef = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let interval;

    if (shouldReduceMotion) {
      setDisplayText(text);
      return;
    }

    if (isHovering || animateOn === "view") {
      setIsScrambling(true);
      interval = setInterval(() => {
        setDisplayText((prevText) => {
          iterationRef.current++;

          if (iterationRef.current >= text.length * 2) {
            clearInterval(interval);
            setIsScrambling(false);
            return text;
          }

          return text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iterationRef.current / 2) return text[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("");
        });
      }, speed);
    } else {
      setDisplayText(text);
      iterationRef.current = 0;
    }

    return () => clearInterval(interval);
  }, [isHovering, text, speed, characters, animateOn, shouldReduceMotion]);

  return (
    <span
      className={`inline-block ${parentClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
}
