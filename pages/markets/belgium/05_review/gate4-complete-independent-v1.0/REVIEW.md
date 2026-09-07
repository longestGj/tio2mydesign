# MARKET-EU-BE merged Gate 4 independent review V1.0

2026-09-07 · Review ID `BE-G4-IR-20260907-01` · **CHANGES_REQUIRED — required Finding 1 (P2)**.

Reviewed workset `BE-G4-COMPLETE-20260907-01`, freeze `BE-G4-FREEZE-20260907-01`. This reviewer did not produce Belgium's candidate. Candidate, dependencies, approved sources and Manifests were read-only. Review artifacts are confined to this new Belgium `05_review` directory. No user approval, Gate 6, implementation or publishing action is implied.

The full candidate is suitable in its content, module relationships, responsive composition and shared assembly, but its two Documents paragraph links need a focused-state clearance repair before the frozen combination can pass final review. The executor's “unresolved Findings 0” conclusion is superseded by this independent finding for review purposes; the source and that historical self-check have not been edited.

## Required Finding BE-G4-IR-01 · P2

**Problem:** In BE-04, `Product Hub` and `quotation request` are 44px-high inline blocks with the general `outline:3px solid #008078; outline-offset:4px`. There is no clearance around these blocks for the resulting 7px exterior focus outline. At 1440, 768 and 390, keyboard focus places the outline against or through neighboring text. The Product Hub right stroke overlaps the start of `or`; the quotation-request left stroke touches the preceding `the`, while the right stroke crowds/intersects the adjacent period. At 768, the top stroke also meets text on the preceding line. This is visible in the executor's focus images and in six independent screenshots; it is not a hypothetical production issue.

**Source location:** [candidate HTML line 23](../../04_planning/gate4-v1.0/MARKET-EU-BE_GATE4_COMPLETE_VISUAL_V1.0.html:23) defines the exterior focus outline; [line 32](../../04_planning/gate4-v1.0/MARKET-EU-BE_GATE4_COMPLETE_VISUAL_V1.0.html:32) makes BE-04 paragraph links inline blocks without focus clearance. The affected copy and punctuation wrapper occur on line 36.

**Reproduction:** Load the exact frozen HTML in Chrome at each required width. Tab to BE-04 `Product Hub`, then Tab to `quotation request`. Keep hover off and inspect `:focus-visible`. Independent screenshots: [1440 Product Hub](inline-focus-1440-0.png), [1440 quotation request](inline-focus-1440-1.png), [768 Product Hub](inline-focus-768-0.png), [768 quotation request](inline-focus-768-1.png), [390 Product Hub](inline-focus-390-0.png), [390 quotation request](inline-focus-390-1.png).

**Measurement:** `independent-runtime-and-identity.json → focusCollisions` records actual link rectangles, computed outline width/offset, four outline bands and intersecting neighboring character Range rectangles. Character boxes are conservative; visual inspection independently confirms the neighboring text/stroke collision. The six failed checks represent this one root cause, not six Findings. All affected links still satisfy 44×44 and focus contrast; those facts do not establish text clearance.

**Required correction:** Apply a page-local rule to the two BE-04 paragraph links so the complete focus indicator stays clear of its own label, neighboring words/punctuation and adjacent lines. An inset outline with sufficient inline padding is one viable approach; alternatively allocate measured exterior clearance and line spacing. Retain each actual target at least 44px in both dimensions, preserve visible link semantics and ≥3:1 focus contrast, and keep normal/focus geometry stable. Preserve approved B text, link destinations, all five module relationships, quiet COO treatment, subordinate EU action and the shared owner CSS/behavior. Do not modify the shared Chrome contract to fix a page paragraph.

**Re-review conditions:** Submit a new candidate/freeze identity; keep this rejected freeze immutable. At 1440/768/390, provide normal, hover and actual keyboard focus evidence for both links with zero text/outline collision. Recompare full B and link sequence, target geometry/contrast and overflow. Regenerate any whole-page or continuous segment evidence whose pixels/layout changed and prove retained evidence is unchanged. Refresh the new source/evidence SHA-256 bindings, self-check and Manifest draft, then request independent focused re-review. Unaffected approved direction and valid evidence may be carried forward with explicit identity/coverage mapping.

Basis: current [Gate 4 standard §4.4](../../../../../docs/architecture/PAGE_GATE_1_4_STANDARD_V2.1.md) requires complete three-width visual/keyboard/focus validation; [layout interaction verification](../../../../../skills/layout-interaction-verification/SKILL.md) requires measurement and visual inspection of text/control collisions (lines 56–60) and actual operation evidence (lines 68–75).

## Scope and independently verified results

