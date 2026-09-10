# CONTACT-001 Gate 6 Development Handoff Package V0.2

## 0. Control and use

| Field | Value |
|---|---|
| Page / route | `CONTACT-001` / `/contact/` |
| Page type / language | Utility contact page / EN |
| Site scope | `tio2-my` |
| Package ID | `CONTACT-001-G6-HANDOFF-20260910-02` |
| Dispatch ID | `CONTACT-001-G6-EXEC-20260910-02` |
| Review request ID | `CONTACT-001-G6-IR-01` |
| Execution author | `08Contact 页面视觉策划`; thread `01a05138-e6a4-7122-b322-0f12aca58b86` |
| Date | 2026-09-10 |
| Gate 6 path | `FAST_PATH` |
| Status | `READY_FOR_REVIEW / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Required Gate 6 Findings at submission | `0` |
| Gate 8 | `NOT_STARTED / NOT_HANDED_OFF_BY_THIS_PACKAGE` |

This is the current proposed CONTACT-001 Gate 6 development handoff entry. It supersedes the unreviewed V0.1 draft as the candidate entry while preserving V0.1 unchanged as execution history. V0.2 corrects dispatch/reviewer identity, binds the current source hashes, makes the full required `site_scope` surface list explicit and records Controller synchronization notes. It preserves the approved content, structure, visual and machine-readable semantics and adds only Gate 8 responsibility mapping, dependency ownership and stable Gate 9 acceptance conditions. It is not an independent review, Gate 6 approval or closure, a current Manifest, a Gate 8 dispatch, implementation, deployment, publication or indexing action.

The approved Gate 4 HTML is a `PROTOTYPE_ONLY` reference implementation. Gate 8 may reuse, adapt or replace its code after inspecting the real WordPress/Next.js baseline, but must preserve the observable approved result. This package does not choose a post type, API, CMS field name, component path, cache implementation, form provider, endpoint, receiver mailbox or secret/configuration shape.

## 1. Gate 5 to Gate 6 admission and FAST_PATH record

| Required intake object | Resolved input | Gate 6 conclusion |
|---|---|---|
| Approved visual combination | `CONTACT-001-G4-BUNDLE-V0.2-FC1A64B7`; frozen source `FC1A64B7...E0879`; inventory `8EEDDA8C...CFF11` | Same page, route and approved bundle; accepted. |
| Effective independent review chain | `CONTACT-001_GATE4_INDEPENDENT_VISUAL_REVIEW_V0.1.md` plus `CONTACT-001_GATE4_TARGETED_RECHECK_V0.2.md` | `CONTACT-001-G4-IR-F01` is closed; final Required Findings `0`. |
| Project Control closure | `CONTACT-001_GATE4_PROJECT_CONTROL_CLOSURE_2026-09-10.md` | Gate 4 `APPROVED / CLOSED` under `G346-DELEGATED-CLOSURE-20260907`. |
| Gate 6 authorization | `CONTACT-001_GATE2_USER_APPROVAL_AND_GATE3_AUTHORIZATION_2026-09-10.md`; current Manifest V0.5 | Continuous Gate 3–6 planning authorization is valid; no explicit pause. |
| Open dependencies | Gate 5→6 handoff §4 and Gate 2 Contract C §13 | Accepted as future implementation/verification work; all receive owners, evidence and failure conditions in §§8–9 below. |
| Post-closure change | Gate 5→6 handoff §5 | `NONE` at intake. Current source/hash recomputation in §2 confirms no detected byte drift in the accepted Gate 4 source or inventory. |

`FAST_PATH` applies because the approved Gate 2 A/B/C, Gate 3 source, Gate 4 source, evidence inventory, review chain and closure remain resolvable and mutually consistent; no upstream Required Finding remains open; no contrary visual evidence or changed page identity was found. The inherited Gate 4 review covers complete 1440/768/390 visuals, Mobile Menu, focus, validation/long copy, submitting, failure, success, restricted contact details, retained-value visibility and shared Chrome assembly. Gate 6 did not re-render or re-run that unchanged visual scope.

The Gate 6 incremental review covered the interfaces that the upstream review did not prove: content-to-development mapping, processor/receiver decision boundary, production success and failure semantics, duplicate/retry behavior, privacy/retention parity, route/search/Schema output, shared-owner consumption, scope isolation, external request evidence, Gate 8 evidence return and executable Gate 9 conditions. No current cross-contract contradiction requiring upstream repair was found.

Limitations: no D16 repository was accessed; no production route, CMS, processor, receiver, mailbox, storage, retention, anti-spam service, external request, real device, assistive technology or deployed output was inspected or tested. Gate 4 form behavior remains local simulation. Package path/link/hash checks do not prove production semantics.

The current Contact-specific About/Contact Playbook remains absent. The approved Brief V0.2 records the page-specific Governance §10.8 exception; this package does not create a generic Playbook or treat its absence as a new blocker.

Two controller-owned metadata rows lag the authoritative entry: `00_PROJECT_STATUS.md` still describes CONTACT-001 at Gate 1, and Brief V0.2's single `Current Gate` row still says Gate 3 is authorized. The same Brief's lifecycle and detailed Gate rows, current Manifest V0.5, the Gate 5→6 handoff and this direct dispatch all identify Gate 4 as closed and Gate 6 as authorized/in progress. Under the project authority order, Manifest V0.5 and the direct dispatch control this execution. These are `CONTROLLER_SYNC_NOTE`, not page/content/visual Findings and not Gate 8 implementation requirements; Project Control should synchronize them when receiving Gate 6 without changing the approved page combination.

## 2. Exact source and method identities

All hashes below were recomputed from the current files on 2026-09-10. Relative paths are from `D:\23MySec`.

### 2.1 Page authority, approved content and visual chain

| Object | Path | Bytes | SHA-256 | Delivery identity |
|---|---|---:|---|---|
| Gate 6 admission Manifest | `pages/contact/CONTACT-001_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md` | 4471 | `24d40bc384e8c62c2b49ae7cec7da23cd1de17e130935ff792ea1054613b18cb` | `APPROVED_CONTRACT` for current stage/input selection |
| Gate 5→6 intake | `pages/contact/05_review/CONTACT-001_GATE5_TO_GATE6_HANDOFF_V0.1.md` | 2641 | `5fb27acb99567c0258723654043691ebd04722e72c4ef3cb0c5f0197ade8296d` | `APPROVED_CONTRACT` for accepted bundle/review/closure/open-dependency entry |
| Complete Contact Brief | `docs/page-briefs/CONTACT-001_CONTACT_BRIEF_V0.2.md` | 14868 | `255e425694326dee4a8d9d4e5b55f0eeda5e2c17d4e6825011e30264be27c618` | `APPROVED_CONTRACT` |
| Gate 2 A | `pages/contact/04_planning/CONTACT-001_GATE2_CONTENT_SKELETON_V0.1.md` | 6095 | `d1c1f11c8fb0c4933b2992226c863fb1464ea50c6d0b8f1b9d82cb3ddc9ed7a0` | `APPROVED_CONTRACT` |
| Gate 2 B; sole page-copy source | `pages/contact/04_planning/CONTACT-001_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` | 4883 | `bcab77db76fd17a2b6c87801a476ce39e285b43b4eb37af758e4f2b3fab3ea7e` | `APPROVED_CONTRACT`; sole editable buyer-visible page copy |
| Gate 2 C | `pages/contact/04_planning/CONTACT-001_GATE2_CONTENT_CONTRACT_V0.1.md` | 16265 | `b88bcf12d41257bbd8ea370cbf0e383e3df5d6ef5c90e315e328375c1a2ffa67` | `APPROVED_CONTRACT` for behavior/SEO/GEO/Schema/form |
| Gate 2 independent review | `pages/contact/05_review/CONTACT-001_GATE2_INDEPENDENT_BUYER_REVIEW_V0.1.md` | 7361 | `437c25029cf82bf8fb27705e4bf8436ca1af94693e773825c4e88e7f0f0d8293` | Review history; final Required Findings `0` |
| Gate 2 approval/continuous authorization | `pages/contact/00_governance/CONTACT-001_GATE2_USER_APPROVAL_AND_GATE3_AUTHORIZATION_2026-09-10.md` | 1675 | `e9a0d725c8f8a336e3b0bcd7d6c303a265a33843d37b11734e441365fa6ef79e` | `APPROVED_CONTRACT` |
| Gate 3 frozen structure | `pages/contact/04_planning/gate3-v0.1/CONTACT-001_GATE3_WIREFRAME_V0.1.html` | 31318 | `360bf45c2dddd431603c3ba8102dd67d5f98afef37857c6b294de322e5beaf18` | `PROTOTYPE_ONLY`; approved responsive structure reference |
| Gate 3 evidence inventory | `pages/contact/04_planning/gate3-v0.1/asset-inventory.json` | 6254 | `30fe97ea8559752db30a80d227bfdd50612e2cfce8173ac3b47732c26294d48c` | `APPROVED_CONTRACT` for 11 evidence identities |
| Gate 3 independent review | `pages/contact/05_review/CONTACT-001_GATE3_INDEPENDENT_REVIEW_V0.1.md` | 7147 | `de0909ddea030fa865f0c2328bbcf450dc81967b0b6567333cbf382c15f76466` | Effective review PASS |
| Gate 3 closure | `pages/contact/00_governance/CONTACT-001_GATE3_PROJECT_CONTROL_CLOSURE_2026-09-10.md` | 2968 | `e6afdb9d2b29dce46eba11ff41309104da1b1b5b20e3256365c41547d52ef47b` | `APPROVED / CLOSED` |
| Gate 4 complete visual | `pages/contact/04_planning/gate4-v0.2/CONTACT-001_GATE4_COMPLETE_VISUAL_V0.2.html` | 38039 | `fc1a64b7ef3320fe3f6a17f2c7d119e8cba65586c9f6d0fc9b8406e6ec8e0879` | `PROTOTYPE_ONLY`; approved visual/state reference |
| Gate 4 evidence inventory | `pages/contact/04_planning/gate4-v0.2/asset-inventory.json` | 12414 | `8eedda8c192f1f2b97c5ea338f1aa31dd8bac08bf75d55b4241f76a3d4bcff11` | `APPROVED_CONTRACT` for 14 evidence identities |
| Gate 4 initial independent review | `pages/contact/05_review/CONTACT-001_GATE4_INDEPENDENT_VISUAL_REVIEW_V0.1.md` | 7298 | `065f8a6fb409d410e532c7d59e8430738eb54c922b33fda1b36cda71372a76ce` | Review history; issued `CONTACT-001-G4-IR-F01` |
| Gate 4 targeted recheck | `pages/contact/05_review/CONTACT-001_GATE4_TARGETED_RECHECK_V0.2.md` | 3167 | `f51557f756634ade80d9f74ae148216cfa571a562804d723ebe445fb53f1860e` | Effective final review PASS; F01 closed |
| Gate 4 closure | `pages/contact/00_governance/CONTACT-001_GATE4_PROJECT_CONTROL_CLOSURE_2026-09-10.md` | 2599 | `ea715460b3f0e18dd72f6eb3b1fb5f4ef731c1d0eec0d4de79c79ed65d17e6ce` | `APPROVED / CLOSED` |

### 2.1a Exact Contact user-decision sources

| Decision | Path | Bytes | SHA-256 |
|---|---|---:|---|
| Site-wide role | `pages/contact/00_governance/CONTACT-001_SITE_WIDE_ROLE_USER_DECISION_2026-09-10.md` | 1370 | `42100df717300ea330e190c2235872ee0cabb6c9274c4d89302b1660ab009f86` |
| General Inquiries email | `pages/contact/00_governance/CONTACT-001_GENERAL_INQUIRIES_EMAIL_USER_DECISION_2026-09-10.md` | 894 | `497d48f11824066d1f37f069c24b6fce0c66e474d821709d6afea47e97aa6c92` |
| Manufacturing Site address | `pages/contact/00_governance/CONTACT-001_MANUFACTURING_SITE_ADDRESS_USER_DECISION_2026-09-10.md` | 675 | `a12b052cd1c828ee83b22d23f2ad2aa45997a7aaec907faa187ba3dfd1acbb48` |
| Excluded related-domain mailboxes | `pages/contact/00_governance/CONTACT-001_RELATED_DOMAIN_MAILBOX_USER_DECISION_2026-09-10.md` | 667 | `f62cd49bf1c058e80e6e8071e11b737b3984609c1ad41dce3b552a8a863a10c5` |
| No Phone/WhatsApp | `pages/contact/00_governance/CONTACT-001_PHONE_WHATSAPP_USER_DECISION_2026-09-10.md` | 557 | `7ca2801ace28b358098fe9f072fe0050a8131ab3f1f324e9edbbb60f46554683` |
| INDEX,FOLLOW / Gate 1 closure | `pages/contact/00_governance/CONTACT-001_INDEXING_USER_DECISION_AND_GATE1_CLOSURE_2026-09-10.md` | 1473 | `aa1ac56feeb3ecbfb2c0252bf393e21f8d14c1c4b0a9c2b1dc9c0b13026b36f2` |

### 2.2 Current Gate 6 method and handoff rules

| Object | Path | Bytes | SHA-256 |
|---|---|---:|---|
| Gate 6 baseline | `docs/architecture/GATE6_AGENT_SKILL_CURRENT_BASELINE_MANIFEST_V1.1.md` | 1913 | `b03647827a0969ea6c26915715ec6114fa31d0a7cf0a8629dd280625a7761cdf` |
| Gate 6 Agent V0.7 | `agents/gate6-review-delivery/agent.md` | 14614 | `b302783e22d16d72d238bec336d766dd37f6f3ef34927e868de1c5f1bfc4372c` |
| Consistency Skill V0.3 | `skills/page-contract-consistency-review/SKILL.md` | 8137 | `5f8d864dbdb0da5118df5898d5dbe12421455aa5f5b346ff479b26ed643203ea` |
| Delivery Skill V0.3 | `skills/development-delivery-specification/SKILL.md` | 10181 | `92f7c3e4989714d62c12a8b4ddcf916397f405a45fca1193b541f6f652088180` |
| Gate 6 execution/review contract | `docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.1.md` | 6627 | `d2aaffaadf6ba44f3472b4045a40c165b170aa4fdfdc4ee1d824fe66415e9f67` |
| Gate 5→6 acceptance contract | `docs/architecture/GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.0.md` | 5954 | `c408bdcd34b898edb5e95c76db8c126a203ebd1e85c530460e3615f49e0e80eb` |
| Gate 8→9 evidence contract | `docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md` | 4219 | `a74953971244d3b2bb43f6bc5d9b798f428d9590bab8bcb8664e1d4e9b4b31cb` |

The two Skill files contain a historical text link to Gate 6 contract V1.0. The current Index and Gate 6 baseline select V1.1, which is the contract used here. This is a navigation-text limitation, not a page-source change or a reason to reopen upstream visual review.

### 2.3 Shared and cross-page contracts

| Object | Path | SHA-256 | Use here |
|---|---|---|---|
| Page Registry V0.2 | `docs/architecture/PAGE_REGISTRY_V0.2.md` | `3da1956fe15ad5e15e078bc43fe291804c151bb45528c778f7177c40825a9552` | Page ID, `/contact/`, utility type |
| Keyword master | `research/keyword/11_page_keyword_master.csv` | `ef9b37ff9ba70af8bc1aa65740f99a2cf3b7df4b08484d72add801a5697270c7` | `NO_PRIMARY_KEYWORD`, navigation utility intent, exclusions |
| Global Chrome V0.5 | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | `cc236f47018a68771856fdbaf5553517f63959774e0e8819130e66e2b1049f18` | Shared Header/Menu/Footer, Contact→About mapping, no visible `CURRENT`, fixed RFQ |
| Footer legal addendum | `docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` | `c1f0011408ed1d87cff6d36c11f7e9812cc9a803431a3f7030c771faf41bf633` | Privacy EN/BM, Cookie Policy, Cookie Settings, no Terms |
| No-Terms decision | `docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md` | `9b01c3d086bcbed5cb3de2ed74ee997fc671fe21b055f458ac0b8301d99127d1` | No Terms page/link; consent/privacy scope |
| Visual Standard V1.0 | `brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md` | `75cf7bbd306a4b2bf2662414dfb28813b094b8552af8a7fe54231f3837e524ec` | Visual baseline |
| CTA accessibility addendum | `brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md` | `1f6cb1f9913bd78aed3cab30af56ce1eeabb0c46cb354f09f05e2d00a3897e9a` | Functional teal `#008078`, focus/contrast |
| Production Logo Manifest | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | `81b73a5262269f618e8fb0667c9345279449a1bcb71647422b6a1d3f8ebfe894` | Approved Header/Footer SVG keys and hashes |
| Shared Consent Brief | `docs/page-briefs/SHARED-CONSENT_ADVANCED_COOKIE_SETTINGS_BRIEF_V0.1.md` | `4cae93208e65df328235fbcf025a7f1d3b366e3944f6a22a4a10081f9b9ac893` | Cookie Settings owner, focus and `tio2-my` isolation |
| Current EN Privacy copy | `pages/legal-privacy/04_planning/LEGAL-PRIV-EN_GATE2_FULL_COPY_V0.2.md` | `896a4cbcee2cf5a9b19c9b65b62b7c247668a3c5c84da17e0e61cb0b8e556a37` | Current visible retention/provider disclosure used for parity review |
| Current Web3Forms three-form draft | `docs/architecture/WEB3FORMS_BROWSER_DIRECT_THREE_FORM_ARCHITECTURE_V1.0.md` | `8a600348eb7c2470b035d60b316331207dd99b1f9b4b59f615d9b6c9fa91c450` | Scope evidence only: explicitly RFQ/Sample/Documents, not Contact |
| Approved prerelease combined design | `docs/architecture/PRERELEASE_PUBLIC_PATHS_FORMS_AND_RESOURCE_ACTIVATION_DESIGN_V1.0.md` | `dc41330a22b42d9ec60b3cdff9b7b1e0b6ed2f48f83ae5c47ef79e0e356f52c3` | Confirms browser-direct active-flow decision covers three specialist forms and Contact remains outside that batch |
| Contact prerelease exception | `docs/architecture/SYS404_CONTACT_DEPENDENCY_PRERELEASE_EXCEPTION_V1.0.md` | `2bf6e57ff096729bb4d66618f0b67974760fb1f5e30322db48fc81966117fdcc` | `/contact/` incompleteness was only a prerelease-start exception; formal release remains blocked |

