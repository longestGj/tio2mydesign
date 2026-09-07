# PRODUCT-000 Full Visual Design V0.2 — Relationship Impact Revision

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page name | Titanium Dioxide Products |
| URL | `/products/` |
| Gate | Gate 5 — Full Visual Design |
| Version | V0.2 |
| Date | 2026-08-30 |
| Status | `APPROVED_GATE_5_BASELINE` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Approved structure baseline | `pages/products/04_planning/wireframes/PRODUCT-000_WIREFRAME_SPEC_V0.1.md` — `APPROVED_GATE_3_BASELINE` |
| Approved visual baseline | `pages/products/04_planning/visual-directions/PRODUCT-000_VISUAL_DIRECTION_V0.1.md` — `APPROVED_GATE_4_BASELINE` |
| Approved content baseline | `PRODUCT-000_CONTENT_ARCHITECTURE_V0.1.md` — approved Gate 2 base; `PRODUCT-000_CONTENT_ARCHITECTURE_V0.2.1.md` — relationship-impact state contract |
| Approved relationship source | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` — `APPROVED_RELATION_BASELINE / PROJECT_CONTROL_REVIEW_PASS` |
| Review owner | Project control and quality review; user final approval |
| Relationship-impact project-control review | `PRODUCT-G5-REL-021 = PASS`, 2026-08-30 |
| Gate 5 | `APPROVED` |
| Visual endpoint | `APPROVED_GATE_5_BASELINE` (`VISUAL_APPROVED / GATE_5_APPROVED`) |
| Gate 5 user approval date | 2026-08-30 |
| Current authorization | Approved Gate 5 visual baseline only; hard stop at Gate 5 |
| Explicitly excluded | Gate 6/7 approval or handoff, Process/Grade child-page work, code, CMS, testing, development, deployment and publishing |

`GATE 5 APPROVED VISUAL BASELINE / HARD STOP AT GATE 5 / NOT FOR DEVELOPMENT`

This package preserves the complete Buyer Clean page visuals and adds Desktop and 390px relationship-state proof for the approved V0.2.1 matrix. It does not change the approved information architecture, module set, copy deck, route behavior or visual direction.

## 1. Artifact Manifest

### 1.1 Buyer Clean review assets

| Asset | Review role | Reference viewport / state | Export size | Status |
|---|---|---|---:|---|
| `assets/PRODUCT-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.4.png` | Complete primary desktop visual with Gate 2 body copy and approved Gate 3/4 desktop composition | 1440px actual canvas; Full-route; Process 2; Support 3; RFQ ON | 1440×5368 | `APPROVED_GATE_5_BASELINE` |
| `assets/PRODUCT-000_G5_DESKTOP_ROUTE_SAFE_REVERSE_V0.4.png` | Complete desktop reverse-state visual with approved desktop composition | 1440px actual canvas; strict route-safe; Process 0; Support 0; RFQ OFF | 1440×4031 | `APPROVED_GATE_5_BASELINE` |
| `assets/PRODUCT-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.5.png` | Complete primary mobile visual with seven independent Selector controls | 390px reference at explicit 2× export; strict route-safe; Process 0; Support 0; RFQ OFF | 780×7938 | `APPROVED_GATE_5_BASELINE` |
| `assets/PRODUCT-000_G5_MOBILE_FULL_ROUTE_REVERSE_V0.5.png` | Complete mobile maximum stack with independent Selector controls and flow-safe Final RFQ | 390px reference at explicit 2× export; Full-route; Process 2; Support 3; RFQ ON | 780×11387 | `APPROVED_GATE_5_BASELINE` |
| `assets/PRODUCT-000_G5_DESKTOP_RELATIONSHIP_STATES_V0.6.png` | V0.2.1 Desktop Buyer Clean relationship proof | Six Application result sets; neutral no-result; 8/4 Process sets plus CR-901 Vapor-phase oxidation; M-2377 neutral directory row; M-996/M-2196 equal treatment | 1536×1024 board | `APPROVED_GATE_5_BASELINE` |
| `assets/PRODUCT-000_G5_MOBILE_390_RELATIONSHIP_STATES_V0.6.png` | V0.2.1 390px Buyer Clean relationship proof | Two 390px-equivalent columns; six selected states; no-result; Process sets; freeze-safe rows | 875×1798 board | `APPROVED_GATE_5_BASELINE`; review board, while the two 780px complete pages remain the touch/overflow measurement assets |
| `assets/PRODUCT-000_G5_INTERACTION_ACCESSIBILITY_STATES_V0.6.png` | Replacement interaction and accessibility proof without obsolete relationship data | RFQ tiers, Mobile Menu current state, focus, selected, expanded/collapsed, no-image and conditional closure | 1536×1024 board | `APPROVED_GATE_5_BASELINE` |
| `assets/PRODUCT-000_G5_MOBILE_MENU_CURRENT_STATE_V0.4.png` | G5-08 targeted Mobile Menu Open proof | RFQ ON/OFF; Products uses bold text, structural marker and explicit `CURRENT` label | 1536×1024 board | `APPROVED_GATE_5_BASELINE` |

The 1440px images are actual 1440px-wide canvases. The 780px images are explicit 2× exports of the 390px mobile reference, so 88px rendered controls correspond to the 44px logical touch target. The V0.6 relationship-state and current-state boards are annotated review boards rather than viewport measurement artifacts.

### 1.2 Separate non-public review appendix

| Asset | Review role | Public status | Status |
|---|---|---|---|
| `assets/PRODUCT-000_G5_INTERNAL_RELATION_QA_V0.6.png` | V0.2.1 counts, Process sets, M-2377 hard gate and M-996/M-2196 comparison QA | `NOT_BUYER_FACING`; never part of the public page | `APPROVED_GATE_5_BASELINE` |

### 1.3 Invalid assets

Earlier generated desktop/mobile candidates that contained or risked unapproved, incomplete or imprecise visible copy were removed from the formal artifact directory and retained only under:

`D:\23MySec\99_workspace\PRODUCT-000_gate5_invalid_visuals\`

They are labeled `INVALID_NOT_FOR_REVIEW` or `SUPERSEDED_`, are not listed in this manifest and must not be used for approval, handoff or implementation reference. This includes the replaced V0.2/V0.3 primaries, the superseded Mobile V0.4 views, the superseded V0.1 reverse board, the obsolete 2-render component board and the pre-V0.2.1 Internal Review overlay.

## 2. Visual Outcome

The approved **Industrial Editorial Selection** direction is implemented as a premium B2B selection publication:

- Selector is the strongest functional surface without dashboard styling.
- All Grades is a compact editorial directory, not fourteen promotional cards.
- Process and Support use neutral atomic route cards.
- Evaluation Guide reads as buyer guidance, not progress or completion tracking.
- Buyer Questions use accessible accordion rows and complete approved questions.
- Final RFQ is a terminal conversion close, not an embedded transaction or checkout.
- Hero uses the abstract 14-tile collection motif; no evidence-bearing image is required.

## 3. Approved Visual Tokens Applied

| Role | Token | Applied use |
|---|---|---|
| Primary Navy | `#062B5B` | Headings, navigation, rules, directory labels |
| Deep Navy | `#031B3A` | Footer and Final RFQ band |
| Accessible Teal | `#007F77` | Solid primary actions, selected marker, focus-supporting accent |
| Bright Teal | `#00A99D` | Decorative lines/dots only; no small text or white-text button |
| Accent Teal | `#14B8A6` | Limited graphic/hover accent |
| White | `#FFFFFF` | Main canvas and functional surfaces |
| Soft Background | `#F5F8FB` | Functional/editorial section separation |
| Border Gray | `#D9E2EC` | Cards, rows and accordion rules |
| Body | `#334155` | Buyer copy |
| Secondary | `#526176` | Supporting copy |

