# CONTACT-001 Gate 2 Stable Content, SEO, GEO, Schema and Behavior Contract V0.1

- Page ID: `CONTACT-001`
- URL: `/contact/`
- Page type: Utility contact page
- Primary keyword: `NO_PRIMARY_KEYWORD`
- Direction: `GENERAL_CONTACT_FIRST_WITH_SPECIALIST_ROUTING_SUPPORT`
- Lifecycle: `APPROVED_GATE2_BASELINE`
- Approval status: `USER_APPROVED / CLOSED_2026-09-10`
- Prepared: 2026-09-10
- Buyer-copy authority: `CONTACT-001_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`

This file defines stable page-specific behavior and machine-readable semantics. It does not create a second buyer-copy source, assert implementation, approve Gate 2 or authorize Gate 3.

## 1. Scope and ownership

1. CONTACT-001 owns general company, partnership and business inquiries only.
2. Quote, document and sample actions remain owned by their dedicated routes and are supporting routing, not alternate Contact conversions.
3. Contact is not an RFQ fallback. A missing or unavailable RFQ route is a release blocker; it must not hide, disable, relabel or redirect the shared RFQ action to Contact.
4. Contact is not added to approved Header primary navigation.
5. Shared Header, Mobile Menu and Footer render directly from the current approved Global Chrome owner. CONTACT-001 creates no local fork and no visible `CURRENT` label.
6. Under the current shared-owner rule, Contact maps to the About navigation state. Any `aria-current` behavior is supplied by the shared component and is not duplicated in page copy.
7. The page does not own phone, WhatsApp, office hours, live chat, maps, directions, appointments or visitor instructions.

## 2. Content-source contract

1. All buyer-visible default and conditional copy comes from `CONTACT-001_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`.
2. Shared Header/Footer buyer copy is excluded from that file and remains under the shared owner.
3. The default reading order is BC-01 → BC-02 → BC-03 → BC-04 → BC-05 through BC-13.
4. BC-14 through BC-18 are conditional and never render together as a catalogue of states.
5. Labels, addresses, case, punctuation and action text are exact unless a later approved version supersedes this contract.

## 3. Verified fact contract

| Fact | Required visible source | Allowed machine use | Prohibited expansion |
|---|---|---|---|
| Operating company | BC-03: `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` | `Organization.name` | Do not use `legalName`; do not claim registered office, legal domicile, ownership structure or group relationship. |
| General inquiries email | BC-03: `info@tio2malaysia.com` | `Organization.email` when the Organization node is rendered | Plain text only; no `mailto:`, form-receiver claim, department claim, guaranteed reply or hidden alternate email. |
| Manufacturing Site | BC-03: `NO.33 Industrial Perusahaan Ringan Tupai, 34000 Taiping, Perak, Malaysia` | Organization `location` as a named `Place` with a decomposed `PostalAddress` | Label exactly `Manufacturing Site`; do not call it an office, headquarters, registered office, mailing address, visitor destination or correspondence address. |

The four excluded `@mytio2.com` mailboxes, telephone and WhatsApp are absent from visible copy, actions, metadata, GEO answers and Schema. They do not create empty placeholders.

## 4. Action and routing contract

| Action ID | Visible source | Target or behavior | Semantics |
|---|---|---|---|
| `CONTACT_HERO_GENERAL` | BC-02 `Send a General Inquiry` | In-page link to `#general-inquiry` | Primary page action; scrolls/focuses the general-inquiry region. It does not submit. |
| `CONTACT_QUOTE_ROUTE` | BC-04 `Request a Quote` | `/request-a-quote/` | Dedicated quotation workflow; no prefill or Contact fallback. |
| `CONTACT_DOCUMENT_ROUTE` | BC-04 `Request Documents` | `/request-documents/` | Dedicated product-document workflow; no prefill or Contact fallback. |
| `CONTACT_SAMPLE_ROUTE` | BC-04 `Request a Sample` | `/request-sample/` | Dedicated sample workflow; no prefill or Contact fallback. |
| `CONTACT_PRIVACY` | BC-12 `Privacy Policy` | `/privacy-policy/` | Normal internal link; no Terms link or consent checkbox is added. |
| `CONTACT_FORM_SUBMIT` | BC-13 `Send a General Inquiry` | Submit the CONTACT-001 general-inquiry payload to the Gate 8-approved processor | The actual endpoint and receiver are deliberately unresolved at Gate 2. |
| `CONTACT_FORM_RETRY` | BC-17 `Try again` | Retry the same preserved payload | Available after service failure; does not navigate or claim receipt. |

`info@tio2malaysia.com` in BC-03 is content, not an action. It must not be wrapped in an anchor or used as a service-failure instruction.

## 5. Form data and validation contract

