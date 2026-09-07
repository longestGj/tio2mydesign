# APP-000 Global Chrome Authority Realignment Delta V0.1

## 1. Control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| URL | `/applications/` |
| Date | 2026-09-01 |
| Parent visual | APP-000 V0.11 |
| Current visual | APP-000 V0.12 |
| Review ID | `APP-000-G5-V12-GLOBAL-CHROME-REALIGN-01` |
| Status | `REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Sole Global Chrome authority | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| Production Logo authority | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |

V0.12 is a targeted Gate 5 correction. It replaces only the V0.11 shared Header/Footer pixels and related specification references. APP-000 does not define a page-specific Header or Footer variant.

## 2. Corrected shared Chrome

- Desktop Header is exactly 84px.
- Mobile Header is exactly 64px logical and uses `Logo | RFQ | Menu`.
- Desktop Applications current state is Bold + 3px Malaysia Teal underline.
- Mobile Menu Applications current state is Bold + 4px Malaysia Teal left marker.
- Buyer-visible `CURRENT` text in Header and Mobile Menu is zero.
- Desktop Header, Mobile Header, Mobile Menu and Footer keep fixed RFQ visibility.
- Footer consumes the approved Deep Navy Brand / Explore / Information / Procurement / RFQ / Copyright contract.
- The V0.11 page-specific operating-entity Footer line is removed.
- Header uses `brand_logo_primary_horizontal`; Footer uses `brand_logo_reverse_monochrome` directly from the Production SVG Manifest.

## 3. Protected page content

V0.12 crops the complete V0.11 page body between the old Header and Footer, then places that byte-decoded raster without rescaling between the V0.5 shared Header/Footer. Raw RGBA protection hashes match for every full-page state:

| State | Protected body height | V0.11 hash | V0.12 hash | Result |
|---|---:|---|---|---|
| Desktop Full-route | 4916px | `43577FC21656B45AF042519CB13BC8D3064CEB425323BE1B51AB2F8FD82A080D` | same | PASS |
| Desktop Route-safe | 3880px | `251016F9A752E8C1EE4B08007A592C01CA4C919E8363299C8701CA6301DF5B43` | same | PASS |
| Tablet Full-route | 4922px | `F6E8E4111482226E7F49534E62A6207A586972E56512FD9C64BF08D8FF8FF75A` | same | PASS |
| Tablet Route-safe | 3860px | `8B6D13E6661CE72E3A95E5B7CE809919429A90213320F203547AFA4F84475ADF` | same | PASS |
| 390px Full-route, 2× export | 15696px | `D0284D5A9063DEC0E4ADA1DA8B5A69D725BB6C918C4A96045F63416EFBF8D5EC` | same | PASS |
| 390px Route-safe, 2× export | 11998px | `00B70451C803FED0ED7AA9B12A934094C2F67F3DFC0FF5367252B42C262D5F5D` | same | PASS |

Therefore V0.12 does not change APP-000 modules, copy, PRODUCT V0.3 relations, SEO/GEO boundaries, route-safe behavior, anchors, Grade pills, Process classifications, FAQ or Final RFQ content.

## 4. Explicitly rejected V0.11 proposals

The following V0.11 shared-component proposals were not approved and are not inherited:

- buyer-visible Mobile Header `Quote`;
- page-specific Footer line `Operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD.`;
- any APP-000-only Footer extension or alternative Logo binding.

`GLOBAL_HEADER_FOOTER_APP_V11_CHANGE_IMPACT_V0.1.md` is closed without approval and retained only for history.

## 5. Gate boundary

`APP-000-G5-V12-GLOBAL-CHROME-REALIGN-01 = REVISION_SUBMITTED_FOR_PROJECT_CONTROL_REVIEW`

This local correction is not project-control PASS, Gate 5 approval or a release-candidate decision. `G5-01` remains open. Gate 6/7, Application child pages, development and `D:\16Wordpress_nextjs` remain out of scope.

