# RES-000 Gate 7 Development Handoff Package V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Package ID | `RES-000-G7-HANDOFF-01` |
| Page | `RES-000` / Resources |
| Public URL | `/resources/` |
| Site scope | `tio2-my` |
| Language | EN |
| Priority | P2 |
| User Gate 7 authorization | Explicitly granted on 2026-09-01 |
| Gate 6 | `RES-000-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 | `USER_AUTHORIZED / IN_PROGRESS` |
| Submission state | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Page lifecycle | `DESIGN_IN_REVIEW`; not `APPROVED_FOR_HANDOFF` and not `HANDED_OFF` |
| Gate 8 | `NOT_AUTHORIZED` |
| Resource children | Not included and not authorized |
| Production/release | Not authorized |

This package translates the approved RES-000 Gate 2–5 baseline into implementation-neutral delivery specifications. It contains no WordPress, API, Next.js, component, styling, test, deployment or publication code.

## 1. Authority and Precedence

Consumers must resolve conflicts in this order:

1. System/developer instructions and the current explicit user decision.
2. `D:\23MySec\AGENTS.md`.
3. `D:\23MySec\docs\prd\TiO2_Malaysia_Website_PRD_V0.4.md`.
4. `D:\23MySec\docs\architecture\PAGE_REGISTRY_V0.1.md`.
5. `D:\23MySec\research\keyword\11_page_keyword_master.csv`, row `RES-000` and the eight registered Resource-child rows.
6. `D:\23MySec\docs\page-playbooks\RESOURCE_PLAYBOOK_V0.1.md` and `D:\23MySec\docs\page-briefs\RES-000_RESOURCES_BRIEF_V0.1.md`.
7. `D:\23MySec\pages\resources\05_review\RES-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md`.
8. Content Architecture V0.3, SEO/GEO/Schema V0.2, Wireframe V0.3, Visual Direction V0.3 and Full Visual V0.5 listed by that Manifest.
9. `D:\23MySec\pages\resources\05_review\RES-000_GATE6_DELIVERY_CONTRACT_V0.1.md` and the closed Gate 6 submission.
10. `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, shared V0.5 state board and Production SVG Logo Manifest V1.0.
11. PRODUCT V0.3 canonical matrix and unified audit.
12. The sealed Gate 7 Manifest for this package.

Historical Resources versions remain traceability records only and may not override the current authority set.

## 2. Page Identity and Locked SEO Role

