import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, GitCompareArrows, FileSearch, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "GLP-1 Research Peptides | Retatrutide, Tirzepatide & Semaglutide | Titan Peptide Lab";
const DESCRIPTION =
  "A research-buyer's guide to the GLP-1 peptide category: retatrutide, tirzepatide, and semaglutide compared by receptor activity, with lot-matched COAs, HPLC purity targets, and crypto checkout. Supplied strictly for laboratory research — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/glp-1-research-peptides/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/glp-1-research-peptides/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const RECEPTOR_TABLE: [string, string, string, string][] = [
  // [compound, receptor activity, format at Titan, page]
  ["Retatrutide", "GLP-1 / GIP / glucagon triple-agonist", "10mg lyophilized vial (in catalog)", "/products/retatrutide/?ref=glp1-hub"],
  ["Tirzepatide", "GLP-1 / GIP dual-agonist", "Research reference page", "/where-to-buy-tirzepatide/?ref=glp1-hub"],
  ["Semaglutide", "GLP-1 single receptor agonist", "Research reference page", "/where-to-buy-semaglutide-research/?ref=glp1-hub"],
];

const CARDS = [
  {
    icon: GitCompareArrows,
    title: "One, two, or three receptors",
    body: "The GLP-1 category is defined by how many incretin pathways a molecule engages. Semaglutide acts at GLP-1 alone; tirzepatide adds GIP; retatrutide adds glucagon for triple agonism. More receptor targets does not mean 'better' — it means a different pharmacology to characterize. The side-by-side comparison lays out where each one sits.",
    href: "/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=glp1-hub",
    cta: "Retatrutide vs tirzepatide vs semaglutide",
  },
  {
    icon: FileSearch,
    title: "The lot sheet is the receipt",
    body: "These are synthesized research reagents, so there is no brand-name authenticity to lean on. Confirm a lot-matched release sheet referenced to the code on the vial before paying — purity by HPLC and identity by mass spec. With crypto there is no chargeback, so that document is what stands in for buyer protection.",
    href: "/coa-verified-peptide-supplier/?ref=glp1-hub",
    cta: "How to verify a COA",
  },
  {
    icon: FlaskConical,
    title: "Reconstitution sets concentration, not dose",
    body: "Lyophilized GLP-1 peptides ship dry and are reconstituted with bacteriostatic water before in-vitro work. The water volume only sets concentration (mg/mL), not the amount of peptide in the vial. Model any volume against vial size before you draw an aliquot.",
    href: "/reconstitution/retatrutide/?ref=glp1-hub",
    cta: "Retatrutide reconstitution",
  },
  {
    icon: ShieldCheck,
    title: "Crypto checkout, on-chain proof",
    body: "Titan is crypto-only (BTC, USDC, SOL). A crypto payment leaves a public, timestamped transaction hash — verifiable proof you sent the exact amount to the address shown. An order ID is recorded with support first, and dispatch follows on-chain confirmation.",
    href: "/buy-retatrutide-with-crypto/?ref=glp1-hub",
    cta: "Buy retatrutide with crypto",
  },
];

const FAQS = [
  {
    q: "What are GLP-1 research peptides?",
    a: "GLP-1 research peptides are synthetic incretin-pathway agonists studied in published pharmacology literature — semaglutide (GLP-1), tirzepatide (GLP-1/GIP), and retatrutide (GLP-1/GIP/glucagon). Titan Peptide Lab supplies them strictly as research reagents for in-vitro laboratory work. They are not for human or animal consumption and carry no therapeutic or efficacy claims.",
  },
  {
    q: "What is the difference between retatrutide, tirzepatide, and semaglutide?",
    a: "The defining difference is receptor coverage. Semaglutide is a single GLP-1 receptor agonist; tirzepatide is a dual GLP-1/GIP agonist; retatrutide is a triple GLP-1/GIP/glucagon agonist. Each appears in distinct bodies of incretin-pathway research. The full side-by-side comparison covers receptor activity, structure class, and how they are characterized.",
  },
  {
    q: "Which GLP-1 research peptide does Titan stock?",
    a: "Retatrutide (10mg lyophilized vial) is the GLP-1-category compound currently in Titan's catalog, with a lot-matched release sheet and HPLC purity target. The tirzepatide and semaglutide pages are research reference resources for comparison and sourcing context. Every listing states the research-use-only boundary.",
  },
  {
    q: "Can I buy GLP-1 research peptides with crypto?",
    a: "Yes. Titan Peptide Lab is crypto-only, so GLP-1 research compounds are paid for in cryptocurrency — BTC, USDC, or SOL. The wallet address, network, QR code, and exact amount are shown before payment, and an order ID is recorded with support first. The public transaction hash is your receipt.",
  },
  {
    q: "Are GLP-1 peptides from Titan for weight loss or human use?",
    a: "No. Titan Peptide Lab's GLP-1 peptides are supplied strictly for in-vitro laboratory research. They are not for human or animal consumption and are not sold for weight loss, diagnostic, therapeutic, or preventative use. No efficacy or dosing guidance for human use is provided.",
  },
  {
    q: "How do I confirm purity on a GLP-1 research peptide?",
    a: "Match the lot code on the vial to the release sheet, which should report an HPLC purity result against an internal target and identity confirmation by mass spectrometry. Buying a single vial first to vet the source against its documentation is a common research-procurement practice before a larger order.",
  },
];

