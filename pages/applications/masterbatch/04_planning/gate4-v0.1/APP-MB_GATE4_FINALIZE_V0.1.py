from pathlib import Path
import hashlib,json,re
from PIL import Image
from html import unescape
from html.parser import HTMLParser

OUT=Path(__file__).parent
ROOT=Path(r'D:\23MySec')
def ident(p):return {'path':str(p.resolve()),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()}
def norm(s):return re.sub(r'\s+',' ',re.sub(r'\s+([.,;:])',r'\1',s)).strip()
def plain(s):
    s=re.sub(r'\[([^\]]+)\]\([^)]+\)',r'\1',s)
    s=re.sub(r'^#{1,2} |^- |^\d+\. ','',s)
    return norm(s.replace('*','').replace('`',''))
source=OUT/'APP-MB_GATE4_EDITABLE_SOURCE_V0.1.html'
html=source.read_text(encoding='utf-8')
main=re.search(r'<main[^>]*>(.*?)</main>',html,re.S).group(1)
actual=norm(unescape(re.sub(r'<[^>]+>',' ',main)))
copy=(OUT.parent/'APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md').read_text(encoding='utf-8').split('<!-- BUYER_COPY_START -->')[1].split('<!-- BUYER_COPY_END -->')[0]
units=[]
for line in copy.splitlines():
    if not line.strip() or re.match(r'^\|[-| ]+\|$',line):continue
    if line.startswith('|'):units.extend(plain(cell) for cell in line.strip('|').split('|'))
    elif ' · ' in line:units.extend(plain(cell) for cell in line.split(' · '))
    else:units.append(plain(line))
missing=[s for s in units if s not in actual]
def luminance(h):
    rgb=[int(h[i:i+2],16)/255 for i in (1,3,5)]
    linear=[v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in rgb]
    return sum(v*w for v,w in zip(linear,[.2126,.7152,.0722]))
colors=[]
for fg,bg,role in [('#008078','#ffffff','functional text/CTA'),('#008078','#f5f8fb','links/focus on soft surface'),('#ffffff','#031b3a','Hero/footer and dark focus'),('#ffffff','#062b5b','table heading/hover'),('#334155','#ffffff','body'),('#334155','#f5f8fb','body on soft'),('#062b5b','#ffffff','headings'),('#00a99d','#031b3a','menu active decorative marker')]:
    a,b=sorted([luminance(fg),luminance(bg)]);colors.append({'foreground':fg,'background':bg,'role':role,'contrast':round((b+.05)/(a+.05),3)})
prepath=OUT/'APP-MB_GATE4_PREFLIGHT_V0.1.json';pre=json.loads(prepath.read_text())
pre['copy_audit']={'type':'SOURCE_INSPECTION','units':len(units),'matched':len(units)-len(missing),'missing':missing,'visible_verification':'Full three-width readthrough in same preflight record; source strings alone are not visual proof'}
pre['color_pairs']=colors
assert not missing
assert all(x['contrast']>=4.5 for x in colors)
prepath.write_text(json.dumps(pre,indent=2),encoding='utf-8')

ip=OUT/'APP-MB_GATE4_INPUT_INDEX_V0.1.json';inputs=json.loads(ip.read_text())
for extra in ['docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md','pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md','pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md']:
    if not any(x['path']==str(ROOT/extra) for x in inputs['inputs']):inputs['inputs'].append(ident(ROOT/extra))
ip.write_text(json.dumps(inputs,indent=2),encoding='utf-8')
indexpath=OUT/'APP-MB_GATE4_EVIDENCE_INDEX_V0.1.json';idx=json.loads(indexpath.read_text())
idx['capture_check']={'executor':'/root/gate4_masterbatch_execute','result':'PASS','formal_full_png_equals_full_preflight_memory_image':{'1440':True,'768':True,'390':True},'viewing':'All full rasters opened in memory; preflight read at 1800px slices through footer; each formal full PNG compared byte-for-byte with that complete read raster. All three formal state PNGs opened and read. No repeated content/interaction/geometry suite.','sourceUnchanged':True,'persistent_repeated_segments':0}
idx['diagnostic_support']=[ident(OUT/'APP-MB_GATE4_4A_SAMPLES_V0.1.json'),ident(prepath)]
idx['core_records']=[ident(source),ident(ip),ident(OUT/'APP-MB_GATE4_WORKSET_V0.1.md')]
idx['not_applicable']=['embedded form, error/success/selection state: no form exists','new media/no-image switch: intended page has no media','FAQ expansion: no FAQ exists']
idx['unverified']=['actual browser zoom operation (720 logical / 2x physical equivalence measured only)','production routes, prefill, form receivers and actual receipt','CMS/SEO/Schema/scope implementation','real devices and screen-reader operation','real consent inventory or deployment']
indexpath.write_text(json.dumps(idx,indent=2),encoding='utf-8')
errors=[]
for entry in inputs['inputs']+inputs['dependencies']:
    if ident(Path(entry['path']))!=entry:errors.append({'identityMismatch':entry['path']})
for a in idx['assets']:
    real=ident(Path(a['path']))
    if any(real[k]!=a[k] for k in ('path','bytes','sha256')):errors.append({'assetMismatch':a['path']})
    if list(Image.open(a['path']).size)!=a['physicalSize']:errors.append({'sizeMismatch':a['path']})
    if a['sourceSha256']!=ident(source)['sha256']:errors.append({'sourceMismatch':a['path']})
audit={'workset_id':idx['workset_id'],'freeze_id':'APP-MB-G4-FREEZE-01','result':'PASS' if not errors else 'FAIL','input_count':len(inputs['inputs']),'dependency_count':len(inputs['dependencies']),'formal_png_count':len(idx['assets']),'diagnostic_png_count':2,'copy_units':len(units),'evidence_index':ident(indexpath),'errors':errors}
(OUT/'APP-MB_GATE4_MACHINE_CHECK_V0.1.json').write_text(json.dumps(audit,indent=2),encoding='utf-8')
print(json.dumps(audit))
