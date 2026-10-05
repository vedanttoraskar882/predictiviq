import {
  Layers,
  Sparkles,
  TrendingDown,
  Truck,
  Scale,
  Receipt,
  Building2,
  CheckSquare,
  ArrowRight,
} from "lucide-react";

export function Platforms() {
  const capabilities = [
    {
      title: "Daily Stock Reconciliation",
      desc: "Automatically reconciles theoretical consumption from sales against physical counts by SKU.",
      icon: Layers,
      position: "left-1",
    },
    {
      title: "Root-Cause Attribution",
      desc: "Classifies discrepancy patterns with statistical confidence scores so teams know where to look.",
      icon: Sparkles,
      position: "left-2",
    },
    {
      title: "Cost-Ranked Alerts",
      desc: "Prioritises issues strictly by immediate financial impact in pounds (£) rather than trivial percentages.",
      icon: TrendingDown,
      position: "left-3",
    },
    {
      title: "Supplier Shortfall Detection",
      desc: "Cross-checks invoice delivery notes against POs and received weights to capture short-deliveries.",
      icon: Truck,
      position: "left-4",
    },
    {
      title: "Portion Drift Detection",
      desc: "Detects subtle over-portioning in real-time before cumulative margin erosion occurs.",
      icon: Scale,
      position: "right-1",
    },
    {
      title: "Till Variance Flagging",
      desc: "Identifies abnormal voids, discount trends, comps, and cash discrepancies across till sessions.",
      icon: Receipt,
      position: "right-2",
    },
    {
      title: "Multi-Site Benchmarking",
      desc: "Normalises operational performance across venues, trading dayparts, and operational regions.",
      icon: Building2,
      position: "right-3",
    },
    {
      title: "Corrective Action Tracking",
      desc: "Logs manager interventions (retraining, supplier claims) and verifies resulting financial recovery.",
      icon: CheckSquare,
      position: "right-4",
    },
  ];

  return (
    <section id="platform" className="border-t border-slate-200/80 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            The Intelligence Architecture
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            One Intelligence Layer Across Your Operation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            PredictivIQ delivers unified cross-system intelligence. Instead of jumping between eight
            different siloed reports, managers monitor eight automated capabilities in one central
            cockpit.
          </p>
        </div>

        {/* Central Dashboard Layout with Surrounding Feature Callouts */}
        <div className="mt-16 grid items-center gap-8 lg:grid-cols-12">
          {/* Left Column Callouts (4 capabilities) */}
          <div className="space-y-4 lg:col-span-3">
            {capabilities.slice(0, 4).map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 transition-all hover:border-emerald-300 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-100/80 text-emerald-800">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="text-sm font-bold text-navy leading-snug">{cap.title}</h3>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Central Product Interface Cockpit (6 cols) */}
          <div className="lg:col-span-6">
            <div className="glass-dark overflow-hidden rounded-3xl p-6 text-white shadow-2xl ring-1 ring-white/15">
              {/* Cockpit Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <img src="/logo-emblem.png" alt="Emblem" className="h-8 w-auto object-contain" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                      PredictivIQ Master Cockpit
                    </p>
                    <p className="text-xs font-bold text-white">Central Operations Layer</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                  Estate Mode · 8 Sites
                </span>
              </div>

              {/* Central Visual Telemetry Stream */}
              <div className="mt-5 rounded-2xl bg-white/5 p-4 border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Live Telemetry Ingestion</span>
                  <span className="text-emerald-400">99.8% Synchronised</span>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                  <div className="rounded-lg bg-white/5 py-2 border border-white/5">
                    <span className="block text-emerald-400 font-bold">POS</span>
                    <span className="text-slate-400 text-[9px]">4,120 txns</span>
                  </div>
                  <div className="rounded-lg bg-white/5 py-2 border border-white/5">
                    <span className="block text-emerald-400 font-bold">STOCK</span>
                    <span className="text-slate-400 text-[9px]">182 SKUs</span>
                  </div>
                  <div className="rounded-lg bg-white/5 py-2 border border-white/5">
                    <span className="block text-emerald-400 font-bold">SUPPLIERS</span>
                    <span className="text-slate-400 text-[9px]">14 dockets</span>
                  </div>
                  <div className="rounded-lg bg-white/5 py-2 border border-white/5">
                    <span className="block text-emerald-400 font-bold">WASTE</span>
                    <span className="text-slate-400 text-[9px]">38 logs</span>
                  </div>
                </div>
              </div>

              {/* Primary Active Attribution Card */}
              <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="rounded bg-amber-400/20 px-2 py-0.5 text-[9px] font-mono font-bold text-amber-300">
                      HIGH ATTRIBUTION ALERT
                    </span>
                    <h4 className="mt-1.5 text-sm font-bold text-white">
                      Espresso Blend & Barista Oat 1L
                    </h4>
                    <p className="mt-0.5 text-xs text-slate-300">
                      Discrepancy: <span className="text-emerald-300 font-medium">£318.20</span> ·
                      Likely Cause:{" "}
                      <strong className="text-white">Portion Drift (Steam Wand Purge)</strong>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="rounded bg-emerald-900/80 px-2 py-1 font-mono text-[10px] font-bold text-emerald-300">
                      92% Conf.
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-[11px] text-slate-300">
                  <span>Action: Scheduled Barista Yield Calibration</span>
                  <span className="font-mono text-emerald-300 underline cursor-pointer">
                    View →
                  </span>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Autonomous Cross-Reconciliation</span>
                <span className="text-emerald-400">Zero manual spreadsheets</span>
              </div>
            </div>
          </div>

          {/* Right Column Callouts (4 capabilities) */}
          <div className="space-y-4 lg:col-span-3">
            {capabilities.slice(4, 8).map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 transition-all hover:border-emerald-300 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-100/80 text-emerald-800">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="text-sm font-bold text-navy leading-snug">{cap.title}</h3>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
