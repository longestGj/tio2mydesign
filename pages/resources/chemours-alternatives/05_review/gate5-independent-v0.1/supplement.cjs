const fs=require('fs'),crypto=require('crypto'),{pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root='D:/23MySec',base=root+'/pages/resources/chemours-alternatives',bundle=base+'/04_planning/gate4-v0.1';
const source=bundle+'/RES-CHEMOURS_GATE4_COMPLETE_VISUAL_V0.1.html';
const id=p=>({path:p,bytes:fs.statSync(p).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')});
(async()=>{const browser=await chromium.launch({headless:true});
if(process.argv[2]==='view'){
 const page=await browser.newPage({viewport:{width:Number(process.argv[3]),height:900},deviceScaleFactor:1});await page.goto(pathToFileURL(source).href);await page.evaluate(()=>document.fonts.ready);await page.evaluate(y=>scrollTo(0,y),Number(process.argv[4]));console.log((await page.screenshot({type:'png'})).toString('base64'));await browser.close();return;
}
const result={source:id(source),purpose:'Incremental text-range containment, desktop-nav instance clicks and provenance resolution',evidence_type:'ACTUAL_RUNTIME',widths:[],archives:['AGENTS.md','agents/gate4-complete-visual/agent.md'].map(p=>id(root+'/90_archive/project-governance/2026-09-07-gate4-gate5-handoff/'+p))};
for(const width of [1440,768,390]){
 const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});await page.goto(pathToFileURL(source).href);await page.evaluate(()=>document.fonts.ready);
 const v=await page.evaluate(()=>{
 const clipped=[];let nodes=0;const walker=document.createTreeWalker(document.querySelector('main'),NodeFilter.SHOW_TEXT);while(walker.nextNode()){const t=walker.currentNode;if(!t.textContent.trim())continue;nodes++;const range=document.createRange();range.selectNodeContents(t);for(const r of range.getClientRects()){if(r.left<-.5||r.right>innerWidth+.5)clipped.push({text:t.textContent,x:r.x,right:r.right});for(let p=t.parentElement;p&&p.tagName!=='MAIN';p=p.parentElement){const s=getComputedStyle(p),b=p.getBoundingClientRect();if(/hidden|clip/.test(s.overflowX+s.overflowY)&&(r.left<b.left-.5||r.right>b.right+.5||r.top<b.top-.5||r.bottom>b.bottom+.5))clipped.push({text:t.textContent,ancestor:p.tagName});}}}
 const leaf=[...document.querySelectorAll('main p,main h1,main h2,main h3,main li,footer p')].map(e=>({text:e.textContent.slice(0,50),fontSize:getComputedStyle(e).fontSize,lineHeight:getComputedStyle(e).lineHeight,color:getComputedStyle(e).color}));return{width:innerWidth,textNodes:nodes,clipped,leaf,briefDisplay:getComputedStyle(document.querySelector('.brief-list')).display};});
 if(width===1440){v.desktopClicks=[];for(let i=0;i<7;i++){await page.locator('.desktopNav a').nth(i).click();v.desktopClicks.push(await page.evaluate(()=>window.__navigationIntents.at(-1)));}}
 result.widths.push(v);await page.close();
}
const luminance=c=>c.match(/\d+/g).slice(0,3).map(Number).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
result.contrast=[['rgb(0,128,120)','rgb(255,255,255)'],['rgb(0,128,120)','rgb(245,248,251)'],['rgb(51,65,85)','rgb(245,248,251)'],['rgb(255,255,255)','rgb(3,27,58)']].map(([a,b])=>{const x=luminance(a),y=luminance(b);return{a,b,ratio:(Math.max(x,y)+.05)/(Math.min(x,y)+.05)};});
await browser.close();fs.writeFileSync(__dirname+'/supplement.json',JSON.stringify(result,null,2));console.log(JSON.stringify({widths:result.widths.map(v=>({width:v.width,textNodes:v.textNodes,clipped:v.clipped,briefDisplay:v.briefDisplay,desktopClicks:v.desktopClicks})),archives:result.archives,contrast:result.contrast},null,2));
})().catch(e=>{console.error(e);process.exitCode=1;});
