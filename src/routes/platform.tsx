import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductDashboard } from "@/components/site/ProductDashboard";
import { MultiSiteOperations } from "@/components/site/MultiSiteOperations";
import {
  Layers,
  Sparkles,
  TrendingDown,
  Truck,
  Scale,
  Receipt,
  Building2,
  CheckCircle2,
  Smartphone,
  FileSpreadsheet,
  Calendar,
  Trash2,
  Share2,
  Sliders,
  ArrowRight,
  ShieldCheck,
  Search,
} from "lucide-react";

const TITLE = "PredictivIQ Platform | Operational Intelligence";
const DESCRIPTION =
  "Explore the PredictivIQ platform: automated daily reconciliation, shrinkage cause classification, confidence scoring, cost-ranked alerts, and multi-site benchmarking.";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  const extendedModules = [
    {
      title: "Mobile Manager App",
      desc: "Instant morning variance alert triage, cause verification, and corrective action logging designed for shift supervisors.",
      icon: Smartphone,
    },
    {
      title: "Board-Ready Reporting",
      desc: "Consolidated monthly PDF packs detailing gross margin recovery, waste diversion, and action closure rates for the CFO.",
      icon: FileSpreadsheet,
    },
    {
      title: "Seasonal Adjustment",
      desc: "Accounts for weather patterns, trading seasonality, and regional menu demand variations when calculating expected depletion.",
      icon: Calendar,
    },
    {
      title: "Waste-to-Landfill Diversion Tracking",
      desc: "Tracks food waste diversion metrics to help hospitality groups hit sustainability targets and improve resource management.",
      icon: Trash2,
    },
    {
      title: "Finance and Franchise API Export",
      desc: "Secure API and CSV integrations exporting verified variance adjustments into enterprise ERP and franchise accounting systems.",
      icon: Share2,
    },
    {
      title: "Configurable Materiality Thresholds",
      desc: "Customize financial materiality boundaries by store tier so managers only receive alerts on losses that truly matter.",
      icon: Sliders,
    },
  ];

  return (
    <div className="py-12 md:py-16">
      {/* 1. Header */}
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
          PredictivIQ Intelligence Platform
        </span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl font-serif">
          One Intelligence Layer Across Your Operation
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          PredictivIQ connects point-of-sale transactions, physical stock balances, supplier
          invoices, and kitchen waste logs to deliver automated daily reconciliation and actionable
          root-cause attribution.
        </p>
      </div>

      {/* 2. Interactive Product Dashboard Mockup */}
      <div className="mt-14">
        <ProductDashboard />
      </div>

      {/* 3. Data Convergence Architecture Diagram */}
      <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              Telemetry Flow
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy font-serif sm:text-4xl">
              Cross-Source Ingestion to Prioritised Action
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              How four foundational data streams converge into automated daily intelligence.
            </p>
          </div>

          <div className="mt-14 max-w-5xl mx-auto">
            {/* 4 Inputs */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                <span className="font-mono text-xs font-bold text-emerald">01 · SALES</span>
                <p className="mt-2 font-bold text-navy font-serif text-lg">POS</p>
                <p className="mt-1 text-xs text-slate-500">What was sold</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                <span className="font-mono text-xs font-bold text-emerald">02 · COUNTS</span>
                <p className="mt-2 font-bold text-navy font-serif text-lg">Inventory</p>
                <p className="mt-1 text-xs text-slate-500">What remains</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                <span className="font-mono text-xs font-bold text-emerald">03 · DOCKETS</span>
                <p className="mt-2 font-bold text-navy font-serif text-lg">Delivery</p>
                <p className="mt-1 text-xs text-slate-500">What arrived</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                <span className="font-mono text-xs font-bold text-emerald">04 · DISCARDS</span>
                <p className="mt-2 font-bold text-navy font-serif text-lg">Waste</p>
                <p className="mt-1 text-xs text-slate-500">What was lost</p>
              </div>
            </div>

            {/* Central Node */}
            <div className="my-8 rounded-3xl border-2 border-emerald-500 bg-white p-6 shadow-lg text-center ring-4 ring-emerald-500/10">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald">
                INTELLIGENCE LAYER
              </span>
              <p className="mt-1 text-2xl font-black text-navy font-serif sm:text-3xl">
                PREDICTIVIQ RECONCILIATION ENGINE
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Continuous theoretical vs actual recipe depletion and statistical anomaly matching
              </p>
            </div>

            {/* 4 Outputs */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-emerald">
                  Step 1
                </span>
                <p className="mt-1 text-xs font-bold text-navy">Reconciliation</p>
                <p className="mt-0.5 text-[11px] text-slate-500">By SKU & Site</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-emerald">
                  Step 2
                </span>
                <p className="mt-1 text-xs font-bold text-navy">Root-Cause Attribution</p>
                <p className="mt-0.5 text-[11px] text-slate-500">Confidence Scored</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-emerald">
                  Step 3
                </span>
                <p className="mt-1 text-xs font-bold text-navy">Cost-Ranked Alerts</p>
                <p className="mt-0.5 text-[11px] text-slate-500">Ranked in £</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
                <span className="font-mono text-[10px] uppercase font-bold text-emerald">
                  Step 4
                </span>
                <p className="mt-1 text-xs font-bold text-navy">Corrective Action</p>
                <p className="mt-0.5 text-[11px] text-slate-500">Tracked ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Multi-Site Operations & Mobile Control */}
      <MultiSiteOperations />

      {/* 5. Extended Capabilities Suite */}
      <section className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              Enterprise Suite
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy font-serif sm:text-4xl">
              Extended Operational Capabilities
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Purpose-built modules empowering venue supervisors, area directors, and executive
              leadership.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {extendedModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 transition hover:border-emerald-300 hover:bg-white hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-navy font-serif">{mod.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{mod.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald">
                    <CheckCircle2 className="size-3.5" />
                    <span>Included in Core Platform</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Page CTA */}
      <div className="mx-auto max-w-5xl px-6 pt-10 text-center">
        <div className="rounded-3xl bg-navy p-8 text-white sm:p-12 shadow-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
            Live Deployment
          </span>
          <h3 className="mt-2 text-2xl font-bold font-serif sm:text-3xl">
            See PredictivIQ Operating on Your Data
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Request a scoped, two-week shadow assessment on your estate data with zero disruption to
            trading.
          </p>
          <div className="mt-6">
            <Link
              to="/request-a-pilot"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald px-6 py-3 text-sm font-bold text-white shadow hover:bg-emerald-dark"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
