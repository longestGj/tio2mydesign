const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const repo = 'C:/Users/longe/.codex/worktrees/product-000-products/32Wordpress_new';
const manifestPath = path.join(repo, '.runtime/handoff/products/gate8_evidence_manifest.json');
const mappingPath = path.join(repo, 'docs/verification/products/acceptance-mapping.json');
const readinessPath = path.join(repo, 'docs/verification/products/readiness-matrix.json');
const outputPath = path.join(__dirname, 'targeted-recheck.json');
const baseUrl = 'http://127.0.0.1:8232/products/';
const expectedImplementation = '95ed4c4c47481ef78f64fa90b95a1096ea45bfae';
const expectedEvidenceHead = '8a4e3f5cb88cc30d0aecc36955ccb3ac19b8307c';
const expectedBuild = 'wp-9fcfb835a0e8b3709924a3d05cfe0bf5173fcd4db200308e0c4edf96845b68df';
const expectedAcceptance = [
  'PRODUCT-G6-B02',
  'PRODUCT-G6-B03',
  'PRODUCT-G6-TDS-I02',
  'PRODUCT-G7-B05',
  'PRODUCT-G7-B06',
  'PRODUCT-G7-B07',
  'PRODUCT-D32-AC-CONTENT',
  'PRODUCT-D32-AC-SEO',
  'PRODUCT-D32-AC-SCHEMA-PREVIEW',
  'PRODUCT-D32-AC-MIGRATION',
  'PRODUCT-D32-AC-DOMAIN',
  'PRODUCT-D32-AC-CHROME-REGRESSION',
];
const forbidden = [
  { id: 'internal-page-id', regex: /\b(?:PRODUCT-000|GRADE-[A-Z0-9-]+|PRODUCT-PROC-(?:CL|SU)|APP-000|DOC-000|MARKET-000)\b/g },
  { id: 'routeKey-field', regex: /\brouteKey\b/g },
  { id: 'data-route-key-attribute', regex: /data-route-key/gi },
];

function git(...args) {
  return execFileSync('git', ['-C', repo, ...args], { encoding: 'utf8' }).trim();
}

function scan(label, text) {
  const matches = forbidden.map(({ id, regex }) => {
    regex.lastIndex = 0;
    const values = [...text.matchAll(regex)].map((match) => match[0]);
    return { id, count: values.length, values: [...new Set(values)] };
  });
  return { label, bytes: Buffer.byteLength(text), matches, pass: matches.every((entry) => entry.count === 0) };
}

function setDifference(left, right) {
  const rightSet = new Set(right);
  return left.filter((value) => !rightSet.has(value));
}

