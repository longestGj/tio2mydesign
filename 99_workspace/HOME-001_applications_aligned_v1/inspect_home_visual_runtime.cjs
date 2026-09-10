const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('D:/16Wordpress_nextjs/node_modules/playwright');

const root = path.resolve(__dirname, '..', '..');
const visualDir = path.join(root, 'pages', 'home', '04_planning', 'visual-designs', 'home-applications-aligned-v1.0');
const htmlPath = path.join(visualDir, 'homepage-applications-aligned-preview-v1.0.html');
const outputPath = path.join(__dirname, 'runtime_observations_home_visual_bundle_v1.json');
const baseUrl = pathToFileURL(htmlPath).href;
const widths = [1440, 1024, 768, 390, 320];
const expectedModules = ['hero', 'start-here', 'markets', 'products', 'applications', 'company', 'documents', 'resources', 'page-rfq'];
const expectedGrades = ['M-350', 'M-510', 'M-896', 'M-996', 'M-2196', 'M-895', 'M-200', 'M-108', 'M-210', 'M-340', 'M-886', 'M-52', 'M-2377', 'CR-901'];
const homeData = JSON.parse(fs.readFileSync('D:/16Wordpress_nextjs/wordpress/plugins/tio2-site-model/config/tio2-my-homepage.json', 'utf8'));
const expectedCopy = [
  homeData.hero.eyebrow, homeData.hero.heading, homeData.hero.body, homeData.hero.primaryCta.label, homeData.hero.secondaryCta.label,
  homeData.startHere.label, homeData.startHere.intro, ...homeData.startHere.items.flatMap((item) => [item.title, item.description]),
  homeData.markets.eyebrow, homeData.markets.heading, homeData.markets.intro, homeData.markets.sectionCta.label,
  ...homeData.markets.items.flatMap((item) => [item.code, item.title, item.description, item.ctaLabel]),
  homeData.products.eyebrow, homeData.products.heading, homeData.products.intro, homeData.products.countLabel,
  ...homeData.products.groups.flatMap((group) => [group.title, group.description, ...group.gradeIds]),
  ...homeData.products.processLinks.map((item) => item.label), homeData.products.primaryCta.label,
  homeData.applications.eyebrow, homeData.applications.heading, homeData.applications.intro,
  ...homeData.applications.items.flatMap((item) => [item.symbol, item.title, item.description, item.ctaLabel]),
  homeData.company.eyebrow, homeData.company.heading, homeData.company.body, homeData.company.cta.label, homeData.company.entityName,
  ...homeData.company.summaries.flatMap((item) => [item.title, item.description]),
  homeData.documents.eyebrow, homeData.documents.heading, homeData.documents.intro,
  ...homeData.documents.items.flatMap((item) => [item.title, item.description, item.ctaLabel]),
  homeData.resources.eyebrow, homeData.resources.heading, homeData.resources.intro,
  ...homeData.resources.topics.flatMap((item) => [item.title, item.description, item.ctaLabel]),
  ...homeData.resources.answers.flatMap((item) => [item.question, item.answer, item.cta.label]),
  homeData.pageRfq.eyebrow, homeData.pageRfq.heading, homeData.pageRfq.body, ...homeData.pageRfq.fieldSummaries, homeData.pageRfq.cta.label,
  homeData.footer.description, homeData.footer.copyright,
].filter(Boolean);
const expectedHrefs = [];
const collectHrefs = (value) => {
  if (!value || typeof value !== 'object') return;
  if (typeof value.href === 'string') expectedHrefs.push(value.href);
  for (const child of Object.values(value)) collectHrefs(child);
};
collectHrefs(homeData);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const checks = [];
  const observations = [];
  const add = (id, pass, detail) => checks.push({ id, pass: Boolean(pass), detail });
  try {
    for (const width of widths) {
      const context = await browser.newContext({ viewport: { width, height: width <= 390 ? 844 : 900 }, deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(baseUrl, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      const data = await page.evaluate(({ expectedModules, expectedCopy, expectedHrefs }) => {
        const rect = (element) => {
          const value = element.getBoundingClientRect();
          return { x: value.x, y: value.y, width: value.width, height: value.height, top: value.top, bottom: value.bottom, right: value.right };
        };
        const visible = (element) => {
          const style = getComputedStyle(element);
          const value = element.getBoundingClientRect();
          return style.display !== 'none' && style.visibility !== 'hidden' && value.width > 0 && value.height > 0;
        };
        const moduleRects = expectedModules.map((name) => {
          const element = document.querySelector(`[data-module="${name}"]`);
          return { name, visible: visible(element), rect: rect(element) };
        });
        const controls = [...document.querySelectorAll('a,button,summary')]
          .filter(visible)
          .map((element) => ({ label: (element.textContent || element.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' '), tag: element.tagName.toLowerCase(), rect: rect(element) }));
        const heroImage = document.querySelector('.hero-media img');
        const pageRfq = document.querySelector('[data-module="page-rfq"]');
        const bodyText = document.body.innerText.replace(/\s+/g, ' ').trim();
        const sourceHrefs = [...new Set([...document.querySelectorAll('a[href]')].map((anchor) => anchor.getAttribute('href')))];
        return {
          viewport: { width: innerWidth, height: innerHeight, dpr: devicePixelRatio },
          scroll: { documentWidth: document.documentElement.scrollWidth, bodyWidth: document.body.scrollWidth, documentHeight: document.documentElement.scrollHeight },
          font: { bodyFamily: getComputedStyle(document.body).fontFamily, interReady: document.fonts.check('16px Inter') },
          moduleRects,
          heroImage: { visible: visible(heroImage), complete: heroImage.complete, naturalWidth: heroImage.naturalWidth, naturalHeight: heroImage.naturalHeight, rect: rect(heroImage) },
          pageRfqVisible: visible(pageRfq),
          startHereVisible: visible(document.querySelector('[data-module="start-here"]')),
          footerVisible: visible(document.querySelector('.global-footer')),
          visibleControls: controls,
          visibleCurrentLabels: [...document.querySelectorAll('body *')].filter((element) => element.children.length === 0 && element.textContent.trim() === 'CURRENT').length,
          parity: {
            missingCopy: [...new Set(expectedCopy.filter((text) => !bodyText.includes(text.replace(/\s+/g, ' ').trim())))],
            missingHrefs: [...new Set(expectedHrefs.filter((href) => !sourceHrefs.includes(href)))],
          },
        };
      }, { expectedModules, expectedCopy, expectedHrefs });
      observations.push(data);
      add(`viewport.${width}.identity`, data.viewport.width === width && data.viewport.dpr === 1, JSON.stringify(data.viewport));
      add(`viewport.${width}.overflow`, data.scroll.documentWidth <= width && data.scroll.bodyWidth <= width, JSON.stringify(data.scroll));
      add(`viewport.${width}.inter`, data.font.interReady && data.font.bodyFamily.toLowerCase().includes('inter'), JSON.stringify(data.font));
      add(`viewport.${width}.hero-image`, data.heroImage.visible && data.heroImage.complete && data.heroImage.naturalWidth > 0 && data.heroImage.naturalHeight > 0, JSON.stringify(data.heroImage));
      add(`viewport.${width}.start-here`, data.startHereVisible, `visible=${data.startHereVisible}`);
      add(`viewport.${width}.footer`, data.footerVisible, `visible=${data.footerVisible}`);
      add(`viewport.${width}.rfq`, width >= 768 ? data.pageRfqVisible : !data.pageRfqVisible, `visible=${data.pageRfqVisible}`);
      add(`viewport.${width}.current-label`, data.visibleCurrentLabels === 0, `count=${data.visibleCurrentLabels}`);
      add(`viewport.${width}.module-count`, data.moduleRects.length === expectedModules.length && data.moduleRects.every((item) => item.name === 'page-rfq' ? (width >= 768 ? item.visible : !item.visible) : item.visible), JSON.stringify(data.moduleRects.map(({ name, visible }) => ({ name, visible }))));
      const visibleOrdered = data.moduleRects.filter((item) => item.visible);
      add(`viewport.${width}.module-order`, visibleOrdered.every((item, index) => index === 0 || item.rect.top >= visibleOrdered[index - 1].rect.bottom - 1), JSON.stringify(visibleOrdered.map(({ name, rect }) => ({ name, top: rect.top, bottom: rect.bottom }))));
      if (width === 1440) {
        add('content.copy-parity', data.parity.missingCopy.length === 0, JSON.stringify(data.parity.missingCopy));
        add('content.href-parity', data.parity.missingHrefs.length === 0, JSON.stringify(data.parity.missingHrefs));
      }
      if (width <= 390) {
        const undersized = data.visibleControls.filter(({ rect }) => rect.width < 44 || rect.height < 44);
        add(`viewport.${width}.controls-44`, undersized.length === 0, JSON.stringify(undersized));
      }
      await context.close();
    }

    for (const state of ['menu', 'products']) {
      const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(`${baseUrl}?state=${state}`, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      if (state === 'menu') {
        const menu = await page.evaluate(() => {
          const element = document.querySelector('.mobile-menu');
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return { visible: style.display !== 'none' && rect.width > 0 && rect.height > 0, links: element.querySelectorAll('a').length, expanded: document.querySelector('.menu-button').getAttribute('aria-expanded'), bodyLocked: getComputedStyle(document.body).overflow === 'hidden', rect: { width: rect.width, height: rect.height } };
        });
        observations.push({ state: 'menu', ...menu });
        add('state.menu.visible', menu.visible, JSON.stringify(menu));
        add('state.menu.links', menu.links === 8, `links=${menu.links}`);
        add('state.menu.expanded', menu.expanded === 'true' && menu.bodyLocked, JSON.stringify(menu));
      } else {
        const products = await page.evaluate(() => ({ openGroups: document.querySelectorAll('.product-group[open]').length, visibleGradeIds: [...document.querySelectorAll('.product-group[open] .grades span')].map((item) => item.textContent.trim()) }));
        observations.push({ state: 'products', ...products });
        add('state.products.groups', products.openGroups === 4, `openGroups=${products.openGroups}`);
        add('state.products.grades', JSON.stringify(products.visibleGradeIds) === JSON.stringify(expectedGrades), JSON.stringify(products.visibleGradeIds));
      }
      await context.close();
    }
  } finally {
    await browser.close();
  }

  const failures = checks.filter((check) => !check.pass);
  const output = {
    verifier: 'HOME-001-APPLICATIONS-ALIGNED-RUNTIME-V1',
    capture_date: '2026-09-11',
    reproducibility: 'No wall-clock timestamp is encoded; identical inputs produce byte-stable JSON.',
    source: path.relative(root, htmlPath).replace(/\\/g, '/'),
    renderer: { browser: 'Chromium (Playwright)', deviceScaleFactor: 1, colorScheme: 'light', reducedMotion: 'reduce' },
    passed: failures.length === 0,
    checks_total: checks.length,
    checks_passed: checks.length - failures.length,
    checks_failed: failures.length,
    checks,
    observations,
  };
  fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  for (const check of checks) process.stdout.write(`${check.pass ? 'PASS' : 'FAIL'} ${check.id}: ${check.detail}\n`);
  process.stdout.write(`SUMMARY passed=${output.passed} total=${output.checks_total} failed=${output.checks_failed}\n`);
  process.exitCode = failures.length ? 1 : 0;
})();
