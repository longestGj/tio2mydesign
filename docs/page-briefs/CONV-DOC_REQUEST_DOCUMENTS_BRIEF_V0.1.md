# Request Documents Page Brief V0.1

## 0. Document control and current gate

| Field | Value |
|---|---|
| Document name | Request Documents Page Brief |
| Page ID | `CONV-DOC` |
| Brief version | V0.1 |
| Created / last updated | 2026-08-30 / 2026-09-01 |
| Page owner | CONV-DOC page execution task |
| Project-control reviewer | Project control and quality review |
| User approval record | The 2026-08-30 instruction authorized the initial Gate 0/1 audit. The first 2026-09-01 instruction authorized work through Gate 4; the latest 2026-09-01 instruction explicitly authorizes Gate 5 execution. Neither instruction approves any Gate artifact, Gate 6/7, development, handoff or release. |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Mapping Status | `PLANNED_CONVERSION` |
| Verification Status | `NO_DIRECT_KEYWORD_TARGET` |
| Current execution scope | Gate 5 Desktop/390px complete visual, Mobile Menu Open and key interaction-state board |
| Current stop point | `GATE_5_SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW` |
| Change summary | Gate 5 visual assets and specification now realize the submitted Gate 2–4 contracts. Privacy remains an internal annotated slot; receiver, document inventory, indexing and release gates remain open. |

This submission is not an approval. User authorization permits Gate 5 execution and review submission. The current visuals remain review candidates because exact privacy wording and operational evidence are open; Gate 6/7, development handoff and implementation are not authorized.

### 0.1 Gate status ledger

| Gate | Deliverable | Status | Validation completed | Open issues | Approval source |
|---|---|---|---|---|---|
| Gate 0 | Task admission and Brief V0.1 | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / WORKING_INPUT_CONSUMED` | Registry, PRD, page-keyword master, scope, URL, type and priority checked | Indexing decision remains open | 2026-09-01 user continuation authorization; not Gate approval |
| Gate 1 | Research, evidence, keyword, buyer-question and relationship audit | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / WORKING_INPUT_CONSUMED` | COMP-01/02/03, fact gates, PRODUCT V0.3, upstream context and inventory absence checked | No approved document inventory; privacy and receiver remain open | 2026-09-01 user continuation authorization; not Gate approval |
| Gate 2 | Content architecture, SEO/GEO, Schema, CTA, minimum fields and links | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` | Page role, module order, copy, fields, prefill, validation, SEO/GEO/Schema and CTA hierarchy self-checked | Indexing recommendation, privacy, receiver and inventory remain open | User authorized working consumption through Gate 5; not Gate approval |
| Gate 3 | Desktop/Tablet/390px wireframe and states | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` | Responsive structure; default/prefill/empty/restricted/focus/error/failure/success/privacy states self-checked | Privacy is annotated only; receiver/service readiness not verified | User authorized working consumption through Gate 5; not Gate approval |
| Gate 4 | Visual direction | `SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED` | Global Chrome V0.5, production SVG, form-first hierarchy, responsive/state/accessibility and prohibited directions self-checked | User/project-control decision required; exact error token and privacy copy open | User explicitly designated Gate 4 review point |
| Gate 5 | Desktop/390px full visual, Mobile Menu Open and interaction states | `SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED` | Four PNG assets, hashes, overflow, H1, CURRENT=0, RFQ, ≥44px mobile target, long copy and state coverage checked | Privacy blocks Buyer Clean approval/release; receiver, inventory, indexing and route readiness remain open | 2026-09-01 user execution authorization; not Gate approval |
| Gate 6+ | Review, handoff, development, QA, release | `OUT_OF_SCOPE / NOT_AUTHORIZED` | No action taken | Permanently outside this task | None |

## 1. Gate 0 — page identity and admission

| Field | Recorded value |
|---|---|
| Page ID | `CONV-DOC` |
| Section | `CONVERSION` |
| Page name | Request Documents |
| URL | `/request-documents/` — registered route, not changed by this task |
| Page type | Utility conversion page |
| Playbook key | `CONVERSION` |
| Playbook version/status | `CONVERSION_PLAYBOOK_V0.1.md`; `USER_AUTHORIZED_WORKING_BASELINE / SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| Market | `GLOBAL` |
| Language | `EN` |
| Priority | `P0` |
| Planned domain | `https://tio2malaysia.com` |
| Site scope | `tio2-my` — future handoff isolation requirement only; no implementation here |
| Canonical | Candidate self-reference to `https://tio2malaysia.com/request-documents/`; `DECISION_REQUIRED` until indexing intent is approved |
| Indexing intent | `DECISION_REQUIRED`; this task must not infer INDEX or NOINDEX for a utility page |
| Header navigation | Must not be added as a first-level Header item |
| Parent / owner relationship | Documents owns informational document intent; CONV-DOC owns controlled request capture only |
| External development workspace | `D:\16Wordpress_nextjs` — explicitly not accessed or modified by this task |

