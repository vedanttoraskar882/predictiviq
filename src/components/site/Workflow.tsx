import { WORKFLOW_STEPS } from "@/lib/site-data";
import { ArrowRight, Check } from "lucide-react";

export function Workflow() {
  return (
    <section
      id="how-it-works"
      className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Implementation & Operation
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            How PredictivIQ Works in 5 Clear Steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            A frictionless deployment engineered to integrate smoothly with your existing restaurant
            tech stack in 2–4 weeks.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-emerald-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-extrabold text-emerald">{step.step}</span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    {step.phase}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-navy">{step.title}</h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.description}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald">
                  {step.accent}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Callout Banner */}
        <div className="mt-12 rounded-2xl border border-emerald-200 bg-white p-6 text-center shadow-xs">
          <p className="text-sm font-semibold text-navy">
            "Don't just see how much you lost. Understand why it happened and where to act first."
          </p>
        </div>
      </div>
    </section>
  );
}
