const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const root = 'D:/23MySec';
const pageDir = path.join(root, 'pages/applications/masterbatch/04_planning');
const copyPath = path.join(pageDir, 'APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md');
const outPath = path.join(pageDir, 'APP-MB_GATE3_WIREFRAME_EDITABLE_SOURCE_V0.1.html');
const sharedPath = path.join(root, 'docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs');
const { renderSharedChrome } = require(sharedPath);

const primaryLogo = pathToFileURL(path.join(root, 'brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg')).href;
const reverseLogo = pathToFileURL(path.join(root, 'brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg')).href;
const shared = renderSharedChrome({ currentPageId: 'APP-000', primaryLogoSrc: primaryLogo, reverseLogoSrc: reverseLogo });

function escapeHtml(value) {
  return String(value).replace(/[&<>\"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;' }[char]));
}

function inline(value) {
  let out = escapeHtml(value);
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  return out;
}

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function splitTableRow(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim());
}

function renderMarkdown(markdown) {
  const lines = markdown.trim().split(/\r?\n/);
  const blocks = [];
  for (let index = 0; index < lines.length;) {
    const line = lines[index];
    if (!line.trim()) { index += 1; continue; }
    if (line.startsWith('# ')) {
      blocks.push({ type: 'h1', html: `<h1>${inline(line.slice(2))}</h1>` });
      index += 1;
      continue;
    }
    if (line.startsWith('## ')) {
      const text = line.slice(3);
      blocks.push({ type: 'h2', id: slug(text), html: `<h2 id="${slug(text)}">${inline(text)}</h2>` });
      index += 1;
      continue;
    }
    if (/^- /.test(line)) {
      const items = [];
      while (index < lines.length && /^- /.test(lines[index])) {
        items.push(`<li>${inline(lines[index].slice(2))}</li>`);
        index += 1;
      }
      blocks.push({ type: 'ul', html: `<ul>${items.join('')}</ul>` });
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\. /.test(lines[index])) {
        items.push(`<li>${inline(lines[index].replace(/^\d+\. /, ''))}</li>`);
        index += 1;
      }
      blocks.push({ type: 'ol', html: `<ol>${items.join('')}</ol>` });
      continue;
    }
    if (line.startsWith('|') && index + 1 < lines.length && /^\|?\s*:?-+/.test(lines[index + 1])) {
      const headers = splitTableRow(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].startsWith('|')) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      const head = headers.map(h => `<th scope="col">${inline(h)}</th>`).join('');
      const body = rows.map(row => `<tr>${row.map((cell, i) => `<td data-label="${escapeHtml(headers[i] || '')}">${inline(cell)}</td>`).join('')}</tr>`).join('');
      blocks.push({ type: 'table', html: `<div class="tableWrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>` });
      continue;
    }
    const paragraph = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !/^(# |## |- |\d+\. |\|)/.test(lines[index])) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push({ type: 'p', html: `<p>${inline(paragraph.join(' '))}</p>` });
  }

  let output = '';
  let sectionOpen = false;
  blocks.forEach((block, index) => {
    if (block.type === 'h1') {
      output += '<section class="hero"><div class="content heroInner">' + block.html;
      return;
    }
    if (index === 1 && block.type === 'p') {
      output += `<div class="heroLead">${block.html}</div>`;
      return;
    }
    if (index === 2 && block.type === 'p') {
      output += `<div class="heroLinks">${block.html.replace(' · ', '<span class="linkSeparator" aria-hidden="true">·</span>')}</div></div></section>`;
      return;
    }
    if (block.type === 'h2') {
      if (sectionOpen) output += '</div></section>';
      const alternate = ['make-the-comparison-basis-explicit', 'keep-processing-evidence-within-its-stage', 'plan-the-next-evaluation-step', 'grades-to-review', 'technical-sources'].includes(block.id) ? ' sectionAlt' : '';
      const compact = block.id === 'technical-sources' ? ' sourceSection' : '';
      output += `<section class="bodySection${alternate}${compact}" data-module="${block.id}"><div class="content">${block.html}`;
      sectionOpen = true;
      return;
    }
    output += block.html;
  });
  if (sectionOpen) output += '</div></section>';
  return output;
}

const raw = fs.readFileSync(copyPath, 'utf8');
const match = raw.match(/<!-- BUYER_COPY_START -->([\s\S]*?)<!-- BUYER_COPY_END -->/);
if (!match) throw new Error('Buyer-copy markers not found');
const content = renderMarkdown(match[1]);

