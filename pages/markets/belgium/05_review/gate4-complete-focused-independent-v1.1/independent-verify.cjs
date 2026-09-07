const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = 'D:/23MySec';
const pageRoot = `${root}/pages/markets/belgium`;
const oldDir = `${pageRoot}/04_planning/gate4-v1.0`;
const candidateDir = `${pageRoot}/04_planning/gate4-v1.1`;
const reviewDir = `${pageRoot}/05_review/gate4-complete-focused-independent-v1.1`;
const shotDir = `${reviewDir}/focus-readback`;
const source = `${candidateDir}/MARKET-EU-BE_GATE4_COMPLETE_VISUAL_V1.1.html`;
const oldSource = `${oldDir}/MARKET-EU-BE_GATE4_COMPLETE_VISUAL_V1.0.html`;
const inputIndexPath = `${candidateDir}/MARKET-EU-BE_GATE4_INPUT_INDEX_V1.1.json`;
const worksetPath = `${candidateDir}/MARKET-EU-BE_GATE4_WORKSET_V1.1.json`;
const preflightPath = `${candidateDir}/MARKET-EU-BE_GATE4_PREFLIGHT_RECORD_V1.1.json`;
const freezePath = `${candidateDir}/MARKET-EU-BE_GATE4_FREEZE_RECORD_V1.1.json`;
const evidencePath = `${candidateDir}/MARKET-EU-BE_GATE4_EVIDENCE_INDEX_V1.1.json`;
const observationPaths = [
  `${candidateDir}/diagnostic_support/revision-admission-and-diff.json`,
  `${candidateDir}/diagnostic_support/render-r1/runtime-checks.json`,
  `${candidateDir}/diagnostic_support/focus-repair-runtime.json`,
  `${candidateDir}/diagnostic_support/final-delivery-readback.json`,
  `${candidateDir}/diagnostic_support/visual-readback-and-identity.json`
];

fs.mkdirSync(shotDir, { recursive: true });
for (const name of fs.readdirSync(shotDir)) fs.rmSync(path.join(shotDir, name));

const hash = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const identity = file => {
  const buffer = fs.readFileSync(file);
  return { path: file.replaceAll('\\', '/'), bytes: buffer.length, sha256: hash(buffer) };
};
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const checks = [];
const check = (key, ok, detail = null) => checks.push({ key, status: ok ? 'PASS' : 'FAIL', detail });
const pngSize = file => {
  const b = fs.readFileSync(file);
  if (b.length < 24 || b.toString('hex', 0, 8) !== '89504e470d0a1a0a') return null;
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
};
const normalizePath = value => value.replaceAll('\\', '/');
const resolveClaimPath = value => {
  const normalized = normalizePath(value);
  return /^[A-Za-z]:\//.test(normalized) ? normalized : `${root}/${normalized.replace(/^\.\//, '')}`;
};

const identityDocs = [inputIndexPath, worksetPath, preflightPath, freezePath, evidencePath, ...observationPaths];
const parsedDocs = identityDocs.map(file => ({ file, data: readJson(file) }));
const claims = [];
function collectClaims(value, documentPath, pointer = '$') {
  if (!value || typeof value !== 'object') return;
  if (!Array.isArray(value) && typeof value.path === 'string' && typeof value.sha256 === 'string') {
    claims.push({ documentPath, pointer, path: resolveClaimPath(value.path), sha256: value.sha256, bytes: value.bytes });
  }
  if (Array.isArray(value)) value.forEach((child, index) => collectClaims(child, documentPath, `${pointer}[${index}]`));
  else Object.entries(value).forEach(([key, child]) => collectClaims(child, documentPath, `${pointer}.${key}`));
}
parsedDocs.forEach(({ file, data }) => collectClaims(data, file));