### 1.1 Gate 0 admission result

| Check | Result | Evidence |
|---|---|---|
| Exists in 54-page registry | PASS | Registry section 4.8 |
| Page ID, name, URL and type agree | PASS | Registry and `11_page_keyword_master.csv` |
| Priority agrees | PASS — P0 | Registry and CSV |
| Primary keyword agrees | PASS — `NO_PRIMARY_KEYWORD` | Registry and CSV |
| Mapping and verification status preserved | PASS | `PLANNED_CONVERSION` / `NO_DIRECT_KEYWORD_TARGET` |
| Scope limited to one page | PASS | Current user instruction |
| Global Header order unchanged | PASS as a written contract | CONV-DOC is not added to Header; RFQ remains terminal item |
| Applicable shared Playbook available | PASS FOR AUTHORIZED WORKING CONSUMPTION | V0.1 exists; SHA-256 `DEFFD73A7CB5E2399E128CD5E35308E5536D6E2D242FBD678BE4709914733047`; it is submitted, not falsely described as project-control approved |
| Indexing/canonical decision approved | OPEN | No approved value found |
| Formal page planning artifacts permitted | YES THROUGH GATE 5 | Latest 2026-09-01 user authorization; Gate 6/7 and development remain locked |

Gate 0 remains submitted rather than approved. Its identity is internally consistent, and user authorization now permits working consumption through Gate 5 without approving the Gate outputs.

## 2. Authority and conflict register

### 2.1 Inputs read for this audit