Typography follows the approved Inter hierarchy. The imagery treatment remains geometric and non-evidentiary.

## 4. Desktop Buyer Clean — Full-route

Primary review asset:

![PRODUCT-000 Desktop Full-route Buyer Clean](D:/23MySec/pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.4.png)

The composition preserves the complete approved order:

1. Header and breadcrumb;
2. Hero with 14-grade motif;
3. application-first Selector;
4. two Process routes;
5. All 14 Grades in 6/5/2/1 directory groups;
6. five-step Evaluation Guide;
7. three Support Paths;
8. five Buyer Questions;
9. Final RFQ;
10. Footer.

Hero hierarchy is fixed: `Find the Right Grade` is the Teal solid primary action; contextual `Request a Quote` is White/Navy outline and visually subordinate. Header and Final RFQ use the approved Teal solid global/terminal tier.

## 5. Mobile Buyer Clean — 390px Strict Route-safe

Primary review asset:

![PRODUCT-000 Mobile Route-safe Buyer Clean](D:/23MySec/pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.5.png)

The three phone frames are continuous key views of one 390px page. They prove:

- one-column Hero with only `Find the Right Grade`;
- exact application options and one selected-state example; the complete six-family relationship sets are proven by the V0.6 relationship board;
- 14-grade directory with six-row expanded Coatings group;
- all five evaluation steps;
- all five approved Buyer Questions;
- Process, Support and every RFQ surface absent;
- Footer follows Buyer Questions without an empty terminal band;
- 16px outer margin, 44px minimum touch intent and no horizontal carousel.

