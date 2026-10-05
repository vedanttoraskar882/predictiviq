import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NAV_LINKS } from "@/lib/site-data";
import { Menu, X, ArrowRight } from "lucide-react";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
        {/* Left: Logo linking to Home */}
        <Link to="/" className="flex items-center group py-0.5" aria-label="PredictivIQ Home">
          <img
            src="/logo-horizontal.png"
            alt="PredictivIQ"
            className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "font-bold text-emerald border-b-2 border-emerald"
                    : "text-slate-600 hover:text-emerald"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Prominent Request a Pilot CTA */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            to="/request-a-pilot"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-emerald-dark hover:shadow active:scale-95"
          >
            <span>Request a Pilot</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-slate-200 bg-white px-6 py-5 lg:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-slate-700">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-1.5 text-base transition-colors ${
                    isActive ? "font-bold text-emerald" : "text-slate-700 hover:text-emerald"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/request-a-pilot"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald px-4 py-3 text-center text-sm font-semibold text-white shadow hover:bg-emerald-dark"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
