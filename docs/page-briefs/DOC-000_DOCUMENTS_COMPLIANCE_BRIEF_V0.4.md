# DOC-000 Documents & Compliance Hub Brief V0.4

## 0. Control

| Field | Value |
|---|---|
| Page ID | `DOC-000` |
| Page name | Documents & Compliance Hub |
| URL | `/documents/` |
| Page type | Navigation hub |
| Language | English |
| Priority | P1 |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Mapping / verification | `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET` |
| Gate | Gate 1 targeted rebaseline only |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Review ID | `DOC-000-G1-V11-REB-01` |
| Stop | No Gate 2–5, child pages, development, handoff or release |

This Brief is the new Gate 1 candidate created from the user-authorized V1.1 input. It does not approve the content intent. V0.1–V0.3 Briefs and all earlier Gate 2–5 outputs remain preserved as historical records but do not control the new version while rework is pending.

## 1. Page Intent Card

| Required field | Gate 1 candidate intent |
|---|---|
| Audience | Procurement / Sourcing; Technical / R&D; QA / QC; Regulatory / Compliance teams evaluating a titanium dioxide product and supplier |
| Buyer problem | The buyer needs to understand which documentation groups can support product and supplier qualification, select the relevant Product Grade, and continue to one controlled request without being misled into expecting a public download library |
| Core message | TiO2 Malaysia provides a structured route to request product-, quality-, safety-, regulatory-, origin- and supplier-qualification documentation for review; the Hub helps the buyer choose context, while the Request Documents page receives the application |
| Must include | `DOCUMENT HUB` eyebrow; qualification-first framing; three review-process scenarios; five documentation groups; selector containing all 14 approved Product Grades; Grade-first handoff to `/request-documents/`; English-only service; explanation that documentation is provided on request |
| Must exclude | Direct download, View/PDF access, file-library framing, document inventory, fixed file availability, universal regulatory coverage, immediate approval/delivery, response SLA, market selector, destination-based document logic, document-language selector, market section, country application logic, a single-grade-only presentation, `View related documents`, child-page action links and RFQ fields |
| Primary CTA | `Request Documents` → `/request-documents/`; after Product Grade selection, pass the selected Grade for editable prefill |
| Secondary CTA | `NONE`; shared Global Chrome `Request a Quote` remains visible but is not a DOC-000 body CTA |
| Ownership boundary | DOC-000 explains review scenarios and documentation groups, collects Product Grade selection and hands off context. `CONV-DOC` owns request capture. DOC-REACH, DOC-TDS and DOC-COO retain their registered informational identities but are not started or linked from the five Hub cards in this rebaseline. Product pages own grade technical facts; About owns company/manufacturing/origin proof; Market pages own country context; Global Chrome owns Header/Mobile Menu/Footer |

## 2. Confirmed conflict decisions

These three decisions are already supplied as current user authority and are not reopened by this Gate 1 draft:

1. DOC-000 remains at `/documents/`; V1.1's `/document-hub/` suggestion is rejected for this project.
2. The shared Header label remains `Documents`; `DOCUMENT HUB` is allowed only as the page eyebrow.
3. When the V1.1 Markdown and its reference image disagree, V1.1 controls copy, fields, process and page behavior; the image is layout reference only.

All other Page Intent Card content remains pending project-control review and user confirmation at the named checkpoint.

## 3. Required qualification model

### 3.1 Review processes

| Review process | Gate 1 purpose boundary |
|---|---|
| Product Evaluation | Explain that technical, safety and handling information can support product-suitability and application evaluation; do not claim a specific file exists or a product is suitable |
| Quality & Supplier Qualification | Explain that quality, COA-related and supplier information can support qualification and QA review; do not claim a generic or immediately available COA |
| Regulatory & Origin Review | Explain that regulatory, compliance, origin and supplier-qualification documentation can support review; do not establish registration, market applicability, product origin or customs treatment |

### 3.2 Documentation groups

| Group | Buyer-facing purpose | Action rule |
|---|---|---|
| Technical Data & Product Documentation | Technical data sheets, product specifications and relevant technical information | Informational card only; no card-level link |
| Safety Documentation | Available safety, handling and storage documentation | Informational card only; no card-level link |
| Quality & COA Documentation | Product quality documentation and COA-related information, subject to relevant context | Informational card only; no card-level link |
| Regulatory & Compliance Documentation | Documentation supporting regulatory and compliance review, subject to scope | Informational card only; no card-level link |
| Origin & Supplier Qualification Documentation | Documentation supporting Malaysia-origin review and supplier qualification requirements, subject to evidence and context | Informational card only; no card-level link |

