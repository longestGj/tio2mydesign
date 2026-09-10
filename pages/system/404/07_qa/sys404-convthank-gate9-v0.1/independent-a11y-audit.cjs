const { chromium, firefox } = require('D:/16Wordpress_nextjs/.worktrees/sys404-convthank-gate8/node_modules/playwright');
const AxeBuilder = require('D:/16Wordpress_nextjs/.worktrees/sys404-convthank-gate8/node_modules/@axe-core/playwright').default;
const fs = require('node:fs');
const path = require('node:path');

const baseURL = 'http://127.0.0.1:4381';
const markerKey = 'tio2-my:thank-you:receipt:v1';
const result = {capturedAt: new Date().toISOString(), baseURL, checks: []};

(async () => {
  for (const [browserName, browserType] of [['chromium', chromium], ['firefox', firefox]]) {
    const browser = await browserType.launch({headless:true});
    try {
      for (const viewport of [{width:1440,height:900},{width:390,height:844}]) {
        const context = await browser.newContext({viewport, deviceScaleFactor:1, reducedMotion:'reduce'});
        const page = await context.newPage();
        for (const item of [
          {name:'sys404',url:'/gate9-a11y-unmatched'},
          {name:'thank-direct',url:'/thank-you/'},
          {name:'thank-quote',url:'/thank-you/?request=quote',marker:'quote'},
        ]) {
          await page.goto(`${baseURL}/thank-you/`,{waitUntil:'domcontentloaded'});
          await page.evaluate((key)=>sessionStorage.clear(),markerKey);
          if(item.marker) await page.evaluate(({key,request})=>sessionStorage.setItem(key,JSON.stringify({version:1,request,succeededAt:Date.now(),flowId:'gate9-a11y'})),{key:markerKey,request:item.marker});
          const response=await page.goto(`${baseURL}${item.url}`,{waitUntil:'networkidle'});
          const axe=await new AxeBuilder({page}).analyze();
          result.checks.push({browser:browserName,viewport,status:response?.status()??null,name:item.name,violations:axe.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.length,help:v.help})),seriousOrCritical:axe.violations.filter(v=>['serious','critical'].includes(v.impact)).length});
        }
        await context.close();
      }
    } finally { await browser.close(); }
  }
  result.completedAt=new Date().toISOString();
  fs.writeFileSync(path.join(__dirname,'independent-a11y-observation.json'),JSON.stringify(result,null,2));
})().catch(error=>{console.error(error);process.exitCode=1;});
