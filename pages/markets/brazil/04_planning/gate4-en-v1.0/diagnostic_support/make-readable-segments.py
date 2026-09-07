from pathlib import Path
from PIL import Image
import json

root = Path(__file__).resolve().parents[1]
src = root / "approval_core"
out = root / "diagnostic_support" / "readable-segments"
out.mkdir(parents=True, exist_ok=True)
items = []
for name, height, overlap in [
    ("MARKET-BR-EN_GATE4_1440_FULL_V1.0.png", 1600, 140),
    ("MARKET-BR-EN_GATE4_768_FULL_V1.0.png", 1500, 130),
    ("MARKET-BR-EN_GATE4_390_FULL_V1.0@2x.png", 1800, 180),
]:
    image = Image.open(src / name)
    y = 0
    part = 1
    while y < image.height:
        bottom = min(image.height, y + height)
        target = out / f"{Path(name).stem}-part-{part:02d}.png"
        image.crop((0, y, image.width, bottom)).save(target)
        items.append({"source": name, "part": part, "box": [0, y, image.width, bottom], "file": target.name})
        if bottom == image.height:
            break
        y = bottom - overlap
        part += 1
(out / "segments.json").write_text(json.dumps(items, indent=2), encoding="utf-8")
print(json.dumps({"segments": len(items), "output": str(out)}, ensure_ascii=False))
