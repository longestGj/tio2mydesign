# Request a Quote Page Brief V1.2.2

## 0. Document control

| Field | Value |
|---|---|
| Document name | Request a Quote Page Brief |
| Page ID | `CONV-RFQ` |
| Version | `V1.2.2` |
| Date | 2026-09-01 |
| Review ID | `CONV-RFQ-G1-V12-DIRECTED-03` |
| Status | `APPROVED / CLOSED` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED / CLOSED` |
| Lifecycle | `APPROVED_FOR_DESIGN` |
| Mapping / verification | `PLANNED_CONVERSION` / `QUALITATIVE_KEYWORD_EVIDENCE` |
| Current execution ceiling | Gate 1 only |
| User decision source | Project-control P0 directed return dated 2026-09-01; authoritative user source §11; root `AGENTS.md` §2.4 |
| User input evidence | `pages/conversion/request-a-quote/01_research/source/REQUEST_QUOTE_PAGE_DESIGN_SPEC_V1.2_USER_INPUT.md`; SHA-256 `825E989EA777649AD06C85D6DC54654F847FAC198E639B85AC9C67B2C87CDDD6` |

V1.2.2 is a targeted Gate 1 correction of the desktop layout contract. V1.2.1 and earlier versions are preserved as historical and do not control the current page. The supplied design-spec file remains change-input evidence, not a visual baseline.

## 1. Gate ledger

| Gate | Current state | Validation / approval boundary |
|---|---|---|
| Gate 0 | Identity retained | Registry, URL, page type and keyword unchanged |
| Gate 1 | `APPROVED / CLOSED` | Project-control PASS plus explicit user confirmation recorded 2026-09-01 |
| Gate 2 | `NOT_STARTED / NOT_AUTHORIZED` | No content architecture or final copy package is current |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` | No 1440/768/390 wireframe is current |
| Gate 4 | `NOT_STARTED / NOT_AUTHORIZED` | No visual direction is current |
| Gate 5 | `NOT_STARTED / NOT_AUTHORIZED` | No complete visual or state board is current |
| Gate 6+ | `OUT_OF_SCOPE / NOT_AUTHORIZED` | No handoff, development, route implementation or release activity |

All V0.x Gate 2–5 artifacts and earlier Gate 1 files are retained as history. V1.2.2 Gate 1 is closed by project-control PASS plus explicit user confirmation; Gate 2 remains separately unauthorized.

## 2. Page identity

| Field | Value |
|---|---|
| Page name | Request a Quote |
| URL | `/request-a-quote/` |
| Page type | RFQ conversion page |
| Market / language | GLOBAL / EN |
| Priority | P0 |
| Primary keyword | `titanium dioxide quote supplier` |
| Search intent | Transactional quotation and purchase action |
| Buyer stage | RFQ / Purchase |
| Primary CTA | `REQUEST QUOTE` |
| Current navigation key | None on the Conversion route; fixed RFQ Global Chrome remains visible |
| Canonical / robots | Gate 2 decision; no activation authorized here |

## 3. Page Intent Card

| Required item | Current intent |
|---|---|
| Audience | International B2B procurement, purchasing, technical and commercial evaluators seeking a titanium dioxide quotation; direct entrants and visitors arriving with Product, Grade, Application, Market, Document or Resource context |
| Buyer problem | Send the minimum product, application, quantity, destination and business-contact details required for human commercial review without completing a long qualification questionnaire |
| Core message | Request review of a Malaysia-origin titanium dioxide requirement by selecting a grade or `Not sure / Need help`, application, quantity in metric tonnes, destination and business contact details |
| Must include | Shared Global Header; standard page Hero; one RFQ form within the page’s single content flow; Desktop form-internal two-column field Grid with long fields allowed to span full width; Product / Grade; Application; Required Quantity with the only public unit `Metric tonnes (MT)`; Destination Country; business identity and contact; optional destination detail, phone, website and additional requirements; one primary submit action; low-weight `Request a Sample` and `Request Documents`; final privacy sentence with a `Privacy Policy` link; concise success and failure states |
| Must exclude | Page-level left/right composition; page side rail; independent context rail; Dashboard/SaaS shell; separate Selected Context block; Product multi-select; PVC taxonomy; grade recommendation, ranking or Application→Grade logic; long preparation/review/FAQ modules; target price, turnover, tax number, full address, existing supplier, annual consumption, payment terms or Incoterm; consent/acknowledgement checkbox; price, stock, MOQ, lead-time, shipping, regulatory, sample, document or order promises |
| Primary CTA | `REQUEST QUOTE` |
| Secondary actions | Low-weight `Request a Sample` and `Request Documents` links form part of the complete Gate 1–5 target experience; their actual routes must be verified at Gate 7–9 and before release |
| Ownership boundary | CONV-RFQ captures quotation intent and minimum request data. Product/Application pages own education and evidence; CONV-SAMPLE owns sample requests; CONV-DOC owns document requests; whole-site legal pages and Cookie Settings are parallel shared dependencies; Global Chrome owner controls Header/Footer |

Checkpoint is `CONTENT_INTENT_CONFIRMED / CLOSED` from the user’s explicit confirmation dated 2026-09-01.

