# MARKET-UK-001 Gate 7 CMS / API / Component Mapping V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `MARKET-UK-001` / `/markets/united-kingdom/` |
| Site scope | `tio2-my` |
| Date | 2026-09-05 |
| Status | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE` |
| Gate 7 outcome | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION` |
| Page lifecycle | `APPROVED_FOR_HANDOFF`; not `HANDED_OFF` |
| Implementation | Not started; semantic mapping only |
| Gate 8–10 | `LOCKED / NOT_AUTHORIZED` |

Names below are implementation-neutral semantic keys. The external development project chooses concrete CMS/API/component structures while preserving exact values, order, conditions and acceptance behavior.

## 1. Page record

| Semantic field | Type | Required value / rule |
|---|---|---|
| `page_id` | stable ID | `MARKET-UK-001` |
| `site_scope` | immutable scope | `tio2-my` |
| `locale` | locale | `en` |
| `market_code` | enum | `UK` |
| `page_type` | enum | `market_procurement_landing` |
| `slug` | path | `/markets/united-kingdom/` |
| `primary_keyword` | governance text | `titanium dioxide supplier uk`; never printed as a label |
| `mapping_status` | governance enum | `APPROVED_PRD_V0.3`; never printed |
| `verification_status` | governance enum | `QUALITATIVE_KEYWORD_EVIDENCE`; never printed |
| `content_revision` | version | Gate 2 V0.4 / Gate 5 V0.1 approved baseline |
| `indexing_environment` | state | staging noindex; production index only after release authorization |

## 2. SEO fields

| Semantic field | Exact value / rule |
|---|---|
| `seo_title` | `Malaysia Titanium Dioxide Supplier for UK Buyers | TiO2 Malaysia` |
| `seo_meta` | `Explore Malaysia-origin titanium dioxide for UK industrial applications, representative grades, GB or NI review paths, documents and RFQ steps.` |
| `canonical_target` | `https://tio2malaysia.com/markets/united-kingdom/` |
| `robots_staging` | `noindex, nofollow` |
| `robots_release` | `index, follow` only after Gate 9 and release authorization |
| `hreflang` | none / `NOT_APPLICABLE` |
| `sitemap_include` | true only after release authorization; one self-Canonical URL |
| `og_title` | `Malaysia Titanium Dioxide Supplier for UK Buyers` |
| `og_description` | same meaning as visible Hero/Meta; no additional capability or Trade claim |

## 3. Shared Global Chrome

