const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = 'D:/23MySec';
const oldDir = path.join(root, 'pages/applications/coatings/04_planning/gate4-v0.1');
const newDir = path.join(root, 'pages/applications/coatings/04_planning/gate4-v0.2');
const source = path.join(oldDir, 'APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html');
const css = path.join(oldDir, 'visual-direction.css');
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity = p => ({ path: p.replaceAll('\\','/'), bytes: fs.statSync(p).size, sha256: sha(p) });
const linear = n => { n /= 255; return n <= .04045 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4; };
const luminance = rgb => .2126 * linear(rgb[0]) + .7152 * linear(rgb[1]) + .0722 * linear(rgb[2]);
const contrast = (a,b) => (Math.max(luminance(a),luminance(b))+.05)/(Math.min(luminance(a),luminance(b))+.05);
const parseRgb = s => (s.match(/\d+/g)||[]).slice(0,3).map(Number);
const expected = {
  source: { bytes: 33997, sha256: 'a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2' },
  css: { bytes: 6196, sha256: 'f4c2e703345cb3eae1221937ff63b61b3742c6f2da6ccf9c1f3da730db67ca8c' },
  fullHeights: { 1440: 10070, 768: 11531, 390: 17825 },
  h2: ['Define the coating before comparing the Grade','Read optical results in the prepared film','Keep dispersion, rheology and appearance separate','Use surface-treatment information to frame durability questions','Compare every endpoint on a declared basis','Compare cost only at an equal technical endpoint','Grades to Review','Prepare the next request','Technical sources'],
  grades: ['M-350','M-510','M-896','M-996','M-2196','M-895','M-52','M-2377'],
  requests: ['/request-documents/','/request-sample/','/request-a-quote/'],
};

