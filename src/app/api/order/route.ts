import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ORDER_NOTIFY_EMAIL = process.env.ORDER_NOTIFY_EMAIL || "orders@titanpeptidelab.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Titan Peptide Lab <orders@titanpeptidelab.com>";
const ORDERS_FILE = path.join(process.cwd(), "data", "orders.json");

interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

interface OrderPayload {
  orderId: string;
  items: OrderItem[];
  subtotal: string;
  shipping: string;
  total: string;
  customerEmail: string;
  customerName: string;
  country: string;
  shippingAddress: string;
  status: "awaiting_payment" | "payment_received" | "shipped";
  // Legacy single-product fields (kept for backwards compat)
  product?: string;
  productId?: string;
  quantity?: number;
  chain?: string;
  walletAddress?: string;
  txHash?: string;
  discountCode?: string;
}

function customerConfirmationHtml(order: OrderPayload): string {
  const itemRows = order.items
    .map(
      (item) =>
        `<tr>
          <td style="padding:10px 0;color:#0f1613;border-bottom:1px solid #f0f0f0;">${item.name} × ${item.quantity}</td>
          <td style="padding:10px 0;color:#0f1613;text-align:right;border-bottom:1px solid #f0f0f0;font-weight:500;">$${(item.price * item.quantity).toFixed(2)}</td>
        </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#faf9f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <h1 style="font-size:24px;font-weight:600;color:#0f1613;margin:0;">Titan Peptide Lab</h1>
      <p style="font-size:13px;color:#999;margin:4px 0 0;">Order Confirmation</p>
    </div>

    <div style="background:#ffffff;border-radius:16px;border:1px solid #e8e8e8;padding:32px;margin-bottom:24px;">
      <div style="text-align:center;margin-bottom:24px;">
        <div style="display:inline-block;width:56px;height:56px;border-radius:50%;background:#1e6f58;line-height:56px;text-align:center;">
          <span style="color:#fff;font-size:24px;">✓</span>
        </div>
        <h2 style="font-size:20px;color:#0f1613;margin:16px 0 4px;">Order received</h2>
        <p style="font-size:14px;color:#1e6f58;font-family:monospace;margin:0;">${order.orderId}</p>
      </div>

      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${itemRows}
        <tr>
          <td style="padding:10px 0;color:#888;border-bottom:1px solid #f0f0f0;">Subtotal</td>
          <td style="padding:10px 0;color:#0f1613;text-align:right;border-bottom:1px solid #f0f0f0;">$${order.subtotal}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#888;border-bottom:1px solid #f0f0f0;">Shipping</td>
          <td style="padding:10px 0;color:#0f1613;text-align:right;border-bottom:1px solid #f0f0f0;">${order.shipping === "0.00" || order.shipping === "0" ? "Free" : "$" + order.shipping}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#888;">Total</td>
          <td style="padding:10px 0;color:#0f1613;text-align:right;font-weight:600;font-size:16px;">$${order.total}</td>
        </tr>
      </table>
    </div>

    <div style="background:#ffffff;border-radius:16px;border:1px solid #e8e8e8;padding:24px;margin-bottom:24px;">
      <h3 style="font-size:14px;color:#0f1613;margin:0 0 12px;">Pay with crypto</h3>
      <div style="font-size:13px;color:#555;line-height:1.7;">
        <p style="margin:0 0 8px;">Send <strong>$${order.total} USD</strong> in crypto to one of these wallets:</p>
        <p style="margin:0 0 4px;"><strong>BTC:</strong> <span style="font-family:monospace;font-size:11px;word-break:break-all;">bc1qkshtp26f3qjkcgfdr2275wed2e8wkw25tr7vsd</span></p>
        <p style="margin:0 0 4px;"><strong>ETH/USDC:</strong> <span style="font-family:monospace;font-size:11px;word-break:break-all;">0x24c5Fe40f83ae20De82ae3637b66DE8B0e5Cd362</span></p>
        <p style="margin:0 0 12px;"><strong>SOL/USDC:</strong> <span style="font-family:monospace;font-size:11px;word-break:break-all;">DEHeTxWAhXhmPBMYr5orRXDMMF1vUZ8E2vjB4CHowLQM</span></p>
        <p style="margin:0;">Reply to this email with your <strong>transaction hash</strong> once sent. We'll verify and ship within 24 hours.</p>
      </div>
    </div>

    <div style="background:#f0f5f2;border-radius:12px;padding:16px;text-align:center;margin-bottom:24px;">
      <p style="font-size:13px;color:#1e6f58;margin:0;font-weight:500;">
        Questions? Reply to this email or reach us at support@titanpeptidelab.com
      </p>
    </div>

    <p style="text-align:center;font-size:11px;color:#bbb;margin:0;">
      Titan Peptide Lab · All products sold for laboratory research purposes only
    </p>
  </div>
</body>
</html>`;
}

function internalNotificationHtml(order: OrderPayload): string {
  const itemRows = order.items
    .map(
      (item) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#888;">${item.name}</td><td>${item.quantity} × $${item.price.toFixed(2)}</td></tr>`
    )
    .join("");

  return `
<h2>New Order: ${order.orderId}</h2>
<p><strong>Status: ${order.status.toUpperCase()}</strong></p>
<table style="font-size:14px;border-collapse:collapse;">
  ${itemRows}
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Subtotal</td><td>$${order.subtotal}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Shipping</td><td>${order.shipping === "0.00" || order.shipping === "0" ? "Free" : "$" + order.shipping}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Total</td><td><strong>$${order.total}</strong></td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Customer</td><td>${order.customerName} (${order.customerEmail})</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Country</td><td>${order.country}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Address</td><td style="white-space:pre-line;">${order.shippingAddress}</td></tr>
</table>`;
}

async function sendEmail(to: string, subject: string, html: string) {
  if (!RESEND_API_KEY) {
    console.log(`[ORDER] Would send email to ${to}: ${subject}`);
    return;
  }

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    }),
  });
}

