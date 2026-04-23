"use client";

import { Reveal } from "./reveal";

const STANDARDS = [
  {
    title: "Paperwork before support tickets",
    body: "Certificate path, payment rail, and dispatch expectations should be visible before the order is placed, not discovered later over email.",
    label: "Pre-checkout clarity",
  },
  {
    title: "Cold-chain is an operating promise",
    body: "For liquid peptide formats, timing and handling matter. The goal is not to sound premium, it is to ship in a way that matches what the page claimed.",
    label: "Handling discipline",
  },
  {
    title: "A narrower lineup reads more credible",
    body: "Titan feels stronger when the catalog is tightly merchandised, the products are easy to compare, and each spray has a visible reason to exist.",
    label: "Catalog discipline",
  },
];

export function SocialProof() {
  return (
    <section className="border-b border-[rgba(10,10,10,0.07)] bg-[#f3f1eb] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-10 border-b border-[rgba(10,10,10,0.07)] pb-16 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9aa09a]">
                Trust structure
              </span>
              <h2 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.045em] text-[#0f1110]">
                Trust should come from
                <br />
                operations, not made-up praise.
              </h2>
            </div>
            <div className="rounded-[1.5rem] border border-[rgba(10,10,10,0.08)] bg-white p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                Why this section changed
              </p>
              <p className="mt-2 text-[13px] leading-[1.8] text-[#525252]">
                A premium peptide company should not lean on generic testimonial theater. It should lean on what the buyer can verify in the catalog, the paperwork, and the fulfillment flow.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {STANDARDS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[1.75rem] border border-[rgba(10,10,10,0.07)] bg-white p-8 lg:p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                  {item.label}
                </p>
                <h3 className="mt-5 font-serif text-[1.9rem] leading-[1.02] tracking-[-0.035em] text-[#0f1110]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.85] text-[#555b55]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
