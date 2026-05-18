import { NextRequest, NextResponse } from "next/server";
import { findOrder, publicView } from "@/lib/order-ledger";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> },
) {
  const { id } = await ctx.params;
  const order = await findOrder(id);
  if (!order) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(publicView(order));
}
