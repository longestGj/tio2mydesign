const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')
const {chromium} = require('@playwright/test')

const baseUrl = 'http://127.0.0.1:4391'
const receiverUrl = 'http://127.0.0.1:4392'
const worktree = 'D:/16Wordpress_nextjs/.worktrees/app000-gate8'
const out = __dirname
const candidate = {
  implementationCommit: '6ece488cf88f060457890ad7f37da0db752564ef',
  evidenceHead: 'f6ca423acee1282b8abe71acc5a77f159578926b',
  buildId: 'maNqNFg3Urit7VkLTu5KM',
  runtime: baseUrl,
}
const marker = /APP-000|APP000-EDGE-[A-Z0-9-]+|TIO2MY-[A-Z0-9-]+|(?:PRODUCT|MARKET|RES|CONV|GLOBAL|LEGAL)-[A-Z0-9][A-Z0-9-]*|data-(?:site-id|site-scope|source-page|page-id|grade-occurrence|grade-state|support-action|application-action|module)|["']?(?:currentPageId|sourcePageId|targetPageId|siteScope|edgeId|contractId|packageId|reviewId|auditId)["']?\s*[:=]|(?:site_scope|page_id|source_page_id)\s*[:=]|\/api\/tio2-my/gu
const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex')
const scan = (value) => [...value.matchAll(marker)].map((match) => ({
  match: match[0],
  index: match.index,
  context: value.slice(Math.max(0, match.index - 70), Math.min(value.length, match.index + match[0].length + 110)),
}))
const surface = (value, status = 200, contentType = null) => ({
  status, contentType, bytes: Buffer.byteLength(value), sha256: sha256(value), matches: scan(value),
})

async function fetchText(url, options = {}) {
  const response = await fetch(url, options)
  return {status: response.status, contentType: response.headers.get('content-type'), headers: Object.fromEntries(response.headers), url: response.url, text: await response.text()}
}

async function captureBoundary(page, runtimePath) {
  const htmlResponse = await fetchText(new URL(runtimePath, baseUrl), {headers: {accept: 'text/html'}})
  const rscResponse = await fetchText(new URL(runtimePath, baseUrl), {headers: {accept: 'text/x-component', rsc: '1'}})
  const browser = await page.evaluate(() => ({
    dom: document.documentElement.outerHTML,
    head: document.head.outerHTML,
    schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map((node) => node.textContent ?? '').join('\n'),
    inlineScripts: [...document.scripts].filter((node) => !node.src).map((node) => node.textContent ?? '').join('\n'),
    scriptUrls: [...new Set([...document.scripts].map((node) => node.src).filter(Boolean))],
    performanceScriptUrls: [...new Set(performance.getEntriesByType('resource').filter((entry) => entry.initiatorType === 'script' || entry.name.endsWith('.js')).map((entry) => entry.name))],
    state: JSON.stringify({local: {...localStorage}, session: {...sessionStorage}, history: history.state}),
  }))
  const rawHtmlScriptUrls = [...htmlResponse.text.matchAll(/<script[^>]+src="([^"]+\.js)"/gu)].map((match) => new URL(match[1], baseUrl).href)
  const allScriptUrls = [...new Set([...browser.scriptUrls, ...browser.performanceScriptUrls, ...rawHtmlScriptUrls])]
  const scripts = []
  for (const url of allScriptUrls) {
    const response = await fetchText(url)
    scripts.push({url: new URL(url).pathname, ...surface(response.text, response.status, response.contentType)})
  }
  const aria = await page.locator('body').ariaSnapshot()
  return {
    path: runtimePath,
    html: surface(htmlResponse.text, htmlResponse.status, htmlResponse.contentType),
    rsc: surface(rscResponse.text, rscResponse.status, rscResponse.contentType),
    dom: surface(browser.dom),
    head: surface(browser.head),
    schema: surface(browser.schema),
    accessibility: surface(aria),
    inlineScripts: surface(browser.inlineScripts),
    browserState: surface(browser.state),
    loadedClientScripts: scripts,
  }
}

function boundaryMatchCount(boundary) {
  return [boundary.html, boundary.rsc, boundary.dom, boundary.head, boundary.schema, boundary.accessibility,
    boundary.inlineScripts, boundary.browserState, ...boundary.loadedClientScripts]
    .reduce((sum, item) => sum + item.matches.length, 0)
}

const expectedEdgeIds = [
  'APP000-EDGE-COAT-01','APP000-EDGE-COAT-02','APP000-EDGE-COAT-03','APP000-EDGE-COAT-04','APP000-EDGE-COAT-05','APP000-EDGE-COAT-06','APP000-EDGE-COAT-07','APP000-EDGE-COAT-08',
  'APP000-EDGE-PLAS-01','APP000-EDGE-PLAS-02','APP000-EDGE-PLAS-03','APP000-EDGE-PLAS-04','APP000-EDGE-PLAS-05','APP000-EDGE-PLAS-06','APP000-EDGE-PLAS-07','APP000-EDGE-PLAS-08',
  'APP000-EDGE-MB-01','APP000-EDGE-MB-02','APP000-EDGE-MB-03','APP000-EDGE-MB-04','APP000-EDGE-MB-05','APP000-EDGE-MB-06','APP000-EDGE-MB-07',
  'APP000-EDGE-INK-01','APP000-EDGE-INK-02','APP000-EDGE-INK-03','APP000-EDGE-INK-04',
  'APP000-EDGE-PAPER-01','APP000-EDGE-PAPER-02','APP000-EDGE-SPEC-01',
]
const expectedCategories = ['Coatings','Plastics','Masterbatch','Printing Inks','Paper','Specialty Materials']
const expectedSupport = ['Explore Products','Review Documents','Explore Markets']
const sharedSources = [
  ['Home', '/'],
  ['Markets', '/markets/'],
  ['Products', '/products/'],
  ['Documents', '/documents/'],
  ['Resources', '/resources/'],
  ['Chloride', '/products/chloride-process-titanium-dioxide/'],
]

;(async () => {
  fs.mkdirSync(out, {recursive: true})
  const checkedAt = new Date().toISOString()
  const browser = await chromium.launch({headless: true})
  const page = await browser.newPage({viewport: {width: 1440, height: 1000}})
  const appResponse = await page.goto(`${baseUrl}/applications/`, {waitUntil: 'networkidle'})
  const appBoundary = await captureBoundary(page, '/applications/')

  const contract = JSON.parse(fs.readFileSync(path.join(worktree, 'wordpress/plugins/tio2-site-model/config/tio2-my-application-hub.json'), 'utf8'))
  const contractEdges = contract.applications.flatMap((application) => application.grades.map((grade) => ({edgeId: grade.edgeId, label: grade.gradeId, href: grade.href})))
  const renderedEdges = await page.locator('#application-selector article').evaluateAll((articles) => articles.flatMap((article) => [...article.querySelectorAll('details li')].map((item) => ({
    label: item.textContent?.trim(), href: item.querySelector('a')?.getAttribute('href') ?? null,
  }))))
  const categoryCounts = await page.locator('#application-selector article').evaluateAll((articles) => articles.map((article) => article.querySelectorAll('details li').length))
  const categoryNames = []
  for (const name of expectedCategories) {
    const link = page.getByRole('link', {name, exact: true})
    categoryNames.push({name, exactCount: await link.count(), aria: await link.ariaSnapshot()})
  }
  const supportNames = []
  for (const name of expectedSupport) {
    const link = page.getByRole('link', {name, exact: true})
    supportNames.push({name, exactCount: await link.count(), aria: await link.ariaSnapshot()})
  }
  const arrowNamedLinkCount = await page.getByRole('link', {name: /[↓→]/u}).count()

  const uniqueGradePaths = [...new Set(contractEdges.map((edge) => edge.href))]
  const gradeRoutes = []
  for (const runtimePath of uniqueGradePaths) {
    const response = await fetchText(new URL(runtimePath, baseUrl))
    gradeRoutes.push({path: runtimePath, status: response.status, canonical: response.text.match(/<link rel="canonical" href="([^"]+)"/u)?.[1] ?? null})
  }

  await fetch(`${receiverUrl}/reset`, {method: 'POST'})
  const apiEvents = []
  const contextResponsePromise = page.waitForResponse((response) => response.url().endsWith('/api/rfq/context'))
  await page.locator('main').getByRole('link', {name: 'Request a Quote', exact: true}).first().click()
  const contextResponse = await contextResponsePromise
  const contextHeaders = await contextResponse.allHeaders()
  const contextBody = await contextResponse.body().catch(() => Buffer.alloc(0))
  await page.waitForURL((url) => url.pathname === '/request-a-quote' && url.search === '')
  const contextApiText = [contextResponse.url(), contextResponse.request().method(), JSON.stringify(contextHeaders), contextBody.toString('utf8')].join('\n')
  apiEvents.push({name: 'context', url: contextResponse.url(), method: contextResponse.request().method(), status: contextResponse.status(), publicMatches: scan(contextApiText)})
  const cookie = (await page.context().cookies()).find((item) => item.name === 'rfq_context')
  const receiverInitial = await page.evaluate(() => ({url: location.href, search: location.search, grade: document.querySelector('#rfq-grade_id')?.value ?? null, application: document.querySelector('#rfq-application_id')?.value ?? null}))
  const rfqBoundary = await captureBoundary(page, '/request-a-quote/')

  await page.locator('#rfq-grade_id').selectOption('M-350')
  await page.locator('#rfq-application_id').selectOption('Coatings')
  await page.locator('#rfq-quantity_mt').fill('12')
  await page.locator('#rfq-destination_country').fill('Malaysia')
  await page.locator('#rfq-company_name').fill('Independent Local Receiver Test')
  await page.locator('#rfq-contact_name').fill('Runtime Reviewer')
  await page.locator('#rfq-business_email').fill('runtime-review@example.invalid')
  const submitResponsePromise = page.waitForResponse((response) => response.url().endsWith('/api/rfq/submit'))
  await page.getByRole('button', {name: 'REQUEST QUOTE', exact: true}).click()
  const submitResponse = await submitResponsePromise
  const submitText = await submitResponse.text()
  const submitApiText = [submitResponse.url(), submitResponse.request().method(), submitResponse.request().postData() ?? '', JSON.stringify(await submitResponse.allHeaders()), submitText].join('\n')
  apiEvents.push({name: 'submit', url: submitResponse.url(), method: submitResponse.request().method(), status: submitResponse.status(), publicMatches: scan(submitApiText)})
  const receiverCapture = await (await fetch(`${receiverUrl}/capture`)).json()
  const payload = receiverCapture.payload ?? null

  const sharedRfq = []
  for (let index = 0; index < sharedSources.length; index += 1) {
    const [name, runtimePath] = sharedSources[index]
    const context = await browser.newContext({viewport: {width: 1440, height: 1000}})
    const sourcePage = await context.newPage()
    const response = await sourcePage.goto(new URL(runtimePath, baseUrl).href, {waitUntil: 'networkidle'})
    const link = sourcePage.getByRole('banner').getByRole('link', {name: 'Request a Quote', exact: true}).first()
    const linkHtml = await link.evaluate((node) => node.outerHTML)
    const scriptUrls = await sourcePage.evaluate(() => [...new Set([...document.scripts].map((node) => node.src).filter(Boolean))])
    const contextScripts = []
    for (const url of scriptUrls) {
      const script = await fetchText(url)
      if (script.text.includes('/api/rfq/context')) contextScripts.push({url: new URL(url).pathname, ...surface(script.text, script.status, script.contentType)})
    }
    const attributionPromise = sourcePage.waitForResponse((item) => item.url().endsWith('/api/rfq/context'))
    if (index % 2 === 0) await link.click()
    else { await link.focus(); await sourcePage.keyboard.press('Enter') }
    const attribution = await attributionPromise
    const attributionHeaders = await attribution.allHeaders()
    const attributionBody = await attribution.body().catch(() => Buffer.alloc(0))
    await sourcePage.waitForURL((url) => url.pathname === '/request-a-quote' && url.search === '')
    const responseText = [attribution.url(), attribution.request().method(), JSON.stringify(attributionHeaders), attributionBody.toString('utf8')].join('\n')
    const sourceCookie = (await context.cookies()).find((item) => item.name === 'rfq_context')
    const state = await sourcePage.evaluate(() => ({url: location.href, search: location.search, grade: document.querySelector('#rfq-grade_id')?.value ?? null, application: document.querySelector('#rfq-application_id')?.value ?? null}))
    await sourcePage.goBack({waitUntil: 'networkidle'})
    sharedRfq.push({
      name, sourcePath: runtimePath, sourceStatus: response?.status(), activation: index % 2 === 0 ? 'pointer' : 'keyboard',
      linkHtml, linkMatches: scan(linkHtml), contextScripts, attribution: {status: attribution.status(), responseMatches: scan(responseText)},
      cookie: sourceCookie ? {name: sourceCookie.name, httpOnly: sourceCookie.httpOnly, sameSite: sourceCookie.sameSite, opaque: !sourceCookie.value.includes(name) && !sourceCookie.value.includes('APP-000')} : null,
      receiverState: state, returnedUrl: sourcePage.url(),
    })
    await context.close()
  }

  const result = {
    checkedAt,
    reviewer: '/root/app000_internal_link_planning',
    candidate,
    externalReceiverRequest: false,
    localReceiverSimulationSubmission: true,
    app: {status: appResponse?.status(), canonical: await (async () => { const p = await browser.newPage(); await p.goto(`${baseUrl}/applications/`); const value = await p.locator('link[rel="canonical"]').getAttribute('href'); await p.close(); return value })(), boundary: appBoundary},
    rfq: {initial: receiverInitial, boundary: rfqBoundary, cookie: cookie ? {name: cookie.name, httpOnly: cookie.httpOnly, sameSite: cookie.sameSite, opaque: !cookie.value.includes('APP-000')} : null},
    browserFacingApi: apiEvents,
    serverLocalReceiver: payload ? {sourcePageId: payload.source_page_id ?? null, keys: Object.keys(payload).sort(), accessKeyPresent: Object.hasOwn(payload, 'access_key')} : null,
    f02: {
      expectedCount: expectedEdgeIds.length,
      contractCount: contractEdges.length,
      runtimeCount: renderedEdges.length,
      categoryCounts,
      exactEdgeIds: contractEdges.map((edge) => edge.edgeId),
      edgeIdMatches: contractEdges.filter((edge, index) => edge.edgeId === expectedEdgeIds[index]).length,
      runtimeLabelHrefMatches: renderedEdges.filter((edge, index) => edge.label === contractEdges[index]?.label && edge.href === contractEdges[index]?.href).length,
      gradeRoutes,
    },
    f04: {categoryNames, supportNames, arrowNamedLinkCount},
    sharedRfq,
  }
  fs.writeFileSync(path.join(out, 'APP-000_GATE9_F01_R2_INDEPENDENT_RUNTIME_EVIDENCE_V1.0.json'), JSON.stringify(result, null, 2) + '\n')
  await browser.close()
  process.stdout.write(JSON.stringify({
    appBoundaryMatches: boundaryMatchCount(appBoundary),
    rfqBoundaryMatches: boundaryMatchCount(rfqBoundary),
    apiMatches: apiEvents.reduce((sum, event) => sum + event.publicMatches.length, 0),
    receiverSource: payload?.source_page_id ?? null,
    edgeIdMatches: result.f02.edgeIdMatches,
    runtimeEdgeMatches: result.f02.runtimeLabelHrefMatches,
    categoryNames: categoryNames.filter((item) => item.exactCount === 1).length,
    supportNames: supportNames.filter((item) => item.exactCount === 1).length,
    sharedChecks: sharedRfq.length,
    sharedFailures: sharedRfq.filter((item) => item.linkMatches.length || item.contextScripts.some((script) => script.matches.length) || item.attribution.responseMatches.length || !item.cookie?.opaque || item.receiverState.search || item.receiverState.grade || item.receiverState.application).length,
  }))
})().catch((error) => {
  fs.mkdirSync(out, {recursive: true})
  fs.writeFileSync(path.join(out, 'collector-error.txt'), `${error.stack ?? error}\n`)
  process.stderr.write(`${error.stack ?? error}\n`)
  process.exitCode = 1
})
