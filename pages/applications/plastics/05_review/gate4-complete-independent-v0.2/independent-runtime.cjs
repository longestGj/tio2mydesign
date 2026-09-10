const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const pageDir = 'D:/23MySec/pages/applications/plastics';
const source = `${pageDir}/04_planning/gate4-v0.1/APP-PLAS_GATE4_COMPLETE_VISUAL_V0.1.html`;
const review = `${pageDir}/05_review/gate4-complete-independent-v0.2`;
const rerender = `${review}/rerender`;
for (const name of ['full','grade','states']) fs.mkdirSync(`${rerender}/${name}`, {recursive:true});
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity = p => ({path:p.replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:sha(p)});
const pngSize = p => { const b=fs.readFileSync(p); return {width:b.readUInt32BE(16),height:b.readUInt32BE(20)}; };
const checks=[]; const errors=[]; const images=[]; const focusCases=[]; const actionCases=[];
const check=(name,pass,detail)=>checks.push({name,status:pass?'PASS':'FAIL',detail});
const settle=async p=>{await p.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))})};
const clear=async p=>{await p.mouse.move(0,0);await p.evaluate(()=>document.activeElement?.blur());};
const state=loc=>loc.evaluate(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);return{rect:{x:r.x,y:r.y,width:r.width,height:r.height},color:s.color,background:s.backgroundColor,focusVisible:el.matches(':focus-visible'),outline:{width:parseFloat(s.outlineWidth),style:s.outlineStyle,color:s.outlineColor}}});
const same=(a,b)=>['x','y','width','height'].every(k=>Math.abs(a[k]-b[k])<.1);
async function tabTo(page,loc){await clear(page);for(let n=1;n<=160;n++){await page.keyboard.press('Tab');if(await loc.evaluate(el=>el===document.activeElement))return n}return null}

