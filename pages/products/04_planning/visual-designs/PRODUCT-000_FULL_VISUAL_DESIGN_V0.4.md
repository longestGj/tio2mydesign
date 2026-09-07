# PRODUCT-000 Full Visual Design V0.4

## 1. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Version | `V0.4` |
| Date | `2026-08-30` |
| Revision status | `DRAFT_FOR_GLOBAL_CHROME_REVIEW` |
| Current cross-page item | `GHC-PRODUCT-02 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Prior cross-page item | `GHC-PRODUCT-01 = SUPERSEDED_BY_GHC-PRODUCT-02 / NOT_CURRENT_PASS` |
| Cross-page aggregate | `GHC-CROSS-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Existing page-body status | `APPROVED_GATE_5_BASELINE` — unchanged |
| Page lifecycle | `DESIGN_IN_REVIEW` — unchanged |
| User approval | Not granted for this V0.8 chrome revision |
| Scope | Header, Mobile Header, Footer and Global Chrome state-board Logo construction only |
| Hard stop | No Gate 6/7, development handoff, Process/Grade child pages or operation in `D:\16Wordpress_nextjs` |

This version supersedes only the V0.7 public-shell images. It does not reopen or downgrade the approved PRODUCT-000 Gate 5 Buyer Clean body, PRODUCT V0.2.1 relationship baseline, SEO/GEO content or conditional route behavior.

## 2. Review Finding and Root Cause

Second horizontal review found that V0.7 rendered a tightly cropped non-transparent Logo rectangle into the approved asset boxes. That removed the source PNG's transparent margins and enlarged the visible mark relative to Home and Tasks 3/5/6/7.

V0.8 removes that crop. Every Header and Footer Logo now consumes the complete approved source image rectangle.

| Property | V0.7 superseded behavior | V0.8 current review-set behavior |
|---|---|---|
| Source asset | Approved PNG | Same approved PNG |
| Source rectangle | Tight crop around visible pixels | Full `0,0,2172,724` rectangle |
| Desktop asset box | 180×60px | 180×60px; unchanged |
| Mobile asset box | 240×80px at 2× | 240×80px at 2× = 120×40px logical; unchanged |
| Footer source | Indirect crop from a state-board raster | Full approved PNG with white monochrome color treatment |
| Buyer Clean body | Pixel-identical | Pixel-identical |

## 3. Authoritative Logo Input

| Field | Value |
|---|---|
| Asset key | `brand_logo_primary_horizontal` |
| Source | `D:\23MySec\brand\visual\ChatGPT Image 2026年8月29日 09_37_10 (1).png` |
| Source dimensions | 2172×724px |
| Source SHA-256 | `285E6F4F2FD2304EB102845242A2B7C20DC9E1AC2DB4D38541B1CDE44AC75DE5` |
| Governance | `CURRENT_VISUAL_DIRECTION_ASSET`; not a production SVG |
| Header treatment | Original color, full PNG including transparent margins |
| Footer treatment | Same PNG and alpha, white monochrome color matrix; no redraw and no tight crop |

### 3.1 Complete-page placement

| Surface | Canvas | Asset box | Source rectangle |
|---|---:|---|---|
| Desktop Header | 1440px | `x=120, y=12, w=180, h=60` | Full PNG |
| Mobile Header | 780px explicit 2× | `x=32, y=24, w=240, h=80` | Full PNG |
| Desktop Footer | 1440px | `x=120, y=footer+42, w=180, h=60` | Full PNG + white treatment |
| Mobile Footer | 780px explicit 2× | `x=32, y=footer+64, w=240, h=80` | Full PNG + white treatment |

At a fixed color-difference threshold, Desktop V0.8 Header visible bounds are `x=141–283, y=18–62`, exactly matching the Home V0.4 baseline measurement. Mobile V0.8 visible Header size is approximately `95.5×30px logical`, aligned with the Home baseline's approximately `94×29px` at the same threshold and within the approved public-chrome construction.

## 4. V0.8 Formal Asset Manifest

These five files are the only current PRODUCT-000 Global Chrome revision assets for this review round.

| File | State | Actual dimensions | Bytes | SHA-256 | Review status |
|---|---|---:|---:|---|---|
| `assets/PRODUCT-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.8.png` | Desktop Full-route; RFQ ON | 1440×5538 | 389153 | `DDD226AFFCBA60EE926D49A4FBEE040CA77D85DC22E7456F68F20791A427E14B` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `assets/PRODUCT-000_G5_DESKTOP_ROUTE_SAFE_REVERSE_V0.8.png` | Desktop Route-safe; RFQ OFF | 1440×4201 | 286442 | `D4EBFCE982B16C1650072E7677CE93D533542642C32A9C10E7A9F6A948522C74` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `assets/PRODUCT-000_G5_MOBILE_FULL_ROUTE_REVERSE_V0.8.png` | 390px logical at explicit 2×; Full-route; RFQ ON | 780×11939 | 573595 | `A04EFA8E1B1530093ADFADDFD71EBF5A6D3C7861A62FCA417E4D1A45F5A7B859` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `assets/PRODUCT-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.8.png` | 390px logical at explicit 2×; Route-safe; RFQ OFF | 780×8354 | 398293 | `7FE1674B3CC974BDAC96AD0F4C780E65FCA57901C5FBE359900B5789F40BA7D1` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `assets/PRODUCT-000_G5_GLOBAL_CHROME_STATES_V0.8.png` | Products-current Header/Footer and RFQ ON/OFF proof; not Buyer Facing | 1536×1024 | 1361437 | `B878092474A984DD4DB67AAFAC2E3996B1F47617E669B95AE8C625875CBF757E` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

