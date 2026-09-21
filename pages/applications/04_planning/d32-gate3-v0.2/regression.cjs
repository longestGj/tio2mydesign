const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const candidate = path.resolve(process.argv[2] || path.join(__dirname, 'application-planning.html'));
const expectedRoutes = {
  'APP-COAT': '/applications/titanium-dioxide-for-coatings/',
  'APP-PLAS': '/applications/titanium-dioxide-for-plastics/',
  'APP-MB': '/applications/titanium-dioxide-for-masterbatch/',
  'APP-INK': '/applications/titanium-dioxide-for-printing-inks/',
  'APP-PAPER': '/applications/titanium-dioxide-for-paper/'
};
const failures = [];
const check = (name, pass, details) => { if (!pass) failures.push({ name, details }); };

if (!fs.existsSync(candidate)) throw new Error(`Missing regression candidate: ${candidate}`);

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 1000 }, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(candidate).href);
    await page.evaluate(() => document.fonts.ready);

    const editorialEyebrows = await page.evaluate(() => [...document.querySelectorAll('[data-module="M2-APPLICATION_PATHS"] .eyebrow, [data-module="M3-EVALUATION_GUIDE"] .eyebrow, [data-module="M4-PROCUREMENT_PATHS"] .eyebrow, [data-module="M5-FINAL-RFQ"] .eyebrow')].map((element) => element.textContent.trim()));
    check('F01 no unapproved M2-M5 eyebrow copy', editorialEyebrows.length === 0, editorialEyebrows);

    const functionalTokens = await page.evaluate(() => ['.breadcrumb a', '.heroLinks a', '[data-grade-link]'].map((selector) => {
      const style = getComputedStyle(document.querySelector(selector));
      return { selector, color: style.color, border: style.borderColor };
    }));
    check('F02 page-owned ordinary links use functional Teal', functionalTokens.every((token) => token.color === 'rgb(0, 128, 120)' && token.border === 'rgb(0, 128, 120)'), functionalTokens);

    await page.evaluate(() => window.appPlanning.setScenario('application-only'));
    const plain = page.locator('[data-grade-plain]').first();
    const before = await plain.evaluate((element) => {
      const style = getComputedStyle(element);
      return { tag: element.tagName, href: element.getAttribute('href'), tabIndex: element.tabIndex, pointerEvents: style.pointerEvents, cursor: style.cursor, color: style.color, background: style.backgroundColor, border: style.borderColor, onclick: Boolean(element.onclick) };
    });
    const box = await plain.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    const after = await plain.evaluate((element) => {
      const style = getComputedStyle(element);
      return { color: style.color, background: style.backgroundColor, border: style.borderColor };
    });
    const plainCount = await page.locator('[data-grade-plain]').count();
    check('F03 unavailable grades are neutral noninteractive labels', plainCount === 30 && before.tag === 'SPAN' && before.href === null && before.tabIndex === -1 && before.pointerEvents === 'none' && before.cursor === 'default' && !before.onclick && JSON.stringify({ color: before.color, background: before.background, border: before.border }) === JSON.stringify(after), { plainCount, before, after });

    await page.evaluate(() => window.appPlanning.setScenario('full'));
    const actions = await page.evaluate(() => Object.fromEntries([...document.querySelectorAll('[data-application-action]')].map((element) => [element.dataset.ownerPageId, element.getAttribute('href')])));
    check('F04 application actions bind explicit owner IDs to registered routes', JSON.stringify(actions) === JSON.stringify(expectedRoutes), actions);

    console.log(JSON.stringify({ result: failures.length ? 'FAIL' : 'PASS', candidate: candidate.replaceAll('\\', '/'), checks: 4, failures }, null, 2));
    process.exitCode = failures.length ? 1 : 0;
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error.stack || error.message); process.exit(1); });
