import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const { marked } = require('marked');
const root = 'D:/23MySec';
const base = path.join(root, 'pages/applications/printing-inks/04_planning/gate3-v0.1');
const htmlPath = path.join(base, 'APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.1.html');
const copyPath = path.join(root, 'pages/applications/printing-inks/04_planning/APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md');
const mode = process.argv[2] ?? 'diagnostic';
const outputDir = path.join(base, mode === 'formal' ? 'approval_core' : 'diagnostic_support');
fs.mkdirSync(outputDir, { recursive: true });

const approved = fs.readFileSync(copyPath, 'utf8').match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/)?.[1]?.trim();
if (!approved) throw new Error('Approved buyer copy missing');
const expectedHtml = marked.parse(approved);
const url = pathToFileURL(htmlPath).href;
const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
const results = { mode, renderer: 'Microsoft Edge via Playwright', source: htmlPath, createdAt: new Date().toISOString(), viewports: {}, interactions: {}, content: {}, risks: {}, evidenceTypes: ['ACTUAL_RUNTIME','STATIC_VISUAL','SOURCE_INSPECTION'] };

const sizes = [
  { key: '1440', width: 1440, height: 1000 },
  { key: '768', width: 768, height: 1024 },
  { key: '390', width: 390, height: 844 }
];

function imageName(key, suffix = 'FULL') {
  return `APP-INK_GATE3_${key}_${suffix}_V0.1.png`;
}

