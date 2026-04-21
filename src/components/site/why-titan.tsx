"use client";

import { Reveal } from "./reveal";

const POINTS = [
  {
    label: "Lot-matched certificate",
    stat: "Same code, same batch",
    detail:
      "The lot number on the bottle matches the certificate and the internal order record. That is the first thing serious buyers check.",
  },
  {
    label: "Cold-chain packout",
    stat: "Handled as fulfillment, not décor",
    detail:
      "Liquid orders are packed for temperature control because transit matters more than whatever the homepage says.",
  },
  {
    label: "Payment review",
    stat: "Manual before release",
    detail:
      "Payment, chain, amount, and shipping details are checked before fulfillment so the order packet stays clean.",
  },
  {
    label: "Document resend",
    stat: "Support by lot number",
    detail:
      "If a buyer needs the certificate again, support can pull it from the lot record instead of sending a random template PDF.",
  },
];

export function WhyTitan() {
  return (
    <section className="border-b border-[rgb(15_22_19/7%)] bg-[#f8f6f2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#1e6f58]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                  What Buyers Check First
                </span>
              </div>
              <h2 className="mt-6 max-w-lg font-serif text-[clamp(2.6rem,5vw,4.25rem)] leading-[0.92] tracking-[-0.04em] text-[#0f1613]">
                What makes the order feel real.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-[#55625c]">
                The homepage should read like an actual operating company:
                documents tied to batches, fulfillment tied to orders, and less
                brand theater pretending to be proof.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {POINTS.map((pt, i) => (
              <Reveal key={pt.label} delay={i * 0.04}>
                <div className="grid gap-5 rounded-[1.75rem] border border-[rgb(15_22_19/8%)] bg-white p-7 shadow-[0_20px_60px_-38px_rgba(15,22,19,0.22)] sm:grid-cols-[190px_1fr] sm:items-start">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
                      {pt.label}
                    </p>
                    <p className="mt-3 font-serif text-[1.65rem] leading-[1.02] tracking-[-0.03em] text-[#0f1613]">
                      {pt.stat}
                    </p>
                  </div>
                  <p className="text-[14px] leading-[1.8] text-[#55625c]">
                    {pt.detail}
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
