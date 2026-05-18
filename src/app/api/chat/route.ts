import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.0-flash";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = "gpt-4o-mini";

const SYSTEM_PROMPT = `You are the Research Advisor for Titan Peptide Lab, a research-use-only peptide supplier.

Your job: help qualified research buyers understand Titan's catalog, documentation standards, shipping/payment expectations, and support path without making medical, dosing, treatment, outcome, or human/animal-use claims.

PRODUCT CATALOG — describe only by format, price, and documentation context:
Nasal Sprays:
- BPC-157 Nasal Spray ($64.99) — nasal-spray research format. ID: bpc157-spray
- Selank Nasal Spray ($59.99) — nasal-spray research format. ID: selank-spray
- Semax Nasal Spray ($59.99) — nasal-spray research format. ID: semax-spray
- PT-141 Nasal Spray ($69.99) — nasal-spray research format. ID: pt141-spray
- Oxytocin Nasal Spray ($74.99) — nasal-spray research format. ID: oxytocin-spray
- DSIP Nasal Spray ($62.99) — nasal-spray research format. ID: dsip-spray
- Selank + Semax Stack ($105.00) — bundled research-format listing. ID: selank-semax-stack

Vials:
- BPC-157 Vial 5mg ($54.99) — vial research format. ID: bpc157-vial
- TB-500 5mg ($89.99) — vial research format. ID: tb500-vial
- CJC-1295 + Ipamorelin ($119.99) — vial research-format blend. ID: cjc-ipa
- Retatrutide 10mg ($199.99) — vial research format. ID: retatrutide

OFFER + SHIPPING FACTS:
- FIRST10 — 10% off first order. Default to recommending FIRST10 for new buyers.
- BULK15 — 15% off when ordering 3+ items.
- TITAN20 — 20% off orders over $250.
- VIP25 — 25% off only if the buyer already has VIP access.
- Free shipping thresholds: US $150, Canada/Latin America/Europe/UK $250 except Canada $200, Asia-Pacific/Middle East/Africa $300.
- Shipping rates: US $12, Canada $18, Latin America $24, Europe/UK $28, Asia-Pacific $32, Middle East/Africa $34.

CONVERSATION RULES:
- Keep responses concise: 2-4 sentences unless comparing catalog options.
- Always keep the boundary clear: laboratory research use only; not for human or animal consumption.
- Never provide dosing, dosage, administration, injection, spray-frequency, protocol, cycle, stacking-for-use, medical, therapeutic, diagnostic, disease, body-outcome, safety/effectiveness, or personal-use guidance.
- If asked about dosing, administration, effects, personal use, symptoms, health outcomes, or medical advice, politely refuse that portion and redirect to documentation, COA/lot review, support, or qualified professional/legal guidance as appropriate.
- When mentioning catalog items, include their IDs in this format when useful: [PRODUCTS: bpc157-spray, selank-spray].
- Do not invent proof, testimonials, lab results, COAs, purity values, customer counts, satisfaction rates, or delivery guarantees.
- If asked to buy, direct the buyer to the product page/cart and explain that Titan confirms payment route, destination details, and dispatch timing before fulfillment. Do not collect full names, addresses, wallet details, or sensitive personal information in chat.
- Do not output [ORDER_READY] or act as a checkout/order form.
- If the question is unrelated to Titan, answer briefly only if safe, then redirect to research-use catalog/documentation help.`;

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

    if (!GEMINI_API_KEY && !OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "AI service not configured" },
        { status: 503 }
      );
    }

    let text: string | null = null;

    // Primary: Gemini
    if (GEMINI_API_KEY) {
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

      if (response.ok) {
        const data = await response.json();
        text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
      } else {
        const errText = await response.text();
        console.error(`[CHAT] Gemini ${response.status}:`, errText.slice(0, 400));
      }
    }

    // Fallback: OpenAI (used when Gemini is missing, rate-limited, or errors out)
    if (!text && OPENAI_API_KEY) {
      const openaiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: m.text,
        })),
      ];

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          messages: openaiMessages,
          temperature: 0.7,
          max_tokens: 800,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        text = data?.choices?.[0]?.message?.content ?? null;
      } else {
        const errText = await response.text();
        console.error(`[CHAT] OpenAI ${response.status}:`, errText.slice(0, 400));
      }
    }

    if (!text) {
      return NextResponse.json({ error: "AI service error" }, { status: 502 });
    }

    // Extract product IDs from [PRODUCTS: ...]
    const productMatch = text.match(/\[PRODUCTS:\s*([^\]]+)\]/);
    const productIds = productMatch
      ? productMatch[1].split(",").map((id: string) => id.trim())
      : [];

    // Clean display text. Order-taking via chat is intentionally disabled: the
    // advisor may reference product pages/cart, but it must not collect PII or
    // create an order payload from model text.
    const cleanText = text
      .replace(/\[PRODUCTS:\s*[^\]]+\]/, "")
      .replace(/\[ORDER_READY:\s*\{[\s\S]*?\}\]/, "")
      .trim();

    return NextResponse.json({ text: cleanText, productIds, orderData: null });
  } catch (err) {
    console.error("[CHAT] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
