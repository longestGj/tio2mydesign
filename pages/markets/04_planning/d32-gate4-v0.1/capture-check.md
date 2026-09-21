# MARKET-000 Gate4 formal CAPTURE_CHECK

2026-09-21; actual checker /root/market_root_d32 (author SELF_CHECK, not independent review). Workset MARKET-000-D32-G4-V0.1. Source HTML SHA256 `2b9ba0dac6f6988e065b4b99a9be49d5e560b96f32c5a318abfa516dd1412f3c`; CSS `bb281ffdd05dbb0a0fea4eeacb2d8d0e239971e3318cef503b4ba7e9e44f81cf`. Current source-lock.json is the post-hover-fix lock; earlier lock and captures are explicitly superseded diagnostics.

Order: INITIAL complete inspection/runtime → TARGETED outline-hover RED141/2 and GREEN143/0 → fresh preflight PASS_FOR_FORMAL_RENDER → source lock → formal capture → actual opening + machine checks → final bundle freeze. No complete repeated content-review cycle was introduced solely for capture.

All17 current approval_core PNGs were actually opened. Full images were viewed both as complete overviews and original-size requests; long originals may be displayed at6000px maximum height. The previously inspected26 readable viewport segments provide exact unchanged normal-layout text/connection coverage; the only later CSS change is hover foreground. All eight full-page captures (five normal widths, three390 route states) were additionally opened using original-detail requests. All nine viewport states were opened at readable actual viewport size.

| Formal coverage | Observation |
|---|---|
| FULL1440×4873,1024×5407,768×7020,390×8032,320×9269 | Complete from Header through Footer/copyright; loaded Inter/SVG; no capture blank bands, clipped text, unintended focus or horizontal overflow. Mobile EU intentionally collapsed.320 H1three lines, eyebrowtwo; natural wrap without private Hero override. |
| MENU768/390 | Correct Markets nav state; Close/RFQ remain visible; eight menu destinations fit; background still visually present but inert per runtime. |
| COOKIE320/390 | Entire shared no_optional_analytics panel and both controls visible; no fake toggle or active analytics claim. |
| EU_EXPANDED390 | Six countries readable in approved order; natural parent growth. |
| PRIMARY_FOCUS390 / COUNTRY_FOCUS390 | Visible outline on correct keyboard target; scroll position exposes target rather than pretending page-top focus. |
| PRIMARY_HOVER1440 / OUTLINE_HOVER390 | Intended hover colors, no clipped action; body outline#006C66 on#EAF7F6 fixes recorded contrast defect. |
| ROUTE_NONE390 / EU-ONLY390 / SUPPORT-ONLY390 | Only simulated ready action subsets show; no missing descriptions or countries; no internal readiness labels; fixed Chrome RFQ and Footer retained. |

Formal capture uses Playwright Chromium151.0.7922.34,1000px viewport height,DPR1, local loaded Inter fonts/SVGs, source identity checked before browser launch. PNG headers independently checked against recorded logical width×DPR, physical dimensions, bytes andSHA256:17/17 match. Source-lock file entries all rehashed without mismatch. Formal asset-index records exact timestamp/state/source/hash; final freeze performs another identity check without rerendering.

Preflight check command: `node skills/responsive-wireframe-design/scripts/check-preflight-record.mjs pages/markets/04_planning/d32-gate4-v0.1/preflight.json` → PASS_FOR_FORMAL_RENDER,failures[]. Capture command: `node pages/markets/04_planning/d32-gate4-v0.1/capture.cjs --formal` →17assets. Actual runtime143/143 is diagnostic_support/runtime.json. Not a production/D32/browser-device test. Capture findings: none remaining. Ready to freeze, not approved/closed.
