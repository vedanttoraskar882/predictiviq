import {
  ArrowDown,
  Database,
  Cpu,
  Sparkles,
  AlertCircle,
  FileText,
  CheckCircle2,
} from "lucide-react";

export function DataFlow() {
  const inputs = [
    { title: "POS Sales Data", desc: "Menu item sales & timestamps", icon: "POS" },
    { title: "Physical Inventory", desc: "Opening & closing counts", icon: "INV" },
    { title: "Supplier Deliveries", desc: "Received dockets & invoices", icon: "SUP" },
    { title: "Kitchen Waste Logs", desc: "Recorded bin & prep discards", icon: "WST" },
  ];

  const outcomes = [
    {
      title: "Daily Variance Reconciliation",
      desc: "Theoretical recipe usage vs actual stock counts",
      badge: "Reconcile",
    },
    {
      title: "Root-Cause Attribution",
      desc: "Spoilage, portion drift, till errors, or theft risk",
      badge: "AI Scored",
    },
    {
      title: "Cost-Ranked Daily Alerts",
      desc: "Prioritised list ordered strictly by financial impact (£)",
      badge: "Priority",
    },
    {
      title: "Corrective Action & Board Reports",
      desc: "Logged site actions and measurable yield recovery",
      badge: "Closed-Loop",
    },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Connected Architecture
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            From Disconnected Operational Data to Clear, Cost-Ranked Action
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            See how PredictivIQ bridges your existing venue systems to turn chaotic operational
            signals into clear, verified root-cause diagnoses.
          </p>
        </div>

        {/* Visual Pipeline Container */}
        <div className="mt-16 mx-auto max-w-4xl">
          {/* Phase 1: Operational Inputs */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-xs">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center">
              Phase 01 · Ingesting Existing Venue Data (Zero Hardware)
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {inputs.map((inp) => (
                <div
                  key={inp.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-xs"
                >
                  <span className="font-mono text-xs font-bold text-emerald">{inp.icon}</span>
                  <p className="mt-1 text-xs font-bold text-navy">{inp.title}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{inp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex flex-col items-center my-4">
            <div className="h-6 w-0.5 bg-emerald/40 animate-pulse" />
            <div className="flex size-8 items-center justify-center rounded-full bg-emerald text-white shadow-sm">
              <ArrowDown className="size-4" />
            </div>
            <div className="h-6 w-0.5 bg-emerald/40 animate-pulse" />
          </div>

          {/* Phase 2: PredictivIQ Intelligence Core */}
          <div className="relative rounded-2xl bg-navy p-7 text-white shadow-xl ring-1 ring-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-emerald/20 blur-2xl pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                  <Cpu className="size-7 text-emerald-400" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-emerald-300">
                    <Sparkles className="size-3.5" />
                    Proprietary Attribution Engine
                  </span>
                  <h3 className="text-xl font-bold text-white font-serif">
                    PredictivIQ Reconciliation & Attribution Layer
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 max-w-xl">
                    Calculates SKU-level theoretical consumption, correlates supply dockets,
                    identifies recipes with portion drift, and assigns diagnostic confidence scores.
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-white/10 px-4 py-2.5 border border-white/10 text-center shrink-0">
                <p className="font-mono text-sm font-bold text-emerald-300">Automated Daily</p>
                <p className="text-[10px] text-slate-300 font-mono">Overnight Pipeline</p>
              </div>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="flex flex-col items-center my-4">
            <div className="h-6 w-0.5 bg-emerald/40 animate-pulse" />
            <div className="flex size-8 items-center justify-center rounded-full bg-emerald text-white shadow-sm">
              <ArrowDown className="size-4" />
            </div>
            <div className="h-6 w-0.5 bg-emerald/40 animate-pulse" />
          </div>

          {/* Phase 3: Actionable Operational Outputs */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 shadow-sm">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 mb-4 text-center">
              Phase 02 · Cost-Ranked Action & Continuous Improvement
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((out) => (
                <div
                  key={out.title}
                  className="rounded-xl border border-emerald-200/80 bg-white p-4 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-emerald bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {out.badge}
                    </span>
                    <CheckCircle2 className="size-4 text-emerald" />
                  </div>
                  <p className="mt-2 text-sm font-bold text-navy">{out.title}</p>
                  <p className="mt-0.5 text-xs text-slate-600">{out.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
