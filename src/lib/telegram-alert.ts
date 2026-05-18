const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export interface SaleAlertInput {
  orderId: string;
  total: string;
  customerEmail: string;
  customerName?: string;
  itemSummary: string;
  paymentCoin?: string;
  txHash?: string;
  repeats?: number;
}

async function sendOne(text: string): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log("[telegram-alert] no TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID — skipped");
    return false;
  }
  try {
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          disable_web_page_preview: true,
        }),
      },
    );
    return res.ok;
  } catch (err) {
    console.error("[telegram-alert] send error", err);
    return false;
  }
}

export async function sendSaleAlert(input: SaleAlertInput): Promise<boolean> {
  const lines = [
    `🚨💰 TITAN SALE — $${input.total}`,
    `Order: ${input.orderId}`,
    `Items: ${input.itemSummary}`,
    `Customer: ${input.customerName ?? "(no name)"} <${input.customerEmail}>`,
  ];
  if (input.paymentCoin) lines.push(`Coin: ${input.paymentCoin}`);
  if (input.txHash) lines.push(`TX: ${input.txHash}`);
  const text = lines.join("\n");
  const repeats = Math.max(1, Math.min(input.repeats ?? 2, 3));
  let ok = false;
  for (let i = 0; i < repeats; i++) {
    const sent = await sendOne(text);
    ok = ok || sent;
  }
  return ok;
}
