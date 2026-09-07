# Documents & Compliance Hub Page Brief V0.1

## 0. Document control and current gate

| Field | Value |
|---|---|
| Document name | Documents & Compliance Hub Page Brief |
| Page ID | `DOC-000` |
| Brief version | V0.1 |
| Created / last updated | 2026-08-30 / 2026-09-01 |
| Page owner | DOC-000 page execution task |
| Project-control reviewer | Project control and quality review |
| User approval record | 2026-08-30 authorized the Gate 0/1 audit. On 2026-09-01 the user authorized establishing the Documents Playbook and preparing DOC-000 through Gate 4, then explicitly authorized Gate 5. These instructions authorize work and review submission; they do not approve Gate 2–5 outputs or authorize Gate 6/7, development, handoff or release. |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Mapping Status | `PLANNED_ARCHITECTURE` |
| Verification Status | `NO_DIRECT_KEYWORD_TARGET` |
| Current execution scope | Gate 0/1 working baseline; Gate 2 content/SEO contract; Gate 3 Desktop/Tablet/390px wireframe; Gate 4 direction; Gate 5 Desktop/390px full visual and critical states |
| Current stop point | `GATE_5_SUBMITTED_FOR_USER_REVIEW / NOT_APPROVED` |
| Change summary | User authority extends through DOC-000 Gate 5 only. Desktop/390px full visuals, Mobile Menu Open and restricted-state evidence are complete and submitted; neutral inventory-zero Buyer Clean, fail-closed navigation and controlled-request boundaries remain unchanged. |

This authorization is not artifact approval. The 2026-09-01 instructions supply a page-specific working boundary through Gate 5. Gate 6 and all development/handoff/release work remain `NOT_STARTED / NOT_AUTHORIZED`.

### 0.1 Gate status ledger

| Gate | Deliverable | Status | Validation completed | Open issues | Approval source |
|---|---|---|---|---|---|
| Gate 0 | Task admission and Brief V0.1 | `USER_AUTHORIZED_WORKING_BASELINE / NOT_CLOSED` | Registry, PRD, page-keyword master, URL, type, priority, scope and lifecycle separation checked | Indexing intent remains undecided | 2026-09-01 user instruction authorizes continuation through Gate 4; it is not artifact approval |
| Gate 1 | Research, keywords, evidence, buyer questions, inventory and relationship audit | `USER_AUTHORIZED_WORKING_BASELINE / NOT_CLOSED` | Research/evidence boundary, adjacent-page ownership, zero inventory and fail-closed rules checked against current baselines | No approved document inventory or product/market applicability matrix; child routes remain provisional; REACH/origin/traceability claims frozen | 2026-09-01 user instruction authorizes continuation through Gate 4; it is not artifact approval |
| Gate 2 | Content architecture, SEO/GEO, CTA and internal links | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` | Six-category Buyer Clean, scope boundary, local CTA, internal-link gating and visible-only Schema contract prepared | INDEX/NOINDEX and final canonical remain decision-required; no actionable child or Request Documents routes | 2026-09-01 user authorization to prepare through Gate 4 |
| Gate 3 | Desktop/Tablet/390px wireframe | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` | Desktop, tablet, 390px, mobile menu, long copy, zero/partial/full inventory and interaction-state contracts prepared | Review required; no implementation verification is in scope | 2026-09-01 user authorization to prepare through Gate 4 |
| Gate 4 | Visual direction and key restricted states | `USER_AUTHORIZED_TO_PROCEED / NOT_APPROVED` | Industrial Documentation Editorial direction, Desktop/390 structure, Global Chrome V0.5 inheritance and restricted-state board prepared | Carried as the working input to Gate 5; not self-approved | 2026-09-01 explicit Gate 5 authorization permits progression |
| Gate 5 | Desktop/390px full visual and interaction/restricted states | `SUBMITTED_FOR_USER_REVIEW / NOT_APPROVED` | Desktop 1440, 390px at 2×, Mobile Menu Open and nine restricted-state contracts completed; Production SVG and Global Chrome V0.5 verified | User approval/revision decision required; no Gate 6 progression | 2026-09-01 explicit user instruction: `授权Gate5` |
| Gate 6+ | Review, handoff, development, QA and release | `OUT_OF_SCOPE / NOT_AUTHORIZED` | No action taken | Permanently outside this task | None |

## 1. Gate 0 — page identity and admission

| Field | Recorded value |
|---|---|
| Page ID | `DOC-000` |
| Section | `DOCUMENTS` |
| Page name | Documents & Compliance |
| URL | `/documents/` — registered route, unchanged by this task |
| Page type | Navigation hub |
| Playbook key | `DOCUMENT` |
| Market | `GLOBAL` |
| Language | `EN` |
| Priority | `P1` |
| Planned domain | `https://tio2malaysia.com` |
| Site scope | `tio2-my` — future handoff isolation requirement only; no implementation here |
| Canonical | Candidate self-reference to `https://tio2malaysia.com/documents/`; `DECISION_REQUIRED` until indexing intent is approved |
| Indexing intent | `DECISION_REQUIRED`; `NO_PRIMARY_KEYWORD` does not by itself determine INDEX or NOINDEX |
| Header navigation | `Documents` remains the fifth fixed first-level item and must show the approved structural current state on this page |
| Primary page responsibility | Help international B2B buyers identify the document category and next step without asserting availability, applicability, approval, download or delivery |
| Conversion boundary | `/request-documents/` owns controlled request capture; DOC-000 must not contain or imitate the request form |
| Child-page boundary | DOC-REACH, DOC-TDS and DOC-COO own informational document clusters; this task does not start or define their page content |
| External development workspace | `D:\16Wordpress_nextjs` — explicitly not accessed or modified by this task |

