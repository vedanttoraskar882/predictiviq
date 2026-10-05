import { Phone, Mail, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { FOUNDERS } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Leadership & Proven Heritage
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            Built From Real Operational Experience
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            PredictivIQ LTD was created around a persistent, practical challenge: venue and estate
            managers have an abundance of reports, but rarely a clear, definitive explanation of
            what is driving shrinkage and loss.
          </p>
        </div>

        {/* Founder Synergy Quote */}
        <div className="mt-14 rounded-3xl border border-emerald-200 bg-white p-7 text-center shadow-xs sm:p-9 max-w-4xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
            Founder Synergy
          </span>
          <blockquote className="mt-3 text-xl font-bold text-navy sm:text-2xl font-serif leading-snug">
            "PredictivIQ combines hands-on hospitality operations experience with data science and
            technical analytics expertise."
          </blockquote>
          <p className="mt-3 text-xs text-slate-500 max-w-2xl mx-auto">
            Founded in the UK by practitioners who understand both the fast-paced reality of
            hospitality service and the precision of algorithmic data science.
          </p>
        </div>

        {/* Two Individual Founder Profile Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {FOUNDERS.map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-slate-300"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-navy font-serif">{founder.name}</h3>
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald mt-1">
                      {founder.role}
                    </p>
                  </div>
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald">
                    <Award className="size-5" />
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{founder.summary}</p>

                {/* Relevant Background Tags */}
                <div className="mt-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Relevant Experience & Expertise
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Founder Contact / Direct Credentials */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-mono">
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
