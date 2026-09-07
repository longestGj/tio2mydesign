# MARKET-000 Full Visual Design V0.2 — Global Chrome Revision

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `MARKET-000` |
| Page | Markets |
| URL | `/markets/` |
| Version | V0.2 |
| Date | 2026-08-30 |
| Status | `DRAFT_FOR_GLOBAL_CHROME_REVIEW` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Cross-page review item | `GHC-MARKET-01` — `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Body approval position | Gate 5 V0.2 body remains `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; this revision neither reopens nor approves it |
| Global chrome baseline | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.1.md` — `APPROVED_GLOBAL_CHROME_BASELINE` |
| Shared visual source | `pages/home/04_planning/06_global_header_footer_component_states_v0.1.md` plus its two formal state boards; Task 2 project-control PASS supplied by project control |
| Approved content baseline | `MARKET-000_CONTENT_ARCHITECTURE_V0.1.md` — `APPROVED_GATE_2_BASELINE` |
| Approved wireframe baseline | `MARKET-000_WIREFRAME_SPEC_V0.1.md` — `APPROVED_GATE_3_BASELINE` |
| Approved visual-direction baseline | `MARKET-000_VISUAL_DIRECTION_V0.1.md` — `APPROVED_GATE_4_BASELINE` |
| Product relationship baseline | PRODUCT V0.2.1 matrix and approved MARKET-000 impact audit |
| User approval date for this revision |  |
| Explicitly excluded | Gate 6/7, Market child pages, development, WordPress, Next.js, CMS, tests, deployment, publishing and `D:\16Wordpress_nextjs` |

This revision replaces only the global Header, Mobile Menu proof and Global Footer around the existing MARKET-000 body. It does not change any page-body pixel, module, copy, CTA condition, SEO/GEO field, Schema relationship, route state, localization state, freshness rule or product relationship.

## 1. Change Boundary

### 1.1 Changed

- Header uses `brand_logo_primary_horizontal` and the single approved visual-direction PNG source.
- Desktop navigation follows the fixed eight-item contract and keeps Markets current.
- Mobile Header uses `Logo | RFQ | Menu` when RFQ is ON and `Logo | Menu` with zero reserved slot when OFF.
- Footer becomes the shared Deep Navy structure with approved Explore, Information and conditional Conversion content.
- Responsive board adds exact Markets-current Header/Menu/Footer RFQ ON/OFF proof.

### 1.2 Unchanged

- `S0_CURRENT_ROUTE_SAFE` through `S6_FULL_EN_ACTION` logic.
- Destination Selector, EU overview and country disclosure.
- All Choice Guide, Procurement Path, Trade Boundary, Q1–Q7 and Final RFQ copy.
- Ten English market actions, three support actions and the six-surface RFQ rule.
- Twenty-two external route units remain `NOT_VERIFIED_LIVE`.
- Brazil PT-BR remains `LOCALIZATION_HOLD / DO_NOT_RENDER`.
- Trade link and policy content remain behind official-source, scope, date, freshness, content and live-route gates.
- Buyer Clean remains free of model/process relationships; PRODUCT V0.2.1 boundaries remain unchanged.
- MARKET-000 hreflang remains `NOT_APPLICABLE`; no SEO/GEO/Schema responsibility changes.

## 2. Formal Asset Manifest

| Asset | Dimensions | Bytes | SHA-256 | Review role |
|---|---:|---:|---|---|
| `assets/MARKET-000_G5_DESKTOP_S0_ROUTE_SAFE_BUYER_CLEAN_V0.3.png` | 1440×4964 | 576514 | `FA45C546A5D99EDFEE09F9ED6F657FCF7FDE0D579491C9395AD8AC71B6FB8E1F` | Complete Desktop S0; RFQ OFF in Header/Footer |
| `assets/MARKET-000_G5_DESKTOP_S6_FULL_EN_BUYER_CLEAN_V0.3.png` | 1440×5334 | 643769 | `6BE1FE17314D033E9DF3A9DBDE14FE30042384D209032CA94DAEA6BD44A86218` | Complete Desktop S6; RFQ ON in Header/Footer |
| `assets/MARKET-000_G5_MOBILE_390_S0_ROUTE_SAFE_BUYER_CLEAN_V0.3.png` | 780×15098 | 1153272 | `C45CF854261434174822E4693972C78BE76D2F9BF4A12C7E748A3F2D1E90F34A` | 390px logical S0 at 2×; RFQ OFF |
| `assets/MARKET-000_G5_MOBILE_390_S6_FULL_EN_BUYER_CLEAN_V0.3.png` | 780×18264 | 1324810 | `0239D3ADADFF7BDE24E01EF5682AB39B8EE7A03FADDF42E12C7FCF270DEB32AA` | 390px logical S6 at 2×; RFQ ON |
| `assets/MARKET-000_G5_RESPONSIVE_COMPONENT_STATES_V0.2.png` | 1600×2200 | 271609 | `A98EDA8F2779F83C2F6F2F285A79C0F14ED601E4D8E2A87B9293F8181CF6CA42` | Markets-current shared Header/Menu/Footer states plus inherited body-state reference |

The V0.1/V0.2 specification, four V0.2 complete-page assets, V0.1 responsive board, Internal Review overlay and superseded history remain preserved. They are not overwritten or deleted.

## 3. Exact Body-Preservation Proof

The V0.3 pages were assembled by extracting the opaque page-body raster from each V0.2 source and placing it unchanged between the new chrome regions. The RAW SHA-256 is calculated after decoding, so it proves equality of actual body pixels rather than compressed-file similarity.

| State | Protected body rectangle in old and new asset | V0.2 RAW SHA-256 | V0.3 result |
|---|---|---|---|
| Desktop S0 | `x=0, y=84, w=1440, h=4450` | `5b7a4e2a2bff59c50cd8d23b6d52e89bb2394b7cf3a3c11a2effc741e50e8f62` | Must match exactly |
| Desktop S6 | `x=0, y=84, w=1440, h=4820` | `654b7b39df96550a6b058cdd63e41513bc8c5e1bb9aac03f41c3768e79b6bb08` | Must match exactly |
| Mobile S0 @2× | `x=0, y=128, w=780, h=13950` | `7f33eaa0af2d7387d6a37d59e9b1d3b64c88fa4187eafbad1eff6a40922b85ae` | Must match exactly |
| Mobile S6 @2× | `x=0, y=128, w=780, h=16936` | `183a399295f876cc4d6ca27cbb9184efb5263f31e092ee9ed39a70637755c4e6` | Must match exactly |

The protected rectangle starts below the 84px Desktop or 64px logical Mobile Header and includes Breadcrumb plus every page-body module through the final pre-Footer pixel. Any mismatch blocks `GHC-MARKET-01`.

## 4. Header Contract

### 4.1 Desktop

- 1440px canvas; 84px Header; white background; 1200px content system.
- Logo is the approved `brand_logo_primary_horizontal` visual-direction asset at 180px display width.
- Visible order is `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Markets uses Bold, visible `CURRENT`, 3px Teal underline and the production requirement `aria-current="page"`.
- Header navigation and state labels are at least 14px; targets are at least 44px.
- S0 removes the RFQ button and its slot; seven navigation items reflow naturally.
- S6 displays the Teal `Request a Quote` action.

