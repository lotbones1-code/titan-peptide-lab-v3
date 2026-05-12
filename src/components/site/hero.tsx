"use client";

import Link from "next/link";
import { motion } from "motion/react";

const STATES = [
  {
    title: "Calm focus",
    body: "Selank and Semax protocols for people who want clear thinking without the wired feeling.",
    accent: "#EAF4EF",
    delay: 0.18,
  },
  {
    title: "Deeper recovery",
    body: "BPC-157 and DSIP concepts built around repair, sleep quality, and feeling physically back.",
    accent: "#F3F6EC",
    delay: 0.28,
  },
  {
    title: "Social ease",
    body: "Oxytocin and calm-state research positioned around composure, warmth, and regulation.",
    accent: "#F6F1EA",
    delay: 0.38,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#e5e5e5] bg-[#faf9f7]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 14% 18%, rgba(30,111,88,0.08), transparent 28%), radial-gradient(circle at 88% 20%, rgba(30,111,88,0.05), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(250,249,247,1) 100%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-20 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:pb-28 lg:pt-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#1e6f58]"
          >
            HPLC-verified · Lot-matched COA · Cold-chain shipped
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-6 max-w-4xl font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.94] tracking-[-0.05em] text-[#1a1a1a]"
          >
            Nasal peptide sprays,
            <br />
            verified and shipped cold.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-7 max-w-2xl text-[17px] leading-8 text-[#5c6762]"
          >
            Titan is the all-white, trust-first version of the category. Six spray compounds,
            one stack, cleaner proof surfaces, clearer payment guidance, and a sharper nasal-first story
            that feels premium instead of sketchy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <span className="rounded-full border border-[#e5e5e5] bg-white px-4 py-2 text-[13px] text-[#666] shadow-[0_2px_10px_-6px_rgba(0,0,0,0.12)]">
              6 sprays + 1 stack
            </span>
            <span className="rounded-full border border-[#e5e5e5] bg-white px-4 py-2 text-[13px] text-[#666] shadow-[0_2px_10px_-6px_rgba(0,0,0,0.12)]">
              FIRST10 for first orders
            </span>
            <span className="rounded-full border border-[#e5e5e5] bg-white px-4 py-2 text-[13px] text-[#666] shadow-[0_2px_10px_-6px_rgba(0,0,0,0.12)]">
              Ships within 24h of payment
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/products"
              className="inline-flex h-12 items-center rounded-full bg-[#1e6f58] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[#175946]"
            >
              Shop nasal sprays
            </Link>
            <Link
              href="/lab-testing"
              className="inline-flex h-12 items-center rounded-full border border-[#e5e5e5] bg-white px-7 text-[15px] text-[#555] transition-colors hover:border-[#1e6f58] hover:text-[#1e6f58]"
            >
              See lab proof
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-8 top-10 h-40 rounded-full bg-[#e8f1ec] blur-3xl" aria-hidden />
          <div className="relative space-y-4">
            {STATES.map((state, index) => (
              <motion.div
                key={state.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: state.delay }}
                className={`rounded-[1.75rem] border border-[#e5e5e5] bg-white p-6 shadow-[0_18px_40px_-26px_rgba(15,22,19,0.18)] ${
                  index === 1 ? "translate-x-4" : index === 2 ? "-translate-x-3" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1e6f58]">
                      Healthy-state concept
                    </p>
                    <h2 className="mt-3 font-serif text-[1.9rem] leading-[1] tracking-[-0.03em] text-[#1a1a1a]">
                      {state.title}
                    </h2>
                  </div>
                  <span
                    aria-hidden
                    className="block h-16 w-16 rounded-full border border-[#e5e5e5]"
                    style={{ background: state.accent }}
                  />
                </div>
                <p className="mt-4 text-[14px] leading-7 text-[#5c6762]">
                  {state.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
