const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { pathToFileURL } = require('url');

const root = 'D:/23MySec';
const page = `${root}/pages/markets/italy`;
const out = `${page}/04_planning/gate3-v0.1`;
const shared = `${root}/docs/architecture/gate3-shared-consumer-v0.2`;

const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const identity = p => ({ path: p, bytes: fs.statSync(p).size, sha256: sha(p) });
const save = (p, value) => fs.writeFileSync(p, typeof value === 'string' ? value : `${JSON.stringify(value, null, 2)}\n`);
const esc = s => String(s).replace(/[&<>\"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

for (const dir of ['approval_core', 'dependencies', 'diagnostic_support/render']) fs.mkdirSync(`${out}/${dir}`, { recursive: true });
if (fs.existsSync(`${out}/freeze-record.json`)) throw new Error('A frozen candidate already exists. Build a new version instead of overwriting it.');

const expectedInputs = [
  ['A', `${page}/04_planning/MARKET-EU-IT_GATE2_CONTENT_SKELETON_V0.1.md`, '8e18340cdae14cbb36991fd56b8ba7b33bdcda0fee1fd0fd0ba3a8181e151751'],
  ['B', `${page}/04_planning/MARKET-EU-IT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`, 'a7d047af04b5127cc54f97938e4d622b1e1b496691747516322924f6e0b44208'],
  ['C', `${page}/04_planning/MARKET-EU-IT_GATE2_CONTENT_CONTRACT_V0.2.md`, 'ac49b66055bf36b87583e3919005ccbf87919a9900d9a9103aaa7d39936a6e19'],
  ['Gate2Approval', `${root}/docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md`, '8ed9810a96d1bde005f1d7e756995d494b13932fa386a79bbf177062997c3372'],
  ['Gate2Review', `${page}/05_review/MARKET-EU-IT_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_V0.1.md`, '21693530696805ca5953e75553ff830232bd9ae6a82d12953cbbc28573c5734a'],
  ['CurrentManifest', `${page}/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md`, '07d231f822772c5e72ef8d7800feea63c64fefea6aeb5904bbd1bf2ba255fa0f'],
  ['Gate3Authorization', `${root}/docs/architecture/GATE3_GERMANY_ITALY_PARALLEL_CONTROL_V1.0.md`, 'e8b01492a8f04fe67d97080028c9d26b08b7e850c5696da4f572c806bd10289d']
];

const approvedInputs = expectedInputs.map(([role, p, expected]) => {
  const actual = identity(p);
  if (actual.sha256 !== expected) throw new Error(`${role} identity mismatch: ${actual.sha256} != ${expected}`);
  return { ...actual, role };
});

const pkg = JSON.parse(fs.readFileSync(`${shared}/consumer-package.json`, 'utf8'));
const sharedFiles = pkg.files.map(entry => {
  const actual = identity(`${shared}/${entry.path}`);
  if (actual.sha256 !== entry.sha256) throw new Error(`Shared consumer drift: ${entry.path}`);
  return { ...actual, role: entry.role };
});

const authorityPaths = [
  'AGENTS.md', 'PROJECT_CONTEXT.md', '00_PROJECT_STATUS.md', '01_PROJECT_INDEX.md', '02_DIRECTORY_GUIDE.md',
  'docs/architecture/GATE_WORKFLOW_V3.1.md', 'docs/architecture/PAGE_GATE_1_4_STANDARD_V2.1.md',
  'docs/architecture/GATE3_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.5.md',
  'agents/gate3-execution/agent.md', 'skills/responsive-wireframe-design/SKILL.md',
  'skills/layout-interaction-verification/SKILL.md',
  'skills/responsive-wireframe-design/references/preflight-freeze-evidence.md',
  'skills/layout-interaction-verification/references/gate3-structure-scope.md',
  'skills/layout-interaction-verification/references/core-risk-model.md',
  'docs/superpowers/specs/2026-09-07-gate3-to-gate4-handoff-contract-v0.2.md',
  'docs/architecture/PROJECT_GOVERNANCE_DETAILS_V1.3.md',
  'docs/architecture/PAGE_REGISTRY_V0.2.md', 'research/keyword/11_page_keyword_master.csv',
  'docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md', 'docs/page-briefs/MARKET-EU-IT_ITALY_BRIEF_V0.2.md',
  'docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.8.md',
  'docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md',
  'brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md',
  'brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md',
  'brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md',
  'docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md',
  'docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md',
  'pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md',
  'pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md'
];
const authorities = authorityPaths.map(p => identity(`${root}/${p}`));

for (const name of ['Inter-Variable.ttf', 'Inter-OFL.txt']) fs.copyFileSync(`${shared}/${name}`, `${out}/dependencies/${name}`);
const primaryLogo = `${root}/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg`;
const reverseLogo = `${root}/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg`;
const dependencies = [primaryLogo, reverseLogo, `${out}/dependencies/Inter-Variable.ttf`, `${out}/dependencies/Inter-OFL.txt`].map(identity);

save(`${out}/input-binding.json`, {
  pageId: 'MARKET-EU-IT',
  status: 'GATE3_USER_AUTHORIZED / INPUTS_BOUND',
  plannedUrl: '/markets/italy/',
  currentPageId: 'MARKET-000',
  approvedInputs,
  authorities,
  sharedConsumer: { ...identity(`${shared}/consumer-package.json`), version: pkg.version, packageId: pkg.packageId },
  sharedFiles,
  dependencies,
  writeBoundary: `${page}/04_planning and ${page}/05_review only`,
  stopBoundary: 'DRAFT_FOR_PROJECT_CONTROL_REVIEW; no Gate 3 approval or Gate 4 start'
});

save(`${out}/task-input-card.md`, `# MARKET-EU-IT Gate 3 task input card\n\n` +
`Status: \`GATE3_USER_AUTHORIZED / EXECUTION_ONLY\`. Page: \`MARKET-EU-IT\`, \`/markets/italy/\`, EN, \`site_scope=tio2-my\`. Current navigation: Markets. Gate 2 approved combination: A V0.1 / B V0.2 / C V0.2 under \`G2-7PAGE-APPROVAL-01\`; exact identities are in \`input-binding.json\`. B remains the sole visible-copy source.\n\n` +
`Fixed order: Hero → Italian industrial-project contexts → neutral product review → Documents/COO/Sample paths → Italy destination brief → EU owner handoff → Italy RFQ and receiver expectation/sources. No page form, FAQ, calculator, selector, local-stock claim or Italy-specific Grade assignment.\n\n` +
`Structure risks and expected relationships:\n\n` +
`1. Three industry contexts must stay distinct and keep their own prompts and Application-owner links. Verify the 3-column Desktop, 2+1 Tablet and single-column Mobile arrangements.\n` +
`2. Destination guidance maps Italy, an optional port/city, and a different final receiving site/handover detail to existing RFQ receiver locations. Present it as guidance, never as a page form or a second dedicated destination field. Verify all list relationships at 1440/768/390.\n` +
`3. The COO statement must retain its adjacent limitation; Documents and Sample paths must remain separate. Verify the full module at all three widths.\n` +
`4. Federchimica AVISA and Garzanti Specialties must remain bounded context sources with dates and limitations. Verify source adjacency, long-link wrapping and Footer closure at 390.\n` +
`5. Shared Chrome uses page-neutral Consumer V0.2 with Markets current, fixed RFQ and production Logo. Reuse eligible shared full-behaviour evidence, while actually testing this page's assembly, both narrow menus and Cookie entry/exit.\n\n` +
`Formal output: this durable directory and page 05_review. Stop after frozen candidate, formal evidence, execution self-check, draft Manifest V0.6 and draft Gate 3→4 handoff. Do not edit Gate 2, shared owners, project Status/Index/control, D16, or approve Gate 3.\n`);

const bPath = approvedInputs.find(x => x.role === 'B').path;
const sourceMarkdown = fs.readFileSync(bPath, 'utf8');
const match = sourceMarkdown.match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/);
if (!match) throw new Error('Buyer-copy markers not found');
const buyer = match[1].trim();
const linkPattern = /\[([^\]]+)\]\(((?:[^()]|\([^()]*\))*)\)/g;
const plain = s => String(s).replace(linkPattern, '$1').replace(/\*\*|`/g, '');
const inline = s => esc(s)
  .replace(linkPattern, '<a href="$2">$1</a>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/`([^`]+)`/g, '<code>$1</code>');

function parseMarkdown(md) {
  const lines = md.split(/\r?\n/);
  const blocks = [];
  for (let i = 0; i < lines.length;) {
    if (!lines[i].trim()) { i++; continue; }
    const h = lines[i].match(/^(#{1,3})\s+(.*)$/);
    if (h) { blocks.push({ type: 'heading', level: h[1].length, md: h[2] }); i++; continue; }
    if (lines[i].startsWith('- ')) {
      const items = [];
      while (i < lines.length && lines[i].startsWith('- ')) items.push(lines[i++].slice(2));
      blocks.push({ type: 'list', items });
      continue;
    }
    const paragraph = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,3})\s+/.test(lines[i]) && !lines[i].startsWith('- ')) paragraph.push(lines[i++]);
    blocks.push({ type: 'paragraph', md: paragraph.join(' ') });
  }
  return blocks;
}

const allBlocks = parseMarkdown(buyer);
const heroBlocks = [];
const modules = [];
let current = heroBlocks;
for (const block of allBlocks) {
  if (block.type === 'heading' && block.level === 2) {
    current = [block];
    modules.push(current);
  } else current.push(block);
}
if (modules.length !== 6) throw new Error(`Expected six H2 modules after Hero, got ${modules.length}`);

const renderBlock = block => {
  if (block.type === 'heading') return `<h${block.level}>${inline(block.md)}</h${block.level}>`;
  if (block.type === 'list') return `<ul>${block.items.map(item => `<li>${inline(item)}</li>`).join('')}</ul>`;
  return `<p>${inline(block.md)}</p>`;
};

function renderHero(blocks) {
  const [crumb, h1, lead, ...actions] = blocks;
  return `<section class="hero" data-module="IT-01"><div class="content"><p class="breadcrumbs">${inline(crumb.md)}</p><div class="hero-grid"><div class="hero-copy">${renderBlock(h1)}${renderBlock(lead)}</div><div class="hero-actions">${actions.map(renderBlock).join('')}</div></div></div></section>`;
}

function renderContext(blocks) {
  const before = [];
  const groups = [];
  let group = null;
  for (const block of blocks) {
    if (block.type === 'heading' && block.level === 3) { group = [block]; groups.push(group); }
    else if (group) group.push(block);
    else before.push(block);
  }
  return `<section class="module context-module" data-module="IT-02"><div class="content">${before.map(renderBlock).join('')}<div class="context-grid">${groups.map(g => `<article>${g.map(renderBlock).join('')}</article>`).join('')}</div></div></section>`;
}

function renderModule(blocks, index) {
  if (index === 1) return renderContext(blocks);
  if (index === 6) {
    const split = blocks.findIndex(b => b.type === 'heading' && b.level === 3);
    const main = split < 0 ? blocks : blocks.slice(0, split);
    const sources = split < 0 ? [] : blocks.slice(split);
    return `<section class="module final-module" data-module="IT-07"><div class="content"><div class="final-action">${main.map(renderBlock).join('')}</div>${sources.length ? `<aside class="sources">${sources.map(renderBlock).join('')}</aside>` : ''}</div></section>`;
  }
  const ids = ['IT-02', 'IT-03', 'IT-04', 'IT-05', 'IT-06', 'IT-07'];
  return `<section class="module module-${index}" data-module="${ids[index - 1]}"><div class="content">${blocks.map(renderBlock).join('')}</div></section>`;
}

const pageHtml = renderHero(heroBlocks) + modules.map((m, i) => renderModule(m, i + 1)).join('');
const expectedBlocks = allBlocks.flatMap(block => {
  if (block.type === 'heading') return [{ tag: `h${block.level}`, text: plain(block.md) }];
  if (block.type === 'list') return block.items.map(item => ({ tag: 'li', text: plain(item) }));
  return [{ tag: 'p', text: plain(block.md) }];
});
const expectedLinks = [...buyer.matchAll(linkPattern)].map(m => ({ text: plain(m[1]), href: m[2] }));
save(`${out}/diagnostic_support/expected-copy.json`, { source: identity(bPath), blocks: expectedBlocks, links: expectedLinks, moduleCount: 7 });

const chrome = require(`${shared}/render-shared-chrome.cjs`).renderSharedChrome({
  currentPageId: 'MARKET-000',
  primaryLogoSrc: pathToFileURL(primaryLogo).href,
  reverseLogoSrc: pathToFileURL(reverseLogo).href,
  fontSrc: 'dependencies/Inter-Variable.ttf'
});

const pageCss = `
*{box-sizing:border-box}html{background:#fff}body{margin:0;font-family:Inter,Arial,sans-serif;color:#334155;background:#fff}main{overflow-wrap:anywhere}.content{width:min(1120px,calc(100% - 80px));margin:auto}.hero{padding:34px 0 68px;border-bottom:1px solid #d9e2ec;background:#f5f8fb}.breadcrumbs{margin:0 0 34px;color:#526477;font-size:14px;line-height:1.5}.breadcrumbs a{color:#008078}.hero-grid{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(250px,.55fr);gap:72px;align-items:end}.hero h1{max-width:760px;margin:0 0 22px;color:#062b5b;font-size:54px;line-height:1.08;letter-spacing:-1.8px}.hero-copy>p{max-width:760px;margin:0;font-size:19px;line-height:1.65}.hero-actions{display:grid;gap:12px}.hero-actions p{margin:0}.hero-actions a{width:100%;min-height:52px;padding:13px 20px;border:1px solid #008078;border-radius:7px;display:flex;align-items:center;justify-content:center;color:#fff;background:#008078;font-weight:700;text-decoration:none}.hero-actions p+ p a{color:#008078;background:#fff}.module{padding:64px 0;border-bottom:1px solid #d9e2ec}.module:nth-child(even){background:#f8fafc}.module h2{max-width:850px;margin:0 0 28px;color:#062b5b;font-size:36px;line-height:1.2;letter-spacing:-.7px}.module h3{margin:0 0 16px;color:#062b5b;font-size:23px;line-height:1.3}.module p,.module li{font-size:17px;line-height:1.68}.module p{max-width:900px;margin:0 0 20px}.module ul{max-width:900px;margin:24px 0 0;padding-left:24px}.module li{padding-left:7px;margin:0 0 14px}.module a,.breadcrumbs a{min-width:44px;min-height:44px;display:inline-flex;align-items:center;color:#008078;font-weight:650;text-underline-offset:4px}.module a:focus-visible,.hero a:focus-visible,.breadcrumbs a:focus-visible{outline:3px solid #008078;outline-offset:3px}.context-grid{margin-top:34px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.context-grid article{min-width:0;padding:26px;border:1px solid #d9e2ec;border-top:4px solid #008078;border-radius:10px;background:#fff}.context-grid article p{font-size:16px}.context-grid article p:last-child{margin-bottom:0}.module-3 .content>p:first-of-type{padding:22px 24px;border-left:4px solid #008078;background:#f5f8fb;color:#183e60}.module-4 .content>p:first-of-type{padding:22px 24px;border:1px solid #b7d8d4;border-radius:8px;background:#f4fbfa}.module-5 .content{display:grid;grid-template-columns:minmax(0,1fr) minmax(280px,.72fr);gap:24px 56px}.module-5 h2,.module-5> .content>p:first-of-type{grid-column:1/-1}.module-5 ul{grid-column:1;margin:0}.module-5> .content>p:last-of-type{grid-column:2;grid-row:3;margin:0;padding:24px;border:1px solid #d9e2ec;border-radius:8px;background:#fff}.module-6 .content{display:grid;grid-template-columns:1fr 1fr;gap:0 44px}.module-6 h2{grid-column:1/-1}.module-6 p:nth-of-type(1){grid-column:1}.module-6 p:nth-of-type(2){grid-column:2}.final-module{border-bottom:0}.final-action{padding:40px;border-radius:10px;background:#062b5b;color:#fff}.final-action h2{color:#fff}.final-action p{max-width:850px}.final-action p:nth-of-type(2){margin-top:26px}.final-action p:nth-of-type(2) a{min-height:50px;padding:12px 20px;border:1px solid #008078;border-radius:7px;color:#fff;background:#008078;text-decoration:none}.sources{margin-top:42px;padding-top:34px;border-top:1px solid #d9e2ec}.sources h3{font-size:20px}.sources ul{max-width:none}.sources li{font-size:15px;color:#526477}.sources>p{font-size:15px;font-weight:700;color:#183e60}code{font:inherit;background:#eef3f6;padding:2px 5px;border-radius:4px;color:#183e60}strong{color:#183e60}@media(max-width:1100px){.content{width:calc(100% - 64px)}.hero{padding:28px 0 52px}.hero-grid{grid-template-columns:1fr;gap:28px}.hero h1{font-size:44px}.hero-actions{grid-template-columns:1fr 1fr}.module{padding:52px 0}.module h2{font-size:32px}.context-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.context-grid article:last-child{grid-column:1/-1}.module-5 .content{grid-template-columns:1fr}.module-5 h2,.module-5> .content>p:first-of-type,.module-5 ul,.module-5> .content>p:last-of-type{grid-column:1;grid-row:auto}.module-6 .content{grid-template-columns:1fr}.module-6 h2,.module-6 p:nth-of-type(1),.module-6 p:nth-of-type(2){grid-column:1}.final-action{padding:34px}}@media(max-width:560px){.content{width:calc(100% - 40px)}.hero{padding:20px 0 40px}.breadcrumbs{margin-bottom:24px}.hero h1{font-size:36px;letter-spacing:-1px}.hero-copy>p{font-size:17px}.hero-actions{grid-template-columns:1fr}.module{padding:40px 0}.module h2{font-size:28px}.module h3{font-size:21px}.module p,.module li{font-size:16px;line-height:1.65}.context-grid{grid-template-columns:1fr;gap:16px}.context-grid article:last-child{grid-column:auto}.context-grid article{padding:22px}.module-3 .content>p:first-of-type,.module-4 .content>p:first-of-type{padding:18px}.final-action{padding:26px 20px}.sources{margin-top:34px;padding-top:28px}.sources li{font-size:14px}.module a{max-width:100%}}
`;

const navigationBehavior = `
window.localNavigationIntents=[];
document.addEventListener('click',event=>{
  const anchor=event.target.closest('a');
  if(!anchor)return;
  event.preventDefault();
  const href=anchor.getAttribute('href');
  let context={};
  if(anchor.closest('main')&&href==='/request-a-quote/')context={destinationCountry:'Italy',sourcePage:'MARKET-EU-IT'};
  else if(anchor.closest('main')&&href==='/request-documents/')context={sourcePage:'MARKET-EU-IT'};
  window.localNavigationIntents.push({href,context,type:'LOCAL_NAVIGATION_INTENT_ONLY'});
});
`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Titanium Dioxide Supplier for Italy | TiO2 Malaysia</title><style>${chrome.style}\n${pageCss}</style></head><body>${chrome.header}<main>${pageHtml}</main>${chrome.footer}${chrome.dialog}<script>${chrome.behavior}\n${navigationBehavior}</script></body></html>`;
const sourcePath = `${out}/MARKET-EU-IT_GATE3_WIREFRAME_V0.1.html`;
save(sourcePath, html);

save(`${out}/design-report.md`, `# MARKET-EU-IT Gate 3 responsive wireframe design report V0.1\n\n` +
`Status: \`DESIGN_CANDIDATE / PREFLIGHT_PENDING\`. Method: responsive-wireframe-design V0.3.\n\n` +
`The editable source consumes the page-neutral Shared Global Chrome Gate 3 Consumer V0.2 and reads the approved B directly during generation. It preserves the seven-module order and every visible block/link. Desktop uses an editorial Hero and three distinct application-context cards; Tablet uses an independent 2+1 application-card arrangement; Mobile uses a complete single column. Destination guidance remains prose and a checklist, never a page form. Sources stay attached to the final RFQ module as a bounded context block.\n\n` +
`No Gate 4 media treatment, decorative variant, new claim, Grade recommendation, route promise or receiver field was added. The formal asset inventory and final identity are written only after hard preflight and freeze.\n`);

console.log(JSON.stringify({ source: identity(sourcePath), modules: 7, blocks: expectedBlocks.length, links: expectedLinks.length }, null, 2));
