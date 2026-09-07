# RES-PROC Gate 4 Validation V0.1

## 0. Result

| Field | Value |
|---|---|
| Date | 2026-09-05 |
| Script | `99_workspace/RES-PROC/gate4/render-and-validate-gate4.cjs` |
| Fresh result | `42 PASS / 0 FAIL` |
| Browser | Bundled Playwright Chromium |
| Viewports | `1440px`, `768px`, `390px`, plus Mobile Menu open |
| Disposition | `PASS` |

## 1. Contract and Content Integrity

- The Gate 4 HTML is a complete document with the required `res-proc-g4` root.
- Buyer Clean visible text is exactly unchanged from the user-approved Gate 3 HTML.
- The link ID/destination map is unchanged; every anchor has a unique ID and every destination is HTTPS or an in-page fragment.
- The approved H1, four Buyer Question disclosures and all fourteen module markers remain present and in order.
- All seven approved source destinations remain present.
- Buyer-facing governance language, TiO2 Malaysia Grade codes and non-Logo imagery remain absent.

## 2. Visual and Brand Integrity

- Required Navy, Deep Navy, Functional Teal, Focus Teal, neutral and explicit `#FFFFFF` tokens are encoded.
- Chloride and sulfate cards use the same top-rule color and equal visual weight.
- No gradient, route score, winner cue, certificate metaphor or unsupported visual claim is introduced.
- Three primary production Logo positions and one reverse production Logo position are retained; there is no inline SVG or other image.
- `Process Qualification Ledger` visual markers are present across Hero, Direct Answer, evidence ledger and qualification workflow.

## 3. Responsive and Accessibility Checks

Desktop, Tablet and Mobile each passed:

- zero horizontal overflow;
- exactly one H1;
- approved H1 scale of `56px`, `48px` and `38px` respectively;
- body copy at or above `16px`; and
- every visible interactive target at or above `44px`.

Mobile Menu open additionally passed:

- zero horizontal overflow;
- background regions inert and hidden from the accessibility tree;
- activation moves focus to Close; and
- exactly one current `Resources` item.

## 4. Rendered Assets

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `RES-PROC_G4_DESKTOP_HIERARCHY_V0.1.png` | `1440 × 3190` | 225771 | `4B4F11C60B36ED1B272E482D910068CB898415DFC72D22A65F304EF904BFB2E8` |
| `RES-PROC_G4_EVIDENCE_SYSTEM_V0.1.png` | `1440 × 2862` | 214193 | `82C1B7628DA4905BE7AEA1AEAA3853D3739DD90B655F5876BC20B986565868FA` |
| `RES-PROC_G4_MOBILE_AND_MENU_STATE_V0.1.png` | `812 × 1500` | 76827 | `AE5AE4F755088EE7207AF42A034293BB1BFF6AAEC976DDCB83403549F36D6E26` |

All three assets were inspected at original resolution. The Hero and Direct Answer remain legible, the Grade evidence ledger is dominant without implying a process winner, the workflow reads as qualification rather than marketing, and the Mobile Menu uses the real Logo and correct current state.

## 5. Superdesign Integrity

Superdesign project `9ccf782d-c80a-4a00-a02c-eeebfa533184`, draft `878afb27-3395-4030-95bd-9a89da7125c2`, is at version 6. The formal Gate 4 HTML, local import source and Superdesign v6 refetch are byte-identical:

`F3966B30F15688CE5CA75FA2599C76E71F5666864C1F28D9DF63BE17F0E5407F`

Version 6 differs from v5 only by explicit white-token normalization from shorthand `#fff` to `#FFFFFF`; pixels, content, layout, links and behavior are unchanged.

## 6. Boundary

This validation proves the Gate 4 direction and representative responsive/interaction states. It does not establish the Gate 5 complete visual baseline and does not authorize Gate 5–10, development, CMS or route changes, deployment, publication, DNS or indexing.

