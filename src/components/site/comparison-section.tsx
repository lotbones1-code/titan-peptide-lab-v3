// Editorial comparison table — spec-only, no therapeutic claims.
// Competitor archetypes (unnamed) to avoid defamation exposure.

type Cell = { v: string; highlight?: boolean };
type Row = { label: string; us: Cell; premium: Cell; budget: Cell };

const ROWS: Row[] = [
  {
    label: "HPLC reject threshold",
    us: { v: "≥ 99.0%", highlight: true },
    premium: { v: "≥ 98.0%" },
    budget: { v: "≥ 95% / unstated" },
  },
  {
    label: "Independent lab re-test",
    us: { v: "ISO 17025, every batch", highlight: true },
    premium: { v: "Periodic" },
    budget: { v: "None" },
  },
  {
    label: "COA delivered with order",
    us: { v: "Batch-matched, printed", highlight: true },
    premium: { v: "Representative PDF" },
    budget: { v: "Generic / on request" },
  },
  {
    label: "Endotoxin (LAL) testing",
    us: { v: "< 5 EU/mg, logged" },
    premium: { v: "Logged" },
    budget: { v: "Unstated" },
  },
  {
    label: "Mass-spec confirmation",
    us: { v: "ESI-MS, every batch" },
    premium: { v: "On request" },
    budget: { v: "Not performed" },
  },
  {
    label: "Atomizer calibration (nasal)",
    us: { v: "±3% per spray, weight-checked", highlight: true },
    premium: { v: "Factory spec only" },
    budget: { v: "Unspecified" },
  },
  {
    label: "Cleanroom fill",
    us: { v: "Class 7, nitrogen blanket" },
    premium: { v: "Class 8" },
    budget: { v: "Unspecified" },
  },
  {
    label: "Cold-chain shipping",
    us: { v: "Insulated + phase-change pack" },
    premium: { v: "Cold pack" },
    budget: { v: "Ambient" },
  },
  {
    label: "Crypto checkout",
    us: { v: "BTC · ETH · USDC · SOL" },
    premium: { v: "Limited" },
    budget: { v: "None / wire only" },
  },
  {
    label: "Bundled syringes / diluent",
    us: { v: "Never — research use only", highlight: true },
    premium: { v: "Sometimes" },
    budget: { v: "Frequently" },
  },
];

export function ComparisonSection() {
  return (
    <section
      id="compare"
      className="border-b border-white/8 bg-[oklch(0.09_0.005_240)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              §03 — The receipt test
            </div>
            <h2 className="mt-6 font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[0.98] tracking-[-0.02em] text-zinc-50 text-pretty">
              Everyone claims{" "}
              <em className="font-serif italic text-zinc-300">quality</em>.
              Ask for the{" "}
              <em className="text-[var(--signature)] not-italic">paperwork</em>.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-[1.7] text-zinc-400">
              Specifications only — no therapeutic claims, no efficacy
              marketing. Every row is a number you can verify on the
              certificate that ships in your box. Competitor columns reflect
              archetypes across the research-chemical category, not any
              specific vendor.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              For research use only · not for human consumption
            </p>
          </div>
        </header>

        {/* Desktop: full table */}
        <div className="mt-16 hidden lg:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="w-[34%] pb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-normal">
                  Specification
                </th>
                <th className="w-[22%] pb-5 pl-6 font-serif text-xl font-normal text-zinc-50">
                  Titan Peptide Lab
                </th>
                <th className="w-[22%] pb-5 pl-6 font-serif text-xl font-normal text-zinc-400">
                  Premium vendor
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
                    archetype
                  </span>
                </th>
                <th className="w-[22%] pb-5 pl-6 font-serif text-xl font-normal text-zinc-400">
                  Budget vendor
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
                    archetype
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr
                  key={r.label}
                  className="border-b border-zinc-900 last:border-b-0"
                >
                  <th
                    scope="row"
                    className="py-5 font-mono text-xs uppercase tracking-[0.14em] text-zinc-500 font-normal align-top"
                  >
                    {r.label}
                  </th>
                  <td
                    className={`py-5 pl-6 font-mono text-sm tabular-nums align-top ${r.us.highlight ? "text-[var(--signature)]" : "text-zinc-100"}`}
                  >
                    {r.us.v}
                  </td>
                  <td className="py-5 pl-6 font-mono text-sm text-zinc-500 tabular-nums align-top">
                    {r.premium.v}
                  </td>
                  <td className="py-5 pl-6 font-mono text-sm text-zinc-500 tabular-nums align-top">
                    {r.budget.v}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked per-row card list */}
        <div className="mt-12 space-y-8 lg:hidden">
          {ROWS.map((r) => (
            <div
              key={r.label}
              className="border-t border-zinc-800 pt-5"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                {r.label}
              </div>
              <dl className="mt-4 space-y-3 text-sm">
                <MobileRow
                  k="Titan"
                  v={r.us.v}
                  highlight={r.us.highlight}
                />
                <MobileRow k="Premium archetype" v={r.premium.v} muted />
                <MobileRow k="Budget archetype" v={r.budget.v} muted />
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-zinc-800 pt-6">
          <p className="max-w-3xl font-serif text-lg italic leading-[1.6] text-zinc-400">
            If a vendor won&rsquo;t send you the batch-matched chromatogram
            before you order, assume it doesn&rsquo;t exist.
          </p>
        </div>
      </div>
    </section>
  );
}

function MobileRow({
  k,
  v,
  highlight,
  muted,
}: {
  k: string;
  v: string;
  highlight?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="grid grid-cols-[110px_1fr] items-baseline gap-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
        {k}
      </dt>
      <dd
        className={`font-mono tabular-nums ${
          highlight
            ? "text-sm text-[var(--signature)]"
            : muted
              ? "text-xs text-zinc-500"
              : "text-sm text-zinc-100"
        }`}
      >
        {v}
      </dd>
    </div>
  );
}
