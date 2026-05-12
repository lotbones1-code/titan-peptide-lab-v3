"use client";

import { motion } from "motion/react";
import { Reveal } from "./reveal";

const POINTS = [
  {
    label: "Purity",
    detail:
      "Every batch is HPLC-verified to ≥99%. We reject anything below our internal threshold, not 95%, not 98%.",
  },
  {
    label: "Lot-matched COA",
    detail:
      "Your certificate belongs to your specific batch. No generic library PDFs, no recycled test data from a different production run.",
  },
  {
    label: "Cold-chain shipping",
    detail:
      "Temperature-controlled packaging on every liquid order so the bottle arrives intact, not cooked in transit.",
  },
  {
    label: "Fast dispatch",
    detail:
      "Manual fulfillment within 24 hours of payment confirmation. Tracking emailed as soon as the dispatch record is closed.",
  },
  {
    label: "6-test release",
    detail:
      "Identity, purity, sterility, endotoxin, heavy metals, residual solvents. All six must clear before a lot ships.",
  },
  {
    label: "ISO 17025 partner",
    detail:
      "Independent retesting through an accredited lab so the proof reads like a system, not a claim.",
  },
];

export function WhyTitan() {
  return (
    <section className="border-b border-[#e5e5e5] bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1e6f58]">
              Why Titan
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.98] tracking-[-0.03em] text-[#1a1a1a]">
              The standard other suppliers skip.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#5c6762]">
              Most peptide vendors sell convenience. Titan sells proof, cleaner surfaces, and a more confident first impression.
              The job here is making the product feel premium before the payment handoff even starts.
            </p>
          </div>
        </Reveal>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-[1.8rem] border border-[#e5e5e5] bg-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((pt, i) => (
            <Reveal key={pt.label} delay={i * 0.04}>
              <motion.div className="flex h-full flex-col bg-[#faf9f7] p-7 transition-colors hover:bg-white">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1e6f58]">
                  {pt.label}
                </dt>
                <dd className="mt-3 text-[14px] leading-7 text-[#5c6762]">
                  {pt.detail}
                </dd>
              </motion.div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
