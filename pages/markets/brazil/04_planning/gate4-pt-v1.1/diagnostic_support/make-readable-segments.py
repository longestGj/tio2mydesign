from pathlib import Path
from PIL import Image
import hashlib, json

root=Path(__file__).resolve().parents[1]
formal=root/'approval_core'
out=Path(__file__).resolve().parent/'readable-segments'
out.mkdir(exist_ok=True)
specs=[('1440',formal/'MARKET-BR-PT_GATE4_1440_FULL_V1.1.png',1600,140,1),('768',formal/'MARKET-BR-PT_GATE4_768_FULL_V1.1.png',1500,140,1),('390',formal/'MARKET-BR-PT_GATE4_390_FULL_V1.1@2x.png',1800,220,2)]
def sha(p): return hashlib.sha256(p.read_bytes()).hexdigest()
segments=[]
for name,source,clip,overlap,dpr in specs:
    im=Image.open(source); y=0; i=1
    while y<im.height:
        bottom=min(im.height,y+clip)
        target=out/f"{name}-part-{i:02d}{'@2x' if dpr==2 else ''}.png"
        im.crop((0,y,im.width,bottom)).save(target)
        segments.append({'file':target.name,'viewport':name,'dpr':dpr,'physicalClip':{'x':0,'y':y,'width':im.width,'height':bottom-y},'bytes':target.stat().st_size,'sha256':sha(target)})
        if bottom==im.height: break
        y=bottom-overlap; i+=1
target=out/'segments.json'
payload={'source':{'path':str(root/'MARKET-BR-PT_GATE4_COMPLETE_VISUAL_V1.1.html').replace('\\','/'),'bytes':(root/'MARKET-BR-PT_GATE4_COMPLETE_VISUAL_V1.1.html').stat().st_size,'sha256':sha(root/'MARKET-BR-PT_GATE4_COMPLETE_VISUAL_V1.1.html')},'purpose':'READABLE_LONG_PAGE_STATIC_VISUAL_SUPPORT','segments':segments}
target.write_text(json.dumps(payload,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'segments':len(segments),'inventory':{'path':str(target).replace('\\','/'),'bytes':target.stat().st_size,'sha256':sha(target)}},indent=2))
