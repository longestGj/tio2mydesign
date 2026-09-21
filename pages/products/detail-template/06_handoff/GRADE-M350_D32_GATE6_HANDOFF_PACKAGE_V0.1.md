# GRADE-M350 D32 Gate 6 Development Handoff Package V0.1

2026-09-20. Dispatch `GRADE-M350-D32-G6-EXEC-01`. Author `/root`. Status: `READY_FOR_INDEPENDENT_REVIEW / NOT_YET_APPROVED_FOR_HANDOFF`.

## 1. Object, authority and stop point

Implement one English Grade Detail page in `D:\32Wordpress_new`:

| Field | Value |
|---|---|
| Page | M-350 Titanium Dioxide |
| Public path | `/products/m-350/` |
| Canonical | `https://tio2products.com/products/m-350/` |
| Site scope | `tio2-my` |
| Planning / QA owner | `D:\23MySec` |
| Gate 8 implementation owner | Codex task `02开发`, thread `01a0bd8c-1d64-7fd1-9026-243adc069ca9` |
| Implementation repository | `D:\32Wordpress_new` |
| Gate 9 owner | D23 independent read-only acceptance |
| Stop point | Gate 9 result; Gate 10, merge to release, deployment, public release, sitemap inclusion and indexing are not authorized |

The user explicitly authorized continuous execution from Gate 3 through Gate 9 and assigned development to `02开发`. D23 does not modify D32 code. Gate 8 must read D32 `AGENTS.md`, `README.md` and `CONTRIBUTING.md`, create an isolated worktree from the latest `develop`, use isolated runtime/data volumes, and keep the final candidate unchanged until Gate 9 issues PASS or RETURN.

## 2. Exact approved inputs

| Layer | Exact input |
|---|---|
| Current Manifest | `pages/products/detail-template/GRADE-M350_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md` |
| Buyer-facing content | `04_planning/GRADE-M350_GATE2_FULL_COPY_V0.1.md`, 13942 bytes, SHA `85A4C0183A382F2F8CBFC57D7F59D7DF515111C22F811D97AE195D64C4A6957A` |
| Content approval | `05_review/GRADE-M350_GATE2_USER_APPROVAL_AND_CLOSURE_V0.1.md`, SHA `044AB84DCBD6DA46EDC475A09046DB20B6834FC1B3E42C9A648B26711188943F` |
| Structure | `04_planning/GRADE-M350_D32_GATE3_RESPONSIVE_STRUCTURE_SPEC_V0.1.md`, SHA `202E56807DE4542F488ABE1C687314745F26D3B358FFC4D37E20D7C20979B2D3` |
| Gate 3 source | `04_planning/m350-d32-gate3-v0.1/m350-wireframe.html`, SHA `B5F748B870BA5A6FF1A2C8450DE91633152E7F1A3004ADA88BA405F3E60C36D5` |
| Approved visual bundle | `GRADE-M350-D32-G4-FREEZE-02` |
| Visual source | `04_planning/m350-d32-gate4-v0.2/m350-visual.html`, 31375 bytes, SHA `AAB959A66FD8790C04D1754EE746D5C1E2F9177A52CFA59C0B9EE68E40E44F32` |
| Visual evidence index | `04_planning/m350-d32-gate4-v0.2/gate4_measurements.json`, SHA `DB0082B97984CA51DBC822BA062D218F0E8663B126B81C435D0FA082F546DE83` |
| Final visual review | `05_review/GRADE-M350_D32_GATE5_TARGETED_RECHECK_V0.1.md`, SHA `FB88FA96FB4D8BD8BB6E27F8A00E706949E83C5AC6A56C8940116B63EE738E95` |
| Gate 4/5 closure | `05_review/GRADE-M350_D32_GATE4_GATE5_CONTROLLER_CLOSURE_V0.1.md` |

The final full-page evidence is in `m350-d32-gate4-v0.2/`: desktop `03F744F3...1B36A`, tablet `FCAF1E79...21FA`, mobile `185D76F8...F252`, menu `BE4E32FA...8D76`, cookie `89EA406E...AB4A`. Freeze 01 remains review history and is not an implementation target.

