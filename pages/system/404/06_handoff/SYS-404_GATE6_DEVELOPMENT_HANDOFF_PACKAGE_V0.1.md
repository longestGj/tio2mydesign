# SYS-404 Gate 6 development handoff package V0.1

Date: 2026-09-08. Dispatch: `G6-SYS404-EXEC-20260908-01`. Actual author: `/root/sys404_gate4_execute`.

Status: `READY_FOR_REVIEW / DRAFT_FOR_PROJECT_CONTROL_REVIEW`. This is the single Gate 6 package candidate. It is not independently approved, closed, handed off or implemented.

## 1. Authority, scope and FAST_PATH review

Page identity is `SYS-404`, EN/GLOBAL, `RUNTIME_FALLBACK`, `site_scope=tio2-my`, `NO_PRIMARY_KEYWORD`. It serves genuine unknown URLs and has no separately indexable `/404/` acquisition route.

[Manifest V0.9](../SYS-404_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md) is the current lifecycle pointer. [Gate 6 admission card](../05_review/gate6-v0.1/SYS-404_GATE6_INPUT_AND_ADMISSION_CARD_V0.1.md) records all six Gate 5→6 objects and the `FAST_PATH` basis. Gate 2 content/machine semantics, Gate 3 structure and Gate 4 visual quality are inherited from their completed independent reviews. The approved visual combination is `SYS-404-G4-BUNDLE-20260908-02`; source SHA-256 `FC42439402367D16FBCBA6A82A30E42C403CD5C00FC480F5B296BB1E5D2F485A`; evidence-index SHA-256 `598C67FA0FA9F52DC24A94CDA0A30F489EDD4C35AD5F3CB7D279C5A442F9783B`.

Gate 4 closure to this package has `change=NONE`. No visual re-render or second visual review was triggered. The current task checks the interfaces among approved content, actions, routing, metadata, shared owners, scope, dependencies and the new development/acceptance mapping.

## 2. Source map and code identity

| Source/object | Identity for Gate 8 | Required use |
|---|---|---|
| [Approved Brief](../../../../docs/page-briefs/SYS-404_PAGE_NOT_FOUND_BRIEF_V0.1.md) SHA `10E2243BC7D98B5F3B7631C68F4CEB7E4D23D8BCCC6FC7C8DB96E48D2898A4A1`; [page-addition decision](../../../../docs/architecture/SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md) SHA `405EFC93F14B2FA4ABB1B30CC06ACAF60FEFEC05256E286B51DA11E38735350D` | `APPROVED_CONTRACT` | Page identity, runtime-fallback purpose, scope, exclusions and DEP01–DEP07 origin. |
| [Gate 2 B](../04_planning/SYS-404_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md) SHA `2D95185640F1855F5C98A104434DB74FDFCEF2E9C0A90B36181E3E5EE1A3FCFC` | `APPROVED_CONTRACT` | Only editable visible-copy authority; preserve BC-01–BC-08 exactly. Do not copy-edit from this package. |
| [Gate 2 C](../04_planning/SYS-404_GATE2_CONTENT_CONTRACT_V0.1.md) SHA `542081EFB4D298C5BAFDD301B4D4E867F54C6FDC139ED351A47E910BD85AC254` | `APPROVED_CONTRACT` | Page behavior, destinations, machine semantics, exclusions and DEP01–DEP07. |
| [Gate 3→4 handoff](../05_review/SYS-404_GATE3_TO_GATE4_HANDOFF_V0.1.md) SHA `161DFCDF5E233FC3604E8FA26C50094E26AFD46E369224F8BA3D964947E0015E` | `APPROVED_CONTRACT` | Responsive structural order and two-Primary/three-Supporting relationship. |
| [Gate 4 frozen HTML](../04_planning/gate4-v0.2/SYS-404_GATE4_COMPLETE_VISUAL_V0.2.html) SHA `FC42439402367D16FBCBA6A82A30E42C403CD5C00FC480F5B296BB1E5D2F485A` | `PROTOTYPE_ONLY` | Visual/interaction reference. Embedded HTML/CSS/JS is not production routing, CMS, security, analytics or shared-component implementation and is not promised as directly mergeable. |
| [Gate 4 evidence index](../04_planning/gate4-v0.2/evidence-index.json) SHA `598C67FA0FA9F52DC24A94CDA0A30F489EDD4C35AD5F3CB7D279C5A442F9783B` | `REFERENCE_IMPLEMENTATION` | Locate approved 1440/768/390 full visuals, 768/390 Menu and all-width Cookie states. Local checks/simulations do not prove production. |
| Gate 4 diagnostic/check scripts under `04_planning/gate4-v0.2/diagnostic_support/` | `REFERENCE_IMPLEMENTATION` | May inform equivalent tests; do not treat local interception or prototype behavior as production evidence. |
| [Visual Standard](../../../../brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md) SHA `75CF7BBD306A4B2BF2662414DFB28813B094B8552AF8A7FE54231F3837E524EC`; [CTA Addendum](../../../../brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md) SHA `1F6CB1F9913BD78AED3CAB30AF56CE1EEABB0C46CB354F09F05E2D00A3897E9A` | `APPROVED_CONTRACT` | Preserve approved brand result and accessible functional colors. |
| [Global Chrome V0.5](../../../../docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md) SHA `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18`; [Footer Legal V1.0](../../../../docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md) SHA `C1F0011408ED1D87CFF6D36C11F7E9812CC9A803431A3F7030C771FAF41BF633`; [No-Terms decision](../../../../docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md) SHA `9B01C3D086BCBED5CB3DE2ED74EE997FC671FE21B055F458AC0B8301D99127D1`; [production Logo Manifest](../../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md) SHA `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894` | `APPROVED_CONTRACT` | Consume existing shared owners; no SYS-404 component or asset fork. Footer is copyright-first. |
| [Gate 8→9 evidence contract](../../../../docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md) SHA `A74953971244D3B2BB43F6BC5D9B798F428D9590BAB8BCB8664E1D4E9B4B31CB`; [Schema V1.0](../../../../docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json) SHA `CBD36D338412A5D311AE062A93982D9A5799E0CF3D459BCB72D41E4A155247AD` | `APPROVED_CONTRACT` | Gate 8 return evidence and runtime-hold format. |

