import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { COA_RECORDS, findCoaRecord } from "@/lib/coa";

export function generateStaticParams() {
  return COA_RECORDS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = findCoaRecord(slug);
  if (!record) return { title: "COA — Titan Peptide Laboratory" };
  return {
    title: `${record.name} — COA archive`,
    description: `Lot-level certificate-of-analysis archive for ${record.name}. Pending vendor-neutral third-party report.`,
    alternates: { canonical: `/coa-archive/${record.slug}` },
    robots: { index: true, follow: true },
  };
}

export default async function CoaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const record = findCoaRecord(slug);
  if (!record) notFound();

  const datasetLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${record.name} — analytical archive`,
    identifier: record.sku,
    url: `/coa-archive/${record.slug}`,
    description: `Lot-level analytical records for ${record.name}. Status: pending third-party report.`,
    creator: { "@type": "Organization", name: "Titan Peptide Lab" },
    distribution: [],
  };

  return (
    <>
      <Nav />
      <main className="bg-[#fbf8f2] text-[#13211c]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }}
        />

        <section className="border-b border-[#d9dfd5]">
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-14 lg:pt-24">
            <Link
              href="/coa-archive"
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74] transition-colors hover:text-[#1e6f58]"
            >
              ← COA Archive
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-block rounded bg-[#eef2eb] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#324030]">
                {record.category}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8a9791]">
                SKU · {record.sku}
              </span>
              <span className="inline-block rounded bg-[#f4ecdc] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#7a5a1e]">
                Report pending
              </span>
            </div>
            <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.6rem)] font-normal leading-[1.02] tracking-[-0.02em] text-pretty">
              {record.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-[1.7] text-[#4a5852]">
              Lot-level analytical record. PDF and chromatogram slots are
              reserved against the lot identifiers below; reports are pending
              an independent third-party laboratory ({record.thirdPartyLab}).
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74]">
                Certificate (PDF)
              </div>
              <div className="mt-3 flex aspect-[8.5/11] w-full items-center justify-center rounded-md border border-dashed border-[#bcc6bd] bg-[#f4f1eb] text-center">
                <p className="px-6 text-sm leading-[1.7] text-[#6d7b74]">
                  PDF pending Janoshik third-party analysis. Embed slot reserved.
                </p>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74]">
                Chromatogram
              </div>
              <div className="mt-3 flex aspect-[8.5/11] w-full items-center justify-center rounded-md border border-dashed border-[#bcc6bd] bg-[#f4f1eb] text-center">
                <p className="px-6 text-sm leading-[1.7] text-[#6d7b74]">
                  HPLC chromatogram pending. Image slot reserved.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#d9dfd5]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74]">
              Lot register
            </div>
            <h2 className="mt-3 font-serif text-2xl font-normal leading-tight md:text-3xl">
              Lot numbers and analytical status
            </h2>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#d9dfd5] font-mono text-[10px] uppercase tracking-[0.16em] text-[#6d7b74]">
                    <th className="py-3 pr-4 font-normal">Lot</th>
                    <th className="py-3 pr-4 font-normal">Manufactured</th>
                    <th className="py-3 pr-4 font-normal">Status</th>
                    <th className="py-3 font-normal">Document</th>
                  </tr>
                </thead>
                <tbody>
                  {record.lots.map((lot, i) => (
                    <tr key={i} className="border-b border-[#e8eee6]">
                      <td className="py-4 pr-4 font-mono text-[#13211c]">{lot.lot}</td>
                      <td className="py-4 pr-4 text-[#4a5852]">{lot.manufactured}</td>
                      <td className="py-4 pr-4 capitalize text-[#7a5a1e]">{lot.status}</td>
                      <td className="py-4 font-mono text-[12px] text-[#8a9791]">—</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-[1.7] text-[#6d7b74]">
              When a third-party report is filed against a lot, the document
              column will link to the corresponding PDF and chromatogram.
            </p>
          </div>
        </section>

        <section className="border-t border-[#d9dfd5]">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74]">
              Assays scoped
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {record.testedAssays.map((a) => (
                <li
                  key={a}
                  className="rounded-md border border-[#e0e6dc] bg-white px-4 py-3 text-sm text-[#4a5852]"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[#d9dfd5] bg-[#f4f1eb]">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
            <p className="max-w-3xl text-sm leading-[1.7] text-[#4a5852]">
              Records are provided for qualified research use only. Compounds
              referenced are sold for <em>in-vitro</em> research; nothing on this
              page is medical, clinical, or regulatory advice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
