import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CompoundPoster } from "@/components/site/compound-poster";
import { PRODUCTS } from "@/lib/products";
import { ArrowRight, ShieldCheck, Wallet, Truck, FileText } from "lucide-react";

const START_TITLE = "Start here — Titan Peptide Lab";
const START_DESCRIPTION =
  "Three research peptide paths for first-time buyers: BPC-157 + TB-500, CJC-1295 + Ipamorelin, Semax. HPLC ≥99% target, lot release sheet per bottle, crypto-only.";

export const metadata = {
  title: START_TITLE,
  description: START_DESCRIPTION,
  alternates: { canonical: "/start/" },
  openGraph: {
    title: START_TITLE,
    description: START_DESCRIPTION,
    url: "/start/",
    type: "website" as const,
  },
  robots: { index: true, follow: true },
};

function findProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

const PAIRS = [
  {
    title: "BPC-157 + TB-500",
    subtitle: "Two lyophilized vials buyers keep asking about together.",
    body: "Body Protection Compound and Thymosin Beta-4 active fragment in separate research vials. Built for lab teams that want both SKUs visible before they open the full catalog.",
    productIds: ["bpc157-vial", "tb500-vial"],
  },
  {
    title: "CJC-1295 + Ipamorelin",
    subtitle: "Pre-blended GH-secretagogue research format.",
    body: "A single pre-blended research vial for buyers comparing secretagogue-format SKUs. One product page, one lot code, one cart action.",
    productIds: ["cjc-ipa"],
  },
  {
    title: "Semax (Nasal Spray)",
    subtitle: "BDNF and neurotrophic-pathway research.",
    body: "Heptapeptide ACTH(4-10) analog in a measured nasal-spray research format. Fastest path for buyers who want a no-reconstitution product page.",
    productIds: ["semax-spray"],
  },
];

const TRUST_ROW = [
  { icon: ShieldCheck, label: "HPLC ≥99% target", body: "Release workflow visible before checkout." },
  { icon: Wallet, label: "Crypto-only", body: "BTC · ETH · USDC · SOL." },
  { icon: Truck, label: "24h dispatch", body: "Tracked shipping. Worldwide, including discreet labeling." },
  { icon: FileText, label: "Lot release sheet", body: "Batch-matched COA per bottle. Not a stock document." },
];

