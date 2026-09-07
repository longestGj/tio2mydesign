const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'..');
const repo=path.resolve(root,'../../../../..');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const rec=(p,role)=>{const a=path.resolve(repo,p),b=fs.readFileSync(a);return{role,path:a.replace(/\\/g,'/'),relativePath:path.relative(root,a).replace(/\\/g,'/'),bytes:b.length,sha256:sha(b)}};
const freezePath=path.join(root,'approval_core/source-freeze.json');
const exportPath=path.join(root,'approval_core/export-inventory.json');
const freeze=JSON.parse(fs.readFileSync(freezePath));
const exportData=JSON.parse(fs.readFileSync(exportPath));
const check=x=>{const b=fs.readFileSync(x.path);return{path:x.path,expectedBytes:x.bytes,actualBytes:b.length,expectedSha256:x.sha256,actualSha256:sha(b),match:x.bytes===b.length&&x.sha256===sha(b)}};
const frozenChecks=[...freeze.dependencies,...freeze.inputs,freeze.preflight].map(check);
const exportChecks=exportData.assets.map(check);
const receipt={date:new Date().toISOString(),freezeId:freeze.freezeId,sourceFreezeSha256:sha(fs.readFileSync(freezePath)),exportInventorySha256:sha(fs.readFileSync(exportPath)),frozenChecks,exportChecks,allFrozenMatch:frozenChecks.every(x=>x.match),allExportsMatch:exportChecks.every(x=>x.match),formalAssetCount:exportData.assets.length,authorFindingCount:0,sharedObservations:['ES-G4-OBS01'],toolEvents:['ES-G5-TOOL-01','ES-G5-TOOL-02']};
const receiptPath=path.join(root,'diagnostic_support/final-receipt.json');fs.writeFileSync(receiptPath,JSON.stringify(receipt,null,2));
const core=[
 ['pages/markets/spain/04_planning/gate5-v0.1/MARKET-EU-ES_GATE5_COMPLETE_VISUAL_V0.1.html','EDITABLE_COMPLETE_VISUAL'],
 ['pages/markets/spain/04_planning/gate5-v0.1/visual-direction.css','APPROVED_VISUAL_RULES'],
 ['pages/markets/spain/04_planning/gate5-v0.1/dependencies/Inter-Variable.ttf','FONT'],
 ['pages/markets/spain/04_planning/gate5-v0.1/dependencies/Inter-OFL.txt','FONT_LICENSE'],
 ['pages/markets/spain/04_planning/gate5-v0.1/dependencies/tio2-malaysia-primary-horizontal-v0.1.svg','PRODUCTION_LOGO'],
 ['pages/markets/spain/04_planning/gate5-v0.1/dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg','PRODUCTION_LOGO'],
 ['pages/markets/spain/04_planning/gate5-v0.1/approval_core/source-freeze.json','SOURCE_FREEZE'],
 ['pages/markets/spain/04_planning/gate5-v0.1/approval_core/export-inventory.json','FORMAL_EXPORT_INVENTORY'],
 ['pages/markets/spain/04_planning/gate5-v0.1/MARKET-EU-ES_GATE5_COMPLETE_VISUAL_AND_METHOD_REPORT_V0.1.md','FINAL_VISUAL_SPECIFICATION'],
 ['pages/markets/spain/05_review/MARKET-EU-ES_GATE5_EXECUTION_SELF_CHECK_V0.1.md','AUTHOR_SELF_CHECK'],
 ['pages/markets/spain/05_review/MARKET-EU-ES_GATE5_TO_GATE6_HANDOFF_DRAFT_V0.1.md','GATE5_TO_6_HANDOFF_DRAFT'],
 ['pages/markets/spain/MARKET-EU-ES_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md','CANDIDATE_NOT_CURRENT_MANIFEST'],
].map(([p,r])=>rec(p,r));
for(const x of exportData.assets)core.push({...x,role:'FORMAL_'+x.state});
const diagnostics=[
 ['pages/markets/spain/04_planning/gate5-v0.1/diagnostic_support/preflight-runtime.json','PREFLIGHT_RUNTIME'],
 ['pages/markets/spain/04_planning/gate5-v0.1/diagnostic_support/formal-runtime-and-export.json','FORMAL_RUNTIME'],
 ['pages/markets/spain/04_planning/gate5-v0.1/diagnostic_support/failure-and-repair-history.md','FAILURE_HISTORY'],
 ['pages/markets/spain/04_planning/gate5-v0.1/diagnostic_support/final-receipt.json','FINAL_INTEGRITY_RECEIPT'],
 ['pages/markets/spain/04_planning/gate5-v0.1/diagnostic_support/verify-and-export.cjs','VERIFIER_EXPORTER'],
 ['pages/markets/spain/04_planning/gate5-v0.1/diagnostic_support/freeze-source.cjs','FREEZER'],
 ['pages/markets/spain/04_planning/gate5-v0.1/diagnostic_support/finalize-records.cjs','FINALIZER'],
].map(([p,r])=>rec(p,r));
const segmentDir=path.join(root,'diagnostic_support/segments');
for(const n of fs.readdirSync(segmentDir).sort())diagnostics.push(rec(path.relative(repo,path.join(segmentDir,n)),'READABLE_FULL_PAGE_SEGMENT'));
const inventory={date:new Date().toISOString(),status:'DRAFT_FOR_PROJECT_CONTROL_REVIEW',freezeId:freeze.freezeId,scope:'Spain Gate5 author candidate; not Gate5 approval or Gate6.',formalAssetCount:exportData.assets.length,core,diagnostics};
const invPath=path.join(root,'approval_core/asset-inventory.json');fs.writeFileSync(invPath,JSON.stringify(inventory,null,2));
console.log(JSON.stringify({receipt:receiptPath.replace(/\\/g,'/'),inventory:invPath.replace(/\\/g,'/'),allFrozenMatch:receipt.allFrozenMatch,allExportsMatch:receipt.allExportsMatch,formalAssetCount:exportData.assets.length,core:core.length,diagnostics:diagnostics.length,inventorySha256:sha(fs.readFileSync(invPath)),receiptSha256:sha(fs.readFileSync(receiptPath))},null,2));
