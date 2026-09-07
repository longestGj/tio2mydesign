# MARKET-UK-001 Gate 7 Acceptance and Blockers V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `MARKET-UK-001` / `/markets/united-kingdom/` |
| Date | 2026-09-05 |
| Status | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE` |
| Gate 7 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION` |
| Page lifecycle | `APPROVED_FOR_HANDOFF`; not `HANDED_OFF` |
| Gate 8–10 | `LOCKED / NOT_AUTHORIZED` |

## 1. Gate 7 package acceptance checklist

- [x] Page ID, URL, type, P0, keyword, mapping and verification match Registry/master CSV.
- [x] Gate 5 specification and eight visual/source assets are locked by exact hash.
- [x] Fourteen-module Buyer Clean order and exact fields are mapped.
- [x] Five Application paths and six representative Grade cards have stable Page IDs, labels and URLs.
- [x] PRODUCT V0.3 relation IDs are explicit; Process and UK-specific recommendations remain absent.
- [x] GB/NI REACH and CLP distinctions retain official-source links and release freshness checks.
- [x] Exact COO sentence appears once and is not expanded.
- [x] Dated Trade paragraph and internal Trade Update action remain an atomic disabled state.
- [x] Page, shared, legal and official-source link contracts are explicit.
- [x] Breadcrumb is fixed at 3 items / 2 links + 1 United Kingdom current non-link item with current-page semantics.
- [x] Fixed Global Chrome RFQ is separated from route/form readiness and locked to the shared bare path `/request-a-quote/`; only Hero and Final RFQ use the UK/source contextual query.
- [x] SEO/GEO/Schema and prohibited-output rules are explicit.
- [x] Desktop/768/390 and accessibility behavior are specified.
- [x] CMS/API/component semantic fields are mapped without implementation code.
- [x] `site_scope=tio2-my` isolation covers queries, routes, relations, menus, metadata, media, forms and caches.
- [x] Gate 8 implementation and Gate 9 read-only QA responsibilities are separated.
- [x] Shared production Logo Manifest is referenced without copying SVG assets.
- [x] Project control approved this Gate 7 package under `MARKET-UK-001-G7-PCR-02`.

## 2. Open controls and phase ownership

### 2.1 Gate 8 implementation / Gate 9 release acceptance

