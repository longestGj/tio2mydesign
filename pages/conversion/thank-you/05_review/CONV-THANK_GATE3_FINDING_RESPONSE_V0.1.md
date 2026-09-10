# CONV-THANK Gate 3 Finding Response V0.1

Finding: `CONVTHANK-G3-IR-F01`. Original review: `CONV-THANK_GATE3_INDEPENDENT_REVIEW_V0.1.md`, SHA-256 `89626bcc74d3fcd05ddb3304d175826049cec69c7996ec3f97fec56de8b71e02`. Response status: `READY_FOR_TARGETED_INDEPENDENT_REVIEW`.

## Root cause and correction

V0.1 read `new URLSearchParams(location.search).get('type')`; the approved Brief/design URLs use `request`. V0.2 changes only this lookup to `.get('request')` and updates its checker to invoke the approved URLs. The local marker guard remains whitelisted and now explicitly checks acknowledgement, matching non-personal session value, numeric success timestamp and non-stale state.

## Acceptance evidence

| Acceptance condition | V0.2 evidence |
|---|---|
| Approved values resolve correctly | Quote, Documents and Sample each pass at 1440/768/390: 9 scenarios in `diagnostic_support/formal-runtime.json` |
| Missing request falls back | Direct, no receipt cue — PASS |
| Unsupported value falls back | Direct, no receipt cue — PASS |
| Markerless/query-only access falls back | Direct, no receipt cue — PASS |
| Mismatched marker falls back | Direct, no receipt cue — PASS |
| Stale marker falls back | Direct, no receipt cue — PASS |
| New-session marker falls back | Direct, no receipt cue — PASS |
| Positive acknowledgement remains required | `acknowledged=false` falls back to Direct — PASS |
| New candidate identity | Source SHA-256 `1c0b12a4b21f4eb3be2e2b9daed569c1d3f9e30752a5591127824569879a7b28`; V0.1 preserved |
| New evidence | New preflight, freeze, 12 full-page images, 2 Menu images, 1 Cookie image, inventory, report, self-check and submission |

The stale test uses an explicit local simulation flag and timestamp. Gate 3 does not choose the production short-period duration. Receiver, refresh/expiry persistence and production analytics remain `THANK-DEP01`–`THANK-DEP07`.

Required Finding remaining from executor perspective: **0**. Closure remains with the original independent reviewer and Project Control.
