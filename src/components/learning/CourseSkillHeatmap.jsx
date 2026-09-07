import React, { useState } from "react";
import {
  BarChart3,
  Target,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  TrendingUp,
  Award,
  ChevronRight,
  Sparkles,
  Info,
  Layers,
  Filter,
} from "lucide-react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Cell,
} from "recharts";
import { HARDCODED_OFFICERS } from "../../data/mockData";
import { useUser } from "../../context/UserContext";

/**
 * CourseSkillHeatmap Component (Graph-Based Analytics Visual)
 * 
 * Visualizes:
 * 1. Interactive Course Completion & Hours Progress Graph
 * 2. FRAC Competency Gap Severity (Required Level vs Current Level)
 * 3. Granular Stage-by-Stage Verification Milestones
 * 4. 100% Professional English Interface with Role-Isolated Binding
 */
export default function CourseSkillHeatmap({ onNavigateTab, officerData }) {
  const { user } = useUser();
  const [selectedFilter, setSelectedFilter] = useState("all"); // 'all', 'critical', 'in_progress', 'mastered'
  const [activeCourseId, setActiveCourseId] = useState(null);

  // Determine active officer: passed prop > user context > default fallback
  const isSuparna = officerData
    ? officerData.id?.includes("suparna") || officerData.name?.includes("Suparna")
    : user?.email?.includes("suparna") || user?.name?.includes("Suparna");

  const officer = officerData || (isSuparna ? HARDCODED_OFFICERS.suparna_chatterjee : HARDCODED_OFFICERS.amit_mondal);

  // Enriched course progression dataset
  const courseProgressionData = isSuparna
    ? [
        {
          id: "CRS-GFR-401",
          shortCode: "GFR-401",
          title: "Advanced Public Procurement & Contract Management (GFR 2017 & GeM)",
          provider: "NIFM / DoPT",
          totalHours: 4.5,
          loggedHours: 3.2,
          progress: 72,
          status: "in_progress",
          stageBlocks: [
            { stage: "Stage 1: Bio-Data Sync", completed: true, pct: 100 },
            { stage: "Stage 2: GeM 4.0 Tenders", completed: true, pct: 100 },
            { stage: "Stage 3: PBG Forfeitures", completed: true, pct: 90 },
            { stage: "Stage 4: Dispute Arbitration", completed: false, pct: 40 },
            { stage: "Stage 5: SPARROW Verified", completed: false, pct: 0 },
          ],
          gapDeficit: {
            domain: "Advanced GFR 2017 & Contract Management",
            code: "FRAC-FIN-04",
            currentLevel: 2,
            requiredLevel: 4,
            gapScore: -2.0,
            severity: "Critical",
            description: "Statutory deficit in high-value contract dispute resolution and GFR Rule 149 compliance.",
          },
        },
        {
          id: "CRS-VIG-401",
          shortCode: "VIG-401",
          title: "Vigilance Administration & Disciplinary Proceedings for Supervisory Officers",
          provider: "ISTM / CVC",
          totalHours: 3.5,
          loggedHours: 1.5,
          progress: 42,
          status: "in_progress",
          stageBlocks: [
            { stage: "Stage 1: Bio-Data Sync", completed: true, pct: 100 },
            { stage: "Stage 2: Rule 14 Charge Sheets", completed: true, pct: 75 },
            { stage: "Stage 3: IO Inquiry Protocols", completed: false, pct: 25 },
            { stage: "Stage 4: CVC Consultation", completed: false, pct: 0 },
            { stage: "Stage 5: SPARROW Verified", completed: false, pct: 0 },
          ],
          gapDeficit: {
            domain: "Preventive Vigilance & CCS CCA Rules",
            code: "FRAC-VIG-02",
            currentLevel: 2,
            requiredLevel: 4,
            gapScore: -2.0,
            severity: "Critical",
            description: "Gaps in framing major penalty charges and conducting vigilance clearance audits.",
          },
        },
        {
          id: "CRS-ANL-301",
          shortCode: "ANL-301",
          title: "Data-Driven Decision Making in Government (GovAnalytics)",
          provider: "LBSNAA / NeGD",
          totalHours: 4.0,
          loggedHours: 0.8,
          progress: 20,
          status: "in_progress",
          stageBlocks: [
            { stage: "Stage 1: Bio-Data Sync", completed: true, pct: 100 },
            { stage: "Stage 2: National Statistical Data", completed: false, pct: 30 },
            { stage: "Stage 3: Macro KPI Dashboards", completed: false, pct: 0 },
            { stage: "Stage 4: Cabinet Note Drafting", completed: false, pct: 0 },
            { stage: "Stage 5: SPARROW Verified", completed: false, pct: 0 },
          ],
          gapDeficit: {
            domain: "Data-Driven Policy Analytics (GovAnalytics)",
            code: "FRAC-ANL-01",
            currentLevel: 1,
            requiredLevel: 3,
            gapScore: -2.0,
            severity: "Critical",
            description: "Deficit in synthesizing ministerial microdata tables into executive cabinet memorandums.",
          },
        },
        {
          id: "CRS-LDR-301",
          shortCode: "LDR-301",
          title: "Leadership, Team Motivation & Change Management in Public Sector",
          provider: "LBSNAA",
          totalHours: 3.0,
          loggedHours: 2.6,
          progress: 85,
          status: "near_complete",
          stageBlocks: [
            { stage: "Stage 1: Bio-Data Sync", completed: true, pct: 100 },
            { stage: "Stage 2: Sectional Workflow Mgmt", completed: true, pct: 100 },
            { stage: "Stage 3: Conflict Mediation", completed: true, pct: 90 },
            { stage: "Stage 4: Case Simulation", completed: true, pct: 80 },
            { stage: "Stage 5: SPARROW Verified", completed: false, pct: 40 },
          ],
          gapDeficit: {
            domain: "Strategic Leadership & Change Management",
            code: "FRAC-LDR-03",
            currentLevel: 2,
            requiredLevel: 3,
            gapScore: -1.0,
            severity: "Moderate",
            description: "Moderate gap in sectional administrative transformation and junior staff mentorship.",
          },
        },
        {
          id: "CRS-GEM-101",
          shortCode: "GEM-101",
          title: "Government e-Marketplace (GeM) Direct Purchase Protocols",
          provider: "GeM Academy",
          totalHours: 2.0,
          loggedHours: 2.0,
          progress: 100,
          status: "certified",
          stageBlocks: [
            { stage: "Stage 1: Bio-Data Sync", completed: true, pct: 100 },
            { stage: "Stage 2: Catalog Filtering", completed: true, pct: 100 },
            { stage: "Stage 3: L1 Comparative Bidding", completed: true, pct: 100 },
            { stage: "Stage 4: Invoice Settlement", completed: true, pct: 100 },
            { stage: "Stage 5: SPARROW Verified", completed: true, pct: 100 },
          ],
          gapDeficit: {
            domain: "Government e-Marketplace (GeM) Procurement",
            code: "FRAC-GEM-01",
            currentLevel: 3,
            requiredLevel: 3,
            gapScore: 0.0,
            severity: "Mastered",
            description: "Fully mastered statutory procurement workflows up to ₹5 Lakhs financial threshold.",
          },
        },
      ]
    : [
        {
          id: "CRS-CYB-101",
          shortCode: "CYB-101",
          title: "Cyber Hygiene Practices for Government Officials",
          provider: "C-DAC / CERT-In",
          totalHours: 2.5,
          loggedHours: 1.6,
          progress: 65,
          status: "in_progress",
          stageBlocks: [
            { stage: "Stage 1: Bio-Data Sync", completed: true, pct: 100 },
            { stage: "Stage 2: Terminal Security", completed: true, pct: 100 },
            { stage: "Stage 3: Phishing Identification", completed: true, pct: 75 },
            { stage: "Stage 4: DPDP PII Redaction", completed: false, pct: 30 },
            { stage: "Stage 5: SPARROW Verified", completed: false, pct: 0 },
          ],
          gapDeficit: {
            domain: "Cyber Hygiene & DPDP Act 2023",
            code: "FRAC-CYB-01",
            currentLevel: 1,
            requiredLevel: 3,
            gapScore: -2.0,
            severity: "Critical",
            description: "High deficit in defending against spoofed vendor credentials and USB endpoint data risks.",
          },
        },
        {
          id: "CRS-EOF-201",
          shortCode: "EOF-201",
          title: "e-Office & Digital Workflow Management",
          provider: "NIC / DoPT",
          totalHours: 4.0,
          loggedHours: 1.4,
          progress: 35,
          status: "in_progress",
          stageBlocks: [
            { stage: "Stage 1: Bio-Data Sync", completed: true, pct: 100 },
            { stage: "Stage 2: Electronic Receipt Creation", completed: true, pct: 60 },
            { stage: "Stage 3: Digital DSC File Signing", completed: false, pct: 20 },
            { stage: "Stage 4: Dispatch Reconciliation", completed: false, pct: 0 },
            { stage: "Stage 5: SPARROW Verified", completed: false, pct: 0 },
          ],
          gapDeficit: {
            domain: "Digital Public Infra (e-Office, CAPI)",
            code: "FRAC-DPI-01",
            currentLevel: 1,
            requiredLevel: 3,
            gapScore: -2.0,
            severity: "Critical",
            description: "High deficit in electronic file movement and digital dispatch reconciliation.",
          },
        },
        {
          id: "CRS-TAB-101",
          shortCode: "TAB-101",
          title: "Spreadsheet Essentials for Official Reporting & Data Entry",
          provider: "NSSTA / iGOT Bharat",
          totalHours: 3.5,
          loggedHours: 0.5,
          progress: 15,
          status: "in_progress",
          stageBlocks: [
            { stage: "Stage 1: Bio-Data Sync", completed: true, pct: 100 },
            { stage: "Stage 2: Shift Record Formulas", completed: false, pct: 25 },
            { stage: "Stage 3: Cross-Division Validation", completed: false, pct: 0 },
            { stage: "Stage 4: Discrepancy Audits", completed: false, pct: 0 },
            { stage: "Stage 5: SPARROW Verified", completed: false, pct: 0 },
          ],
          gapDeficit: {
            domain: "Official Tabulation & Field Analytics",
            code: "FRAC-TAB-01",
            currentLevel: 1,
            requiredLevel: 3,
            gapScore: -2.0,
            severity: "Critical",
            description: "Gaps in structured electronic spreadsheet formulas and error validation.",
          },
        },
        {
          id: "CRS-COM-101",
          shortCode: "COM-101",
          title: "Citizen-Centric Public Grievance Resolution & Active Listening",
          provider: "DARPG / CPGRAMS",
          totalHours: 3.0,
          loggedHours: 2.4,
          progress: 80,
          status: "near_complete",
          stageBlocks: [
            { stage: "Stage 1: Bio-Data Sync", completed: true, pct: 100 },
            { stage: "Stage 2: Active Grievance Intake", completed: true, pct: 100 },
            { stage: "Stage 3: De-escalation Protocol", completed: true, pct: 85 },
            { stage: "Stage 4: CPGRAMS Escalation", completed: true, pct: 75 },
            { stage: "Stage 5: SPARROW Verified", completed: false, pct: 40 },
          ],
          gapDeficit: {
            domain: "Citizen Grievance Resolution (CPGRAMS)",
            code: "FRAC-GRV-01",
            currentLevel: 2,
            requiredLevel: 3,
            gapScore: -1.0,
            severity: "Moderate",
            description: "Minor gap in complex de-escalation for non-standard passenger tariff inquiries.",
          },
        },
        {
          id: "CRS-PUB-101",
          shortCode: "PUB-101",
          title: "Public Service Code of Conduct & Passenger Assistance",
          provider: "ISTM / DoPT",
          totalHours: 2.0,
          loggedHours: 2.0,
          progress: 100,
          status: "certified",
          stageBlocks: [
            { stage: "Stage 1: Bio-Data Sync", completed: true, pct: 100 },
            { stage: "Stage 2: Code of Conduct", completed: true, pct: 100 },
            { stage: "Stage 3: Divyangjan Assistance", completed: true, pct: 100 },
            { stage: "Stage 4: Vigilance Protocols", completed: true, pct: 100 },
            { stage: "Stage 5: SPARROW Verified", completed: true, pct: 100 },
          ],
          gapDeficit: {
            domain: "Frontline Citizen Service Delivery",
            code: "FRAC-PUB-01",
            currentLevel: 3,
            requiredLevel: 3,
            gapScore: 0.0,
            severity: "Mastered",
            description: "Mastered operational passenger assistance and Divyangjan transit guidelines.",
          },
        },
      ];

  // Filtering
  const filteredCourses = courseProgressionData.filter((item) => {
    if (selectedFilter === "critical") return item.gapDeficit.severity === "Critical";
    if (selectedFilter === "in_progress") return item.status === "in_progress";
    if (selectedFilter === "mastered") return item.gapDeficit.severity === "Mastered" || item.progress === 100;
    return true;
  });

  // Aggregate Metrics
  const criticalCount = courseProgressionData.filter((c) => c.gapDeficit.severity === "Critical").length;
  const moderateCount = courseProgressionData.filter((c) => c.gapDeficit.severity === "Moderate").length;
  const masteredCount = courseProgressionData.filter((c) => c.gapDeficit.severity === "Mastered" || c.progress === 100).length;
  const avgProgress = Math.round(
    courseProgressionData.reduce((acc, c) => acc + c.progress, 0) / courseProgressionData.length
  );
  const totalLoggedHours = courseProgressionData.reduce((acc, c) => acc + c.loggedHours, 0).toFixed(1);
  const totalTargetHours = courseProgressionData.reduce((acc, c) => acc + c.totalHours, 0).toFixed(1);

  // Graph Data
  const chartData = courseProgressionData.map((c) => ({
    name: c.shortCode,
    fullTitle: c.title,
    progress: c.progress,
    loggedHours: c.loggedHours,
    totalHours: c.totalHours,
    currentLevel: c.gapDeficit.currentLevel,
    requiredLevel: c.gapDeficit.requiredLevel,
    severity: c.gapDeficit.severity,
    gapScore: c.gapDeficit.gapScore,
    code: c.gapDeficit.code,
  }));

  // Custom Chart Tooltip
  const CustomGraphTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900/95 text-white p-3.5 rounded-2xl shadow-2xl border border-sky-500/40 text-left text-xs max-w-xs z-50">
          <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-700">
            <span className="font-extrabold text-sky-300">{data.name}</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              data.severity === "Critical"
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                : data.severity === "Moderate"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
            }`}>
              {data.severity} (Gap {data.gapScore})
            </span>
          </div>
          <p className="font-bold text-slate-200 mt-1.5 text-2xs leading-snug">{data.fullTitle}</p>
          <div className="mt-2 pt-1.5 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px] font-mono">
            <div>
              <span className="text-slate-400 block">Progress:</span>
              <strong className="text-sky-400 text-sm">{data.progress}%</strong>
            </div>
            <div>
              <span className="text-slate-400 block">Training Hours:</span>
              <strong className="text-white">{data.loggedHours} / {data.totalHours} hrs</strong>
            </div>
            <div>
              <span className="text-slate-400 block">Current Level:</span>
              <strong className="text-teal-400">Level {data.currentLevel}</strong>
            </div>
            <div>
              <span className="text-slate-400 block">Target Level:</span>
              <strong className="text-indigo-400">Level {data.requiredLevel}</strong>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  // Helper for gap severity badge
  const getGapBadge = (severity, score) => {
    if (severity === "Critical") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-2xs font-extrabold bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
          <AlertTriangle size={11} />
          Critical Deficit (Gap {score})
        </span>
      );
    }
    if (severity === "Moderate") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-2xs font-extrabold bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
          <Info size={11} />
          Moderate Gap (Gap {score})
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-2xs font-extrabold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
        <CheckCircle2 size={11} />
        Mastered (Target Met)
      </span>
    );
  };

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 text-left relative overflow-hidden">
      {/* Decorative Sky Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* HEADER ROW: Title + Officer Identification */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="p-2 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20">
              <BarChart3 size={20} />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
              Course Progress & Competency Deficit Analytics
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800 text-2xs font-black">
              FRAC Statutory Matrix
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-2xl">
            Live progression tracking across statutory courses, verified training hours logged, and targeted FRAC competency gap scores for <strong>{officer?.name || "Statistical Officer"}</strong> ({officer?.officialDesignation || officer?.role || "Cadre Member"}).
          </p>
        </div>

        {/* Current Officer Profile Badge (Read-Only) */}
        <div className="flex items-center gap-3 p-2 px-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 self-start lg:self-auto">
          <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            {(officer?.name || "SO").split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <div className="text-left text-xs">
            <span className="font-bold text-slate-900 dark:text-white block">{officer?.name || "Official Officer"}</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-mono">
              {officer?.department || "Cadre Operations"} • {avgProgress}% Overall Readiness
            </span>
          </div>
        </div>
      </div>

      {/* 4 EXECUTIVE KPI METRIC TILES */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 relative z-10">
        <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
          <div className="flex items-center justify-between text-2xs font-extrabold text-slate-500 dark:text-slate-400 uppercase">
            <span>Courses Tracked</span>
            <BookOpen size={14} className="text-sky-500" />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
            {courseProgressionData.length} Modules
          </div>
          <p className="text-[11px] text-slate-500">Statutory Curriculum</p>
        </div>

        <div className="p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-800/50 space-y-1">
          <div className="flex items-center justify-between text-2xs font-extrabold text-sky-700 dark:text-sky-300 uppercase">
            <span>Average Progress</span>
            <TrendingUp size={14} className="text-sky-600" />
          </div>
          <div className="text-2xl font-black text-sky-700 dark:text-sky-300 font-mono">
            {avgProgress}%
          </div>
          <p className="text-[11px] text-sky-600/80 font-medium">Verified Completion</p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 space-y-1">
          <div className="flex items-center justify-between text-2xs font-extrabold text-emerald-700 dark:text-emerald-300 uppercase">
            <span>Mastered Units</span>
            <Award size={14} className="text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
            {masteredCount} of {courseProgressionData.length}
          </div>
          <p className="text-[11px] text-emerald-600/80 font-medium">FRAC Certified</p>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-800/50 space-y-1">
          <div className="flex items-center justify-between text-2xs font-extrabold text-rose-700 dark:text-rose-300 uppercase">
            <span>Critical Deficits</span>
            <AlertTriangle size={14} className="text-rose-600" />
          </div>
          <div className="text-2xl font-black text-rose-600 dark:text-rose-400 font-mono">
            {criticalCount} Modules
          </div>
          <p className="text-[11px] text-rose-600/80 font-medium">Priority Fast-Track</p>
        </div>
      </div>

      {/* 🌟 INTERACTIVE PROGRESS & FRAC DEFICIT GRAPH */}
      <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-3">
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 size={16} className="text-sky-600" />
              Course Completion Rate (%) & Target Benchmarks
            </h4>
            <p className="text-2xs text-slate-500">
              Interactive bar comparison: Completion percentage vs 85% Statutory Benchmark
            </p>
          </div>
          <div className="flex items-center gap-3 text-2xs font-bold">
            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
              <span className="w-2.5 h-2.5 rounded bg-sky-500" /> Course Progress
            </span>
            <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
              <span className="w-2.5 h-2.5 rounded bg-indigo-500" /> Benchmark (85%)
            </span>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fontWeight: 700 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} unit="%" />
              <Tooltip content={<CustomGraphTooltip />} />
              <ReferenceLine
                y={85}
                stroke="#6366F1"
                strokeDasharray="4 4"
                strokeWidth={1.5}
                label={{ value: "Target (85%)", fill: "#818CF8", fontSize: 9, position: "insideTopRight" }}
              />
              <Bar dataKey="progress" radius={[6, 6, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.progress === 100
                        ? "#10B981"
                        : entry.progress >= 70
                        ? "#0284C7"
                        : entry.progress >= 40
                        ? "#F59E0B"
                        : "#EF4444"
                    }
                  />
                ))}
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-between text-2xs text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60 pt-2 font-mono">
          <span>Logged: <strong>{totalLoggedHours}h</strong> / Total Curriculum: <strong>{totalTargetHours}h</strong></span>
          <span className="text-sky-600 dark:text-sky-400 font-bold">Annual SPARROW Accredited</span>
        </div>
      </div>

      {/* FILTER BUTTONS ROW */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          <Filter size={15} className="text-slate-400" />
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Filter Modules:</span>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { key: "all", label: "All Courses", count: courseProgressionData.length },
            { key: "critical", label: "Critical Deficits", count: criticalCount },
            { key: "in_progress", label: "In Progress", count: courseProgressionData.filter((c) => c.status === "in_progress").length },
            { key: "mastered", label: "Mastered", count: masteredCount },
          ].map((flt) => (
            <button
              key={flt.key}
              onClick={() => setSelectedFilter(flt.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === flt.key
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
              }`}
            >
              {flt.label} ({flt.count})
            </button>
          ))}
        </div>
      </div>

      {/* DETAILED COURSE PROGRESS CARDS */}
      <div className="space-y-4">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-400/60 dark:hover:border-sky-500/40 transition-all space-y-4 text-left"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded-md font-mono text-[10px] font-black bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {course.id}
                  </span>
                  <span className="text-2xs text-slate-400 font-medium">Provider: {course.provider}</span>
                  {getGapBadge(course.gapDeficit.severity, course.gapDeficit.gapScore)}
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  {course.title}
                </h4>
                <p className="text-2xs text-slate-500 dark:text-slate-400">
                  {course.gapDeficit.description}
                </p>
              </div>

              <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-1 shrink-0">
                <span className="text-xl font-black text-sky-600 dark:text-sky-400 font-mono">
                  {course.progress}%
                </span>
                <span className="text-2xs font-mono text-slate-400">
                  {course.loggedHours} / {course.totalHours} hrs logged
                </span>
              </div>
            </div>

            {/* Course Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    course.progress === 100
                      ? "bg-emerald-500"
                      : course.progress >= 70
                      ? "bg-sky-500"
                      : course.progress >= 40
                      ? "bg-amber-500"
                      : "bg-rose-500"
                  }`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>

              {/* Stage Checklist Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 pt-1">
                {course.stageBlocks.map((stg, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-2 rounded-xl text-left border ${
                      stg.completed
                        ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300"
                        : stg.pct > 0
                        ? "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300"
                        : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-400"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold">
                      <span className="truncate">{stg.stage.split(":")[0]}</span>
                      <span>{stg.pct}%</span>
                    </div>
                    <span className="text-[9px] truncate block opacity-90 font-medium">
                      {stg.stage.split(":")[1] || stg.stage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-2xs font-mono text-slate-500">
                <span>Domain: <strong>{course.gapDeficit.domain}</strong></span>
                <span>• Code: <strong>{course.gapDeficit.code}</strong></span>
              </div>

              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab("learning-hub")}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 dark:text-sky-400 flex items-center gap-1 cursor-pointer"
                >
                  <span>Go to Learning Hub</span>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