| Field | Locked value |
|---|---|
| Page ID | `RES-000` |
| URL | `/resources/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Secondary labels | `buying guides | technical guides | market trade updates` |
| Search intent | Navigation with informational Hub utility |
| Buyer stage | Navigation |
| Mapping | `PLANNED_ARCHITECTURE` |
| Verification | `NO_DIRECT_KEYWORD_TARGET` |
| H1 | `Resources for Titanium Dioxide Procurement Decisions` |
| Page role | Route buyers to approved sourcing, technical and dated trade/market research without owning child-page primary terms |

The Hub must not become a supplier landing page, product recommender, one-to-one equivalence page, Trade outcome page or generic blog archive.

## 3. Approved Visual Authority

| View | Asset | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| Desktop | `RES-000_G5_DESKTOP_PROCUREMENT_RESEARCH_HUB_V0.5.png` | 1440×3782 | 311135 | `1EF97A450A3F2240B010F957C2C170DE87186845ED3BE1751EDF717D3329575C` |
| Mobile | `RES-000_G5_MOBILE_390_PROCUREMENT_RESEARCH_HUB_V0.5.png` | 780×10974; 390px logical at 2× | 859403 | `76E5E10075B44F82C2B32B124143E0BDF2A2D4B5376DBAF0F0DBC8A9FBF76222` |
| Mobile menu open | `RES-000_G5_MOBILE_390_MENU_OPEN_V0.5.png` | 780×1440; 390×720 logical at 2× | 46704 | `427703CAC08393194289AE64BB1B78135139350A2FAD18E671DFBC2FAD62CAB9` |

Asset directory: `D:\23MySec\pages\resources\04_planning\visual-designs\assets\`.

The RES-ORIGIN card in V0.5 is H1/H2 geometry evidence only. It must not be copied into current CMS data, API defaults, seed data, fallback content, fixtures loaded by production, static constants or placeholders.

## 4. Approved Semantic Order

All viewports preserve:

`Global Header → Breadcrumb → Hero → conditional Featured Resources → Decision Paths → conditional Latest Research → Evidence Standards → Buyer Questions → Global Footer`.

In current public H0, both conditional sections collapse atomically to 0px, leaving:

`Global Header → Breadcrumb → Hero → Decision Paths → Evidence Standards → Buyer Questions → Global Footer`.

No orphan heading, divider, anchor offset, padding or empty slot remains.

## 5. Current Public State

| Output | Current value |
|---|---:|
| State | `H0_NO_QUALIFIED_RESOURCE` |
| Qualified Resource inventory | 0 |
| Featured cards | 0 |
| Latest items | 0 |
| `ItemList` entries | 0 / absent |
| Trade items | 0 |
| Product relationship rows | 0 |

H1 design-review state has exactly the same public output as H0.

## 6. H0–H5 Runtime Contract

| State | Trigger | Public behavior |
|---|---|---|
| H0 | No eligible child | Featured and Latest complete surfaces = 0px; ItemList absent |
| H1 | One real design candidate fails any public predicate | Public output byte/semantic-equivalent to H0; candidate visible only in non-public design evidence |
| H2 | Exactly one child passes all general predicates | One Featured card and one matching ItemList entry; Latest = 0px |
| H3 | Two or more distinct children pass all predicates | Up to three Featured cards; Latest contains only non-featured eligible items; no duplicates; ItemList mirrors all visible items |
| H4 | A Trade child also passes every official-source/scope/date/freshness/status/route predicate | Complete Trade card and metadata render atomically in H2/H3 collection behavior |
| H5 | A visible child loses eligibility, route, canonical, claim or freshness | Card, link, order, date/status metadata and Schema relation are removed atomically; state is recomputed |

No state may expose Coming soon, disabled cards, fake dates, fake status, placeholders, Contact fallback, cross-scope fallback or hidden Schema.

## 7. Module Delivery Contract

| Module | Data source | Rendering | Empty/restricted behavior |
|---|---|---|---|
| Global Header | Shared Global Chrome V0.5 | Fixed RFQ; Resources active treatment; Production SVG | No buyer-visible `CURRENT`; no page-private clone |
| Breadcrumb | Page identity | Home → Resources semantic navigation | No JS-only link |
| Hero | RES-000 singleton | Exact approved Buyer Clean; one H1; CTA derives from state | CTA targets Featured only when it renders; otherwise `#research-paths` |
| Featured | Public projection only | Visible eligible resources in deterministic order | Entire surface 0px in H0/H1-public |
| Decision Paths | RES-000 singleton | Three ordered informational cards | Always visible; no inferred links or recommendations |
| Latest | Public projection only | Eligible non-featured resources | Entire surface 0px when eligible count ≤1 |
| Evidence | RES-000 singleton | Three approved principles | No fourth filler |
| Buyer Questions | RES-000 singleton | Five server-rendered answers | No FAQPage/QAPage Schema |
| Global Footer | Shared Global Chrome V0.5 | Deep Navy Footer, Procurement and fixed RFQ | No page-local anchors, internal notes, Contact fallback or empty RFQ slot |

## 8. Global Chrome Contract

- Consume `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` and shared state authority; do not establish a Resources-owned Header/Footer.
- Desktop navigation retains Home, Markets, Products, Applications, Documents, Resources, About and fixed Request a Quote.
- Resources current state uses structural treatment only; buyer-visible `CURRENT` count is 0.
- Mobile Header and Menu retain fixed RFQ and Production SVG bindings.
- Footer retains shared Procurement grouping and fixed RFQ.
- Production Logo paths and hashes come only from `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`.
- Inventory, ItemList, route readiness or empty Resource sections never change Global Chrome RFQ visibility.

