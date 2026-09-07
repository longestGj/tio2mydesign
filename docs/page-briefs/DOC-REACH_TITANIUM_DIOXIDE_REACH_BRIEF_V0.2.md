# DOC-REACH Titanium Dioxide REACH Page Brief V0.2

## 0. Document control

| Field | Value |
|---|---|
| Page ID / URL | `DOC-REACH` / `/documents/reach/` |
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
| Page name / type | Titanium Dioxide REACH / Document-compliance decision page |
| Market / language / priority | GLOBAL / EN / P1; EU scope explicit |
| Planned domain / site scope | `https://tio2malaysia.com` / `tio2-my` |
| Canonical | Candidate `https://tio2malaysia.com/documents/reach/`; not live-approved |
| Indexing | Candidate INDEX/FOLLOW; Gate 10 remains locked |
| Shared visual owner | Global Chrome V0.5; Industrial Documentation Editorial |

## 2. Revised Page Intent Card

| Field | Proposed value |
|---|---|
| Audience | EU-facing procurement, regulatory, EHS and supplier-qualification teams reviewing titanium dioxide supply. |
| Buyer problem | Determine what REACH registration information is relevant to the substance and what current evidence applies to the relevant supplier, legal entity and supply-chain arrangement. |
| Core message | Public substance-level information is not supplier-specific coverage. Procurement teams must verify substance identity, the relevant legal actor, manufacturer/importer/Only Representative role where applicable, supply-chain arrangement, use/market and evidence date. |
| Must include | Top Direct Answer; substance-level information versus supplier/supply-chain coverage; legal-actor roles; scope factors; evidence/currentness panel; buyer checklist; contextual request path. |
| Must exclude | IKHLAS/TiO2 Malaysia registration or coverage, importer coverage, Only Representative relationship, registration number, tonnage band, legal advice and unqualified `REACH compliant` language without approved evidence. |
| Primary CTA | `Request REACH Documentation` → `CONV-DOC`, route/readiness-gated. |
| Secondary CTA | `View Document Hub` → `/documents/`. |
| H1 direction | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` |
| Ownership | REACH decision support only; MARKET-EU owns procurement context, Resources own dated trade measures, Products own Grade facts and CONV-DOC owns the form/submission. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |

## 3. Registration-scope rule and buyer questions

REACH registration/coverage language must be expressed around substance identity, supplier/legal entity, manufacturer/importer/Only Representative role where applicable, supply-chain arrangement, use/market and current evidence. A commercial Grade is not presented as the registration actor or as corresponding to an independent registration record.

The page must answer:

- Is titanium dioxide REACH registered?
- Why does public substance-level information not prove supplier or supply-chain coverage?
- Which legal actor and role need to be identified?
- Which use, market and evidence date matter?
- What should a buyer request for review?

## 4. SEO, GEO and cannibalization

| Field | Value |
|---|---|
| Primary keyword | `titanium dioxide reach registration` |
| Secondary keywords | `reach compliant titanium dioxide`; `titanium dioxide reach supplier` |
| Intent / stage / cluster | I / Technical Evaluation / COMP-01 |
| Excluded keywords | Grade primary terms; country supplier primary terms |
| H1 | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` |
| Title direction | `Titanium Dioxide REACH Registration: What to Verify | TiO2 Malaysia` |
| Meta direction | Explain what procurement teams should verify at substance, legal-actor and supply-chain level without claiming supplier registration or coverage. |
| Primary entity | REACH information relevant to titanium dioxide procurement review |
| Schema direction | `WebPage` + `BreadcrumbList`; FAQPage only after current-policy and content approval |
| Cannibalization | DOC-REACH owns regulatory-document intent; EU Market retains regional procurement, Resources retain trade analysis and Product pages retain Grade identity/performance. |

### GEO Direct Answer rule

Gate 2 must place a 2–4 sentence answer near the top for `Is titanium dioxide REACH registered?` The answer must first distinguish public substance information from evidence applicable to the relevant supplier/legal entity and supply arrangement, then identify the required verification context. It cannot infer any TiO2 Malaysia, IKHLAS, importer or Only Representative coverage. No slogan or marketing preamble is allowed.

