import { useState } from "react";
import Editor from "@monaco-editor/react";
import {
  Play, Terminal, RotateCcw, CheckCircle2,
  FileCode, Copy, Check, Files, Search,
  ChevronDown, ChevronRight, X,
  Sparkles, GitBranch, CheckCheck
} from "lucide-react";
import { VIRTUAL_LAB_EXPERIMENTS } from "../data/mockData";
import { LoadingSpinner } from "./ui";

const FILE_NAMES = {
  "exp-stratified-sampling": "sampling_estimator.py",
  "exp-r-cpi": "cpi_aggregator.R",
  "exp-sql-scrutiny": "scrutiny_rules.sql",
};

const MONACO_LANGUAGES = {
  python: "python",
  r: "r",
  sql: "sql",
};

export default function VirtualLab() {
  const [experiments] = useState(VIRTUAL_LAB_EXPERIMENTS);
  const [activeExpId, setActiveExpId] = useState(VIRTUAL_LAB_EXPERIMENTS[0].id);
  const [openTabs, setOpenTabs] = useState([VIRTUAL_LAB_EXPERIMENTS[0].id]);
  const [codeMap, setCodeMap] = useState(() => {
    const initial = {};
    VIRTUAL_LAB_EXPERIMENTS.forEach((exp) => {
      initial[exp.id] = exp.code;
    });
    return initial;
  });

  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState(null);
  const [copied, setCopied] = useState(false);
  const [exitCode, setExitCode] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [terminalCollapsed, setTerminalCollapsed] = useState(false);
  const [activeActivity, setActiveActivity] = useState("explorer");

  const currentExp = experiments.find((e) => e.id === activeExpId) || experiments[0];
  const currentCode = codeMap[currentExp.id] || currentExp.code;

  const handleSelectFile = (expId) => {
    setActiveExpId(expId);
    if (!openTabs.includes(expId)) {
      setOpenTabs([...openTabs, expId]);
    }
  };

  const handleCloseTab = (e, expId) => {
    e.stopPropagation();
    const newTabs = openTabs.filter((id) => id !== expId);
    if (newTabs.length === 0) {
      setOpenTabs([expId]);
      return;
    }
    setOpenTabs(newTabs);
    if (activeExpId === expId) {
      setActiveExpId(newTabs[newTabs.length - 1]);
    }
  };

  const handleCodeChange = (newCode) => {
    setCodeMap((prev) => ({ ...prev, [currentExp.id]: newCode || "" }));
  };

  const handleRun = () => {
    setIsRunning(true);
    setTerminalCollapsed(false);
    setOutput(null);
    setExitCode(null);
    setTimeout(() => {
      setIsRunning(false);
      setOutput(currentExp.sampleOutput);
      setExitCode(0);
    }, 900);
  };

  const handleReset = () => {
    setCodeMap((prev) => ({ ...prev, [currentExp.id]: currentExp.code }));
    setOutput(null);
    setExitCode(null);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Module Title Header sitting inside warm canvas */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white dark:bg-canvas-card-dark border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary dark:bg-primary/20 dark:text-teal-300">
              Virtual Lab Sandbox
            </span>
            <span className="text-2xs text-slate-400">· VS Code Architecture · Monaco Engine</span>
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Statistical Programming & Microdata Verification
          </h2>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="btn-primary py-2 px-4 text-xs font-bold gap-2 shadow-sm cursor-pointer"
            aria-label="Run experiment in sandbox"
          >
            {isRunning ? <LoadingSpinner size={14} className="border-white/30 border-t-white" /> : <Play size={14} className="fill-white" />}
            <span>{isRunning ? "Executing..." : "Run Script (F5)"}</span>
          </button>
          <button
            onClick={handleReset}
            aria-label="Reset file to default"
            title="Reset code to original"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 cursor-pointer"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Real VS Code IDE Container */}
      <div
        className="rounded-xl overflow-hidden border border-[#2B2D30] shadow-2xl flex flex-col font-sans"
        style={{ height: "640px", backgroundColor: "#1E1E1E" }}
      >
        {/* VS Code Title Bar */}
        <div className="h-8 bg-[#181818] border-b border-[#2B2D30] flex items-center justify-between px-3 text-xs text-slate-400 select-none">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
              StatSaarthi Code Studio
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 text-2xs font-mono">
              workspace/{FILE_NAMES[currentExp.id] || "script"}
            </span>
          </div>
          <div className="flex items-center gap-3 text-2xs">
            <span className="text-slate-400 flex items-center gap-1">
              <GitBranch size={12} className="text-orange" />
              main*
            </span>
            <span className="text-emerald-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Kernel: Pyodide Sandbox
            </span>
          </div>
        </div>

        {/* Main Work Area (Activity Bar + Explorer + Editor + Terminal) */}
        <div className="flex-1 flex overflow-hidden min-h-0">
          {/* Slim Activity Bar (Far Left) */}
          <div className="w-12 bg-[#181818] border-r border-[#2B2D30] flex flex-col items-center py-2 shrink-0 select-none">
            <button
              onClick={() => {
                if (activeActivity === "explorer") {
                  setSidebarCollapsed(!sidebarCollapsed);
                } else {
                  setActiveActivity("explorer");
                  setSidebarCollapsed(false);
                }
              }}
              title="File Explorer (Ctrl+Shift+E)"
              className={`p-2.5 rounded-lg mb-1 transition-colors ${
                activeActivity === "explorer" && !sidebarCollapsed
                  ? "text-white bg-[#2B2D30]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Files size={18} />
            </button>
            <button
              onClick={() => {
                setActiveActivity("search");
                setSidebarCollapsed(false);
              }}
              title="Search"
              className={`p-2.5 rounded-lg mb-1 transition-colors ${
                activeActivity === "search" && !sidebarCollapsed
                  ? "text-white bg-[#2B2D30]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Search size={18} />
            </button>
            <button
              onClick={() => {
                setTerminalCollapsed(!terminalCollapsed);
              }}
              title="Toggle Output Panel (Ctrl+`)"
              className={`p-2.5 rounded-lg mb-1 transition-colors ${
                !terminalCollapsed ? "text-orange bg-[#2B2D30]" : "text-slate-400 hover:text-white"
              }`}
            >
              <Terminal size={18} />
            </button>
            <div className="mt-auto">
              <button
                onClick={handleCopyCode}
                title="Copy Active Code"
                className="p-2.5 text-slate-400 hover:text-white transition-colors"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Collapsible File Explorer Tree */}
          {!sidebarCollapsed && (
            <div
              className="w-56 bg-[#181818] border-r border-[#2B2D30] flex flex-col shrink-0 select-none"
              style={{ minWidth: "180px" }}
            >
              <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>Explorer</span>
                <button
                  onClick={() => setSidebarCollapsed(true)}
                  className="text-slate-500 hover:text-slate-300"
                  title="Collapse Explorer"
                >
                  <ChevronRight size={14} />
                </button>
              </div>

              {/* Folder section */}
              <div className="px-2 py-1">
                <div className="flex items-center gap-1 text-2xs font-bold text-slate-300 px-1 py-1">
                  <ChevronDown size={13} className="text-slate-500" />
                  <span className="uppercase tracking-wider">statistical_models</span>
                </div>
                <div className="space-y-0.5 mt-1 ml-2">
                  {experiments.map((exp) => {
                    const isSelected = exp.id === activeExpId;
                    const fileName = FILE_NAMES[exp.id] || "script";
                    return (
                      <button
                        key={exp.id}
                        onClick={() => handleSelectFile(exp.id)}
                        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs text-left transition-colors ${
                          isSelected
                            ? "bg-[#2A2D2E] text-white font-medium"
                            : "text-slate-400 hover:bg-[#202224] hover:text-slate-200"
                        }`}
                      >
                        <FileCode
                          size={13}
                          className={
                            exp.language === "python"
                              ? "text-blue-400"
                              : exp.language === "r"
                              ? "text-emerald-400"
                              : "text-amber-400"
                          }
                        />
                        <span className="truncate flex-1 font-mono text-[11px]">{fileName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Experiment Metadata Card */}
              <div className="mt-auto p-3 m-2 rounded-lg bg-[#202224] border border-[#2E3134] text-2xs text-slate-300">
                <p className="font-bold text-white mb-1">{currentExp.title}</p>
                <p className="text-slate-400 line-clamp-3 leading-relaxed mb-2">
                  {currentExp.description}
                </p>
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-[#2E3134]">
                  <span>Runtime</span>
                  <span className="font-mono text-orange-light">{currentExp.badge}</span>
                </div>
              </div>
            </div>
          )}

          {/* Center Editor + Docked Terminal Area */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#1E1E1E]">
            {/* Editor Tab Bar */}
            <div className="h-9 bg-[#181818] border-b border-[#2B2D30] flex items-center overflow-x-auto scrollbar-dark select-none">
              {openTabs.map((tabId) => {
                const exp = experiments.find((e) => e.id === tabId);
                if (!exp) return null;
                const isActive = tabId === activeExpId;
                return (
                  <div
                    key={tabId}
                    onClick={() => setActiveExpId(tabId)}
                    className={`h-full flex items-center gap-2 px-3 border-r border-[#2B2D30] cursor-pointer text-xs transition-colors shrink-0 ${
                      isActive
                        ? "bg-[#1E1E1E] text-white font-medium border-t-2 border-t-orange"
                        : "bg-[#141414] text-slate-400 hover:bg-[#181818] hover:text-slate-200"
                    }`}
                  >
                    <FileCode
                      size={13}
                      className={
                        exp.language === "python"
                          ? "text-blue-400"
                          : exp.language === "r"
                          ? "text-emerald-400"
                          : "text-amber-400"
                      }
                    />
                    <span className="font-mono text-xs">{FILE_NAMES[exp.id]}</span>
                    <button
                      onClick={(e) => handleCloseTab(e, tabId)}
                      className="text-slate-500 hover:text-slate-200 p-0.5 rounded ml-1"
                      title="Close"
                    >
                      <X size={12} />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Monaco Editor Canvas (VS Code Dark+ Style) */}
            <div className="flex-1 relative min-h-0 bg-[#1E1E1E]">
              <Editor
                height="100%"
                language={MONACO_LANGUAGES[currentExp.language] || "python"}
                value={currentCode}
                onChange={handleCodeChange}
                theme="vs-dark"
                options={{
                  fontSize: 13,
                  fontFamily: '"JetBrains Mono", "Cascadia Code", Consolas, monospace',
                  minimap: { enabled: true, scale: 0.75 },
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                  lineNumbers: "on",
                  glyphMargin: false,
                  folding: true,
                  automaticLayout: true,
                  renderLineHighlight: "all",
                  tabSize: 4,
                  cursorBlinking: "smooth",
                  cursorSmoothCaretAnimation: "on",
                  smoothScrolling: true,
                  padding: { top: 12, bottom: 12 },
                }}
                loading={
                  <div className="h-full flex items-center justify-center text-xs text-slate-400 gap-2">
                    <LoadingSpinner size={16} />
                    <span>Loading Monaco Editor...</span>
                  </div>
                }
              />
            </div>

            {/* Docked Output/Terminal Panel at Bottom */}
            {!terminalCollapsed && (
              <div
                className="border-t border-[#2B2D30] bg-[#141414] flex flex-col shrink-0"
                style={{ height: "210px" }}
              >
                {/* Terminal Header */}
                <div className="px-3 py-1.5 bg-[#181818] border-b border-[#2B2D30] flex items-center justify-between text-xs text-slate-400 select-none">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
                      <Terminal size={13} className="text-orange" />
                      <span>TERMINAL & OUTPUT</span>
                    </div>
                    {exitCode !== null && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                        Process returned {exitCode}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setOutput(null)}
                      title="Clear Console"
                      className="p-1 hover:text-white transition-colors"
                    >
                      <RotateCcw size={12} />
                    </button>
                    <button
                      onClick={() => setTerminalCollapsed(true)}
                      title="Minimize Terminal"
                      className="p-1 hover:text-white transition-colors"
                    >
                      <ChevronDown size={13} />
                    </button>
                  </div>
                </div>

                {/* Terminal Scroll Content */}
                <div className="flex-1 p-3 overflow-y-auto font-mono text-xs leading-relaxed text-slate-200 scrollbar-dark">
                  {isRunning ? (
                    <div className="h-full flex flex-col items-center justify-center gap-2 text-slate-400">
                      <LoadingSpinner size={18} />
                      <p className="text-xs">Executing {FILE_NAMES[currentExp.id]} in cloud sandbox...</p>
                    </div>
                  ) : output ? (
                    <div className="space-y-2">
                      <div className="text-emerald-400 text-2xs flex items-center gap-1.5 font-sans font-semibold">
                        <CheckCheck size={14} />
                        <span>Execution finished with 0 errors · Pyodide v0.25 (WASM)</span>
                      </div>
                      <pre className="text-slate-300 text-xs whitespace-pre-wrap font-mono">
                        {output}
                      </pre>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center">
                      <Terminal size={22} className="mb-1 text-slate-600" />
                      <p className="text-xs font-semibold text-slate-400">
                        Press "Run Script (F5)" to execute statistical code
                      </p>
                      <p className="text-2xs text-slate-600 mt-0.5">
                        Sampling distributions, index aggregations and console outputs will stream here
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Thin Authentic VS Code Status Bar */}
        <div className="h-6 bg-[#007ACC] text-white text-[11px] px-3 flex items-center justify-between font-mono select-none">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <GitBranch size={11} /> main
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 size={11} /> 0 errors, 0 warnings
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span>Ln 1, Col 1</span>
            <span>Spaces: 4</span>
            <span>UTF-8</span>
            <span className="uppercase">{currentExp.language}</span>
            <span className="flex items-center gap-1">
              <Sparkles size={11} /> StatSaarthi AI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
