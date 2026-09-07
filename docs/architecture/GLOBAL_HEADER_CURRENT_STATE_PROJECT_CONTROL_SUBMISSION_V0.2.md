# Global Header Current-page State Revision — Project Control Submission V0.2

## Submission control

| Field | Value |
|---|---|
| Review ID | `GHC-CURRENT-TEXT-REMOVAL-PCR-01` |
| Parent review | `GHC-CURRENT-TEXT-REMOVAL-01 = CONDITIONAL_RETURN / TARGETED_REVISION_REQUIRED / NOT_APPROVED` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Date | 2026-08-31 |
| Project-control approval date | `2026-08-31` |
| Decision source | `GHC-CURRENT-TEXT-REMOVAL-PCR-01` directed re-review |
| Specification | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| State-board text | `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md` |
| Cross-page registry | `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md` |

## P0-01 resolution

The semantic contract is now scoped per navigation surface:

- each surface has at most one `aria-current="page"`;
- mapped routes give one current link to each Desktop/Mobile surface;
- unmapped routes give zero;
- the active viewport accessibility tree exposes one primary-navigation surface and one current link;
- the inactive surface is excluded from the accessibility tree and keyboard focus; and
- a shared DOM/test fixture may contain two total current nodes when one belongs to each surface.

Acceptance scans now distinguish full-DOM count, per-surface count and active-accessibility-tree count.

## P1-01 resolution

The global “development not started” statement has been removed. The corrected boundary is:

- this specification task did not access or modify `D:\16Wordpress_nextjs`;
- project control reports an independent candidate implementation at commit `024f171`; and
- the candidate implementation does not approve the specification, prove conformance, authorise release or change this review status.

## Locked contracts retained

- Desktop current visual: Bold + 3px Teal underline.
- Mobile current visual: Bold + 4px Teal left marker.
- Buyer-visible status word count: 0.
- `aria-current="page"`: retained under the revised surface contract.
- Historical PNGs: retained without overwrite.
- Navigation, 84px/64px geometry, Production SVG Logo, fixed RFQ, Footer and page body: unchanged.

## Project-control decision closure

Project control re-reviewed P0-01, P1-01 and the fresh validation record and closed the review:

`GHC-CURRENT-TEXT-REMOVAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`

This closes the specification review only. The independent development candidate remains separate and is not described as deployed, released or published.
