# TiO2 Malaysia · 23-page publication contract finalization V1.0

## 0. Document control

| Field | Value |
|---|---|
| Scope | The 22 pages named in publication-plan Task 2, plus `ABOUT-001` following the 2026-09-13 user approval of its 390px four-line title result |
| Decision source | User decision dated 2026-09-13: all 59 registered objects require a public production implementation; 57 standard pages target `index, follow` and Sitemap inclusion |
| Status | `PROJECT_CONTROL_REVIEW_PASS / APPROVED / CLOSED` |
| Approval basis | `USER_STANDING_AUTHORITY` after independent review `TIO2_MY_FULL_PUBLIC_SEO_GA4_D23_INDEPENDENT_REVIEW_V1.0.md` returned `PROJECT_CONTROL_REVIEW_PASS` with no mandatory Finding |
| Effective dimension | Final public URL, page responsibility, buyer task, CTA destination, SEO delivery, internal-link source and localization/official-source delivery contract |
| Does not mean | Existing copy or factual claims are newly approved; D16 implementation exists; route is live; Gate 9 passed; Gate 10 publication/indexing has occurred |
| Inputs | `TIO2_MY_59_OBJECT_PUBLICATION_TARGET_MATRIX_V1.0.csv`; `TIO2_MY_57_INDEXABLE_PAGE_SEO_DELIVERY_V1.0.csv`; `TIO2_MY_LAUNCH_FACT_CLOSURE_V1.0.md`; each row's page-specific current Manifest and approved upstream sources |

This file is a cross-page publication overlay. It finalizes only the publication-contract fields below. Each page-specific current Manifest remains the authority for its approved copy, facts, visual baseline, form behavior and historical review chain. Where an older Manifest or keyword-master note calls a listed URL `PROVISIONAL`, `PLANNED` or a `NEW_PAGE_CANDIDATE`, that label is superseded **only for the final URL/publication-target dimension** by the 2026-09-13 user decision and this reviewed overlay. It does not silently promote an unapproved claim.

## 1. Shared publication rules

1. All 23 rows below target HTTP 200, `index, follow`, self-canonical output and Sitemap inclusion. Actual production output remains a Gate 8 implementation obligation and Gate 9 verification item; activation/publication remains Gate 10/release-owner work.
2. `NO_PRIMARY_KEYWORD` navigation/utility pages remain keyword-neutral. Their descriptive metadata serves their approved reader task and does not create a commercial keyword owner.
3. Primary internal-link sources name required discovery paths, not proof that a production link already exists. Gate 9 verifies rendered links, response targets and `site_scope=tio2-my` isolation.
4. CTA labels below are the required primary reader action. Shared Header/Footer remain Home/Global Chrome-owned and are not redefined here. The fixed global `Request a Quote` remains visible and points to `/request-a-quote/`.
5. Visible copy, metadata and Schema must express the same approved facts. Publication eligibility does not permit unsupported product, document, equivalence, regulatory, tariff, shipment or contact claims.

## 2. Localized Market contract

| Page ID | Final URL / responsibility | Visible buyer task | Primary CTA | Title / Meta / H1 | Canonical / robots / Sitemap | Required internal sources |
|---|---|---|---|---|---|---|
| `MARKET-BR-PT` | `/pt-br/markets/brazil/`; owns Portuguese-language Brazil supplier/procurement intent | Determine whether the Malaysia-origin TiO2 portfolio and request paths fit a Brazil purchasing evaluation | `Solicitar cotação` → `/request-a-quote/`; supporting `Solicitar documentos` → `/request-documents/` | **Title:** `Fornecedor de dióxido de titânio para o Brasil \| TiO2 Malaysia`<br>**Meta:** `Dióxido de titânio originário da Malásia para compradores no Brasil. Conheça grades para tintas, plásticos e masterbatch. Solicite documentos ou uma cotação.`<br>**H1:** `Dióxido de titânio originário da Malásia para compradores no Brasil` | `https://tio2malaysia.com/pt-br/markets/brazil/`; `index, follow`; `YES` | `MARKET-000`; `HOME-001`; reciprocal language path from `MARKET-BR-EN` when both responses pass Gate 9 |

### 2.1 PT-BR localization and hreflang