## 3. Page, content and ownership mapping for Gate 8

Gate 8 first inspects the real `D:\16Wordpress_nextjs` repository under its own instructions and records the existing page/content model, route resolver, shared components, form integration points, scope filters and test commands. It then maps those actual implementation choices to the following approved results.

| Order / surface | Approved source | Required production result | Ownership boundary |
|---|---|---|---|
| Shared Header | Global Chrome V0.5 | Approved shared Header only; Contact is absent from primary navigation; About is the current mapped item; no buyer-visible `CURRENT`; fixed RFQ points to `/request-a-quote/` | Global Chrome owner implements; CONTACT-001 only consumes |
| Breadcrumb | B `BC-01`; C §11.2 | `Home` → `/`; current text `Contact`; matching `BreadcrumbList` order | CONTACT-001 content/rendering |
| Hero | B `BC-02` | Exact eyebrow, one H1, lead and in-page `Send a General Inquiry` → `#general-inquiry`; action focuses the labelled form region without submitting | CONTACT-001 |
| General contact details | B `BC-03`; C §3 | Exact plain-text General Inquiries email, Operating Company and Manufacturing Site; email has no link/action | CONTACT-001; fact values remain approved-source controlled |
| Specialist routing | B `BC-04`; C §4 | Exact Quote/Documents/Sample cards, copy, order and targets; no prefill and no Contact fallback | CONTACT-001 renders; each destination page owns its workflow/readiness |
| General inquiry form intro and fields | B `BC-05–BC-13`; C §§5–7 | Exact six fields, labels, help, privacy/process notice, Privacy link and submit label; no extra buyer field or consent | CONTACT-001; Privacy page owns full policy |
| Conditional states | B `BC-14–BC-18`; C §§5–8; Gate 4 V0.2 | Only state-appropriate copy; validation, submitting, failure, success and retained-value presentation behave as §5 | CONTACT-001 plus approved processor/receiver integration |
| Shared Footer/Cookie Settings | Global Chrome, Footer legal addendum, Shared Consent | Approved shared Footer, production reverse Logo, legal utilities and functional Cookie Settings; no Terms | Shared owners implement; CONTACT-001 consumes |

