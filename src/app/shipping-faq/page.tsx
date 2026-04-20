import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "Shipping, Payment & Returns \u2014 The Titan Peptide Company",
  description:
    "Discreet US domestic shipping, cold pack handling, crypto payment, active discount codes, and returns policy for research-use products.",
};

const SECTIONS = [
  {
    id: "shipping",
    label: "01",
    heading: "Shipping",
    blurb:
      "Dispatched from Reno within 24 to 48 hours of payment confirmation. Clean outer carton, insulated inner pack, and cold-chain handling where liquids require it.",
    items: [
      {
        q: "How fast does an order leave the laboratory?",
        a: "Orders confirmed before 14:00 PT usually move same day. Everything else leaves inside 48 hours. Tracking is sent as soon as the dispatch record is closed.",
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
        a: "Yes. International orders are handled with express carriers and the buyer remains responsible for local import rules.",
      },
      {
        q: "What about tracking?",
        a: "Domestic orders use USPS Priority or UPS Ground. International orders use DHL Express when applicable. If tracking does not move within 48 hours, contact support.",
      },
    ],
  },
  {
    id: "payment",
    label: "02",
    heading: "Payment",
    blurb:
      "Crypto-only checkout, clearer presentation, and faster confirmation once the payment is received on the selected chain.",
    items: [
      {
        q: "Which cryptocurrencies do you accept?",
        a: "BTC, ETH, USDC ERC-20, SOL, and USDC SPL. Use the wallet string or QR code shown at checkout.",
      },
      {
        q: "Why crypto only?",
        a: "It clears quickly, removes card processor instability from the category, and keeps fulfillment tied to a confirmed transaction.",
      },
      {
        q: "Can I pay by card?",
        a: "No. Checkout is crypto-only at the moment.",
      },
      {
        q: "What discount codes are active right now?",
        a: "Discount codes are sent exclusively to newsletter subscribers. Subscribe on the homepage to receive your code. Codes do not stack.",
      },
      {
        q: "Is there a volume contract for laboratories?",
        a: "Yes. Email qa@titanpeptidelab.com with compound list, quantity, and cadence for a standing quote.",
      },
    ],
  },
  {
    id: "returns",
    label: "03",
    heading: "Returns",
    blurb:
      "Because the products are sold for research use only, the returns policy is built around quality incidents and shipment issues, not casual restocking.",
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
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#1e6f58]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Shipping, payment & returns
              </span>
            </div>

            <div className="mt-12 grid gap-x-14 gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[0.96] tracking-[-0.03em] text-[#0f1613] text-pretty">
                  The logistics.
                </h1>
                <p className="mt-5 max-w-xs text-[14px] leading-[1.7] text-[#5c6762]">
                  For anything not covered here, email
                  support@titanpeptidelab.com. Replies usually arrive inside
                  24\u201348 hours.
                </p>
              </div>

              <div className="lg:col-span-8">
                {SECTIONS.map((s) => (
                  <div key={s.id} id={s.id} className="mt-12 first:mt-0">
                    <div className="flex items-baseline gap-4 border-t border-[rgb(15_22_19/8%)] pt-6">
                      <span className="text-[12px] font-semibold text-[#1e6f58] tabular-nums">
                        {s.label}
                      </span>
                      <h2 className="font-serif text-[1.5rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                        {s.heading}
                      </h2>
                    </div>
                    <p className="mt-4 max-w-xl text-[13.5px] leading-[1.7] text-[#5c6762]">
                      {s.blurb}
                    </p>

                    <dl className="mt-6 space-y-2.5">
                      {s.items.map((f, i) => (
                        <details
                          key={f.q}
                          className="group rounded-xl border border-[rgb(15_22_19/8%)] bg-white px-5 [&_summary::-webkit-details-marker]:hidden"
                        >
                          <summary className="flex cursor-pointer items-baseline justify-between gap-4 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58]">
                            <span className="flex items-baseline gap-4">
                              <span className="text-[11px] font-semibold text-[#8a9690] tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="text-[14px] font-medium text-[#0f1613]">
                                {f.q}
                              </span>
                            </span>
                            <span
                              aria-hidden
                              className="text-lg text-[#8a9690] transition-transform group-open:rotate-45"
                            >
                              +
                            </span>
                          </summary>
                          <dd className="pb-6 pl-[2.75rem] pr-8 text-[13.5px] leading-[1.7] text-[#5c6762]">
                            {f.a}
                          </dd>
                        </details>
                      ))}
                    </dl>
                  </div>
                ))}

                {/* Discount codes */}
                <div className="mt-14 rounded-xl border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-8">
                  <div className="flex items-baseline justify-between border-b border-[rgb(15_22_19/6%)] pb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                      Discount tiers
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                      Subscribers only
                    </span>
                  </div>
                  <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Code code="10% off" v="First order \u2014 subscribe to unlock" />
                    <Code code="15% off" v="3+ items \u2014 subscribers" />
                    <Code code="20% off" v="Orders over $250 \u2014 subscribers" />
                    <Code code="25% off" v="3rd repeat order \u2014 auto-applied" />
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
    <div className="border-b border-[rgb(15_22_19/6%)] pb-3">
      <div className="font-serif text-[1.25rem] tracking-[-0.02em] text-[#0f1613]">
        {code}
      </div>
      <div className="mt-1 text-[13px] text-[#5c6762]">{v}</div>
    </div>
  );
}
