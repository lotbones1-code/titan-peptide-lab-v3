"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "./reveal";
import { Check, Loader2 } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/ssj4shamil@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[Titan Newsletter] New subscriber — ${email.trim()}`,
          _captcha: "false",
          _template: "table",
          _autoresponse: `Welcome to the Titan Peptide Lab list.\n\nYou'll get restock and batch release emails. No spam, no upsells.\n\nYour first-order code: FIRST10 — 10% off anything in the catalog.\nShop: https://titanpeptidelab.com/products\n\n— Titan Peptide Lab`,
          Email: email.trim(),
          Source: "homepage-newsletter",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus("sent");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl bg-[#0f1110] p-8 text-center text-white md:p-12">
            <h3 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-[1.1] tracking-[-0.03em]">
              Get restock and batch updates
            </h3>
            <p className="mx-auto mt-3 max-w-[40ch] text-[14px] leading-[1.7] text-white/60">
              We email when core sprays come back in stock or new batches release. No spam, no upsells.
            </p>
            {status === "sent" ? (
              <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a5c48] px-5 py-2.5 text-[13px] font-semibold text-white">
                <Check className="h-4 w-4" />
                Subscribed — check your inbox for FIRST10.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@lab.com"
                  aria-label="Email address"
                  className="h-11 flex-1 rounded-full border-white/12 bg-white px-5 text-[14px] text-[#0f1110] placeholder:text-[#aaa]"
                />
                <Button
                  type="submit"
                  disabled={status === "sending" || !email.trim()}
                  className="h-11 rounded-full bg-[#1a5c48] px-6 text-[13px] font-semibold text-white hover:bg-[#23705a] disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            )}
            {status === "error" && (
              <p className="mt-3 text-[12px] text-red-300">
                Couldn&apos;t subscribe — email support@titanpeptidelab.com and we&apos;ll add you.
              </p>
            )}
            <p className="mt-4 text-[11px] text-white/35">
              For laboratory research purposes only.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
