# RES-000 Content Architecture V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `RES-000` |
| Page name | Resources |
| URL | `/resources/` |
| Gate | Gate 2 — Content Architecture |
| Date | 2026-08-30 |
| Status | `DRAFT_FOR_GATE_2_REVIEW / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Project-control review | Gate 2 targeted re-review PASS under `RES-000-G15-PCR-01`; user approval remains pending |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Mapping / Verification | `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET` |
| Product relationship baseline | PRODUCT V0.3 matrix + unified audit; 30 verified / 0 conflict / 54 no-public; 14 Process |
| Current public Resource inventory | 0 eligible items; 0 ItemList items |
| Authorization | User authorized RES-000 execution through Gate 5 and submission to project control |
| Excluded | Resource/Document child pages, current trade conclusions, product recommendations, Gate 6+, development and `D:\16Wordpress_nextjs` |

This document defines an auditable route-safe page that remains useful when no Resource child item or downstream route is publicly eligible. It does not approve a child page, route, Claim, trade status, maintenance promise or relationship.

## 1. Chosen Architecture

The page uses **decision-first editorial navigation** rather than a card inventory or news feed. The permanent layer explains how to choose a research path and how to interpret evidence. Conditional layers appear only when every content, Claim, route and freshness gate is satisfied.

Three approaches were evaluated:

| Approach | Strength | Risk | Decision |
|---|---|---|---|
| Empty catalogue shell | Mirrors a future inventory | Empty cards, Coming soon and false availability | Rejected |
| News/update feed | Familiar for trade content | Makes Resources look like a publication desk; freshness failure becomes highly visible | Rejected |
| Decision-first editorial hub | Useful at inventory zero; clear owner and evidence boundaries | Requires disciplined copy and conditional states | Selected |

## 2. Page State Model

| State | Trigger | Public behavior |
|---|---|---|
| `S0_ROUTE_SAFE_ZERO` | Current baseline: no eligible Resource item; external routes not verified live | Render permanent research-path education, boundaries and Buyer Questions; no Resource cards, links, update summaries, ItemList or RFQ |
| `S1_GUIDE_ELIGIBLE` | A non-trade Resource passes mapping, content, Claim and route-live gates | Add its complete item atomically under the owning path; never expose candidates |
| `S2_TRADE_ELIGIBLE` | A Trade item also passes official source, scope, date, last review and CURRENT gates | Add complete visible item with source/date/scope; add matching ItemList item |
| `S3_REVIEW_DUE` | Any visible item fails freshness or re-review | Remove title, summary, metadata, action, link, ItemList, GEO and Schema relation together |
| `S4_RFQ_UNAVAILABLE` | RFQ workflow/content/live is not approved | Remove every RFQ action and dependent sentence; page remains complete |
| `S5_OWNER_ROUTE_UNAVAILABLE` | An owner route is not approved/live | Render owner explanation as non-interactive text or omit its action atomically |
| `S6_MOBILE_MENU` | Menu opened at mobile | Show fixed order, Resources current, visible Home; include RFQ only in its eligible state |

The primary Gate 2 and Gate 5 baseline is `S0_ROUTE_SAFE_ZERO`. Future inventory states are internal contracts only and are not public promises.

## 3. Module Order and Buyer Decision

| Order | Module ID | Visible heading / label | Buyer decision supported | State |
|---:|---|---|---|---|
| 0 | `GLOBAL_HEADER` | Fixed site navigation | Move to a primary owner | Always; individual actions route-gated |
| 1 | `BREADCRUMB` | `Home / Resources` | Confirm location | Always; Home must resolve before release |
| 2 | `HERO` | `Resources for Titanium Dioxide Procurement Decisions` | Understand the Hub’s role | Always |
| 3 | `RESEARCH_PATHS` | `Choose the right research path` | Decide whether the question is sourcing, technical or trade-related | Permanent explanatory layer; not a Resource-item list |
| 4 | `RESOURCE_ITEMS` | Conditional per approved family | Open a specific eligible resource | 0px in current state |
| 5 | `RESEARCH_BOUNDARIES` | `How to interpret research` | Separate comparison, evidence and absence from recommendation or unsuitability | Always |
| 6 | `CURRENT_UPDATES` | `Current trade updates` | Open time-sensitive content | 0px in current state |
| 7 | `PROCUREMENT_PATHS` | `Continue your procurement review` | Continue to the correct commercial or technical owner | Explanations always useful; actions individually route-gated |
| 8 | `BUYER_QUESTIONS` | `Buyer questions` | Resolve common interpretation errors | Always; visible answer content |
| 9 | `FINAL_ACTION` | Conditional RFQ action | Start conversion | 0px while RFQ unavailable |
| 10 | `FOOTER` | Registered site routes only | Continue navigation | Always; route-gated and no unregistered Legal/Privacy placeholders |

## 4. Exact Buyer Clean Copy Deck — Current Zero-inventory State

### 4.1 Metadata

| Field | Exact copy |
|---|---|
| Title | `Titanium Dioxide Resources | TiO2 Malaysia` |
| Meta description | `Navigate research paths for titanium dioxide procurement, including buying context, technical evaluation boundaries, and time-sensitive trade information.` |
| H1 | `Resources for Titanium Dioxide Procurement Decisions` |
| Canonical | `https://tio2malaysia.com/resources/` |
| Robots | Indexing is not authorized by this design draft |

