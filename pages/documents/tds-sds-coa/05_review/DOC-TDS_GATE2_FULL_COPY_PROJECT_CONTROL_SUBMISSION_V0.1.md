# DOC-TDS Gate 2 Full Copy Project-Control Submission V0.1

## 0. Decision requested

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Review ID | `DOC-TDS-G2-FULL-COPY-PCR-01` |
| Date | 2026-09-04 |
| Review result | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 2 skeleton | `USER_APPROVED / CLOSED` |
| Full-copy checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=PENDING_USER_APPROVAL` |
| Gate 3 | `USER_AUTHORIZED / PREREQUISITE_PENDING` |
| Gate 4–10 | `NOT_AUTHORIZED` |
| User decision | `APPROVE / REVISE / REJECT` |

The user is being asked to approve the complete English Buyer Clean copy and its ten-module order. Approval closes Gate 2 and activates the Gate 3 authorization already recorded from the user's message `同意gate2 ，授权Gate3.`

## 1. Current visible candidate

**H1**

`Titanium Dioxide TDS, SDS & COA: What to Request`

**Hero support**

`Choose the document types and product context your team needs for technical, safety or batch-quality review, then submit them in one request.`

**Direct Answer**

> A TDS supports Grade-level technical evaluation, an SDS provides safety and handling information for the relevant product and market or language context, and a COA reports results for a specific lot or batch. Select one or more document types and add the product, Grade, revision, language, lot, batch or order details relevant to your review.

**Primary / secondary actions**

- `Request TDS, SDS or COA` → `/request-documents/`
- `View Document Hub` → `/documents/`

**Request boundary beside the process and final CTA**

`Document requests are reviewed after submission; submission itself does not confirm availability or delivery.`

## 2. Complete ten-module order

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

This is the same narrative approved at the skeleton checkpoint. V0.1 now supplies the complete card guidance, comparison rows, request-context instructions, four-step process, five FAQ answers, related-path copy and final CTA copy.

## 3. Product Grade and document-type behavior

- The visible selector lists all 14 approved Grade identities: M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.
- The current request contract accepts one buyer-editable `product_grade` selection.
- When more than one Grade is relevant, the buyer selects the most relevant Grade and lists the others in additional context.
- TDS, SDS and COA remain a buyer-editable multi-select request using `document_types[]`.
- A Grade or document-type choice provides request context only; it does not confirm existence, currentness, availability or delivery.
- A future `product_grades[]` field remains inactive and would require a separate CONV-DOC change approval.

## 4. Complete FAQ candidate

The complete copy answers these five questions:

1. `Can I request more than one document type?`
2. `How should I identify more than one relevant product Grade?`
3. `What information should I include in a document request?`
4. `Does selecting a Grade mean its documents are available?`
5. `What happens after I submit a request?`

The answers preserve buyer editability, explain useful context without making every detail mandatory, and state that submission does not confirm document availability or delivery.

## 5. SEO, GEO and Schema direction

- SEO Title: `Titanium Dioxide TDS, SDS & COA: What to Request | TiO2 Malaysia`
- Meta Description: `Understand the difference between titanium dioxide TDS, SDS and COA, add the relevant product or batch context, and request the documents needed for review.`
- Primary keyword: `titanium dioxide tds`
- Schema: `WebPage + BreadcrumbList`; visible FAQ remains ordinary page content.
- GEO relationship: document type → buyer decision → useful product or transaction context → buyer-editable request.
- Machine-readable content may not create download, certification, compliance, availability, currentness or delivery claims absent from visible content.

## 6. Change from the approved skeleton

The content architecture, H1, Hero, Direct Answer, CTA direction and control boundaries are unchanged. This version adds the complete prose required by the Gate 2 standard:

- all document-choice card copy;
- all 14 Grade options and single-Grade helper behavior;
- the complete four-row TDS/SDS/COA comparison;
- the complete request-context guidance;
- the complete four-step request process;
- five complete FAQ answers;
- related-path descriptions and final CTA copy.

No new product, regulatory, availability, file, currentness, compliance, response-time or delivery fact was introduced.

## 7. Affected pages and functions

- DOC-TDS owns this page copy, content order, SEO direction and request-entry context.
- CONV-DOC remains the owner of form fields, validation, submission, receiver behavior and actual document-request processing.
- Product pages remain the owners of Grade facts.
- DOC-000, DOC-REACH and DOC-COO remain separate routes and content owners.
- Related DOC-REACH and DOC-COO paths render only after their routes and content become approved and eligible.

## 8. Risks and limits retained

- Existing local files do not prove public availability, currentness or download authorization.
- SDS and COA availability is not inferred from TDS evidence.
- No public inventory, filename, preview, direct download, Grade-document matrix or pseudo-download action is proposed.
- No universal regulatory coverage, compliance approval, guaranteed response time or guaranteed delivery is claimed.
- The Malaysia-origin site-wide hold and other Gate 1 Evidence Holds remain unchanged.
- Gate 3 authorization does not bypass the present full-copy approval checkpoint.

## 9. Project-Control recommendation

The complete copy passes project-control review. The recommendation is:

`APPROVE DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.1 AND CLOSE FULL_COPY_AND_MODULE_ORDER_CONFIRMED`

If approved, Gate 2 becomes closed and the user's already-recorded Gate 3 authorization becomes executable. The next deliverable will be the full responsive Gate 3 structure for `1440px` Desktop, `768px` Tablet and `390px` Mobile. That later wireframe remains a separate approval object.

Approval here does not authorize Gate 4, visual design, development, modification of `D:\16Wordpress_nextjs`, deployment, publication, DNS or indexing.

## 10. Review source

The complete candidate is `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`.

## 11. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Reviewed and submitted the complete English Buyer Clean copy built from the user-approved V0.2 skeleton | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
