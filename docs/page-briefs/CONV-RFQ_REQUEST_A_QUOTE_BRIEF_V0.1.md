# Request a Quote Page Brief V0.1

## 0. Document control and current gate

| Field | Value |
|---|---|
| Document name | Request a Quote Page Brief |
| Page ID | `CONV-RFQ` |
| Brief version | V0.1 |
| Created / last updated | 2026-08-30 / 2026-09-01 |
| Page owner | CONV-RFQ page execution task |
| Project-control reviewer | Project control and quality review |
| Formal page artifact root | `pages/conversion/request-a-quote/` |
| User approval record | The 2026-09-01 instruction authorized the Conversion owner to establish the shared Conversion Playbook and advance CONV-RFQ through Gate 4. The later 2026-09-01 message `授权进入Gate5` explicitly authorizes Gate 5 production. It does not approve the resulting Gate 2–5 artifacts, development, handoff, indexing activation or release. |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Mapping Status | `PLANNED_CONVERSION` |
| Verification Status | `QUALITATIVE_KEYWORD_EVIDENCE` |
| Current execution scope | Gate 2 content/SEO/GEO/Schema/form contract, Gate 3 Desktop/Tablet/390px wireframe, Gate 4 visual direction, and Gate 5 Desktop/390px complete visual plus interaction/restricted states |
| Current stop point | `GATE_5_V0.2_TARGETED_REVISION_SUBMITTED_FOR_USER_REVIEW / STOPPED` |
| Current task ceiling | Gate 5 complete visual; Gate 6/7 and development remain unauthorized |
| Change summary | Gate 0/1 evidence boundaries remain preserved; PRODUCT V0.3 remains current. Gate 5 V0.2 responds to the user's PC feedback by removing the page-body left/right layout and placing the intro above one centred form. Mobile, state boards and release blockers remain unchanged. |

The 2026-09-01 `授权进入Gate5` message authorizes Gate 5 production but does not approve Gate 4 or Gate 5 content. Gate 5 is now submitted for user review. Gate 6/7, development and release remain prohibited.

### 0.1 Gate status ledger

| Gate | Deliverable | Status | Validation completed | Open issues | Approval source |
|---|---|---|---|---|---|
| Gate 0 | Task admission and Brief V0.1 | `PROGRESSION_AUTHORIZED_BY_USER` | Registry, PRD, page-keyword master, scope, URL, type, priority and directory boundary checked | No identity change | 2026-09-01 user instruction to proceed through Gate 4 |
| Gate 1 | Research, evidence, keyword, buyer-question, minimum-data, prefill and relationship audit | `PROGRESSION_AUTHORIZED_BY_USER` | BUYER-01 evidence, uniqueness, ownership, PRODUCT V0.3 and evidence freezes checked | Privacy, receiver/manual channel and route readiness remain frozen | 2026-09-01 user instruction; no claim/fact freeze waived |
| Gate 2 | Content architecture, SEO/GEO/Schema, CTA, form fields, prefill and internal links | `COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED` | Content and SEO/GEO/Schema contracts created and cross-checked against Playbook V0.1 | `index, follow` recommendation and privacy inputs await review | 2026-09-01 progression authorization |
| Gate 3 | Desktop/Tablet/390px wireframe and complete state inventory | `COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED` | 1440/834/390 frames, long fixtures and S00–S18 state coverage created | Final pixels and approved privacy/channel copy absent by design | 2026-09-01 progression authorization |
| Gate 4 | Visual direction | `V0.2_TARGETED_REVISION_SUBMITTED / ARTIFACT_NOT_APPROVED` | V0.2 removes the rejected Desktop side-by-side body and specifies intro-above-form single-column geometry | Gate 4 remains subject to review; authorization and revision feedback are not artifact approval | 2026-09-01 user PC layout feedback |
| Gate 5 | Complete visual and interaction/restricted states | `V0.2_TARGETED_REVISION_SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED / RELEASE_BLOCKED` | Revised Desktop 1440 × 4517 single-column visual plus inherited exact 390px full visual, state boards and Mobile Menu | Privacy, receiver/manual channel, route/form readiness and index/canonical activation remain blocked | 2026-09-01 user PC layout feedback |
| Gate 6+ | Review, handoff, development, QA and release | `OUT_OF_SCOPE / NOT_AUTHORIZED` | No action taken | Permanently outside this task | None |

## 1. Gate 0 — page identity and admission

| Field | Recorded value |
|---|---|
| Page ID | `CONV-RFQ` |
| Section | `CONVERSION` |
| Page name | Request a Quote |
| URL | `/request-a-quote/` — registered stable URL; not changed by this task |
| Page type | RFQ conversion page |
| Playbook key | `CONVERSION` |
| Playbook status | `CONVERSION_PLAYBOOK_V0.1 = USER_AUTHORIZED_WORKING_BASELINE / SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| Market | `GLOBAL` |
| Language | `EN` |
| Priority | `P0` |
| Planned domain | `https://tio2malaysia.com` |
| Site scope | `tio2-my` — future handoff isolation requirement only; no implementation here |
| Canonical | `DECISION_REQUIRED`; if indexing is later approved, candidate self-reference is `https://tio2malaysia.com/request-a-quote/` |
| Indexing intent | `DECISION_REQUIRED`; the registered primary keyword does not by itself approve INDEX |
| Header navigation | Existing terminal `Request a Quote` item remains; no item is added, removed or renamed |
| Current-page treatment | Global Chrome V0.5 maps Conversion routes to zero current links per navigation surface unless later approved; buyer-visible `CURRENT` count is 0; fixed terminal RFQ remains unchanged |
| External development workspace | `D:\16Wordpress_nextjs` — explicitly not accessed or modified by this task |

### 1.1 Gate 0 admission result

