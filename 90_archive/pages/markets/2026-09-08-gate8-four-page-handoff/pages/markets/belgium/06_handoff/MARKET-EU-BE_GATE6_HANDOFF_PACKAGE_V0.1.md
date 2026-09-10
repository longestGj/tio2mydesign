# MARKET-EU-BE Gate 6 Development Handoff Package V0.1

Date: 2026-09-07  
Package ID: `BE-G6-HANDOFF-01`  
Page: `MARKET-EU-BE` / `/markets/belgium/` / EN / `site_scope=tio2-my`  
Status: **`DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_ROOT_INDEPENDENT_REVIEW / NOT_DISPATCHED`**

This candidate is the single development input for this page after Gate 6 approval. It is not yet approved for handoff, has not been sent to development and does not authorize Gate 8, changes in another workspace, deployment, publication, DNS or indexing. `BE-G6-F02` remains open for root disposition.

## 1. Exact authority combination

Paths are relative to `D:/23MySec/` unless stated otherwise. Approval status comes from the approval chain and current Manifest, not historical draft labels embedded in A/B/C.

| Alias | Source, identity and use |
|---|---|
| `M` | `pages/markets/belgium/MARKET-EU-BE_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md`; SHA-256 `3ec5ad5964f9abe331d1f938ad81adc8717fa3a025899a09d23195e086a45eef`; approved Gate 1–4 current authority at Gate 6 intake |
| `Brief` | `docs/page-briefs/MARKET-EU-BE_BELGIUM_BRIEF_V0.2.md`; `0b90778a781d5661991ad618b3ea7445e2e708df320e234f3b74f416ad117014`; page task and boundaries |
| `A` | `pages/markets/belgium/04_planning/MARKET-EU-BE_GATE2_CONTENT_SKELETON_V0.1.md`; `e605b4b85ea42c561d0e1ea462da51fcd5618dd35ab703b2ac14945ae8fe5c69`; order and content model, not editable copy |
| `B` | `pages/markets/belgium/04_planning/MARKET-EU-BE_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`; `8c4faeb2815fd284a780ea03a082cb3ffd1fcb4cbee45dbb937be4b39b112c5f`; sole approved visible-copy editor |
| `C` | `pages/markets/belgium/04_planning/MARKET-EU-BE_GATE2_CONTENT_CONTRACT_V0.1.md`; `fc96fd504a9f15ebcc006eee250988a6dc707fc65896349f5f9c641843abc9c6`; actions, context, SEO/GEO/Schema and claim boundaries |
| `G2 approval` | `docs/architecture/GATE2_EIGHT_PAGE_USER_APPROVAL_AND_CLOSURE_V1.0.md`; decision `G2-8PAGE-APPROVAL-01`; approves the Belgium A/B/C combination including B V0.2 |
| `G3` | `pages/markets/belgium/04_planning/gate3-v0.1/MARKET-EU-BE_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`; `d56d2c42d0361cc222c016b10250bcd00a9218265a0ab967df02ceedf059509c`; approved structural reference |
| `G4 Visual` | workset `BE-G4-COMPLETE-20260907-02`, freeze `BE-G4-FREEZE-20260907-02`; actual source `pages/markets/belgium/04_planning/gate4-v1.1/MARKET-EU-BE_GATE4_COMPLETE_VISUAL_V1.1.html`; 21,728 bytes; `9e58374966ad2f13de0074ecfbf24f4c69644e55d340c070d7aa9b82debc9aa3` |
| `G4 ledgers` | V1.1 workset `7377b70a2a141aaf65ea557f29d91272f6c8c3df7ed148c02a9dc96c71de0269`; input index `f368d7d9a959434bbbf3f291b92bed20a7493c99f018aee08fd2f36a54002f70`; freeze `43410a43435de2e41b0d32372bb5db18c19e12592bb1505a50af35a70c84a23b`; evidence index `24a8b43f5663707d91c13c9d0fb614012d43e39d785f1e851ece928e11a3ac54`; 45 evidence images |
| `G4 approval` | `BE-G4-IR-20260907-02`, `BE-G4-PC-20260907-02`, `BE-G4-APPROVAL-20260907-02`, batch `G4-REMAINING-THREE-APPROVAL-01`; exact records in this page's `05_review/` |
| `G6 review` | `pages/markets/belgium/05_review/MARKET-EU-BE_GATE6_COMPREHENSIVE_REVIEW_V0.1.md`; controls findings, dependency qualification and executor self-check for this package |
| `RFQ` | `pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.2.md`, handoff V1.1 and `05_review/CONV-RFQ_GATE8_RECEIVER_ENVIRONMENT_BLOCKER_RECORD_V1.0.md`; current receiver blocker controls over older readiness wording |
| `DOC` | `pages/conversion/06_handoff/CONV-DOC_GATE7_CURRENT_HANDOFF_MANIFEST_V0.1.md`, field inventory V0.1 and `pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md`; later runtime decision controls over historical server-only descriptions |
| `Chrome / Brand` | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, visual standard V1.0, CTA accessibility addendum V1.0 and `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| `Legal / Consent` | Footer legal addendum V1.0, No-Terms decision V1.0, Legal/Privacy authority Manifest V1.3 and Shared Consent current Gate 9 Manifest V1.1 |
| `Facts` | Malaysia-origin site-wide publication authority V1.0; Evidence Gap User Decision Register V1.8 `EG-001/EG-002`; Belgium Claim Register V0.2 |

V1.0 Gate 4 remains rejected history and must not be used. The V1.1 input ledger's historical live-agent hash drift is `BE-G6-F02`; it does not authorize rewriting the freeze or substituting the current role source into the old ledger.

## 2. Identity, content model and rendering map

Page identity is fixed: `MARKET-EU-BE`, English `en`, `/markets/belgium/`, `site_scope=tio2-my`. Primary keyword is `titanium dioxide supplier belgium`; secondary terms are `tio2 supplier belgium` and `malaysia titanium dioxide belgium`. Generic applications, exact Grades, Europe/EU supplier terms and detailed trade updates retain their registered owners.

CMS/API/Next.js implementation must preserve the approved semantic fields below. This package does not prescribe a new post type, API key or component path. Missing required content is an implementation defect; do not replace it with a placeholder, hide the module or fall back across scope.

| Order / object | Exact content authority | Required render and behavior |
|---|---|---|
| Shared Header | current shared Chrome + production Logo; current=Markets | fixed RFQ; 84px desktop / 64px compact; one accessible nav surface for the active viewport; at most one `aria-current`; no buyer-visible `CURRENT`; hidden menu is not focusable |
| Breadcrumb | B/C | Home `/` → Markets `/markets/` → European Union `/markets/european-union/` → Belgium current text; physical page URL remains flat |
| `BE-01` Hero | B exact H1, two sentences and actions | one H1 `Titanium Dioxide Supplier for Belgium`; primary `Request a Quote`, secondary `Explore Products`; approved no-image branch, with no empty media frame |
| `BE-02` Product / origin / destination | B exact heading and two paragraphs | preserve Malaysia origin, Belgium destination and pigment/category qualification; no suitability inference or hidden selector |
| `BE-03` Buyer/application context | B exact heading, three H3 sections and closing Product Hub paragraph | Coatings, Plastics and Masterbatch, Import and Distribution; preserve evaluation framing and Grade-neutral Product Hub action |
| `BE-04` Documents | B exact heading, five paragraphs and four actions | one Grade per structured request; more than one document type allowed; additional Grades only as supplementary context; exact COO sentence; repaired inline focus geometry |
| `BE-05` RFQ | B exact heading, instructions, four-item list, after-submit sentence and action | delivery to Belgium is enquiry context; after-submit sentence appears once; no embedded form on this page |
| Shared Footer / Cookie | current Chrome/Legal/Consent owners | Privacy EN, Privacy BM, Cookie Policy and working Cookie Settings; no Terms; current `no_optional_analytics`; no page-local CMP fork |

All buyer-visible prose comes from B. Internal review IDs, evidence gaps, status strings, `CURRENT`, draft labels and receiver diagnostics must not render. There is no approved page business image, social image, FAQ, selector, filter, embedded form, publication date or page-local submission state. The no-image state is final and valid.

## 3. Exact links and action semantics

All 12 link occurrences in B must be bound, including duplicates: Home `/` once; Markets `/markets/` once; European Union `/markets/european-union/` twice; RFQ `/request-a-quote/` three times; Products `/products/` three times; Request Documents `/request-documents/` once; and Document Hub `/documents/` once.

### RFQ

The source page contributes `MARKET-EU-BE` attribution and the explicit destination `Belgium`. Belgium may initialize Destination Country only when allowed by the receiver contract; it must be visible, editable, must not overwrite a buyer-modified value and must not become company Country/Region. No Grade, product form, application, quantity, city, port or receiving point may be inferred.

The receiver owns fields, validation and states. It supports one Product/Grade or `Not sure / Need help`; other candidate Grades belong in Additional Requirements. A valid positive receiver acknowledgement is required before showing receipt/success. Route HTTP 200, a local toast, navigation intent or page screenshot is not receipt evidence. Invalid, timeout, ambiguous and retry behavior must preserve recoverable buyer input according to the owner contract.

### Request Documents

The page passes source attribution only. It must not prefill Grade, document types, Belgium into company Country/Region, or auto-select origin documentation because the COO sentence is nearby. The receiver requires one structured Grade and one or more document types; supplementary Grades can be free text in Additional Requirements but do not receive independent document-type mapping.

Current runtime authority uses the approved browser-direct provider decision. Do not revive an older server-proxy requirement as if it were current, and do not invent a new endpoint or database. Provider `200 + success=true` proves provider acceptance under that decision; it remains distinct from mailbox appearance and production release controls.

The market page performs no submission or persistence. It must not add Contact/email/phone fallback, display false success or implement page-local receiver logic when a shared route is unavailable.

## 4. Complete visual, interaction and responsive requirements

The V1.1 visual source, freeze and evidence ledgers in §1 are the complete visual reference. Production code must be adapted into the actual shared architecture; the self-contained prototype is not a component/API/router/CMP implementation.

The current full-page references are:

| Viewport | File | Identity |
|---|---|---|
| 1440 | `04_planning/gate4-v1.1/approval_core/MARKET-EU-BE_GATE4_1440_FULL_V1.1.png`; 1440×3654 | `738b188a90b866779d01212afee9e9b443ba76c113a4e443d84104d180c1262b` |
| 768 | `04_planning/gate4-v1.1/approval_core/MARKET-EU-BE_GATE4_768_FULL_V1.1.png`; 768×4170 | `257fbe5aa099f505dd3add52e6c6dbb4fed720b1ebd67b4c34b701f35757f506` |
| 390 | `04_planning/gate4-v1.1/approval_core/MARKET-EU-BE_GATE4_390_FULL_V1.1.png`; 390×5369 | `658edd418635171258577f0efaa363f84f107a7b1f63a9d00a723e1f8a5126a4` |

The 45-image evidence inventory includes FULL 3, MENU 2, COOKIE 3, CONTINUOUS_SEGMENT 19 and NORMAL/HOVER/FOCUS 6 each. Fixed screenshot heights are evidence outputs, not production height requirements.

Keep the Navy/white/functional-teal system, Inter, content density, action hierarchy and responsive stacking from the freeze. At 390, actions become full width and long copy remains readable without horizontal overflow. Interactive target dimensions are at least 44×44 CSS px. Focus is visible and survives keyboard navigation, scrolling and overlays.

Gate 4 repaired only `main [data-module='BE-04'] p:not(.action) a` with a 3px `#008078` outline and inset offset/padding. Fresh Gate 6 readback confirms 4.8177:1 outline contrast, minimum measured repaired-link box 111.516×44, all six viewport/link focus cases without clipping/collision and stable normal/hover/focus geometry. Production acceptance is the behavior and readability, including adjacent punctuation, rather than copying a CSS selector or pixel offset blindly.

