const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out=path.resolve(__dirname,'..').replaceAll('\\','/'),mode=process.argv[2]||'diagnostic',formal=mode==='formal';
const binding=JSON.parse(fs.readFileSync(out+'/MARKET-EU-ES_GATE3_INPUT_BINDING_V0.1.json'));
const source=binding.candidate.path,hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const target=formal?out+'/approval_core':__dirname+'/candidate-v0.1';fs.mkdirSync(target,{recursive:true});
if(formal){const freeze=JSON.parse(fs.readFileSync(out+'/MARKET-EU-ES_GATE3_FREEZE_RECORD_V0.1.json'));if(freeze.candidate.sha256!==hash(source))throw Error('Freeze mismatch');}
const checks=[],assets=[],network=[],errors=[];
function check(key,pass,actual){checks.push({key,result:pass?'PASS':'FAIL',actual});}
const normalize=s=>s.replace(/\s+/g,' ').trim();
const b=fs.readFileSync(binding.inputs.B.path,'utf8').split('<!-- BUYER_COPY_START -->')[1].split('<!-- BUYER_COPY_END -->')[0].trim();
const expectedText=normalize(b.replace(/^#{1,3} /gm,'').replace(/^- /gm,'').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'$1'));
const expectedLinks=[...b.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map(m=>({text:m[1],href:m[2]}));
const report=()=>fs.writeFileSync(target+'/runtime-checks.json',JSON.stringify({mode,at:new Date().toISOString(),source:{path:source,bytes:fs.statSync(source).size,sha256:hash(source)},checks,failures:checks.filter(c=>c.result==='FAIL'),network,errors,assets},null,2));
(async()=>{
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--disable-background-networking']});
try{
 for(const width of [1440,768,390]){
  const height=width===390?844:900,context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1});
  await context.route(/^https?:/,route=>{network.push(route.request().url());route.abort();});
  const page=await context.newPage();page.on('pageerror',e=>errors.push(String(e)));
  const settle=async()=>page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));});
  await page.goto(pathToFileURL(source).href);await settle();
  const shot=async(state,full=false)=>{const name=formal?`MARKET-EU-ES_GATE3_${width}_${state.toUpperCase()}_V0.1.png`:`${width}-${state}.png`,p=target+'/'+name;await page.screenshot({path:p,fullPage:full});assets.push({path:p,width,state,sha256:hash(p),bytes:fs.statSync(p).size});};
  const actual=await page.locator('main').innerText();check(width+' exact B visible content',normalize(actual)===expectedText,{expected:expectedText,actual:normalize(actual)});
  const links=await page.locator('main a').evaluateAll(ns=>ns.map(n=>({text:n.innerText,href:n.getAttribute('href')})));check(width+' exact ordered B href/label pairs',JSON.stringify(links)===JSON.stringify(expectedLinks),links);
  const geometry=await page.evaluate(()=>({viewport:innerWidth,scroll:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,footerBottom:document.querySelector('footer').getBoundingClientRect().bottom,targets:[...document.querySelectorAll('a,button')].filter(n=>n.getClientRects().length&&!n.closest('[hidden]')).map(n=>{const r=n.getBoundingClientRect();return {label:n.innerText||n.getAttribute('aria-label'),width:r.width,height:r.height,left:r.left,right:r.right}}),headings:[...document.querySelectorAll('main h1,main h2,main h3')].map(n=>({tag:n.tagName,text:n.textContent})),sections:[...document.querySelectorAll('main section')].map(n=>n.id),hidden:[...document.querySelectorAll('main p,main li,main h1,main h2,main h3')].filter(n=>!n.getClientRects().length).length}));
  check(width+' viewport/footer/all body visible',geometry.scroll<=width&&geometry.hidden===0&&geometry.footerBottom<=geometry.height+1,geometry);
  check(width+' all default touch targets at least 44',geometry.targets.every(t=>t.width>=43.99&&t.height>=43.99),geometry.targets.filter(t=>t.width<43.99||t.height<43.99));
  check(width+' exact four module / heading structure',geometry.sections.join(',')==='es-01,es-02,es-03,es-04'&&geometry.headings.filter(x=>x.tag==='H1').length===1&&geometry.headings.length===6,geometry.headings);
  const colors=await page.evaluate(()=>({main:[...document.querySelectorAll('main a')].map(n=>({text:n.textContent,color:getComputedStyle(n).color,bg:getComputedStyle(n).backgroundColor})),menuBorder:getComputedStyle(document.querySelector('.menuButton')).borderTopColor}));
  check(width+' main functional colors',colors.main.every(n=>n.color===(n.text==='Request a Quote'?'rgb(255, 255, 255)':'rgb(0, 128, 120)')),colors);
  check(width+' Markets current and neutral shared assembly',await page.locator('.desktopNav [aria-current=page]').innerText()==='Markets'&&await page.locator('.mobileNav [aria-current=page]').innerText()==='Markets',null);
  const relation=await page.evaluate(()=>({groups:[...document.querySelectorAll('.applicationGroup')].map(n=>({heading:n.querySelector('h3').textContent,links:[...n.querySelectorAll('a')].map(a=>a.getAttribute('href'))})),coo:document.querySelector('.originStatement').closest('section').id,forms:document.querySelectorAll('main form,main input,main select,main details,main table').length,related:document.querySelector('.related').closest('section').id}));
  check(width+' Spain application/document/auxiliary relationships',relation.groups.length===2&&relation.groups[1].links.join(',')==='/applications/titanium-dioxide-for-plastics/,/applications/titanium-dioxide-for-masterbatch/'&&relation.coo==='es-03'&&relation.related==='es-04'&&relation.forms===0,relation);
  await shot('full',true);
  if(!formal){fs.mkdirSync(target+'/segments',{recursive:true});for(let y=0,i=1;y<geometry.height;y+=750,i++){await page.screenshot({path:target+`/segments/${width}-${String(i).padStart(2,'0')}.png`,fullPage:true,clip:{x:0,y,width,height:Math.min(900,geometry.height-y)}});}}
  // Every body link is actually clicked; href intents are local records, never receiver execution.
  for(let i=0;i<links.length;i++){await page.locator('main a').nth(i).click();const intent=await page.evaluate(()=>window.__navigationIntents.at(-1));check(width+' local link intent '+i,intent.href===links[i].href&&(!intent.context||(!('grade' in intent.context)&&!('application' in intent.context)&&!('document_types' in intent.context))),intent);}
  const rfq=await page.evaluate(()=>window.__navigationIntents.filter(n=>n.href==='/request-a-quote/'));
  check(width+' RFQ destination semantics / no query',rfq.length===2&&rfq.every(n=>n.context.destination_country==='Spain'&&n.context.destination_editable&&n.context.source_page_id==='MARKET-EU-ES'),rfq);
  const doc=await page.evaluate(()=>window.__navigationIntents.find(n=>n.href==='/request-documents/'));
  check(width+' Docs source only, no company-country or selection',JSON.stringify(doc.context)===JSON.stringify({source_page_id:'MARKET-EU-ES'}),doc);
  if(width<1101){
   await page.evaluate(()=>scrollTo(0,0));await page.locator('.menuButton').click();
   const menuState=()=>page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),hidden:document.querySelector('.mobileNav').hidden,active:document.activeElement.textContent,overflow:document.body.style.overflow,inert:[...document.querySelectorAll('main,footer,.logoLink,.headerRfq')].map(n=>n.inert),scrollY}));
   let state=await menuState();check(width+' menu open/first focus/background',state.expanded==='true'&&!state.hidden&&state.active==='Home'&&state.overflow==='hidden'&&state.inert.every(Boolean),state);
   await shot('menu');
   check(width+' menu targets 44',await page.locator('.mobileNav a,.menuButton').evaluateAll(ns=>ns.every(n=>{const r=n.getBoundingClientRect();return r.width>=44&&r.height>=44})),null);
   await page.keyboard.press('Shift+Tab');check(width+' menu shift-tab to Close',await page.locator('.menuButton').evaluate(n=>n===document.activeElement),null);
   await page.keyboard.press('Shift+Tab');check(width+' menu reverse cycle',await page.locator('.mobileNav a').last().evaluate(n=>n===document.activeElement),null);
   await page.keyboard.press('Tab');check(width+' menu forward cycle',await page.locator('.menuButton').evaluate(n=>n===document.activeElement),null);
   await page.mouse.move(width-10,700);await page.mouse.wheel(0,500);await page.waitForTimeout(100);check(width+' menu body wheel lock',(await menuState()).scrollY===0,await menuState());
   await page.keyboard.press('Escape');state=await menuState();check(width+' menu Escape restores background/focus',state.hidden&&state.inert.every(x=>!x)&&state.overflow===''&&state.active==='Menu',state);
   await page.mouse.wheel(0,350);await page.waitForTimeout(100);check(width+' menu restored body scroll',(await menuState()).scrollY>0,await menuState());
   for(let i=0;i<8;i++){await page.evaluate(()=>scrollTo(0,0));await page.locator('.menuButton').click();const href=await page.locator('.mobileNav a').nth(i).getAttribute('href');await page.locator('.mobileNav a').nth(i).click();state=await menuState();const intent=await page.evaluate(()=>window.__navigationIntents.at(-1));check(width+' menu navigation close '+i,state.hidden&&state.inert.every(x=>!x)&&state.overflow===''&&intent.href===href,{state,intent});}
   await page.locator('.menuButton').click();await page.locator('.menuButton').click();check(width+' menu Close button', (await menuState()).hidden,null);
   await page.locator('.menuButton').click();await page.setViewportSize({width:1440,height});await settle();state=await menuState();check(width+' cross desktop breakpoint close',state.hidden&&state.inert.every(x=>!x)&&state.overflow==='',state);await page.setViewportSize({width,height});await settle();
  }
  await page.locator('#cookie-trigger').click();await settle();
  check(width+' Cookie initial focus',await page.locator('[data-cookie-close]').evaluate(n=>n===document.activeElement),null);await shot('cookie');
  const cookie=await page.locator('.cookie-layer').evaluate(n=>({open:n.open,rect:{x:n.getBoundingClientRect().x,y:n.getBoundingClientRect().y,right:n.getBoundingClientRect().right,bottom:n.getBoundingClientRect().bottom},actions:[...n.querySelectorAll('a,button')].map(a=>({color:getComputedStyle(a).color,border:getComputedStyle(a).borderTopColor,w:a.getBoundingClientRect().width,h:a.getBoundingClientRect().height}))}));
  check(width+' Cookie visible targets/colors',cookie.open&&cookie.rect.x>=0&&cookie.rect.y>=0&&cookie.rect.right<=width&&cookie.rect.bottom<=height&&cookie.actions.every(a=>a.w>=44&&a.h>=44&&a.color==='rgb(0, 128, 120)'&&a.border==='rgb(0, 128, 120)'),cookie);
  await page.keyboard.press('Shift+Tab');check(width+' Cookie reverse cycle',await page.locator('.cookie-layer a').evaluate(n=>n===document.activeElement),null);await page.keyboard.press('Tab');check(width+' Cookie forward cycle',await page.locator('[data-cookie-close]').evaluate(n=>n===document.activeElement),null);
  await page.keyboard.press('Escape');await settle();check(width+' Cookie Escape returns trigger',await page.locator('#cookie-trigger').evaluate(n=>n===document.activeElement)&&!(await page.locator('.cookie-layer').evaluate(n=>n.open)),null);
  await page.locator('#cookie-trigger').click();await page.locator('.cookie-layer a').click();check(width+' Cookie policy local href',(await page.evaluate(()=>window.__navigationIntents.at(-1).href))==='/cookie-policy/',null);await page.locator('[data-cookie-close]').click();await settle();check(width+' Cookie Close returns trigger',await page.locator('#cookie-trigger').evaluate(n=>n===document.activeElement),null);
  await page.locator('main a').first().focus();await page.keyboard.press('Tab');check(width+' body keyboard focus visible',await page.evaluate(()=>getComputedStyle(document.activeElement).outlineColor)==='rgb(0, 128, 120)',await page.evaluate(()=>({label:document.activeElement.textContent,outline:getComputedStyle(document.activeElement).outline})));
  if(!formal){await page.emulateMedia({reducedMotion:'reduce'});check(width+' reduced motion',await page.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches),null);await page.evaluate(()=>document.documentElement.style.zoom='2');const z=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:innerWidth}));check(width+' 200 percent browser layout zoom no horizontal overflow',z.scroll<=z.viewport,z);}
  await context.close();report();
 }
 check('No page errors / HTTP requests',errors.length===0&&network.length===0,{errors,network});
}catch(error){errors.push(error.stack);check('Execution completed',false,error.stack);process.exitCode=1;}finally{report();await browser.close();}
console.log(JSON.stringify({mode,report:target+'/runtime-checks.json',failures:checks.filter(c=>c.result==='FAIL'),assets:assets.length},null,2));if(checks.some(c=>c.result==='FAIL'))process.exitCode=1;
})();
