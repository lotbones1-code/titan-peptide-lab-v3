import { Reveal } from "./reveal";

const STANDARDS = [
  {
    title: "Third-party tested",
    body: "Every batch undergoes independent HPLC testing. We release at ≥99% purity — the certificate is tied to the specific lot on your bottle, not a generic library PDF.",
  },
  {
    title: "Batch-matched documentation",
    body: "Your certificate of analysis matches the exact lot you receive. One bottle, one COA, one lot code — no rotating a single test result across batches.",
  },
  {
    title: "Cold-chain shipping",
    body: "Temperature-sensitive orders are packed for cold-chain handling and dispatched within 24 hours. Tracking is sent as soon as the package leaves.",
  },
  {
    title: "Tight catalog by design",
    body: "Six sprays, each with dedicated research and full documentation. We keep the lineup small so every compound gets proper attention.",
  },
];

export function QualitySection() {
  return (
    <section
      id="quality"
      className="bg-[#0f1110] py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8fd0b5]">
              Quality standard
            </span>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1] tracking-[-0.03em] text-white">
              Every bottle tested.<br />Every batch documented.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-white/60">
              We built Titan around one idea: you should be able to verify everything we claim before you buy. Here is exactly what we do.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {STANDARDS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="flex h-full flex-col bg-[#0f1110] p-7 lg:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8fd0b5]">
                  {item.title}
                </p>
                <p className="mt-4 text-[14px] leading-[1.8] text-white/60">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
