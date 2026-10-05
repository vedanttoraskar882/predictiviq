import { createFileRoute } from "@tanstack/react-router";
import { PilotForm } from "@/components/site/PilotForm";
import { ShieldCheck, Lock, Server, CheckCircle2 } from "lucide-react";

const TITLE = "Request a PredictivIQ Pilot";
const DESCRIPTION =
  "Request a scoped two-week operational pilot of PredictivIQ on your own venue data with zero hardware or contract disruption.";

export const Route = createFileRoute("/request-a-pilot")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RequestPilotPage,
});

function RequestPilotPage() {
  return (
    <div className="py-12 md:py-16">
      {/* 1. Main Pilot Form Component with exact heading & requirements */}
      <PilotForm />

      {/* 2. Pilot Commitment & Data Privacy Guarantees */}
      <div className="mx-auto max-w-5xl px-6 pt-12">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs text-center">
            <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald">
              <Server className="size-5" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-navy font-serif">UK Data Sovereignty</h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              All pilot ingestion files and evaluation models operate securely within certified UK
              data centres.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs text-center">
            <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald">
              <Lock className="size-5" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-navy font-serif">Zero Payment Data</h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              We never ingest, process, or store payment card, PCI-DSS, or customer-identifiable
              card data.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs text-center">
            <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="mt-3 text-sm font-bold text-navy font-serif">GDPR Compliant</h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed">
              Transparent UK GDPR data processing agreement signed prior to any live shadow
              evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
