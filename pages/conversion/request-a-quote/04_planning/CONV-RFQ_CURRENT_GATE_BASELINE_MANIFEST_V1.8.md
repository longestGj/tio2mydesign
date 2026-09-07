# CONV-RFQ Current Gate Baseline Manifest V1.8

## 0. Identity and status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Page type | RFQ conversion page |
| Version | V1.8 |
| Gate | Gate 2 — complete-copy checkpoint |
| Review ID | `CONV-RFQ-G2-FULL-COPY-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / TARGETED_REVISION / NOT_APPROVED` |
| Checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_PENDING_PROJECT_CONTROL_REVIEW` |
| Skeleton user decision | `USER_CONFIRMED_WITH_HERO_REVERT_TO_ORIGINAL` |
| Hero rebase | `CONV-RFQ-G2-HERO-USER-REBASE-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Return authority | `CONV-RFQ-G2-FULL-COPY-01 = TARGETED_REVISION_REQUIRED / NOT_APPROVED` |
| Gate 1 | `APPROVED / CLOSED` |
| Gate 3–5 | `NOT_STARTED / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 Manifest. The complete Gate 2 copy is in targeted revision only for the user-confirmed Destination Country text-input contract. It is not approved and no Gate 3 authority is implied.

## 1. Current authoritative payload

| Priority | File | Bytes | SHA-256 | Authority role |
|---:|---|---:|---|---|
| 1 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_USER_CONFIRMED_DESTINATION_COUNTRY_TEXT_INPUT_OVERRIDE_V1.0.md` | 2,484 | `33E1613A4390EFADEBFEE4CAF5103E05A880D8DE3B6D36E9BD52CCC0A44C95D8` | User-confirmed text-input contract; overrides earlier Destination Country descriptions |
| 2 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.1.md` | 16,377 | `0D38C9ED1C3BEB4121BF4BA924D53E9B8E153A51F30EC9B87B7A74717272FDC2` | Current targeted Buyer Clean copy with Destination Country text input |
| 3 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_VALIDATION_V1.1.md` | 5,654 | `0E59D84A4A85005D90A92AB4173B3019BC18539316196940E7A08E84EB399C2E` | Targeted country-contract and frozen-content validation |
| 4 | `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_HERO_USER_REBASE_PROJECT_CONTROL_CLOSURE_V1.0.md` | 2,116 | `BEE101988724C25F167A06A7C2E828CCE93232407EC49643BC4DE1562FB9EB1E` | Closes the original-Hero governance rebase |
| 5 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_USER_CONFIRMED_HERO_OVERRIDE_V1.0.md` | 3,867 | `32AD5FDE26FA69101B7E18070DA3F14FE30FF2E02899348A38BC0E952699C393` | Exact original Hero and user confirmation of other skeleton content |
| 6 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_CONTENT_SKELETON_V1.1.md` | 15,535 | `016E8241AAF4A3C31ED0C8D52504E52AD64D60BA6CAA1173029A548F8B844DEE` | Confirmed skeleton except superseded Hero and Destination Country descriptions overridden by priority 1 |
| 7 | `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_SEO_GEO_SCHEMA_DIRECTION_V1.1.md` | 8,256 | `43582BD39200D12CD2E27F232737F4C5BA6197C544C22AC103823D5AFF5D08F2` | Confirmed SEO/GEO/Schema direction |
| 8 | `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V1.2.2.md` | 16,624 | `D0EB8C435616B5EE5DEC43F573D4F0C792421284F836E2D8B6DF4EFEF4A0722F` | Approved Gate 1 page contract except overridden Destination Country control |
| 9 | `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_INTENT_FIELD_EVIDENCE_REBASE_V1.2.2.md` | 12,293 | `22F6228DB5589A3A6587A813CE464FB05FB8363B799101E85F52FF7403F7087D` | Approved evidence audit except overridden Destination Country control |

## 2. Current exact Hero and metadata

Hero:

> Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.

- SEO Title: `Request a Titanium Dioxide Quote | TiO2 Malaysia`
- Meta Description: `Request a titanium dioxide quotation from TiO2 Malaysia by providing your grade, application, quantity in metric tonnes and destination for review.`
- H1: `Request a Titanium Dioxide Quote`

The V1.1 `Tell us the grade you need...` Hero remains superseded and is not current copy.

## 3. Gate baseline

