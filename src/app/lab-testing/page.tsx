import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { NextRead } from "@/components/site/next-read";

const LAB_TITLE = "Lab Testing — Titan Peptide Lab";
const LAB_DESCRIPTION =
  "The in-house analytical release checks documented on each lot-release sheet — identity, purity, sterility, endotoxin, and residue screening — and how the lot documentation is produced.";

export const metadata = {
  title: LAB_TITLE,
  description: LAB_DESCRIPTION,
  alternates: { canonical: "/lab-testing/" },
  openGraph: { title: LAB_TITLE, description: LAB_DESCRIPTION, url: "/lab-testing/", type: "website" as const },
};

const TESTS = [
  {
    n: "01",
    name: "Identity",
    method: "Mass-spectrometry identity check",
    spec: "Observed mass recorded against the theoretical [M+H] for the labeled compound",
    body: "Confirms the compound in the bottle is the compound on the label. Purity of the wrong molecule is still a failed batch.",
  },
  {
    n: "02",
    name: "Purity",
    method: "HPLC-UV purity check",
    spec: "Release target ≥ 99% main-peak area; lots below target are held",
    body: "The number most buyers look for first. The release value is recorded on the lot-release sheet referenced to your bottle's lot code.",
  },
  {
    n: "03",
    name: "Sterility",
    method: "Sterility check (USP <71>-style)",
    spec: "Target: no growth over the documented incubation period",
    body: "Applied to nasal sprays and reconstituted liquids. The read is recorded on the lot-release sheet before release is signed.",
  },
  {
    n: "04",
    name: "Endotoxin",
    method: "Endotoxin (LAL) check",
    spec: "Reference limit < 5 EU/mg",
    body: "A clean chromatogram on a pyrogenic lot is still a failed batch. This filter separates a real QA operation from a cosmetic one.",
  },
  {
    n: "05",
    name: "Heavy metals",
    method: "ICP-MS (Pb, Cd, As, Hg)",
    spec: "Within ICH Q3D Option 1 limits",
    body: "Not run in-house. Heavy-metals results are shown only when a named outside-lab report is available for the lot — Titan does not claim instrumentation it does not operate.",
  },
  {
    n: "06",
    name: "Residual solvents",
    method: "Residual-solvent screen",
    spec: "Reference: ICH Q3C class 2 solvents at report threshold",
    body: "DMF, methanol, acetonitrile, and related residue checks are screened and recorded on the retained lot documentation.",
  },
];

export default function LabTestingPage() {
  return (
    <>
      <Nav />
      <main className="bg-white text-[#0f1613]">
        <PageHero
          eyebrow="Lab testing"
          title={
            <>
              Every lot documented,{" "}
              <em className="not-italic text-[#1e6f58]">
                one release standard
              </em>
              .
            </>
          }
          supporting={
            <>
              Each lot is released against an in-house analytical release
              sheet. Checks Titan does not run in-house are described as
              outside-lab tested only when a named report is available for that
              lot. If a documented release check falls outside its target, the
              batch is held. The point is not to print an impressive certificate
              — it is to make the certificate believable.
            </>
          }
          aside={
            <div className="lg:sticky lg:top-24">
              <figure className="rounded-[1.75rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-8 text-[#0f1613]">
                <div className="flex items-baseline justify-between border-b border-[rgb(15_22_19/6%)] pb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                    Certificate of Analysis
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                    TPL-2604-C
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-[1.75rem] leading-[1.1] text-[#0f1613]">
                  Semax
                  <br />
                  <span className="text-[#8a9690]">
                    Lyophilized · 30 mg
                  </span>
                </h3>

                <dl className="mt-8 space-y-3.5">
                  <Row k="Identity (MS)" v="813.4 m/z [M+H] ✓" />
                  <Row k="Purity (area %)" v="99.61" highlight />
                  <Row k="Sterility" v="No growth, 14 d" />
                  <Row k="Endotoxin (LAL)" v="< 5 EU/mg" />
                  <Row k="Heavy metals" v="Within ICH Q3D" />
                  <Row k="Residual solvents" v="< report threshold" />
                  <Row k="Synthesized" v="2026-04-02" />
                  <Row k="Tested" v="2026-04-06 · 2026-04-08" />
                </dl>

                <div className="mt-8 border-t border-[rgb(15_22_19/6%)] pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
                    Released by
                  </span>
                  <p className="mt-2 font-serif text-lg text-[#0f1613]">
                    Titan Peptide Lab — in-house release (specimen)
                  </p>
                </div>

                <div className="mt-8 border-t border-[rgb(15_22_19/6%)] pt-4">
                  <a
                    href="/specimen-coa.pdf"
                    className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#1e6f58] hover:text-[#0f1613]"
                  >
                    <span>Download specimen COA (PDF)</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </figure>

              <p className="mt-4 text-[11px] text-[#b0b8b4]">
                Specimen COA, batch TPL-2604-C. For reference only.
              </p>
            </div>
          }
          below={
            <>
              <ol className="mt-12 space-y-8">
                {TESTS.map((t) => (
                  <li
                    key={t.n}
                    className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-[rgb(15_22_19/6%)] pt-6"
                  >
                    <span className="text-[12px] font-semibold text-[#1e6f58] tabular-nums">
                      {t.n}
                    </span>
                    <div>
                      <h3 className="font-serif text-[1.35rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                        {t.name}
                      </h3>
                      <dl className="mt-3 grid grid-cols-[72px_1fr] gap-x-4 gap-y-1 text-[12px]">
                        <dt className="font-semibold uppercase tracking-[0.08em] text-[#8a9690]">
                          Method
                        </dt>
                        <dd className="text-[#5c6762]">{t.method}</dd>
                        <dt className="font-semibold uppercase tracking-[0.08em] text-[#8a9690]">
                          Spec
                        </dt>
                        <dd className="text-[#5c6762]">{t.spec}</dd>
                      </dl>
                      <p className="mt-3 max-w-md text-[13.5px] leading-[1.7] text-[#5c6762]">
                        {t.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-14 border-t border-[rgb(15_22_19/8%)] pt-8">
                <h2 className="font-serif text-[1.5rem] leading-[1.1] tracking-[-0.02em] text-[#0f1613]">
                  Batch tracking.
                </h2>
                <p className="mt-4 max-w-xl text-[14px] leading-[1.8] text-[#5c6762]">
                  Every bottle leaves with a lot number of the form{" "}
                  <span className="font-mono text-[13px] text-[#0f1613]">
                    TPL-YYMM-[A-Z]
                  </span>
                  . That same lot appears on the bottle, the order record, and
                  the certificate. If you lost the printed copy, email
                  support@titanpeptidelab.com with the lot number and a signed PDF
                  can be reissued.
                </p>
              </div>
            </>
          }
        />

        <NextRead
          eyebrow="About the company"
          title="Read the discipline behind the certificate."
          href="/about"
          blurb="The origin, the philosophy, and the supply-chain rules that decide what actually leaves the bench at The Titan Peptide Company."
        />
      </main>
      <Footer />
    </>
  );
}

function Row({
  k,
  v,
  highlight,
}: {
  k: string;
  v: string;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-[120px_1fr] items-baseline gap-4 border-b border-[rgb(15_22_19/6%)] pb-2.5">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]">
        {k}
      </dt>
      <dd
        className={`tabular-nums ${highlight ? "text-[14px] font-semibold text-[#0f1613]" : "text-[13px] text-[#5c6762]"}`}
      >
        {v}
      </dd>
    </div>
  );
}
