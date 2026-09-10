const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const root = 'D:/23MySec';
const gate = `${root}/pages/markets/germany/04_planning/gate4-v0.1`;
const out = `${root}/pages/markets/germany/05_review/gate4-complete-independent-v0.1/identity-audit.json`;

function digest(file) {
  const data = fs.readFileSync(file);
  return { bytes: data.length, sha256: crypto.createHash('sha256').update(data).digest('hex') };
}

function compare(file, expected) {
  const exists = fs.existsSync(file);
  const actual = exists ? digest(file) : null;
  return {
    path: file,
    expected,
    actual,
    exists,
    exact: !!actual && actual.bytes === expected.bytes && actual.sha256 === expected.sha256,
  };
}

(async () => {
  const freezePath = `${gate}/approval_core/source-freeze.json`;
  const evidencePath = `${gate}/evidence_index.json`;
  const freeze = JSON.parse(fs.readFileSync(freezePath, 'utf8'));
  const evidence = JSON.parse(fs.readFileSync(evidencePath, 'utf8'));
  const frozen = freeze.frozen_files.map(x => compare(x.path, { bytes: x.bytes, sha256: x.sha256 }));
  const imageChecks = [];
  for (const x of evidence.images) {
    const base = compare(x.path, { bytes: x.bytes, sha256: x.sha256 });
    let metadata = null;
    let dimensionExact = false;
    if (base.exists) {
      metadata = await sharp(x.path).metadata();
      dimensionExact = metadata.width === x.pixelWidth && metadata.height === x.pixelHeight;
    }
    imageChecks.push({ ...base, expectedDimensions: [x.pixelWidth, x.pixelHeight], actualDimensions: metadata ? [metadata.width, metadata.height] : null, dimensionExact });
  }
  const bindingEntries = [];
  function walkBindings(value, label = 'bindings') {
    if (!value || typeof value !== 'object') return;
    if (typeof value.path === 'string' && Number.isFinite(value.bytes) && typeof value.sha256 === 'string') {
      bindingEntries.push({ label, ...compare(value.path, { bytes: value.bytes, sha256: value.sha256 }) });
      return;
    }
    for (const [key, child] of Object.entries(value)) walkBindings(child, `${label}.${key}`);
  }
  walkBindings(evidence.bindings);
  for (const label of ['authority_manifest','source','css']) walkBindings(evidence[label], label);
  for (let i = 0; i < (evidence.dependencies || []).length; i++) walkBindings(evidence.dependencies[i], `dependencies.${i}`);

  const frozenIndex = `${gate}/approval_core/snapshots/01_PROJECT_INDEX.frozen.md`;
  const liveIndex = `${root}/01_PROJECT_INDEX.md`;
  const result = {
    audit: 'MARKET-EU-DE Gate 4 independent identity audit',
    workset_id: evidence.workset_id,
    freeze_id: freeze.freeze_id,
    audited_at: new Date().toISOString(),
    freeze_record: { path: freezePath, ...digest(freezePath) },
    evidence_index: { path: evidencePath, ...digest(evidencePath) },
    frozen_files: {
      expected: freeze.frozen_files.length,
      exact: frozen.filter(x => x.exact).length,
      mismatches: frozen.filter(x => !x.exact),
      checks: frozen,
    },
    evidence_images: {
      expected: evidence.images.length,
      exact_identity_and_dimensions: imageChecks.filter(x => x.exact && x.dimensionExact).length,
      mismatches: imageChecks.filter(x => !x.exact || !x.dimensionExact),
      checks: imageChecks,
    },
    evidence_bindings: {
      expected: bindingEntries.length,
      exact: bindingEntries.filter(x => x.exact).length,
      mismatches: bindingEntries.filter(x => !x.exact),
      checks: bindingEntries,
    },
    index_drift: {
      frozen_snapshot: { path: frozenIndex, ...digest(frozenIndex) },
      live: { path: liveIndex, ...digest(liveIndex) },
      exact: digest(frozenIndex).sha256 === digest(liveIndex).sha256,
    },
  };
  fs.writeFileSync(out, JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({
    frozen: `${result.frozen_files.exact}/${result.frozen_files.expected}`,
    frozenMismatches: result.frozen_files.mismatches.map(x => x.path),
    images: `${result.evidence_images.exact_identity_and_dimensions}/${result.evidence_images.expected}`,
    bindingExact: `${result.evidence_bindings.exact}/${result.evidence_bindings.expected}`,
    bindingMismatches: result.evidence_bindings.mismatches.map(x => x.label),
    indexDrift: result.index_drift,
  }, null, 2));
})();
