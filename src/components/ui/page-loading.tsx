export function PageLoading() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero skeleton */}
      <div className="relative w-full h-[60vh] bg-[#0A0F1E] overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
          <div className="h-3 w-32 rounded-full bg-white/[0.06] animate-pulse" />
          <div className="h-12 w-[70%] max-w-xl rounded-lg bg-white/[0.06] animate-pulse" />
          <div className="h-12 w-[50%] max-w-md rounded-lg bg-white/[0.04] animate-pulse" />
          <div className="h-5 w-[60%] max-w-lg rounded-md bg-white/[0.03] animate-pulse mt-2" />
          <div className="h-12 w-48 rounded-full bg-white/[0.06] animate-pulse mt-6" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="h-3 w-28 rounded-full bg-slate-100 animate-pulse" />
          <div className="h-10 w-[50%] max-w-md rounded-lg bg-slate-100 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 p-8 space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 animate-pulse" />
              <div className="h-6 w-3/4 rounded bg-slate-100 animate-pulse" />
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-slate-50 animate-pulse" />
                <div className="h-3 w-5/6 rounded bg-slate-50 animate-pulse" />
                <div className="h-3 w-2/3 rounded bg-slate-50 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
