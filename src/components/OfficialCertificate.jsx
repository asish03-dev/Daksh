import React, { useRef, useState } from "react";
import {
  Award, Download, Printer, Copy, Check, X, ShieldCheck,
  Maximize2, Minimize2, Sparkles, CheckCircle2
} from "lucide-react";
import { BRAND_CONFIG } from "../config/branding";

// Official Government of India Circular Verification Seal (Vector)
function OfficialGovtSeal({ code, className = "w-16 h-16 sm:w-18 sm:h-18" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full text-[#0B192C] drop-shadow-sm">
        {/* Outer Circular Teeth / Beaded Ring */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#1E293B" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="90" fill="#FAF9F6" stroke="#1E293B" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="68" fill="none" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="100" cy="100" r="64" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.5" />

        {/* Circular Curved Text Top (GOVERNMENT OF INDIA • भारत सरकार) */}
        <path id="seal-text-path-top" d="M 30,100 A 70,70 0 0,1 170,100" fill="none" />
        <text fontSize="9" fontWeight="900" fontFamily="serif" fill="#0B192C" letterSpacing="1.8">
          <textPath href="#seal-text-path-top" startOffset="50%" textAnchor="middle">
            ★ GOVERNMENT OF INDIA ★
          </textPath>
        </text>

        {/* Circular Curved Text Bottom (OFFICIAL ACCREDITATION SEAL) */}
        <path id="seal-text-path-bottom" d="M 170,100 A 70,70 0 0,1 30,100" fill="none" />
        <text fontSize="8" fontWeight="800" fontFamily="sans-serif" fill="#334155" letterSpacing="1.5">
          <textPath href="#seal-text-path-bottom" startOffset="50%" textAnchor="middle">
            • MoSPI & CBC VERIFIED •
          </textPath>
        </text>

        {/* Center Emblem / Ashoka Chakra */}
        <g transform="translate(100, 98) scale(0.58)">
          <image
            href="/images/emblem_of_india.svg"
            x="-35"
            y="-40"
            width="70"
            height="80"
          />
        </g>
      </svg>
    </div>
  );
}

export default function OfficialCertificate({
  certificate,
  user,
  onClose,
  showToast
}) {
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const certRef = useRef(null);

  if (!certificate) return null;

  const certId = certificate.id || "CERT-2026-90812";
  const verificationCode = certificate.verificationCode || `STA-VAL-${certId.replace(/[^0-9]/g, "") || "90812"}`;
  const verifyUrl = `https://statsaarthi.gov.in/verify/${verificationCode}`;
  
  // Dynamic MoSPI authenticated officer details
  const officerName = user?.name || "Statistical Officer";
  const officerDesignation = user?.officialDesignation || user?.designation || "Statistical Officer";
  const officerDept = user?.department || user?.cadre || "Field Operations Division";
  const officerId = user?.employeeId || user?.id || "EMP-2026-0342";
  
  const issueDate = certificate.issuedDate || new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  const score = certificate.score || 92;
  const competencyTitle = certificate.competency || certificate.title || "Survey Design & Sampling Estimation";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(verifyUrl);
    setCopied(true);
    showToast?.("Verification link copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto print:p-0 print:bg-white print:static"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className={`relative w-full transition-all duration-300 flex flex-col items-center print:w-full print:max-w-none ${
          isFullscreen ? "max-w-7xl" : "max-w-4xl"
        }`}
      >
        {/* CLEAN TOOLBAR (Hidden when printing) */}
        <div className="w-full flex items-center justify-between bg-white dark:bg-slate-900 text-slate-800 dark:text-white px-4 sm:px-6 py-2.5 rounded-t-2xl border border-slate-200 dark:border-slate-800 border-b-0 print:hidden shadow-sm">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-700 dark:text-blue-400 shrink-0">
              <Award size={16} />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-bold truncate text-slate-900 dark:text-white">
                MoSPI Verified Digital Credential
              </h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono truncate">
                ID: {verificationCode} • Government of India Accreditation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleCopyLink}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all border border-slate-200 dark:border-slate-700 cursor-pointer"
              title="Copy public verification link"
            >
              {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
              <span className="hidden sm:inline">{copied ? "Copied" : "Copy Link"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 sm:px-4 py-1.5 rounded-xl bg-[#0B192C] hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer size={13} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hidden md:flex items-center justify-center cursor-pointer"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center cursor-pointer ml-1"
              title="Close viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPACT OFFICIAL CERTIFICATE (NO BLACK BORDER, NO EXCESS PADDING)         */}
        {/* ========================================================================= */}
        <div
          ref={certRef}
          className="w-full bg-[#FCFBF7] text-slate-900 px-5 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 rounded-b-2xl print:rounded-none shadow-2xl relative overflow-hidden flex flex-col justify-between print:shadow-none print:p-6"
          style={{
            backgroundImage: `radial-gradient(#1E293B08 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        >
          {/* ELEGANT DOUBLE HAIRLINE INNER FRAME (NO BLACK BORDER) */}
          <div className="absolute inset-2 sm:inset-3 border border-slate-300/70 pointer-events-none rounded-sm"></div>
          <div className="absolute inset-3 sm:inset-4 border border-dashed border-slate-200 pointer-events-none rounded-sm"></div>

          {/* WATERMARK BACKGROUND EMBLEM */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <img
              src="/images/emblem_of_india.svg"
              alt="Watermark Emblem"
              className="w-[340px] h-[340px] object-contain"
            />
          </div>

          {/* ===================================================================== */}
          {/* 1. HEADER: OFFICIAL STATE EMBLEM OF INDIA & MINISTRY TITLES           */}
          {/* ===================================================================== */}
          <div className="text-center relative z-10 space-y-0.5 sm:space-y-1">
            {/* Authentic State Emblem of India */}
            <div className="flex justify-center items-center mb-0.5">
              <img
                src="/images/emblem_of_india.svg"
                alt="State Emblem of India"
                className="h-13 sm:h-16 w-auto object-contain drop-shadow-sm"
              />
            </div>

            {/* Ministry Text */}
            <h4 className="text-[9.5px] sm:text-[10.5px] font-serif tracking-[0.22em] text-slate-700 uppercase font-bold">
              भारत सरकार • GOVERNMENT OF INDIA
            </h4>
            <h2 className="text-xs sm:text-sm md:text-[15px] font-serif font-black tracking-wide text-[#0B192C] uppercase leading-tight">
              Ministry of Statistics & Programme Implementation
            </h2>
            <div className="flex items-center justify-center gap-2 text-[8.5px] sm:text-[9.5px] text-slate-600 font-semibold tracking-wide">
              <span>National Statistical Systems Training Academy (NSSTA)</span>
              <span>•</span>
              <span>Capacity Building Commission (CBC)</span>
            </div>

            {/* Certificate Formal Title */}
            <div className="pt-1.5 pb-0.5">
              <h1 className="text-sm sm:text-lg md:text-xl font-serif font-black tracking-[0.15em] text-[#0B192C] uppercase leading-tight">
                Certificate of Competency Mastery
              </h1>
              <p className="text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.2em] text-slate-500 font-mono font-semibold mt-0.5">
                FRAC Accreditation • Mission Karmayogi National Civil Services Standard
              </p>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* 2. BODY: RECIPIENT (PRIYA SHARMA) & COMPETENCY DETAILS                */}
          {/* ===================================================================== */}
          <div className="text-center relative z-10 my-2 sm:my-3 space-y-1.5 sm:space-y-2">
            <p className="text-[11px] sm:text-xs font-serif italic text-slate-600">
              This is to officially certify that
            </p>

            {/* Officer Name: Priya Sharma */}
            <div className="space-y-0.5">
              <h3 className="text-xl sm:text-2xl md:text-[26px] font-serif font-bold text-[#0B192C] tracking-wide leading-tight">
                {officerName}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium">
                {officerDesignation} • <span className="font-semibold text-slate-800">{officerDept}</span>
                <span className="text-slate-500 ml-1.5">(Cadre ID: <span className="font-mono">{officerId}</span>)</span>
              </p>
            </div>

            <p className="text-[10px] sm:text-[11px] text-slate-700 max-w-xl mx-auto leading-relaxed">
              has successfully completed comprehensive diagnostic evaluations and practical assessments, demonstrating verified competency in accordance with the National Civil Services Competency Framework in:
            </p>

            {/* Competency Title */}
            <div className="py-0.5">
              <p className="text-sm sm:text-base md:text-lg font-serif font-bold tracking-wide text-[#0B192C] underline decoration-[#0B192C]/30 underline-offset-4">
                {competencyTitle}
              </p>
            </div>

            {/* Performance Statistics Grid */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-4 pt-1 text-[9.5px] sm:text-[10.5px] font-semibold text-slate-700 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                <Sparkles size={12} className="text-emerald-600" />
                <span>Score: <strong className="font-bold">{score}% (Grade A+ Distinction)</strong></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-900 rounded-lg border border-blue-200">
                <ShieldCheck size={12} className="text-blue-700" />
                <span>FRAC Level: <strong>Level 4 (Advanced Specialist)</strong></span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-800 rounded-lg border border-slate-200">
                <span>Credits: <strong>5 Academic Credits</strong></span>
              </div>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* 3. FOOTER: OFFICIAL CIRCULAR SEAL & STRAIGHT SIGNATURES               */}
          {/* ===================================================================== */}
          <div className="relative z-10 pt-2.5 border-t border-slate-200/90 mt-1">
            <div className="grid grid-cols-3 items-end gap-2 sm:gap-4 pb-1">
              {/* Left Signatory: Dr. Alok K. Verma (Straight Signature) */}
              <div className="text-center space-y-0.5">
                <div className="h-7 sm:h-8 flex items-center justify-center">
                  <span className="font-serif italic text-base sm:text-lg font-bold text-slate-800 select-none">
                    Alok K. Verma
                  </span>
                </div>
                <div className="border-t border-slate-400 pt-0.5">
                  <p className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-900 leading-tight">
                    Dr. Alok K. Verma, ISS
                  </p>
                  <p className="text-[8px] sm:text-[9px] text-slate-500 leading-tight">
                    Director General (NSSTA & Training)
                  </p>
                  <p className="text-[7px] sm:text-[8px] text-slate-600 font-semibold">
                    MoSPI, Government of India
                  </p>
                </div>
              </div>

              {/* Center: Authentic Official Circular Government Seal */}
              <div className="flex flex-col items-center justify-center text-center space-y-1">
                <OfficialGovtSeal code={verificationCode} className="w-14 h-14 sm:w-16 sm:h-16" />
                <div className="text-[7px] sm:text-[8px] font-mono text-slate-500 leading-tight">
                  <p className="font-bold text-slate-800">Code: {verificationCode}</p>
                  <p>Issued: {issueDate}</p>
                </div>
              </div>

              {/* Right Signatory: Smt. Rashmi Sengupta (Straight Signature) */}
              <div className="text-center space-y-0.5">
                <div className="h-7 sm:h-8 flex items-center justify-center">
                  <span className="font-serif italic text-base sm:text-lg font-bold text-slate-800 select-none">
                    Rashmi Sengupta
                  </span>
                </div>
                <div className="border-t border-slate-400 pt-0.5">
                  <p className="text-[9.5px] sm:text-[10.5px] font-bold text-slate-900 leading-tight">
                    Smt. Rashmi Sengupta, IAS
                  </p>
                  <p className="text-[8px] sm:text-[9px] text-slate-500 leading-tight">
                    Member (Human Resources)
                  </p>
                  <p className="text-[7px] sm:text-[8px] text-slate-600 font-semibold">
                    Capacity Building Commission (CBC)
                  </p>
                </div>
              </div>
            </div>

            {/* Microprint Security Hash & Verification Link */}
            <div className="mt-2 pt-1 border-t border-dotted border-slate-300 flex flex-col sm:flex-row items-center justify-between text-[7px] sm:text-[8px] font-mono text-slate-500 gap-0.5">
              <span>SECURITY HASH: SHA256:8F4E-91B2-C4D8-E7A0-3F56-B9C1-D2E3-F4A5</span>
              <span className="text-slate-700 font-semibold">
                Verify Authenticity at: statsaarthi.gov.in/verify
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
