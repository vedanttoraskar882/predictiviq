import { Zap, ShieldCheck, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export function Innovation() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Core Innovation
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif">
            Beyond Reporting. Into Diagnosis.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Traditional tools show what was sold, what stock remains, or what was discarded at the
            bin. PredictivIQ brings those signals together to solve the fundamental missing link in
            hospitality operations.
          </p>
        </div>

        {/* 3 Strong Highlight Badges */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
              Distinction 01
            </span>
            <p className="mt-2 text-lg font-bold text-white font-serif">Not another waste log.</p>
            <p className="mt-1 text-xs text-slate-300">
              Bin-tracking tools capture only a fraction of total estate shrinkage.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
              Distinction 02
            </span>
            <p className="mt-2 text-lg font-bold text-white font-serif">
              Not another stock report.
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Inventory numbers tell you stock is missing, but never why it happened.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-6 backdrop-blur-sm ring-1 ring-emerald-500/30">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
              Distinction 03
            </span>
            <p className="mt-2 text-lg font-bold text-emerald-300 font-serif">
              The intelligence layer connecting the two.
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Automated attribution linking the entire stock-to-sale cycle.
            </p>
          </div>
        </div>

        {/* Deep Dive Diagnosis Card */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-8 max-w-5xl mx-auto shadow-2xl backdrop-blur-md">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                <Sparkles className="size-3.5" />
                The Attribution Layer
              </div>
              <h3 className="mt-3 text-2xl font-bold text-white font-serif">
                Connecting the Stock-to-Sale Chain
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                By comparing recipe depletion rates, supplier delivery manifests, EPOS order voids,
                and daily waste logs, PredictivIQ isolates where margin leakage occurs. Every
                significant variance is confidence-scored and ranked in pounds (£).
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Spoilage vs Prep Discards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Portioning Drift Isolation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Supplier Shortfall Matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>Till & Void Pattern Analysis</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-xl border border-emerald-500/30 bg-emerald-950/50 p-6 text-center">
              <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                Core Value Proposition
              </p>
              <blockquote className="mt-3 text-lg font-bold text-white font-serif leading-snug">
                "Don't just see how much you lost. Understand why it happened and where to act
                first."
              </blockquote>
              <a
                href="#pilot"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald px-5 py-2.5 text-xs font-semibold text-white shadow transition hover:bg-emerald-dark"
              >
                Request a Pilot Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
