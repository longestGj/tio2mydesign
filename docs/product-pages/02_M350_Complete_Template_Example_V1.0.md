# M-350 Complete Product Page Template Example V1.0

## 0. Purpose and Evidence Posture

This is the one complete template example required for the product-page development handoff. It demonstrates how M-350 uses the unified module order without becoming final approved production copy for all 14 grades.

The example uses PRD V0.4 and the approved page-keyword master for the following baseline facts:

- Grade: M-350
- URL: `/products/m-350/`
- Primary keyword: `M-350 titanium dioxide`
- Product type: Rutile titanium dioxide
- Process: Chloride
- Page direction: Decorative, industrial and automotive coatings and printing inks

No approved current M-350 SDS, COA, COO, packaging evidence or product-specific origin file was provided in the seven baseline inputs. During prototype review, the product owner approved direct use of the current official mytio2.com M-350 technical-specification values. The example therefore renders those selected technical rows, while document-availability promises, packaging claims and product-specific origin claims remain excluded.

## 1. Lean Content Record

```yaml
template_version: product-page-v1
identity:
  page_id: GRADE-M350
  grade_code: M-350
  slug: m-350
  primary_keyword: M-350 titanium dioxide
  product_type: Rutile titanium dioxide
  category_label: Coatings
  process: Chloride

seo:
  title: M-350 Titanium Dioxide for Coatings | TiO2 Malaysia
  meta_description: Evaluate M-350 titanium dioxide for decorative, industrial and automotive coatings or printing inks. Request technical review, a sample or an RFQ.
  h1: M-350 Rutile Titanium Dioxide for Coatings
  canonical_path: /products/m-350/

hero:
  summary: A general chloride-process rutile grade for evaluation in decorative, industrial and automotive coatings and printing inks.
  image_id: product-m350-primary
  primary_cta: rfq
  secondary_cta: sample

positioning:
  body: M-350 is positioned as a general chloride-process rutile titanium dioxide grade for coating and ink formulation evaluation. Buyers should confirm fit against their resin system, dispersion process, performance targets and destination-document requirements.
  decision_points:
    - General rutile grade
    - Chloride process
    - Coatings and printing-ink evaluation direction
    - Technical review, sample and RFQ path

applications:
  items:
    - Decorative coatings
    - Industrial coatings
    - Automotive coatings
    - Printing inks
  application_route_keys:
    - application_coatings
    - application_printing_inks

recommendations:
  recommended:
    - Decorative-coating formulation evaluation
    - Industrial and automotive coating formulation evaluation
    - Printing-ink formulation evaluation
  not_recommended: []

technical_specifications:
  rows:
    - property: TiO2 content
      value: 93.5
      unit: "%"
      qualifier: Typical (92.5% minimum)
    - property: Rutile content
      value: 100
      unit: "%"
      qualifier: Typical (99.0% minimum)
    - property: Brightness
      value: 95.4
      unit: "%"
      qualifier: Typical
    - property: Oil absorption
      value: 18
      unit: g/100 g
      qualifier: Typical
    - property: pH
      value: 7.2
      qualifier: Typical
    - property: Average particle size
      value: 230
      unit: nm
      qualifier: Typical
    - property: Inorganic treatment
      value: ZrO2, Al2O3
    - property: Organic treatment
      value: Present

documents:
  requestable_types: []
  route_key: request_documents

origin_support:
  summary: ""
  route_keys:
    - about
    - document_origin

market_support:
  route_keys:
    - market_eu
    - market_uk
    - market_india
    - market_brazil

related_grades:
  items:
    - grade_code: M-510
      context: Multi-application coatings grade
    - grade_code: M-896
      context: Industrial and weather-resistant coatings grade
    - grade_code: M-895
      context: Architectural and industrial coatings grade

conversion:
  sample_route_key: request_sample
  rfq_route_key: request_quote

publishing_status:
  positioning: verified
  applications: verified
  recommendations: verified
  technical_specifications: verified
  documents: verified
  origin_support: pending_verification
  market_support: verified
  related_grades: verified
```

`documents = verified` in this example authorizes a neutral request workflow, not a claim that every listed document is available. Because `requestable_types` is empty, the page asks the buyer what is needed and does not show document-availability badges.

## 2. SEO Output

### Title

`M-350 Titanium Dioxide for Coatings | TiO2 Malaysia`