| Semantic field | Required behavior |
|---|---|
| `global_chrome_spec` | `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| `current_navigation_key` | `Markets` |
| `home_visible_text` | true |
| `rfq_visibility` | `ALWAYS_VISIBLE` |
| `rfq_target_page_id` | `CONV-RFQ` |
| `rfq_planned_url` | exactly `/request-a-quote/`; shared Header, Mobile Header, Mobile Menu and Footer never receive page-context query parameters |
| `rfq_route_ready` | release-health value; false blocks release and never changes visibility |
| `contact_fallback` | prohibited |
| `production_logo_manifest` | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| `header_logo_key` | `brand_logo_primary_horizontal` |
| `footer_logo_key` | `brand_logo_reverse_monochrome` |
| `gate5_png_logo` | static evidence only; never production input |

The Gate 5 HTML remains frozen visual/planning evidence. Its historical query-bearing shared RFQ hrefs are superseded for runtime purposes by the exact shared bare-path contract above; the HTML, pixels and SHA-256 remain unchanged.

## 4. Navigation and breadcrumb

| Field | Exact value / rule |
|---|---|
| `navigation.order` | Home, Markets, Products, Applications, Documents, Resources, About, Request a Quote |
| `navigation.current` | Markets; `aria-current=page` plus visible treatment |
| `breadcrumb.items` | Home `/`; Markets `/markets/`; United Kingdom current item |
| `breadcrumb.semantic` | ordered list inside labelled navigation |
| `breadcrumb.link_count` | 2 — Home and Markets only |
| `breadcrumb.current_item` | United Kingdom; non-link; `aria-current="page"` or equivalent standards-valid current-page semantic |
| `breadcrumb.self_link` | false |

## 5. Hero and Direct Answer

| Field | Exact value |
|---|---|
| `hero.eyebrow` | `UNITED KINGDOM PROCUREMENT` |
| `hero.h1` | `Malaysia-Origin Titanium Dioxide for United Kingdom Buyers` |
| `hero.body` | `Evaluate a Malaysia-origin titanium dioxide supply option for UK industrial applications. Begin with application and representative grade paths, identify whether the destination is Great Britain or Northern Ireland, then prepare the product, document and commercial details for assessment.` |
| `hero.primary.label` | `Request a Quote` |
| `hero.primary.target` | `CONV-RFQ` / `/request-a-quote/?market=United%20Kingdom&source_page=MARKET-UK-001` |
| `hero.secondary.label` | `Explore Applications` |
| `hero.secondary.href` | `#application-paths` |
| `hero.support.label` | `Request Documents` |
| `hero.support.target` | `CONV-DOC` / `/request-documents/` |
| `direct_answer.h2` | `Start Your UK Titanium Dioxide Supply Review` |
| `direct_answer.body` | `Start with the intended application, specification or known grade. Explore the representative product paths, then identify whether the goods will be placed on the market in Great Britain or Northern Ireland. That destination determines which regulatory and import checks your team should complete before requesting a quotation.` |
| `direct_answer.support` | `TiO2 Malaysia is operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD. and presents Malaysia-origin titanium dioxide for evaluation by UK industrial buyers.` |
| `direct_answer.action` | `Explore Applications` → `#application-paths` |

## 6. Application Paths

| Field | Exact value |
|---|---|
| `applications.anchor_id` | `application-paths` |
| `applications.h2` | `Titanium Dioxide for UK Industrial Applications` |
| `applications.intro` | `Select the application that best matches your intended use, then use the application guidance to prepare the formulation, processing and product questions for your enquiry.` |

| Order | Page ID | Title | Body | Action | Planned href |
|---:|---|---|---|---|---|
| 1 | `APP-COAT` | Coatings | `Explore titanium dioxide considerations for coating and paint formulations.` | `Explore Coatings` | `/applications/titanium-dioxide-for-coatings/` |
| 2 | `APP-PLAS` | Plastics | `Identify the processing and end-use questions that shape titanium dioxide evaluation for plastics.` | `Explore Plastics` | `/applications/titanium-dioxide-for-plastics/` |
| 3 | `APP-MB` | Masterbatch | `Prepare the pigment-selection and processing requirements for a masterbatch enquiry.` | `Explore Masterbatch` | `/applications/titanium-dioxide-for-masterbatch/` |
| 4 | `APP-INK` | Printing Inks | `Explore titanium dioxide considerations for printing-ink formulations and intended use.` | `Explore Printing Inks` | `/applications/titanium-dioxide-for-printing-inks/` |
| 5 | `APP-PAPER` | Paper | `Identify the product and performance questions relevant to paper applications.` | `Explore Paper Applications` | `/applications/titanium-dioxide-for-paper/` |

| Closing field | Value |
|---|---|
| `applications.all.label` | `Explore All Applications` |
| `applications.all.target` | `APP-000` / `/applications/` |
| `applications.next.label` | `Explore Representative Grades` |
| `applications.next.href` | `#representative-grades` |

These entries are general Application discovery paths. They create no UK-specific Grade, process, performance, registration or availability relation.

## 7. Representative Grades

