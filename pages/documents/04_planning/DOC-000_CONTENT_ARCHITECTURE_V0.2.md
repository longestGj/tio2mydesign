# DOC-000 Content Architecture V0.2

## 0. Control

| Field | Value |
|---|---|
| Gate | Gate 2 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| Page | `DOC-000` / `/documents/` / Navigation hub |
| Keyword | `NO_PRIMARY_KEYWORD` |
| Authority | User redesign brief plus explicit Gate 5 authority |

## 1. Narrative and module order

```text
GUIDANCE
Hero → Choose the Document You Need
→ CONTEXT
Scope → Request steps → Prepare Your Document Request
→ REQUEST DOCUMENTS
Primary conversion → Buyer Questions → light final request link
```

| Order | Module | Buyer task | Action |
|---:|---|---|---|
| 1 | Hero | Understand purpose and next step | Primary `Request Documents`; secondary local `Browse Document Types` |
| 2 | Choose + What Each Is Used For | Select one of six categories | Six lightweight document-specific request links |
| 3 | What Determines Document Scope | Identify Product/Grade, Destination Market and Order/Batch context | None |
| 4 | How Document Requests Work | Understand the three-step review and non-guarantee | None |
| 5 | Prepare Your Document Request | Gather qualification context | Conversion bridge |
| 6 | Primary conversion | Continue to structured workflow | Primary `Request Documents` |
| 7 | Buyer Questions | Resolve selection and availability concerns | Accordion |
| 8 | Final request link | Continue after reassurance | Light `Request Documents` |
| 9 | Footer | Shared navigation/global RFQ | Inherited only |

## 2. Exact Buyer Clean copy

### Hero

**H1:** Documents & Compliance Guidance

Find the technical, safety, quality, origin and compliance information needed for your titanium dioxide procurement review. Choose the document type, prepare the product and purchasing context, and submit a document request.

Actions: `Request Documents` and `Browse Document Types`.

Service fact: `DOCUMENT LANGUAGE — English`.

### Choose the Document You Need

Start with the purpose of your review. Each document type supports a different technical, safety, quality, origin or compliance requirement.

| Type | Purpose and scope copy | Action / prefill |
|---|---|---|
| Technical Data Sheet (TDS) | Use the TDS to review grade-specific technical properties, typical values, product characteristics and application information. Final suitability should be validated in the buyer's own formulation or process. | `Request TDS` / `document_type=TDS` |
| Safety Data Sheet (SDS) | Use the SDS for product safety, handling, storage, transport and hazard information. Available in English. | `Request SDS` / `document_type=SDS` |
| Certificate of Analysis (COA) | A COA provides analytical results associated with a defined production lot or batch. Order or batch information may be required. | `Request COA` / `document_type=COA` |
| Certificate of Origin & Origin Documentation | Origin documentation is reviewed against the relevant product and purchasing or shipment context. | `Request Origin Documents` / `document_type=origin` |
| Traceability Documentation | Traceability records may relate to the product, production lot, batch or supply-chain context. | `Request Traceability Documents` / `document_type=traceability` |
| REACH & Compliance Information | Compliance information depends on the product, intended use, destination market and applicable regulatory scope. A category name alone does not confirm regulatory coverage. | `Request Compliance Information` / `document_type=compliance` |

These are guidance entries, not visible file records.

### What Determines Document Scope

Direct answer: Document scope can depend on the product or grade, destination market, and order or batch context.

- **Product or Grade:** Technical and compliance documents may be grade-specific, so the exact product or grade should be identified whenever possible.
- **Destination Market:** Origin, regulatory and compliance requirements may depend on the destination market.
- **Order or Batch Context:** COA, traceability and certain origin-related documents may require order, shipment or batch information.

Note: All documents are currently supplied in English.

### How Document Requests Work

1. Select the document type and product or grade.
2. Add the destination market and any relevant order or batch information.
3. Submit the request for scope and availability review.

A document request does not automatically confirm availability, approval or regulatory coverage.

### Prepare Your Document Request

Provide the purchasing context needed to review the correct document scope:

- Product or Grade;
- Destination Market;
- Document Category;
- Order / Batch Reference — if relevant.

Documents are currently provided in English.

### Primary conversion

Eyebrow: `DOCUMENT REQUEST`

Heading: `Request Documents for Your Product and Purchasing Context`

Provide the product or grade, document category, destination market and any relevant order or batch details so the request can be reviewed against the correct scope.

Primary action: `Request Documents`.

### Buyer Questions

**Which document should I request?**  
Use a TDS for technical product review, an SDS for safety and handling information, a COA for lot-specific analytical results, and origin, traceability or compliance documentation for the relevant purchasing and regulatory context.

**Does one document cover every grade or market?**  
No. Document scope can vary by product or grade, destination market, revision and order or batch context.

**What information should I provide?**  
Provide the product or grade, document category and destination market. Include order or batch information when it is relevant to the requested document.

**Does submitting a request confirm document availability?**  
No. A document request does not confirm availability, approval or regulatory coverage. The request is reviewed against the relevant product and purchasing context.

Final prompt: `Need to request a specific document? Request Documents →`

## 3. CTA and route contract

All body request actions target `/request-documents/`. Category actions carry only the relevant document-type prefill. The target-state design is permitted for review, but release requires an independently approved and live receiving workflow. The Hub never uses Contact or Request a Quote as fallback.

## 4. Conditional public records

Current eligible public record set: zero. Therefore no record, filename, View, Download or file Schema appears in the design.

If a future record is eligible, its visible row must show Product/Grade, Document Type, Revision/Date, English and applicable scope. View/Download may appear only for that approved record and must be mirrored exactly in machine data.

## 5. Gate 2 verification

- [x] One H1 and no child-keyword article depth.
- [x] Six types each include purpose, scope and request action.
- [x] Destination Market replaces destination/language.
- [x] English-only fact is visible; no selector or multilingual claim.
- [x] Primary conversion is Request Documents.
- [x] No request implies availability, approval or coverage.
- [x] Global Chrome and adjacent-page responsibilities are unchanged.

Gate 2: `SUBMITTED / NOT APPROVED`.
