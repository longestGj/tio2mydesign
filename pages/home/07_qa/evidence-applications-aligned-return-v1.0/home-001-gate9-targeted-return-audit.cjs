const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {createRequire} = require('node:module');

const requireD16 = createRequire('D:\\16Wordpress_nextjs\\.worktrees\\home-001-app-align-gate8\\package.json');
const {chromium} = requireD16('playwright');
const {AxeBuilder} = requireD16('@axe-core/playwright');
const baseUrl = 'http://127.0.0.1:3292/';
const widths = [1440, 1024, 768, 390, 320];
const outDir = __dirname;

function sha(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').toUpperCase();
}

(async () => {
  const browser = await chromium.launch({headless: true});
  const report = {
    reviewId: 'HOME-001-G9-APP-ALIGN-RETURN-01',
    collectedAt: new Date().toISOString(),
    baseUrl,
    widths: {},
    menu: null,
    screenshotHashes: {},
  };

  for (const width of widths) {
    const context = await browser.newContext({viewport: {width, height: 900}, deviceScaleFactor: 1});
    const page = await context.newPage();
    const response = await page.goto(baseUrl, {waitUntil: 'networkidle'});
    await page.evaluate(() => document.fonts.ready);
    const screenshot = path.join(outDir, `home-001-return-g9-${width}.png`);
    await page.screenshot({path: screenshot, fullPage: true, animations: 'disabled'});
    const runtime = await page.evaluate(() => {
      const hero = document.querySelector('[data-module="hero"]');
      if (!hero) throw new Error('Hero not found');
      const pseudo = getComputedStyle(hero, '::before');
      const box = hero.getBoundingClientRect();
      const image = hero.querySelector('img')?.getBoundingClientRect();
      return {
        statusMarker: document.querySelector('[data-site-scope="tio2-my"]') !== null,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        heroBox: {x: box.x, y: box.y, width: box.width, height: box.height},
        heroImageBox: image ? {x: image.x, y: image.y, width: image.width, height: image.height} : null,
        heroBefore: {
          content: pseudo.content,
          display: pseudo.display,
          width: pseudo.width,
          backgroundImage: pseudo.backgroundImage,
          backgroundColor: pseudo.backgroundColor,
        },
        h1: document.querySelector('h1')?.textContent?.trim(),
        modules: [...document.querySelectorAll('[data-module]')].map((node) => node.getAttribute('data-module')),
      };
    });
    const axe = await new AxeBuilder({page}).analyze();
    report.widths[String(width)] = {
      httpStatus: response?.status() ?? null,
      runtime,
      axeViolations: axe.violations.length,
      axeSeriousCritical: axe.violations.filter((item) => item.impact === 'serious' || item.impact === 'critical').length,
    };
    report.screenshotHashes[path.basename(screenshot)] = {sha256: sha(screenshot)};
    await context.close();
  }

  const context = await browser.newContext({viewport: {width: 390, height: 844}, deviceScaleFactor: 1});
  const page = await context.newPage();
  await page.goto(baseUrl, {waitUntil: 'networkidle'});
  await page.getByRole('button', {name: /open primary navigation/i}).click();
  report.menu = await page.evaluate(() => {
    const dialog = document.querySelector('dialog[open]');
    if (!dialog) throw new Error('Open menu dialog not found');
    const backdrop = getComputedStyle(dialog, '::backdrop');
    return {
      open: true,
      ariaModal: dialog.getAttribute('aria-modal'),
      backdropBackground: backdrop.backgroundColor,
      bodyOverflow: getComputedStyle(document.body).overflow,
    };
  });
  const menuShot = path.join(outDir, 'home-001-return-g9-390-menu-open.png');
  await page.screenshot({path: menuShot, fullPage: true, animations: 'disabled'});
  report.screenshotHashes[path.basename(menuShot)] = {sha256: sha(menuShot)};
  await context.close();
  await browser.close();

  const output = path.join(outDir, 'home-001-gate9-targeted-return-audit-v1.0.json');
  fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
})().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exitCode = 1;
});