(async()=>{
  const cssText = fs.readFileSync(css,'utf8');
  const sourceBefore = identity(source), cssBefore = identity(css);
  const browser = await chromium.launch({ headless:true });
  const result = {
    page_id:'APP-COAT', workset_id:'COAT-G4-COMPLETE-V02', freeze_id:'COAT-G4-COMPLETE-V02-F01',
    finding_response:'COAT-G4-IR-01-R1', generated_at:new Date().toISOString(),
    renderer:{ browser:await browser.version(), node:process.version, dpr:1, headless:true, network:'HTTP(S) blocked; local file rendering' },
    sourceInheritance:{ before:{source:sourceBefore,css:cssBefore}, expected, cssAssertions:{ token:/--coat-teal:#007f77/i.test(cssText), primaryHover:/\.primaryAction:hover\{color:#fff;background:var\(--coat-teal\)/i.test(cssText), stalePrimaryRule:/\.primaryAction:hover[^}]*#f5f8fb/i.test(cssText) } },
    calculations:{ whiteOn007F77:contrast([255,255,255],[0,127,119]), tealOnF5F8FB:contrast([0,127,119],[245,248,251]) },
    widths:{}, pageErrors:[], consoleErrors:[], externalRequests:[], checks:[]
  };
  const viewports=[{width:1440,height:900},{width:768,height:900},{width:390,height:844}];
  for(const vp of viewports){
    const context=await browser.newContext({viewport:vp,deviceScaleFactor:1,reducedMotion:'reduce'});
    const page=await context.newPage();
    page.on('pageerror',e=>result.pageErrors.push({width:vp.width,message:e.message}));
    page.on('console',m=>{if(m.type()==='error')result.consoleErrors.push({width:vp.width,message:m.text()})});
    await page.route(/^https?:\/\//,route=>{result.externalRequests.push({width:vp.width,url:route.request().url()});route.abort()});
    await page.goto(pathToFileURL(source).href,{waitUntil:'load'});
    await page.evaluate(()=>document.fonts.ready);
    const target=page.locator('.heroActions .primaryAction');
    const normal=await target.evaluate(el=>{const s=getComputedStyle(el),r=el.getBoundingClientRect();return{fg:s.color,bg:s.backgroundColor,width:r.width,height:r.height,x:r.x,y:r.y,textDecoration:s.textDecorationLine}});
    await target.hover();
    const hover=await target.evaluate(el=>{const s=getComputedStyle(el),r=el.getBoundingClientRect();return{fg:s.color,bg:s.backgroundColor,width:r.width,height:r.height,x:r.x,y:r.y,textDecoration:s.textDecorationLine}});
    hover.textContrast=contrast(parseRgb(hover.fg),parseRgb(hover.bg));
    hover.geometryStable=['width','height','x','y'].every(k=>Math.abs(normal[k]-hover[k])<.1);
    const hoverPath=path.join(newDir,'approval_core',`${vp.width}-primary-cta-hover.png`);
    await page.locator('.heroActions').screenshot({path:hoverPath});
    await page.mouse.move(0,0);
    const pageData=await page.evaluate(()=>{
      const modules=[...document.querySelectorAll('main>section')].map(s=>({id:s.id,className:s.className,heading:s.querySelector('h1,h2')?.textContent.trim()}));
      const controls=[...document.querySelectorAll('a,button')].filter(el=>{const s=getComputedStyle(el),r=el.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0}).map(el=>{const r=el.getBoundingClientRect();return{text:el.textContent.trim().replace(/\s+/g,' '),href:el.getAttribute('href'),width:r.width,height:r.height}});
      const gradeRows=[...document.querySelectorAll('.grades tbody tr')].map(r=>r.cells[0].textContent.trim());
      const requestLinks=[...document.querySelectorAll('.requestCards a')].map(a=>a.getAttribute('href'));
      const main=document.querySelector('main');
      return {fullHeight:document.documentElement.scrollHeight,scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,bodyScrollWidth:document.body.scrollWidth,h1:[...document.querySelectorAll('main h1')].map(x=>x.textContent.trim()),h2:[...document.querySelectorAll('main h2')].map(x=>x.textContent.trim()),modules,gradeRows,requestLinks,sources:document.querySelectorAll('.sources li').length,controls,below44:controls.filter(x=>x.width<44||x.height<44),visibleCurrentWord:[...document.querySelectorAll('body *')].some(e=>[...e.childNodes].some(n=>n.nodeType===3&&/\bCURRENT\b/.test(n.textContent))),terms:document.querySelectorAll('a[href*="terms"]').length,mainTextHash:null,mainHtml:main.innerHTML};
    });
    pageData.mainTextHash=crypto.createHash('sha256').update(pageData.mainHtml).digest('hex'); delete pageData.mainHtml;
    await page.evaluate(()=>scrollTo(0,0));
    const fullPath=path.join(newDir,'diagnostic_support/full-page-regression',`${vp.width}-full.png`);
    await page.locator('html').screenshot({path:fullPath});
    result.widths[vp.width]={viewport:vp,normal,hover,page:pageData,images:{hover:identity(hoverPath),full:identity(fullPath)}};
    await context.close();
  }
  await browser.close();
  result.sourceInheritance.after={source:identity(source),css:identity(css)};
  const add=(id,pass,detail)=>result.checks.push({id,pass:Boolean(pass),detail});
  add('COAT-R2-SOURCE-01',sourceBefore.bytes===expected.source.bytes&&sourceBefore.sha256===expected.source.sha256&&JSON.stringify(sourceBefore)===JSON.stringify(result.sourceInheritance.after.source),'Inherited HTML byte identity unchanged');
  add('COAT-R2-SOURCE-02',cssBefore.bytes===expected.css.bytes&&cssBefore.sha256===expected.css.sha256&&JSON.stringify(cssBefore)===JSON.stringify(result.sourceInheritance.after.css),'Inherited visual CSS byte identity unchanged');
  add('COAT-R2-CSS-01',result.sourceInheritance.cssAssertions.token&&result.sourceInheritance.cssAssertions.primaryHover&&!result.sourceInheritance.cssAssertions.stalePrimaryRule,'Primary hover resolves through #007F77 token; no #F5F8FB primary rule');
  add('COAT-R2-CALC-01',Math.abs(result.calculations.whiteOn007F77-4.881302249384679)<1e-12&&Math.abs(result.calculations.tealOnF5F8FB-4.5796989189682495)<1e-12,'Independent contrast calculation separates the two pairings');
  const widthKeys=['1440','768','390'];
  for(const w of widthKeys){
    const x=result.widths[w];
    add(`COAT-R2-${w}-HOVER-COLOR`,x.hover.fg==='rgb(255, 255, 255)'&&x.hover.bg==='rgb(0, 127, 119)',`${x.hover.fg} on ${x.hover.bg}`);
    add(`COAT-R2-${w}-HOVER-CONTRAST`,Math.abs(x.hover.textContrast-4.881302249384679)<1e-12&&x.hover.textContrast>=4.5,String(x.hover.textContrast));
    add(`COAT-R2-${w}-HOVER-GEOMETRY`,x.hover.geometryStable&&x.hover.width>=44&&x.hover.height>=44,JSON.stringify({normal:x.normal,hover:x.hover}));
    add(`COAT-R2-${w}-FULL-EXTENT`,x.page.fullHeight===expected.fullHeights[w]&&x.page.scrollWidth===x.page.clientWidth&&x.page.bodyScrollWidth<=x.page.clientWidth,JSON.stringify({height:x.page.fullHeight,expected:expected.fullHeights[w],scroll:x.page.scrollWidth,client:x.page.clientWidth}));
    add(`COAT-R2-${w}-STRUCTURE`,x.page.modules.length===10&&x.page.h1.length===1&&JSON.stringify(x.page.h2)===JSON.stringify(expected.h2)&&JSON.stringify(x.page.gradeRows)===JSON.stringify(expected.grades)&&JSON.stringify(x.page.requestLinks)===JSON.stringify(expected.requests)&&x.page.sources===6,'10 sections / 1 H1 / 9 H2 / 8 Grades / 3 request owners / 6 sources');
    add(`COAT-R2-${w}-CONTROLS`,x.page.below44.length===0&&!x.page.visibleCurrentWord&&x.page.terms===0,`${x.page.controls.length} visible controls; ${x.page.below44.length} below 44px; CURRENT=${x.page.visibleCurrentWord}; Terms=${x.page.terms}`);
  }
  add('COAT-R2-RUNTIME-01',result.pageErrors.length===0&&result.consoleErrors.length===0&&result.externalRequests.length===0,`pageErrors=${result.pageErrors.length}; consoleErrors=${result.consoleErrors.length}; externalRequests=${result.externalRequests.length}`);
  add('COAT-R2-CONTINUITY-01',new Set(widthKeys.map(w=>result.widths[w].page.mainTextHash)).size===1,'Main DOM hash invariant across viewports');
  result.summary={checks:result.checks.length,passed:result.checks.filter(x=>x.pass).length,failed:result.checks.filter(x=>!x.pass).length,failedIds:result.checks.filter(x=>!x.pass).map(x=>x.id),newImages:6};
  fs.writeFileSync(path.join(newDir,'diagnostic_support/remediation-runtime.json'),JSON.stringify(result,null,2));
  console.log(JSON.stringify(result.summary));
  if(result.summary.failed)process.exit(1);
})().catch(e=>{console.error(e);process.exit(1)});
