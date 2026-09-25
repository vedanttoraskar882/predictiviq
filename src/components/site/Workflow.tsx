import { WORKFLOW } from "@/lib/site-data";

export function Workflow() {
  return (
    <section id="how-it-works" className="border-t border-line/70 bg-ink2/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">How it works</p>
        <h2 className="mt-4 max-w-[40ch] text-3xl font-semibold tracking-tight text-balance">
          From existing operational data to measurable improvement, in five steps.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[14px] ring-1 ring-white/10 md:grid-cols-5">
          {WORKFLOW.map((s) => (
            <div key={s.step} className="bg-ink p-6">
              <p className="font-mono text-3xl font-medium text-brand/70">{s.step}</p>
              <p className="mt-3 font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-pretty text-muted">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
