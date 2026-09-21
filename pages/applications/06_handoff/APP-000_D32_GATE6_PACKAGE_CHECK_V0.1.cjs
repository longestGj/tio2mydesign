'use strict';
// Package identity/structure only; no production code or independent semantic review.
// The only filesystem write is the authorized package-check JSON.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'../../..');
const packagePath=path.join(__dirname,'APP-000_D32_GATE6_HANDOFF_PACKAGE_V0.1.md');
const outputPath=path.join(__dirname,'APP-000_D32_GATE6_PACKAGE_CHECK_V0.1.json');
const sha=v=>crypto.createHash('sha256').update(v).digest('hex');
const read=p=>fs.readFileSync(path.isAbsolute(p)?p:path.join(root,p));
const json=p=>JSON.parse(read(p).toString('utf8').replace(/^\uFEFF/,''));
const checks=[],identities=[];
function check(id,condition,detail){checks.push({id,pass:Boolean(condition),detail});}
function identity(r,group){
 try{const b=read(r.path),actual=sha(b),valid=actual===r.sha256&&b.length===r.bytes;
 identities.push({group,path:r.path,expected_sha256:r.sha256,actual_sha256:actual,expected_bytes:r.bytes,actual_bytes:b.length,pass:valid});
 check('identity:'+group+':'+r.path,valid,'Frozen bytes and SHA-256');
 }catch(e){check('identity:'+group+':'+r.path,false,e.message);}
}
const text=fs.readFileSync(packagePath,'utf8');
const fence=String.fromCharCode(96).repeat(3);
const matches=[...text.matchAll(new RegExp(fence+'json\\r?\\n([\\s\\S]*?)\\r?\\n'+fence,'g'))];
check('one-machine-register',matches.length===1,'Single normative register');
const c=JSON.parse(matches[0][1]),byId=Object.fromEntries(c.sources.map(s=>[s.id,s]));
const st=id=>read(byId[id].path).toString('utf8');
check('unique-source-ids',new Set(c.sources.map(x=>x.id)).size===c.sources.length,c.sources.length);
check('no-D16-current-evidence',c.sources.every(s=>!/(?:D:[/\\]16Wordpress|d16.*(?:runtime|evidence))/i.test(s.path)),'Reject D16 current implementation/evidence');
check('legacy-contract-role',byId.LEGACYIDS.role==='HISTORICAL_CONTRACT_IDS_ONLY','Historical contract continuity only');
check('D32-read-only-role',c.sources.filter(x=>/^D:[/\\]32Wordpress_new/i.test(x.path)).every(x=>x.role==='READ_ONLY_CONVENTION'),'Not APP implementation proof');
for(const s of c.sources)identity(s,'direct:'+s.id);
const f=json(byId.FREEZE.path),ix=json(byId.INPUTS.path);
for(const s of f.members)identity(s,'freeze-member');
for(const s of f.source_identity)identity(s,'freeze-source');
for(const s of f.dispatch_inputs)identity(s,'G4-dispatch');
for(const s of ix.inputs)identity(s,'inherited-input');
for(const s of ix.dependencies)identity(s,'inherited-dependency');
identity(ix.authority_manifest,'G4-authority');
const lock=json(f.members.find(x=>x.path.endsWith('/source-lock.json')).path);
for(const s of [...lock.source,...lock.dependencies,...lock.inputs])identity(s,'source-lock');
check('lock-index-parity',JSON.stringify(lock.inputs)===JSON.stringify(ix.inputs)&&JSON.stringify(lock.dependencies)===JSON.stringify(ix.dependencies),'Complete graph');
const actualBundle='sha256:'+sha(JSON.stringify(f.members));
check('bundle-digest',actualBundle===f.bundle_id&&actualBundle===c.bundle_id,actualBundle);
check('formal-count',f.formal_asset_count===14&&f.members.filter(x=>x.path.endsWith('.png')).length===14,14);
check('bundle-member-count',f.members.length===30,30);
check('source-counts',ix.inputs.length===35&&ix.dependencies.length===10&&f.source_identity.length===2,'35 / 10 / 2');
check('accepted-input',c.accepted_visual_input==='CLOSURE'&&st('MANIFEST').includes(byId.CLOSURE.path),'Current Manifest unique input');
check('closure-bundle',st('CLOSURE').includes(c.bundle_id),'Exact approved bundle');
check('closure-authority',st('CLOSURE').includes('APP000-D32-G45-PC-CLOSURE-20260920-01')&&st('CLOSURE').includes('USER_STANDING_AUTHORITY'),'Controller decision/authority');
const g5=json(byId.G5JSON.path);
check('independent-chain',g5.reviewer==='/root/app_gate5_independent_review'&&g5.reviewer!==c.author&&f.author!==g5.reviewer&&g5.bundle===c.bundle_id,'G4 author / G5 reviewer / G6 author');
check('G5-result',st('G5').includes('REVIEW_PASS')&&st('G5').includes('245'),'Inherited only');
for(const id of ['AGENT','CONSISTENCY','DELIVERY','EXECREVIEW','INTAKE'])check('method:'+id,st('BASELINE').includes(byId[id].sha256),'Current approved method hash');
check('authorization',c.mode==='EXECUTE'&&c.path==='ESCALATED_PATH'&&c.gate6_closed===false&&c.gate8_dispatched===false&&c.gate8_implemented===false&&c.lifecycle==='DRAFT_FOR_PROJECT_CONTROL_REVIEW','No closure/dispatch/implementation');
check('no-affirmative-dispatch-prose',!/(?:Gate 8 (?:is|was|has been) (?:already )?(?:dispatched|implemented)|Gate 8已(?:派发|实现))/.test(text),'Reject affirmative claims');
check('page-tuple',c.page_id==='APP-000'&&c.site_scope==='tio2-my'&&c.language==='EN'&&c.route==='/applications/','Authorized tuple');
check('canonical',c.canonical==='https://tio2products.com/applications/'&&st('DOMAIN').includes('正式的域名')&&st('D32SEO').includes('TIO2_PUBLIC_URL'),'Current domain decision/config');
check('shape',JSON.stringify(c.shape)===JSON.stringify({modules:5,steps:3,collections:6,relations:30,relation_counts:[8,8,7,4,2,1],process:0,faq:0}),'5/3/6/30/0/0');
const ac=c.acceptance.map(x=>x.id),deps=c.dependencies.map(x=>x.id);
check('acceptance-IDs',new Set(ac).size===22&&ac.length===22&&ac.every((x,i)=>x==='APP000-G9-'+String(i+1).padStart(2,'0')),'01–22');
check('dependency-IDs',new Set(deps).size===15&&deps.length===15&&deps.every((x,i)=>x==='APP000-G6-D'+String(i+1).padStart(2,'0')),'D01–D15');
for(const a of c.acceptance){
 check(a.id+':fields',['precondition','expected','evidence','failure','owner','stage'].every(k=>typeof a[k]==='string'&&a[k].length>10),'Full observable chain');
 check(a.id+':sources',a.sources.length>0&&a.sources.every(id=>byId[id]),a.sources);
 check(a.id+':dependency',deps.includes(a.dependency),a.dependency);
 check(a.id+':not-tested',a.status==='NOT_TESTED','No runtime claim');
}
for(const d of c.dependencies){
 check(d.id+':fields',['requirement','owner','blocking_layer','status','closure'].every(k=>typeof d[k]==='string'&&d[k].length>0),'Owner/closure present');
 check(d.id+':mapped',d.acceptance.length>0&&d.acceptance.every(id=>ac.includes(id))&&d.sources.every(id=>byId[id]),d.acceptance);
 check(d.id+':open',d.status.startsWith('OPEN_'),d.status);
 check(d.id+':blocking',['RECHECK_SCOPE','PAGE_GATE9','INTEGRATION','RELEASE'].includes(d.blocking_layer),d.blocking_layer);
}
function csv(s){const rows=[];let row=[],field='',quoted=false;
 for(let i=0;i<s.length;i++){const ch=s[i];
 if(ch==='"'){if(quoted&&s[i+1]==='"'){field+='"';i++;}else quoted=!quoted;}
 else if(ch===','&&!quoted){row.push(field);field='';}
 else if((ch==='\n'||ch==='\r')&&!quoted){if(ch==='\r'&&s[i+1]==='\n')i++;row.push(field);if(row.some(Boolean))rows.push(row);row=[];field='';}
 else field+=ch;}if(field||row.length){row.push(field);rows.push(row);}return rows;}
