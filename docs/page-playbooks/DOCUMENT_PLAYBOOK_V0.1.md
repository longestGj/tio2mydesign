# TiO2 Malaysia Documents Page Playbook V0.1

## 0. Document control

| Field | Value |
|---|---|
| Document name | Documents Page Playbook |
| Playbook key | `DOCUMENT` |
| Version | V0.1 |
| Created / last updated | 2026-09-01 |
| Scope | DOC-000 Documents & Compliance Hub plus the future DOC-REACH, DOC-TDS and DOC-COO information-page family |
| Current status | `USER_AUTHORIZED_WORKING_BASELINE / DRAFT_FOR_GATE_5_REVIEW` |
| User authority | 2026-09-01 instructions: establish this shared Playbook, prepare DOC-000 through Gate 4, then explicitly authorize DOC-000 Gate 5 |
| Approval boundary | The current instruction authorizes DOC-000 Gate 5 full-visual preparation and submission. It does not approve this Playbook or Gate 2–5 outcomes, start a child page, or authorize Gate 6/7, development or release. |
| Development boundary | Planning, SEO, GEO and visual specification only; no WordPress, Next.js, CMS, code, test, deployment, DNS, indexing or publication work |

This Playbook is the shared professional rule set requested by the user for the Documents page family. It is not permission to start DOC-REACH, DOC-TDS or DOC-COO. Those pages require their own approved Brief and separate task.

## 1. Authority and inherited baselines

Apply inputs in this order:

1. Current explicit user decisions.
2. Root `AGENTS.md`.
3. The page-specific approved or authorised Brief.
4. Current PRD, page registry and `11_page_keyword_master.csv`.
5. This Playbook.
6. Verified company, product, regulatory, origin and document evidence.
7. Research and competitor patterns, which never prove TiO2 Malaysia capabilities.

Shared visual authority:

- `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`.
- `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`.
- `docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md`.
- `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md`.
- `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md`.

Global Chrome is consumed, never re-designed by a Documents task.

## 2. Documents system identity

| Page ID | Page | URL | Type | Primary keyword | Mapping | Verification |
|---|---|---|---|---|---|---|
| `DOC-000` | Documents & Compliance | `/documents/` | Navigation hub | `NO_PRIMARY_KEYWORD` | `PLANNED_ARCHITECTURE` | `NO_DIRECT_KEYWORD_TARGET` |
| `DOC-REACH` | Titanium Dioxide REACH | `/documents/reach/` | Document / compliance page | `titanium dioxide reach registration` | `PROVISIONAL_URL` | `FACT_EVIDENCE_REQUIRED` |
| `DOC-TDS` | TDS, SDS & COA | `/documents/tds-sds-coa/` | Document / compliance page | `titanium dioxide tds` | `PROVISIONAL_URL` | `FACT_EVIDENCE_REQUIRED` |
| `DOC-COO` | Certificate of Origin | `/documents/certificate-of-origin/` | Document / compliance page | `titanium dioxide country of origin certificate` | `PROVISIONAL_URL` | `FACT_EVIDENCE_REQUIRED` |

`CONV-DOC` at `/request-documents/` is not a Document information page. It belongs to `CONVERSION` and owns request capture, validation, privacy, receipt, failure and follow-up states.

## 3. Page-family responsibilities

### 3.1 DOC-000 Hub

The Hub helps a buyer:

1. distinguish document categories;
2. understand which product, destination, language, order or batch context may matter;
3. identify whether an approved information route or controlled request route is available;
4. continue without a dead link or false availability claim.

The Hub does not:

- own an individual document keyword cluster;
- publish a document inventory without evidence;
- embed the Request Documents form;
- prove compliance, origin, traceability or availability;
- promise immediate delivery, downloads or coverage for every grade or market.

### 3.2 DOC-REACH

Future responsibility: explain current, verified REACH-related scope and the appropriate qualified request path. It must identify the relevant legal actor, substance/product scope, market and evidence date. It may not reduce ECHA substance information to a company registration claim.

### 3.3 DOC-TDS

