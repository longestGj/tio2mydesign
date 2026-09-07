# RES-000 Gate 7 CMS / API / Component Mapping V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-000` / `/resources/` |
| Site scope | `tio2-my` |
| Date | 2026-09-01 |
| Package ID | `RES-000-G7-HANDOFF-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Implementation | Not started; semantic mapping only |

Field names are implementation-neutral semantic keys. Gate 8 may bind them to existing WordPress/API/Next.js models without changing values, predicates, public projection or isolation behavior.

## 1. Type and Enum Definitions

| Type/enum | Allowed values/rule |
|---|---|
| `StablePageId` | Registered Page ID string; immutable |
| `SiteScope` | Exact enum `tio2-my`; no other value in this package |
| `IsoDate` | Valid `YYYY-MM-DD`; never file modification time or inferred date |
| `AbsoluteUrl` | HTTPS canonical/source URL; syntactically and ownership verified |
| `PageMappingStatus` | Registry/master value; not freely editable |
| `ChildContentStatus` | `NOT_STARTED`, `IN_REVIEW`, `APPROVED` |
| `ClaimStatus` | `NOT_REVIEWED`, `FROZEN`, `APPROVED`, `REVOKED` |
| `PublicEligibilityStatus` | `NOT_ELIGIBLE`, `ELIGIBLE`, `REVOKED` |
| `RouteStatus` | `NOT_IMPLEMENTED`, `IMPLEMENTED_NOT_VERIFIED`, `VERIFIED_PUBLIC`, `REVOKED` |
| `CanonicalStatus` | `NOT_VERIFIED`, `VERIFIED`, `INVALID` |
| `FreshnessStatus` | `NOT_APPLICABLE`, `PENDING_REVIEW`, `CURRENT_APPROVED`, `STALE`, `REVOKED` |
| `ResourceType` | `PROCUREMENT_GUIDE`, `TECHNICAL_GUIDE`, `TRADE_UPDATE` |
| `PublicStatusLabel` | Approved buyer-visible label from child content; no inferred `CURRENT` |
| `HState` | `H0_NO_QUALIFIED_RESOURCE`, `H1_ONE_FEATURED_CANDIDATE`, `H2_ONE_PUBLIC_RESOURCE`, `H3_MULTIPLE_PUBLIC_RESOURCES`, `H4_TRADE_ITEM`, `H5_STALE_OR_REVOKED` |

No internal enum token is buyer-visible.

## 2. RES-000 Singleton Fields

| Semantic field | Type | Required | Locked/default value | Source/owner | Review/update rule | Public scope |
|---|---|---:|---|---|---|---|
| `page_id` | `StablePageId` | Yes | `RES-000` | Registry / project control | Immutable | Internal + API identity |
| `site_scope` | `SiteScope` | Yes | `tio2-my` | Root governance / development | Immutable | API routing; never Buyer Clean |
| `locale` | enum | Yes | `en` | Registry | Change requires registry approval | HTML/API |
| `page_type` | enum | Yes | `navigation_hub` | Registry | Immutable in package | API/Schema |
| `slug` | path | Yes | `/resources/` | Registry | URL change requires approval | Route/Canonical |
| `primary_keyword` | enum | Yes | `NO_PRIMARY_KEYWORD` | Keyword master / SEO owner | Cannot be editor-assigned | Internal only |
| `mapping_status` | `PageMappingStatus` | Yes | `PLANNED_ARCHITECTURE` | Registry/master / project control | State change outside Gate 7 | Internal only |
| `verification_status` | enum | Yes | `NO_DIRECT_KEYWORD_TARGET` | Keyword master | State change outside Gate 7 | Internal only |
| `approved_baseline_id` | string | Yes | `RES-HUB-FINAL-01` | Project control | Update only after approved revision | Internal only |
| `seo_title` | string | Yes | Exact approved Title | SEO owner | Review with content revision | `<title>`/API |
| `meta_description` | string | Yes | Exact approved Meta | SEO owner | Review with content revision | head/API |
| `canonical_url` | `AbsoluteUrl` | Yes | `https://tio2malaysia.com/resources/` | SEO/development | Gate 9 verify | head/Schema |
| `robots_staging` | string | Yes | `noindex, nofollow` | SEO/development | Environment controlled | head |
| `robots_production` | string | Yes | `index, follow` after authorization | SEO/release owner | Gate 9 + Gate 10 | head |
| `hero` | object | Yes | Exact approved eyebrow/H1/body/CTA | Content owner | Approved revision only | HTML/API |
| `decision_paths` | ordered array[3] | Yes | Exact approved records | Content owner | Count/order locked | HTML/API |
| `evidence_principles` | ordered array[3] | Yes | Exact approved records | Content/claim owner | Claim review required | HTML/API |
| `buyer_questions` | ordered array[5] | Yes | Exact approved Q/A records | Content/SEO/GEO owner | Approved revision only | HTML/API; no FAQ Schema |
| `resource_relations` | array of `StablePageId` | No | Empty permitted | Resources owner | Reference alone never creates eligibility | Internal query input |
| `content_review_date` | `IsoDate` | Yes | Date of approved content review | Content owner | Update with approved revision | Internal; optional public only if separately approved |

