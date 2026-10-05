import { createFileRoute, Link } from "@tanstack/react-router";
import { FeatureShowcase } from "@/components/site/FeatureShowcase";
import { CompetitiveDiff } from "@/components/site/CompetitiveDiff";
import { ArrowRight } from "lucide-react";

const TITLE = "PredictivIQ Solutions";
const DESCRIPTION =
  "Explore PredictivIQ's operational intelligence solutions: stock & variance, root-cause diagnosis, waste intelligence, supplier tracking, and multi-site benchmarking.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <div className="py-12 md:py-16">
      {/* 1. Page Header */}
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
          Purpose-Built Operational Solutions
        </span>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl font-serif">
          PredictivIQ Solutions
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 sm:text-lg">
          Explore our six core operational intelligence pillars engineered to isolate variance,
          recover margins, and standardise multi-site hospitality oversight.
        </p>
      </div>

      {/* 2. Six Visual Solution Sections */}
      <div className="mt-8">
        <FeatureShowcase />
      </div>

      {/* 3. Market & Competitive Distinction */}
      <div className="mt-12">
        <CompetitiveDiff />
      </div>

      {/* 4. Page CTA */}
      <div className="mx-auto max-w-5xl px-6 pt-16 text-center">
        <div className="rounded-3xl bg-navy p-8 text-white sm:p-12 shadow-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
            Take Action
          </span>
          <h3 className="mt-2 text-2xl font-bold font-serif sm:text-3xl">
            Ready to See Where Your Losses Are Coming From?
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Discover how PredictivIQ solutions apply directly to your multi-site operational data.
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
