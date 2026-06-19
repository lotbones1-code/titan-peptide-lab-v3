"use client";

import { useState, useMemo } from "react";
import { FlaskConical, Syringe, Calculator } from "lucide-react";

// Standalone, multi-compound reconstitution calculator for the dedicated
// /peptide-reconstitution-calculator/ landing page. Unlike the per-product
// <VialReconstitution> helper, the vial size is user-selectable so the page
// can rank for the broad "peptide reconstitution calculator" / "how much
// bacteriostatic water" query cluster instead of one compound at a time.
// Research-preparation math only — no human-dosing or medical framing.

const COMMON_VIAL_MG = [2, 5, 10, 15, 20, 30];
const COMMON_BAC_WATER_VOLUMES = [1, 2, 2.5, 3, 5];

export function ReconstitutionCalculator({
  initialMgPerVial = 5,
  initialBacWaterMl = 2,
  initialDoseMcg = 250,
}: {
  // Optional presets so per-compound /reconstitution/<slug>/ pages can open
  // the tool already filled to that compound's typical research vial size.
  // Defaults preserve the standalone /peptide-reconstitution-calculator/ page.
  initialMgPerVial?: number;
  initialBacWaterMl?: number;
  initialDoseMcg?: number;
} = {}) {
  const [mgPerVial, setMgPerVial] = useState<number>(initialMgPerVial);
  const [bacWaterMl, setBacWaterMl] = useState<number>(initialBacWaterMl);
  const [doseMcg, setDoseMcg] = useState<number>(initialDoseMcg);

  const concentrationMgPerMl = useMemo(
    () => (bacWaterMl > 0 ? mgPerVial / bacWaterMl : 0),
    [mgPerVial, bacWaterMl],
  );
  const concentrationMcgPerMl = concentrationMgPerMl * 1000;
  const drawMl = useMemo(
    () => (concentrationMcgPerMl > 0 ? doseMcg / concentrationMcgPerMl : 0),
    [doseMcg, concentrationMcgPerMl],
  );
  const drawUnits = drawMl * 100; // U-100 insulin syringe units (100 IU = 1 mL)
  const dosesPerVial = useMemo(
    () => (doseMcg > 0 ? (mgPerVial * 1000) / doseMcg : 0),
    [mgPerVial, doseMcg],
  );

  return (
    <section className="rounded-[1.5rem] border border-[rgb(15_22_19/8%)] bg-[#fafbfa] p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <FlaskConical className="h-4 w-4 text-[#1e6f58]" />
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
          Reconstitution calculator
        </p>
      </div>
      <h2 className="mt-3 font-serif text-[1.85rem] leading-[1.05] tracking-[-0.03em] text-[#0f1613]">
        Peptide reconstitution calculator
      </h2>
      <p className="mt-2 max-w-[60ch] text-sm leading-7 text-[#5c6762]">
        Enter the vial size and the bacteriostatic water you plan to add. The
        calculator returns the reconstituted concentration, the volume per
        measured aliquot, and the equivalent U-100 syringe units. For research
        preparation only — not medical or dosing guidance.
      </p>

      <div className="mt-7 rounded-2xl border border-[rgb(15_22_19/7%)] bg-white p-6">
        <div className="flex items-center gap-2">
          <Calculator className="h-4 w-4 text-[#1e6f58]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">
            Inputs
          </p>
        </div>

        {/* Vial size */}
        <label className="mt-5 block">
          <span className="text-[12px] font-medium text-[#0f1613]">
            Vial size (mg of lyophilized peptide)
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {COMMON_VIAL_MG.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setMgPerVial(v)}
                className={`rounded-full border px-3 py-1 text-[12px] font-medium transition-colors ${
                  mgPerVial === v
                    ? "border-[#1e6f58] bg-[#1e6f58] text-white"
                    : "border-[rgb(15_22_19/12%)] bg-white text-[#0f1613] hover:border-[#1e6f58]/30"
                }`}
              >
                {v} mg
              </button>
            ))}
          </div>
          <input
            type="number"
            min={0.1}
            step={0.5}
            value={mgPerVial}
            onChange={(e) =>
              setMgPerVial(Math.max(0.1, parseFloat(e.target.value) || 0.1))
            }
            className="mt-2 w-full rounded-lg border border-[rgb(15_22_19/12%)] bg-white px-3 py-2 text-[14px] text-[#0f1613] focus:border-[#1e6f58] focus:outline-none"
          />
        </label>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {/* Bac water */}
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

          {/* Per-aliquot target */}
          <label className="block">
            <span className="text-[12px] font-medium text-[#0f1613]">
              Per-aliquot target (mcg)
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

        {/* Outputs */}
        <div className="mt-6 grid gap-3 rounded-xl bg-[#f0f5f2] p-4 text-[13px] sm:grid-cols-4">
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
              Volume per aliquot
            </p>
            <p className="mt-1 text-[16px] font-semibold tabular-nums text-[#0f1613]">
              {drawMl > 0 ? drawMl.toFixed(3) : "—"} mL
            </p>
            <p className="text-[11px] text-[#5c6762]">
              for {doseMcg.toLocaleString()} mcg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">
              U-100 syringe units
            </p>
            <p className="mt-1 flex items-center gap-2 text-[16px] font-semibold tabular-nums text-[#0f1613]">
              <Syringe className="h-4 w-4 text-[#1e6f58]" />
              {drawUnits > 0 ? drawUnits.toFixed(1) : "—"}
            </p>
            <p className="text-[11px] text-[#5c6762]">100 IU = 1 mL</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1e6f58]">
              Aliquots per vial
            </p>
            <p className="mt-1 text-[16px] font-semibold tabular-nums text-[#0f1613]">
              {dosesPerVial > 0 ? dosesPerVial.toFixed(1) : "—"}
            </p>
            <p className="text-[11px] text-[#5c6762]">at this target</p>
          </div>
        </div>

        <p className="mt-4 text-[11px] leading-5 text-[#8a9690]">
          For research preparation only. Not medical or dosing advice. Figures
          round to the displayed precision and assume complete dissolution in
          the stated volume.
        </p>
      </div>
    </section>
  );
}
