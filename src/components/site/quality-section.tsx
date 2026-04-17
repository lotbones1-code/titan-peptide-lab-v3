const STEPS = [
  {
    n: "01",
    title: "Lot intake",
    body: "Every nasal spray batch gets a Titan lot code before fill. That code stays tied to the bottle, internal record, certificate, and checkout reference.",
  },
  {
    n: "02",
    title: "HPLC purity screen",
    body: "Release threshold is HPLC purity of at least 99%. Chromatogram, method, test date, and reviewer initials stay attached to each lot record.",
  },
  {
    n: "03",
    title: "COA match",
    body: "The certificate references the exact same lot carried through the order workflow. No representative COAs get swapped across batches.",
  },
  {
    n: "04",
    title: "Cold-chain dispatch",
    body: "Liquid orders are packed for temperature control, fulfilled manually, and sent with tracking plus the matching certificate within 24 hours.",
  },
];

const METRICS = [
  ["≥99%", "HPLC release threshold"],
  ["1:1", "Bottle lot to COA match"],
  ["24h", "Manual fulfillment window"],
  ["QR", "Certificate lookup path"],
];

export function QualitySection() {
  return (
    <section
      id="quality"
      className="border-b border-[#dde4da] bg-[linear-gradient(180deg,#fffdfa_0%,#f5f0e8_100%)] py-20 text-[#13211c] lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6c7a73]">
            Quality system
          </p>
          <h2 className="mt-5 max-w-lg font-serif text-[clamp(2.6rem,4.8vw,4.7rem)] leading-[0.96] tracking-[-0.04em]">
            The certificate stays attached to the bottle, not just the brand.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-[#55645d]">
            The whole point of the workflow is keeping batch identity intact.
            Compound, certificate, QR lookup, and shipping note all resolve to
            the same lot instead of a generic promise page.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-[#d9e0d7] bg-[#d9e0d7] shadow-sm">
            {METRICS.map(([value, label]) => (
              <div key={label} className="bg-white/88 p-5">
                <p className="font-serif text-4xl italic leading-none text-[#13211c]">
                  {value}
                </p>
                <p className="mt-2 text-sm leading-5 text-[#55645d]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <ol className="grid gap-5">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="grid gap-6 rounded-[1.5rem] border border-[#d8dfd7] bg-white/82 p-6 shadow-[0_18px_50px_-38px_rgba(19,33,28,0.32)] sm:grid-cols-[88px_1fr]"
            >
              <span className="font-mono text-sm text-[#2d7b62]">{step.n}</span>
              <div>
                <h3 className="font-serif text-[2rem] leading-[1.02] tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#55645d]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
