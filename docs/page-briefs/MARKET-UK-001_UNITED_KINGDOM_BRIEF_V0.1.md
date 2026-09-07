# MARKET-UK-001 United Kingdom Brief V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `MARKET-UK-001` |
| Page | United Kingdom |
| URL | `/markets/united-kingdom/` |
| Page type | Market procurement landing page |
| Project lifecycle | `BRIEF_IN_REVIEW` |
| Gate 1 status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Version | V0.1 |
| Date | 2026-09-05 |
| Owner | Markets page execution task |
| Approval authority | Project control review, then user final approval |
| Site scope | `tio2-my` |

This is a Gate 1 planning document. It is not approved public copy, a route-live statement, a development handoff, or authorization to implement or publish.

## 1. Page identity

| Field | Approved identity |
|---|---|
| Language | EN |
| Market | United Kingdom |
| Priority | P0 |
| Primary keyword | `titanium dioxide supplier uk` |
| Mapping status | `APPROVED_PRD_V0.3` |
| Verification status | `QUALITATIVE_KEYWORD_EVIDENCE` |
| Search intent | Commercial / Supplier Search |
| Buyer stage | Supplier Search → Technical and Regulatory Evaluation → RFQ |

Identity is consistent across `PAGE_REGISTRY_V0.2.md` and `11_page_keyword_master.csv`. No URL, keyword, page-type, or role change is proposed.

## 2. Authoritative inputs

| Input | Status / use |
|---|---|
| Root `AGENTS.md` | Project governance |
| `PAGE_GATE_1_5_STANDARD_V1.0.md` | Active Gate 1–5 standard |
| `PAGE_REGISTRY_V0.2.md` | Current 57-page identity baseline |
| `11_page_keyword_master.csv` | Keyword and cannibalization authority |
| `MARKET_PLAYBOOK_V0.1.md` | Market-page planning rules |
| `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` and V0.3 audit | Sole product/application/process relationship authority |
| `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Shared Global Chrome authority; `Markets` current state |
| `PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | Production logo authority |
| UK HSE, HMRC/GOV.UK and TRA sources in the Gate 1 audit | Regulatory and time-sensitive evidence candidates |

### Input difference record

`SCHED-C001`: the user-supplied sequencing shorthand uses `MARKET-DE-001`, `MARKET-IT-001`, `MARKET-ES-001`, `MARKET-PL-001`, `MARKET-NL-001`, `MARKET-BE-001`, `MARKET-BR-001`, and `MARKET-BR-PT-001`. The current registry IDs are respectively `MARKET-EU-DE`, `MARKET-EU-IT`, `MARKET-EU-ES`, `MARKET-EU-PL`, `MARKET-EU-NL`, `MARKET-EU-BE`, `MARKET-BR-EN`, and `MARKET-BR-PT`. The serial schedule normalizes labels to the registry without changing page count, URLs, language, keywords, or responsibilities.

## 3. Page Intent Card

### 3.1 Primary audience

- UK-based industrial TiO2 procurement and sourcing teams evaluating a supplier option.
- Technical, formulation, quality, regulatory and import stakeholders supporting that evaluation.
- Buyers whose destination may be Great Britain or Northern Ireland and therefore need the correct regulatory path identified before relying on a general “UK compliance” statement.

### 3.2 Buyer situation

The buyer has explicit United Kingdom supplier intent but still needs to establish destination territory, application, specification or grade requirements, quantity, packaging needs, document-review needs, and the responsible importing route.

### 3.3 Buyer job to be done

Determine whether to continue evaluating TiO2 Malaysia for a UK procurement requirement, identify the correct GB or Northern Ireland review context, open the relevant product/application/document path, and send an RFQ with enough context for human review.

### 3.4 Proposed core message for Gate 2 development

> Evaluate a titanium dioxide supply option for the United Kingdom by first distinguishing Great Britain from Northern Ireland, then aligning application and specification requirements, document review, origin and classification checks, and an editable RFQ.

This sentence is a Page Intent statement, not approved final copy. It deliberately does not claim UK establishment, local stock, local manufacturing, registration coverage, certification, availability, lead time, or tariff outcome.

### 3.5 One-sentence page promise

The page helps UK buyers assemble the right procurement questions and proceed to the relevant TiO2 Malaysia section or quotation request without inventing local capability.

### 3.6 Primary next action

