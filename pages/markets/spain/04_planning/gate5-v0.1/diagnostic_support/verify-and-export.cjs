const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'MARKET-EU-ES_GATE5_COMPLETE_VISUAL_V0.1.html');
const g4Path = path.resolve(root, '../gate4-v0.1/MARKET-EU-ES_GATE4_VISUAL_SAMPLES_V0.1.html');
const formalDir = path.join(root, 'approval_core');
const diagnosticDir = path.join(root, 'diagnostic_support');
const exportFormal = process.argv.includes('--formal');
const url = `file:///${htmlPath.replace(/\\/g, '/')}`;
const widths = [
  { name: '1440', width: 1440, height: 900, dpr: 1 },
  { name: '768', width: 768, height: 900, dpr: 1 },
  { name: '390', width: 390, height: 844, dpr: 2 },
];
const expectedHeadings = [
  'Titanium Dioxide Supplier for Spain',
  'Review TiO2 for Your Application',
  'Coatings',
  'Plastics & Masterbatch',
  'Documents for Your Product Review',
  'Request a Quote for Delivery to Spain',
];
const expectedMainLinks = [
  ['Home','/'], ['Markets','/markets/'], ['European Union','/markets/european-union/'],
  ['Request a Quote','/request-a-quote/'], ['Explore Products','/products/'],
  ['TiO2 for Coatings','/applications/titanium-dioxide-for-coatings/'],
  ['TiO2 for Plastics','/applications/titanium-dioxide-for-plastics/'],
  ['TiO2 for Masterbatch','/applications/titanium-dioxide-for-masterbatch/'],
  ['Explore Products','/products/'], ['Request Documents','/request-documents/'],
  ['View Document Hub','/documents/'], ['Request a Quote','/request-a-quote/'],
  ['EU Procurement Overview','/markets/european-union/'],
  ['EU TiO2 Trade Update','/resources/eu-titanium-dioxide-anti-dumping-duty/'],
];
const normalize = s => s.replace(/\s+/g, ' ').trim();
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
function pngRecord(file, logical, dpr, state) {
  const p = path.join(formalDir, file); const b = fs.readFileSync(p);
  return { file, path: p.replace(/\\/g,'/'), logical, physical:{width:logical.width*dpr,height:logical.height*dpr}, dpr, state, bytes:b.length, sha256:sha(b) };
}

