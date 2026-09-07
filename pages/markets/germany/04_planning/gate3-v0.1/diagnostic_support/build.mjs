import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { marked } from 'file:///C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/marked/lib/marked.esm.js';

const require = createRequire(import.meta.url);
const { renderSharedChrome } = require('D:/23MySec/docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs');

const root = 'D:/23MySec';
const out = `${root}/pages/markets/germany/04_planning/gate3-v0.1`;
const source = `${out}/MARKET-EU-DE_GATE3_WIREFRAME_V0.1.html`;
const bPath = `${root}/pages/markets/germany/04_planning/MARKET-EU-DE_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`;
const raw = fs.readFileSync(bPath, 'utf8');
const match = raw.match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/);
if (!match) throw new Error('Buyer Copy markers are missing');
const buyer = match[1].trim();
const parts = buyer.split(/\n(?=## )/);
const heroMarkdown = parts.shift();

function sectionId(markdown) {
  const heading = markdown.match(/^##\s+(.+)$/m)?.[1] || '';
  const map = {
    'Start with the German Industrial Use You Need to Serve': 'de-02',
    'Choose the Right Evaluation Path': 'de-03',
    'Use Documents and Samples for the Review You Are Planning': 'de-04',
    'Describe the German Destination Beyond a Country Label': 'de-05',
    'Keep EU-Wide Checks with the EU Owners': 'de-06',
    'Send a Germany Destination Request': 'de-07'
  };
  if (!map[heading]) throw new Error(`Unknown approved section: ${heading}`);
  return map[heading];
}

function renderHero(markdown) {
  let html = marked.parse(markdown);
  html = html.replace(/^<p>([\s\S]*?›[\s\S]*?)<\/p>/, '<nav class="breadcrumb" aria-label="Breadcrumb">$1</nav>');
  html = html.replace('<p><a href="/request-a-quote/">Request a Quote</a></p>', '<p class="heroActions"><a class="primaryAction" href="/request-a-quote/">Request a Quote</a>');
  html = html.replace('<p><a href="/products/">Explore Products</a></p>', '<a class="secondaryAction" href="/products/">Explore Products</a></p>');
  return `<section class="hero"><div class="shell heroInner">${html}</div></section>`;
}

function renderApplicationSection(markdown) {
  const pieces = markdown.split(/\n(?=### )/);
  const intro = marked.parse(pieces.shift());
  const cards = pieces.map(piece => `<article class="applicationCard">${marked.parse(piece)}</article>`).join('');
  return `<section class="module useContext" id="de-02"><div class="shell"><div class="prose intro">${intro}</div><div class="applicationGrid">${cards}</div></div></section>`;
}

function renderDestinationSection(markdown) {
  const marker = '\nBefore requesting a quote, assemble the context you already have:';
  const index = markdown.indexOf(marker);
  if (index < 0) throw new Error('Germany destination checklist marker is missing');
  const prose = markdown.slice(0, index);
  const checklist = markdown.slice(index + 1);
  return `<section class="module destination" id="de-05"><div class="shell destinationGrid"><div class="prose">${marked.parse(prose)}</div><aside class="checklist" aria-label="Germany quotation context">${marked.parse(checklist)}</aside></div></section>`;
}

function renderFinalSection(markdown) {
  const marker = '\n### Germany industry and destination references';
  const index = markdown.indexOf(marker);
  if (index < 0) throw new Error('Reference heading is missing');
  const action = markdown.slice(0, index);
  const references = markdown.slice(index + 1);
  let actionHtml = marked.parse(action);
  actionHtml = actionHtml.replace('<p><a href="/request-a-quote/">Request a Quote</a></p>', '<p><a class="primaryAction" href="/request-a-quote/">Request a Quote</a></p>');
  return `<section class="module finalAction" id="de-07"><div class="shell"><div class="conversionPanel prose">${actionHtml}</div><div class="references prose">${marked.parse(references)}</div></div></section>`;
}

function renderStandardSection(markdown) {
  const id = sectionId(markdown);
  const classes = id === 'de-03' || id === 'de-06' ? 'module soft' : 'module';
  return `<section class="${classes}" id="${id}"><div class="shell prose">${marked.parse(markdown)}</div></section>`;
}

const body = [renderHero(heroMarkdown), ...parts.map(part => {
  const id = sectionId(part);
  if (id === 'de-02') return renderApplicationSection(part);
  if (id === 'de-05') return renderDestinationSection(part);
  if (id === 'de-07') return renderFinalSection(part);
  return renderStandardSection(part);
})].join('\n');

const chrome = renderSharedChrome({
  currentPageId: 'MARKET-000',
  primaryLogoSrc: pathToFileURL(`${root}/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg`).href,
  reverseLogoSrc: pathToFileURL(`${root}/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg`).href,
  fontSrc: pathToFileURL(`${out}/dependencies/Inter-Variable.ttf`).href
});

const pageCss = `
:root{color-scheme:light;--navy:#062b5b;--deep:#031b3a;--teal:#008078;--body:#334155;--soft:#f5f8fb;--line:#d9e2ec}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--body);background:#fff;font-family:Inter,Arial,sans-serif;font-size:16px;line-height:1.65}.shell{width:min(1200px,calc(100% - 64px));margin:auto}.prose{max-width:920px}.prose>:first-child{margin-top:0}.prose>:last-child{margin-bottom:0}
main h1,main h2,main h3{color:var(--navy);line-height:1.15;letter-spacing:-.02em}main h1{max-width:880px;margin:24px 0 24px;color:#fff;font-size:clamp(44px,5vw,64px)}main h2{margin:0 0 24px;font-size:clamp(32px,3.4vw,44px)}main h3{margin:0 0 14px;font-size:23px}main p{margin:0 0 18px}main ul{margin:18px 0 0;padding-left:22px}main li{margin:0 0 12px;padding-left:5px}main strong{color:var(--navy)}main code{padding:2px 5px;border-radius:4px;color:var(--navy);background:#e7f1f4;font:600 .9em Inter,Arial,sans-serif}
main a{min-width:44px;min-height:44px;display:inline-flex;align-items:center;color:var(--teal);font-weight:650;text-underline-offset:4px}main a:focus-visible{outline:3px solid var(--teal);outline-offset:3px}.hero{padding:44px 0 76px;color:#fff;background:var(--deep)}.hero .breadcrumb{display:flex;flex-wrap:wrap;align-items:center;gap:0 8px;color:#d4e0eb;font-size:14px}.hero .breadcrumb a{color:#fff}.heroInner>p:not(.heroActions){max-width:770px;font-size:19px;line-height:1.65}.heroActions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px!important}.primaryAction,.secondaryAction{min-height:48px!important;padding:11px 20px;border:1px solid var(--teal);border-radius:7px;text-decoration:none}.primaryAction{color:#fff!important;background:var(--teal)}.secondaryAction{color:#fff!important;border-color:#fff;background:transparent}
.module{padding:72px 0;border-bottom:1px solid var(--line)}.module.soft{background:var(--soft)}.useContext .intro{max-width:960px}.applicationGrid{margin-top:32px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.applicationCard{min-width:0;padding:26px;border:1px solid var(--line);border-top:4px solid var(--teal);border-radius:10px;background:#fff}.applicationCard p{margin-bottom:15px}.applicationCard a{width:100%;margin-top:4px}.destination{background:var(--soft)}.destinationGrid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(300px,.75fr);gap:48px;align-items:start}.checklist{padding:28px;border:1px solid var(--line);border-radius:10px;background:#fff}.checklist p:first-child{color:var(--navy);font-size:20px;font-weight:700;line-height:1.35}.finalAction{padding-bottom:0;border-bottom:0}.conversionPanel{max-width:none;padding:44px;border-radius:10px;color:#fff;background:var(--navy)}.conversionPanel h2,.conversionPanel strong{color:#fff}.conversionPanel a:not(.primaryAction){color:#fff}.references{max-width:none;padding:56px 0 72px}.references h3{font-size:28px}.references li{margin-bottom:16px}.references a{margin-right:4px}
@media(max-width:1100px){.shell{width:calc(100% - 48px)}.hero{padding:36px 0 60px}.module{padding:56px 0}.applicationGrid{grid-template-columns:1fr}.applicationCard{padding:24px}.destinationGrid{grid-template-columns:1fr;gap:30px}.prose{max-width:none}.references{padding:48px 0 56px}}
@media(max-width:560px){body{font-size:15px;line-height:1.65}.shell{width:calc(100% - 40px)}main h1{margin-top:18px;font-size:38px}main h2{font-size:30px}main h3{font-size:21px}.hero{padding:24px 0 44px}.heroInner>p:not(.heroActions){font-size:17px}.heroActions{display:grid}.heroActions a{width:100%;justify-content:center}.module{padding:44px 0}.applicationGrid{gap:16px}.applicationCard{padding:21px}.checklist{padding:22px}.conversionPanel{padding:28px 22px}.conversionPanel .primaryAction{width:100%;justify-content:center}.references{padding:40px 0 48px}.references h3{font-size:25px}.references a{display:flex;width:100%;height:auto;padding:5px 0}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`;

const localBehavior = `
window.localNavigationIntents=[];
document.addEventListener('click',event=>{
  const link=event.target.closest('a');
  if(!link)return;
  const href=link.getAttribute('href');
  if(!href||href.startsWith('#'))return;
  event.preventDefault();
  const pageSpecific=Boolean(link.closest('main'));
  window.localNavigationIntents.push({href,context:pageSpecific&&href==='/request-a-quote/'?{destinationCountry:'Germany',sourcePage:'MARKET-EU-DE'}:{}});
});
`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Titanium Dioxide Supplier for Germany | TiO2 Malaysia</title><meta name="description" content="Evaluate Malaysia-origin titanium dioxide for coatings, plastics and masterbatch procurement in Germany. Review products, documents, samples and quote inputs."><link rel="canonical" href="https://tio2malaysia.com/markets/germany/"><style>${chrome.style}\n${pageCss}</style></head>
<body>${chrome.header}<main>${body}</main>${chrome.footer}${chrome.dialog}<script>${chrome.behavior}</script><script>${localBehavior}</script></body></html>`;
fs.writeFileSync(source, html);
fs.writeFileSync(`${out}/diagnostic_support/derived-buyer-copy.html`, marked.parse(buyer));
console.log(JSON.stringify({ source, bytes: fs.statSync(source).size, modules: parts.length + 1 }, null, 2));
