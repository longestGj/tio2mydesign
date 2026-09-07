# MARKET-UK-001 Current Gate 1 Baseline Manifest V0.4

## 0. Control

| Field | Value |
|---|---|
| Page ID | `MARKET-UK-001` |
| URL | `/markets/united-kingdom/` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Gate 1 | `APPROVED / CLOSED` |
| Gate 2 | `APPROVED / CLOSED` |
| Full-copy checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED = USER_APPROVED / CLOSED` |
| Gate 3 | `AUTHORIZED / IN_PROGRESS` |
| Gate 4–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Date | 2026-09-05 |
| Manifest role | `SUPERSEDED_BY_MARKET-UK-001_CURRENT_GATE1_5_MANIFEST_V0.5`; preserved Gate 1/Gate 2 review history |
| Revision ID | `MARKET-UK-001-G1-REV-03` |
| Prior reviews | `MARKET-UK-001-G1-PCR-01 = HISTORICAL`; `MARKET-UK-001-G1-PCR-02 = CONDITIONAL_RETURN / CLOSED_BY_REVISION`; `MARKET-UK-001-G1-PCR-03 = PROJECT_CONTROL_REVIEW_PASS / CLOSED_BY_USER_GATE1_APPROVAL`; `MARKET-UK-001-G2-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| User approval | 2026-09-05: Gate 1 approved; Gate 2 V0.4 and `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` approved; Gate 3 responsive wireframes authorized; exact MARKET-UK-001 COO availability fact approved; and `MARKET-UK-001-G2-USER-REV-01` direction approved |

## 1. Current authority set

| Artifact | Role | Status |
|---|---|---|
| `docs/page-briefs/MARKET-UK-001_UNITED_KINGDOM_BRIEF_V0.4.md` | Current approved Gate 1 and Gate 2 Brief; Gate 3 authorization record | `APPROVED_GATE_2_BASELINE / GATE_3_AUTHORIZED` |
| `pages/markets/01_research/MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.4.md` | Current approved Gate 1 keyword/search intent and fact/evidence audit | `APPROVED_GATE_1_BASELINE` |
| `pages/markets/04_planning/MARKET-UK-001_GATE2_CONTENT_ARCHITECTURE_V0.4.md` | Current approved Gate 2 baseline; full English copy, SEO/GEO/Schema, CTA/anchor and state contract | `APPROVED_GATE_2_BASELINE` |
| `pages/markets/04_planning/MARKET-UK-001_GATE2_CONTENT_ARCHITECTURE_V0.3.md` | Historical user-directed Gate 2 revision | `HISTORICAL / SUPERSEDED_BY_V0.4_DRAFT` |
| `pages/markets/04_planning/MARKET-UK-001_GATE2_CONTENT_ARCHITECTURE_V0.2.md` | Historical targeted response to `MARKET-UK-001-G2-PCR-01` | `HISTORICAL / SUPERSEDED_BY_V0.3_DRAFT` |
| `pages/markets/04_planning/MARKET-UK-001_GATE2_CONTENT_ARCHITECTURE_V0.1.md` | Superseded first Gate 2 submission | `HISTORICAL / SUPERSEDED_BY_V0.2_DRAFT` |
| `pages/markets/MARKET_REMAINING_CHILD_PAGES_SERIAL_SCHEDULE_V0.1.md` | Read-only serial schedule and identity normalization | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `docs/architecture/PAGE_REGISTRY_V0.2.md` | Current page identity authority | Existing approved project baseline |
| `research/keyword/11_page_keyword_master.csv` | Current keyword authority | Existing approved project baseline |
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | Sole product relationship authority | User-approved V0.3 baseline |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Shared Global Chrome authority | Project-control approved current authority |
| `docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md` | Site-wide Malaysia-origin publication authority | `TIO2MY-MALAYSIA-ORIGIN-SITEWIDE-01 = USER_APPROVED / ACTIVE_SITE_WIDE_PUBLICATION_AUTHORITY` |
| `docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md` | §2.6 evidence-gap decision authority | `APPROVED_PROJECT_GOVERNANCE_BASELINE / ACTIVE` |

