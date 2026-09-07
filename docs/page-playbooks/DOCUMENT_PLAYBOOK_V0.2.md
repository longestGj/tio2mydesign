# TiO2 Malaysia Documents Page Playbook V0.2

## 0. Document control

| Field | Value |
|---|---|
| Playbook | `DOCUMENT` |
| Version / date | V0.2 / 2026-09-01 |
| Scope | DOC-000 Hub; shared rules only for future Document information pages |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| Change authority | User-supplied DOC-000 redesign instruction plus prior explicit `授权Gate5` |
| Hard stop | No Document child page, Gate 6/7, development, test, handoff or release |

V0.2 replaces V0.1 only as the proposed review baseline. It is not a user or project-control approval.

## 1. Page-family boundary

| Page | Responsibility |
|---|---|
| `DOC-000` `/documents/` | Explain categories, help the buyer select and prepare context, route to a qualified document request |
| Future Document children | Own article-depth REACH, TDS/SDS/COA or origin-document search intent after separate admission and approval |
| `CONV-DOC` `/request-documents/` | Own form fields, validation, privacy, submission, receipt, failure and follow-up states |
| `CONV-RFQ` | Own quotation capture; remains only in inherited global Chrome on DOC-000 |

The Hub may link to the Request Documents workflow but may not embed or take ownership of its form. No child page is started by this Playbook.

## 2. Buyer task and conversion rule

The Hub must support:

```text
Understand document types
→ Identify the document needed
→ Understand scope
→ Prepare purchasing context
→ Request Documents
→ Qualified Document Request
```

Page-level primary conversion: `Request Documents`.

Document-specific links may prefill the document category and remain visually secondary. `Request a Quote` stays visible in Header, Mobile Header, Mobile Menu and Footer under the global contract, but does not appear as a competing page-body conversion.

## 3. English-only service contract

- Current approved service fact: documents are currently supplied in English.
- Use `Destination Market`, never `Destination + Language`.
- Do not render a language selector or multilingual claim.
- A future eligible public record must visibly expose `Language: English`.
- The Request Documents workflow does not need a language field.

This service fact does not prove that any particular document exists or is eligible for release.

## 4. Category semantics

| Category | Buyer purpose | Scope boundary | Request action |
|---|---|---|---|
| TDS | Grade-specific technical properties, typical values, characteristics and application information | Suitability still requires buyer validation; grade/revision may matter | `Request TDS` |
| SDS | Safety, handling, storage, transport and hazard information | Product identity and current English document scope may matter | `Request SDS` |
| COA | Analytical results for a defined production lot or batch | Batch-specific; order/batch context may be required | `Request COA` |
| Origin | Origin documentation for the relevant product and purchasing/shipment context | No universal Malaysia-origin, customs, duty or tariff claim | `Request Origin Documents` |
| Traceability | Records relating to product, production lot, batch or supply-chain context | No complete-supply-chain claim without evidence | `Request Traceability Documents` |
| REACH / Compliance | Regulatory review for product, use and destination market | A category name alone does not confirm coverage | `Request Compliance Information` |

Category guidance is not a file inventory and must not be represented as one.

## 5. Evidence and state governance

Current confirmed state:

- approved visible public file records: zero;
- approved per-grade/per-market coverage matrix: none;
- live readiness of `/request-documents/`: not verified in this planning project;
- Document child pages: not started and not actionable;
- English-only service fact: supplied by the user for this design revision.

Target-state request links may appear in Gate 5 designs because the user explicitly requested the conversion flow. They remain release-blocked until the receiving workflow, route, privacy, validation and failure states are independently approved and verified. Buyer Clean must not expose internal readiness language.

Request receipt never confirms availability, approval, regulatory coverage, origin, download eligibility or delivery.

## 6. Public-record contract

If a record later passes evidence, disclosure and route gates, it must show at least:

- Product / Grade;
- Document Type;
- Revision / Date;
- Language: English;
- applicable scope, when relevant;
- `View` or `Download` only when that action is approved and live.

Visible records must equal machine-readable records in name, order, URL and scope. A visible set of one cannot be represented as fourteen in JSON-LD. No unverified or controlled-only file enters public structured data.

## 7. SEO and GEO boundary

- DOC-000 remains `NO_PRIMARY_KEYWORD` and `PLANNED_ARCHITECTURE`.
- The Hub explains and routes; it does not write article-depth sections for child keyword clusters.
- GEO answers must be visible, concise and limited to category purpose, scope, English-only service, request preparation and non-guarantee language.
- Candidate page-level Schema remains `CollectionPage` or `WebPage` plus visible `BreadcrumbList`, subject to indexing approval.
- Document entities, `ItemList`, `DigitalDocument`, `hasPart`, download URLs and file counts are emitted only for the matching visible verified set.
- A request-action relation is emitted only when the visible action and receiving route are approved and live.

## 8. Required Buyer Clean sequence

1. Hero with `Request Documents` and `Browse Document Types`.
2. Six category cards with purpose, scope and secondary request link.
3. Scope: Product or Grade, Destination Market, Order or Batch Context.
4. Three-step request process and non-guarantee answer.
5. Prepare Your Document Request.
6. Prominent Request Documents conversion section.
7. Four Buyer Questions.
8. Light final Request Documents link.
9. Inherited Footer.

No fake PDF thumbnails, certificate mockups, factory imagery, stock photos, decorative molecules, disabled actions, blank slots or internal state tokens.

## 9. Global visual and accessibility contract

Consume, without modification:

- fixed first-level navigation and Documents current state;
- Desktop Header 84px;
- Mobile Header 64px;
- Deep Navy Footer;
- permanent Header/Mobile/Menu/Footer `Request a Quote` to `/request-a-quote/`;
- Production SVG Logo bindings.

DOC-000 uses Navy + Teal, white/soft-gray sections, document-index motif, two-column desktop taxonomy and single-column 390px taxonomy. Touch actions are at least 44px, focus is visible, long names wrap, no essential meaning depends on hover, and no horizontal carousel is used.

## 10. Gate rule

Each Gate records status, verification, open items and approval source. Submission is not approval. DOC-000 stops at Gate 5 `DESIGN_IN_REVIEW`; Gate 6 requires separate authority.

## 11. Version record

| Version | Change | Status |
|---|---|---|
| V0.1 | Zero-public-record guidance proposal without a request action | Historical submitted candidate; not approved |
| V0.2 | Request-conversion Hub, English-only contract, category prefill and visible=machine rule | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
