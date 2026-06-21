import Link from "next/link";
import { ArrowRight, FileText, FlaskConical, ShieldCheck, Wallet } from "lucide-react";

// Each trust claim links to the page that actually substantiates it. The strip's
// heading promises "the proof chain is the offer" — so every claim here is a live
// click-path to its proof/education page, not a bare assertion. This also gives
// the homepage (the one page that reliably gets crawled/visited) descriptive
// internal links into the COA/verification/quality cluster buyers filter on.
const TRUST_ITEMS = [
  {
    icon: FileText,
    label: "Lot-matched release sheet",
    body: "The paperwork is tied to the batch buyers receive — not a stock certificate buried in the footer.",
    href: "/how-to-verify-peptide-quality-coa/?ref=home-trust-strip",
    cta: "How to verify it",
  },
  {
    icon: FlaskConical,
    label: "Retained-lot documentation",
    body: "Titan explains what is checked, how the retained lot is handled, and where the specimen COA fits.",
    href: "/lab-testing/?ref=home-trust-strip",
    cta: "What's tested",
  },
  {
    icon: Wallet,
    label: "Crypto rail visible early",
    body: "Network expectations are surfaced before checkout so buyers do not discover payment constraints too late.",
    href: "/how-to-pay-with-crypto/?ref=home-trust-strip",
    cta: "Payment walkthrough",
  },
  {
    icon: ShieldCheck,
    label: "Research-use boundary",
    body: "No human-use, dosing, disease, or treatment promises — the trust signal is documentation discipline.",
    href: "/legal/?ref=home-trust-strip",
    cta: "Terms & compliance",
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
            <Link
              href="/coa-verified-peptide-supplier/?ref=home-trust-strip"
              className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#8fd0b5] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:underline focus-visible:outline-none"
            >
              See full COA &amp; quality standards
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_ITEMS.map(({ icon: Icon, label, body, href, cta }) => (
              <Link
                key={label}
                href={href}
                className="group flex flex-col rounded-[1.15rem] border border-white/10 bg-white/[0.045] p-4 transition-colors hover:border-[#8fd0b5]/50 hover:bg-white/[0.08] focus-visible:border-[#8fd0b5]/60 focus-visible:outline-none"
              >
                <Icon className="h-4 w-4 text-[#8fd0b5]" aria-hidden="true" />
                <h3 className="mt-3 text-[12px] font-semibold leading-5 text-white">
                  {label}
                </h3>
                <p className="mt-2 text-[11px] leading-5 text-white/55">{body}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#8fd0b5]/80 transition-colors group-hover:text-[#8fd0b5]">
                  {cta}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
