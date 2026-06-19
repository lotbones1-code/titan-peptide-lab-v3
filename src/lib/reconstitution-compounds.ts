// Canonical source of truth for the programmatic /reconstitution/<slug>/ cluster.
//
// Each entry generates one indexable long-tail page targeting the
// "{compound} reconstitution calculator" / "how much bacteriostatic water for
// {compound}" / "{compound} reconstitution guide" query cluster — the highest
// volume, lowest competition asset type in the research-peptide niche, and one
// every competing supplier ranks with. Pages are strictly research-preparation
// concentration math (mg/mL, mcg/mL, draw volume, U-100 units). NO human-dosing,
// medical, therapeutic, or performance framing — RUO only.
//
// Single-source pattern (same as lib/products.ts and lib/research-articles.ts):
// the dynamic route (src/app/reconstitution/[slug]/page.tsx), the hub
// (src/app/reconstitution/page.tsx), and the sitemap all import this list so
// they can never desync and the sitemap can never advertise a 404.

import { PRODUCTS } from "./products";
import { RESEARCH_ARTICLE_SLUGS } from "./research-articles";
import { BLOG_SLUGS } from "./blog-posts";

export type ReconstitutionCompound = {
  /** URL slug → /reconstitution/<slug>/ */
  slug: string;
  /** Display name as researchers search it */
  name: string;
  /** Short alias/abbreviation list folded into copy + keywords */
  aliases: string[];
  /** Research-class label for the eyebrow + schema */
  className: string;
  /** Typical lyophilized vial size researchers reconstitute (mg) — calculator preset */
  typicalVialMg: number;
  /** Common bacteriostatic-water volume for that vial (mL) — calculator preset */
  typicalBacWaterMl: number;
  /** Representative per-aliquot research target (mcg) — calculator preset only */
  typicalAliquotMcg: number;
  /** 1–2 sentence literature-framed, compliant description */
  blurb: string;
  /** Matching product slug if Titan sells it (buyer-intent internal link) */
  productSlug?: string;
  /** Matching /research/<slug>/ literature article if one exists */
  researchSlug?: string;
  /** Matching /blog/<slug>/ post if one exists */
  blogSlug?: string;
};

