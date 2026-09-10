const { chromium } = require('D:/16Wordpress_nextjs/node_modules/playwright')

const base = 'http://127.0.0.1:3024'
const results = { checkedAt: new Date().toISOString(), base, checks: [] }
const record = (id, pass, actual) => results.checks.push({ id, result: pass ? 'PASS' : 'FAIL', actual })

async function httpCheck(request, path) {
  try {
    const response = await request.get(`${base}${path}`, { maxRedirects: 0, timeout: 10000 })
    const body = await response.body()
    record(`HTTP ${path}`, response.status() === 200, { status: response.status(), location: response.headers().location || null, bytes: body.length })
    return response
  } catch (error) {
    record(`HTTP ${path}`, false, { error: error.name, message: String(error.message).split('\n')[0] })
    return null
  }
}

async function inspectBrazilVisual(page, width) {
  await page.setViewportSize({ width, height: width === 390 ? 844 : 900 })
  await page.goto(`${base}/markets/brazil/`, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  const metrics = await page.evaluate(() => {
    const module = id => document.querySelector(`[data-module="${id}"]`)
    const hero = module('BR-EN-01')
    const card = module('BR-EN-02').querySelector('article')
    const documents = module('BR-EN-03')
    const trade = module('BR-EN-04').querySelector('p')
    const rfq = module('BR-EN-05').querySelector('li')
    const h1 = hero.querySelector('h1')
    return {
      modules: document.querySelectorAll('main section[data-module]').length,
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      heroGrid: getComputedStyle(hero, '::before').backgroundImage,
      heroBadge: getComputedStyle(h1, '::before').content,
      h1Size: getComputedStyle(h1).fontSize,
      cardShadow: getComputedStyle(card).boxShadow,
      cardTopBorder: getComputedStyle(card).borderTopWidth,
      cardNumber: getComputedStyle(card, '::after').content,
      documentsBackground: getComputedStyle(documents).backgroundColor,
      documentsMotif: getComputedStyle(documents, '::after').content,
      tradeMarker: getComputedStyle(trade).borderLeftWidth,
      rfqNumber: getComputedStyle(rfq, '::before').content,
    }
  })
  const pass = metrics.modules === 5 && metrics.overflow <= 0 &&
    metrics.heroGrid.includes('repeating-linear-gradient') && metrics.heroBadge.includes('MARKET BRIEF') &&
    (width !== 1440 || metrics.h1Size === '58px') && metrics.cardShadow !== 'none' &&
    metrics.cardTopBorder === '4px' && metrics.cardNumber === '"01"' &&
    metrics.documentsBackground === 'rgb(6, 43, 91)' && metrics.documentsMotif.includes('TDS') &&
    metrics.tradeMarker === '4px' && metrics.rfqNumber.includes('counter(rfq')
  record(`BR-EN visual ${width}`, pass, metrics)
  await page.screenshot({ path: `D:/23MySec/pages/markets/07_qa/gate9-br-cl-coo-targeted-v0.2/brazil-en-${width}.png`, fullPage: true, animations: 'disabled' })
}

async function inspectHistory(browser, language) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
  const marketPath = language === 'en' ? '/markets/brazil/' : '/pt-br/markets/brazil/'
  const label = language === 'en' ? 'Request a Quote' : 'Solicitar cotação'
  const edited = language === 'en' ? 'Chile' : 'Argentina'
  await page.goto(`${base}${marketPath}`, { waitUntil: 'networkidle' })
  await page.getByRole('main').getByRole('link', { name: label }).first().click()
  await page.waitForURL(/\/request-a-quote(?:\/|\?)/)
  const fresh = await page.locator('#rfq-destination_country').inputValue()
  await page.locator('#rfq-destination_country').fill(edited)
  await page.locator('#rfq-company_name').fill('Gate9 ephemeral check')
  const stateAfterEdit = await page.evaluate(() => history.state)
  await page.goBack(); await page.waitForURL(new RegExp(marketPath.replaceAll('/', '\\/') + '$'))
  await page.goForward(); await page.waitForURL(/\/request-a-quote(?:\/|\?)/)
  const restored = await page.locator('#rfq-destination_country').inputValue()
  const contactRestored = await page.locator('#rfq-company_name').inputValue()
  await page.locator('#rfq-destination_country').fill('')
  await page.goBack(); await page.goForward(); await page.waitForURL(/\/request-a-quote(?:\/|\?)/)
  const clearedRestored = await page.locator('#rfq-destination_country').inputValue()
  await page.goto(`${base}/request-a-quote/?source_page_id=MARKET-BR-${language === 'en' ? 'EN' : 'PT'}&destination_country=Brazil`, { waitUntil: 'networkidle' })
  const directFresh = await page.locator('#rfq-destination_country').inputValue()
  const draft = stateAfterEdit && stateAfterEdit.tio2MyRfqDraft
  const noContactInHistory = Boolean(draft) && !JSON.stringify(draft).includes('Gate9 ephemeral check') &&
    !Object.keys(draft.values || {}).some(k => ['company_name','contact_name','business_email','phone_whatsapp','website'].includes(k))
  record(`BR-${language.toUpperCase()} RFQ history`, fresh === 'Brazil' && restored === edited &&
    contactRestored === '' && clearedRestored === '' && directFresh === 'Brazil' && noContactInHistory,
    { fresh, restored, contactRestored, clearedRestored, directFresh, historyDraftKeys: Object.keys((draft && draft.values) || {}), sourcePageId: draft && draft.sourcePageId, noContactInHistory })
  await page.close()
}

