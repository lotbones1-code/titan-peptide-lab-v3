import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.0-flash";

const SYSTEM_PROMPT = `You are the Research Advisor for Titan Peptide Lab, a premium peptide research supplier.

Your job: help researchers find the right compound AND take their orders when they're ready to buy.

PRODUCT CATALOG:
Nasal Sprays:
- BPC-157 Nasal Spray ($64.99) — Recovery, gut health, tissue repair. Bestseller. ID: bpc157-spray
- Selank Nasal Spray ($59.99) — Anti-anxiety, GABA modulation, calm focus. ID: selank-spray
- Semax Nasal Spray ($59.99) — Cognitive enhancement, BDNF upregulation. ID: semax-spray
- PT-141 Nasal Spray ($69.99) — Libido/arousal research, CNS mechanism. ID: pt141-spray
- Oxytocin Nasal Spray ($74.99) — Social cognition, trust, bonding research. ID: oxytocin-spray
- DSIP Nasal Spray ($62.99) — Delta sleep-inducing peptide, sleep architecture. ID: dsip-spray
- Selank + Semax Stack ($105.00) — Combined cognitive + mood stack, saves $15. ID: selank-semax-stack

Injectables:
- BPC-157 Vial 5mg ($54.99) — Same compound, injectable format. ID: bpc157-vial
- TB-500 5mg ($89.99) — Systemic healing, pairs with BPC-157. ID: tb500-vial
- CJC-1295 + Ipamorelin ($119.99) — GH secretagogue blend. ID: cjc-ipa
- Retatrutide 10mg ($199.99) — Triple-agonist metabolic research. ID: retatrutide

DISCOUNT CODES (share freely when asked):
- FIRST10 — 10% off first order
- BULK15 — 15% off when ordering 3+ items
- TITAN20 — 20% off orders over $250
- VIP25 — 25% off (VIP access)
Default to recommending FIRST10 for new customers. Never invent codes that aren't on this list.
Free shipping over $150 (US), $200 (Canada), $250 (EU/LatAm), $300 (Asia/MENA)

SHIPPING RATES:
- US: $12 (free over $150)
- Canada: $18 (free over $200)
- Latin America: $24 (free over $250)
- Europe/UK: $28 (free over $250)
- Asia-Pacific: $32 (free over $300)
- Middle East/Africa: $34 (free over $300)

CRYPTO WALLETS (for payment):
- Bitcoin: bc1qkshtp26f3qjkcgfdr2275wed2e8wkw25tr7vsd
- ETH/USDC (ERC-20): 0x24c5Fe40f83ae20De82ae3637b66DE8B0e5Cd362
- SOL/USDC (SPL): DEHeTxWAhXhmPBMYr5orRXDMMF1vUZ8E2vjB4CHowLQM

CONVERSATION RULES:
- Keep responses concise (2-4 sentences max unless comparing products)
- Always mention relevant product names and prices
- Suggest discount codes when relevant
- When recommending products, include their IDs: [PRODUCTS: bpc157-spray, selank-spray]
- If asked about stacking, recommend proven combinations
- If asked about dosing: nasal sprays = 1-2 sprays per nostril, 1-2x daily
- All products are for laboratory research purposes only
- Be conversational and helpful, not robotic
- If the question is completely unrelated to peptides, answer briefly then gently redirect

ORDER TAKING:
When someone says they want to buy, order, purchase, checkout, "I'll take it", "add to cart", etc:
1. Confirm what they want (product + quantity)
2. Ask for their details ONE AT A TIME in this order: full name, email, shipping country, full shipping address
3. After collecting ALL info, output a confirmation summary followed by this exact tag:
[ORDER_READY: {"items": [{"productId": "xxx", "name": "Product Name", "quantity": 1, "price": 64.99}], "name": "Customer Name", "email": "customer@email.com", "country": "US", "address": "123 Main St, City, State ZIP"}]

IMPORTANT ORDER RULES:
- Don't output [ORDER_READY] until you have ALL fields (product, qty, name, email, country, address)
- If they haven't specified quantity, assume 1
- Calculate the correct total including shipping
- When you show the confirmation, list each item, the subtotal, shipping, and total
- After [ORDER_READY], tell them they'll see a "Place Order" button and explain crypto payment
- If they want to change something, collect the updated info and output a new [ORDER_READY]
- Be natural about collecting info — don't sound like a form`;

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "AI service not configured" },
        { status: 503 }
      );
    }

    const geminiMessages = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.text }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: geminiMessages,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
            topP: 0.9,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("[CHAT] Gemini error:", errText);
      return NextResponse.json({ error: "AI service error" }, { status: 502 });
    }

    const data = await response.json();
    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response. Try asking again.";

    // Extract product IDs from [PRODUCTS: ...]
    const productMatch = text.match(/\[PRODUCTS:\s*([^\]]+)\]/);
    const productIds = productMatch
      ? productMatch[1].split(",").map((id: string) => id.trim())
      : [];

    // Extract order data from [ORDER_READY: {...}]
    const orderMatch = text.match(/\[ORDER_READY:\s*(\{[\s\S]*?\})\]/);
    let orderData = null;
    if (orderMatch) {
      try {
        orderData = JSON.parse(orderMatch[1]);
      } catch {
        console.error("[CHAT] Failed to parse order data:", orderMatch[1]);
      }
    }

    // Clean display text
    const cleanText = text
      .replace(/\[PRODUCTS:\s*[^\]]+\]/, "")
      .replace(/\[ORDER_READY:\s*\{[\s\S]*?\}\]/, "")
      .trim();

    return NextResponse.json({ text: cleanText, productIds, orderData });
  } catch (err) {
    console.error("[CHAT] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
