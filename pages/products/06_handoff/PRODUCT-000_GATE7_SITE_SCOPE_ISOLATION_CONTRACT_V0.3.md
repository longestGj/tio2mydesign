# PRODUCT-000 Gate 7 `site_scope=tio2-my` Isolation Contract V0.3

## 0. Control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / `/products/` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-000-G7-PCR-03` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Fixed scope | `tio2-my` |

This document defines isolation outcomes. It does not prescribe a database, CMS plugin, API framework, cache vendor or analytics product.

## 1. Core rule

Every content read, route lookup, relation lookup, menu, media association, form submission, metadata/Schema output, cache entry and analytics event for PRODUCT-000 must be explicitly scoped to `tio2-my`.

If Malaysia-scope data is missing, the system fails closed for that field/module/page. It must never read or render TIOVAR, mytio2 or another site's content as fallback.

## 2. Isolation matrix

| Domain | Required scope behavior | Prohibited fallback |
|---|---|---|
| Page query | Resolve `PRODUCT-000` under `tio2-my` only | Same slug/page ID in another scope |
| Grade relations | Read PRODUCT V0.3-equivalent Malaysia relation records only | Shared/global relation table without scope filter |
| Grade routes | Resolve Page ID/route key in Malaysia registry | Another site's working URL |
| Process/support routes | Resolve and health-check each Malaysia target independently | Cross-scope URL or content shell |
| Navigation | Load Malaysia Header/Mobile/Footer menu | Shared menu with foreign URLs or labels |
| Media | Use Malaysia-associated page assets and approved global Logo keys | Another site's image/media record |
| Logo | Resolve exact global production Manifest asset keys | Page-specific copy, historical PNG or foreign Logo |
| RFQ | Submit to Malaysia RFQ workflow with fixed server-side scope | Contact fallback or another site's form |
| Metadata | Build from Malaysia page record | Cross-scope title, canonical, OG or robots |
| Schema | Use Malaysia canonical IDs and visible Malaysia content | Foreign Organization/Product URLs or relations |
| Sitemap | Include only Malaysia canonical after release authorization | Selector states, preview URLs or foreign routes |
| Cache | Include site scope in every relevant key/tag/invalidation path | Slug-only/page-ID-only shared cache |
| Analytics | Attach Malaysia property/stream and `site_scope` dimension | Mixed-site event without scope |

## 3. Query and API contract

- `site_scope=tio2-my` is a required server-controlled constraint, not an optional client filter.
- Page ID plus scope must identify one page record; duplicates or ambiguity are errors.
- Relation queries must filter by page/grade identity and scope before status filtering.
- APIs must not return records from another scope when Malaysia has zero results.
- Preview/draft access remains scoped and must not make unpublished cross-scope content visible.
- Client-provided scope values are untrusted. The server determines the current site scope from approved configuration.
- Public API payloads omit internal source IDs, evidence states and governance notes unless an authenticated internal interface explicitly requires them.

## 4. Route resolution

Each link is stored as Page ID/route key and resolved within Malaysia scope. PRODUCT-000 consumes shared readiness for external target pages/forms; it does not implement or authorize them. Route state includes at least:

- identity resolved;
- approved registered path matches;
- publication/availability state appropriate for environment;
- redirect target remains approved and Malaysia-scoped;
- canonical target matches route ownership.

Unresolved conditional Chloride/Sulfate Process and support cards do not render. The CR-901 classification row remains while its unresolved action is omitted. Unresolved required Grade, Home or RFQ destinations block release. A working foreign route is not a valid resolution, and PRODUCT-000 must not create a placeholder or substitute target.

## 5. Content and relation isolation

- The Selector reads the exact 30 public relations from the approved Malaysia data equivalent.
- The directory always reads fourteen Malaysia Grade identities and exact approved summaries.
- `grade_directory[].summary` cannot fall back to a Grade page excerpt, another site record or generated text.
- Provenance fields remain internal and scoped to the same summary record.
- `NO_PUBLIC_MAPPING` stays non-render; a foreign positive relation cannot override it.
- M-2377 and M-996/M-2196 gates are evaluated before public payload construction.

## 6. Menu and Global Chrome isolation

