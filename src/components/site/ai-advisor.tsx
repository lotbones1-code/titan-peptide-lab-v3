"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS, NASAL_SPRAYS, type Product } from "@/lib/products";
import { MessageCircle, X, Send, Sparkles, ChevronRight, ArrowRight, Check, Loader2, Copy } from "lucide-react";
import { WALLETS } from "@/lib/products";

type OrderData = {
  items: { productId: string; name: string; quantity: number; price: number }[];
  name: string;
  email: string;
  country: string;
  address: string;
};

type Message = {
  role: "assistant" | "user";
  text: string;
  products?: Product[];
  followUps?: string[];
  orderData?: OrderData;
  orderConfirmed?: { orderId: string };
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  text: "Hey — I can help you find the right compound or place an order. What are you researching? Recovery, cognitive performance, sleep, mood, something else?",
  followUps: ["I need recovery support", "Something for focus", "Help me sleep better", "I want to place an order"],
};

const QUICK_PROMPTS = [
  { label: "Recovery & repair", query: "I need something for tissue recovery" },
  { label: "Focus & cognition", query: "I want better focus and mental clarity" },
  { label: "Sleep quality", query: "I need better deep sleep" },
  { label: "Mood & anxiety", query: "I want to reduce anxiety" },
  { label: "Best starter", query: "What should I start with?" },
  { label: "Place an order", query: "I want to place an order" },
  { label: "Compare options", query: "Can you compare your top sellers?" },
  { label: "What's on sale", query: "What discounts do you have?" },
];

function resolveProducts(productIds: string[]): Product[] {
  return productIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => !!p);
}

// Fallback pattern matching when API is unavailable
function matchProductsFallback(query: string): { text: string; products: Product[]; followUps?: string[] } {
  const q = query.toLowerCase();

  if (q.match(/recover|repair|heal|gut|tissue|injur|inflammation/)) {
    const bpc = PRODUCTS.find(p => p.id === "bpc157-spray")!;
    const tb500 = PRODUCTS.find(p => p.id === "tb500-vial");
    return {
      text: "BPC-157 is our top recovery compound — most-studied peptide for tissue repair, gut lining, and systemic inflammation. The nasal spray is the easiest format. For a full recovery protocol, pair it with TB-500.",
      products: [bpc, ...(tb500 ? [tb500] : [])],
      followUps: ["How does BPC-157 work?", "BPC-157 + TB-500 stack?", "I'll order BPC-157"],
    };
  }

  if (q.match(/focus|cognit|brain|memory|mental|clarity|nootropic/)) {
    const stack = PRODUCTS.find(p => p.id === "selank-semax-stack")!;
    const semax = PRODUCTS.find(p => p.id === "semax-spray")!;
    return {
      text: "For cognitive performance: Semax upregulates BDNF and supports memory and focus. Add Selank for calm without sedation. The stack ($105, saves $15) is our most popular combo.",
      products: [stack, semax],
      followUps: ["Tell me more about Semax", "I'll order the stack"],
    };
  }

  if (q.match(/sleep|insomnia|rest|night|dsip/)) {
    const dsip = PRODUCTS.find(p => p.id === "dsip-spray")!;
    return {
      text: "DSIP works with your natural sleep pathways — researchers report deeper sleep phases without morning grogginess. One spray before bed.",
      products: [dsip],
      followUps: ["How is this different from melatonin?", "I'll order DSIP"],
    };
  }

  if (q.match(/anxi|mood|calm|stress|relax/)) {
    const selank = PRODUCTS.find(p => p.id === "selank-spray")!;
    return {
      text: "Selank is our strongest anxiolytic — GABA and serotonin modulation for calm, focused cognition without sedation.",
      products: [selank],
      followUps: ["Can I pair Selank with Semax?", "I'll order Selank"],
    };
  }

  if (q.match(/libido|arousal|sexual|pt.?141/)) {
    const pt141 = PRODUCTS.find(p => p.id === "pt141-spray")!;
    return {
      text: "PT-141 works through the central nervous system — not hormonal, not vascular. ~45 min onset. The nasal spray format makes it very accessible.",
      products: [pt141],
      followUps: ["Any side effects?", "I'll order PT-141"],
    };
  }

  if (q.match(/order|buy|purchase|checkout|cart/)) {
    return {
      text: "I can take your order right here! Just tell me which product(s) you'd like and I'll walk you through it. What are you interested in?",
      products: [],
      followUps: ["BPC-157 Nasal Spray", "Selank + Semax Stack", "Show me the catalog"],
    };
  }

  if (q.match(/start|begin|first|recommend|best|popular|bestsell/)) {
    const bpc = PRODUCTS.find(p => p.id === "bpc157-spray")!;
    const stack = PRODUCTS.find(p => p.id === "selank-semax-stack")!;
    return {
      text: "Two no-brainer starting points:\n\n1. BPC-157 Nasal Spray ($64.99) — Our #1 seller. Broadest studied benefits.\n2. Selank + Semax Stack ($105) — If cognitive performance is the goal.\n\nSubscribe to our newsletter for 10% off your first order.",
      products: [bpc, stack],
      followUps: ["Tell me more about BPC-157", "I'll order BPC-157"],
    };
  }

  if (q.match(/price|cheap|discount|sale|coupon|deal/)) {
    const sprays = [...NASAL_SPRAYS].sort((a, b) => a.price - b.price).slice(0, 3);
    return {
      text: `Sprays start at $${sprays[0].price}. Subscribe for an exclusive 10% off code. Free shipping over $150.`,
      products: sprays,
      followUps: ["What 3 sprays do you recommend?", "I'm ready to order"],
    };
  }

  if (q.match(/ship|deliver|tracking/)) {
    return {
      text: "Every order ships same-day if placed before 2 PM PT. Cold-chain packed, discreet packaging. USPS Priority 2-3 business days. Free shipping over $150.",
      products: [],
      followUps: ["Do you ship internationally?", "I'm ready to order"],
    };
  }

  const bestsellers = PRODUCTS.filter(p => p.bestseller);
  return {
    text: "Here are our most popular compounds. Tell me more about what you're researching and I can narrow it down.",
    products: bestsellers.length > 0 ? bestsellers : NASAL_SPRAYS.slice(0, 3),
    followUps: ["I need recovery support", "Cognitive enhancement", "I want to place an order"],
  };
}

