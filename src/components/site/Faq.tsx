import { FAQS } from "@/lib/site-data";

export function Faq() {
  return (
    <section id="faq" className="border-t border-line/70 bg-ink2/40">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">FAQ</p>
        <h2 className="mt-4 max-w-[40ch] text-3xl font-semibold tracking-tight text-balance">
          Questions operational teams ask.
        </h2>
        <div className="mt-10 divide-y divide-white/10">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {item.q}
                <span className="font-mono text-lg leading-none text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-pretty text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
