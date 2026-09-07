# CONV-RFQ Gate 2 Skeleton Project-control Review Submission V1.1

## 0. Submission control

| Field | Value |
|---|---|
| Review ID | `CONV-RFQ-G2-SKELETON-PCR-01` |
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 2 — content-skeleton checkpoint |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / TARGETED_REVISION` |
| Checkpoint | `CONTENT_SKELETON_PENDING_USER_CONFIRMATION / REVISION_REQUIRED` |
| Gate 1 | `CONV-RFQ-G1-V12-DIRECTED-03 = APPROVED / CLOSED` |
| Authorization | User instruction `启动Gate2`, 2026-09-01 |
| Return authority | Project-control return against `CONV-RFQ-G2-SKELETON-01`; three targeted corrections |
| Requested action | Re-review only the corrected Hero, SEO Title/Meta and fixed MT suffix treatment |

This is a targeted revision, not project-control PASS, user approval, a completed Gate 2, Gate 3 authorization or development authority. All Gate 2 decisions outside the three returned items remain frozen.

## 1. Current review payload

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V1.2.2.md` | 16,624 | `D0EB8C435616B5EE5DEC43F573D4F0C792421284F836E2D8B6DF4EFEF4A0722F` | Approved Gate 1 page contract |
| `pages/conversion/request-a-quote/01_research/CONV-RFQ_GATE1_INTENT_FIELD_EVIDENCE_REBASE_V1.2.2.md` | 12,293 | `22F6228DB5589A3A6587A813CE464FB05FB8363B799101E85F52FF7403F7087D` | Approved Gate 1 evidence and relationship audit |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_CONTENT_SKELETON_V1.1.md` | 15,535 | `016E8241AAF4A3C31ED0C8D52504E52AD64D60BA6CAA1173029A548F8B844DEE` | Targeted Hero and MT-field correction |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_SEO_GEO_SCHEMA_DIRECTION_V1.1.md` | 8,256 | `43582BD39200D12CD2E27F232737F4C5BA6197C544C22AC103823D5AFF5D08F2` | Targeted SEO Title and Meta correction |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.4.md` | 13,363 | `C1E8A1194F322B394E82CCD5D22C89504FE84C49E3BF91CDAA26748D309A305D` | Current unique Gate 1–5 control Manifest |

## 2. Returned items and corrections

| Returned item | Corrected current result | Re-review request |
|---|---|---|
| Hero paragraph | `Tell us the grade you need—or choose “Not sure / Need help”—then provide your application, required quantity in metric tonnes and destination. Our team will review the submitted details and contact you using the information provided.` | Confirm exact string |
| SEO Title | `Request a Titanium Dioxide Quote | TiO2 Malaysia` | Confirm exact string; primary keyword remains assigned without exact-match stuffing |
| Meta Description | `Request a titanium dioxide quotation from TiO2 Malaysia by providing your grade, application, quantity in metric tonnes and destination for review.` | Confirm exact string |
| Quantity/unit control | `Required Quantity [input] + Metric tonnes (MT) [fixed suffix]` | Confirm suffix is static, non-editable adjacent text—not a select, radio or separate input |
| Responsive unit treatment | Tablet and Mobile keep the same adjacent fixed suffix; no kg or Other unit | Confirm semantic parity |

## 3. Frozen decisions retained unchanged

| Decision | Current result |
|---|---|
| H1 `Request a Titanium Dioxide Quote` | FROZEN |
| Module order: shared Header → breadcrumb → Hero → one RFQ form → Alternative Requests → shared Footer | FROZEN |
| Three form groups and one Product / Grade selector | FROZEN |
| Product/Grade has 14 grades plus `Not sure / Need help` | FROZEN |
| Application and Destination are independent buyer context; no automatic grade selection | FROZEN |
| Required/optional fields match approved minimum set | FROZEN |
| Phone / WhatsApp and Website remain optional | FROZEN |
| Exact success, failure and privacy text | FROZEN |
| Low-weight Sample/Documents links remain in the complete final experience | FROZEN |
| Contact remains absent as a failure or unavailable fallback | FROZEN |
| Desktop is one page flow with form-internal two-column Grid; Tablet/Mobile single column | FROZEN |
| PRODUCT V0.3 restrictions and neutral prefill rules | FROZEN |
| Global Chrome V0.5 and permanent RFQ links | FROZEN |
| Canonical/robots, GEO answers and `WebPage` + `BreadcrumbList` Schema scope | FROZEN |

The revision does not introduce a left/right page composition, side rail, second form, second solid body CTA, multiple-grade path, additional field, alternate unit, FAQ or long Human Review module.

## 4. Historical disposition

The following first submission is preserved unchanged as returned history and is not current control:

| Historical file | SHA-256 | Disposition |
|---|---|---|
| `CONV-RFQ_GATE2_CONTENT_SKELETON_V1.0.md` | `C5CD8C02141599882D859BBCE0B01636546F2DCAD9285741F6D784ED04ACF843` | `HISTORICAL / RETURNED_FOR_TARGETED_REVISION` |
| `CONV-RFQ_GATE2_SEO_GEO_SCHEMA_DIRECTION_V1.0.md` | `B72D70F2E2FF68387C19276B3A7C6DC9101C37E9A160A58BFA7FF7B1F25ED747` | `HISTORICAL / RETURNED_FOR_TARGETED_REVISION` |
| `CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.3.md` | `72B89CAA6507CC120DF88FDC0593B2628D91BD5A77DF45646A031B47AA695D07` | `HISTORICAL / SUPERSEDED_BY_V1.4` |
| `CONV-RFQ_GATE2_SKELETON_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.0.md` | `47D0D84686FC927F09CBFA61ACECD3E7C2A38A2C1881312171DF900CF61C95BF` | `HISTORICAL / RETURNED_FOR_TARGETED_REVISION` |

Earlier Playbook and V0.x artifacts remain non-current wherever they conflict with approved Gate 1. No historical file was rewritten or deleted.

## 5. Gate 2 checkpoint coverage

| Required item | Evidence | Result |
|---|---|---|
| H1, exact corrected Hero and module order | Content Skeleton §§2–3 | PRESENT |
| Form fields, grouping, fixed MT suffix and responsive semantics | Content Skeleton §§4–5 | PRESENT |
| Prefill and upstream context | Content Skeleton §6 | PRESENT |
| Validation, focus, failure, success, privacy and unavailable states | Content Skeleton §7 | PRESENT |
| CTA, Alternative Requests, links and Global Chrome | Content Skeleton §§8–10 | PRESENT |
| PRODUCT V0.3 and restricted relationships | Content Skeleton §11 | PRESENT |
| Exact corrected SEO Title and Meta | SEO/GEO Direction §2 | PRESENT |
| GEO entities and extractable answers | SEO/GEO Direction §4 | PRESENT |
| Schema scope and visible/machine parity | SEO/GEO Direction §§5–6 | PRESENT |
| Complete full copy | NOT YET REQUIRED / BLOCKED BY SKELETON CONFIRMATION |
| `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` | OPEN / NOT CLAIMED |

## 6. Requested project-control decisions

1. Confirm or return the exact corrected Hero paragraph in §2.
2. Confirm or return the exact corrected SEO Title and Meta Description in §2.
3. Confirm or return `Required Quantity [input] + Metric tonnes (MT) [fixed suffix]` across Desktop, Tablet and Mobile, with no separate Unit control and no kg/Other option.

No other content, module, CTA, link, field, state, responsive, SEO/GEO/Schema, PRODUCT or Global Chrome decision is reopened by this submission. If these three corrections pass, the checkpoint may proceed to user skeleton confirmation before complete Gate 2 copy.

## 7. Open dependencies

| Item | Status | Effect |
|---|---|---|
| Targeted Gate 2 skeleton re-review | OPEN | Blocks user skeleton confirmation |
| User skeleton confirmation | OPEN | Blocks complete Gate 2 copy |
| Privacy/legal/cookie shared routes and production data flow | PARALLEL | Included in final design; verify Gate 7–9 and before release |
| RFQ receiver and workflow owner | NOT VERIFIED | Blocks operational release; does not justify invented Buyer Clean copy |
| RFQ/Sample/Documents route readiness | NOT TESTED | Later release verification; final links remain visible in Gate 1–5 target |
| Canonical/robots activation | NOT AUTHORIZED | Recommendation only |

## 8. Stop statement

Work stops at the targeted Gate 2 skeleton re-review submission. Complete Gate 2 copy, `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`, Gate 3, wireframes, visual direction, complete visual, code, development, route creation, legal-page implementation, deployment, publication and indexing are not claimed or authorized.

## 9. Validation record

| Check | Result |
|---|---|
| Current Gate 2 targeted-revision files | `4/4 PASS` |
| Review ID, targeted status and revision checkpoint | `4/4 PASS` |
| Exact corrected Hero | `PASS` |
| Exact corrected SEO Title / Meta | `PASS` |
| SEO Title / Meta character lengths | `48 / 147 / PASS` |
| Required Quantity uses adjacent non-editable MT suffix | `PASS` |
| Separate Unit control and kg/Other options | `ABSENT / PASS` |
| Desktop/Tablet/Mobile fixed-suffix semantics | `PASS` |
| Frozen module, field, state, CTA, link and Schema decisions | `UNCHANGED / PASS` |
| Exact success, failure and privacy strings | `PASS` |
| PRODUCT V0.3 and no Contact fallback | `PASS` |
| Current payload and Manifest hash references | `PASS` |
| Historical V1.0 payload hashes unchanged | `4/4 PASS` |
| Full-copy checkpoint claimed | `NO / PASS` |
| Gate 3 authorization | `NOT_STARTED / NOT_AUTHORIZED / PASS` |

The residual scan found no active separate Unit field, alternate unit, multiple-grade path, acknowledgement checkbox, old submit/state copy, route-hide rule or Contact fallback. Historical documents may retain superseded terms only as evidence.
