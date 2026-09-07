# CONV-RFQ Current Gate Baseline Manifest V1.9

## 0. Identity and status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Page type | RFQ conversion page |
| Version | V1.9 |
| Gate | Gate 2 — complete-copy checkpoint |
| Current review | `CONV-RFQ-G2-FULL-COPY-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Superseded review | `CONV-RFQ-G2-FULL-COPY-01 = SUPERSEDED_BY_CONV-RFQ-G2-FULL-COPY-PCR-01 / NOT_CURRENT_PASS` |
| Gate status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION` |
| Checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_PENDING_USER_CONFIRMATION` |
| User confirmation | `OPEN / NOT_RECORDED` |
| Gate 1 | `APPROVED / CLOSED` |
| Gate 3–5 | `NOT_STARTED / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 Manifest. The Gate 2 complete copy has passed project-control review and now waits for explicit user confirmation. `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` is not user-approved or closed.

## 1. Current authoritative payload

| Priority | File | Bytes | SHA-256 | Authority role |
|---:|---|---:|---|---|
| 1 | `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_FULL_COPY_PROJECT_CONTROL_CLOSURE_V1.0.md` | 3,322 | `A3CC443BBBE0BB11AC5B701EDA9DC2F92E5492FD4A6197B3AAF60E905F9AEDD5` | Project-control PASS and pending-user-confirmation disposition |
| 2 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_USER_CONFIRMED_DESTINATION_COUNTRY_TEXT_INPUT_OVERRIDE_V1.0.md` | 2,484 | `33E1613A4390EFADEBFEE4CAF5103E05A880D8DE3B6D36E9BD52CCC0A44C95D8` | Current Destination Country authority |
| 3 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.1.md` | 16,377 | `0D38C9ED1C3BEB4121BF4BA924D53E9B8E153A51F30EC9B87B7A74717272FDC2` | Reviewed complete Buyer Clean copy |
| 4 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_VALIDATION_V1.1.md` | 5,654 | `0E59D84A4A85005D90A92AB4173B3019BC18539316196940E7A08E84EB399C2E` | Reviewed validation |
| 5 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_USER_CONFIRMED_HERO_OVERRIDE_V1.0.md` | 3,867 | `32AD5FDE26FA69101B7E18070DA3F14FE30FF2E02899348A38BC0E952699C393` | Current exact original Hero |
| 6 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_CONTENT_SKELETON_V1.1.md` | 15,535 | `016E8241AAF4A3C31ED0C8D52504E52AD64D60BA6CAA1173029A548F8B844DEE` | Confirmed skeleton under current overrides |
| 7 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_SEO_GEO_SCHEMA_DIRECTION_V1.1.md` | 8,256 | `43582BD39200D12CD2E27F232737F4C5BA6197C544C22AC103823D5AFF5D08F2` | Confirmed SEO/GEO/Schema direction |
| 8 | `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V1.2.2.md` | 16,624 | `D0EB8C435616B5EE5DEC43F573D4F0C792421284F836E2D8B6DF4EFEF4A0722F` | Approved Gate 1 contract under current overrides |

## 2. Current exact Hero and Destination Country

Hero:

> Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.

Destination Country:

- Required single-line text input.
- Placeholder: `Enter the destination country`.
- Maximum: 100 Unicode characters after trimming.
- Empty error: `Enter a destination country.`
- Overlength error: `Keep the destination country to 100 characters or fewer.`
- No country select, list, shared dataset, code, region taxonomy or automatic normalization.
- Explicit actual-country text prefill remains editable; broad region is not auto-filled; invalid prefill silently clears on first load.
- Buyer-entered text is RFQ context only and proves no service, shipping, regulation or market support.

## 3. Frozen complete-copy contract

- Module order: Header → Breadcrumb → Hero → one RFQ Form → Alternative Requests → Footer.
- PC/desktop is one vertical page flow; no left/right page split or side rail. Only the form-internal Grid may use two columns.
- Tablet/Mobile are single-column; `Metric tonnes (MT)` remains the fixed adjacent quantity suffix.
- Product / Grade remains a single select; Phone / WhatsApp and Website remain optional; Phone has no helper.
- Exact validation, focus, failure, success, privacy, human-review, unknown-grade, insufficient-information and unavailable-state wording remains unchanged.
- Form-area Privacy Policy link remains visible.
- Shared Footer boundary: `Consume the approved shared Footer unchanged.` CONV-RFQ does not enumerate, design or implement it.
- No Contact fallback, side rail, FAQ, second form or second solid page-body CTA.
- SEO/GEO/Schema and PRODUCT V0.3 restrictions remain unchanged.

## 4. Gate state

| Gate/checkpoint | State |
|---|---|
| Gate 1 | `APPROVED / CLOSED` |
| Gate 2 skeleton | `USER_CONFIRMED / PROJECT_CONTROL_REBASE_CLOSED` |
| Gate 2 complete-copy project-control review | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` | `PENDING_USER_CONFIRMATION / NOT_CLOSED` |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 4–5 | `NOT_STARTED / NOT_AUTHORIZED` |

Current visual assets: `NONE`.

## 5. Historical control

| File | Bytes | SHA-256 | Disposition |
|---|---:|---|---|
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.8.md` | 9,239 | `E07C7938AA41216706AC5E2243581D843310C4D7C84E1F454FA025F6D07B119A` | `HISTORICAL REVIEW-TIME MANIFEST / SUPERSEDED_BY_V1.9` |
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.1.md` | 7,838 | `9B00D4DE8BF2248A351F4ACBF06EC2BFCAFF1E289D8BD5904640F0B18EACAC8D` | `HISTORICAL SUBMISSION / PROJECT_CONTROL_REVIEW_PASS` |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.7.md` | 6,748 | `9D9F784234B6B753B62B25717840B62F78812548CC6BC6BAAD84500DADB32406` | `HISTORICAL / SUPERSEDED_BY_V1.8` |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.0.md` | 15,460 | `F44741D2AA4580FD824DBB521797A22B879556D49EF7918E2F23C99BA77DE003` | `HISTORICAL / RETURNED_FOR_TARGETED_REVISION` |

All earlier artifacts retain their recorded hashes and dispositions. No historical file was rewritten or deleted.

## 6. Next controlled action

Present the project-control-passed complete copy to the user and obtain explicit confirmation. Until then, stop at `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION`; do not close `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` and do not begin Gate 3.
