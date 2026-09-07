# PRODUCT-000 Gate 6 Audit and Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / `/products/` |
| Date | `2026-08-31` |
| Gate 5 | `APPROVED / CLOSED` |
| Gate 6 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Execution-task result | `SELF_CHECK_COMPLETE / PASS_WITH_OPEN_FINAL_HANDOFF_RELEASE_GATES` |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |
| Production status | No handoff, implementation, test, deployment or publication authority |

This is an execution-task audit. It does not claim project-control approval.

## 1. Reviewed inputs

### 1.1 Governance and page identity

- `AGENTS.md`.
- `00_PROJECT_STATUS.md`.
- `01_PROJECT_INDEX.md`.
- `02_DIRECTORY_GUIDE.md`.
- `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`.
- `docs/architecture/PAGE_REGISTRY_V0.1.md`.
- `research/keyword/11_page_keyword_master.csv`, row `PRODUCT-000`.
- `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.1.md` and V0.2.

### 1.2 Relationship and route authority

- `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`.
- `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`.
- `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.3.md`.
- `pages/products/02_analysis/PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.3.md`.
- `pages/products/02_analysis/PRODUCT-000_ROUTE_AUDIT_V0.1.md`.
- `pages/products/04_planning/PRODUCT-000_CONTENT_ARCHITECTURE_V0.3.md`.

### 1.3 Approved visual and current Gate 6 contracts

- `pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.12.md`.
- Desktop V0.16 and Mobile V0.15 from the Gate 5 Manifest.
- `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` plus the user-approved `Procurement` semantic decision recorded in V0.3.
- `pages/products/04_planning/PRODUCT-000_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`.
- `pages/products/05_review/PRODUCT-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md`.

## 2. Page identity and keyword review

| Check | Expected | Result |
|---|---|---|
| Page ID | `PRODUCT-000` | PASS |
| Page name | Titanium Dioxide Products | PASS |
| URL | `/products/` | PASS |
| Page type | Product hub | PASS |
| Priority | P0 | PASS |
| Primary keyword | `titanium dioxide pigment` | PASS |
| H1 | `Titanium Dioxide Pigment Grades for Industrial Applications` | PASS |
| Canonical | `https://tio2malaysia.com/products/` | PASS |
| Exact-grade intent | Owned by fourteen Grade pages | PASS |
| Process intent | Owned by Chloride/Sulfate pages | PASS |
| Generic application intent | Owned by Applications pages | PASS |
| Country supplier intent | Owned by Markets pages | PASS |

No page count, URL, primary keyword or intent ownership changed during Gate 6.

## 3. Buyer Clean content and claim review

### 3.1 Public narrative

The visible order remains:

1. Global Header.
2. Breadcrumb.
3. Hero.
4. Application Selector.
5. Process routes and CR-901 classification.
6. Four-group, fourteen-grade directory.
7. Five-step Evaluation.
8. Applications/Documents/Markets support paths.
9. Five Buyer Questions.
10. Lightweight RFQ.
11. Global Footer.

### 3.2 Claim safety

| Claim class | Review result |
|---|---|
| Best/recommended/preferred grade | Absent |
| Match score or ranking | Absent |
| Equivalence or substitution | Absent |
| Suitability guarantee | Explicitly disclaimed |
| Price, MOQ, inventory, lead time or delivery promise | Absent |
| Document availability or approval promise | Absent |
| Origin, factory, capacity, certification or traceability claim | Absent |
| Internal evidence, route, gate or QA language | Absent from Buyer Clean |
| Buy / Buy Now / Purchase / Add to Cart / Checkout | Absent |

The fourteen directory descriptions are neutral identity summaries. M-996 and M-2196 remain individual-fact statements rather than a comparison.

## 4. PRODUCT V0.3 relationship review

| Check | Result |
|---|---|
| Matrix shape | 84 unique relations = 14 grades × 6 Applications |
| Application state | 30 verified / 0 conflict / 54 no-public |
| Public Application counts | 8 / 8 / 7 / 4 / 2 / 1 |
| Process distribution | 8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation |
| Four directory groups | 6 / 5 / 2 / 1; fourteen unique grades |
| M-2377 | Five Applications + Sulfate render neutrally |
| M-2377 Specialty Materials | Hidden |
| Rubber | Evidence-only; absent from taxonomy, links and Schema |
| M-996/M-2196 | 12/12 comparison hold preserved |
| `NO_PUBLIC_MAPPING` language | Never rewritten as unsuitability |

Result: PASS.

## 5. SEO review

