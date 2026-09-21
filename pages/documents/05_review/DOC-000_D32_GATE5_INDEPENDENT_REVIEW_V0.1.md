# DOC-000 D32 Gate5 Independent Design Review V0.1

Date: 2026-09-21. Result: **CHANGES_REQUIRED**.
Reviewer: /root/res_root_d32. Candidate author: /root/doc_root_d32. Different actual agents; reviewer did not author or modify the candidate.

## 1. Intake and exact object

Review scope: INITIAL, current merged Gate4 design / Gate5 independent review. Controller dispatch in the four-root-page task authorizes this review only; no Gate4 closure, Gate6, development or release.

| Identity | Reviewed value |
|---|---|
| Entry | pages/documents/04_planning/d32-gate4-v0.1/DOC-000_D32_GATE4_GATE5_HANDOFF_V0.1.md |
| Workset / freeze ID | DOC000-D32-G4-20260921-V01 / DOC000-D32-G4-V01 |
| Bundle | 922b8b6ecc9c16e3b773c25f513c548b35d4552df72ed4e1635e30e68ecf7615 |
| HTML source | 2fa09d30d87870645752cde4f085d5113b63c97ef333534d184416d8cb6f0723 |
| freeze.json SHA-256 | cd906fd54f77cfb29de11f9f4497a94177d11babfd3ea3eab3622fc0072892f4 |
| CSS | 8ad839863f3e7e13d8114616cad7c48578c3b82f15cc470b26c19a1a93d4e552 |
| Behavior JS | c689d037e2592ba2d743972856bc4f6ae0d76783c1eda9d01f92ac492df1674e |
| Evidence index | 07b1795d4be447c5f8442a4089ef1e70fa1ade45df9e135dc13d011125cd0a77 |

Intake is sufficient for the same independent review, not a separate acceptance Gate. Independently recomputed the prescribed SHA256(UTF8(JSON.stringify(files))) bundle; 74 frozen files and all22 lock rows match. All48 PNGs match recorded physical dimensions, bytes and SHA, have source mapping and actual capture DPR1. Formal coverage is18 (five full +13 states), plus30 readable segments. Candidate HTML/CSS/JS are byte-identical to the corrected closed Gate3 V0.2. Closed Gate3 title repair remains valid: Documents for Product Qualification | TiO2 Malaysia.

Current review rules: GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.1, Gate5 role V0.6, layout-interaction-verification V0.9 / independent-visual-review V0.3, workflow V3.4 / standard V2.4, governance V1.5. The submitted author method identity is its actual historical V1.10 combination, not silently relabeled current. Of36 input pins,29 remain live-identical; seven changed shared governance/entry files resolve byte-for-byte to the pre-merge snapshots under90_archive/project-governance/2026-09-21-gate3-gate4-merge. This is authorized governance progression, not candidate evidence drift.

## 2. Required findings

### DOC-D32-G5-R01 — P2 / REQUIRED: DOC320 H1 exceeds the current shared line-count contract

- Expected: ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0 §4.3 (line93) fixes Mobile36px, weight700, maximum three H1 lines. Existing approved page/viewport-specific exceptions cannot be transferred to DOC320. No approved DOC320 exception exists.
- Actual: at320px the unchanged approved title “Documents for Product & Supplier Qualification” is four lines: “Documents for” / “Product &” / “Supplier” / “Qualification”. Independent actual runtime confirms36px/700/4 lines; formal FULL_320.png and readable READ_320_0.png show the same result.
- Impact: this is an unapproved shared visual-contract deviation. Complete readable words, no overflow and family-consistent tokens do not themselves authorize a fourth line. The candidate label PROPOSED_CONTROLLED_NARROW_WIDTH_EXCEPTION is a proposal, not an approval. Gate5 cannot grant a shared exception by returning PASS, nor can subsequent routine closure retroactively create its missing design authority.
- Owner: shared visual owner / user decision coordinated by Project Control; author then binds the resolved design/decision. Reviewer must not alter title, font, padding, shared breakpoints or page-private Hero structure.
- Acceptance: an explicit scoped approved visual decision resolves DOC-000/320px, or a design conforming to the applicable approved shared contract is provided. Preserve current candidate; submit an additive corrected record/freeze. If presentation changes, verify the affected width/state and adjacent regressions plus the contract-required responsive coverage; if only approval records change for an identical presentation, verify authority/scope and new combination identities while inheriting unchanged valid images. No automatic full-body rewrite or duplicate full capture set.

### DOC-D32-G5-R02 — P2 / REQUIRED: 320px validation feedback moves the Continue action

