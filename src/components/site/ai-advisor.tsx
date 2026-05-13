"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS, NASAL_SPRAYS, type Product } from "@/lib/products";
import { MessageCircle, X, Send, Sparkles, ChevronRight, ArrowRight } from "lucide-react";

// Status 2026-05-12: dormant source only. Do not mount without a fresh
// CRO/compliance rewrite and proof that pricing, testing, shipping, and
// research-only claims match current authority.
type Message = {
  role: "assistant" | "user";
  text: string;
  products?: Product[];
  followUps?: string[];
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  text: "Hey — I can help narrow the catalog for research use. What are you comparing: recovery markers, cognition, sleep architecture, mood/stress models, or something else?",
  followUps: ["Recovery-marker research", "Cognition research", "Sleep-architecture research", "What's your bestseller?"],
};

const QUICK_PROMPTS = [
  { label: "Recovery markers", query: "I'm comparing compounds studied for tissue recovery markers" },
  { label: "Cognition", query: "I'm comparing compounds studied for cognition and neuroplasticity" },
  { label: "Sleep architecture", query: "I'm researching sleep architecture endpoints" },
  { label: "Mood/stress models", query: "I'm comparing mood and stress-response research models" },
  { label: "Best starter", query: "Which products are easiest to compare first?" },
  { label: "Libido research", query: "I'm looking at PT-141 for libido research" },
  { label: "Compare options", query: "Can you compare your top sellers?" },
  { label: "What's on sale", query: "What discounts do you have?" },
];