- `MARKET-BR-PT` is a buyer-clean Brazilian Portuguese page, not a mechanical translation surface. Its approved localized copy remains the only visible PT-BR source; English facts cannot be inserted unless they are approved for the PT-BR page or accurately localized from a shared approved fact.
- When both production pages return the correct same-scope content and self-canonicals, emit exactly this reciprocal pair:
  - on `/markets/brazil/`: `hreflang="en"` → `https://tio2malaysia.com/markets/brazil/`; `hreflang="pt-BR"` → `https://tio2malaysia.com/pt-br/markets/brazil/`;
  - on `/pt-br/markets/brazil/`: the same two alternates.
- Do not add `x-default` under the current approved contract. Do not emit one-sided, dead, redirected, wrong-language or cross-scope alternates.

## 3. Applications contracts

| Page ID | Final URL / unique responsibility | Visible buyer task | Primary CTA | Title | Meta Description | H1 | Internal sources |
|---|---|---|---|---|---|---|---|
| `APP-000` | `/applications/`; keyword-neutral application navigation hub | Choose the relevant application evaluation path | `Explore Applications` → `#application-selector` | `Applications \| TiO2 Malaysia` | `Explore titanium dioxide application paths for coatings, plastics, masterbatch, printing inks, paper and specialty materials.` | `Explore Titanium Dioxide by Application` | `HOME-001`; `GLOBAL_CHROME_PRIMARY_NAV` |
| `APP-COAT` | `/applications/titanium-dioxide-for-coatings/`; owns generic coatings evaluation intent | Define coating system and test basis before reviewing candidate Grades | `Review Product Grades` → `/products/` | `Titanium Dioxide for Coatings \| Grade Evaluation` | `Compare TiO2 grades in your coating system by formulation, dispersion, film, exposure and test basis. Review Grades, documents, samples and RFQ inputs.` | `Titanium Dioxide for Coatings` | `APP-000`; `HOME-001` |
| `APP-PLAS` | `/applications/titanium-dioxide-for-plastics/`; owns generic plastics evaluation intent | Define resin, process, specimen and exposure before reviewing candidates | `Review Product Grades` → `/products/` | `Titanium Dioxide for Plastics \| Grade Evaluation` | `Compare TiO2 candidates in a defined plastic resin, process, specimen and exposure. Review Product Grades and prepare a document, sample or quotation request.` | `Titanium Dioxide for Plastics` | `APP-000`; `HOME-001` |
| `APP-MB` | `/applications/titanium-dioxide-for-masterbatch/`; owns generic masterbatch evaluation intent | Separate concentrate processing evidence from final-article evidence | `Review Product Grades` → `/products/` | `Titanium Dioxide for Masterbatch Evaluation \| TiO2 Malaysia` | `Evaluate titanium dioxide for masterbatch by separating concentrate processing from final-article evidence. Review Product Grades and prepare your request.` | `Titanium Dioxide for Masterbatch` | `APP-000`; `HOME-001` |
| `APP-INK` | `/applications/titanium-dioxide-for-printing-inks/`; owns generic printing-ink evaluation intent | Define the white-ink and print system before comparing candidates | `Review Product Grades` → `/products/` | `Titanium Dioxide for Printing Inks \| TiO2 Malaysia` | `Compare titanium dioxide candidates in a defined white-ink and print system. Review Product Grades and prepare a document, sample or quotation request.` | `Titanium Dioxide for Printing Inks` | `APP-000`; `HOME-001` |
| `APP-PAPER` | `/applications/titanium-dioxide-for-paper/`; owns generic paper evaluation intent | Define the paper system and compare method-matched results | `Review Product Grades` → `/products/` | `Titanium Dioxide for Paper Evaluation \| TiO2 Malaysia` | `Evaluate titanium dioxide for paper in a defined system. Compare method-matched results, review Product Grades, and prepare document, sample or RFQ details.` | `Titanium Dioxide for Paper` | `APP-000`; `HOME-001` |

All six rows use self-canonical `https://tio2malaysia.com{final URL}`, `index, follow`, Sitemap `YES`. Application-to-Grade display remains constrained by the current PRODUCT V0.3 relationship authority. No page may convert `NO_PUBLIC_MAPPING` into “unsuitable” or invent a recommendation, comparison, equivalence or guarantee.

## 4. Documents and Request Documents contracts