### 4.2 Breadcrumb and Hero

- Breadcrumb: `Home / Resources`
- Eyebrow: `PROCUREMENT RESEARCH HUB`
- H1: `Resources for Titanium Dioxide Procurement Decisions`
- Intro: `Use this hub to identify the right research path, understand what each resource can answer, and continue to the relevant product, application, market, document or company page for the next step.`
- Qualification note: `Research content supports evaluation. It does not establish product equivalence, suitability, availability, or a trade outcome.`
- Primary local action: `Explore research paths` → `#research-paths`
- Secondary action: absent in `S0_ROUTE_SAFE_ZERO`.

### 4.3 Research Paths

Section introduction:

`Start with the question you need to answer. Use specific guides or updates only when they include the information and review details needed for a reliable procurement reference.`

| Path | Title | Exact body | Current action |
|---|---|---|---|
| RP-01 | `Sourcing context` | `Use sourcing research to frame origin, supplier-diversification and documentation questions before moving to the relevant market, company or document owner.` | None; no eligible item |
| RP-02 | `Technical evaluation` | `Use technical research to understand comparison criteria. A comparison framework does not establish grade equivalence, performance ranking or a replacement recommendation.` | None; no eligible item |
| RP-03 | `Time-sensitive trade information` | `Use trade information only when the visible item states its official source, applicable scope, source date and current review status.` | None; no eligible item |

These are explanatory path panels, not cards representing live Resource pages. They carry no child title, candidate name, planned URL or hidden link.

### 4.4 Research Boundaries

Heading: `How to interpret research`

Intro: `Use the evidence boundary before applying any research conclusion to a procurement decision.`

| Boundary | Exact visible copy |
|---|---|
| Comparison | `Comparison criteria help structure an evaluation. They do not prove that two grades are identical, interchangeable or suitable for the same formulation.` |
| Missing relationship | `If a grade-to-application relationship is not shown, do not treat that absence as a technical-unsuitability statement.` |
| Trade freshness | `Time-sensitive trade information should state a current official source, a defined scope, a source date and a visible review date. Rely only on information that remains current for the decision you are making.` |
| Where details belong | `For product, process, application, market, company and document details, continue to the relevant section of the website.` |

The visible copy describes how buyers should judge information. It does not promise a review service or fixed maintenance schedule.

### 4.5 Procurement Paths

Heading: `Continue your procurement review`

Intro: `Choose the section that matches the next question in your review.`

| Owner | Exact body | Conditional action |
|---|---|---|
| Products | `Review product families, process classifications and individual grade pages. A link from Resources is not a product recommendation.` | `Explore Products` |
| Applications | `Review application-level selection factors in Applications. Resources does not create grade-to-application recommendations.` | `Explore Applications` |
| Markets | `Review market-specific procurement context in Markets.` | `Explore Markets` |
| Documents | `Review document types and controlled request paths without assuming a file is publicly available.` | `Explore Documents` |
| About | `Review company, origin and traceability facts in About where supporting information is available.` | `About TiO2 Malaysia` |

