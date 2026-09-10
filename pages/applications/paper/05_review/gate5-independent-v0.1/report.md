# APP-PAPER — Gate 5 independent visual review V0.1

Date: 2026-09-07. Review ID: `APP-PAPER-G5-INITIAL-01`. Technical conclusion: **REVIEW_PASS**. Required Findings: **0**. This is the single INITIAL independent review of the frozen complete visual candidate; it is not Gate closure or Gate 6 authorization.

## Identity and admission

| Field | Reviewed value |
|---|---|
| Dispatch | `G5-9PAGE-REVIEW-20260907-01/APP-PAPER/INITIAL` |
| Page / language / scope | `APP-PAPER` / EN / `tio2-my` |
| Route | `/applications/titanium-dioxide-for-paper/` — `PROVISIONAL_URL` |
| Mode / scope | `INDEPENDENT_REVIEW` / `INITIAL` |
| Actual author | `/root/gate4_paper_execute` |
| Actual independent reviewer | `/root/g5_paper`; different actual instance; no authorship of the candidate |
| Review authority | `docs/architecture/GATE5_NINE_PAGE_REVIEW_CONTROL_V1.0.md`; user instruction “用子代理执行”; root dispatch to this reviewer |
| Original execution authority | `G4-REMAINING-8-EXEC-01`, retained execution-time snapshot in the frozen workset |
| Approved upstream Manifest | `pages/applications/paper/APP-PAPER_CURRENT_GATE_BASELINE_MANIFEST_V0.6.md` |
| Candidate handoff | `pages/applications/paper/05_review/APP-PAPER_GATE4_TO_GATE5_HANDOFF_V0.1.md` |
| Workset / bundle / freeze | `APP-PAPER-G4-WORKSET-V0.1` / `APP-PAPER-G4-BUNDLE-V0.1` / `APP-PAPER-G4-FREEZE-V0.1` |
| Method | Gate 5 Agent V0.4; layout-interaction-verification V0.8, independent-visual-review reference V0.2; consumption baseline V1.9 |
| Compatible lifecycle | Review stage `GATE5_INDEPENDENT_VISUAL_REVIEW`; complete visual lifecycle remains under merged Gate 4; Controller receives this technical result |
| Write / stop boundary | Only this `05_review/gate5-independent-v0.1/` directory; no candidate repair, Manifest/shared-entry changes, Gate closure, Gate 6, D16 work, real submission, external message or publication |

The old Manifest accurately records approved Gate 3, while the supplied handoff selects the newer frozen candidate. They are different objects with different lifecycle purposes; this is not an admission failure. Original execution authorization, approved A/B/C and approved Gate 3 closure/handoff were read, not inferred from the author’s PASS.

Review inputs actually read include root AGENTS, PROJECT_CONTEXT and Index; current workflow, applicable complete-visual/common standard and governance sections; Directory Guide; role, method, core-risk and both current handoff contracts; current baseline; complete Paper Brief and A V0.1/B V0.2/C V0.2; Gate 2 approval; approved Gate 3 source, final rereview, closure and formal handoff; Application Playbook; Registry/keyword ownership for Paper and adjacent Application/Grade owners; current PRODUCT V0.3 Paper rows/unified audit; applicable decision/origin records; brand/CTA/Logo/Chrome/legal/Consent sources and consumer Manifest; and the complete Gate 4 source, input/freeze/evidence records, visual rules, self-check and formal capture records. No nested AGENTS applies in the accessed page/brand/docs/agents/skills paths. Historical Playbook M-2377 restrictions and child-page startup limits are superseded by the specific current decisions; they were not silently revived.

## Frozen binding and machine evidence

All paths in this table are under `D:/23MySec/pages/applications/paper/04_planning/gate4-v0.1/`.