| Gate | Current artifact | State |
|---|---|---|
| Gate 1 | Brief/Audit/closure V1.2.2 | `APPROVED / CLOSED` |
| Gate 2 skeleton | Hero Override V1.0 + Skeleton V1.1 + SEO direction V1.1 | `USER_CONFIRMED / PROJECT_CONTROL_REBASE_CLOSED` |
| Gate 2 full copy | Full Copy V1.1 + Validation V1.1 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / TARGETED_REVISION / NOT_APPROVED` |
| Gate 3 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 4 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 5 | NONE | `NOT_STARTED / NOT_AUTHORIZED` |

Current visual assets: `NONE`.

## 4. Frozen module and responsive contract

- Shared Header → Breadcrumb → Hero → one RFQ Form → Alternative Requests → shared Footer.
- PC/desktop is one vertical page flow; no left/right page composition or side rail.
- Only the form-internal field Grid may use two columns on Desktop.
- Tablet and Mobile remain single-column; fixed MT suffix remains adjacent.
- One solid page-body CTA; no second form or sticky submit action.
- Global Chrome V0.5 remains shared; RFQ links remain visible at `/request-a-quote/`.
- Shared Footer boundary: `Consume the approved shared Footer unchanged.` Footer ownership and readiness remain with Home / Global Chrome and are not a CONV-RFQ Gate 2 copy item.

## 5. Complete-copy coverage

The full-copy artifact contains:

- all Buyer Clean headings, paragraphs, labels, options, helpers, links and button labels;
- validation summary, field errors and focus behavior;
- submitting, failure, success, privacy, human-review, unknown-grade and insufficient-information behavior;
- form/route unavailable proof with internal `RELEASE_BLOCKER` boundary and no Contact fallback;
- exact SEO Title, Meta, H1, Canonical/robots recommendation and Schema scope;
- prefill, PRODUCT V0.3 and no-promise restrictions;
- Desktop/Tablet/Mobile content-order constraints for later Gate 3.

### 5.1 Destination Country delivery contract

- Required single-line text input with label `Destination Country`.
- Placeholder: `Enter the destination country`.
- Maximum: 100 Unicode characters after trimming.
- Empty error: `Enter a destination country.`
- Overlength error: `Keep the destination country to 100 characters or fewer.`
- No select, country list, shared dataset, country code, region taxonomy or automatic country normalization.
- Buyer-entered text is editable RFQ context only and proves no service, shipping, regulation or market support.
- Explicit actual-country text prefill may be carried; a broad market/region is not auto-filled. Invalid, empty or overlength prefill returns to empty without a first-load error.

## 6. Historical control

| File | Bytes | SHA-256 | Disposition |
|---|---:|---|---|
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.7.md` | 6,748 | `9D9F784234B6B753B62B25717840B62F78812548CC6BC6BAAD84500DADB32406` | `HISTORICAL SUBMISSION-TIME MANIFEST / SUPERSEDED_BY_V1.8` |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.0.md` | 15,460 | `F44741D2AA4580FD824DBB521797A22B879556D49EF7918E2F23C99BA77DE003` | `HISTORICAL / RETURNED_FOR_TARGETED_REVISION / SUPERSEDED_BY_V1.1` |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_VALIDATION_V1.0.md` | 4,550 | `859827843531646011D56CCC355926E2878C9060DFD0299686F1EB800E7E6682` | `HISTORICAL / SUPERSEDED_BY_V1.1` |
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.0.md` | 6,064 | `FCFA1B2834A53D5A51EEC7331189BABD754DFCED41A3F655B544DC19356C931E` | `HISTORICAL RETURNED SUBMISSION / NOT_APPROVED` |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.6.md` | 5,650 | `CB0BC03EDA2263D3F42C0B74A0CBA08F9198F5E4B189F0A66CA6E666B9123D9C` | `HISTORICAL / SUPERSEDED_BY_V1.7` |
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_USER_DIRECTED_HERO_REBASE_REVIEW_SUBMISSION_V1.0.md` | 3,817 | `F02FC508B81E406172D0231937329C7BA594CD3D18E8E496ECE2909666F3BA00` | `HISTORICAL SUBMISSION / PROJECT_CONTROL_REVIEW_PASS` |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.5.md` | 7,769 | `B8C6EFE7A3D6D7F7780242F22624EE863EC5E0272D166A98652ED9A81C556A9D` | `HISTORICAL / SUPERSEDED_BY_V1.6` |

All earlier artifacts retain their recorded hashes and dispositions. No historical file was rewritten or deleted.

## 7. Open issues and next action

| ID | Item | Status | Effect |
|---|---|---|---|
| G2-COPY | Targeted complete-copy re-review | `OPEN / CONV-RFQ-G2-FULL-COPY-PCR-01 / NOT_APPROVED` | Blocks `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` |
| G3-AUTH | Gate 3 authorization | `NOT_GRANTED` | Blocks wireframes and visual work |
| REL-01 | RFQ route/form/receiver readiness | `NOT_TESTED / RELEASE_BLOCKER_IF_UNAVAILABLE` | Later Gate 7–9/release verification |
| REL-02 | Form-area Privacy Policy and Sample/Documents routes | `PARALLEL / OPEN` | Retained in page content; later verification |
| SEO-ACT | Canonical/robots/Schema activation | `NOT_AUTHORIZED` | Planning only |

Next action: submit `CONV-RFQ-G2-FULL-COPY-PCR-01` for targeted project-control re-review. Stop before Gate 3.
