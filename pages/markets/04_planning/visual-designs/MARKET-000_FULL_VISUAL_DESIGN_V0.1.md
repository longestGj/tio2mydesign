# MARKET-000 Full Visual Design V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `MARKET-000` |
| Page | Markets |
| URL | `/markets/` |
| Gate | Gate 5 — Full Visual Design |
| Version | V0.1 |
| Date | 2026-08-30 |
| Status | `DRAFT_FOR_GATE_5_REVIEW` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Approved content baseline | `pages/markets/04_planning/MARKET-000_CONTENT_ARCHITECTURE_V0.1.md` — `APPROVED_GATE_2_BASELINE` |
| Approved wireframe baseline | `pages/markets/04_planning/wireframes/MARKET-000_WIREFRAME_SPEC_V0.1.md` — `APPROVED_GATE_3_BASELINE` |
| Approved visual baseline | `pages/markets/04_planning/visual-directions/MARKET-000_VISUAL_DIRECTION_V0.1.md` — `APPROVED_GATE_4_BASELINE` |
| Product relationship baseline | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` and approved V0.2.1 audits |
| Primary public state | `S0_CURRENT_ROUTE_SAFE` |
| Maximum conditional proof | `S6_FULL_EN_ACTION`; S3 Trade and S5 PT-BR remain independent |
| Review owner | Project control and quality review; user final approval |
| Authorization | User approved MARKET-000 Gate 4 on 2026-08-30 and authorized only MARKET-000 Gate 5 full-visual draft work |
| Gate 5 project-control conclusion | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 5 user approval date |  |
| Explicitly excluded | Gate 6/7, Market child pages, WordPress, Next.js, CMS, tests, development, deployment, publishing and `D:\16Wordpress_nextjs` |

This package visualizes the approved Industrial Editorial Market Navigator direction for Gate 5 review. It does not change the approved module order, Buyer Clean copy, route logic, PRODUCT relationship contract, localization hold, freshness gate, SEO/GEO boundary or RFQ condition. Gate 5 is not approved.

## 1. Artifact Manifest

### 1.1 Buyer Clean full-page assets

| Asset | Review role | Canvas / state | Status |
|---|---|---|---|
| `assets/MARKET-000_G5_DESKTOP_S0_ROUTE_SAFE_BUYER_CLEAN_V0.2.png` | Complete primary Desktop current-state page | 1440×4784; S0; zero external actions; PT-BR and RFQ absent | `DRAFT_FOR_GATE_5_REVIEW` |
| `assets/MARKET-000_G5_DESKTOP_S6_FULL_EN_BUYER_CLEAN_V0.2.png` | Complete Desktop maximum English-action page | 1440×5154; ten EN market actions; three support actions; RFQ ON; Trade and PT-BR remain independent | `DRAFT_FOR_GATE_5_REVIEW` |
| `assets/MARKET-000_G5_MOBILE_390_S0_ROUTE_SAFE_BUYER_CLEAN_V0.2.png` | Complete primary 390px current-state page | 780×14458 explicit 2× export; 390×7229 logical; EU collapsed; RFQ OFF | `DRAFT_FOR_GATE_5_REVIEW` |
| `assets/MARKET-000_G5_MOBILE_390_S6_FULL_EN_BUYER_CLEAN_V0.2.png` | Complete 390px maximum English-action page | 780×17564 explicit 2× export; 390×8782 logical; EU expanded; RFQ ON | `DRAFT_FOR_GATE_5_REVIEW` |

### 1.2 Separate review boards

| Asset | Review role | Public status | Status |
|---|---|---|---|
| `assets/MARKET-000_G5_RESPONSIVE_COMPONENT_STATES_V0.1.png` | 1024/768 reflow, EU disclosure, Mobile Menu, S1/S2/S3, S4 RFQ, focus, stress and closure proof | `NON_PUBLIC_REVIEW_APPENDIX` | `DRAFT_FOR_GATE_5_REVIEW` |
| `assets/MARKET-000_G5_INTERNAL_REVIEW_OVERLAY_V0.1.png` | Route, PT-BR, PRODUCT V0.2.1, freshness, RFQ and SEO/GEO/Schema QA | `NOT_BUYER_FACING` | `DRAFT_FOR_GATE_5_REVIEW` |

### 1.3 Deterministic visual source

`99_workspace/MARKET-000_gate5_visual_builder/build_market000_visuals.cjs` is a workspace-only deterministic render source. `validate_market000_visuals.cjs` is its non-production pixel and contract validator. Both exist only to reproduce and verify visual artifacts, are not part of the Gate 5 handoff package, and are not WordPress, Next.js, CMS or production implementation code.

The four superseded V0.1 Buyer Clean main-page rasters are preserved under `99_workspace/MARKET-000_gate5_superseded_v01/` with a `SUPERSEDED_` prefix. They are not current review assets and were not deleted.

One generative visual candidate was rejected before project ingestion because it invented market facts, policy language and Buyer Questions. It remains outside `pages/markets/` and is not listed, referenced or approved for review.

## 2. Desktop S0 Route-safe Buyer Clean

![MARKET-000 Desktop S0 Route-safe Buyer Clean](D:/23MySec/pages/markets/04_planning/visual-designs/assets/MARKET-000_G5_DESKTOP_S0_ROUTE_SAFE_BUYER_CLEAN_V0.2.png)

The primary Desktop view shows the current evidence state:

- Header order remains `Home | Markets | Products | Applications | Documents | Resources | About`; `Home` is visible text and Markets is the current item.
- Request a Quote is absent from Header, Hero, Q7, Final RFQ and Footer.
- Hero is copy-led and uses no image, map or placeholder column.
- Destination Selector uses the approved asymmetric hierarchy: European Union dominates the left field; United Kingdom, India and Brazil form the right stack.
- Germany, Italy, Spain, Poland, Netherlands and Belgium are plain text without arrows, dead links or disabled treatments.
- Procurement Paths retain complete responsibility copy and zero CTA slots.
- Trade Boundary contains no policy conclusion, number, date, source claim or action.
- All seven approved Buyer Questions and answers are visible editorial content.
- Footer follows Q7 without a Final RFQ gap.

## 3. Desktop S6 Full English Action

![MARKET-000 Desktop S6 Full English Action](D:/23MySec/pages/markets/04_planning/visual-designs/assets/MARKET-000_G5_DESKTOP_S6_FULL_EN_BUYER_CLEAN_V0.2.png)

S6 proves the maximum English action stack without changing content hierarchy:

- ten English market actions appear atomically: EU overview, six EU countries, UK, India and Brazil;
- Products, Applications and Documents actions follow their own responsibility copy;
- Header, Hero, Q7 addition, Final RFQ and Footer display the synchronized RFQ state; GEO-A09 follows the same condition outside the raster;
- Trade CTA remains absent because S3 is independent from S6;
- PT-BR remains absent because S5 is independent and still held;
- Title, H1, Canonical, Hub hreflang and visible market descriptions do not change between S0 and S6.

## 4. 390px S0 Route-safe Buyer Clean

![MARKET-000 390px S0 Route-safe Buyer Clean](D:/23MySec/pages/markets/04_planning/visual-designs/assets/MARKET-000_G5_MOBILE_390_S0_ROUTE_SAFE_BUYER_CLEAN_V0.2.png)

The 780px raster is an explicit 2× export of a 390px logical canvas:

- logical content width is 358px with 16px outer margins;
- EU countries have zero public height while the disclosure is collapsed;
- all sections use one narrative column with no horizontal carousel or clipped control;
- Buyer Questions render complete approved answers rather than placeholders or ellipses;
- unavailable CTA blocks contribute zero height;
- logical page height is 7229px after restoring 16px/25px Mobile body and answer typography plus 14px minimum labels. This content-driven Gate 5 measurement supersedes the former compressed visual-execution value; it does not change Gate 3 module order or copy;
- Footer closes directly after Q7 with no Final RFQ divider or ornamental blank band.

## 5. 390px S6 Full English Action

![MARKET-000 390px S6 Full English Action](D:/23MySec/pages/markets/04_planning/visual-designs/assets/MARKET-000_G5_MOBILE_390_S6_FULL_EN_BUYER_CLEAN_V0.2.png)

The S6 Mobile asset demonstrates:

- compact `Logo + RFQ + Menu` Header;
- Hero local action followed by the conditional RFQ action;
- expanded EU disclosure with six independent 44px-logical country rows;
- EU overview, UK, India, Brazil and three support actions stacked before any text shrinks;
- complete Q7 route-safe answer plus the approved RFQ sentence;
- complete Final RFQ copy, CTA and qualification boundary;
- synchronized Footer RFQ action;
- logical page height is 8782px after restoring the approved Mobile type sizes and line heights. The additional height is content-driven; no copy, state, or module was added to fit or inflate the canvas;
- no horizontal scroll and no PT-BR or Trade-current inference.

## 6. Responsive and Component State Board

![MARKET-000 Responsive and Component States](D:/23MySec/pages/markets/04_planning/visual-designs/assets/MARKET-000_G5_RESPONSIVE_COMPONENT_STATES_V0.1.png)

This non-public review board consolidates the remaining Gate 5 visual contract:

- 1024px uses an EU-led 5/3 composition; 768px moves to a single dominant EU region and Menu pattern;
- Mobile EU disclosure shows both closed and expanded structures;
- Mobile Menu keeps Home visible, Markets current and RFQ independently removable;
- S1 adds one market link without inheriting availability to siblings;
- S2 adds one support action without an orphan rail;
- S3 adds the Trade Update action without a policy summary;
- S4 displays the unique six-surface `RFQ_AVAILABLE` synchronization;
- focus uses a 2px structural outline with separation; hover/live is not color-only;
- 44px touch targets, 200% reflow, long-copy wrapping, no-image closure and missing-module closure are explicit.

## 7. Internal Review Overlay

![MARKET-000 Internal Review Overlay](D:/23MySec/pages/markets/04_planning/visual-designs/assets/MARKET-000_G5_INTERNAL_REVIEW_OVERLAY_V0.1.png)

This asset is never Buyer Clean. It records:

- 22 external units remain `NOT_VERIFIED_LIVE` and S0 has zero external actions;
- PT-BR remains `LOCALIZATION_HOLD / DO_NOT_RENDER`, with Hub hreflang `NOT_APPLICABLE`;
- Buyer Clean has zero model/process relation, zero country-to-grade relation, zero M-2377 output and zero M-996/M-2196 comparison cue;
- Trade requires official source, scope, date, freshness, content and live route;
- the six RFQ surfaces use one condition and no extra Footer condition;
- Schema remains limited to visible market-navigation relationships and never creates Product, Offer or `suitableFor` relations.

## 8. Visible Copy and CTA Lock

All four full-page Buyer Clean assets use the approved Gate 2 wording. No placeholder, dummy copy, neutral line block, shortened answer or ellipsis replaces public copy.

Allowed visible actions by state:

| Surface | S0 | S6 |
|---|---|---|
| Hero local anchor | `Choose a Market` | `Choose a Market` |
| Market actions | none | approved `Explore…` labels for ten EN targets |
| Support actions | none | `Explore Products`; `Explore Applications`; `Review Documents` |
| Trade | none | none unless independent S3 also passes |
| RFQ | none | `Request a Quote` across the synchronized visible surfaces |

Buyer Clean contains no `Buy`, `Order`, `Add to Cart`, `In Stock`, `Get Price`, `Coming Soon`, disabled action, route status or review label.

## 9. PRODUCT Relationship V0.2.1 Visual Audit

MARKET-000 is not a product recommender. The full-page assets render:

- zero grade names;
- zero process classifications;
- zero application-to-grade mapping;
- zero country-to-grade mapping;
- no M-2377 content;
- no M-996/M-2196 difference, ranking, choice reason or comparison cue;
- no visual interpretation of the 55 `NO_PUBLIC_MAPPING` rows as unsuitable or unavailable.

Products and Applications appear only as generic next-step destinations. No Product/Application relationship is added to MARKET-000 GEO or Schema.

## 10. Conditional Closure and State Matrix

| State | Gate 5 proof | Required closure |
|---|---|---|
| S0 current | Desktop and Mobile complete pages | all external actions, PT-BR and RFQ absent; no empty slots |
| S1 partial market | component board | only passing destination becomes a full action |
| S2 partial support | component board | each CTA follows its own explanation; siblings remain complete |
| S3 Trade current | component board | one qualified action; no policy summary |
| S4 RFQ ready | component board plus S6 pages | Header, Hero, Q7, GEO-A09, Final RFQ and Footer synchronize |
| S5 PT-BR | Internal Review only | zero current Buyer Clean pixels; no Hub hreflang change |
| S6 full EN | Desktop and Mobile complete pages | ten EN market actions, three support actions and RFQ; Trade/PT-BR remain independent |

## 11. SEO, GEO and Schema Visual Boundary

- `NO_PRIMARY_KEYWORD`, `APPROVED_NAVIGATION_HUB` and `NO_DIRECT_KEYWORD_TARGET` remain unchanged.
- H1 remains `Choose Your Destination Market` in every state.
- Buyer Questions remain ordinary visible content; no FAQPage/QAPage promise is introduced.
- `CollectionPage`, `BreadcrumbList` and destination `ItemList` may only mirror visible, approved and live market navigation.
- No current canvas states or implies local office, service coverage, warehouse, inventory, registration, compliance, logistics, duties or customs outcomes.
- MARKET-000 hreflang remains `NOT_APPLICABLE`; Brazil child-page language relations remain outside this page.

## 12. Accessibility and Responsive Review

- Desktop uses the approved 1200px content system and 8/4 EU hierarchy.
- 1024px and 768px reflow are represented separately from the Desktop full-page assets.
- 390px actions and disclosures meet the 44px logical target.
- focus, current and expanded states use structure or text in addition to color.
- navy and body copy maintain readable contrast; bright Teal is not used for small body text.
- H1, long country names, complete Q1–Q7 answers and wrapped CTA labels remain visible without clipping.
- no-image state has zero placeholder gap.
- reduced motion does not remove state meaning; no motion is required by the static package.
- no Buyer Clean asset uses horizontal scrolling, map panning, carousel behavior or off-canvas content.

## 13. Gate 5 Self-check

Project-control review round `MARKET-000-G5-PCR-01` passed the V0.2 targeted re-review. Gate 5 and G5-02/G5-03/G5-04 are now `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; this does not approve Gate 5, close any G5 item, authorize Gate 6/7, or change the Gate 4 baseline.

