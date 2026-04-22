import { FlaskConical, QrCode, ShieldCheck, Snowflake } from "lucide-react";

const ITEMS = [
  {
    icon: FlaskConical,
    value: "≥99% HPLC",
    label: "Purity threshold used for release decisions",
  },
  {
    icon: ShieldCheck,
    value: "Lot-matched COA",
    label: "Document belongs to the batch on your order",
  },
  {
    icon: Snowflake,
    value: "Cold-chain 24h",
    label: "Temperature-sensitive orders move fast",
  },
  {
    icon: QrCode,
    value: "QR lookup",
    label: "Reference paperwork accessible without email back-and-forth",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-[rgba(10,10,10,0.07)] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-px bg-[rgba(255,255,255,0.08)] md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, value, label }) => (
            <div key={value} className="bg-[#0a0a0a] px-5 py-6">
              <Icon className="size-4 text-[#6bbea0]" />
              <dt className="mt-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-white tabular-nums">
                {value}
              </dt>
              <dd className="mt-2 text-[12px] leading-[1.7] text-[rgba(255,255,255,0.5)]">
                {label}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
