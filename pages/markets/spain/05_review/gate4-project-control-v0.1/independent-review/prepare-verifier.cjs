const fs=require('fs');
const out='D:/23MySec/pages/markets/spain/05_review/gate4-project-control-v0.1/independent-review';
let s=fs.readFileSync('D:/23MySec/pages/products/chloride-process/05_review/gate4-project-control-v0.1/independent-review/verify.cjs','utf8');
s=s.replaceAll('pages/products/chloride-process','pages/markets/spain').replaceAll('PRODUCT-PROC-CL','MARKET-EU-ES').replaceAll('inv.captures','inv.assets').replaceAll('x.physicalWidth','x.pixelWidth').replaceAll('x.physicalHeight','x.pixelHeight');
s=s.replace("freezeBinding:hash(src+'/approval_core/source-freeze.json')===inv.sourceFreezeSha256", "freezeBinding:hash(src+'/approval_core/source-freeze.json')==='adcecd1548951687945eab29d13d017f47ae6777d0554aa3002d2f892eeb81a5'");
const start=s.indexOf('const b=read(base+'),end=s.indexOf('const expectedLinks=',start);
s=s.slice(0,start)+`const b=read(base+'/04_planning/MARKET-EU-ES_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md').toString().split('<!-- BUYER_COPY_START -->')[1].split('<!-- BUYER_COPY_END -->')[0];
const expected=norm(b.split('\\n').map(l=>l.replace(/^#{1,3} /,'').replace(/^- /,'').replace(/\\[([^\\]]+)\\]\\([^)]*\\)/g,'$1')).join(' '));
`+s.slice(end);
s=s.replace("selector:'.cl-hero-copy p'","selector:'.hero p'");
const imageStart=s.indexOf('await p.mouse.move(0,0);row.heroImageByteMatch='), imageEnd=s.indexOf('row.controls=',imageStart);
s=s.slice(0,imageStart)+`await p.mouse.move(0,0);row.normalRenderMatches=[];for(const asset of inv.assets.filter(a=>a.logicalViewport.width===width&&a.state==='normal')){await p.evaluate(()=>scrollTo(0,0));const shot=await p.screenshot({clip:asset.clip});row.normalRenderMatches.push({path:asset.relativePath,byteMatch:Buffer.from(shot).equals(read(asset.path))})};`+s.slice(imageEnd);
const anchorStart=s.indexOf('await ready(p);const primary='),anchorEnd=s.indexOf('await ready(p);for(const a',anchorStart);
s=s.slice(0,anchorStart)+s.slice(anchorEnd);
s=s.replaceAll('window.planningNavigation','window.__navigationIntents');
const nojsStart=s.indexOf('const nojs='),nojsEnd=s.indexOf('await p.close();',nojsStart);
s=s.slice(0,nojsStart)+`const nojs=await browser.newPage({viewport:{width,height:1000},javaScriptEnabled:false});await nojs.route('**/*',r=>/^https?:/.test(r.request().url())?r.abort():r.continue());await ready(nojs);row.noJS={copyEqual:norm(await nojs.locator('main').innerText())===expected,links:await nojs.locator('main a').evaluateAll(es=>es.map(e=>({text:e.textContent.trim(),href:e.getAttribute('href')})))};await nojs.close();`+s.slice(nojsEnd);
s=s.replace('anchor:row.anchor.next,','');
s=s.replace("box:{x:r.x,y:r.y+scrollY,w:r.width,h:r.height}","focusSurface:(()=>{let n=Number.parseFloat(s.outlineOffset)<0?e:e.parentElement;while(n&&getComputedStyle(n).backgroundColor==='rgba(0, 0, 0, 0)')n=n.parentElement;return n?getComputedStyle(n).backgroundColor:'rgb(255, 255, 255)'})(),box:{x:r.x,y:r.y+scrollY,w:r.width,h:r.height}");
s=s.replace('x.ratio=ratio(x.fg,x.bg);','{x.ratio=ratio(x.fg,x.bg);x.focusRatio=ratio(x.outline[0],x.focusSurface)};');
s=s.replace('height:1000','height:width===390?844:900');
s=s.replace("grades:[...document.querySelectorAll('.cl-grade')].map(e=>({box:box(e),name:stat(e.querySelector('h3')),summary:stat(e.querySelector('p')),link:stat(e.querySelector('a')),href:e.querySelector('a').getAttribute('href'),grid:getComputedStyle(e).gridTemplateColumns}))", "applications:[...document.querySelectorAll('.applicationGroup')].map(e=>({box:box(e),heading:stat(e.querySelector('h3')),links:[...e.querySelectorAll('a')].map(a=>({text:a.textContent,href:a.getAttribute('href'),box:box(a)}))}))");
// Add independent raw-source comparisons for the unchanged shared regions and CSS.
s=s.replace("fs.writeFileSync(out+'/identity.json'", "identity.sharedHeaderSame=g3.split('<header')[1].split('</header>')[0]===html.split('<header')[1].split('</header>')[0];identity.sharedFooterSame=g3.split('<footer')[1].split('</footer>')[0]===html.split('<footer')[1].split('</footer>')[0];identity.embeddedStylesSame=JSON.stringify([...g3.matchAll(/<style>([\\s\\S]*?)<\\/style>/g)].map(x=>x[1]))===JSON.stringify([...html.matchAll(/<style>([\\s\\S]*?)<\\/style>/g)].map(x=>x[1]));fs.writeFileSync(out+'/identity.json'");
fs.writeFileSync(out+'/verify.cjs',s);

