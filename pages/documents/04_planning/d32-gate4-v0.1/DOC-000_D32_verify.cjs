// Contract verifier: detects missing content, changed actions, implicit grade defaults,
// lost validation/focus, forbidden inventory, broken disclosure and shared assembly.
const fs=require('fs'), path=require('path'), crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=__dirname, file=path.join(root,'DOC-000_D32_structure.html');
const grades=['M-350','M-510','M-896','M-996','M-2196','M-895','M-200','M-108','M-210','M-340','M-886','M-52','M-2377','CR-901'];
const results=[]; const check=(name,pass,detail)=>results.push({name,pass:!!pass,detail});
const hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
(async()=>{
 fs.mkdirSync(path.join(root,'diagnostic_support'),{recursive:true});
 check('complete editable candidate exists',fs.existsSync(file));
 if(!fs.existsSync(file)){fs.writeFileSync(path.join(root,'diagnostic_support','RED.json'),JSON.stringify({status:'EXPECTED_RED',results},null,2));console.log('EXPECTED_RED: complete editable candidate absent');process.exitCode=1;return;}
 const browser=await chromium.launch({headless:true});
 for(const width of [1440,1024,768,390,320]){
  const page=await browser.newPage({viewport:{width,height:1000}});
  await page.goto(pathToFileURL(file).href); await page.evaluate(()=>document.fonts.ready);
  check(`${width} approved SEO title`,await page.title()==='Documents for Product Qualification | TiO2 Malaysia');
  const source=fs.readFileSync(path.resolve(root,'../DOC-000_CONTENT_ARCHITECTURE_V0.10.md'),'utf8');
  const expected=[...source.matchAll(/\| `([^`]+)` \| `([^`]+)` \|/g)].flatMap(m=>[m[1],m[2]]).filter(s=>!s.includes('{GRADE}'));
  const domText=(await page.locator('main').textContent()).replace(/\s+/g,' ');
  check(`${width} complete approved table copy`,expected.every(s=>domText.includes(s)),expected.filter(s=>!domText.includes(s)));
  check(`${width} scenarios`,await page.locator('[data-scenario]').count()===3);
  check(`${width} groups`,await page.locator('[data-group]').count()===4);
  check(`${width} grade allowlist`,JSON.stringify(await page.locator('#product-grade option').evaluateAll(x=>x.slice(1).map(o=>o.value)))===JSON.stringify(grades));
  check(`${width} no default`,await page.locator('#product-grade').inputValue()==='');
  check(`${width} hero direct`,await page.locator('[data-hero-action]').getAttribute('href')==='/request-documents/');
  check(`${width} continue initially operable`,await page.locator('#continue-request').isVisible() && await page.locator('#continue-request').isEnabled());
  const initial=await page.locator('body').innerText();
  check(`${width} buyer clean`,!(/DOC-000|D32|CURRENT|PENDING|BLOCKER|Coming Soon|Download|Find Documents|Regulatory & Compliance Documentation/.test(initial)));
  check(`${width} no inventory`,await page.locator('[data-inventory],a[download],a[href$=".pdf"],[data-group] a,[data-scenario] a').count()===0);
  const before=page.url();await page.locator('#continue-request').click();
  check(`${width} empty blocks and focuses`,page.url()===before && await page.locator('#product-grade').evaluate(el=>el===document.activeElement));
  check(`${width} exact associated error`,await page.locator('#grade-error').innerText()==='Select a product grade to continue.' && (await page.locator('#product-grade').getAttribute('aria-describedby')).includes('grade-error'));
  await page.locator('#product-grade').selectOption('M-2196');
  check(`${width} selected confirmation`,await page.locator('#grade-selected').innerText()==='Selected product grade: M-2196');
  for(const grade of grades){await page.locator('#product-grade').selectOption(grade);check(`${width} grade-only ${grade}`,await page.locator('#continue-request').getAttribute('href')===`/request-documents/?product=${grade}` && await page.locator('#closing-action').getAttribute('href')===`/request-documents/?product=${grade}`);}
  await page.locator('#product-grade').selectOption('');await page.locator('#closing-action').click();
  check(`${width} closing unselected focuses`,page.url()===before && await page.locator('#product-grade').evaluate(el=>el===document.activeElement));
  check(`${width} six DOM answers`,await page.locator('.faq-answer').count()===6);
  for(let i=0;i<6;i++){const b=page.locator('.faq-question').nth(i);await b.focus();await page.keyboard.press(i%2?'Space':'Enter');check(`${width} faq ${i+1}`,await b.getAttribute('aria-expanded')==='true' && await page.locator('.faq-answer:visible').count()===1);}
  check(`${width} approved FAQ correction`,(await page.locator('#faq-answer-2').textContent()).includes('a Product Grade is required before submission.'));
  await page.locator('.faq-question').nth(5).click();
  if(width<1101){
   const menu=page.locator('.menuButton');await menu.click();check(`${width} menu current`,await page.locator('.mobileNav [aria-current="page"]').innerText()==='Documents');
   check(`${width} menu focus`,await page.locator('.mobileNav a').first().evaluate(el=>el===document.activeElement));
   check(`${width} menu background inert`,await page.locator('main').evaluate(el=>el.inert));
   await page.locator('.mobileNav a').last().focus();await page.keyboard.press('Tab');check(`${width} menu tab wraps`,await menu.evaluate(el=>el===document.activeElement));await page.keyboard.press('Shift+Tab');check(`${width} menu reverse wraps`,await page.locator('.mobileNav a').last().evaluate(el=>el===document.activeElement));
   await page.keyboard.press('Escape');check(`${width} menu escape restores`,await menu.evaluate(el=>el===document.activeElement)&&await page.locator('body').evaluate(el=>getComputedStyle(el).overflow!=='hidden'));
   await menu.click();await page.locator('.mobileNav a[href="/documents/"]').evaluate(el=>el.addEventListener('click',e=>e.preventDefault()));await page.locator('.mobileNav a[href="/documents/"]').click();check(`${width} menu link closes`,await menu.getAttribute('aria-expanded')==='false');
   await menu.click();await page.setViewportSize({width:1440,height:1000});await page.waitForFunction(()=>document.querySelector('.menuButton').getAttribute('aria-expanded')==='false');check(`${width} desktop closes menu`,await menu.getAttribute('aria-expanded')==='false'&&!await page.locator('main').evaluate(el=>el.inert));await page.setViewportSize({width,height:1000});
  }
  await page.locator('#cookie-trigger').click();check(`${width} cookie opens`,await page.locator('.cookie-layer').isVisible());await page.keyboard.press('Shift+Tab');check(`${width} cookie reverse wrap`,await page.locator('.cookie-actions a').evaluate(el=>el===document.activeElement));await page.keyboard.press('Tab');check(`${width} cookie tab wrap`,await page.locator('[data-cookie-close]').evaluate(el=>el===document.activeElement));await page.keyboard.press('Escape');check(`${width} cookie focus returns`,await page.locator('#cookie-trigger').evaluate(el=>el===document.activeElement));
  const geo=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,small:[...document.querySelectorAll('a,button,select')].filter(e=>e.checkVisibility()&&e.getBoundingClientRect().width>0).map(e=>({text:e.textContent.trim(),w:e.getBoundingClientRect().width,h:e.getBoundingClientRect().height})).filter(r=>r.w<44||r.h<44),clipped:[...document.querySelectorAll('main p,main h1,main h2,main h3,main button')].filter(e=>e.checkVisibility()&&['hidden','clip','scroll','auto'].includes(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight+2).map(e=>e.textContent)}));
  check(`${width} geometry`,!geo.overflow&&!geo.small.length&&!geo.clipped.length,geo);
  await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
  await page.screenshot({path:path.join(root,'diagnostic_support',`diagnostic-${width}.png`),fullPage:true});await page.close();
 }
 await browser.close();const report={status:results.every(r=>r.pass)?'PASS':'FAIL',mode:'AUTHOR_SELF_CHECK',evidence_type:'ACTUAL_RUNTIME',candidate_sha256:hash(file),results};
 fs.writeFileSync(path.join(root,'diagnostic_support','GREEN.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({status:report.status,checks:results.length,failed:results.filter(r=>!r.pass)},null,2));process.exitCode=report.status==='PASS'?0:1;
})().catch(e=>{console.error(e);process.exitCode=2;});
