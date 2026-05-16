import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "Privacy Policy — Titan Peptide Lab",
  description: "How The Titan Peptide Company handles your data.",
  alternates: { canonical: "/legal/privacy/" },
};

export default function PrivacyPage() {
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
              Privacy policy.
            </h1>

            <div className="mt-12 space-y-8 text-[15px] leading-[1.85] text-[#5c6762]">
              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  What we collect
                </h2>
                <p className="mt-4">
                  When you place an order, we collect the information required
                  to fulfill it: email address, shipping address, and payment
                  reference (wallet address or transaction hash). We do not
                  collect credit card numbers, social security numbers, or
                  government-issued IDs.
                </p>
                <p className="mt-4">
                  If you subscribe to our email list, we store your address for
                  the purpose of sending product and batch updates. You can
                  unsubscribe at any time.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  How we use it
                </h2>
                <p className="mt-4">
                  Order information is used solely to fulfill and track your
                  purchase. We do not sell, rent, or share your personal
                  information with third parties for marketing purposes.
                  Shipping addresses are passed to our carrier for delivery.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  Data retention
                </h2>
                <p className="mt-4">
                  Order records, including lot codes and COA references, are
                  retained for a minimum of three years for quality and
                  compliance traceability. You may request deletion of personal
                  data outside of records required for this purpose.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  Cookies
                </h2>
                <p className="mt-4">
                  This site uses minimal analytics to understand traffic
                  patterns. No behavioral tracking or advertising cookies are
                  used. You can disable cookies in your browser settings without
                  affecting site functionality.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  Contact
                </h2>
                <p className="mt-4">
                  For data requests, deletion, or corrections, email{" "}
                  <a
                    href="mailto:support@titanpeptidelab.com"
                    className="text-[#1e6f58] underline underline-offset-2"
                  >
                    support@titanpeptidelab.com
                  </a>
                  .
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
