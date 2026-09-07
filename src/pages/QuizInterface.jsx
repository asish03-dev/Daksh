import { useState, useEffect, useCallback, memo } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  Clock, ChevronLeft, ChevronRight, Flag, CheckCircle2,
  XCircle, BookOpen, FileText, RotateCcw, Award, ArrowRight, Sun, Moon
} from "lucide-react";
import { QUIZZES_LIST, QUIZ_DATA } from "../data/mockData";
import { BloomTag, ScoreRing } from "../components/ui";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";
import { getLocalizedQuiz } from "../i18n/hindiTranslations";
import OfficialCertificate from "../components/OfficialCertificate";

/**
 * Isolated, stable Countdown Timer component
 * Prevents unnecessary parent tree re-renders and eliminates screen jittering.
 */
const ExamCountdownTimer = memo(function ExamCountdownTimer({ totalSeconds, onTimeUp, isSubmitted }) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, onTimeUp]);

  const mins = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
  const secs = (secondsLeft % 60).toString().padStart(2, "0");
  const isLow = secondsLeft < 120;

  return (
    <div
      className={`flex items-center gap-1.5 font-mono text-xs font-bold px-3 py-1.5 rounded-xl border tabular-nums select-none ${
        isLow
          ? "text-rose-600 bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 font-black"
          : "text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
      }`}
      aria-label={`Time remaining: ${mins} minutes ${secs} seconds`}
    >
      <Clock size={14} className={isLow ? "text-rose-500" : "text-slate-400"} />
      <span>{mins}:{secs}</span>
    </div>
  );
});

