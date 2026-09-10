import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { marked } = require('marked');
const root = 'D:/23MySec';
const outDir = path.join(root, 'pages/applications/printing-inks/04_planning/gate3-v0.1');
const copyPath = path.join(root, 'pages/applications/printing-inks/04_planning/APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md');
const sharedDir = path.join(root, 'docs/architecture/gate3-shared-consumer-v0.2');
const { renderSharedChrome } = require(path.join(sharedDir, 'render-shared-chrome.cjs'));

const raw = fs.readFileSync(copyPath, 'utf8');
const visible = raw.match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/)?.[1]?.trim();
if (!visible) throw new Error('Approved buyer-copy markers not found');

const primaryLogo = pathToFileURL(path.join(root, 'brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg')).href;
const reverseLogo = pathToFileURL(path.join(root, 'brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg')).href;
const shared = renderSharedChrome({ currentPageId: 'APP-000', primaryLogoSrc: primaryLogo, reverseLogoSrc: reverseLogo });

const moduleClasses = [
  'system-definition', 'opacity', 'dispersion', 'grind-context', 'documents-matrix',
  'matched-trial', 'accepted-economics', 'grades', 'request', 'sources'
];
const sectionIds = ['define-the-ink-and-print-system', null, null, null, null, null, null, 'grades-to-review', null, null];
const firstH2 = visible.search(/^## /m);
const heroMd = visible.slice(0, firstH2).trim();
const remaining = visible.slice(firstH2).trim();
const chunks = remaining.split(/(?=^## )/m);

function enhanceTables(html) {
  return html.replace(/<table>[\s\S]*?<\/table>/g, table => {
    const headers = [...table.matchAll(/<th>([\s\S]*?)<\/th>/g)].map(match => match[1].replace(/<[^>]+>/g, '').trim());
    return table.replace(/<tr>([\s\S]*?)<\/tr>/g, (row, cells) => {
      let column = 0;
      const labelled = cells.replace(/<td>/g, () => `<td data-label="${headers[column++] ?? ''}">`);
      return `<tr>${labelled}</tr>`;
    });
  });
}

let hero = marked.parse(heroMd);
hero = hero
  .replace('<h1>Titanium Dioxide for Printing Inks</h1>', '<p class="eyebrow">PRINTING INKS APPLICATION</p><h1>Titanium Dioxide for Printing Inks</h1>')
  .replace(/<p><a href="#define-the-ink-and-print-system">Build Your Print Comparison<\/a> · <a href="#grades-to-review">Review Printing Inks Grades<\/a><\/p>/,
    '<div class="heroActions"><a class="primaryAction" href="#define-the-ink-and-print-system">Build Your Print Comparison</a><span class="actionSeparator" aria-hidden="true"> · </span><a class="secondaryAction" href="#grades-to-review">Review Printing Inks Grades</a></div>');

const breadcrumb = '<nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/applications/">Applications</a><span>/</span><span aria-current="page">Titanium Dioxide for Printing Inks</span></nav>';

const modules = chunks.map((md, index) => {
  let body = enhanceTables(marked.parse(md));
  if (index === 8) {
    const listStart = body.indexOf('<ul>');
    const listEnd = body.indexOf('</ul>', listStart);
    if (listStart >= 0 && listEnd >= 0) {
      const intro = body.slice(0, listStart);
      const tail = body.slice(listEnd + 5);
      const list = body.slice(listStart + 4, listEnd);
      const cards = [...list.matchAll(/<li>([\s\S]*?)<\/li>/g)].map(match => `<article class="requestCard">${match[1]}</article>`).join('');
      body = `${intro}<div class="requestCards">${cards}</div>${tail}`;
    }
  }
  const moduleId = `INK-${String(index + 2).padStart(2, '0')}`;
  const anchor = sectionIds[index] ? ` id="${sectionIds[index]}"` : '';
  return `<section${anchor} class="contentSection ${moduleClasses[index]}" data-module="${moduleId}"><div class="sectionInner">${body}</div></section>`;
}).join('\n');

const pageCss = `
:root{--navy:#062b5b;--deep:#031b3a;--teal:#008078;--soft:#f5f8fb;--border:#d9e2ec;--text:#334155;--muted:#5d6b7d}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--text);background:#fff;font:400 17px/1.72 Inter,Arial,sans-serif}main{display:block}a{color:var(--teal);text-underline-offset:3px;overflow-wrap:anywhere}
.hero{padding:32px 32px 76px;background:linear-gradient(180deg,#f5f8fb 0,#fff 100%)}.heroInner,.sectionInner{width:min(1120px,100%);margin:0 auto}.breadcrumb{display:flex;gap:9px;align-items:center;flex-wrap:wrap;margin-bottom:44px;color:var(--muted);font-size:14px}.breadcrumb a{min-width:44px;min-height:44px;display:inline-flex;align-items:center;color:var(--teal)}.eyebrow{margin:0 0 12px;color:var(--teal);font-size:13px;font-weight:700;letter-spacing:.13em}.hero h1{max-width:940px;margin:0;color:var(--navy);font-size:clamp(42px,5vw,64px);line-height:1.06;letter-spacing:-.035em}.hero h1+p{max-width:940px;margin:26px 0 0;font-size:20px;line-height:1.6}.heroActions{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-top:32px}.heroActions a{min-width:44px;min-height:48px;padding:12px 18px;border:1px solid var(--teal);border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:15px;font-weight:650;text-decoration:none}.actionSeparator{color:var(--muted)}.primaryAction{color:#fff;background:var(--teal)}.secondaryAction{color:var(--teal);background:#fff}
.contentSection{padding:72px 32px;border-top:1px solid #edf1f5;scroll-margin-top:20px}.contentSection:nth-of-type(even){background:var(--soft)}.sectionInner>h2{max-width:900px;margin:0 0 26px;color:var(--navy);font-size:clamp(30px,3.2vw,42px);line-height:1.15;letter-spacing:-.02em}.sectionInner h3{margin:38px 0 12px;color:var(--navy);font-size:23px;line-height:1.25}.sectionInner p,.sectionInner>ul{max-width:940px}.sectionInner li{margin:.4em 0}.sectionInner a{min-width:44px;min-height:44px;padding-block:8px;display:inline-block}.system-definition ul{columns:2;column-gap:48px}.system-definition li{break-inside:avoid}.contentSection:target{outline:4px solid #008078;outline-offset:-4px}
table{width:100%;margin:30px 0;border-collapse:collapse;background:#fff;font-size:15px;line-height:1.55}th,td{padding:17px 16px;border:1px solid var(--border);text-align:left;vertical-align:top}th{color:var(--navy);background:#eaf1f7;font-weight:700}.documents-matrix table{table-layout:fixed}.documents-matrix th:first-child{width:22%}.documents-matrix th:nth-child(2){width:32%}.grades table{max-width:900px}.grades th:first-child{width:24%}.grades td:first-child{color:var(--navy);font-weight:700}.grades td:last-child{white-space:nowrap}
.requestCards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;margin:34px 0}.requestCard{min-width:0;padding:24px;border:1px solid var(--border);background:#fff}.requestCard p{margin:0}.requestCard a{min-height:48px;padding:10px 0;display:inline-flex;align-items:center;font-weight:700}.request> .sectionInner>p:last-child{padding:18px 20px;border-left:4px solid var(--teal);background:#fff}.sources ol{max-width:980px;padding-left:24px}.sources li{margin:0 0 18px;padding-left:8px;overflow-wrap:anywhere}
@media(max-width:1100px){body{font-size:16px}.hero{padding:28px 24px 60px}.contentSection{padding:58px 24px}.breadcrumb{margin-bottom:34px}.requestCards{grid-template-columns:1fr}.system-definition ul{columns:1}.documents-matrix table,.grades table{border:0;background:transparent}.documents-matrix thead,.grades thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}.documents-matrix tbody,.grades tbody{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.documents-matrix tr,.grades tr{min-width:0;padding:16px;border:1px solid var(--border);display:block;background:#fff}.documents-matrix td,.grades td{padding:10px 0;border:0;border-bottom:1px solid #e8edf2;display:block;white-space:normal}.documents-matrix td:last-child,.grades td:last-child{border-bottom:0}.documents-matrix td::before,.grades td::before{content:attr(data-label);margin-bottom:3px;display:block;color:var(--muted);font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase}.grades td:first-child{font-size:20px}}
@media(max-width:560px){.hero{padding:22px 20px 48px}.contentSection{padding:48px 20px}.breadcrumb{margin-bottom:26px}.hero h1{font-size:38px}.hero h1+p{font-size:18px}.heroActions{display:grid}.heroActions a{width:100%}.actionSeparator{text-align:center;line-height:1}.documents-matrix tbody,.grades tbody{grid-template-columns:1fr}.sectionInner>h2{font-size:30px}.sectionInner h3{font-size:21px}.sources ol{padding-left:22px}.requestCard{padding:20px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Titanium Dioxide for Printing Inks | TiO2 Malaysia</title><meta name="description" content="Compare titanium dioxide candidates in a defined white-ink and print system. Review Product Grades and prepare a document, sample or quotation request."><style>${shared.style}\n${pageCss}</style></head>
<body>${shared.header}<main><section class="hero" data-module="INK-01"><div class="heroInner">${breadcrumb}${hero}</div></section>${modules}</main>${shared.footer}${shared.dialog}
<script>${shared.behavior}</script></body></html>`;

fs.mkdirSync(path.join(outDir, 'approval_core'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'diagnostic_support'), { recursive: true });
const output = path.join(outDir, 'APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.1.html');
fs.writeFileSync(output, html, 'utf8');
console.log(output);
