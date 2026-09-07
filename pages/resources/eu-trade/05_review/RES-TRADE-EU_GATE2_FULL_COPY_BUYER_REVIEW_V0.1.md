# RES-TRADE-EU Gate 2 Full Copy Buyer Review V0.1

## 1. Review control

- **Review ID:** `RES-TRADE-EU-G2-FULL-BR-01`
- **Review Agent:** Gate 2 Buyer Review Agent V0.5
- **Reviewed file:** `RES-TRADE-EU_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`
- **Reviewed SHA-256:** `1E154BD65587FA564D02AFEB4EDE2A953DE9F6A5D2C83D0E2745D7385E0A61BB`
- **Official-source check date:** 2026-09-07
- **Verdict:** `REVISE_BEFORE_PROJECT_CONTROL_REVIEW`
- **Required Findings:** `RES-TRADE-EU-G2-BR-F01`, `RES-TRADE-EU-G2-BR-F02`

The actual B was read from the Breadcrumb through the final official-source list and `Last reviewed` statement before A, C or the Execution self-check was considered. Discovery then continued across all legal predicates, actions and machine-semantic directions using only current EUR-Lex and European Commission sources.

## 2. Highest-risk action and receiver expectation

> Review EU Procurement Options

Trace: **EU procurement/import reader → opens `/markets/european-union/` → reviews supplier, product and application context → continues a commercial procurement task without receiving a customs classification, origin, duty or clearance result.**

The receiver matches the label and approved owner. The lower repeated action is introduced by an explicit statement that the EU procurement page does not determine customs treatment. The Hero action itself promises only procurement review, and the page contains no duty-safe, avoidance, exemption or guaranteed-origin language. No Finding is required for this action.

The supporting Product Hub and RFQ paths are also accurate. RFQ accepts a known Product / Grade or `Not sure / Need help`, application, positive quantity in metric tonnes and destination. The adjacent sentence keeps submitted information as commercial context and expressly denies any classification, origin, duty, tax or clearance result.

## 3. Weakest Buyer Copy sentence

> The regulation describes titanium dioxide in all forms, as titanium oxides or in pigments and preparations based on titanium dioxide, containing at least 80% titanium dioxide by weight on a dry-matter basis, with all particle sizes.

This is the least scannable sentence. The buyer must hold the legal form list, composition threshold, measurement basis and particle-size scope in one long construction, and `in all forms, as...` is less natural than the surrounding direct language. The meaning is recoverable, but a reader can easily miss the 80% dry-matter threshold or all-particle-size scope. F02 requires a readability revision without shortening the legal meaning.

## 4. Page-specific value and incomplete-information path

The page gives a useful dated answer: Regulation (EU) 2025/4 remains in force; the four current fixed amounts are tied to producer categories and additional-code context; and the August 2026 notice reopened a pending absorption reinvestigation without replacing that table. This is specific EU trade content rather than a generic supplier article.

The incomplete-information path is strong. A reader who does not yet know the shipment's classification, non-preferential origin, exact producer, additional code, invoice condition, import date or end-use procedure is told to keep each input unresolved and obtain current transaction evidence. The page does not infer an answer from a CN/TARIC reference, a producer group name, Malaysia-origin marketing wording or an RFQ submission. The only material gap is the missing named-legal-entity qualifier beside the summarized group rows, recorded in F01.

The Malaysia-origin paragraph correctly treats the approved product-origin statement as one input and does not derive automatic non-application, zero duty, preferential treatment or a customs-origin ruling. Anti-dumping duty, ordinary customs tariff and destination VAT remain separate; no ordinary-tariff or VAT percentage is supplied.

## 5. Official-source fidelity

