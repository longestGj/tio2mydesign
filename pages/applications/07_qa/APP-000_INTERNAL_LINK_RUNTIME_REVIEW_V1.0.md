# APP-000 Internal Link Runtime Review V1.0

Date: 2026-09-08. Reviewer: `/root/app000_internal_link_planning`. Mode: `RUNTIME_REVIEW / INDEPENDENT / READ_ONLY`. Review scope: APP-000 runtime internal links, shared-link consumption and the bounded nine-page/Process regression set. Page: `APP-000`, EN, `/applications/`, `site_scope=tio2-my`.

Result: **`CHANGES_REQUIRED`**. The requested runtime-link scope was completed after all destinations and consumer groups were inspected; the review did not stop at the first problem. APP-000 requires three Gate 8 implementation repairs. Separately, the nine existing consumers and the Sulfate Process route remain integration dependencies. No real form submission, D16 edit, approved-contract edit, Manifest/Status/Index update, Gate 9 closure, merge, deployment or publication action was performed.

## 1. Fixed candidate and independent preflight

| Object | Reviewed identity / result |
|---|---|
| D16 worktree / branch | `D:/16Wordpress_nextjs/.worktrees/app000-gate8` / `codex/app000-gate8` |
| Baseline | `cfe9ef37ca3a8d9c6b05365ca6b09bcd22baf670` |
| Implementation commit | `f0285f288e256ce0c48205931dd8edf4b802b285` |
| Evidence HEAD | `ce3f4c5c21033e56472ec53586173279fb78c415`; clean; implementation is an ancestor |
| Build | `.next-app000-f0285f2` / `jf9b1VFzbgKGSQMVOMMbU` |
| Runtime | `http://127.0.0.1:4391` |
| Gate 8 evidence Manifest | `docs/architecture/APP000_GATE8_EVIDENCE_MANIFEST_V1.0.json`; SHA-256 `F13516594FFEC9062BDE071B10CBE3BECB7FBB88490B5DC69D937E13BA36615B` |
| Independent Manifest validation | `PASS`; `APP-000_GATE9_INDEPENDENT_MANIFEST_VALIDATION_V1.0.json`; SHA-256 `BF9128888633B73DBD06FBEAFF89844A14DF34241C24D91B7FA5C8DE15363508` |
| Independent runtime preflight | `PASS`; two rounds / six requests; `APP-000_GATE9_INDEPENDENT_PREFLIGHT_V1.0.json`; SHA-256 `D79EC21BB583F3A5824349E1F17A232C24D8E921B3C76EA884D58E6452A16D3C` |
| Approved Gate 6 package | `APP-000_GATE6_HANDOFF_PACKAGE_V1.1.md`; `APP-000-G6-HANDOFF-02`; SHA-256 `679921DFF649EB19197364C998B9512B711C3A32EE00C64798AD70CE0C05E84C` |

The review re-read the current root instructions and project context, Gate workflow, Gate 9 Agent V0.5, Runtime Implementation Verification Skill V0.5, Gate 8→9 machine contract, APP-000 Manifest V1.6, Gate 6 package V1.1 and the earlier planning review/recheck. Developer evidence was supporting input only; runtime responses, browser accessibility output and interactions were independently collected.

## 2. Durable evidence

| Evidence | Coverage | SHA-256 |
|---|---|---|
| `APP-000_INTERNAL_LINK_RUNTIME_HTTP_EVIDENCE_V1.0.json` | APP response; 30 ordered Grade occurrences; 14 Grade endpoints; shared destinations; nine consumers; two Process consumers; public-marker scan | `02BEBAA37A88444A1C7002DDD5AFBE2AC1794F9C3B823D44C3697C8B01D1A42D` |
| `APP-000_INTERNAL_LINK_RUNTIME_INTERACTION_EVIDENCE_V1.0.json` | Browser/AX link names; pointer, keyboard and Back; RFQ receiver; same-page target; Cookie dialog and focus | `3DA898B68828EBE6C44F7CC1E20DF76703E6441F1401B6CD6AF6DE87EEA48682` |

Both files are under `D:/23MySec/pages/applications/07_qa/`. No evidence contains a real submission.

