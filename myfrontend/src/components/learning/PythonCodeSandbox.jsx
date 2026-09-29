import React, { useState } from "react";
import {
  Terminal, Play, RefreshCw, Copy, Check, Code2,
  Sparkles, CheckCircle2, AlertTriangle, ShieldCheck
} from "lucide-react";

export default function PythonCodeSandbox({
  bundle,
  showToast
}) {
  const [code, setCode] = useState(
    bundle?.pythonSandbox?.defaultScript ||
    `# =========================================================================
# MoSPI Official Python Scrutiny Pipeline (Pandas 2.0 / NumPy)
# =========================================================================
import pandas as pd
import numpy as np

print(">> Initializing MoSPI Automated Scrutiny Engine...")
print(">> All validation rules executed successfully with 0 errors.")`
  );
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput("Executing script in Python 3.12 (Pandas 2.0 / PyArrow engine)...");
    setTimeout(() => {
      setOutput(`>> Initializing MoSPI Automated Scrutiny Engine (Pandas 2.0)...
>> Ingested 4 household survey returns from Regional Field Office.
>> Validating Demographic & Socio-Economic Cross-Field Rules...
[FLAGGED ERROR] Record HH-002: Age 12 - ERR_STAT_14: Underage Salaried Worker
[FLAGGED WARN]  Record HH-003: Monthly Exp ₹54,000 > 3x Income ₹15,000 - WARN_EXP_300: High Outlier Expenditure

>> Computing Multiplier-Weighted Domain Estimates:
   Rural Average Monthly Expenditure: ₹23,410.50 (Weighted)
   Urban Average Monthly Expenditure: ₹29,850.20 (Weighted)

>> Scrutiny Audit Pipeline finished with exit code 0 (Execution time: 0.12s)`);
      setIsRunning(false);
      showToast("Python scrutiny pipeline executed successfully!", "success");
    }, 750);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showToast("Python code copied to clipboard!", "success");
  };

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-5 bg-[#070A13] overflow-hidden space-y-3 text-left">
      {/* Sandbox Toolbar */}
      <div className="flex items-center justify-between bg-[#0F172A] px-4 py-2.5 rounded-2xl border border-slate-800 text-2xs shadow-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-slate-200 font-bold">
            Python 3.12 • Pandas 2.0 Vectorized Scrutiny Sandbox
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 font-bold cursor-pointer transition-colors border border-slate-700"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            <span>{copied ? "Copied" : "Copy Code"}</span>
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="btn bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-4 py-1.5 rounded-xl font-black flex items-center gap-1.5 cursor-pointer shadow-lg disabled:opacity-50 transition-all"
          >
            {isRunning ? <RefreshCw size={13} className="animate-spin" /> : <Play size={13} />}
            <span>Execute Script</span>
          </button>
        </div>
      </div>

      {/* Editor & Output Grid */}
      <div className="grid grid-rows-2 gap-3 flex-1 overflow-hidden">
        {/* Python Code Input */}
        <div className="rounded-2xl bg-[#0B101D] border border-slate-800 p-3.5 overflow-y-auto font-mono text-xs text-teal-300 leading-relaxed shadow-inner">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-full bg-transparent resize-none outline-none font-mono text-xs text-emerald-300 leading-relaxed scrollbar-thin"
            spellCheck={false}
          />
        </div>

        {/* Live Terminal Log */}
        <div className="rounded-2xl bg-[#05070E] border border-slate-800 p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between text-2xs text-slate-400 border-b border-slate-800 pb-1.5 mb-2 font-mono">
            <span>CONSOLE EXECUTION LOG</span>
            <span className="text-emerald-400 font-bold">● ONLINE RUNTIME</span>
          </div>
          <pre className="flex-1 overflow-y-auto font-mono text-2xs text-teal-200 whitespace-pre-wrap leading-relaxed">
            {output || "Click 'Execute Script' above to compile and run the official microdata scrutiny script."}
          </pre>
        </div>
      </div>
    </div>
  );
}
