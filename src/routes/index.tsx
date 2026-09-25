import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { Hero } from "@/components/site/Hero";
import { PilotForm } from "@/components/site/PilotForm";
import { Platforms } from "@/components/site/Platforms";
import { Pricing } from "@/components/site/Pricing";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Workflow } from "@/components/site/Workflow";

const TITLE = "PredictivIQ LTD | AI-Powered Operational Intelligence Solutions";
const DESCRIPTION =
  "PredictivIQ LTD provides AI-powered platforms for operational intelligence, helping businesses reduce risks, improve efficiency and make data-driven decisions.";

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
    <div className="min-h-screen bg-ink font-sans text-paper">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Platforms />
        <Workflow />
        <Pricing />
        <Faq />
        <PilotForm />
      </main>
      <SiteFooter />
    </div>
  );
}
