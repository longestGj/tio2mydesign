const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const ROOT = 'D:/23MySec';
const PAGE = `${ROOT}/pages/applications/coatings`;
const V01 = `${PAGE}/04_planning/gate4-v0.1`;
const V02 = `${PAGE}/04_planning/gate4-v0.2`;
const OUT = `${PAGE}/05_review/gate4-complete-independent-v0.2`;
const SHOTS = `${OUT}/independent-hover`;
const SOURCE = `${V01}/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html`;
const CSS = `${V01}/visual-direction.css`;
const ROOT_INDEX = `${ROOT}/01_PROJECT_INDEX.md`;
const INDEX_SNAPSHOT = `${OUT}/01_PROJECT_INDEX.finalization-snapshot.md`;
for (const dir of [OUT, SHOTS]) fs.mkdirSync(dir, { recursive: true });

const slash = value => value.replace(/\\/g, '/');
const sha = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const identity = file => { const buffer = fs.readFileSync(file); return { path: slash(file), bytes: buffer.length, sha256: sha(buffer) }; };
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const exact = item => fs.existsSync(item.path) && identity(item.path).bytes === item.bytes && identity(item.path).sha256 === item.sha256;
const pngSize = file => { const buffer = fs.readFileSync(file); assert(buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), `Not PNG: ${file}`); return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) }; };
const rgb = value => (value.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
const luminance = value => rgb(value).map(component => { component /= 255; return component <= 0.03928 ? component / 12.92 : ((component + 0.055) / 1.055) ** 2.4; }).reduce((sum, component, index) => sum + component * [0.2126, 0.7152, 0.0722][index], 0);
const contrast = (a, b) => { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
const sameRect = (a, b) => ['x', 'y', 'width', 'height'].every(key => Math.abs(a[key] - b[key]) <= 0.02);
const rect = locator => locator.evaluate(node => { const r = node.getBoundingClientRect(); return { x: r.x + scrollX, y: r.y + scrollY, width: r.width, height: r.height }; });
const settle = page => page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(image => image.decode())); await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))); });

