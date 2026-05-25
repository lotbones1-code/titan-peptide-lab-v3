"use client";

import { useId, useState } from "react";
import { Check, Loader2 } from "lucide-react";

type AffiliateApplication = {
  name: string;
  email: string;
  channel: string;
  platformUrl: string;
  audienceSize: string;
  audienceCategory: string;
  introPlan: string;
  createdAt: string;
};

const STORAGE_KEY = "titan_affiliate_beta_applications";

function saveApplication(application: AffiliateApplication) {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const existing = raw ? (JSON.parse(raw) as AffiliateApplication[]) : [];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([application, ...existing].slice(0, 25)));
  } catch {
    // Local beta fallback should never block form completion.
  }
}

export function AffiliateApplicationForm() {
  const id = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = event.currentTarget;
    const application = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      channel: String(data.get("channel") || "").trim(),
      platformUrl: String(data.get("platformUrl") || "").trim(),
      audienceSize: String(data.get("audienceSize") || "").trim(),
      audienceCategory: String(data.get("audienceCategory") || "").trim(),
      introPlan: String(data.get("introPlan") || "").trim(),
      createdAt: new Date().toISOString(),
    } satisfies AffiliateApplication;

    setStatus("sending");
    saveApplication(application);

    try {
      const response = await fetch("https://formsubmit.co/ajax/4ec82415df18ef2a8a1519b6919ace7c", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[Titan Affiliate Beta] ${application.channel || "New applicant"} — ${application.name}`,
          _captcha: "false",
          _template: "table",
          _replyto: application.email,
          _autoresponse:
            "Thanks for applying to the Titan affiliate beta. We received your application and will review fit, audience, disclosure standards, and claim-safe positioning before any link/code is issued.\n\n— The Titan Peptide Lab team",
          email: application.email,
          Name: application.name,
          Email: application.email,
          Channel: application.channel,
          "Platform URL": application.platformUrl,
          "Audience size": application.audienceSize || "—",
          "Audience category": application.audienceCategory || "—",
          "Claim-safe intro plan": application.introPlan,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error("Affiliate application submission failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      id="apply"
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-[#dfe6e2] bg-white p-5 shadow-[0_20px_70px_-54px_rgb(15_22_19/38%)] md:p-7"
    >
      <div className="flex items-start justify-between gap-6 border-b border-[#edf0ec] pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#1e6f58]">
            Application form
          </p>
          <h2 className="mt-2 font-serif text-[1.8rem] leading-[1.04] tracking-[-0.03em] text-[#0f1613]">
            Apply to the beta.
          </h2>
        </div>
        <span className="rounded-full border border-[#dfe6e2] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a9690]">
          Small beta
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field id={`${id}-name`} label="Full name" name="name" autoComplete="name" required />
        <Field id={`${id}-email`} label="Email" name="email" type="email" autoComplete="email" required />
        <Field id={`${id}-channel`} label="Brand / channel" name="channel" required />
        <Field id={`${id}-url`} label="Primary platform URL" name="platformUrl" type="url" placeholder="https://" required />
        <Field id={`${id}-audience`} label="Approx. audience size" name="audienceSize" placeholder="e.g. 18,000" />
        <label className="block">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
            Audience category
          </span>
          <select
            name="audienceCategory"
            className="mt-2 min-h-11 w-full rounded-xl border border-[#dfe6e2] bg-white px-3 text-[14px] text-[#0f1613] outline-none focus-visible:border-[#1e6f58] focus-visible:ring-2 focus-visible:ring-[#1e6f58]/15"
            defaultValue="biohacking"
          >
            <option value="biohacking">Biohacking / longevity</option>
            <option value="fitness">Fitness / performance</option>
            <option value="podcast">Podcast / newsletter</option>
            <option value="science">Science / research education</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
          How would you introduce Titan?
        </span>
        <textarea
          name="introPlan"
          required
          rows={5}
          className="mt-2 w-full rounded-2xl border border-[#dfe6e2] bg-white px-4 py-3 text-[14px] leading-6 text-[#0f1613] outline-none focus-visible:border-[#1e6f58] focus-visible:ring-2 focus-visible:ring-[#1e6f58]/15"
          placeholder="Keep it claim-safe: documentation, COA literacy, checkout clarity, research-use-only boundaries."
        />
      </label>

      <div className="mt-5 space-y-3 rounded-[1.2rem] border border-[#edf0ec] bg-[#f7faf8] p-4 text-[12px] leading-5 text-[#44514b]">
        <CheckRow label="I will disclose my Titan relationship clearly wherever I use a link or code." />
        <CheckRow label="I will not make medical, dosing, disease, treatment, human-use, transformation, or unsupported safety/effectiveness claims." />
        <CheckRow label="I understand Titan may review content and hold commissions for fraud, refunds, or compliance issues." />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1e6f58] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#175946] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6f58]/25 sm:w-auto"
      >
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        {status === "sent" ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
        {status === "sending" ? "Sending…" : status === "sent" ? "Application sent" : "Apply for review"}
      </button>
      {status === "error" ? (
        <p className="mt-3 text-[12px] leading-5 text-red-500">
          We saved a local copy in this browser, but the application did not reach the review inbox. Email{" "}
          <a href="mailto:support@titanpeptidelab.com" className="underline underline-offset-4">
            support@titanpeptidelab.com
          </a>{" "}
          with “Affiliate beta” in the subject.
        </p>
      ) : (
        <p className="mt-3 text-[11px] leading-5 text-[#8a9690]">
          Applications go to Titan&apos;s review inbox and are also saved locally in this browser for QA fallback. No account, API key, or affiliate link is created automatically.
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a9690]">
        {label}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 min-h-11 w-full rounded-xl border border-[#dfe6e2] bg-white px-3 text-[14px] text-[#0f1613] outline-none placeholder:text-[#b8c1bc] focus-visible:border-[#1e6f58] focus-visible:ring-2 focus-visible:ring-[#1e6f58]/15"
      />
    </label>
  );
}

function CheckRow({ label }: { label: string }) {
  return (
    <label className="flex gap-3">
      <input type="checkbox" required className="mt-1 h-4 w-4 accent-[#1e6f58]" />
      <span>{label}</span>
    </label>
  );
}
