const fs=require('fs');const out=__dirname;
let s=fs.readFileSync('D:/23MySec/pages/markets/spain/05_review/gate4-project-control-v0.1/independent-review/verify.cjs','utf8').replaceAll('pages/markets/spain','pages/documents/certificate-of-origin').replaceAll('MARKET-EU-ES','DOC-COO').replaceAll('adcecd1548951687945eab29d13d017f47ae6777d0554aa3002d2f892eeb81a5','72930df71f1ae647cdad0191f18aae1238e616657497116d0ab77c28244ff46d');
const bStart=s.indexOf("const b=read(base+"),bEnd=s.indexOf('const lum=',bStart);
s=s.slice(0,bStart)+`const b=read(base+'/04_planning/DOC-COO_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md').toString().replace(/<!--[\\s\\S]*?-->/g,'').trim();
const plain=t=>norm(t.replace(/\\[([^\\]]+)\\]\\([^)]*\\)/g,'$1').replace(/\\*\\*/g,''));
const expected={headings:b.split('\\n').filter(l=>/^#{1,2} /.test(l)).map(l=>plain(l.replace(/^#+ /,''))),paragraphs:b.split(/\\r?\\n\\s*\\r?\\n/).filter(l=>!/^#|^\\||^\\d+\\.|^- |^\\[Home\\]/.test(l)).map(plain),list:b.split('\\n').filter(l=>/^(?:\\d+\\.|-) /.test(l)).map(l=>plain(l.replace(/^(?:\\d+\\.|-) /,''))),table:b.split('\\n').filter(l=>l.startsWith('|')&&!/^\\|---/.test(l)).map(l=>l.split('|').slice(1,-1).map(plain)),links:[...b.matchAll(/\\[([^\\]]+)\\]\\(([^)]*)\\)/g)].map(x=>({text:x[1],href:x[2]}))};
async function copy(p){const actual=await p.evaluate(()=>{const n=t=>t.replace(/\\s+/g,' ').trim(),arr=s=>[...document.querySelectorAll(s)].map(e=>n(e.textContent));return{headings:arr('main h1,main h2'),paragraphs:arr('main p'),list:arr('main li'),table:[...document.querySelectorAll('.evidenceTable tr')].map(tr=>[...tr.children].map(td=>{const c=td.cloneNode(true);c.querySelectorAll('.cellLabel').forEach(l=>l.remove());return n(c.textContent)})),links:[...document.querySelectorAll('main a')].map(e=>({text:n(e.textContent),href:e.getAttribute('href')}))}});return{actual,expected,matches:Object.fromEntries(Object.keys(expected).map(k=>[k,JSON.stringify(expected[k])===JSON.stringify(actual[k])]))}}
`+s.slice(bEnd);
const copyStart=s.indexOf('const row={width};row.copy='),copyEnd=s.indexOf('row.normal=',copyStart);
s=s.slice(0,copyStart)+'const row={width};row.copy=await copy(p);\n'+s.slice(copyEnd);
const noStart=s.indexOf('row.noJS={'),noEnd=s.indexOf('await nojs.close();',noStart);
s=s.slice(0,noStart)+'row.noJS=await copy(nojs);'+s.slice(noEnd);
s=s.replace('copy:row.copy.equal,links:row.copy.linksEqual','copy:row.copy.matches').replace('nojs:row.noJS.copyEqual','nojs:row.noJS.matches');
s=s.replace("box:{x:r.x,y:r.y+scrollY,w:r.width,h:r.height}","rects:[...e.getClientRects()].map(q=>({x:q.x,y:q.y+scrollY,w:q.width,h:q.height})),box:{x:r.x,y:r.y+scrollY,w:r.width,h:r.height}");
// Reproduce the state present in mislabelled footer exports separately; normal is still checked first.
s=s.replace('row.controls=await states',`row.footerFocusRender=null;await p.locator('#cookie-trigger').focus();await p.keyboard.press('Shift+Tab');await p.keyboard.press('Tab');const fa=inv.assets.find(a=>a.logicalViewport.width===width&&a.region==='footer');await p.evaluate(()=>scrollTo(0,0));row.footerFocusRender={matches:Buffer.from(await p.screenshot({clip:fa.clip,fullPage:true})).equals(read(fa.path)),active:await active(p)};row.controls=await states`);
fs.writeFileSync(out+'/verify.cjs',s);
