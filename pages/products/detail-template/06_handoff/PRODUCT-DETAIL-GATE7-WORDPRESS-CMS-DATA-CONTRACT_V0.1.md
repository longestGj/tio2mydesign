# Product Detail Gate 7 WordPress CMS Data Contract V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `PRODUCT-DETAIL-G7-CMS-01` |
| Gate 7 Review ID | `PRODUCT-DETAIL-G7-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Scope | CMS/data specification for the 14 Grade Detail Pages |
| Implementation | Not authorized |

The names below are logical fields. The external development project may map them to WordPress fields, taxonomies, records or another equivalent implementation while preserving behavior.

## 2. Root grade record

| Field | Type | Required | Rule |
|---|---|---:|---|
| `site_scope` | enum/string | Yes | Exact value `tio2-my`; immutable after record creation |
| `page_id` | string | Yes | Approved Grade page ID; unique inside `site_scope` |
| `template_version` | string | Yes | Gate 7 baseline `product-detail-v1` or approved compatible value |
| `grade_code` | string | Yes | Exact public grade code |
| `slug` | string | Yes | Approved lowercase canonical slug |
| `locale` | locale key | Yes | Initial public locale `en`; localized records require independent approval |
| `record_state` | enum | Yes | `draft`, `review`, `approved_for_preview`, `approved_for_publication`, `archived` |
| `updated_at` | datetime | Yes | CMS audit field; not a product-evidence claim |

Unique key: `site_scope + locale + page_id`. Slug uniqueness is enforced inside the same `site_scope + locale` partition.

## 3. Module groups

| Group | Logical fields | Type | Required behavior |
|---|---|---|---|
| `seo` | title, meta description, H1, canonical path, index state | object | Required before indexable publication |
| `hero` | summary, optional category/process labels, media key, CTA route keys | object | Exact-grade identity required; differentiators conditional |
| `positioning` | body, decision points | object/list | Conditional by module status |
| `applications` | neutral application items, route keys | ordered list | Must validate against PRODUCT V0.3 and grade evidence |
| `evaluation` | performance review, qualification review, explicit negative-use items | claim groups | Render independently; no inferred negatives |
| `technical_specifications` | property, standard, typical/value, unit, qualifier/test condition | ordered list | Preserve exact technical semantics |
| `documents` | neutral request copy, eligible request types, receiver route key | object/list | No availability claim without evidence |
| `origin_support` | summary and route keys | object | Product-specific claim conditional |
| `market_support` | destination route keys | ordered list | Runtime route readiness required |
| `related_grades` | target page ID, approved short summary, route key | ordered list | Separate relationship/content approval required |
| `conversion` | RFQ, Sample, Request Documents route keys and prefill map | object | Receiver readiness required before public action |
| `media` | asset key, rendition role, ALT or decorative flag | ordered list | Rights and subject accuracy required |
| `publishing_status` | one status per module/claim group | map | Controls the public projection |

## 4. Publishing status

Allowed module/claim-group values:

| Value | Admin meaning | Public behavior |
|---|---|---|
| `verified` | Current evidence and review support the included collection | Eligible for public projection subject to route/page state |
| `pending_verification` | Evidence or review incomplete | Excluded from public API, HTML, metadata and Schema |
| `not_public` | Known information not approved for public use | Excluded from every public and machine-readable surface |

Mixed collections contain only approved values. Do not keep unverified rows in a public collection with a per-row hidden flag. If independent control is needed, split the claim group.

## 5. Source, owner and review-date governance

The earlier decision not to repeat source/owner/date metadata beside every fact remains active. Governance is stored once per module or evidence set in an authenticated administrative ledger.

| Governance field | Type | Required | Public? |
|---|---|---:|---:|
| `site_scope` | enum/string | Yes | No |
| `page_id` | string | Yes | No |
| `module_key` or `evidence_set_id` | string | Yes | No |
| `source_refs` | list of controlled document/evidence IDs | Yes for verified technical/claim modules | No |
| `source_version_or_date` | string/date | Yes when source is versioned or time-sensitive | No |
| `owner_role` | enum | Yes | No |
| `review_status` | enum | Yes | No |
| `reviewed_at` | datetime | Yes for `verified` | No |
| `next_review_due` | date/null | Required for time-sensitive claims; otherwise optional | No |
| `decision_note` | controlled text | Optional | No |

Owner roles: SEO/content, technical, compliance/documents, operations/sales, design/media and QA. The ledger is not serialized in the public API and does not create buyer-visible evidence labels.

## 6. Fourteen Grade identity records

| Page ID | Grade | Canonical path | Primary keyword |
|---|---|---|---|
| `GRADE-M350` | M-350 | `/products/m-350/` | `M-350 titanium dioxide` |
| `GRADE-M510` | M-510 | `/products/m-510/` | `M-510 titanium dioxide` |
| `GRADE-M896` | M-896 | `/products/m-896/` | `M-896 titanium dioxide` |
| `GRADE-M996` | M-996 | `/products/m-996/` | `M-996 titanium dioxide` |
| `GRADE-M2196` | M-2196 | `/products/m-2196/` | `M-2196 titanium dioxide` |
| `GRADE-M895` | M-895 | `/products/m-895/` | `M-895 titanium dioxide` |
| `GRADE-M200` | M-200 | `/products/m-200/` | `M-200 titanium dioxide` |
| `GRADE-M108` | M-108 | `/products/m-108/` | `M-108 titanium dioxide` |
| `GRADE-M210` | M-210 | `/products/m-210/` | `M-210 titanium dioxide` |
| `GRADE-M340` | M-340 | `/products/m-340/` | `M-340 titanium dioxide` |
| `GRADE-M886` | M-886 | `/products/m-886/` | `M-886 titanium dioxide` |
| `GRADE-M52` | M-52 | `/products/m-52/` | `M-52 titanium dioxide` |
| `GRADE-M2377` | M-2377 | `/products/m-2377/` | `M-2377 titanium dioxide` |
| `GRADE-CR901` | CR-901 | `/products/cr-901/` | `CR-901 titanium dioxide` |

Identity approval does not equal content, TDS, route, development or publication readiness.

## 7. Relationship storage

- Grade–Application and Grade–Process public relationships consume `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` as the sole current source.
- Do not hand-maintain a second relationship taxonomy inside individual grade records.
- Store relation IDs or approved references; public output includes only `VERIFIED_FOR_PUBLIC_MAPPING` rows after independent module/content gates.
- `NO_PUBLIC_MAPPING`, Rubber evidence-only data and comparison holds remain outside the public projection.
- M-996/M-2196 differentiation requires a future approved comparison evidence set; it cannot be inferred from shared categories or values.

## 8. Isolation and failure rules

- Every read, preview, revision, media, relationship and menu query is scoped to `site_scope=tio2-my`.
- Missing Malaysia content returns not found, disabled or preview-only according to approved route state.
- No fallback to TIOVAR, another site scope, global unscoped content or a frozen site record.
- Import jobs reject records without an explicit allowed scope.
- Export/API projections carry the scope internally even if it is not displayed to buyers.
- Deleting or disabling a module invalidates relevant scoped caches and removes the value from public projections.

## 9. Gate boundary

This contract is a Gate 7 deliverable candidate. It does not authorize record creation, migration, final copy generation, implementation, Gate 8 or access to `D:\16Wordpress_nextjs`.
