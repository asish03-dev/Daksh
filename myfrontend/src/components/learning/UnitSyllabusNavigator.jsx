import React from "react";
import {
  ListOrdered, CheckCircle2, Check, Clock, Award,
  Sparkles, ShieldCheck, ChevronRight, Lock
} from "lucide-react";

export default function UnitSyllabusNavigator({
  bundle,
  currentLessonId,
  setCurrentLessonId,
  unitProgress,
  onMarkComplete,
  onClose
}) {
  const units = bundle?.units || [];
  const completedCount = units.filter((u) => u.completed).length;

  return (
    <div className="w-full lg:w-80 bg-[#0A0F1D] border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between overflow-hidden text-left">
      {/* Syllabus Header */}
      <div className="p-4 border-b border-slate-800 bg-[#0D1424] shrink-0">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
            <ListOrdered size={14} className="text-teal-400" />
            Curriculum Units
          </h4>
          <span className="text-[10px] font-bold text-slate-400">
            {completedCount} / {units.length} Completed
          </span>
        </div>
        <p className="text-2xs text-slate-400">
          Complete all units to earn +{bundle?.acbpCredits || 4} verified ACBP credits.
        </p>
      </div>

      {/* Chapters Progression List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-xs">
        {units.map((unit) => {
          const isActive = unit.id === currentLessonId;
          return (
            <div
              key={unit.id}
              onClick={() => setCurrentLessonId(unit.id)}
              className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                isActive
                  ? "bg-teal-500/15 border-teal-400 text-white font-bold shadow-md"
                  : unit.completed
                  ? "bg-emerald-950/30 border-emerald-800/50 text-slate-300"
                  : "bg-[#070A13] border-slate-800 text-slate-400 hover:border-slate-700"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {unit.completed ? (
                  <CheckCircle2 size={16} className="text-emerald-400" />
                ) : isActive ? (
                  <div className="w-4 h-4 rounded-full bg-teal-400 text-slate-900 flex items-center justify-center font-black text-[10px]">
                    ▶
                  </div>
                ) : (
                  <div className="w-4 h-4 rounded-full border border-slate-700 flex items-center justify-center text-[10px] text-slate-500">
                    {unit.id}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h5 className="text-xs font-bold leading-snug truncate">{unit.title}</h5>
                <span className="text-[10px] text-slate-500 font-mono block mt-0.5">{unit.duration}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Progress Controls */}
      <div className="p-4 bg-[#0D1424] border-t border-slate-800 space-y-2 shrink-0">
        <button
          onClick={onMarkComplete}
          className="w-full btn-primary text-xs py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
        >
          <Check size={14} />
          <span>Mark Lesson Complete (+20%)</span>
        </button>

        <button
          onClick={onClose}
          className="w-full px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold cursor-pointer transition-colors text-center border border-slate-700"
        >
          Save & Exit Studio
        </button>
      </div>
    </div>
  );
}
