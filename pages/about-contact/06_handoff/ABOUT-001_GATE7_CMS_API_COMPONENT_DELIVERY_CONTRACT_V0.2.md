# ABOUT-001 Gate 7 CMS / API / Component Delivery Contract V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G7-PCR-02` |
| Parent | Delivery Contract V0.1 |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Inheritance

V0.1 page fields, Source Map strings, state model, ViewModel, components, Schema, cache isolation and Gate boundary remain current except where V0.2 replaces media eligibility language.

## 2. Media Record

```text
AboutBodyMediaRecord
  asset_key
  site_scope = tio2-my
  public_body_authorization = user_approved_external_use
  source_visual_key
  derivation_method = existing_source | approved_derived_crop | html_css_svg_rebuild
  implementation_path_or_component
  width_height_or_viewbox
  final_sha256
  placement
  responsive_crop_rule
  alt_text
  decorative
  selected_for_og = false by default
  selected_for_schema_image = false by default
```

All Asset keys in the Media Asset Handoff already have public-body authorization. Gate 8 must not require another user approval merely to set `implementation_path_or_component`.

## 3. Component Rules

- Hero consumes `about.hero.composite` and, when rebuilt separately, `about.hero.route_map`.
- Markets consumes `about.markets.map` and four flag Asset keys.
- Application cards consume their four named photo Asset keys; titles/descriptions remain HTML.
- Final CTA consumes `about.final_cta.background`; heading/body/buttons remain HTML.
- Global Header/Footer remain shared components and are not media records owned by ABOUT-001.
- No component may render the whole-page PNG as page content.

## 4. Gate 8 Failure State

If an Asset key has no independent source file, Gate 8 selects another permitted derivation method. Only failure of all permitted methods creates a blocker. The blocker records the Asset key and the failed technical methods; it does not reset `public_body_authorization` or request the same approval again.

## 5. OG and Schema Selection

Body records default to no OG/Schema image selection. Omitting image output is valid. If selected, the same record must identify the concrete implementation asset/hash and neutral semantic use.

## 6. Preserved Data Controls

All visible text, SEO/GEO/social/Schema facts, evidence-state atomicity, route relationships and `site_scope=tio2-my` isolation remain as defined in V0.1 and the approved Gate 6 V0.3 contracts. `legalName` and frozen facts remain absent.

## 7. Boundary

This contract is submitted for Gate 7 review. Gate 8 is not authorized and `HANDED_OFF=NO`.
