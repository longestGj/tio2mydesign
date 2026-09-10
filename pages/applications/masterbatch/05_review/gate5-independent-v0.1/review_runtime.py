from pathlib import Path
import json, hashlib, re
from PIL import Image
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

ROOT=Path('D:/23MySec'); OUT=Path(__file__).parent
BASE=ROOT/'pages/applications/masterbatch/04_planning/gate4-v0.1'
SRC=BASE/'APP-MB_GATE4_EDITABLE_SOURCE_V0.1.html'
def identity(p):
    p=Path(p); b=p.read_bytes(); return dict(path=str(p),bytes=len(b),sha256=hashlib.sha256(b).hexdigest())
record={'reviewer':'/root/g5_masterbatch','dispatch_id':'G5-9PAGE-REVIEW-20260907-01/APP-MB/INITIAL','source':identity(SRC),'identities':[],'drift':[],'runtime':{},'failures':[],'temporary_images':[]}
def verify_tree(x,category):
    if isinstance(x,dict):
        if 'path' in x and 'sha256' in x:
            try:
                a=identity(x['path']); a['category']=category; a['matches']=a['sha256']==x['sha256'] and a['bytes']==x.get('bytes',a['bytes'])
                if 'physicalSize' in x: a['png_size']=list(Image.open(x['path']).size); a['matches'] &= a['png_size']==x['physicalSize']
                if not a['matches']: a['expected']=x; record['drift'].append(a)
                record['identities'].append(a)
            except Exception as e: record['failures'].append(str(e))
        for v in x.values(): verify_tree(v,category)
    elif isinstance(x,list):
        for v in x: verify_tree(v,category)
for stem in ['INPUT_INDEX','FREEZE_RECORD','EVIDENCE_INDEX']:
    verify_tree(json.loads((BASE/f'APP-MB_GATE4_{stem}_V0.1.json').read_text()),stem)
record['methods']=[identity(ROOT/p) for p in ['agents/gate5-independent-visual-review/agent.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/independent-visual-review.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.9.md']]
for drift in record['drift']:
    rel=Path(drift['path']).relative_to(ROOT)
    drift['archive_matches']=[]
    for folder in ['2026-09-07-gate4-gate5-handoff','2026-09-07-gate5-gate6-handoff']:
        p=ROOT/'90_archive/project-governance'/folder/rel
        if p.exists() and identity(p)['sha256']==drift['expected']['sha256']: drift['archive_matches'].append(identity(p))
soup=BeautifulSoup(SRC.read_text(encoding='utf-8'),'html.parser')
old=BeautifulSoup((BASE.parent/'APP-MB_GATE3_WIREFRAME_EDITABLE_SOURCE_V0.1.html').read_text(encoding='utf-8'),'html.parser')
record['gate3_markup_parity']={tag:str(soup.select_one(tag))==str(old.select_one(tag)) for tag in ['main','header','footer','dialog','script']}
record['links']=[{'text':a.get_text(' ',strip=True),'href':a.get('href')} for a in soup.select('main a')]
record['tables']=[[[td.get_text(' ',strip=True) for td in tr.select('td,th')] for tr in t.select('tr')] for t in soup.select('main table')]
def check(group,name,value):
    group[name]=value
    if value is False: record['failures'].append(name)
