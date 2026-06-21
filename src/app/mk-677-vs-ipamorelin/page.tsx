import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GitCompareArrows, Pill, Syringe, FileSearch } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CompareMesh } from "@/components/site/compare-mesh";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "MK-677 vs Ipamorelin | Oral Secretagogue vs GHRP (Research) | Titan Peptide Lab";
const DESCRIPTION =
  "MK-677 (ibutamoren) vs ipamorelin for research: an orally active non-peptide ghrelin-receptor agonist vs a selective injectable GHRP, plus how the CJC-1295 + Ipamorelin blend fits. Titan stocks the CJC-1295/Ipamorelin blend, not MK-677. Research use only, not for human use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/mk-677-vs-ipamorelin/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/mk-677-vs-ipamorelin/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const POINTS = [
  {
    icon: Pill,
    title: "MK-677: an oral non-peptide",
    body: "MK-677 (ibutamoren) is not a peptide at all — it's an orally active, non-peptide ghrelin-receptor agonist. In research models it's studied for its long half-life and the convenience of oral dosing, which sets it apart from injectable secretagogues. Because it isn't a peptide, it's handled and supplied differently. Titan does not stock MK-677; its growth-axis offering is the CJC-1295 + Ipamorelin peptide blend.",
    href: "/where-to-buy-cjc-1295-ipamorelin/?ref=mk677-vs-ipa",
    cta: "What Titan stocks",
  },
  {
    icon: Syringe,
    title: "Ipamorelin: a selective GHRP",
    body: "Ipamorelin is a small peptide — a growth-hormone-releasing peptide (GHRP) — known in the literature for its selectivity, with relatively little effect on cortisol or prolactin compared with older GHRPs. It has a short half-life and is supplied as a lyophilized peptide for reconstitution. It's frequently studied alongside a GHRH analog such as CJC-1295, which is why the two are commonly paired.",
    href: "/cjc-1295-vs-ipamorelin/?ref=mk677-vs-ipa",
    cta: "CJC-1295 vs Ipamorelin",
  },
  {
    icon: GitCompareArrows,
    title: "Why the CJC-1295 + Ipamorelin pairing",
    body: "Ipamorelin (a GHRP) and CJC-1295 (a GHRH analog) act on two different pathways of the same axis, which is why research protocols often study them together as a blend rather than ipamorelin alone. MK-677 covers the ghrelin-receptor pathway by itself orally. Titan supplies the CJC-1295 + Ipamorelin blend so the peptide pairing arrives matched in one vial.",
    href: "/products/cjc-1295-ipamorelin/?ref=mk677-vs-ipa",
    cta: "View the blend",
  },
  {
    icon: FileSearch,
    title: "What to verify before buying",
    body: "Whether the target is an oral compound or an injectable peptide, the screen is the same: a lot-matched certificate of analysis tied to the exact vial code, an HPLC purity target, and a mass-spec identity confirmation, plus visible checkout and shipping terms. A polished product grid proves nothing on its own — the paperwork does.",
    href: "/coa-verified-peptide-supplier/?ref=mk677-vs-ipa",
    cta: "How to verify a COA",
  },
];

const FAQS = [
  {
    q: "What is the difference between MK-677 and ipamorelin?",
    a: "MK-677 (ibutamoren) is an orally active, non-peptide ghrelin-receptor agonist with a long half-life. Ipamorelin is a small injectable peptide — a selective growth-hormone-releasing peptide (GHRP) — with a short half-life, noted in research for limited effect on cortisol and prolactin. The headline differences are molecule type (non-peptide vs peptide), route (oral vs reconstituted injectable), and duration. Both are studied on the growth-hormone axis but through related, not identical, mechanisms. Research use only.",
  },
  {
    q: "Does Titan Peptide Lab sell MK-677?",
    a: "No. Titan does not stock MK-677 (ibutamoren). Its growth-hormone-axis research offering is the CJC-1295 + Ipamorelin peptide blend, supplied as a lyophilized powder for in-vitro laboratory research. We state this plainly rather than redirecting an MK-677 search to a different compound. If your protocol specifically requires an orally active ghrelin-receptor agonist, MK-677 is a distinct non-peptide molecule that Titan does not carry.",
  },
  {
    q: "Is MK-677 a peptide?",
    a: "No. Despite often being grouped with research peptides, MK-677 (ibutamoren) is a non-peptide small molecule that acts as a ghrelin-receptor agonist. Ipamorelin, by contrast, is an actual peptide (a GHRP). That structural difference is why the two are handled, supplied, and studied differently — and why MK-677 is taken orally in research models while ipamorelin is reconstituted from lyophilized powder.",
  },
  {
    q: "Why is ipamorelin usually paired with CJC-1295?",
    a: "Ipamorelin is a GHRP and CJC-1295 is a GHRH analog, so they act on two complementary pathways of the growth-hormone axis rather than the same one. Research protocols frequently study them together for that reason, which is why suppliers commonly offer a combined CJC-1295 + Ipamorelin blend. Titan stocks exactly that blend so the pairing arrives matched in a single vial with one lot-matched certificate of analysis.",
  },
  {
    q: "Are MK-677 and ipamorelin approved for human use?",
    a: "No. Research-grade MK-677 and ipamorelin sold as reagents are not approved by the FDA or any regulator for human use and are not commercial medicines. They are supplied strictly as research-use-only material for in-vitro laboratory work — not for human or animal consumption, diagnostic, therapeutic, or preventative use. Titan supplies the CJC-1295 + Ipamorelin blend on exactly those terms and makes no human-use or efficacy claims.",
  },
  {
    q: "How do I buy growth-hormone-axis research peptides safely?",
    a: "Buy from a supplier that separates laboratory research use from human use, exposes a lot-matched certificate of analysis tied to the vial code, states an HPLC purity target with mass-spec identity confirmation, and shows checkout and shipping terms before you pay. Titan supplies the research-use CJC-1295 + Ipamorelin blend with lot-matched documentation and crypto-only checkout (BTC, USDC, SOL), confirmed on-chain before dispatch. Everything is for in-vitro research, not human use.",
  },
];

