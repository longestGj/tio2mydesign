# RES-000 Gate 7 Acceptance, Rollback and Blockers V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-000` / `/resources/` |
| Package ID | `RES-000-G7-HANDOFF-01` |
| Review ID | `RES-000-G7-PCR-01` |
| Date | 2026-09-01 |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 8 | `NOT_AUTHORIZED` |
| Gate 9 | Future read-only QA only |

## 1. Gate 7 Package Acceptance Checklist

- [x] Page identity, P2, `NO_PRIMARY_KEYWORD`, mapping and verification match Registry/master CSV.
- [x] Gate 5 Manifest and three V0.5 asset hashes are included.
- [x] Exact approved Buyer Clean, SEO/GEO and Schema contracts are referenced.
- [x] Singleton, Resource relation and Trade fields include type, requiredness, enum, source/owner, review date and scope.
- [x] H0–H5 transitions and deterministic documentation fixtures are included.
- [x] Current public H0 and H1-public-equals-H0 are explicit.
- [x] V0.5 RES-ORIGIN card is prohibited as seed/default/placeholder/current public data.
- [x] WordPress/CMS, API, Next.js, components, Schema, cache, media, menu and form mappings are specified without code.
- [x] `site_scope=tio2-my` and no cross-scope fallback cover every layer.
- [x] Global Chrome V0.5, Production SVG, fixed RFQ and buyer-visible CURRENT=0 are explicit.
- [x] Desktop/Tablet/430/390, 200% zoom, keyboard, focus, disclosure, 44px, overflow and collapse criteria are explicit.
- [x] PRODUCT V0.3 and all required relationship/claim holds are preserved.
- [x] Route, child, Trade and freshness items are assigned to Gate 8 implementation and Gate 9 read-only QA/release acceptance.
- [x] Rollback and atomic-removal strategy is defined.
- [ ] Project control has reviewed and approved the Gate 7 package.
- [ ] User has authorized Gate 8.

## 2. Carry-forward Controls

| ID | Boundary | Current state | Gate 8 obligation | Gate 9 close evidence |
|---|---|---|---|---|
| `RES-R002` | RES-ORIGIN content, claim, route and public eligibility | OPEN | Do not publish until complete predicate passes | Scoped CMS/API/DOM/Schema proof |
| `RES-R003` | RES-PROC, RES-CHEMOURS, RES-R706 candidate status | OPEN | Exclude candidates from public projection | Zero public output until independently approved |
| `RES-R004` | Four Trade pages lack current official-source/freshness approval | OPEN | Exclude incomplete/stale Trade records | Official source/scope/date/review/status/route parity |
| `RES-R005` | Downstream routes not verified live | OPEN | Implement scoped routes without guessed fallback | Response, redirect, canonical and link evidence |
| `RES-R006` | Competitor/grade alternative equivalence risk | OPEN | No equivalence/ranking/substitution inference | Copy/API/Schema scan |
| `RES-R007` | Source/review maintenance ownership | OPEN | Assign accountable content/freshness owners | CMS owner/review history and removal test |
| `RES-R008` | Accessible Teal control | CONTROLLED_IN_DRAFT | Use approved accessible token behavior | Contrast and state inspection |
| `RES-R009` | Footer route boundary | CONTROLLED_IN_DRAFT | Consume shared Footer only | No unregistered/local Footer links |

These items do not block the existence or project-control review of the Gate 7 specification. They control Gate 8 behavior and Gate 9/release acceptance.

## 3. Gate 8 Implementation Acceptance Contract

If Gate 8 is later authorized, external development must:

1. Use exact `site_scope=tio2-my` filters in CMS, API, route, menu, media, form and cache operations.
2. Implement RES-000 singleton fields and exact approved Buyer Clean without editor-created primary-keyword drift.
3. Derive H0–H5 from governed predicates; never let editors directly choose a public H-state.
4. Keep H0 current output and H1 candidate public output identical.
5. Collapse Featured/Latest section roots, headings, dividers, links and spacing to 0px when ineligible.
6. Generate ItemList only from the same visible eligible collection.
7. Apply Trade metadata and freshness atomically.
8. Recompute collections and invalidate scoped caches atomically on H5 removal.
9. Consume shared Global Chrome V0.5 and Production SVG; do not create a Resources private Header/Footer.
10. Keep fixed RFQ visible and prohibit Contact or cross-scope fallback.
11. Emit exact metadata, canonical and robots-by-environment.
12. Preserve zero row-level PRODUCT relations and all named holds.
13. Implement semantic headings, disclosures, focus, menu behavior and target sizes.
14. Preserve content-driven heights and zero-height collapse across required viewports/zoom.