WordPress must make the approved page content and machine semantics manageable within `site_scope=tio2-my` without turning this package into a second copy source. Next.js must render the exact approved public results. The implementation may normalize stored fields or compose shared content internally; it must preserve exact visible copy, approved fact labels, action targets, conditional omission, search metadata and Schema meaning. A material semantic change returns to Project Control.

## 4. Form data, validation and state contract

### 4.1 Exact six-field payload contract

| Field ID | Required control semantics | Validation after surrounding trim | Preservation |
|---|---|---|---|
| `full_name` | Single-line text; `autocomplete="name"`; required | 1–100 Unicode characters | Preserve internal whitespace/case; preserve on validation, pending and failure |
| `company` | Single-line text; `autocomplete="organization"`; required | 1–160 Unicode characters | Same |
| `business_email` | Email; `autocomplete="email"`; `inputmode="email"`; required | Syntactically valid; maximum 254 characters | Same |
| `country_region` | Single-line free text; `autocomplete="country-name"`; required | 1–100 Unicode characters | Same; no unapproved country-list dependency |
| `subject` | Single-line text; no forced autocomplete; required | 1–120 Unicode characters | Same |
| `message` | Multiline text; required | 1–2,000 Unicode characters | Same |

Client validation may improve feedback, but the approved production processing path must independently validate the same contract. Content above a limit is rejected with the exact BC-15 message and is never silently truncated. Required status is visible and programmatic. Labels and help remain visible; placeholders do not replace them.

