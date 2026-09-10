# RES-CHEMOURS — Gate 5 independent visual review V0.1

Date: 2026-09-07. Technical conclusion: **REVIEW_PASS**. Required unresolved Findings: **0**. This is an independent review of the specified frozen visual combination; it is not Gate closure, Gate 6 authorization or release acceptance.

## Dispatch and independence

| Field | Value |
|---|---|
| dispatch_id | `G5-9PAGE-REVIEW-20260907-01/RES-CHEMOURS/INITIAL` |
| Page / stage | `RES-CHEMOURS` / `GATE5_INDEPENDENT_VISUAL_REVIEW` |
| mode / review_scope | `INDEPENDENT_REVIEW` / `INITIAL` |
| Actual original author | `/root/gate4_chemours_execute` |
| Actual reviewer | `/root/g5_chemours`; different execution instance |
| Authority | [Nine-page review control](../../../../../docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md); user explicitly requested subagents |
| Original execution authority | [G4-REMAINING-8-EXEC-01](../../../../../docs/architecture/GATE4_REMAINING_EIGHT_EXECUTION_CONTROL_V1.0.md), with byte-bound authorization-at-start snapshot |
| Handoff entry | [RES-CHEMOURS Gate 4→5 V0.1](../RES-CHEMOURS_GATE4_TO_GATE5_HANDOFF_V0.1.md) |
| Authority Manifest | [V0.17](../../RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md); old Gate 4 field is superseded by explicit execution authority, not an inferred approval |
| Reviewer role | Gate 5 Agent V0.4; SHA-256 `e7cb61d0663bb3fa2088ae115e7d611515db0ce54b517f145c947008e40ca2f9` |
| Method | layout-interaction-verification V0.8, `27dbcf7a2815af08543f3579f4e0eb93de73bfe41246e6d9879793cdde725884`; independent-visual-review reference V0.2, `a5816b700851f19df9604a5eebc7c94917b50fc25678bfbed8c73740c1530208` |
| Consuming baseline | Gate 4 Agent/Skill Manifest V1.9, `4db2a35af7c2deb92511d93989f304eff337bcf0440b50b0915b4b669de57f4a`; current 4→5 and 5→6 contracts |
| Write scope | This `05_review/gate5-independent-v0.1/` directory only |

Root AGENTS, PROJECT_CONTEXT and current Index were actually read, as were the current Manifest, complete Brief, Resource Playbook applicable sections, registry/keyword ownership rows, B V0.3, C V0.7, A V0.3, original user confirmations, approved Gate 3 structure/source/handoff, current workflow/stage standard/governance, brand/CTA/logo and shared Chrome/consent/legal contracts. B remains the sole visible-copy authority. Historical Playbook/Brief stage fields do not reverse later specific user approvals.

## Bound combination and input disposition

Workset `RESCH-G4-WS-01`; bundle/freeze `RESCH-G4-FREEZE-01`.

| Object | Bytes | Independently recalculated SHA-256 |
|---|---:|---|
| [Frozen visual HTML](../../04_planning/gate4-v0.1/RES-CHEMOURS_GATE4_COMPLETE_VISUAL_V0.1.html) | 20,463 | `0bfcf6283310b7eb14699428e87e1b50aa4aeb8b8ff98bf9ced52fcd45e464d2` |
| [Freeze record](../../04_planning/gate4-v0.1/freeze-record.json) | 7,171 | `bd31e4fa9f103849d946519db582b4caff36e6433830394c275352e697bd9dc7` |
| [Evidence index](../../04_planning/gate4-v0.1/evidence_index.json) | 10,844 | `62dc737d907f842d8763acccd94e3f114aa433bb075742ad4a6eb02e32cefeac` |
| [Input index](../../04_planning/gate4-v0.1/input_index.json) | 9,188 | `1897be092e6df23f0bccbfc0a2a36b47dfb4725f4d70325d20a43070a4192bf2` |

Independent recursion checked 87 recorded identity claims across the freeze, evidence and input indexes. All frozen source, formal assets, dependencies and approved page inputs match. Eight PNG signatures/dimensions and their bytes/SHA match. The live HTML remains unchanged after review. Native DPR 1 is supported by the read formal-capture/preflight records and capture configuration, not inferred from pixel dimensions. Independent Chromium was also `151.0.7922.34`, with 900px viewport height, DPR 1, local Inter and the two approved production SVGs successfully loaded. No execution-side capture/build/freeze scripts were run.

