import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { NextRead } from "@/components/site/next-read";
import { BreadcrumbJsonLd } from "@/components/site/json-ld";
import { ResearchAssistant } from "@/components/site/research-assistant";

const TITLE = "Peptide Research Assistant — Titan Peptide Lab";
const DESCRIPTION =
  "Tell us your research area and see which peptides the published literature discusses for it — each with a neutral summary, a real PubMed citation, and a link to the matching research compound. Research use only; not medical advice.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/research-assistant/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/research-assistant/",
    type: "website" as const,
  },
};

const TRUST = [
  "Every citation links to PubMed",
  "Research-framed, never diagnostic",
  "Maps to lot-release-documented compounds",
];

export default function ResearchAssistantPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Research Assistant", item: "/research-assistant/" },
        ]}
      />
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <PageHero
          eyebrow="Research assistant"
          title={
            <>
              What are you
              <br />
              <em className="not-italic text-[#1e6f58]">researching</em>?
            </>
          }
          supporting={
            <>
              Describe the area you&rsquo;re studying and this guided tool shows
              the peptides the published research literature discusses for it —
              with a neutral summary, a real citation you can open on PubMed, and
              a link to the matching research compound. It is an educational
              index, not medical advice and not a diagnosis.
            </>
          }
          below={
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {TRUST.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]"
                >
                  <span className="size-1.5 rounded-full bg-[#1e6f58]" />
                  {item}
                </li>
              ))}
            </ul>
          }
        />

        <ResearchAssistant />

        <NextRead
          eyebrow="Documentation"
          title="See how every batch is tested before it ships"
          href="/lab-testing/"
          blurb="Identity by mass spec, purity by HPLC, sterility, endotoxin and heavy metals — and the exact lot-tied certificate that proves it. The literature tells you what's studied; the COA tells you what's in the bottle."
        />
      </main>
      <Footer />
    </>
  );
}
