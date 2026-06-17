// Research Assistant — guided matcher data.
//
// Maps a visitor's stated RESEARCH AREA to a curated set of peptide "research
// cards." This is an EDUCATIONAL, COMPLIANCE-FRAMED reference layer, not a
// medical tool.
//
// COMPLIANCE RULES baked into every string below (do not relax when editing):
//   - Never diagnose, never imply a visitor "has" a condition or should "take"
//     anything. Framing is always "researchers studying X investigate Y;
//     published studies report …".
//   - No human dosing. No "for personal use." No treatment/cure language.
//   - Citations are REAL, verified against PubMed (PMID links resolve to the
//     exact paper cited). Never invent a citation — omit it instead.
//   - Products are research compounds, not intended for human consumption,
//     diagnosis, or treatment. The UI carries RUO + not-medical-advice notices.
//
// Product links resolve at render time against lib/products.ts (slug lookup),
// so this file never duplicates price/format/name — it can't desync from the
// live catalog.

export type Citation = {
  /** Short byline, e.g. "Gwyer et al." */
  authors: string;
  /** Journal + year, e.g. "Cell Tissue Res, 2019" */
  source: string;
  /** Full article title as indexed in PubMed. */
  title: string;
  /** PubMed identifier — resolves to https://pubmed.ncbi.nlm.nih.gov/<pmid>/ */
  pmid: string;
};

export type AssistantCard = {
  /** Must match a Product.slug in the live catalog. */
  productSlug: string;
  /** Compound name as researchers refer to it. */
  compound: string;
  /** One-line research focus shown under the compound name. */
  focus: string;
  /** Neutral, research-framed summary of what the literature reports. */
  summary: string;
  /** Real, verifiable citations. May be empty (never fabricated). */
  citations: Citation[];
  /** Optional matching long-form article at /research/<slug>/. */
  articleSlug?: string;
};

export type ResearchArea = {
  id: string;
  /** Display label, e.g. "Recovery & tissue repair". */
  label: string;
  /** Short menu hint. */
  hint: string;
  /** What researchers in this area typically study (model systems / endpoints). */
  studies: string;
  cards: AssistantCard[];
};

// ---------------------------------------------------------------------------
// Citations (verified against PubMed — PMIDs resolve to the exact paper).
// ---------------------------------------------------------------------------

const C = {
  bpc157_msk: {
    authors: "Gwyer et al.",
    source: "Cell Tissue Res, 2019",
    title:
      "Gastric pentadecapeptide body protection compound BPC 157 and its role in accelerating musculoskeletal soft tissue healing",
    pmid: "30915550",
  },
  bpc157_tendon: {
    authors: "Chang et al.",
    source: "J Appl Physiol, 2011",
    title:
      "The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration",
    pmid: "21030672",
  },
  tb4: {
    authors: "Goldstein & Kleinman",
    source: "Expert Opin Biol Ther, 2012",
    title:
      "Thymosin β4: a multi-functional regenerative peptide. Basic properties and clinical applications",
    pmid: "22074294",
  },
  retatrutide: {
    authors: "Jastreboff et al.",
    source: "N Engl J Med, 2023",
    title:
      "Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial",
    pmid: "37366315",
  },
  cjc1295: {
    authors: "Teichman et al.",
    source: "J Clin Endocrinol Metab, 2006",
    title:
      "Prolonged stimulation of growth hormone and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults",
    pmid: "16352683",
  },
  ipamorelin: {
    authors: "Raun et al.",
    source: "Eur J Endocrinol, 1998",
    title: "Ipamorelin, the first selective growth hormone secretagogue",
    pmid: "9849822",
  },
  semax: {
    authors: "Dolotov et al.",
    source: "Brain Res, 2006",
    title:
      "Semax, an analog of ACTH(4-10) with cognitive effects, regulates BDNF and trkB expression in the rat hippocampus",
    pmid: "16996037",
  },
  selank: {
    authors: "Pavlov et al.",
    source: "Dokl Biol Sci, 2004",
    title: "A new property of the synthetic anxiolytic Selank and its derivatives",
    pmid: "15508574",
  },
  dsip: {
    authors: "Kovalzon & Strekalova",
    source: "J Neurochem, 2006",
    title: "Delta sleep-inducing peptide (DSIP): a still unresolved riddle",
    pmid: "16539679",
  },
  oxytocin: {
    authors: "Froemke & Young",
    source: "Annu Rev Neurosci, 2021",
    title: "Oxytocin, Neural Plasticity, and Social Behavior",
    pmid: "33823654",
  },
  bremelanotide: {
    authors: "Mayer & Lynch",
    source: "Ann Pharmacother, 2020",
    title:
      "Bremelanotide: New Drug Approved for Treating Hypoactive Sexual Desire Disorder",
    pmid: "31893927",
  },
} satisfies Record<string, Citation>;