async function inspectChloride(request) {
  const response = await request.get(`${base}/products/chloride-process-titanium-dioxide/`)
  const html = await response.text()
  const script = html.match(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)
  const graph = script ? JSON.parse(script[1])['@graph'] : []
  const webPage = graph.find(n => n['@type'] === 'WebPage')
  const list = graph.find(n => n['@type'] === 'ItemList')
  const types = graph.map(n => n['@type'])
  const forbidden = graph.filter(n => ['Product','Offer','FAQPage'].includes(n['@type']))
  const expectedId = 'https://tio2malaysia.com/products/chloride-process-titanium-dioxide/#chloride-grade-list'
  const pass = response.status() === 200 && webPage?.name === 'Chloride Process Titanium Dioxide' &&
    webPage?.publisher?.['@id'] === 'https://tio2malaysia.com/#organization' && webPage?.mainEntity?.['@id'] === expectedId &&
    list?.['@id'] === expectedId && list?.name === 'Explore Chloride-Process Grades' &&
    list?.numberOfItems === 8 && list?.itemListElement?.length === 8 && forbidden.length === 0
  record('CL JSON-LD exact contract', pass, { status: response.status(), types, webPage, itemList: list, forbiddenTypes: forbidden.map(n => n['@type']) })
}

(async () => {
  const browser = await chromium.launch({ headless: true })
  const request = await browser.newContext()
  try {
    for (const path of ['/markets/brazil/','/pt-br/markets/brazil/','/products/chloride-process-titanium-dioxide/','/documents/certificate-of-origin/']) await httpCheck(request.request, path)
    for (const path of ['/applications/','/applications/titanium-dioxide-for-coatings/','/applications/titanium-dioxide-for-plastics/','/applications/titanium-dioxide-for-masterbatch/']) await httpCheck(request.request, path)
    const visualPage = await browser.newPage()
    for (const width of [1440, 768, 390]) await inspectBrazilVisual(visualPage, width)
    await visualPage.close()
    await inspectHistory(browser, 'en')
    await inspectHistory(browser, 'pt')
    await inspectChloride(request.request)
  } finally {
    await request.close()
    await browser.close()
  }
  results.summary = {
    pass: results.checks.filter(x => x.result === 'PASS').length,
    fail: results.checks.filter(x => x.result === 'FAIL').length,
  }
  process.stdout.write(JSON.stringify(results, null, 2))
})().catch(error => { console.error(error); process.exit(1) })
