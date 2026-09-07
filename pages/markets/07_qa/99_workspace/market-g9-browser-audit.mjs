import {createRequire} from 'node:module'

const require = createRequire('file:///D:/16Wordpress_nextjs/.worktrees/home-001-tio2-my/package.json')
const {chromium} = require('@playwright/test')
const AxeBuilder = require('@axe-core/playwright').default

const browser = await chromium.launch({headless: true})
const widths = [320, 390, 768, 1440]
const expectedModules = [
  'breadcrumb',
  'hero',
  'destination-market',
  'how-to-choose',
  'next-procurement-check',
  'current-information',
  'buyer-questions',
]
const results = []
let failures = 0

for (const width of widths) {
  const context = await browser.newContext({
    viewport: {width, height: width <= 390 ? 844 : 1000},
    reducedMotion: 'reduce',
  })
  const page = await context.newPage()
  const consoleErrors = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })
  const response = await page.goto('http://127.0.0.1:3004/markets/', {waitUntil: 'load'})
  const metrics = await page.evaluate(() => {
    const visible = (element) => {
      const rect = element.getBoundingClientRect()
      const style = getComputedStyle(element)
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0
    }
    const targets = [...document.querySelectorAll('a,button')].filter(visible)
    const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')]
      .map((element) => JSON.parse(element.textContent || '{}'))
    const graph = schemas[0]?.['@graph'] || []
    return {
      h1Count: document.querySelectorAll('h1').length,
      h1: document.querySelector('h1')?.textContent?.trim(),
      modules: [...document.querySelectorAll('[data-module]')].map((element) => element.getAttribute('data-module')),
      marketActions: document.querySelectorAll('a[data-market-action]').length,
      buyerAnswers: document.querySelectorAll('[data-module="buyer-questions"] article p').length,
      bodyRfq: document.querySelectorAll('main a[href="/request-a-quote/"]').length,
      chromeRfq: document.querySelectorAll('header a[href="/request-a-quote/"],footer a[href="/request-a-quote/"]').length,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      smallTargets: targets.filter((element) => {
        const rect = element.getBoundingClientRect()
        return rect.width < 44 || rect.height < 44
      }).length,
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content'),
      hreflangCount: document.querySelectorAll('link[hreflang]').length,
      schemaTypes: graph.map((node) => node['@type']),
      itemListCount: graph.find((node) => node['@type'] === 'ItemList')?.numberOfItems,
      ptbrVisible: document.body.innerText.includes('PT-BR') || document.body.innerText.includes('Português'),
      tradeSpecificVisible: [...document.querySelectorAll('a')]
        .some((anchor) => (anchor.getAttribute('href') || '').includes('anti-dumping')),
    }
  })

  const checks = {
    http200: response?.status() === 200,
    oneH1: metrics.h1Count === 1 && metrics.h1 === 'Choose Your Destination Market',
    moduleOrder: JSON.stringify(metrics.modules) === JSON.stringify(expectedModules),
    tenMarketActions: metrics.marketActions === 10,
    sixBuyerAnswers: metrics.buyerAnswers === 6,
    bodyRfqAbsent: metrics.bodyRfq === 0,
    chromeRfqFixed: metrics.chromeRfq === 3,
    noOverflow: metrics.scrollWidth === metrics.clientWidth,
    targetSize: metrics.smallTargets === 0,
    canonical: metrics.canonical === 'https://tio2malaysia.com/markets/',
    robots: metrics.robots === 'noindex, nofollow',
    noHreflang: metrics.hreflangCount === 0,
    schema: JSON.stringify(metrics.schemaTypes) === JSON.stringify(['CollectionPage', 'BreadcrumbList', 'ItemList']) && metrics.itemListCount === 10,
    ptbrHidden: !metrics.ptbrVisible,
    tradeSpecificHidden: !metrics.tradeSpecificVisible,
  }

  let keyboard = null
  if (width <= 768) {
    const menu = page.getByRole('button', {name: 'Open primary navigation'})
    await menu.click()
    const links = page.locator('#malaysia-mobile-menu a')
    keyboard = {
      firstFocused: await links.first().evaluate((element) => document.activeElement === element),
    }
    await page.keyboard.press('Tab')
    keyboard.tabForward = await links.nth(1).evaluate((element) => document.activeElement === element)
    await page.keyboard.press('Shift+Tab')
    keyboard.shiftTabBack = await links.first().evaluate((element) => document.activeElement === element)
    await page.keyboard.press('Escape')
    keyboard.escapeReturns = await menu.evaluate((element) => document.activeElement === element)
    Object.assign(checks, {
      firstFocused: keyboard.firstFocused,
      tabForward: keyboard.tabForward,
      shiftTabBack: keyboard.shiftTabBack,
      escapeReturns: keyboard.escapeReturns,
    })
  }

  const axe = await new AxeBuilder({page}).analyze()
  const severeAxe = axe.violations.filter(({impact}) => impact === 'serious' || impact === 'critical')
  checks.axe = severeAxe.length === 0
  checks.console = consoleErrors.length === 0

  const failedChecks = Object.entries(checks).filter(([, passed]) => !passed).map(([name]) => name)
  failures += failedChecks.length
  results.push({
    width,
    checks,
    failedChecks,
    keyboard,
    severeAxe: severeAxe.map(({id, impact}) => ({id, impact})),
    consoleErrors,
    metrics,
  })
  await context.close()
}

await browser.close()
console.log(JSON.stringify({summary: {viewports: widths.length, failures}, results}, null, 2))
if (failures) process.exit(1)
