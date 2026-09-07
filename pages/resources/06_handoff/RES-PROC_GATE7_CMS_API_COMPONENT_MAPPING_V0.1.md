# RES-PROC Gate 7 CMS / API / Component Mapping V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-PROC` / `/resources/chloride-vs-sulfate-titanium-dioxide/` |
| Package ID | `RES-PROC-G7-HANDOFF-01` |
| Site scope | `tio2-my` |
| Date | 2026-09-06 |
| Embedded status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_SELF_APPROVED` |
| Implementation | Not started; semantic mapping only |

Names below are semantic contract keys, not a mandate to create parallel models in the development repository. Gate 8 must bind them to the existing architecture without changing values, cardinalities, public projection or scope isolation.

## 1. Semantic Types and Statuses

| Type | Contract |
|---|---|
| `StablePageId` | Exact registered Page ID; immutable |
| `SiteScope` | Exact `tio2-my` |
| `Locale` | Exact `en` |
| `IsoDate` | Real `YYYY-MM-DD`; never inferred from file, build or import time |
| `AbsoluteUrl` | HTTPS URL with approved owner and canonical intent |
| `ContentStatus` | `NOT_STARTED`, `IN_REVIEW`, `APPROVED`, `REVOKED` |
| `RouteStatus` | `NOT_IMPLEMENTED`, `IMPLEMENTED_NOT_VERIFIED`, `VERIFIED_PUBLIC`, `REVOKED` |
| `CanonicalStatus` | `NOT_VERIFIED`, `VERIFIED`, `INVALID` |
| `PublicEligibilityStatus` | `NOT_ELIGIBLE`, `ELIGIBLE`, `REVOKED` |
| `EvidenceStatus` | `NOT_REVIEWED`, `PENDING_USER_FACT_CONFIRMATION`, `APPROVED`, `REVOKED` |
| `LinkMode` | `INTERNAL_ROUTE`, `IN_PAGE_ANCHOR`, `EXTERNAL_SOURCE` |
| `SchemaMode` | `WEBPAGE_ONLY`, `WEBPAGE_WITH_BREADCRUMB`, `ARTICLE_WITH_BREADCRUMB` |

No internal status token is buyer-visible. A project-file evidence gap is not automatically a permanent content prohibition; new facts must follow the Evidence Gap User Decision Register and current user-approval rule.

## 2. Public ViewModel Contract

```text
ResProcPageViewModel
  identity: PageIdentity
  seo: SeoMetadata
  article_metadata: ArticleMetadata | null
  chrome: SharedGlobalChromeReference
  breadcrumb: BreadcrumbItem[3] | null
  hero: HeroModule
  direct_answer: DirectAnswerModule
  on_this_page: AnchorItem[5]
  route_difference: RouteDifferenceModule
  label_limit: LabelLimitModule
  grade_evidence: GradeEvidenceModule
  application_overlap: ApplicationOverlapModule
  qualification_workflow: QualificationWorkflowModule
  buyer_questions: BuyerQuestion[4]
  sources: SourceGroup[6]
  final_action: FinalActionModule
  eligible_relations: EligibleRelation[]
  schema_mode: SchemaMode
