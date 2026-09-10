# APP-INK independent visual review — INITIAL V0.1

**Technical conclusion: REVIEW_PASS. Required Findings: 0.** The reviewed frozen visual preserves approved content and structure, is readable across all three required viewports, and passes the applicable local behavior checks below. This is the new Gate 5 independent review of the merged Gate 4 visual stage; it does not close a Gate or start Gate 6.

## Identity and intake

| Field | Exact reviewed object |
|---|---|
| Date / review ID | 2026-09-07 / `APP-INK-G5-INDEPENDENT-INITIAL-01` |
| Page / scope | `APP-INK` / `tio2-my` / Printing Inks application landing page |
| Dispatch | `G5-9PAGE-REVIEW-20260907-01/APP-INK/INITIAL` |
| Mode / stage | `INDEPENDENT_REVIEW` / `INITIAL` / `GATE5_INDEPENDENT_VISUAL_REVIEW` |
| Actual author | `/root/gate4_printing_inks_execute` |
| Actual independent Reviewer | `/root/g5_inks`; different actual instance; no candidate editing |
| Author workset / execution | `APP-INK-G4-WS-20260907-01` / `G4-REMAINING-8-EXEC-01/APP-INK` |
| Source | [APP-INK_GATE4_COMPLETE_VISUAL_V0.1.html](../../04_planning/gate4-v0.1/APP-INK_GATE4_COMPLETE_VISUAL_V0.1.html), 32,689 bytes; SHA-256 `148baf534aae5beaf66f2b776f2741dccb5f5b2fe458761d2193fa83eb65ae98` |
| Bundle | `APP-INK-G4-BUNDLE-24ac2dec8f055d8a` / full SHA-256 `24ac2dec8f055d8a1c5272b0567d2038119ca6fe802404070cca4be20ca4bfe2` |
| Freeze | `APP-INK-G4-FREEZE-20260907-01-24ac2dec8f05`; [freeze record](../../04_planning/gate4-v0.1/APP-INK_GATE4_FREEZE_RECORD_V0.1.json), SHA-256 `1ba6aef0ca1cba1582e3811525ef8a808d80b6d7d4a4d5a78357363a94913a9a` |
| Input index | [input index](../../04_planning/gate4-v0.1/APP-INK_GATE4_INPUT_INDEX_V0.1.json), SHA-256 `7286d90409c0b7fba9fedf6557a3ece4eac2ed485b2a5397d52e9f54b16915da` |
| Evidence index | [evidence index](../../04_planning/gate4-v0.1/APP-INK_GATE4_EVIDENCE_INDEX_V0.1.json), SHA-256 `ba4691657d8c51b08517713d547f23d40d581f75617e9dd4b40b33d806ac0676` |
| Sole handoff / upstream authority | [Gate 4→5 handoff](../APP-INK_GATE4_TO_GATE5_HANDOFF_V0.1.md); [Manifest V0.4](../../APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md) |
| Review authorization | [nine-page control V1.0](../../../../../docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md) and explicit parent dispatch; original execution authorization separately verified in `GATE4_REMAINING_EIGHT_EXECUTION_CONTROL_V1.0.md` |

Role: `agents/gate5-independent-visual-review/agent.md` V0.4, SHA-256 `e7cb61d0663bb3fa2088ae115e7d611515db0ce54b517f145c947008e40ca2f9`. Method: `skills/layout-interaction-verification/SKILL.md` V0.8, SHA-256 `27dbcf7a2815af08543f3579f4e0eb93de73bfe41246e6d9879793cdde725884`; independent visual reference V0.2, SHA-256 `a5816b700851f19df9604a5eebc7c94917b50fc25678bfbed8c73740c1530208`. Current consuming baseline V1.9, SHA-256 `4db2a35af7c2deb92511d93989f304eff337bcf0440b50b0915b4b669de57f4a`. The author's V1.8 remains execution provenance. Current Gate 4→5 and Gate 5→6 contracts and standing closure authority govern receipt; Reviewer does not exercise closure authority.

Read the root AGENTS, Context and Index; required stage/governance sections; complete Brief and A/B/C; approved Gate 3 combination and handoff; Registry and keyword ownership rows; Application Playbook; Product V0.3 Printing Inks rows and unified audit; brand/CTA/Logo/Chrome/legal/consent owner contracts and applicable decisions. No applicable nested AGENTS was found in the task directories. The older Playbook's M-2377 hold, child-page authorization and live-route-only planning statements are superseded in the documented scope by the specific Brief/B/C, current Product V0.3, actual dispatch and complete-site principle. No historical hold was restarted. The upstream Manifest's Gate 4 not-started field is not the candidate identity.

The independent machine audit recalculated 108 input/freeze/evidence identity and PNG dimension claims with zero mismatches, and reproduced the full bundle hash. Ten original formal PNGs map to this source and the recorded native DPR 1 captures. Runtime Edge `152.0.4191.66`, loaded Inter, exact full heights 7,636 / 8,634 / 12,646 and viewport widths agree with capture provenance. No governance hash drift required an archive fallback in this candidate. Source and critical dependencies were rechecked at completion.

