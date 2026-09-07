# TiO2 Malaysia Product Page Development SOP and QA V1.0

## 0. Purpose

This SOP is the direct handoff from product-page planning to later product-page development. It covers all 14 approved grade pages without authorizing changes to the PRD, URL map or keyword ownership.

## 1. Roles

| Role | Main decision responsibility |
|---|---|
| Product-page owner | Coordinates the page record and resolves cross-team gaps |
| SEO/content lead | Title, meta description, H1, body intent, ALT and internal-link boundaries |
| Technical owner | Process, product positioning, applications, recommendations and specifications |
| Compliance/document owner | Document availability, origin/traceability wording and regulatory statements |
| Operations/sales owner | Packaging, supply, sample, RFQ and export-process statements |
| Design/development | Components, route keys, status gating, structured data, forms and responsive behavior |
| QA reviewer | Independent release review across all six checklists |

These are field-group responsibilities. They are not stored beside every product content value.

## 2. Required Inputs

Before starting one grade page, assemble:

- Approved page row from `11_page_keyword_master.csv`
- PRD V0.4 product-role row
- Current approved TDS, if available
- Applicable SDS, COA, COO and document-directory record, if available
- Approved product-specific origin, packaging or supply wording, if available
- Approved images and asset usage rights
- Approved route registry for Products, Process, Applications, Markets, Documents, Sample and RFQ
- Privacy and form-handling requirements

Absence of a fact source does not block route or component work. It sets the affected module to `pending_verification` and removes that module from public output.

## 3. Development SOP

### Step 1 — Lock the Grade Identity

1. Copy page ID, grade, URL and primary keyword from the page-keyword master.
2. Confirm the grade is one of the 14 PRD-approved products.
3. Confirm no other record uses the URL or primary keyword.
4. Do not edit the PRD or keyword-research source files.

Output: `identity` record.

### Step 2 — Create the Lean Product Record

1. Start from the V1 product record in the main specification.
2. Fill only content values required by the page.
3. Set `template_version: product-page-v1`.
4. Create the `publishing_status` map at module level.
5. Do not add source, reviewer, date or visibility metadata beside each field.

Output: one grade data record.

### Step 3 — Establish the Evidence Boundary

Classify each module or claim group:

- `verified`
- `pending_verification`
- `not_public`

For mixed collections, remove unverified items from the content collection. Do not attach a status field to every row merely to preserve unavailable content in the public data object.

Output: renderable collections containing approved values only.

### Step 4 — Draft the SEO Frame

1. Title begins with the exact primary keyword.
2. H1 begins with the grade.
3. Meta description contains one verified decision value and one buyer action.
4. Canonical path equals the approved grade URL.
5. Breadcrumb is `Home > Products > Grade`.
6. Remove application, process, origin or compliance wording that is not visible and verified.

Output: `seo` record.

### Step 5 — Build Modules in the Fixed Order

Implement the shared component order from the main specification. Do not create category-specific page order variants.

Allowed controlled variation:

- Different specification parameter groups
- Different application-card count
- Different related-grade collection
- Different RFQ supplemental fields when business-approved
- Conditional process/category badges

Output: shared template plus conditional data.

### Step 6 — Resolve Internal Links by Route Key

1. Resolve every link through the approved route registry.
2. Suppress a destination link if the route is not approved and live.
3. Never send users to a provisional URL that later becomes a different canonical.
4. Confirm visible anchor text matches the destination intent.
5. Confirm reverse links are relevant and evidence-supported.

Output: no hard-coded provisional dependencies or dead links.

### Step 7 — Implement Structured Data from Rendered Content

1. Build Product JSON-LD from the same approved values used in the visible page.
2. Omit empty or suppressed properties.
3. Do not create an Offer without a real visible offer.
4. Do not create reviews or ratings.
5. Build BreadcrumbList from the visible breadcrumb.
6. Render structured data in initial HTML when practical.

Output: synchronized Product and Breadcrumb JSON-LD.

### Step 8 — Implement Conversion Prefill

Document, sample and RFQ actions must carry:

