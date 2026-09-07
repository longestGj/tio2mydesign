# PRODUCT-000 Gate 6 Current Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / Titanium Dioxide Products |
| URL | `/products/` |
| Date | `2026-08-31` |
| Current targeted review | `PRODUCT-G6-TDS-DIRECTORY-IMPACT-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Baseline role | `CURRENT_TARGETED_GATE_6_ADDENDUM_BASELINE` |
| Targeted outcome | `PROJECT_CONTROL_GATE_6_TARGETED_IMPACT_PASS_WITH_RECORDED_SOURCE_LIMITATION` |
| Historical Gate 6 review | `PRODUCT-000-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |

## 1. Current Gate 5 input baseline

| File | Bytes | SHA-256 | Status |
|---|---:|---|---|
| `pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.13.md` | 27989 | `23D74EB4A8FF16BDFF1F1E2A8683AC0EE68A039F721D94B13977CF058839444E` | `APPROVED_GATE_5_BASELINE` |
| `pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_DESKTOP_BUYER_FACING_FINAL_V0.17.png` | 406703 | `F0CE195FE5583FB68A81A2BD0468F74B126F3A851E1E799055FC705BECD1C63B` | `APPROVED_GATE_5_BASELINE` |
| `pages/products/04_planning/visual-designs/assets/PRODUCT-000_G5_MOBILE_390_BUYER_FACING_FINAL_V0.16.png` | 652118 | `27480B92700CDEB97EA41A1AB751E1D539F4D339FC58ED2967719A656869DE67` | `APPROVED_GATE_5_BASELINE` |
| `pages/products/05_review/PRODUCT-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.2.md` | 4807 | `4E78A3894A77702132B0336B6730524870EFEDA094AB3C52778F91D76EB484AE` | `APPROVED_GATE_5_BASELINE_MANIFEST` |

## 2. Historical Gate 6 package retained

| File | Bytes | SHA-256 | Scope status |
|---|---:|---|---|
| `pages/products/05_review/PRODUCT-000_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md` | 8575 | `1618C78FE831DC8C4932C65B76E4130753F97CA0A741B9F5548FA59D08066C43` | Historical PASS for pre-summary Gate 6 scope |
| `pages/products/05_review/PRODUCT-000_GATE6_AUDIT_AND_ACCEPTANCE_V0.2.md` | 16820 | `AF184667CDFF8E716CD50701F0456159E0B23C35D15356E2708D40D0D9D48E36` | Historical approved acceptance contract |
| `pages/products/04_planning/PRODUCT-000_SEO_GEO_SCHEMA_CONTRACT_V0.2.md` | Historical file retained | Recorded by file state | Historical approved SEO/GEO/Schema contract |

The historical PASS remains valid for its reviewed scope. It must not be represented as review of the fourteen directory summaries approved later on `2026-08-31`.

## 3. Targeted current Gate 6 delta

| File | Bytes | SHA-256 | Status |
|---|---:|---|---|
| `pages/products/05_review/PRODUCT-000_GATE6_TDS_DIRECTORY_IMPACT_AUDIT_V0.1.md` | 16659 | `1BD5CF8DCB75B31CA6905FBEE5A72CABFFD90B614A04DF147A2539310F4FB3A8` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `pages/products/04_planning/PRODUCT-000_SEO_GEO_SCHEMA_CONTRACT_V0.3.md` | 5280 | `053F8D4FE0C4D5A0DD21AECD38131A78B6A4D6FD32EEB3670CE4B6CDF585AF45` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `pages/products/01_research/evidence/PRODUCT_DIRECTORY_TDS_SUMMARY_USER_SOURCE_2026-08-31.png` | 66162 | `187AB197FAE88F83646B303E68B8E73E77581684DCDC5BA84610FD1F85AFACD1` | `USER_APPROVED_EXACT_PUBLIC_SUMMARY_SOURCE` |
| `99_workspace/PRODUCT-000_gate6_review/verify_product_gate6_tds_directory_impact_v01.ps1` | 14095 | `F87AD94F34EFE1AC3FA555E4F1E9A19F17479987DDB52A8BF9D948D6B57DC056` | Governance-sync validation script |
| `99_workspace/PRODUCT-000_gate6_review/verification_product_gate6_tds_directory_impact_v01.json` | 18333 | `0DD59FE12D6AA885CA9973843C7B6975F628F83D6890350535504F4B96631307` | `110 PASS / 0 FAIL`; project-control PASS/CLOSED governance sync verified |

Project control decided `PRODUCT-G6-TDS-DIRECTORY-IMPACT-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`. This Manifest is the current targeted Gate 6 addendum baseline and does not authorize Gate 7.

## 4. Consumption order after project-control approval

1. Gate 5 Manifest V0.2 and its three exact approved files.
2. Historical Gate 6 V0.2 package for unchanged content, SEO, GEO, Schema, relationship, route, responsive, accessibility and field contracts.
3. SEO/GEO/Schema V0.3 addendum for directory-summary changes.
4. TDS Directory Impact Audit V0.1 for source, exact-copy and field-level boundaries.
5. This current-baseline Manifest.

If a delta conflicts with unchanged historical content, the targeted approved delta controls only the fourteen directory summaries and their direct machine-readable/field consequences. It does not reopen unrelated Gate 6 decisions.

## 5. Open later-phase contracts

- `PRODUCT-G6-TDS-I01 = ACCEPTED_SOURCE_LIMITATION / NON_BLOCKING_FOR_GATE_7`; future complete TDS files may strengthen provenance but cannot silently rewrite the approved strings.
- `PRODUCT-G6-TDS-I02 = GATE_7_ACCEPTANCE_CONTRACT / GATE_9_QA`; Schema and visible summaries must use one source field and remain character-identical.
- `PRODUCT-G6-TDS-A01 = NON_BLOCKING_ADVISORY`.
- `PRODUCT-G6-B02` remains a Gate 8 RFQ implementation requirement and Gate 9 QA/release blocker.
- `PRODUCT-G6-B03` remains a Gate 8 route implementation requirement and Gate 9 QA/release blocker.
- Production SVG Logo dependency `PRODUCT-G6-B01` remains `APPROVED / CLOSED` via the formal production Manifest.
- Gate 7 remains `LOCKED / NOT_AUTHORIZED` solely because the user has not authorized it.
- A future user-authorized Gate 7 package must consume this passed delta and carry `PRODUCT-G6-TDS-I02`; no handoff package is currently authorized.

## 6. Prohibited operations

- No Process/Grade child-page work.
- No WordPress, Next.js, CMS, code, test implementation, deployment, release or publication.
- No operation in `D:\16Wordpress_nextjs`.
- No modification or deletion of historical V0.12/V0.16/V0.15 or historical Gate 6 files.

## 7. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-31 | Current-baseline overlay linking approved Gate 5 V0.13 assets to the targeted fourteen-summary Gate 6 delta | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 project-control review | 2026-08-31 | Targeted summary impact, source limitation, Schema parity and development-field contracts independently reviewed | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; current targeted Gate 6 addendum baseline |