The payload and public form exclude Product/Grade, quantity, packing, destination port, document types, sample details, file upload, payment data, residential address, phone/WhatsApp, marketing consent and specialist workflow selectors. Query parameters and upstream error context do not prefill fields, change the task, select a specialist route or inject buyer data.

### 4.2 Observable state machine

| State / trigger | Required result |
|---|---|
| Default | Six editable fields, exact BC-05–BC-13 copy and enabled submit when no request is pending. |
| Focus | Visible approved focus on every link, field and button; focus does not clear values, open unsolicited UI or move unexpectedly. |
| Validation failure | No external request. Show BC-14 and only applicable BC-15 messages; associate messages to fields, link summary entries to invalid fields, move focus to summary; retain all values. |
| Submitting | After valid explicit submit, change label to BC-16, expose pending state programmatically, keep all six values visible, prevent accidental edits and block concurrent/double-click submissions. The approved Gate 4 wrapped `Entered form values` readback makes every character reviewable, including 160-character Company and 120-character Subject at 390px. |
| Service failure / indeterminate response | For timeout, abort, network error, quota/rate limit, provider rejection, non-success, malformed or ambiguous response: show only BC-17, preserve all six values and make them editable/correctable, keep the wrapped retained-value readback, provide `Try again`, create no success state and claim no receipt. |
| Retry | Explicit manual action retries the same current payload after validation. No automatic retry. If the buyer edits a value, the current payload/readback updates; implementation may regenerate non-personal technical correlation data. |
| Success | Only after the approved processor returns its Contact-specific authenticated, unambiguous positive accepted response for this submission: show BC-18 inline, move focus to the success heading and clear/hide form values. A timer, client event, navigation, query parameter, locally fabricated flag, HTTP status alone or simulated response cannot trigger success. No shared Quote/Documents/Sample Thank You state is used. |
| Restricted contact detail | If a required approved fact is absent or differs in the scoped data source, omit the affected detail and its referring sentence together, leave no empty card/fallback/placeholder, and record a pre-release blocker. The approved default remains the exact visible Manufacturing Site. |

The retained-value review repeats the already approved field labels solely to identify the six readback values; it adds no field, instruction or business claim. The underlying five inputs remain single-line controls and Message remains the sole textarea.

## 5. Processor, receiver, anti-spam, duplicate and privacy decision boundary

### 5.1 Processor and receiver

No production Contact processor, endpoint or receiver is approved by the current Contact sources. `info@tio2malaysia.com` is approved visible plain text and an `Organization.email`; it is explicitly not the form receiver and cannot be used as a fallback action.

