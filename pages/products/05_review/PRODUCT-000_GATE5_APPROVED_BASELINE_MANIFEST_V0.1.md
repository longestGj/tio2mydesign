# PRODUCT-000 Gate 5 Approved Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / Titanium Dioxide Products |
| URL | `/products/` |
| Date | `2026-08-31` |
| Gate 5 | `APPROVED` |
| User approval date | `2026-08-31` |
| Parent review | `PRODUCT-G5-BUYER-FINAL-01 = APPROVED / CLOSED` |
| Page visual endpoint | `APPROVED_GATE_5_BASELINE` |
| Gate 6 | Authorized separately; does not change this immutable baseline |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |

## 1. Approved specification and assets

| Role | File | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| Formal visual/content contract | `pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.12.md` | Markdown | — | Recorded by current file state |
| Desktop Buyer Clean | `pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_DESKTOP_BUYER_FACING_FINAL_V0.16.png` | 1440×5353 | 393290 | `5AB83A4BC503CD2326A622AB8E87AFAA848F332413436C617E869D8DD2325578` |
| Mobile Buyer Clean | `pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_MOBILE_390_BUYER_FACING_FINAL_V0.15.png` | 780×12867; 390px logical at 2× | 634563 | `D17B6AF0D49007BDFB89D48BD583151CC248AFCB0B182423881F82E71AD93B62` |

The approved Mobile asset remains V0.15 because the V0.16 revision was Desktop-only. This is an intentional mixed-version pair, not a missing Mobile export.

## 2. Relationship authority

| Input | Status |
|---|---|
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | `APPROVED_RELATION_BASELINE / USER_APPROVED` |
| Matrix SHA-256 | `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` |
| Matrix shape | 84 unique grade+application relations; 14 × 6 |
| Application counts | 30 verified / 0 conflict / 54 no-public |
| Process counts | 8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation |

M-2377 may render neutrally in five Applications and Sulfate; Specialty Materials remains hidden and Rubber remains evidence-only. M-996/M-2196 comparison hold remains open.

## 3. Closed directed reviews

| Review | Status |
|---|---|
| `PRODUCT-G5-BUYER-FINAL-PCR-01` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `PRODUCT-G5-BUYER-FINAL-UX-01` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `PRODUCT-G5-BUYER-FINAL-UX-02` | `SUPERSEDED_BY_USER_DIRECTED_REVISION_BEFORE_PROJECT_CONTROL_DECISION` |
| `PRODUCT-G5-BUYER-FINAL-UX-03` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `PRODUCT-G5-BUYER-FINAL-UX-04` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |

Historical V0.9–V0.15 assets and specifications remain available for traceability and are not deleted or overwritten.

## 4. Approved visual/content facts

- Global Chrome displays Products current state and fixed RFQ.
- Buyer-facing Footer title is `PROCUREMENT`; public `CONVERSION` is absent.
- Hero explains fourteen grades and four navigation groups.
- Selector supports six Applications and neutral Grade-to-Review results.
- Process area distinguishes Chloride, Sulfate and CR-901 Vapor-phase oxidation.
- Directory contains fourteen unique grades in four 6/5/2/1 navigation groups.
- Every directory row contains grade, exact neutral application/process description and `View Grade`.
- Five Evaluation steps use the approved compact sequence.
- Buyer Questions contains five exact Q/A contracts; one expanded and four collapsed visually.
- Final RFQ is lightweight and does not assert quotation, availability or document approval.

## 5. Immutable and open boundaries

- Gate 6 review does not rewrite this Manifest or its PNGs.
- Global Chrome PNG is layout and visual-direction evidence, not a production SVG Logo.
- Production SVG Logo is `BLOCKING_FOR_FINAL_HANDOFF/RELEASE_ONLY` until separately approved.
- Route readiness, implementation semantics, metadata emission and Schema output are not proven by static PNGs.
- Gate 7, Process/Grade child pages, code, CMS, development, deployment and publication require separate authorization.
- `D:\16Wordpress_nextjs` remains untouched.