geom='''() => {let visible=e=>e.checkVisibility()&&e.getBoundingClientRect().height>0;let rect=e=>{let r=e.getBoundingClientRect();return {text:e.innerText?.slice(0,75),x:r.x,y:r.y,w:r.width,h:r.height}};return {width:innerWidth,height:document.documentElement.scrollHeight,scrollWidth:document.documentElement.scrollWidth,header:document.querySelector('header').clientHeight,fonts:document.fonts.check('17px Inter'),images:[...document.images].map(i=>({src:i.src,loaded:i.complete&&i.naturalWidth>0})),sections:[...document.querySelectorAll('main section')].map(rect),footer:rect(document.querySelector('footer')),smallTargets:[...document.querySelectorAll('a,button')].filter(visible).map(rect).filter(r=>r.w<43.99||r.h<43.99),overflow:[...document.querySelectorAll('main *')].filter(visible).map(rect).filter(r=>r.x<-.5||r.x+r.w>innerWidth+.5),clip:[...document.querySelectorAll('main p,main li,main td')].filter(visible).filter(e=>['hidden','clip'].includes(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight+1).map(rect),tableDisplay:[...document.querySelectorAll('main table')].map(e=>getComputedStyle(e).display),labels:[...document.querySelectorAll('main td')].map(e=>({label:e.dataset.label,before:getComputedStyle(e,'::before').content})),current:[...document.querySelectorAll('nav [aria-current]')].filter(visible).map(e=>e.innerText)}}'''
with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True);record['browser']=browser.version
    for w in [1440,768,390]:
        ctx=browser.new_context(viewport={'width':w,'height':900},device_scale_factor=1,reduced_motion='reduce')
        p=ctx.new_page();p.goto(SRC.as_uri());p.evaluate('document.fonts.ready');g=p.evaluate(geom);r={'geometry':g};record['runtime'][str(w)]=r
        check(r,'geometry_ok',g['scrollWidth']==w and not g['smallTargets'] and not g['overflow'] and not g['clip'] and g['fonts'] and all(i['loaded'] for i in g['images']))
        check(r,'structure_ok',len(g['sections'])==11 and g['tableDisplay']==(['block']*4 if w==390 else ['table']*4))
        r['scroll_inspection']=[]
        for y in range(0,g['height'],750):
            p.evaluate('(y)=>scrollTo(0,y)',y);r['scroll_inspection'].append(p.evaluate('({y:scrollY,bottom:scrollY+innerHeight})'))
        p.evaluate('scrollTo(0,0)')
        r['anchors']=[]
        for a in p.locator('.heroLinks a').all():
            a.click();r['anchors'].append(p.evaluate('({hash:location.hash,y:scrollY,targetTop:document.querySelector(location.hash).getBoundingClientRect().top})'))
        p.locator('.heroLinks a').first.focus();p.keyboard.press('Tab');p.keyboard.press('Shift+Tab')
        r['hero_focus']=p.locator('.heroLinks a').first.evaluate('(e)=>({visible:e.matches(":focus-visible"),outline:getComputedStyle(e).outline,offset:getComputedStyle(e).outlineOffset})')
        p.locator('.heroLinks a').first.hover();r['hero_hover']=p.locator('.heroLinks a').first.evaluate('(e)=>({bg:getComputedStyle(e).backgroundColor,color:getComputedStyle(e).color})');p.mouse.move(0,0)
        if w<1101:
            p.locator('.menuButton').click();check(r,'menu_enter',p.evaluate('document.activeElement.textContent==="Home"&&document.querySelector("main").inert&&document.querySelector("footer").inert&&document.body.style.overflow==="hidden"'))
            r['menu_controls']=p.locator('.mobileNav a').evaluate_all('(es)=>es.map(e=>({text:e.innerText,href:e.getAttribute("href"),width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height}))')
            p.locator('.mobileNav a').last.focus();p.keyboard.press('Tab');check(r,'menu_forward_trap',p.evaluate('document.activeElement.matches(".menuButton")'));p.keyboard.press('Shift+Tab');check(r,'menu_back_trap',p.evaluate('document.activeElement.textContent==="Request a Quote"'))
            p.keyboard.press('Escape');check(r,'menu_escape_restore',p.evaluate('document.querySelector(".mobileNav").hidden&&!document.querySelector("main").inert&&document.activeElement.matches(".menuButton")'))
            p.locator('.menuButton').click();p.locator('.menuButton').click();check(r,'menu_toggle_close',p.locator('.mobileNav').is_hidden())
            p.locator('.menuButton').click();p.locator('.mobileNav a').nth(3).evaluate('(e)=>e.addEventListener("click",ev=>ev.preventDefault(),{once:true})');p.locator('.mobileNav a').nth(3).click();check(r,'menu_select_close_LOCAL_SIMULATION',p.locator('.mobileNav').is_hidden())
            p.locator('.menuButton').click();p.set_viewport_size({'width':1440,'height':900});check(r,'menu_resize_close',p.locator('.mobileNav').is_hidden() and not p.evaluate('document.querySelector("main").inert'));p.set_viewport_size({'width':w,'height':900})
        p.locator('#cookie-trigger').click();check(r,'cookie_enter',p.evaluate('document.querySelector("dialog").open&&document.activeElement.hasAttribute("data-cookie-close")'))
        r['cookie_geometry']=p.locator('dialog').evaluate('(e)=>({x:e.getBoundingClientRect().x,y:e.getBoundingClientRect().y,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height,scrollWidth:e.scrollWidth,clientWidth:e.clientWidth,text:e.innerText})')
        p.keyboard.press('Shift+Tab');check(r,'cookie_reverse',p.evaluate('document.activeElement.getAttribute("href")==="/cookie-policy/"'));p.keyboard.press('Tab');check(r,'cookie_forward',p.evaluate('document.activeElement.hasAttribute("data-cookie-close")'))
        # Actual background-focus attempt must not leave the native modal.
        p.locator('.heroLinks a').first.evaluate('(e)=>e.focus()');check(r,'cookie_background_blocked',p.evaluate('document.querySelector("dialog").contains(document.activeElement)'))
        # Widths not represented by formal Cookie image: transient runtime view, no retained PNG.
        if w in [1440,768]:
            q=OUT/f'temp-cookie-{w}.png';p.screenshot(path=str(q));record['temporary_images'].append(str(q))
        p.keyboard.press('Escape');check(r,'cookie_escape_restore',not p.locator('dialog').is_visible() and p.evaluate('document.activeElement.id==="cookie-trigger"'))
        p.locator('#cookie-trigger').click();p.locator('[data-cookie-close]').click();check(r,'cookie_close_restore',not p.locator('dialog').is_visible() and p.evaluate('document.activeElement.id==="cookie-trigger"'))
        ctx.close()
    ctx=browser.new_context(viewport={'width':390,'height':900},java_script_enabled=False);p=ctx.new_page();p.goto(SRC.as_uri());record['no_js']={'sections':p.locator('main section').count(),'body':p.locator('main').inner_text()};ctx.close()
    ctx=browser.new_context(viewport={'width':720,'height':450},device_scale_factor=2,reduced_motion='reduce');p=ctx.new_page();p.goto(SRC.as_uri());p.evaluate('document.fonts.ready');record['reflow_200_equivalent_LOCAL_SIMULATION']=p.evaluate(geom);ctx.close()
    browser.close()
record['source_unchanged']=identity(SRC)==record['source']
(OUT/'observations.json').write_text(json.dumps(record,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'failures':record['failures'],'drift':record['drift'],'runtime':{k:{'height':v['geometry']['height'],'geometry_ok':v['geometry_ok']} for k,v in record['runtime'].items()}},ensure_ascii=False,indent=2))
