import { createFileRoute, Link } from "@tanstack/react-router";
import { FOUNDERS } from "@/lib/site-data";
import {
  Award,
  Phone,
  Mail,
  CheckCircle2,
  Coffee,
  Database,
  Building2,
  Layers,
  ArrowRight,
} from "lucide-react";

const TITLE = "About PredictivIQ LTD | Operational Intelligence";
const DESCRIPTION =
  "Learn how PredictivIQ was built by hospitality and data science practitioners to solve stock loss, waste, and operational variance for UK multi-site operators.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const whyPoints = [
    {
      title: "Operationally Grounded",
      desc: "Conceived and refined from real hospitality shift leadership — understanding the heat of service, staff turnover, and tight kitchen margins.",
      icon: Coffee,
      badge: "Real Venue Experience",
    },
    {
      title: "Data-Driven",
      desc: "Built with rigorous process analytics and statistical modelling to attribute variance causes with transparent, actionable confidence scores.",
      icon: Database,
      badge: "Algorithmic Precision",
    },
    {
      title: "Built for Multi-Site Businesses",
      desc: "Standardises operational telemetry across multiple store locations, dayparts, and regional groups into clear benchmark league tables.",
      icon: Building2,
      badge: "Estate Governance",
    },
    {
      title: "Works Alongside Existing Systems",
      desc: "A pure intelligence layer that securely uses your current EPOS, inventory, and invoice feeds without requiring disruptive system replacements.",
      icon: Layers,
      badge: "Zero Friction",
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header / Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            About PredictivIQ LTD
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl font-serif">
            Built From Real Operational Experience
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl">
            PredictivIQ was created to solve a persistent industry frustration: hospitality
            operators have an abundance of reports, but rarely a clear, definitive explanation of
            what is driving shrinkage and loss.
          </p>
        </div>

        {/* Narrative Section: Why PredictivIQ Exists */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12 max-w-5xl mx-auto">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald">
                Our Purpose
              </span>
              <h2 className="mt-2 text-2xl font-bold text-navy font-serif sm:text-3xl">
                Bridging Hospitality Operations & Enterprise Data Science
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                In food-service, standard stocktakes happen weeks after trading, delivering lagging
                variances that cannot be audited or corrected in time. Point-of-sale systems record
                transactions. Inventory tools count stock. Waste bins collect discards.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                PredictivIQ brings these disconnected signals together into a single, daily
                intelligence layer. We automatically reconcile theoretical recipe yields against
                physical shelf counts, delivery receipts, and waste logs — attributing root causes
                so managers know exactly where to intervene before losses compound.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-lg bg-slate-100 px-3 py-1.5">Hospitality Operations</span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5">Data Science</span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5">Operational Analytics</span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5">Inventory & Waste</span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5">Yield Recovery</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern hospitality dining room"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono bg-navy/80 backdrop-blur-md p-2.5 rounded-xl border border-white/10 text-center">
                  "See More. Lose Less."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: "Why PredictivIQ?" (4 Visual Points) */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              Foundational Principles
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy font-serif sm:text-4xl">
              Why PredictivIQ?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Four core principles define how our platform is engineered and delivered.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {whyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-emerald-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald">
                        <Icon className="size-5" />
                      </div>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-slate-600">
                        {point.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-navy font-serif leading-snug">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{point.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-mono text-emerald">
                    <CheckCircle2 className="size-3.5" />
                    <span>Verified Core Tenet</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Founder Profile Cards */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
              Company Leadership
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy font-serif sm:text-4xl">
              Company Directors
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Hands-on leadership combining frontline hospitality mastery with industrial data
              science.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-slate-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-navy font-serif">{founder.name}</h3>
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald mt-1">
                        {founder.role}
                      </p>
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald">
                      <Award className="size-5" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{founder.summary}</p>

                  <div className="mt-6">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                      Relevant Experience & Expertise
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {founder.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Phone className="size-3.5 text-emerald" />
                    {founder.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="size-3.5 text-emerald" />
                    {founder.email}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page CTA */}
        <div className="mt-20 rounded-3xl bg-navy p-8 text-white text-center sm:p-12 shadow-xl max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
            Partner With Us
          </span>
          <h3 className="mt-2 text-2xl font-bold font-serif sm:text-3xl">
            Evaluate PredictivIQ On Your Venue Data
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Discover where margin leakage and portion drift occur across your trading estate through
            a scoped pilot.
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
