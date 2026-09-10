const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const rel = (...parts) => path.join(root, ...parts);
const visualDir = rel('pages', 'home', '04_planning', 'visual-designs', 'home-applications-aligned-v1.1');
const previousDir = rel('pages', 'home', '04_planning', 'visual-designs', 'home-applications-aligned-v1.0');
const output = path.join(visualDir, 'freeze-record.json');
const sha = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').toUpperCase();
const bytes = (file) => fs.statSync(file).size;
const portable = (file) => file.startsWith(root) ? path.relative(root, file).replace(/\\/g, '/') : file.replace(/\\/g, '/');
const pngSize = (file) => {
  const data = fs.readFileSync(file);
  return {width: data.readUInt32BE(16), height: data.readUInt32BE(20)};
};
const identity = (role, file) => ({role, path: portable(file), bytes: bytes(file), sha256: sha(file)});
const mainBytes = (file) => {
  const text = fs.readFileSync(file, 'utf8');
  const match = text.match(/<main>[\s\S]*?<\/main>/);
  if (!match) throw new Error(`No main element found in ${file}`);
  return Buffer.from(match[0], 'utf8');
};
const mainSha = (file) => crypto.createHash('sha256').update(mainBytes(file)).digest('hex').toUpperCase();

const source = path.join(visualDir, 'homepage-applications-aligned-preview-v1.1.html');
const previousSource = path.join(previousDir, 'homepage-applications-aligned-preview-v1.0.html');
const dependencyFiles = [
  ['Inter variable font', path.join(visualDir, 'dependencies', 'Inter-Variable.ttf')],
  ['Existing approved Home powder image', rel('pages', 'home', '04_planning', 'visual-designs', 'assets', 'homepage-hero-tio2-material-v0.6.png')],
  ['Shared Chrome contract', rel('docs', 'architecture', 'GLOBAL_HEADER_FOOTER_SPEC_V0.5.md')],
  ['Footer legal utility addendum', rel('docs', 'architecture', 'GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md')],
  ['Production SVG Logo authority', rel('brand', 'logo', 'production', 'PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md')],
  ['Header Logo SVG', rel('brand', 'logo', 'candidates', 'v0.1', 'tio2-malaysia-primary-horizontal-v0.1.svg')],
  ['Footer reverse Logo SVG', rel('brand', 'logo', 'candidates', 'v0.1', 'tio2-malaysia-reverse-monochrome-v0.1.svg')],
  ['Brand visual standard', rel('brand', 'visual', 'TiO2_Malaysia_Visual_Standard_V1.0.md')],
  ['Primary CTA accessibility override', rel('brand', 'visual', 'TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md')],
  ['Shared Chrome React assembly', 'D:/16Wordpress_nextjs/components/sites/tio2-my/malaysia-global-chrome.tsx'],
  ['Shared Chrome client behavior', 'D:/16Wordpress_nextjs/components/sites/tio2-my/malaysia-global-chrome-client.tsx'],
  ['Shared Chrome CSS', 'D:/16Wordpress_nextjs/components/sites/tio2-my/malaysia-global-chrome.module.css'],
  ['Applications visual token source', 'D:/16Wordpress_nextjs/components/sites/tio2-my/applications/malaysia-application-hub.module.css'],
  ['Home visible content and href source', 'D:/16Wordpress_nextjs/wordpress/plugins/tio2-site-model/config/tio2-my-homepage.json'],
  ['Existing Home renderer reference', 'D:/16Wordpress_nextjs/components/sites/tio2-my/homepage/malaysia-homepage.tsx'],
];
const captureSpecs = [
  ['home-001-applications-aligned-1440-v1.1.png', 1440, 900, 'default'],
  ['home-001-applications-aligned-1024-v1.1.png', 1024, 900, 'default'],
  ['home-001-applications-aligned-768-v1.1.png', 768, 900, 'default'],
  ['home-001-applications-aligned-390-v1.1.png', 390, 844, 'default'],
  ['home-001-applications-aligned-320-v1.1.png', 320, 760, 'default'],
  ['home-001-mobile-menu-390-v1.1.png', 390, 844, 'mobile-menu-open'],
  ['home-001-products-expanded-390-v1.1.png', 390, 844, 'products-expanded'],
];
const assets = captureSpecs.map(([file, viewport_width, viewport_height, state]) => {
  const full = path.join(visualDir, file);
  return {file, viewport_width, viewport_height, ...pngSize(full), state, bytes: bytes(full), sha256: sha(full)};
});
const previousFreeze = JSON.parse(fs.readFileSync(path.join(previousDir, 'freeze-record.json'), 'utf8'));
const bodyV10 = mainSha(previousSource);
const bodyV11 = mainSha(source);
if (bodyV10 !== bodyV11) throw new Error(`Body preservation failed: ${bodyV10} != ${bodyV11}`);

const record = {
  workset_id: 'HOME-001-G4-APP-ALIGN-V1-20260911',
  bundle_id: 'HOME-001-G4-APP-ALIGN-BUNDLE-V1.1',
  capture_date: '2026-09-11',
  finding: 'HOME-G5-VR-01',
  status: 'RESOLVED_IN_DRAFT_PENDING_GATE5_TARGETED_RECHECK',
  lifecycle: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW',
  review_stage: 'GATE5_TARGETED_RECHECK_PENDING',
  gate_6: 'NOT_STARTED',
  gate_8: 'NOT_AUTHORIZED',
  scope: 'Targeted Gate 4 repair of static shared Global Chrome rendering only; Home body remains raw-identical to V1.0',
  source: {path: portable(source), bytes: bytes(source), sha256: sha(source)},
  body_preservation: {
    segment: '<main>...</main> exact UTF-8 bytes',
    previous_source: portable(previousSource),
    previous_sha256: bodyV10,
    current_sha256: bodyV11,
    match: true,
  },
  previous_bundle_immutability: {
    bundle_id: previousFreeze.bundle_id,
    freeze_record_sha256: sha(path.join(previousDir, 'freeze-record.json')),
    source_sha256: sha(previousSource),
    font_dependency: {
      file: 'dependencies/Inter-Variable.ttf',
      sha256: sha(path.join(previousDir, 'dependencies', 'Inter-Variable.ttf')),
    },
    assets: previousFreeze.assets.map(({file, sha256}) => ({file, sha256})),
  },
  renderer: {
    browser: 'Chromium via Playwright', device_scale_factor: 1, color_scheme: 'light', reduced_motion: 'reduce', font_family: 'Inter',
    font_dependency: portable(path.join(visualDir, 'dependencies', 'Inter-Variable.ttf')),
    font_dependency_sha256: sha(path.join(visualDir, 'dependencies', 'Inter-Variable.ttf')),
    media_load: 'Existing Home powder PNG and approved production SVG Logo files loaded from pinned local paths',
  },
  dependencies: dependencyFiles.map(([role, file]) => identity(role, file)),
  assets,
  formal_assets_opened_and_inspected: 7,
  author_required_findings_open: 0,
  independent_review_claimed: false,
  approval_claimed: false,
  implementation_claimed: false,
};
fs.writeFileSync(output, `${JSON.stringify(record, null, 2)}\n`, 'utf8');
process.stdout.write(`wrote ${portable(output)}\nbody-match ${bodyV11}\nassets ${assets.length}\n`);