No group may use `View related documents`, `View`, `Download`, `Access`, or any equivalent action. The single body conversion is `Request Documents`.

## 4. Product Grade selector contract

The selector consumes identifiers only from the current approved product master; it does not import or imply application, process, performance, origin, document availability or compliance relationships.

Approved selector values, in the current product-family order:

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

Rules:

- Default prompt: `Select a product grade`.
- No Grade is preselected on the Hub.
- M-2377 may appear as an interaction example but may not be the only or default Grade.
- The user selects one Grade before the body CTA can continue.
- The handoff target is `/request-documents/?product={GRADE}` or an equivalent safe state-transfer mechanism.
- The receiving Product Grade field must be prefilled and remain editable; this is a cross-page contract, not an implementation performed by DOC-000.
- No Market, Destination or Document Language selector is allowed on the Hub.

## 5. Keyword, intent and cannibalization contract

| Field | Value |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Secondary keywords | `TDS | SDS | COA | COO | REACH` |
| Search intent | `N` — navigation / documentation-support selection |
| Buyer stage | Technical Evaluation / Supplier Qualification |
| Source clusters | `COMP-01 | COMP-02 | COMP-03` |
| Page role | Route buyers from qualification needs and Product Grade selection to the controlled Request Documents workflow |
| Excluded keywords | Individual document primary terms; download/view/PDF-library terms; country supplier terms; exact grade primary terms |
| Cannibalization boundary | DOC-REACH owns REACH intent; DOC-TDS owns TDS/SDS/COA intent; DOC-COO owns COO/origin-document intent; Grade pages own exact model terms; DOC-000 owns navigation, qualification framing, Grade selection and handoff only |

No new keyword or quantitative search metric is introduced in this rebaseline.

## 6. Evidence and claim boundary

| Claim or field | Source status | Gate 1 treatment |
|---|---|---|
| DOC-000 identity, `/documents/`, Navigation hub, `NO_PRIMARY_KEYWORD` | Registry + keyword master | Locked |
| 14 Grade identifiers | PRD V0.4 + registry + keyword master + approved Product Matrix V0.3 | Allowed as selector labels only |
| Three review-process labels and five documentation groups | V1.1 user-authorized design input | Candidate content intent; pending checkpoint confirmation |
| English only | V1.1 current-stage input | Candidate public statement; no language selector; verify operational scope before publication |
| Documentation available on request | V1.1 process intent | Allowed only as restrained process language; not proof that every group/Grade has an eligible document |
| Product Grade prefill | V1.1 cross-page requirement | Required downstream behavior; route/receiver implementation remains unverified |
| Malaysia-origin supporting documentation | Project positioning + V1.1 | May describe the review purpose; actual COO/origin availability, product applicability and customs effect remain frozen |
| REACH/compliance coverage | No approved record/applicability inventory | Frozen; no registration, market or Grade coverage claim |
| TDS/SDS/COA/COO files, names, dates, versions | No approved DOC-000 inventory | Frozen; no records or machine-readable file relationships |
| Response time | No approved SLA | Prohibited; `1–2 business days` and equivalent promises must not render |

## 7. Gate status ledger

| Gate | Current status | Current authority |
|---|---|---|
| Gate 0 | Identity retained; no URL/nav/page-count change | Registry, keyword master and current user conflict decisions |
| Gate 1 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` | This V0.4 Brief plus the Gate 1 audit package |
| Gate 1 checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` | User decision required after project-control review |
| Gate 2 | `NOT_STARTED_FOR_REBASED_VERSION` | Earlier Gate 2 files are historical/superseded pending rework |
| Gate 3 | `NOT_STARTED_FOR_REBASED_VERSION` | Earlier wireframes are historical/superseded pending rework |
| Gate 4 | `NOT_STARTED_FOR_REBASED_VERSION` | Earlier visual directions are historical/superseded pending rework |
| Gate 5 | `NOT_STARTED_FOR_REBASED_VERSION` | Earlier full visuals/assets are historical/superseded pending rework |
| Gate 6+ | `NOT_AUTHORIZED` | None |

## 8. Open decisions and next-step boundary

Project control is requested to review this Page Intent Card, evidence boundary and historical-supersession treatment. The user must then confirm or revise the content intent. No Gate 2 work may begin until a separate authorization follows the checkpoint decision.

