# TiO2 Malaysia Product Page Global Chrome Addendum V0.2

## 0. Document Control

| Item | Value |
|---|---|
| Document ID | `PRODUCT-GLOBAL-CHROME-ADDENDUM-002` |
| Version | `V0.2` |
| Date | `2026-08-30` |
| Status | `APPROVED / CLOSED` |
| Review ID | `GHF-FIXED-RFQ-DETAIL-01` |
| User approval | `APPROVED`；2026-08-30 |
| Visual baseline | Product-detail Template V0.2；`FORMAL_VISUAL_BASELINE` |
| Applies to | Unified template for all 14 TiO2 Malaysia grade pages |
| Consumes | `GLOBAL_HEADER_FOOTER_SPEC_V0.2` and the Task 2 fixed-RFQ shared component state boards |
| Site scope | `tio2-my` |
| Development boundary | Visual and handoff specification only; no WordPress, Next.js, CMS, component, test, deployment or publishing work |

This addendum updates only the public Header, Mobile Menu and Global Footer around the approved product-detail template. It does not revise the product-page content contract, module order, SEO/GEO ownership, Schema, route gates, product facts or evidence states in the three existing `docs/product-pages/*V1.0.md` files.

V0.1 remains preserved as historical evidence. V0.2 passed project-control review and received user approval on 2026-08-30; it is the formal Product-detail Template visual baseline. This approval does not authorize development or change any product technical or page gate.

## 1. Authoritative Shared Chrome

The product template inherits the approved shared component and does not create a product-specific Header or Footer variant:

- Specification: `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_SPEC_V0.2.md`
- State description: `D:\23MySec\pages\home\04_planning\07_global_header_footer_component_states_v0.2.md`
- Desktop state board: `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_DESKTOP_STATES_V0.2.png`
- Mobile state board: `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_MOBILE_STATES_V0.2.png`
- Homepage integration record: `D:\23MySec\pages\home\04_planning\05_homepage_full_visual_design_v0.5.md`
- Brand asset key: `brand_logo_primary_horizontal`
- Current visual-direction asset: `D:\23MySec\brand\visual\ChatGPT Image 2026年8月29日 09_37_10 (1).png`

The PNG remains a visual-direction asset, not a final production SVG. Future development must consume the global asset key rather than copy or redraw a page-specific logo.

## 2. Fixed RFQ Contract

All current public Global Chrome states render the RFQ action:

- Desktop Header: `Request a Quote` is the final navigation action.
- Mobile Header: the fixed order is `Logo | RFQ | Menu`.
- Mobile Menu Open: `Request a Quote` is the final route row.
- Global Footer: Conversion contains `Request a Quote`.
- Global terminal CTA uses accessible Teal and the approved global route.

`RFQ_VISIBILITY = ALWAYS_VISIBLE`.

If `RFQ_ROUTE_READY=false`, the outcome is `RELEASE_BLOCKER`. The visual action is not replaced with another destination; route readiness must be closed before release. This is a release gate, not an alternate public component state.

Contextual RFQ actions inside a page body remain governed by the page template. This addendum fixes Global Chrome only and does not add a new in-body RFQ module.

## 3. Product-body Preservation Contract

The unified 14-grade body remains authoritative. The M-350 visual continues to prove the template without turning one grade example into a new content source.

The following remain unchanged:

- Breadcrumb and every body module from Product Hero through Sample;
- M-350 copy, technical rows, CTA labels and body geometry;
- module-level `verified / pending_verification / not_public` behavior;
- the non-rendering rule for facts that have not passed their evidence gate;
- M-2377 process and application freeze;
- M-996/M-2196 comparison freeze;
- URL, primary keyword, Canonical, Breadcrumb and Product Schema rules;
- Applications, Markets, Documents, Process and related-grade ownership boundaries.

The approved terminal structure remains:

`Sample → Global Footer`

Product detail pages do not render a Final RFQ, embedded RFQ form, RFQ section heading or RFQ in-page-navigation anchor.

