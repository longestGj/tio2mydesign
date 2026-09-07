# MARKET-000 Gate 7 CMS / API / Component Mapping V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `MARKET-000` / `/markets/` |
| Site scope | `tio2-my` |
| Date | 2026-08-31 |
| Status | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE` |
| Implementation | Not started; semantic mapping only |

Field names below are implementation-neutral semantic keys. The external development project chooses its concrete CMS/API/component implementation while preserving values, conditions and acceptance behavior.

## 1. Page record

| Semantic field | Type | Required value / rule |
|---|---|---|
| `page_id` | stable ID | `MARKET-000` |
| `site_scope` | immutable scope | `tio2-my` |
| `locale` | locale | `en` |
| `page_type` | enum | `navigation_hub` |
| `slug` | path | `/markets/` |
| `primary_keyword` | governance enum | `NO_PRIMARY_KEYWORD`; never printed |
| `mapping_status` | governance enum | `APPROVED_NAVIGATION_HUB`; never printed |
| `verification_status` | governance enum | `NO_DIRECT_KEYWORD_TARGET`; never printed |
| `content_revision` | version reference | Approved Gate 5 V0.4/V0.5 baseline |
| `indexing_environment` | environment state | staging noindex; production index only after release authorization |

## 2. SEO fields

| Semantic field | Value / derivation |
|---|---|
| `seo_title` | `Markets for Titanium Dioxide Procurement | TiO2 Malaysia` |
| `seo_meta_route_safe` | `Navigate titanium dioxide procurement information for the European Union, United Kingdom, India, and Brazil, with clear guidance on the next review step.` |
| `seo_meta_full_route` | `Choose a destination market for titanium dioxide procurement in the European Union, United Kingdom, India, or Brazil, then continue to the relevant market page.` |
| `seo_meta_mode` | derived: `full_route` only when EU/UK/India/Brazil EN first-level actions are implemented and approved for release; otherwise `route_safe` |
| `canonical_target` | `https://tio2malaysia.com/markets/` |
| `robots_staging` | `noindex, nofollow` |
| `robots_release` | `index, follow` after Gate 9 and release authorization |
| `hreflang` | none / `NOT_APPLICABLE` |
| `sitemap_include` | true only after release authorization; one Canonical |

## 3. Global Chrome reference

| Semantic field | Required behavior |
|---|---|
| `global_chrome_spec` | `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` |
| `current_navigation_id` | `MARKET-000` |
| `home_visible_text` | always true |
| `rfq_visibility` | constant `ALWAYS_VISIBLE` |
| `rfq_target_page_id` | `CONV-RFQ` |
| `rfq_planned_url` | `/request-a-quote/` |
| `rfq_route_ready` | release-health value; false blocks release and never changes visibility |
| `contact_fallback` | prohibited |
| `production_logo_manifest` | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| `production_logo_addendum` | `docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md` |
| `production_logo_asset_keys` | `brand_logo_primary_horizontal`, `brand_logo_reverse_monochrome`, `brand_symbol_primary`, `brand_favicon_safe` |
| `logo_candidate_directory` | historical evidence only; never production field input |
| `gate5_png_logo` | static visual evidence only; never production asset input |

## 4. Hero fields

| Field | Exact value |
|---|---|
| `hero.eyebrow` | `DESTINATION MARKET NAVIGATION` |
| `hero.h1` | `Choose Your Destination Market` |
| `hero.body` | `Start with the region or country where your procurement requirements need to be reviewed. Use this hub to choose the appropriate market path and find where product, application, document, trade-update, and quotation questions belong.` |
| `hero.primary_action.label` | `Choose a Market` |
| `hero.primary_action.href` | `#destination-market` |
| `hero.chapter_number` | `01` |
| `hero.chapter_label` | `MARKETS` |
| `hero.chapter_markets` | `EU / UK / IN / BR` |
| `hero.chapter_description` | `Destination-first procurement navigation` |

No Hero body RFQ or secondary commercial CTA is allowed.

## 5. Destination fields

### 5.1 Section

| Field | Exact value |
|---|---|
| `destination.anchor_id` | `destination-market` |
| `destination.eyebrow` | `DESTINATION MARKET` |
| `destination.h2` | `Start with the market tied to your procurement requirements` |
| `destination.intro` | `Use the European Union overview for shared regional context, choose an EU country destination when local context matters, or start directly with the United Kingdom, India, or Brazil.` |

