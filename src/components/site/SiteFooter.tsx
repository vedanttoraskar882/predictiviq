import { NAV_LINKS } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-ink2/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-[8px] bg-gradient-to-br from-accent to-brand font-mono text-xs font-medium text-ink">
              PQ
            </span>
            <p className="text-sm text-muted">
              PredictivIQ LTD · AI-powered operational intelligence solutions
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-paper">
                {link.label}
              </a>
            ))}
            <a href="#pilot" className="text-brand transition-colors hover:text-paper">
              Request a Pilot
            </a>
          </nav>
        </div>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          © PredictivIQ LTD
        </p>
      </div>
    </footer>
  );
}
