# Request a Quote Page Brief V1.2

## 0. Document control

| Field | Value |
|---|---|
| Document name | Request a Quote Page Brief |
| Page ID | `CONV-RFQ` |
| Version | `V1.2` |
| Date | 2026-09-01 |
| Review ID | `CONV-RFQ-G1-V12-REBASE-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Input status | `USER_SUPPLIED_CHANGE_INPUT / GATE_1_REBASE_IN_REVIEW` |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Mapping status | `PLANNED_CONVERSION` |
| Verification status | `QUALITATIVE_KEYWORD_EVIDENCE` |
| Formal page root | `pages/conversion/request-a-quote/` |
| Current execution ceiling | Gate 1 only |
| User decision source | Project-control delegation of the approved V1.2 change direction, 2026-09-01 |
| User input evidence | `pages/conversion/request-a-quote/01_research/source/REQUEST_QUOTE_PAGE_DESIGN_SPEC_V1.2_USER_INPUT.md`; SHA-256 `825E989EA777649AD06C85D6DC54654F847FAC198E639B85AC9C67B2C87CDDD6` |

The supplied file is an approved change input, not an approved visual baseline. Its internal `Visual + Conversion Design Baseline` status, `/request-quote` examples, PVC taxonomy and recommendation logic do not control this Brief. The user/project-control corrections in Review ID `CONV-RFQ-G1-V12-REBASE-01` control.

## 1. Gate ledger

| Gate | V1.2 state | Current authority | Approval boundary |
|---|---|---|---|
| Gate 0 | Identity retained | Registry and keyword master | URL, Page ID, page type and keyword unchanged |
| Gate 1 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` | This Brief plus the V1.2 Gate 1 audit and Manifest | Project-control review and user content-intent confirmation pending |
| Gate 2 | `NOT_STARTED / NOT_AUTHORIZED` | None | No content skeleton or full copy is current |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` | None | No V1.2 wireframe is current |
| Gate 4 | `NOT_STARTED / NOT_AUTHORIZED` | None | No V1.2 visual direction is current |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` | None | No V1.2 complete visual is current |
| Gate 6+ | `OUT_OF_SCOPE / NOT_AUTHORIZED` | None | No handoff, development or release activity |

All V0.1/V0.2 Gate 2–5 documents and images are retained as `HISTORICAL / SUPERSEDED_PENDING_REWORK / NOT_CURRENT_CONTROL`.

## 2. Page identity

| Field | Value |
|---|---|
| Page name | Request a Quote |
| URL | `/request-a-quote/` |
| Page type | RFQ conversion page |
| Section | CONVERSION |
| Market / language | GLOBAL / EN |
| Priority | P0 |
| Primary keyword | `titanium dioxide quote supplier` |
| Search intent | Transactional quotation and purchase action |
| Buyer stage | RFQ / Purchase |
| Primary CTA | `REQUEST QUOTE` |
| Current navigation key | None on Conversion route under Global Chrome V0.5 |
| Canonical / robots | `DECISION_REQUIRED` at Gate 1; no activation authorized |

## 3. Page Intent Card

| Required item | V1.2 intent |
|---|---|
| Audience | International B2B procurement, purchasing, technical and commercial evaluators seeking a titanium dioxide quotation; direct entrants and visitors arriving from Product or Application pages |
| Buyer problem | Submit the minimum product, application, quantity, destination and business-contact context needed for a human commercial review without completing a long qualification questionnaire |
| Core message | Request a commercial review for Malaysia-origin titanium dioxide by providing the grade or `Not sure / Need help`, application, quantity, destination and business contact details |
| Must include | Shared Global Header; Standard Page Hero; one RFQ form in a standard content flow; required single-select Product / Grade; required Application; required quantity and unit; actual destination country; company/name/business email; optional port/city, Phone / WhatsApp, Website and Additional Requirements; one `REQUEST QUOTE` action; low-weight Sample/Documents alternatives behind route-readiness gates; short privacy notice candidate; concise success and failure candidates |
| Must exclude | Page-level left/right rail; Dashboard/SaaS form shell; separate Selected Product/Application block; Product multi-select; PVC taxonomy; grade recommendation, ranking or Application→Recommended Grade logic; long Preparation, Human Review or FAQ modules; long internal negative audit lists; target price, turnover, tax number, full address, existing supplier, annual consumption, payment terms or Incoterm; price, stock, MOQ, lead-time, shipping, regulatory, sample, document or order promises |
| Primary CTA | `REQUEST QUOTE` |
| Secondary CTA | Low-weight `Request a Sample` and `Request Documents` links only when their routes are independently ready; neither is a submission-failure fallback |
| Ownership boundary | CONV-RFQ captures quotation intent and minimum request data. Product/Application pages own education and suitability evidence; CONV-SAMPLE owns sample requests; CONV-DOC owns document requests; the independently approved future Privacy Policy page owns the full policy; Global Chrome owner controls Header/Footer |

