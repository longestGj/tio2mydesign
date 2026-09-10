# APP-INK Gate 3 Independent Project Control Review V0.1

Review ID: `APP-INK-G3-PCR-01`. Date: 2026-09-07. Reviewer: `/root/printing_inks_gate3_review`, independent of the execution author. Status: **`FINDINGS_REQUIRE_REVISION`**.

This is an independent Gate 3 structure review of the exact submitted V0.1 combination. It neither closes Gate 3 nor changes the approved Gate 2 baseline, facts, shared contracts or next-stage authorization. The source and submitted evidence were read only. Three required Findings below remain open; no content loss, incorrect Grade relation, clipping or failed menu/Cookie operation was found in the tested source.

## 1. Authority and exact review object

Read directly: root AGENTS, PROJECT_CONTEXT, Index; Gate Workflow V3.2; PAGE_GATE_1_4_STANDARD V2.2 common rules and §4.3; governance details §§2,6–9,10.5,11–13,15–17; standing Gate 3/4/6 closure authority V1.0; Gate 3 baseline Manifest V1.6, execution Agent V0.4, responsive-wireframe-design V0.3, layout-interaction-verification V0.4 and its Gate 3/core-risk references, preflight reference, and handoff V0.3. Page inputs were the current approved Manifest V0.3, complete Brief, A/B/C below, Buyer rereview, applicable Application Playbook, Registry/keyword ownership, PRODUCT V0.3 matrix/audit, current brand/CTA/Logo/Global Chrome/legal/Consent owner entries, submitted task card/input binding/design/preflight/freeze/inventory/formal and diagnostic observations/self-check/handoff draft. Historical Playbook M-2377 and route restrictions were interpreted through current Brief/PRODUCT V0.3 and complete-site governance, without restoring old Holds.

Paths below are relative to `D:/23MySec/` unless absolute. All SHA-256 values were recalculated from actual bytes.

