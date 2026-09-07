# TiO2 Malaysia Unified Product Page Template and Content Specification V1.0

## 0. Document Control

| Item | Value |
|---|---|
| Version | V1.0 |
| Date | 2026-08-29 |
| Status | Ready for stakeholder review and product-page development handoff |
| Applies to | All 14 TiO2 Malaysia grade pages |
| Strategy | One unified template with module-level evidence gating |
| Example grade | M-350 |
| Out of scope | Actual page development and final copywriting for all 14 grades |

## 1. Purpose

This specification defines one reusable product-page system for all 14 approved titanium dioxide grades. It gives content, SEO, technical, compliance, design and development teams a shared contract without changing the PRD V0.4 strategy.

The template must achieve four outcomes:

1. Give each grade one authoritative URL for its exact model intent.
2. Help a B2B buyer decide whether to request documents, a sample or a quotation.
3. Keep applications, process, market and document search intent on their assigned pages.
4. Allow routes, components and verified content to proceed while unverified facts remain completely unrendered.

## 2. Approved Product Routes and Keyword Ownership

The following route and primary-keyword assignments are fixed by PRD V0.4 and `11_page_keyword_master.csv`.

| Grade | Approved URL | Primary keyword | PRD role summary |
|---|---|---|---|
| M-350 | `/products/m-350/` | `M-350 titanium dioxide` | General chloride grade for decorative, industrial and automotive coatings and inks |
| M-510 | `/products/m-510/` | `M-510 titanium dioxide` | Multi-application grade with architectural and automotive coating direction |
| M-896 | `/products/m-896/` | `M-896 titanium dioxide` | Industrial and weather-resistant coatings direction |
| M-996 | `/products/m-996/` | `M-996 titanium dioxide` | Sulfate durable industrial, powder and architectural coatings direction |
| M-2196 | `/products/m-2196/` | `M-2196 titanium dioxide` | Sulfate industrial and powder coatings direction; differentiation pending |
| M-895 | `/products/m-895/` | `M-895 titanium dioxide` | Architectural and industrial coatings direction |
| M-200 | `/products/m-200/` | `M-200 titanium dioxide` | Durable exterior plastics, uPVC and PVC film direction |
| M-108 | `/products/m-108/` | `M-108 titanium dioxide` | High-thermal-stability masterbatch and plastics direction |
| M-210 | `/products/m-210/` | `M-210 titanium dioxide` | Polyolefin masterbatch and engineering-plastics direction |
| M-340 | `/products/m-340/` | `M-340 titanium dioxide` | High-concentration masterbatch and film direction |
| M-886 | `/products/m-886/` | `M-886 titanium dioxide` | Bright-white plastics and high-temperature processing direction |
| M-52 | `/products/m-52/` | `M-52 titanium dioxide` | Printing-ink direction with can-coating support |
| M-2377 | `/products/m-2377/` | `M-2377 titanium dioxide` | Multi-application route; process and application facts restricted pending verification |
| CR-901 | `/products/cr-901/` | `CR-901 titanium dioxide` | High-purity specialty direction for electronic, optical, battery and specialist materials |

Rules:

- Do not change these slugs to reflect process, category, application or market.
- Do not create market copies such as `/markets/india/m-350/`.
- Do not create separate coating, plastics or process versions of the same grade.
- A category change or corrected process classification must update page content and links, not the canonical grade URL.

## 3. Search-Intent Boundaries

### 3.1 Grade Page Ownership

Each product page owns only the exact grade family:

- `{grade} titanium dioxide`
- `{grade} TiO2`
- `{grade} rutile titanium dioxide`, when rutile type is approved
- `{grade} TDS`, `{grade} specifications`, `{grade} sample` and `{grade} supplier` as supporting model-modifier language

These modifiers may support the page, but the exact primary keyword remains `{grade} titanium dioxide`.

### 3.2 Excluded Primary Intent

