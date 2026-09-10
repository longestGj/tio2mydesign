# SYS-404 Gate 3 Independent Review V0.1

## 1. Control and verdict

| Field | Value |
|---|---|
| Date | `2026-09-08` |
| Dispatch | `G3-SYS404-EXEC-20260908-01` |
| Reviewer | `/root/sys404_gate3_review` |
| Executor | `/root/sys404_gate3_execute` |
| Review mode | `INDEPENDENT_REVIEW / INITIAL` |
| Candidate | `SYS-404-G3-CANDIDATE-01` |
| Verdict | `INDEPENDENT_REVIEW_PASS / READY_FOR_PROJECT_CONTROL_CLOSURE` |
| Required Findings | `0` |
| Suggestions | `0` |

The reviewer identity is separate from the executor. This verdict submits the exact frozen candidate for Project Control closure; it does not approve Gate 3, start Gate 4, or claim production implementation.

## 2. Frozen combination and identity audit

The reviewed source is `04_planning/gate3-v0.1/SYS-404_GATE3_WIREFRAME_V0.1.html`, 13,505 bytes, SHA-256 `17F3445856F0666ADB9898F303331AD35A656BBB2153B46B243CCE48B81F125A`. It matches the source identities in `preflight-record.json`, `freeze-record.json`, `asset-inventory.json`, and the formal `approval_core/runtime.json`. The freeze records `formal_assets_created_before_freeze=0`.

[Independent asset audit V0.1](SYS-404_GATE3_INDEPENDENT_ASSET_AUDIT_V0.1.json), SHA-256 `A31B27D758B2846D4EAADFE6DA0F2005042B44586CDF6BB34B1D28CC55DDB227`, independently recalculated paths, bytes and hashes. All 15 approval-core records match; all eight declared formal PNGs match their bytes, hashes and PNG-header dimensions; approved Gate 2 A/B/C, Gate 2 closure, Brief, approved design, current Manifest V0.5, shared consumer V0.2, shared files, Logo files and local font dependencies match `input-binding.json`.

The current shared package is `TIO2MY-GATE3-SHARED-CONSUMER-002 / V0.2`. Source inspection confirms the candidate assembled its Header, Footer, Mobile Menu, Cookie Settings, current-state behavior, production-approved Logo files and Inter dependency from that package/owner combination. The SYS-404-specific generation exception removes only the two generated `aria-current` attributes after creating neutral shared markup; both navigation surfaces contain zero current links as required.

## 3. Direct visual review of approval core

The reviewer directly opened all eight formal PNGs at original detail:

| Evidence | Direct visual observation |
|---|---|
| `SYS-404_G3_1440-full.png` | Complete Header, recovery content and Footer are present. The exact eyebrow, H1 and body are readable. Two Primary actions precede three Supporting actions, with distinct fill/outline hierarchy. No false current item is visible. |
| `SYS-404_G3_768-full.png` | Complete page reaches the Footer. Both action groups wrap without collision or truncation; all five labels remain distinct and ordered. |
| `SYS-404_G3_390-full.png` | Complete page reaches the copyright line. Exact content is readable; all five recovery actions reflow to one full-width column and preserve the approved two-plus-three grouping and order. |
| `SYS-404_G3_1440-cookie.png` | Cookie dialog is complete and legible; both actions are visible; backdrop separates the modal from the page. |
| `SYS-404_G3_768-cookie.png` | Cookie dialog fits the active viewport without clipped copy or controls. |
| `SYS-404_G3_390-cookie.png` | Copy wraps naturally; Close and Read Cookie Policy become full-width controls and remain complete. |
| `SYS-404_G3_768-menu.png` | Mobile navigation exposes the complete approved order through Request a Quote; Close is available and no current marker appears. |
| `SYS-404_G3_390-menu.png` | The same complete menu order remains readable and operable at the narrow viewport; no false current marker appears. |

No search, FAQ, form, image, recommendation, redirect message, product list, visitor-blame copy, internal status or invented recovery state appears in the page-owned content.

## 4. Independent runtime and source verification

The reviewer ran the frozen local source in headless Chrome `152.0.7977.82`, DPR 1, without retaining duplicate screenshots. [Runtime observation V0.1](SYS-404_GATE3_INDEPENDENT_RUNTIME_OBSERVATION_V0.1.json), SHA-256 `FEF49BF809AD5A796B1F5418663CD10206998005F5D182049FC43D911A048307`, checked the fixed core at 1440, 768 and 390 plus the 1440-to-720 CSS-pixel 200% equivalent. Its content, ordering, action, geometry, overflow, Footer, target-size, Cookie and local-network checks passed. Five reported failures were caused by two incorrect reviewer-script expectations: programmatic focus was used to infer `:focus-visible`, and the Menu loop expected the wrong boundary order. They are diagnostic-tool failures and are retained rather than relabelled as candidate Findings.

