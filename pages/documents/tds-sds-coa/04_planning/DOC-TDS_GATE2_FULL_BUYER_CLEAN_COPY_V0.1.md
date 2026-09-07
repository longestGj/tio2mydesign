# DOC-TDS Gate 2 Full Buyer Clean Copy V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Version / date | V0.1 / 2026-09-04 |
| Approved skeleton input | `DOC-TDS_GATE2_CONTENT_SKELETON_V0.2.md` |
| Status | `FULL_BUYER_CLEAN_COPY / PENDING_USER_APPROVAL` |
| Checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=PENDING_USER_APPROVAL` |
| Gate 3 | `USER_AUTHORIZED / PREREQUISITE_PENDING` |
| Gate 4–10 | `NOT_AUTHORIZED` |

Buyer-visible copy is presented in Sections 1–10. Internal rendering, request and machine-readable controls appear only in Sections 11–13 and are not page copy.

## 1. Breadcrumb + Hero

**Breadcrumb**

`Home` → `Documents` → `TDS, SDS & COA`

**Eyebrow**

`TECHNICAL DOCUMENTS`

**H1**

`Titanium Dioxide TDS, SDS & COA: What to Request`

**Hero support**

`Choose the document types and product context your team needs for technical, safety or batch-quality review, then submit them in one request.`

**Primary CTA**

`Request TDS, SDS or COA`

**Secondary CTA**

`View Document Hub`

## 2. Direct Answer

**Heading**

`What is the difference between a TDS, SDS and COA?`

**Copy**

A TDS supports Grade-level technical evaluation, an SDS provides safety and handling information for the relevant product and market or language context, and a COA reports results for a specific lot or batch. Select one or more document types and add the product, Grade, revision, language, lot, batch or order details relevant to your review.

## 3. Choose the Documents That Match Your Review

**Section introduction**

Start with the decision your team needs to make. You can choose one document type or combine several in the same request.

### Technical evaluation

Choose a TDS and add the relevant product Grade. Include a specific revision only if your review requires one.

**Selection label:** `TDS`

### Safety and handling

Choose an SDS and add the relevant product, market or jurisdiction, and language. Include a specific revision if required.

**Selection label:** `SDS`

### Batch quality review

Choose a COA and add any available lot, batch or order reference.

**Selection label:** `COA`

### Multiple document needs

Select one or more document types and include the relevant product or transaction context in one request.

**Selection label:** `Select more than one`

## 4. Add Product Grade Details to Your Request

**Section introduction**

Choose the Grade most closely connected to your request. The Grade helps identify the product context for review; it does not indicate that a document is available.

**Selector label:** `Product Grade`

**Placeholder:** `Choose a Grade`

**Helper copy**

You can change or remove a preselected Grade on the request form. If your request covers more than one Grade, select the most relevant Grade and add the other Grade names in the additional context you provide.

**Grade options**

- M-350
- M-510
- M-896
- M-996
- M-2196
- M-895
- M-200
- M-108
- M-210
- M-340
- M-886
- M-52
- M-2377
- CR-901

## 5. Compare TDS, SDS and COA

**Section introduction**

Each document supports a different review. Use the comparison below to choose the relevant type and prepare useful context.

| Dimension | TDS | SDS | COA |
|---|---|---|---|
| Primary buyer use | Technical evaluation | Safety and handling review | Lot- or batch-specific quality review |
| When to request | When reviewing Grade-level technical information | When reviewing safety and handling information for the relevant product and market context | When reviewing results tied to a specific lot, batch or order context |
| Typical scope | Grade + revision | Product + jurisdiction/language + revision | Lot/batch/order |
| Useful request context | Product Grade; revision if relevant | Product; market or jurisdiction; language; revision if relevant | Product or Grade plus an available lot, batch or order reference |

The details in the final row are useful context, not a requirement to know every item before starting a request.

## 6. What to Include in Your Request

**Section introduction**

Share the details you already know. The most useful information depends on the document type and the review your team is completing.

### Product context

Add the relevant product Grade. If more than one Grade is involved, identify the others in the additional context you provide.

### Technical document context

For a TDS, include a specific revision only when your review depends on it.

### Safety document context

For an SDS, include the relevant product, market or jurisdiction, language and revision when these details are known or required for your review.

### Batch document context

For a COA, add an available lot, batch or order reference so the request can be reviewed in the relevant transaction context.

### Additional requirements

Use the additional context field for another Grade, a specific document question or other non-confidential information that will help explain your request.

## 7. How Document Requests Work

**Section introduction**

Use one request to identify the documents and product context your team needs.

### 1. Choose document types

Select TDS, SDS, COA or more than one document type.

### 2. Add product context

Choose the most relevant Grade and include any useful revision, language, lot, batch or order details you know.

### 3. Review your request

Check the information carried into the request form. You can change or remove prefilled buyer context before submitting.

### 4. Submit for review

Send the request with your contact and business details. We may contact you if clarification is needed.

**Request microcopy**

`Document requests are reviewed after submission; submission itself does not confirm availability or delivery.`

## 8. Questions Buyers Ask

### Can I request more than one document type?

Yes. Select the TDS, SDS and COA options that match your review. You can check or change the selected document types on the request form before submitting.

### How should I identify more than one relevant product Grade?

Select the Grade most closely connected to the request, then list the other relevant Grade names in the additional context you provide. The current request form accepts one Grade selection and additional buyer-provided context.

### What information should I include in a document request?

Include the product Grade and the document types you need. Add a revision, market or jurisdiction, language, lot, batch or order reference when it is relevant and available. You do not need to know every detail before starting the request.

### Does selecting a Grade mean its documents are available?

No. A Grade selection provides product context for the request. It does not confirm that a TDS, SDS or COA exists, is current, is available or can be delivered.

### What happens after I submit a request?

The request and the information you provide are reviewed. We may contact you if clarification is needed. Submission itself does not confirm document availability or delivery.

## 9. Related Document Paths

**Section introduction**

Continue to another document topic or return to the complete Documents overview.

### Titanium Dioxide REACH

Review what procurement teams should verify when evaluating EU REACH documentation.

**Link label:** `Review REACH Documentation`

### Certificate of Origin

Review the origin-document details buyers may need to verify for a shipment or transaction.

**Link label:** `Review Origin Documentation`

### Documents & Compliance

Compare document-support paths and choose the route that matches your task.

**Link label:** `View Document Hub`

## 10. Final CTA

**Heading**

`Request the Documents Needed for Your Review`

**Copy**

Choose one or more document types, add the relevant product or transaction context, and review the details before submitting.

**Primary CTA:** `Request TDS, SDS or COA`

**Secondary CTA:** `View Document Hub`

**Microcopy**

`Submitting a request does not confirm document availability or delivery.`

## 11. CTA, route and request contract — internal

| Element | Internal contract |
|---|---|
| Primary CTA target | `/request-documents/`; render only when the route/action is eligible |
| Secondary CTA target | `/documents/` |
| Document types | `prefill.document_types[]`; one or more values: TDS → `technical_product`, SDS → `safety`, COA → `quality_coa` |
| Product Grade | Current transport is one allowlisted `prefill.product_grade` value |
| Additional context | Buyer-provided field behavior remains owned by CONV-DOC |
| Source attribution | `source_page=DOC-TDS` normalized to hidden `source_context.page_id`; system-controlled and non-editable |
| Route failure | Remove the visible action and corresponding Schema relationship together; Contact is not an automatic fallback |

`prefill.product_grades[]` is not active. Any future multi-Grade transport requires separate CONV-DOC change approval before page copy, UI, validation, receiver or analytics may present it as supported.

## 12. SEO, GEO and Schema — internal

| Element | Approved-direction copy / rule |
|---|---|
| Primary keyword | `titanium dioxide tds` |
| SEO Title | `Titanium Dioxide TDS, SDS & COA: What to Request | TiO2 Malaysia` |
| Meta Description | `Understand the difference between titanium dioxide TDS, SDS and COA, add the relevant product or batch context, and request the documents needed for review.` |
| Canonical | Candidate `https://tio2malaysia.com/documents/tds-sds-coa/`; activation requires later authority |
| Language | English |
| GEO entity | Titanium dioxide technical, safety and batch documentation |
| GEO relationships | document type → buyer decision → useful product/transaction context → buyer-editable request |
| Schema | `WebPage` + `BreadcrumbList`; visible FAQ content remains ordinary page content; no `FAQPage` rich-result strategy |

