import type { CSSProperties, ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={className}
      style={
        {
          animation: "reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
          animationDelay: `${Math.round(delay * 1000 + 60)}ms`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