### 1.1 Gate 0 admission result

| Check | Result | Evidence |
|---|---|---|
| Exists in 54-page registry | PASS | Registry section 4.6 |
| Page ID, name, URL and type agree | PASS | Registry and `11_page_keyword_master.csv` |
| Priority agrees | PASS — `P1` | Registry and CSV |
| Primary keyword agrees | PASS — `NO_PRIMARY_KEYWORD` | Registry and CSV |
| Mapping and verification status preserved | PASS | `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET` |
| Scope limited to DOC-000 Hub | PASS | Current user instruction |
| Child pages remain out of scope | PASS as written contract | DOC-REACH, DOC-TDS and DOC-COO are referenced only to preserve ownership |
| Header and Footer identity preserved | PASS as written contract | Global Chrome V0.5; no first-level item added, removed or reordered |
| Applicable working Playbook available | PASS FOR CURRENT REVIEW SCOPE | `docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.1.md` was established under the 2026-09-01 user authorization; it remains a Gate 4 review draft, not an approved project baseline |
| Indexing/canonical decision approved | OPEN | No approved value found |
| Formal page artifact directory permitted | CURRENT USER AUTHORIZATION | Gate 2–4 review artifacts are present under `pages/documents/`; this does not authorize Gate 5 or development |

Gate 0 is eligible for review, not approval. Page identity is internally consistent; the missing Documents Playbook prevents the Hub from being described as an approved formal design contract.

## 2. Authority, inputs and conflict register

### 2.1 Inputs read for this audit

| ID | Source | DOC-000 use | Status |
|---|---|---|---|
| E-USER-001 | Current 2026-08-30 DOC-000 instruction | Scope, Hub/conversion separation, required categories, inventory/route states, responsive/interaction coverage and hard stop | Current explicit authority for audit scope |
| E-GOV-001 | `AGENTS.md` | Root gates, evidence, Documents, SEO/GEO, visual and development boundaries | Current governance |
| E-STATUS-001 | `00_PROJECT_STATUS.md` | Dynamic progress and fact freezes | Read; Global Chrome references are stale |
| E-INDEX-001 | `01_PROJECT_INDEX.md` | Current document navigation | Read; Global Chrome references are stale |
| E-DIR-001 | `02_DIRECTORY_GUIDE.md` | Artifact placement and no formal page artifacts before Brief approval | Current directory rule |
| E-REG-001 | `docs/architecture/PAGE_REGISTRY_V0.1.md` | Page identity, mapping, verification and Playbook requirement | Current page registry |
| E-PRD-001 | `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md` | Architecture, Hub responsibility, conversion path and evidence limits | Current approved PRD baseline |
| E-KW-001 | `research/keyword/11_page_keyword_master.csv` | Exact keyword, intent and cannibalization contract | Current implementation mapping |
| E-KW-002 | `research/keyword/01_keyword_master.csv`, `02_keyword_clusters.csv`, `05_cannibalization_review.csv` | COMP-01/02/03 intent, unavailable metrics and historic overlap risks | Research support; PRD/implementation master overrides obsolete architecture language |
| E-TEMPLATE-001 | `docs/page-briefs/PAGE_BRIEF_TEMPLATE.md` | Mandatory page-contract fields and gate ledger | Current template V0.2 |
| E-CONV-DOC-001 | `docs/page-briefs/CONV-DOC_REQUEST_DOCUMENTS_BRIEF_V0.1.md` | Keeps informational selection separate from controlled request capture; supplies a review-only adjacent-page boundary | Draft in review; not treated as approved page design |
| E-VIS-001 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | Future visual direction only | Approved visual direction |
| E-GHC-001 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Current fixed RFQ, Production SVG and visible-CURRENT-zero Header/Footer contract | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` for shared Chrome only |
| E-GHC-002 | `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md` | Current Desktop 84px, Mobile 64px, current-state and >=44px common states | Current shared-Chrome authority |
| E-GHC-003 | `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md` | Maps DOC-000 to the structural Documents current state | Current cross-page registry |
| E-LOGO-001 | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` and `docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md` | Production Header/Footer SVG assets | `USER_APPROVED / PRODUCTION_READY` for logo asset selection only |
| E-EVIDENCE-001 | Local project filename/content inventory | Checked for approved TDS/SDS/COA/COO/traceability/REACH file inventory and applicability records | No approved DOC-000 inventory or applicability source found |
| E-EXT-TRONOX-001 | Tronox `Contact Us`, accessed 2026-08-30 | Public competitor pattern: SDS discovery starts from product selection; technical data inquiry is product/region contextual | Pattern reference only; not company capability evidence |
| E-EXT-CHEMOURS-001 | Chemours Ti-Pure R-105 product information PDF, accessed 2026-08-30 | Public competitor pattern: a technical document is grade-specific and date/version/context matter | Pattern reference only; content and claims must not be copied |
| E-OFFICIAL-OSHA-001 | OSHA 29 CFR 1910.1200 Appendix D, accessed 2026-08-30 | Supports the generic purpose/structure of an SDS | Official U.S. source; does not establish availability or applicability for TiO2 Malaysia |
| E-OFFICIAL-ECHA-001 | ECHA REACH registration guidance and titanium dioxide substance information, accessed 2026-08-30 | Shows that REACH registration duties and dossiers are actor/substance/context specific | Official EU source; does not prove TiO2 Malaysia or any grade has coverage |
| E-OFFICIAL-ICC-001 | ICC Certificates of Origin, accessed 2026-08-30 | Supports generic COO purpose and the difference between origin-document types | Official trade reference; does not prove Malaysia origin or a specific certificate |
| E-OFFICIAL-TRADE-001 | International Trade Administration export-document guidance, accessed 2026-08-30 | Supports the need to treat destination and shipment context as variable | Official U.S. guidance used only as general export-process context |

