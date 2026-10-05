import { Check, X, Shield, ArrowRight, Layers, Sparkles } from "lucide-react";

export function CompetitiveDiff() {
  const comparison = [
    {
      category: "EPOS REPORTING",
      focus: "Sales and stock reporting",
      scope:
        "Tracks transactions rung through the till and theoretical stock deductions based on preset recipe templates.",
      limitation:
        "Does not explain why physical stock deviates from expected levels, missing portion drift and delivery errors.",
      predictiviq:
        "Connects POS sales to actual shelf counts, delivery notes, and daily waste logs.",
      highlight: false,
    },
    {
      category: "FOOD-WASTE TOOLS",
      focus: "Waste-focused monitoring",
      scope:
        "Specialized kitchen scales and photo cameras logging food scraps and plate returns at the disposal point.",
      limitation:
        "Captures bin waste accurately, but remains blind to supplier short-deliveries, portion drift, and till shrink.",
      predictiviq: "Comprehensive 360° shrinkage diagnosis across the entire stock-to-sale chain.",
      highlight: false,
    },
    {
      category: "MANUAL SPREADSHEETS",
      focus: "Manual and delayed analysis",
      scope:
        "End-of-month stocktaking spreadsheets managed manually by venue managers and head office accountants.",
      limitation:
        "Labor-intensive, prone to human transposition errors, and delivered weeks after margin losses have already compounded.",
      predictiviq: "Automated daily reconciliation with instant cost-ranked variance alerts.",
      highlight: false,
    },
    {
      category: "PREDICTIVIQ",
      focus: "Operational intelligence layer",
      scope:
        "Dedicated intelligence platform built specifically for multi-site café, QSR, and restaurant operators.",
      limitation:
        "Integrates directly above your existing tech stack with zero disruption to daily trading.",
      predictiviq: "Cross-source reconciliation + Root-cause attribution + Cost-ranked action",
      highlight: true,
    },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Industry Landscape
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            Competitive Positioning
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            How PredictivIQ complements your existing hospitality tech stack by delivering the
            missing diagnostic intelligence layer.
          </p>
        </div>

        {/* 4 Cards Comparison */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {comparison.map((item) => (
            <div
              key={item.category}
              className={`relative flex flex-col justify-between rounded-3xl p-6 transition-all ${
                item.highlight
                  ? "border-2 border-emerald-500 bg-white shadow-xl ring-4 ring-emerald-500/10"
                  : "border border-slate-200 bg-white/90 shadow-xs hover:border-slate-300"
              }`}
            >
              <div>
                {item.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-emerald px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                    PredictivIQ Solution
                  </span>
                )}

                <h3
                  className={`text-lg font-bold font-serif ${
                    item.highlight ? "text-emerald" : "text-navy"
                  }`}
                >
                  {item.category}
                </h3>

                <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.focus}
                </p>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100 text-xs">
                    <span className="font-mono text-[10px] uppercase text-slate-400 font-bold block mb-1">
                      Operational Scope
                    </span>
                    <p className="text-slate-600 leading-relaxed">{item.scope}</p>
                  </div>

                  <div
                    className={`rounded-xl p-3.5 border text-xs ${
                      item.highlight
                        ? "bg-emerald-50/70 border-emerald-200 text-navy"
                        : "bg-slate-50/60 border-slate-100 text-slate-600"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] uppercase font-bold block mb-1 ${
                        item.highlight ? "text-emerald-800" : "text-slate-400"
                      }`}
                    >
                      {item.highlight ? "Unified Capability" : "Key Boundary"}
                    </span>
                    <p className="leading-relaxed font-medium">{item.predictiviq}</p>
                  </div>
                </div>
              </div>

              {item.highlight && (
                <div className="mt-6 pt-4 border-t border-emerald-100">
                  <a
                    href="#pilot"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald py-2.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-dark"
                  >
                    Request a Pilot
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Category Note */}
        <div className="mt-12 rounded-2xl bg-white p-5 border border-slate-200 text-xs text-slate-600 max-w-3xl mx-auto text-center shadow-2xs">
          <strong>Category Distinction:</strong> PredictivIQ does not attempt to replace your EPOS
          or inventory database. It sits securely above them to cross-reconcile data daily and
          attribute root causes.
        </div>
      </div>
    </section>
  );
}
