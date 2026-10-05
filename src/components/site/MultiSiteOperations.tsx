import {
  Building2,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function MultiSiteOperations() {
  const sites = [
    { id: "01", name: "Site 01 · Oxford Circus", status: "Reconciled", val: "£142" },
    { id: "02", name: "Site 02 · Soho Square", status: "Alert: Drift", val: "£482" },
    { id: "03", name: "Site 03 · Covent Garden", status: "Alert: Supplier", val: "£620" },
    { id: "04", name: "Site 04 · Shoreditch", status: "Reconciled", val: "£284" },
    { id: "05", name: "Site 05 · Kings Cross", status: "Reconciled", val: "£198" },
    { id: "06", name: "Site 06 · Canary Wharf", status: "Reconciled", val: "£115" },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Estate Telemetry & Mobile Experience
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            Multi-Site Operations & Mobile Control
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Engineered specifically for expanding hospitality groups. Aggregate performance from
            multiple trading sites into a single operational cockpit and empower managers with
            instant mobile triage.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT 6 COLS: Multi-Site Estate Hierarchy Visual */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald">
                Multi-Site Hierarchy
              </span>
              <h3 className="mt-1 text-2xl font-bold text-navy font-serif sm:text-3xl">
                Estate-Wide Ingestion to Head Office
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Individual store telemetry feeds continuously into PredictivIQ, automatically
                consolidating upwards for area supervisors and corporate head office leadership.
              </p>
            </div>

            {/* Visual Estate Flow Box */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
              {/* Top: 6 Store Sites Grid */}
              <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-3">
                Trading Venues (POS · Stock · Deliveries · Waste)
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {sites.map((s) => (
                  <div
                    key={s.id}
                    className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs text-left"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>SITE {s.id}</span>
                      <span className="size-1.5 rounded-full bg-emerald" />
                    </div>
                    <p className="mt-1 text-xs font-bold text-navy truncate">
                      {s.name.split("·")[1]}
                    </p>
                    <p className="mt-0.5 text-[10px] font-mono text-slate-500">{s.status}</p>
                  </div>
                ))}
              </div>

              {/* Connecting Downwards Arrow */}
              <div className="py-4 text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 font-mono text-[10px] font-bold text-emerald-800">
                  ↓ Continuous Real-Time Ingestion
                </span>
              </div>

              {/* Central Processing Node: PREDICTIVIQ */}
              <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-50/60 p-4 text-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-800 font-bold">
                  CENTRAL RECONCILIATION LAYER
                </span>
                <p className="text-xl font-black text-navy font-serif">PREDICTIVIQ</p>
                <p className="text-xs text-slate-600 mt-1">
                  Automated Reconciliation · Root-Cause Attribution · Cost Ranking
                </p>
              </div>

              {/* Output Arrows */}
              <div className="mt-4 grid grid-cols-2 gap-3 pt-3 border-t border-slate-200 text-center">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    Supervision
                  </span>
                  <p className="text-xs font-bold text-navy mt-1">AREA MANAGER</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Weekly League Tables</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                    Executive
                  </span>
                  <p className="text-xs font-bold text-navy mt-1">HEAD OFFICE</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Consolidated Board Pack</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 6 COLS: Smartphone Mockup (Mobile Manager Experience) */}
          <div className="lg:col-span-6 flex justify-center">
            {/* Phone Chassis Mockup */}
            <div className="relative w-full max-w-[320px] rounded-[42px] border-[10px] border-slate-900 bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-800">
              {/* Phone Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-28 rounded-full bg-slate-800 z-20 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-600 mr-2" />
                <span className="h-1 w-10 rounded-full bg-slate-700" />
              </div>

              {/* Phone Screen Container */}
              <div className="relative rounded-[32px] bg-slate-950 p-4 text-white overflow-hidden pt-6">
                {/* Mobile App Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="/logo-emblem.png"
                      alt="Emblem"
                      className="h-6 w-auto object-contain"
                    />
                    <span className="font-serif text-xs font-bold text-white">
                      PredictivIQ Mobile
                    </span>
                  </div>
                  <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">
                    Shift Live
                  </span>
                </div>

                {/* Mobile Card: TODAY'S VARIANCE */}
                <div className="mt-3.5 rounded-2xl bg-white/5 p-3.5 border border-white/10 text-center">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
                    TODAY'S VARIANCE
                  </span>
                  <p className="font-mono text-2xl font-black text-amber-300 mt-0.5">£342.10</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Covent Garden · 3 Priority Issues
                  </p>
                </div>

                {/* 3 PRIORITY ISSUES LIST */}
                <div className="mt-3 space-y-2">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                    3 PRIORITY ISSUES
                  </p>

                  {/* Issue 1: Supplier Shortfall */}
                  <div className="rounded-xl border border-red-500/30 bg-red-950/30 p-2.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-red-300">Supplier Shortfall</span>
                      <span className="font-mono text-[10px] text-red-300 font-bold">-£184.20</span>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-0.5">Dairy invoice shortfall</p>
                  </div>

                  {/* Issue 2: Portion Drift */}
                  <div className="rounded-xl border border-amber-500/30 bg-amber-950/30 p-2.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-amber-300">Portion Drift</span>
                      <span className="font-mono text-[10px] text-amber-300 font-bold">
                        -£98.50
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-0.5">Barista milk steam purge</p>
                  </div>

                  {/* Issue 3: Till Variance */}
                  <div className="rounded-xl border border-amber-500/30 bg-amber-950/30 p-2.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-amber-300">Till Variance</span>
                      <span className="font-mono text-[10px] text-amber-300 font-bold">
                        -£59.40
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-0.5">
                      Late-shift cash comp variance
                    </p>
                  </div>
                </div>

                {/* Action Buttons in Mobile Mockup */}
                <div className="mt-4 space-y-2">
                  <button
                    type="button"
                    className="w-full rounded-xl bg-emerald py-2 text-center text-xs font-bold text-white shadow-xs"
                  >
                    Review Cause (94% Conf.)
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-xl border border-white/20 bg-white/5 py-2 text-center text-xs font-medium text-slate-300"
                  >
                    Log Corrective Action
                  </button>
                </div>

                {/* Phone Bottom Home Bar */}
                <div className="mt-4 flex justify-center pb-1">
                  <div className="h-1 w-20 rounded-full bg-slate-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
