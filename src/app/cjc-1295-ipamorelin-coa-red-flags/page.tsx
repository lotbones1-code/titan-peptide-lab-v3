import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, ScanLine, Scale, FileSearch } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "CJC-1295 + Ipamorelin COA Red Flags | DAC vs No-DAC, Blend Ratio & Per-Component Verification | Titan Peptide Lab";
const DESCRIPTION =
  "How to read a certificate of analysis for a CJC-1295 + Ipamorelin blend: DAC vs no-DAC identity, the blend ratio, per-component mass-spec confirmation, and the lot-match checks that separate a documented research reagent from an unverifiable one. Research use only — not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cjc-1295-ipamorelin-coa-red-flags/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/cjc-1295-ipamorelin-coa-red-flags/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

// [red flag, what to check instead, why it matters]
const REDFLAG_TABLE: [string, string, string][] = [
  [
    "“CJC-1295” with no DAC / no-DAC stated",
    "A COA that names the exact molecule — CJC-1295 with DAC (the drug-affinity-complex form) or CJC-1295 without DAC (Mod-GRF 1-29).",
    "These are two different research peptides with different molecular weights. A certificate that just says “CJC-1295” without specifying DAC status has not actually identified what is in the vial. The mass-spec target weight is the tell.",
  ],
  [
    "One purity number for a two-peptide blend",
    "Separate identity and purity data for CJC-1295 and for Ipamorelin — ideally an HPLC trace where both peaks are resolved.",
    "A blend is two compounds. A single combined “99%” line cannot show whether the ratio is right or whether one component is under-represented. Per-component data is what a real analytical lab reports.",
  ],
  [
    "No stated blend ratio",
    "The labeled ratio (commonly 2 mg CJC-1295 : 2 mg Ipamorelin per vial) and content that matches it.",
    "Without a declared ratio there is nothing to verify the fill against. The ratio printed on the lot documentation should be reproducible from the analytical content, not just the label art.",
  ],
  [
    "No lot number tying the COA to the vial",
    "A lot / batch code on the certificate that matches the code on the physical vial you receive.",
    "A generic or stock COA reused across batches proves nothing about your unit. Lot-matched documentation is the only way the paperwork describes the reagent actually in your hand.",
  ],
  [
    "Identity by HPLC only, no mass spec",
    "Mass-spec (MS) identity confirming the molecular weight of each component alongside HPLC purity.",
    "HPLC shows how clean a peak is; it does not by itself prove the peak is the molecule claimed. Mass-spec confirms identity. For a DAC/no-DAC question especially, the measured mass is the decisive evidence.",
  ],
];

const CARDS = [
  {
    icon: FlaskConical,
    title: "DAC vs no-DAC is an identity question, not a branding one",
    body: "CJC-1295 with DAC and CJC-1295 without DAC (Mod-GRF 1-29) are distinct molecules with distinct masses. A certificate that resolves the question states which one it characterized and reports a mass-spec weight to match. If the document is vague on DAC status, the analytical work behind it is incomplete.",
    href: "/cjc-1295-ipamorelin-research-guide/?ref=cjc-coa",
    cta: "CJC-1295 + Ipamorelin guide",
  },
  {
    icon: Scale,
    title: "A blend needs the ratio shown, not just asserted",
    body: "The selling point of a CJC-1295 + Ipamorelin blend is the ratio. That means the COA should let you see two components and a balance close to the labeled split. One merged purity figure hides exactly the variable a buyer is paying to verify. Treat per-component data as the standard, not a bonus.",
    href: "/cjc-1295-vs-ipamorelin/?ref=cjc-coa",
    cta: "CJC-1295 vs Ipamorelin",
  },
  {
    icon: ScanLine,
    title: "Mass spec answers what HPLC cannot",
    body: "HPLC purity and mass-spec identity do different jobs. Purity tells you how clean the main peak is; mass tells you what the peak actually is. For a two-peptide blend with a DAC ambiguity on one component, the measured molecular weights are the part of the certificate that settles identity.",
    href: "/how-to-verify-peptide-quality-coa/?ref=cjc-coa",
    cta: "How to verify a COA",
  },
  {
    icon: FileSearch,
    title: "Crypto checkout makes the document the buyer protection",
    body: "With crypto payment there is no chargeback to fall back on, so lot-matched analytical documentation is the protection. A COA whose lot number matches the vial, names both components, and reports HPLC plus MS is what stands in for a refund window. No matching paperwork, no verification.",
    href: "/coa-verified-peptide-supplier/?ref=cjc-coa",
    cta: "COA-verified supplier",
  },
];

