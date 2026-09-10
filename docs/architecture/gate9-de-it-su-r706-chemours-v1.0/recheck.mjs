import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';

const d23='D:/23MySec';
const d16='D:/16Wordpress_nextjs/.worktrees/de-it-su-r706-chemours-gate8';
const output='D:/23MySec/docs/architecture/gate9-de-it-su-r706-chemours-v1.0';
const base='http://127.0.0.1:3236';
const cmsUrl='http://127.0.0.1:8187/graphql';
const buildId='D5YP7Z4w9KYNlOMkUVr63';
const require=createRequire(`${d16}/package.json`);
const {chromium}=require('@playwright/test');
const {JSDOM}=require('jsdom');
const sha=value=>createHash('sha256').update(value).digest('hex');
const normalize=value=>String(value??'').replace(/\s+/gu,' ').trim();
const readJson=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const envPath=[`${d16}/wordpress/.env`,`${d16}/.tmp/.env.five`].find(file=>fs.existsSync(file));
assert.ok(envPath,'Missing local CMS runtime environment file');
const env=Object.fromEntries(fs.readFileSync(envPath,'utf8').split(/\r?\n/u).filter(line=>/^[A-Z_]+=/.test(line)).map(line=>[line.slice(0,line.indexOf('=')),line.slice(line.indexOf('=')+1)]));
assert.ok(env.WORDPRESS_EDITORIAL_API_TOKEN,'Missing read-only CMS token');
assert.equal(fs.readFileSync(`${d16}/.next-five-fixed/BUILD_ID`,'utf8').trim(),buildId);
fs.mkdirSync(output,{recursive:true});

const items=[
 {id:'MARKET-EU-DE',slug:'market-eu-de',path:'/markets/germany/',body:'pages/markets/germany/04_planning/MARKET-EU-DE_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md',modules:7,current:'Markets'},
 {id:'MARKET-EU-IT',slug:'market-eu-it',path:'/markets/italy/',body:'pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md',modules:7,current:'Markets'},
 {id:'PRODUCT-PROC-SU',slug:'product-proc-su',path:'/products/sulfate-process-titanium-dioxide/',body:'pages/products/sulfate-process/04_planning/PRODUCT-PROC-SU_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md',modules:5,current:'Products'},
 {id:'RES-R706',slug:'res-r706',path:'/resources/ti-pure-r-706-alternative/',body:'pages/resources/r706-alternative/04_planning/RES-R706_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md',modules:6,current:'Resources'},
 {id:'RES-CHEMOURS',slug:'res-chemours',path:'/resources/chemours-titanium-dioxide-alternatives/',body:'pages/resources/chemours-alternatives/04_planning/RES-CHEMOURS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md',modules:6,current:'Resources'},
];

async function cms(pageId,siteScope='tio2-my'){
 const response=await fetch(cmsUrl,{method:'POST',headers:{'content-type':'application/json','x-tio2-editorial-token':env.WORDPRESS_EDITORIAL_API_TOKEN},body:JSON.stringify({query:'query($pageId:String!,$siteScope:String!){malaysiaEditorialRecordJson(pageId:$pageId,siteScope:$siteScope)}',variables:{pageId,siteScope}})});
 return {status:response.status,envelope:await response.json()};
}

