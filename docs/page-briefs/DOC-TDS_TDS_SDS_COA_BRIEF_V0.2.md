# DOC-TDS TDS, SDS & COA Page Brief V0.2

## 0. Document control

| Field | Value |
|---|---|
| Page ID / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
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
| Page name / type | TDS, SDS & COA / Document-compliance decision page |
| Market / language / priority | GLOBAL / EN / P1 |
| Planned domain / site scope | `https://tio2malaysia.com` / `tio2-my` |
| Canonical | Candidate `https://tio2malaysia.com/documents/tds-sds-coa/`; not live-approved |
| Indexing | Candidate INDEX/FOLLOW; Gate 10 remains locked |
| Shared visual owner | Global Chrome V0.5; Industrial Documentation Editorial |

## 2. Revised Page Intent Card

| Field | Proposed value |
|---|---|
| Audience | Procurement, formulation, technical, quality and EHS teams evaluating a titanium dioxide Grade, product or batch context. |
| Buyer problem | Identify the correct TDS, SDS or COA for the relevant titanium dioxide Grade, product or batch context and request it efficiently. |
| Core message | TDS, SDS and COA support different buyer decisions: TDS is controlled primarily by Grade and revision; SDS by product, jurisdiction/language and revision; COA by lot, batch or order context. |
| Must include | Top Direct Answer; Quick Document Choice; Find Documents by Product Grade; three-document comparison; controlling context; buyer-input checklist; request process and receipt boundary. |
| Must exclude | Public inventory, Grade availability matrix, inferred Grade-document availability, fake filenames, downloads, universal availability and compliance/approval/delivery guarantees. |
| Primary CTA | `Request TDS, SDS or COA` → `CONV-DOC`, route/readiness-gated. |
| Secondary CTA | `View Document Hub` → `/documents/`. |
| H1 direction | `Titanium Dioxide TDS, SDS & COA: What to Request` |
| Ownership | Decision support and request-context selection only; Product pages own Grade facts, DOC-000 owns Hub navigation and CONV-DOC owns the form and submission states. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |

## 3. Buyer strategy and required questions

The page must move from direct answer to document choice, relevant context and a qualified request. It must answer:

- What is the difference between a TDS, SDS and COA?
- Which document matches the buyer's technical, safety or batch-quality decision?
- Which Grade/product/batch context should be supplied?
- How can a buyer start a request from a selected Grade without implying availability?
- What happens after submission?

Success means the buyer can select a document category, optionally select a Grade as request context and reach CONV-DOC with editable context. Receipt means review only, not approval or guaranteed delivery.

## 4. SEO, GEO and cannibalization

| Field | Value |
|---|---|
| Primary keyword | `titanium dioxide tds` |
| Secondary keywords | `titanium dioxide sds`; `titanium dioxide coa`; `titanium dioxide technical data sheet`; `titanium dioxide safety data sheet`; `request titanium dioxide documents` |
| Intent / stage / cluster | I / Technical Evaluation / COMP-02 |
| Excluded keywords | Grade primary terms; country supplier primary terms |
| H1 | `Titanium Dioxide TDS, SDS & COA: What to Request` |
| Title direction | `Titanium Dioxide TDS, SDS & COA: What to Request | TiO2 Malaysia` |
| Meta direction | Help buyers choose the appropriate document context and start a controlled request without claiming availability or public download. |
| Primary entity | Titanium dioxide technical, safety and batch documentation |
| Schema direction | `WebPage` + `BreadcrumbList`; FAQPage only after current-policy and content approval |
| Cannibalization | DOC-TDS owns generic document-choice intent; Product pages retain Grade specifications and identity; CONV-DOC retains conversion behavior. |

### GEO Direct Answer rule

Gate 2 must place a 2–4 sentence answer near the top for `What is the difference between a TDS, SDS and COA?` It must answer first, then qualify scope; no slogan or marketing preamble. Every factual sentence must follow the Claim Register and Evidence Holds and be suitable for search snippets, AI Overviews and LLM citation.

