# MARKET-EU-IT Gate 6 Development Handoff Package V0.1

Date: 2026-09-08  
Package ID: `MARKET-EU-IT-G6-HANDOFF-01`  
Dispatch: `G6-IT-EXEC-20260908-01`  
Page: `MARKET-EU-IT` / `/markets/italy/` / English (`en`) / `site_scope=tio2-my`  
Status: **`DRAFT_FOR_PROJECT_CONTROL_REVIEW / READY_FOR_INDEPENDENT_REVIEW / NOT_DISPATCHED`**

This is the sole candidate Gate 6 development input for Italy. It packages the approved copy, complete visual source, behavior contracts, shared-owner references, implementation-neutral mapping, dependencies and stable Gate 9 acceptance IDs. It is not a production implementation, does not promise that the prototype can be merged directly, and does not authorize Gate 8, handoff, deployment, publication, DNS or indexing.

## 1. Exact approved combination

Paths are relative to `D:/23MySec/`. Historical draft labels inside source files are superseded only for lifecycle status by their later approval records; their payload identities remain exact.

| Alias | Exact authority and role |
|---|---|
| `M` | `pages/markets/italy/MARKET-EU-IT_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md`; SHA-256 `6d8854733464d70295d2fa48173508bf36220cc6755ff5da6a2d88c9bd5127a6`; approved Gate 1–4 intake authority |
| `Brief` | `docs/page-briefs/MARKET-EU-IT_ITALY_BRIEF_V0.2.md`; SHA-256 `dd5389343eb4adc884e5ef250ce08f831c710ad7607495121ab4dc7a7b981677`; page task, buyer questions and fact boundaries |
| `A` | `pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_CONTENT_SKELETON_V0.1.md`; SHA-256 `8e18340cdae14cbb36991fd56b8ba7b33bdcda0fee1fd0fd0ba3a8181e151751`; approved module architecture |
| `B` | `pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`; SHA-256 `a7d047af04b5127cc54f97938e4d622b1e1b496691747516322924f6e0b44208`; sole buyer-visible copy authority between its markers |
| `C` | `pages/markets/italy/04_planning/MARKET-EU-IT_GATE2_CONTENT_CONTRACT_V0.2.md`; SHA-256 `ac49b66055bf36b87583e3919005ccbf87919a9900d9a9103aaa7d39936a6e19`; actions, facts, SEO/GEO/Schema and conditional behavior |
| `G2 approval` | `docs/architecture/GATE2_REMAINING_SEVEN_USER_APPROVAL_AND_CLOSURE_V1.0.md`; decision `G2-7PAGE-APPROVAL-01`; approves the exact Italy A/B/C combination |
| `G3` | `pages/markets/italy/04_planning/gate3-v0.1/MARKET-EU-IT_GATE3_WIREFRAME_V0.1.html`; approved structure is preserved by the current Gate 4 source |
| `G4 source` | `pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_COMPLETE_VISUAL_V0.1.html`; 28,199 bytes; SHA-256 `ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615` |
| `G4 freeze` | Workset `IT-G4-COMPLETE-20260907-02`, freeze `IT-G4-FREEZE-20260907-02`; freeze SHA-256 `a5b0e25d7d294f5b486594a70b19fe7407b195180940daf7258f01f6aee90410`; evidence index SHA-256 `deba8a2d8c1e10970dfc2d867fc7d694c7c08475e8960e37bd6b7b4fcb0fd116` |
| `G4 review/closure` | Initial review plus Finding `IT-G4-PC-R01`; directed rereview `IT-G4-DIRECTED-REREVIEW-20260907-02` closes it with Required Finding 0; controller closure `IT-G4-CLOSURE-20260907-02` under `G346-DELEGATED-CLOSURE-20260907` |
| `RFQ` | `pages/conversion/request-a-quote/06_handoff/CONV-RFQ_GATE7_MANIFEST_V1.2.md` and its approved mapping/handoff references; current receiver/environment evidence controls over older status text |
| `DOC` | `pages/conversion/06_handoff/CONV-DOC_GATE7_CURRENT_HANDOFF_MANIFEST_V0.1.md`, field inventory V0.1 and current Gate 9 baseline/receiver decision |
| `Sample` | `pages/conversion/request-sample/06_handoff/CONV-SAMPLE_GATE7_MANIFEST_V0.2.md` and CMS/API/component mapping V0.1 |
| `Chrome / Brand` | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; visual standard V1.0; CTA accessibility addendum V1.0; Production SVG Logo Manifest V1.0 |
| `Legal / Consent` | `docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`; `docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md`; `pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md`; `pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md` |
| `Facts` | Malaysia-origin site-wide publication authority V1.0; Evidence Gap User Decision Register V1.8 `EG-001/EG-002`; Italy claim register V0.2 |

