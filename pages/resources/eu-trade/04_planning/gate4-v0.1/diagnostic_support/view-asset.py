from PIL import Image
from io import BytesIO
import sys, base64
p='D:/23MySec/pages/resources/eu-trade/04_planning/gate4-v0.1/approval_core/RES-TRADE-EU_G4_'+sys.argv[1]+'.png'
im=Image.open(p)
if len(sys.argv)>2:
    y=int(sys.argv[2]); im=im.crop((0,y,im.width,min(im.height,y+int(sys.argv[3]))))
b=BytesIO(); im.save(b,format='PNG'); print(base64.b64encode(b.getvalue()).decode())
