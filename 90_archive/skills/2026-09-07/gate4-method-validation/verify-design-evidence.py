from pathlib import Path
import hashlib,json
from PIL import Image
root=Path(__file__).resolve().parent
design=root/'design-v1'
d=json.loads((design/'asset-inventory.json').read_text(encoding='utf-8'))
results=[]
for a in d['assets']:
    p=design/a['path']
    ok=p.is_file() and p.stat().st_size==a['bytes'] and hashlib.sha256(p.read_bytes()).hexdigest()==a['sha256']
    actual=None
    if p.suffix.lower()=='.png':
        with Image.open(p) as im: actual=list(im.size)
        ok=ok and actual==[a['physicalWidth'],a['physicalHeight']]
    if isinstance(a.get('sourceIdentity'),list):
        for s in a['sourceIdentity']:
            ok=ok and hashlib.sha256((design/s['path']).read_bytes()).hexdigest()==s['sha256']
    results.append({'path':a['path'],'valid':ok,'actual_png_size':actual})
observed=json.loads((root/'controller-evidence/design-check/observations.json').read_text())
state_checks=[]
for r in observed['records']:
    o=r['observed']; state=r['state']
    if state=='clear-check':
        ok=o['selected']=='Choose a reference record' and o['question']=='How should I interpret the preparation condition?' and o['errorHidden'] and o['resultHidden']
    else:
        ok=o['fontLoaded'] and o['scrollWidth']==r['width'] and all(t['width']>=44 and t['height']>=44 for t in o['targets'])
        if state=='error': ok=ok and o['errorVisible'] and not o['resultVisible'] and o['active']=='record' and bool(o['question'])
        if state=='beta': ok=ok and 'Sample Beta' in o['selected'] and not o['errorVisible'] and not o['resultVisible']
        if state=='success': ok=ok and o['resultVisible'] and 'Sample Beta' in o['selected'] and bool(o['question'])
        if state=='media-absent': ok=ok and not o['illustrationVisible']
        if r['width']==390: ok=ok and o['betaNoteVisible']
    state_checks.append({'width':r['width'],'state':state,'valid':bool(ok)})
result={'inventory_assets':len(results),'pngs':sum(r['actual_png_size'] is not None for r in results),
        'identity_failures':[r for r in results if not r['valid']],
        'controller_state_checks':state_checks,'failed_state_checks':[r for r in state_checks if not r['valid']],
        'external_requests':observed['externalRequests'],
        'controller_viewed_designer_pngs':['1440-orientation-initial','768-comparison-initial','390-request-missing-record-focus','390-comparison-initial'],
        'not_proven':['all exported pixel provenance','all image visual checks by controller','screen readers','production systems','other browsers']}
(root/'controller-evidence/design-handoff-check.json').write_text(json.dumps(result,indent=2),encoding='utf-8')
print(json.dumps(result,indent=2))
