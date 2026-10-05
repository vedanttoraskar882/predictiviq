import { useState } from "react";
import {
  TrendingDown,
  Trash2,
  Truck,
  AlertTriangle,
  Building2,
  CheckCircle2,
  Filter,
  ArrowUpRight,
  ShieldAlert,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function ProductDashboard() {
  const [activeSite, setActiveSite] = useState("all");

  const sites = [
    { name: "Oxford Circus", variance: "£142.10", pct: 0.8, status: "Normal", trend: "-12%" },
    { name: "Soho Square", variance: "£482.40", pct: 2.9, status: "Attention", trend: "+18%" },
    { name: "Covent Garden", variance: "£620.50", pct: 3.4, status: "Critical", trend: "+24%" },
    { name: "Shoreditch", variance: "£284.00", pct: 1.6, status: "Normal", trend: "-5%" },
    { name: "Kings Cross", variance: "£198.60", pct: 1.2, status: "Normal", trend: "-2%" },
    { name: "Canary Wharf", variance: "£115.00", pct: 0.7, status: "Normal", trend: "-8%" },
  ];

  const alerts = [
    {
      title: "Supplier Shortfall",
      priority: "High",
      site: "Covent Garden",
      item: "Organic Dairy 2L x 24 units short-shipped",
      impact: "-£184.20",
      confidence: "96%",
      action: "Credit note claim auto-drafted",
      badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    },
    {
      title: "Portion Drift",
      priority: "Medium",
      site: "Soho Square",
      item: "Single Origin Espresso (18.2g vs 15.0g target)",
      impact: "-£142.80",
      confidence: "88%",
      action: "Barista grind weight recalibration suggested",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
    {
      title: "Till Variance",
      priority: "High",
      site: "Shoreditch",
      item: "Late evening till comps & post-void spike",
      impact: "-£215.00",
      confidence: "91%",
      action: "Manager shift log audit recommended",
      badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    },
    {
      title: "Spoilage Discard",
      priority: "Medium",
      site: "Kings Cross",
      item: "Artisan Sourdough prep overage (Batch #4)",
      impact: "-£78.40",
      confidence: "85%",
      action: "Afternoon bake sheet adjustment logged",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-slate-900 py-20 text-white lg:py-28 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/3 -z-0 h-96 w-96 rounded-full bg-emerald/10 blur-[130px] pointer-events-none" />
      <div className="grid-lines-dark absolute inset-0 opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Interactive Product Interface
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif">
            PredictivIQ Operational Dashboard
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            A realistic look at how site managers, area directors, and executive teams monitor
            cross-system variance, identify root causes, and take corrective actions in real time.
          </p>
          <div className="mt-3">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] text-slate-400">
              Illustrative UI mockup simulation · Not actual customer data
            </span>
          </div>
        </div>

        {/* Dashboard Frame Container */}
        <div className="mt-14 rounded-3xl border border-white/15 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
          {/* Top Bar Navigation within Dashboard */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <img src="/logo-emblem.png" alt="Emblem" className="h-8 w-auto object-contain" />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                  Estate Overview
                </span>
                <h3 className="text-base font-bold text-white">Central Operations Console</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-mono font-bold text-emerald-300 border border-emerald-500/30">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync Active
              </span>
              <span className="hidden sm:inline-block font-mono text-xs text-slate-400">
                Period: Yesterday 00:00–23:59
              </span>
            </div>
          </div>

          {/* TOP METRICS ROW (4 Cards) */}
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {/* Metric 1: Stock Variance */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>STOCK VARIANCE</span>
                <TrendingDown className="size-4 text-amber-400" />
              </div>
              <p className="mt-2 font-mono text-2xl font-extrabold text-amber-300 sm:text-3xl">
                £1,842.60
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Across 8 sites ·{" "}
                <span className="text-emerald-400 font-mono">-14% vs prev week</span>
              </p>
            </div>

            {/* Metric 2: Waste */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>IDENTIFIED WASTE</span>
                <Trash2 className="size-4 text-rose-400" />
              </div>
              <p className="mt-2 font-mono text-2xl font-extrabold text-white sm:text-3xl">
                £620.40
              </p>
              <p className="mt-1 text-xs text-slate-400">42% Spoilage · 58% Prep scrap</p>
            </div>

            {/* Metric 3: Supplier Issues */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>SUPPLIER ISSUES</span>
                <Truck className="size-4 text-emerald-400" />
              </div>
              <p className="mt-2 font-mono text-2xl font-extrabold text-emerald-400 sm:text-3xl">
                4 Invoices
              </p>
              <p className="mt-1 text-xs text-slate-400">£412 credit notes pending</p>
            </div>

            {/* Metric 4: Sites Requiring Attention */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>ATTENTION SITES</span>
                <AlertTriangle className="size-4 text-red-400" />
              </div>
              <p className="mt-2 font-mono text-2xl font-extrabold text-red-400 sm:text-3xl">
                2 of 8 Sites
              </p>
              <p className="mt-1 text-xs text-slate-400">Covent Garden & Soho Square</p>
            </div>
          </div>

          {/* MAIN WORKBENCH: 2 COLUMNS (Chart / Sites vs Priority Alerts) */}
          <div className="mt-6 grid gap-6 lg:grid-cols-12">
            {/* Left 7 Columns: Variance by Site Chart & Rankings */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h4 className="text-sm font-bold text-white">Variance by Site</h4>
                  <p className="text-xs text-slate-400">Physical vs theoretical usage ranking</p>
                </div>
                <span className="font-mono text-xs text-slate-400">Estate Target: &lt;1.5%</span>
              </div>

              {/* Site Horizontal Bar Chart */}
              <div className="mt-5 space-y-4">
                {sites.map((site) => {
                  const isCritical = site.pct > 3.0;
                  const isAttention = site.pct > 2.0 && site.pct <= 3.0;
                  const barColor = isCritical
                    ? "bg-red-500"
                    : isAttention
                      ? "bg-amber-400"
                      : "bg-emerald";

                  return (
                    <div key={site.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">{site.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-slate-400 text-[11px]">{site.trend}</span>
                          <span className="font-mono font-bold text-white">{site.variance}</span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-mono font-bold ${
                              isCritical
                                ? "bg-red-950 text-red-300 border border-red-800"
                                : isAttention
                                  ? "bg-amber-950 text-amber-300 border border-amber-800"
                                  : "bg-emerald-950 text-emerald-300 border border-emerald-800"
                            }`}
                          >
                            {site.pct}%
                          </span>
                        </div>
                      </div>

                      {/* Bar indicator */}
                      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${barColor}`}
                          style={{ width: `${Math.min(site.pct * 25, 100)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom annotation */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Covent Garden flagged for dairy supplier short-shipment audit.</span>
                <span className="text-emerald-400 cursor-pointer hover:underline">
                  Full Report →
                </span>
              </div>
            </div>

            {/* Right 5 Columns: SIDE PANEL - Priority Alerts */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="size-4 text-emerald-400" />
                    <h4 className="text-sm font-bold text-white">Priority Alerts</h4>
                  </div>
                  <span className="rounded-full bg-red-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-red-300">
                    4 Actionable
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {alerts.map((alert) => (
                    <div
                      key={alert.title + alert.site}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition hover:bg-white/[0.08]"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`rounded border px-1.5 py-0.2 font-mono text-[10px] font-bold ${alert.badgeColor}`}
                            >
                              {alert.priority} Priority
                            </span>
                            <span className="font-mono text-xs text-slate-300 font-bold">
                              {alert.title}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-slate-400">
                            {alert.site} · {alert.item}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-xs font-bold text-amber-300">
                            {alert.impact}
                          </p>
                          <span className="font-mono text-[10px] text-emerald-400">
                            {alert.confidence} conf.
                          </span>
                        </div>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-emerald-300">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="size-3 text-emerald-400" />
                          {alert.action}
                        </span>
                        <ChevronRight className="size-3 text-slate-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-center">
                <a
                  href="#pilot"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-emerald-dark"
                >
                  Request a Pilot with Your Venue Data
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