| Intent | Owner | Product-page treatment |
|---|---|---|
| Generic coatings, paint, plastics, masterbatch, inks or paper terms | Applications | Mention verified suitability briefly and link to the appropriate Application page |
| Generic chloride or sulfate/sulphate process terms | Process pages | State the verified process and link to the process page |
| Destination-country supplier terms | Markets | Link from market-support module; do not optimize the grade page for a country query |
| Generic TDS, SDS, COA, COO or REACH terms | Documents | Mention grade-specific request availability only when verified; link to Documents or request workflow |
| Process comparison and performance-selection terms | Resources | Do not turn the product page into a process guide |
| Brand alternative, equivalent or replacement terms | Resources | Do not assert equivalence or guaranteed substitution on a grade page |
| Quote and bulk-purchase terms | RFQ page | Use conversion CTAs; do not replace the grade page's model intent |

### 3.3 Keyword Placement

- Use the primary keyword once in the `<title>` and naturally in the H1.
- Use the exact model in the opening visible content.
- Use `TiO2` and `rutile titanium dioxide` as natural variants where accurate.
- Application names may appear as factual context but must not dominate headings or repeated anchor text.
- Do not set keyword-density targets.
- Do not generate repetitive paragraphs merely to lengthen all 14 pages.

## 4. Unified Module Order

The order below is fixed across all 14 pages. Conditional modules disappear without leaving an empty section, placeholder heading, unexplained gap or broken anchor.

| Order | Module | Template requirement | Public display rule |
|---:|---|---|---|
| 0 | Global header | Required | Always |
| 1 | Breadcrumb | Required | Always |
| 2 | Product hero | Required | Always; only approved identity and verified differentiators are shown |
| 3 | Product positioning | Required claim group | Render when `positioning = verified`; otherwise the hero carries the approved model identity without a separate positioning section |
| 4 | Main applications | Conditional | Render when `applications = verified` and at least one application is approved |
| 5 | Recommended / Not Recommended | Conditional | Render each side independently only when its claim group is verified; do not infer a negative use from absence in a TDS |
| 6 | Technical specifications | Conditional | Render when `technical_specifications = verified` and at least one approved specification row exists |
| 7 | Document request | Required component | Render when a working approved request destination exists; list only verified document types |
| 8 | Malaysia-origin support | Conditional | Render product-specific claims only when `origin_support = verified`; otherwise a neutral link to the site-level origin/document explanation may be used |
| 9 | Market support | Conditional | Render when approved market routes are live; no grade-specific regulatory claim without verification |
| 10 | Related grades | Conditional | Render when `related_grades = verified` and at least two useful destinations exist |
| 11 | Request a sample | Required component | Render when the sample workflow is live and can receive the selected grade |
| 12 | Global footer | Required | Always; the product detail page ends after the sample module and footer |

### 4.1 Module Categories

**Required page modules**

- Breadcrumb
- Product hero
- Product positioning claim group in the template
- Document request component
- Sample component

“Required component” means the template must support it. It does not authorize a broken button, unapproved URL or unverified promise on the public page.

**Conditional modules**

- Main applications
- Recommended / Not Recommended
- Technical specifications
- Malaysia-origin support
- Market support
- Related grades

**Optional enhancements**

- One verified product or packaging video
- One downloadable approved public document
- One verified application case or authorized testimonial
- FAQ, only when questions and answers add unique model-specific decision support
- Sticky desktop section navigation when at least four body modules render

Optional enhancements must not change keyword ownership or move ahead of the decision-support modules.

## 5. Module Specifications

### 5.1 Breadcrumb

Visible path:

`Home > Products > {Grade}`

Rules:

- Do not insert a category or process page into the breadcrumb because the canonical grade URLs are flat.
- The current grade may be plain text; Home and Products are links.
- The JSON-LD `BreadcrumbList` must match the visible path.
- A process or application page can be linked in body content, not represented as the grade's parent.

### 5.2 Product Hero

Purpose: identify the exact grade, state a concise verified position and expose the primary buyer actions.

Required fields:

- Grade code
- H1
- One-sentence summary based only on approved facts
- Primary visual
- Category label, if verified
- Process badge, if verified
- Primary CTA: Request a Quote
- Secondary CTA: Request a Sample or Request Documents, selected by buyer relevance

