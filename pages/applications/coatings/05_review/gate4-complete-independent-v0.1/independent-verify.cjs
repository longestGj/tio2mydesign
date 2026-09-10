const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const mods = 'C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const { chromium } = require(mods + '/playwright');
const { marked } = require(mods + '/marked');
const sharp = require(mods + '/sharp');

const root = 'D:/23MySec';
const candidateDir = `${root}/pages/applications/coatings/04_planning/gate4-v0.1`;
const reviewDir = `${root}/pages/applications/coatings/05_review/gate4-complete-independent-v0.1`;
const evidenceDir = `${reviewDir}/independent-evidence`;
const segmentDir = `${evidenceDir}/segments`;
const target = `${candidateDir}/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html`;
const g3 = `${root}/pages/applications/coatings/04_planning/gate3-v0.3/APP-COAT_GATE3_RESPONSIVE_WIREFRAME_V0.3.html`;
const copy = `${root}/pages/applications/coatings/04_planning/APP-COAT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`;
fs.mkdirSync(segmentDir, { recursive: true });

const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id = p => ({ path: p, bytes: fs.statSync(p).size, sha256: sha(p) });
const norm = s => s.replace(/\s+/g, ' ').trim();
const records = [], errors = [], assets = [];
function check(name, pass, data = {}, evidenceType = 'ACTUAL_RUNTIME') {
  records.push({ name, pass: !!pass, evidenceType, data });
  if (!pass) errors.push(name);
}
const rgb = s => (s.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
const lum = a => a.map(v => { v /= 255; return v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((s, v, i) => s + v * [.2126, .7152, .0722][i], 0);
const contrast = (a, b) => { const x = lum(rgb(a)), y = lum(rgb(b)); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
async function metrics(loc) {
  return loc.evaluate(e => {
    const s = getComputedStyle(e), r = e.getBoundingClientRect();
    function surface(n) { while (n) { const v = getComputedStyle(n).backgroundColor; if (v !== 'rgba(0, 0, 0, 0)' && v !== 'transparent') return v; n = n.parentElement; } return 'rgb(255, 255, 255)'; }
    return { text: (e.innerText || e.textContent || '').trim(), href: e.getAttribute('href'), fg: s.color, bg: surface(e), background: s.backgroundColor, outline: s.outlineColor, outlineWidth: parseFloat(s.outlineWidth), outlineOffset: parseFloat(s.outlineOffset), outlineBg: surface(parseFloat(s.outlineOffset) >= 0 ? e.parentElement : e), x: r.x, y: r.y, width: r.width, height: r.height, focus: e.matches(':focus-visible'), hover: e.matches(':hover') };
  });
}
async function keyboardFocus(page, loc) {
  await page.mouse.move(0, 0); await loc.focus(); await page.keyboard.press('Tab'); await page.keyboard.press('Shift+Tab');
  return loc.evaluate(e => e === document.activeElement && e.matches(':focus-visible'));
}
async function inspectControls(page, selector, width) {
  const list = page.locator(selector);
  for (let i = 0; i < await list.count(); i++) {
    const loc = list.nth(i); if (!await loc.isVisible()) continue;
    await loc.scrollIntoViewIfNeeded(); await page.evaluate(() => document.activeElement?.blur()); await page.mouse.move(0, 0);
    const normal = await metrics(loc), normalRatio = normal.text ? contrast(normal.fg, normal.bg) : 99;
    check(`${width}/control/${i}/normal`, normal.width >= 43.9 && normal.height >= 43.9 && normalRatio >= 4.5, { ...normal, textContrast: normalRatio });
    await loc.hover(); const hover = await metrics(loc), hoverRatio = hover.text ? contrast(hover.fg, hover.bg) : 99;
    check(`${width}/control/${i}/hover`, hover.hover && hoverRatio >= 4.5 && Math.abs(hover.width - normal.width) < .1 && Math.abs(hover.height - normal.height) < .1, { ...hover, textContrast: hoverRatio });
    const reached = await keyboardFocus(page, loc), focus = await metrics(loc), outlineRatio = contrast(focus.outline, focus.outlineBg);
    check(`${width}/control/${i}/focus`, reached && focus.outlineWidth >= 3 && outlineRatio >= 3 && Math.abs(focus.width - normal.width) < .1 && Math.abs(focus.height - normal.height) < .1, { ...focus, outlineContrast: outlineRatio });
  }
}
async function screenshot(page, width, name, state) {
  const p = `${evidenceDir}/${width}-${name}.png`; const b = await page.screenshot({ path: p });
  assets.push({ ...id(p), pixelWidth: b.readUInt32BE(16), pixelHeight: b.readUInt32BE(20), state });
}
async function stateShot(page, width, name, selector, kind, state) {
  const loc = page.locator(selector); await loc.scrollIntoViewIfNeeded();
  if (kind === 'focus') await keyboardFocus(page, loc); else await loc.hover();
  const m = await metrics(loc); await screenshot(page, width, name, state);
  check(`${width}/${name}`, kind === 'focus' ? m.focus && m.outlineWidth >= 3 : m.hover, m);
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const chrome = browser.version();
  try {
    const original = fs.readFileSync(g3, 'utf8'), candidate = fs.readFileSync(target, 'utf8');
    check('source/G3-main-exact', candidate.match(/<main>[\s\S]*?<\/main>/)[0] === original.match(/<main>[\s\S]*?<\/main>/)[0], { g3: sha(g3), candidate: sha(target) }, 'SOURCE_INSPECTION');
    check('source/no-cross-scope-or-internal-state', !/tiovar|mytio2/i.test(candidate) && !/>\s*(CURRENT|PROVISIONAL_URL|DRAFT_FOR_PROJECT_CONTROL_REVIEW)\s*</.test(candidate), {}, 'SOURCE_INSPECTION');
    const buyer = fs.readFileSync(copy, 'utf8').match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/)[1].trim();
    const expectedHtml = marked.parse(buyer);
    for (const width of [1440, 768, 390]) {
      const viewportHeight = width === 390 ? 844 : 1000;
      const context = await browser.newContext({ viewport: { width, height: viewportHeight }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
      const page = await context.newPage(), pageErrors = [], remote = [];
      page.on('pageerror', e => pageErrors.push(e.message)); await context.route(/^https?:/, r => { remote.push(r.request().url()); return r.abort(); });
      await page.goto(pathToFileURL(target).href, { waitUntil: 'load' }); await page.evaluate(() => document.fonts.ready);
      await page.evaluate(() => { window.__reviewIntents = []; document.addEventListener('click', e => { const a = e.target.closest('a'); if (!a) return; const href = a.getAttribute('href'); if (!href?.startsWith('#')) { e.preventDefault(); window.__reviewIntents.push({ text: a.textContent.trim(), href }); } }, true); });
      const expected = await page.evaluate(html => { const d = document.createElement('div'); d.innerHTML = html; return { text: d.innerText, links: [...d.querySelectorAll('a')].map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') })) }; }, expectedHtml);
      const renderedText = await page.locator('main').innerText();
      const renderedLinks = await page.locator('main a').evaluateAll(as => as.map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') })));
      check(`${width}/approved-B-exact`, norm(renderedText) === norm(expected.text), { expectedSha: crypto.createHash('sha256').update(norm(expected.text)).digest('hex'), renderedSha: crypto.createHash('sha256').update(norm(renderedText)).digest('hex') });
      const expectedLinks = [{ text: 'Home', href: '/' }, { text: 'Applications', href: '/applications/' }, ...expected.links.filter(x => x.href)];
      check(`${width}/links-exact`, JSON.stringify(renderedLinks) === JSON.stringify(expectedLinks), { expected: expectedLinks, rendered: renderedLinks });
      const geom = await page.evaluate(() => {
        const vis = e => { const s = getComputedStyle(e), r = e.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0; };
        const rect = e => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height, bottom: r.bottom }; };
        const sections = [...document.querySelectorAll('main section')];
        return {
          pageWidth: document.documentElement.scrollWidth, pageHeight: document.documentElement.scrollHeight,
          h1: [...document.querySelectorAll('main h1')].map(e => e.textContent.trim()), h2: [...document.querySelectorAll('main h2')].map(e => e.textContent.trim()),
          modules: sections.map(e => ({ heading: e.querySelector('h1,h2')?.textContent.trim(), rect: rect(e) })),
          endpoints: [...document.querySelectorAll('.endpoint-table tbody tr')].map(e => rect(e)),
          grades: [...document.querySelectorAll('.grades tbody tr')].map(e => ({ name: e.cells[0].textContent.trim(), process: e.cells[1].textContent.trim(), href: e.querySelector('a').getAttribute('href'), rect: rect(e) })),
          requests: [...document.querySelectorAll('.requestCard')].map(e => ({ heading: e.querySelector('h3').textContent.trim(), href: e.querySelector('a').getAttribute('href'), rect: rect(e) })),
          sources: document.querySelectorAll('.sources ol>li').length, sourceLinks: document.querySelectorAll('.sources a[href^="http"]').length,
          bad: [...document.querySelectorAll('main *')].filter(e => { const r = e.getBoundingClientRect(); return vis(e) && (r.left < -.5 || r.right > innerWidth + .5); }).map(e => e.outerHTML.slice(0, 100)),
          clip: [...document.querySelectorAll('main *')].filter(e => { const s = getComputedStyle(e); return s.textOverflow === 'ellipsis' || (s.webkitLineClamp !== 'none' && s.webkitLineClamp !== '0'); }).map(e => e.outerHTML.slice(0, 100)),
          currentVisible: [...document.querySelectorAll('body *')].filter(e => vis(e) && e.children.length === 0 && e.textContent.trim() === 'CURRENT').length,
          desktopCurrent: [...document.querySelectorAll('.desktopNav [aria-current="page"]')].map(e => e.textContent.trim()), mobileCurrent: [...document.querySelectorAll('.mobileNav [aria-current="page"]')].map(e => e.textContent.trim()),
          footerOrder: [...document.querySelector('footer').children].map(e => e.className), logos: [...document.images].map(e => e.complete && e.naturalWidth > 0)
        };
      });
      const h2 = ['Define the coating before comparing the Grade','Read optical results in the prepared film','Keep dispersion, rheology and appearance separate','Use surface-treatment information to frame durability questions','Compare every endpoint on a declared basis','Compare cost only at an equal technical endpoint','Grades to Review','Prepare the next request','Technical sources'];
      check(`${width}/ten-parts`, geom.h1.length === 1 && geom.modules.length === 10 && JSON.stringify(geom.h2) === JSON.stringify(h2), geom);
      const gradeNames = ['M-350','M-510','M-896','M-996','M-2196','M-895','M-52','M-2377'];
      check(`${width}/five-endpoints-eight-grades-six-sources`, geom.endpoints.length === 5 && JSON.stringify(geom.grades.map(g => g.name)) === JSON.stringify(gradeNames) && geom.grades.filter(g => g.process === 'Chloride process').length === 4 && geom.grades.filter(g => g.process === 'Sulfate process').length === 4 && geom.sources === 6 && geom.sourceLinks === 6, geom);
      const gradeLayout = width === 1440 ? geom.grades.every((g,i,a) => i === 0 || Math.abs(g.rect.width-a[0].rect.width)<.1) : width === 768 ? geom.grades.every((g,i,a) => i<2 || Math.abs(g.rect.x-a[i%2].rect.x)<.1) : geom.grades.every((g,i,a) => i===0 || Math.abs(g.rect.x-a[0].rect.x)<.1 && g.rect.y>a[i-1].rect.y);
      const endpointLayout = width === 1440 ? geom.endpoints.every((g,i,a) => i === 0 || Math.abs(g.width-a[0].width)<.1) : width === 768 ? geom.endpoints.every((g,i,a) => i<2 || Math.abs(g.x-a[i%2].x)<.1) : geom.endpoints.every((g,i,a) => i===0 || Math.abs(g.x-a[0].x)<.1 && g.y>a[i-1].y);
      const requestLayout = width === 1440 ? geom.requests.every(r => Math.abs(r.rect.y-geom.requests[0].rect.y)<.1 && Math.abs(r.rect.width-geom.requests[0].rect.width)<.1) : geom.requests.every((r,i,a) => i===0 || r.rect.y>a[i-1].rect.y);
      check(`${width}/responsive-relations`, gradeLayout && endpointLayout && requestLayout && geom.requests.length === 3 && JSON.stringify(geom.requests.map(x => x.href)) === JSON.stringify(['/request-documents/','/request-sample/','/request-a-quote/']), { gradeLayout, endpointLayout, requestLayout, requests: geom.requests });
      check(`${width}/overflow-clipping-continuity`, geom.pageWidth === width && !geom.bad.length && !geom.clip.length && geom.modules.every((m,i,a)=>i===0 || Math.abs(m.rect.y-a[i-1].rect.bottom)<1), geom);
      check(`${width}/shared-chrome`, geom.currentVisible === 0 && geom.desktopCurrent.join() === 'Applications' && geom.mobileCurrent.join() === 'Applications' && geom.logos.every(Boolean) && JSON.stringify(geom.footerOrder) === JSON.stringify(['footerGrid','legalUtilities','copyright']), geom);
      await inspectControls(page, 'header .headerInner a,header .headerInner button,main a,footer a,footer button', width);
      const hero = page.locator('.hero .primaryAction'); await hero.scrollIntoViewIfNeeded(); await hero.hover(); const heroHover = await metrics(hero); const heroRatio = contrast(heroHover.fg, heroHover.bg);
      check(`${width}/COAT-G4-PF01`, heroHover.background === 'rgb(245, 248, 251)' && heroRatio >= 4.5, { ...heroHover, textContrast: heroRatio });
      if (width < 1101) {
        await page.evaluate(() => scrollTo(0,0)); await page.locator('.menuButton').click();
        check(`${width}/menu-open`, await page.locator('.mobileNav a').first().evaluate(e => e === document.activeElement) && await page.evaluate(() => document.querySelector('main').inert && document.querySelector('footer').inert), {});
        await page.locator('.mobileNav a').last().focus(); await page.keyboard.press('Tab'); const fwd = await page.locator('.menuButton').evaluate(e => e === document.activeElement); await page.keyboard.press('Shift+Tab');
        check(`${width}/menu-loop`, fwd && await page.locator('.mobileNav a').last().evaluate(e => e === document.activeElement), {});
        await stateShot(page, width, 'menu-focus', '.mobileNav a[aria-current="page"]', 'focus', 'Menu open; focus Applications'); await page.keyboard.press('Escape');
        check(`${width}/menu-return`, await page.locator('.menuButton').evaluate(e => e === document.activeElement && e.textContent === 'Menu'), {});
      }
      await page.locator('#cookie-trigger').click(); check(`${width}/cookie-open`, await page.locator('[data-cookie-close]').evaluate(e => e === document.activeElement), {});
      await page.locator('[data-cookie-close]').focus(); await page.keyboard.press('Shift+Tab'); const back = await page.locator('.cookie-actions a').evaluate(e => e === document.activeElement); await page.keyboard.press('Tab');
      check(`${width}/cookie-loop`, back && await page.locator('[data-cookie-close]').evaluate(e => e === document.activeElement), {});
      await stateShot(page, width, 'cookie-focus', '[data-cookie-close]', 'focus', 'Cookie Settings open; focus Close'); await page.keyboard.press('Escape');
      check(`${width}/cookie-return`, await page.locator('#cookie-trigger').evaluate(e => e === document.activeElement) && !await page.locator('dialog').evaluate(e => e.open), {});
      await page.goto(pathToFileURL(target).href); await page.evaluate(() => document.fonts.ready); await page.evaluate(() => { scrollTo(0,0); document.activeElement?.blur(); });
      const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight), segmentHeight = 1200, count = Math.ceil(pageHeight/segmentHeight), parts=[];
      for(let i=0;i<count;i++) { const top=i*segmentHeight, height=Math.min(segmentHeight,pageHeight-top), p=`${segmentDir}/${width}-segment-${String(i+1).padStart(2,'0')}.png`; await page.setViewportSize({width,height}); await page.evaluate(y=>scrollTo(0,y),top); const b=await page.screenshot({path:p}); parts.push({input:b,top,left:0}); assets.push({...id(p),pixelWidth:width,pixelHeight:height,state:`segment ${i+1}/${count}`,top}); }
      const full=`${evidenceDir}/${width}-full.png`; await sharp({create:{width,height:pageHeight,channels:3,background:'#fff'}}).composite(parts).png().toFile(full); assets.push({...id(full),pixelWidth:width,pixelHeight:pageHeight,state:'independent stitched full page'});
      await page.setViewportSize({width,height:viewportHeight});
      if(width===1440){await stateShot(page,width,'hero-hover','.hero .primaryAction','hover','Hero primary hover');await stateShot(page,width,'documents-focus','.requestCard a[href="/request-documents/"]','focus','Documents focus');}
      if(width===768){await stateShot(page,width,'grade-focus','.grades a[href="/products/m-996/"]','focus','Grade focus');await stateShot(page,width,'sample-hover','.requestCard a[href="/request-sample/"]','hover','Sample hover');}
      if(width===390){await stateShot(page,width,'source-focus','.sources li:first-child a[href^="http"]','focus','Source focus');await stateShot(page,width,'rfq-hover','.requestCard a[href="/request-a-quote/"]','hover','RFQ hover');}
      check(`${width}/no-errors-remote`, pageErrors.length===0 && remote.length===0, {pageErrors,remote});
      await context.close();
    }
    const official = JSON.parse(fs.readFileSync(`${candidateDir}/approval_core/export-inventory.json`));
    const offSeg = official.assets.filter(x => /readable-segments\/390-readable-/.test(x.path)).sort((a,b)=>a.segment.index-b.segment.index);
    const fullOff = official.assets.find(x => /approval_core\/390-full\.png$/.test(x.path));
    const parts = offSeg.map(x=>({input:fs.readFileSync(x.path),top:x.segment.top,left:0}));
    const restitch = `${evidenceDir}/official-390-restitch.png`;
    await sharp({create:{width:390,height:fullOff.pixelHeight,channels:3,background:'#fff'}}).composite(parts).png().toFile(restitch);
    check('official-390-segment-continuity-and-lossless-stitch', offSeg.length===15 && offSeg.every((x,i)=>i===0?x.segment.top===0:x.segment.top===offSeg[i-1].segment.top+offSeg[i-1].segment.height) && sha(restitch)===sha(fullOff.path), {segmentCount:offSeg.length,restitch:id(restitch),official:id(fullOff.path)}, 'STATIC_PIXEL_RECOMPUTATION');
    const z=await browser.newPage({viewport:{width:720,height:1000}}); await z.goto(pathToFileURL(target).href); await z.evaluate(()=>document.fonts.ready); const zm=await z.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,modules:document.querySelectorAll('main section').length,grades:document.querySelectorAll('.grades tbody tr').length,under44:[...document.querySelectorAll('a,button')].filter(e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return s.display!=='none'&&r.width>0&&r.height>0&&(r.width<43.9||r.height<43.9)}).map(e=>e.textContent.trim())})); check('720/reflow-proxy',zm.scrollWidth===720&&zm.modules===10&&zm.grades===8&&!zm.under44.length,zm,'LOCAL_SIMULATION'); await z.close();
  } catch(e) { errors.push(e.stack); }
  await browser.close();
  const out={date:new Date().toISOString(),role:'INDEPENDENT_GATE4_REVIEW',workset_id:'COAT-G4-COMPLETE-V01',freeze_id:'COAT-G4-COMPLETE-V01-F01',candidate:id(target),runtime:{node:process.version,chrome,headless:true,dpr:1,http_network:'blocked'},records,errors,assets,summary:{checks:records.length,passed:records.filter(x=>x.pass).length,failed:records.filter(x=>!x.pass).length,independentAssets:assets.length,segments:assets.filter(x=>x.state.startsWith('segment')).length,fullPages:assets.filter(x=>x.state==='independent stitched full page').length},limits:['Local headless Chrome only.','720 CSS pixels is a reflow proxy, not native browser zoom.','Navigation receivers, live sources, CMS/Schema, real devices and assistive technology are outside this run.']};
  fs.writeFileSync(`${reviewDir}/independent-runtime.json`,JSON.stringify(out,null,2)+'\n');
  console.log(JSON.stringify(out.summary)); if(errors.length) process.exitCode=1;
})();
