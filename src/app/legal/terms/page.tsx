import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "Terms of Service — Titan Peptide Lab",
  description: "Terms governing the purchase and use of products from The Titan Peptide Company.",
  alternates: { canonical: "/legal/terms/" },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#1e6f58]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Legal
              </span>
            </div>
            <h1 className="mt-8 font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.95] tracking-[-0.04em] text-[#0f1613]">
              Terms of service.
            </h1>

            <div className="mt-12 space-y-8 text-[15px] leading-[1.85] text-[#5c6762]">
              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  1. Research use only
                </h2>
                <p className="mt-4">
                  All products are sold exclusively for in vitro research
                  purposes. By purchasing, you confirm you are a qualified
                  researcher operating within applicable law. Products are not
                  for human or animal consumption.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  2. Payment and order confirmation
                </h2>
                <p className="mt-4">
                  Orders are processed after manual review of payment
                  confirmation. Checkout is crypto-only (BTC, ETH, USDC ERC-20,
                  SOL, USDC SPL). Orders will not be fulfilled until payment is
                  verified on-chain.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  3. Shipping and fulfillment
                </h2>
                <p className="mt-4">
                  Fulfillment target is 24 hours from payment confirmation.
                  Liquid orders are packed for cold-chain handling. Titan
                  Peptide Lab is not responsible for carrier delays or
                  temperature excursions beyond point of dispatch.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  4. Returns and refunds
                </h2>
                <p className="mt-4">
                  Unopened items may be returned within 14 days of receipt for
                  a refund of the product cost. Shipping costs are
                  non-refundable. Contact{" "}
                  <a
                    href="mailto:support@titanpeptidelab.com"
                    className="text-[#1e6f58] underline underline-offset-2"
                  >
                    support@titanpeptidelab.com
                  </a>{" "}
                  for an RMA number before returning.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  5. Limitation of liability
                </h2>
                <p className="mt-4">
                  The Titan Peptide Company is not liable for any damages
                  arising from misuse of products, use outside of stated
                  research purposes, or actions taken in violation of these
                  terms. All purchases are final upon fulfillment.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  6. Governing law
                </h2>
                <p className="mt-4">
                  These terms are governed by the laws of the State of Nevada,
                  United States. Disputes shall be resolved by binding
                  arbitration in Washoe County, NV.
                </p>
              </div>
            </div>

            <p className="mt-14 text-[13px] text-[#8a9690]">
              Last updated: January 2026 &middot;{" "}
              <a
                href="mailto:support@titanpeptidelab.com"
                className="text-[#1e6f58] underline underline-offset-2"
              >
                support@titanpeptidelab.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
