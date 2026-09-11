# Root Page Hero Seven-Page Gate 6 Acceptance Contract V1.0

## 1. Control

| Field | Value |
|---|---|
| Contract ID | `ROOT-HERO-G6-ACCEPTANCE-01` |
| Parent handoff | `ROOT-HERO-G6-HANDOFF-01` |
| Status | `DRAFT_FOR_INDEPENDENT_REVIEW` |
| Identity | `APPROVED_CONTRACT` requirements only; prototype sources remain `PROTOTYPE_ONLY` |
| Use | Stable IDs must flow unchanged through D16 Gate 8 receipt/evidence and D23 Gate 9 result/return. |

Every Gate 8 and Gate 9 result must identify the exact implementation, evidence HEAD, Build, runtime, tested route, viewport and evidence path for each applicable condition. A condition is not passed by a planning screenshot, a generic test claim, a single viewport, or a different candidate identity.

## 2. Shared Gate 8 / Gate 9 acceptance conditions

| ID | Approved condition | Required evidence / Gate 9 failure condition |
|---|---|---|
| `RH7-AC-CORE-01` | Exactly one shared production `RootPageHero` structural source serves all seven consumers; configuration, not copied page DOM/CSS, expresses differences. | Source/consumer map plus seven runtime DOM/config observations. Failure: page-owned fork or missing consumer. |
| `RH7-AC-CORE-02` | Only `flagship-light`, `hub-light`, `hub-dark`, `corporate-light`, and the approved Home/APP open-surface presentation are used in their assigned scopes. | Source/config inspection plus seven routes. Failure: unapproved variant or page-specific geometry/breakpoint override. |
| `RH7-AC-CORE-03` | At 1440/768/390, shared H1 tokens are `56/44/36px`, weight 700, content-driven layout, no crop/overlap/abnormal orphaning; normal pages have at most three lines. | Computed style/layout plus screenshots for all seven pages. Failure: wrong token, clipping, fixed-height crop, or unapproved fourth line. |
| `RH7-AC-CORE-04` | `RES-000` and `ABOUT-001` at 390 only may naturally use four H1 lines at `36px/700`, normal letter spacing/stretch/transform, 24px Shell padding and zero overflow. | Computed styles and 390 runtime capture for both. Failure: exception outside this exact scope or compressed/clipped title. |
| `RH7-AC-CORE-05` | Hero actions are first-screen visible, keyboard reachable with visible focus, logically ordered, and at least 44px in the tested compact layout. Filled primary actions on light surfaces use `#008078` with white label. | 1440/768/390 interaction/layout evidence. Failure: hidden/undersized/unfocusable action, wrong target, or inaccessible functional teal. |
| `RH7-AC-CORE-06` | Compact layouts place media after actions. Informative media remains visible unless the approved page binding explicitly permits its omission; omitted media leaves no reserved blank space. | 768/390 captures and DOM/layout checks. Failure: lost informative content, wrong order, or blank media slot. |
| `RH7-AC-CORE-07` | Hero, document and body have zero horizontal overflow at 1440/768/390; no prohibited Hero left teal/green/gradient rule exists. | Scroll-width and computed/pixel/source evidence per route. Failure: overflow or left Hero decoration. |
| `RH7-AC-CORE-08` | Global Chrome V0.5 is consumed, not forked: desktop order/84px, mobile `Logo | RFQ | Menu`/64px, fixed RFQ, approved production SVG asset, Footer unchanged, buyer-visible `CURRENT=0`. | Seven-route Chrome regression evidence at desktop/mobile. Failure: changed Chrome/Footer/Logo/fixed RFQ or visible status label. |
| `RH7-AC-CORE-09` | On a mapped route, one accessible primary nav surface and one `aria-current="page"` appear at the active viewport; the inactive surface is inaccessible and unfocusable. Applicable keyboard/Menu behavior remains operable. | Keyboard/focus/accessibility-tree evidence at desktop/mobile. Failure: duplicate exposed current surface, focus leak, broken Menu/RFQ action. |
| `RH7-AC-CORE-10` | Immediate body/module boundaries are unchanged except the approved Hero composition; no body module, route-safe state, selector rule, or public factual meaning moves silently. | DOM/text/link diff against page authority plus transition captures. Failure: omitted/rewritten/added body semantics or changed approved boundary. |
| `RH7-AC-CORE-11` | Existing visible copy, metadata, canonical, SEO/GEO, social output and JSON-LD/Schema remain semantically unchanged except where the approved Hero binding already supplies identical visible content. | Rendered head/Schema and source comparisons for each route. Failure: metadata/Schema drift, stronger machine claim, internal governance leakage, or copied preview-only semantics. |
| `RH7-AC-CORE-12` | `site_scope=tio2-my` is enforced for content/query, routes, cache, menu, SEO/metadata, media and form context; no cross-scope fallback or buyer-visible internal identity. | Scope/data-source tests and runtime scan. Failure: cross-scope content/fallback/identity or leakage. |
| `RH7-AC-CORE-13` | D16 evidence conforms to `GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json`, passes `validate_evidence_manifest.py` and two-round `gate9_preflight.py`, and the runtime remains available until Gate 9 notice. | Gate 8 Manifest, validation/preflight outputs, held runtime. Failure: stale/incomplete identity, invalid Manifest, inaccessible/moved runtime. |

