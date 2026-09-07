# MARKET-EU-PL · Gate 2 Content and Operation Contract V0.2

Date: 2026-09-06. Status: `DRAFT_FOR_PROJECT_CONTROL_REVIEW / TARGETED_REVISION_COMPLETED / PENDING_INDEPENDENT_REVIEWER_VERIFICATION`. This is the Skeleton-stage portion of deliverable C and must be read with [Content Skeleton V0.2](MARKET-EU-PL_GATE2_CONTENT_SKELETON_V0.2.md). Full Buyer Clean Copy B has not been created; when it is authorized and written, B will become the sole editable source for visible page copy.

## 1. Identity and approved inputs

- Page ID / language / type: `MARKET-EU-PL` / EN / Market procurement landing page.
- URL / canonical direction: `/markets/poland/` / `https://tio2malaysia.com/markets/poland/`.
- Primary keyword: `titanium dioxide supplier poland`.
- Secondary keywords: `tio2 supplier poland`; `malaysia titanium dioxide poland`.
- Excluded ownership: generic application terms, exact grade terms, Europe/EU supplier terms and detailed trade-update terms remain with their registered owners.
- Approved direction `PL-D01`: Malaysia-origin industrial TiO2 raw material for procurement and technical teams working on Poland production projects; raw TiO2 versus finished masterbatch distinction; coatings and plastics/masterbatch evaluation; primary `Request a Quote`, secondary `Explore Products`.
- Approved fact `PL-D02`: `A Certificate of Origin is available upon request.` Its public and equivalent SEO/GEO/Schema use is approved for this page without expansion.

Current upstream authority is [Manifest V0.2](../MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md), with [Brief V0.2](../../../../docs/page-briefs/MARKET-EU-PL_POLAND_BRIEF_V0.2.md), [Gate 1 research V0.2](../01_research/MARKET-EU-PL_GATE1_RESEARCH_REPORT_V0.2.md), [claim register V0.2](../01_research/MARKET-EU-PL_GATE1_CLAIM_EVIDENCE_REGISTER_V0.2.csv), the site-wide Malaysia-origin authority and Evidence Gap Decision Register V1.8.

## 2. Actions, links and carried context

Visible labels are maintained in Skeleton A at this stage and later in Buyer Clean Copy B. This section defines behavior and ownership without creating a second editable copy source.

| Skeleton location | Target | Buyer context and expected behavior | Receiver / owner boundary |
|---|---|---|---|
| PL-01 and PL-05 quotation action | CONV-RFQ `/request-a-quote/` | The source is the Poland market page and the destination country may begin as `Poland`; any carried value must be visible and editable. | The page does not invent a query-string key. CONV-RFQ owns binding, fields, validation and receipt states. Its current approved form contract supports `Not sure / Need help`; its Buyer Clean form remains the content authority. |
| PL-01 and PL-03 product action | PRODUCT-000 `/products/` | Opens the neutral product catalogue; no grade, process or Poland suitability is selected or inferred. | Products owns grade facts, technical data and product relationships. |
| PL-04 document action | CONV-DOC `/request-documents/` | No grade or document type is preselected because the Poland page contains no selector. The buyer selects a Product Grade and the needed document types. | Current CONV-DOC contract supports one grade and one or more document types. `country_region` is the buyer's company location and is not auto-filled from a delivery market. Selection does not prove availability or release. |
| PL-04 information link | DOC-000 `/documents/` | Opens the document information and navigation hub. | It is not a direct file inventory or download. |
| PL-05 supporting link | MARKET-EU-001 `/markets/european-union/` | Opens the EU-level procurement context. | The Poland page does not reproduce EU policy or take Europe/EU supplier keyword ownership. |

### RFQ context limits

- The current approved RFQ form contract has one visible Product / Grade control and permits `Not sure / Need help`. A buyer considering multiple grades can describe the additional grades or requirements in the editable `Additional Requirements` field; this page does not claim a separate multi-row quotation workflow.
- Quantity guidance says `required or estimated quantity`; it does not rename the receiver field or imply an MOQ. The receiver accepts a positive quantity in metric tonnes under its current approved contract.
- Poland is the delivery-country context, not the buyer's company location and not a statement of serviceability, stock or delivery commitment.
- The quotation action may carry only explicit approved context. It does not infer a grade or application from reading PL-03.
- Receipt means human review and contact using the submitted details. It does not mean a quote, price, supply, document, delivery or order has been confirmed.

### Document context limits

- `TDS`, `SDS`, `COA` and origin documentation are buyer-recognizable request categories. The receiver's current public labels remain authoritative where they are more descriptive.
- The exact COO availability statement is a company fact approved for this Poland page. It does not automatically preselect `Origin & Supplier Qualification Documentation` or assert that every requested document exists for every grade.
- A buyer without a selected grade is directed to Products or the RFQ path because the current document receiver requires a Product Grade. This is a behavior explanation, not a new restriction on future receiver design.

## 3. Shared content and page states

