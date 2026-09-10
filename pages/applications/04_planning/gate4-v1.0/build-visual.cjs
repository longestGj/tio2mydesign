// APP-000 Gate 4 final visual planning source. Buyer copy is derived from approved B; edit B only through its owner.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {pathToFileURL} = require('url');
const root = 'D:/23MySec';
const out = __dirname;
const sharedDir = root + '/docs/architecture/gate3-shared-consumer-v0.2';
const {renderSharedChrome} = require(sharedDir + '/render-shared-chrome.cjs');
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const sources = {
  manifest: ['pages/applications/APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.2.md','4721d291c47a09c3c464ae925484841bcb93c61da0e5d52cb756961f7afd1ecd'],
  copy: ['pages/applications/04_planning/APP-000_GATE2_FULL_BUYER_CLEAN_COPY_V1.0.md','c57db3f8e1afb9b4d33a1498843cf8228b7faddec cdaa79c7e6a6d76c1a234b1'.replace(/ /g,'')],
  contract: ['pages/applications/04_planning/APP-000_GATE2_CONTENT_CONTRACT_V1.0.md','6f7ef60c6bc6cbe5398f9f1cf4e2e713fcfb48ce65bc28fe49d699ca61b26f6e'],
  approval: ['pages/applications/05_review/APP-000_GATE2_USER_APPROVAL_AND_CLOSURE_V1.0.md','f8207754c8e52efe3a742c044b6b4c0300584eaaaa055876b4fc85eda00765b6']
};
for (const [role,[rel,sha]] of Object.entries(sources)) if(hash(root+'/'+rel)!==sha)throw Error('Input identity mismatch: '+role);
const B=fs.readFileSync(root+'/'+sources.copy[0],'utf8').replace(/\r\n/g,'\n');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const need=(re,text=B)=>{const m=text.match(re);if(!m)throw Error('Missing approved copy: '+re);return m[1]};
const names=['Coatings','Plastics','Masterbatch','Printing Inks','Paper','Specialty Materials'];
const appIds=['APP-COAT','APP-PLAS','APP-MB','APP-INK','APP-PAPER',null];
const registry=fs.readFileSync(root+'/docs/architecture/PAGE_REGISTRY_V0.2.md','utf8');
const rows=registry.split('\n').filter(s=>s.startsWith('| ')).map(s=>s.split('|').map(v=>v.trim().replace(/`/g,'')));
const route=id=>{const row=rows.find(r=>r[1]===id);if(!row)throw Error('Unresolved registry owner '+id);return row[3]};
const gradeId=grade=>{const row=rows.find(r=>r[1].startsWith('GRADE-')&&r[2]===grade);if(!row)throw Error('Unresolved grade owner '+grade);return row[1]};
const groups=names.map((name,i)=>{
  const segment=need(new RegExp('### '+name+'\\n\\n([\\s\\S]*?)(?=\\n(?:<a |## )|$)'));
  return {name,id:appIds[i],anchor:'application-'+name.toLowerCase().replace(/ /g,'-'),scope:segment.split('\n\n')[0],label:need(/\*\*(Grades? to Review)\*\*/,segment),grades:need(/\*\*Grades? to Review\*\*\n\n([^\n]+)/,segment).split(' · '),cta:i<5?need(/\*\*(Explore [^*]+)\*\*/,segment):null};
});
const hero={title:need(/^# (.+)$/m),body:need(/^# .+\n\n([^\n]+)/m),primary:need(/\*\*\[([^\]]+)\]\(#application-selector\)\*\*/),choose:need(/\n(Choose an Application)\n/)};
const intro=need(/## Choose by Application\n\n([^\n]+)/);
const definition=intro.slice(0,intro.indexOf(' Open a grade page'));
const variants={both:intro,grades:definition+' '+need(/\| Grade pages only \| ([^|]+) \|/),apps:definition+' '+need(/\| Application pages only \| ([^|]+) \|/),neither:definition};
const steps=[...B.matchAll(/^\d\. \*\*([^*]+)\*\* ([^\n]+)$/gm)].map(m=>({title:m[1],body:m[2]}));
const supportNames=['Products','Documents','Markets'],supportIds=['PRODUCT-000','DOC-000','MARKET-000'];
const supports=supportNames.map((name,i)=>({name,id:supportIds[i],body:need(new RegExp('### '+name+'\\n\\n([^\\n]+)')),cta:need(new RegExp('### '+name+'\\n\\n[^\\n]+\\n\\n\\*\\*([^*]+)\\*\\*'))}));
const final=need(/## Share Your Application Requirements\n\n([\s\S]*?)\n\n---/).split('\n\n');
const seoDescription=need(/\| Meta Description \| ([^|]+) \|/);
const baseSchema=JSON.parse(need(/```json\n([\s\S]*?)\n```/));
const payload={hero,groups,intro:variants,steps,supports,final:final.slice(0,2),moduleHeadings:['Choose by Application','How to Use This Application Hub','Continue Your Procurement Review','Share Your Application Requirements']};
const styles=fs.readFileSync(out+'/visual.css','utf8');
const shared=renderSharedChrome({currentPageId:'APP-000',primaryLogoSrc:pathToFileURL(root+'/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg').href,reverseLogoSrc:pathToFileURL(root+'/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg').href});
const allGrades=[...new Set(groups.flatMap(g=>g.grades))];
const scenarios={
  full:{apps:appIds.filter(Boolean),grades:allGrades,supports:supportIds,rfq:true},
  mixed:{apps:['APP-COAT','APP-PAPER'],grades:['M-350','M-2377','CR-901'],supports:['PRODUCT-000'],rfq:false},
  constrained:{apps:[],grades:[],supports:[],rfq:false},
  'grades-only':{apps:[],grades:allGrades,supports:supportIds,rfq:true},
  'apps-only':{apps:appIds.filter(Boolean),grades:[],supports:supportIds,rfq:true}
};
const link=(label,id,cls='')=>`<a class="${cls}" href="${esc(route(id))}" data-owner="${id}">${esc(label)}</a>`;
const rfq=()=>`<a class="app-action app-rfq" href="${route('CONV-RFQ')}" data-owner="CONV-RFQ">Request a Quote</a>`;
for(const [scenario,cfg] of Object.entries(scenarios)){
  const guide=cfg.apps.length?(cfg.grades.length?'both':'apps'):(cfg.grades.length?'grades':'neither');
  const collection=groups.map(g=>`<article class="app-collection" id="${g.anchor}" aria-labelledby="${g.anchor}-title"><div class="app-scope"><h3 id="${g.anchor}-title">${esc(g.name)}</h3><p>${esc(g.scope)}</p></div><details class="app-grades" open><summary aria-labelledby="${g.anchor}-summary ${g.anchor}-title"><span id="${g.anchor}-summary">${esc(g.label)}</span></summary><ul>${g.grades.map(grade=>`<li>${cfg.grades.includes(grade)?link(grade,gradeId(grade),'app-grade-link'):`<span class="app-grade-plain">${esc(grade)}</span>`}</li>`).join('')}</ul></details>${g.cta&&cfg.apps.includes(g.id)?`<div class="app-collection-action">${link(g.cta,g.id,'app-text-link')}</div>`:''}</article>`).join('');
  const support=supports.filter(s=>cfg.supports.includes(s.id));
  const schema=JSON.parse(JSON.stringify(baseSchema));
  const eligibleGroups=groups.filter(g=>cfg.apps.includes(g.id));
  if(eligibleGroups.length){schema['@graph'][0].mainEntity={'@id':'https://tio2malaysia.com/applications/#application-pages'};schema['@graph'].push({'@type':'ItemList','@id':'https://tio2malaysia.com/applications/#application-pages',name:payload.moduleHeadings[0],numberOfItems:eligibleGroups.length,itemListElement:eligibleGroups.map((g,i)=>({'@type':'ListItem',position:i+1,name:g.name,item:'https://tio2malaysia.com'+route(g.id)}))})}
  const body=`<main class="app-main" id="main"><div class="app-wrap"><nav class="app-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span aria-current="page">Applications</span></nav><section class="app-hero" data-module="M1"><div><h1>${esc(hero.title)}</h1><p>${esc(hero.body)}</p><div class="app-actions"><a class="app-action app-primary" href="#application-selector">${esc(hero.primary)}</a>${cfg.rfq?rfq():''}</div></div><nav class="app-local-nav" aria-label="${esc(hero.choose)}"><p>${esc(hero.choose)}</p><ul>${groups.map(g=>`<li><a href="#${g.anchor}">${esc(g.name)}</a></li>`).join('')}</ul></nav></section><section class="app-section" data-module="M2" id="application-selector" aria-labelledby="application-selector-title"><h2 id="application-selector-title">${payload.moduleHeadings[0]}</h2><p class="app-intro">${esc(variants[guide])}</p><div class="app-collections">${collection}</div></section><section class="app-section" data-module="M3"><h2>${payload.moduleHeadings[1]}</h2><ol class="app-steps">${steps.map(s=>`<li><strong>${esc(s.title)}</strong><p>${esc(s.body)}</p></li>`).join('')}</ol></section>${support.length?`<section class="app-section" data-module="M4"><h2>${payload.moduleHeadings[2]}</h2><div class="app-supports">${support.map(s=>`<article><h3>${s.name}</h3><p>${esc(s.body)}</p>${link(s.cta,s.id,'app-text-link')}</article>`).join('')}</div></section>`:''}${cfg.rfq?`<section class="app-section app-final" data-module="M5"><h2>${payload.moduleHeadings[3]}</h2>${payload.final.map(p=>`<p>${esc(p)}</p>`).join('')}${rfq()}</section>`:''}</div></main>`;
  const pageBehavior=`(()=>{const groups=[...document.querySelectorAll('.app-grades')];const wide=matchMedia('(min-width:561px)');groups.forEach(d=>d.open=wide.matches);wide.addEventListener('change',e=>{if(e.matches)groups.forEach(d=>d.open=true)});})();`;
  const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Applications | TiO2 Malaysia</title><meta name="description" content="${esc(seoDescription)}"><!-- LOCAL PLANNING ELIGIBILITY SCENARIO: ${scenario}. Registry paths are scenario values, not approved live route assertions. --> <style data-owner="shared">${shared.style}</style><style data-owner="APP-000">${styles}</style><script type="application/ld+json">${JSON.stringify(schema)}</script></head><body>${shared.header}${body}${shared.footer}${shared.dialog}<script data-owner="shared">${shared.behavior}</script><script data-owner="APP-000">${pageBehavior}</script></body></html>`;
  fs.writeFileSync(out+'/'+(scenario==='full'?'index':scenario)+'.html',html);
}
fs.writeFileSync(out+'/derived-copy-map.json',JSON.stringify({notice:'Generated read-only projection of B; not a second editable copy source.',source:sources.copy,payload},null,2));
const pkg=JSON.parse(fs.readFileSync(sharedDir+'/consumer-package.json','utf8'));
for(const f of pkg.files)if(hash(sharedDir+'/'+f.path)!==f.sha256)throw Error('Shared identity drift: '+f.path);
const identity=(p,role)=>({role,path:p.replace(/\\/g,'/'),bytes:fs.statSync(p).size,sha256:hash(p)});
const additional=['docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.9.md','docs/architecture/GATE4_COMPLETE_VISUAL_AGENT_SKILL_CONTRACT_V1.2.md','docs/architecture/GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.0.md','pages/applications/05_review/APP-000_GATE3_INDEPENDENT_REVIEW_V1.0.md','pages/applications/05_review/APP-000_GATE3_DELEGATED_APPROVAL_AND_CLOSURE_V1.0.md','pages/applications/05_review/APP-000_GATE3_TO_GATE4_HANDOFF_V1.0.md','docs/architecture/APP000_GATE2_TO_GATE9_CONTROL_V1.0.md','docs/architecture/PAGE_REGISTRY_V0.2.md','research/keyword/11_page_keyword_master.csv','docs/page-briefs/APP-000_APPLICATIONS_BRIEF_V0.1.md','docs/page-playbooks/APPLICATION_PLAYBOOK_V0.1.md','pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv','pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md'];
fs.writeFileSync(out+'/input-binding.json',JSON.stringify({pageId:'APP-000',site_scope:'tio2-my',author:'/root/app000_gate4_author',inputs:Object.entries(sources).map(([role,[p]])=>identity(root+'/'+p,role)),relatedInputs:additional.map(p=>identity(root+'/'+p,'authority')),shared:{packageId:pkg.packageId,manifest:identity(sharedDir+'/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md','shared_manifest'),files:pkg.files.map(f=>identity(sharedDir+'/'+f.path,f.role)),owners:Object.entries(pkg.authority).map(([role,p])=>identity(p,role)),parameters:{currentPageId:'APP-000',primaryLogoSrc:'brand_logo_primary_horizontal',reverseLogoSrc:'brand_logo_reverse_monochrome'},assembly:'Unmodified generator output embedded in each HTML; no business-page source lineage; APP-prefixed local rules except body margin and universal border-box base resets. Complete shared behavior is retested locally.'},scenarios,routeBoundary:'Local scenario eligibility only. Registry paths resolved by Page ID; no destination approval or actual route response claim. Runtime owner resolves effective approved routes at Gate 8/9.',outputs:Object.keys(scenarios).map(s=>identity(out+'/'+(s==='full'?'index':s)+'.html','scenario_source'))},null,2));
console.log(JSON.stringify({status:'BUILT_DIAGNOSTIC_CANDIDATE',groups:groups.map(g=>({name:g.name,count:g.grades.length})),out}));
