const {chromium} = require('D:/16Wordpress_nextjs/.worktrees/app000-gate8/node_modules/playwright');
const fs=require('node:fs'); const path=require('node:path'); const crypto=require('node:crypto');
const base='http://127.0.0.1:4391';
const markers=[
  'APP-000','GLOBAL-CHROME-005','TIO2MY-PRODUCTION-SVG-LOGO-MANIFEST-01','LEGAL-PRIVACY-G7-HANDOFF-01',
  'APP000-EDGE-','PRODUCT-000','DOC-000','MARKET-000','CONV-RFQ','data-site-scope','data-source-page',
  'source_page_id','sourcePageId','targetPageId','currentPageId','siteScope','routeReadiness','reviewId','releaseControls','packageId','contractId'
];
const hash=(s)=>crypto.createHash('sha256').update(s).digest('hex');
function scan(text){return markers.flatMap((marker)=>{const positions=[];let at=text.indexOf(marker);while(at>=0){positions.push(at);at=text.indexOf(marker,at+marker.length)};return positions.length?[{marker,count:positions.length,contexts:positions.slice(0,3).map((i)=>text.slice(Math.max(0,i-80),Math.min(text.length,i+marker.length+120)))}]:[]})}
function scripts(html){return [...new Set([...html.matchAll(/<script[^>]+src="([^"]+)"/gu)].map((m)=>m[1]))]}
async function fetchSurface(url,options,file){const response=await fetch(url,options);const text=await response.text();if(file)fs.writeFileSync(path.join(__dirname,file),text);return{status:response.status,url:response.url,contentType:response.headers.get('content-type'),bytes:Buffer.byteLength(text),sha256:hash(text),matches:scan(text),text}}
async function fetchScripts(srcs,prefix){const out=[];for(const src of srcs){const item=await fetchSurface(new URL(src,base));fs.writeFileSync(path.join(__dirname,`${prefix}-${path.basename(new URL(src,base).pathname)}`),item.text);delete item.text;out.push({src,...item})}return out}
(async()=>{
  const result={checkedAt:new Date().toISOString(),candidate:{implementation:'0144b303d0546dc5bb7012e4292df6339f851b78',evidenceHead:'87f48dc6eb0489ab26822280918dd0248efe6e05',buildId:'cD6FOWG8iVMbgeRxyIqIS'},applications:{},rfq:{}};
  const app=await fetchSurface(`${base}/applications/`,undefined,'deep-applications.html');
  const appSrcs=scripts(app.text); const appScripts=await fetchScripts(appSrcs,'app-script');
  result.applications={html:{...app,text:undefined},scriptCount:appSrcs.length,scripts:appScripts};

  const browser=await chromium.launch({headless:true});const context=await browser.newContext({viewport:{width:1440,height:1000}});const page=await context.newPage();
  const attribution=[];page.on('response',(r)=>{if(r.url().includes('/api/tio2-my/rfq-attribution'))attribution.push({url:r.url(),status:r.status(),contentType:r.headers()['content-type']??null,body:''})});
  await page.goto(`${base}/applications/`,{waitUntil:'networkidle'});await page.getByRole('link',{name:'Request a Quote',exact:true}).first().click();await page.waitForURL('**/request-a-quote');await page.waitForLoadState('networkidle');
  const dom=await page.content();fs.writeFileSync(path.join(__dirname,'deep-rfq-dom.html'),dom);
  const cookies=await context.cookies();
  const rawResponse=await context.request.get(`${base}/request-a-quote/`);const raw=await rawResponse.text();fs.writeFileSync(path.join(__dirname,'deep-rfq-html.html'),raw);
  const state=encodeURIComponent(JSON.stringify(['',{children:['request-a-quote',{children:['__PAGE__',{},null,null]}]},null,null,true]));
  const rscResponse=await context.request.get(`${base}/request-a-quote/`,{headers:{RSC:'1','Next-Router-State-Tree':state,'Next-Url':'/request-a-quote'}});const rsc=await rscResponse.text();fs.writeFileSync(path.join(__dirname,'deep-rfq-rsc.txt'),rsc);
  const rfqSrcs=scripts(raw);const rfqScripts=await fetchScripts(rfqSrcs,'rfq-script');
  result.rfq={
    url:page.url(),query:new URL(page.url()).search,fragment:new URL(page.url()).hash,
    attribution:attribution.map((x)=>({...x,bodyBytes:Buffer.byteLength(x.body),bodyMatches:scan(x.body)})),
    cookie:cookies.filter((c)=>c.name==='my_rfq_context').map((c)=>({name:c.name,httpOnly:c.httpOnly,sameSite:c.sameSite,valueLength:c.value.length,valueMatches:scan(c.value)})),
    dom:{bytes:Buffer.byteLength(dom),sha256:hash(dom),matches:scan(dom)},
    html:{status:rawResponse.status(),bytes:Buffer.byteLength(raw),sha256:hash(raw),matches:scan(raw)},
    rsc:{status:rscResponse.status(),bytes:Buffer.byteLength(rsc),sha256:hash(rsc),matches:scan(rsc)},
    scripts:rfqScripts,
    grade:await page.locator('[name="grade_id"]').inputValue(),application:await page.locator('[name="application_id"]').inputValue(),
  };
  await context.close();await browser.close();
  fs.writeFileSync(path.join(__dirname,'independent-public-surface-deep-scan.json'),JSON.stringify(result,null,2)+'\n');
})().catch((error)=>{fs.writeFileSync(path.join(__dirname,'deep-scan-error.txt'),String(error.stack||error)+'\n');process.exitCode=1});
