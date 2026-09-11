# Root Page Hero · Open-White Surface Addendum V1.0

## 1. Document Control

| Field | Value |
|---|---|
| Addendum ID | `ROOT-PAGE-HERO-OPEN-WHITE-01` |
| Version | `V1.0` |
| Date | `2026-09-11` |
| Parent | `ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md` |
| User decision | Home and Applications previously shared the unwanted large framed Hero; use the open-white Products feeling and do not make the other proposed changes |
| Status | `USER_APPROVED / ACTIVE` |
| Direct visual changes | `HOME-001`, `APP-000` only |
| Reference consumer | `PRODUCT-000` open-white Hero; no Product visual change authorized |

## 2. Exact Change

For `HOME-001` and `APP-000`, the shared Hero remains one `RootPageHero` component binding, but its outer surface is open white:

- no border around the complete Hero;
- no Hero-wide card background or gradient;
- no Hero-wide rounded rectangle;
- no Hero-wide box shadow;
- no left decorative teal/green line;
- the content remains aligned to the shared `1200px` page grid.

Removing the framed surface also removes its horizontal card inset so the text and media align to the same open page grid used by Products. Vertical breathing room remains content-driven.

## 3. Explicitly Unchanged

This decision does not authorize any of the other alternatives discussed after the first Home candidate. In particular:

- Home keeps its current H1, intro and both CTA labels/destinations;
- Home keeps its current TiO₂ material photograph;
- Home does not replace the photograph with statistics, navigation summaries or information cards;
- `Start Here` and all later modules remain unchanged;
- Applications keeps its current H1, intro, CTA, information-card content and following modules;
- `PRODUCT-000` is a visual-feeling reference and is not modified by this addendum;
- `MARKET-000`, `DOC-000`, `RES-000` and `ABOUT-001` are not modified by this user decision;
- Header, Footer, Logo, SEO/GEO/Schema, routes and production code are outside this change.

## 4. Parent-Contract Interpretation

This addendum supersedes only the parent contract's requirement that Home and Applications use a framed outer Hero Shell. Their shared component geometry, text/action/media slots, responsive structure and page-specific bindings remain governed by the parent contract.

The shared production component may expose this as an approved open-surface presentation. It must not create separate page-owned Hero implementations.

## 5. Workflow Boundary

- The rejected Home V1.0 candidate remains history and cannot be promoted.
- Home V1.1 is the first candidate implementing this decision.
- Applications has not yet been rendered under this addendum.
- No page Manifest, Gate 4 closure, Gate 5 review, Gate 8 implementation, deployment or release is authorized by this addendum alone.
