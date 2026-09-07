# DOC-COO Certificate of Origin Page Brief V0.2

## 0. Document control

| Field | Value |
|---|---|
| Page ID / URL | `DOC-COO` / `/documents/certificate-of-origin/` |
| Version / date | V0.2 / 2026-09-04 |
| Owner / reviewer | Documents page task / Project Control and Quality Review |
| Revision authority | User-provided Gate 1 review instructions dated 2026-09-04 |
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
| Must include | Top Direct Answer; what proof/certificate establishes; preferential proof/certificate versus non-preferential COO; other proof/declaration where applicable; destination and scheme; rules-of-origin context; transaction context; origin evidence versus traceability; request checklist. |
| Must exclude | Company/product/shipment Malaysia-origin, issued COO, universal certificate type, customs/duty outcome, circumvention and generic traceability claims without approved evidence. |
| Primary CTA | `Request Origin Documentation` → `CONV-DOC`, route/readiness-gated. |
| Secondary CTA | `View Document Hub` → `/documents/`. |
| H1 direction | `Titanium Dioxide Country of Origin Certificate: What Buyers Should Verify` |
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
| H1 | `Titanium Dioxide Country of Origin Certificate: What Buyers Should Verify` |
| Title direction | `Titanium Dioxide Country of Origin Certificate | TiO2 Malaysia` |
| Meta direction | Explain how destination, rules of origin and transaction context determine relevant origin documentation without claiming availability or Malaysia origin. |
| Primary entity | Origin evidence relevant to titanium dioxide procurement |
| Schema direction | `WebPage` + `BreadcrumbList`; FAQPage only after current-policy and content approval |
| Cannibalization | DOC-COO owns origin-document intent; About retains company/origin facts, Markets retain destination procurement and Resources retain dated trade analysis. |

### GEO Direct Answer rule

Gate 2 must place a 2–4 sentence answer near the top for `What does a Certificate of Origin prove for titanium dioxide?` It must answer first, then explain that relevance depends on destination, applicable rules and transaction context. It cannot imply TiO2 Malaysia product or shipment origin, certificate availability or customs outcome. No slogan or marketing preamble is allowed.

## 6. Gate 2 candidate architecture

Breadcrumb → Hero → Direct Answer → What a Certificate / Proof of Origin Establishes → Preferential vs Non-Preferential Origin Evidence → Why Destination and Transaction Matter → Rules-of-Origin Context → Origin Evidence vs Product Traceability → What Buyers Should Provide → Request Origin Documentation → Official Source / Reviewed Date → Related Market / About / Document Hub Paths → FAQ → Final CTA.

Preferential/non-preferential distinction has priority over origin-versus-traceability explanation. This is an architecture candidate only; no final copy is created and `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=NO`.

## 7. CTA and relationship contract

| Relationship | Behavior |
|---|---|
| Primary CTA | `Request Origin Documentation`; target `/request-documents/`; eligible only under the CONV-DOC route/readiness contract |
| Request context | Editable `source_page=DOC-COO`; editable `document_category=ORIGIN_DOCUMENTATION` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| About | Company identity and only separately approved company/manufacturing/origin facts |
| Markets | Destination procurement context without customs/certificate guarantee |
| Resources | Dated trade-measure analysis without circumvention framing |
| Products | Grade identity only; no inferred origin or COO relation |
| Failure behavior | Remove ineligible action and Schema relationship atomically; Contact is not a fallback |

Breadcrumb: Home → Documents → Certificate of Origin.

## 8. Evidence and fail-closed controls

Claim authority remains `pages/documents/certificate-of-origin/01_research/DOC-COO_GATE1_CLAIM_REGISTER_V0.1.csv`.

- Royal Malaysian Customs general guidance is the lead official source; dated MITI context remains qualified.
- General guidance cannot become company, product, Grade, order or shipment evidence.
- Company/product Malaysia-origin claims remain publication-held until supported by approved first-party origin evidence.
- Shipment-level origin, issued COO, issuing path, certificate availability and traceability capability remain held without exact evidence.
- No customs/duty guarantee, universal form, trade-measure circumvention framing or generic traceability claim.
- Request receipt is neither approval nor guaranteed delivery.
- Provisional URL is not live approval; Gate 3–10, development, deployment, publication and indexing remain unauthorized.

### Strategic-positioning tension

The site strategy uses `Malaysia-origin Titanium Dioxide`, while current Gate 1 evidence does not independently prove company-, product-, Grade- or shipment-level Malaysia origin. This tension is an explicit publication risk, not a reason to release the claim. It remains visible in project controls and buyer-hidden until approved first-party evidence closes the relevant scope.

## 9. Official-source and freshness rule

Public process statements must identify source and reviewed date. Destination-specific treatment must be rechecked against the applicable official scheme and rules before release. Older MITI material cannot independently support a current transaction conclusion.

## 10. Responsive, accessibility and visual rules

Future Gate 3–5 evidence must cover complete 1440, 768 and 390 logical views; Mobile Menu open; long destination/scheme labels; preferential/non-preferential comparison; held-evidence state; route unavailable; keyboard focus; 200% zoom; and no horizontal overflow. Do not use flags, government seals, fake certificates, customs stamps or shipping imagery as proof.

## 11. Future handoff boundary

Any future Gate 7 contract must preserve `site_scope=tio2-my`, no cross-scope fallback, editable request context, visible/Schema parity, source/scope/review-date fields and atomic stale-claim removal. Implementation remains in `D:\16Wordpress_nextjs` only after separate authorization.

## 12. Acceptance and review record

- Preferential, non-preferential and other applicable origin evidence are distinguished before traceability.
- Destination, scheme, rules and transaction context control the decision model.
- Malaysia-origin publication hold is explicit and unchanged.
- Contextual CTA does not imply certificate availability.
- About, Markets, Resources, Products and CONV-DOC retain their responsibilities.

| Gate | State |
|---|---|
| Gate 0 | `DRAFT_COMPLETE` |
| Gate 1 | `REVISED_SUBMISSION / PENDING_USER_APPROVAL / NOT_CLOSED` |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |

## 13. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial Gate 0–1 Brief | `HISTORICAL / SUPERSEDED_AS_REVIEW_CANDIDATE` |
| V0.2 | 2026-09-04 | Added preferential/non-preferential origin model, explicit Malaysia-origin hold, Direct Answer and contextual CTA | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
