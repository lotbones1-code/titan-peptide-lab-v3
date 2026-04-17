// Editorial spread — replaces the "4-icon grid in colored circles" template tell.
// Numbered process narrative on left, oversized batch-card visual on right.

const STEPS = [
  {
    n: "01",
    title: "Synthesis",
    body: "Sourced from a single manufacturing partner audited twice yearly. Solid-phase peptide synthesis, lyophilized within four hours of cleavage.",
  },
  {
    n: "02",
    title: "HPLC verification",
    body: "Every batch is analyzed in-house, then re-tested by an independent ISO 17025 lab. Both chromatograms are kept on file. Reject threshold: 99.0%.",
  },
  {
    n: "03",
    title: "Atomizer fill",
    body: "Filled in a Class 7 cleanroom under nitrogen blanket. Atomizer head is calibrated to ±3% per spray volume. Each unit is weight-checked.",
  },
  {
    n: "04",
    title: "Batch-matched dispatch",
    body: "Your box ships with the printed certificate from the exact batch on your bottle. Same lot number on both. No representative samples.",
  },
];

export function QualitySection() {
  return (
    <section
      id="quality"
      className="border-b border-white/8 bg-[oklch(0.10_0.005_240)] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section eyebrow */}
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          §02 — Process
        </div>

        {/* Editorial 12-col split */}
        <div className="mt-12 grid gap-x-12 gap-y-16 lg:grid-cols-12">
          {/* Left — process narrative */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[0.98] tracking-[-0.02em] text-zinc-50 text-pretty">
              The certificate is the{" "}
              <em className="text-[var(--signature)] not-italic">product</em>.
              The peptide is the{" "}
              <em className="font-serif italic text-zinc-300">receipt</em>.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-[1.7] text-zinc-400">
              Most vendors send a generic chromatogram with every order — the
              same one, regardless of batch. That&rsquo;s not verification, it&rsquo;s
              decoration. Here&rsquo;s what we do instead.
            </p>

            <ol className="mt-12 space-y-10">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-zinc-800 pt-6"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--signature)] tabular-nums">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-normal leading-tight text-zinc-50">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-[1.7] text-zinc-400">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right — sticky proof artifact */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              {/* Mock COA card — paper-toned to break the dark-only template */}
              <figure className="bg-[var(--paper)] p-8 text-[var(--paper-foreground)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
                <div className="flex items-baseline justify-between border-b border-zinc-300 pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  <span>Certificate of Analysis</span>
                  <span>TPL-2604-A</span>
                </div>

                <h3 className="mt-6 font-serif text-3xl leading-[1.05] text-zinc-900">
                  BPC-157
                  <br />
                  <span className="text-zinc-500">Lyophilized · 5 mg</span>
                </h3>

                <dl className="mt-8 space-y-4 text-sm">
                  <Row k="Method" v="HPLC-UV, 220 nm" />
                  <Row k="Purity (area %)" v="99.42" highlight />
                  <Row k="Mass (ESI-MS)" v="1419.5 m/z [M+H]" />
                  <Row k="Endotoxin (LAL)" v="< 5 EU/mg" />
                  <Row k="Moisture (KF)" v="2.1%" />
                  <Row k="Synthesized" v="2026-04-04" />
                  <Row k="Tested" v="2026-04-09 (in-house) · 2026-04-11 (ISO 17025)" />
                </dl>

                <div className="mt-8 border-t border-zinc-300 pt-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    Released by
                  </div>
                  <div className="mt-2 font-serif text-lg italic text-zinc-700">
                    Dr. M. Voss, QA Lead
                  </div>
                </div>
              </figure>

              <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Plate 02 — Specimen COA, batch TPL-2604-A. Yours arrives in
                the box.
              </figcaption>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Row({
  k,
  v,
  highlight,
}: {
  k: string;
  v: string;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-[140px_1fr] items-baseline gap-4 border-b border-zinc-200 pb-2">
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
        {k}
      </dt>
      <dd
        className={`font-mono tabular-nums ${highlight ? "text-base font-semibold text-zinc-900" : "text-xs text-zinc-700"}`}
      >
        {v}
      </dd>
    </div>
  );
}
