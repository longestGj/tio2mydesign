# TiO2 Malaysia Production SVG Logo Candidate Manifest V0.1

## 1. Governance

| Field | Value |
|---|---|
| Package ID | `TIO2MY-BRAND-LOGO-SVG-CANDIDATE-01` |
| Version | `V0.1` |
| Status | `APPROVED / CLOSED` |
| Asset owner | Home / Global Chrome task |
| Candidate date | 2026-08-31 |
| Source direction | `brand/visual/ChatGPT Image 2026年8月29日 09_37_10 (1).png` |
| Source direction size | 2172 × 724 px |
| Source direction SHA-256 | `285e6f4f2fd2304eb102845242a2b7c20dc9e1ac2db4d38541b1cde44ac75de5` |
| Production clearance | Promoted through `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| User brand approval | **Approved 2026-08-31** |
| Use-right confirmation | **Confirmed by user 2026-08-31** |

Final review record: `TIO2MY-LOGO-SVG-PCR-01 = APPROVED / CLOSED`. The exact four SVG hashes are promoted by the separate Production Manifest V1.0; this candidate Manifest remains the provenance and review record.

This package is a manually reconstructed vector candidate. It preserves the approved Symbol + `TiO₂` wordmark + `MALAYSIA` recognition and the Navy / Teal palette while simplifying raster-only highlights, particles and surface texture. It is not an auto-trace and does not wrap the source PNG in SVG.

## 2. Authoritative SVG candidates

| Asset key | Candidate file | ViewBox | Bytes | SHA-256 | Intended use |
|---|---|---|---:|---|---|
| `brand_logo_primary_horizontal` | `tio2-malaysia-primary-horizontal-v0.1.svg` | `0 0 900 300` | 4,342 | `eeed3a758e7ae1b847238d1c88e86eee7a8e67b863969af4d286747e9a72487c` | Primary horizontal full-colour mark on white or very light neutral backgrounds |
| `brand_logo_reverse_monochrome` | `tio2-malaysia-reverse-monochrome-v0.1.svg` | `0 0 900 300` | 2,725 | `7cfaeafa02ac8469a006c9489db2f92b15b2621e4151b04efe1b30fc734c1b5e` | Single-colour white mark on Deep Navy or another approved dark solid background |
| `brand_symbol_primary` | `tio2-malaysia-symbol-v0.1.svg` | `0 0 300 300` | 2,510 | `9fd1fafafad4bc6fef0c05f499c27baf1051eef084d1b834b1061caf3b8b85a0` | Symbol-only use where the full brand name is present nearby or the brand is already established |
| `brand_favicon_safe` | `tio2-malaysia-favicon-safe-v0.1.svg` | `0 0 64 64` | 1,107 | `f1d1b97ff66211410a50279eed16414b5a6e888c27c11419e41265168d08692c` | Favicon and very small square browser/app contexts |

All visible lettering in the horizontal candidates is built from SVG paths. No production candidate depends on an external font.

## 3. Palette

| Colour | Hex | Role | Contrast note |
|---|---|---|---|
| Deep Navy | `#031B3A` | Deepest brand tone and approved dark background | White on Deep Navy: `17.19:1` |
| Navy | `#062B5B` | Primary wordmark and orbit | Navy on white: `13.96:1` |
| Industrial Blue | `#0B5FA5` | Secondary vector detail | Blue on white: `6.57:1` |
| Accessible Deep Teal | `#007F77` | Dark teal detail | Deep Teal on white: `4.88:1` |
| Malaysia Teal | `#00A99D` | Non-text accent, number `2`, orbit and decorative detail | `2.93:1` on white; do not use as small body text |
| Light Teal | `#14B8A6` | Gradient highlight only | Non-text decorative use |
| White | `#FFFFFF` | Reverse mark | White on Deep Navy: `17.19:1` |

## 4. Clear space and minimum sizes

### Horizontal logo

- Define `X` as 10% of the rendered logo height.
- Keep at least `2X` clear space on every side of the horizontal mark.
- Recommended Desktop Header size: `180 × 60 px` canvas.
- Minimum digital display: `120 × 40 px`; below this use `brand_symbol_primary` or `brand_favicon_safe` according to context.

