import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const { marked } = require('marked');
const root = 'D:/23MySec';
const base = path.join(root, 'pages/applications/coatings/04_planning/gate3-v0.3');
const htmlPath = path.join(base, 'APP-COAT_GATE3_RESPONSIVE_WIREFRAME_V0.3.html');
const copyPath = path.join(root, 'pages/applications/coatings/04_planning/APP-COAT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md');
const mode = process.argv[2] ?? 'diagnostic';
const outputDir = path.join(base, mode === 'formal' ? 'approval_core' : 'diagnostic_support');
fs.mkdirSync(outputDir, { recursive: true });

const approved = fs.readFileSync(copyPath, 'utf8').match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/)?.[1]?.trim();
if (!approved) throw new Error('Approved buyer copy missing');
const expectedHtml = marked.parse(approved);
const url = pathToFileURL(htmlPath).href;
const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
const results = { mode, renderer: 'Microsoft Edge via Playwright', source: htmlPath, createdAt: new Date().toISOString(), viewports: {}, interactions: {}, content: {}, risks: {} };

const sizes = [
  { key: '1440', width: 1440, height: 1000 },
  { key: '768', width: 768, height: 1024 },
  { key: '390', width: 390, height: 844 }
];

function imageName(key, suffix = 'FULL') {
  return `APP-COAT_GATE3_${key}_${suffix}_V0.3.png`;
}

for (const vp of sizes) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const geometry = await page.evaluate(() => {
    const visible = el => { const r=el.getBoundingClientRect(); const s=getComputedStyle(el); return r.width>0&&r.height>0&&s.visibility!=='hidden'&&s.display!=='none'; };
    const body = document.body;
    const controls = [...document.querySelectorAll('a,button')].filter(visible).map(el => {
      const r=el.getBoundingClientRect(); return { text:(el.textContent||'').trim().slice(0,80), tag:el.tagName, width:+r.width.toFixed(2), height:+r.height.toFixed(2), href:el.getAttribute('href') };
    });
    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      modules: document.querySelectorAll('main section').length,
      h2: document.querySelectorAll('main h2').length,
      tables: document.querySelectorAll('main table').length,
      under44: controls.filter(c => c.width < 43.9 || c.height < 43.9),
      visibleControlCount: controls.length,
      currentVisible: [...document.querySelectorAll('[aria-current="page"]')].filter(visible).map(el => el.textContent.trim())
    };
  });
  const actualText = await page.locator('main').innerText();
  const expectedText = await page.evaluate(html => { const box=document.createElement('div'); box.innerHTML=html; return box.innerText; }, expectedHtml);
  const norm = text => text.replace(/\s+/g, ' ').trim();
  geometry.contentExactNormalized = norm(actualText) === norm(expectedText);
  geometry.gradeRows = await page.locator('.grades tbody tr').count();
  geometry.endpointRows = await page.locator('.endpoint-table tbody tr').count();
  geometry.sourceRows = await page.locator('.sources ol > li').count();
  geometry.externalSourceLinks = await page.locator('.sources a[href^="http"]').count();
  results.viewports[vp.key] = geometry;
  if (mode === 'formal') await page.screenshot({ path: path.join(outputDir, imageName(vp.key)), fullPage: true });
  else await page.screenshot({ path: path.join(outputDir, imageName(vp.key, 'DIAGNOSTIC_FULL')), fullPage: true });

  if (vp.key !== '1440') {
    await page.evaluate(() => scrollTo(0, 0));
    const menuButton = page.locator('.menuButton');
    await menuButton.click();
    const opened = await page.evaluate(() => ({
      hidden: document.querySelector('.mobileNav').hidden,
      expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
      focus: document.activeElement?.textContent?.trim(),
      mainInert: document.querySelector('main').inert,
      footerInert: document.querySelector('footer').inert,
      overflow: document.body.style.overflow
    }));
    if (mode === 'formal') await page.screenshot({ path: path.join(outputDir, imageName(vp.key, 'MENU')), fullPage: false });
    await page.locator('.mobileNav a[href="/applications/"]').evaluate(el => el.addEventListener('click', e => e.preventDefault(), { capture: true, once: true }));
    await page.locator('.mobileNav a[href="/applications/"]').click();
    const selected = await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), focus: document.activeElement?.textContent?.trim(), mainInert: document.querySelector('main').inert, overflow: document.body.style.overflow }));
    results.interactions[`menu_${vp.key}`] = { opened, selected };
  }

  const cookieTrigger = page.locator('#cookie-trigger');
  await cookieTrigger.click();
  const cookieOpened = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, focus: document.activeElement?.textContent?.trim() }));
  await page.locator('[data-cookie-close]').click();
  const cookieClosed = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, focus: document.activeElement?.textContent?.trim() }));
  results.interactions[`cookie_${vp.key}`] = { opened: cookieOpened, closed: cookieClosed };

  if (vp.key === '390') {
    await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; });
    await page.locator('.heroActions a[href="#grades-to-review"]').click();
    await page.locator('#grades-to-review').scrollIntoViewIfNeeded();
    await page.waitForTimeout(50);
    results.interactions.gradesAnchor390 = await page.evaluate(() => ({ hash: location.hash, target: document.querySelector('#grades-to-review h2')?.textContent?.trim(), gradeRows: document.querySelectorAll('.grades tbody tr').length }));
    if (mode === 'formal') await page.screenshot({ path: path.join(outputDir, imageName('390', 'GRADES_ANCHOR')), fullPage: false });
  }
  await page.close();
}