| Element | Reviewed value | Result |
|---|---|---|
| Title | `Titanium Dioxide Pigment Grades | TiO2 Malaysia` | PASS; 47 characters |
| Meta | Exact V0.1 contract | PASS; 153 characters |
| Canonical | `https://tio2malaysia.com/products/` | PASS |
| H1 count contract | One exact H1 | PASS as specification; implementation not yet proven |
| Target robots | `index, follow` only after release gates close | PASS |
| Staging robots | `noindex, nofollow` environment control | PASS |
| Language | `en` | PASS |
| Hreflang | None invented | PASS |
| Cannibalization | Hub/process/grade/application/market boundaries explicit | PASS |

The Meta remains accurate when Process cards are conditionally absent because process classifications remain visible in the directory descriptions.

## 6. GEO and Schema review

### 6.1 GEO

- The page visibly connects the product family, fourteen grades, six Application sets and three Process classifications.
- The five FAQ answers are concise, complete and source-bounded.
- A missing public relation is not converted into a negative technical conclusion.
- Every machine-readable relation must be a subset of visible Buyer Clean content.

Result: PASS as a content contract.

### 6.2 Schema candidate

Allowed candidate nodes are `CollectionPage`, `BreadcrumbList`, fourteen-item `ItemList`, minimal Grade `Product` nodes and optional `FAQPage`.

Prohibited output includes Offer, price, inventory, availability, rating, origin, manufacturer, factory, certification, hidden relations, Rubber, M-2377 Specialty and M-996/M-2196 comparison. `ProductGroup` is prohibited because the four groups are navigation categories, not an approved variant family.

Result: PASS as a Gate 6 boundary. No JSON-LD implementation exists or is claimed.

## 7. Internal link, route and CTA review

### 7.1 Stable page identities

The fourteen approved Grade destinations are:

`/products/m-350/`, `/products/m-510/`, `/products/m-896/`, `/products/m-996/`, `/products/m-2196/`, `/products/m-895/`, `/products/m-200/`, `/products/m-108/`, `/products/m-210/`, `/products/m-340/`, `/products/m-886/`, `/products/m-52/`, `/products/m-2377/`, `/products/cr-901/`.

They remain subject to Malaysia-scope live-route verification before release.

### 7.2 Conditional destinations

| Module | Route behavior |
|---|---|
| Process routes | Render each complete card only when its Page ID resolves live; 2/1/0 states |
| Support paths | Render only live Applications/Documents/Markets cards; 3/2/1/0 states |
| Global RFQ | Always visible; route not ready blocks release |
| Contextual RFQ | Must use the same approved Malaysia-scope RFQ destination and prefill contract |
| Grade Selector | Grade result links use approved Grade identity; no cross-scope fallback |

The legacy Route Audit V0.1 language that hides Global Chrome RFQ when unavailable is superseded by the later approved fixed-RFQ contract. Gate 7 must not copy the obsolete conditional Global Chrome behavior.

## 8. Visual and responsive review

| View | File | Result |
|---|---|---|
| Desktop | V0.16, 1440×5353 | PASS |
| Mobile | V0.15, 780×12867 / 390px logical 2× | PASS |

Original-detail and cropped checks confirm:

- Header → Breadcrumb → Hero order.
- Products current state and fixed RFQ.
- Clear Hero 6/5/2/1 summary.
- Selector controls remain distinct and do not overflow.
- Process and directory cards close correctly.
- Fourteen grade descriptions do not collide with Grade or CTA.
- Desktop one-line descriptions share the Grade/CTA centerline; two-line descriptions keep the approved offset.
- Five Evaluation cards are compact and ordered.
- FAQ uses one-expanded/four-collapsed visual state.
- Mobile has no visible horizontal overflow, CTA collision or large terminal blank band.
- Footer shows `PROCUREMENT`, not public `CONVERSION`.

Static PNGs prove geometry and visual direction only. They do not prove runtime wrapping, DOM order, breakpoints or interactive semantics.

## 9. Interaction and accessibility review

### 9.1 Required semantics

- Selector choices: semantic buttons or radio-like controls with programmatic selected state.
- Keyboard: logical focus order from Header through Selector, links, accordion and Footer.
- Focus: visible focus ring consistent with approved component states.
- FAQ: `<button>` controls with `aria-expanded`, `aria-controls` and associated answer region.
- FAQ answers: all five present in initial server-rendered DOM.
- Mobile Menu: open/close control, current page state, focus containment and Escape behavior.
- Minimum target: 44×44 logical pixels for Mobile controls.
- Headings: one H1 and ordered H2/H3 hierarchy.
- Links: grade/action text remains understandable without color alone.
- Reduced motion: no necessary information depends on animation.

### 9.2 Gate 6 disposition

Visual target-size and overflow evidence passes. Runtime keyboard, focus, ARIA, initial DOM and menu behavior are implementation acceptance requirements and remain unproven until an authorized external implementation exists.

## 10. Development-field readiness review

Gate 7, if separately authorized, must preserve:

