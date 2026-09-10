from pathlib import Path
from PIL import Image
import json
out=Path(__file__).parent
base=out.parent.parent/'04_planning/gate4-v0.1/approval_core'
items=[]
for w in [1440,768,390]:
    src=base/f'APP-MB_GATE4_FULL_{w}_V0.1.png'
    im=Image.open(src)
    for y in range(0,im.height,1900):
        dest=out/f'temp-{w}-{y}.png';im.crop((0,y,w,min(y+2000,im.height))).save(dest)
        items.append({'source':str(src),'range':[y,min(y+2000,im.height)],'temporary':str(dest)})
(out/'visual_coverage.json').write_text(json.dumps({'original_image_crops':items,'purpose':'Temporary readable original-image views only; no new formal rendering; delete exact temporary files after read.'},indent=2),encoding='utf-8')
