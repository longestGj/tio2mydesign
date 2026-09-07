# TiO2 Malaysia Global Header Current-state Cross-page Registry V0.1

## 1. Registry control

| Field | Value |
|---|---|
| Registry ID | `TIO2MY-GLOBAL-CURRENT-STATE-01` |
| Review ID | `GHC-CURRENT-TEXT-REMOVAL-01` |
| Version | `V0.1` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Decision date | 2026-08-31 |
| Proposed authority | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.4.md` |
| State-board text | `pages/home/04_planning/15_global_header_footer_current_state_component_states_v0.4.md` |

## 2. Existing visual-package impact

| Page / task | Current item | Existing package | V0.4 impact |
|---|---|---|---|
| Home | Home | Home full-page, Mobile Menu and shared Global Chrome boards | Visible label becomes historical; future evidence uses Bold + Desktop underline / Mobile left marker only |
| Product-detail Template | Products | Product-detail Desktop, Mobile and Menu state assets | Same controlled current-state replacement |
| PRODUCT-000 | Products | Hub complete pages and Global Chrome states | Same controlled current-state replacement |
| MARKET-000 | Markets | Market route-safe/full and component states | Same controlled current-state replacement |
| RES-000 | Resources | Resources complete pages and Menu Open state | Same controlled current-state replacement |
| APP-000 | Applications | Applications complete pages and Global Chrome states | Same controlled current-state replacement |

No existing PNG is overwritten. The prior fixed-RFQ, Footer and page-body approvals remain valid; only the former visible label treatment is superseded after project-control approval of V0.4.

## 3. Future page-system binding

| Page system | Required current item |
|---|---|
| Documents | Documents |
| About / Contact | About |
| Conversion / RFQ | No inferred parent marker without an approved mapping |
| Future Markets, Products, Applications and Resources child pages | Their approved primary navigation parent |

All future consumers must apply `aria-current="page"` to the current link while keeping the buyer-visible status word absent.

## 4. Unchanged cross-page contracts

- Desktop navigation order remains fixed.
- Desktop / Mobile Header geometry remains 84px / 64px.
- Production SVG Logo bindings remain fixed by the approved Logo Manifest and Addendum.
- RFQ remains fixed in Desktop Header, Mobile Header, Mobile Menu and Footer.
- Footer structure and wording remain unchanged.
- Page content, URL, keyword, SEO/GEO, Schema, facts, routes, localization and release gates remain unchanged.

## 5. Historical evidence classification

The 26 PNG assets in `GLOBAL_HEADER_FOOTER_CROSS_PAGE_REVIEW_V0.2.md`, together with the V0.3 Home Global Chrome boards, remain immutable historical static evidence. Their current-page label pixels must not be used as the production reference after V0.4 is approved.

The new specification and registry do not invalidate their evidence for Logo placement, Header/Footer geometry, fixed RFQ, page-body protection or responsive layout.

## 6. Project-control review request

Project control is asked to confirm:

1. the visible-label removal is correctly limited to Desktop Header and Mobile Menu current-page treatment;
2. the structural and semantic replacements are complete;
3. the six existing visual packages and three future page systems are registered;
4. historical PNG status is clear; and
5. no frozen Global Chrome or page-body contract has changed.

`GHC-CURRENT-TEXT-REMOVAL-01` must remain `DRAFT_FOR_PROJECT_CONTROL_REVIEW` until that review is completed.

