# MARKET-000 Gate 7 Development Handoff Package V0.1

## 0. Document control

| Field | Value |
|---|---|
| Package ID | `MARKET-000-G7-HANDOFF-01` |
| Page | `MARKET-000` / Markets |
| Public URL | `/markets/` |
| Site scope | `tio2-my` |
| Language | EN |
| Priority | P1 |
| User Gate 7 authorization | Explicitly granted on 2026-08-31 |
| Current delivery lifecycle | `APPROVED_GATE_7_HANDOFF_BASELINE` |
| Submission state | `PROJECT_CONTROL_REVIEW_PASS` |
| Page lifecycle | `APPROVED_FOR_HANDOFF`; not `HANDED_OFF` |
| Gate 8 | `LOCKED / NOT_AUTHORIZED` |
| Child pages | Not started and not authorized |
| Production/release | Not authorized |

This package converts the approved MARKET-000 Gate 5 visual baseline and Gate 6 contracts into an implementation-neutral handoff specification. It contains no WordPress, Next.js, CMS, component, styling, test or deployment code and does not access the external development project.

## 1. Authoritative inputs

Current consumers must use these records in order:

1. `AGENTS.md` and current explicit user decisions.
2. `docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`.
3. `docs/architecture/PAGE_REGISTRY_V0.1.md`.
4. `research/keyword/11_page_keyword_master.csv`, row `MARKET-000` and the 22 referenced route identities.
5. `docs/page-playbooks/MARKET_PLAYBOOK_V0.1.md`.
6. `docs/page-briefs/MARKET-000_MARKETS_BRIEF_V0.1.md`.
7. `pages/markets/04_planning/MARKET-000_CONTENT_ARCHITECTURE_V0.1.md`, interpreted through later approved Gate 5/Gate 6 corrections.
8. `pages/markets/04_planning/MARKET-000_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`.
9. `pages/markets/04_planning/visual-designs/MARKET-000_FULL_VISUAL_DESIGN_V0.4.md`.
10. `pages/markets/05_review/MARKET-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md`.
11. `pages/markets/05_review/MARKET-000_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md`.
12. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.2.md`.
13. `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` and `pages/markets/02_analysis/MARKET-000_PRODUCT_RELATION_IMPACT_AUDIT_V0.3.md`.
14. `pages/markets/06_handoff/MARKET-000_GATE7_MANIFEST_V0.1.md` for this package's file and asset inventory.

Historical V0.1–V0.3 Market visuals and pre-fixed-RFQ language may not override these inputs.

## 2. Page identity and keyword contract

| Field | Locked value |
|---|---|
| Page ID | `MARKET-000` |
| URL | `/markets/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Search intent | Navigation |
| Buyer stage | Navigation |
| Priority | P1 |
| Mapping | `APPROVED_NAVIGATION_HUB` |
| Verification | `NO_DIRECT_KEYWORD_TARGET` |
| Page role | Help buyers choose the correct destination-market path and then the relevant Products, Applications, Documents or Resources path |
| H1 | `Choose Your Destination Market` |

The Hub must not target supplier/manufacturer/importer/wholesaler/distributor queries for the EU, UK, India, Brazil or an EU country. It must not become a product recommender, Trade Update, document request or quotation landing page.

## 3. Approved page order

All supported viewports use the same semantic order:

`Global Header → Breadcrumb → Hero → Destination Market → How to Choose → Next Procurement Check → Current Information → Buyer Questions Q1–Q6 → Global Footer`

There is no terminal body RFQ module, quotation FAQ or Contact fallback. Global Chrome RFQ remains fixed.

## 4. Approved visual baseline

