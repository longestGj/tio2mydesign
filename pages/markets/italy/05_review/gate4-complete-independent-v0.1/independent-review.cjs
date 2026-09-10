const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = 'D:/23MySec';
const candidateDir = path.join(root, 'pages/markets/italy/04_planning/gate4-v0.1');
const reviewDir = path.join(root, 'pages/markets/italy/05_review/gate4-complete-independent-v0.1');
const outDir = path.join(reviewDir, 'diagnostic_support');
const candidate = path.join(candidateDir, 'MARKET-EU-IT_GATE4_COMPLETE_VISUAL_V0.1.html');
const inputIndexPath = path.join(candidateDir, 'MARKET-EU-IT_GATE4_INPUT_INDEX_V0.1.json');
const freezePath = path.join(candidateDir, 'MARKET-EU-IT_GATE4_FREEZE_RECORD_V0.1.json');
const evidenceIndexPath = path.join(candidateDir, 'MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.1.json');
const worksetPath = path.join(candidateDir, 'MARKET-EU-IT_GATE4_WORKSET_V0.1.json');
const preflightPath = path.join(candidateDir, 'MARKET-EU-IT_GATE4_PREFLIGHT_RECORD_V0.1.json');
const directionPath = path.join(candidateDir, 'MARKET-EU-IT_GATE4_VISUAL_DIRECTION_CHECK_V0.1.md');
const runtimePath = path.join(candidateDir, 'diagnostic_support/runtime-verification.json');
const readbackPath = path.join(candidateDir, 'diagnostic_support/visual-readback.json');
const approvedBPath = path.join(root, 'pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md');
const gate3Path = path.join(candidateDir, '../gate3-v0.1/MARKET-EU-IT_GATE3_WIREFRAME_V0.1.html');

const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity = p => ({ path: p.replaceAll('\\', '/'), bytes: fs.statSync(p).size, sha256: sha(p) });
const json = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const normalize = s => s.replace(/\s+/g, ' ').trim();

