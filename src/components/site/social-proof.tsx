"use client";

import { Star } from "lucide-react";
import { Reveal } from "./reveal";

const TESTIMONIALS = [
  {
    text: "Ran our own HPLC on the BPC-157 — came back 99.3%. COA matched the lot on the bottle. That's all I needed to see.",
    author: "Ryan M.",
    role: "Analytical Chemistry",
    rating: 5,
    product: "BPC-157",
  },
  {
    text: "Switched after our last vendor couldn't provide lot-matched COAs. Purity is consistent and the cold-chain shipping actually works — ice packs were still cold on arrival.",
    author: "Dr. M. Torres",
    role: "Neuroscience Research",
    rating: 5,
    product: "Selank + Semax Stack",
  },
  {
    text: "The COA was tied to my actual lot, not some template PDF. Insulated box, ice packs, 2-day delivery. This is how it should be done.",
    author: "James W.",
    role: "Independent Researcher",
    rating: 5,
    product: "Semax",
  },
  {
    text: "PT-141 arrived in 2 days, well-packaged. Got tracking within hours. Only wish they had payment options beyond crypto.",
    author: "A. Novak",
    role: "Clinical Research",
    rating: 4,
    product: "PT-141",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${
            i < count ? "fill-[#d4a017] text-[#d4a017]" : "text-[#ddd]"
          }`}
        />
      ))}
    </div>
  );
}

export function SocialProof() {
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);

  return (
    <section className="bg-[#f4efe8] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6b7972]">
            From researchers
          </p>
        </Reveal>

        {/* Featured pull-quote */}
        <Reveal delay={0.1}>
          <blockquote className="mt-8 max-w-3xl">
            <Stars count={featured.rating} />
            <p className="mt-5 font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.3] tracking-[-0.02em] text-[#13211c]">
              &ldquo;{featured.text}&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#dce7e0] flex items-center justify-center text-[14px] font-medium text-[#1e6f58]">
                {featured.author.charAt(0)}
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#13211c]">{featured.author}</p>
                <p className="text-[12px] text-[#7b8781]">
                  {featured.role} &middot; {featured.product}
                </p>
              </div>
            </footer>
          </blockquote>
        </Reveal>

        {/* Rest of reviews */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {rest.map((t, i) => (
            <Reveal key={t.author} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-[#d9e0d7] bg-white/80 p-6 backdrop-blur-sm">
                <Stars count={t.rating} />
                <p className="mt-4 text-[14px] leading-relaxed text-[#3a4a43]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-2.5 border-t border-[#e5e5e5]/60 pt-4">
                  <div className="h-7 w-7 rounded-full bg-[#edf4ef] flex items-center justify-center text-[11px] font-medium text-[#1e6f58]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[#13211c]">{t.author}</p>
                    <p className="text-[11px] text-[#999]">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
