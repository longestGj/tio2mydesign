# MARKET-EU-001 Current Gate 1 Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-EU-001` / `/markets/european-union/` |
| Manifest version / date | V0.1 / 2026-09-04 |
| Status | `CURRENT_GATE1_CANDIDATE / PENDING_USER_APPROVAL` |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Gate 0 | `PASS / USER_SELECTED_PAGE` |
| Gate 1 | `DRAFT_COMPLETE / CONTENT_INTENT_CONFIRMED_PENDING_USER_APPROVAL` |
| Gate 2–10 | `NOT_STARTED / NOT_AUTHORIZED` |
| Decision source | User, 2026-09-04: start Market pages with European Union first |

## 1. Current authority set

| Role | File | SHA-256 | State |
|---|---|---|---|
| Independent Page Brief | `docs/page-briefs/MARKET-EU-001_EUROPEAN_UNION_BRIEF_V0.1.md` | `8EE4044CEB7B20AAE588D56AC06A30483C7A3713E564D6914C777D8071C58AA7` | Current Gate 1 candidate |
| Gate 1 research and evidence | `pages/markets/01_research/MARKET-EU-001_GATE1_RESEARCH_AND_EVIDENCE_V0.1.md` | `50B4467EE01802734E657B8A8A0B102C45A3CA692CF943EBE80C51AADF238624` | Current Gate 1 candidate |
| Page-type standard | `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md` | Not re-hashed by this page Manifest | Approved shared standard |
| Page registry | `docs/architecture/PAGE_REGISTRY_V0.2.md` | Not re-hashed by this page Manifest | Current 57-page identity baseline |
| Keyword mapping | `research/keyword/11_page_keyword_master.csv` | Not re-hashed by this page Manifest | Current implementation mapping |
| Product relation source | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | Not re-hashed by this page Manifest | Current approved relationship baseline |

The two hashed candidate files above are the only MARKET-EU-001 page-specific Gate 1 outputs. They are not approved until the user confirms the content intent.

## 2. Gate 1 decision package

User approval is requested for these exact boundaries:

1. Page position: a supply-evaluation page for EU buyers, without implying an EU-established company, warehouse or stock.
2. Main journey: procurement evaluation first; REACH/document/origin/customs/trade checks support that journey.
3. Fact use: company-provided Malaysia manufacturing/origin may be referenced within the already approved fact scope, but cannot imply tariff exemption or compliance outcome.
4. Trade freshness: no fixed evergreen duty claim; current product classification, origin, TARIC and official measures must be rechecked.
5. Frozen claims: IKHLAS REACH/OR coverage, universal file availability, EU-specific Grade recommendations, local warehouse/stock, price, MOQ, Incoterm and lead time.

## 3. Open issues

| ID | Level | Item | Gate effect |
|---|---|---|---|
| `EU-G1-R01` | IMPORTANT | Prevent primary keyword from implying an EU-established supplier | Gate 2 wording control; no mapping change |
| `EU-G1-R02` | IMPORTANT | 2026 absorption reinvestigation creates trade-content freshness risk | Dated summary only; detailed owner is Resources |
| `EU-G1-R03` | IMPORTANT | No IKHLAS-specific REACH/OR coverage proof | Claim remains frozen; structure can proceed |
| `EU-G1-R04` | IMPORTANT | No independent EU evidence for Grade ranking | No EU-specific recommendation at Gate 2 |
| `EU-G1-R05` | RELEASE BLOCKER | Six country and other downstream routes are not all live | Does not block Gates 1–5; blocks public links/release |
| `EU-G1-R06` | RELEASE BLOCKER | RFQ/Documents production receiver dependencies | Does not block Gates 1–5; blocks Gate 10 release |

None of the open issues requires a page-count, URL, primary-keyword or page-duty change.

## 4. Next-state rule

- If the user approves this Gate 1 package and separately authorizes Gate 2, create the English H1/Hero, module order, buyer answers, CTA hierarchy and SEO/GEO/Schema content skeleton for review.
- Do not interpret Gate 1 approval as approval of final English copy, wireframes, visuals, development, deployment, publication or indexing.
- If the user changes the EU-established wording boundary, trade posture, Malaysia-origin fact use or frozen-claim list, create a new version rather than editing this candidate after approval.

## 5. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-04 | Created the first current Gate 1 candidate pointer and decision package | `PENDING_USER_APPROVAL` |