## 9. SEO, GEO and Schema

| Element | Delivery value/behavior |
|---|---|
| Title | `Titanium Dioxide Procurement Resources | TiO2 Malaysia` |
| Meta description | `Explore titanium dioxide buying guides, technical evaluation principles and dated market or trade updates for sourcing decisions across the EU, UK, India and Brazil.` |
| Canonical | `https://tio2malaysia.com/resources/` |
| Production robots | `index, follow` only after Gate 9 acceptance and separate release authorization |
| Staging robots | `noindex, nofollow` |
| Hreflang | `NOT_APPLICABLE` in current EN-only registry |
| Always allowed Schema | `CollectionPage`, `BreadcrumbList` |
| Conditional Schema | `ItemList`, only for visible public-eligible Resources |
| Prohibited Schema | Article, NewsArticle, FAQPage, QAPage, Product, Offer, Review, AggregateRating and hidden candidate relations |

Visible card identity, order, name and canonical URL must match ItemList atomically. GEO answers use visible approved copy only.

## 10. PRODUCT V0.3 and Claim Boundaries

- Sole relationship source: `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` plus unified audit.
- Current counts remain 84 = 30 verified / 0 conflict / 54 no-public; 14 Process.
- Hub row-level Grade/Application/Process renderer is 0 in CMS public projection, API, DOM, links and Schema.
- `NO_PUBLIC_MAPPING` is not a negative suitability statement.
- M-2377 Specialty Materials is not public; Rubber is evidence-only.
- M-996/M-2196 differentiation, rank, equivalence, substitution and selection rationale remain frozen.
- `Malaysia-origin sourcing` is evaluation context only; no manufacturing, compliance, origin capability, duty treatment or trade advantage may be inferred.

## 11. Site-scope Isolation

Every Gate 8 implementation must scope the following to `tio2-my`:

- WordPress/CMS singleton and relation queries;
- API page and collection projections;
- Next.js route resolution and server rendering;
- Page-ID relationships and internal links;
- menu/current-page state and Global Chrome references;
- metadata, canonical, robots, sitemap and Schema;
- media and Production SVG lookup;
- RFQ target and any approved form context;
- cache keys, tags, invalidation and revalidation;
- analytics page/target identity.

Missing Malaysia content is an empty/error state and release blocker, never permission to query TIOVAR, mytio2 or another site scope.

## 12. Responsive and Accessibility

- Desktop reference is 1440px with content-driven heights.
- Tablet must be explicitly checked at 768px even though the approved visual package has no independent Tablet PNG.
- Mobile checks cover 430px and 390px; 375px is recommended for robustness.
- At 390px all content is one column, Hero diagram is 0px at ≤900px, and no horizontal scrolling or clipped borders occur.
- 200% browser zoom must preserve reading order, content, navigation and actions without two-dimensional page scrolling.
- Interactive targets are at least 44×44 CSS px.
- One H1 and ordered H2/H3 semantics are required.
- Accordion questions use buttons with accessible name, `aria-expanded`, `aria-controls`, visible focus and initial server-rendered answers.
- Mobile Menu supports focus containment, Escape close and focus return.
- Reduced motion removes nonessential movement without removing information.
- Zero-height conditional sections must not leave focusable descendants or skipped heading levels.

## 13. Phase Boundary

- Gate 7 defines and submits this handoff package; it does not approve itself.
- Gate 8 implementation requires a later explicit authorization and belongs to the external development project.
- Gate 9 is read-only QA against an accessible implementation.
- Gate 10 publication/indexing requires separate user authorization.
- Route, child eligibility and freshness are Gate 8 implementation and Gate 9 QA/release blockers, not reasons to fabricate current content.
- No Resource child is included in this package.
- `D:\16Wordpress_nextjs` is outside this task and must not be accessed.

## 14. Version Record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-01 | Initial user-authorized Gate 7 implementation-neutral handoff specification | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`; Gate 8 locked |

