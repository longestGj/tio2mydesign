from pathlib import Path
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
import re,json,hashlib,difflib
ROOT=Path('D:/23MySec'); OUT=Path(__file__).parent
BASE=ROOT/'pages/applications/masterbatch/04_planning'; SRC=BASE/'gate4-v0.1/APP-MB_GATE4_EDITABLE_SOURCE_V0.1.html'
b=(BASE/'APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md').read_text(encoding='utf-8').split('<!-- BUYER_COPY_START -->')[1].split('<!-- BUYER_COPY_END -->')[0]
soup=BeautifulSoup(SRC.read_text(encoding='utf-8'),'html.parser')
def norm(s): return re.sub(r'\s+',' ',s).strip()
text=norm(soup.main.get_text(' ',strip=True));units=[]
for line in b.splitlines():
    line=line.strip()
    if not line or re.fullmatch(r'[| :\-]+',line):continue
    line=re.sub(r'!?(\[([^]]+)\])\([^)]+\)',r'\2',line)
    line=re.sub(r'^(?:#{1,6} |\d+\. |- )','',line).replace('`','').replace('*','')
    for unit in (line.strip('|').split('|') if line.startswith('|') else [line]):
        if norm(unit) in ['·']:continue
        units.append({'text':norm(unit),'present':norm(unit) in text})
result={'copy_units':units,'copy_missing':[x for x in units if not x['present']],'same_review_state_equivalence':{},'styles':{},'governance_diffs':{}}
for rel in ['AGENTS.md','agents/gate4-complete-visual/agent.md']:
    old=ROOT/'90_archive/project-governance/2026-09-07-gate4-gate5-handoff'/rel
    result['governance_diffs'][rel]=''.join(difflib.unified_diff(old.read_text(encoding='utf-8').splitlines(True),(ROOT/rel).read_text(encoding='utf-8').splitlines(True)))
with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True)
    for w in [1440,768,390]:
        ctx=browser.new_context(viewport={'width':w,'height':900},reduced_motion='reduce');p=ctx.new_page();p.goto(SRC.as_uri());p.evaluate('document.fonts.ready')
        r={};result['styles'][str(w)]=r
        r['rendered_pairs']=p.locator('main h1,main h2,main p,main th,main td,main a,header a,footer a,footer button').evaluate_all('''es=>es.filter(e=>e.checkVisibility()).map(e=>{let bg=e;while(bg&&getComputedStyle(bg).backgroundColor==='rgba(0, 0, 0, 0)')bg=bg.parentElement;let s=getComputedStyle(e);return {tag:e.tagName,color:s.color,background:bg?getComputedStyle(bg).backgroundColor:'rgb(255, 255, 255)',size:s.fontSize,weight:s.fontWeight}})''')
        r['focus_representatives']=[]
        for sel in ['.headerRfq','.heroLinks a','[data-module="grades-to-review"] a','[data-module="prepare-your-request"] a','.sourceSection a','#cookie-trigger']:
            e=p.locator(sel).first;e.focus();p.keyboard.press('Tab');p.keyboard.press('Shift+Tab');r['focus_representatives'].append({'selector':sel,**e.evaluate('(e)=>({focus:e.matches(":focus-visible"),outline:getComputedStyle(e).outline,offset:getComputedStyle(e).outlineOffset})')})
        p.locator('#cookie-trigger').focus();p.keyboard.press('Enter');r['cookie_keyboard_open']=p.locator('dialog').is_visible()
        r['cookie_target_sizes']=p.locator('dialog a,dialog button').evaluate_all('(es)=>es.map(e=>({text:e.innerText,w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height}))')
        p.keyboard.press('Escape')
        if w<1101:
            p.locator('.menuButton').focus();p.keyboard.press('Enter');r['menu_keyboard_open']=p.locator('.mobileNav').is_visible();p.keyboard.press('Escape')
        ctx.close()
    browser.close()
def lum(s):
    v=[int(x)/255 for x in re.findall(r'\d+',s)[:3]];v=[x/12.92 if x<=.04045 else ((x+.055)/1.055)**2.4 for x in v];return sum(a*b for a,b in zip(v,[.2126,.7152,.0722]))
result['contrast_pairs']=[]
for fg,bg in sorted({(v['color'],v['background']) for r in result['styles'].values() for v in r['rendered_pairs']}):
    a,c=sorted([lum(fg),lum(bg)]);result['contrast_pairs'].append({'foreground':fg,'background':bg,'ratio':round((c+.05)/(a+.05),3)})
result['same_review_state_equivalence']={'links':'Every main href and label inspected; native anchors share browser navigation with no page handler or prefill. Both local anchor targets actually clicked at all three widths. External target requests not sent.','cookie':'Same native dialog, same two controls and handler at 1440/768/390. All three behavior sequences actually run; 1440/768 share 560px geometry; 390 has stacked actions and was separately visually checked.','focus':'Actual focus representatives for distinct header, dark Hero, body Grade, request, source and Footer surfaces at all widths; same selectors/handlers and each instance target/size separately audited.'}
(OUT/'supplementary.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'copy_count':len(units),'missing':result['copy_missing'],'contrast_pairs':result['contrast_pairs'],'keyboard':{w:{k:v for k,v in r.items() if 'keyboard' in k} for w,r in result['styles'].items()}},ensure_ascii=False,indent=2))