Gate 6 uses `FAST_PATH`: current copy, structure and final visual bundle have valid independent review and closure, no upstream finding remains, and no source changed after closure. This package reviews every new D32 mapping and acceptance condition; it does not repeat the approved visual review.

## 3. WordPress architecture mapping

D32 remains a WordPress/PHP/MariaDB site with native CSS and JavaScript. Do not introduce Next.js, a headless API requirement or another runtime service.

| Concern | Required behavior | Implementation freedom |
|---|---|---|
| Page ownership | A published WordPress Page at `/products/m-350/` is owned internally by `GRADE-M350` and `tio2-my`; duplicate slug, wrong owner or wrong scope fails closed | Exact post meta/option names may follow the accepted D32 managed-page pattern |
| Template | One Grade Detail template consumes the managed M-350 content and shared Header/Footer/Menu/Cookie implementation | File/component names are chosen by D32; no M-350 private Chrome fork |
| Editable content | Every ordinary visible sentence, label, technical row, route path and SEO field in the approved Full Copy is WordPress-managed | A page-specific schema/defaults file or a reusable Grade Detail content model may be used; the approved values remain one controlled record |
| Initial data | Initial import reproduces the approved Full Copy exactly | Seed/import format is chosen by D32; it is initialization, not a permanent runtime dependency |
| Updates | Code/plugin upgrades preserve existing Home, Products and M-350 editor changes | Migration must be compatible, idempotent and recoverable; do not rerun Home bootstrap or overwrite edited options |
| Validation | Type, list length, route shape, allowed markup and `site_scope` are validated before save/use | Do not lock ordinary editable copy to approved literal strings at runtime merely to pass tests |
| Output | Escape text, attributes and URLs for their contexts; render semantic headings, lists, table, links and buttons | The planning HTML may guide composition but is not production-safe code to copy blindly |
| Missing/invalid record | Wrong scope, invalid schema, duplicate managed pages or incomplete migration fails closed with truthful local error behavior | Do not fall back to another site, Home content, Products content or an unowned WordPress page |

Internal ownership metadata, route keys, Gate/review data, evidence paths and migration state are server-side control data. They must not appear in public HTML attributes, inline JSON, JavaScript state, JSON-LD, accessible names or visible text. The only approved public-URL exception is the contextual conversion contract in §5: `site_scope=tio2-my` and `source_page=GRADE-M350` may appear as query parameters on Quote, Sample and Document actions together with the approved grade/document context. They must not leak into unrelated URLs or public payloads.

## 4. Buyer-facing output contract

`GRADE-M350_GATE2_FULL_COPY_V0.1.md` remains the only editable copy authority. Implement it in this exact order:

1. shared Header; breadcrumb `Home > Products > M-350`;
2. Hero with category/process labels, one H1, three approved paragraphs, Quote and Sample actions when their receivers are ready, and the approved three-item data summary;
3. Product Positioning and six approved facts;
4. Application Directions: Decorative, Industrial, Automotive, Printing Inks, Plastics, then separately qualified Paper;
5. two Formulation Evaluation groups and the non-guarantee statement;
6. Typical Technical Data with exactly 15 Property/Standard/Typical rows and non-specification note;
7. Document Request only when its receiver is ready;
8. Market Support, with only ready destination links/cards;
9. Sample Request only when its receiver is ready;
10. shared Footer and Cookie Settings dialog.

Public output contains no TDS revision/version number. The internal evidence file name `TDS_M-350_V3_2023.pdf` and `V3 2023` must never render or enter public metadata, JSON-LD, comments, DOM/JS payloads or URLs. Related Grades, comparisons, `CURRENT`, internal statuses, preview wording, unsupported origin/manufacturer/certification claims, commercial promises and the historical TDS contact identity remain absent.

No approved Grade media exists. Use the approved non-photographic data/evaluation treatment or no media. Do not invent a product bag, factory, shipment, certificate or customer result.

## 5. Conditional routes and receiver context

Readiness requires a published target owned by the expected site/page identity under `tio2-my`; path existence or a client query alone is insufficient. Missing, wrong-scope, wrong-owner, duplicate or unavailable targets fail closed. No cross-scope fallback is allowed in queries, route resolution, cache, menus, SEO, forms or media.

