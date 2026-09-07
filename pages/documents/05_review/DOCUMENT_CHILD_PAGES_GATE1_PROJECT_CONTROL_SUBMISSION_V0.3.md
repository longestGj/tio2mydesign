# Documents Child Pages Gate 1 Project-Control Submission V0.3

## 1. Control

| Field | Value |
|---|---|
| Pages | `DOC-TDS`, `DOC-REACH`, `DOC-COO` |
| URLs | `/documents/tds-sds-coa/`, `/documents/reach/`, `/documents/certificate-of-origin/` |
| Version / date | V0.3 / 2026-09-04 |
| Submission status | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
| Project-Control status | `PROJECT_CONTROL_REVIEW_COMPLETE / USER_DECISION_PENDING` |
| Page lifecycle | `BRIEF_IN_REVIEW` for all three pages |
| Gate 1 | `PENDING_USER_APPROVAL / NOT_CLOSED` |
| Content intent | `CONTENT_INTENT_CONFIRMED=NO` for all three pages |
| Gate 2–10 | `NOT_AUTHORIZED` |
| Scope | Six targeted V0.3 corrections only |
| Explicit exclusions | No new research, Claim Register change, final page copy, visual design, development, deployment, publication, DNS or indexing |

V0.3 supersedes V0.2 only as the current user-decision submission. V0.2 Page Intent remains the base except for the six changes recorded here. All Evidence Inventory, source captures, Claim Registers, audits and fail-closed decisions remain unchanged.

## 2. Outcome submitted for decision

The V0.2 buyer flow remains:

**Direct Answer → Buyer Decision Support → Context Selection → Request Documents**

V0.3 makes only these six corrections:

1. DOC-TDS now uses `document_types[]` as a one-or-more multi-select and is typed as a `Technical-document decision page`.
2. DOC-REACH separates Global Audience from EU REACH Regulatory Scope, adds an EU/UK boundary, makes ECHA TiO2 evidence a Direct Answer Publication Blocker and marks `reach compliant titanium dioxide` as `QUERY_LANGUAGE_ONLY`.
3. Across all three pages, `source_page` is hidden/system/non-editable; buyer context alone is editable.
4. DOC-COO elevates the Malaysia-origin hold to `SITE-WIDE / CROSS-PAGE CLAIM HOLD`.
5. SEO Meta Directions now describe buyer/search value only; evidence restrictions remain in Claim Control and do not enter future meta copy.
6. DOC-COO uses the more natural H1 `Certificate of Origin for Titanium Dioxide: What Buyers Should Verify`.

No other V0.2 Page Intent, Gate 2 sequence, ownership boundary, CTA label or Evidence Hold is relaxed.

## 3. Revised Page Intent Cards

### 3.1 DOC-TDS — `/documents/tds-sds-coa/`

| Field | Current V0.3 proposed value |
|---|---|
| Page type | `Technical-document decision page` |
| Primary keyword | `titanium dioxide tds` |
| Audience | Procurement, formulation, technical, quality and EHS teams evaluating a titanium dioxide Grade, product or batch context. |
| Buyer problem | Identify the correct TDS, SDS or COA for the relevant titanium dioxide Grade, product or batch context and request it efficiently. |
| Core message | TDS, SDS and COA support different decisions: TDS is controlled primarily by Grade and revision; SDS by product, jurisdiction/language and revision; COA by lot, batch or order context. |
| Must include | Direct Answer; Quick Document Choice; Find Documents by Product Grade; comparison; buyer-input checklist; multi-document request process and receipt boundary. |
| Must exclude | Public inventory, availability matrix, inferred Grade-document availability, fake filenames, downloads, universal availability and approval/delivery guarantees. |
| H1 | `Titanium Dioxide TDS, SDS & COA: What to Request` |
| Primary CTA | `Request TDS, SDS or COA` |
| Secondary CTA | `View Document Hub` |
| Meta direction | Compare TDS, SDS and COA by technical, safety and batch context, then help buyers start a request using the relevant Grade, product or batch details. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |

#### DOC-TDS request behavior

