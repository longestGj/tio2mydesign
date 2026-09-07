import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { marked } from 'file:///C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/marked/lib/marked.esm.js';

const require=createRequire(import.meta.url);
const {renderSharedChrome}=require('D:/23MySec/docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs');
const root='D:/23MySec';
const page=`${root}/pages/applications/plastics`;
const out=`${page}/04_planning/gate3-v0.1`;
const diag=`${out}/diagnostic_support`;
const source=`${out}/APP-PLAS_GATE3_WIREFRAME_V0.1.html`;
const bPath=`${page}/04_planning/APP-PLAS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md`;
const sharedDir=`${root}/docs/architecture/gate3-shared-consumer-v0.2`;
const primaryLogo=`${root}/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg`;
const reverseLogo=`${root}/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg`;
const font=`${out}/dependencies/Inter-Variable.ttf`;
const fontLicense=`${out}/dependencies/Inter-OFL.txt`;
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id=(p,role)=>({path:p,bytes:fs.statSync(p).size,sha256:sha(p),...(role?{role}:{})});
const save=(p,value)=>fs.writeFileSync(p,typeof value==='string'?value:`${JSON.stringify(value,null,2)}\n`);
const normalize=s=>String(s).replace(/\s+/g,' ').trim();
const strip=s=>normalize(String(s).replace(/<[^>]+>/g,' '))
  .replace(/\s+([.,;:!?])/g,'$1')
  .replaceAll('&#39;',"'").replaceAll('&quot;','"').replaceAll('&amp;','&').replaceAll('&lt;','<').replaceAll('&gt;','>');

fs.copyFileSync(`${sharedDir}/Inter-Variable.ttf`,font);
fs.copyFileSync(`${sharedDir}/Inter-OFL.txt`,fontLicense);

const raw=fs.readFileSync(bPath,'utf8');
const match=raw.match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/);
if(!match)throw new Error('BUYER_COPY markers missing');
const buyerMarkdown=match[1].trim();
let rendered=marked.parse(buyerMarkdown,{gfm:true});
const escAttr=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
rendered=rendered.replace(/<a href="([^"]+)">((?:(?!<\/a>)[\s\S])*?)<\/a>\./g,(_m,href,inner)=>`<a href="${href}" aria-label="${escAttr(strip(inner))}">${inner}.</a>`);

function labelTable(table){
  const head=(table.match(/<thead>[\s\S]*?<\/thead>/)||[''])[0];
  const headers=[...head.matchAll(/<th>([\s\S]*?)<\/th>/g)].map(m=>strip(m[1]));
  if(!headers.length)return table;
  let cell=0;
  return table.replace(/<tbody>([\s\S]*?)<\/tbody>/,(_,body)=>`<tbody>${body.replace(/<td>([\s\S]*?)<\/td>/g,(_m,content)=>{
    const label=headers[cell%headers.length]; cell+=1;
    return `<td><span class="cell-label" aria-hidden="true">${label}</span><span class="cell-value">${content}</span></td>`;
  })}</tbody>`);
}
rendered=rendered.replace(/<table>[\s\S]*?<\/table>/g,labelTable);

const sectionMeta=[
  ['PLAS-02','define-your-plastics-system'],['PLAS-03','judge-optical-results'],['PLAS-04','dispersion-and-defects'],
  ['PLAS-05','durability-evidence'],['PLAS-06','final-plastic-route'],['PLAS-07','resin-context-questions'],
  ['PLAS-08','tds-comparison'],['PLAS-09','matched-comparison'],['PLAS-10','grades-to-review'],
  ['PLAS-11','prepare-your-request'],['PLAS-12','technical-sources']
];
const parts=rendered.split(/(?=<h2>)/);
if(parts.length!==12)throw new Error(`Expected Hero plus 11 H2 modules, found ${parts.length}`);
const hero=parts[0].replace('<h1>','<h1 id="page-title">').replace('</a> · <a','</a><span class="cta-separator" aria-hidden="true">·</span><a');
const modules=[`<section class="hero-section" data-module-id="PLAS-01"><div class="hero-inner">${hero}</div></section>`];
for(let i=1;i<parts.length;i++){
  const [moduleId,anchor]=sectionMeta[i-1];
  const section=parts[i].replace('<h2>',`<h2 id="${anchor}">`);
  modules.push(`<section class="content-section module-${moduleId.toLowerCase()}" data-module-id="${moduleId}"><div class="section-inner">${section}</div></section>`);
}