- Desktop Header, Mobile Header, Mobile Menu and Footer use the Malaysia navigation registry.
- Products current state derives from Malaysia route identity.
- Fixed RFQ points to the Malaysia `CONV-RFQ` route.
- Footer uses `PROCUREMENT`; public `CONVERSION` is rejected.
- Contact, when available, is an ordinary Malaysia Information link and never replaces RFQ.
- Global production Logo files are shared by approved asset key, not by copying a different site's media item.

## 7. Media contract

- Buyer-facing page images, if added later, require Malaysia media association and evidence review.
- Missing media produces the approved no-image layout; it does not load another site's factory, product or stock image.
- Production SVG Logo is the only approved shared asset exception and is governed by Manifest keys/hashes.
- Asset URLs and optimization caches must not erase site ownership or introduce cross-scope fallbacks. No cross-scope fallback is allowed.

## 8. Form and RFQ isolation

- The RFQ request carries server-assigned `site_scope=tio2-my`.
- Page context may include `source_page_id=PRODUCT-000`, selected Application and explicitly selected Grade only.
- Client attempts to change scope are ignored/rejected and logged.
- Form destinations, notification routing, privacy text, success/error state and stored records remain Malaysia-specific.
- Submission success means request received for review; it does not confirm price, stock, documents, sample or delivery.
- RFQ failure does not redirect to a foreign form or Contact replacement.

## 9. Metadata, Schema and sitemap isolation

- Canonical and every Schema URL use `https://tio2malaysia.com`.
- Schema IDs must not reference mytio2/TIOVAR products or site graph nodes.
- ItemList Grade URLs resolve from Malaysia route keys.
- Robots and sitemap decisions are environment and release controlled within Malaysia configuration.
- Selector state/query parameters never become Canonicals or sitemap items.
- Cache or rendering errors must not emit another site's metadata while body content is Malaysia content.

## 10. Cache and invalidation

Every page, query, route, relation, menu, metadata, Schema and form-related cache key/tag must distinguish at least:

- `site_scope`;
- content/route identity;
- locale where applicable;
- relevant revision/publication state.

Invalidating another site must not evict or repopulate Malaysia content with foreign data. Malaysia updates must invalidate all Malaysia variants that could serve stale relationship, summary, metadata, Schema or menu output.

## 11. Analytics isolation

- Events identify `site_scope=tio2-my`, `page_id=PRODUCT-000` and the Malaysia canonical.
- Selector events may record Application label and result count, not internal evidence status.
- Grade click events may record Grade ID and target Page ID.
- RFQ events use Malaysia route/form identity.
- Do not send sensitive form fields, free-text requirements or personally identifiable information as analytics parameters.
- Mixed-site dashboards must retain an explicit scope dimension; unscoped events are defects.

## 12. Failure behavior

| Failure | Public behavior | Release effect |
|---|---|---|
| Current page unresolved | Error/no public page; no foreign fallback | Block |
| Required Grade route missing | Directory link cannot be accepted | Block |
| Conditional Process/support route missing | Remove atomic card/module as contracted | Allowed only if metadata/content remain accurate |
| RFQ route/form not ready | Keep fixed RFQ visual contract; do not release | Block |
| Summary missing/mismatched | No generated fallback | Block |
| Menu/Logo scope mismatch | Do not render foreign shell | Block |
| Metadata/Schema foreign URL | Reject output | Block |
| Analytics misrouting | Disable affected analytics rather than leak data | Block analytics release; page release disposition decided at Gate 9 |

## 13. Gate 9 isolation tests

Gate 9 read-only QA must verify:

1. direct `/products/` response, redirect chain and Canonical;
2. all fourteen Grade links and both conditional Process route states;
3. Applications/Documents/Markets card behavior;
4. RFQ Header/Menu/Footer/context links and form submission scope;
5. content/API payload contains only Malaysia records;
6. source IDs/evidence statuses absent from Buyer Clean payload;
7. metadata, Schema and sitemap contain Malaysia URLs only;
8. cache cold/warm/invalidation behavior does not cross scopes;
9. menus and media do not fall back across scopes;
10. analytics event scope and absence of sensitive values.

Evidence should include response headers/HTML, API payload excerpts, route traces, rendered screenshots, form test records, Schema/metadata output and cache/isolation test results. Gate 9 remains read-only from this project.
