const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

// The red-phase check ran against V1.3 before this replacement existed.
// This green-phase replay exercises the frozen V1.4 candidate itself.
const visualDir = __dirname;
const subjectPath = path.join(visualDir, 'homepage-root-page-hero-preview-v1.4.html');
const expected = [
  { width: 1440, height: 900, fontSize: '56px', fontWeight: '700', lines: 2 },
  { width: 768, height: 1200, fontSize: '44px', fontWeight: '700', lines: 2 },
  { width: 390, height: 1500, fontSize: '36px', fontWeight: '700', lines: 3 },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  let failures = 0;
  try {
    for (const target of expected) {
      const context = await browser.newContext({ viewport: { width: target.width, height: target.height }, deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(pathToFileURL(subjectPath).href, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(200);
      const actual = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        const hero = document.querySelector('.hero-shell');
        const h1Style = getComputedStyle(h1);
        const heroStyle = getComputedStyle(hero);
        const pseudo = getComputedStyle(hero, '::before');
        const rect = h1.getBoundingClientRect();
        return {
          fontSize: h1Style.fontSize,
          fontWeight: h1Style.fontWeight,
          lines: Math.round(rect.height / parseFloat(h1Style.lineHeight)),
          text: h1.textContent.trim(),
          bodyScrollWidth: document.body.scrollWidth,
          documentScrollWidth: document.documentElement.scrollWidth,
          hero: { borderWidth: heroStyle.borderWidth, borderRadius: heroStyle.borderRadius, boxShadow: heroStyle.boxShadow, beforeDisplay: pseudo.display, beforeContent: pseudo.content },
          actions: [...document.querySelectorAll('.hero-actions a')].map((node) => ({ text: node.textContent.trim(), href: node.getAttribute('href'), height: node.getBoundingClientRect().height })),
          media: document.querySelector('.hero-media img').getAttribute('src'),
          firstModule: document.querySelector('[data-module="start-here"]')?.getAttribute('data-module'),
        };
      });
      const checks = {
        fontSize: actual.fontSize === target.fontSize,
        fontWeight: actual.fontWeight === target.fontWeight,
        lines: actual.lines === target.lines && actual.lines <= 3,
        exactH1: actual.text === 'Malaysia Titanium Dioxide for Industrial Buyers',
        noOverflow: actual.bodyScrollWidth === target.width && actual.documentScrollWidth === target.width,
        openWhiteHero: actual.hero.borderWidth === '0px' && actual.hero.borderRadius === '0px' && actual.hero.boxShadow === 'none' && actual.hero.beforeDisplay === 'none' && actual.hero.beforeContent === 'none',
        actions: actual.actions.length === 2
          && actual.actions[0].text === 'Request a Quote' && actual.actions[0].href === '/request-a-quote/' && actual.actions[0].height >= 44
          && actual.actions[1].text === 'View Products' && actual.actions[1].href === '/products/' && actual.actions[1].height >= 44,
        media: actual.media === '../assets/homepage-hero-tio2-material-v0.6.png',
        firstModule: actual.firstModule === 'start-here',
      };
      const passed = Object.values(checks).every(Boolean);
      if (!passed) failures += 1;
      results.push({ viewport: { width: target.width, height: target.height }, expected: target, actual, checks, passed });
      await context.close();
    }
  } finally {
    await browser.close();
  }
  const report = { subjectPath, expected, results, failures, passed: failures === 0 };
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  if (failures) process.exitCode = 1;
})();
