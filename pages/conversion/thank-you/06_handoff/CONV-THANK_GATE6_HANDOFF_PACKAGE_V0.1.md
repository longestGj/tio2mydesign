# CONV-THANK Gate 6 Development Handoff Package V0.1

## 0. Control and use

| Field | Contract |
|---|---|
| Page / route | `CONV-THANK` / `/thank-you/` |
| Language / scope | EN / `site_scope=tio2-my` |
| Package ID | `CONV-THANK-G6-HANDOFF-20260908-01` |
| Dispatch | `G6-CONVTHANK-EXEC-20260908-01` |
| Path | `FAST_PATH`; `post_closure_change=NONE` |
| Author / date | `/root/conv_thank_gate4_execute` / 2026-09-08 |
| Status | `READY_FOR_REVIEW / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Required Findings at submission | 0 |

This is the sole proposed page-specific Gate 6 development package. It has no implementation, approval, Gate 6 closure, Gate 8 handoff, merge, deployment, publication or indexing effect until the required different-identity review and Project Control closure occur. Gate 4 quality is inherited from the independent Gate 5 review and Controller closure; this author does not re-sign it.

After approval, Gate 8 must implement from this package and the exact approved sources below. The developer may adapt the contract to the architecture actually found in the implementation project and must record the real fields, queries, routes, cache boundaries, receiver integration points and components used. This package intentionally does not invent those names.

## 1. Exact source and code identity

### 1.1 Approval chain and page contracts

| Object | Exact path | Bytes | SHA-256 | Identity |
|---|---|---:|---|---|
| Current admission Manifest | `pages/conversion/thank-you/CONV-THANK_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md` | 1810 | `a688fab4a131c0e303be94e4745b6c9381bf61b869354e8bbebce1543fd8d3ce` | `APPROVED_CONTRACT` for dispatch state |
| Gate 6 control | `docs/architecture/GATE6_SYS404_CONVTHANK_TO_GATE8_CONTROL_V1.0.md` | 4538 | `33edf48dff5c5b940089c1d32ad39b23a6bcfc27426a242d34e1c5547a79fd45` | `APPROVED_CONTRACT` |
| Gate 4→6 entry | `pages/conversion/thank-you/05_review/CONV-THANK_GATE4_TO_GATE6_HANDOFF_V0.1.md` | 1868 | `6b55b27b09bb9d5c34e018dd50abec40917e1b9009bf175ab1c4410b4e0a0e6a` | `APPROVED_CONTRACT` |
| Gate 5 Controller closure | `pages/conversion/thank-you/05_review/CONV-THANK_GATE5_CONTROLLER_ACCEPTANCE_AND_VISUAL_CLOSURE_V0.1.md` | 3493 | `92e694e74b0f5ea870cd9d7706b67d117013600158ed4e012d705135da157d30` | `APPROVED_CONTRACT` |
| Approved Brief | `docs/page-briefs/CONV-THANK_SHARED_FORM_SUCCESS_BRIEF_V0.1.md` | 14211 | `4e4720f391a049c82fbf4107e051d323647824475e47c54d07e865abea72eb1a` | `APPROVED_CONTRACT` |
| Gate 2 A | `pages/conversion/thank-you/04_planning/CONV-THANK_GATE2_CONTENT_SKELETON_AND_INHERITANCE_MAP_V0.1.md` | 5724 | `6a27061508badaad268c243e1a1cdc95e2b5ceb8fd0092b0edff067c0f41f8fa` | `APPROVED_CONTRACT` |
| Gate 2 B, sole editable visible copy | `pages/conversion/thank-you/04_planning/CONV-THANK_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` | 2304 | `f717a467fba347d539920a3ddf241a95893feca16726efba45b467da1b6d4c8e` | `APPROVED_CONTRACT` |
| Gate 2 C | `pages/conversion/thank-you/04_planning/CONV-THANK_GATE2_STABLE_PAGE_CONTRACT_V0.1.md` | 9845 | `fe9c053bf1c27245b5d00383a241a5bb1ada4d11c1cb1fb2559399ae6fbe4e5d` | `APPROVED_CONTRACT` |
| Three-form impact audit | `pages/conversion/thank-you/02_analysis/CONV-THANK_THREE_FORM_SUCCESS_CONTRACT_IMPACT_AUDIT_V0.1.md` | 11958 | `a51f5b39104f8635e384e31415c71eb67aa61ed7c7f3c99d4dd53a9a725cd976` | `APPROVED_CONTRACT` for source-resolution map and `THANK-DEP01–07` |

### 1.2 Visual combination

Approved visual bundle: `CONV-THANK-G4-BUNDLE-20260908-02`; workset: `CONV-THANK-G4-WORKSET-20260908-02`.

| Object | Exact path | Bytes | SHA-256 | Identity |
|---|---|---:|---|---|
| Gate 3 frozen structure | `pages/conversion/thank-you/04_planning/gate3-v0.2/CONV-THANK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html` | 16507 | `1c0b12a4b21f4eb3be2e2b9daed569c1d3f9e30752a5591127824569879a7b28` | `PROTOTYPE_ONLY` |
| Gate 4 complete visual source | `pages/conversion/thank-you/04_planning/gate4-v0.2/CONV-THANK_GATE4_EDITABLE_SOURCE_V0.2.html` | 18314 | `5487a2d5bcc8528b8e01b18b10b9bc78bd67e2fa693833313f16ee0e94a7e8fd` | `PROTOTYPE_ONLY` |
| Gate 4 input index | `pages/conversion/thank-you/04_planning/gate4-v0.2/CONV-THANK_GATE4_INPUT_INDEX_V0.2.json` | 10753 | `dcf5cbcb18c626cd6c184c05f234fee2e9a0c52624ce4b030ab41de52fbebae7` | `APPROVED_CONTRACT` for frozen identity |
| Gate 4 freeze record | `pages/conversion/thank-you/04_planning/gate4-v0.2/CONV-THANK_GATE4_FREEZE_RECORD_V0.2.json` | 4588 | `d741b0ebe10976b3b0d513e803768dff4eb79be7430629441f2f4bef8c08eceb` | `APPROVED_CONTRACT` for frozen identity |
| Gate 4 evidence index | `pages/conversion/thank-you/04_planning/gate4-v0.2/CONV-THANK_GATE4_EVIDENCE_INDEX_V0.2.json` | 13077 | `ceb648734d91a8ba2122a0d4b15eb760f00af7b0879a95cd746ddd83e2de0be2` | `APPROVED_CONTRACT` for reference evidence |
| Gate 5 initial review | `pages/conversion/thank-you/05_review/gate5-independent-v0.1/CONV-THANK_GATE5_INDEPENDENT_VISUAL_REVIEW_V0.1.md` | 7062 | `cc91d305952418aef4adbb7cc5950c2cf9613e4fd2783246cb3fb59dea516bb5` | review history; finding issued |
| Gate 5 targeted recheck | `pages/conversion/thank-you/05_review/gate5-independent-v0.1/CONV-THANK_GATE5_INDEPENDENT_TARGETED_RECHECK_V0.2.md` | 4342 | `1fb643eb7b6071c5287bf24c10362e89fbfaf77902655929afa6f5acba65f155` | `APPROVED_CONTRACT`; final review pass, Required Findings 0 |

The 15 formal Gate 4 images cover Quote, Documents, Sample and Direct at 1440/768/390, plus 768/390 Menu and 390 Cookie Settings. They are visual references, not production media. The HTML, its simulated query/session behavior, local navigation, copied shared markup and all local scripts remain `PROTOTYPE_ONLY`; none proves production receipt or may become an undisclosed runtime source of truth.

### 1.3 Shared-owner contracts

Gate 8 must consume the current shared owners and document the actual implementation identity. Required reference versions at Gate 6 freeze are `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` SHA `cc236f47018a68771856fdbaf5553517f63959774e0e8819130e66e2b1049f18`, `PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` SHA `81b73a5262269f618e8fb0667c9345279449a1bcb71647422b6a1d3f8ebfe894`, primary CTA addendum SHA `1f6cb1f9913bd78aed3cab30af56ce1eeabb0c46cb354f09f05e2d00a3897e9a`, Footer legal addendum SHA `c1f0011408ed1d87cff6d36c11f7e9812cc9a803431a3f7030c771faf41bf633`, and No-Terms/Consent decision SHA `9b01c3d086bcbed5cb3de2ed74ee997fc671fe21b055f458ac0b8301d99127d1`. A later approved shared-owner version may be consumed only with a recorded delta and Project Control handling of material conflicts.

## 2. Complete visible-state contract

Only one result panel is present at a time. Editorial state labels and `BC-*` anchors are not buyer-visible. Natural line wrapping is allowed; wording, punctuation, capitalization, action labels, order and targets are exact.

| State | Receipt cue and exact content | Exact actions in order |
|---|---|---|
| Quote | `REQUEST RECEIVED`; H1 `Thank you. We’ve received your quotation request.`; `Our team will review the details and contact you using the information provided.`; success icon accompanies text | `Explore Products` → `/products/`; `Go to Homepage` → `/` |
| Documents | `REQUEST RECEIVED`; H1 `Thank you. We’ve received your document request.`; `Our team will review the requested documents and contact you using the information provided.`; success icon accompanies text | `Return to Documents` → `/documents/`; `Explore Products` → `/products/` |
| Sample | `REQUEST RECEIVED`; H1 `Thank you. We’ve received your sample request.`; `Our team will review your application and sample requirements and contact you using the information provided.`; success icon accompanies text | `Explore Products` → `/products/`; `View Applications` → `/applications/` |
| Direct / invalid | H1 `How can we help?`; `Choose the request you’d like to make, and our team will guide you through the next step.`; no receipt cue, success icon or success wording | `Request a Quote` → `/request-a-quote/`; `Request Documents` → `/request-documents/`; `Request a Sample` → `/request-sample/` |

The page has no breadcrumb, submit action, dynamic recommendation or marketing CTA. These are nine action instances and seven unique destinations. No action appends request data, marker data, prefill values or analytics identifiers.

## 3. Result eligibility and source-form boundary

The only approved selector key is `request`, with allowlisted values `quote`, `documents` and `sample`. The obsolete `type` key is never accepted. Query data selects a candidate presentation only and is never evidence of success.

A success panel requires both elements below, evaluated before any success content appears:

1. The source flow received its exact positive acknowledgement and created a matching short-lived marker for the current browser session.
2. The `/thank-you/` request query is present, allowlisted and matches that marker.

The marker contains only the allowlisted request type, success time, and non-personal flow/session verification data. It contains no PII, business request data or request reference. The approved duration is short and limited to the same session; this package does not prescribe a minute value, storage API, cookie, token format or component name.

| Source | Exact positive acknowledgement before navigation/marker | Current source authority retained |
|---|---|---|
| Quote / RFQ | Receiver's explicit positive accepted/queued acknowledgement. HTTP 2xx alone is insufficient. | User authorization/handoff record SHA `9bf6b0f3658332b781dff83361d1dd7b3b986f572fd988baa0227b09596f3432`; Gate 7 handoff V1.1 SHA `264156a38cc88f0926bb9eb6b0bc7ca3ddc500a8b47d3ff63eacc50510930d15`; mapping V1.0 SHA `219665fcf1e6b7d8b4c6e5673924d5ff820356481335b7df78e70eb5d7642cbf` |
| Documents | Current browser-direct Web3Forms result has HTTP 200 **and** parsed JSON `success=true`. Non-200, non-JSON, timeout or ambiguous response is failure. | Current Gate 9 Manifest V0.4 SHA `acc1977233a6089f954555e403e493516b2240c1a4972695019c9d1224522a59`; Free-plan decision SHA `410e880ca37df593ec4ddc9d786200af98a958ebf7d185d760b3ff5a2ec2dce3`; Gate 7 handoff SHA `cd0505f25118bd604138cc2a9b5ec04b04af62b6c72e8c5bf3dac16bd08c511a` |
| Sample | Verified receiver response returns `ok=true` **and** `receipt_confirmed=true`. | Current Gate 9 Manifest V0.3 SHA `4afbf5b80ea7b174554e26a884f1e4dedb38a47021ba6ba36939c21a6618bb61`; Gate 7 handoff SHA `d76b4d0e176bff4cc49f2527afb394217f1df0abbe2b8c71f91abbde9f662818`; mapping SHA `8e70fa0b368d498f26d8205c80c385dd69e68cf88974a0e482a4b5a67242369d` |

The source forms retain ownership of their fields, validation, receivers, failure UI, value retention, retry, idempotency/duplicate prevention and distinct success-event semantics. Gate 8 must map to the real implementation it finds and must not replace these source-specific acknowledgement predicates with one generic HTTP-success rule.

### 3.1 Mandatory Direct fallbacks

Each of these eight cases renders Direct / invalid with no success content or intermediate success flash:

1. `request` is missing.
2. `request` has an unsupported value.
3. Query is allowlisted but marker is absent (query-only / markerless).
4. Query and marker types mismatch.
5. Marker is stale or outside the approved short lifetime.
6. Marker originates from a previous/new browser session.
7. The source response was unacknowledged, ambiguous or merely transport-successful.
8. Obsolete `?type=quote` or any other legacy `type` variant is supplied, whether or not an unrelated marker exists.

Extra query keys cannot establish, upgrade, renew or expose a success state. A same-session refresh during the valid marker lifetime preserves the matching success panel and emits no second conversion. Expiry, a new session, invalidation or mismatch returns Direct. Back navigation and page view alone do not renew eligibility.

### 3.2 Failure, retry and duplicate behavior

Validation, timeout, network, provider, receiver and ambiguous failures remain on the source form, preserve unaffected buyer-entered values, offer an accessible retry and create no marker, navigation or success event. Duplicate activation while submitting creates no second request, navigation, marker or event. The implementation must make the in-progress state and retry behavior perceivable and keyboard usable without leaking submitted values.

## 4. Data minimization, analytics and consent

The result page, URL, session marker, DOM, hydration/client payload, accessible names, metadata, logs exposed to the client and analytics payload must contain none of: name, email, phone, company, product or Grade, destination, application, document selection, sample requirements, quotation details, free text, request reference, receiver payload or provider response body.

Quote, Documents and Sample retain distinct source-flow success-event semantics. An event may occur only after that flow's real positive acknowledgement and only under the current shared analytics/consent contract. The result page view, refresh, back navigation, Direct state, validation error, network/provider/receiver failure and ambiguous response are not conversions. Event payloads contain no form or marker values. Gate 8 must document the actual existing event identity and consent path it consumes; this package does not name an event.

Advanced Consent remains shared: default denied before Google tags; full applicable measurement follows the visitor's choice; denied-state cookieless measurement may occur; `ad_personalization` stays denied. Remarketing/audiences, Turnstile and reCAPTCHA remain disabled. Cookie Settings uses the shared owner and supports current-state readback, save, reject/withdraw, focus containment, Escape/Close and trigger focus return. No page-private consent store or legal copy is permitted.

## 5. Route, search and scope contract

| Surface | Required result |
|---|---|
| Route / response | `/thank-you/` resolves in `site_scope=tio2-my` and returns HTTP 200 for all four states. A 200 response never proves receipt. |
| Title | `Thank You | TiO2 Malaysia` |
| Meta description | `View confirmation and next steps for a TiO2 Malaysia quotation, document or sample request, or choose the request you would like to make.` |
| Robots | `noindex, nofollow` in every state and query variant |
| Sitemap | `/thank-you/` and its query variants are excluded |
| Canonical | one clean `https://tio2malaysia.com/thank-you/`; query variants do not create canonicals and never canonicalize to a source form |
| Schema | no page-specific JSON-LD and no conversion, order, quotation, document-delivery/availability or sample-approval semantics; no breadcrumb or `BreadcrumbList` |
| Social / GEO | no request/state-specific dynamic metadata, acquisition target, answer block, FAQ target or new entity relationship |