| Object | Bytes | SHA-256 |
|---|---:|---|
| `APP-PAPER_GATE4_COMPLETE_VISUAL_V0.1.html` | 35364 | `e3d7907131d98b987328bf084ba80ed90476363e3caa9936252c5558784bac9f` |
| `APP-PAPER_GATE4_FREEZE_RECORD_V0.1.json` | 4846 | `d651176789a166a5034301e1c1d399bd1b32fd2b7e807a335c9891842e8e748e` |
| `APP-PAPER_GATE4_INPUT_INDEX_V0.1.json` | 12494 | `b7a09afaeacc4a193f4e4aa688ad9ebe04a181908410f651531616a49ea2e793` |
| `APP-PAPER_GATE4_EVIDENCE_INDEX_V0.1.json` | 16936 | `bd830897a0c9748a13f15bb70efdb48d302e718569a7e8bc283abc7a72793931` |

Independent scripts [verify.cjs](verify.cjs) and [verify-supplement.cjs](verify-supplement.cjs) were run using `node` from D23 against the read-only local HTML, with isolated headless Edge `152.0.4191.66` via Playwright, Inter loaded, DPR 1 and reduced motion. They do not execute the author’s build/capture/finalization scripts. [observations.json](observations.json) contains the exact input/source/method identities, every audited reference, PNG dimensions, raw geometry, link/record mappings and operations. [supplement-observations.json](supplement-observations.json) adds actual text/pseudo-label contrast, complete body-link keyboard traversal, current navigation, Menu toggle/background, Cookie control color/size and a no-JS anchor.

The two independent runs contain 75 checks, 0 failed. The file audit recomputes 136 reference occurrences with bytes/SHA and declared PNG physical dimensions, 0 mismatches. There is no unresolved dynamic-governance hash drift in this bundle. Counts describe coverage, not a quality score. The captured formal source lock and preflight precede formal capture; the final freeze binds that evidence index. Actual local height/font/dependency observations match the declared formal rendering conditions. Author capture provenance is identified as provenance, not this reviewer’s operation evidence.

Current method SHA-256 bindings were independently calculated: Agent `e7cb61d0663bb3fa2088ae115e7d611515db0ce54b517f145c947008e40ca2f9`; Skill `27dbcf7a2815af08543f3579f4e0eb93de73bfe41246e6d9879793cdde725884`; independent reference `a5816b700851f19df9604a5eebc7c94917b50fc25678bfbed8c73740c1530208`; baseline V1.9 `4db2a35af7c2deb92511d93989f304eff337bcf0440b50b0915b4b669de57f4a`. The 4→5 and 5→6 contract identities are also recorded in `observations.json.binding.methods`.

## Complete coverage and judgment

