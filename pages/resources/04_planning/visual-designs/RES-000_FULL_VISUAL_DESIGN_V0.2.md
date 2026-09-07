# RES-000 Full Visual Design V0.2 — Global Chrome Delta

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `RES-000` |
| Page name | Resources |
| URL | `/resources/` |
| Revision item | `GHC-RES-01` |
| Revision scope | Execution-plan Task 6 — replace Header, Mobile Menu and Footer only |
| Date | 2026-08-30 |
| Status | `DESIGN_IN_REVIEW / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Project-control review | `GHC-RES-01 / PASS`；用户尚未批准本次 Global Chrome V0.2 |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Existing Gate 1–5 status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; unchanged |
| Global contract | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.1.md` — `APPROVED_GLOBAL_CHROME_BASELINE` |
| Shared visual reference | Home `06_global_header_footer_component_states_v0.1.md` + two Global Chrome state boards; project-control PASS notification received before Task 6 execution |
| Site scope | `tio2-my` |
| Excluded | Resource/Document child pages, Gate 6+, development, code, testing implementation, deployment, publishing and `D:\16Wordpress_nextjs` |

This V0.2 package is a cross-page chrome delta. It does not reopen or alter RES-000 Gate 1–4 work, does not promote Gate 5 or the page lifecycle, and does not constitute user approval of RES-000 Gate 1–5.

## 1. Authorized Delta

Only these public regions changed from V0.1:

1. Desktop Header;
2. Mobile Header;
3. Mobile Menu Open;
4. Desktop/Mobile Global Footer.

The Breadcrumb and every page-body pixel from the route-safe V0.1 Buyer Clean baseline were preserved. The following remain unchanged:

- Resources route-safe narrative, module order, copy, card geometry and Buyer Questions;
- eligible Resource inventory `0` and public `ItemList=0`;
- no Resource child-page title, URL, summary or action;
- no current Trade item, policy conclusion or jurisdiction card;
- official-source, applicable-scope, source-date, review-date and freshness requirements;
- PRODUCT V0.2.1 controls: 84 relations resolve to 25 verified / 4 conflict / 55 no-public, plus 13 explicit Process classifications;
- M-2377 relationship hard gate;
- M-996/M-2196 comparison, rank, equivalence, replacement and selection-rationale freeze;
- SEO/GEO ownership, Canonical, Schema page type, route gates and evidence status.

## 2. Consumed Shared Baseline

| Input | Consumption rule |
|---|---|
| `GLOBAL_HEADER_FOOTER_SPEC_V0.1.md` | Sole global Header / Mobile Menu / Footer contract |
| `pages/home/04_planning/06_global_header_footer_component_states_v0.1.md` | Shared dimensions, labels, current-page state, route-safe closure and asset key |
| `GLOBAL_CHROME_DESKTOP_STATES_V0.1.png` | Desktop Header/Footer RFQ OFF and current-state visual reference |
| `GLOBAL_CHROME_MOBILE_STATES_V0.1.png` | 390px Header/Menu/Footer RFQ OFF visual reference |
| `RES-000_FULL_VISUAL_DESIGN_V0.1.md` + V0.1 assets | Frozen Resources route-safe body and evidence baseline |

The shared visual reference was consumed only after the current Task 6 instruction confirmed project-control PASS. Home artifacts were read-only inputs; this task did not modify them.

## 3. V0.2 Artifact Manifest

| Artifact | Canvas | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `assets/RES-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.2.png` | 1440×4425 | 304562 | `B8F8EF5D37407372D5E700ED7F0EF787512FF5B2F10B88D97A9E941A1F989EDC` | `DESIGN_IN_REVIEW` |
| `assets/RES-000_G5_MOBILE_390_ROUTE_SAFE_BUYER_CLEAN_V0.2.png` | 780×12704; 390px logical at 2× | 757854 | `20A01A20BFB816F031C3824E6930AE3DD0C97FDE2E48CBAB554E379EDFE4CB76` | `DESIGN_IN_REVIEW` |
| `assets/RES-000_G5_MOBILE_390_MENU_OPEN_V0.2.png` | 780×940; 390px logical at 2× | 45964 | `38316DEF3BDAC49FA20897533A88F1685463793DCFC97C05604986415F3C16FC` | `DESIGN_IN_REVIEW` |

Preserved without overwrite:

- all V0.1 Buyer Clean assets;
- `RES-000_G5_INTERNAL_COMPONENT_STATE_BOARD_V0.1.png`;
- `99_workspace/RES-000/visual-preview/RES-000_FULL_VISUAL_PREVIEW_V0.1.html`, still `PLANNING_ONLY / NOT_FORMAL_DELIVERABLE`.

## 4. Header and Current-page Contract

### 4.1 Desktop

- Header height: 84px; white background; 1px `#D9E2EC` bottom rule.
- Content width: 1200px on the 1440px canvas.
- Asset key: `brand_logo_primary_horizontal`; current visual asset remains `CURRENT_VISUAL_DIRECTION_ASSET`, not a production SVG.
- Logo accessible name: `TiO2 Malaysia`; target: Home.
- Visible order: `Home | Markets | Products | Applications | Documents | Resources | About`.
- `Resources` uses Bold + visible `CURRENT` + 3px Teal underline and carries the `aria-current="page"` implementation requirement.
- `Request a Quote` is absent because `RFQ_AVAILABLE=false`; no slot or separator remains.

### 4.2 Mobile Header and Menu