results.content = {
  expectedNormalizedSha256: crypto.createHash('sha256').update(approved.replace(/\s+/g, ' ').trim()).digest('hex'),
  allViewportsExactNormalized: Object.values(results.viewports).every(v => v.contentExactNormalized),
  gradeOrder: ['M-350','M-510','M-896','M-996','M-2196','M-895','M-52','M-2377']
};
results.risks = {
  endpointTable: Object.values(results.viewports).every(v => v.endpointRows === 5),
  neutralGradeSet: Object.values(results.viewports).every(v => v.gradeRows === 8),
  sixSources: Object.values(results.viewports).every(v => v.sourceRows === 6 && v.externalSourceLinks === 6),
  noHorizontalOverflow: Object.values(results.viewports).every(v => v.scrollWidth === v.clientWidth),
  touchTargets: Object.values(results.viewports).every(v => v.under44.length === 0),
  exactApprovedCopy: results.content.allViewportsExactNormalized
};
const menuPass = ['768','390'].every(key => {
  const state = results.interactions[`menu_${key}`];
  return state?.opened?.hidden === false && state.opened.expanded === 'true' && state.opened.focus === 'Home' && state.opened.mainInert === true && state.opened.footerInert === true && state.opened.overflow === 'hidden' && state.selected?.hidden === true && state.selected.expanded === 'false' && state.selected.focus === 'Menu' && state.selected.mainInert === false && state.selected.overflow === '';
});
const cookiePass = ['1440','768','390'].every(key => {
  const state = results.interactions[`cookie_${key}`];
  return state?.opened?.open === true && state.opened.focus === 'Close' && state.closed?.open === false && state.closed.focus === 'Cookie Settings';
});
const anchorPass = results.interactions.gradesAnchor390?.hash === '#grades-to-review' && results.interactions.gradesAnchor390?.target === 'Grades to Review' && results.interactions.gradesAnchor390?.gradeRows === 8;
results.interactionPass = { menuPass, cookiePass, anchorPass };
results.pass = Object.values(results.risks).every(Boolean) && menuPass && cookiePass && anchorPass;
await browser.close();
const output = path.join(outputDir, `APP-COAT_GATE3_${mode.toUpperCase()}_OBSERVATIONS_V0.3.json`);
fs.writeFileSync(output, JSON.stringify(results, null, 2));
console.log(JSON.stringify({ output, pass: results.pass, risks: results.risks, viewports: results.viewports, interactions: results.interactions }, null, 2));
