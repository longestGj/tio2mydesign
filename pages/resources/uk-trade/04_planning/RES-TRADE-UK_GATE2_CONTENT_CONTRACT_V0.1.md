# RES-TRADE-UK Gate 2 Content Contract V0.1

## 1. Contract identity

| Field | Value |
|---|---|
| Page ID | `RES-TRADE-UK` |
| URL | `/resources/uk-titanium-dioxide-anti-dumping-investigation/` |
| Page type | Resource — Trade Update |
| Gate | Gate 2 |
| Status | `DRAFT_FOR_INDEPENDENT_BUYER_REVIEW` |
| Buyer-copy source | `RES-TRADE-UK_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` |
| Date | 2026-09-07 |

This contract freezes the stable content behavior for the Gate 2 submission. It does not approve Gate 2, authorize implementation, or start Gate 3.

## 2. Page responsibility

The page owns a dated, source-linked explanation of UK AD0086 for a buyer of titanium dioxide. It must answer:

1. the current investigation and registration status;
2. the written goods/origin scope and codes in the official notice;
3. the difference between registration and an imposed remedy;
4. the conditional and non-binding nature of possible later steps;
5. the shipment facts a buyer/import team should prepare; and
6. the separate ordinary tariff, VAT and Northern Ireland checks.

The page must not determine classification, non-preferential origin, customs value, duty, VAT, exemption, clearance or legal outcome for a transaction.

## 3. Fixed module order

1. Hero — Active investigation and import registration
2. Current status: investigation, registration and measures
3. Written goods scope and registration codes
4. Registration is not a duty rate
5. Prepare the shipment inputs before checking treatment
6. Keep four checks separate
7. Continue the right review + official sources + freshness line

## 4. Required visible facts and qualifiers

| Contract ID | Required visible content |
|---|---|
| `UK-G2-C01` | Dated statement: on 7 September 2026, the TRA case page displayed AD0086 as `Active`; initiation 3 March 2026; TRA page last updated 2 September 2026. |
| `UK-G2-C02` | Registration started 27 March 2026 under Trade Remedies Notice 2026/14 and continues until a stop notice under the notice wording. |
| `UK-G2-C03` | Registration does not itself set or charge an anti-dumping rate. |
| `UK-G2-C04` | Current-measure statement must be discovery-bounded: the checked official sources did not publish an AD0086 provisional or definitive amount. |
| `UK-G2-C05` | Investigation language must remain allegation/procedure language; it must not state that dumping or injury has been found. |
| `UK-G2-C06` | Written scope must preserve rutile titanium oxides in pigments and preparations based on rutile TiO2, at least 80% TiO2 by dry-matter weight, all particle sizes, CAS numbers `12065-65-5` and `13463-67-7`, and PRC origin. |
| `UK-G2-C07` | Headings `28230000` and `32061100`; detailed codes `2823000010`, `2823000030`, `2823000080`, `2823000083`, `3206110010`, `3206110030`, `3206110080`, `3206110085`. |
| `UK-G2-C08` | Additional code `8A60` for registered specified goods; anatase/brookite exclusion and code `8A61`, without treating codes as shipment outcomes. |
| `UK-G2-C09` | Future liability must remain conditional on implementation of a definitive remedy. Any look-back wording must remain `up to 90 days before implementation of any provisional remedy`; no certainty of imposition, retroactivity or amount. |
| `UK-G2-C10` | Published timetable labelled indicative and not legally binding: provisional if required July/August 2026, Statement of Essential Facts September/October 2026, final recommendation February/March 2027. |
| `UK-G2-C11` | Investigation period 1 January–31 December 2025; injury period 1 January 2022–31 December 2025; neither presented as a duty start date. |
| `UK-G2-C12` | Shipment inputs: exact goods/composition/crystal form; proposed code and basis; origin evidence and parties; dates; additional code and basis; GB/NI destination/route; NI at-risk context; commercial, transport and entry records. |
| `UK-G2-C13` | Separate AD0086, ordinary customs duty, import VAT and GB/Northern Ireland route. Publish no numeric transaction outcome. |
| `UK-G2-C14` | Malaysia-origin supply statement must explicitly avoid automatic non-application, preference, exemption or zero-rate conclusions. |
| `UK-G2-C15` | No avoidance, circumvention, rerouting, relabelling or transaction-specific legal/customs recommendation. |

## 5. CTA and receiver contract

| Priority | Label | Destination | Receiver expectation |
|---|---|---|---|
| Primary | `Review UK Procurement Options` | `/markets/united-kingdom/` | Reviews Malaysia-origin TiO2 by product, application and UK delivery/procurement context; does not decide customs, origin or remedy treatment. |
| Secondary | `Open the Official TRA Case` | `https://public-file.trade-remedies.service.gov.uk/case/ad0086/` | Shows the live official case status and documents. |
| Supporting | `Product Hub` | `/products/` | Lets the buyer compare product families without a UK customs conclusion. |
| Supporting | `Request a Quote` | `/request-a-quote/` | Captures product/grade, application, quantity and destination for a commercial response; not a customs ruling. |

The primary CTA must appear in the Hero and final next-step module. The TRA link is the official secondary path and must remain visually subordinate to the procurement CTA.

## 6. SEO, GEO and machine-readable contract

| Field | Contract value |
|---|---|
| Primary keyword | `uk titanium dioxide anti dumping investigation` |
| Secondary keywords | `titanium dioxide import registration uk`; `titanium dioxide import duty uk` |
| H1 | `UK Rutile Titanium Dioxide: Active AD0086 Investigation and Import Registration` |
| SEO title | `UK Titanium Dioxide Anti-Dumping Investigation | TiO2 Malaysia` |
| Meta description | `Check the active UK AD0086 investigation, rutile titanium dioxide import registration, written scope, key dates and shipment inputs to verify.` |
| Canonical | `/resources/uk-titanium-dioxide-anti-dumping-investigation/` |
| Indexing | No indexing authorization is created at Gate 2. |
| Schema | `WebPage` plus `BreadcrumbList` only at this stage. Visible headline, description, URL and dates must match the approved copy at implementation. No FAQ schema. |
| GEO direct answer | Reuse the visible Hero answer: active investigation; registration from 27 March; registration is not a rate; no amount published in the checked current official sources. |

No machine-readable field may imply that AD0086 has imposed a provisional/final measure, that Malaysia origin automatically determines treatment, or that a shipment receives a tariff or VAT result.

## 7. Source and freshness contract

Required official link set:

- TRA public file for AD0086;
- Trade Remedies Notice 2026/14;
- GOV.UK Trade Remedies Notices collection;
- UK Trade Tariff;
- HMRC trade remedies guidance; and
- current HMRC Northern Ireland tariff-route guidance.

Visible `Last reviewed` date: **7 September 2026**.

Recheck before implementation and within the Resource Playbook freshness window. Trigger a recheck within two business days of any AD0086 status/scope/code/timetable change, provisional or final action, registration stop notice, or material GB/Northern Ireland tariff-route change.

## 8. Acceptance conditions

The Gate 2 submission is reviewable only when:

- the A/B/C file set and current Manifest identify one consistent baseline;
- every `UK-G2-C` requirement is visible in Buyer Copy or explicitly preserved as implementation behavior;
- official links resolve to their named receiver rather than a general home page;
- the most dangerous action cannot be read as “registration means duty is due”;
- the UK procurement page remains the primary action;
- the first-to-last cold read contains no internal governance language in Buyer Copy; and
- The independent Buyer Review and subsequent Project Control review remain separate from this execution self-check.
