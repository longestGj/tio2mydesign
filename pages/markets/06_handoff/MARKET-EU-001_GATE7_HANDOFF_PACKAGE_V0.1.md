# MARKET-EU-001 Gate 7 Development Handoff Package V0.1

## 0. Document control

| Field | Value |
|---|---|
| Package ID | `MARKET-EU-001-G7-HANDOFF-01` |
| Page / URL | `MARKET-EU-001` / `/markets/european-union/` |
| Site scope / locale | `tio2-my` / `en` |
| Page type / priority | Market procurement landing page / P0 |
| User Gate 7 authorization | `批准 Gate 6，授权 Gate 7`, 2026-09-04 |
| Package state | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Page lifecycle | `APPROVED_FOR_HANDOFF` |
| Handoff / Gate 8 | `NOT_HANDED_OFF / LOCKED / NOT_AUTHORIZED` |
| Production / release | Not authorized |

This package converts the approved Gate 1–6 baseline into an implementation-neutral WordPress/Next.js delivery contract. It contains no implementation code and does not access `D:\16Wordpress_nextjs`.

## 1. Authority and precedence

External development must consume these sources in order:

1. root `AGENTS.md` and current explicit user decisions;
2. `docs/architecture/PAGE_REGISTRY_V0.2.md` and `research/keyword/11_page_keyword_master.csv`, row `MARKET-EU-001`;
3. `docs/page-briefs/MARKET-EU-001_EUROPEAN_UNION_BRIEF_V0.1.md`;
4. `pages/markets/04_planning/MARKET-EU-001_GATE2_FULL_COPY_V0.2.md`;
5. `pages/markets/04_planning/MARKET-EU-001_FINAL_CONTENT_POLISH_DELTA_V0.1.md` as the narrow overlay on item 4;
6. `pages/markets/04_planning/MARKET-EU-001_CURRENT_GATE5_APPROVED_MANIFEST_V0.15.md` and its approved visual/state assets;
7. `pages/markets/05_review/MARKET-EU-001_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md`;
8. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, production Logo Manifest/Addendum and current Legal/Privacy/CMP contracts;
9. `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`;
10. this Gate 7 package, its acceptance document, implementation plan and final Manifest.

Historical copy, wireframes, visual directions and pending-review Manifests may not override the current authority set.

## 2. Locked page identity

| Field | Required value |
|---|---|
| `page_id` | `MARKET-EU-001` |
| `site_scope` | `tio2-my` |
| `locale` | `en` |
| `page_type` | `market_procurement_landing` |
| `slug` | `/markets/european-union/` |
| `canonical_target` | `https://tio2malaysia.com/markets/european-union/` |
| `primary_keyword` | `titanium dioxide supplier europe`; governance only, never printed as a field label |
| `mapping_status` | `APPROVED_PRD_V0.3`; internal only |
| `verification_status` | `QUALITATIVE_KEYWORD_EVIDENCE`; internal only |
| `current_navigation_key` | `markets` |
| `parent_page_id` | `MARKET-000` |
| `content_revision` | `Gate 2 V0.2 + Final Content Polish Delta V0.1 + Gate 5 V0.1` |

The page owns Europe/EU supplier intent. Country pages own explicit country modifiers; Product/Application owners retain technical selection intent; `RES-TRADE-EU` owns detailed trade-update intent.

## 3. Exact content projection

### 3.1 Composite rule

The buyer-visible content is deterministic:

1. load every field from `MARKET-EU-001_GATE2_FULL_COPY_V0.2.md`;
2. apply only the replacements defined in `MARKET-EU-001_FINAL_CONTENT_POLISH_DELTA_V0.1.md`;
3. do not retain the replaced 14-Grade directory, old five H2 values or superseded FAQ openings;
4. do not introduce content absent from those two authorities;
5. use the Gate 5 HTML only as a visual/interaction assembly reference, not as permission to infer new facts.

The composite output is proven by Gate 5 HTML SHA-256 `43FC82AA199AB5893100CFEA0F54CB0695EE547ADA71C9CBB22E8278DECB2B0A`.

### 3.2 Semantic module order

All viewports and server-rendered output preserve this order:

1. Global Header;
2. Breadcrumb `Home → Markets → European Union`;
3. Hero;
4. supplier/product/application definition;
5. six-step EU procurement path and direct-answer block;
6. five Application evaluation paths;
7. six representative Grades in two groups;
8. four Documents categories and English-service note;
9. EU importing-role / REACH / CLP responsibility block;
10. Malaysia manufacturing and origin block;
11. customs and dated EU trade context;
12. six EU destination paths;
13. eight Buyer Questions;
14. final supply-request conversion;
15. Global Footer.

