# RES-000 Gate 6 Delivery Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-000` / Resources / `/resources/` |
| Date | 2026-09-01 |
| Review ID | `RES-000-G6-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Inputs | Gate 5 Approved Baseline Manifest V0.1 and authorities it lists |
| Output type | Implementation-neutral CMS/API/component and acceptance specification |
| Gate 7 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; package governed by closure record |
| Development | Not authorized; no code or test implementation |

## 1. Page Identity and Fixed SEO Contract

| Field | Required value |
|---|---|
| `page_id` | `RES-000` |
| `site_scope` | `tio2-my` |
| `page_type` | `Navigation hub` / `CollectionPage` |
| `slug` | `resources` |
| `path` | `/resources/` |
| `canonical_url` | `https://tio2malaysia.com/resources/` |
| `primary_keyword` | `NO_PRIMARY_KEYWORD` |
| `title` | `Titanium Dioxide Procurement Resources | TiO2 Malaysia` |
| `meta_description` | `Explore titanium dioxide buying guides, technical evaluation principles and dated market or trade updates for sourcing decisions across the EU, UK, India and Brazil.` |
| `h1` | `Resources for Titanium Dioxide Procurement Decisions` |
| `hreflang` | `NOT_APPLICABLE` in the current EN-only registry |
| production robots intent | `index, follow`; staging must be `noindex, nofollow`; release remains separately authorized |

No CMS editor may assign a commercial Primary Keyword to this Hub or repeat a child Primary Keyword through metadata, headings or summaries.

## 2. CMS Field Map

### 2.1 RES-000 singleton

| Group | Required fields | Rules |
|---|---|---|
| Identity | `page_id`, `site_scope`, `slug`, `language`, `page_type` | Exact fixed values; no cross-scope fallback |
| Metadata | `seo_title`, `meta_description`, `canonical_url`, `robots_by_environment` | Exact approved values and environment rule |
| Hero | `eyebrow`, `h1`, `supporting_copy`, `cta_label`, `cta_target_mode` | CTA targets Featured only if Featured renders; otherwise `#research-paths` |
| Decision paths | three ordered records with `number`, `label`, `heading`, `body` | Exact approved Buyer Clean copy; not links unless later separately specified |
| Evidence | three ordered records with `title`, `body` | No fourth filler and no unsupported claim |
| Buyer Questions | five ordered records with `question`, `answer` | Answers server-rendered; no FAQ/QAPage Schema |
| Relations | `resource_page_ids[]` | References only; never sufficient for public rendering |
| Governance | `content_version`, `approved_baseline_id` | `RES-HUB-FINAL-01`; internal only, never buyer-visible |

### 2.2 Resource relation record

| Class | Fields | Public eligibility rule |
|---|---|---|
| Identity | `resource_page_id`, `site_scope`, `resource_type`, `title`, `canonical_path` | Complete and registered; `site_scope=tio2-my` |
| Approval | `mapping_status`, `child_content_status`, `claim_status`, `public_eligibility_status` | All must satisfy the page-specific approved state |
| Route | `route_status`, `canonical_status` | Verified public route and canonical required for release |
| Summary | `summary`, `context_label`, `cta_label` | Buyer Clean and claim-approved |
| Ordering | `featured_rank`, `display_order` | Deterministic; no duplicate across Featured and Latest |
| General dates | `published_at`, `last_reviewed_at` | Use only real approved metadata; absent fields are omitted, never `N/A` |
| Trade-only | `official_source_name`, `official_source_url`, `applicable_scope`, `source_date`, `review_date`, `freshness_status`, `public_status_label` | Every field required atomically for a Trade item |

The CMS may store ineligible candidates for governance. Public queries and public API responses must exclude them completely.

## 3. Public API/View-model Contract

The public page query is scope-filtered before relations are resolved. A missing Malaysia record returns no Malaysia body data and never falls back to another site scope.

