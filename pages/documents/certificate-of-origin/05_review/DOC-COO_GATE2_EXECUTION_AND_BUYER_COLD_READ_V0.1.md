# DOC-COO Gate 2 Execution and Buyer Cold Read V0.1

## Control and result

| Field | Value |
|---|---|
| Page | `DOC-COO` |
| Date | 2026-09-07 |
| Scope | Serial-batch Skeleton A, Full Buyer Clean Copy B and stable contract C |
| Result | `DRAFT_FOR_BUYER_REVIEW` |
| Gate stop | Gate 2 open; Gate 3 `NOT_STARTED / NOT_AUTHORIZED` |

The draft consumes the approved Gate 1 intent, the Gate 2 serial-batch authority, Gate 2 Execution Agent V0.5, the delivery structure V0.4, the current CONV-DOC field/prefill contract and the later site-wide Malaysia-origin publication authority. The older page-local cross-page origin Hold is superseded only for the exact site-wide statement; certificate availability, issuance and customs outcomes remain separate.

## Buyer cold read

### Most dangerous action sentence

> If you are reviewing several Grades, submit a separate request for each Grade.

Buyer → sends one request for each IKHLAS Grade → through the shared Request Documents form → each request is tied to the receiver's single-Grade contract. This is the highest-burden action on the page, but it states the real form limitation and avoids implying a multi-Grade submission that the receiver does not accept.

### Weakest English sentence

> Depending on the applicable procedure, the relevant evidence may be a preferential certificate or proof, a non-preferential Certificate of Origin, or another permitted proof or declaration.

This sentence carries three parallel evidence categories and one necessary qualifier. The revised parallel nouns make it easier to scan while preventing `other proof` from reading as a universal fallback.

### Incomplete-information paths

- Unknown agreement/scheme or requested form: the buyer can start with destination and the importer, broker or internal-review need; the copy says every detail is not required before starting and identifies `Additional Requirements` as the receiving field.
- Unknown IKHLAS Grade: the buyer is directed to the Product Hub because CONV-DOC requires one Grade before submission.
- Several Grades: one request per Grade, matching the receiver contract.
- Several document types for one Grade: the form accepts more than one document type; the origin category remains editable and additional types may be selected.
- No order/shipment reference yet: the checklist marks it `if available`, so an early-stage qualification request is not blocked.

### Page-specific value

- The Hero answers what a Certificate of Origin establishes.
- `Which Origin Evidence Is Relevant?` distinguishes preferential, non-preferential and other permitted evidence before traceability.
- `What Determines the Right Evidence?` turns destination, rules and transaction context into four buyer inputs.
- `Origin Evidence and Traceability Answer Different Questions` resolves the approved conceptual boundary without claiming an IKHLAS traceability capability.
- `Prepare Your Request` connects those decisions to the actual CONV-DOC Grade/document cardinality and incomplete-context path.

## Third-party source expression precision

Live official-page verification on 2026-09-07 confirmed that the Royal Malaysian Customs Department page shows `Last Updated: 05 January 2026` and states that its information is updated through 10 October 2025.

| Visible expression | Precision result | Reason |
|---|---|---|
| A Certificate of Origin certifies the origin of the goods identified in the document. | `SUPPORTED_AS_WRITTEN` | The source defines a CO as a certificate issued by a competent authority of the exporting country that certifies origin of the goods. The draft does not attach this to an IKHLAS order. |
| Depending on the applicable procedure, the relevant evidence may be a preferential certificate or proof, a non-preferential Certificate of Origin, or another permitted proof or declaration. | `SUPPORTED_AS_WRITTEN` | The source distinguishes PCO and NPCO and lists declarations/electronic forms among agreement-specific proofs. The opening qualifier preserves scope. |
| Preferential use depends on the agreement, rules of origin, proof and supporting transaction documents. | `SUPPORTED_AS_WRITTEN` | The source connects preferential treatment to the relevant agreement and origin criteria and requires proof plus consistent import/supporting documents. |
| A certificate alone does not decide a preferential or customs outcome. | `SUPPORTED_AS_WRITTEN` | This is the bounded conclusion of the source's agreement, proof, consistency and verification conditions; it does not predict a named customs decision. |
| External-link label `Royal Malaysian Customs Department, FAQ Rules of Origin` | `SUPPORTED_AS_WRITTEN` | The label names the issuing body and page title accurately; it does not describe the page as transaction approval or legal advice. |

No dated MITI statement, specific FTA form, issuing route, tariff rate or destination result is used in Buyer Copy.

## Full scan and open items

Action, title, CTA, Meta and source text were scanned through the final visible sentence. `all`, `every`, `required`, forced sequence, inventory, issuance, availability and commercial/customs-result language were checked. The draft does not promise a document, certificate, tariff result, customs acceptance or timing.

Open items for later authority:

1. Independent Buyer Review must read the full B and verify the source expressions rather than infer quality from this record.
2. The Skeleton and Full Copy remain unapproved within the batch until project-control review and final batch user approval.
3. URL mapping, canonical implementation, indexing, receiver release and publication remain separate.
