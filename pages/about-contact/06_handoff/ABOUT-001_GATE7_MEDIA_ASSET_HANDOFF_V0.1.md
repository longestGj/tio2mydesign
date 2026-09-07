# ABOUT-001 Gate 7 Media Asset Handoff V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G7-PCR-02` |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Public-body authorization | `USER_APPROVED_EXTERNAL_USE` under root `AGENTS.md` §2.3 |
| Gate 8 | `NOT_AUTHORIZED / NOT_STARTED` |

## 1. Frozen Visual Sources

| Source key | Path | Dimensions | SHA-256 |
|---|---|---:|---|
| `about.visual.desktop.v03` | `D:\23MySec\pages\about-contact\04_visual\pcr02_assets\ABOUT-001_G6_PCR02_DESKTOP_1440_MINIMAL_EDIT_V0.3.png` | 1440×3113 | `2EE18B00936CCB27C7608B2D2F02D893B3FD405F995EC59437314BB8F255E463` |
| `about.visual.tablet.v03` | `D:\23MySec\pages\about-contact\04_visual\pcr02_assets\ABOUT-001_G6_PCR02_TABLET_768_MINIMAL_EDIT_V0.3.png` | 768×1660 | `0499575828FDEDA0981B74C26F2FF5EB7520329D3997C2B77BA14836D652D35A` |
| `about.visual.mobile.v03` | `D:\23MySec\pages\about-contact\04_visual\pcr02_assets\ABOUT-001_G6_PCR02_MOBILE_390_CONTINUOUS_MINIMAL_EDIT_V0.3.png` | 390×4036 | `3569506CD704FC7AEDADC4956FDC455F8763C8637D3C46DD2F23B4D9D6C45856` |

These are flattened full-page visual proofs. They are approved source references but must not be used as the rendered webpage and must not cause headings, body copy, buttons or navigation text to be rasterized.

## 2. Body-Media Authorization Rule

Every item in §3 has `approved_usage=ABOUT-001 public body`. No repeated user approval is required for that body use. The external implementation must produce a named site asset or HTML/CSS/SVG reconstruction that matches the frozen visual and records its derivation.

`site_scope=tio2-my` applies to all stored media, derived assets, metadata, cache keys and relations. No media fallback may read another site scope.

## 3. Media Inventory and Production Mapping

