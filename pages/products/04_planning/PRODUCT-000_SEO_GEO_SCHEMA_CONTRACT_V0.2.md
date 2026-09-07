# PRODUCT-000 SEO / GEO / Schema Contract V0.2

## 0. Document control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / Titanium Dioxide Products |
| URL | `/products/` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-000-G6-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate | `PROJECT_CONTROL_GATE_6_PASS_WITH_OPEN_GATE_8_9_ACCEPTANCE_ITEMS` |
| Gate 5 visual source | `PRODUCT-000_FULL_VISUAL_DESIGN_V0.12.md` |
| Relationship source | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` |
| Implementation status | Not implemented; Gate 7 and development remain unauthorized |

## 1. Page identity and search responsibility

| Field | Locked value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page type | Product hub / selection and directory page |
| Language | English; HTML `lang="en"` |
| Primary keyword | `titanium dioxide pigment` |
| Supported intent | titanium dioxide grades; grade selection; rutile titanium dioxide; rutile titanium dioxide pigment |
| Search intent | Commercial supplier search / product evaluation |
| H1 | `Titanium Dioxide Pigment Grades for Industrial Applications` |
| Page responsibility | Own generic pigment, rutile, grade-list and grade-selection intent; route buyers to process, application and exact-grade destinations |
| Excluded intent | exact-grade primary terms; generic application primary terms; country supplier terms; detailed process comparison |

Cannibalization boundaries are fixed:

- Chloride and Sulfate pages own process primary keywords.
- Fourteen Grade pages own exact model keywords.
- Applications pages own generic use-case keywords.
- Markets pages own country or regional supplier intent.
- Documents pages own document explanation and request intent.
- Resources pages own research, comparison and dated trade-update intent.

No separate Rutile landing page is created. Rutile secondary intent remains merged into `/products/`.

## 2. Metadata contract

| Element | Exact target |
|---|---|
| HTML Title | `Titanium Dioxide Pigment Grades | TiO2 Malaysia` |
| Title length | 47 characters |
| Meta Description | `Explore 14 titanium dioxide pigment grades by application, production process and portfolio group, then continue to grade pages for technical evaluation.` |
| Meta length | 153 characters |
| Canonical | `https://tio2malaysia.com/products/` |
| Target robots after Gate 9 QA and separate release/index authorization | `index, follow` |
| Pre-release / staging robots | `noindex, nofollow`; environment-controlled, not editable as page copy |
| Open Graph title | Same as HTML Title |
| Open Graph description | Same as Meta Description |
| Open Graph URL | Same as Canonical |
| Open Graph type | `website` |

No alternate language URL is approved for this page. Do not emit invented `hreflang`. A social preview image is not approved by this contract; omit image fields until an authorized asset exists.

The Title, H1 and Canonical are unconditional. The Meta is route-safe because application and process classifications remain visible in the Selector and grade-directory descriptions even if Process or Support route cards are conditionally absent.

## 3. Visible GEO answer graph

The visible Buyer Clean page establishes:

`PRODUCT-000 CollectionPage → titanium dioxide pigment → 14 grade entities → six approved Application result sets + three Process classifications + four portfolio navigation groups → exact Grade pages → technical evaluation → conditional downstream routes and RFQ`.

Required answer blocks are visible and extractable:

| Buyer or machine question | Visible source |
|---|---|
| How many grades are listed? | Hero, complete directory and FAQ 2 |
| Which exact grades are listed? | Complete directory and FAQ 2 |
| Which grades map to each application? | Six Selector states using PRODUCT V0.3 |
| Which production process applies to each grade? | Process module and exact directory descriptions |
| Can a grade appear under multiple applications? | Directory disambiguation sentence |
| How should a buyer evaluate a grade? | Five-step Evaluation and FAQ 1 |
| Does a listed grade guarantee suitability? | Hero boundary, Selector boundary and FAQ 5 |
| What if no grade is listed? | Empty-state contract and FAQ 4 |

`NO_PUBLIC_MAPPING` means no approved positive public relation. It must not be represented as “not suitable” or “not applicable”.

## 4. Relationship contract for visible and machine-readable output

### 4.1 Applications

| Application | Public count | Exact set |
|---|---:|---|
| Coatings | 8 | M-350, M-510, M-896, M-996, M-2196, M-895, M-52, M-2377 |
| Plastics | 8 | M-350, M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Masterbatch | 7 | M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Printing Inks | 4 | M-350, M-510, M-52, M-2377 |
| Paper | 2 | M-350, M-2377 |
| Specialty Materials | 1 | CR-901 |