All five V0.7 files remain preserved in place as `SUPERSEDED_BY_V0.8`. They are historical review evidence and are not the current cross-page review set. The invalid first state-board V0.8 draft and the four locally rejected PixelOffset shell drafts are retained, not deleted, under `D:\23MySec\99_workspace\PRODUCT-000_global_chrome_v08_invalid\`.

## 5. Page-body RAW Preservation Proof

The protected body regions are copied row by row without scaling, resampling or color compositing. RAW SHA-256 is computed over 32-bit ARGB pixel rows.

| State | Protected body height | Approved baseline RAW SHA-256 | V0.8 RAW SHA-256 | Result |
|---|---:|---|---|---|
| Desktop Full-route | 5044px | `4636B372FBCAA78BDBA6AFF2DF2339A06EA34A3E5D179AC47710EB5F40557F23` | `4636B372FBCAA78BDBA6AFF2DF2339A06EA34A3E5D179AC47710EB5F40557F23` | PASS — pixel-identical |
| Desktop Route-safe | 3707px | `720B623C8DF398A8A6197EE75EC799345F5199397B4AD02CCBA071E33F975C4F` | `720B623C8DF398A8A6197EE75EC799345F5199397B4AD02CCBA071E33F975C4F` | PASS — pixel-identical |
| Mobile Full-route | 10755px | `92FEEC529828676A0D3A09E0586881A98E8D536EEC90750D9C6C3A5C54C330CD` | `92FEEC529828676A0D3A09E0586881A98E8D536EEC90750D9C6C3A5C54C330CD` | PASS — pixel-identical |
| Mobile Route-safe | 7306px | `36E685C14B5BB4F75B8B0FB15413BD64CFF8506302D6613C8A442C389938F326` | `36E685C14B5BB4F75B8B0FB15413BD64CFF8506302D6613C8A442C389938F326` | PASS — pixel-identical |

Body preservation result: `4 PASS / 0 FAIL`.

## 6. Preserved Chrome and Product Contracts

- Products remains the only current top-level item in Desktop and Mobile Menu states.
- Desktop and Mobile RFQ ON/OFF synchronization remains unchanged.
- Full-route keeps Header, Menu and Footer RFQ surfaces; Route-safe removes them with zero reserved slot.
- Deep Navy Footer structure, route set and contact/legal exclusions remain unchanged.
- The approved 25 neutral Application mappings and 13 Process classifications remain governed by PRODUCT V0.2.1.
- M-2377 remains absent from Application, Process and recommendation relationships; `R-M2377-TDS=OPEN_HARD_GATE` remains open.
- M-996 and M-2196 retain equal Coatings/Sulfate base relations.
- `M996_VS_M2196_DIFFERENTIATION_FROZEN` remains open; no comparison, ranking, selection reason, equivalence or substitute language is added.
- The 55 `NO_PUBLIC_MAPPING` rows remain non-rendering and are not described as unsuitable.

## 7. Review Items

| ID | Scope | Current status | Required closure |
|---|---|---|---|
| `GHC-PRODUCT-01` | First PRODUCT-000 Global Chrome review | `SUPERSEDED_BY_GHC-PRODUCT-02 / NOT_CURRENT_PASS` | No longer a current final PASS after second horizontal review |
| `GHC-PRODUCT-02` | Logo source construction and common scale in Header, Mobile Header, Footer and state board | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Project control fresh validation passed 13/13; awaiting unified user approval; not CLOSED |
| `GHC-CROSS-01` | Cross-page public-shell consistency | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Project control restored the cross-page PASS after independent validation; awaiting unified user approval; not CLOSED |

## 8. V0.8 Self-check

- [x] Same Task 2 source PNG and SHA-256 consumed directly.
- [x] No tight-crop derivative used for Header, Mobile Header or Footer.
- [x] Desktop 180px and Mobile 120px logical asset boxes retained.
- [x] Desktop visible Logo bounds match Home at the same measurement threshold.
- [x] Mobile visible Logo size matches the common logical scale within rasterization tolerance.
- [x] Footer uses the same full PNG and alpha with white monochrome treatment.
- [x] Four Buyer Clean body RAW hashes are unchanged.
- [x] RFQ, navigation, Products-current, relationship and freeze contracts are unchanged.
- [x] V0.7 is preserved and marked superseded; no historical asset was overwritten or deleted.
- [x] No Gate 6/7, child page or development output was created.

## 9. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.2 | 2026-08-30 | Approved PRODUCT-000 Gate 5 Buyer Clean body and relationship-state baseline | `APPROVED_GATE_5_BASELINE`; unchanged |
| V0.3 / assets V0.7 | 2026-08-30 | First approved-global-chrome consumption set | `SUPERSEDED_BY_V0.4_ASSETS_V0.8`; retained as history |
| V0.4 / assets V0.8 | 2026-08-30 | Replaced tight-crop Logo rendering with complete Task 2 source PNG; aligned Desktop/Mobile asset boxes and Footer white treatment; preserved all Buyer Clean body pixels | `DRAFT_FOR_GLOBAL_CHROME_REVIEW`; `GHC-PRODUCT-02 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.4 / project-control review | 2026-08-30 | Project control independently verified the source PNG and SHA-256, five V0.8 dimensions, Desktop/Mobile common Logo scale, four unchanged body hashes, Header/Footer, RFQ ON/OFF, Products current and route-safe closure; fresh validation 13 PASS / 0 FAIL | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; not user-approved; not CLOSED |
| V0.4 / cross-page project-control review | 2026-08-30 | Project control restored `GHC-CROSS-01` after independent cross-page validation | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; not user-approved; not CLOSED |

Task 4 remains stopped at project-control review. This document does not authorize Gate 6/7, development handoff, Process/Grade child pages or any operation in `D:\16Wordpress_nextjs`.