Any unlabelled code or snippet is `PROTOTYPE_ONLY`. The approved result is governed by the content, behavior, structure, visual outcome and shared-owner contracts above, not by an assumed production component tree.

## 3. Required implementation result

Gate 8 first inspects the actual WordPress/Next.js project, current routing, shared Chrome/Consent implementation, content source and `tio2-my` isolation. It then chooses reuse, adaptation or necessary addition. This package does not prescribe post types, CMS field names, API names, component paths, router APIs or cache mechanisms.

### Runtime routing and response

- A genuinely unmatched `tio2-my` request renders this page and returns HTTP `404`; the visible page is not served with `200`.
- Registered valid routes remain owned by their pages and are not intercepted by the fallback.
- Repeated/cached requests preserve the correct status and scope. Cache keys and fallbacks must not convert an unknown route to a successful page, serve another site's 404, or leak another scope's content.
- Do not create an independently indexable `/404/` content page. If the framework has an internal 404 route, it remains an implementation detail and must not become an acquisition URL or sitemap item.

### Content and layout

Render Shared Header → `404 · PAGE NOT FOUND` → H1 → body → two Primary actions → three Supporting actions → Shared Footer. The exact visible words remain in Gate 2 B. Desktop keeps the two Primary actions together and the three Supporting actions together; tablet wraps groups independently; 390 renders all five as one full-width column while preserving order and group distinction.

The two Primary actions are `Explore Products` and `Go to Homepage`. The Supporting actions are `Request Documents`, `Contact Our Team` and `Request a Quote`. Do not add search, breadcrumb, FAQ, recommendation, help center, form, product/document list, media, automatic redirect, dynamic promise or page-local legal copy.

### Actions and destinations

| Action | Exact target | Production behavior |
|---|---|---|
| Explore Products | `/products/` | Ordinary navigation inside `tio2-my`. |
| Go to Homepage | `/` | Ordinary navigation; no automatic redirect. |
| Request Documents | `/request-documents/` | Navigate to the target owner; no download, availability, receipt or delivery claim. |
| Contact Our Team | `/contact/` | Navigate to the target owner; no response-time or service-result claim. |
| Request a Quote | `/request-a-quote/` | Navigate to RFQ entry; this click is not a submission or conversion. |

