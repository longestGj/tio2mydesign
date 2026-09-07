# CONV-RFQ Gate 1 Intent, Keyword, Field and Evidence Rebase V1.2.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-RFQ-G1-V12-DIRECTED-02` |
| Gate | Gate 1 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Scope | Content intent, keyword/search intent, minimum fields, evidence/freeze boundaries, final-experience dependencies and responsive intent only |
| Prohibited | Gate 2 content production, wireframe, visual, code, route/legal-page creation, Footer implementation or development |

## 1. Input integrity and normalization

| Input | Integrity | Governance treatment |
|---|---|---|
| Workspace evidence copy | SHA-256 `825E989EA777649AD06C85D6DC54654F847FAC198E639B85AC9C67B2C87CDDD6`; 15,407 bytes | Exact user-input audit copy; not a visual baseline |
| Directed correction | User/project-control direction, 2026-09-01 | Controls V1.2.1; exact unit, field, state-copy, privacy and dependency decisions |
| Root governance | `AGENTS.md` §2.4, 2026-09-01 | Gate 1–5 defines the complete final buyer experience; operational route checks occur later |

Active normalizations:

- Canonical route remains `/request-a-quote/`; `/request-quote` examples are rejected.
- Page and form use one vertical flow at 1440, 768 and 390; desktop left/right composition and two-column field pairing are rejected.
- Selected Context blocks, PVC option and grade recommendation logic are rejected.
- Quantity unit is fixed to `Metric tonnes (MT)` only.
- `Phone / WhatsApp (optional)` has no helper copy and no consent checkbox.
- Complete later visuals include Privacy Policy, Request a Sample and Request Documents links; route readiness is verified at Gate 7–9, not used to erase the final-state design.

## 2. Keyword and search-intent audit

| Field | Current value | Audit result |
|---|---|---|
| Primary keyword | `titanium dioxide quote supplier` | RETAIN |
| Search intent | `T` | RETAIN — quotation and purchase action |
| Buyer stage | `RFQ / Purchase` | RETAIN |
| Source cluster | `BUYER-01` | RETAIN |
| Mapping / verification | `PLANNED_CONVERSION` / `QUALITATIVE_KEYWORD_EVIDENCE` | RETAIN |
| Search metrics | Unavailable | No volume, KD, CPC or trend inference |
| URL | `/request-a-quote/` | RETAIN |

Locally saved BUYER-01 SERP evidence supports transactional/commercial intent qualitatively only. It does not prove demand, conversion, capability, price, stock, MOQ, lead time, shipping or regulatory outcomes.

## 3. Cannibalization and page ownership

| Intent | Owner | RFQ limit / dependency treatment |
|---|---|---|
| Broad Malaysia titanium dioxide supplier | HOME-001 | RFQ identifies the transaction, not the broad supplier proposition |
| Country/region procurement | MARKET-* | Destination is input context, not a serviceability or regulatory claim |
| Product/grade education | PRODUCT-* / GRADE-* | Selector context only; no selection guide |
| Application education | APP-* | Selector context only; no recommendation engine |
| Sample request | CONV-SAMPLE | Low-weight final-state link; route verified Gate 7–9 |
| Document request | CONV-DOC | Low-weight final-state link; route verified Gate 7–9 |
| Privacy / Terms / Cookies | Whole-site owners | Complete final experience consumes shared pages/controls; CONV-RFQ does not create them |
| Contact utility | CONTACT-001 | Not a failure fallback and not RFQ ownership |

## 4. Buyer and procurement-stage findings

The minimum useful first-stage context is one grade or `Not sure / Need help`; one Application; quantity in metric tonnes; actual destination country; company, contact name and business email; and optional port/city, Phone / WhatsApp, Website and Additional Requirements.

The first request does not require turnover, tax number, registered address, incumbent supplier, target price, annual consumption, payment terms or Incoterm.

## 5. Field audit

| Field | V1.2.1 decision | Evidence/risk boundary |
|---|---|---|
| Product / Grade | Required single-select: 14 grades + `Not sure / Need help` | Buyer choice only; no suitability inference |
| Application | Required seven-value taxonomy | PVC rejected; no grade recommendation |
| Required Quantity | Required positive numeric estimate | Not MOQ or quote eligibility |
| Unit | Only public value is `Metric tonnes (MT)` | No kg and no alternate/Other unit |
| Destination Country | Required actual country | Not a Market selector; no serviceability inference |
| Destination Port / City | Optional | No shipping promise |
| Company Name | Required | Business identity for review |
| Your Name | Required | Personal/business contact data |
| Business Email | Required; syntax validation only | No inbox-ownership claim |
| Phone / WhatsApp (optional) | Optional; no helper copy | Data scope applies; no consent checkbox |
| Website | Optional | No capability inference from domain |
| Additional Requirements | Optional | No derived facts; advise against confidential/sensitive content |
| Packaging preference | No separate field | May be stated in Additional Requirements |
| Document needs | No RFQ field | CONV-DOC owns its workflow |
| Sample interest | No RFQ field | CONV-SAMPLE owns its workflow |
| Consent/acknowledgement checkbox | `DO_NOT_ADD` | User decision; not deferred |

## 6. Product selector and relation audit

The selectable grades are M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.

- A `product` query may preselect exactly one registered grade and remains editable.
- `Not sure / Need help` is a valid selection.
- No Application input produces a recommended or prioritized grade.
- PRODUCT V0.3 permits neutral M-2377 context for Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate; it does not authorize suitability inference.
- M-2377 → Specialty Materials remains `DO_NOT_RENDER` as a generated relation.
- Rubber remains evidence/buyer-text context only and creates no taxonomy, page, URL or keyword.
- M-996 and M-2196 have no comparison, ranking, equivalence or substitution logic.
- `NO_PUBLIC_MAPPING` is a non-render decision, not a negative fact.