export default function QuizInterface() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, passQuiz, showToast } = useUser();
  const { isDark, toggleTheme, lang } = useTheme();
  const rawQuiz = (id ? QUIZZES_LIST.find((qz) => qz.id === id) : null) || QUIZ_DATA;
  const quiz = getLocalizedQuiz(rawQuiz, lang);
  const total = quiz.questions.length;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flagged, setFlagged] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  const q = quiz.questions[current] || quiz.questions[0];

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
  }, []);

  const score = quiz.questions.filter((qs) => answers[qs.id] === qs.correctOption).length;
  const pct = Math.round((score / total) * 100);

  useEffect(() => {
    if (submitted && pct >= 80) {
      passQuiz?.(
        quiz.title,
        quiz.competencyName || rawQuiz?.competencyName || quiz.title,
        pct,
        quiz.competencyCode || rawQuiz?.competencyCode
      );
    }
  }, [submitted]);

  const handleAnswer = (opt) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [q.id]: opt }));
  };

  const handleFlag = () => {
    setFlagged((prev) => ({ ...prev, [q.id]: !prev[q.id] }));
  };

  // Result screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 text-slate-800 dark:text-slate-100 transition-colors">
        <div
          className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl"
        >
          {/* Result Header */}
          <div
            className={`px-8 py-8 text-white text-center ${
              pct >= 80 ? "bg-emerald-600" : pct >= 60 ? "bg-amber-600" : "bg-slate-800"
            }`}
          >
            <p className="text-2xs font-extrabold uppercase tracking-widest opacity-80 mb-3">
              Diagnostic Assessment Report
            </p>
            <div className="flex justify-center mb-4">
              <ScoreRing score={score} total={total} size={90} />
            </div>
            <h2 className="text-2xl font-extrabold mb-1 font-display">
              {pct >= 80 ? "Competency Level Up Achieved!" : pct >= 60 ? "Good Attempt" : "Requires Review"}
            </h2>
            <p className="text-xs opacity-90">{quiz.title}</p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Correct Items", value: `${score}/${total}`, color: "text-slate-900 dark:text-white" },
                { label: "Score Achieved", value: `${pct}%`, color: pct >= 80 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400" },
                { label: "Statutory Benchmark", value: "80%", color: "text-slate-500" },
              ].map((s) => (
                <div key={s.label} className="text-center p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">{s.label}</p>
                  <p className={`text-xl font-extrabold font-mono ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>

            {pct >= 80 && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <Award size={24} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      Verified Official Certificate Issued!
                    </p>
                    <p className="text-2xs text-emerald-700 dark:text-emerald-400">
                      Your FRAC Level has been accredited in your official civil services record.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCertModal(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-2 px-4 rounded-xl font-bold flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Award size={14} /> View Certificate
                </button>
              </div>
            )}

            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Item Breakdown & Source Citations</h3>
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1 scrollbar-thin">
              {quiz.questions.map((qs, i) => {
                const chosen = answers[qs.id];
                const correct = qs.correctOption;
                const isRight = chosen === correct;
                return (
                  <div key={qs.id} className="border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 text-left">
                    <div className="flex items-start gap-2.5 mb-2">
                      {isRight ? (
                        <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle size={16} className="text-rose-500 shrink-0 mt-0.5" />
                      )}
                      <p className="text-xs font-bold text-slate-900 dark:text-white flex-1 leading-relaxed">
                        Q{i + 1}: {qs.text}
                      </p>
                      <BloomTag level={qs.bloomLevel} />
                    </div>
                    {!isRight && (
                      <div className="ml-6 space-y-1 mb-2 text-xs">
                        <p className="text-rose-600 dark:text-rose-400 font-medium">Your answer: {chosen ? `${chosen}. ${qs.options[chosen]}` : "None"}</p>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Correct: {correct}. {qs.options[correct]}</p>
                      </div>
                    )}
                    <div className="ml-6 p-2.5 bg-white dark:bg-slate-800 rounded-xl text-2xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      <strong>Source Citation:</strong> {qs.sourceDoc || qs.sourceCitation}, {qs.pageRef || "MoSPI Standard"}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={() => navigate("/officer")} className="bg-sky-600 hover:bg-sky-700 text-white text-xs py-2.5 px-6 rounded-xl font-bold cursor-pointer shadow-md">
                Return to Officer Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Official Certificate Modal */}
        {showCertModal && (
          <OfficialCertificate
            certificate={{
              id: `CERT-${quiz.id.replace("QUIZ-", "")}-VAL`,
              title: `${quiz.title} Competency Certificate`,
              competency: quiz.competencyName || quiz.title,
              score: pct,
              issuedDate: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" }),
              verificationCode: `STA-VAL-${Date.now().toString().slice(-6)}`
            }}
            user={user}
            onClose={() => setShowCertModal(false)}
            showToast={showToast}
          />
        )}
      </div>
    );
  }

  // Quiz active question view with fixed layout containment to prevent jitter
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col text-slate-800 dark:text-slate-100 transition-colors">
      {/* Quiz Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Link to="/officer" className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1">
            <ChevronLeft size={16} /> Exit
          </Link>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <div className="text-left">
            <h1 className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-xs sm:max-w-md">{quiz.title}</h1>
            <p className="text-2xs text-slate-400 font-mono">Question {current + 1} of {total}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ExamCountdownTimer
            totalSeconds={quiz.timeLimitMins * 60}
            onTimeUp={handleSubmit}
            isSubmitted={submitted}
          />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {isDark ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} />}
          </button>
        </div>
      </header>

      {/* Question Selector Strip */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-2.5 overflow-x-auto scrollbar-thin shrink-0">
        <div className="flex items-center gap-2 max-w-3xl mx-auto justify-start sm:justify-center">
          {quiz.questions.map((qs, idx) => {
            const isCurr = current === idx;
            const isAnswered = answers[qs.id] !== undefined;
            const isFlagged = flagged[qs.id];

            return (
              <button
                key={qs.id}
                onClick={() => setCurrent(idx)}
                className={`relative w-8 h-8 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                  isCurr
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/30 ring-2 ring-sky-400 font-black scale-105"
                    : isFlagged
                    ? "bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/40"
                    : isAnswered
                    ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-slate-400"
                }`}
                title={`Question ${idx + 1}${isFlagged ? " (Flagged)" : isAnswered ? " (Answered)" : ""}`}
              >
                {idx + 1}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-white dark:border-slate-900" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card with Strict Height Containment & Zero Shaking */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 max-w-3xl mx-auto w-full">
        <div className="w-full min-h-[480px] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between text-left relative overflow-hidden">
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xs font-extrabold px-2.5 py-0.5 rounded-md bg-sky-600 text-white uppercase tracking-wider shadow-xs">
                  Q{current + 1}
                </span>
                <BloomTag level={q.bloomLevel} />
              </div>
              <button
                onClick={handleFlag}
                className={`flex items-center gap-1.5 text-2xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  flagged[q.id]
                    ? "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-300 border-amber-300 dark:border-amber-700 shadow-xs"
                    : "text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-700 dark:hover:text-slate-200"
                }`}
              >
                <Flag size={12} className={flagged[q.id] ? "fill-amber-500 text-amber-500" : ""} />
                <span>{flagged[q.id] ? "Flagged for Review" : "Flag Question"}</span>
              </button>
            </div>

            <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed min-h-[48px]">
              {q.text}
            </h2>

            <div className="space-y-2.5">
              {Object.entries(q.options).map(([key, optText]) => {
                const isSelected = answers[q.id] === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleAnswer(key)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border text-xs font-semibold flex items-center gap-3 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-sky-50 dark:bg-sky-950/40 border-sky-500 text-sky-950 dark:text-sky-100 shadow-xs ring-1 ring-sky-500/30"
                        : "bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-2xs uppercase shrink-0 transition-colors ${
                      isSelected ? "bg-sky-600 text-white shadow-xs" : "bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700"
                    }`}>
                      {key}
                    </span>
                    <span className="flex-1 leading-relaxed">{optText}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 text-2xs text-slate-400 flex items-center gap-2">
              <BookOpen size={13} className="text-sky-600 dark:text-sky-400 shrink-0" />
              <span className="truncate"><strong>Grounded Statutory Reference:</strong> {q.sourceDoc || q.sourceCitation || "MoSPI Standard Protocol"}</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 shrink-0">
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 cursor-pointer flex items-center gap-1"
            >
              <ChevronLeft size={14} /> Previous
            </button>

            {current < total - 1 ? (
              <button
                onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
                className="bg-sky-600 hover:bg-sky-700 text-white text-xs py-2 px-5 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer shadow-sm transition-all"
              >
                <span>Next Question</span>
                <ChevronRight size={14} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs py-2 px-6 rounded-xl font-bold shadow-md cursor-pointer flex items-center gap-1.5 transition-all"
              >
                <span>Submit Evaluation</span>
                <CheckCircle2 size={14} />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
