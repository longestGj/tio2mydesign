# RES-ORIGIN Gate 7 CMS / API / Component Mapping V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-ORIGIN` / `/resources/non-china-titanium-dioxide/` |
| Package ID | `RES-ORIGIN-G7-HANDOFF-01` |
| Site scope | `tio2-my` |
| Date | 2026-09-05 |
| Embedded status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_SELF_APPROVED` |
| Implementation | Not started; semantic mapping only |

Names below are semantic contract keys, not a mandate to create parallel models in the development repository. Gate 8 must bind them to the existing WordPress/API/Next.js architecture without changing values, cardinalities, public projection or scope isolation.

## 1. Semantic Types and Statuses

| Type | Contract |
|---|---|
| `StablePageId` | Exact registered Page ID; immutable |
| `SiteScope` | Exact `tio2-my` |
| `Locale` | Exact `en` |
| `IsoDate` | Real `YYYY-MM-DD`; never inferred from a file, build or import time |
| `AbsoluteUrl` | HTTPS URL with verified owner and canonical intent |
| `RouteStatus` | `NOT_IMPLEMENTED`, `IMPLEMENTED_NOT_VERIFIED`, `VERIFIED_PUBLIC`, `REVOKED` |
| `CanonicalStatus` | `NOT_VERIFIED`, `VERIFIED`, `INVALID` |
| `ContentStatus` | `NOT_STARTED`, `IN_REVIEW`, `APPROVED`, `REVOKED` |
| `PublicEligibilityStatus` | `NOT_ELIGIBLE`, `ELIGIBLE`, `REVOKED` |
| `EvidenceStatus` | `NOT_REVIEWED`, `FROZEN`, `APPROVED`, `REVOKED` |
| `LinkMode` | `INTERNAL_ROUTE`, `IN_PAGE_ANCHOR` |
| `SchemaMode` | `BREADCRUMB_ONLY`, `ARTICLE_WITH_BREADCRUMB` |

No internal status token is buyer-visible.

## 2. Public ViewModel Contract

```text
ResOriginPageViewModel
  identity: PageIdentity
  seo: SeoMetadata
  article_metadata: ArticleMetadata | null
  chrome: SharedGlobalChromeReference
  breadcrumb: BreadcrumbItem[3]
  hero: HeroModule
  direct_answer: DirectAnswerModule
  due_diligence_checks: DueDiligenceCheck[6]
  technical_comparison: TechnicalComparisonModule
  application_context: ApplicationContextModule
  document_scope: DocumentScopeModule
  destination_review: DestinationReviewModule
  qualification_decisions: QualificationDecision[3]
  buyer_questions: BuyerQuestion[9]
  final_action: FinalActionModule
  eligible_relations: EligibleRelation[]
  schema_mode: SchemaMode
