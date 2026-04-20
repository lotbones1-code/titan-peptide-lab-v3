import { Reveal } from "./reveal";

const ITEMS = [
  {
    stat: "\u226599%",
    label: "HPLC purity",
    note: "Third-party verified on every batch before release",
  },
  {
    stat: "1:1",
    label: "Lot-matched COA",
    note: "Certificate tied to the exact bottle in your order",
  },
  {
    stat: "6-point",
    label: "Release panel",
    note: "Identity, purity, sterility, endotoxin, metals, solvents",
  },
  {
    stat: "24h",
    label: "Cold-chain dispatch",
    note: "Temperature-controlled packaging, not optional",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-[rgb(15_22_19/8%)] bg-[#0f1613] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-12">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-[1.15fr_repeat(4,1fr)]">
            <div className="flex flex-col justify-between bg-[#121b18] p-6 lg:p-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                Titan operating standard
              </p>
              <p className="mt-10 max-w-xs font-serif text-[2rem] leading-[0.95] tracking-[-0.04em] text-white lg:text-[2.3rem]">
                Premium packaging means nothing without proof behind it.
              </p>
            </div>
            {ITEMS.map(({ stat, label, note }) => (
              <div key={label} className="flex flex-col bg-[#0f1613] p-6">
                <span className="font-serif text-[2rem] tracking-[-0.04em] text-white">
                  {stat}
                </span>
                <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8eb8aa]">
                  {label}
                </span>
                <p className="mt-3 text-[13px] leading-relaxed text-white/58">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
