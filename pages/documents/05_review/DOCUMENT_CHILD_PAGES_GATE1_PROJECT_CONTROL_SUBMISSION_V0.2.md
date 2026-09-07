# Documents Child Pages Gate 1 Project-Control Submission V0.2

## 1. Control

| Field | Value |
|---|---|
| Pages | `DOC-TDS`, `DOC-REACH`, `DOC-COO` |
| URLs | `/documents/tds-sds-coa/`, `/documents/reach/`, `/documents/certificate-of-origin/` |
| Version / date | V0.2 / 2026-09-04 |
| Submission status | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
| Project-Control status | `PROJECT_CONTROL_REVIEW_COMPLETE / USER_DECISION_PENDING` |
| Page lifecycle | `BRIEF_IN_REVIEW` for all three pages |
| Gate 1 | `PENDING_USER_APPROVAL / NOT_CLOSED` |
| Content intent | `CONTENT_INTENT_CONFIRMED=NO` for all three pages |
| Gate 2–10 | `NOT_AUTHORIZED` |
| Scope | Page Intent, Gate 2 direction, CTA architecture, risk controls and decision package only |
| Explicit exclusions | No new Gate 1 research, final page copy, visual design, code, development, deployment, publication, DNS or indexing |

This version supersedes V0.1 only as the current user-decision submission. Existing source inventory, Claim Registers, official captures and evidence audits remain unchanged and continue to fail closed.

## 2. Outcome submitted for decision

The three revised pages now follow one buyer-facing sequence:

**Direct Answer → Buyer Decision Support → Context Selection → Request Documents**

Each page still owns a different search intent and decision. DOC-TDS helps the buyer choose TDS/SDS/COA and carry Grade/product/batch context into a request. DOC-REACH explains what supplier/legal-entity and supply-chain evidence must be verified without treating a commercial Grade as the registration actor. DOC-COO helps the buyer distinguish preferential, non-preferential and other applicable origin evidence before requesting transaction-relevant documentation.

All three pages retain DOC-000 as the Hub owner and CONV-DOC as the sole form/submission owner. No revised wording releases a company, product, Grade, order, shipment, registration, origin, availability or traceability claim.

## 3. Revised Page Intent Cards

### 3.1 DOC-TDS — `/documents/tds-sds-coa/`

| Field | Revised proposed value |
|---|---|
| Primary keyword | `titanium dioxide tds` |
| Audience | Procurement, formulation, technical, quality and EHS teams evaluating a titanium dioxide Grade, product or batch context. |
| Buyer problem | Identify the correct TDS, SDS or COA for the relevant titanium dioxide Grade, product or batch context and request it efficiently. |
| Core message | TDS, SDS and COA support different buyer decisions: TDS is controlled primarily by Grade and revision; SDS by product, jurisdiction/language and revision; COA by lot, batch or order context. |
| Must include | Top Direct Answer; Quick Document Choice; Find Documents by Product Grade; TDS/SDS/COA comparison; controlling context; buyer-input checklist; request process; receipt boundary. |
| Must exclude | Public Grade-document inventory, availability matrix, inferred availability, fake filenames, download links, instant-download claims, universal availability and compliance/approval/delivery guarantees. |
| Primary visible CTA | `Request TDS, SDS or COA` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| H1 direction | `Titanium Dioxide TDS, SDS & COA: What to Request` |
| Ownership | DOC-TDS owns document-choice support; Product pages own Grade facts; DOC-000 owns Hub navigation; CONV-DOC owns form and submission behavior. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |

#### Direct Answer / GEO requirement

Gate 2 must place a 2–4 sentence answer near the top for `What is the difference between a TDS, SDS and COA?` It must answer first, then qualify by Grade/revision, product/jurisdiction/language and lot/batch/order context. It must not begin with a slogan or imply availability.

#### Grade-to-request conversion

`Find Documents by Product Grade` is required. A buyer may select an approved Grade identity such as `M-2377` and continue to CONV-DOC with editable `product_grade=M-2377`. The buyer then chooses or edits `TDS`, `SDS`, `COA` or `Other`. Grade selection is request context only; it is not evidence that any document exists, is current, is available or will be delivered.

#### Gate 2 direction

Hero → Direct Answer → Quick Document Choice → Find Documents by Product Grade → TDS / SDS / COA Comparison → TDS Scope → SDS Scope → COA Scope → What Buyers Should Provide → Request Process → FAQ → Related Paths → Final CTA.

This order is a Gate 1 architecture direction only. No Gate 2 copy or module approval exists.