## 4. Header and Mobile Menu Application

### 4.1 Desktop

- Reference canvas: 1440px; Header height: 84px.
- Navigation order: `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- `Products` is the current top-level item and uses Bold + visible `CURRENT` + 3px Teal underline; production behavior also requires `aria-current="page"`.
- Breadcrumb remains below the Header as part of the preserved product body.

### 4.2 Mobile 390px

- Header height: 64px; horizontal padding: 16px.
- Header order: `Logo | RFQ | Menu`.
- Menu Open uses Deep Navy and the same route order as Desktop.
- `Products` uses Bold + 4px Teal left marker + visible `CURRENT`; production behavior also requires `aria-current="page"`.
- `Request a Quote` is the final menu row.
- RFQ, Menu, menu rows and Footer controls use a minimum 44px touch target.
- Keyboard focus remains visibly distinguishable with a 3px outline in the reference state.

## 5. Global Footer Application

The product template uses the shared Deep Navy Global Footer.

Approved content:

- Brand statement: `A focused titanium dioxide purchasing platform for international industrial buyers.`
- Explore: Home, Markets, Products, Applications.
- Information: Documents, Resources, About.
- Conversion: Request a Quote.
- Bottom bar: `© 2026 TiO2 Malaysia.`

The Footer does not introduce provisional legal links, a separate Company destination, Process or page-local anchors, research paths, buyer-question lists, grade lists, country lists or internal-prototype wording.

## 6. Formal Visual Manifest

| Deliverable | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_DESKTOP_V0.2.png` | 1440 × 6202px | 439886 | `AFBC6349D01359A2852F9E2F8F2520D0A22D66601279A12614E3C284F0F177EA` |
| `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_MOBILE_390_V0.2.png` | 390 × 9994px | 327502 | `1D95B56045ECD03148BDC1EF11870958D8A72CCEE9E4160B4C3BE132B0702EE4` |
| `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_MENU_STATES_V0.2.png` | 390 × 1760px | 65870 | `8C5A438DE0BFC3F04A032B82871B1A0053833B63E2FD39C4DC482A07C96E2CEE` |

The visual-generation preview and audit remain in `D:\23MySec\99_workspace\product-detail-global-fixed-rfq-task3\` and are not production code or formal visual deliverables.

## 7. Verification Record

| Check | Result |
|---|---|
| Desktop complete-page comparison against V0.1 | `0` changed pixels |
| Mobile complete-page comparison against V0.1 | `0` changed pixels |
| Desktop preserved body | 1440 × 5708px compared; `0` changed pixels |
| Mobile preserved body | 390 × 9310px compared; `0` changed pixels |
| Desktop current item | Products |
| Desktop navigation | Eight approved items in exact order |
| Mobile fixed RFQ surfaces | Header examples `2/2`; Menu Open `1/1`; Footer `1/1` |
| Mobile Products current | Exactly one current item in Menu Open |
| Mobile horizontal overflow | `scrollWidth=390`, viewport `390`; none |
| Mobile state-board clipping | Content bottom 1735px within 1760px canvas |
| Mobile sampled target height | Minimum 44px across 20 sampled targets |
| Visible focus indicator | 3px outline |
| Release blocker annotation | Exactly one |
| Forbidden Footer labels | `0` matches |
| Page terminal order | Sample, then Global Footer |
| Embedded Final RFQ / RFQ form | Absent |

Audit evidence: `D:\23MySec\99_workspace\product-detail-global-fixed-rfq-task3\task3-v0.2-audit.json`.

## 8. Review Boundary

This package passed project-control review and received user approval on 2026-08-30. `GHF-FIXED-RFQ-DETAIL-01 = APPROVED / CLOSED`.

Closure applies only to the fixed-RFQ Global Chrome visual review. It does not change the protected V1.0 product-template documents, unlock product facts or page gates, authorize Grade subpages, Gate 6/7, development, handoff, delivery, publishing or any operation in `D:\16Wordpress_nextjs`. This task stops at the visual endpoint.
