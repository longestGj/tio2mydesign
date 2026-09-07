# DOC-000 Gate 7 Route and Prefill Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Package ID | `DOC-000-G7-HANDOFF-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Receiver | `CONV-DOC` / `/request-documents/` |
| Site scope | `tio2-my` |

## 1. Route keys

| Route key | Required resolved path | Owner |
|---|---|---|
| `DOCUMENTS_HUB` | `/documents/` | DOC-000 |
| `REQUEST_DOCUMENTS` | `/request-documents/` | CONV-DOC |
| `PRODUCTS_HUB` | `/products/` | PRODUCT-000 |
| `REQUEST_A_QUOTE` | `/request-a-quote/` | shared Global Chrome / CONV-RFQ |

Paths resolve within `site_scope=tio2-my`. Missing routes block release or cause the explicitly defined atomic omission; they never redirect to Contact, another scope or an unrelated conversion page.

## 2. Entry-path state table

| Entry | Input state | Output | Receiver state |
|---|---|---|---|
| Hero `Start a Document Request` | any Hub selector state | native link to `/request-documents/` with no query or fragment | Grade unselected; no default |
| Selector Continue | no Grade | stay on `/documents/`; render exact error; focus select | no request navigation |
| Selector Continue | one valid allowlisted Grade | `/request-documents/?product={URL_ENCODED_GRADE}` | matching Grade prefilled and editable/removable |
| Closing action | no Grade | stay on Hub; focus upper select | no request navigation |
| Closing action | one valid allowlisted Grade | same Grade-only URL as Selector | matching Grade prefilled and editable/removable |
| Explore Products | any state | native link to `/products/` | no Grade/document/suitability inference |

The Hero path ignores current selector state by design. It never appends a Grade or scrolls/focuses the Hub selector.

## 3. Query contract

| Property | Rule |
|---|---|
| Query key | exact `product` |
| Allowed cardinality | zero or one value |
| Allowed value | exact member of the 14-Grade allowlist |
| Encoding | URL-encode once; receiver decodes once and compares exact normalized identifier |
| Case | identifiers are case-sensitive canonical labels |
| Receiver field | visible editable Product Grade field |
| Persistence | prefill is initial context, not a locked or hidden value |

Allowlist:

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

## 4. Invalid-query fail-closed matrix

| Query example / condition | Receiver result |
|---|---|
| no `product` key | unselected editable Grade field |
| `?product=` | unselected editable Grade field |
| unsupported value | unselected editable Grade field |
| repeated `product` keys | unselected editable Grade field |
| comma-delimited or array-shaped value | unselected editable Grade field |
| malformed encoding | unselected editable Grade field; no unsafe echo |
| value with surrounding/embedded injection payload | reject as non-allowlisted; no echo into HTML |
| value sourced from another `site_scope` | reject; no fallback |

Fail-closed handling must not display negative suitability copy, a file-not-found message, internal validation token or availability implication. The buyer can choose a Grade normally on CONV-DOC.

## 5. Parameters DOC-000 must never send

DOC-000 sends none of the following:

- `category` or documentation category;
- `scenario` or review process;
- `document_type` or requested document types;
- `market`, destination or country;
- language;
- availability, applicability or approval state;
- file ID, filename, revision or URL;
- response time or delivery expectation.

CONV-DOC owns document-type selection, contact/company fields, additional requirements, privacy acknowledgement, submission and receipt states.

## 6. Selector state contract

### Initial

- No Grade selected.
- Continue visible, focusable and operable; not disabled.
- Helper visible.
- Reserved validation position prevents disruptive layout movement.

### Empty activation

1. Prevent navigation.
2. Set `aria-invalid=true` or equivalent valid state on the select.
3. Render `Select a product grade to continue.` in the associated error region.
4. Focus the select.
5. Preserve unrelated page state.

### Valid selected

- Clear stale error state.
- Render `Selected product grade: {GRADE}`.
- Keep Continue in the same location.
- Navigate only on explicit action activation.

Changing selection updates the confirmation and future URL. It does not navigate automatically.

## 7. Route failure behavior

- If `/request-documents/` is unresolved, release is blocked. Do not substitute Contact or RFQ.
- If `/products/` is unresolved, omit the complete assistance link atomically and record a release blocker; do not render a dead link.
- Shared RFQ route failure is owned by Global Chrome and blocks complete-site release.
- Preview/staging URLs must not leak into canonical or public route configuration.

## 8. Gate 8/9 required evidence

- Hero URL contains no query in all selector states.
- All 14 valid values generate one `product` key and prefill the matching editable receiver value.
- Empty, unsupported, repeated and malformed values fail closed.
- No prohibited parameter is emitted.
- Browser Back restores a coherent Hub state without false success or file state.
- Route responses and receiver data remain within `tio2-my`.

## 9. Boundary

Status remains `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. This contract does not authorize implementation or testing.
