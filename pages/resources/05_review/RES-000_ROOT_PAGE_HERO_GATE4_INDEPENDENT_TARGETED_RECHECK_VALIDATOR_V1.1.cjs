const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = path.resolve(__dirname, '../04_planning/visual-designs/res-root-page-hero-v1.1');
const htmlPath = path.join(root, 'res-root-page-hero-preview-v1.1.html');
const freeze = JSON.parse(fs.readFileSync(path.join(root, 'freeze-record-v1.1.json'), 'utf8'));
const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const navOrder = ['Home', 'Markets', 'Products', 'Applications', 'Documents', 'Resources', 'About', 'Request a Quote'];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const checks = [];
  for (const width of [1440, 1023, 901, 900, 768, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1200 }, deviceScaleFactor: 1 });
    await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const before = await page.evaluate(viewportWidth => {
      const one = selector => document.querySelector(selector);
      const rect = element => { const box = element.getBoundingClientRect(); return { width: box.width, height: box.height }; };
      const h1 = one('h1');
      const media = one('.research-illustration');
      const cta = one('.button-primary');
      const text = document.body.innerText;
      return {
        width: viewportWidth,
        h1: { fontSize: getComputedStyle(h1).fontSize, fontWeight: getComputedStyle(h1).fontWeight, lineCount: Math.round(h1.getBoundingClientRect().height / parseFloat(getComputedStyle(h1).lineHeight)), transform: getComputedStyle(h1).transform, letterSpacing: getComputedStyle(h1).letterSpacing, rect: rect(h1) },
        cta: { href: cta.getAttribute('href'), background: getComputedStyle(cta).backgroundColor, color: getComputedStyle(cta).color, rect: rect(cta) },
        media: { display: getComputedStyle(media).display, rect: rect(media), ariaHidden: media.getAttribute('aria-hidden'), tag: media.tagName, role: media.getAttribute('role') },
        menu: { expanded: one('.menu-button')?.getAttribute('aria-expanded') ?? null, controls: one('.menu-button')?.getAttribute('aria-controls') ?? null, hidden: one('#mobile-primary')?.hidden ?? null },
        horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        currentVisible: [...document.querySelectorAll('*')].some(node => node.children.length === 0 && node.textContent.trim().toUpperCase() === 'CURRENT'),
        forbiddenH0: ['Featured procurement resources', 'Non-China Titanium Dioxide Supply Guide', 'Latest titanium dioxide research and procurement updates', 'ItemList'].filter(token => text.includes(token)),
        pathsTitle: one('#paths-title')?.textContent.trim(),
        pathCardCount: document.querySelectorAll('.path-card').length
      };
    }, width);
    let interaction = null;
    if (width <= 1023) {
      await page.locator('.menu-button').focus();
      await page.keyboard.press('Enter');
      const opened = await page.evaluate(() => ({
        expanded: document.querySelector('.menu-button').getAttribute('aria-expanded'),
        hidden: document.querySelector('#mobile-primary').hidden,
        links: [...document.querySelectorAll('#mobile-primary a')].map(node => node.textContent.trim()),
        current: [...document.querySelectorAll('#mobile-primary [aria-current="page"]')].map(node => node.textContent.trim()),
        visibleFocusable: [...document.querySelectorAll('#mobile-primary a')].filter(node => node.getBoundingClientRect().width > 0 && node.getBoundingClientRect().height > 0).length
      }));
      await page.keyboard.press('Escape');
      const closed = await page.evaluate(() => ({
        expanded: document.querySelector('.menu-button').getAttribute('aria-expanded'),
        hidden: document.querySelector('#mobile-primary').hidden,
        focusReturned: document.activeElement === document.querySelector('.menu-button'),
        focusableInClosedMenu: [...document.querySelectorAll('#mobile-primary a')].filter(node => node.getBoundingClientRect().width > 0 && node.getBoundingClientRect().height > 0).length
      }));
      interaction = { opened, closed };
    }
    checks.push({ width, before, interaction });
    await page.close();
  }
  await browser.close();
  const evidence = freeze.evidence.map(item => ({ path: item.path, expected_sha256: item.sha256, actual_sha256: sha256(path.join(root, item.path)), matches: item.sha256 === sha256(path.join(root, item.path)) }));
  const result = {
    review_id: 'RES-ROOT-HERO-G4-IR-01-R1',
    mode: 'TARGETED_RECHECK',
    candidate_sha256: sha256(htmlPath),
    candidate_matches_freeze: sha256(htmlPath) === freeze.candidate.sha256,
    evidence,
    checks,
    closed: ['P0-01', 'P1-01', 'P1-03', 'P2-01'],
    remaining_required: ['P1-02'],
    result: 'CHANGES_REQUIRED'
  };
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = 1;
})().catch(error => { console.error(error.stack || error); process.exit(2); });