Route resolution, query interpretation, cache identity/invalidation, menus, SEO metadata, source-form attribution/result transition, analytics and shared component/media lookup must preserve `site_scope=tio2-my`. No wrong-scope, generic/global, stale static or other-site fallback may render a plausible result. Cached content cannot carry one user's success state or marker into another request or session. Gate 8 must capture the actual scope boundaries and negative fixtures used; this package does not prescribe a cache technology.

## 6. Shared Chrome, visual and accessibility contract

1. Consume the approved shared Header, Footer, production Logo, fixed RFQ, legal utility and Consent owners. Do not ship page-private copies from the prototype.
2. Navigation key is `NONE`: zero accessible current items on each active desktop/mobile navigation surface and zero buyer-visible `CURRENT` labels. A closed mobile menu must not leave hidden navigation exposed to the accessibility tree.
3. Fixed `Request a Quote` remains visible and targets `/request-a-quote/`.
4. Footer renders copyright first, then Privacy Policy `/privacy-policy/`, Dasar Privasi (BM) `/ms/privacy-policy/`, Cookie Policy `/cookie-policy/`, Cookie Settings; no Terms link.
5. Preserve the approved TiO2 Malaysia Navy/Teal/Soft hierarchy, one centered result panel, icon-plus-text receipt cue in success states, exact action hierarchy, Header/Footer assembly and natural line wrapping of the longer Documents/Sample copy.
6. Verify 1440×900, 768×900 and 390×844 at DPR1. At each width: exactly one panel; no horizontal page overflow, clipped text/focus, overlap, hidden action, empty placeholder or detached Footer. All actions are keyboard reachable, focus-visible and at least 44×44 logical pixels at 390.
7. At 768 and 390, shared Menu open/close, initial focus, forward/reverse containment, background isolation, Escape/selection close, breakpoint cleanup and trigger focus return all work. Cookie Settings receives the same dialog/focus checks where applicable.
8. Verify keyboard-only, native 200% zoom, touch/real device or approved device proxy, current stable Chrome and at least one non-Chromium engine. Respect reduced motion and ensure success meaning is not conveyed by icon, color or animation alone.

