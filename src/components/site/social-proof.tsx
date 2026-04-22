"use client";

import { Reveal } from "./reveal";

const TESTIMONIALS = [
  {
    quote:
      "First supplier I\u2019ve found where the lot number on the bottle actually matches the COA on record. That should be the baseline \u2014 Titan makes it standard.",
    handle: "Independent researcher, US",
    compound: "BPC-157 \u00b7 3rd order",
  },
  {
    quote:
      "Package arrived still cold. The cold-chain claim isn\u2019t marketing copy \u2014 the insert showed the temperature log. That matters when you\u2019re working with peptides that degrade.",
    handle: "Lab technician, UK",
    compound: "Selank + Semax Stack",
  },
  {
    quote:
      "Crypto-only checkout is fine when the addresses are shown upfront and you know what happens next. COA came the same day payment cleared.",
    handle: "Research associate, Australia",
    compound: "PT-141 \u00b7 first order",
  },
];

export function SocialProof() {
  return (
    <section className="border-b border-[rgba(10,10,10,0.07)] bg-[#f5f5f5] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-10 border-b border-[rgba(10,10,10,0.07)] pb-16 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a3a3a3]">
                Researcher notes
              </span>
              <h2 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.045em] text-[#0a0a0a]">
                Notes from buyers who
                <br />
                <em className="not-italic text-[#1a5c48]">checked the details.</em>
              </h2>
            </div>
            <div className="border border-[rgba(10,10,10,0.08)] bg-white p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                Why these matter
              </p>
              <p className="mt-2 text-[13px] leading-[1.8] text-[#525252]">
                In this category, trust is built on lot numbers, paperwork, timing, and whether the package arrives the way it was promised. These notes speak to that, not vague hype.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-[rgba(10,10,10,0.07)] lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.handle} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-8 bg-white p-8 lg:p-10">
                <p className="text-[15px] leading-[1.85] text-[#1a1a1a]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto border-t border-[rgba(10,10,10,0.06)] pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a5c48]">
                    {t.compound}
                  </p>
                  <p className="mt-1.5 text-[12px] text-[#a3a3a3]">{t.handle}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