Use production Logo asset keys from the current Brand owner. Their approved payloads are primary `eeed3a758e7ae1b847238d1c88e86eee7a8e67b863969af4d286747e9a72487c` (4,342 bytes) and reverse `7cfaeafa02ac8469a006c9489db2f92b15b2621e4151b04efe1b30fc734c1b5e` (2,725 bytes). Page-local file paths in the prototype are provenance, not production URL bindings.

## 5. Approved facts and prohibited expansion

Visible and machine-readable semantics may express only this relationship: `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` provides `Malaysia-origin industrial titanium dioxide` for procurement and technical evaluation in `Belgium`.

The exact approved sentence is `A Certificate of Origin is available upon request.` It does not mean a certificate accompanies every shipment, that customs accepts it, that preferential treatment or a tariff outcome applies, or that all requested documents are always available for every Grade.

Do not add a Belgian entity, office, warehouse, stock, local manufacturing, MOQ, response time, delivery time, port service, current customs/duty/regulation conclusion, market share, customer list, Grade-country suitability, recommended Grade, equivalence, certification, availability or shipping promise. Coatings, plastics/masterbatch and import/distribution are buyer contexts. The product-form passage is qualification guidance and does not claim every mentioned form is supplied.

## 6. SEO, GEO and Schema

Production machine output is governed by C, not the prototype `<head>`:

- SEO Title: `Titanium Dioxide Supplier Belgium | TiO2 Malaysia`
- Meta Description: `Source Malaysia-origin industrial titanium dioxide for coatings and plastics projects in Belgium. Review product information and documents, or request a quote.`
- Canonical: `https://tio2malaysia.com/markets/belgium/`
- Language: English / `en`
- Index direction: candidate only; preview remains noindex and production indexing/sitemap require Gate 9/10 and release authority.
- Social text: if the shared system renders OG/Twitter text, it must derive from the approved Title/Meta semantics. There is no approved page-specific social image or date to invent.

Allowed page Schema is `WebPage` plus `BreadcrumbList`, with shared `WebSite` and `Organization` references from the `tio2-my` scope. `WebPage.name` must match the approved page/H1 meaning, description and URL must match the approved fields, and `inLanguage` is `en`. Breadcrumb names/order/items match §2. Shared entity IDs are bound by their owner; do not guess them.

Do not emit `LocalBusiness`, page-local Organization, Product, Offer, certification, availability, shipping, `FAQPage` or `HowTo`. Clean and query URLs must resolve to the same canonical; tracking/context parameters must not create variants, Schema variants or sitemap entries. The visual prototype lacks full meta/canonical/JSON-LD and must not be copied as a complete production head; this is the delivery mapping for `BE-G6-F01`.

