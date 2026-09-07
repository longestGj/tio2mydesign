# RES-PROC Gate 7 Acceptance and Blockers V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` |
| Package ID | `RES-PROC-G7-HANDOFF-01` |
| Date | 2026-09-06 |
| Purpose | Gate 8 implementation acceptance and Gate 9 read-only evidence contract |
| Gate 8 | Not authorized |

## 1. Gate 8 Acceptance Criteria

| ID | Acceptance criterion | Required evidence |
|---|---|---|
| PROC-A01 | Route resolves only for `site_scope=tio2-my` | Scoped route/query tests and preview |
| PROC-A02 | Missing Malaysia record never falls back to another scope | Negative fixture for TIOVAR/other scope |
| PROC-A03 | `page_id`, slug, path, locale and type match Registry | CMS/API payload plus rendered route |
| PROC-A04 | Primary keyword remains uniquely owned by RES-PROC | Metadata/registry consistency test |
| PROC-A05 | Exact H1, title, meta and canonical render once | HTML/head assertions |
| PROC-A06 | Fourteen modules render in exact approved order | DOM order assertion |
| PROC-A07 | Fixed collections equal `2/4/6/6/3/5/3/4/6/7/2` contract | Payload and DOM count assertions |
| PROC-A08 | Buyer-facing strings equal Gate 2 V0.3 | Canonical content hash/string fixture |
| PROC-A09 | Chloride and sulfate cards have equal semantic/visual weight | DOM/style/visual evidence |
| PROC-A10 | Grade Evidence retains six question/evidence/interpretation rows | Semantic table/card assertions |
| PROC-A11 | All four Buyer Question answers exist in initial server HTML | SSR snapshot and interaction test |
| PROC-A12 | FAQPage, QAPage and HowTo are absent | JSON-LD negative assertions |
| PROC-A13 | Article is absent with incomplete metadata and appears only with complete visible approved metadata | Positive/negative metadata fixtures |
| PROC-A14 | Product/Offer/Review/AggregateRating and hidden Grade relations are absent | JSON-LD negative assertions |
| PROC-A15 | Products action uses `/products/` without prefill and fails closed independently | Eligible/ineligible relation tests |
| PROC-A16 | Process actions render only when both exact same-scope routes are eligible | Four combination truth-table tests |
| PROC-A17 | Process-pair removal leaves no disabled UI, placeholder or orphan gap | DOM and visual state evidence |
| PROC-A18 | Seven source links keep exact labels, URLs and statement-family adjacency | Link-map assertion |
| PROC-A19 | Source withdrawal removes affected claim, citation and source action together | Revoked-source fixture |
| PROC-A20 | No route winner, unsupported Grade code, equivalence or commercial/regulatory claim enters public output | Content boundary scan |
| PROC-A21 | Global Chrome V0.5 and production Logos are reused; `Resources` is current | Desktop/mobile nav assertions |
| PROC-A22 | 1440/1024/768/430/390/375 have no horizontal page overflow or clipped content | Browser measurements/screenshots |
| PROC-A23 | Body ≥16px, interactive targets ≥44×44 CSS px and 200% zoom remains usable | Browser/accessibility measurements |
| PROC-A24 | Keyboard focus, FAQ semantics, Mobile Menu trap/Escape/restore and reduced motion pass | Interaction/accessibility suite |
| PROC-A25 | Cache keys/tags and invalidation include `tio2-my` | Unit/integration evidence |
| PROC-A26 | Non-production is noindex; production indexing cannot activate without Gate 10 | Environment metadata tests |
| PROC-A27 | RES-000 inventory/sitemap are unchanged unless separately eligible and authorized | Inventory/sitemap negative assertions |
| PROC-A28 | Existing RES-ORIGIN content and other sites/pages do not change | Regression/diff evidence |

Any failed criterion is a Gate 9 finding. P0/P1 items must be fixed by the external development task; D23 does not repair implementation.

## 2. Required Viewport and State Fixtures