File SHA-256 values are recorded in Section 5 after draft creation and must be re-run after any revision.

## 2. Approved Gate 1 package and Gate 2 scope

The user approved the following on 2026-09-05:

1. Page intent: supplier/product evaluation first, then an early but secondary GB/NI routing decision, followed by procurement/regulatory review and an editable RFQ.
2. Positioning: “for UK buyers/procurement”, not “UK-based supplier”.
3. Product boundary: permit exactly six first-version representative grades (`M-350`, `M-510`, `M-896`, `M-200`, `M-108`, `M-210`) using only V0.3-approved global relationships; preserve zero UK-specific recommendation and no hidden full catalogue.
4. Origin boundary: `Malaysia-origin titanium dioxide` is directly authorized site-wide for suitable visible copy and equivalent machine-readable expression. The former cross-page Hold is closed and historical; no additional UK-page fact approval is needed for this exact origin scope.
5. Evidence-gap boundary: separate COO availability or shipment statements remain `PENDING_USER_FACT_CONFIRMATION`; customs acceptance and named tariff/preference/exclusion/exemption/remedy outcomes remain `EXTERNAL_CURRENT_SOURCE_REQUIRED`. These statuses do not block an evidence-safe Gate 1.
6. Trade boundary: active TRA material stays time-sensitive; detailed ownership remains `RES-TRADE-UK`; neutral verification/link treatment is recommended.
7. Route boundary: Gate 2–5 must design the qualified final-reader RFQ, Products, Applications, Documents and supporting paths even while runtime status is `NOT_VERIFIED_LIVE`; Gate 7 specifies, Gate 8 implements and Gate 9/10 verify or block release. No fake links or cross-scope fallback.
8. Gate 2 authorization: content architecture, full copy, SEO, GEO and Schema only; no Gate 3 or development authority.
9. COO fact: `A Certificate of Origin is available upon request.` may appear on MARKET-UK-001 visible and semantically equivalent machine-readable surfaces without expanding to every shipment, customs acceptance or a trade outcome.

## 3. Open issues

| ID | Issue | Status | Owner / next checkpoint |
|---|---|---|---|
| UK-G1-01 | Supplier/product-first Page Intent with an early secondary GB/NI routing decision | `USER_APPROVED / CLOSED` | Approved 2026-09-05 |
| UK-G1-02 | Zero UK-specific recommendation with a six-grade representative V0.3 discovery set | `USER_APPROVED / CLOSED` | Approved 2026-09-05 |
| UK-G1-03 | Gate 2 trade-summary mode | `RESOLVED_IN_GATE_2_DRAFT_PENDING_PROJECT_CONTROL_REVIEW` | Evergreen official-source guidance plus conditional dated paragraph / Resource link |
| UK-G1-04 | Route readiness | `OPEN / LATER_GATE_ROUTE_DEPENDENCY` | Gate 8 implementation / Gate 9 QA |
| UK-G1-05 | RFQ receiver and full workflow | `OPEN / LATER_GATE_CONVERSION_DEPENDENCY` | RFQ owner / Gate 8–9 |
| UK-G1-06 | Site-wide Malaysia-origin publication authority for the UK page | `USER_APPROVED / CLOSED` | `TIO2MY-MALAYSIA-ORIGIN-SITEWIDE-01`; exact approved origin scope may render |
| UK-G1-07 | Decide whether Gate 2 may state `A Certificate of Origin is available upon request.` | `USER_APPROVED / CLOSED` | Approved 2026-09-05 for MARKET-UK-001 only; no scope expansion |
| MARKET-UK-001-G1-PCR-03 | Project-control review of the V0.4 Gate 1 package | `PROJECT_CONTROL_REVIEW_PASS / CLOSED_BY_USER_GATE1_APPROVAL` | User approved Gate 1 on 2026-09-05 |
| UK-G2-01 | Complete Gate 2 content architecture, full copy, SEO/GEO/Schema, CTA and conditional-state review | `USER_APPROVED / CLOSED` | User approved Gate 2 and authorized Gate 3 responsive wireframes on 2026-09-05 |
| MARKET-UK-001-G2-PCR-01 | Buyer Clean positive-language and Documents/Origin deduplication review | `RESOLVED_IN_V0.2_DRAFT_PENDING_PROJECT_CONTROL_REVIEW` | P1-01/P1-02/P1-03 revised; Gate 2 remains unapproved |
| MARKET-UK-001-G2-USER-REV-01 | User-approved external-review direction for the Gate 2 candidate | `USER_APPROVED_DIRECTION / IMPLEMENTED_IN_V0.3_DRAFT_PENDING_PROJECT_CONTROL_REVIEW` | Five Application paths, GB/NI REACH + CLP, exact headings/Meta, simplified grade cards and corrected `LocalBusiness` rationale; no Gate 1 reopening |
| MARKET-UK-001-G2-PCR-02 | Applications-first reading path and current-content Offer/inventory/delivery Schema semantics | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | Hero/Direct Answer → Applications → Grades; anchor/a11y/GEO aligned; no new fact or Gate authority |
| UK-R01–UK-R07 | Claim, market, trade, product, route and origin controls | OPEN as listed in research audit | Relevant later checkpoints |

