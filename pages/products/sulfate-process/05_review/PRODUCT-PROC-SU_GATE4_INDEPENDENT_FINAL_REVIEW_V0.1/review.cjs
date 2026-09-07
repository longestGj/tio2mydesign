const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = 'D:/23MySec';
const base = root + '/pages/products/sulfate-process/04_planning/gate4-v0.1';
const out = __dirname.replaceAll('\\', '/');
const target = base + '/PRODUCT-PROC-SU_GATE4_COMPLETE_VISUAL_V0.1.html';
const bPath = root + '/pages/products/sulfate-process/04_planning/PRODUCT-PROC-SU_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md';
const paths = {
  evidence: base + '/evidence_index.json',
  freeze: base + '/approval_core/source-freeze.json',
  exports: base + '/approval_core/export-inventory.json',
  assets: base + '/approval_core/asset-inventory.json',
  inputs: base + '/input_index.json'
};

const sha = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const identity = file => ({ path: file.replaceAll('\\', '/'), bytes: fs.statSync(file).size, sha256: sha(fs.readFileSync(file)) });
const readJson = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const normalize = value => value.replace(/\s+/g, ' ').replace(/\s+([.,;:])/g, '$1').trim();
const records = [];
const failures = [];
const check = (name, pass, data, evidenceType = 'ACTUAL_RUNTIME') => {
  const record = { name, pass: Boolean(pass), evidenceType, data };
  records.push(record);
  if (!record.pass) failures.push(name);
  return record.pass;
};

const rgb = value => value.match(/[\d.]+/g).slice(0, 3).map(Number);
const luminance = values => values.map(value => {
  value /= 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
const contrast = (a, b) => {
  const x = luminance(rgb(a));
  const y = luminance(rgb(b));
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

function collectBindings(value, origin, bindings) {
  if (!value || typeof value !== 'object') return;
  if (typeof value.path === 'string' && typeof value.sha256 === 'string') {
    bindings.push({ origin, path: value.path.replaceAll('\\', '/'), bytes: value.bytes, sha256: value.sha256.toLowerCase() });
  }
  for (const child of Object.values(value)) collectBindings(child, origin, bindings);
}

const evidence = readJson(paths.evidence);
const freeze = readJson(paths.freeze);
const exportsIndex = readJson(paths.exports);
const assetIndex = readJson(paths.assets);
const inputIndex = readJson(paths.inputs);
const bindingInputs = { evidence, freeze, exportsIndex, assetIndex, inputIndex };
const bindings = [];
for (const [origin, value] of Object.entries(bindingInputs)) collectBindings(value, origin, bindings);
const byPath = new Map();
for (const binding of bindings) {
  if (!byPath.has(binding.path)) byPath.set(binding.path, []);
  byPath.get(binding.path).push(binding);
}
const identityReadback = [];
for (const [file, expected] of byPath) {
  const expectedHashes = [...new Set(expected.map(item => item.sha256))];
  const expectedBytes = [...new Set(expected.filter(item => item.bytes !== undefined).map(item => item.bytes))];
  let actual = null;
  let error = null;
  try { actual = identity(file); } catch (caught) { error = caught.message; }
  identityReadback.push({
    path: file,
    origins: [...new Set(expected.map(item => item.origin))],
    expectedHashes,
    expectedBytes,
    actual,
    error,
    match: Boolean(actual) && expectedHashes.length === 1 && expectedHashes[0] === actual.sha256 && (expectedBytes.length === 0 || (expectedBytes.length === 1 && expectedBytes[0] === actual.bytes))
  });
}
check('all recursively bound identities match disk', identityReadback.every(item => item.match), {
  bindingCount: bindings.length,
  uniquePathCount: identityReadback.length,
  mismatches: identityReadback.filter(item => !item.match)
}, 'SOURCE_INSPECTION');
check('workset and freeze identity', evidence.workset_id === 'SU-G4-COMPLETE-V01' && evidence.freeze_id === 'SU-G4-COMPLETE-V01-F01' && freeze.freeze_id === evidence.freeze_id, {
  evidenceWorkset: evidence.workset_id,
  evidenceFreeze: evidence.freeze_id,
  freezeWorkset: freeze.workset_id,
  freezeId: freeze.freeze_id
}, 'SOURCE_INSPECTION');

const source = fs.readFileSync(target, 'utf8');
const shared = require(root + '/docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs').renderSharedChrome({
  currentPageId: 'PRODUCT-000',
  primaryLogoSrc: 'dependencies/tio2-malaysia-primary-horizontal-v0.1.svg',
  reverseLogoSrc: 'dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg',
  fontSrc: 'dependencies/Inter-Variable.ttf'
});
check('shared consumer slots are exact', ['header', 'footer', 'dialog', 'style', 'behavior'].every(key => source.includes(shared[key])), Object.fromEntries(['header', 'footer', 'dialog', 'style', 'behavior'].map(key => [key, source.includes(shared[key])])), 'SOURCE_INSPECTION');
const localCss = fs.readFileSync(base + '/visual-direction.css', 'utf8');
check('page visual CSS remains main-scoped', localCss.split(/\r?\n/).map(line => line.trim()).filter(line => line && !line.startsWith('/*')).every(line => line.startsWith('main')), { localCss }, 'SOURCE_INSPECTION');
check('source has no Terms route', !/terms-of-use/i.test(source), {}, 'SOURCE_INSPECTION');

const buyerSection = fs.readFileSync(bPath, 'utf8').split('## Buyer Clean public copy')[1];
const expectedText = normalize(buyerSection
  .replace(/^### (Breadcrumb|Hero)\s*$/gm, '')
  .replace(/<a\s+id="[^"]+"><\/a>/g, '')
  .replace(/\[\*\*([^*]+)\*\*\]\(([^)]*)\)/g, '$1')
  .replace(/\[([^\]]+)\]\(([^)]*)\)/g, '$1')
  .replace(/^#{1,6}\s*/gm, '')
  .replace(/\*\*/g, ''));
const expectedLinks = [...buyerSection.matchAll(/\[(?:\*\*)?([^\]*]+?)(?:\*\*)?\]\(([^)]*)\)/g)].map(match => ({ text: match[1], href: match[2] }));

