# TiO2 Malaysia Documents Page Playbook V0.3

## 0. Control

| Field | Value |
|---|---|
| Playbook | `DOCUMENT` |
| Version / date | V0.3 / 2026-09-01 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| Scope | DOC-000 Document Finder + Request Hub; shared evidence rules for future Document records |
| Authority | Latest user-supplied Document Finder redesign instruction and prior explicit Gate 5 authority |
| Stop | No child page, Gate 6+, development, implementation, handoff or release |

## 1. Hub identity

DOC-000 is a procurement tool with one core path:

```text
FIND → VIEW / DOWNLOAD when a verified public record exists
     → REQUEST DOCUMENTS when a record is context-dependent or not public
```

It is not a generic download centre, compliance encyclopaedia, long evidence article, Contact page or RFQ page.

## 2. Finder contract

The first search asks only:

- Product / Grade;
- Document Type.

Approved Grade values are limited to: M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.

Document Type values are limited to All Documents, TDS, SDS, COA, Origin Documentation, Traceability Documentation and REACH & Compliance.

The button label is `Find Documents`. Destination, batch, order and language do not interrupt first search.

## 3. Results and record contract

Two buyer-facing result actions exist:

1. verified public record → `View` and/or `Download`;
2. context-dependent or non-public item → a specific `Request` action.

A public record must display Product/Grade, Document Type, Revision/Version, Date, Language: English, relevant Scope and its approved action. Do not show disabled buttons, `Coming Soon`, `Unavailable` or internal readiness language.

Current approved public record set remains zero. Therefore the Gate 5 Buyer Clean default is a before-search state, and a search may return a neutral request path. Public-found and mixed states are internal state specimens using field labels only; they are not availability claims.

## 4. Category and evidence rules

- TDS/SDS may use View/Download only after record-level public approval.
- COA is batch/lot-specific and defaults to Request, not a generic download.
- Origin documentation depends on product and purchase/shipment context; no universal origin/customs claim.
- Traceability may depend on product, lot, batch or supply-chain context; no complete-traceability claim.
- Compliance depends on product, intended use, destination and regulatory scope; category presence does not establish coverage.
- A request never guarantees availability, approval or regulatory coverage.

## 5. English-only and request contract

Documents are currently supplied in English. No language selector or multilingual claim is allowed. Every future public record must visibly show English.

The receiving Request Documents workflow owns Product/Grade, Document Type, Destination Market, Company, Contact Name, Business Email, optional Order/Batch Reference and Additional Notes. Finder and category actions may prefill Product/Grade and/or Document Type. The Hub does not embed or implement the form.

## 6. Required module order

1. Hero — Find Documents + Request Documents.
2. Document Finder.
3. Document Results.
4. Can't Find the Document You Need? / Request Documents.
5. Compact Document Types.
6. Important Document Notes.
7. Three Buyer Questions.
8. Final Request Documents CTA.
9. Inherited Footer.

The former large Scope, request-process and prepare-context sections are removed. Useful content is compressed into Results, Notes, Request and FAQ.

## 7. SEO/GEO/structured parity

- URL remains `/documents/`.
- Page remains Navigation hub, `NO_PRIMARY_KEYWORD`, `PLANNED_ARCHITECTURE`.
- Child pages retain article-depth TDS/SDS/COA, origin and REACH intent.
- The Hub owns finder, routing and request preparation only.
- GEO relationship: Grade → Document Type → Revision/Date → English → View/Download/Request.
- Visible public records must equal machine-readable public records exactly.
- No record, file entity, download relation or file count is emitted while the verified visible set is zero.

## 8. Visual and accessibility contract

Consume Global Chrome V0.5 and Production SVG unchanged. Preserve Navy/Teal, white/light-gray, typography, buttons, cards and Deep Navy Footer. Finder/Results dominate visual hierarchy; categories/FAQ are secondary.

Desktop may use multi-column fields/results. At 390px, fields, records, types and actions stack in one column; no carousel or small two-column cards. Touch targets are at least 44px, focus is visible and long names wrap.

No fake certificate/PDF thumbnail, factory photo, molecule illustration or decorative stock imagery.

## 9. Version record

| Version | Change | Status |
|---|---|---|
| V0.1 | Guidance-first, zero-record candidate | Historical / not approved |
| V0.2 | Request-conversion guidance Hub | Historical / not approved |
| V0.3 | Finder + Results + Request tool | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
