const fs=require('fs'),path=require('path'),crypto=require('crypto'),{pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root='D:/23MySec',dir=root+'/pages/markets/04_planning/d32-gate4-v0.1',checks=[],observations=[];
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const check=(id,pass,actual)=>checks.push({id,pass:!!pass,actual});
const rec=p=>({path:p,sha256:hash(p),bytes:fs.statSync(p).size});
(async()=>{
 const freeze=read(dir+'/freeze.json'),assets=read(dir+'/approval_core/asset-index.json'),ev=read(dir+'/evidence-index.json');
 for(const f of [...freeze.files,freeze.evidence_index])check('identity:'+path.basename(f.path),fs.existsSync(f.path)&&hash(f.path)===f.sha256&&fs.statSync(f.path).size===f.bytes,rec(f.path));
 const material=[...new Map(freeze.files.map(f=>[f.path,f])).values()].map(f=>({path:path.relative(root,f.path).replaceAll('\\','/'),sha256:hash(f.path)})).sort((a,b)=>a.path.localeCompare(b.path)).map(f=>f.path+'\0'+f.sha256+'\n').join('');
 const aggregate=crypto.createHash('sha256').update(material).digest('hex');check('bundle recomputation',aggregate==='f4fa1c2048b5da913b325f22ad8a5b0beefe9058539a52b90af2357e60e6619f',aggregate);
 check('expected HTML',hash(dir+'/market-visual.html')==='2b9ba0dac6f6988e065b4b99a9be49d5e560b96f32c5a318abfa516dd1412f3c',hash(dir+'/market-visual.html'));
 for(const a of assets.assets){const b=fs.readFileSync(a.path);check('formal:'+a.state,hash(a.path)===a.sha256&&b.length===a.bytes&&b.readUInt32BE(16)===a.physical_width&&b.readUInt32BE(20)===a.physical_height&&a.dpr===1,{width:b.readUInt32BE(16),height:b.readUInt32BE(20),dpr:a.dpr});}
 const source=fs.readFileSync(dir+'/market-visual.html','utf8'),old=fs.readFileSync(path.resolve(dir,'../d32-gate3-v0.1/market-planning.html'),'utf8');
 check('exact G3 markup except explicit stylesheet/script resolution',source.replace('href="../d32-gate3-v0.1/planning.css"','href="planning.css"').replace('<link rel="stylesheet" href="visual.css">','').replace('src="../d32-gate3-v0.1/planning.js"','src="planning.js"')===old,'Exact full-source inverse transform, includes title/body/Hero/Chrome/scripts');
 check('no superseded formal or source membership',!freeze.files.some(x=>x.path.includes('superseded'))&&!assets.assets.some(x=>x.path.includes('superseded'))&&!JSON.stringify(ev.approval_core).includes('superseded'),'Current source-lock/formal refs only');
 const superseded=dir+'/diagnostic_support/superseded-pre-hover-fix',before=fs.readFileSync(superseded+'/visual.css','utf8'),after=fs.readFileSync(dir+'/visual.css','utf8');
 check('superseded source and evidence retained',fs.existsSync(superseded+'/market-visual.html')&&fs.existsSync(superseded+'/source-lock-original.json')&&fs.existsSync(superseded+'/approval_core/asset-index.json'),rec(superseded+'/visual.css'));
 check('single hover color repair',before.replace('color:#008078;background:#eaf7f6','color:#006c66;background:#eaf7f6')===after,'Only foreground #008078 → #006c66');
 const red=read(dir+'/diagnostic_support/hover-red/runtime.json');check('RED retained',red.failed===2&&red.passed===141,{passed:red.passed,failed:red.failed,failures:red.checks.filter(x=>!x.pass)});
 for(const a of read(dir+'/diagnostic_support/readable/asset-index.json').assets){const b=fs.readFileSync(a.path);check('readable:'+a.state,hash(a.path)===a.sha256&&b.length===a.bytes&&b.readUInt32BE(16)===a.physical_width&&b.readUInt32BE(20)===a.physical_height,'Existing source-bound readable asset');}
 const diagnosticKeys=['runtime','red','readable','family'];for(const k of diagnosticKeys){const x=ev.diagnostic_support[k];check('diagnostic index:'+k,hash(x.path)===x.sha256&&fs.statSync(x.path).size===x.bytes,rec(x.path));}
 const lock=read(dir+'/source-lock.json');check('capture after lock',Date.parse(assets.timestamp)>Date.parse(lock.timestamp),{lock:lock.timestamp,capture:assets.timestamp});
 const currentInputs=read(dir+'/input-index.json').inputs.map(x=>({...x,current_sha256:hash(x.path)}));const drift=currentInputs.filter(x=>x.sha256!==x.current_sha256);check('controlling inputs unchanged',drift.every(x=>x.path.endsWith('01_PROJECT_INDEX.md')),drift);
 const browser=await chromium.launch({headless:true}),url=pathToFileURL(dir+'/market-visual.html').href;
 for(const width of [1440,1024,768,390,320]){
  const p=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});await p.goto(url);await p.evaluate(()=>document.fonts.ready);
  const data=await p.evaluate(()=>{
   const cols=s=>getComputedStyle(document.querySelector(s)).gridTemplateColumns.split(' ').length;
   const h=document.querySelector('h1'),s=getComputedStyle(h);
   const small=[...document.querySelectorAll('a,button')].filter(e=>e.checkVisibility()).filter(e=>{const r=e.getBoundingClientRect();return r.width<44||r.height<44}).map(e=>e.textContent);
   const clipped=[...document.querySelectorAll('main p,main h1,main h2,main h3,main a,main button')].filter(e=>e.checkVisibility()).filter(e=>e.scrollWidth>e.clientWidth+2||e.scrollHeight>e.clientHeight+2&&/(hidden|clip)/.test(getComputedStyle(e).overflow)).map(e=>e.textContent);
   return {width:innerWidth,dpr:devicePixelRatio,scrollWidth:document.documentElement.scrollWidth,h1Lines:Math.round(h.getBoundingClientRect().height/parseFloat(s.lineHeight)),h1Size:s.fontSize,countries:cols('#eu-countries'),rail:cols('.marketRail'),questions:cols('.questions'),small,clipped,bodyText:document.querySelector('main').textContent};
  });
  observations.push({width,geometry:data});
  check(width+':geometry',data.dpr===1&&data.scrollWidth===width&&!data.small.length&&!data.clipped.length,data);
  check(width+':final columns',data.rail===(width>=1024?3:1)&&data.questions===(width>=1024?2:1),{rail:data.rail,questions:data.questions});
  check(width+':Hero family',data.h1Lines<=3&&data.h1Size===(width>=1024?'56px':width>=768?'44px':'36px'),{lines:data.h1Lines,font:data.h1Size});
  const label=await p.locator('.rootHero .primary').textContent();await p.locator('.rootHero .primary').click();check(width+':local Hero navigation',p.url().endsWith('#destination-selector')&&label==='Choose a Market',p.url());
  if(width<768){await p.locator('#eu-toggle').focus();await p.keyboard.press('Enter');check(width+':EU keyboard expand',await p.locator('#eu-countries').isVisible()&&await p.locator('#eu-toggle').getAttribute('aria-expanded')==='true','Enter');await p.keyboard.press('Space');check(width+':EU keyboard collapse',!await p.locator('#eu-countries').isVisible(),'Space');}
  for(const selector of ['.euPanel>.textAction','#eu-toggle']){if(!await p.locator(selector).isVisible())continue;await p.locator(selector).hover();const contrast=await p.locator(selector).evaluate(e=>{const s=getComputedStyle(e),lum=c=>c.match(/[\d.]+/g).slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0),a=lum(s.color),b=lum(s.backgroundColor);return {foreground:s.color,background:s.backgroundColor,ratio:(Math.max(a,b)+.05)/(Math.min(a,b)+.05)}});check(width+':hover:'+selector,contrast.ratio>=4.5,contrast);}
  await p.close();
 }
 for(const state of ['full','none','eu-only','support-only']){
  const p=await browser.newPage({viewport:{width:320,height:1000},hasTouch:true});await p.goto(url+'?state='+state);await p.locator('#eu-toggle').tap();
  const fields=await p.evaluate(()=>({labels:[...document.querySelectorAll('#eu-countries li')].map(e=>e.textContent.trim()),destinations:[...document.querySelectorAll('#destination-selector a')].map(e=>e.getAttribute('href')),support:[...document.querySelectorAll('.supportAction')].map(e=>e.getAttribute('href')),overflow:document.documentElement.scrollWidth>innerWidth,empty:[...document.querySelectorAll('a,button')].filter(e=>e.checkVisibility()&&!e.textContent.trim()&&!e.querySelector('img')).length,rfq:document.querySelector('.headerRfq').checkVisibility()}));
  const counts={full:[10,4],none:[0,0],'eu-only':[1,0],'support-only':[0,4]}[state];
  check('simulation:'+state,fields.destinations.length===counts[0]&&fields.support.length===counts[1]&&fields.labels.join('|')==='Germany|Italy|Spain|Poland|Netherlands|Belgium'&&!fields.overflow&&!fields.empty&&fields.rfq,fields);await p.close();
 }
 await browser.close();
 fs.writeFileSync(path.join(__dirname,'audit.json'),JSON.stringify({reviewer:'/root/doc_root_d32',mode:'INDEPENDENT_REVIEW',source:hash(dir+'/market-visual.html'),bundle:aggregate,passed:checks.filter(x=>x.pass).length,failed:checks.filter(x=>!x.pass).length,checks,observations,new_screenshots:0},null,2));
 console.log(JSON.stringify({passed:checks.filter(x=>x.pass).length,failed:checks.filter(x=>!x.pass).length,failures:checks.filter(x=>!x.pass)},null,2));process.exitCode=checks.some(x=>!x.pass)?1:0;
})().catch(e=>{console.error(e);process.exitCode=2});