// ---------------------------------------------------------------------------
// Research areas → curated peptide cards.
// ---------------------------------------------------------------------------

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: "recovery-tissue",
    label: "Recovery & tissue repair",
    hint: "Tendon, ligament, gut-lining, wound-model research",
    studies:
      "Researchers in this area work with tendon, ligament, muscle, gut-mucosa and wound-healing models, looking at angiogenesis, cell migration and tissue remodeling.",
    cards: [
      {
        productSlug: "bpc-157-nasal-spray",
        compound: "BPC-157",
        focus: "Angiogenic / soft-tissue repair peptide",
        summary:
          "Researchers studying soft-tissue and gut-lining repair frequently investigate BPC-157, a synthetic pentadecapeptide based on a sequence from gastric juice protein. Published preclinical work reports effects on angiogenesis and on the healing of tendon, ligament, muscle and intestinal mucosa in animal models. Controlled human clinical evidence remains limited.",
        citations: [C.bpc157_msk],
        articleSlug: "bpc-157-nasal-spray",
      },
      {
        productSlug: "bpc-157-vial",
        compound: "BPC-157 (lyophilized vial)",
        focus: "Same peptide, reconstitution-format for SC protocols",
        summary:
          "The lyophilized vial is the same BPC-157 sequence in a format researchers reconstitute themselves for subcutaneous study protocols. Published animal work specifically reports a promoting effect on tendon healing involving tendon-cell outgrowth, survival and migration.",
        citations: [C.bpc157_tendon],
        articleSlug: "bpc-157-nasal-spray",
      },
      {
        productSlug: "tb-500-vial",
        compound: "TB-500 (Thymosin β4)",
        focus: "Actin-binding regenerative peptide",
        summary:
          "Researchers studying regenerative and wound-repair pathways investigate Thymosin β4, the peptide that TB-500 is based on. Published reviews describe its actin-binding activity and reported roles in cell migration, angiogenesis and tissue remodeling across preclinical models.",
        citations: [C.tb4],
      },
    ],
  },
  {
    id: "metabolic",
    label: "Metabolic & body-composition",
    hint: "Incretin / energy-balance receptor research",
    studies:
      "Researchers in this area study incretin and energy-balance signaling — GLP-1, GIP and glucagon receptor pathways and their effects on weight and metabolic endpoints.",
    cards: [
      {
        productSlug: "retatrutide",
        compound: "Retatrutide",
        focus: "GLP-1 / GIP / glucagon triple-receptor agonist",
        summary:
          "Researchers studying metabolic and body-composition endpoints investigate retatrutide, a single peptide that acts as an agonist at the GLP-1, GIP and glucagon receptors. A published Phase 2 randomized controlled trial reported dose-dependent changes in body weight in adults with obesity.",
        citations: [C.retatrutide],
      },
    ],
  },
  {
    id: "growth-hormone",
    label: "Growth-hormone axis",
    hint: "GHRH analogue & secretagogue research",
    studies:
      "Researchers in this area study the growth-hormone axis using secretagogues — GHRH analogues and GH-secretagogue-receptor agonists — and their effect on GH and IGF-I.",
    cards: [
      {
        productSlug: "cjc-1295-ipamorelin",
        compound: "CJC-1295 + Ipamorelin",
        focus: "GHRH analogue paired with a selective GH secretagogue",
        summary:
          "Researchers studying the growth-hormone axis investigate secretagogues such as CJC-1295, a long-acting GHRH analogue, and ipamorelin, a selective GH-secretagogue-receptor agonist. A published study in healthy adults reported prolonged stimulation of GH and IGF-I secretion with CJC-1295; ipamorelin was characterized in the literature as the first selective GH secretagogue.",
        citations: [C.cjc1295, C.ipamorelin],
      },
    ],
  },
  {
    id: "cognition",
    label: "Cognition & focus",
    hint: "Nootropic / neurotrophic-factor research",
    studies:
      "Researchers in this area study cognition, neuroplasticity and neurotrophic-factor expression (BDNF/NGF) using nootropic peptide analogues.",
    cards: [
      {
        productSlug: "semax-nasal-spray",
        compound: "Semax",
        focus: "ACTH(4-10) analogue studied for neuroplasticity",
        summary:
          "Researchers studying cognition and neuroplasticity investigate Semax, a synthetic analogue of the ACTH(4-10) fragment. Published animal work reports that it regulates brain-derived neurotrophic factor (BDNF) and its receptor in the hippocampus.",
        citations: [C.semax],
        articleSlug: "semax-cognition-neuroplasticity",
      },
      {
        productSlug: "selank-semax-stack",
        compound: "Selank + Semax",
        focus: "Two nootropic peptides typically run in parallel",
        summary:
          "Researchers who run nootropic peptides in parallel study the Selank + Semax pairing — a tuftsin-analogue anxiolytic alongside an ACTH(4-10) analogue. Published animal work characterizes Selank's anxiolytic profile and Semax's effect on neurotrophic-factor expression.",
        citations: [C.selank, C.semax],
        articleSlug: "nasal-stack-protocols",
      },
    ],
  },
  {
    id: "stress-sleep",
    label: "Stress, mood & sleep",
    hint: "Anxiolytic & sleep-peptide research",
    studies:
      "Researchers in this area study anxiety-related behavior, stress responses and sleep regulation using GABA-ergic and sleep-associated peptides.",
    cards: [
      {
        productSlug: "selank-nasal-spray",
        compound: "Selank",
        focus: "Tuftsin-analogue anxiolytic peptide",
        summary:
          "Researchers studying anxiety-related and stress behaviors investigate Selank, a synthetic analogue of the immunopeptide tuftsin. Published animal studies describe an anxiolytic profile reported without the sedation or dependence associated with benzodiazepine-class compounds.",
        citations: [C.selank],
        articleSlug: "selank-anxiolytic-nootropic",
      },
      {
        productSlug: "dsip-nasal-spray",
        compound: "DSIP",
        focus: "Delta sleep-inducing peptide",
        summary:
          "Researchers studying sleep and circadian regulation investigate DSIP (delta sleep-inducing peptide). The published literature documents decades of study into its sleep-associated and neuromodulatory activity while noting that its precise mechanism remains an open research question.",
        citations: [C.dsip],
        articleSlug: "dsip-sleep-recovery",
      },
    ],
  },
  {
    id: "social-behavioral",
    label: "Social & behavioral",
    hint: "Neuropeptide / social-behavior research",
    studies:
      "Researchers in this area study neuropeptide signaling and its links to social behavior, bonding and neural plasticity.",
    cards: [
      {
        productSlug: "oxytocin-nasal-spray",
        compound: "Oxytocin",
        focus: "Neuropeptide studied in social-behavior models",
        summary:
          "Researchers studying social behavior and neural plasticity investigate oxytocin, an endogenous neuropeptide. Published review work in the neuroscience literature describes its receptor signaling and its reported roles in social behavior and plasticity across model systems.",
        citations: [C.oxytocin],
        articleSlug: "oxytocin-bonding-social",
      },
    ],
  },
  {
    id: "sexual-health",
    label: "Sexual-health pathways",
    hint: "Melanocortin-receptor research",
    studies:
      "Researchers in this area study melanocortin-receptor signaling and its relationship to sexual-response pathways.",
    cards: [
      {
        productSlug: "pt-141-nasal-spray",
        compound: "PT-141 (Bremelanotide)",
        focus: "Melanocortin-receptor agonist",
        summary:
          "Researchers studying melanocortin signaling investigate PT-141 (bremelanotide), a melanocortin-receptor agonist. The published pharmacotherapy literature reviews its regulatory approval and studied use in hypoactive sexual desire, providing a documented reference point for melanocortin-pathway research.",
        citations: [C.bremelanotide],
        articleSlug: "pt-141-research",
      },
    ],
  },
];

export const RESEARCH_AREA_IDS = RESEARCH_AREAS.map((a) => a.id);

export function pubmedUrl(pmid: string) {
  return `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`;
}