## 6. Reverse Route / Viewport Proof

The reverse states are the complete full-page assets already listed in the manifest:

- `PRODUCT-000_G5_DESKTOP_ROUTE_SAFE_REVERSE_V0.4.png`;
- `PRODUCT-000_G5_MOBILE_FULL_ROUTE_REVERSE_V0.5.png`.

### 6.1 Desktop strict route-safe

- Header RFQ is absent.
- Hero has one action and no empty second-button slot.
- Selector closes directly into All Grades with one normal gap.
- Process public height is 0px.
- Support public height is 0px.
- Final RFQ public height is 0px.
- Footer closes after Buyer Questions without a desktop-height empty band.

### 6.2 Mobile Full-route maximum stack

- Hero primary and contextual actions stack without hierarchy reversal.
- Not Sure preserves `View All Grades` plus conditional contextual `Request a Quote`.
- two Process cards stack completely;
- three Support cards stack completely;
- Buyer Questions remain readable;
- Final RFQ and Footer close the page without large post-button whitespace.

## 7. Buyer Clean Relationship and Interaction States

![PRODUCT-000 Desktop Relationship States](D:/23MySec/pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_DESKTOP_RELATIONSHIP_STATES_V0.6.png)

![PRODUCT-000 390px Relationship States](D:/23MySec/pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_MOBILE_390_RELATIONSHIP_STATES_V0.6.png)

![PRODUCT-000 Interaction and Accessibility States](D:/23MySec/pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_INTERACTION_ACCESSIBILITY_STATES_V0.6.png)

### 7.1 Selector

The Desktop and 390px boards cover all six current Buyer Clean result families:

- Coatings → M-350, M-510, M-896, M-996, M-2196, M-895, M-52;
- Plastics → M-350, M-510, M-200, M-108, M-210, M-340, M-886;
- Masterbatch → M-510, M-200, M-108, M-210, M-340, M-886;
- Printing Inks → M-350, M-510, M-52;
- Paper → M-350;
- Specialty Materials → CR-901.

They also retain the no-listed-grade fallback. All 25 rows use equal `Grade to Review` / `View Grade` treatment without ranking. The 55 `NO_PUBLIC_MAPPING` rows emit nothing and are not described as unsuitable.

### 7.2 Process

- two complete routes with the approved 8 Chloride and 4 Sulfate classifications;
- one restrained complete route;
- zero routes with no public shell;
- CR-901 as neutral `Vapor-phase oxidation`, outside Chloride/Sulfate aggregation;
- M-2377 absent from Process.

### 7.3 All Grades / freeze QA

- 6/5/2/1 group structure;
- M-996 and M-2196 may both show Coatings and Sulfate as identical base relations; no comparison, ranking or selection reason appears;
- M-2377 is in Additional Grades and receives only a neutral name/link row;
- no application, process, recommendation, comparison, badge or qualifier appears in the directory.

### 7.4 RFQ and Mobile Menu

- Hero RFQ ON/OFF;
- Mobile Menu Open with RFQ ON/OFF;
- Header/Final RFQ global tier remains Teal solid;
- Hero/Selector/BQ contextual tier remains outline or Navy text link;
- RFQ OFF removes the action and its reserved space.

### 7.5 Accessibility and asset states