## 7. Gate 8 implementation and evidence boundary

Gate 8 first inspects the actual WordPress/Next.js implementation project and records the selected content model, route, query/parser, cache boundary, session mechanism, source-form integration points, shared components and commands. Adaptation is allowed when the observable contract is unchanged. A needed material change to copy, route, state eligibility, receiver predicate, privacy, analytics, search behavior, shared owner or scope isolation must return to Project Control with impact and rollback; it cannot be silently implemented.

The Gate 4 prototype is `LOCAL_SIMULATION / PROTOTYPE_ONLY`. Its screenshots, simulated state changes, local marker, local navigation and locally assembled Header/Footer do not prove production receiver acknowledgement, session lifetime, analytics, privacy, cache isolation or deployed behavior.

Gate 8 must return a schema-valid `gate8_evidence_manifest.json` conforming to `docs/architecture/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json` SHA `cbd36d338412a5d311ae062a93982d9a5799e0cf3d459bcb72d41e4a155247ad`, under the handoff contract SHA `a74953971244d3b2bb43f6bc5d9b798f428d9590bab8bcb8664e1d4e9b4b31cb`. It must bind this package ID and each acceptance ID below to the actual repository, branch, implementation commit, evidence HEAD, build/runtime identity, target environment/URL, capture timestamps, artifact paths and hashes, executed command/results, open items and any runtime-hold condition. Screenshots alone, local prototype evidence, a developer assertion or HTTP 2xx alone is insufficient.

