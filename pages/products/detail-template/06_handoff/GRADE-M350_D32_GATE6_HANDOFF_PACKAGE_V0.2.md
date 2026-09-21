# GRADE-M350 D32 Gate 6 Development Handoff Package V0.2

2026-09-20. Dispatch `GRADE-M350-D32-G6-EXEC-02`. Author `/root`. Status: `READY_FOR_TARGETED_RECHECK / NOT_YET_APPROVED_FOR_HANDOFF`.

## 1. Object, authority and stop point

Implement one English Grade Detail page in `D:\32Wordpress_new`:

| Field | Value |
|---|---|
| Page | M-350 Titanium Dioxide |
| Page ID | `GRADE-M350` |
| Public path | `/products/m-350/` |
| Canonical | `https://tio2products.com/products/m-350/` |
| Locale | `en` |
| Internal content-contract revision | `GRADE-M350-D32-CONTENT-CONTRACT-V1.0` (server-side/evidence only; never public) |
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
| Gate 6 first independent review | `05_review/GRADE-M350_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md`, SHA `2660C82FCC0D39B4D79007AE6589ACD048D709CB111C31DE15BAB084CD636A1C` |
| Accepted Product Hub Manifest | `pages/products/PRODUCT-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md`; Gate 9 `PASS / CLOSED` |
| Accepted Product Hub identity | implementation `95ed4c4c47481ef78f64fa90b95a1096ea45bfae`; evidence/clean HEAD `8a4e3f5cb88cc30d0aecc36955ccb3ac19b8307c`; build `wp-9fcfb835a0e8b3709924a3d05cfe0bf5173fcd4db200308e0c4edf96845b68df`; recheck SHA `D21C1C53C43F53E561DDE7233E9635BF715B642BBCD671190658942EDDA26C40` |

The final full-page evidence is in `m350-d32-gate4-v0.2/`: desktop `03F744F3...1B36A`, tablet `FCAF1E79...21FA`, mobile `185D76F8...F252`, menu `BE4E32FA...8D76`, cookie `89EA406E...AB4A`. Freeze 01 remains review history and is not an implementation target.

Gate 6 uses `FAST_PATH`: current copy, structure and final visual bundle have valid independent review and closure, no upstream finding remains, and no source changed after closure. This package reviews every new D32 mapping and acceptance condition; it does not repeat the approved visual review. V0.2 closes the four contract findings from the first Gate 6 independent review without changing Buyer Clean copy, page structure or Freeze 02.

## 3. WordPress architecture mapping

D32 remains a WordPress/PHP/MariaDB site with native CSS and JavaScript. Do not introduce Next.js, a headless API requirement or another runtime service.

| Concern | Required behavior | Implementation freedom |
|---|---|---|
| Page ownership | A published WordPress Page at `/products/m-350/` is owned internally by `GRADE-M350` and `tio2-my`; duplicate slug, wrong owner or wrong scope fails closed | Exact post meta/option names may follow the accepted D32 managed-page pattern |
| Template | One Grade Detail template consumes the managed M-350 content and shared Header/Footer/Menu/Cookie implementation | File/component names are chosen by D32; no M-350 private Chrome fork |
| Editable content | Every ordinary visible sentence, label, technical row, route path and SEO field in the approved Full Copy is WordPress-managed; every technical row and the Paper relation has a controlled source-status/visibility state | A page-specific schema/defaults file or a reusable Grade Detail content model may be used; the approved values remain one controlled record |
| Initial data | Initial import reproduces the approved Full Copy exactly | Seed/import format is chosen by D32; it is initialization, not a permanent runtime dependency |
| Updates | Code/plugin upgrades preserve existing Home, Products and M-350 editor changes | Migration must be compatible, idempotent and recoverable; do not rerun Home bootstrap or overwrite edited options |
| Validation | Type, initial 15-row inventory, row/relation source status, route shape, allowed markup, locale, content-contract revision and `site_scope` are validated before save/use | Do not lock ordinary editable copy to approved literal strings at runtime merely to pass tests |
| Output | Escape text, attributes and URLs for their contexts; render semantic headings, lists, table, links and buttons | The planning HTML may guide composition but is not production-safe code to copy blindly |
| Missing/invalid record | Wrong scope, invalid schema, duplicate managed pages or incomplete migration fails closed with truthful local error behavior; an explicitly withdrawn/conflicted row or withdrawn Paper relation is a valid source-bound conditional state, not an incomplete-record error | Do not fall back to another site, Home content, Products content or an unowned WordPress page |

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

