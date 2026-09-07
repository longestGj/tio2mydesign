# RES-ORIGIN Gate 4 Validation V0.1

## 0. Result

| Field | Value |
|---|---|
| Date | 2026-09-05 |
| Script | `99_workspace/RES-ORIGIN/gate4/render-and-validate-gate4.cjs` |
| Fresh result | `17 PASS / 0 FAIL` |
| Browser | Bundled Playwright Chromium |
| Viewport | `1440 × 1000`, full-page/element rendering |
| Disposition | `PASS` |

## 1. Automated Checks

1. Complete HTML document: PASS.
2. Single root board element: PASS.
3. 1440px board width: PASS.
4. Horizontal overflow: `0px`, PASS.
5. All 27 anchors have unique, non-empty IDs: PASS.
6. Production primary logo appears in the three intended light-surface samples: PASS.
7. Production reverse logo appears once in the Deep Navy rule sample: PASS.
8. Six evidence checks present: PASS.
9. Two Mobile samples present: PASS.
10. Three FAQ state rows present: PASS.
11. Exact H1 present: PASS.
12. Exact approved Hero supporting copy present: PASS.
13. Exact approved Direct Answer present: PASS.
14. Exact approved technical comparison callout present: PASS.
15. Required brand palette present: PASS.
16. Forbidden buyer-facing/internal/frozen terms absent: PASS.
17. Minimum interactive-target height is `44px`: PASS.

Measured document values: `scrollWidth=1440`, `maxRight=1440`, `scrollHeight=3764`, `checkCount=6`, `phoneCount=2`, `primaryLogoCount=3`, `reverseLogoCount=1`.

## 2. Visual Inspection

The current render was inspected at original resolution. The review confirmed:

- the Desktop Hero, Direct Answer and qualification-path ledger form a coherent first-screen hierarchy;
- long approved copy remains contained within the six-check ledger without overlap;
- the technical sequence and non-equivalence callout remain distinct;
- FAQ closed/open and keyboard-focus states are visually legible;
- the Mobile Hero retains full-width actions, ledger numbers and Direct Answer contrast;
- the Mobile Menu visibly marks `Resources` current;
- internal direction notes are outside buyer-facing browser and phone samples;
- no photograph, map, flag, certificate, factory, badge, gradient or unsupported claim appears.

## 3. Rendered Assets

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `RES-ORIGIN_G4_DIRECTION_BOARD_1440_V0.1.png` | `1440 × 3765` | 508123 | `5D191E3046592AED0239BDCF51C80959CFEACC6CE914F5298FC69841118488E3` |
| `RES-ORIGIN_G4_DESKTOP_HIERARCHY_V0.1.png` | `1344 × 825` | 110616 | `936C754DA1ED01F35C835F90F818DA39B71D48BD52188242D97F18FC9768F2FC` |
| `RES-ORIGIN_G4_MOBILE_AND_STATE_BOARD_V0.1.png` | `1344 × 942` | 124034 | `9921E52F0529C44D67103569F50C1E497FBF43D274CD70A9B1F43B002F661160` |

## 4. Superdesign Integrity

Superdesign Gate 4 draft `30e63865-ca3f-408a-9d5f-202783d09e7d` is at version 2. The local corrected HTML and the Superdesign refetch are byte-identical:

`D4B531550E1A8A6BF73CA1BD456A638F8EFF459F9BB8605D839C413F19BF8A66`

## 5. Boundary

This validation proves the Gate 4 direction board and representative states. It does not validate a Gate 5 full-page visual or authorize development, route activation, deployment, publication, DNS or indexing.