// Ordered roughly by search demand. Catalog compounds first (so every product
// gets a reconstitution page that links back to its buy page), then the broader
// high-volume research compounds researchers look up reconstitution math for.
export const RECONSTITUTION_COMPOUNDS: ReconstitutionCompound[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    aliases: ["Body Protection Compound 157", "PL 14736"],
    className: "Repair peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 250,
    blurb:
      "A pentadecapeptide fragment studied across angiogenesis, tendon-fibroblast, and GI-mucosa research literature. Supplied lyophilized for reconstitution with bacteriostatic water.",
    productSlug: "bpc-157-vial",
    researchSlug: "bpc-157-nasal-spray",
    blogSlug: "bpc-157-nasal-spray-complete-guide",
  },
  {
    slug: "tb-500",
    name: "TB-500",
    aliases: ["Thymosin Beta-4 fragment", "TB4"],
    className: "Repair peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 500,
    blurb:
      "A synthetic fragment associated with the actin-binding region of Thymosin Beta-4, examined in cell-migration and tissue-repair research models. Lyophilized vial.",
    productSlug: "tb-500-vial",
  },
  {
    slug: "semax",
    name: "Semax",
    aliases: ["ACTH(4-7) analogue", "Met-Glu-His-Phe-Pro-Gly-Pro"],
    className: "Nootropic peptide",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 300,
    blurb:
      "A heptapeptide analogue of an ACTH fragment studied for BDNF expression and neuroprotection in Russian research literature. Reconstituted from lyophilized powder.",
    productSlug: "semax-nasal-spray",
    researchSlug: "semax-cognition-neuroplasticity",
    blogSlug: "semax-vs-selank-neuropeptide-comparison",
  },
  {
    slug: "selank",
    name: "Selank",
    aliases: ["TP-7", "tuftsin analogue"],
    className: "Anxiolytic peptide",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 300,
    blurb:
      "A synthetic heptapeptide analogue of tuftsin studied for anxiolytic and GABA-ergic activity without sedation in published research models. Lyophilized.",
    productSlug: "selank-nasal-spray",
    researchSlug: "selank-anxiolytic-nootropic",
  },
  {
    slug: "pt-141",
    name: "PT-141",
    aliases: ["Bremelanotide", "melanocortin agonist"],
    className: "Melanocortin peptide",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 1000,
    blurb:
      "A cyclic melanocortin-receptor agonist derived from Melanotan II, appearing in central-nervous-system signalling research literature. Reconstituted from lyophilized powder.",
    productSlug: "pt-141-nasal-spray",
    researchSlug: "pt-141-research",
    blogSlug: "pt-141-nasal-spray-research-guide",
  },
  {
    slug: "dsip",
    name: "DSIP",
    aliases: ["Delta Sleep-Inducing Peptide"],
    className: "Neuropeptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 250,
    blurb:
      "A nonapeptide first isolated from cerebral venous blood, studied in sleep-architecture and stress-modulation research. Supplied lyophilized.",
    productSlug: "dsip-nasal-spray",
    researchSlug: "dsip-sleep-recovery",
    blogSlug: "dsip-nasal-spray-delta-sleep-peptide",
  },
  {
    slug: "oxytocin",
    name: "Oxytocin",
    aliases: ["nonapeptide hormone"],
    className: "Neuropeptide",
    typicalVialMg: 2,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 100,
    blurb:
      "A nine-amino-acid neuropeptide studied extensively in social-bonding and signalling research literature. Reconstituted from lyophilized powder.",
    productSlug: "oxytocin-nasal-spray",
    researchSlug: "oxytocin-bonding-social",
    blogSlug: "oxytocin-nasal-spray-research",
  },
  {
    slug: "cjc-1295-ipamorelin",
    name: "CJC-1295 + Ipamorelin",
    aliases: ["CJC-1295 DAC", "growth-hormone secretagogue blend"],
    className: "Secretagogue blend",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 300,
    blurb:
      "A combined GHRH analogue and selective GH-secretagogue blend studied in growth-hormone-axis research. Each blended vial is reconstituted with bacteriostatic water.",
    productSlug: "cjc-1295-ipamorelin",
  },
  {
    slug: "retatrutide",
    name: "Retatrutide",
    aliases: ["LY3437943", "GLP-1/GIP/glucagon triple agonist"],
    className: "Incretin research compound",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 1000,
    blurb:
      "A synthetic triple-incretin agonist active at GLP-1, GIP, and glucagon receptors, appearing in published phase-II/III incretin-pathway literature. Lyophilized vial.",
    productSlug: "retatrutide",
  },
  // ---- Broader high-search-volume research compounds (no catalog SKU yet) ----
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    aliases: ["selective GH secretagogue"],
    className: "Secretagogue peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 200,
    blurb:
      "A selective growth-hormone secretagogue and pentapeptide studied for ghrelin-receptor activity in research models. Lyophilized powder.",
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    aliases: ["CJC-1295 DAC", "GHRH analogue"],
    className: "Secretagogue peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 100,
    blurb:
      "A long-acting growth-hormone-releasing-hormone analogue studied in GH-axis research literature. Reconstituted from lyophilized powder.",
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    aliases: ["GHRH(1-44) analogue"],
    className: "Secretagogue peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 1000,
    blurb:
      "A stabilized growth-hormone-releasing-hormone analogue appearing in metabolic and GH-axis research literature. Lyophilized vial.",
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    aliases: ["GHRH(1-29)"],
    className: "Secretagogue peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 200,
    blurb:
      "A 29-amino-acid fragment representing the active sequence of growth-hormone-releasing hormone, studied in endocrine research. Reconstituted from lyophilized powder.",
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    aliases: ["Copper peptide", "GHK copper"],
    className: "Signal peptide",
    typicalVialMg: 50,
    typicalBacWaterMl: 5,
    typicalAliquotMcg: 2000,
    blurb:
      "A copper-binding tripeptide complex studied across skin-remodelling, wound-healing, and gene-expression research literature. Lyophilized.",
  },
  {
    slug: "ghrp-2",
    name: "GHRP-2",
    aliases: ["growth-hormone-releasing peptide 2", "pralmorelin"],
    className: "Secretagogue peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 100,
    blurb:
      "A synthetic hexapeptide growth-hormone secretagogue studied for ghrelin-receptor agonism in research models. Lyophilized vial.",
  },
  {
    slug: "ghrp-6",
    name: "GHRP-6",
    aliases: ["growth-hormone-releasing peptide 6"],
    className: "Secretagogue peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 100,
    blurb:
      "A first-generation hexapeptide GH secretagogue widely referenced in ghrelin-pathway research literature. Reconstituted from lyophilized powder.",
  },
  {
    slug: "hexarelin",
    name: "Hexarelin",
    aliases: ["examorelin"],
    className: "Secretagogue peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 100,
    blurb:
      "A synthetic hexapeptide growth-hormone secretagogue studied for potent ghrelin-receptor activity in research models. Lyophilized.",
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    aliases: ["mitochondrial-derived peptide"],
    className: "Mitochondrial peptide",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 1000,
    blurb:
      "A mitochondrial-derived peptide encoded within the 12S rRNA region, studied in metabolic-regulation and exercise-physiology research literature. Lyophilized vial.",
  },
  {
    slug: "epithalon",
    name: "Epithalon",
    aliases: ["Epitalon", "AEDG tetrapeptide"],
    className: "Bioregulator peptide",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 1000,
    blurb:
      "A synthetic tetrapeptide (Ala-Glu-Asp-Gly) studied for telomerase and pineal-regulation activity in gerontology research literature. Reconstituted from lyophilized powder.",
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    aliases: ["HGH fragment 177-191 analogue"],
    className: "Metabolic fragment",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 300,
    blurb:
      "A modified C-terminal fragment of human growth hormone studied for lipid-metabolism activity in research models. Lyophilized vial.",
  },
  {
    slug: "hgh-fragment-176-191",
    name: "HGH Fragment 176-191",
    aliases: ["HGH frag", "growth-hormone fragment"],
    className: "Metabolic fragment",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 250,
    blurb:
      "A C-terminal fragment of human growth hormone (residues 176-191) studied in lipolysis research literature. Reconstituted from lyophilized powder.",
  },
  {
    slug: "igf-1-lr3",
    name: "IGF-1 LR3",
    aliases: ["Long R3 IGF-1"],
    className: "Growth-factor analogue",
    typicalVialMg: 1,
    typicalBacWaterMl: 1,
    typicalAliquotMcg: 50,
    blurb:
      "A long-acting analogue of insulin-like growth factor 1 studied in cell-proliferation and signalling research. Supplied lyophilized; commonly reconstituted at low total mass.",
  },
  {
    slug: "melanotan-2",
    name: "Melanotan II",
    aliases: ["MT-2", "MT-II", "melanocortin agonist"],
    className: "Melanocortin peptide",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 250,
    blurb:
      "A synthetic cyclic analogue of alpha-MSH studied for melanocortin-receptor activity and melanogenesis in research literature. Lyophilized vial.",
  },
  {
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    aliases: ["Ta1", "thymalfasin"],
    className: "Immune peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 1500,
    blurb:
      "A 28-amino-acid peptide studied for immunomodulatory and T-cell-signalling activity across published research literature. Reconstituted from lyophilized powder.",
  },
  {
    slug: "kpv",
    name: "KPV",
    aliases: ["Lys-Pro-Val", "alpha-MSH C-terminal tripeptide"],
    className: "Anti-inflammatory tripeptide",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 500,
    blurb:
      "A C-terminal tripeptide of alpha-MSH studied for anti-inflammatory signalling in research models. Lyophilized vial.",
  },
  {
    slug: "ll-37",
    name: "LL-37",
    aliases: ["cathelicidin antimicrobial peptide"],
    className: "Antimicrobial peptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 100,
    blurb:
      "The human cathelicidin-derived antimicrobial peptide studied across host-defence and immunology research literature. Reconstituted from lyophilized powder.",
  },
  {
    slug: "ss-31",
    name: "SS-31",
    aliases: ["Elamipretide", "MTP-131"],
    className: "Mitochondrial peptide",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 1000,
    blurb:
      "A mitochondria-targeted tetrapeptide studied for cardiolipin interaction and bioenergetics in research literature. Lyophilized vial.",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    aliases: ["GLP-1/GIP dual agonist", "LY3298176"],
    className: "Incretin research compound",
    typicalVialMg: 10,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 1000,
    blurb:
      "A dual GLP-1/GIP receptor agonist appearing across published incretin-pathway and metabolic research literature. Reconstituted from lyophilized powder.",
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    aliases: ["GLP-1 receptor agonist"],
    className: "Incretin research compound",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 250,
    blurb:
      "A long-acting GLP-1 receptor agonist studied extensively in incretin-pathway and metabolic research literature. Lyophilized vial.",
  },
  {
    slug: "cagrilintide",
    name: "Cagrilintide",
    aliases: ["amylin analogue"],
    className: "Amylin research compound",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 300,
    blurb:
      "A long-acting amylin analogue studied alongside incretin compounds in metabolic-research literature. Reconstituted from lyophilized powder.",
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    aliases: ["nicotinamide adenine dinucleotide"],
    className: "Coenzyme",
    typicalVialMg: 100,
    typicalBacWaterMl: 5,
    typicalAliquotMcg: 50000,
    blurb:
      "A coenzyme central to cellular redox and metabolism, studied across longevity and mitochondrial-function research literature. Supplied lyophilized at high total mass.",
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    aliases: ["GSH", "reduced glutathione"],
    className: "Antioxidant tripeptide",
    typicalVialMg: 200,
    typicalBacWaterMl: 5,
    typicalAliquotMcg: 100000,
    blurb:
      "A reduced tripeptide antioxidant (Glu-Cys-Gly) studied in oxidative-stress and detoxification-pathway research literature. Lyophilized at high total mass.",
  },
  {
    slug: "mgf",
    name: "MGF",
    aliases: ["Mechano Growth Factor", "IGF-1Ec"],
    className: "Growth-factor splice variant",
    typicalVialMg: 2,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 100,
    blurb:
      "A splice variant of IGF-1 studied for its role in muscle-tissue mechanotransduction research. Reconstituted from lyophilized powder.",
  },
  {
    slug: "kisspeptin-10",
    name: "Kisspeptin-10",
    aliases: ["KP-10", "metastin fragment"],
    className: "Neuropeptide",
    typicalVialMg: 5,
    typicalBacWaterMl: 2,
    typicalAliquotMcg: 100,
    blurb:
      "A decapeptide fragment of kisspeptin studied for its role in HPG-axis and reproductive-signalling research literature. Lyophilized vial.",
  },
];

