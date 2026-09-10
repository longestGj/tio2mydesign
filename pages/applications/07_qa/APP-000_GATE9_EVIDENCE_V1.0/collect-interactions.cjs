const { chromium, firefox } = require('D:/16Wordpress_nextjs/.worktrees/app000-gate8/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');

const base = 'http://127.0.0.1:4391';
const out = __dirname;
const paths = [
  ['Explore Applications', 'application-selector'],
  ['Coatings ↓', 'application-coatings'],
  ['Plastics ↓', 'application-plastics'],
  ['Masterbatch ↓', 'application-masterbatch'],
  ['Printing Inks ↓', 'application-printing-inks'],
  ['Paper ↓', 'application-paper'],
  ['Specialty Materials ↓', 'application-specialty-materials'],
];

async function anchorResult(page, id) {
  return page.evaluate((targetId) => {
    const node = document.getElementById(targetId);
    const rect = node?.getBoundingClientRect();
    return { url: location.href, hash: location.hash, targetId, top: rect?.top ?? null, activeTag: document.activeElement?.tagName ?? null };
  }, id);
}

(async () => {
  const result = { checkedAt: new Date().toISOString(), base, browsers: {} };
  for (const browserType of [chromium, firefox]) {
    const browser = await browserType.launch({headless: true});
    const browserName = browserType.name();
    result.browsers[browserName] = {anchors: [], disclosures: [], navigation: {}};

    for (const [label, id] of paths) {
      for (const mode of ['pointer', 'keyboard', 'direct']) {
        const context = await browser.newContext({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
        const page = await context.newPage();
        if (mode === 'direct') {
          await page.goto(`${base}/applications/#${id}`, {waitUntil: 'networkidle'});
        } else {
          await page.goto(`${base}/applications/`, {waitUntil: 'networkidle'});
          const link = page.getByRole('link', {name: label, exact: true});
          if (mode === 'pointer') await link.click();
          else { await link.focus(); await link.press('Enter'); }
          await page.waitForURL(`**#${id}`);
        }
        result.browsers[browserName].anchors.push({label, mode, ...(await anchorResult(page, id))});
        await context.close();
      }
    }

    {
      const context = await browser.newContext({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
      const page = await context.newPage();
      await page.goto(`${base}/applications/`, {waitUntil: 'networkidle'});
      const details = page.locator('main details');
      const count = await details.count();
      for (let i = 0; i < count; i += 1) {
        const item = details.nth(i);
        const summary = item.locator('summary');
        const before = await item.evaluate((node) => node.open);
        await summary.click();
        const pointer = await item.evaluate((node) => node.open);
        await summary.press('Enter');
        const keyboard = await item.evaluate((node) => node.open);
        result.browsers[browserName].disclosures.push({index: i + 1, label: (await summary.innerText()).trim(), before, afterPointer: pointer, afterKeyboard: keyboard});
      }

      const menuTrigger = page.getByRole('button', {name: 'Open primary navigation'});
      await menuTrigger.focus();
      await menuTrigger.press('Enter');
      const menuDialog = page.getByRole('dialog', {name: 'Primary navigation menu'});
      const menuBeforeEscape = {visible: await menuDialog.isVisible(), active: await page.evaluate(() => document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim())};
      await page.keyboard.press('Escape');
      const menuAfterEscape = {visible: await menuDialog.isVisible(), returned: await menuTrigger.evaluate((node) => document.activeElement === node)};

      const cookieTrigger = page.getByRole('button', {name: 'Cookie Settings'});
      await cookieTrigger.focus();
      await cookieTrigger.press('Enter');
      const cookieDialog = page.getByRole('dialog');
      const cookieBeforeEscape = {visible: await cookieDialog.isVisible(), active: await page.evaluate(() => document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim())};
      await page.keyboard.press('Escape');
      const cookieAfterEscape = {visible: await cookieDialog.isVisible(), returned: await cookieTrigger.evaluate((node) => document.activeElement === node)};

      const grade = page.getByRole('link', {name: 'M-350', exact: true}).first();
      await grade.focus();
      await grade.press('Enter');
      await page.waitForURL('**/products/m-350');
      const gradeDestination = {url: page.url(), h1: await page.locator('h1').innerText()};
      await page.goBack({waitUntil: 'networkidle'});
      const gradeBack = {url: page.url(), h1: await page.locator('h1').innerText()};

      result.browsers[browserName].navigation = {menuBeforeEscape, menuAfterEscape, cookieBeforeEscape, cookieAfterEscape, gradeDestination, gradeBack};
      await context.close();
    }

    {
      const context = await browser.newContext({viewport: {width: 1440, height: 1000}});
      const page = await context.newPage();
      await page.goto(`${base}/applications/`, {waitUntil: 'networkidle'});
      const rfq = page.locator('main').getByRole('link', {name: 'Request a Quote', exact: true}).last();
      await rfq.focus();
      await rfq.press('Enter');
      await page.waitForURL('**/request-a-quote');
      const destination = await page.evaluate(() => ({
        url: location.href,
        search: location.search,
        source: history.state?.tio2MyRfqSourcePageId ?? null,
        grade: document.querySelector('#rfq-grade_id')?.value,
        application: document.querySelector('#rfq-application_id')?.value,
      }));
      await page.goBack({waitUntil: 'networkidle'});
      result.browsers[browserName].navigation.rfqKeyboard = {destination, back: {url: page.url(), h1: await page.locator('h1').innerText()}};
      await context.close();
    }
    await browser.close();
  }
  fs.writeFileSync(path.join(out, 'independent-interaction-observations.json'), `${JSON.stringify(result, null, 2)}\n`);
})().catch((error) => {
  fs.writeFileSync(path.join(out, 'interaction-collector-error.txt'), `${error.stack || error}\n`);
  process.exitCode = 1;
});