Future responsibility: explain the distinct roles and verified scope of TDS, SDS and COA. It must preserve grade, revision, market/language and batch/order distinctions. TDS typical values, SDS hazard communication and COA batch results must not be collapsed into one generic proof.

### 3.4 DOC-COO

Future responsibility: explain verified origin-document and traceability processes without turning a category description into proof that a specific shipment, certificate, batch or customs outcome exists.

### 3.5 CONV-DOC boundary

`CONV-DOC` alone owns:

- the request form;
- minimum-data fields and validation;
- prefill review and editing;
- privacy acknowledgement;
- submission in progress, receipt, failure and follow-up states.

Submitting a request means only that the request was received for review. It does not mean a document exists, is applicable, is approved for release or has been delivered.

## 4. Buyer and decision model

Primary users:

- procurement and supplier-qualification teams;
- technical and formulation teams;
- EHS and safety teams;
- quality teams;
- regulatory and compliance teams;
- import/export documentation teams.

Primary procurement stage: technical evaluation, supplier qualification and pre-purchase document review.

Every Documents page must help the buyer make at least one concrete decision:

- choose the correct document category;
- identify required context;
- understand public versus controlled access;
- understand evidence scope and freshness;
- choose an eligible information or request path.

## 5. Category semantics and evidence boundaries

| Category | Stable buyer purpose | Context that may affect scope | Prohibited shortcut |
|---|---|---|---|
| TDS | Technical evaluation of a specific grade | Grade, revision and approved technical scope | Treating typical/specification content as universal or current without evidence |
| SDS | Safety, hazard, handling and transport review | Product identity, jurisdiction, language and revision | Treating one SDS as suitable for every market or language |
| COA | Review of analytical results for a defined production lot | Grade, lot, order and issue context | Presenting a generic card as shipment or batch proof |
| COO / Origin | Documentary origin review for a trade or shipment context | Product, shipment/order, destination and certificate type | Presenting category text as proof of Malaysia origin or customs acceptance |
| Traceability | Review of controlled batch or supply-chain records | Product, lot/order and requested traceability depth | Publishing batch history, manufacturing route or origin facts without approval |
| REACH / Compliance | Regulatory-scope assessment | Legal actor, substance identity, grade/use, market and evidence date | Claiming TiO2 Malaysia or every grade is registered/compliant from generic substance information |

These semantics can support neutral navigation. They do not establish inventory, route, release or company capability.

## 6. Evidence and Claim governance

Every public claim requires:

- a stable Claim ID;
- claim type;
- source and evidence date;
- applicable product, market, language, order, shipment or batch scope;
- verification status;
- rendering decision;
- review owner.

Allowed render decisions:

- `RENDER`;
- `RENDER_WITH_QUALIFIER`;
- `CONTROLLED_REQUEST_ONLY`;
- `DO_NOT_RENDER`.

Rules:

1. A competitor download centre proves only an interface pattern, never our inventory.
2. An ECHA substance record does not prove a named supplier, grade or legal entity has registration coverage.
3. A generic COO definition does not prove a product or shipment has Malaysia origin.
4. Product identity does not prove a TDS/SDS/COA exists or is current.
5. Absence from approved public inventory does not prove a document does not exist.
6. Unverified facts fail closed and are omitted from visible content, metadata, ALT, Schema and GEO answers.

## 7. Inventory eligibility and fail-closed behaviour

### 7.1 Eligible public record

A document item, category destination or request action may become actionable only when all applicable gates pass:

- approved page identity and purpose;
- approved URL;
- approved visible copy;
- claim evidence and scope;
- approved public or controlled status;
- verified route readiness;
- approved freshness where time-sensitive;
- structured-data parity with visible content.

### 7.2 State model

