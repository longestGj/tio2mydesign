# DOC-COO Certificate of Origin Page Brief V0.3

## 0. Document control

| Field | Value |
|---|---|
| Page ID / URL | `DOC-COO` / `/documents/certificate-of-origin/` |
| Version / date | V0.3 / 2026-09-04 |
| Owner / reviewer | Documents page task / Project Control and Quality Review |
| Revision authority | User-provided V0.3 six-item review direction dated 2026-09-04 |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Submission state | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
| Mapping / verification | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Content intent | `CONTENT_INTENT_CONFIRMED=NO` |
| Gate 2–10 | `NOT_AUTHORIZED` |

## 1. Page identity

| Field | Value |
|---|---|
| Page name / type | Certificate of Origin / Document-compliance decision page |
| Market / language / priority | GLOBAL / EN / P1 |
| Planned domain / site scope | `https://tio2malaysia.com` / `tio2-my` |
| Canonical | Candidate `https://tio2malaysia.com/documents/certificate-of-origin/`; not live-approved |
| Indexing | Candidate INDEX/FOLLOW; Gate 10 remains locked |
| Shared visual owner | Global Chrome V0.5; Industrial Documentation Editorial |

## 2. Revised Page Intent Card

| Field | Proposed value |
|---|---|
| Audience | Procurement, supplier-qualification, import/export and trade-documentation teams. |
| Buyer problem | Determine which type of origin evidence is relevant to the destination and transaction, what it proves, and what information is needed to request or verify it. |
| Core message | The appropriate proof of origin depends on the destination, applicable rules of origin and transaction context. A certificate of origin is evidence for a defined transaction context; it is not a generic product badge or customs guarantee. |
| Must include | Top Direct Answer; what proof/certificate establishes; preferential proof/certificate; non-preferential COO; other proof/declaration where applicable; destination/scheme; rules of origin; transaction context; origin evidence versus traceability; request checklist. |
| Must exclude | Company/product/shipment Malaysia-origin, issued COO, universal certificate type, customs/duty outcome, circumvention and generic traceability claims without approved evidence. |
| Primary CTA | `Request Origin Documentation` → `CONV-DOC`, route/readiness-gated. |
| Secondary CTA | `View Document Hub` → `/documents/`. |
| H1 direction | `Certificate of Origin for Titanium Dioxide: What Buyers Should Verify` |
| Ownership | Origin-document decision support only; About owns approved company/origin facts, Markets own destination context, Resources own dated trade analysis, Products own Grade identity and CONV-DOC owns the form/submission. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |

## 3. Origin-evidence decision model

The future page must use this order of reasoning:

Destination / applicable scheme → Rules of origin → Origin qualification → Appropriate proof or certificate → Transaction documentation.

It must distinguish:

- Preferential Certificate or Proof of Origin where an applicable arrangement and rules support preferential treatment.
- Non-Preferential Certificate of Origin where origin is documented outside a preferential claim context.
- Other Proof or Declaration of Origin where the applicable procedure allows it.

The page must not present Certificate of Origin as one fixed, universal product document across all destinations and transactions.

## 4. Buyer questions

- What does a Certificate or Proof of Origin establish for titanium dioxide?
- Which preferential, non-preferential or other form may be relevant?
- Why do destination, applicable arrangement, rules of origin and transaction context matter?
- How does origin evidence differ from product/batch/order traceability?
- What should a buyer provide when requesting origin documentation?
- Why does a request or certificate not guarantee customs or duty treatment?

## 5. SEO, GEO and cannibalization

| Field | Value |
|---|---|
| Primary keyword | `titanium dioxide country of origin certificate` |
| Secondary keywords | `titanium dioxide coo`; `titanium dioxide origin traceability`; `titanium dioxide batch traceability` |
| Intent / stage / cluster | I / Technical Evaluation / COMP-03 |
| Excluded keywords | Grade primary terms; country supplier primary terms; trade-update primary terms |
| H1 | `Certificate of Origin for Titanium Dioxide: What Buyers Should Verify` |
| Title direction | `Certificate of Origin for Titanium Dioxide | TiO2 Malaysia` |
| Meta direction | Help buyers identify the relevant origin documentation by destination, applicable rules of origin and transaction context. |
| Primary entity | Origin evidence relevant to titanium dioxide procurement |
| Schema direction | `WebPage` + `BreadcrumbList`; FAQPage only after current-policy and content approval |
| Cannibalization | DOC-COO owns origin-document intent; About retains company/origin facts, Markets retain destination procurement and Resources retain dated trade analysis. |

Meta direction describes buyer/search value only. Evidence restrictions stay in the Claim Register, Evidence Holds and rendering controls; they must not be copied into future meta description text.

### GEO Direct Answer rule

Gate 2 must place a 2–4 sentence answer near the top for `What does a Certificate of Origin prove for titanium dioxide?` It must answer first and then qualify by destination, applicable rules and transaction context. It cannot imply product/shipment Malaysia origin, certificate availability or customs outcome. No slogan or marketing preamble is allowed.

## 6. Gate 2 candidate architecture

Breadcrumb → Hero → Direct Answer → What a Certificate / Proof of Origin Establishes → Preferential vs Non-Preferential Origin Evidence → Why Destination and Transaction Matter → Rules-of-Origin Context → Origin Evidence vs Product Traceability → What Buyers Should Provide → Request Origin Documentation → Official Source / Reviewed Date → Related Market / About / Document Hub Paths → FAQ → Final CTA.