| Object | Path / version | Bytes | SHA-256 |
|---|---|---:|---|
| Approved page Manifest | `pages/applications/printing-inks/APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.3.md` | 8,683 | `e05e8a1f848a147862b7cf20e3a5a0a439f24c802a701ffb59250c12fec75427` |
| A | `pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_SKELETON_V0.1.md` | 5,228 | `bbb3a2bbd55d0140c4cfbef2c7e929e5f7f5c47478671b50aeff72f33e5554a6` |
| B, sole visible-copy source | `pages/applications/printing-inks/04_planning/APP-INK_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | 11,781 | `b5a92976f526fcfee74fdf088ec9ea3ef21456e5ba66965f79c50ec4dd5c938d` |
| C | `pages/applications/printing-inks/04_planning/APP-INK_GATE2_CONTENT_CONTRACT_V0.2.md` | 8,927 | `11883e118e017e7886d91a3a6400150fcc92e3972b56847aafecc9250e960dc3` |
| Frozen HTML | `pages/applications/printing-inks/04_planning/gate3-v0.1/APP-INK_GATE3_RESPONSIVE_WIREFRAME_V0.1.html` | 30,094 | `8d67c9d3ec4b971c9ff5a91a320a6901df385d46ab4ab26812ad0880322492ef` |
| Freeze | same directory, `APP-INK_GATE3_FREEZE_RECORD_V0.1.json` | 7,027 | `0e5d504cfe28fc170efeb9958a72f7606ed7fedb695b35497361ba3308750c20` |
| Preflight | same directory, `APP-INK_GATE3_PREFLIGHT_RECORD_V0.1.json` | 8,626 | `3a42f8e5bfeee3b3b7807f44976c0c35487fb2cbe27870f81afb24d43bbc8615` |
| Inventory | same directory, `APP-INK_GATE3_ASSET_INVENTORY_V0.1.json` | 7,504 | `bb1c8a6872e412f77e142c9ff18dfd40ae8ca45fc9ca20ca60a63352000d6cfc` |
| Shared consumer | `docs/architecture/gate3-shared-consumer-v0.2/consumer-package.json` | 2,409 | `1148a05fa12fdbf038f456a1cf40d3c1cf3f1c967fae1384616342faaa2fdf50` |

Freeze timestamp is `2026-09-07T07:41:59.806Z`; preflight timestamp is `2026-09-07T07:41:53.452Z`. The record declares no formal PNG existed at freeze. The reviewer verified current identities and current rendering, not an independent historical filesystem capture of those two instants.

Formal PNGs are under the frozen-source directory's `approval_core/`, filename prefix `APP-INK_GATE3_`, suffix `_V0.1.png`, DPR 1:

| Suffix | Physical dimensions | Bytes | SHA-256 |
|---|---|---:|---|
| 1440_FULL | 1440 × 7920 | 1,081,372 | `b7cf1408e33c6cc7dde2a2cff879401598684ac02e2415eeb1ac699ce2a2766b` |
| 768_FULL | 768 × 8382 | 1,009,070 | `c620cec20393d3c336975c9f5963444513a177b2501b19a8aa30ce2d7f781196` |
| 390_FULL | 390 × 12803 | 1,040,190 | `77e47920c419c6fc2a5e0d65360b7be7635e3724f3e903d11a23af341c154043` |
| 768_MENU | 768 × 1024 | 72,097 | `7d14c5fcbc683ae9fd3201efa1bfdb2af0824141f5a5e91bbfbf6ae38385b45e` |
| 390_MENU | 390 × 844 | 40,098 | `d34c3845837cfd1b97d7429a2e4b87f4f93ba4831280ebe40bb3ca15615df245` |
| 390_GRADES_ANCHOR | 390 × 844 | 32,998 | `446401bdabd988ccf0e0a3157daacb0236ddc9ed771e8310baa4aba8e70f1d72` |

## 2. Independent verification and coverage

The independently authored `APP-INK_GATE3_INDEPENDENT_VERIFY_V0.1.cjs` reads the approved B directly, reconstructs its expected Markdown rendering, checks text-node sequence and every visible-copy link label/target against the frozen DOM, walks identity records, compares exact shared renderer outputs, measures geometry and actually operates the candidate. It does not run the executor's write/render scripts or overwrite any submitted file.

Evidence: `05_review/APP-INK_GATE3_INDEPENDENT_OBSERVATIONS_V0.1.json` (relative to this page), SHA-256 `ec2c39c59636107e7e141802ebe374351215710655a76653c08c68ca193b5fec`. Browser: Microsoft Edge `152.0.4191.66`, Playwright, local file, logical viewports 1440×1000, 768×1024, 390×844, DPR 1.

- **Identity / SOURCE_INSPECTION:** 40 distinct input, source, dependency, report and formal-asset identities matched bytes and hash; zero differences. The canonical preflight checker independently returned `PASS_FOR_FORMAL_RENDER`, but that checker cannot establish functional color or inherited interaction coverage; see F01/F03.
- **Content / ACTUAL_RUNTIME + SOURCE_INSPECTION:** normalized text sequence and every B link label/href match at all three widths. A-approved breadcrumb and eyebrow are correctly additional. Eleven modules, one H1/ten H2, four document records with three fields, four Grade rows in approved order, three request actions and six source records/links are present. No new process classification, performance/availability/ranking or hidden Schema claim was added. M-2377 remains a neutral Printing Inks relationship; M-996/M-2196 are absent from this set. No internal governance labels or private article comments render.
- **Geometry / ACTUAL_RUNTIME:** scroll widths are exactly 1440/768/390, complete heights 7920/8382/12803; no measured undersized visible control, horizontal overflow or clipped body element. Header heights are 84/64/64. Body font is 17/16/16px. Expected hidden semantic table headings were excluded from clipping failures, while the actual narrow repeated labels and field/value relationships were visually checked.
- **Image source match:** independent in-memory full-page captures have exactly the same SHA-256 as all three formal full PNGs. No duplicate full-page raster set was saved.
- **STATIC_VISUAL:** all six formal PNGs opened. All 24 existing readable diagnostic segments (1440: 01–06; 768: 01–06; 390: 01–12) were opened sequentially through Footer with overlaps. Their diagnostic full-page sources match the corresponding formal PNGs. Document records, Grade links, all request context and the six source notes remain readable and associated. Long-page height reflects actual copy. No screenshot-only claim is used as proof of interaction.
- **Shared consumption / SOURCE_INSPECTION:** header, footer, dialog, shared style and behavior all exactly embed current neutral Consumer V0.2 renderer output for `APP-000` and approved production Logo paths. Current Applications marker, fixed RFQ, legal utilities and no-Terms behavior agree with owner contracts. Global body/a/:root page rules exist; therefore hash identity alone is not a no-impact proof.
- **Shared behavior / ACTUAL_RUNTIME:** independently tested 768/390 menu initial Home focus, Close/last-RFQ forward and backward Tab wrapping, Escape, selected Applications exit, main/Footer/Logo/RFQ inert isolation, scroll restoration and cross-desktop-breakpoint closure. Independently tested all three widths' Cookie opening/Close focus, two-control forward/backward wrapping, Escape and Close-button return to Cookie Settings. These passed. Link selection was intercepted locally to avoid leaving the candidate; this proves menu handler behavior, not the production destination.
- **Page actions / ACTUAL_RUNTIME:** both Hero anchors were clicked at all three widths; correct hashes and target tops about 20px were observed. Grade/request/source targets match B/C. No form or production request was submitted.

The most demanding relationships are the document matrix at 768/390, and long request/source text at 390. They pass the tested structural checks. Form submission, FAQ, filters, selection and media states are not applicable because none exists in the approved page. Native 200% zoom, real devices/assistive technology, production receiving/routing/CMS/Schema/indexing and live Cookie inventory are not represented as passed.

## 3. Required Findings

### APP-INK-G3-PCR-F01 — Body focus indicator violates the approved functional-color contract

Severity: `IMPORTANT / REQUIRED_BEFORE_GATE3_PASS`. Owner: APP-INK Gate 3 execution. Location: frozen HTML page-style block around lines 27–33; breadcrumb/other body links, all three widths. Evidence: independent observations `runtime[].bodyFocus`, plus `APP-INK_GATE3_F01_FOCUS_390_V0.1.png` in this review directory.

Expected: CTA Accessibility Addendum V1.0 requires focus indicators on white/light surfaces to use `#008078`; standard §4.3 explicitly retains approved brand/shared-contract failures as required corrections rather than visual preferences. Observed: shared surfaces define focus styles, but the body does not. Keyboard Tab to breadcrumb Applications produces `:focus-visible=true`, computed `outline: rgb(16, 16, 16) auto 1px` at 1440/768/390. The indicator is visible, so this is not a claim of absent focus; it is a concrete approved functional-color deviation which the submitted `functionalColors=PASS` missed.

