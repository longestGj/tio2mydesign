const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const visualDir = __dirname;
const htmlPath = path.join(visualDir, 'homepage-root-page-hero-preview-v1.4.html');
const captures = [
  { file: 'HOME-001_ROOT_PAGE_HERO_DESKTOP_1440_CANDIDATE_V1.4.png', width: 1440, height: 900 },
  { file: 'HOME-001_ROOT_PAGE_HERO_TABLET_768_CANDIDATE_V1.4.png', width: 768, height: 1400 },
  { file: 'HOME-001_ROOT_PAGE_HERO_MOBILE_390_CANDIDATE_V1.4.png', width: 390, height: 1500 },
];
const inspections = [
  { width: 1440, height: 900 },
  { width: 1024, height: 900 },
  { width: 1023, height: 900 },
  { width: 768, height: 1400 },
  { width: 767, height: 1400 },
  { width: 561, height: 1200 },
  { width: 390, height: 1500 },
  { width: 350, height: 1200 },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const results = [];
    for (const target of inspections) {
      const context = await browser.newContext({ viewport: { width: target.width, height: target.height }, deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(200);
      const result = await page.evaluate(() => {
        const shell = document.querySelector('.hero-shell');
        const h1 = document.querySelector('h1');
        const style = getComputedStyle(shell);
        const h1Style = getComputedStyle(h1);
        const pseudo = getComputedStyle(shell, '::before');
        const media = document.querySelector('.hero-media');
        const startGrid = document.querySelector('.start-grid');
        return {
          viewport: { width: innerWidth, height: innerHeight },
          devicePixelRatio,
          bodyScrollWidth: document.body.scrollWidth,
          documentScrollWidth: document.documentElement.scrollWidth,
          startGridWidth: startGrid.getBoundingClientRect().width,
          shell: {
            width: shell.getBoundingClientRect().width,
            columns: style.gridTemplateColumns,
            padding: style.padding,
            borderWidth: style.borderWidth,
            borderRadius: style.borderRadius,
            backgroundImage: style.backgroundImage,
            boxShadow: style.boxShadow,
            beforeDisplay: pseudo.display,
            beforeContent: pseudo.content,
          },
          h1: { text: h1.textContent.trim(), fontSize: h1Style.fontSize, fontWeight: h1Style.fontWeight, lines: Math.round(h1.getBoundingClientRect().height / parseFloat(h1Style.lineHeight)) },
          intro: document.querySelector('.hero-copy p:not(.eyebrow)').textContent.trim(),
          mediaSource: document.querySelector('.hero-media img').getAttribute('src'),
          mediaBox: { width: media.getBoundingClientRect().width, height: media.getBoundingClientRect().height },
          actions: [...document.querySelectorAll('.hero-actions a')].map((node) => ({ text: node.textContent.trim(), href: node.getAttribute('href'), height: node.getBoundingClientRect().height })),
        };
      });
      results.push(result);
      const capture = captures.find((item) => item.width === target.width && item.height === target.height);
      if (capture) {
        const outputPath = path.join(visualDir, capture.file);
        await page.screenshot({ path: outputPath, fullPage: false, animations: 'disabled' });
        process.stdout.write(`captured ${outputPath}\n`);
      }
      await context.close();
    }
    const record = {
      capturedAt: new Date().toISOString(),
      browser: `Chromium ${browser.version()}`,
      playwright: require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json').version,
      mode: { headless: true, fullPage: false, animations: 'disabled', colorScheme: 'light', reducedMotion: 'reduce', fontWait: 'document.fonts.ready + 200ms', deviceScaleFactor: 1 },
      captures,
      inspections: results,
    };
    fs.writeFileSync(path.join(visualDir, 'capture-runtime-v1.4.json'), `${JSON.stringify(record, null, 2)}\n`);
    process.stdout.write(`${JSON.stringify(record, null, 2)}\n`);
  } finally {
    await browser.close();
  }
})();