- focus differs from selected;
- expanded differs from collapsed without color alone;
- no-image state retains the 14-tile collection motif;
- no broken-image frame or proof-like factory photograph appears.

## 8. Internal Review Appendix

![PRODUCT-000 Internal Relation QA](D:/23MySec/pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_INTERNAL_RELATION_QA_V0.6.png)

This appendix is intentionally non-public. It annotates:

- Application counts `25 VERIFIED / 4 CONFLICT HOLD / 55 NO PUBLIC MAPPING`;
- Process counts `8 CHLORIDE / 4 SULFATE / CR-901 VAPOR-PHASE OXIDATION`;
- six Application result families;
- M-2377 Selector/Process output 0 and `R-M2377-TDS=OPEN_HARD_GATE`;
- M-996/M-2196 base relations on with comparison off;
- 390px no-horizontal-scroll control.

No Gate, route, Evidence ID, approval state, `pending`, `restricted` or internal review color may appear in Buyer Clean.

## 9. Visible Copy and CTA Lock

### 9.1 Approved CTA allowlist

Buyer Clean actions may use only the applicable approved labels:

| Context | Exact approved action |
|---|---|
| Hero | `Find the Right Grade` |
| Grade result | `View M-350` |
| Grade directory implementation | `View Grade` or the approved grade-name link pattern |
| Empty / Not Sure | `View All Grades` |
| Chloride Process | `Explore Chloride Grades` |
| Sulfate Process | `Explore Sulfate Grades` |
| Applications route | `Explore Applications` |
| Documents route | `Explore Documents` |
| Markets route | `Explore Markets` |
| Conditional RFQ | `Request a Quote` |

No alternative transaction, order or ecommerce action is permitted.

### 9.2 Prohibited ecommerce visible terms

The following Buyer Clean CTA/standalone-action terms must produce zero visual hits:

- standalone `Buy`;
- `Buy Now`;
- `Purchase` CTA;
- `Add to Cart`;
- `Checkout`;
- `Shop` / `Shop Now`;
- `Cart`;
- `Order Now`.

`Buyer Questions` is the approved module name and is not an ecommerce action. It must always be fully spelled; truncating or misdrawing it as `Buy` is a visual QA failure.

### 9.3 Buyer Questions exact visible labels

1. `How do I choose a titanium dioxide pigment grade?`
2. `Which grades are listed in this product center?`
3. `What is the difference between application and process selection?`
4. `What if no grade is shown for my application?`
5. `Does a listed grade guarantee suitability?`

The Desktop Full-route and 390px Route-safe primary assets display all five exact labels. Their baseline accordion state renders the first approved answer as actual readable typography and keeps the other four exact questions collapsed, matching Gate 3/4. No current V0.4/V0.5 full-page asset uses neutral line blocks, lorem, `full body`, `full answer`, ellipses or other stand-ins for visible Buyer Clean copy.

## 10. Grade and Freeze Lock

The Desktop primary asset visibly lists these 14 exact models once in the directory:

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

- M-2377 receives no visible application, process, recommendation, difference, badge, qualifier or internal status.
- M-996 and M-2196 receive no visible comparison or difference.
- Selector relationship proof covers exactly 25 neutral public mappings across six Application families; the 55 `NO_PUBLIC_MAPPING` rows remain absent and are never described as unsuitable.

## 11. Conditional Closure and Empty-space Check

| State | Required visual behavior | Gate 5 proof |
|---|---|---|
| Process 2 | Two complete equal cards | Desktop Full-route; component board |
| Process 1 | One restrained complete card; no empty partner | Component board |
| Process 0 | Heading, cards, divider and module padding absent | Desktop V0.4 and Mobile V0.5 strict route-safe; Internal Review appendix |
| Support 3/2/1 | Only complete live cards; grid closes | Full-route and component contract |
| Support 0 | Entire module absent | Desktop V0.4 and Mobile V0.5 strict route-safe |
| RFQ ON | Approved surfaces only; two-tier styles; compact Mobile Header RFQ restored | Desktop Full-route V0.4; Mobile Full-route V0.5; Mobile Menu current-state board |
| RFQ OFF | Header/Hero/Selector/BQ/Final/Footer RFQ surfaces removed together | Desktop V0.4 and Mobile V0.5 route-safe; Mobile Menu current-state board |
| Missing conditional module | One normal adjacent-section gap | Desktop V0.4 and Mobile V0.5 route-safe; Internal Review appendix |
| 390px CTA end | Final RFQ CTA has 56px rendered bottom content space = 28px logical at 2×; overall touch target remains 44px logical and no decorative blank band follows | 780px explicit 2× Mobile V0.5 canvases |