const chrome=renderSharedChrome({
  currentPageId:'APP-000',
  primaryLogoSrc:pathToFileURL(primaryLogo).href,
  reverseLogoSrc:pathToFileURL(reverseLogo).href,
  fontSrc:pathToFileURL(font).href
});

const pageCss=`
:root{color-scheme:light;--navy:#062b5b;--deep:#031b3a;--teal:#008078;--accent:#00a99d;--body:#334155;--soft:#f5f8fb;--border:#d9e2ec}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#fff;color:var(--body);font-family:Inter,Arial,sans-serif}.page-shell{overflow:clip}.buyer-copy{min-width:0}.hero-section{padding:76px 32px 72px;background:var(--deep);color:#fff}.hero-inner,.section-inner{width:min(1200px,100%);margin:0 auto}.hero-section h1{max-width:840px;margin:0;color:#fff;font-size:clamp(44px,5vw,64px);line-height:1.06;letter-spacing:-.035em}.hero-section p{max-width:850px;margin:26px 0 0;color:#e5edf5;font-size:19px;line-height:1.7}.hero-section p:last-child{display:flex;align-items:center;flex-wrap:wrap;gap:0 10px;margin-top:32px;color:#9eddd8}.hero-section a{min-height:48px;padding:0 18px;border:1px solid #64c7c0;border-radius:7px;color:#fff;background:transparent;text-decoration:none;font-weight:650}.hero-section a:first-child{border-color:var(--teal);background:var(--teal)}.content-section{padding:68px 32px;border-bottom:1px solid #e7edf3}.content-section:nth-child(odd){background:var(--soft)}.content-section h2{max-width:900px;margin:0 0 26px;color:var(--navy);font-size:clamp(30px,3vw,40px);line-height:1.16;letter-spacing:-.022em}.content-section p,.content-section li{font-size:17px;line-height:1.72}.content-section p{max-width:930px;margin:0 0 20px}.content-section ul,.content-section ol{margin:20px 0 0;padding-left:24px}.content-section li+li{margin-top:10px}.buyer-copy a{min-width:44px;min-height:44px;display:inline-flex;align-items:center;color:var(--teal);font-weight:650;text-underline-offset:3px}.buyer-copy a:focus-visible{outline:3px solid var(--teal);outline-offset:3px;border-radius:3px}.cta-separator{color:#9eddd8}.module-plas-02 ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 34px;max-width:1050px}.module-plas-02 li+li{margin-top:0}.module-plas-06 .section-inner{padding:34px 38px;border-left:5px solid var(--teal);background:#fff}.module-plas-08 ul{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding:0;list-style:none}.module-plas-08 li{margin:0;padding:22px;border:1px solid var(--border);border-radius:10px;background:#fff}.module-plas-11 ul{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;padding:0;list-style:none}.module-plas-11 li{margin:0;padding:22px;border:1px solid var(--border);border-radius:10px;background:#fff}.module-plas-12 ol{columns:2;column-gap:54px;padding-left:28px}.module-plas-12 li{break-inside:avoid;margin:0 0 16px;padding-left:6px}.module-plas-12 li+li{margin-top:0}table{width:100%;margin:28px 0;border-collapse:collapse;table-layout:fixed;background:#fff}th,td{padding:17px 18px;border:1px solid var(--border);vertical-align:top;text-align:left;font-size:15px;line-height:1.58;overflow-wrap:anywhere}th{color:var(--navy);background:#edf4f8;font-weight:700}.module-plas-04 th:first-child{width:24%}.module-plas-10 th:first-child{width:18%}.module-plas-10 th:nth-child(2){width:22%}.cell-label{display:none}.cell-value{display:block}.module-plas-10 tbody tr:nth-child(even),.module-plas-07 tbody tr:nth-child(even){background:#fafcfe}
@media(max-width:1100px){.hero-section{padding:58px 32px}.content-section{padding:56px 32px}.hero-section p{font-size:18px}.module-plas-11 ul{grid-template-columns:1fr}.module-plas-12 ol{columns:1}.module-plas-04 th,.module-plas-04 td{padding:14px;font-size:14px}}
.buyer-copy .hero-section a{color:#fff}.module-plas-12 a{display:inline-block;max-width:100%;vertical-align:middle}
@media(max-width:640px){html{scroll-behavior:auto}.hero-section{padding:46px 20px 48px}.hero-section h1{font-size:40px}.hero-section p{font-size:17px}.hero-section p:last-child{display:grid;grid-template-columns:1fr;gap:10px}.hero-section p:last-child a{width:100%;justify-content:center}.cta-separator{display:none}.content-section{padding:46px 20px}.content-section h2{font-size:30px}.content-section p,.content-section li{font-size:16px}.module-plas-02 ul,.module-plas-08 ul{grid-template-columns:1fr}.module-plas-06 .section-inner{padding:28px 22px}.buyer-copy table,.buyer-copy thead,.buyer-copy tbody,.buyer-copy tr,.buyer-copy td{display:block}.buyer-copy thead{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.buyer-copy table{border:0;background:transparent}.buyer-copy tbody{display:grid;gap:16px}.buyer-copy tr{border:1px solid var(--border);border-radius:10px;background:#fff;overflow:hidden}.buyer-copy td{display:grid;grid-template-columns:minmax(108px,36%) 1fr;gap:14px;padding:14px 16px;border:0;border-bottom:1px solid var(--border);font-size:15px}.buyer-copy td:last-child{border-bottom:0}.cell-label{display:block;color:var(--navy);font-size:13px;font-weight:750;line-height:1.45}.module-plas-10 td{grid-template-columns:92px 1fr}.module-plas-12 ol{padding-left:24px}.module-plas-12 li{overflow-wrap:anywhere}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`;