The approved Web3Forms browser-direct scope covers `CONV-RFQ`, `CONV-SAMPLE` and `CONV-DOC`. CONTACT-001 must not inherit their provider, access key, mailbox binding, payload mapping or success predicate by analogy. Before Gate 8 enables a live Contact submission, the operational owner and Project Control must provide a Contact-specific approved decision record identifying:

1. the selected processor/data path and responsible account/configuration owner;
2. the actual operational receiver and monitored routing owner, kept out of buyer-visible content and public evidence where private;
3. the provider-specific authenticated/unambiguous positive acceptance predicate and all failure/indeterminate predicates;
4. the six-field payload plus any minimum non-personal routing/security metadata;
5. international-transfer, subprocessors, anti-spam and retention/deletion effects; and
6. the corresponding Privacy Policy parity/change approval.

If Web3Forms is later selected for Contact, the decision must explicitly add Contact to scope. The existing three-form precedent treats only HTTP 200 plus parsed JSON `success=true` as provider acceptance, separates provider acknowledgement from inbox receipt and never treats 2xx alone as success; that precedent is guidance, not current Contact authorization. If another processor is selected, its positive predicate must be equally explicit and must identify acceptance/queueing for this submission rather than transport success alone.

Gate 8 may implement and test the route, content, local validation and UI state shell while this decision is open, but must not claim the form live, show a real success as proven, mark CONTACT-001 complete or release it. Missing/malformed production configuration cannot be masked by another scope, another mailbox, Contact email, a specialist form or a simulated success.

### 5.2 Anti-spam, duplicates and retry

Gate 8 chooses an implementation compatible with the later approved processor. It must not add buyer-visible claims, marketing consent, a new requested buyer field or a silent provider/data transfer. Any CAPTCHA/challenge or provider with new personal-data consequences requires the corresponding approved content/privacy change before release.

At minimum, the active UI blocks double-click and concurrent activation while one request is pending and yields exactly one outbound request for that pending operation. It never automatically retries an ambiguous response. A manual retry remains allowed and uses the preserved current values. Durable receiver-side idempotency is not claimed unless the selected receiver actually supports it and Gate 9 has correlated evidence. If it does not, the internal evidence must record that a manual retry after an ambiguous network failure can create a duplicate; buyer-visible copy remains the approved generic BC-17.

### 5.3 Retention and Privacy parity

The current Privacy copy describes other business inquiries and the IKHLAS retention rule of up to three years from the last substantive interaction or closure, but its named Web3Forms active-flow disclosure is specific to quotation and document-request submissions. It does not by itself approve Web3Forms or any other processor for Contact.

Before release, the Privacy owner must confirm or approve visible parity for the active Contact flow: the exact six fields, use for review/response, processor and material subprocessors, international processing, technical routing/security data, actual receiver category, anti-spam data, provider retention and the applicable IKHLAS retention/deletion rule. The runtime behavior and provider/account terms must match that approved copy. No marketing use or marketing consent is introduced.

## 6. Route, search, GEO and Schema contract

| Surface | Required production result |
|---|---|
| Route | `/contact/` resolves for `site_scope=tio2-my` with the CONTACT-001 identity and expected HTTP 200 in the release candidate. Redirects, wrong-scope content, another brand or a generic fallback fail. |
| Indexing | `index, follow`; this is content approval, not authorization to publish/index. Sitemap includes only the clean canonical after all release blockers close. |
| Keyword posture | `NO_PRIMARY_KEYWORD`; natural branded/contact navigation only. No supplier, manufacturer, price, grade, product, application, document-primary, sample-primary or quotation-primary optimization. |
| Title | `Contact TiO2 Malaysia | General Inquiries` |
| Meta description | `Contact TiO2 Malaysia with a general company or business inquiry, or use the dedicated pages to request a quote, product documents or a sample.` |
| Canonical | `https://tio2malaysia.com/contact/`; query variants do not create alternate canonicals. |
| Open Graph | Title `Contact TiO2 Malaysia`; description equals meta; URL equals canonical. |
| H1 | Exactly one: `Contact TiO2 Malaysia`. |
| GEO | Answers are extractable from BC-02–BC-18 only; no hidden GEO paragraph or stronger entity/action claim. |
| Schema graph | One `ContactPage` `#webpage`, one matching `BreadcrumbList`, and reference to the canonical shared Organization node. |
| Organization parity | Only when the shared node is rendered: exact `name`, `email`, and `location` Place named `Manufacturing Site` with the approved decomposed `PostalAddress`; decomposition reconstructs the exact visible address. |
| Prohibited Schema | No `legalName`, telephone, `ContactPoint`, opening hours, map, FAQ, Product, Offer, Service, `potentialAction`, social profile, excluded email, processor or receiver claim. |

## 7. Shared Chrome, dedicated routes, visuals and accessibility

1. Consume the actual shared Header, Mobile Menu, Footer, production Logo, fixed RFQ, legal utility and Cookie Settings owners. Do not ship page-private copies from the prototype.
2. Contact maps to About. Each active navigation surface has exactly one accessible `aria-current="page"` on About; the inactive responsive surface is outside the accessibility tree and keyboard order. Buyer-visible `CURRENT` count is zero.
3. Desktop Header is 84px. Mobile Header is 64px and ordered `Logo | RFQ | Menu`. Fixed RFQ remains visible on approved shared surfaces and targets `/request-a-quote/`; it is never hidden, disabled or redirected to Contact.
4. Footer uses approved primary/reverse production SVG roles and provides Privacy Policy `/privacy-policy/`, Dasar Privasi (BM) `/ms/privacy-policy/`, Cookie Policy `/cookie-policy/` and functional `Cookie Settings`; no Terms link.
5. The page's Quote, Documents, Sample and Privacy targets remain visible under complete-site design. A target that is missing, wrong, redirected to another scope or not release-ready creates a release blocker; it is not hidden, relabelled or replaced by Contact fallback.
6. Preserve the approved Gate 4 V0.2 Navy/Teal/Soft hierarchy, typography, cards, form, state panels, responsive reflow and complete Footer closure. Production assets use the shared owner, not copied prototype dependencies.
7. Verify 1440×900, 768×900 and 390×844 at DPR1 for full-page and applicable state parity. No horizontal overflow, clipped/truncated content, overlap, off-screen action, empty placeholder or detached Footer. At 390, interactive targets are at least 44×44 logical pixels.
8. Keyboard operation covers Hero anchor/focus, six fields, summary links, submit/retry, specialist/privacy links, Mobile Menu and Cookie Settings. Focus is visible; validation focus, success focus, Menu/Cookie initial focus, containment, background isolation, Escape/close and trigger return work. Required/error/success meaning is not color-only.
9. CONTACT-001 was excluded from the 2026-09-09 58-object prerelease scope reduction. Its Gate 5→6 handoff therefore still requires real-device and assistive-technology runtime verification. Gate 9 also records native 200% zoom, reduced motion, current stable Chromium and a non-Chromium engine. An approved device proxy may be accepted only by the responsible Gate 9 contract/decision; this package grants no new waiver.

