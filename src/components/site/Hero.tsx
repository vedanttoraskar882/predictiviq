import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Layers,
  Building2,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-12 pb-24 md:pt-16 md:pb-28"
    >
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-emerald-soft blur-3xl opacity-60" />
        <div className="absolute top-1/3 left-10 h-80 w-80 rounded-full bg-sky-50 blur-3xl opacity-70" />
        <div className="grid-lines absolute inset-0 opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7">
            {/* Brand Logo & Positioning Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-3.5 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald animate-pulse" />
              <span>B2B Operational Intelligence · United Kingdom</span>
            </div>

            {/* Main Tagline Heading */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl font-serif leading-[1.1]">
              See More. <br className="hidden sm:inline" />
              <span className="text-emerald">Lose Less.</span>
            </h1>

            {/* Supporting Headline */}
            <p className="mt-4 text-xl font-medium text-slate-800 sm:text-2xl">
              AI-Powered Operational Intelligence for a More Profitable Food Future
            </p>

            {/* Supporting Copy */}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              PredictivIQ helps multi-site hospitality operators uncover the real causes behind
              stock loss, waste and operational variance — so managers can act on the issues that
              matter most.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pilot"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-dark hover:shadow-lg active:scale-95"
              >
                Request a Pilot
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-navy shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                See How It Works
              </a>
            </div>

            {/* Key Operational Pillars (Visual Badges) */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-lg border border-slate-200/90 bg-white/80 p-3 shadow-xs">
                <Layers className="size-4 text-emerald mb-1.5" />
                <p className="text-xs font-bold text-navy">POS + Inventory</p>
                <p className="text-[11px] text-slate-500">Waste + Deliveries</p>
              </div>
              <div className="rounded-lg border border-slate-200/90 bg-white/80 p-3 shadow-xs">
                <TrendingUp className="size-4 text-emerald mb-1.5" />
                <p className="text-xs font-bold text-navy">Daily Intelligence</p>
                <p className="text-[11px] text-slate-500">Variance diagnosis</p>
              </div>
              <div className="rounded-lg border border-slate-200/90 bg-white/80 p-3 shadow-xs">
                <AlertTriangle className="size-4 text-amber-500 mb-1.5" />
                <p className="text-xs font-bold text-navy">Cost-Ranked</p>
                <p className="text-[11px] text-slate-500">High-impact alerts</p>
              </div>
              <div className="rounded-lg border border-slate-200/90 bg-white/80 p-3 shadow-xs">
                <Building2 className="size-4 text-emerald mb-1.5" />
                <p className="text-xs font-bold text-navy">Multi-Site</p>
                <p className="text-[11px] text-slate-500">Portfolio visibility</p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Operational Visual & Dashboard Simulation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Simulated Tablet / Dashboard Card */}
              <div className="glass-dark overflow-hidden rounded-2xl p-6 text-white shadow-2xl ring-1 ring-white/10">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/logo-emblem.png"
                      alt="PredictivIQ Emblem"
                      className="size-9 object-contain"
                    />
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-emerald-300">
                        Operational Intelligence Layer
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Daily Reconciliation Engine
                      </p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald/20 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-ping" />
                    LIVE
                  </span>
                </div>

                {/* Stream Data Ingestion Indicators */}
                <div className="mt-4 grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                  <div className="rounded-md bg-white/5 py-1.5 px-1 border border-white/5">
                    <span className="text-emerald-400 block font-semibold">POS</span>
                    <span className="text-slate-400 text-[9px]">Synced</span>
                  </div>
                  <div className="rounded-md bg-white/5 py-1.5 px-1 border border-white/5">
                    <span className="text-emerald-400 block font-semibold">STOCK</span>
                    <span className="text-slate-400 text-[9px]">Audited</span>
                  </div>
                  <div className="rounded-md bg-white/5 py-1.5 px-1 border border-white/5">
                    <span className="text-emerald-400 block font-semibold">DELIVERY</span>
                    <span className="text-slate-400 text-[9px]">Matched</span>
                  </div>
                  <div className="rounded-md bg-white/5 py-1.5 px-1 border border-white/5">
                    <span className="text-emerald-400 block font-semibold">WASTE</span>
                    <span className="text-slate-400 text-[9px]">Logged</span>
                  </div>
                </div>

                {/* Priority Cost-Ranked Alert Card */}
                <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-flex items-center gap-1 rounded bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                        HIGH PRIORITY VARIANCE
                      </span>
                      <h4 className="mt-2 text-base font-bold text-white">
                        Whole Milk 2L & Arabica Blend
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-300">
                        Likely Cause:{" "}
                        <strong className="text-emerald-300">Portioning Drift & Spillage</strong>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-lg font-extrabold text-amber-300">-£284.50</p>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-900/60 px-1.5 py-0.5 rounded">
                        94% confidence
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-xs text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 text-emerald-400" />
                      Suggested: Barista portion calibration
                    </span>
                    <span className="font-mono text-[11px] text-emerald-300 underline cursor-pointer">
                      Action →
                    </span>
                  </div>
                </div>

                {/* Multi-Site Benchmarking Mini-Widget */}
                <div className="mt-4 space-y-2 rounded-xl bg-white/5 p-3.5 border border-white/5">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-300">
                    <span>Estate Shrinkage Performance</span>
                    <span className="text-emerald-400 font-mono text-[11px]">
                      8 Sites Connected
                    </span>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">Site 01 · Oxford Circus</span>
                      <span className="font-mono text-emerald-300">0.8% variance (Top)</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10">
                      <div className="h-1.5 rounded-full bg-emerald" style={{ width: "92%" }} />
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-slate-300">Site 04 · Soho Square</span>
                      <span className="font-mono text-amber-300">3.4% variance (Review)</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/10">
                      <div className="h-1.5 rounded-full bg-amber-400" style={{ width: "66%" }} />
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <p className="font-mono text-[11px] text-slate-400">
                    "Don't just see how much you lost. Understand why it happened and where to act
                    first."
                  </p>
                </div>
              </div>

              {/* Floating badge for added visual depth */}
              <div className="absolute -bottom-5 -left-4 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xl sm:-left-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald">
                    <TrendingUp className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">Estate Action Rate</p>
                    <p className="font-mono text-base font-bold text-navy">91.4% Resolved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
