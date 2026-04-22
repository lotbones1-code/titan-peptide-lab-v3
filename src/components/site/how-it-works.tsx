import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "01",
    title: "Build the cart",
    text: "Choose the compounds, set quantity, and open checkout with the exact items already listed.",
  },
  {
    n: "02",
    title: "Confirm route + shipping",
    text: "Titan confirms the payment rail, discount code, and delivery details before a batch is released against the order.",
  },
  {
    n: "03",
    title: "Send payment",
    text: "BTC, ETH, USDC, and SOL rails are shown openly. Once funds clear, the order is queued for cold-chain handling and manual review.",
  },
  {
    n: "04",
    title: "Receive paperwork + tracking",
    text: "Shipment confirmation and batch-matched COA are sent back against the same order record, not from a generic document library.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-[rgba(10,10,10,0.07)] bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-10 border-b border-[rgba(10,10,10,0.07)] pb-16 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a3a3a3]">
                Order flow
              </span>
              <h2 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.045em] text-[#0a0a0a]">
                What actually happens
                <br />
                after a buyer clicks checkout.
              </h2>
            </div>
            <div className="border border-[rgba(10,10,10,0.08)] bg-[#f7f7f5] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                No blind handoff
              </p>
              <p className="mt-2 text-[13px] leading-[1.8] text-[#525252]">
                The brand does not dump buyers onto an opaque wallet page. Titan confirms payment route, shipping info, and dispatch timing before release.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-0 divide-y divide-[rgba(10,10,10,0.07)]">
          {STEPS.map(({ n, title, text }, index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="grid gap-4 py-10 sm:grid-cols-[80px_240px_1fr] sm:items-start sm:gap-8 lg:grid-cols-[80px_300px_1fr]">
                <span className="font-serif text-[1.1rem] leading-none tracking-[-0.02em] text-[#d4d4d4]">
                  {n}
                </span>
                <h3 className="font-serif text-[1.5rem] leading-[1.05] tracking-[-0.035em] text-[#0a0a0a]">
                  {title}
                </h3>
                <p className="text-[14px] leading-[1.85] text-[#525252]">
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
