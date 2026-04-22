import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Lot intake",
    body: "Every batch receives a Titan lot code before fill. That code stays tied to the bottle, internal record, certificate, and checkout reference throughout the workflow.",
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
  ["1:1", "Bottle-to-COA match"],
  ["24h", "Fulfillment window"],
  ["QR", "Certificate lookup"],
];

export function QualitySection() {
  return (
    <section
      id="quality"
      className="border-b border-[rgba(10,10,10,0.07)] bg-[#0a0a0a] py-28 text-white lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <Reveal>
          <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,255,255,0.35)]">
                Release workflow
              </span>
              <h2 className="mt-5 font-serif text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.9] tracking-[-0.045em] text-white">
                A batch gets coded,
                <br />
                screened, matched,
                <br />
                <em className="not-italic text-[#6bbea0]">and packed.</em>
              </h2>
            </div>
            {/* Metrics 2×2 grid */}
            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 lg:self-end">
              {METRICS.map(([value, label]) => (
                <div key={label} className="bg-[#0a0a0a] p-6">
                  <p className="font-serif text-[2.2rem] leading-none tracking-[-0.04em] text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-[11px] text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Steps — horizontal table layout */}
        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <div className="flex flex-col bg-[#0a0a0a] p-8 gap-6">
                <span className="font-serif text-[1rem] leading-none tracking-[-0.02em] text-[rgba(255,255,255,0.25)]">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-serif text-[1.5rem] leading-[1.05] tracking-[-0.035em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.8] text-white/55">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