All structured data must remain within visible copy. Do not create downloadable-document, certification, compliance, availability, currentness or delivery relationships.

## 13. Rendering and evidence controls — internal

- No public document inventory, filenames, file previews, direct downloads or pseudo-download actions.
- No Grade-document availability matrix or inferred Grade-document relationship.
- Do not infer SDS or COA availability from TDS evidence.
- Do not merge multiple TDS versions.
- Do not claim currentness, universal coverage, compliance approval, conformity, release, request approval, response time or guaranteed delivery.
- Empty or unverified fields do not render and are not replaced by buyer-visible internal status text.
- DOC-REACH, DOC-COO and their links render only when the target route and content are approved and eligible.
- Buyer-visible content must not expose Gate, Claim Register, Evidence Hold, allowlist, normalization, eligibility, fail-closed or Schema-parity language.

## 14. Full-copy confirmation requested

The user is asked to confirm:

1. all Buyer Clean copy in Sections 1–10;
2. the ten-module order;
3. the current single-Grade and multi-document request behavior;
4. the five complete FAQ answers;
5. CTA, SEO, GEO, Schema, related-path and evidence boundaries.

Approval closes `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` and activates the user's already-recorded Gate 3 authorization. It does not approve a future wireframe, Gate 4, visual design, development, deployment, publication, DNS or indexing.

## 15. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Created complete Buyer Clean copy from the user-approved V0.2 content skeleton | `PENDING_USER_APPROVAL` |