- `prefill.document_types[]` is a buyer-visible multi-select with `one_or_more` cardinality; it is not a hard-coded single `document_type`.
- Semantic mapping follows the current CONV-DOC allowlist: TDS → `technical_product`; SDS → `safety`; COA → `quality_coa`; Other → `other`.
- `prefill.product_grade`, `prefill.document_types[]` and other supported buyer context remain editable/removable.
- `source_page=DOC-TDS` is hidden/system/non-editable and normalizes to internal `source_context.page_id`.
- Any selection is request context only and never proves document existence or availability.

#### Gate 2 direction — unchanged from V0.2

Hero → Direct Answer → Quick Document Choice → Find Documents by Product Grade → TDS / SDS / COA Comparison → TDS Scope → SDS Scope → COA Scope → What Buyers Should Provide → Request Process → FAQ → Related Paths → Final CTA.

### 3.2 DOC-REACH — `/documents/reach/`

| Field | Current V0.3 proposed value |
|---|---|
| Global audience | Procurement, regulatory, EHS and supplier-qualification teams in any market evaluating an EU-bound supply arrangement. |
| Regulatory scope | European Union REACH only |
| Primary keyword | `titanium dioxide reach registration` |
| Query-language term | `reach compliant titanium dioxide` = `QUERY_LANGUAGE_ONLY`; never a public company/product claim |
| Buyer problem | Determine what EU REACH registration information is relevant to the substance and what current evidence applies to the relevant supplier, legal entity and supply-chain arrangement. |
| Core message | Public substance-level information is not supplier-specific coverage; buyers must verify substance identity, legal actor, role, supply arrangement, EU use/market and evidence date. |
| Must include | Direct Answer placeholder; EU scope label; EU/UK boundary; substance versus supplier coverage; legal-actor roles; evidence panel; checklist; request path. |
| Must exclude | Company/importer coverage, Only Representative relationship, registration number, tonnage, UK REACH conclusion, legal advice and unqualified compliance claim. |
| H1 | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` |
| Primary CTA | `Request REACH Documentation` |
| Secondary CTA | `View Document Hub` |
| Meta direction | Help global procurement teams understand which EU REACH evidence to verify for titanium dioxide across substance, legal-entity and supply-chain scope. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |

#### EU REACH / UK boundary

- Global audience does not mean global regulatory scope; this page addresses EU REACH only.
- UK REACH is outside this page's claim/evidence scope.
- EU REACH evidence must not be represented as UK registration, compliance, coverage or equivalent evidence.
- No UK-specific visible claim may be created without separately approved scope and current official evidence.

#### Direct Answer Publication Blocker

The top question remains `Is titanium dioxide REACH registered?`, but its substance-specific Direct Answer is `PUBLICATION_BLOCKED`. `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN` until complete titanium-dioxide-specific official ECHA evidence is captured, approved and bound to Claim Control. HTTP 403 attempts, search summaries and secondary sources cannot close the blocker. Future Gate 2 architecture may reserve the block only after separate authorization; it cannot mark the answer publishable.

#### Request behavior

- `source_page=DOC-REACH` is hidden/system/non-editable and normalizes to internal `source_context.page_id`.
- Valid visible document types, product/application context and REACH request details remain buyer-editable.

#### Gate 2 direction — scope label/blocker added, sequence otherwise unchanged

Hero → Direct Answer (publication-blocked until ECHA evidence closes) → Substance-Level Information vs Supplier/Supply-Chain Coverage → Legal Actor and Supply-Chain Roles → EU Scope Factors → Buyer Verification Checklist → Dated Official Evidence / Source Panel → Request REACH Documentation → EU Market / Document Hub Paths → FAQ → Final CTA.

### 3.3 DOC-COO — `/documents/certificate-of-origin/`

| Field | Current V0.3 proposed value |
|---|---|
| Primary keyword | `titanium dioxide country of origin certificate` |
| Audience | Procurement, supplier-qualification, import/export and trade-documentation teams. |
| Buyer problem | Determine which type of origin evidence is relevant to the destination and transaction, what it proves, and what information is needed to request or verify it. |
| Core message | The appropriate proof of origin depends on destination, applicable rules and transaction context; a COO is not a generic product badge or customs guarantee. |
| Must include | Direct Answer; preferential proof/certificate; non-preferential COO; other proof/declaration where applicable; destination/scheme; rules; traceability distinction; request checklist. |
| Must exclude | Company/product/shipment Malaysia-origin, issued COO, universal form, customs/duty outcome, circumvention and generic traceability claims without evidence. |
| H1 | `Certificate of Origin for Titanium Dioxide: What Buyers Should Verify` |
| Primary CTA | `Request Origin Documentation` |
| Secondary CTA | `View Document Hub` |
| Meta direction | Help buyers identify the relevant origin documentation by destination, applicable rules of origin and transaction context. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |

#### Site-wide / cross-page Malaysia-origin hold

`SITE_WIDE_CROSS_PAGE_MALAYSIA_ORIGIN_CLAIM_HOLD=OPEN` replaces the former page-local caution. The hold applies to visible copy, SEO/social metadata, Schema and cross-page entity relationships. The strategic phrase `Malaysia-origin Titanium Dioxide` cannot itself prove company-, product-, Grade- or shipment-level origin. Approved first-party evidence must close the exact claimed scope before any corresponding visible or machine-readable relationship is released.

#### Request behavior

- `source_page=DOC-COO` is hidden/system/non-editable and normalizes to internal `source_context.page_id`.
- Origin-document type, destination, applicable scheme if known, order/shipment context, Grade and other supported buyer inputs remain buyer-editable.

#### Gate 2 direction — unchanged from V0.2

Hero → Direct Answer → What a Certificate / Proof of Origin Establishes → Preferential vs Non-Preferential Origin Evidence → Why Destination and Transaction Matter → Rules-of-Origin Context → Origin Evidence vs Product Traceability → What Buyers Should Provide → Request Origin Documentation → Official Source / Reviewed Date → Related Market / About / Document Hub Paths → FAQ → Final CTA.

## 4. Unified Request Context Contract

| Context | System behavior | Buyer behavior |
|---|---|---|
| `source_page` | Hidden system attribution; non-editable; normalized to `source_context.page_id` | Never shown or editable |
| `prefill.product_grade` | Allowlisted normalization | Visible, editable and removable |
| `prefill.document_types[]` | Allowlisted array; supports one or more | Visible multi-select, editable and removable |
| Application / destination / scheme / order / request detail | Supported visible context only | Editable by buyer |

Hidden source attribution cannot satisfy required fields, alter applicability or become visible copy, metadata, Schema or evidence.

## 5. What differs among the pages

| Dimension | DOC-TDS | DOC-REACH | DOC-COO |
|---|---|---|---|
| Page decision | Which one or more technical documents to request | Which EU REACH actor/supply evidence applies | Which origin-evidence type applies |
| Scope control | Grade/product/batch and multi-document context | Global audience, EU-only regulatory scope and UK exclusion | Destination/scheme/rules/transaction context |
| New V0.3 control | `document_types[]` one-or-more | ECHA Direct Answer Publication Blocker | Site-wide/cross-page Malaysia-origin hold |
| H1 status | Unchanged | Unchanged | Revised to natural word order |
| CTA | Request TDS, SDS or COA | Request REACH Documentation | Request Origin Documentation |

## 6. Evidence and claim disposition

V0.3 changes no evidence and no Claim Register row.

| Page | Register rows | `RENDER` | `RENDER_WITH_QUALIFIER` | `CONTROLLED_REQUEST_ONLY` | `DO_NOT_RENDER` |
|---|---:|---:|---:|---:|---:|
| DOC-TDS | 10 | 2 | 3 | 1 | 4 |
| DOC-REACH | 10 | 1 | 4 | 1 | 4 |
| DOC-COO | 10 | 0 | 5 | 1 | 4 |

The shared inventory remains 34 rows, including 29 existing sources and five evidence gaps. Local TDS presence remains internal evidence only. European Commission captures remain eligible only for qualified general EU REACH explanation. The ECHA TiO2 Direct Answer blocker remains open. Malaysian Customs remains the lead general COO source, while no company/product/shipment origin or traceability capability evidence is released.

## 7. Risks and controls

| Risk | V0.3 control |
|---|---|
| One prefilled document value becomes a hard-coded single choice | Use `document_types[]` with `one_or_more` and allow buyer edits. |
| Internal attribution becomes a buyer-modifiable claim/input | Keep `source_page` hidden/system/non-editable; normalize internally. |
| Global visitors infer global REACH coverage | Label EU REACH scope and explicitly exclude UK REACH conclusions. |
| Query wording becomes a compliance claim | Mark `reach compliant titanium dioxide` as `QUERY_LANGUAGE_ONLY`. |
| A weak ECHA hold allows an unsupported Direct Answer | Treat missing complete TiO2-specific ECHA evidence as a Direct Answer Publication Blocker. |
| Malaysia-origin positioning leaks across pages or Schema | Enforce `SITE-WIDE / CROSS-PAGE CLAIM HOLD` across visible and machine-readable surfaces. |
| Meta description becomes a governance disclaimer | Keep meta direction buyer/search-focused; enforce restrictions in Claim Control. |
| Request context implies availability, approval or delivery | Preserve all fail-closed inventory, availability and receipt boundaries. |

## 8. Current authority pointers

| Page | Revised Brief | Current Gate 1 Manifest | Manifest SHA-256 | Retained evidence |
|---|---|---|---|---|
| DOC-TDS | `docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.3.md` | `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE1_BASELINE_MANIFEST_V0.3.md` | `6CD45356C30A48A80491836F23BCF94E5E151429968BF2E5C0446247BD4658E3` | Audit/Claim Register/shared inventory V0.1 unchanged |
| DOC-REACH | `docs/page-briefs/DOC-REACH_TITANIUM_DIOXIDE_REACH_BRIEF_V0.3.md` | `pages/documents/reach/05_review/DOC-REACH_CURRENT_GATE1_BASELINE_MANIFEST_V0.3.md` | `75C7404505C3C4519ADF8BCC7B7DBE174779A9305AC89CC320332BB0D344D7BD` | Audit/Claim Register/official sources unchanged |
| DOC-COO | `docs/page-briefs/DOC-COO_CERTIFICATE_OF_ORIGIN_BRIEF_V0.3.md` | `pages/documents/certificate-of-origin/05_review/DOC-COO_CURRENT_GATE1_BASELINE_MANIFEST_V0.3.md` | `98F41A60745324A80982B70B2CCE01B3CD39F7FB7A638AC27A0DC50DFF6955F4` | Audit/Claim Register/official sources unchanged |

V0.1 and V0.2 submissions, Briefs and Manifests remain historical. No research artifact has been rewritten.

## 9. Project-Control recommendation and requested decision

**Recommendation:** `APPROVE V0.3 REVISED PAGE INTENT CARDS WITH ALL EVIDENCE HOLDS AND PUBLICATION BLOCKERS PRESERVED`.

| Page | Available decision | Current decision |
|---|---|---|
| DOC-TDS | Approve / Revise / Reject | `PENDING_USER_DECISION` |
| DOC-REACH | Approve / Revise / Reject | `PENDING_USER_DECISION` |
| DOC-COO | Approve / Revise / Reject | `PENDING_USER_DECISION` |

A later closure record may record an explicit user decision. This submission does not close Gate 1, confirm content intent or authorize Gate 2. No approval here would release an Evidence Hold or Publication Blocker, approve a provisional URL for live use, or authorize Gate 3–10, final copy, visual design, code, development, deployment, publication, DNS or indexing.

## 10. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.2 | 2026-09-04 | Full revised Gate 1 decision package | `HISTORICAL / SUPERSEDED_BY_V0.3` |
| V0.3 | 2026-09-04 | Targeted six-item revision: DOC-TDS multi-select and page type; DOC-REACH audience/scope/UK boundary/ECHA Direct Answer blocker/query-language tag; hidden system source attribution; site-wide Malaysia-origin hold; buyer-value-only meta directions; natural COO H1 | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
