import { Link } from "@tanstack/react-router";
import {
  Layers,
  Sparkles,
  TrendingDown,
  Truck,
  Building2,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Coins,
} from "lucide-react";

export function HomeFeaturePreview() {
  const features = [
    {
      title: "Daily Stock Reconciliation",
      desc: "Automatically compares theoretical recipe depletion from EPOS sales against actual physical counts.",
      badge: "Automated Daily",
      icon: Layers,
    },
    {
      title: "Root-Cause Attribution",
      desc: "Classifies variances into actionable causes with transparent statistical confidence percentages.",
      badge: "Diagnostic AI",
      icon: Sparkles,
    },
    {
      title: "Cost-Ranked Alerts",
      desc: "Presents high-value variances ranked in pounds (£) so managers tackle the most material losses first.",
      badge: "Financial Impact",
      icon: TrendingDown,
    },
    {
      title: "Supplier Shortfall Detection",
      desc: "Cross-checks invoices and delivery notes against POs to detect short deliveries before payment.",
      badge: "Procurement Guard",
      icon: Truck,
    },
    {
      title: "Multi-Site Benchmarking",
      desc: "Normalises performance league tables across venues, operational regions, and trading dayparts.",
      badge: "Portfolio Governance",
      icon: Building2,
    },
    {
      title: "Corrective Action Tracking",
      desc: "Logs manager interventions and measures resulting gross margin recovery over subsequent cycles.",
      badge: "Closed-Loop ROI",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              Core Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy font-serif sm:text-4xl">
              Engineered for Real Operational Impact
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Discover how PredictivIQ replaces disconnected spreadsheets with automated daily
              diagnosis.
            </p>
          </div>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-emerald hover:text-emerald-dark"
          >
            <span>Explore All Solutions</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/60 p-6 transition hover:border-emerald-300 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald group-hover:bg-emerald group-hover:text-white transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <span className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-500 border border-slate-200">
                      {f.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy font-serif">{f.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-emerald">
                  <span>Learn more</span>
                  <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeWorkflowPreview() {
  const steps = [
    { num: "01", name: "CONNECT", desc: "POS, Inventory, Delivery, Waste" },
    { num: "02", name: "RECONCILE", desc: "Theoretical vs actual usage by SKU" },
    { num: "03", name: "DIAGNOSE", desc: "Attribution with confidence scores" },
    { num: "04", name: "PRIORITISE", desc: "Ranked by financial (£) impact" },
    { num: "05", name: "ACT", desc: "Log supplier query, retraining, audit" },
    { num: "06", name: "IMPROVE", desc: "Track verified margin recovery" },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Frictionless Process
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-navy font-serif sm:text-4xl">
            How PredictivIQ Works
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A continuous closed loop from raw signals to verified profit recovery.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs text-center flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-black text-emerald">{s.num}</span>
                <p className="mt-2 text-xs font-bold text-navy font-mono uppercase">{s.name}</p>
                <p className="mt-1 text-[11px] text-slate-500 leading-snug">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-slate-800"
          >
            <span>View Complete Operational Workflow</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeMultiSitePreview() {
  return (
    <section className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-navy p-8 text-white sm:p-12 shadow-xl">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Multi-Site Architecture
              </span>
              <h3 className="mt-2 text-2xl font-bold font-serif sm:text-3xl lg:text-4xl text-white">
                One Intelligence Layer Across Your Estate
              </h3>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Whether managing 4 trading locations or 20 franchised venues, PredictivIQ aggregates
                overnight telemetry into clear league tables and mobile morning triage.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                <span className="rounded-lg bg-white/10 px-3 py-1.5 border border-white/10">
                  Estate Aggregation
                </span>
                <span className="rounded-lg bg-white/10 px-3 py-1.5 border border-white/10">
                  Area Manager Supervision
                </span>
                <span className="rounded-lg bg-white/10 px-3 py-1.5 border border-white/10">
                  Board-Ready Packs
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3 text-center sm:text-left">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
                <p className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
                  Mobile + Web Cockpit
                </p>
                <p className="mt-1 font-serif text-lg font-bold text-white">
                  Designed for Fast-Paced Venue Shifts
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Triage high-priority variances and log corrective actions in seconds.
                </p>
                <Link
                  to="/platform"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald px-4 py-2 text-xs font-bold text-white shadow hover:bg-emerald-dark"
                >
                  <span>Explore Platform & Mobile App</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePricingPreview() {
  return (
    <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Transparent Commercials
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-navy font-serif sm:text-4xl">
            Pricing That Scales With Your Estate
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Straightforward per-site monthly subscriptions designed to deliver immediate ROI.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <div className="rounded-2xl border-2 border-emerald-500 bg-white p-5 text-center shadow-md">
            <span className="font-mono text-[10px] uppercase font-bold text-emerald">
              Site Subscription
            </span>
            <p className="mt-2 font-mono text-2xl font-black text-navy font-serif">£149–£249</p>
            <p className="text-[11px] text-slate-500 font-mono">/site/month</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-2xs">
            <span className="font-mono text-[10px] uppercase font-bold text-slate-400">
              Onboarding
            </span>
            <p className="mt-2 font-mono text-2xl font-black text-navy font-serif">£500–£1,500</p>
            <p className="text-[11px] text-slate-500 font-mono">per estate</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-2xs">
            <span className="font-mono text-[10px] uppercase font-bold text-slate-400">
              Advisory
            </span>
            <p className="mt-2 font-mono text-2xl font-black text-navy font-serif">Included</p>
            <p className="text-[11px] text-slate-500 font-mono">above 15 sites</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-2xs">
            <span className="font-mono text-[10px] uppercase font-bold text-slate-400">
              Franchisor
            </span>
            <p className="mt-2 font-mono text-2xl font-black text-navy font-serif">Custom</p>
            <p className="text-[11px] text-slate-500 font-mono">annual licence</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-emerald hover:text-emerald-dark"
          >
            <span>View Full Commercial Details & Market Scale</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeFinalCta() {
  return (
    <section className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
          Begin Your Evaluation
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-navy font-serif sm:text-4xl lg:text-5xl">
          Ready to See Where Your Losses Are Coming From?
        </h2>
        <p className="mt-4 text-base text-slate-600 max-w-xl mx-auto sm:text-lg">
          Start with a pilot and discover what your operational data is telling you.
        </p>
        <div className="mt-8">
          <Link
            to="/request-a-pilot"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-dark active:scale-95"
          >
            <span>REQUEST A PILOT</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
