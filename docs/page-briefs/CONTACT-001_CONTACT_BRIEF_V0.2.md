# CONTACT-001 Contact Page Brief V0.2

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `CONTACT-001` |
| Page | Contact |
| URL | `/contact/` |
| Brief version | `V0.2` |
| Date | `2026-09-07` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Lifecycle | `BRIEF_IN_REVIEW` |
| Mapping status | `PLANNED_UTILITY` |
| Verification status | `CONTACT_DETAILS_REQUIRED` |
| Current Gate | Gate 1 execution submission |
| Content-intent checkpoint | `PENDING_PROJECT_CONTROL_AND_USER_APPROVAL` |
| Gate 2 | `NOT_STARTED / NOT_AUTHORIZED` |

V0.2 is a successor Gate 1 draft. It preserves `CONTACT-001_CONTACT_BRIEF_V0.1.md` and the 2026-08-30 audit as historical inputs, but corrects their obsolete 54-page, Global Chrome V0.2, no-current-state, missing-Privacy and automatic `DO_NOT_RENDER` assumptions. It does not approve the Page Intent Card or a later Gate.

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
| Indexing direction | Recommend `INDEX / FOLLOW` as a useful branded utility page; Gate 2 must confirm without inventing a primary keyword |
| Site scope | `tio2-my`; future development must not read another scope as fallback |

The page identity, URL and utility responsibility match Registry V0.2 and the current keyword master. No page or keyword change is proposed.

## 2. Current authority and historical reconciliation

### 2.1 Consumption order

1. Current user decisions and root governance.
2. Project Context and Registry V0.2.
3. Keyword master CONTACT-001 row.
4. Gate 1–5 Standard V1.1 and Governance Details §10.8.
5. Global Chrome V0.5 and current legal/privacy architecture.
6. Current approved About/company facts and legal/privacy contact decisions within their recorded scope.
7. This Brief, the current Gate 1 research report and Claim Evidence Register.
8. Search-intent Skill report and dated first-party/search observations.
9. V0.1 Brief and 2026-08-30 audit as historical context only where they do not conflict.

### 2.2 Reconciliation findings

| ID | Historical position | Current finding | Gate 1 treatment |
|---|---|---|---|
| `CONTACT-C01` | 54-page Registry V0.1 | Registry V0.2 has 57 pages | Use Registry V0.2. |
| `CONTACT-C02` | Global Chrome V0.2; no Contact current mapping | V0.5 maps About/Contact to `About` and prohibits visible `CURRENT` text | Use shared V0.5; page does not design a local Header/Footer. |
| `CONTACT-C03` | No approved Privacy page | Privacy EN/BM and Cookie Policy are current; Terms is removed | Contact links only to `/privacy-policy/`; no Terms link. |
| `CONTACT-C04` | Every unconfirmed contact value became `DO_NOT_RENDER` | Current root rule requires concrete user fact confirmation unless contradiction/prohibition exists | Use `PENDING_USER_FACT_CONFIRMATION` for Contact-scope address/email choices. |
| `CONTACT-C05` | About/Contact Playbook missing and treated as a formal Gate 2 blocker | File is still absent; current Governance Details §10.8 supplies the minimum type contract, and a page-specific approved Brief may control this page | Record the gap; recommend approving this page-specific exception with Gate 1. Do not create a generic Playbook in this task. |

## 3. Page Intent Card — proposed for user confirmation

| Required item | Proposed direction |
|---|---|
| Audience | International B2B visitors with a company or operational question, especially when the request is not already a quotation, sample or document request |
| Buyer problem | “Which team or request path should I use, and how can I send a general company inquiry without repeating a specialist form?” |
| Core message | Use the dedicated request path when the task is specific; use Contact for other general business inquiries. |
| Must include | Operating company; clear routing to Request a Quote, Request a Sample and Request Documents; one concise general-inquiry path; Privacy Policy link; shared Global Chrome reference |
| Must exclude | Supplier-keyword landing copy; product selection; pricing/quantity collection; sample qualification; document-type selection; claims of response time; fake phone/address/email; visible internal governance states |
| Primary CTA | `Send a General Inquiry` — submits a minimal general-inquiry form after later field, processor and receiver implementation |
| Secondary CTA | `Request a Quote` — `/request-a-quote/` |
| Supporting paths | `Request a Sample` — `/request-sample/`; `Request Documents` — `/request-documents/` |
| Ownership boundary | CONTACT-001 owns residual general inquiries. CONV-RFQ, CONV-SAMPLE and CONV-DOC own their complete specialist workflows. ABOUT-001 owns company story/proof. |