export function AIAdvisor() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [copiedWallet, setCopiedWallet] = useState<string | null>(null);
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

  // Listen for checkout events from the cart drawer
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.message) {
        setOpen(true);
        // Small delay to let the panel render before sending
        setTimeout(() => handleSend(detail.message), 200);
      }
    };
    window.addEventListener("titan-chat-order", handler);
    return () => window.removeEventListener("titan-chat-order", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const handlePlaceOrder = async (orderData: OrderData, msgIndex: number) => {
    setPlacingOrder(true);

    const subtotal = orderData.items.reduce((s, i) => s + i.price * i.quantity, 0);
    // Simple shipping calc
    const shipping = subtotal >= 150 ? 0 : 12;
    const total = subtotal + shipping;

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: orderData.items,
          name: orderData.name,
          email: orderData.email,
          country: orderData.country,
          address: orderData.address,
          shipping,
          total,
        }),
      });

      const data = await res.json();

      if (data.success) {
        // Update the message to show confirmed state
        setMessages((prev) =>
          prev.map((m, i) =>
            i === msgIndex ? { ...m, orderData: undefined, orderConfirmed: { orderId: data.orderId } } : m
          )
        );
        // Add confirmation message
        const confirmMsg: Message = {
          role: "assistant",
          text: `Order ${data.orderId} is placed! Check your email (${orderData.email}) for confirmation and payment instructions.\n\nSend $${total.toFixed(2)} in crypto to one of the wallets below, then reply to the confirmation email with your transaction hash. We verify on-chain and ship within 24 hours.`,
          followUps: ["What crypto do you accept?", "How long does shipping take?"],
        };
        setMessages((prev) => [...prev, confirmMsg]);
      } else {
        const errMsg: Message = {
          role: "assistant",
          text: "Something went wrong placing the order. Want to try again, or reach us at support@titanpeptidelab.com?",
        };
        setMessages((prev) => [...prev, errMsg]);
      }
    } catch {
      const errMsg: Message = {
        role: "assistant",
        text: "Connection issue — couldn't place the order. Try again or email us at support@titanpeptidelab.com.",
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setPlacingOrder(false);
    }
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: "user", text: text.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setIsTyping(true);

    try {
      const chatHistory = updated
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role, text: m.text }));

      const res = await fetch("/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistory }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      const products = data.productIds ? resolveProducts(data.productIds) : [];

      const assistantMsg: Message = {
        role: "assistant",
        text: data.text,
        products: products.length > 0 ? products : undefined,
        followUps: data.orderData ? undefined : generateFollowUps(data.text, products),
        orderData: data.orderData ?? undefined,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const result = matchProductsFallback(text);
      const assistantMsg: Message = {
        role: "assistant",
        text: result.text,
        products: result.products,
        followUps: result.followUps,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const copyWallet = (label: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedWallet(label);
    setTimeout(() => setCopiedWallet(null), 2000);
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

      {!open && (
        <div className="fixed bottom-6 right-6 z-40 h-14 w-14 animate-ping rounded-full bg-[#1e6f58]/20 pointer-events-none" />
      )}

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[min(600px,calc(100vh-120px))] w-[min(400px,calc(100vw-48px))] flex-col overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-[#e5e5e5] bg-[#1e6f58] px-5 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-medium text-white">Research Advisor</p>
              <p className="text-[11px] text-white/70">Ask anything · Place orders</p>
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

                    {/* Order confirmation card */}
                    {msg.orderData && (
                      <div className="mt-3 rounded-xl bg-white p-4 text-[#333] space-y-3">
                        <p className="text-[12px] font-semibold uppercase tracking-wider text-[#1e6f58]">Order summary</p>
                        {msg.orderData.items.map((item) => (
                          <div key={item.productId} className="flex justify-between text-[13px]">
                            <span>{item.name} x{item.quantity}</span>
                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                        <div className="border-t border-[#eee] pt-2 text-[13px]">
                          <div className="flex justify-between"><span>Ship to</span><span>{msg.orderData.name}</span></div>
                          <div className="flex justify-between"><span>Email</span><span className="truncate ml-2">{msg.orderData.email}</span></div>
                          <div className="flex justify-between"><span>Address</span><span className="text-right ml-2 truncate">{msg.orderData.country}</span></div>
                        </div>
                        <button
                          onClick={() => handlePlaceOrder(msg.orderData!, i)}
                          disabled={placingOrder}
                          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1e6f58] py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#175946] disabled:opacity-60"
                        >
                          {placingOrder ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Placing order...
                            </>
                          ) : (
                            <>
                              <Check className="h-4 w-4" />
                              Place Order
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Order confirmed badge */}
                    {msg.orderConfirmed && (
                      <div className="mt-3 rounded-xl bg-[#e8f0ec] p-3 text-center">
                        <Check className="mx-auto h-6 w-6 text-[#1e6f58]" />
                        <p className="mt-1 text-[13px] font-semibold text-[#1e6f58]">
                          Order placed — {msg.orderConfirmed.orderId}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Wallet addresses after order confirmation */}
                {msg.orderConfirmed && (
                  <div className="mt-2 ml-1 rounded-xl border border-[#e8f0ec] bg-[#f7faf8] p-3 space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#1e6f58]">Payment wallets</p>
                    {[
                      { label: "BTC", address: WALLETS.btc },
                      { label: "ETH/USDC", address: WALLETS.eth },
                      { label: "SOL/USDC", address: WALLETS.sol },
                    ].map((w) => (
                      <button
                        key={w.label}
                        onClick={() => copyWallet(w.label, w.address)}
                        className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2 text-left transition-colors hover:bg-[#f0f5f2]"
                      >
                        <span className="text-[11px] font-semibold text-[#1e6f58] w-16 shrink-0">{w.label}</span>
                        <span className="text-[10px] text-[#666] font-mono truncate flex-1">{w.address}</span>
                        {copiedWallet === w.label ? (
                          <Check className="h-3 w-3 text-[#1e6f58] shrink-0" />
                        ) : (
                          <Copy className="h-3 w-3 text-[#ccc] shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                )}

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
                placeholder="Ask anything or say 'I want to order'..."
                className="flex-1 rounded-full border border-[#e5e5e5] bg-[#fafafa] px-4 py-2.5 text-[14px] text-[#333] placeholder:text-[#aaa] outline-none focus:border-[#1e6f58] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
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

function generateFollowUps(text: string, products: Product[]): string[] {
  const followUps: string[] = [];
  const lower = text.toLowerCase();

  if (products.length === 1) {
    followUps.push(`I'll order ${products[0].name}`);
    followUps.push("What pairs well with this?");
  } else if (products.length > 1) {
    followUps.push("Which one should I start with?");
    followUps.push("I want to order");
  }

  if (lower.includes("stack") || lower.includes("pair")) {
    followUps.push("I'll take the stack");
  }

  if (!lower.includes("discount") && !lower.includes("code")) {
    followUps.push("Any discounts available?");
  }

  if (followUps.length === 0) {
    followUps.push("Show me bestsellers", "I want to order", "What's a good starter?");
  }

  return followUps.slice(0, 3);
}