The identity is fixed: market landing page `MARKET-EU-IT`, canonical route `/markets/italy/`, English `en`, `site_scope=tio2-my`. It owns `titanium dioxide supplier italy`; secondary terms are `tio2 supplier italy` and `malaysia titanium dioxide italy`. Europe/EU supplier intent stays with `MARKET-EU-001`; generic applications, exact Grades and detailed trade updates stay with their registered owners.

## 2. Approved content and rendering map

WordPress must manage the approved content semantics; the API must return the same scoped meaning; Next.js must render the approved result. Gate 8 chooses the actual data model, field names and component composition after inspecting the existing project. Required content cannot be replaced by screenshots, placeholder text, guessed facts or another scope's record.

| Order / object | Content authority | Required render and behavior |
|---|---|---|
| Shared Header | Chrome and production Logo owner | fixed RFQ; Markets is current; one accessible navigation surface at the active viewport; no buyer-visible `CURRENT`; inactive surface excluded from focus/accessibility tree |
| Breadcrumb | B and C | Home `/` → Markets `/markets/` → European Union `/markets/european-union/` → Italy current text; this hierarchy does not change the flat physical URL |
| `IT-01` Hero | exact B H1, intro and two actions | one H1 `Titanium Dioxide Supplier for Italy`; primary RFQ then Products; approved no-business-image state has no empty media frame |
| `IT-02` Industry context | B exact H2, source framing, three H3 sections and four application links | preserve wood/industrial coatings, compound/masterbatch and packaging-printing prompts; sources organize buyer inputs and do not prove TiO2 Malaysia Grade use, approval or suitability |
| `IT-03` Product evaluation | B exact H2 and two paragraphs | neutral Product Hub; no Italy Grade ranking, recommendation, equivalence, availability or hidden selector; `Not sure / Need help` belongs to RFQ |
| `IT-04` Documents and Samples | B exact H2, COO statement/limitation and actions | preserve one-Grade document path, request-review meaning and Sample distinction; no automatic document or Sample approval |
| `IT-05` Destination brief | B exact H2, field guidance and five-item list | Italy is destination context; known port/city and other receiving/handover detail map only as specified; unknown details may remain unknown |
| `IT-06` EU owners | B exact H2 and two paragraphs | EU Overview owns general EU context; EU Trade owns dated detail; Italy does not calculate duty/tax or decide customs origin/classification/result |
| `IT-07` RFQ and sources | B exact H2, action, after-submit limitation and two source records | after-submit text appears once; source labels, URLs, qualification and checked date remain visible; no promised quotation or operational result |
| Shared Footer / Cookie | Chrome, Legal and Consent owners | Privacy EN, Privacy BM, Cookie Policy and functional Cookie Settings; © 2026 retained; no Terms; no page-local consent fork |

All page-body prose is derived from B; shared Header/Footer/Cookie prose comes from the current shared owners. Review IDs, draft labels, findings, receiver diagnostics and internal status must not render. There is no approved page-local form, FAQ, Grade recommendation, business image, social image, local office/warehouse, price, availability, route or delivery promise.

## 3. Links, receiver context and state behavior

B contains 19 link occurrences and every occurrence must remain accounted for: Home 1; Markets 1; European Union 2; Products 3; RFQ 3; four Application links 1 each; Request Documents 1; Request a Sample 1; EU Trade 1; and two external Italy context sources 1 each.