```

Public invariants:

1. `identity.site_scope == "tio2-my"` before any relation or content lookup.
2. Fixed collection counts match the approved contract.
3. Buyer-facing strings equal Gate 2 V0.2 values.
4. Ineligible links are absent, not disabled.
5. Initial server HTML contains every FAQ answer.
6. Visible content, metadata and Schema never disagree.
7. Internal statuses and source notes are excluded from the public payload.

## 3. Identity and Metadata Fields

| Semantic field | Type | Required | Locked value / rule | Owner | Public output |
|---|---|---:|---|---|---|
| `page_id` | `StablePageId` | Yes | `RES-ORIGIN` | Registry/project control | API identity; not body copy |
| `site_scope` | `SiteScope` | Yes | `tio2-my` | Development/root governance | Routing/query only |
| `locale` | `Locale` | Yes | `en` | Registry | HTML lang/API |
| `page_type` | enum | Yes | `buying_guide` | Registry | API/Schema selection |
| `slug` | string | Yes | `non-china-titanium-dioxide` | Registry | Route |
| `path` | path | Yes | `/resources/non-china-titanium-dioxide/` | Registry | Route/breadcrumb |
| `primary_keyword` | string | Yes | `non china titanium dioxide` | Keyword master | Internal SEO control only |
| `seo_title` | string | Yes | Exact approved value | SEO owner | `<title>` |
| `meta_description` | string | Yes | Exact approved value | SEO owner | head metadata |
| `canonical_url` | `AbsoluteUrl` | Yes | Exact approved canonical | SEO/development | head/Schema |
| `robots_nonproduction` | string | Yes | `noindex, nofollow` or stricter | Development/release | head |
| `robots_production` | string | Conditional | `index, follow` only after Gate 10 | Release owner | head |
| `content_version` | string | Yes | Approved Gate 2 identifier | Project control | Internal only |
| `visual_version` | string | Yes | Approved Gate 5 identifier | Project control | Internal only |
| `approved_baseline_id` | string | Yes | `RES-ORIGIN-G5-V0.1` | Project control | Internal only |

## 4. Article Metadata Fields

| Field | Type | Required for Article | Rule | Missing behavior |
|---|---|---:|---|---|
| `author_name` | string | Yes | Real approved visible author/person or approved editorial entity | Omit Article mode |
| `publisher_name` | string | Yes | Approved publisher identity | Omit Article mode |
| `publisher_logo_asset_key` | string | Yes | Approved production publisher mark | Omit Article mode |
| `date_published` | `IsoDate` | Yes | Real publication record | Omit Article mode |
| `date_modified` | `IsoDate` | Yes | Real approved content revision/review record | Omit Article mode |
| `last_reviewed_at` | `IsoDate` | Yes | Real content/evidence review date | Omit Article mode |
| `maintenance_owner` | string/role | Yes | Accountable internal owner | Omit Article mode; internal value not printed unless approved |
| `source_summary` | approved string/list | Conditional | Visible source/review treatment only if approved | Omit field |

`schema_mode = ARTICLE_WITH_BREADCRUMB` only when every required Article field is valid and its buyer-visible counterpart is rendered. Otherwise use `BREADCRUMB_ONLY`; never fabricate data.

## 5. Content Module Fields

### 5.1 Shared conventions

Every content record includes stable `key`, exact approved `heading`/`body`, integer `display_order`, optional eligible relation and internal `source_anchor`. `source_anchor` is never public.

### 5.2 Module map

| Module | Semantic fields | Cardinality | Source |
|---|---|---:|---|
| `hero` | `eyebrow`, `h1`, `supporting_copy`, `primary_cta`, `secondary_cta`, `qualification_path` | singleton + 6 | Gate 2 V0.2 Hero |
| `direct_answer` | `eyebrow`, `heading`, `answer`, `method_note` | singleton | Gate 2 V0.2 Direct Answer |
| `due_diligence_checks` | `number`, `heading`, `body`, `buyer_check` | exactly 6 | Gate 2 V0.2 Six Checks |
| `technical_comparison` | `eyebrow`, `heading`, `intro`, `steps`, `callout` | singleton + 5 | Gate 2 V0.2 Technical Evaluation |
| `application_context` | `eyebrow`, `heading`, `intro`, `route_items`, `boundary_note` | singleton + 5 routes | Gate 2 V0.2 Use Conditions |
| `document_scope` | `eyebrow`, `heading`, `intro`, `checklist`, `category_relation` | singleton + 8 | Gate 2 V0.2 Evidence Request |
| `destination_review` | `eyebrow`, `heading`, `intro`, `destinations`, `trade_note` | singleton + 4 | Gate 2 V0.2 Destination Context |
| `qualification_decisions` | `eyebrow`, `heading`, `items`, `method_note` | singleton + 3 | Gate 2 V0.2 Decision Point |
| `buyer_questions` | `eyebrow`, `heading`, `items` | singleton + 9 | Gate 2 V0.2 Buyer Questions |
| `final_action` | `eyebrow`, `heading`, `body`, `primary_cta`, `secondary_cta` | singleton | Gate 2 V0.2 Next Step |

## 6. CTA and Relation Object

```text
EligibleRelation
  relation_key: string
  source_page_id: "RES-ORIGIN"
  source_site_scope: "tio2-my"
  target_page_id: StablePageId
  target_site_scope: "tio2-my"
  approved_label: string
  target_path: string
  content_status: ContentStatus
  route_status: RouteStatus
  canonical_status: CanonicalStatus
  public_eligibility_status: PublicEligibilityStatus
  display_order: integer
