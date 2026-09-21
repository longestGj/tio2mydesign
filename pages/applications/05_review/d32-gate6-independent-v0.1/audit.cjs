// Independent package audit. Reads submitted inputs; writes only this review's observations.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const cp = require('child_process');
const root = 'D:/23MySec';
const out = path.join(root, 'pages/applications/05_review/d32-gate6-independent-v0.1/observations.json');
const pkgPath = 'pages/applications/06_handoff/APP-000_D32_GATE6_HANDOFF_PACKAGE_V0.1.md';
const resolve = p => path.isAbsolute(p) ? p : path.join(root,p);
const read = p => fs.readFileSync(resolve(p),'utf8').replace(/^\uFEFF/,'');
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const checks = [], identities = [];
function check(id, ok, detail) { checks.push({id, pass:!!ok, detail}); }
function identity(record, context) {
  let actual;
  try { const data=fs.readFileSync(resolve(record.path)); actual={path:record.path,bytes:data.length,sha256:sha(data)}; }
  catch(error) { actual={path:record.path,error:error.message}; }
  identities.push({context,expected:record,actual});
  check('identity:'+context+':'+record.path,actual.sha256===record.sha256.toLowerCase() && (record.bytes===undefined||actual.bytes===record.bytes),actual);
}
const exact = [
  [pkgPath,'723ba66bca86b5dd27a3151cfdb9910ea2469df46e9330567078b37fc188686d'],
  ['pages/applications/06_handoff/APP-000_D32_GATE6_PACKAGE_CHECK_V0.1.json','dcf3397b90424c2c32d84b27e5d21017431a3c04991fa4e1c835b97f9524f146'],
  ['pages/applications/05_review/APP-000_D32_GATE6_LINK_PLANNING_REVIEW_V0.1.md','f66d4aea758627a41e9fbdbb5b1d67256bd5ae28e79913bd504ad9e8ecb5ff5a'],
  ['.superpowers/sdd/2026-09-20-app-000-d32-gate3-to-gate8/task-6-execution-report.md','c27e305038092ec12ee8d095d46b9b8bc9559bbcb76521fcdb72142410415670']
];
for(const [p,h] of exact) identity({path:p,sha256:h},'submission');
const pkg=read(pkgPath);
const reg=JSON.parse(pkg.match(/```json\s*([\s\S]*?)\s*```/)[1]);
const sources=new Map(reg.sources.map(s=>[s.id,s]));
check('source-id-uniqueness',sources.size===reg.sources.length,{count:sources.size});
for(const s of reg.sources) identity(s,'direct:'+s.id);
const input=JSON.parse(read(sources.get('INPUTS').path));
const freeze=JSON.parse(read(sources.get('FREEZE').path));
const lock=JSON.parse(read('pages/applications/04_planning/d32-gate4-v0.1/source-lock.json'));
function nestedIdentities(node,context) {
  if(Array.isArray(node)) return node.forEach((n,i)=>nestedIdentities(n,context+'/'+i));
  if(!node||typeof node!=='object')return;
  if(typeof node.path==='string'&&typeof node.sha256==='string')identity(node,context);
  for(const [k,v]of Object.entries(node))if(v&&typeof v==='object')nestedIdentities(v,context+'/'+k);
}
nestedIdentities(input,'visual-input'); nestedIdentities(freeze,'visual-freeze'); nestedIdentities(lock,'visual-source-lock');
check('bundle-recompute','sha256:'+sha(JSON.stringify(freeze.members))===reg.bundle_id,{recomputed:'sha256:'+sha(JSON.stringify(freeze.members))});
check('accepted-bundle',reg.bundle_id==='sha256:8275ccefa106ffca6186651b705f9a77bee9fe2a17a90981a3ecd2182a5ad618',reg.bundle_id);
check('visual-graph-shape',input.inputs.length===35&&input.dependencies.length===10&&freeze.members.length===30&&freeze.source_identity.length===2&&freeze.formal_asset_count===14,{inputs:input.inputs.length,dependencies:input.dependencies.length,members:freeze.members.length,source:freeze.source_identity.length,formal:freeze.formal_asset_count});
for(const id of ['MANIFEST','CLOSURE','G5','G4HANDOFF'])check('bundle-binding:'+id,read(sources.get(id).path).includes(reg.bundle_id),sources.get(id).path);
check('review-author-separation',reg.author==='/root/app_gate6_execution' && reg.author!=='/root/app_gate6_independent_review',reg.author);
check('not-approved-or-dispatched',reg.gate6_closed===false&&reg.gate8_dispatched===false&&reg.gate8_implemented===false&&reg.lifecycle==='DRAFT_FOR_PROJECT_CONTROL_REVIEW',reg.lifecycle);
check('page-identity',reg.page_id==='APP-000'&&reg.site_scope==='tio2-my'&&reg.language==='EN'&&reg.route==='/applications/'&&reg.canonical==='https://tio2products.com/applications/',{page:reg.page_id,scope:reg.site_scope,canonical:reg.canonical});
check('shape',JSON.stringify(reg.shape)===JSON.stringify({modules:5,steps:3,collections:6,relations:30,relation_counts:[8,8,7,4,2,1],process:0,faq:0}),reg.shape);
const acs=new Map(reg.acceptance.map(a=>[a.id,a])); const deps=new Map(reg.dependencies.map(d=>[d.id,d]));
check('ac-set',acs.size===22&&Array.from({length:22},(_,i)=>'APP000-G9-'+String(i+1).padStart(2,'0')).every(id=>acs.has(id)),[...acs.keys()]);
check('dependency-set',deps.size===15&&Array.from({length:15},(_,i)=>'APP000-G6-D'+String(i+1).padStart(2,'0')).every(id=>deps.has(id)),[...deps.keys()]);
for(const a of reg.acceptance){
  check('ac-required-fields:'+a.id,['precondition','expected','evidence','failure','owner','stage','dependency'].every(k=>typeof a[k]==='string'&&a[k].trim().length>0)&&a.sources.length>0,a);
  check('ac-sources:'+a.id,a.sources.every(s=>sources.has(s)),a.sources);
  check('ac-dependency:'+a.id,deps.has(a.dependency)&&deps.get(a.dependency).acceptance.includes(a.id),a.dependency);
  check('ac-not-tested:'+a.id,a.status==='NOT_TESTED',a.status);
}
const edges=[];
for(const d of reg.dependencies){
  check('dep-required-fields:'+d.id,['requirement','owner','blocking_layer','status','closure'].every(k=>typeof d[k]==='string'&&d[k].length>0)&&d.sources.length>0&&d.acceptance.length>0,d);
  check('dep-source-ac:'+d.id,d.sources.every(s=>sources.has(s))&&d.acceptance.every(a=>acs.has(a)),{sources:d.sources,acceptance:d.acceptance});
  check('dep-layer-open:'+d.id,['PAGE_GATE9','RECHECK_SCOPE','INTEGRATION','RELEASE'].includes(d.blocking_layer)&&d.status.startsWith('OPEN'),{layer:d.blocking_layer,status:d.status});
  for(const id of d.acceptance)edges.push({dependency:d.id,acceptance:id,source_intersection:d.sources.filter(s=>acs.get(id).sources.includes(s))});
}
// Parse source CSV independently rather than invoke author's checker.
function csv(text){let rows=[],row=[],field='',quoted=false;for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){field+='"';i++;}else quoted=!quoted;}else if(c===','&&!quoted){row.push(field);field='';}else if(c==='\n'&&!quoted){row.push(field.replace(/\r$/,''));if(row.some(Boolean))rows.push(row);row=[];field='';}else field+=c;}if(field||row.length){row.push(field);rows.push(row);}const header=rows.shift();return rows.map(r=>Object.fromEntries(header.map((h,i)=>[h,r[i]])));}
const matrix=csv(read(sources.get('MATRIX').path));
const approved=matrix.filter(r=>r.application_status==='VERIFIED_FOR_PUBLIC_MAPPING');
check('matrix-identity-and-count',matrix.length===84&&approved.length===30&&new Set(matrix.map(r=>r.relation_id)).size===84,{rows:matrix.length,approved:approved.length});
const b=read(sources.get('B').path);
const collections=['Coatings','Plastics','Masterbatch','Printing Inks','Paper','Specialty Materials'];
const relationMap=[];
for(const c of collections){
 const part=b.split('### '+c+'\n')[1].split(/\n(?:###|##) /)[0];
 const grades=part.match(/(?:M-\d+|CR-901)/g).filter((g,i,all)=>all.indexOf(g)===i);
 const actual=approved.filter(r=>r.application===c).map(r=>r.grade);
 check('relations-source-set:'+c,JSON.stringify([...grades].sort())===JSON.stringify([...actual].sort()),{B:grades,matrix:actual});
 const row=pkg.split('\n').find(l=>l.startsWith('| '+c+' /'));
 const mapped=row.split('|')[2].trim().split(', ');
 check('relations-package-order:'+c,JSON.stringify(mapped)===JSON.stringify(grades),{package:mapped,B:grades});
 relationMap.push({collection:c,grades});
}
check('all-grade-distinct',new Set(approved.map(r=>r.grade)).size===14,{count:new Set(approved.map(r=>r.grade)).size});
check('no-specialty-invention',pkg.includes('Specialty Materials has no child Application URL.'),null);
check('origin-authority-present',read(sources.get('DOMAIN').path).includes('正式的域名。')&&read(sources.get('DOMAIN').path).includes('tio2products.com'),sources.get('DOMAIN').path);
const conventions={
 'wordpress-boundary':['D32RULES','WordPress、PHP、MariaDB'],
 'strict-schema':['D32VALIDATION','array_diff_key($schema,$fields)'],
 'existing-scope-resolver':['D32PRODUCTMODEL',"get_post_meta($page->ID, '_tio2_site_scope', true) !== 'tio2-my'"],
 'existing-id-resolver':['D32PRODUCTMODEL',"get_post_meta($page->ID, '_tio2_page_id', true) !== $route['page_id']"],
 'products-app-dependency':['D32PRODUCTMODEL',"'APP-000' => ['page_id' => 'APP-000'"],
 'product-shaped-hero':['D32HERO',"$hero['summary_items']"],
 'home-module-not-app-hub':['D32HOMESECTION',"tio2_field('applications.heading.1')"],
 'public-domain-config':['D32SEO','TIO2_PUBLIC_URL'],
 'public-domain-fallback':['D32SEO','https://tio2products.com/'],
 'artifact-marker':['D32IDENTITY','tio2-artifact'],
 'content-marker':['D32IDENTITY','tio2-products-content-sha256'],
 'managed-migration':['D32PRODUCTMODEL','function tio2_products_migrate'],
 'migration-backup':['D32PRODUCTMODEL','TIO2_PRODUCTS_BACKUP_OPTION'],
 'admin-capability':['D32ADMIN',"current_user_can('manage_options')"],
 'revision-concurrency':['D32ADMIN','products_revision'],
 'dedicated-evidence':['D32EVIDENCESCRIPT','docs/verification/products']
};
for(const [id,[source,needle]]of Object.entries(conventions))check('d32:'+id,read(sources.get(source).path).includes(needle),{source,needle});
const schema=JSON.parse(read(sources.get('SCHEMA').path));
check('manifest-shape-mapping',schema.additionalProperties===false&&schema.properties.runtime.properties.require_build_marker.type==='boolean'&&schema.properties.runtime.properties.checks.items.properties.contains.items.type==='string',null);
check('rollback-not-top-level',!('rollback_target'in schema.properties)&&pkg.includes('not unsupported rollback_target property'),null);
for(const plane of ['query','route','cache','menu','seo','form','media'])check('isolation:'+plane,acs.get('APP000-G9-15').expected.toLowerCase().includes(plane),null);
for(const n of [16,17])check('future-integration:'+n,acs.get('APP000-G9-'+n).stage==='INTEGRATION'&&acs.get('APP000-G9-'+n).precondition.includes('Only when'),null);
const d32='D:/32Wordpress_new';
const git=args=>cp.execFileSync('git',['-C',d32,...args],{encoding:'utf8'}).trim();
const snapshot={head:git(['rev-parse','HEAD']),branch:git(['branch','--show-current']),status:git(['status','--short']),app_template_exists:fs.existsSync(path.join(d32,'wp-content/themes/tio2-malaysia/page-applications.php')),app_model_exists:fs.existsSync(path.join(d32,'wp-content/plugins/tio2-content/includes/applications.php'))};
check('d32-snapshot-head',snapshot.head==='1225895256db65ebf4f88ad3a0dca4b27777bd29',snapshot);
for(const [p,h]of exact)identity({path:p,sha256:h},'end-submission-drift');
const failed=checks.filter(c=>!c.pass);
const result={reviewer:'/root/app_gate6_independent_review',dispatch:'APP000-D32-G6-INDEPENDENT-20260920-01',mode:'INDEPENDENT_REVIEW / INITIAL',generated_at:new Date().toISOString(),node:process.version,status:failed.length?'AUDIT_FAILURE':'AUDIT_PASS',summary:{assertions:checks.length,passed:checks.length-failed.length,failed:failed.length,direct_sources:reg.sources.length,identity_comparisons:identities.length,unique_identity_paths:new Set(identities.map(x=>x.actual.path)).size,acceptance:acs.size,dependencies:deps.size,dependency_acceptance_edges:edges.length},submitted:exact.map(([path,sha256])=>({path,sha256})),d32:snapshot,relationship_map:relationMap,dependency_edges:edges,checks,identities,limitations:['Machine assertions establish identity, set/order, references and inspected repository conventions only; independent semantic conclusions are in the signed review report.','No D32 runtime/test/database write, author checker invocation or visual rerender performed.']};
fs.writeFileSync(out,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({status:result.status,summary:result.summary,failed},null,2));
process.exitCode=failed.length?1:0;