| Requirement / instances | Viewports and evidence | Result |
|---|---|---|
| PAPER-01–11, including every paragraph, list, technical record, request explanation and source | 1440×1000, 768×1024, 390×844; STATIC_VISUAL plus ACTUAL_RUNTIME and SOURCE_INSPECTION | Approved B text and all 15 body links match; Gate 3 main markup is byte-identical. Eleven-part order is intact. No A-only breadcrumb/eyebrow, extra claim, hidden taxonomy, canonical or Schema was added. |
| Complete reading and section connections to Footer | Formal full PNGs 1440×8696, 768×9651, 390×14664; eight existing READ_PANEL files; runtime scroll intervals cover the complete extents | All read, including 10/11/20 overlapping browser scroll intervals respectively. No crop, collision, abnormal fixed whitespace or broken Footer closure. |
| Four optical properties and four evidence roles | Desktop three-column tables; tablet two-record rows; mobile single labelled records | Property/method/context and role/answer/limit remain paired. D65/10°, L*, UV/FWA, lot/method limits and all long labels remain readable. No sideways-only table access. |
| Identity → laboratory → next evidence → cost-in-use chain | PAPER-05–08, all three widths | Full technical progression and qualified evidence meanings retained; visual emphasis does not turn the discussion into a pass/fail product selector. |
| Two neutral Grades | PAPER-09 and formal 390 Grade-anchor state | M-350 then M-2377; equal row/card surfaces, labels, type and link weight. Neither is selected, ranked or recommended. Complete multiple/unknown Grade explanation retained. |
| Seven sources | PAPER-11 plus formal 390 source state | All seven full source titles/targets, editions/dates and scoped status language retained, including ISO 186 revision note. No project Grade result is visually attributed to a general source. Source-link punctuation wrapping is natural and does not obscure identity. This is preservation review, not a new external standards-status audit. |
| Shared Chrome and legal/Consent | All widths; two formal Menu and three formal Cookie states | Exact owner-generated Header/Footer/dialog/CSS/behavior payloads and production SVGs. Applications current treatment, fixed RFQ, no visible CURRENT or Terms, three legal links and Cookie Settings remain correct. |
| Typography, targets, contrast, motion | Default three widths and open overlays; actual styles and geometry | Visible targets have both dimensions ≥44px. Text and pseudo-label checks meet 14px minimum and applicable contrast thresholds; minimum sampled default ratio is 4.8177:1. Reduced-motion scroll is `auto`; no decorative media or animation requires another state. |
| Both Hero anchors and all body-link keyboard paths | Both anchors actually clicked at all widths; all 15 body targets reached by Tab at all widths | Anchors reveal the intended section near the viewport top with visible target outline. Focus is visible; links keep approved owner/source hrefs and carry no inferred prefill. |
| Menu entry, cycles, exits, background and breakpoint | Independent operations at 768 and 390 | Home entry; forward/back loops; background inert/focus blocked; Escape, Close-toggle and link selection close; background restored; desktop breakpoint closes menu. Link selection used a one-use prevented navigation default, explicitly LOCAL_SIMULATION for destination navigation only. |
| Cookie entry, cycles, exits and background | Independent operations at 1440, 768 and 390, including stacked mobile actions | Close entry; both loops; modal background focus blocked; Escape and Close restore Cookie Settings focus; visible actions satisfy 44px and functional Teal. Current no_optional_analytics disclosure is inherited from owner. |
| No-JS and effective reflow | 390 no-JS full core content/15 links and native Grade anchor; 720px effective viewport | Core content and native links remain usable without page JS. 720px has no horizontal overflow/cropping; explicitly a desktop 200% reflow proxy, not real-browser zoom certification. |

Visual reading used all 11 original `approval_core/APP-PAPER_GATE4_*_FORMAL_V0.1.png` files. The full-page thumbnails only established overall rhythm; readable coverage came from `diagnostic_support/READ_PANEL_1440_1–4.png`, `READ_PANEL_768_1–2.png` and `READ_PANEL_390_1–2.png`. Each panel was read top-to-bottom within its column, then left-to-right, with continuity across panels. Independent raw-pixel comparisons prove every panel slice equals the corresponding formal original: desktop 2200px slices; tablet two columns of 2450px; mobile three columns of 2450px, trimming only final padding. This covers every source pixel to the page bottom without making new raster evidence.

Runtime hover/focus measurements separately cover Hero primary/secondary, Grade links, request actions and long source links on their actual backgrounds at every required width. Same-review equivalent instances are the remaining plain Grade/request/source anchors: their common implementation has no individual event handler or behavior-changing breakpoint branch, and every label/href, content relationship, actual hit region and keyboard reachability was individually checked. This does not inherit the author’s self-check as reviewer behavior evidence or imply that external receivers were visited.

The hardest positions were the long optical method/context records, evidence-role limits, the PAPER-05–08 reading sequence and seven long source links. Original images and independent geometry support their readability. The most failure-prone local paths—Menu focus/isolation and Cookie focus restoration—were operated directly. Geometry alone was not used to infer visual quality.

## Findings and retained dependencies

