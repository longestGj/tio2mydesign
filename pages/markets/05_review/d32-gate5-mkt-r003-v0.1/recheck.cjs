// Reviewer-owned read-only candidate probe. Output stays in reviewer directory.
const fs=require('fs'),path=require('path'),crypto=require('crypto'),{pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root='D:/23MySec',dir=path.join(root,'pages/markets/04_planning/d32-gate4-v0.3'),prior=path.join(root,'pages/markets/04_planning/d32-gate4-v0.2/market-visual.html');
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),j=p=>JSON.parse(fs.readFileSync(p)),checks=[],measurements=[];
const check=(id,pass,actual)=>checks.push({id,pass,actual});
const expected=['/markets/european-union/','/markets/germany/','/markets/italy/','/markets/spain/','/markets/poland/','/markets/netherlands/','/markets/belgium/','/markets/united-kingdom/','/markets/india/','/markets/brazil/','/pt-br/markets/brazil/'];
const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b),freeze=j(path.join(dir,'freeze.json'));
for(const x of [...freeze.files,freeze.evidence_index])check('identity:'+x.path,fs.statSync(x.path).size===x.bytes&&hash(x.path)===x.sha256);
const aggregate=crypto.createHash('sha256').update(freeze.files.map(x=>({p:path.relative(root,x.path).replaceAll('\\','/'),h:x.sha256})).sort((a,b)=>a.p.localeCompare(b.p)).map(x=>x.p+'\0'+x.h+'\n').join('')).digest('hex');
check('aggregate',aggregate==='8cc62dc48563c1564519951cb9db87771692f677e8ad66582c32e4a7f9e0121e',aggregate);
const assets=j(path.join(dir,'approval_core/asset-index.json')).assets;
for(const x of assets){const b=fs.readFileSync(x.path);check('asset:'+x.state,hash(x.path)===x.sha256&&b.length===x.bytes&&b.readUInt32BE(16)===x.physical_width&&b.readUInt32BE(20)===x.physical_height&&x.source_sha256===freeze.source_identity);}
async function snapshot(p){return p.evaluate(()=>{const r=e=>{const x=e.getBoundingClientRect();return{x:x.x,y:x.y,w:x.width,h:x.height,right:x.right,bottom:x.bottom}},pt=document.querySelector('a[href="/pt-br/markets/brazil/"]'),en=document.querySelector('a[href="/markets/brazil/"]'),graph=document.querySelector('#market-destination-graph'),m=document.querySelector('main').cloneNode(true);m.querySelectorAll('script,.languageAction').forEach(e=>e.remove());const h=document.querySelector('.rootHero'),e=h.querySelector('.eyebrow');let range=document.createRange();if(pt)range.selectNodeContents(pt);return{pt:pt?{text:pt.textContent,lang:pt.lang,rect:r(pt),textRects:[...range.getClientRects()].map(x=>({x:x.x,y:x.y,right:x.right,bottom:x.bottom})),style:{size:getComputedStyle(pt).fontSize,weight:getComputedStyle(pt).fontWeight,wrap:getComputedStyle(pt).overflowWrap,whiteSpace:getComputedStyle(pt).whiteSpace,decoration:getComputedStyle(pt).textDecorationLine,color:getComputedStyle(pt).color},card:r(pt.closest('article')),heading:pt.closest('article').querySelector('h3').textContent,enRect:r(en),sameCard:pt.closest('article')===en.closest('article')}:null,urls:[...document.querySelectorAll('[data-ready-action="market"]')].map(e=>e.getAttribute('href')),graph:graph?JSON.parse(graph.textContent):null,hubLang:document.documentElement.lang,hreflang:document.querySelectorAll('[hreflang]').length,overflow:document.documentElement.scrollWidth>innerWidth,hero:{w:r(h).w,h:r(h).h,text:h.innerText,eyebrowSize:getComputedStyle(e).fontSize},body:m.textContent.replace(/\s+/g,' ').trim(),chrome:document.querySelector('.header').outerHTML+document.querySelector('.footer').outerHTML,sections:[...document.querySelectorAll('main [data-module]')].map(e=>({id:e.dataset.module,w:r(e).w,h:r(e).h})),ptResidual:document.querySelector('main').textContent.includes('Português')};});}
(async()=>{const b=await chromium.launch(),p=await b.newPage({deviceScaleFactor:1}),old=await b.newPage({deviceScaleFactor:1});
async function load(page,file,w,q=''){await page.setViewportSize({width:w,height:1000});await page.goto(pathToFileURL(file).href+q);await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));}
for(const w of [320,340,341,374,375,390,768,1024,1440]){
 await load(p,path.join(dir,'market-visual.html'),w);await load(old,prior,w);const d=await snapshot(p),o=await snapshot(old),a=d.pt;
 check(w+':Brazil-context',a?.text==='Português'&&a.lang==='pt-BR'&&a.heading==='Brazil'&&a.sameCard&&a.rect.y>=a.enRect.bottom,a);
 check(w+':exact-order',eq(d.urls,expected),d.urls);
 check(w+':graph-parity',eq(d.graph.itemListElement.map(x=>new URL(x.url).pathname),expected)&&d.graph.itemListElement.every((x,i)=>x.position===i+1),d.graph);
 check(w+':Hub-language',d.hubLang==='en'&&d.hreflang===0);
 check(w+':44px-and-text-box',a.rect.w>=44&&a.rect.h>=44&&a.rect.x>=0&&a.rect.right<=w&&a.textRects.every(x=>x.x>=a.rect.x-.1&&x.right<=a.rect.right+.1&&x.y>=a.rect.y-.1&&x.bottom<=a.rect.bottom+.1),a.rect);
 check(w+':card-fit-wrap',a.rect.bottom<=a.card.bottom&&a.rect.right<=a.card.right&&a.style.wrap==='anywhere'&&a.style.whiteSpace!=='nowrap'&&a.style.decoration.includes('underline')&&!d.overflow,a.style);
 check(w+':copy-inherited',d.body===o.body);
 check(w+':Chrome-inherited',d.chrome===o.chrome);
 check(w+':Hero-inherited',eq(d.hero,o.hero),d.hero);
 check(w+':adjacent-layout',d.sections.every((x,i)=>x.w===o.sections[i].w&&(x.id==='DESTINATION_SELECTOR'||x.h===o.sections[i].h)),d.sections);
 await p.locator('a[href="/markets/brazil/"]').focus();await p.keyboard.press('Tab');
 check(w+':keyboard-order',await p.locator('.languageAction').evaluate(e=>e===document.activeElement));
 check(w+':focus-visible-hitbox',await p.locator('.languageAction').evaluate(e=>{const r=e.getBoundingClientRect();return parseFloat(getComputedStyle(e).outlineWidth)>=3&&document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)===e;}));
 await p.evaluate(()=>{window.__reviewClick=null;document.addEventListener('click',e=>{if(e.target.closest('.languageAction')){window.__reviewClick={href:e.target.closest('a').getAttribute('href'),trusted:e.isTrusted};e.preventDefault();}},{once:true,capture:true});});await p.keyboard.press('Enter');
 const route=await p.evaluate(()=>window.__reviewClick);check(w+':Enter-native-route-intent',route?.href===expected[10]&&route.trusted,route);
 for(const [q,urls] of [['?state=none',[]],['?state=eu-only',[expected[0]]],['?state=support-only',[]],['?pt=unavailable',expected.slice(0,10)]]){await load(p,path.join(dir,'market-visual.html'),w,q);const z=await snapshot(p),g=z.graph?.itemListElement.map(x=>new URL(x.url).pathname)||[];check(w+q+':conditional-parity',eq(z.urls,urls)&&eq(g,urls)&&!z.pt&&!z.ptResidual&&!z.overflow,{urls:z.urls,graph:g,overflow:z.overflow});}
 measurements.push({width:w,pt:a,hero:d.hero,route});
}
const no=await b.newPage({javaScriptEnabled:false,viewport:{width:390,height:1000}});await no.goto(pathToFileURL(path.join(dir,'market-visual.html')).href);const n=await snapshot(no);check('noJS:full-parity',n.pt?.text==='Português'&&eq(n.urls,expected)&&eq(n.graph.itemListElement.map(x=>new URL(x.url).pathname),expected));
for(const x of [...freeze.files,freeze.evidence_index])check('post-read-identity:'+x.path,hash(x.path)===x.sha256);
const result={review_id:'MARKET000-D32-G45-TARGETED-RECHECK-MKT-R003-20260921-01',time:new Date().toISOString(),renderer:await b.version(),dpr:1,viewportHeight:1000,source:freeze.source_identity,bundle:aggregate,freeze_sha256:hash(path.join(dir,'freeze.json')),passed:checks.filter(x=>x.pass).length,failed:checks.filter(x=>!x.pass).length,checks,measurements,types:['SOURCE_INSPECTION','ACTUAL_RUNTIME_LOCAL_PROTOTYPE','LOCAL_SIMULATION'],navigation:'Trusted keyboard click observed; default prevented by reviewer to avoid leaving local candidate. No real HTTP destination proof.'};
fs.writeFileSync(path.join(__dirname,'observations.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({passed:result.passed,failed:result.failed,freeze_sha256:result.freeze_sha256,failures:checks.filter(x=>!x.pass)}));await b.close();process.exitCode=result.failed?1:0;
})();
