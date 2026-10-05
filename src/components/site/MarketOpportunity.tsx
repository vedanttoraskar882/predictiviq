import { Building2, PieChart, Coins, Target } from "lucide-react";
import { MARKET_DATA } from "@/lib/site-data";

export function MarketOpportunity() {
  return (
    <section className="border-t border-slate-200/80 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            UK Market Opportunity
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            The Sector Scale & The Shrinkage Challenge
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Operational and commercial metrics from the United Kingdom hospitality sector
            highlighting the pressing need for automated shrinkage intelligence.
          </p>
        </div>

        {/* 3 Metric Cards Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
          {/* Stat 1: 176,685 */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/70 p-8 text-center shadow-xs transition hover:shadow-md hover:border-slate-300">
            <div>
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald">
                <Building2 className="size-7" />
              </div>
              <p className="mt-6 font-mono text-5xl font-black text-navy font-serif tracking-tight">
                {MARKET_DATA.totalBusinesses}
              </p>
              <h3 className="mt-3 text-base font-bold text-navy">Hospitality Businesses</h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Approximate trading hospitality businesses across the United Kingdom.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 font-mono text-[11px] text-slate-400">
              UK Sector Baseline
            </div>
          </div>

          {/* Stat 2: 99.6% */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/70 p-8 text-center shadow-xs transition hover:shadow-md hover:border-slate-300">
            <div>
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald">
                <PieChart className="size-7" />
              </div>
              <p className="mt-6 font-mono text-5xl font-black text-navy font-serif tracking-tight">
                {MARKET_DATA.smePercentage}
              </p>
              <h3 className="mt-3 text-base font-bold text-navy">SME Proportion</h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Approximate proportion that are small and midsize enterprises seeking accessible
                operational intelligence.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 font-mono text-[11px] text-slate-400">
              High SME Density
            </div>
          </div>

          {/* Stat 3: £3bn+ */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-emerald-500/80 bg-emerald-50/40 p-8 text-center shadow-md ring-4 ring-emerald-500/10">
            <div>
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald text-white shadow-sm">
                <Coins className="size-7" />
              </div>
              <p className="mt-6 font-mono text-5xl font-black text-emerald font-serif tracking-tight">
                {MARKET_DATA.annualFoodWasteCost}
              </p>
              <h3 className="mt-3 text-base font-bold text-navy">Annual Sector Waste</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Approximate annual financial cost of food waste to the UK hospitality sector.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200 font-mono text-[11px] font-bold text-emerald-800">
              Margin Recovery Potential
            </div>
          </div>
        </div>

        {/* Target Profile Card */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-7 max-w-3xl mx-auto text-center shadow-xs">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald">
            <Target className="size-4" />
            Core Target Operator Profile
          </div>
          <p className="mt-3 text-lg font-bold text-navy font-serif sm:text-xl">
            Independent café, QSR, and restaurant groups operating 4–20 trading sites.
          </p>
          <p className="mt-1 text-xs text-slate-500 max-w-xl mx-auto">
            Where multi-site variance directly compresses owner profitability, but enterprise
            consulting remains cost-prohibitive.
          </p>
        </div>
      </div>
    </section>
  );
}