| View / state | File | Dimensions | SHA-256 |
|---|---|---:|---|
| Desktop complete page | `MARKET-000_G5_DESKTOP_FINAL_REVIEW_CANDIDATE_V0.5.png` | 1440×4664 | `DD94FB6613A21F42C9225EDCD7C1123D9B2AF266821F8224A128BE41A65FA397` |
| 390px Mobile at 2× | `MARKET-000_G5_MOBILE_390_FINAL_REVIEW_CANDIDATE_V0.5.png` | 780×16874 | `008C8A83D778672C4494FA38D5660522ECB70A5638FB0ABE0A68A3D78322DD0B` |
| Tablet | `MARKET-000_G5_TABLET_768_FINAL_REVIEW_CANDIDATE_V0.5.png` | 768×6399 | `A1BA1068BE372E4B710D0A2AF2B58EDA0EF5827151099B03F926AA48033ADF5A` |
| Responsive states | `MARKET-000_G5_RESPONSIVE_COMPONENT_STATES_V0.4.png` | 1600×2500 | `E4D8C2E71CB9A65F032A5770D4FBD1B7BB24AFE23C4EEBB92706B0F5234BCFAA` |

The responsive state board contains a historical creation-time draft label. Current governance comes from the Gate 5 Manifest and Gate 6/Gate 7 documents; the approved PNG must not be regenerated merely to change that label.

## 5. Module delivery contract

| Module | Required content | Rendering contract | Restricted/empty behavior |
|---|---|---|---|
| Global Header | Approved scoped menu, Markets current state, fixed RFQ | Desktop full navigation; Mobile `Logo | RFQ | Menu` | Missing scoped menu or RFQ route blocks release; never hide RFQ or fall back across scopes |
| Breadcrumb | Home → Markets | Server-rendered semantic navigation | Both target URLs verified in Gate 9; no JS-only navigation |
| Hero | Eyebrow, H1, intro, one `Choose a Market` local CTA, chapter marker | One H1; CTA targets `#destination-market` | No body RFQ, no supplier-acquisition claim |
| Destination Market | EU parent, six EU countries, UK, India, Brazil EN | Ten visible meaningful anchors in approved order | PT-BR absent; broken planned route blocks release rather than creating a guessed fallback |
| How to Choose | Three ordered choices and Direct Answer | Desktop three columns; Tablet/Mobile stacked in DOM order | No country-name substitution template or extra recommendation |
| Next Procurement Check | Products, Applications, Documents | Three page-level navigation cards | No Grade/Application/Process row-level relationship; missing target blocks release |
| Current Information | Stable Trade boundary and generic Resources action | No current policy outcome | Specific Trade routes remain absent until independent source/scope/date/freshness approval |
| Buyer Questions | Q1–Q6 exact approved text | All answers in initial server-rendered DOM | No `FAQPage`/`QAPage`; no Q7 or quotation behavior claim |
| Global Footer | Approved Deep Navy Brand/Explore/Information/Conversion structure and fixed RFQ | Desktop and Mobile responsive Footer | Old PNG Logo is visual evidence only; production Logo reference comes from shared owner Manifest |

No Buyer Clean output may show internal terms such as `route`, `Gate`, `pending`, `not live`, `workflow`, `owner`, `release blocker`, `NO_PUBLIC_MAPPING` or `site_scope`.

## 6. Ten Market actions

| Order | Visible label | Target Page ID | Planned URL |
|---:|---|---|---|
| 1 | Explore the European Union | `MARKET-EU-001` | `/markets/european-union/` |
| 2 | Germany | `MARKET-EU-DE` | `/markets/germany/` |
| 3 | Italy | `MARKET-EU-IT` | `/markets/italy/` |
| 4 | Spain | `MARKET-EU-ES` | `/markets/spain/` |
| 5 | Poland | `MARKET-EU-PL` | `/markets/poland/` |
| 6 | Netherlands | `MARKET-EU-NL` | `/markets/netherlands/` |
| 7 | Belgium | `MARKET-EU-BE` | `/markets/belgium/` |
| 8 | Explore the United Kingdom | `MARKET-UK-001` | `/markets/united-kingdom/` |
| 9 | Explore India | `MARKET-IN-001` | `/markets/india/` |
| 10 | Explore Brazil | `MARKET-BR-EN` | `/markets/brazil/` |

