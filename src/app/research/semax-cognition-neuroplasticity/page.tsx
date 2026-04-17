import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/site/header";
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

const TITLE = "Semax: ACTH(4-10) heptapeptide, BDNF/NGF expression, and the neuroplasticity literature";
const DESCRIPTION =
  "Long-form literature review of Semax, a melanocortin-derived heptapeptide researched for cognitive enhancement, neuroprotection in stroke models, and upregulation of brain-derived neurotrophic factor (BDNF) and nerve growth factor (NGF).";
const URL = "/research/semax-cognition-neuroplasticity";
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
    text: "Ashmarin IP, et al. Nootropic analogue of adrenocorticotropic hormone 4-10, Semax, 15 years experience in design and study. Zh Vyssh Nerv Deiat Im I P Pavlova. 1997;47(2):420-30. PMID: 9213433.",
    href: "https://pubmed.ncbi.nlm.nih.gov/9213433/",
  },
  {
    n: 2,
    text: "Shadrina MI, et al. Rapid induction of neurotrophin mRNAs in rat glial cell cultures by Semax, an adrenocorticotropic hormone analog. Neurosci Lett. 2001;308(2):115-8. PMID: 11457573.",
    href: "https://pubmed.ncbi.nlm.nih.gov/11457573/",
  },
  {
    n: 3,
    text: "Medvedeva EV, et al. The peptide semax affects the expression of genes related to the immune and vascular systems in rat brain focal ischemia. Genet Mol Biol. 2014;37(2):420-31. PMID: 25061425.",
    href: "https://pubmed.ncbi.nlm.nih.gov/25061425/",
  },
  {
    n: 4,
    text: "Gusev EI, et al. Semax in prevention of disease progress and development of exacerbations in patients with cerebrovascular insufficiency. Zh Nevrol Psikhiatr Im S S Korsakova. 2005;105(5):35-40. PMID: 15977642.",
    href: "https://pubmed.ncbi.nlm.nih.gov/15977642/",
  },
  {
    n: 5,
    text: "Dolotov OV, et al. Semax, an analog of ACTH(4-10), binds specifically and increases levels of brain-derived neurotrophic factor protein in rat basal forebrain. J Neurochem. 2006;97 Suppl 1:82-6. PMID: 16635254.",
    href: "https://pubmed.ncbi.nlm.nih.gov/16635254/",
  },
  {
    n: 6,
    text: "Levitskaya NG, et al. Influence of Semax on the emotional state of white rats in the norm and against the background of cholecystokinin-induced depression-like state. Izv Akad Nauk Ser Biol. 2010;(2):231-7. PMID: 20391779.",
    href: "https://pubmed.ncbi.nlm.nih.gov/20391779/",
  },
  {
    n: 7,
    text: "Asmarin IP, Koroleva SV. Peptide regulation of homeostasis — review. Ross Fiziol Zh Im I M Sechenova. 2002;88(11):1424-36. PMID: 12561369.",
    href: "https://pubmed.ncbi.nlm.nih.gov/12561369/",
  },
];

