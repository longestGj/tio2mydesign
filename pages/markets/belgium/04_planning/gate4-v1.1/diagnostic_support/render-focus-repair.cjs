const fs = require('fs');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const base = 'D:/23MySec/pages/markets/belgium';
const oldDir = `${base}/04_planning/gate4-v1.0`;
const out = `${base}/04_planning/gate4-v1.1`;
const source = `${out}/MARKET-EU-BE_GATE4_COMPLETE_VISUAL_V1.1.html`;
const coreDir = `${out}/approval_core`;
const segmentDir = `${out}/diagnostic_support/render-r1`;
const focusDir = `${out}/diagnostic_support/focus-repair`;
for (const dir of [coreDir, segmentDir, focusDir]) fs.mkdirSync(dir, { recursive: true });

const shaBuffer = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const identity = path => {
  const buffer = fs.readFileSync(path);
  return { path, bytes: buffer.length, sha256: shaBuffer(buffer) };
};
const closeEnough = (a, b) => Math.abs(a - b) <= 0.02;
const sameRect = (a, b) => ['x', 'y', 'width', 'height'].every(key => closeEnough(a[key], b[key]));
const documentRect = locator => locator.evaluate(element => {
  const rect = element.getBoundingClientRect();
  return { x: rect.x + scrollX, y: rect.y + scrollY, width: rect.width, height: rect.height };
});
const parseRgb = value => (value.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
const luminance = rgb => {
  const channels = rgb.map(value => {
    const normalized = value / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};
const contrast = (one, two) => {
  const first = luminance(parseRgb(one));
  const second = luminance(parseRgb(two));
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
};

const oldEvidence = JSON.parse(fs.readFileSync(`${oldDir}/MARKET-EU-BE_GATE4_EVIDENCE_INDEX_V1.0.json`, 'utf8'));
const oldCore = new Map(oldEvidence.images.filter(item => item.path.includes('/approval_core/')).map(item => [item.path.match(/(\d+)_(FULL|MENU|COOKIE)_/)[0].replace(/_$/, ''), item]));
const oldFull = new Map([1440, 768, 390].map(width => [width, oldCore.get(`${width}_FULL`)]));

const record = {
  page_id: 'MARKET-EU-BE',
  workset_id: 'BE-G4-COMPLETE-20260907-02',
  freeze_id: 'BE-G4-FREEZE-20260907-02',
  finding_id: 'BE-G4-IR-01',
  role: 'EXECUTION_SELF_CHECK',
  generated_at: new Date().toISOString(),
  runtime: { node: process.version, headless: true, dpr: 1 },
  source: identity(source),
  checks: [],
  full_pages: [],
  continuous_segments: [],
  focus_states: [],
  retained_state_equivalence: [],
  errors: []
};
const check = (key, ok, detail) => record.checks.push({ key, status: ok ? 'PASS' : 'FAIL', detail });

async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(image => image.decode()));
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}

async function clearState(page) {
  await page.mouse.move(0, 0);
  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    scrollTo(0, 0);
  });
  await page.waitForTimeout(50);
}

async function captureBuffer(page) {
  return page.screenshot({ fullPage: false });
}

async function focusByKeyboard(page, locator) {
  await clearState(page);
  for (let step = 0; step < 80; step += 1) {
    await page.keyboard.press('Tab');
    if (await locator.evaluate(element => document.activeElement === element)) return step + 1;
  }
  throw new Error(`Keyboard traversal did not reach ${await locator.textContent()}`);
}

async function inspectFocus(locator) {
  return locator.evaluate(element => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    const offset = parseFloat(style.outlineOffset);
    const width = parseFloat(style.outlineWidth);
    const expansion = Math.max(0, offset + width);
    const bands = [
      { x: rect.left - expansion, y: rect.top - expansion, w: width, h: rect.height + 2 * expansion },
      { x: rect.right + expansion - width, y: rect.top - expansion, w: width, h: rect.height + 2 * expansion },
      { x: rect.left - expansion, y: rect.top - expansion, w: rect.width + 2 * expansion, h: width },
      { x: rect.left - expansion, y: rect.bottom + expansion - width, w: rect.width + 2 * expansion, h: width }
    ];
    const intersects = candidate => bands.some(band => candidate.right > band.x && candidate.left < band.x + band.w && candidate.bottom > band.y && candidate.top < band.y + band.h);
    const scan = (root, relation) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const hits = [];
      while (walker.nextNode()) {
        const node = walker.currentNode;
        const inside = element.contains(node);
        if ((relation === 'self') !== inside) continue;
        for (let index = 0; index < node.length; index += 1) {
          if (!node.textContent[index].trim()) continue;
          const range = document.createRange();
          range.setStart(node, index);
          range.setEnd(node, index + 1);
          for (const candidate of range.getClientRects()) {
            if (intersects(candidate)) hits.push({ character: node.textContent[index], text: node.textContent, rect: { x: candidate.x, y: candidate.y, width: candidate.width, height: candidate.height } });
          }
        }
      }
      return hits;
    };
    return {
      label: element.textContent,
      focused: element.matches(':focus-visible'),
      rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
      computed: {
        outlineColor: style.outlineColor,
        outlineStyle: style.outlineStyle,
        outlineWidth: width,
        outlineOffset: offset,
        paddingInlineStart: parseFloat(style.paddingInlineStart),
        paddingInlineEnd: parseFloat(style.paddingInlineEnd),
        color: style.color,
        backgroundColor: style.backgroundColor
      },
      bands,
      selfHits: scan(element, 'self'),
      neighborHits: scan(element.closest('p'), 'neighbor')
    };
  });
}

