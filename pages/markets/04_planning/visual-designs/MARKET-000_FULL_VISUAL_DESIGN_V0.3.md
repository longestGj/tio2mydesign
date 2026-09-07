# MARKET-000 Full Visual Design V0.3 — Fixed Global RFQ Chrome

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `MARKET-000` |
| Page | Markets |
| URL | `/markets/` |
| Date | 2026-08-30 |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Document status | `APPROVED_FIXED_RFQ_VISUAL_BASELINE` |
| Review ID | `GHF-FIXED-RFQ-MARKET-01` |
| Review status | `APPROVED / CLOSED` |
| User visual approval | Granted on 2026-08-30 as part of the unified Home and 03–07 fixed-RFQ visual package approval |
| Body approval position | Gate 5 V0.2/V0.3 body remains `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; this addendum does not reopen or approve it |
| Change scope | Global Header, Mobile Header, Mobile Menu, Footer and resulting canvas boundary only |
| Protected scope | S0–S6 body pixels, module order, Buyer Clean copy, SEO/GEO, route, localization, freshness, evidence and PRODUCT V0.3 relationship boundaries |
| Development boundary | No Gate 6/7, Market child page, WordPress, Next.js, CMS, code, test, deployment or `D:\16Wordpress_nextjs` operation is authorized |

## 1. Authority and Supersession

Current execution consumes:

1. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` — `APPROVED_GLOBAL_CHROME_BASELINE`.
2. `docs/superpowers/plans/2026-08-30-global-fixed-rfq-visual-revision.md` — Task 5.
3. `pages/home/04_planning/07_global_header_footer_component_states_v0.2.md`.
4. `pages/home/04_planning/05_homepage_full_visual_design_v0.5.md`.
5. `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_DESKTOP_STATES_V0.2.png`.
6. `pages/home/04_planning/visual-designs/global-chrome/GLOBAL_CHROME_MOBILE_STATES_V0.2.png`.
7. `MARKET-000_FULL_VISUAL_DESIGN_V0.2.md` and its four V0.3 complete pages as the protected Markets body baseline.

Project control explicitly confirmed on 2026-08-30 that `GHF-FIXED-RFQ-HOME-01=PROJECT_CONTROL_REVIEW_PASS / SHARED_FIXED_RFQ_BASELINE_FOR_TASKS_3_7`. The Home documents retain their submission-time Draft text as history; the current project-control notification is the operative shared-baseline decision.

V0.1/V0.2 specifications and V0.1–V0.3 assets remain historical records. Nothing is overwritten or deleted. This V0.3 document and the V0.4/V0.3 assets are the current fixed-RFQ review package only after project-control and user approval.

## 2. Fixed Global RFQ Contract

`RFQ_VISIBILITY = ALWAYS_VISIBLE`

All S0–S6 public states now show the same Global Chrome conversion surfaces:

| Surface | Required current behavior |
|---|---|
| Desktop Header | Markets current + fixed Teal `Request a Quote` terminal CTA |
| Mobile Header | `Logo | RFQ | Menu` in every state |
| Mobile Menu | Eight fixed primary items; Markets current; `Request a Quote` final action |
| Desktop Footer | Deep Navy Brand / Explore / Information / Conversion / Copyright; fixed RFQ |
| Mobile Footer | Same fixed content hierarchy and terminal RFQ |

Global Chrome no longer changes with route-safe, market/support availability, PT-BR, Trade freshness, inventory or product evidence. Body contextual RFQ surfaces remain governed by the approved MARKET-000 S0–S6 contract and are not added by this revision.

If the approved RFQ route or form is not ready:

`RFQ_ROUTE_READY=false = RELEASE_BLOCKER`

The release must stop. Public RFQ remains visible, is not disabled, is not redirected to Contact and is not replaced by an empty slot.

