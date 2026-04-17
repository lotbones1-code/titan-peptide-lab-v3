"use client";

import dynamic from "next/dynamic";

const MolecularScene = dynamic(
  () => import("./molecular-scene").then((mod) => mod.MolecularScene),
  {
    ssr: false,
    loading: () => <MolecularFallback />,
  }
);

export function MolecularViewer() {
  return (
    <div className="relative h-[430px] min-h-[430px] w-full overflow-hidden rounded-lg border border-white/10 bg-[#07100e] sm:h-[520px] lg:h-[620px]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_56%_42%,rgba(15,159,122,0.22),transparent_36%),linear-gradient(145deg,rgba(255,255,255,0.05),transparent_42%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-10 bottom-10 h-28 rounded-full bg-[#0F9F7A]/18 blur-3xl"
      />
      <MolecularScene />
    </div>
  );
}

function MolecularFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center text-sm text-[#9FABAA]">
      Loading molecular model
    </div>
  );
}