- Grade code
- Source page or source-page ID
- Selected document type, when applicable

The receiving workflow must preserve those values and present them visibly to the user for confirmation.

The RFQ receiver is a standalone page. Do not mount the RFQ form, an RFQ section heading or an RFQ in-page-navigation item inside a product detail page. The product detail page ends after the sample module and global footer. Document and sample actions also use their dedicated receiving workflows rather than scrolling to a shared form on the product page.

Output: qualified, attributable inquiry path.

### Step 9 — Run the Six QA Reviews

Run Content, Technical, SEO, Compliance, Conversion and Responsive QA. A reviewer should record pass/fail and blocking notes outside the public product record.

Output: release decision.

### Step 10 — Publish and Validate

1. Verify the canonical production URL returns the intended successful response.
2. Verify redirect variants resolve to the canonical.
3. Check rendered source for suppressed data leakage.
4. Test structured data.
5. Test form delivery and grade prefill.
6. Crawl all 14 product routes and internal links.
7. Submit or refresh the canonical sitemap after release.
8. Inspect the page with the relevant search-engine URL inspection tool after deployment.

Output: validated public release.

## 4. Internal-Link Matrix Rules

### 4.1 Product-to-Application Mapping

The table below is a PRD direction, not automatic permission to publish every application. The link renders only after the grade application and destination route are verified.

| Grade | Primary Application destinations | Secondary destination when verified |
|---|---|---|
| M-350 | Coatings | Printing Inks |
| M-510 | Coatings | Other application page only after technical verification |
| M-896 | Coatings | None by default |
| M-996 | Coatings | None by default |
| M-2196 | Coatings | None by default |
| M-895 | Coatings | None by default |
| M-200 | Plastics | None by default |
| M-108 | Masterbatch | Plastics |
| M-210 | Masterbatch | Plastics |
| M-340 | Masterbatch | Plastics |
| M-886 | Plastics | Masterbatch when verified |
| M-52 | Printing Inks | Coatings when verified |
| M-2377 | None until technical verification | None |
| CR-901 | No current Application page owns specialty intent | Products hub or future approved specialty destination only |

### 4.2 Product-to-Process Mapping

| Process destination | Grades |
|---|---|
| Chloride Process | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 |
| Sulfate Process | M-996, M-2196, M-108, M-52 |
| No chloride/sulfate link | M-2377 until verified; CR-901 uses its approved specialty process description rather than being inserted into either aggregation |

The process pages must read from the same verified process mapping used by the grade pages.

### 4.3 Product-to-Market Mapping

Every indexable product page may link from its Market Support module to:

- European Union
- United Kingdom
- India
- Brazil

Conditions:

- The Market page is approved and live.
- The anchor states destination support, not local product availability.
- No grade-specific compliance or tariff claim is added without approval.

EU country pages are not linked automatically from every grade page.

### 4.4 Product-to-Documents Mapping

| Product need | Destination |
|---|---|
| Understand TDS/SDS/COA | Technical-documents page after route approval |
| Understand COO/traceability | Origin-document page after route approval |
| Understand REACH-related support | REACH page after route and claim approval |
| Request one or more documents | Request Documents workflow |

The grade page owns the selected grade. The Documents page owns the generic document explanation.

### 4.5 Related-Grade Mapping Method

For each grade:

1. Choose two to four candidates from the same verified application or selection path.
2. Remove any candidate whose comparison reason is unverified.
3. If neutral navigation remains useful, use only the PRD-approved category direction.
4. Never use competitor-equivalence language.
5. For M-996 and M-2196, omit differentiation until verified.

### 4.6 Related-Grade Base Candidate Matrix

This matrix supplies neutral candidate destinations for development. It does not authorize a performance comparison. Render two to four candidates only after the final collection passes technical and content review.

