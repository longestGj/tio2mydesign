# DOC-000 Dimension Validation V0.5

## Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Review item | `DOC-000-G5-DIM-01` |
| Scope | Pixel dimensions, logical viewport, DPR, crop and responsive reflow only |
| Result | `PASS / SUBMITTED_FOR_REVIEW / NOT_APPROVED` |
| Gate stop | Gate 5 |

## Measured files

| File | Pixel dimensions | Logical viewport | DPR | Bytes | Last non-white row | Bottom blank | SHA-256 |
|---|---:|---:|---:|---:|---:|---:|---|
| `DOC-000_G5_DESKTOP_DIMENSION_REVIEW_V0.5.png` | 1440×3909 | 1440×3909 | 1× | 301960 | 3908 | 0 | `E347E55DD6FE88D726F37B2AAC25F0F470A1D8BA2130BF3ED1D20D5B4F2568CC` |
| `DOC-000_G5_TABLET_768_DIMENSION_REVIEW_V0.5.png` | 768×4831 | 768×4831 | 1× | 298788 | 4830 | 0 | `D08D724177786D0E40E171FD0FA16537074D1D251286BD4550178BF8C69841F0` |
| `DOC-000_G5_MOBILE_390_LOGICAL_2X_DIMENSION_REVIEW_V0.5.png` | 780×11126 | 390×5563 | 2× | 781688 | 11124 | 1 physical px | `DA9DB6E480EA61082B46A9E6D7B4AF70A43B1CC6628DD181B31D5764E4D066F6` |
| `DOC-000_G5_FINDER_STATES_AND_FLOW_V0.5.png` | 1440×1081 | 1440×1081 | 1× | 92024 | 1080 | 0 | `C824BBC404D7FE92131DB9A9ADBF92F7D54391809F7CF37DE46C44CC5D62B05F` |

The Mobile output must have an even physical height at DPR 2. Visible content ends at physical row 11124, so row 11125 is the single necessary rounding row, not a layout gap.

## Layout validation

- Desktop Hero is left/right and the desktop grid does not inherit the mobile breakpoint.
- Tablet has an explicit 768px reflow for Hero, Finder, results, types, Notes, FAQ, final conversion and Footer.
- Mobile is a dedicated 390px logical layout and is not a downscaled Desktop composition.
- All three Buyer Clean assets have no horizontal scroll, clipped labels/actions or abnormal bottom canvas.
- Long names such as `REACH & Compliance Information` and `Request Traceability Documents` remain inside their allocated rows and controls.
- Mobile controls and actions retain at least 44×44 logical-pixel targets.
- No page-owned Mobile Menu asset is included; the shared Home/Global Chrome 390×844 baseline remains authoritative.

## Boundary validation

- Content, Finder structure, copy and evidence-safe zero-state are unchanged from V0.4.
- Header, Mobile Menu and Footer are consumed from Global Chrome V0.5 without modification.
- No unverified file, revision, download, approval or immediate-availability claim was introduced.
- No Gate 6/7, child page, development, D16, deployment or publication work was performed.

