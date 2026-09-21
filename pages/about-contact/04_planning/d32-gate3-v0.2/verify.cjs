// Gate 3 author verifier. A deleted qualifier, wrong CTA owner, leaked restricted
// fact, clipped long company name, or broken overlay exit must fail this check.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'../../../..'),out=__dirname;
const file=path.join(out,'ABOUT-001_D32_GATE3.html');
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const phase=process.argv[2]||'diagnostic',results=[];
function check(id,ok,detail){results.push({id,status:ok?'PASS':'FAIL',detail});}
function save(extra={}){const result={phase,time:new Date().toISOString(),sourceSha256:fs.existsSync(file)?hash(file):null,checks:results,...extra};fs.mkdirSync(path.join(out,'diagnostic'),{recursive:true});fs.writeFileSync(path.join(out,'diagnostic',phase+'.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({phase,passed:results.filter(x=>x.status==='PASS').length,failed:results.filter(x=>x.status==='FAIL'),...extra}));process.exitCode=results.some(x=>x.status==='FAIL')?1:0;}
check('editable_candidate_exists',fs.existsSync(file),'Candidate must exist before page can be assessed');
if(!fs.existsSync(file)){save();return;}
(async()=>{
 const {chromium}=require(process.env.ABOUT_PLAYWRIGHT||'C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
 const browser=await chromium.launch({headless:true});const page=await browser.newPage();
 const uri=require('url').pathToFileURL(file).href;
 const sections=['Who We Are','Why Malaysia Matters','What We Do','Markets We Serve','Applications We Support','How We Work','Documentation & Transparency','Company Facts','Discuss Your Titanium Dioxide Requirements'];
 const sm=fs.readFileSync(path.join(root,'pages/about-contact/06_handoff/ABOUT-001_GATE7_CONTENT_SEO_GEO_SCHEMA_SOURCE_MAP_V0.1.md'),'utf8');
 const body=sm.split('## 2. Approved Visible Content Records')[1].split('## 3. Inline Link Marks')[0];
 const strings=[...body.matchAll(/`([^`]+)`/g)].map(x=>x[1]).filter(x=>!x.startsWith('/')&&!x.startsWith('Organization')&&!['name','description','location','areaServed'].includes(x));
 const sizes=[];
 for(const width of [1440,768,390]){
  await page.setViewportSize({width,height:960});await page.goto(uri);await page.evaluate(()=>document.fonts.ready);
  const text=await page.locator('main').innerText();
  for(const s of strings)check(`${width}:approved:${s.slice(0,48)}`,text.includes(s),s);
  const headings=await page.locator('main h2').allTextContents();check(`${width}:order`,JSON.stringify(headings)===JSON.stringify(sections),headings);
  check(`${width}:h1`,await page.locator('h1').innerText()==='Malaysia-Based Titanium Dioxide Supply for Global Markets');
  check(`${width}:public-clean`,!/(CURRENT|PENDING|PROTOTYPE|company-provided|independently audited|Source: mytio2|Legal Entity|Registration number|ISO certification|certified quality|batch traceability|legalName|RELEASE_BLOCKER)/i.test(text));
  check(`${width}:ownership`,await page.locator('[data-component="RootPageHero"][data-variant="corporate-light"][data-ownership="PROTOTYPE_ONLY"]').count()===1);
  check(`${width}:cta-owner`,await page.locator('.about-actions a').evaluateAll(a=>a.every(x=>x.getAttribute('href')===(x.textContent==='Request a Quote'?'/request-a-quote/':'/contact/'))));
  check(`${width}:no-form-or-download`,await page.locator('main form,main a[download]').count()===0);
  check(`${width}:application-inline-handoff`,await page.locator('.about-support p').first().locator('a[href="/applications/"]').count()===5);
  check(`${width}:media-crop-isolation`,await page.locator('svg.about-crop').evaluateAll(xs=>xs.every(x=>x.getAttribute('preserveAspectRatio')==='xMidYMid slice')));
  const geometry=await page.evaluate(()=>{
   const visible=e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';
   const controls=[...document.querySelectorAll('a,button')].filter(visible).map(e=>({text:e.innerText,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height}));
   const bad=[...document.querySelectorAll('main p,main h1,main h2,main h3,main dt,main dd')].filter(visible).filter(e=>e.scrollWidth>e.clientWidth+1||(getComputedStyle(e).overflowY==='hidden'&&e.scrollHeight>e.clientHeight+1)).map(e=>e.innerText);
   const h=document.querySelector('h1'),s=getComputedStyle(h);
   return {pageWidth:document.documentElement.scrollWidth,controls,bad,h1:{font:s.fontSize,weight:s.fontWeight,spacing:s.letterSpacing,lines:Math.round(h.getBoundingClientRect().height/parseFloat(s.lineHeight))},height:document.documentElement.scrollHeight};
  });sizes.push({width,...geometry});
  check(`${width}:no-overflow`,geometry.pageWidth===width,geometry.pageWidth);
  check(`${width}:no-clipped-text`,geometry.bad.length===0,geometry.bad);
  check(`${width}:targets44`,geometry.controls.every(x=>x.width>=44&&x.height>=44),geometry.controls.filter(x=>x.width<44||x.height<44));
  if(width===390)check('390:approved-h1-exception',geometry.h1.font==='36px'&&geometry.h1.weight==='700'&&geometry.h1.spacing==='normal'&&geometry.h1.lines===4,geometry.h1);
  check(`${width}:loaded-images`,await page.locator('img').evaluateAll(imgs=>imgs.every(x=>x.complete&&x.naturalWidth>0)));
  check(`${width}:relative-routes`,await page.locator('a').evaluateAll(a=>a.every(x=>x.getAttribute('href').startsWith('/'))));
  await page.screenshot({path:path.join(out,'diagnostic',`full-${width}.png`),fullPage:true});
  if(width<1000){
   await page.locator('.menuButton').click();check(`${width}:menu-open`,await page.locator('.mobileNav').isVisible());
   check(`${width}:menu-first-focus`,await page.evaluate(()=>document.activeElement===document.querySelector('.mobileNav a')));
   check(`${width}:menu-background`,await page.locator('main').evaluate(e=>e.inert));
   await page.locator('.mobileNav a').last().focus();await page.keyboard.press('Tab');check(`${width}:menu-cycle`,await page.locator('.menuButton').evaluate(e=>e===document.activeElement));
   await page.keyboard.press('Shift+Tab');check(`${width}:menu-reverse-cycle`,await page.locator('.mobileNav a').last().evaluate(e=>e===document.activeElement));
   await page.screenshot({path:path.join(out,'diagnostic',`menu-${width}.png`),fullPage:false});
   await page.keyboard.press('Escape');check(`${width}:menu-escape`,await page.locator('.mobileNav').isHidden()&&await page.locator('.menuButton').evaluate(e=>e===document.activeElement));
   await page.locator('.menuButton').click();await page.evaluate(()=>document.querySelector('.mobileNav').addEventListener('click',e=>e.preventDefault(),{once:true}));await page.locator('.mobileNav a').nth(6).click();
   check(`${width}:menu-select-exit`,await page.locator('.mobileNav').isHidden()&&!(await page.locator('main').evaluate(e=>e.inert)));
   await page.locator('.menuButton').click();await page.setViewportSize({width:1440,height:960});await page.waitForFunction(()=>document.querySelector('.mobileNav').hidden&&!document.querySelector('main').inert);check(`${width}:desktop-exit`,await page.locator('.mobileNav').isHidden());await page.setViewportSize({width,height:960});
  }
  await page.locator('#cookie-trigger').click();check(`${width}:cookie-open`,await page.locator('.cookie-layer').isVisible());
  check(`${width}:cookie-first-focus`,await page.locator('[data-cookie-close]').evaluate(e=>e===document.activeElement));
  await page.keyboard.press('Shift+Tab');check(`${width}:cookie-reverse-cycle`,await page.locator('.cookie-layer a').evaluate(e=>e===document.activeElement));
  await page.keyboard.press('Tab');check(`${width}:cookie-cycle`,await page.locator('[data-cookie-close]').evaluate(e=>e===document.activeElement));
  await page.locator('[data-cookie-close]').click();check(`${width}:cookie-close-return`,await page.locator('#cookie-trigger').evaluate(e=>e===document.activeElement));
 }
 for(const state of ['partial','restricted']){await page.goto(uri+'?evidence='+state);const text=await page.locator('main').innerText();check(`${state}:scale-atomic`,!/(35,000|over 30 countries|200 factory customers)/.test(text));check(`${state}:no-placeholders`,!/(pending|unavailable|restricted|—)/i.test(text));if(state==='restricted'){check('restricted:capability-atomic',!/(Taiping|Port Klang|REACH|COA|COO)/.test(text));check('restricted:metadata-atomic',await page.locator('meta[name="description"]').count()===0&&!/manufacturer/i.test(await page.title()));}await page.screenshot({path:path.join(out,'diagnostic',state+'-390.png'),fullPage:true});}
 await browser.close();save({sizes,browser:'Playwright Chromium',evidenceType:'ACTUAL_RUNTIME + SOURCE_INSPECTION'});
})().catch(e=>{check('runtime-complete',false,String(e.stack));save();});