| Source grade | Base related-grade candidates | Public context boundary |
|---|---|---|
| M-350 | M-510, M-896, M-895 | Other coatings directions; no superiority or equivalence |
| M-510 | M-350, M-895, M-896 | Other architectural, industrial or general coatings directions |
| M-896 | M-350, M-895, M-510 | Other coatings directions; weatherability comparison requires evidence |
| M-996 | M-2196, M-896, M-350 | M-2196 may be linked by grade name only until differentiation is verified |
| M-2196 | M-996, M-896, M-895 | M-996 may be linked by grade name only until differentiation is verified |
| M-895 | M-350, M-510, M-896 | Other architectural, general or industrial coatings directions |
| M-200 | M-340, M-886, M-210 | Other plastics/masterbatch directions; outdoor-durability comparison requires evidence |
| M-108 | M-210, M-340, M-886 | Other masterbatch/plastics directions; process and thermal claims require evidence |
| M-210 | M-108, M-340, M-886 | Other masterbatch/plastics directions; no replacement wording |
| M-340 | M-108, M-210, M-886, M-200 | Other masterbatch, film and plastics directions |
| M-886 | M-340, M-210, M-200 | Other plastics/masterbatch directions; whiteness and temperature comparisons require evidence |
| M-52 | M-350, M-510 | Other grades with a PRD-approved ink or multi-application direction; M-2377 excluded until verified |
| M-2377 | None until technical verification | Hide the Related Grades module until process and application direction are resolved |
| CR-901 | None by default | Use Products hub navigation; do not relate commodity pigment grades to the specialty grade without technical approval |

Implementation rules:

- Store these as candidate IDs, not hard-coded card copy.
- Remove a candidate if its target route is unavailable.
- A source page and target page do not need identical card text.
- M-996/M-2196 and all other pairs require a verified reason before displaying a selection difference.
- When fewer than two useful candidates remain, hide the Related Grades module and retain Products-hub navigation.

## 5. Content QA Checklist

- [ ] Page uses the approved grade code, URL and primary keyword.
- [ ] Copy is newly written for TiO2 Malaysia and not copied from mytio2.com.
- [ ] Opening content answers what the grade is without generic TiO2 filler.
- [ ] Module order matches the unified template.
- [ ] Conditional modules disappear cleanly when not rendered.
- [ ] No TBD, TODO, placeholder sentence or empty heading appears publicly.
- [ ] Application statements match verified grade evidence.
- [ ] Recommended statements are qualified and model-specific.
- [ ] Not Recommended statements have explicit technical support.
- [ ] Related-grade text does not imply equivalence or unsupported superiority.
- [ ] Process education is summarized and linked rather than duplicated.
- [ ] Country procurement content is routed to Markets.
- [ ] Generic document explanation is routed to Documents.
- [ ] Body content is materially distinct from the other 13 pages.
- [ ] Terminology, units, grade hyphenation and TiO2 typography are consistent.
- [ ] Headings form a logical H1–H2–H3 hierarchy.
- [ ] No application, origin, packaging, supply or regulatory promise is presented as certainty without approval.

## 6. Technical QA Checklist

- [ ] Canonical route returns the intended successful response.
- [ ] HTTP/HTTPS, case, slash and legacy variants resolve consistently.
- [ ] One self-referencing absolute canonical is present.
- [ ] Canonical URL matches internal links and sitemap entry.
- [ ] Page is not accidentally blocked by robots.txt or authentication.
- [ ] Indexing state matches the minimum-publication decision.
- [ ] Module status gating works server-side or before public data exposure.
- [ ] `pending_verification` and `not_public` values are absent from rendered HTML.
- [ ] Suppressed values are absent from JSON-LD, page-source JSON and public APIs.
- [ ] No empty array or empty module creates visual output.
- [ ] Route keys resolve only approved live destinations.
- [ ] All contextual links return valid destinations.
- [ ] Document, sample and RFQ actions carry the correct grade and source.
- [ ] Forms display a clear success and failure state.
- [ ] Images use responsive sources and a fallback `src`.
- [ ] Primary content remains usable without non-essential animation.
- [ ] Product and Breadcrumb JSON-LD are syntactically valid.
- [ ] Structured-data values match visible page content.
- [ ] No fake Offer, rating, review, stock or price property is present.
- [ ] Page has no critical console, hydration or layout errors.

