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
      <div className="mx-auto max-w-7xl px-5 py-5 lg:px-10 lg:py-10">
        <Reveal>
          <div className="rounded-[2rem] border border-[rgba(10,10,10,0.08)] bg-white p-4 shadow-[0_22px_70px_rgba(10,10,10,0.05)] lg:p-8">
            <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-8">
              <div className="order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(10,10,10,0.08)] bg-[#f7f6f1] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                  Research-grade nasal sprays
                </div>

                <h1 className="mt-4 max-w-[9.5ch] font-serif text-[clamp(2.8rem,11vw,6.4rem)] font-normal leading-[0.84] tracking-[-0.065em] text-[#0f1110] lg:mt-5">
                  Recovery,
                  <br />
                  cognition,
                  <br />
                  intimacy, sleep.
                </h1>

                <p className="mt-4 max-w-[48ch] text-[14px] leading-[1.82] text-[#565b56] lg:mt-5 lg:text-[15px] lg:leading-[1.9]">
                  Titan is a tighter peptide catalog, six research-grade nasal sprays priced, packaged, and merchandised like real products, with the paperwork path visible before payment.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-[#40463f] lg:mt-6 lg:gap-2.5">
                  <span className="inline-flex items-center rounded-full border border-[rgba(10,10,10,0.08)] bg-white px-3 py-1.5">
                    From {featured ? formatPrice(featured.price) : "$59.99"}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[rgba(10,10,10,0.08)] bg-white px-3 py-1.5">
                    No reconstitution
                  </span>
                </div>

                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center lg:mt-7 lg:gap-3">
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
              </div>

              <div className="order-2">
                {featured ? (
                  <div className="overflow-hidden rounded-[1.7rem] border border-[rgba(10,10,10,0.08)] bg-[#f8f6f0] p-3 shadow-[0_16px_40px_rgba(10,10,10,0.04)] lg:rounded-[1.85rem] lg:p-5">
                    <CompoundPoster
                      product={featured}
                      variant="feature"
                      className="min-h-[300px] rounded-[1.3rem] border-0 shadow-none sm:min-h-[360px] lg:min-h-[560px] lg:rounded-[1.45rem]"
                    />
                    <div className="mt-3 grid gap-px overflow-hidden rounded-[1.1rem] border border-[rgba(10,10,10,0.08)] bg-[rgba(10,10,10,0.08)] md:grid-cols-[1.1fr_0.9fr_1fr] lg:mt-4 lg:rounded-[1.25rem]">
                      <div className="bg-white px-4 py-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                          Flagship spray
                        </p>
                        <h2 className="mt-2 font-serif text-[1.7rem] leading-none tracking-[-0.045em] text-[#0f1110] lg:text-[1.9rem]">
                          {shortName(featured.name)}
                        </h2>
                        <p className="mt-2 text-[12px] leading-[1.7] text-[#5f655f] lg:text-[12.5px]">
                          {featured.tagline}
                        </p>
                      </div>
                      <div className="hidden bg-white px-4 py-4 md:block">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a9690]">
                          Merchandising role
                        </p>
                        <p className="mt-2 text-[13px] leading-[1.75] text-[#0f1110]">
                          The first high-intent click for buyers starting with recovery.
                        </p>
                      </div>
                      <div className="flex flex-col justify-between bg-[#111614] px-4 py-4 text-white md:col-span-1">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8fd0b5]">
                            Starting at
                          </p>
                          <p className="mt-2 text-[1.55rem] font-semibold tabular-nums tracking-[-0.04em] text-white lg:text-[1.65rem]">
                            {formatPrice(featured.price)}
                          </p>
                        </div>
                        <div className="mt-4 flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
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

            <div className="order-3 mt-4 grid gap-px overflow-hidden rounded-[1.35rem] border border-[rgba(10,10,10,0.07)] bg-[rgba(10,10,10,0.07)] lg:mt-6 lg:grid-cols-3 lg:rounded-[1.5rem]">
              {FACTS.map(([label, value]) => (
                <div key={label} className="bg-[#faf9f5] px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1a5c48]">
                    {label}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-[1.7] text-[#5f655f] lg:text-[12.5px]">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-px overflow-hidden rounded-[1.35rem] border border-[rgba(10,10,10,0.07)] bg-[rgba(10,10,10,0.07)] sm:grid-cols-2 xl:grid-cols-4 lg:mt-6 lg:rounded-[1.5rem]">
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
