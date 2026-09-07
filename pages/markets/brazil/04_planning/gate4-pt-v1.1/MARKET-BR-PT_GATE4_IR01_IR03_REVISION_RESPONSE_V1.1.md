# MARKET-BR-PT Gate 4 IR-01–03 Revision Response V1.1

Date: 2026-09-07. Status: `AUTHOR_REVISION_COMPLETE / DRAFT_FOR_INDEPENDENT_REREVIEW`.

| Finding | Correction | Acceptance evidence |
|---|---|---|
| `BR-PT-G4-IR-01` | Removed the page visual-layer `.header` shadow and Mobile `.legalUtilities` gap override. Shared owner source and behavior remain unchanged. | `formal-runtime-and-export.json` records an empty `sharedOwnerLeakScan`; all three full pages and shared Menu/Cookie states were regenerated. |
| `BR-PT-G4-IR-02` | Changed Hero `Solicitar cotação` from `#00A99D` to approved `#008078` with white text; explicit hover is `#006C66`. | All three viewport records show normal `rgb(0,128,120)`, hover `rgb(0,108,102)` and white text. White on `#008078` is 4.82:1. |
| `BR-PT-G4-IR-03` | Replaced the universal yellow ring. White/light/document/RFQ surfaces use `#008078`; dark Hero and Trade surfaces use white. Rings remain 3px with 3px offset. | Five representative focus targets were operated at each of 1440, 768 and 390; all 15 probes pass and 390 focused-control captures are preserved in `diagnostic_support`. |

Content parity remains exact: 4,141 normalized visible characters, 14 main link label/target pairs, five modules and seven language markers match Gate 3. There is no horizontal overflow, page error, clipping regression or control below 44×44px.

The original independent findings remain unchanged historical evidence. This response does not close them; a different reviewer must determine rereview acceptance.

