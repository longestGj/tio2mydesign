const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const root='D:/23MySec';
const oldDir=path.join(root,'pages/applications/coatings/04_planning/gate4-v0.1');
const newDir=path.join(root,'pages/applications/coatings/04_planning/gate4-v0.2');
const reviewDir=path.join(root,'pages/applications/coatings/05_review');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id=p=>({path:p.replaceAll('\\','/'),bytes:fs.statSync(p).size,sha256:sha(p)});
const json=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const inputIndexPath=path.join(newDir,'input_index.json');
const worksetPath=path.join(newDir,'workset.json');
const directionPath=path.join(newDir,'4A-direction-check-correction.json');
const correctionPath=path.join(newDir,'statement-correction-register.json');
const runtimePath=path.join(newDir,'diagnostic_support/remediation-runtime.json');
const inheritancePath=path.join(newDir,'approval_core/inherited-asset-verification.json');
const oldFreezePath=path.join(oldDir,'approval_core/source-freeze.json');
const oldEvidencePath=path.join(oldDir,'evidence_index.json');
const oldExportPath=path.join(oldDir,'approval_core/export-inventory.json');
const oldRuntimePath=path.join(oldDir,'diagnostic_support/formal-runtime-checks.json');
const oldFreeze=json(oldFreezePath), inputIndex=json(inputIndexPath), runtime=json(runtimePath), inherited=json(inheritancePath), oldExport=json(oldExportPath), oldRuntime=json(oldRuntimePath);

const dependencyChecks=oldFreeze.dependencies.map(x=>{const actual=id(x.path);return{...actual,expected:x,pass:actual.bytes===x.bytes&&actual.sha256===x.sha256}});
if(dependencyChecks.some(x=>!x.pass)||runtime.summary.failed||inherited.counts.failed)throw new Error('Cannot freeze: dependency, runtime or inherited-asset verification failed');

const freeze={
  page_id:'APP-COAT',workset_id:'COAT-G4-COMPLETE-V02',freeze_id:'COAT-G4-COMPLETE-V02-F01',
  status:'SOURCE_INHERITED_BYTE_IDENTICAL / RECORD_CORRECTION_FROZEN / DRAFT_FOR_INDEPENDENT_REREVIEW',
  frozen_at:new Date().toISOString(),finding_response:'COAT-G4-IR-01-R1',
  inputs:inputIndex.inputs,
  inherited_source:{
    candidate:{...id(path.join(oldDir,'APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html')),inheritance:'BYTE_IDENTICAL_FROM_COAT-G4-COMPLETE-V01-F01'},
    visual_layer:{...id(path.join(oldDir,'visual-direction.css')),inheritance:'BYTE_IDENTICAL_FROM_COAT-G4-COMPLETE-V01-F01'},
    previous_freeze:{...id(oldFreezePath),freeze_id:'COAT-G4-COMPLETE-V01-F01',state:'RETAINED_FAILED_REVIEW_HISTORY'},
    previous_evidence_index:id(oldEvidencePath)
  },
  dependencies:dependencyChecks.map(({expected,pass,...x})=>x),
  bound:{
    workset:id(worksetPath),input_index:id(inputIndexPath),direction_correction:id(directionPath),statement_correction_register:id(correctionPath),
    remediation_runtime:id(runtimePath),inherited_asset_verification:id(inheritancePath)
  },
  verification:{
    corrected_hover:{foreground:'#FFFFFF',background:'#007F77',contrast:runtime.calculations.whiteOn007F77,viewports:[1440,768,390],result:'3/3 PASS'},
    remediation_checks:`${runtime.summary.passed}/${runtime.summary.checks} PASS`,
    inherited_formal_assets:`${inherited.counts.identity_and_pixel_decode_passed}/${inherited.counts.formal_assets} exact identity + dimensions + decoded pixel digest PASS`,
    inherited_formal_runtime:`${oldRuntime.summary.passed}/${oldRuntime.summary.checks} PASS`,
    source_changed:false,visual_changed:false
  },
  boundary:'This executor freeze corrects records only. It does not claim independent rereview PASS, close Gate 4, update root Status/Index, start Gate 6, or authorize development or publication.'
};
const freezePath=path.join(newDir,'approval_core/source-freeze.json');
fs.writeFileSync(freezePath,JSON.stringify(freeze,null,2));