function identityMatch(record) {
  const p = record.path.replace(/^D:\//, 'D:/');
  if (!fs.existsSync(p)) return { path: p, pass: false, reason: 'MISSING' };
  const actual = identity(p);
  return { path: p, pass: actual.bytes === record.bytes && actual.sha256 === record.sha256, expected: { bytes: record.bytes, sha256: record.sha256 }, actual };
}

function extractVisibleApprovedB(markdown) {
  const markerStart = '<!-- BUYER_COPY_START -->';
  const markerEnd = '<!-- BUYER_COPY_END -->';
  const start = markdown.indexOf(markerStart);
  const end = markdown.indexOf(markerEnd);
  if (start >= 0 && end > start) return markdown.slice(start + markerStart.length, end);
  const m = markdown.match(/## Buyer Clean Copy[\s\S]*?(?=\n## |$)/i);
  return m ? m[0] : markdown;
}

function stripHtml(html, selectorTag) {
  const re = new RegExp(`<${selectorTag}\\b[^>]*>([\\s\\S]*?)<\\/${selectorTag}>`, 'i');
  return html.match(re)?.[1] || '';
}

function simpleText(html) {
  return normalize(html
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' '))
    .replace(/\s+([.,;:!?])/g, '$1');
}

function markdownText(md) {
  return normalize(md
    .replace(/<!--[^]*?-->/g, '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^[-*]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, ''))
    .replace(/\s+([.,;:!?])/g, '$1');
}

async function main() {
  fs.mkdirSync(path.join(outDir, 'segments'), { recursive: true });
  fs.mkdirSync(path.join(outDir, 'states'), { recursive: true });
  fs.mkdirSync(path.join(reviewDir, 'approval_core'), { recursive: true });

  const inputIndex = json(inputIndexPath);
  const freeze = json(freezePath);
  const evidence = json(evidenceIndexPath);
  const workset = json(worksetPath);
  const inputChecks = inputIndex.inputs.map(identityMatch);
  const evidenceChecks = evidence.images.map(identityMatch);
  const observationChecks = evidence.observations.map(identityMatch);
  const freezeComponentRecords = [freeze.source, freeze.input_index, freeze.workset, freeze.preflight, freeze.direction_check, freeze.runtime_verification, freeze.static_visual_readback, ...freeze.dependencies];
  const freezeComponentChecks = freezeComponentRecords.map(identityMatch);
  const topIdentityChecks = [
    { name: 'source', check: identityMatch(evidence.source) },
    { name: 'freeze', check: identityMatch(evidence.freeze) },
    { name: 'input_index', check: identityMatch(evidence.input_index) },
  ];

  const sourceHtml = fs.readFileSync(candidate, 'utf8');
  const gate3Html = fs.readFileSync(gate3Path, 'utf8');
  const approvedB = fs.readFileSync(approvedBPath, 'utf8');
  const approvedBody = markdownText(extractVisibleApprovedB(approvedB));
  const candidateMainText = simpleText(stripHtml(sourceHtml, 'main'));
  const gate3MainText = simpleText(stripHtml(gate3Html, 'main'));
  const gate3Header = normalize(stripHtml(gate3Html, 'header'));
  const gate4Header = normalize(stripHtml(sourceHtml, 'header'));
  const gate3Footer = normalize(stripHtml(gate3Html, 'footer'));
  const gate4Footer = normalize(stripHtml(sourceHtml, 'footer'));

  const browser = await chromium.launch({ headless: true });
  const results = {
    review_id: 'IT-G4-INDEPENDENT-REVIEW-20260907-01',
    page_id: 'MARKET-EU-IT',
    workset_id: workset.workset_id,
    freeze_id: freeze.freeze_id,
    generated_at: new Date().toISOString(),
    renderer: { browser: await browser.version(), node: process.version, dpr: 1, network: 'HTTP(S) blocked; local file only' },
    identities: { inputChecks, evidenceChecks, observationChecks, freezeComponentChecks, topIdentityChecks },
    staticContract: {
      candidate: identity(candidate), inputIndex: identity(inputIndexPath), freeze: identity(freezePath), evidenceIndex: identity(evidenceIndexPath),
      inputCount: inputIndex.inputs.length, evidenceImageCount: evidence.images.length,
      worksetMatch: workset.workset_id === 'IT-G4-COMPLETE-20260907-01',
      freezeMatch: freeze.freeze_id === 'IT-G4-FREEZE-20260907-01',
      sevenModuleTokens: [...sourceHtml.matchAll(/data-module="(IT-\d{2})"/g)].map(m => m[1]),
      candidateMainEqualsGate3Main: candidateMainText === gate3MainText,
      candidateHeaderEqualsGate3Header: gate4Header === gate3Header,
      candidateFooterEqualsGate3Footer: gate4Footer === gate3Footer,
      approvedBTextContainedInMain: candidateMainText.includes(approvedBody),
      exactApprovedBSimpleTextLength: approvedBody.length,
      candidateMainSimpleTextLength: candidateMainText.length,
      cooExactCount: (candidateMainText.match(/A Certificate of Origin is available upon request\./g) || []).length,
      requiredMetadata: {
        title: sourceHtml.includes('<title>Titanium Dioxide Supplier for Italy | TiO2 Malaysia</title>'),
        description: sourceHtml.includes('Evaluate Malaysia-origin titanium dioxide for coatings, compound, masterbatch and packaging-printing projects in Italy. Review products, documents and quote inputs.'),
        canonical: sourceHtml.includes('<link rel="canonical" href="https://tio2malaysia.com/markets/italy/">'),
      }
    },
    widths: {}, pageErrors: [], consoleErrors: [], blockedNetwork: [], checks: []
  };

  const widths = [{ width: 1440, height: 900 }, { width: 768, height: 900 }, { width: 390, height: 844 }];
  for (const vp of widths) {
    const context = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, reducedMotion: 'reduce' });
    const page = await context.newPage();
    page.on('pageerror', err => results.pageErrors.push({ width: vp.width, message: err.message }));
    page.on('console', msg => { if (msg.type() === 'error') results.consoleErrors.push({ width: vp.width, message: msg.text() }); });
    await page.route(/^https?:\/\//, route => { results.blockedNetwork.push({ width: vp.width, url: route.request().url() }); route.abort(); });
    await page.goto(pathToFileURL(candidate).href, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);

    const info = await page.evaluate(() => {
      const visible = el => { const s = getComputedStyle(el), r = el.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0; };
      const rect = el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom }; };
      const modules = [...document.querySelectorAll('main section[data-module]')].map((s, i) => ({ index: i + 1, id: s.dataset.module, heading: s.querySelector('h1,h2')?.textContent.trim(), rect: rect(s) }));
      const controls = [...document.querySelectorAll('a,button,input,select,textarea')].filter(visible).map(el => ({ text: el.textContent.trim().replace(/\s+/g, ' '), href: el.getAttribute('href'), tag: el.tagName, rect: rect(el) }));
      const tooSmall = controls.filter(c => c.rect.width < 44 || c.rect.height < 44);
      const clipped = [...document.querySelectorAll('main h1,main h2,main h3,main p,main li,footer a,footer button')].filter(visible).map(el => ({ tag: el.tagName, text: el.textContent.trim().replace(/\s+/g, ' ').slice(0, 100), clientWidth: el.clientWidth, scrollWidth: el.scrollWidth, clientHeight: el.clientHeight, scrollHeight: el.scrollHeight, rect: rect(el), overflowX: getComputedStyle(el).overflowX, overflowY: getComputedStyle(el).overflowY })).filter(x => ((x.overflowX==='hidden'||x.overflowX==='clip') && x.scrollWidth > x.clientWidth + 1) || ((x.overflowY==='hidden'||x.overflowY==='clip') && x.scrollHeight > x.clientHeight + 1));
      const mainText = document.querySelector('main').innerText.replace(/\s+/g, ' ').trim();
      const mainLinks = [...document.querySelectorAll('main a')].map(a => ({ text: a.textContent.trim(), href: a.getAttribute('href') }));
      const headings = [...document.querySelectorAll('main h1,main h2,main h3')].map(h => h.textContent.trim());
      const coo = [...document.querySelectorAll('main p')].find(p => p.textContent.includes('A Certificate of Origin is available upon request.'));
      return {
        fullHeight: document.documentElement.scrollHeight,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        bodyScrollWidth: document.body.scrollWidth,
        modules, headings, controls, tooSmall, clipped, mainText, mainLinks,
        h1Count: document.querySelectorAll('main h1').length,
        currentLabels: [...document.querySelectorAll('[aria-current="page"]')].map(e => e.textContent.trim()),
        visibleCurrentWord: [...document.querySelectorAll('body *')].filter(visible).some(e => [...e.childNodes].some(n => n.nodeType === Node.TEXT_NODE && /\bCURRENT\b/.test(n.textContent))),
        formsInMain: document.querySelectorAll('main form,input,main select,main textarea').length,
        cooParagraph: coo ? { text: coo.textContent.replace(/\s+/g, ' ').trim(), childCount: coo.children.length, rect: rect(coo) } : null,
        destinationPhrases: ['Italy','Destination Country','Destination Port / City','Additional Requirements'].map(x => ({ value: x, present: mainText.includes(x) })),
        neutralGrade: mainText.includes('this page does not rank Grades for Italy') && mainText.includes('Not sure / Need help'),
        euBoundary: mainText.includes('It does not calculate duty or tax, decide customs origin or classification, or provide a shipment-specific import result.'),
        rfqBoundary: mainText.includes('The request does not select a Grade or confirm price, stock, supply, transport or delivery timing.'),
        footerBottom: Math.round(document.querySelector('footer').getBoundingClientRect().bottom + scrollY),
        logoLoaded: [...document.images].map(i => ({ alt: i.alt, complete: i.complete, naturalWidth: i.naturalWidth, src: i.src })),
        fontStatus: document.fonts.status,
      };
    });

    const fullPath = path.join(reviewDir, 'approval_core', `independent-${vp.width}-full.png`);
    await page.locator('html').screenshot({ path: fullPath });
    const segmentStep = 750;
    const maxScrollY = Math.max(0, info.fullHeight - vp.height);
    const segmentYs = [];
    for (let y = 0; y <= maxScrollY; y += segmentStep) segmentYs.push(y);
    if (segmentYs.at(-1) !== maxScrollY) segmentYs.push(maxScrollY);
    const segmentPaths = [];
    for (let i = 0; i < segmentYs.length; i++) {
      const y = segmentYs[i];
      const p = path.join(outDir, 'segments', `${vp.width}-segment-${String(i + 1).padStart(2, '0')}.png`);
      await page.evaluate(scrollY => scrollTo(0, scrollY), y);
      await page.screenshot({ path: p });
      segmentPaths.push(identity(p));
    }

    const stateRecords = [];
    const targets = [
      { key: 'request-documents', locator: page.getByRole('link', { name: 'Request Documents', exact: true }) },
      { key: 'federchimica-source', locator: page.getByRole('link', { name: 'Federchimica AVISA — association sectors', exact: true }) }
    ];
    for (const target of targets) {
      const loc = target.locator;
      await loc.scrollIntoViewIfNeeded();
      const parent = loc.locator('xpath=..');
      const baseBox = await loc.boundingBox();
      const clipBox = await parent.boundingBox();
      const styleNormal = await loc.evaluate(el => { const s = getComputedStyle(el); return { color: s.color, backgroundColor: s.backgroundColor, outline: `${s.outlineWidth} ${s.outlineStyle} ${s.outlineColor}`, outlineOffset: s.outlineOffset, textDecorationThickness: s.textDecorationThickness }; });
      for (const state of ['normal','hover','focus']) {
        if (state === 'hover') await loc.hover();
        if (state === 'focus') await loc.focus();
        const p = path.join(outDir, 'states', `${vp.width}-${target.key}-${state}.png`);
        await parent.screenshot({ path: p });
        const box = await loc.boundingBox();
        const style = await loc.evaluate(el => { const s = getComputedStyle(el); return { color: s.color, backgroundColor: s.backgroundColor, outlineWidth: s.outlineWidth, outlineStyle: s.outlineStyle, outlineColor: s.outlineColor, outlineOffset: s.outlineOffset, textDecorationThickness: s.textDecorationThickness }; });
        stateRecords.push({ target: target.key, state, image: identity(p), box, geometryStable: baseBox && box && Math.abs(baseBox.x-box.x)<0.1 && Math.abs(baseBox.y-box.y)<0.1 && Math.abs(baseBox.width-box.width)<0.1 && Math.abs(baseBox.height-box.height)<0.1, style });
      }
      const collision = await loc.evaluate(el => {
        const a = el.getBoundingClientRect();
        const s = getComputedStyle(el);
        const outline = parseFloat(s.outlineWidth) || 0;
        const offset = parseFloat(s.outlineOffset) || 0;
        const outward = Math.max(0, outline + offset);
        const ring = { left: a.left - outward, right: a.right + outward, top: a.top - outward, bottom: a.bottom + outward };
        const ranges = [];
        for (const node of el.parentElement.childNodes) {
          if (node === el || node.nodeType !== Node.TEXT_NODE || !node.textContent.trim()) continue;
          const range = document.createRange(); range.selectNodeContents(node);
          for (const r of range.getClientRects()) ranges.push({ left:r.left,right:r.right,top:r.top,bottom:r.bottom,text:node.textContent.trim() });
        }
        const intersects = ranges.filter(r => ring.left < r.right && ring.right > r.left && ring.top < r.bottom && ring.bottom > r.top);
        return { ring, siblingTextRects: ranges, intersects };
      });
      stateRecords.push({ target: target.key, collision, parentClip: clipBox, normalStyle: styleNormal });
      await page.mouse.move(0,0);
      await page.evaluate(() => document.activeElement?.blur());
    }

    const clickTests = [];
    for (const spec of [
      { name: 'main-rfq', locator: page.locator('main a[href="/request-a-quote/"]').first(), expected: { destinationCountry: 'Italy', sourcePage: 'MARKET-EU-IT' } },
      { name: 'documents', locator: page.locator('main a[href="/request-documents/"]'), expected: { sourcePage: 'MARKET-EU-IT' } },
      { name: 'sample', locator: page.locator('main a[href="/request-sample/"]'), expected: {} },
    ]) {
      await spec.locator.scrollIntoViewIfNeeded();
      const before = await page.evaluate(() => window.localNavigationIntents.length);
      await spec.locator.click();
      const actual = await page.evaluate(i => window.localNavigationIntents[i], before);
      clickTests.push({ name: spec.name, expected: spec.expected, actual, pass: JSON.stringify(actual?.context) === JSON.stringify(spec.expected) });
    }

    let menu = { applicable: vp.width <= 1100 };
    if (menu.applicable) {
      await page.locator('.menuButton').click();
      const opened = await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), activeText: document.activeElement?.textContent.trim(), mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert, bodyOverflow: getComputedStyle(document.body).overflow }));
      const p = path.join(reviewDir, 'approval_core', `independent-${vp.width}-menu.png`); await page.screenshot({ path: p });
      await page.locator('.menuButton').focus(); await page.keyboard.press('Shift+Tab');
      const wrapBack = await page.evaluate(() => document.activeElement?.textContent.trim());
      await page.keyboard.press('Tab');
      const wrapForward = await page.evaluate(() => document.activeElement?.textContent.trim());
      await page.keyboard.press('Escape');
      const closed = await page.evaluate(() => ({ hidden: document.querySelector('.mobileNav').hidden, expanded: document.querySelector('.menuButton').getAttribute('aria-expanded'), activeText: document.activeElement?.textContent.trim(), mainInert: document.querySelector('main').inert, footerInert: document.querySelector('footer').inert }));
      menu = { applicable: true, opened, wrapBack, wrapForward, closed, image: identity(p) };
    }

    await page.locator('#cookie-trigger').scrollIntoViewIfNeeded();
    await page.locator('#cookie-trigger').click();
    const cookieOpened = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, modal: document.querySelector('.cookie-layer').matches(':modal'), activeText: document.activeElement?.textContent.trim() }));
    const cookiePath = path.join(reviewDir, 'approval_core', `independent-${vp.width}-cookie.png`); await page.screenshot({ path: cookiePath });
    await page.locator('[data-cookie-close]').focus(); await page.keyboard.press('Shift+Tab');
    const cookieWrapBack = await page.evaluate(() => document.activeElement?.textContent.trim());
    await page.keyboard.press('Tab'); const cookieWrapForward = await page.evaluate(() => document.activeElement?.textContent.trim());
    await page.keyboard.press('Escape');
    const cookieClosed = await page.evaluate(() => ({ open: document.querySelector('.cookie-layer').open, activeId: document.activeElement?.id }));

    results.widths[vp.width] = { viewport: vp, info, fullImage: identity(fullPath), segmentPaths, stateRecords, clickTests, menu, cookie: { opened: cookieOpened, wrapBack: cookieWrapBack, wrapForward: cookieWrapForward, closed: cookieClosed, image: identity(cookiePath) } };
    await context.close();
  }

  await browser.close();

  const expectedModules = ['IT-01','IT-02','IT-03','IT-04','IT-05','IT-06','IT-07'];
  const expectedMainLinks = [
    ['Home','/'], ['Markets','/markets/'], ['European Union','/markets/european-union/'],
    ['Request a Quote','/request-a-quote/'], ['Explore Products','/products/'],
    ['Review Titanium Dioxide for Coatings','/applications/titanium-dioxide-for-coatings/'],
    ['Review Titanium Dioxide for Plastics','/applications/titanium-dioxide-for-plastics/'],
    ['Review Titanium Dioxide for Masterbatch','/applications/titanium-dioxide-for-masterbatch/'],
    ['Review Titanium Dioxide for Printing Inks','/applications/titanium-dioxide-for-printing-inks/'],
    ['Product Hub','/products/'], ['Request Documents','/request-documents/'], ['Products','/products/'],
    ['quotation request','/request-a-quote/'], ['Request a Sample','/request-sample/'],
    ['EU Procurement Overview','/markets/european-union/'],
    ['EU Titanium Dioxide Trade Update','/resources/eu-titanium-dioxide-anti-dumping-duty/'],
    ['Request a Quote','/request-a-quote/'],
    ['Federchimica AVISA — association sectors','https://www.federchimica.it/associazioni/avisa'],
    ['Garzanti Specialties — plastics and polymers','https://www.garzantispecialties.com/plastiche-polimeri/'],
  ].map(([text,href])=>({text,href}));
  const add = (id, pass, detail) => results.checks.push({ id, pass: Boolean(pass), detail });
  add('IT-IR-ID-01', inputChecks.every(x=>x.pass) && inputChecks.length===51, `${inputChecks.filter(x=>x.pass).length}/${inputChecks.length} frozen inputs match`);
  add('IT-IR-ID-02', evidenceChecks.every(x=>x.pass) && evidenceChecks.length===56, `${evidenceChecks.filter(x=>x.pass).length}/${evidenceChecks.length} executor images match`);
  add('IT-IR-ID-03', observationChecks.every(x=>x.pass) && freezeComponentChecks.every(x=>x.pass) && topIdentityChecks.every(x=>x.check.pass), 'freeze components, observation files, and top pointers match');
  add('IT-IR-SCOPE-01', results.staticContract.worksetMatch && results.staticContract.freezeMatch, `${workset.workset_id} / ${freeze.freeze_id}`);
  add('IT-IR-COPY-01', results.staticContract.candidateMainEqualsGate3Main && results.staticContract.candidateHeaderEqualsGate3Header && results.staticContract.candidateFooterEqualsGate3Footer, 'Gate 4 body/header/footer DOM text baseline matches approved Gate 3 source');
  add('IT-IR-COPY-02', results.staticContract.approvedBTextContainedInMain, `approved B normalized text ${results.staticContract.exactApprovedBSimpleTextLength}; candidate main normalized text ${results.staticContract.candidateMainSimpleTextLength}`);
  add('IT-IR-MODULE-01', JSON.stringify(results.staticContract.sevenModuleTokens)===JSON.stringify(expectedModules), results.staticContract.sevenModuleTokens.join(', '));
  add('IT-IR-META-01', Object.values(results.staticContract.requiredMetadata).every(Boolean), JSON.stringify(results.staticContract.requiredMetadata));
  for (const [width, wr] of Object.entries(results.widths)) {
    add(`IT-IR-${width}-LAYOUT`, wr.info.scrollWidth===wr.info.clientWidth && wr.info.bodyScrollWidth<=wr.info.clientWidth && wr.info.clipped.length===0 && Math.abs(wr.info.footerBottom-wr.info.fullHeight)<=1, `scroll ${wr.info.scrollWidth}/${wr.info.clientWidth}; clipped ${wr.info.clipped.length}; footer ${wr.info.footerBottom}/${wr.info.fullHeight}`);
    add(`IT-IR-${width}-MODULES`, JSON.stringify(wr.info.modules.map(x=>x.id))===JSON.stringify(expectedModules) && wr.info.h1Count===1, `${wr.info.modules.map(x=>x.id).join(', ')}; h1=${wr.info.h1Count}`);
    add(`IT-IR-${width}-LINKS`, JSON.stringify(wr.info.mainLinks)===JSON.stringify(expectedMainLinks), `${wr.info.mainLinks.length} main links in approved order with exact hrefs`);
    add(`IT-IR-${width}-TARGETS`, wr.info.tooSmall.length===0, `${wr.info.controls.length} visible controls; ${wr.info.tooSmall.length} below 44px`);
    add(`IT-IR-${width}-BOUNDARY`, wr.info.cooParagraph && wr.info.cooParagraph.childCount===1 && wr.info.neutralGrade && wr.info.destinationPhrases.every(x=>x.present) && wr.info.euBoundary && wr.info.rfqBoundary && wr.info.formsInMain===0, 'COO adjacent, Grade neutral, Italy destination, EU/RFQ boundaries, no page form');
    add(`IT-IR-${width}-FOCUS`, wr.stateRecords.filter(x=>x.state).every(x=>x.geometryStable && (x.state!=='focus' || x.style.outlineWidth==='3px')) && wr.stateRecords.filter(x=>x.collision).every(x=>x.collision.intersects.length===0), `${wr.stateRecords.filter(x=>x.state).length} states; focus outline stable; collisions ${wr.stateRecords.filter(x=>x.collision).reduce((n,x)=>n+x.collision.intersects.length,0)}`);
    add(`IT-IR-${width}-ACTIONS`, wr.clickTests.every(x=>x.pass), JSON.stringify(wr.clickTests));
    add(`IT-IR-${width}-COOKIE`, wr.cookie.opened.open && wr.cookie.opened.modal && wr.cookie.opened.activeText==='Close' && wr.cookie.wrapBack==='Read Cookie Policy' && wr.cookie.wrapForward==='Close' && !wr.cookie.closed.open && wr.cookie.closed.activeId==='cookie-trigger', JSON.stringify(wr.cookie));
    if (wr.menu.applicable) add(`IT-IR-${width}-MENU`, !wr.menu.opened.hidden && wr.menu.opened.expanded==='true' && wr.menu.opened.activeText==='Home' && wr.menu.opened.mainInert && wr.menu.opened.footerInert && wr.menu.wrapBack==='Request a Quote' && wr.menu.wrapForward==='Close' && wr.menu.closed.hidden && wr.menu.closed.expanded==='false' && wr.menu.closed.activeText==='Menu' && !wr.menu.closed.mainInert && !wr.menu.closed.footerInert, JSON.stringify(wr.menu));
  }
  add('IT-IR-RUNTIME-01', results.pageErrors.length===0 && results.consoleErrors.length===0 && results.blockedNetwork.length===0, `pageErrors=${results.pageErrors.length}; consoleErrors=${results.consoleErrors.length}; externalRequests=${results.blockedNetwork.length}`);
  results.summary = { total: results.checks.length, passed: results.checks.filter(x=>x.pass).length, failed: results.checks.filter(x=>!x.pass).length, failedIds: results.checks.filter(x=>!x.pass).map(x=>x.id), independentImages: Object.values(results.widths).reduce((n,w)=>n+1+w.segmentPaths.length+w.stateRecords.filter(x=>x.state).length+(w.menu.image?1:0)+1,0) };
  fs.writeFileSync(path.join(outDir, 'independent-runtime.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results.summary));
}

main().catch(err => { console.error(err); process.exit(1); });
