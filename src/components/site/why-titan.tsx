"use client";

import { Reveal } from "./reveal";

const POINTS = [
  {
    label: "Purity verification",
    stat: "\u226599% HPLC",
    detail:
      "Every batch is HPLC-verified to \u226599%. Anything below our internal threshold is rejected outright \u2014 not softened, not relabeled.",
  },
  {
    label: "Lot-matched certificates",
    stat: "1:1 batch link",
    detail:
      "Your certificate belongs to your specific batch. No generic library PDFs. No recycled test data from a different production run.",
  },
  {
    label: "Cold-chain logistics",
    stat: "Every liquid order",
    detail:
      "Temperature-controlled packaging on every liquid order. The bottle arrives intact because we treat cold-chain as standard, not optional.",
  },
  {
    label: "Same-day dispatch",
    stat: "Cut-off 2 PM PT",
    detail:
      "Orders confirmed before 2 PM Pacific ship the same day, with tracking and batch documentation following within hours.",
  },
  {
    label: "6-point release panel",
    stat: "All six must clear",
    detail:
      "Identity, purity, sterility, endotoxin, heavy metals, residual solvents. Every gate must pass before a lot is released to fill.",
  },
  {
    label: "ISO 17025 partner lab",
    stat: "Accredited retest",
    detail:
      "Independent retesting through an accredited laboratory so the proof reads as a system, not a single data point.",
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
                  Why Titan
                </span>
              </div>
              <h2 className="mt-6 max-w-lg font-serif text-[clamp(2.6rem,5vw,4.25rem)] leading-[0.92] tracking-[-0.04em] text-[#0f1613]">
                Built like a category leader, not a reseller.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-[#55625c]">
                The goal is not just to sell peptides. It is to make each lot
                feel governed by a visible operating system, with stricter proof,
                cleaner packaging language, and less ambiguity at every step.
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
