const fs=require('fs'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root='D:/23MySec',base=root+'/pages/resources/chemours-alternatives',bundle=base+'/04_planning/gate4-v0.1',out=__dirname;
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p)),sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity=p=>({path:p,bytes:fs.statSync(p).size,sha256:sha(p)});
const freeze=json(bundle+'/freeze-record.json'),index=json(bundle+'/evidence_index.json'),inputs=json(bundle+'/input_index.json');
const result={dispatch_id:'G5-9PAGE-REVIEW-20260907-01/RES-CHEMOURS/INITIAL',reviewer:'/root/g5_chemours',author:'/root/gate4_chemours_execute',mode:'INDEPENDENT_REVIEW',review_scope:'INITIAL',started_at:new Date().toISOString(),source:identity(freeze.source.path),bundle:identity(bundle+'/freeze-record.json'),evidence_index:identity(bundle+'/evidence_index.json'),identity_checks:[],source_checks:{},viewports:[],network:[],errors:[]};
function walk(o,label){if(!o||typeof o!=='object')return;if(o.path&&o.sha256){const actual=fs.existsSync(o.path)?identity(o.path):null;result.identity_checks.push({record:label,expected:o,actual,match:!!actual&&actual.sha256.toLowerCase()===o.sha256.toLowerCase()&&(!('bytes'in o)||actual.bytes===o.bytes)});}for(const [k,v]of Object.entries(o))if(typeof v==='object')walk(v,label+'/'+k);}
walk(freeze,'freeze');walk(index,'evidence');walk(inputs,'inputs');
result.current_method_identities=['agents/gate5-independent-visual-review/agent.md','skills/layout-interaction-verification/SKILL.md','skills/layout-interaction-verification/references/independent-visual-review.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.9.md'].map(p=>identity(root+'/'+p));
result.pngs=freeze.formal_assets.map(a=>{const b=fs.readFileSync(a.path);return{path:a.path,width:b.readUInt32BE(16),height:b.readUInt32BE(20),matches:b.readUInt32BE(16)===a.physical_width&&b.readUInt32BE(20)===a.physical_height};});
const source=read(freeze.source.path),g3=read(inputs.gate3_source.path);
result.source_checks.body_identical_to_approved_g3=source.split('<body>')[1]===g3.split('<body>')[1];
result.source_checks.shared_css_preserved=source.split('\n\n*{box-sizing')[0].split('<style>')[1]===g3.split('\n\n*{box-sizing')[0].split('<style>')[1];
const norm=s=>s.replace(/\s+/g,' ').trim();
const b=read(base+'/04_planning/RES-CHEMOURS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md').replace(/<!--[\s\S]*?-->/g,'');
const bLines=b.split('\n').map(l=>l.replace(/^#{1,6} /,'').replace(/^\d+\. (?=\*\*)/,'').replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\*\*/g,'')).filter(l=>l.trim());
(async()=>{
const browser=await chromium.launch({headless:true});result.renderer=browser.version();
for(const width of [1440,768,390]){
 const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1});
 await context.route(/^https?:/,r=>{result.network.push({url:r.request().url(),action:'blocked'});return r.abort();});
 const page=await context.newPage();page.on('pageerror',e=>result.errors.push(e.message));
 await page.goto(pathToFileURL(freeze.source.path).href);await page.evaluate(()=>document.fonts.ready);
 const v={width,evidence_type:'ACTUAL_RUNTIME'};result.viewports.push(v);
 v.geometry=await page.evaluate(()=>{
  const rect=e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,w:r.width,h:r.height};};
  const visible=e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';
  const targets=[...document.querySelectorAll('a,button')].filter(visible).map(e=>({text:e.textContent.trim()||e.getAttribute('aria-label'),href:e.getAttribute('href'),...rect(e)}));
  const clipping=[];for(const e of document.querySelectorAll('main *')){if(!visible(e))continue;const s=getComputedStyle(e),r=rect(e);if(r.x<-.5||r.x+r.w>innerWidth+.5||((s.overflowX==='hidden'||s.overflowX==='clip')&&e.scrollWidth>e.clientWidth+1))clipping.push({tag:e.tagName,text:e.textContent.slice(0,70),...r});}
  const sections=[...document.querySelectorAll('main section')].map(e=>({heading:e.querySelector('h1,h2').textContent,...rect(e)}));
  return{width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,header:rect(document.querySelector('header')),font:document.fonts.check('16px Inter'),images:[...document.images].map(e=>({src:e.src,complete:e.complete,naturalWidth:e.naturalWidth})),targets,smallTargets:targets.filter(r=>r.w<43.99||r.h<43.99),clipping,sections,briefColumns:getComputedStyle(document.querySelector('.brief-list')).gridTemplateColumns,briefItems:[...document.querySelectorAll('.brief-list li')].map(rect),actions:[...document.querySelectorAll('.sectionNumber-5 .action')].map(rect),h1Count:document.querySelectorAll('h1').length,mainText:document.querySelector('main').innerText,allLinks:[...document.querySelectorAll('a')].map(e=>({label:e.textContent.trim()||e.getAttribute('aria-label'),href:e.getAttribute('href')})),navCurrent:[...document.querySelectorAll('header nav')].map(e=>({label:e.getAttribute('aria-label'),visible:!!visible(e),current:[...e.querySelectorAll('[aria-current]')].map(a=>a.textContent)}))};
 });
 v.b_lines_missing=bLines.filter(l=>!norm(v.geometry.mainText).includes(norm(l)));
 delete v.geometry.mainText;
 v.link_intents=[];for(const selector of ['.logoLink','.headerRfq','main a','footer a']){
 const links=page.locator(selector);for(let i=0;i<await links.count();i++){const l=links.nth(i);if(await l.isVisible()){const expected=await l.getAttribute('href');await l.click();const intent=await page.evaluate(()=>window.__navigationIntents.at(-1));v.link_intents.push({expected,intent,match:intent.href===expected});}}
 }
 v.focus_styles=[];for(const sel of ['main .primary','main .secondary','main .sectionNumber-2 a','footer a']){const el=page.locator(sel).first();await el.focus();await page.keyboard.press('Tab');await page.keyboard.press('Shift+Tab');v.focus_styles.push(await el.evaluate(e=>({text:e.textContent,outline:getComputedStyle(e).outline,offset:getComputedStyle(e).outlineOffset,color:getComputedStyle(e).color,background:getComputedStyle(e).backgroundColor})));}
 await page.locator('main .primary').first().hover();v.primary_hover=await page.locator('main .primary').first().evaluate(e=>({color:getComputedStyle(e).color,background:getComputedStyle(e).backgroundColor}));
 if(width<1101){
  await page.evaluate(()=>scrollTo(0,0));await page.locator('.menuButton').focus();await page.keyboard.press('Enter');
  v.menu={open:await page.locator('.menuButton').getAttribute('aria-expanded'),firstFocus:await page.evaluate(()=>document.activeElement.textContent),inert:await page.evaluate(()=>[...document.querySelectorAll('main,footer,.logoLink,.headerRfq')].every(e=>e.inert)),targets:await page.locator('.mobileNav a').evaluateAll(es=>es.map(e=>({label:e.textContent,w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height,href:e.getAttribute('href')})))};
  await page.keyboard.press('Shift+Tab');v.menu.backward_to_close=await page.evaluate(()=>document.activeElement.textContent);await page.keyboard.press('Shift+Tab');v.menu.wrap_to_last=await page.evaluate(()=>document.activeElement.textContent);await page.keyboard.press('Tab');v.menu.wrap_to_close=await page.evaluate(()=>document.activeElement.textContent);
  await page.keyboard.press('Escape');v.menu.escape={hidden:await page.locator('.mobileNav').evaluate(e=>e.hidden),focus:await page.evaluate(()=>document.activeElement.textContent),backgroundRestored:await page.evaluate(()=>!document.querySelector('main').inert&&document.body.style.overflow==='')};
  v.menu.selections=[];for(let i=0;i<8;i++){await page.locator('.menuButton').click();const l=page.locator('.mobileNav a').nth(i),expected=await l.getAttribute('href');await l.click();v.menu.selections.push({expected,intent:await page.evaluate(()=>window.__navigationIntents.at(-1)),hidden:await page.locator('.mobileNav').evaluate(e=>e.hidden)});}
  await page.locator('.menuButton').click();await page.locator('.menuButton').click();v.menu.close_button=await page.locator('.mobileNav').evaluate(e=>e.hidden);
  await page.locator('.menuButton').click();await page.setViewportSize({width:1440,height:900});await page.waitForTimeout(80);v.menu.desktop_transition=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,inert:document.querySelector('main').inert,overflow:document.body.style.overflow,active:document.activeElement.tagName}));await page.setViewportSize({width,height:900});
 }
 await page.locator('#cookie-trigger').focus();await page.keyboard.press('Enter');
 v.cookie={open:await page.locator('dialog').evaluate(e=>e.open),firstFocus:await page.evaluate(()=>document.activeElement.textContent),rect:await page.locator('dialog').boundingBox(),controls:await page.locator('.cookie-actions>*').evaluateAll(es=>es.map(e=>({label:e.textContent,w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height,color:getComputedStyle(e).color,border:getComputedStyle(e).borderColor})))};
 await page.keyboard.press('Shift+Tab');v.cookie.backward=await page.evaluate(()=>document.activeElement.textContent);await page.keyboard.press('Tab');v.cookie.forward_wrap=await page.evaluate(()=>document.activeElement.textContent);
 await page.locator('main .primary').first().evaluate(e=>e.focus());v.cookie.background_focus_blocked=await page.evaluate(()=>document.querySelector('dialog').contains(document.activeElement));
 await page.locator('.cookie-actions a').click();v.cookie.policy_intent=await page.evaluate(()=>window.__navigationIntents.at(-1));
 await page.locator('[data-cookie-close]').click();v.cookie.close={open:await page.locator('dialog').evaluate(e=>e.open),focus:await page.evaluate(()=>document.activeElement.id)};
 await page.locator('#cookie-trigger').click();await page.keyboard.press('Escape');await page.waitForTimeout(40);v.cookie.escape={open:await page.locator('dialog').evaluate(e=>e.open),focus:await page.evaluate(()=>document.activeElement.id)};
 await context.close();
}
await browser.close();result.finished_at=new Date().toISOString();result.source_unchanged_after=sha(freeze.source.path)===result.source.sha256;
fs.writeFileSync(out+'/observations.json',JSON.stringify(result,null,2));
console.log(JSON.stringify({identityMismatches:result.identity_checks.filter(x=>!x.match),pngs:result.pngs,source_checks:result.source_checks,viewports:result.viewports.map(v=>({width:v.width,small:v.geometry.smallTargets,clipping:v.geometry.clipping,missingB:v.b_lines_missing,menu:v.menu,cookie:v.cookie})),errors:result.errors,network:result.network},null,2));
})().catch(e=>{result.errors.push(e.stack);fs.writeFileSync(out+'/observations-failed.json',JSON.stringify(result,null,2));console.error(e);process.exitCode=1;});
