import React, { useState, useEffect } from "react";
import {
  X, Video, FileText, Terminal, Lightbulb, Download,
  CheckCircle2, Sparkles, BookOpen, ShieldCheck, ChevronRight,
  ExternalLink, Award, Clock
} from "lucide-react";
import { ManualCoursesRepository } from "../../data/coursesManualRepository";
import VideoLectureStage from "./VideoLectureStage";
import OfficialDocumentReader from "./OfficialDocumentReader";
import PythonCodeSandbox from "./PythonCodeSandbox";
import UnitSyllabusNavigator from "./UnitSyllabusNavigator";

export default function CourseLearningWorkspace({
  course: initialCourse,
  onClose,
  onProgressUpdate,
  showToast,
  lang = "en"
}) {
  const [courseData, setCourseData] = useState(() =>
    ManualCoursesRepository.getCourseById(initialCourse?.id) || initialCourse
  );
  const isPythonCourse = courseData?.id === "CRS-PY-201" || courseData?.id === "CRS-AI-501";
  
  // Workspace State
  const [activeTab, setActiveTab] = useState(isPythonCourse ? "code" : "video"); // 'video' | 'pdf' | 'code' | 'notes'
  const [currentLessonId, setCurrentLessonId] = useState(1);
  const [unitProgress, setUnitProgress] = useState(initialCourse?.progress || 45);

  // Active Module
  const activeModule = courseData?.modules?.find((m) => m.id === currentLessonId) || courseData?.modules?.[0];

  const refreshCourseData = () => {
    const updated = ManualCoursesRepository.getCourseById(courseData?.id);
    if (updated) {
      setCourseData(updated);
    }
  };

  // Real-time synchronization whenever links are updated from Admin Portal
  useEffect(() => {
    const handleUpdate = () => {
      refreshCourseData();
    };
    window.addEventListener("daksh_course_links_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("daksh_course_links_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, [courseData?.id]);

  const handleMarkComplete = () => {
    const nextProg = Math.min(100, unitProgress + 20);
    setUnitProgress(nextProg);
    onProgressUpdate?.(courseData?.id, nextProg);
    showToast(`Unit marked complete! Total course progress: ${nextProg}%.`, "success");
  };

  return (
    <div
      className="fixed inset-0 bg-[#050811]/90 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn select-none"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#0B1120] text-slate-100 rounded-3xl max-w-6xl w-full h-[94vh] flex flex-col border border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden text-left relative">
        {/* TOP SOVEREIGN HEADER BAR */}
        <header className="px-5 py-3.5 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border-b border-slate-800 flex items-center justify-between shrink-0 relative">
          {/* Sovereign Tri-color Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
          
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-white/10 p-1.5 border border-white/20 flex items-center justify-center shrink-0 shadow-md">
              <img
                src="/images/emblem_of_india.svg"
                alt="Government of India Emblem"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  {courseData?.provider || "MoSPI / iGOT Bharat"}
                </span>
                <span className="text-[10px] font-mono text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                  {courseData?.code || courseData?.id}
                </span>
                <span className="text-[10px] text-slate-300 font-medium">
                  +{courseData?.acbpCredits || 4} ACBP Credits
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-extrabold text-white truncate max-w-xl mt-0.5 tracking-tight">
                {courseData?.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Progress Badge */}
            <div className="hidden sm:flex items-center gap-2.5 bg-slate-900/90 px-3.5 py-1.5 rounded-2xl border border-slate-700/80 text-xs">
              <span className="text-slate-400 font-medium">Curriculum:</span>
              <span className="font-mono font-black text-emerald-400">{unitProgress}%</span>
              <div className="w-16 bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-400 h-full rounded-full transition-all duration-300" style={{ width: `${unitProgress}%` }} />
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors border border-slate-700"
              title="Close Learning Workspace"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {/* MAIN BODY: 2 COLUMNS */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* LEFT 65%: MEDIA / CODE / DOCUMENT VIEWER */}
          <div className="flex-1 flex flex-col bg-[#070A13] text-white overflow-hidden">
            {/* Sub-Tab Navigation Strip */}
            <div className="px-4 py-2.5 bg-[#0D1424] border-b border-slate-800 flex items-center justify-between text-xs flex-wrap gap-2">
              <div className="flex items-center gap-1.5 bg-[#080D18] p-1 rounded-xl border border-slate-800">
                {isPythonCourse && (
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      activeTab === "code"
                        ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md font-black"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Terminal size={14} className="text-emerald-300" />
                    <span>Python Code Sandbox</span>
                  </button>
                )}

                <button
                  onClick={() => setActiveTab("video")}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === "video"
                      ? "bg-gradient-to-r from-primary to-teal-600 text-white shadow-md font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Video size={14} />
                  <span>Video Lecture</span>
                </button>

                <button
                  onClick={() => setActiveTab("pdf")}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === "pdf"
                      ? "bg-gradient-to-r from-primary to-teal-600 text-white shadow-md font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <FileText size={14} />
                  <span>Official Manual & PDF</span>
                </button>

                <button
                  onClick={() => setActiveTab("notes")}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeTab === "notes"
                      ? "bg-gradient-to-r from-primary to-teal-600 text-white shadow-md font-black"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Lightbulb size={14} />
                  <span>Formulas & Proofs</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-2xs text-slate-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Civil Services ACBP Synchronized</span>
              </div>
            </div>

            {/* TAB CONTENT VIEWS */}
            {activeTab === "code" && (
              <PythonCodeSandbox bundle={courseData} showToast={showToast} />
            )}

            {activeTab === "video" && (
              <VideoLectureStage
                course={courseData}
                activeModule={activeModule}
                showToast={showToast}
              />
            )}

            {activeTab === "pdf" && (
              <OfficialDocumentReader
                course={courseData}
                activeModule={activeModule}
                showToast={showToast}
              />
            )}

            {activeTab === "notes" && (
              <div className="flex-1 p-5 bg-[#070A13] overflow-y-auto space-y-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-1.5">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                    <Lightbulb size={14} className="text-amber-400" />
                    Key Mathematical Formulations & Theorems
                  </h4>
                  <p className="text-2xs text-slate-400">
                    Tested during FRAC competency evaluations and Annual Capacity Building Plan (ACBP) audits.
                  </p>
                </div>

                <div className="space-y-3">
                  {courseData?.keyTheorems?.map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-1.5 shadow-sm">
                      <div className="flex items-center justify-between text-2xs">
                        <span className="font-bold text-slate-200">{item.theorem}</span>
                        <span className="text-slate-500 font-sans">{item.note}</span>
                      </div>
                      <div className="font-mono text-teal-300 text-xs bg-[#080D18] p-2.5 rounded-xl border border-slate-800">
                        {item.formula}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT 35%: SYLLABUS & LESSON NAVIGATION */}
          <UnitSyllabusNavigator
            bundle={{
              units: courseData?.modules || [],
              acbpCredits: courseData?.acbpCredits
            }}
            currentLessonId={currentLessonId}
            setCurrentLessonId={setCurrentLessonId}
            unitProgress={unitProgress}
            onMarkComplete={handleMarkComplete}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