### 2.2 Conflicts and precedence decisions

| Conflict ID | Conflict | Impact | Current treatment | Decision owner |
|---|---|---|---|---|
| DOC-000-C001 | Registry required a Documents Playbook; it was absent during the 2026-08-30 audit | Gate 2–4 governance | Resolved for the current review scope by the 2026-09-01 user instruction to establish `DOCUMENT_PLAYBOOK_V0.1.md`; the Playbook is still a review draft and is not self-approved | User review |
| DOC-000-C002 | PRD V0.4 schedules detailed Documents architecture for a later version, while the current user instruction explicitly starts DOC-000 | Scope timing | Current user instruction authorizes this Hub's Gate 0/1 audit and target progression only after review; it does not approve later-gate content or design | User |
| DOC-000-C003 | Earlier project entry files contained stale Global Chrome wording | Shared Header/Footer baseline | DOC-000 consumes V0.5 plus the Production SVG manifest; any broader register maintenance must preserve that authority | Project control |
| DOC-000-C004 | Historic keyword research maps COO overlap to a deleted Malaysia Origin architecture, while PRD V0.4 reassigns origin facts to About and origin files to Documents | Cannibalization boundary | Use PRD V0.4 and `11_page_keyword_master.csv`: About owns verified manufacturing/origin/traceability trust; DOC-COO owns document intent; DOC-000 only routes selection | Project control if a future source conflicts |
| DOC-000-C005 | Child URLs are registered as `PROVISIONAL_URL`, yet the Hub must represent categories without creating false live links | Gate 2–5 actions and states | Treat route readiness as an independent eligibility gate; no dead link, hidden fake card or implied live child page may appear | Project control / user |
| DOC-000-C006 | `/request-documents/` is registered, but its Brief and live route are not approved/verified | Hub conversion path | Preserve it as the owner of request capture. Later visible CTA requires explicit route eligibility; until then, use a neutral no-route state without Contact fallback | Project control / user |

## 3. Gate 1 — keyword, intent and cannibalization audit

| Field | Recorded value |
|---|---|
| Primary Keyword | `NO_PRIMARY_KEYWORD` |
| Secondary Keywords | `TDS | SDS | COA | COO | REACH` |
| Search Intent | `N` — navigation and document-category selection |
| Buyer Stage | Navigation within technical evaluation / supplier qualification |
| Source Cluster | `COMP-01 | COMP-02 | COMP-03` |
| Page role | Route buyers to document explanations and the controlled request workflow |
| Excluded Keywords | `individual document primary terms` |
| Cannibalization boundary | Hub does not own individual document clusters; child pages own REACH, technical-document and COO terms |
| Search-metric status | Search Volume, KD, CPC and trend are `Unavailable` for the relevant document terms; no metric may be invented |
| Indexing conclusion | Not inferable from `NO_PRIMARY_KEYWORD`; remains `DECISION_REQUIRED` |

### 3.1 Adjacent-page ownership

| Intent or claim | Owner | DOC-000 boundary |
|---|---|---|
| REACH explanation, verified actor/grade/market scope and current evidence | `DOC-REACH` | May identify REACH/compliance as a category and explain that scope must be reviewed; must not claim registration or compliance |
| TDS, SDS and COA definitions, grade applicability and detailed workflow | `DOC-TDS` | May distinguish the buyer purpose of each category at summary depth; must not target the child primary terms or list unverified files |
| COO, origin-document and traceability explanation | `DOC-COO` | May distinguish origin/traceability request types; must not prove origin, shipment, batch or customs acceptance |
| Controlled request form and receipt states | `CONV-DOC` | May link to the request workflow when route eligible; must not embed the form or claim submission approval/delivery |
| Verified Malaysia manufacturing/origin/traceability trust narrative | `ABOUT-001` | May link to About when its route/content is approved; must not duplicate the trust narrative |
| Grade specifications, applications and performance | `GRADE-*`, `PRODUCT-*`, `APP-*` | Product/grade may be request context only; no recommendation or technical claim is inferred |
| Market procurement and regulatory context | `MARKET-*` | Destination may be request/applicability context only; no market coverage or compliance claim is generated |
| Quote / purchase action | `CONV-RFQ` | Global RFQ remains fixed in shared Chrome; DOC-000's contextual action remains document selection/request, not quotation |

