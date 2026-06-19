import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BlogDisclaimer } from "@/components/blog/blog-layout";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { RECONSTITUTION_COMPOUNDS } from "@/lib/reconstitution-compounds";

const TITLE = "Peptide Reconstitution Guides & Calculators by Compound";
const DESCRIPTION =
  "Per-compound peptide reconstitution calculators and guides: BPC-157, TB-500, Semax, Selank, PT-141, tirzepatide, retatrutide and more. Concentration, mcg/mL, aliquot volume, and U-100 syringe units. Research preparation only.";
const URL = "/reconstitution/";

export const metadata: Metadata = {
  title: `${TITLE} | Titan Peptide Lab`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
  robots: { index: true, follow: true },
};

export default function ReconstitutionHubPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "/" },
            { name: "Reconstitution guides", item: URL },
          ]}
        />
        <section className="mx-auto max-w-4xl px-5 pb-24 pt-12 sm:pt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
            Research tools
          </p>
          <h1 className="mt-3 font-serif text-[2.6rem] leading-[1.02] tracking-[-0.03em] text-[#13211c] sm:text-[3.1rem]">
            Peptide reconstitution guides by compound
          </h1>
          <p className="mt-4 max-w-[64ch] text-[1.05rem] leading-8 text-[#3f4a45]">
            Reconstituting a lyophilized research peptide is a concentration
            problem. Each guide below opens an interactive calculator pre-filled
            to that compound&apos;s typical research vial size and returns the
            resulting mg/mL, mcg/mL, volume per aliquot, and U-100 syringe units.
            Prefer a blank tool? Use the{" "}
            <Link
              className="text-[oklch(0.68_0.17_78)] hover:underline"
              href="/peptide-reconstitution-calculator/?ref=reconstitution-hub"
            >
              general peptide reconstitution calculator
            </Link>
            . Research preparation only — not medical or dosing guidance.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {RECONSTITUTION_COMPOUNDS.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/reconstitution/${c.slug}/`}
                  className="block rounded-2xl border border-[rgb(15_22_19/8%)] bg-white p-5 transition hover:border-[#1e6f58]/40 hover:shadow-sm"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">
                    {c.className}
                  </p>
                  <p className="mt-1 font-serif text-[1.4rem] tracking-[-0.02em] text-[#13211c]">
                    {c.name}
                  </p>
                  <p className="mt-1 text-sm text-[#5c6762]">
                    Reconstitution calculator &amp; concentration guide
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <BlogDisclaimer />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