## 3. Resource Relation Fields

| Semantic field | Type | Required for storage | Required for public | Source/owner | Review-date/scope rule | Public projection |
|---|---|---:|---:|---|---|---|
| `resource_page_id` | `StablePageId` | Yes | Yes | Registry / project control | Registered Resource child only | `id` |
| `site_scope` | `SiteScope` | Yes | Yes | Development | Exact `tio2-my` | Never printed |
| `resource_type` | `ResourceType` | Yes | Yes | Child Brief/content owner | Must match child role | Type label |
| `title` | string | Yes | Yes | Child approved content | Claim-safe; current version | Card/ItemList name |
| `summary` | string | No | Yes | Child approved content/claim owner | No unsupported promise | Card description |
| `context_label` | string | No | No | Child content owner | Approved taxonomy only | Card label when present |
| `canonical_path` | path | Yes | Yes | Registry/development | Must resolve inside `tio2-my` | Card link/ItemList URL |
| `mapping_status` | `PageMappingStatus` | Yes | Yes | Registry/project control | Must be public-eligible for that Page ID | Internal predicate |
| `child_content_status` | `ChildContentStatus` | Yes | Yes | Child content owner | `APPROVED` required | Internal predicate |
| `claim_status` | `ClaimStatus` | Yes | Yes | Claim/evidence reviewer | `APPROVED` required; revocable | Internal predicate |
| `public_eligibility_status` | `PublicEligibilityStatus` | Yes | Yes | Project control | `ELIGIBLE` required | Internal predicate |
| `route_status` | `RouteStatus` | Yes | Yes | Gate 8 development / Gate 9 QA | `VERIFIED_PUBLIC` required for release | Internal predicate |
| `canonical_status` | `CanonicalStatus` | Yes | Yes | SEO/Gate 9 QA | `VERIFIED` required | Internal predicate |
| `published_at` | `IsoDate` | No | No | Child content owner | Real approved date only | Omit if absent |
| `last_reviewed_at` | `IsoDate` | Yes | Yes | Child content/claim owner | Cannot precede evidence review | Optional visible metadata |
| `featured_rank` | integer 1–3 | No | No | Resources owner | Unique among eligible items | Ordering only |
| `display_order` | nonnegative integer | Yes | Yes | Resources owner | Deterministic/tie-broken by Page ID | Ordering only |
| `cta_label` | string | Yes | Yes | Content/UX owner | Descriptive; no generic click text | Card action |
| `source_owner` | string/role ID | Yes | Yes | Project control | Named accountable role | Internal only |
| `record_review_date` | `IsoDate` | Yes | Yes | Resources owner | Required on any status transition | Internal only |

The current RES-ORIGIN record may exist internally with ineligible statuses. It must not appear in the public projection until every public predicate passes.

## 4. Trade Metadata Extension

All fields below are mandatory for a public `TRADE_UPDATE` and transition atomically.

| Field | Type | Required for public | Source/owner | Review rule | Buyer-visible behavior |
|---|---|---:|---|---|---|
| `official_source_name` | string | Yes | Compliance/market owner | Verify source authority | Show with update |
| `official_source_url` | `AbsoluteUrl` | Yes | Compliance/market owner | HTTPS and official domain verified | Crawlable source link if approved |
| `applicable_scope` | structured text | Yes | Compliance reviewer | Defines product/origin/market/time/procedure | Show concise scope |
| `source_date` | `IsoDate` | Yes | Official source | Exact publication/effective record date | Show exact date |
| `review_date` | `IsoDate` | Yes | Assigned content/compliance owner | Required current review | Show exact review date |
| `freshness_status` | `FreshnessStatus` | Yes | Compliance/project control | Must equal `CURRENT_APPROVED` | Never infer Current |
| `public_status_label` | `PublicStatusLabel` | Yes | Compliance/content approval | Must match child visible content | Show only approved wording |
| `freshness_owner` | role ID | Yes | Project control | Must be accountable and active | Internal only |
| `next_review_due` | `IsoDate` | Yes | Freshness owner | Defined by child policy | Internal unless separately approved |
| `event_review_trigger` | string | Yes | Compliance owner | Describes event-based recheck | Internal only |

Missing, stale, revoked or invalid Trade metadata excludes the entire Trade item from cards, links, ordering, date/status display and ItemList.

## 5. Status Transitions

| From | Event | To | Required authority | Public effect |
|---|---|---|---|---|
| no relation | Registered internal relation added | H1 candidate | Resources owner; no public approval | Public remains H0 |
| H1 | Content + claim + public eligibility + verified route/canonical pass | H2 or H3 | Child owners + project control + Gate 9 evidence | Add card/link/ItemList atomically |
| H2 | Second distinct eligible child passes | H3 | Same full predicate set | Create nonduplicative Featured/Latest distribution |
| H2/H3 | Eligible Trade record passes extension | H4 overlay | Compliance + freshness owner + project control | Add complete Trade metadata atomically |
| H2/H3/H4 | Any predicate revoked/stale/invalid | H5 transition | Relevant owner or automated safety removal | Remove all public atoms, then recompute H0/H2/H3 |
| H5 | Record later reapproved with fresh evidence | H2/H3/H4 | Full approval chain repeated | Re-add only in one atomic release |

