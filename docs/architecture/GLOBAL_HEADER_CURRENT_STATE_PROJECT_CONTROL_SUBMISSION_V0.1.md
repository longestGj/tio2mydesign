# Global Header Current-page State Revision — Project Control Submission V0.1

## Submission control

| Field | Value |
|---|---|
| Review ID | `GHC-CURRENT-TEXT-REMOVAL-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| User decision date | 2026-08-31 |
| Decision | Remove buyer-visible `CURRENT` text from Desktop Header and Mobile Menu |
| Formal specification | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.4.md` |
| State-board text | `pages/home/04_planning/15_global_header_footer_current_state_component_states_v0.4.md` |
| Cross-page registry | `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.1.md` |
| Development | Not started; `D:\16Wordpress_nextjs` not accessed |

## Controlled change

- Desktop current page: Bold + 3px Teal underline.
- Mobile Menu current page: Bold + 4px Teal left marker.
- Production semantics: `aria-current="page"` remains mandatory.
- Buyer-visible status word: removed.

No navigation item, order, Header geometry, Logo, fixed RFQ, Footer element or page-body content is changed.

## Affected existing visual packages

| Package | Current navigation parent |
|---|---|
| Home | Home |
| Product-detail Template | Products |
| PRODUCT-000 | Products |
| MARKET-000 | Markets |
| RES-000 | Resources |
| APP-000 | Applications |

Documents, About / Contact and Conversion are registered for future application of the same rule. Conversion pages must not infer a false current navigation parent.

## Historical state-board verification

The following immutable PNGs retain their prior hashes and are now classified as historical static evidence for the visible-label treatment:

| Asset | Bytes | SHA-256 |
|---|---:|---|
| `GLOBAL_CHROME_DESKTOP_STATES_V0.2.png` | 110,683 | `1FAE58F723D43BF804A81A11BA8EDF4FB79142F5236FB5185DEEA384FD284FC2` |
| `GLOBAL_CHROME_MOBILE_STATES_V0.2.png` | 60,799 | `4F573E7CAF7ACB587E1EE76797F9C6C32817A0BE10CD4B1205D77D1B809CF724` |
| `GLOBAL_CHROME_DESKTOP_STATES_V0.3.png` | 110,734 | `A6F60D33E70B762BD3B2E2816FE0BB7947BC432FB1E93992E7A5182BE4E24BC4` |
| `GLOBAL_CHROME_MOBILE_STATES_V0.3.png` | 60,728 | `ADC330D8E074585844FF1A693C00D22FE6A7C454371912C58A8C9D1A474B5723` |

No PNG was modified, overwritten, deleted or regenerated in this specification revision.

## Directed validation

| Check | Result |
|---|---|
| New specification records exact Desktop rule | PASS |
| New specification records exact Mobile Menu rule | PASS |
| `aria-current="page"` remains mandatory | PASS |
| Navigation order unchanged | PASS |
| 84px / 64px geometry frozen | PASS |
| Production SVG Logo frozen | PASS |
| Fixed RFQ frozen | PASS |
| Footer frozen | PASS |
| Page body frozen | PASS |
| Six existing packages registered | PASS |
| Three future page-system groups registered | PASS |
| Four shared historical PNG hashes retained | PASS |
| New PNG / code / deployment output | 0 |

## Project-control decision requested

Project control is asked to review the specification, state-board text, cross-page impact and historical evidence classification. Until that review completes:

`GHC-CURRENT-TEXT-REMOVAL-01 = DRAFT_FOR_PROJECT_CONTROL_REVIEW`

The task must not be marked `PASS`, `APPROVED`, `CLOSED`, implemented or published by this submission.

