# CONV-THANK Gate 4 targeted repair workset V0.2

Workset `CONV-THANK-G4-WORKSET-20260908-02`; executor `/root/conv_thank_gate4_execute`; date 2026-09-08. This is the response to new Gate 5 Finding `CONVTHANK-G5-IR-F01`. V0.1 remains immutable.

## Change

V0.2 derives from V0.1 source SHA-256 `1ea39b622d4b918c2e86d406dc4c384236253850fe309496cee950a24dbca3a5`. The only source delta is Footer DOM order:

`footerGrid → legalUtilities → copyright`

becomes:

`footerGrid → copyright → legalUtilities`

Copyright wording, legal link/button order and routes, Cookie Settings semantics, Footer styles, four result states, exact content, action targets, visual direction, `request`/session logic, navigation `NONE`, Menu/Cookie behavior and shared dependencies are unchanged. A build assertion proves that swapping only those two complete Footer nodes reconstructs V0.1 byte-for-byte.

## Targeted verification

The hard preflight reruns four states at 1440/768/390 and adds an explicit copyright-first assertion for every instance. It also covers exact content, receipt boundary, actions, geometry, 44×44 targets, focus, head rules, eight fallback cases, both narrow Menu paths, Cookie at all three widths, 200%-equivalent reflow and network isolation. Final preflight result is 169/169 PASS.

All twelve full pages and Cookie 390 are affected evidence and are regenerated. Menu 768/390 are also recaptured under the new frozen source; their presentation is expected to be pixel-identical because the reordered Footer is outside the menu viewport, and the final inventory records actual hashes for comparison. Formal assets are created only after the V0.2 source, inputs, dependencies and render conditions are frozen.

Status: `COMPLETE_VISUAL_FROZEN / READY_FOR_REVIEW` after formal capture; lifecycle `DRAFT_FOR_PROJECT_CONTROL_REVIEW`. This workset does not close the Finding or Gate, update Manifest/Status/Index, start Gate 6, access D16, develop, deploy or publish.