for (const vp of sizes) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const geometry = await page.evaluate(() => {
    const visible = element => { const box=element.getBoundingClientRect(); const style=getComputedStyle(element); return box.width>0&&box.height>0&&style.visibility!=='hidden'&&style.display!=='none'; };
    const controls = [...document.querySelectorAll('a,button')].filter(visible).map(element => {
      const box=element.getBoundingClientRect(); return { text:(element.textContent||'').trim().slice(0,100), tag:element.tagName, width:+box.width.toFixed(2), height:+box.height.toFixed(2), href:element.getAttribute('href') };
    });
    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      modules: document.querySelectorAll('main section').length,
      h1: document.querySelectorAll('main h1').length,
      h2: document.querySelectorAll('main h2').length,
      tables: document.querySelectorAll('main table').length,
      under44: controls.filter(control => control.width < 43.9 || control.height < 43.9),
      visibleControlCount: controls.length,
      currentVisible: [...document.querySelectorAll('[aria-current="page"]')].filter(visible).map(element => element.textContent.trim()),
      internalGovernanceLeak: /GATE_|DRAFT_FOR_|APPROVED_|PENDING_|Review ID|evidence ID/i.test(document.querySelector('main').innerText)
    };
  });
  const narrativeTokens = await page.locator('main').evaluate(element => {
    const tokens=[];
    const walker=document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    while(walker.nextNode()){
      const parent=walker.currentNode.parentElement;
      if(parent?.closest('.breadcrumb,.eyebrow')) continue;
      const value=(walker.currentNode.nodeValue||'').replace(/\s+/g,' ').trim();
      if(value) tokens.push(value);
    }
    return tokens;
  });
  const expectedTokens = await page.evaluate(html => {
    const box=document.createElement('div'); box.innerHTML=html;
    const tokens=[];
    const walker=document.createTreeWalker(box, NodeFilter.SHOW_TEXT);
    while(walker.nextNode()){
      const value=(walker.currentNode.nodeValue||'').replace(/\s+/g,' ').trim();
      if(value) tokens.push(value);
    }
    return tokens;
  }, expectedHtml);
  geometry.contentExactNormalized = narrativeTokens.join(' ') === expectedTokens.join(' ');
  geometry.documentRows = await page.locator('.documents-matrix tbody tr').count();
  geometry.gradeRows = await page.locator('.grades tbody tr').count();
  geometry.requestCards = await page.locator('.requestCards .requestCard').count();
  geometry.sourceRows = await page.locator('.sources ol > li').count();
  geometry.externalSourceLinks = await page.locator('.sources a[href^="http"]').count();
  geometry.gradeOrder = await page.locator('.grades tbody tr td:first-child').allInnerTexts();
  geometry.actionLabels = await page.locator('.requestCards a').allInnerTexts();
  results.viewports[vp.key] = geometry;
  await page.screenshot({ path: path.join(outputDir, imageName(vp.key, mode === 'formal' ? 'FULL' : 'DIAGNOSTIC_FULL')), fullPage: true });

  if (vp.key !== '1440') {
    await page.evaluate(() => scrollTo(0, 0));
    const menuButton = page.locator('.menuButton');
    await menuButton.click();
    const opened = await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), focus: document.activeElement?.textContent?.trim(), mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert, overflow: document.body.style.overflow }));
    if (mode === 'formal') await page.screenshot({ path: path.join(outputDir, imageName(vp.key, 'MENU')), fullPage: false });
    await page.locator('.mobileNav a[href="/applications/"]').evaluate(element => element.addEventListener('click', event => event.preventDefault(), { capture: true, once: true }));
    await page.locator('.mobileNav a[href="/applications/"]').click();
    const selected = await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), focus: document.activeElement?.textContent?.trim(), mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert, overflow: document.body.style.overflow }));
    results.interactions[`menu_${vp.key}`] = { opened, selected };
  }

  const cookieTrigger = page.locator('#cookie-trigger');
  await cookieTrigger.click();
  const cookieOpened = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, focus: document.activeElement?.textContent?.trim() }));
  await page.locator('[data-cookie-close]').click();
  const cookieClosed = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, focus: document.activeElement?.textContent?.trim() }));
  results.interactions[`cookie_${vp.key}`] = { opened: cookieOpened, closed: cookieClosed };

  if (vp.key === '390') {
    await page.evaluate(() => { document.documentElement.style.scrollBehavior='auto'; });
    await page.locator('.heroActions a[href="#define-the-ink-and-print-system"]').click();
    results.interactions.systemAnchor390 = await page.evaluate(() => ({ hash: location.hash, target: document.querySelector('#define-the-ink-and-print-system h2')?.textContent?.trim() }));
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
  allViewportsExactNormalized: Object.values(results.viewports).every(viewport => viewport.contentExactNormalized),
  approvedBreadcrumb: 'Home / Applications / Titanium Dioxide for Printing Inks',
  approvedEyebrow: 'PRINTING INKS APPLICATION'
};
results.risks = {
  documentRoleMatrix: Object.values(results.viewports).every(viewport => viewport.documentRows === 4),
  neutralGradeSet: Object.values(results.viewports).every(viewport => viewport.gradeRows === 4 && viewport.gradeOrder.join('|') === 'M-350|M-510|M-52|M-2377'),
  requestActions: Object.values(results.viewports).every(viewport => viewport.requestCards === 3 && viewport.actionLabels.join('|') === 'Request Technical Documents|Request a Sample|Discuss Your Printing Inks Application'),
  sixSources: Object.values(results.viewports).every(viewport => viewport.sourceRows === 6 && viewport.externalSourceLinks === 6),
  moduleAndHeadingCount: Object.values(results.viewports).every(viewport => viewport.modules === 11 && viewport.h1 === 1 && viewport.h2 === 10),
  noHorizontalOverflow: Object.values(results.viewports).every(viewport => viewport.scrollWidth === viewport.clientWidth),
  touchTargets: Object.values(results.viewports).every(viewport => viewport.under44.length === 0),
  exactApprovedNarrative: results.content.allViewportsExactNormalized,
  noGovernanceLeak: Object.values(results.viewports).every(viewport => !viewport.internalGovernanceLeak)
};
const menuPass = ['768','390'].every(key => {
  const state=results.interactions[`menu_${key}`];
  return state?.opened?.hidden===false&&state.opened.expanded==='true'&&state.opened.focus==='Home'&&state.opened.mainInert===true&&state.opened.footerInert===true&&state.opened.overflow==='hidden'&&state.selected?.hidden===true&&state.selected.expanded==='false'&&state.selected.focus==='Menu'&&state.selected.mainInert===false&&state.selected.footerInert===false&&state.selected.overflow==='';
});
const cookiePass = ['1440','768','390'].every(key => {
  const state=results.interactions[`cookie_${key}`];
  return state?.opened?.open===true&&state.opened.focus==='Close'&&state.closed?.open===false&&state.closed.focus==='Cookie Settings';
});
const anchorPass = results.interactions.systemAnchor390?.hash==='#define-the-ink-and-print-system'&&results.interactions.systemAnchor390?.target==='Define the ink and print system'&&results.interactions.gradesAnchor390?.hash==='#grades-to-review'&&results.interactions.gradesAnchor390?.target==='Grades to Review'&&results.interactions.gradesAnchor390?.gradeRows===4;
results.interactionPass = { menuPass, cookiePass, anchorPass };
results.pass = Object.values(results.risks).every(Boolean) && menuPass && cookiePass && anchorPass;
await browser.close();
const output = path.join(outputDir, `APP-INK_GATE3_${mode.toUpperCase()}_OBSERVATIONS_V0.1.json`);
fs.writeFileSync(output, JSON.stringify(results, null, 2));
console.log(JSON.stringify({ output, pass: results.pass, risks: results.risks, interactionPass: results.interactionPass, viewports: results.viewports }, null, 2));
