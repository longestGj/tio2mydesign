# TiO2 Malaysia Production SVG Logo Manifest V1.0

## 1. Authorization record

| Field | Value |
|---|---|
| Manifest ID | `TIO2MY-PRODUCTION-SVG-LOGO-MANIFEST-01` |
| Version | `V1.0` |
| Status | `APPROVED_PRODUCTION_SVG_BASELINE / ACTIVE` |
| Source review | `TIO2MY-LOGO-SVG-PCR-01 = APPROVED / CLOSED` |
| Project-control result | `PROJECT_CONTROL_REVIEW_PASS` |
| User approval date | `2026-08-31` |
| User decision | Brand direction approved; use rights confirmed by the user |
| Asset owner | Home / Global Chrome |
| Scope | All TiO2 Malaysia public pages and approved Global Chrome consumers |
| Development status | Not implemented; no development, deployment or publication is authorised by this Manifest |

This Manifest promotes the four byte-identical SVG files originally reviewed in `brand/logo/candidates/v0.1/` to the authorised production SVG baseline. The directory name records provenance only; the exact paths and hashes below are authoritative production payloads. No SVG content changed during promotion.

The user's confirmation records permission to use this brand direction and these assets for the project. This Manifest does not claim trademark registration, provide a legal opinion, or establish rights beyond the user's confirmation.

## 2. Authoritative production assets

| Asset key | Authoritative path | ViewBox | Bytes | SHA-256 | Production role |
|---|---|---|---:|---|---|
| `brand_logo_primary_horizontal` | `brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg` | `0 0 900 300` | 4,342 | `eeed3a758e7ae1b847238d1c88e86eee7a8e67b863969af4d286747e9a72487c` | Full-colour horizontal Logo on white or approved light neutral backgrounds |
| `brand_logo_reverse_monochrome` | `brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg` | `0 0 900 300` | 2,725 | `7cfaeafa02ac8469a006c9489db2f92b15b2621e4151b04efe1b30fc734c1b5e` | White horizontal Logo on Deep Navy or approved dark solid backgrounds |
| `brand_symbol_primary` | `brand/logo/candidates/v0.1/tio2-malaysia-symbol-v0.1.svg` | `0 0 300 300` | 2,510 | `9fd1fafafad4bc6fef0c05f499c27baf1051eef084d1b834b1061caf3b8b85a0` | Standalone Symbol where the brand name is present nearby or established by context |
| `brand_favicon_safe` | `brand/logo/candidates/v0.1/tio2-malaysia-favicon-safe-v0.1.svg` | `0 0 64 64` | 1,107 | `f1d1b97ff66211410a50279eed16414b5a6e888c27c11419e41265168d08692c` | Browser favicon and other very small square contexts |

The four SVGs contain SVG paths, shapes and internal gradients only. They contain no embedded raster, `<image>`, live `<text>`, external font, script, external `href`, CSS import or base64 payload.

## 3. Production usage and sizes

| Context | Required asset key | Approved proof / target box | Behaviour |
|---|---|---:|---|
| Desktop white Header | `brand_logo_primary_horizontal` | 180 × 60 px | Preserve aspect ratio; centre within the Logo box; transparent SVG background |
| Mobile white Header | `brand_logo_primary_horizontal` | 120 × 40 px | Preserve aspect ratio; do not crop; keep the approved `Logo | RFQ | Menu` structure |
| Deep Navy Footer | `brand_logo_reverse_monochrome` | 180 × 60 px proof | Preserve aspect ratio; use only on the approved dark solid background |
| Standalone Symbol | `brand_symbol_primary` | Minimum 48 × 48 px | Use only when the brand name is present nearby or context is unambiguous |
| Favicon | `brand_favicon_safe` | 32 × 32 and 48 × 48 px validated | Use the simplified favicon-safe asset, not the full horizontal Logo |

Responsive containers may scale the horizontal Logo down to the validated minimum `120 × 40 px`. Below that size, use the approved Symbol or favicon-safe asset according to context rather than shrinking the horizontal wordmark further.

## 4. Clear space

### Horizontal Logo

- Define `X` as 10% of the rendered Logo height.
- Maintain at least `2X` clear space on every side.
- Clear space is outside the SVG content box and cannot be consumed by navigation text, RFQ controls, borders or clipping containers.

### Symbol-only

