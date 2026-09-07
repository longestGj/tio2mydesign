# RES-TRADE-IN · Search Intent Evidence Analysis V0.1

## 1. Range, tools and observation conditions

- Page: `RES-TRADE-IN`, `/resources/india-titanium-dioxide-anti-dumping-duty/`.
- Exact query started separately: `india titanium dioxide anti dumping duty`.
- Expanded discovery used official-domain queries for DGTR, Department of Revenue/CBIC, Gazette of India, ICEGATE and the CBIC GST schedule.
- Tools actually used: project `web_search`, `web_fetch/open`, official HTML/PDF capture and full-PDF text extraction.
- Run date: 2026-09-06; market/language: India / English.
- Google-controlled rank/location results and authenticated Semrush volume, KD, CPC and trend were not obtained. Every such metric is `Unavailable`, not zero.
- Raw search observations, official HTML/PDF files, extracted PDF text, hashes and access limitations are retained in the evidence directory and raw index.

## 2. Exact-query observation

The exact query returned the historical 10 May 2025 Gazette notification prominently, together with the 2025 DGTR finding and many secondary articles or videos that describe the 2025 duty as imposed. The same result set also exposed the current DGTR case page and the 3 August 2026 remand finding.

This result mix creates a material stale-answer risk: a searcher can readily mistake the quashed 2025 levy for the current position or treat the 2026 recommended figures as already collectible. The page's principal search task is therefore not a generic anti-dumping explainer. It is a dated status reconciliation based on the current official chain.

## 3. Official-source chain and current interpretation

| Question | Best source | Evidence result |
|---|---|---|
| What happened to the 2025 levy? | DGTR remand final finding, §§1-3 and §210 | The Calcutta High Court quashed the 12 February 2025 findings and Notification No. 12/2025-Customs (ADD); the Authority rejected retroactive application and said duties can only be imposed when notified by the Ministry of Finance. |
| What is the latest DGTR event? | DGTR case page and 3 August 2026 final finding | DGTR issued new final findings in the remand proceeding on 3 August 2026. |
| What did DGTR recommend? | §§231-233 and the appended duty table | Five-year definitive duties from the date of a future notification, with producer/category amounts of USD 609, 563, 460, 510 and 681 per MT. The USD 681 rows separately cover China-origin goods exported from a non-China country by a producer other than rows 1-4, and non-China-origin goods exported from China by any producer. |
| Are those amounts verified in force? | Official DGTR wording plus targeted DoR/CBIC/Gazette searches | No new implementing Customs (ADD) notification was located in the official sources checked as of 6 September 2026. The amounts are therefore `recommended, not verified in force`. |
| Which goods and origin are described? | DGTR §§43-58 and §§231-233 | Titanium Dioxide originating in or exported from China PR, with listed tariff items 28230010, 32061110 and 32061190; classification is indicative and the PUC description controls. |
| Which goods are excluded? | DGTR §§43-58 and duty-table note | Food, pharma, skin-care, specified textile/fibre uses, décor-paper use at fibre/pulp stage, and nano/ultrafine TiO2 below 100 nm; pigment printing on textile/garment/cloth/fabric is not covered by the textile exclusion. |
| How are ordinary customs duty and GST different? | ICEGATE enquiry, CBIC GST rate schedule, Customs Tariff Act portal | BCD/current import charges must be checked by tariff item, origin and date in ICEGATE. The GST schedule currently shows 18% IGST for Chapter 28 general inorganic chemicals and heading 3206. These are separate from any product/origin/producer-specific anti-dumping measure. |

## 4. Selected search intent

Current-status informational intent with a landed-cost/compliance task:

1. reconcile the quashed 2025 levy with the 3 August 2026 DGTR remand recommendation;
2. tell the reader whether the quoted USD/MT figures are a recommendation or a verified payable duty;
3. identify the written product/origin scope and exclusions without deciding a shipment's classification;
4. show why producer/export path and invoice evidence matter if a measure is later implemented;
5. separate ordinary customs duty and import GST from anti-dumping duty; and
6. give an official pre-transaction verification path and a procurement continuation to `MARKET-IN-001`.

## 5. Alternative intents and ownership

| Intent | Treatment |
|---|---|
| `titanium dioxide customs duty india` | Explain that BCD, IGST and anti-dumping duty are different checks; link to ICEGATE rather than hardcode an unverified BCD rate. |
| India TiO2 supplier, sourcing or quote | Route to `MARKET-IN-001`; do not turn this update into a supplier landing page. |
| Exact grade/application selection | Owned by Product pages; this Resource article remains measure-level. |
| Duty avoidance, transshipment or origin manipulation | Reject completely. Correct classification and origin verification may be explained only as compliance inputs. |
| Old 2025 duty amount | Retain only in a clearly dated history; never describe as the current payable measure. |

## 6. Recommended answer architecture leads

These are evidence leads for the execution Agent, not final Gate 2 modules:

- dated direct answer: `DGTR recommended new duties on 3 August 2026, but those amounts are not verified in force because no later Ministry of Finance implementing notification was located in the official checks as of 6 September 2026`;
- concise timeline: initiation → 2025 recommendation and levy → court quash/remand → 2026 recommendation → current verification step;
- product/origin scope and exclusions;
- proposed duty table labelled `DGTR recommendation` rather than `current duty`, preserving the two distinct USD 681 origin/export paths and the row-5 producer limitation;
- ordinary BCD / IGST / anti-dumping distinction;
- buyer checklist: description, tariff item, non-preferential origin, producer, export path, invoice declaration, entry date and latest CBIC/ICEGATE notice;
- official sources and last-reviewed date;
- commercial continuation to `/markets/india/`.

## 7. Counterexamples rejected

- Any statement that India currently levies USD 460-681/MT solely because DGTR recommended it.
- Any statement that Notification No. 12/2025-Customs (ADD) remains effective.
- Any use of news, law-firm, supplier, YouTube or search snippets as the authority for a current rate or effective date.
- Any assertion that all TiO2 under a listed code is necessarily in scope; the official finding says classification is indicative and product description controls.
- Any automatic conclusion that `Malaysia-origin titanium dioxide` makes a particular entry duty-free or determines its customs outcome.
- Any compliance advice intended to bypass or disguise the origin/export path of goods.

## 8. Freshness and limitations

- Current official-source check: 2026-09-06.
- Because an implementing notification could follow the 3 August 2026 recommendation, the maximum scheduled review is 30 calendar days, due no later than 2026-10-06.
- Event-triggered recheck: within two business days of any new Department of Revenue/CBIC Customs (ADD) notification, DGTR corrigendum, court order or applicable ICEGATE tariff update.
- Direct retrieval of the historical Gazette PDF reset at the server. Its imposition text appeared in the official search result, and its existence/quashing is independently recorded in the current DGTR final finding.
- The CBIC instruction locator returned only the JavaScript shell. No public claim depends on the unverified instruction text.
- ICEGATE's current calculator requires login; BCD was not retrieved and is not guessed.
- Google Search Console/local rank and Semrush data: `Unavailable`.

This Skill report supplies the reusable search/evidence analysis. The execution Agent must read this report in full and is responsible for page intent, ownership, CTA, claim status and Gate recommendation.
