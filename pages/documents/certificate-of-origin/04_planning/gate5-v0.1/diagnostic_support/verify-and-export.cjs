const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..'),formalDir=path.join(root,'approval_core'),diagDir=path.join(root,'diagnostic_support');
const htmlPath=path.join(root,'DOC-COO_GATE5_COMPLETE_VISUAL_V0.1.html');
const g4Path=path.resolve(root,'../gate4-v0.2/DOC-COO_GATE4_VISUAL_SAMPLES_V0.2.html');
const formal=process.argv.includes('--formal');
const url=`file:///${htmlPath.replace(/\\/g,'/')}`;
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const specs=[{name:'1440',width:1440,height:900,dpr:1},{name:'768',width:768,height:900,dpr:1},{name:'390',width:390,height:844,dpr:2}];
const headings=['Certificate of Origin for Titanium Dioxide: What Buyers Should Verify','Which Origin Evidence Is Relevant?','What Determines the Right Evidence?','Origin Evidence and Traceability Answer Different Questions','Prepare Your Request','Official Source'];
const links=[
 ['Home','/'],['Documents','/documents/'],['explore the Product Hub','/products/'],['Request Origin Documentation','/request-documents/'],
 ['Royal Malaysian Customs Department guidance','https://www.customs.gov.my/en/business/facilitation/rules-of-origin-roo/faq-rules-of-origin'],
 ['Request Origin Documentation','/request-documents/'],['View Document Hub','/documents/'],
 ['Royal Malaysian Customs Department, FAQ Rules of Origin.','https://www.customs.gov.my/en/business/facilitation/rules-of-origin-roo/faq-rules-of-origin']
];
const comparison=[
 ['Preferential proof or certificate','When an importer intends to claim treatment under an applicable trade agreement.','Confirm the agreement, its rules of origin, the permitted form of proof and the supporting documents required for the transaction.'],
 ['Non-preferential Certificate of Origin','When origin must be certified under non-preferential rules.','Confirm the destination requirement, the applicable non-preferential rules and the identifying details that must appear in the certificate.'],
 ['Other permitted proof or declaration','When the applicable agreement or procedure allows a declaration, electronic form or another form of proof.','Confirm who may make or issue it, the required information and how it must accompany the transaction documents.']
];
function record(file,logical,dpr,state){const p=path.join(formalDir,file),b=fs.readFileSync(p);return{file,path:p.replace(/\\/g,'/'),logical,physical:{width:logical.width*dpr,height:logical.height*dpr},dpr,state,bytes:b.length,sha256:sha(b)}}
async function clearState(page,w){await page.keyboard.press('Escape').catch(()=>{});await page.mouse.move(w-1,1);await page.evaluate(()=>{if(document.querySelector('dialog[open]'))document.querySelector('dialog[open]').close();if(document.activeElement instanceof HTMLElement)document.activeElement.blur();scrollTo(0,0)});await page.waitForTimeout(50)}

