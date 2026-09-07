# APP-MB Gate 3 Wireframe Specification and Self-check V0.1

## 1. Control and task input card

| Field | Value |
|---|---|
| Page ID / page | `APP-MB` / `TiO2 for Masterbatch` |
| Registered URL | `/applications/titanium-dioxide-for-masterbatch/` (`PROVISIONAL_URL`) |
| Page type | Application landing page with technical depth |
| Language / site scope | EN / `tio2-my` |
| Gate 3 authorization | `G3-APP-P1-THREE-PARALLEL-01`; this execution workstream only |
| Execution baseline | Gate 3 current baseline V1.5; Agent V0.3; responsive-wireframe-design V0.3; layout-interaction-verification V0.4 |
| Current approved page baseline | `APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md` |
| A | `APP-MB_GATE2_CONTENT_SKELETON_V0.2.md` / `633a2165153d0f60711f9c170d84e658cb245d9f971afe81a4f2b079c60344dc` |
| B — sole visible-copy source | `APP-MB_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md` / `06bdd245d1722223c415e0c4cecc7248f64d938cc37f936ae160b240faa9343f` |
| C | `APP-MB_GATE2_CONTENT_CONTRACT_V0.3.md` / `944fee912e10fa2ddf9a5700d2d925e584b07edb998af7b6b13194d8143ad168` |
| Shared assembly | Page-neutral `TIO2MY-GATE3-SHARED-CONSUMER-002` V0.2; `currentPageId=APP-000` |
| Allowed write scope | APP-MB `04_planning`, `05_review`, and the next candidate Manifest only |
| Stop point | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; no Gate 3 approval/closure and no Gate 4 start |

The approved Page Intent Card remains unchanged. The wireframe serves the buyer who must separate concentrate preparation from final let-down and final-specimen evidence, retain a fair comparison basis, review seven neutral Grade starting points, and continue with the appropriate Documents, Sample or RFQ path. It introduces no carrier, loading, formulation, threshold, Grade-fit, ranking, equivalence, availability or outcome claim.

## 2. Structural questions and verification positions

| Structural question | Expected relationship | Verification position / viewport / state |
|---|---|---|
| Can four different evidence roles remain comparable without merging their limits? | Every observation stays attached to its question and visible limit. | `MB-04`; 1440 and 768 semantic table; 390 labeled records; dedicated risk image. |
| Does the four-step sequence remain buyer-owned and stop short of a prescribed SOP or pass threshold? | Evidence, supported decision and stage stay in the approved order and wording. | `MB-07`; all full-page views; 390 labeled records. |
| Do seven Grades remain equal and preserve one, several and unknown-Grade paths? | Exactly M-510, M-200, M-108, M-210, M-340, M-886 and M-2377, five Chloride/two Sulfate, with no visual ranking or preselection. | `MB-09`; all viewports; dedicated 390 Grade-path image. |
| Do incomplete inputs still lead to the correct receiver without an outcome promise? | Documents uses one known Grade; Sample supports known/unknown Grade; RFQ supports a lead Grade or `Not sure / Need help`, required or estimated MT and other candidates in `Additional Requirements`. | `MB-10`; all viewports; dedicated 390 request-path image. |
| Does shared navigation operate correctly around a very long technical page? | Applications is current on the active surface, no visible `CURRENT`; 768/390 menu opens, isolates background, selects/closes and restores focus; Cookie Settings opens/closes and restores focus. | Formal menu images plus `APP-MB_GATE3_RUNTIME_EVIDENCE_V0.1.json`. |

## 3. Content-to-layout mapping

| Module | Buyer task and locked relation | 1440 / 768 | 390 |
|---|---|---|---|
| `MB-01` Hero | H1, two-stage direct answer, two in-page actions | Compact lead region; two adjacent actions where space permits | Single column; two full-width actions |
| `MB-02` | Declare carrier, receiving resin, fractions, preparation, route, specimen, reference and endpoints | Reading column with complete list | Same list in one column; no clamp |
| `MB-03` | Comparable method, preparation, equipment, conditions, polymer, specimen, reference and endpoint | Reading column | One column; full ISO boundary retained |
| `MB-04` | Observation → question → limit | Three-column semantic table | One labeled record per observation; all three fields repeated per record |
| `MB-05` | Concentrate evidence boundary and APP-PLAS handoff | Reading column with inline handoff | One column; link remains with its boundary paragraph |
| `MB-06` | Document → support role → check | Three-column semantic table | One labeled record per document |
| `MB-07` | Step → evidence → decision supported | Three-column semantic table | One labeled record per step; no prescribed threshold added |
| `MB-08` | Economics only after the same accepted endpoint | Reading column | One column; input list remains continuous |
| `MB-09` | Seven equal Grades and one/several/unknown pathways | Three-column Grade table | Seven equal labeled records, followed by unchanged path text and Products link |
| `MB-10` | Documents, Sample and RFQ receiver boundaries | Reading column and three complete action paragraphs | One column; action names retain 44px hit areas and incomplete-input wording |
| `MB-11` | Four public technical sources with scope/date language | Numbered source list | Same order; long titles wrap without clipping |

