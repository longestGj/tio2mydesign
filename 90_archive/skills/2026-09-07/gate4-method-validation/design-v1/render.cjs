/* Offline evidence runner. Run with Node; set NODE_PATH to the supplied bundled packages. */
const {chromium}=require('playwright');
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const root=__dirname, outputs=[], observations=[];
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const question='How should I interpret the measurement condition for this reference?';
const assert=(ok,msg)=>{if(!ok)throw Error(msg)};
const lum=c=>{let a=c.match(/\d+/g).slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4});return a[0]*.2126+a[1]*.7152+a[2]*.0722};
const contrast=(a,b)=>{let x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
(async()=>{
const browser=await chromium.launch({channel:'chrome',headless:true});
const evidence={date:new Date().toISOString(),renderer:await browser.version(),playwrightVersion:require('playwright/package.json').version,node:process.version,sourceFiles:['index.html','styles.css','app.js','assets/Inter-Variable.ttf'].map(p=>({path:p,sha256:hash(path.join(root,p))})),networkRequests:[],observations,exports:outputs};
for(const width of [1440,768,390]){
 const context=await browser.newContext({viewport:{width,height:1000},deviceScaleFactor:1});
 await context.route(/^https?:/,route=>{evidence.networkRequests.push(route.request().url());route.abort()});
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(pathToFileURL(path.join(root,'index.html')).href);await page.evaluate(()=>document.fonts.ready);
 const initial=await page.evaluate(()=>({fontCheck:document.fonts.check('16px Inter'),fonts:[...document.fonts].map(f=>({family:f.family,status:f.status})),bodyFont:getComputedStyle(document.body).fontFamily,scrollWidth:document.documentElement.scrollWidth,viewport:innerWidth,tableVisible:getComputedStyle(document.querySelector('table')).display!=='none',cardsVisible:getComputedStyle(document.querySelector('.cards')).display!=='none',controls:[...document.querySelectorAll('a,button,textarea')].filter(el=>el.getBoundingClientRect().height>0).map(el=>{let r=el.getBoundingClientRect(),s=getComputedStyle(el);return {name:el.textContent.trim()||el.id,width:r.width,height:r.height,fontSize:s.fontSize,color:s.color,background:s.backgroundColor,border:s.borderColor}}),bodySize:getComputedStyle(document.body).fontSize}));
 assert(initial.fontCheck&&initial.fonts.every(f=>f.status==='loaded'),'Font not loaded');assert(initial.scrollWidth===width,'Initial overflow');assert(initial.controls.every(c=>c.width>=44&&c.height>=44),'Control target too small');
 async function capture(region,state){const filename=`${width}-${region}-${state}.png`;const el=page.locator('#'+region);await el.screenshot({path:path.join(root,'exports',filename),animations:'disabled'});const b=fs.readFileSync(path.join(root,'exports',filename));outputs.push({path:'exports/'+filename,role:'rendered visual evidence',sourceIdentity:evidence.sourceFiles,logicalViewport:{width,height:1000},physicalWidth:b.readUInt32BE(16),physicalHeight:b.readUInt32BE(20),scale:1,state,region});}
 await capture('orientation','initial');await capture('comparison','initial');await capture('request','initial');
 await page.locator('#question').fill(question);await page.locator('#question').focus();await page.keyboard.press('Tab');await page.keyboard.press('Enter');
 const error=await page.evaluate(()=>({visible:!document.querySelector('#record-error').hidden,focus:document.activeElement.id,focusVisible:document.querySelector('#record').matches(':focus-visible'),outline:getComputedStyle(document.querySelector('#record')).outline,question:document.querySelector('#question').value,errorText:document.querySelector('#record-error').textContent}));
 assert(error.visible&&error.focus==='record'&&error.focusVisible&&error.question===question,'Error contract failed');await capture('request','missing-record-focus');
 await page.keyboard.press('ArrowDown');await page.keyboard.press('ArrowDown');
 await capture('request','list-open-beta-focus');
 const optionsGeometry=await page.locator('[role=option]').evaluateAll(es=>es.map(e=>({text:e.textContent,width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height})));
 assert(optionsGeometry.every(c=>c.width>=44&&c.height>=44),'Option target too small');
 await page.keyboard.press('Enter');
 const selected=await page.evaluate(()=>({name:document.querySelector('#record-value').textContent,errorHidden:document.querySelector('#record-error').hidden,resultHidden:document.querySelector('#result').hidden,controlHeight:document.querySelector('#record').getBoundingClientRect().height,valueScrollWidth:document.querySelector('#record-value').scrollWidth,valueWidth:document.querySelector('#record-value').getBoundingClientRect().width}));
 assert(selected.name.includes('deliberately long record name')&&selected.errorHidden&&selected.resultHidden,'Selection contract failed');await capture('request','beta-selected');
 await page.keyboard.press('Tab');assert(await page.locator('#question').evaluate(e=>e===document.activeElement),'Tab should reach textarea');await page.keyboard.press('Tab');await page.keyboard.press('Enter');
 const success=await page.evaluate(()=>({visible:!document.querySelector('#result').hidden,text:document.querySelector('#result').textContent,question:document.querySelector('#question').value,name:document.querySelector('#record-value').textContent}));
 assert(success.visible&&success.question===question&&success.text.includes(selected.name),'Success contract failed');await capture('request','beta-success');
 await page.locator('#record').click();await page.locator('[data-value=gamma]').click();assert(await page.locator('#result').isHidden(),'Change must reset success');
 await page.locator('#clear').click();const clear=await page.evaluate(()=>({name:document.querySelector('#record-value').textContent,question:document.querySelector('#question').value,errorHidden:document.querySelector('#record-error').hidden,resultHidden:document.querySelector('#result').hidden,summary:document.querySelector('#selected-name').textContent}));
 assert(clear.name==='Choose a reference record'&&clear.question===question&&clear.errorHidden&&clear.resultHidden&&clear.summary==='','Clear contract failed');
 await page.locator('#record').click();await page.locator('[data-value=alpha]').click();await page.locator('#question').fill('');await page.getByRole('button',{name:'Preview request',exact:true}).click();assert(await page.locator('#result').isVisible(),'Textarea must be optional');
 const computed=await page.evaluate(()=>{const s=x=>getComputedStyle(document.querySelector(x));return {body:[s('body').color,s('body').backgroundColor],heading:[s('h1').color,s('body').backgroundColor],primary:[s('.primary').color,s('.primary').backgroundColor],secondary:[s('.secondary').color,s('.secondary').backgroundColor],controlBoundary:[s('#record').borderColor,s('#record').backgroundColor],controlBoundarySoft:[s('#record').borderColor,s('#request').backgroundColor],tableHeader:[s('thead th').color,s('thead th').backgroundColor],bodySoft:[s('body').color,s('#request').backgroundColor],error:[s('#record-error').color,s('#record-error').backgroundColor],focus:[s('#record').borderColor,s('#request').backgroundColor]}});
 const contrastResults=Object.entries(computed).map(([pair,[a,b]])=>({pair,foreground:a,background:b,ratio:+contrast(a,b).toFixed(3),threshold:['controlBoundary','controlBoundarySoft','focus'].includes(pair)?3:4.5}));assert(contrastResults.every(x=>x.ratio>=x.threshold),'Contrast failed');
 await page.goto(pathToFileURL(path.join(root,'index.html')).href+'?media=absent');await page.evaluate(()=>document.fonts.ready);await capture('orientation','media-absent');
 const absent=await page.evaluate(()=>({illustrationVisible:getComputedStyle(document.querySelector('#illustration')).display!=='none',copyWidth:document.querySelector('.orientation-copy').getBoundingClientRect().width,sectionInnerWidth:document.querySelector('#orientation').clientWidth-parseFloat(getComputedStyle(document.querySelector('#orientation')).paddingLeft)-parseFloat(getComputedStyle(document.querySelector('#orientation')).paddingRight),actions:[...document.querySelectorAll('#orientation a')].map(e=>e.textContent),scrollWidth:document.documentElement.scrollWidth}));
 assert(!absent.illustrationVisible&&Math.abs(absent.copyWidth-absent.sectionInnerWidth)<1&&absent.scrollWidth===width,'Absent geometry failed');
 observations.push({width,initial,error,optionsGeometry,selected,success,clear,optionalTextareaSuccess:true,selectionChangeClearsSuccess:true,absent,contrastResults,errors});await context.close();
}
await browser.close();fs.writeFileSync(path.join(root,'evidence','runtime.json'),JSON.stringify(evidence,null,2));console.log(JSON.stringify({captures:outputs.length,widths:observations.map(x=>x.width),networkRequests:evidence.networkRequests,output:'evidence/runtime.json'},null,2));
})().catch(e=>{console.error(e);process.exitCode=1});
