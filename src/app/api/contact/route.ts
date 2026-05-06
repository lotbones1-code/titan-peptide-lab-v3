import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_SENDER;
const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;
const SUPPORT_EMAIL = process.env.ORDER_NOTIFY_EMAIL || "support@titanpeptidelab.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, topic, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const fullSubject = `[Titan Contact] ${topic || "General"}: ${subject || "No subject"} — from ${name}`;

    const html = `
      <h2>New contact form submission</h2>
      <table style="font-size:14px;border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;color:#888;">Name</td><td>${name}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888;">Topic</td><td>${topic || "General"}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888;">Subject</td><td>${subject || "—"}</td></tr>
      </table>
      <hr style="margin:16px 0;border:none;border-top:1px solid #eee;">
      <p style="font-size:14px;line-height:1.6;white-space:pre-line;">${message}</p>
    `;

    if (GMAIL_USER && GMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: GMAIL_USER, pass: GMAIL_PASS },
      });
      await transporter.sendMail({
        from: `Titan Peptide Lab <${GMAIL_USER}>`,
        to: SUPPORT_EMAIL,
        replyTo: email,
        subject: fullSubject,
        html,
      });
    } else {
      console.log(`[CONTACT] No email provider — would send: ${fullSubject}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[CONTACT] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
