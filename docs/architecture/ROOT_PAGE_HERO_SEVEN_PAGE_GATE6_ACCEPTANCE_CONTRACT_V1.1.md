# Root Page Hero Seven-Page Gate 6 Acceptance Contract V1.1

## 1. Control

| Field | Value |
|---|---|
| Contract ID | `ROOT-HERO-G6-ACCEPTANCE-01` |
| Version | `V1.1`; response to `ROOT-HERO-G6-IVR-F01/F02` |
| Parent package | `ROOT-HERO-G6-HANDOFF-01` V1.1 |
| Status | `DRAFT_FOR_INDEPENDENT_REVIEW` |
| Stable-ID rule | The 24 V1.0 IDs are unchanged. This revision corrects their source-bound meaning; it creates no replacement or waiver ID. |

All conditions are `APPROVED_CONTRACT` requirements after Gate 6 closure. Preview HTML/CSS/JS/captures—including the Market non-link preview—are `PROTOTYPE_ONLY`. Each Gate 8 return and Gate 9 result binds the applicable condition to exact implementation/evidence/Build/runtime identity, route, viewport/state, and evidence path.

## 2. Shared conditions

| ID | Required result |
|---|---|
| `RH7-AC-CORE-01` | One shared production `RootPageHero` structural source serves all seven configuration consumers; no copied page Hero DOM/CSS fork. |
| `RH7-AC-CORE-02` | Only approved page/variant assignments and Home/APP open surfaces apply; no local geometry/breakpoint override or new variant. |
| `RH7-AC-CORE-03` | At 1440/768/390, normal H1 is 56/44/36px, weight 700, content-driven and uncut; normal pages have at most three lines. |
| `RH7-AC-CORE-04` | RES/About only at 390 may naturally take four lines at 36px/700, normal spacing/stretch/transform, 24px Shell padding, and zero overflow. |
| `RH7-AC-CORE-05` | Actions are first-screen visible, keyboard-reachable/focus-visible, ordered, at least 44px; light-surface filled primary actions use `#008078` with white label. |
| `RH7-AC-CORE-06` | Compact media follows actions; informative media remains unless an approved page rule explicitly omits it, and omission leaves zero reserved blank space. |
| `RH7-AC-CORE-07` | 1440/768/390 Hero/document/body horizontal overflow is zero and prohibited left teal/green/gradient Hero rules are absent. |
| `RH7-AC-CORE-08` | Global Chrome V0.5 is consumed, not forked: required Header/Footer/Logo/fixed RFQ/current treatment and buyer-visible `CURRENT=0`. |
| `RH7-AC-CORE-09` | Active viewport exposes one accessible primary-nav surface with one mapped `aria-current="page"`; inactive surface is non-announced/unfocusable; applicable Menu/keyboard behavior works. |
| `RH7-AC-CORE-10` | Immediate body boundary, approved route-safe state, selection behavior and public meaning remain unchanged except the approved Hero composition. |
| `RH7-AC-CORE-11` | Visible content, Canonical, SEO/GEO/social output and JSON-LD/Schema retain approved semantics; no internal-governance leakage or preview-only machine relation. |
| `RH7-AC-CORE-12` | `site_scope=tio2-my` isolates content/query, route, cache, menu, SEO/metadata, media and form context; no cross-scope fallback/identity leakage. |
| `RH7-AC-CORE-13` | Gate 8 provides a schema-valid evidence Manifest, validation/two-round preflight outputs and held runtime; Gate 9 rejects stale/incomplete identity or inaccessible runtime. |

## 3. Exact binding conditions

| ID | Exact result and current-source consumption |
|---|---|
| `RH7-AC-HOME-01` | `/`: open-white `flagship-light`, exact eyebrow/H1/photo/actions and unchanged `START HERE`; consume the Home row of V1.1 package §4. |
| `RH7-AC-APP-01` | `/applications/`: open-white `hub-light`, exact CTAs/fragment-only information-card anchors, conditional Page-ID resolution and Specialty non-route; consume V1.1 package §4. |
| `RH7-AC-PRODUCT-01` | `/products/`: reference `hub-light`, exact actions/14-four-6-5-2-1 summary/application-first boundary; no new relation, comparison or child route; consume V1.1 package §4. |
| `RH7-AC-MARKET-01` | `/markets/`: `hub-light` visual; Hero local action resolves to `#destination-market`; ten visible meaningful normal crawlable Market `<a href>` actions retain exact §6 label/Page ID/planned URL order from `MARKET-000_GATE7_HANDOFF_PACKAGE_V0.1.md`; unresolved targets block release, never cause hidden/disabled/fallback links. Preview no-href state is `PROTOTYPE_ONLY`; PT-BR/Trade restrictions remain. |
| `RH7-AC-DOC-01` | `/documents/`: `hub-light`, direct no-query Hero `/request-documents/`, separate no-default selector/visible Continue/valid one-product query and selector-owned—not Hero—teal rule; consume V1.1 package §4. |
| `RH7-AC-RES-01` | `/resources/`: contained `hub-dark`, H0/Three Decision Paths/current CTA boundary, `>900px` media visible and `≤900px` zero-space; no full-page dark conversion or public inventory drift; consume V1.1 package §4. |
| `RH7-AC-ABOUT-01` | `/about/`: `corporate-light`, exact public Hero/CTA/composite and immediate Who We Are paragraphs/seven rows; no added factual/route implication; consume V1.1 package §4. |

## 4. Preserved dependency conditions

| ID | Required preservation and failure disposition |
|---|---|
| `RH7-DEP-01` | D16 inspects/reuses existing integrated shared architecture. Inability to express an approved binding returns a bounded implementation question; no parallel component system. |
| `RH7-DEP-02` | Page-specific dependency IDs and sources remain the exact V1.1 handoff-package §4 map. Required entries retain their approved action/conditional behavior; no Hero change hides, disables, replaces or treats a destination as live. |
| `RH7-DEP-03` | A preview/media source is reference-only. Missing source requires an approved source/derivative preserving visible meaning; no invented fact, different component, or cross-scope fallback. |
| `RH7-DEP-04` | Gate 9 needs exact D16 evidence/runtime identity. Environment/evidence failure remains `ENVIRONMENT_FAILURE`/`EVIDENCE_INCOMPLETE`, never visual PASS. |

## 5. Gate 8 and Gate 9 evidence rule

Gate 8 binds every applicable row to actual tests, source/consumer mapping, computed/layout evidence at 1440/768/390, keyboard/menu evidence where applicable, route/action/metadata/Schema/scope evidence, and the required evidence Manifest identities. Gate 9 independently runs the Gate 8 evidence validation and two-round preflight, then checks all seven actual routes. Any failure returns the stable ID, exact reproduction and shared-consumer impact to the same D16 task. Passing any condition or all 24 does not authorize Gate 10, merge, deployment, publication, DNS, sitemap or indexing.
