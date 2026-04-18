"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS, NASAL_SPRAYS, type Product } from "@/lib/products";
import { MessageCircle, X, Send, Sparkles, ChevronRight, ArrowRight } from "lucide-react";

type Message = {
  role: "assistant" | "user";
  text: string;
  products?: Product[];
  followUps?: string[];
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  text: "Hey — I can help you find the right compound. What are you researching? Recovery, cognitive performance, sleep, mood, something else?",
  followUps: ["I need recovery support", "Something for focus", "Help me sleep better", "What's your bestseller?"],
};

const QUICK_PROMPTS = [
  { label: "Recovery & repair", query: "I need something for tissue recovery" },
  { label: "Focus & cognition", query: "I want better focus and mental clarity" },
  { label: "Sleep quality", query: "I need better deep sleep" },
  { label: "Mood & anxiety", query: "I want to reduce anxiety" },
  { label: "Best starter", query: "What should I start with?" },
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
        text: `For ${lastMentioned.name}: Most researchers use 1-2 sprays per nostril, 1-2 times daily. Each spray delivers ${lastMentioned.size.split("·")[1]?.trim() || "a metered dose"}. Start with the lower end to assess response. The bottle is designed for consistent metered dosing — no measuring needed.`,
        products: [lastMentioned],
        followUps: ["What pairs well with this?", "How long does a bottle last?", "Any side effects to watch for?"],
      };
    }
    return {
      text: "Dosing depends on the compound. For nasal sprays, it's typically 1-2 sprays per nostril, 1-2x daily. Injectables follow standard reconstitution protocols. Which product are you asking about?",
      products: [],
      followUps: ["BPC-157 dosing", "Semax dosing", "Selank dosing"],
    };
  }

  // Pairing / stacking questions
  if (q.match(/pair|stack|combine|together|synerg|what goes with|what works with/)) {
    if (lastMentioned?.id === "bpc157-spray" || lastMentioned?.id === "bpc157-vial" || q.match(/bpc/)) {
      const tb500 = PRODUCTS.find(p => p.id === "tb500-vial");
      const bpc = PRODUCTS.find(p => p.id === "bpc157-spray")!;
      return {
        text: "BPC-157 + TB-500 is the gold standard recovery stack. BPC handles localized tissue repair and gut support while TB-500 promotes systemic healing and reduces inflammation. Researchers typically run them in parallel for 4-8 weeks.",
        products: [bpc, ...(tb500 ? [tb500] : [])],
        followUps: ["Add both to my order", "How do I dose this stack?"],
      };
    }
    if (lastMentioned?.id === "selank-spray" || lastMentioned?.id === "semax-spray" || q.match(/selank|semax/)) {
      const stack = PRODUCTS.find(p => p.id === "selank-semax-stack")!;
      return {
        text: "Selank + Semax is the classic cognitive-emotional stack. Semax sharpens focus and upregulates BDNF. Selank smooths the edges — calm without sedation. We sell them as a bundle for $105 (saves $15 vs buying separately). It's our most popular combo for a reason.",
        products: [stack],
        followUps: ["I'll take the stack", "How long does this last?"],
      };
    }
    return {
      text: "Here are the best stacking combos:\n\n• Recovery: BPC-157 + TB-500\n• Cognitive: Selank + Semax (we sell this as a bundle)\n• Sleep + Recovery: DSIP + BPC-157\n• Focus + Calm: Semax + Selank\n\nWhich combination interests you?",
      products: [],
      followUps: ["Recovery stack", "Cognitive stack", "Sleep + recovery"],
    };
  }

  // Compare / vs / difference
  if (q.match(/compare|vs|versus|difference|which is better|between/)) {
    const sprays = NASAL_SPRAYS.slice(0, 4);
    return {
      text: "Here's how our top sprays compare:\n\n• BPC-157 ($64.99) — Recovery + gut support. Our bestseller. Most versatile compound.\n• Selank ($59.99) — Anti-anxiety + focus. Non-sedating. Russian-developed.\n• Semax ($59.99) — Pure cognitive boost. BDNF upregulation. Pairs with Selank.\n• PT-141 ($69.99) — Libido/arousal. Central nervous system action, not hormonal.\n• DSIP ($62.99) — Sleep architecture. Works with natural sleep pathways.\n\nWhat matters most to you — recovery, brain, mood, or something specific?",
      products: sprays,
      followUps: ["I want the best for recovery", "Cognitive performance is my priority", "I need better sleep"],
    };
  }

  // Shipping / delivery questions
  if (q.match(/ship|deliver|how long|tracking|cold.?chain|packag/)) {
    return {
      text: "Every order ships same-day if placed before 2 PM PT. Cold-chain packed (insulated + ice packs), discreet packaging. USPS Priority is standard (2-3 business days). You get tracking emailed as soon as we pack it. Free shipping on orders over $150.",
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
        text: `A ${lastMentioned.size.split("·")[0]?.trim() || "15mL"} bottle of ${lastMentioned.name} typically lasts 3-5 weeks at standard research dosing (1-2 sprays, 1-2x daily). Most researchers order 2-3 bottles for a full protocol cycle.`,
        products: [lastMentioned],
        followUps: ["I'll order 2", "What's the best bulk discount?"],
      };
    }
    return {
      text: "Our 15mL nasal spray bottles typically last 3-5 weeks at standard dosing. For a full 8-12 week research protocol, most researchers grab 2-3 bottles. Use code BULK15 for 15% off when you order 3+ items.",
      products: [],
      followUps: ["Show me bestsellers", "What's the bulk discount?"],
    };
  }

  // ── Primary intent matching ──

  // Recovery / gut / tissue / healing / injury
  if (q.match(/recover|repair|heal|gut|tissue|injur|inflammation|wound|tendon|joint|pain/)) {
    const bpc = PRODUCTS.find(p => p.id === "bpc157-spray")!;
    const tb500 = PRODUCTS.find(p => p.id === "tb500-vial");
    const bpcVial = PRODUCTS.find(p => p.id === "bpc157-vial");
    return {
      text: "BPC-157 is our top recovery compound — most-studied peptide for tissue repair, gut lining, and systemic inflammation. The nasal spray is the easiest format (no needles, fast absorption). For a full recovery protocol, pair it with TB-500.",
      products: [bpc, ...(tb500 ? [tb500] : []), ...(bpcVial ? [bpcVial] : [])],
      followUps: ["How does BPC-157 work?", "BPC-157 + TB-500 stack?", "Spray vs injectable?"],
    };
  }

  // Focus / cognition / brain / memory / nootropic / BDNF
  if (q.match(/focus|cognit|brain|memory|mental|clarity|nootropic|bdnf|concentrat|attention|study|learn|smart/)) {
    const semax = PRODUCTS.find(p => p.id === "semax-spray")!;
    const selank = PRODUCTS.find(p => p.id === "selank-spray")!;
    const stack = PRODUCTS.find(p => p.id === "selank-semax-stack")!;
    return {
      text: "For cognitive performance: Semax is your primary driver — it upregulates BDNF and supports memory, focus, and neural recovery. If you want focus *without* the jittery edge, add Selank. The stack ($105, saves $15) is our most popular combo by a wide margin.",
      products: [stack, semax, selank],
      followUps: ["Tell me more about Semax", "Stack vs individual?", "How do I dose these?"],
    };
  }

  // Sleep / insomnia / rest / recovery at night
  if (q.match(/sleep|insomnia|rest|night|circadian|melatonin|dsip|delta/)) {
    const dsip = PRODUCTS.find(p => p.id === "dsip-spray")!;
    return {
      text: "DSIP (Delta Sleep-Inducing Peptide) is built for sleep architecture research. Unlike sedatives, it works *with* your natural sleep pathways — researchers report deeper sleep phases without morning grogginess. One spray before bed, simple protocol.",
      products: [dsip],
      followUps: ["How is this different from melatonin?", "Can I stack DSIP with anything?", "How long does a bottle last?"],
    };
  }

  // Anxiety / mood / calm / stress / relax
  if (q.match(/anxi|mood|calm|stress|relax|gaba|serotonin|depress|panic|nervous/)) {
    const selank = PRODUCTS.find(p => p.id === "selank-spray")!;
    const oxytocin = PRODUCTS.find(p => p.id === "oxytocin-spray")!;
    return {
      text: "Selank is the strongest anxiolytic in the catalog — GABA and serotonin modulation for calm, focused cognition without sedation. Russian-developed, extensively studied. Oxytocin is worth considering too if the research involves social bonding or stress regulation.",
      products: [selank, oxytocin],
      followUps: ["Selank vs prescription anxiolytics?", "Can I pair Selank with Semax?", "Tell me about Oxytocin"],
    };
  }

  // Libido / arousal / sexual / PT-141
  if (q.match(/libido|arousal|sexual|pt.?141|bremelanotide|intimacy|desire/)) {
    const pt141 = PRODUCTS.find(p => p.id === "pt141-spray")!;
    return {
      text: "PT-141 (Bremelanotide) works through the central nervous system — not hormonal, not vascular. That's what makes it different. ~45 min onset, effective for both male and female research subjects. The nasal spray format makes it very accessible vs injectable.",
      products: [pt141],
      followUps: ["How does PT-141 compare to other options?", "Any side effects?", "How long does the effect last?"],
    };
  }

  // Social / bonding / trust / oxytocin
  if (q.match(/social|bond|trust|connection|oxytocin|empathy|autis/)) {
    const oxytocin = PRODUCTS.find(p => p.id === "oxytocin-spray")!;
    return {
      text: "Oxytocin nasal spray is the standard format for social cognition research. Trust, social behavior, autonomic stress regulation — it's one of the most-studied peptides in neuroscience. Intranasal delivery is the gold standard in published research.",
      products: [oxytocin],
      followUps: ["What dose do researchers typically use?", "Any other social cognition compounds?"],
    };
  }

  // Starter / beginner / first / recommend / best
  if (q.match(/start|begin|first|recommend|best|popular|which|suggest|new to|newbie|top|bestsell/)) {
    const bpc = PRODUCTS.find(p => p.id === "bpc157-spray")!;
    const stack = PRODUCTS.find(p => p.id === "selank-semax-stack")!;
    return {
      text: "Two no-brainer starting points:\n\n1. **BPC-157 Nasal Spray** ($64.99) — Our #1 seller. Broadest range of studied benefits: recovery, gut, anti-inflammatory. Everyone should have this.\n\n2. **Selank + Semax Stack** ($105) — If cognitive performance is the goal. Focus + calm in one protocol.\n\nUse code FIRST10 for 10% off your first order.",
      products: [bpc, stack],
      followUps: ["Tell me more about BPC-157", "I'll go with the stack", "What else is popular?"],
    };
  }

  // Weight loss / metabolism / GLP-1
  if (q.match(/weight|metaboli|glp|semaglutide|tirzepatide|retatrutide|fat|lean|diet|appetite/)) {
    const ret = PRODUCTS.find(p => p.id === "retatrutide");
    if (ret) {
      return {
        text: "Retatrutide is next-gen metabolic research — triple-agonist (GLP-1/GIP/glucagon receptor). This is an injectable format for experienced researchers. Limited stock, and it's getting a lot of attention in the research community right now.",
        products: [ret],
        followUps: ["How does this compare to semaglutide?", "What's the dosing protocol?"],
      };
    }
  }

  // GH / growth hormone / ipamorelin / CJC
  if (q.match(/growth.?hormone|gh|ipamorelin|cjc|secretagogue|igf|muscle|body.?comp/)) {
    const cjc = PRODUCTS.find(p => p.id === "cjc-ipa");
    if (cjc) {
      return {
        text: "CJC-1295 + Ipamorelin is the most-studied GH secretagogue duo. We pre-blend them so you skip the reconstitution math. Popular for GH axis, recovery, and body composition research.",
        products: [cjc],
        followUps: ["How do I reconstitute this?", "What results do researchers see?"],
      };
    }
  }

  // Price / cheap / affordable / budget / discount
  if (q.match(/price|cheap|afford|budget|cost|save|deal|discount|sale|coupon/)) {
    const sprays = [...NASAL_SPRAYS].sort((a, b) => a.price - b.price).slice(0, 3);
    const stack = PRODUCTS.find(p => p.id === "selank-semax-stack")!;
    return {
      text: `Sprays start at $${sprays[0].price}. Best value plays:\n\n• Selank + Semax Stack ($105 — saves $15 vs separate)\n• Code **FIRST10** = 10% off first order\n• Code **BULK15** = 15% off 3+ items\n• Free shipping over $150\n\nSmart move: grab 3 sprays, use BULK15, and you're above $150 for free shipping too.`,
      products: [...sprays, stack],
      followUps: ["What 3 sprays do you recommend?", "I want the best deal possible"],
    };
  }

  // Greeting / hi / hey
  if (q.match(/^(hi|hey|hello|sup|yo|what's up|whats up)\s*[!?.]*$/i)) {
    return {
      text: "Hey! What are you researching? I can point you to the right compound — recovery, focus, sleep, mood, or something more specific.",
      products: [],
      followUps: ["Recovery & tissue repair", "Cognitive performance", "Better sleep", "Show me everything"],
    };
  }

  // Thanks / thank you
  if (q.match(/thank|thanks|thx|appreciate|cheers/)) {
    return {
      text: "Anytime. If you have more questions about dosing, stacking, or anything else — just ask. Good luck with the research.",
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
      text: "Our injectable lineup — all lyophilized, ship with COAs, 99%+ HPLC verified:\n\n• BPC-157 Vial (5mg) — $54.99\n• TB-500 (5mg) — $89.99\n• CJC-1295 + Ipamorelin (pre-blended) — $119.99\n• Retatrutide (10mg) — $199.99\n\nAll require standard reconstitution with bacteriostatic water.",
      products: injectables,
      followUps: ["Spray vs injectable BPC-157?", "How do I reconstitute?"],
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