The highest-risk mapping is the [Regulation (EU) 2025/4 Article 1 table](https://eur-lex.europa.eu/eli/reg_impl/2025/4/oj) → the visible `LB Group` and `Anhui Gold Star Group` rows. The amounts and additional codes are correct, but the summary omits the regulation's restriction to the specifically named legal entities. This is `SUPPORTED_WITH_MISSING_MATERIAL_QUALIFIER` and creates F01.

The remaining material mappings are supported as written:

- EUR-Lex identifies Regulation 2025/4 as in force; it was published 9 January 2025 and entered into force 10 January 2025.
- The product definition, PRC-origin scope, CN/TARIC references, four fixed EUR/kg amounts, valid-commercial-invoice condition, all-other fallback and customs-check statement match the regulation.
- Article 2 is accurately confined to the defined product imported for production of white graphic inks for printing under the Union end-use procedure, particularly Article 254. The copy neither generalizes the exemption nor determines eligibility.
- [Notice C/2026/4533](https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:52026XC04533) identifies the 2025/4 measure as currently in force, reopens an Article 12 absorption reinvestigation, gives the 1 July 2025–30 June 2026 investigation period and the normal six-/maximum nine-month timetable. B correctly presents the twice-existing-duty ceiling only as a possible future boundary, not a current, expected or forecast rate.
- The [European Commission TARIC page](https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en) supports current TARIC checking, tariff/trade-measure separation, additional-code context and the statement that TARIC does not contain national VAT rates.

The dated Hero, source labels, SEO title/meta, GEO direct answer and proposed `WebPage` plus `BreadcrumbList` Schema remain semantically aligned. No machine-readable duty result, product offer or future 2026 rate is introduced.

## 6. Findings

### `RES-TRADE-EU-G2-BR-F01` — Important — Required

**Location:** fixed-duty table and the paragraph immediately below it.

> LB Group | EUR 0.74/kg | 89CB

> Anhui Gold Star Group | EUR 0.25/kg | 89CC

**Buyer impact:** A buyer can read these as rates available to any exporter or producer associated with the named group. Regulation 2025/4 assigns the individual rates to the specific legal entities listed under each group and says those rates are exclusively applicable to products produced by the named legal entities. A matching group label or additional code alone is therefore not a sufficient basis for a shipment-rate assumption.

**Required revision:** Keep the current four-row summary, but place a concise qualifier beside the table stating that the LB and Anhui rates apply only to the legal entities named in Article 1(2), subject to the exact producer and valid-invoice conditions. Listing the named entities in the table is also acceptable if it remains readable. Do not attempt to decide producer identity for the buyer.

**Acceptance conditions:**

- group association is not presented as sufficient for an individual rate;
- the exact producing legal entity, TARIC additional code and valid commercial invoice remain joined conditions;
- the Annex-company row continues to require the applicable company-specific Annex code;
- when the required invoice condition is not met, the all-other PRC-origin rate remains the stated fallback;
- the page still refuses to calculate or determine a shipment's applicable rate.

### `RES-TRADE-EU-G2-BR-F02` — Minor — Required

**Location:** first paragraph under `Read the Written Scope and Fixed-Duty Table`.

**Buyer impact:** The current single sentence is accurate but unnecessarily hard to scan, increasing the chance that a buyer misses one of the controlling scope elements.

**Required revision:** Split or simplify the sentence into direct, natural English while preserving the complete approved scope used in B.

**Acceptance conditions:**

- `all forms`, titanium oxides and pigments/preparations based on titanium dioxide remain covered;
- the minimum 80% TiO2 threshold remains explicitly calculated on a dry-matter basis;
- all particle sizes remain explicit;
- the adjacent PRC-origin limitation remains attached;
- no sentence decides classification or applicability for a shipment.

## 7. Preserve and next responsibility

Preserve the dated current-versus-pending Hero answer; all four EUR/kg amounts and codes; the valid-invoice/all-other fallback; the narrow Article 2 wording; the shipment checklist; the Malaysia-origin non-inference; the anti-dumping/tariff/VAT separation; the current TARIC link; the owner-correct CTA sequence; the official-source dates; and visible/SEO/GEO/Schema parity.

**Next responsibility:** Gate 2 Execution Agent makes targeted revisions for F01 and F02. An independent Gate 2 Review Agent then verifies the table qualifier, revised product-definition copy and the complete page for regression. Gate 2 remains open; this review does not authorize Gate 3.
