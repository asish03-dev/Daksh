import React, { useState, useEffect } from "react";
import {
  X, Check, AlertCircle, Youtube, FileText, Link,
  Trash2, ExternalLink, Sparkles, CheckCircle2, Play,
  Settings, RefreshCw, Eye
} from "lucide-react";
import {
  ManualCoursesRepository,
  extractYouTubeId,
  isValidUrl
} from "../../data/coursesManualRepository";

export default function ManualResourceLinkManager({
  courseId: initialCourseId,
  moduleId: initialModuleId,
  onClose,
  onLinksUpdated,
  showToast
}) {
  const [courses, setCourses] = useState(ManualCoursesRepository.getCourses());
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourseId || courses[0]?.id);
  const [selectedModuleId, setSelectedModuleId] = useState(initialModuleId || 1);

  // Form State
  const [videoUrlInput, setVideoUrlInput] = useState("");
  const [docUrlInput, setDocUrlInput] = useState("");

  const selectedCourse = courses.find((c) => c.id === selectedCourseId) || courses[0];
  const selectedModule = selectedCourse?.modules?.find((m) => m.id === Number(selectedModuleId)) || selectedCourse?.modules?.[0];

  // Sync inputs when Course or Module dropdown changes
  useEffect(() => {
    if (selectedModule) {
      setVideoUrlInput(selectedModule.video?.url || "");
      setDocUrlInput(selectedModule.document?.url || "");
    }
  }, [selectedCourseId, selectedModuleId]);

  const youtubeId = extractYouTubeId(videoUrlInput);
  const isDocValid = isValidUrl(docUrlInput);

  const handleSave = () => {
    let changed = false;
    if (selectedCourse && selectedModule) {
      ManualCoursesRepository.updateResourceLink(selectedCourse.id, selectedModule.id, "video", videoUrlInput);
      ManualCoursesRepository.updateResourceLink(selectedCourse.id, selectedModule.id, "document", docUrlInput);
      changed = true;
    }

    if (changed) {
      // Reload courses
      setCourses(ManualCoursesRepository.getCourses());
      window.dispatchEvent(new Event("daksh_course_links_updated"));
      onLinksUpdated?.();
      showToast("Resource URLs saved & updated successfully!", "success");
      onClose();
    }
  };

  const handleClearVideo = () => {
    setVideoUrlInput("");
  };

  const handleClearDoc = () => {
    setDocUrlInput("");
  };

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-md z-[60] flex items-center justify-center p-3 sm:p-5 animate-fadeIn select-none"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#0B1120] text-slate-100 rounded-3xl max-w-2xl w-full flex flex-col border border-slate-700/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden text-left relative">
        {/* Header */}
        <header className="px-5 py-4 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border-b border-slate-800 flex items-center justify-between shrink-0 relative">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center font-black">
              <Settings size={18} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                Attach Official Course Links
              </h3>
              <p className="text-2xs text-slate-400">
                Paste real YouTube videos and official PDF/Doc URLs for exact curriculum slots.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors border border-slate-700"
          >
            <X size={16} />
          </button>
        </header>

        {/* Form Body */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Step 1 & 2: Select Course & Module */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-[#070A13] border border-slate-800">
            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                1. Select Course
              </label>
              <select
                value={selectedCourseId}
                onChange={(e) => {
                  setSelectedCourseId(e.target.value);
                  setSelectedModuleId(1);
                }}
                className="w-full bg-[#0F172A] border border-slate-700 text-white text-xs rounded-xl p-2.5 outline-none focus:border-teal-400 cursor-pointer font-medium"
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.code} • {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                2. Select Module / Topic
              </label>
              <select
                value={selectedModuleId}
                onChange={(e) => setSelectedModuleId(Number(e.target.value))}
                className="w-full bg-[#0F172A] border border-slate-700 text-white text-xs rounded-xl p-2.5 outline-none focus:border-teal-400 cursor-pointer font-medium"
              >
                {selectedCourse?.modules?.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* SLOT 1: YOUTUBE VIDEO LINK SLOT */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-white flex items-center gap-1.5 uppercase tracking-wide">
                <Youtube size={15} className="text-red-400" />
                Video Resource Slot
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Source: YouTube</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#070A13] border border-slate-800/80 text-xs">
              <span className="text-[10px] text-slate-400 block font-medium">Designated Lecture Title:</span>
              <strong className="text-slate-100 font-bold leading-snug">
                {selectedModule?.video?.title || "Course Video Lecture"}
              </strong>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-2xs font-bold text-slate-300">
                  Paste YouTube URL
                </label>
                {videoUrlInput && (
                  <button
                    onClick={handleClearVideo}
                    className="text-[10px] text-red-400 hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <Trash2 size={11} /> Clear Link
                  </button>
                )}
              </div>
              <input
                type="text"
                value={videoUrlInput}
                onChange={(e) => setVideoUrlInput(e.target.value)}
                placeholder="e.g. https://www.youtube.com/watch?v=rfscVS0vtbw or https://youtu.be/..."
                className="w-full bg-[#070A13] border border-slate-700 text-white text-xs rounded-xl p-3 outline-none focus:border-teal-400 font-mono"
              />
            </div>

            {/* Validation Feedback */}
            {videoUrlInput ? (
              youtubeId ? (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-2xs text-emerald-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    Valid YouTube Link (ID: {youtubeId})
                  </span>
                  <a
                    href={`https://www.youtube.com/watch?v=${youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-emerald-400 font-bold flex items-center gap-1"
                  >
                    <Eye size={11} /> Test Link
                  </a>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-2xs text-amber-300 flex items-center gap-1.5 font-bold">
                  <AlertCircle size={13} className="text-amber-400 shrink-0" />
                  Could not parse YouTube ID. Please enter a standard YouTube link.
                </div>
              )
            ) : (
              <span className="text-[10px] text-slate-500 block">
                Link is currently EMPTY. The card will show a polite "Video Coming Soon" placeholder until you paste a URL.
              </span>
            )}
          </div>

          {/* SLOT 2: STUDY MATERIAL LINK SLOT */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-white flex items-center gap-1.5 uppercase tracking-wide">
                <FileText size={15} className="text-teal-400" />
                Official Study Material Slot
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Source: Official Document</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#070A13] border border-slate-800/80 text-xs">
              <span className="text-[10px] text-slate-400 block font-medium">Designated Document Title:</span>
              <strong className="text-slate-100 font-bold leading-snug">
                {selectedModule?.document?.title || "Official Technical Document"}
              </strong>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-2xs font-bold text-slate-300">
                  Paste Document URL / PDF Link (HTTPS)
                </label>
                {docUrlInput && (
                  <button
                    onClick={handleClearDoc}
                    className="text-[10px] text-red-400 hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <Trash2 size={11} /> Clear Link
                  </button>
                )}
              </div>
              <input
                type="text"
                value={docUrlInput}
                onChange={(e) => setDocUrlInput(e.target.value)}
                placeholder="e.g. https://mospi.gov.in/manual.pdf or https://pandas.pydata.org/docs/"
                className="w-full bg-[#070A13] border border-slate-700 text-white text-xs rounded-xl p-3 outline-none focus:border-teal-400 font-mono"
              />
            </div>

            {/* Document Validation Feedback */}
            {docUrlInput ? (
              isDocValid ? (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-2xs text-emerald-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    Valid Web / Document URL
                  </span>
                  <a
                    href={docUrlInput}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-emerald-400 font-bold flex items-center gap-1"
                  >
                    <Eye size={11} /> Test Link
                  </a>
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-2xs text-amber-300 flex items-center gap-1.5 font-bold">
                  <AlertCircle size={13} className="text-amber-400 shrink-0" />
                  Please enter a valid URL starting with http:// or https://
                </div>
              )
            ) : (
              <span className="text-[10px] text-slate-500 block">
                Link is currently EMPTY. The card will show "Material Being Prepared" until a URL is provided.
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="p-4 sm:p-5 bg-[#0D1424] border-t border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="btn-primary text-xs py-2.5 px-6 rounded-xl font-bold flex items-center gap-1.5 shadow-lg cursor-pointer"
          >
            <Check size={14} />
            <span>Save & Apply Links</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