| Check | Result | Evidence |
|---|---|---|
| Exists in 54-page registry | PASS | Registry section 4.8 |
| Page ID, name, URL and type agree | PASS | Registry and `11_page_keyword_master.csv` |
| Priority agrees | PASS — P0 | Registry and CSV |
| Primary keyword agrees | PASS — `titanium dioxide quote supplier` | Registry, PRD V0.4 and CSV |
| Mapping and verification status preserved | PASS | `PLANNED_CONVERSION` / `QUALITATIVE_KEYWORD_EVIDENCE` |
| Page ID uniqueness | PASS — 54 rows, zero duplicates | Programmatic CSV audit, 2026-08-30 |
| URL uniqueness | PASS — zero duplicates | Programmatic CSV audit, 2026-08-30 |
| Non-empty SEO primary-keyword uniqueness | PASS — zero duplicates | Programmatic CSV audit, 2026-08-30 |
| Scope limited to one page | PASS | Current user instruction |
| Global Header order unchanged | PASS as written contract | Fixed eight-item order retained |
| Applicable shared Playbook available | PASS FOR AUTHORIZED WORKING CONSUMPTION | `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md`; project-control review remains pending |
| Indexing/canonical decision approved | PENDING USER REVIEW | Gate 2 recommends `index, follow` + self-canonical only after all route/form/privacy/receiver gates close |
| RFQ route and form verified ready | NOT TESTED / RELEASE BLOCKER UNTIL VERIFIED | This planning task is prohibited from development/route testing |
| Formal page artifact directory permitted | NOT YET | Brief is in review; `pages/conversion/` remains empty |

The page identity remains internally consistent. The 2026-09-01 user instruction authorizes progression through Gate 4 and creation of the shared Playbook. This does not convert the Gate 2–4 artifacts into approved or handoff-ready specifications.

## 2. Authority, inputs and conflicts

### 2.1 Inputs read for this audit

| ID | Source | Page-specific use | Status |
|---|---|---|---|
| E-USER-001 | Current 2026-08-30 CONV-RFQ instruction | One-page scope, Gate sequence, required prefill/state coverage, minimum-data principle, product freezes and fixed Global RFQ behavior | Current explicit authority for audit scope |
| E-GOV-001 | `AGENTS.md` | Root gates, evidence, conversion, SEO/GEO, visual, lifecycle and development boundaries | Current governance |
| E-STATUS-001 | `00_PROJECT_STATUS.md` | Dynamic progress and fact freezes | Read; Conversion remains pending and Global Chrome reference is stale |
| E-INDEX-001 | `01_PROJECT_INDEX.md` | Current document navigation | Read; Global Chrome reference is stale |
| E-DIR-001 | `02_DIRECTORY_GUIDE.md` | Artifact placement and no-formal-page-artifact-before-Brief-approval rule | Current directory rule |
| E-REG-001 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page identity, mapping, verification and Playbook requirement | Current page registry |
| E-PRD-001 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Architecture, RFQ path, minimum inquiry context and evidence limits | Current approved PRD baseline |
| E-KW-001 | `research/keyword/11_page_keyword_master.csv` | Exact CONV-RFQ SEO, role and cannibalization contract | Current implementation mapping |
| E-KW-002 | `research/keyword/01_keyword_master.csv`, `02_keyword_clusters.csv`, `03_keyword_architecture_map.csv`, `07_serp_evidence.csv`, `08_research_summary.md`, `09_qa_report.md` | BUYER-01 intent, limitations and historical research mapping | Research support; later PRD/implementation mapping overrides obsolete architecture language |
| E-KW-RAW-001 | `research/keyword/raw/serp/2026-08-29/REVISION/EN/titanium_dioxide_quote_supplier/` | Complete locally saved raw SERP response and finalized manifest | `COMPLETE / ANALYSIS_ELIGIBLE`; hashes independently rechecked |
| E-TEMPLATE-001 | `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md` | Mandatory page-contract fields and gate ledger | Current template V0.2 |
| E-VIS-001 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | Future visual direction only | Approved visual direction |
| E-GHC-001 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Formal current-state authority: fixed RFQ, Conversion current count 0, visible `CURRENT` count 0, Desktop 84px / Mobile 64px | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| E-GHC-002 | `docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md` | Global Chrome production Logo asset keys and usage | `APPROVED_GLOBAL_LOGO_ASSET_BINDING` |
| E-GHC-003 | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | Exact production SVG paths, sizes and SHA-256 values | `APPROVED_PRODUCTION_SVG_BASELINE / ACTIVE` |
| E-CONV-PL-001 | `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` | Shared Conversion minimum data, prefill, privacy, states, fail-closed, non-approval and Global Chrome rules | `USER_AUTHORIZED_WORKING_BASELINE / SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| E-PROD-REL-001 | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`, `PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`, `PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.3.md` and `pages/products/02_analysis/PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.3.md` | Only current Grade–Application, Grade–Process and Grade–Grade comparison relationship source | `APPROVED_RELATION_BASELINE / USER_APPROVED`; 30 verified / 0 conflict / 54 no-public; Process 8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation |
| E-HOME-RFQ-001 | `pages/home/02_analysis/04_rfq_conversion_analysis.md` and PRD V0.4 section 10 | Earlier B2B RFQ field research and minimum inquiry context | Research input; not an approved final form contract |
| E-UPSTREAM-001 | Current Home, Product, Grade, Application, Market, Document and Resource page contracts | Source-context, owner and explicit-selection principles | Use status-aware inputs only; do not elevate unapproved routes or facts |
| E-SIBLING-001 | CONV-DOC and CONV-SAMPLE Gate 0/1 Brief drafts | Avoid role overlap among quote, sample and document workflows | Draft peer input only; not an approved Conversion Playbook |

### 2.2 Conflicts and precedence decisions

| Conflict ID | Conflict | Impact | Current treatment | Decision owner |
|---|---|---|---|---|
| CONV-RFQ-C001 | Registry requires a Conversion Playbook | Gate 2–5 governance | Resolved for current working progression: the user appointed the Conversion owner and authorized creation of `CONVERSION_PLAYBOOK_V0.1.md`; project-control review remains pending | User / project control |
| CONV-RFQ-C002 | PRD V0.4 leaves RFQ form fields/workflows to a later version, while the current user instruction starts this specific page | Scope timing | Current user instruction authorizes this Gate 0/1 audit and future target through Gate 5 after explicit review; no field or design is self-approved | User |
| CONV-RFQ-C003 | Original keyword-research architecture says not to create a standalone quote page, while PRD V0.4, the 54-page registry, implementation CSV and current user instruction explicitly register CONV-RFQ | Page existence and keyword ownership | Apply authority order: current user + PRD V0.4 + implementation master control current execution; retain original research wording as historical evidence, not current architecture | User / approved PRD baseline |
| CONV-RFQ-C004 | Direct SERP evidence is supplier/distributor/product-led rather than dominated by standalone quote-form pages | SEO/content risk | Do not change the locked keyword or URL; Gate 2 must preserve supplier context and quotation action without turning this page into a Product, Home or Market landing page. Record metrics as Unavailable | Project control / user if architecture changes are proposed |
| CONV-RFQ-C005 | Earlier Brief language referenced Global Chrome V0.2 and a visible current-page treatment | Shared Chrome authority | Global Chrome V0.5 supersedes it: Conversion route current count 0 and buyer-visible `CURRENT` count 0; all fixed-RFQ and geometry contracts remain | Approved V0.5 authority |
| CONV-RFQ-C006 | Older page specifications contain conditional `RFQ_AVAILABLE` behavior | Public Global Chrome | V0.5 chain keeps RFQ always visible across Desktop Header, Mobile Header, Mobile Menu and Footer; route/form failure is a release blocker | Approved V0.5 authority |
| CONV-RFQ-C007 | The form requires privacy explanation and a submission-failure alternative, but no approved privacy wording or verified manual contact channel was found | Gate 5 visible states | Reserve inline privacy and failure-state space; final copy/contact remain frozen; do not add an unregistered Privacy route or use Contact as RFQ fallback | User / project control / business owner |
| CONV-RFQ-C008 | PRODUCT V0.3 supersedes V0.2.1 as the only current relationship source and resolves the former M-2377 Application/Process holds | Product/application/process prefill | Permit only the newly approved neutral M-2377 relationships; keep all form, Gate, Global Chrome, comparison and no-public boundaries unchanged | User-approved PRODUCT V0.3 baseline |

