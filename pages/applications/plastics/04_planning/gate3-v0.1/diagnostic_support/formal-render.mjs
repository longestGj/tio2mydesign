import fs from 'node:fs';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {PNG}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pngjs');
const out='D:/23MySec/pages/applications/plastics/04_planning/gate3-v0.1';
const core=`${out}/approval_core`;
const source=`${out}/APP-PLAS_GATE3_WIREFRAME_V0.1.html`;
const freeze=JSON.parse(fs.readFileSync(`${out}/freeze-record.json`,'utf8'));
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
async function captureFull(page,file,width,height,viewportHeight){const canvas=new PNG({width,height});const positions=[];for(let y=0;y<height;y+=viewportHeight)positions.push(Math.min(y,Math.max(0,height-viewportHeight)));for(const y of [...new Set(positions)]){await page.evaluate(v=>scrollTo(0,v),y);const shot=PNG.sync.read(await page.screenshot({fullPage:false}));PNG.bitblt(shot,canvas,0,0,width,Math.min(shot.height,height-y),0,y)}fs.writeFileSync(file,PNG.sync.write(canvas));await page.evaluate(()=>scrollTo(0,0));return canvas}
if(freeze.source.sha256!==sha(source))throw new Error('Frozen source changed');
fs.mkdirSync(core,{recursive:true});
const browser=await chromium.launch({headless:true,args:['--disable-gpu']});
for(const vp of [{name:'1440',width:1440,height:1000},{name:'768',width:768,height:1000},{name:'390',width:390,height:844}]){
  const page=await browser.newPage({viewport:{width:vp.width,height:vp.height},deviceScaleFactor:1});
  await page.goto(pathToFileURL(source).href,{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
  const height=await page.evaluate(()=>document.documentElement.scrollHeight);await captureFull(page,`${core}/APP-PLAS_G3_${vp.name}-full.png`,vp.width,height,vp.height);
  await page.close();
}
for(const width of [768,390]){
  const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
  await page.goto(pathToFileURL(source).href,{waitUntil:'load'});await page.click('.menuButton');
  await page.screenshot({path:`${core}/APP-PLAS_G3_${width}-menu.png`,fullPage:false});await page.close();
}
const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
await page.goto(pathToFileURL(source).href,{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
const box=await page.evaluate(()=>{const a=document.querySelector('.module-plas-10').getBoundingClientRect();const b=document.querySelector('.module-plas-11').getBoundingClientRect();return {x:0,y:Math.floor(a.top+scrollY),width:390,height:Math.ceil(b.bottom-a.top)}});
const fullPath=`${core}/APP-PLAS_G3_390-full.png`;const full=PNG.sync.read(fs.readFileSync(fullPath));const crop=new PNG({width:box.width,height:box.height});PNG.bitblt(full,crop,box.x,box.y,box.width,box.height,0,0);fs.writeFileSync(`${core}/APP-PLAS_G3_390-grade-paths.png`,PNG.sync.write(crop));await page.close();
await browser.close();
const files=fs.readdirSync(core).filter(x=>x.endsWith('.png')).sort().map(name=>{const p=`${core}/${name}`;return {path:p,bytes:fs.statSync(p).size,sha256:sha(p)}});
fs.writeFileSync(`${out}/asset-inventory.json`,`${JSON.stringify({pageId:'APP-PLAS',freezeId:freeze.freezeId,generatedAt:new Date().toISOString(),source:freeze.source,approvalCore:files,diagnosticSupport:`${out}/diagnostic_support`},null,2)}\n`);
console.log(JSON.stringify({source:freeze.source,formalAssets:files},null,2));
