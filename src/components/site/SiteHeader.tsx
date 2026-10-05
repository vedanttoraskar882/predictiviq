import { useState } from "react";
import { NAV_LINKS } from "@/lib/site-data";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/logo-predictiviq.png"
            alt="PredictivIQ Logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-navy">
              PredictivIQ <span className="text-xs font-normal text-slate-500">LTD</span>
            </span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-emerald">
              See More. Lose Less.
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-emerald">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#pilot"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-dark hover:shadow active:scale-95"
          >
            Request a Pilot
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-slate-200 bg-white px-6 py-5 md:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-slate-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1 text-base transition-colors hover:text-emerald"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pilot"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-emerald px-4 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-emerald-dark"
            >
              Request a Pilot
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
