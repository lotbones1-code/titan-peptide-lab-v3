"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, topic, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName(""); setEmail(""); setSubject(""); setTopic(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1e6f58]">
          <Check className="h-5 w-5 text-white" />
        </div>
        <h3 className="mt-4 text-[15px] font-semibold text-[#0f1613]">Message sent.</h3>
        <p className="mt-1 text-[13px] text-[#8a9690]">We&apos;ll reply within 24–48 hours from the QA bench.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[13px] text-[#1e6f58] underline decoration-[#1e6f58]/30 underline-offset-4 hover:decoration-[#1e6f58]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          id="name"
          value={name}
          onChange={setName}
          required
          placeholder="Dr. Jane Doe"
        />
        <Field
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          placeholder="jane@lab.edu"
        />
      </div>

      <Field
        label="Subject"
        id="subject"
        value={subject}
        onChange={setSubject}
        placeholder="Order #TPL-XXXX, COA request, etc."
      />

      <div>
        <label
          htmlFor="topic"
          className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]"
        >
          Topic
        </label>
        <select
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-2 w-full border-0 border-b border-[rgb(15_22_19/12%)] bg-transparent py-2 text-[14px] text-[#0f1613] focus:border-[#0f1613] focus:outline-none focus:ring-0"
        >
          <option value="">Select…</option>
          <option>General question</option>
          <option>Order status</option>
          <option>COA request</option>
          <option>Volume / laboratory pricing</option>
          <option>Press / partnerships</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]"
        >
          Message *
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          required
          className="mt-2 w-full border-0 border-b border-[rgb(15_22_19/12%)] bg-transparent py-2 text-[14px] leading-relaxed text-[#0f1613] placeholder:text-[#b0b8b4] focus:border-[#0f1613] focus:outline-none focus:ring-0"
          placeholder="Lot number, order ID, or what you need help with…"
        />
      </div>

      {status === "error" && (
        <p className="text-[13px] text-red-500">
          Something went wrong. Email us directly at{" "}
          <a href="mailto:support@titanpeptidelab.com" className="underline">
            support@titanpeptidelab.com
          </a>
        </p>
      )}

      <div className="flex items-center justify-between pt-4">
        <p className="max-w-xs text-[11px] text-[#8a9690]">
          Reply within 24–48h from the QA bench
        </p>
        <button
          type="submit"
          disabled={status === "sending" || !name || !email || !message}
          className="inline-flex items-center gap-2 rounded-lg bg-[#0f1613] px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#1a2420] disabled:opacity-50"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a9690]"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-[rgb(15_22_19/12%)] bg-transparent py-2 text-[14px] text-[#0f1613] placeholder:text-[#b0b8b4] focus:border-[#0f1613] focus:outline-none focus:ring-0"
      />
    </div>
  );
}
