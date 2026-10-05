import { MARKET_DATA } from "@/lib/site-data";
import { Building2, PieChart, Coins, Target } from "lucide-react";

export function MarketOpportunity() {
  return (
    <section className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            UK Market Opportunity
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            The Sector Scale & The Shrinkage Challenge
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Contextual data from the UK hospitality and food-service landscape highlighting the
            commercial and environmental necessity for operational intelligence.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-7 text-center shadow-xs">
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald">
                <Building2 className="size-6" />
              </div>
              <p className="mt-4 font-mono text-4xl font-extrabold text-navy font-serif">
                {MARKET_DATA.totalBusinesses}
              </p>
              <h3 className="mt-2 text-sm font-bold text-navy">Hospitality Businesses</h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                Operating across the United Kingdom food and beverage landscape.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-200/60 font-mono text-[11px] text-slate-400">
              UK Sector Baseline
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-7 text-center shadow-xs">
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald">
                <PieChart className="size-6" />
              </div>
              <p className="mt-4 font-mono text-4xl font-extrabold text-navy font-serif">
                {MARKET_DATA.smePercentage}
              </p>
              <h3 className="mt-2 text-sm font-bold text-navy">SME Composition</h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                Overwhelming majority of operators are small-to-midsize businesses requiring
                accessible SaaS.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-200/60 font-mono text-[11px] text-slate-400">
              High SME Density
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-emerald-200 bg-emerald-50/40 p-7 text-center shadow-xs ring-1 ring-emerald-500/20">
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald text-white">
                <Coins className="size-6" />
              </div>
              <p className="mt-4 font-mono text-4xl font-extrabold text-emerald font-serif">
                {MARKET_DATA.annualFoodWasteCost}
              </p>
              <h3 className="mt-2 text-sm font-bold text-navy">Annual Sector Waste</h3>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Estimated financial impact of food waste across the sector every year.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-emerald-200/60 font-mono text-[11px] text-emerald-800 font-semibold">
              Measurable Recovery Potential
            </div>
          </div>
        </div>

        {/* Commercial Target Focus */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 max-w-3xl mx-auto text-center shadow-xs">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald">
            <Target className="size-4" />
            Initial Commercial Focus
          </div>
          <p className="mt-2 text-base font-bold text-navy font-serif sm:text-lg">
            Independent multi-site café and QSR operators managing 4–20 trading locations.
          </p>
          <p className="mt-1 text-xs text-slate-500">
            A focused B2B SaaS service engineered for operators where estate variance directly
            compresses owner profitability.
          </p>
        </div>
      </div>
    </section>
  );
}
