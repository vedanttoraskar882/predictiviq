import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { VisualStatement } from "@/components/site/VisualStatement";
import { Problem } from "@/components/site/Problem";
import {
  HomeFeaturePreview,
  HomeWorkflowPreview,
  HomeMultiSitePreview,
  HomePricingPreview,
  HomeFinalCta,
} from "@/components/site/HomePreviews";

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
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* 1. Hero: See More. Lose Less. */}
      <Hero />

      {/* 2. Visual Statement: Your systems tell you WHAT happened. PredictivIQ helps explain WHY. */}
      <VisualStatement />

      {/* 3. Problem Section: 4 Data Sources (POS, Inventory, Delivery, Waste) -> PredictivIQ Intelligence Layer */}
      <Problem />

      {/* 4. Feature Preview: 6 major capabilities with links to /solutions */}
      <HomeFeaturePreview />

      {/* 5. How It Works Preview: Connect -> Reconcile -> Diagnose -> Prioritise -> Act -> Improve */}
      <HomeWorkflowPreview />

      {/* 6. Multi-Site Operations Preview */}
      <HomeMultiSitePreview />

      {/* 7. Pricing Preview */}
      <HomePricingPreview />

      {/* 8. Final CTA: Ready to See Where Your Losses Are Coming From? */}
      <HomeFinalCta />
    </>
  );
}
