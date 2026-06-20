import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import {
  ArticleLayout,
  Section,
  Gold,
  PullNote,
  References,
  FAQ,
  Disclaimer,
} from "@/components/research/article-layout";

const TITLE = "Selank: heptapeptide anxiolytic, GABAergic modulation, and the Russian research tradition";
const DESCRIPTION =
  "Literature summary of Selank (TP-7), a synthetic analogue of tuftsin studied as an anxiolytic nootropic with GABAergic and immunomodulatory activity. Covers mechanism, published evidence, and intranasal research context.";
const URL = "/research/selank-anxiolytic-nootropic";
const UPDATED = "2026-04-16";

export const metadata: Metadata = {
  title: `${TITLE} — Titan Peptide Lab`,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "article",
  },
  robots: { index: true, follow: true },
};

const TOC = [
  { id: "introduction", label: "Introduction" },
  { id: "mechanism", label: "Mechanism of action" },
  { id: "published", label: "Published research summary" },
  { id: "intranasal", label: "Intranasal administration notes" },
  { id: "stack", label: "Stack compatibility" },
  { id: "faq", label: "Research questions" },
  { id: "references", label: "References" },
];

const REFS = [
  {
    n: 1,
    text: "Kozlovskaya MM, et al. Selank and short peptides of the tuftsin family in the regulation of adaptive behavior in stress. Neurosci Behav Physiol. 2003;33(9):853-60. PMID: 14969415.",
    href: "https://pubmed.ncbi.nlm.nih.gov/14969415/",
  },
  {
    n: 2,
    text: "Semenova TP, et al. Effects of selank on the behavior and monoamine content in the brain of rats. Eksp Klin Farmakol. 2007;70(2):11-4. PMID: 17523443.",
    href: "https://pubmed.ncbi.nlm.nih.gov/17523443/",
  },
  {
    n: 3,
    text: "Zozulia AA, et al. Efficacy and possible mechanisms of action of a new peptide anxiolytic selank in the therapy of generalized anxiety disorders and neurasthenia. Zh Nevrol Psikhiatr Im S S Korsakova. 2008;108(4):38-48. PMID: 18454096.",
    href: "https://pubmed.ncbi.nlm.nih.gov/18454096/",
  },
  {
    n: 4,
    text: "Volkova A, et al. Selank administration affects the expression of some genes involved in GABAergic neurotransmission. Front Pharmacol. 2016;7:31. PMID: 26941643.",
    href: "https://pubmed.ncbi.nlm.nih.gov/26941643/",
  },
  {
    n: 5,
    text: "Uchakina ON, et al. Immunomodulatory effects of selank in patients with anxiety-asthenic disorders. Zh Nevrol Psikhiatr Im S S Korsakova. 2008;108(5):71-5. PMID: 18577961.",
    href: "https://pubmed.ncbi.nlm.nih.gov/18577961/",
  },
  {
    n: 6,
    text: "Kolomin T, et al. Transcriptomic response of rat hippocampus to tuftsin-derived peptide selank. Dokl Biochem Biophys. 2010;430:28-31. PMID: 20440934.",
    href: "https://pubmed.ncbi.nlm.nih.gov/20440934/",
  },
  {
    n: 7,
    text: "Medvedev VE, et al. A comparative clinical study of selank in combination therapy in anxiety disorders. Zh Nevrol Psikhiatr Im S S Korsakova. 2015;115(6):33-40. PMID: 26356526.",
    href: "https://pubmed.ncbi.nlm.nih.gov/26356526/",
  },
];