### RFQ

The three Italy-page RFQ entries carry internal source attribution `MARKET-EU-IT`. `Italy` may initialize visible, editable `Destination Country`; a known port/city maps to optional `Destination Port / City`; a different final receiving site or other handover detail maps to `Additional Requirements`. Do not infer Grade, Application, quantity, port, city, handover point, packaging, timing or document need. A receiver value already changed by the buyer must not be overwritten, and Italy must not be placed in company Country/Region.

Field options, limits, validation, receipt, failure and retry are owned by the current RFQ contract. `Not sure / Need help` is valid for an unknown Grade. Success requires the owner's positive receiver acknowledgement; HTTP status, a local toast, navigation intent, prototype behavior or screenshot does not prove receipt. Failure remains recoverable and must not display a false success.

### Request Documents

Pass source attribution only. Do not prefill Italy, Grade or document types, and do not auto-select origin documentation because the COO sentence is adjacent. The receiver requires one structured Grade and buyer-selected document types; availability and applicable scope remain subject to human review. Country/Region means company location. Current receiver implementation/acceptance rules control over older server-only descriptions, and provider acceptance remains distinct from mailbox/release evidence.

### Request a Sample

Pass `MARKET-EU-IT` as allowlisted non-personal source context only. Do not prefill Italy, Grade or Application: C assigns Italy destination prefill to RFQ and does not create a Sample-prefill instruction. The buyer may enter and edit destination/market in the Sample owner's normal field. The Sample receiver owns required fields, allowlists, validation, idempotency, receipt and recovery. Submission does not confirm Sample approval, quantity, freight, timing or dispatch.

The Italy page submits and persists nothing itself. If a target is not ready, apply C's safe conditional behavior without empty wrappers, dangling punctuation or governance text; this does not close the dependency. Required buyer paths must be ready before full Gate 9 acceptance and complete-site release. The EU Trade link additionally requires current approved content, route and freshness.

## 4. Complete visual, responsive and interaction specification

The exact Gate 4 HTML, freeze and evidence index in §1 are the full visual reference. They are prototype source and evidence, not promised production components. The three complete-page references are:

| Viewport | Exact evidence | Identity |
|---|---|---|
| 1440 | `04_planning/gate4-v0.1/approval_core/MARKET-EU-IT_GATE4_1440_FULL_V0.1.png`; 1440×5050 @1 | `959ff01dda4c75c5b03f0d2218f6a763f86e53bbb458fd494dbec7b30b38e489` |
| 768 | `04_planning/gate4-v0.1/approval_core/MARKET-EU-IT_GATE4_768_FULL_V0.1.png`; 768×6114 @1 | `051209d9b60546980884ce99fddcd6e9b5e2a55cb3dc880691b149cd500cca24` |
| 390 | `04_planning/gate4-v0.1/approval_core/MARKET-EU-IT_GATE4_390_FULL_V0.1.png`; 390×7698 @1 | `902f5a985d577f3bc3953e86cfb21929e783b3744afc2d2006ff2c4e2992fcf2` |

Fixed full-page heights are evidence results, not production height requirements. Preserve the approved Navy/white/functional-teal hierarchy, Inter typography, module rhythm, source treatment, action hierarchy and responsive stacking. At 390px, copy remains readable and controls/links remain operable without horizontal overflow. Interactive targets are at least 44×44 CSS px; focus is visible, uncropped and stable across navigation and overlays.

The directed rereview verified 56/56 visual asset identities/dimensions/DPR, 21/21 targeted visual readbacks and 18/18 runtime checks. It preserved seven modules, 19 body links, COO limitation adjacency, Italy destination mapping, neutral Grade path, EU-owner exit, Menu/Cookie behavior, no visible `CURRENT`, 44px controls and no detected clipping/overflow. Gate 6 inherits that unchanged evidence and does not claim real-device, other-browser-engine, native 200% zoom, screen-reader speech, forced-colors or live consent persistence as already tested.

Production Logo uses the approved SVG asset keys and hashes. Local `file:///` references and bundled font copies in the prototype are provenance only; Gate 8 binds production assets through the existing scoped system.

