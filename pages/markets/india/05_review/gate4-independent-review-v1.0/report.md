# MARKET-IN-001 merged Gate 4 independent final review V1.0

Date: 2026-09-07. Reviewer: independent reviewer `/root/gate4_review_a`, different from the execution author. Result: **CHANGES_REQUIRED**. Five required findings remain open. This is a review of frozen candidate `IN-G4-V10-SOURCE-01`, not user approval, Gate 4 closure or Gate 6 authorization.

## Scope and authority

Reviewed the current root rules and Project Context, India Manifest V0.8, merged first live-test control V1.0, Page Gate 1–4 Standard V2.1, current Gate 4 agent V1.1 and shared work contract V1.0; applied brand-applied-visual-design V0.2, full-page-visual-composition V0.2 and layout-interaction-verification V0.4 with core-risk-model. Also consumed the India Brief V0.2, approved Gate 2 B V0.1/C V0.2, Gate 3 source and handoff, Market rules, current brand/CTA and shared owner references. The current workflow is the merged complete Gate 4, not the earlier representative-direction-only exercise. Gate 3 handoff's old future Gate 5 wording is historical; its explicit approved-content and responsive-relationship constraints still apply.

The candidate source, full visual/method report, formal runtime record, export inventory and execution self-check were read. No author script or self-check substitutes for the independent operation and image inspection below. No candidate, upstream source, Manifest or status was modified.

Frozen HTML: `D:/23MySec/pages/markets/india/04_planning/gate4-v1.0/MARKET-IN-001_GATE4_COMPLETE_VISUAL_V1.0.html`, 27,168 bytes, SHA-256 `8489b0ee9f165e5426a517cf7a32c60b2dc45416d9bca9e70c4382fd5c858cda`. Export inventory SHA-256 `f6d9a65bdce44ff60cfa795fb05d93b9cd3bbf18456bf2daea17b8df3d057e98`.

## Actual coverage and evidence

- `STATIC_VISUAL`: opened all eight formal PNGs: complete 1440, 768, 390 @2x; 768/390 Menu; all three Cookie dialogs. For the long full pages, inspected all fourteen lossless, overlapping native-image segments through Footer, not just scaled overviews. `readable-segments/segments.json` binds these crops to the formal sources. Desktop three segments, tablet three, mobile eight.
- `ACTUAL_RUNTIME`: fresh offline Chrome 152.0.7977.82, 1440×900/DPR1, 768×900/DPR1, 390×844/DPR2. Ran normal/hover/keyboard focus on the visible Header/main/Footer controls and shared overlay controls; Menu keyboard open, entry, forward/backward loop, background focus isolation, Escape, toggle close, link selection and desktop breakpoint restoration; Cookie entry, forward/backward loop, background focus isolation, Escape/Close return. Tested no-JS content and links. No page errors or HTTP(S) request attempts occurred in this run.
- `ACTUAL_RUNTIME`: independently re-rendered all three normal full pages; each PNG is byte-for-byte identical to its formal export. All eight PNG identities and dimensions plus the HTML identity agree with the published inventory (nine listed objects). This does not establish identities that the author omitted from that inventory: see IR05.
- `SOURCE_INSPECTION`: G3 and G4 `<main>` are byte-identical; B headings, all fifteen paragraphs, five bullets and eleven links preserve text, order and href. CSS-generated labels and layout changes require separate judgment and are not covered by DOM text equality.
- `LOCAL_SIMULATION`: all eleven main navigation actions were clicked at each width. RFQ records carry `source_page_id=MARKET-IN-001`, `destination_country=India`, editable/visible destination intent; Request Documents carries only source. Products, Document Hub, breadcrumb and trade resource have empty context. These are local intent records, not receiver fields or production submissions.

Machine evidence: `identity.json`, `runtime.json`, `targeted.json`, `link-detail.json` and `review-checks.json`; reproducible scripts are in this review directory. The initial generic B parser counted standalone action links as paragraphs and reported `paragraphs:false`; `targeted.json.copyReconciliation` corrects that category mismatch and verifies every actual paragraph on all widths and no-JS. No missing copy finding is inferred from that earlier checker result. An initial script-generation syntax failure was a reviewer-tool issue, not a candidate failure.

## Required findings

### IN-G4-IR01 — Approved responsive relationships changed without a decision

**Priority:** P1, contract/structure. **Location:** added CSS, especially HTML lines 48–51 and 72–78; IN-02, IN-03 and desktop IN-05.

**Expected:** the approved G3 handoff permits visual hierarchy, spacing, surfaces, typography and action styling, but explicitly forbids changing responsive relationships. Current agent §3 requires a decision for a structure conflict.

