import { createContext, useContext, useState, useEffect } from "react";
import { strings } from "../i18n/strings";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  // Theme state: strictly 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("statsaarthi_theme");
      if (saved === "dark" || saved === "light") return saved;
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    } catch (e) {}
    return "light";
  });

  // Language state: 'en' | 'hi'
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("statsaarthi_lang");
      if (saved === "hi" || saved === "en") return saved;
    } catch (e) {}
    return "en";
  });

  // Font size multiplier for GIGW accessibility: 'normal' | 'large' | 'larger'
  const [textSize, setTextSize] = useState(() => {
    try {
      return localStorage.getItem("statsaarthi_textsize") || "normal";
    } catch (e) {
      return "normal";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("statsaarthi_theme", theme);
      const root = document.documentElement;
      root.classList.remove("dark", "high-contrast");
      if (theme === "dark") {
        root.classList.add("dark");
      }
    } catch (e) {}
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem("statsaarthi_lang", lang);
    } catch (e) {}
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem("statsaarthi_textsize", textSize);
      const root = document.documentElement;
      root.classList.remove("text-scale-large", "text-scale-larger");
      if (textSize === "large") root.classList.add("text-scale-large");
      if (textSize === "larger") root.classList.add("text-scale-larger");
    } catch (e) {}
  }, [textSize]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  const increaseFontSize = () => {
    setTextSize((prev) => (prev === "normal" ? "large" : "larger"));
  };

  const decreaseFontSize = () => {
    setTextSize((prev) => (prev === "larger" ? "large" : "normal"));
  };

  const resetFontSize = () => {
    setTextSize("normal");
  };

  // Translation function with English fallback
  const t = (key) => {
    const langDict = strings[lang] || strings.en;
    if (langDict[key] !== undefined) return langDict[key];
    if (strings.en[key] !== undefined) return strings.en[key];
    return key;
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === "dark",
        isHighContrast: false,
        toggleTheme,
        setTheme,
        lang,
        toggleLang,
        setLang,
        textSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
        t,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