| ID | Source | Page-specific use | Status |
|---|---|---|---|
| E-USER-001 | Current 2026-08-30 CONV-DOC instruction | Scope, document categories, controlled-request language, states, prefill and hard-stop boundaries | Current explicit authority for audit scope |
| E-GOV-001 | `AGENTS.md` | Root gates, evidence, conversion, SEO/GEO, visual and development boundaries | Current governance |
| E-STATUS-001 | `00_PROJECT_STATUS.md` | Dynamic progress and fact freezes | Read; Global Chrome reference is stale |
| E-INDEX-001 | `01_PROJECT_INDEX.md` | Current document navigation | Read; Global Chrome reference is stale |
| E-DIR-001 | `02_DIRECTORY_GUIDE.md` | Artifact placement and no-formal-page-artifact-before-Brief-approval rule | Current directory rule |
| E-REG-001 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page identity, mapping, verification and Playbook requirement | Current page registry |
| E-PRD-001 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Architecture, conversion path and evidence limits | Current approved PRD baseline |
| E-KW-001 | `research/keyword/11_page_keyword_master.csv` | Exact CONV-DOC keyword and cannibalization contract | Current implementation mapping |
| E-KW-002 | `research/keyword/01_keyword_master.csv`, `02_keyword_clusters.csv`, `03_keyword_architecture_map.csv`, `05_cannibalization_review.csv` | COMP-01/02/03 intent and evidence limits | Research support; PRD/CSV override obsolete architecture language |
| E-TEMPLATE-001 | `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md` | Mandatory page-contract fields and gate ledger | Current template V0.2 |
| E-VIS-001 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | Future visual direction only | Approved visual direction |
| E-PLAYBOOK-001 | `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` | Only shared Conversion minimum-data, prefill, privacy, validation, state, fail-closed, PRODUCT V0.3 and Global Chrome contract | `USER_AUTHORIZED_WORKING_BASELINE / SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`; exact hash verified |
| E-GHC-001 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Current-link semantics, buyer-visible CURRENT=0, fixed RFQ and frozen Global Chrome | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| E-GHC-002 | `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md` | Current surface/accessibility-state direction | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| E-GHC-003 | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | Production SVG paths, roles, sizes and prohibited uses | `APPROVED_PRODUCTION_SVG_BASELINE / ACTIVE` |
| E-HOME-001 | Home V0.5 and Home content architecture V0.2 | Approved Home path to Documents Hub / CONV-DOC without availability claim | Approved Home/Chrome baseline as recorded |
| E-PROD-001 | `docs/product-pages/03_Product_Page_Development_SOP_and_QA_V1.0.md` | Grade, source page and selected document type must be preserved and visible for confirmation | Existing product-page contract |
| E-PROD-V03-001 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | Sole current Product Grade–Application–Process relationship source; controls neutral CONV-DOC context acceptance | `APPROVED_RELATION_BASELINE / USER_APPROVED` |
| E-PROD-V03-002 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md` | Confirms 30/0/54, 8/5/1, M-2377 and M-996/M-2196 boundaries | `APPROVED_RELATION_BASELINE / USER_APPROVED` |
| E-PROD-V03-003 | `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.3.md` | Confirms current-valid attachment use and remaining comparison/typical-data limits | `APPROVED_EVIDENCE_BASELINE / USER_APPROVED` |
| E-PROD-V03-004 | `pages/products/02_analysis/PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.3.md` | Authorizes Request Documents to accept M-2377 document-request context without a public availability promise | `APPROVED_RELATION_DEPENDENCY_BASELINE` |
| E-UPSTREAM-001 | Current Product, Market and Application Briefs and Playbooks | Relationship and explicit-selection principles only | Do not elevate unapproved routes or gates |
| E-EVIDENCE-001 | Local project inventory and keyword raw/processed evidence | Checked for formal TDS/SDS/COA/COO/traceability availability evidence | No formal, approved availability inventory found |

### 2.2 Conflicts and precedence decisions

| Conflict ID | Conflict | Impact | Current treatment | Decision owner |
|---|---|---|---|---|
| CONV-DOC-C001 | Registry requires one shared Conversion Playbook | Gate 2–5 governance | Resolved for working consumption: use only `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` at the verified hash; do not create a second Playbook | User-authorized working baseline; project-control review still pending |
| CONV-DOC-C002 | PRD V0.4 says form fields/workflows belong to a later version, while current user instructions explicitly start CONV-DOC planning | Scope timing | The latest 2026-09-01 instruction authorizes Gate 5 execution and a review submission; it does not approve any Gate output or authorize Gate 6/7 | User |
| CONV-DOC-C003 | Older entry/spec files may cite prior Global Chrome versions | Global Chrome baseline | Use V0.5 as the current authority; leave unrelated project-entry maintenance outside this page task | Project control |
| CONV-DOC-C004 | Some older page Briefs/specs contain conditional RFQ/current-label behavior | Public Global Chrome | V0.5 controls: fixed RFQ, zero false current links on Conversion surfaces and buyer-visible CURRENT=0 | Approved V0.5 authority |
| CONV-DOC-C005 | Conversion requires a privacy notice and failure fallback, but no approved Privacy page and no verified alternative contact were found | Gate 5 visible states | Design must use inline privacy language without inventing a new Footer route; final copy/failure contact remain frozen pending approval and verification | User / project control / business owner |

## 3. Gate 1 — keyword, intent and cannibalization audit

| Field | Recorded value |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` |
| Secondary Keywords | `request TDS | request SDS | request COA | request COO` |
| Search Intent | `T` — controlled document-request action |
| Buyer Stage | Lead Capture after technical/procurement evaluation |
| Source Cluster | `COMP-01 | COMP-02 | COMP-03` |
| Page role | Capture qualified document requests by grade, market, company and document type |
| Excluded Keywords | `informational document primary terms` |
| Cannibalization boundary | Utility page captures requests; informational document pages own search intent |
| Search-metric status | Search volume, keyword difficulty, CPC and trend are unavailable for the relevant document terms; no metric may be invented |
| Indexing conclusion | Not inferable from `NO_PRIMARY_KEYWORD`; remains `DECISION_REQUIRED` |

### 3.1 Adjacent-page ownership

| Intent or claim | Owner | CONV-DOC boundary |
|---|---|---|
| What TDS, SDS and COA are; informational primary terms | `DOC-TDS` | May label the requested category and explain the review process only; must not become the information article |
| REACH coverage or registration explanation | `DOC-REACH` | No default REACH category or compliance promise is added by this task; a buyer may use Other until scope is approved |
| COO, origin and traceability explanation | `DOC-COO` / About for verified manufacturing-origin facts | May receive COO/Origin or Traceability requests; must not assert origin, shipment, batch or route facts |
| Product specifications, applications and performance | `GRADE-*`, `PRODUCT-*`, `APP-*` | Product is context, not a product claim; no grade recommendation is inferred |
| Market supplier/procurement content | `MARKET-*` | Market is applicability context only; no market or regulatory claim is generated |
| Quote / purchase action | `CONV-RFQ` | Global RFQ remains visible, but the form's primary action is document submission and may not be visually confused with RFQ |
| Sample request | `CONV-SAMPLE` | No sample field or sample-success implication |

### 3.2 SEO/GEO guardrails for later gates

