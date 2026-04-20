import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Select compound",
    text: "Choose the nasal spray, injectable, or stack that fits your research protocol.",
  },
  {
    n: "02",
    title: "Confirm payment",
    text: "Checkout supports BTC, ETH, USDC (ERC-20), SOL, and USDC (SPL).",
  },
  {
    n: "03",
    title: "Packed within 24h",
    text: "Liquid orders are prepared for cold-chain handling before dispatch.",
  },
  {
    n: "04",
    title: "Receive proof",
    text: "Tracking and batch-matched COA stay tied to the order record.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-[rgb(15_22_19/7%)] bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#1e6f58]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                  Order flow
                </span>
              </div>
              <h2 className="mt-6 max-w-2xl font-serif text-[clamp(2.5rem,4.8vw,4rem)] leading-[0.92] tracking-[-0.04em] text-[#0f1613]">
                Clear enough for first-time buyers, tight enough for repeat researchers.
              </h2>
            </div>
            <p className="max-w-md text-[14px] leading-[1.8] text-[#55625c]">
              The site should feel as controlled as the fulfillment process,
              with clean decisions, visible proof, and no sketchy handoffs.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map(({ n, title, text }, index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="flex h-full flex-col rounded-[1.75rem] border border-[rgb(15_22_19/8%)] bg-[#faf8f4] p-6 shadow-[0_18px_50px_-36px_rgba(15,22,19,0.18)] transition-transform duration-300 hover:-translate-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                  {n}
                </span>
                <h3 className="mt-6 font-serif text-[1.55rem] leading-[1.05] tracking-[-0.03em] text-[#0f1613]">
                  {title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.8] text-[#55625c]">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