| Page ID | Final URL / unique responsibility | Visible buyer task | Primary CTA | Title | Meta Description | H1 | Internal sources |
|---|---|---|---|---|---|---|---|
| `DOC-000` | `/documents/`; keyword-neutral document navigation hub | Understand the available document-request paths and start a controlled request | `Start a Document Request` → `/request-documents/` | `Documents for Product Qualification \| TiO2 Malaysia` | `Request technical, safety, quality, COA, origin and supplier-qualification documentation for a selected titanium dioxide grade.` | `Documents for Product & Supplier Qualification` | `HOME-001`; `GLOBAL_CHROME_PRIMARY_NAV` |
| `DOC-REACH` | `/documents/reach/`; owns REACH verification guidance, not a company-registration claim | Identify the substance, legal-entity, supply-chain and date information that must be checked | `Request Documents` → `/request-documents/` | `Titanium Dioxide REACH Registration: What to Verify \| TiO2 Malaysia` | `Understand which EU REACH information titanium dioxide buyers should verify across substance identity, legal-entity scope, supply-chain role, source and review date.` | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` | `DOC-000`; `RES-000` |
| `DOC-TDS` | `/documents/tds-sds-coa/`; owns the distinction and request context for TDS/SDS/COA | Decide which document type and product context to submit for review | `Request Documents` → `/request-documents/` | `Titanium Dioxide TDS, SDS & COA: What to Request \| TiO2 Malaysia` | `Understand the difference between titanium dioxide TDS, SDS and COA, add the relevant product or batch context, and request the documents needed for review.` | `Titanium Dioxide TDS, SDS & COA: What to Request` | `DOC-000`; `RES-000` |
| `DOC-COO` | `/documents/certificate-of-origin/`; owns origin-document explanation without asserting transaction outcomes | Understand which origin context and transaction details belong in a document request | `Request Documents` → `/request-documents/` | `Certificate of Origin for Titanium Dioxide \| TiO2 Malaysia` | `Understand when a titanium dioxide country of origin certificate or other proof may be relevant and what details to provide with a document request.` | `Certificate of Origin for Titanium Dioxide: What Buyers Should Verify` | `DOC-000`; `RES-000` |
| `CONV-DOC` | `/request-documents/`; owns the controlled document-request transaction | Submit one primary Grade, selected document types and company/contact context for human review | `Review & Submit` → same-page submission workflow | `Request Documents \| TiO2 Malaysia` | `Submit a controlled request for titanium dioxide product, safety, quality, COA, origin or supplier-qualification documentation for human review.` | `Request Documents` | `DOC-000`; `GLOBAL_CHROME_FOOTER` |

All five rows use self-canonical `https://tio2malaysia.com{final URL}`, `index, follow`, Sitemap `YES`. The current approved document and form contracts govern visible categories and fields. A request identifies buyer context; it does not promise inventory, registration coverage, approval, download, delivery or a shipment-specific certificate outcome. The visible Grade source is the single launch product roster authority.

## 5. Resources contracts