| Field ID | Visible label/help source | Type and autocomplete | Required | Length / format | Exact error sources |
|---|---|---|---:|---|---|
| `full_name` | BC-06 | single-line text; `autocomplete="name"` | Yes | 1–100 Unicode characters after trimming surrounding whitespace | BC-15 name empty / length messages |
| `company` | BC-07 | single-line text; `autocomplete="organization"` | Yes | 1–160 Unicode characters after trimming | BC-15 company empty / length messages |
| `business_email` | BC-08 | email; `autocomplete="email"`; `inputmode="email"` | Yes | syntactically valid email; maximum 254 characters | BC-15 email empty / invalid / length messages |
| `country_region` | BC-09 | single-line text; `autocomplete="country-name"` | Yes | 1–100 Unicode characters after trimming | BC-15 country empty / length messages |
| `subject` | BC-10 | single-line text; no forced autocomplete | Yes | 1–120 Unicode characters after trimming | BC-15 subject empty / length messages |
| `message` | BC-11 | multiline text | Yes | 1–2,000 Unicode characters after trimming | BC-15 message empty / length messages |

Validation rules:

1. Visible labels remain present; placeholders do not replace labels or help text.
2. Required status is conveyed in text and programmatically, not by color or an asterisk alone.
3. Client-side checks may improve speed, but the approved processor must repeat validation. Client validation is not a security boundary.
4. On submit with validation errors, render BC-14, associate each BC-15 message with its field, provide an error-summary link to each invalid field, and move focus to the error-summary heading.
5. Preserve every entered value on validation failure.
6. Leading and trailing whitespace is ignored for required and maximum-length evaluation; internal whitespace and user case are preserved.
7. No marketing opt-in, attachment, telephone, product, grade, quantity or specialist-request field is added without a later approved contract revision.

## 6. Submission-state contract

### 6.1 Normal

- Render BC-05 through BC-13.
- Submit is enabled when not already submitting; browser focus and validation do not alter its label.

### 6.2 Focus

- Keyboard focus is visible on every field, link and button using the approved accessibility treatment.
- Focus does not open a tooltip, clear content or move the page unexpectedly.

### 6.3 Validation error

- Follow Section 5 rules and render BC-14 plus only the applicable BC-15 messages.
- Do not call or imply the service received the inquiry.

### 6.4 Submitting

- Replace the submit label with BC-16 and prevent duplicate submissions while the request is pending.
- Keep all field values visible and prevent accidental edits until a response returns.
- A timer, client event or navigation alone cannot trigger success.

### 6.5 Service failure

- Render BC-17 only after a failed or indeterminate service response.
- Keep all six values intact and available for correction.
- `Try again` repeats the same general-inquiry submission. It does not redirect to email, RFQ, documents, sample or another Contact page.
- Failure copy must not claim or imply receipt, queueing, storage, review or a future reply.

### 6.6 Success

- Render BC-18 inline only after the approved processor returns an authenticated, unambiguous success response for this submission.
- Move focus to the success heading and clear sensitive form values after that response.
- The success state confirms a general inquiry was received for review only. It does not promise a response time, quotation, document availability, sample approval, commercial acceptance or fulfillment.
- Do not route this form to the shared quote/document/sample Thank You state.

## 7. Privacy and data-use contract

1. BC-12 is the complete page-owned privacy notice and links only to `/privacy-policy/`.
2. The notice states intended use: review and response to this inquiry. Gate 6 must verify that the processor, receiver, storage, retention/deletion and Privacy Policy make that statement true before development handoff closes.
3. No marketing consent is collected and no marketing use is implied.
4. Spam/abuse controls must not silently add buyer claims, consent language or fields. Their provider, data transfer and retention effects are Gate 6→8/9 dependencies.

## 8. Restricted, empty and long-content behavior

1. If a required approved fact is missing or differs in the content/data source, omit the affected detail rather than inventing or falling back to another brand/domain; treat the mismatch as a pre-release blocker. Do not render an empty card, dash, `TBD` or internal status.
2. No telephone/address alternate state is invented. The approved Manufacturing Site address renders when its source matches; phone and WhatsApp remain absent with no empty slot.
3. If a specialist route or `/privacy-policy/` is unavailable, keep the approved complete-site action contract and register a release blocker. Do not hide, disable, relabel or redirect the action.
4. If the form processor, authenticated success signal or operational receiver is unresolved, the page is not releasable. Gate 2 does not select an endpoint or substitute the plain-text email.
5. At runtime, timeout, network error, non-success response or ambiguous response uses the service-failure state and preserves input.
6. Long values up to each field limit wrap within the field, review/error state and mobile viewport without clipping or horizontal overflow. Error, privacy and routing copy must also wrap without truncation.
7. The page accepts no cross-page prefill contract. Query parameters or upstream error context must not silently change its task, select a specialist route or insert user data.
8. Content that exceeds the approved limits is rejected with the matching BC-15 message; it is never silently truncated.

## 9. SEO contract

| Element | Exact value or rule |
|---|---|
| HTML title | `Contact TiO2 Malaysia | General Inquiries` |
| Meta description | `Contact TiO2 Malaysia with a general company or business inquiry, or use the dedicated pages to request a quote, product documents or a sample.` |
| Canonical | `https://tio2malaysia.com/contact/` |
| Robots | `index, follow` |
| Sitemap | Include the canonical URL after release eligibility is satisfied. |
| H1 | BC-02 `Contact TiO2 Malaysia`; exactly one H1. |
| Open Graph title | `Contact TiO2 Malaysia` |
| Open Graph description | Same as meta description. |
| Open Graph URL | Same as canonical. |
| Keyword posture | `NO_PRIMARY_KEYWORD`; natural entity/contact navigational language only. |
| Exclusions | Do not optimize this page for supplier, manufacturer, price, product, application, grade, document-primary, sample-primary or quotation-primary terms. |

