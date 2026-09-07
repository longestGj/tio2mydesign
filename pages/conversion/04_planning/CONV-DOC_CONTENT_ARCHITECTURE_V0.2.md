# CONV-DOC Request Documents — Gate 2 Content Architecture V0.2

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-DOC-G5-V11-20260901-01` |
| Input | `docs/page-briefs/CONV-DOC_REQUEST_DOCUMENTS_BRIEF_V0.2.md` |
| Status | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_FOR_GATE5_EXECUTION / NOT_FINAL_APPROVAL` |
| Page | `/request-documents/` / `NO_PRIMARY_KEYWORD` |

V0.1 is `HISTORICAL / SUPERSEDED_PENDING_REWORK` because it used destination/market context, old document labels and a 2,000-character request field.

## 1. Buyer decision path and module order

1. **Intro** — identify the transaction and receipt-only boundary.
2. **Three-step cue** — Your Details → Request Details → Human Review; not a wizard.
3. **Prefill review** — show only valid editable context; close naturally when empty.
4. **Your Details** — Full Name, Company, Business Email, Country / Region.
5. **Request Details** — Product Grade, six Document Types, Application / Industry, Additional Requirements.
6. **Review** — repeat the buyer’s selected grade, types and optional application; label Country / Region as contact context only.
7. **Privacy review slot** — internal evidence-gated annotation until approved copy exists.
8. **Primary action** — `Request Documents`.
9. **Success or failure state** — exact V1.1 success; channel-free retry on unconfirmed submission.
10. **Shared Footer** — permanent RFQ remains visually subordinate to the completed document-request task.

There is no brand story, product education, market section, document-category education section, FAQ block or immediate RFQ prompt in the page body.

## 2. Buyer-visible copy contract

| Element | V0.2 copy / rule |
|---|---|
| Eyebrow | `Controlled document request` |
| H1 | `Request Documents` |
| Intro | `Tell us which product and documentation your team needs. We use the information below to review your request and follow up through the business email you provide.` |
| Receipt boundary | `Submission confirms receipt only.` followed by explicit no-availability/no-approval/no-delivery language |
| Form H2 | `Tell us what your team needs` |
| Primary CTA | `Request Documents` |
| Success heading | `Document Request Received` |
| Success body | `Thank you. Our team will review your request and follow up using the business email you provided.` |
| Success secondary | `View Products` |
| Failure heading | `We could not confirm receipt.` |

The V1.1 phrase “appropriate available documents” is not carried into visible copy because it could imply an inventory or applicability determination.

## 3. Form and validation contract

- Required: Full Name, Company, Business Email, Country / Region, Product Grade and at least one Document Type.
- Recommended but optional: Application / Industry.
- Optional: Additional Requirements, maximum about 500 characters.
- Personal email may trigger advice to use a company address but does not hard block submission.
- Error summary receives focus and links to each invalid field; field errors remain adjacent to the relevant control.
- Submitting disables repeat submission while preserving all values.
- `Other Documentation` does not make Additional Requirements mandatory in V0.2.

## 4. Document group semantics

The six labels from V1.1 are rendered verbatim. Supporting descriptions define only the type of request. `Quality & COA Documentation` accommodates typical quality information and batch-specific requirements without saying a COA is available. `Origin & Supplier Qualification Documentation` permits origin-review context without asserting Malaysia-origin proof or market treatment. `Regulatory & Compliance Documentation` is not a certification inventory.

## 5. Prefill logic

Prefill is convenience, not evidence. Product-page Grade, Application-page Application / Industry, Document-Hub Grade and supported URL parameters are visible, editable and removable. Country / Region is never prefilled as a market routing value. No Product, route, regulatory, certification or document evidence gate is unfrozen by prefill.

## 6. SEO, GEO, CTA and links

- H1 is exact and singular; title/description direction is utility-oriented, not keyword-volume oriented.
- `NO_PRIMARY_KEYWORD` remains unchanged.
- Document information pages own educational terms; Market pages own country/region supplier content.
- Primary page CTA is Request Documents. Global RFQ appears only in shared Chrome and keeps `/request-a-quote/`.
- Success does not push RFQ; `View Products` is the only page-specific secondary action.
- No new first-level navigation item is created.
- Machine-readable statements may describe `Request Documents` as a controlled human-review request process only.

## 7. Evidence and frozen fields

| Item | Status | Rendering rule |
|---|---|---|
| V1.1 field structure and six groups | User-authorised page input | Render |
| 14 published grades | Product master / V0.3 relation baseline | Render selector capacity; no inventory inference |
| M-2377 neutral context | Approved Product V0.3 boundary | May prefill neutrally |
| File inventory, version, language, applicability and release | Not verified | Do not render |
| Compliance/certification status | Not verified for this page | Do not infer |
| Reply time | Not approved | No SLA |
| Privacy wording/channel | Not approved | Internal annotation only |
| Operational receiver | Not verified | No delivery/fallback promise |

## 8. Gate 2 checkpoint

`FULL_COPY_AND_MODULE_ORDER_CONFIRMED_FOR_GATE5_EXECUTION` records the user’s authority to execute Gate 5 against V1.1. It is not project-control review pass, final visual approval, handoff or release authority.
