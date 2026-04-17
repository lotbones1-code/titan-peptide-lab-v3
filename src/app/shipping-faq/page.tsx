import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "Shipping, Payment & Returns — Titan Peptide Laboratory",
  description:
    "Discreet US domestic shipping, cold pack handling, crypto payment, active discount codes, and returns policy for research-use products.",
};

const SECTIONS = [
  {
    id: "shipping",
    label: "§S1",
    heading: "Shipping",
    blurb:
      "Dispatched from Reno, Nevada within 48 hours of payment confirmation. Discreet outer carton, insulated inner with phase-change pack on temperature-sensitive items.",
    items: [
      {
        q: "How fast does an order leave the laboratory?",
        a: "Orders paid by crypto before 14:00 PT usually ship same-day. Everything else inside 48 hours. Tracking number arrives by email the moment the dispatch log is closed; no bulk-send delays.",
      },
      {
        q: "What does the package look like?",
        a: "A plain white outer carton with a return address labeled &lsquo;TPL Research&rsquo; &mdash; no compound names, no laboratory branding on the outside. Inside: an insulated pouch, a phase-change cold pack for sensitive peptides, the vials, the printed certificate, and a desiccant card.",
      },
      {
        q: "Which peptides ship cold?",
        a: "All nasal sprays and any reconstituted liquid. Lyophilized powder ships ambient in double-wall paperboard &mdash; it&rsquo;s stable for weeks at room temperature, and the cold pack only reduces shelf life on arrival.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes &mdash; worldwide. DHL Express with a flat $45 handling fee on top of carrier cost. You handle the import paperwork on your end; we handle stability in transit. Refused or seized parcels are not refunded (that&rsquo;s a jurisdictional question, not a product question).",
      },
      {
        q: "What about tracking?",
        a: "USPS Priority or UPS Ground domestically, DHL Express internationally. Tracking is live from the moment the label is generated. If a tracking number hasn&rsquo;t moved within 48 hours of dispatch, email support&mdash;we&rsquo;ll chase it.",
      },
    ],
  },
  {
    id: "payment",
    label: "§S2",
    heading: "Payment",
    blurb:
      "Crypto-only checkout, because it clears quickly and removes card processors from the research supply chain.",
    items: [
      {
        q: "Which cryptocurrencies do you accept?",
        a: "BTC, ETH, USDC ERC-20, and SOL / USDC SPL. Use the wallet address or QR code shown at checkout; the order moves to fulfillment after payment confirmation.",
      },
      {
        q: "Why crypto only?",
        a: "It clears quickly, avoids card-processor freezes in this category, and keeps fulfillment tied to a confirmed on-chain transaction.",
      },
      {
        q: "Can I pay by card?",
        a: "No. Checkout is crypto-only. Contact support before ordering if your lab requires a custom procurement path.",
      },
      {
        q: "What discount codes are active right now?",
        a: "FIRST10 &mdash; 10% off your first order. BULK15 &mdash; 15% off three or more items. TITAN20 &mdash; 20% off when your cart crosses $250. VIP25 &mdash; 25%, applied automatically on your third repeat order. Codes stack with the BULK tier but not with each other.",
      },
      {
        q: "Is there a volume contract for laboratories?",
        a: "Yes. Contact qa@titanpeptidelab.com with the compounds, quantities, and cadence. We&rsquo;ll quote a standing rate with priority dispatch and a dedicated QA contact.",
      },
    ],
  },
  {
    id: "returns",
    label: "§S3",
    heading: "Returns",
    blurb:
      "Every product is sold for in-vitro research use only and ships with a batch-matched certificate. Returns policy reflects the category.",
    items: [
      {
        q: "What&rsquo;s your returns policy?",
        a: "If a vial arrives broken, mislabeled, or fails visual inspection, email a photograph to support within 48 hours of delivery and we replace it free of charge. Outside of that: the product is sold for in-vitro research use only and opened vials cannot be accepted back into stock.",
      },
      {
        q: "What if the certificate doesn&rsquo;t match the vial?",
        a: "That shouldn&rsquo;t happen &mdash; the same lot number is printed on both. If it does, hold the product, photograph both labels, and email qa@titanpeptidelab.com. We treat this as a quality incident and ship a replacement from the same lot immediately.",
      },
      {
        q: "What if the peptide fails my own in-house assay?",
        a: "Send us the chromatogram and the method. If it disagrees with ours we&rsquo;ll pull the retained sample from that batch, re-run it, and ship a replacement from a different lot if the retest disagrees. That has happened twice in four years.",
      },
      {
        q: "Lost package?",
        a: "If tracking shows delivered and the package isn&rsquo;t at your address, file a claim with the carrier and copy support@titanpeptidelab.com. We&rsquo;ll reship at cost once the carrier closes the claim.",
      },
    ],
  },
];

