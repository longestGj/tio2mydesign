# DOC-000 Documents & Compliance Hub Content Architecture V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `DOC-000` |
| Gate | Gate 2 |
| Version | V0.1 |
| Date | 2026-09-01 |
| Status | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` |
| User authority | 2026-09-01 instruction authorises DOC-000 preparation through Gate 4, then requires a stop for user review |
| Inputs | DOC-000 Brief V0.1, Document Playbook V0.1, PRD V0.4, registry/keyword master, Global Chrome V0.5, Production SVG Manifest V1.0 |
| Current public state | Zero eligible document records; child and controlled-request actions fail closed |
| Explicit exclusion | No child-page content, request form, Gate 5 visual, development or release work |

## 1. Gate 2 decisions

| Decision ID | Decision | Status |
|---|---|---|
| DOC-G2-D01 | H1 uses the page identity and guidance role, not an individual document keyword | Draft for review |
| DOC-G2-D02 | Six document categories are explained at selection depth only | Draft for review |
| DOC-G2-D03 | Current Buyer Clean uses the zero-record, no-child-action, no-request-action state | Draft for review |
| DOC-G2-D04 | The page explains applicability context without implying a file exists | Draft for review |
| DOC-G2-D05 | Hub and `/request-documents/` remain separate; no form appears here | Draft for review |
| DOC-G2-D06 | Current Schema contains no document collection or child-route relation | Draft for review |
| DOC-G2-D07 | Global Chrome V0.5 remains fixed and is not part of the page-body design decision | Inherited approved authority |

## 2. Buyer and page responsibility

### 2.1 Primary buyer

- procurement and supplier qualification;
- technical and formulation review;
- EHS and safety review;
- quality review;
- regulatory/compliance review;
- import/export documentation review.

### 2.2 One-sentence responsibility

Help an international B2B buyer distinguish document categories, understand which context may affect scope, and identify the next eligible step without promising availability, coverage, compliance, origin, download, approval or delivery.

### 2.3 Explicit non-responsibilities

| Excluded responsibility | Correct owner |
|---|---|
| REACH article-depth information and verified coverage | `DOC-REACH` |
| TDS/SDS/COA article-depth information and applicability | `DOC-TDS` |
| COO/origin/traceability article-depth information | `DOC-COO` |
| Document request form, validation, privacy and receipt/failure states | `CONV-DOC` |
| Company manufacturing/origin/traceability trust facts | `ABOUT-001` |
| Product specifications, suitability and performance | Product and Application pages |
| Market procurement/regulatory detail | Market pages |
| Quotation capture | `CONV-RFQ` |

## 3. Narrative sequence

```text
What this Hub helps the buyer decide
→ Choose a document category by review need
→ Understand what affects scope
→ Understand the controlled-review process
→ Resolve common buyer questions
→ Prepare context for a later eligible request
```

The current state intentionally contains no document file cards and no contextual external CTA. The fixed Global RFQ remains in Header, Mobile Header, Mobile Menu and Footer under the shared V0.5 contract, but it is not presented as a document-request substitute.

## 4. Module architecture

| Order | Module ID | Module name | Buyer decision | Required visible content | Current action | Mobile treatment |
|---:|---|---|---|---|---|---|
| 0 | GHC | Global Header | Confirm location and retain global procurement action | Production SVG Logo, fixed nav, Documents marker, fixed RFQ | Shared RFQ only | 64px `Logo | RFQ | Menu` |
| 1 | BREADCRUMB | Breadcrumb | Confirm page hierarchy | `Home / Documents` | Home link only when eligible | Single wrapping line |
| 2 | HERO | Documents & Compliance Guidance | Understand what the page can and cannot do | Kicker, H1, two-sentence answer, local anchor CTA | `Review document categories` → `#document-categories` | Single column; anchor full-width if needed |
| 3 | CATEGORY_GUIDE | Choose by review need | Select one of six document-purpose families | Six purpose rows; each includes use and context note | No child link in current state | Single stacked rows |
| 4 | SCOPE_FACTORS | What affects document scope | Know what information to prepare | Product/grade, destination/language, order/batch | No external action | Three compact stacked blocks |
| 5 | CONTROLLED_PROCESS | How document requests are handled | Understand review versus approval/delivery | Three process steps and current no-link message | No request action in current state | Vertical numbered steps |
| 6 | BUYER_QUESTIONS | Buyer questions | Resolve selection and access ambiguity | Four visible questions and concise answers | No external action | Native accordion direction; first open in wireframe |
| 7 | PREPARE_CONTEXT | Prepare the context | Leave with a concrete checklist | Product/grade, destination, document category, order/batch if relevant | No form and no Contact fallback | Four-item checklist |
| 8 | FOOTER | Global Footer | Preserve global navigation and RFQ | Deep Navy approved Footer, fixed RFQ | Shared RFQ only | Stacked approved Footer |