No module may be reordered, shortened to fit a viewport or converted into buyer-visible internal status text.

### 3.3 Locked headings and metadata

| Key | Exact value |
|---|---|
| `seo.title` | `Malaysia Titanium Dioxide Supplier for EU Buyers | TiO2 Malaysia` |
| `seo.meta_description` | `Evaluate Malaysia-origin titanium dioxide grades for EU coatings, plastics, masterbatch, inks and paper. Request documents, samples or a quote.` |
| `hero.h1` | `Malaysia-Origin Titanium Dioxide for European Union Buyers` |
| `procurement.h2` | `Plan Your EU Titanium Dioxide Procurement Path` |
| `grades.h2` | `Explore Titanium Dioxide Grades by Application` |
| `documents.h2` | `Request Documents for Product and Supplier Qualification` |
| `destinations.h2` | `Explore Titanium Dioxide Supply by EU Destination` |
| `conversion.h2` | `Prepare Your EU Titanium Dioxide Supply Request` |

All other exact headings and Buyer Clean values come from the composite rule in Section 3.1.

## 4. CMS semantic field model

Concrete WordPress field names and Next.js types are owned by the external development repository. The implementation must provide an equivalent validated model for these semantic keys.

### 4.1 Page and evidence state

| Semantic key | Type | Required rule |
|---|---|---|
| `page.id` | stable string | `MARKET-EU-001` |
| `page.site_scope` | enum | exactly `tio2-my` |
| `page.locale` | locale | `en` |
| `page.route` | normalized path | `/markets/european-union/` |
| `page.content_version` | immutable reference | approved composite revision |
| `page.release_enabled` | derived boolean | false while any release-blocking evidence/route/runtime condition remains open |
| `evidence.claim_id` | stable string | claim-register or Gate-control identity |
| `evidence.status` | enum | approved, current, held, stale, suppressed |
| `evidence.source_url` | URL | required for time-sensitive public facts |
| `evidence.source_date` | date | publication/checked date as applicable |
| `evidence.scope` | text | exact fact scope; never buyer-visible as governance prose |
| `evidence.reviewed_at` | date | required for trade/current-source output |

### 4.2 Content groups

| Group | Required semantic shape | Source |
|---|---|---|
| `hero` | eyebrow, H1, body, primary Product action, secondary RFQ action | Gate 2 V0.2 §2.2 |
| `supplier_definition` | heading, definition, company relationship, product form, five applications | Gate 2 V0.2 §2.3 |
| `procurement` | intro, six ordered steps, direct answer | Gate 2 V0.2 §2.4 plus Delta heading |
| `applications` | intro, five ordered cards, Hub action | Gate 2 V0.2 §2.5 |
| `grades` | intro, two ordered groups, six Grade cards, one Hub action | Final Polish Delta §3 only |
| `documents` | intro, four ordered categories, service note, two actions | Gate 2 V0.2 §2.7 plus Delta heading |
| `import_roles` | answer, four-item checklist, source label/date, ECHA action | Gate 2 V0.2 §2.8 |
| `origin` | body, source qualifier, About and Request Documents actions | Gate 2 V0.2 §2.9 |
| `trade` | evergreen answer, commercial bridge, dated context, clarification, three official references, Trade Update action | Gate 2 V0.2 §2.10 |
| `destinations` | intro, six ordered country relations, helper line | Gate 2 V0.2 §2.11 plus Delta heading |
| `questions` | eight ordered question/answer records | Gate 2 V0.2 §2.12 overlaid by Final Polish Delta §4 |
| `conversion` | body, RFQ/Documents/Sample actions, response note | Gate 2 V0.2 §2.13 plus Delta heading |
| `global_chrome` | shared component reference, current key, Legal/Cookie/CMP hooks | Global Chrome V0.5 and shared Legal/Privacy authority |

Collections preserve their approved order. Missing required buyer-visible text is a validation error, not permission to use a placeholder or another site scope.

## 5. Product and Application relationships

### 5.1 Representative Grade collection