## Actual coverage and evidence

Author self-check was read as an input assertion. The following observations were independently obtained using isolated headless Edge contexts; no visible browser was used and no author build/capture/freeze script was run.

| Requirement / instances | Actual coverage | Evidence and result |
|---|---|---|
| Complete visual content | 1440×1000, 768×1024, 390×844; original full PNGs plus overlapping native-scale reading to Footer | `STATIC_VISUAL`: all INK-01–11, Header, Footer, both table-to-record conversions and every source inspected. Exact ranges in [coverage.json](coverage.json). Three originals plus 19 temporary crops, all now read; no new persistent screenshot. |
| Approved visible content | Complete B V0.2 in each viewport; normalize whitespace only; supplemental actual visual reading | `SOURCE_INSPECTION` + `ACTUAL_RUNTIME`: complete rendered text matches B; no semantic edits, lost paragraphs, extra commercial claims, forms, selectors, FAQ or media. Breadcrumb and eyebrow are separately approved A/G3 chrome. |
| INK-01–05 | Hero/two actions; nine system inputs; opacity/coverage/colour; dispersion/rheology/storage; grind boundary | Technical examples retain exact system limits. Opacity does not become raw-pigment whiteness; aqueous PAAS evidence does not become commercial-ink, dosage or shelf-life advice. Long heading/paragraph flow remains readable. |
| INK-06 | Current TDS, SDS, relevant lot CoA, application/trial data × three fields | Desktop four-row table, tablet two-column records, mobile one-column records preserve every name, support role and check field. Thin separators and labels keep relationships clear. |
| INK-07–08 | Matched-condition trials, declared endpoints and accepted-output economics | Complete paragraphs retained; no process suitability, universal endpoint, price or savings claim added. |
| INK-09 | M-350 → M-510 → M-52 → M-2377, four equal records | Correct exact registered targets and equal visual treatment, followed by multi/unknown-Grade guidance and Explore All Products. No winner, process label or implicit ranking. |
| INK-10 | Documents, Sample, RFQ; full descriptions and RFQ follow-up expectation | Three cards at 1440, stacked at 768/390. Documents keeps one known Grade and multiple document types; Sample keeps unknown Grade and separately confirmed arrangement; RFQ keeps estimated MT, lead Grade and Additional Requirements distinction. Three unparameterized owner hrefs agree with C. No receiver was tested. |
| INK-11 | Six numbered sources and six external URLs | All attribution, dates/editions, research versus standard scope and qualification text remain visible at all widths. External URLs match approved B. No new web research or current source-status revalidation is claimed. |
| Geometry and targets | Three full viewports; visible default controls, open menu links and Cookie actions | `ACTUAL_RUNTIME`: scroll width equals viewport, controls at least 44×44px, no clipped content or collisions. H1 heuristic font line-box overshoot is visible overflow, not actual clipping; native pixels and Range widths resolve it. |
| Body link focus | All 18 links at each width, 54 actual Tab reaches | `ACTUAL_RUNTIME`: all receive visible focus. Original 390 BODY_LINK_FOCUS image confirms the outlined breadcrumb state. |
| Hero anchors | Both links actually clicked at all three widths | `ACTUAL_RUNTIME`: six target arrivals within 2px of the declared 20px margin after smooth scrolling. Initial fixed 350ms samples were premature, retained in observations and resolved by [supplement.json](supplement.json). |
| Mobile menu | 768 and 390 separately | Actual click and keyboard open, Home initial focus, both wrap directions, Escape, toggle close, navigation selection, breakpoint exit, background isolation/restoration and return focus. Menu selection uses `LOCAL_SIMULATION` only to prevent navigation departure; actual close behavior ran. Eight menu target values were individually checked. |
| Cookie | 1440/768/390 separately, including the mobile stacked actions | Actual click and keyboard open, Close initial focus, backward/forward wrap, Escape and close-button exit, return to Cookie Settings, attempted background focus rejection. Native dialog stays in viewport; all buttons/links meet target size. |
| Shared owner assembly | Header, Footer, dialog behavior/CSS, production logos, legal utility links | Header/Footer/script byte-match approved G3; owner CSS matches after documented `{{FONT_SRC}}` expansion. `supplement.json` raw-template false is resolved in `coverage.json`, not a page defect. Current item is Applications; no visible CURRENT or Terms. Exact 84/64px header, fixed RFQ, logo dimensions and legal links retained. |
| Functional colors / hover | Main primary/secondary, body/source links, header/footer RFQ; normal and focus states | Actual style/hover observations plus static state pixels. Teal/white 4.818:1, teal/soft 4.520:1; Navy hover/white 13.959:1. Source link underline and focus remain discoverable. |
| Reduced motion / no-media / no-JS | Three-width reduced-motion setting; 390 no-JS context | Reduced motion makes scrolling auto. No optional page media to fail; all 11 modules and 18 ordinary body links survive disabled JavaScript. No-JS menu/Cookie interaction is not claimed. |

