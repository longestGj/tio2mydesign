import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const { marked } = require('marked');
const root = 'D:/23MySec';
const base = path.join(root, 'pages/applications/paper/04_planning/gate3-v0.3');
const htmlPath = path.join(base, 'APP-PAPER_GATE3_RESPONSIVE_WIREFRAME_V0.3.html');
const copyPath = path.join(root, 'pages/applications/paper/04_planning/APP-PAPER_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md');
const mode = process.argv[2] ?? 'diagnostic';
if (!['diagnostic', 'formal'].includes(mode)) throw new Error('Mode must be diagnostic or formal');
const outputDir = path.join(base, mode === 'formal' ? 'approval_core' : 'diagnostic_support');
fs.mkdirSync(outputDir, { recursive: true });

const approved = fs.readFileSync(copyPath, 'utf8').match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/)?.[1]?.trim();
if (!approved) throw new Error('Approved buyer copy missing');
const expectedHtml = marked.parse(approved);
const expectedH2 = [...approved.matchAll(/^## (.+)$/gm)].map(match => match[1].trim());
const url = pathToFileURL(htmlPath).href;
const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
const results = { mode, renderer: 'Microsoft Edge via Playwright', source: htmlPath, createdAt: new Date().toISOString(), viewports: {}, interactions: {}, content: {}, risks: {}, evidence: [] };
const sizes = [
  { key: '1440', width: 1440, height: 1000 },
  { key: '768', width: 768, height: 1024 },
  { key: '390', width: 390, height: 844 }
];

function imageName(key, suffix = 'FULL') { return `APP-PAPER_GATE3_${key}_${suffix}_V0.3.png`; }
function norm(text) { return text.replace(/\s+/g, ' ').trim(); }

for (const vp of sizes) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const geometry = await page.evaluate(() => {
    const visible = element => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
    };
    const controls = [...document.querySelectorAll('a,button')].filter(visible).map(element => {
      const rect = element.getBoundingClientRect();
      return { text:(element.textContent||'').trim().slice(0,100), tag:element.tagName, width:+rect.width.toFixed(2), height:+rect.height.toFixed(2), href:element.getAttribute('href') };
    });
    const rows = selector => [...document.querySelectorAll(`${selector} tbody tr`)].map(row => [...row.querySelectorAll('td')].map(cell => ({ label:cell.dataset.label, text:(cell.textContent||'').trim() })));
    const gridColumns = selector => getComputedStyle(document.querySelector(selector)).gridTemplateColumns.split(' ').filter(Boolean).length;
    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      modules: document.querySelectorAll('main section').length,
      h2: [...document.querySelectorAll('main h2')].map(h => h.textContent.trim()),
      tables: document.querySelectorAll('main table').length,
      under44: controls.filter(control => control.width < 43.9 || control.height < 43.9),
      visibleControlCount: controls.length,
      opticalRows: rows('.optical-methods'),
      evidenceRows: rows('.evidence-roles'),
      gradeRows: rows('.grades'),
      sourceRows: document.querySelectorAll('.sources ol > li').length,
      externalSourceLinks: document.querySelectorAll('.sources a[href^="http"]').length,
      requestItems: document.querySelectorAll('.request-paths > .sectionInner > ul > li').length,
      requestGridColumns: gridColumns('.request-paths > .sectionInner > ul'),
      mainImages: document.querySelectorAll('main img').length,
      mainForms: document.querySelectorAll('main form').length,
      visibleCurrentLabels: [...document.querySelectorAll('header,main,footer')].filter(visible).reduce((count, node) => count + ((node.innerText.match(/\bCURRENT\b/g) || []).length), 0),
      seoTitle: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.content,
      legalLabels: [...document.querySelectorAll('.legalUtilities a,.legalUtilities button')].map(node => node.textContent.trim()),
      bodyData: { pageId:document.body.dataset.pageId, siteScope:document.body.dataset.siteScope, sharedConsumer:document.body.dataset.sharedConsumer }
    };
  });
  // Use DOM text content for the copy identity check. Layout CSS such as
  // inline-flex can make innerText insert presentation-only spaces before
  // punctuation even though the approved text nodes are unchanged.
  const actualText = await page.locator('main').textContent();
  const expectedText = await page.evaluate(html => { const box=document.createElement('div'); box.innerHTML=html; return box.textContent; }, expectedHtml);
  geometry.contentExactNormalized = norm(actualText) === norm(expectedText);
  geometry.h2Exact = JSON.stringify(geometry.h2) === JSON.stringify(expectedH2);
  results.viewports[vp.key] = geometry;

  const fullName = mode === 'formal' ? imageName(vp.key) : imageName(vp.key, 'DIAGNOSTIC_FULL');
  const fullPath = path.join(outputDir, fullName);
  await page.screenshot({ path: fullPath, fullPage: true });
  results.evidence.push(fullPath);

  if (mode === 'diagnostic') {
    const segmentHeight = vp.height;
    const total = geometry.scrollHeight;
    for (let y = 0, index = 0; y < total; y += segmentHeight - 120, index += 1) {
      const segmentPath = path.join(outputDir, `APP-PAPER_GATE3_${vp.key}_SEGMENT_${String(index).padStart(2, '0')}_V0.3.png`);
      await page.evaluate(scrollY => scrollTo(0, scrollY), y);
      await page.screenshot({ path: segmentPath, fullPage:false });
    }
    await page.evaluate(() => scrollTo(0, 0));
  }

  if (vp.key !== '1440') {
    await page.evaluate(() => scrollTo(0, 0));
    await page.locator('.menuButton').click();
    const opened = await page.evaluate(() => ({
      hidden: document.querySelector('.mobileNav').hidden,
      expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
      focus: document.activeElement?.textContent?.trim(),
      mainInert: document.querySelector('main').inert,
      footerInert: document.querySelector('footer').inert,
      overflow: document.body.style.overflow,
      current: [...document.querySelectorAll('.mobileNav [aria-current="page"]')].map(node => node.textContent.trim())
    }));
    if (mode === 'formal') {
      const menuPath = path.join(outputDir, imageName(vp.key, 'MENU'));
      await page.screenshot({ path: menuPath, fullPage: false });
      results.evidence.push(menuPath);
    }
    await page.locator('.mobileNav a[href="/applications/"]').evaluate(element => element.addEventListener('click', event => event.preventDefault(), { capture: true, once: true }));
    await page.locator('.mobileNav a[href="/applications/"]').click();
    const selected = await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), focus: document.activeElement?.textContent?.trim(), mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert, overflow: document.body.style.overflow }));
    results.interactions[`menu_${vp.key}`] = { opened, selected };
  }

  const cookieTrigger = page.locator('#cookie-trigger');
  await cookieTrigger.click();
  const cookieOpened = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, focus: document.activeElement?.textContent?.trim() }));
  if (mode === 'diagnostic' && vp.key === '390') await page.screenshot({ path: path.join(outputDir, imageName('390', 'DIAGNOSTIC_COOKIE_OPEN')), fullPage: false });
  await page.locator('[data-cookie-close]').click();
  const cookieClosed = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, focus: document.activeElement?.textContent?.trim() }));
  results.interactions[`cookie_${vp.key}`] = { opened: cookieOpened, closed: cookieClosed };

  if (vp.key === '390') {
    await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
    await page.locator('.heroActions a[href="#define-the-paper-result-and-system"]').click();
    results.interactions.definitionAnchor390 = await page.evaluate(() => ({ hash:location.hash, target:document.querySelector('#define-the-paper-result-and-system h2')?.textContent?.trim() }));

    await page.locator('.heroActions a[href="#grades-to-review"]').click();
    results.interactions.gradesAnchor390 = await page.evaluate(() => ({ hash:location.hash, target:document.querySelector('#grades-to-review h2')?.textContent?.trim(), grades:[...document.querySelectorAll('.grades tbody tr td:first-child')].map(node => node.textContent.trim()) }));
    if (mode === 'formal') {
      const gradePath = path.join(outputDir, imageName('390', 'GRADES_ANCHOR'));
      await page.screenshot({ path: gradePath, fullPage:false });
      results.evidence.push(gradePath);
    }

    await page.locator('.optical-methods').scrollIntoViewIfNeeded();
    if (mode === 'formal') {
      const opticalPath = path.join(outputDir, imageName('390', 'OPTICAL_RECORDS'));
      await page.screenshot({ path: opticalPath, fullPage:false });
      results.evidence.push(opticalPath);
    }

    await page.locator('.sources').scrollIntoViewIfNeeded();
    if (mode === 'formal') {
      const sourcesPath = path.join(outputDir, imageName('390', 'SOURCES'));
      await page.screenshot({ path: sourcesPath, fullPage:false });
      results.evidence.push(sourcesPath);
    }
  }
  await page.close();
}

