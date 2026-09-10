# CONV-THANK Gate 5 Independent Visual Review V0.1

## 1. Control and admission

| Field | Value |
|---|---|
| Date | `2026-09-08` |
| Dispatch | `G5-CONVTHANK-REVIEW-20260908-01` |
| Page / stage | `CONV-THANK` / `GATE5_INDEPENDENT_VISUAL_REVIEW` |
| Mode | `INDEPENDENT_REVIEW` |
| Actual author | `/root/conv_thank_gate4_execute` |
| Actual Reviewer | `/root/sys404_gate5_review` |
| Independence | `PASS`; different actual identities |
| Role / method | Gate 5 Independent Visual Reviewer Agent V0.4; layout-interaction-verification V0.8 plus independent-visual-review V0.2 |
| Target bundle | `CONV-THANK-G4-BUNDLE-20260908-01` |
| Frozen source | `CONV-THANK_GATE4_EDITABLE_SOURCE_V0.1.html`, SHA-256 `1EA39B622D4B918C2E86D406DC4C384236253850FE309496CEE950A24DBCA3A5` |
| Lifecycle on return | Gate 4 remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |

The handoff entry, authority Manifest V0.7, Gate 2 A/B/C, three-form impact audit, repaired Gate 3 V0.2 source/handoff, Gate 4 input/freeze/evidence records and the current brand/shared-owner contracts were read. The specified bundle, source, execution author and render entry were present. Independent recomputation found all 15 approval-core files present; actual bytes and SHA-256 values matched the evidence index, every asset bound the specified source hash, and all PNG physical dimensions matched their declarations. Admission passed and the review continued in the same report.

## 2. Actual visual and runtime coverage

The Reviewer opened all 15 original formal images at their stored resolution: Quote, Documents, Sample and Direct complete pages at 1440, 768 and 390; Direct Mobile Menu at 768 and 390; and Direct Cookie Settings at 390. The complete images were read through the Footer. No duplicate screenshot was saved because the source and existing images made the Finding below directly observable.

An independent Playwright run used Chrome with DPR1, light colour scheme, reduced motion and blocked HTTP(S) traffic. It ran each of the four states at 1440×900, 768×900 and 390×844 and separately exercised the eight fallback cases, Menu behavior at 768/390, Cookie behavior at 1440/768/390, all nine state-specific action instances and 720 CSS pixels at DPR2 as the 200%-equivalent reflow condition.

The run recorded 179 checks. 167 passed. The remaining 12 checks are the same Footer-order defect repeated across four states and three widths, so they form one Finding rather than 12 quality scores. The detailed result is `independent-runtime-observation.json` in this directory.

## 3. Fixed core and page risks

- Quote, Documents, Sample and Direct each showed exactly one mutually exclusive panel. Their exact H1, body, action labels and targets matched Gate 2 B/C at all three widths.
- Every success state used the visible check icon plus `REQUEST RECEIVED`; Direct contained neither. The three successful messages remained consistent while clearly preserving their quotation/document/sample wording and action pairs.
- The approved `request` key plus a matching acknowledged current-session marker selected the eligible local success state. Missing, unsupported, query-only, mismatched, stale, new-session, unacknowledged and obsolete `?type=quote` cases all resolved Direct without a receipt cue.
- `window.gate4ResultState` described every displayed state as `LOCAL_SIMULATION` and `productionReceiptProven=false`. No personal data, request reference, production-receipt claim or submitted detail appeared.
- Documents and Sample long text remained complete and readable at 768 and 390. All 390 action sets formed complete ordered columns without clipping or collision; Direct retained all three request actions.
- All visible controls met 44×44 CSS pixels, stayed inside the viewport and had visible focus. The page had no horizontal overflow or missing Footer. Mobile Menu focus isolation/loop/Escape return and Cookie Settings focus loop/Escape return passed in the independent run.
- Header/Footer/production Logo/fixed RFQ rendered across the approved surfaces; navigation current count was zero. Title, robots, base canonical and absence of page-specific Schema matched the Gate 2 contract.
- The Footer included the correct legal controls with no Terms link, but placed them before the copyright statement, contrary to the approved fixed order.

## 4. Finding

### `CONVTHANK-G5-IR-F01` — Footer legal utility sequence is reversed

| Field | Detail |
|---|---|
| Severity | `P1 / REQUIRED` |
| Owner | Gate 4 executor consuming the current shared-owner contract; escalate to the shared consumer owner if a compliant source cannot be consumed without a page fork |
| Location | Frozen source Footer and all 12 complete-page formal images; the Cookie state also shows the same underlying Footer order |
| Viewport / state | Quote, Documents, Sample and Direct at 1440, 768 and 390; shared Cookie context |
| Expected | Footer Legal Utility Addendum V1.0 fixes `© 2026 TiO2 Malaysia. | Privacy Policy | Dasar Privasi (BM) | Cookie Policy | Cookie Settings`; responsive wrapping may not change this order. |
| Observed | The source and complete-page images show Privacy Policy, BM Privacy, Cookie Policy and Cookie Settings first, followed by copyright. Actual Footer child order is `footerGrid → legalUtilities → copyright`. |
| Evidence | Frozen source SHA above; all 12 formal full-page images in `approval_core`; the checks named `<state> <viewport> copyright-first Footer order` in `independent-runtime-observation.json`. |
| Reader impact | The shared legal/navigation sequence differs from the approved site-wide Footer contract and breaks the required cross-page order. |
| Acceptance condition | Create a new versioned frozen source and bundle with Footer visual/DOM order `footerGrid → copyright → legalUtilities`, retaining exact copyright wording, legal control order/routes, semantic Cookie Settings button, no Terms, focus behavior and every CONV-THANK state/content/action rule. Regenerate the 12 affected complete-page assets and the affected Cookie-state evidence, rerun identity/runtime checks, and provide a change response. Menu assets may be inherited only when the new evidence index proves their presentation and capture conditions unchanged. |

## 5. Limits and conclusion

Production receiver acknowledgement, real session persistence, source-form failure/retry/duplicate behavior, live navigation and analytics, CMS/SEO/Schema integration, real-device/screen-reader behavior and `site_scope=tio2-my` isolation remain `THANK-DEP01`–`THANK-DEP07` work for Gate 6/8/9. They were not treated as current visual failures or represented as tested production behavior.

Required Findings: **1 open** (`CONVTHANK-G5-IR-F01`). Technical conclusion: **`CHANGES_REQUIRED`**. Gate 4 remains open. This report does not update the current Manifest, close Gate 4 or start Gate 6. A `TARGETED_RECHECK` may inherit the valid unchanged coverage above after the executor supplies a precise new freeze/bundle and closes the Finding acceptance condition.