## 8. Site-scope isolation and Gate 8 evidence return

Every content query, route resolution, cache key/invalidation path, form configuration/payload routing, media/logo resolution, menu/current-state mapping, metadata/SEO/Schema lookup, analytics configuration/event attribution and shared component lookup must require `site_scope=tio2-my`. A missing or wrong scope fails closed; it never reads or renders content, receiver configuration, contact data, assets, form behavior, metadata/Schema or analytics configuration from TIOVAR, a generic/global scope or another site. This does not require a new Contact analytics event; it constrains any analytics behavior that Gate 8 finds or implements under an independently approved analytics contract.

Gate 8 must return a schema-valid `gate8_evidence_manifest.json` under the Gate 8→9 contract. It binds this package ID and every `CONTACT-G9-*` ID to the actual repository, branch, baseline commit, implementation commit, evidence HEAD, clean/dirty state, build directory/ID, runtime URL/environment/start time, real content/config source, test command/results, evidence paths/hashes, open items and runtime-hold status. Every code or prototype item is classified as `APPROVED_CONTRACT`, `REFERENCE_IMPLEMENTATION` or `PROTOTYPE_ONLY`.

For an authorized live Contact submission test, external-request evidence must be sanitized yet independently useful: test identifier/time/environment/origin, exactly one outbound request for the action, destination host/path, method, response status/media type, parsed normalized outcome, non-personal correlation token, and a separately correlated operational receiver receipt. It excludes access keys, receiver mailbox address where private, cookies, raw provider response, buyer PII and full payload. A network interceptor/local mock proves UI classification only; it cannot prove provider acceptance or receiver receipt. No live send is permitted without the separate authorization applicable to external messaging/testing.

### 8.1 Gate 8 implementation sequence — specification only, not authorization

1. **Repository intake:** under a separately authorized Gate 8 task, read the D16 repository instructions and identify the actual `tio2-my` route, CMS/API, shared Chrome, form, metadata/Schema, analytics and media integration paths. Record those real paths in the Gate 8 receipt; do not infer them from this prototype.
2. **Scoped route and content:** implement `/contact/`, approved module order, exact Buyer Copy and conditional fact omission through the actual scoped content/render chain. Prove `CONTACT-G9-01–03` and `CONTACT-G9-10–12` with positive and wrong/missing-scope fixtures.
3. **Local form state machine:** implement the exact six-field validation, focus, submitting, failure, manual retry, success shell and retained-values review. Until a Contact-specific processor decision exists, success remains impossible in the production configuration. Prove local negative/state branches for `CONTACT-G9-03–06` without presenting them as live receiver evidence.
4. **Processor/privacy decision intake:** stop before enabling live submission unless Project Control provides the approved Contact-specific processor, receiver, positive predicate, anti-spam/data-flow and Privacy parity decision. Then integrate only that decision and prove `CONTACT-G9-06–09`; do not inherit the specialist-form Web3Forms scope by analogy.
5. **Shared-owner assembly:** consume the existing Header, Mobile Menu, Footer, production SVG and Consent owners; keep Contact absent from primary navigation, map About as current without visible `CURRENT`, and keep all dedicated routes visible. Prove `CONTACT-G9-13` without creating page-local forks.
6. **Responsive and accessibility evidence:** exercise the approved 1440/768/390 pages, Mobile Menu and every Gate 4 state, including current and 160/120 retained-value boundaries, then complete keyboard, zoom, reduced-motion, multi-engine, real-device and AT evidence for `CONTACT-G9-14–15`.
7. **Evidence return:** create the schema-valid `gate8_evidence_manifest.json`, bind every `CONTACT-G9-01–16` ID to repository/build/runtime/evidence identities, keep the candidate available, and return it to Controller for Gate 9. This step reports implementation evidence only and does not claim Gate 9, integration or release approval.

## 9. Stable Gate 9 acceptance contract

These IDs are permanent for package `CONTACT-001-G6-HANDOFF-20260910-02`. A correction may add subchecks but must not renumber or reuse an ID. Each evidence item states repo/branch/commit/evidence HEAD, build/runtime identity, environment/URL, timestamp, inputs/steps, expected and observed result, and artifact path/hash.