const pageCss = `
:root{color-scheme:light;--navy:#062b5b;--deep:#031b3a;--teal:#008078;--accent:#00a99d;--text:#334155;--muted:#5d6b7b;--soft:#f5f8fb;--border:#d9e2ec;--white:#fff}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--white);color:var(--text);font-family:Inter,Arial,sans-serif;line-height:1.65}main{display:block}.content{width:min(1200px,calc(100% - 64px));margin:0 auto}.hero{padding:74px 0 68px;background:linear-gradient(112deg,var(--deep),var(--navy));color:var(--white)}.heroInner{max-width:1040px;margin-left:max(32px,calc((100% - 1200px)/2))}.hero h1{max-width:860px;margin:0 0 24px;font-size:clamp(44px,5vw,64px);line-height:1.06;letter-spacing:-.035em}.heroLead{max-width:860px;font-size:20px;line-height:1.62}.heroLead p{margin:0}.heroLinks{margin-top:34px}.heroLinks p{display:flex;flex-wrap:wrap;gap:12px;margin:0}.heroLinks a{min-height:48px;padding:12px 18px;border:1px solid #fff;border-radius:7px;display:inline-flex;align-items:center;color:#fff;font-weight:700;text-decoration:none}.heroLinks a:first-child{border-color:var(--teal);background:var(--teal)}.bodySection{padding:72px 0;border-bottom:1px solid var(--border)}.sectionAlt{background:var(--soft)}.bodySection h2{max-width:820px;margin:0 0 28px;color:var(--navy);font-size:clamp(32px,3.5vw,44px);line-height:1.15;letter-spacing:-.02em}.bodySection p,.bodySection ul,.bodySection ol{max-width:880px}.bodySection p{margin:0 0 22px;font-size:17px}.bodySection ul,.bodySection ol{margin:0 0 24px;padding-left:25px}.bodySection li{margin:7px 0;padding-left:5px}.bodySection a{min-width:44px;min-height:44px;display:inline-flex;align-items:center;color:var(--teal);font-weight:650;text-underline-offset:3px}.bodySection :is(a,button):focus-visible{outline:3px solid var(--teal);outline-offset:4px}.bodySection code{padding:.1em .3em;border-radius:3px;background:#eaf1f5;color:var(--navy);font:600 .92em Inter,Arial,sans-serif}.tableWrap{width:100%;margin:30px 0 28px;overflow:visible}table{width:100%;border-collapse:collapse;background:var(--white);font-size:15px;line-height:1.55}th,td{padding:17px 18px;border:1px solid var(--border);vertical-align:top;text-align:left}th{color:var(--navy);background:#eaf1f5;font-size:14px;letter-spacing:.01em}tbody tr:nth-child(even){background:#fbfcfd}[data-module="grades-to-review"] table{table-layout:fixed}[data-module="grades-to-review"] th:nth-child(1){width:22%}[data-module="grades-to-review"] th:nth-child(2){width:25%}[data-module="grades-to-review"] td:last-child a{min-height:44px;display:inline-flex;align-items:center}.sourceSection ol{max-width:1000px}.sourceSection li{margin-bottom:18px}.footer{border-top:0}
@media(max-width:1100px){.content{width:calc(100% - 48px)}.hero{padding:58px 0 54px}.heroInner{margin:0 auto}.hero h1{font-size:48px}.bodySection{padding:58px 0}.bodySection h2{font-size:36px}.tableWrap{overflow-x:auto}}
@media(max-width:620px){.content{width:calc(100% - 36px)}.hero{padding:46px 0 44px}.hero h1{font-size:38px;line-height:1.1}.heroLead{font-size:17px}.heroLinks p{display:grid}.heroLinks .linkSeparator{display:none}.heroLinks a{width:100%;justify-content:center;text-align:center}.bodySection{padding:46px 0}.bodySection h2{font-size:30px}.bodySection p{font-size:16px}.tableWrap{overflow:visible}table,thead,tbody,tr,th,td{display:block;width:100%}thead{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}tbody{display:grid;gap:18px}tr{border:1px solid var(--border);border-radius:10px;background:#fff!important;overflow:hidden}td{display:grid;grid-template-columns:minmax(104px,38%) 1fr;gap:12px;padding:14px 15px;border:0;border-bottom:1px solid var(--border)}td:last-child{border-bottom:0}td::before{content:attr(data-label);color:var(--navy);font-size:13px;font-weight:750;line-height:1.45}[data-module="grades-to-review"] table{table-layout:auto}[data-module="grades-to-review"] td:last-child a{min-height:44px}.sourceSection ol{padding-left:22px}.sourceSection li{padding-left:2px;overflow-wrap:anywhere}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Titanium Dioxide for Masterbatch Evaluation | TiO2 Malaysia</title>
<meta name="description" content="Evaluate titanium dioxide for masterbatch by separating concentrate processing from final-article evidence. Review Product Grades and prepare your request.">
<style>${shared.style}\n${pageCss}</style>
</head>
<body data-page-id="APP-MB" data-site-scope="tio2-my" data-gate="3" data-shared-consumer="TIO2MY-GATE3-SHARED-CONSUMER-002">
${shared.header}
<main id="page-main">${content}</main>
${shared.footer}
${shared.dialog}
<script>${shared.behavior}</script>
</body>
</html>`;

fs.writeFileSync(outPath, html, 'utf8');
console.log(outPath);