The review images show no horizontal carousel and no deliberate decorative blank band after conditional removal.

## 12. Raster Text and Copy-control Policy

These visual drafts are raster mockups. The current V0.4/V0.5 full-page assets use deterministic typography rendering from the approved Gate 2 copy deck; the following controls are mandatory:

1. Only assets in the formal manifest are reviewable.
2. Any candidate with invented CTA, garbled critical text, standalone `Buy`, ecommerce action, incorrect grade, incorrect group or unsupported claim is `INVALID_NOT_FOR_REVIEW`.
3. Every visible key UI label and long Buyer Clean paragraph in the current full-page assets is rendered as actual readable text and compared with the Gate 2 copy deck.
4. Neutral line blocks may appear only in the separate component-state or Internal Review appendix where they do not replace Buyer Clean page copy; they are forbidden in the four current V0.4/V0.5 full-page assets.
5. The Gate 2 content architecture remains the sole exact body-copy source.
6. No raster text may override the approved content, route or evidence contract.

## 13. Gate 5 Self-check

### A. Governance

- [x] Gate 4 is `APPROVED_GATE_4_BASELINE`.
- [x] G4-01 and G4-02 are closed.
- [x] Page lifecycle remains `DESIGN_IN_REVIEW`.
- [x] Gate 5 is a draft for review; Gate 6/7 are not authorized.
- [x] R-002 is satisfied by the approved V0.2.1 relationship baseline; R-003 and R-004 remain controlled.
- [x] `R-M2377-TDS` remains `OPEN_HARD_GATE` and blocks only M-2377 relations.
- [x] No Process or Grade child-page work was started.

### B. Buyer Clean completeness

- [x] Desktop Full-route complete visual is present.
- [x] 390px Route-safe complete visual is present.
- [x] Actual 1440px strict route-safe and explicit 390px@2× Full-route reverse states are present.
- [x] `Home > Products` is visible after Header and before Hero in all four current V0.4/V0.5 full-page states.
- [x] Desktop Hero is 7/5 with horizontal actions; Selector is a left-options/right-result working surface.
- [x] Desktop Process uses two equal cards; All Grades uses a 2×2 editorial directory; Evaluation uses 3+2; Support uses three equal cards.
- [x] Desktop Buyer Questions baseline is one expanded answer plus four collapsed exact questions.
- [x] Products current state uses bold text plus `CURRENT` and a structural underline/marker; Mobile Menu Open has the same non-color-only state.
- [x] Both 390px@2× V0.5 pages render Coatings, Plastics, Masterbatch, Printing Inks, Paper, Specialty Materials and Not Sure as seven independent controls.
- [x] Every Mobile Selector control is 88px rendered height = 44px logical; the first six use a two-column grid and Not Sure is full-width.
- [x] Full-route Final RFQ measures heading, body and qualification note as separate blocks; CTA before/after spacing is 56px rendered = 28px logical and no text box overlaps or crops.
- [x] Selector, Process, RFQ, All Grades, Mobile Menu, focus, selected, expanded and no-image states are present.
- [x] Internal Review is a separate appendix and is not mixed into Buyer Clean.
- [x] Desktop and 390px relationship boards show all six Application result families and exactly 25 neutral mappings.
- [x] Process relationship proof shows 8 Chloride, 4 Sulfate and CR-901 Vapor-phase oxidation; M-2377 is absent.

### C. Copy and ecommerce rejection

- [x] Standalone `Buy` visible action = 0.
- [x] `Buy Now` = 0.
- [x] `Purchase` CTA = 0.
- [x] `Add to Cart` = 0.
- [x] `Checkout` = 0.
- [x] `Shop` / `Cart` / `Order Now` actions = 0.
- [x] `Buyer Questions` is fully spelled in both primary Buyer Clean assets.
- [x] All five Buyer Questions match the Gate 2 copy deck.
- [x] Hero, Selector, Process, All Grades, Evaluation, Support, the visible expanded Buyer Question and Final RFQ use actual Gate 2 body copy; primary full-page assets contain no gray-line or shorthand copy stand-ins.
- [x] Visible CTAs use only the approved allowlist.
- [x] No AI-generated product, performance, manufacturing, origin, inventory, document, shipment, certification, availability or delivery claim remains in Buyer Clean.

