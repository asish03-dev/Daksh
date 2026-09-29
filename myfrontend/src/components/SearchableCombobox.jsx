import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Check, Plus, X, Loader2 } from "lucide-react";

export default function SearchableCombobox({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  allowCustom = true,
  helperText,
  subLabel,
  required = false
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayLimit, setDisplayLimit] = useState(15);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Normalize options
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === "string") {
      return { label: opt, value: opt, category: "General" };
    }
    return {
      label: opt.label || opt.name || opt.value,
      value: opt.value || opt.label,
      category: opt.category || "General",
      badge: opt.badge || null
    };
  });

  // Filter based on search term
  const filteredOptions = normalizedOptions.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opt.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exactMatchExists = normalizedOptions.some(
    (opt) => opt.label.toLowerCase() === searchTerm.trim().toLowerCase()
  );

  // Sliced items for virtualized batch loading
  const visibleOptions = searchTerm.trim()
    ? filteredOptions
    : filteredOptions.slice(0, displayLimit);

  const hasMore = !searchTerm.trim() && displayLimit < filteredOptions.length;

  // Handle scroll for "Loading more..."
  const handleScroll = () => {
    if (!listRef.current || !hasMore || isLoadingMore) return;
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    if (scrollHeight - scrollTop - clientHeight < 25) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setDisplayLimit((prev) => prev + 15);
        setIsLoadingMore(false);
      }, 250);
    }
  };

  // Reset display limit when popover opens/closes
  useEffect(() => {
    if (isOpen) {
      setDisplayLimit(15);
      setSearchTerm("");
    }
  }, [isOpen]);

  // Handle outside click to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val) => {
    onChange(val);
    setSearchTerm("");
    setIsOpen(false);
  };

  const handleCustomAdd = () => {
    if (searchTerm.trim()) {
      onChange(searchTerm.trim());
      setSearchTerm("");
      setIsOpen(false);
    }
  };

  return (
    <div className="relative space-y-1 text-left" ref={containerRef}>
      {label && (
        <div className="flex items-center justify-between mb-1">
          <label className="block text-2xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        </div>
      )}

      {/* Main Select Button / Trigger */}
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
          }
        }}
        className={`w-full input-field text-xs font-medium flex items-center justify-between cursor-pointer bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 transition-colors py-2.5 px-3 rounded-xl shadow-xs ${
          isOpen ? "ring-2 ring-teal-500/20 border-teal-500" : ""
        }`}
      >
        <span className={`truncate ${value ? "text-slate-900 dark:text-white font-bold" : "text-slate-400 font-normal"}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={15}
          className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-teal-500" : ""}`}
        />
      </div>

      {subLabel && !value && (
        <p className="text-[11px] text-red-500/90 dark:text-red-400 font-medium">
          {subLabel}
        </p>
      )}

      {/* DROPDOWN POPOVER */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-[#0B1120] border border-slate-300 dark:border-slate-700 rounded-2xl shadow-2xl z-50 overflow-hidden animate-fadeIn text-xs">
          {/* Top Search Input Box */}
          <div className="p-2 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 relative flex items-center">
            <Search size={14} className="text-slate-400 ml-2 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (searchTerm.trim()) {
                    handleCustomAdd();
                  }
                }
              }}
              placeholder={searchPlaceholder}
              className="w-full bg-transparent pl-2.5 pr-6 text-xs text-slate-900 dark:text-white placeholder-slate-400 outline-none font-medium py-1"
              onClick={(e) => e.stopPropagation()}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchTerm("");
                }}
                className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Scrollable Results List with Infinite Batch Loading */}
          <div
            ref={listRef}
            onScroll={handleScroll}
            className="max-h-60 overflow-y-auto p-1.5 space-y-0.5 scrollbar-thin"
          >
            {/* Custom Entry Option */}
            {allowCustom && searchTerm.trim() && !exactMatchExists && (
              <div
                onClick={handleCustomAdd}
                className="p-2.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 dark:text-teal-300 border border-teal-500/30 flex items-center justify-between cursor-pointer transition-colors font-bold text-xs"
              >
                <div className="flex items-center gap-2 truncate">
                  <Plus size={14} className="shrink-0 text-teal-500" />
                  <span>Use: <strong className="underline">"{searchTerm.trim()}"</strong></span>
                </div>
                <span className="text-[10px] font-sans uppercase px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-400 shrink-0">
                  Custom Entry
                </span>
              </div>
            )}

            {visibleOptions.length > 0 ? (
              visibleOptions.map((opt, idx) => {
                const isSelected = value === opt.value;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelect(opt.value)}
                    className={`p-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-teal-500/15 text-teal-600 dark:text-teal-300 font-bold"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-medium"
                    }`}
                  >
                    <div className="min-w-0 flex-1 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="truncate leading-snug">{opt.label}</span>
                        {opt.badge && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold shrink-0">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      {opt.category && opt.category !== "General" && (
                        <span className="text-[10px] text-slate-400 block mt-0.5 font-normal">
                          {opt.category}
                        </span>
                      )}
                    </div>
                    {isSelected && <Check size={14} className="text-teal-500 shrink-0" />}
                  </div>
                );
              })
            ) : (
              <div className="p-4 text-center text-slate-400 text-xs">
                No matching results found.
              </div>
            )}

            {/* "Loading more..." Infinite Scroll Indicator */}
            {(hasMore || isLoadingMore) && (
              <div className="py-2.5 text-center text-2xs text-teal-600 dark:text-teal-400 font-semibold flex items-center justify-center gap-1.5 animate-pulse">
                <Loader2 size={12} className="animate-spin" />
                <span>Loading more...</span>
              </div>
            )}
          </div>
        </div>
      )}

      {helperText && (
        <p className="text-[10px] text-slate-400 mt-1">{helperText}</p>
      )}
    </div>
  );
}