Recommended layout logic for Gate 2, not a locked module order: explain the distinction first, show the three specialist routes, then provide the compact general-inquiry form and approved contact/location details.

## 4. Buyer questions and Gate 2 answer priorities

| Priority | Buyer question | Page responsibility | Gate 2 answer direction |
|---:|---|---|---|
| 1 | Is my task a quotation, sample, document request or general inquiry? | CONTACT-001 routes; conversion pages complete the task | Four clearly named paths with no duplicated specialist fields |
| 2 | Who operates this website and receives a general inquiry? | CONTACT-001 | Show the approved operating-company name; do not claim a response SLA |
| 3 | What information is needed for a general question? | CONTACT-001 | Minimal form only; no product/quantity/document workflow |
| 4 | Can I contact the company by email or at a physical location? | CONTACT-001 only after Contact-scope approval | Show only the exact approved values and labels; no empty cards |
| 5 | What happens after I send the message? | CONTACT-001 | Confirm successful transmission/receipt for review only when the service actually succeeds; preserve input on failure |
| 6 | How is my information used? | Contact summary plus Privacy owner | One short task-specific notice and `/privacy-policy/`; no marketing consent bundle |

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
| `CONTACT-D01` | Show `NO.33 Industrial Perusahaan Ringan Tupai, 34000 Taiping, Perak, Malaysia` as `Manufacturing Site / Business Correspondence` on Contact, never registered office or visitor address | First-party source; approved on About and legal/privacy surfaces, but Contact-specific action/label is not explicit | Approve the same non-expanding fact for Contact. |
| `CONTACT-D02` | Show `info@tio2malaysia.com` as `General Inquiries` on Contact | Approved for legal/privacy contact; general-inquiry scope is not explicit | Approve the scope expansion if this mailbox will receive general inquiries. |
| `CONTACT-D03` | Do not show `sales@mytio2.com`, `technical@mytio2.com`, `logistics@mytio2.com` or `info@mytio2.com` on the TiO2 Malaysia Contact baseline | Current first-party values, but cross-domain use on this site is not approved | Follow the recommendation to avoid cross-domain confusion; this does not declare the mailboxes invalid. |
| `CONTACT-D04` | Show no public phone/WhatsApp card in this baseline | No candidate value is present in current project authority or the fresh first-party page read | Approve an honest no-card baseline unless the user supplies a number and purpose. This is not a permanent prohibition. |

### 6.3 GEO / Schema direction

- Primary entities: Contact page, TiO2 Malaysia brand and operating Organization.
- Candidate page type: visible Contact utility represented as `ContactPage`/`WebPage`, subject to Gate 2 Schema review.
- Organization email/address properties may appear only when the same approved value and label are visible.
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

Excluded from the general form: Product/Grade, quantity, packing, destination port, sample details, document types, file upload, payment data, residential address, phone/WhatsApp and marketing consent. Specialist requests go to their owner pages.

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
| Gate 1 Agent execution | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Page Intent Card | `PENDING_PROJECT_CONTROL_AND_USER_APPROVAL` |
| Contact-specific Playbook exception | Recommend approving this Brief under Governance §10.8; generic Playbook remains absent |
| Gate 2 | `NOT_STARTED / NOT_AUTHORIZED` |
| Gate 3–10 | `NOT_STARTED / NOT_AUTHORIZED` |

The user decision to be presented after independent project-control review is the actual direction and four Contact-scope items `CONTACT-D01`–`D04`; the user is not required to inspect project files to decide.

