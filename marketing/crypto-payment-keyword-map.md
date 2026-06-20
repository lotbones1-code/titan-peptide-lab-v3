# Crypto-Payment Keyword → Page Map (Titan competitive edge)

Titan is **crypto-only**, and most research-peptide competitors are card-first.
That makes the "buy peptides with crypto" cluster a genuine differentiation lane:
buyers who specifically want to pay in BTC/USDC/SOL/ETH are pre-qualified for a
crypto-only store. RUO-safe framing throughout (research use only, no human-use claims).

Added live 2026-06-20 (Shamil priority add).

| Keyword / intent cluster | Target page | Status |
|---|---|---|
| buy peptides with crypto · crypto peptide store · buy research peptides with bitcoin/crypto · anonymous/private peptide purchase with crypto · no-card peptide store | `/buy-peptides-with-crypto/` | **LIVE** (hub) |
| buy BPC-157 with bitcoin · pay for BPC-157 in crypto · BPC-157 bitcoin/BTC | `/buy-bpc-157-with-bitcoin/` | **LIVE** |
| pay for peptides with USDC · buy peptides with stablecoin/USDC · USDC peptide checkout · peptides USDC solana | `/pay-for-peptides-with-usdc-crypto/` | **LIVE** |
| how to pay with crypto (informational, checkout walkthrough) | `/how-to-pay-with-crypto/` | LIVE (pre-existing) |

## Next batch (queued, same template, not yet shipped)
- `/buy-peptides-with-usdc-on-solana/` — narrower Solana-USDC intent
- `/buy-retatrutide-with-crypto/` — per-compound × crypto (highest-value GLP-1 SKU)
- `/buy-tb-500-with-crypto/`, `/buy-pt-141-with-crypto/` — per-compound × crypto
- `/buy-peptides-with-bitcoin/` — BTC-generic (complements the BPC-157 BTC page)
- `/private-peptide-ordering/` — discretion/low-data intent (RUO-safe, no false anonymity claims)

## Notes
- Every page: self-canonical, `robots index/follow`, OpenGraph, `BreadcrumbJsonLd` + `FAQJsonLd`,
  5+ internal links, product conversion CTAs.
- Privacy framing is deliberately honest: "low-data / discreet," not "fully anonymous"
  (shipping address required; on-chain txs are public). Avoids overclaim + keeps RUO posture.
- Wallets/networks accepted (source of truth `src/lib/products.data.ts WALLETS_DATA`):
  USDC-SOL, SOL, BTC, ETH, USDC-ERC.
