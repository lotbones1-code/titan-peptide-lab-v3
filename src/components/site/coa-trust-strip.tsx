import { FileText, FlaskConical, ShieldCheck, Wallet } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: FileText,
    label: "Lot-matched release sheet",
    body: "The paperwork is tied to the batch buyers receive — not a stock certificate buried in the footer.",
  },
  {
    icon: FlaskConical,
    label: "Retained-lot documentation",
    body: "Titan explains what is checked, how the retained lot is handled, and where the specimen COA fits.",
  },
  {
    icon: Wallet,
    label: "Crypto rail visible early",
    body: "Network expectations are surfaced before checkout so buyers do not discover payment constraints too late.",
  },
  {
    icon: ShieldCheck,
    label: "Research-use boundary",
    body: "No human-use, dosing, disease, or treatment promises — the trust signal is documentation discipline.",
  },
];

export function CoaTrustStrip() {
  return (
    <section className="border-b border-[#ece9e2] bg-[#0b100e] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8fd0b5]">
              Buyer trust path
            </p>
            <h2 className="mt-2 max-w-md font-serif text-[clamp(1.6rem,2.8vw,2.25rem)] leading-[1.02] tracking-[-0.03em] text-white">
              The proof chain is the offer.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map(({ icon: Icon, label, body }) => (
              <div key={label} className="rounded-[1.15rem] border border-white/10 bg-white/[0.045] p-4">
                <Icon className="h-4 w-4 text-[#8fd0b5]" aria-hidden="true" />
                <h3 className="mt-3 text-[12px] font-semibold leading-5 text-white">
                  {label}
                </h3>
                <p className="mt-2 text-[11px] leading-5 text-white/55">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
