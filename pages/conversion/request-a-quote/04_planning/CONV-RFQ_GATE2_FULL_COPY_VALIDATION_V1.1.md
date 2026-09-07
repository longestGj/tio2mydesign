# CONV-RFQ Gate 2 Full Copy Validation V1.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Review ID | `CONV-RFQ-G2-FULL-COPY-PCR-01` |
| Validated file | `CONV-RFQ_GATE2_FULL_COPY_V1.1.md` |
| Bytes | 16,377 |
| SHA-256 | `0D38C9ED1C3BEB4121BF4BA924D53E9B8E153A51F30EC9B87B7A74717272FDC2` |
| Date | 2026-09-01 |
| Result | `PASS_FOR_TARGETED_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Authority checks

| Check | Result |
|---|---|
| Original user-confirmed Hero is present exactly | PASS |
| Superseded `Tell us the grade you need` Hero is absent | PASS |
| Hero rebase closure `CONV-RFQ-G2-HERO-USER-REBASE-01` is referenced | PASS |
| V1.1 skeleton is consumed only outside its superseded Hero | PASS |
| SEO/GEO/Schema V1.1 values remain unchanged | PASS |
| PRODUCT V0.3 remains the only relationship authority | PASS |
| Global Chrome V0.5 remains shared and unmodified | PASS |

## 2. Complete-copy coverage

| Required copy surface | Result |
|---|---|
| Breadcrumb, Eyebrow, H1 and Hero | PASS |
| Form heading and introduction | PASS |
| Three group headings | PASS |
| All required and optional field labels | PASS |
| Product / Grade 14-grade set plus `Not sure / Need help` | PASS |
| Application seven-value set | PASS |
| Quantity fixed `Metric tonnes (MT)` suffix | PASS |
| Field helpers and maximum lengths | PASS |
| Privacy notice and Privacy Policy link | PASS |
| Submit and submitting labels | PASS |
| Alternative Requests copy and URLs | PASS |
| Shared Header/Footer consumption | PASS |

## 3. Required-state coverage

| State | Exact copy / behavior | Result |
|---|---|---|
| First load | No premature validation error | PASS |
| Validation summary | Heading/body, focus and links to fields | PASS |
| Field errors | Required, format and length states covered | PASS |
| Focus | Summary, field and shared Mobile Menu contracts | PASS |
| Submitting | `SUBMITTING…`, duplicate-submit prevention, retained values | PASS |
| Failure | Exact heading/body and `TRY AGAIN`; values retained | PASS |
| Success | Exact heading/body; receipt-only boundary | PASS |
| Privacy | Exact notice; no acknowledgement checkbox | PASS |
| Human review | No automated suitability/approval result | PASS |
| Unknown grade | `Not sure / Need help` remains valid | PASS |
| Insufficient information | Clarification may be requested; no SLA | PASS |
| Form/route unavailable | Exact copy, no Contact fallback, internal `RELEASE_BLOCKER` | PASS |

## 3A. Destination Country targeted checks

| Returned requirement | Result |
|---|---|
| Label is `Destination Country` | PASS |
| Required state is Yes | PASS |
| Control is a single-line text input | PASS |
| Placeholder is `Enter the destination country` | PASS |
| Maximum is 100 Unicode characters after trimming | PASS |
| Empty error is `Enter a destination country.` | PASS |
| Overlength error is `Keep the destination country to 100 characters or fewer.` | PASS |
| Country select/list/shared dataset/code/taxonomy/automatic normalization | ABSENT / PASS |
| Buyer-entered text described as request context only | PASS |
| Explicit actual-country text prefill remains editable | PASS |
| Broad market/region such as European Union is not auto-filled | PASS |
| Empty/invalid/overlength prefill returns to empty without first-load error | PASS |
| Shared Footer page-level enumeration or implementation contract | ABSENT / PASS |
| Shared Footer boundary is exactly consume shared Footer unchanged | PASS |
| Form-area Privacy Policy link remains present | PASS |

## 4. Claims and relationship scan

| Prohibited implication | Result |
|---|---|
| Price, MOQ, stock or inventory promise | ABSENT |
| Lead-time, freight or shipping promise | ABSENT |
| Sample or document approval/availability | ABSENT |
| Order or quotation approval on receipt | ABSENT |
| Regulatory outcome | ABSENT |
| M-996/M-2196 difference, ranking, equivalence or substitution | ABSENT |
| M-2377 Specialty Materials relationship | ABSENT |
| Rubber taxonomy/page/URL/keyword | ABSENT |
| `NO_PUBLIC_MAPPING` rewritten as not applicable | ABSENT |
| Contact failure/unavailable fallback | ABSENT |

The original phrase `prepare the appropriate commercial response` is retained exactly under explicit user authority and is immediately governed by receipt-only and no-promise boundaries. It is not expanded into a guaranteed quotation or outcome.

## 5. Layout and CTA boundary scan

| Check | Result |
|---|---|
| Module order unchanged | PASS |
| Desktop/PC overall page is not left/right split | PASS |
| Desktop two-column permission limited to form-internal Grid | PASS |
| Tablet/Mobile are single-column | PASS |
| No side rail, context rail or Dashboard shell | PASS |
| One solid page-body CTA only | PASS |
| No sticky submit bar or second form | PASS |
| Request a Sample/Documents remain low-weight links | PASS |

## 6. SEO/GEO/Schema parity

| Check | Result |
|---|---|
| SEO Title exact | PASS |
| Meta Description exact | PASS |
| H1 exact and single | PASS |
| Canonical candidate is the registered clean URL | PASS |
| Robots remains a later readiness recommendation | PASS |
| `WebPage` + `BreadcrumbList` only | PASS |
| No Offer/Product/FAQ/HowTo/ContactPage node | PASS |
| No buyer form data or success state in metadata/Schema | PASS |

## 7. Gate boundary

The targeted V1.1 full copy is ready for project-control re-review under `CONV-RFQ-G2-FULL-COPY-PCR-01`. This validation does not record project-control PASS, `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`, Gate 3 authorization, visual approval, development authority or release readiness.