async function measuredControl(locator) {
  return locator.evaluate(element => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    const background = node => {
      while (node) {
        const value = getComputedStyle(node).backgroundColor;
        if (value !== 'rgba(0, 0, 0, 0)' && value !== 'transparent') return value;
        node = node.parentElement;
      }
      return 'rgb(255, 255, 255)';
    };
    return {
      text: element.innerText,
      href: element.getAttribute('href'),
      width: rect.width,
      height: rect.height,
      foreground: style.color,
      background: background(element),
      outline: style.outlineColor,
      outlineWidth: parseFloat(style.outlineWidth),
      outlineOffset: parseFloat(style.outlineOffset),
      outlineBackground: background(element.parentElement),
      focused: element.matches(':focus-visible'),
      hovered: element.matches(':hover')
    };
  });
}

async function verifyControls(page, selector, label, width) {
  const controls = page.locator(selector);
  for (let index = 0; index < await controls.count(); index++) {
    const control = controls.nth(index);
    if (!await control.isVisible()) continue;
    await control.scrollIntoViewIfNeeded();
    await page.mouse.move(0, 0);
    await page.evaluate(() => document.activeElement?.blur());
    const normal = await measuredControl(control);
    const textRatio = normal.text.trim() ? contrast(normal.foreground, normal.background) : null;
    check(`${width}/${label}/${index}/normal-size-and-text`, normal.width >= 44 && normal.height >= 44 && (textRatio === null || textRatio >= 4.5), { ...normal, textContrast: textRatio });
    await control.hover();
    const hover = await measuredControl(control);
    const hoverRatio = hover.text.trim() ? contrast(hover.foreground, hover.background) : null;
    check(`${width}/${label}/${index}/hover-stable-and-readable`, hover.hovered && Math.abs(hover.width - normal.width) < 0.01 && Math.abs(hover.height - normal.height) < 0.01 && (hoverRatio === null || hoverRatio >= 4.5), { ...hover, textContrast: hoverRatio });
    await page.mouse.move(0, 0);
    await control.focus();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Shift+Tab');
    const focus = await measuredControl(control);
    const focusRatio = contrast(focus.outline, focus.outlineBackground);
    check(`${width}/${label}/${index}/keyboard-focus`, focus.focused && focus.outlineWidth >= 3 && focusRatio >= 3, { ...focus, outlineContrast: focusRatio });
  }
}

