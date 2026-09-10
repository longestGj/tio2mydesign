const fs = require('fs');
const crypto = require('crypto');

const root = 'D:/23MySec';
const base = root + '/pages/markets/germany/04_planning/gate4-v0.1';
const approval = base + '/approval_core';
const diagnostic = base + '/diagnostic_support';
const freezeId = 'DE-G4-COMPLETE-20260907-01-F01';
const sha = data => crypto.createHash('sha256').update(data).digest('hex');
const identity = file => {
  const data = fs.readFileSync(file);
  return { path: file.replaceAll('\\', '/'), bytes: data.length, sha256: sha(data) };
};
const writeJson = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');

fs.mkdirSync(approval, { recursive: true });
const directionPath = diagnostic + '/direction-r1-checks.json';
const preflightPath = diagnostic + '/preflight-r1-checks.json';
const direction = JSON.parse(fs.readFileSync(directionPath, 'utf8'));
const preflight = JSON.parse(fs.readFileSync(preflightPath, 'utf8'));
if (direction.status !== 'VISUAL_DIRECTION_CHECKED' || direction.summary.failed !== 0) throw new Error('4A direction did not pass');
if (preflight.status !== 'PASS_FOR_FORMAL_RENDER' || preflight.summary.failed !== 0) throw new Error('preflight did not pass');
if (direction.source.sha256 !== preflight.source.sha256 || direction.css.sha256 !== preflight.css.sha256) throw new Error('direction/preflight source identity differs');

const directionRecordPath = base + '/4A-direction-check.json';
writeJson(directionRecordPath, {
  page_id: 'MARKET-EU-DE',
  workset_id: 'DE-G4-COMPLETE-20260907-01',
  checkpoint: 'GATE4A_INTERNAL_DIRECTION_CHECK',
  status: 'PASS_FOR_4B',
  source: direction.source,
  css: direction.css,
  representative_viewports: [1440, 768, 390],
  representative_regions: ['DE-02 application cards', 'DE-05 destination brief and checklist'],
  criteria: {
    visual_direction: 'approved brand palette, visible hierarchy, readable long-form treatment',
    responsive_direction: 'three-column application group and two-column destination group collapse to one column without reordering',
    shared_contracts: 'Global Chrome, production logo, CTA and legal/footer structures remain inherited from frozen Gate 3 source',
    content_integrity: 'approved A/B/C copy, modules, URLs and page ownership remain unchanged'
  },
  automated_checks: direction.summary,
  evidence: direction.assets,
  agent_decision: 'The bounded visual direction is coherent at 1440, 768 and 390 and may proceed to complete visual evidence collection.',
  approval_effect: 'Internal Gate 4A checkpoint only; does not approve Gate 4, close the page, or authorize Gate 6.',
  checked_at: direction.ended_at
});

const index = JSON.parse(fs.readFileSync(base + '/input_index.json', 'utf8'));
const candidates = [
  index.authority_manifest,
  ...index.authority_inputs,
  ...index.approved_inputs,
  ...index.shared_inputs,
  index.design_source,
  ...index.dependencies,
  identity(base + '/input_index.json'),
  identity(base + '/visual-direction.css'),
  identity(directionRecordPath),
  identity(directionPath),
  identity(preflightPath),
  ...direction.assets.map(a => ({ path: a.path, bytes: a.bytes, sha256: a.sha256 })),
  ...preflight.assets.map(a => ({ path: a.path, bytes: a.bytes, sha256: a.sha256 }))
];
const unique = [];
const seen = new Set();
for (const item of candidates) {
  if (!item || !item.path || seen.has(item.path)) continue;
  const current = identity(item.path);
  if (item.bytes !== current.bytes || item.sha256 !== current.sha256) throw new Error(`identity changed before freeze: ${item.path}`);
  unique.push(current);
  seen.add(item.path);
}

const freezePath = approval + '/source-freeze.json';
writeJson(freezePath, {
  page_id: 'MARKET-EU-DE',
  workset_id: 'DE-G4-COMPLETE-20260907-01',
  freeze_id: freezeId,
  status: 'FROZEN_FOR_FORMAL_GATE4_EVIDENCE',
  frozen_files: unique,
  source: direction.source,
  css: direction.css,
  direction_result: identity(directionPath),
  preflight_result: identity(preflightPath),
  direction_record: identity(directionRecordPath),
  counts: {
    frozen_files: unique.length,
    direction_images: direction.assets.length,
    preflight_images: preflight.assets.length,
    direction_checks: direction.summary.checks,
    preflight_checks: preflight.summary.checks
  },
  stop_condition: 'Frozen execution input only; independent final review and project control remain separate.',
  frozen_at: new Date().toISOString()
});

const worksetPath = base + '/workset.json';
const workset = JSON.parse(fs.readFileSync(worksetPath, 'utf8'));
workset.status = 'SOURCE_FROZEN_FOR_FORMAL_EXECUTION';
workset.freeze_id = freezeId;
workset.direction_check = identity(directionRecordPath);
workset.preflight = identity(preflightPath);
workset.source_freeze = identity(freezePath);
writeJson(worksetPath, workset);

console.log(JSON.stringify({
  freeze_id: freezeId,
  direction_record: identity(directionRecordPath),
  source_freeze: identity(freezePath),
  workset: identity(worksetPath),
  frozen_files: unique.length
}, null, 2));
