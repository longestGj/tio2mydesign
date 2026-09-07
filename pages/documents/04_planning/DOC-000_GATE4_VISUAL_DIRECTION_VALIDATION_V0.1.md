# DOC-000 Gate 4 Visual Direction Validation V0.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `DOC-000-G4-DOC-EDITORIAL-01` |
| Status | `APPROVED_GATE4_VALIDATION / CLOSED` |
| Date | 2026-09-02 |
| Scope | Gate 4 visual-direction assets only |

## 1. Asset validation

| Asset | Dimensions | PNG SHA-256 | Result |
|---|---:|---|---|
| Desktop key direction | 1440×3880 | `00954FE377B03ACA2FCB2E6E95769FDA9A00FC8D2B8FE174C34C280AF2ABA4F9` | PASS |
| Tablet key direction | 768×5000 | `6EFAF5DE4B922CF492732F71931CDFD561C85C23943EBB6DE36FBB391FA45E2A` | PASS |
| Mobile key direction | 780×11360 (`390 logical @2x`) | `09D653A84AC3E79CC2AFB81D50D842F482D9F6BEE62689FD62BE927D03BEF471` | PASS |
| Selector / FAQ states | 1440×1800 | `DC35B27469AE29E4B6EDA6C501049A32003CABB92366763BF6325FFFB1F73C63` | PASS |
| Global Chrome assembly | 1440×1680 | `CE69A907B22BEDC1FCA80C737171EEF72A4265B8D942A250CB2AE7303C815AC9` | PASS |

## 2. Structural and interaction checks

| Check | Result |
|---|---|
| Desktop Hero is two-column with copy left and evidence-neutral media right | PASS |
| Hero renders exact `Start a Document Request` label in all three viewports | PASS |
| Hero link is specified as `/request-documents/` with no query or Selector behavior | PASS by user-approved interaction contract |
| Selector is the first module after Hero in all three key samples | PASS |
| Initial Continue action is visible and operable | PASS |
| Tablet dropdown `x72..696, y1200..1252`; Continue `x72..696, y1330..1380` | PASS |
| Tablet field-to-button gap 78px; overlap area 0 | PASS |
| Tablet helper / validation / Explore / Continue positions remain stable across states | PASS by shared state geometry |
| Mobile approved Explore Products helper/link is visible | PASS; string count 1 |
| Initial / exact no-selection validation / valid selected states shown | PASS |
| Selected state retains same action geometry and Grade-only meaning | PASS |
| Exactly 3 review scenarios and 4 categories | PASS |
| Six FAQ questions visible and collapsed in Desktop/Mobile samples | PASS |
| One-expanded FAQ proof included on state board | PASS |
| 390px long category/scenario titles explicitly wrap | PASS |
| Key target size ≥44px; primary samples 50px | PASS |
| No View/Download/direct-download action | PASS |
| No Buyer Clean governance terms or internal route state | PASS |
| Header/Mobile Menu/Footer assembly proof included | PASS |

## 3. Colour and accessibility checks

| Pair | Ratio | Result |
|---|---:|---|
| White on Accessible Deep Teal `#007F77` | 4.88:1 | PASS for normal text |
| White on Deep Navy `#031B3A` | 17.19:1 | PASS |
| Navy `#062B5B` on White | 13.96:1 | PASS |

Focus is not colour-only: the state board uses a visible outer focus treatment. Validation pairs field border and exact error copy. Selected confirmation pairs a check mark and text with colour.

## 4. Evidence-boundary checks

- Abstract Hero art contains no real filename, revision, certificate, market, factory, port, shipment or inventory cue.
- The five review boards do not claim specific files exist, are approved, cover all Grades/markets, are downloadable or can be supplied immediately.
- Category cards are non-interactive and contain no false action slot.
- Schema/SEO/GEO V0.6 remains unchanged.

## 5. Shared Chrome check

- Production SVG Logo assets are embedded without modification.
- Desktop Header 84px and Mobile Header 64px are represented.
- Navigation order and `Documents` current-state treatment match Global Chrome V0.5.
- Persistent RFQ remains visible on Desktop Header, Mobile Header, Mobile Menu and Footer sample.
- Shared Chrome remains reference-only; no page-owned fork is created.

## 6. Validation method and result

Raster dimensions and hashes were checked programmatically. Text, state, fixed-count, forbidden-action and contrast assertions passed. All five PNGs were visually inspected; mobile long titles were revised once and re-rendered before the final pass.

Final validation result: `PASS_FOR_PROJECT_CONTROL_REVIEW`. This is not a project-control pass or user approval.

## 7. Hero CTA revision closure

The user approved `Start a Document Request` as a direct accessible link to `/request-documents/`, with no query, no Selector anchor/scroll/focus and no default Grade. The three viewport assets were re-rendered and rehashed. Validation confirms:

- exact Hero label appears at Desktop, Tablet and Mobile;
- its outlined navigation treatment is visually distinct from the Selector's filled primary Continue action;
- Selector remains immediately below Hero and its three-state contract is unchanged;
- Selector/FAQ and Global Chrome boards are byte-unchanged; and
- all automated asset, text, count, long-title and contrast checks pass after revision.

## 8. Project-control correction and PCR-01 revalidation

The earlier validation marked the complete visual package PASS, but independent project-control review found a real `156×15px` Tablet field/button overlap and a missing Mobile Explore Products helper. The earlier visual PASS is therefore not relied upon for those two assertions.

`DOC-000-G4-PCR-01` corrects and revalidates them:

- Tablet field and Continue use separate full-width rows with a 78px vertical gap and zero overlap area.
- The stable helper/validation region remains between field and actions.
- Mobile visibly restores `Not sure which grade to select? Explore Products. →` above Continue.
- Desktop, Selector/FAQ state board and Global Chrome proof remain byte-identical.

Current targeted result: `DOC-000-G4-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.

## 9. Independent project-control re-review

Project control independently confirmed both P0 corrections, rechecked the Tablet/Mobile originals, matched all five PNG hashes to the submitted Manifest and reported zero conflict markers and zero trailing whitespace. The user subsequently approved and closed Gate 4 on 2026-09-02 and authorized Gate 5. This validation does not approve Gate 5.