### Governance

- [x] Gate 4 is `APPROVED_GATE_4_BASELINE`.
- [x] Gate 5 is `DRAFT_FOR_GATE_5_REVIEW`, not approved.
- [x] Page lifecycle remains `DESIGN_IN_REVIEW`.
- [x] Gate 6/7, Market child pages and development are not authorized.
- [x] MKT-R002/R003/R004/R005 remain OPEN.

### Visual completeness

- [x] Complete 1440px S0 and S6 Buyer Clean pages are present.
- [x] Complete 390px-logical S0 and S6 Buyer Clean pages are present at 2×.
- [x] 1024/768, EU disclosure, Menu, S1–S4, focus, stress and closure states are represented.
- [x] S5 and governance states remain in separate non-public review surfaces.
- [x] Buyer Clean and Internal Review are visually and semantically separate.

### Content and relationship safety

- [x] Complete approved Buyer Clean copy is rendered as actual typography.
- [x] Mobile Body and Buyer Question answers use 16px with approximately 25px line height; Mobile kicker/path labels and all Desktop Buyer Clean navigation, labels and actions are at least 14px.
- [x] Every Mobile H1/H2/CTA line is measured against its real rendered pixel width; the 14px-logical right safe strip is clear in both 390px exports.
- [x] Desktop S6 EU country actions use the approved country name plus chevron only; no unapproved `Explore market` microcopy remains.
- [x] S0 contains no external route action, PT-BR or RFQ surface.
- [x] S6 does not imply Trade freshness or PT-BR approval.
- [x] Buyer Clean contains zero grade/process relation and zero country-specific product inference.
- [x] No generated claim, evidence-like image, map, flag, factory, port, warehouse, certificate or shipment visual appears.

