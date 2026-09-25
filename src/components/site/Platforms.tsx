import { PLATFORMS } from "@/lib/site-data";

export function Platforms() {
  return (
    <section id="platform" className="border-t border-line/70">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              The platform
            </p>
            <h2 className="mt-4 max-w-[40ch] text-3xl font-semibold tracking-tight text-balance">
              Five specialised platforms, one operational spine.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.12em]">
            {PLATFORMS.map((p, i) => (
              <span
                key={p.name}
                className={
                  i === 0
                    ? "rounded-full bg-brand/15 px-3 py-1.5 text-brand"
                    : "glass rounded-full px-3 py-1.5 text-muted"
                }
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {PLATFORMS.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-[16px] p-7 transition-transform hover:-translate-y-1 ${
                i === 0 ? "glass2" : "glass"
              } ${i === PLATFORMS.length - 1 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-accent">{p.subtitle}</p>
                </div>
                <span
                  className={`shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] ${
                    i === 0 ? "text-brand" : "text-muted"
                  }`}
                >
                  {`0${i + 1}`}
                </span>
              </div>
              <p className="mt-4 text-sm text-pretty text-muted">{p.description}</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    Key features
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    Target customers
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {p.customers.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
