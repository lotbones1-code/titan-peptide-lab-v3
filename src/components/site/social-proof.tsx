"use client";

import { Reveal } from "./reveal";

const VERIFICATION_POINTS = [
  {
    title: "Third-party testing",
    body: "Purity language should point back to real batch review, not vague premium claims.",
  },
  {
    title: "Paperwork visibility",
    body: "Certificate path and lot matching should be visible before the order is placed.",
  },
  {
    title: "Fulfillment discipline",
    body: "Cold-chain handling and dispatch timing should read like an operating promise, not a slogan.",
  },
  {
    title: "Tight lineup",
    body: "Each spray should have a clear role in the shelf instead of drowning inside catalog bloat.",
  },
];

const PROOF_NOTES = [
  {
    title: "Before checkout",
    body: "The buyer should know the rail, the paperwork path, and the dispatch expectation before funds move.",
  },
  {
    title: "After checkout",
    body: "Manual review, lot matching, and tracking should stay tied to the same order record instead of fragmenting into support email.",
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
                verification, not theater.
              </h2>
              <p className="mt-5 max-w-[52ch] text-[14px] leading-[1.9] text-[#555b55]">
                Competitors lean hard on testing claims, manufacturing claims, and fulfillment promises. Titan should condense that into a tighter buyer-facing proof structure that reads like an operating record, not a testimonials page.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[rgba(10,10,10,0.08)] bg-[#111614] p-8 text-white lg:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8fd0b5]">
                What a buyer can actually verify
              </p>
              <div className="mt-6 space-y-5">
                {[
                  "Exact network rail before payment",
                  "Lot code to COA match before dispatch",
                  "Third-party purity language tied to release",
                  "Cold-chain handling framed as timing, not hype",
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

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[1.8rem] border border-[rgba(10,10,10,0.08)] bg-white">
              <div className="border-b border-[rgba(10,10,10,0.07)] px-7 py-6 lg:px-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                  Verification ledger
                </p>
                <p className="mt-3 max-w-[46ch] text-[13.5px] leading-[1.82] text-[#555b55]">
                  The strongest trust signal is a short list of concrete things the buyer can check before and after ordering.
                </p>
              </div>

              <div className="divide-y divide-[rgba(10,10,10,0.07)]">
                {VERIFICATION_POINTS.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.04}>
                    <div className="grid gap-3 px-7 py-5 sm:grid-cols-[180px_1fr] lg:px-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                        {item.title}
                      </p>
                      <p className="text-[13.5px] leading-[1.82] text-[#555b55]">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {PROOF_NOTES.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="rounded-[1.6rem] border border-[rgba(10,10,10,0.08)] bg-[#fbfaf7] p-7 lg:p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[13.5px] leading-[1.85] text-[#555b55]">{item.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.12}>
              <div className="rounded-[1.6rem] border border-[rgba(10,10,10,0.08)] bg-[#111614] p-7 text-white lg:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8fd0b5]">
                  Why this matters
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.85] text-white/66">
                  Titan does not need fake praise if the catalog, paperwork path, and fulfillment language already read like the company knows exactly how orders move.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
