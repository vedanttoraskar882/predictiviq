const FOUNDERS = [
  {
    name: "Sai Tharun Rallabandi",
    initials: "SR",
    role: "Co-founder",
    skills:
      "Data Science postgraduate. Technical operations, SAP MM, process analytics, SCADA data analysis, root-cause identification and operational reporting.",
  },
  {
    name: "Upendra Dariveri",
    initials: "UD",
    role: "Co-founder",
    skills:
      "Data Science postgraduate. Hospitality operations, café and restaurant management, POS systems, inventory management, waste control, team leadership, training and compliance.",
  },
];

const CAPABILITIES = [
  "Data analytics",
  "Artificial intelligence",
  "Industry expertise",
  "Operational workflows",
];

const CHALLENGES = [
  "Food waste and stock shrinkage",
  "Supplier reliability",
  "Staff compliance",
  "Customer complaints",
  "Industrial equipment reliability",
];

export function About() {
  return (
    <section id="about" className="border-t border-line/70 bg-ink2/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">About</p>
            <h2 className="mt-4 max-w-[40ch] text-3xl font-semibold tracking-tight text-balance">
              Built around real operational problems, not generic dashboards.
            </h2>
            <p className="mt-5 max-w-[48ch] text-pretty text-muted">
              PredictivIQ LTD builds specialised AI-driven operational intelligence platforms
              designed around real-world business challenges. Rather than replacing existing systems,
              the platforms connect with existing business processes and transform operational data
              into actionable insights.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              {CAPABILITIES.map((c) => (
                <span key={c} className="glass rounded-full px-3 py-1.5">
                  {c}
                </span>
              ))}
            </div>
            <ul className="mt-8 space-y-2 text-sm text-muted">
              {CHALLENGES.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {FOUNDERS.map((f) => (
              <div
                key={f.name}
                className="glass rounded-[14px] p-6 transition-transform hover:-translate-y-1"
              >
                <div className="grid aspect-square place-items-center rounded-[12px] bg-ink3">
                  <span className="font-mono text-5xl font-medium text-accent/70">{f.initials}</span>
                </div>
                <p className="mt-4 font-semibold">{f.name}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                  {f.role}
                </p>
                <p className="mt-3 text-sm text-pretty text-muted">{f.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
