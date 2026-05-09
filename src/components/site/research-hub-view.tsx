import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import type { ResearchHub, ResearchSpoke } from "@/lib/research-hubs";

export function ResearchHubView({ hub }: { hub: ResearchHub }) {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${hub.title} — Titan Peptide Lab`,
    itemListElement: hub.spokes.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `/research/${hub.slug}/${s.slug}`,
      name: s.title,
    })),
  };

  return (
    <>
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />

        <section className="border-b border-[#d9dfd5]">
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-14 lg:pt-24">
            <Link
              href="/research"
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74] transition-colors hover:text-[#1e6f58]"
            >
              ← Research index
            </Link>
            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
              §Research hub — {hub.slug}
            </div>
            <h1 className="mt-4 font-serif text-[clamp(2.2rem,5.4vw,4.4rem)] font-normal leading-[1] tracking-[-0.025em] text-pretty">
              {hub.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-[1.7] text-[#4a5852]">
              {hub.intro}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-[1.7] text-[#6d7b74]">
              Audience: {hub.audience}.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
          <div className="border-b border-[#d9dfd5] pb-4 pt-12 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a9791]">
            Spoke index — {hub.spokes.length} entries
          </div>
          <ol className="divide-y divide-[#d9dfd5]">
            {hub.spokes.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/research/${hub.slug}/${s.slug}`}
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-x-6 py-7 sm:gap-x-8"
                >
                  <span className="font-mono text-[11px] tabular-nums text-[oklch(0.68_0.17_78)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl font-normal leading-tight transition-colors group-hover:text-[oklch(0.68_0.17_78)] md:text-[26px]">
                      {s.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-[1.7] text-[#4a5852]">
                      {s.blurb}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="hidden self-center text-right font-mono text-[11px] uppercase tracking-[0.16em] text-[#8a9791] transition-colors group-hover:text-[oklch(0.68_0.17_78)] sm:block"
                  >
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-[#d9dfd5] bg-[#f4f1eb]">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:py-14">
            <p className="max-w-3xl text-sm leading-[1.7] text-[#4a5852]">
              All entries reference primary literature and are written for
              qualified research audiences. Compounds referenced are sold for{" "}
              <em>in-vitro</em> research use only.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function ResearchSpokeView({
  hub,
  spoke,
}: {
  hub: ResearchHub;
  spoke: ResearchSpoke;
}) {
  return (
    <>
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <section className="border-b border-[#d9dfd5]">
          <div className="mx-auto max-w-3xl px-6 pt-16 pb-12 lg:pt-24">
            <Link
              href={`/research/${hub.slug}`}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74] transition-colors hover:text-[#1e6f58]"
            >
              ← {hub.title}
            </Link>
            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
              §{hub.slug} / {spoke.slug}
            </div>
            <h1 className="mt-4 font-serif text-[clamp(1.8rem,4.4vw,3.2rem)] font-normal leading-[1.05] tracking-[-0.02em] text-pretty">
              {spoke.title}
            </h1>
            <p className="mt-6 text-base leading-[1.75] text-[#4a5852]">
              {spoke.blurb}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-md border border-[#e0d9c4] bg-[#f4ecdc] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#7a5a1e]">
              Stub entry — full literature pointer pending
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-[1.7] text-[#6d7b74]">
              This page reserves the route while primary references and
              methodology notes are compiled. Vendor-neutral, research-use only.
            </p>
          </div>
        </section>

        <section className="border-t border-[#d9dfd5] bg-[#f4f1eb]">
          <div className="mx-auto max-w-3xl px-6 py-12 lg:py-14">
            <p className="text-sm leading-[1.7] text-[#4a5852]">
              Compounds referenced anywhere on Titan Peptide Lab are sold for{" "}
              <em>in-vitro</em> research use only. Nothing here is medical,
              clinical, or regulatory advice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
