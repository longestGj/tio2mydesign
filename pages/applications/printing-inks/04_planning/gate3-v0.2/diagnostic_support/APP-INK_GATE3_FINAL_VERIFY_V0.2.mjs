import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root='D:/23MySec';
const base=`${root}/pages/applications/printing-inks/04_planning/gate3-v0.2`;
const output=`${base}/diagnostic_support/APP-INK_GATE3_FINAL_VERIFICATION_V0.2.json`;
const sha=target=>crypto.createHash('sha256').update(fs.readFileSync(target)).digest('hex');
const meta=target=>({path:target.replaceAll('\\','/'),bytes:fs.statSync(target).size,sha256:sha(target)});
const failures=[];
const check=(condition,message)=>{if(!condition)failures.push(message)};

const expectedInputs={
 A:['pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_SKELETON_V0.1.md','bbb3a2bbd55d0140c4cfbef2c7e929e5f7f5c47478671b50aeff72f33e5554a6'],
 B:['pages/applications/printing-inks/04_planning/APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md','b5a92976f526fcfee74fdf088ec9ea3ef21456e5ba66965f79c50ec4dd5c938d'],
 C:['pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_CONTRACT_V0.2.md','11883e118e017e7886d91a3a6400150fcc92e3972b56847aafecc9250e960dc3']
};
const inputResults={};
for(const [key,[relative,expected]] of Object.entries(expectedInputs)){const actual=meta(`${root}/${relative}`);inputResults[key]={...actual,expected,match:actual.sha256===expected};check(actual.sha256===expected,`${key} input mismatch`)}
check(sha(`${root}/pages/applications/printing-inks/APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md`)==='e05e8a1f848a147862b7cf20e3a5a0a439f24c802a701ffb59250c12fec75427','approved Manifest changed');
check(sha(`${root}/pages/applications/printing-inks/05_review/APP-INK_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md`)==='090c2f4cd13b6f3d18e3e971bdbfc4e93f8c5ae33a308ff469962b9789c243ee','Project Control review changed');
const oldSource=`${root}/pages/applications/printing-inks/04_planning/gate3-v0.1/APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`;
const oldFreeze=`${root}/pages/applications/printing-inks/04_planning/gate3-v0.1/APP-INK_GATE3_FREEZE_RECORD_V0.1.json`;
check(sha(oldSource)==='8d67c9d3ec4b971c9ff5a91a320a6901df385d46ab4ab26812ad0880322492ef','historical source changed');
check(sha(oldFreeze)==='0e5d504cfe28fc170efeb9958a72f7606ed7fedb695b35497361ba3308750c20','historical freeze changed');

const source=`${base}/APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html`;
const focusRule='main a:focus-visible{outline:3px solid #008078;outline-offset:3px}\n';
const oldHtml=fs.readFileSync(oldSource,'utf8'),newHtml=fs.readFileSync(source,'utf8');
check(newHtml.replace(focusRule,'')===oldHtml,'V0.2 HTML differs from V0.1 beyond exact focus rule');
const freezePath=`${base}/APP-INK_GATE3_FREEZE_RECORD_V0.2.json`,freeze=JSON.parse(fs.readFileSync(freezePath,'utf8'));
check(meta(source).bytes===freeze.source.bytes&&sha(source)===freeze.source.sha256,'V0.2 frozen identity mismatch');
check(freeze.formalExportsExistedAtFreeze===false,'formal evidence existed at V0.2 freeze');
const preflightPath=`${base}/APP-INK_GATE3_PREFLIGHT_RECORD_V0.2.json`,preflight=JSON.parse(fs.readFileSync(preflightPath,'utf8'));
check(preflight.status==='PASS_FOR_FORMAL_RENDER'&&preflight.formalExportsGenerated===false,'preflight status/sequence invalid');
check(preflight.sharedEvidence.originalOwnerCoverage.includes('contains no Tab or Shift+Tab loop test'),'shared owner coverage not narrowed');
check(preflight.sharedEvidence.currentPageExecutionCoverage.includes('forward/backward'),'current-page loop coverage missing');