| Order | Group | Grade Page ID | Label | Exact positioning | Planned URL |
|---:|---|---|---|---|---|
| 1 | Coatings | `GRADE-M350` | M-350 | `Decorative, industrial and automotive coatings` | `/products/m-350/` |
| 2 | Coatings | `GRADE-M510` | M-510 | `Architectural and automotive coatings` | `/products/m-510/` |
| 3 | Coatings | `GRADE-M896` | M-896 | `Industrial and weather-resistant coatings` | `/products/m-896/` |
| 4 | Plastics & Masterbatch | `GRADE-M200` | M-200 | `Exterior plastics and durable plastic masterbatch` | `/products/m-200/` |
| 5 | Plastics & Masterbatch | `GRADE-M108` | M-108 | `Masterbatch, compounds, polyolefin and PVC film` | `/products/m-108/` |
| 6 | Plastics & Masterbatch | `GRADE-M210` | M-210 | `Polyolefin masterbatch and engineering plastics` | `/products/m-210/` |

Each card action is `View Grade`; the single module action is `View All Titanium Dioxide Grades` → `PRODUCT-000` → `/products/`. The other eight Grades must not enter HTML, API output, disclosure, metadata, Schema or hidden lists on this page.

### 5.2 Application collection

| Order | Target Page ID | Label | Planned URL |
|---:|---|---|---|
| 1 | `APP-COAT` | Explore Coatings | `/applications/titanium-dioxide-for-coatings/` |
| 2 | `APP-PLAS` | Explore Plastics | `/applications/titanium-dioxide-for-plastics/` |
| 3 | `APP-MB` | Explore Masterbatch | `/applications/titanium-dioxide-for-masterbatch/` |
| 4 | `APP-INK` | Explore Printing Inks | `/applications/titanium-dioxide-for-printing-inks/` |
| 5 | `APP-PAPER` | Explore Paper | `/applications/titanium-dioxide-for-paper/` |
| 6 | `APP-000` | Explore All Applications | `/applications/` |

Application evaluation criteria use the exact Gate 2 copy. They do not become Grade recommendations or unsupported performance claims.

## 6. Destination, information and conversion relations

| Relation key | Target Page ID | Visible label | Planned target / behavior |
|---|---|---|---|
| `parent_market` | `MARKET-000` | Markets | `/markets/` |
| `destination_de` | `MARKET-EU-DE` | Germany | `/markets/germany/` |
| `destination_it` | `MARKET-EU-IT` | Italy | `/markets/italy/` |
| `destination_es` | `MARKET-EU-ES` | Spain | `/markets/spain/` |
| `destination_pl` | `MARKET-EU-PL` | Poland | `/markets/poland/` |
| `destination_nl` | `MARKET-EU-NL` | Netherlands | `/markets/netherlands/` |
| `destination_be` | `MARKET-EU-BE` | Belgium | `/markets/belgium/` |
| `documents_hub` | `DOC-000` | View the Documents Process | `/documents/` |
| `request_documents` | `CONV-DOC` | Request Documents / Request Product Information / Request Origin & Supplier Information | `/request-documents/`; request-purpose and selected Grade remain editable |
| `about` | `ABOUT-001` | About TiO2 Malaysia | `/about/` |
| `trade_update` | `RES-TRADE-EU` | View the EU Trade Update | `/resources/eu-titanium-dioxide-anti-dumping-duty/`; only when current and approved |
| `resources_hub` | `RES-000` | Resources | `/resources/` |
| `rfq` | `CONV-RFQ` | Request a Quote | `/request-a-quote/?market=European%20Union&source_page=MARKET-EU-001`; market is visible/editable |
| `sample` | `CONV-SAMPLE` | Request a Sample | `/request-sample/`; context may be carried only by the approved receiving contract |

Route references resolve from stable Page IDs. Do not construct routes from labels, silently point to Contact or fall back to mytio2/TIOVAR content.

## 7. Official-source and dynamic-content model

| Key | Required source / value | Rendering rule |
|---|---|---|
| `import_roles.source` | ECHA non-EU company REACH/CLP guidance | Render approved neutral responsibility wording; never infer an appointed OR or registration |
| `trade.definitive_measure` | Commission Implementing Regulation (EU) 2025/4 | Scope remains defined TiO2 imports originating in China |
| `trade.reinvestigation` | OJ C/2026/4533, 25 August 2026 | Render only while reviewed current; state that the investigation is ongoing |
| `trade.taric` | official TARIC information/current lookup | Use as current-check route; never output a guaranteed tariff result |
| `trade.checked_date` | `2026-09-04` for this baseline | Must be refreshed before handoff delivery, implementation acceptance, Gate 9 and Gate 10 release |
| `origin.claim_hold` | `EU-G6-R01` / site-wide origin hold | Page may be implemented for preview, but `page.release_enabled=false` until exact-scope first-party evidence closes the hold or a separately approved content change removes affected relationships |

