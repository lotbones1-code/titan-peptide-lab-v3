"use client";

import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";

export function EmailCapture() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    if (typeof window !== "undefined") {
      const wasDismissed = sessionStorage.getItem("titan-email-dismissed");
      if (wasDismissed) {
        setDismissed(true);
        return;
      }
    }

    // Show after 20 seconds or on scroll to 50%
    const timer = setTimeout(() => setShow(true), 20000);

    const handleScroll = () => {
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPct > 0.5) {
        setShow(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    setShow(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("titan-email-dismissed", "1");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // In production this would POST to an API
    setSubmitted(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("titan-email-dismissed", "1");
    }
    setTimeout(handleDismiss, 3000);
  };

  if (dismissed || !show) return null;

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
            10% off your first order
          </h3>
          <p className="mt-2 text-[14px] text-white/80 leading-relaxed">
            Join 3,200+ researchers. Get exclusive access to new compounds, batch releases, and research protocols.
          </p>
        </div>

        <div className="px-8 py-6">
          {submitted ? (
            <div className="py-4 text-center">
              <p className="text-[16px] font-medium text-[#1e6f58]">Welcome to the lab.</p>
              <p className="mt-2 text-[14px] text-[#888]">
                Check your inbox for your FIRST10 code and research updates.
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
                  className="mt-1.5 w-full rounded-lg border border-[#e5e5e5] px-4 py-3 text-[15px] text-[#333] placeholder:text-[#ccc] outline-none focus:border-[#1e6f58] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#1e6f58] py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#175946]"
              >
                Get 10% off + research updates
              </button>
              <p className="text-center text-[11px] text-[#bbb]">
                No spam. Unsubscribe anytime. We only send compound releases and research.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
