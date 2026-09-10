import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const d16 = 'D:/16Wordpress_nextjs/.worktrees/trade4-app5-gate8';
const out = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(?:([A-Za-z]:))/, '$1'));
const require = createRequire(`${d16}/package.json`);
const { chromium } = require('@playwright/test');
const base = 'http://127.0.0.1:3226';
const graphql = 'http://127.0.0.1:8186/graphql';
const expectedBuild = '1AwBNw0A1szLVVlTyLyQU';

const env = Object.fromEntries(
  fs.readFileSync(`${d16}/wordpress/.env`, 'utf8')
    .split(/\r?\n/u)
    .filter((line) => /^[A-Z_]+=/.test(line))
    .map((line) => [line.slice(0, line.indexOf('=')), line.slice(line.indexOf('=') + 1)]),
);
const token = env.WORDPRESS_EDITORIAL_API_TOKEN;
assert.ok(token, 'CMS editorial token is unavailable');
assert.equal(fs.readFileSync(`${d16}/.next-country-editorial/BUILD_ID`, 'utf8').trim(), expectedBuild);

const cases = [
  { id: 'APP-COAT', source: '/markets/spain/', label: 'TiO2 for Coatings', target: '/applications/titanium-dioxide-for-coatings/' },
  { id: 'APP-PLAS', source: '/markets/spain/', label: 'TiO2 for Plastics', target: '/applications/titanium-dioxide-for-plastics/' },
  { id: 'APP-MB', source: '/markets/spain/', label: 'TiO2 for Masterbatch', target: '/applications/titanium-dioxide-for-masterbatch/' },
  { id: 'RES-TRADE-EU', source: '/markets/spain/', label: 'EU TiO2 Trade Update', target: '/resources/eu-titanium-dioxide-anti-dumping-duty/', returnPath: '/markets/european-union/' },
  { id: 'RES-TRADE-IN', source: '/markets/india/', label: 'Review the India Titanium Dioxide Trade Update', target: '/resources/india-titanium-dioxide-anti-dumping-duty/', returnPath: '/markets/india/' },
];

async function cmsRead(pageId, siteScope = 'tio2-my') {
  const response = await fetch(graphql, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-tio2-editorial-token': token },
    body: JSON.stringify({
      query: 'query($pageId:String!,$siteScope:String!){malaysiaEditorialRecordJson(pageId:$pageId,siteScope:$siteScope)}',
      variables: { pageId, siteScope },
    }),
  });
  const body = await response.json();
  return { httpStatus: response.status, body };
}

fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const rows = [];
try {
  for (const item of cases) {
    const cmsResponse = await cmsRead(item.id);
    assert.equal(cmsResponse.httpStatus, 200);
    assert.ok(!cmsResponse.body.errors, `${item.id} CMS returned GraphQL errors`);
    const cms = JSON.parse(cmsResponse.body.data.malaysiaEditorialRecordJson);
    const contract = JSON.parse(cms.editorialContractJson);
    assert.equal(cms.recordPageId, item.id);
    assert.equal(cms.status, 'publish');
    assert.deepEqual(cms.siteScopes.nodes, [{ slug: 'tio2-my' }]);
    assert.equal(contract.identity.pageId, item.id);
    assert.equal(contract.identity.path, item.target);
    if (item.id.startsWith('RES-TRADE-')) {
      assert.equal(cms.freshnessControl.status, 'verified');
      assert.equal(cms.freshnessControl.eventStatus, 'no_open_trigger');
      assert.equal(cms.freshnessControl.nextReviewDue, '2026-10-07');
    }

    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const sourceResponse = await page.goto(base + item.source, { waitUntil: 'networkidle' });
    assert.equal(sourceResponse.status(), 200);
    const anchor = page.locator(`main a[href="${item.target}"]`).first();
    assert.equal(await anchor.count(), 1);
    assert.equal(await anchor.getAttribute('href'), item.target);
    assert.equal((await anchor.textContent()).replace(/\s+/gu, ' ').trim(), item.label);
    await Promise.all([page.waitForURL(base + item.target), anchor.click()]);
    await page.waitForLoadState('networkidle');

    const targetResponse = await fetch(page.url());
    const targetHtml = await targetResponse.text();
    assert.equal(targetResponse.status, 200);
    assert.ok(targetHtml.includes(expectedBuild));
    assert.equal(await page.locator('[data-editorial-page]').getAttribute('data-editorial-page'), item.id);
    assert.equal(await page.locator('h1').first().textContent(), contract.heading);
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), contract.seo.canonical);
    assert.match(await page.locator('meta[name="robots"]').getAttribute('content'), /noindex/u);
    await page.screenshot({ path: path.join(out, `${item.id}-independent-1440.png`), fullPage: true });

    await page.goBack({ waitUntil: 'networkidle' });
    assert.equal(page.url(), base + item.source);
    assert.equal(await page.locator(`main a[href="${item.target}"]`).count() > 0, true);

    let explicitReturn = null;
    if (item.returnPath) {
      await page.goto(base + item.target, { waitUntil: 'networkidle' });
      const returnLink = page.locator(`main a[href="${item.returnPath}"]`).first();
      assert.equal(await returnLink.count(), 1);
      await Promise.all([page.waitForURL(base + item.returnPath), returnLink.click()]);
      const returnResponse = await fetch(page.url());
      assert.equal(returnResponse.status, 200);
      explicitReturn = { path: item.returnPath, status: returnResponse.status };
    }

    const canonicalProbe = await page.goto(`${base}${item.target}?probe=canonical`, { waitUntil: 'networkidle' });
    assert.equal(canonicalProbe.status(), 200);
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), contract.seo.canonical);
    rows.push({
      pageId: item.id,
      sourcePath: item.source,
      sourceStatus: sourceResponse.status(),
      clickedLabel: item.label,
      targetPath: item.target,
      targetStatus: targetResponse.status,
      renderedPageId: item.id,
      historyBackVerified: true,
      explicitReturn,
      canonical: contract.seo.canonical,
      canonicalQueryClean: true,
      cms: {
        id: cms.id,
        recordPageId: cms.recordPageId,
        status: cms.status,
        siteScopes: cms.siteScopes.nodes.map((node) => node.slug),
        identityPageId: contract.identity.pageId,
        identityPath: contract.identity.path,
        freshnessControl: cms.freshnessControl ?? null,
      },
    });
    await page.close();
  }

  const wrongScope = await cmsRead('APP-COAT', 'site-a');
  assert.ok(wrongScope.body.errors || !wrongScope.body.data?.malaysiaEditorialRecordJson, 'wrong-scope CMS query unexpectedly returned a record');
  fs.writeFileSync(path.join(out, 'fresh-runtime-and-cms-readback.json'), JSON.stringify({
    checkedAt: new Date().toISOString(),
    reviewer: 'D23 Gate 9 independent targeted recheck',
    runtime: { base, buildId: expectedBuild, codeCommit: '4fa585bc125c7b8fa926ab66059f4fc6887877f4', evidenceCommit: '58af74dbe44b4ccaafe517d592ecae5d5ff37ef2' },
    wrongScopeRejected: true,
    findings: { 'ES-G9-F03': 'CLOSED_FOR_THIS_CANDIDATE', 'IN-G9-F01': 'CLOSED_FOR_THIS_CANDIDATE' },
    rows,
  }, null, 2) + '\n');
} finally {
  await browser.close();
}

console.log(`PASS: ${rows.length} route dependencies independently verified on ${base}, build ${expectedBuild}`);
