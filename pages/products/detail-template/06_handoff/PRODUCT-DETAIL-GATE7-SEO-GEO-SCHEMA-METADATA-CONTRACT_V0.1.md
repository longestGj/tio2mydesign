# Product Detail Gate 7 SEO, GEO, Schema and Metadata Contract V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `PRODUCT-DETAIL-G7-SEO-GEO-01` |
| Gate 7 Review ID | `PRODUCT-DETAIL-G7-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Scope | All 14 exact-grade Product Detail routes |

## 2. Intent ownership

- Grade pages own `{grade} titanium dioxide` and natural exact-grade modifiers.
- Applications own generic coatings, plastics, masterbatch, printing inks and paper intent.
- Process pages own generic Chloride and Sulfate intent.
- Markets own country/region supplier intent.
- Documents own generic TDS/SDS/COA/COO/REACH intent.
- Resources own comparison, alternative and trade-update intent.
- A verified neutral relationship may appear as factual context without transferring broad keyword ownership.

## 3. Metadata fields

| Field | Contract |
|---|---|
| Title | Begins with exact primary keyword; at most one visible verified differentiator; unique per grade |
| Meta description | One verified decision value plus a qualified buyer action; every claim visible on-page |
| H1 | Exactly one; begins with grade; uses only verified product type/direction |
| Canonical | Absolute self-canonical on `https://tio2malaysia.com` with approved lowercase trailing-slash path |
| Robots/index state | Follows minimum-publication gate; `noindex` is an explicit release control, not a content substitute |
| Open Graph | Same meaning and evidence boundary as visible content; approved scoped image only |
| ALT | Describes the actual image; decorative assets empty; no keyword stuffing or false factory/package claim |
| Breadcrumb | `Home > Products > {Grade}` in visible and structured output |

M-350 approved Gate 5 values remain:

- Title: `M-350 Rutile Titanium Dioxide Pigment | TiO2 Malaysia`
- H1: `M-350 Rutile Titanium Dioxide Pigment`
- Canonical: `https://tio2malaysia.com/products/m-350/`

No final Title, meta description, H1 or body is generated for the other 13 grades by this Gate 7 package.

## 4. GEO visible-answer contract

Each completed grade page must answer, using visible approved evidence:

1. What is this exact grade?
2. Which process classification is public and verified?
3. Which neutral Application directions are approved for public mapping and independently supported on the page?
4. Which product characteristics and technical rows are visible?
5. What must the buyer validate in formulation, processing, destination and document review?
6. Which functional next steps are available?

Answers remain concise and grade-specific. The template does not require FAQ, repeated keyword variants or generic TiO2 education. M-350's entity graph is an example structure, not reusable product facts.

## 5. Product JSON-LD

Allowed when visible and verified:

- `@context`, `@type: Product`, stable `@id`
- `name`, `sku`, `description`, `url`
- approved visible `image`
- accurate visible `category` or `material`
- `additionalProperty` rows that exactly match visible technical rows and qualifiers
- `brand`, `manufacturer` or `countryOfOrigin` only after exact visible claims are independently approved

Always omit when prerequisites are absent:

- `offers`, price, currency, availability, MOQ or delivery promises
- `review` and `aggregateRating`
- GTIN/MPN, certification and regulatory identifiers
- hidden technical values or non-public relationships
- `isSimilarTo`, equivalence, substitution or unsupported comparison properties

Schema is generated from the scoped public projection. It cannot read the administrative evidence ledger or unfiltered CMS record.

## 6. Breadcrumb JSON-LD

The three-item `BreadcrumbList` must match visible labels and canonical URLs:

1. Home → `https://tio2malaysia.com/`
2. Products → `https://tio2malaysia.com/products/`
3. Grade → its exact self-canonical URL

No process or Application page is inserted as a parent because Grade routes are flat.

## 7. PRODUCT V0.3 machine-readable boundaries

- Render only `VERIFIED_FOR_PUBLIC_MAPPING` relationships that also pass page/module evidence gates.
- Exclude all 54 `NO_PUBLIC_MAPPING` rows from metadata, Schema, Open Graph, filters, prefill and analytics labels.
- M-2377 Specialty Materials and Rubber are absent everywhere public or machine-readable.
- M-996/M-2196 comparison hold prevents differentiation, ranking, selection rationale and equivalence properties.
- A relationship matrix row never creates a technical `additionalProperty`.

## 8. Minimum publication/indexing gate

An indexable Grade page requires:

- approved identity, URL and exact primary keyword;
- unique accurate Title, meta description and H1;
- useful verified Hero/direct answer;
- at least one verified model-specific decision-support module beyond the Hero;
- at least one working qualified conversion/document path;
- self-canonical, visible/structured breadcrumb and crawlable Products link;
- no public-projection leakage or route fallback.

If unmet, keep the route in the approved preview/non-indexed state. Do not publish an indexable shell.

## 9. Gate 8/9 validation

- Inspect rendered head, canonical, robots state and Open Graph.
- Compare visible content, API projection and JSON-LD field by field.
- Validate Product and Breadcrumb syntax; no rich-result eligibility is promised.
- Crawl canonical/internal links and confirm exact-grade ownership.
- Scan for hidden/non-public relationship and technical leakage.
- Confirm other-site metadata cannot appear through cache or query fallback.

This contract does not authorize implementation or publication.
