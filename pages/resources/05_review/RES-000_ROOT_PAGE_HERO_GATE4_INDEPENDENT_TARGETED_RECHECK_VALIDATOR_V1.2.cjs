const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = path.resolve(__dirname, '../04_planning/visual-designs/res-root-page-hero-v1.2');
const htmlPath = path.join(root, 'res-root-page-hero-preview-v1.2.html');
const freeze = JSON.parse(fs.readFileSync(path.join(root, 'freeze-record-v1.2.json'), 'utf8'));
const sha256 = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const navOrder = ['Home', 'Markets', 'Products', 'Applications', 'Documents', 'Resources', 'About', 'Request a Quote'];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const checks = [];
  for (const width of [1440, 1023, 901, 900, 768, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1200 }, deviceScaleFactor: 1 });
    await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const initial = await page.evaluate(viewportWidth => {
      const one = selector => document.querySelector(selector);
      const box = element => { const rect = element.getBoundingClientRect(); return { left: rect.left, right: rect.right, width: rect.width, height: rect.height }; };
      const h1 = one('h1');
      const hero = one('.hero-shell');
      const heroLayout = one('.hero-layout');
      const media = one('.research-illustration');
      const cta = one('.button-primary');
      const controls = [...document.querySelectorAll('a,button')].filter(node => { const rect = node.getBoundingClientRect(); return getComputedStyle(node).display !== 'none' && rect.width > 0 && rect.height > 0; }).map(node => ({ label: node.textContent.trim() || node.getAttribute('aria-label'), width: node.getBoundingClientRect().width, height: node.getBoundingClientRect().height }));
      const style = getComputedStyle(h1);
      const text = document.body.innerText;
      return {
        width: viewportWidth,
        h1: { fontSize: style.fontSize, fontWeight: style.fontWeight, letterSpacing: style.letterSpacing, transform: style.transform, fontStretch: style.fontStretch, lineCount: Math.round(h1.getBoundingClientRect().height / parseFloat(style.lineHeight)), box: box(h1) },
        hero: box(hero),
        heroPadding: getComputedStyle(heroLayout).paddingLeft,
        cta: { href: cta.getAttribute('href'), background: getComputedStyle(cta).backgroundColor, color: getComputedStyle(cta).color, box: box(cta) },
        media: { visible: getComputedStyle(media).display !== 'none' && media.getBoundingClientRect().height > 0, box: box(media), ariaHidden: media.getAttribute('aria-hidden'), tag: media.tagName, role: media.getAttribute('role') },
        menu: { expanded: one('.menu-button')?.getAttribute('aria-expanded') ?? null, controls: one('.menu-button')?.getAttribute('aria-controls') ?? null, hidden: one('#mobile-primary')?.hidden ?? null },
        controls,
        horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        currentVisible: [...document.querySelectorAll('*')].some(node => node.children.length === 0 && node.textContent.trim().toUpperCase() === 'CURRENT'),
        forbiddenH0: ['Featured procurement resources', 'Non-China Titanium Dioxide Supply Guide', 'Latest titanium dioxide research and procurement updates', 'ItemList'].filter(token => text.includes(token)),
        pathsTitle: one('#paths-title')?.textContent.trim(),
        pathCardCount: document.querySelectorAll('.path-card').length
      };
    }, width);
    let menu = null;
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
      menu = { opened, closed };
    }
    const expectedLines = width === 390 ? 4 : 3;
    const menuPass = width > 1023 || (menu.opened.expanded === 'true' && !menu.opened.hidden && JSON.stringify(menu.opened.links) === JSON.stringify(navOrder) && JSON.stringify(menu.opened.current) === JSON.stringify(['Resources']) && menu.opened.visibleFocusable === 8 && menu.closed.expanded === 'false' && menu.closed.hidden && menu.closed.focusReturned && menu.closed.focusableInClosedMenu === 0);
    const mobileH1Pass = width !== 390 || (initial.h1.fontSize === '36px' && initial.h1.fontWeight === '700' && ['normal', '0px'].includes(initial.h1.letterSpacing) && initial.h1.transform === 'none' && initial.h1.fontStretch === '100%' && initial.h1.lineCount === 4 && initial.heroPadding === '24px' && initial.h1.box.left >= initial.hero.left + 24 && initial.h1.box.right <= initial.hero.right - 24);
    const pass = initial.h1.fontWeight === '700' && initial.h1.lineCount <= expectedLines && !initial.horizontalOverflow && !initial.currentVisible && initial.cta.href === '#research-paths' && initial.cta.background === 'rgb(0, 128, 120)' && initial.cta.color === 'rgb(255, 255, 255)' && initial.media.ariaHidden === 'true' && initial.media.tag === 'DIV' && initial.media.role === null && initial.pathsTitle === 'Choose the right research path' && initial.pathCardCount === 3 && initial.forbiddenH0.length === 0 && (width > 900 ? initial.media.visible : (!initial.media.visible && initial.media.box.height === 0)) && menuPass && mobileH1Pass;
    checks.push({ width, initial, menu, pass });
    await page.close();
  }
  await browser.close();
  const evidence = freeze.evidence.map(item => ({ path: item.path, expected_sha256: item.sha256, actual_sha256: sha256(path.join(root, item.path)), matches: item.sha256 === sha256(path.join(root, item.path)) }));
  const allPass = checks.every(check => check.pass) && sha256(htmlPath) === freeze.candidate.sha256 && evidence.every(item => item.matches);
  console.log(JSON.stringify({ review_id: 'RES-ROOT-HERO-G4-IR-01-R2', mode: 'TARGETED_RECHECK', candidate_sha256: sha256(htmlPath), candidate_matches_freeze: sha256(htmlPath) === freeze.candidate.sha256, evidence, checks, result: allPass ? 'PROJECT_CONTROL_REVIEW_PASS' : 'CHANGES_REQUIRED', required_findings: allPass ? [] : ['RUNTIME_CHECK_FAILURE'] }, null, 2));
  process.exitCode = allPass ? 0 : 1;
})().catch(error => { console.error(error.stack || error); process.exit(2); });
