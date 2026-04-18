#!/usr/bin/env python3
"""
Regenerate Titan Peptide Lab product images via Pollinations.ai (free FLUX).

Lessons from earlier passes:
- FLUX ignores negative prompts ("NO marble", "NO splash"). Use POSITIVE
  descriptions only — describe exactly what you want, never what you don't.
- "Vial" alone gets interpreted as a tall apothecary bottle. Use the explicit
  phrase: "small pharmaceutical injection vial, 50mm tall, like in a clinical
  laboratory" to anchor scale.
- "Nasal spray" needs the exact phrase "nasal spray atomizer with white plastic
  nozzle pump cap" — saying "spray bottle" alone yields perfume / serum pumps.
- Backdrop: "dark slate grey studio backdrop with seamless paper" — saying
  "matte charcoal" gets ignored half the time.

Labels are intentionally blank/minimal — the site UI overlays the product name.
"""

from __future__ import annotations

import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "products"
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Shared style block — all positive descriptions, no negations
STYLE = (
    "Professional pharmaceutical product photography. Soft warm stone "
    "seamless paper studio backdrop with pale mineral tones, like an expensive "
    "editorial skincare campaign for a clinical lab brand. Bright diffused key "
    "light from upper-left with a soft grounding shadow directly under the "
    "product. Shot on Hasselblad medium format with 80mm macro lens at f/8, "
    "tack-sharp focus across the entire product. Centered composition, slight "
    "3/4 angle, product fills 60 percent of vertical frame. Clean high-end "
    "research aesthetic, refined, calm, premium, trustworthy. Cream, bone, "
    "soft sage, and amber only. Sharp professional pharmaceutical product shot, "
    "vertical 2:3 portrait."
)

WIDTH, HEIGHT = 1024, 1536
MODEL = "flux"

# Anchor phrases that fix the FLUX defaults
VIAL_ANCHOR = (
    "Small pharmaceutical injection vial, 50mm tall, exactly like a clinical "
    "research laboratory peptide vial. Clear borosilicate glass body with a "
    "grey butyl rubber stopper sealed under a crimped silver aluminum cap "
    "with a small flip-top center. Vial holds dense white lyophilized "
    "freeze-dried peptide powder pellet at the bottom. Plain matte cream "
    "rectangular wrap-around label with thin sans-serif lettering "
    "(blurry, illegible). Single small vial, hero macro shot."
)

SPRAY_ANCHOR = (
    "Premium pharmaceutical nasal spray bottle, 30ml, exactly like an elegant "
    "clinical saline mist. Frosted amber glass cylindrical body with a clean "
    "white plastic nasal atomizer pump nozzle on top, the long thin nozzle "
    "visible and proportionally realistic. Clear protective cap removed and "
    "placed neatly beside the bottle. Plain matte cream wrap-around label with "
    "thin sans-serif lettering (blurry, illegible). Single small bottle on a "
    "pale stone surface, hero macro shot, expensive but clinical."
)

PRODUCTS: dict[str, tuple[str, int]] = {
    # filename: (subject prompt, seed)
    "bpc157-vial.png": (VIAL_ANCHOR, 201),
    "tb500-vial.png": (VIAL_ANCHOR, 202),
    "retatrutide.png": (VIAL_ANCHOR, 203),
    "vial2.png": (VIAL_ANCHOR, 204),
    "bpc157-spray.png": (SPRAY_ANCHOR, 205),
    "pt141-spray.png": (SPRAY_ANCHOR, 206),
    "selank-spray.png": (SPRAY_ANCHOR, 207),
    "semax-spray.png": (SPRAY_ANCHOR, 208),
    "spray-generic.png": (SPRAY_ANCHOR, 209),
    "oxytocin-spray.png": (SPRAY_ANCHOR, 212),
    "dsip-spray.png": (SPRAY_ANCHOR, 213),
    "selank-semax-stack.png": (
        "Two identical premium pharmaceutical nasal spray bottles standing "
        "upright side by side touching, both 30ml frosted amber glass "
        "cylinders with clean white nasal spray atomizer pump nozzles on top. "
        "Both clear protective caps removed and laid neatly in front. Both "
        "have matching plain matte cream wrap-around labels with thin blurry "
        "sans-serif lettering. Symmetric composition on pale stone surface, "
        "clean high-end editorial clinical lighting, single soft contact "
        "shadow connecting both bottles.",
        210,
    ),
    "cjc-ipa.png": (
        "Two identical small pharmaceutical injection vials standing upright "
        "side by side touching, each 50mm tall clear borosilicate glass with "
        "grey butyl rubber stoppers under crimped silver aluminum caps with "
        "small flip-tops. Both vials hold dense white lyophilized "
        "freeze-dried peptide powder pellet at the bottom. Matching plain "
        "matte cream wrap-around labels with thin blurry sans-serif "
        "lettering. Symmetric composition, identical lighting on both vials.",
        211,
    ),
}


def fetch(prompt: str, out_path: Path, seed: int) -> int:
    url = (
        f"https://image.pollinations.ai/prompt/{urllib.parse.quote(prompt)}"
        f"?width={WIDTH}&height={HEIGHT}&model={MODEL}&nologo=true"
        f"&enhance=true&seed={seed}"
    )
    req = urllib.request.Request(
        url, headers={"User-Agent": "titan-peptide-lab/1.0"}
    )
    with urllib.request.urlopen(req, timeout=240) as resp:
        data = resp.read()
    out_path.write_bytes(data)
    return len(data)


def main() -> int:
    only = set(sys.argv[1:])
    failures: list[str] = []
    for fname, (subject, seed) in PRODUCTS.items():
        if only and fname not in only:
            continue
        out_path = OUT_DIR / fname
        prompt = f"{subject} {STYLE}"
        print(f"[gen] {fname} (seed={seed}) ...", flush=True)
        for attempt in range(3):
            try:
                size = fetch(prompt, out_path, seed)
                print(f"  ok -> {out_path.relative_to(ROOT)} ({size//1024} KB)")
                break
            except Exception as exc:  # noqa: BLE001
                print(f"  attempt {attempt+1} failed: {exc}", file=sys.stderr)
                time.sleep(2 + attempt * 3)
        else:
            failures.append(fname)
        time.sleep(1)  # gentle pacing on free endpoint

    if failures:
        print(f"\nFailed: {failures}", file=sys.stderr)
        return 2
    print("\nAll product images regenerated.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
