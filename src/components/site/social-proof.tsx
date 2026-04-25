"use client";

import Link from "next/link";
import { Reveal } from "./reveal";

const REASONS = [
  {
    title: "Purity you can verify",
    body: "Every product page links to the lab testing methodology. The COA references the exact lot on your bottle — check it yourself before ordering.",
  },
  {
    title: "No hidden fees or surprises",
    body: "Pricing is on the product page and payment rails are shown clearly before the order is placed. What you see is what you pay.",
  },
  {
    title: "Built for researchers, not hype buyers",
    body: "We publish peer-reviewed research summaries for every compound. No miracle claims, no before-and-after photos — just the science.",
  },
];

export function SocialProof() {
  return (
    <section className="bg-[#faf8f4] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a5c48]">
                Why Titan
              </span>
              <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-[#0f1110]">
                We keep the catalog tight.<br />We do them right.
              </h2>
              <p className="mt-5 max-w-[44ch] text-[15px] leading-[1.8] text-[#555b55]">
                Most peptide vendors carry hundreds of SKUs with recycled documentation. We keep the catalog tight so every compound gets real testing, real research, and real attention.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex h-11 items-center rounded-full border border-[#d4d4d4] px-6 text-[13px] font-semibold text-[#0f1110] transition-colors hover:border-[#0f1110]"
              >
                About Titan
              </Link>
            </div>

            <div className="space-y-4">
              {REASONS.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="rounded-2xl border border-[#e8e6e1] bg-white p-6">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1a5c48]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-[14px] leading-[1.75] text-[#555b55]">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
