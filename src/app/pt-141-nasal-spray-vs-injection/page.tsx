import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileSearch, FlaskConical, GitMerge, ShieldCheck, TriangleAlert } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { CompareMesh } from "@/components/site/compare-mesh";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";
import { AeoFaqSection, AeoHero, AeoRelatedLinks, AeoRuBoundary } from "@/components/site/aeo-page";

const TITLE = "PT-141 Nasal Spray vs Injection: Research Route Comparison | Titan Peptide Lab";
const DESCRIPTION =
  "Compare PT-141 nasal spray and injection from a research documentation angle: route variability, formulation checks, COA review, and RUO supplier due diligence.";
const URL = "/pt-141-nasal-spray-vs-injection/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "article" },
  robots: { index: true, follow: true },
};

const ROUTE_ROWS = [
  ["What is being compared?", "Formulated nasal route and delivery format", "Subcutaneous route reference and injection format", "Compare route and formulation facts, not human outcomes."],
  ["What can vary?", "Spray concentration, actuator output, mucosal-route variables, and opened-container handling", "Concentration, sterility expectations, vial or device format, and route-specific documentation", "Require lot-specific documentation either way."],
  ["What source proof matters?", "Batch COA, formulation notes, container and storage expectations", "Batch COA, identity or purity method, and format-specific handling notes", "A route label is not proof of identity, purity, or sterility."],
  ["What should not be claimed?", "Faster or better effects, dosing, treatment, sexual-health promises", "Stronger or better effects, dosing, treatment, sexual-health promises", "Keep the review educational and research-use-only."],
];

const REVIEW_POINTS = [
  {
    icon: GitMerge,
    title: "Start with route, not outcome language",
    body: "PT-141 route comparisons should ask what format is being presented, how that route is documented, and which variables can change the research review. A route label does not prove purity, identity, sterility, or suitability.",
  },
  {
    icon: FlaskConical,
    title: "Separate drug references from RUO products",
    body: "Subcutaneous bremelanotide has an approved drug reference product. A research peptide listing is not that product unless it is the approved product, and Titan does not provide human-use, dosing, or treatment guidance.",
  },
  {
    icon: FileSearch,
    title: "Match the route to the paperwork",
    body: "Check the product format, concentration statement, lot or batch record, COA source, method context, storage expectations, and whether the supplier avoids unsupported route-performance claims.",
  },
  {
    icon: ShieldCheck,
    title: "Use the same supplier screen",
    body: "Nasal or injectable format, the supplier still has to expose a clean RUO boundary, visible documentation, support path, shipping terms, and a checkout flow that does not ask buyers to trust a vague product grid.",
  },
];

const DOES_NOT_PROVE = [
  "A nasal route does not prove higher absorption, purity, stability, sterility, or a human outcome.",
  "An injectable route does not prove pharmaceutical-grade status unless the product is actually the approved drug product.",
  "A COA does not verify the route by itself; it verifies the tested sample details shown on that report.",
  "A route comparison is not dosing, administration, treatment, safety, or medical guidance.",
];

const FAQS = [
  {
    q: "Is PT-141 nasal spray the same as PT-141 injection?",
    a: "They can refer to the same peptide compound, but the route, formulation, container, and documentation expectations are different. For RUO sourcing, compare the format and batch documentation rather than assuming the same behavior.",
  },
  {
    q: "Does a nasal spray route prove better absorption or results?",
    a: "No. A route claim does not prove purity, identity, stability, sterility, or any human outcome. It only tells you which formulation route the supplier is presenting.",
  },
  {
    q: "Does an injectable route prove the product is pharmaceutical-grade?",
    a: "No. Subcutaneous bremelanotide has an FDA-approved drug reference, but a research peptide product should not be treated as that drug unless it is the approved product. RUO products still need lot-specific documentation and compliant boundaries.",
  },
  {
    q: "What should researchers check before comparing PT-141 formats?",
    a: "Check compound identity, batch or lot match, COA source route, HPLC or identity-method context, storage expectations, and whether the supplier avoids dosing, treatment, or human-use claims.",
  },
  {
    q: "Is this page dosing or medical advice?",
    a: "No. This page is for research-use-only sourcing literacy and supplier due diligence. It does not provide medical, dosing, treatment, administration, or human-use guidance.",
  },
];

export default function Pt141NasalSprayVsInjectionPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "PT-141 nasal spray vs injection", item: URL },
        ]}
      />
      <FAQJsonLd faqs={FAQS} />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <AeoHero
          eyebrow="PT-141 route comparison · RUO supplier due diligence"
          title="PT-141 nasal spray vs injection: compare the research route, not the hype."
          answer="PT-141 nasal spray and injection comparisons should start with route and documentation, not outcome promises. For research-use-only sourcing, compare formulation format, route variability, batch documentation, storage expectations, and whether the supplier makes unsupported dosing or human-use claims."
          primary={{ href: "/products/pt-141-nasal-spray/?ref=pt141-route-hero", label: "View PT-141 nasal spray" }}
          secondary={{ href: "/blog/pt-141-nasal-spray-research-guide/?ref=pt141-route-hero", label: "Read the PT-141 research guide" }}
        />

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {REVIEW_POINTS.map(({ icon: Icon, title, body }) => (
                <article key={title} className="rounded-[1.5rem] border border-[#dde6e1] bg-white p-6 shadow-[0_18px_50px_-44px_rgb(15_22_19/40%)]">
                  <Icon className="h-5 w-5 text-[#1e6f58]" />
                  <h2 className="mt-5 font-serif text-[1.42rem] leading-tight tracking-[-0.02em]">{title}</h2>
                  <p className="mt-3 text-[13.5px] leading-7 text-[#5c6762]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">Quick comparison</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
                The route changes the review questions.
              </h2>
              <p className="mt-5 text-[14px] leading-8 text-[#5c6762]">
                A useful comparison keeps the page grounded in format, route variables, and source paperwork. It does not turn route history into dosing or treatment language.
              </p>
              <Link className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]" href="/where-to-buy-pt-141-nasal-spray/?ref=pt141-route-table">
                Source-check PT-141 before checkout
              </Link>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-[#dde6e1] bg-white">
              <table className="w-full border-collapse text-left text-[13.5px]">
                <thead>
                  <tr className="bg-[#f4f7f5] text-[11px] uppercase tracking-[0.12em] text-[#1e6f58]">
                    <th className="px-5 py-4 font-semibold">Review question</th>
                    <th className="px-5 py-4 font-semibold">Nasal spray angle</th>
                    <th className="px-5 py-4 font-semibold">Injection angle</th>
                    <th className="px-5 py-4 font-semibold">RUO-safe takeaway</th>
                  </tr>
                </thead>
                <tbody>
                  {ROUTE_ROWS.map(([question, nasal, injection, takeaway]) => (
                    <tr key={question} className="border-t border-[#e7ede9] align-top">
                      <td className="px-5 py-5 font-serif text-[1.04rem] tracking-[-0.01em]">{question}</td>
                      <td className="px-5 py-5 leading-7 text-[#5c6762]">{nasal}</td>
                      <td className="px-5 py-5 leading-7 text-[#5c6762]">{injection}</td>
                      <td className="px-5 py-5 leading-7 text-[#5c6762]">{takeaway}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">What the route does not prove</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Route language is not a shortcut around source checks.
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {DOES_NOT_PROVE.map((item) => (
                <li key={item} className="flex gap-3 rounded-[1.25rem] border border-[#dde6e1] bg-[#fbfcfb] p-5 text-[13.5px] leading-7 text-[#5c6762]">
                  <TriangleAlert className="mt-1 h-4 w-4 shrink-0 text-[#1e6f58]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-[1.25rem] border border-[#dde6e1] bg-white p-6 text-[13.5px] leading-7 text-[#5c6762]">
              Titan-specific boundary: Titan supplies PT-141 as a research-use nasal spray. This route-comparison page does not imply Titan sells an injectable PT-141 product, an approved drug product, or any human-use protocol.
            </p>
          </div>
        </section>

        <AeoFaqSection faqs={FAQS} />
        <AeoRelatedLinks
          title="Continue the PT-141 source-check path."
          links={[
            { href: "/products/pt-141-nasal-spray/?ref=pt141-route-related", label: "PT-141 nasal spray research product", blurb: "Open Titan's research-use PT-141 nasal spray page." },
            { href: "/blog/pt-141-nasal-spray-research-guide/?ref=pt141-route-related", label: "PT-141 nasal spray research guide", blurb: "Review melanocortin-pathway research context and sourcing checks." },
            { href: "/where-to-buy-pt-141-nasal-spray/?ref=pt141-route-related", label: "Where to buy PT-141 nasal spray for research", blurb: "Use the documentation-first buyer path before checkout." },
            { href: "/dsip-vs-pt-141-nasal-spray/?ref=pt141-route-related", label: "DSIP vs PT-141 nasal spray", blurb: "Separate PT-141 from unrelated intranasal peptide searches." },
            { href: "/lab-testing/?ref=pt141-route-related", label: "Titan lab-testing standard", blurb: "Review the lot-release documentation path." },
            { href: "/janoshik-coa-verification/?ref=pt141-route-related", label: "Janoshik COA verification source check", blurb: "Verify third-party report claims at the source." },
            { href: "/current-lot-coa-checklist-research-peptides/?ref=pt141-route-related", label: "Current-lot COA checklist", blurb: "Match documentation to the batch under review." },
            { href: "/how-to-pay-with-crypto/?ref=pt141-route-related", label: "Crypto checkout guide", blurb: "Review payment steps before sending crypto." },
          ]}
        />

        <section className="border-t border-[rgb(15_22_19/6%)] bg-[#fbfcfb] py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-[-0.035em]">
              Ready to review Titan&apos;s PT-141 format?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-8 text-[#5c6762]">
              Open the product page for current size, pricing, documentation links, and checkout. Use this page as route-comparison context, not as use instructions.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/products/pt-141-nasal-spray/?ref=pt141-route-bottom" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f1613] px-7 text-[13px] font-semibold text-white transition hover:bg-[#1e6f58]">
                PT-141 nasal spray
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/start/?ref=pt141-route-bottom" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgb(15_22_19/12%)] px-7 text-[13px] font-semibold text-[#0f1613] transition hover:border-[#0f1613]">
                Start here
              </Link>
            </div>
          </div>
        </section>

        <CompareMesh current="pt-141-nasal-spray-vs-injection" />
        <AeoRuBoundary />
      </main>
      <Footer />
    </>
  );
}
