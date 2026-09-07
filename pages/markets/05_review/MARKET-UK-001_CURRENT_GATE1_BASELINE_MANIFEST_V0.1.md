# MARKET-UK-001 Current Gate 1 Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page ID | `MARKET-UK-001` |
| URL | `/markets/united-kingdom/` |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Gate 1 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Date | 2026-09-05 |
| Manifest role | Current Gate 1 candidate pointer; project-control PASS, not a user-approved baseline |
| Review ID | `MARKET-UK-001-G1-PCR-01` |

## 1. Current authority set

| Artifact | Role | Status |
|---|---|---|
| `docs/page-briefs/MARKET-UK-001_UNITED_KINGDOM_BRIEF_V0.1.md` | Independent page Brief and Page Intent Card | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `pages/markets/01_research/MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.1.md` | Keyword/search intent and fact/evidence audit | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `pages/markets/MARKET_REMAINING_CHILD_PAGES_SERIAL_SCHEDULE_V0.1.md` | Read-only serial schedule and identity normalization | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `docs/architecture/PAGE_REGISTRY_V0.2.md` | Current page identity authority | Existing approved project baseline |
| `research/keyword/11_page_keyword_master.csv` | Current keyword authority | Existing approved project baseline |
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | Sole product relationship authority | User-approved V0.3 baseline |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Shared Global Chrome authority | Project-control approved current authority |

File SHA-256 values are recorded in Section 5 after draft creation and must be re-run after any revision.

## 2. Gate 1 decision package

The candidate package asks project control to review, before user presentation:

1. Page intent: lead with UK supply evaluation, then introduce the GB/NI split early enough to guide application/specification/document/import context and an editable RFQ; do not turn the page into a regulation-first page.
2. Positioning: “for UK buyers/procurement”, not “UK-based supplier”.
3. Product boundary: no named UK-specific grade, application or process recommendation.
4. Trade boundary: active TRA material stays time-sensitive; detailed ownership remains `RES-TRADE-UK`; neutral verification/link treatment is recommended.
5. Route boundary: all candidate links remain `NOT_VERIFIED_LIVE` for this page until later implementation and QA.
6. Approval request after project-control pass: confirm `CONTENT_INTENT_CONFIRMED` and authorize Gate 2 only.

## 3. Open issues

| ID | Issue | Status | Owner / next checkpoint |
|---|---|---|---|
| UK-G1-01 | Page Intent Card: UK procurement evaluation first, with GB/NI as an early important split | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | User decision |
| UK-G1-02 | Zero named UK-specific grade recommendation | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` | User decision |
| UK-G1-03 | Gate 2 trade-summary mode | `OPEN / DEFERRED_TO_GATE_2` | UK page + Resources owner |
| UK-G1-04 | Route readiness | `OPEN / LATER_GATE_ROUTE_DEPENDENCY` | Gate 8 implementation / Gate 9 QA |
| UK-G1-05 | RFQ receiver and full workflow | `OPEN / LATER_GATE_CONVERSION_DEPENDENCY` | RFQ owner / Gate 8–9 |
| UK-R01–UK-R07 | Claim, market, trade, product, route and origin controls | OPEN as listed in research audit | Relevant later checkpoints |

No open issue authorizes frozen public content. Evidence gaps freeze only the affected fields.

## 4. Next-state rule

- This package must first receive project-control review.
- Only a later explicit user approval may set Gate 1 to `APPROVED / CLOSED` and `CONTENT_INTENT_CONFIRMED`.
- Only that user decision may authorize Gate 2 for `MARKET-UK-001`.
- Gate 2 may define content architecture and full copy; it may not imply Gate 3–10 authorization.
- No other Market child page starts while UK is active.
- `MARKET-EU-001` remains untouched in its existing lifecycle.
- No development or access to `D:\16Wordpress_nextjs` is authorized.

## 5. Draft file integrity

| File | SHA-256 | Size bytes |
|---|---|---:|
| `MARKET-UK-001_UNITED_KINGDOM_BRIEF_V0.1.md` | `89692122779fe27b2630aa9ad165d2676681a0c8fa08e663543c6fea30e4fe4b` | 18999 |
| `MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.1.md` | `81f8d8ff3ef6157b0bcffe97e325c6fee9df75314309a297aa331ee6647755f7` | 20424 |
| `MARKET_REMAINING_CHILD_PAGES_SERIAL_SCHEDULE_V0.1.md` | `d91e2e2f4fc4b0557f87ca41486a3a47226488f7cadc4319b1d0d1e9d3087656` | 4528 |

## 6. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Created current Gate 1 candidate pointer, decision package, open issues and next-state lock. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 PCR sync | 2026-09-05 | Recorded `MARKET-UK-001-G1-PCR-01` as project-control PASS; user approval and Gate 2 authorization remain pending. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