No open issue authorizes unsettled public content. Under `AGENTS.md` §2.6, missing internal evidence routes an exact proposed statement to user decision; it does not create a permanent prohibition by itself.

## 4. Next-state rule

- Gate 1 is `APPROVED / CLOSED`; `CONTENT_INTENT_CONFIRMED_WITH_REVISIONS` is the approved checkpoint.
- Gate 2 V0.4 is the user-approved Gate 2 baseline.
- `FULL_COPY_AND_MODULE_ORDER_CONFIRMED = USER_APPROVED / CLOSED` on 2026-09-05.
- Gate 3 responsive wireframes are `AUTHORIZED / IN_PROGRESS`; Gate 4–10 remain `NOT_STARTED / NOT_AUTHORIZED`.
- No other Market child page starts while UK is active.
- `MARKET-EU-001` remains untouched in its existing lifecycle.
- No development or access to `D:\16Wordpress_nextjs` is authorized.

## 5. Draft file integrity

| File | SHA-256 | Size bytes |
|---|---|---:|
| `MARKET-UK-001_UNITED_KINGDOM_BRIEF_V0.4.md` | `10038eb9e248f09996254bc4c4009a5fd0868fce4737a03afb483d4ecb960af8` | 37036 |
| `MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.4.md` | `7f212755b074e706a6302b42db2afdaa566b5fc14d028a55a3849d748674b398` | 30864 |
| `MARKET-UK-001_GATE2_CONTENT_ARCHITECTURE_V0.4.md` | `99f2eaecbd84e0c734a4ca0e40b2e12fd9b93d756784f19a21a2334b0fe4eb35` | 65241 |
| `MARKET-UK-001_GATE2_CONTENT_ARCHITECTURE_V0.3.md` | `4375dcd42bdfe28e5ad3fa842833db6bff0a3c411c745a84a001812ac7d847bf` | 58835 |
| `MARKET-UK-001_GATE2_CONTENT_ARCHITECTURE_V0.2.md` | `148574977b913902ed4b2e86541565c321c0f6f297c5962d65e92f12b1e4253e` | 45040 |
| `MARKET-UK-001_GATE2_CONTENT_ARCHITECTURE_V0.1.md` | `297e8af434806ef6eacf0c56f82de0ee3dcfdf31a6a8c7ad490a436ee866679e` | 36516 |
| `EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md` | `6968c6ff8cb2282aa6403653639ff554e1ecfb3a469aec5d8701e58df415f2e1` | 4828 |
| `MARKET_REMAINING_CHILD_PAGES_SERIAL_SCHEDULE_V0.1.md` | `d91e2e2f4fc4b0557f87ca41486a3a47226488f7cadc4319b1d0d1e9d3087656` | 4528 |

