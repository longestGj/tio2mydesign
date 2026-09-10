# CONTACT-001 Gate 1 Project-control Review V0.1

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONTACT-001-G1-PCR-01` |
| Page ID / route | `CONTACT-001` / `/contact/` |
| Review date | `2026-09-10` |
| Reviewed author | Gate 1 execution Agent recorded by `CONTACT-001_GATE1_EXECUTION_SUBMISSION_V0.1.md` |
| Reviewer | `/root` project-control reviewer; did not author the reviewed Gate 1 package |
| Gate 1 path | `GAP_RESEARCH` |
| Review outcome | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL / NOT_CLOSED` |
| Required findings | P0=0; P1=0; other required finding=0 |
| Gate 2 | `NOT_STARTED / NOT_AUTHORIZED` |

## 1. Independent review conclusion

The Gate 1 package is suitable for a user decision. Existing project identity, company, architecture, legal/privacy and shared-Chrome inputs are reusable; the page-specific gaps are finite and concern Contact-surface routing, visible contact channels and indexing. This is therefore `GAP_RESEARCH`, not a reason to redo site-wide research or perform `FULL_RESEARCH`.

The proposed direction gives CONTACT-001 a distinct reader task: route quotation, sample and document requests to their dedicated pages, while providing one concise general-inquiry path for other company questions. It preserves `NO_PRIMARY_KEYWORD`, does not copy specialist form fields, does not turn Contact into a supplier landing page, and does not create a page-local Header or Footer.

The package predates the current 59-page count and the V1.5/V1.6 three-path notation. Those are governance-navigation updates, not content defects: Registry V0.2 currently contains 59 pages and the current review explicitly supplies the path mapping. Historical references to 57 pages remain truthful to their preparation date and must not override the current Registry.

## 2. Proposed reader-facing direction submitted for approval

### Page purpose and actions

- H1 direction: `Contact TiO2 Malaysia`.
- First explain which route the visitor needs.
- Dedicated actions:
  - `Request a Quote` → `/request-a-quote/`
  - `Request a Sample` → `/request-sample/`
  - `Request Documents` → `/request-documents/`
- General inquiries use one compact form with: Full Name, Company, Business Email, Country / Region as free text, Subject and Message.
- Primary action: `Send a General Inquiry`.
- Product/Grade, quantity, packing, sample qualification, document types, file upload, payment data and marketing consent are not collected by this form.
- A short privacy explanation links to `/privacy-policy/`.

### Success and failure direction

- Success may confirm only that the general inquiry was received for review after the service actually returns success; it does not promise a response time.
- Failure retains the entered values and offers `Try again`.
- Contact does not become a fallback for failed RFQ, Sample or Documents submissions.

## 3. Exact user decisions required

| ID | Proposed decision | Effect if approved |
|---|---|---|
| `CONTACT-D00` | Approve the route-first Contact utility and compact general-inquiry form described in §2. | Locks the Page Intent Card and reader task for Gate 1. |
| `CONTACT-D01` | Show `NO.33 Industrial Perusahaan Ringan Tupai, 34000 Taiping, Perak, Malaysia` under `Manufacturing Site / Business Correspondence`. Do not call it a registered office or visitor address. | Allows the exact address and label in visible copy and equivalent Schema. |
| `CONTACT-D02` | Show `info@tio2malaysia.com` as `General Inquiries`. | Expands the already approved legal/privacy mailbox to the Contact general-inquiry surface and equivalent Schema. |
| `CONTACT-D03` | Do not show `sales@mytio2.com`, `technical@mytio2.com`, `logistics@mytio2.com` or `info@mytio2.com` on this site’s Contact baseline. | Avoids cross-domain channel confusion without declaring those mailboxes invalid. |
| `CONTACT-D04` | Do not show a public Phone/WhatsApp contact card in this baseline because no Contact channel value has been supplied. This is not a permanent prohibition. | Produces no empty, disabled or placeholder channel card; a future approved number can be added through a scoped change. |
| `CONTACT-D05` | Use `INDEX, FOLLOW` for `/contact/`, while retaining `NO_PRIMARY_KEYWORD`. | Makes the useful branded utility page normally indexable without targeting supplier/manufacturer or other commercial keywords. |

The approved Global Chrome V0.5 already resolves navigation treatment: Contact uses the `About` mapped active treatment, with zero buyer-visible `CURRENT` text. This is inherited, not a new user decision.

The page-specific Brief may control CONTACT-001 under Governance §10.8; a missing generic About/Contact Playbook does not require a separate new Playbook before Gate 2 once this Brief is approved.

## 4. Review checks

| Check | Result |
|---|---|
| Page identity, URL, priority and `NO_PRIMARY_KEYWORD` | PASS |
| Contact vs RFQ/Sample/Documents/About ownership | PASS |
| Search evidence used qualitatively; no invented metrics | PASS |
| Operating-company and legal/shared inputs consumed within scope | PASS |
| Unknown contact facts presented for decision rather than silently prohibited | PASS |
| Visible and machine-readable parity | PASS |
| Shared Header/Footer and no visible `CURRENT` | PASS |
| Future receiver, processor, privacy parity and runtime QA kept outside Gate 1 | PASS |

## 5. Stop boundary

This review does not approve or close Gate 1 on the user’s behalf. It does not authorize Gate 2, visual design, Gate 6, external development, QA, deployment, publication, DNS or indexing. After the user decides §3, project control may record Gate 1 approval/closure and separately determine whether Gate 2 is authorized.
