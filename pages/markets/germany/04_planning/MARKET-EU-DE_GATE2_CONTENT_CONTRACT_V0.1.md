# MARKET-EU-DE Gate 2 Content Contract V0.1

## 1. Identity and stable positioning

| Field | Contract value |
|---|---|
| Page ID | `MARKET-EU-DE` |
| Language / destination | EN / Germany |
| URL | `/markets/germany/` |
| Page type | Market procurement landing page |
| Primary keyword | `titanium dioxide supplier germany` |
| Secondary keywords | `tio2 supplier germany`; `malaysia titanium dioxide germany` |
| Parent content owner | `MARKET-EU-001` / `/markets/european-union/` |
| Current navigation key | `markets` |
| Visible-copy authority | `MARKET-EU-DE_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`, between `BUYER_COPY_START` and `BUYER_COPY_END` |

The page owns Germany-modified supplier and procurement intent. It adds German industrial-use context and Germany destination preparation. EU-wide importing roles, compliance/customs context and dated trade detail remain with the EU Market and EU Trade Resource owners.

## 2. Fixed page-specific module order

1. `DE-01` — Hero: Germany destination and Malaysia-origin supply identity.
2. `DE-02` — Dated German coatings and plastics-processing contexts with application prompts.
3. `DE-03` — Product/Application evaluation path without a Germany-specific Grade assignment.
4. `DE-04` — Documents and Sample receiver choice.
5. `DE-05` — Germany destination brief, including port/handover versus final receiving location.
6. `DE-06` — EU parent and dated trade-owner handoff.
7. `DE-07` — Germany RFQ preparation and receiver expectation.

Module responsibilities and order are stable for this candidate. Shared Header/Footer remain owner content and are not duplicated here.

## 3. Page-specific action contract

| B location / action | Target | Page-specific context and limit |
|---|---|---|
| `DE-01`, `DE-07` / `Request a Quote` | `CONV-RFQ` / `/request-a-quote/` | Carry `Germany` as visible, editable `Destination Country` context and `MARKET-EU-DE` as internal source attribution. Do not infer Product/Grade, Application, quantity, port, city, handover point, packaging, timing or document need. The receiver accepts `Not sure / Need help`, required or estimated MT quantity and other known context. |
| `DE-01`, `DE-03` / `Explore Products`, `Product Hub` | `PRODUCT-000` / `/products/` | Neutral Grade/application/process exploration only. No Germany-specific availability, selection, ranking or suitability relationship. |
| `DE-02` / Coatings, Plastics, Masterbatch links | `APP-COAT`, `APP-PLAS`, `APP-MB` | Application owners receive the stated buyer task. The German industry examples do not preselect a Grade or establish country-specific product suitability. |
| `DE-04` / `Request Documents` | `CONV-DOC` / `/request-documents/` | Carry internal source attribution only. Do not carry Germany as a document-applicability or destination field. One Product Grade is required by the current receiver; availability and applicable scope remain subject to human review. |
| `DE-04` / `Request a Sample` | `CONV-SAMPLE` / `/request-sample/` | Carries the buyer to the Sample owner to describe an application/evaluation request. No sample approval, quantity, freight, lead time or delivery result is promised. |
| `DE-06` / `EU Procurement Overview` | `MARKET-EU-001` / `/markets/european-union/` | EU-wide importing roles, document/compliance, origin and general customs context. Germany application/destination responsibility remains here. |
| `DE-06` / `EU Titanium Dioxide Trade Update` | `RES-TRADE-EU` / `/resources/eu-titanium-dioxide-anti-dumping-duty/` | Dated detailed trade-measure owner. Render the link only when its content/route/freshness state is valid; safe omission leaves no empty wrapper or internal state. |

After RFQ submission, the only page-level expectation is: the team reviews the buyer's requirements/details and contacts the buyer using the information provided. No quotation, price, stock, supply, route, transport or delivery timing is promised.

## 4. Stable fact and source contract