| Action / relationship | Ready behavior | Unready behavior |
|---|---|---|
| Shared fixed RFQ | Always uses clean `/request-a-quote/` under the Global Chrome owner | Remains visible under the shared contract; unresolved receiver blocks integration/release, not honest page rendering |
| Hero Quote | Link to `/request-a-quote/` with `site_scope=tio2-my`, `grade=M-350`, `source_page=GRADE-M350` | Omit only the contextual Hero Quote action |
| Hero Sample + Sample module | Both use `/request-sample/` with the same scope/grade/source context | Omit both the Hero Sample action and complete Sample module |
| TDS action | `/request-documents/` with scope/grade/source plus `requested_type=TDS` | Omit TDS action; if the Document receiver is unavailable, omit the complete Document module |
| Document action/module | `/request-documents/` with scope/grade/source and receiver-controlled document choice | Omit the complete Document module |
| Chloride-process relation | Link only to the validated process target | Keep approved explanatory text without a dead link, or omit only the link |
| Four application topic relations | Link only to validated application targets | Keep approved application content; omit only unresolved links |
| Four market relations | Render each validated destination link/card | Omit only the unavailable destination link/card; keep the market disclaimer |
| Products breadcrumb | Link to accepted `/products/` owner | If the accepted Product Hub is unavailable, integration is not ready; do not point at an unowned/fake page |

Query parameters are buyer-editable input, not authorization. Receivers must independently validate `site_scope`, grade/source context and their own submission rules. The M-350 page does not implement an RFQ, Sample or Document form and does not display a success state.

## 6. Product Hub integration

The approved transition rule keeps all 14 model identities/order in the Product Hub and outputs detail URLs only for ready Grade pages. Once the M-350 page satisfies the page ownership/readiness contract:

- Product Hub shows one M-350 detail action/URL while the other unready Grades remain text-only;
- ItemList keeps all 14 ordered identities and gives a URL only to the ready M-350 item;
- visible and Schema readiness stay aligned; no `@id`, hidden JSON or JavaScript route key may bypass the unready-URL rule;
- M-350 readiness is removed immediately when its page becomes unpublished, wrong-scope, wrong-owner, duplicate or invalid;
- no internal `GRADE-M350` key is exposed publicly.

The Product Hub replacement candidate is undergoing its own Gate 9 process. `02开发` must not treat a returned or mutable Product Hub candidate as approved merely because files exist. Page work may proceed from latest `develop`, but the final integrated Gate 9 candidate must either consume an accepted Product Hub baseline or report `M350-D32-DEP-PRODUCT-HUB` as open with page quality separated from integration readiness. Shared resolver changes are limited to M-350 readiness and must not rewrite Product Hub content/visuals.

## 7. SEO, GEO and Schema

Exact outputs:

- Title: `M-350 Titanium Dioxide for Coatings and Inks | TiO2 Malaysia`
- Meta Description: `Evaluate M-350 titanium dioxide for coatings, printing inks and plastics. Review application directions, formulation priorities and 15-row technical data.`
- Canonical: `https://tio2products.com/products/m-350/`
- language: English;
- one H1: `M-350 Titanium Dioxide for Multi-Application Evaluation`;
- preview/local: `noindex,nofollow`, excluded from sitemap; indexing requires separate Gate 10 authorization.

The page provides a `Product` node and `BreadcrumbList` consistent with visible content. The Product node contains canonical URL, `name: M-350 Titanium Dioxide`, `sku: M-350`, the visible Hero description, approved visible Grade media only if one is later approved, and 15 `additionalProperty` entries that losslessly preserve each visible Property, Standard and Typical Value. Serialization must not turn a Standard threshold into a certified result or hide one column. Visible and machine values must be generated from the same managed source.

Omit Offer, price, availability, rating, review, origin, manufacturer, certification, compliance identifiers, FAQPage and QAPage. Paper is not a hidden performance property and must not become a TDS-derived Schema claim. Conditional visible modules/actions do not leave hidden stronger machine claims behind.