| State | Meaning | Buyer Clean behaviour | Machine-readable behaviour |
|---|---|---|---|
| Inventory 0 | Zero records pass every applicable public gate | Show a single neutral category guide and clear process boundary; no empty grid, fake filename or negative existence claim | No `ItemList`, `hasPart`, downloadable-file or document relation |
| Partial inventory | Some records pass every gate | Render only eligible records with visible scope; close gaps without placeholders | Output only the same visible records and order |
| Full inventory | All planned records pass every gate | Render the approved complete set; never expand this to all grades/markets without evidence | Mirror the visible approved set only |
| Controlled request | Disclosure is approved as request-only | Explain the controlled path; show Request Documents only when its route/state contract is eligible | No download relation; request relation only if visible |
| Route unavailable | Evidence or category may exist but destination is not eligible | Remove the action; use neutral natural-language guidance only when needed | Omit the route relation |
| Evidence conflict | Sources disagree or scope cannot be reconciled | Omit the affected claim/item; preserve unaffected structure | Omit affected relation |
| Stale or withdrawn | Currentness gate fails | Remove item, summary, CTA and structured relation atomically | Remove all affected structured output |

No public design may show an ineligible action as disabled, hidden under a placeholder, redirected to Contact or disguised as a download.

## 8. Buyer Clean language

Internal tokens are forbidden in visible copy:

- Gate names and numbers;
- `inventory=0`, `PROVISIONAL_URL`, `NOT_VERIFIED_LIVE`;
- evidence IDs, route flags and approval states;
- `CONTROLLED_REQUEST_ONLY` and workflow-owner terminology;
- internal `CURRENT` status labels.

Natural buyer wording may explain:

- what each document category is used for;
- which context may be required;
- that requests are reviewed individually;
- that receipt is not approval or delivery;
- that no document listings or request link are currently shown on the page.

Forbidden without evidence:

- `available`, `approved`, `verified`, `current` or `download` attached to a file;
- `all grades`, `all markets`, `immediate`, `instant`, response-time promises;
- `REACH compliant`, `Malaysia origin`, `batch traceability` as company/product facts;
- `certificate ready`, `COA available`, `SDS available in every language`.

## 9. SEO and cannibalization

### 9.1 Hub

- Primary keyword remains `NO_PRIMARY_KEYWORD`.
- Secondary category words may appear naturally to support navigation.
- H1, Title and Meta must describe selection and controlled next steps, not target a child keyword.
- Hub must not become an article for REACH, TDS/SDS/COA or COO.

### 9.2 Child-page ownership

- `DOC-REACH` owns the REACH cluster.
- `DOC-TDS` owns TDS/SDS/COA intent.
- `DOC-COO` owns COO/origin-document intent.
- About owns verified company/manufacturing/origin/traceability trust facts.
- Market pages may summarise market context and link to the appropriate owner.
- Product pages may mention grade-specific request context and link to the owner; they do not own generic document intent.
- CONV-DOC owns action/lead capture, not informational queries.

Indexing, Canonical and language decisions remain explicit gates. `NO_PRIMARY_KEYWORD` does not automatically mean `NOINDEX`.

## 10. GEO and Schema

### 10.1 GEO answers

Answer-ready content must be visible, concise and scoped. Suitable stable questions include:

1. Which document category should I choose?
2. Why might the grade, destination, language, order or batch matter?
3. What is the difference between information guidance and a controlled request?
4. What does request receipt mean?

No GEO answer may assert a company-specific document, compliance, origin, traceability or product-document relationship without evidence.

### 10.2 Hub Schema

Candidate page-level types:

- `CollectionPage` or `WebPage`, subject to indexing approval;
- `BreadcrumbList` for visible approved breadcrumb relations.

At Inventory 0:

- no `ItemList`;
- no `hasPart` for ineligible child destinations;
- no `DigitalDocument`, downloadable file, `Product`, `Offer`, certification or compliance relation;
- no FAQ Schema unless the visible answers and current search-engine requirements are separately approved.

For partial/full inventory, structured records must match visible name, order, scope and route exactly.

## 11. Route, CTA and internal-link contract

Each target must independently record:

- mapping status;
- URL approval status;
- content approval status;
- evidence/claim status;
- route live/readiness status;
- public versus controlled status;
- freshness where applicable.

### CTA hierarchy

