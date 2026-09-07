# PRODUCT-PROC-CL Gate 5 failure and repair history

2026-09-07. Diagnostic support only; none of these attempts is an approval asset.

| ID | Observed result | Classification | Correction and final result |
|---|---|---|---|
| `CL-G5-TOOL-01` | The first preflight stopped when a page-coordinate clip below the current viewport returned `Clipped area is either empty or outside the resulting image`. | Capture-tool setup, not a page defect. | Region evidence now uses the actual section element bounds and `locator.screenshot`; complete-page evidence remains a native `fullPage` capture. The rerun completed. Any partial PNGs from the stopped attempt are diagnostic only and were not promoted. |
| `CL-G5-TOOL-02` | The next preflight expected the no-JavaScript fragment target at top `0px`; actual target top was `88.390625px`. | Assertion error. The approved responsive CSS intentionally applies `scroll-margin-top: 88px`. | Acceptance now checks the approved `88px` target offset. No page source changed. Final preflight and formal runtime both report `56/56` assertions passing. |

The Gate 5 source was deliberately made durable before preflight: the page consumes copied byte-identical Inter and production-authorised SVG payloads from its own source directory, while their canonical owners remain recorded in the freeze. The approved metadata values were added to the local planning document with staging `noindex,nofollow`, and the compact-menu script preserves scroll and returns focus with `preventScroll`. These are Gate 5 assembly details within the approved contracts; they do not change Buyer Copy, the five-module order, Grade order or shared owner rules.

No content, layout or visual defect was found after freeze `CL-G5-V01-SOURCE-01`; no frozen source or formal PNG was edited after formal export.
