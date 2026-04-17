import { FileCheck2, ShieldCheck, Snowflake } from "lucide-react";
import { Reveal } from "./reveal";

const ITEMS = [
  { icon: ShieldCheck, label: "Third-party HPLC tested" },
  { icon: FileCheck2, label: "COA with every order" },
  { icon: Snowflake, label: "Cold-chain shipping" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-white/10 bg-white/[0.02] py-5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="grid gap-3 md:grid-cols-3">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-[#D5DBE2]"
            >
              <Icon className="size-5 text-[#0F9F7A]" />
              <span>{label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
