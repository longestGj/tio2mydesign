# DOC-TDS Gate 2 Full Copy Project-Control Submission V0.2

## 0. Decision requested

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Review ID | `DOC-TDS-G2-FULL-COPY-V02-PCR-01` |
| Date | 2026-09-04 |
| Revision class | `MINOR CONTROL + BUYER CLARITY REVISION` |
| Review result | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 2 skeleton | `USER_APPROVED / CLOSED` |
| Full-copy candidate | `DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| Full-copy checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=PENDING_USER_APPROVAL` |
| Gate 3 | `USER_AUTHORIZED / PREREQUISITE_PENDING` |
| Gate 4–10 | `NOT_AUTHORIZED` |
| User decision | `APPROVE / REVISE / REJECT` |

The user is being asked to approve the complete V0.2 Buyer Clean copy and the unchanged ten-module order. This submission does not approve the copy or close Gate 2 on the user's behalf.

## 1. Preserved approved content

The following V0.1 content remains unchanged:

- H1: `Titanium Dioxide TDS, SDS & COA: What to Request`
- Hero support: `Choose the document types and product context your team needs for technical, safety or batch-quality review, then submit them in one request.`
- Primary CTA: `Request TDS, SDS or COA`
- Secondary CTA: `View Document Hub`
- Direct Answer logic and wording
- four Quick Document Choice directions
- ten-module order
- primary keyword, SEO Title, Meta Description and `WebPage + BreadcrumbList` direction
- hidden, system-controlled, non-editable and not-buyer-visible source attribution

## 2. P1 single-Grade correction

The revised visible Grade section now says:

> Select the primary Grade for this request. Selecting a Grade adds product context to your request; it does not indicate document availability.

> You can change or remove the selected Grade on the request form. If you also need documents for other Grades, note those Grade names in the additional context field for review.

> Additional Grades are provided as supplementary context and are not mapped to individual document types in the current request form.

The multi-Grade FAQ now states:

> Select the primary Grade for the request, then add any other relevant Grade names in the additional context field. The current request form records one structured Grade selection; additional Grades are reviewed as supplementary buyer-provided context.

This matches the current CONV-DOC contract: one structured `prefill.product_grade`, multi-select `prefill.document_types[]`, and supplementary buyer-provided free text. It does not present `prefill.product_grades[]` or per-Grade document mapping as active.

## 3. Buyer-visible disclaimer reduction

The full availability/delivery boundary is now concentrated in two principal locations:

1. Grade section: `Selecting a Grade adds product context to your request; it does not indicate document availability.`
2. Request process: `Document requests are reviewed after submission; submission does not confirm availability or delivery.`

The four-part FAQ denial was replaced with:

> No. Selecting a Grade identifies the product context for your request. The requested document types and product details are reviewed after submission.

The duplicate Final CTA disclaimer was removed. Internal evidence controls retain the complete existence, currentness, availability, approval and delivery boundaries.

## 4. Concise request checklist

Section 6 no longer repeats the TDS/SDS/COA comparison as four mini-sections. It now presents one procurement-oriented checklist:

- Product Grade
- Document type(s)
- Market or jurisdiction, when relevant
- Language, when relevant
- Revision, if required
- Lot, batch or order reference, when available
- Additional requirements or questions

The introduction states that buyers do not need every item before starting. Actual field requirements remain owned by CONV-DOC.

## 5. Related-path corrections

- Parent-page name is standardized to `Document Hub`.
- Document Hub copy is: `Explore technical, regulatory and origin-document routes from the Documents overview.`
- DOC-REACH copy is: `Review what procurement teams should verify when assessing EU REACH information and supporting documentation.`
- DOC-REACH link label is: `Review EU REACH Information`.

This preserves DOC-REACH as an information-and-evidence page rather than implying a single downloadable document.

## 6. Internal contract and controls

Section 11 now explicitly states:

- one structured Grade is supported;
- additional Grades may be provided as supplementary free-text context;
- additional Grades are not structured selections or individually mapped to document types;
- `prefill.product_grades[]` remains inactive;
- future multi-Grade transport requires separate CONV-DOC approval.

Section 13 preserves all existing controls: no public inventory, filenames, previews, downloads, pseudo-downloads, Grade-document availability matrix, inferred Grade-document relationship, SDS/COA inference from TDS, TDS version merging, currentness, universal coverage, compliance approval, conformity, request approval, response-time or guaranteed-delivery claims. Route and Schema relationships continue to fail closed together.

## 7. Affected scope

- Buyer-visible revisions are limited to Sections 4, 6, 7, 8, 9 and 10.
- Internal synchronization is limited to Sections 11, 13, 14 and 15.
- Section 12 remains unchanged.
- Gate 1, the approved Gate 2 skeleton, Claim Register, Evidence Holds, page identity, URL, keyword ownership and module architecture are unchanged.
- No Gate 3 wireframe, visual design, code, development or deployment work is included.

## 8. Project-Control recommendation

The V0.2 revision passes project-control review. The recommendation is:

`APPROVE DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.2 AND SET FULL_COPY_AND_MODULE_ORDER_CONFIRMED=YES`

Approval satisfies the prerequisite for the user's already-recorded Gate 3 authorization. It does not generate or approve a Gate 3 output and does not authorize Gate 4, visual design, development, deployment, publication, DNS or indexing.

## 9. Review source

The complete revised candidate is `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`.

## 10. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial complete-copy review submission | `HISTORICAL / SUPERSEDED_BY_V0.2` |
| V0.2 | 2026-09-04 | Reviewed the minor control and buyer-clarity revision, with single-Grade capability and Evidence Controls synchronized | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
