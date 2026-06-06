import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BlogCTA, BlogDisclaimer, BlogH3, BlogSection, Highlight } from "@/components/blog/blog-layout";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Buy Research Peptides Online — COA-Verified Supplier";
const DESCRIPTION =
  "Buy research peptides online from Titan Peptide Lab: HPLC purity targets, lot-matched COAs, nasal sprays, vials, stacks, crypto checkout, and 24h dispatch target.";
const URL = "/buy-research-peptides/";

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
    q: "Where can researchers buy research peptides online?",
    a: "Researchers can source research-use peptides from suppliers that publish lot traceability, HPLC purity targets, mass-spec identity information, storage handling, and clear research-use labeling before checkout.",
  },
  {
    q: "What makes Titan Peptide Lab different from generic peptide stores?",
    a: "Titan focuses on lot-matched documentation, COA literacy, research-use compliance language, crypto checkout clarity, and a tighter catalog instead of unsupported therapeutic claims.",
  },
  {
    q: "Are Titan peptides for human use?",
    a: "No. Titan Peptide Lab products are sold strictly for in-vitro laboratory research and are not intended for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function BuyResearchPeptidesPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "/" },
            { name: "Buy research peptides", item: URL },
          ]}
        />
        <FAQJsonLd faqs={FAQS} />

        <section className="border-b border-[#13211c]/12">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#53625c]">
              COA-verified peptide supplier
            </p>
            <h1 className="mt-8 max-w-4xl font-serif text-4xl font-normal leading-none tracking-[-0.04em] text-[#13211c] text-pretty md:text-6xl lg:text-7xl">
              Buy research peptides online without guessing the lot.
            </h1>
            <p className="mt-8 max-w-2xl font-serif text-2xl italic leading-9 text-[#53625c]">
              Titan Peptide Lab gives researchers a direct path from product page to lot paperwork: HPLC targets, COA workflow, crypto checkout, and research-use labeling in one place.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products/?ref=buy-research-peptides-top"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0a0a0a] px-8 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5c48]"
              >
                Shop research catalog
              </Link>
              <Link
                href="/blog/how-to-read-peptide-coa/?ref=buy-research-peptides-top"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#13211c]/20 px-8 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#13211c] transition-colors hover:border-[#1a5c48] hover:text-[#1a5c48]"
              >
                Read COA checklist
              </Link>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
          <div className="max-w-prose space-y-16">
            <BlogSection id="buyer-intent" title="Built for commercial search intent, kept inside research-use rules">
              <p>
                People searching to <Highlight>buy research peptides online</Highlight> need fast answers: what compounds are available, whether the supplier documents purity, how payment works, how quickly orders dispatch, and whether the seller is making claims that create risk.
              </p>
              <p>
                This Titan page exists to answer that search intent cleanly. It points buyers toward the catalog while reinforcing that all compounds are for in-vitro laboratory research only.
              </p>
              <BlogH3>What should be visible before checkout?</BlogH3>
              <p>
                Product format, concentration, price, lot policy, COA path, storage requirements, shipping handling, and payment rails should be visible before an order is placed. Titan exposes those details directly on product and testing pages.
              </p>
            </BlogSection>

            <BlogSection id="paths" title="Fast paths for researchers">
              <ul className="space-y-4">
                <li>
                  <Link className="text-[oklch(0.68_0.17_78)] hover:underline" href="/products/bpc-157-nasal-spray/?ref=buy-research-peptides-bpc">BPC-157 nasal spray</Link>{" "}
                  — product page with lot, COA, storage, shipping, and research-use FAQ structured data.
                </li>
                <li>
                  <Link className="text-[oklch(0.68_0.17_78)] hover:underline" href="/products/?ref=buy-research-peptides-catalog">All peptides</Link>{" "}
                  — filter the catalog by nasal spray, injectable vial, or stack.
                </li>
                <li>
                  <Link className="text-[oklch(0.68_0.17_78)] hover:underline" href="/lab-testing/?ref=buy-research-peptides-testing">Lab testing</Link>{" "}
                  — identity, purity, sterility, endotoxin, heavy metals, residual solvents, and third-party retest workflow.
                </li>
              </ul>
            </BlogSection>

            <BlogSection id="ranking-angle" title="The ranking angle: answer what buyers actually compare">
              <p>
                Titan should compete on the terms researchers use when they are close to ordering: <Highlight>research peptides online</Highlight>, <Highlight>buy research peptides</Highlight>, <Highlight>peptide nasal sprays</Highlight>, <Highlight>HPLC peptide COA</Highlight>, and compound-specific searches like BPC-157 nasal spray.
              </p>
              <p>
                This page strengthens that cluster and internally links the searcher into the catalog, testing proof, and buyer guides instead of relying only on social traffic.
              </p>
            </BlogSection>

            <BlogCTA
              heading="Open the catalog and verify the paperwork path."
              text="Choose a compound, review the product details, and compare the lot/COA workflow before checkout."
              href="/products/?ref=buy-research-peptides-bottom"
              label="Buy research peptides"
            />
            <BlogDisclaimer />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
