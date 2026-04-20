"use client";

import { Star } from "lucide-react";
import { Reveal } from "./reveal";

const TESTIMONIALS = [
  {
    text: "Ran our own HPLC on the BPC-157 \u2014 came back 99.3%. COA matched the lot on the bottle. That\u2019s all I needed to see.",
    author: "Ryan M.",
    role: "Analytical Chemistry",
    product: "BPC-157",
    rating: 5,
  },
  {
    text: "Switched after our last vendor couldn\u2019t provide lot-matched COAs. Purity is consistent and the cold-chain shipping actually works \u2014 ice packs were still cold on arrival.",
    author: "Dr. M. Torres",
    role: "Neuroscience Research",
    product: "Selank + Semax Stack",
    rating: 5,
  },
  {
    text: "The COA was tied to my actual lot, not some template PDF. Insulated box, ice packs, 2-day delivery. This is how it should be done.",
    author: "James W.",
    role: "Independent Researcher",
    product: "Semax",
    rating: 5,
  },
  {
    text: "PT-141 arrived in 2 days, well-packaged. Got tracking within hours. Clean experience from order to delivery.",
    author: "A. Novak",
    role: "Clinical Research",
    product: "PT-141",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3 ${
            i < count ? "fill-[#0f1613] text-[#0f1613]" : "text-[#ddd]"
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
    <section className="border-b border-[rgb(15_22_19/7%)] bg-[#0f1613] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#8eb8aa]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8eb8aa]">
                From researchers
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3.5 py-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-2.5 fill-white text-white"
                  />
                ))}
              </div>
              <span className="text-[12px] font-medium text-white">4.9</span>
              <span className="text-[11px] text-white/45">· verified orders</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal delay={0.08}>
            <blockquote className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_30px_90px_-44px_rgba(0,0,0,0.6)] lg:p-10">
              <Stars count={featured.rating} />
              <p className="mt-6 font-serif text-[clamp(1.8rem,3.1vw,2.8rem)] leading-[1.2] tracking-[-0.03em] text-white">
                &ldquo;{featured.text}&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-white text-[13px] font-medium text-[#0f1613]">
                  {featured.author.charAt(0)}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-white">
                    {featured.author}
                  </p>
                  <p className="text-[12px] text-white/45">
                    {featured.role} &middot; {featured.product}
                  </p>
                </div>
              </footer>
            </blockquote>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {rest.map((t, i) => (
              <Reveal key={t.author} delay={0.04 * i}>
                <div className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/4 p-6 backdrop-blur-sm">
                  <Stars count={t.rating} />
                  <p className="mt-4 flex-1 text-[14px] leading-[1.75] text-white/72">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-2.5 border-t border-white/10 pt-4">
                    <div className="flex size-7 items-center justify-center rounded-full bg-white/12 text-[11px] font-medium text-white">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-white">
                        {t.author}
                      </p>
                      <p className="text-[11px] text-white/42">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
