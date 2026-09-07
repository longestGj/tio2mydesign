import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { marked } = require('marked');
const root = 'D:/23MySec';
const outDir = path.join(root, 'pages/applications/coatings/04_planning/gate3-v0.3');
const copyPath = path.join(root, 'pages/applications/coatings/04_planning/APP-COAT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md');
const sharedDir = path.join(root, 'docs/architecture/gate3-shared-consumer-v0.2');
const { renderSharedChrome } = require(path.join(sharedDir, 'render-shared-chrome.cjs'));

const raw = fs.readFileSync(copyPath, 'utf8');
const visible = raw.match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/)?.[1]?.trim();
if (!visible) throw new Error('Approved buyer-copy markers not found');

const primaryLogo = pathToFileURL(path.join(root, 'brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg')).href;
const reverseLogo = pathToFileURL(path.join(root, 'brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg')).href;
const shared = renderSharedChrome({ currentPageId: 'APP-000', primaryLogoSrc: primaryLogo, reverseLogoSrc: reverseLogo });

const moduleClasses = [
  'definition', 'optical', 'dispersion', 'durability', 'endpoint-table',
  'cost', 'grades', 'request', 'sources'
];
const structuralCopy = visible.replace(/^<a id="(?:define-the-coating|grades-to-review|technical-sources)"><\/a>\s*$/gm, '').replace(/\n{3,}/g, '\n\n');
const sectionIds = ['define-the-coating',null,null,null,null,null,'grades-to-review',null,'technical-sources'];
const firstH2 = structuralCopy.search(/^## /m);
const heroMd = structuralCopy.slice(0, firstH2).trim();
const remaining = structuralCopy.slice(firstH2).trim();
const chunks = remaining.split(/(?=^## )/m);

function enhanceTables(html) {
  return html.replace(/<table>[\s\S]*?<\/table>/g, table => {
    const headers = [...table.matchAll(/<th>([\s\S]*?)<\/th>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    let column = 0;
    return table.replace(/<tr>([\s\S]*?)<\/tr>/g, (row, cells) => {
      column = 0;
      const labelled = cells.replace(/<td>/g, () => `<td data-label="${headers[column++] ?? ''}">`);
      return `<tr>${labelled}</tr>`;
    });
  });
}

let hero = marked.parse(heroMd);
hero = hero
  .replace('<p>Home / Applications / Coatings</p>', '<nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/applications/">Applications</a><span>/</span><span aria-current="page">Coatings</span></nav>')
  .replace('<p>COATINGS APPLICATION</p>', '<p class="eyebrow">COATINGS APPLICATION</p>')
  .replace(/<p><a href="#grades-to-review">Review Coatings Grades<\/a>\s+<a href="#define-the-coating">Build Your Comparison Basis<\/a><\/p>/,
    '<div class="heroActions"><a class="primaryAction" href="#grades-to-review">Review Coatings Grades</a><a class="secondaryAction" href="#define-the-coating">Build Your Comparison Basis</a></div>');

const modules = chunks.map((md, index) => {
  let body = enhanceTables(marked.parse(md));
  if (index === 7) {
    const cardStart = body.indexOf('<h3>');
    const intro = body.slice(0, cardStart);
    const cards = body.slice(cardStart).split(/(?=<h3>)/).filter(Boolean).map(card => `<article class="requestCard">${card}</article>`).join('');
    body = `${intro}<div class="requestCards">${cards}</div>`;
  }
  const id = `coat-${String(index + 2).padStart(2, '0')}`;
  const anchor = sectionIds[index] ? ` id="${sectionIds[index]}"` : '';
  return `<section${anchor} class="contentSection ${moduleClasses[index]}" data-module="${id}"><div class="sectionInner">${body}</div></section>`;
}).join('\n');

const pageCss = `
:root{--navy:#062b5b;--deep:#031b3a;--teal:#008078;--soft:#f5f8fb;--border:#d9e2ec;--text:#334155;--muted:#5d6b7d}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--text);background:#fff;font:400 17px/1.72 Inter,Arial,sans-serif}main{display:block}a{color:var(--teal);text-underline-offset:3px;overflow-wrap:anywhere}
.hero{padding:32px 32px 76px;background:linear-gradient(180deg,#f5f8fb 0,#fff 100%)}.heroInner,.sectionInner{width:min(1120px,100%);margin:0 auto}.breadcrumb{display:flex;gap:9px;align-items:center;flex-wrap:wrap;margin-bottom:44px;color:var(--muted);font-size:14px}.breadcrumb a{min-width:44px;min-height:44px;display:inline-flex;align-items:center;color:var(--teal)}.eyebrow{margin:0 0 12px;color:var(--teal);font-size:13px;font-weight:700;letter-spacing:.13em}.hero h1{max-width:900px;margin:0;color:var(--navy);font-size:clamp(42px,5vw,64px);line-height:1.06;letter-spacing:-.035em}.hero h1+p{max-width:900px;margin:26px 0 0;font-size:20px;line-height:1.6}.heroActions{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}.heroActions a{min-width:44px;min-height:48px;padding:12px 18px;border:1px solid var(--teal);border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:15px;font-weight:650;text-decoration:none}.primaryAction{color:#fff;background:var(--teal)}.secondaryAction{color:var(--teal);background:#fff}
.contentSection{padding:72px 32px;border-top:1px solid #edf1f5;scroll-margin-top:20px}.contentSection:nth-of-type(even){background:var(--soft)}.sectionInner>h2,.sectionInner>a+h2{max-width:880px;margin:0 0 26px;color:var(--navy);font-size:clamp(30px,3.2vw,42px);line-height:1.15;letter-spacing:-.02em}.sectionInner h3{margin:38px 0 12px;color:var(--navy);font-size:23px;line-height:1.25}.sectionInner p,.sectionInner>ul{max-width:900px}.sectionInner li{margin:.4em 0}.sectionInner a{min-width:44px;min-height:44px;padding-block:8px;display:inline-block}.definition ul,.request> .sectionInner>ul{columns:2;column-gap:48px}.definition li,.request li{break-inside:avoid}.contentSection:target,.contentSection:has(> .sectionInner > a:target){outline:4px solid #008078;outline-offset:-4px}
table{width:100%;margin:30px 0;border-collapse:collapse;background:#fff;font-size:15px;line-height:1.55}th,td{padding:17px 16px;border:1px solid var(--border);text-align:left;vertical-align:top}th{color:var(--navy);background:#eaf1f7;font-weight:700}.endpoint-table table{table-layout:fixed}.endpoint-table th:first-child{width:18%}.endpoint-table th:nth-child(2){width:40%}.grades table{max-width:900px}.grades th:first-child{width:20%}.grades td:first-child{color:var(--navy);font-weight:700}.grades td:last-child{white-space:nowrap}
.requestCards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;margin-top:34px}.requestCard{min-width:0;padding:24px;border:1px solid var(--border);background:#fff}.requestCard h3{margin:0 0 12px}.requestCard p{margin:0 0 16px}.requestCard p:last-child{margin-top:auto;margin-bottom:0}.requestCard a{min-height:48px;padding:12px 16px;border:1px solid var(--teal);border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-weight:650;text-decoration:none}.sources ol{max-width:960px;padding-left:24px}.sources li{margin:0 0 18px;padding-left:8px;overflow-wrap:anywhere}
@media(max-width:1100px){body{font-size:16px}.hero{padding:28px 24px 60px}.contentSection{padding:58px 24px}.breadcrumb{margin-bottom:34px}.requestCards{grid-template-columns:1fr}.definition ul,.request>.sectionInner>ul{columns:1}.endpoint-table table,.grades table{border:0;background:transparent}.endpoint-table thead,.grades thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}.endpoint-table tbody,.grades tbody{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.endpoint-table tr,.grades tr{min-width:0;padding:16px;border:1px solid var(--border);display:block;background:#fff}.endpoint-table td,.grades td{padding:10px 0;border:0;border-bottom:1px solid #e8edf2;display:block;white-space:normal}.endpoint-table td:last-child,.grades td:last-child{border-bottom:0}.endpoint-table td::before,.grades td::before{content:attr(data-label);margin-bottom:3px;display:block;color:var(--muted);font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase}.grades td:first-child{font-size:20px}}
@media(max-width:560px){.hero{padding:22px 20px 48px}.contentSection{padding:48px 20px}.breadcrumb{margin-bottom:26px}.hero h1{font-size:40px}.hero h1+p{font-size:18px}.heroActions{display:grid}.heroActions a{width:100%}.endpoint-table tbody,.grades tbody{grid-template-columns:1fr}.sectionInner>h2,.sectionInner>a+h2{font-size:30px}.sectionInner h3{font-size:21px}.sources ol{padding-left:22px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Titanium Dioxide for Coatings | Grade Evaluation</title><style>${shared.style}\n${pageCss}</style></head>
<body>${shared.header}<main><section class="hero"><div class="heroInner">${hero}</div></section>${modules}</main>${shared.footer}${shared.dialog}
<script>${shared.behavior}</script></body></html>`;

fs.mkdirSync(path.join(outDir, 'approval_core'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'diagnostic_support'), { recursive: true });
const output = path.join(outDir, 'APP-COAT_GATE3_RESPONSIVE_WIREFRAME_V0.3.html');
fs.writeFileSync(output, html, 'utf8');
console.log(output);