### D. Routes and freezes

- [x] Process 2/1/0 and Support 3/2/1/0 follow atomic rendering.
- [x] RFQ ON/OFF follows synchronized removal and the approved two-tier visual contract.
- [x] Hero RFQ never equals or exceeds `Find the Right Grade`.
- [x] All 14 approved Grade names are present in the Desktop directory.
- [x] M-2377 and M-996/M-2196 freeze rules are preserved.
- [x] All 55 `NO_PUBLIC_MAPPING` relationships remain absent and are not rendered as negative suitability claims.
- [x] M-996/M-2196 Coatings/Sulfate base relations may render with equal treatment; comparison and differentiation remain absent.

### E. Responsive, accessibility and whitespace

- [x] Actual 1440px hierarchy and 780px explicit 2× export of the 390px hierarchy are separately reviewed.
- [x] 390px page has no intended horizontal overflow.
- [x] Focus, selected and expanded states do not depend on color alone.
- [x] Conditional module removal leaves no empty shell or large blank band.
- [x] Mobile CTA bottom space remains within the 24–32px structural target.
- [x] No-image state remains balanced without evidence-bearing photography.

### F. Verification record

| Check | Result | Date |
|---|---|---|
| G5-09/10 targeted Selector-control, touch-target, Final RFQ flow, dimension, route, copy, freeze, closure and Markdown checks | `54 PASS / 0 FAIL` | 2026-08-29 |
| Two newly rendered Mobile V0.5 assets opened at original detail; five unchanged assets retain the passed V0.4 baseline | `2 PASS / 0 FAIL` | 2026-08-29 |
| Standalone `Buy`, `Buy Now`, `Purchase` CTA, `Add to Cart`, `Checkout` and other ecommerce action visual hits | `0` | 2026-08-29 |
| Desktop and 390px primary `Buyer Questions` heading | Exact and fully spelled | 2026-08-29 |
| Five Buyer Questions in Desktop and 390px primary assets | Exact Gate 2 labels | 2026-08-29 |
| Buyer Clean/Internal Review separation | PASS; review overlay is a separate non-public asset | 2026-08-29 |
| Conditional-module closure / large-empty-band inspection | PASS for Desktop route-safe V0.4 and Mobile route-safe/full-route V0.5 | 2026-08-29 |
| V0.2.1 matrix, dependency/content/Brief propagation, manifest existence, formal-asset replacement, dimensions and Markdown integrity | `28 PASS / 0 FAIL` | 2026-08-30 |
| Original-detail relationship-board review | `4 PASS / 0 FAIL`; corrected the interaction board's expanded/collapsed Coatings count from 6 to the V0.2.1 baseline value of 7 before final verification | 2026-08-30 |
| Four new V0.6 boards opened at original detail | `4 PASS / 0 FAIL`; exact six Application sets, 8/4/1 Process, no-result, M-2377 neutral/hidden behavior and equal M-996/M-2196 base relations confirmed | 2026-08-30 |
| V0.6 Buyer Clean standalone ecommerce actions | `0`; only approved `View Grade`, `View All Grades`, `Explore…` and conditional `Request a Quote` actions appear | 2026-08-30 |
| V0.6 Internal Relation QA separation | PASS; counts, hard gate and comparison hold appear only in the non-public appendix | 2026-08-30 |

## 14. Open Gate Items