- The page must not be optimized for `titanium dioxide tds`, `titanium dioxide reach registration` or `titanium dioxide country of origin certificate`.
- No evidence-free FAQ, HowTo, compliance, product, origin or availability statement may be created for GEO.
- An answer-ready process block may later explain only this stable sequence: submit context → human review → follow-up if needed → outcome communicated separately. It must state that receipt is not approval or delivery.
- Schema remains `DECISION_REQUIRED`. No FAQPage, HowTo, Product, Offer, certification, downloadable file or availability relationship is approved by Gate 1.
- Any later `WebPage` or breadcrumb relationship must mirror visible content and the approved URL/indexing decision.

## 4. Gate 1 — buyer and controlled-request research

### 4.1 Target buyer

| Field | Gate 1 finding |
|---|---|
| Primary roles | Procurement, technical, quality, regulatory/compliance and supplier-qualification personnel requesting evaluation documents |
| Markets | Global; destination market is needed only to assess applicability and follow-up |
| Stage | Technical evaluation / supplier qualification / pre-purchase document review |
| Required decision | Whether the buyer can submit enough context for a human review without being promised availability |
| Ideal next step | Submit one controlled request; receive an acknowledgement that the request was received and will be reviewed |
| Not the next step | Public download, automatic approval, instant file delivery, compliance confirmation, quote, sample or technical recommendation |

### 4.2 Required document categories and scope language

These category definitions describe request routing only. They are not evidence that a file exists, is current, is applicable, is approved for release or will be delivered.

| Category | Request-routing scope | Additional context that may be relevant | Prohibited implication |
|---|---|---|---|
| TDS | Grade-specific technical data request | Product/grade; buyer may be asked to clarify the intended grade | Current TDS exists, is approved, publicly downloadable or will be sent immediately |
| SDS | Safety-data request whose product, market, language or version applicability may require review | Product/grade and destination market | A requested SDS is current for every market/language or proves regulatory compliance |
| COA | Quality record request whose batch/order applicability and release status may require review | Product/grade; optional order/batch reference in the context field | A generic, current or shipment-specific COA is available before review |
| COO / Origin | Origin-document request whose shipment/order, destination and release conditions may require review | Product, destination market and optional order/shipment context | Malaysia origin, a specific COO, customs acceptance or shipment eligibility is proven by the form |
| Traceability | Request for batch or traceability information that may be sensitive or context-dependent | Product and optional batch/order context | Manufacturing route, batch history, origin or traceability evidence is available or approved |
| Other | A controlled free-label path for another document need | A short description is required when selected | The requested file category is supported merely because it can be entered |

REACH is deliberately not added as a default category in Gate 1: the registry/CSV assigns it to `DOC-REACH`, its evidence status is `FACT_EVIDENCE_REQUIRED`, and the current instruction names TDS, SDS, COA, COO/Origin, traceability and Other. Adding REACH later would require an explicit scope decision, not an inference from source cluster COMP-01.

### 4.3 Minimum-data candidate for Gate 2 review

This is a Gate 1 recommendation, not an approved form specification.

| Field | Candidate requirement | Why it is minimally necessary | Gate 1 boundary |
|---|---|---|---|
| Contact name | Required | Allows a human follow-up to be addressed | No title, phone or personal address required |
| Business email | Required | Provides one verified reply channel | Validation and privacy copy still require approval |
| Company / organization | Required | Supports controlled-release and business-context review | No company-size, website or registration number required |
| Destination market / country | Required, editable | Supports SDS/origin/applicability review | Does not create a regulatory or supply claim |
| Product / grade | Required with neutral `Not sure / Multiple grades` option | Document applicability commonly depends on grade; matches CSV role | Only registered neutral grade IDs; no recommendation or evidence status is exposed |
| Application / process context | Optional, visible, editable/removable prefill only | Preserves an explicit upstream selection when the relationship is `VERIFIED_FOR_PUBLIC_MAPPING` in Product V0.3 | Not buyer-required; not a suitability, ranking, performance or document-availability claim |
| Document type | Required, multi-select | Core routing input | TDS, SDS, COA, COO/Origin, Traceability, Other; selection is not availability |
| Request context | Optional; required only when Other is selected | Holds application/order/batch detail only when buyer has it | Long free-form limit and sensitive-data warning to be decided at Gate 2 |
| Privacy acknowledgement | Required | Makes data handling visible before submission | Exact controller, purpose, retention and consent wording remain frozen |
| Source Page ID | System context, not buyer-required | Preserves upstream attribution | Must not expose internal approval states or be used as evidence |

Fields intentionally excluded at this stage: phone, personal address, procurement quantity, packaging, price, destination port, shipping terms, sample requirement, upload, password, government ID, payment data, manually entered production route, and mandatory batch/order number. They are not necessary for the initial document-review request. An approved Product V0.3 process classification may arrive only as removable upstream context; it is not a required free-entry field.