| Surface | Role | Rule |
|---|---|---|
| Global Header/Footer | Request a Quote | Permanently visible under Global Chrome V0.5; route failure is a release blocker, never a visual-off state |
| Hub Hero | Review document categories | Page-local anchor; no external route dependency |
| Category destination | Review category guidance | Only when child URL/content/route are approved and eligible |
| Controlled request | Request Documents | Only when CONV-DOC workflow and route are approved and eligible |
| Contextual supporting path | Products / Markets / About | Only when the visible context and target are eligible; never a fallback for a failed document route |

Contact is not an RFQ or Request Documents fallback.

## 12. Global Chrome contract

Documents pages consume:

- Desktop Header 84px;
- Mobile Header 64px with `Logo | RFQ | Menu`;
- fixed order `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`;
- Production SVG Logo bindings from Manifest V1.0;
- fixed Header, Mobile Header, Mobile Menu and Footer RFQ;
- Deep Navy Footer with approved content;
- Desktop current item: Bold + 3px Teal underline;
- Mobile Menu current item: Bold + 4px Teal left marker;
- Buyer-visible `CURRENT` word count: 0;
- one accessible current link within the active navigation surface.

No Documents task may add, remove or reorder first-level navigation, modify Footer content, substitute a raster Logo or create a page-specific Logo copy.

## 13. Visual direction

Documents uses an Industrial Documentation Editorial direction:

- white and Soft Background dominate;
- Navy establishes hierarchy;
- Accessible Deep Teal `#007F77` carries actionable emphasis;
- linear file, safety, batch, origin, traceability and compliance icons use one consistent outline family;
- document-category rows favour purpose and scope over decorative cards;
- controlled access is expressed through language and a restrained lock/file motif, not warning red or fake certification seals;
- no stock certificate previews, government seals, factory photos, flags or document screenshots without approved evidence and rights;
- no SaaS dashboard, download library, price grid or ecommerce treatment.

Inventory 0 should look intentional: a structured category guide plus one neutral review-process panel, not an empty CMS shelf.

## 14. Responsive and interaction contract

### Desktop

- 1200–1320px content container.
- Hero may use a 7/5 editorial split with a compact category index, but no fake document preview.
- Category guide may use a two-column 3+3 structure or one editorial list; every row carries purpose and context.
- The zero-inventory/process panel closes the page without excessive blank space.

### Tablet

- Collapse to one or two columns without reordering the semantic sequence.
- Long category names, scope text and route-unavailable copy wrap naturally.
- Essential meaning never depends on hover.

### Mobile / 390px

- Single-column content flow.
- Category rows stack with full readable text.
- All actions and menu rows provide at least 44px logical targets.
- Buyer Clean text is generally at least 14px; body copy uses 16px-level readability.
- No horizontal overflow, clipped filename or button-after-empty-space problem.
- Mobile Menu open retains fixed order and Documents marker without visible status text.

### Required states through Gate 4

- Desktop Inventory 0 direction.
- 390px Inventory 0 direction.
- Mobile Menu open.
- controlled-request item treatment.
- route-unavailable treatment.
- partial and full inventory structural rules, without inventing records.
- long title/filename wrapping.
- no-image/text-only treatment.
- hover and visible keyboard focus.

## 15. Accessibility

- One H1 and continuous heading hierarchy.
- Category purpose and scope remain meaningful outside visual grouping.
- Links and buttons use specific names, not repeated `Learn more`.
- Focus is visible and not colour-only.
- Current navigation is semantic and surface-scoped under Global Chrome V0.5.
- Controlled status is communicated in text, not only by a lock icon.
- Icon-only information is prohibited; decorative icons use empty ALT/hidden semantics.
- Long text, 200% zoom and 390px layouts remain usable.
- Reduced-motion preference is respected; no automatic carousel or pulsing compliance badge.

## 16. Development handoff and read-only QA boundary

Future handoff specifications must require `site_scope=tio2-my` and no cross-site fallback for content, media, navigation, routes, forms, SEO, Schema or cached data. This Playbook does not authorise implementation.

Read-only QA must verify:

