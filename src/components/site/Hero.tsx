const SOLUTIONS = ["ShrinkTrace", "VendorScore", "TrainTrace", "ComplaintLens", "TrendGuard"];

const PANEL = [
  { name: "ShrinkTrace", value: "98.1%", width: "98%", bar: "bg-brand", text: "text-brand" },
  { name: "VendorScore", value: "94.2%", width: "94%", bar: "bg-accent", text: "text-accent" },
  { name: "TrainTrace", value: "87.6%", width: "87%", bar: "bg-paper/70", text: "text-paper" },
  { name: "ComplaintLens", value: "91.3%", width: "91%", bar: "bg-paper/70", text: "text-paper" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 size-[520px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute top-40 -left-32 size-[460px] rounded-full bg-brand/15 blur-[120px]" />
        <div className="grid-lines absolute inset-0 opacity-15" />
        <div className="animate-scan absolute top-1/3 left-1/2 h-px w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pt-16 pb-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rise rise-1 glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-brand" />
            Operational intelligence · United Kingdom
          </div>
          <h1 className="rise rise-2 mt-6 max-w-[20ch] text-4xl font-semibold leading-none tracking-tight text-balance sm:text-5xl lg:text-6xl">
            PredictivIQ LTD — AI-Powered Operational Intelligence Solutions
          </h1>
          <p className="rise rise-3 mt-6 max-w-[52ch] text-base text-pretty text-muted sm:text-lg">
            PredictivIQ LTD develops intelligent platforms that transform operational data into
            actionable insights across hospitality, manufacturing and service industries.
          </p>
          <div className="rise rise-4 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pilot"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-5 py-3 text-sm font-medium text-ink ring-1 ring-brand/40 transition-colors hover:bg-brand/90"
            >
              Request a Pilot
              <span className="font-mono">→</span>
            </a>
            <a
              href="#platform"
              className="glass inline-flex items-center gap-2 rounded-[10px] px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-white/10"
            >
              Explore Solutions
            </a>
          </div>
          <div className="rise rise-4 mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] ring-1 ring-white/10 sm:grid-cols-5">
            {SOLUTIONS.map((name, i) => (
              <div key={name} className="bg-ink2/80 p-4">
                <p className="font-mono text-[11px] text-brand">{`0${i + 1}`}</p>
                <p className="mt-1 text-sm font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="animate-floaty glass2 absolute -top-6 -right-4 z-10 w-56 rounded-[14px] p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              TrendGuard
            </p>
            <p className="mt-2 font-mono text-3xl font-medium">+6.7%</p>
            <p className="mt-1 font-mono text-[10px] text-muted">condition signal · 7d</p>
            <div className="mt-3 flex h-10 items-end gap-1">
              {["h-3", "h-4", "h-5", "h-6", "h-8", "h-10"].map((h, i) => (
                <span key={i} className={`w-2 bg-accent/60 ${h}`} />
              ))}
            </div>
          </div>
          <div className="animate-floaty2 glass absolute -bottom-8 -left-4 z-10 w-52 rounded-[14px] p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
              ShrinkTrace
            </p>
            <p className="mt-2 font-mono text-2xl font-medium">£412k</p>
            <p className="mt-1 font-mono text-[10px] text-muted">variance identified · Q3</p>
          </div>
          <div className="glass rounded-[16px] p-5 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Control panel
              </p>
              <span className="font-mono text-[10px] text-brand">● LIVE</span>
            </div>
            <div className="mt-4 space-y-3">
              {PANEL.map((row) => (
                <div key={row.name} className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">{row.name}</span>
                    <span className={`font-mono ${row.text}`}>{row.value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full ${row.bar}`} style={{ width: row.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
