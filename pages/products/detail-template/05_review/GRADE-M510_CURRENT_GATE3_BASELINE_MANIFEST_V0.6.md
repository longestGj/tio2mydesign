# GRADE-M510 Current Gate 3 Baseline Manifest V0.6

## 1. Control

| Field | Value |
|---|---|
| Manifest ID | `GRADE-M510-CURRENT-G3-MANIFEST-06` |
| Page ID | `GRADE-M510` |
| URL | `/products/m-510/` |
| Page type | Grade product page |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Current Gate | Gate 3 |
| Status | `CURRENT / GATE2_APPROVED / GATE3_WIREFRAMES_PENDING_USER_APPROVAL` |
| Decision date | `2026-09-02` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 3 authorization | `GRADE-M510-G2-COPY-G3-AUTH-01 = USER_APPROVED / CLOSED` |
| Gate 3 output | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_USER_APPROVAL` |
| Gate 4 | `NOT_AUTHORIZED` |
| Gate 8 | `NOT_AUTHORIZED` |
| Gate 10 | `NOT_AUTHORIZED` |

## 2. Current content and decision authority

| Authority file | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `docs/page-briefs/GRADE-M510_M510_TITANIUM_DIOXIDE_BRIEF_V0.4.md` | 21658 | `28A25EEC9ADDCF6F7B08C9D561040FD84F5C7F218EE40AD09733484999A529D1` | Current Brief and Gate status |
| `pages/products/detail-template/04_planning/GRADE-M510_GATE2_FULL_COPY_V0.1.md` | 10593 | `4447050CD7A4F98002752B9983DC9028303D0E9381D7D5486974757D66BF2067` | User-approved complete copy and module order |
| `pages/products/detail-template/05_review/GRADE-M510_GATE2_FULL_COPY_APPROVAL_AND_GATE3_AUTHORIZATION_V0.1.md` | 1516 | `D361D9B20E736979F9B04BF5BACCDEFAA4CCA9624784D347E4D3CE5BB0001946` | Gate 2 closure and Gate 3 authorization |

Earlier Gate 1 evidence, TDS validity, skeleton and approval records retain their approved scope through `GRADE-M510_CURRENT_GATE2_BASELINE_MANIFEST_V0.5.md`; this Manifest supersedes that file only as the current stage pointer.

## 3. Current Gate 3 authority

| Authority file | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `pages/products/detail-template/04_planning/GRADE-M510_GATE3_RESPONSIVE_WIREFRAME_SPEC_V0.1.md` | 5501 | `1B683809758A29930C3315FE1A6CB9569673796C2DD347143344ABD5D8FCE2C0` | Responsive structure and interaction contract |
| `pages/products/detail-template/05_review/GRADE-M510_GATE3_WIREFRAME_QA_V0.1.md` | 1993 | `FFBA043D614F3BF041F910301BB885721647C72EE75179CBD86F530F4C7C4312` | Viewport, overflow, density and content-parity self-check |
| `pages/products/detail-template/04_planning/wireframes/M510_GATE3_RESPONSIVE_WIREFRAME_V0.1.html` | 15383 | `CD053B66A69165C8B34A8E003747AAD4F173E16AF3986938288876F971270074` | Interactive responsive wireframe source |

## 4. Rendered visual evidence

| Asset | Logical viewport | Physical dimensions | Bytes | SHA-256 |
|---|---:|---:|---:|---|
| `wireframes/M510_GATE3_DESKTOP_1440_V0.1.png` | 1440px | 1440×4325 | 291612 | `64B2CC0C9631E8A4DC7DB95EB327931042B6B51238A09B7909234CD6CF2C3E95` |
| `wireframes/M510_GATE3_TABLET_768_V0.1.png` | 768px | 768×5598 | 284305 | `2A466C8B98BABEA4A1A1C15F49C3FC30DF79EEA490F74B0638FA67D830C8CAC2` |
| `wireframes/M510_GATE3_MOBILE_390_V0.1.png` | 390px | 390×7405 | 262331 | `D3FC700801EC30BCB2E1D1640D5BC9F19D63C18AFF2E597241EE036690D31A2E` |
| `wireframes/M510_GATE3_MOBILE_MENU_OPEN_390_V0.1.png` | 390px | 390×844 | 33371 | `536EB9B730D4EF1A265AA06E8ADCA0A84B64F2F80BB64C9F7E54E7935C4CB444` |

## 5. Shared Global Chrome authority

| File | Bytes | SHA-256 | Consumption |
|---|---:|---|---|
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | 7235 | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` | Navigation order, Products current state, Mobile Menu and Footer ownership |
| `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | 8090 | `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894` | Production Logo authority; wireframes use a text placeholder only |

## 6. Decision checkpoints

| Checkpoint | State |
|---|---|
| `CONTENT_INTENT_CONFIRMED` | `APPROVED / CLOSED` |
| `GATE1_APPROVED` | `APPROVED / CLOSED_WITH_TDS_AMENDMENT` |
| `GATE2_CONTENT_SKELETON_CONFIRMED` | `USER_APPROVED / CLOSED` |
| `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` | `USER_APPROVED / CLOSED` |
| `GATE3_RESPONSIVE_WIREFRAME_CONFIRMED` | `PENDING_USER_APPROVAL` |

## 7. Open dependencies and boundaries

- Grade-specific media remains unapproved; wireframes show an evidence-safe slot/fallback.
- Receiver and destination links remain conditional on their independently approved/live routes.
- Product-specific Origin, Not Recommended and Related Grades remain omitted.
- Gate 4 cannot start until Gate 3 is approved and separately authorized.

## 8. Supersession

`GRADE-M510_CURRENT_GATE2_BASELINE_MANIFEST_V0.5.md` is historical as the current-stage pointer and remains the approved Gate 2 traceability baseline. It does not control current Gate 3 work.

## 9. Non-authorization statement

This Manifest does not authorize Gate 4+, development, route enablement, deployment, publication or indexing. No change to `D:\16Wordpress_nextjs` is authorized.