Rules:

- The H1 must begin with the grade code.
- Use one H1 only.
- Do not display an unverified process badge.
- Do not put country names, anti-dumping terms or generic supplier-keyword strings into the H1.
- Hero imagery must be a verified owned or licensed asset. An illustrative image cannot be presented as a photograph of the actual product, factory, package or shipment.
- Buttons carry the selected grade into the destination workflow.

### 5.3 Product Positioning

Purpose: answer “What is this grade, and what kind of evaluation is it intended for?”

Content:

- Product type
- Verified process
- Verified surface-treatment or distinguishing direction, when approved
- Primary application direction
- Buyer selection context

Length guideline: one concise paragraph plus up to four decision points. It is not a generic explanation of titanium dioxide.

Do not include:

- Unsupported superiority language
- Unsupported equivalence
- Generic process education
- Country-specific regulatory or tariff commentary
- Inventory, capacity, lead-time or delivery guarantees

### 5.4 Main Applications

Purpose: present verified use directions and route users to broader application guidance.

Structure:

- Three to six application items in priority order
- One short verified reason per item, if supported
- Maximum two contextual Application-page links

Rules:

- The grade page states suitability; the Application page owns generic formulation and grade-selection coverage.
- Do not publish an application merely because it appears on a conflicting legacy page.
- Do not generate a separate SEO subsection for every polymer or coating synonym.

### 5.5 Recommended / Not Recommended

Purpose: help buyers rule a grade in or out without implying guaranteed formulation performance.

Recommended content must be supported by approved product evidence.

Not Recommended content requires explicit technical support. The following are not sufficient by themselves:

- The application is absent from a TDS.
- Another grade is marketed for the application.
- The process is different.
- A competitor page uses a different recommendation.

When only positive suitability is verified, render “Recommended For” and omit “Not Recommended.” Do not create symmetrical lists for visual balance.

### 5.6 Technical Specifications

Purpose: expose the most useful approved model-specific specifications without replacing the controlled TDS or COA.

Rules:

- Use a two- or three-column table: Property, Value, and Test/condition when needed.
- Preserve units and whether a figure is typical, minimum, maximum or range.
- Never convert a typical value into a guaranteed specification.
- Never combine values from two versions of a TDS.
- Do not infer an absent test method.
- Show only decision-relevant rows; the complete controlled document remains available through the document workflow.
- On small screens, the table must remain readable without clipping or meaning-changing column collapse.
- `technical_specifications = pending_verification` or `not_public` means the heading and table are absent from the page and Product JSON-LD.

Suggested parameter groups:

| Product direction | Parameter-group examples |
|---|---|
| Coatings | TiO2 content, rutile content, treatment, oil absorption, pH, brightness/whiteness, particle size when approved |
| Plastics/masterbatch | TiO2 content, treatment, thermal stability, dispersion-related measures, volatile/moisture, color properties when approved |
| Inks | TiO2 content, treatment, oil absorption, particle size, gloss/abrasion-related measures when approved |
| Specialty | Purity, crystal form, particle characteristics and application-specific measures from the approved specialty TDS |

These are allowed field groups, not permission to invent or require every parameter.

### 5.7 Document Request

Purpose: turn technical-document intent into a qualified request while keeping controlled documents governed.

Allowed document types:

- TDS
- SDS
- COA
- COO
- REACH-related documents
- Other approved export or technical documents

Rules:

- List a document as available only when availability for the grade is verified.
- “Request document availability” is acceptable when the workflow collects a request without promising delivery.
- A link to a generic Documents page should explain the document family; the request action should prefill grade and requested document type.
- Never expose a confidential, expired, superseded or wrong-market document.
- Never put regulatory registration numbers into public content or structured data unless current scope and public wording are approved.

### 5.8 Malaysia-Origin Support

Purpose: connect the grade evaluation to the site's Malaysia-origin proposition without duplicating About or Documents.

The module may contain, when verified:

