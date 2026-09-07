# DOC-REACH Gate 5 Validation V0.1

## 1. Result

`DOC-REACH-G5-VALIDATION-01 = PASS`

Project-control disposition: `P0=0 / P1=0 / P2=0` for the submitted Gate 5 candidate. User approval remains pending.

## 2. Test-first completion

The Gate 5 contract was written before the candidate existed and first failed with:

```text
AssertionError: Gate 5 full visual HTML must exist
```

After the Gate 5 source and state behavior passed, the asset contract was added before rendering and failed with:

```text
AssertionError: DOC-REACH_G5_DESKTOP_1440_FULL_VISUAL_V0.1.png must exist
```

The renderer then generated seven assets and the complete visual/state contract passed.

## 3. Request-route state defect and closure

Original-scale review showed that the inherited `unavailable` behavior removed whole `.request-actions` groups. Those groups contained both the request link and the ordinary `View Document Hub` link, so the secondary navigation disappeared unnecessarily.

Root cause: request eligibility and unrelated Hub navigation shared one wrapper. A failing regression test required both Hub routes to remain while every `/request-documents/` link, the request-selection panel and the submission note were absent.

The Gate 5 state handler now removes request-specific elements only. The normal page is unchanged; the unavailable state retains the two Hub routes and still exposes no Contact fallback.

`DOC-REACH-G5-R01 = VERIFIED_FIXED / CLOSED`

## 4. Independent review findings and closure

Independent read-only review initially returned `READY FOR USER GATE 5 REVIEW = WITH FIXES` because Desktop short navigation links were below the declared 44px minimum and the automated target-size loop covered only Tablet/Mobile.

A failing test reproduced the exact three targets: `nav-home`, `nav-about` and `crumb-home`. The Gate 5 visual override now assigns a 44px minimum width to Desktop primary-navigation and breadcrumb links, and the target-size test covers 1440/768/390.

The same correction cycle closed three minor evidence gaps:

- the FAQ test now proves `document.activeElement` is the expanded FAQ button and its computed outline is visible;
- the current Manifest now registers the exact Global Chrome V0.5 path/hash and historical Manifest dispositions;
- Mobile Menu evidence is viewport-height rather than a 26,052px blank-tail capture, and Mobile/Menu assets are rendered natively at `deviceScaleFactor=2` without post-upscaling.

`DOC-REACH-G5-R02 = VERIFIED_FIXED / CLOSED`

Independent review after resolution: `CRITICAL=0 / IMPORTANT=0 / MINOR=0`.

## 5. Automated verification coverage

- Gate 5 delivery marker and approved `regulatory-evidence-ledger` direction;
- all eleven modules, four sources, three legal actors, three jurisdictions and seven buyer checks;
- default five-FAQ closed state;
- exact one-item legal-actor FAQ open/focus state;
- real request-route-unavailable behavior and preserved Hub routes;
- Buyer Clean prohibited-term scan;
- zero horizontal overflow at 1440/768/390;
- minimum 44px visible targets at 1440/768/390;
- native 2× Mobile rendering and bounded Mobile Menu evidence height;
- eight-item Mobile Menu with Close state;
- raster existence, width and minimum complete-state height.

## 6. Manual visual review

- Desktop, Tablet and Mobile default full page: PASS.
- Mobile Menu: PASS; approved order/current-state remains intact.
- Request route unavailable: PASS after `DOC-REACH-G5-R01`; no request action remains and Hub navigation remains usable.
- Legal-actor FAQ open/focus: PASS; answer stays in normal flow with no overlap.
- Key-state board: PASS; internal evidence remains separate from Buyer Clean output.

## 7. Formal raster evidence

| Asset | Dimensions | SHA-256 |
|---|---:|---|
| `DOC-REACH_G5_DESKTOP_1440_FULL_VISUAL_V0.1.png` | `1440×7491` | `64C913C196593B8B3062717CB19C451B1A9909B34885DF1F08625CC607A7800E` |
| `DOC-REACH_G5_TABLET_768_FULL_VISUAL_V0.1.png` | `768×9881` | `B639EE293D58ED5EC20EF8CFF190D30D145349B93D1D93C1CFDC5923C9BFB421` |
| `DOC-REACH_G5_MOBILE_390_LOGICAL_2X_FULL_VISUAL_V0.1.png` | `390 logical @2x / 780×26052` | `AB9FC630610356C61D4A76B042322B1A060A72B1D209C1E833805F9A65196086` |
| `DOC-REACH_G5_MOBILE_MENU_390_LOGICAL_2X_V0.1.png` | `390 logical @2x / 780×1688` | `0E04158847ED794A84099F0171C84DB99D75C1F5EA308E1A1DBA7F6AD4BA29AE` |
| `DOC-REACH_G5_KEY_STATES_V0.1.png` | `1440×1000` | `CF43400D08F2B45DD6F4F157302B8B629075908DFB7100869D55E2AAF1689F7E` |
| `DOC-REACH_G5_REQUEST_ROUTE_UNAVAILABLE_1440_V0.1.png` | `1440×7326` | `4A00876D9242CC3B2E3A68014A4550AC5823490E08CFB7E9E46549398F5D01DE` |
| `DOC-REACH_G5_FAQ_OPEN_STATE_1440_V0.1.png` | `1440×619` | `6362A777E7674D8D31CC5FAC21262F09BF0BCBA1F286414818B376EA96CE0B2E` |

## 8. Source evidence

| File | SHA-256 |
|---|---|
| `99_workspace/DOC-REACH/gate5/DOC-REACH_GATE5_FULL_VISUAL_V0.1.html` | `80E1BAE01AEFC935CE473C70B231EC72674859F18A390ED63B1A9EFE76890437` |
| `.superdesign/tmp/doc-reach-gate5-full-visual-v0.1.html` | `80E1BAE01AEFC935CE473C70B231EC72674859F18A390ED63B1A9EFE76890437` |
| `99_workspace/DOC-REACH/gate5/build-doc-reach-gate5.mjs` | `14D50871350D096AA0F0282F3D6F4B47A708CC7BB29E756E15C510BAD26C441B` |
| `99_workspace/DOC-REACH/gate5/test-doc-reach-gate5.mjs` | `89948C0DE713D31B8E02E9996276F6A791168B30F945286EC11665EF041321DE` |
| `99_workspace/DOC-REACH/gate5/render-doc-reach-gate5.mjs` | `E7198EED03AE147FB6487BC572D28DE9998C222F99B6134A0E2CE686E20D32EC` |

## 9. Superdesign parity

- Project `ab00e0d4-ad19-44d1-8825-84dc020f3cb3`.
- Draft `02c20623-7f87-4edf-b87e-24ef2137d028`, Gate 5 candidate `v3`.
- Local and server-fetched Gate 5 HTML hashes match exactly.
- Production primary and reverse Logo bindings remain present.

## 10. Boundary

Validation proves the submitted visual and interaction evidence. It does not constitute user Gate 5 approval or authorise Gate 6–10, implementation, deployment or publication.