## 5. Facts, SEO, GEO and Schema

Allowed visible and machine-readable facts are limited to B/C and the approved facts in §1. `Malaysia-origin titanium dioxide` and `A Certificate of Origin is available upon request.` are approved. The latter does not promise issuance for every shipment or determine customs acceptance, origin treatment, tariff or duty. Federchimica AVISA and Garzanti statements remain accurately attributed third-party context, with publication date not shown and checked 7 September 2026; they do not become TiO2 Malaysia capabilities, endorsement, market ranking, demand or Grade fit.

Do not add an Italy office, warehouse, inventory, customer, Italian-language service, local manufacturing, price, MOQ, capacity, packaging availability, fixed lead time, Incoterm, freight/route, quotation outcome, customs result, trade-remedy outcome, Grade-country suitability, recommendation or equivalence.

Production machine output follows C rather than treating the prototype `<head>` as a complete implementation payload:

- H1: `Titanium Dioxide Supplier for Italy`
- SEO title: `Titanium Dioxide Supplier for Italy | TiO2 Malaysia`
- Meta description: `Evaluate Malaysia-origin titanium dioxide for coatings, compound, masterbatch and packaging-printing projects in Italy. Review products, documents and quote inputs.`
- Canonical: `https://tio2malaysia.com/markets/italy/`
- Language: `en`
- Required page Schema: `WebPage` and `BreadcrumbList`, using the same visible identity, URL, language and four-step breadcrumb
- Prohibited Schema: `LocalBusiness`, page-local `Organization`, `Product`, `ProductGroup`, `Offer`, `FAQPage`, `QAPage`, local office/warehouse, hidden Grade recommendation, inventory, route or trade result

Shared `WebSite` and publisher `Organization` relationships, if rendered by the current shared SEO owner, must resolve within `tio2-my` and may not use guessed IDs. Clean and query URLs use one canonical and one semantic page identity. Query/source context does not enter metadata, Schema or sitemap. Preview remains non-indexable; production robots/sitemap/indexing require the later Gate 9/10 and release decisions. No social image, publication date or Italian-language alternate is invented.

## 6. `site_scope=tio2-my` seven-surface isolation

| Surface | Required implementation result and Gate 9 reverse input |
|---|---|
| Query | constrain page, relations and shared data to `tio2-my` before retrieval; missing/wrong scope cannot read another site or fall back to it |
| Route | bind the exact Page ID, URL and language; same slug or route data in another scope cannot collide, fill content or cross-redirect |
| Cache | include scope in page/shared/metadata keys and invalidation; warm, cold and invalidated states cannot mix sites |
| Menu | consume `tio2-my` shared Chrome with Markets current; no TIOVAR, mytio2 or frozen-site menu fallback, and no reverse Italy leakage |
| SEO | SSR content, canonical, social metadata, Schema, robots and sitemap come from the same scoped identity; query/wrong-scope variants cannot pollute output |
| Form | RFQ/DOC/Sample remain `tio2-my` receivers; untrusted source/scope cannot choose fields, receivers, eligibility or business facts |
| Media | consume approved `tio2-my` Logo/font/shared bindings; missing media cannot fall back across sites; this page has no approved business/social placeholder |

Gate 8 must inspect the actual development repository, current branch/worktree, existing scoped data model, routes, shared components, APIs, cache and tests before deciding reuse or adaptation. It must not create a parallel system from an old checkout, clone shared components, or change approved copy/facts/URLs/keywords/visual behavior for implementation convenience. Any necessary contract change returns to the proper owner with impact and rollback.

## 7. Open implementation and release dependencies

