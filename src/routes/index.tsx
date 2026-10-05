import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { VisualStatement } from "@/components/site/VisualStatement";
import { Problem } from "@/components/site/Problem";
import { Platforms } from "@/components/site/Platforms";
import { Workflow } from "@/components/site/Workflow";
import { ProductDashboard } from "@/components/site/ProductDashboard";
import { FeatureShowcase } from "@/components/site/FeatureShowcase";
import { DailyWorkflow } from "@/components/site/DailyWorkflow";
import { MultiSiteOperations } from "@/components/site/MultiSiteOperations";
import { Innovation } from "@/components/site/Innovation";
import { CompetitiveDiff } from "@/components/site/CompetitiveDiff";
import { MarketOpportunity } from "@/components/site/MarketOpportunity";
import { Pricing } from "@/components/site/Pricing";
import { About } from "@/components/site/About";
import { TrustSustainability } from "@/components/site/TrustSustainability";
import { Faq } from "@/components/site/Faq";
import { PilotForm } from "@/components/site/PilotForm";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "PredictivIQ LTD | SEE MORE LOSE LESS";
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
        {/* 1. Hero */}
        <Hero />

        {/* 2. Visual Statement (Your systems tell you WHAT happened. PredictivIQ helps explain WHY.) */}
        <VisualStatement />

        {/* 3. The Problem (Too Much Data. Not Enough Diagnosis.) */}
        <Problem />

        {/* 4. PredictivIQ Platform (One Intelligence Layer Across Your Operation) */}
        <Platforms />

        {/* 5. How It Works (01 Connect -> 02 Reconcile -> 03 Diagnose -> 04 Prioritise -> 05 Act -> 06 Improve) */}
        <Workflow />

        {/* 6. Product Dashboard (Realistic interactive dashboard mockup) */}
        <ProductDashboard />

        {/* 7. Feature Showcase (6 alternating editorial visual sections) */}
        <FeatureShowcase />

        {/* 8. A Day With PredictivIQ (Morning, Review, Action, Corrective Action, Weekly, Monthly) */}
        <DailyWorkflow />

        {/* 9. Multi-Site Operations & Mobile App Experience */}
        <MultiSiteOperations />

        {/* 10. Innovation (Beyond Reporting. Into Diagnosis.) */}
        <Innovation />

        {/* 11. Competitive Positioning */}
        <CompetitiveDiff />

        {/* 12. Market Opportunity */}
        <MarketOpportunity />

        {/* 13. Pricing (Pricing That Scales With Your Estate) */}
        <Pricing />

        {/* 14. About / Founders (Built From Real Operational Experience) */}
        <About />

        {/* 15. Trust, Security & Sustainability */}
        <TrustSustainability />

        {/* 16. FAQ (Clean accordion) */}
        <Faq />

        {/* 17. Request a Pilot (Ready to See Where Your Losses Are Coming From?) */}
        <PilotForm />
      </main>
      <SiteFooter />
    </div>
  );
}