- **Read admission and authority:** root AGENTS and Context, current Belgium V0.6/V0.7, Brief V0.2, approved B V0.2/C V0.1, Gate 3→4 handoff, submission and resumed execution record, current registry/keyword ownership, direction, workset, input and freeze records. Current workflow/standard, Agent, all three Skills and risk model, governance, brand/CTA, shared Chrome/Logo/legal/consent contracts were previously fully read by this same reviewer; 37 reusable common-source identities were independently reconfirmed unchanged. This is reuse of actual reading, not another agent's summary.
- **Identity:** 109 unique path/hash bindings recursively collected from freeze/input/evidence records independently match actual SHA-256 and bytes, including all 42 indexed PNGs and four indexed observations. All remained unchanged after runtime review. Five final-delivery receipt bindings, including V0.7 and review submission, also match.
- **Visual evidence:** all 42 candidate images independently opened: 3 complete pages, 19 readable overlapping long-page segments, 2 Menu and 3 Cookie states, plus 15 focus/Footer views. Full-page previews were treated as overviews; readable segments cover every page from top to Footer. All 19 segments and three whole-page images independently rerender to exactly the indexed PNG SHA-256. Coverage is 0–3654 at 1440, 0–4170 at 768, and 0–5369 at 390, with 750px segment starts and up to 900px height.
- **Content/relationships:** complete visible B and ordered link label/destination sequence match independently at all three widths; also retained without JavaScript. One H1, five ordered BE modules, three correctly paired buyer contexts, neutral product review after the contexts, one exact COO sentence, selected-Grade/supplementary-Grade distinction, four RFQ preparation items and human review outcome remain intact. No new offer of every physical form, recommended Belgium Grade, local operation or trade assertion appears.
- **Visual composition:** desktop three columns, tablet label/detail rows, mobile complete stacked contexts; orderly heading hierarchy, industrial blue/teal palette, soft section rhythm, clear RFQ hierarchy and quieter EU exit. Complete Footer closure, no unexplained fixed void, content truncation or horizontal page overflow. The three whole-page heights follow real copy. No invented form/FAQ/result/error state or placeholder media.
- **Shared contracts:** exact renderer output matching for Header, Footer, Cookie dialog, CSS and behavior; Markets selected, fixed compact RFQ, primary/reverse production SVG identities and actual loaded images, actual custom Inter font, three legal links and Cookie Settings, current no-optional-analytics local state. No Terms route or local Chrome fork.
- **Actual controls and states:** all visible page, Menu and Cookie controls measured in normal, hover and keyboard focus states; minimum 44px width and height and applicable text/focus contrast pass. Menu first focus, two-way loop, Close, Escape, background inertness/focus rejection, wheel scroll lock/restoration, all eight selections and desktop-breakpoint close pass. Cookie initial focus, two-way loop, native modal background focus rejection, Close/Escape and focus return pass. The required inline-link collision is the sole failed core check.
- **Links/language:** all visible outbound link clicks produce the expected local navigation intents; RFQ carries only source page plus visible/editable Belgium destination, Documents only source page, product and informational exits no conversion prefill. English `lang` and no page hreflang variant; shared BM privacy utility is the approved legal link and does not create a Belgium language variant. No remote request is made by the local candidate.

Independent main run: 481 recorded checks, 475 pass and 6 failed manifestations of BE-G4-IR-01. Supplement: 48 recorded checks, 0 failures. These counts document coverage; they are not a quality score or pass threshold.

## Evidence identities and boundaries

Candidate HTML: `21689` bytes, SHA-256 `73aad15d48c3261b31e34e71288c95a73ec5ab2e869af611ecdbf270aead92dc`.

Freeze record: SHA-256 `ad3376e1f6b72f804f5ebec6335b2f022c004f346c535d10d12b9c374cd3791b`.

Candidate evidence index: SHA-256 `883db5666eb1fa2f3c343fbbdd0f8f27456e6beb4070d30281ca504cfbd6ca67`.

Manifest V0.7: SHA-256 `6dc915f84948344c00f8a64128d9f6dfe107f98d5b874354c82b51b3b25094ee`.

Independent [runtime/identity record](independent-runtime-and-identity.json): SHA-256 `40d387754a18c95cba680a66c8459f4c73e95fdfe2f06c783d3b25ff30a73acc`.

Independent [supplement and visual readback](supplement-and-visual-readback.json): SHA-256 `35d6f62001ef1de24224f983585542d263fda32015c79b64d4b8cedb3f1fd0e3`.

Reproduction: run `node review.cjs` and `node supplement.cjs` from this directory with the recorded local Playwright dependency available. Both write only review output here and read the fixed V1.0 source. Runtime Chrome `152.0.7977.82`, headless, local files, DPR1.

Only actual local operations are runtime proof. Navigation is `LOCAL_SIMULATION_NOT_RECEIVED`; receiver routing, backend prefill, actual submissions, real-device/non-Chrome behavior, native browser zoom, screen-reader speech and production consent/storage/tracking inventory remain unverified later QA. The submitted 720 CSS px/DPR2 reduced-motion observation is a local zoom-equivalent simulation, not native zoom evidence. Shared responsive-close focus falls to BODY when the old menu toggle becomes hidden; it closes and restores background correctly and is carried as a later implementation focus-management observation, not a new page-specific visual blocker.

Current outcome remains **CHANGES_REQUIRED / user approval pending**. Required Finding 1 must be closed by independent re-review before a project-control pass can be recorded. No Gate 6 work is authorized by this review.
