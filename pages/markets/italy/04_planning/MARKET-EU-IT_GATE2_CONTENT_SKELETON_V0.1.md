# MARKET-EU-IT Gate 2 Content Skeleton V0.1

## 1. Control and page identity

| Field | Value |
|---|---|
| Page ID / URL | `MARKET-EU-IT` / `/markets/italy/` |
| Page type / language | Market procurement landing page / EN |
| Site scope | `tio2-my` |
| Primary keyword | `titanium dioxide supplier italy` |
| Approved direction | `IT-D01`: Italy industrial procurement, supplier/product first |
| Approved fact | `IT-D02`: `A Certificate of Origin is available upon request.` |
| Primary / secondary action | `Request a Quote` / `Explore Products` |
| Current navigation key | `markets` |
| Candidate state | `DRAFT_FOR_INDEPENDENT_BUYER_REVIEW / NOT_USER_APPROVED` |

This skeleton defines the reading order and module responsibilities for the complete Buyer Copy candidate. It does not create a page, route, Grade recommendation, quotation result or Gate transition.

## 2. Buyer task and page split

The page helps a buyer turn a broad Italy supplier search into an evaluation brief for a Malaysia-origin industrial titanium dioxide source. Italy owns Italy-modified supplier/procurement intent, local application examples and destination preparation. The EU Market owner retains EU-wide importing, document/compliance and customs context; `RES-TRADE-EU` retains dated trade-measure detail. Products and Applications retain technical selection; Documents and Conversion retain their receiving workflows.

The Italy-specific value is task-oriented:

- wood and industrial coatings: describe system, substrate and end use;
- compound/masterbatch: describe polymer or carrier, process and downstream end use;
- packaging printing: describe ink system, printing process, substrate or format and end use;
- destination preparation: distinguish Italy as country from any known final site and port/handover point.

None of these prompts selects a Grade or claims that TiO2 Malaysia serves a named Italian customer or sector.

## 3. Fixed seven-module order

| Order | ID | Module | Buyer question | Required content and action |
|---:|---|---|---|---|
| 1 | `IT-01` | Hero | What source can I evaluate for Italy, and what can I do now? | Malaysia-origin industrial TiO2 for an Italy destination; primary RFQ and secondary Product Hub. No local-stock or delivery implication. |
| 2 | `IT-02` | Define the Italian industrial project | What application context should I prepare? | Bounded AVISA and Garzanti contexts; separate coatings, compound/masterbatch and packaging-printing prompts; four Application-owner links. |
| 3 | `IT-03` | Review products | How do I continue without an Italy-specific Grade list? | Product Hub; country/sector does not select a Grade; unknown Grade may use `Not sure / Need help`. |
| 4 | `IT-04` | Documents and samples | How do I request origin/technical documents or a sample? | Exact approved COO statement; known-Grade Documents path; controlled review boundary; Sample path and review boundary. |
| 5 | `IT-05` | Italy destination brief | What shipment context should I prepare? | Italy country, final city/site, known port/handover, application, known/unknown Grade, required/estimated MT, packaging/timing/document needs if known. |
| 6 | `IT-06` | EU owner split | Where do EU-wide and dated trade checks belong? | EU Procurement Overview and EU Trade Update paths; no duty, origin or classification result here. |
| 7 | `IT-07` | Final RFQ | What do I send, and what happens next? | RFQ accepts `Not sure / Need help`, required/estimated MT and Italy destination; team reviews requirements/details and contacts buyer using supplied information. |

## 4. Evidence and expression plan

| Claim ID | Planned visible expression | Source and boundary |
|---|---|---|
| `IT-G2-C01` | Malaysia-origin titanium dioxide | Site-wide user-approved origin authority; no customs/tariff inference. |
| `IT-G2-C02` | Federchimica AVISA lists wood and industrial paints/coatings and printing-ink sectors including packaging-related substrates. | `https://www.federchimica.it/associazioni/avisa`; checked 7 September 2026. Association sector scope only, not TiO2 demand, customer coverage or Grade fit. |
| `IT-G2-C03` | Garzanti's own plastics page describes a compound/masterbatch-to-finished-article chain and TiO2 by polymer/end application. | `https://www.garzantispecialties.com/plastiche-polimeri/`; checked 7 September 2026. Named company self-description only, used to frame inputs, not a TiO2 Malaysia capability or suitability claim. |
| `IT-G2-C04` | `A Certificate of Origin is available upon request.` | IT-D02 and decision register EG-002, Italy scope. No every-shipment, customs acceptance or treatment conclusion. |
| `IT-G2-C05` | Italy destination and known city/site/port/handover details are useful RFQ inputs. | IT-D01 plus current RFQ receiver contract. This does not promise that a location, route or timing can be served. |

Direct fetches of the two external pages timed out during the 7 September check. Targeted same-domain search returned the exact landing pages and current text supporting the bounded predicates; the Gate 1 captures remain the saved evidence. The Buyer Copy uses no market size, share, ranking, capacity, stock or customer inference.

## 5. Action and incomplete-information behavior

- Hero primary action: `Request a Quote` → `/request-a-quote/`.
- Hero secondary action: `Explore Products` → `/products/`.
- Application links: Coatings, Plastics, Masterbatch and Printing Inks owners; no Grade or country fit is preselected.
- Documents: one known Product Grade is required by the current receiver; document types are buyer-selected; availability and applicable scope are reviewed.
- Sample: buyer supplies application and evaluation context; submission does not approve sample, quantity or delivery.
- RFQ: `Not sure / Need help` is valid; quantity may be required or estimated in metric tonnes; Italy is visible/editable destination context.
- If city/site, port/handover, packaging, timing or document details are unknown, the buyer may submit the context already known. No field is invented on this page.

## 6. SEO, GEO and machine-readable plan

- H1: `Titanium Dioxide Supplier for Italy`.
- SEO title: `Titanium Dioxide Supplier for Italy | TiO2 Malaysia`.
- Meta description: `Evaluate Malaysia-origin titanium dioxide for coatings, compound, masterbatch and packaging-printing projects in Italy. Review products, documents and quote inputs.`
- Canonical: `https://tio2malaysia.com/markets/italy/`.
- GEO direct answer: reuse the visible Hero and the Italy-project input paths without adding hidden facts.
- Schema candidates: `WebPage`, `BreadcrumbList` only.
- Prohibited: `LocalBusiness`, `Product`, `ProductGroup`, `Offer`, `FAQPage`, `QAPage`, hidden Grade-country mapping, local inventory/office/language-support or delivery claims.

## 7. Preservation and review focus

Preserve IT-D01/IT-D02, the Italy/EU owner split, Product V0.3 neutral relationship boundary, fixed Global Chrome and the current receiver behavior. Do not add Italy inventory, customers, Italian-language support, fixed lead time, Grade recommendation/equivalence, price, tax, duty, customs treatment or delivery commitment.

Independent Buyer Review should test the final B from breadcrumb through the source/date line, with particular attention to the COO action boundary, the density of four application paths, natural English in the industry prompts and whether the Italy-specific blocks help prepare a real request.