- page identity and keyword ownership;
- visible versus structured-data parity;
- evidence and scope per claim;
- inventory, route and stale fail-closed behaviour;
- fixed RFQ and Global Chrome V0.5;
- Production SVG bindings;
- Desktop, Tablet, 390px, keyboard, focus, zoom and overflow;
- no public internal tokens, fake files, dead links or Contact fallback.

## 17. Gate workflow

| Gate | Required Documents-family output |
|---|---|
| Gate 0 | Registry admission, page-specific Brief and Playbook binding |
| Gate 1 | Buyer, evidence, inventory, route, keyword and relationship audit |
| Gate 2 | Exact content architecture, SEO/GEO/Schema, CTA and link contract |
| Gate 3 | Desktop, Tablet and 390px wireframes plus state/interaction matrix |
| Gate 4 | Visual direction, typography/colour/icon rules and key restricted-state mockups |
| Gate 5 | Full Buyer Clean visual designs; requires separate user authorisation |
| Gate 6+ | Project control, handoff, external development, read-only QA and release under separate authority |

Each gate records submission, review, approval source, open items and changed evidence. Submission is never self-approval.

## 18. Current DOC-000 working decisions

| Decision ID | Direction | Status |
|---|---|---|
| DOC-D001 | DOC-000 remains a `NO_PRIMARY_KEYWORD` navigation Hub | `USER_AUTHORIZED_WORKING_BASELINE` |
| DOC-D002 | Hub and CONV-DOC remain strictly separated | `USER_AUTHORIZED_WORKING_BASELINE` |
| DOC-D003 | Current public inventory is zero until an approved inventory exists | `USER_AUTHORIZED_WORKING_BASELINE` |
| DOC-D004 | Ineligible records and routes fail closed without fake cards or Contact fallback | `USER_AUTHORIZED_WORKING_BASELINE` |
| DOC-D005 | TDS/SDS/COA/COO/Origin/Traceability/REACH categories may be explained only at neutral selection depth | `USER_AUTHORIZED_WORKING_BASELINE` |
| DOC-D006 | Global Chrome V0.5 and Production SVG are mandatory; visible `CURRENT` count is zero | `USER_AUTHORIZED_WORKING_BASELINE` |
| DOC-D007 | Gate 5 is authorized for DOC-000 only; Gate 6 is the next hard stop | `USER_AUTHORIZED_WORKING_BASELINE` |

## 19. Open items

| Review ID | Level | Item | Control | Status |
|---|---|---|---|---|
| DOC-R001 | IMPORTANT | Playbook and DOC-000 Gate 2–5 outcomes await user Gate 5 review | Treat all current outputs as review drafts | `OPEN / GATE_5_REVIEW` |
| DOC-R002 | IMPORTANT | DOC-000 indexing, Canonical and robots are not approved | Keep candidate values explicit and gated | `OPEN` |
| DOC-R003 | FACT FREEZE | No approved document inventory/applicability matrix | Inventory 0; no file or availability relation | `OPEN / FROZEN` |
| DOC-R004 | ROUTE FREEZE | DOC-REACH, DOC-TDS and DOC-COO remain provisional and not verified live | No actionable child links | `OPEN / FROZEN` |
| DOC-R005 | ROUTE FREEZE | CONV-DOC is not approved/live | No contextual Request Documents action in current Buyer Clean direction | `OPEN / FROZEN` |
| DOC-R006 | FACT FREEZE | REACH, origin, COO and traceability facts are unverified | Neutral category semantics only | `OPEN / FROZEN` |
| DOC-R007 | RELEASE BLOCKER | RFQ route readiness is not verified here | Fixed RFQ remains visible; block release if false | `OPEN / NOT_TESTED` |

## 20. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Initial Documents family Playbook established by current user authority; defines roles, evidence, inventory, route, SEO/GEO/Schema, Global Chrome, visual and gate contracts | `USER_AUTHORIZED_WORKING_BASELINE / DRAFT_FOR_GATE_4_REVIEW` |
| V0.1 continuation | 2026-09-01 | Synced explicit DOC-000 Gate 5 authorization; no child-page or Gate 6 authority added | `USER_AUTHORIZED_WORKING_BASELINE / DRAFT_FOR_GATE_5_REVIEW` |
