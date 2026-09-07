const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const source = process.argv[2];
if (!source) throw Error('Pass the actual candidate HTML path.');
const base = 'D:/23MySec/pages/products/chloride-process/05_review/gate3-project-control-v0.1';
const out = path.join(base, process.argv[3] || 'final');
fs.mkdirSync(out,{recursive:true});
const expected = JSON.parse(fs.readFileSync(path.join(base, 'input-check.json'), 'utf8'));
const norm = s => s.replace(/\s+/g, ' ').trim();
(async () => {
  const browser = await chromium.launch({headless:true});
  const results = [];
  for (const width of [1440,768,390]) {
    const context = await browser.newContext({viewport:{width,height:900},deviceScaleFactor:1});
    const requests = [];
    await context.route(/^https?:/, route => {requests.push(route.request().url());return route.abort();});
    const page = await context.newPage();
    await page.goto(pathToFileURL(source).href);
    await page.evaluate(() => document.fonts.ready);
    const dom = await page.evaluate(() => {
      const visible = e => {const r=e.getBoundingClientRect(); const s=getComputedStyle(e); return r.width>0 && r.height>0 && s.visibility!=='hidden' && !e.closest('[hidden]');};
      const main=document.querySelector('main');
      const box = e => {const r=e.getBoundingClientRect();return {text:e.innerText||e.getAttribute('aria-label')||'',width:r.width,height:r.height,x:r.x,y:r.y};};
      return {
        mainText:main?.innerText,
        gradeEntries:[...(main||document).querySelectorAll('h3')].filter(e=>/^M-/.test(e.textContent.trim())).map(e=>{const host=e.closest('article,li,.grade-row')||e.parentElement;return {name:e.textContent.trim(),text:host.innerText,links:[...host.querySelectorAll('a')].map(a=>({text:a.innerText,href:a.getAttribute('href')}))};}),
        headings:[...(main||document).querySelectorAll('h1,h2,h3')].map(e=>({level:+e.tagName.slice(1),text:e.innerText})),
        links:[...(main||document).querySelectorAll('a')].map(e=>({text:e.innerText,href:e.getAttribute('href')})),
        width:innerWidth,scrollWidth:document.documentElement.scrollWidth,
        header:document.querySelector('header')?box(document.querySelector('header')):null,
        targets:[...document.querySelectorAll('a,button,input,select,summary')].filter(visible).map(box),
        clippedText:[...document.querySelectorAll('h1,h2,h3,p,a,button')].filter(visible).filter(e=>{const s=getComputedStyle(e);return /(hidden|clip)/.test(s.overflow+s.overflowX+s.overflowY)&&(e.scrollWidth>e.clientWidth+1||e.scrollHeight>e.clientHeight+1);}).map(box),
        brokenImages:[...document.images].filter(e=>!e.complete||!e.naturalWidth).map(e=>e.src),
        formsInMain:main?.querySelectorAll('form').length,
        pageButtons:main?[...main.querySelectorAll('button')].map(e=>e.innerText):[],
        nav:[...document.querySelectorAll('nav')].map(e=>({label:e.getAttribute('aria-label'),visible:visible(e),current:[...e.querySelectorAll('[aria-current="page"]')].map(a=>a.innerText)}))
      };
    });
    const check={width,sourceSha256:crypto.createHash('sha256').update(fs.readFileSync(source)).digest('hex'),
      missingParagraphs:expected.paragraphs.filter(p=>!norm(dom.mainText||'').includes(norm(p))),
      fullVisibleTextMatches:norm(dom.mainText||'')===norm(expected.fullText),
      gradeRelationsMatch:dom.gradeEntries.length===8&&expected.grades.every((g,i)=>{const actual=dom.gradeEntries[i];return actual?.name===g.name&&norm(actual.text).includes(norm(g.summary))&&actual.links.some(a=>a.href===g.href&&a.text==='View '+g.name);}),
      headingsMatch:JSON.stringify(dom.headings.map(h=>({...h,text:norm(h.text)})))===JSON.stringify(expected.headings),
      missingLinks:expected.links.filter(a=>!dom.links.some(b=>norm(a.text)===norm(b.text)&&a.href===b.href)),dom,requests};
    try { await page.screenshot({path:path.join(out,`independent-${width}.png`),fullPage:true}); }
    catch(error) { check.screenshotError=String(error); }
    results.push(check);
    await context.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(out,'independent-observations.json'),JSON.stringify(results,null,2));
  console.log(JSON.stringify(results.map(({width,missingParagraphs,headingsMatch,missingLinks,dom,requests})=>({width,missingParagraphs,headingsMatch,missingLinks,scrollWidth:dom.scrollWidth,headerHeight:dom.header?.height,smallTargets:dom.targets.filter(t=>t.width<43.9||t.height<43.9),clippedText:dom.clippedText,brokenImages:dom.brokenImages,requests})),null,2));
})();
