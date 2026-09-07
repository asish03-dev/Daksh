import React, { useState } from "react";
import {
  FileText, Download, ChevronLeft, ChevronRight, ZoomIn,
  ZoomOut, Search, Printer, Share2, Check, ShieldCheck,
  ExternalLink, Building2, BookOpen, Lock, AlertCircle
} from "lucide-react";
import { isValidUrl } from "../../data/coursesManualRepository";

export default function OfficialDocumentReader({
  course,
  activeModule,
  showToast
}) {
  const document = activeModule?.document;
  const hasValidDoc = Boolean(document?.url && isValidUrl(document?.url));

  const handleDownload = () => {
    const textData = `GOVERNMENT OF INDIA • STATUTORY CURRICULUM MANUAL
COURSE: ${course?.title || "Civil Services Competency"}
MODULE: ${activeModule?.title || "Module"}
DOCUMENT: ${document?.title || "Technical Manual"}
REFERENCE: ${document?.ref || "MoSPI/ACBP/2026"}
SOURCE: ${document?.source || course?.provider}

ATTACHED URL: ${document?.url || "Attached Official Manual"}

-------------------------------------------------------------------------
Official curriculum text and study materials are archived under the National Statistical Capacity Building Plan (ACBP).`;

    const blob = new Blob([textData], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${course?.code || "MoSPI"}-${document?.ref?.replace(/\//g, "-") || "Manual"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Official course handout downloaded successfully!", "success");
  };

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-5 bg-[#070A13] overflow-y-auto space-y-4 text-left">
      {/* Top Document Header Bar */}
      <div className="p-3.5 rounded-2xl bg-[#0F172A] border border-slate-800 flex items-center justify-between text-xs flex-wrap gap-2.5 shadow-md">
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 border border-teal-500/30">
            <FileText size={16} />
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-white truncate max-w-md">
              {document?.title || "Official Study Material"}
            </h4>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5 flex-wrap">
              <span className="px-1.5 py-0.2 rounded font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                {document?.type || "Official Manual"}
              </span>
              <span>•</span>
              <span>Source: {document?.source || course?.provider}</span>
              <span>•</span>
              <span>Ref: {document?.ref || "MoSPI-2026"}</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {hasValidDoc ? (
            <a
              href={document.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-2xs py-1.5 px-3.5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <ExternalLink size={12} />
              <span>Open Document Link</span>
            </a>
          ) : (
            <button
              disabled
              className="px-3.5 py-1.5 rounded-xl bg-slate-800/60 text-slate-400 text-2xs font-bold flex items-center gap-1.5 cursor-not-allowed border border-slate-700/60"
            >
              <Lock size={12} />
              <span>Document Pending</span>
            </button>
          )}
        </div>
      </div>

      {/* Styled Document Canvas / Empty State */}
      {hasValidDoc ? (
        <div className="p-6 sm:p-9 rounded-2xl bg-[#FAF8F5] text-slate-900 shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-slate-300 font-serif leading-relaxed max-w-3xl mx-auto space-y-4 select-text">
          <div className="border-b-2 border-slate-900 pb-3 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-sans font-black uppercase tracking-widest text-slate-600 block">
                GOVERNMENT OF INDIA • CIVIL SERVICES ACCREDITED MATERIAL
              </span>
              <strong className="text-sm font-sans font-extrabold text-slate-900 block">
                {document.source || course?.provider}
              </strong>
            </div>
            <div className="w-11 h-11 border border-slate-400 p-1 flex items-center justify-center shrink-0">
              <img src="/images/emblem_of_india.svg" alt="Emblem" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-sans text-emerald-900 flex items-center justify-between">
            <span className="font-bold flex items-center gap-1.5">
              <Check size={14} className="text-emerald-600" />
              Verified External Study Material Attached
            </span>
            <a
              href={document.url}
              target="_blank"
              rel="noreferrer"
              className="underline font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
            >
              <ExternalLink size={12} /> Open in New Tab
            </a>
          </div>

          <div className="text-xs whitespace-pre-line text-slate-800 font-mono leading-loose bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-inner">
            {`DOCUMENT TITLE: ${document.title}
PUBLISHER / SOURCE: ${document.source}
DOCUMENT TYPE: ${document.type}
REFERENCE CODE: ${document.ref}
ESTIMATED READING: ${document.readingTime || "30 Mins"}

OFFICIAL ATTACHED LINK:
${document.url}

Click "Open in New Tab" or the button above to access the full publication.`}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-300 text-[10px] font-sans text-slate-500">
            <span>Reference: {document.ref}</span>
            <button
              onClick={handleDownload}
              className="text-primary font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <Download size={12} /> Download Handout File
            </button>
          </div>
        </div>
      ) : (
        /* POLISHED EMPTY STATE: MATERIAL IN REVIEW */
        <div className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#070A13] border border-slate-800 text-center flex flex-col items-center justify-center space-y-3.5 max-w-2xl mx-auto my-4">
          <div className="w-16 h-16 rounded-3xl bg-slate-800/90 border border-slate-700/80 text-slate-400 flex items-center justify-center shadow-lg">
            <FileText size={28} className="text-slate-400" />
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 inline-block">
              Statutory Document in Review
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-white leading-snug">
              {document?.title || "Official Technical Publication"}
            </h4>
            <p className="text-2xs text-slate-400 max-w-md mx-auto leading-relaxed">
              The official technical manual and statutory gazette SOP for this unit is currently undergoing final review. It will be released by the Department Administrator shortly.
            </p>
          </div>

          <div className="pt-2">
            <button
              disabled
              className="px-5 py-2 rounded-xl bg-slate-800/80 text-slate-400 text-xs font-bold flex items-center gap-2 cursor-not-allowed border border-slate-700"
            >
              <Lock size={13} className="text-slate-400" />
              <span>Material Pending Release</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