async function saveOrder(order: OrderPayload) {
  const dir = path.dirname(ORDERS_FILE);
  await fs.mkdir(dir, { recursive: true });

  let orders: (OrderPayload & { _receivedAt?: string })[] = [];
  try {
    const raw = await fs.readFile(ORDERS_FILE, "utf-8");
    orders = JSON.parse(raw);
  } catch {
    // file doesn't exist yet
  }

  orders.push({ ...order, _receivedAt: new Date().toISOString() });
  await fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

function generateOrderId() {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TPL-${ts.slice(-4)}${rand}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // New chatbot order format
    if (body.items && Array.isArray(body.items)) {
      const orderId = generateOrderId();
      const items: OrderItem[] = body.items;
      const subtotal = items.reduce((sum: number, i: OrderItem) => sum + i.price * i.quantity, 0);

      const order: OrderPayload = {
        orderId,
        items,
        subtotal: subtotal.toFixed(2),
        shipping: body.shipping?.toFixed(2) ?? "0.00",
        total: body.total?.toFixed(2) ?? subtotal.toFixed(2),
        customerEmail: body.email,
        customerName: body.name,
        country: body.country,
        shippingAddress: body.address,
        status: "awaiting_payment",
      };

      if (!order.customerEmail || !order.customerName || !order.shippingAddress || items.length === 0) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }

      await saveOrder(order);

      console.log(`[ORDER] ${orderId} — ${items.length} items — $${order.total} — ${order.customerEmail} — AWAITING PAYMENT`);

      // Send customer confirmation with payment instructions
      await sendEmail(
        order.customerEmail,
        `Order confirmed — ${orderId} — payment instructions inside`,
        customerConfirmationHtml(order)
      );

      // Notify us
      await sendEmail(
        ORDER_NOTIFY_EMAIL,
        `New order: ${orderId} — $${order.total} — awaiting payment`,
        internalNotificationHtml(order)
      );

      return NextResponse.json({ success: true, orderId });
    }

    // Legacy single-product format
    const order = body as OrderPayload;
    if (!order.orderId || !order.customerEmail || !order.product) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await saveOrder(order);
    console.log(`[ORDER] ${order.orderId} — ${order.product} × ${order.quantity} — $${order.total} — ${order.customerEmail}`);

    await sendEmail(
      order.customerEmail,
      `Order confirmed — ${order.orderId}`,
      customerConfirmationHtml(order)
    );

    await sendEmail(
      ORDER_NOTIFY_EMAIL,
      `New order: ${order.orderId} — $${order.total}`,
      internalNotificationHtml(order)
    );

    return NextResponse.json({ success: true, orderId: order.orderId });
  } catch (err) {
    console.error("[ORDER] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
