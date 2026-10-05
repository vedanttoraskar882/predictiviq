import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { About } from "@/components/site/About";
import { Workflow } from "@/components/site/Workflow";
import { Platforms } from "@/components/site/Platforms";
import { DataFlow } from "@/components/site/DataFlow";
import { DailyWorkflow } from "@/components/site/DailyWorkflow";
import { Innovation } from "@/components/site/Innovation";
import { CompetitiveDiff } from "@/components/site/CompetitiveDiff";
import { MarketOpportunity } from "@/components/site/MarketOpportunity";
import { Technology } from "@/components/site/Technology";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { PilotForm } from "@/components/site/PilotForm";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "PredictivIQ LTD | AI-Powered Operational Intelligence";
const DESCRIPTION =
  "PredictivIQ helps multi-site hospitality operators uncover the causes behind stock loss, waste and operational variance with AI-powered operational intelligence.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald/20 selection:text-emerald-900">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <About />
        <Workflow />
        <Platforms />
        <DataFlow />
        <DailyWorkflow />
        <Innovation />
        <CompetitiveDiff />
        <MarketOpportunity />
        <Technology />
        <Pricing />
        <Faq />
        <PilotForm />
      </main>
      <SiteFooter />
    </div>
  );
}
