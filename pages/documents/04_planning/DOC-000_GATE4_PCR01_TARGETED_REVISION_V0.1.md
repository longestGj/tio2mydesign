# DOC-000 Gate 4 PCR-01 Targeted Revision V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Parent review | `DOC-000-G4-DOC-EDITORIAL-01 = REVISION_REQUIRED / NOT_APPROVED` |
| Targeted revision ID | `DOC-000-G4-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Date | 2026-09-02 |
| Scope | P0-01 Tablet Selector geometry; P0-02 Mobile Explore Products helper |

## 1. P0-01 Tablet Selector geometry

### Returned defect

- Old dropdown: `x72..592, y1206..1258`.
- Old Continue: `x436..696, y1243..1293`.
- Actual overlap: `156×15px`.

The prior visual-validation PASS did not detect this overlap and is corrected by the independent project-control review.

### Revised geometry

| Element | Revised bounds |
|---|---|
| Dropdown | `x72..696, y1200..1252` |
| Stable helper / validation region | `y1273..1293` |
| Explore Products helper/link | baseline `y1312` |
| Continue | `x72..696, y1330..1380` |

- Field width: 624px.
- Continue width: 624px; height: 50px.
- Field-to-button visible vertical gap: 78px.
- Field/button overlap area: 0.
- Helper, validation, Explore Products and Continue use the same reserved positions for initial, validation and selected states.
- Following `How It Works` content is shifted down 50px to preserve clear section separation.

## 2. P0-02 Mobile helper restoration

The 390 logical Selector now visibly renders:

`Not sure which grade to select? Explore Products. →`

The target remains `/products/`. It is positioned below the stable validation slot and above the full-width Continue action. It is not hidden, collapsed or replaced at Mobile.

## 3. Unchanged pixels and contracts

| Asset / contract | Result |
|---|---|
| Desktop key visual | Byte-identical; unchanged SHA-256 |
| Selector / FAQ state board | Byte-identical; unchanged SHA-256 |
| Global Chrome assembly proof | Byte-identical; unchanged SHA-256 |
| Hero direct link | `Start a Document Request` → `/request-documents/`; unchanged |
| Four categories / 14 Grades / six FAQ | Unchanged |
| FAQ default collapsed | Unchanged |

## 4. Revalidation

- Tablet geometry: overlap area `0`, field-to-button gap `78px`, target height `50px`.
- Mobile Explore Products visible string count: `1`.
- Tablet/Mobile horizontal overflow: none by fixed canvas and bounded geometry inspection.
- Desktop, state-board and Chrome hashes remained unchanged after the targeted render.
- Full automated visual assertions: PASS.

## 5. Stage boundary

Both P0 findings passed independent project-control re-review and `DOC-000-G4-PCR-01` is closed on 2026-09-02. Parent Gate 4 advances only to `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL / NOT_APPROVED`. This is not user approval or Gate 4 closure. Gate 5, development and D16 remain unauthorized.

## 6. Subsequent user decision

After PCR-01 closure, the user approved `DOC-000-G4-DOC-EDITORIAL-01 = APPROVED / CLOSED` and authorized Gate 5 on 2026-09-02. PCR-01 remains closed and unchanged in scope.