### 4.2 Process

| Process | Public count | Exact set |
|---|---:|---|
| Chloride | 8 | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 |
| Sulfate | 5 | M-996, M-2196, M-108, M-52, M-2377 |
| Vapor-phase oxidation | 1 | CR-901 |

### 4.3 Special boundaries

- M-2377 may render neutrally in Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate.
- M-2377 Specialty Materials remains absent.
- Rubber is evidence-only and must not become a public taxonomy, URL, keyword target or Schema relation.
- M-996 and M-2196 may expose their own source-bound facts. Do not encode or imply comparison, superiority, equivalence, substitution, relative position or comparative choice logic.

## 5. Schema candidate contract

Schema is a Gate 7 implementation candidate only. Gate 6 approves boundaries, not emitted JSON-LD.

### 5.1 Allowed nodes

| Node/type | Required relation and boundary |
|---|---|
| `CollectionPage` | Canonical `@id` `https://tio2malaysia.com/products/#webpage`; `url`, `name`, `description`, `inLanguage`, `isPartOf` global WebSite |
| `BreadcrumbList` | Home → Products; URLs must use canonical Malaysia scope |
| `ItemList` | Exactly fourteen unique grade items in directory order; no application duplicates |
| `Product` | Grade name and approved Grade URL identity; Gate 8 implements and Gate 9 verifies the route; optional visible Application/Process `additionalProperty` only |
| `FAQPage` | Optional; exactly five visible questions and answers, all present in initial HTML/DOM |

Global `WebSite`, `Organization` and `Brand` nodes may be referenced by approved stable `@id` values only when the shared site graph emits them. This page must not independently add unsupported manufacturer, origin or corporate-control properties.

### 5.2 ItemList order

1. M-350
2. M-510
3. M-896
4. M-996
5. M-2196
6. M-895
7. M-200
8. M-108
9. M-210
10. M-340
11. M-886
12. M-52
13. M-2377
14. CR-901

Every ListItem URL is specified in Gate 7 as the approved `/products/{grade}/` identity inside `site_scope=tio2-my`. Gate 8 must implement it and Gate 9 must verify live resolution before release. Do not read a fallback item from another site scope.

### 5.3 Allowed Product properties

- `@id`, `name`, `url`.
- `additionalProperty` using `PropertyValue` only for Application and Production process values visibly present on the page.
- `category` only when it repeats a visible approved portfolio navigation group; it must not be used as a technical suitability claim.

### 5.4 Prohibited Schema output

- `Offer`, `AggregateOffer`, price, currency, availability, inventory, MOQ or delivery time.
- `AggregateRating`, `Review`, GTIN, MPN or certification without a separate approved source.
- `countryOfOrigin`, Malaysia manufacturing, factory location, capacity, traceability or COO.
- Hidden `NO_PUBLIC_MAPPING`, Rubber, M-2377 Specialty Materials or unsupported negative suitability relations.
- M-996/M-2196 comparison, equivalence, substitution, rank or recommendation.
- `ProductGroup` / `isVariantOf`; the four visible groups are navigation categories, not an approved variant family.
- URLs for provisional, unresolved or cross-scope routes.

## 6. FAQ and DOM contract

The five exact questions and answers are defined in `PRODUCT-000_FULL_VISUAL_DESIGN_V0.12.md` Section A6.1.

- One item may be visually expanded and four collapsed.
- Collapsed controls visibility only.
- All five answers must be present in initial HTML/DOM and readable without a client-side fetch.
- Accordion controls must be semantic buttons with `aria-expanded` and `aria-controls`.
- FAQPage Schema, if emitted, must match the visible questions and answers character-for-character.
- No FAQ answer may add unapproved product performance, availability, origin, document or comparison claims.

## 7. Route, internal-link and indexing boundary

