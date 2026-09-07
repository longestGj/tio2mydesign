from pathlib import Path
from PIL import Image
import hashlib,json
root=Path(__file__).parent.parent
out=Path(__file__).parent/'evidence'
manifest=json.loads((root/'specimen-b/assets.json').read_text())
identity=[]
for rel in ['input.md','copy.json','specimen-b/source.html','specimen-b/assets.json']+[f"specimen-b/{a['path']}" for a in manifest['assets']]:
 p=root/rel
 item={'path':str(p),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}
 if p.suffix=='.png':
  im=Image.open(p); item['dimensions']=im.size
  # Full coverage in overlapping readable crops. All output inside review-b.
  step=760
  for y in range(0,im.height,step):
   im.crop((0,y,im.width,min(y+840,im.height))).save(out/f'{p.stem}-y{y}.png')
 identity.append(item)
(out/'asset-identity.json').write_text(json.dumps(identity,indent=2))
print(json.dumps(identity,indent=2))
