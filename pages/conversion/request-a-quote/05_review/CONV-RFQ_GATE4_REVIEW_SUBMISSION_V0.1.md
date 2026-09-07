# CONV-RFQ Gate 4 User Review Submission V0.1

## 0. Submission control

| Field | Value |
|---|---|
| Submission ID | `CONV-RFQ-G4-SUB-01` |
| Page | `CONV-RFQ` — Request a Quote |
| URL | `/request-a-quote/` |
| Primary keyword | `titanium dioxide quote supplier` |
| Date | 2026-09-01 |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Current gate | Gate 4 |
| Status | `SUBMITTED_FOR_USER_GATE_4_REVIEW / NOT_APPROVED` |
| Authorization | User instruction dated 2026-09-01 to establish the Conversion Playbook, advance CONV-RFQ through Gate 4 and stop |
| Stop | Gate 5 `NOT_STARTED / LOCKED` |
| Prohibited | Gate 5 complete visual, Gate 6/7, development, CMS, code, tests, deployment, indexing activation and publication |

## 1. Outcome submitted

The package establishes the Conversion shared workflow baseline and advances only CONV-RFQ to a reviewable Gate 4 visual direction:

- one form-first RFQ page architecture;
- a minimum B2B field contract with conditional unknown-grade support;
- explicit Products, Grade, Applications, Markets, Documents and Resources prefill rules;
- receipt-only success and channel-free fail-closed failure;
- SEO/GEO/Schema recommendations without activation;
- Desktop 1440px, Tablet 834px and Mobile 390px wireframes;
- S00–S18 normal, interaction, failure, success and restricted states;
- visual direction consuming Global Chrome V0.5 and exact production SVG bindings.

No complete Gate 5 visual or public route is represented as ready.

## 2. Authoritative package manifest

| Role | Path | SHA-256 | Status |
|---|---|---|---|
| Shared Conversion Playbook | `docs/page-playbooks/CONVERSION_PLAYBOOK_V0.1.md` | `DEFFD73A7CB5E2399E128CD5E35308E5536D6E2D242FBD678BE4709914733047` | `USER_AUTHORIZED_WORKING_BASELINE / PCR_PENDING` |
| Current page Brief | `docs/page-briefs/CONV-RFQ_REQUEST_A_QUOTE_BRIEF_V0.1.md` | `E45FE974F668AC349AE97232C6C703D722642095108ED98C8C258A4CD269C242` | `DESIGN_IN_REVIEW` |
| Gate 2 content/form | `pages/conversion/04_planning/CONV-RFQ_CONTENT_ARCHITECTURE_V0.1.md` | `3A2BA84BF6C50DE647FE4B716199FCFA27A4B36078FA06408F87B7B3C3CEB8C5` | `COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED` |
| Gate 2 SEO/GEO/Schema | `pages/conversion/04_planning/CONV-RFQ_SEO_GEO_SCHEMA_CONTRACT_V0.1.md` | `503EB2448F826B8319FE63F82D3BFCD353E667D24D0AC73CBEAC132F4F2A6CD0` | `INDEX_DECISION_PENDING_REVIEW` |
| Gate 3 wireframe | `pages/conversion/04_planning/wireframes/CONV-RFQ_WIREFRAME_SPEC_V0.1.md` | `A7F0F0C1A9D1FB8D368C3C37D4FA5C51EF873FCC58EDC58A1699F5CA0DB077C5` | `COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED` |
| Gate 4 visual direction | `pages/conversion/04_planning/visual-directions/CONV-RFQ_VISUAL_DIRECTION_V0.1.md` | `7A469FD26F609C3A7734226261D9E494D4903F41EAC223075048DE754D722B3A` | `SUBMITTED_FOR_USER_GATE_4_REVIEW / NOT_APPROVED` |

Any later modification changes the corresponding hash and requires an updated manifest version.

## 3. Gate ledger

| Gate | Deliverable | Conclusion | Approval source / pending decision |
|---|---|---|---|
| Gate 0 | Identity and admission | `PROGRESSION_AUTHORIZED_BY_USER` | User authorized progression on 2026-09-01; identity unchanged |
| Gate 1 | Research/evidence/relationship boundary | `PROGRESSION_AUTHORIZED_BY_USER` | Existing evidence freezes retained; no claim waiver |
| Gate 2 | Content, form, SEO/GEO/Schema, CTA, prefill, internal links | `COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED` | Submitted in this package |
| Gate 3 | Desktop/Tablet/390px wireframe and S00–S18 states | `COMPLETED_FOR_GATE_4_SUBMISSION / NOT_USER_APPROVED` | Submitted in this package |
| Gate 4 | Visual direction | `SUBMITTED_FOR_USER_GATE_4_REVIEW / NOT_APPROVED` | User decision requested |
| Gate 5 | Complete visuals and final visible states | `NOT_STARTED / LOCKED` | Requires new explicit authorization after Gate 4 review plus missing inputs |
| Gate 6+ | Review/handoff/development/release | `OUT_OF_SCOPE / NOT_AUTHORIZED` | No action |

## 4. Review decisions requested

| Decision ID | User decision | Current recommendation | Consequence if returned |
|---|---|---|---|
| `CONV-RFQ-G4-D01` | Form-first White/Soft Background visual direction | Approve | Revise hierarchy/treatment only; preserve form and evidence boundaries |
| `CONV-RFQ-G4-D02` | 4/8 Desktop, stacked Tablet/Mobile layout | Approve | Revise wireframe without changing fields/CTA |
| `CONV-RFQ-G4-D03` | Accessible Deep Teal submit and restrained error/success colours | Approve | Revise tokens; maintain contrast and state separation |
| `CONV-RFQ-G4-D04` | No photography, availability badges or quote calculator | Approve | Any asset addition must remain claim-safe |
| `CONV-RFQ-G4-D05` | Gate 2 `index, follow` + self-canonical recommendation after release gates | Conditionally approve | Keep decision pending; no activation occurs here |
| `CONV-RFQ-G4-D06` | Privacy wording and real receiver/manual-channel input required before Gate 5 | Provide or keep blocked | Gate 5 remains locked; no invented copy/channel |

