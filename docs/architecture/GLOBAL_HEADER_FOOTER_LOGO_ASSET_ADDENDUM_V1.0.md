# Global Header / Footer Production Logo Asset Addendum V1.0

## Document control

| Field | Value |
|---|---|
| Addendum ID | `GLOBAL-CHROME-PRODUCTION-LOGO-01` |
| Version | `V1.0` |
| Status | `APPROVED_GLOBAL_LOGO_ASSET_BINDING` |
| Approval source | User approval and use-right confirmation dated 2026-08-31 |
| Closed review | `TIO2MY-LOGO-SVG-PCR-01 = APPROVED / CLOSED` |
| Production authority | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| Applies to | Global Header, Mobile Header, Mobile Menu brand area, Footer and favicon across TiO2 Malaysia |

This Addendum changes only the Global Chrome Logo asset binding. It does not change navigation, fixed RFQ, Footer columns, page content, SEO/GEO, Schema, routes, facts, responsiveness or release gates in the applicable Global Header / Footer specifications.

## Required asset binding

| Global asset key | Production SVG |
|---|---|
| `brand_logo_primary_horizontal` | `brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg` |
| `brand_logo_reverse_monochrome` | `brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg` |
| `brand_symbol_primary` | `brand/logo/candidates/v0.1/tio2-malaysia-symbol-v0.1.svg` |
| `brand_favicon_safe` | `brand/logo/candidates/v0.1/tio2-malaysia-favicon-safe-v0.1.svg` |

All consumers must use the exact paths and hashes in the Production Manifest. Page-specific copies, raster fallbacks and cross-`site_scope` fallbacks are not approved production behaviour.

## Global Chrome usage

- Desktop Header: `brand_logo_primary_horizontal`, validated at 180 × 60 px.
- Mobile Header: `brand_logo_primary_horizontal`, validated at 120 × 40 px.
- Deep Navy Footer: `brand_logo_reverse_monochrome`.
- Browser favicon: `brand_favicon_safe`, validated at 32 and 48 px.
- Symbol-only contexts: `brand_symbol_primary`, minimum 48 px and only where brand context is clear.
- Accessible name remains `TiO2 Malaysia`; the Header Logo may link to Home but does not replace the visible `Home` navigation item.

## Historical visual assets

The 2172 × 724 PNG remains available for historical visual comparison and existing raster mockup provenance. It is not an approved production implementation source and must not be exported, resized or wrapped inside SVG as a production fallback.

## Implementation boundary

This approved asset binding makes the SVGs available for later authorised handoff. It does not mean the assets are implemented, deployed, published or live. Development remains outside `D:\23MySec` and requires its own authorised external task.

