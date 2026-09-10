# CONTACT-001 Gate 2 Content Skeleton V0.1

- Page ID: `CONTACT-001`
- URL: `/contact/`
- Page type: Utility contact page
- Primary keyword: `NO_PRIMARY_KEYWORD`
- Gate 2 direction: `GENERAL_CONTACT_FIRST_WITH_SPECIALIST_ROUTING_SUPPORT`
- Lifecycle: `APPROVED_GATE2_BASELINE`
- Approval status: `USER_APPROVED / CLOSED_2026-09-10`
- Prepared: 2026-09-10
- Sole buyer-copy source: `CONTACT-001_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`
- Stable page contract: `CONTACT-001_GATE2_CONTENT_CONTRACT_V0.1.md`

## 1. Page job

Give an international B2B buyer a verified general-contact path, identify the operating company and manufacturing site without expanding those facts, and route quotation, document and sample tasks to their dedicated pages. The page does not target a supplier keyword and does not replace those specialist conversion flows.

## 2. Default-page skeleton

| Order | Module | Actual buyer-facing heading or label | Purpose | Action |
|---:|---|---|---|---|
| Shared | Global Header | Shared-owner output | Inherit the approved global component; Contact is not added to Header navigation. | Shared fixed RFQ action remains `/request-a-quote/`. |
| 1 | Breadcrumb | `Home / Contact` | Confirm location without adding a navigation role. | `Home` → `/`; `Contact` is current text. |
| 2 | Hero | H1 `Contact TiO2 Malaysia` | Establish the page as the general company/business contact route and distinguish specialist requests. | Primary `Send a General Inquiry` → `#general-inquiry`. |
| 3 | Verified contact details | H2 `General contact details` | Show the approved general-inquiries email as plain text, the operating company, and the exact Manufacturing Site address. | No email, phone, map or messaging action. |
| 4 | Specialist routing | H2 `Choose a dedicated request when you need one` | Route quotation, product-document and sample tasks without making Contact their fallback. | `/request-a-quote/`, `/request-documents/`, `/request-sample/`. |
| 5 | General inquiry form | H2 `Send a general inquiry` | Collect only the minimum B2B context needed for a general inquiry and explain what happens after submission. | Submit action `Send a General Inquiry`; Privacy Policy → `/privacy-policy/`. |
| Shared | Global Footer | Shared-owner output | Inherit the approved footer and legal utility row without a Contact-specific fork. | Shared-owner actions and links only. |

## 3. Actual hero direction

- Eyebrow: `GENERAL CONTACT`
- H1: `Contact TiO2 Malaysia`
- Lead: `Use this page for a general question about the company, a partnership or another business matter. For a quotation, product documents or a sample, choose the relevant dedicated request route below.`
- Primary action: `Send a General Inquiry`
- Primary action target: `#general-inquiry`
- No secondary Hero CTA.

## 4. Verified-detail direction

The module identifies:

- `General Inquiries` — `info@tio2malaysia.com`, rendered as plain text and never as `mailto:`.
- `Operating Company` — `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.`
- `Manufacturing Site` — `NO.33 Industrial Perusahaan Ringan Tupai, 34000 Taiping, Perak, Malaysia`

Phone, WhatsApp, office hours, maps, directions, visitor instructions, registered-office claims and the four excluded `@mytio2.com` mailboxes do not render.

## 5. Specialist-routing direction

The routing module follows, rather than displaces, the general-contact route. Its cards are:

1. `Request a Quote` — quotation task — `/request-a-quote/`
2. `Request Documents` — product-document task — `/request-documents/`
3. `Request a Sample` — sample task — `/request-sample/`

The cards explain task fit. They do not claim approval, availability, response time, fulfillment or successful receipt.

## 6. Form direction

All six fields are required:

1. Full Name
2. Company
3. Business Email
4. Country / Region
5. Subject
6. Message

The form has no marketing-consent field, attachment, phone field, product selector, grade selector, quantity field or specialist-request selector. It links to `/privacy-policy/` and explains inline confirmation, validation, submitting, service-failure and success behavior. Field values remain on validation or service failure and clear only after a confirmed successful service response.

## 7. SEO, GEO and Schema direction

- SEO title: `Contact TiO2 Malaysia | General Inquiries`
- Meta description: `Contact TiO2 Malaysia with a general company or business inquiry, or use the dedicated pages to request a quote, product documents or a sample.`
- Canonical: `https://tio2malaysia.com/contact/`
- Robots: `index, follow`
- Keyword posture: entity/contact navigational language only; supplier, product, application and document-primary terms remain excluded.
- GEO answer sources: Hero task split; General contact details; specialist-routing cards; form process and state copy.
- Schema: `ContactPage` and `BreadcrumbList`, plus visible-source parity for the shared `Organization` node. No `FAQPage`, `Offer`, `Service`, `Product`, `ContactPoint`, telephone or hidden contact data.

## 8. Open implementation dependencies, not Gate 2 copy gaps

These do not authorize an implementation claim and must be resolved in Gate 6→8/9 before release:

- form processor and authenticated service-success signal;
- actual operational receiver and routing ownership;
- spam/abuse controls;
- retention/deletion behavior and Privacy Policy parity;
- verified availability of all specialist routes, the Privacy Policy route and the shared RFQ route.

## 9. Gate 2 self-check

- General inquiry is first and remains the only page-owned submission action: PASS.
- Verified entity, email and address match approved Gate 1 decisions exactly: PASS.
- Email is plain text; phone, WhatsApp and excluded mailboxes are absent: PASS.
- Specialist actions retain their own task ownership: PASS.
- `NO_PRIMARY_KEYWORD` and INDEX,FOLLOW are preserved: PASS.
- Shared Header/Footer are referenced, not forked: PASS.
- Buyer Clean Copy contains the complete visible and conditional copy: PASS.
- Gate 2 approval claimed: NO.
- Gate 3 started: NO.