| ID | Source | Prerequisite / input | Expected observable result | Required actual evidence | Failure impact | Owner / stage |
|---|---|---|---|---|---|---|
| `CONTACT-G9-01` | Brief §§1,5; C §§1,8–9; user Gate 6 dispatch | `tio2-my` positive fixture; missing/wrong-scope fixtures; `/contact/` | Clean route resolves as CONTACT-001/200; query, route, cache, form, media, menu, metadata/Schema, analytics and shared lookup remain scoped; wrong/missing scope fails closed with no plausible cross-site fallback | Response/head capture, scoped CMS/API readback, cold/warm/invalidation trace, form/config and media lookup trace, metadata/Schema trace, analytics config/event attribution trace when analytics exists, positive/negative scope fixtures | Blocks Gate 9 and release | Platform + CONTACT-001 / Gate 8–9 |
| `CONTACT-G9-02` | B BC-01–BC-13; C §§2–4 | Default page | Exact buyer copy/order, one H1, exact three facts/labels, plain-text non-linked email, exact action labels/targets; no excluded mailbox, Phone/WhatsApp, commercial expansion or internal state | Normalized DOM text/heading/link inventory, source-data trace, full-page captures | Blocks content/fact integrity | CONTACT-001 content/render / Gate 8–9 |
| `CONTACT-G9-03` | C §§5–6.3 | Empty, invalid, over-limit and valid boundary values for six fields | Exact types/autocomplete/required/limits; surrounding trim evaluation; server repeats validation; exact BC-14/15; focus/association and all-value preservation; no request on invalid | Client/server validation matrix, DOM/a11y snapshots, request-count trace, boundary fixtures | Blocks form integrity | CONTACT-001 + processor integration / Gate 8–9 |
| `CONTACT-G9-04` | C §6.4; Gate 4 V0.2/F01 | Valid submit; double/concurrent activation; 390/768 long/boundary values | One pending operation/outbound request; BC-16; fields read-only; all six values fully reviewable in wrapped retained readback, including Company 160 and Subject 120; no overflow/truncation | Sanitized request count, state/a11y trace, value equality and geometry report, 390/768 captures | Blocks duplicate control and recovery confidence | CONTACT-001 / Gate 8–9 |
| `CONTACT-G9-05` | B BC-17; C §§6.5,8.5 | Timeout, abort, network, rate/quota, rejected, non-success, malformed and ambiguous response fixtures | BC-17 only; all six values preserved/editable and readback synchronized; manual retry works; no success/receipt/navigation; no automatic retry | Failure matrix, UI/focus/value trace, request counts and sanitized outcomes | Blocks truthful failure handling | CONTACT-001 + processor / Gate 8–9 |
| `CONTACT-G9-06` | B BC-18; C §6.6; §5 above | Contact-specific approved processor/receiver predicate; strict positive and transport-only/ambiguous negative fixtures | BC-18 appears only after authenticated/unambiguous positive acceptance for this submission; focus moves; values clear; HTTP status/timer/query/local flag alone never succeeds; no specialist Thank You route | Decision/config identity, sanitized positive/negative request/response traces, UI/focus trace and absence of alternate trigger | Blocks false receipt and release | Operational owner + Gate 8 integration + Gate 9 |
| `CONTACT-G9-07` | C §§7,13; §5 above | Approved Contact processor, operational receiver, one authorized controlled submission | Processor/data path and private receiver binding are current and monitored; provider acknowledgement is separately correlated to actual receiver receipt; no visible email fallback or exposed credential | Approved decision record, account/config attestation, sanitized provider result, correlated inbox/receiver evidence, ownership/monitoring record | Blocks live form and release | IKHLAS operations + Privacy owner + Gate 8–9 |
| `CONTACT-G9-08` | C §§6.4–6.5,7; §5.2 | Spam/abuse and duplicate/retry matrix | Approved anti-spam control functions without extra buyer claim/field/consent; pending dedup yields one request; no auto retry; durable idempotency claimed only if proven; limitations recorded | Provider/config identity, sanitized abuse fixtures/request counts, retry/correlation matrix, data-flow readback | Blocks form release | Security/processor owner + Gate 8–9 |
| `CONTACT-G9-09` | B BC-12; C §7; current Privacy V0.2 | Final processor, six-field payload, receiver, anti-spam and retention configuration | Visible notice and Privacy Policy accurately cover purpose, fields, recipients/processors/transfers, anti-spam data and actual retention/deletion; no marketing use/consent | Approved Privacy parity record, rendered policy capture, provider/account terms/config readback and retention/deletion evidence | Blocks privacy/legal parity and release | Privacy/Legal + IKHLAS operations / before Gate 9 close |
| `CONTACT-G9-10` | C §§8.1–8.7; Gate 4 restricted state | Approved-fact match plus missing/mismatch fixtures; long maximum values | Default exact facts render; mismatch omits affected card/sentence atomically with no fallback/placeholder and raises blocker; all long values/copy wrap without truncation; query cannot prefill/change task | Positive/negative content-source fixtures, DOM/visual output, overflow/placeholder/query-injection scan | Blocks fact integrity/release | CONTACT-001 + CMS/data owner / Gate 8–9 |
| `CONTACT-G9-11` | C §§9–10 | Base route and query variants; rendered head/sitemap | Exact title/meta/canonical/OG/H1, `index,follow`, clean sitemap eligibility only after blockers close, `NO_PRIMARY_KEYWORD`; no commercial/GEO-only hidden content | Raw rendered head/headers, sitemap candidate, text/keyword scan, query canonical matrix | Blocks search contract | SEO + CONTACT-001 / Gate 8–9 |
| `CONTACT-G9-12` | C §11; BC-01/03 | Rendered JSON-LD graph and visible page | Exact ContactPage/BreadcrumbList IDs/values and visible-source Organization name/email/location; exact address reconstruction; prohibited types/properties absent | Raw JSON-LD, schema validation, visible-vs-machine diff and prohibited-property scan | Blocks Schema/GEO integrity | SEO/Schema + CONTACT-001 / Gate 8–9 |
| `CONTACT-G9-13` | C §§1,4,8.3,12; shared contracts | Desktop/mobile Header/Footer, closed/open Menu, Cookie Settings; all destination targets | Shared owner components/assets consumed; Contact→About; active accessible current cardinality 1 and visible `CURRENT` 0; fixed RFQ; approved Footer utilities/no Terms; Quote/Documents/Sample/Privacy targets resolve and keep their ownership | Component/asset identity, DOM/a11y snapshot, link/status/scope matrix, Menu/Cookie keyboard trace | Blocks shared assembly/navigation/release | Global Chrome/Brand/Legal/Consent + destination owners / Gate 8–9 |
| `CONTACT-G9-14` | Gate 4 V0.2/inventory; §7 | 1440×900, 768×900, 390×844 DPR1; default and all applicable form/restricted states | Material visual parity, responsive card/form reflow, exact state differentiation and Footer closure; no overflow/clipping/overlap/off-screen action; ≥44px targets at 390 | Full-page/state captures, readable segments, computed geometry/overflow/touch-target report | Blocks visual/responsive quality | CONTACT-001 + shared owners / Gate 8–9 |
| `CONTACT-G9-15` | C §§5–8,12; Gate 5→6 dependency | Keyboard, native 200% zoom, reduced motion, stable Chromium/non-Chromium, real device and screen-reader/AT | Labels, required/error/summary semantics, focus order/movement/return, Menu/Cookie containment, controls and state announcements work; content remains readable/operable | Keyboard log/video, a11y tree and Axe results, zoom captures, reduced-motion result, named browser/device/AT report | Blocks accessibility Gate 9/release | CONTACT-001 + shared owners / Gate 8–9 |
| `CONTACT-G9-16` | Gate 8→9 contract | Completed implementation and evidence set | Schema-valid evidence manifest binds package `CONTACT-001-G6-HANDOFF-20260910-02` and `CONTACT-G9-01–16` to reproducible repo/build/runtime/evidence identities, hashes, commands, open items and held runtime | Validator/preflight output, hash/link/ID coverage report, git/build/runtime identity and evidence inventory | Blocks Gate 9 admission | Gate 8 developer + Controller reception |