No unknown-path, query or fragment context is forwarded or used to infer product, market, application, document, identity or buyer intent. Missing targets are returned to their page owners; SYS-404 does not silently hide or replace the approved links.

### SEO, GEO and machine output

- Title: `Page Not Found | TiO2 Malaysia`.
- Actual unknown response: `404`; robots directive: `noindex, follow`; exclude from every sitemap.
- Emit no canonical that makes the arbitrary unknown URL or an internal `/404/` route indexable.
- Emit no page-specific Schema. Shared schema, if present, must not describe the unknown request as a Product, Article, acquisition WebPage, quotation, document delivery or successful conversion.
- Hreflang is not applicable. Do not add page-specific campaign/social acquisition metadata. Any technically required shared description/default must stay within the visible not-found/recovery meaning and add no claim.
- This page has no GEO answer block, FAQ target, location/capability assertion or product recommendation.

### Shared owners and states

Consume the existing production Header, Mobile Menu, production Logo, fixed RFQ, Footer and Consent Manager for `tio2-my`. Desktop and Mobile navigation each have zero current items; invalid path prefixes do not infer a parent. The Footer keeps `© 2026 TiO2 Malaysia.` before `Privacy Policy → Dasar Privasi (BM) → Cookie Policy → Cookie Settings`, with no Terms link. Cookie Settings is a semantic button and reopens the shared preference interface.

The target visuals are the frozen Gate 4 evidence at 1440, 768 and 390. Mobile Menu applies at 768 and 390; Cookie Settings applies at all three. Implement the approved visual result with the actual shared components. Do not reproduce the prototype's embedded shared markup as a SYS-404 fork.

### WordPress, Next.js and data boundaries

- WordPress must not create an indexable 404 page, sitemap record, page-specific schema record or page-owned form/media requirement. Gate 8 decides, after inspecting the current architecture, whether the exact utility copy is code/config managed or sourced through an existing scoped content mechanism.
- Next.js must deliver the observable fallback, status, metadata, content, responsive visual and shared-component results specified here, using the project's established architecture.
- Queries, routes, cache entries, menus, SEO data, form exits, media references, shared components and analytics for this page remain restricted to `site_scope=tio2-my`. Missing scoped data must fail safely within this scope and must never fall back to another site's content or settings.
- Page-specific form fields, receiver, submission, uploads and media are `NOT_APPLICABLE`. The three conversion destinations remain ordinary links to their separate owners.

### Analytics and privacy

Analytics is optional. If a 404 event is recorded, send only a sanitized path that excludes query and fragment data that may contain personal or secret information. Respect the approved GA4/GTM consent state, keep remarketing disabled, add no new verification service, and never classify the page view or any recovery click as a form success. Navigation labels/targets may be recorded only within the approved analytics and consent system.

## 4. Open downstream dependencies

| ID | Requirement and current evidence | Owner / verification stage | Failure blocks |
|---|---|---|---|
| `DEP01` | Unknown route must return real 404 and valid routes must remain valid. Planning source proves neither production behavior. | Gate 8 routing owner; Gate 9 runtime | `PAGE_GATE9` |
| `DEP02` | Five exact targets must resolve inside `tio2-my` and clicks only navigate. Registration is known; live availability is untested. | Target-page owners + Gate 8 integration; Gate 9 link/runtime | `INTEGRATION` |
| `DEP03` | `noindex, follow`, sitemap exclusion, no indexable canonical and no page-specific Schema. Planning metadata is not deployed output. | Gate 8 SEO owner; Gate 9 response/DOM/sitemap | `PAGE_GATE9`; release if indexed output differs |
| `DEP04` | Shared Header/Menu/Footer/Logo/fixed RFQ/Consent, zero current navigation and copyright-first legal order. Gate 4 proves only local assembly. | Global Chrome/Legal/Consent owners + Gate 8; Gate 9 integration | `INTEGRATION` |
| `DEP05` | Three-width visuals, real-device responsiveness, keyboard/focus, ≥44×44 at 390, 200% zoom and no overflow. Gate 4 is visual/local evidence. | Gate 8 UI owner; Gate 9 actual-browser/device | `PAGE_GATE9` |
| `DEP06` | Route/query/cache/menu/SEO/form/media/shared/analytics isolation within `tio2-my`, including missing-data behavior. | Gate 8 architecture owner; Gate 9 negative-scope verification | `INTEGRATION` |
| `DEP07` | Optional 404 analytics sanitizes query/fragment, follows consent, disables remarketing and never emits success. If analytics is absent, absence must be evidenced. | Analytics/Consent owner + Gate 8; Gate 9 network/payload | `INTEGRATION` and `RELEASE` if privacy behavior differs |