## 7. SEO QA Checklist

- [ ] Primary keyword is unique among indexable pages.
- [ ] Title begins with the exact primary keyword.
- [ ] Title is descriptive, concise and free of keyword stuffing.
- [ ] Title differentiator is visible and verified.
- [ ] Meta description is unique and accurate.
- [ ] Exactly one visible H1 begins with the grade.
- [ ] H1 does not target a country supplier term or generic process term.
- [ ] Primary keyword appears naturally in the opening content.
- [ ] Generic application terms do not dominate the page.
- [ ] Image ALT describes the actual image.
- [ ] Decorative images use empty ALT.
- [ ] Breadcrumb is `Home > Products > Grade`.
- [ ] Visible and structured breadcrumbs match.
- [ ] Product JSON-LD describes one grade only.
- [ ] Specification schema contains only visible verified rows.
- [ ] Application links use descriptive, varied and relevant anchors.
- [ ] Process link appears only for a verified process.
- [ ] Market links do not turn the grade page into a country-keyword page.
- [ ] No canonical points to mytio2.com, a Market page, an Application page or another grade.
- [ ] Page is linked crawlably from Products and relevant approved pages.
- [ ] No near-duplicate FAQ or boilerplate block was added solely for word count.

## 8. Compliance QA Checklist

- [ ] Every public process, application and specification claim is approved.
- [ ] Technical values preserve exact units and typical/minimum/maximum meaning.
- [ ] No values were merged across TDS versions.
- [ ] Document names and availability match the current document directory.
- [ ] Expired, superseded, confidential or wrong-market documents are not exposed.
- [ ] Product-specific Malaysia-origin wording is approved.
- [ ] Manufacturing, packing, warehouse and port statements use approved wording.
- [ ] COO and traceability statements do not promise a document for every transaction without evidence.
- [ ] REACH or other regulatory identifiers have confirmed current scope.
- [ ] Trade-measure wording does not suggest avoidance or circumvention.
- [ ] No stock, capacity, MOQ, lead time, freight, Incoterm or packaging promise lacks approval.
- [ ] No equivalent, identical or guaranteed-replacement claim appears.
- [ ] Customer names, logos, cases and testimonials have authorization.
- [ ] Image rights and any depicted people/location claims are approved.
- [ ] Privacy consent and document-request handling are approved.
- [ ] `not_public` content cannot be recovered from page source or a public endpoint.

## 9. Conversion QA Checklist

- [ ] Hero presents one primary and one secondary action at most.
- [ ] CTA labels state the action and selected grade.
- [ ] Document, sample and RFQ workflows prefill the correct grade.
- [ ] Source-page attribution is preserved.
- [ ] Quote CTAs open the standalone RFQ page; no RFQ form or RFQ anchor is embedded in the product detail page.
- [ ] The product detail page ends after the sample module and global footer.
- [ ] Destination country is collected where relevant.
- [ ] Application or target requirement is collected.
- [ ] Quantity and packaging are collected for RFQ.
- [ ] Required documents and sample need can be selected.
- [ ] Business email and company context are requested without unnecessary friction.
- [ ] Consent text and privacy link are visible before submission.
- [ ] Form errors identify the field and correction clearly.
- [ ] Success state explains what happens next without an unapproved response-time promise.
- [ ] No CTA promises a free sample, instant quote, stock or delivery date.
- [ ] Mobile keyboard, autofill and field types are appropriate.
- [ ] Keyboard-only and screen-reader users can complete the workflow.
- [ ] Analytics distinguish quote, sample and document actions by grade and source page.

## 10. Responsive and Visual QA Checklist

