import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/checkout/success"],
      },
    ],
    sitemap: "https://www.titanpeptidelab.com/sitemap.xml",
  };
}
