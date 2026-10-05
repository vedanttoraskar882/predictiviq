import { XCircle, CheckCircle, ArrowRight, Database, AlertCircle, Sparkles } from "lucide-react";
import { PROBLEM_COMPARISON } from "@/lib/site-data";

export function Problem() {
  return (
    <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            The Core Operational Challenge
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            Your data tells you WHAT happened. <br />
            <span className="text-emerald">PredictivIQ helps explain WHY.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Multi-site hospitality businesses generate vast amounts of operational data every day
            across POS, stocktakes, waste bins, and delivery dockets. But because these tools
            operate in silos, managers are left manually comparing disconnected reports.
          </p>
        </div>

        {/* Visual Problem vs Solution Comparison Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Traditional Disconnected Approach */}
          <div className="rounded-2xl border border-red-200/80 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <XCircle className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">The Disconnected Reality</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                  Raw Data → Unexplained Variance → Delayed Investigation
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {PROBLEM_COMPARISON.traditional.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="size-4 shrink-0 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-red-50/70 p-4 border border-red-100 text-xs text-red-800">
              <strong>The Cost:</strong> Repeated operational losses, hours wasted on spreadsheets,
              and no clear answer on which site issues to tackle first.
            </div>
          </div>

          {/* The PredictivIQ Intelligence Layer */}
          <div className="rounded-2xl border border-emerald-200 bg-white p-7 shadow-md sm:p-8 ring-1 ring-emerald-500/20">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald">
                <Sparkles className="size-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">The PredictivIQ Solution</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-emerald">
                  Connected Data → Intelligent Diagnosis → Prioritised Action
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {PROBLEM_COMPARISON.predictiviq.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-4 shrink-0 text-emerald mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-navy">{item.label}</p>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-emerald-50/80 p-4 border border-emerald-200 text-xs text-emerald-900">
              <strong>The Result:</strong> Sits securely above your current EPOS and inventory.
              Instant root-cause attribution ranked in pounds (£), ready for site action.
            </div>
          </div>
        </div>

        {/* Transition callout */}
        <div className="mt-12 rounded-2xl bg-navy p-6 text-white shadow-xl sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-300">
                Zero Replacement Required
              </p>
              <h4 className="mt-1 text-xl font-bold text-white font-serif">
                PredictivIQ is an intelligence layer — not another EPOS or inventory tool.
              </h4>
              <p className="mt-1 text-sm text-slate-300 max-w-2xl">
                Keep your existing point-of-sale and stock software. PredictivIQ connects directly
                to your systems, reconciles movements daily, and surfaces actionable root causes.
              </p>
            </div>
            <a
              href="#platform"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-dark"
            >
              Explore Platform
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