**Actual:** at 768, G3 has one 704px application row per context, with its 175px heading column and body column. G4 replaces this with three approximately 225px cards across, reducing actual body width to approximately 179px. All three long descriptions remain present, but the approved tablet reflow has been replaced and becomes much denser. G4 also changes IN-02 from linear heading/paragraph flow into a two-column heading/body grid at desktop and tablet; desktop IN-05 changes from linear list → human-response paragraph → CTA into separate columns and a positioned CTA. These are source-confirmed and runtime-measured, not inferred only from screenshots. Same DOM order does not prove same responsive relationships.

**Evidence:** `targeted.json.widths[*].geometry/g3Geometry`, formal 768 full image and readable parts 1–2, formal 1440 full image. Report's statement that direction changed no field relationship does not resolve the handoff constraint; its acknowledged paragraph-column refinement is itself a layout change.

**Acceptance:** restore the approved structural/reflow relationships while applying the chosen visual language, or obtain the responsible upstream/authorized decision explicitly accepting the concrete changed relationships and update the binding input. Do not silently loosen the handoff. Recheck the affected modules at all three widths, full copy, action ordering, natural reading sequence, and surrounding module connections. No full new Gate 3 cycle is required merely to restore the approved arrangement.

### IN-G4-IR02 — Mobile document index is clipped at the viewport edge

**Priority:** P2, responsive visual. **Location:** IN-04 decorative TDS/SDS/COA/COO block; HTML line 78.

**Expected:** complete mobile composition with no clipped component edges; checking only document scrollWidth is insufficient when an ancestor hides overflow.

**Actual:** at 390, `.module-4 .content::after` uses `width:100%` with `box-sizing:content-box` and 24px horizontal padding. The content width is 350px, but the pseudo-element painted box is 398px wide, beginning at x=20 and ending at x=418 before its 8px shadow. `main{overflow:hidden}` clips it at x=390. The formal mobile image visibly loses the right edge/rounded corner and shadow while the left side remains inset. The automated claim of no horizontal overflow is true at document level but masks this visual failure.

**Evidence:** formal 390 full image, readable part 6; `targeted.json` mobile `documentPseudo`.

**Acceptance:** make the complete intended block, both corners and any intentional shadow fit the mobile composition without hidden clipping or enlarged page width. Preserve the document prose, single approved COO sentence and actions. Re-read IN-04 through IN-05 at 390 and verify desktop/tablet remain composed correctly.

### IN-G4-IR03 — Documents inline links fail contrast and focus/hit safety

**Priority:** P2, functional readability/interaction. **Location:** IN-04 unknown-Grade paragraph; `Product Hub` and `quotation request` at all widths.

**Expected:** normal-size functional text at least 4.5:1 against its actual background, visible keyboard focus without crossing neighbor text, continuous safe 44×44 target area, and naturally continuous punctuation. Preserve the CTA addendum's normal functional token unless an authorized token decision says otherwise.

**Actual:** normal, actual hover and keyboard focus all retain `#008078` text on `#f3f7fa`: **4.4726307:1**, below 4.5:1. The transparent hover has no different background that would cure the pairing. The 3px focus outline with 3px external offset crosses adjacent text/periods: independently captured 390 Product Hub focus passes through the following “or”; quotation request focus crosses preceding “the”/following period. Range/outline intersection evidence also records neighbor-text intersections at desktop/tablet. Further, a centered 44×44 pixel hit test gives Product Hub 1892/1936 matching samples at 768 and 390. At 768 the bottom sampled row resolves to the adjacent `quotation request` anchor; at 390 it resolves to the surrounding paragraph. The other four width/link cases returned 1936/1936. This is why the bounding box's 44px height alone is not an adequate pass.

**Evidence:** `runtime.json` actual color pairs; `targeted.json.links`; `link-detail.json` including returned hit elements; `product-390-focus.png`, `quote-390-focus.png` are independent actual Tab-focus captures. The image clips are paragraph-local, so use them to assess neighbor interference rather than entire-page focus-ring clipping. Normal formal images show the otherwise correct text and punctuation.

**Acceptance:** at 1440/768/390, both links must meet contrast on each actual normal/hover/focus background; implement a visible focus treatment that does not paint over surrounding words/punctuation and a continuous 44×44 area that cannot activate the neighboring link. Preserve exact approved text, quote marks, final period, order, href and context. Recheck the following supplementary-Grade paragraph and Documents actions. Change the light surface or use an authorized functional-color solution; do not arbitrarily override the global normal-link token. Save actual state evidence and hit tests, not only minimum DOM rectangles.

### IN-G4-IR04 — Page-owned CSS changes shared Header and RFQ components

**Priority:** P2, shared-owner contract. **Location:** added CSS HTML lines 27–29.

**Expected:** Page Gate standard §5 and root rules reserve Header/Mobile Menu/Footer styling to the Global Chrome owner; the page consumes and verifies it. The page may style its own actions.

