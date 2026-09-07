# DOC-TDS Current Gate 2 Baseline Manifest V0.4

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Version / date | V0.4 / 2026-09-04 |
| Supersedes | `DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.3.md` as the current pointer; V0.3 remains historical |
| Status | `CURRENT_GATE2_FULL_COPY_REVIEW_CANDIDATE` |
| Revision class | `MINOR CONTROL + BUYER CLARITY REVISION` |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 skeleton | `USER_APPROVED / CLOSED` |
| Complete Buyer Clean Copy | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Full-copy checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=PENDING_USER_APPROVAL` |
| Gate 3 | `USER_AUTHORIZED / PREREQUISITE_PENDING` |
| Gate 4–10 | `NOT_AUTHORIZED` |

## 1. Current authority chain

| Role | File | Bytes | SHA-256 | State |
|---|---|---:|---|---|
| Approved Gate 1 Brief | `docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.3.md` | 10147 | `8501B091F85ABE4749AF9584B55BB7500831711AE545C8B474D4ACAC176009B9` | `CONTENT_INTENT_CONFIRMED` |
| Gate 1 User Approval Closure | `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE1_USER_APPROVAL_CLOSURE_V0.1.md` | 3353 | `050CC5F3A74E8D2674B697099F60DA9FC8048A358B2CBE693541665B501AABDE` | `USER_APPROVED / CLOSED` |
| Approved Gate 1 Manifest | `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE1_APPROVED_MANIFEST_V0.4.md` | 2990 | `F391010D393D7B741B18B86D2AB2C8AE527AF32466D683653E9F4577F733F05B` | `APPROVED GATE 1 POINTER` |
| Approved Gate 2 Content Skeleton | `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_CONTENT_SKELETON_V0.2.md` | 15003 | `7DA909857367922B4FB08A57327587A6C9FD368D39EA48E912E294643DFC2C1A` | `USER_APPROVED / CLOSED_SKELETON_CHECKPOINT` |
| Skeleton Project-Control Submission | `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.2.md` | 5977 | `DD54182598CEE4F3EE896EBC51BFD7A1DAEC90F531DB8B48359157E4305D2782` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED_BY_USER_APPROVAL` |
| Skeleton Approval and Gate 3 Prerequisite Authorization | `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_SKELETON_USER_APPROVAL_AND_GATE3_PREREQUISITE_AUTHORIZATION_V0.1.md` | 3407 | `7E3AA2628B604B85D18C55F6940436B8100E45550154B9FD81F26FD809729057` | `USER_APPROVED / PREREQUISITE_CONTROL_ACTIVE` |
| Complete Buyer Clean Copy V0.2 | `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | 12979 | `70121F656064532AF2F01E37143673B94CC8AAA440E4D66F61ED447C2B7C6345` | `CURRENT FULL-COPY CANDIDATE` |
| Full-Copy Project-Control Submission V0.2 | `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_FULL_COPY_PROJECT_CONTROL_SUBMISSION_V0.2.md` | 6614 | `65A96F169D3D35E02E94353FEF7A321B82459CFA6BDEACCDCE1F5FEB09868D0E` | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Claim Register | `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv` | 3565 | `3FEE169E1F846FE363F758E82562D0B6CEE6F6A5895967043B2B960B8045EDD3` | `RETAINED / FAIL_CLOSED` |
| CONV-DOC Field Authority | `pages/conversion/06_handoff/CONV-DOC_GATE7_CMS_API_COMPONENT_FIELD_INVENTORY_V0.1.md` | 8368 | `12F3BF9169DEF3FA6CCF79496A77D2C0D4579D03B5DEEC3FDB8874E85835BEAA` | `CURRENT INPUT FOR FIELD SHAPE` |

## 2. Current V0.2 decision object

The current user decision object is the complete V0.2 English Buyer Clean copy. It preserves the approved H1, Hero, Direct Answer, Quick Document Choice, ten-module order, CTA labels and SEO/GEO/Schema direction while making only these targeted changes:

1. one structured primary Grade is explicit;
2. additional Grades are supplementary buyer-provided context only and are not mapped to document types;
3. repetitive availability/delivery disclaimers are reduced;
4. the availability FAQ answer is simplified;
5. Section 6 is a concise procurement checklist;
6. parent-page naming is standardized to `Document Hub`;
7. the DOC-REACH path covers information and supporting documentation;
8. the duplicate Final CTA disclaimer is removed;
9. internal field, evidence and route controls remain complete.

## 3. Gate transition rule

The user has already authorized Gate 3, but the complete-copy checkpoint remains open. Therefore:

- before V0.2 full-copy approval: Gate 3 remains `USER_AUTHORIZED / PREREQUISITE_PENDING` and no wireframe may be created;
- after V0.2 approval: set `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=YES`, close Gate 2 and activate the recorded Gate 3 authorization without asking the user to repeat it;
- approval does not itself generate or approve a Gate 3 wireframe;
- the later responsive wireframe remains a separate user approval object and must cover `1440px` Desktop, `768px` Tablet and `390px` Mobile.

## 4. Historical records retained

| File | Bytes | SHA-256 | State |
|---|---:|---|---|
| `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` | 11701 | `F3DB88A5E16E8045BA59D792DEC9DB584ACDFEB973F7EB765DD9338E8DC47FB6` | `HISTORICAL FULL-COPY CANDIDATE / SUPERSEDED_BY_V0.2` |
| `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_FULL_COPY_PROJECT_CONTROL_SUBMISSION_V0.1.md` | 7065 | `9DAB1336CCE396AC8C0DBC8BFAD9869D4BB49EC9A0143F56FA57EE18F883A8E7` | `HISTORICAL SUBMISSION / SUPERSEDED_BY_V0.2` |
| `pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.3.md` | 7087 | `000F1E23CDA675AE966204834BC0E70CF11D0AB75B320B811BCD8A8F7E8C0612` | `HISTORICAL POINTER / SUPERSEDED_BY_V0.4` |
| `pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.2.md` | 5315 | `878B17AFF5EDBD4717A9101814615DA1E352C3DEB260E07D90A03B9622E66C8F` | `HISTORICAL PRE-SKELETON-APPROVAL POINTER` |
| `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_CONTENT_SKELETON_V0.1.md` | 10695 | `82E8945BA23F28C33F57E55FE84EF9E6F3A3BEBF43908815C2A93780A7CBAF58` | `HISTORICAL / SUPERSEDED_AS_SKELETON` |
| `pages/documents/tds-sds-coa/05_review/DOC-TDS_GATE2_CONTENT_SKELETON_PROJECT_CONTROL_SUBMISSION_V0.1.md` | 3822 | `D18BAFC8C7F5856C208CBB99216F242E4496C4B7D7177ACCD44C6C300DB4BEB1` | `HISTORICAL / SUPERSEDED_BY_SKELETON_V0.2` |
| `pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE2_BASELINE_MANIFEST_V0.1.md` | 3534 | `A59A2D93CF698F12A9A35397F764FEE89604A956D37EEDEFCA8F7CF5E4D0B6F4` | `HISTORICAL POINTER / SUPERSEDED_BY_V0.2` |

No historical file was rewritten for this revision.

## 5. Evidence and field-contract state

- The Claim Register and all Evidence Holds remain unchanged.
- Current CONV-DOC transport remains one buyer-editable `prefill.product_grade` and one-or-more buyer-editable `prefill.document_types[]` values.
- Additional Grades are supplementary buyer-provided free-text context, not structured selections and not individually mapped to document types.
- Hidden source attribution remains system-controlled and non-editable.
- `prefill.product_grades[]` remains an inactive future candidate requiring separate CONV-DOC change approval.
- No public inventory, filenames, previews, direct downloads, pseudo-downloads, Grade-document availability matrix, inferred Grade-document relationship, SDS/COA inference, version merge, currentness, universal coverage, compliance approval, conformity, request approval, response-time or guaranteed-delivery claim is permitted.

## 6. Authorization boundary

This Manifest does not approve the V0.2 full-copy candidate on the user's behalf. It does not close Gate 2 or authorize a Gate 3 wireframe before the full-copy checkpoint closes. It does not authorize Gate 4, visual design, implementation, development, changes in `D:\16Wordpress_nextjs`, deployment, publication, DNS or indexing. DOC-REACH and DOC-COO remain Gate 2 authorized but serially queued.

## 7. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-04 | First Gate 2 skeleton pointer | `HISTORICAL / SUPERSEDED_BY_V0.2` |
| V0.2 | 2026-09-04 | Revised skeleton candidate | `HISTORICAL PRE-SKELETON-APPROVAL POINTER / SUPERSEDED_BY_V0.3` |
| V0.3 | 2026-09-04 | Established the V0.1 complete-copy review candidate | `HISTORICAL POINTER / SUPERSEDED_BY_V0.4` |
| V0.4 | 2026-09-04 | Established the V0.2 minor-control and buyer-clarity full-copy review candidate | `CURRENT / PENDING_USER_APPROVAL` |
