# RES-ORIGIN Gate 3 Validation V0.1

## 0. Result

| Field | Value |
|---|---|
| Date | 2026-09-05 |
| Source | Superdesign draft `dba90fa9-ecc0-48bc-ba78-1730484643d1` v5 |
| Validation command | `validate-wireframes.cjs` against the current HTML and approved Gate 2 Content Architecture V0.2 |
| Result | `50 PASS / 0 FAIL` |
| Visual inspection | Desktop, Tablet, Mobile and Mobile Menu open inspected |

## 1. Responsive Metrics

| View | Client / scroll width | Full height | Body | H1 | Menu state |
|---|---:|---:|---:|---:|---|
| Desktop 1440 | 1440 / 1440 | 6843 | 16 / 25.92px | 58px | Closed |
| Tablet 768 | 768 / 768 | 9499 | 16 / 25.92px | 48px | Closed |
| Mobile 390 | 390 / 390 | 13225 logical | 16 / 25.6px | 39px | Closed |
| Mobile Menu 390 | 390 / 390 | Viewport proof 720 logical | 16 / 25.6px | Underlying page 39px | Open |

All four views passed no-horizontal-overflow, H1-fit and minimum 44px visible-target checks.

## 2. Structure Counts

Every responsive view contains:

- one H1;
- six due-diligence checks;
- five application routes;
- four destination cards;
- three qualification decision paths;
- nine Buyer Question disclosures.

Shared Chrome current-state checks passed: one visible `Resources` marker on Desktop, none in compact closed navigation, and one in Mobile Menu open.

## 3. Content Checks

- Every backtick-delimited exact Buyer Clean string in Gate 2 Section 4 is present, excluding governance-only tokens `FAQPage`, `QAPage` and `tio2-my`.
- Buyer Clean forbidden-term scan passed for internal review, pending copy, release blocker, coming soon, placeholder, `DO_NOT_RENDER`, Gate labels and M-996/M-2196.
- The visual source contains no named Grade recommendation or dedicated trade outcome.
- The new Malaysia-origin site-wide authority was reviewed; no approved Gate 2 copy change was required.

## 4. Logo Checks

- Desktop Header: exactly one visible primary production SVG.
- Desktop Footer: exactly one visible reverse monochrome production SVG.
- Mobile Menu open: exactly one visible primary production SVG within the overlay.
- The local authoring source and Superdesign v5 refetch are byte-identical.

## 5. Visual Review Notes

- Desktop keeps the page editorial and decision-led; the six-check sequence is the dominant body structure rather than a decorative card wall.
- Tablet preserves long-copy readability without horizontal rails.
- Mobile keeps 16px body text, full-width actions and one-column content; no blank illustration band follows the Hero actions.
- Mobile Menu open matches the approved `Logo | RFQ | Menu` shared-header pattern and current-item treatment.

## 6. Disposition

`VALIDATION_PASS / READY_FOR_PROJECT_CONTROL_REVIEW`.

This validation does not constitute user approval or authorize Gate 4.
