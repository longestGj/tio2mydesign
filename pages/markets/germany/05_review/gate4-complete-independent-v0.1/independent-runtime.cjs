const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('playwright');
const { marked } = require('marked');
const sharp = require('sharp');

const root = 'D:/23MySec';
const review = `${root}/pages/markets/germany/05_review/gate4-complete-independent-v0.1`;
const renderDir = `${review}/rerender`;
const source = `${root}/pages/markets/germany/04_planning/gate4-v0.1/MARKET-EU-DE_GATE4_COMPLETE_VISUAL_V0.1.html`;
const buyer = `${root}/pages/markets/germany/04_planning/MARKET-EU-DE_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`;
const formal = `${root}/pages/markets/germany/04_planning/gate4-v0.1/approval_core`;
fs.mkdirSync(renderDir, { recursive: true });

const checks = [];
function check(id, pass, evidence) { checks.push({ id, pass: !!pass, evidence }); }
const norm = x => String(x ?? '').replace(/\s+/g, ' ').trim();
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const fileUrl = 'file:///' + source.replace(/\\/g, '/');
const viewports = [{ width:1440,height:900 },{ width:768,height:900 },{ width:390,height:844 }];

async function contentTextFromMarkdown(browser) {
  const raw = fs.readFileSync(buyer, 'utf8');
  const block = raw.split('<!-- BUYER_COPY_START -->')[1].split('<!-- BUYER_COPY_END -->')[0];
  const p = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  await p.setContent(`<main>${marked.parse(block)}</main>`);
  const txt = await p.locator('main').innerText();
  await p.close();
  return norm(txt);
}

async function ready(page) {
  await page.goto(fileUrl, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => [...document.images].every(x => x.complete && x.naturalWidth > 0));
}

async function pixelCompare(a, b) {
  const ia = sharp(a).ensureAlpha(); const ib = sharp(b).ensureAlpha();
  const [ma, mb] = await Promise.all([ia.metadata(), ib.metadata()]);
  if (ma.width !== mb.width || ma.height !== mb.height) return { dimensionsExact:false, a:[ma.width,ma.height], b:[mb.width,mb.height] };
  const [ra, rb] = await Promise.all([ia.raw().toBuffer(), ib.raw().toBuffer()]);
  let differing = 0, sum = 0, max = 0;
  for (let i=0;i<ra.length;i++) { const d=Math.abs(ra[i]-rb[i]); sum += d; if(d){differing++; if(d>max)max=d;} }
  return { dimensionsExact:true, differingChannels:differing, totalChannels:ra.length, differingRatio:differing/ra.length, meanAbs:sum/ra.length, maxAbs:max };
}

