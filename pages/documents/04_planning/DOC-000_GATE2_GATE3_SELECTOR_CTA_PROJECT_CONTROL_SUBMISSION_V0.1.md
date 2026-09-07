# DOC-000 Gate 2/3 Selector-CTA Project-Control Submission V0.1

## 0. Submission control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Decision ID | `DOC-000-G2-G3-SELECTOR-CTA-01` |
| Status | `APPROVED / CLOSED` |
| Decision date/source | 2026-09-02 / explicit user confirmation |
| Final disposition | `APPROVED / CLOSED` |

## 1. Submitted scope

1. Content Architecture V0.8.
2. Wireframe Specification V0.6.
3. Responsive/Interaction Contract V0.2.
4. Desktop 1440 complete-page V0.2 PNG.
5. Tablet 768 complete-page V0.2 PNG.
6. Mobile 390 logical @2x complete-page V0.2 PNG.
7. Selector initial/validation/selected state-board PNG.
8. Selector-CTA Change Impact V0.1.
9. Selector-CTA Validation V0.1.
10. Current Manifest V0.3.

SEO/GEO/Schema V0.6 and Mobile Menu V0.1 are inherited unchanged.

## 2. New module order

`Hero → Product Grade Selector → How It Works → Review Scenarios → Documentation Categories → Why on Request → Buyer Questions → Closing CTA → Shared Footer`

The Selector is now the first body module after Hero at 1440, 768 and 390.

## 3. Button state contract

- Initial: `Continue to Request Documents` is visibly rendered, focusable and operable.
- No Grade: no navigation, exact validation appears and focus returns to the dropdown.
- Valid Grade: selected confirmation appears; the same button carries Grade to `/request-documents/`; the receiving Grade remains editable.
- Closing: a visible action remains in both selected and unselected states.

## 4. FAQ contract

All six question buttons remain visible. Answers default collapsed; one expanded answer in the Gate 3 assets is interaction proof only. No full-answer default-open redesign was made.

## 5. Asset and QA summary

- New assets: `1440 × 4199`, `768 × 5236`, `780 × 12972` for 390 logical @2x, and `1440 × 938` state board.
- No horizontal overflow at 1440/768/390.
- Minimum primary target=`44px` or greater.
- Dropdown contains exactly 14 valid Grade values.
- Initial/validation/selected state tests pass in all three full-page viewports.
- Structural counts remain 3 scenarios / 4 categories / 6 FAQ.

## 6. Explicit non-authority

The user approved this Gate 3 package on 2026-09-02 and authorized Gate 4. Gate 5, child pages, development, D16, deployment and publication remain unauthorized.