[Corrected runtime observation V0.2](SYS-404_GATE3_INDEPENDENT_RUNTIME_OBSERVATION_V0.2.json), SHA-256 `F70B17C10694BE2088075AD227D16672E1E4EF265C13FAABE348F49B3481843F`, reran the affected paths using keyboard entry and the actual Menu boundary. All 21 checks passed:

- Keyboard Tab enters the first Primary recovery action with a visible 3px focus outline at 1440, 768 and 390.
- At 768 and 390, Menu open moves focus to Home, makes main/Footer/Logo/fixed RFQ inert, locks background scrolling, loops focus between the Close control and final menu action, closes by Escape and by selection, and restores focus to Menu.
- At all three widths, Cookie Settings opens as a modal with focus on Close, loops focus across its two controls, closes, and returns focus to the Footer trigger.
- All tested navigation events were intercepted as `LOCAL_NAVIGATION_INTENT_ONLY`; no external network request occurred.

The independent geometry run found no horizontal overflow, complete Footer extent, and no visible target below 44px in either dimension. At 390, every page-owned recovery control is 350×48px. The 720 CSS-pixel reflow used as the approved 200% desktop equivalent has equal scroll/client width, retains complete Footer extent and retains all visible targets at or above 44×44px.

## 5. Fixed core and page-specific risk conclusion

| Scope | Conclusion | Evidence type |
|---|---|---|
| Frozen identity | Exact source, approved input, shared package, dependencies and formal assets form one matching frozen combination | `SOURCE_INSPECTION` / independent asset recomputation |
| Content and relationship | Exact `BC-01`–`BC-08`, exact five targets, fixed order, two Primary plus three Supporting grouping, and exclusions hold at all three widths | `STATIC_VISUAL` / `ACTUAL_RUNTIME` / `LOCAL_SIMULATION` |
| Responsive geometry | 1440/768/390 full pages reach Footer; 390 becomes one column; no clipping, collision or horizontal overflow; visible targets meet 44×44px | `STATIC_VISUAL` / `ACTUAL_RUNTIME` |
| Shared assembly | Current V0.2 consumer, approved Logos, complete Header/Footer/legal utilities, fixed RFQ, Menu and Cookie Settings are assembled; current count is zero per surface | `SOURCE_INSPECTION` / `STATIC_VISUAL` / `ACTUAL_RUNTIME` |
| Coverage-layer operation | Menu and Cookie focus entry, loop, exit, inert background and focus return pass on the applicable independent paths | `ACTUAL_RUNTIME` |
| Action boundary | All five exact hrefs emit navigation intent with an empty context object; no form success or receiver behavior is represented | `LOCAL_SIMULATION` / `SOURCE_INSPECTION` |
| Page-specific compact recovery risk | The five choices do not collapse into an undifferentiated list: group elements, visual hierarchy, spacing and 390 reflow preserve the approved two-plus-three relationship | `STATIC_VISUAL` / `ACTUAL_RUNTIME` |

The hardest reading point is the five-action recovery choice at 390; the full-page image and runtime geometry show complete labels, distinct group spacing and preserved order. The most failure-prone operation is focus restoration after Menu or Cookie dismissal; corrected independent keyboard runs pass. The highest-risk responsive conversion is the desktop/tablet rows becoming a 390 single column; no object relationship, label or action is lost.

## 6. Findings, untested scope and authority boundary

Required Findings: **0**. No Gate 3 visual suggestion is necessary. Later Gate 4 work may refine unlocked typography, spacing and surfaces within the frozen structure without reopening this result unless it changes a locked relationship or behavior.

The following are deliberately untested production dependencies and remain with their existing owners: actual HTTP 404 delivery, protection of valid routes, live availability of five destinations, production robots/sitemap/canonical/Schema behavior, analytics path sanitization and consent enforcement, and `site_scope=tio2-my` isolation. The local 720-width check verifies the approved 200% structural equivalent; production-device/browser zoom belongs to later runtime acceptance. None is represented as implemented by this review.

This review added only this report and two independent runtime observations plus one asset-audit JSON under `pages/system/404/05_review/`. It did not modify the frozen source, evidence index, Manifest, Status, Index, shared owner files, any other page, or any development workspace. Gate 4 remains unauthorized by this task.
