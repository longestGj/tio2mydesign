# GRADE-M510 Fast-Track Gate 7 Manifest V0.1

## 1. Control

| Field | Value |
|---|---|
| Manifest ID | `GRADE-M510-FAST-G7-MANIFEST-01` |
| Page ID | `GRADE-M510` |
| Date | `2026-09-02` |
| Status | `CURRENT / PROJECT_CONTROL_VALIDATED / HANDED_OFF` |
| Gate 8 | `USER_AUTHORIZED` |
| Release | `PREVIEW_ONLY / GATE10_NOT_AUTHORIZED` |

## 2. Authoritative package files

| Role | File | SHA-256 |
|---|---|---|
| User fast-track decision | `pages/products/detail-template/05_review/PRODUCT-DETAIL-TEMPLATE-REUSE-FAST-TRACK-DECISION_V0.1.md` | `0C17CE363142D3502BE43D9809F12577C29494F50C5CFE4246E0E91D0339245E` |
| Machine-readable M-510 payload | `pages/products/detail-template/06_handoff/GRADE-M510_PRODUCT_DETAIL_CONTENT_CONTRACT_V0.1.json` | `09B41E1AB403372495D4BE8DB3DDD1260A710E310327FC289D8D344B05AB095C` |
| M-510 developer handoff | `pages/products/detail-template/06_handoff/GRADE-M510_FAST_TRACK_GATE7_HANDOFF_PACKAGE_V0.1.md` | `03E99C840E15B2F6F76FA8ED59BE4C7C8D7722B83B0227559D67D9876E48FB23` |
| Approved Gate 2 full copy | `pages/products/detail-template/04_planning/GRADE-M510_GATE2_FULL_COPY_V0.1.md` | `4447050CD7A4F98002752B9983DC9028303D0E9381D7D5486974757D66BF2067` |
| M-510 TDS validity amendment | `pages/products/detail-template/05_review/GRADE-M510_GATE1_TDS_VALIDITY_AMENDMENT_V0.1.md` | `EA851D84218B54F6F54BC7355FD594FC9BAAE0260C885EE2B452B11E6D87E71A` |
| M-510 TDS source | `docs/7.27 马来全套TDS +应用指南/7.27/TDS_M-510_TME TMP FREE.pdf` | `63E20C79D883975EB31453BC80AABFAF26EBEE73533D51B6A6B15530172E2167` |

## 3. Shared locked dependencies

| Role | File | SHA-256 |
|---|---|---|
| Approved Product Detail Gate 7 V0.2 manifest | `pages/products/detail-template/06_handoff/PRODUCT-DETAIL-GATE7-HANDOFF-MANIFEST_V0.2.md` | `F35B81A2FD6384B36E94B16DADB8267218AB2E76CB9E5AD1B6FB26AEB75CEF28` |
| Shared Gate 7 project-control closure | `pages/products/detail-template/05_review/PRODUCT-DETAIL-GATE7-PROJECT-CONTROL-CLOSURE_V0.2.md` | `3214125CA516FA5FC3EBD6CFF7798F90ADAD4D425090E352662E262C7DF1014E` |
| M-350 Gate 9 template verification | `pages/products/detail-template/05_review/GRADE-M350_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md` | `142813F51608089355C8D8413BF3D09C5B724CCA4704A97BE955CF5BCA826AA3` |

The shared V0.2 readiness row that previously marked M-510 content/TDS `NOT_STARTED` is historical for that package version. The M-510 files pinned above supersede that row for `GRADE-M510` only. They do not change another Grade's readiness.

## 4. Fresh validation

| Check | Result |
|---|---|
| JSON parses successfully | PASS |
| Identity matches Registry and CSV | PASS — `GRADE-M510`, `/products/m-510/`, `M-510 titanium dioxide` |
| Technical columns and rows | PASS — 2 columns, 12 rows |
| Related Grades data | PASS — absent by approved omission |
| `site_scope` and all prefill values | PASS — `tio2-my`, `M-510`, `GRADE-M510` |
| Indexing and sitemap controls | PASS — both `false` |
| TDS hash | PASS |
| M-350 product facts in M-510 payload | PASS — none used as fallback |
| Gate 10 / deployment / publication authorization | PASS — absent |

Any change to a pinned file requires a new Manifest version and a fresh project-control check before the changed content is development authority.