### 4.2 Mobile 390px

- 64px logical Header at 2× export; 16px side padding; 120px logical Logo.
- S6 order is exactly `Logo | RFQ | Menu`; RFQ and Menu are at least 44×44px.
- S0 removes RFQ plus its spacing and keeps Menu at the far right.
- The closed Header is used in both complete pages; the open states are proved on the V0.2 responsive board.

## 5. Mobile Menu Proof

The responsive board includes two 390px Menu Open states:

| State | Visible rows | Current state | Closure |
|---|---|---|---|
| RFQ ON | Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote | Markets = Bold + 4px Teal left marker + `CURRENT` | CTA is final row |
| RFQ OFF | Home, Markets, Products, Applications, Documents, Resources, About | same Markets treatment | CTA row and spacing are 0px |

Rows are at least 44px high, use Deep Navy, retain visible focus requirements and fit within 390px without horizontal scrolling.

## 6. Global Footer Contract

Both S0 and S6 use the same Deep Navy structure:

- Brand: white deep-background treatment of the same approved Logo construction.
- Description: `A focused titanium dioxide purchasing platform for international industrial buyers.`
- Explore: Home, Markets, Products, Applications.
- Information: Documents, Resources, About.
- Contact remains absent because it is not approved/live.
- Conversion appears only when `RFQ_AVAILABLE=true`.
- Bottom bar: `© 2026 TiO2 Malaysia.`

The Footer contains no Privacy, Terms, Legal, Company standalone link, page anchor, market list, product list or internal review statement. Final RFQ remains a page-body module and is not merged into the Footer.

## 7. State Matrix

| State | Header RFQ | Menu RFQ | Footer RFQ | Page-body state |
|---|---:|---:|---:|---|
| S0 current route-safe | 0px | 0px | 0px | unchanged; all external actions remain gated |
| S6 full English action | Render | Render | Render | unchanged; ten EN market + three support actions; Trade/PT-BR independent |

The existing page-level six-surface RFQ contract remains unchanged: Header, Hero, Q7 addition, GEO-A09, Final RFQ and Footer synchronize on `RFQ_AVAILABLE`. Mobile Menu mirrors the same global route state and does not introduce a second condition.

## 8. SEO, GEO, Schema and Relationship Safety

