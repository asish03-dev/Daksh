/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Layout Layer Tokens (Sky Blue Sidebar & Clean Off-White Canvas) ──
        sidebar: {
          DEFAULT: "#0284C7", // Sky Blue 600
          dark: "#0369A1",    // Sky Blue 700
          surface: "#0EA5E9", // Sky Blue 500
          border: "rgba(224, 242, 254, 0.25)",
          text: "#E0F2FE",    // Sky Blue 100
          "text-active": "#FFFFFF",
          hover: "rgba(255, 255, 255, 0.15)",
          active: "#0C4A6E",  // Sky Blue 900 text on white active indicator
        },
        navbar: {
          DEFAULT: "#FFFFFF",
          dark: "#0B1526",
          border: "rgba(226, 232, 240, 0.8)",
          "border-dark": "rgba(255,255,255,0.08)",
          text: "#0F172A",
          hover: "#F0F9FF",
        },
        canvas: {
          DEFAULT: "#F8FAFC", // Clean Off-White Canvas (Slate 50)
          dark: "#080C14",    // Deep Void Dark Canvas
          card: "#FFFFFF",
          "card-dark": "#111827", // Elevated card surface
          muted: "#F1F5F9",   // Soft Slate 100 muted surface
          "muted-dark": "#1E293B",
          border: "#E2E8F0",  // Slate 200 clean border
          "border-dark": "rgba(255,255,255,0.08)",
        },
        // ── Chart & Visualization Palette ──
        chart: {
          teal: "#0D9488",    // Primary series — Teal
          indigo: "#6366F1",  // Benchmark / target line
          amber: "#F59E0B",   // Warning metric
          emerald: "#10B981", // Success / growth
          violet: "#8B5CF6",  // Secondary series
          rose: "#EF4444",    // Deficit / gap
          sky: "#0EA5E9",     // Informational
          slate: "#64748B",   // Neutral series
          orange: "#F97316",  // Retained as chart-only (demoted from primary)
          cyan: "#06B6D4",    // Gradient end stop / AI glow
        },
        // ── Legacy Navy — kept for chart benchmarks only ──
        navy: {
          deep: "#0F1117",
          mid: "#161B26",
          surface: "#1A2535",
          50: "#F0F4FA",
          100: "#DBE5F5",
          200: "#BCD0EE",
          300: "#91B3E3",
          400: "#6092D6",
          500: "#3B74C4",
          600: "#2759A7",
          700: "#1E4486",
          800: "#1A2535",
          900: "#161B26",
          950: "#0F1117",
        },
        // ── Orange — Demoted to chart palette only ──
        orange: {
          DEFAULT: "#F97316",
          hover: "#EA6A0A",
          light: "#FB923C",
          pale: "#FFF7ED",
          dark: "#C2530E",
        },
        // ── Teal — New Primary Accent ──
        teal: {
          DEFAULT: "#14B8A6", // Teal 500
          hover: "#0F766E",   // Teal 700
          light: "#F0FDFA",   // Teal 50
          "light-border": "#99F6E4", // Teal 200
          dark: "#134E4A",    // Teal 900
          600: "#0D9488",
          500: "#14B8A6",
          400: "#2DD4BF",
        },
        // ── Primary Semantic = Teal ──
        primary: {
          DEFAULT: "#0D9488", // Teal 600
          hover: "#0F766E",   // Teal 700
          light: "#F0FDFA",   // Teal 50
          "light-border": "#99F6E4", // Teal 200
          dark: "#134E4A",    // Teal 900
        },
        success: {
          DEFAULT: "#10B981",
          hover: "#059669",
          light: "#ECFDF5",
          "light-border": "#A7F3D0",
          text: "#065F46",
        },
        warning: {
          DEFAULT: "#F59E0B",
          hover: "#D97706",
          light: "#FFFBEB",
          "light-border": "#FDE68A",
          text: "#92400E",
        },
        danger: {
          DEFAULT: "#EF4444",
          hover: "#DC2626",
          light: "#FEF2F2",
          "light-border": "#FCA5A5",
          text: "#991B1B",
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          '"Noto Sans Devanagari"',
          '"Hind"',
          "system-ui",
          "sans-serif",
        ],
        display: [
          '"Sora"',
          '"Plus Jakarta Sans"',
          '"Noto Sans Devanagari"',
          "system-ui",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "monospace",
        ],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "0.95rem" }],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        card: "0 2px 10px -2px rgba(0,0,0,0.06), 0 1px 3px -1px rgba(0,0,0,0.04)",
        "card-dark": "0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.08)",
        "card-hover": "0 10px 30px -4px rgba(13,148,136,0.14), 0 4px 10px -4px rgba(0,0,0,0.04)",
        island: "0 10px 30px -10px rgba(0,0,0,0.08), 0 4px 12px -4px rgba(0,0,0,0.04)",
        "island-dark": "0 10px 30px -10px rgba(0,0,0,0.5), 0 4px 12px -4px rgba(0,0,0,0.3)",
        modal: "0 25px 60px -12px rgba(0,0,0,0.5)",
        sidebar: "1px 0 0 0 rgba(255,255,255,0.07)",
        focus: "0 0 0 3px rgba(13,148,136,0.4)",
      },
    },
  },
  plugins: [],
};