- Logical viewport: 390px; Header height: 64px; horizontal padding: 16px.
- RFQ OFF order: `Logo | Menu`; Menu remains at the far right with a measured 16px edge gap.
- No hidden RFQ button or inter-action gap remains.
- Menu Open uses Deep Navy and seven routes in the fixed order.
- `Resources` uses Bold + 4px Teal left marker + visible `CURRENT`.
- Menu/Close and all menu rows meet the 44px minimum target.
- No `Request a Quote` menu row renders.

## 5. Global Footer Contract

The old page-local Footer was replaced by the RFQ OFF shared Deep Navy Footer.

| Region | Visible content |
|---|---|
| Brand | Shared Logo + `A focused titanium dioxide purchasing platform for international industrial buyers.` |
| Explore | Home, Markets, Products, Applications |
| Information | Documents, Resources, About |
| Conversion | Not rendered; `RFQ_AVAILABLE=false` |
| Bottom bar | `© 2026 TiO2 Malaysia.` |

The Footer contains no Contact because its route is not approved/live. It also contains zero instances of:

- `Research paths` or `Buyer questions` page-local anchors;
- Privacy, Terms, Legal or a separate Company route;
- internal review, prototype, production-data or planning explanations;
- model, country or keyword-list links;
- empty Conversion columns, cards, rules or blank CTA bands.

The page-body `Explore research paths` action remains unchanged because it is part of the authorized Resources body, not the Global Footer.

## 6. RFQ OFF Closure

| Surface | Render count | Closure result |
|---|---:|---|
| Desktop Header | 0 | Seven navigation items reflow without a CTA slot |
| Mobile Header | 0 | Menu remains at the far right; RFQ and its spacing are 0px |
| Mobile Menu Open | 0 | Seven routes only; no terminal conversion row or gap |
| Desktop Footer | 0 | Three visible content columns; no empty Conversion column |
| Mobile Footer | 0 | Brand + two link columns + bottom bar; no CTA band |

No `Request a Quote` or standalone `RFQ` label appears anywhere in the three Buyer Clean V0.2 assets.

## 7. Body-preservation Proof

The planning-source Breadcrumb + `<main>` DOM baseline remains reproducible at:

`6136C970D2EA6B606BB1CDB3A36D89306235EED377D3AB582871F87E06AE3E02`

Final V0.2 raster assembly reused the exact V0.1 Breadcrumb + body pixels between the new Header and new Footer:

| Canvas | Compared body pixels | Different pixels | Result |
|---|---:|---:|---|
| Desktop 1440px | 5,711,040 | 0 | PASS |
| Mobile 390px logical @2× | 9,059,700 | 0 | PASS |

The V0.2 Header height change shifts the Desktop body downward by 8px but does not change any body pixel, module, copy, spacing or responsive behavior. The Mobile body begins after the same 64px logical Header and remains pixel-identical.

## 8. Route, Evidence and Relationship Audit

| Control | V0.2 result |
|---|---|
| Public eligible Resource items | 0 |
| Public `ItemList` | 0 |
| Candidate identity or route | 0 |
| Current Trade title/card/conclusion | 0 |
| Grade/model relation expressions | 0 |
| M-2377 relationship expression | 0 |
| M-996/M-2196 comparison/equivalence expression | 0 |
| Cross-site fallback | 0 |
| Footer page-local anchors/internal notes | 0 |

Permanent freshness education remains visible, but no time-sensitive statement is promoted without the official-source/scope/date/review gate.

## 9. Responsive and Accessibility Audit

- Desktop document width: 1440px / viewport 1440px.
- Mobile document width: 390px / viewport 390px.
- Menu Open width: 390px / viewport 390px.
- No intended horizontal overflow.
- Mobile Menu and Footer use logical text sizes of at least 14px.
- Menu/Close and menu rows meet the 44px logical target.
- Current state is not color-only.
- Logo accessible name remains `TiO2 Malaysia`.
- Desktop and Mobile original-detail review found no crop, overlap, text truncation, broken Footer or RFQ-off blank band.

## 10. Governance and Review Hold

| Review item | Status | Control |
|---|---|---|
| `GHC-RES-01` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Global chrome delta and body-preservation proof passed project-control review; not user-approved or CLOSED |
| `RES-G1-01`–`RES-G5-01` | `OPEN_USER_APPROVAL / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Existing page Gate status unchanged |
| `RES-G15-01/02` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Not reopened or closed by this revision |
| `RES-R002–RES-R007` | `OPEN` | Evidence, route, freshness and maintenance gates unchanged |
| `RES-R008–RES-R009` | `CONTROLLED_IN_DRAFT` | Contrast and registered-Footer controls retained |
| `R-M2377-TDS` | `OPEN_HARD_GATE` | No M-2377 relationship expression |

This package has passed project-control review and stops at the user-approval hold. It does not enter Gate 6+, start a Resource or Document child page, authorize development, or change anything in `D:\16Wordpress_nextjs`.

## 11. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.2 | 2026-08-30 | Consumed the project-control-passed shared Global Chrome state boards; replaced only RES-000 Header, Mobile Menu and Footer; preserved the complete route-safe body and all governance gates | `DESIGN_IN_REVIEW / SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| V0.2 / `GHC-RES-01` review record | 2026-08-30 | Project control independently verified all three visuals, RFQ OFF closure, Footer boundaries, 390px behavior, manifest, body preservation and unchanged evidence/relationship gates | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; not user-approved or CLOSED |
