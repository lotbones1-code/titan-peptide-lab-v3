"use client";

import { motion } from "motion/react";
import { Reveal } from "./reveal";

const POINTS = [
  {
    label: "Purity",
    detail:
      "Every batch is HPLC-verified to ≥99%. We reject anything below our internal threshold — not 95%, not 98%.",
  },
  {
    label: "Lot-matched COA",
    detail:
      "Your certificate belongs to your specific batch. No generic library PDFs, no recycled test data from a different production run.",
  },
  {
    label: "Cold-chain shipping",
    detail:
      "Temperature-controlled packaging on every liquid order. Arrives intact, not degraded by heat exposure in transit.",
  },
  {
    label: "Same-day dispatch",
    detail:
      "Orders confirmed before 2 PM PT ship the same day. Tracking emailed within hours.",
  },
  {
    label: "6-test release",
    detail:
      "Identity, purity, sterility, endotoxin, heavy metals, residual solvents. All six must clear before a lot ships.",
  },
  {
    label: "ISO 17025 partner",
    detail:
      "Independent retesting through an accredited lab. We don't mark our own homework on the critical checks.",
  },
];

export function WhyTitan() {
  return (
    <section className="relative overflow-hidden bg-[#0f1613] py-24 lg:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 70% 30%, rgba(30,111,88,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#4a9b7f]">
              Why Titan
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[0.96] tracking-[-0.03em] text-white">
              The standard other <br className="hidden sm:block" />
              suppliers skip.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#6b7f75]">
              Most peptide vendors sell convenience. Titan sells proof. Every
              decision in the supply chain is built around making the certificate
              believable.
            </p>
          </div>
        </Reveal>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#1e3a2e] bg-[#1e3a2e] sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((pt, i) => (
            <Reveal key={pt.label} delay={i * 0.04}>
              <motion.div
                className="flex h-full flex-col bg-[#13211c] p-7 transition-colors hover:bg-[#182b24]"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#4a9b7f]">
                  {pt.label}
                </dt>
                <dd className="mt-3 text-[14px] leading-relaxed text-[#8a9b93]">
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