export default function Glp1ResearchPeptidesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "GLP-1 Research Peptides", item: "/glp-1-research-peptides/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                GLP-1 category · incretin research peptides · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                GLP-1 research peptides — sorted by how many receptors they hit.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                The fastest way to navigate the GLP-1 category is receptor coverage: semaglutide engages GLP-1 alone, tirzepatide adds GIP, and retatrutide adds glucagon for triple agonism. Titan supplies these as documented research reagents — lot-matched COAs, HPLC purity targets, crypto checkout. Start with the comparison, then open the compound you need.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/retatrutide/?ref=glp1-hub-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View retatrutide
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=glp1-hub-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Compare all three
                </Link>
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-[#8a9690]">
                For research use only · Not for human consumption
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
              The category at a glance
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Receptor activity is the line that separates them.
            </h2>
            <div className="mt-9 overflow-hidden rounded-[1.5rem] border border-[#dde6e1]">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#f4f7f5] text-[11px] uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4 font-semibold">Compound</th>
                    <th className="px-5 py-4 font-semibold">Receptor activity</th>
                    <th className="px-5 py-4 font-semibold">At Titan</th>
                    <th className="px-5 py-4 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {RECEPTOR_TABLE.map(([compound, receptor, format, href]) => (
                    <tr key={compound} className="border-t border-[#e7ede9] align-top">
                      <td className="px-5 py-5 font-serif text-[1.15rem] tracking-[-0.01em]">{compound}</td>
                      <td className="px-5 py-5 text-[#5c6762]">{receptor}</td>
                      <td className="px-5 py-5 text-[#5c6762]">{format}</td>
                      <td className="px-5 py-5">
                        <Link href={href} className="inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.1em] text-[#1e6f58] hover:underline">
                          Open →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[12px] leading-6 text-[#8a9690]">
              Retatrutide is the GLP-1-category compound currently in Titan&apos;s catalog. Tirzepatide and semaglutide pages are research reference resources. All are research-use-only; no human-use, dosing, or efficacy claims are made.
            </p>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {CARDS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link key={title} href={href} className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.45rem] leading-tight tracking-[-0.02em] group-hover:text-[#1e6f58]">
                    {title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58]">
                    {cta} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Related reading</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Go deeper on GLP-1.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/retatrutide-vs-tirzepatide-vs-semaglutide/?ref=glp1-hub">Retatrutide vs tirzepatide vs semaglutide →</Link></li>
              <li><Link className="hover:underline" href="/semaglutide-vs-tirzepatide/?ref=glp1-hub">Semaglutide vs tirzepatide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-retatrutide/?ref=glp1-hub">Where to buy retatrutide →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-tirzepatide/?ref=glp1-hub">Where to buy tirzepatide (research) →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-semaglutide-research/?ref=glp1-hub">Where to buy semaglutide (research) →</Link></li>
              <li><Link className="hover:underline" href="/buy-retatrutide-with-crypto/?ref=glp1-hub">Buy retatrutide with crypto →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=glp1-hub">COA-verified peptide supplier →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Sourcing a GLP-1 research compound?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Retatrutide is in catalog now with lot documentation. Open the product page for current pricing, or read the crypto checkout walkthrough first.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/retatrutide/?ref=glp1-hub-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Retatrutide
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=glp1-hub-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                How to pay with crypto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
