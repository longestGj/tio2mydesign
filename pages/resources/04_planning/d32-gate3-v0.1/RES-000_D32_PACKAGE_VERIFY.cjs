const fs=require('fs'),path=require('path'),crypto=require('crypto');
const base=__dirname,root=path.resolve(base,'../../../..');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const row=p=>{p=path.resolve(p).replaceAll('\\','/');const r={path:p,bytes:fs.statSync(p).size,sha256:sha(p)};if(p.endsWith('.png')){const b=fs.readFileSync(p);r.physicalWidth=b.readUInt32BE(16);r.physicalHeight=b.readUInt32BE(20);r.deviceScaleFactor=1;r.evidenceType=p.includes('LOCAL_SIMULATION')?'LOCAL_SIMULATION':'ACTUAL_RUNTIME_PLANNING_ONLY';}return r};
const freeze=JSON.parse(fs.readFileSync(path.join(base,'RES-000_D32_FREEZE.json')));
for(const r of [...freeze.sources,freeze.inputs,freeze.preflight])if(sha(r.path)!==r.sha256)throw Error('Freeze mismatch: '+r.path);
const digestRows=rows=>crypto.createHash('sha256').update(rows.map(r=>`${r.path}\t${r.bytes}\t${r.sha256}\n`).join('')).digest('hex');
const target=path.join(base,'RES-000_D32_APPROVAL_CORE.json');
if(process.argv.includes('--pack')){
 if(fs.existsSync(target))throw Error('Immutable approval core already exists.');
 const filenames=['RES-000_D32_FREEZE.json','RES-000_D32_INPUTS.json','RES-000_D32_PREFLIGHT.json','RES-000_D32_STATIC_GREEN.json','RES-000_D32_PACKAGE_VERIFY.cjs'];
 const paths=[...freeze.sources.filter(r=>r.role==='EDITABLE_PLANNING_SOURCE'||r.role==='STRUCTURE_REPORT').map(r=>r.path),...filenames.map(n=>path.join(base,n)),...fs.readdirSync(path.join(base,'formal')).map(n=>path.join(base,'formal',n)),path.join(root,'pages/resources/05_review/RES-000_D32_GATE3_AUTHOR_SELF_CHECK_V0.1.md')];
 const assets=[...new Set(paths.map(p=>path.resolve(p)))].map(row).sort((a,b)=>a.path.localeCompare(b.path,'en'));
 const formal=JSON.parse(fs.readFileSync(path.join(base,'formal/runtime-1.json')));
 if(formal.failed||formal.passed!==92)throw Error('Formal self-check incomplete');
 const manifest={bundleId:'RES-000-D32-G3-001',status:'READY_FOR_INDEPENDENT_GATE3_REVIEW',author:'/root/res_root_d32',reviewer:'/root/about_root_d32',time:new Date().toISOString(),freezeId:freeze.freezeId,bundleDigestAlgorithm:'SHA256 of ordered UTF8 path<TAB>bytes<TAB>sha256<LF> rows, in stored assets order; excludes this JSON to avoid a cycle.',bundleSha256:digestRows(assets),assets,diagnosticSupport:path.join(base,'diagnostic'),redEvidence:['RES-000_D32_RED.json','RES-000_D32_FRESHNESS_RED.json','RES-000_D32_ORIGIN_METADATA_RED.json'].map(n=>row(path.join(base,n))),approval:'NOT_APPROVED; author self-check only'};
 fs.writeFileSync(target,JSON.stringify(manifest,null,2)+'\n');
}
const manifest=JSON.parse(fs.readFileSync(target));
for(const r of [...manifest.assets,...manifest.redEvidence])if(sha(r.path)!==r.sha256||fs.statSync(r.path).size!==r.bytes)throw Error('Asset identity mismatch: '+r.path);
if(digestRows(manifest.assets)!==manifest.bundleSha256)throw Error('Bundle identity mismatch');
console.log(JSON.stringify({status:'AUTHOR_IDENTITY_SELF_CHECK_PASS',bundleId:manifest.bundleId,bundleSha256:manifest.bundleSha256,approvalCoreSha256:sha(target),frozenSourceCount:freeze.sources.length,coreAssetCount:manifest.assets.length,pngCount:manifest.assets.filter(a=>a.path.endsWith('.png')).length},null,2));