### Meta Description

`Evaluate M-350 titanium dioxide for decorative, industrial and automotive coatings or printing inks. Request technical review, a sample or an RFQ.`

### Canonical

`{approved production origin}/products/m-350/`

The production implementation must replace `{approved production origin}` with the approved HTTPS domain. Query parameters never change the canonical.

### Visible Breadcrumb

`Home > Products > M-350`

### H1

`M-350 Rutile Titanium Dioxide for Coatings`

## 3. Complete Public-Render Example

The following sections appear in the exact template order.

### 3.1 Product Hero

**Category label:** Coatings  
**Process badge:** Chloride process

# M-350 Rutile Titanium Dioxide for Coatings

A general chloride-process rutile grade for evaluation in decorative, industrial and automotive coatings and printing inks.

Primary CTA: **Request an M-350 Quote**  
Secondary CTA: **Request an M-350 Sample**

Hero implementation notes:

- Prefill `M-350` and source page in both conversion workflows.
- Use an owned or licensed M-350-specific image. Until such an asset is approved, use a clearly generic material visual without implying it depicts the actual M-350 package.
- Do not add a Malaysia-origin badge to the product hero until the product-specific claim is approved.

### 3.2 Product Positioning

## Where M-350 Fits

M-350 is positioned as a general chloride-process rutile titanium dioxide grade for coating and ink formulation evaluation. Buyers should confirm fit against their resin system, dispersion process, performance targets and destination-document requirements.

- General rutile grade
- Chloride process
- Coatings and printing-ink evaluation direction
- Technical review, sample and RFQ path

Contextual process link:

`Learn about chloride-process titanium dioxide`

The process anchor renders only when the approved Chloride Process page is live.

### 3.3 Main Applications

## Main Application Directions

### Decorative Coatings

Evaluate M-350 for decorative coating formulations where a general chloride-process rutile grade is under consideration.

### Industrial Coatings

Include M-350 in technical evaluation for industrial coating systems after confirming formulation and performance requirements.

### Automotive Coatings

M-350 may be evaluated for automotive coating applications within the approved product direction, subject to formulation testing.

### Printing Inks

M-350 may also be evaluated for printing-ink systems, with final suitability determined by the buyer's formulation and application testing.

Contextual links:

- `Titanium dioxide for coatings`
- `Titanium dioxide for printing inks`

These links render from route keys only after the Application URLs are approved and live.

### 3.4 Recommended For

## Recommended Evaluation Directions

- Decorative-coating formulation evaluation
- Industrial and automotive coating formulation evaluation
- Printing-ink formulation evaluation

Qualification note:

Final grade selection should be confirmed against the buyer's formulation, processing conditions, target performance and required documentation.

### 3.5 Not Recommended

This side of the module does not render in the baseline example. No approved negative-use evidence was supplied.

The public page must not infer that M-350 is unsuitable for powder coatings, plastics, masterbatch or another system merely because another grade is marketed for that use.

### 3.6 Technical Specifications

## Key Technical Specifications

| Property | Value | Unit | Qualifier |
|---|---:|---|---|
| TiO2 content | 93.5 | % | Typical (92.5% minimum) |
| Rutile content | 100 | % | Typical (99.0% minimum) |
| Brightness | 95.4 | % | Typical |
| Oil absorption | 18 | g/100 g | Typical |
| pH | 7.2 | — | Typical |
| Average particle size | 230 | nm | Typical |
| Inorganic treatment | ZrO2, Al2O3 | — | — |
| Organic treatment | Present | — | — |

CTA: **Request Full M-350 TDS**

### 3.7 Document Request

## Request M-350 Documents

Tell us which M-350 documents you need and the destination market. Our team will confirm the applicable document scope for your request.

Document request choices:

- Technical Data Sheet
- Safety Data Sheet
- Certificate of Analysis
- Certificate of Origin
- REACH-related documents
- Other technical or export document

CTA: **Request M-350 Documents**

Important behavior:

- These are requested document types, not public availability badges.
- The request sends grade, document selections, company, destination and application context.
- When verified availability is later supplied, the module may state which documents can be requested for M-350.

### 3.8 Malaysia-Origin Support

The product-specific module does not render because `origin_support = pending_verification`.

A neutral navigation link may appear below the document request:

`How TiO2 Malaysia handles origin documentation and traceability`

