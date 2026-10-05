import { COMPETITIVE_DIFFERENTIATION } from "@/lib/site-data";
import { Check, X, Shield, ArrowRight } from "lucide-react";

export function CompetitiveDiff() {
  return (
    <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Market Distinction
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            A Clear Operational Distinction
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            How PredictivIQ compares to existing category solutions in the hospitality operations
            and food-service ecosystem.
          </p>
        </div>

        {/* Visual Differentiation Matrix Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COMPETITIVE_DIFFERENTIATION.map((item) => {
            const isHighlight = "highlight" in item && item.highlight;
            return (
              <div
                key={item.solution}
                className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all ${
                  isHighlight
                    ? "border-2 border-emerald-500 bg-white shadow-xl ring-4 ring-emerald-500/10"
                    : "border border-slate-200 bg-white/80 shadow-xs"
                }`}
              >
                <div>
                  {isHighlight && (
                    <span className="absolute -top-3 left-6 rounded-full bg-emerald px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                      Intelligence Layer
                    </span>
                  )}

                  <h3
                    className={`text-lg font-bold font-serif ${isHighlight ? "text-emerald" : "text-navy"}`}
                  >
                    {item.solution}
                  </h3>

                  <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {item.focus}
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Operational Scope
                      </p>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {item.limitation}
                      </p>
                    </div>

                    <div
                      className={`rounded-xl p-3 border ${isHighlight ? "bg-emerald-50/70 border-emerald-200" : "bg-white border-slate-200"}`}
                    >
                      <p className="text-[11px] font-mono uppercase tracking-wider text-emerald-800">
                        Key Capability
                      </p>
                      <p className="mt-1 text-xs font-medium text-navy leading-relaxed">
                        {item.predictiviqEdge}
                      </p>
                    </div>
                  </div>
                </div>

                {isHighlight && (
                  <div className="mt-6 pt-4 border-t border-emerald-100 text-center">
                    <a
                      href="#pilot"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald py-2.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-dark"
                    >
                      Request a Pilot
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Professional Category Reference Note */}
        <div className="mt-12 rounded-xl bg-slate-100/80 p-4 text-center border border-slate-200 text-xs text-slate-600 max-w-3xl mx-auto">
          <strong>Category Context:</strong> While dedicated food-waste measurement tools (such as
          Winnow, Kitro, or Leanpath) focus primarily on kitchen bin tracking, PredictivIQ
          reconciles the full multi-site stock-to-sale chain across POS, deliveries, and till
          transactions.
        </div>
      </div>
    </section>
  );
}
