// Read-only targeted review of DOC-D32-G3-R01; output stays in reviewer directory.
const fs=require('fs'),path=require('path'),crypto=require('crypto'),{pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out=__dirname,root=path.resolve(out,'../../../..'),prior=path.join(root,'pages/documents/04_planning/d32-gate3-v0.1'),next=path.join(root,'pages/documents/04_planning/d32-gate3-v0.2');
const hash=x=>crypto.createHash('sha256').update(x).digest('hex'),sha=p=>hash(fs.readFileSync(p)),read=p=>JSON.parse(fs.readFileSync(p)),text=p=>fs.readFileSync(p,'utf8');
const checks=[],identities=[],parity=[];const check=(id,pass,actual)=>checks.push({id,pass:!!pass,actual});
const manifest=read(path.join(next,'DOC-000_D32_ASSET_MANIFEST_V0.2.json')),binding=read(path.join(next,'DOC-000_D32_INPUT_BINDING_V0.2.json')),freeze=read(path.join(next,'DOC-000_D32_FREEZE_V0.2.json')),oldBinding=read(path.join(prior,'DOC-000_D32_INPUT_BINDING_V0.1.json')),oldManifest=read(path.join(prior,'DOC-000_D32_ASSET_MANIFEST_V0.1.json'));
function bind(row,group){const actual={bytes:fs.statSync(row.path).size,sha256:sha(row.path)};identities.push({group,path:row.path,expected:row,actual,pass:actual.sha256===row.sha256&&(!('bytes'in row)||actual.bytes===row.bytes)});}
for(const r of manifest.files)bind(r,'new_core');for(const r of [...binding.inputs,...binding.shared,...freeze.sources,...freeze.dependencies,freeze.input_binding,freeze.preflight,freeze.prior_freeze])bind(r,'new_binding_freeze');
const digest=hash(manifest.files.map(r=>`${r.path}\t${r.bytes}\t${r.sha256}\n`).join(''));
check('new_bundle_18_identities',manifest.files.length===18&&identities.filter(r=>r.group==='new_core').every(r=>r.pass),manifest.files.length);
check('new_bundle_digest',digest==='fa05968ccd064909e8c74fa32a54c5ef28d4fd9ff6bc065ec229cb3d0d8abbf2'&&digest===manifest.bundle_sha256,digest);
check('new_source_hash',sha(path.join(next,'DOC-000_D32_structure.html'))==='2fa09d30d87870645752cde4f085d5113b63c97ef333534d184416d8cb6f0723');
check('binding_freeze_dependencies_match',identities.every(r=>r.pass),identities.filter(r=>!r.pass));
const expected='Documents for Product Qualification | TiO2 Malaysia',oldHtml=text(path.join(prior,'DOC-000_D32_structure.html')),newHtml=text(path.join(next,'DOC-000_D32_structure.html'));
check('HTML_exact_single_title_delta',newHtml===oldHtml.replace('<title>Documents for Product &amp; Supplier Qualification | TiO2 Malaysia</title>','<title>'+expected+'</title>'));
check('body_including_inline_shared_bytes_unchanged',newHtml.slice(newHtml.indexOf('<body>'))===oldHtml.slice(oldHtml.indexOf('<body>')));
for(const f of ['DOC-000_D32_structure.css','DOC-000_D32_behavior.js'])check(f+'_byte_identical',sha(path.join(next,f))===sha(path.join(prior,f)),sha(path.join(next,f)));
check('shared_identity_array_unchanged',JSON.stringify(binding.shared)===JSON.stringify(oldBinding.shared));
const seoPath=path.join(root,'pages/documents/06_handoff/DOC-000_GATE7_SEO_GEO_SCHEMA_SOCIAL_CONTRACT_V0.1.md').replaceAll('\\','/'),overlayPath=path.join(root,'docs/architecture/TIO2_MY_23_PAGE_PUBLICATION_CONTRACT_FINALIZATION_V1.0.md').replaceAll('\\','/');
check('approved_metadata_source_bound',[seoPath,overlayPath].every(p=>binding.inputs.some(r=>r.path===p&&r.sha256===sha(p))));
check('title_equals_approved_source',text(seoPath).match(/\| `<title>` \/ SEO title \| `([^`]+)`/)[1]===expected);
const builder=text(path.join(next,'DOC-000_D32_build.cjs'));
check('generator_not_H1_inference',builder.includes("const seoTitle=seoSource.match(")&&builder.includes('<title>${esc(seoTitle)}</title>')&&!builder.includes('<title>Documents for Product &amp; Supplier Qualification'));
const preservation=read(path.join(next,'diagnostic_support/PRESERVATION_AND_PARITY.json')),red=read(path.join(next,'diagnostic_support/TITLE_RED_V01.json'));
for(const r of red.priorFiles)bind(r,'V01_preservation');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
check('all_51_prior_files_preserved',red.priorFiles.length===51&&walk(prior).length===51&&identities.filter(r=>r.group==='V01_preservation').every(r=>r.pass)&&preservation.preservation.length===51);
const oldReview=read(path.join(out,'DOC-000_D32_INDEPENDENT_OBSERVATIONS.json'));
for(const r of oldReview.identities)bind(r,'prior_independent_record');
check('prior_independent_183_valid_unchanged',oldReview.passed===183&&oldReview.failed===1&&oldReview.assertions.filter(a=>!a.pass)[0].id==='approved_seo_title_preserved'&&identities.filter(r=>r.group==='prior_independent_record').every(r=>r.pass));
check('8_formal_assets_inherited_exactly',JSON.stringify(manifest.files.filter(r=>r.path.endsWith('.png')))===JSON.stringify(oldManifest.files.filter(r=>r.path.endsWith('.png'))));
const green=read(path.join(next,'diagnostic_support/GREEN.json'));check('author140_actual_record',green.status==='PASS'&&green.results.length===140&&green.results.every(r=>r.pass));
(async()=>{const browser=await chromium.launch({headless:true});
for(const width of [1440,768,390]){const p=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});const errors=[];p.on('pageerror',e=>errors.push(e.message));await p.goto(pathToFileURL(path.join(next,'DOC-000_D32_structure.html')).href);await p.evaluate(()=>document.fonts.ready);await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));const actualTitle=await p.title(),h1=await p.locator('h1').innerText();check(width+'_runtime_title_H1',actualTitle===expected&&h1==='Documents for Product & Supplier Qualification',{actualTitle,h1});const buffer=await p.screenshot({fullPage:true});const oldPng=oldManifest.files.find(r=>r.state==='FULL'&&r.logical_width===width);const parityFile=path.join(next,'diagnostic_support',`parity-${width}.png`);const row={width,independentBufferSha256:hash(buffer),priorFormalSha256:sha(oldPng.path),authorParityFileSha256:sha(parityFile),bytes:buffer.length};parity.push(row);check(width+'_exact_full_PNG_parity',row.independentBufferSha256===oldPng.sha256&&row.priorFormalSha256===oldPng.sha256&&row.authorParityFileSha256===oldPng.sha256,row);check(width+'_no_new_page_errors',errors.length===0,errors);await p.close();}
await browser.close();for(const r of manifest.files)check('final_readonly_'+path.basename(r.path),sha(r.path)===r.sha256);
const result={reviewer:'/root/res_root_d32',reviewMode:'TARGETED_INDEPENDENT_RECHECK',finding:'DOC-D32-G3-R01',time:new Date().toISOString(),bundleSha256:digest,sourceSha256:sha(path.join(next,'DOC-000_D32_structure.html')),checks,identities,parity,passed:checks.filter(r=>r.pass).length,failed:checks.filter(r=>!r.pass).length,inheritedValidCoverage:183,note:'No author scripts executed. Screenshot buffers hashed in memory; no duplicate raster set written. Original review is retained.'};fs.writeFileSync(path.join(out,'DOC-000_D32_TARGETED_R1_OBSERVATIONS.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({passed:result.passed,failed:result.failed,failures:checks.filter(r=>!r.pass),identityRows:identities.length,parity},null,2));process.exitCode=result.failed?1:0;
})().catch(e=>{console.error(e.stack);process.exitCode=2;});
