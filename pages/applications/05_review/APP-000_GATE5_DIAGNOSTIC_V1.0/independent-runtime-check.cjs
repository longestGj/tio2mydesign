const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = 'D:/23MySec';
const sourceDir = path.join(root, 'pages/applications/04_planning/gate4-v1.0');
const outPath = path.join(__dirname, 'independent-runtime-observations.json');
const sourcePath = path.join(sourceDir, 'index.html');
const checks = [];
const add = (id, pass, evidenceType, detail) => checks.push({ id, pass: !!pass, evidenceType, detail });
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');

const expectedGroups = [
  ['Coatings', ['M-350','M-510','M-896','M-996','M-2196','M-895','M-52','M-2377']],
  ['Plastics', ['M-350','M-510','M-200','M-108','M-210','M-340','M-886','M-2377']],
  ['Masterbatch', ['M-510','M-200','M-108','M-210','M-340','M-886','M-2377']],
  ['Printing Inks', ['M-350','M-510','M-52','M-2377']],
  ['Paper', ['M-350','M-2377']],
  ['Specialty Materials', ['CR-901']]
];
const scenarioExpectations = {
  full: { file: 'index.html', modules: ['M1','M2','M3','M4','M5'], appOwners: ['APP-COAT','APP-PLAS','APP-MB','APP-INK','APP-PAPER'], gradeLinks: 30, plainGrades: 0, supportOwners: ['PRODUCT-000','DOC-000','MARKET-000'], rfqs: 2 },
  mixed: { file: 'mixed.html', modules: ['M1','M2','M3','M4'], appOwners: ['APP-COAT','APP-PAPER'], gradeLinks: 10, plainGrades: 20, supportOwners: ['PRODUCT-000'], rfqs: 0 },
  constrained: { file: 'constrained.html', modules: ['M1','M2','M3'], appOwners: [], gradeLinks: 0, plainGrades: 30, supportOwners: [], rfqs: 0 },
  'grades-only': { file: 'grades-only.html', modules: ['M1','M2','M3','M4','M5'], appOwners: [], gradeLinks: 30, plainGrades: 0, supportOwners: ['PRODUCT-000','DOC-000','MARKET-000'], rfqs: 2 },
  'apps-only': { file: 'apps-only.html', modules: ['M1','M2','M3','M4','M5'], appOwners: ['APP-COAT','APP-PLAS','APP-MB','APP-INK','APP-PAPER'], gradeLinks: 0, plainGrades: 30, supportOwners: ['PRODUCT-000','DOC-000','MARKET-000'], rfqs: 2 }
};

const applicationTargets = {
  'APP-COAT':'/applications/titanium-dioxide-for-coatings/',
  'APP-PLAS':'/applications/titanium-dioxide-for-plastics/',
  'APP-MB':'/applications/titanium-dioxide-for-masterbatch/',
  'APP-INK':'/applications/titanium-dioxide-for-printing-inks/',
  'APP-PAPER':'/applications/titanium-dioxide-for-paper/'
};
const supportTargets = {'PRODUCT-000':'/products/','DOC-000':'/documents/','MARKET-000':'/markets/'};

