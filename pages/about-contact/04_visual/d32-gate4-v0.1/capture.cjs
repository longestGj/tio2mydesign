const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out=__dirname,formal=process.argv.includes('--formal'),hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
(async()=>{
 if(formal){const lock=JSON.parse(fs.readFileSync(path.join(out,'source-lock.json'),'utf8'));for(const e of [...lock.sources,...lock.dependencies])if(hash(e.path)!==e.sha256)throw Error('Source lock mismatch '+e.path);}
 const folder=path.join(out,formal?'formal':'diagnostic/visual');fs.mkdirSync(folder,{recursive:true});
 const browser=await chromium.launch(),page=await browser.newPage({deviceScaleFactor:1}),uri=require('url').pathToFileURL(path.join(out,'ABOUT-001_D32_GATE4.html')).href,records=[];
 async function ready(){await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));}
 async function shot(name,options={},state='default'){await ready();const file=path.join(folder,name+'.png');await page.screenshot({path:file,...options});records.push({file,state,viewport:page.viewportSize(),dpr:await page.evaluate(()=>devicePixelRatio),browser:browser.version(),evidenceType:/partial|restricted/.test(state)?'LOCAL_SIMULATION':'STATIC_VISUAL',runtimeCapture:'ACTUAL_RUNTIME'});}
 for(const width of [1440,1024,768,390,320]){
  await page.setViewportSize({width,height:960});await page.goto(uri);await ready();await page.mouse.move(0,0);await page.evaluate(()=>document.activeElement.blur());
  if(formal)await shot('ABOUT-001_D32_GATE4_FULL_'+width,{fullPage:true});
  else if([1024,768,320].includes(width)){
   for(const sel of ['.about-hero','#who','#why','#what','#markets','#applications','#how','#documentation','#company','#final','.footer']){
    const el=page.locator(sel);await el.scrollIntoViewIfNeeded();await ready();await el.screenshot({path:path.join(folder,width+'-'+sel.replace(/[.#]/g,'')+'.png')});
   }
  }
  if(formal&&width<=1100){await page.evaluate(()=>scrollTo(0,0));await page.locator('.menuButton').click();await shot('ABOUT-001_D32_GATE4_MENU_'+width,{},'menu');await page.keyboard.press('Escape');}
  if(formal&&[1440,390,320].includes(width)){await page.locator('#cookie-trigger').click();await shot('ABOUT-001_D32_GATE4_COOKIE_'+width,{},'cookie');await page.keyboard.press('Escape');}
 }
 if(formal){await page.setViewportSize({width:390,height:960});for(const state of ['partial','restricted']){await page.goto(uri+'?evidence='+state);await shot('ABOUT-001_D32_GATE4_'+state.toUpperCase()+'_390',{fullPage:true},state);}await page.goto(uri);await page.locator('.about-button').first().focus();await shot('ABOUT-001_D32_GATE4_FOCUS_390',{},'keyboard-focus');}
 fs.writeFileSync(path.join(folder,'capture-records.json'),JSON.stringify({condition:'fonts.ready + two requestAnimationFrame; no arbitrary sleep',records},null,2));await browser.close();console.log(JSON.stringify({formal,images:records.length,folder}));
})().catch(e=>{console.error(e);process.exitCode=1});
