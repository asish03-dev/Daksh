import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export class ChatErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ChatErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) this.props.onReset();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-canvas-card-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm m-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 border border-amber-200 dark:border-amber-800">
            <AlertTriangle size={24} />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            SETU couldn't load
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
            The AI Copilot encountered an unexpected render issue. Don't worry — your session and notes are completely safe.
          </p>
          <button
            onClick={this.handleReset}
            className="btn-primary text-xs py-2 px-5 gap-2 shadow-sm font-semibold"
          >
            <RefreshCw size={14} />
            <span>Reload SETU Copilot</span>
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export function FracLevelBar({ current, required, label }) {
  const pct = Math.round((current / required) * 100);
  const barColor =
    current >= required
      ? "bg-success"
      : current >= required - 1
      ? "bg-warning"
      : "bg-danger";

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-slate-700 dark:text-slate-300">{label}</span>
        <span className="text-slate-400 font-mono">{current}/{required}</span>
      </div>
      <div className="frac-bar-bg">
        <div
          className={`frac-bar-fill ${barColor}`}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
    </div>
  );
}

export function FracLevelDots({ current, max = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full border transition-colors ${
            i < current ? "bg-primary border-primary" : "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700"
          }`}
        />
      ))}
    </div>
  );
}

export function StatusBadge({ status }) {
  const map = {
    gap: { label: "Gap Identified", cls: "badge-gap" },
    in_progress: { label: "In Progress", cls: "badge-progress" },
    mastered: { label: "Mastered", cls: "badge-mastered" },
    certified: { label: "Certified", cls: "badge-mastered" },
    recommended: { label: "Recommended", cls: "badge-info" },
    processing: { label: "Processing", cls: "badge-warning" },
    indexed: { label: "Indexed", cls: "badge-mastered" },
  };
  const { label, cls } = map[status] || { label: status, cls: "badge" };
  return <span className={`badge ${cls}`}>{label}</span>;
}

export function CategoryBadge({ category }) {
  const map = {
    Domain: "bg-blue-50 text-blue-700 border border-blue-100",
    Functional: "bg-indigo-50 text-indigo-700 border border-indigo-100",
    Behavioural: "bg-amber-50 text-amber-700 border border-amber-100",
  };
  return (
    <span className={`badge ${map[category] || "badge"}`}>{category}</span>
  );
}

export function StatCard({ label, value, unit, sub, icon: Icon, color = "text-slate-900" }) {
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="section-label mb-1">{label}</p>
          <p className={`text-3xl font-extrabold ${color} tracking-tight`}>
            {value}
            {unit && <span className="text-lg font-semibold ml-0.5 text-slate-400">{unit}</span>}
          </p>
          {sub && <p className="text-xs text-slate-400 mt-1">{sub}</p>}
        </div>
        {Icon && (
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
            <Icon size={18} className="text-slate-500" />
          </div>
        )}
      </div>
    </div>
  );
}

export function BloomTag({ level }) {
  const colorMap = {
    Remember: "bg-sky-50 text-sky-700 border border-sky-100",
    Understand: "bg-indigo-50 text-indigo-700 border border-indigo-100",
    Apply: "bg-violet-50 text-violet-700 border border-violet-100",
    Analyze: "bg-amber-50 text-amber-700 border border-amber-100",
    Evaluate: "bg-rose-50 text-rose-700 border border-rose-100",
  };
  return (
    <span className={`badge ${colorMap[level] || "badge"}`}>
      Bloom: {level}
    </span>
  );
}

export function LoadingSpinner({ size = 20, className = "" }) {
  return (
    <div
      className={`animate-spin rounded-full border-2 border-slate-200 border-t-primary ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function EmptyState({ icon: Icon, title, sub, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      {Icon && (
        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
          <Icon size={24} className="text-slate-400" />
        </div>
      )}
      <p className="text-sm font-semibold text-slate-700 mb-1">{title}</p>
      {sub && <p className="text-xs text-slate-400 max-w-xs">{sub}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function PriorityDot({ priority }) {
  const map = { High: "bg-danger", Medium: "bg-warning", Low: "bg-success" };
  return (
    <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
      <span className={`w-1.5 h-1.5 rounded-full ${map[priority] || "bg-slate-400"}`} />
      {priority}
    </span>
  );
}

export function ScoreRing({ score, total, size = 80 }) {
  const pct = (score / total) * 100;
  const r = size / 2 - 7;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const color = pct >= 80 ? "#059669" : pct >= 60 ? "#D97706" : "#DC2626";
  const trackColor = pct >= 80 ? "#ECFDF5" : pct >= 60 ? "#FFFBEB" : "#FEF2F2";

  return (
    <svg width={size} height={size} aria-label={`Score: ${score} out of ${total}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={trackColor} strokeWidth="7" />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dasharray 0.8s ease-out" }}
      />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="700" fill={color}>
        {score}/{total}
      </text>
    </svg>
  );
}