## 4. Gate 9 Read-only QA Matrix

| Domain | Required evidence |
|---|---|
| Identity | `/resources/`, one H1, exact Title/Meta/Canonical and Resources current state |
| Scope | No foreign CMS record, API item, route, menu, media, metadata, cache, form or Schema relation |
| H0 | Inventory=0; Featured=0px; Latest=0px; ItemList absent |
| H1 | Internal candidate present but public API/DOM/Schema byte/semantic-equivalent to H0 |
| H2 | One eligible card/link and one ItemList item; Latest=0px |
| H3 | Distinct Featured/Latest sets; deterministic order; no duplicate |
| H4 | Complete official source/scope/date/review/status/action atomic output |
| H5 | Card/link/order/date/status/ItemList removal in one release; no stale cache |
| Global Chrome | Shared V0.5, Production SVG, fixed RFQ, visible CURRENT=0, Footer Procurement |
| SEO/GEO | Exact metadata and visible answer consistency; no child-keyword acquisition |
| Schema | CollectionPage + BreadcrumbList; conditional ItemList parity; prohibited types absent |
| Product relations | Hub row-level relation=0; M-2377 and M-996/M-2196 boundaries intact |
| Desktop | 1440 visual hierarchy, content-driven height, no overlap/crop |
| Tablet | 768 layout and navigation; no horizontal overflow |
| Mobile | 430 and 390 widths; one column; ≥44px targets; no clip/overflow |
| Zoom | 200% browser zoom; no lost content/action and no two-dimensional page scrolling |
| Keyboard | Logical order, visible focus, Menu Escape/return, disclosure operation |
| Accessibility | headings, landmarks, names, `aria-current`, expanded/controls and initial DOM answers |
| Reduced motion | No information loss |

Static V0.5 PNGs provide visual direction only; runtime behavior needs the evidence above.

## 5. Release Blockers

Any of the following blocks Gate 9 acceptance, indexing or release:

- an ineligible H1 candidate appears in API, HTML, link, prefetch, sitemap or Schema;
- a conditional section leaves an empty heading, divider, focusable child, anchor gap or vertical slot;
- visible Resource and ItemList membership/order diverge;
- Trade metadata is incomplete, stale, unowned or not backed by the current official source;
- an H5 removal leaves stale content or Schema in a cache;
- any cross-scope query, fallback, cache, media, menu or form-context leakage occurs;
- Global Chrome is locally duplicated, fixed RFQ disappears, buyer-visible CURRENT appears or Logo authority diverges;
- Title, Meta, Canonical, robots or allowed Schema diverges;
- a row-level Product recommendation, equivalence, comparison or `NO_PUBLIC_MAPPING` negative inference appears;
- keyboard, focus, disclosure, Mobile Menu, 44px, overflow, zoom or responsive behavior fails.

## 6. Rollback Strategy

Rollback is content-safe and state-first:

1. Revoke the affected relation’s `public_eligibility_status` or freshness/claim state in the `tio2-my` scope.
2. Recompute the public projection before rendering.
3. Remove card, link, dates/status, ordering and ItemList entry in the same deployment/content transaction.
4. Purge only cache keys/tags containing `tio2-my`, `RES-000`, the affected Page ID and its eligibility/freshness revision.
5. Verify H0/H2/H3 steady state and Schema parity before reopening traffic/indexing.
6. Do not roll back by falling back to another site, rendering a disabled placeholder, redirecting to Contact or restoring stale static JSON.

If the RES-000 singleton itself fails, serve the development project’s approved safe error behavior; do not substitute another site scope or an old Resource body.

## 7. Gate 7 Disposition Boundary

This package is user-authorized for preparation and submitted for project-control review. It is not approved for handoff, not handed off, and does not authorize Gate 8. No Resource child, deployment, indexing or publication authority follows.

## 8. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Initial Gate 7 acceptance, rollback, Gate 8 obligations and Gate 9/release blocker matrix | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

