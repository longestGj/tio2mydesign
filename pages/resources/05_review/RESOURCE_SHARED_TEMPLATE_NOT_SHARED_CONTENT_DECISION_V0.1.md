# Resources Shared Template / Independent Content Decision V0.1

## 0. Decision control

| Field | Value |
|---|---|
| Decision ID | `RESOURCE-TEMPLATE-CONTENT-SEPARATION-01` |
| Decision date | 2026-09-05 |
| Decision source | User confirmation in the current project-control conversation |
| User decision | `我们需要是共用模板，不是共用内容。` |
| Status | `USER_APPROVED / CLOSED` |
| Applies to | Future Resources child-page planning and development handoff |
| Does not authorize | Any page Gate progression, D16 code change, development, deployment, publication or indexing |

## 1. Approved principle

Resources pages may share an implementation template, but they must not share buyer-visible content or a fixed content architecture.

The shared template means a reusable technical and visual foundation. It does not mean copying `RES-ORIGIN`, preserving its 13-module sequence, or substituting a brand, grade, process, country or jurisdiction inside the same page copy.

## 2. What may be shared

- Global Header and Global Footer.
- Approved brand tokens, typography foundation, container behavior and common spacing rules.
- Reusable low-level presentation components such as breadcrumb rendering, article container, heading rhythm, tables, ordered steps, callouts, quotations, source/citation presentation and accessible disclosure controls.
- Optional slots or renderers that a page may choose to use, including a Hero shell, generated table of contents, source list, FAQ interface and CTA controls.
- Technical utilities for route validation, relation eligibility, fail-closed rendering, metadata serialization, Schema validation, responsive behavior and accessibility primitives.
- `site_scope=tio2-my` isolation and shared no-cross-scope-fallback rules.

Sharing a component or renderer never requires a page to display that component.

## 3. What must remain page-specific

Every Resource child page must independently define and approve:

- Page ID, slug, URL, primary keyword, search intent and cannibalization boundary.
- H1, Hero content and whether a Hero treatment is appropriate.
- Buyer questions, narrative structure, module selection, module order and complete buyer-visible copy.
- Claims, evidence, sources, dates, scope, freshness and public-render decisions.
- Whether a table of contents, FAQ, comparison, source section or CTA is useful.
- CTA label, destination, prefill and placement.
- Internal-link relationships and each target's public eligibility.
- Title, Meta Description, Canonical, OG data, indexing intent, GEO answer blocks and Schema choice/values.
- Desktop, Tablet and Mobile composition and page-specific accessibility acceptance.

## 4. RES-ORIGIN reuse boundary

`RES-ORIGIN` is an approved implementation reference for Resources visual character, content-width behavior, base editorial components, safe Article-metadata validation, responsive techniques and accessibility behavior.

It is not the content template for `RES-PROC`, `RES-CHEMOURS`, `RES-R706` or any `RES-TRADE-*` page. Its Hero, qualification path, six checks, module sequence, FAQ, CTA, relations, SEO and Schema values remain specific to `RES-ORIGIN`.

## 5. Gate and change-control effect

- Each remaining Resource page retains its own Gate 0–9 lifecycle and independent Page Brief.
- `NEW_PAGE_CANDIDATE` and `PLANNED_CONTENT` statuses are not upgraded by this decision.
- A future shared-template specification must describe slots and reusable primitives without prescribing identical page content or module order.
- Any D16 CMS, WordPress, routing, component or data-model change requires a separately approved Gate 7 handoff and Gate 8 authorization.
- Gate 10 remains separately controlled.

`RESOURCE-TEMPLATE-CONTENT-SEPARATION-01 = USER_APPROVED / CLOSED`
