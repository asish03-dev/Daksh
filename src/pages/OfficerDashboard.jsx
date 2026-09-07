import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BarChart3, BookOpen, FileText, BrainCircuit, Bell,
  LogOut, ChevronRight, Upload, Play, CheckCircle2, Clock,
  TrendingUp, AlertTriangle, Star, ShieldCheck, Award, Search, X,
  Terminal, Video, Presentation, FileCode, Check, User, Sun, Moon,
  Layers, Compass, Activity, ArrowUpRight, ArrowRight, Sparkles, Download,
  ExternalLink, CheckCircle, FileCheck2, Printer, HelpCircle,
  Calendar, CalendarDays, Filter, RefreshCw, Settings, Sliders,
  QrCode, Share2, Eye, ChevronDown, CheckSquare, MessageSquare,
  Flame, BookCheck, FileSpreadsheet, Lock, Laptop, Code2, MapPin, Tag, ArrowUp,
  Target, Volume2, VolumeX, Smartphone, KeyRound, Globe, Trash2, Database, Users, Plus
} from "lucide-react";
import {
  FracLevelBar, StatusBadge, BloomTag, ScoreRing, LoadingSpinner,
  ChatErrorBoundary, EmptyState
} from "../components/ui";
import { SkeletonSection, SkeletonCard } from "../components/SkeletonLoader";
import { useUser, DEFAULT_AVATARS } from "../context/UserContext";
import { BRAND_CONFIG } from "../config/branding";
import {
  HARDCODED_OFFICERS, TRAINING_DOCUMENTS, QUIZ_DATA, QUIZZES_LIST, COMPETENCY_RADAR_DATA,
  PROGRESS_TIMELINE, COURSE_COMPLETION_DIST, SURVEY_SCRUTINY_DATA,
  CALENDAR_EVENTS, SKILL_GAP_BAR_DATA, BLOOM_PERFORMANCE_DATA,
  OFFICER_TRANSCRIPT, ASSESSMENT_SUBMISSIONS, COURSES as INITIAL_COURSES,
  LEARNING_PATHS, OFFICER_QUIZ_ATTEMPTS
} from "../data/mockData";
import {
  getLocalizedCourse, getLocalizedCompetency,
  getLocalizedQuiz, getLocalizedEvent
} from "../i18n/hindiTranslations";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, PieChart, Pie, Cell, Legend, BarChart, Bar, ReferenceLine
} from "recharts";
import Sidebar from "../components/Sidebar";
import CourseSkillHeatmap from "../components/learning/CourseSkillHeatmap";
import Setu from "./Setu";
import VirtualLab from "../components/VirtualLab";
import CoursePlayerModal from "../components/CoursePlayerModal";
import OfficialCertificate from "../components/OfficialCertificate";
import GamifiedRoadmapHub, { ROADMAP_NODES } from "../components/learning/GamifiedRoadmapHub";
import { useTheme } from "../context/ThemeContext";
import CountUp from "../components/animations/CountUp";
import SpotlightCard from "../components/animations/SpotlightCard";
import BlurReveal from "../components/animations/BlurReveal";
import BorderBeam from "../components/animations/BorderBeam";
import AnimatedTabs from "../components/animations/AnimatedTabs";
import AuroraBackground from "../components/animations/AuroraBackground";
import ShinyText from "../components/animations/ShinyText";
import DecryptedText from "../components/animations/DecryptedText";
import { motion, AnimatePresence } from "framer-motion";

/** Animated section wrapper */

/** Animated section wrapper */
function SectionWrapper({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ----------------------------------------------------------------
// 6-DOMAIN PAIRED HISTOGRAM DATA (Assessed vs Required - High Mastery Profile)
// ----------------------------------------------------------------
const COMPETENCY_GAP_HISTOGRAM_DATA = [
  {
    id: "sampling",
    domain: "Survey Sampling",
    assessed: 94,
    required: 90,
    hasGap: false,
    assessedStatus: "check",
    requiredStatus: "check",
    gapText: null,
    surplusText: "+4% Mastered",
    icon: BarChart3,
    courseRecommendation: "Advanced Multistage Stratification & PPS (Mastery Achieved)"
  },
  {
    id: "sna",
    domain: "National Accounts (SNA)",
    assessed: 88,
    required: 90,
    hasGap: true,
    assessedStatus: "check",
    requiredStatus: "gap",
    gapText: "-2% Gap",
    surplusText: null,
    icon: TrendingUp,
    courseRecommendation: "SNA 2008 & Supply-Use Table (SUT) Matrix"
  },
  {
    id: "python",
    domain: "Python Data Science",
    assessed: 92,
    required: 88,
    hasGap: false,
    assessedStatus: "check",
    requiredStatus: "check",
    gapText: null,
    surplusText: "+4% Mastered",
    icon: Code2,
    courseRecommendation: "Python for Official Statistics & Big Data (Certified)"
  },
  {
    id: "gis",
    domain: "GIS Boundary Mapping",
    assessed: 96,
    required: 92,
    hasGap: false,
    assessedStatus: "check",
    requiredStatus: "check",
    gapText: null,
    surplusText: "+4% Mastered",
    icon: MapPin,
    courseRecommendation: "Geospatial Boundary Delineation (QGIS Masterclass)"
  },
  {
    id: "cpi",
    domain: "Price Indices (CPI)",
    assessed: 86,
    required: 90,
    hasGap: true,
    assessedStatus: "check",
    requiredStatus: "gap",
    gapText: "-4% Gap",
    surplusText: null,
    icon: Tag,
    courseRecommendation: "CPI/WPI Weighting Revision & Aggregation (In Progress)"
  },
  {
    id: "dpdp",
    domain: "DPDP Data Privacy",
    assessed: 91,
    required: 90,
    hasGap: false,
    assessedStatus: "check",
    requiredStatus: "check",
    gapText: null,
    surplusText: "+1% Mastered",
    icon: Lock,
    courseRecommendation: "Digital Personal Data Protection (DPDP 2023) Mandates"
  }
];

// ----------------------------------------------------------------
// 6-DOMAIN HORIZONTAL BENCHMARK MATRIX DATA
// ----------------------------------------------------------------
const COMPETENCY_BENCHMARK_ROWS = [
  {
    id: "sampling",
    domain: "Survey Sampling Design & PPS",
    current: 82,
    required: 95,
    nationalAvg: 68,
    icon: BarChart3,
    recommendation: "Advanced Multistage Stratification & PPS (NSSTA)"
  },
  {
    id: "sna",
    domain: "National Accounts (SNA 2008 & SUT)",
    current: 65,
    required: 85,
    nationalAvg: 58,
    icon: TrendingUp,
    recommendation: "SNA 2008 & Supply-Use Table (SUT) Matrix"
  },
  {
    id: "python",
    domain: "Python for Official Data & ML",
    current: 78,
    required: 90,
    nationalAvg: 62,
    icon: Code2,
    recommendation: "Python for Official Statistics & Big Data"
  },
  {
    id: "gis",
    domain: "GIS Spatial Boundary Delineation",
    current: 58,
    required: 80,
    nationalAvg: 52,
    icon: MapPin,
    recommendation: "Geospatial Boundary Delineation (QGIS Masterclass)"
  },
  {
    id: "cpi",
    domain: "Price Indices (CPI / WPI Construction)",
    current: 88,
    required: 85,
    nationalAvg: 74,
    icon: Tag,
    recommendation: "CPI/WPI Weighting Revision & Aggregation"
  },
  {
    id: "dpdp",
    domain: "DPDP Data Privacy Mandates",
    current: 74,
    required: 90,
    nationalAvg: 70,
    icon: Lock,
    recommendation: "Digital Personal Data Protection (DPDP 2023) Mandates"
  }
];

// ----------------------------------------------------------------
// ENHANCED 6-MONTH PROGRESS TIMELINE DATA
// ----------------------------------------------------------------
const ENHANCED_TRENDS_DATA = [
  {
    month: "Mar",
    fullMonth: "March 2026",
    evaluation: "Q1 Baseline Diagnostic Exam",
    score: 56,
    target: 65,
    benchmark: 62,
    questionsTotal: 50,
    questionsCorrect: 28,
    questionsWrong: 22,
    accuracy: "56%",
    avgTimePerQ: "62s",
    sparrowStatus: "Pending",
    focusGaps: "Sampling Theory, Probability Basics"
  },
  {
    month: "Apr",
    fullMonth: "April 2026",
    evaluation: "NSSTA Monthly Modular Assessment",
    score: 61,
    target: 68,
    benchmark: 63,
    questionsTotal: 50,
    questionsCorrect: 31,
    questionsWrong: 19,
    accuracy: "62%",
    avgTimePerQ: "58s",
    sparrowStatus: "In Progress",
    focusGaps: "Price Indices (CPI) Formulas & Weights"
  },
  {
    month: "May",
    fullMonth: "May 2026",
    evaluation: "Mid-Term Cadre Diagnostic",
    score: 64,
    target: 71,
    benchmark: 65,
    questionsTotal: 50,
    questionsCorrect: 34,
    questionsWrong: 16,
    accuracy: "68%",
    avgTimePerQ: "54s",
    sparrowStatus: "In Progress",
    focusGaps: "SNA 2008 & SUT Matrix Compilation"
  },
  {
    month: "Jun",
    fullMonth: "June 2026",
    evaluation: "Q2 Summative Cadre Exam",
    score: 68,
    target: 74,
    benchmark: 66,
    questionsTotal: 50,
    questionsCorrect: 37,
    questionsWrong: 13,
    accuracy: "74%",
    avgTimePerQ: "51s",
    sparrowStatus: "Qualified",
    focusGaps: "Python Pandas & Cleaning Pipelines"
  },
  {
    month: "Jul",
    fullMonth: "July 2026",
    evaluation: "Digital India AI & Law Assessment",
    score: 71,
    target: 77,
    benchmark: 67,
    questionsTotal: 50,
    questionsCorrect: 39,
    questionsWrong: 11,
    accuracy: "78%",
    avgTimePerQ: "49s",
    sparrowStatus: "Qualified",
    focusGaps: "DPDP 2023 Consent Architecture"
  },
  {
    month: "Aug",
    fullMonth: "August 2026",
    evaluation: "Final Q3 Competency Evaluation",
    score: 74.8,
    target: 80,
    benchmark: 68.5,
    questionsTotal: 50,
    questionsCorrect: 42,
    questionsWrong: 8,
    accuracy: "84%",
    avgTimePerQ: "48s",
    sparrowStatus: "APAR Target Met ✓",
    focusGaps: "National Accounts Deficit Bridge"
  }
];

/** Rich Interactive Glassmorphism Tooltip for Trends Chart */
function TrendsCustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-700 p-4 rounded-2xl shadow-2xl text-left max-w-xs z-50 text-xs select-none">
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-primary">{data.fullMonth || data.month}</p>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-xs leading-tight">{data.evaluation}</h4>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-black text-[10px] border border-emerald-200 dark:border-emerald-800">
            {data.sparrowStatus}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
          <div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">Your Readiness</p>
            <p className="text-sm font-black text-primary tabular-nums">{data.score}%</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">Cadre Benchmark</p>
            <p className="text-sm font-black text-emerald-600 dark:text-emerald-400 tabular-nums">{data.benchmark}%</p>
          </div>
        </div>

        <div className="space-y-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-300">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
              <CheckCircle2 size={12} /> Correct Answers:
            </span>
            <span className="font-black text-slate-900 dark:text-white">{data.questionsCorrect} / {data.questionsTotal} ({data.accuracy})</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-red-500 dark:text-red-400 font-bold">
              <X size={12} /> Incorrect / Gaps:
            </span>
            <span className="font-black text-red-600 dark:text-red-400">{data.questionsWrong} Questions</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
              <Clock size={12} /> Avg Time / Question:
            </span>
            <span className="font-bold text-slate-800 dark:text-slate-200">{data.avgTimePerQ}</span>
          </div>
        </div>

        <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px]">
          <span className="font-bold text-slate-700 dark:text-slate-300">Primary Focus Areas: </span>
          <span className="text-slate-500 dark:text-slate-400 font-medium">{data.focusGaps}</span>
        </div>
      </div>
    );
  }
  return null;
}

/** Custom Interactive Glassmorphism Tooltip for FRAC Donut Chart */
function FracDonutCustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-700 p-3.5 rounded-2xl shadow-2xl text-left max-w-xs z-50 text-xs select-none">
        <div className="flex items-center justify-between gap-2 pb-1.5 mb-1.5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: data.color }} />
            <h4 className="font-extrabold text-slate-900 dark:text-white text-xs">{data.shortName} • {data.name}</h4>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black text-[10px]">
            {data.value} Skills ({Math.round((data.value / 14) * 100)}%)
          </span>
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {data.description}
        </p>
      </div>
    );
  }
  return null;
}

