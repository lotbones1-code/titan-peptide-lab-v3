import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, GitCompareArrows, FileSearch, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "Nootropic & Nasal Research Peptides | Semax, Selank, DSIP, Oxytocin, PT-141 | Titan Peptide Lab";
const DESCRIPTION =
  "A research-buyer's map of the nasal-delivery peptide category: Semax, Selank, DSIP, oxytocin, and PT-141 sorted by the research literature they appear in, with lot-matched COAs, HPLC purity targets, and crypto checkout. Supplied strictly for laboratory research — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/nootropic-nasal-peptides/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/nootropic-nasal-peptides/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const COMPOUND_TABLE: [string, string, string, string][] = [
  // [compound, research area, format at Titan, page]
  ["Semax", "Neurotrophic / BDNF-pathway research", "Nasal spray", "/where-to-buy-semax-nasal-spray/?ref=nootropic-hub"],
  ["Selank", "Anxiolytic / immunomodulation research", "Nasal spray", "/where-to-buy-selank/?ref=nootropic-hub"],
  ["DSIP", "Delta-sleep neuropeptide research", "Nasal spray", "/where-to-buy-dsip-nasal-spray/?ref=nootropic-hub"],
  ["Oxytocin", "Social / behavioral neuropeptide research", "Nasal spray", "/where-to-buy-oxytocin-nasal-spray/?ref=nootropic-hub"],
  ["PT-141", "Melanocortin-pathway research", "Nasal spray", "/where-to-buy-pt-141-nasal-spray/?ref=nootropic-hub"],
];

const CARDS = [
  {
    icon: GitCompareArrows,
    title: "Semax and Selank are the comparison most people start with",
    body: "The two most-searched compounds in this category are Semax and Selank, and they sit in different research literatures — Semax in neurotrophic/BDNF studies, Selank in anxiolytic and immunomodulation work. If you are narrowing the category, the side-by-side is the fastest way to see where each one is characterized before opening a single product page.",
    href: "/semax-vs-selank/?ref=nootropic-hub",
    cta: "Semax vs Selank",
  },
  {
    icon: FileSearch,
    title: "The lot sheet is the receipt",
    body: "These are synthesized research reagents, so there is no brand-name authenticity to lean on. Confirm a lot-matched release sheet referenced to the code on the vial before paying — purity by HPLC and identity by mass spec. With crypto there is no chargeback, so that document is what stands in for buyer protection.",
    href: "/how-to-verify-peptide-quality-coa/?ref=nootropic-hub",
    cta: "How to verify a COA",
  },
  {
    icon: FlaskConical,
    title: "Nasal format sets concentration, not dose",
    body: "Nasal research peptides ship lyophilized and are reconstituted before in-vitro work. The diluent volume sets concentration (mg/mL), not the amount of peptide in the vial. Model any volume against vial size before you draw an aliquot — the format does not change that math.",
    href: "/peptide-reconstitution-calculator/?ref=nootropic-hub",
    cta: "Reconstitution calculator",
  },
  {
    icon: ShieldCheck,
    title: "Crypto checkout, on-chain proof",
    body: "Titan is crypto-only (BTC, USDC, SOL). A crypto payment leaves a public, timestamped transaction hash — verifiable proof you sent the exact amount to the address shown. An order ID is recorded with support first, and dispatch follows on-chain confirmation.",
    href: "/how-to-pay-with-crypto/?ref=nootropic-hub",
    cta: "How to pay with crypto",
  },
];

