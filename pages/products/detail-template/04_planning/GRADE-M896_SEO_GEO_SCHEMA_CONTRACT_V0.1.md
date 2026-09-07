# GRADE-M896 SEO, GEO and Schema Contract V0.1

## 1. Control

| Field | Value |
|---|---|
| Contract ID | `GRADE-M896-SEO-GEO-SCHEMA-01` |
| Page ID | `GRADE-M896` |
| Date | `2026-09-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Public release | `NOT_AUTHORIZED` |

## 2. SEO contract

| Field | Exact candidate value |
|---|---|
| Primary keyword | `M-896 titanium dioxide` |
| Title | `M-896 Titanium Dioxide for Industrial Coatings | TiO2 Malaysia` |
| Meta description | `Evaluate M-896 titanium dioxide for industrial and weather-resistant coatings. Review typical data, request documents or a sample, and submit an RFQ.` |
| H1 | `M-896 Titanium Dioxide for Industrial Coating Evaluation` |
| Canonical | `https://tio2malaysia.com/products/m-896/` |
| Locale | `en` |
| Hreflang | `NOT_APPLICABLE` |
| Robots before Gate 10 | `noindex,nofollow` |
| Sitemap before Gate 10 | Excluded |
| Open Graph type | `website` |
| Open Graph image | Omit unless an approved M-896 or approved neutral Product Detail image is bound |

Rules:

- Use one visible H1.
- Grade modifiers remain supporting language; do not optimize for generic coatings, Chloride-process or country-supplier terms.
- Do not use filename-only `V3 2023` in visible metadata.
- Metadata and Schema must be generated from the same M-896 record as the visible page.

## 3. GEO contract

| Field | Candidate |
|---|---|
| Primary entity | M-896 titanium dioxide Grade |
| Entity type | Rutile titanium dioxide pigment |
| Verified relationships | M-896 → Coatings; M-896 → Chloride process |
| Supporting entities | TiO2 Malaysia site, industrial coatings, M-896 TDS, destination Market pages |
| Answer-ready definition | M-896 is a chloride-process rutile titanium dioxide pigment documented for industrial and weather-resistant coating evaluation |
| Answer-ready application block | Six TDS-listed coating directions |
| Answer-ready technical block | 11 visible TDS property rows with value semantics preserved |
| Freshness trigger | Re-review if the M-896 TDS file/hash changes or a newer Grade-specific source is approved |

### Buyer questions and answer ownership

| Question | Answer block | Boundary |
|---|---|---|
| What is M-896 titanium dioxide? | Hero + Positioning | Exact Grade identity only |
| What coatings is M-896 documented for? | Application Directions | Detailed systems remain within broad Coatings ownership |
| What should be evaluated? | Evaluation Priorities | Qualified test criteria, not a guarantee |
| What are the typical properties? | Technical table | Same values as visible Product Schema properties |
| How can I request the next step? | Documents, Sample, standalone RFQ | Receiver-gated; no approval promise |

### GEO exclusions

- No product origin, Malaysia manufacturing, COO or traceability claim.
- No equivalence, replacement, ranking or superiority over another Grade.
- No country registration/compliance/availability inference.
- No SDS/COA/REACH availability inference.
- No price, Offer, stock, MOQ, lead time or delivery statement.

## 4. Breadcrumb contract

Visible and machine-readable order:

1. Home — `https://tio2malaysia.com/`
2. Products — `https://tio2malaysia.com/products/`
3. M-896 — `https://tio2malaysia.com/products/m-896/`

The Grade remains flat under Products. Applications and Process pages are body links, never breadcrumb parents.

## 5. Product Schema contract

Allowed types:

- `Product`
- `BreadcrumbList`

Required Product fields:

| Field | Source |
|---|---|
| `@id` | Canonical + `#product` |
| `name` | Visible Grade identity |
| `sku` | `M-896` |
| `url` | Canonical |
| `description` | Visible Hero description |
| `additionalProperty` | Exact 11 visible technical rows |

Conditional field:

- `image` only when the same approved image is visibly rendered and accurately described.

Forbidden fields unless a later approved evidence change explicitly releases them:

- `brand` or `manufacturer` claims not visible in the M-896 body contract;
- `countryOfOrigin`;
- `offers`, `price`, `priceCurrency`, `availability`;
- `aggregateRating`, `review`;
- certification, compliance or regulatory identifiers;
- packaging, freight or delivery fields.

## 6. `additionalProperty` parity table

| Schema name | Schema value |
|---|---|
| TiO₂ content | 92% |
| Inorganic coating | Alumina, Silica |
| Organic treatment | Present |
| Moisture when packed | 0.5% max |
| Bulk density (tamped) | 1.2 g/cm³ |
| Oil absorption | 18 g/100 g |
| pH | 8.0 |
| Specific gravity | 4.0 g/cm³ |
| ISO 591-1 classification | R2 |
| CAS number | 13463-67-7 |
| Color index | Pigment White 6 |

Test methods remain visible in the HTML technical table. If implementation models methods in Schema, they must not change the property name/value relationship.

## 7. Conditional consistency

- If a technical row is withdrawn, remove it from visible content and Schema together.
- If a CTA receiver is unavailable, omit the action; do not generate a machine-readable action that the page cannot perform.
- No FAQPage or QAPage is generated because no FAQ module is proposed.
- Preview/noindex/sitemap controls remain false/closed until separate Gate 10 authority.

