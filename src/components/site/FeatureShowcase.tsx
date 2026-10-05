import { Link } from "@tanstack/react-router";
import {
  Layers,
  Sparkles,
  TrendingDown,
  Truck,
  Building2,
  CheckCircle2,
  Trash2,
  ArrowRight,
  Scale,
} from "lucide-react";

export function FeatureShowcase() {
  return (
    <section className="border-t border-slate-200/80 bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Targeted Operational Solutions
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            Operational Intelligence in Focus
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore how PredictivIQ replaces guesswork with automated reconciliation, attributing
            every material pound of variance across your venues.
          </p>
        </div>

        {/* 6 Alternating Sections */}
        <div className="mt-20 space-y-24 lg:space-y-32">
          {/* ========================================================
              SECTION 1: STOCK & VARIANCE INTELLIGENCE (IMAGE LEFT / TEXT RIGHT)
              ======================================================== */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional hospitality kitchen ingredients and prep"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>

              {/* Floating UI Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-72 rounded-2xl glass-dark p-4 shadow-xl border border-white/15 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                    Stock Reconciliation
                  </span>
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-mono text-emerald-300">
                    Matched Daily
                  </span>
                </div>
                <div className="mt-2.5 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Theoretical (POS):</span>
                    <span className="font-mono font-bold text-white">142.5 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Actual Count:</span>
                    <span className="font-mono font-bold text-amber-300">128.0 kg</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-1 text-emerald-300 font-mono">
                    <span>Variance:</span>
                    <span>-14.5 kg (-£87.00)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald">
                  <Layers className="size-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald">
                  01 · SOLUTION
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl font-serif">
                Stock & Variance Intelligence
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
                Understand theoretical versus actual stock usage.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Forget lagging end-of-month stock audits. PredictivIQ automatically maps every order
                rung up at the till to recipe yields and cross-references actual inventory balances
                by SKU and venue every single morning.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Continuous match of theoretical sales against physical shelf counts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Automated alerts flag discrepancy thresholds before compounding</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-slate-800"
                >
                  <span>Explore the Platform</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================
              SECTION 2: ROOT-CAUSE DIAGNOSIS (TEXT LEFT / IMAGE RIGHT)
              ======================================================== */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald">
                  <Sparkles className="size-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald">
                  02 · SOLUTION
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl font-serif">
                Root-Cause Diagnosis
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
                Identify likely reasons behind material variances.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Knowing stock is missing is not enough — operators need to know why. PredictivIQ’s
                diagnostic engine classifies shrinkage into distinct causes: spoilage, prep discard,
                portion drift, supplier shortfall, till error, or theft risk.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Assigns transparent statistical confidence score to every hypothesis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Distinguishes kitchen spoilage from barista over-portioning drift</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-slate-800"
                >
                  <span>Explore the Platform</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                  alt="Hospitality restaurant dining room"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>

              {/* Floating UI Card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 w-72 rounded-2xl glass-dark p-4 shadow-xl border border-white/15 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                    Attribution Engine
                  </span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                    92% Conf.
                  </span>
                </div>
                <div className="mt-2.5">
                  <p className="text-[10px] font-mono uppercase text-slate-400">Classified Cause</p>
                  <p className="text-sm font-bold text-white mt-0.5">Portion Drift & Spillage</p>
                  <div className="mt-2 space-y-1 text-[11px] text-slate-300">
                    <div className="flex justify-between">
                      <span>Steam wand purge:</span>
                      <span className="font-mono text-emerald-300">62%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              SECTION 3: WASTE INTELLIGENCE (IMAGE LEFT / TEXT RIGHT)
              ======================================================== */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
                  alt="High volume cafe counter and espresso service"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>

              {/* Floating UI Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-76 rounded-2xl glass-dark p-4 shadow-xl border border-white/15 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 font-bold">
                    Waste Telemetry
                  </span>
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-mono text-emerald-300">
                    Analyzed
                  </span>
                </div>
                <div className="mt-2.5">
                  <p className="text-xs font-bold text-white">Spoilage vs Prep Scrap</p>
                  <p className="font-mono text-xl font-extrabold text-amber-300 mt-0.5">-£284.50</p>
                  <p className="text-[11px] text-slate-300 mt-1">Cross-referenced with sales mix</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald">
                  <Trash2 className="size-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald">
                  03 · SOLUTION
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl font-serif">
                Waste Intelligence
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
                Understand waste and its relationship with stock movement.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Kitchen discards only tell half the story. PredictivIQ correlates logged waste
                against ingredient replenishment rates and customer demand to reveal whether
                discards stem from ordering overage, cold-chain expiration, or prep trimming
                inefficiencies.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Differentiates spoilage before prep from line plate waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Tracks waste-to-landfill diversion and ESG recovery metrics</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-slate-800"
                >
                  <span>Explore the Platform</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================
              SECTION 4: SUPPLIER INTELLIGENCE (TEXT LEFT / IMAGE RIGHT)
              ======================================================== */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald">
                  <Truck className="size-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald">
                  04 · SOLUTION
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl font-serif">
                Supplier Intelligence
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
                Identify supplier shortfalls through order/delivery comparison.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Suppliers deliver busy venues daily, but short deliveries frequently go unnoticed
                until invoices have already cleared. PredictivIQ matches POs, goods-inward dockets,
                and invoice lines to catch supplier shortfalls before payments are made.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Continuous 3-way match: PO vs Delivery Docket vs Supplier Invoice</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Automatic generation of supplier credit query notifications</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-slate-800"
                >
                  <span>Explore the Platform</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80"
                  alt="Fresh produce delivery crates"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>

              {/* Floating UI Card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 w-76 rounded-2xl glass-dark p-4 shadow-xl border border-white/15 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-300">
                    Supplier Discrepancy
                  </span>
                  <span className="rounded bg-red-500/20 px-1.5 py-0.5 font-mono text-[10px] text-red-300 font-bold">
                    Short-Ship
                  </span>
                </div>
                <div className="mt-2.5 space-y-1 text-xs">
                  <p className="text-white font-mono">PO: 48 units · Delivered: 36 units</p>
                  <p className="text-red-400 font-mono font-bold mt-1">
                    Credit Claim: £31.20 drafted
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              SECTION 5: MULTI-SITE BENCHMARKING (IMAGE LEFT / TEXT RIGHT)
              ======================================================== */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern cafe interior"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>

              {/* Floating UI Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-76 rounded-2xl glass-dark p-4 shadow-xl border border-white/15 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                    Estate League Table
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">6 Sites</span>
                </div>
                <div className="mt-2.5 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white">1. Oxford Circus</span>
                    <span className="font-mono text-emerald-300">0.8% variance</span>
                  </div>
                  <div className="flex justify-between text-amber-300">
                    <span>4. Soho Square</span>
                    <span className="font-mono">2.9% variance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald">
                  <Building2 className="size-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald">
                  05 · SOLUTION
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl font-serif">
                Multi-Site Benchmarking
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
                Compare performance across sites, regions and dayparts.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Operating multiple venues means variance patterns vary widely by location.
                PredictivIQ standardises telemetry across your entire estate, generating weekly
                league tables so area managers instantly know which venues need operational support.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Normalises performance across dayparts, sales volume, and menu mix</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Provides executive board with clear multi-site compliance metrics</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-slate-800"
                >
                  <span>Explore the Platform</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================
              SECTION 6: CORRECTIVE ACTION (TEXT LEFT / IMAGE RIGHT)
              ======================================================== */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald">
                  <CheckCircle2 className="size-4" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald">
                  06 · SOLUTION
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl font-serif">
                Corrective Action & ROI
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
                Track investigations, actions and measured effects.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Identification is only the start. PredictivIQ tracks every manager intervention —
                whether retraining baristas, logging supplier claims, or performing till audits —
                and measures the direct financial margin recovery over subsequent trading cycles.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Complete closed-loop audit: Issue → Action → Margin Recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                  <span>Verifies whether retraining permanently eliminated yield drift</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  to="/platform"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-slate-800"
                >
                  <span>Explore the Platform</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/10">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="High end restaurant operations team"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              </div>

              {/* Floating UI Card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 w-76 rounded-2xl glass-dark p-4 shadow-xl border border-white/15 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                    Action Verification
                  </span>
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-mono text-emerald-300 font-bold">
                    Resolved
                  </span>
                </div>
                <div className="mt-2.5 space-y-1 text-xs">
                  <p className="text-slate-200">Portion Drift (Barista Oat 1L)</p>
                  <p className="text-emerald-300 font-mono font-bold mt-1">
                    RESULT: £340 / mo recovered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
