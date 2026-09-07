# MARKET-BR-EN Gate 4 IR-01 / IR-02 Revision Response V1.1

Date: 2026-09-07. Status: `IMPLEMENTED / DRAFT_FOR_INDEPENDENT_REREVIEW`. Frozen candidate: `BR-EN-G4-V11-SOURCE-01`.

| Finding | Implemented change | Acceptance evidence | Author result |
|---|---|---|---|
| `BR-EN-G4-IR-01` | Removed every page visual-layer rule targeting shared Header, Header RFQ, Footer RFQ, Menu or Cookie selectors. Page CTA transition/hover remains scoped to `main` only. | V1.1 source inspection; `formal-runtime-and-export.json` records `sharedVisualSelectorHits: []`; regenerated full pages and Menu/Cookie states. | Acceptance condition satisfied; independent rereview required. |
| `BR-EN-G4-IR-02` | Added a Documents-only `main .m3 a:focus-visible` rule using a 3px white solid outline with 3px offset. | Actual computed focus probe and three formal focus screenshots at 1440, 768 and 390; white against navy measures 13.96:1. | Acceptance condition satisfied; independent rereview required. |

Regression checks: approved main content and link pairs remain exact against Gate 3; five module order unchanged; no overflow or clipping; controls remain at least 44×44px; Menu and Cookie keyboard behavior passes; no production request was sent.