| Page ID | Final URL / unique responsibility | Visible buyer task | Primary CTA | Title | Meta Description | H1 | Internal sources |
|---|---|---|---|---|---|---|---|
| `RES-000` | `/resources/`; keyword-neutral research navigation hub | Choose the relevant technical, sourcing or dated trade resource | `Explore Procurement Resources` → `#research-paths` in the approved H0 state | `Titanium Dioxide Procurement Resources \| TiO2 Malaysia` | `Explore titanium dioxide buying guides, technical evaluation principles and dated market or trade updates for sourcing decisions across the EU, UK, India and Brazil.` | `Resources for Titanium Dioxide Procurement Decisions` | `HOME-001`; `GLOBAL_CHROME_PRIMARY_NAV` |
| `RES-CHEMOURS` | `/resources/chemours-titanium-dioxide-alternatives/`; owns non-equivalence alternative qualification guidance | Build an evidence-led qualification brief from the exact reference Grade and application | `Explore Product Grades` → `/products/` | `How to Evaluate Chemours Titanium Dioxide Alternatives` | `Use the exact Ti-Pure grade, application, documented product facts and your own qualification criteria to evaluate another titanium dioxide supply source.` | `How to Evaluate a Chemours Titanium Dioxide Alternative` | `RES-000`; `HOME-001` |
| `RES-R706` | `/resources/ti-pure-r-706-alternative/`; owns R-706-reference qualification guidance without equivalence claims | Translate an R-706 reference into independent document and test requirements | `Explore Product Grades` → `/products/` | `Ti-Pure R-706 Qualification Guide \| TiO2 Malaysia` | `Use Ti-Pure R-706 product facts, document labels and coating test dimensions to prepare an independent titanium dioxide qualification brief.` | `Qualify Another TiO2 Supply When Ti-Pure R-706 Is Your Reference` | `RES-000`; `HOME-001` |
| `RES-TRADE-EU` | `/resources/eu-titanium-dioxide-anti-dumping-duty/`; owns dated EU measure/review explanation | Check current measure, scope, reviewed date and shipment inputs | `Review EU Procurement Options` → `/markets/european-union/` | `EU Titanium Dioxide Anti-Dumping Duty Update \| TiO2 Malaysia` | `Check the current EU anti-dumping measure for specified China-origin titanium dioxide, the 2026 reinvestigation and shipment inputs to verify.` | `EU Titanium Dioxide Anti-Dumping Duty: Current Measure and 2026 Review` | `RES-000`; `HOME-001` |
| `RES-TRADE-UK` | `/resources/uk-titanium-dioxide-anti-dumping-investigation/`; owns dated UK AD0086/registration explanation | Check the active investigation, registration scope, dates and shipment inputs | `Review UK Procurement Options` → `/markets/united-kingdom/` | `UK Titanium Dioxide Anti-Dumping Investigation \| TiO2 Malaysia` | `Check the active UK AD0086 investigation, rutile titanium dioxide import registration, written scope, key dates and shipment inputs to verify.` | `UK Rutile Titanium Dioxide: Active AD0086 Investigation and Import Registration` | `RES-000`; `HOME-001` |
| `RES-TRADE-IN` | `/resources/india-titanium-dioxide-anti-dumping-duty/`; owns dated India finding/recommendation explanation | Distinguish the quashed levy, current recommendation and any later implementation evidence | `Review India Procurement Options` → `/markets/india/` | `India Titanium Dioxide Anti-Dumping Duty Status \| TiO2 Malaysia` | `Check the quashed 2025 India TiO2 levy, DGTR’s 2026 recommendation, product scope, producer paths and shipment inputs to verify.` | `India Titanium Dioxide Anti-Dumping Duty: 2025 Levy Quashed, 2026 Recommendation Explained` | `RES-000`; `HOME-001` |
| `RES-TRADE-BR` | `/resources/brazil-titanium-dioxide-anti-dumping-duty/`; owns dated Brazil measure/scope explanation | Check current entity bands, scope, correction, proceeding and shipment inputs | `Review Brazil Procurement Options` → `/markets/brazil/` | `Brazil Titanium Dioxide Anti-Dumping Duty \| TiO2 Malaysia` | `Check Brazil’s definitive TiO2 anti-dumping measure, China-origin scope, four USD/t bands, exclusions and shipment inputs to verify.` | `Brazil Titanium Dioxide Anti-Dumping Duty: Current Measure, Scope and Rates` | `RES-000`; `HOME-001` |

All seven rows use self-canonical `https://tio2malaysia.com{final URL}`, `index, follow`, Sitemap `YES`. Alternative guides must not assert equivalence or replacement. Trade pages must render the source and `Last reviewed: 13 September 2026`; they explain current official records and do not promise customs outcomes or claim Malaysia origin avoids a measure.

### 5.1 Official-source state carried to delivery

