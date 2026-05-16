import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";

export const metadata = {
  title: "Research Disclaimer — Titan Peptide Lab",
  description: "Important disclaimer regarding the research-only nature of Titan Peptide Lab products.",
  alternates: { canonical: "/legal/research-disclaimer/" },
};

export default function ResearchDisclaimerPage() {
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
              Research disclaimer.
            </h1>

            <div className="mt-12 space-y-6 text-[15px] leading-[1.85] text-[#5c6762]">
              <p>
                All products sold by The Titan Peptide Company are intended
                solely for laboratory research purposes. They are not approved
                by the U.S. Food and Drug Administration (FDA) or any equivalent
                regulatory body for human or veterinary use.
              </p>
              <p>
                Products are not intended for diagnostic, therapeutic, or
                preventative purposes in humans or animals. They are not to be
                ingested, injected, inhaled, or applied to the body in any form
                outside of a controlled research setting.
              </p>
              <p>
                Statements on this website have not been evaluated by the FDA.
                No information provided on this site constitutes medical advice,
                and it should not be interpreted as such. Purchasers assume all
                responsibility for compliance with applicable laws and regulations
                in their jurisdiction.
              </p>
              <p>
                By placing an order, the buyer certifies that they are a
                qualified research professional purchasing for legitimate
                research purposes only.
              </p>
            </div>

            <div className="mt-12 rounded-[1.75rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]">
                Contact
              </p>
              <p className="mt-3 text-[14px] leading-[1.8] text-[#5c6762]">
                Questions regarding this disclaimer may be directed to{" "}
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
        </section>
      </main>
      <Footer />
    </>
  );
}
