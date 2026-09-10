import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = 'D:/23MySec';
const base = path.join(root, 'pages/applications/paper/04_planning/gate3-v0.3');
const reviewBase = path.join(root, 'pages/applications/paper/05_review');
const files = {
  diagnostic: path.join(base, 'diagnostic_support/APP-PAPER_GATE3_DIAGNOSTIC_OBSERVATIONS_V0.3.json'),
  oldPreflight: path.join(base, 'APP-PAPER_GATE3_PREFLIGHT_RECORD_V0.3.json'),
  oldFreeze: path.join(base, 'APP-PAPER_GATE3_FREEZE_RECORD_V0.3.json'),
  formal: path.join(base, 'approval_core/APP-PAPER_GATE3_FORMAL_OBSERVATIONS_V0.3.json'),
  inventory: path.join(base, 'APP-PAPER_GATE3_ASSET_INVENTORY_V0.3.json'),
  review: path.join(reviewBase, 'APP-PAPER_GATE3_PROJECT_CONTROL_REVIEW_V0.1.md'),
  independentObservations: path.join(reviewBase, 'APP-PAPER_GATE3_INDEPENDENT_OBSERVATIONS_V0.1.json')
};
const output = {
  chronology: path.join(base, 'APP-PAPER_GATE3_CHRONOLOGY_CORRECTION_OBSERVATIONS_V0.4.json'),
  preflight: path.join(base, 'APP-PAPER_GATE3_PREFLIGHT_RECORD_V0.4.json'),
  freeze: path.join(base, 'APP-PAPER_GATE3_FREEZE_RECORD_V0.4.json')
};

const read = file => fs.readFileSync(file);
const json = file => JSON.parse(read(file));
const sha256 = file => crypto.createHash('sha256').update(read(file)).digest('hex');
const identity = file => {
  const stat = fs.statSync(file);
  return {
    path: file.replaceAll('\\', '/'),
    bytes: stat.size,
    sha256: sha256(file),
    createdUtc: stat.birthtime.toISOString(),
    writtenUtc: stat.mtime.toISOString()
  };
};

const diagnostic = json(files.diagnostic);
const oldPreflight = json(files.oldPreflight);
const oldFreeze = json(files.oldFreeze);
const formal = json(files.formal);
const inventory = json(files.inventory);
const diagnosticIdentity = identity(files.diagnostic);
const oldPreflightIdentity = identity(files.oldPreflight);
const oldFreezeIdentity = identity(files.oldFreeze);
const formalIdentity = identity(files.formal);

const originalEvents = {
  diagnosticRunCreatedAt: diagnostic.createdAt,
  diagnosticFinalWriteAt: diagnosticIdentity.writtenUtc,
  preflightRecordCreatedAt: oldPreflightIdentity.createdUtc,
  freezeRecordCreatedAt: oldFreezeIdentity.createdUtc,
  formalRunCreatedAt: formal.createdAt,
  formalFinalWriteAt: formalIdentity.writtenUtc
};
const eventTimes = Object.fromEntries(Object.entries(originalEvents).map(([key, value]) => [key, Date.parse(value)]));
const sequenceChecks = {
  diagnosticCompletedBeforePreflight: eventTimes.diagnosticFinalWriteAt < eventTimes.preflightRecordCreatedAt,
  preflightBeforeFreeze: eventTimes.preflightRecordCreatedAt < eventTimes.freezeRecordCreatedAt,
  freezeBeforeFormalStarted: eventTimes.freezeRecordCreatedAt < eventTimes.formalRunCreatedAt,
  formalStartedBeforeFinalWrite: eventTimes.formalRunCreatedAt < eventTimes.formalFinalWriteAt,
  candidateUnchanged: sha256(oldFreeze.candidate.path) === oldFreeze.candidate.sha256 && fs.statSync(oldFreeze.candidate.path).size === oldFreeze.candidate.bytes,
  diagnosticUnchanged: diagnosticIdentity.sha256 === oldPreflight.evidence.diagnosticObservationsSha256,
  formalPassUnchanged: formal.pass === true,
  formalAssetsUnchanged: inventory.approvalCore.filter(item => item.path?.includes('/approval_core/') && item.path.endsWith('.png')).every(item => sha256(item.path) === item.sha256 && fs.statSync(item.path).size === item.bytes)
};
if (Object.values(sequenceChecks).some(value => value !== true)) throw new Error(`Chronology correction validation failed: ${JSON.stringify(sequenceChecks)}`);