// ----------------------------------------------------------------
// 14 STATUTORY FRAC COMPETENCIES 4-LEVEL BREAKDOWN WITH LINKED COURSES
// ----------------------------------------------------------------
const FRAC_LEVEL_BREAKDOWN = [
  {
    level: "Level 4 (Advanced / Expert)",
    name: "Mastery",
    shortName: "Level 4",
    value: 5,
    color: "#10B981", // Emerald
    bgLight: "bg-emerald-50 dark:bg-emerald-950/40",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    textColor: "text-emerald-700 dark:text-emerald-300",
    description: "Autonomous policy formulation & NSSTA mentor capability",
    skills: [
      {
        id: "CRS-SAMP-301",
        name: "Survey Sampling Design & PPS",
        code: "FRAC-STAT-01",
        status: "Certified",
        hours: "48 hrs",
        duration: "48 Hours",
        provider: "NSSTA (National Statistical Systems Training Academy)",
        credits: 8,
        format: "Hands-on Masterclass & Field Sandbox",
        modulesCount: 8,
        description: "Advanced multi-stage stratified sampling frameworks, systematic probability proportional to size (PPS), and Jackknife variance estimation.",
        syllabus: [
          "1. Multi-Stage Frame Construction & Auxiliary Variable Stratification",
          "2. Probability Proportional to Size (PPS) Systematics & Hansen-Hurwitz Models",
          "3. Complex Variance Estimation, Jackknife & Bootstrap Replicates",
          "4. Non-Sampling Error Adjustments, Imputation & Weight Multipliers"
        ]
      },
      {
        id: "CRS-GIS-101",
        name: "GIS Spatial Boundary Delineation",
        code: "FRAC-GIS-04",
        status: "Certified",
        hours: "36 hrs",
        duration: "36 Hours",
        provider: "iGOT Karmayogi Bharat",
        credits: 6,
        format: "Interactive Spatial Sandbox",
        modulesCount: 6,
        description: "QGIS map layout design, geo-referencing boundary shapefiles, and spatial cluster verification for national surveys.",
        syllabus: [
          "1. Coordinate Reference Systems (CRS) & Projection Standards in India",
          "2. Vector & Raster Boundary Shapefile Digitization",
          "3. Geo-tagging Primary Sampling Units (PSUs) & Enumeration Blocks",
          "4. Spatial Density Heatmaps & Cluster Discrepancy Audits"
        ]
      },
      {
        id: "CRS-CPI-201",
        name: "Price Indices (CPI/WPI) Construction",
        code: "FRAC-STAT-03",
        status: "Certified",
        hours: "40 hrs",
        duration: "40 Hours",
        provider: "NSSTA Academy",
        credits: 6,
        format: "Advanced Analytical Workshop",
        modulesCount: 6,
        description: "Laspeyres and Paasche index formula compilation, item basket weighting, base year revision, and core inflation measures.",
        syllabus: [
          "1. Item Basket Weighting from Household Consumer Expenditure Surveys",
          "2. Geometric Mean Compilation & Micro-Level Price Quotations",
          "3. Quality Adjustment & Hedonic Imputation for Missing Outlets",
          "4. Core Inflation Extraction & Headline Index Chain-Linking"
        ]
      },
      {
        id: "CRS-AUD-101",
        name: "Statistical Data Quality Audit",
        code: "FRAC-AUD-02",
        status: "Certified",
        hours: "32 hrs",
        duration: "32 Hours",
        provider: "iGOT Karmayogi Bharat",
        credits: 5,
        format: "Audit & Compliance Masterclass",
        modulesCount: 5,
        description: "Systematic auditing of survey returns, cross-field logical consistency matrices, and outlier handling.",
        syllabus: [
          "1. Data Quality Assessment Framework (DQAF) Implementation",
          "2. Cross-Table Relational Rules & Automated Anomaly Detection",
          "3. Field Enumeration Audit Trails & Geo-Fence Inspection",
          "4. Statistical Error Bounds & Publication Compliance Checks"
        ]
      },
      {
        id: "CRS-DIS-101",
        name: "Tabulation & Microdata Dissemination",
        code: "FRAC-DIS-01",
        status: "Certified",
        hours: "28 hrs",
        duration: "28 Hours",
        provider: "NSSTA Academy",
        credits: 5,
        format: "Dissemination Lab & Regulatory Protocols",
        modulesCount: 5,
        description: "SDMX metadata standard compliance, statistical disclosure control algorithms, and public microdata release.",
        syllabus: [
          "1. Statistical Data and Metadata eXchange (SDMX) Data Structures",
          "2. Anonymization Techniques & Top-Coding for Microdata Records",
          "3. Tabulation Plan Automation with R/Python Scripts",
          "4. National Data Dissemination Platform Integration Protocols"
        ]
      }
    ]
  },
  {
    level: "Level 3 (Proficient / Applied)",
    name: "Proficient",
    shortName: "Level 3",
    value: 4,
    color: "#3B82F6", // Blue
    bgLight: "bg-blue-50 dark:bg-blue-950/40",
    borderColor: "border-blue-200 dark:border-blue-800",
    textColor: "text-blue-700 dark:text-blue-300",
    description: "Independent statistical execution without supervision",
    skills: [
      {
        id: "CRS-PY-201",
        name: "Python for Official Data Pipelines",
        code: "FRAC-PY-01",
        status: "Verified",
        hours: "24 hrs",
        duration: "24 Hours",
        provider: "iGOT Karmayogi Bharat",
        credits: 5,
        format: "Interactive Jupyter Notebooks",
        modulesCount: 8,
        description: "Master automated data cleaning pipelines, cross-field logical validation rules, and statistical plotting.",
        syllabus: [
          "1. Vectorized Wrangling with Pandas 2.0 & Polars",
          "2. Automated Validation Pipelines for PLFS Returns",
          "3. Cross-Field Scrutiny Rules & Inconsistency Tagging",
          "4. Synthetic Microdata Generation & Validation Reports"
        ]
      },
      {
        id: "CRS-FLD-202",
        name: "NSSO Field Schedule Scrutiny",
        code: "FRAC-FLD-02",
        status: "Verified",
        hours: "30 hrs",
        duration: "30 Hours",
        provider: "NSSTA Academy",
        credits: 5,
        format: "Field Scrutiny Lab & Exercises",
        modulesCount: 6,
        description: "Field schedule validation guidelines, error resolution techniques, and inspection protocols for large-scale surveys.",
        syllabus: [
          "1. Schedule Layout Architecture for Household & Enterprise Surveys",
          "2. Common Enumeration Bottlenecks & Missing Value Imputations",
          "3. Supervisor Inspection Protocols & Re-Interview Sampling",
          "4. Field Scrutiny Checklists & Return Clearance Protocols"
        ]
      },
      {
        id: "CRS-STAT-205",
        name: "Sample Weight Calibration",
        code: "FRAC-STAT-05",
        status: "Verified",
        hours: "20 hrs",
        duration: "20 Hours",
        provider: "NSSTA Academy",
        credits: 4,
        format: "Simulation Exercises",
        modulesCount: 4,
        description: "Multiplier generation, post-stratification weighting, and non-response adjustments in official survey datasets.",
        syllabus: [
          "1. Design Weights vs Effective Sample Sizes",
          "2. Post-Stratification Raking & Calibration Adjustments",
          "3. Unit & Item Non-Response Multipliers",
          "4. Replicate Weight Verification for Variance Estimates"
        ]
      },
      {
        id: "CRS-STAT-207",
        name: "Time Series & Seasonal Adjustment",
        code: "FRAC-STAT-07",
        status: "Verified",
        hours: "22 hrs",
        duration: "22 Hours",
        provider: "iGOT Karmayogi Bharat",
        credits: 4,
        format: "Statistical Lab",
        modulesCount: 5,
        description: "X-13ARIMA-SEATS methodology for seasonal adjustments of high-frequency economic indices and macroeconomic series.",
        syllabus: [
          "1. Time Series Decomposition (Trend, Seasonality, Irregular)",
          "2. ARIMA Model Specification & Diagnostic Regressors",
          "3. Indian Calendar Effects (Diwali/Eid Floating Holiday Corrections)",
          "4. Seasonally Adjusted Annual Rate (SAAR) Compilation"
        ]
      }
    ]
  },
  {
    level: "Level 2 (Developing / Intermediate)",
    name: "Developing",
    shortName: "Level 2",
    value: 3,
    color: "#F59E0B", // Amber
    bgLight: "bg-amber-50 dark:bg-amber-950/40",
    borderColor: "border-amber-200 dark:border-amber-800",
    textColor: "text-amber-700 dark:text-amber-300",
    description: "Theoretical knowledge requiring assisted fieldwork",
    skills: [
      {
        id: "CRS-ML-201",
        name: "Machine Learning in Official Surveys",
        code: "FRAC-ML-01",
        status: "In Progress",
        hours: "14 hrs",
        duration: "20 Hours",
        provider: "NSSTA Academy",
        credits: 4,
        format: "Guided AI Sandbox",
        modulesCount: 6,
        description: "Applied machine learning for automatic classification of NIC industry and NCO occupation text verbatims.",
        syllabus: [
          "1. NLP Preprocessing for Multilingual Survey Free-Text",
          "2. Fine-Tuned Transformer Embeddings for 5-Digit NIC Codes",
          "3. Confidence Threshold Calibration & Human-in-the-Loop Review",
          "4. Deployment in CAPI Mobile Applications"
        ]
      },
      {
        id: "CRS-VAL-203",
        name: "Automated Data Scrutiny Rules",
        code: "FRAC-VAL-03",
        status: "In Progress",
        hours: "12 hrs",
        duration: "18 Hours",
        provider: "iGOT Karmayogi Bharat",
        credits: 3,
        format: "Interactive Code Workshops",
        modulesCount: 5,
        description: "Designing validation rulesets for CAPI/CAWI electronic data capture applications and national registry feeds.",
        syllabus: [
          "1. Boundary & Range Assertion Scripting",
          "2. Inter-Record Household Consistency Validation",
          "3. Conditional Skip-Logic Verification Rules",
          "4. Real-Time Sync Validation Error Dispatching"
        ]
      },
      {
        id: "CRS-API-201",
        name: "API Integration & Realtime Feeds",
        code: "FRAC-API-01",
        status: "In Progress",
        hours: "10 hrs",
        duration: "16 Hours",
        provider: "iGOT Karmayogi Bharat",
        credits: 3,
        format: "Hands-on Integration Lab",
        modulesCount: 4,
        description: "Connecting administrative registry APIs (GSTN, MCA21, EPFO) with statistical compilation databases.",
        syllabus: [
          "1. Secure Government Data Exchange Standards",
          "2. Automated ETL Pipelines for High-Volume Registry Feeds",
          "3. Deduplication Algorithms & Entity Resolution",
          "4. Data Ingestion Monitoring & Pipeline Health Checks"
        ]
      }
    ]
  },
  {
    level: "Level 1 (Foundation / Deficit Gap)",
    name: "Needs Action",
    shortName: "Level 1",
    value: 2,
    color: "#EF4444", // Red
    bgLight: "bg-red-50 dark:bg-red-950/40",
    borderColor: "border-red-200 dark:border-red-800",
    textColor: "text-red-700 dark:text-red-300",
    description: "Priority deficit areas requiring mandatory iGOT/NSSTA tracks",
    skills: [
      {
        id: "CRS-NATL-401",
        name: "SNA 2008 Supply-Use Matrix",
        code: "FRAC-SNA-02",
        status: "Deficit Gap",
        hours: "4 hrs",
        duration: "30 Hours",
        provider: "NSSTA (National Statistical Systems Training Academy)",
        credits: 6,
        format: "Case Study & Exercises",
        modulesCount: 10,
        description: "Comprehensive in-depth training on compiling GVA, commodity flows, deflators, and input-output matrices.",
        syllabus: [
          "1. SNA 2008 Conceptual Architecture & Sequence of Accounts",
          "2. Gross Value Added (GVA) by Industry Sector Compilation",
          "3. Supply and Use Tables (SUT) Balancing & Ras Algorithms",
          "4. Deflator Construction & Real vs Nominal Volume Measures"
        ]
      },
      {
        id: "CRS-DPDP-101",
        name: "DPDP Act 2023 Statutory Compliance",
        code: "FRAC-LAW-01",
        status: "Deficit Gap",
        hours: "6 hrs",
        duration: "16 Hours",
        provider: "iGOT Karmayogi Bharat",
        credits: 4,
        format: "Gov Interactive E-Learning",
        modulesCount: 4,
        description: "Comprehensive statutory guidelines on Digital Personal Data Protection Act 2023 for official statistical data collectors.",
        syllabus: [
          "1. Data Fiduciary Obligations under Section 4 & Notice Requirements",
          "2. Consent Architecture & Anonymization Thresholds",
          "3. Security Safeguards & Data Breach Protocols",
          "4. Penalties, Adjudication & Officer Protections"
        ]
      }
    ]
  }
];

