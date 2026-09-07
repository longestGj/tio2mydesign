# DOC-TDS Gate 2 Content Skeleton Project-Control Submission V0.2

## 0. Decision requested

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Review ID | `DOC-TDS-G2-SKELETON-V02-PCR-01` |
| Date | 2026-09-04 |
| Review result | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 2 state | `GATE2_CONTENT_SKELETON / PENDING_USER_CONFIRMATION` |
| Complete Buyer Clean Copy | `NOT_STARTED` |
| User decision | `APPROVE / REVISE / REJECT` |
| Approval effect | `AUTHORIZE_COMPLETE_BUYER_CLEAN_COPY_WITHIN_GATE2` only |

## 1. Revised visible candidate

**H1**

`Titanium Dioxide TDS, SDS & COA: What to Request`

**Hero support**

`Choose the document types and product context your team needs for technical, safety or batch-quality review, then submit them in one request.`

**Direct Answer**

> A TDS supports Grade-level technical evaluation, an SDS provides safety and handling information for the relevant product and market or language context, and a COA reports results for a specific lot or batch. Select one or more document types and add the product, Grade, revision, language, lot, batch or order details relevant to your review.

**Request microcopy placed later**

> Document requests are reviewed after submission; submission itself does not confirm availability or delivery.

**CTA**

- Primary: `Request TDS, SDS or COA` → `/request-documents/`
- Secondary: `View Document Hub` → `/documents/`

## 2. V0.1 → V0.2 change summary

- Removed buyer-visible `controlled request` wording.
- Reduced the Direct Answer to its definition/context task and moved the submission boundary to the request-process area.
- Replaced `Find Documents by Product Grade` with `Add Product Grade Details to Your Request`.
- Condensed 14 major modules to 10 and merged the three repetitive document-detail modules into the comparison.
- Made revision, language and transaction inputs helpful context rather than universal prerequisites.
- Replaced regulatory-sounding Meta `requirements` wording.
- Removed FAQPage rich-result strategy and the FAQ question duplicated by the Direct Answer.
- Preserved source attribution, no-availability boundaries and all fail-closed controls.

## 3. Product Grade contract finding

The review request proposed `prefill.product_grades[] / one_or_more` where supported. Current CONV-DOC Gate 7 authority instead defines required single-select `product_grade` and one-value `prefill.product_grade`.

V0.2 therefore makes this distinction:

- buyer content does not assume that a procurement need can involve only one Grade;
- current transport may still prefill only one Grade and may not render a multi-Grade selector;
- `prefill.product_grades[]` is recorded only as a conditional future candidate requiring independent CONV-DOC change approval;
- the FAQ asks how to identify additional relevant Grades without claiming current multi-select functionality.

This prevents DOC-TDS from silently changing an already approved and implemented conversion contract.

## 4. Ten-module narrative

1. Breadcrumb + Hero
2. Direct Answer
3. `Choose the Documents That Match Your Review`
4. `Add Product Grade Details to Your Request`
5. `Compare TDS, SDS and COA`
6. `What to Include in Your Request`
7. `How Document Requests Work`
8. `Questions Buyers Ask`
9. `Related Document Paths`
10. Final CTA

## 5. SEO and FAQ direction

- SEO Title: `Titanium Dioxide TDS, SDS & COA: What to Request | TiO2 Malaysia`
- Meta Description: `Understand the difference between titanium dioxide TDS, SDS and COA, add the relevant product or batch context, and request the documents needed for review.`
- Schema: `WebPage + BreadcrumbList`.
- Visible FAQ remains for buyer support and GEO; no FAQPage rich-result strategy is planned.
- FAQ answers remain `NOT_DRAFTED`.

## 6. Affected ownership

- DOC-TDS changes only its content skeleton.
- CONV-DOC remains the owner of form fields, required states, validation, submission and receiver behavior.
- Product pages remain the owners of Grade facts.
- DOC-000, DOC-REACH and DOC-COO remain related routes, not absorbed content.

## 7. Risks and limits preserved

- Local files do not prove public availability, currentness or download permission.
- SDS and COA availability remains unverified.
- Grade or document selections do not create availability relationships.
- Multi-Grade UI/transport is not currently authorized by CONV-DOC.
- Route-unavailable, empty-field, stale-context and Schema-relation behavior remains fail-closed.
- Gate 3–10, visual design, development, deployment, publication, DNS and indexing remain unauthorized.

## 8. Project-Control recommendation

The revision has passed project-control validation. The disposition is:

`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`

Validation result:

- all 13 required V0.2 sections are present;
- the architecture contains 10 major modules;
- the buyer-visible candidate set contains none of the prohibited internal control terms;
- the Direct Answer, comparison and request microcopy remain within the Claim Register scope;
- current single-Grade CONV-DOC authority is preserved, while any future array contract is explicitly inactive;
- no Evidence Hold, Page Intent, Gate 1 decision or later-Gate authority changed.

If the user approves V0.2, the next action is preparation of the complete English Buyer Clean copy within Gate 2. That future copy still requires separate approval before Gate 3.

## 9. Review source

The complete revised candidate is `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_CONTENT_SKELETON_V0.2.md`.

## 10. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial skeleton review submission | `HISTORICAL / SUPERSEDED_BY_V0.2` |
| V0.2 | 2026-09-04 | Reviewed and submitted the complete requested skeleton revision with current CONV-DOC Grade authority preserved | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