The approved initial seed contains all 15 technical rows and the separately qualified Paper path. If an authorized source state later marks one TDS field withdrawn or conflicted, suppress only that affected visible claim/row and its matching `additionalProperty`; all unaffected rows and the page remain available. Restoring the approved source state restores the same row and machine value. If the approved neutral Paper relation is withdrawn, omit only the Paper path and its Application link while preserving the five TDS-backed directions; restoring it restores that qualified path. These source-status changes require an authorized managed value and must never be inferred from missing runtime data.

Public output contains no TDS revision/version number. The internal evidence file name `TDS_M-350_V3_2023.pdf` and `V3 2023` must never render or enter public metadata, JSON-LD, comments, DOM/JS payloads or URLs. Related Grades, comparisons, `CURRENT`, internal statuses, preview wording, unsupported origin/manufacturer/certification claims, commercial promises and the historical TDS contact identity remain absent.

No approved Grade media exists. Use the approved non-photographic data/evaluation treatment or no media. Do not invent a product bag, factory, shipment, certificate or customer result.

## 5. Conditional routes and receiver context

Readiness requires a published target owned by the expected site/page identity under `tio2-my`; path existence or a client query alone is insufficient. Missing, wrong-scope, wrong-owner, duplicate or unavailable targets fail closed. No cross-scope fallback is allowed in queries, route resolution, cache, menus, SEO, forms or media.

| Action / relationship | Expected owner / current path | Current URL-status boundary | Ready behavior | Unready behavior |
|---|---|---|---|---|
| Shared fixed RFQ | `CONV-RFQ` · `/request-a-quote/` | Shared Global Chrome authority; receiver readiness is separate | Always uses the clean path with no page context | Remains visible under the shared contract; unresolved receiver blocks integration/release, not honest page rendering |
| Hero Quote | `CONV-RFQ` · `/request-a-quote/` | Conditional receiver | Add only `site_scope=tio2-my`, `grade=M-350`, `source_page=GRADE-M350` | Omit only the contextual Hero Quote action |
| Hero Sample + Sample module | `CONV-SAMPLE` · `/request-sample/` | Conditional receiver | Both use the same scope/grade/source context | Omit both the Hero Sample action and complete Sample module |
| TDS action | `CONV-DOC` · `/request-documents/` | Conditional receiver | Add scope/grade/source plus `requested_type=TDS` | Omit the TDS action; if the receiver is unavailable, omit the complete Document module |
| Document action/module | `CONV-DOC` · `/request-documents/` | Conditional receiver | Add scope/grade/source and receiver-controlled document choice | Omit the complete Document module |
| Chloride-process relation | `PRODUCT-PROC-CL` · `/products/chloride-process-titanium-dioxide/` | Registry `APPROVED_PRD_V0.3`; runtime readiness still conditional | Link only after owner + `tio2-my` validation | Keep approved explanatory text without a dead link, or omit only the link |
| Decorative/Industrial/Automotive coatings relation | `APP-COAT` · `/applications/titanium-dioxide-for-coatings/` | Registry `PROVISIONAL_URL`; never treat path text as readiness | Link only after owner + `tio2-my` validation | Keep approved application content; omit only the unresolved link |
| Printing Inks relation | `APP-INK` · `/applications/titanium-dioxide-for-printing-inks/` | Registry `PROVISIONAL_URL`; never treat path text as readiness | Link only after owner + `tio2-my` validation | Keep approved application content; omit only the unresolved link |
| Plastics relation | `APP-PLAS` · `/applications/titanium-dioxide-for-plastics/` | Registry `PROVISIONAL_URL`; never treat path text as readiness | Link only after owner + `tio2-my` validation | Keep approved application content; omit only the unresolved link |
| Separately qualified Paper relation | `APP-PAPER` · `/applications/titanium-dioxide-for-paper/` | Registry `PROVISIONAL_URL`; relation itself may also be withdrawn under §4 | Link only after owner + `tio2-my` validation and active relation status | Preserve the approved qualified text but omit an unresolved link; if the relation is withdrawn, omit the complete Paper path and link |
| European Union market | `MARKET-EU-001` · `/markets/european-union/` | Registry `APPROVED_PRD_V0.3`; runtime readiness still conditional | Render after owner + `tio2-my` validation | Omit only this destination link/card and keep the disclaimer |
| United Kingdom market | `MARKET-UK-001` · `/markets/united-kingdom/` | Registry `APPROVED_PRD_V0.3`; runtime readiness still conditional | Render after owner + `tio2-my` validation | Omit only this destination link/card and keep the disclaimer |
| India market | `MARKET-IN-001` · `/markets/india/` | Registry `APPROVED_PRD_V0.3`; runtime readiness still conditional | Render after owner + `tio2-my` validation | Omit only this destination link/card and keep the disclaimer |
| Brazil market | `MARKET-BR-EN` · `/markets/brazil/` | Registry `APPROVED_PRD_V0.3`; runtime readiness still conditional | Render after owner + `tio2-my` validation | Omit only this destination link/card and keep the disclaimer |
| Products breadcrumb | `PRODUCT-000` · `/products/` | Accepted Product Hub identity in §2; repository integration may still be open | Link only to the accepted owner | If that exact baseline is not consumed, integration is not ready; do not point at an unowned/fake page |