### 3.2 DOC-REACH — `/documents/reach/`

| Field | Revised proposed value |
|---|---|
| Primary keyword | `titanium dioxide reach registration` |
| Audience | EU-facing procurement, regulatory, EHS and supplier-qualification teams reviewing titanium dioxide supply. |
| Buyer problem | Determine what REACH registration information is relevant to the substance and what current evidence applies to the relevant supplier, legal entity and supply-chain arrangement. |
| Core message | Public substance-level information is not supplier-specific coverage. Procurement teams must verify substance identity, the relevant legal actor, manufacturer/importer/Only Representative role where applicable, supply-chain arrangement, use/market and evidence date. |
| Must include | Top Direct Answer; substance information versus supplier/supply-chain coverage; legal-actor roles; scope factors; current evidence panel; buyer checklist; contextual request path. |
| Must exclude | IKHLAS/TiO2 Malaysia registration or coverage, importer coverage, Only Representative relationship, registration number, tonnage band, legal advice and unqualified `REACH compliant` language without evidence. |
| Primary visible CTA | `Request REACH Documentation` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| H1 direction | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` |
| Ownership | DOC-REACH owns regulatory-document decision support; EU Market, Resources, Products and CONV-DOC retain their existing responsibilities. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |

#### Registration-scope correction

REACH registration/coverage must be framed around substance identity, supplier/legal entity, manufacturer/importer/Only Representative role where applicable, supply-chain arrangement, use/market and evidence date. A commercial Grade is not described as the registrant and is not assumed to correspond to an independent REACH registration.

#### Direct Answer / GEO requirement

Gate 2 must place a 2–4 sentence answer near the top for `Is titanium dioxide REACH registered?` It must first distinguish public substance-level information from evidence applicable to the relevant supplier/legal entity and supply arrangement, then state what the buyer must verify. It cannot infer IKHLAS, TiO2 Malaysia, importer or Only Representative coverage.

#### Titanium-dioxide-specific ECHA evidence requirement

Titanium-dioxide-specific official ECHA evidence must be completely captured and approved before any substance-specific visible claim is released. Current ECHA HTTP 403 captures and search summaries are discovery-only. Gate 2 architecture may later be prepared only after approval, but the substance-specific visible conclusion remains held; secondary sources cannot substitute for approved official evidence.

#### Gate 2 direction

Hero → Direct Answer → Substance-Level Information vs Supplier/Supply-Chain Coverage → Legal Actor and Supply-Chain Roles → Scope Factors → Buyer Verification Checklist → Dated Official Evidence / Source Panel → Request REACH Documentation → EU Market / Document Hub Paths → FAQ → Final CTA.

This order is a Gate 1 architecture direction only. No Gate 2 copy or module approval exists.

### 3.3 DOC-COO — `/documents/certificate-of-origin/`

| Field | Revised proposed value |
|---|---|
| Primary keyword | `titanium dioxide country of origin certificate` |
| Audience | Procurement, supplier-qualification, import/export and trade-documentation teams. |
| Buyer problem | Determine which type of origin evidence is relevant to the destination and transaction, what it proves, and what information is needed to request or verify it. |
| Core message | The appropriate proof of origin depends on the destination, applicable rules of origin and transaction context. A certificate of origin is evidence for a defined transaction context; it is not a generic product badge or customs guarantee. |
| Must include | Top Direct Answer; what a proof/certificate establishes; preferential proof/certificate; non-preferential COO; other proof/declaration where applicable; destination/scheme; rules of origin; transaction context; origin evidence versus traceability; request checklist. |
| Must exclude | Company/product/shipment Malaysia-origin, issued COO, universal certificate form, customs/duty outcome, circumvention and generic traceability claims without approved evidence. |
| Primary visible CTA | `Request Origin Documentation` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| H1 direction | `Titanium Dioxide Country of Origin Certificate: What Buyers Should Verify` |
| Ownership | DOC-COO owns origin-document decision support; About owns approved company/origin facts; Markets own destination context; Resources own dated trade analysis; Products own Grade identity; CONV-DOC owns form/submission. |
| Checkpoint | `CONTENT_INTENT_CONFIRMED=NO / USER_DECISION_REQUIRED` |

#### Preferential / non-preferential origin distinction

Gate 2 must use this decision chain:

Destination / applicable scheme → Rules of origin → Origin qualification → Appropriate proof or certificate → Transaction documentation.

It must distinguish preferential Certificate/Proof of Origin, non-preferential Certificate of Origin and other Proof/Declaration of Origin where the applicable procedure allows it. Certificate of Origin must not be presented as one universal product file for all destinations and transactions.

#### Direct Answer / GEO requirement

Gate 2 must place a 2–4 sentence answer near the top for `What does a Certificate of Origin prove for titanium dioxide?` It must answer first and then qualify by destination, applicable rules and transaction context. It cannot imply product/shipment Malaysia origin, certificate availability or customs outcome.

#### Malaysia-origin publication hold

The site strategy uses `Malaysia-origin Titanium Dioxide`, while current Gate 1 evidence does not independently prove company-, product-, Grade- or shipment-level Malaysia origin. This is an explicit publication risk. `Company/product Malaysia-origin claims remain publication-held until supported by approved first-party origin evidence.` The strategic positioning is retained in project controls but does not release a buyer-visible claim.

#### Gate 2 direction

Hero → Direct Answer → What a Certificate / Proof of Origin Establishes → Preferential vs Non-Preferential Origin Evidence → Why Destination and Transaction Matter → Rules-of-Origin Context → Origin Evidence vs Product Traceability → What Buyers Should Provide → Request Origin Documentation → Official Source / Reviewed Date → Related Market / About / Document Hub Paths → FAQ → Final CTA.

Preferential/non-preferential distinction precedes origin-versus-traceability. This order is a Gate 1 architecture direction only. No Gate 2 copy or module approval exists.

## 4. What differs among the pages

| Dimension | DOC-TDS | DOC-REACH | DOC-COO |
|---|---|---|---|
| Direct question | What is the difference between TDS, SDS and COA? | Is titanium dioxide REACH registered? | What does a COO prove for titanium dioxide? |
| Buyer decision | Which document and context to request | Which legal actor/supply-chain evidence applies | Which origin-evidence type and transaction context apply |
| Context selector | Grade/product/batch request context | Legal actor, role, supply arrangement, use/market and date | Destination, scheme, rules of origin, order/shipment context |
| Unique element | Grade-to-request conversion without availability inference | Substance information versus supplier/supply-chain coverage | Preferential versus non-preferential/other origin evidence |
| Registration/origin rule | Not applicable | Commercial Grade is not the registrant | Certificate is not a universal product badge |
| Primary visible CTA | `Request TDS, SDS or COA` | `Request REACH Documentation` | `Request Origin Documentation` |
| Main publication hold | Document inventory/availability | Supplier/legal-entity/supply-chain coverage and ECHA TiO2 evidence | Company/product/shipment Malaysia origin and traceability |

## 5. Evidence and claim disposition

No Gate 1 research or claim disposition is changed by V0.2.

| Page | Register rows | `RENDER` | `RENDER_WITH_QUALIFIER` | `CONTROLLED_REQUEST_ONLY` | `DO_NOT_RENDER` |
|---|---:|---:|---:|---:|---:|
| DOC-TDS | 10 | 2 | 3 | 1 | 4 |
| DOC-REACH | 10 | 1 | 4 | 1 | 4 |
| DOC-COO | 10 | 0 | 5 | 1 | 4 |

Retained evidence findings:

- Shared inventory remains 34 rows: 29 existing local sources including 18 TDS PDFs across the approved 14-Grade architecture, plus five explicitly recorded evidence gaps. Existing file hashes remain the authority; local presence is not public availability.
- DOC-TDS: no approved first-party SDS or COA inventory; TDS versions cannot be merged; no file names, counts or downloads become buyer-visible.
- DOC-REACH: two complete European Commission captures support general qualified explanation. ECHA detail remains unavailable as approved complete capture, and no company/legal-entity/supply-chain coverage evidence exists.
- DOC-COO: Royal Malaysian Customs is the lead general source; dated MITI content is supporting context only. Neither proves company/product/shipment origin, an issued COO or traceability capability.

## 6. Risks and controls

| Risk | Required control |
|---|---|
| Local file presence is treated as public availability | No public inventory, fake filename, download link, instant-download claim or local-file-presence inference. |
| Grade selection is treated as document availability | Grade is an editable request-context value only; no availability matrix or inferred Grade-document relationship. |
| SDS/COA are assumed available | No availability statement without approved first-party evidence. |
| Search wording becomes a supplier REACH claim | No supplier/company/legal-entity coverage, registration number, tonnage or Only Representative relationship without evidence. |
| Commercial Grade is treated as the registrant | Registration scope uses substance, legal actor, role and supply arrangement; Grade remains product identity only. |
| Generic substance information becomes a visible titanium-dioxide conclusion | Titanium-dioxide-specific visible claims remain held until complete approved official ECHA evidence exists. |
| General origin guidance becomes TiO2 Malaysia origin proof | Company/product Malaysia-origin claims remain publication-held until approved first-party evidence exists. |
| One COO form is presented as universal | Distinguish preferential, non-preferential and other applicable proof/declaration by destination, scheme and rules. |
| Origin content implies customs result or trade-measure avoidance | No customs/duty guarantee and no circumvention framing. |
| Origin evidence is confused with traceability capability | Explain the distinction; do not claim generic traceability without evidence. |
| Contextual CTA implies approval or delivery | Request receipt means review only, not approval or guaranteed delivery. |
| Provisional route is treated as live-approved | `PROVISIONAL_URL` remains; no publication or indexing authority. |
| Revised submission is mistaken for user approval | Status remains `PENDING_USER_APPROVAL`; `CONTENT_INTENT_CONFIRMED=NO`; Gate 2–10 remain unauthorized. |

## 7. Current authority pointers

| Page | Revised Brief | Current Gate 1 Manifest | Manifest SHA-256 | Evidence artifacts |
|---|---|---|---|---|
| DOC-TDS | `docs/page-briefs/DOC-TDS_TDS_SDS_COA_BRIEF_V0.2.md` | `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE1_BASELINE_MANIFEST_V0.2.md` | `EA63B0B03A72873A43875090990CD2D15F7EA9FE999E8D4732AA4B158302332B` | Audit V0.1 + Claim Register V0.1 + shared inventory/audit V0.1 retained |
| DOC-REACH | `docs/page-briefs/DOC-REACH_TITANIUM_DIOXIDE_REACH_BRIEF_V0.2.md` | `pages/documents/reach/05_review/DOC-REACH_CURRENT_GATE1_BASELINE_MANIFEST_V0.2.md` | `B1CB6D764DE8899590D9D55293815313BAABCDF4F721E9D8B42EB9D27094D557` | Audit V0.1 + Claim Register V0.1 + official source manifest retained |
| DOC-COO | `docs/page-briefs/DOC-COO_CERTIFICATE_OF_ORIGIN_BRIEF_V0.2.md` | `pages/documents/certificate-of-origin/05_review/DOC-COO_CURRENT_GATE1_BASELINE_MANIFEST_V0.2.md` | `8D4ABE0AD0E63DC835DA9F8A1B0DE93FC84C637DCE52B46A9A29D163EAAE30D5` | Audit V0.1 + Claim Register V0.1 + official source manifest retained |

V0.1 Briefs, Manifests and submission remain preserved as historical review artifacts. They are not current Page Intent authority and are not deleted or rewritten.

## 8. Project-Control recommendation and requested decision

**Recommendation:** `APPROVE REVISED PAGE INTENT CARDS WITH ALL EVIDENCE HOLDS PRESERVED`.

The user must decide each Page ID separately:

| Page | Available decision | Current decision |
|---|---|---|
| DOC-TDS | Approve / Revise / Reject | `PENDING_USER_DECISION` |
| DOC-REACH | Approve / Revise / Reject | `PENDING_USER_DECISION` |
| DOC-COO | Approve / Revise / Reject | `PENDING_USER_DECISION` |

If a page is approved, a separate closure record may record that user decision, close Gate 1 with the Evidence Holds preserved and update the content-intent checkpoint. Gate 2 may begin only when the user explicitly authorizes it. This V0.2 submission itself does not close Gate 1 or authorize Gate 2.

No decision here releases an Evidence Hold, approves the provisional URL for live publication, or authorizes Gate 3–10, final copy, visual design, code, development, deployment, publication, DNS or indexing.

## 9. Change record

| Version | Date | Change | State |
|---|---|---|---|
| V0.1 | 2026-09-04 | Initial combined Gate 1 decision package | `HISTORICAL / SUPERSEDED_BY_V0.2` |
| V0.2 | 2026-09-04 | DOC-TDS Grade-to-request conversion restored; DOC-TDS buyer intent corrected; DOC-REACH registration scope language corrected; ECHA TiO2-specific evidence hold added; DOC-COO preferential/non-preferential origin distinction added; Malaysia-origin publication evidence hold made explicit; contextual CTA architecture introduced; Direct Answer / GEO requirement added; secondary CTA standardized to `View Document Hub` | `REVISED_GATE1_SUBMISSION / PENDING_USER_APPROVAL` |
