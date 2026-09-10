from pathlib import Path
from playwright.sync_api import sync_playwright
from PIL import Image
import hashlib,json,re,sys

OUT=Path(__file__).parent
SOURCE=OUT/'APP-MB_GATE4_EDITABLE_SOURCE_V0.1.html'
MODE=sys.argv[1]
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def ident(p):return {'path':str(p),'bytes':p.stat().st_size,'sha256':sha(p)}
record={'workset_id':'APP-MB-G4-WORKSET-01','executor':'/root/gate4_masterbatch_execute','source':ident(SOURCE),'mode':MODE,'observations':{},'failures':[]}
def check(name,condition,detail=None):
    record['observations'][name]={'passed':bool(condition),'detail':detail}
    if not condition:record['failures'].append(name)
def geometry(page):return page.evaluate('''() => {
const visible=e=>e.checkVisibility()&&e.getBoundingClientRect().width>0&&e.getBoundingClientRect().height>0;
const rect=e=>{const r=e.getBoundingClientRect();return {name:e.textContent.trim().slice(0,80),x:r.x,y:r.y,w:r.width,h:r.height}};
return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,
 targets:[...document.querySelectorAll('a,button')].filter(visible).map(rect).filter(r=>r.w<43.99||r.h<43.99),
 overflow:[...document.querySelectorAll('main *')].filter(visible).map(rect).filter(r=>r.x<-.1||r.x+r.w>innerWidth+.1),
 clipping:[...document.querySelectorAll('main p,main li,main td,main h1,main h2')].filter(visible).filter(e=>['hidden','clip'].includes(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight+1).map(rect),
 sections:[...document.querySelectorAll('main section')].map(rect),
 tables:[...document.querySelectorAll('main table')].map(t=>({rows:t.tBodies[0].rows.length,display:getComputedStyle(t).display,labels:[...t.querySelectorAll('td')].every(td=>!!td.dataset.label)})),
 fonts:document.fonts.check('17px Inter'),images:[...document.images].every(i=>i.complete&&i.naturalWidth>0),header:document.querySelector('header').getBoundingClientRect().height
}}''')
assets=[]
def shot(page,name,width,role,selector=None):
    folder=OUT/('diagnostic_support' if MODE=='4a' else 'approval_core');folder.mkdir(exist_ok=True)
    dest=folder/name
    if selector:page.locator(selector).screenshot(path=str(dest))
    elif role=='full_page':
        before=page.locator('main section,header,footer').evaluate_all('(es)=>es.map(e=>{const r=e.getBoundingClientRect();return [r.x,r.y,r.width,r.height]})')
        height=page.evaluate('document.documentElement.scrollHeight')
        page.set_viewport_size({'width':width,'height':height})
        after=page.locator('main section,header,footer').evaluate_all('(es)=>es.map(e=>{const r=e.getBoundingClientRect();return [r.x,r.y,r.width,r.height]})')
        assert before==after, 'Capture viewport height changed layout'
        page.screenshot(path=str(dest))
        page.set_viewport_size({'width':width,'height':900})
    else:page.screenshot(path=str(dest))
    assets.append({**ident(dest),'logicalWidth':width,'logicalHeight':height if role=='full_page' else 900,'initialViewportHeight':900,'captureMethod':'same-width expanded viewport; all module/header/footer rectangles unchanged' if role=='full_page' else 'viewport or element','dpr':1,'physicalSize':list(Image.open(dest).size),'role':role,'evidenceType':'STATIC_VISUAL','evidenceLayer':'diagnostic_support' if MODE=='4a' else 'approval_core','sourceSha256':sha(SOURCE)})

