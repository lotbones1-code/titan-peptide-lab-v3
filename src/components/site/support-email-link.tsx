"use client";

import { useEffect, useState } from "react";

const SUPPORT_USER = "support";
const SUPPORT_DOMAIN = "titanpeptidelab.com";
const FALLBACK_LABEL = "support [at] titanpeptidelab.com";

export function SupportEmailLink({
  subject,
  className,
  fallbackLabel = FALLBACK_LABEL,
}: {
  subject?: string;
  className?: string;
  fallbackLabel?: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const email = `${SUPPORT_USER}@${SUPPORT_DOMAIN}`;
  const href = ready
    ? `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`
    : "/contact/";

  return (
    <a
      href={href}
      aria-label={ready ? email : "Titan support email"}
      className={className}
      suppressHydrationWarning
    >
      {ready ? email : fallbackLabel}
    </a>
  );
}
