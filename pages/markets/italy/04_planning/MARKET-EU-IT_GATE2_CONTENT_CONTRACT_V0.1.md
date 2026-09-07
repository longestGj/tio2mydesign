# MARKET-EU-IT Gate 2 Content Contract V0.1

## 1. Identity and stable positioning

| Field | Contract value |
|---|---|
| Page ID | `MARKET-EU-IT` |
| Language / destination | EN / Italy |
| URL | `/markets/italy/` |
| Page type | Market procurement landing page |
| Primary keyword | `titanium dioxide supplier italy` |
| Secondary keywords | `tio2 supplier italy`; `malaysia titanium dioxide italy` |
| Parent content owner | `MARKET-EU-001` / `/markets/european-union/` |
| Current navigation key | `markets` |
| Visible-copy authority | The B file selected by the current `MARKET-EU-IT` page Manifest; only content between `BUYER_COPY_START` and `BUYER_COPY_END` |

The page owns Italy-modified supplier and procurement intent. It adds Italy industrial-project prompts and destination preparation. EU-wide importing, compliance/customs context and dated trade detail remain with the EU Market and EU Trade Resource owners.

## 2. Fixed page-specific module order

1. `IT-01` — Hero: Italy destination, Malaysia-origin supply identity and primary/secondary action.
2. `IT-02` — Italy industry contexts with application-input prompts.
3. `IT-03` — Product evaluation path without an Italy-specific Grade assignment.
4. `IT-04` — Documents, approved COO statement and Sample receiver choice.
5. `IT-05` — Italy destination brief.
6. `IT-06` — EU parent and dated trade-owner handoff.
7. `IT-07` — Italy RFQ preparation and receiver expectation.

Module responsibilities and order are stable. Shared Header/Footer remain owner content and are not duplicated here.

## 3. Page-specific action contract

| B location / action | Target | Page-specific context and limit |
|---|---|---|
| `IT-01`, `IT-07` / `Request a Quote` | `CONV-RFQ` / `/request-a-quote/` | Carry `Italy` as visible, editable `Destination Country` context and `MARKET-EU-IT` as internal source attribution. Do not infer Product/Grade, Application, quantity, port, city, handover point, packaging, timing or document need. Receiver accepts `Not sure / Need help`, required or estimated MT quantity and other known context. |
| `IT-01`, `IT-03` / `Explore Products`, `Product Hub` | `PRODUCT-000` / `/products/` | Neutral Grade/application/process exploration only. No Italy-specific availability, selection, ranking, equivalence or suitability relationship. |
| `IT-02` / Coatings, Plastics, Masterbatch, Printing Inks links | `APP-COAT`, `APP-PLAS`, `APP-MB`, `APP-INK` | Application owners receive the stated buyer task. Italy industry examples do not preselect a Grade or establish country-specific product suitability. |
| `IT-04` / `Request Documents` | `CONV-DOC` / `/request-documents/` | Carry internal source attribution only. Do not carry Italy as a document-applicability or destination field. One Product Grade is required by the current receiver; buyer selects document types; availability and applicable scope remain subject to human review. |
| `IT-04` / `Request a Sample` | `CONV-SAMPLE` / `/request-sample/` | Carries the buyer to the Sample owner to describe an application/evaluation request. No sample approval, quantity, freight, lead time or delivery result is promised. |
| `IT-06` / `EU Procurement Overview` | `MARKET-EU-001` / `/markets/european-union/` | EU-wide importing roles, document/compliance, origin and general customs context. Italy application/destination responsibility remains here. |
| `IT-06` / `EU Titanium Dioxide Trade Update` | `RES-TRADE-EU` / `/resources/eu-titanium-dioxide-anti-dumping-duty/` | Dated detailed trade-measure owner. Render only when content, route and freshness are valid; safe omission leaves no empty wrapper or internal state. |

After RFQ submission, the only page-level expectation is that the team reviews the buyer's requirements/details and contacts the buyer using the information provided. No quotation, price, stock, supply, route, transport or delivery timing is promised.

## 4. Stable fact and source contract