| Stable ID | Owner / current boundary | Acceptance condition and failure handling |
|---|---|---|
| `MARKET-EU-IT-G6-D01` Page/CMS/SEO/scope | Italy Gate 8 plus shared runtime | exact scoped data→API→SSR/client/head mapping and seven-surface isolation; absent or wrong-scope evidence keeps the affected AC and release open |
| `MARKET-EU-IT-G6-D02` Internal/external routes | PRODUCT, four Application, EU Market, EU Trade, RFQ/DOC/Sample and source owners | exact approved target, current content, environment reachability and usable return path; EU Trade also needs current official-source/freshness evidence; dead/wrong/placeholder target blocks full acceptance/release |
| `MARKET-EU-IT-G6-D03` RFQ | CONV-RFQ and receiver operational owner | editable Italy/source mapping, protected buyer values, validation, positive acknowledgement, error/timeout/ambiguous response and retry; route status/local UI cannot close receipt |
| `MARKET-EU-IT-G6-D04` Documents | CONV-DOC and receiver operational owner | source-only mapping, neutral company country/Grade/types, owner validation, provider response and separately qualified mailbox/release state; do not transplant another page's result |
| `MARKET-EU-IT-G6-D05` Sample | CONV-SAMPLE and receiver operational owner | source-only inbound context, neutral destination/Grade/Application, buyer-entered editable destination, validation/idempotency/positive receipt and failure recovery; no Sample approval or dispatch inference |
| `MARKET-EU-IT-G6-D06` Chrome/Brand/Legal/Consent | shared owners | exact current references, menu/dialog keyboard behavior, production SVG Logo, no Terms, working Cookie Settings and real consent configuration; defects return to owner, no Italy fork |
| `MARKET-EU-IT-G6-D07` Facts/freshness/device/release | Italy/shared owners, Gate 9 and user Gate 10 | current third-party source qualification, real device/browser/AT checks, implementation receipt, production configuration and separate publication/indexing authority; unverified or unauthorized state remains closed |

These are allowed post-Gate 6 dependencies because each has an owner, acceptance condition and failure disposition. None is labeled implemented, tested, released or published by this package.

## 8. Stable Gate 9 acceptance conditions

Gate 8 receipt and Gate 9 independent read-only evidence must use these IDs against one identifiable implementation version and environment. This specification pre-signs no result.