### Symbol-only

- Keep at least 12% of the rendered symbol width as clear space on every side.
- Minimum recommended digital size for the detailed symbol: `48 × 48 px`.

### Favicon-safe

- Designed for `16–48 px` square contexts.
- Validated raster proofs in this package: `32 × 32 px` and `48 × 48 px`.
- Do not add the wordmark at favicon sizes.

## 5. Prohibited uses

- Do not stretch, compress, skew, rotate, crop or rearrange the mark.
- Do not replace the outlined wordmark with live text or another typeface.
- Do not recolour individual elements outside this candidate palette.
- Do not apply glow, bevel, drop shadow, outline, texture or photographic fill.
- Do not place the full-colour primary mark directly on Deep Navy; use the reverse version.
- Do not place the reverse version on a light background.
- Do not use the detailed symbol below 48 px when the favicon-safe asset is available.
- Do not treat the simplified geographic forms as geographic, origin, manufacturing or legal evidence.
- Do not claim trademark clearance, production approval or final brand approval from this candidate status.
- Do not recreate page-specific copies; all future consumers must reference the registered global asset key.

## 6. Raster proof manifest

Raster proofs are QA evidence derived from the SVG candidates. They are not authoritative production logo sources.

| Proof | Exact dimensions | Bytes | SHA-256 | Verification purpose |
|---|---:|---:|---|---|
| `proofs/proof-desktop-header-180x60-v0.1.png` | 180 × 60 | 6,382 | `d598a0e0d03cc87117ea0d0eeb04d441d904724b6c66030dd4f151c961446920` | Primary mark on white Desktop Header canvas |
| `proofs/proof-mobile-header-120x40-v0.1.png` | 120 × 40 | 3,837 | `3b1dff281788f8df83cf932d32eed3f754fdc72595231e2a813812dd186495ae` | Minimum approved horizontal Mobile Header canvas |
| `proofs/proof-deep-navy-footer-180x60-v0.1.png` | 180 × 60 | 4,286 | `ec715afb3b8ce1e6c905ae69bc6d8bd2810049c51f6f293ba0343d3309dc03c2` | Reverse mark on `#031B3A` Footer canvas |
| `proofs/proof-favicon-32-v0.1.png` | 32 × 32 | 1,273 | `aae67774b73d3d6ff60b705ee970c7e2749444e292b753b1c88efb6b3f79c5d1` | Small browser icon clarity with transparent edge safety |
| `proofs/proof-favicon-48-v0.1.png` | 48 × 48 | 1,938 | `fcd7d208657f258f3b85a259ba55171ebaa1794cbc02e523b94153037961f420` | High-density / expanded favicon clarity with transparent edge safety |
| `proofs/logo-candidate-review-board-v0.1.png` | 880 × 520 | 143,787 | `12bfb02303147d2d4d63629a402d56891d59b8fa86807cba3471f2be6d03073c` | Side-by-side human review board |

## 7. Structural validation

All four candidate SVGs passed the following checks on 2026-08-31:

- XML parse: PASS.
- SVG raster parse through Sharp / librsvg: PASS.
- Stable non-zero `viewBox`: PASS.
- Embedded `<image>`: 0.
- `data:image` or base64 raster payload: 0.
- `<script>`: 0.
- external `href` / `xlink:href`: 0.
- visible `<text>` dependency: 0.
- CSS `@import`: 0.
- transparent SVG background: PASS.
- exact proof dimensions: PASS.
- horizontal clipping or overflow in all required proof canvases: not observed in rendered review.

Automated parsing and size checks do not replace project-control visual review or user brand approval.

## 8. Approval boundary

This candidate review is closed. Project control passed the vector construction and usage rules, and the user approved the brand direction and confirmed use rights on 2026-08-31. The exact four hashes are now the active production SVG baseline under `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`.

This approval does not claim trademark registration or constitute a legal opinion. Implementation, deployment and publication remain separately controlled.