| ID | Permitted visible predicate | Source scope / condition |
|---|---|---|
| `DE-G2-C01` | `Malaysia-origin titanium dioxide` | Site-wide user-approved statement under `MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md`; no automatic certificate, customs or trade treatment. |
| `DE-G2-C02` | VdL's 2025 German coatings review lists automotive OEM, vehicle-refinish and metal-products coatings among industrial fields. | `https://www.wirsindfarbe.de/statistiken/deutscher-lackmarkt-2025`; source date 11 February 2026. This is German industry context, not a TiO2 Malaysia customer, qualification, market-share or Grade claim. |
| `DE-G2-C03` | GKV says Germany's plastics-processing industry produces packaging, construction products and technical parts, among other products. | `https://www.gkv.de/de/service/presse/kunststoffverarbeitung-erneut-im-minus.html`; published 18 February 2026 and describes 2025 conditions. It does not establish use of any TiO2 Malaysia Grade. |
| `DE-G2-C04` | Hamburg Port Authority describes the Port Railway as linking transshipment companies with the European rail network. | `https://www.hamburg-port-authority.de/en/port-railway`; no publication date shown, checked 7 September 2026. It is infrastructure context only and does not establish a TiO2 Malaysia route, mode, cost, capacity or lead time. |
| `DE-G2-C05` | Germany as destination country and a known final receiving location/port/handover point are useful request inputs. | Approved DE-D01 plus current RFQ receiver context. This is a buyer preparation instruction, not evidence that every location can be served. |

`DE-D02` remains outside visible copy, metadata, Schema, social fields, ALT and hidden payloads: no German office/warehouse/inventory, German-language service or Germany-specific Certificate of Origin statement.

No named Grade is recommended for Germany. No price, MOQ, stock, capacity, packaging availability, fixed lead time, Incoterm, freight, transport route, quotation outcome, customs result or trade-remedy outcome is created.

## 5. SEO, GEO and Schema contract

| Element | Exact contract |
|---|---|
| H1 | `Titanium Dioxide Supplier for Germany` |
| SEO title | `Titanium Dioxide Supplier for Germany | TiO2 Malaysia` |
| Meta description | `Evaluate Malaysia-origin titanium dioxide for coatings, plastics and masterbatch procurement in Germany. Review products, documents, samples and quote inputs.` |
| Canonical | `https://tio2malaysia.com/markets/germany/` |
| Language | `en` |
| Robots / sitemap | No publication or indexing authorization is created at Gate 2. |
| GEO direct answer | Reuse the visible Hero: Malaysia-origin industrial TiO2 evaluation for delivery to Germany, starting with application and known quantity/destination context. |
| Required Schema candidates | `WebPage`, `BreadcrumbList` only. |
| Prohibited Schema | `LocalBusiness`, `Product`, `ProductGroup`, `Offer`, `FAQPage`, `QAPage`, local warehouse/office, hidden Grade recommendation, inventory, route or trade result. |

Machine-readable content must use the same visible Germany destination, Malaysia-origin, German industry-source and owner-boundary meaning. The breadcrumb relation is `Home → Markets → European Union → Germany` even though the approved Germany URL is a sibling path.

## 6. Shared-owner references and conditional behavior

- Global Chrome: `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; Markets is the current navigation item and buyer-visible `CURRENT` count is zero.
- RFQ: current `CONV-RFQ` owner; Germany context remains visible/editable and an unknown Grade uses `Not sure / Need help`.
- Documents: current `CONV-DOC` owner; Country/Region is company location only and is not populated from Germany destination context.
- Sample: current `CONV-SAMPLE` owner; submission remains a request for review rather than approval or dispatch.
- Products: `PRODUCT-000_CONTENT_ARCHITECTURE_V0.3.md` and current relationship matrix; neutral mapping only.
- Applications: current registered Coatings, Plastics and Masterbatch owners; their final route/content state must be verified before rendering.

If a downstream route is not valid at implementation, omit its CTA without an empty card, dangling punctuation or governance text. This later implementation dependency does not enter Buyer Copy.

## 7. Review-changing open items

- Independent Buyer Review must confirm that DE-02 and DE-05 provide Germany-specific value and do not overstate VdL, GKV or Hamburg Port Authority.
- Any future proposal to add a German warehouse/inventory, German-language support, Germany-specific COO service, named route or lead time requires a scoped fact decision and a new contract version.
- Gate 2 remains open. Gate 3, implementation, publication and indexing are not authorized.
