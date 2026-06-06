import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BlogCTA, BlogDisclaimer, BlogH3, BlogSection, Highlight } from "@/components/blog/blog-layout";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Research Peptides Online — HPLC-Tested Catalog";
const DESCRIPTION =
  "Source research peptides online from Titan Peptide Lab: nasal sprays, vials, and stacks with lot-matched COAs, HPLC purity targets, and research-use labeling.";
const URL = "/research-peptides/";

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
    q: "What are research peptides?",
    a: "Research peptides are laboratory compounds used for in-vitro research workflows. Titan Peptide Lab products are labeled for research use only and are not intended for human or animal consumption.",
  },
  {
    q: "How should researchers compare peptide suppliers?",
    a: "Compare the lot code, HPLC purity data, mass-spec identity confirmation, COA issue date, storage requirements, shipping handling, and whether the paperwork matches the bottle received.",
  },
  {
    q: "Does Titan provide lot-matched COAs?",
    a: "Every Titan order ships with a lot-matched release sheet and the independent retest path is tied to the same lot code for traceability.",
  },
];

export default function ResearchPeptidesPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "/" },
            { name: "Research peptides", item: URL },
          ]}
        />
        <FAQJsonLd faqs={FAQS} />

        <section className="border-b border-[#13211c]/12">
          <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#53625c]">
              Research peptide catalog
            </p>
            <h1 className="mt-8 max-w-4xl font-serif text-4xl font-normal leading-none tracking-[-0.04em] text-[#13211c] text-pretty md:text-6xl lg:text-7xl">
              Research peptides online with lot-matched COAs.
            </h1>
            <p className="mt-8 max-w-2xl font-serif text-2xl italic leading-9 text-[#53625c]">
              A peptide source for researchers who care about HPLC purity data,
              mass-spec identity, batch traceability, and documented handling.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products/?ref=research-peptides-hub"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0a0a0a] px-8 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5c48]"
              >
                View peptide catalog
              </Link>
              <Link
                href="/lab-testing/?ref=research-peptides-hub"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#13211c]/20 px-8 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#13211c] transition-colors hover:border-[#1a5c48] hover:text-[#1a5c48]"
              >
                See lab testing
              </Link>
            </div>
          </div>
        </section>

        <article className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
          <div className="max-w-prose space-y-16">
            <BlogSection id="what-to-look-for" title="What to look for before buying research peptides online">
              <p>
                A strong peptide supplier should make verification easier before the order is placed. Researchers should be able to find the compound format, concentration, lot policy, storage requirements, purity target, and the exact documentation path without sending three support messages.
              </p>
              <p>
                Titan puts the proof chain near the catalog: <Highlight>HPLC purity targets</Highlight>, lot-matched release sheets, mass-spec identity checks, research-use boundaries, crypto checkout visibility, and plain parcel labeling for laboratory delivery.
              </p>
              <BlogH3>Documentation beats branding</BlogH3>
              <p>
                The deciding question is not whether a supplier looks polished. It is whether the lot paperwork follows the bottle. That is why Titan product pages prioritize lot code, COA access, storage notes, and handling language over unsupported wellness claims.
              </p>
            </BlogSection>

            <BlogSection id="catalog" title="Titan peptide catalog paths">
              <ul className="space-y-4">
                <li>
                  <Link className="text-[oklch(0.68_0.17_78)] hover:underline" href="/products/?ref=research-peptides-hub-catalog">All research peptides</Link>{" "}
                  — nasal sprays, injectable vials, and stacks in one filterable catalog.
                </li>
                <li>
                  <Link className="text-[oklch(0.68_0.17_78)] hover:underline" href="/blog/where-to-buy-peptide-nasal-sprays/?ref=research-peptides-hub-guide">Where to buy peptide nasal sprays</Link>{" "}
                  — a buyer guide for researchers comparing nasal spray suppliers.
                </li>
                <li>
                  <Link className="text-[oklch(0.68_0.17_78)] hover:underline" href="/blog/how-to-verify-peptide-purity/?ref=research-peptides-hub-coa">How to verify peptide purity</Link>{" "}
                  — what HPLC, mass spec, and lot-matched COAs should show.
                </li>
              </ul>
            </BlogSection>

            <BlogSection id="why-titan" title="Why Titan should show up when researchers search peptides">
              <p>
                Searchers looking for research peptides are usually trying to reduce supplier risk. Titan answers that intent directly: what is in stock, how it is tested, which lot ships, how checkout works, and what documentation follows the order.
              </p>
              <p>
                The site avoids disease-treatment promises and keeps the offer inside a research-use lane. That gives search engines and buyers a cleaner reason to trust the page: verifiable supplier quality, not exaggerated claims.
              </p>
            </BlogSection>

            <BlogCTA
              heading="Start with the catalog, then verify the lot."
              text="Open the full peptide catalog, compare formats, and check the lot documentation path before checkout."
              href="/products/?ref=research-peptides-hub-bottom"
              label="Browse research peptides"
            />
            <BlogDisclaimer />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