## 3. Actual coverage and disposition

| Surface / acceptance mapping | Actual observation | Result |
|---|---|---|
| APP identity / `APP000-G9-01` link-scope portion | `/applications/` returned 200 and canonical `https://tio2malaysia.com/applications/`; fixed candidate identity and scope were traceable. Public output is not clean because of Finding F02. | `FAIL` |
| Thirty Grade source edges / `APP000-G9-03`, `-06` | Exactly 30 linked instances in approved 8/8/7/4/2/1 order; 30/30 labels and hrefs match; all 14 distinct Grade destinations returned 200 with correct EN canonical and same-scope identity. Only 29/30 stable Edge IDs match; F01. | `FAIL_WITH_29_OF_30_IDENTITY_MATCH` |
| Seven same-page paths / `APP000-G9-05` | Main `Explore Applications` reached `/applications#application-selector`; six category fragments are present. Browser AX exposed altered accessible names for the six category links; F03. | `FAIL_ACCESSIBLE_NAME` |
| Products/Documents/Markets support paths / `APP000-G9-06` | All three destinations returned 200 with the expected canonical and owner identity. Pointer activation and browser Back were verified for all three body actions. AX exposed altered support-link names; F03. | `FAIL_ACCESSIBLE_NAME`; destination behavior `PASS` |
| RFQ actions / `APP000-G9-07` | Clean public `/request-a-quote/` reached expected same-scope receiver; Product/Grade and Application were visible, editable and unselected; Back returned to APP; no submission. Public source/scope fields leak in HTML/RSC; F02. | `FAIL_PUBLIC_PROJECTION`; buyer route/receiver `PASS` |
| Breadcrumb and shared Header/Footer/nav/legal/Cookie / `APP000-G9-08` | Required Header/Footer navigation and legal controls were present; Applications was current without visible `CURRENT`; Contact and Terms were absent. Home breadcrumb reached `/`. All ten link destinations inspected returned 200 with expected clean canonical and language/scope. Cookie Settings was a button; opening moved focus to Close; Read Cookie Policy reached `/cookie-policy`; closing restored focus to Cookie Settings. | `PASS` within this runtime-link scope |
| Public Buyer Clean projection / `APP000-G9-13` | Raw APP HTML/RSC exposes internal page/scope/edge/target/contract fields; F02. | `FAIL` |
| Nine-page consumer set / `APP000-G9-16` and `G9-T4A5-F02` | All nine exact consumer routes returned 404 in the same candidate. No action existed to operate, so pointer/keyboard/Back and consumer-regression closure were impossible. | `OPEN_INTEGRATION`; not an APP page implementation regression |
| Process consumers / `APP000-G9-17` | Chloride returned 200 and had four `/applications/` instances. Its body `Explore Applications` passed pointer, keyboard Return, Back and focus restoration. Sulfate returned 404 and had no Applications action. | `CL_ROUTE_SUBCONDITION_PASS`; `SU_ROUTE_SUBCONDITION_OPEN_INTEGRATION` |
| Same-scope/canonical/cross-site behavior | APP contained no absolute HTTP(S) anchor href. All working Grade/shared/CL destinations stayed on the fixed local origin and exposed the expected `tio2malaysia.com` canonical. No wrong-site or foreign-scope destination was found. | `PASS` |

This report does not assess the non-link portions of `APP000-G9-02`, `-04`, `-09` through `-12`, `-14` or `-15`. `APP000-G9-10` remains independently unverified as recorded in Manifest V1.6; this link review does not replace physical touch, named screen-reader or native 200% evidence.

## 4. Required implementation Findings

### `APP-000-G9-IL-F01` — the thirtieth stable Grade Edge ID differs from the approved package

