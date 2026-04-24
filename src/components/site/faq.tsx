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
      "Every batch is third-party HPLC tested to ≥99%. The COA is tied to the lot on your specific bottle, not a generic certificate.",
  },
  {
    question: "How fast do you ship?",
    answer:
      "Orders ship within 24 hours after payment confirmation. We pack with cold-chain handling and send tracking by email.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Crypto currently — BTC, ETH, USDC (ERC-20), SOL, and USDC (Solana). Place the order first, then Titan sends the exact payment instructions tied to your destination and total.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. Titan supports international destinations. Choose your country at checkout, and if your destination needs a custom route, select Other and Titan confirms the final shipping path by email before dispatch.",
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
];

export function FAQ() {
  return (
    <section id="faq" className="border-t border-[#e8e6e1] bg-[#faf8f4] py-20 lg:py-28">
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
      </div>
    </section>
  );
}