## 7. `site_scope=tio2-my` and Gate 8 adaptation boundary

| Surface | Required implementation and Gate 9 reverse input |
|---|---|
| Query | constrain to `tio2-my` before reading page, relations or shared data; missing/wrong scope returns no cross-site fallback; wrong-scope requests cannot disclose Belgium page data |
| Route | bind the exact Page ID, URL and language; same slug in another scope cannot collide or cross-redirect to fill missing content |
| Cache | include scope in page/shared entity/metadata keys and invalidation; warm/cold/invalidated paths must not mix sites |
| Menu | consume `tio2-my` shared Chrome with Markets current; do not read TIOVAR/mytio2/frozen-site menus, and do not leak Belgium into them |
| SEO | SSR initial content, canonical, social metadata, Schema, robots and sitemap use the same scoped record; query/wrong-scope variants cannot pollute output |
| Form | RFQ/DOC remain `tio2-my` workflows; source context cannot choose fields, alter receiver or create product/document eligibility; invalid/cross-scope source is neutralized |
| Media | use only approved `tio2-my` Brand/shared assets; missing media cannot fall back across sites; this page has no approved business/social placeholder image |

Gate 8 must first inspect the actual development repository, current branch/worktree, existing scoped data model, routes, shared components, APIs, cache and tests. It may reuse or adapt existing implementation when it satisfies this package. It must not assume that prototype markup/JS is production code, invent a parallel system from an old checkout, or change approved copy/facts/URLs/keywords/visual direction to fit implementation convenience.

Any necessary contract change returns to its owner with reason, impact, risk and rollback. Gate 8 may make implementation-level decisions inside the approved contract. It may not approve this candidate, close `BE-G6-F02`, publish, index, send real submissions without authorization, or edit D23 planning sources as a substitute for a development receipt.

## 8. Open dependencies