| Review ID | Level | Issue | Gate 5 effect | Status |
|---|---|---|---|---|
| R-002 | IMPORTANT | Historical base-mapping evidence gap | Superseded by the approved V0.2.1 25-relation baseline; neutral mapping only | `SATISFIED_BY_APPROVED_RELATION_BASELINE` |
| R-003 | IMPORTANT | Every route-dependent module/action remains conditional | Unverified routes and dependent promises must not render | OPEN |
| R-004 | IMPORTANT | Frozen technical content remains separated from approved base relations | `M996_VS_M2196_DIFFERENTIATION_FROZEN` remains OPEN; approved Coatings/Sulfate base relations stay visible without differences, ranking or selection reasons | OPEN |
| R-M2377-TDS | BLOCKING FOR M-2377 ONLY | Latest approved M-2377 TDS and dedicated technical review are unavailable | M-2377 Selector/Process/recommendation relations remain `DO_NOT_RENDER`; other 13 grades and 25 mappings are not blocked | `OPEN_HARD_GATE` |
| G5-01 | BLOCKING | Gate 5 visual package required project-control and user approval | User approved PRODUCT-000 Gate 5 on 2026-08-30; this does not authorize Gate 6/7 or development | CLOSED |
| G5-02 | IMPORTANT | A prior generated visual displayed or risked an erroneous standalone `Buy`/ecommerce-style action or malformed `Buyer Questions` | V0.3 keeps the approved CTA allowlist and exact Buyer Questions copy | CLOSED |
| G5-03 | BLOCKING | V0.2 primaries used neutral line blocks instead of complete approved Buyer Clean body copy | V0.3/V0.4 render approved visible copy as actual readable typography | CLOSED |
| G5-04 | BLOCKING | V0.2 exports did not provide an actual 1440px Desktop or independently measurable 390px canvas | V0.4 provides actual 1440px Desktop and explicit 780px 2× Mobile continuous canvases | CLOSED |
| G5-05 | IMPORTANT | 390px Full-route reverse state omitted the compact Header RFQ surface and used review shorthand | V0.4 retains `Logo + Menu + RFQ` and exact public headings | CLOSED |
| G5-06 | BLOCKING | All four V0.3 full-page assets omitted the required Breadcrumb | V0.4/V0.5 retain visible `Home > Products` in Header → Breadcrumb → Hero order in all four states | CLOSED |
| G5-07 | BLOCKING | V0.3 Desktop regressed to a mobile-style single-column composition | Desktop V0.4 retains 7/5 Hero, left/right Selector, paired Process, 2×2 directory, Evaluation 3+2, Support three-card row and BQ 1+4 baseline | CLOSED |
| G5-08 | IMPORTANT | Desktop Header lacked Products current state; Mobile Menu Open did not expose it | V0.4 uses bold text, explicit `CURRENT` and structural marker/underline without changing the Header navigation contract | CLOSED |
| G5-09 | BLOCKING | Mobile V0.4 compressed seven Selector options into inline text with no provable independent touch targets | Both Mobile V0.5 pages use six independent two-column chips plus full-width Not Sure; each is 88px rendered = 44px logical | CLOSED |
| G5-10 | BLOCKING | Mobile Full-route V0.4 Final RFQ body and qualification note overlapped | Mobile Full-route V0.5 uses measured independent blocks, complete Gate 2 text, a 92px rendered CTA and 56px rendered = 28px logical CTA before/after spacing | CLOSED |
| G5-11 | IMPORTANT | Gate 5 visual package previously showed only the historical M-350 Selector examples | V0.6 adds Desktop and 390px six-family relationship boards, exact 25 mappings, 13 Process classifications, M-2377 hard-gate behavior and independent M-996/M-2196 comparison hold | CLOSED |