The current visual presents these explanations without external actions. No grade, application or process selection is passed.

### 4.6 Buyer Questions

Heading: `Buyer questions`

| ID | Exact question | Exact answer |
|---|---|---|
| BQ-01 | `Which research path should I use?` | `Use sourcing context for origin and supply-chain questions, technical evaluation for comparison criteria, and trade information only when you need a dated, official-source update. Use a specific resource only when it includes the information needed for a reliable procurement reference.` |
| BQ-02 | `Does a technical comparison mean two grades are equivalent?` | `No. A comparison framework can identify factors to review, but it does not prove identical performance, interchangeability, suitability or a guaranteed replacement. Technical data and formulation-specific evaluation remain necessary.` |
| BQ-03 | `What does it mean if a grade-to-application relationship is not shown?` | `It means that relationship is not presented here. It does not establish that the grade is technically unsuitable for that application.` |
| BQ-04 | `How can I tell whether trade information is current?` | `Check the official source, applicable product and origin scope, source date and visible review date. Rely only on information that remains current and complete for the decision you are making.` |
| BQ-05 | `Where should I continue for products, applications, markets or documents?` | `Continue to the relevant Products, Applications, Markets or Documents section. Resources provides research context; it does not replace product details, application guidance, market procurement information or document controls.` |

Buyer Questions are visible page content. Do not use `FAQPage` or `QAPage` Schema.

### 4.7 Footer

Footer lists only registered site sections. No Legal, Privacy or cross-site fallback placeholder is added. The fixed navigation identity remains consistent with the Header.

## 5. Conditional Resource Item Contract

An item may render only when all applicable gates are true:

`MAPPING_ALLOWED + PAGE_APPROVED + CONTENT_APPROVED + CLAIM_APPROVED + ROUTE_LIVE + SITE_SCOPE_MATCH + (FRESHNESS_CURRENT when time-sensitive)`

When true, an item is atomic:

- content-type label;
- approved visible title;
- approved summary;
- official source/date/scope/review fields where required;
- one approved action and route;
- matching ItemList relation;
- matching GEO and Schema facts already visible on the page.

When any gate becomes false, all parts disappear together. There is no Coming soon, disabled card, old date, hidden link, empty ItemList, alternate-site fallback or stale Schema relation.

`NEW_PAGE_CANDIDATE` never satisfies the contract. The current count remains zero.

## 6. PRODUCT V0.3 Relationship Contract

- RES-000 does not list the 30 verified Application mappings or 14 Process classifications.
- The 54 `NO_PUBLIC_MAPPING` rows remain absent and are never converted to negative suitability claims.
- M-2377 has five approved Application mappings and a Sulfate classification in the V0.3 source, but RES-000 still renders no named Application, Process, selection or recommendation row; Specialty Materials remains no-public and Rubber remains evidence-only outside the taxonomy.
- M-996 and M-2196 receive no difference, ranking, equivalence, alternative, replacement or choice rationale.
- Generic comparison answers do not name models or infer a relationship.
- Owner actions do not pass grade/application/process parameters or present a selected state.
- Visible copy, Meta, OG, Schema, alt text and links share the same restrictions.

## 7. SEO and GEO Contract

| Surface | Contract |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD`; do not invent one |
| Search intent | Navigation; help buyers choose a research/owner path |
| Excluded terms | All child primary keywords, model-led terms, supplier commercial terms and candidate brand/grade terms |
| Cannibalization | Hub does not own child guide, Product, Process, Application, Market, Document or About primary intent |
| GEO entities | TiO2 Malaysia → Resources → research paths → owner pages; conditional items only when visible and eligible |
| Quotable blocks | Research-path definition, comparison boundary, missing-relationship boundary and trade-freshness requirement |
| Dates/sources | Required only when the visible claim is time-sensitive; never manufactured for the permanent Hub copy |
| Structured data | `CollectionPage` + `BreadcrumbList`; `ItemList` only when one or more visible eligible items exist |
| Prohibited Schema | `FAQPage`, `QAPage`, `Product`, `Offer`, `Review`, child `Article` or `NewsArticle` from the Hub |

## 8. CTA and Internal Link Contract

| Surface | Current route-safe behavior | Eligible future behavior |
|---|---|---|
| Hero primary | Local `#research-paths` | Same |
| Hero secondary | Absent | RFQ only if workflow/content/live approved |
| Research path items | No action | One exact item action per eligible Resource |
| Procurement owners | Explanation only | Exact owner action when route approved/live |
| Buyer Questions | No CTA | Inline owner action only if it does not change the answer |
| Final action | Absent | Approved RFQ block only if all RFQ gates pass |