The Desktop and Tablet table structure remains semantic. At 390 the same table elements are restyled as labeled records rather than flattened into unlabeled values. No carousel, horizontal page scrolling, hidden overflow or text clamp is used.

## 4. Freeze, preflight and evidence layers

Hard preflight record: `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE3_PREFLIGHT_RECORD_V0.1.json`, SHA-256 `a8619a69ae87af49edd1c0f7c86ecfd5ac132928e5f8abe56ceca59d47f41982`. The project checker returned `PASS_FOR_FORMAL_RENDER` with zero failures before formal exports existed.

Freeze record: `D:\23MySec\pages\applications\masterbatch\05_review\APP-MB_GATE3_FREEZE_RECORD_V0.1.json`, SHA-256 `6b6752b9365f568e1a69a1f3005a9db042eb55198933956a3ac173589fefc53e`.

Frozen editable source: `D:\23MySec\pages\applications\masterbatch\04_planning\APP-MB_GATE3_WIREFRAME_EDITABLE_SOURCE_V0.1.html`, 31,200 bytes, SHA-256 `43a70d7c13a387c09a7d07138880f97340890c807a285217d090109b6a65f937`.

Reproduction source: `D:\23MySec\pages\applications\masterbatch\04_planning\APP-MB_GATE3_BUILD_WIREFRAME_V0.1.cjs`, SHA-256 `dc48855243212aff5f91b6b0ee83e819f02715a61f6728b0e3457997417c85fd`. The build reads B between its Buyer Copy markers and generates the page from the page-neutral shared consumer. The frozen HTML has no runtime dependency on another business page or `99_workspace`.

Formal asset index: `D:\23MySec\pages\applications\masterbatch\04_planning\wireframes\approval_core\APP-MB_GATE3_FORMAL_ASSET_INDEX_V0.1.json`, SHA-256 `c327de2bcfe4fc2097dd9dc8df2a02d981a47eede3d3dd5522682a8c88ff3f1c`.

### approval_core

| Asset | Logical / physical size | SHA-256 |
|---|---:|---|
| `APP-MB_GATE3_FULL_1440_V0.1.png` | 1440 / 1440×8397 | `dd6038a953c8c531947fe46a8f42fbd51f50bfb552d84ba9c5d140d588540ef7` |
| `APP-MB_GATE3_FULL_768_V0.1.png` | 768 / 768×8985 | `2dd4b7742a93cb247f45a65e27f9cc21b618207bb9c39d12591eb0a099269a6d` |
| `APP-MB_GATE3_FULL_390_V0.1.png` | 390 / 390×13943 | `1045c9e4851188d9f0785531cc6d18086721df3920d86eb26d9ff73d8be0f965` |
| `APP-MB_GATE3_MENU_OPEN_768_V0.1.png` | 768 / 768×900 | `cfc8b9382836808c4bae51637a83a2991dfa5f22c58b2a25844c68a4c0d19643` |
| `APP-MB_GATE3_MENU_OPEN_390_V0.1.png` | 390 / 390×900 | `3d3eee9573c921aa7d732bafdcf62688df010bdd2afd6d58d88b79d0e28c99de` |
| `APP-MB_GATE3_RISK_EVIDENCE_TABLE_390_V0.1.png` | 390 / 390×1854 | `22e8ab5c1aa727c2f54bb6389fed4bd5fe334158f45b1fae68ab4ea576484118` |
| `APP-MB_GATE3_RISK_GRADE_PATHS_390_V0.1.png` | 390 / 390×1977 | `85e2da54e8d78f51f0eb79213ef9234d375fda212278f3c0df30c6dea6047a29` |
| `APP-MB_GATE3_RISK_REQUEST_PATHS_390_V0.1.png` | 390 / 390×1056 | `d9ea74d53f6f1e0e2fa6612d0c41884a7fea77b5a6af94b7b4b0ffc4b5e0e766` |
| `APP-MB_GATE3_RUNTIME_EVIDENCE_V0.1.json` | 768/390 actual local runtime | `425cb643df180a275c108d57bc124c4f8165a3a7b3b53287376df45965f29742` |

### diagnostic_support

