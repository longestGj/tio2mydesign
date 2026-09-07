# RES-TRADE-EU Gate 2 Content Contract V0.2

## 0. Control

| Field | Value |
|---|---|
| Page ID | `RES-TRADE-EU` |
| URL | `/resources/eu-titanium-dioxide-anti-dumping-duty/` |
| Artifact | C — Stable page-specific content contract |
| Version | V0.2 |
| Status | `DRAFT_FOR_BUYER_REVIEW` |
| Date | 2026-09-07 |

Shared Market, Product, RFQ, Global Chrome and Resource contracts remain authoritative. This file records the page-specific current-fact, source and action rules needed downstream.

## 1. Identity and ownership

| Field | Contract |
|---|---|
| Page type | Dated EU market and trade update |
| Primary intent | Current EU titanium dioxide anti-dumping measure and shipment-input preparation |
| Primary keyword | `eu titanium dioxide anti dumping duty` |
| Owner | `RES-TRADE-EU` owns detailed dated measure/procedure status |
| Adjacent owner | `MARKET-EU-001` owns EU supplier/product procurement; `PRODUCT-000` owns Grade exploration; `CONV-RFQ` owns quotation intake |
| Mapping | Registered `PLANNED_CONTENT`; route-live, sitemap, indexing and publication remain unapproved |

## 2. Fixed module and action contract

Order:

1. Hero — dated direct answer.
2. What Is in Force and What Is Still Under Review.
3. Read the Written Scope and Fixed-Duty Table.
4. Prepare a Shipment-Specific Assessment.
5. Keep Anti-Dumping, Ordinary Tariff and VAT Separate.
6. Continue with the Correct Owner.

| Priority | Action | Target | Receiver boundary |
|---|---|---|---|
| Primary | `Review EU Procurement Options` | `/markets/european-union/` | Market owner provides supplier/product/application context; no customs outcome |
| Secondary | `Check the Official EU Measure` | EUR-Lex Regulation 2025/4 | Opens the controlling legal text; page does not interpret it for a shipment |
| Supporting | `Explore titanium dioxide Grades` | `/products/` | Neutral Grade/application exploration; no trade-based recommendation |
| Conditional | `Request a Quote` | `/request-a-quote/` | Commercial intake; accepts Product/Grade or `Not sure / Need help`, application, positive MT quantity and destination; no classification, origin, duty, tax or clearance result |

## 3. Current legal-fact contract

- Fresh official recheck: 7 September 2026, recorded in `RES-TRADE-EU_GATE2_FRESH_OFFICIAL_RECHECK_2026-09-07.md`.
- EUR-Lex marks Regulation (EU) 2025/4 in force. It was published 9 January 2025 and entered into force 10 January 2025.
- Written scope: titanium dioxide in all forms, including titanium oxides and pigments/preparations based on titanium dioxide, with at least 80% TiO2 by weight on a dry-matter basis, all particle sizes, originating in the People's Republic of China.
- Classification references: CN `ex 2823 00 00`, `ex 3206 11 00`; TARIC `2823 00 00 10`, `2823 00 00 30`, `3206 11 00 10`, `3206 11 00 30`. The notice says codes are informational.
- Fixed table: LB Group EUR 0.74/kg (`89CB`); Anhui Gold Star Group EUR 0.25/kg (`89CC`); other cooperating Annex companies EUR 0.64/kg (applicable Annex code); all other PRC-origin imports EUR 0.74/kg (`8999`). The two group labels summarize only the specific producing legal entities named in Article 1(2); group association or an additional code alone is insufficient.
- An individual rate requires the exact producing legal entity, its applicable TARIC additional code and the regulation-specified valid commercial invoice. The Annex row likewise requires the exact listed entity, company-specific code and specified invoice. If these conditions are not met, the all-other PRC-origin rate applies. Customs can perform further checks; the page cannot decide producer identity or the applicable shipment rate.
- Article 2 is limited to defined goods imported for use in producing white graphic inks for printing and subject to the Union Customs Code end-use procedure, including Article 254.
- Notice C/2026/4533 was published 25 August 2026 and reopened an absorption reinvestigation. Investigation period: 1 July 2025–30 June 2026. Stated timetable: normally six months, no later than nine months from publication.
- The notice permits possible future recalculation after an affirmative result, capped at twice the amounts imposed under 2025/4. It does not set a present replacement rate and identifies 2025/4 measures as in force.

## 4. Prohibited outcomes and semantic limits

- No page, metadata, GEO answer or Schema may calculate or determine classification, customs origin, measure applicability, duty/tax amount, landed cost, exemption eligibility, clearance, preferential treatment or procurement outcome.
- `Malaysia-origin titanium dioxide` is an approved product-origin statement but does not automatically mean the measure is inapplicable or zero for a shipment.
- Do not turn producer categories or additional codes into a producer-identity decision.
- Do not present the Article 2 provision as a general printing-ink exemption or as a method for avoidance.
- Do not present the reinvestigation's possible statutory maximum as a current, expected or forecast rate.
- Anti-dumping duty, ordinary customs tariff and import VAT remain separate checks. No ordinary-tariff or VAT percentage is approved here.
- Visible and machine-readable facts must use the same source, scope, status and dates.

## 5. SEO, GEO and Schema

| Element | Direction |
|---|---|
| SEO title | `EU Titanium Dioxide Anti-Dumping Duty Update | TiO2 Malaysia` |
| Meta description | `Check the current EU anti-dumping measure for specified China-origin titanium dioxide, the 2026 reinvestigation and shipment inputs to verify.` |
| H1 | `EU Titanium Dioxide Anti-Dumping Duty: Current Measure and 2026 Review` |
| Canonical | Direction: `https://tio2malaysia.com/resources/eu-titanium-dioxide-anti-dumping-duty/`; implementation pending later Gate |
| Indexing | No current indexing/sitemap approval; requires content approval, route readiness and freshness check |
| Schema | `WebPage` + `BreadcrumbList`; no TradeAction, Product, Offer, FAQ or duty-result node |
| GEO direct answer | Regulation 2025/4 in force as checked 7 Sep 2026; Notice C/2026/4533 reopened a pending procedure and did not itself replace the fixed table |

## 6. Freshness and stale handling

- Public `Last reviewed`: 7 September 2026.
- Maximum recheck while the procedure remains active: 30 calendar days; next due no later than 7 October 2026.
- Event-triggered recheck: within two business days of a new official notice, regulation/amendment, result, judgment or relevant TARIC change.
- If current status, rate, scope or procedure facts become due or unverified, suppress affected Hub summary, GEO answer and machine-readable facts rather than using the last verified state as fallback.

## 7. Gate state

`A = DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED`

`B = DRAFT_FOR_BUYER_REVIEW`

`C = DRAFT_FOR_BUYER_REVIEW`

`GATE2 = OPEN`

`GATE3 = NOT_STARTED / NOT_AUTHORIZED`
