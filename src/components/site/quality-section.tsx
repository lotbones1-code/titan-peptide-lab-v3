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
  ["\u226599%", "HPLC release threshold"],
  ["1:1", "Bottle-to-COA match"],
  ["24h", "Fulfillment window"],
  ["QR", "Certificate lookup"],
];

export function QualitySection() {
  return (
    <section
      id="quality"
      className="border-b border-[rgb(15_22_19/7%)] bg-[#f3efe8] py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.46fr_0.54fr] lg:px-8">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[2rem] bg-[#0f1613] p-8 text-white shadow-[0_30px_90px_-44px_rgba(15,22,19,0.8)] lg:p-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#8eb8aa]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8eb8aa]">
                Quality system
              </span>
            </div>
            <h2 className="mt-6 max-w-lg font-serif text-[clamp(2.5rem,4.8vw,4rem)] leading-[0.92] tracking-[-0.04em] text-white">
              The lot record stays intact from intake to doorstep.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-[1.85] text-white/68">
              Compound, certificate, QR lookup, reviewer notes, and shipping
              flow all resolve to the same release record. That is the system
              the brand sits on top of.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10">
              {METRICS.map(([value, label]) => (
                <div key={label} className="bg-white/6 p-5 backdrop-blur-sm">
                  <p className="font-serif text-[2rem] leading-none tracking-[-0.03em] text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-white/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ol className="grid gap-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.04}>
              <li className="grid gap-5 rounded-[1.75rem] border border-[rgb(15_22_19/8%)] bg-white p-7 shadow-[0_20px_60px_-38px_rgba(15,22,19,0.18)] sm:grid-cols-[88px_1fr]">
                <span className="font-serif text-[1.6rem] leading-none tracking-[-0.03em] text-[#1e6f58]">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-serif text-[1.65rem] leading-[1.05] tracking-[-0.03em] text-[#0f1613]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[14px] leading-[1.8] text-[#55625c]">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