All seven original state images were opened: 1440 Cookie; 768 Menu and Cookie; 390 Menu, Cookie, Body Link Focus and Grades Anchor. There are no page form error/success, empty selection, FAQ, filter or media states because this approved page contains none. Ordinary body links have native anchor behavior with no instance-specific handlers; each target/label was checked, while off-page destinations remain the listed owner dependencies. No author behavior result was inherited as Reviewer execution.

The most demanding regions were the 768 document records and 390 request/source sections. Both preserve complete context without truncation. The source-title inline-block model can place the following period at the next line; this is readable, matches the retained exact content, and does not alter source attribution. Compact 12px record labels and 13px eyebrow are supporting text, while substantive mobile body is 16px and sources 15px; the labels remain readable with 5.434:1 contrast. No mandatory correction is asserted from a purely typographic preference.

## Findings, retained dependencies and limits

Required Findings: **none**. No unresolved content/structure/brand/shared-owner conflict. This initial report is the complete valid coverage chain for the named bundle; there is no Gate 5 correction or targeted rereview to inherit.

Keep original dependency identities and owners from [Gate 3→4 handoff §F](../APP-INK_GATE3_TO_GATE4_HANDOFF_V0.1.md#f-shared-and-retained-dependency-disposition). That source uses descriptive row keys rather than new numeric IDs; they are preserved below. They remain OPEN / DEFERRED within their approved receiving phases and must not be represented as verified production behavior.

| Original dependency identity | Owner / phase | Acceptance and blocking point |
|---|---|---|
| Provisional URL and canonical eligibility | Architecture / route registry owner; Project Control / Gate 6 | Unique Page ID, intent and recorded route/canonical decision within `tio2-my`, no fallback. `APP-INK-G1-I02` remains provisional; unresolved production eligibility prevents release. |
| Eligible Grade destinations | Respective Grade owners; Product relationship authority / Gate 6, implemented Gate 8 | Four registered destinations resolve, fixed neutral set/order retained, no process/rank/equivalence. Must verify in implementation before release. |
| Technical Documents receiving behavior | `CONV-DOC` / Gate 6, implemented Gate 8 | One known Grade, one or more document types, separate Grade requests, human availability/scope review; no transfer of unknown-Grade/MT/Additional Requirements into this route. |
| Sample receiving behavior | `CONV-SAMPLE` / Gate 6, implemented Gate 8 | Known/unknown Grade, Printing Inks, destination/test objective, review then separately confirmed arrangement; no RFQ-only fields transferred. |
| RFQ receiving behavior | `CONV-RFQ` / Gate 6, implemented Gate 8 | Known lead Grade or Not sure / Need help, required/estimated MT, destination, others in Additional Requirements; only approved review/contact outcome. All three receivers require actual Gate 9 verification before release. |
| Header/Footer/legal utilities and Cookie mode | Global Chrome; legal/privacy/CMP owners / Gate 6, implemented Gate 8 | Current Applications, fixed RFQ, approved Logos, exact three legal links plus Cookie function, no Terms; correct Cookie mode and focus/exit behavior in actual implementation. Shared release conditions remain. |
| `tio2-my` page integration | Independent development / Gate 8 | Approved content/metadata and route/query/cache/menu/SEO/media/form scope; no cross-scope data or fallback; destination owner contracts honored. Gate 9 verification required before release. |
| Runtime, device and accessibility acceptance | Independent Gate 9 QA owner / Gate 9 | Actual 1440/768/390, keyboard, native 200% browser zoom/reflow, representative touch device/assistive technology and real routes/forms/Cookie/canonical/Schema/indexing acceptance. Untested here; release blocked until satisfied. |

Metadata title/description agree with approved B/C. No final canonical or extra Schema type was introduced in the prototype. Visual PASS does not prove live destinations, recipient delivery, CMS/Schema, isolation, actual devices, native 200% browser zoom, or production accessibility. No real submissions, external messages, D16 implementation or production operations occurred.

## Delivery

[observations.json](observations.json), [supplement.json](supplement.json) and [coverage.json](coverage.json) contain the measured evidence and exact identity bindings. Reproduction scripts: [inspect.cjs](inspect.cjs), [supplement.cjs](supplement.cjs), [finalize.cjs](finalize.cjs). Initial timing/template comparison limitations are retained and explicitly resolved. The 19 temporary native-scale reading crops are listed for traceability and removed after review; [cleanup.json](cleanup.json) records exact deletion and zero remaining files. Persistent new screenshots: **0**.

Recommended next owner: `/root` Controller receives this exact review and named visual bundle, verifies independence, authority and open dependency ownership, and handles the single permitted visual closure under standing authority. Reviewer stops here; Gate 6 remains unstarted.
