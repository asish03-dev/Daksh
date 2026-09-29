import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * useSidebarState — persists sidebar open/closed to localStorage
 */
export function useSidebarState(defaultOpen = true) {
  const [isOpen, setIsOpen] = useState(() => {
    try {
      const stored = localStorage.getItem("daksh_sidebar");
      if (stored !== null) return stored === "open";
    } catch (_) {}
    return defaultOpen;
  });

  const toggle = () =>
    setIsOpen((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("daksh_sidebar", next ? "open" : "closed");
      } catch (_) {}
      return next;
    });

  return [isOpen, toggle];
}