| Page | Current official-source state checked 2026-09-13 |
|---|---|
| `RES-TRADE-EU` | European Commission Implementing Regulation (EU) 2025/4 remains the current definitive measure for the stated PRC-origin scope and entity/invoice conditions. Notice C/2026/4533 opened an absorption reinvestigation on 2026-08-25 while stating existing measures remain in force. A possible recalculation is not a current rate. Sources: `https://eur-lex.europa.eu/eli/reg_impl/2025/4/oj`; `https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:52026XC04533`. |
| `RES-TRADE-UK` | TRA case `AD0086` is active; the DBT/HMRC notice registers defined PRC-origin rutile TiO2 imports from 2026-03-27. Registration is not a duty rate. Sources: `https://public-file.trade-remedies.service.gov.uk/case/ad0086`; `https://www.gov.uk/government/publications/trade-remedies-notice-registration-of-imports-of-rutile-titanium-dioxide-originating-from-china/trade-remedies-notice-202614-registration-of-imports-of-rutile-titanium-dioxide-originating-from-china`. |
| `RES-TRADE-IN` | DGTR continues to list the 2026-08-03 remand final findings and recommended amounts. The official-source discovery captured no later implementing customs notification; launch copy must describe recommendation/finding, not a current payable duty. Source: `https://www.dgtr.gov.in/en/anti-dumping-cases/anti-dumping-investigation-concerning-imports-titanium-dioxide-originating-or`. |
| `RES-TRADE-BR` | MDIC/CAMEX lists the definitive China-origin rutile TiO2 measure and current entity bands; Resolution 850/2026 removed Siegwerk from the named list. The public-interest proceeding remained open in the checked record. Preserve narrow exclusions. Sources: `https://www.gov.br/mdic/pt-br/assuntos/comercio-exterior/defesa-comercial-e-interesse-publico/medidas-em-vigor/medidas-em-vigor/pigmentos-dioxido-titanio-md`; `https://www.gov.br/mdic/pt-br/assuntos/comercio-exterior/defesa-comercial-e-interesse-publico/investigacoes/avaliacoes-de-interesse-publico/dioxido-de-titanio-ip`. |

## 6. Conversion, Contact and About contracts

| Page ID | Final URL / unique responsibility | Visible buyer task | Primary CTA | Title | Meta Description | H1 | Internal sources |
|---|---|---|---|---|---|---|---|
| `CONV-RFQ` | `/request-a-quote/`; owns quotation/purchase-action intake | Submit one Grade, application, quantity in metric tonnes and destination for human review | `Review & Submit` → same-page quotation workflow | `Request a Titanium Dioxide Quote \| TiO2 Malaysia` | `Request a titanium dioxide quotation from TiO2 Malaysia by providing your grade, application, quantity in metric tonnes and destination for review.` | `Request a Titanium Dioxide Quote` | `GLOBAL_CHROME_FIXED_RFQ`; `HOME-001` |
| `CONV-SAMPLE` | `/request-sample/`; owns qualified sample-request intake | Submit Grade, application, destination and test objective for human review | `Review & Submit` → same-page sample workflow | `Request a Titanium Dioxide Sample \| TiO2 Malaysia` | `Request a Malaysia-origin titanium dioxide sample for technical evaluation by sharing the grade, application, destination and test objective for human review.` | `Request a Titanium Dioxide Sample for Technical Evaluation` | `PRODUCT_GRADE_PAGES`; `APPLICATION_PAGES` |
| `CONTACT-001` | `/contact/`; keyword-neutral general company/business inquiry utility | Send a general inquiry or choose the correct specialist request owner | `Send a General Inquiry` → `#general-inquiry` | `Contact TiO2 Malaysia \| General Inquiries` | `Contact TiO2 Malaysia with a general company or business inquiry, or use the dedicated pages to request a quote, product documents or a sample.` | `Contact TiO2 Malaysia` | `GLOBAL_CHROME_FOOTER`; `HOME-001` |
| `ABOUT-001` | `/about/`; owns operating-company, Malaysia manufacturing/origin and company trust | Understand who supplies the portfolio, the approved company facts and where to continue | `Request a Quote` → `/request-a-quote/`; secondary `Contact Us` → `/contact/` | `Malaysia Titanium Dioxide Manufacturer \| TiO2 Malaysia` | `Learn about IKHLAS TITANIUM (MALAYSIA) SDN. BHD., a Malaysia-based rutile TiO2 manufacturer with product documentation and export coordination through Port Klang.` | `Malaysia-Based Titanium Dioxide Supply for Global Markets` | `HOME-001`; `GLOBAL_CHROME_PRIMARY_NAV` |

All four rows use self-canonical `https://tio2malaysia.com{final URL}`, `index, follow`, Sitemap `YES`. Conversion success means the request was accepted for review under its current approved form contract; it does not guarantee price, supply, sample fulfillment, document availability, lead time or order acceptance. Contact remains general-inquiry-first and is not a fallback for specialist requests.

### 6.1 ABOUT-001 390px title approval

