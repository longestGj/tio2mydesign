# CONV-RFQ Gate 1 Intent, Keyword, Field and Evidence Rebase V1.2

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-RFQ-G1-V12-REBASE-01` |
| Gate | Gate 1 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `CONTENT_INTENT_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Scope | Content intent, keyword/search intent, minimum fields, evidence/freeze boundaries and dependencies only |
| Prohibited | Gate 2 content production, wireframe, visual, code, route, Privacy page creation or development |

## 1. Input integrity and normalization

| Input | Integrity | Governance treatment |
|---|---|---|
| `C:\Users\longe\Downloads\REQUEST_QUOTE_PAGE_DESIGN_SPEC_V1.2(1).md` | SHA-256 `825E989EA777649AD06C85D6DC54654F847FAC198E639B85AC9C67B2C87CDDD6`; 15,407 bytes | `USER_SUPPLIED_CHANGE_INPUT / GATE_1_REBASE_IN_REVIEW`; not a Visual Baseline |
| Workspace evidence copy | Same SHA-256 and bytes | Exact audit copy; no content modification |

Required normalizations:

- Title/version output uses V1.2 even though the input H1 says V1.1.
- `/request-quote` and `/request-quote?...` are corrected to `/request-a-quote/` and `/request-a-quote/?...` in later link contracts.
- Selected Product/Application block, PVC option and recommendation logic are rejected.
- Shared Header/Footer and design tokens remain references, not copied implementation.

## 2. Keyword and search-intent audit

| Field | Current value | Audit result |
|---|---|---|
| Primary keyword | `titanium dioxide quote supplier` | RETAIN |
| Search intent | `T` | RETAIN — quotation and purchase action |
| Buyer stage | `RFQ / Purchase` | RETAIN |
| Source cluster | `BUYER-01` | RETAIN |
| Mapping / verification | `PLANNED_CONVERSION` / `QUALITATIVE_KEYWORD_EVIDENCE` | RETAIN |
| Search metrics | Unavailable | No volume, KD, CPC or trend inference |
| URL | `/request-a-quote/` | RETAIN; all source examples normalized |

The locally saved 2026-08-29 BUYER-01 SERP evidence supports transactional/commercial intent qualitatively. It does not prove demand, conversion, TiO2 Malaysia capability, price, inventory, MOQ, lead time or logistics.

## 3. Cannibalization and page ownership

| Intent | Owner | RFQ limit |
|---|---|---|
| Broad Malaysia titanium dioxide supplier | HOME-001 | RFQ identifies the transaction, not the broad supplier proposition |
| Country/region procurement | MARKET-* | Destination is input context, not market availability or regulatory content |
| Product/grade education | PRODUCT-* / GRADE-* | Grade selector is request context, not a selection guide |
| Application education | APP-* | Application selector is request context, not a recommendation engine |
| Sample request | CONV-SAMPLE | Alternative link only when route-ready |
| Document request | CONV-DOC | Alternative link only when route-ready |
| Privacy Policy | New independent page owned by project control | RFQ records dependency and short notice only |
| Contact utility | CONTACT-001 | Not a failure fallback and not RFQ ownership |

## 4. Buyer and procurement-stage findings

The minimum useful first-stage RFQ context is:

1. one grade or `Not sure / Need help`;
2. one Application taxonomy value;
3. required quantity and unit;
4. actual destination country;
5. company, contact name and business email;
6. optional port/city, Phone / WhatsApp, Website and Additional Requirements.

The first request does not need turnover, tax number, registered address, incumbent supplier, target price, annual consumption, payment terms or Incoterm. Removing these lowers friction without changing the later human-review need.

## 5. Field audit

| Field | V0.x disposition | V1.2 decision | Evidence/risk boundary |
|---|---|---|---|
| Product / Grade | Previously known/multiple/unknown paths | Required single-select: 14 grades + Need help | Buyer choice only; no suitability inference |
| Application | Previously six-plus Other taxonomy | Required seven-value V1.2 taxonomy | PVC rejected; no grade recommendation |
| Quantity + Unit | Retained | Required | Positive estimate is not MOQ or quote eligibility |
| Destination Country | Retained | Required actual country | Not Market selector; no serviceability inference |
| Destination Port / City | Retained | Optional | No shipping promise |
| Company Name | Retained | Required | Business identity for review |
| Your Name | Retained | Required | Personal/business contact data |
| Business Email | Retained | Required | Syntax validation only |
| Phone / WhatsApp | Previously absent | Optional and added | Privacy/data-category scope required |
| Website | Previously absent | Optional and added | Privacy/business-data scope required |
| Additional Requirements | Retained/simplified | Optional | Non-confidential warning direction; no derived facts |
| Packaging preference | Separate old field | Removed as separate field | Buyer may mention it in Additional Requirements |
| Document needs | Separate old field | Removed from RFQ form | CONV-DOC alternative link owns document workflow |
| Sample interest | Separate old field | Removed from RFQ form | CONV-SAMPLE alternative link owns sample workflow |
| Receipt/review acknowledgement checkbox | Old required checkbox | Not current by default | Exact notice/checkbox requirement belongs to Privacy/Gate 2 decision |

