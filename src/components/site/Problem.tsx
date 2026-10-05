import {
  ShoppingBag,
  Package,
  Truck,
  Trash2,
  ArrowDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function Problem() {
  const sources = [
    {
      name: "POS",
      question: "WHAT WAS SOLD",
      icon: ShoppingBag,
      details: "Recipe depletion & transaction mix",
      color: "border-sky-200 bg-sky-50/60 text-sky-900",
      iconColor: "bg-sky-100 text-sky-700",
    },
    {
      name: "Inventory",
      question: "WHAT REMAINS",
      icon: Package,
      details: "Physical counts & theoretical levels",
      color: "border-indigo-200 bg-indigo-50/60 text-indigo-900",
      iconColor: "bg-indigo-100 text-indigo-700",
    },
    {
      name: "Delivery",
      question: "WHAT ARRIVED",
      icon: Truck,
      details: "Invoices, POs & supplier dockets",
      color: "border-amber-200 bg-amber-50/60 text-amber-900",
      iconColor: "bg-amber-100 text-amber-700",
    },
    {
      name: "Waste",
      question: "WHAT WAS DISCARDED",
      icon: Trash2,
      details: "Spoilage logs & kitchen prep scrap",
      color: "border-rose-200 bg-rose-50/60 text-rose-900",
      iconColor: "bg-rose-100 text-rose-700",
    },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            The Operational Disconnect
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            Too Much Data. Not Enough Diagnosis.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Hospitality teams capture thousands of data points daily across disconnected tools. When
            numbers don’t add up at month-end, no single system can explain why.
          </p>
        </div>

        {/* 4 Cards Converging Diagram */}
        <div className="mt-16 max-w-5xl mx-auto">
          {/* Top 4 System Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sources.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className={`relative flex flex-col justify-between rounded-2xl border p-6 shadow-xs transition hover:shadow-md ${item.color}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-extrabold uppercase tracking-wider text-slate-500">
                        {item.name}
                      </span>
                      <div
                        className={`flex size-8 items-center justify-center rounded-xl ${item.iconColor}`}
                      >
                        <Icon className="size-4" />
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-extrabold tracking-tight font-mono text-navy">
                      {item.question}
                    </p>
                    <p className="mt-1 text-xs text-slate-600 leading-snug">{item.details}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-center pt-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-white shadow-xs text-slate-400">
                      <ArrowDown className="size-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flowing Convergence Connectors */}
          <div className="relative py-8 flex flex-col items-center justify-center">
            {/* Connecting lines SVG */}
            <div className="hidden lg:block w-full max-w-3xl h-12 relative">
              <svg className="w-full h-full" viewBox="0 0 800 50" fill="none">
                <path
                  d="M100 0 C 100 35, 400 15, 400 50"
                  stroke="#059669"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-40"
                />
                <path
                  d="M300 0 C 300 30, 400 20, 400 50"
                  stroke="#059669"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-40"
                />
                <path
                  d="M500 0 C 500 30, 400 20, 400 50"
                  stroke="#059669"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-40"
                />
                <path
                  d="M700 0 C 700 35, 400 15, 400 50"
                  stroke="#059669"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-40"
                />
              </svg>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-mono font-bold text-emerald-800 border border-emerald-200">
              <span className="flex h-2 w-2 rounded-full bg-emerald animate-ping" />
              Automated Cross-Reconciliation
            </div>
          </div>

          {/* Converged Centerpiece: PREDICTIVIQ */}
          <div className="relative rounded-3xl border-2 border-emerald-500 bg-white p-8 shadow-xl ring-8 ring-emerald-500/5 text-center sm:p-10">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald text-white shadow-md">
              <Sparkles className="size-7" />
            </div>

            <div className="mt-4">
              <span className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-emerald">
                INTELLIGENCE LAYER
              </span>
              <h3 className="mt-1 text-3xl font-extrabold text-navy font-serif sm:text-4xl">
                PREDICTIVIQ
              </h3>
              <p className="mt-3 text-lg font-bold text-emerald-800 sm:text-xl">
                "Understand WHY the variance happened."
              </p>
            </div>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              PredictivIQ sits above your existing tools with zero operational disruption. By
              continuously matching sales against inventory, delivery receipts, and waste logs, it
              isolates the true cause — whether portion drift, supplier shortfall, till error, or
              kitchen waste — and ranks it in pounds (£) for immediate team action.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100 text-xs font-medium text-slate-700">
              <span className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 border border-slate-200">
                <CheckCircle2 className="size-3.5 text-emerald" />
                Zero hardware installation
              </span>
              <span className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 border border-slate-200">
                <CheckCircle2 className="size-3.5 text-emerald" />
                No POS replacement needed
              </span>
              <span className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 border border-slate-200">
                <CheckCircle2 className="size-3.5 text-emerald" />
                Root causes ranked in pounds (£)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
