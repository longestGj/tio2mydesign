from pathlib import Path
from PIL import Image,ImageChops
import json
root=Path(__file__).parent.parent
out=Path(__file__).parent/'evidence'
names=[f'{state}-{w}.png' for state in ['initial','expanded'] for w in [1440,768,390]]+['mobile-menu-390.png','invalid-submit-390.png','simulated-success-390.png']
comparisons=[]
for name in names:
 im=Image.open(root/'design-v1'/name)
 for y in range(0,im.height,760):im.crop((0,y,im.width,min(y+840,im.height))).save(out/f'{Path(name).stem}-y{y}.png')
 run=out/f'runtime-{name}'
 if run.exists():
  a=im.convert('RGB');b=Image.open(run).convert('RGB')
  comparisons.append({'asset':name,'sameDimensions':a.size==b.size,'pixelEqual':a.size==b.size and ImageChops.difference(a,b).getbbox() is None})
(out/'correspondence.json').write_text(json.dumps(comparisons,indent=2))
print(json.dumps(comparisons))
