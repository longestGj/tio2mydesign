const {chromium, firefox} = require('D:/16Wordpress_nextjs/.worktrees/app000-gate8/node_modules/playwright');
const fs = require('node:fs');
const path = require('node:path');

const base = 'http://127.0.0.1:4391';
const cms = 'http://127.0.0.1:4390/graphql';
const receiver = 'http://127.0.0.1:4392';
const expectedCategories = ['Coatings','Plastics','Masterbatch','Printing Inks','Paper','Specialty Materials'];
const expectedSupport = [
  {name:'Explore Products',href:'/products/'},
  {name:'Review Documents',href:'/documents/'},
  {name:'Explore Markets',href:'/markets/'},
];
const internalPatterns = {
  appPageId:/APP-000/gu,
  siteScope:/tio2-my/gu,
  edgeId:/APP000-EDGE-[A-Z0-9-]+/gu,
  productPageId:/PRODUCT-000/gu,
  documentPageId:/DOC-000/gu,
  marketPageId:/MARKET-000/gu,
  rfqPageId:/CONV-RFQ/gu,
  sourcePageSnake:/source_page_id/gu,
  sourcePageCamel:/sourcePageId/gu,
  currentPage:/currentPageId/gu,
  targetPage:/targetPageId/gu,
  siteScopeField:/siteScope/gu,
  routeReadiness:/routeReadiness/gu,
  gradeOccurrence:/gradeOccurrence/gu,
  releaseControls:/releaseControls/gu,
  reviewId:/reviewId/gu,
};
function scan(text) {
  return Object.fromEntries(Object.entries(internalPatterns).map(([name,re]) => {
    const values = [...text.matchAll(re)].map((m)=>m[0]);
    return [name,{count:values.length,examples:[...new Set(values)].slice(0,5)}];
  }));
}
function textHasHits(scanResult) { return Object.values(scanResult).some((v)=>v.count>0); }