(async()=>{
  fs.mkdirSync(formalDir,{recursive:true});
  const browser = await chromium.launch({channel:'chrome', headless:true});
  const results = { date:new Date().toISOString(), mode: exportFormal?'FORMAL':'PREFLIGHT', browser:null, source:{}, viewports:[], findings:[], sharedObservations:[], navigationBoundary:'LOCAL_NAVIGATION_INTENT_ONLY' };
  results.browser = await browser.version();
  const html = fs.readFileSync(htmlPath,'utf8');
  const g4 = fs.readFileSync(g4Path,'utf8');
  const body = html.match(/<body>[\s\S]*<\/body>/)?.[0];
  const g4body = g4.match(/<body>[\s\S]*<\/body>/)?.[0];
  results.source = {
    htmlPath:htmlPath.replace(/\\/g,'/'), bytes:Buffer.byteLength(html), sha256:sha(Buffer.from(html)),
    g4Path:g4Path.replace(/\\/g,'/'), g4Sha256:sha(fs.readFileSync(g4Path)),
    visibleBodyExactToApprovedG4: body===g4body,
    canonicalInserted: html.includes('<link rel="canonical" href="https://tio2malaysia.com/markets/spain/">'),
    schemaTypesInserted: html.includes('"@type":"WebPage"') && html.includes('"@type":"BreadcrumbList"'),
  };
  if(!results.source.visibleBodyExactToApprovedG4) results.findings.push({id:'ES-G5-PRE-01',severity:'BLOCKER',message:'Visible body differs from approved Gate4 source'});
  const exports=[];
  for(const spec of widths){
    const context=await browser.newContext({viewport:{width:spec.width,height:spec.height},deviceScaleFactor:spec.dpr});
    const page=await context.newPage();
    const errors=[]; page.on('pageerror',e=>errors.push(String(e)));
    await page.goto(url,{waitUntil:'load'}); await page.evaluate(()=>document.fonts.ready);
    const metrics=await page.evaluate(({expectedHeadings,expectedMainLinks})=>{
      const main=document.querySelector('main'); const sections=[...main.querySelectorAll(':scope>section')];
      const links=[...main.querySelectorAll('a')].map(a=>[a.textContent.trim(),a.getAttribute('href')]);
      const controls=[...document.querySelectorAll('a,button')].filter(el=>{const r=el.getBoundingClientRect();return r.width>0&&r.height>0&&!el.closest('[hidden]')&&!el.closest('dialog:not([open])')}).map(el=>{const r=el.getBoundingClientRect();return {text:el.textContent.trim(),w:r.width,h:r.height}});
      const schema=[...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>JSON.parse(s.textContent));
      return {
        title:document.title,description:document.querySelector('meta[name=description]')?.content,
        robots:document.querySelector('meta[name=robots]')?.content,canonical:document.querySelector('link[rel=canonical]')?.href,
        lang:document.documentElement.lang,schema,
        headings:[...main.querySelectorAll('h1,h2,h3')].map(x=>x.textContent.trim()),
        sectionIds:sections.map(x=>x.id), links,
        dimensions:{scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,scrollHeight:document.documentElement.scrollHeight},
        font:getComputedStyle(document.querySelector('h1')).fontFamily,
        minControl:{w:Math.min(...controls.map(x=>x.w)),h:Math.min(...controls.map(x=>x.h)),count:controls.length},
        noImages:[...main.querySelectorAll('img,picture,video')].length===0,
        emptyMedia:[...main.querySelectorAll('[class*=media i],[class*=image i]')].length,
        orderOk:sections.map(x=>x.id).join(',')==='es-01,es-02,es-03,es-04',
        headingsOk:JSON.stringify([...main.querySelectorAll('h1,h2,h3')].map(x=>x.textContent.trim()))===JSON.stringify(expectedHeadings),
        linksOk:JSON.stringify(links)===JSON.stringify(expectedMainLinks),
        cooCount:(main.innerText.match(/A Certificate of Origin is available upon request\./g)||[]).length,
        afterSubmitCount:(main.innerText.match(/After you submit your quotation request, our team will review your requirements and contact you using the details provided\./g)||[]).length,
      };
    },{expectedHeadings,expectedMainLinks});
    const routeChecks=[];
    const mainLinks=page.locator('main a');
    for(let i=0;i<await mainLinks.count();i++){
      await mainLinks.nth(i).click();
      routeChecks.push(await page.evaluate(()=>window.__navigationIntents.at(-1)));
    }
    const r={...spec,metrics,routeChecks,pageErrors:errors,menu:null,cookie:null,breakpoint:null};
    if(exportFormal){
      // Link-target checks move the real pointer. Formal normal pages must not
      // inherit that hover/focus state.
      await page.mouse.move(spec.width-1, 1);
      await page.evaluate(()=>document.activeElement instanceof HTMLElement && document.activeElement.blur());
      await page.waitForTimeout(30);
      const f=`${spec.name}-full-page${spec.dpr===2?'@2x':''}.png`;
      await page.screenshot({path:path.join(formalDir,f),fullPage:true}); exports.push(pngRecord(f,{width:spec.width,height:metrics.dimensions.scrollHeight},spec.dpr,'NORMAL_FULL_PAGE'));
    }
    if(spec.width<1101){
      await page.locator('.menuButton').focus(); await page.keyboard.press('Enter');
      const open=await page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),active:document.activeElement?.textContent.trim(),overflow:document.body.style.overflow,mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,hidden:document.querySelector('.mobileNav').hidden}));
      const menuFile=`${spec.name}-menu-open-focus${spec.dpr===2?'@2x':''}.png`;
      if(exportFormal){await page.screenshot({path:path.join(formalDir,menuFile)});exports.push(pngRecord(menuFile,{width:spec.width,height:spec.height},spec.dpr,'MENU_OPEN_FIRST_LINK_FOCUS'));}
      await page.keyboard.press('Escape');
      const closed=await page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),active:document.activeElement?.className,overflow:document.body.style.overflow,hidden:document.querySelector('.mobileNav').hidden}));
      r.menu={open,closed};
      await page.locator('.menuButton').click(); await page.setViewportSize({width:1440,height:900}); await page.waitForTimeout(40);
      r.breakpoint=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,activeTag:document.activeElement?.tagName,overflow:document.body.style.overflow,mainInert:document.querySelector('main').inert}));
    }
    await page.setViewportSize({width:spec.width,height:spec.height});
    await page.locator('#cookie-trigger').scrollIntoViewIfNeeded(); await page.locator('#cookie-trigger').focus(); await page.keyboard.press('Enter');
    const cookieOpen=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement?.textContent.trim()}));
    const cookieFile=`${spec.name}-cookie-focus${spec.dpr===2?'@2x':''}.png`;
    if(exportFormal){await page.screenshot({path:path.join(formalDir,cookieFile)});exports.push(pngRecord(cookieFile,{width:spec.width,height:spec.height},spec.dpr,'COOKIE_OPEN_CLOSE_FOCUS'));}
    await page.keyboard.press('Escape');
    const cookieClosed=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement?.id})); r.cookie={open:cookieOpen,closed:cookieClosed};
    if(exportFormal && spec.name==='1440'){
      const a=page.locator('main a.primary').first(); await a.hover(); const f='1440-primary-hover.png'; await page.screenshot({path:path.join(formalDir,f)});exports.push(pngRecord(f,{width:1440,height:900},1,'PRIMARY_HOVER'));
    }
    if(exportFormal && spec.name==='768'){
      const a=page.getByRole('link',{name:'TiO2 for Masterbatch'}); await a.focus(); const f='768-application-focus.png'; await page.screenshot({path:path.join(formalDir,f)});exports.push(pngRecord(f,{width:768,height:900},1,'APPLICATION_LINK_FOCUS'));
    }
    if(exportFormal && spec.name==='390'){
      const states=[
        ['390-document-hub-hover@2x.png',page.getByRole('link',{name:'View Document Hub'}),'hover','DOCUMENT_HUB_HOVER'],
        ['390-document-hub-focus@2x.png',page.getByRole('link',{name:'View Document Hub'}),'focus','DOCUMENT_HUB_FOCUS'],
        ['390-related-hover@2x.png',page.getByRole('link',{name:'EU TiO2 Trade Update'}),'hover','RELATED_LINK_HOVER'],
        ['390-footer-focus@2x.png',page.locator('footer a[href="/privacy-policy/"]'),'focus','FOOTER_LINK_FOCUS'],
      ];
      for(const [f,loc,act,state] of states){await loc.scrollIntoViewIfNeeded();await loc[act]();await page.screenshot({path:path.join(formalDir,f)});exports.push(pngRecord(f,{width:390,height:844},2,state));}
    }
    const hardOk=metrics.dimensions.scrollWidth===metrics.dimensions.clientWidth && metrics.orderOk && metrics.headingsOk && metrics.linksOk && metrics.minControl.w>=44 && metrics.minControl.h>=44 && metrics.font.includes('Inter') && metrics.noImages && metrics.cooCount===1 && metrics.afterSubmitCount===1 && errors.length===0;
    if(!hardOk) results.findings.push({id:`ES-G5-${spec.name}-HARD`,severity:'BLOCKER',message:'Viewport hard check failed',metrics});
    results.viewports.push(r); await context.close();
  }
  results.sharedObservations.push({id:'ES-G4-OBS01',status:'REPRODUCED_IN_GATE5',observed:results.viewports.filter(v=>v.breakpoint).map(v=>({width:v.width,...v.breakpoint})),owner:'Global Chrome',blocking:false});
  results.formalAssetCount=exports.length; results.exports=exports;
  results.status=results.findings.length?'FAIL_PREFLIGHT':'PASS_FOR_FORMAL_RENDER';
  const out=path.join(diagnosticDir,exportFormal?'formal-runtime-and-export.json':'preflight-runtime.json');
  fs.writeFileSync(out,JSON.stringify(results,null,2));
  if(exportFormal) fs.writeFileSync(path.join(formalDir,'export-inventory.json'),JSON.stringify({freezeId:'ES-G5-V01-SOURCE-01',date:new Date().toISOString(),browser:results.browser,assets:exports},null,2));
  await browser.close();
  console.log(JSON.stringify({status:results.status,mode:results.mode,viewports:results.viewports.map(v=>({width:v.width,dpr:v.dpr,height:v.metrics.dimensions.scrollHeight,minControl:v.metrics.minControl,errors:v.pageErrors.length})),assets:exports.length,findings:results.findings,source:results.source,sharedObservations:results.sharedObservations},null,2));
  if(results.findings.length) process.exitCode=2;
})().catch(e=>{console.error(e);process.exit(1)});