## 6. Product selector and relation audit

Current grades are M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.

PRODUCT V0.3 rules:

- A `product` query may preselect exactly one registered grade and remains editable.
- `Not sure / Need help` is a valid selection, not an error.
- No Application input can produce a recommended or prioritized grade.
- M-2377 upstream context remains neutral; no Specialty system relation is generated.
- Rubber is unclassified buyer text only.
- M-996 and M-2196 have no comparison, ranking, equivalence or substitution logic.
- NO_PUBLIC_MAPPING is a non-render decision, not a negative product fact.

## 7. Application taxonomy audit

| Visible value | Gate 1 status | Notes |
|---|---|---|
| Coatings | RETAIN |
| Plastics | RETAIN |
| Masterbatch | RETAIN |
| Printing Inks | RETAIN; normalize singular source wording |
| Paper | RETAIN |
| Specialty Materials | RETAIN as buyer-selected taxonomy; does not authorize M-2377 relation |
| Other / Not sure | RETAIN as the single fallback |
| PVC | REJECT / DO_NOT_ADD | May be described in buyer text but creates no taxonomy option |
| Rubber | DO_NOT_ADD | Evidence-register/buyer-text context only |

## 8. Prefill audit

- Canonical route is `/request-a-quote/`.
- Later Gate 2 may define `/request-a-quote/?product=M-2377` and `/request-a-quote/?application=plastics` as candidate input contracts.
- Prefill is visible in the applicable form field, editable and never displayed in a separate Selected Context block.
- Invalid or stale values clear to neutral state without first-load errors.
- Hidden source metadata cannot satisfy a required field.
- Prefill does not prove inventory, service area, logistics, suitability, quotation eligibility or document/sample availability.

## 9. Evidence and claim register

| ID | Evidence / candidate claim | Source and date | Scope | Status / render decision |
|---|---|---|---|---|
| E01 | Page ID, URL, page type and P0 priority | Page Registry V0.1, current 2026-09-01 | CONV-RFQ identity | VERIFIED / RETAIN |
| E02 | Keyword, intent, buyer stage and boundary | `11_page_keyword_master.csv`, current 2026-09-01 | SEO ownership | VERIFIED / RETAIN |
| E03 | V1.2 content and form direction | User input + project-control corrections, 2026-09-01 | Gate 1 intent only | USER-APPROVED CHANGE INPUT / REVIEW REQUIRED |
| E04 | Fourteen registered grades | Keyword master and PRODUCT V0.3, 2026-08-30 | Selector vocabulary | VERIFIED / RENDER AS OPTIONS |
| E05 | PRODUCT V0.3 relations | Matrix/audits, 2026-08-30 | Neutral prefill boundaries | VERIFIED WITH RESTRICTIONS |
| E06 | Global Header/Footer ownership | Global Chrome V0.5, 2026-08-31 | Shared assembly reference | APPROVED SHARED AUTHORITY / NO PAGE MODIFICATION |
| E07 | Privacy Policy page is approved as a new independent page | Current user/project-control decision, 2026-09-01 | External dependency only | APPROVED DIRECTION / RFQ MUST NOT BUILD |
| E08 | Success/failure wording | Current V1.2 decision, 2026-09-01 | Gate 1 candidate copy | PENDING CONTENT-INTENT CONFIRMATION |
| E09 | Receiver, owner and form readiness | No verified operational evidence in this task | Operational submission | DO_NOT CLAIM / RELEASE BLOCKER |
| E10 | Price, stock, MOQ, lead time, shipping, regulatory or order outcome | No evidence supplied | Commercial/operational outcomes | DO_NOT RENDER |

## 10. GEO and answer-ready candidates

| Candidate | Allowed answer direction | Evidence/freshness |
|---|---|---|
| What information is needed for an RFQ? | List only current required fields | Recheck whenever form contract changes |
| Can I request help choosing a grade? | Select Need help and provide optional context | No recommendation or suitability statement |
| What happens after submission? | Human review/contact; quotation details separately | Receiver/workflow readiness required before release |
| Can Product/Application context be carried in? | Editable single-field preselection | Route/query contract requires Gate 2 and later implementation evidence |

No Product, Offer, price, availability, shipping, certification, rating or inferred relation Schema is authorized.

## 11. Privacy and operational audit

Phone / WhatsApp, Website, name, email, company, destination and free-text content all enter the data-handling scope. Gate 1 does not decide controller, retention, recipients, rights, international transfer, checkbox basis or Privacy route implementation.

The approved short-notice candidate is recorded in Brief V1.2. Release remains blocked until:

- the independent Privacy page has a registered, approved and route-ready URL;
- final RFQ privacy wording and acknowledgement mechanism are approved;
- receiver/owner and positive-receipt behavior are verified;
- Sample/Documents alternative routes are independently ready before their links render.

## 12. Gate 1 conclusion

The V1.2 content intent, minimum fields, keyword ownership and evidence boundaries are internally coherent and ready for project-control review. The checkpoint remains pending user confirmation, Gate 2 is not authorized, and no historical visual is current.