## 5. Exact Buyer Clean copy deck — current zero-record state

The following English copy is proposed for Gate 4 review. It is public copy, not an internal-state explanation.

### 5.1 Breadcrumb

```text
Home / Documents
```

### 5.2 Hero

```text
DOCUMENTS & COMPLIANCE

Documents & Compliance Guidance

Choose the document category that matches your technical, safety, quality, origin or regulatory review. Document scope is checked against the specific product and purchasing context before any material is shared.

Review document categories
```

### 5.3 Category introduction

```text
Choose by review need

Each document supports a different part of supplier or material evaluation. Start with the purpose of your review, then confirm the product and destination context.
```

### 5.4 Category rows

#### TDS

```text
Technical Data Sheet (TDS)

For grade-specific technical information and specification review. Confirm the product and relevant revision before relying on the document.
```

#### SDS

```text
Safety Data Sheet (SDS)

For hazard, handling, storage and safety review. Product identity, destination, language and revision may affect which document is relevant.
```

#### COA

```text
Certificate of Analysis (COA)

For reviewing analytical results associated with a defined production lot. A product, order or batch reference may be needed.
```

#### COO / Origin

```text
Certificate of Origin and Origin Documents

For origin documentation connected to a trade or shipment context. The product, destination and document type must be confirmed.
```

#### Traceability

```text
Traceability Information

For questions about batch or supply-chain records. The request must identify the product and the level of detail needed.
```

#### REACH / Compliance

```text
REACH and Compliance Information

For regulatory review where the legal role, substance or product scope, intended use and destination may matter. A category name alone does not confirm coverage.
```

### 5.5 Scope factors

```text
What affects document scope

Product and grade
Technical and safety information may be specific to the exact product identity and revision.

Destination and language
Safety and regulatory information may differ by jurisdiction, destination and language.

Order and batch context
Quality, origin and traceability records may require an order, shipment or batch reference.
```

### 5.6 Controlled process

```text
How document requests are handled

1. Identify the product and document category.
2. Add destination, language, order or batch details when they are relevant.
3. The request is reviewed and the outcome is communicated separately.

Document requests are reviewed individually. There is no document request link on this page at present.
```

### 5.7 Buyer questions

```text
Buyer questions

Which document should I choose?
Use a TDS for technical review, an SDS for safety and handling, a COA for lot-related analytical results, and origin or traceability documents for the relevant trade, shipment or batch context. REACH and other compliance questions require the exact regulatory scope.

Does one document cover every grade or market?
No general coverage is stated here. Product identity, revision, destination, language, order or batch context may change which information is relevant.

Can I download documents from this page?
No document files are listed for download on this page. This Hub explains document categories and the context needed for review.

Does submitting a request mean the document is approved?
No. A request is reviewed first. Receipt does not confirm that a document exists, applies to the request or can be shared.
```

### 5.8 Prepare context

