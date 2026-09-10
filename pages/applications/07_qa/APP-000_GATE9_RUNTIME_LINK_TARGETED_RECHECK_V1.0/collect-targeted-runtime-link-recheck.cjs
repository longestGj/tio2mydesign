const fs = require('node:fs')
const path = require('node:path')
const {chromium} = require('@playwright/test')

const baseUrl = 'http://127.0.0.1:4391'
const worktree = 'D:/16Wordpress_nextjs/.worktrees/app000-gate8'
const outDir = __dirname
const candidate = {
  implementationCommit: '0144b303d0546dc5bb7012e4292df6339f851b78',
  evidenceHead: '87f48dc6eb0489ab26822280918dd0248efe6e05',
  buildId: 'cD6FOWG8iVMbgeRxyIqIS',
  runtime: baseUrl,
}

const forbidden = /APP-000|APP000-EDGE|GLOBAL-CHROME-005|data-(?:site-id|site-scope|source-page|grade-occurrence|grade-state|support-action|application-action|module)|["']?(?:currentPageId|sourcePageId|targetPageId|siteScope|edgeId|contractId)["']?\s*[:=]/giu
const receiverForbidden = /APP-000|APP000-EDGE|GLOBAL-CHROME-005|data-(?:site-id|site-scope|source-page|grade-occurrence|grade-state|support-action|application-action|module|page-id)|["']?(?:currentPageId|sourcePageId|targetPageId|siteScope|edgeId|contractId|pageId|packageId|reviewId)["']?\s*[:=]/giu
const expectedCategories = ['Coatings', 'Plastics', 'Masterbatch', 'Printing Inks', 'Paper', 'Specialty Materials']
const expectedSupport = [
  ['Explore Products', '/products/'],
  ['Review Documents', '/documents/'],
  ['Explore Markets', '/markets/'],
]
const expectedEdges = [
  ['APP000-EDGE-COAT-01', 'M-350', '/products/m-350/'],
  ['APP000-EDGE-COAT-02', 'M-510', '/products/m-510/'],
  ['APP000-EDGE-COAT-03', 'M-896', '/products/m-896/'],
  ['APP000-EDGE-COAT-04', 'M-996', '/products/m-996/'],
  ['APP000-EDGE-COAT-05', 'M-2196', '/products/m-2196/'],
  ['APP000-EDGE-COAT-06', 'M-895', '/products/m-895/'],
  ['APP000-EDGE-COAT-07', 'M-52', '/products/m-52/'],
  ['APP000-EDGE-COAT-08', 'M-2377', '/products/m-2377/'],
  ['APP000-EDGE-PLAS-01', 'M-350', '/products/m-350/'],
  ['APP000-EDGE-PLAS-02', 'M-510', '/products/m-510/'],
  ['APP000-EDGE-PLAS-03', 'M-200', '/products/m-200/'],
  ['APP000-EDGE-PLAS-04', 'M-108', '/products/m-108/'],
  ['APP000-EDGE-PLAS-05', 'M-210', '/products/m-210/'],
  ['APP000-EDGE-PLAS-06', 'M-340', '/products/m-340/'],
  ['APP000-EDGE-PLAS-07', 'M-886', '/products/m-886/'],
  ['APP000-EDGE-PLAS-08', 'M-2377', '/products/m-2377/'],
  ['APP000-EDGE-MB-01', 'M-510', '/products/m-510/'],
  ['APP000-EDGE-MB-02', 'M-200', '/products/m-200/'],
  ['APP000-EDGE-MB-03', 'M-108', '/products/m-108/'],
  ['APP000-EDGE-MB-04', 'M-210', '/products/m-210/'],
  ['APP000-EDGE-MB-05', 'M-340', '/products/m-340/'],
  ['APP000-EDGE-MB-06', 'M-886', '/products/m-886/'],
  ['APP000-EDGE-MB-07', 'M-2377', '/products/m-2377/'],
  ['APP000-EDGE-INK-01', 'M-350', '/products/m-350/'],
  ['APP000-EDGE-INK-02', 'M-510', '/products/m-510/'],
  ['APP000-EDGE-INK-03', 'M-52', '/products/m-52/'],
  ['APP000-EDGE-INK-04', 'M-2377', '/products/m-2377/'],
  ['APP000-EDGE-PAPER-01', 'M-350', '/products/m-350/'],
  ['APP000-EDGE-PAPER-02', 'M-2377', '/products/m-2377/'],
  ['APP000-EDGE-SPEC-01', 'CR-901', '/products/cr-901/'],
]
const consumers = [
  ['RES-TRADE-EU', '/resources/eu-titanium-dioxide-anti-dumping-duty/'],
  ['RES-TRADE-UK', '/resources/uk-titanium-dioxide-anti-dumping-investigation/'],
  ['RES-TRADE-IN', '/resources/india-titanium-dioxide-anti-dumping-duty/'],
  ['RES-TRADE-BR', '/resources/brazil-titanium-dioxide-anti-dumping-duty/'],
  ['APP-COAT', '/applications/titanium-dioxide-for-coatings/'],
  ['APP-PLAS', '/applications/titanium-dioxide-for-plastics/'],
  ['APP-MB', '/applications/titanium-dioxide-for-masterbatch/'],
  ['APP-INK', '/applications/titanium-dioxide-for-printing-inks/'],
  ['APP-PAPER', '/applications/titanium-dioxide-for-paper/'],
  ['PRODUCT-PROC-CL', '/products/chloride-process-titanium-dioxide/'],
  ['PRODUCT-PROC-SU', '/products/sulfate-process-titanium-dioxide/'],
]

async function getText(url, headers = {}) {
  const response = await fetch(url, {headers})
  return {status: response.status, contentType: response.headers.get('content-type'), text: await response.text(), finalUrl: response.url}
}

function scan(text, pattern) {
  return [...text.matchAll(pattern)].map((match) => ({
    match: match[0],
    index: match.index,
    context: text.slice(Math.max(0, match.index - 90), Math.min(text.length, match.index + match[0].length + 150)),
  }))
}

async function scanClientChunks(html, pattern) {
  const sources = [...new Set([...html.matchAll(/<script[^>]+src="([^"]+\.js)"/gu)].map((match) => match[1]))]
  const results = []
  for (const source of sources) {
    const response = await getText(new URL(source, baseUrl))
    const matches = scan(response.text, pattern)
    results.push({source, status: response.status, bytes: Buffer.byteLength(response.text), matches})
  }
  return results
}

async function activateAndBack(page, locator, expectedPath, activation) {
  const startUrl = page.url()
  const normalizedExpected = expectedPath === '/' ? '/' : expectedPath.replace(/\/$/u, '')
  await locator.scrollIntoViewIfNeeded()
  if (activation === 'keyboard') {
    await locator.focus()
    await page.keyboard.press('Enter')
  } else {
    await locator.click()
  }
  await page.waitForURL((url) => (url.pathname === '/' ? '/' : url.pathname.replace(/\/$/u, '')) === normalizedExpected)
  const reached = new URL(page.url())
  const destination = {url: page.url(), pathname: reached.pathname, search: reached.search, title: await page.title()}
  await page.goBack({waitUntil: 'networkidle'})
  return {activation, startUrl, destination, returnedUrl: page.url()}
}

(async () => {
  fs.mkdirSync(outDir, {recursive: true})
  const checkedAt = new Date().toISOString()
  const rawHtml = await getText(`${baseUrl}/applications/`, {accept: 'text/html'})
  const rawRsc = await getText(`${baseUrl}/applications/`, {
    accept: 'text/x-component',
    rsc: '1',
    'next-router-state-tree': '["",{"children":["applications",{"children":["__PAGE__",{}]}]},null,null,true]',
  })
  const appClientChunks = await scanClientChunks(rawHtml.text, receiverForbidden)
  const contractPath = path.join(worktree, 'wordpress/plugins/tio2-site-model/config/tio2-my-application-hub.json')
  const contract = JSON.parse(fs.readFileSync(contractPath, 'utf8'))
  const actualContractEdges = contract.applications.flatMap((application) => application.grades.map((grade) => [grade.edgeId, grade.gradeId, grade.href]))

  const browser = await chromium.launch({headless: true})
  const context = await browser.newContext({viewport: {width: 1440, height: 1000}})
  const page = await context.newPage()
  const response = await page.goto(`${baseUrl}/applications/`, {waitUntil: 'networkidle'})
  const dom = await page.locator('html').evaluate((node) => node.outerHTML)
  const projection = {
    responseStatus: response?.status(),
    url: page.url(),
    canonical: await page.locator('link[rel="canonical"]').getAttribute('href'),
    rawHtml: {status: rawHtml.status, contentType: rawHtml.contentType, bytes: Buffer.byteLength(rawHtml.text), forbiddenMatches: rawHtml.text.match(forbidden) ?? []},
    rawRsc: {status: rawRsc.status, contentType: rawRsc.contentType, bytes: Buffer.byteLength(rawRsc.text), forbiddenMatches: rawRsc.text.match(forbidden) ?? []},
    hydratedDom: {bytes: Buffer.byteLength(dom), forbiddenMatches: dom.match(forbidden) ?? []},
    clientChunks: appClientChunks,
    literalTio2MyContextsAreAssetPaths: [...rawHtml.text.matchAll(/.{0,55}tio2-my.{0,90}/giu)].map((match) => match[0]),
  }

  const categoryAccessible = []
  for (const name of expectedCategories) {
    const link = page.getByRole('link', {name, exact: true})
    categoryAccessible.push({name, exactRoleCount: await link.count(), ariaSnapshot: await link.ariaSnapshot()})
  }
  const supportAccessible = []
  for (const [name, href] of expectedSupport) {
    const link = page.getByRole('link', {name, exact: true})
    supportAccessible.push({name, href, exactRoleCount: await link.count(), ariaSnapshot: await link.ariaSnapshot()})
  }
  const arrowNamedLinks = await page.getByRole('link', {name: /[↓→]/u}).count()
  const renderedGrades = await page.locator('#application-selector article').evaluateAll((articles) => articles.flatMap((article) => (
    [...article.querySelectorAll('details li')].map((item, index) => ({
      application: article.querySelector('h3')?.textContent?.trim() ?? null,
      position: index + 1,
      label: item.textContent?.trim() ?? null,
      href: item.querySelector('a')?.getAttribute('href') ?? null,
    }))
  )))
  const categoryCounts = await page.locator('#application-selector article').evaluateAll((articles) => articles.map((article) => article.querySelectorAll('details li').length))
  const sharedSnapshot = {
    headerLinks: await page.locator('header a[href]').evaluateAll((nodes) => nodes.map((node) => ({text: node.textContent?.trim(), href: node.getAttribute('href'), current: node.getAttribute('aria-current')}))),
    footerLinks: await page.locator('footer a[href]').evaluateAll((nodes) => nodes.map((node) => ({text: node.textContent?.trim(), href: node.getAttribute('href')}))),
    headerAriaSnapshot: await page.getByRole('banner').ariaSnapshot(),
    footerAriaSnapshot: await page.getByRole('contentinfo').ariaSnapshot(),
  }

  const uniqueGradePaths = [...new Set(expectedEdges.map((edge) => edge[2]))]
  const gradeDestinations = []
  for (const gradePath of uniqueGradePaths) {
    const result = await getText(`${baseUrl}${gradePath}`)
    const canonical = result.text.match(/<link rel="canonical" href="([^"]+)"/u)?.[1] ?? null
    gradeDestinations.push({path: gradePath, status: result.status, finalUrl: result.finalUrl, canonical})
  }

  const interactions = []
  interactions.push({id: 'I01', name: 'category Coatings pointer', ...(await (async () => {
    const startUrl = page.url()
    await page.getByRole('link', {name: 'Coatings', exact: true}).click()
    await page.waitForURL(/#application-coatings$/u)
    const destination = page.url()
    await page.goBack({waitUntil: 'networkidle'})
    return {startUrl, destination, returnedUrl: page.url()}
  })())})
  interactions.push({id: 'I02', name: 'body Products pointer', ...(await activateAndBack(page, page.locator('main').getByRole('link', {name: 'Explore Products', exact: true}), '/products', 'pointer'))})
  interactions.push({id: 'I03', name: 'body Documents keyboard', ...(await activateAndBack(page, page.locator('main').getByRole('link', {name: 'Review Documents', exact: true}), '/documents', 'keyboard'))})
  interactions.push({id: 'I04', name: 'body Markets pointer', ...(await activateAndBack(page, page.locator('main').getByRole('link', {name: 'Explore Markets', exact: true}), '/markets', 'pointer'))})
  interactions.push({id: 'I05', name: 'M-350 pointer', ...(await activateAndBack(page, page.locator('#application-coatings').getByRole('link', {name: 'M-350', exact: true}), '/products/m-350', 'pointer'))})
  interactions.push({id: 'I06', name: 'CR-901 keyboard', ...(await activateAndBack(page, page.locator('#application-specialty-materials').getByRole('link', {name: 'CR-901', exact: true}), '/products/cr-901', 'keyboard'))})
  interactions.push({id: 'I07', name: 'header Products pointer', ...(await activateAndBack(page, page.locator('header').getByRole('link', {name: 'Products', exact: true}), '/products', 'pointer'))})
  interactions.push({id: 'I08', name: 'footer Documents keyboard', ...(await activateAndBack(page, page.locator('footer').getByRole('link', {name: 'Documents', exact: true}), '/documents', 'keyboard'))})
  interactions.push({id: 'I09', name: 'breadcrumb Home pointer', ...(await activateAndBack(page, page.getByRole('navigation', {name: 'Breadcrumb'}).getByRole('link', {name: 'Home', exact: true}), '/', 'pointer'))})

  await context.clearCookies()
  await page.goto(`${baseUrl}/applications/`, {waitUntil: 'networkidle'})
  const attributionResponsePromise = page.waitForResponse((item) => item.url().endsWith('/api/tio2-my/rfq-attribution'))
  await page.locator('main').getByRole('link', {name: 'Request a Quote', exact: true}).first().click()
  const attributionResponse = await attributionResponsePromise
  await page.waitForURL((url) => url.pathname === '/request-a-quote' && url.search === '')
  const rfqState = await page.evaluate(() => ({
    url: location.href,
    search: location.search,
    grade: document.querySelector('#rfq-grade_id')?.value ?? null,
    application: document.querySelector('#rfq-application_id')?.value ?? null,
  }))
  const rfqDom = await page.locator('html').evaluate((node) => node.outerHTML)
  const rfqRawHtml = await getText(`${baseUrl}/request-a-quote/`, {accept: 'text/html'})
  const rfqRawRsc = await getText(`${baseUrl}/request-a-quote/`, {
    accept: 'text/x-component',
    rsc: '1',
    'next-router-state-tree': '["",{"children":["request-a-quote",{"children":["__PAGE__",{}]}]},null,null,true]',
  })
  const rfqClientChunks = await scanClientChunks(rfqRawHtml.text, receiverForbidden)
  const privateCookie = (await context.cookies()).find(({name}) => name === 'my_rfq_context')
  interactions.push({
    id: 'I10', name: 'body RFQ pointer/private attribution/no submit',
    attributionRequest: {method: attributionResponse.request().method(), status: attributionResponse.status(), url: attributionResponse.url()},
    receiver: rfqState,
    receiverPublicProjection: {
      rawHtml: {status: rfqRawHtml.status, contentType: rfqRawHtml.contentType, bytes: Buffer.byteLength(rfqRawHtml.text), matches: scan(rfqRawHtml.text, receiverForbidden)},
      rawRsc: {status: rfqRawRsc.status, contentType: rfqRawRsc.contentType, bytes: Buffer.byteLength(rfqRawRsc.text), matches: scan(rfqRawRsc.text, receiverForbidden)},
      hydratedDom: {bytes: Buffer.byteLength(rfqDom), matches: scan(rfqDom, receiverForbidden)},
      clientChunks: rfqClientChunks,
    },
    cookie: privateCookie ? {name: privateCookie.name, httpOnly: privateCookie.httpOnly, sameSite: privateCookie.sameSite, valueOpaque: !privateCookie.value.includes('APP-000')} : null,
    formSubmitted: false,
  })
  await page.goBack({waitUntil: 'networkidle'})

  await page.getByRole('button', {name: 'Cookie Settings', exact: true}).focus()
  await page.keyboard.press('Enter')
  const cookieDialogVisible = await page.getByRole('dialog').isVisible()
  const cookieInitialFocus = await page.evaluate(() => document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim())
  await page.getByRole('button', {name: 'Close', exact: true}).click()
  const cookieReturnedFocus = await page.evaluate(() => document.activeElement?.textContent?.trim())
  interactions.push({id: 'I11', name: 'Cookie Settings keyboard/open/close/focus', cookieDialogVisible, cookieInitialFocus, cookieReturnedFocus})

  await page.setViewportSize({width: 390, height: 844})
  await page.reload({waitUntil: 'networkidle'})
  const mobileDefaultOpen = await page.locator('#application-selector details').evaluateAll((nodes) => nodes.map((node) => node.open))
  await page.getByRole('button', {name: 'Open primary navigation', exact: true}).focus()
  await page.keyboard.press('Enter')
  const menuVisible = await page.getByRole('dialog', {name: 'Primary navigation menu'}).isVisible()
  const menuCurrent = await page.getByRole('dialog', {name: 'Primary navigation menu'}).locator('[aria-current="page"]').textContent()
  await page.keyboard.press('Escape')
  const menuReturnedFocus = await page.evaluate(() => document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim())
  interactions.push({id: 'I12', name: 'mobile shared menu keyboard/Escape/focus', menuVisible, menuCurrent: menuCurrent?.trim(), menuReturnedFocus, defaultDisclosureOpen: mobileDefaultOpen})

  const consumerResults = []
  for (const [pageId, route] of consumers) {
    const result = await getText(`${baseUrl}${route}`)
    const canonical = result.text.match(/<link rel="canonical" href="([^"]+)"/u)?.[1] ?? null
    consumerResults.push({pageId, path: route, status: result.status, canonical, applicationsHrefInstances: (result.text.match(/href="\/applications\/?"/gu) ?? []).length})
  }
  await page.setViewportSize({width: 1440, height: 1000})
  await page.goto(`${baseUrl}/products/chloride-process-titanium-dioxide/`, {waitUntil: 'networkidle'})
  const chlorideInteraction = await activateAndBack(page, page.locator('main').getByRole('link', {name: 'Explore Applications', exact: true}), '/applications', 'keyboard')

  const contractComparison = expectedEdges.map((expected, index) => ({
    index: index + 1,
    expected: {edgeId: expected[0], label: expected[1], href: expected[2]},
    actualPrivateContract: actualContractEdges[index] ? {edgeId: actualContractEdges[index][0], label: actualContractEdges[index][1], href: actualContractEdges[index][2]} : null,
    actualRuntime: renderedGrades[index] ?? null,
    privateContractMatch: JSON.stringify(actualContractEdges[index]) === JSON.stringify(expected),
    runtimeLabelHrefMatch: renderedGrades[index]?.label === expected[1] && renderedGrades[index]?.href === expected[2],
  }))
  const result = {
    checkedAt,
    collector: '/root/app000_internal_link_planning',
    candidate,
    realFormSubmission: false,
    projection,
    accessibleNames: {categories: categoryAccessible, support: supportAccessible, arrowNamedLinks},
    edgeInventory: {
      expectedCount: expectedEdges.length,
      privateContractCount: actualContractEdges.length,
      runtimeCount: renderedGrades.length,
      privateContractMatches: contractComparison.filter((item) => item.privateContractMatch).length,
      runtimeLabelHrefMatches: contractComparison.filter((item) => item.runtimeLabelHrefMatch).length,
      categoryCounts,
      comparisons: contractComparison,
    },
    gradeDestinations,
    interactions,
    sharedSnapshot,
    consumerResults,
    chlorideInteraction,
  }
  fs.writeFileSync(path.join(outDir, 'APP-000_GATE9_RUNTIME_LINK_TARGETED_EVIDENCE_V1.0.json'), JSON.stringify(result, null, 2) + '\n')
  await browser.close()
  process.stdout.write(JSON.stringify({
    status: 'collected',
    rawHtmlForbidden: projection.rawHtml.forbiddenMatches.length,
    rawRscForbidden: projection.rawRsc.forbiddenMatches.length,
    domForbidden: projection.hydratedDom.forbiddenMatches.length,
    appClientChunkForbidden: projection.clientChunks.reduce((sum, item) => sum + item.matches.length, 0),
    rfqHtmlForbidden: interactions.find((item) => item.id === 'I10').receiverPublicProjection.rawHtml.matches.length,
    rfqRscForbidden: interactions.find((item) => item.id === 'I10').receiverPublicProjection.rawRsc.matches.length,
    categoryExact: categoryAccessible.filter((item) => item.exactRoleCount === 1).length,
    supportExact: supportAccessible.filter((item) => item.exactRoleCount === 1).length,
    arrowNamedLinks,
    privateContractMatches: result.edgeInventory.privateContractMatches,
    runtimeLabelHrefMatches: result.edgeInventory.runtimeLabelHrefMatches,
  }))
})().catch((error) => {
  fs.writeFileSync(path.join(outDir, 'collector-error.txt'), `${error.stack ?? error}\n`)
  process.stderr.write(`${error.stack ?? error}\n`)
  process.exitCode = 1
})