- Product origin statement
- Manufacturing or packing statement
- Batch traceability support
- COO request support
- Export-document coordination

Rules:

- Product pages provide a concise summary and link to About or the COO/document page.
- Do not repeat the full corporate story on every grade page.
- Do not state that Malaysia origin avoids, bypasses or circumvents a trade measure.
- Do not assert a port, warehouse, stock position, Incoterm, MOQ, packaging format or lead time without approved operational evidence.

### 5.9 Market Support

Purpose: route global grade traffic to destination-market procurement support.

Default destinations:

- European Union
- United Kingdom
- India
- Brazil

Rules:

- Use approved Market URLs from the route registry.
- Do not reproduce policy or country-supplier copy in the grade page.
- Link to an EU country page only when the country page has a documented application or procurement reason to feature the grade.
- A product page may link to the four primary market pages; it should not list all six EU country pages by default.
- Market pages link back only to grades they can recommend with verified support, not automatically to all 14 grades.

### 5.10 Related Grades

Purpose: prevent dead ends and support grade comparison without unsupported equivalence.

Rules:

- Show two to four grades.
- Relatedness may be based on verified application, process or buyer selection path.
- Card titles use exact grade names.
- A comparison reason is displayed only when verified.
- If a differentiation statement is not verified, use a neutral label such as “Another coatings grade” rather than “better,” “equivalent,” “replacement” or “lower-cost alternative.”
- Do not auto-populate the same related-grade list on all pages.
- Do not link M-996 and M-2196 with a fabricated selection difference.

### 5.11 Request a Sample

Purpose: collect enough context to qualify testing.

Required prefill:

- Grade
- Source page

Requested inputs:

- Name
- Company
- Business email
- Destination country
- Application
- Current grade or target requirement
- Sample objective
- Estimated annual or project quantity, when appropriate
- Required documents
- Consent

Do not publish a sample quantity, freight promise, dispatch time or free-sample promise until approved.

### 5.12 Standalone RFQ Destination

Purpose: collect a procurement-ready inquiry on the dedicated RFQ page. The RFQ form is not a product-detail-page module and must not be embedded after the sample module.

Required prefill:

- Grade
- Source page

Requested inputs:

- Name and company
- Business email and contact method
- Destination country and port, when known
- Application
- Grade or target technical requirements
- Estimated quantity and buying frequency
- Packaging requirement
- Incoterm, if the business process supports it
- Required documents
- Sample requirement
- Notes and consent

Do not show price, inventory, MOQ, lead time or shipment promises unless those values have an approved publication source.

Routing rules:

- Product hero, header and any approved quote CTA link to the standalone RFQ route.
- Carry grade and source page in the destination URL or equivalent application state.
- The product page contains no `RFQ` section anchor and no RFQ form.
- Back-navigation must return the buyer to the originating product page without losing context.

## 6. Lean Content Data Structure

### 6.1 Principle

The implementation data record contains content and routing values only. It does not repeat source, owner, approval date, review date, applicability or visibility metadata beside every field.

Status is applied once at module or claim-group level.

### 6.2 Product Record

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
  meta_description: "..."
  h1: M-350 Rutile Titanium Dioxide for Coatings
  canonical_path: /products/m-350/

hero:
  summary: "..."
  image_id: product-m350-primary
  primary_cta: rfq
  secondary_cta: sample

positioning:
  body: "..."
  decision_points: []

applications:
  items: []
  application_route_keys: []

recommendations:
  recommended: []
  not_recommended: []

technical_specifications:
  rows: []

documents:
  requestable_types: []
  route_key: request_documents

origin_support:
  summary: "..."
  route_keys: []

market_support:
  route_keys: []

related_grades:
  items: []

conversion:
  sample_route_key: request_sample
  rfq_route_key: request_quote

publishing_status:
  positioning: verified
  applications: verified
  recommendations: verified
  technical_specifications: pending_verification
  documents: verified
  origin_support: pending_verification
  market_support: verified
  related_grades: verified
