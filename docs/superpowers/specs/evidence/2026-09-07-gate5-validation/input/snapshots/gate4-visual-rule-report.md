# Gate 4 isolated method exercise — design v1

Date: 2026-09-07 Asia/Shanghai. Status: author submission for independent method review. This is three representative regions (Orientation, Comparison, Request), not a production page, company claim, Global Chrome assembly, Gate approval or publishing result.

## Inputs and source combination

The task source is `D:/23MySec/99_workspace/gate4-method-validation-2026-09-07/input.md`. The applied candidate method is `D:/23MySec/skills/brand-applied-visual-design/SKILL.md`, candidate V0.1. Styling sources are `D:/23MySec/brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` and `D:/23MySec/brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md`. Their exact bytes and SHA-256 identities are in `asset-inventory.json` under `externalInputs`. The font was copied byte-for-byte from the input asset; it is bundled here with a relative CSS reference.

Open `index.html` locally. `index.html?media=absent` removes the entire illustration figure including title and caption. Source combination: `index.html`, `styles.css`, `app.js`, `assets/Inter-Variable.ttf`. Each PNG is tied to that four-file combination by hashes in `evidence/runtime.json` and the asset inventory. The diagram is original inline SVG within `index.html` and has no external asset dependency. No source revisions were needed after the first render; all delivered PNGs use this same source combination.

## Concrete visual rules and their use

| Role / scope | Actual rule | Proven location |
|---|---|---|
| Headings and prominent data | Primary Navy #062B5B; Inter 700 headings, 600 values; no product-ranking color | O heading; C record names, values; R heading |
| Body and supporting copy | #334155, Inter 400, minimum 16px, line-height 1.65 | All three regions, conditions, notes and helper |
| Primary action | #008078 fill + white text, 600, 16px, 2px border, 8px radius, min-height 48px, padding 12px 20px | O request link and R Preview request |
| Secondary action | White fill, Navy text, functional teal border | O comparison link and R Clear selection |
| Hover | Primary becomes Navy/white; secondary becomes #F5F8FB with Navy text | Rules in CSS; primary actual hover observed separately |
| Focus | Actual `:focus-visible`: 3px #008078 outline at 4px offset; not a painted mock state | R missing-record, selected and successful preview captures |
| Surfaces | White reading field; #F5F8FB figure/request area/even table row; #D9E2EC noninteractive dividers | O figure, C rows/cards, R section |
| Functional field boundary | 2px #008078 on white and light surfaces; 8px radius | Select, textarea, dropdown container |
| Error | #8C2532 on white, 4px left rule + exact explanatory sentence; field also changes border | R missing-record capture; color is an exercise refinement, not a new brand token approval |
| Result | Navy copy on white with a 4px teal left rule; exact local-preview sentence prevents implying receipt | R Beta-success capture |
| Container | Main max-width 1296px including section padding; 1440 logical viewport has 1200px content width | O/C/R desktop |
| Responsive gutters / section rhythm | 48px horizontal and 64px vertical above 1000px; 32/48px at <=1000px; 20/40px at <=600px | All three viewport sets |
| Responsive type | H1 56/44/36px; H2 38/34/28px; intro 18/18/16px at desktop/tablet/mobile | O/C/R headings and intros |
| Fixed O layout | Desktop grid 2.1fr:1fr, gap 48px; <=1000px one column, gap 32px; <=600px gap 28px; media-absent one column | O initial and absent |
| Diagram | SVG viewBox 300×210, full available width with max-height 230px; figure 12px radius, no cropping; only Value/Unit/Condition inside image, `aria-hidden=true` | O figure; caption is outside SVG |
| Comparison relationship | Table columns 25/15/30/30%; 16px table type; desktop cell padding 22px 20px, tablet 18px 12px; values nowrap while full condition/note wrap | C at 1440 and 768 |
| Mobile comparison | <=600px table hidden and ordered cards shown; each card retains Record / Measured value / Measurement condition / Note; gap 20px | C at 390 |
| Single select | Wrapping button with one chosen value; selected full name visible; custom listbox options wrap; no ellipsis | R Beta-selected/success at all widths |
| Request rhythm | Single column max-width 800px; field gap 28px, label gap 10px; helper remains immediately after textarea; actions follow helper; result follows actions | R all states |

The later functional-color addendum is applied to light-surface controls without changing Logo colors or importing an actual Logo. The exercise uses no logo, company identity, consent UI or photographs. Noninteractive pale separators are not used as the sole means of understanding a control or technical relationship; table headings, whitespace and mobile field labels preserve those relationships.

Key choices: maintain full notes instead of equalizing table row height; allow the long selected name to grow the control on mobile; keep the request form at a readable 800px maximum; make the optional diagram visibly explanatory without implying certification. The dropdown temporarily overlays following content when open, as a local select popup. The closed control and all required error/selected/success exports show full related text. A permanently expanded option list was not substituted for the specified field structure.

## Coverage and evidence

`exports/{width}-{region}-{state}.png` is the naming rule; widths are **1440, 768, 390 logical CSS px at deviceScaleFactor 1**. These are region screenshots, so the 1440 viewport produces 1296px-wide region assets; tablet and mobile exports are 768 and 390px wide. This is not a 1296px viewport. Exact physical heights, widths, bytes, hashes and state identities are in the inventory. The viewport height during rendering was 1000px; a section export can exceed that height.