| ID | Owner and current state | Required evidence / failure handling |
|---|---|---|
| `BE-G6-D01` Page/CMS/SEO/scope | Belgium Gate 8 and shared runtime; planning contract only | exact data/API/render/head/Schema and seven-surface isolation; absent implementation evidence keeps affected acceptance open |
| `BE-G6-D02` Routes | PRODUCT-000, DOC-000, MARKET-EU-001, RFQ/DOC and shared route owners | exact target Page ID, approved content, environment reachability and return path; dead/wrong-scope/placeholder route fails the action criterion; do not silently hide it |
| `BE-G6-D03` RFQ | CONV-RFQ + receiver operational owner; route 200 history, receiver blocker open | editable Belgium/source-only mapping, valid/invalid/failure/retry and positive acknowledgement; HTTP status/local UI alone cannot close receipt |
| `BE-G6-D04` DOC | CONV-DOC + receiver operational owner; provider acceptance recorded, mailbox/release controls open | source-only mapping, fields/validation/failure/retry, provider response and separately qualified mailbox/release state; do not move another page's test to Belgium |
| `BE-G6-D05` Chrome/Brand/Legal/Consent | shared owners; current consent `no_optional_analytics` | exact versions/references, menu/dialog keyboard behavior, production Logo, no Terms and real Cookie Settings/config; shared defect returns to owner, no Belgium fork |
| `BE-G6-D06` Runtime/device/release | Gate 8/9 and user Gate 10 | locked implementation receipt, SSR/runtime, real device/engine/AT checks, production configuration, publication/indexing permission; unproven or unauthorized state stays closed |

## 9. Stable Gate 9 acceptance IDs

The same IDs must be used by Gate 8 tests/receipt and Gate 9 independent read-only evidence. Each requires evidence tied to one identifiable implementation version and environment. This package does not pre-sign any result.

| ID / source | Test input and expected result | Evidence and non-pass condition |
|---|---|---|
| `BE-G9-AC01` / B, C, M | clean Belgium URL and SSR initial HTML; one exact H1, five modules in order, all B copy, exact repeated actions and no internal statuses | extracted initial/rendered text and source-chain readback; omission, paraphrase changing meaning, duplicate/missing critical sentence, image-only text, placeholder or governance leakage fails |
| `BE-G9-AC02` / G3, G4, Brand | real 1440/768/390 complete pages plus needed hover/focus; approved hierarchy, no-image state, spacing, adjacency and responsive transformations | full-page evidence, readable segments and target/overflow geometry; cropped content, horizontal overflow, wrong order/hierarchy, target below 44px or fake media implication fails |
| `BE-G9-AC03` / G4 focus repair, accessibility contracts | keyboard through Header, all main links, menu/dialog and Footer at representative viewports; repaired Product Hub/quotation links remain visible, readable and non-colliding | actual focus order/state/geometry and accessible-tree evidence; invisible/clipped focus, collision, obscured punctuation, focus loss/trap or hidden surface focusability fails |
| `BE-G9-AC04` / C action map | click every occurrence of Breadcrumb, Products, Documents, EU and RFQ links; each reaches exact current owner/content/scope and usable return path | actual click/final URL/content evidence; static href alone, local simulation, dead/placeholder/misdirected/cross-scope target or silently omitted duplicate fails |
| `BE-G9-AC05` / C + RFQ owner | enter from each RFQ source, change Belgium to another legal destination, return/re-enter, and test empty/invalid/expired context; Belgium is visible/editable and existing buyer value is protected; no other field inferred | real UI and redacted transfer/receiver mapping; locked/hidden destination, company-country confusion, overwritten value, Grade/application/quantity/location inference or attribution satisfying a required field fails |
| `BE-G9-AC06` / C + DOC owner | enter Request Documents; initial Grade/type/company country are neutral; select one Grade and multiple types; test supplementary Grades and Other-only requirements | real UI, validation and redacted payload/recovery evidence; Belgium/COO/Grade/type auto-selection, missing required validation, multiple structured Grades or source-driven eligibility fails |
| `BE-G9-AC07` / receiver contracts | valid and invalid RFQ/DOC, timeout, error, ambiguous/non-JSON response and retry; success only on owner-defined acknowledgement and failures preserve recoverable input | implementation-bound receiver/network/redacted business evidence; RFQ 2xx/local toast is insufficient; DOC follows current 200+success=true provider rule; provider acceptance cannot be labeled mailbox arrival; false success fails |
| `BE-G9-AC08` / C SEO/Schema | clean/query/preview URLs and authorized production config; exact Title, Meta, canonical, language, social text if present, WebPage/BreadcrumbList and shared scoped references | initial head/JSON-LD field capture and validation; missing/changed metadata, query canonical/Schema/sitemap variant, guessed entity ID, prohibited Schema, invented image/date or unauthorized indexability fails |
| `BE-G9-AC09` / Chrome/Legal/Consent | desktop/compact Header, menu open/close/Tab/Shift+Tab/Escape/breakpoint, Footer links and Cookie Settings reopen/focus restore; Markets current semantics | actual keyboard/accessibility/config/shared-reference evidence; duplicate/no applicable current, buyer-visible CURRENT, stale Terms, hidden focus, background leakage, broken Settings, page-local fork or wrong consent mode fails |
| `BE-G9-AC10` / root scope contract | correct/wrong/missing scope, same slug, warm/cold cache, invalidation and reverse cross-site inputs over all seven §7 surfaces | query/API/render/network/cache/invalidation and reverse regression evidence; screenshots or only the happy page cannot prove isolation; any cross-scope data/menu/SEO/form/media leak or fallback fails |
| `BE-G9-AC11` / facts + dependencies | inspect visible and machine surfaces and all six dependencies; only approved Malaysia→Belgium/COO semantics, current owners/config and explicit readiness states appear | content/JSON-LD/payload plus owner/version/readiness evidence; Grade suitability, Belgian-local, certificate/tariff/customs/stock/delivery expansion, stale shared owner, open release control labeled ready or hidden required route fails |
| `BE-G9-AC12` / workflow and this package | Gate 8 hands back one locked implementation with mapping from CMS/data/API to render, exact changes, dependency versions, tests, untested scope and rollback; AC results bind to it | commit/ref, branch/worktree state, environment/build identity, mapping, diff/test outputs, shared regressions and rollback; an unlocatable implementation, stale checkout, self-reported PASS without evidence or missing rollback is not an acceptable receipt |

