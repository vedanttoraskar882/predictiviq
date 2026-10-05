import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketOpportunity } from "@/components/site/MarketOpportunity";
import { Pricing } from "@/components/site/Pricing";
import { CheckCircle2, ArrowRight, Building2, Store, Users, FileCheck } from "lucide-react";

const TITLE = "PredictivIQ Pricing";
const DESCRIPTION =
  "PredictivIQ commercial pricing model: transparent per-site subscriptions, estate onboarding, advisory support, and franchisor licensing.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const modelDimensions = [
    {
      title: "Trading Sites",
      desc: "Monthly fee scaled strictly by the number of active venues trading on the platform, ensuring low initial barrier to entry.",
      icon: Store,
    },
    {
      title: "Estate Size",
      desc: "Volume tiering discounts automatically unlock as operators expand from 4–10 venues to 15+ trading locations.",
      icon: Building2,
    },
    {
      title: "Onboarding Requirements",
      desc: "A single estate setup fee covering comprehensive EPOS connector audits, SKU recipe calibration, and shadow period verification.",
      icon: FileCheck,
    },
    {
      title: "Franchisor Requirements",
      desc: "Custom centralized licensing tailored for brand franchisors managing multi-franchisee networks and executive compliance.",
      icon: Users,
    },
  ];

  return (
    <div className="py-12 md:py-16">
      {/* 1. Page Header */}
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
          Commercial Model
        </span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl font-serif">
          Built for Multi-Site Hospitality
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          Transparent, high-ROI commercial structures engineered to recapture margin leakages across
          expanding UK hospitality venues.
        </p>
      </div>

      {/* 2. UK Market Context & Approved Statistics */}
      <div className="mt-8">
        <MarketOpportunity />
      </div>

      {/* 3. The 4 Exact Pricing Cards */}
      <div className="mt-8">
        <Pricing />
      </div>

      {/* 4. Section: "Pricing That Scales With Your Estate" */}
      <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              Commercial Alignment
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy font-serif sm:text-4xl">
              Pricing That Scales With Your Estate
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Our commercial structure is designed around four key operational dimensions, ensuring
              operators pay only for the footprint they operate.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {modelDimensions.map((dim) => {
              const Icon = dim.icon;
              return (
                <div
                  key={dim.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-navy font-serif">{dim.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{dim.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-emerald">
                    <CheckCircle2 className="size-3.5" />
                    <span>Transparent Pricing Factor</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Page CTA */}
      <div className="mx-auto max-w-5xl px-6 pt-12 text-center">
        <div className="rounded-3xl bg-navy p-8 text-white sm:p-12 shadow-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
            Start Your Pilot
          </span>
          <h3 className="mt-2 text-2xl font-bold font-serif sm:text-3xl">
            Ready to See Where Your Losses Are Coming From?
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Evaluate PredictivIQ on your operational data with zero upfront disruption.
          </p>
          <div className="mt-6">
            <Link
              to="/request-a-pilot"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald px-6 py-3 text-sm font-bold text-white shadow hover:bg-emerald-dark"
            >
              <span>REQUEST A PILOT</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
