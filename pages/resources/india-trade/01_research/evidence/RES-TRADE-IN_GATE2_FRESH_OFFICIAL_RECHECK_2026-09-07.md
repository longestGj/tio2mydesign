# RES-TRADE-IN Gate 2 Fresh Official Recheck — 2026-09-07

## 1. Record identity

| Field | Value |
|---|---|
| Page ID | `RES-TRADE-IN` |
| Recheck date | 2026-09-07 (Asia/Shanghai) |
| Purpose | Gate 2 current-event recheck and buyer-facing source precision |
| Source rule | Current Indian first-party sources only: DGTR, Ministry of Finance/Department of Revenue, CBIC, eGazette and ICEGATE |
| Gate effect | Evidence refresh only; no Gate 2 approval or Gate 3 start |

## 2. Current official observations

| Official source checked | Observation captured on 2026-09-07 | Buyer-copy use |
|---|---|---|
| [DGTR titanium dioxide case page](https://dgtr.gov.in/en/anti-dumping-cases/anti-dumping-investigation-concerning-imports-titanium-dioxide-originating-or) | The event table still ends with `Final Findings` dated 03/08/2026. The page displays `Last Updated: 02 Sep 2026`. | State that the 3 August 2026 remand final findings remained the latest displayed DGTR case event in this check. |
| [DGTR remand final findings](https://dgtr.gov.in/sites/default/files/2026-08/Titanium%20eng%20ncv_signed%20(1).pdf) | Paragraph 210 says the recommended duties can be imposed only when notified by the Ministry of Finance. Paragraphs 232–233 and the duty table recommend amounts by country of origin, country of export and producer. The table contains two separate USD 681 paths. | Label every amount as a DGTR recommendation. Do not call it payable without a later implementation notification. Preserve all row conditions. |
| [CBIC Tax Information Portal notification explorer](https://taxinformation.cbic.gov.in/content-page/explore-notification) | The official notification shell and CBIC tax metadata endpoint were reachable. The dynamic category/year endpoints returned server errors and the search endpoint rejected or failed the attempted request, so a complete portal result list could not be retrieved in this session. Exact official-domain searches did not locate a later titanium-dioxide Customs (ADD) implementation notification. | Use a bounded discovery statement: no later implementation notice was located in the checked official entry points. Do not state that none exists. |
| Ministry of Finance / Department of Revenue official-domain searches | Exact and expanded searches for 2026 titanium dioxide anti-dumping/Customs (ADD) implementation did not return a matching implementation notification in the checked official-domain results. | Supports only the same dated, discovery-bounded statement. |
| [eGazette of India](https://egazette.gov.in/) | The portal did not return a usable titanium-dioxide implementation result in this session; an official-domain result encountered for mica pearl pigment concerned a different product and was excluded. | Do not use the different-product Gazette item. Keep the implementation conclusion bounded. |
| [ICEGATE Customs Duty Calculator](https://www.icegate.gov.in/Webappl/index_imp.jsp) | The import-duty enquiry entry point requires a tariff/description input and can use country-of-origin context for preferential or anti-dumping checks. The live fetch returned an upstream error in this session, so no current BCD figure was retrieved. | Publish no BCD rate. Ask the buyer/importer to run a current transaction-specific query. |
| [CBIC GST goods and services rates](https://cbic-gst.gov.in/hindi/gst-goods-services-rates.html) | The checked official schedule lists heading `3206` at 18% and lists Chapter 28 inorganic chemicals at 18% except goods in exemption or other rate schedules. | Present only qualified rate-schedule context. Do not infer classification, exemption status, import value or total tax. |

## 3. Official search expressions and discovery boundary

The 7 September recheck used exact and expanded searches limited to Indian official domains, including combinations of:

- `Titanium Dioxide`, `3 August 2026`, `anti-dumping`, `Customs (ADD)` and `notification` on `dgtr.gov.in`;
- `Titanium Dioxide`, `2026`, `Customs (ADD)` and `anti dumping` on `taxinformation.cbic.gov.in`;
- the same implementation terms on `dor.gov.in`; and
- `Titanium Dioxide` and `anti-dumping` on `egazette.gov.in`.

Dynamic portal errors and timeouts prevent this record from proving the absolute absence of a notification. The allowable conclusion is limited to what the checked official entry points and results disclosed on this date.

## 4. Event comparison with Gate 1

Gate 1 captured the official position on 6 September 2026: the 2025 final findings and levy had been quashed; the DGTR case page ended with the 3 August 2026 remand final findings; DGTR recommended new path-specific amounts; and no later implementing notification had been located.

The 7 September recheck found **no material event change** in the official sources reviewed:

- the DGTR case timeline still ends with the 3 August 2026 final findings;
- the DGTR page still shows a 2 September 2026 last-update date;
- no matching later titanium-dioxide Ministry of Finance/CBIC implementation notification was located in the checked official entry points and official-domain results; and
- the 2026 amounts therefore remain described as recommendations, not as a current payable duty verified in force.

This comparison does not determine a shipment or prove that every possible official record was accessible through the checked discovery routes.

## 5. Source-precision decisions for Gate 2

Allowed dated statements:

- “As checked on 7 September 2026, the 2025 final findings and levy were quashed.”
- “DGTR issued fresh remand final findings on 3 August 2026 and recommended path-specific amounts.”
- “DGTR says duties can be imposed only when notified by the Ministry of Finance.”
- “No later titanium-dioxide implementation notification was located in the official entry points checked for this update.”
- “The recommendation is not presented as a current payable duty verified in force.”

Prohibited transformations:

- DGTR recommendation → implemented or payable duty;
- USD 681 → a universal all-import rate;
- a named producer group, supplier or invoice → established row eligibility without exact legal-entity and other required facts;
- tariff item → final classification;
- Malaysia origin → automatic exclusion, preferential treatment, exemption or zero duty;
- schedule context → transaction tax or landed-cost result.

## 6. Freshness trigger

Recheck the DGTR case page, Ministry of Finance/CBIC Customs (ADD) notifications, eGazette and ICEGATE before implementation and within the Resource Playbook’s 30-day active/unresolved window. Recheck within two business days after any new implementation notification, DGTR corrigendum, court order or relevant tariff change.
