const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const pageId=process.argv[2];
if(!['MARKET-BR-EN','MARKET-BR-PT'].includes(pageId))throw new Error('Expected page ID');
const dir=`D:/23MySec/pages/markets/brazil/05_review/${pageId}_GATE4_INDEPENDENT_REREVIEW_V1.1`;
const o=JSON.parse(fs.readFileSync(`${dir}/observations.json`,'utf8'));
const checks={
  sourceIdentity:Object.values(o.identityAssertions).filter(v=>typeof v==='boolean').every(Boolean),
  evidenceIdentities:o.identityReadback.listed===o.identityReadback.matches&&o.identityReadback.mismatches.length===0,
  noSharedSelectorHits:o.sharedOwnerSourceInspection.visualLayerSharedSelectorHits.length===0,
  threeViewports:o.viewports.length===3,
  contentAndLinks:o.viewports.every(v=>v.contentParity.normalizedMain&&v.contentParity.links),
  sharedComputedParity:o.viewports.every(v=>v.sharedParity),
  geometry:o.viewports.every(v=>v.geometry.dimensions.clientWidth===v.geometry.dimensions.scrollWidth&&v.geometry.viewportOffenders.length===0&&v.geometry.clipped.length===0&&v.geometry.minControl.width>=44&&v.geometry.minControl.height>=44),
  noPageErrors:o.viewports.every(v=>v.pageErrors.length===0),
  focus:o.viewports.every(v=>v.focusProbes.every(f=>f.outlineWidth==='3px'&&f.outlineStyle==='solid'&&f.contrast>=3)),
  heroPrimary:o.viewports.every(v=>v.heroPrimary.contrast>=4.5&&v.heroHover.contrast>=4.5),
  menu:o.viewports.filter(v=>v.spec.width<1101).every(v=>v.menu&&v.menu.opened.expanded==='true'&&!v.menu.opened.hidden&&v.menu.opened.mainInert&&v.menu.opened.footerInert&&v.menu.closed.expanded==='false'&&v.menu.closed.hidden),
  cookie:o.viewports.every(v=>v.cookie.opened.open&&v.cookie.opened.active==='Close'&&v.cookie.next==='Read Cookie Policy'&&!v.cookie.closed.open&&v.cookie.closed.active==='cookie-trigger')
};
const summary={pageId,generatedAt:new Date().toISOString(),checks,pass:Object.values(checks).every(Boolean),remainingFindings:[]};
fs.writeFileSync(`${dir}/verification-summary.json`,JSON.stringify(summary,null,2));
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const files=['report.md','observations.json','verification-summary.json','targeted-source-diff.txt','run-targeted-rereview.cjs','finalize-review-evidence.cjs'];
const index={pageId,reviewType:'Gate 4 V1.1 targeted independent rereview',reviewerRole:'independent; candidate files not modified',artifacts:files.map(name=>{const p=path.join(dir,name);return{name,path:p.replace(/\\/g,'/'),bytes:fs.statSync(p).size,sha256:sha(p)}})};
fs.writeFileSync(`${dir}/review-evidence-index.json`,JSON.stringify(index,null,2));
console.log(JSON.stringify({summary,index:`${dir}/review-evidence-index.json`},null,2));