export default function SemaxPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: UPDATED,
    dateModified: UPDATED,
    author: { "@type": "Organization", name: "Titan Peptide Laboratory" },
    publisher: { "@type": "Organization", name: "Titan Peptide Laboratory" },
    mainEntityOfPage: URL,
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <main>
        <ArticleLayout
          eyebrow="Semax"
          title={
            <>
              Semax: ACTH(4-10) analog,{" "}
              <em className="italic text-[oklch(0.68_0.17_78)]">
                neurotrophic induction,
              </em>{" "}
              and the neuroplasticity literature
            </>
          }
          lede="A melanocortin-derived heptapeptide researched for four decades in Russia for cognitive enhancement, neuroprotection in ischemic stroke, and rapid upregulation of brain-derived and nerve growth factors."
          readingTime="12 min read"
          updated={UPDATED}
          toc={TOC}
        >
          <Section id="introduction" kicker="§01 — Introduction" title="A trimmed ACTH fragment, devoid of hormonal activity">
            <p>
              Semax is a heptapeptide with the sequence{" "}
              <span className="font-mono text-[0.92em]">
                Met-Glu-His-Phe-Pro-Gly-Pro
              </span>
              . It corresponds to the 4-10 fragment of
              adrenocorticotropic hormone (ACTH) extended with a C-
              terminal Pro-Gly-Pro tripeptide that confers resistance to
              enzymatic degradation. Critically, the ACTH(4-10) core
              retains the neurotropic and behavioral effects of the
              parent hormone while being devoid of corticotropic
              activity — that is, Semax does not stimulate adrenal
              cortisol release [1, 7].
            </p>
            <p>
              Semax was developed by the laboratory of Academician I.P.
              Ashmarin at Moscow State University in the 1980s and
              subsequently characterized in detail at the Institute of
              Molecular Genetics of the Russian Academy of Sciences. It
              was approved for clinical use in Russia in 2011 for stroke
              and cerebrovascular insufficiency [4]. As with Selank, this
              approval does not affect its research-use-only status
              elsewhere, but it produces a human clinical literature
              that is unusually deep for a compound in its class.
            </p>
          </Section>

          <Section id="mechanism" kicker="§02 — Mechanism" title="Mechanism of action">
            <p>
              The most frequently cited mechanism for Semax is rapid
              induction of <Gold>neurotrophic factors</Gold>. Shadrina
              and colleagues (2001) demonstrated that Semax produced
              rapid increases in mRNA encoding BDNF (brain-derived
              neurotrophic factor) and NGF (nerve growth factor) in rat
              glial cell cultures within 20-40 minutes of exposure [2].
              Dolotov et al. (2006) subsequently showed that Semax
              binds specifically in the rat basal forebrain and produces
              sustained increases in BDNF protein at the tissue level
              [5].
            </p>
            <p>
              This neurotrophic footprint is central to the compound&rsquo;s
              therapeutic rationale in models of cerebral ischemia. BDNF
              and NGF are principal mediators of neuronal survival,
              synaptic plasticity, and post-injury recovery; a compound
              that rapidly and reliably upregulates both is of obvious
              interest in stroke-recovery and cognitive-decline models.
            </p>
            <p>
              A second axis is modulation of the <Gold>melanocortin system</Gold>.
              Although Semax lacks corticotropic activity, it retains
              some affinity for central melanocortin receptors, which
              mediate behavioral and attentional effects attributed to
              ACTH-derived peptides. This is invoked to explain the
              attentional and motivational effects described in early
              Ashmarin-group behavioral studies [1, 7].
            </p>
            <p>
              A third, increasingly discussed axis is modulation of
              gene expression in <Gold>vascular and immune pathways</Gold>{" "}
              in the ischemic penumbra. Medvedeva et al. (2014) described
              broad transcriptional changes in rat brain tissue after
              focal ischemia, with Semax administration preferentially
              modulating genes involved in vascular tone and neutrophil-
              mediated inflammation [3]. This provides a second, non-
              neurotrophic pathway through which the compound may
              contribute to tissue protection in stroke models.
            </p>
            <p>
              Modulation of monoaminergic tone has been reported in
              behavioral models of depression-like states and
              cholecystokinin-induced anxiety, with effects on serotonin
              and dopamine turnover in limbic structures [6].
            </p>
          </Section>

          <Section id="published" kicker="§03 — Evidence" title="Published research summary">
            <p>
              <strong className="text-stone-900">Neuroprotection in stroke.</strong>{" "}
              Semax is most extensively characterized in rodent models
              of focal cerebral ischemia. Reports describe reduced
              infarct volume, improved neurological scores, and
              transcriptional signatures consistent with attenuated
              inflammatory response [3]. Gusev et al. (2005) published
              clinical data in patients with chronic cerebrovascular
              insufficiency describing reduced rate of disease
              progression [4].
            </p>
            <p>
              <strong className="text-stone-900">Cognitive endpoints.</strong>{" "}
              The Ashmarin group published extensively on attentional
              and memory endpoints in both rodents and humans. Effects
              are most pronounced under conditions of fatigue, hypoxia,
              or sleep deprivation — the compound&rsquo;s original
              operational application was aviation medicine, where it
              was studied as a protective agent against stress-induced
              cognitive degradation [1, 7].
            </p>
            <p>
              <strong className="text-stone-900">Mood and affect.</strong>{" "}
              Levitskaya and colleagues described effects on emotional
              state in rats under both baseline and
              cholecystokinin-induced depression-like conditions, with
              Semax producing normalization of exploratory behavior [6].
              The mechanism is proposed to involve combined monoaminergic
              and neurotrophic effects.
            </p>
            <p>
              <strong className="text-stone-900">Safety and tolerability.</strong>{" "}
              The Russian clinical literature describes a benign safety
              profile across acute and extended use, with the principal
              caveat that long-term pharmacovigilance data at Western
              scale does not exist.
            </p>
            <PullNote>
              What separates Semax from the broader &ldquo;nootropic&rdquo;
              field is the speed and reproducibility of the neurotrophic
              induction. The BDNF response is measurable within an hour.
            </PullNote>
          </Section>

          <Section id="intranasal" kicker="§04 — Administration notes" title="Intranasal administration — research context">
            <p>
              Semax, like Selank, was designed and studied principally
              for intranasal administration. The Russian clinical
              protocols use nasal drops at concentrations of 0.1% or
              1.0% depending on indication, with dosing frequencies
              typically ranging from twice daily to four times daily in
              more acute protocols [4].
            </p>
            <p>
              The intranasal route is thought to provide direct CNS
              access through the olfactory and trigeminal pathways, as
              described in the general nasal-peptide delivery literature.
              For a compound whose primary site of action is central —
              BDNF/NGF induction in basal forebrain and cortex — this
              delivery route is mechanistically aligned.
            </p>
            <p>
              Research-grade Semax synthesized under HPLC verification
              is catalog-listed at{" "}
              <Link
                href="/products/semax-nasal-spray"
                className="text-[oklch(0.68_0.17_78)] underline decoration-stone-300 underline-offset-4 hover:decoration-[oklch(0.68_0.17_78)]"
              >
                /products/semax-nasal-spray
              </Link>
              .
            </p>
          </Section>

          <Section id="stack" kicker="§05 — Compatibility" title="Stack compatibility">
            <p>
              Semax is commonly paired in research protocols with
              peptides operating through orthogonal mechanisms. The
              canonical pairing is with Selank, and this combination
              has been studied enough that some Russian clinical work
              treats them as a coordinated intervention.
            </p>
            <ul className="my-5 ml-6 list-disc space-y-3">
              <li>
                <strong>Selank</strong> — orthogonal mechanism
                (GABAergic/anxiolytic vs. neurotrophic/cognitive).
                Researchers typically separate the two in time to
                isolate endpoints, but the pairing is well-represented
                in Russian protocol literature. See the{" "}
                <Link
                  href="/research/selank-anxiolytic-nootropic"
                  className="text-[oklch(0.68_0.17_78)] underline decoration-stone-300 underline-offset-4 hover:decoration-[oklch(0.68_0.17_78)]"
                >
                  Selank entry
                </Link>
                .
              </li>
              <li>
                <strong>BPC-157</strong> — mechanistically unrelated;
                used in protocols targeting both CNS and somatic repair.
                See the{" "}
                <Link
                  href="/research/bpc-157-nasal-spray"
                  className="text-[oklch(0.68_0.17_78)] underline decoration-stone-300 underline-offset-4 hover:decoration-[oklch(0.68_0.17_78)]"
                >
                  BPC-157 entry
                </Link>
                .
              </li>
              <li>
                <strong>Other melanocortin-acting peptides (e.g., PT-141)</strong>{" "}
                — overlap at the receptor family level. Concurrent
                administration is not characterized in the literature
                and is typically avoided in structured protocols. See
                the{" "}
                <Link
                  href="/research/pt-141-research"
                  className="text-[oklch(0.68_0.17_78)] underline decoration-stone-300 underline-offset-4 hover:decoration-[oklch(0.68_0.17_78)]"
                >
                  PT-141 entry
                </Link>
                .
              </li>
            </ul>
          </Section>

          <FAQ
            items={[
              {
                q: "Does Semax have corticotropic (cortisol-releasing) activity?",
                a: "No. The ACTH(4-10) core was selected specifically because it retains the neurotropic and behavioral activity of the parent hormone without the melanocortin-2-receptor-mediated corticotropic effect. This is one of the central pharmacological features of the compound [1, 7].",
              },
              {
                q: "How quickly does BDNF respond to Semax administration?",
                a: "Shadrina et al. (2001) observed increases in BDNF mRNA in rat glial cultures within 20-40 minutes of exposure [2]. Dolotov et al. (2006) described sustained increases in BDNF protein in basal forebrain tissue [5]. This rapid neurotrophic induction is a distinguishing feature.",
              },
              {
                q: "Is Semax equivalent to an antidepressant?",
                a: "No. Antidepressant-like effects have been described in specific rodent models [6], but Semax is not indicated or characterized as an antidepressant in the Russian clinical literature. The approved indications are cerebrovascular insufficiency and stroke-related applications [4].",
              },
              {
                q: "Why is nasal the preferred route?",
                a: "The entire Russian clinical tradition for Semax is intranasal, and the primary site of action (basal forebrain, cortex) is centrally located. The nasal route provides candidate olfactory/trigeminal pathways for CNS access and is the evidence-based route.",
              },
              {
                q: "How does Semax differ from racetams or other Western nootropics?",
                a: "Mechanistically, completely different. Racetams are small molecules with varied and often poorly characterized mechanisms. Semax is a peptide analog of an endogenous hormone with specific, reproducible neurotrophic induction and receptor binding profiles [2, 5]. The evidence base is also deeper in humans than for most racetams.",
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