- Maintain clear space of at least 12% of the rendered Symbol width on every side.
- Do not place the detailed Symbol below 48 px.

### Favicon-safe

- Use a square viewport and preserve the built-in transparent edge safety.
- Do not add the wordmark, a border, a background plate or additional particles at favicon sizes.

## 5. Approved colour system

| Colour | Hex | Use |
|---|---|---|
| Deep Navy | `#031B3A` | Darkest brand tone and approved Footer background |
| Navy | `#062B5B` | Primary wordmark and orbit |
| Industrial Blue | `#0B5FA5` | Secondary vector detail |
| Accessible Deep Teal | `#007F77` | Dark teal detail |
| Malaysia Teal | `#00A99D` | Number `2`, orbit and non-body-text accent |
| Light Teal | `#14B8A6` | Internal gradient highlight |
| White | `#FFFFFF` | Reverse monochrome Logo |

Do not infer permission to reuse Malaysia Teal as small text merely because it appears in the Logo. Page text contrast remains governed by the visual and accessibility standards.

## 6. Prohibited uses

- Do not modify the SVG paths, shapes, gradients, viewBox, proportions or colour assignments without a new approved asset version.
- Do not stretch, compress, skew, rotate, crop, rearrange or re-typeset the Logo.
- Do not replace path-outlined lettering with live text or a substitute font.
- Do not add glow, bevel, shadow, photographic fill, outline or animation.
- Do not use the full-colour Logo on Deep Navy; use `brand_logo_reverse_monochrome`.
- Do not use the reverse Logo on white or a light neutral background.
- Do not use the detailed Symbol at favicon size when `brand_favicon_safe` is available.
- Do not use any Logo graphic as evidence of Malaysia origin, manufacturing location, company ownership, product provenance, certification or legal status.
- Do not create page-specific copies or alternate asset keys.
- Do not substitute the historical PNG in production implementation.

## 7. Historical PNG boundary

The former visual-direction source remains unchanged for history and visual traceability only:

| Historical asset | Dimensions | SHA-256 | Current role |
|---|---:|---|---|
| `brand/visual/ChatGPT Image 2026年8月29日 09_37_10 (1).png` | 2172 × 724 | `285e6f4f2fd2304eb102845242a2b7c20dc9e1ac2db4d38541b1cde44ac75de5` | Historical / visual-direction provenance; not a production Logo source |

Existing approved visual mockups may continue to contain the PNG as historical rendered evidence. New development handoff and implementation must resolve the production asset keys to the SVG paths in Section 2.

## 8. Validation evidence

| Proof | Dimensions | SHA-256 |
|---|---:|---|
| `brand/logo/candidates/v0.1/proofs/proof-desktop-header-180x60-v0.1.png` | 180 × 60 | `d598a0e0d03cc87117ea0d0eeb04d441d904724b6c66030dd4f151c961446920` |
| `brand/logo/candidates/v0.1/proofs/proof-mobile-header-120x40-v0.1.png` | 120 × 40 | `3b1dff281788f8df83cf932d32eed3f754fdc72595231e2a813812dd186495ae` |
| `brand/logo/candidates/v0.1/proofs/proof-deep-navy-footer-180x60-v0.1.png` | 180 × 60 | `ec715afb3b8ce1e6c905ae69bc6d8bd2810049c51f6f293ba0343d3309dc03c2` |
| `brand/logo/candidates/v0.1/proofs/proof-favicon-32-v0.1.png` | 32 × 32 | `aae67774b73d3d6ff60b705ee970c7e2749444e292b753b1c88efb6b3f79c5d1` |
| `brand/logo/candidates/v0.1/proofs/proof-favicon-48-v0.1.png` | 48 × 48 | `fcd7d208657f258f3b85a259ba55171ebaa1794cbc02e523b94153037961f420` |

Project-control review verified 4/4 SVG parse and render, exact proof sizes, edge safety, source purity and old PNG hash preservation. Automated checks and this approval do not assert that the Logo has been implemented or published.

## 9. Change control

These four hashes form one immutable production baseline. Any change to visible geometry, colour, text outlines, viewBox, metadata that changes the file hash, or asset path requires:

1. a new versioned candidate;
2. new exact-size proofs and hashes;
3. project-control review; and
4. explicit user approval before replacement in this production Manifest.

