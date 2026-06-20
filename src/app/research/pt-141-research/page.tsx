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

const TITLE = "PT-141 (Bremelanotide): melanocortin receptor agonism and the central arousal pathway";
const DESCRIPTION =
  "Literature review of PT-141 (Bremelanotide), a cyclic heptapeptide derivative of α-MSH studied for central nervous system activation of sexual arousal via melanocortin receptor subtypes MC3R and MC4R, including FDA approval history.";
const URL = "/research/pt-141-research";
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
    text: "Molinoff PB, et al. PT-141: a melanocortin agonist for the treatment of sexual dysfunction. Ann N Y Acad Sci. 2003;994:96-102. PMID: 12851303.",
    href: "https://pubmed.ncbi.nlm.nih.gov/12851303/",
  },
  {
    n: 2,
    text: "Rosen RC, et al. Evaluation of the safety, pharmacokinetics and pharmacodynamic effects of subcutaneously administered PT-141, a melanocortin receptor agonist, in healthy male subjects. Int J Impot Res. 2004;16(2):135-42. PMID: 14999221.",
    href: "https://pubmed.ncbi.nlm.nih.gov/14999221/",
  },
  {
    n: 3,
    text: "Pfaus JG, et al. Selective facilitation of sexual solicitation in the female rat by a melanocortin receptor agonist. Proc Natl Acad Sci USA. 2004;101(27):10201-4. PMID: 15226502.",
    href: "https://pubmed.ncbi.nlm.nih.gov/15226502/",
  },
  {
    n: 4,
    text: "Diamond LE, et al. An effect on the subjective sexual response in premenopausal women with sexual arousal disorder by bremelanotide (PT-141), a melanocortin receptor agonist. J Sex Med. 2006;3(4):628-638. PMID: 16839319.",
    href: "https://pubmed.ncbi.nlm.nih.gov/16839319/",
  },
  {
    n: 5,
    text: "Kingsberg SA, et al. Bremelanotide for the treatment of hypoactive sexual desire disorder: two randomized phase 3 trials. Obstet Gynecol. 2019;134(5):899-908. PMID: 31599840.",
    href: "https://pubmed.ncbi.nlm.nih.gov/31599840/",
  },
  {
    n: 6,
    text: "Clayton AH, et al. Bremelanotide for female sexual dysfunctions in premenopausal women: a randomized, placebo-controlled dose-finding trial. Womens Health (Lond). 2016;12(3):325-37. PMID: 27181790.",
    href: "https://pubmed.ncbi.nlm.nih.gov/27181790/",
  },
  {
    n: 7,
    text: "Wessells H, et al. Melanocortin receptor agonists, penile erection, and sexual motivation: human studies with Melanotan II and PT-141. Ann N Y Acad Sci. 2003;994:90-5. PMID: 12851302.",
    href: "https://pubmed.ncbi.nlm.nih.gov/12851302/",
  },
];