async function evidenceClip(page, locator) {
  const link = await locator.boundingBox();
  const paragraph = await locator.locator('xpath=ancestor::p[1]').boundingBox();
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const x = Math.max(0, paragraph.x - 12);
  const y = Math.max(0, link.y - 42);
  return {
    x,
    y,
    width: Math.min(await page.evaluate(() => innerWidth), paragraph.x + paragraph.width + 12) - x,
    height: Math.min(pageHeight, link.y + link.height + 42) - y
  };
}

async function captureTargetStates(page, width, index, slug) {
  const locator = page.locator('[data-module="BE-04"] p:not(.action) a').nth(index);
  await locator.scrollIntoViewIfNeeded();
  await page.mouse.move(0, 0);
  await locator.evaluate(element => element.blur());
  const normalRect = await documentRect(locator);
  const normalPath = `${focusDir}/inline-${width}-${slug}-normal.png`;
  await page.screenshot({ path: normalPath, clip: await evidenceClip(page, locator) });

  await locator.hover();
  const hoverRect = await documentRect(locator);
  const hoverPath = `${focusDir}/inline-${width}-${slug}-hover.png`;
  await page.screenshot({ path: hoverPath, clip: await evidenceClip(page, locator) });

  const keyboardTabs = await focusByKeyboard(page, locator);
  await locator.evaluate(element => element.scrollIntoView({ block: 'center' }));
  await page.waitForTimeout(50);
  const focusRect = await documentRect(locator);
  const focusPath = `${focusDir}/inline-${width}-${slug}-focus.png`;
  await page.screenshot({ path: focusPath, clip: await evidenceClip(page, locator) });
  const focus = await inspectFocus(locator);
  const ratio = contrast(focus.computed.outlineColor, 'rgb(255, 255, 255)');
  const item = {
    width,
    target_index: index,
    label: focus.label,
    keyboard_tabs: keyboardTabs,
    geometry: { normal: normalRect, hover: hoverRect, focus: focusRect },
    geometry_stable: sameRect(normalRect, hoverRect) && sameRect(normalRect, focusRect),
    focus,
    focus_contrast_against_white: ratio,
    images: [identity(normalPath), identity(hoverPath), identity(focusPath)]
  };
  record.focus_states.push(item);
  check(`${width}/${focus.label}/actual keyboard focus`, focus.focused, { keyboardTabs });
  check(`${width}/${focus.label}/outline clears own label`, focus.selfHits.length === 0, focus.selfHits);
  check(`${width}/${focus.label}/outline clears neighboring text`, focus.neighborHits.length === 0, focus.neighborHits);
  check(`${width}/${focus.label}/44px target`, focus.rect.width >= 44 && focus.rect.height >= 44, focus.rect);
  check(`${width}/${focus.label}/focus contrast >=3`, ratio >= 3, ratio);
  check(`${width}/${focus.label}/normal-hover-focus geometry stable`, item.geometry_stable, item.geometry);
}