Indexing is content approval, not publishing authorization. INDEX,FOLLOW remains conditional on Gate 6/8/9 release checks and does not waive form, route, privacy or shared-chrome blockers.

## 10. GEO answer contract

No hidden GEO-only paragraph is permitted. Answers must be extractable from visible buyer copy:

| Buyer or answer-engine question | Visible source | Bounded answer |
|---|---|---|
| How do I contact TiO2 Malaysia about a general business matter? | BC-02, BC-03, BC-05 | Use the general inquiry form; the plain-text General Inquiries address is also shown. |
| Who operates TiO2 Malaysia? | BC-03 | IKHLAS TITANIUM (MALAYSIA) SDN. BHD. |
| Where is the Manufacturing Site? | BC-03 | The exact approved Taiping, Perak, Malaysia address. |
| Where should I request a quote, documents or a sample? | BC-04 | Use the matching dedicated request page. |
| What information does the general inquiry form request? | BC-06 through BC-11 | Name, company, business email, country/region, subject and message. |
| What happens after submission? | BC-12, BC-17, BC-18 | The page shows confirmed success or preserves entries and offers retry on failure. |

Answers must not add response times, certification, product availability, plant capabilities, visitor access, telephone, WhatsApp, alternative mailboxes, downstream approval or fulfillment.

## 11. Schema contract

Render one coherent graph with page-specific nodes and references to shared site identity:

### 11.1 `ContactPage`

- `@id`: `https://tio2malaysia.com/contact/#webpage`
- `url`: canonical URL
- `name`: HTML title
- `description`: meta description
- `inLanguage`: `en`
- `isPartOf`: reference `https://tio2malaysia.com/#website`
- `breadcrumb`: reference the page BreadcrumbList node
- `mainEntity`: reference `https://tio2malaysia.com/#organization`

### 11.2 `BreadcrumbList`

1. `Home` → `https://tio2malaysia.com/`
2. `Contact` → `https://tio2malaysia.com/contact/`

Both names and order must match BC-01.

### 11.3 Shared `Organization` visible-source additions

Only if the shared Organization node is present, keep one canonical `@id` and source the following from BC-03:

- `name`: `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.`
- `email`: `info@tio2malaysia.com`
- `location`:
  - `@type`: `Place`
  - `name`: `Manufacturing Site`
  - `address` / `PostalAddress`:
    - `streetAddress`: `NO.33 Industrial Perusahaan Ringan Tupai`
    - `postalCode`: `34000`
    - `addressLocality`: `Taiping`
    - `addressRegion`: `Perak`
    - `addressCountry`: `MY`

The structured decomposition must reconstruct the exact visible address and must not change its meaning.

### 11.4 Prohibitions

- Do not emit `legalName`, `telephone`, `ContactPoint`, `openingHours`, `hasMap`, `FAQPage`, `Product`, `Offer`, `Service`, `potentialAction`, unverified social profiles or any excluded email.
- Do not treat the form processor or actual receiver as known Schema data.
- Do not emit hidden statements that are absent from the Buyer Clean Copy.

## 12. Shared chrome and accessibility reference

CONTACT-001 inherits, without restating or altering, the current approved shared contracts for:

- Desktop Header, Mobile Header, Mobile Menu, Desktop/Mobile Footer and permanent RFQ route;
- unified production SVG logo asset;
- Desktop 84px and Mobile 64px header frames;
- Deep Navy Footer and legal utility row;
- 390px minimum 44px touch targets;
- primary CTA contrast and focus treatment.

Page-specific requirements are limited to the navigation-state mapping in Section 1 and the actions in Section 4. A shared-owner mismatch is returned to that owner and is not patched locally.

## 13. Gate 6→8/9 dependencies

The following remain explicit dependencies rather than Gate 2 claims:

1. choose and verify the form processor;
2. establish the actual receiver, ownership and monitored routing;
3. define authenticated success/failure responses and retry behavior;
4. choose spam/abuse controls;
5. define retention and deletion behavior and verify Privacy Policy parity;
6. verify specialist routes, Privacy Policy and permanent shared RFQ route;
7. verify server-side validation, security, accessibility and telemetry without expanding buyer claims.

## 14. Gate 2 self-check

- All page-owned visible strings have a BC source: PASS.
- All actions have a target and bounded outcome: PASS.
- Fact, email and address semantics match approved Gate 1 decisions: PASS.
- Conditional failure preserves input and offers retry without false receipt: PASS.
- Success depends on authenticated service confirmation: PASS.
- SEO preserves INDEX,FOLLOW and `NO_PRIMARY_KEYWORD`: PASS.
- GEO and Schema add no hidden claim: PASS.
- Shared Chrome is inherited, not forked: PASS.
- Implementation claimed: NO.
- Gate 2 approval claimed: NO.
- Gate 3 started: NO.