const observationsPath=`${base}/approval_core/APP-INK_GATE3_FORMAL_OBSERVATIONS_V0.2.json`,observations=JSON.parse(fs.readFileSync(observationsPath,'utf8'));
check(observations.pass&&Object.values(observations.risks).every(Boolean)&&Object.values(observations.interactionPass).every(Boolean),'formal observations failed');
for(const width of ['1440','768','390']){
 const focus=observations.bodyKeyboardFocus[width];
 check(focus.expectedCount===18&&focus.keyboardReachedCount===18&&focus.pass,`${width} body focus coverage failed`);
 const counts=Object.fromEntries(observations.viewports[width].paragraphCounts.map(item=>[item.module,item.count]));
 check(counts['INK-02']===2&&counts['INK-05']===2&&counts['INK-06']===1,`${width} paragraph relations failed`);
}
check(observations.sharedEvidence.originalOwnerCoverage.includes('does not cover Tab or Shift+Tab'),'formal shared statement overstated');

const handoffPath=`${root}/pages/applications/printing-inks/05_review/APP-INK_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.2.md`,handoff=fs.readFileSync(handoffPath,'utf8');
for(const required of ['One introduction, nine context items, one following caution paragraph','INK-05 | Keep grind','| Two paragraphs |','Four records × three fields, then one explanatory paragraph','Document matrix: four records × three fields','Architecture / route registry owner','Conversion action owners','Global Chrome owner; legal/privacy and CMP owners','Independent development project / Gate 8 implementation owner','Independent Gate 9 QA owner','Measurable acceptance condition'])check(handoff.includes(required),`handoff missing: ${required}`);
for(const forbidden of ['two caution paragraphs','Three paragraphs |\n| INK-06','plus two explanatory paragraphs','Four-field document relationships'])check(!handoff.includes(forbidden),`handoff retains incorrect phrase: ${forbidden}`);
const markdownLinks=[...handoff.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(match=>match[1]);
for(const link of markdownLinks){if(link.startsWith('http')||link.startsWith('#'))continue;check(fs.existsSync(path.resolve(path.dirname(handoffPath),link)),`unresolved handoff link: ${link}`)}

const inventoryPath=`${base}/APP-INK_GATE3_ASSET_INVENTORY_V0.2.json`,inventory=JSON.parse(fs.readFileSync(inventoryPath,'utf8'));
check(inventory.status==='DRAFT_FOR_PROJECT_CONTROL_REREVIEW'&&inventory.formalAssets.length===7&&inventory.formalEvidenceCount===7,'inventory status/count failed');
for(const item of [...inventory.formalAssets,...inventory.records])check(fs.existsSync(item.path)&&meta(item.path).bytes===item.bytes&&sha(item.path)===item.sha256,`inventory mismatch: ${item.path}`);
const candidateManifestPath=`${base}/APP-INK_GATE3_CANDIDATE_MANIFEST_V0.2.md`,candidateManifest=fs.readFileSync(candidateManifestPath,'utf8');
check(candidateManifest.includes('DRAFT_FOR_PROJECT_CONTROL_REREVIEW')&&candidateManifest.includes('PENDING_INDEPENDENT_REREVIEW'),'candidate Manifest boundary failed');
const response=fs.readFileSync(`${root}/pages/applications/printing-inks/05_review/APP-INK_GATE3_REVISION_RESPONSE_V0.2.md`,'utf8');
for(const id of ['APP-INK-G3-PCR-F01','APP-INK-G3-PCR-F02','APP-INK-G3-PCR-F03'])check(response.includes(id),'revision response missing '+id);

const result={status:failures.length?'FAIL':'PASS',verifiedAt:new Date().toISOString(),failures,inputResults,historical:{source:meta(oldSource),freeze:meta(oldFreeze),review:meta(`${root}/pages/applications/printing-inks/05_review/APP-INK_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md`)},successor:{source:meta(source),preflight:meta(preflightPath),freeze:meta(freezePath),formalObservations:meta(observationsPath),inventory:meta(inventoryPath),candidateManifest:meta(candidateManifestPath),handoff:meta(handoffPath)},formalEvidence:inventory.formalAssets,findingDisposition:inventory.findings,nextState:'DRAFT_FOR_PROJECT_CONTROL_REREVIEW'};
fs.writeFileSync(output,`${JSON.stringify(result,null,2)}\n`);
console.log(JSON.stringify({status:result.status,failures,result:meta(output),successor:result.successor,formalEvidenceCount:result.formalEvidence.length},null,2));
process.exit(failures.length?1:0);
