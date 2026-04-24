import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Choose your compounds",
    text: "Pick from six research-grade nasal sprays. Each product page shows pricing, purity data, and what ships in the box.",
  },
  {
    n: "02",
    title: "Pay with crypto",
    text: "We accept BTC, ETH, USDC, and SOL. The exact wallet address and network are shown at checkout — no guessing.",
  },
  {
    n: "03",
    title: "We ship within 24 hours",
    text: "After payment confirms, we match your order to the correct lot, pack it with cold-chain handling, and send tracking to your email.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-[#e8e6e1] bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 max-w-xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999]">
              How it works
            </span>
            <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-[#0f1110]">
              Three steps. No accounts, no middlemen.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {STEPS.map(({ n, title, text }, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-[#e8e6e1] bg-[#faf8f4] p-7">
                <span className="text-[32px] font-semibold tabular-nums text-[#e0ded8]">
                  {n}
                </span>
                <h3 className="mt-4 font-serif text-[1.3rem] leading-[1.15] tracking-[-0.02em] text-[#0f1110]">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#555b55]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