```text
Prepare the context

Before making a document request, note the product or grade, destination market, document category, and any relevant order or batch reference.
```

## 6. Conditional content contracts

### 6.1 Current state

Current visible body:

- six category-purpose rows without child links;
- no filenames, file counts, dates, download controls or document thumbnails;
- no Request Documents CTA;
- no Contact fallback;
- exact neutral no-link statement in `CONTROLLED_PROCESS`;
- no `ItemList` or child relationship in Schema.

### 6.2 Future partial-record state

Only an eligible record may add:

- visible document/category name;
- approved product/market/language/revision scope;
- approved public or controlled access statement;
- an eligible, specific action;
- the identical visible relation in structured output.

Ineligible planned records leave no card, gap, count, placeholder or hidden link.

### 6.3 Future complete-record state

The complete state is the approved set of eligible records. It must not be described as covering every grade or market unless a separate evidence matrix supports that exact statement.

### 6.4 Route-unavailable state

Remove the affected action and relation. Retain category-purpose content only when it remains useful without the action. Do not show a disabled control, dead link, `coming soon`, Contact fallback or blank action slot.

## 7. CTA contract

| CTA | Destination | Current state | Rule |
|---|---|---|---|
| Review document categories | `#document-categories` | Render | Local anchor; no external route dependency |
| Review TDS/SDS/COA guidance | `DOC-TDS` | Do not render | Child URL/content/route not eligible |
| Review REACH guidance | `DOC-REACH` | Do not render | Child URL/content/route and facts not eligible |
| Review origin-document guidance | `DOC-COO` | Do not render | Child URL/content/route and facts not eligible |
| Request Documents | `CONV-DOC` | Do not render | Conversion workflow and route not eligible |
| Request a Quote | `CONV-RFQ` | Always render in Global Chrome | Fixed shared contract; not a document fallback |

## 8. Internal links

### 8.1 Inbound owners

| Source | Context passed | Current contract |
|---|---|---|
| Header | Documents navigation | Render when DOC-000 itself is released |
| Home Documents module | Document-information route | Release requires DOC-000 route readiness; Home makes no file claim |
| Products/Markets/Applications/Resources | Procurement support path | May name DOC-000 as owner; public link remains independently gated |
| Future Document children | Breadcrumb/back to Hub | Not started by this task |

### 8.2 Outbound owners

| Target | Purpose | Current body rendering |
|---|---|---|
| DOC-REACH | REACH information | None |
| DOC-TDS | TDS/SDS/COA information | None |
| DOC-COO | COO/origin/traceability information | None |
| CONV-DOC | Controlled request | None |
| ABOUT-001 | Verified company/origin trust | None |
| PRODUCT-000 / Grade pages | Product identity context | None |

Only the breadcrumb Home relation and fixed Global Chrome relations are proposed in the current body/chrome set. Their release readiness remains external to this design task.

## 9. Content acceptance

- [x] One H1; no child primary keyword ownership.
- [x] Every module supports a buyer decision.
- [x] Hub and request conversion are separate.
- [x] Exact copy makes no file-availability, download, coverage, compliance, origin or traceability claim.
- [x] Current state has no child or request CTA.
- [x] Global RFQ remains fixed and is not described as a document fallback.
- [x] Six category families have distinct purposes and scope notes.
- [x] No internal Gate, route, inventory, evidence ID, owner or approval token appears in the exact Buyer Clean blocks.
- [x] No child page was started.

## 10. Gate status

| Item | Status |
|---|---|
| Gate 2 content architecture | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` |
| Exact Buyer Clean copy | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` |
| Gate 3 eligibility | Authorised by current user instruction; not an approval of Gate 2 |
| Gate 5 | `SUBMITTED_FOR_USER_REVIEW / NOT_APPROVED`; authorized after this Gate 2 document was first submitted |

## 11. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Initial DOC-000 zero-record content architecture and exact Buyer Clean copy | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` |
