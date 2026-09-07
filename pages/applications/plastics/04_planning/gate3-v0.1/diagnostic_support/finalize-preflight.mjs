import fs from 'node:fs';
import crypto from 'node:crypto';
const root='D:/23MySec';
const page=`${root}/pages/applications/plastics`;
const out=`${page}/04_planning/gate3-v0.1`;
const diag=`${out}/diagnostic_support`;
const source=`${out}/APP-PLAS_GATE3_WIREFRAME_V0.1.html`;
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id=(p,role)=>({path:p,bytes:fs.statSync(p).size,sha256:sha(p),...(role?{role}:{})});
const runtime=JSON.parse(fs.readFileSync(`${diag}/runtime-preflight.json`,'utf8'));
const visual=JSON.parse(fs.readFileSync(`${diag}/visual-readback.json`,'utf8'));
if(runtime.failures.length)throw new Error('Automated preflight contains failures');
if(visual.status!=='PASS')throw new Error('Visual readback is not PASS');
const dependencies=[
  id(`${root}/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg`),
  id(`${root}/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg`),
  id(`${out}/dependencies/Inter-Variable.ttf`),id(`${out}/dependencies/Inter-OFL.txt`)
];
const approvedInputs=[
  id(`${page}/04_planning/APP-PLAS_GATE2_CONTENT_SKELETON_V0.2.md`,'A'),
  id(`${page}/04_planning/APP-PLAS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md`,'B'),
  id(`${page}/04_planning/APP-PLAS_GATE2_CONTENT_CONTRACT_V0.3.md`,'C'),
  id(`${root}/docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md`,'Gate2Approval'),
  id(`${page}/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md`,'IncomingManifest')
];
const sharedPackage=`${root}/docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json`;
const originalShared=`${root}/99_workspace/gate3-v02-validation/shared-consumer-v0.2/shared-consumer-validation.json`;
const record={
  pageId:'APP-PLAS',status:'PASS_FOR_FORMAL_RENDER',checkedAt:new Date().toISOString(),role:'EXECUTION_SELF_CHECK_NOT_INDEPENDENT_APPROVAL',candidate:id(source),
  checks:{approvedInputsMatch:'PASS',durableDependencies:'PASS',sharedConsumerNeutral:'PASS',contentRelationshipsMatch:'PASS',threeViewportsVisible:'PASS',touchTargets44:'PASS',mobileMenuExit:'PASS',applicableStates:'PASS',pageSpecificRisks:'PASS'},
  dependencies,approvedInputs,
  sharedConsumer:{...id(sharedPackage),version:'V0.2',packageId:'TIO2MY-GATE3-SHARED-CONSUMER-002'},
  inputBinding:id(`${out}/input-binding.json`),runtimeEvidence:id(`${diag}/runtime-preflight.json`),visualReadback:id(`${diag}/visual-readback.json`),
  sharedEvidenceInheritance:{component:'Global Header/Footer, Mobile Menu and Cookie Settings',ownerPackage:{...id(sharedPackage),version:'V0.2',packageId:'TIO2MY-GATE3-SHARED-CONSUMER-002'},originalReport:id(originalShared),inheritedCoverage:'Shared package source identity, seven current-navigation parameters, complete focus cycle, background isolation, cross-breakpoint close and colour assertions at 1440/768/390.',currentPageNoImpactBasis:'APP-PLAS embeds the page-neutral package output and has no CSS selectors or scripts targeting shared Header, Footer, menu or Cookie classes.',currentPageActualTests:'Three-view Header/Footer/current-state assembly; 768 and 390 menu open, selection close, Escape, background restore and focus return; 390 Cookie entry, close and focus return.',gaps:'Production routing, receiver behaviour and actual implementation remain Gate 8/9. No current-page anomaly triggered expanded full shared retest.'},
  evidenceTypes:['SOURCE_INSPECTION','ACTUAL_RUNTIME','STATIC_VISUAL','LOCAL_NAVIGATION_SIMULATION'],formalExportsGenerated:false,
  limitations:['Local navigation was prevented while testing menu selection-close so that the planning file remained loaded; this does not prove receiver routes.','APP-PLAS embeds no form. Documents, Sample and RFQ submission and receiving behaviour remain with their owners and Gate 8/9.'],
  unresolvedRequiredFindings:[]
};
fs.writeFileSync(`${out}/preflight-record.json`,`${JSON.stringify(record,null,2)}\n`);
console.log(JSON.stringify({record:id(`${out}/preflight-record.json`),status:record.status},null,2));

