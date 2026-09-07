# GRADE-M200 Gate 7 Corrected Runtime Manifest V0.2

| Field | Value |
|---|---|
| Manifest | `GRADE-M200-G7-MANIFEST-02` |
| Page/date/status | `GRADE-M200` / 2026-09-02 / `CURRENT_CORRECTED_SOURCE / PENDING_CONTROLLER_REVIEW` |
| Review | `GRADE-M200-G7-PCR-02` |
| Supersedes | V0.1 for Gate 8 runtime consumption only; V0.1 remains immutable history |
| Gate 6-7 | previously closed by `GRADE-M200-G7-PCR-01`; targeted record-state correction pending rebind |
| Gate 8 | `PAUSED_PENDING_CONTROLLER_REBIND` |
| M-996/Gate 10 | `LOCKED / NOT_AUTHORIZED` |

## V0.2 changed files

| Role | File | SHA-256 |
|---|---|---|
| Runtime contract | `pages/products/detail-template/06_handoff/GRADE-M200_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.2.json` | `A19BDC03170470EECCC46497AFBBE4FFEF6288DB59C9C5F6163017C3DF6D8320` |
| Handoff amendment | `pages/products/detail-template/06_handoff/GRADE-M200_GATE7_HANDOFF_PACKAGE_V0.2.md` | `64E304E82A87D46143154426BAFDEB58D3C5B17819C7E79D5E414BEF83F75378` |
| Acceptance amendment | `pages/products/detail-template/06_handoff/GRADE-M200_GATE7_ACCEPTANCE_MATRIX_V0.2.md` | `BEDA65C5250AF1D5A87CE908F614147A98B45AABEC5E314C881114A4096B942C` |
| Fresh validation | `pages/products/detail-template/06_handoff/GRADE-M200_GATE7_FRESH_VALIDATION_V0.3.md` | `ECD852B0C55D66FE8C1E36F0ED4D6B446D106E089279BF6CE811348580A3711E` |
| Review submission | `pages/products/detail-template/06_handoff/GRADE-M200_GATE6_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md` | `F7E5CAC6E0AAC1E0BBFBF4A9E5C6B12EE986A9FEB0F1133FF634BCEF5E3E8A88` |

## Contract binding

| Hash | Value |
|---|---|
| Raw SHA-256 | `A19BDC03170470EECCC46497AFBBE4FFEF6288DB59C9C5F6163017C3DF6D8320` |
| Canonical algorithm | `sha256-json-recursive-key-sort-v1` |
| Canonical SHA-256 | `815F920541B53A6038C1B214F41F35B55F654C74BBDECEC66BF5A54585690369` |
| Raw/canonical bytes | `11574 / 11457` |

## Exact V0.1 → V0.2 semantic diff

| JSON path | V0.1 | V0.2 |
|---|---|---|
| `identity.recordState` | `candidate_for_preview` | `approved_for_preview` |

Recursive structural diff path count is exactly 1. No public copy, product fact, application, evaluation, technical value, URL, canonical, prefill, route, SEO/GEO/Schema direction, source approval, evidence ledger or release-control value changed.

## V0.1 immutable history anchors

| Role | File | SHA-256 |
|---|---|---|
| V0.1 Manifest | `pages/products/detail-template/06_handoff/GRADE-M200_GATE7_MANIFEST_V0.1.md` | `B35EC854CE29DF2EA26183119AFC042C6563CFE2B739B68BE107280AA77B7EF4` |
| V0.1 raw contract | `pages/products/detail-template/06_handoff/GRADE-M200_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json` | `A35E9EB561F40614449BA1E29E10F6086AFA0411FCB1C2C151E2E134D6C9A9E1` |
| V0.1 canonical contract | `sha256-json-recursive-key-sort-v1` | `AEC857DC695963D326F78B26B7D7C5922E426491AC6EF2D9B719C31CE09FD087` |
| Gate 6-7 closure | `pages/products/detail-template/05_review/GRADE-M200_FAST_TRACK_GATE6_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md` | `5FE10DAD58F2682B4F1D60930C090004DED8BA1C8F6B16480868A05C537A5748` |
| Original Gate 8 authorization | `pages/products/detail-template/05_review/GRADE-M200_GATE8_AUTHORIZATION_AND_HANDOFF_RECORD_V0.1.md` | `F6308A23D40C2F7C714D408C1FB022D74FC5B059D4438B4070EBB81A8FA46445` |
| Current handoff status history | `pages/products/detail-template/05_review/GRADE-M200_CURRENT_GATE8_HANDOFF_MANIFEST_V0.2.md` | `D38F488198A2B3500B269733BEC8AD883C8C2234B197C6F56AC34D57B0B8DBDF` |

## Unchanged source/evidence anchors

| Role | File | SHA-256 |
|---|---|---|
| Source PDF | `docs/7.27 马来全套TDS +应用指南/7.27/TDS_CR-200_2024 V3.pdf` | `1607AB81ADD23973B15CA2808F637D7B1FAE55EEE8A305606FA0312B6B3381D9` |
| User source approval | `pages/products/detail-template/05_review/GRADE-M200_CR200_SOURCE_USER_APPROVAL_V0.1.md` | `E1A0A4A8102B308AB32994B7F487A79CFA3346787C7B5FD42DCAA5444CC0C815` |
| Visible-content resolution | `pages/products/detail-template/05_review/GRADE-M200_GATE1_VISIBLE_CONTENT_RESOLUTION_V0.1.md` | `4EE52EAE20006B9F83C42D55A406E5D0FBE1479D977DE61A652AF4D3C6BF1B08` |
| Full public copy | `pages/products/detail-template/04_planning/GRADE-M200_GATE2_FULL_COPY_V0.1.md` | `172A437DD7EF7F3B83DE8CE7C2B932371C343CB6F06DDC2BDBFC4967C8E0B901` |
| SEO/GEO/Schema | `pages/products/detail-template/04_planning/GRADE-M200_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | `789698C3B9F18B589EBCE0A59CED31D94378E1449301510DA551839167657371` |

## Runtime and scope controls

- Runtime may consume only V0.2 with exact `recordState = approved_for_preview` and exact raw/canonical binding.
- The shared validator must not be changed to accept `candidate_for_preview`.
- Candidate, missing, unknown or mismatched state must fail closed with no Grade/scope fallback.
- Preview remains `noindex,nofollow`; sitemap authorization remains false.
- Public content counts and forbidden-output counts remain those approved in V0.1.
- M-996 artifacts created or modified by this correction: 0.
- D16 and actual Gate 8 implementation were not touched.

Only Controller 02 may approve this correction and rebind the Gate 8 handoff authority.