## 5. Form and content summary for review

### 5.1 Required initial data

- Contact name.
- Company / organization.
- Business email.
- Destination country / market.
- Product/grade path: known, multiple or unknown/help.
- Application.
- Non-confidential current/target requirement only when grade is unknown.
- Estimated purchase quantity and unit.
- Receipt/review acknowledgement.
- Approved privacy notice before Gate 5/release.

Optional: destination city/port, packaging preference, document needs, sample interest and non-confidential notes.

The form does not require phone, full address, registration number, payment data, upload, confidential formulation, desired price, current supplier, mandatory Incoterm or marketing consent.

### 5.2 Exact action and success boundary

- Global Chrome: `Request a Quote` → `/request-a-quote/`.
- Page form: `Submit RFQ for Review`.
- Success: `Quotation request received`.
- Receipt is not a quotation and does not confirm price, stock, MOQ, lead time, shipping, sample/document availability, order acceptance or approval.

## 6. Prefill and PRODUCT V0.3

- Explicit valid context is visible, editable and removable.
- Empty/invalid context leaves a complete usable form and no first-load error.
- M-2377 may carry Coatings, Plastics, Masterbatch, Printing Inks, Paper and Sulfate neutral context.
- M-2377 → Specialty Materials is not system-generated; Rubber remains unclassified buyer text under Other only.
- M-996 and M-2196 can be selected independently/together with no comparison, ranking, equivalence or substitute language.
- `NO_PUBLIC_MAPPING` is not rewritten as not applicable, unsuitable, unsupported, impossible, unavailable or prohibited.

## 7. Global Chrome and production SVG verification

| Check | Result |
|---|---|
| Global authority | `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` |
| Desktop / Mobile Header | 84px / 64px |
| Mobile order | `Logo | RFQ | Menu` |
| Fixed RFQ surfaces | Desktop Header, Mobile Header, Mobile Menu, Desktop Footer, Mobile Footer |
| Conversion current links | 0 per navigation surface unless a later mapping is approved |
| Buyer-visible `CURRENT` | 0 |
| Header production SVG | Primary horizontal hash `EEED3A758E7AE1B847238D1C88E86EEE7A8E67B863969AF4D286747E9A72487C` |
| Footer production SVG | Reverse hash `7CFAEAFA02AC8469A006C9489DB2F92B15B2621E4151B04EFE1B30FC734C1B5E` |
| Contact fallback | 0 |

## 8. Open blockers and controlled states

| ID | Level | Open item | Current safe treatment |
|---|---|---|---|
| `CONV-RFQ-B01` | BLOCKS GATE 5 / RELEASE | Controller, purpose, retention, recipients/transfer, rights and privacy contact copy not approved | Gate 3–4 annotated slot only; no Buyer Clean legal text |
| `CONV-RFQ-B02` | BLOCKS OPERATIONAL RELEASE | RFQ receiver/inbox/human owner not verified | No receiver claim, SLA or false success path |
| `CONV-RFQ-B03` | CONDITIONAL FAILURE BRANCH | No verified manual failure channel | Channel-free fail-closed copy + `Try again`; no Contact/email/phone |
| `CONV-RFQ-B04` | RELEASE BLOCKER | Route/form readiness not tested | `RFQ_ROUTE_READY=false = RELEASE_BLOCKER`; Global RFQ remains visible |
| `CONV-RFQ-B05` | REVIEW DECISION | INDEX/FOLLOW/self-canonical recommendation not approved | No indexing activation in this task |
| `CONV-RFQ-B06` | PCR PENDING | Conversion Playbook is a user-authorized working baseline, not project-control-closed | Sibling consumption allowed under user authorization; no stable-approval claim |

## 9. Sibling Playbook notification

The Playbook path/version/hash was sent on 2026-09-01 to:

- CONV-SAMPLE task `01a05138-ed78-78a1-82f4-70b8739f83cc`;
- CONV-DOC task `01a05138-e9da-74c2-b189-c538a795b6d4`;
- project control task `01a04b7e-5fed-7171-ae92-e946cfd7bdae`.

The message instructs both sibling tasks to consume the single Playbook and not create an alternative. It does not approve their page-specific Briefs, content or Gates.

## 10. Scope verification

- [x] This task authored only CONV-RFQ page-specific artifacts; any CONV-DOC or CONV-SAMPLE artifacts concurrently present under `pages/conversion/` remain independently owned by their sibling tasks. The shared Playbook covers only the mandated cross-page rules.
- [x] CONV-DOC and CONV-SAMPLE page-specific body copy was not authored here.
- [x] URL, page identity and primary keyword remain unchanged.
- [x] PRODUCT V0.3 and comparison holds remain.
- [x] Global Chrome V0.5 and production SVGs are consumed without modification.
- [x] No duplicate page-body RFQ CTA or Contact fallback is added.
- [x] No approved privacy text, receiver, price, stock, MOQ, lead time, shipping, sample, file or order claim is invented.
- [x] Gate 5 and later work did not start.
- [x] `D:\16Wordpress_nextjs` was not accessed.

## 11. Stopping condition

`CONV-RFQ-G4-SUB-01 = SUBMITTED_FOR_USER_GATE_4_REVIEW / NOT_APPROVED`

Work stops. The next action must be a user Gate 4 approval, return or revision instruction. No Gate 5, development or publication action is implied.