## 4. Buyer questions and answer direction

| ID | Buyer question | Gate 1 answer direction | Boundary |
|---|---|---|---|
| Q01 | What information do I need to request a quote? | Grade or Need help, Application, quantity in metric tonnes, actual destination country, company, name and business email | Do not ask for second-stage qualification fields |
| Q02 | Can I continue if I am unsure which grade I need? | Yes; select `Not sure / Need help` and add relevant context under Additional Requirements | Do not infer, rank or recommend a grade |
| Q03 | What happens after I submit? | The team reviews the details and contacts the buyer using the information provided | Receipt is not a quotation, price, inventory, lead-time, sample, document or order approval |
| Q04 | Can upstream context carry into the form? | Yes; approved explicit values may preselect editable fields | No separate context block and no hidden satisfaction of required fields |
| Q05 | What if submission fails? | Keep the buyer’s entries, show the approved concise failure state and allow `TRY AGAIN` | No Contact fallback, invented route or implied receipt |

## 5. Minimum field contract

| Field | Required | Type | Allowed values / rule | Prefill |
|---|---:|---|---|---|
| Product / Grade | Yes | Single-select | M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377, CR-901, `Not sure / Need help` | Editable approved `product` value only |
| Application | Yes | Single-select | Coatings, Plastics, Masterbatch, Printing Inks, Paper, Specialty Materials, `Other / Not sure` | Editable approved `application` value only |
| Required Quantity | Yes | Positive numeric estimate | Does not establish MOQ, price or quote eligibility | Only when explicitly supplied and editable |
| Unit | Yes | Fixed public value / single-select | `Metric tonnes (MT)` only | No inference |
| Destination Country | Yes | Country selector | Actual country only; no Market taxonomy values such as EU | Editable explicit country context only |
| Destination Port / City | No | Text | Destination detail only; no shipping promise | Editable explicit context only |
| Company Name | Yes | Text | Business identity for RFQ review | No hidden derivation |
| Your Name | Yes | Text | Contact person | No hidden derivation |
| Business Email | Yes | Email | Syntax validation only | No hidden derivation |
| Phone / WhatsApp (optional) | No | Text | Optional contact field; no helper copy and no consent checkbox | None |
| Website | No | URL/text | Optional company website; no capability inference from domain | None |
| Additional Requirements | No | Textarea | Buyer-supplied application, specification, packaging, schedule or other relevant context; advise against confidential or sensitive data | Neutral explicit context only |

All collected values are request/contact data. No separate Packaging, Document Needs or Sample Interest field is part of the RFQ form.

## 6. Product, Application and relationship rules

- Product / Grade is one required single-select; multiple-grade selection is not allowed.
- Application never selects, ranks or recommends a grade.
- M-2377 may be neutrally selected or prefilled with Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate context where the upstream contract provides it. This does not infer suitability.
- M-2377 → Specialty Materials remains `DO_NOT_RENDER` as a system-generated relation. A buyer’s independent Specialty Materials selection is request context only.
- Rubber is not a taxonomy option and creates no page, URL or keyword.
- M-996 and M-2196 can each be selected without difference, ranking, equivalence, substitution or preference copy.
- `NO_PUBLIC_MAPPING` is a non-render state and must not be described as not applicable.

## 7. Content-flow and responsive direction for later Gates

The complete page target follows one standard single content flow:

1. Shared Global Header.
2. Standard Page Hero.
3. One RFQ form; the form may organize desktop fields in an internal Grid without becoming a second page column or side rail.
4. Low-weight Alternative Conversion links: `Request a Sample` and `Request Documents`.
5. Shared Global Footer, including its whole-site legal and cookie controls.

Desktop at 1440px retains the page’s standard single content flow and may use a two-column Grid inside the form. Recommended pairs are Product / Grade + Application; Required Quantity (with the fixed MT unit) + Destination Country; Company Name + Your Name; and Business Email + Phone / WhatsApp. Destination Port / City, Website, Additional Requirements and any field whose real content needs more room may span the full form width. Tablet at 768px and Mobile at 390px use a single-column field order. Page-level left/right composition, side rails, independent context rails and Dashboard/SaaS layouts remain prohibited. The future Gate 5 package must show the complete final experience even when parallel routes are still being implemented; route functionality is verified at Gate 7–9 and blocks release if unavailable.

This is a Gate 1 intent boundary, not a Gate 2 content skeleton or visual specification.

## 8. CTA and state-copy contract

### Primary

`REQUEST QUOTE`

### Success

- Heading: `Thank you. We’ve received your quotation request.`
- Body: `Our team will review the details and contact you using the information provided.`

This receipt state does not indicate approval of a quotation, price, stock, lead time, sample, document or order.

### Failure

- Heading: `Something went wrong while submitting your request.`
- Body: `Your information is still here. Please try again.`
- CTA: `TRY AGAIN`

The later interaction contract must preserve entered values, prevent duplicate submissions, focus the error summary, associate field errors with their controls, and provide visible keyboard focus. Internal operational boundaries must not become a long Buyer Clean warning block.