The dated trade sub-block and Trade Update action are one atomic state. If freshness/source/scope/content approval fails, omit both from releasable output while retaining the approved evergreen customs-check guidance. Such omission must be documented and re-reviewed; it may not leave an empty card or internal status label.

## 8. SEO, GEO and Schema contract

| Element | Required behavior |
|---|---|
| Title / Meta / H1 | Exact Section 3.3 values |
| Canonical | One absolute self-Canonical `https://tio2malaysia.com/markets/european-union/` |
| Production robots | `index, follow` only after Gate 9 approval and Gate 10 authorization |
| Non-production robots | `noindex, nofollow` |
| Sitemap | Include the one Canonical only after release authorization |
| Hreflang | None unless a separately approved localized alternate exists; do not infer BM or PT-BR alternates |
| Required Schema candidates | `WebPage`, `BreadcrumbList` |
| Conditional Schema | Six-country `ItemList` only when all six corresponding visible anchors are implemented, canonical and release-valid |
| Prohibited Schema | `FAQPage`, `QAPage`, `Product`, `ProductGroup`, `Offer`, `LocalBusiness`, hidden Grade list, EU establishment, warehouse, stock, certification, tariff result or held origin relation |

Schema and social metadata must be generated from the same approved/evidence-filtered projection as visible content. The implementation may not use held or suppressed data only in JSON-LD, Open Graph, ALT text or API output.

## 9. Component contract

| Component role | Consumes | Required behavior |
|---|---|---|
| Global Header | shared Chrome + `current_navigation_key=markets` | Desktop navigation; Mobile `Logo | RFQ | Menu`; fixed RFQ; current state by surface |
| Breadcrumb | Home, Markets, current label | semantic `<nav>`/ordered list; normal anchors |
| Market Hero | `hero` | one H1; Product and contextual RFQ actions; no EU-based claim |
| Supplier Definition | `supplier_definition` | clear company/product/application relationship; no vanity metric |
| Procurement Path | six ordered steps + direct answer | 3/2/1 responsive grid; DOM order fixed |
| Application Paths | six relations | descriptive normal anchors; no Grade inference |
| Representative Grades | two groups + six records | exactly six cards; no hidden remainder, ranking or comparison |
| Documents | four categories + service note | request model, not public-download/availability promise |
| Import Roles | answer/checklist/source | source/date visible; not legal advice or registration claim |
| Origin Context | qualified approved copy | release-enabled only after exact origin hold closes |
| Trade Context | evergreen + atomic dated state | source/date/scope governed; stale state omitted as Section 7 |
| Destination Paths | six country relations | complete six-item visible set; ItemList parity if enabled |
| Buyer Questions | eight ordered Q/A records | content present in initial server output; interactive disclosure may enhance it; no FAQ Schema |
| Final Conversion | three actions + response note | no implied quote/sample/document approval |
| Global Footer | shared Chrome | production reverse Logo, fixed RFQ, Privacy EN/BM, Cookie Policy and CMP Cookie Settings trigger; no Terms route |

## 10. API and isolation expectations

- Fetch by stable page identity and `site_scope=tio2-my`; locale is `en`.
- Return only approved fields for the requested scope and locale.
- Preserve order for steps, Applications, Grade groups/cards, document categories, destinations, references, questions and CTAs.
- Resolve relations from Page IDs and the Malaysia registry; no guessed URL concatenation.
- Separate governance/readiness/evidence fields from Buyer Clean serialization.
- Include `site_scope`, page identity and locale in cache keys and revalidation tags.
- A missing Malaysia record is an error/release blocker, not permission to query or render another scope.
- No TIOVAR/mytio2 content, menu, media, metadata, form state or cached payload may be used as fallback.
- Unapproved/held fields do not render placeholders, disabled cards, hidden links, empty wrappers or Schema.

## 11. Global Chrome, Logo, Legal and Consent