Query parameters are buyer-editable input, not authorization. Receivers must independently validate `site_scope`, grade/source context and their own submission rules. The M-350 page does not implement an RFQ, Sample or Document form and does not display a success state.

For the contextual RFQ to count as ready, the receiver must visibly render `Request a Quote for M-350`; its helper must ask for destination, quantity range, application and purchasing requirements; submission and success output must not promise price, stock, MOQ, Incoterm, freight, lead time or delivery. A receiver that accepts the query but does not meet this result contract remains unready for the contextual Hero Quote.

## 6. Product Hub integration

The approved transition rule keeps all 14 model identities/order in the Product Hub and outputs detail URLs only for ready Grade pages. Once the M-350 page satisfies the page ownership/readiness contract:

- Product Hub shows one M-350 detail action/URL while the other unready Grades remain text-only;
- ItemList keeps all 14 ordered identities and gives a URL only to the ready M-350 item;
- visible and Schema readiness stay aligned; no `@id`, hidden JSON or JavaScript route key may bypass the unready-URL rule;
- M-350 readiness is removed immediately when its page becomes unpublished, wrong-scope, wrong-owner, duplicate or invalid;
- no internal `GRADE-M350` key is exposed publicly.

The accepted Product Hub baseline is fixed by §2 and its current Manifest V0.2. At this Gate 6 handoff it is Gate 9 `PASS / CLOSED` but remains separate from D32 `develop`; that distinction is part of the evidence boundary.

`02开发` starts its feature worktree from the latest local `develop` as required by D32. If the exact accepted Product Hub evidence HEAD is already an ancestor of that base, record the ancestry. If it is not, the only permitted combined candidate is an isolated local feature/integration composition that incorporates the exact accepted Product Hub implementation/evidence identity through the D32 repository workflow and records the resulting parent/merge/cherry-pick identities; this does not authorize merging to `develop`/`main`, deployment or release. Do not copy files from a mutable runtime or recreate Product Hub by hand. The M-350 Evidence Manifest must separately identify (a) the M-350 implementation commit, (b) the exact consumed Product Hub implementation and evidence commits/build, and (c) the final composition/observed HEAD.

If that exact composition is intentionally deferred or unavailable, return a standalone M-350 candidate, keep `M350-D32-DEP-PRODUCT-HUB=OPEN`, and do not claim `M350-D32-AC-PRODUCT-HUB` PASS. Shared resolver changes are limited to M-350 readiness and must not rewrite Product Hub content/visuals.

## 7. SEO, GEO and Schema

Exact outputs:

- Title: `M-350 Titanium Dioxide for Coatings and Inks | TiO2 Malaysia`
- Meta Description: `Evaluate M-350 titanium dioxide for coatings, printing inks and plastics. Review application directions, formulation priorities and 15-row technical data.`
- Canonical: `https://tio2products.com/products/m-350/`
- language: English;
- locale: `en`;
- one H1: `M-350 Titanium Dioxide for Multi-Application Evaluation`;
- preview/local: `noindex,nofollow`, excluded from sitemap; indexing requires separate Gate 10 authorization.