Checkpoint remains `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION`. This card is ready for project-control review but is not user-confirmed or closed.

## 4. Buyer questions and intended answers

| ID | Buyer question | Gate 1 answer direction | Boundary |
|---|---|---|---|
| Q01 | What information do I need to request a quote? | Grade or Need help, Application, quantity/unit, actual destination country, company, name and business email | Do not ask for second-stage qualification fields |
| Q02 | Can I continue if I am not sure which grade I need? | Yes; choose `Not sure / Need help` and add context in Additional Requirements | Do not infer, rank or recommend a grade |
| Q03 | What happens after I submit? | The team reviews the request and contacts the buyer using the supplied details; quotation details are provided separately after review | No automatic quotation, availability or order approval implication |
| Q04 | Can a Product or Application page carry context into the form? | Yes; an approved query may preselect the editable single-select field | No separate Selected Context block and no hidden required-field satisfaction |
| Q05 | What if the form fails? | Preserve entries, show a concise failure message and allow `TRY AGAIN` | No Contact fallback, invented route or implied receipt |

These are Gate 1 answer directions, not full Gate 2 copy blocks or an FAQ module.

## 5. Minimum field contract

| Field | Required | Type | Allowed values / Gate 1 rule | Prefill | Privacy scope |
|---|---:|---|---|---|---|
| Product / Grade | Yes | Single-select | M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377, CR-901, `Not sure / Need help` | Editable approved `product` query only | Commercial request context |
| Application | Yes | Single-select | Coatings, Plastics, Masterbatch, Printing Inks, Paper, Specialty Materials, `Other / Not sure` | Editable approved `application` query only | Commercial request context |
| Required Quantity | Yes | Positive numeric estimate | Does not establish MOQ or eligibility | Optional upstream value only if explicit and editable | Commercial request context |
| Unit | Yes | Single-select | Exact unit vocabulary deferred to Gate 2; source proposes MT/KG | None by inference | Commercial request context |
| Destination Country | Yes | Country selector | Actual country only; not EU or another Market taxonomy value | Editable explicit country context only | Commercial request context |
| Destination Port / City | No | Text | Destination detail only | Editable explicit context | Commercial request context |
| Company Name | Yes | Text | Business identity for RFQ review | No hidden derivation | Business contact data |
| Your Name | Yes | Text | Contact person | No hidden derivation | Personal/business contact data |
| Business Email | Yes | Email | Syntax validation only; does not prove inbox ownership | No hidden derivation | Personal/business contact data |
| Phone / WhatsApp | No | Text / international contact | One optional field; exact normalization deferred | None | Personal/business contact data |
| Website | No | URL/text | Optional company website; no capability inference from domain | None | Business contact data |
| Additional Requirements | No | Textarea | Buyer-supplied application, specification, packaging, schedule or other context | Neutral explicit context only | May contain business or personal data; warn against confidential/sensitive information |

No separate Packaging, Document Needs or Sample Interest field is current in V1.2. Packaging context may be typed in Additional Requirements; Sample/Documents are low-weight alternative routes, not RFQ form fields.

## 6. Product and Application rules

- Product / Grade is required single-select. Multiple-grade selection is removed from current control.
- Application never chooses, ranks or recommends a grade.
- The seven visible Application values are the approved V1.2 form taxonomy. PVC is not a standalone option.
- PRODUCT V0.3 remains the only relation evidence baseline. M-2377 may retain approved neutral upstream selection but must not generate an Application recommendation.
- M-2377 → Specialty Materials remains `DO_NOT_RENDER` as a system-generated relation. A buyer may independently select Specialty Materials; the selection is request context, not a claim of fit.
- Rubber is not a taxonomy option. Buyer-entered Rubber text may be retained unclassified under `Other / Not sure` or Additional Requirements.
- M-996 and M-2196 may each be selected, one at a time, without difference, ranking, equivalence, substitution or preference copy.
- `NO_PUBLIC_MAPPING` never means not applicable, unsuitable, unavailable or prohibited.

## 7. Content-flow direction for later Gate 2

Only the following module intent is current:

1. Shared Global Header.
2. Standard Page Hero identifying the Request a Quote task and Malaysia-origin titanium dioxide context.
3. Single-flow RFQ Form; Desktop may use two-column field pairs inside the form.
4. Alternative Conversion with low-weight Sample/Documents links when route-ready.
5. Shared Global Footer.

This is a Gate 1 content-intent boundary, not a Gate 2 content skeleton or visual specification. No V1.2 H1, Hero paragraph, section copy, SEO metadata, Schema or layout dimensions are approved in this Gate.

