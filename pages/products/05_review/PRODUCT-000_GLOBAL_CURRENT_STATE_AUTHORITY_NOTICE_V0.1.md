# PRODUCT-000 Global Current-state Authority Consumption Notice V0.1

## Notice control

| Field | Value |
|---|---|
| Notice ID | `PRODUCT-000-GLOBAL-CURRENT-STATE-NOTICE-01` |
| Source owner | Home / Global Chrome |
| Source review | `GHC-CURRENT-TEXT-REMOVAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Approval date | `2026-08-31` |
| Status | `FORMAL_AUTHORITY_AVAILABLE_FOR_PRODUCT_CONSUMPTION` |
| PRODUCT-000 change | None performed by this notice |

PRODUCT-000 may now consume the formal current-page authority below. This notice resolves the pending Global Chrome authority availability only; it does not approve PRODUCT-000, modify its Gate status, or assert that an external candidate has been deployed.

## Formal paths, versions and hashes

| Role | Formal path | Version | Bytes | SHA-256 |
|---|---|---:|---:|---|
| Global Chrome authority | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | V0.5 | 7,235 | `cc236f47018a68771856fdbaf5553517f63959774e0e8819130e66e2b1049f18` |
| Written state board | `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md` | V0.5 | 3,682 | `2214bf1bcbe7646e8727a8e75e5e2a1552047e838d861891d0441b4895401b94` |
| Cross-page registry | `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md` | V0.2 | 3,237 | `ea3ccc7d90fd6ebb28be562c9fabfdd4663d360aa18e66590a6297fb14f697b7` |
| Project-control closure | `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PROJECT_CONTROL_SUBMISSION_V0.2.md` | V0.2 | 2,586 | `b12c92f8cc87b1f7dbcafeca6bae2d29d2c4883bf52b751388fcbb8ea63fb54e` |

## PRODUCT-000 consumption contract

- Primary navigation parent: `Products`.
- Desktop Products current state: Bold + 3px Teal underline.
- Mobile Menu Products current state: Bold + 4px Teal left marker.
- Buyer-visible removed status word count: 0.
- Each Desktop/Mobile navigation surface: at most one `aria-current="page"`.
- Mapped PRODUCT-000 route: one current link in each surface.
- Active viewport accessibility tree: one primary-navigation surface and one current link.
- Inactive surface: inaccessible and unfocusable.

## Historical PRODUCT visual boundary

PRODUCT-000 PNGs and historical specifications showing the former visible status word remain preserved as static evidence. Their current-state label treatment is superseded by V0.5; their approved evidence for page body, Header geometry, fixed RFQ, Footer and other unchanged properties is not automatically invalidated.

## External candidate boundary

Project control reports an independent external candidate implementation at commit `024f171`. PRODUCT-000 may use the formal authority above to evaluate or update its own handoff records, but the commit is not approved, released or published by this notice.