## 10. Open dependency register

All entries are `OPEN / NOT_IMPLEMENTED_OR_NOT_VERIFIED` at Gate 6 execution. They are acceptable post-Gate-6 dependencies because their requirement, owner, evidence, close stage and blocking condition are explicit.

| Dependency ID | Requirement and current evidence | Accountable owner / execution owner | Close stage and evidence | Failure/blocking condition | Acceptance IDs |
|---|---|---|---|---|---|
| `CONTACT-DEP01` | `/contact/` currently remained outside the 58-object prerelease; no current production-equivalent route proof | Platform owner / Gate 8 | Gate 8–9 route, scope and cache evidence | Blocks Gate 9 and release if missing, non-200, wrong identity/scope or fallback | `CONTACT-G9-01` |
| `CONTACT-DEP02` | Approved page content/facts exist; no production CMS/API/render chain inspected | CONTACT-001 content owner / Gate 8 | Gate 8–9 source-to-DOM/head/Schema evidence | Blocks if copy/facts/field contract drift or other-scope fallback occurs | `CONTACT-G9-02–03`, `10–12` |
| `CONTACT-DEP03` | Processor and operational receiver are deliberately unresolved; visible email is not receiver | IKHLAS operational owner + Project Control / Gate 8 after decision | Approved Contact-specific decision, private binding/ownership evidence, strict predicate test | Blocks live form, success claim, Gate 9 pass and release while unresolved | `CONTACT-G9-06–07` |
| `CONTACT-DEP04` | Gate 2 defines success/failure semantics; no production response contract or receiver evidence | Operational owner / Gate 8 | Positive/negative response matrix plus actual provider/receiver correlation | Blocks success and release if 2xx/timer/mock/ambiguous response can succeed or receipt is unproven | `CONTACT-G9-05–07` |
| `CONTACT-DEP05` | Pending duplicate block is approved; production anti-spam, durable dedup and retry implementation untested | Security/processor owner / Gate 8 | Abuse, double/concurrent, manual retry and request-count evidence | Blocks form release if extra claim/field/privacy effect is unapproved, duplicate guard fails or auto retry exists | `CONTACT-G9-04–05`, `08` |
| `CONTACT-DEP06` | Current Privacy policy does not approve a Contact-specific Web3Forms/provider path; retention/runtime parity unverified | Privacy/Legal + IKHLAS operations / Gate 8 supplies facts | Approved policy parity plus rendered/runtime/provider retention evidence | Blocks live form and release if provider/fields/recipients/transfers/retention differ or are undisclosed | `CONTACT-G9-09` |
| `CONTACT-DEP07` | Quote/Documents/Sample/Privacy/fixed RFQ routes and shared legal controls require integrated readiness | Destination-page + Global Chrome/Legal/Consent owners / Gate 8 | Link/status/scope matrix and functional Cookie Settings evidence | Blocks release; actions remain visible and are not replaced/hidden | `CONTACT-G9-13` |
| `CONTACT-DEP08` | Gate 4 proves local 1440/768/390 appearance; production assets/shared assembly not inspected | CONTACT-001 + Global Chrome/Brand owners / Gate 8 | Integrated three-width/state/component/asset evidence | Blocks Gate 9/release on material visual/state/shared-owner mismatch | `CONTACT-G9-13–14` |
| `CONTACT-DEP09` | Gate 4 local keyboard checks exist; real device, AT, 200% and production runtime remain unverified | CONTACT-001 + shared owners / Gate 8 evidence, Gate 9 verification | Named browser/device/AT/zoom/keyboard evidence | Blocks Gate 9/release unless a later applicable approved waiver changes scope | `CONTACT-G9-15` |
| `CONTACT-DEP10` | No external Contact request was made in Gate 6 | IKHLAS operational owner authorizes; Gate 8 executes; Gate 9 verifies | One authorized positive provider request and separately correlated receiver receipt, plus negative/sanitized traces | Blocks live form/release; mock or local simulation cannot close | `CONTACT-G9-06–08` |
| `CONTACT-DEP11` | Search/Schema values are approved but not implemented/observed | SEO/Schema + Gate 8 | Rendered head, sitemap and JSON-LD parity evidence | Blocks Gate 9/indexing readiness on any mismatch or hidden claim | `CONTACT-G9-11–12` |
| `CONTACT-DEP12` | Gate 8 evidence Manifest does not yet exist | Gate 8 developer / Controller reception | Schema validation and preflight against held runtime | Blocks Gate 9 admission | `CONTACT-G9-16` |

## 11. Gate 8 return and stop conditions

Gate 8 must stop and return to Project Control if the current page/route/keyword/fact/Schema/shared-owner identities cannot be preserved; if live form work lacks a Contact-specific approved processor/receiver/privacy decision; if implementation needs different fields, limits, copy, action targets, success semantics, retention, anti-spam buyer experience or shared ownership; if another scope is required as fallback; or if required evidence would expose credentials or personal data.

Gate 8 must not manufacture success, substitute `info@tio2malaysia.com` as the receiver, inherit the specialist three-form Web3Forms configuration, route Contact to `/thank-you/`, hide required complete-site actions, or treat static screenshots/local mocks/HTTP 2xx as actual receipt evidence.

After implementation, Gate 8 returns the schema-valid evidence Manifest and human-readable receipt without claiming Gate 9 PASS. Gate 9 remains independent and read-only. Gate 6 closure, Gate 8 completion or Gate 9 approval does not authorize merge, push, deployment, publication, DNS or indexing; Gate 10 remains separately controlled.
