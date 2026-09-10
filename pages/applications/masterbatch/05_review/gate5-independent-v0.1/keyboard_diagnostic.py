from pathlib import Path
from playwright.sync_api import sync_playwright
import json
out=Path(__file__).parent; src=out.parent.parent/'04_planning/gate4-v0.1/APP-MB_GATE4_EDITABLE_SOURCE_V0.1.html'
results=[]
with sync_playwright() as pw:
    b=pw.chromium.launch(headless=True)
    for mode in ['immediate','wait_for_cookie_close_focus']:
        c=b.new_context(viewport={'width':768,'height':900});p=c.new_page();p.goto(src.as_uri())
        p.evaluate('''()=>{window.log=[];document.addEventListener('focusin',e=>log.push({event:'focus',target:e.target.id||e.target.className,time:performance.now()}));document.querySelector('dialog').addEventListener('close',()=>log.push({event:'dialog-close',time:performance.now()}));document.addEventListener('keydown',e=>log.push({event:e.key,target:e.target.id||e.target.className,time:performance.now()}));}''')
        p.locator('#cookie-trigger').focus();p.keyboard.press('Enter');p.keyboard.press('Escape')
        if mode!='immediate':p.wait_for_function('!document.querySelector("dialog").open&&document.activeElement.id==="cookie-trigger"')
        p.locator('.menuButton').focus();p.keyboard.press('Enter');p.wait_for_timeout(40)
        results.append({'mode':mode,'menu_open':p.locator('.mobileNav').is_visible(),'events':p.evaluate('log')});c.close()
    b.close()
(out/'keyboard-diagnostic.json').write_text(json.dumps(results,indent=2),encoding='utf-8');print(json.dumps(results,indent=2))
