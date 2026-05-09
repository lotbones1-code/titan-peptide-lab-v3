// Research hub registry — 5 ICP hubs, 30 spokes total. Phase 1 stubs.
// Vendor-neutral, research-use-only voice. No claims, no marketing language.

export type ResearchSpoke = {
  slug: string;
  title: string;
  blurb: string;
};

export type ResearchHub = {
  slug: string;
  title: string;
  audience: string;
  intro: string;
  spokes: ResearchSpoke[];
};

export const RESEARCH_HUBS: ResearchHub[] = [
  {
    slug: "recovery",
    title: "Recovery research",
    audience: "Investigators studying soft-tissue, gut-mucosal, and post-injury repair",
    intro:
      "Literature pointers for researchers examining peptide candidates in tissue-repair, inflammation-modulation, and post-surgical recovery contexts. Entries summarize methodology and primary references; no protocols, claims, or human-use guidance.",
    spokes: [
      {
        slug: "post-surgical-protocols",
        title: "Post-surgical recovery models",
        blurb: "Animal and ex-vivo work on candidate peptides in surgical-wound and anastomotic-healing models.",
      },
      {
        slug: "tendon-ligament-repair",
        title: "Tendon and ligament repair literature",
        blurb: "Pre-clinical evidence for peptide candidates in collagen turnover and tenocyte proliferation studies.",
      },
      {
        slug: "gut-mucosal-healing",
        title: "Gut-mucosal healing studies",
        blurb: "Rodent IBD and ulcer-recovery models; emphasis on epithelial restitution endpoints.",
      },
      {
        slug: "athlete-soft-tissue",
        title: "Athletic soft-tissue research",
        blurb: "Survey of biomechanical and recovery-marker outcomes used in athletic-tissue research literature.",
      },
      {
        slug: "inflammation-modulation",
        title: "Inflammation-modulation pathways",
        blurb: "TNF-alpha, IL-6, and NF-kB axis literature relevant to recovery-phase peptide investigation.",
      },
      {
        slug: "sleep-driven-recovery",
        title: "Sleep-driven recovery overlap",
        blurb: "Where slow-wave sleep, HPA-axis dampening, and recovery-marker research converge.",
      },
    ],
  },
  {
    slug: "longevity",
    title: "Longevity research",
    audience: "Investigators tracking healthspan, metabolic resilience, and aging biomarkers",
    intro:
      "Bibliography pointers for longevity researchers — autophagy, mitochondrial density, senescence markers. Entries map terminology and primary literature; no human protocol or supplement positioning.",
    spokes: [
      {
        slug: "mitochondrial-density",
        title: "Mitochondrial density and biogenesis",
        blurb: "PGC-1alpha and mitochondrial-biogenesis assay literature.",
      },
      {
        slug: "senescence-markers",
        title: "Senescence-marker panels",
        blurb: "p16, SASP, and senolytic-screening assay overview.",
      },
      {
        slug: "telomere-research",
        title: "Telomere-length research",
        blurb: "Telomerase, T/S ratio, and longitudinal-cohort methodology notes.",
      },
      {
        slug: "growth-hormone-axis",
        title: "Growth-hormone axis literature",
        blurb: "GHRH, GHRP, and IGF-1 signaling investigation references.",
      },
      {
        slug: "sirtuin-pathways",
        title: "Sirtuin and NAD+ pathway research",
        blurb: "Sirtuin-family enzyme literature and NAD+ precursor study designs.",
      },
      {
        slug: "autophagy-protocols",
        title: "Autophagy assay protocols",
        blurb: "LC3, p62, and autophagic-flux assay references.",
      },
    ],
  },
  {
    slug: "glp-1",
    title: "GLP-1 research",
    audience: "Investigators studying incretin-axis pharmacology and metabolic endpoints",
    intro:
      "Reference index for GLP-1, GIP, and dual/triple-incretin receptor research. Comparative pharmacology and assay-design literature only. No human-use, dosing, or compounding guidance.",
    spokes: [
      {
        slug: "semaglutide-mechanism",
        title: "Semaglutide mechanism literature",
        blurb: "GLP-1R agonism, beta-cell, and central-satiety mechanism references.",
      },
      {
        slug: "retatrutide-comparative",
        title: "Retatrutide comparative-pharmacology research",
        blurb: "Triple-agonist receptor binding and rodent comparative-efficacy literature.",
      },
      {
        slug: "tirzepatide-research",
        title: "Tirzepatide research",
        blurb: "GLP-1 / GIP dual-agonist binding and pre-clinical comparative work.",
      },
      {
        slug: "glp1-cardiometabolic",
        title: "GLP-1 cardiometabolic endpoints",
        blurb: "Cardiometabolic biomarker survey across published GLP-1R agonist research.",
      },
      {
        slug: "glp1-cognition-overlap",
        title: "GLP-1 / cognition overlap",
        blurb: "Cross-domain pre-clinical literature where incretin signaling intersects with neurological endpoints.",
      },
      {
        slug: "glp1-injection-vs-nasal",
        title: "Delivery-route comparative literature",
        blurb: "Pharmacokinetic comparisons across delivery routes in published research.",
      },
    ],
  },
  {
    slug: "cognitive",
    title: "Cognitive research",
    audience: "Investigators studying neuroplasticity, neurotrophic factors, and anxiolytic mechanisms",
    intro:
      "Pointer index for neurotrophic, anxiolytic, and neuroplasticity research. BDNF, NGF, GABA-modulator, and dopaminergic-pathway literature; references only, no clinical positioning.",
    spokes: [
      {
        slug: "bdnf-upregulation",
        title: "BDNF upregulation literature",
        blurb: "Pre-clinical assay designs measuring BDNF transcriptional and protein-level response.",
      },
      {
        slug: "dopaminergic-modulation",
        title: "Dopaminergic-modulation research",
        blurb: "Receptor-binding and microdialysis literature relevant to dopaminergic peptide research.",
      },
      {
        slug: "cholinergic-research",
        title: "Cholinergic-pathway research",
        blurb: "Acetylcholine, alpha-7 nAChR, and cholinergic-modulator references.",
      },
      {
        slug: "anxiolytic-without-sedation",
        title: "Non-sedating anxiolytic literature",
        blurb: "Comparative survey of anxiolytic-class research without GABA-A direct agonism.",
      },
      {
        slug: "neuroplasticity-stack",
        title: "Neuroplasticity research overview",
        blurb: "Synaptic-plasticity, LTP, and neurogenesis assay-method overview.",
      },
      {
        slug: "memory-consolidation",
        title: "Memory-consolidation literature",
        blurb: "Hippocampal-dependent memory paradigms and primary-reference index.",
      },
    ],
  },
  {
    slug: "clinic",
    title: "Clinic-facing research operations",
    audience: "Wellness clinics and research practitioners evaluating Titan as a research-supply partner",
    intro:
      "Operations-side reference notes for clinic and B2B research buyers — onboarding, evaluation kits, cold-chain logistics, and lot traceability. No promotional language, no patient-facing claims.",
    spokes: [
      {
        slug: "clinic-onboarding-protocols",
        title: "Clinic onboarding protocols",
        blurb: "Documentation, license-verification, and intake checklist for clinic accounts.",
      },
      {
        slug: "eval-kit-standards",
        title: "Evaluation-kit standards",
        blurb: "Paid evaluation-kit configurations available to qualifying clinics.",
      },
      {
        slug: "b2b-cold-chain",
        title: "B2B cold-chain logistics",
        blurb: "Cold-chain handling, packaging, and shipment-tracking standards for clinic shipments.",
      },
      {
        slug: "compliance-recordkeeping",
        title: "Compliance recordkeeping",
        blurb: "Recordkeeping references relevant to research-use procurement.",
      },
      {
        slug: "lot-traceability-clinic",
        title: "Lot-level traceability",
        blurb: "Per-lot COA, lot-tracking, and recall-readiness references.",
      },
      {
        slug: "clinician-faq",
        title: "Clinician research FAQ",
        blurb: "Common questions from clinician-side research operators evaluating supply.",
      },
    ],
  },
];

export function findResearchHub(slug: string): ResearchHub | undefined {
  return RESEARCH_HUBS.find((h) => h.slug === slug);
}

export function findResearchSpoke(
  hubSlug: string,
  spokeSlug: string,
): { hub: ResearchHub; spoke: ResearchSpoke } | undefined {
  const hub = findResearchHub(hubSlug);
  if (!hub) return undefined;
  const spoke = hub.spokes.find((s) => s.slug === spokeSlug);
  if (!spoke) return undefined;
  return { hub, spoke };
}
