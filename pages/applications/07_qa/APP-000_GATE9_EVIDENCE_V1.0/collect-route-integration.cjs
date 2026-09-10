const { chromium } = require('D:/16Wordpress_nextjs/.worktrees/app000-gate8/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');

const base = 'http://127.0.0.1:4391';
const grades = ['m-350','m-510','m-896','m-996','m-2196','m-895','m-200','m-108','m-210','m-340','m-886','m-52','m-2377','cr-901'];
const support = ['/products/','/documents/','/markets/','/request-a-quote/'];
const consumers = [
  ['RES-TRADE-EU','/resources/eu-titanium-dioxide-anti-dumping-duty/'],
  ['RES-TRADE-UK','/resources/uk-titanium-dioxide-anti-dumping-investigation/'],
  ['RES-TRADE-IN','/resources/india-titanium-dioxide-anti-dumping-duty/'],
  ['RES-TRADE-BR','/resources/brazil-titanium-dioxide-anti-dumping-duty/'],
  ['APP-COAT','/applications/titanium-dioxide-for-coatings/'],
  ['APP-PLAS','/applications/titanium-dioxide-for-plastics/'],
  ['APP-MB','/applications/titanium-dioxide-for-masterbatch/'],
  ['APP-INK','/applications/titanium-dioxide-for-printing-inks/'],
  ['APP-PAPER','/applications/titanium-dioxide-for-paper/'],
];
const processes = [
  ['PRODUCT-PROC-CL','/products/chloride-process-titanium-dioxide/'],
  ['PRODUCT-PROC-SU','/products/sulfate-process-titanium-dioxide/'],
];

async function inspect(page, id, route) {
  const response = await page.goto(`${base}${route}`, {waitUntil:'domcontentloaded', timeout:15000});
  const canonicalNode = page.locator('link[rel="canonical"]');
  return {
    id,
    route,
    status: response?.status(),
    finalUrl: page.url(),
    title: await page.title(),
    h1: await page.locator('h1').allTextContents(),
    lang: await page.locator('html').getAttribute('lang'),
    canonical: await canonicalNode.count() ? await canonicalNode.first().getAttribute('href') : null,
    applicationsLinks: await page.locator('a[href="/applications/"],a[href="/applications"]').evaluateAll((links) => links.map((node) => ({text: node.textContent.trim().replace(/\s+/g,' '), href: node.getAttribute('href'), current: node.getAttribute('aria-current')}))),
  };
}

(async () => {
  const result = {checkedAt:new Date().toISOString(), base, grades:[], support:[], consumers:[], processes:[], chlorideInteraction:null, appShared:null};
  const browser = await chromium.launch({headless:true});
  const context = await browser.newContext({viewport:{width:1440,height:1000}});
  const page = await context.newPage();

  for (const grade of grades) result.grades.push(await inspect(page, grade.toUpperCase(), `/products/${grade}/`));
  for (const route of support) result.support.push(await inspect(page, route, route));
  for (const [id, route] of consumers) result.consumers.push(await inspect(page, id, route));
  for (const [id, route] of processes) result.processes.push(await inspect(page, id, route));

  await page.goto(`${base}/products/chloride-process-titanium-dioxide/`, {waitUntil:'networkidle'});
  const before = {url:page.url(), title:await page.title(), h1:await page.locator('h1').innerText(), current:await page.locator('nav[aria-label="Primary navigation"] a[aria-current="page"]').allTextContents()};
  const explore = page.getByRole('link',{name:'Explore Applications',exact:true});
  const count = await explore.count();
  await explore.focus();
  await explore.press('Enter');
  await page.waitForURL('**/applications');
  const destination = {url:page.url(), title:await page.title(), h1:await page.locator('h1').innerText(), canonical:await page.locator('link[rel="canonical"]').getAttribute('href'), lang:await page.locator('html').getAttribute('lang')};
  await page.goBack({waitUntil:'networkidle'});
  const afterBack = {url:page.url(), title:await page.title(), h1:await page.locator('h1').innerText(), current:await page.locator('nav[aria-label="Primary navigation"] a[aria-current="page"]').allTextContents()};
  result.chlorideInteraction={count,before,destination,afterBack};

  await page.goto(`${base}/applications/`,{waitUntil:'networkidle'});
  result.appShared = await page.evaluate(() => ({
    primary:[...document.querySelectorAll('nav[aria-label="Primary navigation"] a')].map((node)=>({text:node.textContent.trim(),href:node.getAttribute('href'),current:node.getAttribute('aria-current')})),
    footerExplore:[...document.querySelectorAll('nav[aria-label="Footer explore navigation"] a')].map((node)=>({text:node.textContent.trim(),href:node.getAttribute('href')})),
    footerInformation:[...document.querySelectorAll('nav[aria-label="Footer information navigation"] a')].map((node)=>({text:node.textContent.trim(),href:node.getAttribute('href')})),
    legal:[...document.querySelectorAll('nav[aria-label="Legal and privacy navigation"] a,nav[aria-label="Legal and privacy navigation"] button')].map((node)=>({tag:node.tagName,text:node.textContent.trim(),href:node.getAttribute('href')})),
    breadcrumb:[...document.querySelectorAll('nav[aria-label="Breadcrumb"] a,nav[aria-label="Breadcrumb"] [aria-current="page"]')].map((node)=>({tag:node.tagName,text:node.textContent.trim(),href:node.getAttribute('href')})),
    contactTerms:[...document.querySelectorAll('header a,footer a')].filter((node)=>/^(Contact|Terms)$/i.test(node.textContent.trim())).map((node)=>node.textContent.trim()),
  }));

  await context.close();
  await browser.close();
  fs.writeFileSync(path.join(__dirname,'independent-route-integration.json'),`${JSON.stringify(result,null,2)}\n`);
})().catch((error)=>{fs.writeFileSync(path.join(__dirname,'route-integration-error.txt'),`${error.stack||error}\n`);process.exitCode=1});