Two dynamic governance paths have changed: AGENTS (`b565d4d…3550` → `aa4f6e02…f2d5`) and Gate 4 Agent (`7c90c3e6…a7e3` → `3dc109e0…1709`). Both original hashes were independently recovered exactly in `90_archive/project-governance/2026-09-07-gate4-gate5-handoff/`. Actual diffs add the current handoff/role/closure routing, preserving visual methods and page contracts. These are resolved provenance differences, not changed visual inputs or unresolved defects. [Supplement](supplement.json) records exact archived identities; [handoff alignment record](../../../../../docs/architecture/GATE4_GATE5_HANDOFF_ALIGNMENT_CHANGE_V1.0.md) and [5→6 alignment record](../../../../../docs/architecture/GATE5_GATE6_CONTROLLER_ALIGNMENT_CHANGE_V1.0.md) explain the authorized revisions.

The candidate's actual input index and handoff bind **V1.7 / Gate 4 Agent V1.3**. The later batch receipt says its first seven dispatches used V1.8. The direct frozen candidate record is used here to identify what was consumed. Both have the same three visual-method hashes; current required handoff materials are complete and independently checked. Controller should preserve this precise per-page provenance when consolidating the batch record. This reporting discrepancy has no unresolved content, visual, behavior, authorization or evidence effect and does not require recapturing the candidate.

## Actual coverage and observations

| Requirement / instance range | Viewports and evidence | Observation |
|---|---|---|
| All six body modules, Header through final Footer copyright | All three formal full PNGs opened; readable original-pixel crops emitted in memory only | Complete B, approved order, module connections and Footer visible; no hidden governance text, omitted paragraph or captured rendering fault |
| Long page coverage | 1440 y=0–1550 and 1450–3050; 768 y=0–1400, 1300–2700, 2600–3701; 390 y=0–1500, 1400–2900, 2800–4300, 4200–4549 | Overlapping ranges cover every pixel row, all headings/paragraphs and Footer. Crops are views of original PNGs, not new render assets |
| Exact source correspondence | Source independently rendered at 1440 y=0, 768 y=950, 390 y=2780; runtime geometry at all three widths | Visual layout matches original formal evidence; document heights 3050 / 3701 / 4549 match full PNG heights |
| B and structure preservation | SOURCE_INSPECTION + ACTUAL_RUNTIME at all widths | HTML body/script and shared CSS match approved Gate 3 source; every normalized B line found; actual visual scan confirms visibility. No new fact or competitor relationship |
| Responsive geometry and text | ACTUAL_RUNTIME, all widths | Scroll widths 1440/768/390; no clipped text ranges or hidden-overflow text; all 44 main text nodes checked. Smallest visible default target is 44×44 CSS px; Menu links are 52px high; Cookie targets 48px high |
| Evaluation brief and qualification | All three full images and runtime element coordinates | Four inputs retain numbers/labels/descriptions. 2×2 at 1440/768 becomes 1–4 block flow at 390. Three qualification steps stay vertical. Long mobile step heading and tablet criteria text remain readable |
| Products/Documents actions | Both product actions, document action and every other main link actually clicked on all widths, locally intercepted | Products remains first and visually primary; Documents remains second and outlined. Exact labels/targets; no query, competitor grade, inferred IKHLAS grade or matching payload |
| Shared Header/Footer/legal instances | All full images, all live hrefs and targets; desktop navigation links actually clicked at 1440; Footer/Header actions at all widths | Header 84/64/64px, Resources current, fixed RFQ, production SVGs, unchanged Footer. No visible CURRENT badge, Terms route or duplicate exposed navigation |
| Mobile Menu | Original 768/390 state PNGs; separately operated at both widths | Enter opens, focus enters Home, background becomes inert, backward/forward wrap includes Close and terminal RFQ, Escape/Close and all eight selections close and restore background. Desktop transition closes and unlocks; active element becomes BODY because compact toggle disappears |
| Cookie | Original three state PNGs; separately operated at every width | Opens on Enter, Close gets focus; both directions loop, attempted background focus is blocked, Close and Escape restore Cookie Settings; Policy intent exact. Horizontal actions at 1440/768, stacked at 390, all content readable |
| Focus, hover and color | Runtime computed styles after keyboard operation; formal focused Menu/Cookie images | Main/source controls have 3px Functional Teal outlines; Footer white outline; primary hover Navy/white. White/Teal contrast 4.818:1, panel/Teal 4.520:1, body/panel 9.715:1, white/Deep Navy 17.189:1 |