The user's 2026-09-13 approval is recorded as:

`ABOUT-001 / 390px / H1 natural wrapping = USER_APPROVED / CLOSED`

It accepts the measured natural four-line rendering of the unchanged H1 at the approved 390px shared-shell configuration. This approval applies only at 390px. It does **not** change the H1 wording, font contract, CTA, media, body copy, layout at 768/1440 or any other breakpoint. The current visual sources and their hashes remain unchanged.

## 7. Publication, implementation and release separation

| Dimension | State after this candidate |
|---|---|
| Final URLs and per-page public target | `APPROVED / CLOSED` from the 2026-09-13 user publication decision and independent Gate 6 review |
| Page responsibility / buyer task / CTA / SEO fields | Approved by this overlay and `TIO2_MY_57_INDEXABLE_PAGE_SEO_DELIVERY_V1.0.csv` |
| Existing copy and facts | Continue to be governed by each page current Manifest, approved Brief/copy and `TIO2_MY_LAUNCH_FACT_CLOSURE_V1.0.md`; no blanket reapproval is inferred |
| D16 implementation | `NOT_PROVEN_BY_THIS_FILE`; Gate 8 must implement from the Gate 6 package and return machine evidence |
| Gate 9 | Must independently verify actual routes, metadata, links, hreflang, source dates, forms, accessibility and scope isolation |
| Gate 10 / public release / Sitemap submission / indexing | Not granted by this file |

## 7.1 Exact canonical and index delivery

| Page ID | Canonical | Robots | Sitemap |
|---|---|---|---|
| `ABOUT-001` | `https://tio2malaysia.com/about/` | `index, follow` | `YES` |
| `APP-000` | `https://tio2malaysia.com/applications/` | `index, follow` | `YES` |
| `APP-COAT` | `https://tio2malaysia.com/applications/titanium-dioxide-for-coatings/` | `index, follow` | `YES` |
| `APP-INK` | `https://tio2malaysia.com/applications/titanium-dioxide-for-printing-inks/` | `index, follow` | `YES` |
| `APP-MB` | `https://tio2malaysia.com/applications/titanium-dioxide-for-masterbatch/` | `index, follow` | `YES` |
| `APP-PAPER` | `https://tio2malaysia.com/applications/titanium-dioxide-for-paper/` | `index, follow` | `YES` |
| `APP-PLAS` | `https://tio2malaysia.com/applications/titanium-dioxide-for-plastics/` | `index, follow` | `YES` |
| `CONTACT-001` | `https://tio2malaysia.com/contact/` | `index, follow` | `YES` |
| `CONV-DOC` | `https://tio2malaysia.com/request-documents/` | `index, follow` | `YES` |
| `CONV-RFQ` | `https://tio2malaysia.com/request-a-quote/` | `index, follow` | `YES` |
| `CONV-SAMPLE` | `https://tio2malaysia.com/request-sample/` | `index, follow` | `YES` |
| `DOC-000` | `https://tio2malaysia.com/documents/` | `index, follow` | `YES` |
| `DOC-COO` | `https://tio2malaysia.com/documents/certificate-of-origin/` | `index, follow` | `YES` |
| `DOC-REACH` | `https://tio2malaysia.com/documents/reach/` | `index, follow` | `YES` |
| `DOC-TDS` | `https://tio2malaysia.com/documents/tds-sds-coa/` | `index, follow` | `YES` |
| `MARKET-BR-PT` | `https://tio2malaysia.com/pt-br/markets/brazil/` | `index, follow` | `YES` |
| `RES-000` | `https://tio2malaysia.com/resources/` | `index, follow` | `YES` |
| `RES-CHEMOURS` | `https://tio2malaysia.com/resources/chemours-titanium-dioxide-alternatives/` | `index, follow` | `YES` |
| `RES-R706` | `https://tio2malaysia.com/resources/ti-pure-r-706-alternative/` | `index, follow` | `YES` |
| `RES-TRADE-BR` | `https://tio2malaysia.com/resources/brazil-titanium-dioxide-anti-dumping-duty/` | `index, follow` | `YES` |
| `RES-TRADE-EU` | `https://tio2malaysia.com/resources/eu-titanium-dioxide-anti-dumping-duty/` | `index, follow` | `YES` |
| `RES-TRADE-IN` | `https://tio2malaysia.com/resources/india-titanium-dioxide-anti-dumping-duty/` | `index, follow` | `YES` |
| `RES-TRADE-UK` | `https://tio2malaysia.com/resources/uk-titanium-dioxide-anti-dumping-investigation/` | `index, follow` | `YES` |

