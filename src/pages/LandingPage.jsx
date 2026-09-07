import { Link } from "react-router-dom";
import {
  ArrowRight, BarChart3, BookOpen, BrainCircuit,
  TrendingUp, Users, ShieldCheck, ChevronRight, Sparkles,
  Award, Check, Layers, Compass, LineChart as LineChartIcon,
  Shield, CheckCircle2, FileCheck, HelpCircle, Flame, ArrowUpRight
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
import CountUp from "../components/animations/CountUp";
import { SplitText, ShinyText, BlurFadeText, FloatUp } from "../components/animations/AnimatedText";

export default function LandingPage() {
  const { t } = useTheme();
  const { openAuthModal } = useUser();

  return (
    <div className="min-h-screen flex flex-col bg-canvas dark:bg-canvas-dark text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Floating Island Navigation */}
      <Navbar />

      {/* HERO SECTION — Clean Slate Canvas with Refined Sovereign Teal & Indigo Accents */}
      <section className="relative pt-16 pb-20 sm:pb-28 overflow-hidden">
        {/* Soft Ambient Radial Highlights */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-teal-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Pill Announcement with Shiny Badge */}
            <FloatUp delay={50} className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs font-semibold text-slate-700 dark:text-slate-200 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span>{t("hero_badge") || "National Statistical Competency Platform"}</span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="text-primary font-bold flex items-center gap-0.5">
                  MoSPI Aligned <ArrowRight size={11} />
                </span>
              </div>
            </FloatUp>

            {/* Hero Main Heading with SplitText & Shiny Gradient */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 font-display text-slate-950 dark:text-white">
              <SplitText
                text="Calibrate, Upskill & Certify"
                className="justify-center"
                delay={0.1}
              />
              <span className="block mt-1">
                <ShinyText text="National Statistical Cadres" className="text-3xl sm:text-5xl md:text-6xl" />
              </span>
            </h1>

            {/* Subheading with BlurFadeText */}
            <BlurFadeText
              text={
                t("hero_desc") ||
                "An intelligent, source-grounded learning ecosystem mapping individual capabilities to standardized national competencies with verified assessments, interactive data labs, and AI guidance."
              }
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-9 max-w-2xl mx-auto"
              delay={0.3}
            />

            {/* Dual CTAs with float animation */}
            <FloatUp delay={350} className="flex flex-wrap gap-3.5 justify-center mb-8">
              <button
                onClick={() => openAuthModal("learner", false)}
                className="btn-primary text-sm py-3.5 px-8 shadow-md gap-2 font-bold hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <span>{t("hero_cta_member") || "Access Officer Portal"}</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => openAuthModal("admin", false)}
                className="btn bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-sm py-3.5 px-7 gap-2 font-semibold shadow-sm cursor-pointer"
              >
                <span>{t("hero_cta_admin") || "Admin Console"}</span>
                <ChevronRight size={16} />
              </button>
            </FloatUp>

            <FloatUp delay={450} className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400" />
                Zero Hallucination Quizzes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400" />
                Source-Cited Manuals
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-600 dark:text-emerald-400" />
                Department Heatmaps
              </span>
            </FloatUp>
          </div>
        </div>
      </section>

      {/* METRIC RIBBON WITH COUNT-UP ANIMATION */}
      <section className="bg-canvas dark:bg-canvas-dark border-y border-slate-200 dark:border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: 94, suffix: "%", label: "Competency Gap Closure", sub: "Average within 90 days" },
              { val: 15800, prefix: "", suffix: "+", label: "Certified Statistical Personnel", sub: "Across all active divisions" },
              { val: 3.4, suffix: "x", decimals: 1, label: "Upskilling Velocity", sub: "Compared to static legacy LMS" },
              { val: 100, suffix: "%", label: "Source Grounding Verification", sub: "Official manual chapter citations" },
            ].map((m, i) => (
              <FloatUp key={i} delay={i * 120} className="space-y-1.5 p-4 rounded-2xl bg-white dark:bg-canvas-card-dark border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
                  <CountUp
                    to={m.val}
                    prefix={m.prefix || ""}
                    suffix={m.suffix || ""}
                    decimals={m.decimals || 0}
                    duration={1.8}
                  />
                </p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{m.label}</p>
                <p className="text-[11px] text-slate-400">{m.sub}</p>
              </FloatUp>
            ))}
          </div>
        </div>
      </section>

      {/* THE 4-STEP CONNECTED WORKFLOW */}
      <section id="workflow" className="py-24 bg-white dark:bg-canvas-card-dark border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatUp className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Continuous Learning Loop</p>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight font-display mt-1.5">
              One Unified Ecosystem. Zero Fragmented Tools.
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
              Every action in DAKSH flows directly into the next phase — from baseline diagnostics to verifiable certification.
            </p>
          </FloatUp>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                icon: Compass,
                title: "Diagnostic Calibration",
                desc: "Establish baseline proficiency across 14 statistical core domains using standardized rubrics.",
                accent: "border-blue-200 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400",
              },
              {
                step: "02",
                icon: BrainCircuit,
                title: "Blind Spot Synthesis",
                desc: "Profile is mapped against divisional benchmarks to pinpoint exact capability shortfalls.",
                accent: "border-teal-200 bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400",
              },
              {
                step: "03",
                icon: BookOpen,
                title: "Targeted Micro-Tracks",
                desc: "Dynamic recommendations directly address identified gaps with Python sandbox labs.",
                accent: "border-indigo-200 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400",
              },
              {
                step: "04",
                icon: Award,
                title: "Grounded Certification",
                desc: "Rigorous Bloom's taxonomy evaluations citing manual page numbers. Passing unlocks instant progression.",
                accent: "border-emerald-200 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400",
              },
            ].map((step, idx) => (
              <FloatUp
                key={step.step}
                delay={idx * 140}
                className="card relative group hover:-translate-y-1.5 transition-all duration-200 bg-canvas dark:bg-slate-900 border-slate-200 dark:border-slate-800"
              >
                <span className="text-xs font-mono font-bold text-slate-300 dark:text-slate-600 absolute top-4 right-4">
                  {step.step}
                </span>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border ${step.accent}`}>
                  <step.icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </FloatUp>
            ))}
          </div>
        </div>
      </section>



      {/* BENTO GRID FEATURE SHOWCASE */}
      <section id="features" className="py-24 bg-white dark:bg-canvas-card-dark border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatUp className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Official Capabilities</p>
            <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white font-display mt-1">
              Engineered for National Statistical Standards
            </h2>
          </FloatUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Large Document-Grounded Engine */}
            <FloatUp delay={50} className="card md:col-span-2 p-8 flex flex-col justify-between bg-canvas dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                  <BrainCircuit size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">
                  Document-Grounded Assessment Engine
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mb-6">
                  Official statistical manuals, survey schedules, and technical handbooks are ingested to generate high-rigor Bloom's taxonomy evaluations. Every single question cites its primary chapter and page number.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800/80 border border-teal-200 dark:border-teal-800/50 rounded-xl flex items-center gap-3 text-xs text-teal-800 dark:text-teal-300 shadow-sm">
                <ShieldCheck size={20} className="text-primary shrink-0" />
                <span>Zero Hallucination Standard: Every question, option, and answer is corroborated with primary text.</span>
              </div>
            </FloatUp>

            {/* Bento Card 2: Dynamic Competency Diagnostics */}
            <FloatUp delay={150} className="card p-6 flex flex-col justify-between bg-canvas dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Compass size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 font-display">
                  Role Competency Diagnostics
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Automated capability calibration across 14 specialized domains with granular 5-level proficiency tiers.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>14 Core Capabilities</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Standardized Rubrics</span>
              </div>
            </FloatUp>

            {/* Bento Card 3: SETU */}
            <FloatUp delay={250} className="card p-6 flex flex-col justify-between bg-canvas dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-sm">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 font-display">
                  SETU — Statistical Knowledge Bridge
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  An adaptive tutor grounded in verified MoSPI guidelines, helping officers master sampling, CPI, and NAS concepts step-by-step.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-primary font-semibold flex items-center gap-1">
                <span>Interactive Intelligence Ready</span>
                <ArrowRight size={13} />
              </div>
            </FloatUp>

            {/* Bento Card 4: Division Heatmaps */}
            <FloatUp delay={350} className="card md:col-span-2 p-8 flex flex-col justify-between bg-canvas dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">
                  Division-Wide Competency Heatmaps
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                  Executive console provides comprehensive oversight of departmental readiness, alerting leadership to critical project skill gaps prior to large-scale field surveys.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <span className="px-3.5 py-1.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">Real-Time Heatmap</span>
                <span className="px-3.5 py-1.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">Predictive Capacity Alerts</span>
                <span className="px-3.5 py-1.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">Cadre Directory</span>
              </div>
            </FloatUp>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-[#0B0F17] text-white relative overflow-hidden border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FloatUp>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-display">
              Ready to calibrate your statistical capability?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto mb-9 leading-relaxed">
              Join thousands of statistical officers mastering core methodologies, survey design, and analytics with grounded AI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => openAuthModal("learner", true)}
                className="btn-primary text-sm py-3.5 px-8 font-bold gap-2 shadow-md cursor-pointer"
              >
                <span>Create Officer Account</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => openAuthModal("admin", false)}
                className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 text-sm py-3.5 px-8 font-bold cursor-pointer"
              >
                Admin Console Access
              </button>
            </div>
          </FloatUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
