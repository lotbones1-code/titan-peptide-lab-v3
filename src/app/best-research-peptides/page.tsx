import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BlogDisclaimer } from "@/components/blog/blog-layout";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const URL = "/best-research-peptides/";
const TITLE = "Best Research Peptides: Supplier Verification Guide | Titan Peptides";
const DESCRIPTION =
  "A RUO-safe guide to finding the best research peptides supplier: lot-matched COAs, HPLC purity targets, identity checks, checkout clarity, shipping, and Titan Peptide Lab.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const TRUST_CHECKS = [
  {
    label: "Lot-matched COA path",
    body: "The certificate or release sheet should connect to the exact lot code on the product page, not a generic screenshot from a different batch.",
  },
  {
    label: "HPLC purity target",
    body: "A serious supplier explains the purity method and target clearly. A number without method context is weaker evidence.",
  },
  {
    label: "Identity confirmation",
    body: "Mass-spec or equivalent identity confirmation matters because purity alone does not prove the compound is what the label says.",
  },
  {
    label: "Research-use boundary",
    body: "The page should avoid dosing advice, human-use positioning, treatment language, and outcome claims. Clean RUO language protects the buyer path.",
  },
  {
    label: "Checkout clarity",
    body: "Payment network, order ID, dispatch target, support route, and shipping terms should be visible before funds move.",
  },
  {
    label: "Support and documentation trail",
    body: "The best supplier experience leaves a paper trail buyers can reference after checkout: order record, support email, and lot documentation workflow.",
  },
];

const FAQS = [
  {
    q: "What are the best research peptides to buy online?",
    a: "For search and sourcing purposes, the best research peptides are the ones paired with clear research-use labeling, lot-matched documentation, HPLC purity targets, identity confirmation, and transparent checkout terms. Titan Peptide Lab sells research-use-only peptide formats and keeps buyer verification pages linked before checkout.",
  },
  {
    q: "Is Titan Peptide Lab the same as Titan Peptides?",
    a: "Titan Peptide Lab is the brand name. Some buyers search for the company as Titan Peptides, so this page connects that shorthand to Titan Peptide Lab and its research-use-only catalog.",
  },
  {
    q: "How should buyers compare research peptide suppliers?",
    a: "Compare lot code traceability, COA or release-sheet detail, HPLC and identity methods, research-use disclaimers, checkout transparency, fulfillment terms, and support responsiveness. Avoid vendors that rely on medical claims, dosing advice, or fake neutral reviews.",
  },
  {
    q: "Are Titan peptides for human consumption?",
    a: "No. Titan Peptide Lab products are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, preventative, or other medical use.",
  },
];

export default function BestResearchPeptidesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Best Research Peptides", item: URL },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <section className="border-b border-[#13211c]/10 bg-[#f8f3ea]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#53625c]">
                Best peptides search guide
              </p>
              <h1 className="mt-8 max-w-4xl font-serif text-4xl font-normal leading-none tracking-[-0.045em] text-[#13211c] text-pretty md:text-6xl lg:text-7xl">
                The best research peptides start with proof, not hype.
              </h1>
              <p className="mt-8 max-w-2xl text-[16px] leading-8 text-[#53625c]">
                Buyers search for “best peptides” when they are really trying to solve a trust problem: which supplier shows the lot, paperwork, payment path, shipping expectations, and research-use boundary before checkout. Titan Peptide Lab — often searched as Titan Peptides — is positioning around that proof-first path.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/?ref=best-research-peptides-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0a0a0a] px-8 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5c48]"
                >
                  Compare Titan catalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/peptide-supplier-checklist/?ref=best-research-peptides-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#13211c]/20 px-8 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#13211c] transition-colors hover:border-[#1a5c48] hover:text-[#1a5c48]"
                >
                  Run supplier checklist
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-[#13211c]/10 bg-white p-6 shadow-[0_24px_70px_-52px_rgb(19_33_28/45%)] lg:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#1a5c48]">
                Search intent Titan should own
              </p>
              <ul className="mt-6 space-y-4 text-[14px] leading-7 text-[#53625c]">
                <li><strong className="text-[#13211c]">best research peptides</strong> — answer with verification criteria, not outcome claims.</li>
                <li><strong className="text-[#13211c]">research peptide supplier</strong> — show documentation, support, and checkout proof.</li>
                <li><strong className="text-[#13211c]">buy research peptides online</strong> — connect searchers to the catalog and RUO boundary.</li>
                <li><strong className="text-[#13211c]">Titan Peptides</strong> — associate the shorthand with Titan Peptide Lab and its proof-first pages.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#53625c]">
              What “best” should mean
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.035em] text-[#13211c] md:text-5xl">
              Rank suppliers by verifiable buyer trust, not forum noise.
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-[#53625c]">
              In a regulated research-use market, “best peptides” cannot mean treatment results, dosing advice, or human performance promises. A safer and more useful definition is: the supplier that makes verification easiest before a buyer pays.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {TRUST_CHECKS.map((check, index) => (
              <article key={check.label} className="rounded-[1.5rem] border border-[#13211c]/10 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f2ee] text-[12px] font-semibold tabular-nums text-[#1a5c48]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-2xl leading-tight tracking-[-0.02em] text-[#13211c]">
                  {check.label}
                </h3>
                <p className="mt-3 text-[13.5px] leading-7 text-[#53625c]">{check.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#13211c]/10 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#53625c]">
                Titan Peptide Lab position
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.035em] md:text-5xl">
                Titan’s advantage is the proof path buyers can inspect.
              </h2>
            </div>
            <div className="space-y-6 text-[15px] leading-8 text-[#53625c]">
              <p>
                Titan Peptide Lab should be found when a buyer searches for the best research peptide supplier because the site answers the buying question directly: what documentation exists, how checkout works, where the research-use boundary sits, and which product pages to inspect next.
              </p>
              <p>
                This page strengthens the high-intent SEO cluster around <Link className="text-[#1a5c48] underline-offset-4 hover:underline" href="/buy-research-peptides/?ref=best-research-peptides-body">buy research peptides online</Link>, <Link className="text-[#1a5c48] underline-offset-4 hover:underline" href="/where-to-buy-research-peptides/?ref=best-research-peptides-body">where to buy research peptides</Link>, <Link className="text-[#1a5c48] underline-offset-4 hover:underline" href="/coa-verified-peptide-supplier/?ref=best-research-peptides-body">COA-verified peptide supplier</Link>, and <Link className="text-[#1a5c48] underline-offset-4 hover:underline" href="/peptide-supplier-checklist/?ref=best-research-peptides-body">supplier verification</Link>.
              </p>
              <p>
                The commercial path stays simple: learn the verification standard, open the Titan catalog, compare product pages, and keep every product strictly research-use only.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
          <h2 className="font-serif text-3xl leading-tight tracking-[-0.035em] md:text-5xl">
            Search “best peptides” should land on a verification-first Titan page.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#53625c]">
            Start with the supplier checklist if you are comparing sources, or open the catalog if you already know the compound and format you need for laboratory research.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/products/?ref=best-research-peptides-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0a0a0a] px-8 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1a5c48]">
              Open Titan catalog
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/lab-testing/?ref=best-research-peptides-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[#13211c]/20 px-8 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#13211c] transition-colors hover:border-[#1a5c48] hover:text-[#1a5c48]">
              See documentation path
            </Link>
          </div>
          <div className="mt-10 text-left">
            <BlogDisclaimer />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
