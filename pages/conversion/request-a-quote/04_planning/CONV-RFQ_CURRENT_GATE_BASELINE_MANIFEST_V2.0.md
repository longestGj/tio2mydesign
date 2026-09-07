# CONV-RFQ Current Gate Baseline Manifest V2.0

## 0. Identity and status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Version | V2.0 |
| Current gate | Gate 3 — responsive wireframe |
| Review ID | `CONV-RFQ-G3-WF-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED / CLOSED` |
| Approval source | `USER_APPROVAL_2026-09-01 + PROJECT_CONTROL_REVIEW_PASS` |
| Gate 3 authorization | `AUTHORIZED / START` |
| Gate 4–5 | `NOT_STARTED / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 Manifest. It advances governance from the approved Gate 2 copy to actual Gate 3 grayscale wireframes. No Gate 3 PASS or later-gate authority is claimed.

## 1. Gate 2 authority consumed

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_APPROVAL_CLOSURE_V1.0.md` | 3,168 | `E720C525C4BD0B1BA5B9C3E22978347714CE54348002B84A83AED63162531016` | Gate 2 user approval and Gate 3 authorization |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_FULL_COPY_V1.1.md` | 16,377 | `0D38C9ED1C3BEB4121BF4BA924D53E9B8E153A51F30EC9B87B7A74717272FDC2` | Approved complete copy |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_USER_CONFIRMED_DESTINATION_COUNTRY_TEXT_INPUT_OVERRIDE_V1.0.md` | 2,484 | `33E1613A4390EFADEBFEE4CAF5103E05A880D8DE3B6D36E9BD52CCC0A44C95D8` | Destination Country text-input authority |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_USER_CONFIRMED_HERO_OVERRIDE_V1.0.md` | 3,867 | `32AD5FDE26FA69101B7E18070DA3F14FE30FF2E02899348A38BC0E952699C393` | Exact original Hero authority |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE2_SEO_GEO_SCHEMA_DIRECTION_V1.1.md` | 8,256 | `43582BD39200D12CD2E27F232737F4C5BA6197C544C22AC103823D5AFF5D08F2` | Approved SEO/GEO/Schema direction |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Shared authority | Current project hash controlled by Global Chrome owner | Header/Mobile Menu/Footer consumed unchanged |

## 2. Gate 3 planning documents

| File | Bytes | SHA-256 |
|---|---:|---|
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE3_WIREFRAME_SPEC_V1.0.md` | 7,174 | `F9D334F8FDE36EE41CD32484ED954ED79829D771D912AA01BC8963D57BDD0BEB` |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_GATE3_WIREFRAME_VALIDATION_V1.0.md` | 4,553 | `A78ABDF6373E30D0C568CE451D22CA3E4447435D04065435477FCDF153575CB7` |

## 3. Current raster assets

| Asset | Pixels / logical size | Bytes | SHA-256 |
|---|---:|---:|---|
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_DESKTOP_1440_V1.0.png` | 1440 × 2720 | 178,007 | `D34AFAC18B4F946EABCA57D78DD38CC6ECA9C98EBEE39FD9DD1ACB5C4B9EF0CF` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_TABLET_768_V1.0.png` | 768 × 2600 | 152,177 | `01017507F534EADFFB515469343823F86B7C0EF2A2B1DAA2E27E6F5D9D7585E1` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_390_LOGICAL_AT2X_V1.0.png` | 780 × 5520 / 390 × 2760 logical | 295,625 | `D68C761A8ADF98A224D266BB08DA2FB19AB9A5A81ECA0B029DE2D352EC82BED1` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V1.0.png` | 780 × 1688 / 390 × 844 logical | 59,718 | `14129B54763224ECC4ABBFB5ED6695D9F842E607B091447C029CD2285B6592C0` |
| `wireframes/gate3_v1.0/CONV-RFQ_GATE3_STATE_BOARD_1440_V1.0.png` | 1440 × 2220 | 197,290 | `28CF417B7F3926DBA47A00BDF13E1BE1C34F85206D093837730C826C4EA8F6B5` |

All current PNGs are grayscale and visually inspected. Matching SVG planning sources remain in the same directory with hashes recorded in the validation file.

## 4. Approved structural contract represented

- One vertical page flow: Breadcrumb → compact Hero → one RFQ form → low-weight Other request types → shared Footer.
- Desktop uses two columns only inside the form; no page-level split, side rail, context rail or Dashboard shell.
- Tablet and Mobile use one form-field column.
- Destination Country is a required free-text field, never a list.
- Required Quantity and fixed `Metric tonnes (MT)` stay adjacent.
- Product / Grade remains single-select.
- Phone / WhatsApp and Website remain present; Phone has no helper.
- One solid page-body submit CTA.
- Form-area Privacy Policy link remains visible.
- Shared Header, Mobile Menu and Footer are assembly evidence only and are consumed unchanged.

## 5. Key state evidence

The State Board proves:

1. Initial neutral state.
2. Editable explicit prefill.
3. Validation summary, field errors and focus target.
4. Submitting and duplicate-submit protection.
5. Submission failure and retained entries.
6. Receipt-only success.
7. Route/form unavailable Buyer Clean copy with external review annotation.
8. Long Destination Country error plus retained optional Phone and Website.

## 6. Gate state

| Gate | State |
|---|---|
| Gate 1 | `APPROVED / CLOSED` |
| Gate 2 | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED / CLOSED` |
| Gate 3 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 4 | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` |

## 7. Historical control

| File | Bytes | SHA-256 | Disposition |
|---|---:|---|---|
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.9.md` | 6,520 | `4A98D7A2A383CCDBC9717331D5D39E107D3F92354D466891AE8D9252992AAF94` | `HISTORICAL GATE 2 PENDING-CONFIRMATION MANIFEST / SUPERSEDED_BY_V2.0` |
| `pages/conversion/request-a-quote/04_planning/CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V1.8.md` | 9,239 | `E07C7938AA41216706AC5E2243581D843310C4D7C84E1F454FA025F6D07B119A` | `HISTORICAL REVIEW-TIME MANIFEST` |
| `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE2_FULL_COPY_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.1.md` | 7,838 | `9B00D4DE8BF2248A351F4ACBF06EC2BFCAFF1E289D8BD5904640F0B18EACAC8D` | `HISTORICAL SUBMISSION / PROJECT_CONTROL_REVIEW_PASS` |

No historical file was rewritten or deleted.

## 8. Next controlled action

Submit `CONV-RFQ-G3-WF-01` to project control. Stop at Gate 3; do not self-approve, begin Gate 4/5, create development specifications, operate D16, deploy or publish.
