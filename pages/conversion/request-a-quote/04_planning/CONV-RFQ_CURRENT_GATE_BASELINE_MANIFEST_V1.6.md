# CONV-RFQ Current Gate Baseline Manifest V1.6

## 0. Identity and current state

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Page type | RFQ conversion page |
| Version | V1.6 |
| Gate | Gate 2 — content-skeleton checkpoint |
| User decision | `USER_CONFIRMED_WITH_HERO_REVERT_TO_ORIGINAL` |
| Current Review ID | `CONV-RFQ-G2-HERO-USER-REBASE-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / USER_DIRECTED_REBASE` |
| Checkpoint | `CONTENT_SKELETON_USER_CONFIRMED_PENDING_PROJECT_CONTROL_REBASE` |
| Gate 1 | `CONV-RFQ-G1-V12-DIRECTED-03 = APPROVED / CLOSED` |
| Prior Gate 2 PCR | `CONV-RFQ-G2-SKELETON-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` against superseded Hero version |
| Full copy | `NOT_STARTED / HELD_FOR_PROJECT_CONTROL_REBASE` |
| Gate 3 / visual / development | `NOT_STARTED / NOT_AUTHORIZED` |

This is the only current Gate 1–5 Manifest. The user has confirmed the Gate 2 skeleton with one explicit change: retain the original Hero paragraph. The actual current content is the Hero Override V1.0 layered over the unchanged V1.1 skeleton and SEO direction.

## 1. Current authority order

| Priority | File | Bytes | SHA-256 | Consumption |
|---:|---|---:|---|---|
| 1 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_USER_CONFIRMED_HERO_OVERRIDE_V1.0.md` | 3,867 | `32AD5FDE26FA69101B7E18070DA3F14FE30FF2E02899348A38BC0E952699C393` | Controls only the Hero paragraph and records user confirmation of all other Gate 2 skeleton content |
| 2 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_CONTENT_SKELETON_V1.1.md` | 15,535 | `016E8241AAF4A3C31ED0C8D52504E52AD64D60BA6CAA1173029A548F8B844DEE` | Controls all skeleton content except its superseded Hero paragraph |
| 3 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_SEO_GEO_SCHEMA_DIRECTION_V1.1.md` | 8,256 | `43582BD39200D12CD2E27F232737F4C5BA6197C544C22AC103823D5AFF5D08F2` | Controls user-confirmed metadata, GEO and Schema direction |
| 4 | `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_USER_DIRECTED_HERO_REBASE_REVIEW_SUBMISSION_V1.0.md` | 3,817 | `F02FC508B81E406172D0231937329C7BA594CD3D18E8E496ECE2909666F3BA00` | Current narrow project-control rebase submission |
| 5 | `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V1.2.2.md` | 16,624 | `D0EB8C435616B5EE5DEC43F573D4F0C792421284F836E2D8B6DF4EFEF4A0722F` | Approved Gate 1 page contract |
| 6 | `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_INTENT_FIELD_EVIDENCE_REBASE_V1.2.2.md` | 12,293 | `22F6228DB5589A3A6587A813CE464FB05FB8363B799101E85F52FF7403F7087D` | Approved Gate 1 evidence and relationship audit |
| 7 | `pages/conversion/request-a-quote/01_research/source/REQUEST_QUOTE_PAGE_DESIGN_SPEC_V1.2_USER_INPUT.md` | 15,407 | `825E989EA777649AD06C85D6DC54654F847FAC198E639B85AC9C67B2C87CDDD6` | Original Hero source evidence |

## 2. Current authoritative Hero

> Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.

The V1.1 Hero rewrite beginning `Tell us the grade you need` is `SUPERSEDED_BY_USER_CONFIRMED_ORIGINAL_HERO / NOT_CURRENT_COPY`.

## 3. User-confirmed unchanged Gate 2 skeleton

- Eyebrow `B2B QUOTATION REQUEST`; H1 `Request a Titanium Dioxide Quote`.
- Page order: Header → Breadcrumb → Hero → one RFQ Form → Alternative Requests → Footer.
- PC is one vertical page flow, with no left/right page split. A two-column Grid is permitted only inside the form; Tablet/Mobile are single-column.
- Three form groups and the approved minimum field set.
- Required Quantity uses adjacent fixed `Metric tonnes (MT)` text, with no separate Unit control and no kg/Other.
- Exact validation, focus, error, submission failure, success, privacy, human-review and unavailable-state contracts.
- Low-weight Sample/Documents links; no Contact fallback.
- SEO Title, Meta, Canonical/robots, GEO and `WebPage` + `BreadcrumbList` Schema direction.
- PRODUCT V0.3 restrictions and Global Chrome V0.5.

## 4. Gate state

| Gate | State |
|---|---|
| Gate 1 | `APPROVED / CLOSED` |
| Gate 2 skeleton user decision | `CONFIRMED_WITH_HERO_REVERT_TO_ORIGINAL` |
| Gate 2 project-control rebase | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Complete Gate 2 copy | `NOT_STARTED / HELD` |
| `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` | `NOT_CLAIMED` |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 4–5 | `NOT_STARTED / NOT_AUTHORIZED` |

## 5. Historical control

| File | Bytes | SHA-256 | Disposition |
|---|---:|---|---|
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.5.md` | 7,769 | `B8C6EFE7A3D6D7F7780242F22624EE863EC5E0272D166A98652ED9A81C556A9D` | `HISTORICAL / SUPERSEDED_BY_V1.6` |
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_SKELETON_PROJECT_CONTROL_CLOSURE_V1.0.md` | 4,422 | `2735336AE5F4057D841D0C707554B66343C2547558441E0E6EFC3DC99D85795E` | Valid historical PASS against V1.1; superseded only for Hero copy |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.4.md` | 13,363 | `C1E8A1194F322B394E82CCD5D22C89504FE84C49E3BF91CDAA26748D309A305D` | `HISTORICAL / SUPERSEDED_BY_V1.5` |

Earlier artifacts retain their recorded hashes and dispositions. No historical file has been rewritten or deleted.

## 6. Next controlled action

Submit `CONV-RFQ-G2-HERO-USER-REBASE-01` for narrow project-control review. After the rebase closes, complete Gate 2 copy may proceed under the user-confirmed skeleton; Gate 3 still requires a separate boundary and is not authorized here.
