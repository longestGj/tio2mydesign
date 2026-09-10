const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const source = 'D:/23MySec/pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_COMPLETE_VISUAL_V0.1.html';
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const failures = [];
let checks = 0;
const check = (ok, id, detail) => { checks++; if (!ok) failures.push({id, detail}); };
(async()=>{
  check(fs.statSync(source).size === 28199 && sha(source) === 'ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615', 'source-identity', sha(source));
  const browser = await chromium.launch({headless:true});
  for (const width of [1440,768,390]) {
    const page = await browser.newPage({viewport:{width,height:width===390?844:900},deviceScaleFactor:1,reducedMotion:'reduce'});
    const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
    await page.route(/^https?:\/\//,r=>r.abort());
    await page.goto(pathToFileURL(source).href,{waitUntil:'load'});
    await page.evaluate(()=>document.fonts.ready);
    const x=await page.evaluate(()=>{const controls=[...document.querySelectorAll('a,button')].filter(el=>{const s=getComputedStyle(el),r=el.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0});return{height:document.documentElement.scrollHeight,scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,modules:[...document.querySelectorAll('main>section')].map(n=>n.dataset.module),links:document.querySelectorAll('main a').length,below44:controls.filter(el=>{const r=el.getBoundingClientRect();return r.width<44||r.height<44}).length,coo:/Certificate of Origin is available upon request\. Availability on request does not promise that a certificate is issued for every shipment or determine customs acceptance or treatment\./.test(document.querySelector('[data-module="IT-04"]').innerText.replace(/\s+/g,' '))}});
    check(x.height===({1440:5050,768:6114,390:7698})[width]&&x.scrollWidth===x.clientWidth,`${width}-extent`,x);
    check(JSON.stringify(x.modules)===JSON.stringify(['IT-01','IT-02','IT-03','IT-04','IT-05','IT-06','IT-07'])&&x.links===19&&x.below44===0&&x.coo,`${width}-content`,x);
    check(errors.length===0,`${width}-errors`,errors);
    await page.close();
  }
  await browser.close();
  console.log(JSON.stringify({checks,passed:checks-failures.length,failed:failures.length,failures},null,2));
  if(failures.length)process.exit(1);
})().catch(e=>{console.error(e);process.exit(1)});