### 4.4 Prefill contract candidate

The receiving page may accept only a neutral context value that the buyer explicitly selected or that is the unambiguous identity of the source page. Every visible prefill must be reviewable and editable before submission.

| Upstream family | Allowed candidate prefill | Empty/invalid behavior | Explicitly prohibited |
|---|---|---|---|
| Products / Grade | `product_id` from an explicit selected registered grade; `source_page_id`; an explicit Product V0.3 `application_id` / `process_id` may accompany it as neutral context | Leave Product blank or select `Not sure / Multiple grades`; discard any relation not currently verified in V0.3 | No ranking, preference, suitability, comparison, technical-performance or document-availability claim |
| Applications | `source_page_id`; `product_id=M-2377` and the matching `application_id` may be accepted only when the buyer explicitly selected M-2377 on one of the five Product V0.3 verified Application paths | Blank Product when no explicit product was selected; discard unsupported/no-public relation values | No inferred grade from a generic application page; no Specialty Materials or Rubber context; no recommendation language |
| Documents | `document_type` only when the buyer explicitly chose that category; `source_page_id` | No category selected when value is absent, unsupported or stale | No automatic availability, version, compliance, origin or download statement |
| Markets | `market_id` or destination market only from the explicit market page; `source_page_id` | Blank/choose market if absent; PT-BR or unapproved route state is not exposed | No regulatory, route, logistics, trade or serviceability claim |
| Other source | `source_page_id` only when registered and approved for attribution | Ignore unsupported value without breaking the form | No search-query, guessed product/market or internal status prefill |

Additional prefill rules:

1. A prefilled value is context, never evidence.
2. Source route readiness is independent from the receiver design; no upstream route is marked live by this Brief.
3. M-2377 may appear as its neutral registered grade name and may carry an explicit Product V0.3 verified context of Coatings, Plastics, Masterbatch, Printing Inks, Paper or Sulfate. These values must be visible and editable/removable; they do not imply suitability, preference, file availability or request approval.
4. Empty values must not produce placeholder claims, hidden required errors on first load or a disabled public page.
5. Restricted document types remain selectable for human review only; the UI must not say available, approved, ready, instant or downloadable.

### 4.5 Product V0.3 relationship consumption contract

Product V0.3 is now the only current relationship source for CONV-DOC product/application/process context. This incremental consumption does not change CONV-DOC's Gate 0/1 submission status.

| V0.3 item | Approved CONV-DOC behavior | Still prohibited |
|---|---|---|
| Matrix totals | Internal validation must preserve 84 unique relations: 30 `VERIFIED_FOR_PUBLIC_MAPPING`, 0 `CONFLICT_HOLD`, 54 `NO_PUBLIC_MAPPING` | Do not expose internal counts as marketing proof unless a later content decision requires them |
| Process totals | Neutral relation validation uses 8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation | No process superiority or performance implication |
| M-2377 product context | Accept an explicit neutral M-2377 document-request context | No document availability, public-download, release or approval promise |
| M-2377 Applications | Accept explicit Coatings, Plastics, Masterbatch, Printing Inks or Paper prefill together with M-2377 | No ranking, preferred-grade, suitability or performance copy |
| M-2377 Process | Accept explicit Sulfate prefill together with M-2377 | No sulfate superiority or comparative claim |
| M-2377 Specialty Materials | `DO_NOT_RENDER`; reject/discard it as an incoming public relation | Do not describe it as unsuitable or not applicable |
| Rubber | Evidence registry only; never a CONV-DOC taxonomy option or public prefill value | No category, page, URL, primary keyword, navigation item or Schema relation |
| M-996 / M-2196 | Their neutral individual product context may be accepted; a source-bound individual fact belongs to its owner page, not to this request form | No difference, ranking, superiority, equivalence, substitution, comparison or comparative selection rationale |
| `NO_PUBLIC_MAPPING` | Treat as no approved positive public relationship and do not render it | Never rewrite as not suitable, not applicable or a negative technical conclusion |

The current-valid Product V0.3 attachments establish the approved neutral relationship/evidence scope described by their audits. They do not establish that a TDS, SDS, COA, COO/Origin or traceability file may be publicly downloaded, automatically released, approved upon submission or delivered within any time period.

## 5. Evidence and claim register

