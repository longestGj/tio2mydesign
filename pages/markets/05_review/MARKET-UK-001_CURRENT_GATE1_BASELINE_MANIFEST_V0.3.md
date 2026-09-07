# MARKET-UK-001 Current Gate 1 Baseline Manifest V0.3

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
| Revision ID | `MARKET-UK-001-G1-REV-02` |
| Prior reviews | `MARKET-UK-001-G1-PCR-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; `MARKET-UK-001-G1-PCR-02 = CONDITIONAL_RETURN / TARGETED_REVISION_REQUIRED` |

## 1. Current authority set

| Artifact | Role | Status |
|---|---|---|
| `docs/page-briefs/MARKET-UK-001_UNITED_KINGDOM_BRIEF_V0.3.md` | Targeted-revision Brief and Page Intent Card | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| `pages/markets/01_research/MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.3.md` | Targeted-revision keyword/search intent and fact/evidence audit | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
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
4. Origin boundary: ABOUT/EU page-scoped approvals are recorded, but `SITE_WIDE_CROSS_PAGE_MALAYSIA_ORIGIN_CLAIM_HOLD=OPEN`; the Hold freezes only Malaysia-origin H1/Title/Core Message/body/GEO/Schema variants and does not block approval of the evidence-safe Gate 1 or later explicit Gate 2 authorization. Transaction-specific COO, customs and tariff outcomes remain frozen in all cases.
5. Trade boundary: active TRA material stays time-sensitive; detailed ownership remains `RES-TRADE-UK`; neutral verification/link treatment is recommended.
6. Route boundary: Gate 2–5 must design the qualified final-reader RFQ, Products, Applications, Documents and supporting paths even while runtime status is `NOT_VERIFIED_LIVE`; Gate 7 specifies, Gate 8 implements and Gate 9/10 verify or block release. No fake links or cross-scope fallback.
7. Approval request after a new project-control pass: confirm the revised Gate 1 content intent; the user may also separately authorize Gate 2 while the origin Hold remains open.

## 3. Open issues

| ID | Issue | Status | Owner / next checkpoint |
|---|---|---|---|
| UK-G1-01 | Supplier/product-first Page Intent with an early secondary GB/NI routing decision | `REVISED_IN_DRAFT_PENDING_PROJECT_CONTROL_REVIEW` | Project control → user |
| UK-G1-02 | Zero UK-specific recommendation with a six-grade representative V0.3 discovery set | `REVISED_IN_DRAFT_PENDING_PROJECT_CONTROL_REVIEW` | Project control → user |
| UK-G1-03 | Gate 2 trade-summary mode | `OPEN / DEFERRED_TO_GATE_2` | UK page + Resources owner |
| UK-G1-04 | Route readiness | `OPEN / LATER_GATE_ROUTE_DEPENDENCY` | Gate 8 implementation / Gate 9 QA |
| UK-G1-05 | RFQ receiver and full workflow | `OPEN / LATER_GATE_CONVERSION_DEPENDENCY` | RFQ owner / Gate 8–9 |
| UK-G1-06 | Project-level Malaysia supplier/manufacturing/origin inheritance for UK | `OPEN / PROJECT_LEVEL_CROSS_PAGE_AUTHORITY_NOT_ESTABLISHED / NON_BLOCKING_TO_EVIDENCE_SAFE_GATE_1_2` | Blocks only origin-qualified H1/Title/Core Message/body/GEO/Schema variants |
| UK-R01–UK-R07 | Claim, market, trade, product, route and origin controls | OPEN as listed in research audit | Relevant later checkpoints |

No open issue authorizes frozen public content. Evidence gaps freeze only the affected fields.

## 4. Next-state rule

- This revised V0.3 package must first receive a new project-control review; the earlier PCR results do not approve the V0.3 targeted changes.
- A later explicit user approval may set the current evidence-safe Gate 1 to `APPROVED / CLOSED` and `CONTENT_INTENT_CONFIRMED_WITH_REVISIONS` while the Malaysia-origin Hold remains open.
- Only that user decision may authorize Gate 2 for `MARKET-UK-001`.
- Gate 2 may define content architecture and full copy; it may not imply Gate 3–10 authorization.
- No other Market child page starts while UK is active.
- `MARKET-EU-001` remains untouched in its existing lifecycle.
- No development or access to `D:\16Wordpress_nextjs` is authorized.

## 5. Draft file integrity

| File | SHA-256 | Size bytes |
|---|---|---:|
| `MARKET-UK-001_UNITED_KINGDOM_BRIEF_V0.3.md` | `c89967b43d7be3e22daf7f4cce867aff46d4d355a70f6f7f39d2ddd199dc7655` | 26712 |
| `MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.3.md` | `4cf0434d615590a72303a892bbe8680f36c5d9d15f93f08a4307970c11e2498d` | 26589 |
| `MARKET_REMAINING_CHILD_PAGES_SERIAL_SCHEDULE_V0.1.md` | `d91e2e2f4fc4b0557f87ca41486a3a47226488f7cadc4319b1d0d1e9d3087656` | 4528 |

## 6. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Created current Gate 1 candidate pointer, decision package, open issues and next-state lock. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 PCR sync | 2026-09-05 | Recorded `MARKET-UK-001-G1-PCR-01` as project-control PASS; user approval and Gate 2 authorization remain pending. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.2 | 2026-09-05 | Replaced the V0.1 decision candidate with supplier/product-first intent, six representative grades, origin-authority split and revised SEO/GEO direction; Gate 2 remains unauthorized. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.3 | 2026-09-05 | Targeted revision for `MARKET-UK-001-G1-PCR-02` P0-01/P1-01: made origin Hold field-specific/non-blocking and locked final-reader design versus later runtime readiness responsibilities. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |

## 7. Supersession

This V0.3 Manifest is the current Gate 1 review pointer. V0.1 and V0.2 Briefs, audits and Manifests remain preserved as superseded review history. No prior project-control result is represented as approval of the V0.3 changes.
