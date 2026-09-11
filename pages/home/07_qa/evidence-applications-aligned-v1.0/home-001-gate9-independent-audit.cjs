const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { createRequire } = require('node:module');
const d16Require = createRequire('D:\\16Wordpress_nextjs\\.worktrees\\home-001-app-align-gate8\\package.json');
const { chromium } = d16Require('playwright');
const { AxeBuilder } = d16Require('@axe-core/playwright');

const baseUrl = 'http://127.0.0.1:3291/';
const outDir = __dirname;
const widths = [1440, 1024, 768, 390, 320];
const expectedModules = [
  'hero',
  'start-here',
  'markets',
  'products',
  'applications',
  'company',
  'documents',
  'resources',
  'page-rfq',
];
const expectedGrades = [
  'M-350', 'M-510', 'M-896', 'M-996', 'M-2196', 'M-895',
  'M-200', 'M-108', 'M-210', 'M-340', 'M-886',
  'M-52', 'M-2377', 'CR-901',
];

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').toUpperCase();
}

function isVisible(element) {
  const style = getComputedStyle(element);
  const rect = element.getBoundingClientRect();
  return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0 && rect.width > 0 && rect.height > 0;
}

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const report = {
    reviewId: 'HOME-001-G9-APP-ALIGN-01',
    collectedAt: new Date().toISOString(),
    baseUrl,
    expectedModules,
    expectedGrades,
    widths: {},
    menu: null,
    productsExpanded: null,
    seo: null,
    routes: [],
    prototypeComparison: null,
    screenshotHashes: {},
  };

  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const response = await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const screenshot = path.join(outDir, `home-001-g9-${width}.png`);
    await page.screenshot({ path: screenshot, fullPage: true, animations: 'disabled' });

    const dom = await page.evaluate(({ expectedGrades }) => {
      const visible = (element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0 && rect.width > 0 && rect.height > 0;
      };
      const rect = (element) => {
        if (!element) return null;
        const r = element.getBoundingClientRect();
        return { x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom };
      };
      const modules = [...document.querySelectorAll('main [data-module]')];
      const moduleData = modules.map((element) => {
        const style = getComputedStyle(element);
        const directCandidates = [...element.children].filter((child) => visible(child));
        const grids = [...element.querySelectorAll('*')]
          .filter((child) => {
            const display = getComputedStyle(child).display;
            return display === 'grid' || display === 'flex';
          })
          .slice(0, 8)
          .map((child) => ({
            tag: child.tagName,
            className: String(child.className),
            display: getComputedStyle(child).display,
            gridTemplateColumns: getComputedStyle(child).gridTemplateColumns,
            flexDirection: getComputedStyle(child).flexDirection,
            childCount: [...child.children].filter((candidate) => visible(candidate)).length,
            bounds: rect(child),
          }));
        return {
          module: element.dataset.module,
          visible: visible(element),
          display: style.display,
          bounds: rect(element),
          heading: element.querySelector('h1,h2,h3')?.textContent?.trim() || null,
          directVisibleChildren: directCandidates.length,
          grids,
        };
      });
      const targetFailures = [...document.querySelectorAll('a,button')]
        .filter((element) => visible(element))
        .map((element) => ({
          tag: element.tagName,
          text: (element.getAttribute('aria-label') || element.textContent || '').trim().replace(/\s+/g, ' '),
          href: element instanceof HTMLAnchorElement ? element.getAttribute('href') : null,
          bounds: rect(element),
        }))
        .filter((item) => item.bounds.width < 44 || item.bounds.height < 44);
      const overflowElements = [...document.querySelectorAll('body *')]
        .filter((element) => visible(element))
        .map((element) => ({
          tag: element.tagName,
          text: (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80),
          className: String(element.className),
          bounds: rect(element),
        }))
        .filter((item) => item.bounds.left < -1 || item.bounds.right > document.documentElement.clientWidth + 1)
        .slice(0, 30);
      const gradeVisibility = Object.fromEntries(expectedGrades.map((grade) => [
        grade,
        [...document.querySelectorAll('main *')].some((element) => element.children.length === 0 && element.textContent.trim() === grade && visible(element)),
      ]));
      const hero = document.querySelector('[data-module="hero"]');
      const heroImage = hero?.querySelector('img');
      const header = document.querySelector('header');
      const pageRfq = document.querySelector('[data-module="page-rfq"]');
      const navCurrent = [...document.querySelectorAll('[aria-current="page"]')]
        .filter((element) => visible(element))
        .map((element) => ({ text: element.textContent.trim(), tag: element.tagName }));
      const visibleText = document.body.innerText;
      return {
        viewport: { width: innerWidth, height: innerHeight, dpr: devicePixelRatio },
        statusMarker: document.documentElement.dataset.siteScope || null,
        documentWidth: { client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth },
        bodyWidth: { client: document.body.clientWidth, scroll: document.body.scrollWidth },
        moduleOrder: modules.map((element) => element.dataset.module),
        moduleData,
        h1: [...document.querySelectorAll('h1')].map((element) => element.textContent.trim()),
        header: { bounds: rect(header), visible: header ? visible(header) : false },
        pageRfq: { visible: pageRfq ? visible(pageRfq) : false, bounds: rect(pageRfq), ariaHidden: pageRfq?.getAttribute('aria-hidden') || null },
        heroImage: heroImage ? { src: heroImage.currentSrc || heroImage.src, alt: heroImage.alt, visible: visible(heroImage), bounds: rect(heroImage) } : null,
        startHereImmediatelyAfterHero: modules[0]?.dataset.module === 'hero' && modules[1]?.dataset.module === 'start-here',
        navCurrent,
        visibleCurrentWordCount: (visibleText.match(/\bCURRENT\b/gi) || []).length,
        visibleGradeCount: Object.values(gradeVisibility).filter(Boolean).length,
        gradeVisibility,
        productToggleCount: [...document.querySelectorAll('button[aria-controls][aria-expanded]')].filter((element) => visible(element)).length,
        targetFailures,
        overflowElements,
      };
    }, { expectedGrades });

    const axe = await new AxeBuilder({ page }).analyze();
    const seriousCritical = axe.violations.filter((item) => item.impact === 'serious' || item.impact === 'critical');
    report.widths[String(width)] = {
      httpStatus: response?.status() || null,
      dom,
      axe: {
        violationCount: axe.violations.length,
        seriousCriticalCount: seriousCritical.length,
        seriousCritical: seriousCritical.map((item) => ({ id: item.id, impact: item.impact, nodes: item.nodes.length })),
      },
      screenshot: path.basename(screenshot),
    };
    report.screenshotHashes[path.basename(screenshot)] = sha256(screenshot);

    if (width === 1440) {
      report.seo = await page.evaluate(() => {
        const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
        const parsed = scripts.map((script) => {
          try { return { ok: true, value: JSON.parse(script.textContent) }; }
          catch (error) { return { ok: false, error: String(error) }; }
        });
        const graph = parsed.flatMap((item) => item.ok && Array.isArray(item.value?.['@graph']) ? item.value['@graph'] : []);
        const ids = graph.map((node) => node['@id']);
        const forbidden = ['offers', 'aggregateRating', 'review', 'itemListElement', 'countryOfOrigin', 'sku', 'gtin', 'mpn', 'availability', 'price', 'priceCurrency'];
        const serialized = JSON.stringify(parsed.map((item) => item.value || null));
        return {
          title: document.title,
          description: document.querySelector('meta[name="description"]')?.content || null,
          canonical: [...document.querySelectorAll('link[rel="canonical"]')].map((element) => element.href),
          robots: document.querySelector('meta[name="robots"]')?.content || null,
          lang: document.documentElement.lang,
          jsonLdScriptCount: scripts.length,
          jsonLdParse: parsed.map((item) => item.ok),
          graphNodeCount: graph.length,
          graphIds: ids,
          graphTypes: graph.map((node) => ({ id: node['@id'], type: node['@type'] })),
          unresolvedReferences: [...serialized.matchAll(/https:\/\/tio2malaysia\.com\/#(?:website|webpage|organization|brand|titanium-dioxide)/g)]
            .map((match) => match[0])
            .filter((value) => !ids.includes(value)),
          manufacturerOwners: graph.filter((node) => Object.hasOwn(node, 'manufacturer')).map((node) => ({ id: node['@id'], type: node['@type'] })),
          organizationBrandPresent: graph.some((node) => node['@type'] === 'Organization' && Object.hasOwn(node, 'brand')),
          forbiddenFieldsPresent: forbidden.filter((field) => new RegExp(`"${field}"`, 'i').test(serialized)),
          visibleManufacturerSentence: document.body.innerText.includes('TiO₂ Malaysia is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD., a titanium dioxide manufacturer.'),
          internalGovernanceTerms: ['page_id', 'NOT_LIVE', 'DO_NOT_RENDER', 'evidence gate', 'DRAFT_FOR', 'PROJECT_CONTROL_REVIEW']
            .filter((term) => document.body.innerText.toLowerCase().includes(term.toLowerCase())),
        };
      });
      const hrefs = await page.locator('a[href]').evaluateAll((elements) => [...new Set(elements.map((element) => element.href))]);
      for (const href of hrefs.filter((href) => href.startsWith('http://127.0.0.1:3291/'))) {
        const routeResponse = await page.request.get(href, { failOnStatusCode: false, maxRedirects: 5 });
        report.routes.push({ href, status: routeResponse.status(), finalUrl: routeResponse.url() });
      }
    }
    await context.close();
  }

  {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    const menuButton = page.getByRole('button', { name: /Open primary navigation/i });
    await menuButton.focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(100);
    const menuScreenshot = path.join(outDir, 'home-001-g9-390-menu-open.png');
    await page.screenshot({ path: menuScreenshot, animations: 'disabled' });
    const openState = await page.evaluate(() => {
      const visible = (element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0 && rect.width > 0 && rect.height > 0;
      };
      const mobileNav = [...document.querySelectorAll('nav')].find((element) => element.getAttribute('aria-label') === 'Mobile navigation');
      const menuToggle = document.querySelector('button[aria-controls="malaysia-mobile-menu"]');
      const dialog = document.querySelector('dialog[aria-label="Primary navigation menu"]');
      return {
        expanded: menuToggle?.getAttribute('aria-expanded') || null,
        activeElement: document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim() || null,
        menuVisible: mobileNav ? visible(mobileNav) : false,
        navOrder: mobileNav ? [...mobileNav.querySelectorAll('a')].filter((element) => visible(element)).map((element) => element.textContent.trim()) : [],
        bodyOverflow: getComputedStyle(document.body).overflow,
        mainAriaHidden: document.querySelector('main')?.getAttribute('aria-hidden') || null,
        mainInert: document.querySelector('main')?.inert || false,
        dialogOpen: dialog?.open || false,
        dialogAriaModal: dialog?.getAttribute('aria-modal') || null,
        backdropBackground: dialog ? getComputedStyle(dialog, '::backdrop').backgroundColor : null,
        current: mobileNav ? [...mobileNav.querySelectorAll('[aria-current="page"]')].filter((element) => visible(element)).map((element) => element.textContent.trim()) : [],
        visibleCurrentWordCount: (document.body.innerText.match(/\bCURRENT\b/gi) || []).length,
      };
    });
    const tabSequence = [];
    for (let index = 0; index < 12; index += 1) {
      await page.keyboard.press('Tab');
      tabSequence.push(await page.evaluate(() => ({
        activeElement: document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim() || null,
        activeInsideMobileMenu: Boolean(document.activeElement?.closest('#malaysia-mobile-menu')),
      })));
    }
    await page.keyboard.press('Shift+Tab');
    const reverseTabState = await page.evaluate(() => ({
      activeElement: document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim() || null,
      activeInsideMobileMenu: Boolean(document.activeElement?.closest('#malaysia-mobile-menu')),
    }));
    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);
    const closeState = await page.evaluate(() => ({
      expanded: document.querySelector('button[aria-label="Open primary navigation"]')?.getAttribute('aria-expanded') || null,
      activeElement: document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim() || null,
      bodyOverflow: getComputedStyle(document.body).overflow,
    }));
    report.menu = { openState, tabSequence, reverseTabState, closeState, screenshot: path.basename(menuScreenshot) };
    report.screenshotHashes[path.basename(menuScreenshot)] = sha256(menuScreenshot);

    const productButtons = page.locator('[data-module="products"] button[aria-expanded]');
    const buttonCount = await productButtons.count();
    const focusStyles = [];
    for (let index = 0; index < buttonCount; index += 1) {
      await productButtons.nth(index).focus();
      focusStyles.push(await productButtons.nth(index).evaluate((button) => {
        const style = getComputedStyle(button);
        const rect = button.getBoundingClientRect();
        return {
          ariaLabel: button.getAttribute('aria-label'),
          outlineStyle: style.outlineStyle,
          outlineWidth: style.outlineWidth,
          outlineColor: style.outlineColor,
          boxShadow: style.boxShadow,
          bounds: { width: rect.width, height: rect.height },
        };
      }));
      await page.keyboard.press('Enter');
    }
    const expandedScreenshot = path.join(outDir, 'home-001-g9-390-products-expanded.png');
    await page.screenshot({ path: expandedScreenshot, fullPage: true, animations: 'disabled' });
    report.productsExpanded = await page.evaluate(({ expectedGrades }) => {
      const visible = (element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) !== 0 && rect.width > 0 && rect.height > 0;
      };
      const buttons = [...document.querySelectorAll('[data-module="products"] button[aria-expanded]')];
      const visibleGrades = expectedGrades.filter((grade) => [...document.querySelectorAll('[data-module="products"] *')]
        .some((element) => element.children.length === 0 && element.textContent.trim() === grade && visible(element)));
      return {
        buttonCount: buttons.length,
        expandedValues: buttons.map((button) => button.getAttribute('aria-expanded')),
        controlsResolve: buttons.map((button) => Boolean(document.getElementById(button.getAttribute('aria-controls')))),
        visibleGrades,
        uniqueVisibleGrades: [...new Set(visibleGrades)],
        documentWidth: { client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth },
      };
    }, { expectedGrades });
    report.productsExpanded.focusStyles = focusStyles;
    report.productsExpanded.screenshot = path.basename(expandedScreenshot);
    report.screenshotHashes[path.basename(expandedScreenshot)] = sha256(expandedScreenshot);
    await context.close();
  }

  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    const runtimePage = await context.newPage();
    const prototypePage = await context.newPage();
    await runtimePage.goto(baseUrl, { waitUntil: 'networkidle' });
    const prototypePath = 'D:/23MySec/pages/home/04_planning/visual-designs/home-applications-aligned-v1.1/homepage-applications-aligned-preview-v1.1.html';
    await prototypePage.goto(`file:///${prototypePath}`.replace(/ /g, '%20'), { waitUntil: 'load' });
    const extract = async (page) => page.evaluate(() => {
      const normalize = (value) => value.replace(/\s+/g, ' ').trim();
      const main = document.querySelector('main');
      return {
        text: normalize(main?.innerText || ''),
        hrefs: [...main.querySelectorAll('a[href]')]
          .map((anchor) => new URL(anchor.getAttribute('href'), 'https://tio2malaysia.com/').pathname)
          .sort(),
        modules: [...main.querySelectorAll('[data-module]')].map((element) => element.dataset.module),
      };
    });
    const runtimeExtract = await extract(runtimePage);
    const prototypeExtract = await extract(prototypePage);
    const firstDifference = (() => {
      const max = Math.max(runtimeExtract.text.length, prototypeExtract.text.length);
      for (let index = 0; index < max; index += 1) {
        if (runtimeExtract.text[index] !== prototypeExtract.text[index]) {
          return {
            index,
            runtime: runtimeExtract.text.slice(Math.max(0, index - 80), index + 160),
            prototype: prototypeExtract.text.slice(Math.max(0, index - 80), index + 160),
          };
        }
      }
      return null;
    })();
    report.prototypeComparison = {
      prototypePath,
      runtimeTextSha256: crypto.createHash('sha256').update(runtimeExtract.text).digest('hex').toUpperCase(),
      prototypeTextSha256: crypto.createHash('sha256').update(prototypeExtract.text).digest('hex').toUpperCase(),
      textEqual: runtimeExtract.text === prototypeExtract.text,
      runtimeHrefs: runtimeExtract.hrefs,
      prototypeHrefs: prototypeExtract.hrefs,
      hrefsEqual: JSON.stringify(runtimeExtract.hrefs) === JSON.stringify(prototypeExtract.hrefs),
      modulesEqual: JSON.stringify(runtimeExtract.modules) === JSON.stringify(prototypeExtract.modules),
      firstDifference,
    };
    await context.close();
  }

  await browser.close();
  const reportPath = path.join(outDir, 'home-001-gate9-independent-browser-audit-v1.0.json');
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  console.log(JSON.stringify({ status: 'COMPLETE', reportPath, reportSha256: sha256(reportPath), screenshots: Object.keys(report.screenshotHashes).length }, null, 2));
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