`Request a Quote`, with `market=United Kingdom` as an editable context value only when the approved RFQ route and receiver are release-ready.

### 3.7 Secondary next action

`Explore Products`, followed by supporting paths to Applications, Documents, Resources and Request Documents only when each destination is approved and route-ready.

### 3.8 Gate 1 content-intent checkpoint

`CONTENT_INTENT_CONFIRMED` is **not yet granted**. Recommended decision: confirm this Page Intent Card after project-control review, then authorize Gate 2 content architecture only. No later Gate is implied.

## 4. SEO, search intent and cannibalization contract

| Field | Gate 1 direction |
|---|---|
| Primary keyword | `titanium dioxide supplier uk` |
| Secondary keywords | `tio2 supplier uk`; `titanium dioxide manufacturer uk`; `titanium dioxide import uk`; `malaysia titanium dioxide uk`; `non china titanium dioxide uk`; `titanium dioxide anti dumping uk`; `titanium dioxide tariff uk` |
| Excluded keywords | Generic application terms; exact grade terms; detailed trade-update terms |
| Page role | Own explicit UK supplier intent, UK procurement context, application/specification discovery, document-review path and RFQ routing |
| Search-result pattern | Supplier/distributor/product pages with packaging, grade, stock, price or enquiry emphasis |
| Required differentiation | UK procurement decision support, GB/NI split, evidence-safe document and trade boundaries, and a structured RFQ path |

The secondary terms do not authorize matching public claims. In particular, `manufacturer uk`, `non china`, `anti dumping`, and `tariff` cannot be converted into location, origin, remedy, exemption, avoidance, or duty claims without separate evidence and approval.

### Cannibalization boundaries

- `MARKET-UK-001` owns the explicit UK supplier modifier.
- `MARKET-EU-001` owns Europe/EU supplier and common EU procurement intent; the UK page must not imply the UK is an EU member market.
- `RES-TRADE-UK` owns detailed UK trade-remedy and anti-dumping update intent.
- Products owns generic product-family and grade-selection intent.
- Product grade pages own exact model terms.
- Applications pages own generic use-case terms.
- Documents pages own detailed document/compliance explanations.
- RFQ owns quotation and purchase-action intent.

### Gate 1 SEO direction, not final metadata

- Candidate H1 direction: `Titanium Dioxide Supply for United Kingdom Buyers`.
- Candidate title direction: `Titanium Dioxide Supplier for UK Buyers | TiO2 Malaysia`.
- The wording must mean supply evaluation for UK buyers, not a claim that the supplier is established, stocked, or manufacturing in the UK.
- Canonical candidate: `https://tio2malaysia.com/markets/united-kingdom/`.
- `hreflang`: not applicable unless a separately approved language counterpart is created; none exists now.
- Indexing remains a Gate 10 production decision. Gate 1 does not authorize `index, follow`.

## 5. Must-answer buyer questions

1. Is this page for United Kingdom procurement requirements, and what does it help a buyer evaluate?
2. Will the goods be placed on the market in Great Britain or Northern Ireland?
3. What application and performance/specification information should the buyer provide?
4. How can the buyer review products without treating the Market page as a grade recommender?
5. Which technical, safety, batch, origin or supplier-information documents should be requested for review, without assuming availability or applicability?
6. Who is the responsible importing entity and what regulatory check is relevant to that route?
7. How should commodity classification, origin and current trade measures be verified?
8. What information should accompany an RFQ?
9. Which detailed questions belong to Products, Applications, Documents, Resources or RFQ instead of this page?

## 6. Gate 2 narrative direction — locked until authorization

The following is a research-backed narrative direction, not a module order or public copy:

1. Confirm this is the UK procurement page.
2. Separate Great Britain from Northern Ireland before compliance language is used.
3. Gather buyer-selected application and specification context.
4. Route to general product and application review without named UK grade recommendations.
5. Frame document review as scope-dependent and request-based.
6. Keep classification, origin and trade checks source-dated and separate from sales claims.
7. Present a concise RFQ context checklist and an editable quotation action.

No Gate 2 module list or full English copy is approved in this document.

## 7. Product, application and process relationship contract

The sole relationship source is `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`.

