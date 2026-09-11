# Root Hero Seven-Page Cross-Page Independent Review V1.1

## Control

| Field | Value |
|---|---|
| Revised Review ID | `ROOT-HERO-G5-XPAGE-IVR-01-R1` |
| Review mode | `TARGETED_RECHECK / INDEPENDENT_REVIEW` |
| Date | `2026-09-11` |
| Workset | `ROOT-HERO-G4-7P-V1` |
| Predecessor retained | `ROOT_HERO_G5_SEVEN_PAGE_CROSS_PAGE_INDEPENDENT_REVIEW_V1.0.md` (`ROOT-HERO-G5-XPAGE-IVR-01`) |
| Recheck scope | `ROOT-HERO-G5-XPAGE-F01` on `HOME-ROOT-HERO-G4-CANDIDATE-05` / V1.4, plus the unchanged cross-page condition ledger |
| Result | **`DRAFT / CONDITIONAL / USER_DECISION_REQUIRED`** |

This V1.1 report preserves rather than rewrites V1.0. It verifies the changed Home candidate and inherits the six unchanged valid page-binding reviews. It does not close Gate 4/5, replace a current Manifest, start Gate 6/8, authorize D16 work, or authorize publication.

## F01 targeted recheck

`ROOT-HERO-G5-XPAGE-F01` is **`CLOSED_FOR_HOME-ROOT-HERO-G4-CANDIDATE-05`**.

The V1.4 source removes the V1.3 desktop-only `61.92px / 750` override. A fresh independent validator run returned exit `0` and PASS:

| Viewport | Actual H1 | Lines | Overflow | Result |
|---|---|---:|---|---|
| 1440px | `56px / 700` | 2 | none | PASS |
| 768px | `44px / 700` | 2 | none | PASS |
| 390px | `36px / 700` | 3 | none | PASS |

All three checks also retained the exact H1 text, `Request a Quote → /request-a-quote/`, `View Products → /products/`, 48.25px CTA height, original Hero media asset, `Start Here` transition, zero Hero border/radius/shadow/left pseudo-decoration, and open-white presentation. Original-detail inspection of the frozen 1440×900, 768×1400 and 390×1500 PNGs found no clipping, overlap, blank-height regression, missing action, or unexpected Chrome/transition change.

Machine-readable evidence: `ROOT_HERO_G5_SEVEN_PAGE_CROSS_PAGE_RECHECK_EVIDENCE_V1.0.json`.

## Revised finding summary

| Severity | Count | Disposition |
|---|---:|---|
| P0 | 0 | None |
| P1 | 0 | Former `ROOT-HERO-G5-XPAGE-F01` is closed for the exact V1.4 candidate. |
| P2 | 0 | None |

## Remaining condition — user decision required

`ABOUT-001` at 390px remains a natural four-line H1 under its current `36px / 700`, normal-spacing, 24px-padding geometry. Its mechanical safeguards remain valid, but the shared three-line default still applies: the 2026-09-11 exception is exclusively for `RES-000` at 390px.

This is not a newly discovered defect and is not silently approved by the Home recheck. The user must either approve this exact About-only four-line wrap or authorize an alternative approved binding change. Until then, the seven-page workset remains `DRAFT / CONDITIONAL`; Gate 6 must not begin.

## Boundaries retained

The unchanged cross-page results in V1.0 continue to apply: authorized variants only; Hero left decoration `0`; buyer-visible `CURRENT=0`; Header/Footer consumed as shared Chrome; page-specific CTA/copy/fact boundaries preserved; RES’s approved 390px exception remains non-expanding. No candidate, Manifest, progress/status, Gate 6/8 record, D16 file, or Git operation was modified by this review.
