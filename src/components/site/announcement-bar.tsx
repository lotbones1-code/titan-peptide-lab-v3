export function AnnouncementBar() {
  return (
    <div className="border-b border-[rgb(15_22_19/6%)] bg-[#0f1613] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white/88 sm:text-[11px]">
          <span>24h cold-chain dispatch</span>
          <span className="mx-2 text-white/18">|</span>
          <span>Lot-matched COA included</span>
        </p>
      </div>
    </div>
  );
}