## 6. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Created current Gate 1 candidate pointer, decision package, open issues and next-state lock. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 PCR sync | 2026-09-05 | Recorded `MARKET-UK-001-G1-PCR-01` as project-control PASS; user approval and Gate 2 authorization remain pending. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.2 | 2026-09-05 | Replaced the V0.1 decision candidate with supplier/product-first intent, six representative grades, origin-authority split and revised SEO/GEO direction; Gate 2 remains unauthorized. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.3 | 2026-09-05 | Targeted revision for `MARKET-UK-001-G1-PCR-02` P0-01/P1-01: made origin Hold field-specific/non-blocking and locked final-reader design versus later runtime readiness responsibilities. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.4 | 2026-09-05 | Consumed the user-approved site-wide Malaysia-origin authority and §2.6 evidence-gap register; removed the superseded origin Hold, promoted origin SEO/GEO/Schema direction, and retained supplier/product, six-grade, GB/NI, trade and route controls. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.4 PCR sync | 2026-09-05 | Recorded `MARKET-UK-001-G1-PCR-03` as project-control PASS with no blocking item; user Gate 1 approval and any Gate 2 authorization remain pending. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.4 user Gate 1 / Gate 2 authorization sync | 2026-09-05 | Recorded Gate 1 approval, `CONTENT_INTENT_CONFIRMED_WITH_REVISIONS`, Gate 2 authorization and page-scoped approval of `A Certificate of Origin is available upon request.`; linked the new Gate 2 V0.1 draft. | `GATE_1_APPROVED / GATE_2_IN_PROGRESS` |
| Gate 2 V0.2 pointer sync | 2026-09-05 | Recorded `MARKET-UK-001-G2-PCR-01` targeted return, promoted V0.2 as the current Gate 2 draft and retained V0.1 as the immutable review submission. | `RESOLVED_IN_DRAFT_PENDING_PROJECT_CONTROL_REVIEW` |
| Gate 2 V0.3 pointer sync | 2026-09-05 | Recorded user-approved `MARKET-UK-001-G2-USER-REV-01`, promoted V0.3 as the current Gate 2 draft, and retained V0.1/V0.2 as immutable history. | `USER_APPROVED_DIRECTION / DRAFT_PENDING_PROJECT_CONTROL_REVIEW` |
| Gate 2 V0.4 pointer sync | 2026-09-05 | Recorded `MARKET-UK-001-G2-PCR-02`, promoted V0.4 as the current targeted revision and retained V0.1–V0.3 as immutable history. | `RESOLVED_IN_V0.4_DRAFT_PENDING_PROJECT_CONTROL_REVIEW` |
| Gate 2 V0.4 PCR pass sync | 2026-09-05 | Recorded `MARKET-UK-001-G2-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; retained V0.4 as the current Gate 2 final candidate pending user approval. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 2 approval / Gate 3 authorization sync | 2026-09-05 | Recorded the user's approval of Gate 2 V0.4 and `FULL_COPY_AND_MODULE_ORDER_CONFIRMED`; authorized only Gate 3 responsive wireframes and retained all later Gate, child-page and development locks. | `GATE_2_APPROVED / GATE_3_IN_PROGRESS` |
| Manifest supersession | 2026-09-05 | Preserved this V0.4 file as Gate 1/Gate 2 review history and promoted `MARKET-UK-001_CURRENT_GATE1_5_MANIFEST_V0.5.md` as the sole current Gate 1–5 pointer for the Gate 3 candidate. | `SUPERSEDED / HISTORICAL` |

## 7. Supersession

This V0.4 Manifest is preserved as Gate 1/Gate 2 review history and is superseded by `MARKET-UK-001_CURRENT_GATE1_5_MANIFEST_V0.5.md` as the sole current Gate 1–5 pointer. V0.1–V0.3 Briefs, audits and Manifests remain preserved as earlier review history. Gate 2 V0.4 remains the approved content baseline; this historical Manifest is not a Gate 3 baseline, handoff or later-Gate authorization.
