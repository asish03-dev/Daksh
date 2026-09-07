import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BarChart3, Users, TrendingUp, Bell, AlertTriangle, CheckCircle2,
  Upload, Search, Sun, Moon, ShieldCheck, ChevronRight, Filter, Download,
  Sparkles, FileText, Check, FileCheck2, Printer, Layers, Building2,
  RefreshCw, Trophy, Settings, Plus, Trash2, Edit3, Eye, X, BookOpen,
  Play, Award, Clock, Sliders, Calendar, Flame, CheckSquare, Globe,
  Video, ExternalLink, ArrowUpRight, HelpCircle, Target, ArrowRight, Star
} from "lucide-react";
import {
  AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, ReferenceLine, ComposedChart,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend
} from "recharts";
import {
  ADMIN_STATS, CAPACITY_ALERTS, OFFICER_DIRECTORY,
  COMPETENCY_TREND, ADMIN_PROFILE, LEADERBOARD, QUIZZES_LIST,
  ASSESSMENT_SUBMISSIONS, COURSES, TRAINING_DOCUMENTS,
  CADRE_SNAPSHOTS_BY_PERIOD, DIVISION_COMPARATIVE_DATA, HARDCODED_OFFICERS
} from "../data/mockData";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";
import { BRAND_CONFIG } from "../config/branding";
import { SkeletonSection } from "../components/SkeletonLoader";
import Sidebar from "../components/Sidebar";
import SpotlightCard from "../components/animations/SpotlightCard";
import BlurReveal from "../components/animations/BlurReveal";
import { motion } from "framer-motion";

// 5 DEPARTMENTS HEATMAP DATA (Including Amit's FOD and Suparna's NAD)
const FIVE_DEPARTMENTS_HEATMAP = [
  {
    dept: "Field Operations Division",
    shortName: "FOD (Frontline)",
    officerCount: 1840,
    associatedOfficer: "Amit Kumar Mondal (Ticket Examiner · Eastern Railway)",
    sampling: 82,
    nas: 58,
    python: 64,
    gis: 45,
    leadership: 88,
    cyber: 62,
    reporting: 78,
    avgScore: 68.1,
    status: "Priority Fast-Track",
    badgeColor: "amber"
  },
  {
    dept: "Economic Accounts Division",
    shortName: "NAD (National Accounts)",
    officerCount: 620,
    associatedOfficer: "Suparna Chatterjee (Section Officer · Gazetted)",
    sampling: 74,
    nas: 94,
    python: 72,
    gis: 52,
    leadership: 82,
    cyber: 85,
    reporting: 91,
    avgScore: 78.6,
    status: "Benchmark Exceeded ★",
    badgeColor: "emerald"
  },
  {
    dept: "Central Secretariat & Administration",
    shortName: "CSD (Secretariat)",
    officerCount: 950,
    sampling: 70,
    nas: 80,
    python: 68,
    gis: 58,
    leadership: 90,
    cyber: 82,
    reporting: 84,
    avgScore: 76.0,
    status: "Operational",
    badgeColor: "sky"
  },
  {
    dept: "Data Quality & Survey Design",
    shortName: "DQAD (Methodology)",
    officerCount: 780,
    sampling: 94,
    nas: 76,
    python: 88,
    gis: 82,
    leadership: 76,
    cyber: 78,
    reporting: 90,
    avgScore: 83.4,
    status: "Top Methodology",
    badgeColor: "teal"
  },
  {
    dept: "Price Statistics & Index Wing",
    shortName: "CPID (Price Indices)",
    officerCount: 660,
    sampling: 84,
    nas: 84,
    python: 78,
    gis: 54,
    leadership: 74,
    cyber: 76,
    reporting: 82,
    avgScore: 76.0,
    status: "Operational",
    badgeColor: "slate"
  }
];

const HEATMAP_SKILLS = [
  { key: "sampling", label: "Sampling & Estimation" },
  { key: "nas", label: "National Accounts (SNA)" },
  { key: "python", label: "Python Data Science" },
  { key: "gis", label: "GIS & Spatial Mapping" },
  { key: "leadership", label: "Supervisory Leadership" },
  { key: "cyber", label: "Cyber & DPDP Act 2023" },
  { key: "reporting", label: "Microdata Audit" },
];

// 6-DOMAIN MULTI-DEPARTMENT RADAR HEATMAP DATA
const DEPARTMENT_RADAR_DATA = [
  {
    domain: "Sampling & PPS",
    fullDomain: "Survey Sampling Design & PPS",
    fodAmit: 82,
    nadSuparna: 74,
    dqad: 94,
    benchmark: 85,
  },
  {
    domain: "National Accounts",
    fullDomain: "National Accounts (SNA & SUT)",
    fodAmit: 58,
    nadSuparna: 94,
    dqad: 76,
    benchmark: 85,
  },
  {
    domain: "Python & Big Data",
    fullDomain: "Python for Official Data & ML",
    fodAmit: 64,
    nadSuparna: 72,
    dqad: 88,
    benchmark: 85,
  },
  {
    domain: "GIS & Spatial",
    fullDomain: "GIS Spatial Boundary Delineation",
    fodAmit: 45,
    nadSuparna: 52,
    dqad: 82,
    benchmark: 85,
  },
  {
    domain: "Leadership & Vig",
    fullDomain: "Supervisory Leadership & Vigilance",
    fodAmit: 88,
    nadSuparna: 82,
    dqad: 76,
    benchmark: 85,
  },
  {
    domain: "Cyber & DPDP",
    fullDomain: "Cyber Hygiene & DPDP Act 2023",
    fodAmit: 62,
    nadSuparna: 85,
    dqad: 78,
    benchmark: 85,
  },
];

function SectionWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function HeatCell({ value }) {
  const isCertified = value >= 85;
  const isGood = value >= 70 && value < 85;
  const isModerate = value >= 55 && value < 70;

  const bgStyle = isCertified
    ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
    : isGood
    ? "bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/30"
    : isModerate
    ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
    : "bg-red-500/15 text-red-700 dark:text-red-300 border border-red-500/30 font-black";

  return (
    <td className="px-2 py-2.5 text-center">
      <span
        className={`inline-flex items-center justify-center w-14 py-1 rounded-xl text-xs font-black font-mono transition-transform hover:scale-105 ${bgStyle}`}
      >
        {value}%
      </span>
    </td>
  );
}

function AdminTrendCustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0]?.payload || {};
  return (
    <div className="p-3.5 bg-slate-900/95 text-white rounded-2xl border border-primary/40 shadow-2xl backdrop-blur-xl text-left text-xs space-y-2 min-w-[210px]">
      <div className="flex items-center justify-between border-b border-slate-700/60 pb-1.5">
        <span className="font-extrabold text-teal-300">{label}</span>
        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          {data.delta || "+2.3% MoM"}
        </span>
      </div>
      <div className="space-y-1.5 text-2xs">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Actual Cadre Index:</span>
          <strong className="text-teal-400 font-mono text-xs">{data.index}%</strong>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400">MoSPI Target Milestone:</span>
          <strong className="text-indigo-400 font-mono text-xs">{data.target || 85}%</strong>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Audited Officers:</span>
          <strong className="text-white font-mono">{data.activeAudits || 4850}</strong>
        </div>
      </div>
    </div>
  );
}

function DivisionBarCustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0]?.payload || {};
  return (
    <div className="p-3.5 bg-slate-900/95 text-white rounded-2xl border border-primary/40 shadow-2xl backdrop-blur-xl text-left text-xs space-y-2 min-w-[220px]">
      <div className="border-b border-slate-700/60 pb-1.5">
        <span className="font-extrabold text-teal-300 block">{label || data.division}</span>
        <span className="text-[10px] text-slate-400 font-medium">{data.personnel} Active Cadre Officers</span>
      </div>
      <div className="space-y-1.5 text-2xs">
        <div className="flex justify-between items-center">
          <span className="text-emerald-400 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Certified Readiness:</span>
          <strong className="text-white font-mono">{data.certified}%</strong>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-amber-400 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> In Training Track:</span>
          <strong className="text-white font-mono">{data.inProgress}%</strong>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-rose-400 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500" /> Critical Deficit Gap:</span>
          <strong className="text-white font-mono">{data.deficit}%</strong>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { logout, showToast, switchOfficer } = useUser();
  const { theme, isDark, toggleTheme, lang, toggleLang } = useTheme();

  // 4 Core Modules aligned strictly with Blueprint Section 5
  const navItems = [
    { id: "overview", label: lang === "hi" ? "कार्यकारी डैशबोर्ड" : "Executive Home", icon: BarChart3, badge: "KPIs" },
    { id: "assessment_studio", label: lang === "hi" ? "मूल्यांकन एवं ऑडिट" : "Assessment Analytics & Audit", icon: FileText, badge: "Audits" },
    { id: "resource_manager", label: lang === "hi" ? "पाठ्यक्रम एवं संसाधन" : "Curriculum & Resource Linker", icon: Upload, badge: "iGOT · Web" },
    { id: "leaderboard", label: lang === "hi" ? "लीडरबोर्ड एवं SPARROW" : "Cadre Leaderboard & APAR", icon: Trophy, badge: "SPARROW" },
    { id: "settings", label: lang === "hi" ? "प्रशासन सेटिंग्स" : "Governance Settings", icon: Settings },
  ];

  const [active, setActive] = useState("overview");
  const [loading, setLoading] = useState(false);
  const [selectedOfficerFilter, setSelectedOfficerFilter] = useState("all");

  const handleSelectOfficerRole = (key) => {
    if (key === "amit_mondal" || key === "suparna_chatterjee") {
      switchOfficer?.(key);
      navigate("/officer");
    } else {
      setSelectedOfficerFilter("all");
    }
  };

  // Assessment Audit Studio State
  const [submissionsList] = useState(ASSESSMENT_SUBMISSIONS);
  const [selectedSubmissionDetail, setSelectedSubmissionDetail] = useState(null);
  const [submissionSearch, setSubmissionSearch] = useState("");
  const [submissionStatusFilter, setSubmissionStatusFilter] = useState("all");

  // Curriculum & Resource Link Manager State
  const [verifiedLinks, setVerifiedLinks] = useState([
    {
      id: "RES-LINK-01",
      title: "CERT-In Cyber Security Directions 2022 Official Gazette",
      provider: "CERT-In / MeitY",
      type: "gov",
      url: "https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf",
      domain: "Cyber Hygiene & DPDP Act 2023",
      duration: "2.5 Hours",
      credits: 3,
      verified: true
    },
    {
      id: "RES-LINK-02",
      title: "Digital Personal Data Protection Act 2023 Statutory Guidance",
      provider: "NeGD / iGOT Bharat",
      type: "igot",
      url: "https://igotkarmayogi.gov.in",
      domain: "Data Governance & PII Protection",
      duration: "1.5 Hours",
      credits: 2,
      verified: true
    },
    {
      id: "RES-LINK-03",
      title: "GFR 2017 & GeM Public Procurement Masterclass Series",
      provider: "NIFM / YouTube",
      type: "youtube",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      domain: "Financial Governance & Procurement",
      duration: "4.5 Hours",
      credits: 5,
      verified: true
    },
    {
      id: "RES-LINK-04",
      title: "System of National Accounts (SNA 2008) Sequence of Accounts Lecture",
      provider: "NSSTA / Google Drive Portal",
      type: "google",
      url: "https://mospi.gov.in/national-statistical-systems-training-academy-nssta",
      domain: "National Accounts (SNA & SUT)",
      duration: "6.0 Hours",
      credits: 6,
      verified: true
    },
    {
      id: "RES-LINK-05",
      title: "CVC Vigilance Manual 2021 & Disciplinary Inquiries Handbook",
      provider: "Central Vigilance Commission",
      type: "gov",
      url: "https://www.cvc.gov.in",
      domain: "Preventive Vigilance & CCS Rules",
      duration: "3.5 Hours",
      credits: 4,
      verified: true
    }
  ]);

  const [resourceTypeFilter, setResourceTypeFilter] = useState("all");
  const [resourceSearch, setResourceSearch] = useState("");
  const [showAddResourceModal, setShowAddResourceModal] = useState(false);
  const [newResourceForm, setNewResourceForm] = useState({
    title: "",
    url: "",
    provider: "iGOT Karmayogi",
    type: "igot",
    domain: "Cyber Hygiene & DPDP Act 2023",
    duration: "2.0 Hours",
    credits: 3
  });

  // Circular / Policy Ingestion Engine State
  const [isIngestingPolicy, setIsIngestingPolicy] = useState(false);
  const [ingestProgress, setIngestProgress] = useState(0);
  const [ingestStatusText, setIngestStatusText] = useState("");
  const [ingestedPolicies, setIngestedPolicies] = useState([
    {
      id: "DOC-2026-01",
      name: "General Financial Rules (GFR 2017) with GeM GTC Updates",
      source: "Ministry of Finance",
      mcqsGenerated: 42,
      lastIndexed: "2026-08-28",
      status: "Fully Indexed"
    },
    {
      id: "DOC-2026-02",
      name: "Digital Personal Data Protection (DPDP) Act 2023 Circulars",
      source: "Ministry of Electronics and Information Technology",
      mcqsGenerated: 35,
      lastIndexed: "2026-08-30",
      status: "Fully Indexed"
    },
    {
      id: "DOC-2026-03",
      name: "CVC Preventive Vigilance Manual (2021 Edition)",
      source: "Central Vigilance Commission",
      mcqsGenerated: 28,
      lastIndexed: "2026-09-01",
      status: "Fully Indexed"
    }
  ]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNavSelect = (id) => {
    if (id === active) return;
    setLoading(true);
    setActive(id);
    setTimeout(() => setLoading(false), 150);
  };

  // Add Resource Handler
  const handleAddResource = (e) => {
    e.preventDefault();
    if (!newResourceForm.title || !newResourceForm.url) {
      showToast("Please provide both title and URL", "error");
      return;
    }
    const created = {
      id: `RES-LINK-${Date.now().toString().slice(-4)}`,
      ...newResourceForm,
      verified: true
    };
    setVerifiedLinks([created, ...verifiedLinks]);
    setShowAddResourceModal(false);
    setNewResourceForm({
      title: "",
      url: "",
      provider: "iGOT Karmayogi",
      type: "igot",
      domain: "Cyber Hygiene & DPDP Act 2023",
      duration: "2.0 Hours",
      credits: 3
    });
    showToast(`Resource "${created.title}" successfully linked and verified!`, "success");
  };

  // Simulate Policy Ingestion Handler
  const handleSimulateIngestion = (fileName = "MoSPI_Annual_Capacity_Directives_2026.pdf") => {
    setIsIngestingPolicy(true);
    setIngestProgress(20);
    setIngestStatusText("Extracting PDF text layers and legal clauses...");

    setTimeout(() => {
      setIngestProgress(55);
      setIngestStatusText("Parsing statutory duties against FRAC Competency Levels 1-4...");
    }, 500);

    setTimeout(() => {
      setIngestProgress(85);
      setIngestStatusText("Synthesizing 10 Bloom-aligned scenario MCQs with official rule citations...");
    }, 1100);

    setTimeout(() => {
      setIngestProgress(100);
      setIngestStatusText("Ingestion Complete! 10 new scenario MCQs added to Question Bank.");
      const newDoc = {
        id: `DOC-2026-${Date.now().toString().slice(-4)}`,
        name: fileName,
        source: "MoSPI Directorate",
        mcqsGenerated: 10,
        lastIndexed: "Today",
        status: "Fully Indexed"
      };
      setIngestedPolicies([newDoc, ...ingestedPolicies]);
      setIsIngestingPolicy(false);
      showToast(`Document "${fileName}" parsed & 10 scenario MCQs indexed!`, "success");
    }, 1800);
  };

  // ----------------------------------------------------------------
  // MODULE 1: EXECUTIVE HOME & DIVISIONAL SNAPSHOT
  // ----------------------------------------------------------------
  function OverviewSection() {
    const selectedOfficerData = selectedOfficerFilter !== "all" ? HARDCODED_OFFICERS[selectedOfficerFilter] : null;

    // Selected officer's 4 active learning competency tracks
    const officerProgressionData = selectedOfficerData?.gaps?.slice(0, 4)?.map((g) => ({
      competency: g.domain.length > 20 ? g.domain.slice(0, 18) + "…" : g.domain,
      fullDomain: g.domain,
      code: g.code,
      currentLevel: g.currentLevel,
      requiredLevel: g.requiredLevel,
      gapScore: g.gapScore,
      severity: g.severity,
    })) || [];

    return (
      <div className="space-y-6 text-left animate-fadeIn">
        {/* TOP SELECTED OFFICER DEEP-DIVE WIDGET */}
        {selectedOfficerData ? (
          <SpotlightCard className="p-6 bg-white dark:bg-canvas-card-dark rounded-3xl border-2 border-primary/40 shadow-xl space-y-5 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0B192C] text-sky-200 flex items-center justify-center font-black text-base ring-2 ring-primary/40 shadow-md">
                  {selectedOfficerData?.name
                    ? selectedOfficerData.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
                    : "SO"}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {selectedOfficerData.name}
                    </h3>
                    <span className="badge badge-info text-2xs font-bold">
                      {selectedOfficerData.officialDesignation || selectedOfficerData.role}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-2xs border ${
                      selectedOfficerData.sparrowStatus?.includes("Synced")
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                    }`}>
                      {selectedOfficerData.sparrowStatus || "APAR Synced"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {selectedOfficerData.department} • Target Role: <strong className="text-primary font-bold">{selectedOfficerData.targetRole}</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-2xs text-slate-400 block font-bold uppercase">Assessed Readiness</span>
                  <span className="text-2xl font-black text-primary font-mono">
                    {selectedOfficerData.readinessScore || selectedOfficerData.skillReadiness}%
                  </span>
                </div>
                <button
                  onClick={() => setActive("assessment_studio")}
                  className="btn-primary text-xs py-2.5 px-4 rounded-xl font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <FileText size={14} /> Inspect Diagnostic Audit
                </button>
              </div>
            </div>

            {/* Officer's Live Visual Analytics Graphs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-1">
              {/* GRAPH 1: Target Benchmark vs Current Competency Progression */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Target size={15} className="text-primary" />
                    4-Track Competency Benchmark Visualizer
                  </h4>
                  <span className="text-2xs font-bold text-primary font-mono">{selectedOfficerData.name.split(" ")[0]}'s Skills</span>
                </div>
                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={officerProgressionData} margin={{ top: 10, right: 10, left: -25, bottom: 25 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                      <XAxis dataKey="competency" tick={{ fontSize: 9, fontWeight: 700 }} interval={0} angle={-12} textAnchor="end" />
                      <YAxis domain={[0, 4]} ticks={[0, 1, 2, 3, 4]} tick={{ fontSize: 10 }} tickFormatter={(v) => `L${v}`} />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (!active || !payload || !payload.length) return null;
                          const d = payload[0]?.payload || {};
                          return (
                            <div className="p-3 bg-slate-900/95 text-white rounded-xl border border-primary/40 shadow-xl text-left text-xs space-y-1">
                              <span className="font-extrabold text-teal-300 block">{d.fullDomain}</span>
                              <div className="text-2xs font-mono">
                                <div>Current: Level {d.currentLevel}</div>
                                <div>Target: Level {d.requiredLevel}</div>
                                <div className={d.gapScore < 0 ? "text-rose-400 font-bold" : "text-emerald-400 font-bold"}>
                                  Gap: {d.gapScore}
                                </div>
                              </div>
                            </div>
                          );
                        }}
                      />
                      <Bar dataKey="currentLevel" name="Current Level" fill="#0D9488" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="requiredLevel" name="Statutory Target" fill="#6366F1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-between text-2xs text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60 pt-1.5">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-teal-600" /> Current Level</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-indigo-600" /> Statutory Target</span>
                  <span className="font-bold text-emerald-500">FRAC Certified</span>
                </div>
              </div>

              {/* GRAPH 2: Officer's 6-Month Competency Trajectory */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <TrendingUp size={15} className="text-primary" />
                    Historical Competency Trajectory (vs 85% Target)
                  </h4>
                  <span className="text-2xs font-mono font-bold text-emerald-500">MoM +12.4%</span>
                </div>
                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={selectedOfficerData.timeline || COMPETENCY_TREND} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="officerLineGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0D9488" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#0D9488" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                      <XAxis dataKey="month" tick={{ fontSize: 10, fontWeight: 700 }} />
                      <YAxis domain={[50, 100]} tick={{ fontSize: 10 }} unit="%" />
                      <Tooltip content={<AdminTrendCustomTooltip />} />
                      <ReferenceLine y={85} stroke="#6366F1" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: "MoSPI Target (85%)", fill: "#818CF8", fontSize: 9, position: "insideTopRight" }} />
                      <Area type="monotone" dataKey="score" name="Assessed Score" stroke="#0D9488" strokeWidth={3} fill="url(#officerLineGrad)" />
                      <Line type="monotone" dataKey="score" stroke="#0D9488" strokeWidth={3} dot={{ r: 4, fill: "#0D9488" }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-between text-2xs text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60 pt-1.5">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-teal-500" /> Officer Trajectory</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Statutory Target (85%)</span>
                  <span className="font-bold text-primary">Next Review: 30-Apr</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        ) : (
          /* National Aggregated Cadre Banner when 'All Cadres' is selected */
          <SpotlightCard className="p-6 bg-gradient-to-r from-primary/10 via-teal-500/10 to-primary/5 rounded-3xl border border-primary/20 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="text-2xs font-black uppercase px-2.5 py-0.5 rounded-full bg-primary text-white">
                  National Aggregation Active
                </span>
                <span className="text-xs text-slate-500 font-bold">5 Cadre Directorates Audited</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                MoSPI Civil Services Competency & Diagnostic Monitoring Suite
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Aggregating 4,850 active personnel across Frontline Operations (Group C) and Gazetted Administration (Group B/A).
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleSelectOfficerRole("amit_mondal")}
                className="btn-secondary text-2xs py-2 px-3.5 rounded-xl font-bold cursor-pointer hover:bg-amber-500 hover:text-white transition-all shadow-xs"
              >
                Login as Amit (Frontline · FOD)
              </button>
              <button
                onClick={() => handleSelectOfficerRole("suparna_chatterjee")}
                className="btn-secondary text-2xs py-2 px-3.5 rounded-xl font-bold cursor-pointer hover:bg-emerald-500 hover:text-white transition-all shadow-xs"
              >
                Login as Suparna (Section Officer · NAD)
              </button>
            </div>
          </SpotlightCard>
        )}

        {/* 4 EXECUTIVE KPI SCORECARDS (CLEAN STATIC VALUES - ZERO RUNAWAY COUNTING BUG) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <SpotlightCard className="p-5 text-left bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xs font-extrabold uppercase tracking-wider text-slate-400">Total Officers Audited</span>
              <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary dark:text-teal-400 flex items-center justify-center">
                <Users size={16} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tight font-mono">
              4,850
            </div>
            <p className="text-2xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">Across 5 Cadre Divisions</p>
          </SpotlightCard>

          <SpotlightCard className="p-5 text-left bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xs font-extrabold uppercase tracking-wider text-slate-400">Org Competency Index</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Award size={16} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tight font-mono">
              78.4%
            </div>
            <p className="text-2xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1 flex items-center gap-1">
              <TrendingUp size={11} /> +2.3% MoM Composite Growth
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-5 text-left bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xs font-extrabold uppercase tracking-wider text-slate-400">Skill Gaps Closed</span>
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <CheckCircle2 size={16} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tight font-mono">
              1,240
            </div>
            <p className="text-2xs text-sky-600 dark:text-sky-400 font-semibold mt-1">Resolved via iGOT Bharat</p>
          </SpotlightCard>

          <SpotlightCard className="p-5 text-left bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xs font-extrabold uppercase tracking-wider text-slate-400">Training Hours Logged</span>
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Clock size={16} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tabular-nums tracking-tight font-mono">
              18,450 hrs
            </div>
            <p className="text-2xs text-amber-600 dark:text-amber-400 font-semibold mt-1">ACBP 2024–25 Accredited</p>
          </SpotlightCard>
        </div>

        {/* MULTI-DEPARTMENT RADAR HEATMAP & DIRECTORATE ANALYTICS SUITE */}
        <SpotlightCard className="p-6 sm:p-7 space-y-6 text-left bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <BlurReveal as="h3" className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Target size={20} className="text-sky-600" />
                Multi-Directorate Competency Radar & Comparative Matrix
              </BlurReveal>
              <p className="text-xs text-slate-500 mt-0.5">
                Statutory cross-departmental benchmark audit across 6 core competency domains (FOD · Frontline, NAD · National Accounts, DQAD · Methodology)
              </p>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 text-2xs font-bold flex-wrap bg-slate-50 dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800">
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                <span className="w-3 h-3 rounded-full bg-amber-500 shadow-xs" /> FOD (Amit's Wing)
              </span>
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-xs" /> NAD (Suparna's Wing)
              </span>
              <span className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400">
                <span className="w-3 h-3 rounded-full bg-sky-500 shadow-xs" /> DQAD (Methodology)
              </span>
              <span className="flex items-center gap-1.5 text-indigo-500">
                <span className="w-3 h-0.5 bg-indigo-500" /> Target (85%)
              </span>
            </div>
          </div>

          {/* 🌟 RADAR CHART DISPLAY */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="75%" data={DEPARTMENT_RADAR_DATA}>
                  <PolarGrid stroke="#94A3B8" strokeOpacity={0.25} />
                  <PolarAngleAxis
                    dataKey="domain"
                    tick={{ fill: "#64748B", fontSize: 11, fontWeight: 700 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    stroke="#94A3B8"
                    strokeOpacity={0.2}
                    tick={{ fontSize: 9 }}
                  />
                  {/* FOD (Amit's Wing) */}
                  <Radar
                    name="FOD (Frontline Staff · Amit Mondal)"
                    dataKey="fodAmit"
                    stroke="#F59E0B"
                    fill="#F59E0B"
                    fillOpacity={0.25}
                    strokeWidth={2.5}
                  />
                  {/* NAD (Suparna's Wing) */}
                  <Radar
                    name="NAD (National Accounts · Suparna Chatterjee)"
                    dataKey="nadSuparna"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.25}
                    strokeWidth={2.5}
                  />
                  {/* DQAD (Methodology Leader) */}
                  <Radar
                    name="DQAD (Data Quality & Methodology)"
                    dataKey="dqad"
                    stroke="#0284C7"
                    fill="#0284C7"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload || !payload.length) return null;
                      const d = payload[0]?.payload || {};
                      return (
                        <div className="p-3 bg-slate-900/95 text-white rounded-2xl border border-sky-500/40 shadow-2xl text-xs space-y-1.5 min-w-[220px]">
                          <span className="font-extrabold text-sky-300 block pb-1 border-b border-slate-700">
                            {d.fullDomain || d.domain}
                          </span>
                          <div className="space-y-1 font-mono text-2xs">
                            <div className="flex justify-between text-amber-400 font-bold">
                              <span>FOD (Amit):</span>
                              <span>{d.fodAmit}%</span>
                            </div>
                            <div className="flex justify-between text-emerald-400 font-bold">
                              <span>NAD (Suparna):</span>
                              <span>{d.nadSuparna}%</span>
                            </div>
                            <div className="flex justify-between text-sky-400 font-bold">
                              <span>DQAD:</span>
                              <span>{d.dqad}%</span>
                            </div>
                            <div className="flex justify-between text-indigo-400 pt-1 border-t border-slate-800">
                              <span>Statutory Target:</span>
                              <span>85%</span>
                            </div>
                          </div>
                        </div>
                      );
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Directorate Comparison Highlights */}
            <div className="lg:col-span-5 space-y-3">
              {/* TOP PERFORMING DEPARTMENT CARD */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-300/80 dark:border-emerald-800/60 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Star size={15} className="text-emerald-600 fill-emerald-600" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      Top Performing Directorate (#1 Ranked)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-xs font-black font-mono">
                    83.4% Avg
                  </span>
                </div>
                <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                  Data Quality & Survey Design (DQAD) & Economic Accounts (NAD)
                </h5>
                <p className="text-2xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Suparna Chatterjee's division (NAD)</strong> leads nationally in <strong>National Accounts (94%)</strong> and DPDP Compliance (85%). DQAD leads sampling design at <strong>94%</strong>.
                </p>
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 font-mono font-bold">
                  <span>620 Gazetted Officers Certified</span>
                  <span>Target Met: 94.2%</span>
                </div>
              </div>

              {/* PRIORITY FAST-TRACK SUPPORT CARD */}
              <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-800/60 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle size={15} className="text-amber-600" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                      Priority Fast-Track Support (Frontline Wing)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-xs font-black font-mono">
                    68.1% Avg
                  </span>
                </div>
                <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">
                  Field Operations Division (FOD · Frontline Staff)
                </h5>
                <p className="text-2xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Amit Kumar Mondal's division (FOD)</strong> shows high strength in <strong>Leadership (88%)</strong> and Sampling (82%), with priority upskilling underway for <strong>GIS & Spatial Mapping (45%)</strong>.
                </p>
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-300 font-mono font-bold">
                  <span>1,840 Active Field Staff</span>
                  <span>14 iGOT Batches Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* 🌟 5-DEPARTMENT NAMES & COMPARATIVE BENCHMARK CARDS */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Award size={14} className="text-sky-600" />
              Directorate Competency Ranks & Department Directory
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {FIVE_DEPARTMENTS_HEATMAP.map((dept, dIdx) => (
                <div
                  key={dept.dept}
                  className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2 hover:border-sky-400 transition-all text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                      Rank #{dIdx + 1}
                    </span>
                    <span className="text-sm font-black text-slate-900 dark:text-white font-mono">
                      {dept.avgScore}%
                    </span>
                  </div>
                  <div>
                    <h6 className="font-extrabold text-xs text-slate-900 dark:text-white leading-tight">
                      {dept.dept}
                    </h6>
                    <span className="text-[10px] text-slate-400 block mt-0.5 font-mono">
                      {dept.shortName} • {dept.officerCount} Staff
                    </span>
                  </div>
                  <div className="pt-1.5 border-t border-slate-200/60 dark:border-slate-800/60 text-[10px]">
                    <span className={`px-2 py-0.5 rounded-full font-bold inline-block ${
                      dept.badgeColor === "emerald"
                        ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300"
                        : dept.badgeColor === "amber"
                        ? "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300"
                        : "bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300"
                    }`}>
                      {dept.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* COMPARATIVE GRAPHS: 2026 Trajectory & Directorate Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpotlightCard className="p-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <TrendingUp size={16} className="text-primary" />
                  National Cadre Competency Index (2026 Trajectory)
                </h4>
                <p className="text-xs text-slate-500">Ministry-wide capacity progression vs. 85% Statutory Benchmark</p>
              </div>
              <span className="text-2xs font-extrabold px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 font-mono">
                Current: 78.4%
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={COMPETENCY_TREND} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="adminTrendTeal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0D9488" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#0D9488" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fontWeight: 700 }} />
                  <YAxis domain={[60, 100]} tick={{ fontSize: 10 }} unit="%" />
                  <Tooltip content={<AdminTrendCustomTooltip />} />
                  <ReferenceLine y={85} stroke="#6366F1" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: "MoSPI Target (85%)", fill: "#818CF8", fontSize: 9, position: "insideTopRight" }} />
                  <Area
                    type="monotone"
                    dataKey="index"
                    name="Cadre Index"
                    stroke="#0D9488"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#adminTrendTeal)"
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    name="Statutory Target"
                    stroke="#6366F1"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    dot={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between text-2xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary" /> Actual Index (78.4%)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> MoSPI Target Milestone (85%)</span>
              <span className="font-bold text-emerald-500">+10.2% Net Growth</span>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <BarChart3 size={16} className="text-primary" />
                  Directorate Readiness & Deficit Breakdown
                </h4>
                <p className="text-xs text-slate-500">Certified vs In Training vs Deficit ratio across divisions</p>
              </div>
              <span className="text-2xs font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                5 Directorates
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={DIVISION_COMPARATIVE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="division" tick={{ fontSize: 9, fontWeight: 700 }} tickFormatter={(d) => d.split(" ")[0]} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} unit="%" />
                  <Tooltip content={<DivisionBarCustomTooltip />} />
                  <ReferenceLine y={85} stroke="#6366F1" strokeDasharray="4 4" strokeWidth={1.5} />
                  <Bar dataKey="certified" name="Certified" fill="#0D9488" stackId="a" />
                  <Bar dataKey="inProgress" name="In Training" fill="#F59E0B" stackId="a" />
                  <Bar dataKey="deficit" name="Deficit" fill="#EF4444" stackId="a" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between text-2xs text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-teal-500" /> Certified (≥80%)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-amber-500" /> In Progress</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded bg-rose-500" /> Critical Deficit</span>
            </div>
          </SpotlightCard>
        </div>

        {/* CRITICAL CAPACITY WARNINGS */}
        <SpotlightCard className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle size={16} className="text-amber-500" />
                Mission Capacity Shortfalls & Fast-Track Interventions
              </h4>
              <p className="text-xs text-slate-500">Personnel requiring mandatory certification before statutory field surveys</p>
            </div>
            <span className="badge badge-warning text-[10px] font-bold">2 Active Alerts</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {CAPACITY_ALERTS.map((alt) => (
              <div key={alt.id} className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">{alt.title}</h4>
                  <span className="badge badge-warning text-[10px] font-black">{alt.severity.toUpperCase()}</span>
                </div>
                <p className="text-2xs text-slate-600 dark:text-slate-300 leading-relaxed">{alt.detail}</p>
                <div className="flex items-center justify-between text-2xs font-bold text-primary pt-1 border-t border-amber-200/40 dark:border-amber-800/40">
                  <span>Target: {alt.deadline}</span>
                  <span className="text-amber-600 dark:text-amber-400 font-extrabold">{alt.employeesNeeded} Personnel Required</span>
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    );
  }

  // ----------------------------------------------------------------
  // MODULE 2: ASSESSMENT ANALYTICS & QUESTION-BY-QUESTION AUDIT
  // ----------------------------------------------------------------
  function AssessmentStudioSection() {
    const filteredSubmissions = submissionsList.filter((sub) => {
      // Officer top navbar filter
      if (selectedOfficerFilter === "amit_mondal" && !sub.officerName?.includes("Amit")) return false;
      if (selectedOfficerFilter === "suparna_chatterjee" && !sub.officerName?.includes("Suparna")) return false;

      // Status filter
      if (submissionStatusFilter === "passed" && !sub.passed) return false;
      if (submissionStatusFilter === "failed" && sub.passed) return false;

      // Search filter
      if (submissionSearch) {
        const q = submissionSearch.toLowerCase();
        return (
          sub.officerName?.toLowerCase().includes(q) ||
          sub.submissionId?.toLowerCase().includes(q) ||
          sub.quizTitle?.toLowerCase().includes(q) ||
          sub.cadre?.toLowerCase().includes(q)
        );
      }
      return true;
    });

    return (
      <div className="space-y-6 text-left animate-fadeIn">
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
                <FileText size={22} className="text-primary" />
                Assessment Analytics & Diagnostic Audit Studio
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-2xs font-extrabold border border-primary/20">
                Blueprint Module 2
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Question-by-Question diagnostic audit, response verification, time spent, and statutory legal citations
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search submission or officer..."
                value={submissionSearch}
                onChange={(e) => setSubmissionSearch(e.target.value)}
                className="input-field pl-8 text-xs py-1.5 w-52"
              />
              <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            <select
              value={submissionStatusFilter}
              onChange={(e) => setSubmissionStatusFilter(e.target.value)}
              className="input-field text-xs py-1.5 cursor-pointer"
            >
              <option value="all">All Statuses</option>
              <option value="passed">Passed (≥60%)</option>
              <option value="failed">Needs Retest</option>
            </select>
          </div>
        </div>

        {/* SUBMISSIONS TABLE */}
        <SpotlightCard className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckSquare size={16} className="text-primary" />
              Official Examination & Diagnostic Submissions Log ({filteredSubmissions.length})
            </h3>
            <span className="text-2xs text-slate-400 font-medium">Click "Audit Responses" to view full question breakdown</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 bg-slate-50 dark:bg-slate-900/60">
                  <th className="py-3 px-4 text-left font-bold uppercase">Officer & ID</th>
                  <th className="py-3 px-4 text-left font-bold uppercase">Cadre & Department</th>
                  <th className="py-3 px-4 text-left font-bold uppercase">Assessment Title</th>
                  <th className="py-3 px-4 text-center font-bold uppercase">Score %</th>
                  <th className="py-3 px-4 text-center font-bold uppercase">Duration</th>
                  <th className="py-3 px-4 text-center font-bold uppercase">APAR Sync</th>
                  <th className="py-3 px-4 text-right font-bold uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {filteredSubmissions.map((sub) => (
                  <tr key={sub.submissionId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      <img
                        src={sub.officerAvatar}
                        alt={sub.officerName}
                        className="w-8 h-8 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-700 shrink-0"
                      />
                      <div>
                        <span>{sub.officerName}</span>
                        <span className="text-2xs font-mono text-slate-400 block">{sub.officerId}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">
                      <span className="font-bold block text-slate-800 dark:text-slate-200">{sub.designation}</span>
                      <span className="text-2xs text-slate-400">{sub.department}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-800 dark:text-slate-200 font-medium">
                      <span>{sub.quizTitle}</span>
                      <span className="text-2xs font-mono text-slate-400 block">{sub.submittedAt}</span>
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-black text-sm">
                      <span className={sub.scorePercent >= 60 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}>
                        {sub.scorePercent}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono text-2xs text-slate-500">
                      {Math.floor(sub.timeTakenSeconds / 60)}m {sub.timeTakenSeconds % 60}s
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="badge badge-mastered text-[10px] font-bold">
                        Eligible ✓
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setSelectedSubmissionDetail(sub)}
                        className="btn-primary text-2xs py-1.5 px-3 rounded-xl font-bold flex items-center gap-1.5 ml-auto cursor-pointer shadow-xs"
                      >
                        <Eye size={12} /> Audit Responses
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SpotlightCard>

        {/* QUESTION-BY-QUESTION AUDIT STUDIO (BLUEPRINT SECTION 5.3) */}
        {selectedSubmissionDetail && (
          <SpotlightCard className="p-6 sm:p-8 bg-white dark:bg-canvas-card-dark rounded-3xl border-2 border-primary/40 shadow-xl space-y-6 animate-fadeIn text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={selectedSubmissionDetail.officerAvatar}
                  alt={selectedSubmissionDetail.officerName}
                  className="w-12 h-12 rounded-2xl object-cover ring-2 ring-primary/40 shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black text-slate-900 dark:text-white">
                      {selectedSubmissionDetail.officerName} — Question-by-Question Audit Studio
                    </h3>
                    <span className="badge badge-info text-2xs">{selectedSubmissionDetail.submissionId}</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {selectedSubmissionDetail.designation} • {selectedSubmissionDetail.department} • Assessed Score: <strong>{selectedSubmissionDetail.scorePercent}%</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedSubmissionDetail(null)}
                  className="btn-secondary text-xs py-2 px-3 rounded-xl font-bold flex items-center gap-1 cursor-pointer"
                >
                  <X size={13} /> Close Audit
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Detailed Responses & Statutory Citations ({selectedSubmissionDetail.answers?.length || 0} Questions Evaluated)
                </h4>
                <div className="flex items-center gap-3 text-2xs font-bold font-mono">
                  <span className="text-emerald-500">✓ {selectedSubmissionDetail.correctCount} Correct</span>
                  <span className="text-rose-500">✗ {selectedSubmissionDetail.wrongCount} Deficit</span>
                </div>
              </div>

              {selectedSubmissionDetail.answers?.map((ans, aIdx) => (
                <div
                  key={ans.questionId}
                  className={`p-5 rounded-2xl border ${
                    ans.isCorrect
                      ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60"
                      : "bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/60"
                  } space-y-3`}
                >
                  <div className="flex items-center justify-between text-2xs font-bold">
                    <span className="text-slate-600 dark:text-slate-300 font-mono">
                      Question {aIdx + 1} ({ans.questionId}) • Bloom Level: <strong>{ans.bloomLevel}</strong>
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 font-mono flex items-center gap-1">
                        <Clock size={11} /> Time Spent: {ans.timeSpentSec}s
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full font-black text-2xs ${
                        ans.isCorrect ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                      }`}>
                        {ans.isCorrect ? "Validated Correct ✓" : "Diagnosed Deficit ✗"}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                    {ans.questionText}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-2xs">
                    <div className={`p-2.5 rounded-xl border ${
                      ans.isCorrect ? "bg-white dark:bg-slate-900 border-emerald-200 dark:border-emerald-900/40" : "bg-white dark:bg-slate-900 border-rose-200 dark:border-rose-900/40"
                    }`}>
                      <span className="text-slate-400 block font-semibold">Candidate's Selected Response:</span>
                      <span className={`font-black ${ans.isCorrect ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                        Option {ans.selectedOption}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40">
                      <span className="text-slate-400 block font-semibold">Official Answer Key:</span>
                      <span className="font-black text-emerald-600 dark:text-emerald-400">
                        Option {ans.correctOption}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-2xs space-y-1">
                    <p className="font-mono text-primary font-bold flex items-center gap-1.5">
                      <BookOpen size={12} className="shrink-0" />
                      <span>Statutory Citation:</span> {ans.citation}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      <strong>Audit Diagnosis:</strong> {ans.remark}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        )}
      </div>
    );
  }

  // ----------------------------------------------------------------
  // MODULE 3: CURRICULUM & RESOURCE LINK MANAGER
  // ----------------------------------------------------------------
  function CurriculumResourceManagerSection() {
    const filteredLinks = verifiedLinks.filter((lnk) => {
      if (resourceTypeFilter !== "all" && lnk.type !== resourceTypeFilter) return false;
      if (resourceSearch) {
        const q = resourceSearch.toLowerCase();
        return lnk.title?.toLowerCase().includes(q) || lnk.provider?.toLowerCase().includes(q) || lnk.domain?.toLowerCase().includes(q);
      }
      return true;
    });

    return (
      <div className="space-y-6 text-left animate-fadeIn">
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Upload size={22} className="text-primary" />
                Curriculum & Resource Link Manager
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-2xs font-extrabold border border-primary/20">
                Blueprint Module 3
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Verified External Link Integrator (Google, YouTube, iGOT Bharat, Gov.in) & Statutory Policy Ingestion
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddResourceModal(true)}
              className="btn-primary text-xs py-2 px-4 rounded-xl font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Plus size={14} /> Add Verified Resource Link
            </button>
          </div>
        </div>

        {/* PART 1: VERIFIED EXTERNAL RESOURCE LINKER (BLUEPRINT SECTION 5.4) */}
        <SpotlightCard className="p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Globe size={16} className="text-primary" />
                Verified Training Resource Links ({filteredLinks.length})
              </h3>
              <p className="text-xs text-slate-500">Official curated materials mapped to specific FRAC competency domains</p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-2xs font-bold">
                {["all", "igot", "youtube", "gov", "google"].map((tKey) => (
                  <button
                    key={tKey}
                    onClick={() => setResourceTypeFilter(tKey)}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      resourceTypeFilter === tKey ? "bg-primary text-white font-black shadow-xs" : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
                    }`}
                  >
                    {tKey === "all" ? "All Sources" : tKey.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={resourceSearch}
                  onChange={(e) => setResourceSearch(e.target.value)}
                  className="input-field pl-8 text-xs py-1.5 w-44"
                />
                <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLinks.map((lnk) => (
              <div
                key={lnk.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xs font-extrabold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      {lnk.provider}
                    </span>
                    <span className="text-2xs font-bold text-slate-400 font-mono">{lnk.duration} • {lnk.credits} Credits</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">{lnk.title}</h4>
                  <p className="text-2xs text-slate-500">Domain: <strong className="text-primary">{lnk.domain}</strong></p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-2xs font-mono text-slate-400 font-bold">{lnk.id}</span>
                  <a
                    href={lnk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-2xs py-1.5 px-3 rounded-xl font-bold flex items-center gap-1.5"
                  >
                    <span>Verify Link</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </SpotlightCard>

        {/* PART 2: DOCUMENT & POLICY INGESTION ENGINE (BLUEPRINT SECTION 5.4) */}
        <SpotlightCard className="p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <FileCheck2 size={16} className="text-primary" />
                Statutory Policy & Circular Ingestion Engine
              </h3>
              <p className="text-xs text-slate-500">Ingest government manuals to automatically index Bloom-aligned scenario questions</p>
            </div>
            <span className="text-2xs font-bold text-emerald-600 dark:text-emerald-400">AI Synthesizer Active ✓</span>
          </div>

          {/* Ingestion Dropzone */}
          <div className="p-6 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 dark:bg-primary/10 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center">
              <Upload size={24} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                Upload Official Gazette Circulars & Operating Manuals
              </h4>
              <p className="text-2xs text-slate-500 mt-0.5">
                Supports PDF, DOCX, PPTX (GFR, DoPT OMs, NSSO Manuals). Automatically parses legal articles.
              </p>
            </div>

            {isIngestingPolicy ? (
              <div className="w-full max-w-md space-y-2 py-2">
                <div className="flex justify-between text-2xs font-mono font-bold">
                  <span className="text-primary">{ingestStatusText}</span>
                  <span className="text-slate-400">{ingestProgress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${ingestProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => handleSimulateIngestion()}
                className="btn-primary text-xs py-2.5 px-5 rounded-xl font-bold flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Upload size={14} /> Parse & Ingest Sample Policy PDF
              </button>
            )}
          </div>

          {/* Ingested Documents List */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Currently Ingested Statutory Repositories</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {ingestedPolicies.map((doc) => (
                <div key={doc.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-2xs font-mono text-slate-400">
                    <span>{doc.id}</span>
                    <span className="text-emerald-500 font-bold">{doc.status}</span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">{doc.name}</h5>
                  <div className="flex items-center justify-between text-2xs pt-1 border-t border-slate-200/40 dark:border-slate-700/40 text-slate-500">
                    <span>{doc.source}</span>
                    <span className="font-extrabold text-primary">{doc.mcqsGenerated} MCQs Generated</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* ADD RESOURCE MODAL */}
        {showAddResourceModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                  <Plus size={16} className="text-primary" /> Add Verified External Training Resource
                </h3>
                <button onClick={() => setShowAddResourceModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleAddResource} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Resource Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Overview of GFR 2017 & Public Procurement Guidelines"
                    value={newResourceForm.title}
                    onChange={(e) => setNewResourceForm({ ...newResourceForm, title: e.target.value })}
                    className="input-field text-xs"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">External Resource URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://..."
                    value={newResourceForm.url}
                    onChange={(e) => setNewResourceForm({ ...newResourceForm, url: e.target.value })}
                    className="input-field text-xs font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Offering Body / Provider</label>
                    <input
                      type="text"
                      placeholder="e.g. iGOT Karmayogi / NIFM"
                      value={newResourceForm.provider}
                      onChange={(e) => setNewResourceForm({ ...newResourceForm, provider: e.target.value })}
                      className="input-field text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Resource Type</label>
                    <select
                      value={newResourceForm.type}
                      onChange={(e) => setNewResourceForm({ ...newResourceForm, type: e.target.value })}
                      className="input-field text-xs"
                    >
                      <option value="igot">iGOT Bharat</option>
                      <option value="youtube">YouTube Lecture</option>
                      <option value="gov">Gov.in Portal</option>
                      <option value="google">Google Portal / Drive</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Duration</label>
                    <input
                      type="text"
                      value={newResourceForm.duration}
                      onChange={(e) => setNewResourceForm({ ...newResourceForm, duration: e.target.value })}
                      className="input-field text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Accreditation Credits</label>
                    <input
                      type="number"
                      value={newResourceForm.credits}
                      onChange={(e) => setNewResourceForm({ ...newResourceForm, credits: Number(e.target.value) })}
                      className="input-field text-xs"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddResourceModal(false)}
                    className="btn-secondary text-xs py-2 px-4 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary text-xs py-2 px-5 rounded-xl font-bold">
                    Save & Publish Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ----------------------------------------------------------------
  // MODULE 4: CADRE LEADERBOARD & APAR GOVERNANCE
  // ----------------------------------------------------------------
  function LeaderboardSection() {
    return (
      <div className="space-y-6 text-left animate-fadeIn">
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Trophy size={22} className="text-primary" />
                Cadre Leaderboard & APAR Governance
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-2xs font-extrabold border border-primary/20">
                Blueprint Module 4
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Divisional capacity rankings, competency growth velocity, and civil services SPARROW credit sync
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => showToast("Exported SPARROW Compliance Audit Report (CSV)!", "success")}
              className="btn-secondary text-xs py-2 px-3 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Download size={13} /> Export SPARROW Report
            </button>
          </div>
        </div>

        {/* APAR / SPARROW ACCREDITATION MONITOR (BLUEPRINT SECTION 5.5) */}
        <SpotlightCard className="p-6 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/5 rounded-3xl border border-emerald-500/30 shadow-card space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-500/20 pb-3">
            <div>
              <span className="text-2xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Statutory Civil Services Appraisal Monitor
              </span>
              <h3 className="text-base font-black text-slate-900 dark:text-white mt-0.5">
                Annual ACBP & SPARROW Credit Synchronization Status (2024–25 Cycle)
              </h3>
            </div>
            <span className="px-3 py-1 rounded-xl bg-emerald-500 text-white font-black text-xs shadow-sm">
              76.9% Annual Target Met
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/20 space-y-1">
              <span className="text-2xs text-slate-400 font-bold uppercase">Total Hours Accredited</span>
              <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">18,450 / 24,000 hrs</div>
              <p className="text-2xs text-slate-500">Ministry-wide civil service goal</p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/20 space-y-1">
              <span className="text-2xs text-slate-400 font-bold uppercase">Next Statutory Deadline</span>
              <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">30th April 2027</div>
              <p className="text-2xs text-slate-500">SPARROW Self-Appraisal window</p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/20 space-y-1">
              <span className="text-2xs text-slate-400 font-bold uppercase">Sync Gateway Status</span>
              <div className="text-2xl font-black text-primary font-mono">Automated NIC API</div>
              <p className="text-2xs text-emerald-600 font-bold">Encrypted DSC Tokens Active ✓</p>
            </div>
          </div>
        </SpotlightCard>

        {/* CADRE RANKINGS TABLE (BLUEPRINT SECTION 5.5) */}
        <SpotlightCard className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Trophy size={16} className="text-primary" />
                Cadre Division Competency Velocity Leaderboard
              </h3>
              <p className="text-xs text-slate-500">Top-performing officers ranked by verified competency acquisition</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 bg-slate-50 dark:bg-slate-900/60">
                  <th className="py-3 px-4 text-left font-bold uppercase">Rank & Officer</th>
                  <th className="py-3 px-4 text-left font-bold uppercase">Cadre Division</th>
                  <th className="py-3 px-4 text-center font-bold uppercase">Total XP</th>
                  <th className="py-3 px-4 text-center font-bold uppercase">Growth Velocity</th>
                  <th className="py-3 px-4 text-center font-bold uppercase">SPARROW Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {LEADERBOARD.slice(0, 8).map((officer, idx) => (
                  <tr key={officer.id || idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg text-2xs font-black flex items-center justify-center ${
                        idx === 0 ? "bg-amber-400 text-slate-900 font-black shadow-xs" : idx === 1 ? "bg-slate-300 text-slate-900 font-bold" : idx === 2 ? "bg-amber-700/80 text-white font-bold" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                      }`}>
                        {idx + 1}
                      </span>
                      <img
                        src={officer.avatar}
                        alt={officer.name}
                        className="w-8 h-8 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-700 shrink-0"
                      />
                      <div>
                        <span>{officer.name}</span>
                        <span className="text-2xs font-mono text-slate-400 block">{officer.designation}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 font-medium">
                      {officer.department}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-black text-primary">
                      {officer.xp || 1420} XP
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                      +{18 - idx * 2}% MoM
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="badge badge-mastered text-[10px] font-bold">
                        Target Synced ✓
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SpotlightCard>
      </div>
    );
  }

  // ----------------------------------------------------------------
  // MODULE 5: GOVERNANCE & GIGW SETTINGS
  // ----------------------------------------------------------------
  function SettingsSection() {
    return (
      <div className="space-y-6 text-left animate-fadeIn">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Settings size={22} className="text-primary" />
            Admin Governance & GIGW 3.0 Compliance
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Statutory examination thresholds, SPARROW sync schedule, and Parichay SSO configurations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SpotlightCard className="p-6 space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" />
              Statutory Exam & Passing Rules
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-300">Minimum Diagnostic Passing Score</span>
                <span className="font-mono font-black text-primary">60% (Accredited)</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-300">Annual Training Hour Requirement</span>
                <span className="font-mono font-black text-primary">50 Hours / Year</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-300">Automatic APAR Sync Trigger</span>
                <span className="badge badge-mastered text-2xs">Enabled (Direct NIC API)</span>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6 space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 size={16} className="text-primary" />
              Government Single Sign-On & Security
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-300">Parichay / MeriPehchan SSO Status</span>
                <span className="text-emerald-600 font-bold">Operational (99.99% SLA)</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-300">Audit Logging & Hash Verification</span>
                <span className="text-emerald-600 font-bold">SHA-256 Enabled ✓</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-300">GIGW 3.0 Accessibility Rating</span>
                <span className="badge badge-info text-2xs">AAA Fully Compliant</span>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-slate-50 dark:bg-[#080C14]">
      {/* 1. FULL-HEIGHT 100% SIDEBAR WITH DAKSH PLATFORM EMBLEM */}
      <Sidebar
        navItems={navItems}
        active={active}
        onSelect={handleNavSelect}
        onLogout={handleLogout}
        user={ADMIN_PROFILE}
        subtitle={lang === "hi" ? "प्रशासनिक कंसोल" : "Admin Console"}
      />

      {/* 2. MAIN CONTENT WRAPPER WITH TOP NAVBAR */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        {/* TOP HEADER / NAVBAR WITH DAKSH EMBLEM */}
        <header className="h-16 shrink-0 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-canvas-card-dark/95 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3.5 min-w-0">
            {/* DAKSH Brand Badge */}
            <Link to="/" className="flex items-center gap-2.5 select-none group shrink-0" aria-label="DAKSH Home">
              <img
                src="/assets/daksh-logo.png"
                alt="DAKSH"
                className="w-8 h-8 rounded-lg object-contain bg-white dark:bg-slate-900 p-1 shadow-xs border border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span className="font-black text-sm tracking-tight text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
                DAKSH
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/15 text-sky-600 dark:text-sky-400 font-extrabold border border-sky-500/30">
                  ADMIN
                </span>
              </span>
            </Link>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

            <div className="leading-tight hidden md:block">
              <span className="font-extrabold text-xs text-slate-900 dark:text-white block truncate">
                {lang === "hi" ? "सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय (MoSPI)" : "Ministry of Statistics & Programme Implementation"}
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                Civil Services Competency & Diagnostic Monitoring Suite (ACBP 2024–25)
              </span>
            </div>
          </div>

          {/* TOP NAVBAR CONTROLS */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Cadre Focus Switcher */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs font-bold shadow-xs">
              <Users size={14} className="text-primary shrink-0" />
              <span className="text-slate-400 hidden lg:inline">Switch Role / Cadre:</span>
              <select
                value={selectedOfficerFilter}
                onChange={(e) => {
                  const val = e.target.value;
                  handleSelectOfficerRole(val);
                }}
                className="bg-transparent text-slate-800 dark:text-slate-100 font-extrabold focus:outline-none cursor-pointer text-xs"
              >
                <option value="all">Admin Overview (National Aggregation)</option>
                <option value="amit_mondal">Amit Kumar Mondal (Frontline Staff · FOD)</option>
                <option value="suparna_chatterjee">Suparna Chatterjee (Section Officer · NAD)</option>
              </select>
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              title="Switch Language"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/80 transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer"
            >
              <Globe size={14} className="text-primary" />
              <span>{lang === "en" ? "हिन्दी" : "EN"}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle Dark / Light Mode"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/80 transition-colors flex items-center cursor-pointer"
            >
              {isDark ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-slate-700" />}
            </button>
          </div>
        </header>

        {/* MAIN SCROLLABLE DASHBOARD VIEW */}
        <main className="flex-1 h-full overflow-y-auto p-4 sm:p-7 relative">
          <div className="max-w-5xl mx-auto w-full pb-10">
            {loading ? (
              <SkeletonSection />
            ) : (
              <SectionWrapper key={active}>
                {active === "overview" && <OverviewSection />}
                {active === "assessment_studio" && <AssessmentStudioSection />}
                {active === "resource_manager" && <CurriculumResourceManagerSection />}
                {active === "leaderboard" && <LeaderboardSection />}
                {active === "settings" && <SettingsSection />}
              </SectionWrapper>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