| Asset key | Visible object and placement | Current source / derivation | Desktop / Tablet / Mobile behavior | ALT / semantics | Independent file/hash now |
|---|---|---|---|---|---|
| `about.hero.composite` | Hero right-side port/container, powder bowl, TiO2 bag and route-map composition | Frozen V0.3 Hero region. Prefer existing source layers if found; otherwise derive clean visual crops and reconstruct map/lines as separate SVG/CSS layers | Desktop right-side wide composition; Tablet preserves right-side relationship without covering copy; Mobile full-width visual after Hero CTAs as shown | Composite may be decorative with `alt=""` when the visible Hero copy carries the meaning. If exposed as informative: `Illustrative titanium dioxide powder and packaging with port containers and a market map.` Never call it an IKHLAS factory, inventory or actual shipment | `NONE_SEPARATE`; inherits source visual hashes until Gate 8 creates derived assets |
| `about.hero.route_map` | World map, Malaysia node, four labels and route lines within Hero | Rebuild as HTML/SVG/CSS from frozen geometry; do not crop label text into a bitmap | Preserve four visible labels; responsive lines may simplify without changing destinations | `aria-hidden="true"`; it is presentation and does not prove fixed shipping routes | `NONE_SEPARATE` |
| `about.markets.map` | Light world map and four green location markers in Markets | Rebuild as SVG/CSS or derive a text-free crop from frozen V0.3 region | Desktop left map; Tablet proportional; Mobile full-width above market list | Decorative `alt=""` because market names are adjacent text | `NONE_SEPARATE` |
| `about.markets.flag.eu` | EU flag beside European Union card | Rebuild/use a matching source asset; do not rasterize card text | Fixed icon ratio; adjacent text remains HTML | Decorative `alt=""` because `European Union` is visible text | `NONE_SEPARATE` |
| `about.markets.flag.uk` | UK flag beside United Kingdom card | Same derivation rule as EU flag | Same | Decorative `alt=""` | `NONE_SEPARATE` |
| `about.markets.flag.india` | India flag beside India card | Same derivation rule as EU flag | Same | Decorative `alt=""` | `NONE_SEPARATE` |
| `about.markets.flag.brazil` | Brazil flag beside Brazil card | Same derivation rule as EU flag | Same | Decorative `alt=""` | `NONE_SEPARATE` |
| `about.application.coatings` | Coatings card image | Locate existing approved source or derive a clean photo-only crop from the V0.3 card before the HTML overlay area | Desktop/Tablet card cover; Mobile two-column card crop; use `object-fit: cover` equivalent without subject loss | `White coating being applied with a brush.` Adjacent title/body remain HTML | `NONE_SEPARATE` |
| `about.application.plastics` | Plastics card image | Locate source or derive clean photo-only crop | Same crop policy as Coatings | `White plastic pipes.` | `NONE_SEPARATE` |
| `about.application.printing_inks` | Printing Inks card image | Locate source or derive clean photo-only crop | Same crop policy as Coatings | `Open containers of coloured printing ink.` | `NONE_SEPARATE` |
| `about.application.paper` | Paper / Related Uses card image | Locate source or derive clean photo-only crop | Same crop policy as Coatings | `A stack of white paper.` | `NONE_SEPARATE` |
| `about.final_cta.background` | Industrial structure on the right of the Deep Navy final CTA | Derive a text-free right-side crop or rebuild the dark overlay and geometry from approved source material | Desktop right-side crop; Tablet reduced; Mobile background/crop must not obscure HTML heading/buttons | Decorative `alt=""`; never identify it as an IKHLAS plant without separate fact authorization | `NONE_SEPARATE` |

## 4. Gate 8 Derivation Procedure

For each Asset key, external development must select one method and record it in its implementation manifest:

1. `EXISTING_SOURCE`: bind an existing source file that visually matches the frozen reference.
2. `APPROVED_DERIVED_CROP`: create a clean crop from the frozen V0.3 visual or its located source layer, excluding all UI text, buttons and navigation.
3. `HTML_CSS_SVG_REBUILD`: recreate the visual geometry with semantic HTML/CSS/SVG while keeping all public text in HTML.

The resulting implementation record must include:

- derived asset path or component identifier;
- derivation method and source key;
- width/height or vector viewBox;
- final SHA-256 for raster/vector files;
- `site_scope=tio2-my`;
- body placement and responsive crop rule;
- ALT/decorative value;
- whether it is also selected for OG or Schema image output.

## 5. Implementation Blocker Rule

The user-approved body-media authorization is closed and must not be reopened merely because independent media files are absent today. A Gate 8 blocker exists only when a named Asset key cannot be implemented by any allowed derivation method without:

- rasterizing UI text;
- introducing a new unapproved factual implication;
- breaking the frozen visual relationship; or
- violating `site_scope` isolation.

The blocker must name the Asset key and failed methods. It is resolved by producing a valid implementation asset/rebuild, not by requesting the same body-visual approval again.

## 6. OG and Schema Image Output

OG/Schema image output is optional. If no specific Asset key is selected, omit `og:image`, `twitter:image`, `Organization.image`, `ImageObject` and `primaryImageOfPage`.

If selected, the implementation must reference a concrete derived/approved Asset key, remain visually consistent with the page, use neutral semantics and record the final file hash. Selection must not infer a factory, stock, warehouse, shipment or customer relation from the image.

## 7. Gate 9 Proof

Read-only QA verifies every rendered media item against this inventory, its final implementation manifest, responsive behavior, ALT/decorative semantics, scope isolation and image-output selection. A whole-page PNG, rasterized body text or untracked cross-scope asset is a blocking failure.
