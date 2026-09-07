# PRODUCT-000 Full Visual Design V0.3 — Global Chrome Revision

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page name | Titanium Dioxide Products |
| URL | `/products/` |
| Date | 2026-08-30 |
| Version | V0.3 |
| Revision status | `DRAFT_FOR_GLOBAL_CHROME_REVIEW` |
| Cross-page review item | `GHC-PRODUCT-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Existing page-body status | `APPROVED_GATE_5_BASELINE` — unchanged |
| Page lifecycle | `DESIGN_IN_REVIEW` — unchanged |
| Global chrome source | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.1.md` — `APPROVED_GLOBAL_CHROME_BASELINE` |
| Shared visual source | Home Task 2 `06_global_header_footer_component_states_v0.1.md`, `GLOBAL_CHROME_DESKTOP_STATES_V0.1.png`, `GLOBAL_CHROME_MOBILE_STATES_V0.1.png` — project-control review PASS |
| Relationship source | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.2.1.csv` — unchanged |
| Explicitly excluded | Gate 6/7, development handoff, Process/Grade child pages, code, CMS, tests, deployment, publishing and `D:\16Wordpress_nextjs` |

This V0.3 is a chrome-only additive revision. It does not overwrite `PRODUCT-000_FULL_VISUAL_DESIGN_V0.2.md`, the nine approved Gate 5 assets or any relationship and evidence record.

## 1. Authorized Change

Only these public shell regions change:

1. Desktop Header;
2. Mobile Header;
3. Mobile Menu state proof;
4. Desktop and Mobile Global Footer.

The Breadcrumb and every page-body region remain outside the shared Header. Selector, Process Routes, All Grades, Evaluation Guide, Support Paths, Buyer Questions, Final RFQ, SEO/GEO, Schema, CTA qualification and route behavior are not redesigned or rewritten.

## 2. Consumed Global Contract

### 2.1 Header

- Brand key: `brand_logo_primary_horizontal`; current visual source remains `CURRENT_VISUAL_DIRECTION_ASSET`, not a production SVG.
- Desktop height: 84px; white surface; 1200px content width; Products is current.
- Desktop visible order: `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Products current state: Bold + `CURRENT` + 3px Teal underline; future implementation also uses `aria-current="page"`.
- Mobile height: 64px logical; order `Logo | RFQ | Menu` when RFQ is available and `Logo | Menu` when unavailable.
- Mobile label is exactly `RFQ`; Menu stays at the far right in RFQ OFF.

### 2.2 Footer

- Deep Navy `#031B3A` on Desktop and Mobile.
- Brand statement: `A focused titanium dioxide purchasing platform for international industrial buyers.`
- Explore: Home, Markets, Products, Applications.
- Information: Documents, Resources, About. Contact remains absent because it is not approved/live.
- Conversion: `Request a Quote` only when `RFQ_AVAILABLE=true`.
- Bottom bar: `© 2026 TiO2 Malaysia.`
- Privacy, Terms, Legal, Company, Process, page anchors, model lists and internal review statements do not render.

## 3. State Contract

| Complete page | Header RFQ | Mobile Menu RFQ | Footer RFQ | Result |
|---|---:|---:|---:|---|
| Desktop Full-route V0.7 | Render | State board only | Render | Synchronized RFQ ON |
| Desktop Route-safe V0.7 | 0px | State board only | 0px | Synchronized RFQ OFF; no reserved CTA/Conversion slot |
| Mobile Full-route V0.7 | Render | Render in state board | Render | `Logo | RFQ | Menu`; synchronized RFQ ON |
| Mobile Route-safe V0.7 | 0px | 0px in state board | 0px | `Logo | Menu`; synchronized RFQ OFF |

Final RFQ remains a page-body module. When present, the sequence is `Final RFQ → Global Footer`; when absent, Buyer Questions enters the Global Footer with normal section closure.

## 4. Formal V0.7 Manifest

| Asset | State / purpose | Actual dimensions | Bytes | SHA-256 | Review status |
|---|---|---:|---:|---|---|
| `assets/PRODUCT-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.7.png` | Desktop Full-route; RFQ ON | 1440×5538 | 395189 | `22646BAA3BE2E247ABC399755DE1318120B3912BBDB4D7C151D257CBAAB812A9` | `DRAFT_FOR_GLOBAL_CHROME_REVIEW` |
| `assets/PRODUCT-000_G5_DESKTOP_ROUTE_SAFE_REVERSE_V0.7.png` | Desktop Route-safe; RFQ OFF | 1440×4201 | 292536 | `5E5D7979B40FC95222249F25FB937A1288FBA957EF8629C55A320F89446C9ADA` | `DRAFT_FOR_GLOBAL_CHROME_REVIEW` |
| `assets/PRODUCT-000_G5_MOBILE_FULL_ROUTE_REVERSE_V0.7.png` | 390px reference at explicit 2×; Full-route; RFQ ON | 780×11939 | 585349 | `51B52BF2D2318B203D582CA8CA4189CDC9788517928297DB9286771F24967DBE` | `DRAFT_FOR_GLOBAL_CHROME_REVIEW` |
| `assets/PRODUCT-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.7.png` | 390px reference at explicit 2×; Route-safe; RFQ OFF | 780×8354 | 408362 | `F6E7C086FA2F658C5183615EC24D269F32C5DA829E70B14302EB8356C6FB2EE2` | `DRAFT_FOR_GLOBAL_CHROME_REVIEW` |
| `assets/PRODUCT-000_G5_GLOBAL_CHROME_STATES_V0.7.png` | Products-current Desktop/Mobile Header, Mobile Menu and Footer RFQ ON/OFF proof; NOT BUYER FACING | 1536×1024 | 1374493 | `18FD6F0E756EBFFEE82E25AD43807DDE8C8556E318DAE88C88721553BEFF9979` | `DRAFT_FOR_GLOBAL_CHROME_REVIEW` |

