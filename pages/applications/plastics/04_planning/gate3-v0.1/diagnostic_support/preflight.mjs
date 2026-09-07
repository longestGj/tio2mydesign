import fs from 'node:fs';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {PNG}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pngjs');
const out='D:/23MySec/pages/applications/plastics/04_planning/gate3-v0.1';
const diag=`${out}/diagnostic_support`;
const render=`${diag}/render`;
const source=`${out}/APP-PLAS_GATE3_WIREFRAME_V0.1.html`;
const binding=JSON.parse(fs.readFileSync(`${out}/input-binding.json`,'utf8'));
const normalize=s=>String(s).replace(/\s+/g,' ').trim();
const assert=(condition,message)=>{if(!condition)throw new Error(message)};
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
async function captureFull(page,file,width,height,viewportHeight){
  const canvas=new PNG({width,height});
  const positions=[];for(let y=0;y<height;y+=viewportHeight)positions.push(Math.min(y,Math.max(0,height-viewportHeight)));
  for(const y of [...new Set(positions)]){await page.evaluate(v=>scrollTo(0,v),y);const shot=PNG.sync.read(await page.screenshot({fullPage:false}));PNG.bitblt(shot,canvas,0,0,width,Math.min(shot.height,height-y),0,y)}
  fs.writeFileSync(file,PNG.sync.write(canvas));await page.evaluate(()=>scrollTo(0,0));
}
fs.mkdirSync(render,{recursive:true});
for(const name of fs.readdirSync(render)){if(name.endsWith('.png'))fs.unlinkSync(`${render}/${name}`)}

