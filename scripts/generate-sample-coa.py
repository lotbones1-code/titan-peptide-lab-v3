#!/usr/bin/env python3
"""Generate a clean SAMPLE-FORMAT COA PDF for Titan Peptide Lab.

NEVER fabricate lab data. This file is a *format* preview that shows
buyers the layout of the real lot-matched COA they receive after order.
All numeric values are placeholders / examples shown in monospace
brackets so they cannot be mistaken for real chromatography results.
"""

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, black, white
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader

OUT = "public/specimen-coa.pdf"

C_INK    = HexColor("#0f1613")
C_TEAL   = HexColor("#1e6f58")
C_MUTED  = HexColor("#5a665f")
C_LIGHT  = HexColor("#e6ebe8")
C_PAPER  = HexColor("#fafbfa")


def draw(c: canvas.Canvas) -> None:
    W, H = LETTER

    # Sample-format banner (top)
    c.setFillColor(C_TEAL)
    c.rect(0, H - 0.55 * inch, W, 0.55 * inch, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(0.6 * inch, H - 0.32 * inch, "SAMPLE FORMAT — NOT A REAL LOT REPORT")
    c.setFont("Helvetica", 9)
    c.drawString(
        0.6 * inch,
        H - 0.48 * inch,
        "Your order's lot-specific COA is emailed within 24h of dispatch. This file shows the layout only.",
    )

    # Header
    y = H - 0.95 * inch
    c.setFillColor(C_INK)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(0.6 * inch, y, "Certificate of Analysis")
    c.setFont("Helvetica", 10)
    c.setFillColor(C_MUTED)
    c.drawString(0.6 * inch, y - 0.2 * inch, "Titan Peptide Lab — Research-grade peptide formulations")
    c.setFont("Helvetica-Oblique", 9)
    c.drawString(0.6 * inch, y - 0.36 * inch, "For research use only. Not for human consumption.")

    # Right-side meta block
    c.setFillColor(C_INK)
    c.setFont("Helvetica-Bold", 9)
    right_x = W - 2.6 * inch
    c.drawString(right_x, y, "Document")
    c.setFont("Helvetica", 9)
    c.setFillColor(C_MUTED)
    c.drawString(right_x, y - 0.16 * inch, "Format: SAMPLE / PREVIEW")
    c.drawString(right_x, y - 0.30 * inch, "Issued: [emailed per lot]")
    c.drawString(right_x, y - 0.44 * inch, "Valid for: [your shipment lot only]")

    # Identification table
    y = H - 1.9 * inch
    c.setStrokeColor(C_LIGHT)
    c.setFillColor(C_PAPER)
    c.rect(0.55 * inch, y - 1.6 * inch, W - 1.1 * inch, 1.6 * inch, fill=1, stroke=1)

    c.setFillColor(C_INK)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(0.7 * inch, y - 0.2 * inch, "Sample identification")

    rows = [
        ("Compound",           "[Compound name — e.g. BPC-157]"),
        ("Catalog code",       "[TPL-XXX]"),
        ("Lot / batch",        "[LOT-YYYYMMDD-####]"),
        ("Manufactured",       "[YYYY-MM-DD]"),
        ("Expiry",             "[YYYY-MM-DD]"),
        ("Storage",            "Lyophilized: 2-8°C. Reconstituted: -20°C, protected from light."),
        ("Format",             "[Lyophilized vial / Intranasal spray]"),
        ("Net peptide / unit", "[mg per vial — printed on your lot]"),
    ]
    c.setFont("Helvetica", 9)
    rh = 0.18 * inch
    for i, (k, v) in enumerate(rows):
        ry = y - 0.42 * inch - i * rh
        c.setFillColor(C_MUTED)
        c.drawString(0.75 * inch, ry, k)
        c.setFillColor(C_INK)
        c.drawString(2.4 * inch, ry, v)

    # Analytical results table
    y = H - 3.8 * inch
    c.setStrokeColor(C_LIGHT)
    c.setFillColor(C_PAPER)
    c.rect(0.55 * inch, y - 1.85 * inch, W - 1.1 * inch, 1.85 * inch, fill=1, stroke=1)

    c.setFillColor(C_INK)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(0.7 * inch, y - 0.2 * inch, "Analytical results — fields populated per lot")

    headers = ["Test", "Method", "Specification", "Lot result"]
    cols_x = [0.75 * inch, 2.45 * inch, 4.05 * inch, 5.65 * inch]
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(C_MUTED)
    hy = y - 0.42 * inch
    for h, x in zip(headers, cols_x):
        c.drawString(x, hy, h)

    c.setStrokeColor(C_LIGHT)
    c.line(0.7 * inch, hy - 0.06 * inch, W - 0.7 * inch, hy - 0.06 * inch)

    tests = [
        ("Identity",      "HPLC-MS",       "Conforms",       "[lot-specific]"),
        ("Purity",        "RP-HPLC",       "≥ 99.0%",        "[lot-specific %]"),
        ("Net peptide",   "AAA / NMR",     "Per spec sheet", "[lot-specific]"),
        ("Water content", "Karl Fischer",  "≤ 6.0%",         "[lot-specific %]"),
        ("Acetate",       "Ion chrom.",    "≤ 15.0%",        "[lot-specific %]"),
        ("Endotoxin",     "LAL",           "≤ 5 EU/mg",      "[lot-specific]"),
        ("Bioburden",     "USP <61>",      "Conforms",       "[lot-specific]"),
        ("Appearance",    "Visual",        "Conforms",       "[lot-specific]"),
    ]
    c.setFont("Helvetica", 9)
    for i, row in enumerate(tests):
        ry = hy - 0.22 * inch - i * 0.16 * inch
        for cell, x in zip(row, cols_x):
            if x == cols_x[3]:
                c.setFillColor(C_TEAL)
            else:
                c.setFillColor(C_INK)
            c.drawString(x, ry, cell)

    # Chromatogram preview
    y = H - 6.05 * inch
    c.setFillColor(C_INK)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(0.6 * inch, y, "Chromatogram (preview only)")
    c.setFont("Helvetica", 8)
    c.setFillColor(C_MUTED)
    c.drawString(0.6 * inch, y - 0.16 * inch, "Real lot file embeds the actual run trace + raw data sheet.")

    # Draw a representative chromatogram trace
    bx, by, bw, bh = 0.6 * inch, y - 1.7 * inch, W - 1.2 * inch, 1.4 * inch
    c.setStrokeColor(C_LIGHT)
    c.setFillColor(white)
    c.rect(bx, by, bw, bh, fill=1, stroke=1)

    # Axes
    c.setStrokeColor(C_LIGHT)
    for i in range(1, 6):
        gx = bx + (bw * i / 6)
        c.line(gx, by, gx, by + bh)

    # Trace
    c.setStrokeColor(C_TEAL)
    c.setLineWidth(0.9)
    points = [
        (0.00, 0.05), (0.18, 0.06), (0.30, 0.07), (0.40, 0.10),
        (0.46, 0.18), (0.50, 0.85), (0.54, 0.18), (0.60, 0.10),
        (0.72, 0.08), (0.85, 0.07), (1.00, 0.05),
    ]
    path = c.beginPath()
    for i, (px, py) in enumerate(points):
        gx = bx + px * bw
        gy = by + py * bh
        if i == 0:
            path.moveTo(gx, gy)
        else:
            path.lineTo(gx, gy)
    c.drawPath(path, stroke=1, fill=0)

    # Sign-off / disclosure
    y = 1.3 * inch
    c.setStrokeColor(C_LIGHT)
    c.line(0.6 * inch, y + 0.45 * inch, W - 0.6 * inch, y + 0.45 * inch)

    c.setFillColor(C_INK)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(0.6 * inch, y + 0.28 * inch, "Released by")
    c.setFont("Helvetica", 9)
    c.setFillColor(C_MUTED)
    c.drawString(0.6 * inch, y + 0.14 * inch, "Quality Control — Titan Peptide Lab")
    c.drawString(0.6 * inch, y, "Signatory & date populated on issued lot file.")

    c.setFont("Helvetica-Oblique", 8)
    c.setFillColor(C_MUTED)
    disclaimer = (
        "Research use only. Not for human or veterinary use. Not a drug, food, cosmetic, or dietary supplement. "
        "Not intended to diagnose, treat, cure, or prevent any disease. This document is a SAMPLE FORMAT; "
        "the real lot-matched COA contains the analytical values for the specific lot shipped on your order."
    )
    text_obj = c.beginText(0.6 * inch, y - 0.18 * inch)
    text_obj.setFont("Helvetica-Oblique", 8)
    text_obj.setFillColor(C_MUTED)
    for line in [
        "Research use only. Not for human or veterinary use. Not a drug, food, cosmetic, or dietary",
        "supplement. Not intended to diagnose, treat, cure, or prevent any disease. This document is a",
        "SAMPLE FORMAT; the real lot-matched COA contains the values for the specific lot shipped.",
    ]:
        text_obj.textLine(line)
    c.drawText(text_obj)

    # Footer
    c.setFont("Helvetica", 7.5)
    c.setFillColor(C_MUTED)
    c.drawCentredString(W / 2, 0.45 * inch, "Titan Peptide Lab  •  www.titanpeptidelab.com  •  support@titanpeptidelab.com")

    c.showPage()


def main() -> None:
    c = canvas.Canvas(OUT, pagesize=LETTER)
    c.setTitle("Titan Peptide Lab — Sample COA Format")
    c.setAuthor("Titan Peptide Lab QC")
    c.setSubject("Sample format showing the layout of lot-matched COAs")
    draw(c)
    c.save()
    print(f"wrote {OUT}")


if __name__ == "__main__":
    main()