## 8. CTA and state-copy candidates

### Primary

`REQUEST QUOTE`

### Success candidate

- Heading: `Thank you for your enquiry.`
- Body: `Our team will review your requirements and contact you using the details provided.`
- Light note: `Quotation details will be provided separately after review.`

### Failure candidate

- Heading: `We’re sorry, something went wrong.`
- Body: `Your request could not be submitted. Please try again.`
- CTA: `TRY AGAIN`

The implementation contract must later preserve values, prevent duplicate submits, focus the error summary and associate field errors accessibly. These behaviors do not become long Buyer Clean paragraphs.

## 9. Privacy dependency

The user approved creation of an independent Privacy Policy page. That page and its Global Footer change are owned by project control and a separate page task; CONV-RFQ must not create them.

Gate 1 short-notice candidate:

> By submitting this form, you acknowledge that the information provided will be used to review and respond to your enquiry. See our Privacy Policy.

`Privacy Policy` becomes a link only after the independent route is registered and route-ready. Until then, Buyer Clean release is blocked; the text must not link to Contact or a fabricated route. Phone / WhatsApp, Website and all other submitted values are included in the privacy data-category review. Whether an additional checkbox is required remains `PRIVACY_OWNER_DECISION_REQUIRED`.

## 10. Evidence and claim boundary

| Evidence/claim area | Current decision |
|---|---|
| Page identity, URL, type and keyword | Locked by registry and keyword master |
| Malaysia-origin positioning | Permitted as project positioning within the approved scope; no additional factory, capacity, certification or origin-document claim is inferred |
| 14-grade selector | Permitted from the registered 14-grade system |
| Application selector | Permitted exactly as the V1.2 approved form taxonomy |
| Product/Application relationship | Neutral buyer context only; PRODUCT V0.3 restrictions apply |
| Form receipt and follow-up | Candidate copy; operational receiver/owner evidence required before release |
| Privacy notice and policy link | External dependency; route and approved policy wording required before release |
| Sample/Documents alternatives | Conditional on each route's readiness; not failure fallbacks |
| Price, MOQ, stock, lead time, logistics, regulation or order outcome | `DO_NOT_RENDER` without separate evidence and approval |

## 11. SEO/GEO boundary

| Field | V1.2 Gate 1 decision |
|---|---|
| Primary keyword | `titanium dioxide quote supplier` |
| Secondary keywords | `titanium dioxide quotation`; `buy titanium dioxide bulk`; `titanium dioxide wholesaler`; `titanium dioxide distributor`; `titanium dioxide sourcing supplier` |
| Excluded keywords | Informational Product and Application primary terms |
| Cannibalization | RFQ owns quotation/purchase action. Home, Market, Product, Grade and Application pages retain supplier, market, product and educational intent |
| Primary GEO entity | TiO2 Malaysia Request a Quote workflow |
| Related entities | Buyer-selected grade, application, destination and company/contact context only |
| Candidate answer topics | Minimum RFQ information; Need help path; editable prefill; human review; separate quotation details |
| Schema | Gate 2 decision required; no Product, Offer, price, availability or inferred relationship Schema |
| Title/meta/canonical/robots | Gate 2 decision required; no activation in this task |

## 12. Dependencies and open decisions

| ID | Item | Status | Effect |
|---|---|---|---|
| O01 | Project-control review of this Gate 1 package | OPEN | Gate 1 cannot progress to user confirmation without review |
| O02 | User confirmation of Page Intent Card | OPEN | Checkpoint remains pending |
| O03 | Independent Privacy Policy page registration, copy, route and Footer handling | EXTERNAL DEPENDENCY | Blocks Buyer Clean release; not built here |
| O04 | Verified RFQ receiver, workflow owner and positive-receipt semantics | OPEN | Blocks operational release |
| O05 | Request Sample and Request Documents route readiness | OPEN / INDEPENDENT | Alternative links remain absent until ready |
| O06 | Exact unit option vocabulary | GATE 2 DECISION REQUIRED | Does not block Gate 1 intent |
| O07 | Phone / WhatsApp validation and consent/acknowledgement mechanism | PRIVACY / GATE 2 DECISION REQUIRED | Does not block Gate 1 intent; blocks final data contract |
| O08 | Canonical, robots and indexing decision | GATE 2 / RELEASE DECISION REQUIRED | No activation authorized |

## 13. Gate 1 submission decision

This Brief is `DRAFT_FOR_PROJECT_CONTROL_REVIEW`. It does not establish a visual baseline, close `CONTENT_INTENT_CONFIRMED`, authorize Gate 2 or reactivate any historical Gate 2–5 artifact.