Self-check is not Gate 5 approval.

### Validation record

| Check | Result | Date |
|---|---|---|
| Governance, approved baselines, Gate status, MKT-R002–005, 22 route rows and PT-BR hold | PASS | 2026-08-30 |
| Six PNG assets, exact dimensions, format, manifest and non-empty output | 6/6 PASS | 2026-08-30 |
| 390px S0/S6 content-driven logical height after approved type restoration | PASS — 7229px / 8782px | 2026-08-30 |
| Gate 4 type contract: Mobile Body/Q&A 16px/≈25px, Mobile labels ≥14px, Desktop Buyer Clean visible text ≥14px | PASS | 2026-08-30 |
| Mobile H1/H2/CTA rendered-width and 14px-logical right-safe-strip scan | `44 PASS / 0 FAIL` targeted validation | 2026-08-30 |
| Approved copy labels, Buyer Clean zero-model/process/PT-BR scan and V0.2.1 boundaries | PASS | 2026-08-30 |
| S0–S6, RFQ synchronization, Trade independence, Schema/hreflang and Market child-page boundary | PASS | 2026-08-30 |
| Markdown tables, conflict markers, trailing whitespace and placeholder scan | PASS | 2026-08-30 |
| Consolidated deterministic validation | targeted pixel/type validator `44 PASS / 0 FAIL`; governance/package validator `45 PASS / 0 FAIL` after project-control status synchronization | 2026-08-30 |
| Original-detail visual inspection | four V0.2 Buyer Clean main pages opened at original detail; no module-order, overlap, clipping, horizontal-overflow or state-separation failure observed | 2026-08-30 |