Gate 7 supplies the stable Page IDs and planned URLs. Gate 8 implements them inside `tio2-my`. Gate 9 verifies response, Canonical, redirects, anchor output and scope isolation before release. Their current `NOT_VERIFIED_LIVE` status does not invalidate this Gate 7 specification.

## 7. Complete 22-route contract

| Route class | Count | Gate 7 delivery behavior | Gate 8/9 behavior |
|---|---:|---|---|
| Ten English Market destinations | 10 | Required visible action identities | Implement in Gate 8; verify all in Gate 9 before release |
| Brazil Portuguese `MARKET-BR-PT` | 1 | `PROVISIONAL_URL / LOCALIZATION_HOLD / DO_NOT_RENDER` | No implementation instruction until independently approved |
| Supporting destinations | 7 | `PRODUCT-000`, `APP-000`, `DOC-000`, `RES-000`, `ABOUT-001`, `CONV-DOC`, `CONV-RFQ`; only approved-baseline surfaces render | Implement referenced surfaces; verify route/form/Canonical in Gate 9 |
| Specific Trade destinations | 4 | `RES-TRADE-EU`, `RES-TRADE-UK`, `RES-TRADE-IN`, `RES-TRADE-BR` remain `DO_NOT_RENDER` | No implementation until official source, scope, date, content and freshness are independently approved |
| Total | 22 | Every route retains its Page ID and state | No cross-scope fallback or guessed URL |

The generic `Review Resources` link points to `RES-000`; it does not imply any specific Trade Update is current.

## 8. SEO, GEO and Schema handoff

| Element | Delivery value / behavior |
|---|---|
| Title | `Markets for Titanium Dioxide Procurement | TiO2 Malaysia` |
| Route-safe Meta | `Navigate titanium dioxide procurement information for the European Union, United Kingdom, India, and Brazil, with clear guidance on the next review step.` |
| Full-route Meta | `Choose a destination market for titanium dioxide procurement in the European Union, United Kingdom, India, or Brazil, then continue to the relevant market page.` |
| Meta selection | Gate 8 derives from the four first-level Market actions; Gate 9 verifies visible-state consistency |
| Canonical | `https://tio2malaysia.com/markets/` |
| Production robots | `index, follow` only after release gates close |
| Staging robots | `noindex, nofollow` |
| Hreflang | `NOT_APPLICABLE`; no MARKET-000 alternate |
| Sitemap | One approved Canonical only after release authorization |
| Allowed Schema | `CollectionPage`, `BreadcrumbList`, ten-English-destination `ItemList` |
| Prohibited Schema | FAQ/QAPage, Product, ProductGroup, Offer, LocalBusiness, Place, hidden/PT-BR/Trade/Product relations |

The `ItemList` order must match Section 6. A URL is emitted only with the same visible implemented anchor. Schema cannot contain a hidden, provisional, stale or cross-scope relation.

## 9. PRODUCT V0.3 relationship boundary

- `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` is the sole relationship source.
- MARKET-000 renders zero row-level Grade/Application/Process mappings.
- No country-to-grade suitability, registration, inventory, supply availability or Process preference may be inferred.
- M-2377's approved relations are not reproduced on this Hub; Specialty Materials stays no-public and Rubber stays evidence-only.
- M-996/M-2196 differentiation, ranking and comparison remain prohibited.
- `NO_PUBLIC_MAPPING` never becomes a public negative suitability statement.

## 10. Fixed RFQ contract

- Header, Mobile Header, Mobile Menu and Footer RFQ are always visible.
- All surfaces target the approved identity `CONV-RFQ` and planned URL `/request-a-quote/`.
- `rfq_route_ready=false` blocks release; it must not hide, disable or replace RFQ with Contact.
- This page has no contextual body RFQ and does not claim a Market selection is passed into the form.
- Gate 8 owns form, validation, privacy, error/success and any separately approved prefill implementation; Gate 9 performs end-to-end read-only QA.