```

Public invariants:

1. `identity.site_scope == "tio2-my"` before content, relation, media or metadata lookup.
2. Fixed collection counts match the approved contract.
3. Buyer-facing strings equal Gate 2 V0.3 values.
4. Ineligible links and dependent spacing are absent, not disabled.
5. Both Process relations render together or neither renders.
6. Initial server HTML contains all four Buyer Question answers.
7. Visible content, metadata, Schema and social output never disagree.
8. Internal statuses, evidence notes and source-control metadata are excluded from the public payload.

## 3. Identity and Metadata Fields

| Semantic field | Type | Required | Locked value / rule | Owner | Public output |
|---|---|---:|---|---|---|
| `page_id` | `StablePageId` | Yes | `RES-PROC` | Registry/project control | API identity; not body copy |
| `site_scope` | `SiteScope` | Yes | `tio2-my` | Development/root governance | Query/routing only |
| `locale` | `Locale` | Yes | `en` | Registry | HTML lang/API |
| `page_type` | enum | Yes | `buying_guide` | Registry | API/Schema selection |
| `slug` | string | Yes | `chloride-vs-sulfate-titanium-dioxide` | Registry | Route |
| `path` | path | Yes | `/resources/chloride-vs-sulfate-titanium-dioxide/` | Registry | Route/breadcrumb |
| `primary_keyword` | string | Yes | `chloride vs sulfate titanium dioxide` | Keyword master | Internal SEO control only |
| `seo_title` | string | Yes | Exact approved value | SEO owner | `<title>` |
| `meta_description` | string | Yes | Exact approved value | SEO owner | `<meta name="description">` |
| `canonical_url` | `AbsoluteUrl` | Yes | Exact approved canonical | SEO/development | head/Schema |
| `robots_nonproduction` | string | Yes | `noindex, nofollow` or stricter | Development/release | head |
| `robots_production` | string | Conditional | `index, follow` only after Gate 10 | Release owner | head |
| `content_version` | string | Yes | Gate 2 V0.3 | Project control | Internal only |
| `visual_version` | string | Yes | Gate 5 V0.1 / Superdesign v8 | Project control | Internal only |
| `approved_baseline_id` | string | Yes | `RES-PROC-G5-V0.1` | Project control | Internal only |

## 4. Article and Social Metadata Fields

| Field | Type | Required for Article | Rule | Missing behavior |
|---|---|---:|---|---|
| `author_name` | string | Yes | Real approved visible author/person or editorial entity | Suppress Article |
| `publisher_name` | string | Yes | Approved visible publisher identity | Suppress Article |
| `publisher_logo_asset_key` | string | Yes | Approved production publisher mark | Suppress Article |
| `date_published` | `IsoDate` | Yes | Real publication record | Suppress Article |
| `date_modified` | `IsoDate` | Yes | Real approved revision/review record | Suppress Article |
| `last_reviewed_at` | `IsoDate` | Yes | Real content/evidence review date | Suppress Article |
| `maintenance_owner` | string/role | Yes | Accountable owner; public only if separately approved | Suppress Article |
| `source_summary` | approved string/list | Conditional | Visible source/review treatment only | Omit field |
| `og_title` | string | Yes | Same comparison intent as SEO title | Use exact approved mapping |
| `og_description` | string | Yes | Same evidence-limit meaning as Meta | Use exact approved mapping |
| `og_type` | enum | Conditional | `article` only in eligible Article mode | Use approved site default |
| `og_image` | asset | Conditional | Independently approved, non-ranking visual | Omit image fields |

`schema_mode = ARTICLE_WITH_BREADCRUMB` only when every required Article field is valid and rendered visibly. Otherwise use eligible `WEBPAGE_WITH_BREADCRUMB` or `WEBPAGE_ONLY`; never fabricate data.

## 5. Content Module Fields

Every record includes a stable `key`, exact approved strings, integer `display_order`, optional eligible relation and internal `source_anchor`. `source_anchor` never enters public output.

| Module | Semantic fields | Cardinality | Source |
|---|---|---:|---|
| `hero` | `eyebrow`, `h1`, `supporting_copy`, `jump_cta` | singleton | Gate 2 V0.3 Hero |
| `direct_answer` | `eyebrow`, `heading`, `answer`, `context_note` | singleton | Gate 2 V0.3 Direct Answer |
| `on_this_page` | `label`, `target_anchor`, `display_order` | exactly 5 | Gate 2 V0.3 index |
| `route_difference` | `eyebrow`, `heading`, `intro`, `route_cards`, `shared_qualifier` | singleton + exactly 2 cards | Gate 2 V0.3 Route Difference |
| `label_limit` | `eyebrow`, `heading`, `intro`, `can_indicate`, `cannot_establish`, `commercial_boundary`, `bridge` | 4 + 6 items | Gate 2 V0.3 Label Limit |
| `grade_evidence` | `eyebrow`, `heading`, `intro`, `rows`, `table_note` | exactly 6 rows | Gate 2 V0.3 Grade Evidence |
| `application_overlap` | `eyebrow`, `heading`, `answer`, `evidence_items`, `evidence_limit`, `source_actions` | 3 statements + 3 source actions | Gate 2 V0.3 Overlap |
| `qualification_workflow` | `eyebrow`, `heading`, `intro`, `steps`, `outcomes` | 5 steps + 3 outcomes | Gate 2 V0.3 Workflow |
| `buyer_questions` | `eyebrow`, `heading`, `items` | exactly 4 | Gate 2 V0.3 Questions |
| `sources` | `eyebrow`, `heading`, `intro`, `groups`, `source_note` | 6 groups / 7 links | Gate 2 V0.3 Sources |
| `final_action` | `eyebrow`, `heading`, `body`, `products_action`, `process_actions` | 1 + atomic pair[2] | Gate 2 V0.3 Final Action |

## 6. Route and Source Objects

```text
EligibleRelation
  relation_key: string
  source_page_id: "RES-PROC"
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

```text
ExternalSourceLink
  source_key: string
  approved_label: string
  approved_url: AbsoluteUrl
  statement_family: string
  publication_or_document_date: string | null
  approved_visible_review_date: "2026-09-05"
  evidence_status: EvidenceStatus
```

An internal relation record does not authorize public output. Public projection requires every predicate to pass.

