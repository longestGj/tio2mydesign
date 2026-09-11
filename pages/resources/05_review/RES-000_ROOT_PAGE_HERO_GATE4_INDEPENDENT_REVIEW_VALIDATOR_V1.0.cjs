const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = path.resolve(__dirname, '../04_planning/visual-designs/res-root-page-hero-v1.0');
const htmlPath = path.join(root, 'res-root-page-hero-preview-v1.0.html');
const freeze = JSON.parse(fs.readFileSync(path.join(root, 'freeze-record.json'), 'utf8'));
const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const checks = [];
  for (const width of [1440, 901, 768, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1200 }, deviceScaleFactor: 1 });
    await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const data = await page.evaluate(viewportWidth => {
      const one = selector => document.querySelector(selector);
      const rect = element => {
        if (!element) return null;
        const box = element.getBoundingClientRect();
        return { x: box.x, y: box.y, width: box.width, height: box.height };
      };
      const menu = one('.menu-button');
      const before = menu?.getAttribute('aria-expanded') ?? null;
      menu?.click();
      const accessibleNavs = [...document.querySelectorAll('nav')]
        .filter(node => {
          const style = getComputedStyle(node);
          const box = node.getBoundingClientRect();
          return style.display !== 'none' && box.width > 0 && box.height > 0;
        })
        .map(node => ({
          label: node.getAttribute('aria-label'),
          links: [...node.querySelectorAll('a')].map(a => a.textContent.trim()),
          current: [...node.querySelectorAll('[aria-current="page"]')].map(a => a.textContent.trim())
        }));
      const h1 = one('h1');
      const hero = one('.hero-shell');
      const content = one('.hero-layout > div');
      const media = one('.research-illustration');
      const cta = one('.button-primary');
      const text = document.body.innerText;
      return {
        width: viewportWidth,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        h1: { rect: rect(h1), fontSize: getComputedStyle(h1).fontSize, fontWeight: getComputedStyle(h1).fontWeight, transform: getComputedStyle(h1).transform },
        hero: rect(hero),
        heroContent: rect(content),
        cta: { href: cta.getAttribute('href'), background: getComputedStyle(cta).backgroundColor, color: getComputedStyle(cta).color, rect: rect(cta) },
        media: { display: getComputedStyle(media).display, rect: rect(media), ariaLabel: media.getAttribute('aria-label'), ariaHidden: media.getAttribute('aria-hidden'), svgAriaHidden: media.querySelector('svg')?.getAttribute('aria-hidden') },
        menu: { exists: !!menu, ariaExpandedBefore: before, ariaExpandedAfter: menu?.getAttribute('aria-expanded') ?? null, mobileMenuLinkCount: document.querySelectorAll('.mobile-menu a').length, accessibleNavs },
        h0ForbiddenContentPresent: ['Featured procurement resources', 'Non-China Titanium Dioxide Supply Guide', 'Latest titanium dioxide research and procurement updates', 'ItemList'].filter(token => text.includes(token)),
        visibleCurrentText: [...document.querySelectorAll('*')].some(node => node.children.length === 0 && node.textContent.trim().toUpperCase() === 'CURRENT')
      };
    }, width);
    checks.push(data);
    await page.close();
  }
  await browser.close();
  const evidence = freeze.evidence.map(item => ({
    path: item.path,
    expected_sha256: item.sha256,
    actual_sha256: sha256(path.join(root, item.path)),
    matches: item.sha256 === sha256(path.join(root, item.path))
  }));
  const result = {
    review_id: 'RES-ROOT-HERO-G4-IR-01',
    mode: 'INDEPENDENT_REVIEW',
    candidate_sha256: sha256(htmlPath),
    candidate_matches_freeze: sha256(htmlPath) === freeze.candidate.sha256,
    evidence,
    checks,
    result: 'CHANGES_REQUIRED',
    required_findings: ['P0-01', 'P1-01', 'P1-02', 'P1-03'],
    advisory_findings: ['P2-01']
  };
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = 1;
})().catch(error => { console.error(error.stack || error); process.exit(2); });