const pathClaims = new Map();
for (const claim of claims) {
  const list = pathClaims.get(claim.path) || [];
  list.push(claim);
  pathClaims.set(claim.path, list);
}
const identityFailures = [];
for (const [file, fileClaims] of pathClaims) {
  if (!fs.existsSync(file)) {
    identityFailures.push({ path: file, reason: 'MISSING', claims: fileClaims.length });
    continue;
  }
  const actual = identity(file);
  for (const claim of fileClaims) {
    if (actual.sha256 !== claim.sha256 || (claim.bytes !== undefined && actual.bytes !== claim.bytes)) {
      identityFailures.push({ path: file, pointer: claim.pointer, documentPath: claim.documentPath, claimed: { sha256: claim.sha256, bytes: claim.bytes }, actual });
    }
  }
}
const conflictingClaims = [...pathClaims].flatMap(([file, fileClaims]) => {
  const identities = [...new Set(fileClaims.map(item => `${item.sha256}/${item.bytes ?? ''}`))];
  return identities.length > 1 ? [{ path: file, identities }] : [];
});
check('all recursively indexed identities resolve', identityFailures.length === 0, { claimOccurrences: claims.length, uniquePaths: pathClaims.size, failures: identityFailures });
check('no conflicting indexed identities', conflictingClaims.length === 0, conflictingClaims);

const inputIndex = readJson(inputIndexPath);
const workset = readJson(worksetPath);
const preflight = readJson(preflightPath);
const freeze = readJson(freezePath);
const evidence = readJson(evidencePath);
check('workset and freeze identifiers are exact', workset.workset_id === 'BE-G4-COMPLETE-20260907-02' && evidence.workset_id === workset.workset_id && freeze.workset_id === workset.workset_id && evidence.freeze_id === 'BE-G4-FREEZE-20260907-02' && freeze.freeze_id === evidence.freeze_id, { workset: workset.workset_id, freeze: freeze.freeze_id });
check('input inventory cardinality', inputIndex.upstream.length === 45 && inputIndex.current_methods_and_contracts.length === 11 && inputIndex.previous_and_finding.length === 5, { upstream: inputIndex.upstream.length, methodsAndContracts: inputIndex.current_methods_and_contracts.length, previousAndFinding: inputIndex.previous_and_finding.length });
check('evidence inventory cardinality', evidence.images.length === 45 && evidence.counts.total_unique_images === 45, { images: evidence.images.length, declared: evidence.counts });

const states = evidence.images.reduce((acc, item) => { acc[item.state] = (acc[item.state] || 0) + 1; return acc; }, {});
check('evidence state distribution', states.FULL === 3 && states.MENU === 2 && states.COOKIE === 3 && states.CONTINUOUS_SEGMENT === 19 && states.NORMAL === 6 && states.HOVER === 6 && states.FOCUS === 6, states);
const pngFailures = [];
for (const item of evidence.images) {
  const size = pngSize(resolveClaimPath(item.path));
  if (!size || size.width !== item.physical_width || size.height !== item.physical_height) pngFailures.push({ path: item.path, declared: { width: item.physical_width, height: item.physical_height }, actual: size });
}
check('all evidence PNG dimensions agree', pngFailures.length === 0, pngFailures);

const expectedHeights = new Map(evidence.images.filter(item => item.state === 'FULL').map(item => [item.logical_width, item.physical_height]));
const segmentCoverage = {};
for (const width of [1440, 768, 390]) {
  const segments = evidence.images.filter(item => item.state === 'CONTINUOUS_SEGMENT' && item.logical_width === width).sort((a, b) => a.clip.y - b.clip.y);
  let cursor = 0;
  let noGap = segments.length > 0 && segments[0].clip.y === 0;
  for (const segment of segments) {
    if (segment.clip.y > cursor) noGap = false;
    cursor = Math.max(cursor, segment.clip.y + segment.clip.height);
  }
  segmentCoverage[width] = { count: segments.length, noGap, coveredThrough: cursor, fullHeight: expectedHeights.get(width), reachesEnd: cursor >= expectedHeights.get(width) };
}
check('continuous segment coverage has no gap and reaches each full-page end', Object.values(segmentCoverage).every(item => item.noGap && item.reachesEnd) && segmentCoverage[1440].count === 5 && segmentCoverage[768].count === 6 && segmentCoverage[390].count === 8, segmentCoverage);

const oldText = fs.readFileSync(oldSource, 'utf8');
const newText = fs.readFileSync(source, 'utf8');
const oldRule = "main [data-module='BE-04'] p:not(.action) a{display:inline-block;vertical-align:baseline;line-height:44px;min-height:44px}";
const newRule = "main [data-module='BE-04'] p:not(.action) a{display:inline-block;vertical-align:baseline;line-height:44px;min-height:44px;padding-inline:6px;outline-offset:-3px}";
const occurrences = text => text.split(oldRule).length - 1;
check('source diff is one scoped BE-04 rule replacement', occurrences(oldText) === 1 && oldText.replace(oldRule, newRule) === newText, { oldSource: identity(oldSource), newSource: identity(source) });

