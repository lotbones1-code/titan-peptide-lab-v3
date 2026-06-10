import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BlogCTA, BlogDisclaimer, BlogH3, BlogSection, Highlight } from "@/components/blog/blog-layout";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Peptide Nasal Spray Supplier — COA-Documented Research Catalog";
const DESCRIPTION =
  "Compare peptide nasal spray suppliers by COA documentation, lot traceability, research-use labeling, storage handling, shipping clarity, and catalog depth.";
const URL = "/peptide-nasal-spray-supplier/";

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
    q: "What should researchers look for in a peptide nasal spray supplier?",
    a: "Look for lot-matched COA documentation, HPLC purity targets, mass-spec identity workflow, clear research-use labeling, storage guidance, shipping transparency, and contact information before checkout.",
  },
  {
    q: "Why do COAs matter for peptide nasal sprays?",
    a: "A COA helps researchers verify that the supplier can connect a product lot to identity and purity documentation instead of relying on generic catalog claims.",
  },
  {
    q: "Are Titan peptide nasal sprays for human use?",
    a: "No. Titan products are sold strictly for in-vitro laboratory research and are not intended for human or animal consumption, diagnosis, treatment, prevention, or therapeutic use.",
  },
];

export default function PeptideNasalSpraySupplierPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "/" },
            { name: "Peptide nasal spray supplier", item: URL },
          ]}
        />
        <FAQJsonLd faqs={FAQS} />

        <section className="border-b border-[#13211c]/12">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#53625c]">
              Peptide nasal spray supplier checklist
            </p>
            <h1 className="mt-8 max-w-4xl font-serif text-4xl font-normal leading-none tracking-[-0.04em] text-[#13211c] text-pretty md:text-6xl lg:text-7xl">
              Choose a peptide nasal spray supplier by the paperwork, not the hype.
            </h1>
            <p className="mt-8 max-w-2xl font-serif text-2xl italic leading-9 text-[#53625c]">
              Titan Peptide Lab gives researchers a cleaner comparison path: lot documentation, COA literacy, research-use boundaries, catalog links, storage notes, and checkout clarity in one place.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products/?ref=nasal-spray-supplier-top"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0a0a0a] px-8 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5c48]"
              >
                View research catalog
              </Link>
              <Link
                href="/lab-testing/?ref=nasal-spray-supplier-top"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#13211c]/20 px-8 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#13211c] transition-colors hover:border-[#1a5c48] hover:text-[#1a5c48]"
              >
                Review testing standards
              </Link>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
          <div className="max-w-prose space-y-16">
            <BlogSection id="comparison" title="How to compare peptide nasal spray suppliers">
              <p>
                Searchers looking for a <Highlight>peptide nasal spray supplier</Highlight> are usually past casual research. They want to know which catalog is documented, which supplier explains quality control, and which checkout path stays inside research-use rules.
              </p>
              <p>
                A useful supplier page should make those details visible before the buyer reaches the cart. Titan keeps the comparison focused on documentation, not unsupported wellness promises.
              </p>
              <BlogH3>Supplier signals worth checking first</BlogH3>
              <ul className="space-y-3">
                <li>Lot-matched COA or third-party testing workflow.</li>
                <li>HPLC purity targets and mass-spec identity references.</li>
                <li>Clear research-use-only language on product and checkout pages.</li>
                <li>Storage, handling, shipping, and payment expectations.</li>
                <li>Support contact path for documentation questions.</li>
              </ul>
            </BlogSection>

            <BlogSection id="titan-path" title="Titan's nasal spray research catalog path">
              <p>
                Titan's current nasal spray cluster links buyers into compound-specific pages and education instead of forcing them to trust a generic category claim. Start with the catalog, then validate testing and storage expectations before checkout.
              </p>
              <ul className="space-y-4">
                <li>
                  <Link className="text-[oklch(0.68_0.17_78)] hover:underline" href="/products/?ref=nasal-spray-supplier-catalog">Research catalog</Link>{" "}
                  — browse nasal sprays, vials, and stacks from the live product index.
                </li>
                <li>
                  <Link className="text-[oklch(0.68_0.17_78)] hover:underline" href="/products/bpc-157-nasal-spray/?ref=nasal-spray-supplier-bpc">BPC-157 nasal spray</Link>{" "}
                  — product page with research-use language, storage notes, and documentation path.
                </li>
                <li>
                  <Link className="text-[oklch(0.68_0.17_78)] hover:underline" href="/blog/where-to-buy-peptide-nasal-sprays/?ref=nasal-spray-supplier-guide">Where to buy peptide nasal sprays</Link>{" "}
                  — sourcing guide for comparing supplier proof, payment clarity, and product format.
                </li>
              </ul>
            </BlogSection>

            <BlogSection id="seo-intent" title="Why this page matters for search visibility">
              <p>
                Titan already has product pages and buyer guides. This page targets the supplier-level query that sits between education and checkout: <Highlight>peptide nasal spray supplier</Highlight>, <Highlight>research peptide nasal spray supplier</Highlight>, and adjacent COA-focused searches.
              </p>
              <p>
                The conversion path is intentionally simple: answer supplier-comparison intent, send qualified buyers to the catalog, and reinforce documentation standards without changing site design, checkout, cart, pricing, APIs, or product data.
              </p>
            </BlogSection>

            <BlogCTA
              heading="Compare the catalog by documentation first."
              text="Open the nasal spray catalog, review the product details, and use the testing page to understand Titan's documentation workflow."
              href="/products/?ref=nasal-spray-supplier-bottom"
              label="View peptide nasal sprays"
            />
            <BlogDisclaimer />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
