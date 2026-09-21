# MARKET-000 Gate5 reviewer observations

2026-09-21; reviewer /root/doc_root_d32; author /root/market_root_d32. Evidence roles are STATIC_VISUAL, ACTUAL_RUNTIME in local planning Chromium, SOURCE_INSPECTION, and LOCAL_SIMULATION, not D32 acceptance.

## Images actually inspected

All 17 originals under `pages/markets/04_planning/d32-gate4-v0.1/approval_core/` were opened: FULL_1440, PRIMARY_HOVER_1440, FULL_1024, FULL_768, MENU_768, FULL_390, MENU_390, COOKIE_390, EU_EXPANDED_390, PRIMARY_FOCUS_390, COUNTRY_FOCUS_390, FULL_320, COOKIE_320, OUTLINE_HOVER_390, ROUTE_NONE_390, ROUTE_EU-ONLY_390, ROUTE_SUPPORT-ONLY_390 (each prefixed MARKET-000_D32_G4_, suffixed .png). Full images establish complete page/state continuity; readable segments establish actual text reading, not thumbnail inference.

All 26 existing diagnostic_support/readable originals also opened/read: 1440 and 1024 at y=0/1500/3000/4500; 768 at y=0/1500/3000/4500/6000; 390 at y=0/1500/3000/4500/6000/7500; 320 at y=0/1500/3000/4500/6000/7500/9000. These pre-hover-fix normal-state diagnostics remain valid for reading because exact CSS diff is only hover foreground. They do not substitute for the current formal hover/state evidence. The family-comparison image was opened as a scoped visual reference, not four-page runtime proof. No new screenshots created.

## Observations

- Desktop EU parent full width with three country columns, followed by three peer cards, communicates hierarchy without the old large matched-height rail. Questions two columns. Tablet country list two columns, narrative grids one; mobile countries and narrative grids one. Six questions fully visible, not an accordion. The 1024 UK action and 320 long actions wrap within enlarged controls without glyph clipping.
- Header/footer, fixed RFQ, Markets active state, logo, legal links and no_optional_analytics Cookie panel remain coherent. Menu/cookie controls fit and the independent browser run covers keyboard focus/inert recovery. Primary/country focus and hover formal states show the correct target; no decorative layout or private Hero override found.
- Four route simulations retain descriptions and six country labels; no internal readiness status or empty disabled action shell is exposed. Menu and cookie are the only overlays; this page contains no submission form/error form state. Missing-route alternatives are the applicable conditional/error coverage.
- H1 lines at 1440/1024/768/390/320: 2/2/1/2/3. Shared 56/44/36px, weight700 retained. No horizontal overflow at five widths. The 320 Hero Eyebrow is visibly **two lines**, confirmed independently by text-range geometry; this is the only mandatory finding, MARKET-D32-G5-R01. Natural wrapping and lack of clipping do not waive the shared one-line contract.
- Family comparison: same Inter/Navy/Teal, chrome, action hierarchy, 1200 rail and summary treatment. Framed hub-light MARKET versus approved open-white Home/Product/APP is a necessary approved variant difference, not a defect. Narrow Eyebrow exception is not approved by those differences.

## Raw audit observations, not page defects

`audit.json` remains unchanged at 135 pass / 2 observations. `resolution.json` records four passing resolution/preservation checks. The initial superseded CSS predicate incorrectly expected an explicit old color declaration; old color was inherited #008078. Exact addition of `color:#006c66;` is the sole diff. This is REVIEWER_PREDICATE_CORRECTION, with unchanged contrast threshold.

Method-source drift is APPROVED_NON_RETROACTIVE_METHOD_MIGRATION / RESOLVED_BY_ARCHIVED_IDENTITY under G34-MERGE-20260921. Nine affected method/role sources exactly match their frozen archived identities; AGENTS and Context also match archive. Index archive does not match frozen Index: preserved as navigation-only drift, **not claimed an exact identity match**. Index is not a content/visual contract; explicit controller applicability and unchanged bound authoritative sources resolve its effect. Current approved merge does not require restarting this in-flight Gate4/5 combination. No candidate change is hidden by this classification.

Initial eyebrow script selected both the Hero label and media-summary label and stopped on strict locator ambiguity before producing its output; corrected reviewer selector `.rootHero .heroText > .eyebrow` targets the requirement. Final five-width measurement records 4 pass / 1 fail. No candidate source changed.