const parseRgb = value => (value.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
const luminance = rgb => rgb.map(value => { const c = value / 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
const contrast = (a, b) => { const l1 = luminance(parseRgb(a)); const l2 = luminance(parseRgb(b)); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); };
const near = (a, b) => Math.abs(a - b) <= 0.02;
const sameRect = (a, b) => ['x', 'y', 'width', 'height'].every(k => near(a[k], b[k]));
const browserEvidence = { widths: [], focusCases: [], retainedStates: [], fullPageRerenders: [], drift: [] };

async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(image => image.decode()));
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}
async function clearState(page) {
  await page.mouse.move(0, 0);
  await page.evaluate(() => { if (document.activeElement instanceof HTMLElement) document.activeElement.blur(); scrollTo(0, 0); });
  await page.waitForTimeout(30);
}
async function focusByKeyboard(page, locator) {
  await clearState(page);
  for (let i = 1; i <= 80; i += 1) {
    await page.keyboard.press('Tab');
    if (await locator.evaluate(el => document.activeElement === el)) return i;
  }
  return null;
}
async function inspectFocused(locator) {
  return locator.evaluate(element => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    const width = parseFloat(style.outlineWidth);
    const offset = parseFloat(style.outlineOffset);
    const outerExpansion = Math.max(0, width + offset);
    const bands = [
      { left: rect.left - outerExpansion, right: rect.left - outerExpansion + width, top: rect.top - outerExpansion, bottom: rect.bottom + outerExpansion },
      { left: rect.right + outerExpansion - width, right: rect.right + outerExpansion, top: rect.top - outerExpansion, bottom: rect.bottom + outerExpansion },
      { left: rect.left - outerExpansion, right: rect.right + outerExpansion, top: rect.top - outerExpansion, bottom: rect.top - outerExpansion + width },
      { left: rect.left - outerExpansion, right: rect.right + outerExpansion, top: rect.bottom + outerExpansion - width, bottom: rect.bottom + outerExpansion }
    ];
    const intersects = r => bands.some(b => r.right > b.left && r.left < b.right && r.bottom > b.top && r.top < b.bottom);
    const scan = (root, includeSelf) => {
      const hits = [];
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (element.contains(node) !== includeSelf) continue;
        for (let i = 0; i < node.length; i += 1) {
          if (!node.textContent[i].trim()) continue;
          const range = document.createRange(); range.setStart(node, i); range.setEnd(node, i + 1);
          for (const r of range.getClientRects()) if (intersects(r)) hits.push({ char: node.textContent[i], x: r.x, y: r.y, width: r.width, height: r.height });
        }
      }
      return hits;
    };
    return {
      focused: element.matches(':focus-visible'),
      rect: { x: rect.x + scrollX, y: rect.y + scrollY, width: rect.width, height: rect.height },
      viewportRect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
      computed: { outlineColor: style.outlineColor, outlineStyle: style.outlineStyle, outlineWidth: width, outlineOffset: offset, paddingInlineStart: parseFloat(style.paddingInlineStart), paddingInlineEnd: parseFloat(style.paddingInlineEnd) },
      selfHits: scan(element, true),
      neighborHits: scan(element.closest('p'), false)
    };
  });
}
async function rect(locator) { return locator.evaluate(el => { const r = el.getBoundingClientRect(); return { x: r.x + scrollX, y: r.y + scrollY, width: r.width, height: r.height }; }); }
async function clipFor(page, locator) {
  const box = await locator.boundingBox();
  const p = await locator.locator('xpath=ancestor::p[1]').boundingBox();
  const viewport = page.viewportSize();
  return { x: Math.max(0, p.x - 10), y: Math.max(0, box.y - 40), width: Math.min(viewport.width, p.x + p.width + 10) - Math.max(0, p.x - 10), height: Math.min(viewport.height, box.y + box.height + 40) - Math.max(0, box.y - 40) };
}
async function pageSignature(page) {
  return page.evaluate(() => ({
    lang: document.documentElement.lang,
    title: document.title,
    canonical: document.querySelector('link[rel=canonical]')?.getAttribute('href') || null,
    modules: [...document.querySelectorAll('main [data-module]')].map(el => el.dataset.module),
    mainText: document.querySelector('main').innerText.replace(/\s+/g, ' ').trim(),
    links: [...document.querySelectorAll('main a')].map(a => ({ text: a.innerText.trim(), href: a.getAttribute('href') })),
    header: document.querySelector('header')?.outerHTML,
    footer: document.querySelector('footer')?.outerHTML,
    cookie: document.querySelector('.cookie-layer')?.outerHTML
  }));
}