- [ ] Page follows the approved Navy, Teal, white and soft-background palette.
- [ ] Teal remains an accent rather than a dominant page background.
- [ ] Inter or the approved production equivalent loads correctly.
- [ ] Desktop content stays within the approved wide container.
- [ ] H1 wraps without clipping at desktop, tablet and mobile widths.
- [ ] Hero does not require a process or category badge to balance correctly.
- [ ] Hero visual does not push the decision content below an excessive first screen.
- [ ] Buttons retain readable labels and adequate touch targets.
- [ ] No oversized pill buttons, heavy gradients, glass effects or ecommerce price-card treatment appears.
- [ ] Application and related-grade cards reflow without changing reading order.
- [ ] Specification tables preserve Property–Value relationships on mobile.
- [ ] Long values and units do not overflow.
- [ ] Document controls remain labeled and are not icon-only.
- [ ] Conditional module removal does not break alternating backgrounds or section navigation.
- [ ] Sticky CTA does not cover fields, consent, content or browser controls.
- [ ] Focus indicators are visible.
- [ ] Color contrast is sufficient for text, links, buttons and status indicators.
- [ ] Images keep a correct aspect ratio and do not become misleading crops.
- [ ] Layout remains usable at 200% zoom.
- [ ] Reduced-motion preference is respected.
- [ ] Page remains understandable on a slow connection while images load.

## 11. Grade-Specific Conflict QA

### M-2377

- [ ] URL and primary keyword remain unchanged.
- [ ] No process badge or process link renders before verification.
- [ ] No application, Recommended or Not Recommended claim leaks publicly.
- [ ] No application-specific title, H1, meta description, ALT or Product category appears.
- [ ] Grade is absent from chloride and sulfate aggregation lists.

### M-996 and M-2196

- [ ] Both canonical pages remain separate.
- [ ] No unsupported selection difference appears.
- [ ] Related-grade text uses neutral wording if the other grade is linked.
- [ ] No mirrored superiority, cost or performance claims appear.
- [ ] Shared specification values are independently supported for each grade.

## 12. Maintenance and Template Upgrade

### 12.1 Routine Content Maintenance

When new approved evidence arrives:

1. Update the relevant content collection.
2. Change only the affected module status.
3. Regenerate visible content and structured data from the same record.
4. Re-run the relevant QA sections plus SEO and technical checks.
5. Preserve the canonical grade URL.

When evidence is withdrawn or superseded:

1. Remove affected public values immediately.
2. Set the module to `pending_verification` or `not_public`.
3. Confirm caches, JSON-LD and public APIs no longer expose it.
4. Do not replace the content with guessed copy.

### 12.2 Template Versioning

- Use semantic template identifiers such as `product-page-v1`, `product-page-v1.1` and `product-page-v2`.
- A copy clarification or optional field addition may use a minor version.
- Module reordering, status-model changes, URL behavior changes or breaking data-contract changes require a major version.
- Do not silently overwrite the approved V1 specification; create a new version with a change record.
- Keep grade records compatible with the current production template during migration.

### 12.3 Upgrade Process

1. Record the proposed change and reason.
2. Confirm it does not change PRD strategy or keyword ownership.
3. Test the change first on M-350 and one structurally different grade such as CR-901.
4. Test a conflict case such as M-2377.
5. Review SEO, compliance, conversion and responsive impact.
6. Approve the new template version.
7. Migrate all 14 records with a documented rollback path.
8. Crawl and visually inspect every product page after release.

### 12.4 Periodic Review

Review the template when any of the following occurs:

- PRD version changes
- Page-keyword master changes
- Application, Documents or Conversion URLs are finalized
- Product portfolio changes
- A new TDS or product classification changes a module
- Structured-data guidance changes
- Search Console reveals recurring title, indexing or structured-data issues
- Conversion data shows repeated buyer friction
- Responsive QA identifies a shared component failure

## 13. Definition of Done for the 14-Page Development Task

The later development task is done only when:

- All 14 approved canonical routes exist.
- Every route uses the V1 shared template order.
- Each product record uses the lean data structure.
- Module-level status gating is verified.
- The six QA checklists pass for representative templates and all grade-specific differences.
- M-2377, M-996 and M-2196 pass their conflict checks.
- All route-key links resolve to approved live pages or remain unrendered.
- Forms preserve grade and source attribution.
- Product and Breadcrumb structured data match visible content.
- No changes were made to PRD V0.4 or the original keyword-research files as part of product-page development.
