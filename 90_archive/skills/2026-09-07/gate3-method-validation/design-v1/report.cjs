const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=__dirname, abs=p=>p.replaceAll('\\','/'), sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const inputs=['../input.md','../copy.json','../../../skills/responsive-wireframe-design/SKILL.md'].map(p=>{const file=path.resolve(root,p),b=fs.readFileSync(file);return {path:abs(file),bytes:b.length,sha256:sha(b)}});
const evidence=JSON.parse(fs.readFileSync(path.join(root,'render-evidence.json'),'utf8'));
const files=fs.readdirSync(root).filter(f=>f!=='design-report.md').sort().map(f=>{const b=fs.readFileSync(path.join(root,f));let dimensions='N/A',state='current helper / execution evidence',role='reproducibility';if(f.endsWith('.png')){dimensions=b.readUInt32BE(16)+' × '+b.readUInt32BE(20);role=f.startsWith('inspect')?'readable inspection crop':'full-page render';state=evidence.exports.find(e=>path.basename(e.path)===f)?.state||f.replace('.png','');}if(f==='wireframe.html'){role='editable standalone HTML planning source';state='responsive, interactive local simulation'}if(f.includes('attempt-1')||f.startsWith('failure-')){role='preserved intermediate failure';state='superseded; not current design evidence'}return {path:abs(path.join(root,f)),role,dimensions,scale:f.endsWith('.png')?'1x; logical = physical':'N/A',state,bytes:b.length,sha256:sha(b)}});
const text=`# Design method trial — design-v1

Date: 2026-09-07. Scope: complete synthetic offline wireframe exercise only. This is the designer's method report and self-check, not independent QA, project-control approval, or page approval. No registered page, production implementation, shared TiO2 component, external service, or project/Skill file was changed. All created files are inside ${abs(root)}.

## Inputs and baseline

The fixed exercise inputs were unversioned files; exact consumed snapshots are identified below by SHA-256. copy.json is the sole English-copy source. build.cjs reads it without modifying it and emits a standalone wireframe.html. All supplied prose, record labels, metrics, values, units, footnotes, form labels, feedback and privacy text remain intact. Required fields receive a visual asterisk without replacing their labels. The neutral shell is solely Example Evaluation Desk as specified by input.md; it is not TiO2 Global Chrome proof.

| Input absolute path | Bytes | SHA-256 |
|---|---:|---|
${inputs.map(i=>`| ${i.path} | ${i.bytes} | ${i.sha256} |`).join('\n')}

Root AGENTS.md, PROJECT_CONTEXT.md and 02_DIRECTORY_GUIDE.md were read for scope and file placement. No applicable AGENTS.md was found in the input/output ancestor subdirectories or Skill directory. No sibling trial, scoring or review outputs or project Gate 3 method-design history were consulted.

## Content-to-layout map and choices

| Input location | Layout location | Preserved relationship / states |
|---|---|---|
| input.md neutral shell | header, dialog, footer | Four matching in-page links and fixed Request review action; compact header at 768/390; modal menu with return focus |
| hero | #overview | Title, explanatory paragraph and CTA to #request |
| comparisonTitle, records, metrics, notes | #comparison; record-0 through record-2 | Six labelled measurements per record, units beside values; full record-specific footnote after measurements; no selection, ranking or winner |
| readingTitle, sections[0..5] | #reading | Section 1 initially visible; remaining five native disclosures keep visible headings and full prose in source, then expand in normal document flow |
| form | #request | Name/email/positive decimal kg required; optional single select with Not sure yet default; optional multiline context; associated field errors plus summary; privacy sentence and link immediately above submit |
| privacy | #privacy | Complete local-retention/no-transmission explanation |
| footer | footer | Brand and one Privacy note anchor |

Desktop (1440): three equal comparison record columns make the corresponding metrics easy to scan; full labels and record notes repeat to keep records self-contained. Reading/form width is capped at 820 px, allowing comfortable prose lines and label space. Name and email share a row; other fields use full width.

Tablet (768): one record per row, with its six labelled measurements in a two-column grid. This retains readable density without squeezing three long record titles into narrow columns. The compact header is independently arranged in a single row; name/email remain a two-column form row.

Mobile (390): all measurements and form fields use one column. The header places brand above Request review and Menu. The native select is 80 px high so the supplied long Beta name wraps visibly in this renderer. No record copy was shortened. Paragraphs, disclosures, validation feedback and confirmation determine page height; there is no fixed blank spacer after the form.

## Rendering, actual viewing and actions

Renderer: installed Google Chrome ${evidence.renderer}, driven by supplied bundled Node.js and Playwright. Fonts: local Arial, Helvetica, sans-serif stack; document.fonts.ready awaited before capture. No external fonts or images required; no substituted image asset. Logical viewport widths: 1440, 768, 390; viewport height 1000 for browser operations. All exports use deviceScaleFactor 1, so PNG physical dimensions equal logical capture dimensions. Full-page heights are content-driven; inspection PNGs are labelled crops of the same source. No 780 px output is presented as Tablet.

Actual visual inspection: opened full initial pages at all three widths and expanded pages at all three widths to inspect overall flow. Opened readable desktop hero/comparison/form/privacy crops, tablet comparison crops, mobile hero/all three records/all five expanded-reading crops, invalid and confirmation form crops, the modal menu crop, and footer crops for all three widths. Checked long label wrapping, all record/metric/value/unit/note relations, six full article sections, privacy adjacency, full feedback, end-of-page spacing and Footer. Long screenshots were not relied on at reduced preview size for text checking.

Actual local interactions performed by Playwright, separate from screenshots:

${evidence.actions.map(a=>'- '+a).join('\n')}
- Followed the modal Comparison anchor: location hash #comparison, scrollY 599 and section top 0.42 px after closing, while Menu trigger regained focus. This verifies navigation rather than merely displaying links.

The page made zero HTTP(S) requests during the main recorded run; HTTP(S) routes were blocked defensively. Submit handlers only prevent navigation, validate existing controls and display local feedback. The success wording explicitly says no message was sent and no review was scheduled. No recipient acceptance, scheduling or technical suitability is claimed.

## Intermediate failures and corrections

1. The first crop helper used page coordinates outside the viewport without fullPage enabled. Its screenshot call failed after the first two viewport exports. Preserved render-evidence-attempt-1.json records the actual failure. Added full-page clipping and reran successfully.
2. Actual mobile confirmation image showed the second line of the native selected Beta name clipped at 48 px height. Preserved failure-mobile-select-before-fix.png. Raised the mobile select to 80 px, rerendered all three main viewports and states, and visually confirmed the complete selected name.
3. Additional actual modal-link testing found return-focus scrolling back to the header after an in-page link. Preserved supplement-evidence-attempt-1.json. Set return focus with preventScroll:true, verified the Comparison anchor now reaches its section, and regenerated the final evidence.

No known unfinished requested artifact or content change decision remains. Limitations: evidence covers the installed Chromium renderer and local browser simulation, not other browser engines, a real mobile device, assistive-technology speech output or external receiving. Those are not represented as completed. The method output does not grant any Gate or publication approval.

## Asset inventory

All current design PNGs share the final wireframe.html / build.cjs baseline identified in this table. Superseded failure assets are explicitly marked. For PNGs, logical dimensions equal the physical pixel dimensions below at 1x; readable crops do not represent new breakpoints. For scripts/HTML/JSON, image dimensions and ratio are N/A. The report does not hash itself and this inventory is not a page Manifest.

| Absolute path | Role | Physical px | Scale | State | Bytes | SHA-256 |
|---|---|---|---|---|---:|---|
${files.map(f=>`| ${f.path} | ${f.role} | ${f.dimensions} | ${f.scale} | ${f.state} | ${f.bytes} | ${f.sha256} |`).join('\n')}

## Reopen and reproduce

Open ${abs(path.join(root,'wireframe.html'))} in a local browser. It is standalone and makes no network requests. Resize to the specified logical viewport, use Menu and disclosures, and submit invented details to inspect local states. No data leaves the page and reloading clears values.

To regenerate from the unchanged copy baseline, invoke the supplied node.exe with build.cjs, then render.cjs and supplement.cjs; all scripts write only within this output directory. report.cjs regenerates this report and reads back the inventory paths/hashes. No installation or download is needed.
`;
fs.writeFileSync(path.join(root,'design-report.md'),text);const read=fs.readFileSync(path.join(root,'design-report.md'),'utf8');for(const f of files){if(!read.includes(f.path)||!fs.existsSync(f.path)||sha(fs.readFileSync(f.path))!==f.sha256)throw new Error('Inventory mismatch '+f.path)}console.log('Report saved and read back; '+files.length+' asset paths and hashes verified.');