### 3.2 SEO/GEO guardrails for later gates

- The Hub must not be optimized for `titanium dioxide reach registration`, `titanium dioxide tds`, `titanium dioxide sds`, `titanium dioxide coa` or `titanium dioxide country of origin certificate`.
- Category labels may be visible navigation vocabulary; repetition, H1 targeting or article-depth definitions must not make DOC-000 the owner of child search intent.
- No evidence-free FAQ, compliance answer, availability statement, download relationship, origin claim or product-document mapping may be created for GEO.
- Answer-ready blocks may later explain only stable, visible buyer decisions: what category to choose, what context may affect applicability, and what the next step means.
- Schema remains `DECISION_REQUIRED`. `Product`, `Offer`, certification, downloadable-file, `DigitalDocument`, `ItemList` or document-availability relationships are not approved by Gate 1.
- Any later `WebPage`, `CollectionPage`, breadcrumb or visible item relationship must reflect only records that pass evidence and route eligibility.
- `inventory=0` means zero eligible public records, not proof that no document exists.

## 4. Gate 1 — buyer and document-selection research

### 4.1 Target buyer

| Field | Gate 1 finding |
|---|---|
| Primary roles | Procurement, technical, quality, EHS, regulatory/compliance and supplier-qualification personnel |
| Markets | Global, including EU, UK, India and Brazil; market context must never be treated as automatic applicability |
| Stage | Technical evaluation / supplier qualification / pre-purchase documentation review |
| Required decision | Which document category is relevant, whether more product/market/order context is needed and whether to continue to an explanation or controlled request |
| Ideal next step | Choose an eligible explanation route or continue to the controlled Request Documents workflow |
| Not the next step | Public download, automatic compliance confirmation, instant file delivery, approved request, quote, sample or product recommendation |

### 4.2 Required buyer questions

| Question ID | Buyer question | Procurement decision supported | Evidence boundary |
|---|---|---|---|
| DOC-Q01 | Which document should I choose for technical evaluation, safety review, batch quality, origin or regulatory review? | Select a category without confusing document purposes | Category semantics only; no availability claim |
| DOC-Q02 | Does the document apply to my exact grade, destination market, language, order or batch? | Understand why context may be required | Applicability remains unverified until exact scope is reviewed |
| DOC-Q03 | Can I download a document now, or is it controlled? | Understand public versus controlled access | No public download or controlled-release availability may be claimed without inventory evidence |
| DOC-Q04 | What happens if the document or route is not currently available? | Continue without hitting a dead end or seeing a fake card | Neutral zero-state; fixed Global RFQ remains visible; Contact is not a fallback |
| DOC-Q05 | What does submitting a document request mean? | Avoid mistaking receipt for approval or delivery | CONV-DOC owns the form; receipt alone is not approval, availability or delivery |
| DOC-Q06 | Where should I go for Malaysia origin facts versus origin documents? | Separate company trust from shipment/document evidence | About owns verified trust facts; DOC-COO owns origin-document intent |

### 4.3 Document-category selection contract

These definitions are category-routing semantics for later review. They do not prove that a file exists, is current, covers a product/market, is approved for release, is downloadable or will be delivered.

| Category | Buyer-purpose summary | Applicability context that may matter | Current public eligibility | Prohibited implication |
|---|---|---|---|---|
| TDS | Review grade-specific technical information and typical/specification context | Product/grade and current revision | `NO_APPROVED_INVENTORY` | A TDS exists for every grade, contains approved values or can be downloaded |
| SDS | Review hazard, handling, storage and safety information | Product identity, market/jurisdiction, language and revision | `NO_APPROVED_INVENTORY` | One SDS is current or legally suitable for every market/language |
| COA | Review analytical or quality results associated with a defined batch/order context | Product/grade and, where relevant, lot/order reference | `NO_APPROVED_INVENTORY` | A generic or shipment-specific COA is available before review |
| COO / Origin | Review documentary origin evidence in a shipment/trade context | Product, order/shipment, destination and certificate type | `NO_APPROVED_INVENTORY` | Malaysia origin, customs acceptance or a specific COO is proven |
| Traceability | Ask about batch, production or supply-chain records whose scope and disclosure may be controlled | Product, batch/order and requested traceability depth | `NO_APPROVED_INVENTORY` | A complete batch history or manufacturing route is public or releasable |
| REACH / Compliance | Identify an EU compliance/registration question that requires actor, substance, grade/use and market context | Legal actor/role, substance identity, grade/use and current official evidence | `FACT_EVIDENCE_REQUIRED` | TiO2 Malaysia, the operator or every product is REACH registered/compliant |

