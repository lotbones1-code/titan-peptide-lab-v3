import { FileCheck2, ShieldCheck, Snowflake } from "lucide-react";
import { Reveal } from "./reveal";

const ITEMS = [
  {
    icon: ShieldCheck,
    label: "Purity threshold",
    note: "Third-party HPLC screen before release",
  },
  {
    icon: FileCheck2,
    label: "COA matching",
    note: "Certificate tied to the lot on your bottle",
  },
  {
    icon: Snowflake,
    label: "Cold-chain packing",
    note: "Temperature-conscious dispatch on liquid orders",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-[#dde4da] bg-[#f8f4ee] py-5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="grid gap-3 md:grid-cols-3">
          {ITEMS.map(({ icon: Icon, label, note }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-[1.1rem] border border-[#d9e0d7] bg-white/82 px-4 py-4 text-sm text-[#314039] shadow-sm"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#edf4ef] text-[#2d7b62]">
                <Icon className="size-4" />
              </span>
              <div>
                <p className="font-medium text-[#17261f]">{label}</p>
                <p className="mt-1 text-sm leading-6 text-[#617069]">{note}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
