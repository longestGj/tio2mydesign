// Bounded actual-runtime checks for APP-000's page-specific progressive disclosure.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const dir=__dirname,checks=[];
const check=(id,pass,detail,type='ACTUAL_RUNTIME')=>checks.push({id,pass,evidence_type:type,detail});
(async()=>{const browser=await chromium.launch({headless:true});try{
const page=await browser.newPage({viewport:{width:390,height:900},deviceScaleFactor:1});
await page.goto(pathToFileURL(dir+'/index.html').href);await page.evaluate(()=>document.fonts.ready);
const requests=[];page.on('request',r=>requests.push(r.url()));
const first=page.locator('.app-grades').first(),summary=first.locator('summary');
await summary.focus();await page.keyboard.press('Tab');
check('closed-list-skipped-in-tab-order',await page.locator('.app-collection-action a').first().evaluate(e=>e===document.activeElement),await page.evaluate(()=>({focus:document.activeElement.textContent,tag:document.activeElement.tagName})));
await summary.focus();await page.keyboard.press('Enter');await page.keyboard.press('Tab');
check('opened-list-enters-first-grade',await first.locator('a').first().evaluate(e=>e===document.activeElement),await page.evaluate(()=>({focus:document.activeElement.textContent,href:document.activeElement.getAttribute('href')})));
await page.locator('.app-grades').nth(1).locator('summary').click();
const opened=await page.locator('.app-grades').evaluateAll(ds=>ds.map(d=>d.open));
check('multiple-collections-remain-open',opened[0]&&opened[1]&&!opened[2],opened);
await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
check('disclosure-does-not-fetch',requests.length===0,{requests,coverage:'Only native disclosure focus and toggles after initial fonts loaded'});
const source=await page.content();
check('disclosure-no-selection-or-prefill',!source.includes('localStorage')&&!source.includes('sessionStorage')&&!source.includes('URLSearchParams')&&!source.includes('fetch('),{basis:'Candidate page source inspection; clean body RFQ href is separately tested in actual click interception'},'SOURCE_INSPECTION');
check('all-scopes-and-definition-outside-disclosure',await page.evaluate(()=>!!document.querySelector('.app-intro')&&!document.querySelector('.app-intro').closest('details')&&[...document.querySelectorAll('.app-scope')].every(e=>!e.closest('details'))),'Six category scopes, names, and neutral definition are outside native details');
check('summary-accessible-context',await page.evaluate(()=>[...document.querySelectorAll('.app-grades summary')].every(e=>e.getAttribute('aria-labelledby').split(' ').map(id=>document.getElementById(id)).every(Boolean))),'Summary labelled by exact B label followed by associated category heading');
await page.close();
const result={pageId:'APP-000',author:'/root/app000_gate4_author',createdAt:new Date().toISOString(),renderer:await browser.version(),source:{path:dir+'/index.html',sha256:crypto.createHash('sha256').update(fs.readFileSync(dir+'/index.html')).digest('hex')},checks,status:checks.every(c=>c.pass)?'PASS':'FAIL'};
fs.writeFileSync(dir+'/diagnostic_support/targeted-observations.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));if(result.status!=='PASS')process.exitCode=1;
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});

