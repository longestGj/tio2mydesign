const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=__dirname, sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
(async()=>{const browser=await chromium.launch({headless:true});
for(const sample of (process.argv.length>2?process.argv.slice(2):['specimen-a','specimen-b'])){
 const dir=path.join(root,sample), source=path.join(dir,'source.html');const assets=[];const metrics=[];
 for(const width of [1440,768,390]){
  const context=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1});const page=await context.newPage();await page.goto('file:///'+source.replaceAll('\\','/'));await page.evaluate(()=>document.fonts.ready);
  const save=async state=>{const file=path.join(dir,`${width}-${state}.png`);await page.screenshot({path:file,fullPage:state!=='menu'});assets.push({path:path.basename(file),logicalWidth:width,dpr:1,state,bytes:fs.statSync(file).size,sha256:sha(file),sourceSha256:sha(source)});};
  await save('initial');metrics.push({width,...await page.evaluate(()=>({client:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth,noteVisible:[...document.querySelectorAll('.record-note')].map(e=>getComputedStyle(e).display!=='none'),privacy:{client:document.querySelector('.privacy-line').clientHeight,scroll:document.querySelector('.privacy-line').scrollHeight},quantity:{width:document.querySelector('#quantity').getBoundingClientRect().width,height:document.querySelector('#quantity').getBoundingClientRect().height},dd:[...document.querySelectorAll('dd')].map(e=>({text:e.textContent,client:e.clientWidth,scroll:e.scrollWidth}))}))});
  if(width===390){await page.locator('details').evaluateAll(es=>es.forEach(e=>e.open=true));await save('expanded');await page.locator('#submit').click();await save('invalid');metrics.push({state:'invalid',focus:await page.evaluate(()=>document.activeElement.id)});await page.locator('#name').fill('Example Person');await page.locator('#email').fill('example@example.invalid');await page.locator('#quantity').fill('0.5');await page.locator('#submit').click();await save('success');await page.evaluate(()=>scrollTo(0,0));await page.locator('#menu').click();await save('menu');metrics.push({state:'menu',modal:await page.locator('dialog').evaluate(e=>e.matches(':modal')),focus:await page.evaluate(()=>document.activeElement.id)});}
  await context.close();
 }
 fs.writeFileSync(path.join(dir,'assets.json'),JSON.stringify({sourceSha256:sha(source),assets},null,2));fs.writeFileSync(path.join(root,`${sample}-measurements.json`),JSON.stringify(metrics,null,2));
}
await browser.close();})().catch(e=>{console.error(e);process.exit(1)});
