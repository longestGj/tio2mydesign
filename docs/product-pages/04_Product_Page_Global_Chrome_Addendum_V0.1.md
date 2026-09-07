# TiO2 Malaysia Product Page Global Chrome Addendum V0.1

## 0. Document Control

| Item | Value |
|---|---|
| Document ID | `PRODUCT-GLOBAL-CHROME-ADDENDUM-001` |
| Version | `V0.1` |
| Date | `2026-08-30` |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Project-control review | `PASS`；Review ID `GHC-PRODUCT-DETAIL-01` |
| Applies to | Unified template for all 14 TiO2 Malaysia grade pages |
| Consumes | `APPROVED_GLOBAL_CHROME_BASELINE` and the Task 2 shared component state board |
| Site scope | `tio2-my` |
| Development boundary | Visual and handoff specification only; no WordPress, Next.js, CMS, component, test, deployment or publishing work |

This addendum replaces only the public Header, Mobile Menu and Global Footer shown around the approved product-detail template. It does not revise the product-page content contract, module order, SEO/GEO ownership, Schema, route gates, product facts or evidence states in the three existing `docs/product-pages/*V1.0.md` files.

## 1. Authoritative Shared Chrome

The product template inherits the shared component without creating a product-specific alternative:

- Specification: `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_SPEC_V0.1.md`
- State description: `D:\23MySec\pages\home\04_planning\06_global_header_footer_component_states_v0.1.md`
- Desktop state board: `GLOBAL_CHROME_DESKTOP_STATES_V0.1.png`
- Mobile state board: `GLOBAL_CHROME_MOBILE_STATES_V0.1.png`
- Brand asset key: `brand_logo_primary_horizontal`
- Current visual-direction asset: `D:\23MySec\brand\visual\ChatGPT Image 2026年8月29日 09_37_10 (1).png`

The PNG remains a visual-direction asset, not a final production SVG. Future development must consume the global asset key rather than copy or redraw a page-specific logo.

## 2. Product-body Preservation Contract

The existing unified 14-grade body remains authoritative. The visual proof uses the current M-350 body only as planning input and does not upgrade that prototype into production code or a new content source.

The following remain unchanged:

- Breadcrumb and all body modules from Product Hero through Sample;
- M-350 copy, technical rows, CTA labels and existing body geometry;
- module-level `verified / pending_verification / not_public` behavior;
- M-2377 process and application freeze;
- M-996/M-2196 comparison freeze;
- URL, primary keyword, Canonical, Breadcrumb and Product Schema rules;
- Applications, Markets, Documents, Process and related-grade ownership boundaries.

The approved terminal structure is:

`Sample → Global Footer`

Product detail pages do not render a Final RFQ, embedded RFQ form, RFQ section heading or RFQ in-page-navigation anchor.

## 3. Header and Mobile Menu Application

### 3.1 Desktop

- Height: 84px on the 1440px reference canvas.
- Navigation order: `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- `Products` is the current top-level item and uses Bold + visible `CURRENT` + 3px Teal underline; production behavior also requires `aria-current="page"`.
- `Request a Quote` is the single Teal Header action when RFQ is available.
- The old prototype status strip, `PRODUCT TEMPLATE` logo subtitle, `Process` navigation item and incorrect order are excluded.
- Breadcrumb remains below the Header and is part of the preserved product body, not the Header component.

### 3.2 Mobile 390px

- Header height: 64px; horizontal padding: 16px.
- RFQ ON order: `Logo | RFQ | Menu`.
- RFQ OFF removes RFQ and its gap; Menu remains at the far right.
- Menu Open uses Deep Navy and the same route order as Desktop.
- `Products` uses Bold + 4px Teal left marker + visible `CURRENT`; production behavior also requires `aria-current="page"`.
- RFQ ON adds `Request a Quote` as the final menu row; RFQ OFF removes the row and its spacing.

## 4. Global Footer Application

The product template uses the same Deep Navy Global Footer as every other page.

Approved content:

- Brand statement: `A focused titanium dioxide purchasing platform for international industrial buyers.`
- Explore: Home, Markets, Products, Applications.
- Information: Documents, Resources, About.
- Conversion: Request a Quote, only when `RFQ_AVAILABLE=true`.
- Bottom bar: `© 2026 TiO2 Malaysia.`

`Contact` remains absent until its route is approved and live. RFQ OFF removes the complete Conversion action and spacing without leaving a blank column, empty card or separator.

The following are prohibited in the Global Footer:

- Privacy, Terms or Legal placeholders;
- Company as a separate destination;
- Process or page-local anchors;
- Research paths, Buyer questions, 14-grade lists or country lists;
- `Local design and interaction review only`;
- `No production data or enquiries are transmitted`;
- any `PRODUCT TEMPLATE` or internal prototype wording.

## 5. RFQ State Contract

| Location | RFQ ON | RFQ OFF | Closure rule |
|---|---:|---:|---|
| Desktop Header | Render | 0 | Remove CTA and slot |
| Mobile Header | Render | 0 | Menu moves to far right |
| Mobile Menu Open | Render as final row | 0 | Remove row and its spacing |
| Global Footer | Render | 0 | Remove Conversion action and reserved space |

The complete Desktop and Mobile page visuals show RFQ ON. The product-specific state board proves RFQ ON and OFF behavior without changing the product body.

## 6. Formal Visual Manifest

| Deliverable | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_DESKTOP_V0.1.png` | 1440 × 6202px | 439886 | `AFBC6349D01359A2852F9E2F8F2520D0A22D66601279A12614E3C284F0F177EA` |
| `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_MOBILE_390_V0.1.png` | 390 × 9994px | 327502 | `1D95B56045ECD03148BDC1EF11870958D8A72CCEE9E4160B4C3BE132B0702EE4` |
| `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_MENU_STATES_V0.1.png` | 390 × 2960px | 101022 | `8A10DD6BCE8459535C984D5666920E833EBE5A0A22EC43139B5155D6553ADBE5` |

The visual-generation preview and audit remain in `D:\23MySec\99_workspace\product-detail-global-chrome-task3\` and are not production code or formal visual deliverables.

## 7. Verification Record

| Check | Result |
|---|---|
| Desktop preserved body | 1440 × 5708px compared; `0` changed pixels |
| Mobile preserved body | 390 × 9310px compared; `0` changed pixels |
| Desktop current item | Products |
| Desktop navigation | Eight approved items in exact order |
| Mobile RFQ state sequence | Headers `[1,0,1,0]`; menus `[1,0]`; footers `[1,0]` |
| Mobile Products current | Present in both Menu Open states |
| Mobile horizontal overflow | `scrollWidth=390`, viewport `390`; none |
| Mobile sampled target height | Minimum 44px across 36 sampled targets |
| Forbidden Footer labels | `0` matches |
| Contact route | Not rendered |
| Page terminal order | Sample, then Global Footer |
| Embedded Final RFQ / RFQ form | Absent |
| D:\16Wordpress_nextjs writes | `0`; old prototype inputs were read only |

Audit evidence: `D:\23MySec\99_workspace\product-detail-global-chrome-task3\task3-audit.json`.

## 8. Review Boundary

This Task 3 package has passed project-control review under `GHC-PRODUCT-DETAIL-01` and remains pending user approval. Project-control PASS is not user approval. It does not approve a production implementation, advance any grade page to development, change the existing product-template V1.0 documents, or authorize work in `D:\16Wordpress_nextjs`.
