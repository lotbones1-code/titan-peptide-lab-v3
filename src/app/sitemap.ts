import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://www.titanpeptidelab.com";

const BLOG_SLUGS = [
  "fda-peptide-reclassification-2026",
  "peptide-nasal-sprays-trending-2026",
  "peptide-trends-2026-research-compounds",
  "bpc-157-nasal-spray-complete-guide",
  "where-to-buy-peptide-nasal-sprays",
  "semax-vs-selank-neuropeptide-comparison",
  "how-to-read-peptide-coa",
  "peptide-nasal-sprays-vs-injections",
  "pt-141-nasal-spray-research-guide",
  "dsip-nasal-spray-delta-sleep-peptide",
  "oxytocin-nasal-spray-research",
  "best-peptide-stacks-research-guide",
  "peptide-storage-guide",
  "peptide-nasal-spray-benefits",
  "beginners-guide-nootropic-peptides",
  "how-to-verify-peptide-purity",
];

const PRODUCT_SLUGS = [
  "bpc-157-nasal-spray",
  "bpc-157-injectable",
  "cjc-1295-ipamorelin",
  "dsip-nasal-spray",
  "oxytocin-nasal-spray",
  "pt-141-nasal-spray",
  "retatrutide",
  "selank-semax-stack",
  "selank-nasal-spray",
  "semax-nasal-spray",
  "tb-500-injectable",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/lab-testing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/checkout`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/guide`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  for (const slug of PRODUCT_SLUGS) {
    pages.push({
      url: `${BASE}/products/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  for (const slug of BLOG_SLUGS) {
    pages.push({
      url: `${BASE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return pages;
}
