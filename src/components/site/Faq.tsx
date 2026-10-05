import { FAQS } from "@/lib/site-data";
import { HelpCircle } from "lucide-react";

export function Faq() {
  return (
    <section id="faq" className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl font-serif">
            Common Questions About PredictivIQ
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Everything you need to know about our operational intelligence platform, data
            integration, and deployment.
          </p>
        </div>

        {/* FAQs List */}
        <div className="mt-14 space-y-4">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-emerald-300 hover:shadow-sm"
            >
              <h3 className="flex items-start gap-3 text-base font-bold text-navy">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-mono font-bold text-emerald">
                  Q
                </span>
                <span>{faq.q}</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 pl-9">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