async function main() {
  const { chromium } = require(path.join(repo, 'node_modules/@playwright/test'));
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const mapping = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));
  const readiness = JSON.parse(fs.readFileSync(readinessPath, 'utf8'));
  const pageDeclaration = manifest.pages.find((page) => page.page_id === 'PRODUCT-000');
  const mappingIds = mapping.conditions.map((condition) => condition.id);
  const manifestIds = pageDeclaration?.acceptance_condition_ids || [];
  const mappingCompleteness = mapping.conditions.map((condition) => ({
    id: condition.id,
    hasEvidence: Array.isArray(condition.evidence) && condition.evidence.length > 0,
    hasCommands: Array.isArray(condition.commands) && condition.commands.length > 0,
    hasResult: typeof condition.result === 'string' && condition.result.trim().length > 0,
    hasBoundary: typeof condition.boundary === 'string' && condition.boundary.trim().length > 0,
  }));

  const rawResponses = [];
  for (const url of [baseUrl, `${baseUrl}?grade=M-350`]) {
    const response = await fetch(url);
    const text = await response.text();
    rawResponses.push({
      url,
      status: response.status,
      scope: response.headers.get('x-site-scope'),
      scan: scan(`raw:${url}`, text),
      html: text,
    });
  }

  const scriptUrls = [...new Set(rawResponses.flatMap(({ html, url }) =>
    [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)].map((match) => new URL(match[1], url).href)
  ))];
  const scriptScans = [];
  for (const url of scriptUrls) {
    const response = await fetch(url);
    const text = await response.text();
    scriptScans.push({ url, status: response.status, scan: scan(`script:${url}`, text) });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1024, height: 900 } });
  const page = await context.newPage();
  const pageErrors = [];
  const consoleErrors = [];
  const failedRequests = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error') consoleErrors.push(message.text()); });
  page.on('requestfailed', (request) => failedRequests.push({ url: request.url(), error: request.failure()?.errorText || 'unknown' }));
  const response = await page.goto(baseUrl, { waitUntil: 'networkidle' });
  const initial = await page.evaluate(() => ({
    outerHTML: document.documentElement.outerHTML,
    selectorJson: document.getElementById('products-selector-data')?.textContent || '',
    h1Count: document.querySelectorAll('h1').length,
    directoryRows: document.querySelectorAll('.product-grade-row').length,
    modules: [...document.querySelectorAll('main > section[data-module]')].map((node) => node.dataset.module),
    routeKeyAttributes: document.querySelectorAll('[data-route-key]').length,
    rfqHrefs: [...document.querySelectorAll('a[href="/request-a-quote/"]')].map((node) => node.getAttribute('href')),
  }));
  const domScans = [scan('dom:initial', initial.outerHTML), scan('json:products-selector-data', initial.selectorJson)];
  const selectorStates = [];
  for (const button of await page.locator('[data-application]').all()) {
    const label = (await button.textContent()).trim();
    await button.click();
    const state = await page.evaluate(() => ({
      count: document.querySelectorAll('#product-results .product-selector-result').length,
      resultHTML: document.getElementById('product-results')?.outerHTML || '',
      documentHTML: document.documentElement.outerHTML,
    }));
    selectorStates.push({ label, count: state.count, scan: scan(`dom:selector:${label}`, state.resultHTML) });
    domScans.push(scan(`dom:document-after-selector:${label}`, state.documentHTML));
  }
  await browser.close();

  const readinessStates = [...readiness.states, readiness.restored];
  const result = {
    status: 'PENDING',
    checkedAt: new Date().toISOString(),
    identity: {
      expected: { implementation: expectedImplementation, evidenceHead: expectedEvidenceHead, build: expectedBuild },
      actual: {
        branch: git('branch', '--show-current'),
        head: git('rev-parse', 'HEAD'),
        clean: git('status', '--porcelain=v1') === '',
        manifestImplementation: manifest.git.implementation_commit,
        manifestEvidenceHead: manifest.git.evidence_head,
        manifestBuild: manifest.build.build_id,
      },
    },
    f01: {
      rawScans: rawResponses.map(({ url, status, scope, scan }) => ({ url, status, scope, scan })),
      scriptScans,
      domScans,
      routeKeyAttributeCount: initial.routeKeyAttributes,
      readinessStateCount: readinessStates.length,
      readinessStateLabels: readinessStates.map((state) => state.label),
      readinessLeakStates: readinessStates.filter((state) => !Array.isArray(state.publicInternalIds) || state.publicInternalIds.length > 0).map((state) => ({ label: state.label, publicInternalIds: state.publicInternalIds })),
    },
    f02: {
      expectedAcceptance,
      manifestIds,
      mappingIds,
      manifestMissing: setDifference(expectedAcceptance, manifestIds),
      manifestExtra: setDifference(manifestIds, expectedAcceptance),
      mappingMissing: setDifference(expectedAcceptance, mappingIds),
      mappingExtra: setDifference(mappingIds, expectedAcceptance),
      duplicateManifestIds: manifestIds.filter((value, index) => manifestIds.indexOf(value) !== index),
      duplicateMappingIds: mappingIds.filter((value, index) => mappingIds.indexOf(value) !== index),
      mappingCompleteness,
    },
    adjacentRegression: {
      httpStatus: response?.status() || null,
      h1Count: initial.h1Count,
      directoryRows: initial.directoryRows,
      modules: initial.modules,
      rfqCleanLinkCount: initial.rfqHrefs.length,
      selectorStates,
      pageErrors,
      consoleErrors,
      failedRequests,
    },
  };
  const identityPass = result.identity.actual.head === expectedEvidenceHead
    && result.identity.actual.clean
    && result.identity.actual.manifestImplementation === expectedImplementation
    && result.identity.actual.manifestEvidenceHead === expectedEvidenceHead
    && result.identity.actual.manifestBuild === expectedBuild;
  const f01Pass = result.f01.rawScans.every((entry) => entry.scan.pass)
    && result.f01.scriptScans.every((entry) => entry.scan.pass)
    && result.f01.domScans.every((entry) => entry.pass)
    && result.f01.routeKeyAttributeCount === 0
    && result.f01.readinessStateCount === 12
    && result.f01.readinessLeakStates.length === 0;
  const f02Pass = result.f02.manifestMissing.length === 0
    && result.f02.manifestExtra.length === 0
    && result.f02.mappingMissing.length === 0
    && result.f02.mappingExtra.length === 0
    && result.f02.duplicateManifestIds.length === 0
    && result.f02.duplicateMappingIds.length === 0
    && result.f02.mappingCompleteness.every((entry) => entry.hasEvidence && entry.hasCommands && entry.hasResult && entry.hasBoundary);
  const expectedSelectorCounts = { Coatings: 8, Plastics: 8, Masterbatch: 7, 'Printing Inks': 4, Paper: 2, 'Specialty Materials': 1, 'Not Sure': 0 };
  const adjacentPass = result.adjacentRegression.httpStatus === 200
    && result.adjacentRegression.h1Count === 1
    && result.adjacentRegression.directoryRows === 14
    && JSON.stringify(result.adjacentRegression.modules) === JSON.stringify(['breadcrumb', 'hero', 'selector', 'process', 'directory', 'evaluation', 'faq', 'final-rfq'])
    && result.adjacentRegression.rfqCleanLinkCount === 7
    && result.adjacentRegression.selectorStates.every((state) => state.count === expectedSelectorCounts[state.label])
    && result.adjacentRegression.pageErrors.length === 0
    && result.adjacentRegression.consoleErrors.length === 0
    && result.adjacentRegression.failedRequests.length === 0;
  result.summary = { identityPass, f01Pass, f02Pass, adjacentPass };
  result.status = Object.values(result.summary).every(Boolean) ? 'PASS' : 'FAIL';
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2) + '\n');
  if (result.status !== 'PASS') process.exitCode = 1;
}

main().catch((error) => {
  fs.writeFileSync(outputPath, JSON.stringify({ status: 'ERROR', message: error.stack || String(error) }, null, 2) + '\n');
  process.exitCode = 1;
});