export default function PT141Page() {
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
          eyebrow="PT-141 / Bremelanotide"
          title={
            <>
              PT-141 (Bremelanotide):{" "}
              <em className="italic text-[oklch(0.68_0.17_78)]">
                melanocortin agonism
              </em>{" "}
              and the central arousal pathway
            </>
          }
          lede="A cyclic heptapeptide derivative of α-melanocyte-stimulating hormone, studied since the 1990s as a central-nervous-system agonist at melanocortin receptor subtypes MC3R and MC4R."
          readingTime="11 min read"
          updated={UPDATED}
          toc={TOC}
        >
          <Section id="introduction" kicker="§01 — Introduction" title="From Melanotan II to a regulated drug">
            <p>
              PT-141, known generically as <Gold>Bremelanotide</Gold>, is
              a cyclic seven-amino-acid peptide derived from the α-MSH
              analog Melanotan II. Where Melanotan II was originally
              explored as a tanning agent — via activation of MC1R on
              melanocytes — researchers noted that test subjects
              reported unrelated and unintended effects on sexual
              arousal. This observation was traced to the compound&rsquo;s
              activity at the central melanocortin receptors MC3R and
              MC4R, and a medicinal-chemistry program was initiated to
              produce a derivative with reduced MC1R activity (to avoid
              pigmentation) and retained central activity. The result
              was PT-141 [1, 7].
            </p>
            <p>
              Bremelanotide is unusual among research peptides in that
              it completed Western regulatory trials and was approved
              by the FDA in 2019 for the treatment of acquired,
              generalized hypoactive sexual desire disorder (HSDD) in
              premenopausal women, under the brand name Vyleesi. The
              approval was based on the RECONNECT trials reported by
              Kingsberg et al. [5]. This context is relevant because it
              provides a human pharmacological and safety literature
              that is atypically complete for a compound still
              frequently encountered in research-peptide catalogs.
            </p>
          </Section>

          <Section id="mechanism" kicker="§02 — Mechanism" title="Mechanism of action">
            <p>
              PT-141 acts as a non-selective agonist at the family of{" "}
              <Gold>melanocortin receptors</Gold>, with principal
              activity at MC3R and MC4R and reduced but non-zero
              activity at MC1R. The MC4R subtype is densely expressed
              in hypothalamic regions involved in sexual behavior,
              appetite regulation, and autonomic tone. MC3R is broadly
              distributed in limbic structures [1].
            </p>
            <p>
              Unlike PDE5 inhibitors (sildenafil, tadalafil) which act
              peripherally on penile or clitoral vascular smooth
              muscle, PT-141 is a central-acting agent. The rodent
              literature established this distinction clearly: Pfaus
              and colleagues demonstrated in female rats that a
              melanocortin agonist selectively facilitated sexual
              solicitation behavior independently of peripheral vascular
              mechanisms [3]. This positions PT-141 as a candidate
              therapeutic for arousal disorders with a primarily
              central rather than peripheral origin.
            </p>
            <p>
              Wessells et al. (2003) summarized early human studies
              with PT-141 and its predecessor Melanotan II,
              demonstrating facilitation of erectile response and
              subjective arousal in men and women [7]. Rosen et al.
              (2004) characterized the safety, pharmacokinetics, and
              pharmacodynamics of subcutaneous PT-141 in healthy male
              subjects, establishing the dose-response relationship
              that informed later clinical trials [2].
            </p>
            <p>
              Downstream, MC4R activation engages oxytocinergic and
              dopaminergic pathways in the hypothalamus, which are
              closely tied to the motivational and reward aspects of
              sexual behavior. The compound is therefore sometimes
              described as acting on the &ldquo;desire&rdquo; phase of
              arousal rather than on vascular engorgement per se.
            </p>
          </Section>

          <Section id="published" kicker="§03 — Evidence" title="Published research summary">
            <p>
              <strong className="text-stone-900">Early human trials (2000s).</strong>{" "}
              Rosen and colleagues (2004) established safety and
              pharmacokinetic profile in healthy men [2]. Diamond et
              al. (2006) reported on subjective sexual response in
              premenopausal women with sexual arousal disorder, with
              positive signal on self-reported arousal endpoints [4].
              These trials used subcutaneous and intranasal routes;
              the intranasal route was later deprioritized in
              development in favor of subcutaneous, partly due to
              variability in nasal absorption in a large-N clinical
              program.
            </p>
            <p>
              <strong className="text-stone-900">Phase 2 dose finding.</strong>{" "}
              Clayton et al. (2016) reported a randomized
              placebo-controlled dose-finding trial in premenopausal
              women with female sexual dysfunction, establishing the
              dose range that advanced to phase 3 [6].
            </p>
            <p>
              <strong className="text-stone-900">RECONNECT (phase 3).</strong>{" "}
              Kingsberg and colleagues (2019) reported two
              randomized phase-3 trials in a combined population of
              over 1,200 premenopausal women with HSDD [5]. Both
              trials met primary endpoints on the validated Female
              Sexual Function Index and Female Sexual Distress Scale.
              This dataset is the foundation of the FDA approval.
            </p>
            <p>
              <strong className="text-stone-900">Safety.</strong> The
              most commonly reported adverse events in the phase-3
              program were nausea (transient, often limited to first
              doses), flushing, headache, and transient increases in
              blood pressure. A minority of patients exhibited
              focal hyperpigmentation with repeated dosing — an
              expected pharmacological consequence of residual MC1R
              activity. Cardiovascular safety is the principal
              contraindication consideration in the regulatory label [5].
            </p>
            <PullNote>
              PT-141 is one of the few research-catalog peptides that
              also has a full regulatory dossier. The pharmacology is
              settled; the research interest is in delivery and
              protocol design.
            </PullNote>
          </Section>

          <Section id="intranasal" kicker="§04 — Administration notes" title="Intranasal administration — research context">
            <p>
              Intranasal PT-141 was extensively studied in early
              development and was the route used in several early
              phase-2 trials [4, 7]. It was ultimately deprioritized
              in favor of subcutaneous injection for the approved
              product (Vyleesi), primarily due to
              inter-subject variability in nasal absorption at the
              scale of a large Phase-3 program — not due to failure
              of the route.
            </p>
            <p>
              For research-protocol purposes, intranasal PT-141
              remains of interest because the route offers rapid
              onset, avoidance of injection, and exploitation of the
              olfactory/trigeminal pathway for CNS-targeted delivery.
              Plasma concentration curves from the intranasal
              literature are generally characterized by faster Tmax
              than subcutaneous and lower absolute bioavailability —
              a typical nasal-peptide profile.
            </p>
            <p>
              Researchers working with intranasal PT-141 should be
              aware that individual nasal physiology is a larger
              source of pharmacokinetic variance for this compound
              than for, e.g., Selank or Semax — one of the reasons
              the developer shifted to subcutaneous for approval.
            </p>
            <p>
              Research-grade PT-141 under a documented in-house HPLC purity release target is
              catalog-listed at{" "}
              <Link
                href="/products/pt-141-nasal-spray"
                className="text-[oklch(0.68_0.17_78)] underline decoration-stone-300 underline-offset-4 hover:decoration-[oklch(0.68_0.17_78)]"
              >
                /products/pt-141-nasal-spray
              </Link>
              .
            </p>
          </Section>

          <Section id="stack" kicker="§05 — Compatibility" title="Stack compatibility">
            <p>
              PT-141 operates on a specific and dense hypothalamic
              pathway, which informs stack design more than most
              peptides:
            </p>
            <ul className="my-5 ml-6 list-disc space-y-3">
              <li>
                <strong>Other melanocortin agonists (Melanotan II, etc.)</strong>{" "}
                — not combined. There is overlapping receptor
                activity and potential for additive cardiovascular
                and pigmentation effects.
              </li>
              <li>
                <strong>PDE5 inhibitors</strong> — the pharmacology is
                non-overlapping (central vs. peripheral), but the
                cardiovascular safety combination has been explicitly
                discussed in the regulatory literature; caution on
                blood-pressure interactions applies [5].
              </li>
              <li>
                <strong>BPC-157, Selank, Semax</strong> — mechanism-
                orthogonal and not expected to interact at the
                pharmacological level. Researchers nonetheless
                typically separate intranasal sessions to avoid
                confounding formulation effects. See our{" "}
                <Link
                  href="/research/nasal-stack-protocols"
                  className="text-[oklch(0.68_0.17_78)] underline decoration-stone-300 underline-offset-4 hover:decoration-[oklch(0.68_0.17_78)]"
                >
                  stack protocols entry
                </Link>
                .
              </li>
            </ul>
          </Section>

          <FAQ
            items={[
              {
                q: "Is PT-141 the same as Bremelanotide?",
                a: "Yes. PT-141 is the development code; Bremelanotide is the generic name assigned during regulatory review. They refer to the identical molecule [1].",
              },
              {
                q: "How does PT-141 differ from sildenafil?",
                a: "Sildenafil is a peripheral PDE5 inhibitor acting on vascular smooth muscle. PT-141 is a central melanocortin receptor agonist acting on hypothalamic circuits that regulate sexual desire and arousal [3, 7]. The two act at different nodes of the response chain; PT-141 is sometimes described as operating on the 'desire' phase, PDE5 inhibitors on the vascular response.",
              },
              {
                q: "Why was the intranasal route deprioritized in the approved product?",
                a: "Variability. Intranasal absorption is reliably within a range, but that range is wider than subcutaneous at the level of a large phase-3 program. The developer chose subcutaneous injection to minimize pharmacokinetic variance for regulatory approval [5]. Intranasal remains scientifically valid for research protocols.",
              },
              {
                q: "What adverse effects are most commonly reported?",
                a: "In the phase-3 RECONNECT trials, transient nausea was the most commonly reported AE (approximately 40% of subjects in the active arm), followed by flushing, headache, and a transient blood-pressure increase. Focal hyperpigmentation was observed in a minority with repeated dosing, consistent with residual MC1R activity [5].",
              },
              {
                q: "Does PT-141 affect both sexes?",
                a: "Published clinical trials include both male erectile dysfunction studies (early development) and female HSDD trials (late-stage development). The approved indication is female HSDD; male studies showed mechanistic activity but development focused on the female population [2, 3, 4, 5, 7].",
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