## 8. Visual, responsive and accessibility contract

Reproduce the approved Freeze 02 result using the shared D32 visual system. Preserve navy/teal/light-neutral roles, Inter typography, restrained borders/radii/shadows, Grade Detail hierarchy and the corrected document-band qualification color. Do not hardcode page-wide screenshots or reproduce Header/Footer markup privately.

Required runtime checks at `1440`, `1024`, `768` and `390` CSS pixels:

- full page through shared Footer with no horizontal overflow, clipped copy, collision or anomalous blank section;
- one H1; correct heading order; semantic table with 15 rows; responsive mobile association for Property/Standard/Typical;
- every visible interactive target at least `44×44` CSS px;
- visible keyboard focus; logical tab order; skip link; no focus hidden behind overlays;
- mobile menu current Products state, focus entry/trap, background inertness, Escape close and focus restoration;
- Cookie Settings modal focus entry/trap, Escape/explicit close and focus restoration;
- conditional omissions do not leave empty cards, headings, dividers or inaccessible dead controls;
- automated accessibility scan has no serious/critical issue in scope;
- browser console/network has no unexpected error for the tested page state.

The user has already removed true physical-device, manual screen-reader and native browser/OS zoom evidence from this project's required Gate 9 scope because those methods are unavailable here. Record them as user-excepted/not tested; do not claim they passed. Browser automation, semantic inspection, keyboard operation, geometry and accessible-name/tree checks remain required.

## 9. Stable Gate 9 acceptance IDs

Gate 8 evidence and Gate 9 reports must list all IDs below exactly once. Each mapping contains the approved source, command/evidence, actual result and boundary. Missing IDs are an incomplete handoff, even if tests otherwise pass.

| ID | Observable acceptance condition |
|---|---|
| `M350-D32-AC-IDENTITY` | Exact managed page path, owner, `tio2-my` scope, template/content identity, 200 response and duplicate/wrong-owner fail-closed behavior |
| `M350-D32-AC-CONTENT` | All approved public modules/copy/order and deliberate omissions match the Full Copy; one H1; public TDS version exposure zero |
| `M350-D32-AC-TECHNICAL` | Exactly 15 visible rows with exact Property/Standard/Typical values, units and non-specification note; source-to-Schema parity |
| `M350-D32-AC-VISUAL` | Runtime at four widths matches Freeze 02 hierarchy, shared visual level and corrected document qualification contrast without overflow/crop |
| `M350-D32-AC-A11Y` | 44px targets, semantic structure, keyboard/focus/menu/cookie behavior and automated serious/critical scan requirements pass |
| `M350-D32-AC-CONDITIONAL-ROUTES` | Ready/unready/wrong-scope/wrong-owner/removed target matrix produces the exact module/link omissions with no dead or fake destination |
| `M350-D32-AC-CONVERSION-CONTEXT` | Contextual Quote/Sample/Document URLs carry exact permitted context only; fixed RFQ remains clean; no embedded form or fake success |
| `M350-D32-AC-SEO` | Exact title/meta/canonical/language/one-H1; preview noindex/nofollow and sitemap exclusion; no old/local canonical |
| `M350-D32-AC-SCHEMA` | Product + Breadcrumb only as approved; 15 properties preserve both value columns; forbidden claims/types absent; conditional parity holds |
| `M350-D32-AC-CMS` | All ordinary content/links/SEO/rows are editable with validation; a controlled edit changes front-end and machine output and is restored |
| `M350-D32-AC-MIGRATION` | Migration preserves Home/Products/M-350 edits, is idempotent, fails/rolls back safely and never requires rerunning Home bootstrap |
| `M350-D32-AC-SCOPE` | query/route/cache/menu/SEO/form/media behavior stays in `tio2-my`; missing/wrong scope never falls back across sites |
| `M350-D32-AC-PUBLIC-CLEAN` | Public HTML, DOM, JS, JSON-LD and comments contain no Gate/review/evidence identifiers, route keys or internal TDS version identity; `site_scope=tio2-my` and `source_page=GRADE-M350` occur only in the approved contextual conversion URLs and nowhere else |
| `M350-D32-AC-CHROME` | M-350 consumes the one shared Header/Footer/Menu/Cookie/Logo; Products current state is correct; Home and accepted Product Hub shared regression remains green |
| `M350-D32-AC-PRODUCT-HUB` | When integrated with accepted Product Hub, only ready M-350 gains a visible/Schema URL and loses it immediately on readiness failure; other 13 remain ordered and unlinked |
| `M350-D32-AC-EVIDENCE` | Exact clean commits, build/runtime/content identities, manifest hashes, two-round preflight and held runtime satisfy the Gate 8→9 handoff contract |