const expected=[
 ['Coatings',['M-350','M-510','M-896','M-996','M-2196','M-895','M-52','M-2377']],
 ['Plastics',['M-350','M-510','M-200','M-108','M-210','M-340','M-886','M-2377']],
 ['Masterbatch',['M-510','M-200','M-108','M-210','M-340','M-886','M-2377']],
 ['Printing Inks',['M-350','M-510','M-52','M-2377']],['Paper',['M-350','M-2377']],['Specialty Materials',['CR-901']]
];
const rows=csv(st('MATRIX')),header=rows.shift();
const eligible=rows.map(r=>Object.fromEntries(header.map((h,i)=>[h,r[i]]))).filter(r=>r.application_public_behavior==='RENDER_NEUTRAL_MAPPING');
check('matrix-30',eligible.length===30,'Approved relation set');
for(const [name,grades]of expected){
 const actual=eligible.filter(r=>r.application===name).map(r=>r.grade).sort();
 check('relations:'+name,JSON.stringify(actual)===JSON.stringify([...grades].sort()),grades);
 const table=text.split('\n').find(l=>l.startsWith('| '+name+' /'));
 check('package-order:'+name,table&&table.includes(grades.join(', ')),grades);
}
const html=read(f.source_identity[0].path).toString('utf8');
check('prototype-relations',[...html.matchAll(/<li data-grade=/g)].length===30,'Source count only, not runtime');
check('prototype-steps',[...html.matchAll(/data-evaluation-step/g)].length===3,'Source count only');
check('seven-planes',['query','route','cache','menu','seo','form','media'].every(x=>c.acceptance.find(a=>a.id==='APP000-G9-15').expected.toLowerCase().includes(x)),'Named scope planes (case-insensitive prose)');
check('mandatory-zero',Array.isArray(c.mandatory_findings)&&c.mandatory_findings.length===0,'Author semantic check separate');
const failed=checks.filter(x=>!x.pass);
const result={
 checker_version:'APP000-D32-G6-CHECK-V0.1',generated_at:new Date().toISOString(),status:failed.length?'FAIL':'PASS',
 scope:'AUTHOR_PACKAGE_IDENTITY_AND_STRUCTURE_ONLY_NOT_INDEPENDENT_REVIEW_NOT_D32_RUNTIME',
 package:{id:c.package_id,path:path.relative(root,packagePath).replaceAll('\\','/'),bytes:fs.statSync(packagePath).size,sha256:sha(fs.readFileSync(packagePath))},
 checker:{path:path.relative(root,__filename).replaceAll('\\','/'),sha256:sha(fs.readFileSync(__filename))},
 counts:{checks:checks.length,passed:checks.length-failed.length,failed:failed.length,direct_sources:c.sources.length,unique_input_paths:new Set(identities.map(x=>x.path)).size,identity_comparisons:identities.length,acceptance_ids:ac.length,dependency_ids:deps.length,formal_assets:14,bundle_members:30},
 bundle_id:c.bundle_id,mandatory_findings:failed,checks,identities,
 limitations:['Hashes/structure do not establish semantic correctness.','G4/G5 inherited only for immutable D23 planning object; no re-render.','No D32 APP implementation/runtime/migration/browser/device/AT/receiver/integration/release tested.','No independent PASS, Controller closure or Gate8 dispatch.']
};
fs.writeFileSync(outputPath,JSON.stringify(result,null,2)+'\n','utf8');
console.log(JSON.stringify({status:result.status,...result.counts,package_sha256:result.package.sha256,failures:failed},null,2));
process.exitCode=failed.length?1:0;