const regressionImages=[
  path.join(newDir,'diagnostic_support/full-page-regression/1440-full.png'),path.join(newDir,'diagnostic_support/full-page-regression/768-full.png'),path.join(newDir,'diagnostic_support/full-page-regression/390-full.png'),
  path.join(newDir,'approval_core/1440-primary-cta-hover.png'),path.join(newDir,'approval_core/768-primary-cta-hover.png'),path.join(newDir,'approval_core/390-primary-cta-hover.png')
].map(id);
const evidence={
  page_id:'APP-COAT',workset_id:'COAT-G4-COMPLETE-V02',freeze_id:'COAT-G4-COMPLETE-V02-F01',finding_response:'COAT-G4-IR-01-R1',
  status:'DRAFT_FOR_INDEPENDENT_REREVIEW',generated_at:new Date().toISOString(),
  inherited_candidate:freeze.inherited_source.candidate,inherited_visual_layer:freeze.inherited_source.visual_layer,
  freeze:id(freezePath),input_index:id(inputIndexPath),direction_correction:id(directionPath),statement_correction_register:id(correctionPath),
  remediation_runtime:id(runtimePath),inherited_asset_verification:id(inheritancePath),
  counts:{
    frozen_inputs:inputIndex.inputs.length,frozen_dependencies:dependencyChecks.length,
    inherited_formal_checks:oldRuntime.summary.checks,inherited_formal_checks_passed:oldRuntime.summary.passed,inherited_formal_checks_failed:oldRuntime.summary.failed,
    inherited_formal_assets:oldExport.assets.length,inherited_formal_assets_identity_and_pixel_verified:inherited.counts.identity_and_pixel_decode_passed,
    new_remediation_checks:runtime.summary.checks,new_remediation_checks_passed:runtime.summary.passed,new_remediation_checks_failed:runtime.summary.failed,
    new_regression_images:regressionImages.length,new_full_pages:3,new_primary_hover_states:3
  },
  corrected_acceptance:{
    primary_cta_hover:{foreground:'#FFFFFF',background:'#007F77',contrast:runtime.calculations.whiteOn007F77,threshold:4.5,result:'PASS_AT_1440_768_390'},
    wrong_pairing_excluded:{foreground:'#007F77',background:'#F5F8FB',contrast:runtime.calculations.tealOnF5F8FB,note:'This is a non-primary-link pairing and must not be described as the primary CTA hover.'},
    source_identity:'PASS / BYTE_IDENTICAL V0.1 INHERITANCE',full_page_regression:'PASS / THREE WIDTHS',formal_asset_inheritance:'PASS / 48 OF 48 EXACT FILE IDENTITIES AND PIXEL DECODES'
  },
  inherited_formal_assets:oldExport.assets.map(x=>({...x,inheritance:'EXACT_V0.1_FORMAL_ASSET_VERIFIED'})),
  new_regression_images:regressionImages,
  findings:{responded:['COAT-G4-IR-01'],executor_required_findings:0},
  limitations:['Local headless Chromium only.','Full-page rerender raster antialiasing is diagnostic; exact formal inheritance is tied to the verified V0.1 file identities and decoded pixel digests.','Production receivers, external sources, real devices, assistive technology, CMS/Schema, deployment and publication remain outside Gate 4.'],
  next:'Independent rereview from APP-COAT_GATE4_REREVIEW_SUBMISSION_V0.2.md. Do not self-approve, close Gate 4 or start Gate 6.'
};
const evidencePath=path.join(newDir,'evidence_index.json');
fs.writeFileSync(evidencePath,JSON.stringify(evidence,null,2));
console.log(JSON.stringify({freeze:id(freezePath),evidence:id(evidencePath),inputs:inputIndex.inputs.length,inheritedAssets:oldExport.assets.length,newChecks:runtime.summary,newImages:regressionImages.length}));