## 3. Page binding acceptance conditions

| ID | Route / exact condition | Gate 9 required verification |
|---|---|---|
| `RH7-AC-HOME-01` | `/`: `flagship-light` open-white; exact eyebrow/H1, TiO2 photo, `/request-a-quote/`, `/products/`, and unchanged `START HERE`. | Assert no Hero-wide frame/left rule and the exact transition/CTA routes. |
| `RH7-AC-APP-01` | `/applications/`: `hub-light` open-white; exact CTA targets, six fragment-only information-card anchors, conditional Page-ID child route boundary, Specialty non-route. | Assert no unconditional child links/route assertion and no changed selector/collection boundary. |
| `RH7-AC-PRODUCT-01` | `/products/`: reference `hub-light`; exact two actions, 14/four/6-5-2-1 summary, application-first body and relation guardrails. | Assert no new Grade/Process/Application route or relation/comparison expansion. |
| `RH7-AC-MARKET-01` | `/markets/`: `hub-light`; exact H1/intro, `#destination-selector`, informative market summary at 768/390, current route-safe non-link state. | Assert hierarchy is unchanged; no destination child href, PT-BR, or Trade claim. |
| `RH7-AC-DOC-01` | `/documents/`: `hub-light`; exact direct `/request-documents/` Hero CTA; separate no-default selector and only valid grade query behavior. | Assert no Hero query/fragment/prefill, no default selection, visible focusable Continue, selector-owned teal rule preserved only below Hero. |
| `RH7-AC-RES-01` | `/resources/`: contained `hub-dark`; exact `#research-paths`, H0 inventory/Three Decision Paths boundary; media `>900px` visible and `≤900px` zero-space. | Assert no full-page dark conversion, no reserved mobile media space, and no H0/public-inventory drift. |
| `RH7-AC-ABOUT-01` | `/about/`: `corporate-light`; exact public Hero/CTA/composite and immediate Who We Are supporting paragraphs/seven rows. | Assert no added enterprise/supply/route fact, lost paragraph/fact row, or semantic decorative-media claim. |

## 4. Per-stage disposition

| Stage | Required disposition |
|---|---|
| Gate 8 | Implement and bind `RH7-AC-CORE-01`–`13` and all seven `RH7-AC-*-01` page conditions in its evidence Manifest/receipt. Record unsupported test environments as unverified, never as PASS. |
| Gate 9 | Independently preflight the exact D16 candidate; verify all shared IDs and page IDs on the actual seven routes at 1440/768/390 plus applicable keyboard/Menu states. Return `RECHECK_SCOPE_STATUS`, `PAGE_GATE9_STATUS`, `INTEGRATION_STATUS`, and `RELEASE_STATUS` separately. |
| Required return | Any required failure returns to the same D16 task with its stable ID, exact reproduction, affected shared consumers, and new implementation/evidence/Build/runtime identity. Gate 9 rechecks the repaired condition and shared regressions. |
| Release boundary | Passing these conditions does not authorize Gate 10, merge, deployment, publication, DNS, sitemap, or indexing. |

## 5. Dependencies and fallback boundary

| Dependency ID | Owner / condition / failure disposition |
|---|---|
| `RH7-DEP-01` | D16 must inspect and reuse its existing shared Chrome/route/content architecture. If it cannot express an approved binding without changing semantic scope, return a bounded implementation question; do not create a parallel system. |
| `RH7-DEP-02` | Existing page lifecycle, receiver, route, Schema and release dependencies stay with their existing owners. The Hero change must neither hide a required entry nor imply that a currently conditional/unavailable destination is live. |
| `RH7-DEP-03` | Media/preview sources are prototype/reference inputs. An unavailable source requires an approved asset/derivative solution that preserves visible meaning; no invented factual substitute, cross-scope fallback, or unapproved crop. |
| `RH7-DEP-04` | Gate 9 requires the exact D16 evidence/runtime identity. Environment failure or incomplete evidence is `ENVIRONMENT_FAILURE`/`EVIDENCE_INCOMPLETE`, not a visual PASS. |