Diagnostic full-page images, menu/Cookie state images and measurements are retained under `D:\23MySec\pages\applications\masterbatch\05_review\diagnostic_support\`. The controlling observation file is `APP-MB_GATE3_PREFLIGHT_OBSERVATIONS_V0.1.json`, SHA-256 `9c93db1a2bbd09a15703ff6f6c147041da24125b5af4d54cf39f7b36a003fce7`. They support reproduction and detailed inspection and are not the default approval payload.

## 5. Shared evidence inheritance and current-page checks

The current page consumes Shared Global Chrome Gate 3 Consumer V0.2, manifest SHA-256 `eacb20113a0bad1c9022c5d618178ef6482aa8913fcd1197443dc7b596548eeb`. The original package validation is `D:\23MySec\99_workspace\gate3-v02-validation\shared-consumer-v0.2\shared-consumer-validation.json`, SHA-256 `373993fb476f86d454600c75d0a4b99ae4f9a9fa7547a6eb8ed099b05f477683`; it covers seven navigation parameters and 1440/768/390 with 52 runtime/static assertions and zero failures.

APP-MB makes no CSS or script override to the shared Header, Footer, menu or Cookie components. The shared evidence is cited for the complete focus loop, Escape, background isolation and desktop-breakpoint behavior. Current-page actual runtime separately verified both 768 and 390 menu open/select-close/background restoration/focus return, and the 390 Cookie open/close/focus return. The full-page images separately verify Applications current treatment, fixed RFQ, Logo, Header/body/Footer connection and no visible `CURRENT` label.

## 6. Self-check: fixed core invariants

| Core | Self-check result | Evidence |
|---|---|---|
| Frozen identity | `PASS` | Source hash matches preflight, freeze and formal asset index; source hash was unchanged after rendering. |
| Approved inputs | `PASS` | A/B/C actual hashes match the user-locked values; B is the only Buyer Clean source. |
| Complete content and relationships | `PASS` | 72/72 visible B lines found; 11 modules, one H1, ten H2; four tables retain 4/4/4/7 rows; seven Grade order matches C. No added Product, prescription, threshold or outcome claim. |
| Responsive geometry | `PASS` | At 1440/768/390 `scrollWidth=clientWidth`; overflow element count 0; visible target below 44px width or height count 0. |
| Shared assembly | `PASS` | Page-neutral V0.2 source, approved production Logo paths, Applications current mapping, fixed RFQ, current Footer legal row, no other-page dependency. |
| Overlay operation | `PASS` | Current-page actual menu and Cookie checks plus applicable shared package evidence; static images and runtime evidence are separately labeled. |
| Action boundary | `PASS` | In-page anchors, APP-PLAS, seven Grade routes, Products, Documents, Sample and RFQ hrefs match C. No real request is sent and no local simulation is described as receiver success. |
| Complete visible review | `PASS` | All three formal full-page images were opened from Header through Footer; all three risk images and both menu images were viewed. |

## 7. Page-specific risk results

| Risk | Result |
|---|---|
| Technical comparison tables | `PASS`: four semantic tables remain complete at 1440/768. At 390 each record repeats its field labels, so observation/question/limit, document/role/check, step/evidence/decision and Grade/process/action do not detach. |
| Special response conversion | `PASS`: mobile uses a complete single-column flow; no table value relies on a hidden header, horizontal swipe or clipped container. |
| Seven Grade neutrality | `PASS`: exact order and five-Chloride/two-Sulfate process labels retained; all records use the same geometry and action treatment. No candidate is preselected or visually promoted. |
| One / several / unknown paths | `PASS`: the complete paragraph after the Grade records keeps all three paths; request copy preserves known, several and unknown-Grade options. |
| Documents / Sample / RFQ | `PASS`: separate receivers and limitations remain in one request module; required-or-estimated MT, `Not sure / Need help` and `Additional Requirements` remain visible. |
| Sources | `PASS`: four sources retain entity, title, date/no-date and role wording; long source titles wrap at 390 without page overflow. |

## 8. Four required execution conclusions

1. The hardest comparison area is `MB-04`. A semantic three-column table becomes four fully labeled mobile records; the dedicated 390 evidence shows every observation, question and limit attached.
2. The most likely operation failure is the shared narrow-screen menu on this long page. Actual 768 and 390 runtime checks show open, active Applications state, background isolation, selection close, restoration and focus return; Cookie Settings also restores focus.
3. The highest-risk responsive conversion is the four tables, especially the seven-Grade set and the adjacent one/several/unknown path. The 390 labeled-record conversion preserves all field and object relationships with no ranking treatment.
4. Required Gate 3 Finding: none in executor self-check. Production routes, form receivers, true submission/receipt, real devices, screen readers, CMS and final Canonical remain Gate 6/8/9/10 dependencies. They do not block this planning structure and were not represented as verified.

## 9. Structure constraints and current implementation parameters

Gate 3 candidate structure constraints are the eleven-module order, technical definition before Grade review, Grade review before requests, all table field relationships, seven equal Grade records, one/several/unknown paths, each CTA's owner/region and the 1440/768 table-to-390-labeled-record conversion. The Header/Footer owner contract and active Applications mapping are also constraints.

Current implementation parameters available to Gate 4 after authorization include exact section padding, reading-column width, font sizes within the approved brand range, border treatment and alternating section surfaces. Gate 4 may refine them and recheck affected layouts without changing the constraints or visible copy.

## 10. Submission state

`DRAFT_FOR_PROJECT_CONTROL_REVIEW`

This self-check is executor evidence, not an independent review, Project Control PASS, user approval or Gate 3 closure. Gate 4 and later work remain unauthorized.
