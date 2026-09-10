from pathlib import Path
import json,re,hashlib
from bs4 import BeautifulSoup
out=Path(__file__).parent
supp=json.loads((out/'supplementary.json').read_text(encoding='utf-8'))
src=out.parent.parent/'04_planning/gate4-v0.1/APP-MB_GATE4_EDITABLE_SOURCE_V0.1.html'
soup=BeautifulSoup(src.read_text(encoding='utf-8'),'html.parser')
def n(s):return re.sub(r'\s+([.,;:])',r'\1',re.sub(r'\s+',' ',s)).strip()
text=n(soup.main.get_text(' ',strip=True))
units=[{'text':x['text'],'present':n(x['text']) in text} for x in supp['copy_units']]
diag=json.loads((out/'keyboard-diagnostic.json').read_text())
obs=json.loads((out/'observations.json').read_text(encoding='utf-8'))
visual=json.loads((out/'visual_coverage.json').read_text())
paths=[Path(x['temporary']) for x in visual['original_image_crops']]+[Path(x) for x in obs['temporary_images']]
cleanup=[]
for p in paths:
    assert p.resolve().parent==out.resolve() and p.name.startswith('temp-')
    item={'path':str(p),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()};p.unlink();item['removed']=not p.exists();cleanup.append(item)
result={'copy_units':len(units),'copy_missing_after_inline_whitespace_normalization':[x for x in units if not x['present']],
        'normalization_resolution':'Initial six nonmatches came from BeautifulSoup inserting spaces between inline elements and punctuation; normalize those spaces only, retaining words, punctuation, values and link labels. Full visual reading separately completed.',
        'keyboard_resolution':'Initial immediate 768 menu sample reported false after Escape from Cookie; isolated diagnostic, including condition-based wait and event trace, returned true in both immediate and settled runs. No persistent candidate defect reproduced. Do not treat initial sample as a page fix; original diagnostic retained.',
        'keyboard_diagnostic':diag,'visual_read_complete':{'1440':[0,8621],'768':[0,9121],'390':[0,14642]},
        'formal_state_images_read':['MENU_OPEN_768','MENU_OPEN_390','COOKIE_OPEN_390'],
        'temporary_runtime_state_views_read':['Cookie 1440','Cookie 768'],'new_persistent_png_count':0,'cleanup':cleanup,
        'source_sha256_after':hashlib.sha256(src.read_bytes()).hexdigest(),'required_findings':[]}
(out/'completion_observations.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'copy_units':len(units),'missing':result['copy_missing_after_inline_whitespace_normalization'],'removed':len(cleanup),'all_removed':all(x['removed'] for x in cleanup),'source':result['source_sha256_after']},ensure_ascii=False))