- `page_id=PRODUCT-000`.
- `site_scope=tio2-my` in WordPress queries, Next.js route resolution, relation reads, cache keys, menus, metadata and forms.
- No fallback to another site scope for missing content, media, routes or relations.
- Exact metadata, Hero, six-category Selector, 30 public relations, three Process classes, fourteen directory rows, five Evaluation steps and five FAQ Q/A.
- Atomic route-aware Process and Support collections.
- Global RFQ visibility as a constant; `rfq_route_ready=false` blocks release instead of hiding RFQ.
- Server-rendered FAQ answers and Schema limited to visible content.
- Empty/unverified fields do not render placeholders or guesses.

Field readiness is PASS as a specification inventory. Mapping to actual CMS/API/component fields is Gate 7 work and is not created in this Gate.

## 11. Issue register

### 11.1 BLOCKING — final handoff/release only

| ID | Issue | Required close condition | Status |
|---|---|---|---|
| PRODUCT-G6-B01 | Production SVG Logo is not approved or recorded in a production Manifest | Approved SVG candidate, source/license/usage clearance and Manifest hash | `BLOCKING_FOR_FINAL_HANDOFF/RELEASE_ONLY / OPEN` |
| PRODUCT-G6-B02 | `/request-a-quote/` route, form, validation, privacy, error/success and prefill behavior are not verified | One approved live Malaysia-scope RFQ flow; fixed Global Chrome links resolve to it | `BLOCKING_FOR_FINAL_HANDOFF/RELEASE_ONLY / OPEN` |
| PRODUCT-G6-B03 | Fourteen Grade routes and conditional Process/Applications/Documents/Markets destinations are not verified live | Route inventory with canonical, Page ID, `site_scope=tio2-my`, response and redirect checks | `BLOCKING_FOR_FINAL_HANDOFF/RELEASE_ONLY / OPEN` |

These issues do not prevent Gate 6 content/SEO/GEO/visual review from reaching a project-control decision. They prevent final Gate 7 handoff completion or release.

### 11.2 IMPORTANT

| ID | Issue | Required control | Status |
|---|---|---|---|
| PRODUCT-G6-I01 | Route Audit V0.1 still contains obsolete conditional Global Chrome RFQ behavior | Gate 7 must cite the later fixed-RFQ contract and mark the old visibility rule superseded | OPEN |
| PRODUCT-G6-I02 | Brief V0.2 still describes PRODUCT V0.2.1-era relationship counts and historical M-2377 gates | Create a current relationship/visual addendum before Gate 7 so developers cannot consume stale 25/4 Process data | OPEN |
| PRODUCT-G6-I03 | Global Chrome V0.3 records `Procurement` as user-approved but document status remains draft for project-control review | Shared owner must provide the authoritative approved semantic/component record before final handoff | OPEN |
| PRODUCT-G6-I04 | Runtime DOM, keyboard, ARIA, focus, responsive behavior and metadata/Schema output are not proven by PNGs | Carry exact acceptance criteria into any authorized Gate 7 package and external implementation QA | OPEN |
| PRODUCT-G6-I05 | The approved Gate 5 specification retains historical pending/candidate and pre-Gate-6 stop wording inside its review history | Do not rewrite the approved file; Gate 7 consumers must use the Gate 5 approved Manifest and current Gate 6 package for governance state | OPEN |

### 11.3 ADVISORY

| ID | Issue | Recommendation | Status |
|---|---|---|---|
| PRODUCT-G6-A01 | No approved social preview image | Omit OG/Twitter image until a cleared asset exists | OPEN_NON_BLOCKING |
| PRODUCT-G6-A02 | Current approval evidence is Desktop and 390px; no current Tablet artifact is in this package | Add 768/1024 runtime or state evidence during handoff/implementation QA | OPEN_NON_BLOCKING |
| PRODUCT-G6-A03 | FAQPage does not guarantee search-result enhancement | Treat FAQ Schema as semantic consistency, not a rich-result promise | OPEN_NON_BLOCKING |

## 12. Self-check summary

| Review domain | Result |
|---|---|
| Page identity / URL / keyword | PASS |
| Buyer Clean / claims | PASS |
| PRODUCT V0.3 relations | PASS |
| SEO | PASS as approved target contract |
| GEO | PASS as visible answer graph |
| Schema | PASS as constrained candidate; not implemented |
| Internal links / CTA | PASS_WITH_OPEN_ROUTE_GATES |
| Desktop / 390px visual | PASS |
| Accessibility | PASS as specification; runtime proof pending |
| Development-field readiness | PASS as inventory; Gate 7 mapping not authorized |
| Production Logo | OPEN; final handoff/release blocker only |

Execution-task conclusion:

`READY_FOR_PROJECT_CONTROL_GATE_6_REVIEW / PASS_WITH_OPEN_FINAL_HANDOFF_RELEASE_GATES`

This conclusion does not approve Gate 6, authorize Gate 7 or authorize development.