| Field | Exact value |
|---|---|
| `grades.anchor_id` | `representative-grades` |
| `grades.h2` | `Representative Grades to Explore` |
| `grades.intro` | `Use these six representative grades to begin your evaluation by application, then compare the grade information with your formulation, specification and document requirements.` |
| `grades.coatings.title` | `Coatings paths` |
| `grades.coatings.intro` | `Explore M-350, M-510 and M-896 as representative Coatings paths, then compare the grade information with your formulation, specification and document requirements.` |
| `grades.plastics.title` | `Plastics and masterbatch paths` |
| `grades.plastics.intro` | `Explore M-200, M-108 and M-210 as representative Plastics and Masterbatch paths, then compare the grade information with your processing, specification and document requirements.` |

| Order | Relation IDs | Page ID | Visible labels | Action | Planned href |
|---:|---|---|---|---|---|
| 1 | `REL-M350-COAT` | `GRADE-M350` | M-350 / Coatings | `Explore M-350` | `/products/m-350/` |
| 2 | `REL-M510-COAT` | `GRADE-M510` | M-510 / Coatings | `Explore M-510` | `/products/m-510/` |
| 3 | `REL-M896-COAT` | `GRADE-M896` | M-896 / Coatings | `Explore M-896` | `/products/m-896/` |
| 4 | `REL-M200-PLAS`, `REL-M200-MB` | `GRADE-M200` | M-200 / Plastics · Masterbatch | `Explore M-200` | `/products/m-200/` |
| 5 | `REL-M108-PLAS`, `REL-M108-MB` | `GRADE-M108` | M-108 / Plastics · Masterbatch | `Explore M-108` | `/products/m-108/` |
| 6 | `REL-M210-PLAS`, `REL-M210-MB` | `GRADE-M210` | M-210 / Plastics · Masterbatch | `Explore M-210` | `/products/m-210/` |

| Closing field | Exact value |
|---|---|
| `grades.closing` | `Need a different grade or application path? Continue to the complete product range or describe the required specification in your enquiry.` |
| `grades.products.label` | `View All Titanium Dioxide Grades` |
| `grades.products.target` | `PRODUCT-000` / `/products/` |
| `grades.applications.label` | `Explore All Applications` |
| `grades.applications.target` | `APP-000` / `/applications/` |

No Process field, comparison, rank, availability, registration or UK suitability may serialize.

## 8. Great Britain / Northern Ireland

| Field | Exact value |
|---|---|
| `territory.h2` | `Where Will the Goods Be Placed on the Market?` |
| `territory.intro` | `Select the destination so your team can follow the relevant regulatory and import assessment path.` |
| `territory.gb.title` | `Great Britain` |
| `territory.gb.label` | `England, Scotland and Wales` |
| `territory.gb.body` | `UK REACH and GB CLP apply in Great Britain. A GB importer can have registration responsibilities, and a qualifying GB-based Only Representative can take on applicable importer obligations when appointed by a non-GB manufacturer, formulator or article producer. Confirm the legal entity, substance, volume and role for the transaction.` |
| `territory.gb.reach_action` | `Check UK REACH roles — HSE` |
| `territory.gb.clp_action` | `Check GB and Northern Ireland chemical classification — HSE` |
| `territory.ni.title` | `Northern Ireland` |
| `territory.ni.label` | `Northern Ireland` |
| `territory.ni.body` | `EU REACH and EU CLP continue to apply in Northern Ireland. Confirm the importing entity, applicable EU requirements and the product information needed for the intended use and transaction.` |
| `territory.ni.reach_action` | `Check Northern Ireland REACH — HSE` |
| `territory.ni.clp_action` | `Check GB and Northern Ireland chemical classification — HSE` |

Official URLs are defined in the Handoff Package. Recheck before release; do not convert this guidance into legal advice or company registration claims.

## 9. Procurement Checklist

