import { Link } from "@tanstack/react-router";
import { ArrowRight, Layers, TrendingUp, AlertTriangle, Building2, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-12 pb-20 md:pt-16 md:pb-28"
    >
      {/* Subtle architectural grid & ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-soft blur-3xl opacity-70" />
        <div className="absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-sky-50 blur-3xl opacity-60" />
        <div className="grid-lines absolute inset-0 opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Editorial Messaging */}
          <div className="lg:col-span-6">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-3.5 py-1 text-xs font-semibold text-emerald-900 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald animate-pulse" />
              <span className="font-mono uppercase tracking-wider text-[11px]">
                PREDICTIVIQ LTD
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-navy sm:text-6xl lg:text-7xl font-serif leading-[1.05]">
              SEE MORE. <br />
              <span className="text-emerald">LOSE LESS.</span>
            </h1>

            {/* Supporting Headline */}
            <p className="mt-5 text-xl font-medium text-slate-800 sm:text-2xl leading-snug">
              AI-Powered Operational Intelligence for a More Profitable Food Future
            </p>

            {/* Short Paragraph */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              PredictivIQ helps multi-site hospitality operators uncover the causes behind stock
              loss, waste and operational variance — so teams can act on the problems that matter
              most.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/request-a-pilot"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-dark hover:shadow-lg active:scale-95"
              >
                REQUEST A PILOT
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-navy shadow-xs transition-all hover:border-slate-400 hover:bg-slate-50"
              >
                EXPLORE PLATFORM
              </Link>
            </div>

            {/* Key Operational Pillars (Visual Indicators) */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-xl border border-slate-200/90 bg-white/80 p-3.5 shadow-xs">
                <Layers className="size-4 text-emerald mb-1.5" />
                <p className="text-xs font-bold text-navy">POS & Inventory</p>
                <p className="text-[11px] text-slate-500">Continuous match</p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-white/80 p-3.5 shadow-xs">
                <TrendingUp className="size-4 text-emerald mb-1.5" />
                <p className="text-xs font-bold text-navy">Root-Cause AI</p>
                <p className="text-[11px] text-slate-500">Confidence scored</p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-white/80 p-3.5 shadow-xs">
                <AlertTriangle className="size-4 text-amber-500 mb-1.5" />
                <p className="text-xs font-bold text-navy">Cost Ranked</p>
                <p className="text-[11px] text-slate-500">Immediate £ focus</p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-white/80 p-3.5 shadow-xs">
                <Building2 className="size-4 text-emerald mb-1.5" />
                <p className="text-xs font-bold text-navy">Multi-Site</p>
                <p className="text-[11px] text-slate-500">Estate visibility</p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Hospitality Photo & Floating Glass Data Cards */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Visual: High-res hospitality photography container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="High-end hospitality venue dining room and bar"
                  className="h-full w-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
                  loading="eager"
                />

                {/* Subtle gradient vignette over image to anchor floating UI */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />

                {/* Bottom Bar on photo: Intelligence status */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-navy/85 px-4 py-2.5 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald animate-ping" />
                    <span className="font-mono text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                      PredictivIQ Live Stream
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-300">
                    POS · Stock · Delivery · Waste
                  </span>
                </div>
              </div>

              {/* Floating Glass Card 1: Daily Variance & Likely Cause (Top Right) */}
              <div className="absolute -top-6 -right-3 sm:-top-8 sm:-right-6 w-64 rounded-2xl glass-dark p-4 shadow-xl border border-white/15 text-white animate-floaty">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    DAILY VARIANCE
                  </span>
                  <span className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[10px] font-bold text-amber-300">
                    High Alert
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="font-mono text-2xl font-extrabold text-amber-300">£1,240</span>
                  <span className="font-mono text-[11px] text-slate-400">Estate total</span>
                </div>
                <div className="mt-2.5 rounded-lg bg-white/5 p-2 border border-white/5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-300">LIKELY CAUSE</span>
                    <span className="font-semibold text-emerald-400">PORTION DRIFT</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">CONFIDENCE</span>
                    <span className="font-mono font-bold text-emerald-300">87%</span>
                  </div>
                </div>
              </div>

              {/* Floating Glass Card 2: Supplier Shortfall (Bottom Left) */}
              <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 w-60 rounded-2xl bg-white/95 p-4 shadow-xl border border-slate-200/90 text-navy backdrop-blur-md animate-floaty2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    SUPPLIER SHORTFALL
                  </span>
                  <span className="flex size-2 rounded-full bg-red-500" />
                </div>
                <div className="mt-2">
                  <p className="font-mono text-xl font-extrabold text-navy">3 SITES</p>
                  <p className="mt-0.5 text-xs text-slate-600">Dairy short-shipment flagged</p>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-emerald">
                  <span>Credit query drafted</span>
                  <span>→</span>
                </div>
              </div>

              {/* Floating Glass Card 3: Priority Alert (Top Left) */}
              <div className="hidden sm:flex absolute top-10 -left-6 items-center gap-2.5 rounded-xl glass px-3.5 py-2 shadow-lg border border-slate-200/80">
                <div className="flex size-7 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <AlertTriangle className="size-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    PRIORITY ALERT
                  </p>
                  <p className="text-xs font-bold text-red-600">HIGH</p>
                </div>
              </div>

              {/* Illustrative Simulation Notice */}
              <div className="mt-12 text-center">
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 font-mono text-[10px] text-slate-500">
                  Illustrative UI simulation · Real-time operational intelligence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
