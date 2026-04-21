"use client";

import { Reveal } from "./reveal";

const ORDER_PACKET = [
  {
    title: "Order confirmation",
    body: "Manual review confirms the chain used, amount received, and shipping details before the release packet is finalized.",
  },
  {
    title: "Lot-matched COA",
    body: "The lot code follows the bottle, certificate, and order record instead of being swapped for a generic PDF.",
  },
  {
    title: "Cold-chain packout",
    body: "Liquid orders are packed for temperature control before tracking is issued, because transit condition matters.",
  },
  {
    title: "Tracking + support",
    body: "If paperwork needs to be resent, support can pull it back from the same lot record rather than improvising a reply.",
  },
];

const CHECKS = [
  "Catalog comes first, proof second.",
  "No invented testimonials or inflated review counts.",
  "The same operational details appear across the site, the COA, and the order flow.",
];

export function SocialProof() {
  return (
    <section className="border-b border-[rgb(15_22_19/7%)] bg-[#0f1613] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#8eb8aa]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8eb8aa]">
                Order packet
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_30px_90px_-44px_rgba(0,0,0,0.6)] lg:p-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                What ships with the order
              </p>
              <h2 className="mt-6 font-serif text-[clamp(1.8rem,3.1vw,2.8rem)] leading-[1.2] tracking-[-0.03em] text-white">
                Same lot. Same paperwork. Same shipment.
              </h2>
              <p className="mt-5 max-w-2xl text-[14px] leading-[1.8] text-white/68">
                The site should not need made-up review badges to feel credible.
                It should show the operational chain a buyer actually cares
                about after payment.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {ORDER_PACKET.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-white/10 bg-black/16 p-5"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8eb8aa]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-[14px] leading-[1.75] text-white/74">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {CHECKS.map((item, i) => (
              <Reveal key={item} delay={0.04 * i}>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-6 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8eb8aa]">
                    Guardrail {i + 1}
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.75] text-white/74">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