## 3. Gate 1 — keyword, intent and evidence audit

### 3.1 Current implementation contract

| Field | Recorded value |
|---|---|
| Primary Keyword | `titanium dioxide quote supplier` |
| Secondary Keywords | `titanium dioxide quotation | buy titanium dioxide bulk | titanium dioxide wholesaler | titanium dioxide distributor | titanium dioxide sourcing supplier` |
| Search Intent | `T` — quotation and purchase action |
| Buyer Stage | `RFQ / Purchase` |
| Source Cluster | `BUYER-01` |
| Page role | Capture destination, application, grade/specification, quantity, packaging, document and sample requirements |
| Excluded Keywords | `informational product and application primary terms` |
| Cannibalization boundary | RFQ page owns quotation and purchase-action intent; commercial landing pages link here and retain supplier/product intent |
| Mapping Status | `PLANNED_CONVERSION` |
| Verification Status | `QUALITATIVE_KEYWORD_EVIDENCE` |
| Search-metric status | Search Volume, KD, CPC and trend are `Unavailable`; no numeric value may be inferred |
| Indexing conclusion | Not approved by the keyword mapping; remains `DECISION_REQUIRED` |

### 3.2 Locally saved raw SERP evidence

| Item | Result |
|---|---|
| Source ID | `SERP-REV-BUY-QUOTE-20260829` |
| Query | `titanium dioxide quote supplier` |
| Market / language | GLOBAL / EN |
| Capture date | 2026-08-29 |
| Completeness | `COMPLETE` |
| Analysis eligibility | `YES` |
| Captured top results used in final evidence | 10 |
| Dominant observed result type | Supplier, distributor and product pages with quote actions |
| Permitted conclusion | Transactional/commercial intent is qualitatively supported |
| Prohibited conclusion | Search demand, conversion rate, keyword difficulty, CPC, product equivalence or TiO2 Malaysia capability is not proven |
| `raw_search_response.json` SHA-256 | `599AE1AC9FABBA5CEE6345E18E935AE2B1E9AAA1DBD6A73C9D352597D29E780B` — rechecked 2026-08-30 |
| `raw_search_response.json.b64` SHA-256 | `0C4A2FA50A1A0B720DBED14981CD1AEA31FBFEFD33D68E2D2A05DE7E823D2413` — rechecked 2026-08-30 |

Observed competitor page fields and claims are research inputs only. They do not authorize TiO2 Malaysia to publish an MOQ, price, stock, SLA, delivery, sample, document, Incoterm, logistics or regulatory claim.

### 3.3 Adjacent-page ownership

| Intent or claim | Owner | CONV-RFQ boundary |
|---|---|---|
| Broad Malaysia supplier intent | `HOME-001` | RFQ may identify the quotation workflow but must not replace Home's broad supplier proposition |
| Destination-country supplier intent | `MARKET-*` | Destination is request context only; no market availability, regulation, logistics or trade claim is generated |
| Generic product, rutile, process and grade-selection intent | `PRODUCT-*` / `GRADE-*` | Product/grade is request context; RFQ does not become a product directory, selector or technical detail page |
| Generic application intent | `APP-*` | Application is request context; RFQ does not publish application education or grade recommendations |
| Informational document/compliance intent | `DOC-*` | Document needs may accompany a quote; standalone controlled document requests remain with CONV-DOC |
| Sample-action intent | `CONV-SAMPLE` | RFQ may collect whether evaluation support is needed; it must not say a sample request is approved, available or dispatched |
| Research, trade and alternative/equivalence intent | `RES-*` | Resource context may be retained; RFQ must not infer grade equivalence, substitution, trade outcome or technical recommendation |
| Company, origin and traceability proof | `ABOUT-001` / `DOC-COO` | RFQ does not create manufacturing, origin, traceability or certification claims |
| General contact | `CONTACT-001` | Contact is not the RFQ fallback and must not replace the page's primary form |

### 3.4 SEO and GEO guardrails for later gates

- The locked primary keyword and registered URL must not be changed inside this page task.
- H1, Title and Meta must express one quotation/purchase-action task and must not target Home, Market, Product, Grade, Application, Document, Sample or Resource primary terms.
- The word `supplier` may support the registered primary keyword, but it must not be expanded into unverified manufacturing, inventory, distribution, market coverage or service claims.
- No Product, Offer, price, availability, aggregate rating, certification, FAQ, HowTo or shipping Schema fact is approved by Gate 1.
- Candidate machine-readable direction is limited to `WebPage` and `BreadcrumbList`, subject to indexing and visible-copy approval.
- Answer-ready process content may later explain only: provide requirement context → submit → human review → follow-up if needed → outcome communicated separately.
- Receipt is not a quotation, price, inventory, lead-time, sample, document or order approval.
- Time-sensitive price, supply, logistics, regulation or document status must not be generated for GEO.

## 4. Gate 1 — buyer and task research

### 4.1 Target buyer

| Field | Gate 1 finding |
|---|---|
| Primary roles | Industrial TiO2 procurement, technical procurement, sourcing and supplier-qualification personnel |
| Secondary roles | Distributor/importer procurement coordinators acting for a real B2B requirement |
| Markets | Global; with explicit destination context for EU, UK, India, Brazil or another buyer-entered market |
| Stage | RFQ / Purchase after product, application, market, document or research evaluation |
| Required decision | Whether the buyer can provide enough minimum context for a human quotation review without being forced to guess a grade or being promised a commercial outcome |
| Ideal next step | Submit one complete but minimal RFQ for human review and receive an acknowledgement of receipt |
| Not the next step | Instant price, public purchase, stock confirmation, delivery promise, sample approval, document approval or order acceptance |

