import { NAV_LINKS, FOUNDERS, CONTACT_EMAIL, WEBSITE_URL } from "@/lib/site-data";
import { Mail, Globe, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-navy text-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Footer Row */}
        <div className="grid gap-12 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2">
              <img
                src="/logo-horizontal-white.png"
                alt="PredictivIQ LTD"
                className="h-11 sm:h-12 w-auto object-contain"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
                See More. Lose Less.
              </p>
            </div>

            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              AI-Powered Operational Intelligence for a More Profitable Food Future. Connecting
              multi-site operational telemetry into actionable root-cause attribution.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs font-mono text-slate-300">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 hover:text-emerald-300 transition"
              >
                <Mail className="size-3.5 text-emerald-400" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <span className="inline-flex items-center gap-2">
                <Globe className="size-3.5 text-emerald-400" />
                <span>{WEBSITE_URL}</span>
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-emerald-300 transition">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#pilot" className="text-emerald-400 font-semibold hover:underline">
                  Request a Pilot
                </a>
              </li>
            </ul>
          </div>

          {/* Leadership & Directors */}
          <div className="lg:col-span-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Company Leadership
            </h4>
            <div className="space-y-4">
              {FOUNDERS.map((f) => (
                <div key={f.name} className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                  <p className="text-sm font-bold text-white font-serif">{f.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                    Director, PredictivIQ
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono text-slate-300">
                    <Phone className="size-3 text-emerald-400" />
                    <span>{f.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} PredictivIQ LTD. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            Smarter Operations. A Better Tomorrow. · UK Hosted
          </p>
        </div>
      </div>
    </footer>
  );
}