(async()=>{
  const browser = await chromium.launch({ headless:true });
  const expectedBuyerText = await contentTextFromMarkdown(browser);
  const rendered = [];
  const pageMetrics = [];

  for (const vp of viewports) {
    const label = String(vp.width);
    const page = await browser.newPage({ viewport: vp });
    await ready(page);
    const consoleErrors=[]; page.on('console',m=>{if(m.type()==='error')consoleErrors.push(m.text())});

    const full = `${renderDir}/${label}-full.png`;
    await page.screenshot({ path:full, fullPage:true, animations:'disabled' });
    rendered.push(full);
    const metrics = await page.evaluate(() => ({
      width: innerWidth, height: innerHeight,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      title: document.title,
      description: document.querySelector('meta[name=description]')?.content,
      canonical: document.querySelector('link[rel=canonical]')?.href,
      mainText: document.querySelector('main')?.innerText,
      h1: [...document.querySelectorAll('main h1')].map(x=>x.innerText),
      h2: [...document.querySelectorAll('main h2')].map(x=>x.innerText),
      sections: [...document.querySelectorAll('main>section')].map(x=>x.id||'hero'),
      mainLinks: [...document.querySelectorAll('main a')].map(x=>({text:x.innerText.trim(),href:x.getAttribute('href')})),
      overflowElements: [...document.querySelectorAll('body *')].filter(el=>{
        if(el.closest('dialog:not([open])') || el.closest('[hidden]')) return false;
        const r=el.getBoundingClientRect(); const s=getComputedStyle(el);
        return r.width>0 && r.height>0 && (r.left < -1 || r.right > innerWidth+1 || (s.overflowX!=='visible' && el.scrollWidth>el.clientWidth+1));
      }).slice(0,20).map(el=>({tag:el.tagName,cls:el.className,id:el.id,sw:el.scrollWidth,cw:el.clientWidth,rect:[el.getBoundingClientRect().left,el.getBoundingClientRect().right]})),
      clippedText: [...document.querySelectorAll('body *')].filter(el=>{
        if(el.children.length || el.closest('dialog:not([open])') || el.closest('[hidden]')) return false;
        const s=getComputedStyle(el); return el.innerText?.trim() && ['hidden','clip'].includes(s.overflowY) && el.scrollHeight>el.clientHeight+1;
      }).map(el=>({tag:el.tagName,cls:el.className,text:el.innerText.slice(0,80)})),
      logos: [...document.querySelectorAll('img.logo,img.footerLogo')].map(x=>({src:x.getAttribute('src'),alt:x.alt,natural:[x.naturalWidth,x.naturalHeight],rect:[x.getBoundingClientRect().width,x.getBoundingClientRect().height]})),
      navCurrent: [...document.querySelectorAll('.desktopNav [aria-current=page],.mobileNav [aria-current=page]')].map(x=>x.textContent.trim()),
      termsVisible: document.body.innerText.includes('Terms'),
      appRects: [...document.querySelectorAll('.applicationCard')].map(x=>{const r=x.getBoundingClientRect();return {left:r.left,top:r.top,width:r.width,height:r.height}}),
      destinationRects: [...document.querySelectorAll('.destinationGrid>*')].map(x=>{const r=x.getBoundingClientRect();return {left:r.left,top:r.top,width:r.width,height:r.height}}),
      actionRects: [...document.querySelectorAll('.primaryAction,.secondaryAction,.headerRfq,.menuButton,.footerRfq,.cookie-actions>*')].filter(x=>{const r=x.getBoundingClientRect();return r.width>0&&r.height>0}).map(x=>{const r=x.getBoundingClientRect();return {text:x.textContent.trim(),width:r.width,height:r.height}}),
      headerShared: document.querySelector('header')?.dataset.shared,
      footerShared: document.querySelector('footer')?.dataset.shared,
    }));
    pageMetrics.push(metrics);
    check(`${label}.console`, consoleErrors.length===0, consoleErrors);
    check(`${label}.horizontal-overflow`, metrics.scrollWidth<=vp.width && metrics.overflowElements.length===0, metrics.overflowElements);
    check(`${label}.text-clipping`, metrics.clippedText.length===0, metrics.clippedText);
    check(`${label}.buyer-copy-exact`, norm(metrics.mainText)===expectedBuyerText, {actualChars:norm(metrics.mainText).length,expectedChars:expectedBuyerText.length});
    check(`${label}.action-targets-44`, metrics.actionRects.every(x=>x.height>=43.5 && x.width>=43.5), metrics.actionRects);
    check(`${label}.logos-load`, metrics.logos.length===2 && metrics.logos.every(x=>x.natural[0]>0&&x.natural[1]>0), metrics.logos);
    check(`${label}.no-terms`, !metrics.termsVisible, metrics.termsVisible);
    check(`${label}.grid-apps`, metrics.appRects.length===3 && (vp.width===1440 ? metrics.appRects.every((x,i,a)=>Math.abs(x.top-a[0].top)<1&&Math.abs(x.width-a[0].width)<1&&Math.abs(x.height-a[0].height)<1) : metrics.appRects.every((x,i,a)=>i===0||x.top>a[i-1].top+x.height/2)), metrics.appRects);
    check(`${label}.grid-destination`, metrics.destinationRects.length===2 && (vp.width===1440 ? Math.abs(metrics.destinationRects[0].top-metrics.destinationRects[1].top)<1 : metrics.destinationRects[1].top>metrics.destinationRects[0].top), metrics.destinationRects);

    const positions=[]; const max=Math.max(0,metrics.scrollHeight-vp.height); for(let y=0;y<=max;y+=800)positions.push(y); if(positions.at(-1)!==max)positions.push(max);
    for(let i=0;i<positions.length;i++){
      await page.evaluate(y=>scrollTo(0,y),positions[i]); await page.waitForTimeout(40);
      const actualY=await page.evaluate(()=>scrollY);
      const p=`${renderDir}/${label}-segment-${String(i+1).padStart(2,'0')}.png`;
      await page.screenshot({path:p,animations:'disabled'}); rendered.push(p);
      check(`${label}.segment.${i+1}`, actualY===positions[i], {requested:positions[i],actual:actualY});
    }
    check(`${label}.segment-continuity`, positions[0]===0 && positions.at(-1)===max && positions.every((y,i)=>i===0||y-positions[i-1]<=vp.height), {positions,viewportHeight:vp.height,pageHeight:metrics.scrollHeight});

    // Verify all main links produce a local navigation receipt, and only page RFQs carry Germany context.
    const links = page.locator('main a');
    for(let i=0;i<await links.count();i++){
      const link=links.nth(i); const href=await link.getAttribute('href');
      await link.click({force:true});
      const receipt=await page.evaluate(()=>window.localNavigationIntents.at(-1));
      check(`${label}.link.${i+1}`, receipt?.href===href && (href==='/request-a-quote/' ? receipt.context?.destinationCountry==='Germany'&&receipt.context?.sourcePage==='MARKET-EU-DE' : Object.keys(receipt?.context||{}).length===0), {href,receipt});
    }

    // Hover and focus must be visible without moving the target.
    const hover=page.locator('.applicationCard').first().locator('a');
    await hover.scrollIntoViewIfNeeded(); await page.waitForTimeout(30);
    const before=await hover.evaluate(x=>{const r=x.getBoundingClientRect(),s=getComputedStyle(x);return {rect:[r.x,r.y,r.width,r.height],bg:s.backgroundColor,color:s.color}});
    await hover.hover(); await page.waitForTimeout(200);
    const after=await hover.evaluate(x=>{const r=x.getBoundingClientRect(),s=getComputedStyle(x);return {rect:[r.x,r.y,r.width,r.height],bg:s.backgroundColor,color:s.color}});
    check(`${label}.hover-visible-stable`, (before.bg!==after.bg||before.color!==after.color) && JSON.stringify(before.rect)===JSON.stringify(after.rect), {before,after});
    await hover.screenshot({path:`${renderDir}/${label}-hover.png`,animations:'disabled'}); rendered.push(`${renderDir}/${label}-hover.png`);

    await page.evaluate(()=>scrollTo(0,0)); await page.locator('.breadcrumb a').last().focus(); await page.keyboard.press('Tab');
    const heroFocus=await page.locator('.hero .primaryAction').evaluate(x=>{const s=getComputedStyle(x);return {outline:s.outline,outlineWidth:s.outlineWidth,outlineStyle:s.outlineStyle}});
    check(`${label}.hero-focus-visible`, parseFloat(heroFocus.outlineWidth)>=2 && heroFocus.outlineStyle!=='none', heroFocus);
    await page.locator('.hero').screenshot({path:`${renderDir}/${label}-hero-focus.png`,animations:'disabled'}); rendered.push(`${renderDir}/${label}-hero-focus.png`);
    await page.locator('.references a').first().focus(); await page.keyboard.press('Tab');
    const refFocus=await page.locator('.references a').nth(1).evaluate(x=>{const s=getComputedStyle(x);return {outline:s.outline,outlineWidth:s.outlineWidth,outlineStyle:s.outlineStyle,bg:s.backgroundColor}});
    check(`${label}.reference-focus-visible`, parseFloat(refFocus.outlineWidth)>=2 && refFocus.outlineStyle!=='none', refFocus);
    await page.locator('.references').screenshot({path:`${renderDir}/${label}-reference-focus.png`,animations:'disabled'}); rendered.push(`${renderDir}/${label}-reference-focus.png`);

    if(vp.width<1101){
      await page.evaluate(()=>scrollTo(0,0)); await page.locator('.menuButton').click();
      const ms=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),active:document.activeElement?.textContent?.trim(),mainInert:document.querySelector('main').inert,footerInert:document.querySelector('footer').inert,bodyOverflow:document.body.style.overflow,current:[...document.querySelectorAll('.mobileNav [aria-current=page]')].map(x=>x.textContent.trim())}));
      check(`${label}.menu-open`, !ms.hidden&&ms.expanded==='true'&&ms.active==='Home'&&ms.mainInert&&ms.footerInert&&ms.bodyOverflow==='hidden'&&ms.current.join()==='Markets',ms);
      await page.keyboard.press('Shift+Tab'); const shiftActive=await page.evaluate(()=>document.activeElement?.textContent?.trim());
      check(`${label}.menu-shift-loop`,shiftActive==='Close',{active:shiftActive});
      await page.keyboard.press('Shift+Tab'); const lastActive=await page.evaluate(()=>document.activeElement?.textContent?.trim());
      check(`${label}.menu-back-loop`,lastActive==='Request a Quote',{active:lastActive});
      await page.screenshot({path:`${renderDir}/${label}-menu.png`,animations:'disabled'}); rendered.push(`${renderDir}/${label}-menu.png`);
      await page.keyboard.press('Escape');
      const mc=await page.evaluate(()=>({hidden:document.querySelector('.mobileNav').hidden,expanded:document.querySelector('.menuButton').getAttribute('aria-expanded'),active:document.activeElement?.textContent?.trim(),mainInert:document.querySelector('main').inert}));
      check(`${label}.menu-escape`,mc.hidden&&mc.expanded==='false'&&mc.active==='Menu'&&!mc.mainInert,mc);
    }

    await page.locator('#cookie-trigger').scrollIntoViewIfNeeded(); await page.locator('#cookie-trigger').click();
    const cs=await page.evaluate(()=>({open:document.querySelector('dialog').open,modal:document.querySelector('dialog').matches(':modal'),active:document.activeElement?.textContent?.trim(),bodyBlocked:document.querySelector('main').inert}));
    check(`${label}.cookie-open`,cs.open&&cs.modal&&cs.active==='Close',cs);
    await page.keyboard.press('Shift+Tab'); const cookieBack=await page.evaluate(()=>document.activeElement?.textContent?.trim());
    check(`${label}.cookie-back-loop`,cookieBack==='Read Cookie Policy',{active:cookieBack});
    await page.keyboard.press('Tab'); const cookieForward=await page.evaluate(()=>document.activeElement?.textContent?.trim());
    check(`${label}.cookie-forward-loop`,cookieForward==='Close',{active:cookieForward});
    await page.screenshot({path:`${renderDir}/${label}-cookie.png`,animations:'disabled'}); rendered.push(`${renderDir}/${label}-cookie.png`);
    await page.keyboard.press('Escape'); await page.waitForTimeout(30);
    const cc=await page.evaluate(()=>({open:document.querySelector('dialog').open,active:document.activeElement?.textContent?.trim()}));
    check(`${label}.cookie-escape`,!cc.open&&cc.active==='Cookie Settings',cc);
    await page.close();
  }

  const common=pageMetrics[0];
  const expectedSections=['hero','de-02','de-03','de-04','de-05','de-06','de-07'];
  const expectedH2=['Start with the German Industrial Use You Need to Serve','Choose the Right Evaluation Path','Use Documents and Samples for the Review You Are Planning','Describe the German Destination Beyond a Country Label','Keep EU-Wide Checks with the EU Owners','Send a Germany Destination Request'];
  const expectedMainLinks=[
    ['Home','/'],['Markets','/markets/'],['European Union','/markets/european-union/'],['Request a Quote','/request-a-quote/'],['Explore Products','/products/'],
    ['Review Titanium Dioxide for Coatings','/applications/titanium-dioxide-for-coatings/'],['Review Titanium Dioxide for Plastics','/applications/titanium-dioxide-for-plastics/'],['Review Titanium Dioxide for Masterbatch','/applications/titanium-dioxide-for-masterbatch/'],
    ['Product Hub','/products/'],['Request Documents','/request-documents/'],['Products','/products/'],['quotation request','/request-a-quote/'],['Request a Sample','/request-sample/'],
    ['EU Procurement Overview','/markets/european-union/'],['EU Titanium Dioxide Trade Update','/resources/eu-titanium-dioxide-anti-dumping-duty/'],['Request a Quote','/request-a-quote/'],
    ['VdL — German coatings market 2025','https://www.wirsindfarbe.de/statistiken/deutscher-lackmarkt-2025'],['GKV — German plastics-processing industry statement','https://www.gkv.de/de/service/presse/kunststoffverarbeitung-erneut-im-minus.html'],['Hamburg Port Authority — Port Railway','https://www.hamburg-port-authority.de/en/port-railway']
  ];
  check('content.title',common.title==='Titanium Dioxide Supplier for Germany | TiO2 Malaysia',common.title);
  check('content.description',common.description==='Evaluate Malaysia-origin titanium dioxide for coatings, plastics and masterbatch procurement in Germany. Review products, documents, samples and quote inputs.',common.description);
  check('content.canonical',common.canonical==='https://tio2malaysia.com/markets/germany/',common.canonical);
  check('content.h1',common.h1.length===1&&common.h1[0]==='Titanium Dioxide Supplier for Germany',common.h1);
  check('content.h2',JSON.stringify(common.h2)===JSON.stringify(expectedH2),common.h2);
  check('content.sections',JSON.stringify(common.sections)===JSON.stringify(expectedSections),common.sections);
  check('content.links',JSON.stringify(common.mainLinks.map(x=>[x.text,x.href]))===JSON.stringify(expectedMainLinks),common.mainLinks);
  check('shared.contract',common.headerShared==='GLOBAL-CHROME-005'&&common.footerShared==='GLOBAL-CHROME-005'&&common.navCurrent.join(',')==='Markets,Markets',{header:common.headerShared,footer:common.footerShared,current:common.navCurrent});
  const forbidden=['German office','Germany office','German warehouse','Germany warehouse','inventory in Germany','German-language support','duty rate','tax rate','guaranteed delivery','lead time is','stock in Germany'];
  check('content.forbidden-claims',forbidden.every(x=>!common.mainText.toLowerCase().includes(x.toLowerCase())),forbidden.filter(x=>common.mainText.toLowerCase().includes(x.toLowerCase())));

  // 720px reflow proxy demanded by the common Gate standard.
  const p720=await browser.newPage({viewport:{width:720,height:900}}); await ready(p720);
  const m720=await p720.evaluate(()=>({sw:document.documentElement.scrollWidth,w:innerWidth,apps:[...document.querySelectorAll('.applicationCard')].map(x=>{const r=x.getBoundingClientRect();return [r.top,r.width]}),dest:[...document.querySelectorAll('.destinationGrid>*')].map(x=>x.getBoundingClientRect().top)}));
  check('720.reflow',m720.sw<=m720.w&&m720.apps.every((x,i,a)=>i===0||x[0]>a[i-1][0])&&m720.dest[1]>m720.dest[0],m720); await p720.close();

  const comparisons=[];
  for(const vp of viewports){const label=String(vp.width);comparisons.push({width:vp.width,comparison:await pixelCompare(`${renderDir}/${label}-full.png`,`${formal}/${label}-full.png`)});}
  comparisons.forEach(x=>check(`render.${x.width}.formal-equivalence`,x.comparison.dimensionsExact&&x.comparison.meanAbs<0.2,x.comparison));
  await browser.close();

  const result={
    audit:'MARKET-EU-DE Gate 4 independent runtime and rerender',
    source:{path:source,bytes:fs.statSync(source).size,sha256:sha(source)},
    buyer:{path:buyer,bytes:fs.statSync(buyer).size,sha256:sha(buyer)},
    environment:{engine:'Playwright Chromium headless',viewports:[...viewports,{width:720,height:900}]},
    counts:{checks:checks.length,passed:checks.filter(x=>x.pass).length,failed:checks.filter(x=>!x.pass).length,rendered_files:rendered.length,full_pages:3,continuous_segments:checks.filter(x=>x.id.includes('.segment.')&&!x.id.includes('continuity')).length,state_images:rendered.length-3-checks.filter(x=>x.id.includes('.segment.')&&!x.id.includes('continuity')).length},
    comparisons,pageMetrics,checks,
  };
  fs.writeFileSync(`${review}/independent-runtime.json`,JSON.stringify(result,null,2)+'\n');
  console.log(JSON.stringify({counts:result.counts,failures:checks.filter(x=>!x.pass),comparisons},null,2));
})().catch(err=>{console.error(err);process.exitCode=1});