Acceptance: implement the existing approved body focus treatment without changing copy/structure/shared owner; verify actual keyboard focus on breadcrumb, Hero actions, Grade, request and source links across three widths for approved color, visibility and no clipping. Because the HTML changes, create a new frozen identity after corrected preflight and regenerate all affected formal evidence; retain this old candidate/history.

### APP-INK-G3-PCR-F02 — Handoff structural locks contradict B and the rendered source

Severity: `IMPORTANT / REQUIRED_BEFORE_GATE3_PASS`. Owner: APP-INK execution/handoff author. Location: `APP-INK_GATE3_TO_GATE4_HANDOFF_DRAFT_V0.1.md` lines 30,33,34,76.

Observed versus required: INK-02 says “Intro, nine context items, two caution paragraphs”; approved B has an intro and **one** following paragraph. INK-05 says “Three paragraphs”; B/frozen source have **two**. INK-06 says “Four-record matrix plus two explanatory paragraphs”; B/source have **one** explanatory paragraph. The risk row says “Four-field document relationships”; the matrix has **four records and three fields**. This is not a visible-copy loss: the candidate is correct. The conflicting items are presented as structural constraints and can cause Gate 4 to invent or split material to satisfy the handoff.

Acceptance: correct the handoff to reference B's real paragraph/record/field relationships (or remove unnecessary paragraph-count locks), preserving exact B and module order. Give unambiguous resolvable links to current Manifest/A/B/C and the source/inventory/freeze rather than bare ambiguous filenames. At final closure supply the authorized next-stage entry separately; the draft must not itself claim Gate approval.

### APP-INK-G3-PCR-F03 — Shared evidence inheritance and carry-forward scope are overstated/underspecified

Severity: `IMPORTANT / REQUIRED_BEFORE_GATE3_PASS`. Owner: APP-INK execution for records; Controller for final handoff dependencies. Locations: preflight `sharedInheritance.inheritedCoverage`/`gap` (lines 206–209), design report line 29, corresponding self-check and handoff §C/§F.

The original shared report and its actual script cover open/selection/Escape/breakpoint behavior but contain **no Tab or Shift+Tab loop tests**. The submission calls this “Complete shared menu/cookie keyboard” coverage. Source identity does not justify this expansion. The current reviewer independently ran those loops successfully; that closes the behavioral uncertainty in this reviewed source, but does not make the execution's inherited-evidence assertion accurate. Similarly, page global body/a/:root CSS exists, so “no shared-component variance” needs an impact argument and measured current-page checks, not the package hash alone.

The handoff also groups routing, receiving, CMS, Cookie inventory, canonical/indexing, Schema, zoom/device/AT under “Gate 6/8/9 ... as applicable” without a specific owner/acceptance disposition. Standing closure §2 requires retained dependencies to have an owner and acceptance condition. These future implementations do not block Gate 3 merely because they are unfinished; the missing handoff ownership/acceptance definition must be corrected before closure.

Acceptance: in successor records explicitly distinguish original shared coverage, current-page actual checks and this independent review. On the new F01 source, include current-page full affected shared checks (or precise applicable inheritance) before the new freeze. For each retained dependency group state owner, receiving phase and measurable acceptance: architecture/route owner for provisional canonical eligibility; Grade/Conversion owners for eligible routes and C-compatible receiving behavior; Global Chrome/legal owner for utilities/Cookie mode; Gate 8 for `tio2-my` content/SEO/media/menu/cache/form integration; Gate 9 for specified actual-runtime/device/AT checks. Link approved contracts rather than inventing new behavior or requiring those future implementations now.

## 4. Disposition

`FINDINGS_REQUIRE_REVISION`: F01–F03 are open. Corrected body focus requires a new HTML freeze; handoff/evidence corrections must bind that exact successor. Re-review should target these Findings and affected three-width/shared/body-focus regressions, with source/image identities recomputed. The existing exact content, Grade/source relations and structural work need no rewrite.

Mobile Hero separator treatment, inline-code typography, source punctuation line starts and fine spacing are Gate 4 visual decisions. They are not added as Gate 3 blockers. Final visual and later production responsibilities retain their original authorization boundaries. No Gate closure, Manifest promotion, Status/Index edit, other-page/shared-contract edit or external development action was performed by this review.
