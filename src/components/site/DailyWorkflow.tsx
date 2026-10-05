import {
  Clock,
  CheckCircle2,
  User,
  Building,
  TrendingUp,
  Sparkles,
  FileText,
  ArrowRight,
} from "lucide-react";

export function DailyWorkflow() {
  const steps = [
    {
      time: "MORNING · 07:30",
      stage: "Overnight Alert Triage",
      actor: "Site Manager",
      desc: "Reviews overnight automated variance alerts flagged above store materiality thresholds before shift briefing.",
      detail: "£ Impact · Likely Cause · Confidence Score",
      badge: "Shift Briefing",
    },
    {
      time: "REVIEW · 10:00",
      stage: "Root Cause Review",
      actor: "Venue Manager",
      desc: "Reviews AI-suggested root causes: portion drift, supplier shortfall, or kitchen prep scrap.",
      detail: "Statistical attribution backed by POS & inventory",
      badge: "Cause Verification",
    },
    {
      time: "ACTION · 11:30",
      stage: "Cause Confirmation",
      actor: "Operations Lead",
      desc: "Confirms suggested cause or attaches operational notes/photo context with one tap.",
      detail: "Continuous system learning by venue pattern",
      badge: "Closed Loop",
    },
    {
      time: "CORRECTIVE ACTION · 14:00",
      stage: "Intervention Logging",
      actor: "Shift Supervisor",
      desc: "Records targeted corrective action: supplier credit claim, barista portion retraining, or till audit.",
      detail: "Supplier query · Retraining · Till check",
      badge: "Logged & Tracked",
    },
    {
      time: "WEEKLY · Monday 09:00",
      stage: "Area Performance Review",
      actor: "Area Manager",
      desc: "Reviews estate-wide league tables across all trading locations, identifying systemic supplier patterns.",
      detail: "Multi-site benchmarking & advisory call prep",
      badge: "Estate Governance",
    },
    {
      time: "MONTHLY · Day 1",
      stage: "Board & CFO Reporting",
      actor: "Head Office Leadership",
      desc: "Consolidated executive reporting detailing recovered margin (£), waste diversion, and action closure rates.",
      detail: "Board-ready PDF packs & financial ROI analysis",
      badge: "Executive Board",
    },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Operational Rhythm
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            A Day with PredictivIQ
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Engineered for the reality of hospitality trading shifts. From the morning floor
            briefing to executive monthly board packs, intelligence is embedded directly into
            everyday routines.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, idx) => (
            <div
              key={item.time}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <div>
                {/* Header Time Pill */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="font-mono text-xs font-bold text-emerald">{item.time}</span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-600">
                    {item.badge}
                  </span>
                </div>

                {/* Actor & Stage */}
                <div className="mt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    {item.actor}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-navy font-serif">{item.stage}</h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-emerald">
                <span>{item.detail}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Timeline Callout */}
        <div className="mt-14 rounded-2xl bg-navy p-6 text-white shadow-xl sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row text-center sm:text-left">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                Action-Oriented Intelligence
              </span>
              <p className="mt-1 text-base font-bold sm:text-lg font-serif">
                Turn overwhelming shift spreadsheets into 5 minutes of focused daily execution.
              </p>
            </div>
            <a
              href="#pilot"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-emerald-dark"
            >
              Request a Pilot
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