(async () => {
  let browser;
  const errors = [];
  try {
    browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--disable-background-networking'] });
    for (const width of [1440, 768, 390]) {
      const height = width === 390 ? 844 : 900;
      const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
      await context.route(/^https?:/, route => route.abort());
      const page = await context.newPage();
      page.on('pageerror', error => errors.push(`${width}: ${error.message}`));
      await page.goto(pathToFileURL(source).href); await settle(page); await clearState(page);
      const signature = await pageSignature(page);
      const geometry = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth, height: document.documentElement.scrollHeight, clipped: [...document.querySelectorAll('main *')].filter(el => { const s = getComputedStyle(el); return /hidden|clip/.test(s.overflowY) && el.scrollHeight > el.clientHeight + 1; }).length, overflow: [...document.querySelectorAll('main *')].filter(el => { const r = el.getBoundingClientRect(); return r.width > 0 && (r.left < -0.5 || r.right > innerWidth + 0.5); }).length }));
      browserEvidence.widths.push({ width, geometry, signature: { lang: signature.lang, title: signature.title, canonical: signature.canonical, modules: signature.modules, links: signature.links } });
      check(`${width}/full page geometry`, geometry.scrollWidth === width && geometry.clientWidth === width && geometry.height === expectedHeights.get(width) && geometry.clipped === 0 && geometry.overflow === 0, geometry);

      const oldPage = await context.newPage(); await oldPage.goto(pathToFileURL(oldSource).href); await settle(oldPage);
      const oldSignature = await pageSignature(oldPage);
      const same = JSON.stringify(signature) === JSON.stringify(oldSignature);
      browserEvidence.drift.push({ width, noDrift: same, modules: signature.modules, linkCount: signature.links.length });
      check(`${width}/approved copy URL modules and shared DOM unchanged from reviewed V1.0`, same, { modules: signature.modules, linkCount: signature.links.length });
      await oldPage.close();

      const expectedFull = evidence.images.find(item => item.state === 'FULL' && item.logical_width === width);
      const fullBuffer = await page.screenshot({ fullPage: true });
      const fullSha = hash(fullBuffer);
      browserEvidence.fullPageRerenders.push({ width, sha256: fullSha, indexedSha256: expectedFull.sha256, pixelIdentical: fullSha === expectedFull.sha256 });
      check(`${width}/full-page rerender matches indexed evidence`, fullSha === expectedFull.sha256, { rerendered: fullSha, indexed: expectedFull.sha256 });

      const targets = [{ index: 0, slug: 'product-hub', label: 'Product Hub' }, { index: 1, slug: 'quotation-request', label: 'quotation request' }];
      for (const target of targets) {
        const locator = page.locator('[data-module="BE-04"] p:not(.action) a').nth(target.index);
        await locator.scrollIntoViewIfNeeded(); await page.mouse.move(0, 0); await locator.evaluate(el => el.blur());
        const normalRect = await rect(locator);
        await page.screenshot({ path: `${shotDir}/${width}-${target.slug}-normal.png`, clip: await clipFor(page, locator) });
        await locator.hover(); const hoverRect = await rect(locator);
        await page.screenshot({ path: `${shotDir}/${width}-${target.slug}-hover.png`, clip: await clipFor(page, locator) });
        const tabs = await focusByKeyboard(page, locator); await locator.evaluate(el => el.scrollIntoView({ block: 'center' })); await page.waitForTimeout(30);
        const focusRect = await rect(locator); const focused = await inspectFocused(locator);
        await page.screenshot({ path: `${shotDir}/${width}-${target.slug}-focus.png`, clip: await clipFor(page, locator) });
        const ratio = contrast(focused.computed.outlineColor, 'rgb(255, 255, 255)');
        const item = { width, label: target.label, tabs, normalRect, hoverRect, focusRect, focused, contrastAgainstWhite: ratio, geometryStable: sameRect(normalRect, hoverRect) && sameRect(normalRect, focusRect) };
        browserEvidence.focusCases.push(item);
        check(`${width}/${target.label}/keyboard focus visible`, tabs !== null && focused.focused && focused.computed.outlineStyle === 'solid' && focused.computed.outlineWidth === 3, { tabs, computed: focused.computed });
        check(`${width}/${target.label}/zero focus collision`, focused.selfHits.length === 0 && focused.neighborHits.length === 0, { selfHits: focused.selfHits, neighborHits: focused.neighborHits });
        check(`${width}/${target.label}/44px target`, focused.rect.width >= 44 && focused.rect.height >= 44, focused.rect);
        check(`${width}/${target.label}/focus contrast`, ratio >= 3, ratio);
        check(`${width}/${target.label}/geometry stable`, item.geometryStable, { normalRect, hoverRect, focusRect });
      }

      await clearState(page);
      if (width < 1101) {
        await page.locator('.menuButton').click(); await settle(page);
        const current = hash(await page.screenshot({ fullPage: false }));
        const retained = evidence.images.find(item => item.state === 'MENU' && item.logical_width === width);
        browserEvidence.retainedStates.push({ width, state: 'MENU', rerenderedSha256: current, retainedSha256: retained.sha256, pixelIdentical: current === retained.sha256 });
        check(`${width}/Menu retained evidence is pixel-identical`, current === retained.sha256, { current, retained: retained.sha256 });
        await page.keyboard.press('Escape');
      }
      await page.locator('#cookie-trigger').click(); await settle(page);
      const currentCookie = hash(await page.screenshot({ fullPage: false }));
      const retainedCookie = evidence.images.find(item => item.state === 'COOKIE' && item.logical_width === width);
      browserEvidence.retainedStates.push({ width, state: 'COOKIE', rerenderedSha256: currentCookie, retainedSha256: retainedCookie.sha256, pixelIdentical: currentCookie === retainedCookie.sha256 });
      check(`${width}/Cookie retained evidence is pixel-identical`, currentCookie === retainedCookie.sha256, { current: currentCookie, retained: retainedCookie.sha256 });
      await page.locator('[data-cookie-close]').click();
      check(`${width}/Menu Cookie close restores normal footer`, await page.locator('footer').evaluate(() => !document.querySelector('.cookie-layer').open && (innerWidth >= 1101 || document.querySelector('.mobileNav').hidden)), null);
      await context.close();
    }
  } catch (error) {
    errors.push(error.stack || String(error));
  } finally {
    if (browser) await browser.close();
    const report = {
      review_id: 'BE-G4-IR-20260907-02',
      page_id: 'MARKET-EU-BE',
      workset_id: 'BE-G4-COMPLETE-20260907-02',
      freeze_id: 'BE-G4-FREEZE-20260907-02',
      role: 'INDEPENDENT_PROJECT_CONTROL_FOCUSED_REREVIEW',
      generated_at: new Date().toISOString(),
      fixed_inputs: identityDocs.map(identity),
      identity_audit: { claimOccurrences: claims.length, uniquePaths: pathClaims.size, failures: identityFailures, conflictingClaims },
      inventory: { input: { upstream: inputIndex.upstream.length, methodsAndContracts: inputIndex.current_methods_and_contracts.length, previousAndFinding: inputIndex.previous_and_finding.length }, evidenceStates: states, segmentCoverage },
      browser: browserEvidence,
      checks,
      errors,
      failed: checks.filter(item => item.status === 'FAIL'),
      required_finding_count: checks.some(item => item.status === 'FAIL') || errors.length ? 1 : 0,
      status: checks.some(item => item.status === 'FAIL') || errors.length ? 'CHANGES_REQUIRED' : 'PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL',
      boundary: 'Independent focused Gate 4 review only. This is not user approval, Gate 4 closure, Gate 6 authorization, implementation, deployment, or publication.'
    };
    const output = `${reviewDir}/independent-verification.json`;
    fs.writeFileSync(output, JSON.stringify(report, null, 2));
    console.log(JSON.stringify({ status: report.status, checks: checks.length, failed: report.failed.map(item => item.key), errors, identityAudit: report.identity_audit, evidenceStates: states, focusCases: browserEvidence.focusCases.length, retainedStates: browserEvidence.retainedStates.length, fullPageRerenders: browserEvidence.fullPageRerenders.length, output: identity(output) }, null, 2));
    if (report.status === 'CHANGES_REQUIRED') process.exitCode = 1;
  }
})();
