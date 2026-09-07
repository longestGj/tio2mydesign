# CONV-DOC Gate 1 Intent, Keyword and Evidence Audit V0.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-DOC-G1-V11-PCR-01` |
| Gate | Gate 1 targeted rebaseline only |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Page | CONV-DOC / `/request-documents/` |

## 1. Intent audit result

V1.1 changes the page from a market/destination-aware document-request concept to a single controlled transaction page. The proposed intent is internally consistent when all of the following remain true:

- eight minimum fields only;
- Product Grade is required and supports all 14 published Grades;
- six grouped Document Types are request categories, not an inventory;
- Country / Region records contact/company location only;
- prefill is editable and does not freeze Product, route, regulatory, certification or document evidence;
- success confirms receipt only;
- RFQ and market content remain outside the page task.

No Gate 1 conclusion establishes that a document exists, is approved, is current, is applicable, can be released or will be delivered.

## 2. Keyword-master audit

Current CONV-DOC identity remains:

| Field | Value |
|---|---|
| URL | `/request-documents/` |
| Page type | Utility conversion page |
| Market scope | GLOBAL page scope; not a form-routing field |
| Language | EN |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Search intent | T |
| Buyer stage | Lead Capture |
| Priority | P0 |
| Mapping status | `PLANNED_CONVERSION` |
| Verification status | `NO_DIRECT_KEYWORD_TARGET` |

The authorised CONV-DOC row correction is retained. Its current content removes the old “by grade, market” page-role framing; assigns Country / Region to contact/company context only; excludes market-specific request, destination filtering and direct download; and records the V1.1 minimum-field, six-group and receipt-only boundaries.

Changed CONV-DOC columns are limited to:

1. `secondary_keywords`
2. `page_role`
3. `excluded_keywords`
4. `cannibalization_boundary`
5. `notes`

No other row or identity field is authorised for change in this review.

## 3. Cannibalisation and ownership audit

| Adjacent owner | Owns | CONV-DOC must not own |
|---|---|---|
| DOC-000 / document information pages | Document categories, support explanations, controlled-access rationale | Information-hub intent or category education |
| Product pages | Grade facts and product-specific search intent | Product education, ranking or comparison |
| Application pages | Application problems and application selection intent | Application education or grade recommendation |
| Market pages | Market sourcing, local buyer and market-specific context | Market document versions or destination filtering |
| CONV-RFQ | Commercial enquiry and purchasing fields | Volume, price, quantity, timeline, WhatsApp or existing-supplier capture |

The current page has no primary search keyword and should not create “download” or market-specific landing-page intent.

## 4. Evidence register

| Evidence | Scope consumed | Gate 1 status |
|---|---|---|
| `IKHLAS_Document_Hub_Request_Documents_Design_Spec_V1.1.md` | Transaction role, eight fields, six groups, prefill sources, success and no-market direction | Current user-directed input; subject to Gate 1 confirmation |
| `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page identity, URL, type and keyword status | Current identity authority |
| `research/keyword/11_page_keyword_master.csv` | CONV-DOC row only | Authorised targeted correction retained |
| `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Conversion and evidence boundaries | Project background; page-specific V1.1 direction overrides market-field conflict |
| `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` | Minimum-data, validation, privacy and fail-closed principles | Shared baseline; V1.1 overrides destination-field and 2,000-character conflicts for CONV-DOC |
| Product Grade/Application/Process V0.3 matrix and audits | Neutral Grade/Application/Process relationship boundaries | Approved relation baseline; no document evidence |
| Current approved Global Chrome | Shared Header/Footer and permanent RFQ only | Referenced unchanged; not modified by this Gate 1 task |

## 5. Evidence gates

| Gate item | Evidence state | Gate 1 outcome |
|---|---|---|
| Product Grade list | 14 published Grades available as product-master context | Selector concept allowed |
| M-2377 neutral Application/Sulfate context | Approved Product V0.3 relationship | Editable prefill context allowed |
| Specialty Materials | `DO_NOT_RENDER` | Exclude |
| Rubber | Evidence registration only | No taxonomy, page, URL or keyword |
| `NO_PUBLIC_MAPPING` | Evidence absence, not negative suitability | Fail closed; no “not applicable” wording |
| M-996/M-2196 comparison | Frozen | No ranking/equivalence/substitution claims |
| Document inventory and availability | Not established | Freeze |
| Regulatory/certification applicability | Not established | Freeze |
| Privacy wording/channel | Not approved | Freeze for later buyer-clean work |
| Receiver and SLA | Not verified | Freeze |

## 6. Validation and unresolved questions

Validated at Gate 1: page identity, no-primary-keyword status, transaction ownership, minimum fields, six types, prefill sources, Country / Region boundary, RFQ exclusions and receipt-only success.

Pending user confirmation: the complete Page Intent Card as the basis for any future Gate 2 work. No Gate 2 copy, module order, wireframe or visual direction is current.

Status remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; checkpoint remains `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION`.
