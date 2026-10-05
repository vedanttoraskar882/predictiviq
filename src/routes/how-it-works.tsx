import { createFileRoute, Link } from "@tanstack/react-router";
import { Workflow } from "@/components/site/Workflow";
import { DailyWorkflow } from "@/components/site/DailyWorkflow";
import { CheckCircle2, Cloud, Server, ShieldCheck, ArrowRight } from "lucide-react";

const TITLE = "How PredictivIQ Works";
const DESCRIPTION =
  "Discover how PredictivIQ connects POS, inventory, delivery, and waste data to deliver automated daily reconciliation, diagnosis, and verified margin recovery.";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  const rolloutPhases = [
    {
      phase: "Week 01",
      title: "Data Connection Audit",
      desc: "Audit existing EPOS connectors, stocktake frequency, and supplier delivery docket formats with zero operational friction.",
    },
    {
      phase: "Weeks 02–03",
      title: "Two-Week Shadow Period",
      desc: "Run background shadow reconciliation against theoretical sales yields to verify baseline counts and eliminate false positives.",
    },
    {
      phase: "Week 04",
      title: "Validated Daily Alerts Go Live",
      desc: "Calibrate store-specific materiality thresholds; venue managers and shift supervisors begin morning variance triage.",
    },
    {
      phase: "Ongoing",
      title: "Continuous Yield Recovery",
      desc: "Track corrective actions, measure margin improvements, and attend weekly operational advisory reviews.",
    },
  ];

  return (
    <div className="py-12 md:py-16">
      {/* 1. Header */}
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
          Implementation & Operational Workflow
        </span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl font-serif">
          How PredictivIQ Works
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          A frictionless, closed-loop diagnostic journey taking your operational data from raw
          signals to verified margin recovery in six connected stages.
        </p>
      </div>

      {/* 2. Main 6-Step Visual Workflow */}
      <div className="mt-8">
        <Workflow />
      </div>

      {/* 3. A Day With PredictivIQ Shift Timeline */}
      <div className="mt-4">
        <DailyWorkflow />
      </div>

      {/* 4. Phased Deployment Section */}
      <section className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              Frictionless Onboarding
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy font-serif sm:text-4xl">
              2–4 Week Structured Rollout
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              No hardware to install. No point-of-sale contract migration. PredictivIQ is 100%
              cloud-hosted in the UK.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {rolloutPhases.map((phase) => (
              <div
                key={phase.phase}
                className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-emerald bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                    {phase.phase}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-navy font-serif">{phase.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{phase.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <CheckCircle2 className="size-3.5 text-emerald" />
                  <span>Structured Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Page CTA */}
      <div className="mx-auto max-w-5xl px-6 pt-10 text-center">
        <div className="rounded-3xl bg-navy p-8 text-white sm:p-12 shadow-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
            Start Your Evaluation
          </span>
          <h3 className="mt-2 text-2xl font-bold font-serif sm:text-3xl">
            Experience the PredictivIQ Workflow
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Discover what your operational data reveals during a scoped two-week shadow assessment.
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