results.content = {
  expectedNormalizedSha256: crypto.createHash('sha256').update(norm(approved)).digest('hex'),
  allViewportsExactNormalized: Object.values(results.viewports).every(view => view.contentExactNormalized),
  headingsExact: Object.values(results.viewports).every(view => view.h2Exact),
  gradeOrder: ['M-350', 'M-2377'],
  opticalProperties: ['ISO brightness', 'CIE whiteness, D65/10°', 'Paper colour, D65/10°', 'Paper-backing opacity']
};
results.risks = {
  moduleOrder: Object.values(results.viewports).every(view => view.modules === 11 && view.h2.length === 10 && view.h2Exact),
  opticalMethods: Object.values(results.viewports).every(view => view.opticalRows.length === 4 && view.opticalRows.every(row => row.length === 3 && row.every(cell => cell.label && cell.text))),
  evidenceRoles: Object.values(results.viewports).every(view => view.evidenceRows.length === 4 && view.evidenceRows.every(row => row.length === 3 && row.every(cell => cell.label && cell.text))),
  neutralGradeSet: Object.values(results.viewports).every(view => JSON.stringify(view.gradeRows.map(row => row[0].text)) === JSON.stringify(['M-350','M-2377'])),
  sevenSources: Object.values(results.viewports).every(view => view.sourceRows === 7 && view.externalSourceLinks === 7),
  separateRequestOwners: Object.values(results.viewports).every(view => view.requestItems === 3),
  noInventedFormOrMedia: Object.values(results.viewports).every(view => view.mainForms === 0 && view.mainImages === 0),
  noHorizontalOverflow: Object.values(results.viewports).every(view => view.scrollWidth === view.clientWidth),
  touchTargets: Object.values(results.viewports).every(view => view.under44.length === 0),
  exactApprovedCopy: results.content.allViewportsExactNormalized,
  metadata: Object.values(results.viewports).every(view => view.seoTitle === 'Titanium Dioxide for Paper Evaluation | TiO2 Malaysia' && view.metaDescription === 'Evaluate titanium dioxide for paper in a defined system. Compare method-matched results, review Product Grades, and prepare document, sample or RFQ details.'),
  legalContract: Object.values(results.viewports).every(view => JSON.stringify(view.legalLabels) === JSON.stringify(['Privacy Policy','Dasar Privasi (BM)','Cookie Policy','Cookie Settings']))
};
const menuPass = ['768','390'].every(key => {
  const state = results.interactions[`menu_${key}`];
  return state?.opened?.hidden === false && state.opened.expanded === 'true' && state.opened.focus === 'Home' && state.opened.mainInert === true && state.opened.footerInert === true && state.opened.overflow === 'hidden' && JSON.stringify(state.opened.current) === JSON.stringify(['Applications']) && state.selected?.hidden === true && state.selected.expanded === 'false' && state.selected.focus === 'Menu' && state.selected.mainInert === false && state.selected.footerInert === false && state.selected.overflow === '';
});
const cookiePass = ['1440','768','390'].every(key => {
  const state = results.interactions[`cookie_${key}`];
  return state?.opened?.open === true && state.opened.focus === 'Close' && state.closed?.open === false && state.closed.focus === 'Cookie Settings';
});
const anchorPass = results.interactions.definitionAnchor390?.hash === '#define-the-paper-result-and-system' && results.interactions.definitionAnchor390?.target === 'Define the paper result and system' && results.interactions.gradesAnchor390?.hash === '#grades-to-review' && results.interactions.gradesAnchor390?.target === 'Grades to Review' && JSON.stringify(results.interactions.gradesAnchor390?.grades) === JSON.stringify(['M-350','M-2377']);
const tabletColumnsPass = results.viewports['768'].requestGridColumns === 1;
const desktopColumnsPass = results.viewports['1440'].requestGridColumns === 3;
results.interactionPass = { menuPass, cookiePass, anchorPass, desktopRequestColumns:desktopColumnsPass, tabletRequestColumns:tabletColumnsPass };
results.pass = Object.values(results.risks).every(Boolean) && Object.values(results.interactionPass).every(Boolean);

await browser.close();
const output = path.join(outputDir, `APP-PAPER_GATE3_${mode.toUpperCase()}_OBSERVATIONS_V0.3.json`);
fs.writeFileSync(output, JSON.stringify(results, null, 2));
console.log(JSON.stringify({ output, pass:results.pass, risks:results.risks, interactionPass:results.interactionPass, viewports:results.viewports }, null, 2));
