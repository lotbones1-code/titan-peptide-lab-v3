from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

root = Path('/Users/shamil/openclawv2/titan-peptide-lab-v3')
out = root / 'public' / 'drops' / 'titan-buyer-paranoia-20260605'
out.mkdir(parents=True, exist_ok=True)
W, H = 1080, 1920
font_paths = [
    '/System/Library/Fonts/Supplemental/Impact.ttf',
    '/System/Library/Fonts/Supplemental/Avenir Next Condensed.ttc',
    '/System/Library/Fonts/Supplemental/Arial Bold.ttf',
    '/System/Library/Fonts/Supplemental/Futura.ttc',
]

def font(size, idx=0):
    ordered = font_paths[idx:] + font_paths[:idx]
    for p in ordered:
        if Path(p).exists():
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

Fbig = font(105, 0)
Fmed = font(62, 1)
Fsmall = font(38, 2)
Ftiny = font(28, 2)
Fbrand = font(46, 2)
product = Image.open(root / 'public' / 'products' / 'bpc157-vial.png').convert('RGBA')
product.thumbnail((430, 700))
spray = Image.open(root / 'public' / 'products' / 'semax-spray.png').convert('RGBA')
spray.thumbnail((370, 620))
icon = Image.open(root / 'public' / 'titan-icon.png').convert('RGBA')
icon.thumbnail((94, 94))

def grad():
    img = Image.new('RGB', (W, H), '#050706')
    pix = img.load()
    for y in range(H):
        t = y / H
        for x in range(W):
            glow1 = max(0, 1 - ((x - 870) ** 2 + (y - 280) ** 2) / 500000)
            glow2 = max(0, 1 - ((x - 250) ** 2 + (y - 1250) ** 2) / 620000)
            r = int(4 + 12 * t + 18 * glow1)
            g = int(7 + 25 * (1 - t) + 40 * glow2)
            b = int(7 + 16 * t)
            pix[x, y] = (r, g, b)
    return img.convert('RGBA')

def noise(img, alpha=20):
    n = Image.effect_noise((W, H), 18).convert('L')
    overlay = Image.new('RGBA', (W, H), (255, 255, 255, 0))
    overlay.putalpha(n.point(lambda p: int(p / 255 * alpha)))
    return Image.alpha_composite(img, overlay)

def wrap(draw, text, fnt, maxw):
    lines = []
    for para in text.split('\n'):
        cur = ''
        for word in para.split():
            test = (cur + ' ' + word).strip()
            if draw.textbbox((0, 0), test, font=fnt)[2] <= maxw:
                cur = test
            else:
                if cur:
                    lines.append(cur)
                cur = word
        if cur:
            lines.append(cur)
    return lines

def txt(draw, xy, text, fnt, fill, maxw=None, spacing=8, stroke=0):
    x, y = xy
    if maxw:
        for line in wrap(draw, text, fnt, maxw):
            draw.text((x, y), line, font=fnt, fill=fill, stroke_width=stroke, stroke_fill=(0, 0, 0, 180))
            y += draw.textbbox((0, 0), line, font=fnt)[3] + spacing
        return y
    draw.text(xy, text, font=fnt, fill=fill, stroke_width=stroke, stroke_fill=(0, 0, 0, 180))
    return y

def box(draw, xy, text, fnt, fill=(8, 16, 13, 230), outline=(69, 255, 183, 180), color=(230, 255, 245, 255), pad=20, maxw=840):
    x, y = xy
    lines = wrap(draw, text, fnt, maxw)
    lh = draw.textbbox((0, 0), 'Ag', font=fnt)[3] + 10
    h = pad * 2 + lh * len(lines)
    w = max([draw.textbbox((0, 0), l, font=fnt)[2] for l in lines] + [120]) + pad * 2
    draw.rounded_rectangle((x, y, x + w, y + h), radius=28, fill=fill, outline=outline, width=2)
    cy = y + pad
    for l in lines:
        draw.text((x + pad, cy), l, font=fnt, fill=color)
        cy += lh
    return y + h

slides = [
    ('Still buying from a source list?', 'That is not verification. That is vibes with a checkout button.', ['LOT MATCH', 'METHOD NAMED', 'COA READS CLEAN']),
    ('The label is not the proof.', 'A serious buyer asks one boring question before trusting anything: does this vial match a real test?', ['BATCH CODE', 'HPLC / METHOD', 'RUO BOUNDARY']),
    ('If they dodge the COA...', 'do not negotiate with mystery chemistry.', ['SAVE THIS CHECKLIST', 'AUDIT BEFORE ORDER', 'TITANPEPTIDELAB.COM']),
]
for i, (hook, body, chips) in enumerate(slides, 1):
    im = noise(grad(), 22)
    d = ImageDraw.Draw(im)
    d.polygon([(0, 1280), (1080, 1020), (1080, 1155), (0, 1420)], fill=(255, 187, 61, 28))
    d.line((0, 1280, 1080, 1020), fill=(255, 187, 61, 130), width=4)
    px = 650 if i != 2 else 625
    py = 770 if i != 2 else 900
    glow = Image.new('RGBA', (520, 760), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((45, 60, 480, 710), fill=(67, 255, 187, 45))
    im.alpha_composite(glow, (px - 55, py - 80))
    im.alpha_composite(product if i != 2 else spray, (px, py))
    im.alpha_composite(icon, (70, 74))
    d.text((180, 100), 'TITAN PEPTIDE LAB', font=Fbrand, fill=(224, 255, 244, 255))
    d.text((180, 154), 'RESEARCH USE ONLY', font=Ftiny, fill=(105, 238, 190, 210))
    y = 310
    for line in wrap(d, hook.upper(), Fbig, 900):
        d.text((70, y), line, font=Fbig, fill=(255, 255, 238, 255), stroke_width=3, stroke_fill=(0, 0, 0, 210))
        y += 112
    y += 28
    y = txt(d, (75, y), body, Fmed, (220, 238, 230, 255), maxw=840, spacing=18, stroke=1)
    y = 1270
    for c in chips:
        y = box(d, (70, y), c, Fsmall)
        y += 18
    d.rounded_rectangle((70, 1710, 1010, 1830), radius=34, fill=(12, 22, 18, 235), outline=(255, 187, 61, 200), width=3)
    d.text((100, 1735), 'FIRST10 • lot-matched COAs • 24h dispatch', font=Fsmall, fill=(255, 235, 181, 255))
    d.text((100, 1786), 'titanpeptidelab.com', font=Fmed, fill=(255, 255, 245, 255))
    im.convert('RGB').save(out / f'slide-{i}.jpg', quality=94)

cs = Image.new('RGB', (1080, 1080), (5, 7, 6))
for i in range(3):
    s = Image.open(out / f'slide-{i + 1}.jpg').resize((360, 640))
    cs.paste(s, (i * 360, 0))
d = ImageDraw.Draw(cs)
d.rectangle((0, 640, 1080, 1080), fill=(5, 7, 6))
txt(d, (50, 700), 'YOUR SOURCE LIST IS NOT VERIFICATION', font(76, 0), (255, 255, 238, 255), maxw=980, spacing=10, stroke=2)
txt(d, (54, 900), 'Lot-matched COAs. RUO boundaries. No mystery-vial energy.', Fsmall, (105, 238, 190, 255), maxw=960)
cs.save(out / 'cover-square.jpg', quality=94)
print(out)
