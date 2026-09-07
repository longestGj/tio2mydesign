# Design method trial — design-v1

Date: 2026-09-07. Scope: complete synthetic offline wireframe exercise only. This is the designer's method report and self-check, not independent QA, project-control approval, or page approval. No registered page, production implementation, shared TiO2 component, external service, or project/Skill file was changed. All created files are inside D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1.

## Inputs and baseline

The fixed exercise inputs were unversioned files; exact consumed snapshots are identified below by SHA-256. copy.json is the sole English-copy source. build.cjs reads it without modifying it and emits a standalone wireframe.html. All supplied prose, record labels, metrics, values, units, footnotes, form labels, feedback and privacy text remain intact. Required fields receive a visual asterisk without replacing their labels. The neutral shell is solely Example Evaluation Desk as specified by input.md; it is not TiO2 Global Chrome proof.

| Input absolute path | Bytes | SHA-256 |
|---|---:|---|
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/input.md | 3659 | 3a7d856264b56b0c5d49557acd0719469d90c07dda82ee1ba0d6c51ab457a658 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/copy.json | 7412 | 4a066f92593a3b09a90ca3f35cb8638c921dab8280e2822e719c468dd5cf8f65 |
| D:/23MySec/skills/responsive-wireframe-design/SKILL.md | 6185 | cd580382ed6ca6ff665fe21b6da787e4f6324d973e99d2cfd6ba7858a00b101c |

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

Renderer: installed Google Chrome 152.0.7977.82, driven by supplied bundled Node.js and Playwright. Fonts: local Arial, Helvetica, sans-serif stack; document.fonts.ready awaited before capture. No external fonts or images required; no substituted image asset. Logical viewport widths: 1440, 768, 390; viewport height 1000 for browser operations. All exports use deviceScaleFactor 1, so PNG physical dimensions equal logical capture dimensions. Full-page heights are content-driven; inspection PNGs are labelled crops of the same source. No 780 px output is presented as Tablet.

Actual visual inspection: opened full initial pages at all three widths and expanded pages at all three widths to inspect overall flow. Opened readable desktop hero/comparison/form/privacy crops, tablet comparison crops, mobile hero/all three records/all five expanded-reading crops, invalid and confirmation form crops, the modal menu crop, and footer crops for all three widths. Checked long label wrapping, all record/metric/value/unit/note relations, six full article sections, privacy adjacency, full feedback, end-of-page spacing and Footer. Long screenshots were not relied on at reduced preview size for text checking.

Actual local interactions performed by Playwright, separate from screenshots:

