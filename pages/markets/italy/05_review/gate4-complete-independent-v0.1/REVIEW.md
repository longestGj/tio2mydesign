# MARKET-EU-IT Gate 4 Final Independent Review V0.1

## Control

| Field | Value |
|---|---|
| Page ID | `MARKET-EU-IT` |
| Review ID | `IT-G4-INDEPENDENT-REVIEW-20260907-01` |
| Candidate workset | `IT-G4-COMPLETE-20260907-01` |
| Candidate freeze | `IT-G4-FREEZE-20260907-01` |
| Review role | Final independent reviewer; not involved in Italy Gate 4 production |
| Review date | 2026-09-07 |
| Candidate handling | Read-only |
| Review result | `PROJECT_CONTROL_REVIEW_PASS` |
| Required Finding | `0` |

## Decision

`MARKET-EU-IT` Gate 4 candidate `IT-G4-COMPLETE-20260907-01`, frozen as `IT-G4-FREEZE-20260907-01`, passes final independent review. The frozen source, input set, evidence set, approved seven-module content, Italy-specific boundaries, three required viewports, shared chrome, and applicable interaction states are mutually consistent. No required Finding was identified.

This record supplies the independent-review result only. It does not close Gate 4, change the current Manifest, authorize Gate 6, or authorize development, deployment, publication, DNS, or indexing.

## Independent identity recomputation

| Object | Recomputed result |
|---|---|
| Frozen inputs | `51/51 MATCH` |
| Executor evidence images | `56/56 MATCH` |
| Executor observation files | `5/5 MATCH` |
| Freeze component identities | `11/11 MATCH` |
| Evidence top pointers | `3/3 MATCH` |
| Candidate source | `28199 bytes`; SHA-256 `ed7d54648e058fee6ee4d6ff7ca76d3fe3f440eda0e5d0d7b8871b6da0f15615` |
| Input index | `11197 bytes`; SHA-256 `91b5500232b45cd275548ed00b59544240999fcac15432c5cd18c74d8ea75eb9` |
| Freeze record | `4106 bytes`; SHA-256 `46f9177205856a282c58288754e3a893495971432b7ca96a1c25942bd2d14a64` |
| Executor evidence index | `33541 bytes`; SHA-256 `133b34f47946b0061ae0977854e1b1ec479c2e1dad4a5c09ae9f44f8bed86b82` |

The freeze retains the exact workset and freeze IDs. Its source, input index, workset, preflight, direction check, runtime record, visual readback and four local dependencies all match their recorded byte sizes and SHA-256 values. The evidence index points back to the same source, input index and freeze.

## Executor evidence visual readback

I opened and visually inspected all `56/56` indexed executor images. The set contains three full pages, 27 continuous segments, three direction samples, two Menu states, three Cookie states, six normal states, six hover states and six keyboard-focus states.

The 1440, 768 and 390 sequences cover the page continuously through the final legal footer. The seven modules remain readable and proportional. No horizontal overflow, clipped copy, broken logo, omitted footer, empty approved wrapper, repeated module, or discontinuity was observed. The Request Documents and Federchimica source focus outlines remain inside their link boxes and do not collide with adjacent text at any required width.

The observation ledger records each source image and the 14 contact sheets used for the complete readback in `diagnostic_support/visual-observation.json`.

## Independent rerender and runtime verification

The frozen HTML was independently rendered from its local file with Chromium `152.0.7977.82`, DPR 1, reduced motion, local Inter font and HTTP(S) requests blocked. The independent set contains `52` images: three full pages, 26 continuous viewport segments, 18 high-risk normal/hover/focus states, two Menu states and three Cookie states. I opened and visually inspected all `52/52` independent images.

| Width | Full height | Continuous segments | Visible controls | Below 44 CSS px | Clipped text cases | Focus/text collisions |
|---:|---:|---:|---:|---:|---:|---:|
| 1440 | 5050 | 7 | 40 | 0 | 0 | 0 |
| 768 | 6114 | 8 | 34 | 0 | 0 | 0 |
| 390 | 7698 | 11 | 34 | 0 | 0 | 0 |

Independent runtime result: `35/35 PASS`, with zero page errors, zero console errors, zero unexpected external requests, zero horizontal overflow and a complete footer endpoint at every width. All 19 approved main links retain their exact text, order and href at every width.

## Content and ownership checks

- `IT-01` through `IT-07` occur once and in approved order, with one H1. The normalized Buyer Clean B V0.2 text is contained exactly in the candidate main content. The candidate main, Header and Footer DOM remain identical to the approved Gate 3 source; the Gate 4 delta is visual treatment.
- The approved COO sentence occurs once. Its no-every-shipment and no-customs-acceptance/treatment limitation remains in the same paragraph and visually adjacent at 1440, 768 and 390.
- Product guidance remains Grade-neutral and keeps `Not sure / Need help`. No Italy Grade ranking, recommendation, equivalence or suitability claim appears.
- The three application groups remain distinct: Wood and Industrial Coatings, Compound and Masterbatch, and Packaging Printing. Their Coatings, Plastics, Masterbatch and Printing Inks owner links are exact.
- Italy remains the destination country. `Destination Port / City` stays optional, other final receiving or handover detail stays in `Additional Requirements`, and the page does not guess a port, route or site.
- Documents, Sample and RFQ remain separate. Actual local click simulation confirms RFQ context `{destinationCountry: "Italy", sourcePage: "MARKET-EU-IT"}`, Documents context `{sourcePage: "MARKET-EU-IT"}`, and empty Sample context `{}` at all three widths.
- EU Procurement Overview and the dated EU Trade Update remain the EU-wide owners. The Italy page does not calculate duty or tax, decide origin or classification, or provide a shipment-specific import result.
- The final RFQ retains human review and makes no Grade, price, stock, supply, transport or timing promise.

## Shared chrome and interaction checks

Desktop and compact Header states retain Markets as the navigation current item without a buyer-visible `CURRENT` label. The fixed RFQ, production logo references, Footer navigation and privacy utilities match the approved shared contract; no Terms link is present.

At 768 and 390, Menu open state moves focus to the first menu link, isolates main and footer, traps forward and reverse Tab, closes on Escape and returns focus to the Menu button. At all three widths, Cookie Settings opens as a modal, focuses Close, cycles between Close and Read Cookie Policy, closes on Escape and returns focus to Cookie Settings.

The Request Documents and Federchimica source links were independently captured in normal, hover and focus states at every width. Geometry remains stable; the keyboard outline is 3 CSS px; calculated sibling-text collision count is zero. Every visible interactive control is at least 44 by 44 CSS px.

## Findings

Required Finding count: `0`.

No advisory Finding is required for Gate 4. Native browser zoom UI, screen-reader speech, real-device engines, production routes/receivers, live consent persistence and post-approved-source freshness remain later implementation or runtime verification concerns and do not change this local frozen-candidate result.

## Review boundary

Status: `PROJECT_CONTROL_REVIEW_PASS`.

The candidate, freeze, current Manifest and root Status/Index were not edited. This review does not declare `APPROVED / CLOSED` and does not start Gate 6.
