/**
 * Skeleton loading components for use during section transitions.
 */

/** Shimmer skeleton rectangle */
export function SkeletonBlock({ className = "" }) {
  return <div className={`skeleton ${className}`} />;
}

/** Skeleton stat card */
export function SkeletonStatCard() {
  return (
    <div className="card">
      <SkeletonBlock className="h-3 w-20 mb-3" />
      <SkeletonBlock className="h-8 w-16 mb-2" />
      <SkeletonBlock className="h-3 w-28" />
    </div>
  );
}

/** Skeleton list row */
export function SkeletonRow() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100">
      <SkeletonBlock className="h-10 w-10 rounded-full shrink-0" />
      <div className="flex-1 space-y-2">
        <SkeletonBlock className="h-3.5 w-48" />
        <SkeletonBlock className="h-2.5 w-32" />
      </div>
      <SkeletonBlock className="h-6 w-20 rounded-full" />
    </div>
  );
}

/** Skeleton card with content area */
export function SkeletonCard() {
  return (
    <div className="card space-y-3">
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1 pr-4">
          <SkeletonBlock className="h-3 w-16 rounded-full" />
          <SkeletonBlock className="h-4 w-48" />
        </div>
        <SkeletonBlock className="h-6 w-16 rounded-full" />
      </div>
      <SkeletonBlock className="h-3 w-full" />
      <SkeletonBlock className="h-3 w-3/4" />
      <div className="pt-2">
        <SkeletonBlock className="h-1.5 w-full rounded-full" />
      </div>
    </div>
  );
}

/** Skeleton for the overview hero banner */
export function SkeletonHero() {
  return (
    <div className="card p-6 rounded-xl border border-slate-200">
      <div className="flex gap-5 items-center">
        <SkeletonBlock className="h-16 w-16 rounded-full shrink-0" />
        <div className="flex-1 space-y-2">
          <SkeletonBlock className="h-3 w-32" />
          <SkeletonBlock className="h-6 w-48" />
          <SkeletonBlock className="h-3 w-40" />
        </div>
      </div>
    </div>
  );
}

/** Grid of skeleton stat cards */
export function SkeletonStatsGrid({ count = 4 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonStatCard key={i} />
      ))}
    </div>
  );
}

/** Skeleton for a section (hero + stats + card list) */
export function SkeletonSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <SkeletonHero />
      <SkeletonStatsGrid />
      <div className="card space-y-3">
        <SkeletonBlock className="h-4 w-40 mb-1" />
        {[1, 2, 3].map((i) => (
          <SkeletonRow key={i} />
        ))}
      </div>
    </div>
  );
}