const FAQS = [
  {
    q: "What is the difference between CJC-1295 with DAC and without DAC on a COA?",
    a: "They are two different research peptides. CJC-1295 with DAC carries a drug-affinity-complex group; CJC-1295 without DAC is the shorter Mod-GRF (1-29) sequence. They have different molecular weights, so a certificate of analysis should state which form was characterized and report a mass-spec target weight that matches it. A COA that only says “CJC-1295” has not actually identified which molecule is present. This is analytical identity information, not human-use guidance — Titan supplies these strictly as research reagents.",
  },
  {
    q: "Why should a CJC-1295 + Ipamorelin blend show two separate purity results?",
    a: "Because a blend contains two distinct compounds. A single combined purity figure cannot demonstrate that both components are present, that each is clean, or that the ratio matches the label. A thorough certificate reports identity and purity for CJC-1295 and for Ipamorelin separately — ideally an HPLC trace where both peaks are resolved — so the declared blend ratio can be checked against the analytical content.",
  },
  {
    q: "What blend ratio should a CJC-1295 + Ipamorelin COA reference?",
    a: "Blends are commonly labeled as an equal split, such as 2 mg CJC-1295 and 2 mg Ipamorelin per vial, though the exact figures belong to the specific lot documentation. The point is that a ratio should be stated and should be consistent with the analytical content rather than asserted only on the label. Without a declared ratio there is nothing concrete to verify the fill against.",
  },
  {
    q: "How do I know a COA actually belongs to my vial?",
    a: "Match the lot or batch number on the certificate to the code printed on the physical vial. A certificate that lists a lot identical to your vial describes the material you received; a generic or stock COA reused across batches does not. Lot-matched documentation, tied to HPLC purity and mass-spec identity, is the core of meaningful verification for any research peptide.",
  },
  {
    q: "Is HPLC enough on its own to confirm a CJC-1295 + Ipamorelin blend?",
    a: "HPLC and mass spectrometry do complementary jobs. HPLC shows how pure a peak is, but it does not by itself prove the peak is the claimed molecule. Mass-spec confirms identity by measured molecular weight, which is especially important for resolving the DAC versus no-DAC question on CJC-1295. A certificate with both HPLC purity and MS identity for each component is the stronger document.",
  },
  {
    q: "Are these COA notes human-use or dosing instructions?",
    a: "No. Titan Peptide Lab's peptides are supplied strictly for in-vitro laboratory research. Everything on this page describes how to read analytical documentation for a research reagent — identity, purity, ratio, and lot traceability. None of it is therapeutic, dosing, or administration guidance, and the compounds are not for human or animal consumption.",
  },
];

export default function Cjc1295IpamorelinCoaRedFlagsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "CJC-1295 + Ipamorelin COA Red Flags", item: "/cjc-1295-ipamorelin-coa-red-flags/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                CJC-1295 + Ipamorelin · COA literacy · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.5rem,5.6vw,5rem)] leading-[0.96] tracking-[-0.05em] text-[#0f1613] text-balance">
                The COA red flags on a CJC-1295 + Ipamorelin blend.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                A blend certificate has more ways to fall short than a single-compound one: the DAC versus no-DAC ambiguity on CJC-1295, the ratio between two peptides, and whether each component was actually identified. This page is a reading guide — what a thorough analytical document shows, and the gaps that should make a research buyer pause — strictly as reagent-verification literacy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/where-to-buy-cjc-1295-ipamorelin/?ref=cjc-coa-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  Where to buy CJC-1295 + Ipamorelin
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-to-verify-peptide-quality-coa/?ref=cjc-coa-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  How to verify a COA
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
              Reading the certificate
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Five gaps that mean the document hasn&apos;t proven what it claims.
            </h2>
            <div className="mt-9 overflow-hidden rounded-[1.5rem] border border-[#dde6e1]">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#f4f7f5] text-[11px] uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4 font-semibold">Red flag</th>
                    <th className="px-5 py-4 font-semibold">What to check instead</th>
                    <th className="px-5 py-4 font-semibold">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {REDFLAG_TABLE.map(([flag, check, why]) => (
                    <tr key={flag} className="border-t border-[#e7ede9] align-top">
                      <td className="px-5 py-5 font-serif text-[1.1rem] tracking-[-0.01em]">{flag}</td>
                      <td className="px-5 py-5 text-[#5c6762]">{check}</td>
                      <td className="px-5 py-5 text-[#5c6762]">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[12px] leading-6 text-[#8a9690]">
              These notes describe how to read analytical documentation for a synthesized research reagent. They are not a use, effect, or administration claim. Always follow the documentation supplied with a specific lot. All compounds are research-use-only.
            </p>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {CARDS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link key={title} href={href} className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.4rem] leading-tight tracking-[-0.02em] group-hover:text-[#1e6f58]">
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Related CJC-1295 + Ipamorelin reading</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Verify the blend, then open the product.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/cjc-1295-ipamorelin-research-guide/?ref=cjc-coa">CJC-1295 + Ipamorelin research guide →</Link></li>
              <li><Link className="hover:underline" href="/cjc-1295-vs-ipamorelin/?ref=cjc-coa">CJC-1295 vs Ipamorelin (how they differ) →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-cjc-1295-ipamorelin/?ref=cjc-coa">Where to buy CJC-1295 + Ipamorelin →</Link></li>
              <li><Link className="hover:underline" href="/buy-cjc-1295-ipamorelin-with-crypto/?ref=cjc-coa">Buy CJC-1295 + Ipamorelin with crypto →</Link></li>
              <li><Link className="hover:underline" href="/how-to-verify-peptide-quality-coa/?ref=cjc-coa">How to verify a peptide quality COA →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=cjc-coa">COA-verified peptide supplier →</Link></li>
              <li><Link className="hover:underline" href="/ipamorelin-vs-sermorelin/?ref=cjc-coa">Ipamorelin vs Sermorelin →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Sourcing a CJC-1295 + Ipamorelin blend?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for current pricing and lot documentation, or read the crypto checkout walkthrough first.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/where-to-buy-cjc-1295-ipamorelin/?ref=cjc-coa-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                CJC-1295 + Ipamorelin
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-to-pay-with-crypto/?ref=cjc-coa-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
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