```

The YAML is a data-contract illustration, not a required implementation language.

### 6.3 Allowed Status Values

| Status | Meaning | Public behavior |
|---|---|---|
| `verified` | The module's included content has passed the relevant approval | Render the module and its eligible metadata/schema values |
| `pending_verification` | Evidence or review is incomplete | Do not render the module or claim group |
| `not_public` | The information exists but is not approved for public use | Do not render; do not expose through source HTML, JSON, API responses or structured data |

### 6.4 Mixed Modules

Do not attach status metadata to each content value. Instead:

- remove unverified rows or items from the public content collection;
- split materially different claim groups when independent control is required;
- render the parent module only if its status is `verified` and the resulting collection is non-empty.

Examples:

- A verified TDS and pending COA: the Documents module may list TDS only.
- Verified Recommended items but no supported negatives: render Recommended and omit Not Recommended.
- Five approved specification rows and three pending rows: the public `rows` collection contains only the five approved rows.

### 6.5 Field-Group Source and Responsibility Rules

These rules are defined once and are not copied into every product record.

| Field group | Purpose | Permitted primary source | Responsible role |
|---|---|---|---|
| Identity, page ID, URL, primary keyword | Preserve approved architecture | PRD V0.4 and `11_page_keyword_master.csv` | SEO/content lead |
| Product type, process, positioning | Describe the grade accurately | Approved current TDS and technical approval; PRD role as architecture baseline | Technical owner |
| Applications and recommendations | Support grade selection | Approved TDS, application-test evidence or technical approval | Technical owner |
| Technical specifications | Publish controlled values | Approved current TDS or approved public specification | Technical owner |
| Documents | State request availability and scope | Current document directory and compliance approval | Compliance/document owner |
| Origin, traceability, packaging and export support | Establish procurement trust | Approved corporate, origin and operational evidence | Compliance and operations owners |
| Market support | Route destination-market buyers | Approved Market architecture and current official compliance review | Market content and compliance owners |
| Related grades | Support selection without equivalence claims | Approved product matrix and technical review | Technical owner with SEO/content lead |
| SEO metadata and internal links | Own exact model intent and prevent cannibalization | Page master, this specification and approved visible content | SEO/content lead |
| Forms and conversion routing | Capture qualified inquiry | Approved sales, privacy and document workflows | Sales operations and development |
| Images and ALT | Represent the actual asset accurately | Owned/licensed asset register | Content/design owner |

### 6.6 Source Hierarchy for Claims

1. Approved current TDS/SDS/COA/COO or approved corporate evidence
2. Approved technical, compliance or operations decision
3. Official regulator or legal instrument for regulatory claims
4. PRD V0.4 for approved architecture and page role
5. mytio2.com as a fact-check candidate only

Legacy website copy, search snippets, competitor pages and AI summaries cannot independently produce `verified` product facts.

## 7. SEO Metadata Rules

### 7.1 Title

Pattern:

`{Primary Keyword}{verified differentiator if useful} | TiO2 Malaysia`

Preferred examples:

- `M-350 Titanium Dioxide for Coatings | TiO2 Malaysia`
- `M-108 Titanium Dioxide for Masterbatch | TiO2 Malaysia`
- `CR-901 Titanium Dioxide Specialty Grade | TiO2 Malaysia`

Fallback when application or process is not verified:

- `M-2377 Titanium Dioxide | TiO2 Malaysia`

Rules:

- Begin with the exact primary keyword.
- Use one useful verified differentiator at most.
- Keep the title descriptive and concise; do not enforce a misleading fixed character count.
- Avoid 14 boilerplate titles that differ only by model while carrying a long repeated sales slogan.
- Do not add Malaysia, supplier, TDS, sample, chloride and every application to the same title.
- Do not include unverified origin, process, compliance or performance claims.

### 7.2 Meta Description

Pattern:

`Evaluate {grade} for {verified application direction}. Review verified product information and request the relevant documents, sample or RFQ for your destination.`

Rules:

- Write a unique description for each grade.
- Use the exact grade naturally once.
- Aim for a concise search snippet, commonly around 140–165 characters, but prioritize accuracy over a hard limit.
- Include one decision value and one buyer action.
- Do not list all applications or keywords.
- Do not promise availability, delivery, compliance, documents, samples or pricing without approval.
- Ensure every meta-description claim also appears in visible page content.

### 7.3 H1

Pattern:

`{Grade} {verified type} for {primary verified application direction}`

Examples:

- `M-350 Rutile Titanium Dioxide for Coatings`
- `M-340 Rutile Titanium Dioxide for Masterbatch and Film`
- Fallback: `M-2377 Rutile Titanium Dioxide`

Rules:

- One H1 per page.
- Begin with the grade.
- Use a process or application only when verified.
- H1 and title may be similar but need not be identical.

### 7.4 Body Keywords

- Use the primary keyword in the opening section where natural.
- Use the grade code consistently; do not alternate ambiguous spacing or hyphenation.
- Use `TiO2` as a readable variant.
- Use application and process terms only to describe verified attributes and contextual links.
- Avoid blocks of near-duplicate FAQs created from keyword variants.

### 7.5 Image ALT

ALT describes the actual image, not the keyword target.

Examples:

- Product packaging photo: `M-350 titanium dioxide product bag with batch label`
- Powder macro photograph: `White rutile titanium dioxide pigment powder sample`
- Application illustration: `Architectural coating panel used to evaluate M-350 titanium dioxide`

Rules:

- Use the grade only when the image genuinely depicts or is specifically produced for that grade.
- Decorative shapes use empty ALT.
- Do not repeat `M-350 titanium dioxide supplier Malaysia coatings paint pigment`.
- Do not label stock or AI imagery as the actual product, factory, package or shipment.
- The Product schema image must represent the product page and be visible on the page.

### 7.6 Canonical

- Every indexable grade page has one absolute self-referencing canonical URL.
- Canonical path uses the approved lowercase route and trailing slash.
- Query parameters for document, sample, market or campaign tracking do not change the canonical.
- Market pages, application pages and mytio2.com pages must not be declared canonical for a new-site grade page.
- Do not canonicalize one grade to another, including M-996 to M-2196.
- Redirect accidental case, slash or legacy slug variants to the approved URL where implementation permits.
- Include only canonical URLs in the XML sitemap and internal links.

### 7.7 Breadcrumb

Visible and structured breadcrumb:

`Home > Products > {Grade}`

The final breadcrumb label is the grade, not the full keyword string.

## 8. Product Structured Data

### 8.1 Purpose and Eligibility

Use JSON-LD `Product` to describe the single grade on the page. These B2B RFQ pages do not publish a direct online purchase price, so they must not fabricate an `Offer` merely to seek a Google product rich result.

Google product-snippet eligibility requires `name` plus at least one of `offers`, `review` or `aggregateRating`. If none is real and visible, the page may still use accurate Schema.org Product markup for entity understanding but should not expect Product rich-result eligibility.

### 8.2 Allowed Product Properties

Include when visible and verified:

- `@context`
- `@type: Product`
- `@id`
- `name`
- `sku` using the grade code
- `description`
- `url`
- `image`
- `category`
- `material`, when accurate and useful
- `brand`, only after the public brand relationship is approved
- `manufacturer`, only after the manufacturing-entity wording is approved
- `countryOfOrigin`, only for a verified product-specific origin claim
- `additionalProperty` for visible approved specification rows

### 8.3 Prohibited or Conditional Properties

- Omit `offers` unless a real visible offer has verified price, currency, availability and applicable commercial terms.
- Omit `review` and `aggregateRating` unless genuine, authorized and visible reviews exist.
- Omit `gtin`, `mpn`, certification and regulatory identifiers unless the exact identifier and its product scope are approved.
- Do not use `isSimilarTo` or comparison properties to imply equivalence.
- Do not include hidden or unrendered specification values.
- Do not mark Product structured data on Products category cards as if the page focused on one product.

### 8.4 Product JSON-LD Pattern

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.example.com/products/m-350/#product",
  "name": "M-350 Titanium Dioxide",
  "sku": "M-350",
  "description": "Visible, verified M-350 summary.",
  "url": "https://www.example.com/products/m-350/",
  "image": ["https://www.example.com/images/products/m-350.webp"],
  "category": "Rutile titanium dioxide for coatings",
  "additionalProperty": []
}
```