export default function ShippingFAQPage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-b border-white/8 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              §S &mdash; Shipping, Payment, Returns
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h1 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[0.98] tracking-[-0.02em] text-zinc-50 text-pretty">
                  The{" "}
                  <em className="font-serif italic text-zinc-300">
                    logistics
                  </em>
                  .
                </h1>
                <p className="mt-6 max-w-xs text-sm leading-[1.7] text-zinc-400">
                  For anything not covered here, email{" "}
                  <a
                    href="mailto:support@titanpeptidelab.com"
                    className="text-zinc-200 underline decoration-zinc-700 underline-offset-[6px] hover:text-[var(--signature)] hover:decoration-[var(--signature)]"
                  >
                    support@titanpeptidelab.com
                  </a>
                  . Replies inside 24&ndash;48 hours, usually same day.
                </p>
              </div>

              <div className="lg:col-span-8">
                {SECTIONS.map((s) => (
                  <div key={s.id} id={s.id} className="mt-12 first:mt-0">
                    <div className="flex items-baseline gap-5 border-t border-zinc-800 pt-6">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--signature)] tabular-nums">
                        {s.label}
                      </span>
                      <h2 className="font-serif text-3xl font-normal leading-snug text-zinc-50">
                        {s.heading}
                      </h2>
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-[1.7] text-zinc-400">
                      {s.blurb}
                    </p>

                    <dl className="mt-8">
                      {s.items.map((f, i) => (
                        <details
                          key={f.q}
                          className="group border-t border-zinc-800 [&_summary::-webkit-details-marker]:hidden last-of-type:border-b"
                        >
                          <summary className="flex cursor-pointer items-baseline justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signature)] focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                            <span className="flex items-baseline gap-5">
                              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="font-serif text-xl leading-snug text-zinc-50">
                                {f.q}
                              </span>
                            </span>
                            <span
                              aria-hidden
                              className="font-serif text-2xl text-zinc-500 transition-transform group-open:rotate-45"
                            >
                              +
                            </span>
                          </summary>
                          <dd
                            className="pb-8 pl-[3.25rem] pr-12 text-sm leading-[1.75] text-zinc-400"
                            dangerouslySetInnerHTML={{ __html: f.a }}
                          />
                        </details>
                      ))}
                    </dl>
                  </div>
                ))}

                {/* Discount code strip */}
                <div className="mt-16 bg-[var(--paper)] p-8 text-[var(--paper-foreground)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
                  <div className="flex items-baseline justify-between border-b border-zinc-300 pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    <span>Active discount codes</span>
                    <span>Apply at checkout</span>
                  </div>
                  <dl className="mt-6 grid gap-6 sm:grid-cols-2">
                    <Code code="FIRST10" v="10% off your first order" />
                    <Code code="BULK15" v="15% off 3 + items" />
                    <Code code="TITAN20" v="20% off orders over $250" />
                    <Code code="VIP25" v="25% auto, 3rd repeat order" />
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Code({ code, v }: { code: string; v: string }) {
  return (
    <div className="border-b border-zinc-300 pb-3">
      <div className="font-mono text-xl font-semibold tracking-tight text-zinc-900">
        {code}
      </div>
      <div className="mt-1 text-sm text-zinc-700">{v}</div>
    </div>
  );
}