| Field | Judgment |
|---|---|
| Status / severity | `OPEN / REQUIRED / IMPLEMENTATION_FAILURE / MINOR_IDENTITY` |
| Acceptance IDs | `APP000-G9-03`, `APP000-G9-06` |
| Candidate / location | Fixed candidate above; Specialty Materials → CR-901, occurrence 30. Source config `wordpress/plugins/tio2-site-model/config/tio2-my-application-hub.json:107`. |
| Reproduction | Fetch `/applications/`; enumerate `data-grade-occurrence` in visible source order; compare every record to Gate 6 §5. |
| Expected | Occurrence 30 has stable ID `APP000-EDGE-SPEC-01`, label `CR-901`, href `/products/cr-901/`, target `GRADE-CR901`. |
| Actual | Runtime/config uses `APP000-EDGE-SPECIALTY-01`. The label, href and 200 Grade destination are otherwise correct. |
| Evidence | HTTP evidence `app.edgeComparison.mismatches[0]`; runtime interaction `UI-01`. Source config SHA-256 `E35A20A418D0E79CCFA29042B264B8092F143C15DDFE631BB21605B87026478A`. |
| Impact | The buyer reaches the right Grade, but the mandated 30-edge per-instance audit identity does not equal the approved contract and cannot pass exact inventory comparison. |
| Owner / return | APP-000 Gate 8 implementation/data owner. |
| Closure | A new fixed candidate exposes all 30 exact approved stable Edge IDs in order; labels, hrefs, Page IDs, language/scope and all 14 endpoints are rechecked. |

### `APP-000-G9-IL-F02` — public APP output exposes internal governance and routing identifiers

| Field | Judgment |
|---|---|
| Status / severity | `OPEN / REQUIRED / IMPLEMENTATION_FAILURE / PUBLIC_PROJECTION` |
| Acceptance IDs | `APP000-G9-01`, `APP000-G9-07`, `APP000-G9-13` |
| Candidate / location | `/applications/` raw HTML/RSC and public DOM attributes; APP component, RFQ link, shared Chrome consumption and serialized data. |
| Reproduction | Fetch raw APP HTML and scan public markup/RSC for Page ID, scope, source, Edge ID, target Page ID and shared contract identifiers. |
| Expected | Gate 6 §2 requires public HTML, accessibility, metadata, Schema, GEO and browser-facing APIs/viewmodels to omit `source_page_id`, internal `page_id`, `site_scope`, Gate/audit IDs; private trace may exist only after stripping it from public projection. |
| Actual | Raw public output contains `APP-000` 14 times, `tio2-my` 20 times, Edge IDs 90 times, `targetPageId` 8 times and `GLOBAL-CHROME-005` once. It includes six `data-source-page="APP-000"` attributes and three `data-support-action` internal IDs. Public attributes are emitted at APP component lines 33/84/121, RFQ link lines 34–35 and shared Chrome lines 25–26; RSC also serializes Page IDs, scope, targetPageId, contract and edge objects. |
| Evidence | HTTP evidence `app.publicInternalMarkers`; APP component SHA-256 `A1987BA2953C2916F46FFA4859BC5770166192B0F219960B529EF00289396965`; RFQ link SHA-256 `AB1C308C3A77A198915809174813D8ACB92D148B955B17E5E32AE1DE3A0E3190`; shared Chrome SHA-256 `2D9AB9C4A95CE650CB39C064FF430E5404EE131F7359E6F8E4A9D85EBFC32246`. |
| Impact | Internal control vocabulary and routing identities are buyer/browser-visible, violating the approved Buyer Clean/private-transport boundary. This also contradicts the developer receipt's `publicLeak:false` conclusion. |
| Owner / return | APP-000 Gate 8 implementation owner, coordinating the shared Chrome/RFQ component owners where the fix crosses those components. This report does not assert a site-wide root Finding because other pages were outside this review. |
| Closure | A new candidate retains required private trace while the APP public HTML/RSC/DOM/accessibility/head/Schema/browser-facing data contains none of the prohibited fields; both RFQ actions still reach the neutral receiver, and same-scope identity remains independently verifiable without public leakage. |

### `APP-000-G9-IL-F03` — decorative arrows alter nine approved accessible link names