### 4.2 Buyer questions that later content must answer

| Question ID | Buyer question | Required decision | Gate 1 answer boundary |
|---|---|---|---|
| Q01 | What information is needed to request a titanium dioxide quotation? | Whether the buyer has enough context to submit | Explain the approved minimum fields only; no price or SLA |
| Q02 | Can I continue if I do not know the exact grade? | Whether unknown grade blocks the request | Yes, when application and non-confidential target/current requirements are supplied for human review |
| Q03 | Will my product, application, market or document context be carried into the form? | Whether earlier work is preserved | Only explicit, visible and editable context is accepted; no hidden recommendation |
| Q04 | What happens after I submit? | Whether submission creates a commercial commitment | Receipt → human review → possible follow-up → separate outcome; no approval at submission |
| Q05 | Does submission confirm price, stock, MOQ, lead time, shipment, sample, documents or order acceptance? | Prevent incorrect reliance | No; all remain separately reviewed and unconfirmed |
| Q06 | What happens if the form fails or the route/form is unavailable? | Data recovery and alternative path | Preserve entered data where possible, allow retry and show a manual channel only after verification; release remains blocked |
| Q07 | How is my business information used? | Whether the buyer can submit responsibly | Final inline privacy wording requires approved controller, purpose, retention and contact information |

## 5. Gate 1 — upstream prefill contract candidate

This section is a review candidate, not an approved query-string, CMS or implementation contract. Prefill is context, never evidence. Every visible value must be reviewable and editable before submission.

### 5.1 Allowed conceptual context

| Context | Candidate values | Source rule | Invalid/empty behavior |
|---|---|---|---|
| `source_page_id` | One registered Page ID | May be recorded for attribution when the source is known | Ignore unsupported values without breaking the form; never expose internal status |
| `grade_id` | One or more of the 14 registered neutral grade IDs | Only from a user-selected grade or the unambiguous identity of a Grade page | Clear to `Unknown / needs review`; do not show unavailable or unsuitable |
| `application_id` | Coatings, Plastics, Masterbatch, Printing Inks, Paper, Specialty Materials, Other / Not sure | Only from an explicit user selection or unambiguous approved Application source identity | Leave editable and unselected/Not sure; never infer a grade |
| `process_context` | Chloride, Sulfate or Vapor-phase oxidation as optional neutral context | Only from an explicit buyer selection or a V0.3-approved upstream Grade/Process relationship carried by the source action | Clear unsupported values; never turn process classification into application fit, ranking or a new required form field |
| `market_id` / destination | Explicit destination country or approved market identity | Market page identity or buyer selection | Leave blank for buyer input; no serviceability or regulation inference |
| `document_needs[]` | TDS, SDS, COA, COO/Origin, Traceability, Other | Only categories explicitly selected by the buyer or unambiguous Document source identity | Unsupported values move to no selection or editable Other; no availability statement |
| `research_context` | Visible, non-technical source topic label | Resource source attribution or explicit buyer-selected context | Keep optional; never map competitor/alternative language to a TiO2 Malaysia grade |
| `sample_interest` | Yes / No / Not sure | Only buyer selection | Default Not sure/blank; does not start or approve CONV-SAMPLE workflow |

### 5.2 Upstream-family rules

| Upstream family | Allowed candidate prefill | Explicitly prohibited |
|---|---|---|
| Home / Global Chrome | `source_page_id` only | No auto-selected product, market, application, file or claim |
| Products Hub | Source page; application or grade only when the buyer explicitly selected it | No selector result may be promoted to Best, Recommended, equivalent or guaranteed fit |
| Grade page | Exact registered grade and source page; Application/Process context only when explicitly carried by a V0.3-approved source action | No performance, availability, ranking or suitability inference; no unapproved relationship synthesis |
| Applications | Application and source page; grade only when the buyer explicitly selected a registered grade under a currently approved neutral relationship | No application-to-grade recommendation, ranking or suitability guarantee; M-2377 may pair only with its five V0.3-approved Application groups |
| Markets | Destination market/country and source page | No stock, route, logistics, trade, registration, regulation or serviceability claim |
| Documents | Explicit document needs and source page | No automatic availability, version, applicability, compliance, origin proof or download statement |
| Resources | Source page and optional visible research topic; other fields only from explicit buyer selections | No grade equivalence, alternative, replacement, ranking, process superiority or trade conclusion |
| Request Documents | Source page and quote-relevant document needs only when the buyer intentionally moves to RFQ | No assumption that a document request became a quote or that a file is approved |
| Request Sample | Source page and buyer-confirmed grade/application/market context only when the buyer intentionally moves to RFQ | No sample approval, availability, quantity, freight or dispatch conclusion |

### 5.3 Universal prefill rules

1. Prefilled values must be visible, editable and removable.
2. Hidden source metadata must not carry the only meaningful context.
3. Unknown grade is a valid path, not a validation failure.
4. Invalid, stale or unsupported values must fail safely to blank or `Unknown / needs review` without page failure.
5. A value may not expose `CONFLICT_HOLD`, `NO_PUBLIC_MAPPING`, `DO_NOT_RENDER`, route flags, release blockers or internal Page IDs to Buyer Clean users.
6. A prefill value does not prove technical fit, market serviceability, document availability, sample eligibility, price, inventory, MOQ, lead time or logistics.
7. Route readiness of the source is independent from this receiving-page design; this Brief does not mark any upstream route live.
8. M-2377 may carry neutral Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate context under PRODUCT V0.3. Specialty Materials remains hidden for M-2377.
9. Rubber may be retained only as buyer-entered free text under `Other` when the buyer explicitly supplies it. It is not a structured Application value, taxonomy group, page, URL, keyword or navigation item.

## 6. Historical Gate 1 minimum-data candidate — superseded by Gate 2 contract

This is a minimum initial human-review request. It is not an approved form specification.

