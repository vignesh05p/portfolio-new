#!/usr/bin/env python3
"""Regenerates every derived image in public/ from assets-src/.

Run after replacing the portrait, or to change the crop:
    python3 scripts/generate-images.py

Requires Pillow. The source portrait is a full-body shot, so CROP selects the
head-and-shoulders square that reads correctly in the hero's circular frame and
in the Open Graph card.
"""
from PIL import Image, ImageDraw, ImageFont

PORTRAIT_SRC = 'assets-src/portrait-original.png'
ICON_SRC = 'assets-src/icon-original.png'
CROP = (295, 240, 295 + 580, 240 + 580)   # left, top, right, bottom

BOLD = '/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf'
REG = '/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf'
FG, MUTED, FAINT, LINE = (11, 11, 11), (88, 88, 88), (111, 111, 111), (230, 230, 230)


def circular(img, size):
    """Antialiased circular mask, rendered at 4x and downsampled."""
    img = img.resize((size, size), Image.LANCZOS)
    mask = Image.new('L', (size * 4, size * 4), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size * 4 - 1, size * 4 - 1), fill=255)
    return img, mask.resize((size, size), Image.LANCZOS)


def main():
    square = Image.open(PORTRAIT_SRC).convert('RGB').crop(CROP)

    # Portrait at 2x the 272px max display size. WebP is served; JPEG is the
    # <picture> fallback.
    at600 = square.resize((600, 600), Image.LANCZOS)
    at600.save('public/vignesh-prabhu.webp', 'WEBP', quality=82, method=6)
    at600.save('public/vignesh-prabhu.jpg', 'JPEG', quality=82,
               optimize=True, progressive=True)

    # Favicons, flattened onto black because the source art has a black field
    # and iOS ignores alpha on touch icons.
    icon = Image.open(ICON_SRC).convert('RGBA')
    flat = Image.new('RGBA', icon.size, (0, 0, 0, 255))
    flat.alpha_composite(icon)
    flat = flat.convert('RGB')
    flat.resize((180, 180), Image.LANCZOS).save('public/apple-touch-icon.png', optimize=True)
    flat.resize((32, 32), Image.LANCZOS).save('public/favicon-32.png', optimize=True)
    flat.save('public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])

    # Open Graph card, 1200x630, using the site's type scale and greys.
    W, H = 1200, 630
    card = Image.new('RGB', (W, H), (255, 255, 255))
    draw = ImageDraw.Draw(card)
    diameter = 340
    face, mask = circular(square, diameter)
    card.paste(face, (W - 90 - diameter, (H - diameter) // 2), mask)

    x = 84
    draw.text((x, 168), 'Vignesh Prabhu', font=ImageFont.truetype(BOLD, 66), fill=FG)
    draw.text((x, 256), 'AI/ML Engineer', font=ImageFont.truetype(REG, 44), fill=MUTED)
    draw.line((x, 344, x + 560, 344), fill=LINE, width=2)
    draw.text((x, 368), 'Generative AI · LLMs · Agentic AI · RAG',
              font=ImageFont.truetype(REG, 25), fill=MUTED)
    draw.text((x, 410), 'Udupi, Karnataka, India',
              font=ImageFont.truetype(REG, 23), fill=FAINT)
    card.save('public/og-image.jpg', 'JPEG', quality=88, optimize=True, progressive=True)
    print('regenerated public/ images')


if __name__ == '__main__':
    main()