(async()=>{
  check('candidate identity',fs.statSync(source).size===43487&&sha(source)==='fd61a0b74f81c094af4193dcd323cb6f4965321ff453039e0b7bd58c6891e6f9',identity(source));
  const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--disable-background-networking']});
  const version=await browser.version();
  for(const width of [1440,768,390]){
    const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1,reducedMotion:'reduce'});
    await context.route(/^https?:/,r=>r.abort());
    const page=await context.newPage();
    page.on('pageerror',e=>errors.push({width,message:e.message}));
    page.on('console',m=>{if(m.type()==='error')errors.push({width,message:m.text()})});
    await page.goto(pathToFileURL(source).href,{waitUntil:'load'});await settle(page);await clear(page);
    const layout=await page.evaluate(()=>{
      const controls=[...document.querySelectorAll('a,button')].filter(el=>{const s=getComputedStyle(el),r=el.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0});
      const rows=[...document.querySelectorAll('.module-plas-10 tbody tr')];
      return{clientWidth:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,fullHeight:document.documentElement.scrollHeight,modules:[...document.querySelectorAll('[data-module-id]')].map(x=>x.dataset.moduleId),grades:rows.map(r=>r.cells[0].querySelector('.cell-value').innerText.trim()),processes:rows.map(r=>r.cells[1].querySelector('.cell-value').innerText.trim()),gradeLinks:rows.map(r=>r.querySelector('a').getAttribute('href')),gradeHeights:rows.map(r=>r.getBoundingClientRect().height),sources:document.querySelectorAll('.module-plas-12 ol>li').length,bodyLinks:document.querySelectorAll('main a').length,small:controls.filter(el=>{const r=el.getBoundingClientRect();return r.width<44||r.height<44}).length,overflow:[...document.querySelectorAll('body *')].filter(el=>el.checkVisibility()&&!(innerWidth<=640&&el.closest('thead'))).map(el=>el.getBoundingClientRect()).filter(r=>r.width>0&&(r.left<-.5||r.right>innerWidth+.5)).length,canonical:document.querySelectorAll('link[rel="canonical"]').length,jsonLd:document.querySelectorAll('script[type="application/ld+json"]').length,currentVisible:/\bCURRENT\b/.test(document.body.innerText),applicationsCurrent:document.querySelector('.desktopNav a[href="/applications/"]')?.getAttribute('aria-current'),headerShared:document.querySelector('header')?.dataset.shared,footerShared:document.querySelector('footer')?.dataset.shared,rfqHref:document.querySelector('.headerRfq')?.getAttribute('href'),terms:/\bTerms\b/.test(document.body.innerText)};
    });
    const expectedGrades=['M-350','M-510','M-200','M-108','M-210','M-340','M-886','M-2377'];
    check(`${width}: viewport/overflow`,layout.clientWidth===width&&layout.scrollWidth===width&&layout.overflow===0&&layout.small===0,layout);
    check(`${width}: 12 modules`,JSON.stringify(layout.modules)===JSON.stringify(['PLAS-01','PLAS-02','PLAS-03','PLAS-04','PLAS-05','PLAS-06','PLAS-07','PLAS-08','PLAS-09','PLAS-10','PLAS-11','PLAS-12']),layout.modules);
    check(`${width}: eight neutral Grades`,JSON.stringify(layout.grades)===JSON.stringify(expectedGrades)&&layout.processes.length===8&&layout.gradeLinks.every((h,i)=>h===`/products/${expectedGrades[i].toLowerCase()}/`)&&Math.max(...layout.gradeHeights)-Math.min(...layout.gradeHeights)<=2.01,layout);
    check(`${width}: PROVISIONAL_URL`,layout.canonical===0&&layout.jsonLd===0,{canonical:layout.canonical,jsonLd:layout.jsonLd});
    check(`${width}: shared contract`,!layout.currentVisible&&layout.applicationsCurrent==='page'&&layout.headerShared==='GLOBAL-CHROME-005'&&layout.footerShared==='GLOBAL-CHROME-005'&&layout.rfqHref==='/request-a-quote/'&&!layout.terms&&layout.sources===13,{current:layout.currentVisible,applicationsCurrent:layout.applicationsCurrent,headerShared:layout.headerShared,footerShared:layout.footerShared,rfqHref:layout.rfqHref,terms:layout.terms,sources:layout.sources});
    const full=`${rerender}/full/${width}-full.png`;await page.screenshot({path:full,fullPage:true});images.push(identity(full));
    const official=`${pageDir}/04_planning/gate4-v0.2/diagnostic_support/regression-full/${width}-full.png`;
    check(`${width}: full-page pixel identity`,sha(full)===sha(official),{review:identity(full),executor:identity(official)});
    const grade=page.locator('.module-plas-10');await grade.scrollIntoViewIfNeeded();const box=await grade.boundingBox();const height=Math.min(900,box.height);const gradePath=`${rerender}/grade/${width}-grade-context.png`;await page.screenshot({path:gradePath,clip:{x:0,y:box.y,width,height}});images.push(identity(gradePath));
    const expectedGradeHeight=({1440:727,768:747,390:269})[width];
    const size=pngSize(gradePath);
    check(`${width}: Grade context geometry`,size.width===width&&size.height===expectedGradeHeight,size);
    const targets=[['masterbatch','.module-plas-06 a'],['m2377','.module-plas-10 a[href="/products/m-2377/"]'],['documents','.module-plas-11 a[href="/request-documents/"]']];
    for(const [slug,selector] of targets){
      const loc=page.locator(selector);await clear(page);await loc.scrollIntoViewIfNeeded();const normal=await state(loc);const np=`${rerender}/states/${width}-${slug}-normal.png`;await loc.screenshot({path:np});images.push(identity(np));
      await loc.hover();const hover=await state(loc);const hp=`${rerender}/states/${width}-${slug}-hover.png`;await loc.screenshot({path:hp});images.push(identity(hp));
      const tabs=await tabTo(page,loc);await loc.evaluate(el=>el.scrollIntoView({block:'center'}));const focus=await state(loc);const fp=`${rerender}/states/${width}-${slug}-focus.png`;await loc.screenshot({path:fp});images.push(identity(fp));
      const pass=tabs!==null&&normal.color!==hover.color&&focus.focusVisible&&focus.outline.style==='solid'&&focus.outline.width===3&&same(normal.rect,hover.rect)&&same(normal.rect,focus.rect)&&focus.rect.width>=44&&focus.rect.height>=44;
      focusCases.push({width,slug,tabs,normal,hover,focus});check(`${width}: ${slug} N/H/F`,pass,focusCases.at(-1));
    }
    if(width<1101){await clear(page);await page.locator('.menuButton').click();const opened=await page.evaluate(()=>!document.querySelector('.mobileNav').hidden&&document.querySelector('.menuButton').getAttribute('aria-expanded')==='true'&&document.querySelector('main').inert&&document.querySelector('footer').inert);await page.keyboard.press('Escape');const returned=await page.evaluate(()=>document.querySelector('.mobileNav').hidden&&document.activeElement===document.querySelector('.menuButton'));check(`${width}: Menu`,opened&&returned,{opened,returned});}
    await page.locator('#cookie-trigger').scrollIntoViewIfNeeded();await page.locator('#cookie-trigger').click();const cookie=await page.evaluate(()=>document.querySelector('.cookie-layer').open&&document.querySelector('.cookie-layer').matches(':modal')&&document.activeElement?.innerText==='Close');await page.keyboard.press('Escape');const cookieReturn=await page.evaluate(()=>!document.querySelector('.cookie-layer').open&&document.activeElement===document.querySelector('#cookie-trigger'));check(`${width}: Cookie`,cookie&&cookieReturn,{cookie,cookieReturn});
    await page.evaluate(()=>window.localNavigationIntents=[]);for(const href of ['/request-documents/','/request-sample/','/request-a-quote/'])await page.locator(`.module-plas-11 a[href="${href}"]`).click();const intents=await page.evaluate(()=>window.localNavigationIntents);actionCases.push({width,intents});check(`${width}: request paths`,JSON.stringify(intents)===JSON.stringify([{href:'/request-documents/',context:{sourcePage:'APP-PLAS'},type:'LOCAL_NAVIGATION_INTENT_ONLY'},{href:'/request-sample/',context:{application:'Plastics',gradeMode:'KNOWN_OR_UNKNOWN'},type:'LOCAL_NAVIGATION_INTENT_ONLY'},{href:'/request-a-quote/',context:{application:'Plastics',gradeMode:'KNOWN_LEAD_OR_NOT_SURE',additionalCandidates:'Additional Requirements'},type:'LOCAL_NAVIGATION_INTENT_ONLY'}]),intents);
    await context.close();
  }
  await browser.close();
  const failures=checks.filter(x=>x.status==='FAIL');
  const record={page_id:'APP-PLAS',workset_id:'APP-PLAS-G4-COMPLETE-20260907-02',freeze_id:'APP-PLAS-G4-FREEZE-20260907-02',role:'INDEPENDENT_TARGETED_REREVIEW',generated_at:new Date().toISOString(),renderer:{browser:version,node:process.version,headless:true,dpr:1,viewports:[{width:1440,height:900},{width:768,height:900},{width:390,height:900}],network:'HTTP(S) blocked'},source:identity(source),checks,failures,errors,counts:{checks:checks.length,passed:checks.length-failures.length,failures:failures.length,errors:errors.length,images:images.length,full:3,grade_context:3,target_states:27},images,focusCases,actionCases,status:failures.length||errors.length?'FAIL':'PASS'};
  fs.writeFileSync(`${review}/independent-runtime.json`,JSON.stringify(record,null,2)+'\n');console.log(JSON.stringify({status:record.status,counts:record.counts,failures:failures.map(x=>x.name),errors},null,2));if(record.status!=='PASS')process.exit(1);
})().catch(e=>{console.error(e);process.exit(1)});
