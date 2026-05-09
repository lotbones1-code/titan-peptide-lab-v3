import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchSpokeView } from "@/components/site/research-hub-view";
import { findResearchHub, findResearchSpoke } from "@/lib/research-hubs";

const HUB_SLUG = "longevity";

export function generateStaticParams() {
  const hub = findResearchHub(HUB_SLUG);
  if (!hub) return [];
  return hub.spokes.map((s) => ({ spoke: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ spoke: string }>;
}): Promise<Metadata> {
  const { spoke } = await params;
  const found = findResearchSpoke(HUB_SLUG, spoke);
  if (!found) return { title: "Research — Titan Peptide Laboratory" };
  return {
    title: `${found.spoke.title} — ${found.hub.title}`,
    description: found.spoke.blurb,
    alternates: { canonical: `/research/${HUB_SLUG}/${found.spoke.slug}` },
    robots: { index: true, follow: true },
  };
}

export default async function SpokePage({
  params,
}: {
  params: Promise<{ spoke: string }>;
}) {
  const { spoke } = await params;
  const found = findResearchSpoke(HUB_SLUG, spoke);
  if (!found) notFound();
  return <ResearchSpokeView hub={found.hub} spoke={found.spoke} />;
}
