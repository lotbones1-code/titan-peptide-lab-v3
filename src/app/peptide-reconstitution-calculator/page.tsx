import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import {
  BlogCTA,
  BlogDisclaimer,
  BlogSection,
  Highlight,
} from "@/components/blog/blog-layout";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";
import { ReconstitutionCalculator } from "@/components/site/reconstitution-calculator";

const TITLE = "Peptide Reconstitution Calculator — Bac Water & Dosing Math";
const DESCRIPTION =
  "Free peptide reconstitution calculator: enter vial mg and bacteriostatic water to get concentration (mg/mL), volume per aliquot, U-100 syringe units, and aliquots per vial. Research preparation only.";
const URL = "/peptide-reconstitution-calculator/";

export const metadata: Metadata = {
  title: `${TITLE} | Titan Peptide Lab`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    q: "How much bacteriostatic water should I add to a peptide vial?",
    a: "There is no single correct volume — the bacteriostatic water you add only sets the concentration, not the amount of peptide. Common research volumes are 1, 2, 2.5, 3, or 5 mL. Less water means a more concentrated solution (smaller draw per aliquot); more water means a more dilute solution (larger, easier-to-measure draw). Enter your vial size and chosen water volume above and the calculator returns the resulting mg/mL and the syringe units per aliquot.",
  },
  {
    q: "How do I calculate the concentration after reconstitution?",
    a: "Concentration in mg/mL equals the vial size in milligrams divided by the millilitres of bacteriostatic water added. For example, a 5 mg vial reconstituted with 2 mL of bac water is 2.5 mg/mL, or 2,500 mcg/mL. The calculator does this automatically and also converts to mcg/mL.",
  },
  {
    q: "How do I convert a microgram target to insulin syringe units?",
    a: "First find the concentration in mcg/mL (vial mcg divided by mL of water). Then divide your per-aliquot microgram target by that concentration to get the volume in mL. Multiply that volume by 100 to get U-100 insulin-syringe units, because a U-100 syringe reads 100 units per 1 mL. The calculator shows all three figures together.",
  },
  {
    q: "What is bacteriostatic water and why is it used?",
    a: "Bacteriostatic water is sterile water containing roughly 0.9% benzyl alcohol, which inhibits bacterial growth so a reconstituted multi-use research vial stays stable longer under refrigeration than one mixed with plain sterile water. It is the standard diluent for reconstituting lyophilized research peptides.",
  },
  {
    q: "Does the amount of water change how much peptide I have?",
    a: "No. The total milligrams of peptide in the vial are fixed at manufacture. Adding more or less bacteriostatic water only changes the concentration and therefore the volume you draw per aliquot — never the total quantity of compound in the vial.",
  },
  {
    q: "Is this calculator medical or dosing advice?",
    a: "No. This is a concentration-math tool for laboratory research preparation only. Titan Peptide Lab products are sold strictly for in-vitro research and are not intended for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function PeptideReconstitutionCalculatorPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "/" },
            {
              name: "Peptide reconstitution calculator",
              item: URL,
            },
          ]}
        />
        <FAQJsonLd faqs={FAQS} />

        <article className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:pt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
            Research tools
          </p>
          <h1 className="mt-3 font-serif text-[2.6rem] leading-[1.02] tracking-[-0.03em] text-[#13211c] sm:text-[3.1rem]">
            Peptide reconstitution calculator
          </h1>
          <p className="mt-4 max-w-[60ch] text-[1.05rem] leading-8 text-[#3f4a45]">
            Reconstituting a lyophilized research peptide is a concentration
            problem, not a guess. Add your vial size and the bacteriostatic
            water you plan to use, and this tool returns the exact mg/mL,
            mcg/mL, volume per aliquot, and U-100 syringe units — so the
            paperwork side of your prep is answerable before you open the vial.
          </p>

          <div className="mt-10">
            <ReconstitutionCalculator />
          </div>

          <div className="prose-none mt-12 space-y-10">
            <BlogSection id="how-it-works" title="How reconstitution math works">
              <p>
                The total peptide in a vial is fixed at manufacture. The{" "}
                <Highlight>bacteriostatic water</Highlight> you add only sets the{" "}
                <Highlight>concentration</Highlight>. Concentration (mg/mL) = vial
                milligrams ÷ millilitres of water. Convert to mcg/mL by
                multiplying by 1,000, then divide your microgram target by that
                concentration to get the draw volume in mL. A U-100 insulin
                syringe reads 100 units per millilitre, so multiply the mL draw
                by 100 to read it directly on the barrel.
              </p>
            </BlogSection>

            <BlogSection id="choosing-water" title="Choosing your water volume">
              <p>
                More dilute (more water) gives a larger, easier-to-measure draw
                and less rounding error on small aliquots; more concentrated
                (less water) means fewer total millilitres to store and a
                smaller draw. Most researchers pick a volume that lands their
                typical aliquot somewhere in the readable middle of a U-100
                syringe. Pair the result with the{" "}
                <Link
                  className="text-[oklch(0.68_0.17_78)] hover:underline"
                  href="/blog/peptide-storage-guide/?ref=reconstitution-calculator-storage"
                >
                  peptide storage guide
                </Link>{" "}
                for stability windows by compound.
              </p>
            </BlogSection>

            <BlogSection id="verify-the-vial" title="Verify the vial before you mix">
              <p>
                The math is only as good as the peptide content in the vial. A
                vial that is light on content reads the same in this calculator
                but delivers less compound than the label implies, so confirm
                the lot documentation first. Titan publishes the HPLC purity
                target and lot-release workflow on the{" "}
                <Link
                  className="text-[oklch(0.68_0.17_78)] hover:underline"
                  href="/lab-testing/?ref=reconstitution-calculator-verify"
                >
                  lab testing
                </Link>{" "}
                page, and the{" "}
                <Link
                  className="text-[oklch(0.68_0.17_78)] hover:underline"
                  href="/blog/how-to-read-peptide-coa/?ref=reconstitution-calculator-coa"
                >
                  how to read a peptide COA
                </Link>{" "}
                guide explains what purity versus peptide content actually mean.
              </p>
            </BlogSection>

            <BlogSection id="reconstitution-faq" title="Reconstitution — common questions">
              <dl className="space-y-6">
                {FAQS.map((faq) => (
                  <div key={faq.q}>
                    <dt className="font-serif text-xl leading-snug text-[#13211c]">
                      {faq.q}
                    </dt>
                    <dd className="mt-2 leading-8 text-[#3f4a45]">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </BlogSection>

            <BlogCTA
              heading="Sourcing the compound you just calculated?"
              text="Browse the catalog and review the lot/COA workflow before checkout — every order ships with research-use labeling."
              href="/products/?ref=reconstitution-calculator-bottom"
              label="Open the catalog"
            />
            <BlogDisclaimer />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