## 9. Privacy and whole-site dependency contract

Final RFQ notice:

> We use the information you provide to review and respond to your quotation request. Learn more in our Privacy Policy.

`Privacy Policy` is a visible link in the complete Gate 1–5 buyer experience. Its actual route and accessibility are verified at Gate 7–9 and before release; this task does not create the page or route. Phone / WhatsApp, Website and other submitted values remain within the legal/data review scope. No consent or acknowledgement checkbox is added to this RFQ contract.

Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings are parallel whole-site dependencies. They remain visible as applicable in the final shared Footer/consent experience and are owned outside CONV-RFQ. If any required route or control is unavailable at final verification, release is blocked; Buyer Clean must not show internal blocker labels.

## 10. Validation and interaction-state contract

| State | Gate 1 contract |
|---|---|
| Initial | Required fields are visibly labelled; no prefill is mistaken for a hidden submission |
| Prefill | Approved Product, Grade, Application, Market/destination, Document or Resource context is visible and editable; invalid/stale values return to neutral without a first-load error |
| Focus | Every interactive control receives a clearly visible keyboard focus state |
| Validation | Required and format errors appear next to the relevant field and in an accessible error summary; focus moves to the summary after failed validation |
| Unknown grade | `Not sure / Need help` remains a valid Product / Grade choice |
| Insufficient information | Submission may request clarification through later human contact; it must not invent a fit, quote or rejection result |
| Submitting | Prevent duplicate action while preserving entered values |
| Submission failure | Use the exact failure contract in §8; preserve values and offer `TRY AGAIN` |
| Success | Use the exact success contract in §8; confirm receipt only |
| Human review | Human review occurs after receipt; no automatic commercial or technical approval is implied |
| Form/route unavailable | Final release is blocked until verified at Gate 7–9; the Gate 1–5 design still shows the complete intended page and shared RFQ Chrome |

## 11. Evidence and claim boundary

| Area | Current decision |
|---|---|
| Page identity, URL, type and keyword | Locked by registry and keyword master |
| Malaysia-origin positioning | Permitted within approved project positioning; no factory, capacity, certification or origin-document claim is inferred |
| Product/Application relationship | Neutral buyer context only; PRODUCT V0.3 restrictions apply |
| Form receipt and follow-up | Exact Gate 1 state copy; receiver and workflow evidence required before release |
| Privacy and whole-site links | Complete experience defined here; pages/routes/controls owned in parallel and verified at Gate 7–9 |
| Sample/Documents links | Complete final visual includes them; functionality is a Gate 7–9 release dependency |
| Price, MOQ, stock, lead time, logistics, regulation or order outcome | `DO_NOT_RENDER` without separate evidence and approval |

## 12. SEO/GEO boundary

| Field | Gate 1 decision |
|---|---|
| Primary keyword | `titanium dioxide quote supplier` |
| Secondary keywords | `titanium dioxide quotation`; `buy titanium dioxide bulk`; `titanium dioxide wholesaler`; `titanium dioxide distributor`; `titanium dioxide sourcing supplier` |
| Excluded keywords | Informational Product and Application primary terms |
| Cannibalization | RFQ owns quotation/purchase action; Home, Market, Product, Grade and Application pages retain their own supplier, market, product and educational intent |
| Primary GEO entity | TiO2 Malaysia Request a Quote workflow |
| Candidate answer topics | Minimum RFQ information; Need help path; editable prefill; receipt and human review |
| Schema | Gate 2 decision; no Product, Offer, price, availability or inferred-relationship Schema |
| Title/meta/canonical/robots | Gate 2 decision; no activation in this task |

## 13. Dependencies and open decisions

| ID | Item | Status | Effect |
|---|---|---|---|
| O01 | Project-control review of this Gate 1 package | CLOSED | `PROJECT_CONTROL_REVIEW_PASS` recorded before user confirmation |
| O02 | User confirmation of Page Intent Card | CLOSED | Explicitly confirmed 2026-09-01 |
| O03 | Privacy Policy, Terms of Use, Cookie Policy, Cookie Settings and shared Footer delivery | PARALLEL WHOLE-SITE DEPENDENCY | Must be verified at Gate 7–9 and before release; not built here |
| O04 | Verified RFQ receiver, workflow owner and positive-receipt semantics | OPEN | Blocks operational release |
| O05 | Request a Sample and Request Documents route functionality | PARALLEL CONVERSION DEPENDENCY | Included in final Gate 1–5 experience; verify at Gate 7–9 and before release |
| O06 | SEO metadata, Schema, canonical, robots and indexing | GATE 2 / RELEASE DECISION REQUIRED | No activation authorized |

The quantity unit and phone checkbox questions are resolved: the only public unit is `Metric tonnes (MT)`, the phone field has no helper copy, and no consent/acknowledgement checkbox is included.

## 14. Gate 1 submission decision

This V1.2.2 Brief is `APPROVED / CLOSED` for Gate 1 with checkpoint `CONTENT_INTENT_CONFIRMED / CLOSED`. It creates no visual baseline, does not authorize Gate 2, and does not reactivate historical Gate 2–5 artifacts.