Replace `www.example.com` with the approved production domain. Empty arrays and unverified properties should be omitted in production output.

### 8.5 Breadcrumb JSON-LD

Use a separate `BreadcrumbList` or include Product and BreadcrumbList in an `@graph`. Structured breadcrumb names and URLs must match the visible breadcrumb.

### 8.6 Validation

- Validate syntax with Schema.org Validator.
- Validate Google-supported properties with Rich Results Test.
- A valid Schema.org graph does not guarantee a Google rich result.
- Compare rendered JSON-LD with visible content during every release.

## 9. Internal-Link Rules

### 9.1 Route Status Rule

Internal links use route keys or page IDs. A destination renders only when its route status is approved and the page is live.

Do not hard-code the current provisional Applications, Documents or Conversion URLs as permanent dependencies.

Suggested route keys:

- `about`
- `products_hub`
- `process_chloride`
- `process_sulfate`
- `application_coatings`
- `application_plastics`
- `application_masterbatch`
- `application_printing_inks`
- `application_paper`
- `market_eu`
- `market_uk`
- `market_india`
- `market_brazil`
- `documents_hub`
- `document_reach`
- `document_technical`
- `document_origin`
- `request_documents`
- `request_sample`
- `request_quote`

### 9.2 Product-to-Section Links