- Breadcrumb direction: `Home` → `/`; `Markets` → `/markets/`; `European Union` → `/markets/european-union/`; current `Poland`. The content relationship does not change the registered flat URL.
- Global Chrome: consume `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; navigation key `Markets`; no buyer-visible `CURRENT`; fixed shared RFQ remains; Header, Mobile Menu, Footer, legal links and production Logo remain owner-controlled.
- MARKET-EU-PL has reading and navigation actions only. It does not copy the RFQ or Documents forms, validation, error, failure or success states.
- The normal complete-site experience retains the approved links. Route and receiver readiness are later Gate 7–9 dependencies and are never rendered as internal readiness, hold or placeholder language.
- No Poland warehouse, local office, stock, MOQ, response time, delivery time, customs acceptance, tariff result or grade-country suitability is stated.

## 4. SEO, GEO and Schema direction

| Item | Skeleton-stage candidate |
|---|---|
| SEO Title | `Titanium Dioxide Supplier for Poland \| TiO2 Malaysia` |
| Meta Description | `Compare Malaysia-origin titanium dioxide grades for coatings, plastics and masterbatch in Poland. Request product documents or submit a quotation request.` |
| Canonical | `https://tio2malaysia.com/markets/poland/` with no carried-context or tracking query |
| Language / hreflang | EN / `en`; no Polish-language alternate is created or implied |
| Index direction | INDEX candidate; production robots, sitemap inclusion and publication remain Gate 9/10 decisions |
| Schema | `WebPage` + `BreadcrumbList`, with approved shared `WebSite` and `Organization` references |

The visible answer and entity mapping is:

| Buyer answer / relationship | Visible Skeleton location | Boundary |
|---|---|---|
| What is supplied, where it originates and which market the page serves | PL-01 and PL-02 | Malaysia-origin industrial TiO2 raw material for a Poland procurement/delivery context; no local-presence inference |
| How raw TiO2 differs from finished white masterbatch for this task | PL-02 | TiO2 input versus TiO2 with a polymer carrier; no competitor comparison or finished masterbatch offer |
| What project information helps begin grade evaluation | PL-03 | Coating system/end use or resin/process/finished product; no automatic recommendation |
| How product and supplier documents can be requested | PL-04 | TDS/SDS/COA/origin request path and approved COO statement; no inventory or download claim |
| How a buyer proceeds with incomplete grade information and what happens next | PL-05 | Unknown-grade and multi-grade context route to human review; no commercial outcome promise |

No `LocalBusiness`, `Product`, `Offer`, `FAQPage`, `QAPage`, `HowTo`, certification, availability or shipping Schema is proposed. Machine-readable descriptions must remain semantically equal to approved visible content and cannot turn Poland into a local establishment or product-suitability relation.

## 5. Basis, Buyer cold read and unresolved items

### Basis and page-specific value

- PL-02 implements Gate 1 findings PL-C07/PL-C13: the local source set exposed a real raw-TiO2 versus finished-white-masterbatch distinction, and the approved page direction requires a clear answer.
- PL-03 implements PL-C08–PL-C10 and Brief PL-BQ03 as practical buyer prompts: coating end use, resin, processing route and finished product. These prompts are used as evaluation context, not as Poland market-share or demand claims.
- PL-04 implements PL-C04/PL-D02 and the approved Documents route without importing another site's file inventory.
- PL-01 and PL-05 implement PL-D01 and Brief PL-BQ01/05: Malaysia origin, Poland destination and clear quotation action.

No additional external research or project Skill was used. Gate 1 already answered the content questions required for this Skeleton, and no new real-time regulation, trade or enterprise fact was introduced.

### Required Buyer cold read

1. **Buyer burden:** PL-03 now asks the buyer to use known application context as self-guided comparison criteria on the product pages; it no longer asks the buyer to include or state information where no receiving action exists. Other action sentences ask only to compare relevant grades, select documents for a known grade, or submit an RFQ. There is no `review all`, `every`, mandatory reading sequence, compulsory prior grade selection for RFQ, or repeated document choice. The only receiver-specific requirement mentioned is a known grade for the separate document request, paired with usable Products/RFQ alternatives.
2. **Action and result:** Every label states its actual destination: product catalogue, document request, document information hub, EU overview or RFQ. PL-03 imperatives now describe comparison actions supported by the Products target. `Request Documents` is not called a download. The revised Meta separately says `Compare grades` and `request product documents`, so it does not imply a public document inventory. The after-submit sentence promises review and contact only and matches the RFQ receipt semantics.
3. **Incomplete information:** Unknown grade remains valid through `Not sure / Need help`; an estimated quantity is acceptable as buyer guidance; multi-grade consideration can be described in Additional Requirements; the document workflow supports one grade with multiple document types. The Skeleton does not claim unsupported multi-product rows or lock a new form cardinality.
4. **Page-specific value:** The Poland research is visible in PL-02's raw-material/masterbatch distinction and PL-03's coatings versus plastics/masterbatch project prompts. It is not left only in source mapping or replaced by a Poland market overview.

### Unresolved items and stop point

There is no new fact question for the user at Skeleton stage. PC-PL-01 and PC-PL-02 are revised and await independent reviewer verification. Full Copy B, Skeleton approval, Gate 2 closure, Gate 3, development and publication remain `NOT_STARTED / NOT_AUTHORIZED`.