| Field | Exact value |
|---|---|
| `checklist.h2` | `Build a Complete UK Supply Request` |
| `checklist.intro` | `A useful supplier evaluation connects the product requirement, destination and commercial request. Prepare the following information before your team asks for a quotation.` |
| `checklist.items[1]` | `Define the intended application` / `State the formulation or end-use context, such as coatings, plastics or masterbatch, and identify the performance questions your technical team needs to assess.` |
| `checklist.items[2]` | `Identify the grade or specification` / `Name the grade when known. When starting from a specification or reference product, share the evaluation criteria so the technical team can identify the next step.` |
| `checklist.items[3]` | `Choose Great Britain or Northern Ireland` / `Confirm where the goods will be placed on the market so the relevant importer, regulatory and tariff checks can be organised.` |
| `checklist.items[4]` | `List the required information` / `Identify the technical, safety, quality, Certificate of Analysis, origin and supplier-qualification information your team wants to assess.` |
| `checklist.items[5]` | `Add the commercial requirement` / `Provide the destination, estimated quantity, required timing and packaging needs so the commercial request can be assessed in context.` |
| `checklist.items[6]` | `Confirm the current import position` / `Use the UK Trade Tariff and current official trade-remedy sources to check classification and measures for the specific product and transaction.` |
| `checklist.actions` | `Explore All Applications` → `APP-000`; `Explore Titanium Dioxide Grades` → `PRODUCT-000` |

## 10. Documents and Malaysia Origin

| Field | Exact value |
|---|---|
| `documents.h2` | `Request Documents for Product and Supplier Qualification` |
| `documents.intro` | `Document requirements depend on the grade, intended use, importing entity and qualification purpose. Tell us what your team needs so the applicable scope can be confirmed.` |
| `documents.technical` | `Technical Data and Product Documentation` / `Request the product data and specification information needed to evaluate the selected grade.` |
| `documents.safety` | `Safety Documentation` / `Identify the safety, handling and storage information required for workplace and product assessment.` |
| `documents.quality` | `Quality and COA Documentation` / `State the quality and Certificate of Analysis information your purchasing or QA team needs to assess.` |
| `documents.origin` | `Origin and Supplier Qualification Documentation` / `A Certificate of Origin is available upon request. Include any additional origin or company information required by your supplier-qualification process.` |
| `documents.primary` | `Request Documents` → `CONV-DOC` |
| `documents.secondary` | `Explore Documents and Compliance` → `DOC-000` |
| `documents.support` | `We will assess the requested documents against the selected grade, intended use, importing entity and shipment context.` |
| `origin.h2` | `How Malaysia Origin Fits the Assessment` |
| `origin.body` | `Malaysia-origin titanium dioxide gives your team a clear origin fact to carry into supplier qualification and import assessment. Use the About page to understand the company and the role of Malaysia origin in the wider supply context.` |
| `origin.support` | `Treat origin as one input to the import assessment, then complete classification, tariff and current trade checks for the specific transaction using official UK sources.` |
| `origin.action` | `About TiO2 Malaysia` → `ABOUT-001` |

The exact COO availability sentence appears once in Buyer Clean. Schema must not expand it into every-shipment provision, customs acceptance or a Trade outcome.

## 11. Trade fields

| Field | Exact value / rule |
|---|---|
| `trade.h2` | `Check Current UK Import Requirements` |
| `trade.evergreen_body` | `UK customs treatment depends on the product's classification, substantiated origin, destination and the measures in force for the transaction. Use the appropriate UK tariff service and current official notices before relying on a commodity code, duty rate, preference, exclusion, exemption or trade-remedy conclusion.` |
| `trade.gb_ni_helper` | `The tariff lookup path differs for goods entering Great Britain and Northern Ireland. Select the destination before completing the current classification and measures check.` |
| `trade.tariff_action` | `Check the UK Trade Tariff — GOV.UK` |
| `trade.tra_action` | `Review active TRA investigations — Trade Remedies Authority` |
| `trade.dated_status` | default absent; future exact text remains in Gate 2 V0.4 |
| `trade.internal_update` | default absent; target `RES-TRADE-UK` only when all atomic conditions pass |

The conditional container produces no empty heading, separator, anchor or Schema item when disabled.

## 12. Buyer Questions

