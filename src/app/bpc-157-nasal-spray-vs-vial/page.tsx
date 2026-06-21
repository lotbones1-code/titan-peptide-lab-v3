import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Beaker, FileSearch, FlaskConical, Snowflake } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CompareMesh } from "@/components/site/compare-mesh";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";

const TITLE = "BPC-157 Nasal Spray vs Vial | Format Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "BPC-157 nasal spray vs lyophilized vial: a research-use comparison of the two formats Titan stocks — handling, reconstitution, storage, documentation, and how researchers pick one for a protocol.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/bpc-157-nasal-spray-vs-vial/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/bpc-157-nasal-spray-vs-vial/",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const ROWS = [
  ["Format", "Pre-mixed solution, ready to use", "Lyophilized powder, reconstitute before use"],
  ["Titan size", "15mL · 500mcg per actuation", "5mg lyophilized"],
  ["Handling friction", "Low — no reconstitution math", "Higher — requires bacteriostatic water + draw-up"],
  ["Dose granularity", "Fixed per actuation", "Researcher-defined at reconstitution"],
  ["Storage", "Refrigerate after opening", "Stable lyophilized; reconstituted solution refrigerated"],
  ["Best fit", "Protocols that need a fixed, low-friction format", "Protocols that need concentration control"],
  ["Documentation", "Lot-matched release sheet", "Lot-matched release sheet"],
];

const FORMAT_NOTES = [
  {
    icon: FlaskConical,
    title: "Nasal spray: lowest handling friction",
    body: "The spray ships as a pre-mixed solution at a fixed 500mcg/actuation, so there is no reconstitution step and no draw-up. For research designs that want a consistent, repeatable format with minimal prep, this is the simpler path.",
    href: "/products/bpc-157-nasal-spray/?ref=spray-vs-vial",
    cta: "View BPC-157 nasal spray",
  },
  {
    icon: Beaker,
    title: "Vial: concentration control",
    body: "The 5mg lyophilized vial lets the researcher set the working concentration at reconstitution. That flexibility is the reason vials remain standard for protocols that need a specific mg/mL the spray's fixed format can't match.",
    href: "/products/bpc-157-vial/?ref=spray-vs-vial",
    cta: "View BPC-157 vial",
  },
  {
    icon: Snowflake,
    title: "Storage & stability",
    body: "Lyophilized powder is the more shelf-stable starting state; once reconstituted, the vial follows the same refrigerated-solution handling as the spray. Plan storage around when the material is actually in solution.",
    href: "/peptide-reconstitution-calculator/?ref=spray-vs-vial",
    cta: "Reconstitution calculator",
  },
  {
    icon: FileSearch,
    title: "Same documentation, either way",
    body: "Both formats ship with a lot-matched in-house release sheet referenced to the lot code on the unit — identity and purity paperwork doesn't change with the format you pick.",
    href: "/lab-testing/?ref=spray-vs-vial",
    cta: "See testing workflow",
  },
];

const FAQS = [
  {
    q: "What is the difference between BPC-157 nasal spray and a vial?",
    a: "The nasal spray is a pre-mixed solution at a fixed concentration (Titan's is 15mL at 500mcg per actuation), so it is ready to use with no reconstitution. The vial is a lyophilized powder (Titan's is 5mg) that the researcher reconstitutes with bacteriostatic water to a working concentration of their choice. The spray trades concentration control for lower handling friction; the vial trades convenience for flexibility.",
  },
  {
    q: "Is BPC-157 nasal spray or vial better for research use?",
    a: "Neither is universally better — it depends on the protocol. A fixed-format, low-prep design favors the spray. A design that needs a specific mg/mL or larger total quantity favors the lyophilized vial. Both are sold strictly for in-vitro laboratory research and ship with the same lot-matched documentation.",
  },
  {
    q: "Does the format change the purity or documentation?",
    a: "No. Both the BPC-157 nasal spray and the BPC-157 vial ship with a lot-matched release sheet referenced to the lot code on the unit, against the same HPLC purity target and identity-confirmation workflow. The format affects handling, not the paper trail.",
  },
  {
    q: "How do I reconstitute the BPC-157 vial?",
    a: "Use the reconstitution calculator to set bacteriostatic water volume for your target working concentration. The calculator and the per-compound BPC-157 reconstitution guide walk through the concentration math; this is research-preparation information only, not dosing guidance.",
  },
  {
    q: "Are Titan BPC-157 products for human use?",
    a: "No. Titan Peptide Lab products — spray and vial alike — are sold strictly for in-vitro laboratory research. They are not for human or animal consumption, diagnostic, therapeutic, or preventative use.",
  },
];

export default function BpcSprayVsVialPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "BPC-157 Nasal Spray vs Vial", item: "/bpc-157-nasal-spray-vs-vial/" },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <section className="border-b border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
                BPC-157 format comparison · research use
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.65rem,6vw,5.4rem)] leading-[0.94] tracking-[-0.05em] text-[#0f1613] text-balance">
                BPC-157 nasal spray vs vial: pick the format, not the hype.
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#5c6762]">
                Titan stocks BPC-157 in both formats — a ready-to-use nasal spray and a lyophilized vial. They carry the same documentation and the same purity target; what differs is handling, concentration control, and prep. Here is the clean comparison so you can match the format to your research design.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products/bpc-157-nasal-spray/?ref=spray-vs-vial-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]"
                >
                  BPC-157 nasal spray
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/bpc-157-vial/?ref=spray-vs-vial-hero"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]"
                >
                  BPC-157 vial
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-[#dde6e1]">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#fafbfa] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4">Attribute</th>
                    <th className="px-5 py-4">Nasal spray</th>
                    <th className="px-5 py-4">Lyophilized vial</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(([attr, spray, vial]) => (
                    <tr key={attr} className="border-t border-[#eef2f0] align-top">
                      <td className="px-5 py-4 font-semibold text-[#0f1613]">{attr}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{spray}</td>
                      <td className="px-5 py-4 leading-7 text-[#5c6762]">{vial}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {FORMAT_NOTES.map(({ icon: Icon, title, body, href, cta }) => (
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
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.035em]">Go deeper before you choose.</h2>
            <ul className="mt-7 space-y-3 text-[14px] leading-7 text-[#1e6f58]">
              <li><Link className="hover:underline" href="/blog/bpc-157-nasal-spray-complete-guide/?ref=spray-vs-vial">BPC-157 nasal spray complete guide →</Link></li>
              <li><Link className="hover:underline" href="/tb-500-vs-bpc-157/?ref=spray-vs-vial">TB-500 vs BPC-157: how researchers compare them →</Link></li>
              <li><Link className="hover:underline" href="/where-to-buy-bpc-157-nasal-spray/?ref=spray-vs-vial">Where to buy BPC-157 nasal spray →</Link></li>
              <li><Link className="hover:underline" href="/coa-verified-peptide-supplier/?ref=spray-vs-vial">How to verify a peptide COA →</Link></li>
              <li><Link className="hover:underline" href="/peptide-supplier-checklist/?ref=spray-vs-vial">Research peptide supplier checklist →</Link></li>
            </ul>
          </div>
        </section>

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Know the format you need?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for the BPC-157 format that fits your protocol, or browse the full research catalog.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/?ref=spray-vs-vial-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                Browse catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=spray-vs-vial-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Start here
              </Link>
            </div>
          </div>
        </section>
        <CompareMesh current="bpc-157-nasal-spray-vs-vial" />
      </main>
      <Footer />
    </>
  );
}
