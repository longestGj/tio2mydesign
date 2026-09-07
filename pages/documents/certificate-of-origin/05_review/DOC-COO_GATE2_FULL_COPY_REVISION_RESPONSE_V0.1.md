# DOC-COO Gate 2 Full Copy Revision Response V0.1

## Control

| Field | Value |
|---|---|
| Review | `DOC-COO-G2-FULL-BR-01` |
| Findings | `DOC-COO-G2-BR-F01`; `F02`; `F03` |
| Revised Buyer Copy | `DOC-COO_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` |
| Date | 2026-09-07 |
| Result | `REVISION_COMPLETE / PENDING_INDEPENDENT_BUYER_REREVIEW` |
| Gate stop | Gate 2 open; Gate 3 `NOT_STARTED / NOT_AUTHORIZED` |

## Finding responses

### `DOC-COO-G2-BR-F01`

Before the first CTA, Buyer Copy now states:

> You can start a document request without a preselected Product Grade, but you must select one before submitting. If you need help identifying the Grade, explore the Product Hub.

The first decision point now offers `Request Origin Documentation` as the primary action and an inline Product Hub help path. The later `explore ... first` instruction was removed. The later form explanation now repeats only the real submission boundary: a request may begin without a preselected Grade, but one Grade must be selected before submission.

**Acceptance self-check:** known-Grade buyers can enter the form immediately; unknown-Grade buyers can also start the form and know the submission requirement, with Product Hub available as optional help rather than a mandatory preliminary step.

### `DOC-COO-G2-BR-F02`

After the four transaction inputs, Buyer Copy now states:

> On the request form, add the destination, intended evidence use, known scheme or requested form, and any appropriate non-confidential order, invoice or shipment reference in Additional Requirements. Country / Region is for your company location.

The request-preparation paragraph points available context to `Additional Requirements` and no longer names only importer/broker needs and transaction references.

**Acceptance self-check:** all four items without their own receiver field have one visible location. `Country / Region` is explicitly separated from import destination and remains company-location context.

### `DOC-COO-G2-BR-F03`

The opening source attribution now reads:

> The origin-document definitions and process conditions described above are based on the Royal Malaysian Customs Department, FAQ Rules of Origin.

**Acceptance self-check:** the attribution is limited to the official source's origin-document definitions and origin-process conditions. It does not attribute the traceability explanation, IKHLAS request workflow, document availability or a transaction outcome to RMCD.

## Version-discipline decision

C remains `DOC-COO_GATE2_CONTENT_CONTRACT_V0.1.md`. Its existing contract already records the optional Product Hub help path, Additional Requirements as the receiving location for destination/scheme/reference context, company-location separation, and RMCD support limited to general origin-document definitions and conditions. The revisions change Buyer Copy placement and precision without changing the action contract, fact/source allowlist or machine meaning.

The current unapproved working Manifest remains V0.5 and is updated in place with the B V0.2 pointer, hashes and Finding state. No new Manifest is created for this same-stage revision.

## Full Buyer cold read and source regression

**Most dangerous action sentence**

> If you are reviewing several Grades, submit a separate request for each Grade.

Buyer → submits one request per Grade → through CONV-DOC → receives one Grade-specific review per submission. The workload is explicit and matches the approved receiver cardinality.

**Weakest English sentence**

> Destination, rules of origin and consistent transaction documents still determine how that evidence is used.

This remains the least direct phrase, but the later paragraph defines consistency across the goods details in the origin evidence, import declaration, invoice, bill of lading and packing list. It does not require rereading or create a different instruction.

**Incomplete-information regression**

- Unknown Grade: may start the form without a preselection; must select one before submission; Product Hub is optional help at the first CTA.
- Unknown scheme/form or missing transaction reference: available destination, intended use, known scheme/form and appropriate non-confidential references go to Additional Requirements.
- Several Grades: one submission per Grade.
- Several document types for one Grade: multiple types remain supported.

**Page-specific value regression**

The Hero definition, three evidence categories, four transaction inputs, origin-versus-traceability distinction, request preparation and official-source module remain present in the same six-module order.

**Third-party source precision regression**

The two RMCD links, source information date, page update date and all supported origin-document statements remain unchanged. The revised attribution is `SUPPORTED_AS_WRITTEN`: its subject and predicate now cover only origin-document definitions and process conditions supported by the FAQ. No sentence treats RMCD as the source for IKHLAS form behavior or traceability.

Full copy was read from breadcrumb through the final source-scope sentence after revision. No new availability, issuance, customs, tariff, timing, inventory or IKHLAS traceability claim was introduced.