| ID | Question | Exact answer |
|---|---|---|
| Q1 | `How does TiO2 Malaysia support UK procurement?` | `TiO2 Malaysia provides Malaysia-origin titanium dioxide product information, document-request paths and a structured quotation process for UK buyers. Begin with the intended application and destination, then share the specification and commercial details required for evaluation.` |
| Q2 | `Which grades can a UK buyer explore first?` | `The page presents M-350, M-510 and M-896 for the global Coatings path, and M-200, M-108 and M-210 for the global Plastics and Masterbatch paths. Use them to begin product evaluation, then compare the grade information with your own formulation and specification requirements.` |
| Q3 | `Why must we distinguish Great Britain from Northern Ireland?` | `UK REACH and GB CLP apply in Great Britain, while EU REACH and EU CLP continue to apply in Northern Ireland. The destination therefore changes the regulatory and tariff assessment path. Confirm the applicable role and requirements for the transaction.` |
| Q4 | `What documents can our team request?` | `Your request can identify technical and product information, safety documentation, quality and COA information, and origin or supplier-qualification information. Include the selected grade, intended use and shipment context so the requested document scope can be assessed.` |
| Q5 | `How should Malaysia origin be used in the UK import assessment?` | `Treat Malaysia origin as one product fact in the import assessment, then verify classification, duty, preference, exclusions, exemptions and current trade-remedy treatment for the specific transaction using official UK sources.` |
| Q6 | `What should we include in a quotation request?` | `Include the application, grade or specification when known, Great Britain or Northern Ireland destination, estimated quantity, required timing, packaging needs and the documents your team wants to assess.` |

All answers render in initial server HTML. Disclosure behavior may change presentation only; `FAQPage` and `QAPage` remain prohibited.

## 13. Final RFQ

| Field | Exact value / rule |
|---|---|
| `final_rfq.h2` | `Prepare Your UK Titanium Dioxide Supply Request` |
| `final_rfq.body` | `Share the application, grade or specification, Great Britain or Northern Ireland destination, estimated requirement, timing, packaging needs and document questions. The request will be assessed in the relevant product and market context.` |
| `final_rfq.primary` | `Request a Quote` → `CONV-RFQ` at `/request-a-quote/?market=United%20Kingdom&source_page=MARKET-UK-001`; editable UK market/source prefill |
| `final_rfq.secondary` | `Request Documents` → `CONV-DOC` |
| `final_rfq.support` | `Explore All Titanium Dioxide Grades` → `PRODUCT-000` |
| `rfq_prefill.market` | `United Kingdom`; visible and editable |
| `rfq_prefill.source_page` | `MARKET-UK-001` |
| `rfq_prefill.territory` | empty unless buyer explicitly selects GB or NI |
| `rfq_prefill.grade` | empty unless buyer explicitly selects one |

## 14. GEO and Schema fields

| Field | Rule |
|---|---|
| `geo_answers` | Seven IDs `UK-GEO-A01`–`UK-GEO-A07`; exact approved answers from Gate 2 V0.4 |
| `schema.webpage` | URL, name, description, `inLanguage=en`, publisher and visible page meaning only |
| `schema.breadcrumb` | Home → Markets → United Kingdom after route verification |
| `schema.item_list` | Conditional six Grade items in displayed order; name and URL only |
| `schema.faq_page` | false |
| `schema.qa_page` | false |
| `schema.local_business` | false / not proposed |
| `schema.offer_inventory_delivery` | false / not proposed |
| `schema.hidden_relations` | prohibited |

Schema items emit only with the same visible implemented anchor and equivalent content.

## 15. Route reference model and API behavior

Each internal relation requires:

| Semantic field | Rule |
|---|---|
| `target_page_id` | Stable Registry identity; never inferred from a label |
| `planned_url` | Registered path or approved RFQ query contract |
| `site_scope` | `tio2-my` |
| `content_approved` | Internal implementation input; never Buyer Clean |
| `route_implemented` | Gate 8 evidence input |
| `canonical_verified` | Gate 9 evidence input |
| `visible_label` | Exact approved label |
| `schema_item_enabled` | true only when the same visible relation is implemented and eligible |

