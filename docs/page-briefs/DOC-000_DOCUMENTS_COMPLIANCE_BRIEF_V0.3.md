# DOC-000 Documents & Compliance Hub Brief V0.3

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` — Documents & Compliance Hub |
| URL / type | `/documents/` / Navigation hub |
| Keyword / mapping | `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Status | `GATE_0_1_REAUDITED; GATE_2_5_SUBMITTED / NOT_APPROVED` |
| Authority | Latest Document Finder redesign instruction + prior `授权Gate5` |
| Stop | Gate 6+, child pages, development, testing, handoff and release |

## 1. Gate 0/1 delta audit

| Check | Result |
|---|---|
| Registry identity, URL and type | Unchanged / PASS |
| Keyword and mapping | Unchanged / PASS |
| Page role | Refined from guidance-first to Finder + Request Hub within existing Navigation-hub responsibility |
| Approved Grade list | Restricted to the existing 14 values supplied in the current instruction |
| English-only fact | Reconfirmed by user |
| Approved public record inventory | Zero; unchanged |
| Child pages | Not started |
| Request route/workflow live readiness | Not verified; remains a release blocker |
| Header/Footer/visual system | Must remain unchanged |

Gate 0 result: admitted for V0.3 Gate 5 revision. Gate 1 result: structure may proceed, while record-level availability and receiving route remain evidence-gated.

## 2. Buyer and task

Primary users: Procurement/Sourcing, Technical/Formulation, QA/QC, Regulatory/Compliance, Import/Trade and distributor/commercial teams.

Primary task: find documents for a Grade, view/download verified public records, or request what is not publicly accessible.

## 3. Responsibilities

DOC-000 owns:

- Grade + Document Type finder;
- visible record routing;
- concise document-type definitions;
- assisted Request Documents conversion.

It does not own child-page article depth, form implementation, file approval, company-origin proof, regulatory assurance, RFQ capture or a general CMS download library.

## 4. Required states

| State | Buyer behavior |
|---|---|
| Before search | Prompt for Grade and Document Type |
| Public documents found | Show only verified records with full metadata and View/Download |
| Mixed public + request | Public records use View/Download; context-dependent items use Request |
| No public document listed | Explain neutrally and offer Request Documents; no disabled action |

Because the current public set is zero, found/mixed examples are internal field-structure specimens only.

## 5. Conversion and prefill

Page-level assisted conversion: `Request Documents`. Finder action: `Find Documents`. Global Request a Quote remains Header/Footer only.

Category Request links prefill Document Type. Search-result Request carries selected Product/Grade and Document Type. Product-detail entry may prefill Product/Grade. No language field.

## 6. Evidence ceiling

Allowed: English-only fact, general document purposes, COA batch specificity, origin/traceability/compliance context dependency and request non-guarantee.

Not allowed without new record evidence: filename, revision/date, View/Download, all-grade availability, universal origin, complete traceability, REACH coverage, immediate delivery or approval.

## 7. Open dependencies

| ID | Dependency | Effect |
|---|---|---|
| `DOC-000-R002` | Canonical/robots/index decision | SEO `PASS WITH CHANGES` |
| `DOC-000-R003` | Verified public inventory and record metadata | Document Record/Evidence/GEO `PASS WITH CHANGES` |
| `DOC-000-R005` | Request Documents receiving workflow and live route | Conversion `PASS WITH CHANGES`; release blocker |
| `DOC-000-R006` | Per-grade/per-market origin/compliance/traceability evidence | Neutral request-only language |

## 8. Gate record

| Gate | V0.3 output | Status |
|---|---|---|
| 0 | Delta re-admission | Submitted / not approved |
| 1 | Buyer, inventory, evidence and relationship delta | Submitted / not approved |
| 2 | Finder-first content and SEO/GEO/Schema | Submitted / not approved |
| 3 | Desktop/390px wireframes and four states | Submitted / not approved |
| 4 | Professional-tool visual direction | Submitted / not approved |
| 5 | Full visuals, state board and A–K review | Submitted / not approved |
| 6+ | Not started | Unauthorised |