- Clicked all five disclosures at 1440; all opened in document flow.
- Clicked all five disclosures at 768; all opened in document flow.
- Clicked all five disclosures at 390; all opened in document flow.
- Mobile menu: actual open, initial Close focus, reverse/forward Tab wrap, rejected focus into underlying form, Escape close and Close button; trigger focus restored.
- Submitted blank name, invalid email, zero quantity; saw three associated errors and summary; focus name; values retained.
- Negative quantity rejected with quantity focus; positive decimal 0.75 accepted with invented valid email and record Beta; displayed local-only confirmation; retained all values; no network submit.
- Measured visible interactive targets at 1440: all at least 44 × 44 logical px.
- Measured visible interactive targets at 768: all at least 44 × 44 logical px.
- Measured visible interactive targets at 390: all at least 44 × 44 logical px.
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
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/build.cjs | reproducibility | N/A | N/A | current helper / execution evidence | 10194 | 36dd64b733d9e3195d7ead1ff60f07a0b2b81f786e52b58dcefe8cbe484fbf14 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/expanded-1440.png | full-page render | 1440 × 4766 | 1x; logical = physical | all six reading sections visible | 358205 | 480dc71ca13a04c4aa86de1b04ec101761061ba7236dc06fd3321dc4918480cc |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/expanded-390.png | full-page render | 390 × 8141 | 1x; logical = physical | all six reading sections visible | 344690 | e80896d725ea1ff22ba996896af819157605f1bee284d3e6965a39b0eaec037e |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/expanded-768.png | full-page render | 768 × 5413 | 1x; logical = physical | all six reading sections visible | 351062 | 4ba979a6937093b5688342f6861aea0cd631950e67c7a5dffe75458ebe379057 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/failure-mobile-select-before-fix.png | preserved intermediate failure | 390 × 850 | 1x; logical = physical | superseded; not current design evidence | 28399 | 5d94bd1b4168bdab5f3a5aa993875f35a65e2db40ece7aaec747bc64762ce13b |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/initial-1440.png | full-page render | 1440 × 3545 | 1x; logical = physical | initial, sections 2–6 collapsed | 213480 | 1e437301d2ec61deabdafea5e3e0abe57aa4da0050b53830b067c1541de7d9ad |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/initial-390.png | full-page render | 390 × 5725 | 1x; logical = physical | initial, sections 2–6 collapsed | 204432 | 5e1d7a0af5e6ed14af69036cbfb486fe12031c5016b58ee97c3961bf0341d9b2 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/initial-768.png | full-page render | 768 × 3984 | 1x; logical = physical | initial, sections 2–6 collapsed | 207965 | d51fb5ea307559c5541defa3e63e30b203d75f91cf5f80200b34e5b907595607 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-desktop-comparison-1.png | readable inspection crop | 1440 × 850 | 1x; logical = physical | inspect-desktop-comparison-1 | 58054 | 6167923eff937228989fd8dd0ab8e250867516c12cca611473023a768dd84508 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-desktop-comparison-2.png | readable inspection crop | 1440 × 128 | 1x; logical = physical | inspect-desktop-comparison-2 | 7066 | fba06fc389e4cee32cf4ce429fb409aae58fd815e8098714652b44cca927854d |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-desktop-footer-1.png | readable inspection crop | 1440 × 230 | 1x; logical = physical | inspect-desktop-footer-1 | 10611 | 9b21c2068e51c8e3d304c4fa950285fa23aeddfa443979303ab01ee690e37b27 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-desktop-form-1.png | readable inspection crop | 1440 × 850 | 1x; logical = physical | inspect-desktop-form-1 | 30292 | cdf516db9db90e978e309be3efb30bf414b2cb9c034a59515ac51df6cc8610d6 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-desktop-form-2.png | readable inspection crop | 1440 × 53 | 1x; logical = physical | inspect-desktop-form-2 | 442 | 1556a6a98f1da26efe627d6b8d3bc250473cab2755c473e426a115fe92de6f69 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-desktop-hero-1.png | readable inspection crop | 1440 × 422 | 1x; logical = physical | inspect-desktop-hero-1 | 39068 | 702f9204522d21c04ff7e03da973e0c4f4a7bcc89629b61eb091584cd986b23c |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-footer-1440.png | readable inspection crop | 1440 × 93 | 1x; logical = physical | inspect-footer-1440 | 3037 | 42e82c9f75e8502f55c9537ed971f9f0f59a752d8d91224d14392a15ecf29793 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-footer-390.png | readable inspection crop | 390 × 130 | 1x; logical = physical | inspect-footer-390 | 2950 | 7447f05fae5276ecc14b2834aceb6baeb341601a823c07c547003bc2813ee86f |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-footer-768.png | readable inspection crop | 768 × 93 | 1x; logical = physical | inspect-footer-768 | 2779 | 1eb2560981d51e9b01cc4b40fc5bf2ae90966cb61a838081c39286b07660e93f |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-comparison-1.png | readable inspection crop | 390 × 850 | 1x; logical = physical | inspect-mobile-comparison-1 | 28357 | 0500b736ac4731d285c77dfe639fd0ec342be151b3f07be1f23c5e8cb7053f4f |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-comparison-2.png | readable inspection crop | 390 × 850 | 1x; logical = physical | inspect-mobile-comparison-2 | 25936 | 4989940ec063735209ee8fae038c0ba663075a4816569193f8488dc28eb34ded |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-comparison-3.png | readable inspection crop | 390 × 823 | 1x; logical = physical | inspect-mobile-comparison-3 | 22912 | 80d250bf92a94bcebf609c0bad93ff8dd8dfe62c832914846e53a3e95409b9f8 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-expanded-reading-1.png | readable inspection crop | 390 × 850 | 1x; logical = physical | inspect-mobile-expanded-reading-1 | 44464 | afc269524d7541cb48603d33838e87687545750fd5f5db66b6a7990a7e05101b |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-expanded-reading-2.png | readable inspection crop | 390 × 850 | 1x; logical = physical | inspect-mobile-expanded-reading-2 | 48268 | b9eef469a5fd2c989aae43cf8010bbc193588e385cbd443a090026cf1f8e4092 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-expanded-reading-3.png | readable inspection crop | 390 × 850 | 1x; logical = physical | inspect-mobile-expanded-reading-3 | 45499 | 25a8c61b2d90e49857bbadcac7226c2715df69c22cbd1315ff1b7746ad185951 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-expanded-reading-4.png | readable inspection crop | 390 × 850 | 1x; logical = physical | inspect-mobile-expanded-reading-4 | 47294 | a2c3080cf08666c61248e7f24a7f45bdda022a6efad82605bab06a9368ded8c8 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-expanded-reading-5.png | readable inspection crop | 390 × 197 | 1x; logical = physical | inspect-mobile-expanded-reading-5 | 8436 | f219f6bdf51ea6a5f59cbfb375b492aadc2ef57f0b34ffd7d9d31bf13d8b03ff |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-footer-1.png | readable inspection crop | 390 × 235 | 1x; logical = physical | inspect-mobile-footer-1 | 8563 | db7a9776718aa2b78a6e9390642de61bb8f7b90337e2e28556472f5ca2c7ef60 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-hero-1.png | readable inspection crop | 390 × 482 | 1x; logical = physical | inspect-mobile-hero-1 | 31885 | 21a49d7a0929403e7e27b291069397c47e5c47db54b0a592cc189fcb7e942712 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-invalid-1.png | readable inspection crop | 390 × 850 | 1x; logical = physical | inspect-mobile-invalid-1 | 26940 | 2b8138a364d0a1058ecadb37ec0b542a6f20bad0cec4babbba2a418d3b15f463 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-invalid-2.png | readable inspection crop | 390 × 462 | 1x; logical = physical | inspect-mobile-invalid-2 | 12533 | 6ea410c67d9877ebe0989084cad0e67b778897bab768d92cd1ecde734a8cb786 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-menu.png | readable inspection crop | 390 × 1000 | 1x; logical = physical | inspect-mobile-menu | 34156 | 4d41d96419492cef38aa102b727a643254c9bb4dbf34c6868edfb053505eef54 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-success-1.png | readable inspection crop | 390 × 850 | 1x; logical = physical | inspect-mobile-success-1 | 26848 | 68c1d302f306c4661401c7f964f9ced580709a33abcbd75716ddd8b1e8475bc8 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-mobile-success-2.png | readable inspection crop | 390 × 331 | 1x; logical = physical | inspect-mobile-success-2 | 11315 | 1a80ee03990a80a8c6c6c59ec485c96423f6db3525984922b208479f9a126891 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-tablet-comparison-1.png | readable inspection crop | 768 × 850 | 1x; logical = physical | inspect-tablet-comparison-1 | 41242 | cf11dd658c6892a9bc0aa8c60d06623dfdfbe8d3bd0e0aefb618366a89219998 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/inspect-tablet-comparison-2.png | readable inspection crop | 768 × 631 | 1x; logical = physical | inspect-tablet-comparison-2 | 29878 | 36d7a49562dd9ee3a6c1c6222f0901dc9b9c515e7228d46b12038b3b36764293 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/invalid-submit-390.png | full-page render | 390 × 5975 | 1x; logical = physical | invalid name/email/quantity with retained input | 216965 | 05f341009bdd9255a0cc67289e65defca931987515b75a3b366797fe7d846a40 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/mobile-menu-390.png | full-page render | 390 × 5725 | 1x; logical = physical | modal mobile menu open | 189869 | 004349db2ecb726c9acd3aac1c6df520dfd8e51cd813ed6b3618d9d3a84c27ac |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/render-evidence-attempt-1.json | preserved intermediate failure | N/A | N/A | superseded; not current design evidence | 1753 | ce50b35449e9b3f710cfdb1514ed1553a35647fe1ef812c0ed4bd55e45a45733 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/render-evidence.json | reproducibility | N/A | N/A | current helper / execution evidence | 3452 | 205add776a188520ab4ff60cbca499fe1e0015c684c1e3f6c4f5ae6fe2f9bdae |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/render.cjs | reproducibility | N/A | N/A | current helper / execution evidence | 6366 | 127067c8321c7bd2cfb08a3ee3be9787c9fbadf75aa733ba80a0601bf1d92157 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/report.cjs | reproducibility | N/A | N/A | current helper / execution evidence | 9809 | 16992bbad0af32ad36c3d15cc5383feb5c536261f502a91f30d851ae303a31d5 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/simulated-success-390.png | full-page render | 390 × 5844 | 1x; logical = physical | local confirmation with retained values | 215332 | ed8bf76446cc3f297b1e3ff59dc2c9bf7fd56c9e05cedbb587dd0797db9cd000 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/supplement-evidence-attempt-1.json | preserved intermediate failure | N/A | N/A | superseded; not current design evidence | 364 | 38c4d79b4922d964b59f0fdb04ce230d224375b95bd495f7dd33de2d41895cc0 |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/supplement-evidence.json | reproducibility | N/A | N/A | current helper / execution evidence | 219 | 1f52576fcab82bb56ade10b1a3de83708767635c039cb0dfaacd2089dd4a796e |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/supplement.cjs | reproducibility | N/A | N/A | current helper / execution evidence | 1591 | 423fe4862097ad2ec4b3edba80710cabbcf7c5a98c961b0f014fccc70d4d87bd |
| D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/wireframe.html | editable standalone HTML planning source | N/A | N/A | responsive, interactive local simulation | 17572 | f992ec407460b62f5ccb1c179ea44a657bba8984f99b664ce4e0ea2920fa1ee9 |

## Reopen and reproduce

Open D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/wireframe.html in a local browser. It is standalone and makes no network requests. Resize to the specified logical viewport, use Menu and disclosures, and submit invented details to inspect local states. No data leaves the page and reloading clears values.

To regenerate from the unchanged copy baseline, invoke the supplied node.exe with build.cjs, then render.cjs and supplement.cjs; all scripts write only within this output directory. report.cjs regenerates this report and reads back the inventory paths/hashes. No installation or download is needed.
