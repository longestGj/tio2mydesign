# PRODUCT-000 Route and Availability Audit V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Gate | Gate 1 / Gate 2 routing dependency |
| Version | V0.1 |
| Date | 2026-08-29 |
| Status | `APPROVED_ROUTE_GATE_BASELINE` |
| Source of truth | `PAGE_REGISTRY_V0.1.md`, `11_page_keyword_master.csv`, `00_PROJECT_STATUS.md` |
| Implementation rule | Use Page ID/route key; resolve only after destination is approved and live |
| Approval record | 2026-08-29: project-control re-review PASS; user approved Route Audit V0.1 as the current routing-gate baseline |

This audit records routing intent without turning planned or provisional paths into permanent links. No destination in this table is treated as live merely because it appears in the 54-page registry.

## 1. Current Route Status Rule

`00_PROJECT_STATUS.md` confirms that Products architecture is approved, Applications and Documents remain planned/provisional, Conversion workflows remain to be designed, and external development is managed separately. No accessible implementation or live status was supplied for these destinations.

Therefore:

- `route_live = false` for PRODUCT-000 planning until the external development project supplies a verified live route.
- Content architecture may specify destination Page IDs and anchor-copy direction.
- Public links do not render until route resolution confirms the approved live canonical.
- No other `site_scope` may supply a fallback route or content target.
- A provisional path in the keyword master is research context, not a hard-coded permanent URL.

## 2. Route Matrix

| Route purpose | Page ID / route key | Registry mapping state | Current live state | PRODUCT-000 planning use | Public render condition |
|---|---|---|---|---|---|
| Chloride process | `PRODUCT-PROC-CL` | `APPROVED_PRD_V0.3` | `NOT_VERIFIED_LIVE` | Process Route card and internal relationship | Link only after this Page ID resolves live |
| Sulfate process | `PRODUCT-PROC-SU` | `APPROVED_PRD_V0.3` | `NOT_VERIFIED_LIVE` | Process Route card and internal relationship | Link only after this Page ID resolves live |
| Applications hub | `APP-000` | `PLANNED_ARCHITECTURE` | `NOT_VERIFIED_LIVE` | Support Path; no hard-coded path | Link only after URL approval and live verification |
| Coatings application | `APP-COAT` | `PROVISIONAL_URL` | `NOT_VERIFIED_LIVE` | Optional no-result/support context; not required for M-350 grade link | Link only after URL approval and live verification |
| Plastics application | `APP-PLAS` | `PROVISIONAL_URL` | `NOT_VERIFIED_LIVE` | Optional no-result/support context | Link only after URL approval and live verification |
| Masterbatch application | `APP-MB` | `PROVISIONAL_URL` | `NOT_VERIFIED_LIVE` | Optional no-result/support context | Link only after URL approval and live verification |
| Printing Inks application | `APP-INK` | `PROVISIONAL_URL` | `NOT_VERIFIED_LIVE` | Optional no-result/support context; not required for M-350 grade link | Link only after URL approval and live verification |
| Paper application | `APP-PAPER` | `PROVISIONAL_URL` | `NOT_VERIFIED_LIVE` | Optional Paper no-result context | Link only after URL approval and live verification |
| Documents hub | `DOC-000` | `PLANNED_ARCHITECTURE` | `NOT_VERIFIED_LIVE` | Support Path; no availability claim | Link only after URL approval and live verification |
| Request Documents | `CONV-DOC` | `PLANNED_CONVERSION` | `NOT_VERIFIED_LIVE` | Not a primary PRODUCT-000 CTA | Link only after workflow approval and live verification |
| Markets hub | `MARKET-000` | `APPROVED_NAVIGATION_HUB` | `NOT_VERIFIED_LIVE` | Support Path; no market-support promise | Link only after this Page ID resolves live |
| Request a Quote | `CONV-RFQ` | `PLANNED_CONVERSION` | `NOT_VERIFIED_LIVE` | Header, Hero and Final RFQ destination contract | CTA requires approved workflow and live route before public release |

## 3. Stable Product Destinations

The 14 Grade Page IDs and URLs are approved and fixed by the current task. They remain the only direct product paths written explicitly in the PRODUCT-000 directory specification. External development must still verify that each route is live before page release.

M-2377 uses its approved Grade URL only. Its directory link carries no internal status, application, process, recommendation or difference label.

## 4. Module Routing Contract

| Module | Target keys | Planning behavior | Public behavior before live resolution |
|---|---|---|---|
| GLOBAL_HEADER | `CONV-RFQ` | Approved navigation order is preserved as a planning contract | RFQ item and any RFQ-dependent wording are absent unless `RFQ_AVAILABLE=true` |
| HERO | `CONV-RFQ`; local `#grade-selector` | Local selector anchor is valid; full and route-safe copy variants are specified | Local anchor renders; full Hero copy and RFQ CTA require `FULL_ROUTE_COPY=true`; otherwise route-safe Hero copy renders |
| GRADE_SELECTOR | 14 Grade Page IDs; conditional `APP-*`; `CONV-RFQ` | Result links use approved Grade identity; Application/RFQ actions remain conditional | Base empty/Not Sure copy always provides the local directory path; RFQ sentence and CTA render only when `RFQ_AVAILABLE=true` |
| PROCESS_ROUTES | `PRODUCT-PROC-CL`, `PRODUCT-PROC-SU` | Copy and complete card contracts may be designed | A complete card, including its CTA, renders only when its own route is approved and live; if neither route is available, the entire module is absent |
| ALL_GRADES | 14 Grade Page IDs | Approved stable directory contract | Each link must resolve before release; no cross-scope fallback |
| EVALUATION_GUIDE | `APP-000`, `DOC-000` | Optional contextual CTAs | CTA absent until route live; instructional text can remain |
| SUPPORT_PATHS | `APP-000`, `DOC-000`, `MARKET-000` | Module content can be approved in advance | Render only live destination cards; hide module if none are live |
| BUYER_QUESTIONS | All Grades anchor; conditional `APP-*`, `CONV-RFQ` | Base answers remain complete without a link | RFQ-dependent sentence and link render only when `RFQ_AVAILABLE=true`; no dead-link or unavailable-action wording remains |
| FINAL_RFQ | `CONV-RFQ` | Final copy and prefill contract can be approved | The entire module is absent unless `RFQ_AVAILABLE=true`; hiding only the CTA is not permitted |