New Gate 5 Findings: `[]`. No required issue, unresolved contract conflict or mandatory current-stage untested item remains. No optional stylistic change is required for acceptance. The prior upstream `APP-PAPER-G3-PCR-F01` remains `CLOSED_BY_INDEPENDENT_REREVIEW`; this review does not reopen its corrected chronology or change its original review chain.

The following OPEN dependencies retain their original IDs where issued and original labels where no ID was issued. They come from the approved C, Brief §14, Gate 3 initial review §5, approved Gate 3→4 handoff and Gate 4 handoff; no competing dependency ID is created here.

| Original item / source | Owner and acceptance | Verification / stop boundary |
|---|---|---|
| `APP-PAPER-G1-I02`; “Route/canonical eligibility” | Architecture and Grade/Product/conversion destination owners: authorize final route/canonical; make owner destinations valid; omit only ineligible links/cards without fallback, negative suitability or hidden relation | Gate 6 records; Gate 8 implements; Gate 9 verifies. Unresolved final route/canonical or destination failure blocks affected production eligibility/release. |
| `APP-PAPER-G1-I03`; “Documents” | CONV-DOC: one known Grade, one or more document types, separate requests for another Grade; actual human availability/scope review and owner receiver behavior | Gate 8/9. Local link operation proves neither receipt nor document availability; receiver/access/account conditions remain open to their owner. |
| “Sample” — upstream review §5 | CONV-SAMPLE: known/unknown Grade, Paper, destination/test objective; review begins on submission; arrangements confirmed separately | Gate 8/9; unverified production reception/behavior prevents release acceptance of that function. |
| “RFQ” — upstream review §5 / C §3 | CONV-RFQ: known lead Grade or Not sure, required/estimated MT, destination and known context; additional Grades in Additional Requirements; actual requirements review and contact outcome follow owner contract | Gate 8/9; no actual request or receipt was tested in this review. |
| “Global Chrome / legal / Consent owners” — upstream review §5 | Shared owners: exact navigation/Logo/fixed RFQ/legal links and no_optional_analytics behavior without page fork; production overlay/focus/consent verified | Gate 8/9; current shared release blockers remain, including legal/operational/account matters in their current Manifests. New Google-active consent state needs separate owner approval. |
| “CMS/SEO/scope” — upstream review §5 | Gate 6/8 owners: B is sole content authority; SEO/Schema mirror visible approved facts; `site_scope=tio2-my` covers content, query, routes, menus, forms, media and cache with no cross-scope fallback | Gate 6 contract; Gate 8 implementation; Gate 9 acceptance. Unverified/failed isolation or semantic parity blocks release. |
| “Visual and accessibility completion” — upstream review §5 | Complete planning visual coverage is satisfied by this review. Actual implementation, real devices, assistive technology and actual browser zoom remain Gate 8/9 responsibilities | Gate 9 must verify implemented result; this planning PASS does not establish deployed conformance. Gate 10/release remains separately authorized. |

No form, field validation, success/error screen, filter, FAQ, selection widget, page media or optional-analytics banner exists in the approved candidate: these are NOT_APPLICABLE here. Production route-omission/configuration, external destination/standards freshness, real receiver processing, CMS/cache/Schema, analytics and release were not tested and are not claimed complete. Their allowed deferral does not disguise a current visual defect.

## Return and preservation

Return **REVIEW_PASS** for the exact bundle above. INITIAL coverage is complete in this report and its two independent observation files; no Gate 5 rereview chain is needed. Root Controller should receive the identity/coverage/independence/dependency record and apply any authorized closure separately. Do not start Gate 6 from this result.

New persistent screenshots: **0**; no screenshot trigger arose. Existing evidence was read in place. No task-created temporary image/crop/cache files exist to clean; all isolated browser contexts/processes were closed by the scripts. The only task-authored files are this report, two verification scripts and their two observation JSONs. Frozen assets, author indexes/reports, current Manifest, Status, Index and shared inputs remain read-only. The saved report and its references are read back before return.
