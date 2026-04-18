import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "Shipping, Payment & Returns — Titan Peptide Laboratory",
  description:
    "US and international shipping, cold-pack handling, global crypto checkout guidance, active discount codes, and returns policy for research-use products.",
};

const SECTIONS = [
  {
    id: "shipping",
    label: "§S1",
    heading: "Shipping",
    blurb:
      "Dispatched from Reno after payment confirmation. Clean outer carton, insulated inner pack, and region-aware handling for both US and international buyers.",
    items: [
      {
        q: "How fast does an order leave the laboratory?",
        a: "Orders confirmed before 14:00 PT usually move same day. Everything else leaves inside 48 hours. Tracking is sent as soon as the dispatch record is closed, whether the destination is domestic or international.",
      },
      {
        q: "What does the package look like?",
        a: "A plain outer carton with a neutral return label. Inside are the product, packing protection, printed certificate, and temperature-conscious handling where needed.",
      },
      {
        q: "Which products ship cold?",
        a: "Nasal sprays and other liquid formats receive cold-conscious packing. Lyophilized powder generally ships ambient.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes. We support US, Canada, Latin America, Europe, the UK, Asia-Pacific, and selected Middle East and Africa destinations. The buyer remains responsible for local import rules, customs, VAT, or brokerage where applicable.",
      },
      {
        q: "What about tracking?",
        a: "Domestic orders use USPS Priority or UPS Ground. International orders use DHL Express or the cleanest available tracked lane for the destination. If tracking does not move within 48 hours, contact support.",
      },
    ],
  },
  {
    id: "payment",
    label: "§S2",
    heading: "Payment",
    blurb:
      "Crypto-only checkout, clearer regional guidance, and faster confirmation once the payment is received on the selected chain.",
    items: [
      {
        q: "Which cryptocurrencies do you accept?",
        a: "BTC, ETH, USDC ERC-20, SOL, and USDC SPL. US buyers usually prefer Solana rails for speed, while international buyers often prefer BTC, ETH, or USDC ERC-20 depending on local exchange access.",
      },
      {
        q: "Why crypto only?",
        a: "It clears quickly, works across borders, removes card processor instability from the category, and keeps fulfillment tied to a confirmed transaction.",
      },
      {
        q: "Can I pay by card?",
        a: "No. Checkout is crypto-only at the moment.",
      },
      {
        q: "What discount codes are active right now?",
        a: "FIRST10 for first orders, BULK15 for 3 or more items, TITAN20 above $250, and VIP25 on the third repeat order. Codes do not stack, and free-shipping thresholds vary by destination region.",
      },
      {
        q: "Is there a volume contract for laboratories?",
        a: "Yes. Email qa@titanpeptidelab.com with compound list, quantity, and cadence for a standing quote.",
      },
    ],
  },
  {
    id: "returns",
    label: "§S3",
    heading: "Returns",
    blurb:
      "Because the products are sold for research use only, the returns policy is built around quality incidents, shipment issues, and cross-border delivery clarity, not casual restocking.",
    items: [
      {
        q: "What is your returns policy?",
        a: "If a product arrives broken, mislabeled, or fails visual inspection, email support within 48 hours with photos and the order can be replaced.",
      },
      {
        q: "What if the certificate does not match the bottle?",
        a: "Hold the product and email QA immediately. That is treated as a quality incident and reviewed urgently.",
      },
      {
        q: "What if the peptide fails my own in-house assay?",
        a: "Send the chromatogram and method. Titan will compare against the retained sample and review whether a replacement batch is warranted.",
      },
      {
        q: "What if the package is lost?",
        a: "If tracking shows delivered but the package is missing, open a carrier claim and copy support@titanpeptidelab.com so the file can be tracked on our side too.",
      },
    ],
  },
];

export default function ShippingFAQPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#faf9f7] text-[#13211c]">
        <section className="border-b border-[#e5e5e5] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#718079]">
              §S — Shipping, Payment, Returns
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h1 className="font-serif text-[clamp(2.3rem,4.8vw,4.1rem)] leading-[0.96] tracking-[-0.04em] text-[#13211c] text-pretty">
                  The <em className="italic text-[#61736a]">logistics</em>.
                </h1>
                <p className="mt-6 max-w-xs text-sm leading-7 text-[#586761]">
                  For anything not covered here, email support@titanpeptidelab.com.
                  Replies usually arrive inside 24 to 48 hours, with destination-specific help for buyers inside and outside America.
                </p>
              </div>

              <div className="lg:col-span-8">
                {SECTIONS.map((s) => (
                  <div key={s.id} id={s.id} className="mt-12 first:mt-0">
                    <div className="flex items-baseline gap-5 border-t border-[#d8dfd7] pt-6">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1e6f58] tabular-nums">
                        {s.label}
                      </span>
                      <h2 className="font-serif text-3xl leading-snug text-[#13211c]">
                        {s.heading}
                      </h2>
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#586761]">
                      {s.blurb}
                    </p>

                    <dl className="mt-8">
                      {s.items.map((f, i) => (
                        <details
                          key={f.q}
                          className="group mt-3 rounded-[1.3rem] border border-[#e5e5e5] bg-white px-5 shadow-[0_16px_40px_-34px_rgba(19,33,28,0.12)] [&_summary::-webkit-details-marker]:hidden"
                        >
                          <summary className="flex cursor-pointer items-baseline justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf7f1]">
                            <span className="flex items-baseline gap-5">
                              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#718079] tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="font-serif text-xl leading-snug text-[#13211c]">
                                {f.q}
                              </span>
                            </span>
                            <span aria-hidden className="font-serif text-2xl text-[#738079] transition-transform group-open:rotate-45">
                              +
                            </span>
                          </summary>
                          <dd className="pb-8 pl-[3.25rem] pr-12 text-sm leading-7 text-[#586761]">
                            {f.a}
                          </dd>
                        </details>
                      ))}
                    </dl>
                  </div>
                ))}

                <div className="mt-16 rounded-[1.8rem] border border-[#e5e5e5] bg-white p-8 text-[#13211c] shadow-[0_24px_60px_-40px_rgba(19,33,28,0.14)]">
                  <div className="flex items-baseline justify-between border-b border-[#d8dfd7] pb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6f7b75]">
                    <span>Active discount codes</span>
                    <span>Apply at checkout</span>
                  </div>
                  <dl className="mt-6 grid gap-6 sm:grid-cols-2">
                    <Code code="FIRST10" v="10% off your first order" />
                    <Code code="BULK15" v="15% off 3+ items" />
                    <Code code="TITAN20" v="20% off orders over $250" />
                    <Code code="VIP25" v="25% auto on the 3rd repeat order" />
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
    <div className="border-b border-[#d9e0d7] pb-3">
      <div className="font-mono text-xl font-semibold tracking-tight text-[#13211c]">
        {code}
      </div>
      <div className="mt-1 text-sm text-[#55645d]">{v}</div>
    </div>
  );
}
