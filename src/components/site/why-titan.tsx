"use client";

import { Reveal } from "./reveal";

const POINTS = [
  {
    n: "01",
    label: "Lot-matched certificate",
    stat: "Same code, same batch",
    detail:
      "The lot number on the bottle matches the certificate and the internal order record — the first reference point serious buyers ask for before trusting a supplier.",
  },
  {
    n: "02",
    label: "Cold-chain packout",
    stat: "Temperature-controlled from fill to door",
    detail:
      "Liquid orders are packed with temperature control at dispatch. Transit condition matters to peptide stability, so it is treated as part of the release process, not an afterthought.",
  },
  {
    n: "03",
    label: "Payment review",
    stat: "Manual before release",
    detail:
      "Each order is reviewed against payment, chain, and shipping details before fulfillment begins. The release packet does not leave until everything lines up.",
  },
  {
    n: "04",
    label: "Document resend",
    stat: "Support by lot number",
    detail:
      "If a buyer needs the certificate again, support pulls it from the original lot record. The paperwork stays tied to the batch, not to whoever handles the ticket.",
  },
];

export function WhyTitan() {
  return (
    <section className="border-b border-[rgba(10,10,10,0.07)] bg-white py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[340px_1fr] lg:items-start">
          {/* Sticky left column — editorial intro */}
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a3a3a3]">
                Why researchers choose Titan
              </span>
              <h2 className="mt-5 font-serif text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[0.92] tracking-[-0.045em] text-[#0a0a0a]">
                Every order is traceable,
                <br />
                <em className="not-italic text-[#1a5c48]">end to end.</em>
              </h2>
              <p className="mt-6 text-[15px] leading-[1.85] text-[#525252]">
                Lot traceability. Cold-chain handling. Payment confirmed before
                dispatch. COA retrievable by lot number any time after ordering.
              </p>
            </div>
          </Reveal>

          {/* Right: table-style list — clean horizontal dividers, no cards */}
          <div className="divide-y divide-[rgba(10,10,10,0.07)] border-t border-[rgba(10,10,10,0.07)]">
            {POINTS.map((pt, i) => (
              <Reveal key={pt.label} delay={i * 0.04}>
                <div className="grid gap-4 py-8 sm:grid-cols-[80px_200px_1fr] sm:items-start sm:gap-8">
                  <span className="font-serif text-[1.1rem] leading-none tracking-[-0.02em] text-[#d4d4d4]">
                    {pt.n}
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                      {pt.label}
                    </p>
                    <p className="mt-2 font-serif text-[1.3rem] leading-[1.1] tracking-[-0.03em] text-[#0a0a0a]">
                      {pt.stat}
                    </p>
                  </div>
                  <p className="text-[14px] leading-[1.8] text-[#525252]">
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