## 11. Responsive and interaction contract

### Desktop

- 1440px reference, industrial editorial two-column Hero and EU parent/standalone hierarchy.
- Six EU country actions render as 3×2 rows.
- Three Choice and three Procurement cards render in three columns.
- Buyer Questions use aligned question/answer rows.

### Tablet

- 768px reference.
- Compact Header uses Logo/RFQ/Menu.
- EU country actions render as two columns.
- Major information cards stack without horizontal scrolling.

### Mobile

- 390px logical width; the approved 780px asset is 2× evidence.
- Body/Q&A text is 16px with approximately 24–25px line height; labels are at least 14px.
- EU countries are six stacked actions; all other cards are one column.
- Minimum interactive target is 44×44 logical pixels.
- No horizontal scrolling, clipped headings, clipped borders or fixed-height content crops.

## 12. Accessibility contract

- One H1 and ordered H2/H3 hierarchy.
- Semantic `<nav>` for Header, Breadcrumb and Footer navigation groups.
- Normal crawlable `<a href>` for local and page destinations.
- `aria-current="page"` for Markets in Desktop/Mobile navigation.
- Mobile Menu exposes accessible name, expanded state, focus containment, Escape close and focus return.
- Visible focus indicator meets the approved component state; not color-only.
- DOM order matches the semantic page order on every viewport.
- All Q1–Q6 answers are available in initial server-rendered content.
- Logo Home link has one useful accessible name; decorative portions do not duplicate speech.
- Reduced motion removes nonessential movement without removing content.

## 13. `site_scope=tio2-my` isolation

Every later implementation must scope:

- WordPress/CMS content queries;
- Next.js route resolution;
- Page-ID relationships and internal links;
- menus and current-page state;
- metadata, Canonical, sitemap and Schema;
- forms and allowed prefill;
- media/Logo asset references;
- cache keys and revalidation tags;
- analytics page/target IDs.

Missing Malaysia content may not fall back to TIOVAR, mytio2 or another `site_scope`. Cross-scope content, media, menu, route, cache or form-context leakage is a release blocker.

## 14. Production Logo dependency

`MARKET-G6-B04=APPROVED / CLOSED` records user approval of the production SVG brand direction and confirmation of usage rights on 2026-08-31.

`MARKET-G7-B05=APPROVED / CLOSED`. The Home/Global Chrome owner has published:

- `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` (`TIO2MY-PRODUCTION-SVG-LOGO-MANIFEST-01`, `APPROVED_PRODUCTION_SVG_BASELINE / ACTIVE`);
- `docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md`; and
- `docs/architecture/GLOBAL_LOGO_CROSS_PAGE_REGISTRY_V1.0.md`, which registers Markets Hub and Market pages.

Global Chrome must resolve `brand_logo_primary_horizontal`, `brand_logo_reverse_monochrome`, `brand_symbol_primary` and `brand_favicon_safe` through that Production Manifest. This package must not:

- copy or rewrite the SVGs;
- consume `brand/logo/candidates/v0.1/` as the current production authority;
- use the old approved PNG as a production asset; or
- hand any candidate file to Gate 8 as approved production input.

The production asset dependency is resolved for Gate 7 specification. Actual implementation still belongs to Gate 8 and runtime asset verification to Gate 9.

## 15. Phase boundary

- Gate 7 defines the package; it does not implement it.
- Gate 8 implementation is external and requires separate authorization.
- Gate 9 is read-only QA against an accessible implementation.
- Gate 10 publication requires separate user authorization.
- No Market child page is included in this package.
- `D:\16Wordpress_nextjs` is outside this task and must not be accessed.

## 16. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-31 | Created the implementation-neutral Gate 7 package; synchronized owner production Logo authority; passed independent project-control review | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE`; lifecycle=`APPROVED_FOR_HANDOFF`; not handed off; Gate 8 locked |