## 7. Application taxonomy audit

| Visible value | Status | Notes |
|---|---|---|
| Coatings | RETAIN | Buyer-selected context |
| Plastics | RETAIN | Buyer-selected context |
| Masterbatch | RETAIN | Buyer-selected context |
| Printing Inks | RETAIN | Buyer-selected context |
| Paper | RETAIN | Buyer-selected context |
| Specialty Materials | RETAIN | Does not authorize an M-2377 system relation |
| Other / Not sure | RETAIN | Application fallback; unrelated to quantity unit |
| PVC | REJECT / DO_NOT_ADD | May appear only as buyer-entered text |
| Rubber | DO_NOT_ADD | Evidence/buyer-text context only |

## 8. Prefill audit

- Approved Product, Grade, Application, Market/destination, Document and Resource context may enter through explicit, allow-listed contracts.
- Prefill is visible in the applicable form field, editable, and never displayed as a separate Selected Context block.
- Invalid or stale values clear to neutral without a first-load error.
- Hidden source metadata cannot satisfy a required field.
- Prefill does not prove stock, service area, logistics, suitability, quotation eligibility or document/sample availability.
- A Product/Application relationship is rendered only when its own approved evidence permits it; buyer selections themselves are not relationship claims.

## 9. State and interaction audit

| State | Audit result |
|---|---|
| Focus | Visible keyboard focus required on every interactive control |
| Required/format error | Inline association plus accessible summary; move focus to summary |
| Unknown model | `Not sure / Need help` is the supported path |
| Insufficient details | Human clarification may follow; no automated rejection or suitability conclusion |
| Submitting | Preserve data and prevent duplicate submission |
| Submission failure | Heading `Something went wrong while submitting your request.`; body `Your information is still here. Please try again.`; CTA `TRY AGAIN` |
| Success | Heading `Thank you. We’ve received your quotation request.`; body `Our team will review the details and contact you using the information provided.` |
| Human review | Receipt only; no quotation, price, inventory, lead-time, sample, document or order approval |
| Route/form unavailable | Block release if unresolved at Gate 7–9; do not show internal blocker language to buyers and do not remove the fixed shared RFQ Chrome |

## 10. Evidence and claim register

| ID | Evidence / decision | Source / date | Status |
|---|---|---|---|
| E01 | Page identity, URL, type and P0 priority | Page Registry V0.1 / 2026-09-01 | VERIFIED / RETAIN |
| E02 | Keyword, intent, stage and boundary | Keyword master / 2026-09-01 | VERIFIED / RETAIN |
| E03 | Directed V1.2.1 correction | User/project control / 2026-09-01 | CURRENT CHANGE DIRECTION / REVIEW REQUIRED |
| E04 | Fourteen registered grades | Keyword master + PRODUCT V0.3 | VERIFIED / RENDER AS OPTIONS |
| E05 | PRODUCT V0.3 relationships | Matrix and unified audits | VERIFIED WITH RESTRICTIONS |
| E06 | Shared Header/Footer ownership | Global Chrome V0.5 | APPROVED SHARED AUTHORITY / NO PAGE MODIFICATION |
| E07 | Whole-site legal/cookie dependencies | Root `AGENTS.md` §2.4 | FINAL EXPERIENCE REQUIRED / PARALLEL OWNERSHIP |
| E08 | Exact success, failure and privacy wording | Directed V1.2.1 decision / 2026-09-01 | CURRENT GATE 1 COPY CONTRACT / REVIEW REQUIRED |
| E09 | Receiver, owner and live form readiness | No operational evidence in this task | RELEASE BLOCKER UNTIL VERIFIED |
| E10 | Price, stock, MOQ, lead time, shipping, regulation or order outcome | No evidence supplied | DO_NOT_RENDER |

## 11. GEO and answer-ready candidates

| Candidate | Allowed answer direction | Freshness boundary |
|---|---|---|
| What information is needed? | List only current required fields | Recheck when form contract changes |
| Can I request help choosing a grade? | Select Need help and add optional context | No recommendation or suitability statement |
| What happens after submission? | Receipt, human review and contact using supplied information | Receiver/workflow must be verified before release |
| Can upstream context be carried in? | Editable allow-listed preselection | Final route/query verification required later |

No Product, Offer, price, availability, shipping, certification, rating or inferred-relation Schema is authorized.

## 12. Privacy, parallel routes and operational audit

Final privacy sentence:

> We use the information you provide to review and respond to your quotation request. Learn more in our Privacy Policy.

The complete Gate 1–5 buyer experience shows the `Privacy Policy` link and the low-weight `Request a Sample` and `Request Documents` links. Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings are whole-site parallel dependencies. Their pages, Footer delivery and controls are not created in this task.

Actual link/route/control accessibility is verified at Gate 7–9 and before release. A failure at that point blocks release; it does not justify hiding the final-state experience during Gate 1–5 or exposing `RELEASE_BLOCKER` in Buyer Clean. Receiver/owner and positive receipt behavior also require operational verification.

## 13. Gate 1 conclusion

V1.2.1 is internally coherent and ready for project-control review. It fixes the unit vocabulary, phone-field treatment, state copy, privacy link contract, whole-site dependencies and the one-column desktop direction. The checkpoint remains pending user confirmation; Gate 2 is not authorized and no visual asset is current.
