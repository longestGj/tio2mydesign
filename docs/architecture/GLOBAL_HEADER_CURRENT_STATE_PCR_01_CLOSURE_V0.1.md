# GHC Current-state PCR-01 Closure Record V0.1

## Closure control

| Field | Value |
|---|---|
| Closure ID | `GHC-CURRENT-TEXT-REMOVAL-PCR-01-CLOSE-01` |
| Review ID | `GHC-CURRENT-TEXT-REMOVAL-PCR-01` |
| Decision | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Approval date | `2026-08-31` |
| Authority | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| Release status | Not deployed or published |

Project control confirmed that P0-01 and P1-01 are resolved. V0.5 is the formal Global Chrome authority for removal of the buyer-visible current-page status word.

## Approved contract

- Desktop: Bold + 3px Teal underline.
- Mobile Menu: Bold + 4px Teal left marker.
- Buyer-visible removed status word count: 0.
- Each navigation surface: at most one `aria-current="page"`.
- Mapped route: one current link per Desktop/Mobile surface.
- Active viewport: one accessible primary-navigation surface and one current link.
- Inactive surface: excluded from the accessibility tree and keyboard focus.
- Navigation, 84px/64px geometry, Production SVG Logo, fixed RFQ, Footer and page body: unchanged.

## Reviewed payload and post-closure hashes

Project control reviewed the pre-closure payload hashes recorded in `GLOBAL_HEADER_CURRENT_STATE_PCR_01_VALIDATION_V0.1.md`. The following post-closure hashes reflect only the directed governance-status, approval-source, closure wording and checklist-state synchronization:

| File | Bytes | Post-closure SHA-256 |
|---|---:|---|
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | 7,235 | `cc236f47018a68771856fdbaf5553517f63959774e0e8819130e66e2b1049f18` |
| `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md` | 3,682 | `2214bf1bcbe7646e8727a8e75e5e2a1552047e838d861891d0441b4895401b94` |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md` | 3,237 | `ea3ccc7d90fd6ebb28be562c9fabfdd4663d360aa18e66590a6297fb14f697b7` |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PROJECT_CONTROL_SUBMISSION_V0.2.md` | 2,586 | `b12c92f8cc87b1f7dbcafeca6bae2d29d2c4883bf52b751388fcbb8ea63fb54e` |

The pre-closure validation record remains immutable evidence and is not silently rewritten.

## Development boundary

This specification task did not access or modify `D:\16Wordpress_nextjs`. An independent candidate implementation at commit `024f171` exists as reported by project control. Its existence does not mean the approved specification has been implemented correctly, deployed or published.