| ID / source | Input and expected result | Required evidence and non-pass condition |
|---|---|---|
| `MARKET-EU-IT-G9-AC01` / A, B, C, M | clean Italy URL and SSR initial content; one exact H1, seven modules in order, all required B copy, source qualifications, COO/after-submit limitations and 19 link occurrences | extracted initial/rendered text and source-chain readback; omission, meaning change, duplicate/missing critical text, image-only copy, placeholder or governance leakage fails |
| `MARKET-EU-IT-G9-AC02` / G3, G4, Brand | real 1440/768/390 complete pages and necessary hover/focus states preserve hierarchy, no-image state, responsive stacking and adjacency | full-page/segment/state evidence plus target/overflow measurements; cropping, horizontal overflow, wrong order, target below 44px, invisible/clipped focus or invented media fails |
| `MARKET-EU-IT-G9-AC03` / C action map | activate every relevant occurrence of Breadcrumb, Products, four Applications, EU owner, EU Trade, RFQ/DOC/Sample and both external source links | actual click/final target/content/scope/return-path evidence; static href alone, dead/placeholder/wrong-scope/wrong-owner target, stale trade source or unaccounted omission fails full acceptance |
| `MARKET-EU-IT-G9-AC04` / C + RFQ owner | enter from all three RFQ occurrences; Italy initializes visibly/editably when appropriate; change value, return/re-enter and test empty/invalid/expired context; no other field inferred | real UI plus redacted transfer/receiver mapping; locked Italy, overwritten buyer value, company-country confusion, hidden required value or Grade/Application/quantity/location inference fails |
| `MARKET-EU-IT-G9-AC05` / C + DOC owner | enter DOC with neutral company country, Grade and type; select one Grade/multiple types; exercise validation, invalid state and retry | real UI/redacted payload/recovery; Italy/COO/Grade/type auto-selection, source-driven eligibility, missing required validation or false release meaning fails |
| `MARKET-EU-IT-G9-AC06` / C + Sample owner | enter Sample from Italy; only allowlisted source context transfers; destination, Grade and Application remain neutral until buyer entry; valid/invalid, timeout/error/ambiguous and retry states preserve input | real UI/redacted payload/receiver evidence; Italy/Grade/Application prefill, locked destination, source satisfying a required field, optimistic success, lost input or Sample approval/dispatch implication fails |
| `MARKET-EU-IT-G9-AC07` / receiver contracts | RFQ, DOC and Sample success appears only under each owner's exact positive receipt rule, with failure and recovery tied to the tested implementation | network/receiver and redacted business evidence; HTTP status, screenshot, toast or local simulation alone fails; provider acceptance cannot be relabeled mailbox arrival or business approval |
| `MARKET-EU-IT-G9-AC08` / C SEO/GEO/Schema | clean/query/preview and authorized production configuration produce exact Title, Meta, canonical, language, WebPage/BreadcrumbList and only approved facts/relationships | initial head/JSON-LD capture and scoped entity evidence; changed/missing fields, query variant, guessed entity ID, prohibited Schema, invented image/date/alternate or unauthorized indexability fails |
| `MARKET-EU-IT-G9-AC09` / Chrome/Legal/Consent | desktop/compact Header, menu open/close/Tab/Shift+Tab/Escape/breakpoint, Footer links and Cookie Settings reopen/focus restore; Markets current semantics | actual keyboard/accessibility tree/config evidence; duplicate current, buyer-visible `CURRENT`, hidden focus, stale Terms, broken Settings/focus restore, background leakage or page-local fork fails |
| `MARKET-EU-IT-G9-AC10` / scope contract | correct/wrong/missing scope, same slug, warm/cold cache, invalidation and reverse cross-site inputs cover all seven §6 surfaces | query/API/render/network/cache/invalidation and reverse regression evidence; a screenshot or only happy path is insufficient; any cross-scope content/menu/SEO/form/media leak or fallback fails |
| `MARKET-EU-IT-G9-AC11` / facts and dependencies | inspect visible, machine and receiver surfaces plus all seven dependencies; only approved Italy/Malaysia-origin/COO/source semantics and explicit current readiness appear | content/JSON-LD/payload plus owner/version/freshness/readiness evidence; local-service, Grade-fit, certificate/customs/tariff/stock/delivery expansion or open control labeled ready fails |
| `MARKET-EU-IT-G9-AC12` / workflow and this package | Gate 8 returns one locked implementation mapped to `MARKET-EU-IT-G6-HANDOFF-01`, with data/API/render mapping, changes, dependency versions, per-AC results, untested scope and rollback | repository/workspace, commit/ref, branch/worktree, environment/build identity, diff/test/evidence and shared regressions; unlocatable/stale implementation, unsupported self-reported PASS or missing rollback is not an acceptable receipt |

## 9. Global non-pass and Gate 8 receipt

Gate 9 cannot pass Italy when the implementation or environment is unidentified; required B content or action is missing/changed; facts or machine semantics expand approval; a route is wrong/dead/stale; a receiver shows false success; accessibility/responsive behavior fails; any scope surface leaks/falls back; shared components are stale or cloned; or an implementation/release dependency is claimed closed without owner evidence.

Gate 8 must return a versioned receipt keyed to `MARKET-EU-IT-G6-HANDOFF-01` and `MARKET-EU-IT-G9-AC01`–`AC12`, containing repository/workspace and immutable implementation identity, actual scoped data/API/render bindings, changed files/components/config, shared versions, routes/receiver integrations, per-AC evidence, failures/untested conditions, isolation/shared regressions and rollback.

## 10. Gate 6 submission boundary

Gate 6 used `FAST_PATH`: the six intake objects resolve to one approved combination; the repaired Gate 4 chain closes its only required Finding; source, visual and key contract identities remain exact; closure-to-intake changes are lifecycle/governance navigation only and do not alter the page payload. Gate 6 inherited the valid visual conclusion and reviewed the new cross-contract mapping, owner interfaces, seven-surface isolation, dependencies and acceptance conditions.

Required Gate 6 Finding: **0 at executor submission**. Independent review remains required and may issue stable Findings. Until that review and root closure occur, this package remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_DISPATCHED`; it is not a current Manifest and does not start Gate 8.