| ID | Permitted visible predicate | Source scope / condition |
|---|---|---|
| `IT-G2-C01` | `Malaysia-origin titanium dioxide` | Site-wide user-approved statement under `MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md`; no automatic certificate, customs or trade treatment. |
| `IT-G2-C02` | Federchimica AVISA lists paints/coatings for wood and industrial uses and printing-ink sectors including flexible packaging and named substrates. | `https://www.federchimica.it/associazioni/avisa`; no publication date shown, checked 7 September 2026. Association scope only, not TiO2 demand, customer coverage, market ranking or Grade fit. |
| `IT-G2-C03` | Garzanti's plastics-industry page describes its own chain from compound/masterbatch to finished articles and presents TiO2 by polymer/end application. | `https://www.garzantispecialties.com/plastiche-polimeri/`; no publication date shown, checked 7 September 2026. Named-company self-description used to frame inputs, not a TiO2 Malaysia capability, endorsement or suitability claim. |
| `IT-G2-C04` | `A Certificate of Origin is available upon request.` | User-approved IT-D02 and decision-register EG-002, Italy visible and semantically equivalent machine-readable scope. Does not promise every-shipment issuance or determine customs acceptance, origin treatment, tariff or duty. |
| `IT-G2-C05` | Italy as destination country and known final city/site/port/handover details are useful request inputs. | Approved IT-D01 plus current RFQ receiver context. Buyer may continue with unknown details; no location, route, availability or timing is promised. |

No named Grade is recommended for Italy. No Italy office, warehouse/inventory, customer, Italian-language service, price, MOQ, stock, capacity, packaging availability, fixed lead time, Incoterm, freight, transport route, quotation outcome, customs result or trade-remedy outcome is created.

## 5. SEO, GEO and Schema contract

| Element | Exact contract |
|---|---|
| H1 | `Titanium Dioxide Supplier for Italy` |
| SEO title | `Titanium Dioxide Supplier for Italy | TiO2 Malaysia` |
| Meta description | `Evaluate Malaysia-origin titanium dioxide for coatings, compound, masterbatch and packaging-printing projects in Italy. Review products, documents and quote inputs.` |
| Canonical | `https://tio2malaysia.com/markets/italy/` |
| Language | `en` |
| Robots / sitemap | No publication or indexing authorization is created by this content contract. |
| GEO direct answer | Reuse the visible Hero: evaluate Malaysia-origin industrial TiO2 for delivery to Italy, starting with known product/application context and continuing to Products or RFQ. |
| Required Schema candidates | `WebPage`, `BreadcrumbList` only. |
| Prohibited Schema | `LocalBusiness`, `Product`, `ProductGroup`, `Offer`, `FAQPage`, `QAPage`, local warehouse/office, hidden Grade recommendation, inventory, route or trade result. |

Machine-readable content must use the same visible Italy destination, Malaysia-origin, approved COO, industry-source and owner-boundary meaning. The breadcrumb relation is `Home → Markets → European Union → Italy` even though the approved Italy URL is a sibling path.

## 6. Shared-owner references and conditional behavior

- Global Chrome: `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; Markets is the current navigation item and buyer-visible `CURRENT` count is zero.
- RFQ: current `CONV-RFQ` owner; Italy context remains visible/editable and an unknown Grade uses `Not sure / Need help`.
- Documents: current `CONV-DOC` owner; Country/Region is company location only and is not populated from Italy destination context.
- Sample: current `CONV-SAMPLE` owner; submission remains a request for review rather than approval or dispatch.
- Products: `PRODUCT-000_CONTENT_ARCHITECTURE_V0.3.md` and current relationship matrix; neutral mapping only.
- Applications: current registered Coatings, Plastics, Masterbatch and Printing Inks owners; their route/content state must be verified before rendering.

If a downstream route is not valid at implementation, omit its CTA without an empty card, dangling punctuation or governance text. This implementation dependency does not enter Buyer Copy.

## 7. Contract-changing future proposals

Any future proposal to add an Italy office or warehouse/inventory, Italian-language support, named customers, packaging availability, a named Italy route, fixed lead time, Grade-country recommendation, customs treatment or delivery commitment requires a scoped fact decision and a new contract version.