Editors cannot directly select H0–H5. The public state is derived from scoped records and predicates.

## 6. Public Eligibility Projection

```text
general_eligible(record) =
  record.site_scope == "tio2-my"
  AND mapping_allows_public(record.resource_page_id, record.mapping_status)
  AND record.child_content_status == "APPROVED"
  AND record.claim_status == "APPROVED"
  AND record.public_eligibility_status == "ELIGIBLE"
  AND record.route_status == "VERIFIED_PUBLIC"
  AND record.canonical_status == "VERIFIED"

trade_eligible(record) =
  general_eligible(record)
  AND every Trade extension field is complete
  AND record.freshness_status == "CURRENT_APPROVED"
```

Projection order:

1. Filter by exact site scope.
2. Validate registered Page ID and current mapping.
3. Apply general predicate.
4. Apply Trade extension where relevant.
5. Deduplicate by `resource_page_id`.
6. Sort by `featured_rank`, then `display_order`, then stable Page ID.
7. Allocate Featured and nonduplicative Latest.
8. Build ItemList from exactly the visible distinct items.

## 7. API ViewModel

```text
ResourcesHubViewModel
  page
    page_id, locale, path, title, meta_description, canonical_url
    hero, decision_paths[3], evidence_principles[3], buyer_questions[5]
  chrome_reference
    spec_version, current_page_id, rfq_target_page_id, production_logo_manifest_id
  state
    h_state, qualified_public_count
  featured_resources[]
  latest_resources[]
  schema
    collection_page, breadcrumb_list, item_list?
```

The public DTO omits governance enums, owner fields, review workflow, frozen candidates and cross-scope records.

## 8. WordPress / API / Next.js Mapping

| Layer | Semantic responsibility | Required isolation/behavior |
|---|---|---|
| WordPress/CMS | Store the RES-000 singleton, registered relation references and governed child metadata using existing approved content models | Every query includes `site_scope=tio2-my`; no default Resource card or cloned foreign record |
| Public API projection | Convert scoped CMS records into `ResourcesHubViewModel` after eligibility filtering | Never return H1 candidate data publicly; no cross-scope fallback; no internal states |
| Next.js route | Resolve `/resources/` and server-render approved Buyer Clean plus projected collections | One H1; deterministic H0–H5 rendering; exact metadata/Canonical/robots |
| Component layer | Consume shared Chrome and page ViewModel | No private Header/Footer; conditional section roots collapse to 0px when arrays empty |
| Schema serializer | Serialize allowed page and collection entities from the same ViewModel | ItemList parity with visible eligible items; no independent relation query |
| Cache/revalidation | Cache scoped page and projection | Key/tag includes `tio2-my`, `RES-000`, relation eligibility revision and freshness revision |
| Media resolver | Resolve shared Production SVG and approved page media | Scope/manifest controlled; never import another site’s media as fallback |
| Menu resolver | Consume shared Global Chrome V0.5 | Resources structural current state; visible CURRENT text = 0; fixed RFQ |
| Form/RFQ resolver | Resolve shared `CONV-RFQ` target | Fixed visibility; no Contact fallback; any prefill separately governed |

This is a mapping contract, not an instruction to create new post types, endpoints, routes or components when existing architecture already provides equivalent scoped models.

## 9. Component Map

| Component role | Consumes | Required state behavior |
|---|---|---|
| Shared Header | Global Chrome reference | Fixed RFQ; Resources current treatment; Production SVG |
| Shared Mobile Menu | Global Chrome reference | Seven page routes + fixed RFQ; focus trap/Escape/return |
| Breadcrumb | page identity | Home → Resources |
| Resources Hero | `page.hero` + H-state | CTA chooses Featured or research paths deterministically |
| Featured Resource Collection | `featured_resources` | Absent root in H0/H1-public; no placeholder |
| Decision Path Grid | `decision_paths` | Always three ordered informational records |
| Latest Resource List | `latest_resources` | Absent root when count ≤1; excludes Featured IDs |
| Evidence Principles | `evidence_principles` | Exactly three |
| Buyer Questions | `buyer_questions` | Five semantic disclosures; answers initial DOM |
| Shared Footer | Global Chrome reference | Procurement, fixed RFQ, no local anchors |

## 10. Buyer Clean Serialization Boundary

Public output must not contain `Gate`, `workflow`, `route status`, `owner`, `approval state`, `publication state`, `site_scope`, `NO_PUBLIC_MAPPING`, `H0–H5`, `candidate`, `placeholder`, `structured data` or internal review dates. Buyer-required official source, applicable scope, source date and review date may be visible on a qualified Trade item.

## 11. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Complete semantic fields, enums, ownership, transitions, scoped projection and layer/component mapping | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