Preferential/non-preferential distinction has priority over origin-versus-traceability explanation. This is an architecture candidate only; no final copy is created and `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=NO`.

## 7. Request Context Contract

| Context | Transport / behavior | Editability |
|---|---|---|
| Source page | `source_page=DOC-COO` as a semantic alias normalized to internal `source_context.page_id` | Hidden / system / non-editable |
| Document types | Optional `prefill.document_types[]=origin_supplier_qualification` under the current CONV-DOC allowlist | Buyer-visible / editable / removable |
| Origin request context | Destination, applicable scheme if known, order/shipment reference and other supported visible inputs | Buyer-visible / editable |
| Product Grade | Approved `prefill.product_grade` when supplied | Buyer-visible / editable / removable |

Hidden source metadata cannot satisfy a required buyer field, determine origin, change applicability or appear in visible copy, metadata or Schema.

## 8. CTA and relationships

| Relationship | Behavior |
|---|---|
| Primary CTA | `Request Origin Documentation`; target `/request-documents/`; route/readiness-gated |
| Secondary CTA | `View Document Hub` → `/documents/` |
| About | Company identity and only separately approved company/manufacturing/origin facts |
| Markets | Destination procurement context without customs/certificate guarantee |
| Resources | Dated trade-measure analysis without circumvention framing |
| Products | Grade identity only; no inferred origin or COO relation |
| Failure behavior | Remove ineligible action and Schema relationship atomically; Contact is not a fallback |

Breadcrumb: Home → Documents → Certificate of Origin.

## 9. Evidence and fail-closed controls

Claim authority remains `pages/documents/certificate-of-origin/01_research/DOC-COO_GATE1_CLAIM_REGISTER_V0.1.csv`.

- Royal Malaysian Customs general guidance is the lead official source; dated MITI context remains qualified.
- General guidance cannot become company, product, Grade, order or shipment evidence.
- `SITE_WIDE_CROSS_PAGE_MALAYSIA_ORIGIN_CLAIM_HOLD=OPEN` until approved first-party evidence closes each claimed scope.
- The site-wide hold applies to visible copy, metadata, social metadata, Schema and cross-page entity relationships; no page may infer company/product/Grade/shipment Malaysia origin from strategy, imagery or adjacent claims.
- Shipment-level origin, issued COO, issuing path, certificate availability and traceability capability remain held without exact evidence.
- No customs/duty guarantee, universal form, trade-measure circumvention framing or generic traceability claim.
- Request receipt is neither approval nor guaranteed delivery.
- Provisional URL is not live approval; Gate 3–10, development, deployment, publication and indexing remain unauthorized.

### Site-wide strategic-positioning tension

The site strategy uses `Malaysia-origin Titanium Dioxide`, while current Gate 1 evidence does not independently prove company-, product-, Grade- or shipment-level Malaysia origin. This is a `SITE-WIDE / CROSS-PAGE CLAIM HOLD`, not a DOC-COO-only caution and not a reason to release the claim. Approved first-party evidence must identify the exact entity/product/Grade/shipment scope before the corresponding visible or machine-readable relationship can be released.

## 10. Official-source and freshness rule

Public process statements must identify source and reviewed date. Destination-specific treatment must be rechecked against the applicable official scheme and rules before release. Older MITI material cannot independently support a current transaction conclusion.

## 11. Responsive, accessibility and visual rules

Future Gate 3–5 evidence must cover complete 1440, 768 and 390 logical views; Mobile Menu open; long destination/scheme labels; preferential/non-preferential comparison; held-evidence state; route unavailable; keyboard focus; 200% zoom; and no horizontal overflow. Do not use flags, government seals, fake certificates, customs stamps or shipping imagery as proof.

## 12. Future handoff boundary

Any future Gate 7 contract must preserve `site_scope=tio2-my`, no cross-scope fallback, hidden system source attribution, editable buyer context, the site-wide/cross-page Malaysia-origin hold, visible/Schema parity, source/scope/review-date fields and atomic stale-claim removal. Implementation remains in `D:\16Wordpress_nextjs` only after separate authorization.

## 13. Acceptance and review record

- H1 is `Certificate of Origin for Titanium Dioxide: What Buyers Should Verify`.
- Preferential, non-preferential and other applicable origin evidence are distinguished before traceability.
- `source_page` is hidden/system/non-editable; only buyer context is editable.
- Malaysia-origin is controlled by a `SITE-WIDE / CROSS-PAGE CLAIM HOLD`.
- Meta direction contains buyer/search value rather than evidence disclaimers.
- Contextual CTA does not imply certificate availability.

| Gate | State |
|---|---|
| Gate 0 | `DRAFT_COMPLETE` |
| Gate 1 | `REVISED_SUBMISSION / PENDING_USER_APPROVAL / NOT_CLOSED` |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |

## 14. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.2 | 2026-09-04 | Preferential/non-preferential origin and page-local publication hold revision | `HISTORICAL / SUPERSEDED_AS_REVIEW_CANDIDATE` |
| V0.3 | 2026-09-04 | Upgraded Malaysia-origin to site-wide/cross-page hold; locked source attribution; separated buyer-value meta direction; adopted natural COO H1 | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
