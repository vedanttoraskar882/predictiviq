import { PRICING } from "@/lib/site-data";

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-line/70">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          Market pricing
        </p>
        <h2 className="mt-4 max-w-[40ch] text-3xl font-semibold tracking-tight text-balance">
          Per-platform pricing, in GBP.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((p) => (
            <div
              key={p.name}
              className="glass rounded-[14px] p-6 transition-transform hover:-translate-y-1"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                {p.name}
              </p>
              <p className="mt-4 font-mono text-3xl font-medium">
                {p.headline}
                <span className="text-base text-muted">{p.unit}</span>
              </p>
              <dl className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
                {p.lines.map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                      {label}
                    </dt>
                    <dd className="mt-1 text-pretty">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
          <div className="glass2 flex flex-col justify-between rounded-[14px] p-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                Not sure where to start?
              </p>
              <p className="mt-4 text-pretty text-muted">
                Each platform operates independently. Start with a single pilot and add further
                platforms as requirements grow.
              </p>
            </div>
            <a
              href="#pilot"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-brand transition-colors hover:text-paper"
            >
              Request a Pilot <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