| Claim ID | Candidate visible statement | Type | Source / date | Gate 1 status | Render decision |
|---|---|---|---|---|---|
| CL-001 | This page accepts document requests for review | PROCESS | Current user instruction, 2026-08-30 | Verified instruction boundary | `RENDER_AFTER_COPY_APPROVAL` |
| CL-002 | TDS, SDS, COA, COO/Origin, Traceability and Other are request-routing categories | PROCESS | Current user instruction, 2026-08-30 | Verified scope | `RENDER_AFTER_COPY_APPROVAL` |
| CL-003 | Submitting the form means the request was received; it does not mean a document was approved or delivered | PROCESS | Root governance and current instruction, 2026-08-30 | Mandatory | `RENDER_AFTER_COPY_APPROVAL` |
| CL-004 | Requests are subject to human review | PROCESS | Current user instruction, 2026-08-30 | Mandatory; no SLA or outcome promised | `RENDER_AFTER_COPY_APPROVAL` |
| CL-005 | A specific TDS/SDS/COA/COO/traceability file is available/current/applicable | DOCUMENT / REGULATORY / ORIGIN | No approved evidence inventory found | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| CL-006 | A requested file will be sent immediately or within a stated time | PROCESS / LOGISTICS | No approved SLA or workflow evidence found | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| CL-007 | A request has been approved | PROCESS | Cannot be true at initial submission | Prohibited success implication | `DO_NOT_RENDER` |
| CL-008 | Public download is available | DOCUMENT | No approved public-download inventory found | Prohibited by controlled-request rule | `DO_NOT_RENDER` |
| CL-009 | Malaysia origin, manufacturing, batch traceability or a specific COO is proven | ORIGIN / COMPANY | About/Documents facts remain evidence-gated | `FACT_EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| CL-010 | A product process, application, performance or grade equivalence is established | PRODUCT / TECHNICAL | Product gates remain independent | `TECHNICAL_VERIFICATION_REQUIRED` where applicable | `DO_NOT_RENDER` |
| CL-011 | Request data will be processed for a stated purpose and period by a stated controller | PRIVACY | No approved controller/retention/consent copy found | `DECISION_REQUIRED` | `DO_NOT_RENDER` until approved |
| CL-012 | A verified alternative contact is available after submission failure | CONTACT | Planned email requires pre-release verification; Contact remains `CONTACT_DETAILS_REQUIRED` | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` until verified |
| CL-013 | M-2377 may carry neutral Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate request context | PRODUCT RELATION | Product V0.3 matrix and approved audits, 2026-08-30 | `VERIFIED_FOR_PUBLIC_MAPPING` for neutral context only | `RENDER_AFTER_COPY_APPROVAL` |
| CL-014 | M-2377 Specialty Materials or any `NO_PUBLIC_MAPPING` relation means the grade is unsuitable/not applicable | PRODUCT / TECHNICAL | Product V0.3 explicitly forbids this inference | Prohibited negative conclusion | `DO_NOT_RENDER` |
| CL-015 | Rubber is a public Application/category/prefill option | PRODUCT TAXONOMY | Product V0.3 records Rubber as evidence only | Outside approved taxonomy | `DO_NOT_RENDER` |
| CL-016 | M-996 is better/worse/equivalent/substitutable relative to M-2196, or vice versa | PRODUCT / TECHNICAL / COMPARISON | Product V0.3 keeps `M996_VS_M2196_DIFFERENTIATION_FROZEN` open | `DO_NOT_RENDER` comparison hold | `DO_NOT_RENDER` |

### 5.1 Frozen fields and non-blocking work

| Frozen item | Reason | Required to unfreeze | Work that can continue after Gate 0/1 review |
|---|---|---|---|
| File availability, version, applicability and download | No approved inventory/evidence | Approved document inventory with product/market/version/release scope | Category labels, neutral form structure, restricted-review state |
| REACH category or claim | Not in current category instruction; `FACT_EVIDENCE_REQUIRED` | Explicit scope approval plus current evidence | Other category remains available without REACH promise |
| Origin/manufacturing/traceability facts | About/Documents evidence gates | Verified first-party evidence with scope/date | Neutral request label and human-review language |
| Product performance, preference and unapproved relationships | V0.3 permits neutral verified relation context but does not approve performance or recommendation claims | Approved source-bound owner-page evidence and later content approval | Product ID plus V0.3 verified neutral application/process prefill |
| M-2377 Specialty Materials and Rubber | Specialty is `NO_PUBLIC_MAPPING`; Rubber is evidence-only outside taxonomy | A future approved architecture/evidence change, not this page task | The five verified Applications and Sulfate context remain usable |
| M-996/M-2196 comparison | Individual evidence is approved, but comparison hold remains open | Controlled comparative evidence and explicit approval | Neutral individual product context remains usable |
| Privacy/controller/retention/consent copy | No approved legal/business text | Approved data-handling wording and owner | Layout space and state inventory, not final visible copy |
| Submission-failure contact | Contact details unverified | Verified route/address/channel | Failure-state layout may be planned conditionally, but final visible contact cannot be drawn |
| Indexing/canonical/robots | No decision in registry/PRD | Explicit approval | Page strategy research only |