**Actual:** the India visual layer adds Header box shadow and page-local transition/hover rules to `.headerRfq` and `.footerRfq`, including a new background, shadow and vertical translation. This is a concrete shared visual fork even though the original shared markup/style block and navigation order remain. No shared-owner change decision is bound in the submitted inputs. The report and self-check simply say shared Header/Footer were retained.

**Evidence:** source lines 27–29 versus the unchanged G3 shared block; normal full images show the new Header shadow; independent runtime covers actual RFQ states. The finding is ownership, not a claim that the darker hover color itself lacks contrast.

**Acceptance:** remove the page-local shared overrides and consume the current owner, or obtain and bind an authorized shared-owner revision. Keep page-owned action styling scoped to the page. Recheck Header/Footer normal, RFQ hover/focus, mobile assembly and Menu/Cookie return paths for the affected shared revision. Do not independently redesign shared components in the India candidate.

### IN-G4-IR05 — Declared frozen workset does not bind required inputs/dependencies

**Priority:** P2, evidence reproducibility. **Location:** `approval_core/export-inventory.json`, method report and self-check.

**Expected:** common work contract §§1/3, agent §4 and Gate standard §8 require a workset identity, exact common input index, source and durable dependency identities, render conditions and one evidence index. These may be compact references in one existing index; no redundant package is required.

**Actual:** the inventory contains a freeze ID, HTML identity and eight PNG identities only. It does not identify/hash local Inter, its license or either Logo dependency; no explicit `workset_id` or exact common input index binds Brief, B/C/G3, current method and shared/brand owner combination. The report abbreviates some upstream hashes and names owner families, which does not bind that complete combination. The self-check's assertion that source, dependencies and images all have durable hashes in one inventory is factually incorrect. Formal images themselves and source hashes do match, and dependencies load, so this is an incomplete freeze record rather than evidence of a changed or corrupt source.

**Evidence:** actual inventory and directory listing, independent `identity.json`; independently observed current input/dependency identities in `review-checks.json` are review observations, not an author-side freeze repair.

**Acceptance:** update one authoritative workset/evidence index to bind the approved current inputs, local source/dependencies and their exact identities, formal evidence and render conditions; reference actual operations and open/resolved findings by evidence type. Include readable long-page evidence or a bound readback segmentation reference. Correct the self-check and report. With the required source fixes, create a new freeze ID and update every affected image/runtime record; keep V1.0 history. Do not claim an old image is current unless identity and rendering are demonstrated to remain unchanged.

## Preserved strengths and passed boundaries

The supplier/India intent is prominent, both Hero actions are clear, navy separates the material distinction, and the neutral three application contexts remain individually identifiable. The complete approved body is present through Footer at every width. The single COO availability statement, unknown-Grade requirement, supplementary-Grade non-mapping limit, MT quantity, India destination and human follow-up sentence remain intact. No India office/stock/lead-time/duty/price/finished-masterbatch supply claim was introduced in the substantive body. The dated trade information is handed to the correct Resources URL without a customs conclusion. Products stay neutral, Documents has no document/Grade/destination preselection, and RFQ India is editable intent rather than a hidden immutable destination.

Header navigation/current Markets, fixed RFQ labels, Logo loading, legal utilities and Cookie wording remain recognizable and correctly assembled, subject to the shared styling finding. Actual Menu and Cookie keyboard loops/background isolation/returns passed; normal Footer images show no residual focus mistaken for normal. Source and all eight published image identities match, and each full-page rerender exactly reproduces the formal image. No-JS retains all approved main content and actual hrefs; no receiver outcome is claimed.

Nonblocking visual observation S01: new CSS-generated `MARKET BRIEF` and desktop vertical label are 12px; RFQ counters are 13px, below the brand's 14–16px supporting-text reference. These are decorative/secondary and do not hide essential approved copy. Consider removing or making them consistent with the supporting type scale. This is not asserted as an independent hard minimum violation or a required extra revision. CSS-generated words should be accurately disclosed; the report's blanket “no copy change” is narrower than what the rendered page contains. Decorative numbers behind application text also warrant restraint, but no unreadable required sentence was found, so no additional finding is manufactured.

## Limits and disposition

No actual forms, errors, empty result panels or uploads exist on this page, so those are not applicable here. Production routing, recipient serialization/editability, form validation/submission, CMS, consent persistence, live analytics, trade freshness, real touch devices, screen-reader testing and other browser engines were not verified. Offline navigation intents and Chromium keyboard results do not establish those outcomes. Contrast numbers for the two solid-color link surfaces are exact computed pair calculations; the automated ancestor-background calculation is not claimed to fully evaluate every gradient/decorative pixel.

Author Finding 0 and automatic minimum rectangles do not override these observed failures. Return this frozen V1.0 for targeted revision against **IN-G4-IR01–05** and review the new freeze plus affected three-width/full-page and adjacent-state regressions. Do not treat this report as user approval, Gate 4 closure, Gate 6 authorization or authorization to start another page.