The linked site-level page owns the general explanation. The M-350 page must not state where M-350 was manufactured, packed, warehoused or shipped until product-specific public wording is approved.

### 3.9 Market Support

## Procurement Support for Your Destination

Select the relevant destination page for market-specific procurement, document and inquiry guidance.

- European Union
- United Kingdom
- India
- Brazil

The cards do not claim M-350 registration, stock, local availability or regulatory acceptance. They route the buyer to the relevant Market page.

### 3.10 Related Grades

## Other Coatings Grades to Review

### M-510

Multi-application coatings grade. Review the M-510 page when evaluating another coating-focused product direction.

### M-896

Industrial and weather-resistant coatings grade. Review verified M-896 information for industrial coating selection.

### M-895

Architectural and industrial coatings grade. Review verified M-895 information for another coatings direction.

No card uses “equivalent,” “replacement,” “better,” “cheaper” or a performance comparison.

### 3.11 Sample Module

## Request an M-350 Sample

Share your formulation or application objective, destination and expected purchase context so the sample request can be reviewed.

CTA: **Request an M-350 Sample**

Required prefill:

- Grade: M-350
- Source: M-350 product page

No free-sample, sample-size, freight or dispatch-time promise is shown.

### 3.12 Product Page Ending and Standalone RFQ Destination

The M-350 product detail page ends after the Sample module, followed by the global footer. It does not render an RFQ heading, RFQ section anchor or inquiry form.

The **Request an M-350 Quote** actions in the hero and header open the standalone quote page.

Standalone-page heading: **Request a Quote for M-350**

Provide your destination, application, estimated quantity, packaging requirement and requested documents for a relevant quotation review.

Standalone-page submit action: **Send an M-350 RFQ**

Required prefill:

- Grade: M-350
- Source: M-350 product page

The standalone page does not show price, inventory, MOQ, Incoterm, lead time or packaging promises.

## 4. M-350 Product JSON-LD Example

Because no real price, offer or review is published, the example omits `offers`, `review` and `aggregateRating`.

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.example.com/products/m-350/#product",
  "name": "M-350 Titanium Dioxide",
  "sku": "M-350",
  "description": "A general chloride-process rutile grade for evaluation in decorative, industrial and automotive coatings and printing inks.",
  "url": "https://www.example.com/products/m-350/",
  "image": [
    "https://www.example.com/images/products/m-350.webp"
  ],
  "category": "Rutile titanium dioxide for coatings"
}
```

Production requirements:

- Replace the example domain.
- Use the real approved image URL.
- Keep the description identical in meaning to visible content.
- Add `additionalProperty` only after approved specification rows render visibly.
- Add `brand`, `manufacturer` or `countryOfOrigin` only after those exact public claims are approved.

## 5. Breadcrumb JSON-LD Example

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Products",
      "item": "https://www.example.com/products/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "M-350",
      "item": "https://www.example.com/products/m-350/"
    }
  ]
}
```

## 6. Responsive Example Behavior

### Desktop

- Two-column hero with copy/actions and approved product visual
- Short decision points may appear as four restrained data cards
- Applications use a two-column grid
- Related grades use three cards
- The product page ends after the sample module and footer; quote CTAs open the standalone RFQ page

### Tablet

- Hero may retain two columns only while text and buttons have sufficient width
- Application and related-grade grids reduce to two columns
- No table or card text is truncated

### Mobile

- Single-column hero; H1 precedes visual when that supports comprehension and performance
- CTAs become full-width but not oversized pill buttons
- No embedded RFQ form lengthens the mobile product page
- Applications and related grades stack
- Document selections remain labeled controls, not icon-only actions
- A future specification table uses either a horizontally contained table with clear affordance or stacked Property–Value rows
- Sticky CTA, if used, exposes one primary action and does not cover consent or footer content

## 7. Example Acceptance Result

The example is complete when the developer can demonstrate:

- Fixed module order
- Correct rendering of the approved M-350 technical rows and omission of Not Recommended and product-specific Malaysia-Origin Support
- Working route-key behavior for provisional destination pages
- M-350 and the product-page source are carried into the standalone document, sample and RFQ workflows
- No RFQ anchor, heading or form is rendered inside the product detail page
- Visible and JSON-LD claims remain synchronized
- No content copied from the current mytio2.com body