`Other` may be considered later only as a neutral request-form category on CONV-DOC. It is not a seventh DOC-000 information child page and must not be rendered as a fake Hub destination.

### 4.4 Public status vocabulary boundary

Internal terms such as `inventory=0`, `PROVISIONAL_URL`, `NOT_VERIFIED_LIVE`, `FACT_EVIDENCE_REQUIRED`, `CONTROLLED_REQUEST_ONLY`, route flags, Gate states and approval states must not appear in Buyer Clean.

Later Buyer Clean wording may use natural language only when its underlying condition is true, for example:

- `Choose a document category` — stable navigation instruction;
- `Tell us the grade and destination so the request can be reviewed` — process guidance, not availability;
- `This document is handled through a controlled request` — only when the controlled status and route are approved;
- `No document listings are available here yet` — neutral zero-state for zero eligible inventory, without claiming that no file exists;
- `Document details cannot be opened from this page right now` — neutral route-unavailable state, without a dead link or Contact fallback.

Words such as `Available`, `Current`, `Approved`, `Verified`, `Download`, `Instant`, `All grades`, `All markets` or response-time promises require explicit evidence and scope before use.

## 5. Evidence and claim register

| Claim ID | Candidate visible statement or relation | Type | Source / date | Gate 1 status | Render decision |
|---|---|---|---|---|---|
| DOC-CL-001 | DOC-000 helps buyers choose a document category and next step | PROCESS / IA | Current user instruction; registry and CSV, 2026-08-30 | Verified scope | `RENDER_AFTER_COPY_APPROVAL` |
| DOC-CL-002 | TDS, SDS, COA, COO/Origin, Traceability and REACH/Compliance are buyer-facing selection categories | PROCESS / IA | Current user instruction, 2026-08-30 | Verified scope; category depth remains later-gate work | `RENDER_AFTER_COPY_APPROVAL` |
| DOC-CL-003 | A document's applicability may depend on exact product, market, language, order or batch context | PROCESS | Official/competitor pattern audit, 2026-08-30 | Safe only as qualified general process guidance | `RENDER_WITH_QUALIFIER_AFTER_COPY_APPROVAL` |
| DOC-CL-004 | SDS supports hazard, handling and safety review | SAFETY / DEFINITION | OSHA Appendix D, accessed 2026-08-30 | Verified generic definition; jurisdiction-specific detail stays outside Hub | `RENDER_WITH_QUALIFIER_AFTER_COPY_APPROVAL` |
| DOC-CL-005 | A Certificate of Origin documents a declared origin for customs/trade purposes | ORIGIN / DEFINITION | ICC Certificates of Origin, accessed 2026-08-30 | Verified generic definition; certificate type and shipment scope vary | `RENDER_WITH_QUALIFIER_AFTER_COPY_APPROVAL` |
| DOC-CL-006 | REACH registration responsibilities and dossiers are actor/substance/context specific | REGULATORY / PROCESS | ECHA registration guidance, accessed 2026-08-30 | Verified general regulatory context; no company/product coverage inferred | `RENDER_WITH_QUALIFIER_AFTER_COPY_APPROVAL` |
| DOC-CL-007 | A specific TDS/SDS/COA/COO/traceability file exists, is current, applicable or releasable | DOCUMENT / REGULATORY / ORIGIN | No approved inventory found | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| DOC-CL-008 | A file can be publicly downloaded | DOCUMENT / ROUTE | No approved public-download inventory or live route found | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| DOC-CL-009 | All 14 grades or all target markets are covered | PRODUCT / REGULATORY | No approved applicability matrix found | `EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| DOC-CL-010 | TiO2 Malaysia or IKHLAS has a specific REACH registration/compliance status | REGULATORY / COMPANY | No approved first-party evidence found | `FACT_EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| DOC-CL-011 | Malaysia origin, manufacturing or batch traceability is proven | ORIGIN / COMPANY | About/Documents facts remain evidence-gated | `FACT_EVIDENCE_REQUIRED` | `DO_NOT_RENDER` |
| DOC-CL-012 | A child explanation route or Request Documents route is live | ROUTE | Not verified by this task | `ROUTE_EVIDENCE_REQUIRED` | `DO_NOT_RENDER_AS_LINK` until eligible |
| DOC-CL-013 | Submitting a document request means approval, availability or delivery | PROCESS | Prohibited by governance | Prohibited implication | `DO_NOT_RENDER` |

### 5.1 Frozen fields and non-blocking work