| Relation key | Target | Public label | Additional rule |
|---|---|---|---|
| `resources_parent` | `RES-000` | `Resources` | Breadcrumb and Schema parity |
| `products_primary` | `PRODUCT-000` | `Compare Titanium Dioxide Products` | No prefill |
| `chloride_process` | `PRODUCT-PROC-CL` | `Explore Chloride-Process Titanium Dioxide` | Must pass with sulfate pair |
| `sulfate_process` | `PRODUCT-PROC-SU` | `Explore Sulfate-Process Titanium Dioxide` | Must pass with chloride pair |
| `grade_framework_anchor` | `#grade-evidence` equivalent approved target | `Jump to the grade evaluation framework` | Target exists in same HTML |

External source records must use the seven approved labels, URLs and statement families from Gate 2 V0.3. No link label or URL is inferred from page title text.

## 7. Component and Rendering Map

| Semantic component | Consumes | Required behavior | Failure behavior |
|---|---|---|---|
| `ResourceArticleShell` | identity, chrome, modules | Exact semantic order and shared chrome | Wrong scope or missing required module blocks page output |
| `ResourceBreadcrumb` | eligible parent relation | Visible three-item trail and matched BreadcrumbList | Omit structured/linked output when relation invalid |
| `ProcessComparisonHero` | hero | One H1 and in-page jump | Missing H1/body blocks page output |
| `DirectAnswerBlock` | direct_answer | Visible source-consistent answer | Missing content blocks page output |
| `ArticleAnchorIndex` | five anchors | Server-valid in-page navigation | Invalid target removes item atomically |
| `ProcessRouteCards` | route_difference | Equal-weight cards; source order | Missing card blocks module/page; never show one-sided comparison |
| `EvidenceBoundaryPanel` | label_limit | 4/6 lists plus boundaries | Count or copy mismatch blocks output |
| `GradeEvidenceLedger` | six rows | Preserve question/evidence/interpretation relationship | Count/missing cell blocks module/page |
| `ApplicationOverlapEvidence` | statements/actions | Exact citations and evidence limit | Withdrawn source removes affected claim/action together |
| `QualificationWorkflow` | five steps/three outcomes | Ordered non-automated method | Count mismatch blocks module/page |
| `BuyerQuestionDisclosure` | four pairs | Server-rendered answers, accessible toggle | Invalid pair blocks module; never emit FAQ Schema |
| `SourceLedger` | six groups/seven links | Labels, dates and roles remain attached | Ineligible source removes affected claim/citation; no raw fallback |
| `ResourceFinalAction` | Products + Process relations | Products independent; Process pair atomic | No disabled state or orphan spacing |

These names are semantic labels. Gate 8 should reuse existing approved components when they satisfy the contract; do not fork shared Header/Footer or copy RES-ORIGIN page content.

## 8. Null, Error and Revocation Matrix

| Condition | Public behavior | Release effect |
|---|---|---|
| Wrong/missing `site_scope` | Safe not-found/error; no fallback | Block |
| Missing required identity, Hero, direct answer or module | Do not render incomplete page | Block |
| Fixed collection count mismatch | Do not silently merge/drop/reorder | Block |
| Products relation ineligible | Remove CTA and spacing; retain useful closing copy | Non-blocking only if approved fail-closed state matches |
| Either Process relation ineligible | Remove both Process actions and pair spacing | Expected fail-closed state |
| Parent relation ineligible | No linked/structured breadcrumb claim | Block public inventory/release |
| Source withdrawn or scope changed | Remove affected claim, citation and source action | Block affected statement until review |
| Article metadata incomplete | Suppress Article; retain eligible WebPage/Breadcrumb only | Expected fail-closed state |
| OG image unavailable | Omit image metadata | Non-blocking |
| Internal status present in public payload | Reject/sanitize; never display | Block |
| Unsupported Grade/commercial/regulatory claim present | Reject public output | Block |

## 9. Layer Ownership

| Layer | D23 supplies | Gate 8 external project decides |
|---|---|---|
| WordPress/CMS | semantic fields, requiredness, counts, content/source status | binding to existing post types, fields and editorial workflow |
| API/ViewModel | `ResProcPageViewModel`, invariants and fail-closed output | actual DTO/query/transport implementation |
| Next.js/UI | semantic components, order, exact content, state behavior | reuse and binding to existing components/routes/styles |
| SEO/Schema | exact metadata and conditional types | integration with existing metadata/JSON-LD system |
| Cache | scope-key and targeted invalidation requirements | concrete tags/keys and invalidation mechanism |
| Tests | behaviors and acceptance matrix | existing test locations, helpers and commands |

## 10. Boundary

This mapping is a Gate 7 specification. It does not create CMS fields, API types, components, routes or tests. Gate 8 and an external development task require separate authorization.