| Field | Judgment |
|---|---|
| Status / severity | `OPEN / REQUIRED / IMPLEMENTATION_FAILURE / ACCESSIBILITY_COPY` |
| Acceptance IDs | `APP000-G9-05`, `APP000-G9-06` |
| Candidate / location | `/applications/`; six category anchors and three support links. CSS `malaysia-application-hub.module.css:31,53`. |
| Reproduction | Read the Chrome accessibility tree and compare link names to the approved exact labels. |
| Expected | Category names are `Coatings`, `Plastics`, `Masterbatch`, `Printing Inks`, `Paper`, `Specialty Materials`; support names are `Explore Products`, `Review Documents`, `Explore Markets`. Decorative arrows do not change those names. |
| Actual | Generated `::after` content enters the accessibility names: for example `Coatings ↓` and `Explore Products →`. The pattern affects all six category anchors and all three support links. |
| Evidence | Runtime interaction `UI-15`; CSS lines 31 and 53; CSS SHA-256 `7055344CA91EA597E2D6DA4D8E2DEA9BA64F6CCF1A68BBD20B06116B0AFF4EBC`. |
| Impact | Destinations work, but runtime accessible names no longer match the approved Buyer Copy/link contract and add nonessential spoken content. |
| Owner / return | APP-000 Gate 8 presentation/accessibility owner. |
| Closure | On a new candidate, the visible decoration may remain, but browser accessibility output for all nine instances equals the approved names; pointer, keyboard, fragment and destination/Back behavior are rechecked. Named screen-reader coverage under `APP000-G9-10` remains separate. |

## 5. Integration dependencies, kept separate from APP repair

### Existing `G9-T4A5-F02` / `APP000-G9-16`

The same candidate returned 404 for all nine exact routes: `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN`, `RES-TRADE-BR`, `APP-COAT`, `APP-PLAS`, `APP-MB`, `APP-INK` and `APP-PAPER`. This is a current combined-candidate route absence. It prevents the independent nine-page AC from closing, but it is not evidence that APP-000's implemented `/applications/` receiver or outbound links regressed. Keep the stable existing Finding open with the consumer/integration owner. Do not delete the approved links and do not grant APP-000 authority to modify those pages.

### Process consumers / `APP000-G9-17`

`PRODUCT-PROC-CL` is available and its route subcondition passes: the approved body action reaches APP-000 by pointer and keyboard, then Back restores the Chloride URL, content and action focus. This result does not close the whole combined Chloride Finding or any receiver-owned condition.

`PRODUCT-PROC-SU` returns 404, so the route subcondition of `G9-FIVE-F01` / `SU-G9-09` / `SU-DEP-01` remains open with the Sulfate/integration owner. APP-000 needs no page repair for this 404 and has no authority to edit the Sulfate page.

## 6. Four-layer status recommendation

| Layer | Recommendation | Basis |
|---|---|---|
| `RECHECK_SCOPE_STATUS` | **`RUNTIME_LINK_SCOPE_COMPLETE / CHANGES_REQUIRED`** | Fixed identity and the complete requested APP/shared/30-edge/nine-consumer/two-Process scope were independently inspected. F01–F03 remain open. |
| `PAGE_GATE9_STATUS` | **`NOT_PASS / RETURN_TO_GATE8`** | APP-000 fails required `APP000-G9-01/-03/-05/-06/-07/-13` link/public-projection portions. Other Gate 9 ACs outside this report are not inferred as passed; `APP000-G9-10` remains open. |
| `INTEGRATION_STATUS` | **`NOT_READY`** | `G9-T4A5-F02` remains open on nine 404 consumers; Sulfate's Process route subcondition remains open. Chloride route subcondition passes. |
| `RELEASE_STATUS` | **`NOT_AUTHORIZED`** | Gate 10, merge, deployment, publication and indexing remain outside this review and authorization. |

## 7. Return recommendation

Gate 8 repair is **required for F01–F03**. The repair return should bind a new implementation commit, evidence HEAD, Build and held runtime, then rerun the independent Manifest/preflight sequence and targeted adjacent checks stated in each closure condition. The nine consumer 404s and Sulfate 404 must remain separate integration-owner items; they do not justify deleting approved targets or broadening APP-000 page authority.

This report is submitted to the Project Controller for disposition. It does not update the current APP-000 Manifest, close Gate 9, send an owner task, or authorize Gate 10.