## 8. Stable Gate 9 acceptance contract

IDs are permanent for this package. A correction may add subchecks but must not renumber or reuse an ID. Every evidence item records environment/URL, repo/branch/commit/evidence HEAD, build/runtime identity, timestamp, browser/device/viewport where relevant, steps, expected and observed results, and artifact path/hash.

| ID | Source | Prerequisite / input | Expected observable result | Required actual evidence | Failure impact | Owner / stage |
|---|---|---|---|---|---|---|
| `CT-G9-01` | §§1,5; C §§1,6 | Registered `/thank-you/`; `tio2-my` fixture; wrong/missing-scope fixtures | Intended route returns 200; route/query/cache/menu/SEO/form/analytics/shared lookup remain scoped; no cross-scope or stale fallback | Response/head capture, scope query/readback, cache cold/warm/invalidation trace, positive and negative route fixtures | Blocks Gate 9 and release | CONV-THANK + platform / Gate 8–9 |
| `CT-G9-02` | §5; B/C | All four state inputs and query variants | Exact title/meta; all variants `noindex,nofollow`; base-only canonical; sitemap excluded; no result JSON-LD/BreadcrumbList/dynamic social state | Rendered head and response headers for state/negative matrix, sitemap output, raw DOM/JSON-LD inventory | Blocks indexing safety and Gate 9 | CONV-THANK + SEO / Gate 8–9 |
| `CT-G9-03` | §2; B | Four eligible outcomes | Exactly one panel; exact four-state cue/H1/body/actions/order/targets; Direct has no receipt cue | Normalized DOM text/heading/link inventory and full-page captures at 1440/768/390 for all four states | Blocks approved content/result integrity | CONV-THANK / Gate 8–9 |
| `CT-G9-04` | §§3,3.1; C §2 | Pre-render resolver; missing/unsupported/mismatched/stale/new-session/unacknowledged/legacy fixtures | State resolves before exposure; every one of eight negative classes renders Direct with no success flash; `request` is sole selector; extra query keys cannot grant success | Automated eight-case matrix plus video/trace proving no transient success content and DOM snapshots | Blocks false receipt claim | CONV-THANK / Gate 8–9 |
| `CT-G9-05` | §3 Quote row; RFQ current contracts | Production-equivalent RFQ receiver path and explicit accepted/queued response; 2xx-only negative fixture | Marker/navigation/success event occur only after explicit positive acknowledgement; HTTP 2xx alone stays on form | Sanitized request/response receipt, source UI/navigation trace, marker projection and 2xx-only negative result | Blocks Quote success and release | CONV-RFQ owner / Gate 8–9 |
| `CT-G9-06` | §3 Documents row; Documents current contracts | Current browser-direct Web3Forms binding; 200+JSON-success and each failure fixture | Only HTTP 200 plus parsed `success=true` creates marker/navigation/event; non-200/non-JSON/timeout/ambiguous stays on form | Sanitized provider/network response, integration/config identity, positive and negative UI/navigation traces | Blocks Documents success and release | CONV-DOC owner / Gate 8–9 |
| `CT-G9-07` | §3 Sample row; Sample current contracts | Verified Sample receiver; full positive pair and partial/negative response fixtures | Only `ok=true` plus `receipt_confirmed=true` creates marker/navigation/event; partial/negative result stays on form | Sanitized receiver receipt, integration identity, positive/partial/negative UI/navigation traces | Blocks Sample success and release | CONV-SAMPLE owner / Gate 8–9 |
| `CT-G9-08` | §§3,3.2; source form contracts | Validation, timeout, network, provider, receiver and ambiguous failures; retry; duplicate activation | Each failure retains unaffected values and supports accessible retry; no marker/navigation/event; duplicate activation yields one request/navigation/event maximum | UI/a11y trace, sanitized request counts, receiver log correlation and retry/duplicate matrix for all three forms | Blocks honest completion and release | Three source-form owners / Gate 8–9 |
| `CT-G9-09` | §§3,3.1; C §2 | Valid same-session marker; expiry; new session; back/direct navigation | Valid refresh preserves matching panel without new event; expiry/new session/back/direct do not renew and render Direct where eligibility is absent | Clock/session-controlled test log, storage/session evidence, page/event trace, screenshots of transitions | Blocks session integrity | CONV-THANK / Gate 8–9 |
| `CT-G9-10` | §4; C §5 | Sanitized test data containing sentinel PII/business values; analytics and client-output inspection | Sentinel values absent from URL, marker/storage, DOM, hydration payload, accessible names, metadata, client-visible logs and analytics; marker is allowlist-only | Automated sentinel scan across network/DOM/storage/payload/metadata/a11y/analytics plus redacted report | Blocks privacy and release | CONV-THANK + three form + analytics owners / Gate 8–9 |
| `CT-G9-11` | §4; shared Consent contract | Accept, reject/denied, withdraw and persisted-choice scenarios; three success and non-success flows | Distinct source-flow success event occurs once only after acknowledgement and per consent; page view/refresh/back/direct/failure is not conversion; consent defaults denied and `ad_personalization` denied | GTM/GA/network and data-layer trace with values sanitized, consent transition/storage log and event cardinality matrix | Blocks analytics/legal parity | Analytics + Shared Consent owners / Gate 8–9 |
| `CT-G9-12` | §6; shared Chrome/Logo/Legal contracts | Desktop/mobile Header/Footer, menu closed/open and Cookie Settings states | Shared owners consumed; nav current count zero; no visible CURRENT; fixed RFQ correct; approved Logos; Footer copyright-first then four utilities; no Terms; seven unique exits resolve correctly | Component/version identity, DOM/a11y snapshot, link-target/status matrix and desktop/mobile state captures | Blocks shared assembly and navigation | Global Chrome/Brand/Legal + destination owners / Gate 8–9 |
| `CT-G9-13` | §6; Gate 4 bundle | 1440×900, 768×900, 390×844 DPR1; long Documents/Sample content | Material visual parity; exact hierarchy/order; no overflow, clipping, overlap, hidden action or detached Footer; touch targets ≥44×44 | Full-page images, readable segments as needed, computed geometry/overflow/touch-target report | Blocks responsive quality | CONV-THANK / Gate 8–9 |
| `CT-G9-14` | §6; shared interaction contracts | Keyboard, pointer, 200% zoom, reduced-motion, Menu/Cookie focus sequences | Visible focus; all actions operable; Menu/Cookie initial focus, loop, background isolation, Escape/close/selection, breakpoint cleanup and focus return; meaning remains without color/icon/motion | Keyboard log/video, accessibility snapshots, focus order, 200% captures, reduced-motion and screen-reader result | Blocks accessibility | CONV-THANK + shared owners / Gate 8–9 |
| `CT-G9-15` | §§1.3,5–7 | Actual integrated build; current Chrome plus non-Chromium; real touch device or approved proxy | Shared assets load from production pipeline; no planning-only copies; four states and interactions remain equivalent across engines/device; no user-specific result leaks through cache | Network waterfall, asset/component identity, browser/device matrix, cache isolation and focused regression report | Blocks integration confidence | Platform + CONV-THANK / Gate 8–9 |
| `CT-G9-16` | §7; Gate8→9 contract/schema | Completed Gate 8 implementation and all evidence artifacts | Schema-valid evidence manifest binds this package and `CT-G9-01–16` to reproducible repo/build/runtime/evidence identities, hashes, commands and open items; runtime remains held until Gate 9 decision | JSON schema validation output, link/hash/ID coverage report, git/build/runtime identity and evidence inventory | Blocks Gate 9 admission | Gate 8 developer; Controller reception / Gate 8→9 |

