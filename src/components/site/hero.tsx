import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NASAL_SPRAYS } from "@/lib/products";
import { Reveal } from "./reveal";
import { CompoundPoster } from "./compound-poster";

const START_POINTS = [
  {
    id: "bpc157-spray",
    eyebrow: "Recovery",
    title: "BPC-157",
    note: "Repair-first demand",
  },
  {
    id: "selank-spray",
    eyebrow: "Calm + clarity",
    title: "Selank",
    note: "Daily-focus entry",
  },
  {
    id: "pt141-spray",
    eyebrow: "Intimacy",
    title: "PT-141",
    note: "Higher-intent protocol",
  },
  {
    id: "dsip-spray",
    eyebrow: "Sleep",
    title: "DSIP",
    note: "Night support format",
  },
];

const FACTS = [
  ["Format", "15mL measured atomizers"],
  ["Paperwork", "Lot-matched COA path shown before checkout"],
  ["Dispatch", "Cold-chain handling within 24h target"],
];

function shortName(name: string) {
  return name.replace(" Nasal Spray", "");
}

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export function Hero() {
  const featured = NASAL_SPRAYS[0];
  const startPoints = START_POINTS.map((entry) => {
    const product = NASAL_SPRAYS.find((item) => item.id === entry.id);
    return product ? { ...entry, product } : null;
  }).filter(Boolean) as Array<(typeof START_POINTS)[number] & { product: (typeof NASAL_SPRAYS)[number] }>;

  return (
    <section className="border-b border-[rgba(10,10,10,0.07)] bg-[#f5f3ee]">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-10">
        <Reveal>
          <div className="rounded-[2rem] border border-[rgba(10,10,10,0.08)] bg-white p-5 shadow-[0_22px_70px_rgba(10,10,10,0.05)] lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(10,10,10,0.08)] bg-[#f7f6f1] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                    Research-grade nasal sprays
                  </div>

                  <h1 className="mt-5 max-w-[10.5ch] font-serif text-[clamp(2.9rem,7vw,6.4rem)] font-normal leading-[0.86] tracking-[-0.06em] text-[#0f1110]">
                    Recovery, cognition, intimacy, sleep.
                  </h1>

                  <p className="mt-5 max-w-[52ch] text-[15px] leading-[1.9] text-[#565b56]">
                    Titan is a tighter peptide catalog, six research-grade nasal sprays priced, packaged, and merchandised like real products, with the paperwork path visible before payment.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5 text-[11px] text-[#40463f]">
                    <span className="inline-flex items-center rounded-full border border-[rgba(10,10,10,0.08)] bg-white px-3 py-1.5">
                      From {featured ? formatPrice(featured.price) : "$59.99"}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-[rgba(10,10,10,0.08)] bg-white px-3 py-1.5">
                      No reconstitution
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-6 lg:mt-10">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      href="/products"
                      className="inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-[#0f1110] px-7 text-[12px] font-semibold uppercase tracking-[0.07em] text-white transition-colors hover:bg-[#1a5c48]"
                    >
                      Shop nasal sprays
                      <ArrowRight className="size-3.5" />
                    </Link>
                    <Link
                      href="/lab-testing"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-[rgba(10,10,10,0.1)] px-6 text-[12px] font-semibold uppercase tracking-[0.07em] text-[#0f1110] transition-colors hover:border-[#0f1110] hover:bg-[#f7f6f1]"
                    >
                      Review lab standard
                    </Link>
                  </div>

                  <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-[rgba(10,10,10,0.07)] bg-[rgba(10,10,10,0.07)]">
                    {FACTS.map(([label, value]) => (
                      <div key={label} className="bg-[#faf9f5] px-4 py-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                          {label}
                        </p>
                        <p className="mt-1.5 text-[12.5px] leading-[1.7] text-[#5f655f]">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {featured ? (
                  <div className="overflow-hidden rounded-[1.85rem] border border-[rgba(10,10,10,0.08)] bg-[#f8f6f0] p-4 shadow-[0_16px_40px_rgba(10,10,10,0.04)] lg:p-5">
                    <CompoundPoster
                      product={featured}
                      variant="feature"
                      className="min-h-[420px] rounded-[1.45rem] border-0 shadow-none lg:min-h-[560px]"
                    />
                    <div className="mt-4 grid gap-px overflow-hidden rounded-[1.25rem] border border-[rgba(10,10,10,0.08)] bg-[rgba(10,10,10,0.08)] md:grid-cols-[1.1fr_0.9fr_1fr]">
                      <div className="bg-white px-4 py-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                          Flagship spray
                        </p>
                        <h2 className="mt-2 font-serif text-[1.9rem] leading-none tracking-[-0.045em] text-[#0f1110]">
                          {shortName(featured.name)}
                        </h2>
                        <p className="mt-2 text-[12.5px] leading-[1.7] text-[#5f655f]">
                          {featured.tagline}
                        </p>
                      </div>
                      <div className="bg-white px-4 py-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                          Merchandising role
                        </p>
                        <p className="mt-2 text-[13px] leading-[1.75] text-[#0f1110]">
                          The first high-intent click for buyers starting with recovery.
                        </p>
                      </div>
                      <div className="flex flex-col justify-between bg-[#111614] px-4 py-4 text-white">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8fd0b5]">
                            Starting at
                          </p>
                          <p className="mt-2 text-[1.65rem] font-semibold tabular-nums tracking-[-0.04em] text-white">
                            {formatPrice(featured.price)}
                          </p>
                        </div>
                        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                          <Link
                            href={`/products/${featured.slug}`}
                            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0f1110] transition-colors hover:bg-[#dce9e2]"
                          >
                            Shop flagship
                          </Link>
                          <Link
                            href="/research/bpc-157-nasal-spray"
                            className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/6"
                          >
                            Read research
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-6 grid gap-px overflow-hidden rounded-[1.5rem] border border-[rgba(10,10,10,0.07)] bg-[rgba(10,10,10,0.07)] sm:grid-cols-2 xl:grid-cols-4">
              {startPoints.map(({ eyebrow, title, note, product }) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group bg-[#fcfbf8] px-5 py-5 transition-colors hover:bg-[#f5f3ee]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">{eyebrow}</p>
                      <h2 className="mt-3 font-serif text-[1.65rem] leading-none tracking-[-0.04em] text-[#0f1110]">
                        {title}
                      </h2>
                    </div>
                    <span className="text-[11px] font-semibold tabular-nums text-[#0f1110]">{formatPrice(product.price)}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-[rgba(10,10,10,0.06)] pt-4">
                    <p className="text-[12px] leading-[1.7] text-[#5f655f]">{note}</p>
                    <ArrowRight className="size-4 shrink-0 text-[#0f1110] transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