const ftcObservations = [];
const independentScreenshots = [];

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const runtime = { node: process.version, chrome: browser.version(), headless: true, deviceScaleFactor: 1 };
  try {
    for (const width of [1440, 768, 390]) {
      const viewportHeight = width === 390 ? 844 : 900;
      const context = await browser.newContext({ viewport: { width, height: viewportHeight }, deviceScaleFactor: 1 });
      const page = await context.newPage();
      const externalRequests = [];
      const pageErrors = [];
      await context.route(/^https?:/, route => { externalRequests.push(route.request().url()); return route.abort(); });
      page.on('pageerror', error => pageErrors.push(error.message));
      await page.goto(pathToFileURL(target).href);
      await page.evaluate(() => document.fonts.ready);

      const actualText = normalize(await page.locator('main').innerText());
      const actualLinks = await page.locator('main a').evaluateAll(elements => elements.map(element => ({ text: element.textContent.trim(), href: element.getAttribute('href') })));
      check(`${width}/approved B visible text`, actualText === expectedText, { actualText, expectedText }, 'SOURCE_INSPECTION');
      check(`${width}/approved B link labels and targets`, JSON.stringify(actualLinks) === JSON.stringify(expectedLinks), { actualLinks, expectedLinks }, 'SOURCE_INSPECTION');

      const structure = await page.evaluate(() => {
        const box = element => { const rect = element.getBoundingClientRect(); return { x: rect.x, y: rect.y, width: rect.width, height: rect.height, right: rect.right, bottom: rect.bottom }; };
        return {
          lang: document.documentElement.lang,
          title: document.title,
          sections: [...document.querySelectorAll('main section')].map(section => ({ className: section.className, rect: box(section), heading: section.querySelector('h1,h2')?.textContent })),
          h1: [...document.querySelectorAll('main h1')].map(element => element.textContent),
          grades: [...document.querySelectorAll('.grades article')].map(article => ({ name: article.querySelector('h3').textContent, summary: article.querySelector('p').textContent, link: article.querySelector('a').textContent, href: article.querySelector('a').getAttribute('href'), rect: box(article) })),
          evaluations: [...document.querySelectorAll('.evaluation article')].map(article => ({ name: article.querySelector('h3').textContent, paragraphs: [...article.querySelectorAll(':scope>p:not(.actions)')].map(p => p.textContent), link: article.querySelector('a').textContent, href: article.querySelector('a').getAttribute('href'), rect: box(article), heading: box(article.querySelector('h3')), firstParagraph: box(article.querySelector('p')) })),
          pageWidth: document.documentElement.scrollWidth,
          pageHeight: document.documentElement.scrollHeight,
          outOfBounds: [...document.querySelectorAll('body *')].filter(element => { const rect = element.getBoundingClientRect(); return getComputedStyle(element).display !== 'none' && (rect.left < -0.5 || rect.right > innerWidth + 0.5); }).map(element => element.outerHTML.slice(0, 160)),
          clipping: [...document.querySelectorAll('main *')].filter(element => ['hidden', 'clip'].includes(getComputedStyle(element).overflowY) || getComputedStyle(element).textOverflow === 'ellipsis').map(element => element.outerHTML.slice(0, 160)),
          visibleCurrent: document.body.innerText.match(/\bCURRENT\b/g)?.length || 0,
          nav: {
            desktopCurrent: document.querySelectorAll('.desktopNav [aria-current="page"]').length,
            mobileCurrent: document.querySelectorAll('.mobileNav [aria-current="page"]').length,
            desktopVisible: getComputedStyle(document.querySelector('.desktopNav')).display !== 'none',
            mobileVisible: getComputedStyle(document.querySelector('.mobileNav')).display !== 'none' && !document.querySelector('.mobileNav').hidden
          },
          footerOrder: [...document.querySelector('footer').children].map(element => ({ tag: element.tagName, className: element.className, text: element.textContent.replace(/\s+/g, ' ').trim() })),
          logos: [...document.images].map(image => ({ src: image.src, loaded: image.complete && image.naturalWidth > 0, width: box(image).width, height: box(image).height }))
        };
      });
      check(`${width}/identity-heading-five-module-structure`, structure.lang === 'en' && structure.title === 'Sulfate Process Titanium Dioxide Grades | TiO2 Malaysia' && JSON.stringify(structure.h1) === JSON.stringify(['Sulfate Process Titanium Dioxide']) && JSON.stringify(structure.sections.map(section => section.className)) === JSON.stringify(['m1', 'm2', 'm3', 'm4', 'm5']), structure, 'SOURCE_INSPECTION');
      check(`${width}/five neutral Grades in approved order`, JSON.stringify(structure.grades.map(grade => grade.name)) === JSON.stringify(['M-996', 'M-2196', 'M-108', 'M-52', 'M-2377']), structure.grades, 'SOURCE_INSPECTION');
      check(`${width}/three evaluation groups in approved order`, JSON.stringify(structure.evaluations.map(group => group.name)) === JSON.stringify(['Review by Application', 'Request Product Documents', 'Compare Production Routes']), structure.evaluations, 'SOURCE_INSPECTION');
      check(`${width}/responsive Grade and evaluation relationships`, structure.grades.every((grade, index) => !index || grade.rect.y > structure.grades[index - 1].rect.y) && structure.evaluations.every((group, index) => {
        if (index && group.rect.y <= structure.evaluations[index - 1].rect.y) return false;
        if (width === 390) return group.heading.y < group.firstParagraph.y;
        return group.heading.x < group.firstParagraph.x && Math.abs(group.heading.y - group.firstParagraph.y) < 1;
      }), { grades: structure.grades, evaluations: structure.evaluations });
      check(`${width}/geometry-overflow-clipping-continuity`, structure.pageWidth === width && structure.outOfBounds.length === 0 && structure.clipping.length === 0 && structure.sections.every((section, index) => !index || Math.abs(section.rect.y - structure.sections[index - 1].rect.bottom) < 1), structure);
      check(`${width}/shared current mapping and logo load`, structure.visibleCurrent === 0 && structure.nav.desktopCurrent === 1 && structure.nav.mobileCurrent === 1 && structure.logos.every(logo => logo.loaded), { nav: structure.nav, visibleCurrent: structure.visibleCurrent, logos: structure.logos });

      const cdp = await context.newCDPSession(page);
      await cdp.send('DOM.enable');
      await cdp.send('CSS.enable');
      const documentNode = await cdp.send('DOM.getDocument');
      const h1Node = await cdp.send('DOM.querySelector', { nodeId: documentNode.root.nodeId, selector: 'main h1' });
      const fonts = await cdp.send('CSS.getPlatformFontsForNode', { nodeId: h1Node.nodeId });
      check(`${width}/custom Inter loaded`, fonts.fonts.some(font => font.familyName.includes('Inter') && font.isCustomFont), fonts);

      const formalFull = exportsIndex.core.find(item => item.path.endsWith(`/${width}-full.png`));
      const fullBuffer = await page.screenshot({ fullPage: true });
      check(`${width}/independent whole-page reproduction`, sha(fullBuffer) === formalFull.sha256 && fullBuffer.length === formalFull.bytes, { actual: { bytes: fullBuffer.length, sha256: sha(fullBuffer) }, expected: formalFull }, 'STATIC_VISUAL_REPRODUCTION');
      const readable = exportsIndex.readableSupport.filter(item => item.viewport.width === width).sort((a, b) => a.clip.y - b.clip.y);
      for (let index = 0; index < readable.length; index++) {
        const item = readable[index];
        const buffer = await page.screenshot({ fullPage: true, clip: item.clip });
        check(`${width}/readable-segment-${String(index + 1).padStart(2, '0')}-reproduction`, sha(buffer) === item.sha256 && buffer.length === item.bytes, { actual: { bytes: buffer.length, sha256: sha(buffer) }, expected: item }, 'STATIC_VISUAL_REPRODUCTION');
      }
      check(`${width}/continuous-readable-coverage`, readable[0].clip.y === 0 && readable.at(-1).clip.y + readable.at(-1).clip.height === structure.pageHeight && readable.every((item, index) => !index || item.clip.y <= readable[index - 1].clip.y + readable[index - 1].clip.height), readable.map(item => item.clip), 'STATIC_VISUAL');

      await verifyControls(page, 'header a,header button,main a,footer a,footer button', 'page', width);

      const ftc = page.locator('.m2 p>a');
      await page.mouse.move(0, 0);
      await ftc.focus();
      await page.keyboard.press('Tab');
      await page.keyboard.press('Shift+Tab');
      const ftcMeasurement = await ftc.evaluate(element => {
        const style = getComputedStyle(element);
        const fragments = [...element.getClientRects()].map(rect => ({ x: rect.x, y: rect.y, width: rect.width, height: rect.height, right: rect.right, bottom: rect.bottom }));
        const next = element.nextSibling;
        const punctuationRange = document.createRange();
        punctuationRange.setStart(next, 0);
        punctuationRange.setEnd(next, 1);
        const punctuation = [...punctuationRange.getClientRects()].map(rect => ({ x: rect.x, y: rect.y, width: rect.width, height: rect.height, right: rect.right, bottom: rect.bottom }))[0];
        const last = fragments.at(-1);
        const outlineWidth = parseFloat(style.outlineWidth);
        const outlineOffset = parseFloat(style.outlineOffset);
        const outlineOuterRight = last.right + outlineOffset + outlineWidth;
        const outlineInnerRight = last.right + outlineOffset;
        return {
          text: element.textContent,
          focused: element.matches(':focus-visible'),
          lineHeight: style.lineHeight,
          padding: style.padding,
          outlineWidth,
          outlineOffset,
          fragments,
          punctuation,
          normalGap: punctuation.x - last.right,
          focusOuterGap: punctuation.x - outlineOuterRight,
          focusInnerGap: punctuation.x - outlineInnerRight,
          punctuationText: next.textContent.slice(0, 8)
        };
      });
      const paragraphBox = await ftc.locator('xpath=..').boundingBox();
      const screenshotPath = `${out}/independent-ftc-focus-${width}.png`;
      await page.screenshot({ path: screenshotPath, clip: { x: 0, y: Math.max(0, paragraphBox.y - 14), width, height: paragraphBox.height + 28 } });
      const screenshotIdentity = identity(screenshotPath);
      independentScreenshots.push(screenshotIdentity);
      ftcObservations.push({ width, ...ftcMeasurement, screenshot: screenshotIdentity });
      check(`${width}/FTC exact text-and-href`, ftcMeasurement.text === 'U.S. Federal Trade Commission public decision record' && await ftc.getAttribute('href') === 'https://www.ftc.gov/system/files/documents/cases/docket_9377_tronox_et_al_initial_decision_redacted_public_version_0.pdf', ftcMeasurement, 'SOURCE_INSPECTION');
      check(`${width}/FTC fragment-minimum-height`, ftcMeasurement.fragments.every(fragment => fragment.height >= 44), ftcMeasurement);
      check(`${width}/FTC punctuation remains outside focus stroke`, ftcMeasurement.focusOuterGap >= -0.01 && ftcMeasurement.punctuationText.startsWith('.'), ftcMeasurement);

      const mainLinks = page.locator('main a');
      for (let index = 0; index < await mainLinks.count(); index++) {
        const link = mainLinks.nth(index);
        const href = await link.getAttribute('href');
        await link.click();
        const intent = await page.evaluate(() => window.localNavigation.at(-1));
        if (href === '#sulfate-grades') {
          const anchor = await page.evaluate(() => ({ hash: location.hash, focus: document.activeElement?.id, y: scrollY }));
          check(`${width}/same-page-anchor-click`, anchor.hash === '#sulfate-grades' && anchor.focus === 'sulfate-grades', anchor);
        } else {
          const expectedContext = ['/request-a-quote/', '/request-documents/'].includes(href) ? { source_page_id: 'PRODUCT-PROC-SU' } : {};
          check(`${width}/navigation-${index}`, intent.href === href && JSON.stringify(intent.context) === JSON.stringify(expectedContext), { href, intent, expectedContext }, 'LOCAL_SIMULATION');
        }
      }
      await page.goto(pathToFileURL(target).href);
      await page.locator('a[href="#sulfate-grades"]').focus();
      await page.keyboard.press('Enter');
      check(`${width}/same-page-anchor-keyboard`, await page.evaluate(() => location.hash === '#sulfate-grades' && document.activeElement?.id === 'sulfate-grades'), {});

      if (width < 1101) {
        await page.evaluate(() => scrollTo(0, 0));
        await page.locator('.menuButton').click();
        check(`${width}/menu-open-first-focus-and-background-isolation`, await page.evaluate(() => document.activeElement === document.querySelector('.mobileNav a') && document.querySelector('main').inert && document.querySelector('footer').inert && document.querySelector('.logoLink').inert && document.querySelector('.headerRfq').inert && document.body.style.overflow === 'hidden'), {});
        await verifyControls(page, '.menuButton,.mobileNav a', 'menu', width);
        await page.locator('.mobileNav a').last().focus();
        await page.keyboard.press('Tab');
        const forwardWrap = await page.locator('.menuButton').evaluate(element => element === document.activeElement);
        await page.keyboard.press('Shift+Tab');
        const reverseWrap = await page.locator('.mobileNav a').last().evaluate(element => element === document.activeElement);
        check(`${width}/menu-two-way-focus-loop`, forwardWrap && reverseWrap, { forwardWrap, reverseWrap });
        await page.locator('main a').first().evaluate(element => element.focus());
        check(`${width}/menu-background-focus-rejection`, await page.locator('.mobileNav a').last().evaluate(element => element === document.activeElement), {});
        await page.keyboard.press('Escape');
        check(`${width}/menu-Escape-close-and-return`, await page.locator('.menuButton').evaluate(element => element === document.activeElement) && await page.locator('.mobileNav').evaluate(element => element.hidden) && await page.locator('main').evaluate(element => !element.inert) && await page.evaluate(() => document.body.style.overflow === ''), {});
        for (let index = 0; index < 8; index++) {
          await page.locator('.menuButton').click();
          const option = page.locator('.mobileNav a').nth(index);
          const href = await option.getAttribute('href');
          await option.click();
          const intent = await page.evaluate(() => window.localNavigation.at(-1));
          check(`${width}/menu-selection-${index}`, intent.href === href && await page.locator('.mobileNav').evaluate(element => element.hidden) && await page.locator('main').evaluate(element => !element.inert), { href, intent });
        }
        await page.locator('.menuButton').click();
        await page.setViewportSize({ width: 1440, height: 900 });
        check(`${width}/menu-breakpoint-close`, await page.locator('.mobileNav').evaluate(element => element.hidden) && await page.locator('main').evaluate(element => !element.inert), {});
        await page.setViewportSize({ width, height: viewportHeight });
      }

      await page.locator('#cookie-trigger').click();
      check(`${width}/cookie-open-and-first-focus`, await page.locator('[data-cookie-close]').evaluate(element => element === document.activeElement) && await page.locator('dialog').evaluate(element => element.open), {});
      await verifyControls(page, '.cookie-actions>*', 'cookie', width);
      await page.locator('[data-cookie-close]').focus();
      await page.keyboard.press('Shift+Tab');
      const cookieReverse = await page.locator('.cookie-actions a').evaluate(element => element === document.activeElement);
      await page.keyboard.press('Tab');
      const cookieForward = await page.locator('[data-cookie-close]').evaluate(element => element === document.activeElement);
      check(`${width}/cookie-two-way-focus-loop`, cookieReverse && cookieForward, { cookieReverse, cookieForward });
      await page.locator('main a').first().evaluate(element => element.focus());
      check(`${width}/cookie-native-modal-isolation`, await page.locator('dialog').evaluate(element => element.contains(document.activeElement)), {});
      await page.keyboard.press('Escape');
      check(`${width}/cookie-Escape-close-and-return`, !await page.locator('dialog').evaluate(element => element.open) && await page.locator('#cookie-trigger').evaluate(element => element === document.activeElement), {});
      await page.locator('#cookie-trigger').click();
      await page.locator('[data-cookie-close]').click();
      check(`${width}/cookie-Close-return`, !await page.locator('dialog').evaluate(element => element.open) && await page.locator('#cookie-trigger').evaluate(element => element === document.activeElement), {});
      check(`${width}/no-runtime-errors-or-remote-requests`, pageErrors.length === 0 && externalRequests.length === 0, { pageErrors, externalRequests });
      await context.close();
    }

    const directContext = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
    const directPage = await directContext.newPage();
    await directPage.goto(pathToFileURL(target).href + '#sulfate-grades');
    await directPage.waitForTimeout(50);
    check('direct-fragment-load', await directPage.evaluate(() => location.hash === '#sulfate-grades' && document.activeElement?.id === 'sulfate-grades'), {});
    await directContext.close();

    const noJsContext = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, javaScriptEnabled: false });
    const noJsPage = await noJsContext.newPage();
    await noJsPage.goto(pathToFileURL(target).href + '#sulfate-grades');
    const noJsText = normalize(await noJsPage.locator('main').innerText());
    check('no-JS approved B remains visible', noJsText === expectedText, { noJsText, expectedText }, 'SOURCE_INSPECTION');
    check('no-JS fragment target remains available', await noJsPage.evaluate(() => location.hash === '#sulfate-grades' && document.getElementById('sulfate-grades') !== null), {});
    await noJsContext.close();
  } catch (error) {
    failures.push(error.stack || error.message);
  } finally {
    const browserVersion = browser.version();
    await browser.close();
    const identityAfter = identityReadback.filter(item => item.actual).map(item => ({ path: item.path, before: item.actual, after: identity(item.path), unchanged: item.actual.sha256 === identity(item.path).sha256 && item.actual.bytes === identity(item.path).bytes }));
    const result = {
      reviewId: 'PRODUCT-PROC-SU-G4-IR-01',
      reviewer: 'independent reviewer /root/gate4_su_review; did not author the candidate',
      date: new Date().toISOString(),
      worksetId: evidence.workset_id,
      freezeId: evidence.freeze_id,
      runtime: { ...runtime, chrome: browserVersion },
      identity: {
        bindingCount: bindings.length,
        uniquePathCount: identityReadback.length,
        readback: identityReadback,
        after: identityAfter,
        allUnchanged: identityAfter.every(item => item.unchanged)
      },
      evidenceCounts: {
        approvalCorePng: exportsIndex.core.length,
        fullPagePng: exportsIndex.core.filter(item => item.region === 'full page').length,
        menuPng: exportsIndex.core.filter(item => item.region === 'menu').length,
        cookiePng: exportsIndex.core.filter(item => item.region === 'viewport' && item.path.includes('cookie')).length,
        ftcStatePng: exportsIndex.core.filter(item => item.region === 'FTC source paragraph').length,
        otherStatePng: exportsIndex.core.filter(item => !['full page', 'menu', 'FTC source paragraph'].includes(item.region) && !item.path.includes('cookie')).length,
        readableSegments: exportsIndex.readableSupport.length,
        fullEqualityBindings: exportsIndex.fullEquality.length,
        candidateEvidenceCategories: evidence.evidence.map(item => item.type)
      },
      openedVisualEvidence: {
        fullPages: exportsIndex.core.filter(item => item.region === 'full page').map(item => item.path),
        readableSegments: exportsIndex.readableSupport.map(item => item.path),
        states: exportsIndex.core.filter(item => item.region !== 'full page').map(item => item.path),
        reviewerOpenedAtOriginalScale: true
      },
      ftcObservations,
      independentScreenshots,
      records,
      failures,
      summary: { checks: records.length, passed: records.filter(record => record.pass).length, failed: records.filter(record => !record.pass).length }
    };
    const outputPath = `${out}/independent-runtime-identity-and-observations.json`;
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    console.log(JSON.stringify({
      output: identity(outputPath),
      summary: result.summary,
      failures,
      identity: { uniquePathCount: result.identity.uniquePathCount, allUnchanged: result.identity.allUnchanged },
      evidenceCounts: result.evidenceCounts,
      ftc: ftcObservations.map(item => ({ width: item.width, fragments: item.fragments.length, lineHeight: item.lineHeight, normalGap: item.normalGap, focusOuterGap: item.focusOuterGap, focusInnerGap: item.focusInnerGap }))
    }, null, 2));
  }
})();
