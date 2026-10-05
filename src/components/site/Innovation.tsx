import { XCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export function Innovation() {
  const traditional = [
    {
      title: "Sales report",
      desc: "Shows what was rung through the till, blind to stock depletion differences.",
    },
    {
      title: "Stock report",
      desc: "Reveals missing volume weeks late without explaining the underlying cause.",
    },
    {
      title: "Waste report",
      desc: "Logs kitchen bin discards, missing portion drift, supplier shortfall and till variance.",
    },
    {
      title: "Spreadsheet",
      desc: "Hours of manual cross-referencing that leaves issues recurring every week.",
    },
  ];

  const predictiviq = [
    {
      title: "Connected data",
      desc: "Automated daily ingestion unifying POS, stock counts, supplier dockets and waste logs.",
    },
    {
      title: "Root-cause intelligence",
      desc: "Classifies variances into actionable causes with transparent confidence scores.",
    },
    {
      title: "Cost-ranked action",
      desc: "Ranks discrepancies by immediate pound (£) impact so teams focus on high-value loss.",
    },
    {
      title: "Continuous improvement",
      desc: "Logs corrective actions and tracks measurable gross margin recovery over time.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[800px] rounded-full bg-emerald/15 blur-[160px] pointer-events-none" />
      <div className="grid-lines-dark absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Categorical Difference
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif">
            Beyond Reporting. Into Diagnosis.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Traditional restaurant tools only record what happened in isolated silos. PredictivIQ
            delivers the missing intelligence layer that connects the dots and explains why.
          </p>
        </div>

        {/* Side-by-Side High Contrast Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* TRADITIONAL SIDE */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-xl backdrop-blur-md sm:p-9">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                  Legacy Operations
                </span>
                <h3 className="text-xl font-bold text-slate-200 font-serif mt-0.5">TRADITIONAL</h3>
              </div>
              <span className="rounded-full bg-red-500/10 px-3 py-1 font-mono text-xs font-bold text-red-400 border border-red-500/20">
                Disconnected Silos
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {traditional.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:bg-white/[0.05]"
                >
                  <div className="flex items-start gap-3">
                    <XCircle className="size-5 shrink-0 text-red-400 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white/[0.02] p-4 border border-white/5 text-xs text-slate-400">
              <strong className="text-slate-300">The Problem:</strong> Disconnected records leave
              venue managers guessing which losses require attention first.
            </div>
          </div>

          {/* PREDICTIVIQ SIDE */}
          <div className="rounded-3xl border-2 border-emerald-500/60 bg-emerald-950/30 p-7 shadow-2xl backdrop-blur-md sm:p-9 ring-1 ring-emerald-500/30">
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Modern Intelligence Layer
                </span>
                <h3 className="text-xl font-bold text-white font-serif mt-0.5">PREDICTIVIQ</h3>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 font-mono text-xs font-bold text-emerald-300 border border-emerald-500/30">
                Unified Diagnosis
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {predictiviq.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-emerald-500/20 bg-emerald-900/20 p-4 transition hover:bg-emerald-900/30"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-400 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-300">{item.title}</h4>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-emerald-900/40 p-4 border border-emerald-500/40 text-xs text-emerald-200">
              <strong className="text-white">The PredictivIQ Edge:</strong> Automated root-cause
              attribution ranked in pounds (£) ready for morning store briefings.
            </div>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 text-center">
          <a
            href="#pilot"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-emerald-dark"
          >
            Request a Pilot on Your Estate Data
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
