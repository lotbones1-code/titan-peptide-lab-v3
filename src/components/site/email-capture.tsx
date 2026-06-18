"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X, Gift } from "lucide-react";

// Routes where the popup must never appear — anything past intent.
const SUPPRESSED_PATHS = ["/checkout", "/cart"];

// Tuning constants. Slower timer + higher scroll threshold + exit-intent
// (desktop) + 30-day localStorage TTL — less annoying, more committed-reader.
const TIMER_MS = 90_000;
const SCROLL_THRESHOLD = 0.7;
const MIN_DWELL_MS = 8_000;
const DISMISS_KEY = "titan-email-dismissed-at";
const DISMISS_TTL_MS = 30 * 24 * 60 * 60 * 1000;

function isFreshDismiss(): boolean {
  if (typeof window === "undefined") return false;
  const raw = window.localStorage.getItem(DISMISS_KEY);
  if (!raw) {
    // Migrate any old sessionStorage flag so users who already dismissed don't
    // get the popup again on the next visit.
    if (window.sessionStorage.getItem("titan-email-dismissed")) {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
      return true;
    }
    return false;
  }
  const ts = Number(raw);
  if (!Number.isFinite(ts)) return false;
  return Date.now() - ts < DISMISS_TTL_MS;
}

export function EmailCapture() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const suppressed = SUPPRESSED_PATHS.some((p) => pathname?.startsWith(p));

  useEffect(() => {
    if (suppressed) return;

    if (isFreshDismiss()) {
      setDismissed(true);
      return;
    }

    const mountedAt = Date.now();
    let opened = false;

    const open = () => {
      if (opened) return;
      if (Date.now() - mountedAt < MIN_DWELL_MS) return;
      opened = true;
      setShow(true);
    };

    const timer = window.setTimeout(open, TIMER_MS);

    const handleScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = window.scrollY / max;
      if (pct > SCROLL_THRESHOLD) open();
    };

    // Desktop exit-intent: cursor leaves through the top edge after dwell.
    const handleMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget) return; // movement within the page
      if (e.clientY > 8) return; // ignore side/bottom exits
      open();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [suppressed]);

  const handleDismiss = () => {
    setDismissed(true);
    setShow(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Klaviyo readiness: when NEXT_PUBLIC_KLAVIYO_LIST_ID is set at build
    // time, route subscribers directly to Klaviyo's public list-subscribe
    // endpoint (no server proxy required, works on the static host). Falls
    // back to formsubmit.co into the support inbox so the capture never
    // breaks while Klaviyo is being provisioned. Source field stays
    // attached so list segmentation can keep "homepage-popup" as a tag.
    const klaviyoListId = process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID;
    try {
      if (klaviyoListId) {
        const body = new URLSearchParams();
        body.set("g", klaviyoListId);
        body.set("email", email.trim());
        body.set("$source", "homepage-popup");
        await fetch("https://manage.kmail-lists.com/ajax/subscriptions/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
          body: body.toString(),
        });
      } else {
        await fetch("https://formsubmit.co/ajax/support@titanpeptidelab.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            email: email.trim(),
            _subject: "New Titan Subscriber (popup)",
            source: "homepage-popup",
            _template: "table",
          }),
        });
      }
    } catch {
      // Still show success — we don't want to block the UX
    }

    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    }
    setTimeout(handleDismiss, 3000);
  };

  if (suppressed || dismissed || !show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-2xl">
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-4 text-[#999] hover:text-[#333] transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-[#1e6f58] px-8 py-8 text-white">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
            <Gift className="h-6 w-6" />
          </div>
          <h3 className="font-serif text-[1.8rem] leading-tight tracking-tight">
            FIRST10 — 10% off your first lot
          </h3>
          <p className="mt-2 text-[14px] text-white/80 leading-relaxed">
            We email when a new lot drops, with release-sheet notes.
            No drip sequences, no upsells — just batch releases and restocks.
          </p>
        </div>

        <div className="px-8 py-6">
          {submitted ? (
            <div className="py-4 text-center">
              <p className="text-[16px] font-medium text-[#1e6f58]">Welcome to the lab.</p>
              <p className="mt-2 text-[14px] text-[#888]">
                Check your inbox for your FIRST10 code and the next batch release.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="capture-email" className="text-[12px] font-medium text-[#888] uppercase tracking-wide">
                  Email address
                </label>
                <input
                  id="capture-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="researcher@lab.org"
                  required
                  className="mt-1.5 w-full rounded-lg border border-[#e5e5e5] px-4 py-3 text-[15px] text-[#333] placeholder:text-[#ccc] outline-none transition-colors focus-visible:border-[#1e6f58] focus-visible:ring-2 focus-visible:ring-[#1e6f58]/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#1e6f58] py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#175946]"
              >
                Send my FIRST10 code
              </button>
              <p className="text-center text-[11px] text-[#888]">
                Crypto only at checkout (BTC · ETH · SOL · USDC).{" "}
                <a
                  href="/guide"
                  className="font-medium text-[#1e6f58] underline-offset-2 hover:underline"
                >
                  New to crypto? 5-min walkthrough →
                </a>
              </p>
              <p className="text-center text-[11px] text-[#bbb]">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
