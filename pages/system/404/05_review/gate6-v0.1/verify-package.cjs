const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec';
const pkg=root+'/pages/system/404/06_handoff/SYS-404_GATE6_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md';
const card=root+'/pages/system/404/05_review/gate6-v0.1/SYS-404_GATE6_INPUT_AND_ADMISSION_CARD_V0.1.md';
const output=root+'/pages/system/404/05_review/gate6-v0.1/SYS-404_GATE6_MACHINE_VERIFICATION_V0.1.json';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const ids={
  [root+'/pages/system/404/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md']:'48520a59f8ddd dde42a78e6b8042cc1231e6e86eb90348f8ce7ff7e92c62bc12'.replace(' ',''),
  [root+'/pages/system/404/05_review/SYS-404_GATE4_TO_GATE6_HANDOFF_V0.1.md']:'3ece0fd94fcdd604391e50a989cbdda7fa92fd049835eb5a2cc773b78947c02e',
  [root+'/pages/system/404/04_planning/gate4-v0.2/SYS-404_GATE4_COMPLETE_VISUAL_V0.2.html']:'fc42439402367d16fbcba6a82a30e42c403cd5c00fc480f5b296bb1e5d2f485a',
  [root+'/pages/system/404/04_planning/gate4-v0.2/evidence-index.json']:'598c67fa0fa9f52dc24a94cda0a30f489edd4c35ad5f3cb7d279c5a442f9783b',
  [root+'/pages/system/404/05_review/gate5-independent-v0.1/SYS-404_GATE5_INDEPENDENT_VISUAL_REVIEW_V0.1.md']:'79df542e7a7daff087d0e5095fa34e7e82fe7e93c77f4082d75ccabbe852e515',
  [root+'/pages/system/404/05_review/gate5-independent-v0.1/SYS-404_GATE5_INDEPENDENT_TARGETED_RECHECK_V0.2.md']:'0416412467b2bbcbc523484fdb17fee67c75ee42930ac955536307d8c1f96991',
  [root+'/pages/system/404/05_review/SYS-404_GATE5_CONTROLLER_ACCEPTANCE_AND_VISUAL_CLOSURE_V0.1.md']:'d71c5cc767b9ca4d0d3c95cc613dbba783afe9852932a14aa8164628d525d87d',
  [root+'/docs/architecture/GATE6_SYS404_CONVTHANK_TO_GATE8_CONTROL_V1.0.md']:'33edf48dff5c5b940089c1d32ad39b23a6bcfc27426a242d34e1c5547a79fd45',
  [root+'/pages/system/404/04_planning/SYS-404_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md']:'2d95185640f1855f5c98a104434db74fdfcef2e9c0a90b36181e3e5ee1a3fcfc',
  [root+'/pages/system/404/04_planning/SYS-404_GATE2_CONTENT_CONTRACT_V0.1.md']:'542081efb4d298c5bafdd301b4d4e867f54c6fdc139ed351a47e910bd85ac254',
  [root+'/pages/system/404/05_review/SYS-404_GATE3_TO_GATE4_HANDOFF_V0.1.md']:'161dfcdf5e233fc3604e8fa26c50094e26afd46e369224f8ba3d964947e0015e',
  [root+'/docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json']:'cbd36d338412a5d311ae062a93982d9a5799e0cf3d459bcb72d41e4a155247ad'
};
let checks=[],errors=[];const check=(name,ok,detail)=>{checks.push({name,status:ok?'PASS':'FAIL',detail});if(!ok)errors.push(name)};
for(const [p,h] of Object.entries(ids))check('identity '+path.basename(p),fs.existsSync(p)&&sha(p)===h,{expected:h,actual:fs.existsSync(p)?sha(p):null});
const ptxt=fs.readFileSync(pkg,'utf8'),ctxt=fs.readFileSync(card,'utf8');
for(const [file,text] of [[pkg,ptxt],[card,ctxt]]){
  const links=[...text.matchAll(/\]\(([^)]+)\)/g)].map(m=>m[1]).filter(x=>!/^https?:/i.test(x));
  const bad=[];for(const raw of links){const clean=decodeURIComponent(raw.split('#')[0]);const resolved=path.resolve(path.dirname(file),clean);if(!fs.existsSync(resolved))bad.push({raw,resolved})}
  check('local links '+path.basename(file),bad.length===0,{count:links.length,bad});
}
const expectedAC=Array.from({length:11},(_,i)=>`SYS404-G9-AC${String(i+1).padStart(2,'0')}`);
const actualAC=[...new Set([...ptxt.matchAll(/SYS404-G9-AC\d{2}/g)].map(m=>m[0]))].sort();
check('acceptance ID exact set',JSON.stringify(actualAC)===JSON.stringify(expectedAC),{expectedAC,actualAC});
const acRows=ptxt.split(/\r?\n/).filter(x=>/^\| `SYS404-G9-AC\d{2}` \|/.test(x));
check('acceptance rows complete',acRows.length===11&&acRows.every(x=>x.split('|').length>=8),{rows:acRows.length});
const expectedDeps=Array.from({length:7},(_,i)=>`DEP0${i+1}`),actualDeps=[...new Set([...ptxt.matchAll(/DEP0[1-7]/g)].map(m=>m[0]))].sort();
check('dependency ID coverage',expectedDeps.every(x=>actualDeps.includes(x)),{actualDeps});
for(const label of ['APPROVED_CONTRACT','REFERENCE_IMPLEMENTATION','PROTOTYPE_ONLY'])check('code identity '+label,ptxt.includes('`'+label+'`'));
check('candidate status',ptxt.includes('READY_FOR_REVIEW / DRAFT_FOR_PROJECT_CONTROL_REVIEW'));
check('no D16 access/path instruction',!ptxt.includes('D:\\16Wordpress_nextjs'));
check('Gate8 evidence schema bound',ptxt.includes('gate8-evidence-manifest-v1.0')&&ptxt.includes('GATE9_PASS_OR_RETURN_NOTICE'));
check('all seven downstream dependencies retain NOT_TESTED',ptxt.includes('All seven dependencies')&&ptxt.includes('remain `NOT_TESTED`'));
const result={status:errors.length?'FAIL':'PASS',page_id:'SYS-404',dispatch:'G6-SYS404-EXEC-20260908-01',mode:'FAST_PATH',actual_author:'/root/sys404_gate4_execute',package:{path:pkg,bytes:fs.statSync(pkg).size,sha256:sha(pkg)},admission_card:{path:card,bytes:fs.statSync(card).size,sha256:sha(card)},acceptance_condition_ids:expectedAC,dependency_ids:expectedDeps,checks,errors,limitations:['File identity/link/ID/table-shape checks do not prove semantic correctness.','No D16 repository, build, runtime, receiver or production behavior was accessed or tested.'],checked_at:new Date().toISOString()};
fs.writeFileSync(output,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({status:result.status,checks:checks.length,failures:errors.length,package:result.package,acceptanceIds:expectedAC.length,dependencies:expectedDeps.length},null,2));if(errors.length)process.exitCode=1;