## 6. Required state inventory and current coverage

Gate 3 specifies, Gate 4 directs and the Gate 5 review assets now visualize all of the following without changing Gate 1 evidence status. They remain review candidates rather than approved or release-ready interaction specifications:

- Desktop page structure with approved 84px Header and fixed Global RFQ;
- 390px page structure with 64px `Logo | RFQ | Menu`, ≥44px targets and no horizontal overflow;
- Mobile Menu Open with fixed terminal RFQ and no CONV-DOC first-level item;
- default form;
- valid explicit prefill;
- absent/empty prefill;
- unsupported/stale prefill recovery;
- restricted-file selection;
- keyboard and visible focus;
- field validation plus error-summary and field-error relationships;
- submission in progress;
- submission failure with a verified alternative contact only after evidence is supplied;
- success stating receipt only, not approval, availability or delivery;
- an internal privacy-copy annotation and visible human-review explanation; exact privacy wording remains blocked for Gate 5 approval and release;
- Global RFQ permanently visible in Desktop Header, Mobile Header, Mobile Menu, Desktop Footer and Mobile Footer;
- clear hierarchy between page-primary `Submit document request` and terminal global `Request a Quote`.

No visual state may show RFQ OFF, hidden, disabled, empty slot or Contact fallback. `RFQ_ROUTE_READY=false` remains an internal `RELEASE_BLOCKER` and does not change public Chrome.

## 7. Page review items after Gate 5 submission

| Review ID | Level | Finding | Required decision/action | Current status |
|---|---|---|---|---|
| CONV-DOC-R001 | SHARED BASELINE | The shared Conversion Playbook is required | Consume only V0.1 at verified hash; do not establish a second Playbook | `RESOLVED_FOR_WORKING_CONSUMPTION / NOT_PLAYBOOK_APPROVAL` |
| CONV-DOC-R002 | IMPORTANT / SEO DECISION | INDEX/NOINDEX, robots and final canonical behavior are not approved | Review Gate 2 recommendation `NOINDEX,FOLLOW` + conditional self-canonical; do not activate in this task | `OPEN / RECOMMENDATION_SUBMITTED` |
| CONV-DOC-R003 | BLOCKING FOR GATE 5 APPROVAL AND RELEASE | Privacy controller, purpose, retention, consent/acknowledgement and visible wording are not approved | Gate 5 uses an internal annotated slot only; supply/approve inline privacy text without inventing an unregistered Footer Privacy page | `OPEN` |
| CONV-DOC-R004 | BLOCKING FOR OPERATIONAL RELEASE | No verified receiver/manual alternative channel was found | Gate 3–5 use the channel-free failure pattern; verify any manual branch separately | `OPEN` |
| CONV-DOC-R005 | NON-BLOCKING FACT FREEZE | No approved document availability/version/applicability inventory was found | Keep all such claims `DO_NOT_RENDER`; neutral category and review-flow design may continue | `OPEN / FROZEN` |
| CONV-DOC-R006 | IMPORTANT | Exact form field and prefill contract requires review | Review Gate 2 minimum-data contract and its Gate 3–5 visual realization | `OPEN / GATE_2_5_SUBMITTED` |
| CONV-DOC-R007 | PROJECT MAINTENANCE | Unrelated entry files may cite older Global Chrome wording | Project control may synchronize them outside this page task; CONV-DOC uses V0.5 | `OPEN / OUTSIDE PAGE EDIT SCOPE` |
| CONV-DOC-R008 | RELEASE BLOCKER, NOT DESIGN BLOCKER | RFQ route readiness was not verified by this task | Keep Global RFQ visible; block release if `RFQ_ROUTE_READY=false` | `OPEN / NOT TESTED` |

No Gate is marked approved. The former missing-Playbook blocker is resolved only for authorized working consumption; the Playbook's own project-control review remains independent.

## 8. Gate 0–5 self-check and submission

