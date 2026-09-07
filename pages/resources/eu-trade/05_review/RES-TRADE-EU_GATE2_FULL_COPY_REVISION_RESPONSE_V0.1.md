# RES-TRADE-EU Gate 2 Full Copy Revision Response V0.1

## Control

| Field | Value |
|---|---|
| Page ID | `RES-TRADE-EU` |
| Review addressed | `RES-TRADE-EU-G2-FULL-BR-01` |
| Findings | `RES-TRADE-EU-G2-BR-F01`, `RES-TRADE-EU-G2-BR-F02` |
| Revised Buyer Copy | `RES-TRADE-EU_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| Revised content contract | `RES-TRADE-EU_GATE2_CONTENT_CONTRACT_V0.2.md` |
| Version | V0.1 |
| Status | `FINDINGS_ADDRESSED / READY_FOR_INDEPENDENT_REREVIEW` |
| Date | 2026-09-07 |

This is an execution response. It is not independent verification, project-control approval, user approval or Gate closure.

## F01 response — producing-entity and individual-rate conditions

**Affected locations:** B, the paragraphs immediately below `Fixed amounts stated in Regulation (EU) 2025/4`; C §3, `Fixed table` and `An individual rate`.

**Before:**

> The regulation states these duties as fixed amounts per kilogram for the product described in Article 1. The individual company rates require the valid commercial invoice specified by the regulation. Until that invoice is presented, the rate for all other PRC-origin imports applies. Customs authorities may still carry out their usual checks and request supporting documents.

**After:**

> The regulation states these duties as fixed amounts per kilogram for the product described in Article 1. The two group rates apply exclusively to products produced by the specific legal entities named under LB Group and Anhui Gold Star Group in Article 1(2). Group association or an additional code alone is not sufficient.
>
> An individual rate requires the exact producing legal entity, its applicable TARIC additional code and the valid commercial invoice specified by the regulation. The same conditions apply to a cooperating company listed in the Annex: the exact listed entity, its company-specific code and the specified valid invoice must align. If these conditions are not met, the rate for all other PRC-origin imports applies. Customs authorities may still carry out their usual checks and request supporting documents. This page does not determine a producer's identity or the rate applicable to a shipment.

**Acceptance self-check:** The four-row amount table is unchanged. The adjacent Buyer Copy now states that:

- the LB Group and Anhui Gold Star Group rows summarize rates available only for products produced by the specific legal entities named in Article 1(2);
- group association or an additional code alone is insufficient;
- an individual rate requires the exact producing legal entity, its applicable TARIC additional code and the regulation-specified valid commercial invoice;
- the Annex row likewise requires the exact listed entity, company-specific code and specified invoice;
- if those conditions are not met, the all-other PRC-origin rate applies; and
- the page does not identify a producer or determine the rate for a shipment.

`RES-TRADE-EU-G2-BR-F01 = ADDRESSED_PENDING_INDEPENDENT_VERIFICATION`

## F02 response — scannable written product scope

**Affected locations:** B, the first paragraph under `Read the Written Scope and Fixed-Duty Table`; C §3, `Written scope`.

**Before:**

> The regulation describes titanium dioxide in all forms, as titanium oxides or in pigments and preparations based on titanium dioxide, containing at least 80% titanium dioxide by weight on a dry-matter basis, with all particle sizes. Its anti-dumping measure is written for the defined product originating in the People's Republic of China.

**After:**

> The regulation covers titanium dioxide in all forms. This includes titanium oxides, and pigments and preparations based on titanium dioxide, when they contain at least 80% titanium dioxide by weight on a dry-matter basis. All particle sizes are included. The anti-dumping measure is written for this defined product when it originates in the People's Republic of China.

**Acceptance self-check:** The single dense sentence is now four short statements. The revised copy retains:

- titanium dioxide in all forms;
- titanium oxides and pigments/preparations based on titanium dioxide;
- the minimum 80% TiO2 threshold by weight on a dry-matter basis;
- all particle sizes; and
- the People's Republic of China origin limitation.

It continues to direct the buyer to confirm shipment classification rather than treating the written description or a listed code as a decision.

`RES-TRADE-EU-G2-BR-F02 = ADDRESSED_PENDING_INDEPENDENT_VERIFICATION`

## Version and regression record

- B V0.1 → V0.2 changes only the required product-scope passage, the rate-condition passage and version labels.
- C V0.1 → V0.2 records the material producing-entity/rate predicates and the complete written product scope; actions, module order, SEO, GEO, Schema and freshness are unchanged.
- All four fixed amounts and codes remain unchanged.
- Hero, current-versus-pending distinction, Article 2 boundary, shipment checklist, Malaysia-origin non-inference, tariff/VAT separation, CTAs, source links and `Last reviewed` remain unchanged.
- No classification, producer identity, applicable rate, duty amount, exemption, clearance, preferential-treatment or procurement outcome is supplied.

## Current artifacts

| Artifact | SHA-256 |
|---|---|
| `RES-TRADE-EU_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `9E119C657D6EED9346EF132E0C2039A5C99327FB9087A273DF689B8A2D8A8CB1` |
| `RES-TRADE-EU_GATE2_CONTENT_CONTRACT_V0.2.md` | `64E46520AB226C1EC3EB16FA49A60804B8C45DF16B545A7400198A90DA77E49F` |

## Stop

`NEXT = INDEPENDENT_BUYER_REREVIEW`

`GATE2 = OPEN`

`GATE3 = NOT_STARTED / NOT_AUTHORIZED`