All V0.2 and nine approved Gate 5 baseline assets remain unchanged and authoritative for the page body and relationship states.

## 5. Page-body Preservation Proof

The old and new complete pages were compared after excluding only the old/new Header and Footer regions. The protected body regions were copied without scaling, resampling or color compositing.

| State | Protected body height | Approved old body SHA-256 | V0.7 body SHA-256 | Result |
|---|---:|---|---|---|
| Desktop Full-route | 5044px | `4636B372FBCAA78BDBA6AFF2DF2339A06EA34A3E5D179AC47710EB5F40557F23` | `4636B372FBCAA78BDBA6AFF2DF2339A06EA34A3E5D179AC47710EB5F40557F23` | PASS — pixel-identical |
| Desktop Route-safe | 3707px | `720B623C8DF398A8A6197EE75EC799345F5199397B4AD02CCBA071E33F975C4F` | `720B623C8DF398A8A6197EE75EC799345F5199397B4AD02CCBA071E33F975C4F` | PASS — pixel-identical |
| Mobile Full-route | 10755px | `92FEEC529828676A0D3A09E0586881A98E8D536EEC90750D9C6C3A5C54C330CD` | `92FEEC529828676A0D3A09E0586881A98E8D536EEC90750D9C6C3A5C54C330CD` | PASS — pixel-identical |
| Mobile Route-safe | 7306px | `36E685C14B5BB4F75B8B0FB15413BD64CFF8506302D6613C8A442C389938F326` | `36E685C14B5BB4F75B8B0FB15413BD64CFF8506302D6613C8A442C389938F326` | PASS — pixel-identical |

Body preservation result: `4 PASS / 0 FAIL`.

## 6. Protected Product and Relationship Boundaries

- The approved 25 neutral Application mappings and 13 Process classifications remain governed by PRODUCT V0.2.1.
- M-2377 remains absent from Application/Process/recommendation relationships; `R-M2377-TDS=OPEN_HARD_GATE` remains open.
- M-996 and M-2196 keep equal Coatings/Sulfate base relations.
- `M996_VS_M2196_DIFFERENTIATION_FROZEN` remains open; no comparison, difference, ranking, selection reason, equivalence or substitute language is added.
- The 55 `NO_PUBLIC_MAPPING` rows remain non-rendering and are not described as unsuitable.

## 7. SEO, GEO and Accessibility Boundary

- Page ID, URL, H1, Title, Meta, Canonical, Schema type and keyword ownership do not change.
- Header/Footer links add no new entity or product relationship.
- Products is the only current top-level item.
- Visible Home remains a navigation item; Logo also targets Home with accessible name `TiO2 Malaysia`.
- Desktop and 390px Header/Footer use at least 14px logical link text and 44px logical action targets.
- RFQ OFF removes the action and layout slot together.
- No unregistered route or legal placeholder is introduced.

## 8. Review Item

| ID | Level | Scope | Status | Closure condition |
|---|---|---|---|---|
| `GHC-PRODUCT-01` | CROSS-PAGE VISUAL | Header, Mobile Menu and Footer replacement only | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Project control verified shared chrome fidelity, five-asset Manifest, RFQ ON/OFF closure, original-detail visuals and the four pixel-identical body hashes; awaiting unified user approval, not CLOSED |

`GHC-PRODUCT-01` does not reopen or downgrade the approved PRODUCT-000 Gate 5 page body. It is a separate public-shell review blocker only.

## 9. Acceptance Checklist

- [x] Global specification and Task 2 shared state boards consumed without creating a page-specific shell.
- [x] Products is current in Desktop and Mobile Menu states.
- [x] Desktop navigation order is exact and Home remains visible.
- [x] Mobile order is `Logo | RFQ | Menu`; RFQ OFF leaves Menu at far right.
- [x] Header, Mobile Menu and Footer RFQ ON/OFF states synchronize.
- [x] RFQ OFF Footer removes Conversion without an empty slot.
- [x] Deep Navy Footer contains only approved global routes.
- [x] Four protected body regions are pixel-identical to the approved Gate 5 assets.
- [x] PRODUCT V0.2.1, M-2377 and M-996/M-2196 boundaries are unchanged.
- [x] V0.2/V0.2.1 documents and nine approved assets are preserved.
- [x] No Gate 6/7, child-page or development deliverable was created.

## 10. Version and Review Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.2 | 2026-08-30 | Approved PRODUCT-000 Gate 5 body, relationship-state proof and nine-asset baseline | `APPROVED_GATE_5_BASELINE`; preserved |
| V0.3 | 2026-08-30 | Added only the approved Global Header, Mobile Menu and Footer to four complete-page V0.7 views; added PRODUCT-specific chrome state proof; recorded exact body hashes | `DRAFT_FOR_GLOBAL_CHROME_REVIEW`; `GHC-PRODUCT-01` pending |
| V0.3 / project-control review | 2026-08-30 | Project control independently verified the V0.3 specification, five V0.7 assets, four pixel-identical body hashes, Products current state, Desktop/Mobile RFQ ON/OFF, Deep Navy Footer and protected PRODUCT V0.2.1/freeze boundaries | `GHC-PRODUCT-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; not user-approved; not CLOSED |

Task 4 stops at project-control review. It does not authorize Gate 6/7, development handoff, Process/Grade child pages or any operation in `D:\16Wordpress_nextjs`.
