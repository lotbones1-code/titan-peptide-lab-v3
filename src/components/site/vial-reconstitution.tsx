"use client";

import { useState, useMemo } from "react";
import { FlaskConical, Syringe, Calculator } from "lucide-react";

type Props = {
  productName: string;
  /** Total mg per vial, e.g. 5 for a 5 mg lyophilized vial. */
  mgPerVial: number;
};

const COMMON_BAC_WATER_VOLUMES = [1, 2, 2.5, 3, 5];

export function VialReconstitution({ productName, mgPerVial }: Props) {
  const [bacWaterMl, setBacWaterMl] = useState<number>(2);
  const [doseMcg, setDoseMcg] = useState<number>(250);

  const concentrationMgPerMl = useMemo(
    () => (bacWaterMl > 0 ? mgPerVial / bacWaterMl : 0),
    [mgPerVial, bacWaterMl],
  );
  const concentrationMcgPerMl = concentrationMgPerMl * 1000;
  const drawMl = useMemo(
    () => (concentrationMcgPerMl > 0 ? doseMcg / concentrationMcgPerMl : 0),
    [doseMcg, concentrationMcgPerMl],
  );
  const drawUnits = drawMl * 100; // U-100 insulin syringe units

  return (
    <section className="mt-14 rounded-[1.5rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <FlaskConical className="h-4 w-4 text-[#1e6f58]" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
          Reconstitution
        </p>
      </div>
      <h2 className="mt-3 font-serif text-[1.85rem] leading-[1.05] tracking-[-0.03em] text-[#0f1613]">
        Reconstituting your {productName}
      </h2>
      <p className="mt-2 max-w-[60ch] text-sm leading-7 text-[#5c6762]">
        For research preparation only. Use bacteriostatic water (0.9% benzyl
        alcohol) and a sterile insulin syringe. Reconstituted peptide is stored
        refrigerated; check the storage guide for stability windows by compound.
      </p>

      {/* Steps */}
      <ol className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          {
            n: "01",
            title: "Bring to room temperature",
            body: "Let the lyophilized vial and bacteriostatic water sit at room temperature for ~10 min. Cold vials can fracture when injected.",
          },
          {
            n: "02",
            title: "Inject bac-water slowly",
            body: "Draw your chosen bac-water volume into a sterile syringe. Inject down the side of the vial — never directly onto the powder.",
          },
          {
            n: "03",
            title: "Swirl, do not shake",
            body: "Gently swirl until fully dissolved. Solution should be clear. Refrigerate. Discard per the stability window for this peptide.",
          },
        ].map((step) => (
          <li
            key={step.n}
            className="rounded-2xl border border-[rgb(15_22_19/7%)] bg-white p-5"
          >
            <span className="text-[11px] font-semibold tracking-[0.16em] text-[#1e6f58]">
              STEP {step.n}
            </span>
            <p className="mt-2 text-[14px] font-semibold text-[#0f1613]">
              {step.title}
            </p>
            <p className="mt-2 text-[13px] leading-6 text-[#5c6762]">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      {/* mg/mL helper */}
      <div className="mt-8 rounded-2xl border border-[rgb(15_22_19/7%)] bg-white p-6">
        <div className="flex items-center gap-2">
          <Calculator className="h-4 w-4 text-[#1e6f58]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">
            mg/mL helper
          </p>
        </div>
        <p className="mt-1 text-[13px] text-[#5c6762]">
          Vial size: <span className="font-semibold text-[#0f1613]">{mgPerVial} mg</span>
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-[12px] font-medium text-[#0f1613]">
              Bacteriostatic water added (mL)
            </span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {COMMON_BAC_WATER_VOLUMES.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setBacWaterMl(v)}
                  className={`rounded-full border px-3 py-1 text-[12px] font-medium transition-colors ${
                    bacWaterMl === v
                      ? "border-[#1e6f58] bg-[#1e6f58] text-white"
                      : "border-[rgb(15_22_19/12%)] bg-white text-[#0f1613] hover:border-[#1e6f58]/30"
                  }`}
                >
                  {v} mL
                </button>
              ))}
            </div>
            <input
              type="number"
              min={0.1}
              step={0.1}
              value={bacWaterMl}
              onChange={(e) =>
                setBacWaterMl(Math.max(0.1, parseFloat(e.target.value) || 0.1))
              }
              className="mt-2 w-full rounded-lg border border-[rgb(15_22_19/12%)] bg-white px-3 py-2 text-[14px] text-[#0f1613] focus:border-[#1e6f58] focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-[12px] font-medium text-[#0f1613]">
              Per-dose target (mcg)
            </span>
            <input
              type="number"
              min={1}
              step={10}
              value={doseMcg}
              onChange={(e) =>
                setDoseMcg(Math.max(1, parseInt(e.target.value) || 0))
              }
              className="mt-2 w-full rounded-lg border border-[rgb(15_22_19/12%)] bg-white px-3 py-2 text-[14px] text-[#0f1613] focus:border-[#1e6f58] focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-6 grid gap-3 rounded-xl bg-[#f0f5f2] p-4 text-[13px] sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">
              Concentration
            </p>
            <p className="mt-1 text-[16px] font-semibold tabular-nums text-[#0f1613]">
              {concentrationMgPerMl.toFixed(2)} mg/mL
            </p>
            <p className="text-[11px] text-[#5c6762]">
              ({Math.round(concentrationMcgPerMl).toLocaleString()} mcg/mL)
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">
              Volume per dose
            </p>
            <p className="mt-1 text-[16px] font-semibold tabular-nums text-[#0f1613]">
              {drawMl > 0 ? drawMl.toFixed(3) : "—"} mL
            </p>
            <p className="text-[11px] text-[#5c6762]">for {doseMcg.toLocaleString()} mcg</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">
              U-100 syringe units
            </p>
            <p className="mt-1 flex items-center gap-2 text-[16px] font-semibold tabular-nums text-[#0f1613]">
              <Syringe className="h-4 w-4 text-[#1e6f58]" />
              {drawUnits > 0 ? drawUnits.toFixed(1) : "—"} units
            </p>
            <p className="text-[11px] text-[#5c6762]">100 IU = 1 mL</p>
          </div>
        </div>

        <p className="mt-4 text-[11px] leading-5 text-[#8a9690]">
          For research preparation only. Not medical or dosing advice. Numbers
          round to the displayed precision and assume complete dissolution.
        </p>
      </div>
    </section>
  );
}
