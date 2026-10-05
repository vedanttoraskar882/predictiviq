import { createFileRoute, Link } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { TrustSustainability } from "@/components/site/TrustSustainability";
import { ArrowRight, HelpCircle } from "lucide-react";

const TITLE = "PredictivIQ FAQ";
const DESCRIPTION =
  "Frequently asked questions about PredictivIQ: platform capabilities, data ingestion, root-cause attribution, pilot evaluation, and deployment timelines.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="py-12 md:py-16">
      {/* 1. Page Header */}
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
          Knowledge Base & FAQs
        </span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl font-serif">
          PredictivIQ FAQ
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          Clear, concise answers to common questions about our operational intelligence
          architecture, supported data feeds, and pilot evaluation.
        </p>
      </div>

      {/* 2. Interactive Accordion FAQ List (10 Questions) */}
      <div className="mt-8">
        <Faq />
      </div>

      {/* 3. Security, Trust & Governance Overview */}
      <div className="mt-12">
        <TrustSustainability />
      </div>

      {/* 4. Page CTA */}
      <div className="mx-auto max-w-5xl px-6 pt-16 text-center">
        <div className="rounded-3xl bg-navy p-8 text-white sm:p-12 shadow-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
            Still Have Questions?
          </span>
          <h3 className="mt-2 text-2xl font-bold font-serif sm:text-3xl">
            Discuss Your Estate Requirements
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Our operational team is available to discuss your specific EPOS setup and structure a
            pilot assessment.
          </p>
          <div className="mt-6">
            <Link
              to="/request-a-pilot"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald px-6 py-3 text-sm font-bold text-white shadow hover:bg-emerald-dark"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