- [x] Only CONV-DOC is handled.
- [x] Page ID, URL, type, market, language, priority and keyword state match registry/CSV.
- [x] `NO_PRIMARY_KEYWORD` is preserved; no commercial keyword is invented.
- [x] Informational document intent remains with DOC-* pages.
- [x] TDS, SDS, COA, COO/Origin, Traceability and Other are separated as request categories without availability claims.
- [x] Success is defined as request receipt only, not approval or delivery.
- [x] Product, market and document-type prefill is limited to explicit, editable context.
- [x] Applications does not infer a product recommendation; M-2377 plus one of its five V0.3 verified Applications is accepted only after explicit selection.
- [x] M-2377 Sulfate is accepted only as neutral, visible and editable/removable prefill context.
- [x] Specialty Materials remains `DO_NOT_RENDER`; Rubber creates no category, page, URL, keyword, navigation or prefill option.
- [x] `NO_PUBLIC_MAPPING` is not rewritten as not suitable or not applicable.
- [x] M-996/M-2196 individual context is allowed while all comparison-type conclusions remain frozen.
- [x] Product, route, regulatory, certification, origin, traceability and file evidence gates remain frozen.
- [x] Global Chrome directly inherits V0.5, production SVG, fixed RFQ, zero false current links and buyer-visible CURRENT=0.
- [x] No Header item, Footer route, Contact fallback or unregistered Privacy page was added.
- [x] Gate 2 content architecture, Gate 3 wireframe specification and Gate 4 visual direction are created under `pages/conversion/04_planning/`.
- [x] Gate 5 Desktop/390px complete visual, Mobile Menu Open and interaction-state board are created under `pages/conversion/04_planning/visual-designs/`.
- [x] Gate 5 assets cover default/prefill/empty/stale/restricted/focus/validation/error/Other/submitting/failure/success/privacy states.
- [x] Privacy remains an internal annotation; no Buyer Clean legal wording is invented.
- [x] Gate 6/7, development handoff, implementation, tests, deployment and release work were not created.
- [x] `D:\16Wordpress_nextjs` was not accessed.
- [x] Gate 0 and Gate 1 are submitted for review and are not self-approved.

### Gate 5 submission request

Project control/user review is requested for:

1. Gate 5 complete Desktop/390px visual candidates;
2. Mobile Menu Open and permanent Global RFQ treatment;
3. the interaction-state board covering prefill, restricted, validation, focus, Other, submitting, failure, success and privacy;
4. the `Controlled Review Workspace` direction and page-primary/global-RFQ hierarchy;
5. the pending `NOINDEX,FOLLOW` recommendation;
6. remaining privacy, receiver, inventory, indexing and release blockers.

Until that decision is recorded, the page remains `DESIGN_IN_REVIEW`; Gate 0–5 remain submitted rather than approved, and Gate 6/7 remain locked.

## 9. Gate 2–5 artifact manifest and hard stop

| Gate | Artifact | Status |
|---|---|---|
| Gate 2 | `pages/conversion/04_planning/CONV-DOC_CONTENT_ARCHITECTURE_V0.1.md` | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 3 | `pages/conversion/04_planning/wireframes/CONV-DOC_WIREFRAME_SPEC_V0.1.md` | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 4 | `pages/conversion/04_planning/visual-directions/CONV-DOC_VISUAL_DIRECTION_V0.1.md` | `SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED` |
| Gate 5 | `pages/conversion/04_planning/visual-designs/CONV-DOC_FULL_VISUAL_DESIGN_V0.1.md` and four manifest-listed PNG assets | `SUBMITTED_FOR_PROJECT_CONTROL_AND_USER_REVIEW / NOT_APPROVED` |

Current hard stop:

`CONV-DOC GATE 5 SUBMITTED — STOP FOR PROJECT CONTROL AND USER REVIEW`

Do not enter Gate 6/7, create development handoff specifications, access `D:\16Wordpress_nextjs`, modify implementation code/CMS/tests, deploy, change DNS/indexing or publish.

## 10. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial CONV-DOC Gate 0/1 Brief and compliance/evidence audit | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 / Product V0.3 relationship refresh | 2026-08-30 | Consumed approved Product V0.3 as the sole current relationship baseline; allowed neutral M-2377 document-request and five-Application/Sulfate prefill context; preserved Specialty, Rubber, comparison and document-availability freezes | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`; Gate status unchanged |
| V0.1 / Gate 2–4 submission | 2026-09-01 | Consumed the sole shared Conversion Playbook, Global Chrome V0.5 and Production SVG; added Gate 2 content/SEO/GEO/Schema, Gate 3 responsive/state wireframes and Gate 4 visual direction; stopped before Gate 5 | `DESIGN_IN_REVIEW / GATE_4_SUBMITTED / NOT_APPROVED` |
| V0.1 / Gate 5 submission | 2026-09-01 | Added complete Desktop/390px visual candidates, Mobile Menu Open, interaction-state board, asset hashes and validation; exact privacy copy remains an internal annotated blocker | `DESIGN_IN_REVIEW / GATE_5_SUBMITTED / NOT_APPROVED` |
