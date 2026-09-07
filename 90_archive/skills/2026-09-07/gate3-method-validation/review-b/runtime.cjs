const fs=require('fs'), path=require('path');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..'),out=path.join(__dirname,'evidence');
const copy=JSON.parse(fs.readFileSync(path.join(root,'copy.json'),'utf8'));
const url='file:///'+path.join(root,'specimen-b/source.html').replaceAll('\\','/');
const report={runtime: {},views:[],interactions:{}};
async function metrics(p){return p.evaluate(()=>{
 const rect=e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y+scrollY,width:r.width,height:r.height}};
 const measure=e=>({tag:e.tagName,id:e.id,text:e.textContent.trim(),...rect(e),scrollWidth:e.scrollWidth,clientWidth:e.clientWidth,scrollHeight:e.scrollHeight,clientHeight:e.clientHeight,display:getComputedStyle(e).display,overflow:getComputedStyle(e).overflow});
 return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,sections:[...document.querySelectorAll('main>section,footer')].map(measure),notes:[...document.querySelectorAll('.record-note')].map(measure),values:[...document.querySelectorAll('dd')].map(measure),privacy:measure(document.querySelector('.privacy-line')),quantity:measure(document.querySelector('#quantity')),smallTargets:[...document.querySelectorAll('a,button,input,select,textarea,summary')].filter(e=>e.getClientRects().length&&(e.getBoundingClientRect().width<44||e.getBoundingClientRect().height<44)).map(measure)};
 });}
(async()=>{
 const browser=await chromium.launch({headless:true});report.runtime={version:browser.version(),executable:chromium.executablePath(),dpr:1};
 const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
 const blocked=[];await page.route('**/*',route=>{if(route.request().url().startsWith('file:'))return route.continue();blocked.push(route.request().url());return route.abort()});
 for(const width of [1440,768,390]){
  await page.setViewportSize({width,height:900});await page.goto(url);await page.screenshot({path:path.join(out,`runtime-${width}-initial.png`),fullPage:true});
  report.views.push(await metrics(page));
 }
 report.copy=await page.evaluate(c=>{
  const norm=s=>s.replace(/\s+/g,' ').trim();
  const actual={hero:{title:document.querySelector('h1').textContent,text:document.querySelector('#overview p').textContent,cta:document.querySelector('#overview a').textContent},comparisonTitle:document.querySelector('#comparison h2').textContent,records:[...document.querySelectorAll('.record')].map(e=>({name:e.querySelector('h3').textContent,values:[...e.querySelectorAll('dd')].map(x=>x.textContent)})),metrics:[...document.querySelector('.record').querySelectorAll('dt')].map(x=>x.textContent),notes:[...document.querySelectorAll('.record-note')].map(x=>x.textContent),readingTitle:document.querySelector('#reading h2').textContent,sections:[...document.querySelectorAll('#reading article,#reading details')].map(e=>({title:e.querySelector('h3,summary').textContent,text:e.querySelector('p').textContent}))};
  const results=Object.keys(actual).map(k=>({key:k,equal:JSON.stringify(actual[k])===JSON.stringify(c[k])}));
  return {results,bodyText:document.body.textContent,formLabels:[...document.querySelectorAll('form label')].map(e=>({text:e.textContent,for:e.htmlFor})),navigation:[...document.querySelectorAll('a')].map(e=>({text:e.textContent,href:e.getAttribute('href')}))};
 },copy);
 // Real local menu actions; no candidate mutation.
 await page.locator('#menu').click();await page.screenshot({path:path.join(out,'runtime-390-menu.png')});
 const menu={afterOpen:await page.evaluate(()=>({open:document.querySelector('dialog').open,modal:document.querySelector('dialog').matches(':modal'),focus:document.activeElement.id}))};
 menu.tabs=[];for(let i=0;i<8;i++){await page.keyboard.press('Tab');menu.tabs.push(await page.evaluate(()=>({id:document.activeElement.id,tag:document.activeElement.tagName,text:document.activeElement.textContent.trim().slice(0,80),insideMenu:!!document.activeElement.closest('dialog')})))}
 await page.locator('#close-menu').focus();await page.keyboard.press('Escape');menu.afterEscape=await page.evaluate(()=>({open:document.querySelector('dialog').open,focus:document.activeElement.id}));
 if(await page.locator('dialog').isVisible())await page.locator('#close-menu').click();
 menu.afterClose=await page.evaluate(()=>({open:document.querySelector('dialog').open,focus:document.activeElement.id,expanded:document.querySelector('#menu').getAttribute('aria-expanded')}));
 report.interactions.menu=menu;
 // Native disclosure actual click, check normal-flow displacement.
 const before=await page.locator('#request').evaluate(e=>e.getBoundingClientRect().top+scrollY);
 for(const summary of await page.locator('summary').all())await summary.click();
 report.interactions.reading={beforeRequestY:before,afterRequestY:await page.locator('#request').evaluate(e=>e.getBoundingClientRect().top+scrollY),open:await page.locator('details[open]').count()};
 await page.screenshot({path:path.join(out,'runtime-390-expanded.png'),fullPage:true});
 await page.locator('#context').fill('Invented context retained on invalid submission.');
 await page.locator('#submit').click();
 report.interactions.emptyInvalid=await page.evaluate(()=>({focus:document.activeElement.id,summary:!document.querySelector('#form-summary').hidden,errors:[...document.querySelectorAll('input')].map(e=>({id:e.id,value:e.value,invalid:e.getAttribute('aria-invalid'),description:e.getAttribute('aria-describedby'),message:document.getElementById(e.id+'-error').hidden?'':document.getElementById(e.id+'-error').textContent})),context:document.querySelector('#context').value}));
 await page.screenshot({path:path.join(out,'runtime-390-invalid.png'),fullPage:true});
 await page.locator('form').screenshot({path:path.join(out,'runtime-390-invalid-form.png')});
 await page.locator('#name').fill('Example Reader');await page.locator('#email').fill('reader@example.invalid');await page.locator('#quantity').fill('0.001');await page.locator('#submit').click();
 report.interactions.positiveDecimal=await page.locator('#quantity').evaluate(e=>({value:e.value,valid:e.checkValidity(),rangeUnderflow:e.validity.rangeUnderflow,min:e.min,errorVisible:!document.querySelector('#quantity-error').hidden,focus:document.activeElement.id}));
 await page.locator('#quantity').fill('1.25');await page.locator('#record').selectOption({label:copy.records[1].name});await page.locator('#submit').click();
 report.interactions.success=await page.evaluate(()=>({text:document.querySelector('#confirmation').hidden?'':document.querySelector('#confirmation').textContent,values:[...document.querySelectorAll('input,select,textarea')].map(e=>({id:e.id,value:e.value})),summaryHidden:document.querySelector('#form-summary').hidden}));
 await page.screenshot({path:path.join(out,'runtime-390-success.png'),fullPage:true});
 await page.locator('form').screenshot({path:path.join(out,'runtime-390-success-form.png')});
 await page.locator('#record').selectOption({label:copy.form.unsure});report.interactions.resetOptional=await page.locator('#record').inputValue();
 report.blockedNetworkRequests=blocked;fs.writeFileSync(path.join(out,'runtime-observations.json'),JSON.stringify(report,null,2));
 await browser.close();console.log(JSON.stringify({runtime:report.runtime,copy:report.copy.results,views:report.views.map(v=>({width:v.width,height:v.height,scrollWidth:v.scrollWidth,smallTargets:v.smallTargets,privacy:v.privacy,quantity:v.quantity})),interactions:report.interactions},null,2));
})().catch(e=>{console.error(e);process.exitCode=1});