## 15. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-29 | Initial complete Gate 5 Buyer Clean visual package, reverse viewport/state proof, component state board and separate Internal Review appendix | Draft for Gate 5 review |
| V0.1 copy-control revision | 2026-08-29 | Invalidated imprecise generated candidates; produced Desktop/Mobile V0.2 primary assets; restored exact Gate 2 key labels; added standalone Buy/ecommerce zero-hit and Buyer Questions checks | Pending project-control review; Gate 5 not approved |
| V0.1 verification record | 2026-08-29 | Ran 49-item governance/contract validation and opened all five formal assets for original-detail visual review; 49 PASS / 0 FAIL and 5 PASS / 0 FAIL | Submit for project-control Gate 5 review; Gate 5 not approved |
| V0.1 / V0.3 targeted visual revision | 2026-08-29 | Replaced V0.2 primaries and V0.1 reverse board with actual 1440px Desktop and explicit 390px@2× continuous V0.3 canvases; restored all Gate 2 body copy as typography; added strict Desktop route-safe proof and compact Mobile Full-route Header RFQ | Submitted for G5-03/G5-04/G5-05 project-control re-review; Gate 5 not approved |
| V0.1 / V0.3 targeted verification | 2026-08-29 | Re-ran dimension, manifest, Gate 2 copy, route/RFQ, grade/freeze, ecommerce-action, placeholder-policy and Markdown checks; opened all six formal assets at original detail | 54 PASS / 0 FAIL; 6 visual PASS / 0 FAIL; submit for project-control re-review |
| V0.1 / V0.4 baseline-restoration revision | 2026-08-29 | Added Breadcrumb to all four full-page assets; restored approved 1440px desktop composition; restored Products current state in Desktop Header and Mobile Menu Open; retained Gate 2 copy and route/freeze contracts | G5-03/G5-04/G5-05 project-control review PASS; G5-06/G5-07/G5-08 open for re-review; Gate 5 not approved |
| V0.1 / V0.4 targeted verification | 2026-08-29 | Verified seven formal asset dimensions; Breadcrumb 4/4 and order; desktop 7/5, horizontal CTA, left/right Selector, Process pair, directory 2×2, Evaluation 3+2, Support three-card row and BQ 1+4; Products current state; route/freeze/copy/ecommerce/Markdown controls; original-detail visual inspection | 63 PASS / 0 FAIL; 7 visual PASS / 0 FAIL; submit for project-control re-review |
| V0.1 / Mobile V0.5 minimal revision | 2026-08-29 | Replaced only the two Mobile V0.4 full-page assets; restored seven independent 44px-logical Selector controls and converted Final RFQ text to measured independent content blocks; Desktop V0.4 and approved state boards unchanged | G5-06/G5-07/G5-08 project-control review PASS pending user approval; G5-09/G5-10 open for re-review; Gate 5 not approved |
| V0.1 / Mobile V0.5 targeted verification | 2026-08-29 | Verified seven formal asset dimensions, seven Selector labels/controls, 88px rendered touch height, two-column/full-width boundaries, Final RFQ measured blocks, 56px rendered CTA before/after spacing, route-safe absence, freeze/ecommerce/Markdown controls; opened both new Mobile assets at original detail | 54 PASS / 0 FAIL; 2 visual PASS / 0 FAIL; submit for project-control re-review |
| V0.1 / Mobile V0.5 project-control re-review | 2026-08-29 | Project control independently verified both 780px Mobile assets, G5-09 seven independent controls, G5-10 Final RFQ flow, route-safe absence, unchanged Desktop/Breadcrumb/current-state/grade/freeze contracts and the seven-asset manifest | G5-09/G5-10 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; Gate 5 remains `DRAFT_FOR_GATE_5_REVIEW`; approval date blank |
| V0.2 / Relationship impact revision | 2026-08-30 | Preserved four complete-page baselines; replaced obsolete 2-render component/QA boards; added Desktop and 390px six-family Buyer Clean relationship proofs, independent interaction/accessibility proof and V0.2.1 Internal Relation QA; corrected the interaction proof to show Coatings Grades (7) in both expanded and collapsed states | `DRAFT_FOR_GATE_5_REVIEW`; submit G5-11 for project-control review |
| V0.2 / Relationship impact project-control review | 2026-08-30 | Project control independently verified the 84-row V0.2.1 relationship source, six Application result sets, 8/4/1 Process classifications, M-2377 zero public relationship output, M-996/M-2196 comparison hold, four V0.6 boards and the nine-asset manifest | `PRODUCT-G5-REL-021 = PASS`; `22 PASS / 0 FAIL`; G5-11 `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; Gate 5 remains draft; user approval date blank |
| V0.2 / Gate 5 user approval | 2026-08-30 | User explicitly approved `PRODUCT-000 Gate 5`; all nine formal visual assets and V0.2/V0.2.1 specifications become the approved Gate 5 baseline; G5-01 through G5-11 closed | `APPROVED_GATE_5_BASELINE`; hard stop at Gate 5; no Gate 6/7 or development authorization |

Gate 5 is approved and work stops here. This approval does not authorize Gate 6/7, development handoff, Process/Grade child-page work or any WordPress, Next.js, CMS, code, tests, deployment or publishing activity.