export default function StartPage() {
  return (
    <>
      <Nav />
      <main className="bg-white text-[#0f1613]">
        {/* Single-column rotation hero — IG visitor lands here, no homepage scan */}
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-14 lg:py-20">
          <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dde5df] bg-white px-3 py-1">
              <span className="size-1.5 rounded-full bg-[#1e6f58]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1a5c48]">
                For Instagram visitors
              </span>
            </div>
            <h1 className="mt-6 text-balance font-serif text-[clamp(2.4rem,5.5vw,3.8rem)] leading-[0.98] tracking-[-0.04em]">
              Three research peptides.
              <br />
              <span className="text-[#1e6f58]">One short path to your batch.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.8] text-[#5c6762]">
              Eleven products is too many for a first look. These are the three
              fastest paths from an IG tap to a product page: pick one, review
              the COA workflow, then add to cart. Crypto-only checkout, no site
              account required.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {TRUST_ROW.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2a3530]"
                >
                  <Icon className="h-3.5 w-3.5 text-[#1e6f58]" />
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 rounded-full border border-[#dde5df] bg-white px-4 py-2 text-[12px] text-[#2a3530]">
              <span className="font-semibold tracking-[0.04em] text-[#1a5c48]">FIRST10</span>
              <span className="text-[#5c6762]">— 10% off your first order, applied at checkout.</span>
            </div>
            <p className="mt-4 text-[11.5px] text-[#5c6762]">
              Want to see the paperwork first?{" "}
              <a
                href="/specimen-coa.pdf"
                target="_blank"
                rel="noopener"
                className="font-semibold text-[#1e6f58] underline-offset-2 hover:underline"
              >
                Open a specimen lot release sheet (PDF)
              </a>
            </p>
          </div>
        </section>

        {/* Rotation list — three pairs, one column, each with View COA + Add */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-2xl space-y-10 px-5 sm:px-6">
            {PAIRS.map((pair) => {
              const products = pair.productIds
                .map(findProduct)
                .filter((p): p is NonNullable<ReturnType<typeof findProduct>> => Boolean(p));
              if (products.length === 0) return null;
              const primary = products[0];
              const totalPrice = products.reduce((sum, p) => sum + p.price, 0);

              return (
                <article
                  key={pair.title}
                  className="overflow-hidden rounded-[1.5rem] border border-[rgb(15_22_19/8%)] bg-white shadow-[0_1px_2px_rgb(15_22_19/3%),_0_24px_60px_-40px_rgb(15_22_19/18%)]"
                >
                  <div className="grid sm:grid-cols-[160px_1fr]">
                    <div className="relative h-44 w-full bg-[#fafbfa] sm:h-full">
                      <CompoundPoster product={primary} variant="card" className="h-full w-full" />
                    </div>
                    <div className="p-6 sm:p-7">
                      <h2 className="font-serif text-[1.7rem] leading-tight tracking-[-0.02em] text-[#0f1613]">
                        {pair.title}
                      </h2>
                      <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#1e6f58]">
                        {pair.subtitle}
                      </p>
                      <p className="mt-3 text-[13.5px] leading-[1.75] text-[#5c6762]">
                        {pair.body}
                      </p>

                      <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-[1.6rem] font-semibold tracking-[-0.02em] text-[#0f1613]">
                          ${totalPrice.toFixed(2)}
                        </span>
                        {products.length > 1 && (
                          <span className="text-[12px] text-[#8a9690]">
                            {products.map((p) => p.size).join(" + ")}
                          </span>
                        )}
                      </div>

                      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                        <Link
                          href={`/products/${primary.slug}/?ref=ig`}
                          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#1e6f58] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#175946] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58]/25"
                        >
                          View COA → Add to cart
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link
                          href="/lab-testing/?ref=ig"
                          className="inline-flex h-11 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-5 text-[13px] font-semibold text-[#0f1613] transition-colors hover:border-[#0f1613] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f1613]/15"
                        >
                          COA workflow
                        </Link>
                      </div>

                      {products.length > 1 && (
                        <ul className="mt-5 grid gap-2 text-[12.5px] text-[#5c6762]">
                          {products.map((p) => (
                            <li key={p.id} className="flex items-center gap-2">
                              <span className="size-1 rounded-full bg-[#1e6f58]" />
                              <Link
                                href={`/products/${p.slug}/?ref=ig`}
                                className="hover:text-[#0f1613] hover:underline"
                              >
                                {p.name} — ${p.price.toFixed(2)} · {p.size}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Pay-flow primer — one click to the crypto walkthrough */}
        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-14">
          <div className="mx-auto max-w-2xl px-5 sm:px-6">
            <div className="rounded-[1.5rem] border border-[rgb(15_22_19/8%)] bg-white p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                First time paying with crypto?
              </p>
              <h3 className="mt-2 font-serif text-[1.7rem] leading-tight tracking-[-0.02em] text-[#0f1613]">
                Four steps, no network guessing.
              </h3>
              <p className="mt-3 text-[14px] leading-[1.75] text-[#5c6762]">
                Most buyers who DM us are stuck on the wallet-address step, not
                on the product. The walkthrough shows you exactly where to copy,
                what to send, and how confirmation works before checkout.
              </p>
              <Link
                href="/how-to-pay-with-crypto/?ref=ig"
                className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#1a5c48]"
              >
                Read the 4-step walkthrough
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* See full catalog */}
        <section className="py-14">
          <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
            <p className="text-[13px] text-[#5c6762]">
              Looking for Selank, PT-141, Oxytocin, DSIP, or Retatrutide?
            </p>
            <Link
              href="/products/?ref=ig"
              className="mt-3 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#1e6f58] hover:text-[#175946]"
            >
              See the full catalog ({PRODUCTS.length} products)
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-6 text-[11px] uppercase tracking-[0.14em] text-[#8a9690]">
              For research use only · Not for human consumption
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
