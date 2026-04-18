"use client";

import Link from "next/link";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const LINE_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE as unknown as [number, number, number, number], delay: 0.15 + i * 0.1 },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f1613]">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 60%, rgba(30,111,88,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(30,111,88,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pb-36 lg:pt-44">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#4a9b7f]"
        >
          HPLC-verified &middot; Cold-chain shipped &middot; Crypto checkout
        </motion.p>

        <h1 className="mt-8 max-w-4xl">
          <motion.span
            custom={0}
            variants={LINE_VARIANTS}
            initial="hidden"
            animate="visible"
            className="block font-serif text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.92] tracking-[-0.03em] text-white"
          >
            The peptide lab
          </motion.span>
          <motion.span
            custom={1}
            variants={LINE_VARIANTS}
            initial="hidden"
            animate="visible"
            className="block font-serif text-[clamp(3rem,7.5vw,6.5rem)] italic leading-[0.92] tracking-[-0.03em] text-[#4a9b7f]"
          >
            that shows its work.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 max-w-lg text-[17px] leading-relaxed text-[#8a9b93]"
        >
          Six nasal spray compounds. Every lot HPLC-screened to &ge;99% purity
          with a matched certificate of analysis. Manual fulfillment, cold-chain
          packed, shipped within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/products"
            className="group inline-flex h-13 items-center gap-2 rounded-full bg-[#1e6f58] px-8 text-[15px] font-medium text-white transition-all hover:bg-[#258d6e] hover:shadow-[0_0_24px_-4px_rgba(30,111,88,0.5)]"
          >
            Browse the catalog
            <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
          <Link
            href="/research/bpc-157-nasal-spray"
            className="inline-flex h-13 items-center rounded-full border border-[#2a3d34] px-7 text-[15px] text-[#8a9b93] transition-colors hover:border-[#4a9b7f] hover:text-[#4a9b7f]"
          >
            Read the research
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-[#1e3a2e] bg-[#0f1613]/60 px-5 py-2.5 backdrop-blur-sm"
        >
          <span className="text-[13px] text-[#6b7f75]">First order?</span>
          <span className="rounded-full bg-[#1e6f58]/20 px-3 py-0.5 text-[13px] font-semibold text-[#4a9b7f]">
            FIRST10
          </span>
          <span className="text-[13px] text-[#6b7f75]">for 10% off</span>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf9f7] to-transparent" />
    </section>
  );
}
