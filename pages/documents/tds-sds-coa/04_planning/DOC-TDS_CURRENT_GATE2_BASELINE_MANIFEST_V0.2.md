# DOC-TDS Current Gate 2 Baseline Manifest V0.2

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Version / date | V0.2 / 2026-09-04 |
| Supersedes | `DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.1.md` as the current pointer; V0.1 remains historical |
| Status | `CURRENT_GATE2_CONTENT_SKELETON_CANDIDATE` |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 | `GATE2_CONTENT_SKELETON / PENDING_USER_CONFIRMATION` |
| Project Control | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Complete Buyer Clean Copy | `NOT_STARTED` |
| Gate 3–10 | `NOT_AUTHORIZED` |

## 1. Current authority chain

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Approved Gate 1 Brief | `docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.3.md` | 10147 | `8501B091F85ABE4749AF9584B55BB7500831711AE545C8B474D4ACAC176009B9` | `CONTENT_INTENT_CONFIRMED` |
| Gate 1 User Approval Closure | `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE1_USER_APPROVAL_CLOSURE_V0.1.md` | 3353 | `050CC5F3A74E8D2674B697099F60DA9FC8048A358B2CBE693541665B501AABDE` | `USER_APPROVED / CLOSED` |
| Approved Gate 1 Manifest | `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE1_APPROVED_MANIFEST_V0.4.md` | 2990 | `F391010D393D7B741B18B86D2AB2C8AE527AF32466D683653E9F4577F733F05B` | `APPROVED GATE 1 POINTER` |
| Gate 2 Content Skeleton V0.2 | `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_CONTENT_SKELETON_V0.2.md` | 15003 | `7DA909857367922B4FB08A57327587A6C9FD368D39EA48E912E294643DFC2C1A` | `CURRENT SKELETON CANDIDATE` |
| Gate 2 Review Submission V0.2 | `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.2.md` | 5977 | `DD54182598CEE4F3EE896EBC51BFD7A1DAEC90F531DB8B48359157E4305D2782` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Claim Register | `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv` | 3565 | `3FEE169E1F846FE363F758E82562D0B6CEE6F6A5895967043B2B960B8045EDD3` | `RETAINED / FAIL_CLOSED` |
| CONV-DOC field authority | `pages/conversion/06_handoff/CONV-DOC_GATE7_CMS_API_COMPONENT_FIELD_INVENTORY_V0.1.md` | 8368 | `12F3BF9169DEF3FA6CCF79496A77D2C0D4579D03B5DEEC3FDB8874E85835BEAA` | `CURRENT INPUT FOR FIELD SHAPE` |

## 2. Historical records retained

| File | Bytes | SHA-256 | State |
|---|---:|---|---|
| `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_CONTENT_SKELETON_V0.1.md` | 10695 | `82E8945BA23F28C33F57E55FE84EF9E6F3A3BEBF43908815C2A93780A7CBAF58` | `HISTORICAL / SUPERSEDED_AS_CURRENT_CANDIDATE` |
| `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.1.md` | 3822 | `D18BAFC8C7F5856C208CBB99216F242E4496C4B7D7177ACCD44C6C300DB4BEB1` | `HISTORICAL / SUPERSEDED_BY_V0.2` |
| `pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.1.md` | 3534 | `A59A2D93CF698F12A9A35397F764FEE89604A956D37EEDEFCA8F7CF5E4D0B6F4` | `HISTORICAL POINTER / SUPERSEDED_BY_V0.2` |

No historical file was rewritten for the V0.2 content revision.

## 3. Current candidate summary

| Decision | V0.2 candidate |
|---|---|
| H1 | `Titanium Dioxide TDS, SDS & COA: What to Request` |
| Hero support | Buyer Clean one-request wording; no `controlled request` |
| Direct Answer | Two sentences: document-function difference, then useful product/transaction context |
| Request disclaimer | Moved to `How Document Requests Work` / Final CTA microcopy |
| Narrative | Ten major modules; individual TDS/SDS/COA detail sections merged into comparison |
| Grade content model | Does not exclude multi-Grade buyer need |
| Current Grade transport | One `prefill.product_grade` only, because CONV-DOC authority is single-select |
| Future Grade array | `prefill.product_grades[] / one_or_more` is conditional and inactive until separately approved by CONV-DOC |
| Document types | `prefill.document_types[] / one_or_more` remains active |
| Meta | Buyer-value language; no `requirements`, availability or download implication |
| Schema | `WebPage + BreadcrumbList`; no FAQPage rich-result strategy |

## 4. Review checkpoint

The user is being asked to confirm the seven revised decisions in Section 12 of the V0.2 skeleton. Approval means only `AUTHORIZE_COMPLETE_BUYER_CLEAN_COPY_WITHIN_GATE2`.

V0.2 does not approve itself, does not approve future complete copy, and does not authorize Gate 3, visual design, implementation, development, `D:\16Wordpress_nextjs`, deployment, publication, DNS or indexing. DOC-REACH and DOC-COO remain Gate 2 authorized but serially queued.

## 5. Evidence and control state

All DOC-TDS Evidence Holds and Claim Register dispositions remain unchanged. There is still no public inventory, filename, file preview, direct download, Grade-document availability matrix, SDS/COA inference, version merge, availability/currentness/compliance/approval/response-time/delivery promise or automatic Contact fallback.

## 6. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-04 | First Gate 2 skeleton pointer | `HISTORICAL / SUPERSEDED_BY_V0.2` |
| V0.2 | 2026-09-04 | Established the complete revised content skeleton and preserved current CONV-DOC field authority | `CURRENT / PENDING_USER_CONFIRMATION` |