const browser=await chromium.launch({headless:true});
const rows=[];
try{
 for(const item of items){
  const contract=readJson(`${d16}/wordpress/plugins/tio2-site-model/config/tio2-my-editorial-${item.slug}.json`);
  const bodyBytes=fs.readFileSync(`${d23}/${item.body}`);
  assert.equal(sha(bodyBytes),contract.source.bodySha256,`${item.id} approved body hash`);
  assert.equal(contract.identity.pageId,item.id);
  assert.equal(contract.identity.path,item.path);

  const cmsResult=await cms(item.id);
  assert.equal(cmsResult.status,200);
  assert.ok(!cmsResult.envelope.errors,`${item.id} CMS errors`);
  const record=JSON.parse(cmsResult.envelope.data.malaysiaEditorialRecordJson);
  assert.equal(record.recordPageId,item.id);
  assert.equal(record.status,'publish');
  assert.deepEqual(record.siteScopes.nodes,[{slug:'tio2-my'}]);
  assert.equal(record.publishingFields.publicPath,item.path.slice(0,-1));
  assert.deepEqual(JSON.parse(record.editorialContractJson),contract);

  const page=await browser.newPage({viewport:{width:1440,height:900}});
  const consoleErrors=[]; const pageErrors=[]; const failedRequests=[]; const writes=[];
  page.on('console',message=>{if(message.type()==='error')consoleErrors.push(message.text())});
  page.on('pageerror',error=>pageErrors.push(error.message));
  page.on('requestfailed',request=>failedRequests.push({url:request.url(),reason:request.failure()?.errorText}));
  page.on('request',request=>{if(!['GET','HEAD'].includes(request.method()))writes.push({method:request.method(),url:request.url()})});
  const response=await page.goto(`${base}${item.path}?grade_id=M-996&source_page_id=probe&probe=canonical`,{waitUntil:'networkidle'});
  assert.equal(response.status(),200);
  const html=await response.text();
  assert.ok(html.includes(buildId),`${item.id} build identity absent`);
  const dom=new JSDOM(html).window.document;
  const approved=new JSDOM(`<main>${contract.bodyHtml}</main>`).window.document;
  assert.equal(normalize(dom.querySelector('main')?.textContent),normalize(approved.querySelector('main')?.textContent));
  assert.equal(dom.querySelector('[data-editorial-page]')?.getAttribute('data-editorial-page'),item.id);
  assert.equal(dom.querySelector('[data-site-scope]')?.getAttribute('data-site-scope'),'tio2-my');
  assert.equal(dom.querySelectorAll('main > section').length,item.modules);
  assert.equal(dom.title,contract.seo.title);
  assert.equal(dom.querySelector('meta[name="description"]')?.getAttribute('content'),contract.seo.metaDescription);
  assert.match(dom.querySelector('meta[name="robots"]')?.getAttribute('content')??'',/noindex.*nofollow/u);
  assert.equal(dom.documentElement.lang,'en');
  const canonical=dom.querySelector('link[rel="canonical"]')?.getAttribute('href')??null;
  assert.equal(canonical,contract.seo.canonical??null);
  const links=[...dom.querySelectorAll('main a[href]')].map(a=>({label:normalize(a.textContent),href:a.getAttribute('href')}));
  const approvedLinks=[...approved.querySelectorAll('main a[href]')].map(a=>({label:normalize(a.textContent),href:a.getAttribute('href')}));
  assert.deepEqual(links,approvedLinks);
  const graphs=[...dom.querySelectorAll('script[type="application/ld+json"]')].flatMap(script=>{const value=JSON.parse(script.textContent);return value['@graph']??[value]});
  const graphTypes=graphs.map(node=>node['@type']);
  if(item.id.startsWith('MARKET-')) assert.deepEqual(graphTypes,['WebPage','BreadcrumbList']);
  if(item.id==='PRODUCT-PROC-SU'){
   assert.deepEqual(graphTypes,['CollectionPage','BreadcrumbList','ItemList']);
   const list=graphs.find(node=>node['@type']==='ItemList');
   assert.equal(list.numberOfItems,5);
   assert.deepEqual(list.itemListElement.map(entry=>entry.position),[1,2,3,4,5]);
  }
  if(item.id.startsWith('RES-')) assert.deepEqual(graphTypes,[]);

  const viewports=[];
  for(const width of [1440,768,390]){
   await page.setViewportSize({width,height:width===390?844:900});
   await page.goto(`${base}${item.path}`,{waitUntil:'networkidle'});
   await page.evaluate(()=>document.fonts.ready);
   await page.locator('footer').scrollIntoViewIfNeeded();
   await page.evaluate(()=>scrollTo(0,0));
   const geometry=await page.evaluate(()=>({innerWidth,scrollWidth:document.documentElement.scrollWidth,scrollHeight:document.documentElement.scrollHeight,headerHeight:document.querySelector('header')?.getBoundingClientRect().height,footerVisible:!!document.querySelector('footer'),mainFont:getComputedStyle(document.querySelector('main')).fontFamily}));
   assert.ok(geometry.scrollWidth<=width+1,`${item.id} overflow ${width}`);
   assert.equal(geometry.headerHeight,width===1440?84:64);
   const actions=await page.locator('main a[class*="action"],main a[class*="button"],main .actions a').evaluateAll(nodes=>nodes.map(node=>{const r=node.getBoundingClientRect();return {text:node.textContent.trim(),width:r.width,height:r.height}}));
   for(const action of actions) assert.ok(action.height>=43.5 && action.width>=43.5,`${item.id} target under 44px: ${action.text}`);
   const focusTrace=[];
   for(const anchor of await page.locator('main a[href]').all()){
    await anchor.focus();
    const state=await anchor.evaluate(node=>{const r=node.getBoundingClientRect(),s=getComputedStyle(node);return {text:node.textContent.trim(),href:node.getAttribute('href'),focusVisible:node.matches(':focus-visible'),outlineStyle:s.outlineStyle,outlineWidth:s.outlineWidth,rect:{top:r.top,bottom:r.bottom,left:r.left,right:r.right}}});
    assert.equal(state.focusVisible,true,`${item.id} focus invisible ${state.text}`);
    assert.notEqual(state.outlineStyle,'none',`${item.id} no outline ${state.text}`);
    focusTrace.push(state);
   }
   let menu=null;
   if(width<1100){
    const trigger=page.locator('header button[aria-controls="malaysia-mobile-menu"]');
    await trigger.focus(); await page.keyboard.press('Enter');
    const nav=page.getByRole('navigation',{name:'Mobile navigation',exact:true});
    assert.equal(await nav.isVisible(),true);
    assert.equal(normalize(await nav.locator('[aria-current="page"]').textContent()),item.current);
    assert.equal(await page.getByRole('navigation',{name:'Primary navigation',exact:true}).count(),0);
    const first=nav.locator('a[href]:visible').first(),last=nav.locator('a[href]:visible').last();
    assert.equal(await first.evaluate(node=>node===document.activeElement),true);
    await page.keyboard.press('Shift+Tab'); assert.equal(await trigger.evaluate(node=>node===document.activeElement),true);
    await page.keyboard.press('Shift+Tab'); assert.equal(await last.evaluate(node=>node===document.activeElement),true);
    await page.keyboard.press('Escape'); assert.equal(await trigger.evaluate(node=>node===document.activeElement),true);
    menu={openCycleEscapeReturn:true};
   }else{
    const nav=page.getByRole('navigation',{name:'Primary navigation',exact:true});
    assert.equal(normalize(await nav.locator('[aria-current="page"]').textContent()),item.current);
   }
   const cookieButton=page.getByRole('button',{name:'Cookie Settings',exact:true});
   await cookieButton.focus(); await page.keyboard.press('Enter');
   const dialog=page.getByRole('dialog',{name:'Cookie settings',exact:true});
   assert.equal(await dialog.isVisible(),true);
   const firstCookie=dialog.locator('button,a[href]').first(),lastCookie=dialog.locator('button,a[href]').last();
   assert.equal(await firstCookie.evaluate(node=>node===document.activeElement),true);
   await page.keyboard.press('Shift+Tab'); assert.equal(await lastCookie.evaluate(node=>node===document.activeElement),true);
   await page.keyboard.press('Escape'); assert.equal(await cookieButton.evaluate(node=>node===document.activeElement),true);
   const screenshot=`${item.id}-${width}-independent-full.png`;
   await page.screenshot({path:path.join(output,screenshot),fullPage:true,animations:'disabled'});
   viewports.push({width,geometry,actionTargets:actions,focusCount:focusTrace.length,menu,cookie:{cycleEscapeReturn:true},screenshot});
  }

  const destinations=[];
  for(const href of [...new Set(links.map(link=>link.href).filter(href=>href?.startsWith('/')&&!href.startsWith('//')&&!href.startsWith('#')))]){
   const target=await fetch(base+href,{redirect:'follow'});
   const targetText=await target.text();
   const targetDom=new JSDOM(targetText).window.document;
   destinations.push({href,status:target.status,finalUrl:target.url,siteScope:targetDom.querySelector('[data-site-scope]')?.getAttribute('data-site-scope')??null,h1:normalize(targetDom.querySelector('h1')?.textContent)||null});
  }
  for(const href of [...new Set(links.map(link=>link.href).filter(href=>href?.startsWith('#')))]){
   await page.goto(base+item.path,{waitUntil:'networkidle'});
   const anchor=page.locator(`main a[href="${href}"]`).first();
   await anchor.focus(); await page.keyboard.press('Enter');
   assert.equal(await page.evaluate(()=>document.activeElement?.id),href.slice(1));
   destinations.push({href,status:200,fragmentFocus:true});
  }

  const formEntries=[];
  for(const href of [...new Set(links.map(link=>link.href).filter(href=>href?.startsWith('/request-')))]){
   await page.goto(base+item.path,{waitUntil:'networkidle'});
   const sourceAnchor=page.locator(`main a[href="${href}"]`).first();
    await sourceAnchor.click();
    await page.waitForLoadState('networkidle');
    assert.equal(new URL(page.url()).pathname.replace(/\/$/u,''),new URL(href,base).pathname.replace(/\/$/u,''));
    const fields=await page.locator('form input,form select,form textarea').evaluateAll(nodes=>nodes.map(node=>({tag:node.tagName.toLowerCase(),name:node.getAttribute('name'),type:node.getAttribute('type'),value:node.value,checked:node.checked??null})));
   formEntries.push({href,actualUrl:page.url(),h1:normalize(await page.locator('h1').first().textContent()),siteScope:await page.locator('[data-site-scope]').first().getAttribute('data-site-scope'),fields});
   await page.goBack({waitUntil:'networkidle'}); assert.equal(new URL(page.url()).pathname,item.path);
  }

  assert.deepEqual(consoleErrors,[]);
  assert.deepEqual(pageErrors,[]);
  assert.deepEqual(writes,[]);
  rows.push({pageId:item.id,path:item.path,approvedBody:{path:item.body,sha256:sha(bodyBytes),matchesContractSource:true},cms:{id:record.id,status:record.status,recordPageId:record.recordPageId,publicPath:record.publishingFields.publicPath,siteScopes:record.siteScopes.nodes.map(node=>node.slug),contractSha256:sha(record.editorialContractJson),freshnessControl:record.freshnessControl??null},runtime:{status:response.status(),buildId,renderedBodyExact:true,moduleCount:item.modules,title:dom.title,meta:contract.seo.metaDescription,canonical,robots:dom.querySelector('meta[name="robots"]')?.getAttribute('content'),schemaTypes:graphTypes,links},viewports,destinations,formEntries,consoleErrors,pageErrors,failedRequests,writes});
  await page.close();
 }
 const wrongScope=[];
 for(const item of items){
  for(const scope of ['tio2-a','tio2-b','']){
   const result=await cms(item.id,scope);
   wrongScope.push({pageId:item.id,scope:httpSafe(scope),httpStatus:result.status,rejected:!!result.envelope.errors||!result.envelope.data?.malaysiaEditorialRecordJson});
  }
 }
 const missing=await cms('MISSING-G9-PROBE');
 assert.ok(missing.envelope.errors||!missing.envelope.data?.malaysiaEditorialRecordJson);
 assert.ok(wrongScope.every(row=>row.rejected));
 const regression=[];
 for(const route of ['/','/markets/spain/','/products/','/applications/titanium-dioxide-for-coatings/','/documents/','/request-a-quote/']){
  const response=await fetch(base+route,{redirect:'follow'}); const html=await response.text(); const dom=new JSDOM(html).window.document;
  regression.push({route,status:response.status,siteScope:dom.querySelector('[data-site-scope]')?.getAttribute('data-site-scope')??null,h1:normalize(dom.querySelector('h1')?.textContent)||null});
 }
 const sitemap=await fetch(`${base}/sitemap.xml`); const sitemapXml=await sitemap.text();
 const outputJson={checkedAt:new Date().toISOString(),reviewer:'D23 Gate 9 independent read-only acceptance',candidate:{branch:'codex/de-it-su-r706-chemours-gate8',baseCommit:'84db14ee35fe118415bff8327f202ee712e7599c',implementationCommit:'3cb56f4ed3afe0e938aed4f2fe311a35c4c63f28',evidenceCommit:'fcd4992e7d12e9024c57c0fbb9538c1b927b978c',buildId,base,cmsUrl},rows,negativeReadback:{wrongScope,missingPageRejected:true},regression,sitemap:{status:sitemap.status,allFiveAbsent:items.every(item=>!sitemapXml.includes(`https://tio2malaysia.com${item.path}`))}};
 fs.writeFileSync(path.join(output,'fresh-runtime-cms-browser-readback.json'),JSON.stringify(outputJson,null,2)+'\n');
 console.log(`PASS: ${rows.length}/5 pages exact runtime/CMS/browser readback; screenshots=${rows.reduce((sum,row)=>sum+row.viewports.length,0)}; wrong-scope=${wrongScope.length}/15 rejected`);
}finally{await browser.close()}

function httpSafe(value){return value===''?'EMPTY':value}
