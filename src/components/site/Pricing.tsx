import { PRICING_PLANS } from "@/lib/site-data";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Commercial Structure
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            Transparent Pricing That Scales With Your Estate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Directly aligned with your operational footprint. Every tier is designed to deliver
            immediate return on investment by recapturing margin leakages.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all ${
                plan.featured
                  ? "border-2 border-emerald-500 bg-white shadow-xl ring-4 ring-emerald-500/10"
                  : "border border-slate-200 bg-slate-50/60 shadow-xs hover:border-slate-300"
              }`}
            >
              <div>
                {plan.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-emerald px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                    Primary Service
                  </span>
                )}

                <h3 className="text-lg font-bold text-navy font-serif">{plan.name}</h3>

                <p className="mt-2 text-xs text-slate-500 min-h-[32px]">{plan.description}</p>

                {/* Price Display */}
                <div className="mt-5 border-y border-slate-200/80 py-4">
                  <p className="font-mono text-3xl font-extrabold text-navy font-serif">
                    {plan.price}
                  </p>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald">
                    {plan.cadence}
                  </p>
                </div>

                {/* Highlights List */}
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-200/60">
                <a
                  href="#pilot"
                  className={`inline-flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold transition shadow-xs ${
                    plan.featured
                      ? "bg-emerald text-white hover:bg-emerald-dark"
                      : "bg-navy text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Subtitle & Clarification */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          Pricing scales with estate size and requirements. Contact our team to scope a trial period
          on your operational data.
        </div>
      </div>
    </section>
  );
}
