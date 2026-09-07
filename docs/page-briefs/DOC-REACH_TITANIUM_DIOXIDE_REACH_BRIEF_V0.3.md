# DOC-REACH Titanium Dioxide REACH Page Brief V0.3

## 0. Document control

| Field | Value |
|---|---|
| Page ID / URL | `DOC-REACH` / `/documents/reach/` |
| Version / date | V0.3 / 2026-09-04 |
| Owner / reviewer | Documents page task / Project Control and Quality Review |
| Revision authority | User-provided V0.3 six-item review direction dated 2026-09-04 |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Submission state | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
| Mapping / verification | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Content intent | `CONTENT_INTENT_CONFIRMED=NO` |
| Gate 2–10 | `NOT_AUTHORIZED` |

## 1. Page identity and regulatory scope

| Field | Value |
|---|---|
| Page name / type | Titanium Dioxide REACH / Document-compliance decision page |
| Global audience | Procurement, regulatory, EHS and supplier-qualification teams in any market that need to evaluate an EU-bound supply arrangement. |
| Regulatory subject | European Union REACH only |
| Language / priority | EN / P1 |
| Planned domain / site scope | `https://tio2malaysia.com` / `tio2-my` |
| Canonical | Candidate `https://tio2malaysia.com/documents/reach/`; not live-approved |
| Indexing | Candidate INDEX/FOLLOW; Gate 10 remains locked |
| Shared visual owner | Global Chrome V0.5; Industrial Documentation Editorial |

### EU REACH / UK regulatory scope boundary

- The page explains EU REACH procurement-document review only.
- A global visitor may use the page when evaluating supply into the EU, but audience location does not change the regulatory subject.
- UK REACH is outside this page's claim and evidence scope.
- EU REACH information must not be represented as UK REACH registration, compliance, coverage or equivalent evidence.
- No UK-specific visible claim may be drafted until a separately approved scope and current official evidence exist.

## 2. Revised Page Intent Card

| Field | Proposed value |
|---|---|
| Audience | Global procurement, regulatory, EHS and supplier-qualification teams evaluating an EU-bound titanium dioxide supply arrangement. |
| Buyer problem | Determine what EU REACH registration information is relevant to the substance and what current evidence applies to the relevant supplier, legal entity and supply-chain arrangement. |
| Core message | Public substance-level information is not supplier-specific coverage. Procurement teams must verify substance identity, the relevant legal actor, manufacturer/importer/Only Representative role where applicable, supply-chain arrangement, use/market and evidence date. |
| Must include | Top Direct Answer placeholder; EU regulatory-scope label; EU/UK boundary; substance information versus supplier/supply-chain coverage; legal-actor roles; evidence panel; buyer checklist; contextual request path. |
| Must exclude | IKHLAS/TiO2 Malaysia registration or coverage, importer coverage, Only Representative relationship, registration number, tonnage band, UK REACH conclusion, legal advice and unqualified `REACH compliant` claim. |
| Primary CTA | `Request REACH Documentation` → `CONV-DOC`, route/readiness-gated. |
| Secondary CTA | `View Document Hub` → `/documents/`. |
| H1 direction | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` |
| Ownership | EU REACH decision support only; MARKET-EU owns regional procurement, Resources own dated trade measures, Products own Grade facts and CONV-DOC owns the form/submission. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |

## 3. Registration-scope rule and buyer questions

REACH registration/coverage language is expressed around substance identity, supplier/legal entity, manufacturer/importer/Only Representative role where applicable, supply-chain arrangement, EU use/market and current evidence. A commercial Grade is not presented as the registration actor or as corresponding to an independent registration record.

The page must answer:

- Is titanium dioxide REACH registered?
- Why does public substance-level information not prove supplier or supply-chain coverage?
- Which legal actor and role need to be identified?
- Which EU use/market and evidence date matter?
- Why does EU REACH information not establish UK REACH coverage?
- What should a buyer request for review?

## 4. SEO, GEO and cannibalization

| Field | Value |
|---|---|
| Primary keyword | `titanium dioxide reach registration` |
| Secondary keyword | `titanium dioxide reach supplier` |
| Query-language term | `reach compliant titanium dioxide` = `QUERY_LANGUAGE_ONLY`; search-demand wording, never a public company/product claim |
| Intent / stage / cluster | I / Technical Evaluation / COMP-01 |
| Excluded keywords | Grade primary terms; country supplier primary terms; UK REACH commercial intent |
| H1 | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` |
| Title direction | `Titanium Dioxide REACH Registration: What to Verify | TiO2 Malaysia` |
| Meta direction | Help global procurement teams understand which EU REACH evidence to verify for titanium dioxide across substance, legal-entity and supply-chain scope. |
| Primary entity | EU REACH information relevant to titanium dioxide procurement review |
| Schema direction | `WebPage` + `BreadcrumbList`; FAQPage only after current-policy and content approval |
| Cannibalization | DOC-REACH owns EU regulatory-document intent; EU Market retains regional procurement, Resources retain trade analysis and Product pages retain Grade identity/performance. |

Meta direction describes buyer/search value only. Evidence restrictions stay in the Claim Register, Evidence Holds and rendering controls; they must not be copied into future meta description text.

## 5. Direct Answer / GEO Publication Blocker

Gate 2 must reserve a 2–4 sentence top answer for `Is titanium dioxide REACH registered?` It must answer first, then distinguish public substance information from evidence applicable to the relevant supplier/legal entity and supply arrangement. No slogan or marketing preamble is allowed.