function contrast(a, b) {
  const lin = hex => {
    const v = hex.match(/[a-f\d]{2}/gi).map(x => parseInt(x,16)/255).map(x => x <= .04045 ? x/12.92 : Math.pow((x+.055)/1.055,2.4));
    return .2126*v[0]+.7152*v[1]+.0722*v[2];
  };
  const [l1,l2] = [lin(a),lin(b)].sort((x,y)=>y-x);
  return (l1+.05)/(l2+.05);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    add('source-identity', sha(sourcePath) === 'ea8b5cb0ad39226c9c392103379a09db5ad7d7a96e725336dc55348ea05230e4', 'SOURCE_INSPECTION', { path: sourcePath.replace(/\\/g,'/'), sha256: sha(sourcePath) });

    for (const [scenario, exp] of Object.entries(scenarioExpectations)) {
      for (const width of [1440,768,390]) {
        const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
        await page.goto(pathToFileURL(path.join(sourceDir, exp.file)).href);
        await page.evaluate(() => document.fonts.ready);
        const result = await page.evaluate(() => {
          const visible = e => {
            const r=e.getBoundingClientRect(), s=getComputedStyle(e);
            return r.width>0 && r.height>0 && s.display!=='none' && s.visibility!=='hidden' && !e.closest('[hidden]') && (!e.closest('details:not([open])') || !!e.closest('summary'));
          };
          const controls=[...document.querySelectorAll('a,button,summary')].filter(visible).map(e=>{const r=e.getBoundingClientRect();return {text:e.innerText.trim(),w:r.width,h:r.height,left:r.left,right:r.right}});
          const overflow=[...document.querySelectorAll('body *')].filter(visible).filter(e=>{const r=e.getBoundingClientRect();return r.left<-.5||r.right>innerWidth+.5}).map(e=>({tag:e.tagName,cls:String(e.className),text:(e.innerText||'').slice(0,80)}));
          const clipped=[...document.querySelectorAll('main *')].filter(visible).filter(e=>{const s=getComputedStyle(e);return (s.overflowX==='hidden'||s.overflowY==='hidden'||s.textOverflow==='ellipsis'||s.webkitLineClamp!=='none')&&(e.scrollHeight>e.clientHeight+1||e.scrollWidth>e.clientWidth+1)}).map(e=>({tag:e.tagName,cls:String(e.className)}));
          return {
            scrollWidth: document.documentElement.scrollWidth,
            controls,
            overflow,
            clipped,
            modules:[...document.querySelectorAll('main [data-module]')].map(e=>e.dataset.module),
            h1:document.querySelectorAll('main h1').length,
            groups:[...document.querySelectorAll('.app-collection')].map(e=>[e.querySelector('h3').textContent.trim(),[...e.querySelectorAll('.app-grades li')].map(x=>x.textContent.trim())]),
            appCtas:[...document.querySelectorAll('.app-collection-action a')].map(a=>({owner:a.dataset.owner,href:a.getAttribute('href'),text:a.textContent.trim()})),
            gradeLinks:document.querySelectorAll('.app-grade-link').length,
            plainGrades:document.querySelectorAll('.app-grade-plain').length,
            supports:[...document.querySelectorAll('.app-supports a')].map(a=>({owner:a.dataset.owner,href:a.getAttribute('href'),text:a.textContent.trim()})),
            rfqs:[...document.querySelectorAll('main .app-rfq')].map(a=>a.getAttribute('href')),
            localAnchors:[...document.querySelectorAll('.app-local-nav a')].map(a=>a.getAttribute('href')),
            current:[...document.querySelectorAll('.desktopNav [aria-current],.mobileNav [aria-current]')].map(a=>a.textContent.trim()),
            footerCurrent:document.querySelectorAll('footer [aria-current]').length,
            schema:JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent),
            meta:{title:document.title,description:document.querySelector('meta[name="description"]')?.content,canonical:document.querySelector('link[rel="canonical"]')?.href,ogTitle:document.querySelector('meta[property="og:title"]')?.content,ogDescription:document.querySelector('meta[property="og:description"]')?.content,ogUrl:document.querySelector('meta[property="og:url"]')?.content},
            emptyShells:[...document.querySelectorAll('main section,main article')].filter(e=>!e.innerText.trim()).length,
            internalLeak:/\b(APP-000|PROVISIONAL|DRAFT|NOT_PASS|CURRENT)\b/.test(document.body.innerText),
            detailsOpen:[...document.querySelectorAll('.app-grades')].map(e=>e.open),
            linkedStyle:document.querySelector('.app-grade-link')?(()=>{const e=document.querySelector('.app-grade-link'),s=getComputedStyle(e);return{color:s.color,bg:s.backgroundColor,dec:s.textDecorationLine,tag:e.tagName}})():null,
            plainStyle:document.querySelector('.app-grade-plain')?(()=>{const e=document.querySelector('.app-grade-plain'),s=getComputedStyle(e);return{color:s.color,bg:s.backgroundColor,dec:s.textDecorationLine,tag:e.tagName,tabindex:e.getAttribute('tabindex'),href:e.getAttribute('href')}})():null,
            headingSizes:[...document.querySelectorAll('main h1,main h2,main h3')].slice(0,3).map(e=>({tag:e.tagName,size:getComputedStyle(e).fontSize,line:getComputedStyle(e).lineHeight})),
            finalFooter:document.querySelector('[data-module="M5"]')&&document.querySelector('footer')?(()=>{const m=document.querySelector('[data-module="M5"]').getBoundingClientRect(),f=document.querySelector('footer').getBoundingClientRect();return{m5Bottom:m.bottom+scrollY,footerTop:f.top+scrollY,gap:(f.top+scrollY)-(m.bottom+scrollY)}})():null
          };
        });
        add(`${scenario}-${width}-complete-layout`, result.scrollWidth<=width && result.overflow.length===0 && result.clipped.length===0 && result.controls.every(c=>c.w>=43.99&&c.h>=43.99), 'ACTUAL_RUNTIME', {scrollWidth:result.scrollWidth,overflow:result.overflow,clipped:result.clipped,smallControls:result.controls.filter(c=>c.w<43.99||c.h<43.99)});
        const appTargetsPass=JSON.stringify(result.appCtas.map(x=>x.owner))===JSON.stringify(exp.appOwners)&&result.appCtas.every(x=>x.href===applicationTargets[x.owner]);
        const supportTargetsPass=JSON.stringify(result.supports.map(x=>x.owner))===JSON.stringify(exp.supportOwners)&&result.supports.every(x=>x.href===supportTargets[x.owner]);
        const itemList=result.schema['@graph'].find(x=>x['@type']==='ItemList');
        const collection=result.schema['@graph'].find(x=>x['@type']==='CollectionPage');
        const schemaPass=exp.appOwners.length
          ? itemList?.numberOfItems===exp.appOwners.length&&itemList.itemListElement.every((x,i)=>x.position===i+1&&x.item===`https://tio2malaysia.com${applicationTargets[exp.appOwners[i]]}`)&&collection?.mainEntity?.['@id']===itemList['@id']
          : !itemList&&!collection.mainEntity;
        const metadataPass=result.meta.title==='Applications | TiO2 Malaysia'&&result.meta.description==='Explore titanium dioxide application paths for coatings, plastics, masterbatch, printing inks, paper and specialty materials.'&&(!result.meta.canonical||result.meta.canonical==='https://tio2malaysia.com/applications/')&&(!result.meta.ogTitle||result.meta.ogTitle===result.meta.title)&&(!result.meta.ogDescription||result.meta.ogDescription===result.meta.description)&&(!result.meta.ogUrl||result.meta.ogUrl==='https://tio2malaysia.com/applications/');
        add(`${scenario}-${width}-content-and-conditional-state`, JSON.stringify(result.groups)===JSON.stringify(expectedGroups) && JSON.stringify(result.modules)===JSON.stringify(exp.modules) && result.h1===1 && appTargetsPass && result.gradeLinks===exp.gradeLinks && result.plainGrades===exp.plainGrades && supportTargetsPass && result.rfqs.length===exp.rfqs && result.rfqs.every(x=>x==='/request-a-quote/') && result.localAnchors.length===6 && result.localAnchors.every(x=>x.startsWith('#application-')) && result.current.length===2 && result.current.every(x=>x==='Applications') && result.footerCurrent===0 && schemaPass && metadataPass && result.emptyShells===0 && !result.internalLeak, 'ACTUAL_RUNTIME', {modules:result.modules,h1:result.h1,groups:result.groups.map(g=>[g[0],g[1].length]),appCtas:result.appCtas,gradeLinks:result.gradeLinks,plainGrades:result.plainGrades,supports:result.supports,rfqs:result.rfqs,localAnchors:result.localAnchors,current:result.current,footerCurrent:result.footerCurrent,schemaPass,metadataPass,emptyShells:result.emptyShells,internalLeak:result.internalLeak});
        if (scenario==='full') add(`full-${width}-responsive-presentation`, width===390 ? result.detailsOpen.every(v=>!v) : result.detailsOpen.every(Boolean), 'ACTUAL_RUNTIME', {detailsOpen:result.detailsOpen,headingSizes:result.headingSizes,finalFooter:result.finalFooter});
        if (scenario==='mixed') add(`mixed-${width}-linked-plain-distinction`, result.linkedStyle?.tag==='A' && result.linkedStyle.dec.includes('underline') && result.plainStyle?.tag==='SPAN' && result.plainStyle.href===null && result.plainStyle.tabindex===null && result.linkedStyle.color!==result.plainStyle.color && result.linkedStyle.bg!==result.plainStyle.bg, 'ACTUAL_RUNTIME', {linked:result.linkedStyle,plain:result.plainStyle});
        await page.close();
      }
    }

    for (const width of [1440,768,390]) {
      const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1});
      await page.goto(pathToFileURL(sourcePath).href); await page.evaluate(()=>document.fonts.ready);
      for (const anchor of ['application-coatings','application-plastics','application-masterbatch','application-printing-inks','application-paper','application-specialty-materials']) {
        await page.locator(`.app-local-nav a[href="#${anchor}"]`).click();
        const a=await page.locator(`#${anchor}`).evaluate(e=>({hash:location.hash,headingTop:e.querySelector('h3').getBoundingClientRect().top,open:e.querySelector('details').open}));
        add(`anchor-${width}-${anchor}`,a.hash===`#${anchor}`&&a.headingTop>=0&&a.headingTop<900&&(width!==390||!a.open),'ACTUAL_RUNTIME',a);
      }
      const first=page.locator('.app-grades').first();
      const initiallyOpen=await first.evaluate(e=>e.open);
      await first.locator('summary').focus();
      await page.keyboard.press('Enter');
      await page.keyboard.press('Tab');
      const disclosure=await page.evaluate(()=>({open:document.querySelector('.app-grades').open,focus:document.activeElement.textContent.trim(),tag:document.activeElement.tagName,aria:document.querySelector('.app-grades summary').getAttribute('aria-labelledby')}));
      const disclosurePass = initiallyOpen
        ? (!disclosure.open && disclosure.focus==='Explore Coatings' && disclosure.tag==='A')
        : (disclosure.open && disclosure.focus==='M-350' && disclosure.tag==='A');
      add(`disclosure-keyboard-${width}`,disclosurePass&&disclosure.aria==='application-coatings-summary application-coatings-title','ACTUAL_RUNTIME',{initiallyOpen,...disclosure});
      if(width<1101){
        await page.evaluate(()=>scrollTo(0,0)); await page.locator('.menuButton').click();
        const open=await page.evaluate(()=>({focus:document.activeElement.textContent.trim(),expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),hidden:document.querySelector('.mobileNav').hidden,mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,bodyOverflow:document.body.style.overflow}));
        await page.locator('.mobileNav a').last().focus(); await page.keyboard.press('Tab'); const loopForward=await page.locator('.menuButton').evaluate(e=>e===document.activeElement);
        await page.keyboard.press('Shift+Tab'); const loopBack=await page.locator('.mobileNav a').last().evaluate(e=>e===document.activeElement);
        await page.keyboard.press('Escape');
        const close=await page.evaluate(()=>({expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),hidden:document.querySelector('.mobileNav').hidden,mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,bodyOverflow:document.body.style.overflow,focus:document.activeElement.className}));
        add(`mobile-menu-${width}`,open.focus==='Home'&&open.expanded==='true'&&!open.hidden&&open.mainInert&&open.footerInert&&open.bodyOverflow==='hidden'&&loopForward&&loopBack&&close.expanded==='false'&&close.hidden&&!close.mainInert&&!close.footerInert&&close.bodyOverflow===''&&close.focus==='menuButton','ACTUAL_RUNTIME',{open,loopForward,loopBack,close});
      }
      await page.locator('#cookie-trigger').click();
      const cookieOpen=await page.evaluate(()=>({open:document.querySelector('.cookie-layer').open,focus:document.activeElement.textContent.trim()}));
      await page.keyboard.press('Shift+Tab'); const cookieLast=await page.locator('.cookie-actions a').evaluate(e=>e===document.activeElement);
      await page.keyboard.press('Tab'); const cookieLoop=await page.locator('[data-cookie-close]').evaluate(e=>e===document.activeElement);
      await page.keyboard.press('Escape'); const cookieReturn=await page.locator('#cookie-trigger').evaluate(e=>e===document.activeElement);
      add(`cookie-dialog-${width}`,cookieOpen.open&&cookieOpen.focus==='Close'&&cookieLast&&cookieLoop&&cookieReturn,'ACTUAL_RUNTIME',{cookieOpen,cookieLast,cookieLoop,cookieReturn});
      await page.close();
    }

    for (const width of [1440,768,390]) {
      const page=await browser.newPage({viewport:{width,height:900},javaScriptEnabled:false});
      await page.goto(pathToFileURL(sourcePath).href); await page.evaluate(()=>document.fonts.ready);
      const nojs=await page.evaluate(()=>({open:[...document.querySelectorAll('.app-grades')].every(e=>e.open),grades:document.querySelectorAll('.app-grades li').length,scrollWidth:document.documentElement.scrollWidth}));
      add(`no-js-${width}`,nojs.open&&nojs.grades===30&&nojs.scrollWidth<=width,'ACTUAL_RUNTIME',nojs);
      await page.close();
    }

    for (const width of [1440,768,390]) {
      const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
      await page.goto(pathToFileURL(sourcePath).href); await page.evaluate(()=>document.fonts.ready);
      await page.evaluate(()=>{document.querySelectorAll('.app-grades').forEach(d=>d.open=true);for(const e of document.querySelectorAll('main,main *')){const n=parseFloat(getComputedStyle(e).fontSize);if(Number.isFinite(n))e.style.fontSize=`${n*2}px`;}});
      const enlarged=await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,overflow:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return r.width>0&&r.height>0&&s.display!=='none'&&(r.left<-.5||r.right>innerWidth+.5)}).map(e=>({tag:e.tagName,cls:String(e.className),text:(e.innerText||'').slice(0,40)}))}));
      add(`font-enlargement-200-${width}`,enlarged.scrollWidth<=width&&enlarged.overflow.length===0,'ACTUAL_RUNTIME',enlarged);
      await page.close();
    }

    const ratios={tealOnWhite:contrast('007f77','ffffff'),tealOnPale:contrast('007f77','f3fbfa'),navyOnWhite:contrast('062b5b','ffffff'),whiteOnTeal:contrast('ffffff','008078'),darkOnBrightTeal:contrast('031b3a','00a99d'),footerMutedOnDeep:contrast('d4e0eb','031b3a')};
    add('declared-color-contrast',Object.values(ratios).every(v=>v>=4.5),'SOURCE_INSPECTION',ratios);

    const result={
      pageId:'APP-000', dispatchId:'APP-000-G5-INDEPENDENT-REVIEW-DISPATCH-01', reviewer:'/root/app000_gate5_review', mode:'INDEPENDENT_REVIEW', reviewScope:'INITIAL',
      createdAt:new Date().toISOString(), renderer:await browser.version(), source:{path:sourcePath.replace(/\\/g,'/'),sha256:sha(sourcePath)},
      checks, failures:checks.filter(x=>!x.pass), status:checks.every(x=>x.pass)?'PASS':'FAIL',
      persistentScreenshotsAdded:0,
      note:'Bounded independent runtime record. No business request was submitted and no production route was contacted.'
    };
    fs.writeFileSync(outPath,JSON.stringify(result,null,2));
    console.log(JSON.stringify({status:result.status,checks:checks.length,failures:result.failures,renderer:result.renderer,outPath},null,2));
    if(result.status!=='PASS')process.exitCode=1;
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exitCode=1});
