# PRODUCT-000 SEO / GEO / Schema Contract V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / Titanium Dioxide Products |
| URL | `/products/` |
| Date | `2026-08-31` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate | Gate 6 review input |
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
| Target robots after release gates close | `index, follow` |
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
| `Product` | Grade name and approved live Grade URL; optional visible Application/Process `additionalProperty` only |
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

Every ListItem URL must resolve to the approved `/products/{grade}/` route inside `site_scope=tio2-my` before release. Do not read a fallback item from another site scope.

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
- Fourteen Grade URLs are approved identities but must still resolve live in `site_scope=tio2-my` before release.
- Process cards render atomically only when their own routes resolve live.
- Applications, Documents and Markets cards render only for approved live destinations; hide the whole Support module if none are live.
- Global Header, Mobile Header, Mobile Menu and Footer RFQ remain visibly fixed.
- `/request-a-quote/` not ready is a release blocker; do not hide, disable or replace RFQ with Contact.
- Contextual RFQ, prefill and final CTA must point to the same approved Malaysia-scope RFQ route.
- Canonical and Schema URLs must never fall back to mytio2, TIOVAR or another `site_scope`.

The target `index, follow` state is allowed only after Grade links, required Global Chrome links, RFQ route and rendered optional routes pass release verification.

## 8. Development-field readiness contract

Future Gate 7 specifications must expose at least:

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
| `rfq` | Global visibility constant; route readiness is release gate, not visibility state |
| `schema` | Server-emitted candidate nodes constrained by Sections 5–7 |

No empty, unresolved or unverified field may render a public placeholder, guessed fact or cross-scope fallback.

## 9. Gate 6 acceptance checklist

- [x] One primary keyword and one canonical responsibility.
- [x] Exact Title, Meta, Canonical, H1 and language defined.
- [x] Target robots state separated from staging and release gates.
- [x] Six Application and three Process sets match PRODUCT V0.3.
- [x] Fourteen ItemList identities and order defined.
- [x] M-2377, Rubber and M-996/M-2196 boundaries recorded.
- [x] FAQ initial DOM and Schema equivalence defined.
- [x] Hidden and unsupported Schema properties prohibited.
- [x] Route and `site_scope=tio2-my` boundaries defined.
- [ ] Live route resolution, production SVG Logo and implementation output remain external acceptance items.
