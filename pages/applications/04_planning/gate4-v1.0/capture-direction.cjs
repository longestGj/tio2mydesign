const fs=require('fs'),path=require('path');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const out=path.join(__dirname,'direction_evidence');fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({headless:true});
 for(const spec of [{width:1440,height:1200,name:'APP-000_G4_direction_1440_V1.0.png'},{width:390,height:1800,name:'APP-000_G4_direction_390_expanded_V1.0.png'}]){
  const page=await browser.newPage({viewport:{width:spec.width,height:spec.height},deviceScaleFactor:1,reducedMotion:'reduce'});
  await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
  await page.evaluate(()=>document.fonts.ready);
  if(spec.width===390)for(const d of await page.locator('.app-grades').all())await d.evaluate(e=>e.open=true);
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:path.join(out,spec.name),fullPage:false});
  await page.close();
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exitCode=1});