(async()=>{
 fs.mkdirSync(formalDir,{recursive:true});
 const html=fs.readFileSync(htmlPath,'utf8'),g4=fs.readFileSync(g4Path,'utf8');
 const body=html.match(/<body>[\s\S]*<\/body>/)?.[0],g4body=g4.match(/<body>[\s\S]*<\/body>/)?.[0];
 const browser=await chromium.launch({channel:'chrome',headless:true});
 const result={date:new Date().toISOString(),mode:formal?'FORMAL':'PREFLIGHT',browser:await browser.version(),source:{htmlPath:htmlPath.replace(/\\/g,'/'),bytes:Buffer.byteLength(html),sha256:sha(Buffer.from(html)),g4Path:g4Path.replace(/\\/g,'/'),g4Sha256:sha(fs.readFileSync(g4Path)),visibleBodyExactToApprovedG4:body===g4body,canonicalInserted:html.includes('<link rel="canonical" href="https://tio2malaysia.com/documents/certificate-of-origin/">'),schemaTypesInserted:html.includes('"@type":"WebPage"')&&html.includes('"@type":"BreadcrumbList"')},viewports:[],findings:[],sharedObservations:[],receiverBoundary:{evidenceType:'LOCAL_SIMULATION',receiverExecuted:false,editableRemovable:'RECEIVER_CONTRACT_NOT_EXECUTED_HERE'}};
 if(!result.source.visibleBodyExactToApprovedG4)result.findings.push({id:'COO-G5-PRE-01',severity:'BLOCKER',message:'Visible body differs from approved Gate4 V0.2 source'});
 const assets=[];
 for(const s of specs){
  const context=await browser.newContext({viewport:{width:s.width,height:s.height},deviceScaleFactor:s.dpr});const page=await context.newPage();const errors=[];const requests=[];
  page.on('pageerror',e=>errors.push(String(e)));page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url())});
  await page.goto(url,{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
  const m=await page.evaluate(({headings,links,comparison,width})=>{
   const main=document.querySelector('main'),table=document.querySelector('.evidenceTable');
   const mainLinks=[...main.querySelectorAll('a')].map(a=>[a.textContent.trim(),a.getAttribute('href')]);
   const rows=[...table.tBodies[0].rows].map(r=>[...r.querySelectorAll(':scope>th,:scope>td')].map(c=>c.querySelector('.cellValue')?.textContent.trim()));
   const labels=[...table.querySelectorAll('.cellLabel')].map(x=>({text:x.textContent.trim(),display:getComputedStyle(x).display}));
   const sourceRects=[...main.querySelectorAll('.officialSourceLink')].map(a=>({text:a.textContent.trim(),rects:a.getClientRects().length,w:a.getBoundingClientRect().width,h:a.getBoundingClientRect().height,display:getComputedStyle(a).display}));
   const controls=[...document.querySelectorAll('a,button')].filter(el=>{const r=el.getBoundingClientRect();return r.width>0&&r.height>0&&!el.closest('[hidden]')&&!el.closest('dialog:not([open])')}).map(el=>{const r=el.getBoundingClientRect();return{text:el.textContent.trim(),w:r.width,h:r.height}});
   const schema=[...document.querySelectorAll('script[type="application/ld+json"]')].map(x=>JSON.parse(x.textContent));
   const text=main.innerText.replace(/\s+/g,' ');
   return{title:document.title,description:document.querySelector('meta[name=description]')?.content,robots:document.querySelector('meta[name=robots]')?.content,canonical:document.querySelector('link[rel=canonical]')?.href,lang:document.documentElement.lang,schema,
    headings:[...main.querySelectorAll('h1,h2')].map(x=>x.textContent.trim()),headingsOk:JSON.stringify([...main.querySelectorAll('h1,h2')].map(x=>x.textContent.trim()))===JSON.stringify(headings),sectionIds:[...main.querySelectorAll(':scope>section')].map(x=>x.id),links:mainLinks,linksOk:JSON.stringify(mainLinks)===JSON.stringify(links),comparison:rows,comparisonOk:JSON.stringify(rows)===JSON.stringify(comparison),labels,
    responsive:{tableDisplay:getComputedStyle(table).display,rowDisplay:getComputedStyle(table.tBodies[0].rows[0]).display,rowColumns:getComputedStyle(table.tBodies[0].rows[0]).gridTemplateColumns,contextColumns:getComputedStyle(document.querySelector('.contextList')).gridTemplateColumns,visibleLabels:labels.filter(x=>x.display!=='none').length},sourceRects,
    dimensions:{scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,scrollHeight:document.documentElement.scrollHeight},font:{family:getComputedStyle(document.querySelector('h1')).fontFamily,status:document.fonts.status,check:document.fonts.check('16px Inter')},minControl:{w:Math.min(...controls.map(x=>x.w)),h:Math.min(...controls.map(x=>x.h)),count:controls.length},noMainMedia:main.querySelectorAll('img,picture,video').length===0,
    current:{desktop:[...document.querySelectorAll('.desktopNav [aria-current=page]')].map(x=>x.textContent.trim()),mobile:[...document.querySelectorAll('.mobileNav [aria-current=page]')].map(x=>x.textContent.trim())},
    exactCounts:{request:(text.match(/Request Origin Documentation/g)||[]).length,additionalRequirements:(text.match(/Additional Requirements/g)||[]).length,countryRegion:(text.match(/Country \/ Region/g)||[]).length,lastReviewed:(text.match(/Last reviewed: 7 September 2026/g)||[]).length,date2025:(text.match(/10 October 2025/g)||[]).length,date2026:(text.match(/5 January 2026/g)||[]).length},
    banned:{availabilityUponRequest:text.includes('A Certificate of Origin is available upon request'),prefilledGrade:!!document.querySelector('[data-prefill-grade]')},
   }
  },{headings,links,comparison,width:s.width});
  const routeChecks=[];const ml=page.locator('main a');for(let i=0;i<await ml.count();i++){await ml.nth(i).click();routeChecks.push(await page.evaluate(()=>window.__navigationIntents.at(-1)))}
  const requestIntents=routeChecks.filter(x=>x.href==='/request-documents/');
  const intentOk=requestIntents.length===2&&requestIntents.every(x=>JSON.stringify(x.context)==='{"prefill":{"document_types":["origin_supplier_qualification"]},"source_context":{"page_id":"DOC-COO"}}'&&x.evidenceType==='LOCAL_SIMULATION'&&x.receiverExecuted===false);
  const hasForbiddenPrefill=requestIntents.some(x=>{const t=JSON.stringify(x.context);return /grade|destination|scheme/i.test(t)});
  const v={...s,metrics:m,routeChecks,requestIntents,intentOk,hasForbiddenPrefill,pageErrors:errors,httpRequests:requests,menu:null,cookie:null,breakpoint:null,footerNormal:null};
  await clearState(page,s.width);
  if(formal){const f=`${s.name}-full-page${s.dpr===2?'@2x':''}.png`;await page.screenshot({path:path.join(formalDir,f),fullPage:true});assets.push(record(f,{width:s.width,height:m.dimensions.scrollHeight},s.dpr,'NORMAL_FULL_PAGE'))}
  if(s.width<1101){await page.locator('.menuButton').focus();await page.keyboard.press('Enter');const open=await page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),active:document.activeElement?.textContent.trim(),overflow:document.body.style.overflow,mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,documentsCurrent:document.querySelector('.mobileNav [aria-current=page]')?.textContent.trim()}));const f=`${s.name}-menu-open-focus${s.dpr===2?'@2x':''}.png`;if(formal){await page.screenshot({path:path.join(formalDir,f)});assets.push(record(f,{width:s.width,height:s.height},s.dpr,'MENU_OPEN_HOME_FOCUS_DOCUMENTS_CURRENT'))}await page.keyboard.press('Escape');const closed=await page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),active:document.activeElement?.className,overflow:document.body.style.overflow,hidden:document.querySelector('.mobileNav').hidden}));v.menu={open,closed};await page.locator('.menuButton').click();await page.setViewportSize({width:1440,height:900});await page.waitForTimeout(50);v.breakpoint=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,activeTag:document.activeElement?.tagName,overflow:document.body.style.overflow,mainInert:document.querySelector('main').inert}));}
  await page.setViewportSize({width:s.width,height:s.height});await page.locator('#cookie-trigger').scrollIntoViewIfNeeded();await page.locator('#cookie-trigger').focus();await page.keyboard.press('Enter');const cookieOpen=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement?.textContent.trim()}));const cf=`${s.name}-cookie-focus${s.dpr===2?'@2x':''}.png`;if(formal){await page.screenshot({path:path.join(formalDir,cf)});assets.push(record(cf,{width:s.width,height:s.height},s.dpr,'COOKIE_OPEN_CLOSE_FOCUS'))}await page.keyboard.press('Escape');const cookieClosed=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement?.id}));v.cookie={open:cookieOpen,closed:cookieClosed};
  if(formal&&s.name==='1440'){
   await clearState(page,s.width);const p=page.locator('main a.primary').first();await p.hover();let f='1440-primary-hover.png';await page.screenshot({path:path.join(formalDir,f)});assets.push(record(f,{width:1440,height:900},1,'PRIMARY_HOVER'));
   await clearState(page,s.width);const a=page.locator('#coo-06 .officialSourceLink');await a.scrollIntoViewIfNeeded();await a.focus();f='1440-official-source-focus.png';await page.screenshot({path:path.join(formalDir,f)});assets.push(record(f,{width:1440,height:900},1,'OFFICIAL_SOURCE_FOCUS'));
  }
  if(formal&&s.name==='768'){
   await clearState(page,s.width);const a=page.locator('#coo-02 .officialSourceLink');await a.scrollIntoViewIfNeeded();await a.focus();const f='768-comparison-source-focus.png';await page.screenshot({path:path.join(formalDir,f)});assets.push(record(f,{width:768,height:900},1,'COMPARISON_SOURCE_FOCUS'));
  }
  if(formal&&s.name==='390'){
   const states=[['390-official-source-hover@2x.png',page.locator('#coo-06 .officialSourceLink'),'hover','OFFICIAL_SOURCE_HOVER'],['390-official-source-focus@2x.png',page.locator('#coo-06 .officialSourceLink'),'focus','OFFICIAL_SOURCE_FOCUS'],['390-document-hub-focus@2x.png',page.getByRole('link',{name:'View Document Hub'}),'focus','DOCUMENT_HUB_FOCUS']];
   for(const [f,a,act,state] of states){await clearState(page,s.width);await a.scrollIntoViewIfNeeded();await a[act]();await page.screenshot({path:path.join(formalDir,f)});assets.push(record(f,{width:390,height:844},2,state))}
   await clearState(page,s.width);await page.locator('footer').scrollIntoViewIfNeeded();await page.mouse.move(s.width-1,1);await page.evaluate(()=>document.activeElement instanceof HTMLElement&&document.activeElement.blur());await page.waitForTimeout(50);let f='390-footer-normal@2x.png';v.footerNormal=await page.evaluate(()=>({active:document.activeElement?.tagName,focused:[...document.querySelectorAll('footer :focus-visible')].length,hovered:[...document.querySelectorAll('footer a:hover,footer button:hover')].length}));await page.screenshot({path:path.join(formalDir,f)});assets.push(record(f,{width:390,height:844},2,'FOOTER_NORMAL_CLEAN'));
   const a=page.locator('footer a[href="/privacy-policy/"]');await a.focus();f='390-footer-focus@2x.png';await page.screenshot({path:path.join(formalDir,f)});assets.push(record(f,{width:390,height:844},2,'FOOTER_LINK_FOCUS'));
  }
  const respOk=s.width>1000?(m.responsive.tableDisplay==='table'&&m.responsive.visibleLabels===0):(s.width>600?(m.responsive.rowDisplay==='grid'&&m.responsive.visibleLabels===9&&m.responsive.rowColumns.split(' ').length===2):(m.responsive.rowDisplay==='grid'&&m.responsive.visibleLabels===9&&m.responsive.rowColumns.split(' ').length===1));
  const counts=m.exactCounts;const hardOk=m.headingsOk&&m.linksOk&&m.comparisonOk&&m.sectionIds.join(',')==='coo-01,coo-02,coo-03,coo-04,coo-05,coo-06'&&m.dimensions.scrollWidth===m.dimensions.clientWidth&&m.font.check&&m.font.status==='loaded'&&m.minControl.w>=44&&m.minControl.h>=44&&m.noMainMedia&&m.current.desktop[0]==='Documents'&&m.current.mobile[0]==='Documents'&&m.sourceRects.every(x=>x.rects===1&&x.w>=44&&x.h>=44)&&counts.request===2&&counts.additionalRequirements===2&&counts.countryRegion===1&&counts.lastReviewed===1&&counts.date2025===1&&counts.date2026===1&&!m.banned.availabilityUponRequest&&intentOk&&!hasForbiddenPrefill&&respOk&&errors.length===0&&requests.length===0;
  if(!hardOk)result.findings.push({id:`COO-G5-${s.name}-HARD`,severity:'BLOCKER',message:'Viewport hard check failed',metrics:m,intentOk,hasForbiddenPrefill,respOk,errors,requests});
  result.viewports.push(v);await context.close();
 }
 result.sharedObservations.push({id:'COO-G4-SHARED-OBS-01',status:'REPRODUCED_IN_GATE5',observed:result.viewports.filter(x=>x.breakpoint).map(x=>({width:x.width,...x.breakpoint})),owner:'Global Chrome',blocking:false});
 result.formalAssetCount=assets.length;result.exports=assets;result.status=result.findings.length?'FAIL_PREFLIGHT':'PASS_FOR_FORMAL_RENDER';
 const out=path.join(diagDir,formal?'formal-runtime-and-export.json':'preflight-runtime.json');fs.writeFileSync(out,JSON.stringify(result,null,2));if(formal)fs.writeFileSync(path.join(formalDir,'export-inventory.json'),JSON.stringify({freezeId:'COO-G5-V01-SOURCE-01',date:new Date().toISOString(),browser:result.browser,assets},null,2));
 await browser.close();console.log(JSON.stringify({status:result.status,mode:result.mode,viewports:result.viewports.map(v=>({width:v.width,dpr:v.dpr,height:v.metrics.dimensions.scrollHeight,minControl:v.metrics.minControl,responsive:v.metrics.responsive,sourceRects:v.metrics.sourceRects,intentOk:v.intentOk,errors:v.pageErrors.length,http:v.httpRequests.length})),assets:assets.length,findings:result.findings,source:result.source,sharedObservations:result.sharedObservations},null,2));if(result.findings.length)process.exitCode=2;
})().catch(e=>{console.error(e);process.exit(1)});