(async()=>{
  const report = {
    checkedAt:new Date().toISOString(),
    candidate:{implementation:'0144b303d0546dc5bb7012e4292df6339f851b78',evidenceHead:'87f48dc6eb0489ab26822280918dd0248efe6e05',buildId:'cD6FOWG8iVMbgeRxyIqIS'},
    publicProjection:{}, browsers:{}, sharedRegression:{}, privateRfq:null, cms:null, integration:null, chlorideInteraction:null,
    nonClaims:['physical touch','native browser 200% zoom','named screen reader/AT'],
  };

  const htmlResponse = await fetch(`${base}/applications/`);
  const html = await htmlResponse.text();
  fs.writeFileSync(path.join(__dirname,'public-html-response.html'),html);
  const rscState = encodeURIComponent(JSON.stringify(['',{children:['applications',{children:['__PAGE__',{},null,null]}]},null,null,true]));
  const rscResponse = await fetch(`${base}/applications/`,{headers:{RSC:'1','Next-Router-State-Tree':rscState,'Next-Url':'/applications'}});
  const rsc = await rscResponse.text();
  fs.writeFileSync(path.join(__dirname,'public-rsc-response.txt'),rsc);
  const htmlScan=scan(html), rscScan=scan(rsc);
  const publicBrandAssetPattern=/\/tio2-my\/brand\/[A-Za-z0-9._/-]+/gu;
  const htmlAllowedBrandAssets=[...html.matchAll(publicBrandAssetPattern)].map((m)=>m[0]);
  const rscAllowedBrandAssets=[...rsc.matchAll(publicBrandAssetPattern)].map((m)=>m[0]);
  const htmlClassifiedScan=scan(html.replace(publicBrandAssetPattern,'[APPROVED_PUBLIC_BRAND_ASSET]'));
  const rscClassifiedScan=scan(rsc.replace(publicBrandAssetPattern,'[APPROVED_PUBLIC_BRAND_ASSET]'));
  report.publicProjection={
    classificationRule:'Public /tio2-my/brand/* asset URLs are approved URL namespaces, not serialized site-scope control fields.',
    html:{status:htmlResponse.status,url:htmlResponse.url,bytes:Buffer.byteLength(html),contentType:htmlResponse.headers.get('content-type'),broadScan:htmlScan,allowedBrandAssets:[...new Set(htmlAllowedBrandAssets)],controlScan:htmlClassifiedScan,hasControlIdentifierHits:textHasHits(htmlClassifiedScan)},
    rsc:{status:rscResponse.status,url:rscResponse.url,bytes:Buffer.byteLength(rsc),contentType:rscResponse.headers.get('content-type'),broadScan:rscScan,allowedBrandAssets:[...new Set(rscAllowedBrandAssets)],controlScan:rscClassifiedScan,hasControlIdentifierHits:textHasHits(rscClassifiedScan)},
    htmlDataInternalAttributeMatches:[...html.matchAll(/data-(?:site|source|grade-occurrence|support-action|application-action)[^=\s]*=/gu)].map((m)=>m[0]),
  };

  const cmsResponse=await fetch(cms,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({query:'query Gate9TargetedRecheck { malaysiaApplicationHubRecordJson }'})});
  const cmsOuter=await cmsResponse.json();
  const record=JSON.parse(cmsOuter.data.malaysiaApplicationHubRecordJson);
  const contract=JSON.parse(record.malaysiaApplicationHubContractJson);
  const contractText=JSON.stringify(contract);
  const edgeIds=[...contractText.matchAll(/APP000-EDGE-[A-Z0-9-]+/gu)].map((m)=>m[0]);
  report.cms={status:cmsResponse.status,mode:'LOCAL_SIMULATION_SCOPED_PROXY',record:{status:record.status,scope:record.siteScopes?.nodes?.[0]?.slug,publicPath:record.publishingFields?.publicPath},edgeIds:{count:edgeIds.length,uniqueCount:new Set(edgeIds).size,last:edgeIds.at(-1),approvedSpecCount:edgeIds.filter((x)=>x==='APP000-EDGE-SPEC-01').length,wrongSpecialtyCount:edgeIds.filter((x)=>x==='APP000-EDGE-SPECIALTY-01').length}};

  for (const [browserName,browserType] of Object.entries({chromium,firefox})) {
    report.browsers[browserName]=[];
    const browser=await browserType.launch({headless:true});
    for (const viewport of [{name:'desktop-1440',width:1440,height:1000},{name:'tablet-768',width:768,height:1024},{name:'mobile-390',width:390,height:844}]) {
      const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},reducedMotion:'reduce'});
      const page=await context.newPage();
      const response=await page.goto(`${base}/applications/`,{waitUntil:'networkidle'});
      await page.waitForTimeout(100);
      const detailLocator=page.locator('main details');
      const defaultOpen=await detailLocator.evaluateAll((nodes)=>nodes.map((node)=>node.open));
      const accessible=[];
      for (const name of expectedCategories) {
        const links=page.getByRole('link',{name,exact:true});
        accessible.push({kind:'category',name,count:await links.count(),hrefs:await links.evaluateAll((nodes)=>nodes.map((n)=>n.getAttribute('href')))});
      }
      for (const item of expectedSupport) {
        const links=page.getByRole('link',{name:item.name,exact:true});
        accessible.push({kind:'support',name:item.name,count:await links.count(),hrefs:await links.evaluateAll((nodes)=>nodes.map((n)=>n.getAttribute('href'))),expectedHref:item.href});
      }
      const facts=await page.evaluate(()=>({
        title:document.title,lang:document.documentElement.lang,canonical:document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
        h1:[...document.querySelectorAll('h1')].map((n)=>n.textContent.trim()),gradeLinks:document.querySelectorAll('main a[href^="/products/"]').length,
        childActions:document.querySelectorAll('[data-application-action]').length,
        internalAttributes:[...document.querySelectorAll('*')].flatMap((n)=>[...n.attributes].filter((a)=>/^data-(?:site|source|grade-occurrence|support-action|application-action)/u.test(a.name)).map((a)=>({tag:n.tagName,name:a.name,value:a.value}))),
        accessibleSurface:[...document.querySelectorAll('[aria-label],[alt],[title]')].map((n)=>({tag:n.tagName,ariaLabel:n.getAttribute('aria-label'),alt:n.getAttribute('alt'),title:n.getAttribute('title')})),
        bodyText:document.body.innerText,
        navCurrent:[...document.querySelectorAll('nav[aria-label="Primary navigation"] [aria-current="page"]')].map((n)=>n.textContent.trim()),
        contactTerms:[...document.querySelectorAll('header a,footer a')].filter((n)=>/^(Contact|Terms)$/iu.test(n.textContent.trim())).map((n)=>n.textContent.trim()),
        overflow:{clientWidth:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth},
      }));
      let mobileAfter=null;
      if (viewport.width===390) {
        await page.screenshot({path:path.join(__dirname,`${browserName}-${viewport.name}-default.png`),fullPage:true});
        const summaries=page.locator('main details summary');
        await summaries.nth(0).click();
        await summaries.nth(1).focus(); await summaries.nth(1).press('Enter');
        mobileAfter=await detailLocator.evaluateAll((nodes)=>nodes.map((node)=>node.open));
        await page.screenshot({path:path.join(__dirname,`${browserName}-${viewport.name}-expanded.png`),fullPage:true});
      } else {
        await page.screenshot({path:path.join(__dirname,`${browserName}-${viewport.name}.png`),fullPage:true});
      }
      report.browsers[browserName].push({viewport,status:response?.status(),defaultOpen,mobileAfter,accessible,facts:{...facts,bodyTextInternalScan:scan(facts.bodyText),accessibleAttributesInternalScan:scan(JSON.stringify(facts.accessibleSurface))}});
      await context.close();
    }
    const sharedContext=await browser.newContext({viewport:{width:390,height:844}});
    const sharedPage=await sharedContext.newPage();
    await sharedPage.goto(`${base}/applications/`,{waitUntil:'networkidle'});
    const menuButton=sharedPage.getByRole('button',{name:'Open primary navigation',exact:true});
    await menuButton.focus(); await menuButton.press('Enter');
    const menuDialog=sharedPage.getByRole('dialog',{name:'Primary navigation menu',exact:true});
    await menuDialog.waitFor({state:'visible'});
    const menuState={
      dialogCount:await menuDialog.count(),
      applicationsCurrent:await menuDialog.locator('a[aria-current="page"]').allTextContents(),
      links:await menuDialog.locator('a').evaluateAll((nodes)=>nodes.map((n)=>({text:n.textContent.trim().replace(/\s+/g,' '),href:n.getAttribute('href'),current:n.getAttribute('aria-current')}))),
    };
    await sharedPage.keyboard.press('Escape');
    menuState.closedAfterEscape=await menuDialog.count()===0;
    menuState.focusReturned=await menuButton.evaluate((node)=>document.activeElement===node);
    const cookieButton=sharedPage.getByRole('button',{name:'Cookie Settings',exact:true});
    await cookieButton.focus(); await cookieButton.press('Enter');
    const cookieDialog=sharedPage.getByRole('dialog');
    await cookieDialog.waitFor({state:'visible'});
    const cookieState={dialogCount:await cookieDialog.count(),heading:await cookieDialog.locator('h1,h2,h3').allTextContents(),buttons:await cookieDialog.getByRole('button').allTextContents()};
    await sharedPage.keyboard.press('Escape');
    cookieState.closedAfterEscape=await cookieDialog.count()===0;
    cookieState.focusReturned=await cookieButton.evaluate((node)=>document.activeElement===node);
    report.sharedRegression[browserName]={
      menu:menuState,cookie:cookieState,
      breadcrumb:await sharedPage.locator('nav[aria-label="Breadcrumb"] a,nav[aria-label="Breadcrumb"] [aria-current="page"]').evaluateAll((nodes)=>nodes.map((n)=>({text:n.textContent.trim(),href:n.getAttribute('href'),current:n.getAttribute('aria-current')}))),
      footerLegal:await sharedPage.locator('nav[aria-label="Legal and privacy navigation"] a,nav[aria-label="Legal and privacy navigation"] button').evaluateAll((nodes)=>nodes.map((n)=>({tag:n.tagName,text:n.textContent.trim(),href:n.getAttribute('href')}))),
    };
    await sharedContext.close();
    await browser.close();
  }

  await fetch(`${receiver}/reset`,{method:'POST'});
  const browser=await chromium.launch({headless:true});
  const context=await browser.newContext({viewport:{width:1440,height:1000}});
  const page=await context.newPage();
  const attributionResponses=[];
  page.on('response',(response)=>{if(response.url().includes('/api/tio2-my/rfq-attribution')) attributionResponses.push({url:response.url(),status:response.status(),contentType:response.headers()['content-type']??null});});
  await page.goto(`${base}/applications/`,{waitUntil:'networkidle'});
  await page.getByRole('link',{name:'Request a Quote',exact:true}).first().click();
  await page.waitForURL('**/request-a-quote');
  const cookiesBeforeSubmit=await context.cookies();
  const grade=page.locator('[name="grade_id"]'), application=page.locator('[name="application_id"]');
  const receiverPayload={grade_id:'M-350',application_id:'Coatings',quantity_mt:'12',destination_country:'Malaysia',destination_port_city:'',company_name:'Gate 9 Local Simulation',contact_name:'Gate 9 Reviewer',business_email:'gate9-review@example.com',phone_whatsapp:'',website:'',additional_requirements:''};
  const submission=await context.request.post(`${base}/api/tio2-my/rfq-private-submit`,{data:receiverPayload});
  const submissionText=await submission.text();
  const captureResponse=await fetch(`${receiver}/capture`); const capture=await captureResponse.json();
  const cookiesAfterSubmit=await context.cookies();
  report.privateRfq={
    attributionResponses,cleanUrl:page.url(),search:new URL(page.url()).search,
    gradeValue:await grade.inputValue(),applicationValue:await application.inputValue(),
    cookieBeforeSubmit:cookiesBeforeSubmit.filter((c)=>c.name==='my_rfq_context').map((c)=>({name:c.name,httpOnly:c.httpOnly,sameSite:c.sameSite,secure:c.secure,path:c.path,valueLength:c.value.length,valueContainsPageId:c.value.includes('APP-000')})),
    syntheticLocalReceiver:{performed:true,externalReceiver:false,submissionStatus:submission.status(),submissionResponse:submissionText,capturedPayload:capture.payload,accessKeyCaptured:Object.hasOwn(capture.payload??{},'access_key'),sourcePageId:capture.payload?.source_page_id??null},
    cookieAfterSubmit:cookiesAfterSubmit.filter((c)=>c.name==='my_rfq_context'),
  };
  await context.close(); await browser.close();

  const consumers=[
    ['RES-TRADE-EU','/resources/eu-titanium-dioxide-anti-dumping-duty/'],['RES-TRADE-UK','/resources/uk-titanium-dioxide-anti-dumping-investigation/'],['RES-TRADE-IN','/resources/india-titanium-dioxide-anti-dumping-duty/'],['RES-TRADE-BR','/resources/brazil-titanium-dioxide-anti-dumping-duty/'],
    ['APP-COAT','/applications/titanium-dioxide-for-coatings/'],['APP-PLAS','/applications/titanium-dioxide-for-plastics/'],['APP-MB','/applications/titanium-dioxide-for-masterbatch/'],['APP-INK','/applications/titanium-dioxide-for-printing-inks/'],['APP-PAPER','/applications/titanium-dioxide-for-paper/'],
    ['PRODUCT-PROC-CL','/products/chloride-process-titanium-dioxide/'],['PRODUCT-PROC-SU','/products/sulfate-process-titanium-dioxide/'],
  ];
  const integration=[];
  for(const [id,route] of consumers){const response=await fetch(base+route);integration.push({id,route,status:response.status,finalUrl:response.url});}
  report.integration=integration;
  const clBrowser=await chromium.launch({headless:true});
  const clContext=await clBrowser.newContext({viewport:{width:1440,height:1000}});
  const clPage=await clContext.newPage();
  await clPage.goto(`${base}/products/chloride-process-titanium-dioxide/`,{waitUntil:'networkidle'});
  const clAction=clPage.getByRole('link',{name:'Explore Applications',exact:true});
  const before={url:clPage.url(),h1:await clPage.locator('h1').allTextContents(),current:await clPage.locator('nav[aria-label="Primary navigation"] [aria-current="page"]').allTextContents(),count:await clAction.count(),href:await clAction.getAttribute('href')};
  await clAction.focus(); await clAction.press('Enter'); await clPage.waitForURL('**/applications');
  const destination={url:clPage.url(),h1:await clPage.locator('h1').allTextContents(),canonical:await clPage.locator('link[rel="canonical"]').getAttribute('href'),lang:await clPage.locator('html').getAttribute('lang')};
  await clPage.goBack({waitUntil:'networkidle'});
  const afterBack={url:clPage.url(),h1:await clPage.locator('h1').allTextContents(),current:await clPage.locator('nav[aria-label="Primary navigation"] [aria-current="page"]').allTextContents()};
  report.chlorideInteraction={before,destination,afterBack};
  await clContext.close(); await clBrowser.close();
  fs.writeFileSync(path.join(__dirname,'independent-targeted-recheck.json'),JSON.stringify(report,null,2)+'\n');
})().catch((error)=>{fs.writeFileSync(path.join(__dirname,'collection-error.txt'),String(error.stack||error)+'\n');process.exitCode=1});