## 10. Global non-pass conditions

Gate 9 cannot pass this page if any applicable condition below holds, even when a screenshot looks correct:

- the implementation version/environment is not identifiable, or the evidence belongs to another revision/page/scope;
- any required B text, module, action occurrence, metadata field or approved state is absent or semantically changed;
- any fact, Schema, prefill, receiver state or shared UI implies an unapproved relationship or false success;
- the focus repair regresses, keyboard access fails, content clips/overflows, a target is below 44px or a hidden overlay remains accessible;
- a route is dead, placeholder, wrong owner or wrong scope, or an unavailable required action is silently hidden/replaced;
- RFQ or DOC receipt is claimed from route status, local UI, provider-only evidence beyond its scope, or a test without required authorization;
- any of the seven scope surfaces leaks or falls back across sites;
- current shared Chrome/Brand/Legal/Consent contracts are cloned, stale or functionally bypassed;
- a required dependency/release control remains open but the page is labeled fully accepted, published or indexable;
- `BE-G6-F02` has no root disposition or Gate 6/package approval is absent.

## 11. Gate 8 receipt and stop boundary

The Gate 8 receiver must return a versioned receipt keyed to `BE-G6-HANDOFF-01` and `BE-G9-AC01`–`BE-G9-AC12`, including:

1. repository/workspace, commit or immutable ref, branch/worktree state, build/runtime environment and date;
2. actual Page ID/URL/language/scope binding and CMS/data/API → SSR/client render mapping;
3. exact changed files/components/data/migrations/configuration, plus shared components consumed rather than cloned;
4. routes, receiver contracts and shared-owner versions actually integrated;
5. per-AC test/evidence pointers, failures, untested conditions and external-owner dependencies;
6. scope-isolation and adjacent shared-page regressions;
7. rollback procedure and any irreversible/external action separately authorized.

Until root independent review, `BE-G6-F02` disposition and project-control decision are recorded, the correct state is `NOT_APPROVED_FOR_HANDOFF / NOT_DISPATCHED / GATE8_NOT_AUTHORIZED`. Creating this package does not change that state.
