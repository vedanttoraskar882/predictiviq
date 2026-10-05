import { DAILY_WORKFLOW } from "@/lib/site-data";
import { Clock, CheckCircle2, User, Building, TrendingUp } from "lucide-react";

export function DailyWorkflow() {
  const icons = [Clock, User, CheckCircle2, Building, TrendingUp];

  return (
    <section className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Operational Cadence
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            A Day with PredictivIQ
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Designed for the fast pace of real hospitality shifts — transforming complex stock
            telemetry into actionable daily touchpoints from venue floor to executive boardroom.
          </p>
        </div>

        {/* Workflow Timeline Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {DAILY_WORKFLOW.map((cadence, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={cadence.time}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs transition hover:border-emerald-300 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald border border-emerald-100">
                      <Icon className="size-3" />
                      {cadence.time}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                    {cadence.actor}
                  </p>

                  <h3 className="mt-1 text-base font-bold text-navy">{cadence.headline}</h3>

                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    {cadence.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 rounded-full bg-emerald shrink-0" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {idx === 0 && (
                  <div className="mt-5 rounded-lg bg-emerald-100/60 p-2.5 text-center border border-emerald-200 text-[10px] font-mono font-bold text-emerald-900">
                    "£ Impact · Cause · Confidence"
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
