# CONV-RFQ Gate 2 Full Copy Project-control Review Submission V1.1

## 0. Submission control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 2 — complete-copy checkpoint |
| Review ID | `CONV-RFQ-G2-FULL-COPY-PCR-01` |
| Date | 2026-09-01 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / TARGETED_REVISION / NOT_APPROVED` |
| Requested checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` |
| Skeleton | `USER_CONFIRMED_WITH_HERO_REVERT_TO_ORIGINAL` |
| Hero rebase | `CONV-RFQ-G2-HERO-USER-REBASE-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Return authority | `CONV-RFQ-G2-FULL-COPY-01 = TARGETED_REVISION_REQUIRED / NOT_APPROVED` |
| Targeted scope | User-confirmed Destination Country required free-text contract only |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` |

Submission is not project-control PASS, a closed Gate 2, Gate 3 authorization, visual approval, development authority or release readiness.

## 1. Review payload

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_USER_CONFIRMED_DESTINATION_COUNTRY_TEXT_INPUT_OVERRIDE_V1.0.md` | 2,484 | `33E1613A4390EFADEBFEE4CAF5103E05A880D8DE3B6D36E9BD52CCC0A44C95D8` | Current user authority for Destination Country |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.1.md` | 16,377 | `0D38C9ED1C3BEB4121BF4BA924D53E9B8E153A51F30EC9B87B7A74717272FDC2` | Current targeted Buyer Clean copy and interaction states |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_VALIDATION_V1.1.md` | 5,654 | `0E59D84A4A85005D90A92AB4173B3019BC18539316196940E7A08E84EB399C2E` | Targeted country-contract and frozen-copy validation |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.8.md` | 9,239 | `E07C7938AA41216706AC5E2243581D843310C4D7C84E1F454FA025F6D07B119A` | Current unique Gate 1–5 Manifest |
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_HERO_USER_REBASE_PROJECT_CONTROL_CLOSURE_V1.0.md` | 2,116 | `BEE101988724C25F167A06A7C2E828CCE93232407EC49643BC4DE1562FB9EB1E` | Current Hero authority closure |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_USER_CONFIRMED_HERO_OVERRIDE_V1.0.md` | 3,867 | `32AD5FDE26FA69101B7E18070DA3F14FE30FF2E02899348A38BC0E952699C393` | User decision and exact original Hero |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_CONTENT_SKELETON_V1.1.md` | 15,535 | `016E8241AAF4A3C31ED0C8D52504E52AD64D60BA6CAA1173029A548F8B844DEE` | User-confirmed skeleton excluding superseded Hero and overridden Destination Country description |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_SEO_GEO_SCHEMA_DIRECTION_V1.1.md` | 8,256 | `43582BD39200D12CD2E27F232737F4C5BA6197C544C22AC103823D5AFF5D08F2` | User-confirmed SEO/GEO/Schema direction |

## 2. Full-copy decisions submitted

| Area | Current result |
|---|---|
| Hero | Original user-confirmed text used exactly; V1.1 rewrite absent |
| Module order | Header → Breadcrumb → Hero → one RFQ Form → Alternative Requests → Footer |
| Form copy | Complete headings, introduction, labels, values, helpers, privacy and CTA |
| Minimum field set | Matches confirmed skeleton; no additional workflow field or acknowledgement checkbox |
| Destination Country | Required single-line text; placeholder `Enter the destination country`; 100 Unicode characters after trimming |
| Destination validation | `Enter a destination country.` / `Keep the destination country to 100 characters or fewer.` |
| Destination prefill | Explicit actual-country text only, visible/editable; broad region not auto-filled; invalid/empty/overlength clears silently on first load |
| Destination exclusions | No select, country list, shared dataset, country code, region taxonomy or automatic normalization |
| Quantity | Fixed adjacent `Metric tonnes (MT)` suffix; no separate Unit control, kg or Other |
| Prefill | Existing editable fields only; no context rail or inferred relationship |
| Validation | Summary, focus, field errors, preservation behavior and first-load boundary complete |
| Submission states | Submitting, failure, retry and receipt-only success complete |
| Review states | Unknown grade, insufficient information and human-review boundaries complete |
| Unavailable state | Exact proof copy, no Contact fallback, route/form unavailability remains release blocker |
| Alternative requests | Low-weight Sample/Documents links retained with no availability/approval claim |
| SEO/GEO/Schema | Exact Title/Meta/H1/Canonical/robots direction and WebPage/BreadcrumbList-only scope |
| PRODUCT V0.3 | M-2377, Specialty Materials, Rubber, M-996/M-2196 and NO_PUBLIC_MAPPING rules retained |
| Responsive content order | PC one-page flow without left/right page split; form-internal Grid only; Tablet/Mobile single-column |
| Global Chrome | V0.5 unchanged; permanent RFQ links remain visible |
| Shared Footer | `Consume the approved shared Footer unchanged.` No page-level enumeration, design or implementation; form-area Privacy Policy link retained separately |

## 3. Requested project-control decisions

1. Confirm the user-confirmed Destination Country field is a required single-line text input with exact placeholder, 100-character boundary and exact empty/overlength errors.
2. Confirm there is no current country select/list/dataset/code/taxonomy/automatic-normalization contract.
3. Confirm upstream prefill behavior matches the explicit text-only, editable and silent-neutral fallback contract.
4. Confirm Shared Footer is outside the page-level revision scope and the form-area Privacy Policy link remains present.
5. Confirm all other full-copy/module-order decisions remain frozen and unchanged.
6. Confirm whether `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` may be recorded.

## 4. Mechanical validation summary

| Check | Result |
|---|---|
| Original Hero exact match | `PASS` |
| Superseded Hero in current full copy | `0 / PASS` |
| Required state-copy strings | `PASS` |
| 14 grades plus `Not sure / Need help` | `PASS` |
| Seven Application choices | `PASS` |
| Destination Country single-line text contract | `PASS` |
| Placeholder / max length / two exact errors | `PASS` |
| Country select/list/dataset/code/taxonomy/normalization | `0 / PASS` |
| Broad-region automatic prefill | `0 / PASS` |
| Invalid prefill first-load error | `0 / PASS` |
| Separate Unit control / kg / Other option | `0 / PASS` |
| Contact route fallback | `0 / PASS` |
| Desktop page split/side rail | `0 / PASS` |
| Full-copy coverage | `PASS` |
| PRODUCT V0.3 restricted claims | `PASS` |
| SEO/GEO/Schema parity | `PASS` |
| Shared Footer page-level enumeration/implementation | `0 / PASS` |
| Form-area Privacy Policy link | `PRESENT / PASS` |
| Current payload hash references | `PASS` |
| Historical V1.0/V1.7 and earlier artifacts unchanged | `PASS` |
| Gate 3 authorization | `NOT_STARTED / NOT_AUTHORIZED / PASS` |

## 5. Open release dependencies

| Item | Status | Effect |
|---|---|---|
| RFQ route, form and receiver readiness | NOT TESTED | Later release blocker if unavailable |
| Form-area Privacy Policy route | PARALLEL / OPEN | Visible form link retained; later verification |
| Request Sample/Documents routes | PARALLEL / OPEN | Must remain visible in final experience and be verified later |
| Canonical/robots/Schema activation | NOT AUTHORIZED | Planning direction only |

## 6. Stop statement

Work stops at the Gate 2 targeted full-copy project-control submission. Status remains `DRAFT / NOT_APPROVED`. Do not claim `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`, close Gate 2, begin Gate 3, create wireframes or visuals, enter `D:\16Wordpress_nextjs`, implement code, deploy, publish or index until the required decisions are separately recorded.