export default function Mk677VsIpamorelinPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "MK-677 vs Ipamorelin", item: "/mk-677-vs-ipamorelin/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Growth-hormone axis · research use only
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                MK-677 vs ipamorelin: oral non-peptide or injectable GHRP.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                These two get compared constantly, but they aren&apos;t the same kind of molecule. MK-677 (ibutamoren) is an orally active, non-peptide ghrelin-receptor agonist with a long half-life. Ipamorelin is a small injectable peptide — a selective GHRP with a short half-life. We&apos;ll be direct: Titan does not stock MK-677. Its growth-axis offering is the CJC-1295 + Ipamorelin peptide blend, since ipamorelin is usually paired with a GHRH analog in research. Here&apos;s how the two compounds actually differ. Research use only.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/cjc-1295-ipamorelin/?ref=mk677-vs-ipa-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  View CJC-1295 + Ipamorelin
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/cjc-1295-vs-ipamorelin/?ref=mk677-vs-ipa-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  CJC-1295 vs Ipamorelin
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {POINTS.map(({ icon: Icon, title, body, href, cta }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#1e6f58] hover:shadow-[0_18px_60px_-42px_rgb(15_22_19/45%)]"
                >
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

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                Side by side
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                Different molecules, related axis.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                Both compounds are studied on the growth-hormone axis, but they reach it differently. MK-677 is a non-peptide that activates the ghrelin receptor and stays active for a long window with oral dosing in research models. Ipamorelin is a peptide GHRP that works selectively and clears quickly, which is why it&apos;s commonly studied with a longer-acting GHRH analog like CJC-1295. The choice in a protocol comes down to molecule type, route, and duration — not a simple ranking. Titan supplies the matched CJC-1295 + Ipamorelin peptide blend and does not carry MK-677.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["MK-677 (ibutamoren)", "Non-peptide ghrelin-receptor agonist; oral; long half-life. Not stocked."],
                ["Ipamorelin", "Selective peptide GHRP; reconstituted; short half-life."],
                ["Common pairing", "Ipamorelin + CJC-1295 (a GHRH analog) — the blend Titan stocks."],
                ["Format", "Lyophilized powder; reconstitute before in-vitro use."],
              ].map(([term, desc]) => (
                <div key={term} className="rounded-[1.25rem] border border-[#dde6e1] bg-white p-5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">{term}</dt>
                  <dd className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Related reading</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Keep comparing.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/cjc-1295-vs-ipamorelin/?ref=mk677-vs-ipa">CJC-1295 vs Ipamorelin →</Link></li>
              <li><Link className="hover:underline" href="/ipamorelin-vs-sermorelin/?ref=mk677-vs-ipa">Ipamorelin vs Sermorelin →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-cjc-1295-ipamorelin/?ref=mk677-vs-ipa">Where to buy CJC-1295 + Ipamorelin →</Link></li>
              <li><Link className="hover:underline" href="/cjc-1295-ipamorelin-research-guide/?ref=mk677-vs-ipa">CJC-1295 + Ipamorelin research guide →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=mk677-vs-ipa">COA-verified peptide supplier →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Sourcing a growth-axis research peptide?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the CJC-1295 + Ipamorelin product page for pricing, vial size, and lot documentation — or read the CJC-1295 vs Ipamorelin breakdown first to confirm the pairing your protocol needs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/cjc-1295-ipamorelin/?ref=mk677-vs-ipa-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                CJC-1295 + Ipamorelin
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=mk677-vs-ipa-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Start here
              </Link>
            </div>
          </div>
        </section>
        <CompareMesh current="mk-677-vs-ipamorelin" />
      </main>
      <Footer />
    </>
  );
}