## 3. Formal Asset Manifest

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `assets/MARKET-000_G5_DESKTOP_S0_ROUTE_SAFE_BUYER_CLEAN_V0.4.png` | 1440 × 4944 | 566691 | `9AB1550E4552A8D7D0B16294F91B8925C278B2949CE7F749ADD66716B308507C` |
| `assets/MARKET-000_G5_DESKTOP_S6_FULL_EN_BUYER_CLEAN_V0.4.png` | 1440 × 5314 | 628991 | `C9DDC04926727E308EE0E0ECD4EC03C6A26132D9C3E1896D47F7135F945169E3` |
| `assets/MARKET-000_G5_MOBILE_390_S0_ROUTE_SAFE_BUYER_CLEAN_V0.4.png` | 780 × 15318 (`390px @2x`) | 1209460 | `823980F55DA67A7397C4E71276A05F39C6120764A644DD509385A47E488D90E4` |
| `assets/MARKET-000_G5_MOBILE_390_S6_FULL_EN_BUYER_CLEAN_V0.4.png` | 780 × 18304 (`390px @2x`) | 1374522 | `0170F3B64872A7EEAF0FFE91DDD14F096E6514112FC50AD025DD2CED750730AB` |
| `assets/MARKET-000_G5_RESPONSIVE_COMPONENT_STATES_V0.3.png` | 1600 × 2600 | 429481 | `F30A940FD05C4111A61ACDFDC88DF68801B463DB80566A8B9A560707F6D71B53` |

These five assets and this V0.3 specification form the formal approved `GHF-FIXED-RFQ-MARKET-01` visual baseline. Earlier assets remain preserved history and are not the current fixed-RFQ baseline.

## 4. Protected V0.3 Body Contract

| Complete page | Protected rectangle in V0.4 | Required V0.3 RAW SHA-256 |
|---|---|---|
| Desktop S0 | `x=0, y=84, 1440 × 4450` | `5b7a4e2a2bff59c50cd8d23b6d52e89bb2394b7cf3a3c11a2effc741e50e8f62` |
| Desktop S6 | `x=0, y=84, 1440 × 4820` | `654b7b39df96550a6b058cdd63e41513bc8c5e1bb9aac03f41c3768e79b6bb08` |
| Mobile S0 | `x=0, y=128, 780 × 13950` | `7f33eaa0af2d7387d6a37d59e9b1d3b64c88fa4187eafbad1eff6a40922b85ae` |
| Mobile S6 | `x=0, y=128, 780 × 16936` | `183a399295f876cc4d6ca27cbb9184efb5263f31e092ee9ed39a70637755c4e6` |

The protected rectangle begins immediately after the 84px Desktop or 64px logical Mobile Header and ends at the final pre-Footer body pixel. A mismatch blocks this review item.

## 5. Shared Component Provenance

| Component | Source | Current RAW SHA-256 | Use |
|---|---|---|---|
| Desktop Header | MARKET V0.3 S6, `x=0, y=0, 1440 × 84` | `3d9ec58274411d1cc9e488e620c8766abb825865c00a6e5f4c21cad87edc3d2f` | Applied unchanged to S0 and S6; Markets current + fixed RFQ |
| Mobile Header | MARKET V0.3 S6, `x=0, y=0, 780 × 128` | `850a8c5385122691094f1d52759e071d060b28f68733df2906e0bd96aac04171` | Applied unchanged to S0 and S6; Logo / RFQ / Menu |
| Desktop Footer | Home V0.5, `x=0, y=5666, 1440 × 410` | `0cd684062804981d9d842cdd5e7fe34b1c76545c871db42bde5ec6428bf9ecb1` | Exact shared fixed-RFQ Footer |
| Mobile Footer | Home V0.5, `x=0, y=6604, 390 × 620`, rendered at 2x | `933028165ab9275d4d3aa9cce38f34ee999179d58796c10d55093ff955ad5fb8` | Exact shared logical geometry at 780 × 1240 |

The Header sources already conform to the approved global Logo, navigation, current-state and terminal CTA contract. The Footer pixels are directly consumed from the Task 2 shared Home V0.5 output.

## 6. State Matrix