const chronology = {
  observationId: 'APP-PAPER-G3-CHRONOLOGY-CORRECTION-V0.4',
  findingId: 'APP-PAPER-G3-PCR-F01',
  generatedAt: new Date().toISOString(),
  generatedBy: 'APP-PAPER_GATE3_CORRECT_RECORD_CHAIN_V0.4.mjs',
  semantics: 'RETROSPECTIVE_CORRECTION_FROM_FILESYSTEM_AND_EMBEDDED_RUNTIME_TIMES',
  correctionScope: 'Record chronology and shared-evidence attribution only; candidate HTML and formal PNG bytes remain unchanged.',
  sourceRecords: {
    diagnostic: diagnosticIdentity,
    preflightV03: oldPreflightIdentity,
    freezeV03: oldFreezeIdentity,
    formal: formalIdentity,
    projectControlReview: identity(files.review),
    independentObservations: identity(files.independentObservations)
  },
  originalEvents,
  sequenceChecks,
  conclusion: 'Filesystem and embedded runtime times establish diagnostic completion, then preflight record creation, then freeze record creation, then formal run and final write. V0.3 manually entered executedAt/frozenAt values are inaccurate and are superseded for chronology by the corrected V0.4 records; V0.3 files remain historical.'
};
fs.writeFileSync(output.chronology, JSON.stringify(chronology, null, 2));

const correctedPreflight = {
  ...oldPreflight,
  recordId: 'APP-PAPER-G3-PREFLIGHT-V0.4',
  executedAt: originalEvents.preflightRecordCreatedAt,
  eventTimeBasis: 'V0.3 preflight filesystem birthtime observed on the same workspace; diagnostic completion uses V0.3 diagnostic filesystem mtime.',
  correctionGeneratedAt: new Date().toISOString(),
  correctionSemantics: 'RETROSPECTIVE_CORRECTION_OF_ORIGINAL_PREFLIGHT_EVENT',
  supersedesForChronology: oldPreflightIdentity,
  chronologyEvidence: identity(output.chronology),
  findingResponse: {
    findingId: 'APP-PAPER-G3-PCR-F01',
    state: 'REVISED_PENDING_INDEPENDENT_REREVIEW'
  },
  sharedInheritance: {
    sourceContract: 'D:/23MySec/docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md',
    originalReport: 'D:/23MySec/99_workspace/gate3-v02-validation/shared-consumer-v0.2/shared-consumer-validation.json',
    originalReportSha256: '373993fb476f86d454600c75d0a4b99ae4f9a9fa7547a6eb8ed099b05f477683',
    inheritedCoverageExactlyRecorded: [
      'current navigation on visible surface and responsive breakpoint',
      'menu open contract, selection close/focus restoration, Escape close/focus return and desktop-breakpoint close at 768/390',
      'Cookie open/exact mode, action colour and Escape focus restoration at 1440/768/390'
    ],
    excludedFromOriginalReport: ['Tab and Shift+Tab focus-loop assertions'],
    currentPageExecutionSupplement: [
      '768/390 menu open and Applications link-selection close with background/focus restoration',
      'Cookie entry, Close-button close and trigger-focus restoration at 1440/768/390'
    ],
    independentCurrentPageSupplement: {
      path: files.independentObservations.replaceAll('\\', '/'),
      sha256: sha256(files.independentObservations),
      coverage: ['menu forward/back focus wrap and Escape at 768/390', 'Cookie forward/back focus wrap and Escape at 1440/768/390']
    },
    noImpactBasis: 'Header, Footer and Cookie dialog payloads remain byte-identical to V0.2; page CSS does not target shared component classes.',
    gaps: []
  }
};
fs.writeFileSync(output.preflight, JSON.stringify(correctedPreflight, null, 2));

const correctedFreeze = {
  ...oldFreeze,
  freezeId: 'APP-PAPER-G3-FREEZE-V0.4',
  frozenAt: originalEvents.freezeRecordCreatedAt,
  eventTimeBasis: 'V0.3 freeze filesystem birthtime observed on the same workspace.',
  correctionGeneratedAt: new Date().toISOString(),
  correctionSemantics: 'RETROSPECTIVE_CORRECTION_OF_ORIGINAL_FREEZE_EVENT',
  status: 'CANDIDATE_FREEZE_IDENTITY_CORRECTED_FOR_REREVIEW',
  supersedesForChronology: oldFreezeIdentity,
  chronologyEvidence: identity(output.chronology),
  preflight: {
    path: output.preflight.replaceAll('\\', '/'),
    bytes: fs.statSync(output.preflight).size,
    sha256: sha256(output.preflight),
    result: 'PASS_FOR_FORMAL_RENDER',
    executedAt: originalEvents.preflightRecordCreatedAt
  },
  retainedFormalEvidence: {
    observations: formalIdentity,
    formalRunCreatedAt: originalEvents.formalRunCreatedAt,
    formalFinalWriteAt: originalEvents.formalFinalWriteAt,
    pass: true,
    pngCount: 8,
    pngBytesAndHashesUnchanged: true
  },
  findingResponse: {
    findingId: 'APP-PAPER-G3-PCR-F01',
    state: 'REVISED_PENDING_INDEPENDENT_REREVIEW'
  },
  invalidationRule: 'Any byte change to the candidate source, frozen dependency or retained formal PNG ends this corrected freeze identity and requires affected checks and exports to be repeated.'
};
fs.writeFileSync(output.freeze, JSON.stringify(correctedFreeze, null, 2));

console.log(JSON.stringify({
  chronology: identity(output.chronology),
  preflight: identity(output.preflight),
  freeze: identity(output.freeze),
  originalEvents,
  sequenceChecks
}, null, 2));