## 10. Open dependencies and status separation

| Dependency | Owner / acceptance | Unmet impact |
|---|---|---|
| `M350-D32-DEP-PRODUCT-HUB` | Product Hub owner supplies an accepted immutable baseline; M-350 owner proves readiness link integration | Page may pass standalone quality; integration remains not ready |
| `M350-D32-DEP-RFQ` | RFQ owner provides a real receiver accepting validated context; shared clean RFQ still renders | Contextual Hero Quote omitted; release/integration remains open |
| `M350-D32-DEP-SAMPLE` | Sample owner provides real target/receiver | Hero Sample and Sample module omitted |
| `M350-D32-DEP-DOCUMENT` | Document owner provides real target/receiver | TDS action and complete Document module omitted |
| `M350-D32-DEP-PROCESS` | Chloride-process page owner provides valid ready target | approved process wording remains non-linked |
| `M350-D32-DEP-APPLICATIONS` | Application owners provide validated ready targets | approved application content remains; unresolved topic links omitted |
| `M350-D32-DEP-MARKETS` | Market page owners provide validated ready targets | each unresolved market card/link omitted |
| `M350-D32-DEP-INDEXING` | Project Control/User grants Gate 10 release/indexing after dependencies | preview stays noindex and sitemap-excluded |

Gate 9 reports four independent statuses: page acceptance scope, `PAGE_GATE9_STATUS`, `INTEGRATION_STATUS`, and `RELEASE_STATUS`. Open external dependencies do not become fake page defects, and a page PASS does not close them or authorize release.

## 11. Gate 8 evidence return

Gate 8 returns one immutable Evidence Manifest compliant with `GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md` and its schema. It must include:

- implementation commit, evidence commit/current clean HEAD, observed commit and clean worktree status;
- branch/worktree, dedicated loopback runtime URL/port, isolated service/data identity, `site_scope`, page path and WordPress artifact/build ID;
- exact code, content, migration, screenshots, test outputs and their SHA-256 values;
- all 16 acceptance IDs from §9 with evidence paths/commands/results/boundaries;
- complete dependency states from §10;
- successful syntax/unit/integration/HTTP/browser/editor/migration/negative/scope/public-clean/SEO/Schema/Chrome/Product Hub tests as applicable;
- formal runtime screenshots at 1440/1024/768/390, menu and cookie states, plus conditional-state evidence where visual output changes;
- proof that temporary content/readiness changes were restored;
- two Gate 9 preflight rounds against the same unchanged runtime.

The developer's PASS, screenshot, 2xx result, unit test or old D16/Grade implementation does not substitute for the observable conditions. The final runtime remains running and unchanged until D23 sends Gate 9 PASS or RETURN. Gate 8 must not deploy, publish, enable indexing, create sibling pages or merge a release branch under this package.

## 12. Gate 6 self-check and current state

The package traces every new implementation requirement to the approved Full Copy, Gate 3 structure, Freeze 02 visual bundle, current shared contracts or D32 repository rules. It introduces no buyer-facing copy, product fact, new page, external receiver or public claim. Internal implementation metadata is explicitly separated from public output. All 16 acceptance IDs are unique and every open dependency has an owner, fail-closed behavior and verification stage.

`GATE_6_EXECUTION_RESULT = READY_FOR_INDEPENDENT_REVIEW`

An independent reviewer must read this package and its exact approved inputs, verify the D32 mapping and acceptance coverage, and return PASS or CHANGES_REQUIRED. Until that review and Controller closure, this package must not be sent to `02开发` as an approved Gate 8 instruction.