| Fixture | Width/state | Required checks |
|---|---|---|
| Desktop | 1440 | Complete page, hierarchy, equal route weight, six-row ledger, sources, final actions |
| Desktop robustness | 1024 | Reflow, navigation behavior, no crop/overflow |
| Tablet | 768 | Complete stacked/grid transition, readable source labels and Grade evidence |
| Mobile wide | 430 | One-column rail, type, targets, no excess CTA whitespace |
| Mobile authority | 390 | Complete page against approved 390 logical reference |
| Mobile narrow | 375 | Long H1/source/link wrapping and no overflow |
| Mobile Menu | 390 open | Inert background, focus trap, Escape/restore, one `Resources` current link |
| FAQ | open/focus | Initial-DOM answers, state semantics and visible focus |
| Process pair eligible | both true | Both actions visible in approved order |
| Process pair ineligible | any false | Both actions absent; Products independently evaluated |
| Article incomplete | any field missing | No Article object and no fabricated field |
| Article complete | all eligible | Visible editorial metadata and JSON-LD parity |
| Source revoked | one evidence item revoked | Affected claim/citation/action absent without stale fallback |
| Wrong scope | non-`tio2-my` | Safe not-found/error; no data leak |

## 3. Content and Claim Blockers

The following are implementation/release blockers if present:

- paraphrased or incomplete Gate 2 V0.3 copy;
- missing/reordered module or collection cardinality mismatch;
- route label presented as a Grade-level performance conclusion;
- route winner, process score or unequal visual hierarchy;
- TiO2 Malaysia Grade code/recommendation or competitor equivalence;
- environmental, price, availability, capacity, MOQ, lead-time, logistics, regulatory or tariff conclusion;
- Article/FAQPage/QAPage/HowTo/Product/Offer/Review/AggregateRating outside the approved rules;
- hidden GEO fact, fake author/date or build-time editorial metadata;
- dead/guessed/cross-scope relation or stale source claim;
- placeholder, disabled action, governance status or evidence-gap note visible to buyers.

Evidence absent only from project files must follow `PENDING_USER_FACT_CONFIRMATION` and the Evidence Gap User Decision Register; it is not silently converted into a permanent ban. The blocked claims above are prohibited because they conflict with the approved page purpose/contract, would expand beyond approved evidence, or would present an unknown external conclusion as fact.

## 4. Current Delivery Dependencies

| Dependency | Current state | Gate 8 behavior | Gate 9/10 effect |
|---|---|---|---|
| RES-PROC route/content record | Not implemented/verified | Implement under correct scope | Must pass before public release |
| PRODUCT-000 route | Independently eligible only when verified | Evaluate relation predicates | CTA fails closed if not eligible |
| PRODUCT-PROC-CL and PRODUCT-PROC-SU | Pair readiness not established here | Evaluate both; render together only | Pair may remain absent without blocking page usefulness |
| RES-000 parent/inventory | Child not listed publicly | Do not add without separate eligibility | Blocks public inventory/sitemap inclusion |
| Article metadata | Not approved | Keep Article off | Required only if Article mode is desired |
| Seven source destinations | Rechecked 2026-09-06; EUR-Lex alternate endpoint verified | Verify exact link map in runtime | Withdrawn/changed claim fails closed |
| Global Chrome / Logos | Shared authority exists | Reuse exact current shared components | Divergence blocks acceptance |
| Gate 10 | Not authorized | Keep production publish/index disabled | Required for release/indexing |

## 5. Gate 9 Evidence Receipt

The external development result must provide:

1. named development task/thread and receipt;
2. exact implementation commit/ref and clean/change-state disclosure;
3. accessible preview URL and environment/site-scope configuration;
4. resolved WordPress/CMS, API/ViewModel, route/component, metadata/Schema, relation and test file paths;
5. CMS/API payload evidence for valid, missing, wrong-scope, Article-complete/incomplete and source-revoked cases;
6. full commands and untruncated outputs for focused tests plus repository-required lint, typecheck, build and regression suites;
7. screenshots or browser evidence for every viewport/state fixture in Section 2;
8. exact rendered title, meta, canonical, robots and JSON-LD captures;
9. link inventory and status for Products, both Process owners, parent Resources and seven sources;
10. content parity proof against Gate 2 V0.3 and visual comparison against all six Gate 5 assets;
11. accessibility evidence for keyboard, focus, disclosure, menu, targets, zoom and reduced motion;
12. known variances, unresolved dependencies and rollback instructions.

The receipt must not claim deployment, publication or indexing.

## 6. Rollback Contract

- Revert only the scoped RES-PROC implementation or disable its `tio2-my` content/route projection.
- Purge only affected `tio2-my` cache keys/tags.
- Preserve shared components and other Resource pages unless a separately evidenced shared regression requires their owner to act.
- Never recover by reading another site scope, restoring stale source claims, hard-coding design HTML or displaying placeholders.
- After any corrective implementation, repeat the affected Gate 8 tests and full Gate 9 read-only review.

## 7. Phase Boundary

This document defines future acceptance evidence only. Gate 8, external development, route activation, CMS writes, deployment, publication, DNS and indexing are not authorized.

