import fs from 'node:fs';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { chromium } from 'file:///C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';

const out = 'D:/23MySec/pages/markets/germany/04_planning/gate3-v0.1';
const source = `${out}/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html`;
const target = `${out}/approval_core/MARKET-EU-DE_G3_768-menu.png`;
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const freeze = JSON.parse(fs.readFileSync(`${out}/freeze-record.json`, 'utf8'));
if (hash(source) !== freeze.source.sha256) throw new Error('Frozen source identity changed');
if (fs.existsSync(target)) throw new Error('Formal 768 menu evidence already exists');
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
try {
  const context = await browser.newContext({ viewport: { width: 768, height: 900 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto(pathToFileURL(source).href);
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(image => image.decode())); });
  await page.locator('.menuButton').click();
  const actual = await page.evaluate(() => ({
    firstFocus: document.activeElement.textContent.trim(),
    current: document.querySelector('.mobileNav [aria-current="page"]')?.textContent.trim(),
    mainInert: document.querySelector('main').inert,
    footerInert: document.querySelector('footer').inert,
    bodyLocked: document.body.style.overflow === 'hidden',
    toggle: document.querySelector('.menuButton').textContent,
    menuVisible: !document.querySelector('.mobileNav').hidden
  }));
  if (!(actual.firstFocus === 'Home' && actual.current === 'Markets' && actual.mainInert && actual.footerInert && actual.bodyLocked && actual.toggle === 'Close' && actual.menuVisible)) throw new Error(`768 menu state invalid: ${JSON.stringify(actual)}`);
  await page.screenshot({ path: target, animations: 'disabled' });
  fs.writeFileSync(`${out}/diagnostic_support/formal-768-menu-capture.json`, JSON.stringify({ status: 'PASS', evidenceType: ['ACTUAL_RUNTIME','STATIC_VISUAL'], source: freeze.source, target: { path: target, bytes: fs.statSync(target).size, sha256: hash(target), width: 768, height: 900 }, actual, capturedAt: new Date().toISOString() }, null, 2));
  console.log(JSON.stringify({ status: 'PASS', target, bytes: fs.statSync(target).size, sha256: hash(target) }, null, 2));
  await context.close();
} finally {
  await browser.close();
}