## 8. Page-specific Manifest synchronization rule

Each of the 23 current Manifests receives a short dated pointer to this overlay. That pointer supersedes only stale provisional/planned/candidate language for the publication-target fields enumerated here. It preserves every unrelated Gate result, open Finding, factual boundary, test limitation and release restriction until the responsible later Gate closes it with evidence.

| Page ID | Current page-specific Manifest retained as content/fact/review authority |
|---|---|
| `ABOUT-001` | `pages/about-contact/05_review/ABOUT-001_GATE5_CURRENT_VISUAL_MANIFEST_V0.3.md` |
| `MARKET-BR-PT` | `pages/markets/brazil/MARKET-BR-PT_CURRENT_GATE_BASELINE_MANIFEST_V0.15.md` |
| `APP-000` | `pages/applications/APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md` |
| `APP-COAT` | `pages/applications/coatings/APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md` |
| `APP-PLAS` | `pages/applications/plastics/APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md` |
| `APP-MB` | `pages/applications/masterbatch/APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md` |
| `APP-INK` | `pages/applications/printing-inks/APP-INK_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md` |
| `APP-PAPER` | `pages/applications/paper/APP-PAPER_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md` |
| `DOC-000` | `pages/documents/06_handoff/DOC-000_CURRENT_GATE7_BASELINE_MANIFEST_V0.2.md` |
| `DOC-REACH` | `pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE9_BASELINE_MANIFEST_V0.17.md` |
| `DOC-TDS` | `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md` |
| `DOC-COO` | `pages/documents/certificate-of-origin/04_planning/DOC-COO_CURRENT_GATE_BASELINE_MANIFEST_V0.17.md` |
| `CONV-DOC` | `pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md` |
| `RES-000` | `pages/resources/06_handoff/RES-000_GATE7_MANIFEST_V0.1.md` |
| `RES-CHEMOURS` | `pages/resources/chemours-alternatives/RES-CHEMOURS_CURRENT_GATE_BASELINE_MANIFEST_V0.21.md` |
| `RES-R706` | `pages/resources/r706-alternative/RES-R706_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md` |
| `RES-TRADE-EU` | `pages/resources/eu-trade/RES-TRADE-EU_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md` |
| `RES-TRADE-UK` | `pages/resources/uk-trade/RES-TRADE-UK_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md` |
| `RES-TRADE-IN` | `pages/resources/india-trade/RES-TRADE-IN_CURRENT_GATE_BASELINE_MANIFEST_V0.10.md` |
| `RES-TRADE-BR` | `pages/resources/brazil-trade/RES-TRADE-BR_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md` |
| `CONV-RFQ` | `pages/conversion/request-a-quote/05_review/CONV-RFQ_CURRENT_GATE9_BASELINE_MANIFEST_V1.6.md` |
| `CONV-SAMPLE` | `pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.3.md` |
| `CONTACT-001` | `pages/contact/CONTACT-001_CURRENT_GATE_BASELINE_MANIFEST_V0.14.md` |

The approved/current Brief and copy sources are reached through these Manifests' explicit authority chains. This overlay intentionally does not duplicate full Brief text or replace a page's current Manifest identity.

## 9. Validation requirements

- exactly 23 unique Page IDs in the scope (22 from plan Task 2 plus `ABOUT-001`);
- every Page ID exists once in the 59-object target matrix and SEO delivery;
- every row is HTTP 200, `index, follow`, Sitemap `YES`;
- final URLs, titles, meta descriptions, H1s, canonicals and internal-link-source values match the SEO delivery CSV;
- `APP-000`, `DOC-000`, `RES-000` and `CONTACT-001` remain `NO_PRIMARY_KEYWORD`;
- PT-BR has reciprocal `en`/`pt-BR` rules without `x-default`;
- Trade source state and checked date match the launch fact closure;
- the About approval is limited to the 390px four-line H1 result;
- no file under `D:\16Wordpress_nextjs` is read or modified by this task.
