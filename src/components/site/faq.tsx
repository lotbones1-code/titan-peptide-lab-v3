import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const FAQS = [
  {
    question: "How do you verify purity?",
    answer:
      "Every batch is third-party HPLC tested to \u226599%. The COA is tied to the lot linked with your order \u2014 not a generic certificate library page.",
  },
  {
    question: "How fast do you ship?",
    answer:
      "Manual fulfillment is completed within 24 hours after payment confirmation. Tracking is sent once the package is packed with cold-chain handling.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Checkout is crypto-only. We support BTC, ETH, USDC (ERC-20), SOL, and USDC (SPL).",
  },
  {
    question: "Are these for human use?",
    answer:
      "No. All products are sold for laboratory research purposes only and are not intended for human consumption.",
  },
  {
    question: "Do you accept returns?",
    answer:
      "Unopened items within 14 days. Contact support@titanpeptidelab.com for an RMA.",
  },
  {
    question: "How should peptides be stored?",
    answer:
      "Refrigerate at 2\u20138\u00b0C. Storage guidance and stability notes are provided alongside the batch documentation.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="border-b border-[rgb(15_22_19/6%)] bg-[#fafbfa] py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#1e6f58]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e6f58]">
              FAQ
            </span>
          </div>
          <h2 className="mt-6 max-w-lg font-serif text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[0.96] tracking-[-0.03em] text-[#0f1613]">
            Questions researchers ask before placing an order.
          </h2>
          <p className="mt-5 max-w-md text-[14px] leading-[1.7] text-[#5c6762]">
            Crisp answers on purity, shipping, payment, and how the certificate
            is matched to the batch.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-xl border border-[rgb(15_22_19/8%)] bg-white px-6 sm:px-8">
            <Accordion
              type="single"
              collapsible
              className="divide-y divide-[rgb(15_22_19/6%)]"
            >
              {FAQS.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="border-0"
                >
                  <AccordionTrigger className="text-[14px] font-medium text-[#0f1613]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl text-[13.5px] leading-[1.7] text-[#5c6762]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