with sync_playwright() as pw:
    browser=pw.chromium.launch(headless=True)
    record['renderer']=browser.version
    for width in (1440,768,390):
        c=browser.new_context(viewport={'width':width,'height':900},device_scale_factor=1,reduced_motion='reduce')
        p=c.new_page();p.goto(SOURCE.as_uri());p.evaluate('document.fonts.ready')
        if MODE=='4a':
            if width==1440:shot(p,'APP-MB_GATE4_4A_HERO_1440_V0.1.png',width,'direction_risk','.hero')
            if width==390:shot(p,'APP-MB_GATE4_4A_EVIDENCE_RECORDS_390_V0.1.png',width,'direction_risk','[data-module="read-each-observation-for-the-question-it-answers"]')
        if MODE=='initial':
            g=geometry(p);check(f'geometry-{width}',g['scrollWidth']==width and not g['targets'] and not g['overflow'] and not g['clipping'] and g['fonts'] and g['images'] and len(g['sections'])==11 and [t['rows'] for t in g['tables']]==[4,4,4,7],g)
            check(f'table-transform-{width}',all(t['display']==('block' if width==390 else 'table') and t['labels'] for t in g['tables']))
            old=c.new_page();old.goto((OUT.parent/'APP-MB_GATE3_WIREFRAME_EDITABLE_SOURCE_V0.1.html').as_uri())
            check(f'approved-main-and-shared-{width}',all(p.locator(s).inner_html()==old.locator(s).inner_html() for s in ['main','header','footer','dialog']))
            old.close()
            check(f'headings-{width}',p.locator('main h1').count()==1 and p.locator('main h2').count()==10)
            check(f'no-internal-copy-{width}',not re.search(r'\b(CURRENT|PROVISIONAL_URL|INTERNAL REVIEW|PENDING COPY|Gate [0-9])\b',p.locator('body').inner_text()))
            record['observations'][f'links-{width}']=p.locator('main a').evaluate_all('(a)=>a.map(x=>({text:x.textContent,href:x.getAttribute("href")}))')
            # Actual focus/hover observations, no real request navigation.
            p.keyboard.press('Tab');p.locator('.heroLinks a').first.focus()
            p.keyboard.press('Tab');p.keyboard.press('Shift+Tab')
            record['observations'][f'hero-focus-{width}']=p.locator('.heroLinks a').first.evaluate('(e)=>({outline:getComputedStyle(e).outline,offset:getComputedStyle(e).outlineOffset,focusVisible:e.matches(":focus-visible")})')
            p.locator('.heroLinks a').first.hover()
            record['observations'][f'hero-hover-{width}']=p.locator('.heroLinks a').first.evaluate('(e)=>({background:getComputedStyle(e).backgroundColor,color:getComputedStyle(e).color})')
            p.mouse.move(0,0)
            if width<1100:
                p.locator('.menuButton').click();check(f'menu-open-{width}',p.locator('.menuButton').get_attribute('aria-expanded')=='true' and p.evaluate('document.querySelector("main").inert&&document.querySelector("footer").inert') and p.evaluate('document.activeElement.textContent')=='Home')
                p.locator('.mobileNav a').last.focus();p.keyboard.press('Tab');check(f'menu-forward-trap-{width}',p.evaluate('document.activeElement.classList.contains("menuButton")'))
                p.keyboard.press('Shift+Tab');check(f'menu-back-trap-{width}',p.evaluate('document.activeElement.textContent')=='Request a Quote')
                p.keyboard.press('Escape');check(f'menu-escape-{width}',p.locator('.mobileNav').is_hidden() and p.evaluate('document.activeElement.classList.contains("menuButton")&&!document.querySelector("main").inert'))
                p.locator('.menuButton').click();p.locator('.menuButton').click();check(f'menu-close-button-{width}',p.locator('.mobileNav').is_hidden())
                p.locator('.menuButton').click()
                p.locator('.mobileNav a[href="/applications/"]').evaluate('(e)=>e.addEventListener("click",ev=>ev.preventDefault(),{once:true})')
                p.locator('.mobileNav a[href="/applications/"]').click();check(f'menu-select-close-{width}',p.locator('.mobileNav').is_hidden() and not p.evaluate('document.querySelector("main").inert'))
                record['observations'][f'menu-select-classification-{width}']='LOCAL_SIMULATION: navigation prevented; actual close handler executed'
                p.locator('.menuButton').click();p.set_viewport_size({'width':1440,'height':900});check(f'menu-resize-close-{width}',p.locator('.mobileNav').is_hidden() and not p.evaluate('document.querySelector("main").inert'));p.set_viewport_size({'width':width,'height':900})
            p.locator('#cookie-trigger').click();check(f'cookie-open-{width}',p.locator('dialog').is_visible() and p.evaluate('document.activeElement.hasAttribute("data-cookie-close")'))
            p.keyboard.press('Shift+Tab');check(f'cookie-back-trap-{width}',p.evaluate('document.activeElement.getAttribute("href")')=='/cookie-policy/')
            p.keyboard.press('Tab');check(f'cookie-forward-trap-{width}',p.evaluate('document.activeElement.hasAttribute("data-cookie-close")'))
            p.keyboard.press('Escape');check(f'cookie-escape-{width}',not p.locator('dialog').is_visible() and p.evaluate('document.activeElement.id')=='cookie-trigger')
            p.locator('#cookie-trigger').click();p.locator('[data-cookie-close]').click();check(f'cookie-close-{width}',not p.locator('dialog').is_visible() and p.evaluate('document.activeElement.id')=='cookie-trigger')
            p.locator('.heroLinks a').first.click();p.wait_for_timeout(50);check(f'anchor-{width}',p.evaluate('location.hash')=='#define-the-two-stage-system')
        if MODE=='formal':
            pre=json.loads((OUT/'APP-MB_GATE4_PREFLIGHT_V0.1.json').read_text());assert not pre['failures'] and pre['source']==ident(SOURCE)
            p.mouse.move(0,0);p.evaluate('document.activeElement.blur();window.scrollTo(0,0)')
            shot(p,f'APP-MB_GATE4_FULL_{width}_V0.1.png',width,'full_page')
            if width<1100:
                p.locator('.menuButton').click();p.mouse.move(0,0)
                shot(p,f'APP-MB_GATE4_MENU_OPEN_{width}_V0.1.png',width,'menu_open')
                p.keyboard.press('Escape')
            if width==390:
                p.locator('#cookie-trigger').click();p.mouse.move(0,0)
                shot(p,'APP-MB_GATE4_COOKIE_OPEN_390_V0.1.png',width,'cookie_open')
        c.close()
    if MODE=='initial':
        c=browser.new_context(viewport={'width':390,'height':900},java_script_enabled=False);p=c.new_page();p.goto(SOURCE.as_uri());check('no-js-body',p.locator('main section').count()==11 and p.locator('main table').count()==4);c.close()
        c=browser.new_context(viewport={'width':1440,'height':900});p=c.new_page();p.goto(SOURCE.as_uri());p.evaluate('document.documentElement.style.zoom="200%"');record['observations']['zoom-200-local-simulation']=geometry(p);c.close()
    browser.close()
if MODE=='initial':record['status']='PASS_FOR_FORMAL_RENDER' if not record['failures'] else 'REPAIR_REQUIRED';dest=OUT/'APP-MB_GATE4_PREFLIGHT_V0.1.json'
elif MODE=='4a':record['assets']=assets;dest=OUT/'APP-MB_GATE4_4A_SAMPLES_V0.1.json'
else:record['assets']=assets;record['freeze_id']='APP-MB-G4-FREEZE-01';dest=OUT/'APP-MB_GATE4_EVIDENCE_INDEX_V0.1.json'
assert record['source']==ident(SOURCE)
dest.write_text(json.dumps(record,indent=2),encoding='utf-8')
print(json.dumps({'path':str(dest),'failures':record['failures'],'assets':len(assets)}))