const browser=await chromium.launch({headless:true,args:['--disable-gpu']});
const viewports=[{name:'1440',width:1440,height:1000},{name:'768',width:768,height:1000},{name:'390',width:390,height:844}];
const report={pageId:'APP-PLAS',checkedAt:new Date().toISOString(),source:{path:source,sha256:sha(source)},evidenceTypes:['ACTUAL_RUNTIME','STATIC_VISUAL','SOURCE_INSPECTION','LOCAL_NAVIGATION_SIMULATION'],viewports:{},content:{},interactions:{},pageSpecificRisks:{},failures:[]};
try{
  for(const vp of viewports){
    const page=await browser.newPage({viewport:{width:vp.width,height:vp.height},deviceScaleFactor:1});
    await page.goto(pathToFileURL(source).href,{waitUntil:'load'});
    await page.evaluate(()=>document.fonts.ready);
    const state=await page.evaluate(({expectedText})=>{
      const norm=s=>String(s).replace(/\s+/g,' ').trim().replace(/\s+([.,;:!?])/g,'$1');
      const visible=el=>{const s=getComputedStyle(el),r=el.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0};
      const interactive=[...document.querySelectorAll('a,button')].filter(visible).map(el=>{const r=el.getBoundingClientRect();return {text:norm(el.innerText||el.getAttribute('aria-label')),width:r.width,height:r.height,href:el.getAttribute('href')};});
      const overflow=[...document.querySelectorAll('main *')].filter(visible).filter(el=>innerWidth>640||!el.closest('thead')).map(el=>{const r=el.getBoundingClientRect();return {tag:el.tagName,text:norm(el.innerText).slice(0,80),left:r.left,right:r.right,width:r.width,scrollWidth:el.scrollWidth,clientWidth:el.clientWidth,overflow:getComputedStyle(el).overflow}}).filter(x=>x.left<-.6||x.right>innerWidth+.6||((x.overflow==='hidden'||x.overflow==='clip')&&x.scrollWidth>x.clientWidth+1));
      const copy=document.querySelector('#buyer-copy');
      const mainLinks=[...copy.querySelectorAll('a')].map(a=>({text:norm(a.getAttribute('aria-label')||a.textContent),href:a.getAttribute('href')}));
      const modules=[...copy.querySelectorAll('[data-module-id]')].map(x=>x.dataset.moduleId);
      const gradeRows=[...document.querySelectorAll('.module-plas-10 tbody tr')].map(row=>[...row.querySelectorAll('td .cell-value')].map(x=>norm(x.textContent)));
      const sourceCount=document.querySelectorAll('.module-plas-12 ol>li').length;
      const mobileLabels=[...document.querySelectorAll('.cell-label')].filter(visible).map(x=>norm(x.textContent));
      return {innerWidth,documentWidth:document.documentElement.scrollWidth,bodyWidth:document.body.scrollWidth,pageHeight:document.documentElement.scrollHeight,h1:[...copy.querySelectorAll('h1')].map(x=>norm(x.textContent)),h2:[...copy.querySelectorAll('h2')].map(x=>norm(x.textContent)),modules,tables:copy.querySelectorAll('table').length,mainLinks,gradeRows,sourceCount,desktopText:norm(copy.innerText),desktopTextMatches:norm(copy.innerText)===expectedText,interactive,smallTargets:interactive.filter(x=>x.width<43.5||x.height<43.5),overflow,mobileLabelCount:mobileLabels.length,currentVisible:[...document.querySelectorAll('[aria-current="page"]')].filter(visible).map(x=>norm(x.textContent)),desktopCurrent:document.querySelectorAll('.desktopNav [aria-current="page"]').length,mobileCurrent:document.querySelectorAll('.mobileNav [aria-current="page"]').length,footerVisible:visible(document.querySelector('footer')),buyerCurrentWord:/\bCURRENT\b/.test(copy.innerText)};
    },{expectedText:binding.expected.desktopNormalizedText});
    assert(state.documentWidth===vp.width&&state.bodyWidth===vp.width,`${vp.name}: horizontal document overflow`);
    assert(state.overflow.length===0,`${vp.name}: clipped or out-of-bounds elements`);
    assert(state.smallTargets.length===0,`${vp.name}: interactive target below 44x44`);
    assert(state.modules.join('|')===binding.expected.moduleIds.join('|'),`${vp.name}: module order mismatch`);
    assert(state.h1.length===1&&state.h1[0]===binding.expected.h1,`${vp.name}: H1 mismatch`);
    assert(state.h2.length===binding.expected.h2Count,`${vp.name}: H2 count mismatch`);
    assert(state.tables===binding.expected.tableCount,`${vp.name}: table count mismatch`);
    assert(state.sourceCount===binding.expected.sourceCount,`${vp.name}: source count mismatch`);
    assert(state.desktopCurrent===1&&state.mobileCurrent===1,`${vp.name}: navigation-surface current mapping mismatch`);
    if(vp.width>1100)assert(state.currentVisible.length===1&&state.currentVisible[0]==='Applications',`${vp.name}: active navigation mismatch`);
    else assert(state.currentVisible.length===0,`${vp.name}: closed mobile menu exposed current navigation`);
    assert(state.footerVisible,`${vp.name}: footer missing`);
    assert(!state.buyerCurrentWord,`${vp.name}: buyer-visible CURRENT in page body`);
    if(vp.width>640)assert(state.desktopTextMatches,`${vp.name}: rendered Buyer Copy differs from B`);
    if(vp.width<=640)assert(state.mobileLabelCount===41,`${vp.name}: expected 41 mobile field labels`);
    const foundLinks=state.mainLinks.map(x=>`${x.text}|${x.href}`);
    const expectedLinks=binding.expected.links.map(x=>`${x.text}|${x.href}`);
    assert(JSON.stringify(foundLinks)===JSON.stringify(expectedLinks),`${vp.name}: page link text/href mismatch`);
    assert(JSON.stringify(state.gradeRows.map(r=>r[0]))===JSON.stringify(binding.expected.gradeSet),`${vp.name}: Grade set/order mismatch`);
    report.viewports[vp.name]=state;
    const pageHeight=state.pageHeight;
    await captureFull(page,`${render}/diagnostic-${vp.name}-full.png`,vp.width,pageHeight,vp.height);
    let segment=0;
    for(let y=0;y<pageHeight;y+=Math.max(500,vp.height-150)){
      await page.evaluate(scrollY=>scrollTo(0,scrollY),y);
      await page.screenshot({path:`${render}/${vp.name}-segment-${String(segment).padStart(2,'0')}.png`,fullPage:false});
      segment+=1;
    }
    await page.close();
  }

  for(const width of [768,390]){
    const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
    await page.goto(pathToFileURL(source).href,{waitUntil:'load'});
    await page.evaluate(()=>{document.querySelector('.mobileNav').addEventListener('click',e=>e.preventDefault(),true)});
    await page.click('.menuButton');
    const open=await page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),hidden:document.querySelector('.mobileNav').hidden,focus:document.activeElement.textContent.trim(),mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,logoInert:document.querySelector('.logoLink').inert,rfqInert:document.querySelector('.headerRfq').inert,bodyOverflow:getComputedStyle(document.body).overflow}));
    assert(open.expanded==='true'&&!open.hidden&&open.focus==='Home'&&open.mainInert&&open.footerInert&&open.logoInert&&open.rfqInert&&open.bodyOverflow==='hidden',`${width}: menu open state failed`);
    await page.screenshot({path:`${render}/diagnostic-${width}-menu.png`,fullPage:false});
    await page.click('.mobileNav a[aria-current="page"]');
    const selected=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,focus:document.activeElement.className,mainInert:document.querySelector('main').inert,overflow:getComputedStyle(document.body).overflow}));
    assert(selected.hidden&&selected.focus==='menuButton'&&!selected.mainInert&&selected.overflow!=='hidden',`${width}: menu selection-close/focus restore failed`);
    await page.click('.menuButton');
    await page.keyboard.press('Escape');
    const escaped=await page.evaluate(()=>document.querySelector('.mobileNav').hidden&&document.activeElement===document.querySelector('.menuButton'));
    assert(escaped,`${width}: Escape close failed`);
    report.interactions[`menu${width}`]={open,selected,escapeCloseAndFocusReturn:escaped,type:'ACTUAL_RUNTIME_WITH_LOCAL_NAVIGATION_PREVENTION'};
    await page.close();
  }

  const cookiePage=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
  await cookiePage.goto(pathToFileURL(source).href,{waitUntil:'load'});
  await cookiePage.locator('#cookie-trigger').scrollIntoViewIfNeeded();
  await cookiePage.click('#cookie-trigger');
  const cookieOpen=await cookiePage.evaluate(()=>({open:document.querySelector('.cookie-layer').open,focus:document.activeElement.textContent.trim()}));
  assert(cookieOpen.open&&cookieOpen.focus==='Close',`Cookie open/first focus failed`);
  await cookiePage.screenshot({path:`${render}/diagnostic-390-cookie.png`,fullPage:false});
  await cookiePage.click('[data-cookie-close]');
  const cookieClosed=await cookiePage.evaluate(()=>!document.querySelector('.cookie-layer').open&&document.activeElement===document.querySelector('#cookie-trigger'));
  assert(cookieClosed,'Cookie close/focus return failed');
  report.interactions.cookie390={open:cookieOpen,closeAndFocusReturn:cookieClosed,type:'ACTUAL_RUNTIME'};
  await cookiePage.close();

  const mobile=report.viewports['390'];
  const grades=mobile.gradeRows;
  report.content={desktopExactVisibleCopy:true,moduleCount:12,h1Count:1,h2Count:11,tableCount:3,sourceCount:13,linkCount:binding.expected.links.length};
  report.pageSpecificRisks={
    'PLAS-G3-R01':{status:'PASS',evidence:'390 mobile table labels plus three-view geometry'},
    'PLAS-G3-R02':{status:'PASS',evidence:'390 mobile labels and four resin-context records'},
    'PLAS-G3-R03':{status:'PASS',evidence:grades},
    'PLAS-G3-R04':{status:'PASS',evidence:'APP-MB exact route retained in module PLAS-06'},
    'PLAS-G3-R05':{status:'PASS',evidence:'One/several/unknown Grade prose and Documents/Sample/RFQ links retained in sequence'},
    'PLAS-G3-R06':{status:'PASS',evidence:'13 source notes; no overflow; links >=44px'},
    'PLAS-G3-R07':{status:'PASS',evidence:'768/390 menu and Cookie operations'}
  };
}catch(error){report.failures.push(error.stack||String(error));}
finally{await browser.close();}
fs.writeFileSync(`${diag}/runtime-preflight.json`,`${JSON.stringify(report,null,2)}\n`);
console.log(JSON.stringify({status:report.failures.length?'FAIL':'AUTOMATED_PREFLIGHT_PASS_PENDING_VISUAL_READBACK',failures:report.failures,source:report.source,heights:Object.fromEntries(Object.entries(report.viewports).map(([k,v])=>[k,v.pageHeight]))},null,2));
if(report.failures.length)process.exit(1);
