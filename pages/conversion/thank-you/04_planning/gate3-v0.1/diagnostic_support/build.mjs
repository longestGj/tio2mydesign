import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const root = 'D:/23MySec';
const out = `${root}/pages/conversion/thank-you/04_planning/gate3-v0.1`;
const source = `${out}/CONV-THANK_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`;
const bPath = `${root}/pages/conversion/thank-you/04_planning/CONV-THANK_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`;
const sharedDir = `${root}/docs/architecture/gate3-shared-consumer-v0.2`;
const { renderSharedChrome } = require(`${sharedDir}/render-shared-chrome.cjs`);

fs.mkdirSync(`${out}/approval_core`, { recursive: true });
fs.mkdirSync(`${out}/diagnostic_support/render`, { recursive: true });
fs.mkdirSync(`${out}/dependencies`, { recursive: true });
fs.copyFileSync(`${sharedDir}/Inter-Variable.ttf`, `${out}/dependencies/Inter-Variable.ttf`);
fs.copyFileSync(`${sharedDir}/Inter-OFL.txt`, `${out}/dependencies/Inter-OFL.txt`);

const raw = fs.readFileSync(bPath, 'utf8');
const copy = {};
for (const match of raw.matchAll(/<span id="([^"]+)">([\s\S]*?)<\/span>/g)) {
  const link = match[2].match(/^\[([^\]]+)\]\(([^)]+)\)$/);
  copy[match[1]] = link ? { label: link[1], href: link[2] } : match[2];
}
const expectedIds = ['BC-Q-01','BC-Q-02','BC-Q-03','BC-Q-04','BC-Q-05','BC-D-01','BC-D-02','BC-D-03','BC-D-04','BC-D-05','BC-S-01','BC-S-02','BC-S-03','BC-S-04','BC-S-05','BC-I-01','BC-I-02','BC-I-03','BC-I-04','BC-I-05'];
if (expectedIds.some(id => !copy[id])) throw new Error('Approved Buyer Copy anchors are incomplete');

const esc = value => String(value).replace(/[&<>\"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
const action = (entry, kind) => `<a class="resultAction ${kind}" href="${esc(entry.href)}">${esc(entry.label)}</a>`;
const success = (key, iconLabel) => `<section class="resultPanel successState" data-result-state="${key}" hidden aria-labelledby="${key}-title"><div class="successCue"><span class="successIcon" aria-hidden="true">✓</span><span>${esc(copy[`BC-${iconLabel}-01`])}</span></div><h1 id="${key}-title">${esc(copy[`BC-${iconLabel}-02`])}</h1><p>${esc(copy[`BC-${iconLabel}-03`])}</p><div class="resultActions">${action(copy[`BC-${iconLabel}-04`], 'primary')}${action(copy[`BC-${iconLabel}-05`], 'secondary')}</div></section>`;
const invalid = `<section class="resultPanel directState" data-result-state="direct" hidden aria-labelledby="direct-title"><h1 id="direct-title">${esc(copy['BC-I-01'])}</h1><p>${esc(copy['BC-I-02'])}</p><div class="resultActions threeActions">${action(copy['BC-I-03'], 'primary')}${action(copy['BC-I-04'], 'secondary')}${action(copy['BC-I-05'], 'secondary')}</div></section>`;

const shared = renderSharedChrome({
  currentPageId: 'HOME-001',
  primaryLogoSrc: pathToFileURL(`${root}/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg`).href,
  reverseLogoSrc: pathToFileURL(`${root}/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg`).href,
  fontSrc: pathToFileURL(`${out}/dependencies/Inter-Variable.ttf`).href
});
shared.header = shared.header.replaceAll(' aria-current="page"', '');

const pageCss = `
:root{color-scheme:light;--navy:#062b5b;--deep:#031b3a;--teal:#008078;--body:#334155;--soft:#f5f8fb;--line:#d9e2ec}
*{box-sizing:border-box}body{margin:0;color:var(--body);background:#fff;font-family:Inter,Arial,sans-serif;font-size:16px;line-height:1.65}.resultMain{min-height:520px;padding:76px 32px;background:var(--soft);display:grid;place-items:center}.resultPanel{width:min(860px,100%);padding:56px;border:1px solid var(--line);border-radius:10px;background:#fff;text-align:center}.resultPanel[hidden]{display:none}.successCue{display:flex;align-items:center;justify-content:center;gap:10px;color:var(--teal);font-size:14px;font-weight:750;letter-spacing:.09em}.successIcon{width:44px;height:44px;border:2px solid var(--teal);border-radius:50%;display:inline-grid;place-items:center;font-size:23px;line-height:1}.resultPanel h1{max-width:720px;margin:22px auto 18px;color:var(--navy);font-size:clamp(40px,4.2vw,58px);line-height:1.12;letter-spacing:-.025em}.resultPanel p{max-width:680px;margin:0 auto;color:var(--body);font-size:18px}.resultActions{margin-top:32px;display:flex;justify-content:center;flex-wrap:wrap;gap:12px}.resultAction{min-width:160px;min-height:48px;padding:11px 20px;border:1px solid var(--teal);border-radius:7px;display:inline-flex;align-items:center;justify-content:center;color:var(--teal);font-weight:700;text-decoration:none}.resultAction.primary{color:#fff;background:var(--teal)}.resultAction:focus-visible{outline:3px solid var(--teal);outline-offset:3px}
@media(max-width:1100px){.resultMain{min-height:500px;padding:56px 24px}.resultPanel{padding:48px 36px}.resultPanel h1{font-size:44px}}
@media(max-width:560px){.resultMain{min-height:520px;padding:40px 20px}.resultPanel{padding:36px 20px}.resultPanel h1{margin-top:18px;font-size:36px}.resultPanel p{font-size:16px}.resultActions{display:grid;grid-template-columns:1fr;margin-top:28px}.resultAction{width:100%;min-width:0;min-height:48px}.successCue{flex-direction:column;gap:8px}}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}
`;

const stateScript = `
(()=>{
  const allowed=['quote','documents','sample'];
  const requested=new URLSearchParams(location.search).get('type');
  let marker=null;
  try{marker=JSON.parse(sessionStorage.getItem('tio2my_thankyou_gate3_marker')||'null')}catch{}
  const valid=marker&&allowed.includes(requested)&&marker.type===requested&&marker.acknowledged===true&&marker.session==='gate3-local-simulation';
  const state=valid?requested:'direct';
  for(const panel of document.querySelectorAll('[data-result-state]')) panel.hidden=panel.dataset.resultState!==state;
  document.documentElement.dataset.resolvedState=state;
  window.gate3ResultState={state,evidenceType:'LOCAL_SIMULATION',productionReceiptProven:false};
})();
window.localNavigationIntents=[];
document.addEventListener('click',event=>{const link=event.target.closest('a');if(!link)return;event.preventDefault();window.localNavigationIntents.push({href:link.getAttribute('href')});},true);
`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Thank You | TiO2 Malaysia</title><meta name="description" content="View confirmation and next steps for a TiO2 Malaysia quotation, document or sample request, or choose the request you would like to make."><link rel="canonical" href="https://tio2malaysia.com/thank-you/"><style>${shared.style}\n${pageCss}</style></head><body>${shared.header}<main class="resultMain" id="main">${success('quote','Q')}${success('documents','D')}${success('sample','S')}${invalid}</main>${shared.footer}${shared.dialog}<script>${shared.behavior}</script><script>${stateScript}</script></body></html>`;
fs.writeFileSync(source, html);
console.log(JSON.stringify({source,bytes:fs.statSync(source).size,copyAnchors:expectedIds.length,states:4},null,2));
