import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { FAQJsonLd } from "./json-ld";

const FAQS = [
  {
    question: "How do you verify purity?",
    answer:
      "Every batch is HPLC-UV tested in-house at 220 nm with ESI-MS identity confirmation. Release target is ≥99% purity. The in-house lot-release sheet ships in the box, referenced to the lot code on your bottle. No independent third-party lot report is currently published for this lot.",
  },
  {
    question: "How fast do you ship?",
    answer:
      "Orders ship within 24 hours after payment confirmation. We pack with cold-chain handling and send tracking by email.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Crypto only — USDC on Solana (recommended; sub-cent fees, $1 = $1), plus SOL, BTC, ETH, and USDC on ERC-20. No cards, no ACH, no wires — privacy and chargeback-immunity by design. The checkout page shows the wallet address, QR, and live-converted amount.",
  },
  {
    question: "I've never paid a supplier in crypto first — how do I order with confidence?",
    answer:
      "Fair question — crypto has no chargebacks, so we let the paper trail do the work. Your order ID is created and recorded with support before any crypto leaves your wallet, so the order exists on our side first. Most new buyers start with a single unit (FIRST10 takes 10% off) to verify the source on a small order before scaling up. After you send payment we confirm it on-chain — usually under 30 minutes — then ship cold-chain within 24h with tracking by email. Every order includes the lot-matched in-house release sheet in the box, referenced to the lot code on your bottle — a clearer paper trail than a generic stock spec sheet. Unopened items are returnable within 14 days, and support@titanpeptidelab.com replies within 24–48h, usually same day.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes — 218 destinations from one warehouse, sanctioned jurisdictions excluded. Pick your country at checkout and you'll see the exact rate (free over the threshold in your zone). If customs needs extra documentation, we'll email you before dispatch.",
  },
  {
    question: "Are these for human use?",
    answer:
      "No. All products are sold for laboratory research purposes only and are not intended for human consumption.",
  },
  {
    question: "Do you accept returns?",
    answer:
      "Unopened items within 14 days. Email support@titanpeptidelab.com to start a return.",
  },
  {
    question: "How should peptides be stored?",
    answer:
      "Refrigerate at 2-8°C (36-46°F). Storage guidance is included with your order.",
  },
  {
    question: "Is the COA tied to my specific lot, or a generic specimen?",
    answer:
      "Tied to your specific lot. The release sheet that ships in the box references the same lot code printed on your bottle. Any future independent third-party report would be checked against that same lot code before Titan names it. A specimen release-sheet sample is available on request before you order — the document with your bottle is always lot-matched.",
  },
  {
    question: "Intranasal spray vs lyophilized vial — how do I choose?",
    answer:
      "Seven of eleven compounds ship as precision intranasal sprays (BPC-157, DSIP, Oxytocin, PT-141, Selank, Semax, Selank+Semax stack). Sprays are the default for protocols that prefer non-injection administration in research settings. Lyophilized vials are used where intranasal isn't viable (BPC-157 SC, CJC+Ipa, retatrutide, TB-500); each vial ships with a reconstitution guide for laboratory handling.",
  },
  {
    question: "Will my international order clear customs?",
    answer:
      "We ship to 218 destinations from a single warehouse, sanctioned jurisdictions excluded. Orders are declared accurately as research articles for laboratory use only. If a destination requires extra documentation, we email before dispatch — we do not ship blind into a customs hold. Buyers are responsible for any local import duties or taxes.",
  },
  {
    question: "Do you sell wholesale to clinics, pharmacies, or research labs?",
    answer:
      "Tier pricing exists for repeat-volume buyers (5+ units per month). Pricing tiers, lot-matched COA terms, and paid eval-kit details are sent on request. Email support@titanpeptidelab.com with the compound and approximate monthly volume — we reply within 24–48h. Wholesale settles in stablecoin (USDC or USDT) on the same crypto rail as retail.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-[#e8e6e1] bg-[#faf8f4] py-20 lg:py-28">
      <FAQJsonLd
        faqs={FAQS.map((item) => ({ q: item.question, a: item.answer }))}
      />
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a5c48]">
              FAQ
            </span>
            <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.03em] text-[#0f1110]">
              Common questions
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[#e8e6e1] bg-white">
            <Accordion type="single" collapsible className="divide-y divide-[#e8e6e1]">
              {FAQS.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="border-0 px-6"
                >
                  <AccordionTrigger className="text-left text-[15px] font-medium text-[#0f1110]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[14px] leading-[1.75] text-[#555b55]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="text-[13px] text-[#555b55]">
              Still have questions? Write the laboratory — we reply within 24–48h.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[#dde5df] bg-white px-5 text-[12px] font-semibold text-[#0f1110] transition-colors hover:border-[#1a5c48] hover:text-[#1a5c48]"
            >
              Contact support
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
