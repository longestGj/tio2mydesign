# RES-CHEMOURS Gate 4 execution self-check V0.1

Date: 2026-09-07. Actual author: `/root/gate4_chemours_execute`. Workset: `RESCH-G4-WS-01`. Freeze: `RESCH-G4-FREEZE-01`.

Status: `GATE4_EXECUTION_COMPLETE_FROZEN / READY_FOR_GATE5_REVIEW`. This is one execution SELF_CHECK, not an independent review, approval or Gate closure. Scope comes from `G4-REMAINING-8-EXEC-01`; Gate 5 is assigned to a separate task and Gate 6 is excluded.

Entry: [evidence index](../04_planning/gate4-v0.1/evidence_index.json); [frozen record](../04_planning/gate4-v0.1/freeze-record.json); [design source](../04_planning/gate4-v0.1/RES-CHEMOURS_GATE4_COMPLETE_VISUAL_V0.1.html); [input identities](../04_planning/gate4-v0.1/input_index.json).

## Outcome and actual coverage

4A is `VISUAL_DIRECTION_CHECKED`, recorded in [visual method report](../04_planning/gate4-v0.1/visual-method-report.md). Technical Editorial styling uses Navy headings, Functional Teal actions and a soft evaluation-brief panel. All six modules, four numbered inputs, three vertical qualification steps, Products-first actions, exact source links, review date and independence copy are unchanged. Gate 3 body and shared script remain byte-identical; shared CSS is unchanged. Shared owner remains Global Chrome, with production SVG logos and `no_optional_analytics` consent.

One INITIAL coverage record completed 51 source/runtime checks with 0 failures. Actual local Chromium operations covered all seven main links at each width; navigation was intercepted as `LOCAL_INTENT_ONLY`, with no query/prefill and no real destination request. Menu open, focus loop, Escape, link selection, desktop transition and inert-background recovery were operated at 768/390. Cookie open, focus loop, Close, Escape and focus restoration were operated at all three widths. Visible targets measured at least 44×44 CSS px. Font and both logos loaded. Geometry, text ranges and actual readable visual inspection jointly found no overflow, hidden content, collision or abnormal whitespace. The report does not use zero scroll overflow as its only basis.

Readable INITIAL review covered 1440 at scroll positions 0/800/1600/2400, 768 at 0/800/1600/2400/3200 and 390 at 0/800/1600/2400/3200/4000, with 900px viewports and overlapping context. Final positions clamp naturally at Footer. Views were emitted inline without persisting segment images. All applicable Menu/Cookie views and the main CTA focus view were also actually inspected. Sources remain adjacent to their Chemours-only propositions. The longest mobile qualification heading and four-input text wrap intact; source/independence text remains normal visible content.

Eleven used color pairs were calculated. White/#008078 is 4.818:1; Functional Teal on the soft panel is 4.520:1; body text on the panel is 9.715:1; white focus/menu text on Deep Navy is 17.189:1. Main CTA hover uses Navy/white. Focus indicators are visible against their actual adjacent surfaces, including white Menu focus and Teal Cookie focus.

## Formal capture and freeze

After INITIAL and visual checks passed, source, dependencies and rendering conditions were locked in [preflight-lock](../04_planning/gate4-v0.1/preflight-lock.json). Formal captures are native DPR 1:

| Evidence | Physical dimensions | State |
|---|---:|---|
| Desktop full | 1440×3050 | Default, no incidental focus/hover |
| Tablet full | 768×3701 | Default |
| Mobile full | 390×4549 | Default |
| Tablet / Mobile menu | 768×900 / 390×900 | Menu open, Home keyboard focus |
| Desktop / Tablet / Mobile Cookie | 1440×900 / 768×900 / 390×900 | Modal open, Close keyboard focus |

All eight formal PNGs were actually opened. Full-page images were then examined at readable size using transient crops of those exact files: 1440 y=0–1600/1450–3050; 768 y=0–1400/1300–2700/2600–3701; 390 y=0–1500/1400–2900/2800–4300/4200–4549. Crops were neither persisted nor re-rendered. This CAPTURE_CHECK confirmed source correspondence, font/logo loading, full Footer coverage, expected focus states and no capture artifacts; it did not repeat content, geometry or behavioral tests.

Evidence: 8 `approval_core` PNGs (3 full + 2 Menu + 3 Cookie); 3 `diagnostic_support` 4A samples; 0 saved whole-page preflight PNGs and 0 saved segment PNGs. Runtime observations and capture conditions are JSON records in the same workset. Machine verification reads PNG headers, bytes/SHA, all input/source/dependency identities and exact index references. See [machine verification](../04_planning/gate4-v0.1/machine-verification.json).

## Findings and explicit limits

Findings: none. Remaining execution-required fixes: 0. No source revision or formal recapture was needed after the locked preflight. The initial observation file retains its historical `AWAITING_VISUAL_SCAN` stage; the later visual observations and preflight lock record that completion, without overwriting the raw record.

Evidence categories are distinct: PNGs and readable observations are `STATIC_VISUAL`; geometry and keyboard/Menu/Cookie operation are `ACTUAL_RUNTIME` on the local planning source; identity/body/shared checks are `SOURCE_INSPECTION`; intercepted navigation intents are `LOCAL_SIMULATION`. There is no page form, FAQ, selector, recommendation result, success/error or empty-result state in the approved contract.

Not verified here: production implementation or consent/storage behavior, real destination reception, live external-link availability/freshness, actual devices, screen-reader announcement and browser UI 200% zoom. These remain subsequent authorized acceptance/lifecycle work; local screenshots do not prove them. Mapping/indexing remains `NEW_PAGE_CANDIDATE / DECISION_REQUIRED`. No source refresh, route, Schema implementation, D16 change, deployment, publication or Gate closure occurred.
