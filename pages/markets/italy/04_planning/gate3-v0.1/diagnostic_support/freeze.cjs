const fs = require('fs');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const out = 'D:/23MySec/pages/markets/italy/04_planning/gate3-v0.1';
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id = p => ({ path: p, bytes: fs.statSync(p).size, sha256: sha(p) });
const source = `${out}/MARKET-EU-IT_GATE3_WIREFRAME_V0.1.html`;
const binding = JSON.parse(fs.readFileSync(`${out}/input-binding.json`, 'utf8'));
const runtimePath = `${out}/diagnostic_support/visual-preflight.json`;
const runtime = JSON.parse(fs.readFileSync(runtimePath, 'utf8'));
if (runtime.results.some(r => r.status !== 'PASS')) throw new Error('Diagnostic checks are not all PASS');
if (fs.readdirSync(`${out}/approval_core`).length) throw new Error('Formal assets exist before freeze');
const preflight = {
  pageId: 'MARKET-EU-IT', status: 'PASS_FOR_FORMAL_RENDER', checkedAt: new Date().toISOString(), role: 'EXECUTION_SELF_CHECK_NOT_INDEPENDENT_APPROVAL',
  candidate: id(source),
  checks: { approvedInputsMatch: 'PASS', durableDependencies: 'PASS', sharedConsumerNeutral: 'PASS', contentRelationshipsMatch: 'PASS', threeViewportsVisible: 'PASS', touchTargets44: 'PASS', mobileMenuExit: 'PASS', applicableStates: 'PASS', pageSpecificRisks: 'PASS' },
  dependencies: binding.dependencies,
  sharedConsumer: binding.sharedConsumer,
  approvedInputs: binding.approvedInputs,
  inputBinding: id(`${out}/input-binding.json`),
  runtimeEvidence: id(runtimePath),
  visualReadback: id(`${out}/diagnostic_support/visual-readback.json`),
  sharedEvidenceInheritance: {
    component: 'Global Header/Footer, Mobile Menu and Cookie Settings',
    ownerPackage: binding.sharedConsumer,
    originalReport: { path: 'D:/23MySec/99_workspace/gate3-v02-validation/shared-consumer-v0.2/shared-consumer-validation.json', bytes: 7778, sha256: '373993fb476f86d454600c75d0a4b99ae4f9a9fa7547a6eb8ed099b05f477683' },
    inheritedCoverage: 'Package source identity, seven navigation parameters, full shared focus/isolation/colour behaviours at 1440/768/390',
    currentPageNoImpactBasis: 'Italy source embeds the package output without overriding shared selectors or behaviour; runtime found current Markets mapping and no external dependency.',
    currentPageActualTests: 'Three-width Header/Footer assembly and Cookie entry/exit/focus return; 768 and 390 menu open, cycle, Escape, selection close, inert background and focus restoration.',
    gaps: 'Production/runtime behaviour remains Gate 8/9; no shared component anomaly required expanded re-test.'
  },
  evidenceTypes: runtime.evidenceTypes,
  formalExportsGenerated: false,
  limitations: ['Navigation is a local intent simulation; receiver and route availability are not implementation claims.', 'External source freshness and production legal/consent behaviour remain later implementation/release checks.'],
  unresolvedRequiredFindings: []
};
fs.writeFileSync(`${out}/preflight-record.json`, `${JSON.stringify(preflight, null, 2)}\n`);
const checker = 'D:/23MySec/skills/responsive-wireframe-design/scripts/check-preflight-record.mjs';
const result = execFileSync(process.execPath, [checker, `${out}/preflight-record.json`], { encoding: 'utf8' });
fs.writeFileSync(`${out}/diagnostic_support/preflight-validator.json`, result);
const freeze = {
  pageId: 'MARKET-EU-IT', status: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW', frozenAt: new Date().toISOString(), source: id(source), inputBinding: id(`${out}/input-binding.json`),
  approvedInputs: binding.approvedInputs, authorities: binding.authorities, sharedConsumer: binding.sharedConsumer, sharedFiles: binding.sharedFiles, dependencies: binding.dependencies,
  preflight: id(`${out}/preflight-record.json`), validator: id(`${out}/diagnostic_support/preflight-validator.json`), formalExportsExistedAtFreeze: false,
  role: 'GATE3_EXECUTION_ONLY', unresolvedFindings: []
};
fs.writeFileSync(`${out}/freeze-record.json`, `${JSON.stringify(freeze, null, 2)}\n`);
console.log(JSON.stringify({ preflight: id(`${out}/preflight-record.json`), freeze: id(`${out}/freeze-record.json`), checker: JSON.parse(result) }, null, 2));
