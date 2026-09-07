# DOC-REACH Gate 7 Route, Prefill and State Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-REACH-G7-HANDOFF-01` |
| Source page | `DOC-REACH` / `/documents/reach/` |
| Receiver | `CONV-DOC` / `/request-documents/` |
| Gate 8–10 | `NOT_AUTHORIZED` |

## 1. Semantic request mapping

| Meaning | Semantic input | Receiver behavior |
|---|---|---|
| Document category | `prefill.document_types[]=other` | Select the existing `other` value; buyer may remove/change it |
| Page-specific description | `prefill.additional_requirements=REACH documentation` | Populate visible Additional Requirements; buyer may edit/remove it |
| Product context | `prefill.product_grade` when a valid buyer choice exists | Populate one allowlisted Grade; editable/removable |
| Application/use | `prefill.application_industry` when a valid buyer choice exists | Populate visible optional context; editable/removable |
| Source attribution | semantic alias `source_page=DOC-REACH` normalized to `source_context.page_id=DOC-REACH` | Hidden/system/non-editable; never satisfies a buyer field |

The page's semantic label is `REACH Documentation`. The internal option value `other` must never appear in buyer-visible output. When the normalized visible pair is `other` + `REACH documentation`, the selected-context label, review and accessible description use `REACH Documentation`; the ordinary neutral option remains `Other Documentation` outside this supported context.

## 2. Destination example

The buyer-visible transport may resolve to:

```text
/request-documents/?document_types%5B%5D=other&additional_requirements=REACH%20documentation
```

The exact framework encoding may differ if the approved receiver uses an equivalent canonical parser. Query order does not matter. The destination page Canonical, Title, Meta, robots, Schema IDs and social metadata remain query-free and unchanged.

Public query input is not authoritative for hidden source attribution. The implementation must establish `source_context.page_id=DOC-REACH` through a trusted same-site route/context mechanism or omit the attribution. It may not trust a user-supplied `source_page` parameter.

## 3. Receiver validation interaction

- Product Grade remains required by CONV-DOC before submission.
- At least one document type remains required.
- When `other` is the sole type, Additional Requirements remains required and limited to 500 characters.
- The prefilled `REACH documentation` value satisfies the initial Other-only requirement only while it remains present; clearing it must expose the standard field error before submission.
- Hidden source metadata cannot satisfy Grade, document type, contact or Additional Requirements validation.
- Prefill never determines coverage, applicability, document availability or response outcome.

## 4. Page action synchronization

| State | Hero | Request-process panel | Final CTA | Machine relation |
|---|---|---|---|---|
| `REQUEST_DOCUMENTS_ELIGIBLE` | Request + Hub | selection + Request | Request + Hub + note | receiver relation may render |
| `REQUEST_DOCUMENTS_INELIGIBLE` | Hub only | no selection/action panel | Hub only; no submission note | receiver relation absent |

All page-owned request entry points resolve from one eligibility state. No stale CTA may survive in Header/body/schema when the receiver is ineligible. The shared persistent RFQ is not a Request Documents fallback and remains under Global Chrome ownership.

## 5. Input normalization and negative cases

| Input | Required outcome |
|---|---|
| supported `other` + exact description | visible, editable REACH context |
| duplicate `other` values | deduplicate to one selection |
| unsupported document type | discard unsupported value |
| malformed array/scalar mix | normalize only allowlisted values; never throw a public raw error |
| Additional Requirements over 500 | preserve safely and show the approved length error before submission |
| HTML/script-like text | render as text, never markup; receiver validation still applies |
| public `source_page=DOC-REACH` without trusted context | ignore for internal attribution |
| source/page mismatch | discard source attribution; keep valid visible buyer values editable |
| missing/wrong `site_scope` | no cross-scope content or receiver fallback |
| Back/Forward navigation | restore visible buyer selections without duplicating hidden attribution or analytics events |

## 6. Failure and outcome boundary

DOC-REACH does not own receiver success/failure UI. CONV-DOC must preserve values on validation/network/ambiguous failure and may show success only after explicit positive receipt acknowledgement.

Submission does not confirm registration, document availability or delivery. No Contact, email, phone, RFQ, public download or another `site_scope` may substitute for an unavailable Request Documents workflow.

## 7. Analytics and privacy

If consent permits analytics, page-entry attempt, receiver view, submit attempt, failure and receipt-confirmed events remain distinct. No Grade, destination, legal entity, free text, email, company, raw document value, hidden source context or field error may enter URLs, advertising audiences or analytics parameters.

