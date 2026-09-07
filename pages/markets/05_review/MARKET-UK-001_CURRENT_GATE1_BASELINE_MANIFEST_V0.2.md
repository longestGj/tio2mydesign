# MARKET-UK-001 Current Gate 1 Baseline Manifest V0.2

## 0. Control

| Field | Value |
|---|---|
| Page ID | `MARKET-UK-001` |
| URL | `/markets/united-kingdom/` |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Gate 1 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Date | 2026-09-05 |
| Manifest role | Current revised Gate 1 candidate pointer; not a user-approved baseline |
| Revision ID | `MARKET-UK-001-G1-REV-01` |
| Prior review | `MARKET-UK-001-G1-PCR-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; superseded for decision by this revised candidate |

## 1. Current authority set

| Artifact | Role | Status |
|---|---|---|
| `docs/page-briefs/MARKET-UK-001_UNITED_KINGDOM_BRIEF_V0.2.md` | Revised independent page Brief and Page Intent Card | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| `pages/markets/01_research/MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.2.md` | Revised keyword/search intent and fact/evidence audit | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| `pages/markets/MARKET_REMAINING_CHILD_PAGES_SERIAL_SCHEDULE_V0.1.md` | Read-only serial schedule and identity normalization | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `docs/architecture/PAGE_REGISTRY_V0.2.md` | Current page identity authority | Existing approved project baseline |
| `research/keyword/11_page_keyword_master.csv` | Current keyword authority | Existing approved project baseline |
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | Sole product relationship authority | User-approved V0.3 baseline |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Shared Global Chrome authority | Project-control approved current authority |

File SHA-256 values are recorded in Section 5 after draft creation and must be re-run after any revision.

## 2. Gate 1 decision package

The candidate package asks project control to review, before user presentation:

1. Page intent: supplier/product evaluation first, then an early but secondary GB/NI routing decision, followed by procurement/regulatory review and an editable RFQ.
2. Positioning: “for UK buyers/procurement”, not “UK-based supplier”.
3. Product boundary: permit exactly six first-version representative grades (`M-350`, `M-510`, `M-896`, `M-200`, `M-108`, `M-210`) using only V0.3-approved global relationships; preserve zero UK-specific recommendation and no hidden full catalogue.
4. Origin boundary: ABOUT/EU page-scoped approvals are recorded, but `SITE_WIDE_CROSS_PAGE_MALAYSIA_ORIGIN_CLAIM_HOLD=OPEN`; Malaysia-origin H1/title/core-message variants remain conditional. Transaction-specific COO, customs and tariff outcomes remain frozen in all cases.
5. Trade boundary: active TRA material stays time-sensitive; detailed ownership remains `RES-TRADE-UK`; neutral verification/link treatment is recommended.
6. Route boundary: all candidate links remain `NOT_VERIFIED_LIVE` for this page until later implementation and QA.
7. Approval request after a new project-control pass: confirm the revised Gate 1 content intent. Gate 2 remains separately unauthorized.

## 3. Open issues

| ID | Issue | Status | Owner / next checkpoint |
|---|---|---|---|
| UK-G1-01 | Supplier/product-first Page Intent with an early secondary GB/NI routing decision | `REVISED_IN_DRAFT_PENDING_PROJECT_CONTROL_REVIEW` | Project control → user |
| UK-G1-02 | Zero UK-specific recommendation with a six-grade representative V0.3 discovery set | `REVISED_IN_DRAFT_PENDING_PROJECT_CONTROL_REVIEW` | Project control → user |
| UK-G1-03 | Gate 2 trade-summary mode | `OPEN / DEFERRED_TO_GATE_2` | UK page + Resources owner |
| UK-G1-04 | Route readiness | `OPEN / LATER_GATE_ROUTE_DEPENDENCY` | Gate 8 implementation / Gate 9 QA |
| UK-G1-05 | RFQ receiver and full workflow | `OPEN / LATER_GATE_CONVERSION_DEPENDENCY` | RFQ owner / Gate 8–9 |
| UK-G1-06 | Project-level Malaysia supplier/manufacturing/origin inheritance for UK | `OPEN / PROJECT_LEVEL_CROSS_PAGE_AUTHORITY_NOT_ESTABLISHED` | Project control/user; blocks origin-qualified H1/title/core message only |
| UK-R01–UK-R07 | Claim, market, trade, product, route and origin controls | OPEN as listed in research audit | Relevant later checkpoints |

No open issue authorizes frozen public content. Evidence gaps freeze only the affected fields.

## 4. Next-state rule

- This revised V0.2 package must first receive a new project-control review; the V0.1 PCR pass does not approve changed product/origin/SEO/GEO scope.
- Only a later explicit user approval, together with a resolved project-level Malaysia-origin authority relationship, may set Gate 1 to `APPROVED / CLOSED` and `CONTENT_INTENT_CONFIRMED_WITH_REVISIONS`.
- Only that user decision may authorize Gate 2 for `MARKET-UK-001`.
- Gate 2 may define content architecture and full copy; it may not imply Gate 3–10 authorization.
- No other Market child page starts while UK is active.
- `MARKET-EU-001` remains untouched in its existing lifecycle.
- No development or access to `D:\16Wordpress_nextjs` is authorized.

## 5. Draft file integrity

| File | SHA-256 | Size bytes |
|---|---|---:|
| `MARKET-UK-001_UNITED_KINGDOM_BRIEF_V0.2.md` | `4a75548971f4f3c1cd60c5e32ac0b879cb62816019deba5ac2b4fde0cd39360a` | 24882 |
| `MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.2.md` | `f189662a5824286fd18de8d16fac724eff31e5db1844ae9b0aac9c6f20d42649` | 24745 |
| `MARKET_REMAINING_CHILD_PAGES_SERIAL_SCHEDULE_V0.1.md` | `d91e2e2f4fc4b0557f87ca41486a3a47226488f7cadc4319b1d0d1e9d3087656` | 4528 |

## 6. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Created current Gate 1 candidate pointer, decision package, open issues and next-state lock. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 PCR sync | 2026-09-05 | Recorded `MARKET-UK-001-G1-PCR-01` as project-control PASS; user approval and Gate 2 authorization remain pending. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.2 | 2026-09-05 | Replaced the V0.1 decision candidate with supplier/product-first intent, six representative grades, origin-authority split and revised SEO/GEO direction; Gate 2 remains unauthorized. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |

## 7. Supersession

This V0.2 Manifest is the current Gate 1 review pointer. V0.1 Brief, audit and Manifest remain preserved as the superseded pre-revision history. No prior project-control pass is represented as approval of the V0.2 changes.
