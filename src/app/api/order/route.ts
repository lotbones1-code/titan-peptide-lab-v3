import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ORDER_NOTIFY_EMAIL = process.env.ORDER_NOTIFY_EMAIL || "orders@titanpeptidelab.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Titan Peptide Lab <orders@titanpeptidelab.com>";

interface OrderPayload {
  orderId: string;
  product: string;
  productId: string;
  quantity: number;
  total: string;
  chain: string;
  walletAddress: string;
  txHash: string;
  customerEmail: string;
  customerName: string;
  shippingAddress: string;
  discountCode?: string;
}

function customerConfirmationHtml(order: OrderPayload): string {
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
        <tr>
          <td style="padding:10px 0;color:#888;border-bottom:1px solid #f0f0f0;">Product</td>
          <td style="padding:10px 0;color:#0f1613;text-align:right;border-bottom:1px solid #f0f0f0;font-weight:500;">${order.product} × ${order.quantity}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#888;border-bottom:1px solid #f0f0f0;">Total</td>
          <td style="padding:10px 0;color:#0f1613;text-align:right;border-bottom:1px solid #f0f0f0;font-weight:600;font-size:16px;">$${order.total}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#888;border-bottom:1px solid #f0f0f0;">Payment</td>
          <td style="padding:10px 0;color:#0f1613;text-align:right;border-bottom:1px solid #f0f0f0;">${order.chain}</td>
        </tr>
        <tr>
          <td style="padding:10px 0;color:#888;">Tx hash</td>
          <td style="padding:10px 0;color:#0f1613;text-align:right;font-family:monospace;font-size:11px;word-break:break-all;">${order.txHash}</td>
        </tr>
      </table>
    </div>

    <div style="background:#ffffff;border-radius:16px;border:1px solid #e8e8e8;padding:24px;margin-bottom:24px;">
      <h3 style="font-size:14px;color:#0f1613;margin:0 0 12px;">What happens next</h3>
      <div style="font-size:13px;color:#555;line-height:1.7;">
        <p style="margin:0 0 8px;">1. We verify your payment on-chain (usually within 1-2 hours)</p>
        <p style="margin:0 0 8px;">2. Your order is packed with cold-chain materials and a batch-matched COA</p>
        <p style="margin:0;">3. You'll receive a tracking number via email once shipped</p>
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
  return `
<h2>New Order: ${order.orderId}</h2>
<table style="font-size:14px;border-collapse:collapse;">
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Product</td><td>${order.product} × ${order.quantity}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Total</td><td><strong>$${order.total}</strong></td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Chain</td><td>${order.chain}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Tx Hash</td><td style="font-family:monospace;font-size:12px;word-break:break-all;">${order.txHash}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Customer</td><td>${order.customerName} (${order.customerEmail})</td></tr>
  <tr><td style="padding:4px 12px 4px 0;color:#888;">Address</td><td style="white-space:pre-line;">${order.shippingAddress}</td></tr>
  ${order.discountCode ? `<tr><td style="padding:4px 12px 4px 0;color:#888;">Discount</td><td>${order.discountCode}</td></tr>` : ""}
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

export async function POST(req: NextRequest) {
  try {
    const order: OrderPayload = await req.json();

    // Basic validation
    if (!order.orderId || !order.customerEmail || !order.txHash || !order.product) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log the order
    console.log(`[ORDER] ${order.orderId} — ${order.product} × ${order.quantity} — $${order.total} — ${order.chain} — ${order.customerEmail}`);

    // Send customer confirmation email
    await sendEmail(
      order.customerEmail,
      `Order confirmed — ${order.orderId}`,
      customerConfirmationHtml(order)
    );

    // Send internal notification
    await sendEmail(
      ORDER_NOTIFY_EMAIL,
      `🔔 New order: ${order.orderId} — $${order.total}`,
      internalNotificationHtml(order)
    );

    return NextResponse.json({ success: true, orderId: order.orderId });
  } catch (err) {
    console.error("[ORDER] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