```text
ResourcesHubViewModel
  page: identity + metadata + approved permanent Buyer Clean blocks
  chrome: shared_global_chrome_reference
  featured_resources: EligibleResource[]
  latest_resources: EligibleResource[]
  qualified_public_count: integer
  schema: CollectionPage + BreadcrumbList + optional ItemList
```

Public response invariants:

1. `featured_resources ∩ latest_resources = ∅`.
2. `qualified_public_count = count(distinct eligible resource_page_id)`.
3. If count is 0, `featured_resources=[]`, `latest_resources=[]`, and `ItemList` is absent.
4. If count is 1, exactly one Featured item and zero Latest items render.
5. If count is 2 or more, Featured and Latest are distinct and ordered by approved metadata.
6. A Resource appears in visible HTML and `ItemList` in the same state transition or neither appears.
7. Internal statuses, gate names, workflow notes and candidate records are absent from the public payload.

## 4. Executable H0–H5 State Machine

| State | Deterministic input | Public output |
|---|---|---|
| `H0_NO_QUALIFIED_RESOURCE` | Eligible distinct count = 0 | Featured heading/card/action/divider/section spacing = 0px; Latest = 0px; `ItemList` absent |
| `H1_ONE_FEATURED_CANDIDATE` | One real design-review candidate that fails any public predicate | Internal preview may demonstrate the V0.5 card; public output is forcibly identical to H0 |
| `H2_ONE_PUBLIC_RESOURCE` | RES-ORIGIN or another approved child passes every general predicate | One Featured card + one matching `ItemList` item; Latest heading/list/divider/spacing = 0px |
| `H3_MULTIPLE_PUBLIC_RESOURCES` | Eligible distinct count ≥2 | Up to three Featured items; Latest contains eligible non-featured items only; one ItemList entry per visible distinct item |
| `H4_TRADE_ITEM` | A Trade child passes general predicates and all seven Trade metadata predicates | Render the complete Trade item and metadata atomically in the applicable H2/H3 collection state |
| `H5_STALE_OR_REVOKED` | Any visible item loses claim, public, route, canonical or freshness eligibility | Remove card, metadata, link, list position and Schema atomically; recompute H0/H2/H3 |

General public predicate:

```text
eligible =
  site_scope == "tio2-my"
  AND mapping_status is public-eligible for that Page ID
  AND child_content_status == approved
  AND claim_status == approved
  AND public_eligibility_status == approved
  AND route_status == verified_public
  AND canonical_status == verified
```

Trade extension:

```text
trade_eligible = eligible
  AND official_source_name/url present
  AND applicable_scope present
  AND source_date present
  AND review_date present
  AND freshness_status == current_approved
  AND public_status_label approved
```

There is no public Coming soon, disabled card, fake date, placeholder, Contact fallback, cross-scope fallback or hidden Schema relation.

## 5. Component Mapping

| Approved surface | Component responsibility | Empty/ineligible behavior |
|---|---|---|
| Global Header | Consume shared Global Chrome V0.5; Resources active state uses weight + underline/marker, no visible `CURRENT`; fixed RFQ | Never locally fork or hide RFQ based on inventory |
| Mobile Header/Menu | Consume shared V0.5 and Production SVG; fixed RFQ and seven route labels | No local duplicate state machine |
| Breadcrumb | Home → Resources | Always visible when page renders |
| Hero | Approved static Buyer Clean; responsive diagram | Diagram `display:none` and 0px at ≤900px |
| Featured Resources | Render `featured_resources` only | Whole section, heading, divider and spacing 0px in H0/H1-public |
| Decision Paths | Three approved informational cards | Always visible; no fabricated link |
| Latest Research | Render only `latest_resources` | 0px when eligible distinct count ≤1 |
| Evidence Standards | Three approved principles | Always visible |
| Buyer Questions | Five semantic disclosure items | Answers exist in initial DOM; no FAQ/QAPage JSON-LD |
| Global Footer | Consume shared Deep Navy V0.5 Footer with Procurement and fixed RFQ | No page-local anchors, internal notes, Contact fallback or empty slot |

## 6. SEO, GEO and Schema Output

