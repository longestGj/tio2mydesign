const fs = require('fs');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const root = 'D:/23MySec';
const base = root + '/pages/markets/germany/04_planning/gate4-v0.1';
const snapshotDir = base + '/approval_core/snapshots';
const snapshotPath = snapshotDir + '/01_PROJECT_INDEX.frozen.md';
const sha = data => crypto.createHash('sha256').update(data).digest('hex');
const identity = file => { const data = fs.readFileSync(file); return { path: file.replaceAll('\\', '/'), bytes: data.length, sha256: sha(data) }; };

fs.mkdirSync(snapshotDir, { recursive: true });
const frozenBytes = execFileSync('git', ['cat-file', 'blob', 'HEAD:01_PROJECT_INDEX.md'], { cwd: root, encoding: 'buffer' });
fs.writeFileSync(snapshotPath, frozenBytes);
const frozen = identity(snapshotPath);
if (frozen.bytes !== 21658 || frozen.sha256 !== 'fde0c59fabeda7f3688eaf4c41af59f8104c80462ef5f752212e3f53486d40cf') throw new Error('preserved Index snapshot does not match source freeze');
const current = identity(root + '/01_PROJECT_INDEX.md');
const record = {
  page_id: 'MARKET-EU-DE',
  workset_id: 'DE-G4-COMPLETE-20260907-01',
  freeze_id: 'DE-G4-COMPLETE-20260907-01-F01',
  status: 'POST_FREEZE_ROUTING_DRIFT_RECORDED / NO_GERMANY_IMPACT',
  original_path: root + '/01_PROJECT_INDEX.md',
  frozen_identity: { path: root + '/01_PROJECT_INDEX.md', bytes: frozen.bytes, sha256: frozen.sha256 },
  preserved_snapshot: frozen,
  current_identity: current,
  assessed_change: 'The post-freeze live change updates only the Poland Gate 9 routing row. It does not change Germany, Gate 4 workflow/method authority, approved A/B/C, shared contracts, the Gate 3 handoff, candidate source or dependencies.',
  handling: 'The exact frozen Index bytes are preserved inside the Germany approval core. Formal execution remains tied to the pre-change freeze; the live root Index is not modified by this workset.'
};
fs.writeFileSync(base + '/diagnostic_support/post-freeze-drift.json', JSON.stringify(record, null, 2) + '\n');
console.log(JSON.stringify({ snapshot: frozen, current, record: identity(base + '/diagnostic_support/post-freeze-drift.json') }, null, 2));
