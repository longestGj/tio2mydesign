const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const source=process.argv[2],out=process.argv[3];fs.mkdirSync(out,{recursive:true});
const hash=crypto.createHash('sha256').update(fs.readFileSync(source)).digest('hex');
(async()=>{const browser=await chromium.launch({headless:true});const result=[];
for(const width of [1440,768,390]){
 const ctx=await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1});const requests=[];
 await ctx.route(/^https?:/,r=>{requests.push(r.request().url());return r.abort()});
 const page=await ctx.newPage();await page.goto(pathToFileURL(source).href);await page.evaluate(()=>document.fonts.ready);
 const checks=[];const check=(name,actual,expected)=>checks.push({name,actual,expected,pass:JSON.stringify(actual)===JSON.stringify(expected)});
 check('no initial cookie dialog',await page.locator('dialog').evaluate(e=>e.open),false);
 if(width<1101){
  const menu=page.locator('.mobileNav'),toggle=page.locator('.menuButton');await toggle.click();
  check('open label',await toggle.innerText(),'Close');check('menu visible',await menu.isVisible(),true);
  check('navigation order',await menu.locator('a').allTextContents(),['Home','Markets','Products','Applications','Documents','Resources','About','Request a Quote']);
  check('current Markets',await menu.locator('[aria-current="page"]').allTextContents(),['Markets']);
  check('initial menu focus',await page.evaluate(()=>document.activeElement.textContent),'Home');
  check('background inert',await page.evaluate(()=>['main','footer','.logoLink','.headerRfq'].every(s=>document.querySelector(s).inert)),true);
  await page.locator('main a').first().evaluate(e=>e.focus());check('background cannot take focus',await page.evaluate(()=>document.activeElement.textContent),'Home');
  await menu.locator('a').last().focus();await page.keyboard.press('Tab');check('forward trap',await page.evaluate(()=>document.activeElement.className),'menuButton');
  await page.keyboard.press('Shift+Tab');check('reverse trap',await page.evaluate(()=>document.activeElement.textContent),'Request a Quote');
  await page.screenshot({path:path.join(out,`menu-${width}.png`)});
  check('menu targets >=44 both',await menu.locator('a').evaluateAll(es=>es.every(e=>{let r=e.getBoundingClientRect();return r.width>=44&&r.height>=44})),true);
  await page.keyboard.press('Escape');check('Escape closes',await menu.isVisible(),false);check('focus returns',await page.evaluate(()=>document.activeElement.className),'menuButton');
  await toggle.click();await menu.locator('a[href="/products/"]').click();check('selection closes',await menu.isVisible(),false);
  check('selection restores background',await page.evaluate(()=>!document.querySelector('main').inert&&!document.querySelector('footer').inert),true);
  check('selection target',await page.evaluate(()=>window.planningNavigation.at(-1).href),'/products/');
 }
 const bodyLinks=await page.locator('main a').evaluateAll(es=>es.map(e=>({text:e.textContent,href:e.getAttribute('href')})));
 for(let i=0;i<bodyLinks.length;i++){await page.locator('main a').nth(i).click();check(`body link ${i+1}`,await page.evaluate(()=>window.planningNavigation.at(-1).href),bodyLinks[i].href)}
 await page.locator('#cookie-trigger').click();check('cookie opens',await page.locator('dialog').evaluate(e=>e.open),true);
 check('cookie initial focus',await page.evaluate(()=>document.activeElement.textContent),'Close');
 await page.keyboard.press('Shift+Tab');check('cookie reverse loop',await page.evaluate(()=>document.activeElement.textContent),'Read Cookie Policy');
 await page.keyboard.press('Tab');check('cookie forward loop',await page.evaluate(()=>document.activeElement.textContent),'Close');
 check('cookie exact text',await page.locator('#cookie-body').innerText(),'No optional Analytics or advertising technology is currently active on this site. Necessary functions may use browser storage to operate the site and remember an available privacy setting.');
 await page.screenshot({path:path.join(out,`cookie-${width}.png`)});
 await page.keyboard.press('Escape');check('cookie escape closes',await page.locator('dialog').evaluate(e=>e.open),false);
 check('cookie escape returns focus',await page.evaluate(()=>document.activeElement.id),'cookie-trigger');
 await page.locator('#cookie-trigger').click();await page.locator('dialog button').click();check('cookie close returns focus',await page.evaluate(()=>document.activeElement.id),'cookie-trigger');
 check('no outbound requests',requests,[]);
 result.push({width,sourceSha256:hash,checks});await ctx.close();
}
await browser.close();fs.writeFileSync(path.join(out,'interaction-observations.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result.map(r=>({width:r.width,checks:r.checks.length,failures:r.checks.filter(c=>!c.pass)})),null,2));
})();
