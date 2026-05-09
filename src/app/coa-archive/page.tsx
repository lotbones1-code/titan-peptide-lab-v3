import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { COA_RECORDS } from "@/lib/coa";

export const metadata: Metadata = {
  title: "COA Archive — Titan Peptide Laboratory",
  description:
    "Per-SKU certificate-of-analysis archive. Lot-level analytical records pending vendor-neutral third-party reporting.",
  alternates: { canonical: "/coa-archive" },
  robots: { index: true, follow: true },
};

export default function CoaArchiveIndex() {
  const datasetLd = {
    "@context": "https://schema.org",
    "@type": "DataCatalog",
    name: "Titan Peptide Lab COA Archive",
    description:
      "Per-SKU, per-lot certificate-of-analysis archive for research-use compounds.",
    url: "/coa-archive",
    dataset: COA_RECORDS.map((r) => ({
      "@type": "Dataset",
      name: `${r.name} — analytical archive`,
      identifier: r.sku,
      url: `/coa-archive/${r.slug}`,
      description: `Lot-level analytical records for ${r.name}. Status: pending third-party report.`,
    })),
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
          <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:pt-28">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6d7b74]">
              §COA Archive — Lot-level analytical records
            </div>
            <h1 className="mt-6 font-serif text-[clamp(2.4rem,5.5vw,4.4rem)] font-normal leading-[0.98] tracking-[-0.025em] text-pretty">
              Certificates of analysis,
              <br />
              <em className="italic text-[oklch(0.68_0.17_78)]">archived per lot.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-[1.7] text-[#4a5852]">
              Each SKU listed below has a placeholder analytical record. PDFs and
              chromatograms are pending receipt from an independent third-party
              laboratory. When reports land, they will be filed against the lot
              numbers shown on the per-SKU page.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-[1.7] text-[#6d7b74]">
              Compounds listed here are sold for <em>in-vitro</em> research use
              only. This archive is not a label, dosing guide, or clinical document.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
          <div className="border-b border-[#d9dfd5] pb-4 pt-12">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a9791]">
              Index — {COA_RECORDS.length} SKUs
            </div>
          </div>

          <ul className="divide-y divide-[#d9dfd5]">
            {COA_RECORDS.map((r, i) => (
              <li key={r.slug}>
                <Link
                  href={`/coa-archive/${r.slug}`}
                  className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-x-6 py-7 sm:gap-x-8"
                >
                  <span className="font-mono text-[11px] tabular-nums text-[oklch(0.68_0.17_78)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="inline-block rounded bg-[#eef2eb] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#324030]">
                        {r.category}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8a9791]">
                        SKU · {r.sku}
                      </span>
                      <span className="inline-block rounded bg-[#f4ecdc] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#7a5a1e]">
                        PDF pending
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl font-normal leading-tight transition-colors group-hover:text-[oklch(0.68_0.17_78)] md:text-[28px]">
                      {r.name}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-[1.7] text-[#4a5852]">
                      Lot-level analytical record. {r.testedAssays.length} standard
                      assays scoped per lot. Awaiting independent third-party report.
                    </p>
                  </div>

                  <span
                    aria-hidden
                    className="hidden self-center text-right font-mono text-[11px] uppercase tracking-[0.16em] text-[#8a9791] transition-colors group-hover:text-[oklch(0.68_0.17_78)] sm:block"
                  >
                    View →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-[#d9dfd5] bg-[#f4f1eb]">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74]">
                  Third-party scope
                </div>
                <p className="mt-3 text-sm leading-[1.7] text-[#4a5852]">
                  HPLC purity, mass-spectrometry identity, endotoxin (LAL), and
                  bioburden are scoped at the lot level. Vendor-neutral reporting.
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74]">
                  Lot traceability
                </div>
                <p className="mt-3 text-sm leading-[1.7] text-[#4a5852]">
                  Each shipment carries a lot identifier traceable to the per-SKU
                  archive. New lots are appended chronologically.
                </p>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7b74]">
                  Disclaimer
                </div>
                <p className="mt-3 text-sm leading-[1.7] text-[#4a5852]">
                  Records are provided for qualified research use only. Nothing in
                  this archive constitutes medical, clinical, or regulatory advice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
