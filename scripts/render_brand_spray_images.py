#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageChops, ImageColor, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content" / "products"
OUT_DIR = ROOT / "public" / "products"
OUT_DIR.mkdir(parents=True, exist_ok=True)

WIDTH = 1024
HEIGHT = 1536

BG = "#F6F3EC"
STONE = "#E9E1D4"
INK = "#101820"
MUTED = "#6E746F"
BORDER = "#D8D1C3"
PAPER = "#FFFDF8"
CAP = "#EAF0F3"
SHADOW = (16, 21, 26, 50)

FONT_REG = "/System/Library/Fonts/SFNS.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_ROUNDED = "/System/Library/Fonts/SFNSRounded.ttf"

ACCENTS = {
    "bpc157-spray": "#6F8E7B",
    "selank-spray": "#7288B5",
    "semax-spray": "#C79A47",
    "pt141-spray": "#9F6A7F",
    "oxytocin-spray": "#D27D69",
    "dsip-spray": "#6876A6",
    "selank-semax-stack": "#7E8CB2",
}

PRODUCT_ORDER = [
    "bpc157-spray",
    "selank-spray",
    "semax-spray",
    "pt141-spray",
    "oxytocin-spray",
    "dsip-spray",
]


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


FONT_TITAN = font(FONT_ROUNDED, 42)
FONT_PRODUCT = font(FONT_BOLD, 34)
FONT_META = font(FONT_REG, 20)
FONT_MICRO = font(FONT_REG, 16)
FONT_BOX_PRODUCT = font(FONT_BOLD, 30)
FONT_BOX_META = font(FONT_REG, 18)


def load_product(product_id: str) -> dict:
    for path in CONTENT.glob("*.json"):
        data = json.loads(path.read_text())
        if data.get("id") == product_id:
            return data
    raise FileNotFoundError(product_id)


PRODUCTS = {pid: load_product(pid) for pid in PRODUCT_ORDER}


def short_name(name: str) -> str:
    return name.replace(" Nasal Spray", "").replace(" + ", " × ")


def rgba(hex_color: str, alpha: int = 255) -> tuple[int, int, int, int]:
    rgb = ImageColor.getrgb(hex_color)
    return (rgb[0], rgb[1], rgb[2], alpha)


def draw_centered_text(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str, fnt, fill):
    box = draw.textbbox((0, 0), text, font=fnt)
    w = box[2] - box[0]
    draw.text((xy[0] - w / 2, xy[1]), text, font=fnt, fill=fill)


def add_shadow(base: Image.Image, rect: tuple[int, int, int, int], radius: int = 28, dy: int = 16, alpha: int = 55):
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    x0, y0, x1, y1 = rect
    draw.rounded_rectangle((x0, y0 + dy, x1, y1 + dy), radius=36, fill=(15, 20, 26, alpha))
    layer = layer.filter(ImageFilter.GaussianBlur(radius))
    base.alpha_composite(layer)


def vignette(img: Image.Image):
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    d.ellipse((-160, -120, 420, 460), fill=(255, 255, 255, 65))
    d.ellipse((540, 160, 1140, 980), fill=(255, 255, 255, 28))
    d.ellipse((100, 1160, 1000, 1720), fill=(220, 205, 180, 25))
    overlay = overlay.filter(ImageFilter.GaussianBlur(80))
    img.alpha_composite(overlay)


