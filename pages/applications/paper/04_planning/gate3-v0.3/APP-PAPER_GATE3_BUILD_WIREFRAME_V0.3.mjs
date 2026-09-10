import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { marked } = require('marked');
const root = 'D:/23MySec';
const outDir = path.join(root, 'pages/applications/paper/04_planning/gate3-v0.3');
const copyPath = path.join(root, 'pages/applications/paper/04_planning/APP-PAPER_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md');
const sharedDir = path.join(root, 'docs/architecture/gate3-shared-consumer-v0.2');
const { renderSharedChrome } = require(path.join(sharedDir, 'render-shared-chrome.cjs'));

const raw = fs.readFileSync(copyPath, 'utf8');
const visible = raw.match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/)?.[1]?.trim();
if (!visible) throw new Error('Approved buyer-copy markers not found');

const primaryLogo = pathToFileURL(path.join(root, 'brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg')).href;
const reverseLogo = pathToFileURL(path.join(root, 'brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg')).href;
const shared = renderSharedChrome({ currentPageId: 'APP-000', primaryLogoSrc: primaryLogo, reverseLogoSrc: reverseLogo });

const moduleClasses = [
  'system-definition', 'optical-methods', 'evidence-roles', 'identity-chain', 'laboratory-screen',
  'next-evidence', 'cost-use', 'grades', 'request-paths', 'sources'
];
const sectionIds = ['define-the-paper-result-and-system', null, null, null, null, null, null, 'grades-to-review', null, null];
const firstH2 = visible.search(/^## /m);
if (firstH2 < 0) throw new Error('Approved copy has no H2 modules');
const heroMd = visible.slice(0, firstH2).trim();
const chunks = visible.slice(firstH2).trim().split(/(?=^## )/m);
if (chunks.length !== 10) throw new Error(`Expected 10 H2 modules, received ${chunks.length}`);

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
hero = hero.replace(/<p>(<a href="#define-the-paper-result-and-system">[\s\S]*?<\/a>[\s\S]*?<a href="#grades-to-review">[\s\S]*?<\/a>)<\/p>/,
  '<div class="heroActions"><p>$1</p></div>');

const modules = chunks.map((markdown, index) => {
  const body = enhanceTables(marked.parse(markdown));
  const id = sectionIds[index] ? ` id="${sectionIds[index]}"` : '';
  const moduleId = `PAPER-${String(index + 2).padStart(2, '0')}`;
  return `<section${id} class="contentSection ${moduleClasses[index]}" data-module="${moduleId}"><div class="sectionInner">${body}</div></section>`;
}).join('\n');

const pageCss = `
:root{--navy:#062b5b;--deep:#031b3a;--teal:#008078;--accent:#00a99d;--soft:#f5f8fb;--border:#d9e2ec;--text:#334155;--muted:#5d6b7d}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--text);background:#fff;font:400 17px/1.7 Inter,Arial,sans-serif}main{display:block}main a{color:var(--teal);text-underline-offset:3px;overflow-wrap:anywhere}
.hero{padding:70px 32px 76px;background:linear-gradient(115deg,var(--deep),var(--navy));color:#fff}.heroInner,.sectionInner{width:min(1120px,100%);margin:0 auto}.hero h1{max-width:900px;margin:0;color:#fff;font-size:clamp(44px,5vw,64px);line-height:1.06;letter-spacing:-.035em}.hero> .heroInner>p{max-width:920px;margin:26px 0 0;font-size:20px;line-height:1.6}.heroActions{margin-top:32px}.heroActions p{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin:0;font-size:0}.heroActions a{min-width:44px;min-height:48px;padding:12px 18px;border:1px solid #fff;border-radius:7px;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:15px;font-weight:700;text-decoration:none}.heroActions a:first-child{border-color:var(--teal);background:var(--teal)}
.contentSection{padding:72px 32px;border-top:1px solid #edf1f5;scroll-margin-top:20px}.contentSection:nth-of-type(even){background:var(--soft)}.sectionInner>h2{max-width:900px;margin:0 0 26px;color:var(--navy);font-size:clamp(30px,3.2vw,42px);line-height:1.15;letter-spacing:-.02em}.sectionInner h3{margin:38px 0 12px;color:var(--navy);font-size:23px;line-height:1.25}.sectionInner p,.sectionInner>ul,.sectionInner>ol{max-width:940px}.sectionInner p{margin:0 0 22px}.sectionInner ul,.sectionInner ol{margin:0 0 24px;padding-left:25px}.sectionInner li{margin:.46em 0;padding-left:4px}.sectionInner a{min-width:44px;min-height:44px;padding-block:8px;display:inline-flex;align-items:center}.contentSection:target{outline:4px solid var(--teal);outline-offset:-4px}
.system-definition> .sectionInner>ul{columns:2;column-gap:52px}.system-definition li{break-inside:avoid}.laboratory-screen ol{padding:24px 28px 24px 48px;border-left:4px solid var(--teal);background:#fff}.next-evidence> .sectionInner>p:first-of-type{padding:22px 24px;border:1px solid var(--border);background:#fff}
table{width:100%;margin:30px 0;border-collapse:collapse;background:#fff;font-size:15px;line-height:1.55}th,td{padding:17px 16px;border:1px solid var(--border);text-align:left;vertical-align:top}th{color:var(--navy);background:#eaf1f7;font-weight:700}.optical-methods table,.evidence-roles table{table-layout:fixed}.optical-methods th:first-child{width:19%}.optical-methods th:nth-child(2){width:43%}.evidence-roles th:first-child{width:22%}.evidence-roles th:nth-child(2){width:34%}.grades table{max-width:900px;table-layout:fixed}.grades th:first-child{width:26%}.grades td:first-child{color:var(--navy);font-weight:700}.grades td:last-child{white-space:nowrap}
.request-paths> .sectionInner>ul{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;margin-top:30px;padding:0;list-style:none}.request-paths> .sectionInner>ul>li{min-width:0;margin:0;padding:24px;border:1px solid var(--border);background:#fff}.request-paths> .sectionInner>ul>li>a{margin-bottom:8px;padding:10px 14px;border:1px solid var(--teal);border-radius:6px;justify-content:center;font-weight:700;text-decoration:none}.sources ol{max-width:1040px;padding-left:24px}.sources li{margin:0 0 18px;padding-left:8px;overflow-wrap:anywhere}
@media(max-width:1100px){body{font-size:16px}.hero{padding:58px 24px 60px}.contentSection{padding:58px 24px}.system-definition> .sectionInner>ul{columns:1}.request-paths> .sectionInner>ul{grid-template-columns:1fr}.optical-methods table,.evidence-roles table,.grades table{border:0;background:transparent}.optical-methods thead,.evidence-roles thead,.grades thead{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}.optical-methods tbody,.evidence-roles tbody,.grades tbody{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.optical-methods tr,.evidence-roles tr,.grades tr{min-width:0;padding:16px;border:1px solid var(--border);display:block;background:#fff}.optical-methods td,.evidence-roles td,.grades td{padding:10px 0;border:0;border-bottom:1px solid #e8edf2;display:block;white-space:normal}.optical-methods td:last-child,.evidence-roles td:last-child,.grades td:last-child{border-bottom:0}.optical-methods td::before,.evidence-roles td::before,.grades td::before{content:attr(data-label);margin-bottom:3px;display:block;color:var(--muted);font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase}.grades td:first-child{font-size:20px}}
@media(max-width:560px){.hero{padding:46px 20px 48px}.contentSection{padding:48px 20px}.hero h1{font-size:40px}.hero> .heroInner>p{font-size:18px}.heroActions p{display:grid}.heroActions a{width:100%}.optical-methods tbody,.evidence-roles tbody,.grades tbody{grid-template-columns:1fr}.sectionInner>h2{font-size:30px}.sectionInner h3{font-size:21px}.laboratory-screen ol{padding:20px 18px 20px 38px}.sources ol{padding-left:22px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Titanium Dioxide for Paper Evaluation | TiO2 Malaysia</title>
<meta name="description" content="Evaluate titanium dioxide for paper in a defined system. Compare method-matched results, review Product Grades, and prepare document, sample or RFQ details.">
<style>${shared.style}\n${pageCss}</style></head>
<body data-page-id="APP-PAPER" data-site-scope="tio2-my" data-gate="3" data-shared-consumer="TIO2MY-GATE3-SHARED-CONSUMER-002">${shared.header}<main id="page-main"><section class="hero" data-module="PAPER-01"><div class="heroInner">${hero}</div></section>${modules}</main>${shared.footer}${shared.dialog}
<script>${shared.behavior}</script></body></html>`;

fs.mkdirSync(path.join(outDir, 'approval_core'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'diagnostic_support'), { recursive: true });
const output = path.join(outDir, 'APP-PAPER_GATE3_RESPONSIVE_WIREFRAME_V0.3.html');
fs.writeFileSync(output, html, 'utf8');
console.log(output);