| Frozen item | Reason | Required to unfreeze | Work that may continue after Gate 0/1 review |
|---|---|---|---|
| Document inventory, version, language, public/controlled status and applicability | No approved inventory/evidence | Approved inventory with document ID, type, grade, market/language, revision, disclosure status and evidence owner | Neutral taxonomy, zero-state and eligibility logic |
| DOC-REACH, DOC-TDS and DOC-COO live routes | URLs remain provisional; no live-route verification | Approved final route plus route availability evidence | Non-clickable category explanation or neutral no-route handling, subject to Gate 2 approval |
| Request Documents route | Registered but not approved/verified live | Approved CONV-DOC route and state contract | Keep conversion ownership explicit; no fake link or form |
| REACH coverage or compliance | Company/product evidence absent | Current first-party and official evidence with actor, substance, grade/use, market and date | Generic selection guidance only |
| Origin/manufacturing/traceability facts | About/Documents evidence gates | Verified first-party evidence with scope/date | Generic category purpose and controlled-request direction |
| Product-document mappings | No approved mapping | Approved product-document relationship matrix | Product context fields may be planned neutrally; no recommendation |
| Indexing/canonical/robots | No approved decision | Explicit project-control/user decision | Gate 0/1 research only |

## 6. Inventory and route eligibility model for later review

This is a Gate 1 recommendation, not an approved UI or data specification.

### 6.1 Eligible public item rule

A document-category destination or document record may appear as an actionable Buyer Clean item only when all applicable conditions are true:

1. its public purpose and scope are approved;
2. the relationship is supported by evidence;
3. public versus controlled status is approved;
4. the destination URL is the approved route and is verified eligible for the represented action;
5. visible wording does not expand beyond product, market, language, revision or disclosure scope;
6. the same relationship may be represented in structured data.

Failure of any condition removes the action and its machine-readable relationship. It does not create a disabled card, dead link, hidden placeholder, guessed fallback or negative claim that the document does not exist.

### 6.2 Required state families

| State family | Gate 1 meaning | Buyer Clean requirement for later gates | Structured-data boundary |
|---|---|---|---|
| `inventory=0` | Zero eligible public records/categories under current evidence and route gates | Show one neutral explanatory zero-state and the next eligible action only; no empty card grid or fake filenames | No item/document relationship and no invented `ItemList` |
| Partial inventory | Some categories/records pass every applicable gate | Render only eligible items; state scope per item; do not reserve space for ineligible items | Include only the same visible eligible items |
| Full inventory | Every planned category represented by approved evidence and eligible route | Render the complete approved set; `full` does not imply all grades/markets unless separately verified | Structured relationships mirror the complete visible approved set only |
| Controlled document | Disclosure is approved as request-only rather than public download | Use natural controlled-request wording and an eligible Request Documents action; never style as a disabled download | No downloadable-file relation; request relationship only if visible |
| Route unavailable | Evidence may exist, but the represented destination is not eligible | Remove the link/action and show neutral natural language if needed; no Contact fallback | Omit the route relationship |
| Long filename/field | Approved visible name exceeds normal card length | Preserve full readable text with wrapping; no truncation that hides version/scope | Machine-readable name must match visible full text |
| No image | No approved document thumbnail or photo | Use the approved linear documentation icon system or text-only layout; no fake certificate preview | No image relationship |

The fixed Global Chrome RFQ is outside this eligibility model and remains visible on every state. If `RFQ_ROUTE_READY=false`, that is an internal `RELEASE_BLOCKER`, not a public visual variant.

## 7. Relationship audit

| Relationship | Target | Gate 1 relevance | Current eligibility | Required later behavior |
|---|---|---|---|---|
| Parent/root | Home `/` | Home routes buyers to Documents without a file-availability claim | Approved page exists; exact DOC-000 inbound copy not approved here | Preserve context only |
| Information child | `DOC-REACH` `/documents/reach/` | Owns REACH intent | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` / route not verified | No actionable link until approved and eligible |
| Information child | `DOC-TDS` `/documents/tds-sds-coa/` | Owns TDS/SDS/COA intent | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` / route not verified | No actionable link until approved and eligible |
| Information child | `DOC-COO` `/documents/certificate-of-origin/` | Owns COO/origin/traceability intent | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` / route not verified | No actionable link until approved and eligible |
| Conversion | `CONV-DOC` `/request-documents/` | Owns controlled request capture | `PLANNED_CONVERSION`; Brief in review; route not verified | Contextual CTA only when route/state contract is approved and eligible |
| Trust | `ABOUT-001` `/about/` | Owns verified manufacturing/origin/traceability trust facts | Mapping approved; facts remain evidence-gated | Link only when visible context and route are approved |
| Global conversion | `CONV-RFQ` `/request-a-quote/` | Fixed shared-Chrome terminal action | Always visible by Global Chrome V0.5; live readiness not verified here | Never hidden/disabled/relinked; block release if route not ready |
| Products / Markets / Applications | Corresponding hubs/details | May pass explicit product/market context toward document selection/request | No DOC-000-specific relationship matrix approved | No inferred document or compliance mapping |

### 7.1 Breadcrumb and navigation candidate

- Breadcrumb candidate: `Home > Documents`.
- Header: fixed order `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- `Documents` current state: Bold + 3px Teal underline on Desktop; Bold + 4px Teal left marker in Mobile Menu; buyer-visible `CURRENT` word count is zero.
- Desktop Header: 84px.
- Mobile Header: 64px, `Logo | RFQ | Menu`.
- Desktop and Mobile Footer: approved Deep Navy layout with fixed Conversion / `Request a Quote`.
- Every logical target at 390px must be at least 44px.

