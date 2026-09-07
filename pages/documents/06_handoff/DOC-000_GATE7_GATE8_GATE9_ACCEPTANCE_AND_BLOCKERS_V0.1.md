# DOC-000 Gate 7 Gate 8 / Gate 9 Acceptance and Release Blockers V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Package ID | `DOC-000-G7-HANDOFF-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 8 | `NOT_AUTHORIZED` |
| Gate 9 | `NOT_STARTED` |
| Publication/indexing | `NOT_AUTHORIZED` |

## 1. Gate 8 future implementation items

| ID | Item | Required implementation result |
|---|---|---|
| G8-01 | Page content | render exact Brief V0.6 / Content V0.9 contract and module order |
| G8-02 | Shared Chrome | consume owner components and pass only `current_navigation_key=Documents` |
| G8-03 | Hero route | native `/request-documents/` link with no query |
| G8-04 | Selector | exact 14-Grade list; initial/error/selected state contract |
| G8-05 | Grade handoff | one `product` query for valid Grade; editable receiver prefill |
| G8-06 | Invalid query | empty/unsupported/repeated/malformed values fail closed |
| G8-07 | Modules | 3 steps, 3 scenarios, 4 categories, Why band, 6 FAQ, Closing CTA |
| G8-08 | Initial DOM | approved content and all FAQ pairs present without post-click fetch |
| G8-09 | SEO/Social | exact metadata, production Canonical, OG/Twitter source parity |
| G8-10 | Schema | WebPage/Breadcrumb and conditional exact-parity FAQPage only |
| G8-11 | Responsive/A11y | 1440/768/390, Mobile Menu, keyboard, focus, 44px, zoom/overflow |
| G8-12 | Legal | Privacy EN/BM, Cookie Policy, Cookie Settings; no stale Terms route/link |
| G8-13 | Isolation | exact `site_scope=tio2-my` across content/menu/media/route/form/SEO/schema/cache |
| G8-14 | Social image | approved shared key or intentional omission; no cross-scope fallback |

Gate 8 cannot begin from this package until a later authorization and approved Gate 7 result exist.

## 2. Gate 9 future read-only QA matrix

| Area | Evidence and pass condition |
|---|---|
| Identity | 200 response at `/documents/`; one H1; Navigation hub behavior; no alternate Hub route |
| Visual | matches approved Desktop/Tablet/Mobile assets within shared responsive behavior |
| Chrome | current shared Header/Menu/Footer/Logo/RFQ; Documents current semantics; no page-local arrays |
| Content | exact approved copy; 3/3/4/6 cardinalities; no fifth category or file inventory |
| Routes | Hero no-query; all 14 valid prefills editable; invalid inputs fail closed |
| Interaction | Selector initial/error/selected; Closing unselected/selected; FAQ keyboard behavior |
| Accessibility | labels, error association, focus, targets, menu semantics, zoom and overflow pass |
| Initial DOM | H1, content, links and six FAQ pairs present before user interaction |
| SEO | exact title/meta/H1/lang; verified self-Canonical; robots controlled by release state |
| Social | exact single-source OG/Twitter; approved shared image key or no image tags |
| Schema | eligible nodes only; FAQ parity; prohibited node/relation count zero |
| Legal | three approved policy routes and Cookie Settings function; `/terms-of-use/` count zero |
| Isolation | no cross-scope content, media, menu, route, form, SEO, schema or cache leakage |
| Failure states | no dead link, Contact fallback, fake file, internal token, false success or false availability |

Gate 9 is read-only for this D23 project. Findings are returned to the external development project; D23 does not repair code.

## 3. Release blockers

| Blocker ID | Condition | Closure evidence |
|---|---|---|
| RB-01 | `/request-documents/` unresolved or direct Hero path changes | verified route and no-query trace |
| RB-02 | receiver does not keep valid Grade prefill editable/removable | all-14 receiver matrix |
| RB-03 | invalid/repeated/malformed query does not fail closed | negative-query evidence |
| RB-04 | `/products/` dead or shared RFQ route unavailable | route checks; RFQ all required surfaces |
| RB-05 | English operational request process/receiver not ready | operational owner confirmation plus production-equivalent form evidence |
| RB-06 | production Canonical/host or robots state unverified | 200/canonical/robots evidence under release authorization |
| RB-07 | Privacy EN/BM or Cookie Policy link missing; Cookie Settings fails | link and consent-control evidence |
| RB-08 | stale `/terms-of-use/` rendered/generated | zero-count route/link/sitemap/schema checks |
| RB-09 | visible/schema parity fails or prohibited file/compliance relationship exists | DOM/JSON-LD comparison |
| RB-10 | shared social image uses unapproved/factual/cross-scope asset | approved shared key or verified omission |
| RB-11 | `site_scope` fallback/leakage detected | query/cache/runtime isolation evidence |
| RB-12 | 390/320/200% overflow, clipped content or keyboard/focus failure | responsive and manual accessibility trace |
| RB-13 | approved copy/cardinality differs | content fixture and rendered DOM comparison |
| RB-14 | internal placeholders, fake actions, file inventory or false promise rendered | Buyer Clean inspection |

Any open release blocker prevents publication/indexing even if implementation otherwise appears complete.

## 4. Non-blocking optional item

An optional shared social image is not required if image tags are intentionally omitted. It becomes a blocker only if an unapproved, factual, preview or cross-scope fallback is emitted.

## 5. Evidence retention

Future implementation/QA evidence should record environment, date, route, scope, viewport, input state, expected/actual result and artifact reference. Time-sensitive operational or route checks are repeated before release.

## 6. Gate boundaries

- Gate 7 submission does not start Gate 8.
- Gate 8 completion does not approve Gate 9 or release.
- Gate 9 read-only pass does not authorize deployment, publication, DNS or indexing.
- Release requires a separate user decision and external development execution.

Status remains `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.
