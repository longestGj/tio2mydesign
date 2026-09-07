# DOC-TDS Gate 5 Validation V0.1

## 1. Result

`DOC-TDS-G5-VALIDATION-01 = PASS`

Project-control disposition: `P0=0 / P1=0 / P2=0` for the submitted Gate 5 candidate. User approval remains pending.

## 2. Test-first state completion

The Gate 5 test was written against the unchanged Gate 4 v3 visual and failed because the Gate 5 real-page state modes did not yet exist:

```text
AssertionError: Gate 5 source must identify its delivery stage
null !== '5'
```

The minimal implementation added:

- Gate 5 source identity;
- `TDS + M-2196` real-page state;
- `SDS + COA / no Grade` real-page state;
- Gate 5 interaction-evidence labeling.

The resulting automated contract passes.

## 3. Rendering regression and closure

Initial state captures were only `1440×216`, although browser assertions showed the live states correctly. Diagnostics proved that the requested clip was `y=983.734375`, `height=1150.734375` while the screenshot viewport height remained `1200`; Playwright clipped the capture at the viewport bottom.

A failing asset-dimension assertion was added before the fix. The renderer now expands the viewport to the full document height before applying the cross-section clip. Both state assets are now `1440×1150` and include document choice plus Grade context.

`DOC-TDS-G5-R01 = VERIFIED_FIXED / CLOSED`

## 4. Automated verification coverage

- Gate 5 source identity and ten-module preservation;
- default Buyer Clean page excludes internal review strip;
- 1440 Desktop, 768 Tablet and 390 Mobile zero horizontal overflow;
- Tablet/Mobile minimum 44px interactive targets;
- exact checked/unchecked state for TDS, SDS and COA;
- exact primary Grade behavior;
- exact buyer-visible summaries;
- three synchronized CTA query contracts for both state cases;
- three-state review board;
- selected-state raster height includes both required modules;
- all Gate 4 visual, Logo, responsive and evidence-boundary regressions remain covered by the retained Gate 4 test.

## 5. Manual visual review

- Desktop default full page: PASS.
- Tablet full page: PASS.
- Mobile full page and Mobile Menu: PASS.
- TDS + M-2196 selected state: PASS; checked card, Grade, summary and CTA are legible.
- SDS + COA / no Grade selected state: PASS; both independent selections remain clear and no Grade is implied.
- FAQ open state: PASS; answer remains in normal flow without overlap.
- Selection-state board: PASS; internal evidence remains separate from Buyer Clean output.

## 6. Formal raster evidence

| Asset | Dimensions | SHA-256 |
|---|---:|---|
| `DOC-TDS_G5_DESKTOP_1440_FULL_VISUAL_V0.1.png` | `1440×6174` | `AAA0A9F232F44DD617DD3718F64FC6651B75F5529628A698502D5779BCCE5BC8` |
| `DOC-TDS_G5_TABLET_768_FULL_VISUAL_V0.1.png` | `768×8331` | `268106B789C31C9B21221803DC2E4522B12380D624528700599A1DCC64CB11D3` |
| `DOC-TDS_G5_MOBILE_390_LOGICAL_2X_FULL_VISUAL_V0.1.png` | `780×21966` | `7077CBFC56E703FECD162CFA82799D6F2A893E422575EC11FF0366C599AAC43F` |
| `DOC-TDS_G5_MOBILE_MENU_390_LOGICAL_2X_V0.1.png` | `780×22748` | `CDB9C87AD129CFBCA6337FB5AF36183E77E02B1DD19FF400116005E3E4AA9ABE` |
| `DOC-TDS_G5_SELECTION_STATES_V0.1.png` | `1440×1017` | `BD8E42E2FDB3E73E41FC09C6932372DADD86CDA0B1C4283DCEBA22BDB261CCB9` |
| `DOC-TDS_G5_TDS_M2196_SELECTED_STATE_1440_V0.1.png` | `1440×1150` | `0278C837A7C5738EA9E5C2DAEB91CF79EC0CCB5E780944CDFAB3D7FEED4BC189` |
| `DOC-TDS_G5_SDS_COA_NO_GRADE_STATE_1440_V0.1.png` | `1440×1150` | `E1E70DC2F807A9F70D6539E3357E3C14C32E576DAB4410A348780E09E54A5EC1` |
| `DOC-TDS_G5_FAQ_OPEN_STATE_1440_V0.1.png` | `1440×703` | `64E8758ED9E593BA17503A86943A2B1D2BFC1D13AE14160B1BF2545ADF8CC867` |

## 7. Source evidence

| File | SHA-256 |
|---|---|
| `99_workspace/DOC-TDS/gate5/superdesign/DOC-TDS_GATE5_FULL_VISUAL_V0.1.html` | `25BBCC076190B9E53BA1E270137F12D3BD3BAB851BA44AEA7F1F1F78ECBBC75E` |
| `99_workspace/DOC-TDS/gate5/test-doc-tds-gate5.mjs` | `A5F2EF85F8E36DDE3512B6F2062C7B31CE93FA2997CF03AD3374803BCBA23A80` |
| `99_workspace/DOC-TDS/gate5/render-doc-tds-gate5.mjs` | `B75B2427178A86FA97BD2344593005BE113DB68B4340D4C7ED1F90A86F656186` |

## 8. Boundary

Validation proves the submitted visual and interaction evidence. It does not constitute user approval or authorise Gate 6–10, implementation, deployment or publication.
