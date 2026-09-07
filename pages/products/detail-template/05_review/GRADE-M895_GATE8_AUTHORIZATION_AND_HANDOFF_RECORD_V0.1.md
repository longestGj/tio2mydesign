# GRADE-M895 Gate 8 Authorization and Handoff Record V0.1

## 1. Control

| Field | Value |
|---|---|
| Record ID | `GRADE-M895-G8-HANDOFF-01` |
| Page | `GRADE-M895` / `/products/m-895/` |
| Authority | `PRODUCT-DETAIL-12-GRADE-AUTO-SERIAL-01` |
| Prerequisite closure | `GRADE-M895-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Decision | `CONTROLLER_AUTHORIZED / HANDED_OFF` |
| Destination | `01My首页开发` / thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| Lifecycle | `HANDED_OFF` |
| Gate 9 | `WAITING_FOR_PRODUCTION_EQUIVALENT_RESULT` |
| Next Grade | `M-340 = LOCKED / NOT_STARTED` |
| Date | 2026-09-02 |

## 2. Exact handoff authority

The external development task may implement only the approved M-895 package:

- `pages/products/detail-template/06_handoff/GRADE-M895_GATE7_MANIFEST_V0.1.md`
- `pages/products/detail-template/06_handoff/GRADE-M895_GATE7_HANDOFF_PACKAGE_V0.1.md`
- `pages/products/detail-template/06_handoff/GRADE-M895_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json`
- `pages/products/detail-template/06_handoff/GRADE-M895_GATE7_ACCEPTANCE_MATRIX_V0.1.md`
- `pages/products/detail-template/05_review/GRADE-M895_FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md`

Approved raw contract SHA-256: `CCBAB8EF7BEBB5641F409CF0925E861D57990EB53186448473754E88B48E3A5A`.

Approved canonical SHA-256: `C05AFEDE37CD69B5DA4AE5E77C3749093CCD7DEBC004424800FE870747C68E11`.

## 3. Implementation and return requirements

- Reuse the existing dynamic Product Detail route, shared component and `site_scope=tio2-my` isolation.
- Authorize M-895 only; do not prepare M-340 or any later Grade.
- Preserve exact approved copy, metadata, CTA/prefill, 3 applications, 2 evaluation groups and 11 value/testMethod rows.
- Product Schema values must come from `row.value`; test methods cannot replace them.
- Omit unavailable receiver/route actions and complete optional modules without empty wrappers.
- Keep M-350/M-510/M-896 visual, HTML, JSON-LD and route behavior unchanged.
- Return unit/integration/E2E, typecheck, changed-file lint, production build, WordPress/GraphQL, responsive, accessibility, screenshot-hash, 404 and clean-worktree evidence.
- Keep M-895 `PREVIEW_ONLY`, noindex and outside sitemap.

No Gate 10, deployment, production write, DNS, public release or indexing operation is authorized.

`GRADE-M895-G8-HANDOFF-01 = CONTROLLER_AUTHORIZED / HANDED_OFF`