const html=`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Titanium Dioxide for Plastics | Grade Evaluation</title><meta name="description" content="Compare TiO2 candidates in a defined plastic resin, process, specimen and exposure. Review Product Grades and prepare a document, sample or quotation request."><style>${chrome.style}</style><style>${pageCss}</style></head>
<body>${chrome.header}<main class="page-shell"><article id="buyer-copy" class="buyer-copy" aria-labelledby="page-title">${modules.join('')}</article></main>${chrome.footer}${chrome.dialog}<script>${chrome.behavior}</script></body></html>`;
save(source,html);

const originalHtml=marked.parse(buyerMarkdown,{gfm:true});
const expectedText=strip(originalHtml);
const links=[...originalHtml.matchAll(/<a href="([^"]+)">([\s\S]*?)<\/a>/g)].map(m=>({href:m[1],text:strip(m[2])}));
const binding={
  pageId:'APP-PLAS',generatedAt:new Date().toISOString(),source:id(source),
  approvedCopy:id(bPath,'B'),buyerCopySha256:sha(bPath),
  expected:{moduleIds:['PLAS-01',...sectionMeta.map(v=>v[0])],h1:'Titanium Dioxide for Plastics',h2Count:11,tableCount:3,sourceCount:13,gradeSet:['M-350','M-510','M-200','M-108','M-210','M-340','M-886','M-2377'],links,desktopNormalizedText:expectedText,desktopNormalizedTextSha256:crypto.createHash('sha256').update(expectedText).digest('hex')},
  shared:{manifest:id(`${root}/docs/architecture/gate3-shared-consumer-v0.2/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.2.md`),package:id(`${sharedDir}/consumer-package.json`),renderer:id(`${sharedDir}/render-shared-chrome.cjs`),style:id(`${sharedDir}/shared-chrome.css`),behavior:id(`${sharedDir}/shared-chrome-behavior.js`)},
  durableDependencies:[id(primaryLogo),id(reverseLogo),id(font),id(fontLicense)]
};
save(`${out}/input-binding.json`,binding);
console.log(JSON.stringify({source:id(source),modules:binding.expected.moduleIds.length,links:links.length,desktopTextSha256:binding.expected.desktopNormalizedTextSha256},null,2));
