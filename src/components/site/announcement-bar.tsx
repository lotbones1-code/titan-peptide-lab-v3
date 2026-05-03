import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-[#0f1110] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2.5">
        <Link href="/products" className="text-center text-[11px] font-medium tracking-[0.04em] text-white/80 transition-colors hover:text-white sm:text-[12px]">
          Worldwide cold-chain shipping &middot; Free over $150 &middot; Crypto checkout in 60s &mdash; <span className="underline underline-offset-2">Shop now</span>
        </Link>
      </div>
    </div>
  );
}
