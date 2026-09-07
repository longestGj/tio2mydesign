# Product Detail Gate 7 Next.js, API and Component Contract V0.2

## 1. Control

| Field | Value |
|---|---|
| Document ID | `PRODUCT-DETAIL-G7-NEXT-API-01` |
| Gate 7 Review ID | `PRODUCT-DETAIL-G7-PCR-02` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Parent return | `PRODUCT-DETAIL-G7-PCR-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
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
5. Resolve contextual body route keys against the scoped route-readiness registry.
6. Replace unresolved contextual actions/links with omission, never Contact or placeholder fallback.
7. Generate visible content, metadata and JSON-LD from the same filtered projection.

Fixed Global Chrome RFQ is an explicit exception to steps 5–6. The shared Desktop Header, Mobile Header, Mobile Menu and Desktop/Mobile Footer always display RFQ and always point to `/request-a-quote/`. If the RFQ receiver is not READY, release is blocked; the shared RFQ cannot be omitted, disabled, replaced by an empty slot or rerouted.

`pending_verification`, `not_public`, `NO_PUBLIC_MAPPING`, Rubber evidence-only data, comparison-hold content and admin evidence metadata must not enter page props, RSC payloads, HTML, JSON-LD, preload data, Open Graph content, analytics labels or public endpoints.

## 4. Component mapping

| Order | Shared component | Input | Conditional rule |
|---:|---|---|---|
| 0 | shared `GlobalHeader` | current Global Chrome registry | Always; fixed RFQ always visible; page-private Header prohibited |
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
| 12 | shared `GlobalFooter` | current Global Chrome registry | Always; fixed RFQ always visible; page-private Footer prohibited |

The RFQ form is never a Grade Detail component. Shared Header/Menu/Footer RFQ always targets the standalone `/request-a-quote/` route and is never resolver-hidden. A Hero RFQ is contextual body content and renders only when the receiver is READY. Receiver implementation remains owned by `CONV-RFQ`, not this template task.

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
| RFQ | site scope, grade, source page | External `CONV-RFQ` receiver; domain optional, not required |
| Sample | site scope, grade, source page | Application/objective collected; no free/dispatch promise |
| Request Documents | site scope, grade, source page, requested type if selected | No availability promise; destination context collected |

When an external owner delivers a READY receiver, it displays the selected grade and lets the buyer confirm/correct allowed context. Success does not imply quote, sample or document approval. Product Detail development integrates READY receivers; it does not implement RFQ, Sample or Request Documents pages/forms.

## 8. Error and fallback states

- Content missing: approved not-found/preview state.
- Contextual route not ready: contextual action/link omitted.
- Sample/Document/Hero-RFQ receiver unavailable: contextual action suppressed; no Contact reroute.
- Shared Global Chrome RFQ receiver unavailable: fixed RFQ remains visible at `/request-a-quote/`, and public release is blocked.
- Media missing: approved neutral visual treatment or image omission; never borrow another product image.
- API failure: safe error state with no cross-scope cached payload.
- Structured data failure: release blocker; do not publish malformed or stale JSON-LD.
- Shared Header/Footer unavailable: release blocker; do not instantiate a page-private substitute.

## 9. Delivery acceptance

If later authorized, Product Detail development is limited to shared template/public-projection/conditional-component infrastructure plus an M-350 implementation candidate. The other 13 identities do not become routes or pages. External destination pages and receivers remain owned by their Page IDs/Briefs/Gates; this template consumes only READY destinations and generates the correct link/prefill. Gate 7 supplies the contract only and does not authorize implementation now.
