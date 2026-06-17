// Canonical source of truth for the /blog/<slug>/ buyer-guide posts.
//
// Both the blog index page (src/app/blog/page.tsx) and the machine-readable
// site guides (src/app/llms.txt + src/app/llms-full.txt) import this list so
// they can never desync — the same single-source pattern lib/research-articles.ts
// already uses for /research/ routes and lib/products.ts uses for product routes.
//
// Each slug below MUST have a matching route directory at
// src/app/blog/<slug>/page.tsx, otherwise the sitemap and llms guides would
// advertise a 404. Previously this list lived inline in blog/page.tsx AND was
// duplicated by hand in sitemap.ts and public/llms-full.txt — that drift is
// exactly what produced 5 dead blog URLs in llms-full.txt (fixed 2026-06-16).

export type BlogPost = {
  slug: string;
  n: string;
  title: string;
  subtitle: string;
  category: string;
  readingTime: string;
  date: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "fda-peptide-reclassification-2026",
    n: "01",
    title: "FDA Peptide Reclassification 2026: What It Means for Nasal Sprays",
    subtitle:
      "In February 2026, HHS moved 14 previously restricted peptides back to legal compounding status. Here's what changed, which peptides are affected, and what it means for nasal spray research.",
    category: "Regulatory Update",
    readingTime: "9 min",
    date: "2026-04-25",
  },
  {
    slug: "peptide-nasal-sprays-trending-2026",
    n: "02",
    title: "Why Peptide Nasal Sprays Are Exploding in 2026",
    subtitle:
      "From niche biohacker protocol to 10.1 million monthly searches — peptide nasal sprays are the fastest-growing segment in the peptide market. Here's what's driving the surge.",
    category: "Trend Analysis",
    readingTime: "8 min",
    date: "2026-04-25",
  },
  {
    slug: "peptide-trends-2026-research-compounds",
    n: "03",
    title: "Peptide Trends 2026: The Research Compounds Everyone's Talking About",
    subtitle:
      "From BPC-157 to GHK-Cu, the peptide market hit $164 billion in 2026. Here are the compounds driving the research boom, what the data says, and where the market is heading.",
    category: "Market Analysis",
    readingTime: "10 min",
    date: "2026-04-25",
  },
  {
    slug: "bpc-157-nasal-spray-complete-guide",
    n: "04",
    title: "BPC-157 Nasal Spray: Complete Guide (2026)",
    subtitle:
      "Everything researchers need to know about BPC-157 nasal spray — dosing, purity, sourcing, and what the literature actually says.",
    category: "Guide",
    readingTime: "11 min",
    date: "2026-04-25",
  },
  {
    slug: "where-to-buy-peptide-nasal-sprays",
    n: "05",
    title: "Where to Buy Peptide Nasal Sprays in the US",
    subtitle:
      "A sourcing guide for researchers looking for lab-grade peptide nasal sprays with verified purity and proper documentation.",
    category: "Buying Guide",
    readingTime: "10 min",
    date: "2026-04-25",
  },
  {
    slug: "semax-vs-selank-neuropeptide-comparison",
    n: "06",
    title: "Semax vs Selank: Which Neuropeptide Is Right for Your Research?",
    subtitle:
      "A head-to-head comparison of two Russian-developed neuropeptides — mechanisms, study applications, and stacking considerations.",
    category: "Comparison",
    readingTime: "12 min",
    date: "2026-04-25",
  },
  {
    slug: "how-to-read-peptide-coa",
    n: "07",
    title: "How to Read a Peptide COA (Certificate of Analysis)",
    subtitle:
      "A practical walkthrough of HPLC chromatograms, mass spec data, and purity metrics — so you know exactly what you are buying.",
    category: "Education",
    readingTime: "9 min",
    date: "2026-04-25",
  },
  {
    slug: "peptide-nasal-sprays-vs-injections",
    n: "08",
    title:
      "Peptide Nasal Sprays vs Injections: Which Delivery Method Is Better?",
    subtitle:
      "Bioavailability, convenience, and research applications — comparing the two dominant peptide delivery methods.",
    category: "Comparison",
    readingTime: "10 min",
    date: "2026-04-25",
  },
  {
    slug: "pt-141-nasal-spray-research-guide",
    n: "09",
    title: "PT-141 Nasal Spray: Mechanism, Research, and What You Need to Know",
    subtitle:
      "From melanocortin pathways to sourcing criteria — what researchers need to know about PT-141 (Bremelanotide) in intranasal format.",
    category: "Guide",
    readingTime: "11 min",
    date: "2026-04-25",
  },
  {
    slug: "dsip-nasal-spray-delta-sleep-peptide",
    n: "10",
    title: "DSIP Nasal Spray: The Delta Sleep Peptide Explained",
    subtitle:
      "From its accidental discovery in 1977 to modern sleep architecture research — a complete look at the peptide that modulates deep sleep without sedation.",
    category: "Guide",
    readingTime: "10 min",
    date: "2026-04-25",
  },
  {
    slug: "oxytocin-nasal-spray-research",
    n: "11",
    title: "Oxytocin Nasal Spray: Beyond 'The Love Hormone'",
    subtitle:
      "The popular narrative reduces oxytocin to a bonding chemical. The science tells a more complex and more interesting story.",
    category: "Guide",
    readingTime: "12 min",
    date: "2026-04-25",
  },
  {
    slug: "best-peptide-stacks-research-guide",
    n: "12",
    title: "Best Peptide Stacks for Research: Beginner's Guide to Combining Compounds",
    subtitle:
      "Why researchers combine peptides, which combinations have mechanistic rationale, and how to design protocols that account for the unknown.",
    category: "Guide",
    readingTime: "12 min",
    date: "2026-04-25",
  },
  {
    slug: "peptide-storage-guide",
    n: "13",
    title: "Peptide Storage Guide: How to Keep Your Research Compounds Stable",
    subtitle:
      "Temperature, light, reconstitution stability, and compound-specific protocols — everything you need to keep research peptides intact.",
    category: "Education",
    readingTime: "9 min",
    date: "2026-04-25",
  },
  {
    slug: "peptide-nasal-spray-benefits",
    n: "14",
    title: "5 Benefits of Peptide Nasal Sprays Over Injections",
    subtitle:
      "Bioavailability, convenience, pain-free dosing, precision, and compliance — a research-focused breakdown of why nasal delivery is reshaping how researchers work with peptides.",
    category: "Comparison",
    readingTime: "10 min",
    date: "2026-04-25",
  },
  {
    slug: "beginners-guide-nootropic-peptides",
    n: "15",
    title: "The Beginner's Guide to Nootropic Peptides: Selank vs Semax",
    subtitle:
      "What nootropic peptides are, how they interact with the brain, and an honest head-to-head between Selank and Semax — mechanisms, research findings, and stacking considerations.",
    category: "Guide",
    readingTime: "13 min",
    date: "2026-04-25",
  },
  {
    slug: "how-to-verify-peptide-purity",
    n: "16",
    title: "How to Verify Peptide Purity: A Researcher's Guide to COAs",
    subtitle:
      "What a Certificate of Analysis actually tells you, how to read HPLC chromatograms and mass spec data, what red flags to watch for, and why third-party testing matters.",
    category: "Education",
    readingTime: "12 min",
    date: "2026-04-25",
  },
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);
