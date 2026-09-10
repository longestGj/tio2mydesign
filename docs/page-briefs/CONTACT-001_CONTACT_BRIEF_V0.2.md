# CONTACT-001 Contact Page Brief V0.2

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `CONTACT-001` |
| Page | Contact |
| URL | `/contact/` |
| Brief version | `V0.2` |
| Date | `2026-09-07` |
| Status | `GATE1_APPROVED / CLOSED` |
| Lifecycle | `GATE6_APPROVED_CLOSED / HANDED_OFF_TO_GATE8` |
| Mapping status | `PLANNED_UTILITY` |
| Verification status | `CONTACT_DETAILS_REQUIRED` |
| Current Gate | `GATE 6 APPROVED / CLOSED; GATE 8 USER_AUTHORIZED / DISPATCH_SENT` |
| Content-intent checkpoint | `USER_APPROVED / CONTENT_INTENT_CONFIRMED_2026-09-10` |
| Gate 2 | `APPROVED / CLOSED` — user continuous authorization, 2026-09-10 |
| Gate 3 | `APPROVED / CLOSED` — `CONTACT-001-G3-IR-01`, reviewer `00-gate3`, required Findings `0`, approval basis `USER_STANDING_AUTHORITY` |
| Gate 4 | `APPROVED / CLOSED` — `CONTACT-001-G4-IR-01`, targeted recheck PASS, required Findings `0`, approval basis `USER_STANDING_AUTHORITY` |
| Gate 6 | `APPROVED / CLOSED` — `CONTACT-001-G6-IR-01`, reviewer `00-gate3`, required Findings `0`, approval basis `USER_STANDING_AUTHORITY` |

V0.2 is the current complete approved Gate 1 Brief. It preserves `CONTACT-001_CONTACT_BRIEF_V0.1.md` and the 2026-08-30 audit as historical inputs, but corrects their obsolete page-count, Global Chrome, missing-Privacy and automatic `DO_NOT_RENDER` assumptions. On 2026-09-10 the user approved the site-wide-derived Page Intent direction `GENERAL_CONTACT_FIRST_WITH_SPECIALIST_ROUTING_SUPPORT` and closed `CONTACT-D01`–`D05`. Gate 1 is approved and closed; no later Gate is authorised by that closure.

## 1. Page identity

| Field | Value |
|---|---|
| Section | ABOUT |
| Page type | Utility contact page |
| Market / language | GLOBAL / EN |
| Priority | P1 |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Secondary navigation phrases | `contact TiO2 Malaysia`; `contact IKHLAS Titanium` |
| Planned domain | `https://tio2malaysia.com` |
| Canonical direction | `https://tio2malaysia.com/contact/`; final route/canonical parity belongs to later implementation and QA |
| Indexing direction | `INDEX / FOLLOW / USER_APPROVED_2026-09-10`; retain `NO_PRIMARY_KEYWORD` and the commercial-keyword exclusion boundary |
| Site scope | `tio2-my`; future development must not read another scope as fallback |

The page identity, URL and utility responsibility match Registry V0.2 and the current keyword master. No page or keyword change is proposed.

## 2. Current authority and historical reconciliation

### 2.1 Consumption order

1. Current user decisions and root governance.
2. Project Context and Registry V0.2.
3. Keyword master CONTACT-001 row.
4. Gate 1–5 Standard V1.1 and Governance Details §10.8.
5. Global Chrome V0.5 and current legal/privacy architecture.
6. `pages/contact/00_governance/CONTACT-001_SITE_WIDE_ROLE_USER_DECISION_2026-09-10.md` and `pages/contact/01_research/CONTACT-001_SITE_WIDE_ENTRY_AND_ROLE_AUDIT_V0.1.md`.
7. Current approved About/company facts and legal/privacy contact decisions within their recorded scope.
8. This Brief, the current Gate 1 research report and Claim Evidence Register.
9. Search-intent Skill report and dated first-party/search observations.
10. V0.1 Brief, the 2026-08-30 audit and the V0.1 route-first execution/review as historical context only where they do not conflict.

### 2.2 Reconciliation findings

| ID | Historical position | Current finding | Gate 1 treatment |
|---|---|---|---|
| `CONTACT-C01` | 54-page Registry V0.1 | Registry V0.2 has 57 pages | Use Registry V0.2. |
| `CONTACT-C02` | Global Chrome V0.2; no Contact current mapping | V0.5 maps About/Contact to `About` and prohibits visible `CURRENT` text | Use shared V0.5; page does not design a local Header/Footer. |
| `CONTACT-C03` | No approved Privacy page | Privacy EN/BM and Cookie Policy are current; Terms is removed | Contact links only to `/privacy-policy/`; no Terms link. |
| `CONTACT-C04` | Every unconfirmed contact value became `DO_NOT_RENDER` | Current root rule requires concrete user fact confirmation unless contradiction/prohibition exists | Use `PENDING_USER_FACT_CONFIRMATION` for Contact-scope address/email choices. |
| `CONTACT-C05` | About/Contact Playbook missing and treated as a formal Gate 2 blocker | File is still absent; current Governance Details §10.8 supplies the minimum type contract, and a page-specific approved Brief may control this page | Record the gap; recommend approving this page-specific exception with Gate 1. Do not create a generic Playbook in this task. |

