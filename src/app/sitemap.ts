import type { MetadataRoute } from "next";
import { COA_RECORDS } from "@/lib/coa";
import { BRAND, PRODUCTS } from "@/lib/products";
import { RESEARCH_HUBS } from "@/lib/research-hubs";

const baseUrl = `https://${BRAND.domain}`;

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/lab-testing",
  "/products",
  "/research",
  "/shipping-faq",
  "/coa-archive",
];

const legacyResearchRoutes = [
  "/research/bpc-157-nasal-spray",
  "/research/dsip-sleep-recovery",
  "/research/nasal-stack-protocols",
  "/research/oxytocin-bonding-social",
  "/research/pt-141-research",
  "/research/selank-anxiolytic-nootropic",
  "/research/semax-cognition-neuroplasticity",
];

function routeEntry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
): MetadataRoute.Sitemap[number] {
  return {
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes = PRODUCTS.map((product) =>
    routeEntry(`/products/${product.slug}`, product.featured ? 0.9 : 0.7, "weekly"),
  );

  const coaRoutes = COA_RECORDS.map((record) =>
    routeEntry(`/coa-archive/${record.slug}`, 0.55, "monthly"),
  );

  const researchHubRoutes = RESEARCH_HUBS.flatMap((hub) => [
    routeEntry(`/research/${hub.slug}`, 0.65, "monthly"),
    ...hub.spokes.map((spoke) =>
      routeEntry(`/research/${hub.slug}/${spoke.slug}`, 0.5, "monthly"),
    ),
  ]);

  return [
    ...staticRoutes.map((path) => routeEntry(path, path === "/" ? 1 : 0.75, "weekly")),
    ...productRoutes,
    ...legacyResearchRoutes.map((path) => routeEntry(path, 0.6, "monthly")),
    ...coaRoutes,
    ...researchHubRoutes,
  ];
}
