# RES-TRADE-IN Gate 2 Full Copy Buyer Review V0.1

## 1. Review control

- **Review ID:** `RES-TRADE-IN-G2-FULL-BR-01`
- **Review Agent:** Gate 2 Buyer Review Agent V0.5
- **Reviewed B:** `RES-TRADE-IN_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`
- **Reviewed B SHA-256:** `473338F53474F01679CE528B576FE3823C09CDB0AFB10DD5620EA9818B67957C`
- **Reviewed C:** `RES-TRADE-IN_GATE2_CONTENT_CONTRACT_V0.1.md`
- **Reviewed C SHA-256:** `5FE907038D4D08708F7C447AEF65EE3C6C2CAF5C926E273B824230DD7EE0354F`
- **Official-source check date:** 2026-09-07
- **Verdict:** `FINDINGS_REQUIRE_REVISION`
- **Required Finding:** `RES-TRADE-IN-G2-BR-F01`

The actual B was read in full from the SEO fields through the final freshness sentence before A, C, the fresh official recheck or the Execution self-check was considered. Discovery continued to the page end after the issue was found.

## 2. Highest-risk action and burden

The highest-risk buyer task is using the six-row recommendation table. Trace: **India importer/compliance reader → compares exact product, origin, country of export and producing legal entity → checks any later Ministry of Finance/CBIC implementation text plus the specified commercial invoice → obtains recommendation-path context only, not a current payable amount or shipment determination.**

The copy supports that result. It labels the table and every amount as recommended, keeps the two USD 681 paths separate, makes exact entity/origin/export conditions cumulative, places the valid-invoice condition in the future-notification context and refuses to assign a row. The primary India procurement CTA and secondary DGTR-case CTA also reach the described receivers without promising a customs result.

## 3. Weakest Buyer Copy sentence

> No material case event change from the 6 September Gate 1 check was located.

`Gate 1` is an internal project stage with no meaning for a buyer. It makes a public freshness statement depend on an undisclosed internal checkpoint and directly leaks control language into Buyer Copy. The preceding sentence already gives the useful public facts: the latest displayed event, current check date and DGTR page update date. F01 requires removal or a public-source rewrite.

## 4. Page-specific value and incomplete-information path

The page has strong India-specific value. It reconciles the quashed 2025 findings/levy with DGTR's 3 August 2026 remand recommendation, reproduces all six path-specific amounts and tells the buyer what would still need verification before any import-cost decision. The eight modules are justified by the legal stages, path table, exclusions and charge separation. The repeated `recommendation, not current duty` qualifier appears at the points where a buyer could otherwise misread an amount; it is not empty disclaimer stacking.

The incomplete-information path is accurate. Product/form/composition/use, indicative classification, origin, export country, exact producer/exporter entity, invoice issuer/declaration, relevant dates, value/currency and supporting records remain unresolved until checked against a current implementing notification and tariff sources. Malaysia-origin wording produces no automatic non-application, preference, exemption, BCD, IGST or zero-duty result.

Product Hub remains neutral. RFQ accepts a known Product / Grade or `Not sure / Need help`, supports required or estimated quantity in metric tonnes and limits the result to team review and later contact. It does not recommend a Grade or determine classification, origin, duty, tax or clearance. Multiple Grade/document selection is outside this trade page's task and no false multi-selection behavior is introduced.

## 5. Indian official-source precision

The source challenge is triggered and otherwise passes using only DGTR, Ministry of Finance/Department of Revenue, CBIC, eGazette and ICEGATE materials.

- The DGTR remand finding records that the 12 February 2025 final findings and Notification No. 12/2025-Customs (ADD) dated 10 May 2025 were quashed on 22 September 2025. B does not reuse that levy as current.
- Paragraph 210 says duties after remand can be imposed only when notified by the Ministry of Finance. Paragraphs 231–233 recommend a definitive measure and a five-year period from a future Central Government notification. B keeps recommendation, future notification and payable duty separate.
- The 7 September official recheck did not locate a later matching implementation notification through the checked official entry points; dynamic portal limitations prevent an absolute absence conclusion. B accurately uses dated, discovery-bounded wording.
- All six table paths match the DGTR table. Rows 5 and 6 remain distinct: China-origin/non-China-export/producer outside rows 1–4, and non-China-origin/China-export/any producer. Both remain USD 681/MT without becoming a universal rate.
- The exact named entities and four non-sampled cooperative producers match the official table/footnote. The valid commercial invoice, dated signed declaration, identified invoice-issuer official, producer details, all-other-producer fallback and Customs-verification qualifier remain joined.
- The PUC origin/export scope, indicative tariff items `28230010`, `32061110`, `32061190`, detailed exclusions and textile-printing exception match the DGTR finding. The page does not classify a shipment.
- Anti-dumping, BCD and IGST remain separate. The 18% figure is presented only as qualified CBIC schedule context for heading 3206 and the stated Chapter 28 category, with no transaction rate, exemption, customs value or landed-cost conclusion.

SEO title/meta, GEO direct-answer direction and proposed `WebPage` plus `BreadcrumbList` Schema match the visible status. No hidden implemented-rate or Malaysia-origin conclusion appears in C.

## 6. Finding

### `RES-TRADE-IN-G2-BR-F01` — Important — Required

**Location:** final sentence under `What changed from 2024 to 2026`.

**Buyer impact:** A buyer cannot interpret `Gate 1 check`, and the phrase exposes internal governance in a public status explanation. It weakens confidence in which official source and date support the current statement.

**Required revision:** Remove the sentence, or rewrite it solely in public terms using the DGTR case page and 7 September 2026 check. Do not mention Gate numbers, internal baselines, manifests, review stages or project-control chronology.

**Acceptance conditions:**

- no internal `Gate 1` or equivalent control language remains in Buyer Copy;
- the latest displayed DGTR event remains the 3 August 2026 remand final findings as checked on 7 September;
- the DGTR page's displayed 2 September update date may remain;
- any no-later-event statement stays dated and discovery-bounded rather than absolute;
- Hero recommendation-versus-implementation wording and the separate no-notification discovery boundary do not regress.

## 7. Preserve and next responsibility

Preserve the Hero distinction, six recommendation paths and all amounts, named entities, invoice conditions, complete exclusions, textile-printing exception, indicative-code qualifier, ADD/BCD/IGST separation, Malaysia-origin boundary, shipment checklist, CTA/RFQ behavior, official links and visible/machine parity.

**Next responsibility:** Gate 2 Execution Agent makes the single targeted Buyer Copy revision for F01 and aligns C only if necessary, followed by independent re-review. This review does not approve Gate 2 or authorize Gate 3.