### 5.2 Destination collection

| Order | Page ID | Label | Description | Planned href | Group |
|---:|---|---|---|---|---|
| 1 | `MARKET-EU-001` | European Union | `Start with the European Union overview when you need the shared regional procurement context. Choose a country destination when the next step depends on local market context.` | `/markets/european-union/` | EU parent |
| 2 | `MARKET-EU-DE` | Germany | none | `/markets/germany/` | EU country |
| 3 | `MARKET-EU-IT` | Italy | none | `/markets/italy/` | EU country |
| 4 | `MARKET-EU-ES` | Spain | none | `/markets/spain/` | EU country |
| 5 | `MARKET-EU-PL` | Poland | none | `/markets/poland/` | EU country |
| 6 | `MARKET-EU-NL` | Netherlands | none | `/markets/netherlands/` | EU country |
| 7 | `MARKET-EU-BE` | Belgium | none | `/markets/belgium/` | EU country |
| 8 | `MARKET-UK-001` | United Kingdom | `Use the United Kingdom path when your next procurement questions need a UK-specific context.` | `/markets/united-kingdom/` | standalone |
| 9 | `MARKET-IN-001` | India | `Use the India path when your next procurement questions need an India-specific context.` | `/markets/india/` | standalone |
| 10 | `MARKET-BR-EN` | Brazil | `Use the Brazil path when your next procurement questions need Brazil-specific market context.` | `/markets/brazil/` | standalone |

Visible action labels are `Explore the European Union`, each EU country name, `Explore the United Kingdom`, `Explore India` and `Explore Brazil`.

`MARKET-BR-PT` is not a collection item and must not enter content, API output, menus, Schema, hreflang or sitemap.

## 6. Choice Guide fields

| Field | Exact value |
|---|---|
| `choice.eyebrow` | `HOW TO CHOOSE` |
| `choice.h2` | `Choose the level of market context you need` |
| `choice.intro` | `The right starting point depends on whether your question is regional, destination-specific, or outside the European Union.` |
| `choice.items[1].title` | `Start with the EU overview` |
| `choice.items[1].body` | `Use the European Union path for shared regional procurement context and to understand how the EU country destinations relate to the wider market structure.` |
| `choice.items[2].title` | `Choose an EU country destination` |
| `choice.items[2].body` | `Use a country path when your next question depends on the destination market. Country pages provide local procurement context; they do not replace the EU overview.` |
| `choice.items[3].title` | `Use a standalone market path` |
| `choice.items[3].body` | `Choose the United Kingdom, India, or Brazil when that destination is the primary context for the next procurement check.` |
| `choice.direct_answer` | `Choose the European Union overview for shared regional context. Choose a country destination for local procurement context. Use the United Kingdom, India, or Brazil paths when those markets are the destination.` |

Item order is fixed 1 → 2 → 3 in visual and DOM order.

## 7. Procurement path fields

| Field | Exact value |
|---|---|
| `procurement.eyebrow` | `NEXT PROCUREMENT CHECK` |
| `procurement.h2` | `Continue with the next procurement check` |
| `procurement.intro` | `Choosing a destination is one part of the review. Continue with the section that addresses your next question.` |

| Order | Target | Card title | Body | Action label | Planned href |
|---:|---|---|---|---|---|
| 1 | `PRODUCT-000` | `Review pigment grades` | `Use Products when you need to review grade pages or begin from product requirements. Product suitability still depends on technical evaluation.` | `Explore Products` | `/products/` |
| 2 | `APP-000` | `Start from the application` | `Use Applications when the first known input is coatings, plastics, masterbatch, printing inks, or paper. Product relationships appear only where technical evidence permits.` | `Explore Applications` | `/applications/` |
| 3 | `DOC-000` | `Plan document review` | `Use Documents to understand document categories and controlled request paths. A page or request does not promise that a document is available for every product or market.` | `Review Documents` | `/documents/` |

## 8. Trade boundary fields

| Field | Exact value |
|---|---|
| `trade.eyebrow` | `CURRENT INFORMATION` |
| `trade.h2` | `Keep time-sensitive trade information separate` |
| `trade.body` | `Market pages organize procurement context. Detailed trade-policy information belongs in Resources, where official sources, scope, and update dates can be reviewed. This hub does not state current duties, measures, or customs outcomes.` |
| `trade.criteria` | `Official sources · Scope · Update dates` |
| `trade.action.label` | `Review Resources` |
| `trade.action.target_page_id` | `RES-000` |
| `trade.action.planned_href` | `/resources/` |