All seven dependencies have an owner, observable acceptance and failure layer. They remain `NOT_TESTED` until Gate 8/9 evidence closes them; they are not Gate 6 Findings.

## 5. Stable Gate 9 acceptance conditions

These IDs must appear unchanged in the Gate 8 evidence Manifest and development receipt. “Test passed,” a screenshot alone or a 2xx response alone is insufficient.

| ID | Prerequisite / input | Expected observable result | Required actual evidence | Failure impact | Owner / stage |
|---|---|---|---|---|---|
| `SYS404-G9-AC01` | Run the candidate build in `tio2-my`; request unique unmatched root and nested paths, then representative registered routes | Every unmatched request returns HTTP 404 with SYS-404 content; registered routes remain their correct non-404 pages; repeat/cached requests preserve status and scope | Raw response/status/body for at least two unmatched shapes and representative valid routes; repeat/cold-warm result; runtime/build identity | Page cannot pass; routing integration blocked | Gate 8 routing/cache; Gate 9 runtime |
| `SYS404-G9-AC02` | Render a genuine unmatched request | Exact BC-01–BC-08; Header → eyebrow → H1 → body → 2 Primary → 3 Supporting → Footer; no missing, duplicated or rewritten text | DOM/text extraction mapped to Gate 2 B plus full-page runtime capture | Page cannot pass | Gate 8 content/rendering; Gate 9 DOM/visual |
| `SYS404-G9-AC03` | Activate each of the five recovery actions from an unknown URL containing a synthetic query/fragment | Exact targets resolve inside `tio2-my`; action only navigates; no unknown query/fragment or inferred context is forwarded; no submission/success event | Browser navigation trace and final URL/status for all five; receiver/network log showing no form request or success event | Integration blocked; target-owner issue routed to that owner | Gate 8 integration + target owners; Gate 9 runtime/network |
| `SYS404-G9-AC04` | Inspect response headers, rendered head, robots and sitemap from the same build | Title exact; `noindex, follow`; 404 status; sitemap exclusion; no indexable canonical for the unknown/internal 404 route; no page-specific/hreflang/acquisition Schema or promotional social claim | Raw headers; rendered head/DOM; sitemap response/search; JSON-LD inventory with entity/URL mapping | Page cannot pass; indexing difference blocks release | Gate 8 SEO; Gate 9 source/runtime |
| `SYS404-G9-AC05` | Load desktop and mobile shared surfaces on the 404 result | Production Logo, fixed RFQ, complete shared Header/Menu/Footer/Consent; zero current items; copyright-first exact legal order/routes/button; no Terms | DOM role/order/URL assertions; shared-component identity/source evidence; Menu and Cookie interaction recording | Integration blocked | Gate 8 shared owners; Gate 9 integration |
| `SYS404-G9-AC06` | Render approved content at 1440, 768 and 390 against frozen Gate 4 V0.2 | Complete page matches approved hierarchy and visual intent; tablet groups wrap independently; 390 shows five ordered full-width actions; Menu 768/390 and Cookie all widths match applicable states; no clipping/collision/abnormal fixed blank area | Full-page and state captures tied to build/runtime; DOM geometry; reviewer comparison to Gate 4 evidence | Page cannot pass; visual defect returns to implementation or Gate 4 if contract conflict | Gate 8 UI; Gate 9 visual/runtime |
| `SYS404-G9-AC07` | Keyboard, 200% zoom and real-device/browser checks on the candidate | H1 is initial main landmark; all actions/shared controls keyboard reachable with visible focus; Menu/dialog contain and return focus; logical controls ≥44×44 at 390; no horizontal overflow or lost copy/action at 200% | Keyboard/focus trace, accessibility scan plus manual confirmation, geometry/overflow record, 200% and real-device/browser evidence | Page cannot pass | Gate 8 UI/a11y; Gate 9 actual runtime |
| `SYS404-G9-AC08` | Run correct, incorrect and missing `site_scope` cases across route, query, cache, menu, SEO, form exits, media, shared components and analytics | SYS-404 and its data/components stay in `tio2-my`; no cross-scope fallback, cache bleed, content, URL, asset, menu, consent or analytics leakage | Negative-scope matrix with request/result/source; cache variation evidence; runtime network and rendered-source evidence | Integration blocked | Gate 8 architecture; Gate 9 integration/security boundary |
| `SYS404-G9-AC09` | Observe network/data layer with analytics enabled under allowed consent, denied/unavailable consent, and analytics absent where supported | Any 404 event contains only sanitized path without query/fragment; follows consent; no remarketing/new verifier; page view/click never becomes form success. If no event exists, evidence shows absence | Network/data-layer payloads with synthetic secret-like query proving omission; consent-state matrix; configuration/source evidence | Integration or release blocked | Analytics/Consent owner + Gate 8; Gate 9 payload inspection |
| `SYS404-G9-AC10` | Inspect DOM, source/data dependencies and network after loading and using the page | No search, breadcrumb, FAQ, recommendation, help center, form, receiver, upload, page-owned media, product/document list, automatic redirect, dynamic promise or page-local legal copy | DOM/source query, network record and dependency inventory | Page cannot pass if extra behavior changes approved scope | Gate 8 implementation; Gate 9 source/runtime |
| `SYS404-G9-AC11` | Gate 8 completes implementation and returns evidence | Valid `gate8_evidence_manifest.json` binds this page, all AC IDs, repository/branch/baseline/implementation/evidence HEAD, build identity, held runtime, evidence hashes/types/commands/environment, receipt references and DEP01–DEP07 disposition | Schema validation, two-round Gate9 preflight, clean Git/build/runtime identity, receipt with exact `EVIDENCE:` lines; runtime held until Gate9 notice | `EVIDENCE_INCOMPLETE` or `ENVIRONMENT_FAILURE`; Gate 9 cannot fully accept | Gate 8 delivery owner; Gate 9 preflight |