| Destination | Product-page rule | Anchor rule |
|---|---|---|
| Products hub | Always through breadcrumb and back-to-products navigation | `Products` or `All titanium dioxide grades` |
| Process page | One link when process is verified | `{Chloride/Sulfate} process titanium dioxide` in factual context |
| Applications | One or two links matching verified applications | Descriptive application phrase; do not repeat exact same anchor multiple times |
| Markets | Up to four primary market links in Market Support | Market name or concise procurement-support phrase |
| Documents | Link to one explanatory document page and/or request workflow | Exact document family when verified |
| Related grades | Two to four grade links | Exact grade name plus verified neutral context |

### 9.3 Reverse Links to Products

- Application pages link to the verified recommended grade set, not all 14 products.
- Process pages list only grades with verified process classification.
- M-2377 is absent from both process aggregations until process is verified.
- Market pages recommend only grades supported by local application or procurement needs.
- Documents pages link to product pages when explaining grade-specific request selection, not as a keyword list.
- Related-grade links must be reciprocal only when reciprocal relevance is useful; reciprocity is not mandatory.

### 9.4 Linking Boundaries

- Do not place country supplier anchors inside technical specifications.
- Do not link every application mention.
- Do not use hidden links, keyword-stuffed footer links or all-14-grade lists inside every body module.
- Do not link to a comparison page that is still a `NEW_PAGE_CANDIDATE`.
- Avoid multiple contextual links from one page to the same destination unless the second is a conversion CTA with a different function.

## 10. Non-Blocking Conflict Handling

### 10.1 General Rule

The route, canonical URL, template and verified modules continue. Only the affected module or claim group is suppressed.

Public suppression includes:

- Visible body content
- Accordion content
- Tooltips
- Meta title and description claims
- Image ALT claims
- Product JSON-LD and additionalProperty rows
- Open Graph descriptions
- Internal-link comparison labels
- Preloaded API/JSON content that a visitor can retrieve

### 10.2 M-2377

Fixed and usable:

- Page ID
- URL
- Primary keyword
- Grade name
- Multi-Application administrative grouping

Until the latest approved TDS resolves the conflict:

- Do not render process.
- Do not render primary applications.
- Do not render Recommended or Not Recommended.
- Do not place the grade on chloride or sulfate process pages.
- Do not use application-specific Title, H1, meta description, ALT or Product category.
- Do not publish legacy claims that contradict one another.

Allowed fallback metadata:

- Title: `M-2377 Titanium Dioxide | TiO2 Malaysia`
- H1: `M-2377 Rutile Titanium Dioxide`

Other verified document-request, origin-support, market-support and conversion modules may proceed independently.

### 10.3 M-996 and M-2196

Both retain separate canonical pages.

Until distinguishing evidence is approved:

- Do not publish “M-996 vs M-2196” selection conclusions.
- Do not claim one has better dispersion, weatherability, gloss, surface chemistry, cost or suitability.
- Do not create mirrored “choose X when…” statements.
- Neutral related-grade links may use grade names without a differentiation claim.
- Shared facts may appear on both pages only when independently supported for both grades; wording should still be original and model-specific where possible.

### 10.4 New Conflicts

When a new conflict is found:

1. Change the affected module status to `pending_verification`.
2. Remove the affected public collection or claim group.
3. Leave unaffected verified modules and routes operational.
4. Send the conflict to the responsible field-group owner defined in section 6.5.
5. Restore the module only after one approved current position replaces the conflict.

## 11. Minimum Publication and Indexing Gate

Route development may finish before all facts are available. An indexable public grade page should have:

- Approved URL and primary keyword
- Unique accurate Title, meta description and H1
- Product hero with a useful verified summary
- At least one verified model-specific decision-support module beyond the hero
- A working document, sample or RFQ path
- Self-canonical, breadcrumb and crawlable internal link from Products

If this minimum is not met, keep the route in preview or use the project's approved non-indexed release state. Do not publish an indexable empty shell with headings and CTAs only.

`noindex` is a release-control decision, not a substitute for deleting the canonical route or changing keyword ownership.

## 12. Visual and Responsive Requirements

Follow `TiO2_Malaysia_Visual_Standard_V1.0.md`:

- Premium international industrial B2B tone
- White-dominant layout with Primary Navy and restrained Malaysia Teal
- Inter typography
- Wide 1200–1320 px content container on desktop
- Clear section spacing
- White cards with light borders, modest radius and subtle shadow
- Linear navy icons with teal accent
- Authentic industrial, material, manufacturing and global-supply imagery
- No ecommerce-style price cards, oversized pill buttons, heavy gradients, glass effects or tourism treatment

Product-page specifics:

- Hero must work with missing process/category badges.
- Long grade names and CTA labels must wrap safely.
- Specification tables require a mobile strategy that preserves Property–Value meaning.
- Related-grade cards use equal information hierarchy without implying a ranking.
- Sticky CTAs must not cover content, consent text or mobile browser controls.
- Conditional module removal must not break section navigation or alternating backgrounds.

## 13. Acceptance Criteria

A product-page template release is acceptable when:

- All 14 approved routes can use the same component order.
- No field requires per-value audit metadata in the product record.
- Whole modules or claim groups support the three required status values.
- Pending and not-public content cannot leak into HTML or structured data.
- M-2377 can render safely without process and application modules.
- M-996 and M-2196 can coexist without fabricated differentiation.
- Provisional downstream URLs are resolved through route keys.
- SEO metadata and schema draw only from visible verified content.
- Product pages maintain exact model intent and link broader intent to its owner page.
- Desktop, tablet and mobile layouts pass the QA checklist in the accompanying SOP.

## 14. Official Technical References

- Google Search Central: Product structured data — `https://developers.google.com/search/docs/appearance/structured-data/product`
- Google Search Central: Product snippet structured data — `https://developers.google.com/search/docs/appearance/structured-data/product-snippet`
- Google Search Central: Breadcrumb structured data — `https://developers.google.com/search/docs/appearance/structured-data/breadcrumb`
- Google Search Central: Canonical URL guidance — `https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls`
- Google Search Central: Title links — `https://developers.google.com/search/docs/appearance/title-link`
- Google Search Central: Snippets and meta descriptions — `https://developers.google.com/search/docs/appearance/snippet`
- Google Search Central: Image SEO and ALT guidance — `https://developers.google.com/search/docs/appearance/google-images`
- Schema.org Product — `https://schema.org/Product`
