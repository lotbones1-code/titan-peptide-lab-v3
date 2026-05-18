import { NextRequest, NextResponse } from "next/server";
import { findOrder, updateOrder } from "@/lib/order-ledger";
import { sendSaleAlert } from "@/lib/telegram-alert";

export const dynamic = "force-dynamic";

interface WebhookPayload {
  orderId: string;
  txHash: string;
  chain?: string;
  walletAddress?: string;
  amount?: string;
  paymentCoin?: string;
  confirmations?: number;
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function POST(req: NextRequest) {
  const expected = process.env.ORDER_WEBHOOK_SECRET;
  if (!expected) {
    return NextResponse.json(
      { error: "Webhook disabled — ORDER_WEBHOOK_SECRET not set" },
      { status: 503 },
    );
  }
  const provided =
    req.headers.get("x-webhook-secret") ??
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    "";
  if (!provided || !timingSafeEqual(provided, expected)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: WebhookPayload;
  try {
    body = (await req.json()) as WebhookPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.orderId || !body.txHash) {
    return NextResponse.json(
      { error: "Missing orderId or txHash" },
      { status: 400 },
    );
  }

  const existing = await findOrder(body.orderId);
  if (!existing) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  if (existing.status === "payment_received" || existing.status === "shipped") {
    return NextResponse.json({
      ok: true,
      alreadyConfirmed: true,
      status: existing.status,
    });
  }

  const updated = await updateOrder(body.orderId, {
    status: "payment_received",
    txHash: body.txHash,
    chain: body.chain ?? existing.chain,
    walletAddress: body.walletAddress ?? existing.walletAddress,
    paymentCoin: body.paymentCoin ?? existing.paymentCoin,
    txConfirmedAt: new Date().toISOString(),
    txConfirmations:
      typeof body.confirmations === "number" ? body.confirmations : undefined,
  });

  if (!updated) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }

  // Fire 🚨💰 Telegram alert on confirmed receipt.
  const itemSummary = updated.items
    .map((i) => `${i.name} ×${i.quantity}`)
    .join(", ");
  try {
    await sendSaleAlert({
      orderId: updated.orderId,
      total: updated.total,
      customerEmail: updated.customerEmail,
      customerName: updated.customerName,
      itemSummary,
      paymentCoin: updated.paymentCoin,
      txHash: updated.txHash,
    });
  } catch (err) {
    console.error("[order-webhook] alert send failed", err);
  }

  return NextResponse.json({
    ok: true,
    orderId: updated.orderId,
    status: updated.status,
    txConfirmedAt: updated.txConfirmedAt,
  });
}