API expectations:

- fetch by `page_id=MARKET-UK-001`, `site_scope=tio2-my`, `locale=en`;
- preserve ordered arrays for Applications, Grades, checklist, territories, document groups and questions;
- resolve relations by Page ID, not string-built URLs;
- separate readiness/evidence fields from Buyer Clean serialization;
- omit Process, comparison, unsupported capability and conditional Trade fields when disabled;
- scope cache keys and revalidation tags by site and page;
- treat missing Malaysia data as an error/release blocker, never another-scope fallback.

## 16. Component mapping

| Component role | Consumes | Key behavior |
|---|---|---|
| Global Header | shared Chrome + current key | Fixed RFQ at exactly `/request-a-quote/`; Markets current; Desktop/Mobile variants |
| Breadcrumb | three ordered items | Semantic list; Home and Markets are links; United Kingdom is a non-link current item with current-page semantics |
| Market Hero | Hero + CTA relations | One H1; UK-context RFQ; Applications anchor |
| Direct Answer | answer + operator line | Visible GEO answer; no hidden duplication |
| Application Navigator | five ordered records | General discovery only; responsive grid |
| Representative Grade Groups | two intros + six records | Exact V0.3 labels; no Process/UK recommendation |
| Territory Decision | GB/NI records + sources | Equal panels; text owns distinction |
| Procurement Checklist | six ordered records | Content-driven height |
| Documents Panel | four records + two actions | One exact COO statement |
| Origin Panel | origin copy + About relation | No customs/trade outcome |
| Trade Panel | evergreen copy + source links + conditional atom | Safe collapse when conditional atom is false |
| Buyer Questions | six Q/A records | Initial DOM; accessible disclosure optional |
| Final RFQ | copy + three actions + prefill | Editable market; territory/Grade not assumed |
| Global Footer | shared Chrome | Fixed RFQ at exactly `/request-a-quote/`, legal utilities, production Logo Manifest |

## 17. Conditional rendering rules

- Global Chrome and page-body RFQ actions remain visible; shared Header, Mobile Header, Mobile Menu and Footer use exactly `/request-a-quote/`, while only Hero and Final RFQ use the approved UK/source query; any route failure blocks release.
- The dated Trade paragraph and internal Trade Update action render or omit as one atom.
- Unsupported company/market capabilities and all unapproved facts are absent with no placeholder.
- Process and comparison fields never serialize on this page.
- No empty cards, hidden hrefs, disabled public actions, broken arrows or internal-state labels.
- Schema follows visible implementation atomically.

## 18. Gate 7 targeted-review record

| ID | Finding / action | Current status |
|---|---|---|
| `MARKET-UK-001-G7-PCR-01` | Initial Gate 7 project-control review | `CONDITIONAL_RETURN / SUPERSEDED_BY_PCR-02` |
| `MARKET-UK-001-G7-P0-01` | Shared RFQ field corrected to the exact bare path; contextual path retained only for Hero and Final RFQ | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `MARKET-UK-001-G7-P1-01` | Breadcrumb fields corrected to 3 items / 2 links + 1 current non-link item | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| `MARKET-UK-001-G7-PCR-02` | Targeted project-control re-review | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |

## 19. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Created the semantic CMS/API/component mapping for the authorized MARKET-UK-001 Gate 7 package. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; Gate 8 locked |
| V0.1 targeted revision | 2026-09-05 | Synchronized the shared-versus-body RFQ URL fields and the exact Breadcrumb link/current-item semantics required by PCR-02. | `RESOLVED_IN_DRAFT_PENDING_PROJECT_CONTROL_REVIEW`; Gate 8 locked |
| V0.1 targeted review PASS | 2026-09-05 | Recorded PCR-02 project-control PASS and retained the mapping as the approved Gate 7 handoff baseline; no implementation was started. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION`; Gate 8 locked |