| Field | Candidate requirement | Why minimally necessary | Prefill source | Gate 1 boundary |
|---|---|---|---|---|
| Contact name | Required | Addresses human follow-up | None or trusted browser/account assistance | No title or personal address required |
| Company / organization | Required | Establishes B2B context | None or trusted account context | No company size, registration number or website required |
| Business email | Required | Provides one reply channel | None or trusted account context | Must validate format; inbox/handling process still requires operational verification |
| Destination country / market | Required, editable | Establishes quotation and applicability context | Market page | Does not imply serviceability, regulation or shipping support |
| Destination port / city | Optional | May reduce later clarification when known | Market context only if explicitly entered | No route or freight promise |
| Product / grade | Required choice with `Unknown / need help` and `Multiple grades` paths | Identifies the subject without forcing a guess | Products / Grade / explicit upstream selection | Only neutral registered grade names; unknown is allowed |
| Application | Required choice with `Other / Not sure` | Supports human technical/commercial review | Application page / explicit selection | Does not generate a recommendation |
| Current grade or target non-confidential requirement | Conditional: required when Product/grade is Unknown; optional otherwise | Gives human reviewers usable context when no model is known | Grade/Product context or buyer entry | Do not request a full confidential formulation |
| Estimated purchase quantity | Required estimate | A quotation cannot be meaningfully reviewed without scale context | Buyer entry | Collection is not an MOQ, availability or price promise |
| Quantity unit | Required with estimated quantity | Makes quantity interpretable | Buyer entry | Approved units and validation belong to Gate 2 |
| Packaging preference | Optional with `No preference / Not sure` | Preserves quote context without forcing an unsupported option | Product/Market context only if explicit | No pack size, availability or logistics promise |
| Document needs | Optional multi-select | Lets reviewers understand quote-support requirements | Documents / explicit selection | Selection is not file availability or approval |
| Sample interest | Optional: Yes / No / Not sure | Captures evaluation context requested by PRD/user | Explicit buyer selection | Does not submit or approve a sample request |
| Additional non-confidential notes | Optional | Covers target specification or commercial context not represented above | Buyer entry / explicit Resource context | Length and sensitive-data warning belong to Gate 2 |
| Inline privacy/review acknowledgement | Required | Makes data use and human-review status visible | Never prefilled | Exact legal/business wording remains frozen |
| Source context | System metadata, not buyer-required | Preserves attribution and explicit selections | Registered upstream source | Must not expose internal workflow states |

Fields intentionally excluded from the initial RFQ: phone, personal address, full delivery address, government ID, payment/card data, company registration number, mandatory website, mandatory purchase frequency, upload, confidential formulation, current supplier, exact desired price, marketing consent, and mandatory Incoterm. If later operational review proves one is essential, that is a Gate 2 scope decision and must preserve minimum collection.

## 7. Validation and state inventory for later Gates

The following behavior is required by the current instruction and root Conversion contract. It is recorded for completeness but is not yet designed.

| State ID | State | Required behavior | Prohibited behavior |
|---|---|---|---|
| S00 | Default / unprefilled | Show the complete usable form with neutral defaults and clear required markers | No preselected recommendation or hidden validation error |
| S01 | Valid prefill | Show explicit source context and editable values | No locked values or invisible recommendation |
| S02 | Unknown grade | Accept the request when application, quantity and target/current requirement are sufficient | Do not force a buyer to guess or mark the buyer/product unsuitable |
| S03 | Multiple grades | Allow neutral multi-grade context without comparison | No ranking, difference, equivalent or substitute language |
| S04 | Invalid/stale prefill | Safely clear or downgrade to unknown while keeping the form usable | No route error, internal token or negative applicability statement |
| S05 | Insufficient information | Identify only the missing/invalid fields and preserve valid input | No blank reset, generic rejection or false qualification claim |
| S06 | Keyboard/focus | Visible focus, logical order, labels and instructions associated with controls | No color-only focus or keyboard trap |
| S07 | Field-level validation | Business email format, required field, conditional unknown-grade detail and quantity/unit errors are specific and accessible | No server-only discovery of basic errors |
| S08 | Error summary | Summarize errors and link/focus to affected fields | No unlabeled red banner or lost context |
| S09 | Submission in progress | Prevent duplicate submission while showing clear progress; preserve values | No indefinite spinner or approval language |
| S10 | Submission failure | Preserve values, offer retry and show a manual channel only after verification | No Contact fallback, unverified email, data loss or implied receipt |
| S11 | Success / receipt | State that the request was received for human review and that follow-up may be needed | No quotation, price, stock, MOQ, lead time, sample, document, delivery, order or approval implication |
| S12 | Privacy | Display approved controller, purpose, handling/retention and contact information at the point of submission | No invented legal claims or unregistered Privacy route |
| S13 | Human review | Explain review without response-time or outcome promise | No SLA, automatic approval or guaranteed response |
| S14 | Restricted product relation | Show only V0.3-approved neutral context; M-2377 may carry five approved Applications and Sulfate | No M-2377 Specialty Materials mapping, Rubber taxonomy, M-996/M-2196 comparison or suitability inference |
| S15 | Form service unavailable | Keep Buyer Clean Global RFQ Chrome visible; show a clear retry/service state; record release blocker | No hidden/disabled Global RFQ, Contact relink or publishable broken form |
| S16 | RFQ route unavailable | Internal status is `RFQ_ROUTE_READY=false = RELEASE_BLOCKER`; formal Buyer Clean state still uses the approved fixed Global Chrome | No RFQ OFF, hidden, disabled, empty slot or Contact fallback candidate |

### 7.1 Validation direction

- Required validation must occur after interaction or submission attempt, not as errors on first load.
- Unknown grade is valid when conditional application/requirement context is present.
- Estimated quantity requires a valid positive value and unit; this validates input, not MOQ or availability.
- Document and sample selections remain optional context and cannot validate commercial eligibility.
- Errors must be connected to labels/instructions and announced to assistive technology.
- Server/service failure must not erase entered values.
- Success must be a durable text state and must not rely on green color or a check icon alone.

## 8. PRODUCT V0.3 hard boundaries

### 8.1 Registered neutral grade set

`M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377, CR-901`

The RFQ page may display these names as neutral buyer-selected values. PRODUCT V0.3 is the only current relationship source: 30 `VERIFIED_FOR_PUBLIC_MAPPING`, 0 `CONFLICT_HOLD`, 54 `NO_PUBLIC_MAPPING`; Process distribution is 8 Chloride, 5 Sulfate and 1 Vapor-phase oxidation. The page does not publish a recommendation list, process selector or application matrix.

### 8.2 Required behavior

