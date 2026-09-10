import sys,io,base64,json
from PIL import Image
w=int(sys.argv[1]); start=int(sys.argv[2]); end=int(sys.argv[3]); step=1500
p=f'D:/23MySec/pages/resources/india-trade/04_planning/gate4-v0.1/approval_core/RES-TRADE-IN_G4_{w}-full.png'
im=Image.open(p)
out=[]
for y in range(start,min(end,im.height),step):
    p=f'D:/23MySec/pages/resources/india-trade/05_review/gate5-independent-v0.1/view-temp-{w}-{y}.png'
    im.crop((0,y,w,min(y+1580,im.height))).save(p)
    out.append({'range':[y,min(y+1580,im.height)],'path':p})
print(json.dumps(out))
