// Offline planning assembly. Writes only this page's Gate 3 directory.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec',out=__dirname.replaceAll('\\','/'),id='PRODUCT-PROC-CL';
const prior=root+'/pages/markets/poland/04_planning/gate3-v0.1';
const priorHtml=prior+'/MARKET-EU-PL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity=p=>({path:p,bytes:fs.statSync(p).size,sha256:sha(p)});
fs.mkdirSync(out+'/dependencies',{recursive:true});
const priorSource=fs.readFileSync(priorHtml,'utf8');
const shared={header:priorSource.match(/<header[\s\S]*?<\/header>/)[0],footer:priorSource.match(/<footer[\s\S]*?<\/footer>/)[0],dialog:priorSource.match(/<dialog[\s\S]*?<\/dialog>/)[0],style:priorSource.match(/<style>([\s\S]*?)<\/style>/)[1],script:priorSource.match(/<script>([\s\S]*?)<\/script>/)[1].split('// Planning links')[0]};
// Only shared assembly/typography is consumed. No source page's main or copy is read into the output.
shared.header=shared.header.replaceAll('href="/markets/" aria-current="page"','href="/markets/"').replaceAll('href="/products/"','href="/products/" aria-current="page"');
shared.style=shared.style.replace(/#pl-\d+[^{}]*\{[^{}]*\}/g,'').replace(/\.pl-module\{[^{}]*\}/g,'');
fs.writeFileSync(out+'/dependencies/shared-planning-assembly.snapshot.json',JSON.stringify({origin:identity(priorHtml),scope:'Shared Header/Footer/Cookie assembly and approved consumer styles only; main content excluded. Products mapping applied.',...shared},null,2));
const deps=['shared-chrome-data.snapshot.json','shared-legal-data.snapshot.json','shared-chrome-style.snapshot.css','Inter-Variable.ttf','Inter-OFL.txt'];
for(const n of deps)fs.copyFileSync(prior+'/dependencies/'+n,out+'/dependencies/'+n);
const copyPath=root+'/pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md';
const raw=fs.readFileSync(copyPath,'utf8').split('--- BEGIN BUYER CLEAN COPY ---')[1].split('--- END BUYER CLEAN COPY ---')[0].trim();
const groups=raw.split(/^## B-/m).slice(1).map(t=>{const lines=t.split(/\r?\n/),label=lines.shift(),num=label.slice(0,2),title=label.split(' — ')[1];return {num,title,blocks:lines.join('\n').trim().split(/\n\s*\n/).map(b=>b.replace(/^\*\*(Primary|Secondary) action:\*\* /,''))};});
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const md=s=>esc(s).replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2">$1</a>');
const item=b=>b.startsWith('### ')?'<h3>'+esc(b.slice(4))+'</h3>':b.startsWith('[')?'<div class="cl-action">'+md(b)+'</div>':'<p>'+esc(b)+'</p>';
const breadcrumb=md(groups[0].blocks[0]);
let body='';
for(const g of groups.slice(1)){
 let content='';
 if(g.num==='01'){const b=g.blocks.filter(x=>x!=='**Eyebrow**');content='<nav class="breadcrumb" aria-label="Breadcrumb">'+breadcrumb+'</nav><div class="cl-eyebrow">'+esc(b[0])+'</div><h1>'+esc(b[1].slice(2))+'</h1><div class="cl-hero-copy">'+item(b[2])+'</div><div class="cl-actions">'+b.slice(3).map(item).join('')+'</div>';}
 else if(g.num==='03'){const intro=g.blocks[0],entries=[];for(const b of g.blocks.slice(1)){if(b.startsWith('### '))entries.push({name:b.slice(4),blocks:[]});else entries.at(-1).blocks.push(b);}content='<h2 id="explore-chloride-process-grades" tabindex="-1">'+esc(g.title)+'</h2><p class="cl-intro">'+esc(intro)+'</p><ul class="cl-grades">'+entries.map(e=>'<li class="cl-grade"><h3>'+esc(e.name)+'</h3>'+e.blocks.map(item).join('')+'</li>').join('')+'</ul>';}
 else if(g.num==='04'){const steps=[],actions=[];for(const b of g.blocks){if(b.startsWith('### '))steps.push({name:b.slice(4),blocks:[]});else if(b.startsWith('['))actions.push(b);else steps.at(-1).blocks.push(b);}content='<h2>'+esc(g.title)+'</h2><div class="cl-steps">'+steps.map(s=>'<div class="cl-step"><h3>'+esc(s.name)+'</h3><div>'+s.blocks.map(item).join('')+'</div></div>').join('')+'</div><div class="cl-actions">'+actions.map(item).join('')+'</div>';}
 else content='<div class="cl-split"><h2>'+esc(g.title)+'</h2><div>'+g.blocks.map(item).join('')+'</div></div>';
 body+='<section id="cl-'+g.num+'" class="cl-module"><div class="page-width">'+content+'</div></section>\n';
}
const pageStyle=`
/* Page-owned layout only: current functional teal, complete continuous grade directory. */
.cl-module{padding:52px 0;border-bottom:1px solid #d9e2ec}.cl-module:last-child{border-bottom:0}.page-width{width:min(1200px,calc(100% - 64px));margin:auto}.cl-module h2{font-size:34px;line-height:1.2}.cl-module h3{font-size:24px;line-height:1.3}.cl-module p{font-size:17px;line-height:1.65;margin:0 0 20px}.cl-module p:last-child{margin-bottom:0}
#cl-01{padding-top:0;background:#f5f8fb}.cl-eyebrow{font-size:13px;font-weight:700;letter-spacing:.07em;color:#334155;margin-bottom:16px}#cl-01 h1{max-width:1050px;font-size:54px}.cl-hero-copy{max-width:935px;margin:24px 0}.cl-hero-copy p{font-size:20px;line-height:1.65}.cl-actions{display:flex;align-items:center;gap:16px;flex-wrap:wrap}.cl-action{max-width:100%}.cl-action a{display:inline-flex;align-items:center;min-height:48px;min-width:44px;max-width:100%;padding:10px 0;font-size:16px;line-height:1.45;font-weight:600;color:#008078;text-decoration:underline;text-underline-offset:5px}.cl-action a:visited{color:#008078}.cl-action a:hover{background:#e8f4f2}.cl-action a:focus-visible,.cl-module .breadcrumb a:focus-visible{outline:3px solid #008078;outline-offset:4px}.cl-module .breadcrumb a{color:#008078}.cl-actions .cl-action:first-child a{padding:12px 20px;border:1px solid #008078;border-radius:6px}#cl-01 .cl-action:first-child a,#cl-05 .cl-action a{background:#008078;color:#fff;border:1px solid #008078;padding:12px 20px;border-radius:6px;text-decoration:none}#cl-01 .cl-action:first-child a:hover,#cl-05 .cl-action a:hover{background:#006b65}
.cl-split{display:grid;grid-template-columns:340px minmax(0,1fr);gap:72px}.cl-intro{max-width:920px;margin:20px 0 28px!important}.cl-grades{list-style:none;padding:0;margin:0;border-top:1px solid #a4b4c4}.cl-grade{display:grid;grid-template-columns:160px minmax(0,1fr) 150px;gap:32px;align-items:center;padding:20px 0;border-bottom:1px solid #d9e2ec}.cl-grade p{margin:0}.cl-grade .cl-action{justify-self:end}.cl-grade .cl-action a{padding:10px 12px}.cl-steps{margin:28px 0 24px}.cl-step{display:grid;grid-template-columns:340px minmax(0,1fr);gap:72px;padding:26px 0;border-top:1px solid #d9e2ec}.cl-step p{margin:0}.cl-module h2[id]{scroll-margin-top:108px}.cl-module h2[id]:focus{outline:3px solid #008078;outline-offset:7px}
@media(max-width:1100px){.cl-module{padding:42px 0}#cl-01 h1{font-size:44px}.cl-module h2{font-size:31px}.cl-split,.cl-step{grid-template-columns:1fr;gap:20px}.cl-grade{grid-template-columns:116px minmax(0,1fr);gap:8px 24px;padding:22px 0}.cl-grade h3{grid-column:1;grid-row:1}.cl-grade p{grid-column:2;grid-row:1/3}.cl-grade .cl-action{grid-column:1;grid-row:2;justify-self:start}.cl-grade .cl-action a{padding:8px 0}.cl-module h2[id]{scroll-margin-top:88px}}
@media(max-width:560px){.page-width{width:calc(100% - 40px)}.cl-module{padding:34px 0}#cl-01 h1{font-size:36px;line-height:1.16}.cl-module h2{font-size:29px;line-height:1.22}.cl-module h3{font-size:23px}.cl-hero-copy p{font-size:18px}.cl-actions{display:flex;flex-direction:column;align-items:stretch;gap:8px}.cl-action a{justify-content:flex-start}.cl-actions .cl-action:first-child a,#cl-05 .cl-action a{width:100%;justify-content:center}.cl-grade{display:block;padding:24px 0}.cl-grade h3{margin-bottom:12px}.cl-grade p{margin-bottom:8px}.cl-grade .cl-action a{padding:8px 0}.cl-step{gap:16px;padding:24px 0}.cl-intro{margin:20px 0 24px!important}}
`;
const pageScript=`
window.planningNavigation=[];
const targetId='explore-chloride-process-grades';
function reachGrades(){const target=document.getElementById(targetId);target.scrollIntoView({block:'start',behavior:'auto'});target.focus({preventScroll:true});}
document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;const href=a.getAttribute('href');if(href==='#'+targetId){e.preventDefault();if(location.hash!==href)location.hash=href;reachGrades();return;}e.preventDefault();const record={label:a.textContent.trim()||a.getAttribute('aria-label'),href};if(href==='/request-a-quote/'||href==='/request-documents/')record.context={source_page_id:'PRODUCT-PROC-CL'};window.planningNavigation.push(record);});
window.addEventListener('hashchange',()=>{if(location.hash==='#'+targetId)reachGrades()});
if(location.hash==='#'+targetId)document.fonts.ready.then(()=>requestAnimationFrame(reachGrades));
`;
const html='<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Chloride Process Titanium Dioxide | TiO2 Malaysia</title><link rel="stylesheet" href="dependencies/shared-chrome-style.snapshot.css"><style>'+shared.style+pageStyle+'</style></head><body>'+shared.header+'<main>'+body+'</main>'+shared.footer+shared.dialog+'<script>'+shared.script+pageScript+'</script></body></html>';
const dest=out+'/'+id+'_GATE3_RESPONSIVE_WIREFRAME_V0.1.html';fs.writeFileSync(dest,html);
fs.writeFileSync(out+'/source-binding.json',JSON.stringify({status:'DRAFT_FOR_PROJECT_CONTROL_REVIEW',candidate:identity(dest),copy:identity(copyPath),sharedAssemblyOrigin:identity(priorHtml),dependencies:deps.map(n=>({...identity(out+'/dependencies/'+n),origin:prior+'/dependencies/'+n,originSha256:sha(prior+'/dependencies/'+n)})),derivedAssembly:identity(out+'/dependencies/shared-planning-assembly.snapshot.json'),note:'Approved shared consumer assembly reused; original shared authority retained. No prior main content. Source-only RFQ/DOC attribution is local intent instrumentation, not receiver proof.'},null,2));
console.log(JSON.stringify(identity(dest)));
