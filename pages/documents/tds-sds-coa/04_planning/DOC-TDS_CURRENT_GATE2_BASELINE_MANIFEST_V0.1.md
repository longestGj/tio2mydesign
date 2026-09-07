# DOC-TDS Current Gate 2 Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Version / date | V0.1 / 2026-09-04 |
| Status | `CURRENT_GATE2_CONTENT_SKELETON_CANDIDATE` |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 | `USER_AUTHORIZED / CONTENT_SKELETON_PENDING_USER_CONFIRMATION` |
| Full copy | `NOT_STARTED` |
| Gate 3–10 | `NOT_AUTHORIZED` |

## 1. Current authority chain

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Approved Gate 1 Brief | `docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.3.md` | 10147 | `8501B091F85ABE4749AF9584B55BB7500831711AE545C8B474D4ACAC176009B9` | `CONTENT_INTENT_CONFIRMED` |
| Gate 1 User Approval Closure | `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE1_USER_APPROVAL_CLOSURE_V0.1.md` | 3353 | `050CC5F3A74E8D2674B697099F60DA9FC8048A358B2CBE693541665B501AABDE` | `USER_APPROVED / CLOSED` |
| Approved Gate 1 Manifest | `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE1_APPROVED_MANIFEST_V0.4.md` | 2990 | `F391010D393D7B741B18B86D2AB2C8AE527AF32466D683653E9F4577F733F05B` | `APPROVED GATE 1 POINTER` |
| Gate 2 Content Skeleton | `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_CONTENT_SKELETON_V0.1.md` | 10695 | `82E8945BA23F28C33F57E55FE84EF9E6F3A3BEBF43908815C2A93780A7CBAF58` | `CURRENT SKELETON CANDIDATE` |
| Gate 2 Review Submission | `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.1.md` | 3822 | `D18BAFC8C7F5856C208CBB99216F242E4496C4B7D7177ACCD44C6C300DB4BEB1` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Claim Register | `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv` | 3565 | `3FEE169E1F846FE363F758E82562D0B6CEE6F6A5895967043B2B960B8045EDD3` | `RETAINED / FAIL_CLOSED` |

The V0.3 pre-approval Gate 1 Manifest remains historical. This Manifest is now the current page-specific pointer while the Gate 2 skeleton is under review.

## 2. Candidate summary

| Decision | Candidate |
|---|---|
| H1 | `Titanium Dioxide TDS, SDS & COA: What to Request` |
| Primary CTA | `Request TDS, SDS or COA` → `/request-documents/` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| Direct Answer | TDS = Grade/revision technical context; SDS = product/jurisdiction/language/revision safety context; COA = lot/batch/order quality context |
| Selection | `document_types[] / one_or_more`; optional buyer-editable Grade context |
| Source attribution | Hidden/system/non-editable `source_context.page_id=DOC-TDS` |
| Narrative | Direct Answer → quick choice → Grade context → comparison/scopes → request inputs/process → FAQ/related paths → CTA |
| Schema | `WebPage` + `BreadcrumbList`; no `FAQPage`, downloads, certification or availability relationship |

## 3. Review checkpoint

The user is being asked to confirm the seven visible/behavioral decisions listed in Section 11 of the Gate 2 content skeleton. Approval authorizes complete Buyer Clean copy work within Gate 2 only.

It does not approve final copy and does not authorize Gate 3, wireframes, visuals, development, `D:\16Wordpress_nextjs`, deployment, publication, DNS or indexing. DOC-REACH and DOC-COO remain Gate 2 authorized but serially queued.

## 4. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-04 | Created current Gate 2 skeleton pointer after Gate 1 approval and Gate 2 authorization | `PENDING_USER_CONFIRMATION` |
