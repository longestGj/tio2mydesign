const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const dir = __dirname;
const source = path.join(dir, 'application-planning.html');
const output = path.join(dir, 'runtime-observations.json');

if (!fs.existsSync(source)) {
  throw new Error(`Expected RED: missing Gate 3 source ${source}`);
}

const expected = {
  modules: ['M1-HERO', 'M2-APPLICATION_PATHS', 'M3-EVALUATION_GUIDE', 'M4-PROCUREMENT_PATHS', 'M5-FINAL-RFQ'],
  anchors: [
    'application-coatings',
    'application-plastics',
    'application-masterbatch',
    'application-printing-inks',
    'application-paper',
    'application-specialty-materials'
  ],
  collections: {
    'Coatings': ['M-350', 'M-510', 'M-896', 'M-996', 'M-2196', 'M-895', 'M-52', 'M-2377'],
    'Plastics': ['M-350', 'M-510', 'M-200', 'M-108', 'M-210', 'M-340', 'M-886', 'M-2377'],
    'Masterbatch': ['M-510', 'M-200', 'M-108', 'M-210', 'M-340', 'M-886', 'M-2377'],
    'Printing Inks': ['M-350', 'M-510', 'M-52', 'M-2377'],
    'Paper': ['M-350', 'M-2377'],
    'Specialty Materials': ['CR-901']
  },
  steps: [
    ['Choose your application.', 'Start with the category that matches what you make. Review more than one path if your work spans several applications.'],
    ['Compare technical information.', 'Use current technical data to compare the grades under review against your requirements.'],
    ['Validate in your own system.', 'Check the grade in your formulation and process before making a specification decision.']
  ],
  procurement: ['Products', 'Documents', 'Markets']
};

