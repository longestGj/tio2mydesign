# GRADE-M510 Gate 3 Responsive Wireframe Specification V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M510-G3-WIREFRAME-01` |
| Page ID | `GRADE-M510` |
| URL | `/products/m-510/` |
| Date | `2026-09-02` |
| Gate 2 input | `GRADE-M510_GATE2_FULL_COPY_V0.1.md` — `USER_APPROVED / CLOSED` |
| Gate 3 authorization | `GRADE-M510-G2-COPY-G3-AUTH-01 = USER_APPROVED / CLOSED` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / PENDING_USER_APPROVAL` |
| Development | `NOT_AUTHORIZED` |

## 2. Wireframe asset set

| Evidence | Logical viewport | Physical asset | Full-page size | Purpose |
|---|---:|---|---:|---|
| Desktop | `1440px` | `wireframes/M510_GATE3_DESKTOP_1440_V0.1.png` | `1440×4325` | Complete structure and desktop density |
| Tablet | `768px` | `wireframes/M510_GATE3_TABLET_768_V0.1.png` | `768×5598` | Complete stacked/tablet structure |
| Mobile | `390px` | `wireframes/M510_GATE3_MOBILE_390_V0.1.png` | `390×7405` | Complete single-column structure |
| Mobile Menu open | `390px` | `wireframes/M510_GATE3_MOBILE_MENU_OPEN_390_V0.1.png` | `390×844` | Shared mobile navigation open state |

Responsive interactive source: `wireframes/M510_GATE3_RESPONSIVE_WIREFRAME_V0.1.html`.

## 3. Locked module order

1. Shared Header.
2. Breadcrumb.
3. Product Hero.
4. Product Positioning.
5. Application Directions.
6. `What to Evaluate in Your Formulation`.
7. Typical Technical Data.
8. Document Request.
9. Destination Market support.
10. Sample Request.
11. Shared Footer.

Not Recommended, Origin Support and Related Grades do not create headings or blank vertical regions because their current rendering state is `OMIT`.

## 4. Desktop structure — 1440px

- Shared Header uses the approved navigation order, Products active state and fixed RFQ action.
- Hero is a two-column structure: real approved copy and three actions on the left; Grade-media slot or evidence-safe generic-media fallback on the right.
- Positioning uses five compact facts rather than oversized cards.
- Five application directions use a three-column editorial grid, with Printing Inks spanning the remaining width.
- Formulation evaluation presents two equal-priority cards.
- The twelve-row technical table and TDS action use a main/side layout.
- Documents and destination guidance share one row; four destination links remain compact beneath it.
- Sample request uses copy/action plus visible context-field structure.
- Shared Footer closes the page without an embedded RFQ form.

## 5. Tablet structure — 768px

- Shared navigation collapses to the menu control without removing the fixed RFQ destination from the menu contract.
- Hero becomes single-column: content and CTA set first, then media/fallback.
- Positioning facts wrap to three/two columns.
- Application and formulation cards use two columns.
- Technical table uses the full content width; the TDS action moves below the table.
- Document and destination panels remain two columns where legible; destination links use two columns.
- Sample content and fields stack into a full-width sequence.

## 6. Mobile structure — 390px

- Header exposes Logo and a minimum-46px menu control; Mobile Menu open evidence shows all eight approved navigation destinations and Products current state.
- Hero, all three actions and media slot are single-column.
- Five positioning facts, five application directions and both formulation-evaluation cards stack vertically.
- The technical table converts into twelve label/value row pairs; it does not require horizontal scrolling.
- TDS, document and sample actions are full width.
- Four Market destinations become full-width rows.
- Sample context fields stack without an embedded submission form.
- Footer groups stack into one column and retain procurement paths.

## 7. Conditional and interaction behavior

| Condition/state | Wireframe behavior |
|---|---|
| No approved Grade media | Keep the evidence-safe media slot or omit it at the later visual stage; never imply a package, factory or shipment |
| Receiver route unavailable | Omit only the affected action/module; do not render a broken or provisional link |
| Application/Market route unavailable | Preserve approved explanatory text and omit the unavailable link/card |
| Actual TDS conflict/withdrawal | Suppress only affected claim/value rows; no public governance notice |
| Mobile Menu open | Overlay is not used; menu expands in normal flow before breadcrumb, preserving reading and focus order |
| Related-grade reason absent | Related Grades remains fully omitted |

## 8. Density and accessibility decisions

- One H1 at every viewport.
- All twelve technical rows remain visible at every viewport.
- No module is removed solely for Tablet or Mobile.
- No horizontal overflow at `1440px`, `768px` or `390px`.
- Visible actions have a minimum rendered height of `46px`, above the `44px` minimum.
- Mobile actions use the available width and do not leave unexplained empty space after buttons.
- Real approved text lengths are used; no lorem ipsum or shortened technical labels.
- Reading order matches DOM order and the approved module sequence.

## 9. Gate 3 checkpoint

The user should review the structural priorities, density, responsive stacking and action placement shown by the four assets.

`GATE3_RESPONSIVE_WIREFRAME_CONFIRMED = PENDING_USER_APPROVAL`

Gate 4 remains unauthorized. Gate 3 approval does not authorize visual design, development, route enablement, deployment, publication or indexing.
