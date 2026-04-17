const STEPS = [
  {
    n: "01",
    title: "Lot intake",
    body: "Every nasal spray batch is assigned a Titan lot code before fill. That lot code follows the bottle, internal record, certificate, and checkout note.",
  },
  {
    n: "02",
    title: "HPLC purity screen",
    body: "Release threshold is HPLC purity of at least 99%. Chromatogram, method, test date, and reviewer initials are retained for each lot.",
  },
  {
    n: "03",
    title: "QR certificate match",
    body: "The QR on the certificate resolves to the same lot code printed on the order record. No representative COAs are substituted across batches.",
  },
  {
    n: "04",
    title: "Cold-chain dispatch",
    body: "Orders are packed for temperature control, then manually fulfilled with tracking and the matching certificate within 24 hours.",
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
      className="border-b border-white/10 bg-[#E8ECF0] py-20 text-[#07100E] lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:px-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-xs uppercase text-[#426158]">
            Quality system
          </p>
          <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight md:text-5xl">
            How purity proof stays attached to the bottle.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[#52635F]">
            The quality workflow is built around batch identity. The compound,
            certificate, QR lookup, and shipment record all point back to the
            same lot.
          </p>

          <div className="mt-10 grid grid-cols-2 border border-[#07100E]/12">
            {METRICS.map(([value, label]) => (
              <div key={label} className="border-[#07100E]/12 p-5 odd:border-r [&:nth-child(-n+2)]:border-b">
                <p className="font-serif text-4xl italic leading-none text-[#07100E]">
                  {value}
                </p>
                <p className="mt-2 text-sm leading-5 text-[#52635F]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <ol className="grid gap-5">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="grid gap-6 rounded-lg border border-[#07100E]/12 bg-white/55 p-6 sm:grid-cols-[72px_1fr]"
            >
              <span className="font-mono text-sm text-[#0F9F7A]">
                {step.n}
              </span>
              <div>
                <h3 className="text-2xl font-semibold leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#52635F]">
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
