import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/lib/products";
import {
  RECONSTITUTION_COMPOUNDS,
  getCompound,
  resolveCompoundLinks,
  type ReconstitutionCompound,
} from "@/lib/reconstitution-compounds";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import {
  BlogDisclaimer,
  BlogSection,
  Highlight,
} from "@/components/blog/blog-layout";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/site/json-ld";
import { ReconstitutionCalculator } from "@/components/site/reconstitution-calculator";

export function generateStaticParams() {
  return RECONSTITUTION_COMPOUNDS.map((c) => ({ slug: c.slug }));
}

// Number helpers so the prose example math always matches the calculator preset.
function fmt(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/\.?0+$/, "");
}

function presetMath(c: ReconstitutionCompound) {
  const mgPerMl = c.typicalVialMg / c.typicalBacWaterMl;
  const mcgPerMl = mgPerMl * 1000;
  const drawMl = c.typicalAliquotMcg / mcgPerMl;
  const units = drawMl * 100;
  const aliquots = (c.typicalVialMg * 1000) / c.typicalAliquotMcg;
  return { mgPerMl, mcgPerMl, drawMl, units, aliquots };
}

function buildFaqs(c: ReconstitutionCompound) {
  const m = presetMath(c);
  return [
    {
      q: `How much bacteriostatic water should I add to a ${c.typicalVialMg} mg ${c.name} vial?`,
      a: `There is no single correct volume — the water only sets the concentration, not the amount of ${c.name} in the vial. A common research choice for a ${c.typicalVialMg} mg vial is ${fmt(c.typicalBacWaterMl)} mL of bacteriostatic water, which gives ${fmt(m.mgPerMl)} mg/mL (${fmt(m.mcgPerMl)} mcg/mL). Adding less water concentrates the solution; adding more dilutes it and makes small aliquots easier to measure. Use the calculator above to model any volume.`,
    },
    {
      q: `What concentration does a ${c.typicalVialMg} mg ${c.name} vial reconstitute to?`,
      a: `Concentration (mg/mL) equals vial milligrams divided by millilitres of water. A ${c.typicalVialMg} mg vial in ${fmt(c.typicalBacWaterMl)} mL of bacteriostatic water is ${fmt(m.mgPerMl)} mg/mL, or ${fmt(m.mcgPerMl)} mcg/mL. The calculator converts both automatically.`,
    },
    {
      q: `How do I convert a microgram target into insulin-syringe units for ${c.name}?`,
      a: `Divide the per-aliquot microgram figure by the concentration in mcg/mL to get the volume in mL, then multiply by 100 for U-100 syringe units. At ${fmt(m.mcgPerMl)} mcg/mL, a ${fmt(c.typicalAliquotMcg)} mcg aliquot is ${fmt(m.drawMl)} mL — about ${fmt(m.units)} units on a U-100 insulin syringe.`,
    },
    {
      q: `How should reconstituted ${c.name} be stored?`,
      a: `Lyophilized ${c.name} is generally kept frozen or refrigerated before reconstitution. Once mixed with bacteriostatic water (which contains ~0.9% benzyl alcohol to inhibit bacterial growth) a research vial is typically refrigerated and protected from light. Follow your lot's release documentation and standard cold-chain handling for your facility.`,
    },
    {
      q: `Is this ${c.name} reconstitution page medical or dosing advice?`,
      a: `No. This is concentration math for laboratory research preparation only. ${c.name} and all Titan Peptide Lab products are supplied strictly for in-vitro research and are not intended for human or animal consumption, diagnosis, treatment, or prevention of any condition.`,
    },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompound(slug);
  if (!c) return {};
  const title = `${c.name} Reconstitution Calculator & Guide | Titan Peptide Lab`;
  const description = `${c.name} reconstitution calculator: enter your vial size and bacteriostatic water to get concentration (mg/mL, mcg/mL), volume per aliquot, and U-100 syringe units. Research-preparation math only — RUO.`;
  const url = `https://${BRAND.domain}/reconstitution/${c.slug}/`;
  return {
    title,
    description,
    keywords: [
      `${c.name} reconstitution`,
      `${c.name} reconstitution calculator`,
      `how much bacteriostatic water for ${c.name}`,
      `${c.name} concentration calculator`,
      ...c.aliases.map((a) => `${a} reconstitution`),
    ],
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    robots: { index: true, follow: true },
  };
}

export default async function ReconstitutionCompoundPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCompound(slug);
  if (!c) notFound();

  const m = presetMath(c);
  const faqs = buildFaqs(c);
  const links = resolveCompoundLinks(c);
  const url = `/reconstitution/${c.slug}/`;

  return (
    <>
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", item: "/" },
            { name: "Reconstitution guides", item: "/reconstitution/" },
            { name: `${c.name} reconstitution`, item: url },
          ]}
        />
        <FAQJsonLd faqs={faqs} />

        <article className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:pt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
            {c.className} · Research prep
          </p>
          <h1 className="mt-3 font-serif text-[2.5rem] leading-[1.03] tracking-[-0.03em] text-[#13211c] sm:text-[3rem]">
            {c.name} reconstitution calculator &amp; guide
          </h1>
          <p className="mt-4 max-w-[62ch] text-[1.05rem] leading-8 text-[#3f4a45]">
            {c.blurb} Reconstituting it is a concentration problem, not a guess.
            Enter the vial size and the bacteriostatic water you plan to add
            below and the tool returns the exact mg/mL, mcg/mL, volume per
            aliquot, and U-100 syringe units for your {c.name} research prep.
          </p>

          <div className="mt-9">
            <ReconstitutionCalculator
              initialMgPerVial={c.typicalVialMg}
              initialBacWaterMl={c.typicalBacWaterMl}
              initialDoseMcg={c.typicalAliquotMcg}
            />
          </div>

          <div className="prose-none mt-12 space-y-10">
            <BlogSection
              id="worked-example"
              title={`Worked example — a ${c.typicalVialMg} mg ${c.name} vial`}
            >
              <p>
                Take a <Highlight>{c.typicalVialMg} mg</Highlight> lyophilized{" "}
                {c.name} vial reconstituted with{" "}
                <Highlight>{fmt(c.typicalBacWaterMl)} mL</Highlight> of
                bacteriostatic water. Concentration = {c.typicalVialMg} ÷{" "}
                {fmt(c.typicalBacWaterMl)} = <Highlight>{fmt(m.mgPerMl)} mg/mL</Highlight>{" "}
                ({fmt(m.mcgPerMl)} mcg/mL). A {fmt(c.typicalAliquotMcg)} mcg
                research aliquot is {fmt(c.typicalAliquotMcg)} ÷ {fmt(m.mcgPerMl)}{" "}
                = <Highlight>{fmt(m.drawMl)} mL</Highlight>, which reads as about{" "}
                <Highlight>{fmt(m.units)} units</Highlight> on a U-100 insulin
                syringe. That vial yields roughly{" "}
                <Highlight>{fmt(m.aliquots)} aliquots</Highlight> of that size.
                Change any input in the calculator to model your own protocol —
                the math updates live.
              </p>
            </BlogSection>

            <BlogSection id="how-the-math-works" title="How the reconstitution math works">
              <p>
                The total {c.name} in a vial is fixed at manufacture. The{" "}
                <Highlight>bacteriostatic water</Highlight> you add only sets the{" "}
                <Highlight>concentration</Highlight>. Concentration (mg/mL) = vial
                milligrams ÷ millilitres of water; multiply by 1,000 for mcg/mL.
                Divide your per-aliquot microgram target by that mcg/mL figure to
                get the draw volume in millilitres, then multiply by 100 to read
                it as units on a U-100 insulin syringe (which shows 100 units per
                millilitre). The same arithmetic works for every compound — only
                the numbers change. The general-purpose{" "}
                <Link
                  className="text-[oklch(0.68_0.17_78)] hover:underline"
                  href="/peptide-reconstitution-calculator/?ref=reconstitution-compound"
                >
                  peptide reconstitution calculator
                </Link>{" "}
                covers any vial size.
              </p>
            </BlogSection>

            <BlogSection id="choosing-water" title="Choosing your water volume">
              <p>
                More dilute (more water) gives a larger, easier-to-measure draw
                and less rounding error on small aliquots; more concentrated
                (less water) means fewer total millilitres to store and a smaller
                draw. Most researchers pick a volume that lands their typical{" "}
                {c.name} aliquot in the readable middle of a U-100 syringe. The{" "}
                {fmt(c.typicalBacWaterMl)} mL shown above is a common starting
                point for a {c.typicalVialMg} mg vial, not a requirement.
              </p>
            </BlogSection>

            <BlogSection id="storage-and-purity" title="Storage and purity verification">
              <p>
                Keep lyophilized {c.name} frozen or refrigerated until use, and
                refrigerate the reconstituted vial protected from light. Before
                trusting any concentration figure, confirm the vial's stated mass
                against its lot documentation — read the{" "}
                <Link
                  className="text-[oklch(0.68_0.17_78)] hover:underline"
                  href="/blog/how-to-read-peptide-coa/?ref=reconstitution-compound"
                >
                  certificate of analysis guide
                </Link>{" "}
                and the{" "}
                <Link
                  className="text-[oklch(0.68_0.17_78)] hover:underline"
                  href="/blog/peptide-storage-guide/?ref=reconstitution-compound"
                >
                  peptide storage guide
                </Link>
                . Every Titan lot ships with an in-house HPLC release sheet so the
                milligram figure you put into the calculator is the documented
                one.
              </p>
            </BlogSection>

            <BlogSection id="related" title={`Related ${c.name} resources`}>
              <ul className="list-disc space-y-2 pl-5 text-[#3f4a45]">
                {links.product && (
                  <li>
                    <Link
                      className="text-[oklch(0.68_0.17_78)] hover:underline"
                      href={`/products/${links.product.slug}/?ref=reconstitution-compound`}
                    >
                      {links.product.name} — lot-documented research vial
                    </Link>
                  </li>
                )}
                {links.research && (
                  <li>
                    <Link
                      className="text-[oklch(0.68_0.17_78)] hover:underline"
                      href={`/research/${links.research}/?ref=reconstitution-compound`}
                    >
                      {c.name} research literature review
                    </Link>
                  </li>
                )}
                {links.blog && (
                  <li>
                    <Link
                      className="text-[oklch(0.68_0.17_78)] hover:underline"
                      href={`/blog/${links.blog}/?ref=reconstitution-compound`}
                    >
                      {c.name} research guide
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    className="text-[oklch(0.68_0.17_78)] hover:underline"
                    href="/reconstitution/?ref=reconstitution-compound"
                  >
                    All peptide reconstitution guides
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[oklch(0.68_0.17_78)] hover:underline"
                    href="/products/?ref=reconstitution-compound"
                  >
                    Browse the full research-peptide catalog
                  </Link>
                </li>
              </ul>
            </BlogSection>

            <BlogSection id="faq" title="Frequently asked questions">
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <p className="font-semibold text-[#13211c]">{f.q}</p>
                    <p className="mt-1 text-[#3f4a45]">{f.a}</p>
                  </div>
                ))}
              </div>
            </BlogSection>

            <BlogDisclaimer />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