## 9. Open dependency register

All dependencies remain `OPEN / FUTURE_STAGE_VERIFICATION / NOT_TESTED`; Gate 4 local simulation does not close them.

| ID | Owner / close stage | Required closure evidence | Gate 9 IDs / release effect |
|---|---|---|---|
| `THANK-DEP01` | Three source-form owners + Project Control / Gate 6–8 | Exact current receiver thresholds, shared-page transition and distinct event mapping accepted in implementation | `CT-G9-05–08`, `CT-G9-11`; blocks affected flow |
| `THANK-DEP02` | Three source-form Gate 8 owners / Gate 8–9 | Real positive response, failure/retry/value-retention and duplicate behavior for each form | `CT-G9-05–08`; blocks affected flow/release |
| `THANK-DEP03` | CONV-THANK / Gate 8–9 | Short same-session marker, eight fallbacks, refresh/expiry/new session and no success flash | `CT-G9-04`, `CT-G9-09`; blocks result integrity |
| `THANK-DEP04` | Legal/Consent + analytics owners / Gate 8–9 | Consent accept/deny/withdraw, distinct events, non-success suppression and zero PII/business values | `CT-G9-10–11`; blocks privacy/release |
| `THANK-DEP05` | CONV-THANK + SEO / Gate 8–9 | 200, all-state noindex/nofollow, sitemap exclusion, base canonical, no result Schema | `CT-G9-01–02`; blocks search safety |
| `THANK-DEP06` | Global Chrome/Brand/Legal + destination owners / Gate 8–9 | Shared assembly, copyright-first Footer, nine actions/seven targets, no current marker/Terms | `CT-G9-12`; blocks navigation/shared parity |
| `THANK-DEP07` | CONV-THANK + shared/platform / Gate 8–9 | Four states at three widths, real-device/accessibility and complete scope/cache isolation | `CT-G9-01`, `CT-G9-13–15`; blocks Gate 9/release |

If the shared result route cannot be delivered safely, the only approved rollback direction is each source form's last approved inline-success state under an authorized, versioned owner change. This package does not execute or approve that rollback.

## 10. Stop and return conditions

Stop and return to Project Control if any source identity is missing or mismatched; if an implementation requires different copy, route, query key, receiver predicate, marker data/lifetime semantics, analytics meaning, robots/canonical/Schema, shared owner, action target or scope behavior; if a source flow cannot prove its acknowledgement predicate; or if a dependency lacks an owner or deterministic evidence plan. Do not display the affected success state as a workaround.

Gate 8 self-check cannot close Gate 9. Gate 9 success cannot authorize merge, push, deployment, publication, DNS or indexing; those remain under later explicit control.
