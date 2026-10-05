import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is PredictivIQ?",
      a: "PredictivIQ is an operational intelligence platform that helps multi-site hospitality operators identify and understand the causes behind stock loss, waste and operational variance.",
    },
    {
      q: "Who is PredictivIQ designed for?",
      a: "It is primarily designed for multi-site café, QSR and hospitality operators, groups, and franchisors typically running 4 to 20 or more trading locations.",
    },
    {
      q: "Does PredictivIQ replace our existing EPOS or inventory system?",
      a: "No. PredictivIQ is designed to sit above your existing operational tools, securely using their sales, count, and delivery records as diagnostic inputs.",
    },
    {
      q: "What data does PredictivIQ use?",
      a: "The platform connects and reconciles EPOS transaction sales, inventory stock counts, supplier delivery manifests, and kitchen waste logs.",
    },
    {
      q: "What types of shrinkage can PredictivIQ identify?",
      a: "The diagnostic engine classifies likely causes such as kitchen spoilage, prep discard, portion drift, supplier short-deliveries, till variance, and theft risk.",
    },
    {
      q: "How does the pilot work?",
      a: "Businesses begin with a scoped, non-intrusive two-week assessment on their operational data to evaluate reconciliation matches and quantify identified margin recovery.",
    },
    {
      q: "How is PredictivIQ priced?",
      a: "Pricing is transparent and scales with estate size: £149–£249/site/month subscription, £500–£1,500 estate onboarding, advisory included above 15 sites, and custom franchisor options.",
    },
    {
      q: "How quickly can implementation take place?",
      a: "Deployment follows a structured rollout of approximately two to four weeks per estate, starting with a data-connection audit and shadow verification period.",
    },
  ];

  return (
    <section id="faq" className="border-t border-slate-200/80 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Clarifications & FAQs
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Straightforward answers about PredictivIQ's intelligence layer, deployment timeline, and
            data model.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="mt-14 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-navy sm:text-lg pr-4 font-serif">
                    {faq.q}
                  </span>
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-emerald-50 text-emerald" : ""
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4 animate-in fade-in-50 duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
