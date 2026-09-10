const { chromium, firefox } = require('D:/16Wordpress_nextjs/.worktrees/app000-gate8/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');

const baseUrl = 'http://127.0.0.1:4391';
const out = __dirname;
const viewports = [
  { name: 'desktop-1440', width: 1440, height: 1000 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
];

async function pageFacts(page) {
  return page.evaluate(() => ({
    url: location.href,
    title: document.title,
    lang: document.documentElement.lang,
    h1: [...document.querySelectorAll('h1')].map((node) => node.textContent.trim()),
    h2: [...document.querySelectorAll('main h2')].map((node) => node.textContent.trim()),
    canonical: document.querySelector('link[rel="canonical"]')?.href ?? null,
    robots: document.querySelector('meta[name="robots"]')?.content ?? null,
    description: document.querySelector('meta[name="description"]')?.content ?? null,
    og: Object.fromEntries([...document.querySelectorAll('meta[property^="og:"]')].map((node) => [node.getAttribute('property'), node.getAttribute('content')])),
    schemas: [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => JSON.parse(node.textContent)),
    moduleOrder: [...document.querySelectorAll('main [data-module]')].map((node) => node.getAttribute('data-module')),
    gradeOccurrences: document.querySelectorAll('[data-grade-occurrence]').length,
    gradeLinks: document.querySelectorAll('[data-grade-occurrence] a').length,
    applicationActions: document.querySelectorAll('[data-application-action]').length,
    applicationGroups: [...document.querySelectorAll('main article[id^="application-"]')].map((article) => ({
      id: article.id,
      heading: article.querySelector('h3')?.textContent.trim() ?? null,
      scope: article.querySelector('.scope p')?.textContent.trim() ?? article.querySelector('h3 + p')?.textContent.trim() ?? null,
      gradeLabel: article.querySelector('summary')?.textContent.trim() ?? null,
      grades: [...article.querySelectorAll('[data-grade-occurrence]')].map((item) => ({
        edgeId: item.getAttribute('data-grade-occurrence'),
        label: item.textContent.trim(),
        state: item.querySelector('[data-grade-state]')?.getAttribute('data-grade-state') ?? null,
        href: item.querySelector('a')?.getAttribute('href') ?? null,
      })),
      applicationAction: article.querySelector('[data-application-action]')?.getAttribute('href') ?? null,
    })),
    supportActions: [...document.querySelectorAll('[data-support-action]')].map((node) => ({ id: node.getAttribute('data-support-action'), href: node.getAttribute('href'), text: node.textContent.trim() })),
    internalAttributes: [...document.querySelectorAll('[data-site-id],[data-site-scope],[data-source-page],[data-grade-occurrence],[data-support-action],[data-application-action]')].map((node) => ({
      tag: node.tagName,
      siteId: node.getAttribute('data-site-id'),
      siteScope: node.getAttribute('data-site-scope'),
      sourcePage: node.getAttribute('data-source-page'),
      gradeOccurrence: node.getAttribute('data-grade-occurrence'),
      supportAction: node.getAttribute('data-support-action'),
      applicationAction: node.getAttribute('data-application-action'),
    })),
    detailStates: [...document.querySelectorAll('main details')].map((node) => ({ open: node.open, label: node.querySelector('summary')?.textContent.trim() })),
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    publicInternalMarkers: {
      dataSiteScope: document.querySelectorAll('[data-site-scope]').length,
      dataSiteId: document.querySelectorAll('[data-site-id]').length,
      dataSourcePage: document.querySelectorAll('[data-source-page]').length,
      app000TextNodes: [...document.querySelectorAll('body *')].filter((node) => node.children.length === 0 && /APP-000/.test(node.textContent || '')).length,
    },
    controls: [...document.querySelectorAll('a,button,summary')].map((node) => {
      const rect = node.getBoundingClientRect();
      return { tag: node.tagName, text: (node.getAttribute('aria-label') || node.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80), width: rect.width, height: rect.height };
    }),
  }));
}

(async () => {
  const observations = { checkedAt: new Date().toISOString(), baseUrl, browsers: {} };
  for (const browserType of [chromium, firefox]) {
    const browser = await browserType.launch({ headless: true });
    const browserName = browserType.name();
    observations.browsers[browserName] = [];
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: 'reduce' });
      const page = await context.newPage();
      const response = await page.goto(`${baseUrl}/applications/`, { waitUntil: 'networkidle' });
      const facts = await pageFacts(page);
      const run = { viewport, status: response?.status(), facts };

      if (browserName === 'chromium') {
        await page.screenshot({ path: path.join(out, `${viewport.name}.png`), fullPage: true, animations: 'disabled' });
      }

      if (viewport.name === 'mobile-390') {
        const firstDetails = page.locator('main details').first();
        run.firstDisclosureBefore = await firstDetails.getAttribute('open');
        await firstDetails.locator('summary').click();
        run.firstDisclosureAfterPointer = await firstDetails.getAttribute('open');
        await firstDetails.locator('summary').press('Enter');
        run.firstDisclosureAfterKeyboard = await firstDetails.getAttribute('open');

        await page.getByRole('link', { name: 'Coatings ↓' }).click();
        run.anchor = await page.evaluate(() => ({ hash: location.hash, top: document.querySelector('#application-coatings')?.getBoundingClientRect().top ?? null }));

        await page.getByRole('button', { name: 'Open primary navigation' }).click();
        run.mobileMenu = {
          visible: await page.getByRole('dialog', { name: 'Primary navigation menu' }).isVisible(),
          links: await page.getByRole('dialog', { name: 'Primary navigation menu' }).getByRole('link').allTextContents(),
        };
        await page.screenshot({ path: path.join(out, `${viewport.name}-menu.png`), fullPage: true, animations: 'disabled' });
        await page.getByRole('button', { name: 'Close primary navigation menu' }).click();

        await page.getByRole('button', { name: 'Cookie Settings' }).click();
        const dialog = page.getByRole('dialog');
        run.cookieDialog = { visible: await dialog.isVisible(), text: (await dialog.innerText()).replace(/\s+/g, ' ').slice(0, 500) };
        await page.screenshot({ path: path.join(out, `${viewport.name}-cookie.png`), fullPage: true, animations: 'disabled' });
      }

      if (viewport.name === 'desktop-1440') {
        const bodyRfq = page.locator('main').getByRole('link', { name: 'Request a Quote' }).first();
        await bodyRfq.focus();
        run.focus = await bodyRfq.evaluate((node) => {
          const style = getComputedStyle(node);
          const rect = node.getBoundingClientRect();
          return { active: document.activeElement === node, outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth, outlineColor: style.outlineColor, width: rect.width, height: rect.height };
        });
        await bodyRfq.click();
        await page.waitForURL('**/request-a-quote');
        run.rfq = await page.evaluate(() => ({
          url: location.href,
          search: location.search,
          historyState: history.state,
          sessionSource: sessionStorage.getItem('tio2MyRfqSourcePageId'),
          grade: document.querySelector('#rfq-grade_id')?.value,
          application: document.querySelector('#rfq-application_id')?.value,
        }));
        await page.goBack({ waitUntil: 'networkidle' });
        run.back = { url: page.url(), h1: await page.locator('h1').innerText() };
      }

      observations.browsers[browserName].push(run);
      await context.close();
    }

    const noScript = await browser.newContext({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
    const noScriptPage = await noScript.newPage();
    const response = await noScriptPage.goto(`${baseUrl}/applications/`, { waitUntil: 'domcontentloaded' });
    observations.browsers[browserName].push({
      viewport: { name: 'mobile-390-noscript', width: 390, height: 844 },
      status: response?.status(),
      facts: await pageFacts(noScriptPage),
      visibleGradeLinks: await noScriptPage.locator('[data-grade-occurrence] a:visible').count(),
      overflowDiagnostic: await noScriptPage.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        widest: [...document.querySelectorAll('body *')]
          .map((node) => {
            const rect = node.getBoundingClientRect();
            return { tag: node.tagName, text: (node.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100), left: rect.left, right: rect.right, width: rect.width, display: getComputedStyle(node).display };
          })
          .filter((item) => item.right > document.documentElement.clientWidth + 1 || item.left < -1)
          .sort((a, b) => b.right - a.right)
          .slice(0, 20),
      })),
    });
    await noScript.close();
    await browser.close();
  }
  fs.writeFileSync(path.join(out, 'independent-runtime-observations.json'), `${JSON.stringify(observations, null, 2)}\n`);
})().catch((error) => {
  fs.writeFileSync(path.join(out, 'collector-error.txt'), `${error.stack || error}\n`);
  process.exitCode = 1;
});
