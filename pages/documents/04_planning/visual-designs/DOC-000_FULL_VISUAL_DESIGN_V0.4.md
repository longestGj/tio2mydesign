# DOC-000 Full Visual Design V0.4

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Gate | Gate 5 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| Direction | Supplied-reference alignment with dedicated breadcrumb |
| Parent | V0.3 Document Finder + Request Hub |
| Stop | No Gate 6+, child page, implementation, development or release |

## 1. Breadcrumb

Desktop and Mobile show a dedicated `Home / Documents` breadcrumb row directly below Header and above Hero. It is visually subordinate, does not replace the H1 and matches the visible `BreadcrumbList` candidate relationship.

## 2. Reference alignment

| Reference feature | V0.4 result |
|---|---|
| White two-column Hero | Adopted |
| H1 `Documents for Titanium Dioxide Products` | Adopted |
| Document language line | Adopted; English only |
| Right-side Document Index | Adopted with Find/Request semantics |
| Light-gray Finder | Adopted |
| M-350 selected in specimen | Adopted as a Finder selection, not an availability claim |
| Full-width result rows | Adopted |
| Reference TDS/SDS revisions and View/Download | Not adopted; unverified |
| Assisted request band | Adopted |
| 3×2 type cards | Adopted |
| Four Note cards | Adopted |
| Three FAQ rows | Adopted |
| Deep Navy final CTA | Adopted |
| Reference Header/Footer variations | Not adopted; Global Chrome remains authority |

## 3. Evidence-safe results

The results heading is `Document Request Options for M-350`. Buyer Clean states that no verified public document is listed for the selection, then provides six category-specific Request actions with product/type prefill.

This avoids inventing:

- M-350 TDS/SDS availability;
- revision `2026-01`;
- View/Download readiness;
- public file identity;
- product-document structured relationships.

The internal Finder-state board still documents how a future verified record would expose View/Download and full metadata.

## 4. Responsive result

Desktop uses a 1440px two-column Hero, three-field Finder row, full-width record rows, 3×2 type cards and four Note cards.

390px uses a dedicated breadcrumb row, stacked Hero/Finder/results, full-width request actions, single-column type cards, stacked Notes and full-width final conversion.

## 5. Asset manifest

| Asset | Dimensions | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `assets/DOC-000_G5_DESKTOP_REFERENCE_ALIGNED_BREADCRUMB_V0.4.png` | 1440×3909 | 301960 | `E347E55DD6FE88D726F37B2AAC25F0F470A1D8BA2130BF3ED1D20D5B4F2568CC` | Submitted / not approved |
| `assets/DOC-000_G5_MOBILE_390_REFERENCE_ALIGNED_BREADCRUMB_V0.4.png` | 390×5554 | 232736 | `BE992AFDCF361AC1AF25A35AA6B69BE7FB3BDBF2140CCFDA657C8E3BB03274B5` | Submitted / not approved |
| `assets/DOC-000_G5_MOBILE_390_MENU_OPEN_V0.4.png` | 390×720 | 13465 | `170482E434EBF7569A98A8E02D9459F7583B0934BB332D7F1CD18721C036B614` | Submitted / not approved |
| `assets/DOC-000_G5_FINDER_STATES_AND_FLOW_V0.4.png` | 1440×1081 | 92024 | `C824BBC404D7FE92131DB9A9ADBF92F7D54391809F7CF37DE46C44CC5D62B05F` | Internal review evidence |

## 6. Gate summary

| Gate | Result |
|---|---|
| Reference Alignment | PASS |
| Breadcrumb | PASS |
| Visual | PASS |
| Finder UX | PASS |
| English-only | PASS |
| Mobile UX | PASS |
| Document Record | PASS WITH CHANGES |
| Evidence | PASS WITH CHANGES |
| SEO | PASS WITH CHANGES |
| GEO | PASS WITH CHANGES |
| Conversion | PASS WITH CHANGES |

Open changes remain verified public records, canonical/index decisions and an approved/live Request Documents receiver.

## 7. Verification

- JavaScript passes syntax checking.
- Fragment contains no document shell and remains under 1 MB.
- Desktop, 390px, Menu and Finder-state assets rendered successfully.
- Breadcrumb is present in both Desktop and Mobile Buyer Clean frames.
- Desktop review is locked to the PC grid: Hero remains left/right, Finder remains a horizontal field row, type cards remain 3×2, Notes remain four columns and Footer remains four columns. Only the dedicated 390px view stacks.
- No Header/Footer, child-page or codebase change was made.

Status: `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED`.