| State | Global Chrome | Protected body behavior |
|---|---|---|
| S0 route-safe | Fixed RFQ in Desktop/Mobile Header, Mobile Menu and Footer | No unverified external market/support/Trade action; no PT-BR; no contextual body RFQ addition |
| S1 market routes | Fixed RFQ unchanged | Market actions only follow the independently approved route state |
| S2 support routes | Fixed RFQ unchanged | Products/Applications/Documents/Resources actions follow independent route gates |
| S3 Trade current | Fixed RFQ unchanged | Trade action requires the approved official-source/freshness state |
| S4 RFQ-ready | Fixed RFQ unchanged | Existing contextual RFQ surfaces may render under the approved body contract |
| S5 PT-BR ready | Fixed RFQ unchanged | Hub itself has no alternate; only an independently approved Brazil EN→PT-BR visible relation may appear |
| S6 full EN | Fixed RFQ unchanged | Ten EN market actions, three support actions and approved contextual RFQ state remain unchanged |

The fixed terminal RFQ is a global navigation action, not evidence that any market route, inventory, supply, document, logistics or Trade claim is available.

## 7. Route, Localization, Freshness and Relationship Gates

- 22 audited external destinations remain `NOT_VERIFIED_LIVE`.
- MARKET-BR-PT remains `PROVISIONAL_URL / LOCALIZATION_REVIEW_REQUIRED / LOCALIZATION_HOLD / DO_NOT_RENDER`.
- MARKET-000 `hreflang=NOT_APPLICABLE` remains constant.
- Trade policy action and conclusion remain controlled by official-source and freshness review.
- S0 body remains route-safe and does not acquire a market, support or Trade external action from fixed RFQ.
- Buyer Clean continues to contain no model, model recommendation, process classification or country-to-model inference.
- PRODUCT V0.3 is the current sole relationship source: 84 rows, 30 verified Application, 0 conflict, 54 `NO_PUBLIC_MAPPING`; 14 verified Process grades. M-2377 has approved Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate source relations, but this Hub continues to render no row-level grade/Application/Process content. Specialty Materials remains no-public and Rubber remains evidence-only; the obsolete global-hide/conflict description is not used.
- M-996/M-2196 comparison, ranking, difference and selection-reason language remains frozen.
- Schema remains page-level navigation semantics consistent with visible content; fixed RFQ does not create a market/product/application entity relation.

## 8. Responsive and Interaction Contract

- Desktop Header remains 84px; Mobile Header remains 64px logical.
- Mobile Header order is `Logo | RFQ | Menu`; RFQ and Menu logical targets are at least 44px.
- Mobile Menu rows are at least 44px and preserve the fixed eight-item order.
- Markets current state uses weight, visible `CURRENT` and a Teal structural marker/underline.
- Terminal CTA default uses Accessible Teal `#007F77`; hover uses `#006E68`; focus uses a visible 3px non-color-only outline.
- At 390px, Header/Footer maintain a 14px logical right safety strip with no label or action collision.
- Footer closes directly after the protected body and does not add an unowned blank band.
- The current logo remains `brand_logo_primary_horizontal` using the approved visual-direction PNG, not a claimed production SVG.

## 9. Acceptance Checklist

- [x] Current written authority is Global Header/Footer V0.2.
- [x] Home Task 2 shared fixed-RFQ baseline was consumed.
- [x] Four V0.4 complete pages and one V0.3 responsive board exist.
- [x] All four complete pages display Global Chrome RFQ in Header and Footer.
- [x] Mobile Menu proof displays terminal RFQ and Markets current.
- [x] Four protected body hashes equal V0.3.
- [x] S0 body gains no unverified market/support/Trade action and no PT-BR.
- [x] 22 routes, localization and freshness remain frozen; PRODUCT V0.3 source boundaries are synchronized without changing Buyer Clean rendering.
- [x] Prior versions remain preserved.
- [x] No Gate 6/7, child-page or development action was taken.

## 10. Validation Record