- M-2377 may appear as a neutral registered grade and may carry neutral Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate context when explicitly selected or supplied by an approved upstream source action.
- M-2377 Specialty Materials remains `NO_PUBLIC_MAPPING / DO_NOT_RENDER`. Its absence must not be expressed as technical unsuitability.
- Rubber is evidence-register context only. It must not become a structured RFQ Application option, filter, taxonomy group, page, URL, primary keyword, navigation item, Schema relation or automatic prefill. Buyer-entered Rubber text may remain under `Other` without creating a taxonomy decision.
- M-996 and M-2196 may be independently selected. Their individual source-bound facts belong to the respective Grade-page evidence contract and need not render in this form. No differentiation, ranking, superiority, inferiority, selection rationale, formulation-specific comparative reason, performance comparison, equivalence, replacement or substitution may render.
- `NO_PUBLIC_MAPPING` means the current baseline does not positively publish a relation. It must never be restated as not applicable, unsuitable, not recommended, unavailable or prohibited.
- `NO_PUBLIC_MAPPING`, `DO_NOT_RENDER`, `comparison_hold` and related internal states must not appear in Buyer Clean visible text, hidden assistive text, metadata, Schema, analytics labels or error messages. PRODUCT V0.3 has zero Application `CONFLICT_HOLD` rows.
- Verified Application mappings are neutral `Grades to Review` relations only. They are not Best, Recommended, Ideal, guaranteed fit or procurement approval.
- Process classification does not prove application fit, performance or commercial suitability.

## 9. Evidence and claim register

| Claim ID | Candidate visible statement or implication | Type | Source / date | Gate 1 status | Render decision |
|---|---|---|---|---|---|
| CL-RFQ-001 | This page accepts titanium dioxide quotation requests for human review | PROCESS | Current user instruction and registered page role, 2026-08-30 | Authorized scope | `RENDER_AFTER_COPY_APPROVAL` |
| CL-RFQ-002 | Buyers may submit explicit product, application, destination and document context | PROCESS | Current user instruction and PRD V0.4 | Authorized scope | `RENDER_AFTER_COPY_APPROVAL` |
| CL-RFQ-003 | A buyer may continue without knowing the exact grade when sufficient requirement context is supplied | PROCESS | Current user instruction | Authorized scope | `RENDER_AFTER_COPY_APPROVAL` |
| CL-RFQ-004 | Submission means the request was received and is pending human review | PROCESS | Current user instruction and root Conversion contract | Mandatory boundary | `RENDER_AFTER_COPY_APPROVAL` |
| CL-RFQ-005 | Submission confirms a quotation, price, stock, MOQ, lead time, transport, sample, document, order or approval | COMMERCIAL / LOGISTICS / DOCUMENT | Explicitly prohibited | Prohibited implication | `DO_NOT_RENDER` |
| CL-RFQ-006 | A stated response time or SLA applies | PROCESS | No approved operational evidence found | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| CL-RFQ-007 | A specific grade is recommended, equivalent, superior, substitute or guaranteed fit | TECHNICAL / PRODUCT | Not authorized by PRODUCT V0.3 | Prohibited | `DO_NOT_RENDER` |
| CL-RFQ-008 | A destination market is served or has a specific regulatory/trade/logistics outcome | MARKET / REGULATORY / TRADE / LOGISTICS | No page-specific evidence | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| CL-RFQ-009 | A TDS/SDS/COA/COO/traceability file is available, current, applicable or approved | DOCUMENT / REGULATORY / ORIGIN | No approved availability inventory found | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| CL-RFQ-010 | A sample is available, free, approved or will be dispatched | SAMPLE / LOGISTICS | No approved sample policy | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| CL-RFQ-011 | Request data is handled by a stated controller for a stated purpose and period | PRIVACY | No approved controller/retention text found | `DECISION_REQUIRED` | `DO_NOT_RENDER` until approved |
| CL-RFQ-012 | A verified alternative contact can receive a failed submission | CONTACT | Planned domain email remains pre-release verification; Contact is `CONTACT_DETAILS_REQUIRED` | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` until verified |
| CL-RFQ-013 | `/request-a-quote/` and its form are live and healthy | ROUTE / FORM | Not tested and development access prohibited | `NOT_VERIFIED` | Internal release gate only |

### 9.1 Frozen fields and non-blocking work

| Frozen item | Reason | Required to unfreeze | Work that may continue after Gate 0/1 review |
|---|---|---|---|
| Price, MOQ, stock, lead time, Incoterm, freight and transport capability | No approved commercial/operational evidence; user prohibits promise | Approved current operational policy with owner and scope | Neutral data collection and receipt-only workflow |
| Product fit and comparisons | PRODUCT V0.3 neutral-mapping restrictions | Approved technical evidence and relationship decision | Neutral grade/Application/Process context and unknown-grade path |
| M-2377 Specialty Materials and Rubber taxonomy | Specialty Materials remains no-public; Rubber is evidence only outside the six-group taxonomy | A separately approved taxonomy/relationship/page change, outside this task | Five approved M-2377 Applications and Sulfate neutral context may continue |
| M-996/M-2196 comparison | Comparison evidence unsupported | Dedicated approved comparison evidence | Independent neutral selection only |
| Document availability/applicability | No approved inventory | Approved document inventory with product/market/version scope | Optional document-needs field |
| Sample policy | No approved quantity, freight, availability or approval rules | Approved sample policy and workflow | Optional sample-interest field only |
| Privacy/controller/retention text | No approved legal/business text | Approved controller, purpose, retention, recipients/transfer and contact wording | Layout/state reservation, not final visible copy |
| Submission-failure manual channel | Contact details unverified | Verified email/route/channel and handling process | Retry and input-preservation behavior |
| Indexing/canonical/robots | No approved decision | Explicit project-control/user approval | Keyword and intent audit only |
| RFQ route/form readiness | Not tested; Mapping remains planned | External development evidence and release QA | Planning and formal visual design after authorization; release stays blocked |

## 10. Global Chrome and page-action hierarchy

### 10.1 Fixed inherited contract

| Surface | Required behavior on CONV-RFQ |
|---|---|
| Desktop Header | 84px; production primary horizontal SVG; fixed order; terminal `Request a Quote` remains visible and points to `/request-a-quote/`; no current link on CONV-RFQ |
| Mobile Header | 64px; `Logo | RFQ | Menu`; RFQ remains visible with at least 44px logical target |
| Mobile Menu | Eight items in fixed order; terminal `Request a Quote` row remains visible; no current link/marker and buyer-visible `CURRENT` count is 0 |
| Desktop Footer | Approved V0.5-inherited Deep Navy shared component with production reverse SVG; terminal RFQ remains visible |
| Mobile Footer | Deep Navy; terminal RFQ remains visible with at least 44px logical target |
| Route/form failure | `RFQ_ROUTE_READY=false = RELEASE_BLOCKER`; visibility and URL do not change |

### 10.2 Duplicate-CTA prevention direction

- Global Chrome retains the approved label `Request a Quote` and terminal Teal tier even on the current page.
- The Gate 2 page-body primary action is `Submit RFQ for Review`; it remains distinct from the Global Chrome `Request a Quote` navigation action.
- The Header or Footer RFQ must not be removed merely because the page already contains the form.
- The Header terminal action must not be relinked to Contact or converted into a second page-body submit control.
- Page-body supporting links must not compete with the main form by introducing another equivalent solid terminal CTA.
- Global Chrome V0.5 defines no current-page marker for this Conversion route. Hover and focus remain independently visible; no false parent/current item is added.

## 11. SEO, GEO and machine-readable Gate 2 submission

| Field | Gate 2 submission |
|---|---|
| H1 | `Request a Titanium Dioxide Quote` |
| Title | `Titanium Dioxide Quote Supplier \| TiO2 Malaysia RFQ` |
| Meta Description | `Request a titanium dioxide quotation with grade, application, destination and estimated quantity context. Submission is received for human review only.` |
| Canonical | Self-reference to `https://tio2malaysia.com/request-a-quote/` recommended only after indexing and route readiness approval |
| Robots | `index, follow` recommended for Gate 4 review; not activated |
| Hreflang | None unless a future language version is approved |
| Breadcrumb | `Home / Request a Quote` |
| Page Schema | `WebPage` + `BreadcrumbList`; visible content and live URLs must match |
| Prohibited Schema | Product, Offer, price, availability, shipping, certification, rating, FAQPage/HowTo without approved visible content |
| Primary entity | TiO2 Malaysia RFQ workflow |
| Related entities | Only buyer-selected registered grade, application, destination and document-context entities; no inferred relation |
| Freshness trigger | Any change to form fields, route/form status, privacy, human-review owner, contact, product relationship, price/supply policy or Schema guidance |