## 3. Page Intent Card — user confirmed 2026-09-10

| Required item | Proposed direction |
|---|---|
| Audience | International B2B visitors arriving from About, the 404 recovery path, the shared Footer or a direct branded/contact visit with a company or general business question |
| Buyer problem | “How can I contact TiO2 Malaysia about a general company or business matter, and where should I go if I actually need a quote, document or sample?” |
| Core message | Contact TiO2 Malaysia directly for general company and business inquiries; use the dedicated request pages for quotation, documents and samples. |
| Must include | Operating company; a directly visible general contact channel; one concise general-inquiry action/form; supporting routing to Request a Quote, Request Documents and Request a Sample; Privacy Policy link; shared Global Chrome reference |
| Must exclude | Supplier-keyword landing copy; product selection; pricing/quantity collection; sample qualification; document-type selection; claims of response time; fake phone/address/email; visible internal governance states |
| Primary CTA | `Send a General Inquiry` — submits a minimal general-inquiry form after later field, processor and receiver implementation |
| Secondary CTA | `Request a Quote` — `/request-a-quote/` as a supporting specialist route |
| Supporting paths | `Request Documents` — `/request-documents/`; `Request a Sample` — `/request-sample/` |
| Ownership boundary | CONTACT-001 owns residual general inquiries. CONV-RFQ, CONV-SAMPLE and CONV-DOC own their complete specialist workflows. ABOUT-001 owns company story/proof. |

Recommended layout logic for Gate 2, not a locked final module order: answer general contact intent in the Hero, show the visible general channel and `Send a General Inquiry` action, explain the three specialist routes immediately below, then provide the compact form and approved company/location details.

## 4. Buyer questions and Gate 2 answer priorities

| Priority | Buyer question | Page responsibility | Gate 2 answer direction |
|---:|---|---|---|
| 1 | How can I contact TiO2 Malaysia about a general company or business matter? | CONTACT-001 | Show the approved direct channel and general-inquiry action without first forcing a specialist choice |
| 2 | Is my task actually a quotation, document request or sample request? | CONTACT-001 routes; conversion pages complete the task | Three clearly named supporting paths with no duplicated specialist fields |
| 3 | Who operates this website and receives a general inquiry? | CONTACT-001 | Show the approved operating-company name; do not claim a response SLA |
| 4 | What information is needed for a general question? | CONTACT-001 | Minimal form only; no product/quantity/document workflow |
| 5 | Can I contact the company by email or at a physical location? | CONTACT-001 only after Contact-scope approval | Show only the exact approved values and labels; no empty cards |
| 6 | What happens after I send the message? | CONTACT-001 | Confirm successful transmission/receipt for review only when the service actually succeeds; preserve input on failure |
| 7 | How is my information used? | Contact summary plus Privacy owner | One short task-specific notice and `/privacy-policy/`; no marketing consent bundle |

## 5. Keyword and cannibalisation contract

| Field | Gate 1 direction |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Search intent | Navigation / utility contact |
| Buyer stage | Contact / task routing |
| Excluded keywords | `supplier`; `manufacturer`; product/grade terms; application terms; document-information terms; quotation/sample/document-request workflow terms |
| Boundary | Contact may name specialist routes but must not reproduce their conversion fields or target their commercial intents. |
| H1 direction | Plain branded utility wording such as `Contact TiO2 Malaysia`; final wording belongs Gate 2 |
| Title direction | Brand + Contact utility; no supplier/manufacturer keyword expansion |
| Meta direction | Help visitors choose the appropriate request path or send a general inquiry; no response-time or service guarantee |

Fresh exact-query evidence is qualitative and noisy. Search Volume, KD, CPC and trend are `Unavailable`, not zero. No SEO priority change is proposed.

## 6. Facts, entities and machine-readable direction

### 6.1 Approved/current facts that may be used

- Brand: `TiO2 Malaysia`.
- Operating company: `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` using `Organization.name`, never `legalName`.
- Page identity: Contact utility at `/contact/`.
- Privacy Policy route: `/privacy-policy/`.
- Dedicated request page identities/URLs as registered site architecture.
- Contact belongs to the shared `About` navigation state under Global Chrome V0.5; no visible `CURRENT` word.

### 6.2 Contact-scope decisions required

