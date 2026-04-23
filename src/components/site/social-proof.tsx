"use client";

import { Reveal } from "./reveal";

const STANDARDS = [
  {
    title: "Pre-checkout clarity",
    body: "Certificate path, payment rail, and dispatch expectations should be visible before the order is placed, not discovered later over email.",
  },
  {
    title: "Handling discipline",
    body: "For liquid peptide formats, timing and handling matter. The goal is not to sound premium, it is to ship in a way that matches what the page claimed.",
  },
  {
    title: "Catalog discipline",
    body: "Titan feels stronger when the catalog is tightly merchandised, easy to compare, and every spray has a visible reason to exist.",
  },
];

export function SocialProof() {
  return (
    <section className="border-b border-[rgba(10,10,10,0.07)] bg-[#f3f1eb] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-[rgba(10,10,10,0.08)] bg-white p-8 lg:p-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9aa09a]">
                Trust structure
              </span>
              <h2 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.045em] text-[#0f1110]">
                Trust should come from
                <br />
                operations, not made-up praise.
              </h2>
              <p className="mt-5 max-w-[52ch] text-[14px] leading-[1.9] text-[#555b55]">
                A premium peptide company should not lean on generic testimonial theater. It should lean on what the buyer can verify in the catalog, the paperwork, and the fulfillment flow.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[rgba(10,10,10,0.08)] bg-[#111614] p-8 text-white lg:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8fd0b5]">
                What a buyer can actually verify
              </p>
              <div className="mt-6 space-y-5">
                {[
                  "Which rail to pay on before funds move",
                  "How the lot code and COA are supposed to match",
                  "What cold-chain handling means in dispatch timing",
                  "Why each spray exists in the lineup instead of getting buried in catalog bloat",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border-t border-white/10 pt-5 first:border-0 first:pt-0">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#8fd0b5]" />
                    <p className="text-[13.5px] leading-[1.8] text-white/68">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-px overflow-hidden rounded-[1.5rem] border border-[rgba(10,10,10,0.07)] bg-[rgba(10,10,10,0.07)] lg:grid-cols-3">
          {STANDARDS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="h-full bg-[#fbfaf7] p-7 lg:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                  {item.title}
                </p>
                <p className="mt-4 text-[13.5px] leading-[1.85] text-[#555b55]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
