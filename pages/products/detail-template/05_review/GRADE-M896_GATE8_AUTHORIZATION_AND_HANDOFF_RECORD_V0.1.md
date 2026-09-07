# GRADE-M896 Gate 8 Authorization and Handoff Record V0.1

## 1. Control

| Field | Value |
|---|---|
| Record ID | `GRADE-M896-G8-HANDOFF-01` |
| Date | `2026-09-02` |
| Page | `GRADE-M896` / `/products/m-896/` |
| Standing user authority | `PRODUCT-DETAIL-12-GRADE-AUTO-SERIAL-01 = USER_AUTHORIZED / ACTIVE` |
| Project-control closure | `GRADE-M896-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8 | `SINGLE_GRADE_USER_AUTHORIZED / HANDED_OFF` |
| Lifecycle | `HANDED_OFF` |
| Destination task | `01My首页开发` / thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| Active Grade | M-896 only |
| Next Grade | M-895 locked / not started |
| Gate 10 | Not authorized |

## 2. Handed-off authority

| File | SHA-256 |
|---|---|
| `pages/products/detail-template/05_review/GRADE-M896_FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md` | `93A0D0EDEF9E91234B4A9A51D6DC7A54FC52932DACC56FFCC25E123FC49ABD19` |
| `pages/products/detail-template/06_handoff/GRADE-M896_GATE7_MANIFEST_V0.2.md` | `B9BB7892197EAC742B6DFCF7557024C194358B46A3CF8D2BC05337440BE81852` |
| `pages/products/detail-template/06_handoff/GRADE-M896_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.2.json` | `BA735FA0570E81F8055C76B7AC7B434498446BBD5540A1F2A32F0A9E6F3EC03A` |
| `pages/products/detail-template/06_handoff/GRADE-M896_GATE7_HANDOFF_PACKAGE_V0.2.md` | `AB7AACB91CC2569BADC63782CD780EF7ED43E66E37EF5F765232D2BB28DD0133` |
| `pages/products/detail-template/06_handoff/GRADE-M896_GATE7_ACCEPTANCE_MATRIX_V0.2.md` | `30468D84E07B0263D28C7EB1F11883743F1ADBA70150521F0144B58CEF18F4E0` |

## 3. Authorized implementation scope

- Add M-896 only to the existing single Product Detail approval registry and preview route.
- Add one independent `tio2-my` record bound to the approved content contract and hash.
- Generalize technical rows backward-compatibly for M-896 `property/value/testMethod` while preserving M-350/M-510 legacy output.
- Produce all Gate 8 test, regression, visual, responsive, accessibility, hash and clean-worktree evidence required by the approved acceptance matrix.
- Keep the other eleven unfinished Grades at 404/fail-closed.

## 4. Prohibited scope

- No M-895 or later Grade preparation or implementation.
- No buyer-visible copy, values, module-order, SEO, Schema or omission changes outside the approved M-896 contract.
- No fallback across Grade or `site_scope`.
- No Gate 10, deployment, production data write, DNS, public release, sitemap inclusion or indexing.

## 5. Required return

The external task must return an implementation commit, clean worktree, changed-file list, full test/build/lint/typecheck results, WordPress/GraphQL evidence, M-350/M-510 regressions, M-896 screenshots at all required widths, Schema/metadata/404/isolation evidence and all current release blockers.

After return, Controller 02 performs Gate 9 read-only QA and may issue a fix return. M-895 remains locked until Gate 9 closes.

`GRADE-M896-G8-HANDOFF-01 = USER_AUTHORIZED / HANDED_OFF`

`GRADE-M896 lifecycle = HANDED_OFF`

`M-895 = LOCKED / NOT_STARTED`
