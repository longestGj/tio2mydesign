# GRADE-M895 SEO, GEO and Schema Contract V0.1

## 1. Control

| Field | Value |
|---|---|
| Contract ID | `GRADE-M895-SEO-GEO-SCHEMA-01` |
| Page ID | `GRADE-M895` |
| Date | `2026-09-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Public release | `NOT_AUTHORIZED` |

## 2. SEO contract

| Field | Exact candidate |
|---|---|
| Primary keyword | `M-895 titanium dioxide` |
| Title | `M-895 Titanium Dioxide for Coatings | TiO2 Malaysia` |
| Meta description | `Evaluate M-895 titanium dioxide for architectural and industrial coatings. Review typical data, request documents or a sample, and submit an RFQ.` |
| H1 | `M-895 Titanium Dioxide for Architectural and Industrial Coatings` |
| Canonical | `https://tio2malaysia.com/products/m-895/` |
| Locale | `en` |
| Hreflang | `NOT_APPLICABLE` |
| Robots before Gate 10 | `noindex,nofollow` |
| Sitemap before Gate 10 | Excluded |
| Open Graph type | `website` |
| Open Graph image | Omit unless an approved neutral Product Detail image is visibly bound |

The page owns exact M-895 intent only. Generic coatings belongs to Applications, chloride process to the Process page, and country-supplier intent to Markets.

## 3. GEO contract

| Field | Candidate |
|---|---|
| Primary entity | M-895 titanium dioxide Grade |
| Entity type | Rutile titanium dioxide pigment |
| Verified relationships | M-895 → Coatings; M-895 → Chloride process |
| Answer-ready definition | M-895 is a chloride-process rutile titanium dioxide pigment documented for architectural and industrial coating evaluation |
| Application block | Three current-TDS coating directions |
| Evaluation block | Two qualified buyer-testing groups |
| Technical block | Eleven current-TDS properties with value and method semantics |
| Freshness trigger | Re-review if the current M-895 TDS file/hash changes |

GEO excludes origin/manufacturing, equivalence, ranking, compliance, document availability, price, stock, logistics and other application-category inference.

## 4. Breadcrumb

1. Home — `https://tio2malaysia.com/`
2. Products — `https://tio2malaysia.com/products/`
3. M-895 — `https://tio2malaysia.com/products/m-895/`

Applications and Process remain body links, never breadcrumb parents.

## 5. Product Schema

Allowed: `Product`, `BreadcrumbList`.

Required Product fields: `@id`, `name`, `sku=M-895`, `url`, visible description and eleven `additionalProperty` entries.

Forbidden without later evidence: `countryOfOrigin`, invisible manufacturer/brand claims, `offers`, price/currency/availability, rating/review, certification/compliance, packaging/freight/delivery and FAQ/QAPage.

## 6. additionalProperty parity

| Schema name | Schema value |
|---|---|
| TiO₂ content | 94% |
| Inorganic coating | Alumina, zirconia |
| Organic treatment | Present |
| Moisture when packed | 0.5% max |
| Bulk density (tamped) | 1.3 g/cm³ |
| Oil absorption | 16 g/100 g |
| pH | 7.4 |
| Specific gravity | 4.1 g/cm³ |
| Identification | ISO 591-1: R2 |
| CAS number | 13463-67-7 |
| Color index | Pigment White 6 |

Each Product property value comes from `technical.rows[*].value`. `testMethod` may appear as the visible third column or optional description; it cannot replace the value.

## 7. Hero visual and media

The Hero uses the shared four-key neutral document/evaluation visual: `label`, `technicalFile`, `currentData`, `note`. Its V1 2026 label is visibly supported by the current TDS footer. It does not imply origin, factory, packaging, stock or shipment. No Product Schema image is emitted unless an approved image is visibly rendered.

## 8. Conditional consistency

Visible technical rows and Product properties are added/removed together. Unavailable receivers and routes produce no machine action or dead link. Preview index/sitemap controls remain false until separate Gate 10 authority.


