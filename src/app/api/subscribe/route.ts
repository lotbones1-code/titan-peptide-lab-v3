import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || "Titan Peptide Lab <hello@titanpeptidelab.com>";
const SUBSCRIBERS_FILE = path.join(process.cwd(), "data", "subscribers.json");

interface Subscriber {
  email: string;
  source: string;
  subscribedAt: string;
}

async function loadSubscribers(): Promise<Subscriber[]> {
  try {
    const raw = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function saveSubscriber(sub: Subscriber) {
  const dir = path.dirname(SUBSCRIBERS_FILE);
  await fs.mkdir(dir, { recursive: true });

  const subs = await loadSubscribers();
  if (subs.some((s) => s.email.toLowerCase() === sub.email.toLowerCase())) {
    return false; // already subscribed
  }
  subs.push(sub);
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subs, null, 2));
  return true;
}

async function sendWelcomeEmail(email: string) {
  if (!RESEND_API_KEY) {
    console.log(`[SUBSCRIBE] Would send welcome email to ${email}`);
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
      to: email,
      subject: "Welcome to Titan Peptide Lab — here's your 10% off",
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#faf9f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <h1 style="font-size:24px;font-weight:600;color:#0f1613;text-align:center;margin:0 0 24px;">Titan Peptide Lab</h1>
    <div style="background:#fff;border-radius:16px;border:1px solid #e8e8e8;padding:32px;margin-bottom:24px;">
      <h2 style="font-size:20px;color:#0f1613;margin:0 0 12px;">Welcome to the lab.</h2>
      <p style="font-size:14px;color:#555;line-height:1.7;margin:0 0 16px;">
        You're in. Use code <strong style="color:#1e6f58;">FIRST10</strong> at checkout for 10% off your first order.
      </p>
      <div style="background:#f0f5f2;border-radius:12px;padding:20px;text-align:center;margin:0 0 16px;">
        <p style="font-size:12px;color:#888;margin:0 0 4px;">YOUR CODE</p>
        <p style="font-size:28px;font-weight:700;color:#1e6f58;margin:0;letter-spacing:2px;">FIRST10</p>
      </div>
      <p style="font-size:13px;color:#888;line-height:1.6;margin:0;">
        We'll send you updates on new compound releases, batch availability, and research protocols. No spam — just science.
      </p>
    </div>
    <p style="text-align:center;font-size:11px;color:#bbb;margin:0;">
      Titan Peptide Lab · All products sold for laboratory research purposes only
    </p>
  </div>
</body>
</html>`,
    }),
  });
}

export async function POST(req: NextRequest) {
  try {
    const { email, source } = (await req.json()) as {
      email: string;
      source: string;
    };

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const isNew = await saveSubscriber({
      email: email.trim().toLowerCase(),
      source: source || "unknown",
      subscribedAt: new Date().toISOString(),
    });

    if (isNew) {
      await sendWelcomeEmail(email.trim());
      console.log(`[SUBSCRIBE] New subscriber: ${email} (source: ${source})`);
    } else {
      console.log(`[SUBSCRIBE] Already subscribed: ${email}`);
    }

    return NextResponse.json({ success: true, isNew });
  } catch (err) {
    console.error("[SUBSCRIBE] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
