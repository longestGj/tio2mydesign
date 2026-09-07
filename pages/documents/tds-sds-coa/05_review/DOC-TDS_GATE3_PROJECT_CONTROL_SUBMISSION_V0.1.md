# DOC-TDS Gate 3 Project-Control Submission V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Review ID | `DOC-TDS-G3-PCR-01` |
| Date | `2026-09-04` |
| Submitted direction | `APPROACH A / DECISION-FIRST` |
| Project-control disposition | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| P0 / P1 | `0 / 0` |
| Gate 3 | `PENDING USER APPROVAL` |
| Gate 4–10 | `NOT_AUTHORIZED` |

## 1. Candidate presented for approval

The candidate is a complete responsive Gate 3 package using the approved Gate 2 V0.3 Buyer Clean copy and the user's approved decision-first structure.

Complete body order:

`Hero → Direct Answer → Document Choice → Product Grade → Comparison → Request Checklist → Request Process → Buyer Questions → Related Document Paths → Final CTA`

Shared Header, Mobile Header, Mobile Menu and Footer are assembled around the page without page-level redesign.

## 2. What the wireframe does

1. Explains the TDS/SDS/COA difference before asking the buyer to prepare request context.
2. Provides three semantic document checkboxes: TDS, SDS and COA.
3. Keeps `Multiple document needs` as guidance, not a fake fourth file type or select-all action.
4. Provides one optional Product Grade dropdown with the 14 approved Grades.
5. Keeps `Request TDS, SDS or COA` visible in the Hero, context panel and Final CTA.
6. Carries valid selections as editable request prefill without validating receiving-form required fields on this information page.
7. Shows a full comparison table at Desktop/Tablet and three complete document cards at Mobile.
8. Preserves five FAQ questions, three Related Paths and the four-step request process.

## 3. Breakpoint result

| Viewport | Implemented structure | Result |
|---|---|---|
| 1440 Desktop | Two-column Hero; four choice cards; two-column Grade band; comparison table; two-column checklist; horizontal four-step process | PASS |
| 768 Tablet | Stacked Hero; 2 × 2 choice cards; single-column Grade band; readable comparison table; 2 × 2 process | PASS |
| 390 Mobile | Single column; stacked actions/cards; comparison document cards; vertical process; stacked Related Paths | PASS |
| 390 Mobile Menu | Approved eight-item order; Documents active; terminal RFQ; no visible `CURRENT` | PASS |
| State board | Initial; TDS + M-2196; SDS + COA without Grade | PASS |

## 4. Shared Chrome correction closed during review

Visual QA identified that the initial local draft inherited an obsolete Terms link and a one-column Mobile Footer pattern. Those items were not accepted.

The current candidate now uses:

`© 2026 TiO2 Malaysia. | Privacy Policy | Dasar Privasi (BM) | Cookie Policy | Cookie Settings`

- `Cookie Settings` is a semantic button.
- No Terms of Use link or route renders.
- Mobile Footer uses a full-width brand block, Explore/Information in two columns and Procurement/RFQ below.
- Primary and reverse production Logo SVGs match the approved Manifest hashes.

## 5. Evidence and request controls

- Document selection does not imply availability, applicability, approval, currentness or delivery.
- No public inventory, filename, preview, direct download or Grade-document availability matrix appears.
- One Grade only is structured; additional Grades remain supporting context for the receiving form.
- The source-page identity is not buyer editable or displayed.
- Route-unavailable handling remains remove-action-plus-Schema-relation; no disabled CTA or automatic Contact fallback.
- Internal governance annotations are outside Buyer Clean frames.

## 6. Validation summary

| Check | Result |
|---|---|
| Structural/browser contract | PASS |
| Body modules | 10 / 10 at 1440, 768 and 390 |
| Document inputs | 3 semantic checkboxes |
| Grade values | 14 / 14 plus prompt |
| FAQ / Related / Process | 5 / 3 / 4 |
| Horizontal overflow | 0 at 1440 / 768 / 390 |
| Minimum visible target | 44px at 768 and 390 |
| Asset dimensions | 5 / 5 PASS |
| Buyer Clean prohibited-term scan | PASS |
| Original-scale visual inspection | 5 / 5 PASS |

## 7. Superdesign execution note

The Superdesign project, model selection and two approved Logo uploads succeeded. Its draft-generation call was blocked before draft creation because the external account returned `out of credits`. No generated draft or canvas design is claimed. The identical approved design was completed with deterministic local HTML/CSS and browser rendering, then tested and visually inspected.

This external generation limitation does not remove any required Gate 3 deliverable.

## 8. Remaining limitations

- This is grayscale structural evidence, not Gate 4 visual direction or Gate 5 final visual design.
- Related child-page routes and the Request Documents action remain later implementation dependencies subject to their approved route eligibility.
- No D16 code, test, deployment or publication action is included.

## 9. Project-control recommendation

`DOC-TDS-G3-PCR-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`

Recommended user decision:

> Approve the five DOC-TDS Gate 3 wireframe assets, responsive/interaction specification and validation package; close Gate 3 only. Gate 4 remains unauthorized unless separately authorized.