(async () => {
  let browser;
  try {
    for (const path of fs.readdirSync(coreDir).map(name => `${coreDir}/${name}`)) fs.rmSync(path);
    for (const path of fs.readdirSync(segmentDir).filter(name => name.endsWith('.png')).map(name => `${segmentDir}/${name}`)) fs.rmSync(path);
    for (const path of fs.readdirSync(focusDir).filter(name => name.endsWith('.png')).map(name => `${focusDir}/${name}`)) fs.rmSync(path);
    browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--disable-background-networking'] });
    record.runtime.chrome = browser.version();
    for (const width of [1440, 768, 390]) {
      const height = width === 390 ? 844 : 900;
      const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
      await context.route(/^https?:/, route => route.abort());
      const page = await context.newPage();
      page.on('pageerror', error => record.errors.push(`${width}: ${error.message}`));
      await page.goto(pathToFileURL(source).href);
      await settle(page);
      await clearState(page);

      const geometry = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        fullHeight: document.documentElement.scrollHeight,
        headerHeight: document.querySelector('header').getBoundingClientRect().height,
        hiddenClipping: [...document.querySelectorAll('main *')].filter(element => {
          const style = getComputedStyle(element);
          return /hidden|clip/.test(style.overflowY) && element.scrollHeight > element.clientHeight + 1;
        }).map(element => element.tagName),
        overflow: [...document.querySelectorAll('main *')].filter(element => {
          const rect = element.getBoundingClientRect();
          return rect.width && (rect.left < -0.5 || rect.right > innerWidth + 0.5);
        }).map(element => element.tagName)
      }));
      check(`${width}/full-page geometry`, geometry.scrollWidth === width && geometry.clientWidth === width && !geometry.hiddenClipping.length && !geometry.overflow.length && geometry.headerHeight === (width === 1440 ? 84 : 64), geometry);

      const fullPath = `${coreDir}/MARKET-EU-BE_GATE4_${width}_FULL_V1.1.png`;
      await page.screenshot({ path: fullPath, fullPage: true });
      const full = { ...identity(fullPath), classification: 'STATIC_VISUAL', logical_width: width, physical_width: width, physical_height: geometry.fullHeight, dpr: 1, state: 'FULL' };
      record.full_pages.push(full);
      check(`${width}/full-page regenerated`, full.sha256 !== oldFull.get(width).sha256, { previous: oldFull.get(width).sha256, current: full.sha256 });

      let segment = 0;
      for (let y = 0; y < geometry.fullHeight; y += 750) {
        segment += 1;
        const clip = { x: 0, y, width, height: Math.min(900, geometry.fullHeight - y) };
        const path = `${segmentDir}/clip-${width}-${String(segment).padStart(2, '0')}.png`;
        await page.screenshot({ path, fullPage: true, clip });
        record.continuous_segments.push({ ...identity(path), classification: 'STATIC_VISUAL', logical_width: width, physical_width: width, physical_height: clip.height, dpr: 1, state: 'CONTINUOUS_SEGMENT', clip });
      }

      await captureTargetStates(page, width, 0, 'product-hub');
      await captureTargetStates(page, width, 1, 'quotation-request');

      await clearState(page);
      if (width < 1101) {
        await page.locator('.menuButton').click();
        await settle(page);
        const buffer = await captureBuffer(page);
        const previous = oldCore.get(`${width}_MENU`);
        const current = shaBuffer(buffer);
        record.retained_state_equivalence.push({ width, state: 'MENU', previous, rerendered_sha256: current, pixel_identical: current === previous.sha256 });
        check(`${width}/retained Menu pixel equivalence`, current === previous.sha256, { previous: previous.sha256, current });
        await page.keyboard.press('Escape');
      }
      await page.locator('#cookie-trigger').click();
      await settle(page);
      const cookieBuffer = await captureBuffer(page);
      const previousCookie = oldCore.get(`${width}_COOKIE`);
      const currentCookie = shaBuffer(cookieBuffer);
      record.retained_state_equivalence.push({ width, state: 'COOKIE', previous: previousCookie, rerendered_sha256: currentCookie, pixel_identical: currentCookie === previousCookie.sha256 });
      check(`${width}/retained Cookie pixel equivalence`, currentCookie === previousCookie.sha256, { previous: previousCookie.sha256, current: currentCookie });
      await page.locator('[data-cookie-close]').click();
      check(`${width}/Footer closure after states`, await page.locator('footer').evaluate(element => element.getBoundingClientRect().height > 0 && !document.querySelector('.cookie-layer').open && (document.querySelector('.mobileNav').hidden || innerWidth >= 1101)), null);
      await context.close();
    }
    check('continuous coverage counts', record.continuous_segments.filter(item => item.logical_width === 1440).length === 5 && record.continuous_segments.filter(item => item.logical_width === 768).length === 6 && record.continuous_segments.filter(item => item.logical_width === 390).length === 8, record.continuous_segments.map(item => ({ width: item.logical_width, clip: item.clip })));
  } catch (error) {
    record.errors.push(error.stack);
  } finally {
    if (browser) await browser.close();
    record.failed = record.checks.filter(item => item.status === 'FAIL');
    record.status = record.failed.length || record.errors.length ? 'FAIL' : 'PASS_PENDING_STATIC_VISUAL_READBACK';
    const output = `${out}/diagnostic_support/focus-repair-runtime.json`;
    fs.writeFileSync(output, JSON.stringify(record, null, 2));
    console.log(JSON.stringify({ status: record.status, checks: record.checks.length, failed: record.failed.map(item => item.key), errors: record.errors, fullPages: record.full_pages.length, segments: record.continuous_segments.length, focusImages: record.focus_states.flatMap(item => item.images).length, output: identity(output) }));
    if (record.status === 'FAIL') process.exitCode = 1;
  }
})();