## 12. Visual and responsive coverage status

Gate 3 wireframes, Gate 4 visual direction and the Gate 5 complete visual package now cover:

- Desktop complete page using the approved 84px Global Header and a single-column body with intro above the centred form;
- 390px complete page using 64px `Logo | RFQ | Menu`, at least 44px targets and no horizontal overflow;
- Mobile Menu Open with `Request a Quote` visible, no current marker and buyer-visible `CURRENT` count 0;
- Desktop and Mobile Deep Navy Footer with terminal RFQ;
- default, valid prefill, empty prefill, invalid/stale prefill, unknown grade, multiple grades and insufficient-information states;
- focus, field validation, error summary, submission in progress, failure and receipt-only success;
- inline privacy, human-review and restricted-product-relation states;
- form-service-unavailable and internal route-unavailable/release-blocker review states without altering public Global RFQ visibility;
- real long company name, long business email, long destination, long requirement note, wrapped errors and wrapped success copy;
- no factory, warehouse, port, certification, inventory, delivery or laboratory image that implies an unverified capability.

The full contracts and visual assets are in `pages/conversion/request-a-quote/04_planning/`, with review submissions in `pages/conversion/request-a-quote/05_review/`. Gate 5 is complete as a review submission, not as Buyer Clean release approval. Annotated privacy/release slots must not be replaced with invented copy, and the public form must not be released until the listed blockers close.

## 13. Gate 0/1 review items

| Review ID | Level | Finding | Required decision/action | Current status |
|---|---|---|---|---|
| CONV-RFQ-R001 | GOVERNANCE | Shared Conversion Playbook was required | `CONVERSION_PLAYBOOK_V0.1.md` created by the authorized Conversion owner; sibling consumers notified; project-control review remains | `RESOLVED_FOR_WORKING_PROGRESSION / PCR_PENDING` |
| CONV-RFQ-R002 | GATE CONTROL | User authorized Gate 5 progression, rejected the V0.1 PC left/right body layout, and has not approved the V0.2 revision | Review the Gate 5 V0.2 package; do not infer Gate 6/7, handoff or release authority | `GATE_5_V0.2_USER_REVIEW_PENDING` |
| CONV-RFQ-R003 | IMPORTANT / SEO | Gate 2 recommends INDEX/FOLLOW and self-canonical after release gates | User/project control to approve or revise; no activation in this task | `PENDING_GATE_4_REVIEW` |
| CONV-RFQ-R004 | IMPORTANT SEO RISK | Direct SERP is supplier/distributor/product-led, while page mapping is a standalone conversion page | Preserve locked ownership; Gate 2 must supply enough quotation/supplier context without taking Home/Product/Market intent | `OPEN / CONTROLLED` |
| CONV-RFQ-R005 | BLOCKING FOR BUYER CLEAN RELEASE | Privacy controller, purpose, retention, transfer/recipient and visible wording are not approved | Gate 5 uses an internal annotated slot; supply/approve inline privacy text before release; do not invent a new Privacy page | `OPEN / VISUALLY ANNOTATED` |
| CONV-RFQ-R006 | BLOCKING FOR BUYER CLEAN FAILURE CHANNEL | No verified alternative manual channel was found | Gate 5 uses channel-free retry; verify an email/route/channel and handling process before any alternative channel appears | `OPEN / SAFE FAILURE COPY USED` |
| CONV-RFQ-R007 | IMPORTANT | Exact minimum-field, conditional-field and prefill contract is now specified in Gate 2 | Review `CONV-RFQ_CONTENT_ARCHITECTURE_V0.1.md`; preserve minimum collection | `PENDING_GATE_4_REVIEW` |
| CONV-RFQ-R008 | CONTROLLED PRODUCT GATE | M-2377 V0.3 scope, Rubber evidence-only status, M-996/M-2196 comparison and NO_PUBLIC_MAPPING misinterpretation risk | Keep PRODUCT V0.3 rules in every visible and machine-readable state | `CONTROLLED_IN_DRAFT` |
| CONV-RFQ-R009 | RELEASE BLOCKER | RFQ route and form readiness are not verified | Keep fixed Global RFQ visible; treat unverified/false readiness as `RELEASE_BLOCKER`; verify externally before any release | `OPEN / NOT TESTED` |
| CONV-RFQ-R010 | SHARED AUTHORITY | Dynamic project status/index now identify Global Chrome V0.5 and production SVG authority | Consume the current paths without modifying shared governance | `CLOSED / CONSUMED` |

No open blocker is marked `CLOSED`. No Gate artifact is marked approved.

## 14. Gate 0/1 self-check and submission