- Local `#grade-selector` is always valid.
- Fourteen Grade URLs are approved Gate 7 specification identities. Gate 8 must implement them in `site_scope=tio2-my`; Gate 9 must verify live resolution before release.
- Gate 7 defines atomic Process card behavior. Gate 8 implements route-aware 2/1/0 states; Gate 9 verifies the live result.
- Gate 7 defines route-aware Applications, Documents and Markets cards. Gate 8 implements 3/2/1/0 states; Gate 9 verifies the live result and full-module closure at zero.
- Global Header, Mobile Header, Mobile Menu and Footer RFQ remain visibly fixed.
- Gate 7 carries the `/request-a-quote/` route/form/prefill contract. Gate 8 implements it; Gate 9 verifies it as a release blocker. Do not hide, disable or replace RFQ with Contact.
- Contextual RFQ, prefill and final CTA must be specified to use the same Malaysia-scope RFQ route in Gate 7, implemented in Gate 8 and verified in Gate 9.
- Canonical and Schema URLs must never fall back to mytio2, TIOVAR or another `site_scope`.

The target `index, follow` state is not a Gate 7 prerequisite. It is allowed only after Gate 8 implementation, Gate 9 read-only QA of Grade links, required Global Chrome links, RFQ and rendered optional routes, and separate release/index authorization.

## 8. Development-field readiness contract

If the user later authorizes Gate 7, its handoff specification must expose at least:

| Field | Contract |
|---|---|
| `page_id` | Fixed `PRODUCT-000` |
| `site_scope` | Fixed `tio2-my`; required in every query, cache key, route lookup and relation lookup |
| `canonical_url` | Exact canonical above |
| `seo_title`, `meta_description`, `robots`, `language` | Exact approved values and environment-aware release state |
| `hero` | Exact approved Buyer Clean copy and CTA hierarchy |
| `application_selector` | Six categories; relationships read only from approved V0.3-equivalent data |
| `process_routes` | Atomic route-aware collection; 2/1/0 states |
| `grade_directory` | Four visible groups, fourteen unique rows, exact descriptions and approved Grade route keys |
| `evaluation_steps` | Five ordered exact items |
| `support_paths` | Route-aware Applications/Documents/Markets collection; 3/2/1/0 states |
| `faqs` | Five exact Q/A; answers server-rendered in initial DOM |
| `rfq` | Global visibility constant; Gate 8 implements route/form behavior and Gate 9 verifies it before release |
| `schema` | Server-emitted candidate nodes constrained by Sections 5–7 |

No empty, unresolved or unverified field may render a public placeholder, guessed fact or cross-scope fallback. B02/B03 are Gate 8 implementation requirements and Gate 9 read-only QA/release blockers; they do not block Gate 6 PASS or a later user-authorized Gate 7 package.

## 9. Gate 6 acceptance checklist

- [x] One primary keyword and one canonical responsibility.
- [x] Exact Title, Meta, Canonical, H1 and language defined.
- [x] Target robots state separated from staging, Gate 7 handoff, Gate 8 implementation, Gate 9 QA and release/index authorization.
- [x] Six Application and three Process sets match PRODUCT V0.3.
- [x] Fourteen ItemList identities and order defined.
- [x] M-2377, Rubber and M-996/M-2196 boundaries recorded.
- [x] FAQ initial DOM and Schema equivalence defined.
- [x] Hidden and unsupported Schema properties prohibited.
- [x] Route and `site_scope=tio2-my` boundaries defined.
- [ ] B02/B03 live route and RFQ behavior remain Gate 8 implementation and Gate 9 read-only QA/release items.
- [x] B01 production SVG Logo dependency closed: `TIO2MY-LOGO-SVG-PCR-01 = APPROVED / CLOSED`, user brand/use-right approval dated `2026-08-31`, and `PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md = APPROVED_PRODUCTION_SVG_BASELINE / ACTIVE`.

## 10. Gate phasing and version record

- Gate 7 is currently `LOCKED / NOT_AUTHORIZED` solely because the user has not authorized Gate 7. B02/B03 are not the cause of that lock.
- A later user-authorized Gate 7 package must reference `D:\23MySec\brand\logo\production\PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` and the Global Chrome Logo Asset Addendum V1.0. It must consume the exact asset keys and hashes without copying or modifying SVGs. The historical PNG is not a production Logo source.

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-31 | Initial Gate 6 SEO/GEO/Schema contract; route readiness wording could be read as a Gate 7 prerequisite | Historical; retained |
| V0.2 | 2026-08-31 | `PRODUCT-000-G6-PCR-01` phase correction: Gate 7 specification, Gate 8 implementation, Gate 9 QA/release and separate Logo dependency | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| V0.2 status sync | 2026-08-31 | Production SVG Manifest V1.0 activated and B01 closed; no SEO/GEO/Schema content changed | `PRODUCT-G6-B01 = APPROVED / CLOSED`; Gate 7 unchanged |
