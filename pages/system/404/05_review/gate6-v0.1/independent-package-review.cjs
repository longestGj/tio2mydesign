const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec';
const pkg=root+'/pages/system/404/06_handoff/SYS-404_GATE6_DEVELOPMENT_HANDOFF_PACKAGE_V0.1.md';
const output=root+'/pages/system/404/05_review/gate6-v0.1/SYS-404_GATE6_INDEPENDENT_MACHINE_REVIEW_V0.1.json';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const checks=[]; const check=(name,ok,detail)=>checks.push({name,status:ok?'PASS':'FAIL',detail});
const expected={
  [pkg]:'20306e38dece8f242ddcf37b991a8207044e57178bfb90dd2c75129172ba2c5f',
  [root+'/pages/system/404/SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md']:'48520a59f8ddddde42a78e6b8042cc1231e6e86eb90348f8ce7ff7e92c62bc12',
  [root+'/pages/system/404/05_review/SYS-404_GATE4_TO_GATE6_HANDOFF_V0.1.md']:'3ece0fd94fcdd604391e50a989cbdda7fa92fd049835eb5a2cc773b78947c02e',
  [root+'/pages/system/404/05_review/SYS-404_GATE5_CONTROLLER_ACCEPTANCE_AND_VISUAL_CLOSURE_V0.1.md']:'d71c5cc767b9ca4d0d3c95cc613dbba783afe9852932a14aa8164628d525d87d',
  [root+'/pages/system/404/04_planning/gate4-v0.2/SYS-404_GATE4_COMPLETE_VISUAL_V0.2.html']:'fc42439402367d16fbcba6a82a30e42c403cd5c00fc480f5b296bb1e5d2f485a',
  [root+'/pages/system/404/04_planning/gate4-v0.2/evidence-index.json']:'598c67fa0fa9f52dc24a94cda0a30f489edd4c35ad5f3cb7d279c5a442f9783b',
  [root+'/pages/system/404/05_review/gate5-independent-v0.1/SYS-404_GATE5_INDEPENDENT_VISUAL_REVIEW_V0.1.md']:'79df542e7a7daff087d0e5095fa34e7e82fe7e93c77f4082d75ccabbe852e515',
  [root+'/pages/system/404/05_review/gate5-independent-v0.1/SYS-404_GATE5_INDEPENDENT_TARGETED_RECHECK_V0.2.md']:'0416412467b2bbcbc523484fdb17fee67c75ee42930ac955536307d8c1f96991',
  [root+'/docs/page-briefs/SYS-404_PAGE_NOT_FOUND_BRIEF_V0.1.md']:'10e2243bc7d98b5f3b7631c68f4ceb7e4d23d8bccc6fc7c8db96e48d2898a4a1',
  [root+'/docs/architecture/SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md']:'405efc93f14b2fa4abb1b30cc06acaf60fefec05256e286b51da11e38735350d',
  [root+'/pages/system/404/04_planning/SYS-404_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md']:'2d95185640f1855f5c98a104434db74fdfcef2e9c0a90b36181e3e5ee1a3fcfc',
  [root+'/pages/system/404/04_planning/SYS-404_GATE2_CONTENT_CONTRACT_V0.1.md']:'542081efb4d298c5bafdd301b4d4e867f54c6fdc139ed351a47e910bd85ac254',
  [root+'/pages/system/404/05_review/SYS-404_GATE3_TO_GATE4_HANDOFF_V0.1.md']:'161dfcdf5e233fc3604e8fa26c50094e26afd46e369224f8ba3d964947e0015e',
  [root+'/brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md']:'75cf7bbd306a4b2bf2662414dfb28813b094b8552af8a7fe54231f3837e524ec',
  [root+'/brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md']:'1f6cb1f9913bd78aed3cab30af56ce1eeabb0c46cb354f09f05e2d00a3897e9a',
  [root+'/docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md']:'cc236f47018a68771856fdbaf5553517f63959774e0e8819130e66e2b1049f18',
  [root+'/docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md']:'c1f0011408ed1d87cff6d36c11f7e9812cc9a803431a3f7030c771faf41bf633',
  [root+'/docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md']:'9b01c3d086bcbed5cb3de2ed74ee997fc671fe21b055f458ac0b8301d99127d1',
  [root+'/brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md']:'81b73a5262269f618e8fb0667c9345279449a1bcb71647422b6a1d3f8ebfe894',
  [root+'/docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md']:'a74953971244d3b2bb43f6bc5d9b798f428d9590bab8bcb8664e1d4e9b4b31cb',
  [root+'/docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json']:'cbd36d338412a5d311ae062a93982d9a5799e0cf3d459bcb72d41e4a155247ad'
};
for(const [p,h] of Object.entries(expected)) check('identity '+path.basename(p),fs.existsSync(p)&&sha(p)===h,{expected:h,actual:fs.existsSync(p)?sha(p):null});
const text=fs.readFileSync(pkg,'utf8');
const links=[...text.matchAll(/\]\(([^)]+)\)/g)].map(m=>m[1]).filter(x=>!/^https?:/i.test(x));
const badLinks=links.map(raw=>({raw,resolved:path.resolve(path.dirname(pkg),decodeURIComponent(raw.split('#')[0]))})).filter(x=>!fs.existsSync(x.resolved));
check('all package local links resolve',badLinks.length===0,{count:links.length,bad:badLinks});
const acExpected=Array.from({length:11},(_,i)=>`SYS404-G9-AC${String(i+1).padStart(2,'0')}`);
const acFound=[...new Set([...text.matchAll(/SYS404-G9-AC\d{2}/g)].map(m=>m[0]))].sort();
check('acceptance IDs complete and unique',JSON.stringify(acFound)===JSON.stringify(acExpected),{expected:acExpected,actual:acFound});
const acRows=text.split(/\r?\n/).filter(x=>/^\| `SYS404-G9-AC\d{2}` \|/.test(x));
const parsedAC=acRows.map(row=>row.split('|').slice(1,-1).map(x=>x.trim()));
check('11 acceptance rows have six substantive columns',parsedAC.length===11&&parsedAC.every(x=>x.length===6&&x.every(Boolean)),{rows:parsedAC.length,columnCounts:parsedAC.map(x=>x.length)});
check('each AC names Gate 8 and Gate 9 ownership/stage',parsedAC.every(x=>/Gate 8/.test(x[5])&&/Gate 9/.test(x[5])),parsedAC.map(x=>({id:x[0],owner:x[5]})));
const depRows=text.split(/\r?\n/).filter(x=>/^\| `DEP0[1-7]` \|/.test(x));
const depIds=depRows.map(x=>x.split('|')[1].trim().replaceAll('`',''));
check('DEP01-DEP07 exact row set',JSON.stringify(depIds)===JSON.stringify(['DEP01','DEP02','DEP03','DEP04','DEP05','DEP06','DEP07']),depIds);
check('dependency rows contain requirement/evidence owner-stage and block layer',depRows.every(x=>x.split('|').slice(1,-1).map(y=>y.trim()).length===4&&x.split('|').slice(1,-1).every(y=>y.trim())),{rows:depRows.length});
const b=fs.readFileSync(root+'/pages/system/404/04_planning/SYS-404_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md','utf8');
for(const exact of ['404 · PAGE NOT FOUND','Let’s help you find what you need.','The page you’re looking for may have moved or is no longer available. You can continue by exploring our titanium dioxide products, requesting technical documents, or contacting our team.']) check('approved B source contains '+exact.slice(0,28),b.includes(exact),exact);
check('package preserves B as sole editable authority and maps exact BC range',text.includes('Only editable visible-copy authority; preserve BC-01–BC-08 exactly')&&text.includes('The exact visible words remain in Gate 2 B')&&text.includes('Exact BC-01–BC-08'),null);
for(const [label,target] of [['Explore Products','/products/'],['Go to Homepage','/'],['Request Documents','/request-documents/'],['Contact Our Team','/contact/'],['Request a Quote','/request-a-quote/']]) check('action mapping '+label,text.includes(`| ${label} | \`${target}\``),{label,target});
for(const label of ['APPROVED_CONTRACT','REFERENCE_IMPLEMENTATION','PROTOTYPE_ONLY']) check('code identity label '+label,text.includes('`'+label+'`'),label);
check('frozen HTML explicitly prototype only',/Gate 4 frozen HTML[^\n]*\n?[^\n]*\| `PROTOTYPE_ONLY` \|/.test(text),null);
check('page identity and no indexable /404 route',text.includes('`SYS-404`, EN/GLOBAL, `RUNTIME_FALLBACK`, `site_scope=tio2-my`, `NO_PRIMARY_KEYWORD`')&&text.includes('no separately indexable `/404/`'),null);
check('real 404 and valid-route protection represented',text.includes('returns HTTP `404`')&&text.includes('Registered valid routes')&&text.includes('not intercepted'),null);
check('SEO boundary represented',text.includes('`noindex, follow`')&&text.includes('exclude from every sitemap')&&text.includes('Emit no canonical')&&text.includes('Emit no page-specific Schema')&&text.includes('Hreflang is not applicable'),null);
check('five-target no-context boundary represented',text.includes('No unknown-path, query or fragment context is forwarded')&&text.includes('click is not a submission or conversion'),null);
check('shared chrome consent and legal order represented',text.includes('Production Logo, fixed RFQ, complete shared Header/Menu/Footer/Consent')&&text.includes('copyright-first exact legal order/routes/button; no Terms'),null);
check('responsive accessibility states represented',text.includes('1440, 768 and 390')&&text.includes('200% zoom')&&text.includes('≥44×44 at 390')&&text.includes('Menu 768/390')&&text.includes('Cookie all widths'),null);
check('scope isolation breadth represented',text.includes('route, query, cache, menu, SEO, form exits, media, shared components and analytics')&&text.includes('no cross-scope fallback'),null);
check('analytics consent and sanitization represented',text.includes('synthetic secret-like query proving omission')&&text.includes('consent-state matrix')&&text.includes('no remarketing/new verifier')&&text.includes('never becomes form success'),null);
check('excluded feature boundary represented',text.includes('No search, breadcrumb, FAQ, recommendation, help center, form, receiver, upload, page-owned media, product/document list, automatic redirect, dynamic promise or page-local legal copy'),null);
check('N/A form/media distinction retained while shared states remain applicable',text.includes('Page-specific form fields, receiver, submission, uploads and media are `NOT_APPLICABLE`')&&text.includes('Mobile Menu applies at 768 and 390; Cookie Settings applies at all three'),null);
check('Gate8 manifest schema and held runtime required',text.includes('gate8-evidence-manifest-v1.0')&&text.includes('GATE9_PASS_OR_RETURN_NOTICE')&&text.includes('all eleven acceptance IDs'),null);
check('no prototype-as-production claim',text.includes('Local checks/simulations do not prove production')&&text.includes('local simulation cannot close a production condition')&&text.includes('does not prove the real 404 response'),null);
check('candidate status and stopping boundary',text.includes('READY_FOR_REVIEW / DRAFT_FOR_PROJECT_CONTROL_REVIEW')&&text.includes('not independently approved, closed, handed off or implemented'),null);
const failures=checks.filter(x=>x.status==='FAIL');
const result={dispatch:'G6-SYS404-REVIEW-20260908-01',mode:'INDEPENDENT_REVIEW',page_id:'SYS-404',reviewer:'/root/sys404_gate5_review',package_author:'/root/sys404_gate4_execute',independence:true,package:{path:pkg,bytes:fs.statSync(pkg).size,sha256:sha(pkg)},checks,check_count:checks.length,failures:failures.length,result:failures.length?'CHANGES_REQUIRED':'REVIEW_PASS',lifecycle:failures.length?'DRAFT_FOR_PROJECT_CONTROL_REVIEW':'PROJECT_CONTROL_REVIEW_PASS',required_findings:failures.length,limitations:['Structural and identity checks do not prove Gate 8 implementation or runtime behavior.','No Gate 4 visual rerender, D16 access, implementation, build, runtime, deployment or publication occurred.'],checked_at:new Date().toISOString()};
fs.writeFileSync(output,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({result:result.result,lifecycle:result.lifecycle,checks:result.check_count,failures:result.failures,output},null,2));
if(failures.length)process.exitCode=1;