These are inherited approved Global Chrome contracts, not Gate 2/3 DOC-000 design approval.

## 8. Gate 3/4 responsive and state coverage

The current Gate 3/4 review package covers the following as structure and direction, without changing Gate 1 evidence status or becoming a Gate 5 full visual:

- Desktop complete page with approved 84px Header, Documents current state and fixed Global RFQ;
- 390px complete page with 64px `Logo | RFQ | Menu`, >=44px targets and no horizontal overflow;
- Mobile Menu Open with Documents current state and fixed terminal `Request a Quote`;
- Desktop and Mobile Deep Navy Footer with fixed `Request a Quote`;
- inventory zero, partial and complete eligibility states;
- long document/category names and long scope labels;
- controlled-request-only item;
- route-unavailable item/state without a dead link or Contact fallback;
- no-image state;
- keyboard, hover and visible focus states;
- actual readable Buyer Clean text rather than gray-line placeholders;
- neutral zero-state with no fake cards, fake filenames or internal governance language;
- structural-data proof that visible eligible relations and machine-readable relations match exactly.

No visual state may show RFQ OFF, hidden, disabled, empty slot or Contact fallback. `RFQ_ROUTE_READY=false` remains an internal `RELEASE_BLOCKER` and does not change public Chrome.

## 9. Gate 0/1 review items

| Review ID | Level | Finding | Required decision/action | Current status |
|---|---|---|---|---|
| DOC-000-R001 | FORMER GATE 2 BLOCKER | The required Documents Playbook was absent during the initial audit | `DOCUMENT_PLAYBOOK_V0.1.md` is now established under explicit 2026-09-01 user authority; it remains part of the Gate 4 review package | `RESOLVED FOR CURRENT REVIEW SCOPE / NOT PROJECT-APPROVED` |
| DOC-000-R002 | IMPORTANT / SEO BLOCKER | INDEX/NOINDEX, robots and final canonical behavior are not approved | Approve Hub indexing intent before Gate 2 SEO contract is finalized | `OPEN` |
| DOC-000-R003 | NON-BLOCKING FACT FREEZE | No approved document inventory, revision, language, disclosure or applicability matrix was found | Keep availability/download/applicability claims `DO_NOT_RENDER`; neutral taxonomy and zero-state work may continue after review | `OPEN / FROZEN` |
| DOC-000-R004 | IMPORTANT / ROUTE BLOCKER | DOC-REACH, DOC-TDS and DOC-COO remain provisional and are not verified live | Approve route eligibility behavior and keep ineligible items non-actionable; do not create dead links | `OPEN` |
| DOC-000-R005 | IMPORTANT / CONVERSION ROUTE BLOCKER | CONV-DOC is registered but its Brief and live route are not approved | Confirm when `/request-documents/` may appear as an actionable CTA; until then preserve ownership without fake action | `OPEN` |
| DOC-000-R006 | NON-BLOCKING FACT FREEZE | REACH, origin, manufacturing and traceability facts lack approved first-party scope evidence | Keep company/product claims frozen; generic category selection may continue | `OPEN / FROZEN` |
| DOC-000-R007 | IMPORTANT | The eligible-public-item rule and inventory/route state model need project-control review | Approve, revise or reject section 6 before Gate 2 content architecture begins | `OPEN` |
| DOC-000-R008 | PROJECT MAINTENANCE | DOC-000 must consume the latest shared Chrome authority | Current package inherits Global Chrome V0.5 and Production SVG; broader cross-page maintenance remains with project control | `DOC-000 CONSUMPTION UPDATED` |
| DOC-000-R009 | RELEASE BLOCKER, NOT DESIGN BLOCKER | RFQ route readiness was not verified by this task | Keep Global RFQ visible; block release if `RFQ_ROUTE_READY=false` | `OPEN / NOT TESTED` |

No review item is marked `CLOSED`. No Gate is marked approved.

## 10. Gate 0/1 self-check and submission

- [x] Only DOC-000 is handled; no Document child page is started.
- [x] Page ID, URL, type, market, language, priority and keyword state match registry/CSV.
- [x] `NO_PRIMARY_KEYWORD` is preserved; no commercial keyword is invented.
- [x] Individual REACH, TDS/SDS/COA and COO clusters remain with DOC-* child owners.
- [x] Request Documents remains the conversion owner; no form is placed on the Hub.
- [x] TDS, SDS, COA, COO/Origin, Traceability and REACH/Compliance are separated as selection categories without availability claims.
- [x] Inventory zero means zero eligible public items, not proof that no file exists.
- [x] Partial/full inventory states render only evidence- and route-eligible items.
- [x] Route-unavailable behavior produces no dead link, fake card, disabled download or Contact fallback.
- [x] Product, market, regulatory, origin, traceability, route and file evidence gates remain frozen.
- [x] Global Chrome directly inherits V0.5 fixed-RFQ, Production SVG and structural Documents current state with zero visible `CURRENT` text.
- [x] Buyer Clean excludes internal Gate, route, inventory, evidence and approval vocabulary.
- [x] SEO/GEO/Schema cannot output relationships not present and verified in visible content.
- [x] No Header item, Footer route, URL, page identity or adjacent-page responsibility was changed.
- [x] Gate 2–5 review artifacts were created under the 2026-09-01 user authorizations; no Gate 6, codebase, test, deployment or release action was created.
- [x] `D:\16Wordpress_nextjs` was not accessed.
- [x] Gate 0 and Gate 1 are submitted for review and are not self-approved.

