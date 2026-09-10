# SYS-404 Gate 5 Independent Visual Review V0.1

## 1. Control and admission

| Field | Value |
|---|---|
| Date | `2026-09-08` |
| Dispatch | `G5-SYS404-REVIEW-20260908-01` |
| Page / stage | `SYS-404` / `GATE5_INDEPENDENT_VISUAL_REVIEW` |
| Review mode | `INDEPENDENT_REVIEW` |
| Actual author | `/root/sys404_gate4_execute` |
| Actual Reviewer | `/root/sys404_gate5_review` |
| Independence | `PASS`; different actual identities |
| Review role / method | Gate 5 Independent Visual Reviewer Agent V0.4; layout-interaction-verification V0.8 plus independent-visual-review V0.2 |
| Target bundle | `SYS-404-G4-BUNDLE-20260908-01` |
| Frozen source | `SYS-404_GATE4_COMPLETE_VISUAL_V0.1.html`, SHA-256 `A09C3E730D3ABAD910481607B880C265355C6BF394717D01FD78AB036A0EC6C0` |
| Lifecycle on return | Gate 4 remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |

The handoff entry, authority Manifest V0.7, Gate 2 A/B/C, Gate 3 handoff and frozen structure, Gate 4 input/freeze/evidence indexes, approved design, brand, CTA, Global Chrome, production Logo and Footer legal authorities were read from the paths bound by the handoff. The specified bundle, source and author identity were present. All approval-core paths existed and their actual bytes and SHA-256 values matched `evidence-index.json`; all eight PNG physical dimensions matched their declared dimensions. Admission therefore passed and the same review continued to visual and interaction inspection.

## 2. Actual review scope

The Reviewer opened the original formal assets at their stored resolution: 1440, 768 and 390 complete pages; 768 and 390 Mobile Menu states; and 1440, 768 and 390 Cookie Settings states. No replacement or duplicate screenshot was saved because no screenshot trigger was needed to identify the issue below. The visible review covered the complete Header, recovery panel, Footer, all action groups and the state overlays.

An independent Playwright run opened the frozen source in Chrome at 1440×900, 768×900 and 390×844 with DPR 1, light colour scheme and reduced motion. It checked exact copy, exact five targets, fixed module order, `2 Primary + 3 Supporting`, zero `aria-current`, no prohibited feature, full-page width/Footer extent, every visible target at least 44×44, focus visibility, local navigation intent, Mobile Menu focus containment/Escape restoration, Cookie dialog focus loop/Escape restoration, and 1440→720 CSS-pixel reflow as the 200% equivalent. HTTP(S) requests were blocked and none occurred. The local action tests remain `LOCAL_SIMULATION`; they do not prove live routes or a real HTTP 404.

The independent run produced 63 checks. Sixty passed. The same Footer-order defect appeared at all three viewports and is recorded as one Finding, not three quality scores. The detailed machine observation is `independent-runtime-observation.json` in this directory.

## 3. Fixed core and page-specific risk result

- Exact `BC-01`–`BC-08` copy, order and all five hrefs matched the approved Gate 2 source at all three widths.
- Shared Header and production Logo rendered with the correct 84/64px geometry; fixed RFQ remained visible; Desktop and Mobile navigation each had no false current item.
- Two filled Primary controls remained visibly dominant over three quieter Supporting controls. At 390 all five controls formed one ordered, full-width column without truncation or collision.
- The short 1440 page used a balanced recovery panel and closed naturally into the Footer. The 768 and 390 reflows retained all copy and controls without horizontal overflow or abnormal empty sections.
- Recovery controls, shared navigation and legal controls met the 44×44 minimum. Focus outlines, Mobile Menu containment/return and Cookie Settings focus loop/return worked in the independent run.
- No search, form, recommendation, FAQ, media, product list or automatic redirect was introduced, and the visual treatment did not imply an unapproved product, service or route result.
- The Footer contained the correct four legal/privacy controls and no Terms link, but their placement relative to copyright violated the approved fixed order.

## 4. Finding

### `SYS404-G5-IR-F01` — Footer legal utility sequence is reversed

| Field | Detail |
|---|---|
| Severity | `P1 / REQUIRED` |
| Owner | Gate 4 executor using the current shared-owner contract; escalate to the shared consumer owner if the page cannot consume a compliant source without a fork |
| Location | Frozen HTML Footer; visible in the 1440/768/390 complete pages and the three Cookie Settings states |
| Viewport / state | 1440, 768 and 390; complete page and Cookie Settings context |
| Expected | Footer Legal Utility Addendum V1.0 fixes `© 2026 TiO2 Malaysia. | Privacy Policy | Dasar Privasi (BM) | Cookie Policy | Cookie Settings`; responsive wrapping may not change this order. |
| Observed | The frozen DOM and all complete-page visuals place `Privacy Policy → Dasar Privasi (BM) → Cookie Policy → Cookie Settings` before `© 2026 TiO2 Malaysia.`. The actual Footer child order is `footerGrid → legalUtilities → copyright`. |
| Evidence | Frozen source SHA above; formal full-page PNGs in `approval_core`; independent run checks `1440/768/390 copyright-first legal utility order = FAIL` in `independent-runtime-observation.json`. |
| Reader impact | The shared legal/navigation sequence differs from the approved site-wide contract and from the required cross-page Footer consistency. |
| Acceptance condition | Produce a new versioned frozen source and bundle with Footer visual/DOM order `footerGrid → copyright → legalUtilities`, retaining the exact copyright and legal control order, routes, semantic Cookie Settings button, no Terms, focus behavior and all SYS-404 content/2+3 structure. Regenerate every affected formal full-page and Cookie-state asset, rerun machine identity and interaction checks, and provide a change response. Unaffected Menu assets may be inherited only if the new evidence index proves their presentation and capture conditions unchanged. |

## 5. Coverage limits and conclusion

Real HTTP 404 delivery, valid-route non-interception, live target availability, production robots/sitemap behavior, analytics path sanitization and `site_scope=tio2-my` isolation remain the existing Gate 6/8/9 dependencies. They were not represented as Gate 5 failures or as tested production behavior.

Required Findings: **1 open** (`SYS404-G5-IR-F01`). Technical conclusion: **`CHANGES_REQUIRED`**. Gate 4 remains open; this report does not update the current Manifest, close the stage or start Gate 6. A `TARGETED_RECHECK` may inherit the valid unchanged coverage above after the executor supplies a precise new freeze/bundle and closes the Finding acceptance condition.
