"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const FAQS = [
  {
    question: "How is purity verified?",
    answer:
      "Every batch is third-party HPLC tested to ≥99%. The certificate of analysis is tied to the specific lot on your bottle, not a generic library page.",
  },
  {
    question: "How fast do orders ship?",
    answer:
      "Manual fulfillment within 24 hours of payment confirmation. Tracking is sent once packed.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Crypto only — BTC, ETH, USDC (ERC-20), SOL, and USDC (SPL). Wallet addresses are shown at checkout.",
  },
  {
    question: "Are these products for human use?",
    answer:
      "No. All products are sold for laboratory research purposes only and are not intended for human consumption.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Unopened items within 14 days. Contact support for a return authorization.",
  },
  {
    question: "How should nasal sprays be stored?",
    answer:
      "Refrigerate at 2–8°C. Storage guidance is included with every order.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1e6f58]">
              FAQ
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1] tracking-[-0.02em] text-[#0f1613]">
              Common questions
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#5c6762]">
              If something isn't covered here, reach out
              at{" "}
              <a
                href="/contact"
                className="underline underline-offset-4 transition-colors hover:text-[#0f1613]"
              >
                contact
              </a>
              .
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible>
            {FAQS.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="border-b border-[#e5e5e5]"
              >
                <AccordionTrigger className="py-5 text-[15px] font-normal text-[#0f1613] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[14px] leading-relaxed text-[#5c6762]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