def label_block(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, accent: str, title: str, meta: str, align: str = "left"):
    draw.rounded_rectangle((x, y, x + w, y + h), radius=22, fill=PAPER, outline=BORDER, width=2)
    draw.rounded_rectangle((x, y, x + 20, y + h), radius=22, fill=accent)
    tx = x + 42
    if align == "center":
        draw_centered_text(draw, (x + w // 2, y + 18), "TITAN", FONT_TITAN, INK)
        draw_centered_text(draw, (x + w // 2, y + 76), title, FONT_PRODUCT, INK)
        draw_centered_text(draw, (x + w // 2, y + 124), meta, FONT_META, MUTED)
        draw_centered_text(draw, (x + w // 2, y + h - 52), "RESEARCH USE ONLY", FONT_MICRO, MUTED)
        return
    draw.text((tx, y + 18), "TITAN", font=FONT_TITAN, fill=INK)
    draw.text((tx, y + 78), title, font=FONT_PRODUCT, fill=INK)
    draw.text((tx, y + 128), meta, font=FONT_META, fill=MUTED)
    draw.text((tx, y + h - 58), "RESEARCH USE ONLY", font=FONT_MICRO, fill=MUTED)
    draw.text((tx, y + h - 34), "HPLC VERIFIED  ·  LOT-MATCHED COA", font=FONT_MICRO, fill=MUTED)


def draw_carton(base: Image.Image, accent: str, product: dict, x: int, y: int, w: int = 290, h: int = 770):
    add_shadow(base, (x, y, x + w, y + h), radius=26, dy=18, alpha=40)
    d = ImageDraw.Draw(base)
    d.rounded_rectangle((x, y, x + w, y + h), radius=34, fill="#FBF9F4", outline="#D9D2C5", width=2)
    d.rounded_rectangle((x + 24, y + 28, x + w - 24, y + 112), radius=26, fill=accent)
    draw_centered_text(d, (x + w // 2, y + 46), "TITAN", FONT_TITAN, PAPER)
    d.text((x + 36, y + 164), short_name(product['name']), font=FONT_BOX_PRODUCT, fill=INK)
    d.text((x + 36, y + 214), product['size'], font=FONT_BOX_META, fill=MUTED)
    d.text((x + 36, y + 262), "PRECISION NASAL SPRAY", font=FONT_BOX_META, fill=INK)
    d.text((x + 36, y + 290), "LAB STANDARD PACKAGING", font=FONT_MICRO, fill=MUTED)
    d.rounded_rectangle((x + 36, y + 352, x + w - 36, y + 366), radius=7, fill=accent)
    d.text((x + 36, y + 394), "HPLC VERIFIED", font=FONT_META, fill=INK)
    d.text((x + 36, y + 428), "BATCH-MATCHED COA", font=FONT_META, fill=INK)
    d.text((x + 36, y + 462), "RESEARCH USE ONLY", font=FONT_META, fill=INK)
    d.text((x + 36, y + h - 92), "15 mL metered atomizer", font=FONT_MICRO, fill=MUTED)
    d.text((x + 36, y + h - 62), "Cold-chain dispatch where required", font=FONT_MICRO, fill=MUTED)
    d.text((x + 36, y + h - 32), "titanpeptidelab.com", font=FONT_MICRO, fill=MUTED)


def draw_bottle(base: Image.Image, accent: str, product: dict, x: int, y: int, scale: float = 1.0):
    body_w = int(210 * scale)
    body_h = int(520 * scale)
    neck_w = int(66 * scale)
    neck_h = int(92 * scale)
    pump_w = int(110 * scale)
    pump_h = int(48 * scale)
    nozzle_len = int(92 * scale)
    cap_h = int(148 * scale)
    radius = int(38 * scale)

    bottle_rect = (x, y, x + body_w, y + body_h)
    add_shadow(base, bottle_rect, radius=24, dy=20, alpha=45)
    d = ImageDraw.Draw(base)

    d.rounded_rectangle(bottle_rect, radius=radius, fill="#FDFCF8", outline="#D5DCE2", width=3)
    d.rounded_rectangle((x + 26, y + 26, x + body_w - 26, y + body_h - 26), radius=radius - 10, fill="#FFFFFF")

    neck_x = x + (body_w - neck_w) // 2
    neck_y = y - neck_h + 24
    d.rounded_rectangle((neck_x, neck_y, neck_x + neck_w, neck_y + neck_h), radius=22, fill="#F7FBFD", outline="#D6DDE2", width=2)
    pump_x = x + (body_w - pump_w) // 2
    pump_y = neck_y - pump_h + 12
    d.rounded_rectangle((pump_x, pump_y, pump_x + pump_w, pump_y + pump_h), radius=18, fill="#F6FBFD", outline="#CFD7DE", width=2)

    stem_x = x + body_w // 2 - int(8 * scale)
    d.rounded_rectangle((stem_x, pump_y - 10, stem_x + int(16 * scale), pump_y + 30), radius=8, fill="#F3F8FB", outline="#D4DBE0", width=2)
    d.rounded_rectangle((pump_x + pump_w // 2 - int(13 * scale), pump_y - int(78 * scale), pump_x + pump_w // 2 + int(13 * scale), pump_y + 8), radius=12, fill="#F4FAFD", outline="#D4DBE0", width=2)
    nozzle_y = pump_y - int(66 * scale)
    d.rounded_rectangle((pump_x + pump_w // 2 - int(12 * scale), nozzle_y, pump_x + pump_w // 2 + nozzle_len, nozzle_y + int(24 * scale)), radius=12, fill="#F4FAFD", outline="#D4DBE0", width=2)
    d.ellipse((pump_x + pump_w // 2 + nozzle_len - int(18 * scale), nozzle_y + 5, pump_x + pump_w // 2 + nozzle_len - int(6 * scale), nozzle_y + 17), fill="#C8D4DB")

    cap_rect = (x + 30, nozzle_y - cap_h + 58, x + body_w - 30, nozzle_y + 46)
    d.rounded_rectangle(cap_rect, radius=28, fill=(234, 241, 244, 180), outline=(205, 214, 221, 210), width=3)
    d.rounded_rectangle((cap_rect[0] + 14, cap_rect[1] + 16, cap_rect[2] - 14, cap_rect[3] - 12), radius=22, outline=(255, 255, 255, 150), width=2)

    label_x = x + 24
    label_y = y + 132
    label_w = body_w - 48
    label_h = int(250 * scale)
    label_block(d, label_x, label_y, label_w, label_h, accent, short_name(product['name']), product['size'])

    d.rounded_rectangle((x + 24, y + body_h - 110, x + body_w - 24, y + body_h - 84), radius=10, fill=accent)
    d.text((x + 32, y + body_h - 74), "HPLC VERIFIED", font=FONT_MICRO, fill=INK)
    d.text((x + 32, y + body_h - 48), "LOT-MATCHED COA", font=FONT_MICRO, fill=MUTED)


def make_background() -> Image.Image:
    img = Image.new("RGBA", (WIDTH, HEIGHT), BG)
    vignette(img)
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((116, 1110, 908, 1168), radius=28, fill=(222, 210, 188, 130))
    blur = img.filter(ImageFilter.GaussianBlur(20))
    img = Image.blend(img, blur, 0.12)
    return img


def render_single(product_id: str, out_name: str):
    product = PRODUCTS[product_id]
    accent = ACCENTS[product_id]
    img = make_background()
    draw_carton(img, accent, product, 170, 350)
    draw_bottle(img, accent, product, 560, 492, 1.0)
    img.save(OUT_DIR / out_name)
    print(f"[render] {out_name} -> {OUT_DIR / out_name}")


def render_stack():
    selank = PRODUCTS["selank-spray"]
    semax = PRODUCTS["semax-spray"]
    img = make_background()
    draw_carton(img, "#D7DDE8", {"name": "Selank × Semax Stack", "size": "2 × 15mL"}, 140, 356, 320, 760)
    draw_bottle(img, ACCENTS["selank-spray"], selank, 515, 525, 0.92)
    draw_bottle(img, ACCENTS["semax-spray"], semax, 690, 525, 0.92)
    img.save(OUT_DIR / "selank-semax-stack.png")
    print(f"[render] selank-semax-stack.png -> {OUT_DIR / 'selank-semax-stack.png'}")


def main(args: Iterable[str]) -> int:
    targets = set(args)
    mapping = {
        "bpc157-spray.png": "bpc157-spray",
        "selank-spray.png": "selank-spray",
        "semax-spray.png": "semax-spray",
        "pt141-spray.png": "pt141-spray",
        "oxytocin-spray.png": "oxytocin-spray",
        "dsip-spray.png": "dsip-spray",
    }
    for filename, product_id in mapping.items():
        if targets and filename not in targets:
            continue
        render_single(product_id, filename)
    if not targets or "selank-semax-stack.png" in targets:
        render_stack()
    return 0


if __name__ == "__main__":
    raise SystemExit(main(__import__('sys').argv[1:]))
