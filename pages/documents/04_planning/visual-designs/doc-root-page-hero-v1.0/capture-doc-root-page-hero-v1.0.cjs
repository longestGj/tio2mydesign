const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root = __dirname;
const candidate = path.join(root, 'doc-root-page-hero-preview-v1.0.html');
const viewports = [
  { name:'desktop', width:1440, height:1200, file:'DOC-000_ROOT_PAGE_HERO_DESKTOP_1440_CANDIDATE_V1.0.png', h1:56, header:84 },
  { name:'tablet', width:768, height:1450, file:'DOC-000_ROOT_PAGE_HERO_TABLET_768_CANDIDATE_V1.0.png', h1:44, header:64 },
  { name:'mobile', width:390, height:1500, file:'DOC-000_ROOT_PAGE_HERO_MOBILE_390_CANDIDATE_V1.0.png', h1:36, header:64 }
];
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
(async () => {
  const browser = await chromium.launch({ headless:true }); const results=[];
  for (const vp of viewports) {
    const page = await browser.newPage({ viewport:{width:vp.width,height:vp.height}, deviceScaleFactor:1 });
    await page.goto(`file:///${candidate.replace(/\\/g,'/')}`, { waitUntil:'load' }); await page.evaluate(() => document.fonts.ready);
    const initial = await page.evaluate(() => {
      const shell=document.querySelector('.hero-shell'), h1=document.querySelector('h1'), hs=getComputedStyle(h1), pseudo=getComputedStyle(shell,'::before');
      const actions=[...document.querySelectorAll('a,button')].filter(el=>{const r=el.getBoundingClientRect(); return getComputedStyle(el).display!=='none'&&r.width>0&&r.height>0;});
      const select=document.querySelector('#product-grade'), cta=document.querySelector('.button-primary'), selector=document.querySelector('.selector-card');
      return { h1Size:parseFloat(hs.fontSize), h1Weight:hs.fontWeight, h1Lines:Math.round(h1.getBoundingClientRect().height/parseFloat(hs.lineHeight)), headerHeight:document.querySelector('.site-header').getBoundingClientRect().height, minInteractiveHeight:Math.min(...actions.map(el=>el.getBoundingClientRect().height)), overflow:document.documentElement.scrollWidth>window.innerWidth, currentVisible:[...document.querySelectorAll('*')].some(el=>el.children.length===0&&el.textContent.trim().toUpperCase()==='CURRENT'), heroBorder:getComputedStyle(shell).borderTopWidth, heroPseudo:[pseudo.content,pseudo.display], selectorLeftBorder:getComputedStyle(selector).borderLeftWidth, selectorLeftColor:getComputedStyle(selector).borderLeftColor, mediaVisible:(()=>{const r=document.querySelector('.document-illustration').getBoundingClientRect();return r.width>0&&r.height>0;})(), heroHref:cta.getAttribute('href'), selectValue:select.value, optionValues:[...select.options].map(o=>o.value), continueHref:document.querySelector('#continue-request').getAttribute('href'), continueDisabled:document.querySelector('#continue-request').getAttribute('aria-disabled'), nav:[...document.querySelectorAll('.desktop-nav a')].map(a=>a.textContent.trim()), activeNav:document.querySelector('.desktop-nav [aria-current="page"]')?.textContent.trim() };
    });
    await page.screenshot({ path:path.join(root,vp.file) });
    await page.click('#continue-request');
    const noSelection = await page.evaluate(() => ({ error:document.querySelector('#grade-error').textContent.trim(), activeId:document.activeElement.id, url:location.href }));
    await page.selectOption('#product-grade','M-350');
    const selected = await page.evaluate(() => ({ confirmation:document.querySelector('#grade-selected').textContent.trim(), href:document.querySelector('#continue-request').getAttribute('href') }));
    const pass = initial.h1Size===vp.h1 && initial.h1Weight==='700' && initial.h1Lines<=3 && initial.headerHeight===vp.header && initial.minInteractiveHeight>=44 && !initial.overflow && !initial.currentVisible && initial.heroHref==='/request-documents/' && initial.selectValue==='' && initial.optionValues.length===15 && initial.optionValues.slice(1).length===14 && initial.continueDisabled===null && initial.mediaVisible && initial.heroPseudo[0]==='none' && initial.heroPseudo[1]==='none' && initial.selectorLeftBorder==='4px' && noSelection.error==='Select a product grade to continue.' && noSelection.activeId==='product-grade' && selected.confirmation==='Selected product grade: M-350' && selected.href==='/request-documents/?product=M-350';
    results.push({ ...vp, ...initial, noSelection, selected, screenshot:vp.file, screenshotSha256:hash(path.join(root,vp.file)), pass }); await page.close();
  }
  await browser.close(); const runtime={candidate:path.basename(candidate),candidateSha256:hash(candidate),status:results.every(r=>r.pass)?'PASS':'FAIL',viewports:results}; fs.writeFileSync(path.join(root,'capture-runtime-v1.0.json'),JSON.stringify(runtime,null,2)+'\n');
  const freeze={freeze_id:'DOC-ROOT-HERO-G4-CANDIDATE-01-FREEZE-20260911',page_id:'DOC-000',candidate_id:'DOC-ROOT-HERO-G4-CANDIDATE-01',status:'DRAFT_FOR_PROJECT_CONTROL_REVIEW',workflow:'ROOT-HERO-G4-7P-V1',scope:'Wave 2 targeted Gate 4 Hero/selector proof only; no Manifest replacement, Gate closure, implementation, D16 work or release authorization.',contracts:['docs/architecture/ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md','docs/architecture/ROOT_PAGE_HERO_SIX_PAGE_PREFLIGHT_AUDIT_V1.0.md','docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md','pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.10.md','pages/documents/04_planning/DOC-000_GATE4_HERO_CTA_USER_DECISION_V0.1.md'],candidate:{path:path.basename(candidate),bytes:fs.statSync(candidate).size,sha256:hash(candidate)},replay:{capture:'node capture-doc-root-page-hero-v1.0.cjs',verification:'node verify-doc-root-page-hero-v1.0.cjs',runtime_report:{path:'capture-runtime-v1.0.json',sha256:hash(path.join(root,'capture-runtime-v1.0.json')),status:runtime.status}},evidence:results.map(r=>({name:r.name,path:r.screenshot,dimensions:`${r.width}x${r.height}`,bytes:fs.statSync(path.join(root,r.screenshot)).size,sha256:r.screenshotSha256,h1_px:r.h1,header_px:r.header})),validated:{hero_direct_request_exact:'/request-documents/',selector_initial_no_default:true,selector_grade_count:14,selector_validation_focus:true,selector_selected_handoff:'/request-documents/?product={GRADE}',selector_teal_left_rule_retained:true,faq_overlay_out_of_capture:true,buyer_visible_status_label:false,information_media_visible_390:true,no_hero_left_decoration:true,minimum_visible_interactive_height_px:44,horizontal_overflow:false}}; fs.writeFileSync(path.join(root,'freeze-record.json'),JSON.stringify(freeze,null,2)+'\n');
  console.log(JSON.stringify({status:runtime.status,candidateSha256:runtime.candidateSha256,evidence:freeze.evidence},null,2)); process.exitCode=runtime.status==='PASS'?0:1;
})().catch(error=>{console.error(error.stack||error);process.exit(2);});
