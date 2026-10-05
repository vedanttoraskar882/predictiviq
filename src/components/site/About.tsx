import { FOUNDERS } from "@/lib/site-data";
import { Phone, Mail, Award, CheckCircle2, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="border-t border-slate-200/80 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            About PredictivIQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            Built for the Reality of Hospitality Operations
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            PredictivIQ LTD was built around a persistent, practical challenge: venue and estate
            managers have an abundance of reports, but rarely a clear, definitive explanation of
            what is driving shrinkage and loss.
          </p>
        </div>

        {/* 5 Core Pillars */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald">
              01
            </span>
            <p className="mt-1 text-sm font-bold text-navy">Operational Visibility</p>
            <p className="mt-0.5 text-xs text-slate-500">Full stock-to-sale view</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald">
              02
            </span>
            <p className="mt-1 text-sm font-bold text-navy">Data Reconciliation</p>
            <p className="mt-0.5 text-xs text-slate-500">Automated daily matches</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald">
              03
            </span>
            <p className="mt-1 text-sm font-bold text-navy">Root-Cause AI</p>
            <p className="mt-0.5 text-xs text-slate-500">Attributed confidence</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald">
              04
            </span>
            <p className="mt-1 text-sm font-bold text-navy">Cost Prioritisation</p>
            <p className="mt-0.5 text-xs text-slate-500">Ranked by pounds (£)</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-center col-span-2 sm:col-span-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald">
              05
            </span>
            <p className="mt-1 text-sm font-bold text-navy">Multi-Site Scale</p>
            <p className="mt-0.5 text-xs text-slate-500">Estate benchmarking</p>
          </div>
        </div>

        {/* Combined Strength Banner */}
        <div className="mt-16 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 text-center shadow-xs sm:p-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-emerald-800">
            Founder Synergy
          </p>
          <blockquote className="mt-2 text-lg font-semibold text-navy sm:text-xl font-serif">
            "PredictivIQ combines hands-on hospitality operations experience with data science and
            technical analytics expertise."
          </blockquote>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            Founded in the UK by operational and technical practitioners who understand the heat of
            hospitality service and the precision of enterprise data science.
          </p>
        </div>

        {/* Two Individual Founder Profile Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md hover:border-slate-300"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy font-serif">{founder.name}</h3>
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald">
                      {founder.role}
                    </p>
                  </div>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <Award className="size-5 text-emerald" />
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{founder.summary}</p>

                {/* Relevant Background Tags */}
                <div className="mt-5">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Core Background & Expertise
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Founder Contact / Credentials */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Phone className="size-3.5 text-emerald" />
                  {founder.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="size-3.5 text-emerald" />
                  {founder.email}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
