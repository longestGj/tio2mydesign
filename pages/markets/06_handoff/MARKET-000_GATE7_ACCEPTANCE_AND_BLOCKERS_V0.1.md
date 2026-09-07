# MARKET-000 Gate 7 Acceptance and Blockers V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `MARKET-000` / `/markets/` |
| Date | 2026-08-31 |
| Status | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE` |
| Gate 8 | `LOCKED / NOT_AUTHORIZED` |
| Gate 9 | Future read-only QA only |

## 1. Gate 7 package acceptance

- [x] Page ID, URL, type, P1, `NO_PRIMARY_KEYWORD`, mapping and verification match Registry/master CSV.
- [x] Approved Gate 5 V0.4 specification and four asset hashes are locked.
- [x] Exact Buyer Clean fields are mapped.
- [x] Ten Market actions have stable Page IDs, labels, order and planned URLs.
- [x] Complete 22-route inventory and states are present.
- [x] PT-BR and four Trade routes remain absent/frozen.
- [x] PRODUCT V0.3 zero-row-level rendering is explicit.
- [x] Fixed RFQ is separated from route readiness.
- [x] SEO/GEO/Schema and prohibited-output rules are explicit.
- [x] Desktop/390/768 and accessibility behavior are specified.
- [x] CMS/API/component semantic fields are mapped without implementation code.
- [x] `site_scope=tio2-my` isolation covers queries, routes, menus, metadata, media, forms and caches.
- [x] Gate 8 implementation and Gate 9 read-only QA responsibilities are separated.
- [x] Shared owner production Logo Manifest, Addendum, cross-page registration and asset keys are synchronized; `MARKET-G7-B05=CLOSED`.
- [x] Project control has approved this Gate 7 package under `MARKET-000-G7-PCR-01`.

## 2. Current blockers and carry-forwards

### 2.1 Shared asset dependency

| ID | Issue | Close condition | Status |
|---|---|---|---|
| `MARKET-G7-B05` | Shared production SVG authority required from Home/Global Chrome owner | Production Manifest V1.0, Logo Asset Addendum V1.0 and Cross-Page Registry V1.0 now exist and register Markets | `APPROVED / CLOSED` |

### 2.2 Gate 8 implementation / Gate 9 release acceptance

| ID | Item | Gate 8 requirement | Gate 9 close evidence | Status |
|---|---|---|---|---|
| `MARKET-G6-B01` | Ten Market and applicable support routes | Implement scoped routes, anchors, Canonicals, menus and Schema parity | Response/redirect/Canonical/link/sitemap/Schema/scope-isolation evidence | `GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `MARKET-G6-B02` | Fixed RFQ route/form | Implement `/request-a-quote/`, validation, privacy, error/success and approved prefill | End-to-end route/form evidence from every Global Chrome surface | `GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |
| `MARKET-G6-B03` | Runtime DOM, metadata, Schema, keyboard, menu and responsive behavior | Implement exact Gate 7 contract | Read-only DOM/JSON-LD/keyboard/ARIA/viewport evidence | `GATE_8_IMPLEMENTATION_REQUIREMENT / GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER` |

B01–B03 do not block Gate 7 package creation or project-control review. They must be carried to Gate 8 and closed through Gate 9 before release.

### 2.3 Frozen content/evidence gates

| ID | Boundary | Current status |
|---|---|---|
| `MKT-R002` | Market-specific Product/Application/Documents/logistics/supply facts | OPEN; no such facts render |
| `MKT-R003` | Brazil PT-BR URL/language/localization | OPEN / `LOCALIZATION_HOLD / DO_NOT_RENDER` |
| `MKT-R004` | 22 routes lack live implementation evidence | OPEN as Gate 8/9 phase item; not a pre-Gate-7-live requirement |
| `MKT-R005` | Specific Trade official-source/freshness | OPEN / four specific routes `DO_NOT_RENDER` |

### 2.4 Non-blocking historical carry-forwards

| ID | Control | Status |
|---|---|---|
| `MARKET-G6-I01` | Fixed-RFQ V0.2 supersedes older conditional Global Chrome wording | `OPEN_CARRY_FORWARD / NON_BLOCKING_FOR_GATE_7` |
| `MARKET-G6-I02` | Responsive States V0.4 embedded draft label is historical; Manifest/current package controls | `OPEN_CARRY_FORWARD / NON_BLOCKING_FOR_GATE_7` |

## 3. Gate 8 implementation acceptance contract

If separately authorized, external development must:

1. Use `site_scope=tio2-my` for every content, route, menu, metadata, form, media and cache operation.
2. Implement the exact Buyer Clean copy and order without shortening it to fit.
3. Implement ten English Market actions as normal crawlable anchors.
4. Keep PT-BR and four specific Trade destinations absent.
5. Keep row-level Grade/Application/Process relations at zero.
6. Keep Global Chrome RFQ always visible and consistent.
7. Use the owner-approved production Logo Manifest only after B05 closes.
8. Emit one H1, correct metadata, self-Canonical, environment robots and constrained Schema.
9. Implement semantic menu, focus, keyboard, 44px targets and initial DOM answers.
10. Avoid any fallback to another site scope.

## 4. Gate 9 read-only QA matrix

| Domain | Required evidence |
|---|---|
| Identity | URL, title, H1, page ID/source mapping and current navigation |
| Scope | No cross-scope query, route, menu, media, metadata, cache or form leakage |
| Routes | All visible anchors return approved behavior; redirects and Canonicals match |
| PT-BR | 0 DOM/menu/Schema/hreflang/sitemap output |
| Trade | 0 current outcome and 0 specific Trade URL until independently approved |
| Product relations | 0 row-level mapping and 0 country recommendation |
| RFQ | Four Global Chrome surfaces visible; route/form/privacy/error/success behavior works |
| SEO | Exact Title/Meta mode/Canonical/robots/hreflang/sitemap |
| Schema | Valid JSON-LD; allowed types only; ten ItemList items match visible anchors |
| Desktop | 1440 reference hierarchy, alignment, no crop or overlap |
| Tablet | 768 reference, two-column EU actions, no horizontal overflow |
| Mobile | 390 logical, ≥44px targets, 16px body, no crop or horizontal scroll |
| Accessibility | Keyboard, focus, menu Escape/return, aria-current, headings, link names, reduced motion |
| Logo | Production asset matches shared owner Manifest; old PNG is not served as production Logo |

## 5. Release blockers

Any of the following blocks release/indexing:

- required visible route is broken, cross-scope or non-canonical;
- RFQ route/form is incomplete;
- production Logo is not sourced from the approved owner Manifest;
- PT-BR or specific Trade content leaks;
- unsupported market/product/origin/logistics/document claims render;
- Canonical, robots, sitemap or Schema diverges from the contract;
- keyboard, focus, Mobile Menu or 390px usability fails;
- any `site_scope` fallback or cache leakage is detected.

## 6. Gate 7 disposition boundary

Project control approved the full Gate 7 package under `MARKET-000-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`. The page lifecycle is `APPROVED_FOR_HANDOFF`, but the package has not been handed off. Gate 8 remains `LOCKED / NOT_AUTHORIZED`; child pages, development, deployment and publication remain unauthorized.

## 7. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-31 | Initial Gate 7 acceptance, blockers and Gate 8/9 matrix; independent project-control review passed | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE`; Gate 8 locked |