The page provides a `Product` node and `BreadcrumbList` consistent with visible content. The Product node contains `@id: https://tio2products.com/products/m-350/#product`, canonical URL, `name: M-350 Titanium Dioxide`, `sku: M-350`, and the exact first visible Hero paragraph as `description`: `M-350 is a general-grade rutile titanium dioxide pigment produced by the chloride process for evaluation in decorative, industrial and automotive coatings, printing inks and plastics.` It may include approved visible Grade media only if one is later approved. In the initial approved state it contains 15 `additionalProperty` entries that losslessly preserve each visible Property, Standard and Typical Value. When an authorized row is withdrawn/conflicted, the matching visible row and `additionalProperty` are both absent until restoration. Serialization must not turn a Standard threshold into a certified result or hide one column. Visible and machine values must be generated from the same managed source.

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
| `M350-D32-AC-IDENTITY` | Exact managed page path, owner, `tio2-my`, locale `en`, internal content-contract revision `GRADE-M350-D32-CONTENT-CONTRACT-V1.0`, template/content identity, 200 response and duplicate/wrong-owner fail-closed behavior |
| `M350-D32-AC-CONTENT` | All approved public modules/copy/order and deliberate omissions match the Full Copy; one H1; public TDS version exposure zero; Paper-withdrawn and restored-Paper states affect only the qualified Paper path/link |
| `M350-D32-AC-TECHNICAL` | Initial state has exactly 15 visible rows with exact Property/Standard/Typical values, units and non-specification note; one authorized affected-row state suppresses only that row and matching Schema value; restored state returns exact 15-row parity |
| `M350-D32-AC-VISUAL` | Runtime at four widths matches Freeze 02 hierarchy, shared visual level and corrected document qualification contrast without overflow/crop |
| `M350-D32-AC-A11Y` | 44px targets, semantic structure, keyboard/focus/menu/cookie behavior and automated serious/critical scan requirements pass |
| `M350-D32-AC-CONDITIONAL-ROUTES` | Every exact Page ID/path in §5 passes the ready/unready/wrong-scope/wrong-owner/removed target matrix and produces the exact module/link omissions with no dead or fake destination; Paper withdrawn/restored states also pass |
| `M350-D32-AC-CONVERSION-CONTEXT` | Contextual Quote/Sample/Document URLs carry exact permitted context only; fixed RFQ remains clean; a ready RFQ receiver produces the exact M-350 heading/helper/no-promise result; no embedded form or fake success |
| `M350-D32-AC-SEO` | Exact title/meta/canonical/language/one-H1; preview noindex/nofollow and sitemap exclusion; no old/local canonical |
| `M350-D32-AC-SCHEMA` | Product `@id`, exact visible Hero description, name/SKU/canonical and Breadcrumb are exact; initial 15 properties preserve both value columns; affected/restored row and Paper states remain visible/machine aligned; forbidden claims/types absent |
| `M350-D32-AC-CMS` | The internal revision and locale bind one managed record; all ordinary content/links/SEO/rows plus controlled row/Paper source status are editable with validation; a controlled edit changes front-end and machine output and is restored |
| `M350-D32-AC-MIGRATION` | Migration preserves Home/Products/M-350 edits, is idempotent, fails/rolls back safely and never requires rerunning Home bootstrap |
| `M350-D32-AC-SCOPE` | query/route/cache/menu/SEO/form/media behavior stays in `tio2-my`; missing/wrong scope never falls back across sites |
| `M350-D32-AC-PUBLIC-CLEAN` | Public HTML, DOM, JS, JSON-LD and comments contain no Gate/review/evidence identifiers, route keys or internal TDS version identity; `site_scope=tio2-my` and `source_page=GRADE-M350` occur only in the approved contextual conversion URLs and nowhere else |
| `M350-D32-AC-CHROME` | M-350 consumes the one shared Header/Footer/Menu/Cookie/Logo; Products current state is correct; Home and accepted Product Hub shared regression remains green |
| `M350-D32-AC-PRODUCT-HUB` | The exact §2 accepted Product Hub baseline is proven by ancestry/composition; only ready M-350 gains a visible/Schema URL and loses it immediately on readiness failure; other 13 remain ordered and unlinked |
| `M350-D32-AC-EVIDENCE` | Exact M-350 implementation, accepted Product Hub consumption or explicit open state, composition/observed HEAD, build/runtime/internal content revision identities, manifest hashes, two-round preflight and held runtime satisfy the Gate 8→9 handoff contract |

## 10. Open dependencies and status separation

