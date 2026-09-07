# RES-PROC Gate 5 Validation V0.1

## 0. Result

| Field | Value |
|---|---|
| Page | `RES-PROC` |
| Date | 2026-09-05 |
| Script | `99_workspace/RES-PROC/gate5/render-and-validate-gate5.cjs` |
| Automated result | `61 PASS / 0 FAIL` |
| Manual visual QA | `PASS` |
| Source/refetch integrity | `PASS / BYTE_IDENTICAL` |
| Status | `VALIDATED_FOR_PROJECT_CONTROL_REVIEW` |

## 1. Automated Coverage

The fresh Playwright run passed the following contract families:

1. complete document, body/root and Gate 5 marker;
2. exact Buyer Clean visible-text parity with Gate 3 and Gate 4;
3. exact link-ID/destination parity with Gate 4;
4. unique IDs and valid HTTPS/fragment hrefs;
5. exact SEO Title, Meta description and Canonical;
6. correct suppression of ineligible Article, FAQPage, QAPage and HowTo Schema;
7. one H1, four Buyer Questions, one default-open disclosure and fourteen ordered modules;
8. production Logo roles, approved palette and equal route-card visual weight;
9. absence of gradients, non-Logo images, governance leaks and TiO2 Malaysia Grade codes;
10. all seven approved source destinations;
11. Desktop, Tablet and Mobile overflow, type scale, touch size and default Process-link state;
12. Mobile Menu current item, focus transfer and inert/hidden background;
13. FAQ open/focus state with all answers retained in the DOM;
14. atomic Process-link absence with Products-first action retained and no placeholder; and
15. all six rendered asset dimensions.

## 2. Measurements

| View | Logical width | Scroll width | Page height | Min visible target | Body type | H1 |
|---|---:|---:|---:|---:|---|---|
| Desktop | 1440 | 1440 | 8905 | 44px | 16px | 56px |
| Tablet | 768 | 768 | 13182 | 44px | 16px | 48px |
| Mobile | 390 | 390 | 17199 | 44px | 16px | 38px |

## 3. Manual Visual QA

- Desktop: Hero, Direct Answer, route equality, Grade ledger dominance, long-page rhythm, sources, final action and shared Chrome passed.
- Tablet: stacking, evidence-record conversion, readable measure, CTA hierarchy and Footer passed.
- Mobile: H1 wrapping, one-column reading rail, cards, evidence records, workflow, FAQ, source cards, final action and Footer passed.
- Mobile Menu: production Logo, single current `Resources`, RFQ, Close and whitespace passed.
- FAQ state: open answer and Focus Teal outline are correctly framed in the evidence asset.
- Process-routes-off state: both Process actions are absent, the Products action remains and no status/placeholder appears.
- No clipped content, accidental overlap, unreadable text, decorative empty gap or horizontal scroll was observed.

## 4. Rendered Assets

| Asset | Dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `RES-PROC_G5_DESKTOP_1440_V0.1.png` | `1440 × 8905` | 808204 | `89B3CC458AD0BC1A52B16DA8BF889ECAE00A303E7CF4CDC617D971280C00A35E` |
| `RES-PROC_G5_TABLET_768_V0.1.png` | `768 × 13182` | 822984 | `66E7D20E45775DA66535229C935635C14BDFCE58F50C0BE670E842B10526C5CD` |
| `RES-PROC_G5_MOBILE_390_LOGICAL_AT2X_V0.1.png` | `780 × 34398` | 2854211 | `6059A857A57B13FE7F00CF490147CE94914A4A32241EA21039CDA425A4C9704A` |
| `RES-PROC_G5_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V0.1.png` | `780 × 1440` | 43195 | `A921F13A11EDACD3223060D16D308536E9C8E2DFAE116D00D9D5CEF5E283AEA5` |
| `RES-PROC_G5_FAQ_FOCUS_STATE_1440_V0.1.png` | `1440 × 900` | 53271 | `DF3F9C9B48D60B692A418DC98727DA592217FA3A6A60858F1C93809354C9DABB` |
| `RES-PROC_G5_PROCESS_ROUTES_OFF_1440_V0.1.png` | `1440 × 720` | 51412 | `C94E9AC294070F3490428CFFAC95109E8BB642424C5F7B2786AF323BA37B3DFA` |

## 5. Superdesign Integrity

The active Superdesign draft is `878afb27-3395-4030-95bd-9a89da7125c2`, version `v8`. The formal complete HTML, local import source and Superdesign v8 refetch share SHA-256:

`66E3E0643CD649B471AAF3B5963A49E198DE4F20C4D996F0A464B0E060E4FADD`

The three files are byte-identical. Version 7 is historical because its conditional `hidden` attribute could be overridden by `inline-flex`; version 8 uses deterministic inline `display:none` only in the route-ineligible state.

## 6. Boundary

Validation demonstrates conformance of the Gate 5 candidate. It is not user approval and does not authorize Gate 6–10 or any implementation, route, deployment or publication activity.