However, this Direct Answer is `PUBLICATION_BLOCKED`: titanium-dioxide-specific official ECHA evidence must be completely captured, approved and bound to the Claim Register before the substance-specific Direct Answer can be released as buyer-visible content, metadata-derived summary or Schema/FAQ assertion. Current ECHA HTTP 403 attempts and search summaries are discovery-only. Secondary sources cannot substitute for the required official evidence.

Gate 2 architecture may later reserve and draft controlled alternatives after separate authorization, but it may not mark the Direct Answer publishable while this blocker is open.

## 6. Gate 2 candidate architecture

Breadcrumb → Hero → Direct Answer (publication-blocked until ECHA evidence closes) → Substance-Level Information vs Supplier/Supply-Chain Coverage → Legal Actor and Supply-Chain Roles → EU Scope Factors → Buyer Verification Checklist → Dated Official Evidence / Source Panel → Request REACH Documentation → EU Market / Document Hub Paths → FAQ → Final CTA.

This is an architecture candidate only. No final page copy is created and `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=NO`.

## 7. Request Context Contract

| Context | Transport / behavior | Editability |
|---|---|---|
| Source page | `source_page=DOC-REACH` as a semantic alias normalized to internal `source_context.page_id` | Hidden / system / non-editable |
| Document types | Optional `prefill.document_types[]=other` under the current CONV-DOC allowlist; buyer may change or add supported values | Buyer-visible / editable / removable |
| REACH request description | Supported visible additional-requirements context such as `REACH documentation` | Buyer-visible / editable |
| Other buyer context | Product Grade, application or other supported visible inputs | Buyer-visible / editable |

Hidden source metadata cannot satisfy a required buyer field, determine coverage, change applicability or appear in visible copy, metadata or Schema.

## 8. CTA and relationships

| Relationship | Behavior |
|---|---|
| Primary CTA | `Request REACH Documentation`; target `/request-documents/`; route/readiness-gated |
| Secondary CTA | `View Document Hub` → `/documents/` |
| MARKET-EU-001 | EU procurement/import overview; no duplication of full REACH evidence explanation |
| Product pages | Grade identity only; no inferred registration or supply-chain coverage |
| RES-TRADE-EU | Dated trade-remedy analysis only; not REACH evidence |
| Failure behavior | Remove ineligible action and Schema relationship atomically; Contact is not a fallback |

Breadcrumb: Home → Documents → Titanium Dioxide REACH.

## 9. Evidence and fail-closed controls

Claim authority remains `pages/documents/reach/01_research/DOC-REACH_GATE1_CLAIM_REGISTER_V0.1.csv`.

- Captured European Commission sources may support general, qualified EU REACH framework explanations.
- `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN` until complete approved official evidence exists.
- No supplier/company/legal-entity registration or coverage, importer coverage, Only Representative relationship, registration number or tonnage claim may render without approved evidence.
- `reach compliant titanium dioxide` remains `QUERY_LANGUAGE_ONLY`.
- Generic official guidance cannot become company, supply-chain or UK REACH evidence.
- Request receipt is neither approval nor guaranteed delivery.
- Provisional URL is not live approval; Gate 3–10, development, deployment, publication and indexing remain unauthorized.

## 10. Official-source and freshness rule

Every time-sensitive visible statement must expose source and reviewed date. Recheck at Gate 2, Gate 7, Gate 9 and before publication. The Direct Answer Publication Blocker is independent of the ability to continue non-public architecture work after a future Gate 2 authorization.

## 11. Responsive, accessibility and visual rules

Future Gate 3–5 evidence must cover complete 1440, 768 and 390 logical views; Mobile Menu open; global-audience/EU-scope label; EU/UK boundary; long legal-actor labels; source date; route unavailable; blocked Direct Answer; keyboard focus; 200% zoom; and no horizontal overflow. Use a text-first scope map and restrained source panel. Do not use EU/ECHA seals, approval badges, certificates or compliance-heavy warning walls.

## 12. Future handoff boundary

Any future Gate 7 contract must preserve `site_scope=tio2-my`, no cross-scope fallback, hidden system source attribution, editable buyer context, EU-only regulatory scope, UK boundary, visible/Schema parity, source/review-date fields and atomic stale-fact removal. Implementation remains in `D:\16Wordpress_nextjs` only after separate authorization.

## 13. Acceptance and review record

- Global audience and EU REACH regulatory scope are separate fields.
- EU REACH evidence is never presented as UK REACH evidence.
- `reach compliant titanium dioxide` is explicitly `QUERY_LANGUAGE_ONLY`.
- ECHA TiO2 evidence is a Direct Answer Publication Blocker, not an ordinary hold.
- `source_page` is hidden/system/non-editable; only buyer context is editable.
- Meta direction contains buyer/search value rather than evidence disclaimers.

| Gate | State |
|---|---|
| Gate 0 | `DRAFT_COMPLETE` |
| Gate 1 | `REVISED_SUBMISSION / PENDING_USER_APPROVAL / NOT_CLOSED` |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |

## 14. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.2 | 2026-09-04 | Legal-actor/supply-chain registration revision | `HISTORICAL / SUPERSEDED_AS_REVIEW_CANDIDATE` |
| V0.3 | 2026-09-04 | Split global audience from EU scope; added EU/UK boundary; upgraded ECHA TiO2 evidence to Direct Answer Publication Blocker; tagged query-only wording; locked source attribution; separated buyer-value meta direction | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
