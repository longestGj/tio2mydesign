# DOC-000 Full Visual Design V0.5

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Gate | Gate 5 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| Revision | `DOC-000-G5-DIM-01` — dimension/export correction only |
| Content parent | V0.4 reference-aligned Document Finder + Request Hub with breadcrumb |
| Stop | No Gate 6+, child page, implementation, development or release |

V0.5 does not reopen or change the V0.4 content architecture, Finder structure, copy, evidence boundary, Header or Footer. It corrects the formal responsive and export baselines only.

## 1. Formal viewport system

| Surface | Logical viewport | DPR | Formal physical export | Layout contract |
|---|---:|---:|---:|---|
| Desktop Buyer Clean | 1440px wide | 1× | 1440×3909 | Two-column Hero; horizontal Finder; structured rows; 3×2 types; four Notes; four-column Footer |
| Tablet Buyer Clean | 768px wide | 1× | 768×4831 | Dedicated reflow; two-column Hero retained; Finder fields 2-up with full-row submit; 2-column types/Notes/Footer |
| Mobile Buyer Clean | 390px wide | 2× | 780×11126 | Dedicated single-column composition; full-width controls/actions; physical export records `390 logical @2×` |
| Finder states | 1440px wide | 1× | 1440×1081 | Internal review evidence only; not Buyer Clean |

The Mobile physical height is the even 2× result of a 390×5563 logical viewport. Its final physical row is intentionally blank because the visible content boundary falls on an odd physical pixel; this is not trailing layout whitespace.

## 2. Tablet reflow

The 768px asset is not a scaled Desktop screenshot. It uses explicit reflow rules:

- Hero remains a controlled left/right pair with reduced gap and type scale.
- Finder fields form two columns; the Find action spans the full Finder width.
- Result records preserve icon, long document name/description and a distinct request action without horizontal clipping.
- Document Types and Important Notes use two columns.
- FAQ remains full-width and readable.
- Final conversion keeps message and action distinct.
- Footer becomes two columns while preserving the shared content and fixed RFQ.

## 3. Mobile export correction

The former 390×5554 @1× asset is historical and is not a formal mobile export. V0.5 uses a 390px logical viewport rendered natively at DPR 2, producing a 780px physical-width PNG. The dedicated Mobile layout retains:

- 64px shared Mobile Header;
- breadcrumb above Hero;
- stacked Hero, Finder, results, type cards, Notes, FAQ and final conversion;
- full-width request actions;
- no horizontal scroll, cut-off long label or desktop-grid shrink;
- effective touch targets of at least 44×44 logical pixels.

## 4. Mobile Menu ownership

DOC-000 does not own or submit a formal Mobile Menu asset in V0.5. It consumes the shared Global Chrome V0.5/Home-owned baseline unchanged:

| Shared asset | Logical dimensions | Bytes | SHA-256 | Role |
|---|---:|---:|---|---|
| `pages/home/04_planning/visual-designs/homepage-mobile-menu-open-v0.6.png` | 390×844 | 34905 | `FB0C56744BAE0B524E3D0B6F28B3FF56B617B2C2D9DB21554ADADF4BC1A0ABC6` | Shared-component consumption reference; not a DOC-000 deliverable |

The V0.4 page-owned 390×720 Menu image is historical and non-authoritative. Header, Mobile Menu and Footer continue to follow `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, including permanent `/request-a-quote/`, zero buyer-visible `CURRENT` text and the shared Production SVG.

## 5. Asset manifest

| Asset | Physical dimensions | Logical viewport / DPR | Bytes | SHA-256 | Status |
|---|---:|---|---:|---|---|
| `assets/DOC-000_G5_DESKTOP_DIMENSION_REVIEW_V0.5.png` | 1440×3909 | 1440×3909 @1× | 301960 | `E347E55DD6FE88D726F37B2AAC25F0F470A1D8BA2130BF3ED1D20D5B4F2568CC` | Submitted / not approved |
| `assets/DOC-000_G5_TABLET_768_DIMENSION_REVIEW_V0.5.png` | 768×4831 | 768×4831 @1× | 298788 | `D08D724177786D0E40E171FD0FA16537074D1D251286BD4550178BF8C69841F0` | Submitted / not approved |
| `assets/DOC-000_G5_MOBILE_390_LOGICAL_2X_DIMENSION_REVIEW_V0.5.png` | 780×11126 | 390×5563 logical @2× | 781688 | `DA9DB6E480EA61082B46A9E6D7B4AF70A43B1CC6628DD181B31D5764E4D066F6` | Submitted / not approved |
| `assets/DOC-000_G5_FINDER_STATES_AND_FLOW_V0.5.png` | 1440×1081 | 1440×1081 @1× | 92024 | `C824BBC404D7FE92131DB9A9ADBF92F7D54391809F7CF37DE46C44CC5D62B05F` | Internal review evidence |

No `Mobile Menu` file is part of this V0.5 manifest.

## 6. Responsive and crop validation

| Check | Desktop | Tablet | Mobile 390 logical @2× |
|---|---|---|---|
| Formal width | PASS | PASS | PASS — 780 physical / 390 logical |
| Horizontal overflow | PASS | PASS | PASS |
| Text/action cut-off | PASS | PASS | PASS |
| Long document names | PASS | PASS | PASS |
| Abnormal trailing whitespace | PASS | PASS | PASS — only one unavoidable physical pixel row |
| Buyer-clean page | PASS | PASS | PASS |
| Shared Header/Footer | PASS | PASS | PASS |
| Touch target ≥44 logical px | N/A | PASS where touch applies | PASS |

## 7. Gate result

`DOC-000-G5-DIM-01` is corrected and submitted for review. Submission is not approval. V0.4 remains the content/evidence parent; V0.5 is the current dimension/export review candidate. Gate 6, Gate 7, Document child pages, development, deployment and publication remain unauthorized.

