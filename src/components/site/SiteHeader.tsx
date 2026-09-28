import { NAV_LINKS } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="flex items-center">
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight">PredictivIQ LTD</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Operational Intelligence
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted md:flex">
          {NAV_LINKS.slice(1).map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-paper">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#pilot"
          className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-4 py-2 text-sm font-medium text-ink ring-1 ring-brand/40 transition-colors hover:bg-brand/90"
        >
          Request a Pilot
        </a>
      </div>
    </header>
  );
}
