import { CORE_FEATURES, ADDITIONAL_CAPABILITIES } from "@/lib/site-data";
import { CheckCircle2, Sparkles, Layers, ArrowUpRight } from "lucide-react";

export function Platforms() {
  return (
    <section id="platform" className="border-t border-slate-200/80 bg-slate-50/60 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            The PredictivIQ Platform
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            One Unified Platform. Eight Core Capabilities.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            PredictivIQ delivers the industry’s first automated reconciliation-and-attribution layer
            engineered specifically for multi-site food-service operators.
          </p>
        </div>

        {/* 8 Core Feature Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-emerald transition-colors">
                    {feature.step}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald border border-emerald-100">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-navy leading-snug">{feature.title}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600">{feature.summary}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-emerald transition-colors">
                <span>Verified Diagnostic</span>
                <ArrowUpRight className="size-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Capabilities Banner */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-emerald">
                <Sparkles className="size-4" />
                Extended Operational Modules
              </div>
              <h4 className="mt-1 text-xl font-bold text-navy font-serif">
                Comprehensive Operational Intelligence Suite
              </h4>
              <p className="mt-1 text-sm text-slate-600 max-w-2xl">
                Beyond core daily reconciliation, PredictivIQ equips venue managers, operational
                teams, and executive boards with purpose-built tools.
              </p>
            </div>
            <a
              href="#pilot"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-slate-800"
            >
              Request a Pilot
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ADDITIONAL_CAPABILITIES.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-xs font-semibold text-slate-800 transition hover:bg-emerald-50/50 hover:border-emerald-200"
              >
                <CheckCircle2 className="size-4 text-emerald shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