export default function SelankPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: UPDATED,
    dateModified: UPDATED,
    author: { "@id": "https://www.titanpeptidelab.com/#organization", name: "Titan Peptide Lab" },
    publisher: { "@id": "https://www.titanpeptidelab.com/#organization", name: "Titan Peptide Lab" },
    mainEntityOfPage: `https://www.titanpeptidelab.com${URL}`,
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <main>
        <ArticleLayout
          breadcrumb={{ name: TITLE, path: URL }}
          eyebrow="Selank"
          title={
            <>
              Selank: heptapeptide anxiolytic,{" "}
              <em className="italic text-[oklch(0.68_0.17_78)]">
                GABAergic modulation,
              </em>{" "}
              and the Russian research tradition
            </>
          }
          lede="A synthetic analogue of the immunopeptide tuftsin, studied by the Institute of Molecular Genetics in Moscow for its anxiolytic profile without the sedation, cognitive impairment, or dependence liability of benzodiazepines."
          readingTime="11 min read"
          updated={UPDATED}
          toc={TOC}
        >
          <Section id="introduction" kicker="§01 — Introduction" title="A Soviet-era anxiolytic, revisited">
            <p>
              Selank, occasionally cataloged as <Gold>TP-7</Gold>, is a
              synthetic heptapeptide with the sequence{" "}
              <span className="font-mono text-[0.92em]">
                Thr-Lys-Pro-Arg-Pro-Gly-Pro
              </span>
              . It was developed at the Institute of Molecular Genetics
              of the Russian Academy of Sciences as a stabilized analogue
              of tuftsin — a natural tetrapeptide fragment of the
              immunoglobulin G heavy chain with known immunomodulatory
              and behavioral effects. Selank extends the tuftsin sequence
              with three additional residues (Pro-Gly-Pro), which confer
              dramatically improved enzymatic stability and allow
              clinically meaningful duration of action from a single
              intranasal dose.
            </p>
            <p>
              Unlike most peptide research compounds, Selank has an
              unusually developed clinical literature. It was approved
              for clinical use in Russia in 2009 for the treatment of
              generalized anxiety disorder and neurasthenia, following a
              comparative trial against medazepam [3]. This does not
              alter its research-use-only status in most jurisdictions,
              but it does provide an atypically rich human-subject
              literature compared to other compounds in its class.
            </p>
          </Section>

          <Section id="mechanism" kicker="§02 — Mechanism" title="Mechanism of action">
            <p>
              The central mechanistic finding for Selank is modulation of
              the <Gold>GABAergic system</Gold> without direct binding to
              the benzodiazepine site on the GABA-A receptor. Volkova and
              colleagues (2016) demonstrated that Selank administration
              altered the expression of a panel of GABA-related genes in
              rat hippocampus, including genes encoding GABA-A receptor
              subunits and GABA-metabolizing enzymes [4]. This
              transcriptional footprint is distinct from the
              acute-allosteric profile of benzodiazepines and provides a
              theoretical basis for the observation that Selank produces
              anxiolysis without sedation, ataxia, or withdrawal.
            </p>
            <p>
              A second mechanistic axis is monoaminergic. Semenova and
              colleagues reported that Selank administration affected
              serotonin and dopamine metabolism in rat brain regions
              associated with anxiety and reward — notably the
              hippocampus and the frontal cortex [2]. Kozlovskaya et al.
              described behavioral effects consistent with modulation of
              stress-adaptive systems in a series of open-field and
              conflict paradigms [1].
            </p>
            <p>
              A third, and sometimes overlooked, axis is{" "}
              <Gold>immunomodulation</Gold>. Because Selank is derived
              from tuftsin, it retains some immunological activity.
              Uchakina and colleagues reported altered cytokine profiles
              in patients with anxiety-asthenic disorders treated with
              Selank, with particular effects on interleukin-6 and
              interferon-γ balance [5]. This provides a speculative
              rationale for observations of improved subjective
              well-being that exceed what would be expected from pure
              anxiolysis.
            </p>
            <p>
              Transcriptomic profiling by Kolomin et al. identified
              hundreds of differentially expressed genes in the rat
              hippocampus following Selank administration, with
              particular enrichment in pathways related to synaptic
              transmission, inflammation, and protein metabolism [6].
            </p>
          </Section>

          <Section id="published" kicker="§03 — Evidence" title="Published research summary">
            <p>
              <strong className="text-stone-900">Preclinical behavior.</strong>{" "}
              In rodent models of anxiety — elevated plus maze, open
              field, conflict drinking — Selank produces anxiolytic
              effects comparable to reference benzodiazepines at the
              behavioral level, but without the locomotor suppression or
              muscle-relaxant effects typically seen with
              benzodiazepines [1, 2]. This dissociation between anxiolysis
              and sedation is a recurring theme in the preclinical
              literature.
            </p>
            <p>
              <strong className="text-stone-900">Human trials.</strong>{" "}
              Zozulia et al. (2008) reported a clinical comparison of
              Selank monotherapy against medazepam in patients with
              generalized anxiety disorder and neurasthenia, with
              comparable efficacy on standard anxiety scales and
              superior side-effect profile [3]. Medvedev et al. (2015)
              described combination use in anxiety disorders with
              favorable results [7]. These trials are Russian-language
              and are not indexed in all Western databases, which
              contributes to the perception of Selank as understudied
              despite the actual volume of human data.
            </p>
            <p>
              <strong className="text-stone-900">Cognitive endpoints.</strong>{" "}
              Some reports describe mild improvements on attention and
              short-term memory tasks in healthy subjects under
              conditions of fatigue or stress, though these are
              secondary endpoints rather than primary study objectives.
              The framing of Selank as a &ldquo;nootropic&rdquo; in the
              Western grey literature is partially an extrapolation from
              this secondary signal.
            </p>
            <p>
              <strong className="text-stone-900">Safety.</strong> The
              Russian clinical literature consistently reports a benign
              safety profile with no observed dependence or withdrawal,
              but pharmacovigilance data of the scale conducted for
              Western pharmaceuticals does not exist.
            </p>
            <PullNote>
              Selank&rsquo;s most interesting feature is what is
              absent — sedation, tolerance, withdrawal — not what is
              present.
            </PullNote>
          </Section>

          <Section id="intranasal" kicker="§04 — Administration notes" title="Intranasal administration — research context">
            <p>
              Selank is the canonical intranasal research peptide. The
              majority of published clinical studies used nasal drops or
              atomized sprays as the delivery route, typically
              administered as a 0.15% aqueous solution [3, 7]. This is a
              contrast to many other research peptides where intranasal
              administration is an extrapolation from other-route data;
              for Selank, nasal is the studied route.
            </p>
            <p>
              The pharmacokinetic rationale aligns with the broader
              nasal-peptide literature. Selank is a small,
              proline-stabilized heptapeptide with acceptable solubility
              and absorption characteristics for the respiratory
              epithelium. Onset of subjective effects is typically
              reported within 15-30 minutes; duration of anxiolytic
              effect after a single dose is reported in the range of
              several hours, with cumulative effects over multi-day
              protocols.
            </p>
            <p>
              For sourcing research-grade Selank under a documented in-house HPLC purity release target
              purity with batch-matched certificates, the catalog entry
              is at{" "}
              <Link
                href="/products/selank-nasal-spray"
                className="text-[oklch(0.68_0.17_78)] underline decoration-stone-300 underline-offset-4 hover:decoration-[oklch(0.68_0.17_78)]"
              >
                /products/selank-nasal-spray
              </Link>
              .
            </p>
          </Section>

          <Section id="stack" kicker="§05 — Compatibility" title="Stack compatibility">
            <p>
              In research protocol design, Selank is typically studied
              either alone or in combination with peptides targeting
              orthogonal CNS systems. Commonly discussed pairings:
            </p>
            <ul className="my-5 ml-6 list-disc space-y-3">
              <li>
                <strong>Semax</strong> — the other headline product of
                the Russian peptide research program. Semax is
                melanocortin-derived and primarily studied for
                neurotrophic and cognitive endpoints, which are
                orthogonal to Selank&rsquo;s GABAergic/anxiolytic
                profile. Researchers typically separate dosing windows
                rather than co-administering. See our{" "}
                <Link
                  href="/research/semax-cognition-neuroplasticity"
                  className="text-[oklch(0.68_0.17_78)] underline decoration-stone-300 underline-offset-4 hover:decoration-[oklch(0.68_0.17_78)]"
                >
                  Semax entry
                </Link>{" "}
                for the mechanistic rationale.
              </li>
              <li>
                <strong>BPC-157</strong> — mechanistically unrelated
                (angiogenic repair vs. GABAergic modulation) and
                generally considered compatible in protocol design. See
                the{" "}
                <Link
                  href="/research/bpc-157-nasal-spray"
                  className="text-[oklch(0.68_0.17_78)] underline decoration-stone-300 underline-offset-4 hover:decoration-[oklch(0.68_0.17_78)]"
                >
                  BPC-157 entry
                </Link>
                .
              </li>
              <li>
                <strong>Benzodiazepines, alcohol, other GABAergic compounds</strong>{" "}
                — this is the pairing to be most cautious about in
                protocol design. Selank&rsquo;s GABAergic footprint is
                transcriptional and indirect, but the interaction
                space with direct GABA-A ligands is not well
                characterized. No formal interaction studies are
                published.
              </li>
            </ul>
          </Section>

          <FAQ
            items={[
              {
                q: "How does Selank differ from a benzodiazepine?",
                a: "Mechanistically, benzodiazepines are direct allosteric agonists at the GABA-A receptor. Selank does not bind there; it modulates GABAergic tone through altered gene expression of receptor subunits and metabolic enzymes [4]. Practically, this is the proposed explanation for the absence of sedation, tolerance, and withdrawal in the Russian clinical literature.",
              },
              {
                q: "Is Selank a nootropic or an anxiolytic?",
                a: "The primary indication in the Russian clinical literature is anxiolytic. Cognitive effects are reported as secondary and are most pronounced under conditions of stress or fatigue. Marketing as a standalone nootropic outside Russia is an extrapolation from secondary endpoints [3, 7].",
              },
              {
                q: "What is the relationship between Selank and tuftsin?",
                a: "Tuftsin is a natural tetrapeptide (Thr-Lys-Pro-Arg) fragment of immunoglobulin G. Selank extends tuftsin with a Pro-Gly-Pro tail that dramatically increases enzymatic stability, converting a rapidly degraded endogenous fragment into a pharmacologically useful research compound [1, 5].",
              },
              {
                q: "Is the nasal route essential?",
                a: "The overwhelming majority of human and animal studies used intranasal administration. Alternative routes have been used in mechanistic work but are not well represented in the clinical literature, so nasal is the evidence-based route for research protocols.",
              },
              {
                q: "Why does the evidence base look so different from Western anxiolytics?",
                a: "Selank was developed and evaluated inside the Russian pharmaceutical research system, and most trials are published in Russian-language journals (Zh Nevrol Psikhiatr Im S S Korsakova, Eksp Klin Farmakol). PubMed indexes many of these but abstract-only in English. This is a real translation and access barrier, not an absence of evidence.",
              },
            ]}
          />

          <References items={REFS} />
          <Disclaimer />
        </ArticleLayout>
      </main>
      <Footer />
    </>
  );
}