- The page may offer neutral paths to Products and buyer-selected Applications.
- It must not render row-level grade/application/process mappings as UK recommendations.
- It must not infer UK suitability, registration, stock, availability, ranking, preference, performance difference, or logistics from V0.3.
- `NO_PUBLIC_MAPPING` means no approved public mapping; it never means “not suitable”.
- M-996/M-2196 comparison remains frozen.
- M-2377 may not be globally described as hidden: its approved V0.3 neutral relationships remain in the product authority, but this Market page still renders no row-level mapping.
- Any future named UK grade recommendation requires both an approved V0.3 relationship and separate UK-market evidence plus user approval.

Gate 1 recommendation: show no named UK-specific grade recommendation in the first content version.

## 8. Fact and evidence contract

The detailed register is in `MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.1.md`.

### Eligible directions for Gate 2, with exact scope and citation

- Great Britain and Northern Ireland require distinct chemical-regulatory review paths.
- A GB importer may hold UK REACH responsibilities; a non-GB supplier may appoint a qualifying GB-based Only Representative, but this page must not claim that TiO2 Malaysia has done so.
- Commodity classification and current duty/VAT treatment must be checked with the UK Trade Tariff using product-specific details.
- Origin must be determined under the applicable origin rules; shipping or purchase location alone is not proof of origin.

### Time-sensitive hold

The UK TRA case `AD0086 — Rutile Titanium Dioxide from China` is active in the official public file as of the 2026-09-05 Gate 1 review. Any buyer-visible statement requires a fresh official-source check at Gate 2 approval and again before release. Detailed treatment belongs to `RES-TRADE-UK`; no tariff rate, exemption, avoidance, outcome, or Malaysia-specific conclusion is authorized here.

### Do not render without separate evidence and approval

- UK office, local legal entity, warehouse, local stock or local delivery capability.
- UK manufacturing or UK-origin product.
- Made/manufactured in Malaysia, Malaysia-origin goods, COO availability, or origin eligibility.
- UK REACH registration, Only Representative appointment, CLP coverage, certification, or universal compliance.
- Product availability, inventory, MOQ, packaging, sample availability, lead time, shipping lane or delivery promise.
- Customer names, export history, market share or prior UK supply.
- Current tariff rate, remedy outcome, exclusion, exemption or duty-saving claim.
- Named grade suitability or ranking for UK applications.

## 9. CTA and conversion contract

| Priority | Action | Condition |
|---|---|---|
| Primary | Request a Quote | Global fixed-RFQ chrome remains visible. Page-body CTA may route only when RFQ route, receiver, privacy, validation, error and success states are ready. |
| Secondary | Explore Products | Destination approved and route-ready; no UK-specific grade claim. |
| Supporting | Review Applications | Destination approved and route-ready; buyer chooses use case. |
| Supporting | Review Documents | Destination approved and route-ready; no availability promise. |
| Supporting | Request Documents | Route and controlled request workflow ready. |
| Conditional | View UK Trade Update | `RES-TRADE-UK` content, official-source freshness and exact route all approved; otherwise omit. |

RFQ prefill may include `market=United Kingdom` only as editable context. Destination territory, application, grade/specification, quantity, packaging and document needs must remain buyer-entered or buyer-editable. Prefill does not prove eligibility, availability or serviceability.

## 10. Internal-link and route contract

Candidate destinations include `/markets/`, `/products/`, `/applications/`, `/documents/`, `/resources/`, `/request-documents/`, `/request-a-quote/`, and `/resources/uk-titanium-dioxide-anti-dumping-investigation/`.

All candidate routes are `NOT_VERIFIED_LIVE` for this Gate 1 page. The page must not inherit a live-route conclusion from another page or from an old development snapshot. The historical MARKET-000 Gate 9 probe used `/resources/uk-titanium-dioxide-trade-update/`, while the current registry owns `/resources/uk-titanium-dioxide-anti-dumping-investigation/`; the current registry path is authoritative, but its runtime readiness remains unverified.

Breadcrumb direction: `Home > Markets > United Kingdom`.

## 11. GEO and Schema direction

### GEO entities

- TiO2 Malaysia and IKHLAS TITANIUM (MALAYSIA) SDN. BHD.
- United Kingdom, Great Britain, Northern Ireland.
- Titanium dioxide and buyer-selected application/specification context.
- HSE, UK REACH, GB CLP, EU REACH/EU CLP for Northern Ireland context.
- HMRC/UK Trade Tariff and Trade Remedies Authority for source attribution.

