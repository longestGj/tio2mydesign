# Product Detail Gate 7 Next.js, API and Component Contract V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `PRODUCT-DETAIL-G7-NEXT-API-01` |
| Gate 7 Review ID | `PRODUCT-DETAIL-G7-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Scope | Implementation-neutral delivery contract |
| Code/development | Not authorized by this document |

## 2. Route and query contract

- Public pattern: `/products/{approved-grade-slug}/`.
- Resolve by `site_scope=tio2-my + locale + approved slug`.
- Reject case, spacing or alias variants unless an approved scoped redirect maps them to the canonical path.
- A route record does not authorize public content. The content record and index/release state must independently pass.
- Missing scoped data returns the approved 404, preview-only or disabled state. It never falls back to another scope.

## 3. Public projection

The API layer constructs a public projection before rendering.

1. Select the exact `tio2-my` grade record.
2. Confirm page state and locale.
3. Remove every module/claim group not marked `verified`.
4. Remove non-approved items from mixed collections before serialization.
5. Resolve route keys against the scoped route-readiness registry.
6. Replace unresolved actions/links with omission, never Contact or placeholder fallback.
7. Generate visible content, metadata and JSON-LD from the same filtered projection.

`pending_verification`, `not_public`, `NO_PUBLIC_MAPPING`, Rubber evidence-only data, comparison-hold content and admin evidence metadata must not enter page props, RSC payloads, HTML, JSON-LD, preload data, Open Graph content, analytics labels or public endpoints.

## 4. Component mapping

| Order | Shared component | Input | Conditional rule |
|---:|---|---|---|
| 0 | shared `GlobalHeader` | current Global Chrome registry | Always; page-private Header prohibited |
| 1 | `Breadcrumb` | identity + Products route | Always |
| 2 | `GradeHero` | hero + media + resolved CTA keys | Identity required; claims/actions conditional |
| 3 | `GradePositioning` | positioning | Verified useful group only |
| 4 | `GradeApplications` | visible neutral relations/content | Verified non-empty collection |
| 5 | `EvaluationPriorities` | performance/qualification/explicit negative groups | Each claim group independently gated |
| 6 | `TechnicalData` | visible technical rows | Verified non-empty rows |
| 7 | `DocumentRequestEntry` | documents + receiver readiness | Receiver functional and copy approved |
| 8 | `OriginSupport` | origin claim group + routes | Verified product-specific claim or approved neutral link |
| 9 | `MarketSupport` | resolved market routes | Functional destinations only |
| 10 | `RelatedGrades` | approved relationships + resolved grade routes | Two or more useful targets; no ranking |
| 11 | `SampleRequestEntry` | sample receiver readiness | Functional receiver only |
| 12 | shared `GlobalFooter` | current Global Chrome registry | Always; page-private Footer prohibited |

The RFQ form is never a Grade Detail component. Header/Hero/Footer actions resolve to the standalone RFQ receiver.

## 5. Conditional-rendering invariants

- A suppressed module has no heading, wrapper, anchor, spacer, section-navigation item or accessible hidden copy.
- Section navigation is derived from rendered modules, not a fixed all-module list.
- Background alternation follows the rendered order.
- One missing module cannot change the semantic sequence of the remaining content.
- A missing process/category badge does not create an empty Hero slot.
- A no-public relationship cannot be converted into a negative statement.
- Related-grade cards never auto-fill from “same category” without a separately approved public context.

## 6. Isolation contract

| Surface | Required isolation |
|---|---|
| Content queries | Mandatory `site_scope=tio2-my` predicate |
| Route registry | Scoped route keys; no global first-match resolution |
| Cache | Key includes scope, locale, route/page ID and content/version discriminator |
| Revalidation | Invalidates only affected scoped records and shared approved dependencies |
| Media | Scoped asset ownership/reference; no other-site fallback image |
| Menus | Consume approved shared Global Chrome definition for `tio2-my` |
| SEO/Schema | Generated from the same scoped public projection |
| Relations | PRODUCT V0.3 source plus scoped target lookup |
| Forms | Carry `site_scope=tio2-my`, grade and source page to the receiver |
| Analytics | Include scope, page ID, grade and action without exposing non-public values |
| Preview | Authenticated and scope-bound; preview payload cannot become public fallback |

Cross-scope fallback is a release-blocking defect even if the substituted content looks visually valid.

## 7. Form action contract

Every visible action sends controlled values:

| Action | Required prefill | Additional expectations |
|---|---|---|
| RFQ | site scope, grade, source page | Standalone receiver; domain optional, not required |
| Sample | site scope, grade, source page | Application/objective collected; no free/dispatch promise |
| Request Documents | site scope, grade, source page, requested type if selected | No availability promise; destination context collected |

The receiver displays the selected grade and lets the buyer confirm/correct allowed context. Success does not imply quote, sample or document approval.

## 8. Error and fallback states

- Content missing: approved not-found/preview state.
- Route not ready: action/link omitted.
- Receiver unavailable: action suppressed; no Contact reroute.
- Media missing: approved neutral visual treatment or image omission; never borrow another product image.
- API failure: safe error state with no cross-scope cached payload.
- Structured data failure: release blocker; do not publish malformed or stale JSON-LD.
- Shared Header/Footer unavailable: release blocker; do not instantiate a page-private substitute.

## 9. Delivery acceptance

External development must later prove scoped queries, projections, cache separation, component conditions, route resolution, form prefill and no-fallback behavior with implementation tests. Gate 7 supplies the contract only and does not authorize those actions now.