### Submission request

Project control/user review is requested for:

1. the Gate 2 content/SEO/CTA contract and the working Documents Playbook;
2. Gate 1 evidence freezes, adjacent-page ownership and category semantics as carried into Gate 2–4;
3. INDEX/NOINDEX direction;
4. eligible-public-item and inventory/route state rules in section 6;
5. when the three child destinations and `/request-documents/` may become actionable;
6. whether Gate 4 direction should be approved, revised or rejected before any new authorization for Gate 5 is considered.

Until a Gate 5 decision is recorded, the page remains `DESIGN_IN_REVIEW`; Gate 2–5 are submitted drafts rather than approved artifacts, and Gate 6 remains unstarted and unauthorized.

### 10.1 Current Gate 2–4 output register

| Scope | Artifact | Current status |
|---|---|---|
| Shared Documents rules | `docs/page-playbooks/DOCUMENT_PLAYBOOK_V0.1.md` | `USER_AUTHORIZED_WORKING_BASELINE / DRAFT_FOR_GATE_4_REVIEW` |
| Gate 2 content | `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.1.md` | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` |
| Gate 2 SEO/GEO/Schema | `pages/documents/04_planning/DOC-000_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` |
| Gate 3 structure | `pages/documents/04_planning/wireframes/DOC-000_WIREFRAME_V0.1.md` | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` |
| Gate 4 direction | `pages/documents/04_planning/visual-directions/DOC-000_VISUAL_DIRECTION_V0.1.md` | `SUBMITTED_FOR_USER_REVIEW / NOT_APPROVED` |
| Review entry | `pages/documents/04_planning/DOC-000_GATE4_REVIEW_SUBMISSION_V0.1.md` | `SUBMITTED_FOR_USER_GATE_4_REVIEW / NOT_APPROVED` |
| Gate 5 full visual | `pages/documents/04_planning/visual-designs/DOC-000_FULL_VISUAL_DESIGN_V0.1.md` | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| Gate 5 review entry | `pages/documents/04_planning/DOC-000_GATE5_REVIEW_SUBMISSION_V0.1.md` | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |

The current body state is inventory zero. Six category rows are informational rather than file relations; body actions are local anchors only. No child route or `/request-documents/` action is eligible.

## 11. External source register

| Source ID | Source | URL | Accessed | Use limitation |
|---|---|---|---|---|
| E-EXT-TRONOX-001 | Tronox — Contact Us / SDS and technical-data routing | `https://www.tronox.com/contact-us/` | 2026-08-30 | Interaction pattern only; not TiO2 Malaysia evidence |
| E-EXT-CHEMOURS-001 | Chemours — Ti-Pure R-105 product information PDF | `https://www.chemours.com/en/-/media/files/tipure/legacy/ti-pure-r-105-tds.pdf` | 2026-08-30 | Grade-specific document pattern only; no text or claims copied |
| E-OFFICIAL-OSHA-001 | OSHA — 1910.1200 Appendix D, Safety Data Sheets | `https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1200AppD` | 2026-08-30 | Generic SDS definition; U.S. jurisdiction only |
| E-OFFICIAL-ECHA-001 | ECHA — REACH registration guidance | `https://echa.europa.eu/en/regulations/reach/registration` | 2026-08-30 | General regulatory context; does not prove company/product status |
| E-OFFICIAL-ICC-001 | ICC — Certificates of Origin | `https://iccwbo.org/business-solutions/certificates-of-origin/` | 2026-08-30 | Generic COO purpose; does not prove a specific origin/certificate |
| E-OFFICIAL-TRADE-001 | International Trade Administration — Documents in an Export Transaction | `https://www.trade.gov/documents-export-transaction` | 2026-08-30 | General destination/shipment variability context only |

## 12. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial DOC-000 Gate 0/1 Brief and compliance/evidence/relationship audit | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 continuation | 2026-09-01 | Synced explicit authority to establish the Documents Playbook and prepare Gate 2–4 review artifacts; Global Chrome advanced to V0.5; Gate 5 remains unstarted | `GATE_4_SUBMITTED_FOR_USER_REVIEW / NOT_APPROVED` |
| V0.1 Gate 5 continuation | 2026-09-01 | Synced explicit `授权Gate5`; completed Desktop/390px, Mobile Menu and restricted-state evidence; Gate 6 remains unauthorized | `GATE_5_SUBMITTED_FOR_USER_REVIEW / NOT_APPROVED` |