Only visible, source-backed and scope-correct relationships may be expressed. The page must not use GEO markup to create a capability, registration, product-market fit or origin relationship absent from visible copy.

### Answer-ready direction

The leading answer block should explain why a UK buyer first distinguishes Great Britain from Northern Ireland, then identifies the importer/regulatory path and procurement inputs. It should be concise, cited where needed, and avoid legal advice.

### Schema direction

- `WebPage`.
- `BreadcrumbList` matching the visible breadcrumb.
- `ItemList` only if a visible and route-ready list is present.
- No `LocalBusiness`, `FAQPage`, or `QAPage` by default.
- No Offer, inventory, rating, certification, registration, origin, or delivery markup.

## 12. Shared visual and accessibility direction — no Gate 3 work authorized

- Global Chrome uses `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; current navigation key is `Markets`.
- Header order remains `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Fixed RFQ remains in Global Chrome; no page-specific fork.
- Desktop current state uses bold plus teal underline; mobile current state uses bold plus teal left marker; visible `CURRENT` text remains absent.
- Production logo is referenced through `PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` and must not be copied or redrawn.
- Future Gate 3 must include 1440px Desktop, 768px Tablet and 390px Mobile full structures, plus Mobile Menu open and applicable states.
- Accessible headings, keyboard focus, 44px-equivalent touch targets, readable long UK regulatory labels, no horizontal scrolling, and no reliance on colour alone are mandatory future checks.

## 13. Development boundary

No WordPress, Next.js, CMS, API, component, test, deployment or production work is authorized. `D:\16Wordpress_nextjs` must not be accessed or modified by this task.

Future Gate 7, if separately authorized after Gates 2–6, must specify `site_scope=tio2-my` isolation, conditional rendering for frozen fields, shared Global Chrome consumption, route readiness, SEO/GEO/Schema fields and Gate 8/9 acceptance. None of that is an implementation claim now.

## 14. Gate 1 acceptance checklist

- [x] Registry and keyword-master identity agree.
- [x] Page Intent Card defines audience, buyer job, promise and next actions.
- [x] Supplier-search SERP intent is recorded without using competitors as capability evidence.
- [x] GB and Northern Ireland are separated using official HSE evidence.
- [x] Regulatory, origin, classification and trade claims have source/scope controls.
- [x] Detailed trade intent remains with `RES-TRADE-UK`.
- [x] PRODUCT V0.3 is the sole relationship source and produces zero UK row-level recommendations.
- [x] Unverified capability and route claims are frozen.
- [x] SEO/GEO/Schema and cannibalization boundaries are defined.
- [x] Gate 2–10, child-page creation and development remain unauthorized.
- [ ] Project-control review pass.
- [ ] User approval and `CONTENT_INTENT_CONFIRMED`.

## 15. Review record

### Open items

| ID | Item | Status | Gate impact |
|---|---|---|---|
| UK-G1-01 | Confirm Page Intent Card and early GB/NI procurement split without turning the page into a regulation-first page | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Blocks Gate 1 approval |
| UK-G1-02 | Confirm first content version carries no named UK-specific grade recommendations | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | Blocks Gate 1 approval |
| UK-G1-03 | Decide at Gate 2 whether the active TRA investigation receives one short dated summary or only a verification/link block | `OPEN / DEFERRED_TO_GATE_2` | Does not block Gate 1 if hold remains |
| UK-G1-04 | Validate all candidate routes before any release | `OPEN / LATER_GATE_ROUTE_DEPENDENCY` | Gate 8 implementation / Gate 9 QA / release |
| UK-G1-05 | Verify RFQ receiver, privacy, validation, error and success behavior | `OPEN / LATER_GATE_CONVERSION_DEPENDENCY` | Gate 8 implementation / Gate 9 QA / release |

### Gate record

| Gate | Status | Approval source/date |
|---|---|---|
| Gate 0 identity admissibility | Confirmed for Gate 1 drafting under user instruction | User instruction, 2026-09-05 |
| Gate 1 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | `MARKET-UK-001-G1-PCR-01`; user decision pending |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` | None |

## 16. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Created independent UK Market page Brief and Page Intent Card; recorded SEO/GEO, evidence, route, product-relationship and conversion boundaries. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 PCR sync | 2026-09-05 | Recorded `MARKET-UK-001-G1-PCR-01` project-control PASS; kept Gate 1 pending user approval and Gate 2 unauthorized. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
