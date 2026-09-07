# RES-TRADE-IN · Gate 1 Research Report V0.1

- Review ID: `RES-TRADE-IN-G1-01`.
- Page / URL: India Titanium Dioxide Trade Update / `/resources/india-titanium-dioxide-anti-dumping-duty/`.
- Date: 2026-09-06.
- Status: `APPROVED / CLOSED`.
- Gate 1: `APPROVED / CLOSED` by user decision `IN-TRADE-D01` on 2026-09-06.
- Gate 2+: `NOT_STARTED / NOT_AUTHORIZED`.
- Scope: reader, search task, answer obligations, evidence/freshness, page boundary and CTA direction only.
- Execution: the Agent completed the project Search Intent Evidence Skill, preserved its raw inputs, and read the full Skill report before making the judgments below.

## 1. Reused inputs and new research

| Category | Input / action | Result |
|---|---|---|
| Reused | Registered Page ID, URL, keywords, cluster, priority and Resource role | Fixed; no new page or keyword |
| Reused | `MARKET-IN-001` approved Brief/Manifest | Market page remains the India procurement owner |
| Reused | Approved Malaysia-origin and COO-availability facts | Preserved without converting them into a customs result |
| Researched | Exact-query result mix | Historical 2025 levy dominates and creates stale-answer risk |
| Researched | 3 August 2026 DGTR remand final finding | Full 97-page official PDF downloaded and extracted |
| Researched | Current implementation | No later TiO2 Customs (ADD) notification located in targeted DGTR/DoR/CBIC/Gazette checks through 2026-09-06 |
| Researched | Tax-component context | CBIC schedule verifies 18% IGST context; ICEGATE is the current BCD/import-duty lookup path |

## 2. Reader and task decision

The page should serve India procurement, import, customs, finance and technical-sourcing teams that need a current status before accepting an old or newly quoted anti-dumping rate. The task is to reconcile three separate legal stages:

1. the 2025 DGTR recommendation and Ministry of Finance levy;
2. the High Court's quashing and remand; and
3. the 3 August 2026 DGTR recommendation, which still requires a separate Ministry of Finance notification.

This is not a supplier landing page and not a page for choosing a TiO2 grade.

## 3. Current status conclusion

The strongest bounded Gate 1 conclusion is:

> The 2025 TiO2 anti-dumping levy was quashed. DGTR issued a fresh final finding on 3 August 2026 recommending USD 460-681 per MT for specified origin/export and producer paths, but no later Ministry of Finance/CBIC implementing notification was located in the official checks through 6 September 2026. Those amounts are recommended, not verified as current payable duty.

This avoids both false negatives and false positives. It does not claim that a notification can never exist; it records exactly what the official-source check established and requires refresh.

## 4. Authority and stage distinction

DGTR investigates and recommends. The Central Government/Ministry of Finance imposes through a notification. The current DGTR finding makes this separation explicit in §210 and states in §233 that the recommended five-year period would run from the date of the notification to be issued.

Therefore:

- the 2026 duty table is suitable for a reader-facing `DGTR recommendation` table;
- it is not suitable for a `current India duty rate` table;
- any future implementing notification must be rechecked for exact scope, amounts, effective date and conditions rather than assumed identical.

## 5. Product, origin and exclusion scope

The recommendation concerns defined Titanium Dioxide originating in or exported from China PR. It lists tariff items 28230010, 32061110 and 32061190, but says classification is indicative and PUC description governs.

The exclusion set must preserve the official detail: food, pharma, skin-care, specified textile/fibre uses, décor-paper use at fibre/pulp stage and nano/ultrafine TiO2 below 100 nm. The textile exclusion does not extend to TiO2 used as pigment for printing over textile, garment, cloth or fabric.

This evidence does not authorise the page to classify a shipment.

## 6. Recommended producer/category table

| Category in DGTR recommendation | Recommended amount |
|---|---:|
| Anhui Gold Star group | USD 609/MT |
| Shandong Jinhai / Xianghai group | USD 563/MT |
| LB Group named producers | USD 460/MT |
| Four named non-sampled cooperative producers | USD 510/MT |
| China-origin goods exported from a country other than China, producer other than rows 1-4 | USD 681/MT |
| Goods originating in a country other than China and exported from China, any producer | USD 681/MT |

The table must appear only with `recommended` and `not verified in force` labels. The individual rates in the finding are also conditional on the specified signed commercial-invoice declaration; otherwise the all-other rate would apply if a measure is implemented.

## 7. Ordinary duty, IGST and anti-dumping distinction

- Basic Customs Duty is classification/date/origin dependent. No current BCD percentage was obtained, so the page should direct the reader to ICEGATE rather than guess.
- The current CBIC GST schedule shows 18% IGST for Chapter 28 general inorganic chemicals and heading 3206.
- Anti-dumping duty is a separate additional measure whose amount and applicability depend on the measure's product/origin/exporter/producer terms and a valid implementing notification.

Gate 2 may explain this as a landed-cost checklist, not provide transaction-specific tax advice.

## 8. Relationship to Malaysia-origin and COO

`Malaysia-origin titanium dioxide` is approved for public use, and COO availability is approved. Those facts may help a buyer understand what documents to request. They do not alone establish a shipment's tariff classification, non-preferential-origin finding, applicable rate or final customs assessment. This is an anti-inference boundary, not a denial of the approved facts.

## 9. Ownership and CTA judgment

- `RES-TRADE-IN` owns the detailed current trade-remedy status and official verification path.
- `MARKET-IN-001` owns commercial India procurement and supplier continuation.
- Primary CTA: `Review India Procurement Options` → `/markets/india/`.
- Secondary CTA: `Check the Official DGTR Case File` → official case page.
- Fixed global RFQ remains in shared chrome and does not replace the article's primary task.

## 10. Freshness judgment

Implementation can change after DGTR's recommendation. Current-status wording therefore needs:

- visible `Last reviewed: 6 September 2026`;
- scheduled recheck no later than 6 October 2026;
- recheck within two business days of a new DoR/CBIC notification, DGTR corrigendum, court order or relevant ICEGATE tariff change; and
- stale suppression for current-status snippets, GEO answers and Schema until reverified.

## 11. Gate 2 input after future approval

Gate 2 should receive:

1. the dated direct-answer statement in §3;
2. the legal-stage chronology;
3. PUC/origin/codes/exclusions with their qualification;
4. the producer/category recommendation table and invoice condition;
5. BCD/IGST/ADD separation and buyer verification checklist;
6. ownership, CTA and freshness contracts.

Gate 2 must not paste internal governance language, assert a current payable rate, provide avoidance advice or duplicate `MARKET-IN-001`.

## 12. Execution self-review

| Check | Result |
|---|---|
| Direction and reader task clear | PASS |
| Current legal claims use Indian official sources | PASS |
| 2025 quash and 2026 recommendation separated | PASS |
| Recommendation and implementation separated | PASS |
| Product/origin/codes/exclusions qualified | PASS |
| Producer/category amounts transcribed from official table | PASS |
| BCD, IGST and ADD separated | PASS |
| Resource/Market ownership separated | PASS |
| No avoidance guidance | PASS |
| Approved Malaysia-origin/COO facts preserved without automatic inference | PASS |
| Search metrics not fabricated | PASS — `Unavailable` |
| Freshness actionable | PASS |
| Gate boundary respected | PASS — no Gate 2 copy/order, visual, code or release work |

This self-review does not approve Gate 1. The Agent stops at project-control review.
