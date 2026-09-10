# CONV-THANK Gate 3 Targeted Revision Input Card V0.2

Date: 2026-09-08. Dispatch: `G3-CONVTHANK-EXEC-20260908-01`. Finding: `CONVTHANK-G3-IR-F01`. Executor: `/root/conv_thank_gate3_execute`. Status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW`.

| Field | Bound input |
|---|---|
| Page / route / scope | `CONV-THANK` / `/thank-you/` / `tio2-my` |
| Current Manifest | V0.5, SHA-256 `75cc03a69970b641a517c50c016380a228060120f630008fda6b43a77972e5cd` |
| Approved Gate 2 | A `6a2706…f8fa`; B `f717a4…4c8e`; C `fe9c05…4e5d`; user closure `442cc3…e284` |
| Independent finding source | `CONV-THANK_GATE3_INDEPENDENT_REVIEW_V0.1.md`, SHA-256 `89626bcc74d3fcd05ddb3304d175826049cec69c7996ec3f97fec56de8b71e02` |
| Shared consumer | `TIO2MY-GATE3-SHARED-CONSUMER-002` / V0.2 |
| Allowed change | Replace page-local query lookup `type` with approved `request`; retain whitelist, matching non-personal marker, positive acknowledgement and Direct fallback |
| Required regression | Four states at 1440/768/390; Menu 768/390; Cookie; missing/unsupported/markerless/mismatched/stale/new-session/non-acknowledged cases |
| Stop | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; original reviewer targeted re-review; no Gate 4 |

The approved success URLs are `/thank-you/?request=quote`, `/thank-you/?request=documents` and `/thank-you/?request=sample`. Query alone remains insufficient: a matching locally simulated marker must contain the whitelisted request type, `acknowledged=true`, matching non-personal session value, a numeric success timestamp and a non-stale condition. The expiry duration is intentionally not decided in Gate 3.