| Region/state | 1440 | 768 | 390 | What it proves |
|---|---|---|---|---|
| orientation-initial | Saved/opened | Saved/opened | Saved/opened | Heading, intro, both actions, media relationships |
| comparison-initial | Saved/opened | Saved/opened | Saved/opened | All three records, values/units, full conditions and associated notes; table/cards |
| request-initial | Saved/opened | Saved/opened | Saved/opened | Initial control, optional question/helper, action order |
| request-missing-record-focus | Saved/opened | Saved/opened | Saved/opened | Actual focused select, exact error, nonempty textarea preserved |
| request-list-open-beta-focus | Saved/opened | Saved/opened | Saved/opened | Additional popup and real keyboard-focus appearance, full option names |
| request-beta-selected | Saved/opened | Saved/opened | Saved/opened | Long selected name, question kept; no success before preview |
| request-beta-success | Saved/opened | Saved/opened | Saved/opened | Exact full selected name in result, success sentence, preserved question |
| orientation-media-absent | Saved/opened | Saved/opened | Saved/opened | Figure and caption removed, content expands, both actions retained |

All 24 delivered PNGs were actually opened with `tools.view_image(detail="original")` in four groups on 2026-09-07. At 390, the 1908px-tall comparison was reviewed from Alpha through Gamma, including every note. No cropped words, missing notes, overlapping closed fields or broken technical pairings were observed in these exports. Mobile selected Beta grows to three readable text lines; the success summary wraps independently. Tablet comparison is denser than desktop but stays at 16px with complete rows. This visual observation is the author's inspection, not independent review.

## Actual runtime observations versus authored checks

`render.cjs` contains authored assertions and export operations. `evidence/runtime.json` contains the observed values from executing them successfully with Chrome 152.0.7977.82, Playwright 1.62.1 and Node v24.16.0. `inspect.cjs` and `evidence/supplementary.json` add actual CDP font identities, visible text sizes, center-point hit checks and keyboard/hover observations. The scripts ran offline through file URLs; zero HTTP(S) requests were recorded in the main render. No dependencies were installed and no real request was submitted.

Observed on all three widths:

- Inter FontFace status `loaded`, `document.fonts.check` true, computed family Inter; CDP identifies actual H1 custom glyph font `Inter-28pt-Bold` (family Inter). Body/other text use the same loaded family, but CDP glyph inspection was specifically on H1. No observed fallback was needed.
- Minimum measured visible HTML text size 16px. The diagram's authored 20-unit text is covered by visual inspection, not that HTML-size audit.
- Initial scrollWidth equalled viewport width. Media-absent scrollWidth also equalled viewport width. Full selected name was rendered without ellipsis and visually read in the selected and success states.
- All measured visible controls (links, buttons, textarea and open options) met 44×44px. The smallest button measured about 158.91×50.39px; mobile standard actions are 350×50.39px. Options were measured separately while open. All six primary control center points hit the intended element/descendant after scroll into view. This is sampled actual hit testing, not exhaustive edge/corner touch testing.
- The keyboard flow textarea → Tab → Preview → Enter produced the exact missing-record error, returned actual focus to record, and matched `:focus-visible`; the question stayed unchanged.
- ArrowDown opened the list, another ArrowDown focused Beta, Enter selected it and reset prior feedback. Tab reached textarea and then Preview; Enter produced the full Beta preview and kept the question. Selection change reset success; Clear removed only record/error/success/summary and retained question. A separate blank-question Alpha preview succeeded.
- Supplementary Home/End chose Alpha/Gamma focus positions; Escape closed the list and restored record focus. Primary hover produced Navy background/border with white text.
- Media-absent copy width matched the inner available width: 1200, 704 and 350px. Both orientation links remained, and figure display was none.
- Main render reported no page errors. These observations are local prototype behavior, not evidence about a production backend or assistive-technology announcement.

Contrast values were calculated from browser-computed opaque foreground/background colors using relative luminance. Main runtime pairs: body/white 10.355:1; body/soft 9.715:1; Navy/white 13.959:1; white/functional teal 4.818:1; functional teal/soft 4.520:1; error/white 8.657:1. Normal text was checked at >=4.5:1, controls/focus at >=3:1. The actual primary hover pairing is the same measured Navy/white combination, 13.959:1. The focus outline is separated from its control by a 4px light-surface gap, so its adjacent surface uses the 4.520:1 or 4.818:1 pairing. No text is placed over the popup shadow and no gradient/photo composite contrast is claimed.

## Handoff, limitations and questions

The fixed content is maintained in `index.html` and the records array in `app.js`; the latter supplies identical table/card/option strings to reduce divergence. No input, brand standard, candidate Skill, project navigation or real page file was changed. This report is an authored check, with saved runtime and visual evidence, awaiting a separate reviewer's assessment.

Not covered: actual screen-reader announcements, accessibility-tree review, Safari/Firefox, OS mobile browser behavior, zoom/reflow beyond the three supplied widths, exhaustive keyboard permutations, production Chrome/legal/nav integration, live submission or real-page Gate 5 completion. Inline SVG glyph usage was not individually inspected through CDP. The custom-select approach is demonstrated here, but production accessibility parity needs separate implementation review. No additional business decisions were required for this bounded sample.

To rerun, use Node with `NODE_PATH=C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules`, then run `render.cjs` and `inspect.cjs` from this folder. Chrome is the locally available channel. Do not rerun on a frozen evidence copy unless preserving the prior outputs; the scripts write the named evidence/PNG files. Preview dependencies are all relative and bundled; the evidence renderer depends on the recorded local Node, Playwright and Chrome installation.

The report was saved and read back from this exact path; asset-inventory readback and hashes were checked after generation. Inventory/report self-hashes are intentionally excluded.
