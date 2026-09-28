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
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="mt-4 max-w-[40ch] text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Built around real operational problems, not generic dashboards.
          </h2>
          <p className="mt-5 max-w-[54ch] text-pretty text-muted sm:text-lg">
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
          <ul className="mt-8 space-y-2.5 text-sm text-muted">
            {CHALLENGES.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
