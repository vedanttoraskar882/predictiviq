import { Link2, Layers, Search, TrendingUp, CheckCircle, Award } from "lucide-react";

export function Workflow() {
  const steps = [
    {
      num: "01",
      name: "CONNECT",
      title: "Data Ingestion",
      sub: "POS · Inventory · Delivery · Waste",
      desc: "Connects securely to your existing EPOS, stock databases, supplier invoices, and kitchen waste logs with zero disruption to daily trading.",
      icon: Link2,
    },
    {
      num: "02",
      name: "RECONCILE",
      title: "Theoretical vs Actual",
      sub: "Automated Recipe Depletion",
      desc: "Automatically compares theoretical ingredient usage calculated from POS sales against physical stock balance counts by site and SKU.",
      icon: Layers,
    },
    {
      num: "03",
      name: "DIAGNOSE",
      title: "Root-Cause Attribution",
      sub: "Confidence Scored Causes",
      desc: "Diagnoses anomalies into likely operational causes: spoilage, prep discard, portion drift, supplier shortfall, till error, or theft risk.",
      icon: Search,
    },
    {
      num: "04",
      name: "PRIORITISE",
      title: "Financial Ranking",
      sub: "Ranked by Pounds (£)",
      desc: "Filters out trivial noise to present store and area managers with high-value, actionable discrepancies ranked in order of financial materiality.",
      icon: TrendingUp,
    },
    {
      num: "05",
      name: "ACT",
      title: "Record Corrective Action",
      sub: "Store Team Workflow",
      desc: "Venue teams log targeted interventions with one tap: supplier credit queries, barista portion retraining, or till variance audits.",
      icon: CheckCircle,
    },
    {
      num: "06",
      name: "IMPROVE",
      title: "Measure Over Time",
      sub: "Continuous Yield Recovery",
      desc: "Tracks the resulting margin recovery and shrinkage reduction over subsequent trading periods with estate-wide benchmark reports.",
      icon: Award,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            The Operational Journey
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            How PredictivIQ Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            A frictionless, closed-loop diagnostic journey taking your operational data from raw
            disconnected signals to verified profit recovery.
          </p>
        </div>

        {/* 6 Connected Steps Grid with Flowing Visual Line */}
        <div className="relative mt-16">
          {/* Subtle flowing connector line in desktop background */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 -translate-y-12 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600 rounded-full opacity-30 pointer-events-none" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-extrabold text-emerald">{s.num}</span>
                      <div className="flex size-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald group-hover:bg-emerald group-hover:text-white transition-colors">
                        <Icon className="size-4" />
                      </div>
                    </div>

                    {/* Step Name in bold caps */}
                    <p className="mt-4 font-mono text-xs font-black uppercase tracking-wider text-navy">
                      {s.name}
                    </p>

                    <h3 className="mt-1 text-sm font-bold text-slate-800 leading-snug">
                      {s.title}
                    </h3>

                    <p className="mt-1 font-mono text-[10px] font-semibold text-emerald-800">
                      {s.sub}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600">{s.desc}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400 group-hover:text-emerald transition-colors">
                    <span>Phase 0{idx + 1}</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Journey Bottom Quote Banner */}
        <div className="mt-14 rounded-2xl border border-emerald-200 bg-white p-6 text-center shadow-xs max-w-3xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-800 font-bold mb-1">
            Closed-Loop Accountability
          </p>
          <p className="text-base font-bold text-navy font-serif sm:text-lg">
            "Don't just see how much you lost. Understand why it happened and where to act first."
          </p>
        </div>
      </div>
    </section>
  );
}