export const RECONSTITUTION_SLUGS = RECONSTITUTION_COMPOUNDS.map((c) => c.slug);

/** Look up a compound by slug for the dynamic route. */
export function getCompound(slug: string): ReconstitutionCompound | undefined {
  return RECONSTITUTION_COMPOUNDS.find((c) => c.slug === slug);
}

// Defensive: only surface internal links the build can actually resolve so the
// programmatic pages never link to a 404 if the catalog/article lists change.
const PRODUCT_SLUG_SET = new Set(PRODUCTS.map((p) => p.slug));
const RESEARCH_SLUG_SET = new Set(RESEARCH_ARTICLE_SLUGS);
const BLOG_SLUG_SET = new Set(BLOG_SLUGS);

export function resolveCompoundLinks(c: ReconstitutionCompound) {
  return {
    product:
      c.productSlug && PRODUCT_SLUG_SET.has(c.productSlug)
        ? { slug: c.productSlug, name: PRODUCTS.find((p) => p.slug === c.productSlug)!.name }
        : undefined,
    research:
      c.researchSlug && RESEARCH_SLUG_SET.has(c.researchSlug) ? c.researchSlug : undefined,
    blog: c.blogSlug && BLOG_SLUG_SET.has(c.blogSlug) ? c.blogSlug : undefined,
  };
}