| Decision ID | Proposed public content | Current evidence/scope | Recommendation |
|---|---|---|---|
| `CONTACT-D01` | Show `NO.33 Industrial Perusahaan Ringan Tupai, 34000 Taiping, Perak, Malaysia` as `Manufacturing Site` on Contact | `USER_APPROVED / CLOSED` on 2026-09-10 | Render the exact address and label in visible content and consistent SEO/GEO/Schema. Do not append `Business Correspondence`, registered-office, visitor, map, directions or opening-hours meaning. |
| `CONTACT-D02` | Show `info@tio2malaysia.com` as `General Inquiries` on Contact | `USER_APPROVED / CLOSED` on 2026-09-10 | Render as plain text only; no `mailto:` or other clickable email link. The same fact may be used in consistent SEO/GEO/Schema semantics. This does not designate the form receiver. |
| `CONTACT-D03` | Do not show `sales@mytio2.com`, `technical@mytio2.com`, `logistics@mytio2.com` or `info@mytio2.com` on the TiO2 Malaysia Contact baseline | `USER_APPROVED / CLOSED` on 2026-09-10 | Omit them from visible content, metadata, GEO, Schema, actions and fallback channels. This does not declare the mailboxes invalid in another approved scope. |
| `CONTACT-D04` | Show no public Phone/WhatsApp content in this baseline | `USER_APPROVED / CLOSED` on 2026-09-10 | No card, label, action, placeholder, empty slot or hidden machine-readable value. A future exact number and purpose require a separately approved scoped change. |

### 6.3 GEO / Schema direction

- Primary entities: Contact page, TiO2 Malaysia brand and operating Organization.
- Candidate page type: visible Contact utility represented as `ContactPage`/`WebPage`, subject to Gate 2 Schema review.
- Organization email/address properties may appear only when the same approved value and label are visible. `info@tio2malaysia.com` is approved as the visible `General Inquiries` email and may be represented consistently in Schema, but the visible email remains plain text with no clickable email link.
- Dedicated route links may be represented as visible navigation/actions, not as offers, approvals or completed transactions.
- Do not create hidden `ContactPoint`, telephone, department, response-time, opening-hours, registered-office or visitor-location facts.

## 7. General-inquiry form direction

### 7.1 Recommended minimum fields for Gate 2 review

| Field | Proposed requirement | Boundary |
|---|---|---|
| Full Name | Required | Reply context only |
| Company | Required | B2B context; Gate 2 may challenge requiredness if reader friction is material |
| Business Email | Required | Reply channel; format validation does not prove identity |
| Country / Region | Required free text | No unverified shared country-list dependency |
| Subject | Required | Short description of the general question |
| Message | Required | General inquiry only; long-copy and character limits belong Gate 2 |
| Privacy notice | Visible text + `/privacy-policy/` link | No marketing consent or nonexistent Terms link |

Excluded from the general form: Product/Grade, quantity, packing, destination port, sample details, document types, file upload, payment data, residential address, Phone/WhatsApp and marketing consent. Specialist requests go to their owner pages. The user also approved zero public Phone/WhatsApp contact surfaces for the current baseline.

### 7.2 Future state contract

- Default, keyboard focus, field error, error summary and submitting states.
- Success must reflect an actual successful service response and should say the message was received/sent for review without promising a reply time.
- Failure keeps all entered values and offers `Try again`; it must not claim receipt or redirect a failed specialist workflow to Contact.
- No form is described as live in Gate 1. Processor, receiver, spam handling, retention parity and monthly-limit behaviour belong later Gate 7–9 contracts.

## 8. Shared Chrome and page relationships

- Header, Mobile Header, Mobile Menu and Footer are referenced from Global Chrome V0.5 and its successors. CONTACT-001 does not create page-local versions.
- Per V0.5, `About` receives the visual/semantic current state for Contact; buyer-visible `CURRENT` text remains zero.
- RFQ is permanently visible in shared Chrome and points to `/request-a-quote/`.
- Footer legal utility shows Privacy Policy, Cookie Policy and Cookie Settings; no Terms of Use.
- Contact cannot be used as an RFQ/Sample/Documents failure fallback.

## 9. Gate state and user decision package

| Item | State |
|---|---|
| Gate 1 Agent execution | Earlier route-first submission retained as history; current direction corrected by site-wide audit and user decision |
| Page Intent Card | `USER_APPROVED / CONTENT_INTENT_CONFIRMED_2026-09-10` |
| Contact-specific Playbook exception | Recommend approving this Brief under Governance §10.8; generic Playbook remains absent |
| Gate 1 decisions | `CONTACT-D00-R1` and `CONTACT-D01`–`D05` all `USER_APPROVED / CLOSED` |
| Gate 2 | `APPROVED / CLOSED` |
| Gate 3 | `APPROVED / CLOSED`; independent reviewer `00-gate3`; `CONTACT-001-G3-IR-01` required Findings `0` |
| Gate 4 | `APPROVED / CLOSED`; `CONTACT-001-G4-IR-F01=CLOSED`; required Findings `0` |
| Gate 6 | `APPROVED / CLOSED`; `CONTACT-001-G6-IR-01`; required Findings `0` |
| Gate 8–10 | `NOT_STARTED / NOT_AUTHORIZED` |

The Page Intent direction and all five Contact-surface decisions are approved. Gate 1 through Gate 4 and Gate 6 are closed. A separate user authorization has handed the approved package to the existing `00My开发2` Gate 8 task; Gate 9/10, deployment and publication remain unauthorized.