const FAQS = [
  {
    q: "What are nootropic and nasal research peptides?",
    a: "They are synthetic peptides studied in published neuropeptide and behavioral research and commonly supplied in a nasal-spray research format — Semax, Selank, DSIP, oxytocin, and PT-141 are the most-searched examples. Titan Peptide Lab supplies them strictly as research reagents for in-vitro laboratory work. They are not for human or animal consumption and carry no therapeutic, cognitive, or efficacy claims.",
  },
  {
    q: "Which nasal research peptides does Titan stock?",
    a: "Titan lists research-format pages for Semax, Selank, DSIP, oxytocin, and PT-141, each with sourcing and verification context. Every listing states the research-use-only boundary, and pricing and availability are shown on the individual compound page.",
  },
  {
    q: "What is the difference between Semax and Selank?",
    a: "The defining difference is the research literature each appears in. Semax is studied largely in neurotrophic and BDNF-pathway contexts; Selank appears more in anxiolytic and immunomodulation research. They are distinct molecules, not interchangeable. The full Semax vs Selank comparison covers structure class and how each is characterized.",
  },
  {
    q: "Can I buy nasal research peptides with crypto?",
    a: "Yes. Titan Peptide Lab is crypto-only, so these research compounds are paid for in cryptocurrency — BTC, USDC, or SOL. The wallet address, network, QR code, and exact amount are shown before payment, and an order ID is recorded with support first. The public transaction hash is your receipt.",
  },
  {
    q: "Are these peptides for human use or cognitive enhancement?",
    a: "No. Titan Peptide Lab's peptides are supplied strictly for in-vitro laboratory research. They are not for human or animal consumption and are not sold for cognitive, diagnostic, therapeutic, or preventative use. No efficacy or dosing guidance for human use is provided.",
  },
  {
    q: "How do I confirm purity on a nasal research peptide?",
    a: "Match the lot code on the vial to the release sheet, which should report an HPLC purity result against an internal target and identity confirmation by mass spectrometry. Buying a single vial first to vet the source against its documentation is a common research-procurement practice before a larger order.",
  },
];

export default function NootropicNasalPeptidesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Nootropic & Nasal Research Peptides", item: "/nootropic-nasal-peptides/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Nasal-delivery category · neuropeptide research · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                Nasal research peptides — sorted by the literature they show up in.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                The nasal-format category clusters Semax, Selank, DSIP, oxytocin, and PT-141 — each studied in a different neuropeptide research area. Titan supplies these as documented research reagents: lot-matched COAs, HPLC purity targets, crypto checkout. Start with the compound table, or open the Semax vs Selank comparison most buyers begin with.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/where-to-buy-semax-nasal-spray/?ref=nootropic-hub-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View Semax spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/semax-vs-selank/?ref=nootropic-hub-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  Semax vs Selank
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
              Five compounds, five research areas, one nasal format.
            </h2>
            <div className="mt-9 overflow-hidden rounded-[1.5rem] border border-[#dde6e1]">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#f4f7f5] text-[11px] uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4 font-semibold">Compound</th>
                    <th className="px-5 py-4 font-semibold">Research area</th>
                    <th className="px-5 py-4 font-semibold">Format</th>
                    <th className="px-5 py-4 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {COMPOUND_TABLE.map(([compound, area, format, href]) => (
                    <tr key={compound} className="border-t border-[#e7ede9] align-top">
                      <td className="px-5 py-5 font-serif text-[1.15rem] tracking-[-0.01em]">{compound}</td>
                      <td className="px-5 py-5 text-[#5c6762]">{area}</td>
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
              &quot;Research area&quot; describes the published literature each compound appears in, not a use or effect in humans. All compounds are research-use-only; no human-use, dosing, cognitive, or efficacy claims are made.
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
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Go deeper on the nasal category.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/semax-vs-selank/?ref=nootropic-hub">Semax vs Selank →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-semax-selank-stack/?ref=nootropic-hub">Where to buy the Semax + Selank stack →</Link></li>
              <li><Link className="hover:underline" href="/dsip-vs-selank-nasal-spray/?ref=nootropic-hub">DSIP vs Selank nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/dsip-vs-oxytocin-nasal-spray/?ref=nootropic-hub">DSIP vs Oxytocin nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/pt-141-vs-oxytocin-nasal-spray/?ref=nootropic-hub">PT-141 vs Oxytocin nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/peptide-nasal-spray-supplier/?ref=nootropic-hub">Peptide nasal spray supplier →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=nootropic-hub">COA-verified peptide supplier →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Sourcing a nasal research peptide?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the compound you need for current pricing and lot documentation, or read the crypto checkout walkthrough first.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/where-to-buy-semax-nasal-spray/?ref=nootropic-hub-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Semax spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=nootropic-hub-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