## 5. Gate 2 candidate architecture

Breadcrumb → Hero → Direct Answer → Quick Document Choice → Find Documents by Product Grade → TDS / SDS / COA Comparison → TDS Scope → SDS Scope → COA Scope → What Buyers Should Provide → Request Process → FAQ → Related Paths → Final CTA.

This is an architecture candidate only. No final page copy is created and `FULL_COPY_AND_MODULE_ORDER_CONFIRMED=NO`.

## 6. Grade-to-request context contract

- The page may present the approved 14-Grade identity list solely as request context.
- Selecting `M-2377`, for example, and activating `Request TDS, SDS or COA` may pass `product_grade=M-2377` to CONV-DOC.
- CONV-DOC then lets the buyer choose or edit `TDS`, `SDS`, `COA` or `Other`.
- Grade selection does not assert that any named document exists, is current, is available or will be delivered.
- No Grade-document availability matrix, file name, download link, disabled pseudo-action or inferred relationship may render.

## 7. CTA and relationship contract

| Relationship | Behavior |
|---|---|
| Primary CTA | `Request TDS, SDS or COA`; target `/request-documents/`; eligible only under the approved CONV-DOC route/readiness contract |
| Request context | Optional editable `product_grade`; optional editable `document_type` among TDS/SDS/COA/Other |
| Secondary CTA | `View Document Hub` → `/documents/` |
| Product pages | May provide Grade identity/request context; retain all Grade facts and technical specifications |
| DOC-REACH / DOC-COO | Related document paths only; not folded into the three-way comparison |
| Failure behavior | If a target is ineligible, remove action and Schema relationship atomically; Contact is not a fallback |

Breadcrumb: Home → Documents → TDS, SDS & COA.

## 8. Evidence and fail-closed controls

Claim authority remains `pages/documents/tds-sds-coa/01_research/DOC-TDS_GATE1_CLAIM_REGISTER_V0.1.csv`.

- Local TDS presence does not authorize public availability, currentness, filenames or downloads.
- No SDS or COA availability claim may render without approved first-party evidence.
- Multiple TDS versions must not be merged.
- Grade context is a request parameter only and never an availability statement.
- No fake files, instant-download claim, universal coverage, compliance guarantee, request approval or guaranteed delivery.
- Provisional URL is not a live URL approval; Gate 3–10, development, deployment, publication and indexing remain unauthorized.

## 9. Responsive, accessibility and visual rules

Future Gate 3–5 evidence must cover complete 1440, 768 and 390 logical views; Mobile Menu open; Grade selection; document-choice selection; route unavailable; long labels; no-image; keyboard focus; 200% zoom; and no horizontal overflow. Use text-first decision support, not fake PDF previews, certificate thumbnails, seals or download-library styling. Controls must be at least 44px and status meaning cannot rely on colour alone.

## 10. Future handoff boundary

Any future Gate 7 contract must preserve `site_scope=tio2-my`, no cross-scope fallback, editable request context, visible/Schema parity, stale-state fail-closed behavior and omission of null/unapproved claims. Implementation remains the responsibility of `D:\16Wordpress_nextjs` only after separate authorization.

## 11. Acceptance and review record

- Page identity, keyword and provisional URL remain exact.
- Direct Answer precedes detailed explanation.
- Grade-to-request context works conceptually without creating availability claims.
- CTA wording is contextual and CONV-DOC remains the form owner.
- All Claim Register holds remain intact.
- Buyer-visible content contains no internal Gate/status language.

| Gate | State |
|---|---|
| Gate 0 | `DRAFT_COMPLETE` |
| Gate 1 | `REVISED_SUBMISSION / PENDING_USER_APPROVAL / NOT_CLOSED` |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |

## 12. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial Gate 0–1 Brief | `HISTORICAL / SUPERSEDED_AS_REVIEW_CANDIDATE` |
| V0.2 | 2026-09-04 | Corrected buyer intent; restored Grade-to-request conversion; added contextual CTAs and Direct Answer/GEO rule | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