- Page identity remains `MARKET-000`, `/markets/`, `NO_PRIMARY_KEYWORD`, `APPROVED_NAVIGATION_HUB` and `NO_DIRECT_KEYWORD_TARGET`.
- Canonical, H1, Title, hreflang and indexing intent do not change.
- Header/Footer links use page names only and create no new market, product, application or process fact.
- Schema stays limited to visible approved/live navigation relationships; Footer content does not create Product, Offer or `suitableFor` relations.
- PRODUCT V0.2.1 remains the sole relationship source. Buyer Clean keeps zero grade names, zero process classifications, zero country-to-grade inference, zero M-2377 output and zero M-996/M-2196 comparison cue.
- The 55 `NO_PUBLIC_MAPPING` rows are not interpreted as unsuitable or unavailable.

## 9. Accessibility and Responsive Acceptance

- Header/Footer copy and links are at least 14px.
- Header controls, Menu rows, CTA and link targets are at least 44px high or have an equivalent target area.
- Current state is structural and textual, not color-only.
- Focus uses a visible outline separated from the component edge.
- Header, open Menu and Footer fit at 390px without horizontal scroll or clipped labels.
- S0 removal of RFQ does not leave an empty slot or ornamental band.
- Footer follows Q7 in S0 and Final RFQ in S6 without an unowned blank module.
- Logo accessible name remains `TiO2 Malaysia`; the current PNG is explicitly not a production SVG.

## 10. Review and Validation Record

| Check | Result | Date |
|---|---|---|
| Task 2 shared board and specification consumed | PASS | 2026-08-30 |
| Five V0.2/V0.3 assets exist, are non-empty and match declared dimensions | PASS — automated fresh validation | 2026-08-30 |
| Four protected body RAW SHA-256 values | PASS — exact match to frozen V0.2 body baseline | 2026-08-30 |
| Header/Menu/Footer RFQ ON/OFF and Deep Navy Footer scan | PASS — S0 zero RFQ action; S6 Header/Footer enabled; 390px chrome right-safety scan 0 hits | 2026-08-30 |
| 22 route, PT-BR, Trade and PRODUCT V0.2.1 gates | PASS — 22/22 `NOT_VERIFIED_LIVE`; matrix 84 rows / 25 verified / 4 conflict / 55 no-public / 13 verified-process grades / M-2377 conflict | 2026-08-30 |
| Four complete pages plus responsive board original-detail review | PASS — no visible Header/Footer clipping, collision or anomalous blank band | 2026-08-30 |
| Task 5 consolidated validator | PASS — 46 PASS / 0 FAIL | 2026-08-30 |

## 11. Open Items

| Review ID | Level | Issue | Current control | Status |
|---|---|---|---|---|
| GHC-MARKET-01 | BLOCKING | MARKET-000 global Header/Menu/Footer revision has passed project-control review and still needs user approval | V0.3/V0.2 assets remain review-only; body approval position unchanged | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| G5-01 | BLOCKING | MARKET-000 Gate 5 still lacks final user approval | No Gate 6/7 or handoff | OPEN |
| MKT-R002 | IMPORTANT | Market-specific product, application, document, logistics and supply facts remain unsupported | Facts remain absent | OPEN |
| MKT-R003 | IMPORTANT | Brazil PT-BR remains unapproved | `LOCALIZATION_HOLD / DO_NOT_RENDER` | OPEN |
| MKT-R004 | IMPORTANT | 22 external destinations remain unverified live | S0 remains route-safe | OPEN |
| MKT-R005 | IMPORTANT | Trade official-source and freshness review remains incomplete | No policy conclusion or qualified action | OPEN |

G5-02/G5-03/G5-04 retain their existing `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` status. This chrome revision does not close or reopen them.

## 12. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.2 draft | 2026-08-30 | Created four V0.3 complete pages and one V0.2 responsive/menu state board using the approved global chrome; preserved exact V0.2 body pixels and all governance gates | `DRAFT_FOR_GLOBAL_CHROME_REVIEW`; `GHC-MARKET-01` submitted to project control |
| V0.2 validation refresh | 2026-08-30 | Completed exact body hashes, asset dimensions, RFQ state, Deep Navy Footer, 390px right-safety, route, localization and PRODUCT V0.2.1 checks; completed original-detail visual review | 46 PASS / 0 FAIL; subsequent project-control PASS recorded below |
| V0.2 project-control review | 2026-08-30 | Project control independently confirmed the specification, five formal assets, body hashes, conditional RFQ states, current state, responsive safety and all frozen gates | `GHC-MARKET-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; user approval date remains blank |

Stop here and wait for unified user approval of `GHC-MARKET-01`. Gate 6/7, Market child pages, development and `D:\16Wordpress_nextjs` remain not authorized.
