export function VisualStatement() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-28">
      {/* Abstract data glow and grid background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-emerald/10 blur-[150px]" />
        <div className="grid-lines-dark absolute inset-0 opacity-20" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
          The Missing Intelligence Layer
        </div>

        {/* Large Editorial Headline */}
        <div className="mt-8 space-y-4">
          <p className="text-2xl font-light text-slate-300 sm:text-3xl lg:text-4xl tracking-tight">
            Your systems tell you <span className="font-semibold text-white">WHAT happened</span>.
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-7xl font-serif tracking-tight text-white leading-tight">
            PredictivIQ helps explain
            <span className="block mt-2 text-6xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 drop-shadow-sm">
              WHY.
            </span>
          </h2>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Point-of-sale logs sales. Inventory records counts. Waste bins log discards.
          <br className="hidden sm:inline" />
          PredictivIQ connects every point across the chain to diagnose root causes before losses
          compound.
        </p>

        {/* Decorative Connected Flow Dots */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-1.5 w-12 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="h-1.5 w-12 rounded-full bg-white/20" />
        </div>
      </div>
    </section>
  );
}