## 5. Gate 2 candidate architecture

Breadcrumb → Hero → Direct Answer → Substance-Level Information vs Supplier/Supply-Chain Coverage → Legal Actor and Supply-Chain Roles → Scope Factors → Buyer Verification Checklist → Dated Official Evidence / Source Panel → Request REACH Documentation → EU Market / Document Hub Paths → FAQ → Final CTA.

This is an architecture candidate only. No final page copy is created and `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=NO`.

## 6. CTA and relationship contract

| Relationship | Behavior |
|---|---|
| Primary CTA | `Request REACH Documentation`; target `/request-documents/`; eligible only under the CONV-DOC route/readiness contract |
| Request context | Editable `source_page=DOC-REACH`; editable `document_category=REACH` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| MARKET-EU-001 | EU procurement/import overview; no duplication of REACH evidence explanation |
| Product pages | Grade identity only; no inferred registration or supply-chain coverage |
| RES-TRADE-EU | Dated trade-remedy analysis only; not REACH evidence |
| Failure behavior | Remove ineligible action and Schema relationship atomically; Contact is not a fallback |

Breadcrumb: Home → Documents → Titanium Dioxide REACH.

## 7. Evidence and fail-closed controls

Claim authority remains `pages/documents/reach/01_research/DOC-REACH_GATE1_CLAIM_REGISTER_V0.1.csv`.

- Captured European Commission sources may support general, qualified REACH framework explanations.
- Titanium-dioxide-specific official ECHA evidence must be completely captured and approved before any substance-specific visible claim is released.
- HTTP 403 ECHA attempts and search summaries are discovery-only; secondary sources cannot replace the required official evidence.
- No supplier/company/legal-entity registration or coverage claim, importer coverage, Only Representative relationship, registration number or tonnage claim may render without approved evidence.
- Generic official guidance cannot be converted into company or supply-chain evidence.
- Request receipt is neither approval nor guaranteed delivery.
- Provisional URL is not live approval; Gate 3–10, development, deployment, publication and indexing remain unauthorized.

## 8. Official-source and freshness rule

Every time-sensitive visible statement must expose source and reviewed date. Recheck at Gate 2, Gate 7, Gate 9 and before publication. Until complete titanium-dioxide-specific ECHA evidence is eligible, Gate 2 may design the Direct Answer and evidence-panel structure but must keep the substance-specific conclusion held.

## 9. Responsive, accessibility and visual rules

Future Gate 3–5 evidence must cover complete 1440, 768 and 390 logical views; Mobile Menu open; long legal-actor labels; source date; route unavailable; held-evidence state; keyboard focus; 200% zoom; and no horizontal overflow. Use a text-first scope map and restrained source panel. Do not use EU/ECHA seals, approval badges, certificates or compliance-heavy warning walls.

## 10. Future handoff boundary

Any future Gate 7 contract must preserve `site_scope=tio2-my`, no cross-scope fallback, editable request context, visible/Schema parity, source/review-date fields and atomic removal of stale facts. Implementation remains in `D:\16Wordpress_nextjs` only after separate authorization.

## 11. Acceptance and review record

- Primary keyword is answered directly without implying IKHLAS or supplier coverage.
- Registration language is legal-actor/supply-arrangement based, never Grade-as-registrant.
- Titanium-dioxide-specific visible claims remain held pending eligible official ECHA evidence.
- Contextual CTA routes to CONV-DOC and secondary CTA says `View Document Hub`.
- Every visible fact follows the Claim Register and current evidence date.

| Gate | State |
|---|---|
| Gate 0 | `DRAFT_COMPLETE` |
| Gate 1 | `REVISED_SUBMISSION / PENDING_USER_APPROVAL / NOT_CLOSED` |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |

## 12. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial Gate 0–1 Brief | `HISTORICAL / SUPERSEDED_AS_REVIEW_CANDIDATE` |
| V0.2 | 2026-09-04 | Corrected registration-scope language; added Direct Answer, ECHA titanium-dioxide evidence hold and contextual CTA | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