```

Public projection requires every status predicate to pass. A relation record may exist internally without authorizing public rendering.

| Relation key | Target owner | Approved label source | Additional rule |
|---|---|---|---|
| `products_primary` | `PRODUCT-000` | Gate 2 V0.2 | Never preselect a grade |
| `rfq_secondary` | `CONV-RFQ` | Gate 2 V0.2 | Only two approved prefill fields |
| `application_*` | Approved APP owners | Gate 2 V0.2 | No grade relationship |
| `document_categories` | DOC owners | Gate 2 V0.2 | No availability promise |
| `market_eu/uk/in/br` | Market owners | Gate 2 V0.2 | No trade outcome |
| `trade_update_*` | RES-TRADE owners | Approved dated content | Additional current-source/freshness rules |
| `resources_parent` | `RES-000` | Breadcrumb contract | Parent route verified |

## 7. Trade Relation Extension

A Trade Update link additionally requires:

```text
official_source_name/url present
AND applicable_scope present
AND source_date present
AND review_date present
AND freshness_status == CURRENT_APPROVED
AND claim_status == APPROVED
```

If any field fails, omit the Trade relation atomically. No stale date, generic jurisdiction claim or fallback link remains.

## 8. Component Binding

| Semantic component | Consumes | Produces | Acceptance |
|---|---|---|---|
| Shared Header | shared chrome + current key | accessible navigation and RFQ | `Resources` active; visible `CURRENT`=0 |
| Breadcrumb | identity + parent relation | three-level nav and BreadcrumbList source | DOM/Schema parity |
| Hero | `hero` | H1, copy, CTAs, six-row path | one H1; eligible links only |
| Direct Answer | `direct_answer` | visible standalone answer | no hidden variant |
| Evidence Check Grid | `due_diligence_checks[6]` | numbered cards/rows | count/order/content exact |
| Alignment Sequence | `technical_comparison` | five steps + callout | no grade/equivalence output |
| Route List | application/document/market relations | contextual links | fail-closed links, copy retained |
| Decision Cards | `qualification_decisions[3]` | three distinct outcomes | no automatic supplier score |
| Disclosure Group | `buyer_questions[9]` | accessible Q/A controls | all answers server-rendered |
| Final Action | `final_action` | two conditional CTAs | no inferred facts |
| Shared Footer | shared chrome | reverse logo and shared navigation | no local fork |

## 9. API and Cache Invariants

- API query filters `site_scope=tio2-my` before page, relations or assets are resolved.
- Cache identity includes site scope, Page ID, locale, content revision, relation-eligibility revision and metadata revision.
- Invalidation for this page cannot purge or hydrate another site scope.
- Missing scoped content returns an approved not-found/error response; never another site's page.
- Public API excludes internal Gate statuses, evidence notes, source paths, frozen relations and authoring controls.
- Server-rendered HTML, hydrated state and subsequent navigation must produce identical content and relation eligibility.

## 10. SEO/GEO/Schema Mapping

| Output | Source | Parity requirement |
|---|---|---|
| `<title>` | `seo_title` | Exact approved value |
| Meta description | `meta_description` | Exact approved value |
| Canonical | `canonical_url` | Exact URL and one element |
| H1 | `hero.h1` | Exact value and one H1 |
| GEO definition/checklist | visible modules | No API-only or JSON-LD-only text |
| BreadcrumbList | visible breadcrumb | Same three names/order/URLs |
| Article | validated Article metadata + visible page | Omit when incomplete |
| FAQ | visible disclosure group | No FAQPage/QAPage unless separately approved later |

## 11. Null and Failure Behavior

| Failure | Required output |
|---|---|
| Missing required singleton content | Fail page build/request safely; do not publish partial page |
| Missing optional Article metadata | Render page; omit Article markup and unapproved date/author UI |
| Ineligible CTA/relation | Remove link affordance and link-only spacing; keep useful approved copy |
| Wrong scope | Reject record; never fallback |
| Invalid canonical | Block release; do not emit alternative canonical |
| Missing FAQ answer | Block build/release; do not render question-only disclosure |
| Count/order mismatch | Block build/release; do not pad with duplicate or placeholder records |
| Revoked evidence/claim | Remove affected output atomically and rerun content/Schema review |

## 12. Layer Ownership

| Layer | Owns | Must not own |
|---|---|---|
| WordPress/CMS | Approved content records, metadata, scoped relations and real dates | Cross-scope fallback or hidden public claims |
| API/ViewModel | Scope filtering, validation, ordering and public projection | Editorial rewriting |
| Next.js rendering | Semantic HTML, components, metadata, Schema, responsive states | New content claims or local chrome fork |
| Shared Chrome | Header, menu, Footer, logos and fixed RFQ | Page content or eligibility decisions |
| Gate 8 tests | Contract, route, accessibility and regression proof | Replacing Gate 9 read-only review |
| Gate 9 | Read-only evidence and issue return | Direct code fixes |

## 13. Version Record

| Version | Date | Change | Embedded status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Initial semantic field, ViewModel, component, route, failure and isolation contract | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_SELF_APPROVED`; Gate 8 locked |

