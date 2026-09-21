const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
if(fs.existsSync(path.join(__dirname,'freeze.json')))throw Error('Frozen bundle: use finalize.cjs --verify');
const checks=[];const check=(name,pass,detail)=>checks.push({name,pass,detail});
const luminance=h=>{const a=h.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);return a[0]*.2126+a[1]*.7152+a[2]*.0722;};
const ratio=(a,b)=>{const x=luminance(a),y=luminance(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
(async()=>{const b=await chromium.launch({headless:true});try{const p=await b.newPage({viewport:{width:390,height:1000},reducedMotion:'reduce'});await p.goto(pathToFileURL(path.join(__dirname,'application-visual.html')).href);
 await p.keyboard.press('Tab');await p.locator('.actions .primary').focus();await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));check('primary focus ring contrasts with white surrounding surface',await p.locator('.actions .primary').evaluate(e=>e.matches(':focus-visible')&&getComputedStyle(e).outlineColor==='rgb(0, 128, 120)'));
 for(const pair of [['008078','ffffff'],['006c66','eaf7f6'],['334155','f5f8fb'],['062b5b','ffffff']])check('text contrast '+pair.join('/'),ratio(...pair)>=4.5,ratio(...pair));
 await p.locator('.heroLinks a').first().hover();await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));check('actual navigation hover darker teal',await p.locator('.heroLinks a').first().evaluate(e=>getComputedStyle(e).color)==='rgb(0, 108, 102)');
 for(let i=0;i<6;i++){await p.locator('.heroLinks a').nth(i).click();const href=await p.locator('.heroLinks a').nth(i).getAttribute('href');check('real anchor '+href,await p.evaluate(h=>location.hash===h&&document.querySelector(h).getBoundingClientRect().top>=0,href));}
 await p.locator('.menuButton').click();await p.locator('.mobileNav a').first().evaluate(e=>e.addEventListener('click',x=>x.preventDefault()));await p.locator('.mobileNav a').first().click();check('menu destination click closes',await p.locator('.mobileNav').isHidden());
 await p.locator('.menuButton').click();await p.setViewportSize({width:1440,height:1000});await p.waitForFunction(()=>document.querySelector('.mobileNav').hidden);check('menu desktop resize closes',await p.locator('.mobileNav').isHidden());
 check('Applications current shared nav',await p.locator('.desktopNav [aria-current="page"]').textContent()==='Applications');
 const failed=checks.filter(x=>!x.pass);const result={status:failed.length?'FAIL':'PASS',tested_at:new Date().toISOString(),browser:b.version(),source_sha256:crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname,'visual.css'))).digest('hex'),checks,failed};fs.writeFileSync(path.join(__dirname,'supplemental-observations.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({status:result.status,checks:checks.length,failed},null,2));if(failed.length)process.exitCode=1;
 }finally{await b.close();}})().catch(e=>{console.error(e);process.exit(1)});