### 4.1 Deterministic Availability States

- `PROCESS_CL_AVAILABLE=true` only when `PRODUCT-PROC-CL` is approved and verified live in `site_scope=tio2-my`.
- `PROCESS_SU_AVAILABLE=true` only when `PRODUCT-PROC-SU` is approved and verified live in `site_scope=tio2-my`.
- `PROCESS_AVAILABLE=true` when either process state above is true.
- `RFQ_AVAILABLE=true` only when `CONV-RFQ` is an approved, verified-live workflow in `site_scope=tio2-my`.
- `RFQ_FALLBACK_AVAILABLE=true` only when project control separately approves an exact alternative action, destination and buyer-facing copy. No fallback is approved in V0.1. A fallback never makes `RFQ_AVAILABLE` true and never authorizes `Request a Quote` wording.
- `FULL_ROUTE_COPY=true` only when `PROCESS_AVAILABLE=true` and `RFQ_AVAILABLE=true`.

The public result is unique for each state:

| State | Public result |
|---|---|
| Both Process routes available | Render both complete Process cards |
| One Process route available | Render only that complete Process card |
| No Process route available | Do not render `PROCESS_ROUTES`, including its heading and introductory copy |
| RFQ available | RFQ navigation item, CTA and dependent buyer-facing sentences may render |
| RFQ unavailable | Do not render any RFQ CTA, Final RFQ module or sentence promising that the buyer can share requirements through RFQ; use only local-directory or other independently live routes. If `RFQ_FALLBACK_AVAILABLE=true`, render only the separately approved fallback action and exact copy |
| `FULL_ROUTE_COPY=true` | Use the full Hero and Meta candidates that mention process navigation and RFQ |
| `FULL_ROUTE_COPY=false` | Use the route-safe Hero and Meta candidates; they mention only the 14-grade directory and product-detail review |

### 4.2 Route-safe SEO and Hero Copy

| Field | Full candidate condition and copy | Route-safe fallback |
|---|---|---|
| Title | Unconditional: `Titanium Dioxide Pigment Grades | TiO2 Malaysia` | Same title |
| H1 | Unconditional: `Titanium Dioxide Pigment Grades for Industrial Applications` | Same H1 |
| Hero intro | Only when `FULL_ROUTE_COPY=true`: `Explore 14 titanium dioxide pigment grades by application, production process, or model. Use the guided paths to identify product pages for further technical evaluation.` | `Explore 14 titanium dioxide pigment grades and open model pages for further technical evaluation.` |
| Meta Description | Only when `FULL_ROUTE_COPY=true`: `Explore 14 titanium dioxide pigment grades by application, process, or model, then review product details or request a quote from TiO2 Malaysia.` | `Browse 14 titanium dioxide pigment grades and review model pages for product details and technical evaluation with TiO2 Malaysia.` |

## 5. Route-Key Acceptance Rules

1. Page specifications name the destination by Page ID/route key.
2. A planning or provisional path is never copied into UI content, component configuration or Schema as a permanent destination.
3. Route resolution must be scoped to `site_scope=tio2-my`.
4. Missing Malaysia-scope content never falls back to TIOVAR, mytio2 or another site scope.
5. If the route is missing, unpublished, redirected to an unapproved canonical or inaccessible, its public CTA is absent.
6. Conditional removal must include every sentence that promises the unavailable action; it must not leave empty cards, punctuation, headings or inaccessible hidden links.
7. Grade URLs remain governed by their approved 14-page contract; this audit does not change them.
8. Process cards are atomic route units: title, body and CTA render together or not at all.
9. Metadata and Hero content use the state table in 4.2; suppressing a CTA alone is not a valid route-safe fallback.

## 6. Open Route Gate

| Review ID | Level | Issue | Current control | Close condition | Status |
|---|---|---|---|---|---|
| R-003 | IMPORTANT | Application, Documents and Conversion destinations are planned/provisional or not verified live | Use Page ID/route key; no hard-coded permanent path; conditional render | Destination registry approval plus external live-route verification | OPEN |
| G12-02 | IMPORTANT | Route-unavailable public copy and metadata degradation was not unique | Deterministic Process/RFQ states, atomic card/module behavior and full/route-safe Hero/Meta variants added | Project-control re-review PASS and user approval, 2026-08-29 | CLOSED |

R-003 does not block Gate 2 copy and content architecture. It blocks public link resolution and final handoff acceptance for affected destinations.

## 7. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-29 | Initial route-key and live-status audit for Process, Applications, Documents, Markets and RFQ dependencies | Draft for project-control review |
| V0.1 review revision | 2026-08-29 | Added deterministic Process/RFQ availability states, atomic Process-card behavior, RFQ sentence suppression and route-safe Hero/Meta fallbacks for G12-02 | Draft for Gate 1/2 project-control re-review |
| V0.1 approval record | 2026-08-29 | Project-control re-review PASS and user approval; G12-02 closed; R-003 remains an open route/live hard gate | Approved current route-gate baseline for Gate 3 |