- [x] Only CONV-RFQ is handled.
- [x] Page ID, URL, type, market, language, priority and keyword state match registry/CSV.
- [x] Mapping and Verification states remain `PLANNED_CONVERSION` / `QUALITATIVE_KEYWORD_EVIDENCE`.
- [x] 54-row Page ID, URL and non-empty primary-keyword uniqueness checks pass.
- [x] Local BUYER-01 raw evidence is complete and both stored-file hashes match the finalized manifest.
- [x] Search Volume, KD, CPC and trend remain Unavailable.
- [x] Historical no-standalone-page research language is recorded and correctly superseded by the approved implementation architecture.
- [x] Home, Market, Product, Grade, Application, Document, Resource, Sample and Contact ownership remains separate.
- [x] Upstream prefill is limited to explicit, visible and editable context.
- [x] Unknown and invalid grade values fail safely without negative applicability language.
- [x] PRODUCT V0.3 counts and Process distribution are verified; M-2377 five-Application/Sulfate neutral prefill, Specialty/Rubber boundary, M-996/M-2196 comparison freeze and NO_PUBLIC_MAPPING semantics are preserved.
- [x] Minimum data excludes nonessential phone, address, payment, registration and confidential-formulation fields.
- [x] Required validation, focus, error, failure, success, privacy, human-review, insufficient-information and unavailable states are inventoried.
- [x] Success is receipt only, never quotation, price, stock, MOQ, lead time, sample, document, delivery, order or approval.
- [x] Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer fixed RFQ behavior is inherited unchanged.
- [x] Route/form readiness remains an internal release gate and never hides, disables or relinks RFQ.
- [x] No Header item, Footer route, Contact fallback or unregistered Privacy page was added.
- [x] Gate 2 content/SEO, Gate 3 wireframes, Gate 4 visual direction and Gate 5 complete visuals/state boards were created under the authorized boundary; no code, test, deployment or release artifact was created.
- [x] `D:\16Wordpress_nextjs` was not accessed.
- [x] Gate 0/1 and Gate 5 progression were authorized by the user; Gate 2–5 outputs remain not user-approved and Gate 6/7 remain prohibited.

### Submission request

User Gate 5 review is requested for:

1. the shared Conversion Playbook working baseline and its continued project-control review;
2. Gate 2 content, minimum-data, prefill, SEO/GEO/Schema and `index, follow` recommendation;
3. Gate 3 Desktop 1440px, Tablet 834px, Mobile 390px and S00–S18 state contract;
4. Gate 4 form-first White/Soft Background visual direction and accessible state colours;
5. Gate 5 V0.2 single-column 1440px complete visual plus the inherited 390px complete visual, Desktop/Mobile state boards and Mobile Menu Open;
6. the unresolved privacy, receiver/manual-channel, route/form readiness and index/canonical blockers.

The page is `DESIGN_IN_REVIEW`. Gate 5 V0.2 is submitted rather than approved and remains `RELEASE_BLOCKED`.

## 15. Gate record

| Gate | Deliverable | Submission date | Current conclusion | User approval requirement | Approval date |
|---|---|---|---|---|---|
| Gate 0 | Page admission and Brief V0.1 | 2026-08-30 | `PROGRESSION_AUTHORIZED_BY_USER` | Progression authorized 2026-09-01 | 2026-09-01 |
| Gate 1 | Research and evidence audit in this Brief | 2026-08-30 | `PROGRESSION_AUTHORIZED_BY_USER` | Product/claim freezes remain | 2026-09-01 |
| Gate 2 | Content architecture + SEO/GEO/Schema | 2026-09-01 | `COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED` | Included in Gate 4 review | — |
| Gate 3 | Desktop/Tablet/390px wireframe + S00–S18 | 2026-09-01 | `COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED` | Included in Gate 4 review | — |
| Gate 4 | Visual direction | 2026-09-01 | `V0.2_TARGETED_REVISION_SUBMITTED / ARTIFACT_NOT_APPROVED` | Included in Gate 5 V0.2 review | — |
| Gate 5 | Complete visual and states | 2026-09-01 | `V0.2_TARGETED_REVISION_SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED / RELEASE_BLOCKED` | User review required; release blockers remain | — |
| Gate 6+ | Review, handoff, development, QA and release | — | `OUT_OF_SCOPE / PROHIBITED` | Not authorized by this task | — |

## 16. Current stopping condition

Current work stops at Gate 5 user review submission:

- do not enter Gate 6/7 or create development-handoff artifacts;
- do not replace privacy/release annotations with invented Buyer Clean text;
- do not enter Gate 6/7 or any development, test, deployment, release, DNS or indexing action;
- do not access or operate `D:\16Wordpress_nextjs`.

## 17. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial CONV-RFQ Gate 0/1 Brief and compliance/evidence audit | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 / PRODUCT V0.3 relationship update | 2026-08-30 | Replaced V0.2.1 as the current relationship input; enabled neutral M-2377 five-Application and Sulfate prefill context; retained Specialty/Rubber, comparison and no-public boundaries | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`; Gate, Global Chrome and form boundaries unchanged |
| V0.1 / Gate 4 progression amendment | 2026-09-01 | Recorded user authorization; established Conversion Playbook V0.1; consumed Global Chrome V0.5/production SVG; completed Gate 2–3 and submitted Gate 4 visual direction; stopped before Gate 5 | `DESIGN_IN_REVIEW / GATE_4_USER_REVIEW_PENDING` |
| V0.1 / Gate 5 progression amendment | 2026-09-01 | Recorded `授权进入Gate5`; produced exact Desktop/390px complete visuals, Desktop/Mobile state boards and Mobile Menu Open; retained privacy, operational and route/form release blockers | `DESIGN_IN_REVIEW / GATE_5_USER_REVIEW_PENDING / RELEASE_BLOCKED` |
| V0.2 / Gate 5 PC layout revision | 2026-09-01 | Responded to user rejection of the PC left/right body; replaced it with intro-above-form single-column composition; retained all mobile, form, state, product and release boundaries | `DESIGN_IN_REVIEW / GATE_5_V0.2_USER_REVIEW_PENDING / RELEASE_BLOCKED` |
| Directory migration | 2026-09-01 | Moved all 16 CONV-RFQ formal page artifacts from shared Conversion stage folders into `pages/conversion/request-a-quote/`; retained the page Brief and shared Playbook in their governed `docs/` locations | `PATH_UPDATED / CONTENT_HASHES_PRESERVED / GATE_STATE_UNCHANGED` |
