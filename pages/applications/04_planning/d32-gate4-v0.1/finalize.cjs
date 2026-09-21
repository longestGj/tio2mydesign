const fs=require('fs'),path=require('path'),crypto=require('crypto');
const dir=__dirname,root=path.resolve(dir,'../../../..');
const read=n=>JSON.parse(fs.readFileSync(path.join(dir,n)));
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id=p=>({path:path.relative(root,p).replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:hash(p)});
const identity=r=>{const a=id(path.join(root,r.path));if(a.bytes!==r.bytes||a.sha256!==r.sha256)throw Error('Identity drift '+r.path);};
const digest=m=>'sha256:'+crypto.createHash('sha256').update(JSON.stringify(m)).digest('hex');
const json=(n,v)=>fs.writeFileSync(path.join(dir,n),JSON.stringify(v,null,2));
const lock=read('source-lock.json'),formal=read('formal-render.json'),runtime=read('runtime-observations.json'),supp=read('supplemental-observations.json'),pre=read('preflight.json');
for(const r of [...lock.source,...lock.dependencies,...lock.inputs,formal.source_lock,pre.initial,pre.direction,pre.source_lock])identity(r);
if(runtime.status!=='PASS'||runtime.checks.length!==120||supp.status!=='PASS'||supp.checks.length!==15||supp.source_sha256!==lock.source[1].sha256)throw Error('Verification does not match source');
if(formal.captures.length!==14)throw Error('Expected 14 formal assets');
for(const r of formal.captures){identity(r);const b=fs.readFileSync(path.join(root,r.path));if(b.readUInt32BE(16)!==r.physical_width||b.readUInt32BE(20)!==r.physical_height||r.physical_width!==r.logical_width*r.dpr||r.dpr!==1)throw Error('PNG or DPR mismatch '+r.path);}
const actual=fs.readdirSync(dir).filter(n=>n.startsWith('APP-000_G4_')&&n.endsWith('.png')).sort();
if(JSON.stringify(actual)!==JSON.stringify(formal.captures.map(r=>path.basename(r.path)).sort()))throw Error('Orphan formal asset');
if(process.argv.includes('--verify')){
 const frozen=read('freeze.json');for(const r of [...frozen.members,...frozen.dispatch_inputs])identity(r);if(digest(frozen.members)!==frozen.bundle_id)throw Error('Bundle digest mismatch');console.log(JSON.stringify({status:'PASS',bundle_id:frozen.bundle_id,members:frozen.members.length,formal_assets:14,assertions:135,identity_drift:0},null,2));
}else{
 if(fs.existsSync(path.join(dir,'freeze.json')))throw Error('Immutable freeze exists');
 const captures=fs.readFileSync(path.join(dir,'capture-check.md'),'utf8');if(!captures.includes('Status `PASS`')||!captures.includes('mandatory findings `[]`'))throw Error('CAPTURE_CHECK must pass');
 const diagnostics=['4A-hero-1440.png','4A-hero-768.png','4A-hero-320.png','4A-collections-768.png','assertions-red.json'].map(n=>id(path.join(dir,n)));
 json('evidence-index.json',{workset_id:'APP-000-D32-G4-V0.1',status:'READY_FOR_REVIEW',source_identity:lock.source,formal_evidence:formal.captures,capture_check:id(path.join(dir,'capture-check.md')),runtime:id(path.join(dir,'runtime-observations.json')),supplemental:id(path.join(dir,'supplemental-observations.json')),source_lock:id(path.join(dir,'source-lock.json')),input_index:id(path.join(dir,'input-index.json')),diagnostic_only_excluded_from_approval:diagnostics,route_boundary:'LOCAL_PLANNING_SIMULATION_ONLY',long_page_readable_entry:'Original full-width PNGs; inspect-image.cjs emits unscaled overlapping in-memory slices, offsets listed in capture-check.md.',mandatory_findings:[]});
 const names=['application-visual.html','visual.css','visual-assertions.cjs','supplemental-checks.cjs','render-freeze.cjs','inspect-image.cjs','finalize.cjs','4A-direction.md','input-index.json','source-lock.json','preflight.json','runtime-observations.json','supplemental-observations.json','formal-render.json','capture-check.md','evidence-index.json',...actual].sort();
 const members=names.map(n=>id(path.join(dir,n)));
 const frozen={workset_id:'APP-000-D32-G4-V0.1',page_id:'APP-000',status:'COMPLETE_VISUAL_FROZEN / READY_FOR_REVIEW',lifecycle:'DRAFT_FOR_PROJECT_CONTROL_REVIEW',author:'/root/app_gate4_execution',frozen_at:new Date().toISOString(),bundle_id:digest(members),source_identity:lock.source,members,dispatch_inputs:[id(path.join(root,'.superpowers/sdd/2026-09-20-app-000-d32-gate3-to-gate8/task-4-brief.md'))],formal_asset_count:14,diagnostic_asset_count:5,mandatory_findings:[],capture_check:'PASS',external_dependency_identity_check:'PASS',limitations:runtime.limitations,immutability:'Do not edit this bundle in place; review changes require a new revision workset.'};json('freeze.json',frozen);console.log(JSON.stringify({status:frozen.status,bundle_id:frozen.bundle_id,members:members.length,formal_assets:14},null,2));
}
