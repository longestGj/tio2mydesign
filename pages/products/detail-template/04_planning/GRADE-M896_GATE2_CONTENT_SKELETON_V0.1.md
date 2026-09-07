# GRADE-M896 Gate 2 Content Skeleton V0.1

## 1. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M896-G2-SKELETON-01` |
| Page ID | `GRADE-M896` |
| Date | `2026-09-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 1 input | `GRADE-M896_GATE1_EVIDENCE_AND_CLAIM_AUDIT_V0.1.md` |
| Development | `NOT_AUTHORIZED` |

## 2. SEO direction

| Element | Candidate |
|---|---|
| Title | `M-896 Titanium Dioxide for Industrial Coatings | TiO2 Malaysia` |
| Meta description | `Evaluate M-896 titanium dioxide for industrial and weather-resistant coatings. Review typical data, request documents or a sample, and submit an RFQ.` |
| H1 | `M-896 Titanium Dioxide for Industrial Coating Evaluation` |
| Canonical | `https://tio2malaysia.com/products/m-896/` |
| Breadcrumb | `Home > Products > M-896` |
| Robots before Gate 10 | `noindex,nofollow` |

## 3. Module skeleton

| Order | Module | Buyer purpose | Candidate content |
|---:|---|---|---|
| 1 | Hero | Confirm exact Grade and immediate next steps | Coatings / Chloride; concise TDS-based position; Quote + Sample only |
| 2 | Product Positioning | Understand where M-896 fits | Chloride rutile pigment; alumina/silica coating; organic treatment; coatings-first evaluation |
| 3 | Application Directions | Match the documented coating system | Six TDS-listed coating directions |
| 4 | Evaluation Priorities | Decide what to test | Coating performance review + formulation qualification review |
| 5 | Typical Technical Data | Review source-bound fields | 11 TDS rows, three columns, explicit typical/not-specification note |
| 6 | Document Request | Request controlled product information | M-896 TDS; buyer may specify additional needs; no availability promise |
| 7 | Market Support | Continue by destination | EU, UK, India, Brazil; route-ready only |
| 8 | Sample Request | Qualify testing request | Application, destination, objective and technical requirements |
| 9 | Global Footer | End the page | Shared Footer immediately after the last rendered body module |

## 4. Deliberate omissions

- Not Recommended.
- Malaysia-Origin Support.
- Related Grades.
- Packaging, loading and storage.
- Embedded RFQ module/form.
- FAQ.
- Product photograph or unverified package/factory/shipment image.

## 5. CTA and route direction

| CTA | Target | Prefill | Condition |
|---|---|---|---|
| Request an M-896 Quote | CONV-RFQ | `site_scope=tio2-my`, `grade=M-896`, `source_page=GRADE-M896` | Receiver-ready |
| Request an M-896 Sample | CONV-SAMPLE | same identity context | Receiver-ready |
| Request M-896 Documents | CONV-DOC | plus `requested_type=TDS` | Receiver-ready |

Contextual links to APP-COAT and PRODUCT-PROC-CL render only when the approved routes are live.

The Documents action is body-only in Typical Technical Data / Document Request and must not be added to Hero. `hero.actions` maximum length is 2.

## 6. GEO / Schema direction

- Primary entity: M-896 titanium dioxide product Grade.
- Related visible entities: rutile titanium dioxide pigment, Chloride process and Coatings.
- Answer-ready blocks: Hero/Positioning definition, documented applications, evaluation criteria and technical data.
- Schema: `Product` plus `BreadcrumbList`; no Offer, AggregateRating, Review, origin, manufacturer, certification, FAQPage or QAPage.
- The 11 visible technical rows are the only `additionalProperty` candidates.

## 7. Template channel candidate

`FAST_TRACK_RECOMMENDED_PENDING_CONTROLLER_02_REVIEW`

The content uses the approved M-350 module order and component families. It needs no new component, interaction or visual language.
