import { ARCHITECTURE_LAYERS, TRUST_SECURITY } from "@/lib/site-data";
import { ShieldCheck, Cloud, Server, Lock, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export function Technology() {
  const deploymentPhases = [
    {
      step: "Phase 1",
      title: "Data Connection Audit",
      desc: "Evaluate EPOS feeds, inventory frequency, and invoice formats.",
    },
    {
      step: "Phase 2",
      title: "Two-Week Shadow Period",
      desc: "Run quiet reconciliation in the background to validate baseline numbers.",
    },
    {
      step: "Phase 3",
      title: "Validated Alerts Go Live",
      desc: "Calibrate confidence thresholds; managers begin morning alert triage.",
    },
    {
      step: "Rollout",
      title: "2–4 Weeks Per Estate",
      desc: "Frictionless phased onboarding with zero POS or hardware replacement.",
    },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Architecture & Trust
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            Enterprise Architecture. Cloud-Native Agility.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Designed to slot smoothly into an existing operational reporting environment without
            operational friction or complex on-site infrastructure.
          </p>
        </div>

        {/* 4-Layer Architecture Visual */}
        <div className="mt-14 max-w-5xl mx-auto">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
            Four-Layer System Architecture
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ARCHITECTURE_LAYERS.map((layer) => (
              <div
                key={layer.layer}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-mono text-xs font-bold text-emerald">
                      Layer {layer.layer}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">Cloud Layer</span>
                  </div>

                  <h3 className="mt-3 text-base font-bold text-navy">{layer.name}</h3>

                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    {layer.description}
                  </p>
                </div>

                <div className="mt-5 space-y-1.5 pt-3 border-t border-slate-100">
                  {layer.components.map((comp) => (
                    <div
                      key={comp}
                      className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700"
                    >
                      <span className="size-1 rounded-full bg-emerald" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations & Deployment Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Integrations Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-navy">
                <Server className="size-5 text-emerald" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy font-serif">
                  Integration Compatibility
                </h3>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Slots Into Existing Reporting Environments
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-600">
              PredictivIQ operates alongside your existing technology vendors without requiring
              contract cancellations or disruptive POS migrations.
            </p>

            <ul className="mt-5 space-y-2.5 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald shrink-0" />
                <span>EPOS data adaptors & transaction log ingestion</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald shrink-0" />
                <span>Inventory & stocktaking platform synchronization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald shrink-0" />
                <span>CSV / API data connectors for custom setups</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald shrink-0" />
                <span>Supplier delivery-note & electronic docket capture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald shrink-0" />
                <span>Financial & franchise management exports</span>
              </li>
            </ul>
          </div>

          {/* Phased Deployment Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-navy">
                <Cloud className="size-5 text-emerald" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy font-serif">Phased Cloud Deployment</h3>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  No Hardware · Zero Downtime
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-600">
              PredictivIQ is 100% cloud-hosted in the UK. Onboarding follows a proven, structured
              methodology to ensure data accuracy before site managers engage.
            </p>

            <div className="mt-5 space-y-2.5">
              {deploymentPhases.map((phase) => (
                <div
                  key={phase.step}
                  className="flex items-start gap-3 rounded-lg bg-slate-50 p-2.5 border border-slate-100"
                >
                  <span className="font-mono text-[10px] font-bold uppercase text-emerald bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 shrink-0">
                    {phase.step}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-navy">{phase.title}</p>
                    <p className="text-[11px] text-slate-500">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security & Data Governance Icons Grid */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-8 max-w-5xl mx-auto shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald">
              Security & Compliance
            </span>
            <h3 className="mt-1 text-xl font-bold text-navy font-serif">
              Enterprise Data Handling Standards
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Built from day one to respect UK regulatory requirements and sensitive operational
              metrics.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_SECURITY.map((sec) => (
              <div
                key={sec.title}
                className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald shrink-0" />
                  <p className="text-xs font-bold text-navy">{sec.title}</p>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-600">{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