Specific Trade Update records and URLs are absent. Their four internal route identities remain frozen and do not enter Buyer Clean or Schema.

## 9. Buyer Question fields

| ID | Question | Answer |
|---|---|---|
| Q1 | `How is the market navigation organized?` | `The market navigation is organized around the European Union, United Kingdom, India, and Brazil. Within the EU structure, Germany, Italy, Spain, Poland, the Netherlands, and Belgium are separate country destinations.` |
| Q2 | `Should I start with the European Union overview or a country destination?` | `Start with the European Union overview for shared regional context. Choose a country destination when the next procurement question depends on local market context.` |
| Q3 | `What does a market page help me review?` | `A market page organizes destination-specific procurement context and directs you to the relevant Products, Applications, Documents, or Resources section. It does not replace technical evaluation or document confirmation.` |
| Q4 | `Where should I check current trade-policy information?` | `Detailed, time-sensitive trade information belongs in Resources and must be checked against current official sources, scope, and update dates. This hub does not state policy outcomes.` |
| Q5 | `Where should I start if I do not know the grade?` | `Product selection is handled by Products and Applications. Start with Products when you have a grade or technical requirement, or with Applications when the end use is the first known input.` |
| Q6 | `Where are technical and origin documents handled?` | `Document explanations and controlled request paths belong in Documents. Availability, version, and market applicability must be confirmed through the relevant document process.` |

All six answers are server-rendered. `FAQPage` and `QAPage` are false/prohibited.

## 10. Route reference model

Each route reference requires:

| Semantic field | Rule |
|---|---|
| `target_page_id` | Stable Registry identity; never inferred from label |
| `planned_url` | Registered/planned URL from the approved route inventory |
| `site_scope` | `tio2-my` |
| `content_approved` | Implementation/release input, not Buyer Clean |
| `route_implemented` | Gate 8 evidence input |
| `canonical_verified` | Gate 9 evidence input |
| `release_ready` | Derived; never manually used to publish a broken link |
| `visible_label` | Exact approved label |
| `schema_item_enabled` | true only when the same visible destination anchor is implemented |

Current Gate 7 planning state for all 22 units remains `NOT_VERIFIED_LIVE`. This is not a reason to omit required Gate 7 field mapping or claim a route does not exist.

## 11. API delivery expectations

- Fetch the page by `page_id=MARKET-000` and `site_scope=tio2-my`.
- Return only fields for the requested scope and locale.
- Resolve route references from stable Page IDs; do not concatenate or guess URLs.
- Preserve ordered collections for destinations, choices, procurement paths and questions.
- Separate internal readiness fields from Buyer Clean serialized output.
- Do not serialize PT-BR, four Trade routes, row-level PRODUCT relations or internal status labels.
- Cache keys and revalidation tags include `site_scope` and page identity.
- A missing Malaysia record is an error/release blocker, not permission to query another scope.

## 12. Component mapping

| Component role | Consumes | Key state / behavior |
|---|---|---|
| Global Header | shared Chrome + current ID | Fixed RFQ; Markets current; Desktop/Mobile variants |
| Breadcrumb | Home/Markets references | Semantic list; normal anchors |
| Market Hero | hero fields | Local CTA only; one H1 |
| Destination Navigator | destination section + 10 items | EU parent/children/standalone hierarchy; responsive 3/2/1 columns |
| Choice Guide | three ordered items + direct answer | Fixed order; content-driven height |
| Procurement Paths | three page-level records | No row-level Product recommendation |
| Trade Boundary | stable copy + `RES-000` | No specific Trade content |
| Buyer Questions | six Q/A records | Server-rendered; not FAQ Schema |
| Global Footer | shared Chrome | Fixed RFQ; production Logo from owner Manifest only |

## 13. Conditional rendering rules

- Global Chrome RFQ is never conditional.
- PT-BR and specific Trade destinations are completely absent.
- No empty cards, disabled actions, hidden hrefs, placeholder arrows or internal-state copy.
- The approved visual expects ten English Market actions and the three procurement actions. If Gate 8 cannot implement a required target, the implementation cannot pass Gate 9/release; it must not silently substitute another target.
- Schema follows visible implementation atomically.

## 14. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-31 | Initial semantic CMS/API/component mapping for MARKET-000 Gate 7; independently reviewed with the full package | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE`; Gate 8 locked |