const applicationOwnerRoutes = {
  'APP-COAT': '/applications/titanium-dioxide-for-coatings/',
  'APP-PLAS': '/applications/titanium-dioxide-for-plastics/',
  'APP-MB': '/applications/titanium-dioxide-for-masterbatch/',
  'APP-INK': '/applications/titanium-dioxide-for-printing-inks/',
  'APP-PAPER': '/applications/titanium-dioxide-for-paper/'
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const report = {
    workset_id: 'APP-000-D32-G3-V0.2',
    type: 'AUTHOR_SELF_CHECK',
    source: source.replaceAll('\\', '/'),
    browser: browser.version(),
    contract: null,
    viewports: [],
    operations: []
  };

  try {
    const contractPage = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
    await contractPage.goto(pathToFileURL(source).href);
    await contractPage.evaluate(() => document.fonts.ready);
    report.contract = await contractPage.evaluate(() => ({
      modules: [...document.querySelectorAll('main [data-module]')].map((element) => element.dataset.module),
      h1: document.querySelector('h1')?.textContent.trim(),
      heroBody: document.querySelector('[data-copy="hero-body"]')?.textContent.trim(),
      anchors: [...document.querySelectorAll('[data-application-anchor]')].map((element) => element.id),
      collections: Object.fromEntries([...document.querySelectorAll('[data-collection]')].map((collection) => [
        collection.querySelector('h3').textContent.trim(),
        [...collection.querySelectorAll('[data-grade]')].map((grade) => grade.dataset.grade)
      ])),
      steps: [...document.querySelectorAll('[data-evaluation-step]')].map((step) => [
        step.querySelector('h3').textContent.trim(),
        step.querySelector('p').textContent.trim()
      ]),
      procurement: [...document.querySelectorAll('[data-procurement-card] h3')].map((element) => element.textContent.trim()),
      processRows: document.querySelectorAll('[data-process-row]').length,
      faqItems: document.querySelectorAll('[data-faq-item]').length,
      unapprovedEditorialEyebrows: ['M2-APPLICATION_PATHS', 'M3-EVALUATION_GUIDE', 'M4-PROCUREMENT_PATHS', 'M5-FINAL-RFQ']
        .flatMap((module) => [...document.querySelectorAll(`[data-module="${module}"] .eyebrow`)].map((element) => element.textContent.trim())),
      applicationOwnerRoutes: Object.fromEntries([...document.querySelectorAll('[data-application-action]')]
        .map((element) => [element.dataset.ownerPageId, element.getAttribute('href')])),
      finalHeading: document.querySelector('[data-module="M5-FINAL-RFQ"] h2')?.textContent.trim(),
      visibleInternalIdentity: /\b(?:APP-000|GRADE-[A-Z0-9-]+|GATE\s*[0-9]|03开发)\b/i.test(document.body.innerText),
      buyerCurrent: /\bCURRENT\b/.test(document.body.innerText),
      currentDesktop: [...document.querySelectorAll('.desktopNav [aria-current="page"]')].map((element) => element.textContent.trim()),
      currentMobile: [...document.querySelectorAll('.mobileNav [aria-current="page"]')].map((element) => element.textContent.trim())
    }));

    assert(JSON.stringify(report.contract.modules) === JSON.stringify(expected.modules), 'module order differs from approved B/C');
    assert(report.contract.h1 === 'Explore Titanium Dioxide by Application', 'H1 differs from approved B');
    assert(report.contract.heroBody === 'This hub organizes titanium dioxide grades by application across coatings, plastics, masterbatch, printing inks, paper and specialty materials. Use each collection as a starting point for technical evaluation.', 'Hero body differs from approved B');
    assert(JSON.stringify(report.contract.anchors) === JSON.stringify(expected.anchors), 'six application anchors are incomplete or reordered');
    assert(JSON.stringify(report.contract.collections) === JSON.stringify(expected.collections), 'grade relationships/counts/order differ from 8/8/7/4/2/1 approved input');
    assert(JSON.stringify(report.contract.steps) === JSON.stringify(expected.steps), 'three approved evaluation steps differ');
    assert(JSON.stringify(report.contract.procurement) === JSON.stringify(expected.procurement), 'procurement cards differ or are reordered');
    assert(report.contract.processRows === 0, 'obsolete Process directory must not be restored');
    assert(report.contract.faqItems === 0, 'obsolete FAQ module must not be restored');
    assert(report.contract.unapprovedEditorialEyebrows.length === 0, 'unapproved M2-M5 editorial eyebrows are present');
    assert(JSON.stringify(report.contract.applicationOwnerRoutes) === JSON.stringify(applicationOwnerRoutes), 'application actions do not expose their approved owner Page ID routes');
    assert(report.contract.finalHeading === 'Share Your Application Requirements', 'final RFQ heading differs');
    assert(!report.contract.visibleInternalIdentity, 'buyer-visible internal identity leaked');
    assert(!report.contract.buyerCurrent, 'buyer-visible CURRENT leaked');
    assert(JSON.stringify(report.contract.currentDesktop) === JSON.stringify(['Applications']), 'desktop current navigation is not Applications only');
    assert(JSON.stringify(report.contract.currentMobile) === JSON.stringify(['Applications']), 'mobile current navigation is not Applications only');

    const scenarioMetrics = async (name) => {
      await contractPage.evaluate((scenario) => window.appPlanning.setScenario(scenario), name);
      return contractPage.evaluate(() => ({
        scenario: window.appPlanning.getScenario(),
        applicationActions: [...document.querySelectorAll('[data-application-action]')].filter((element) => !element.hidden).length,
        gradeLinks: [...document.querySelectorAll('[data-grade-link]')].filter((element) => !element.hidden).length,
        plainGrades: [...document.querySelectorAll('[data-grade-plain]')].filter((element) => !element.hidden).length,
        procurementCards: [...document.querySelectorAll('[data-procurement-card]')].filter((element) => !element.hidden).length,
        bodyRfq: [...document.querySelectorAll('[data-body-rfq]')].filter((element) => !element.hidden).length,
        procurementHidden: document.querySelector('[data-module="M4-PROCUREMENT_PATHS"]').hidden,
        finalHidden: document.querySelector('[data-module="M5-FINAL-RFQ"]').hidden,
        secondSentence: document.querySelector('[data-route-sentence]').textContent.trim(),
        collectionCount: document.querySelectorAll('[data-collection]').length,
        anchorCount: document.querySelectorAll('[data-application-anchor]').length
      }));
    };

    const full = await scenarioMetrics('full');
    const gradeOnly = await scenarioMetrics('grade-only');
    const applicationOnly = await scenarioMetrics('application-only');
    const none = await scenarioMetrics('none');
    report.operations.push(full, gradeOnly, applicationOnly, none);

    assert(full.applicationActions === 5 && full.gradeLinks === 30 && full.plainGrades === 0 && full.procurementCards === 3 && full.bodyRfq === 2, 'full route state is incomplete');
    assert(gradeOnly.applicationActions === 0 && gradeOnly.gradeLinks === 30 && gradeOnly.plainGrades === 0 && gradeOnly.secondSentence === 'Open a grade page for product information.', 'grade-only state is not atomic');
    assert(applicationOnly.applicationActions === 5 && applicationOnly.gradeLinks === 0 && applicationOnly.plainGrades === 30 && applicationOnly.secondSentence === 'Explore an application for guidance on what to evaluate.', 'application-only state is not atomic');
    assert(none.applicationActions === 0 && none.gradeLinks === 0 && none.plainGrades === 30 && none.procurementCards === 0 && none.bodyRfq === 0, 'no-route state retains false actions');
    assert(none.procurementHidden && none.finalHidden && none.secondSentence === '' && none.collectionCount === 6 && none.anchorCount === 6, 'no-route state removes required content or leaves empty modules');
    await contractPage.close();

    for (const width of [1440, 768, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 }, deviceScaleFactor: 1 });
      await page.goto(pathToFileURL(source).href);
      await page.evaluate(() => document.fonts.ready);
      const metrics = await page.evaluate(() => {
        const visible = (element) => {
          const rect = element.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0 && !element.closest('[hidden]');
        };
        const range = document.createRange();
        range.selectNodeContents(document.querySelector('h1'));
        return {
          width: innerWidth,
          pageHeight: document.documentElement.scrollHeight,
          overflow: document.documentElement.scrollWidth - innerWidth,
          h1Font: getComputedStyle(document.querySelector('h1')).fontSize,
          h1Weight: getComputedStyle(document.querySelector('h1')).fontWeight,
          h1Lines: new Set([...range.getClientRects()].map((rect) => Math.round(rect.y))).size,
          fontLoaded: document.fonts.check('16px Inter'),
          brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
        functionalTeal: ['.breadcrumb a', '.heroLinks a', '[data-grade-link]'].flatMap((selector) => [...document.querySelectorAll(selector)].map((element) => {
          const style = getComputedStyle(element);
          return { selector, color: style.color, borderColor: style.borderTopColor };
        })),
        smallTargets: [...document.querySelectorAll('a,button')]
            .filter(visible)
            .filter((element) => !element.classList.contains('skip'))
            .map((element) => ({ text: element.textContent.trim(), width: element.getBoundingClientRect().width, height: element.getBoundingClientRect().height }))
            .filter((target) => target.width < 44 || target.height < 44)
        };
      });
      report.viewports.push(metrics);
      const expectedFont = width === 1440 ? '56px' : width === 768 ? '44px' : '36px';
      assert(metrics.overflow === 0, `${width}px has horizontal overflow`);
      assert(metrics.h1Font === expectedFont && metrics.h1Weight === '700' && metrics.h1Lines <= 3, `${width}px H1 token/line contract failed`);
      assert(metrics.fontLoaded && metrics.brokenImages.length === 0 && metrics.smallTargets.length === 0, `${width}px asset or target-size contract failed`);
      assert(metrics.functionalTeal.length > 0 && metrics.functionalTeal.every((item) => item.color === 'rgb(0, 128, 120)' && item.borderColor === 'rgb(0, 128, 120)'), `${width}px page-owned functional links lack Teal #008078 treatment`);

      await page.evaluate(() => window.appPlanning.setScenario('none'));
      assert(await page.locator('[data-collection]').count() === 6, `${width}px no-route state lost application content`);
      const plainState = await page.evaluate(() => [...document.querySelectorAll('[data-grade-plain]')].map((element) => {
        const style = getComputedStyle(element);
        return {
          tag: element.tagName,
          href: element.getAttribute('href'),
          tabIndex: element.tabIndex,
          pointerEvents: style.pointerEvents,
          cursor: style.cursor,
          border: style.borderTopWidth,
          hasHandler: typeof element.onclick === 'function'
        };
      }));
      assert(plainState.length === 30 && plainState.every((item) => item.tag === 'SPAN' && item.href === null && item.tabIndex === -1 && item.pointerEvents === 'none' && item.cursor === 'default' && item.border === '0px' && !item.hasHandler), `${width}px unavailable grades are not non-interactive neutral plain labels`);
      await page.reload();

      if (width < 1101) {
        await page.locator('.menuButton').focus();
        await page.keyboard.press('Enter');
        const opened = await page.evaluate(() => ({
          expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
          firstFocus: document.activeElement.textContent.trim(),
          mainInert: document.querySelector('main').inert,
          locked: document.body.style.overflow
        }));
        report.operations.push({ width, menu: 'opened', ...opened });
        assert(opened.expanded === 'true' && opened.firstFocus === 'Home' && opened.mainInert && opened.locked === 'hidden', `${width}px menu open contract failed`);
        await page.keyboard.press('Escape');
        const closed = await page.evaluate(() => ({
          expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
          focus: document.activeElement.className,
          mainInert: document.querySelector('main').inert,
          hidden: document.querySelector('.mobileNav').hidden
        }));
        report.operations.push({ width, menu: 'escape', ...closed });
        assert(closed.expanded === 'false' && closed.focus.includes('menuButton') && !closed.mainInert && closed.hidden, `${width}px menu close/focus-return contract failed`);

        await page.locator('.menuButton').click();
        await page.locator('.mobileNav a').first().evaluate((element) => element.addEventListener('click', (event) => event.preventDefault(), { once: true }));
        await page.locator('.mobileNav a').first().click();
        const linkClosed = await page.evaluate(() => ({
          expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
          mainInert: document.querySelector('main').inert,
          hidden: document.querySelector('.mobileNav').hidden
        }));
        report.operations.push({ width, menu: 'link-close', ...linkClosed });
        assert(linkClosed.expanded === 'false' && !linkClosed.mainInert && linkClosed.hidden, `${width}px menu link-close contract failed`);

        await page.locator('.menuButton').click();
        await page.setViewportSize({ width: 1200, height: 1000 });
        await page.waitForFunction(() => document.querySelector('.mobileNav').hidden);
        const resizedClosed = await page.evaluate(() => ({
          expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'),
          mainInert: document.querySelector('main').inert,
          hidden: document.querySelector('.mobileNav').hidden,
          locked: document.body.style.overflow
        }));
        report.operations.push({ width, menu: 'desktop-resize-close', ...resizedClosed });
        assert(resizedClosed.expanded === 'false' && !resizedClosed.mainInert && resizedClosed.hidden && resizedClosed.locked === '', `${width}px menu resize-close contract failed`);
      }

      await page.locator('#cookie-trigger').click();
      const cookieOpen = await page.evaluate(() => ({
        open: document.querySelector('.cookie-layer').open,
        focus: document.activeElement.textContent.trim()
      }));
      assert(cookieOpen.open && cookieOpen.focus === 'Close', `${width}px cookie open/focus contract failed`);
      await page.keyboard.press('Shift+Tab');
      const wrapped = await page.evaluate(() => document.activeElement.textContent.trim());
      assert(wrapped === 'Read Cookie Policy', `${width}px cookie backward focus wrap failed`);
      await page.keyboard.press('Escape');
      const cookieClose = await page.evaluate(() => ({
        open: document.querySelector('.cookie-layer').open,
        focus: document.activeElement.id
      }));
      assert(!cookieClose.open && cookieClose.focus === 'cookie-trigger', `${width}px cookie close/focus-return failed`);
      report.operations.push({ width, cookie: 'pass' });
      await page.close();
    }

    const noScriptContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 1000 }, deviceScaleFactor: 1 });
    const noScriptPage = await noScriptContext.newPage();
    await noScriptPage.goto(pathToFileURL(source).href);
    const noScript = await noScriptPage.evaluate(() => ({
      collections: document.querySelectorAll('[data-collection]').length,
      gradeLinks: [...document.querySelectorAll('[data-grade-link]')].filter((element) => !element.hidden).length,
      steps: document.querySelectorAll('[data-evaluation-step]').length,
      procurement: [...document.querySelectorAll('[data-procurement-card]')].filter((element) => !element.hidden).length,
      finalVisible: !document.querySelector('[data-module="M5-FINAL-RFQ"]').hidden,
      overflow: document.documentElement.scrollWidth - innerWidth
    }));
    report.operations.push({ width: 390, noScript });
    assert(noScript.collections === 6 && noScript.gradeLinks === 30 && noScript.steps === 3 && noScript.procurement === 3 && noScript.finalVisible && noScript.overflow === 0, '390px no-script core content contract failed');
    await noScriptContext.close();

    fs.writeFileSync(output, JSON.stringify(report, null, 2));
    console.log(JSON.stringify({ result: 'PASS', workset: report.workset_id, viewports: report.viewports.length, routeStates: 4, modules: report.contract.modules.length }, null, 2));
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