## 14. Open Items

| Review ID | Level | Issue | Gate 5 effect | Status |
|---|---|---|---|---|
| MKT-R002 | IMPORTANT | Market-specific product, application, document, logistics and supply facts remain unsupported | Facts remain absent from Buyer Clean | OPEN |
| MKT-R003 | IMPORTANT | Brazil PT-BR route, language and localization remain unapproved | S5 stays non-public and zero-render | OPEN |
| MKT-R004 | IMPORTANT | 22 external destinations remain unverified live | S0 remains the primary current-state visual | OPEN |
| MKT-R005 | IMPORTANT | Trade Update official-source and freshness review remains incomplete | Trade CTA remains absent from primary and S6 pages | OPEN |
| G5-01 | BLOCKING | Gate 5 visual package has not received project-control and user approval | Prevents Gate 6/7 and development handoff | OPEN |
| G5-02 | BLOCKING | V0.1 390px Destination Market H2 was clipped at the right edge | V0.2 uses measured natural three-line copy; all Mobile H1/H2/CTA lines and both right safe strips pass pixel validation | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| G5-03 | BLOCKING | V0.1 Buyer Clean main pages used 9–13px visible text below the approved Gate 4 contract | V0.2 restores Mobile Body/Q&A to 16px/≈25px, labels to ≥14px and all Desktop Buyer Clean visible text to ≥14px; module and page heights were remeasured | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| G5-04 | IMPORTANT | Desktop S6 added unapproved `Explore market` country microcopy | V0.2 removes the phrase; country name plus chevron is the complete EU country action | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