export default function OfficerDashboard() {
  const navigate = useNavigate();
  const {
    user, activeOfficerKey, competencies, courses, certificates,
    enrollCourse, switchOfficer, addPathwayToLearningHub, logout, showToast,
  } = useUser();
  const { theme, isDark, isHighContrast, toggleTheme, lang, toggleLang, increaseFontSize, decreaseFontSize, resetFontSize, t } = useTheme();

  const navItems = [
    { id: "overview", label: lang === "hi" ? "डैशबोर्ड" : "Home", icon: BarChart3 },
    { id: "skill_gap", label: lang === "hi" ? "कौशल अंतर निदान" : "Skill Gap Analysis", icon: Target, badge: "AI Diagnostics" },
    { id: "learning_hub", label: lang === "hi" ? "अध्ययन केंद्र" : "Learning Hub", icon: BookOpen, badge: "iGOT · NSSTA" },
    { id: "mitra", label: lang === "hi" ? "सेतु" : "SETU AI", icon: BrainCircuit },
    { id: "transcript", label: lang === "hi" ? "दक्षता प्रमाणपत्र" : "Transcript & Vault", icon: Award, badge: lang === "hi" ? "सत्यापित" : "Verified" },
    { id: "settings", label: lang === "hi" ? "सेटिंग्स" : "Settings", icon: Settings },
  ];

  const [active, setActive] = useState("overview");
  const [loading, setLoading] = useState(false);
  const [selectedCompetency, setSelectedCompetency] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showSparrowModal, setShowSparrowModal] = useState(false);
  const [selectedFracLevel, setSelectedFracLevel] = useState(FRAC_LEVEL_BREAKDOWN[3]); // Default to Level 1 Action Items

  // Persistent Skill Gap Diagnostic State (Retains state across tab switches, resets cleanly on new login)
  const [skillGapWorkflowStep, setSkillGapWorkflowStep] = useState("upload");
  const [skillGapUploadFileName, setSkillGapUploadFileName] = useState("");
  const [skillGapProcessingProgress, setSkillGapProcessingProgress] = useState(0);
  const [skillGapProcessingStatusText, setSkillGapProcessingStatusText] = useState("Initializing Bio-Data Ingestion...");
  const [skillGapSelectedAnswers, setSkillGapSelectedAnswers] = useState({});
  const [skillGapScoreResult, setSkillGapScoreResult] = useState(null);
  const [skillGapAddedRoadmaps, setSkillGapAddedRoadmaps] = useState({});

  // Reset Skill Gap workflow state on each new login / user session change
  useEffect(() => {
    setSkillGapWorkflowStep("upload");
    setSkillGapUploadFileName("");
    setSkillGapProcessingProgress(0);
    setSkillGapSelectedAnswers({});
    setSkillGapScoreResult(null);
  }, [user?.id, user?.email]);

  // Learning Hub State (Mapped to Courses, Learning_Paths, Calendar)
  const [hubTab, setHubTab] = useState("courses"); // 'courses' | 'paths' | 'attempts' | 'calendar'
  const [courseFilter, setCourseFilter] = useState("all"); // 'all' | 'igot' | 'nssta' | 'recommended' | 'in_progress'
  const [courseSearch, setCourseSearch] = useState("");
  const [selectedCourseDetail, setSelectedCourseDetail] = useState(null);
  const [activeCoursePlayer, setActiveCoursePlayer] = useState(null);
  const [calendarFilter, setCalendarFilter] = useState("all");
  const [eventsList, setEventsList] = useState(CALENDAR_EVENTS);
  const [learningPathsList, setLearningPathsList] = useState(LEARNING_PATHS);

  // Assessment & AI Quiz Generator State (Empty by default per user requirement)
  const [assessmentSubTab, setAssessmentSubTab] = useState("catalog"); // 'catalog' | 'generator' | 'history'
  const [uploadedMaterial, setUploadedMaterial] = useState(null); // NULL by default - user must upload their own document
  const [customTopicInput, setCustomTopicInput] = useState("");
  const [generatorDifficulty, setGeneratorDifficulty] = useState("Medium");
  const [generatorDomain, setGeneratorDomain] = useState("Survey Sampling (STAT-SAMP-01)");
  const [generatorQuestionsCount, setGeneratorQuestionsCount] = useState(10);
  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);

  // Active Assessment & Quiz Runtime State
  const [activeQuizRunning, setActiveQuizRunning] = useState(null); // quiz object or null
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizTimer, setQuizTimer] = useState(600); // 10 mins
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [selectedReviewSubmission, setSelectedReviewSubmission] = useState(null);

  // Settings State
  const [settingsTab, setSettingsTab] = useState("profile"); // 'profile' | 'learning' | 'mitra' | 'notifications' | 'security' | 'accessibility'
  const [settingsProfile, setSettingsProfile] = useState({
    name: user?.name || "Priya Sharma",
    designation: user?.designation || "Senior Manager (Operations)",
    cadre: "Indian Statistical Service (ISS)",
    department: user?.department || "Field Operations Division",
    postingLocation: user?.postingLocation || "Regional Office, Kolkata",
    email: user?.email || "priya.sharma@statsaarthi.gov.in",
    empId: user?.id || "EMP-2021-0342",
    avatar: user?.avatar || DEFAULT_AVATARS[0],
    dailyTargetMins: 45,
    weeklyHoursTarget: 5,
    annualTargetHours: 50,
    emailAlerts: true,
    acbpReminders: true,
    dailyBrainTeaser: true,
    gazetteAlerts: true,
    soundEffects: true,
    twoFactorAuth: true,
    mitraDepth: "analytical",
    mitraLanguage: "en",
    mitraVoiceTTS: false,
    defaultCodeSandbox: "python",
    sparrowAutoSync: true,
    focusSkills: [
      "Survey Design & Sampling Estimation",
      "Python for Advanced Data Analytics",
      "System of National Accounts & SUT Compilation"
    ],
  });

  useEffect(() => {
    if (user) {
      setSettingsProfile((prev) => ({
        ...prev,
        name: user.name || prev.name,
        designation: user.designation || prev.designation,
        department: user.department || prev.department,
        postingLocation: user.postingLocation || prev.postingLocation,
        email: user.email || prev.email,
        empId: user.id || prev.empId,
        avatar: user.avatar || prev.avatar,
      }));
    }
  }, [user]);

  // Isolate Skill Gap Diagnostic flow when switching between Amit and Suparna profiles
  useEffect(() => {
    setSkillGapWorkflowStep("upload");
    setSkillGapUploadFileName("");
    setSkillGapSelectedAnswers({});
    setSkillGapScoreResult(null);
  }, [user?.email]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNavSelect = (id) => {
    if (id === active) return;
    setLoading(true);
    setActive(id);
    setTimeout(() => setLoading(false), 200);
  };

  const jumpToTab = (tabId) => {
    handleNavSelect(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // RSVP / Register for calendar event
  const toggleEventRsvp = (eventId) => {
    setEventsList((prev) =>
      prev.map((evt) => {
        if (evt.id === eventId) {
          const isReg = evt.rsvpStatus === "registered";
          showToast(
            isReg ? `Cancelled RSVP for ${evt.title}` : `Successfully registered for ${evt.title}! Added to calendar.`,
            isReg ? "info" : "success"
          );
          return {
            ...evt,
            rsvpStatus: isReg ? "pending" : "registered",
            registered: isReg ? evt.registered - 1 : evt.registered + 1
          };
        }
        return evt;
      })
    );
  };

  // Start in-dashboard live test
  const handleStartQuiz = (quiz) => {
    setActiveQuizRunning(quiz);
    setCurrentQIndex(0);
    setSelectedAnswers({});
    setQuizTimer(quiz.timeLimitMins * 60);
    setQuizSubmitted(false);
    setQuizResult(null);
  };

  // Timer effect for running quiz
  useEffect(() => {
    if (!activeQuizRunning || quizSubmitted) return;
    const interval = setInterval(() => {
      setQuizTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeQuizRunning, quizSubmitted, selectedAnswers]);

  const handleSubmitQuiz = () => {
    if (!activeQuizRunning) return;
    const questions = activeQuizRunning.questions;
    let correct = 0;
    const detailAnswers = questions.map((q) => {
      const selected = selectedAnswers[q.id];
      const isCorrect = selected === q.correctOption;
      if (isCorrect) correct++;
      return {
        questionId: q.id,
        questionText: q.text,
        selectedOption: selected || "Not Answered",
        correctOption: q.correctOption,
        isCorrect,
        bloomLevel: q.bloomLevel,
        citation: q.sourceCitation,
        explanation: q.explanation
      };
    });

    const scorePct = Math.round((correct / questions.length) * 100);
    const passed = scorePct >= activeQuizRunning.passingScore;

    const resultObj = {
      quizId: activeQuizRunning.id,
      quizTitle: activeQuizRunning.title,
      score: scorePct,
      correctCount: correct,
      totalCount: questions.length,
      passed,
      date: "Just now",
      answers: detailAnswers
    };

    setQuizResult(resultObj);
    setQuizSubmitted(true);
    showToast(
      passed ? `Assessment Passed with ${scorePct}%! Verified Competency credit added.` : `Assessment completed (${scorePct}%). Review answers to improve.`,
      passed ? "success" : "warning"
    );
  };

  // ----------------------------------------------------------------
  // SPARROW APAR ANNEXURE MODAL
  // ----------------------------------------------------------------
  function SparrowModal() {
    return (
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={(e) => { if (e.target === e.currentTarget) setShowSparrowModal(false); }}
        role="dialog"
        aria-modal="true"
        aria-label="SPARROW APAR Annexure"
      >
        <div
          className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 border border-slate-200 dark:border-slate-800 shadow-2xl text-left max-h-[90vh] overflow-y-auto"
          style={{ animation: "modalIn 0.2s ease-out both" }}
        >
          <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary dark:text-teal-400 flex items-center justify-center font-bold">
                <FileCheck2 size={22} className="text-amber-400" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold tracking-wider text-primary uppercase">
                  Annual Performance Appraisal Report (APAR)
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  Annexure — Training & Competency Credits
                </h3>
              </div>
            </div>
            <button
              onClick={() => setShowSparrowModal(false)}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-2xs">
            <div>
              <p className="text-slate-400 font-medium">Officer Name</p>
              <p className="font-bold text-slate-900 dark:text-white text-xs mt-0.5">{user?.name || "Priya Sharma"}</p>
            </div>
            <div>
              <p className="text-slate-400 font-medium">Designation</p>
              <p className="font-bold text-slate-900 dark:text-white text-xs mt-0.5">{user?.designation || "Senior Manager"}</p>
            </div>
            <div>
              <p className="text-slate-400 font-medium">Reporting Year</p>
              <p className="font-bold text-slate-900 dark:text-white text-xs mt-0.5">2024–2025</p>
            </div>
            <div>
              <p className="text-slate-400 font-medium">ACBP Compliance</p>
              <p className="font-bold text-emerald-600 dark:text-emerald-400 text-xs mt-0.5">36h / 50h (72%)</p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
              Official ACBP & FRAC Level Compliance
            </h4>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-2.5">Domain Competency</th>
                    <th className="p-2.5">FRAC Level</th>
                    <th className="p-2.5">Hours</th>
                    <th className="p-2.5">Accreditation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {OFFICER_TRANSCRIPT.accreditedCompetencies.map((comp, idx) => (
                    <tr key={idx}>
                      <td className="p-2.5 font-semibold">{comp.name}</td>
                      <td className="p-2.5 font-mono text-emerald-600 dark:text-emerald-400">{comp.fracLevel}</td>
                      <td className="p-2.5">{comp.hours}</td>
                      <td className="p-2.5"><span className="badge badge-mastered">{comp.grade}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-2xs text-emerald-800 dark:text-emerald-300">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
              <span><strong>NIC e-Sign & SPARROW Protocol Validated.</strong> Ready for Cadre Reviewing Authority.</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-600">HASH: 8F2A-99B1-SPAR</span>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={() => {
                showToast("Printing SPARROW APAR Annexure...", "info");
                window.print();
              }}
              className="btn-secondary text-xs py-2.5 px-4 flex items-center gap-2"
            >
              <Printer size={14} /> Print Annexure
            </button>
            <button
              onClick={() => {
                showToast("SPARROW Annexure PDF exported successfully!", "success");
                setShowSparrowModal(false);
              }}
              className="btn-primary text-xs py-2.5 px-5 flex items-center gap-2"
            >
              <Download size={14} /> Export SPARROW Annexure PDF
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------
  // 1. HOME / OVERVIEW TAB (4 CLEAN EXECUTIVE WIDGETS)
  // ----------------------------------------------------------------
  function OverviewSection() {
    const activePersonaKey = user?.email?.includes("suparna") ? "suparna_chatterjee" : "amit_mondal";
    const officerData = HARDCODED_OFFICERS[activePersonaKey] || HARDCODED_OFFICERS.amit_mondal;
    const gaps = officerData.gaps || [];
    const criticalGaps = gaps.filter((g) => g.severity === "Critical" || g.gapScore <= -2);
    const moderateGaps = gaps.filter((g) => g.severity === "Moderate" || g.gapScore === -1);
    const masteredGaps = gaps.filter((g) => g.severity === "Mastered" || g.gapScore === 0);

    const activePathway = officerData.recommendedPathways?.[0] || {
      title: "Cyber Hygiene Practices for Government Officials",
      provider: "C-DAC / CERT-In",
      hours: "2.5 hrs",
      xp: 60,
      targetedGap: "Eliminates phishing risks & secures ticketing terminals."
    };

    return (
      <div className="space-y-6 animate-fadeIn text-left">
        {/* WIDGET 1: 🌟 OFFICER READINESS HERO CARD */}
        <SpotlightCard className="p-6 sm:p-8 bg-gradient-to-br from-[#0F1117] via-[#161B26] to-[#0A0C11] rounded-3xl border border-white/10 shadow-2xl text-white relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4 sm:gap-5 min-w-0">
              {/* Circular Score Ring */}
              <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-slate-800"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-primary transition-all duration-1000 ease-out"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - (user?.skillReadiness || 62) / 100)}`}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
                  <span className="text-xl sm:text-2xl font-black text-white tabular-nums">
                    {user?.skillReadiness || 62}%
                  </span>
                  <span className="text-[9px] font-bold text-teal-300 uppercase tracking-tight">Readiness</span>
                </div>
              </div>

              {/* Officer Details & Badges */}
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/20 text-teal-300 border border-primary/30">
                    {user?.cadre || "Frontline Field Staff"}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <ShieldCheck size={12} /> {user?.sparrowStatus || "APAR Target Synced ✓ • Level Met"}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight truncate">
                  {user?.name || "Amit Kumar Mondal"}
                </h2>
                <p className="text-xs text-slate-300 font-medium">
                  {user?.officialDesignation || "Ticket Examiner"} • {user?.department || "Eastern Railway Division"} • {user?.postingLocation || "Kolkata Division, Howrah"}
                </p>
                <p className="text-xs text-slate-400">
                  Target Career Role: <strong className="text-white font-semibold">{user?.targetRole || "Senior Commercial Inspector (Level 7)"}</strong>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 justify-center">
              <button
                onClick={() => jumpToTab("learning_hub")}
                className="btn-primary text-xs py-2.5 px-5 font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:scale-102 transition-all cursor-pointer"
              >
                <Play size={14} /> Resume Active Learning Pathway
              </button>
              <button
                onClick={() => setShowSparrowModal(true)}
                className="btn bg-white/10 hover:bg-white/20 text-white text-xs py-2 px-4 rounded-xl font-bold flex items-center justify-center gap-2 border border-white/15 transition-all cursor-pointer"
              >
                <FileCheck2 size={14} /> View SPARROW APAR Credits
              </button>
            </div>
          </div>
        </SpotlightCard>

        {/* WIDGET 2: ENROLLED COURSES & ACTIVE LEARNING PROGRESS */}
        <SpotlightCard className="p-6 sm:p-7 bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card space-y-5 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  Enrolled Courses & Active Learning Progress
                </h3>
                <span className="text-2xs font-extrabold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  4 Active Courses
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Overview of the capacity building courses you are currently learning and your module completion status
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => jumpToTab("learning_hub")}
                className="btn-primary text-xs py-1.5 px-3.5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Open Learning Hub</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Quick Learning Stats Header */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <span className="text-2xs font-bold text-slate-400 uppercase block">Active Courses</span>
              <strong className="text-sm font-black text-slate-900 dark:text-white font-mono">4 In Progress</strong>
            </div>
            <div className="p-3 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800/40">
              <span className="text-2xs font-bold text-teal-600 dark:text-teal-400 uppercase block">Certified Units</span>
              <strong className="text-sm font-black text-teal-600 dark:text-teal-400 font-mono">2 Modules Done</strong>
            </div>
            <div className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/40">
              <span className="text-2xs font-bold text-indigo-600 dark:text-indigo-400 uppercase block">Weekly Target</span>
              <strong className="text-sm font-black text-indigo-600 dark:text-indigo-400 font-mono">{officerData.weeklyLearningBudget || "4.0 Hours"}</strong>
            </div>
            <div className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40">
              <span className="text-2xs font-bold text-amber-600 dark:text-amber-400 uppercase block">Avg Completion</span>
              <strong className="text-sm font-black text-amber-600 dark:text-amber-400 font-mono">68% Finished</strong>
            </div>
          </div>

          {/* 4 ACTIVE COURSE PROGRESSION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(officerData?.recommendedPathways || []).slice(0, 4).map((courseItem, idx) => {
              const defaultProgressArr = [65, 35, 15, 80];
              const progressPct = defaultProgressArr[idx] || 50;

              return (
                <div
                  key={courseItem.id || idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        Course {courseItem.stageNumber || `0${idx + 1}`}
                      </span>
                      <span className="text-2xs font-bold text-slate-400 font-mono">
                        {courseItem.hours} • {courseItem.xp} XP
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug">
                        {courseItem.title}
                      </h4>
                      <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                        Provider: <strong className="text-slate-700 dark:text-slate-300">{courseItem.provider}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Course Progress Bar & Action */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                    <div className="flex justify-between items-center text-2xs font-mono font-bold">
                      <span className="text-slate-600 dark:text-slate-400">Course Progress</span>
                      <span className="text-teal-600 dark:text-teal-400 font-black">{progressPct}%</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-700"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] text-slate-400 font-mono">
                        {progressPct >= 80 ? "Near Completion" : progressPct >= 40 ? "In Progress" : "Just Started"}
                      </span>
                      <button
                        onClick={() => jumpToTab("learning_hub")}
                        className="btn-secondary text-2xs py-1 px-3 rounded-lg font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <span>Continue</span>
                        <Play size={10} className="fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </SpotlightCard>

        {/* WIDGET 2.2: 🔥 COURSE PROGRESSION & COMPETENCY DEFICIT HEATMAP */}
        <CourseSkillHeatmap onNavigateTab={jumpToTab} />

        {/* WIDGET 2.5: 📈 OVERALL COMPETENCY & LEARNING PROGRESS GRAPH */}
        <SpotlightCard className="p-6 sm:p-7 bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card space-y-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-primary" />
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  Overall Competency Progression & Statutory Readiness Trajectory
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Monthly diagnostic scores & verified learning hours tracked against the MoSPI 85% Statutory Benchmark
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-2xs font-extrabold px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                Current: {user?.skillReadiness || (user?.email?.includes("suparna") ? 74 : 62)}%
              </span>
              <span className="text-2xs font-extrabold px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                MoSPI Target: 85%
              </span>
            </div>
          </div>

          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={
                  user?.email?.includes("suparna")
                    ? [
                        { month: "Jan 26", score: 58, benchmark: 85, hours: 8, evaluation: "Q1 Service Baseline" },
                        { month: "Feb 26", score: 62, benchmark: 85, hours: 16, evaluation: "GeM & GFR 2017 Audit" },
                        { month: "Mar 26", score: 66, benchmark: 85, hours: 24, evaluation: "CVC Disciplinary Test" },
                        { month: "Apr 26", score: 70, benchmark: 85, hours: 32, evaluation: "SNA 2008 Modular Test" },
                        { month: "May 26", score: 72, benchmark: 85, hours: 39, evaluation: "SPARROW Mid-Term Review" },
                        { month: "Jun 26 (Current)", score: 74, benchmark: 85, hours: 44, evaluation: "Active Readiness Score" }
                      ]
                    : [
                        { month: "Jan 26", score: 45, benchmark: 85, hours: 6, evaluation: "Baseline Ticketing Audit" },
                        { month: "Feb 26", score: 50, benchmark: 85, hours: 14, evaluation: "Cyber Hygiene CERT-In Check" },
                        { month: "Mar 26", score: 54, benchmark: 85, hours: 20, evaluation: "DPDP 2023 Privacy Check" },
                        { month: "Apr 26", score: 58, benchmark: 85, hours: 27, evaluation: "CPGRAMS Redressal Test" },
                        { month: "May 26", score: 60, benchmark: 85, hours: 32, evaluation: "e-Office DSC Signatures" },
                        { month: "Jun 26 (Current)", score: 62, benchmark: 85, hours: 36, evaluation: "Active Readiness Score" }
                      ]
                }
                margin={{ top: 10, right: 15, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="userScoreGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0D9488" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#0D9488" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fontWeight: 700 }} />
                <YAxis domain={[30, 100]} tick={{ fontSize: 11 }} unit="%" />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const d = payload[0].payload;
                      return (
                        <div className="p-3 bg-slate-900/95 text-white rounded-2xl border border-primary/40 shadow-xl backdrop-blur-md text-xs space-y-1.5 min-w-[190px]">
                          <div className="font-extrabold text-teal-300 border-b border-slate-700/60 pb-1 flex justify-between">
                            <span>{label}</span>
                            <span className="text-[10px] text-slate-300">{d.evaluation}</span>
                          </div>
                          <div className="flex justify-between text-2xs">
                            <span className="text-slate-400">Readiness Score:</span>
                            <strong className="text-teal-400 font-mono">{d.score}%</strong>
                          </div>
                          <div className="flex justify-between text-2xs">
                            <span className="text-slate-400">Cumulative Hours:</span>
                            <strong className="text-amber-300 font-mono">{d.hours} hrs</strong>
                          </div>
                          <div className="flex justify-between text-2xs">
                            <span className="text-slate-400">MoSPI Target:</span>
                            <strong className="text-indigo-400 font-mono">{d.benchmark}%</strong>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <ReferenceLine y={85} stroke="#6366F1" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: "MoSPI Target (85%)", fill: "#818CF8", fontSize: 10, position: "insideTopRight" }} />
                <Area
                  type="monotone"
                  dataKey="score"
                  name="Readiness Score"
                  stroke="#0D9488"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#userScoreGradient)"
                  dot={{ r: 4, fill: "#0D9488", strokeWidth: 2, stroke: "#fff" }}
                  activeDot={{ r: 6, fill: "#0D9488" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-2xs border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-teal-500" />
              <span className="text-slate-500 dark:text-slate-400">Cumulative Progression: <strong className="text-slate-800 dark:text-slate-200">+{user?.email?.includes("suparna") ? "16" : "17"}% Since Baseline</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-slate-500 dark:text-slate-400">Logged Learning: <strong className="text-slate-800 dark:text-slate-200">{user?.annualTrainingHours || 36} of 50 Target Hours</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-slate-500 dark:text-slate-400">SPARROW Status: <strong className="text-emerald-600 dark:text-emerald-400">APAR Benchmark Synced ✓</strong></span>
            </div>
          </div>
        </SpotlightCard>

        {/* BOTTOM ROW: WIDGET 3 (ACTIVE PATHWAY) & WIDGET 4 (WEEKLY STREAK & HOURS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* WIDGET 3: 🚀 ACTIVE LEARNING PATHWAY PROGRESS (7 cols) */}
          <SpotlightCard className="lg:col-span-7 p-6 sm:p-7 bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card flex flex-col justify-between text-left space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BookOpen size={13} className="text-primary" /> Active Learning Roadmap Module
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary dark:text-teal-300">
                  Phase 1 Sprint
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {activePathway.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {activePathway.provider} • {activePathway.hours} • Targeted Deficit: <strong className="text-slate-700 dark:text-slate-300 font-semibold">{activePathway.targetedGap}</strong>
              </p>

              <div className="mt-4 space-y-1.5">
                <div className="flex justify-between text-2xs font-bold text-slate-500">
                  <span>Current Module Progress</span>
                  <span>45% Completed</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-teal-400 rounded-full" style={{ width: "45%" }} />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Next: Stage 02 Knowledge Check</span>
              <button
                onClick={() => jumpToTab("learning_hub")}
                className="btn-primary text-xs py-2 px-4 font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <span>Resume Learning</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </SpotlightCard>

          {/* WIDGET 4: 🔥 WEEKLY LEARNING STREAK & HOURS COUNTER (5 cols) */}
          <SpotlightCard className="lg:col-span-5 p-6 sm:p-7 bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card flex flex-col justify-between text-left space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Clock size={13} className="text-amber-500" /> Weekly Training Commitment
                </span>
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  🔥 {user?.streakDays || 4}-Day Streak
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-900 dark:text-white tabular-nums">
                  {user?.weeklyHoursLogged || 3.5}h
                </span>
                <span className="text-xs font-bold text-slate-400">
                  / {user?.weeklyLearningBudget?.split(" ")[0] || "4.0"}h Target
                </span>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {user?.weeklyLearningBudget || "4 Hours / Week (Operational Pace)"}
              </p>

              <div className="mt-3.5 w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full"
                  style={{ width: `${Math.min(100, ((user?.weeklyHoursLogged || 3.5) / 4.0) * 100)}%` }}
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-2xs text-slate-500">
              <span>Annual SPARROW Hours: <strong>{user?.annualTrainingHours || 36} hrs logged</strong></span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">On Track ✓</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------------
  // 2. SKILL GAP ANALYSIS & DIAGNOSTIC ENGINE (TAB 2)
  // ----------------------------------------------------------------
  function SkillGapAnalysisSection() {
    const activeKey = user?.email?.includes("suparna") ? "suparna_chatterjee" : "amit_mondal";
    const officerData = HARDCODED_OFFICERS[activeKey] || HARDCODED_OFFICERS.amit_mondal;
    const diagnosticQuiz = officerData.diagnosticQuiz;

    // Persistent top-level state bindings
    const workflowStep = skillGapWorkflowStep;
    const setWorkflowStep = setSkillGapWorkflowStep;
    const uploadFileName = skillGapUploadFileName;
    const setUploadFileName = setSkillGapUploadFileName;
    const processingProgress = skillGapProcessingProgress;
    const setProcessingProgress = setSkillGapProcessingProgress;
    const processingStatusText = skillGapProcessingStatusText;
    const setProcessingStatusText = setSkillGapProcessingStatusText;
    const selectedAnswers = skillGapSelectedAnswers;
    const setSelectedAnswers = setSkillGapSelectedAnswers;
    const scoreResult = skillGapScoreResult;
    const setScoreResult = setSkillGapScoreResult;
    const addedRoadmaps = skillGapAddedRoadmaps;
    const setAddedRoadmaps = setSkillGapAddedRoadmaps;

    const scrollToTop = () => {
      const mainEl = document.querySelector("main");
      if (mainEl) mainEl.scrollTop = 0;
      else window.scrollTo(0, 0);
    };

    // Start AI CV Processing Animation
    const handleStartProcessing = (fileName = "Official_Service_Record.pdf") => {
      setUploadFileName(fileName);
      setWorkflowStep("processing");
      setProcessingProgress(15);
      setProcessingStatusText("Scanning Service Record & Career Tenure...");

      setTimeout(() => {
        setProcessingProgress(40);
        setProcessingStatusText(`Extracting FRAC Competency Units for Target Role: ${officerData.targetRole}...`);
      }, 400);

      setTimeout(() => {
        setProcessingProgress(75);
        setProcessingStatusText("Drafting 10 Grounded Statutory Diagnostic Scenario Questions (DPDP, GFR, CERT-In, CVC, RailMadad)...");
      }, 900);

      setTimeout(() => {
        setProcessingProgress(100);
        setProcessingStatusText("10 Diagnostic Questions Assembled! Ready to begin.");
      }, 1400);

      setTimeout(() => {
        setWorkflowStep("assessment");
        scrollToTop();
      }, 1800);
    };

    const handleSelectAnswer = (questionId, optionId) => {
      setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    };

    const handleSubmitAssessment = () => {
      let correct = 0;
      const questions = diagnosticQuiz?.questions || [];
      questions.forEach((q) => {
        if (selectedAnswers[q.id] === q.correct) {
          correct++;
        }
      });
      const total = questions.length || 10;
      const incorrect = total - correct;
      const scorePct = Math.round((correct / total) * 100);
      setScoreResult({
        score: scorePct,
        correctCount: correct,
        incorrectCount: incorrect,
        total: total,
        passed: scorePct >= 60
      });
      setWorkflowStep("results");
      scrollToTop();
      showToast(
        `Diagnostic Complete: ${correct} Correct, ${incorrect} Incorrect (${scorePct}%). Personalized Courses Ready!`,
        scorePct >= 60 ? "success" : "info"
      );
    };

    const handleResetAll = () => {
      setWorkflowStep("upload");
      setUploadFileName("");
      setSelectedAnswers({});
      setScoreResult(null);
      scrollToTop();
    };

    const handleAddCourseToRoadmap = (course) => {
      addPathwayToLearningHub?.(course);
      setAddedRoadmaps((prev) => ({ ...prev, [course.id]: true }));
      showToast(`Added "${course.title}" to active Learning Hub roadmap!`, "success");
    };

    const questionsList = diagnosticQuiz?.questions || [];
    const totalQuestionsCount = questionsList.length || 10;
    const answeredCount = Object.keys(selectedAnswers).length;

    return (
      <div className="space-y-6 text-left animate-fadeIn">
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                <Target size={24} className="text-primary" />
                {lang === "hi" ? "कौशल अंतर निदान एवं योग्यता विश्लेषण" : "AI Skill Gap Analysis & Diagnostic Engine"}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary dark:text-teal-300 font-extrabold text-2xs border border-primary/20">
                FRAC Statutory Intelligence
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Sequential Bio-Data Parsing ➔ AI FRAC Mapping ➔ 10-Question Diagnostic Assessment ➔ Results Breakdown & Personalized Courses
            </p>
          </div>

          {/* Workflow Progress Breadcrumb Pills */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-2xs font-bold">
            <span className={`px-2.5 py-1 rounded-xl transition-all ${workflowStep === "upload" ? "bg-primary text-white" : "text-slate-500 dark:text-slate-400"}`}>
              1. Upload CV
            </span>
            <span className="text-slate-300 dark:text-slate-600">➔</span>
            <span className={`px-2.5 py-1 rounded-xl transition-all ${workflowStep === "processing" ? "bg-primary text-white" : "text-slate-500 dark:text-slate-400"}`}>
              2. AI Scan
            </span>
            <span className="text-slate-300 dark:text-slate-600">➔</span>
            <span className={`px-2.5 py-1 rounded-xl transition-all ${workflowStep === "assessment" ? "bg-primary text-white" : "text-slate-500 dark:text-slate-400"}`}>
              3. 10 Questions Test
            </span>
            <span className="text-slate-300 dark:text-slate-600">➔</span>
            <span className={`px-2.5 py-1 rounded-xl transition-all ${workflowStep === "results" ? "bg-emerald-600 text-white" : "text-slate-500 dark:text-slate-400"}`}>
              4. Results & Courses
            </span>
          </div>
        </div>

        {/* PHASE 1: CV / BIO-DATA UPLOAD */}
        {workflowStep === "upload" && (
          <div className="space-y-6">
            <div className="card bg-white dark:bg-canvas-card-dark rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-primary p-8 sm:p-12 text-center space-y-6 shadow-sm">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-inner">
                <Upload size={36} />
              </div>

              <div className="max-w-xl mx-auto space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                  Upload Officer CV, Service Bio-Data or APAR Record
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Upload your service history document (.pdf, .docx, or scan) to extract current cadre competencies, promotional role requirements, and generate your 10-question personalized diagnostic assessment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <label className="btn-primary text-xs py-3 px-6 rounded-2xl font-bold flex items-center gap-2 cursor-pointer shadow-lg hover:scale-102 transition-all">
                  <FileText size={16} />
                  <span>Select CV / Bio-Data Document</span>
                  <input
                    type="file"
                    accept=".pdf,.docx,.doc,.txt"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleStartProcessing(file.name);
                    }}
                  />
                </label>

                <button
                  type="button"
                  onClick={() => handleStartProcessing(`${officerData.name.replace(/\s+/g, "_")}_Official_BioData.pdf`)}
                  className="btn bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs py-3 px-6 rounded-2xl font-bold border border-slate-200 dark:border-slate-700 flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Sparkles size={15} className="text-amber-500" />
                  <span>Load Verified Bio-Data ({officerData.name})</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-6 text-2xs text-slate-400">
                <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-emerald-500" /> NIC Encrypted</span>
                <span className="flex items-center gap-1.5"><FileCheck2 size={13} className="text-primary" /> SPARROW APAR Synced</span>
                <span className="flex items-center gap-1.5"><Award size={13} className="text-amber-500" /> 10-Question FRAC Evaluation</span>
              </div>
            </div>
          </div>
        )}

        {/* PHASE 2: AI SCANNING & EXTRACTION PROGRESS ANIMATION */}
        {workflowStep === "processing" && (
          <div className="card bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 p-10 sm:p-14 shadow-card text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mx-auto">
              <div className="w-8 h-8 rounded-full border-3 border-primary border-t-transparent animate-spin" />
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <h3 className="text-lg font-black text-slate-900 dark:text-white">
                Analyzing Service Record with AI FRAC Intelligence
              </h3>
              <p className="text-xs text-primary font-mono font-semibold">
                {uploadFileName}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[20px]">
                {processingStatusText}
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-2">
              <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-primary to-teal-400 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${processingProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-2xs font-mono text-slate-400">
                <span>Ingesting Bio-Data</span>
                <span className="font-bold text-primary">{processingProgress}%</span>
                <span>Generating 10 MCQs</span>
              </div>
            </div>
          </div>
        )}

        {/* PHASE 3: 10-QUESTION STATUTORY DIAGNOSTIC ASSESSMENT */}
        {workflowStep === "assessment" && (
          <div className="space-y-6">
            {/* Officer Profile & Progress Banner */}
            <div className="p-5 bg-gradient-to-r from-primary/10 via-teal-500/10 to-primary/5 rounded-3xl border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#0B192C] text-sky-200 flex items-center justify-center font-black text-sm ring-2 ring-primary/40 shadow-sm">
                  {officerData?.name
                    ? officerData.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
                    : "SO"}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-slate-900 dark:text-white">{officerData.name}</h4>
                    <span className="badge badge-info text-2xs">{officerData.officialDesignation}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Target Promotional Role: <strong className="text-primary font-bold">{officerData.targetRole}</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-2xs font-extrabold px-3 py-1.5 rounded-xl bg-primary text-white shadow-xs">
                  10 Diagnostic MCQs
                </span>
                <span className={`text-2xs font-bold px-3 py-1.5 rounded-xl border ${
                  answeredCount === totalQuestionsCount
                    ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border-emerald-500/30"
                    : "bg-amber-500/15 text-amber-600 dark:text-amber-300 border-amber-500/30"
                }`}>
                  Answered: {answeredCount} / {totalQuestionsCount}
                </span>
              </div>
            </div>

            {/* PROMINENT GAP ANALYSIS TEST PROMPT BANNER */}
            <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-primary/15 via-teal-500/10 to-primary/5 border border-primary/30 flex items-start sm:items-center gap-3.5 shadow-sm text-left">
              <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
                <Target size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                  To test your skill gap analysis, answer these diagnostic questions
                </h4>
                <p className="text-2xs sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  These 10 scenario-based questions are calibrated from official statutory rules ({officerData.cadre}) to evaluate baseline competencies and calibrate your personalized learning roadmap for {officerData.name}.
                </p>
              </div>
            </div>

            {/* Questions Card */}
            <div className="card bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-card space-y-6 text-left">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white">
                    {diagnosticQuiz?.title || "Role-Specific Competency Evaluation"}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Answer all 10 scenario questions below to identify competency gaps and receive personalized learning recommendations:
                  </p>
                </div>
                <span className="text-2xs font-mono font-bold text-slate-400">
                  {Math.round((answeredCount / totalQuestionsCount) * 100)}% Completed
                </span>
              </div>

              <div className="space-y-6">
                {questionsList.map((q, idx) => {
                  const isAnswered = Boolean(selectedAnswers[q.id]);
                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border-2 transition-colors duration-150 space-y-3.5 text-left ${
                        isAnswered
                          ? "bg-primary/5 dark:bg-primary/10 border-primary/40"
                          : "bg-slate-50/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span className={`w-7 h-7 rounded-xl text-xs font-black flex items-center justify-center shrink-0 shadow-xs ${
                            isAnswered ? "bg-primary text-white" : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                          }`}>
                            {idx + 1}
                          </span>
                          <div>
                            <span className="text-2xs font-bold text-primary block uppercase tracking-wider">
                              Question {idx + 1} of {totalQuestionsCount} • {q.competency} ({q.bloomLevel})
                            </span>
                            <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1 leading-relaxed">
                              {q.question}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 pl-0 sm:pl-10">
                        {q.options.map((opt) => {
                          const isSelected = selectedAnswers[q.id] === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => handleSelectAnswer(q.id, opt.id)}
                              className={`p-3 rounded-2xl border-2 text-xs text-left transition-colors duration-150 flex items-start gap-2.5 cursor-pointer ${
                                isSelected
                                  ? "bg-primary/15 border-primary text-slate-900 dark:text-white font-bold shadow-xs"
                                  : "bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400"
                              }`}
                            >
                              <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-2xs font-bold shrink-0 mt-0.5 ${
                                isSelected
                                  ? "bg-primary text-white"
                                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                              }`}>
                                {opt.id}
                              </span>
                              <span className="leading-snug">{opt.text}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleResetAll}
                  className="btn-secondary text-xs py-2.5 px-4 rounded-xl font-bold cursor-pointer w-full sm:w-auto"
                >
                  Cancel & Re-Upload
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <span className="text-2xs text-slate-500 font-medium">
                    {answeredCount === totalQuestionsCount
                      ? "All 10 questions answered! Ready to submit."
                      : `Please answer all 10 questions (${answeredCount}/${totalQuestionsCount})`}
                  </span>
                  <button
                    type="button"
                    disabled={answeredCount < totalQuestionsCount}
                    onClick={handleSubmitAssessment}
                    className="btn-primary text-xs py-3 px-7 rounded-2xl font-black shadow-lg cursor-pointer flex items-center justify-center gap-2 disabled:opacity-40 w-full sm:w-auto"
                  >
                    <Check size={16} />
                    <span>Submit Diagnostic Evaluation ({answeredCount}/{totalQuestionsCount})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PHASE 4: RESULTS, DETAILED SCORECARD & RECOMMEND YOUR COURSES */}
        {workflowStep === "results" && (
          <div className="space-y-6 animate-fadeIn">
            {/* 🌟 INTEGRATED LIVE HEATMAP & STATUTORY PROGRESS GRAPH */}
            <CourseSkillHeatmap onNavigateTab={jumpToTab} />

            {/* SCORE SUMMARY HERO CARD: CORRECT VS INCORRECT METRICS */}
            <div className="card bg-white dark:bg-canvas-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-card space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-2xs font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Diagnostic Assessment Complete
                  </span>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                    Evaluation Performance Summary
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Target Role: <strong className="text-primary font-bold">{officerData.targetRole}</strong> • Official Bio-Data Calibrated
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => jumpToTab("learning_hub")}
                    className="btn-primary text-xs py-2.5 px-5 rounded-2xl font-black flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <BookOpen size={14} /> Go to Learning Hub
                  </button>
                  <button
                    onClick={handleResetAll}
                    className="btn-secondary text-xs py-2.5 px-4 rounded-2xl font-bold cursor-pointer"
                  >
                    <RefreshCw size={13} /> Retake Test
                  </button>
                </div>
              </div>

              {/* 4 HIGH-VISIBILITY SCORE METRIC TILES */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {/* Total Questions */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <span className="text-2xs font-extrabold text-slate-400 uppercase tracking-wider block">Total Questions</span>
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono">{scoreResult?.total || 10}</span>
                  <span className="text-[10px] text-slate-400 block font-medium">Scenario MCQs</span>
                </div>

                {/* Correct Answers */}
                <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-1">
                  <span className="text-2xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">Correct Answers</span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                    {scoreResult?.correctCount || 0} ✓
                  </span>
                  <span className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 block font-medium">Validated Skills</span>
                </div>

                {/* Incorrect Answers */}
                <div className="p-4 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 text-center space-y-1">
                  <span className="text-2xs font-extrabold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">Incorrect / Gaps</span>
                  <span className="text-2xl sm:text-3xl font-black text-rose-600 dark:text-rose-400 font-mono">
                    {scoreResult?.incorrectCount || 0} ✗
                  </span>
                  <span className="text-[10px] text-rose-600/80 dark:text-rose-400/80 block font-medium">Deficit Areas</span>
                </div>

                {/* Calibrated Readiness */}
                <div className="p-4 rounded-2xl bg-primary/10 dark:bg-primary/15 border border-primary/30 text-center space-y-1">
                  <span className="text-2xs font-extrabold text-primary uppercase tracking-wider block">Readiness Score</span>
                  <span className="text-2xl sm:text-3xl font-black text-primary font-mono">{scoreResult?.score || 60}%</span>
                  <span className="text-[10px] text-primary/80 block font-medium">Benchmark: 85%</span>
                </div>
              </div>

              {/* DETAILED QUESTION BREAKDOWN (ALL 10 QUESTIONS) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    Question-by-Question Evaluation Breakdown (10 Scenarios)
                  </h4>
                  <span className="text-2xs font-bold text-slate-400">
                    {scoreResult?.correctCount} Correct • {scoreResult?.incorrectCount} Incorrect
                  </span>
                </div>

                <div className="space-y-3">
                  {questionsList.map((q, idx) => {
                    const userChoice = selectedAnswers[q.id] || "Not Answered";
                    const isCorrect = userChoice === q.correct;
                    return (
                      <div
                        key={q.id}
                        className={`p-4 rounded-2xl border text-xs transition-all ${
                          isCorrect
                            ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60"
                            : "bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/60"
                        } space-y-2.5`}
                      >
                        <div className="flex items-center justify-between text-2xs font-bold">
                          <span className="text-slate-600 dark:text-slate-300">
                            Question {idx + 1}: {q.competency} ({q.bloomLevel})
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full font-black text-2xs ${
                            isCorrect
                              ? "bg-emerald-500 text-white shadow-xs"
                              : "bg-rose-500 text-white shadow-xs"
                          }`}>
                            {isCorrect ? "Correct ✓" : "Incorrect / Deficit ✗"}
                          </span>
                        </div>

                        <p className="font-bold text-slate-900 dark:text-white leading-relaxed">{q.question}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-2xs">
                          <div className={`p-2.5 rounded-xl border ${
                            isCorrect
                              ? "bg-white dark:bg-slate-900 border-emerald-200 dark:border-emerald-900/40"
                              : "bg-white dark:bg-slate-900 border-rose-200 dark:border-rose-900/40"
                          }`}>
                            <span className="text-slate-400 block font-semibold">Your Selected Option:</span>
                            <span className={`font-extrabold ${isCorrect ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                              Option {userChoice}: {q.options.find((o) => o.id === userChoice)?.text || userChoice}
                            </span>
                          </div>

                          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/40">
                            <span className="text-slate-400 block font-semibold">Official Answer Key:</span>
                            <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                              Option {q.correct}: {q.options.find((o) => o.id === q.correct)?.text}
                            </span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-2xs space-y-1">
                          <p className="font-mono text-primary flex items-center gap-1.5 font-bold">
                            <BookOpen size={12} className="shrink-0" />
                            <span>Statutory Citation:</span> {q.source}
                          </p>
                          <p className="text-slate-600 dark:text-slate-300">
                            <strong>Official Rule Explanation:</strong> {q.citation}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RECOMMEND YOUR COURSES (DIRECTLY BELOW RESULTS) */}
            <div className="card bg-white dark:bg-canvas-card-dark rounded-3xl border-2 border-primary/30 p-6 sm:p-8 shadow-card space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-2xs font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
                    <Sparkles size={13} /> Recommended Courses for You
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-0.5">
                    Tailored Learning Pathways to Eliminate Competency Deficits
                  </h3>
                  <p className="text-xs text-slate-500">
                    Courses curated specifically based on your diagnostic answers and FRAC gap analysis. Click <strong>"Add to Learning Hub"</strong> to enroll them in your active roadmap.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {officerData.recommendedPathways?.map((pw) => {
                  const isAdded = addedRoadmaps[pw.id];
                  return (
                    <div
                      key={pw.id}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-3.5 hover:border-primary/40 transition-all shadow-xs"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-2xs font-extrabold px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                            {pw.provider}
                          </span>
                          <span className="text-2xs font-bold text-slate-400 font-mono">{pw.hours} • +{pw.xp} XP</span>
                        </div>
                        <h4 className="text-sm font-black text-slate-900 dark:text-white leading-snug">{pw.title}</h4>
                        <p className="text-xs text-slate-500">{pw.targetedGap}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-2xs font-mono text-slate-400 font-bold">{pw.id}</span>
                        <button
                          type="button"
                          onClick={() => handleAddCourseToRoadmap(pw)}
                          className={`text-2xs py-2 px-4 rounded-xl font-black flex items-center gap-1.5 cursor-pointer transition-all shadow-xs ${
                            isAdded
                              ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300"
                              : "btn-primary text-white"
                          }`}
                        >
                          {isAdded ? <Check size={12} /> : <Plus size={12} />}
                          <span>{isAdded ? "Added to Learning Hub ✓" : "Add to Learning Hub"}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => jumpToTab("learning_hub")}
                  className="btn-primary text-xs py-3 px-6 rounded-2xl font-black shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <BookOpen size={16} />
                  <span>Open Enrolled Roadmap in Learning Hub</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ----------------------------------------------------------------
  // 3. LEARNING HUB TAB (GAMIFIED ROADMAP & MILESTONES)
  // ----------------------------------------------------------------
  function LearningHubSection() {
    const handleLaunchCourse = (courseId) => {
      const crs = (courses.length ? courses : INITIAL_COURSES).find((c) => c.id === courseId) || {
        id: courseId,
        title: ROADMAP_NODES?.find((r) => r.courseId === courseId)?.title || "Statistical Training Module",
        duration: "4.0 hrs",
        progress: 0,
        description: "Official MoSPI accredited capacity building curriculum module."
      };
      enrollCourse?.(courseId);
      setActiveCoursePlayer(crs);
      showToast(`Launching ${crs.title} in Learning Workspace!`, "info");
    };

    return (
      <div className="space-y-6 text-left">
        <GamifiedRoadmapHub onLaunchCourse={handleLaunchCourse} />
      </div>
    );
  }

  // ----------------------------------------------------------------
  // 4. TRANSCRIPT & VAULT TAB (ENHANCED OFFICIAL MoSPI RECORD)
  // ----------------------------------------------------------------
  function TranscriptVaultSection() {
    return (
      <div className="space-y-6 text-left">
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                <Award size={24} className="text-primary" />
                {lang === "hi" ? "क्षमता प्रतिलेख एवं साख तिजोरी" : "Official Competency Transcript & Credentials Vault"}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-2xs border border-emerald-500/20">
                MoSPI / NSSTA Verified
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {lang === "hi" ? "आधिकारिक रूप से हस्ताक्षरित एवं एनआईसी सत्यापित सांख्यिकी संवर्ग क्षमता प्रतिलेख" : "Official cryptographically attested Civil Services ACBP Competency Transcript & Digital Vault"}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                showToast("Transcript verification link copied to clipboard!", "success");
              }}
              className="btn-secondary text-xs py-2 px-3.5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 size={14} /> {lang === "hi" ? "साझा करें" : "Share Link"}
            </button>
            <button
              onClick={() => {
                setSelectedCertificate({
                  id: `CERT-MoSPI-${user?.employeeId || user?.id || "2026"}`,
                  title: `${user?.officialDesignation || user?.designation || "Civil Services"} Statutory ACBP Competency Certificate`,
                  competency: user?.cadre?.includes("Frontline") || user?.officialDesignation?.includes("Ticket")
                    ? "Frontline Operations, Passenger Privacy & Statutory Compliance"
                    : "Advanced National Accounts, GFR 2017 & Survey Methodology",
                  score: 96,
                  issuedDate: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" }),
                  verificationCode: OFFICER_TRANSCRIPT.verificationHash?.slice(0, 16) || "GOV-IN-90812"
                });
              }}
              className="btn-primary text-xs py-2 px-4 rounded-xl font-bold flex items-center gap-1.5 shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <Award size={14} /> {lang === "hi" ? "आधिकारिक प्रमाणपत्र देखें / प्रिंट करें" : "View / Print Official Certificate"}
            </button>
          </div>
        </div>

        {/* OFFICIAL DIGITAL TRANSCRIPT CARD */}
        <div className="card bg-white dark:bg-canvas-card-dark rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
          {/* Top Sovereign Tri-Color Gradient Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-teal-400 to-indigo-500" />

          {/* Transcript Seal & Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-slate-100 dark:border-slate-800 pb-6 text-left">
            <div className="flex items-start sm:items-center gap-4 min-w-0 flex-1">
              <div className="w-18 h-18 rounded-2xl bg-white dark:bg-slate-800/90 p-2 shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                <img
                  src="/images/emblem_of_india.svg"
                  alt="State Emblem of India • Government of India"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-2xs uppercase font-black text-primary dark:text-teal-400 tracking-widest">
                    {lang === "hi" ? "भारत सरकार · सांख्यिकी एवं कार्यक्रम कार्यान्वयन मंत्रालय" : "Government of India · Ministry of Statistics & PI"}
                  </p>
                  <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold">
                    NSSTA Accredited
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                  {lang === "hi" ? "आधिकारिक एसीबीपी क्षमता प्रतिलेख" : "Official ACBP Competency Transcript"}
                </h3>
                <div className="flex items-center gap-2 pt-0.5 flex-wrap">
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-mono bg-slate-100 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700/80 font-bold">
                    Serial: {OFFICER_TRANSCRIPT.serialNo}
                  </span>
                  <span className="text-2xs font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    FRAC Verified · Level 4 (Advanced)
                  </span>
                  <span className="text-2xs font-bold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    ACBP 2026 Audit Complete
                  </span>
                </div>
              </div>
            </div>

            {/* QR Code & Institutional Stamp */}
            <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-xs min-w-[95px]">
                <QrCode size={40} className="text-slate-800 dark:text-slate-200 mx-auto" />
                <span className="text-[9px] font-mono font-black text-emerald-600 dark:text-emerald-400 block mt-1 tracking-wider">
                  NIC VERIFIED
                </span>
              </div>
            </div>
          </div>

          {/* Officer Details & Institutional Cadre Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-xs">
            <div className="space-y-0.5">
              <span className="text-2xs text-slate-400 uppercase font-bold tracking-wider block">{lang === "hi" ? "अधिकारी का नाम" : "Officer Name"}</span>
              <span className="font-extrabold text-slate-900 dark:text-white text-sm block">{user?.name || OFFICER_TRANSCRIPT.officerName}</span>
              <span className="text-[10px] text-slate-500 font-mono">ID: {user?.employeeId || user?.id || "EMP-2024-0342"}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-2xs text-slate-400 uppercase font-bold tracking-wider block">{lang === "hi" ? "पदनाम एवं संवर्ग" : "Designation & Cadre"}</span>
              <span className="font-bold text-slate-900 dark:text-white block">{user?.officialDesignation || user?.designation || OFFICER_TRANSCRIPT.designation}</span>
              <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">{user?.cadre || "Indian Statistical Service"}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-2xs text-slate-400 uppercase font-bold tracking-wider block">{lang === "hi" ? "तैनाती प्रभाग" : "Posting Directorate"}</span>
              <span className="font-bold text-slate-900 dark:text-white block">{user?.department || user?.postingLocation || OFFICER_TRANSCRIPT.postingLocation}</span>
              <span className="text-[10px] text-slate-500 font-mono">{user?.postingLocation || "Regional Office"}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-2xs text-slate-400 uppercase font-bold tracking-wider block">{lang === "hi" ? "कुल क्रेडिट व घंटे" : "Credits & Hours"}</span>
              <span className="font-extrabold text-primary text-sm block">+{user?.totalCredits || 18} Credits</span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">{user?.weeklyHoursLogged ? `${(user.weeklyHoursLogged * 4).toFixed(1)}h` : "36.0h"} Verified Training</span>
            </div>
          </div>

          {/* Accredited Competencies Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                {lang === "hi" ? "प्रत्यायित दक्षता इकाइयां (FRAC ढांचा)" : "Accredited Competency Units (FRAC Framework)"}
              </h4>
              <span className="text-2xs font-bold text-slate-400">7 Core Statutory Units Evaluated</span>
            </div>

            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3.5 text-left">{lang === "hi" ? "कोड" : "Code"}</th>
                    <th className="p-3.5 text-left">{lang === "hi" ? "दक्षता शीर्षक" : "Competency Title"}</th>
                    <th className="p-3.5 text-center">{lang === "hi" ? "एफआरएसी स्तर" : "FRAC Level"}</th>
                    <th className="p-3.5 text-center">{lang === "hi" ? "पंजीकृत घंटे" : "Hours Logged"}</th>
                    <th className="p-3.5 text-center">{lang === "hi" ? "मूल्यांकन ग्रेड" : "Evaluation Grade"}</th>
                    <th className="p-3.5 text-center">{lang === "hi" ? "स्थिति" : "Verification Status"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {OFFICER_TRANSCRIPT.accreditedCompetencies.map((rawComp, idx) => {
                    const comp = getLocalizedCompetency(rawComp, lang);
                    return (
                      <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="p-3.5 font-mono text-2xs font-bold text-slate-500">{comp.code}</td>
                        <td className="p-3.5 font-bold text-slate-900 dark:text-white">{comp.name}</td>
                        <td className="p-3.5 text-center font-mono text-emerald-600 dark:text-emerald-400 font-black">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                            {comp.fracLevel}
                          </span>
                        </td>
                        <td className="p-3.5 text-center font-mono text-slate-700 dark:text-slate-300 font-semibold">{comp.hours}</td>
                        <td className="p-3.5 text-center font-black text-primary text-sm">{comp.grade}</td>
                        <td className="p-3.5 text-center">
                          <span className="badge badge-mastered text-2xs px-2.5 py-1">
                            ✓ {lang === "hi" ? "सत्यापित" : comp.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cryptographic Footprint & Institutional Signatories */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-2xs font-mono text-slate-500 border-b border-slate-200/60 dark:border-slate-800/60 pb-3">
              <span className="truncate max-w-full">
                <strong>SHA-256 Hash:</strong> {OFFICER_TRANSCRIPT.verificationHash}
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold shrink-0 flex items-center gap-1">
                <ShieldCheck size={14} /> {lang === "hi" ? "सीबीसी द्वारा डिजिटल रूप से सत्यापित" : "DIGITALLY ATTESTED BY CBC & MoSPI"}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1 text-2xs text-slate-500 dark:text-slate-400">
              <div className="text-left">
                <p className="font-extrabold text-slate-900 dark:text-white">National Statistical Systems Training Academy (NSSTA)</p>
                <p className="text-[10px]">Plot No. 22, Knowledge Park II, Greater Noida, Uttar Pradesh 201310</p>
              </div>
              <div className="text-right">
                <p className="font-extrabold text-slate-900 dark:text-white">Ministry of Statistics & Programme Implementation</p>
                <p className="text-[10px]">Khurshid Lal Bhawan, Janpath, New Delhi, Delhi 110001</p>
              </div>
            </div>
          </div>
        </div>

        {/* CERTIFICATES VAULT SECTION */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Award size={20} className="text-primary" />
              {lang === "hi" ? "जारी किए गए डिजिटल प्रमाणपत्र एवं साख तिजोरी" : "Issued Digital Certificates & Credentials Vault"}
            </h3>
            <span className="text-2xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {certificates.length} Official Certificates Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="card bg-white dark:bg-canvas-card-dark rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-lg hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-xl transition-all flex items-start gap-4 text-left group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-indigo-500/10 text-primary dark:text-teal-300 flex items-center justify-center shrink-0 border border-primary/30 shadow-xs group-hover:scale-105 transition-transform">
                  <Award size={28} />
                </div>
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">
                      {cert.id}
                    </span>
                    <span className="text-2xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                      Score: {cert.score}%
                    </span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white leading-tight">{cert.title}</h4>
                  <p className="text-2xs text-slate-500 dark:text-slate-400 font-medium">{cert.competency}</p>
                  <div className="flex items-center gap-3 text-2xs text-slate-400 font-mono pt-1">
                    <span>Issued: <strong>{cert.issuedDate}</strong></span>
                    <span>· NIC Verified</span>
                  </div>
                  <div className="pt-2.5 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedCertificate(cert)}
                      className="btn-secondary text-2xs py-1.5 px-3.5 font-bold rounded-xl flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye size={12} /> {lang === "hi" ? "प्रमाणपत्र देखें" : "View Certificate"}
                    </button>
                    <button
                      onClick={() => setSelectedCertificate(cert)}
                      className="btn-primary text-2xs py-1.5 px-3.5 font-bold rounded-xl flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Download size={12} /> Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Digital Certificate Viewer Modal */}
        {selectedCertificate && (
          <OfficialCertificate
            certificate={selectedCertificate}
            user={user}
            onClose={() => setSelectedCertificate(null)}
            showToast={showToast}
          />
        )}
      </div>
    );
  }

  // ----------------------------------------------------------------
  // 5. SETTINGS TAB (COMPREHENSIVE 6-TAB SUITE)
  // ----------------------------------------------------------------
  function SettingsSection() {
    const handleSaveSettings = () => {
      updateProfile?.({
        name: settingsProfile.name,
        designation: settingsProfile.designation,
        department: settingsProfile.department,
        postingLocation: settingsProfile.postingLocation,
        avatar: settingsProfile.avatar,
        selectedSkills: settingsProfile.focusSkills,
        weeklyCommitment: `${settingsProfile.weeklyHoursTarget} hrs/week`,
      });
      showToast("Officer profile & institutional preferences updated successfully!", "success");
    };

    const handleClearMitraHistory = () => {
      try {
        localStorage.removeItem("statsaarthi_mitra_sessions_v1");
        showToast("Mitra AI conversation history cleared.", "info");
      } catch (e) {}
    };

    const handleExportData = () => {
      const exportBlob = new Blob([JSON.stringify({
        officer: settingsProfile,
        transcript: OFFICER_TRANSCRIPT,
        certificates: certificates,
        exportTimestamp: new Date().toISOString()
      }, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(exportBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `MoSPI_Officer_Dossier_${settingsProfile.name.replace(/\s+/g, "_")}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("Personal Learning Dossier exported as JSON.", "success");
    };

    const SETTINGS_TABS = [
      { id: "profile", label: "Officer Profile", icon: User, desc: "Personal identity & cadre" },
      { id: "learning", label: "ACBP & Goals", icon: Target, desc: "Mandatory learning targets" },
      { id: "notifications", label: "Notifications", icon: Bell, desc: "Alerts & gazette circulars" },
      { id: "security", label: "Security & SSO", icon: ShieldCheck, desc: "Parichay & 2FA credentials" },
      { id: "accessibility", label: "Accessibility", icon: Globe, desc: "Theme, fonts & GIGW 3.0" },
    ];

    const ALL_COMPETENCY_OPTIONS = [
      "Survey Design & Sampling Estimation",
      "Python for Advanced Data Analytics",
      "System of National Accounts & SUT Compilation",
      "Price Statistics & Laspeyres CPI Methodology",
      "Spatial Data Analytics & Geocoding for Field Surveys",
      "Digital Personal Data Protection & Governance",
      "Annual Survey of Industries (ASI) Compilation & Scrutiny",
      "Periodic Labour Force Survey (PLFS) Activity Classification",
      "Machine Learning for Microdata Imputation & Outlier Scrutiny",
      "Time Series Econometrics & Seasonal Adjustment (X-13ARIMA)"
    ];

    return (
      <div className="space-y-6 text-left pb-10">
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Settings size={22} className="text-primary" />
            Account & System Preferences Studio
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Configure your official civil services profile, Mission Karmayogi ACBP targets, AI Copilot behavior, and Parichay SSO security
          </p>
        </div>

        {/* Tab Navigation Pill Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {SETTINGS_TABS.map((tab) => {
            const Icon = tab.icon;
            const isCurrent = settingsTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSettingsTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isCurrent
                    ? "bg-[#0B192C] text-white shadow-md shadow-slate-900/10"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800"
                }`}
              >
                <Icon size={15} className={isCurrent ? "text-amber-400" : "text-slate-400"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* TAB 1: OFFICER PROFILE & CADRE MANAGEMENT (All 18 Onboarding Attributes) */}
        {/* ========================================================================= */}
        {settingsTab === "profile" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Top Prompt Card with Edit Wizard Button */}
            <div className="card bg-gradient-to-r from-[#0F1117] via-[#161B26] to-[#0A0C11] text-white p-6 rounded-3xl border border-white/10 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-primary text-white">
                  Statutory Cadre Profile
                </span>
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
                  {user?.name || "Priya Sharma"} {user?.cadre ? `• ${user.cadre}` : "• ISS Cadre"}
                </h3>
                <p className="text-xs text-white/90 font-medium">
                  Calibrated according to the National Statistical Systems Training Academy (NSSTA) Competency Standards.
                </p>
              </div>

              <button
                onClick={() => navigate("/onboarding?mode=edit")}
                className="btn-primary text-xs py-2.5 px-5 rounded-2xl font-black flex items-center gap-2 shadow-lg hover:scale-102 transition-all cursor-pointer whitespace-nowrap shrink-0 text-white"
              >
                <Sliders size={15} />
                <span>Edit Onboarding Profile</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Avatar & Cadre Card */}
              <div className="card bg-white dark:bg-canvas-card-dark p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card flex flex-col items-center text-center space-y-4">
                <div className="relative group">
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user?.name || "Officer"}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl ring-2 ring-orange/40"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-primary/20 text-primary dark:text-teal-400 flex items-center justify-center font-black text-2xl border-4 border-white dark:border-slate-800 shadow-xl ring-2 ring-primary/40">
                      {user?.name ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) : "SO"}
                    </div>
                  )}
                  <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800 flex items-center justify-center text-white text-[10px]" title="Active Govt Verified Officer">
                    <Check size={12} strokeWidth={3} />
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {user?.name || "Statistical Officer"}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-300 mt-0.5 font-medium">
                    {user?.officialDesignation || user?.designation || "Senior Statistical Officer"}
                  </p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-blue-800">
                    {user?.cadre || "Indian Statistical Service"}
                  </span>
                </div>

                <div className="w-full pt-3 border-t border-slate-100 dark:border-slate-800 text-left space-y-2 text-2xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-bold">Employee ID:</span>
                    <strong className="font-mono text-slate-900 dark:text-white">{user?.employeeId || user?.id || "EMP-2024-0342"}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-bold">Posting:</span>
                    <strong className="text-slate-900 dark:text-white truncate">{user?.postingLocation || "Regional Office, Kolkata"}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-bold">Division:</span>
                    <strong className="text-slate-900 dark:text-white truncate">{user?.department || "Field Operations Division"}</strong>
                  </div>
                </div>
              </div>

              {/* Right: Detailed 18 Onboarding Parameters Display */}
              <div className="lg:col-span-2 card bg-white dark:bg-canvas-card-dark p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <User size={16} className="text-primary" /> Calibrated Service & Training Parameters
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    ✓ Verified Service Book
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                    <span className="text-2xs font-extrabold text-slate-500 dark:text-slate-400 uppercase block mb-0.5">Highest Qualification</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block truncate">{user?.qualification || "Master's in Statistics / Applied Statistics"}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                    <span className="text-2xs font-extrabold text-slate-500 dark:text-slate-400 uppercase block mb-0.5">Service Experience</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">{user?.yearsOfService || "5 - 10 Years"}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 sm:col-span-2">
                    <span className="text-2xs font-extrabold text-slate-500 dark:text-slate-400 uppercase block mb-0.5">Primary Official Assignment</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">{user?.primaryAssignment || "PLFS Household Survey Scrutiny & CAPI"}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                    <span className="text-2xs font-extrabold text-slate-500 dark:text-slate-400 uppercase block mb-0.5">Target Promotion Role</span>
                    <span className="text-xs font-bold text-orange dark:text-amber-400 block">{user?.targetRole || "Assistant Director (Level 11)"}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                    <span className="text-2xs font-extrabold text-slate-500 dark:text-slate-400 uppercase block mb-0.5">Dedicated Learning Budget</span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block">{user?.weeklyLearningBudget || "4 Hours / Week (Regular)"}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                    <span className="text-2xs font-extrabold text-slate-500 dark:text-slate-400 uppercase block mb-0.5">iGOT Courses Completed</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">{user?.igotCoursesCompleted || "4 - 7 Courses"}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                    <span className="text-2xs font-extrabold text-slate-500 dark:text-slate-400 uppercase block mb-0.5">NSSTA Programmes</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">{user?.nsstaProgrammesAttended || "2 - 4 Specialized Modules"}</span>
                  </div>
                </div>

                {/* External Certifications Badges */}
                <div className="pt-2">
                  <span className="text-2xs font-extrabold text-slate-500 dark:text-slate-400 uppercase block mb-2">Accredited External Certifications</span>
                  <div className="flex flex-wrap gap-2">
                    {(user?.externalCertifications?.length ? user.externalCertifications : ["Python for Data Science (NPTEL/IIT)", "GIS Spatial Analytics"]).map((cert, idx) => (
                      <span
                        key={idx}
                        className="text-2xs font-bold px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        ✦ {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => navigate("/onboarding?mode=edit")}
                    className="btn-primary text-xs py-2 px-5 font-bold flex items-center gap-1.5 cursor-pointer text-white"
                  >
                    <Sliders size={14} /> Update All Parameters via Wizard
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: ACBP & MANDATORY LEARNING TARGETS                                  */}
        {/* ========================================================================= */}
        {settingsTab === "learning" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {/* Annual Target Card */}
            <div className="card bg-white dark:bg-canvas-card-dark p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Target size={16} className="text-primary" /> Mission Karmayogi ACBP Targets
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between text-2xs font-bold mb-1.5">
                    <span className="text-slate-600 dark:text-slate-300">Weekly Commitment Goal</span>
                    <span className="text-orange font-mono font-bold">{settingsProfile.weeklyHoursTarget} Hours / Week</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={settingsProfile.weeklyHoursTarget}
                    onChange={(e) => setSettingsProfile({ ...settingsProfile, weeklyHoursTarget: Number(e.target.value) })}
                    className="w-full accent-orange"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    At {settingsProfile.weeklyHoursTarget}h/week, you will reach your annual 50-hour ACBP accreditation in approximately {Math.ceil(50 / settingsProfile.weeklyHoursTarget)} weeks.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xs font-bold text-amber-900 dark:text-amber-300">Mandatory Civil Services Quota</span>
                    <span className="text-xs font-mono font-extrabold text-amber-800 dark:text-amber-200">50 Hours / Year</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-amber-200 dark:bg-amber-900 overflow-hidden">
                    <div className="h-full bg-amber-600 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <p className="text-[10px] text-amber-800 dark:text-amber-400">
                    Current Progress: <strong>36.0h / 50.0h (72% Completed)</strong>
                  </p>
                </div>

                <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs">
                    Auto-Sync Verified Hours to SPARROW APAR
                  </span>
                  <input
                    type="checkbox"
                    checked={settingsProfile.sparrowAutoSync}
                    onChange={(e) => setSettingsProfile({ ...settingsProfile, sparrowAutoSync: e.target.checked })}
                    className="accent-orange w-4 h-4"
                  />
                </label>
              </div>
            </div>

            {/* Focus Skills Selection Card */}
            <div className="card bg-white dark:bg-canvas-card-dark p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles size={16} className="text-primary" /> Priority Competencies (Quarterly Target)
              </h3>
              <p className="text-xs text-slate-500">
                Select 3 to 5 competencies to tune the platform recommendation engine:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {ALL_COMPETENCY_OPTIONS.map((skill) => {
                  const isSelected = settingsProfile.focusSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      onClick={() => {
                        if (isSelected) {
                          setSettingsProfile({
                            ...settingsProfile,
                            focusSkills: settingsProfile.focusSkills.filter((s) => s !== skill)
                          });
                        } else {
                          setSettingsProfile({
                            ...settingsProfile,
                            focusSkills: [...settingsProfile.focusSkills, skill]
                          });
                        }
                      }}
                      className={`px-3 py-1.5 rounded-xl text-2xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? "bg-[#0B192C] text-white shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                      }`}
                    >
                      {isSelected && <Check size={11} />}
                      <span>{skill}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={handleSaveSettings}
                  className="btn-primary text-xs py-2 px-5 font-bold"
                >
                  Update Learning Goals
                </button>
              </div>
            </div>
          </div>
        )}



        {/* ========================================================================= */}
        {/* TAB 4: NOTIFICATIONS & CIRCULARS HUB                                      */}
        {/* ========================================================================= */}
        {settingsTab === "notifications" && (
          <div className="card bg-white dark:bg-canvas-card-dark p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card space-y-4 max-w-2xl animate-fadeIn">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Bell size={16} className="text-primary" /> Real-time Alert Subscriptions
            </h3>

            <div className="space-y-2.5 text-xs">
              {[
                { key: "emailAlerts", title: "Assessment Deadlines & Certificate Expirations", desc: "Receive email warnings 7 days prior to assessment target dates" },
                { key: "dailyBrainTeaser", title: "Daily 1-Question Statistical Brain Teaser", desc: "Receive daily micro-quiz at 9:30 AM IST" },
                { key: "gazetteAlerts", title: "MoSPI Gazette Notifications & Manual Releases", desc: "Instant alert when new survey schedules or SNA standards are published" },
                { key: "acbpReminders", title: "Mission Karmayogi ACBP Target Milestones", desc: "Weekly digest of completed hours vs 50h annual mandate" },
                { key: "soundEffects", title: "Interactive Interface Sounds", desc: "Play subtle acoustic feedback on quiz completion and badge achievements" }
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:border-slate-200"
                >
                  <div className="pr-4">
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-xs block">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">{item.desc}</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settingsProfile[item.key]}
                    onChange={(e) => setSettingsProfile({ ...settingsProfile, [item.key]: e.target.checked })}
                    className="accent-orange w-4 h-4 shrink-0"
                  />
                </label>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={handleSaveSettings}
                className="btn-primary text-xs py-2 px-6 font-bold"
              >
                Save Alert Settings
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: SECURITY, 2FA & PARICHAY SSO                                       */}
        {/* ========================================================================= */}
        {settingsTab === "security" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {/* Parichay SSO Authentication Card */}
            <div className="card bg-white dark:bg-canvas-card-dark p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-600" /> Parichay (e-Pramaan) SSO
              </h3>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xs font-bold text-emerald-900 dark:text-emerald-300">Single Sign-On Status</span>
                  <span className="text-2xs font-extrabold px-2 py-0.5 rounded bg-emerald-600 text-white">CONNECTED</span>
                </div>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 font-mono">
                  Gov ID: GOV-ISS-2026-9042
                </p>
                <p className="text-[10px] text-emerald-700 dark:text-emerald-400">
                  Authentication token validated via National Informatics Centre (NIC). Token valid through <strong>31 December 2026</strong>.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer">
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-xs block">
                      Aadhaar / Sandes OTP 2FA
                    </span>
                    <span className="text-[10px] text-slate-400">Enforce two-factor verification on new device logins</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settingsProfile.twoFactorAuth}
                    onChange={(e) => setSettingsProfile({ ...settingsProfile, twoFactorAuth: e.target.checked })}
                    className="accent-orange w-4 h-4 shrink-0"
                  />
                </label>
              </div>
            </div>

            {/* Active Sessions & Data Export */}
            <div className="card bg-white dark:bg-canvas-card-dark p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <KeyRound size={16} className="text-primary" /> Device Sessions & Data Dossier
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Laptop size={18} className="text-slate-500" />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-xs">Chrome on Windows 11</p>
                      <p className="text-[10px] text-emerald-600 font-semibold">Current Active Session • Kolkata, IN</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Smartphone size={18} className="text-slate-500" />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-xs">Sandes NIC App (Android 14)</p>
                      <p className="text-[10px] text-slate-400">Last active: 2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleExportData}
                  className="btn-secondary text-2xs py-2 px-3 font-bold flex-1 flex items-center justify-center gap-1.5"
                >
                  <Download size={13} /> Export Officer Dossier (JSON)
                </button>

                <button
                  onClick={() => showToast("Terminated all other active sessions.", "success")}
                  className="btn bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-2xs py-2 px-3 font-bold hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                >
                  Sign Out Other Devices
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: ACCESSIBILITY & DISPLAY (GIGW 3.0 STANDARDS)                       */}
        {/* ========================================================================= */}
        {settingsTab === "accessibility" && (
          <div className="card bg-white dark:bg-canvas-card-dark p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card space-y-6 max-w-2xl animate-fadeIn">
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Globe size={16} className="text-primary" /> GIGW 3.0 Accessibility & Display
            </h3>

            {/* Theme Toggle */}
            <div className="space-y-2">
              <label className="text-2xs font-bold text-slate-500 uppercase tracking-wider block">Visual Theme</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { if (isDark) toggleTheme(); }}
                  className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    !isDark ? "bg-primary/10 border-primary shadow-xs ring-1 ring-primary/30" : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <Sun size={20} className={!isDark ? "text-primary" : "text-slate-400"} />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Day / Light Mode</p>
                    <p className="text-[10px] text-slate-400">Clean high-contrast office palette</p>
                  </div>
                </button>

                <button
                  onClick={() => { if (!isDark) toggleTheme(); }}
                  className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    isDark ? "bg-primary/10 dark:bg-primary/15 border-primary shadow-xs ring-1 ring-primary/30" : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <Moon size={20} className={isDark ? "text-amber-400" : "text-slate-400"} />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Night / Dark Mode</p>
                    <p className="text-[10px] text-slate-400">Deep slate low-glare surface</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Font Size Scaling */}
            <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <label className="text-2xs font-bold text-slate-500 uppercase tracking-wider block">Text Size Scaling</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={resetFontSize}
                  className="btn-secondary text-xs py-2 px-4 font-bold"
                >
                  Standard (100%)
                </button>
                <button
                  onClick={increaseFontSize}
                  className="btn-secondary text-xs py-2 px-4 font-bold"
                >
                  Large (115%)
                </button>
                <button
                  onClick={decreaseFontSize}
                  className="btn-secondary text-xs py-2 px-4 font-bold"
                >
                  Compact (90%)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ----------------------------------------------------------------
  // MAIN VIEWPORT RENDER
  // ----------------------------------------------------------------
  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-[#080C14] overflow-hidden transition-colors duration-200 text-slate-800 dark:text-slate-100">
      {/* Crystalline Smoked Glass Header */}
      <header className="w-full shrink-0 px-4 sm:px-6 py-2.5 bg-white/95 dark:bg-[#0B1526]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 shadow-xs select-none z-30 flex items-center justify-between">
        {/* Left Brand Area */}
        <Link to="/" className="flex items-center gap-3 select-none group" aria-label="DAKSH Home">
          <img
            src="/assets/daksh-logo.png"
            alt="DAKSH"
            className="h-8 w-auto object-contain brightness-100 dark:brightness-110 group-hover:scale-102 transition-transform"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-black bg-primary/10 text-primary dark:bg-primary/20 dark:text-teal-300 border border-primary/20">
                OFFICER PORTAL
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
              {BRAND_CONFIG.platformTitle} • {BRAND_CONFIG.ministryShort}
            </p>
          </div>
        </Link>

        {/* Right Action: Language Toggle (EN / हिन्दी) + ONLY Dark and Light Mode Toggle */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            aria-label={`Switch Language. Current: ${lang === "en" ? "English" : "हिन्दी"}`}
            title="Switch Language (English / हिन्दी)"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer text-xs font-bold"
          >
            <Globe size={15} className="text-primary" />
            <span>{lang === "en" ? "हिन्दी" : "English"}</span>
          </button>

          {/* Theme Toggle: Strictly Dark / Light */}
          <button
            onClick={toggleTheme}
            aria-label={`Current theme: ${theme}. Click to toggle Dark / Light`}
            title={`Current: ${isDark ? "DARK" : "LIGHT"} (Click to toggle)`}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            {isDark ? (
              <>
                <Sun size={16} className="text-amber-400" />
                <span className="text-xs font-bold text-amber-300 hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={16} className="text-slate-700" />
                <span className="text-xs font-bold text-slate-700 hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Body Area */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          navItems={navItems}
          active={active}
          onSelect={handleNavSelect}
          onLogout={handleLogout}
          user={user}
          subtitle={lang === "hi" ? "अधिकारी कंसोल" : "Learner Console"}
        />

        <main className={`flex-1 relative ${active === "mitra" ? "p-0 overflow-hidden h-full flex flex-col" : "overflow-y-auto p-4 sm:p-7"}`}>
          <div className={active === "mitra" ? "w-full h-full flex flex-col flex-1" : "max-w-5xl mx-auto w-full"}>
            {loading ? (
              <SkeletonSection />
            ) : (
              <SectionWrapper key={active} className={active === "mitra" ? "w-full h-full flex flex-col flex-1" : ""}>
                {active === "overview" && <OverviewSection />}
                {active === "skill_gap" && <SkillGapAnalysisSection />}
                {active === "learning_hub" && <LearningHubSection />}
                {active === "mitra" && (
                  <ChatErrorBoundary>
                    <Setu />
                  </ChatErrorBoundary>
                )}
                {active === "transcript" && <TranscriptVaultSection />}
                {active === "settings" && <SettingsSection />}
              </SectionWrapper>
            )}
          </div>

          {/* Floating Docked AI Assistant Pill */}
          {active !== "mitra" && (
            <button
              onClick={() => jumpToTab("mitra")}
              className="fixed bottom-6 right-6 z-40 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-full shadow-2xl border border-teal-500/40 shadow-black/60 flex items-center gap-2.5 hover:scale-105 transition-all group cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-sm">
                <Sparkles size={12} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-white leading-tight flex items-center gap-1.5">
                  <span>{BRAND_CONFIG.aiMentorName}</span>
                </p>
                <p className="text-[10px] text-teal-300 leading-tight">Statistical Knowledge Bridge</p>
              </div>
            </button>
          )}

          {showSparrowModal && <SparrowModal />}

          {/* Global Course Syllabus & Bridge Gap Modal */}
          {selectedCourseDetail && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
              onClick={(e) => { if (e.target === e.currentTarget) setSelectedCourseDetail(null); }}
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-7 space-y-4 border border-slate-200 dark:border-slate-800 shadow-2xl text-left">
                <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                        {selectedCourseDetail.provider || "NSSTA / iGOT"}
                      </span>
                      {selectedCourseDetail.code && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {selectedCourseDetail.code}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                      {selectedCourseDetail.name || selectedCourseDetail.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCourseDetail(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="space-y-3.5 text-xs max-h-[60vh] overflow-y-auto pr-1">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {selectedCourseDetail.description}
                  </p>

                  {/* 4-Stat Metric Strip */}
                  <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-2xs font-medium">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Duration:</span>
                      <strong className="text-slate-900 dark:text-white font-mono">{selectedCourseDetail.duration || selectedCourseDetail.hours || "24 Hours"}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">ACBP Credits:</span>
                      <strong className="text-primary font-mono">+{selectedCourseDetail.credits || 4} Target Hours</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Delivery Format:</span>
                      <strong className="text-slate-900 dark:text-white truncate block">{selectedCourseDetail.format || "Interactive Simulation"}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Modules:</span>
                      <strong className="text-slate-900 dark:text-white font-mono">{selectedCourseDetail.modulesCount || 6} Curriculum Units</strong>
                    </div>
                  </div>

                  {/* Curriculum Syllabus */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <BookCheck size={14} className="text-primary" />
                      Statutory Curriculum & Practical Syllabus:
                    </h4>
                    <ul className="space-y-1.5 text-2xs text-slate-700 dark:text-slate-300">
                      {selectedCourseDetail.syllabus?.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 font-medium">
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedCourseDetail(null)}
                    className="btn-secondary text-xs py-2 px-4 rounded-xl cursor-pointer"
                  >
                    Close
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const courseId = selectedCourseDetail.id || `CRS-${selectedCourseDetail.code || "STAT"}`;
                        enrollCourse?.(courseId);
                        const crsObj = (courses.length ? courses : INITIAL_COURSES).find((c) => c.id === courseId) || selectedCourseDetail;
                        setSelectedCourseDetail(null);
                        setActiveCoursePlayer(crsObj);
                        showToast(`Launching ${selectedCourseDetail.name || selectedCourseDetail.title} in Learning Player!`, "success");
                      }}
                      className="btn-primary text-xs py-2.5 px-5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <Sparkles size={14} />
                      <span>Bridge Gap & Open Course</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive MoSPI Course Learning Player (Video & PDF Manual) */}
          {activeCoursePlayer && (
            <CoursePlayerModal
              course={activeCoursePlayer}
              onClose={() => setActiveCoursePlayer(null)}
              onProgressUpdate={(cId, p) => {
                setCourses((prev) =>
                  prev.map((c) =>
                    c.id === cId
                      ? { ...c, progress: p, status: p >= 100 ? "completed" : "in_progress" }
                      : c
                  )
                );
              }}
              showToast={showToast}
              lang={lang}
            />
          )}
        </main>
      </div>
    </div>
  );
}