No behavior equivalence was used to skip a required distinct responsive branch. Main/Header/Footer links were clicked across all three widths, all eight Menu selections at both compact widths, seven desktop navigation links at desktop, and Cookie controls at all widths. Ordinary anchor pointer and keyboard activation share native link behavior and the same page-wide local-intent handler; each target/parameter was independently inspected. Link intents are **LOCAL_SIMULATION**, not proof of destination reception. Menu/Cookie focus changes and geometry are **ACTUAL_RUNTIME**. Images are **STATIC_VISUAL**; byte/source/contract checks are **SOURCE_INSPECTION**.

The most sensitive content is the Chemours source paragraph and final independence statement. Both source links remain within the Chemours-only portfolio/application sentence and have clear underlining. No competitor logo, partnership badge, brand arrows, comparison matrix, grade pairing or endorsement styling appears. The final source explanation, `Last reviewed: 6 September 2026` and complete independent publisher/no-affiliation wording remain ordinary readable content. The soft brief panel reads as a numbered preparation list, not a form; no submission expectation is created.

Forms, selections, comparison tables, FAQ, error/success, empty results, dynamic recommendations and page media are **NOT_APPLICABLE**: none exists in the approved B/C or source. No synthetic states were added.

## Findings, limits and handback

**Findings: none. Required unresolved Findings: 0.** No new persistent screenshot was triggered or saved. The three live inspection views and readable original-image crops were transient tool displays only. Original `approval_core` assets remain the sole formal visual evidence. The report's conclusion and exact source/bundle references form the independent review record; observations/scripts are diagnostic support.

Unverified items are retained from the approved Gate 3→4 handoff §7 and C V0.7; they are not current visual defects:

| Existing dependency / source | Owner and acceptance condition | Later verification boundary |
|---|---|---|
| Mapping/indexing — C §1/3/4, current Manifest | Controller/user must explicitly decide candidate route, canonical/sitemap/indexing | Before implementation/indexing/public release; remains `NEW_PAGE_CANDIDATE / DECISION_REQUIRED` |
| Source freshness and live availability — C §4, Brief §7, Resource Playbook §6 | Resource content owner rechecks two Chemours first-party sources within 90-day/event-triggered policy and before release | Before publication and future source-change events; this review checks approved attribution/targets, not current external facts |
| Product/document/shared receiver routes — C §2 and shared Chrome contracts | Destination/shared owners provide accessible approved routes, correct singular-grade request behavior and no inferred competitor context | Gate 8 implementation, Gate 9 actual receiver/link verification, release blocking if missing |
| Production consent/storage — shared Consent V1.1 and legal authority V1.3 | Shared Consent/legal owner verifies no_optional_analytics state and approved actual storage/network behavior | Gate 9/production acceptance; this page demonstrates local interface only |
| Real devices, screen reader and browser UI 200% zoom — approved Gate 3→4 handoff §7 | Development/QA owner verifies actual implementation, accessible exposure, focus, reflow and complete reading | Subsequent authorized implementation QA; CSS/DPR checks are not represented as browser UI zoom or reader testing |

No external network request, real submission, external message, D16 access, implementation, approval, closure or Gate 6 work occurred. Controller may accept this technical review and decide closure under the standing authority; this reviewer stops after handback.

## Reproducibility and saved evidence

- [review.cjs](review.cjs): independent identity/source/runtime inspector; command `node pages/resources/chemours-alternatives/05_review/gate5-independent-v0.1/review.cjs`.
- [observations.json](observations.json): actual initial runtime, source, identity and geometry results; SHA-256 `a545d91976a62a43a20e11f4b2d5a7f7bc39a7467ae7e86896d2339651cc72bf`.
- [supplement.cjs](supplement.cjs): incremental text-range, desktop-link and provenance checks; `view` emits a transient viewport without saving images.
- [supplement.json](supplement.json): source text geometry, exact archived governance identities and computed contrast; SHA-256 `95e81e73fd2871cd119b8c0be507642e6c110cdb3fb3854faad3b406e05ec6a8`.

Machine tools cannot prove reader understanding or visual quality; those conclusions above come from the actual readable image/source inspection. The original author self-check was read as a claim to verify, not inherited as reviewer execution. No failed runtime or missing mandatory visual coverage remains.
