// Canonical source of truth for the /research/<slug>/ literature articles.
//
// Both the research index page (src/app/research/page.tsx) and the XML sitemap
// (src/app/sitemap.ts) import this list so the two can never desync — the same
// single-source pattern lib/products.ts already uses for product routes. Each
// slug below MUST have a matching route directory at
// src/app/research/<slug>/page.tsx (those pages are indexable: robots
// index:true, canonical set), otherwise the sitemap will advertise a 404.

export type ResearchArticle = {
  slug: string;
  n: string;
  title: string;
  subtitle: string;
  summary: string;
  tag: string;
  readingTime: string;
  refs: number;
};

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    slug: "bpc-157-nasal-spray",
    n: "01",
    title: "BPC-157 nasal spray",
    subtitle: "Angiogenic repair peptide — intranasal pharmacokinetics",
    summary:
      "A pentadecapeptide fragment of human gastric juice protein, studied for endothelial recovery, tendon repair, and gut-lining cytoprotection. Fourteen studies reviewed; emphasis on bioavailability via transmucosal absorption.",
    tag: "Repair",
    readingTime: "12 min",
    refs: 14,
  },
  {
    slug: "selank-anxiolytic-nootropic",
    n: "02",
    title: "Selank",
    subtitle: "Heptapeptide anxiolytic and GABA-ergic modulator",
    summary:
      "A synthetic analogue of tuftsin studied by the Institute of Molecular Genetics (Moscow) for its anxiolytic profile without sedation or dependence. Includes comparative analysis with benzodiazepine class compounds.",
    tag: "Anxiolytic",
    readingTime: "11 min",
    refs: 11,
  },
  {
    slug: "semax-cognition-neuroplasticity",
    n: "03",
    title: "Semax",
    subtitle: "ACTH(4-10) heptapeptide — BDNF and NGF expression",
    summary:
      "A melanocortin-derived peptide researched for cognitive enhancement, neuroprotection, and upregulation of brain-derived neurotrophic factor. Reviewed alongside emerging stroke-recovery literature from Eastern European trials.",
    tag: "Nootropic",
    readingTime: "12 min",
    refs: 13,
  },
  {
    slug: "pt-141-research",
    n: "04",
    title: "PT-141 (Bremelanotide)",
    subtitle: "Melanocortin receptor agonist",
    summary:
      "A cyclic heptapeptide derivative of α-MSH studied for central nervous system activation of sexual arousal pathways via MC3R/MC4R. Covers FDA-approved clinical trial data alongside broader research applications.",
    tag: "Melanocortin",
    readingTime: "11 min",
    refs: 10,
  },
  {
    slug: "oxytocin-bonding-social",
    n: "05",
    title: "Oxytocin",
    subtitle: "Social-cognition neuropeptide and the intranasal delivery paradigm",
    summary:
      "A cyclic nonapeptide synthesized in the hypothalamus, studied for effects on trust, empathic accuracy, and face processing via OXTR and partial V1a cross-reactivity. Reviews both the behavioral findings and the methodological caveats around intranasal central exposure.",
    tag: "Social",
    readingTime: "12 min",
    refs: 9,
  },
  {
    slug: "dsip-sleep-recovery",
    n: "06",
    title: "DSIP (Delta Sleep-Inducing Peptide)",
    subtitle: "Slow-wave sleep modulation and HPA-axis literature",
    summary:
      "A nonapeptide originally isolated from rabbit cerebral venous blood during electrically-induced sleep. Reviews four decades of literature on EEG delta-wave facilitation, HPA-axis dampening, withdrawal-syndrome applications, and stress-adaptation findings.",
    tag: "Sleep",
    readingTime: "12 min",
    refs: 9,
  },
  {
    slug: "nasal-stack-protocols",
    n: "07",
    title: "Nasal stack protocols",
    subtitle: "Rationale and separation when combining intranasal peptides",
    summary:
      "How researchers separate nasal dosing windows, rotate peptide pairs, and manage receptor downregulation across multi-compound protocols. Includes timing grids for the most common two- and three-compound stacks.",
    tag: "Protocol",
    readingTime: "13 min",
    refs: 8,
  },
];

// Slug-only view for the sitemap loop.
export const RESEARCH_ARTICLE_SLUGS = RESEARCH_ARTICLES.map((a) => a.slug);