Always permitted after page implementation approval:

- one `CollectionPage` identity for the visible Hub;
- one `BreadcrumbList` matching Home → Resources;
- approved brand/Organization reference through shared authority.

Conditional:

- `ItemList` only when public eligible count is at least 1;
- position, name and URL exactly match visible eligible Resource cards;
- no hidden or stale relation.

Prohibited on this Hub:

- `Article`, `NewsArticle`, `FAQPage`, `QAPage`;
- `Product`, `Offer`, `Review`, `AggregateRating`;
- hidden candidate, Trade outcome, grade recommendation, equivalence or non-visible relationship.

GEO answer blocks use the approved visible text only. `Malaysia-origin sourcing` is an approved sourcing-evaluation context, not evidence of manufacturing, compliance, origin capability, tariff treatment or trade advantage.

## 7. PRODUCT V0.3 and Claim Boundary

- Sole relation authority: `D:\23MySec\pages\products\01_research\PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` and its unified audit.
- Count remains 84 = 30 verified / 0 conflict / 54 no-public; 14 Process.
- Hub row-level renderer remains 0 in HTML, API, internal links and Schema.
- `NO_PUBLIC_MAPPING` never means not applicable.
- M-2377 Specialty Materials remains non-public; Rubber remains evidence-only.
- M-996/M-2196 differentiation, ranking, equivalence, substitution and selection rationale remain frozen.
- No guide title or procurement framework may be transformed into a grade recommendation.

## 8. Responsive and Accessibility Acceptance

| Domain | Gate 7/8 delivery criterion | Gate 9 proof |
|---|---|---|
| Desktop | Approved 1440 hierarchy, max-width and content-driven heights | Visual diff/read-only inspection |
| Mobile | 390px logical one-column layout; no horizontal scroll; no fixed-height crop | 375/390/430px viewport inspection |
| Targets | Primary interactive targets ≥44×44 logical px | Computed box and touch inspection |
| Headings | One H1; ordered H2/H3 | DOM inspection |
| Disclosure | Real buttons with `aria-expanded` and `aria-controls`; answers initial DOM | Keyboard/screen-reader inspection |
| Focus | Visible focus and logical order; menu trap/Escape/focus return | Keyboard inspection |
| Motion | Reduced-motion preserves content | Media-query inspection |
| Images/marks | Production SVG accessible Home link; decorative marks hidden from AT | Accessibility-tree inspection |
| Empty state | Removed conditional modules consume 0px with no orphan divider/gap | Runtime state inspection |

Static PNGs are visual acceptance evidence, not runtime proof.

## 9. Phase Ownership

| Phase | Responsibility |
|---|---|
| Gate 6 | Project control reviews this specification against the approved visual/content baseline |
| Gate 7 | After separate authorization, create a handoff package containing exact fields, predicates and acceptance criteria |
| Gate 8 | External development implements CMS, API, routes, components, metadata, Schema and state behavior |
| Gate 9 | This project performs read-only route, public eligibility, freshness, scope isolation, DOM, visual, accessibility and Schema QA |

Route/public/freshness readiness is a Gate 8 implementation and Gate 9 release blocker. Its absence today does not block Gate 6 review or the future creation of a separately authorized Gate 7 package. It does block rendering the related item and blocks release if required behavior is wrong.

## 10. Gate Boundary

Project control passed this Gate 6 contract under `RES-000-G6-PCR-01`. Gate 7 subsequently passed, and the user authorized Gate 8 readiness. That later authorization belongs to external development; it does not authorize this planning task to create WordPress, Next.js, CMS, component or test code, and it does not authorize deployment, indexing or publication. `D:\16Wordpress_nextjs` remains outside this task.

## 11. Closure Record

`RES-000-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; Gate 6 outcome = `PROJECT_CONTROL_GATE_6_PASS`. Gate 7 subsequently passed and closed; Gate 8 is `USER_AUTHORIZED / READY_FOR_EXTERNAL_DEVELOPMENT`; `HANDED_OFF=NO`.