- Expected: approved DOC-000_CONTENT_ARCHITECTURE_V0.10, selector initial/no-selection/valid states (lines88–105), requires a stable validation position to avoid layout jump and the same Continue button in the same location. Candidate design-rules/capture-check claim the reserved feedback space prevents movement.
- Actual: with no grade at320px, activating Continue shows the approved two-line error. Error area expands24→46.1875px; Continue document Y moves1412.484375→1434.671875 (+22.1875px). Selecting M-2196 removes the error and moves it back to1412.484375. This was independently reproduced twice, including empty→error→selected→cleared in supplement.json. Other four widths retain exact positions.
- Evidence: observations.json assertion320_stable_validation_slot; supplement.json320 states; author FORMAL ERROR_320.png and SELECTED_320.png, plus READ_320_900.png. This is not a complaint that the CTA label or error naturally uses two lines; the missing stable reserved feedback space is the issue.
- Impact: at the required narrow width the action and following content visibly shift during correction, contrary to the explicit design behavior and author stability statement. Focus, error association, no-navigation and selected-grade routing still work; those passing findings remain valid.
- Owner: DOC Gate4 design author, within the approved text/interaction and shared-owner boundaries. This review prescribes the required stable design result, not implementation code.
- Acceptance: provide a revised narrow-state design evidence combination in which empty/error/selected/cleared retain the intended stable feedback/action placement, with full approved error text, visible focus, ≥44px targets and no overlap. Preserve14-grade query mappings and unrelated FAQ state. Recheck320 and390 states plus any widths affected by the chosen authorized change; update inaccurate author stability claims and additive freeze. Do not repair the old submitted files in place.

## 3. Valid coverage retained

Independent scripts produced412 assertions:410 PASS,2 FAIL corresponding to the two findings above. A second focused measurement confirms the same320 state movement; it is not counted as a third finding. This is reviewer evidence, separate from the author's345 checks.

| Scope | Independent coverage/result |
|---|---|
| Approved content/structure | V0.10 complete permanent text,3 exact scenarios,4 exact groups,14 ordered grades,6 FAQ question/answer pairs; Hero→selector order and lightweight3-step flow. FAQ2 correction and SEO title preserved. |
| Family/shared ownership | Exact neutral Chrome consumer snapshot and dependencies; Documents nav state, fixed RFQ, approved logos, RootPageHero hub-light slots/media. Home/Product reference visuals inspected. DOC framed shell is explicitly unchanged by Open-White Addendum; it is not a new finding. |
| Five-width visual | All18 formal images and30 readable segments actually opened. Continuous complete page from Hero through footer at1440/1024/768/390/320. No crop, overlap, overflow or missing assets; intended column changes verified. H1 counts2/3/2/3/4, with only320 requiringR01. |
| Grade operations | Empty initial select; operative Continue; native direct Hero /request-documents/; no-grade error/focus/no navigation; all14 exact product-only query mappings; closing CTA state; unrelated FAQ retention. Four widths stable;320 feedback shiftR02. |
| FAQ and shared controls | All6 FAQ keyboard actions, one-open model and initial DOM answers; mobile menu focus loop/Escape/link/resize restoration; Cookie dialog focus/return and no_optional_analytics presentation. |
| Accessibility/visual states | ≥44px visible controls; no clipped focus/error; loadedInter/logos; text solid-background contrast4.82–13.96; explicit error text and association; approved decorative illustration aria-hidden. |
| Buyer Clean | No fabricated public files/downloads/inventory, extra group, hidden commercial claim, CURRENT/governance status, private analytics switch or synthetic document Schema. |
| Evidence integrity |74/74 frozen files,22/22 lock rows;48/48 PNG identity/dimension/source mappings;36/36 pinned inputs resolved (29live+7archive); unchanged candidate proven after operation. |

Full actual-opening record: d32-gate5-independent-v0.1/visual-observations.md. Machine/runtime detail: observations.json and supplement.json in that directory. No new PNGs were generated; no author generator/verifier was run.

## 4. Later dependencies and current stop

Historical D16 and old D32 runtime evidence only prove their original objects. This review reads the D23 local prototype and existing D23 references; it did not inspect any development repository, receiver, real form submission, HTTP deployment, native assistive devices or Google indexing.

The newly active STATIC_NEXTJS_SINGLE_SITE_AND_GOOGLE_INDEXING_DECISION_V1.0 governs future handoff: D:/32NextJS static single-site, no WordPress/CMS/database/multisite-scope obligations, and technically indexable published pages with later actual Google indexing follow-up. Candidate references to old D32/CMS/scope/noindex are historical prototype context, not future requirements or current Gate5 visual defects. Gate6 must interpret them under the current decision; this review neither changes those records nor authorizes development/release.

Status remains CHANGES_REQUIRED; Gate4 not closed, Gate6 not entered. Two required findings remain OPEN. All410 valid assertions,18 formal images and30 readable inspections can be inherited where the next change manifest proves their objects/conditions unchanged. Reviewer will perform a targeted recheck of the actual resolution and affected regression scope, not restart the unaffected full review.