function matchProducts(query: string, history: Message[]): { text: string; products: Product[]; followUps?: string[] } {
  const q = query.toLowerCase();
  const prevProducts = history
    .filter(m => m.role === "assistant" && m.products)
    .flatMap(m => m.products || []);
  const lastMentioned = prevProducts.length > 0 ? prevProducts[prevProducts.length - 1] : null;

  // ── Follow-up / conversational patterns ──

  // "Tell me more" / "more info" about last product
  if (q.match(/tell me more|more info|more about|details|explain|how does it work|what does it do/) && lastMentioned) {
    return {
      text: `${lastMentioned.name} — ${lastMentioned.description}\n\nKey benefits: ${lastMentioned.benefits.join(", ")}. It's ${lastMentioned.size}, priced at $${lastMentioned.price.toFixed(2)}${lastMentioned.compareAtPrice ? ` (normally $${lastMentioned.compareAtPrice.toFixed(2)})` : ""}.`,
      products: [lastMentioned],
      followUps: ["How do I use it?", "What pairs well with this?", "Any discounts?"],
    };
  }

  // Dosing / usage questions
  if (q.match(/how.*(use|take|dose|dosing|dosage|administer)|protocol|how many sprays|how often/)) {
    if (lastMentioned && lastMentioned.category === "nasal-spray") {
      return {
        text: `I can't give use, dosing, or administration instructions. For ${lastMentioned.name}, I can help with research-only details: format, lot-matched COA, HPLC purity target, storage/shipping notes, and how it compares to nearby catalog options.`,
        products: [lastMentioned],
        followUps: ["Show COA/testing details", "Compare nearby products", "Shipping and storage notes"],
      };
    }
    return {
      text: "I can't provide dosing, administration, or protocol instructions. I can help compare catalog formats, COA/testing status, product pages, and research literature summaries for laboratory research use only.",
      products: [],
      followUps: ["Compare BPC-157 formats", "Show testing standards", "Shipping and storage notes"],
    };
  }

  // Pairing / stacking questions
  if (q.match(/pair|stack|combine|together|synerg|what goes with|what works with/)) {
    if (lastMentioned?.id === "bpc157-spray" || lastMentioned?.id === "bpc157-vial" || q.match(/bpc/)) {
      const tb500 = PRODUCTS.find(p => p.id === "tb500-vial");
      const bpc = PRODUCTS.find(p => p.id === "bpc157-spray")!;
      return {
        text: "BPC-157 and TB-500 are often compared together in recovery-marker research because they sit in adjacent tissue-response categories. I can compare format, COA/testing, and product-page evidence without giving protocol guidance.",
        products: [bpc, ...(tb500 ? [tb500] : [])],
        followUps: ["Compare COA/testing", "Spray vs vial format", "Show product pages"],
      };
    }
    if (lastMentioned?.id === "selank-spray" || lastMentioned?.id === "semax-spray" || q.match(/selank|semax/)) {
      const stack = PRODUCTS.find(p => p.id === "selank-semax-stack")!;
      return {
        text: "Selank and Semax are commonly compared in cognition and stress-response research. The bundle is a lower-cost way to evaluate both catalog entries side by side; I can also show the individual pages if you want a cleaner comparison.",
        products: [stack],
        followUps: ["Show individual pages", "Compare COA/testing", "Shipping and storage notes"],
      };
    }
    return {
      text: "Here are common research comparison groups:\n\n• Recovery markers: BPC-157 + TB-500\n• Cognition/stress-response: Selank + Semax\n• Sleep architecture + recovery-marker literature: DSIP + BPC-157\n\nI can compare catalog pages, pricing, COAs, and shipping notes, but not protocols.",
      products: [],
      followUps: ["Recovery-marker comparison", "Cognition comparison", "Testing standards"],
    };
  }

  // Compare / vs / difference
  if (q.match(/compare|vs|versus|difference|which is better|between/)) {
    const sprays = NASAL_SPRAYS.slice(0, 4);
    return {
      text: "Here's how our top sprays compare for research-only catalog review:\n\n• BPC-157 ($64.99) — recovery-marker and gut-lineage literature\n• Selank ($59.99) — stress-response and cognition literature\n• Semax ($59.99) — neuroplasticity and cognition literature\n• PT-141 ($69.99) — melanocortin-pathway research\n• DSIP ($62.99) — sleep-architecture literature\n\nWhat research category are you comparing?",
      products: sprays,
      followUps: ["Recovery-marker research", "Cognition research", "Sleep-architecture research"],
    };
  }

  // Shipping / delivery questions
  if (q.match(/ship|deliver|how long|tracking|cold.?chain|packag/)) {
    return {
      text: "Every order ships within 24 hours of payment confirmation. Cold-chain packed (insulated + ice packs), discreet packaging. USPS Priority is standard (2-3 business days). You get tracking emailed as soon as we pack it. Free shipping on orders over $150.",
      products: [],
      followUps: ["Do you ship internationally?", "What about the COA?"],
    };
  }

  // COA / testing / purity questions
  if (q.match(/coa|certificate|test|purity|hplc|lab|quality|legit|real|authentic/)) {
    return {
      text: "Every product ships with a lot-matched COA — that means the certificate corresponds to the exact batch you receive, not a generic PDF. We run a 6-test release panel: identity, purity (HPLC ≥99%), sterility, endotoxin, heavy metals, and residual solvents. Testing is done through an ISO 17025 accredited partner lab.",
      products: [],
      followUps: ["Can I see a sample COA?", "Which lab do you use?", "Show me products"],
    };
  }

  // Bottle duration / how long does it last
  if (q.match(/how long.*(last|bottle)|how many doses|supply|duration/)) {
    if (lastMentioned && lastMentioned.category === "nasal-spray") {
      return {
        text: `${lastMentioned.name} is listed as ${lastMentioned.size}. I can't estimate use-duration or dosing schedules, but I can help compare price, format, COA/testing, storage, and shipping details for research-only purchasing.`,
        products: [lastMentioned],
        followUps: ["Show COA/testing details", "Compare nearby products", "Shipping and storage notes"],
      };
    }
    return {
      text: "Bottle duration depends on a researcher's internal protocol, so I can't estimate use schedules. I can compare catalog price, format, testing, storage, shipping, and current discount codes.",
      products: [],
      followUps: ["Show me bestsellers", "What's the bulk discount?", "Show testing standards"],
    };
  }

  // ── Primary intent matching ──

  // Recovery / gut / tissue / healing / injury
  if (q.match(/recover|repair|heal|gut|tissue|injur|inflammation|wound|tendon|joint|pain/)) {
    const bpc = PRODUCTS.find(p => p.id === "bpc157-spray")!;
    const tb500 = PRODUCTS.find(p => p.id === "tb500-vial");
    const bpcVial = PRODUCTS.find(p => p.id === "bpc157-vial");
    return {
      text: "BPC-157 is the main Titan catalog entry for recovery-marker research, with adjacent interest around gut-lineage and tissue-response literature. The nasal format is the simplest catalog format to review; TB-500 is the closest comparison page.",
      products: [bpc, ...(tb500 ? [tb500] : []), ...(bpcVial ? [bpcVial] : [])],
      followUps: ["Compare BPC-157 formats", "BPC-157 + TB-500 comparison", "Show COA/testing details"],
    };
  }

  // Focus / cognition / brain / memory / nootropic / BDNF
  if (q.match(/focus|cognit|brain|memory|mental|clarity|nootropic|bdnf|concentrat|attention|study|learn|smart/)) {
    const semax = PRODUCTS.find(p => p.id === "semax-spray")!;
    const selank = PRODUCTS.find(p => p.id === "selank-spray")!;
    const stack = PRODUCTS.find(p => p.id === "selank-semax-stack")!;
    return {
      text: "For cognition-focused research, Semax and Selank are the closest catalog pair. Semax is usually compared around neuroplasticity markers; Selank is usually compared around stress-response and cognition literature. The bundle lowers the combined catalog price.",
      products: [stack, semax, selank],
      followUps: ["Tell me more about Semax", "Stack vs individual pages", "Show COA/testing details"],
    };
  }

  // Sleep / insomnia / rest / recovery at night
  if (q.match(/sleep|insomnia|rest|night|circadian|melatonin|dsip|delta/)) {
    const dsip = PRODUCTS.find(p => p.id === "dsip-spray")!;
    return {
      text: "DSIP (Delta Sleep-Inducing Peptide) is the sleep-architecture research entry in the catalog. I can compare the product page, COA/testing status, and relevant research notes without giving administration guidance.",
      products: [dsip],
      followUps: ["How is this different from melatonin research?", "Compare nearby products", "Shipping and storage notes"],
    };
  }

  // Anxiety / mood / calm / stress / relax
  if (q.match(/anxi|mood|calm|stress|relax|gaba|serotonin|depress|panic|nervous/)) {
    const selank = PRODUCTS.find(p => p.id === "selank-spray")!;
    const oxytocin = PRODUCTS.find(p => p.id === "oxytocin-spray")!;
    return {
      text: "Selank is the main Titan catalog entry for stress-response and cognition research. Oxytocin is a separate social-cognition research entry. I can compare mechanisms described in the research summaries and show product/testing details.",
      products: [selank, oxytocin],
      followUps: ["Selank vs Semax research", "Compare COA/testing", "Tell me about Oxytocin"],
    };
  }

  // Libido / arousal / sexual / PT-141
  if (q.match(/libido|arousal|sexual|pt.?141|bremelanotide|intimacy|desire/)) {
    const pt141 = PRODUCTS.find(p => p.id === "pt141-spray")!;
    return {
      text: "PT-141 (Bremelanotide) is a melanocortin-pathway research compound. I can summarize the product page, compare format and testing details, and point to the research overview without making outcome or timing claims.",
      products: [pt141],
      followUps: ["How does PT-141 compare to other options?", "Show COA/testing details", "Shipping and storage notes"],
    };
  }

  // Social / bonding / trust / oxytocin
  if (q.match(/social|bond|trust|connection|oxytocin|empathy|autis/)) {
    const oxytocin = PRODUCTS.find(p => p.id === "oxytocin-spray")!;
    return {
      text: "Oxytocin nasal spray is a social-cognition research entry. Common literature categories include trust-behavior, social-salience, and autonomic stress-response models. I can compare research-page context and COA/testing details.",
      products: [oxytocin],
      followUps: ["Show research summary", "Any other social cognition compounds?", "Show COA/testing details"],
    };
  }

  // Starter / beginner / first / recommend / best
  if (q.match(/start|begin|first|recommend|best|popular|which|suggest|new to|newbie|top|bestsell/)) {
    const bpc = PRODUCTS.find(p => p.id === "bpc157-spray")!;
    const stack = PRODUCTS.find(p => p.id === "selank-semax-stack")!;
    return {
      text: "Two simple catalog starting points for research-only comparison:\n\n1. **BPC-157 Nasal Spray** ($64.99) — bestseller and closest fit for recovery-marker literature.\n\n2. **Selank + Semax Stack** ($105) — paired cognition/stress-response research pages at a lower combined price.\n\nUse code FIRST10 for 10% off your first order.",
      products: [bpc, stack],
      followUps: ["Tell me more about BPC-157", "Show the Selank + Semax page", "What else is popular?"],
    };
  }

  // Weight loss / metabolism / GLP-1
  if (q.match(/weight|metaboli|glp|semaglutide|tirzepatide|retatrutide|fat|lean|diet|appetite/)) {
    const ret = PRODUCTS.find(p => p.id === "retatrutide");
    if (ret) {
      return {
        text: "Retatrutide is a metabolic-research catalog entry around triple-agonist GLP-1/GIP/glucagon receptor literature. It is an injectable research format, so Titan keeps it framed around product specs, COA/testing, and order review rather than protocol guidance.",
        products: [ret],
        followUps: ["How does this compare to semaglutide research?", "Show COA/testing details"],
      };
    }
  }

  // GH / growth hormone / ipamorelin / CJC
  if (q.match(/growth.?hormone|gh|ipamorelin|cjc|secretagogue|igf|muscle|body.?comp/)) {
    const cjc = PRODUCTS.find(p => p.id === "cjc-ipa");
    if (cjc) {
      return {
        text: "CJC-1295 + Ipamorelin is a GH-secretagogue research pair. Titan's page focuses on the pre-blended vial format, product specs, COA/testing, and order-review details rather than reconstitution or protocol guidance.",
        products: [cjc],
        followUps: ["Show product specs", "Show COA/testing details"],
      };
    }
  }

  // Price / cheap / affordable / budget / discount
  if (q.match(/price|cheap|afford|budget|cost|save|deal|discount|sale|coupon/)) {
    const sprays = [...NASAL_SPRAYS].sort((a, b) => a.price - b.price).slice(0, 3);
    const stack = PRODUCTS.find(p => p.id === "selank-semax-stack")!;
    return {
      text: `Sprays start at $${sprays[0].price}. Current catalog value points:\n\n• Selank + Semax Stack ($105 — saves $15 vs separate)\n• Code **FIRST10** = 10% off first order\n• Code **BULK15** = 15% off 3+ items\n• Free shipping over $150\n\nI can compare by research category, COA/testing, or format.`,
      products: [...sprays, stack],
      followUps: ["Compare by research category", "Show testing standards"],
    };
  }

  // Greeting / hi / hey
  if (q.match(/^(hi|hey|hello|sup|yo|what's up|whats up)\s*[!?.]*$/i)) {
    return {
      text: "Hey. What are you researching? I can narrow the catalog by recovery markers, cognition, sleep architecture, mood/stress models, or another category.",
      products: [],
      followUps: ["Recovery-marker research", "Cognition research", "Sleep-architecture research", "Show me everything"],
    };
  }

  // Thanks / thank you
  if (q.match(/thank|thanks|thx|appreciate|cheers/)) {
    return {
      text: "Anytime. I can help with product comparison, COA/testing, shipping, and research-only catalog context.",
      products: [],
    };
  }

  // Show all / catalog / everything
  if (q.match(/show.*all|everything|full.*catalog|all.*product|what do you (have|sell|carry)/)) {
    return {
      text: "Here's our full nasal spray lineup. We also carry injectables (BPC-157, TB-500, CJC+Ipa, Retatrutide) — ask about any of them.",
      products: NASAL_SPRAYS,
      followUps: ["Show me injectables", "What's the bestseller?", "Compare the top 3"],
    };
  }

  // Injectable specific
  if (q.match(/injectable|vial|injection|subcutaneous|reconstitut/)) {
    const injectables = PRODUCTS.filter(p => p.category === "injectable");
    return {
      text: "Our injectable research lineup — all lyophilized, ship with COAs, 99%+ HPLC verified:\n\n• BPC-157 Vial (5mg) — $54.99\n• TB-500 (5mg) — $89.99\n• CJC-1295 + Ipamorelin (pre-blended) — $119.99\n• Retatrutide (10mg) — $199.99\n\nThese require qualified lab handling. I can compare specs and testing, but not reconstitution or administration instructions.",
      products: injectables,
      followUps: ["Spray vs vial BPC-157", "Show COA/testing details"],
    };
  }

  // Catch-all — smarter fallback
  const bestsellers = PRODUCTS.filter(p => p.bestseller);
  return {
    text: "Here are our most popular compounds. Tell me more about what you're researching and I can narrow it down — recovery, cognitive performance, sleep, mood, metabolic, or something else.",
    products: bestsellers.length > 0 ? bestsellers : NASAL_SPRAYS.slice(0, 3),
    followUps: ["I need recovery support", "Cognitive enhancement", "Sleep quality", "Compare your top sellers"],
  };
}

export function AIAdvisor() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: "user", text: text.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const result = matchProducts(text, updated);
      const assistantMsg: Message = {
        role: "assistant",
        text: result.text,
        products: result.products,
        followUps: result.followUps,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600 + Math.random() * 600);
  };

  const showQuickPrompts = messages.length <= 1;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.25)] transition-all duration-300 ${
          open
            ? "bg-[#1a1a1a] text-white rotate-0"
            : "bg-[#1e6f58] text-white hover:bg-[#175946] hover:scale-105"
        }`}
        aria-label={open ? "Close advisor" : "Open research advisor"}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      {/* Pulse ring when closed */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-40 h-14 w-14 animate-ping rounded-full bg-[#1e6f58]/20 pointer-events-none" />
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[min(600px,calc(100vh-120px))] w-[min(400px,calc(100vw-48px))] flex-col overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-[#e5e5e5] bg-[#1e6f58] px-5 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-medium text-white">Research Advisor</p>
              <p className="text-[11px] text-white/70">Online now</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80]" />
              </span>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i}>
                <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#1e6f58] text-white rounded-br-md"
                        : "bg-[#f5f5f5] text-[#333] rounded-bl-md"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Product cards */}
                    {msg.products && msg.products.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {msg.products.map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            onClick={() => setOpen(false)}
                            className="group flex items-center justify-between gap-3 rounded-xl bg-white/90 px-3 py-2.5 text-[#1a1a1a] transition-all hover:bg-white hover:shadow-sm"
                          >
                            <div className="min-w-0">
                              <p className="text-[13px] font-medium truncate">{product.name}</p>
                              <p className="text-[11px] text-[#888]">{product.size}</p>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-[14px] font-semibold text-[#1e6f58]">
                                ${product.price.toFixed(2)}
                              </span>
                              <ChevronRight className="h-3.5 w-3.5 text-[#ccc] transition-transform group-hover:translate-x-0.5 group-hover:text-[#1e6f58]" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Follow-up suggestions */}
                {msg.role === "assistant" && msg.followUps && i === messages.length - 1 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 pl-1">
                    {msg.followUps.map((fu) => (
                      <button
                        key={fu}
                        onClick={() => handleSend(fu)}
                        className="flex items-center gap-1 rounded-full border border-[#e5e5e5] bg-white px-3 py-1.5 text-[11px] text-[#666] transition-colors hover:border-[#1e6f58] hover:text-[#1e6f58]"
                      >
                        <ArrowRight className="h-2.5 w-2.5" />
                        {fu}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-[#f5f5f5] px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#999] animate-bounce [animation-delay:0ms]" />
                    <span className="h-2 w-2 rounded-full bg-[#999] animate-bounce [animation-delay:150ms]" />
                    <span className="h-2 w-2 rounded-full bg-[#999] animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            {/* Quick prompts on first load */}
            {showQuickPrompts && (
              <div className="flex flex-wrap gap-2 pt-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt.label}
                    onClick={() => handleSend(prompt.query)}
                    className="rounded-full border border-[#e5e5e5] bg-white px-3.5 py-1.5 text-[12px] text-[#555] transition-colors hover:border-[#1e6f58] hover:text-[#1e6f58]"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-[#e5e5e5] px-4 py-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about any compound..."
                className="flex-1 rounded-full border border-[#e5e5e5] bg-[#fafafa] px-4 py-2.5 text-[14px] text-[#333] placeholder:text-[#aaa] outline-none focus:border-[#1e6f58] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1e6f58] text-white transition-colors hover:bg-[#175946] disabled:opacity-40 disabled:hover:bg-[#1e6f58]"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
