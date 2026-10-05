import {
  ShieldCheck,
  Lock,
  Server,
  CreditCard,
  FileCheck,
  Database,
  Leaf,
  Sparkles,
  TrendingDown,
} from "lucide-react";

export function TrustSustainability() {
  const trustItems = [
    {
      title: "UK-Region Hosting",
      desc: "All platform infrastructure and customer data resides securely within certified UK data centres.",
      icon: Server,
    },
    {
      title: "Role-Based Access Control",
      desc: "Granular permissions ensure store staff, area managers, and executives only access relevant data.",
      icon: ShieldCheck,
    },
    {
      title: "TLS 1.3 & AES-256 Encryption",
      desc: "Industry-standard cryptographic encryption both in transit and at rest.",
      icon: Lock,
    },
    {
      title: "Zero Payment-Card Storage",
      desc: "No consumer credit card or PCI-DSS sensitive transaction data is ever ingested or stored.",
      icon: CreditCard,
    },
    {
      title: "Audit Logging & Daily Backups",
      desc: "Immutable change logs for every user action, paired with automated daily backups.",
      icon: Database,
    },
    {
      title: "GDPR-Compliant DPA",
      desc: "Fully compliant with UK GDPR regulations, backed by transparent Data Processing Agreements.",
      icon: FileCheck,
    },
  ];

  return (
    <section className="border-t border-slate-200/80 bg-slate-50/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* ========================================================
            PART 1: TRUST & SECURITY (Section 29)
            ======================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            Data Governance & Compliance
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl font-serif">
            Security & Trust by Design
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Built from day one to respect UK regulatory frameworks and protect confidential
            operational telemetry.
          </p>
        </div>

        {/* 6 Compact Trust Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-emerald-300 hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                </div>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            PART 2: SUSTAINABILITY (Section 30)
            ======================================================== */}
        <div className="mt-20 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm max-w-5xl mx-auto lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
                <Leaf className="size-3.5 text-emerald" />
                Operational Sustainability
              </div>
              <h3 className="mt-4 text-2xl font-bold text-navy font-serif sm:text-3xl">
                Visibility Drives Waste Reduction
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Sustainability in food operations begins with visibility. When hospitality teams can
                clearly pinpoint food waste, stock losses, and operational inefficiencies at the
                station and SKU level, smarter resource management naturally follows.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="font-mono text-[10px] uppercase text-emerald font-bold block mb-1">
                    Food Waste
                  </span>
                  <p className="text-xs text-slate-700 font-medium">Prevent prep overproduction</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="font-mono text-[10px] uppercase text-emerald font-bold block mb-1">
                    Stock Loss
                  </span>
                  <p className="text-xs text-slate-700 font-medium">Stop spoilage before expiry</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <span className="font-mono text-[10px] uppercase text-emerald font-bold block mb-1">
                    Efficiency
                  </span>
                  <p className="text-xs text-slate-700 font-medium">
                    Optimize kitchen batch yields
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh produce and sustainable ingredients"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-mono bg-navy/80 backdrop-blur-md p-2 rounded-lg border border-white/10 text-center">
                  Targeted prevention beats late disposal.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