| Check | Result | Date |
|---|---|---|
| Formal asset existence, dimensions and manifest hashes | PASS | 2026-08-30 |
| Four protected body RAW hashes | PASS — exact V0.3 matches | 2026-08-30 |
| Shared Header/Footer provenance | PASS — Markets-current Header and Home shared fixed-RFQ Footer exact matches | 2026-08-30 |
| Fixed RFQ coverage and 390px right safety | PASS — four pages have Header/Footer RFQ; two Mobile right-safety scans have 0 hits | 2026-08-30 |
| Route, PT-BR, Trade and PRODUCT V0.3 boundaries | PASS — 22/22 routes frozen; localization/freshness unchanged; 84-row V0.3 baseline synchronized; zero row-level Hub rendering retained | 2026-08-30 |
| Five assets original-detail review | PASS — no clipping, collision, horizontal overflow or Footer closing gap observed | 2026-08-30 |
| Consolidated fixed-RFQ validator | PASS — 50 PASS / 0 FAIL | 2026-08-30 |

## 11. Open Items

| Review ID | Level | Issue | Current control | Status |
|---|---|---|---|---|
| GHF-FIXED-RFQ-MARKET-01 | BLOCKING | MARKET-000 fixed-RFQ Global Chrome package passed project-control review and unified user approval | V0.3 specification and five current assets are the formal fixed-RFQ visual baseline; body approval position unchanged | `APPROVED / CLOSED` |
| G5-01 | BLOCKING | MARKET-000 Gate 5 still lacks final user approval | No Gate 6/7 or handoff | OPEN |
| MKT-R002 | IMPORTANT | Market-specific product, application, document, logistics and supply facts remain unsupported | Facts remain absent | OPEN |
| MKT-R003 | IMPORTANT | Brazil PT-BR remains unapproved | `LOCALIZATION_HOLD / DO_NOT_RENDER` | OPEN |
| MKT-R004 | IMPORTANT | 22 external destinations remain unverified live | S0 body remains route-safe | OPEN |
| MKT-R005 | IMPORTANT | Trade official-source and freshness review remains incomplete | No current Trade action in S0 | OPEN |

`GHC-MARKET-01` and G5-02/G5-03/G5-04 keep their previously recorded project-control-pass-pending-user status. This fixed-RFQ revision neither closes nor reopens them.

## 12. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.3 draft | 2026-08-30 | Applied the approved fixed-RFQ Global Chrome to S0–S6; created four V0.4 complete pages and Responsive Component States V0.3; protected exact V0.3 body pixels and all market gates | `DRAFT_FOR_FIXED_RFQ_REVIEW`; subsequent project-control PASS recorded below |
| V0.3 validation refresh | 2026-08-30 | Verified current manifest, component provenance, exact body hashes, fixed RFQ coverage, 390px safety and all frozen gates; completed original-detail review | 50 PASS / 0 FAIL; subsequent project-control PASS recorded below |
| V0.3 project-control review | 2026-08-30 | Project control independently confirmed the V0.3 specification, Brief, five formal assets, hashes, fixed RFQ surfaces, responsive safety and all frozen gates | `GHF-FIXED-RFQ-MARKET-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; not CLOSED; user approval date blank |
| V0.3 unified user approval | 2026-08-30 | User approved the unified Home and 03–07 fixed-RFQ visual package; retained this V0.3 specification, four V0.4 complete pages and Responsive Component States V0.3 as the formal MARKET-000 fixed-RFQ visual baseline | `GHF-FIXED-RFQ-MARKET-01=APPROVED / CLOSED`; visual endpoint hard stop |
| V0.3 PRODUCT relation source sync | 2026-08-30 | Updated the current relationship authority from V0.2.1 to user-approved V0.3; removed obsolete current M-2377 global-hide/conflict wording; preserved zero row-level Hub rendering and all visual assets/hashes | `MKT-REL-V03-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; approval source=`USER_APPROVED_PRODUCT_V0.3 + PROJECT_CONTROL_TARGETED_REVIEW`; no body or PNG change |

Hard stop at the approved visual endpoint. Gate 6/7, Market child pages, development, handoff, release and `D:\16Wordpress_nextjs` remain not authorized.