## 15. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial MARKET-000 Gate 5 package: Desktop S0/S6, 390px S0/S6, responsive/component board, separate Internal Review overlay and V0.2.1 relationship audit | `DRAFT_FOR_GATE_5_REVIEW`; submit for project-control review |
| V0.1 / validation record | 2026-08-30 | Six-asset visual inspection and 136-item governance, copy, state, route, localization, relationship, dimension and Markdown verification | `136 PASS / 0 FAIL`; Gate 5 remains unapproved |
| V0.2 assets / `MARKET-000-G5-PCR-01` revision | 2026-08-30 | Re-exported four Buyer Clean main pages after measured Mobile title wrapping, approved type restoration and removal of Desktop S6 `Explore market`; preserved V0.1 main pages as `SUPERSEDED` in workspace | G5-02/G5-03/G5-04=`RESOLVED_IN_DRAFT_PENDING_REVIEW`; Gate 5 remains `DRAFT_FOR_GATE_5_REVIEW` |
| V0.2 / project-control targeted re-review | 2026-08-30 | Project control independently rechecked Mobile right safe strips, approved typography, four original-detail main pages, Desktop S6 country actions, six-asset Manifest and all route/localization/relationship gates | Gate 5 and G5-02/G5-03/G5-04=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; user approval date blank; G5-01 remains OPEN |

Gate 5 stops here. Project control and the user must approve the visual package before Gate 6/7 or any development handoff. This project does not implement WordPress, Next.js, CMS, code, tests, deployment or publishing.
