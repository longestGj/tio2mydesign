const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('D:/16Wordpress_nextjs/node_modules/playwright');

const root = path.resolve(__dirname, '..', '..');
const visualDir = path.join(root, 'pages', 'home', '04_planning', 'visual-designs', 'home-applications-aligned-v1.1');
const htmlPath = path.join(visualDir, 'homepage-applications-aligned-preview-v1.1.html');
const baseUrl = pathToFileURL(htmlPath).href;
const captures = [
  { file: 'home-001-applications-aligned-1440-v1.1.png', width: 1440, height: 900, fullPage: true },
  { file: 'home-001-applications-aligned-1024-v1.1.png', width: 1024, height: 900, fullPage: true },
  { file: 'home-001-applications-aligned-768-v1.1.png', width: 768, height: 900, fullPage: true },
  { file: 'home-001-applications-aligned-390-v1.1.png', width: 390, height: 844, fullPage: true },
  { file: 'home-001-applications-aligned-320-v1.1.png', width: 320, height: 760, fullPage: true },
  { file: 'home-001-mobile-menu-390-v1.1.png', width: 390, height: 844, fullPage: false, query: '?state=menu' },
  { file: 'home-001-products-expanded-390-v1.1.png', width: 390, height: 844, fullPage: true, query: '?state=products' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    for (const capture of captures) {
      const context = await browser.newContext({ viewport: { width: capture.width, height: capture.height }, deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(baseUrl + (capture.query || ''), { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(200);
      await page.screenshot({ path: path.join(visualDir, capture.file), fullPage: capture.fullPage, animations: 'disabled' });
      await context.close();
      process.stdout.write(`captured ${capture.file}\n`);
    }
  } finally {
    await browser.close();
  }
})();