## 6. Gate 8 return requirements

The Gate 8 evidence Manifest must conform to `gate8-evidence-manifest-v1.0`, use `site_scope=tio2-my`, list `SYS-404` with all eleven acceptance IDs and a representative unmatched `runtime_path`, and keep that exact candidate available until `GATE9_PASS_OR_RETURN_NOTICE`.

The receipt must bind the repository, branch, baseline commit, implementation commit, evidence HEAD, clean-check time, build directory/ID/commit, runtime URL/environment/start time and implementation/data-source locations. Every evidence file used for acceptance must be committed in the evidence HEAD, have its repository-relative path and SHA-256 in the Manifest, and appear as a separate `EVIDENCE: <repo-relative-path>` line in the receipt. Evidence must distinguish `ACTUAL_RUNTIME`, `STATIC_VISUAL`, `SOURCE_INSPECTION`, `TEST_RESULT`, `IDENTITY` and any `LOCAL_SIMULATION`; local simulation cannot close a production condition.

`known_open_items` carries any unresolved `DEP01–DEP07` with owner, blocking layer, closure evidence and timing. A valid Manifest does not itself prove the page; Gate 9 separately reports recheck scope, page status, integration status and release status.

## 7. Gate 6 consistency result and limits

The source-to-package and package-to-source mapping found no content, fact, structure, action, SEO/GEO/Schema, shared-owner or scope contradiction. Required Gate 6 Findings: **0**. `DEP01–DEP07` remain executable downstream dependencies with stable acceptance mapping.

The package adds implementation and evidence requirements but no new buyer-visible content, product feature, CMS field, business promise or technical path. It does not prove the real 404 response, route protection, targets, production metadata, shared runtime, device/accessibility, analytics or scope isolation. A different actual Reviewer must review every substantive package requirement and all Gate 9 conditions before Project Control may close Gate 6.
