# CONV-DOC Gate 9 Project-control Return V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Decision date | 2026-09-04 |
| User authority | Gate 9 expressly authorized by the user on 2026-09-04 |
| Reviewed submission | `CONV-DOC_GATE9_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` |
| Decision | `CONDITIONAL_RETURN / TARGETED_DEVELOPMENT_REVISION_REQUIRED` |
| Gate 9 | `READ_ONLY_QA_IN_REVIEW / NOT_APPROVED` |
| Gate 10 / deployment / publication / DNS / indexing | `NOT_AUTHORIZED` |

## 1. Project-control finding

Project control independently confirmed `DOC-G9-P1-01`.

The buyer-entered optional Application / Industry field may remain free text. The defect is limited to trusted URL prefill: the current implementation accepts `application_industry`, `product_grade` and `source_page_id` independently, so an unsupported or mismatched relationship can be rendered as context from a previous selection or supported link.

This conflicts with the approved Gate 7 supported-prefill and safe-discard contract and with the current PRODUCT V0.3 relationship authority. In particular, M-2377 may use only neutral Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate context. Specialty Materials remains `DO_NOT_RENDER`; Rubber remains evidence-registration-only.

## 2. Required targeted correction

1. Preserve free buyer entry in the form field.
2. Validate trusted URL prefill against the current approved product--application/process relationships.
3. Discard unsupported, frozen, `NO_PUBLIC_MAPPING`, arbitrary and mismatched relationship values rather than rendering or forwarding them.
4. Bind `source_page_id` coherently to the visible Grade/application context or discard the attribution.
5. Add unit and production-browser negative cases for Specialty Materials, Rubber, arbitrary text and mismatched source attribution, plus positive cases for all six approved M-2377 contexts.
6. Return a new implementation commit and fresh evidence for Gate 9 re-review.

The correction has been sent to the existing shared development task `01My首页开发`. No D23 task is authorized to modify D16 code.

## 3. Preserved release blockers

- production receiver ownership/configuration and positive acknowledgement;
- Privacy/data-flow parity with the actual receiver;
- authorized WordPress singleton migration;
- separate Gate 10 production release, robots, sitemap and indexing authorization.

## 4. Current disposition

`DOC-G9-P1-01 = PROJECT_CONTROL_CONFIRMED / RETURNED_TO_DEVELOPMENT`

`CONV-DOC Gate 9 = NOT_APPROVED / RE-REVIEW_REQUIRED_AFTER_FIX`