| ID | Item | Gate 8 requirement | Gate 9 close evidence | Status |
|---|---|---|---|---|
| `UK-G1-04` | Required internal and external routes | Implement scoped internal routes, anchors and external-link behavior | Response, redirect, Canonical, rendered-link and scope-isolation evidence | `GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `UK-G1-05` | RFQ receiver and workflow | Implement route, editable UK prefill, privacy, validation, error/success and receiver behavior | End-to-end read-only submission-path evidence | `GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `UK-G6-B01` | Runtime metadata, Canonical, Schema, sitemap and `site_scope` | Implement exact Gate 7 fields and scope rules | DOM/head/JSON-LD/sitemap/cache/scope evidence | `GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `UK-G6-B02` | HSE/GOV.UK/TRA freshness | Preserve source references and omit stale conditional content | Same-day or release-day official-source check; content parity evidence | `GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `UK-G6-B03` | Runtime responsive, keyboard, focus, menu, FAQ and form behavior | Implement exact interaction and accessibility contracts | 1440/768/390, keyboard, ARIA and assistive-technology evidence | `GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |

These items do not block Gate 7 package creation or project-control review. They must not be described as already implemented.

### 2.2 Existing evidence boundaries

| ID | Boundary | Current status |
|---|---|---|
| `UK-R01` | UK presence/local supply inference | OPEN; no unsupported UK establishment, stock or logistics claim renders |
| `UK-R02` | GB/NI simplification risk | OPEN; both territory paths and current official-source review remain required |
| `UK-R03` | Trade-status freshness | OPEN; current Buyer Clean uses evergreen copy only |
| `UK-R04` | PRODUCT V0.3 converted into UK recommendation | OPEN; exact six-grade global discovery set only |
| `UK-R05` | Runtime-unverified routes | OPEN as Gate 8/9 phase dependency |
| `UK-R06` | Document scope overstatement | OPEN; one approved COO sentence and scoped request language only |
| `UK-R07` | Malaysia-origin fact expanded into customs or Trade outcome | OPEN; exact approved fact scope only |

## 3. Gate 8 implementation acceptance contract

If separately authorized, the external development project must:

1. isolate all data and behavior under `site_scope=tio2-my`;
2. render the fourteen approved modules in semantic order with exact approved copy;
3. implement five Application and six Grade destinations as normal crawlable anchors;
4. keep Process fields, UK-specific Grade recommendations and M-996/M-2196 comparison absent;
5. render equal GB/NI paths with the five approved official-source targets;
6. render the exact COO sentence once;
7. keep the dated Trade paragraph and internal Trade Update action absent unless every atomic condition passes;
8. keep shared and body RFQ actions visible; use exactly `/request-a-quote/` for Header, Mobile Header, Mobile Menu and Footer, and use the approved UK/source contextual query only for Hero and Final RFQ; treat any broken RFQ behavior as a release blocker;
9. emit one H1, exact metadata, self-Canonical, environment robots and constrained Schema;
10. implement responsive, keyboard, focus, menu, FAQ, target-size and reduced-motion behavior;
11. resolve production Logo assets through the shared Manifest only;
12. avoid all fallback to another site scope.

## 4. Gate 9 read-only QA matrix

| Domain | Required evidence |
|---|---|
| Identity | URL, page ID/source mapping, Title, H1 and Markets current navigation |
| Scope | No cross-scope query, route, relation, menu, media, metadata, cache or form leakage |
| Routes | Every visible internal/external anchor returns approved behavior; redirects and Canonicals match |
| Breadcrumb | Exactly 3 items: Home link, Markets link and United Kingdom current non-link item; `aria-current="page"` or equivalent current-page semantics; no current-page self-link |
| Applications | Five exact destinations, labels and order; no hidden Grade relation |
| Grades | Six exact destinations and V0.3 application labels; zero Process/UK recommendation |
| GB/NI | Visible UK REACH/GB CLP and EU REACH/EU CLP distinction with current official sources |
| Documents | Exact COO sentence once; request scope remains bounded |
| Trade | Evergreen copy present; dated paragraph/internal Update absent unless current atomic state approved |
| RFQ | Header, Mobile Header, Mobile Menu and Footer each resolve exactly to `/request-a-quote/`; Hero and Final RFQ each resolve to `/request-a-quote/?market=United%20Kingdom&source_page=MARKET-UK-001`; editable UK/source prefill works on the body path only |
| SEO | Exact Title/Meta/Canonical/robots/hreflang/sitemap |
| GEO | Seven visible answers maintain approved meaning and source scope |
| Schema | Valid JSON-LD; allowed types only; conditional six-item `ItemList` matches visible links |
| Desktop | 1440 hierarchy, alignment and no crop/overlap |
| Tablet | 768 approved flow and no horizontal overflow |
| Mobile | 390 logical, ≥44px targets, approved typography and no clipping/horizontal scroll |
| Accessibility | Keyboard, focus, anchor targets, Menu Escape/return/trap, `aria-current`, headings, link names and reduced motion |
| Logo | Served SVG keys and hashes match the shared production Manifest; Gate 5 PNG is not a production Logo |

## 5. Release blockers

Any of these blocks release or indexing:

- a required visible route is broken, cross-scope or non-canonical;
- RFQ route, receiver, privacy, validation, error or success behavior is incomplete;
- production Logo does not resolve from the approved owner Manifest;
- unsupported UK presence, stock, registration, logistics, document, Grade-fit or customs claim renders;
- dated Trade content is stale or its internal route/content condition is incomplete;
- PRODUCT Process, comparison or unapproved relation leaks;
- Canonical, robots, sitemap, GEO or Schema diverges from visible content;
- keyboard, focus, Mobile Menu or 390px usability fails;
- any `site_scope` fallback or cache leakage is detected.

## 6. Gate 7 disposition boundary

The initial review `MARKET-UK-001-G7-PCR-01` returned conditionally. Project control then passed and closed P0-01, P1-01 and `MARKET-UK-001-G7-PCR-02`. The package is approved for handoff but has not been handed off. Gate 8–10, other Market pages, development, deployment and publication remain unauthorized.

| ID | Current status |
|---|---|
| `MARKET-UK-001-G7-PCR-01` | `CONDITIONAL_RETURN / SUPERSEDED_BY_PCR-02` |
| `MARKET-UK-001-G7-P0-01` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `MARKET-UK-001-G7-P1-01` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `MARKET-UK-001-G7-PCR-02` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |

## 7. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Created Gate 7 acceptance, Gate 8 implementation requirements, Gate 9 QA matrix and release blockers for MARKET-UK-001. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; Gate 8 locked |
| V0.1 targeted revision | 2026-09-05 | Added separate Gate 9 assertions for shared bare-path and page-body contextual RFQ actions; corrected Breadcrumb acceptance to 3 items / 2 links + 1 current non-link item. | `RESOLVED_IN_DRAFT_PENDING_PROJECT_CONTROL_REVIEW`; `MARKET-UK-001-G7-PCR-02` open |
| V0.1 targeted review PASS | 2026-09-05 | Recorded PCR-02, P0-01 and P1-01 project-control PASS/CLOSED; lifecycle advanced to approved for handoff without handoff or Gate 8 authorization. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION` |
