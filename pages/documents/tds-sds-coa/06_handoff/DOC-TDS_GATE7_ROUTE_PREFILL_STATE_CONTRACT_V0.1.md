# DOC-TDS Gate 7 Route, Prefill and State Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-TDS-G7-HANDOFF-01` |
| Source | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Receiver | `CONV-DOC` / `/request-documents/` |
| Site scope | `tio2-my` |
| Gate 8 | `NOT_AUTHORIZED` |

## 1. Route keys

| Route key | Required path | Owner |
|---|---|---|
| `DOC_TDS` | `/documents/tds-sds-coa/` | DOC-TDS |
| `DOCUMENTS_HUB` | `/documents/` | DOC-000 |
| `REQUEST_DOCUMENTS` | `/request-documents/` | CONV-DOC |
| `DOC_REACH` | `/documents/reach/` | DOC-REACH |
| `DOC_COO` | `/documents/certificate-of-origin/` | DOC-COO |
| `REQUEST_A_QUOTE` | `/request-a-quote/` | Global Chrome / CONV-RFQ |

All routes resolve within `site_scope=tio2-my`. Preview/staging locations never become Canonical or public link configuration.

## 2. Semantic prefill contract

| Source selection | Receiver semantic field | Cardinality | Receiver behavior |
|---|---|---|---|
| TDS | `prefill.document_types[] = technical_product` | one member | Visible, checked, editable/removable |
| SDS | `prefill.document_types[] = safety` | one member | Visible, checked, editable/removable |
| COA | `prefill.document_types[] = quality_coa` | one member | Visible, checked, editable/removable |
| Product Grade | `prefill.product_grade` | zero or one | Visible selected value; editable/removable |
| Additional Grades | `additional_requirements` buyer text | unstructured only | Buyer enters names on CONV-DOC; never automatic structured mapping |
| Page source | `source_context.page_id = DOC-TDS` | one internal value | System-controlled, hidden and non-editable |

CONV-DOC still requires one Product Grade and at least one document type before submission. DOC-TDS may open the form without either preselected.

## 3. URL transport

When URL transport is used, the approved public query keys are:

- repeated `document_types[]` for selected document values;
- one `product_grade` for an allowlisted Grade.

Parameter order is deterministic:

1. `document_types[]` in TDS, SDS, COA display order;
2. `product_grade` last when selected.

Examples:

| DOC-TDS state | Target |
|---|---|
| no selection | `/request-documents/` |
| TDS only | `/request-documents/?document_types%5B%5D=technical_product` |
| TDS + M-2196 | `/request-documents/?document_types%5B%5D=technical_product&product_grade=M-2196` |
| SDS + COA / no Grade | `/request-documents/?document_types%5B%5D=safety&document_types%5B%5D=quality_coa` |

Equivalent framework-native state transfer is allowed only if it produces the same visible editable receiver state, clean Canonical behavior, browser navigation behavior and security properties.

`source_page=DOC-TDS` is a semantic internal alias, not an approved buyer-visible query parameter or form field. The receiver obtains trusted source attribution from scoped route/configuration context. If an untrusted public query contains `source_page`, it cannot establish or change source attribution and is never reflected into visible copy, metadata, Schema, analytics or logs.

## 4. Normalization

### 4.1 Document types

- Accept only `technical_product`, `safety`, `quality_coa` from DOC-TDS.
- Remove unsupported values, empty values and duplicates.
- Preserve approved source order rather than attacker-supplied ordering.
- If every value is removed, leave the receiver group unselected without a first-load error.
- DOC-TDS does not prefill `origin_supplier_qualification` or `other`.

### 4.2 Product Grade

- Accept exactly one member of the approved 14-Grade allowlist.
- Repeated, array-shaped, comma-delimited, empty, malformed or unsupported Grade input is discarded.
- Discarded Grade returns the receiver to an unselected editable field without a first-load error or unsafe echo.
- Grade identity is case-sensitive and canonical.

### 4.3 Hidden source

- Hidden source never satisfies a visible required field.
- It never changes document availability, applicability, Grade, jurisdiction, language or receiver result.
- Tampered/missing public source input cannot override trusted internal attribution.
- Analytics may use only an approved event source key after consent rules; no buyer fields enter event parameters.

## 5. DOC-TDS interaction states

| State | Summary | Request target behavior |
|---|---|---|
| Initial | `No request context selected yet.` | Base receiver route; no query |
| One type | `Selected: {TYPE}` | One valid repeated-array value |
| Multiple types | `Selected: {TYPE, TYPE...}` | Repeated valid values in display order |
| Grade only | `Product Grade: {GRADE}` | One `product_grade` value |
| Types + Grade | `Selected: {TYPES} · Product Grade: {GRADE}` | Selected type values followed by Grade |
| Cleared | Initial summary restored | Base receiver route |

All three primary actions update from the same state. Browser Back/Forward must restore a coherent page state without false receipt, availability or error messaging.

## 6. Route eligibility and failure behavior

- If CONV-DOC is ineligible, remove all three primary request actions and every machine-readable request relationship atomically.
- Do not render disabled links, empty `href`, `#`, Contact, RFQ, email or phone as a substitute.
- Keep informational modules unless their content independently becomes ineligible.
- If DOC-REACH or DOC-COO is ineligible, omit its full related card atomically.
- If DOC-000 is ineligible, omit the relevant secondary action/card; do not substitute another destination.
- Missing Global RFQ route is a shared complete-site release blocker owned by Global Chrome.

Contact fallback remains prohibited.

No `potentialAction` or other action Schema node is newly authorized by this contract. If any machine-readable request relationship is proposed later, it requires D23 change approval and must follow the same eligibility state as the visible action.

## 7. Gate 8/9 evidence

Gate 9 must receive evidence for:

- zero/one/multiple document-type states;
- Grade-only and combined states;
- all 14 valid Grades;
- duplicates, unsupported values, repeated Grades, malformed encoding and injection-like inputs;
- source-attribution tampering;
- synchronized Hero/Grade/Final action destinations;
- clean query-free Canonical for every state;
- Back/Forward restoration;
- route-unavailable atomic omission;
- no cross-scope fallback.

## 8. Boundary

This contract does not authorize implementation or receiver changes. CONV-DOC's current production-credential, approved-recipient, mailbox-receipt, production WordPress and Privacy/data-flow blockers remain open until separately verified.