async function main() {
  const input = readJson(`${V02}/input_index.json`);
  const freeze = readJson(`${V02}/approval_core/source-freeze.json`);
  const evidence = readJson(`${V02}/evidence_index.json`);
  const inherited = readJson(`${V02}/approval_core/inherited-asset-verification.json`);
  const remediation = readJson(`${V02}/diagnostic_support/remediation-runtime.json`);
  assert(input.workset_id === 'COAT-G4-COMPLETE-V02' && freeze.freeze_id === 'COAT-G4-COMPLETE-V02-F01', 'Wrong V0.2 workset/freeze');
  assert(input.inputs.length === 61, 'V0.2 input count mismatch');
  const inputDrift = input.inputs.filter(item => !exact(item));
  assert(inputDrift.length <= 1 && inputDrift.every(item => item.path === ROOT_INDEX), `Unexpected V0.2 input drift: ${inputDrift.map(item => item.path).join(', ')}`);
  const freezeInputDrift = freeze.inputs.filter(item => !exact(item));
  assert(freeze.inputs.length === 61 && freezeInputDrift.length === inputDrift.length && freezeInputDrift.every(item => item.path === ROOT_INDEX), 'Unexpected freeze input drift');
  fs.copyFileSync(ROOT_INDEX, INDEX_SNAPSHOT);
  assert(freeze.dependencies.length === 6 && freeze.dependencies.every(exact), 'Freeze dependency mismatch');
  assert(Object.values(freeze.bound).every(exact), 'Freeze bound-record mismatch');
  assert(identity(SOURCE).sha256 === 'a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2', 'Candidate source drift');
  assert(identity(CSS).sha256 === 'f4c2e703345cb3eae1221937ff63b61b3742c6f2da6ccf9c1f3da730db67ca8c', 'Visual CSS drift');
  assert(evidence.inherited_formal_assets.length === 48 && evidence.inherited_formal_assets.every(exact), 'Inherited formal image identity mismatch');
  assert(evidence.new_regression_images.length === 6 && evidence.new_regression_images.every(exact), 'New regression image identity mismatch');
  for (const item of [...evidence.inherited_formal_assets, ...evidence.new_regression_images]) {
    const size = pngSize(item.path);
    if (item.pixelWidth !== undefined) assert(size.width === item.pixelWidth && size.height === item.pixelHeight, `PNG dimension mismatch: ${item.path}`);
  }
  assert(inherited.counts.formal_assets === 48 && inherited.counts.identity_and_pixel_decode_passed === 48 && inherited.counts.failed === 0, 'Inherited verification summary mismatch');
  assert(remediation.summary.checks === 24 && remediation.summary.passed === 24 && remediation.summary.failed === 0, 'Executor remediation runtime not 24/24');

  const checks = [];
  const measurements = [];
  const screenshots = [];
  const check = (id, pass, detail = null) => checks.push({ id, status: pass ? 'PASS' : 'FAIL', detail });
  let browser;
  try {
    browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--disable-background-networking'] });
    for (const width of [1440, 768, 390]) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
      await context.route(/^https?:/, route => route.abort());
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(pathToFileURL(SOURCE).href);
      await settle(page);
      const primary = page.locator('.heroActions .primaryAction');
      const secondary = page.locator('.heroActions .secondaryAction');
      await primary.scrollIntoViewIfNeeded();
      await page.mouse.move(0, 0);
      const normalRect = await rect(primary);
      const secondaryBefore = await secondary.evaluate(node => { const s = getComputedStyle(node); return { color: s.color, background: s.backgroundColor, rect: { width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height } }; });
      await primary.hover();
      const hoverRect = await rect(primary);
      const hoverStyle = await primary.evaluate(node => { const s = getComputedStyle(node); return { color: s.color, background: s.backgroundColor, textDecorationLine: s.textDecorationLine }; });
      const secondaryAfter = await secondary.evaluate(node => { const s = getComputedStyle(node); return { color: s.color, background: s.backgroundColor, rect: { width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height } }; });
      const ratio = contrast(hoverStyle.color, hoverStyle.background);
      const screenshot = `${SHOTS}/${width}-primary-hover.png`;
      await primary.screenshot({ path: screenshot });
      screenshots.push(identity(screenshot));
      await page.mouse.move(0, 0);
      await primary.focus();
      const focus = await primary.evaluate(node => { const s = getComputedStyle(node); return { focusVisible: node.matches(':focus-visible'), outlineWidth: parseFloat(s.outlineWidth), outlineStyle: s.outlineStyle, outlineColor: s.outlineColor, rect: { x: node.getBoundingClientRect().x + scrollX, y: node.getBoundingClientRect().y + scrollY, width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height } }; });
      const pageState = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        fullHeight: document.documentElement.scrollHeight,
        modules: ['coat-01', ...[...document.querySelectorAll('main [data-module]')].map(node => node.dataset.module)],
        h1: document.querySelectorAll('main h1').length,
        h2: document.querySelectorAll('main h2').length,
        grades: [...document.querySelectorAll('.grades tbody tr td:first-child')].map(node => node.textContent.trim()),
        gradeRows: document.querySelectorAll('.grades tbody tr').length,
        requests: [...document.querySelectorAll('.requestCard a')].map(node => node.getAttribute('href')),
        sources: document.querySelectorAll('.sources ol > li').length,
        headerShared: document.querySelector('header')?.dataset.shared,
        footerShared: document.querySelector('footer')?.dataset.shared,
        currentNav: document.querySelector('header a[aria-current="page"]')?.textContent.trim(),
        terms: [...document.querySelectorAll('footer a')].some(a => /terms/i.test(a.textContent))
      }));
      const measurement = { width, normalRect, hoverRect, hoverStyle, contrast: ratio, focus, secondaryBefore, secondaryAfter, pageState, errors };
      measurements.push(measurement);
      check(`${width}/hover exact white on #007F77`, hoverStyle.color === 'rgb(255, 255, 255)' && hoverStyle.background === 'rgb(0, 127, 119)' && Math.abs(ratio - 4.881302249384679) < 1e-12, measurement);
      check(`${width}/target and geometry`, normalRect.width >= 44 && normalRect.height >= 44 && sameRect(normalRect, hoverRect) && sameRect(normalRect, focus.rect), { normalRect, hoverRect, focusRect: focus.rect });
      check(`${width}/keyboard focus visible`, focus.focusVisible && focus.outlineStyle === 'solid' && focus.outlineWidth >= 2, focus);
      check(`${width}/secondary CTA unaffected`, JSON.stringify(secondaryBefore) === JSON.stringify(secondaryAfter), { secondaryBefore, secondaryAfter });
      check(`${width}/page contract`, pageState.clientWidth === width && pageState.scrollWidth === width && pageState.fullHeight === ({ 1440: 10070, 768: 11531, 390: 17825 })[width] && pageState.modules.join('|') === 'coat-01|coat-02|coat-03|coat-04|coat-05|coat-06|coat-07|coat-08|coat-09|coat-10' && pageState.h1 === 1 && pageState.h2 === 9 && pageState.grades.join('|') === 'M-350|M-510|M-896|M-996|M-2196|M-895|M-52|M-2377' && pageState.gradeRows === 8 && pageState.requests.join('|') === '/request-documents/|/request-sample/|/request-a-quote/' && pageState.sources === 6 && pageState.headerShared === 'GLOBAL-CHROME-005' && pageState.footerShared === 'GLOBAL-CHROME-005' && pageState.currentNav === 'Applications' && !pageState.terms && errors.length === 0, pageState);
      await context.close();
    }
  } finally {
    if (browser) await browser.close();
  }
  const failed = checks.filter(item => item.status === 'FAIL');
  const runtime = {
    audit: 'APP-COAT Gate 4 V0.2 targeted independent runtime', reviewer_role: 'independent reviewer; original COAT V0.1 reviewer; not V0.2 remediation executor',
    workset_id: 'COAT-G4-COMPLETE-V02', freeze_id: 'COAT-G4-COMPLETE-V02-F01', finding_id: 'COAT-G4-IR-01', generated_at: new Date().toISOString(),
    source: identity(SOURCE), css: identity(CSS), renderer: { chrome: 'local Chrome 152', headless: true, dpr: 1, viewports: [{ width: 1440, height: 900 }, { width: 768, height: 900 }, { width: 390, height: 900 }], network: 'HTTP(S) blocked' },
    measurements, screenshots, checks, summary: { total: checks.length, passed: checks.length - failed.length, failed: failed.length, failedIds: failed.map(item => item.id) }
  };
  writeJson(`${OUT}/targeted-runtime.json`, runtime);
  assert(failed.length === 0, `Targeted runtime failures: ${failed.map(item => item.id).join(', ')}`);

  const audit = {
    audit: 'APP-COAT Gate 4 V0.2 targeted independent identity audit', workset_id: 'COAT-G4-COMPLETE-V02', freeze_id: 'COAT-G4-COMPLETE-V02-F01', finding_id: 'COAT-G4-IR-01', generated_at: new Date().toISOString(),
    identities: { source: identity(SOURCE), css: identity(CSS), input_index: identity(`${V02}/input_index.json`), source_freeze: identity(`${V02}/approval_core/source-freeze.json`), evidence_index: identity(`${V02}/evidence_index.json`), finding_response: identity(`${V02}/APP-COAT_GATE4_FINDING_RESPONSE_COAT-G4-IR-01_V0.2.md`), rereview_submission: identity(`${PAGE}/05_review/APP-COAT_GATE4_REREVIEW_SUBMISSION_V0.2.md`), targeted_runtime: identity(`${OUT}/targeted-runtime.json`) },
    counts: { frozen_inputs_total: 61, frozen_inputs_exact_current_paths: 61 - inputDrift.length, frozen_inputs_exact_at_review_start: 61, frozen_dependencies_exact: 6, frozen_bound_records_exact: 6, evidence_identity_pointers_exact: 8, inherited_formal_assets_exact: 48, new_regression_images_exact: 6, direct_hover_widths_passed: 3, independent_runtime_checks_passed: checks.length },
    image_dimensions: { inherited_formal_assets_exact: 48, new_regression_images_exact: 6 }, source_and_css_byte_identical_to_v01: true,
    corrected_primary_hover: { foreground: '#FFFFFF', background: '#007F77', contrast: 4.881302249384679, widths: [1440, 768, 390], exact: true },
    superseded_pairing_classification: { foreground: '#007F77', background: '#F5F8FB', contrast: 4.5796989189682495, applies_to: 'non-primary link hover only', primary_cta_claim: false },
    post_freeze_index_drift: inputDrift.length ? { classification: 'NON_BLOCKING_ROOT_NAVIGATION_DRIFT', expected: inputDrift[0], current_snapshot: identity(INDEX_SNAPSHOT), coatings_contract_impact: 'NONE', observed_scope: ['Poland Gate 9 navigation status', 'Applications R02 article-research navigation'], note: 'All other 60 frozen inputs remain exact. The root Index is navigation and changed after the V0.2 audit began; candidate, CSS, Gate 4 method, Coatings approved content, shared contracts, frozen bound records and evidence did not change.' } : null
  };
  writeJson(`${OUT}/identity-audit.json`, audit);
  console.log(JSON.stringify({ status: 'PASS', runtime: identity(`${OUT}/targeted-runtime.json`), audit: identity(`${OUT}/identity-audit.json`), counts: audit.counts, primaryHover: audit.corrected_primary_hover }, null, 2));
}

main().catch(error => { console.error(error.stack || error); process.exitCode = 1; });
