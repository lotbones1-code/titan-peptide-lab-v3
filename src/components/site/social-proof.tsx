"use client";

import Link from "next/link";
import { Reveal } from "./reveal";

const REASONS = [
  {
    title: "Verify the lot, not the brand",
    body: "Most vendors ship a generic spec sheet. Titan ships a lot release sheet tied to the number on your bottle, then follows with the independent retest PDF by email. Check the paperwork before reconstitution.",
  },
  {
    title: "Crypto-only, by design",
    body: "Pay in BTC, ETH, USDC, or SOL. Your card never touches the order. No bank coding, no merchant flags, no shipping label cross-referenced to a Visa statement. The order desk sees a wallet, not a name.",
  },
  {
    title: "A tight catalog beats a long one",
    body: "Six nasal sprays. A handful of injectables. Every SKU gets its own testing pass and its own research summary. Vendors carrying 200 compounds are often recycling a single certificate template — we keep the catalog tight so documentation stays traceable.",
  },
];

const STATS = [
  ["6", "active spray SKUs · traceable lots"],
  ["≥99%", "HPLC purity threshold for release"],
  ["24h", "dispatch target from payment confirmation"],
  ["4", "crypto rails, no card data stored"],
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
                A tight catalog,<br />done right.
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

              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#e8e6e1] bg-[#e8e6e1]">
                {STATS.map(([value, label]) => (
                  <div key={label} className="bg-white px-5 py-4">
                    <dt className="font-serif text-[1.7rem] leading-none tracking-[-0.04em] text-[#0f1110]">
                      {value}
                    </dt>
                    <dd className="mt-2 text-[12px] leading-[1.55] text-[#66736d]">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
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
