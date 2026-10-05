import { CheckCircle2, ArrowRight } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "SITE SUBSCRIPTION",
      price: "£149–£249",
      cadence: "/site/month",
      type: "MAIN SUBSCRIPTION",
      description: "Monthly fee per trading site, tiered by total estate site count.",
      highlights: [
        "Daily automated stock reconciliation",
        "Shrinkage cause classification & confidence scoring",
        "Cost-ranked daily variance alerts in pounds (£)",
        "Multi-site benchmarking & league tables",
        "Portion drift & till pattern monitoring",
        "Supplier shortfall & credit-request tracking",
        "Mobile manager review workflow",
      ],
      featured: true,
    },
    {
      name: "ONBOARDING",
      price: "£500–£1,500",
      cadence: "per estate",
      type: "ONE-OFF SETUP",
      description: "Data connection audit, system mapping, and taxonomy calibration.",
      highlights: [
        "EPOS & inventory data connector audit",
        "Recipe & SKU yield taxonomy calibration",
        "Two-week shadow period verification",
        "Site manager & area manager onboarding",
        "Configurable materiality threshold setup",
      ],
      featured: false,
    },
    {
      name: "ADVISORY",
      price: "INCLUDED",
      cadence: "ABOVE 15 SITES",
      type: "OPERATIONAL SUPPORT",
      description: "Dedicated operational analyst support to maximize yield recovery.",
      highlights: [
        "Weekly analyst review call",
        "Quarterly business review (QBR)",
        "Custom cross-site shrinkage diagnostic audits",
        "Executive board-pack preparation",
      ],
      featured: false,
    },
    {
      name: "FRANCHISOR LICENCE",
      price: "CUSTOM",
      cadence: "annual licence",
      type: "ENTERPRISE NETWORK",
      description: "Enterprise head-office oversight across franchisee networks.",
      highlights: [
        "Multi-franchisee consolidated reporting",
        "Brand compliance & recipe yield monitoring",
        "Franchise benchmark league tables",
        "Dedicated account management & API access",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="border-t border-slate-200/80 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Transparent Investment
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            Pricing That Scales With Your Estate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Directly aligned with your operational footprint. Every tier is engineered to deliver
            immediate return on investment by recapturing margin leakages.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all ${
                plan.featured
                  ? "border-2 border-emerald-500 bg-white shadow-xl ring-4 ring-emerald-500/10"
                  : "border border-slate-200 bg-slate-50/60 shadow-xs hover:border-slate-300 hover:bg-white"
              }`}
            >
              <div>
                {plan.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-emerald px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
                    Primary Service
                  </span>
                )}

                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  {plan.type}
                </span>

                <h3 className="text-xl font-bold text-navy font-serif">{plan.name}</h3>

                <p className="mt-2 text-xs text-slate-500 min-h-[36px] leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-5 border-y border-slate-200/80 py-4">
                  <p className="font-mono text-3xl font-black text-navy font-serif">{plan.price}</p>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald mt-1">
                    {plan.cadence}
                  </p>
                </div>

                {/* Highlights List */}
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-emerald shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-200/60">
                <a
                  href="#pilot"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition shadow-xs ${
                    plan.featured
                      ? "bg-emerald text-white hover:bg-emerald-dark"
                      : "bg-navy text-white hover:bg-slate-800"
                  }`}
                >
                  Request a Pilot
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Subtitle & Clarification */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          Pricing scales with estate size and requirements. Contact our team to scope a trial period
          on your operational data.
        </div>
      </div>
    </section>
  );
}