| Dependency | Owner / acceptance | Unmet impact |
|---|---|---|
| `M350-D32-DEP-PRODUCT-HUB` | Exact accepted baseline is Product Hub implementation `95ed4c4c...`, evidence HEAD `8a4e3f5c...`, build `wp-9fcfb8...`; M-350 owner proves ancestry/composition and readiness integration as §6 requires | Page may pass standalone quality; without exact composition `M350-D32-AC-PRODUCT-HUB` cannot pass and integration remains not ready |
| `M350-D32-DEP-RFQ` | `CONV-RFQ` provides a real receiver that validates context and visibly returns `Request a Quote for M-350`, asks for destination, quantity range, application and purchasing requirements, and makes none of the prohibited commercial/logistics promises; shared fixed RFQ remains clean | Contextual Hero Quote omitted; release/integration remains open |
| `M350-D32-DEP-SAMPLE` | Sample owner provides real target/receiver | Hero Sample and Sample module omitted |
| `M350-D32-DEP-DOCUMENT` | Document owner provides real target/receiver | TDS action and complete Document module omitted |
| `M350-D32-DEP-PROCESS` | `PRODUCT-PROC-CL` supplies the exact §5 path under the expected `tio2-my` owner | approved process wording remains non-linked |
| `M350-D32-DEP-APPLICATIONS` | `APP-COAT`, `APP-INK`, `APP-PLAS`, `APP-PAPER` supply their exact §5 paths under expected `tio2-my` owners; provisional path text alone is insufficient | approved application content remains; unresolved topic links omitted; withdrawn Paper follows §4 |
| `M350-D32-DEP-MARKETS` | `MARKET-EU-001`, `MARKET-UK-001`, `MARKET-IN-001`, `MARKET-BR-EN` supply their exact §5 paths under expected `tio2-my` owners | each unresolved market card/link omitted |
| `M350-D32-DEP-INDEXING` | Project Control/User grants Gate 10 release/indexing after dependencies | preview stays noindex and sitemap-excluded |

Gate 9 reports four independent statuses: page acceptance scope, `PAGE_GATE9_STATUS`, `INTEGRATION_STATUS`, and `RELEASE_STATUS`. Open external dependencies do not become fake page defects, and a page PASS does not close them or authorize release.

## 11. Gate 8 evidence return

Gate 8 returns one immutable Evidence Manifest compliant with `GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md` and its schema. It must include:

- implementation commit, evidence commit/current clean HEAD, observed commit and clean worktree status;
- branch/worktree, dedicated loopback runtime URL/port, isolated service/data identity, `site_scope`, page path and WordPress artifact/build ID;
- exact code, content, migration, screenshots, test outputs and their SHA-256 values;
- `locale=en`, internal content-contract revision `GRADE-M350-D32-CONTENT-CONTRACT-V1.0`, and proof that this control identity never enters public output;
- the M-350 implementation commit, the exact accepted Product Hub implementation/evidence/build identities if consumed, the ancestry/composition path, and the final observed HEAD; otherwise an explicit open Product Hub dependency and non-PASS mapping;
- all 16 acceptance IDs from §9 with evidence paths/commands/results/boundaries;
- complete dependency states from §10;
- successful syntax/unit/integration/HTTP/browser/editor/migration/negative/scope/public-clean/SEO/Schema/Chrome/Product Hub tests as applicable;
- formal runtime screenshots at 1440/1024/768/390, menu and cookie states, plus conditional-state evidence where visual output changes;
- initial 15-row, one affected-row, restored-row, Paper-withdrawn and restored-Paper tests showing visible/Schema synchronization and scoped restoration;
- proof that temporary content/readiness changes were restored;
- two Gate 9 preflight rounds against the same unchanged runtime.

The developer's PASS, screenshot, 2xx result, unit test or old D16/Grade implementation does not substitute for the observable conditions. The final runtime remains running and unchanged until D23 sends Gate 9 PASS or RETURN. Gate 8 must not deploy, publish, enable indexing, create sibling pages or merge a release branch under this package.

## 12. Gate 6 self-check and current state

The package traces every new implementation requirement to the approved Full Copy, Gate 3 structure, Freeze 02 visual bundle, current shared contracts or D32 repository rules. It introduces no buyer-facing copy, product fact, new page, external receiver or public claim. Internal implementation metadata is explicitly separated from public output. All 16 acceptance IDs are unique and every open dependency has an owner, fail-closed behavior and verification stage.

First-review closure mapping:

| Finding | V0.2 resolution |
|---|---|
| `GRADE-M350-D32-G6-F01` | §2 and §6 bind the accepted Product Hub Manifest, implementation/evidence/build identities, latest-`develop` composition route and standalone-open alternative |
| `GRADE-M350-D32-G6-F02` | §5 and §10 bind every Process/Application/Market Page ID, current path/status boundary, owner check and the exact RFQ receiver result contract |
| `GRADE-M350-D32-G6-F03` | §3–§4 and §9/§11 preserve affected/restored TDS-row and Paper-withdrawn/restored behavior while retaining the initial 15-row approved state |
| `GRADE-M350-D32-G6-F04` | §1, §7, §9 and §11 bind locale, internal content-contract revision, exact Product `@id` and exact Hero description |

`GATE_6_EXECUTION_RESULT = READY_FOR_TARGETED_RECHECK`

The original independent reviewer must recheck F01–F04 against this exact V0.2 identity and return PASS or CHANGES_REQUIRED. Until that recheck and Controller closure, this package must not be sent to `02开发` as an approved Gate 8 instruction.
