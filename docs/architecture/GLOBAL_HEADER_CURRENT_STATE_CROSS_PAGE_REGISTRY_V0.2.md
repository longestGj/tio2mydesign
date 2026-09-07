# TiO2 Malaysia Global Header Current-state Cross-page Registry V0.2

## 1. Registry control

| Field | Value |
|---|---|
| Registry ID | `TIO2MY-GLOBAL-CURRENT-STATE-02` |
| Review ID | `GHC-CURRENT-TEXT-REMOVAL-PCR-01` |
| Version | `V0.2` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Project-control approval date | `2026-08-31` |
| Approval source | `GHC-CURRENT-TEXT-REMOVAL-PCR-01` directed re-review |
| Parent review | `GHC-CURRENT-TEXT-REMOVAL-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| Proposed authority | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| State-board text | `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md` |

## 2. Existing visual-package impact

| Page / task | Current parent per surface | Responsive semantic expectation | Visual-package status |
|---|---|---|---|
| Home | Home | One current link in Desktop surface and one in Mobile surface; active accessibility tree exposes one surface | Existing visible-label PNG is historical |
| Product-detail Template | Products | Same surface-scoped rule | Existing visible-label PNG is historical |
| PRODUCT-000 | Products | Same surface-scoped rule | Existing visible-label PNG is historical |
| MARKET-000 | Markets | Same surface-scoped rule | Existing visible-label PNG is historical |
| RES-000 | Resources | Same surface-scoped rule | Existing visible-label PNG is historical |
| APP-000 | Applications | Same surface-scoped rule | Existing visible-label PNG is historical |

## 3. Future page-system binding

| Page system | Current parent per surface |
|---|---|
| Documents | Documents |
| About / Contact | About |
| Conversion / RFQ | Zero unless an explicit later mapping is approved |
| Future Market/Product/Application/Resource child pages | Approved primary-navigation parent |

## 4. Surface-scoped rule for every registered page

1. Each Desktop or Mobile navigation surface contains at most one `aria-current="page"`.
2. An approved mapped route gives each surface exactly one current link.
3. An unmapped route gives each surface zero current links.
4. At the active viewport, only one primary-navigation surface enters the accessibility tree.
5. The inactive surface is inaccessible and unfocusable even if retained in the DOM.
6. A shared DOM/test fixture may therefore contain two total current nodes, but never two within the same surface.

## 5. Frozen cross-page contracts

- Buyer-visible status word count remains 0.
- Desktop Bold + 3px Teal underline remains.
- Mobile Bold + 4px Teal left marker remains.
- Navigation order, 84px/64px geometry, Production SVG Logo, fixed RFQ, Footer and page bodies remain unchanged.
- Historical PNGs remain immutable.

## 6. External-development status

This registry task did not access or modify the external development directory. Project control reports an independent candidate implementation at commit `024f171`. That candidate does not approve this registry, prove conformance or authorise release.

## 7. Review status

`GHC-CURRENT-TEXT-REMOVAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`

The registered page systems may consume the V0.5 authority. This status does not assert implementation, deployment or publication.
