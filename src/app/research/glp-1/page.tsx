import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchHubView } from "@/components/site/research-hub-view";
import { findResearchHub } from "@/lib/research-hubs";

const HUB_SLUG = "glp-1";

export async function generateMetadata(): Promise<Metadata> {
  const hub = findResearchHub(HUB_SLUG);
  if (!hub) return { title: "Research — Titan Peptide Laboratory" };
  return {
    title: `${hub.title} — Titan Peptide Laboratory`,
    description: hub.intro,
    alternates: { canonical: `/research/${HUB_SLUG}` },
    robots: { index: true, follow: true },
  };
}

export default function HubPage() {
  const hub = findResearchHub(HUB_SLUG);
  if (!hub) notFound();
  return <ResearchHubView hub={hub} />;
}
