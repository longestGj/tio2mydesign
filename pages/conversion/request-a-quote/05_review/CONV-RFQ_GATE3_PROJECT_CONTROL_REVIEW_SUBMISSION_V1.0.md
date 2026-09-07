# CONV-RFQ Gate 3 Project-control Review Submission V1.0

## 0. Submission control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 3 — responsive wireframe |
| Review ID | `CONV-RFQ-G3-WF-01` |
| Date | 2026-09-01 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED / CLOSED` |
| Gate 3 authority | `USER_AUTHORIZED_2026-09-01 / START` |
| Gate 4–5 | `NOT_STARTED / NOT_AUTHORIZED` |

Submission is not Gate 3 PASS, user approval of wireframes, Gate 4/5 authority, development authority or release readiness.

## 1. Governance payload

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_APPROVAL_CLOSURE_V1.0.md` | 3,168 | `E720C525C4BD0B1BA5B9C3E22978347714CE54348002B84A83AED63162531016` | Gate 2 closure and Gate 3 authorization |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE3_WIREFRAME_SPEC_V1.0.md` | 7,174 | `F9D334F8FDE36EE41CD32484ED954ED79829D771D912AA01BC8963D57BDD0BEB` | Responsive layout and state specification |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE3_WIREFRAME_VALIDATION_V1.0.md` | 4,553 | `A78ABDF6373E30D0C568CE451D22CA3E4447435D04065435477FCDF153575CB7` | Raster, visual, field/state and boundary QA |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.0.md` | 6,215 | `0CEFE3873425BA46ED539F244341B795AA9C31A305563BCC9E5662E267E876B0` | Current unique Gate 1–5 Manifest |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.1.md` | 16,377 | `0D38C9ED1C3BEB4121BF4BA924D53E9B8E153A51F30EC9B87B7A74717272FDC2` | Approved complete copy consumed by wireframes |

## 2. Actual grayscale wireframes

| Asset | Evidence | SHA-256 |
|---|---|---|
| Desktop 1440 | 1440 × 2720 PNG | `D34AFAC18B4F946EABCA57D78DD38CC6ECA9C98EBEE39FD9DD1ACB5C4B9EF0CF` |
| Tablet 768 | 768 × 2600 PNG | `01017507F534EADFFB515469343823F86B7C0EF2A2B1DAA2E27E6F5D9D7585E1` |
| Mobile 390 logical | 780 × 5520 PNG, 390 logical @2x | `D68C761A8ADF98A224D266BB08DA2FB19AB9A5A81ECA0B029DE2D352EC82BED1` |
| Mobile Menu open | 780 × 1688 PNG, 390 logical @2x | `14129B54763224ECC4ABBFB5ED6695D9F842E607B091447C029CD2285B6592C0` |
| Key State Board | 1440 × 2220 PNG | `28CF417B7F3926DBA47A00BDF13E1BE1C34F85206D093837730C826C4EA8F6B5` |

All five are actual raster assets. Mechanical channel inspection found zero non-grayscale samples.

## 3. Structural decisions submitted

| Decision | Result |
|---|---|
| Page order | Breadcrumb → compact Hero → one RFQ form → low-weight Other request types → shared Footer |
| Desktop composition | One vertical page flow; two columns only inside form fields |
| Prohibited desktop patterns | No page split, side rail, context rail or Dashboard shell |
| Tablet/Mobile | Single-column field order |
| Quantity | Input and fixed `Metric tonnes (MT)` suffix remain adjacent |
| Destination Country | Required free-text input; no list UI |
| Product / Grade | Single-select |
| Optional fields | Phone / WhatsApp and Website retained; Phone has no helper |
| CTA | One solid body submit; Sample/Documents remain text links |
| Privacy | Form-area visible Privacy Policy link retained |
| Shared Chrome | Header/Mobile Menu/Footer consumed unchanged and not page-designed |

## 4. State evidence submitted

The independent grayscale State Board includes:

- initial neutral fields;
- explicit visible editable prefill;
- validation summary, field errors and focus target;
- `SUBMITTING…` and duplicate-submit protection;
- exact submission failure and retry;
- exact receipt-only success;
- exact route/form unavailable state with review-only blocker annotation outside Buyer Clean;
- Destination Country overlength proof with optional Phone and Website retained.

## 5. Visual QA results

| Check | Result |
|---|---|
| Desktop full-page assembly | PASS |
| Tablet full-page assembly | PASS |
| Mobile 390 logical full-page assembly | PASS |
| Mobile Menu open | PASS |
| Mobile H1 wrapping | PASS |
| Mobile helper/privacy overlap | ABSENT / PASS |
| Horizontal overflow in reviewed content | ABSENT / PASS |
| Shared Footer enumeration | ABSENT / PASS |
| Superseded Hero | ABSENT / PASS |
| Country list UI | ABSENT / PASS |
| Contact fallback | ABSENT / PASS |
| Gate 4/5 or development work | NONE / PASS |

## 6. Requested project-control decisions

1. Confirm or return the 1440 Desktop one-page structure and form-internal Grid.
2. Confirm or return the 768 Tablet single-column structure.
3. Confirm or return the 390 logical @2x Mobile structure and Mobile Menu open assembly.
4. Confirm or return the Key State Board coverage and Buyer Clean/review-annotation separation.
5. Confirm the wireframes consume the approved Gate 2 copy without changing Hero, fields, state wording, SEO/GEO/Schema or PRODUCT restrictions.
6. Confirm whether Gate 3 may move to `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION`; do not infer user approval.

## 7. Stop statement

Work stops at the Gate 3 project-control submission. Do not self-approve Gate 3, begin Gate 4 or Gate 5, create full-color visuals, operate `D:\16Wordpress_nextjs`, develop, deploy, publish or index.
