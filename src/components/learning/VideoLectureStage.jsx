import React, { useState, useEffect } from "react";
import {
  Play, Pause, RotateCcw, Volume2, VolumeX, Youtube,
  ExternalLink, Bookmark, Clock, CheckCircle2, Video, Sparkles,
  Layers, ChevronRight, ShieldCheck, Lock, AlertCircle
} from "lucide-react";
import { extractYouTubeId } from "../../data/coursesManualRepository";

export default function VideoLectureStage({
  course,
  activeModule,
  showToast
}) {
  const [videoMode, setVideoMode] = useState("youtube"); // 'youtube' | 'interactive'
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState("1.0x");
  const [isMuted, setIsMuted] = useState(false);

  const video = activeModule?.video;
  const youtubeId = extractYouTubeId(video?.url);
  const hasValidVideo = Boolean(youtubeId);

  // Interactive Video Ticker (if in simulated interactive mode)
  useEffect(() => {
    let interval;
    if (isPlaying && videoMode === "interactive" && hasValidVideo) {
      interval = setInterval(() => {
        setVideoTime((prev) => (prev >= 1700 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, videoMode, hasValidVideo]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-4 sm:p-5 bg-[#070A13] overflow-y-auto space-y-4 text-left">
      {/* Video Player Frame */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#0F172A] border border-slate-800 aspect-video overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-center items-center">
        {hasValidVideo ? (
          videoMode === "youtube" ? (
            <div className="w-full h-full relative">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            /* High-Reliability Interactive Lecture Canvas */
            <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-t from-[#090D18] via-[#0F172A] to-[#1E293B]">
              <div className="flex items-center justify-between text-2xs flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-teal-300 font-mono border border-white/10">
                  1080p Full HD Stream
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setVideoMode("youtube")}
                    className="px-2.5 py-1 rounded-lg bg-red-600/30 text-red-300 border border-red-500/30 font-bold flex items-center gap-1 hover:bg-red-600/50 cursor-pointer"
                  >
                    <Youtube size={12} /> YouTube Stream
                  </button>
                  <a
                    href={`https://www.youtube.com/watch?v=${youtubeId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <ExternalLink size={11} /> Open External
                  </a>
                </div>
              </div>

              <div className="text-center py-4 space-y-2">
                <div
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-primary/30 border-2 border-teal-400 text-white flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform mx-auto mb-2"
                >
                  {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1 text-teal-300" />}
                </div>
                <h3 className="text-sm sm:text-base font-black text-white max-w-xl mx-auto leading-snug">
                  {video.title}
                </h3>
                <p className="text-xs text-teal-300 font-medium">
                  Faculty / Provider: {course?.faculty || course?.provider}
                </p>
              </div>

              <div className="bg-[#0A0F1D]/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700/80 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  </button>
                  <span className="font-mono text-2xs text-slate-300">
                    {formatTime(videoTime)} / {video.duration || "25:00"}
                  </span>
                </div>

                <div className="flex-1 mx-3">
                  <input
                    type="range"
                    min="0"
                    max="1700"
                    value={videoTime}
                    onChange={(e) => setVideoTime(Number(e.target.value))}
                    className="w-full accent-teal-400 cursor-pointer h-1.5 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )
        ) : (
          /* PROFESSIONAL DIGNIFIED COMING SOON STATE */
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-gradient-to-b from-[#0F172A] to-[#070A13] border border-slate-800 rounded-2xl sm:rounded-3xl space-y-3.5">
            <div className="w-16 h-16 rounded-3xl bg-slate-800/90 border border-slate-700/80 text-slate-400 flex items-center justify-center shadow-lg">
              <Video size={28} className="text-slate-400" />
            </div>

            <div className="max-w-md space-y-1.5">
              <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 inline-block">
                Official Lecture in Production
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                {video?.title || "Designated Curriculum Lecture"}
              </h4>
              <p className="text-2xs text-slate-400 leading-relaxed">
                The accredited video lecture for this topic is currently being prepared and finalized by the NSSTA / iGOT faculty. It will be published shortly by the Department Administrator.
              </p>
            </div>

            <div className="pt-1">
              <button
                disabled
                className="px-5 py-2 rounded-xl bg-slate-800/80 text-slate-400 text-xs font-bold flex items-center gap-2 cursor-not-allowed border border-slate-700"
              >
                <Lock size={13} className="text-slate-400" />
                <span>Lecture Coming Soon</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Video Details Strip */}
      <div className="p-4 rounded-2xl bg-[#0F172A] border border-slate-800 flex items-center justify-between flex-wrap gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-2xs font-extrabold text-teal-400 uppercase tracking-wider">
              {activeModule?.title || "Current Module"}
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              Status: {hasValidVideo ? "Published" : "In Production"}
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-extrabold text-white">
            {video?.title}
          </h4>
        </div>

        {hasValidVideo && (
          <div className="flex items-center gap-2">
            <span className="text-2xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              <CheckCircle2 size={12} /> Verified Stream
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
