# GRADE-M510 Gate 3 Wireframe QA V0.1

## 1. Control

| Field | Value |
|---|---|
| QA ID | `GRADE-M510-G3-WF-QA-01` |
| Date | `2026-09-02` |
| Scope | Gate 3 responsive source, four rendered assets and content-structure checks |
| Status | `SELF_CHECK_PASS / PENDING_PROJECT_CONTROL_AND_USER_REVIEW` |

## 2. Automated viewport checks

| Viewport | Client width | Scroll width | Horizontal overflow | Full page height | H1 | TDS rows | Minimum visible action height |
|---:|---:|---:|---|---:|---:|---:|---:|
| 1440 | 1440 | 1440 | `NO` | 4325 | 1 | 12 | 46px |
| 768 | 768 | 768 | `NO` | 5598 | 1 | 12 | 46px |
| 390 | 390 | 390 | `NO` | 7405 | 1 | 12 | 46px |

Mobile Menu test: trigger changes `aria-expanded` from `false` to `true`; menu display changes from `none` to `grid`.

## 3. Visual inspection

| Check | Result |
|---|---|
| Desktop complete top-to-Footer structure | PASS |
| Tablet complete top-to-Footer structure | PASS |
| Mobile complete top-to-Footer structure | PASS |
| Mobile Menu open state | PASS |
| Real-length H1, paragraphs and technical labels | PASS |
| Hero actions visible without excessive post-button blank region | PASS |
| Technical data remains readable without horizontal scrolling | PASS |
| Conditional omissions leave no empty heading or spacer | PASS |
| Shared Header/Footer assembly visible | PASS |

## 4. Content parity

- Approved buyer-visible formulation heading appears exactly as `What to Evaluate in Your Formulation`.
- The obsolete public heading `Evaluation Priorities` does not appear.
- All five approved Application direction groups are present.
- All twelve M-510 typical technical rows are present.
- Product-specific Origin, Not Recommended, Related Grades, packaging/loading and legacy contact identity are absent.
- No embedded RFQ form is present.

## 5. Result

`GRADE-M510-G3-WF-QA-01 = SELF_CHECK_PASS`

The assets are ready for project-control and user review. This self-check does not approve Gate 3 or authorize Gate 4.