- Use `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; do not fork Header, Mobile Menu or Footer.
- Current Markets treatment is bold + Teal underline on Desktop and bold + Teal left marker in Mobile Menu; buyer-visible `CURRENT` text is absent.
- One accessible navigation surface is exposed per active viewport; the inactive surface has no accessible/focusable descendants.
- Production Logo assets resolve through `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` and its Global Chrome Addendum; Gate 5 remote Logo URLs are visual evidence, not a production asset contract.
- Footer legal controls are Privacy Policy, Dasar Privasi (BM), Cookie Policy and Cookie Settings. Independent Terms route count remains zero.
- Cookie Settings invokes the shared CMP. Advanced Consent Mode remains the approved consent direction; GA4, GTM and Google Ads remain disabled until separately configured and authorized.

## 12. Responsive and accessibility contract

### Desktop 1440

- Match the approved 1440×9746 reference, editorial rhythm and two-column sections.
- No content crop, overlap, fixed-height clipping or invented imagery.

### Tablet 768

- Match the approved 768×13227 reference.
- Use compact shared Header; cards reflow without changing semantic order.

### Mobile 390

- Match the approved 390×18025 reference and one-column reading order.
- Minimum touch target 44×44 logical pixels; no horizontal scrolling or clipped long company/regulatory text.

### Interaction and semantics

- One H1 and ordered H2/H3 structure.
- Descriptive crawlable anchors for internal destinations.
- Mobile Menu exposes `aria-expanded`, a useful dialog/navigation name, focus containment, Escape close, scroll restoration and focus return.
- Disclosure controls expose state programmatically and remain keyboard-operable.
- Visible focus is not color-only; DOM order follows visual order.
- Reduced motion removes nonessential movement without removing information.
- At 200% zoom, content remains available without two-dimensional scrolling except where a genuine data table requires it; this page has no such table.

## 13. Visual authority

| Evidence | Dimensions | SHA-256 |
|---|---:|---|
| Desktop full page | 1440×9746 | `C70DE827B7D35329417897F28391FE27F3ED1ED152DFA28AB402410D7F82840A` |
| Tablet full page | 768×13227 | `ED98A72D4A1C75F1338E73123B9F80CD1E13199A72E22BB68444565EAC451503` |
| Mobile full page | 390×18025 | `64A292D13CFD5CF0A103252210D3A6A29A0F83E27DE057476B2793591123118E` |
| Mobile Menu open/focus | 390×844 | `D7B31541D039CF8C54C3DBFC4989E8E7DE44551A775EE7EC7F8FD36B5CA5B0A1` |
| FAQ expanded Desktop | 1440×1565 | `501B15FECA3B0823161402926D029BDD53EC77B60A7DDD5713AD48EF81C0085F` |
| FAQ collapsed Mobile | 390×1078 | `6D25C526398B115B33F8222DCF18BA20C667C8CE66D74DB6C5010A7E49867BD8` |
| Documents focus | 1440×818 | `2C5EF4391E14C2A37F38A9EEF06ADB90554FA17BF0995933239C4F4FA45B12A0` |

The HTML and PNGs are reference evidence, not deployable source code.

## 14. Later-phase control map

| Control | Subject | Gate 8 implementation duty | Later closure boundary |
|---|---|---|---|
| `EU-G6-R01` | Site-wide Malaysia-origin evidence hold | Preserve `page.release_enabled=false` for affected claims and machine-readable relationships | Exact-scope evidence or separately approved content removal before release |
| `EU-G6-R02` | EU trade paragraph freshness | Bind source, status, checked date and atomic omission behavior | Reverify at implementation, Gate 9 and Gate 10 |
| `EU-G6-R03` | Related-route readiness | Verify response, redirect, Canonical, link, sitemap, Schema and scope isolation | Gate 8 evidence and Gate 9 read-only QA |
| `EU-G6-R04` | RFQ, Documents and Sample behavior | Verify editable context, privacy, validation, success/error, receiver and production data flow | Gate 8 evidence and Gate 9 read-only QA; production release remains separately controlled |
| `EU-G6-R05` | Runtime metadata, Schema, CMP, accessibility and responsiveness | Implement the exact package contract and provide test/screenshot evidence | Gate 9 read-only QA |

These controls are not buyer-visible content and do not permit changes to the approved visual or copy baseline.

## 15. Phase boundary

- Gate 7 prepares and reviews this package; it does not implement it.
- The package is not handed off until the user separately confirms handoff or authorizes Gate 8.
- Gate 8 implementation belongs only to the external WordPress/Next.js project and its own governance.
- Gate 9 is D23 read-only QA against an accessible external result.
- Gate 10 separately controls deployment, DNS, publication and indexing.
- No other Market page is included.
- `D:\16Wordpress_nextjs` is outside this task and was not accessed.

## 16. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial implementation-neutral Gate 7 package for the approved European Union Market page | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; Gate 8 locked |
