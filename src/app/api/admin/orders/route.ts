import { NextRequest, NextResponse } from "next/server";
import { listOrders, type OrderStatus } from "@/lib/order-ledger";

export const dynamic = "force-dynamic";

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

const VALID_STATUS: OrderStatus[] = [
  "awaiting_payment",
  "payment_received",
  "shipped",
  "cancelled",
  "refunded",
];

export async function GET(req: NextRequest) {
  const expected = process.env.ADMIN_ORDER_TOKEN;
  if (!expected) {
    return NextResponse.json(
      { error: "Admin readback disabled — ADMIN_ORDER_TOKEN not set" },
      { status: 503 },
    );
  }
  const provided =
    req.headers.get("x-admin-token") ??
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    "";
  if (!provided || !timingSafeEqual(provided, expected)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const statusParam = url.searchParams.get("status");
  const limitParam = url.searchParams.get("limit");
  const status =
    statusParam && (VALID_STATUS as string[]).includes(statusParam)
      ? (statusParam as OrderStatus)
      : undefined;
  const limit = limitParam ? Math.max(1, Math.min(parseInt(limitParam, 10) || 50, 500)) : 50;

  const orders = await listOrders({ status, limit });
  return NextResponse.json({
    count: orders.length,
    status: status ?? "all",
    orders,
  });
}