All links use `site_scope=tio2-my` route resolution. Never read another site scope as fallback.

## 9. Accessibility and Responsive Content Rules

- One H1; headings follow H2/H3 order.
- Path panels are semantic headings and text, not fake buttons in the zero-inventory state.
- Accordion triggers use buttons, expose expanded state and retain answers in reading order.
- All interactive targets are at least 44×44px logical.
- Visible focus uses Navy outline plus a non-color cue; Teal text/action uses the contrast-corrected `#007F77` baseline.
- Desktop reading lines remain approximately 60–78 characters; mobile uses a single column.
- At 390px, long headings and the “grade-to-application” phrase wrap; no horizontal scroll, truncation or sideways card strip.
- Removing any conditional module removes its heading, divider, padding and reserved height.
- Reduced-motion preference disables non-essential transitions.

## 10. Acceptance Self-check

- [x] Current page remains useful with inventory=0 and ItemList=0.
- [x] No Resource/Document child title, candidate or planned trade conclusion appears.
- [x] Fixed Header and visible Home are preserved.
- [x] PRODUCT V0.3 relationship controls cover copy, SEO/GEO, Schema and links without row-level rendering.
- [x] Trade official-source/scope/date/review/freshness controls remain.
- [x] No RFQ, owner or Resource route is represented as live.
- [x] Exact Buyer Clean public blocks contain no `gate`, `route`, `workflow`, `structured data`, `owner page`, `approved` or `publication` language; semantic review confirms natural buyer-facing meaning.
- [x] Desktop/390px content behavior and atomic removal are explicit.
- [x] `site_scope=tio2-my` and no cross-site fallback are explicit.
- [x] No development, child-page, Gate 6+, deployment or publishing work is authorized.

Self-check is not Gate 2 approval.

## 11. Open Items

| Item | Status |
|---|---|
| RES-R002–R007 | `OPEN` |
| RES-R008–R009 | `CONTROLLED_IN_DRAFT` |
| RES-G1-REL-01 | `PRODUCT_V0.3_SYNC_DRAFT_PENDING_PROJECT_CONTROL_REVIEW` |
| RES-G2-01 | `OPEN_USER_APPROVAL / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| RES-G15-01 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` — Buyer Clean internal-governance language replaced with natural procurement language and passed targeted project-control re-review |

## 12. Version Record

| Version | Date | Change | Approval status |
|---|---|---|---|
| V0.1 | 2026-08-30 | Initial route-safe Gate 2 content architecture; exact Buyer Clean copy, inventory-zero state, relationship and freshness gates | `DRAFT_FOR_GATE_2_REVIEW` |
| V0.1 / RES-G15-01 targeted revision | 2026-08-30 | Replaced Buyer Clean Gate/route/publication/owner/structured-data language in Hero, research intro, boundaries, procurement paths and Buyer Questions | `RESOLVED_IN_DRAFT_PENDING_REVIEW`; Gate 2 remains draft |
| V0.1 / RES-000-G15-PCR-01 targeted review PASS | 2026-08-30 | Synchronized targeted project-control PASS after Buyer Clean review | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; Gate 2 remains `DRAFT_FOR_GATE_2_REVIEW` and user approval remains OPEN |
| V0.1 / PRODUCT V0.3 relationship-source sync | 2026-08-30 | Updated only the relationship contract to 30/0/54 and 14 Process; recorded M-2377 approved neutral mappings, Specialty Materials/Rubber boundaries and removal of the superseded TDS hard gate; exact Buyer Clean copy and module order unchanged | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; Gate 2 and page lifecycle unchanged |
