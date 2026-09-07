# DOC-000 Documents & Compliance Hub Brief V0.5

## 0. Control

| Field | Value |
|---|---|
| Page ID | `DOC-000` |
| Page name | Documents & Compliance Hub |
| URL | `/documents/` |
| Page type | Navigation hub |
| Language | English only |
| Priority | P1 |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Mapping / verification | `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET` |
| Gate | Gate 1 targeted review only |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED / APPROVED` |
| Approval date | 2026-09-01 |
| Approval source | Project-control PASS plus explicit user confirmation and Gate 2 authorization |
| Review ID | `DOC-000-G1-V11-TYPES-01` |
| Stop | No Gate 2–5, child pages, visual work, development, handoff or release |

V0.5 is the current Gate 1 candidate. V0.4 remains preserved as a historical record and is `SUPERSEDED / NOT_CURRENT_CONTROL` because its five-group taxonomy conflicts with the current user decision.

## 1. Page Intent Card

| Required field | Gate 1 candidate intent |
|---|---|
| Audience | Procurement / Sourcing; Technical / R&D; QA / QC; supplier-qualification and origin-review stakeholders evaluating a titanium dioxide product and supplier |
| Buyer problem | The buyer needs to understand which documentation group fits the review need, select the relevant Product Grade and continue to one controlled request without being led to expect a public file library |
| Core message | TiO2 Malaysia provides a structured route to request technical/product, safety, quality/COA, and origin/supplier-qualification documentation for review. The Hub helps the buyer choose context; the Request Documents page receives the application |
| Must include | `DOCUMENT HUB` eyebrow; qualification-first framing; three review-process scenarios; exactly four documentation groups; selector containing all 14 approved Product Grades; Grade-first handoff to `/request-documents/`; English-only service; restrained on-request process language |
| Must exclude | Any fifth formal group; `Other Documentation` as a Hub card; direct download, View/PDF access, file-library framing, inventory or availability claims, approval/delivery promise, response SLA, market selector, language selector, market section, country application logic, single-grade-only presentation, child-page action links and RFQ fields |
| Primary CTA | `Request Documents` → `/request-documents/`; after Product Grade selection, pass the selected Grade for editable prefill |
| Secondary CTA | `NONE`; shared Global Chrome `Request a Quote` remains visible but is not a DOC-000 body CTA |
| Ownership boundary | DOC-000 explains three review scenarios and four documentation groups, collects Product Grade selection and hands off context. `CONV-DOC` owns request capture. DOC-REACH, DOC-TDS and DOC-COO retain registered informational identities but are not started or linked as Hub cards. Product pages own grade facts; About owns company/manufacturing/origin proof; Market pages own country context; Global Chrome owns Header/Mobile Menu/Footer |

## 2. Locked identity and interaction decisions

1. Route remains `/documents/`.
2. Shared Header current key remains `Documents`; `DOCUMENT HUB` is the page eyebrow only.
3. The Hub is qualification-first and has no public download, file inventory or direct-access behavior.
4. The selector contains all 14 approved Product Grades, has no default Grade and passes only the selected Grade to `/request-documents/?product={GRADE}` or an equivalent safe state-transfer mechanism.
5. The receiving Product Grade value must be prefilled and remain editable; receiver readiness is not established by this Brief.
6. The Hub is English only and contains no Market, Destination or Language selector.

## 3. Required qualification model

### 3.1 Review processes

| Review process | Gate 1 purpose boundary |
|---|---|
| Product Evaluation | Explain that technical, product, safety and handling information can support product-suitability evaluation; do not claim a file exists or a product is suitable |
| Quality & Supplier Qualification | Explain that quality, COA-related and supplier information can support qualification and QA review; do not claim a generic or immediately available COA |
| Origin & Supplier Qualification Review | Explain that origin and supplier-qualification information may be requested for scoped review; do not establish product origin, customs treatment, file availability or supplier approval |

### 3.2 Documentation groups

The Buyer Clean Hub taxonomy contains exactly these four groups:

| Group | Buyer-facing purpose | Action rule |
|---|---|---|
| Technical Data & Product Documentation | Identify technical data, specifications and relevant product information that may be needed for evaluation | Informational card only; no card-level link or availability claim |
| Safety Documentation | Identify safety, handling and storage information that may be needed for review | Informational card only; no card-level link or availability claim |
| Quality & COA Documentation | Identify quality and COA-related information that may be needed for QA or lot-context review | Informational card only; no card-level link or availability claim |
| Origin & Supplier Qualification Documentation | Identify origin and supplier-qualification information that may be needed for a scoped purchasing review | Informational card only; no card-level link or availability claim |

No group may use `View related documents`, `View`, `Download`, `Access` or an equivalent action. `Other Documentation` is not a formal Hub group and must not render as a fifth card. The single body conversion is `Request Documents`.

### 3.3 Internal non-render controls

| Candidate capability / taxonomy | Evidence state | Rendering rule |
|---|---|---|
| Regulatory & Compliance Documentation | `NOT_ESTABLISHED` | `DO_NOT_RENDER`; no Hub card, category, count, CTA, prefill, public claim or structured-data relation |
| Other Documentation | `NOT_A_FORMAL_HUB_GROUP` | `DO_NOT_RENDER_AS_HUB_CARD`; may not increase the public group count above four |

This subsection is an internal evidence gate, not Buyer Clean candidate copy.

## 4. Product Grade selector contract

Approved values, in the current product-family order:

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

Rules:

- Default prompt: `Select a product grade`.
- No Grade is preselected.
- All 14 identifiers render once; M-2377 may be an example but is never the only or default value.
- The buyer selects one Grade before the body CTA continues.
- Handoff target: `/request-documents/?product={GRADE}` or equivalent safe state transfer.
- The receiving Product Grade field is prefilled and editable.
- No Market, Destination, Document Type or Document Language selector is allowed on the Hub.
- Grade selection does not prove a matching file, version, approval or delivery state.

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

The retained REACH secondary term and DOC-REACH page identity are search-architecture records only. They do not create a fifth Hub group, a requestable capability, a card, a link or a public availability claim.

## 6. Evidence and claim boundary

| Claim or field | Source status | Gate 1 treatment |
|---|---|---|
| DOC-000 identity, `/documents/`, Navigation hub, `NO_PRIMARY_KEYWORD` | Registry + keyword master | Locked |
| 14 Grade identifiers | PRD V0.4 + registry + keyword master + approved Product Matrix V0.3 | Allowed as selector labels only |
| Three review-process labels and four documentation groups | Current user decision, 2026-09-01 | Candidate content intent; pending named checkpoint |
| English only | Current-stage input | Candidate public statement; no language selector; operational scope must be verified before publication |
| Documentation provided on request | Process intent | Restrained process language only; not proof that every group/Grade has an eligible document |
| Product Grade prefill | Cross-page requirement | Required downstream contract; route/receiver implementation remains unverified |
| Origin / supplier-qualification support | Review-purpose semantics | Actual COO, origin, traceability and supplier evidence remain frozen until verified |
| TDS/SDS/COA/COO files, names, dates and versions | No approved DOC-000 inventory | Frozen; no public records or machine-readable file relationships |
| Response time | No approved SLA | Prohibited; no immediate or fixed-time promise |

## 7. Schema, SEO and GEO boundary

- Schema and machine-readable relationships may express only visible, verified page identity and navigation relationships.
- No file, download, availability, per-Grade document, market coverage or non-rendered capability relation is eligible.
- The four visible groups are navigation concepts, not proof of inventory or applicability.
- DOC-REACH, DOC-TDS and DOC-COO remain separate registered page identities; this Gate 1 task does not start, link, merge or delete them.

## 8. Gate status ledger

| Gate | Current status | Authority |
|---|---|---|
| Gate 0 | Identity retained; no URL/nav/page-count change | Registry, keyword master and user decisions |
| Gate 1 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | Review `DOC-000-G1-V11-TYPES-01` |
| Gate 1 checkpoint | `CONTENT_INTENT_CONFIRMED / APPROVED` | User confirmed 2026-09-01 |
| Gate 2 | `USER_AUTHORIZED / STARTED_SEPARATELY` | User authorized Gate 2 after Gate 1 PASS |
| Gate 3 | `NOT_STARTED_FOR_REBASED_VERSION` | No authorization |
| Gate 4 | `NOT_STARTED_FOR_REBASED_VERSION` | No authorization |
| Gate 5 | `NOT_STARTED_FOR_REBASED_VERSION` | No current visual authority |
| Gate 6+ | `NOT_AUTHORIZED` | None |

## 9. Version record and next-step boundary

| Version | Disposition | Reason |
|---|---|---|
| V0.4 | `HISTORICAL / SUPERSEDED_BY_DOC-000-G1-V11-TYPES-01 / NOT_CURRENT_CONTROL` | Retains the rejected five-group taxonomy |
| V0.5 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED / APPROVED_GATE_1_BASELINE` | Four-group Page Intent Card approved 2026-09-01 |

Gate 1 is closed. The user authorized Gate 2 after project-control PASS; that work is governed by its own Review ID and does not alter this approved Gate 1 record.
