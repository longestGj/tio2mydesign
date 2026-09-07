# CONV-DOC Gate 7 Development Handoff Package V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `CONV-DOC-G7-HANDOFF-01` |
| Review ID | `CONV-DOC-G7-PCR-01` |
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Decision date | 2026-09-03 |
| Development-task receipt | `NOT_RECORDED` |
| Gate 5 | `APPROVED / CLOSED` |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |

This package converts the approved Gate 5 design and Gate 6 acceptance into an implementation-neutral development contract. It does not execute Gate 8 or authorize access to the development repository.

## 1. Gate 8 implementation scope if separately authorized

The CONV-DOC implementation owner may implement only:

1. `/request-documents/` using `site_scope=tio2-my`.
2. The approved Buyer Clean modules, eight fields, five Document Types, 14-Grade selector, validation and submission state machine.
3. Supported upstream prefill normalization and safe discard.
4. The verified receiver integration, explicit positive receipt mapping, retry behavior and privacy-safe observability.
5. Approved Title/Meta/canonical/Schema fields and Gate-10-controlled robots setting.
6. Responsive and accessible page-local behavior.
7. Consumption of shared Global Chrome, Privacy Policy route and shared legal/consent readiness without local forks.

It must not implement another page, a Privacy Policy body, shared Header/Footer/Mobile Menu, Cookie Settings/CMP, RFQ, Sample workflow, Product/Application/Document/Market page, DNS, deployment, publication or indexing activation.

## 2. Page identity and responsibility

| Contract | Fixed value |
|---|---|
| Page ID | `CONV-DOC` |
| URL | `/request-documents/` |
| Page type | Utility conversion page |
| Language | `en` |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Main task | Submit minimum context for controlled document-request review |
| Primary CTA | `Request Documents` |
| Receipt meaning | Request received for human review |
| Receipt exclusion | No file approval, availability, applicability, release, download, delivery or compliance/origin confirmation |

The page is not a public document catalogue, file inventory, direct-download page, RFQ form, general Contact page or market landing page.

## 3. Buyer-visible module order

1. Shared Header.
2. Breadcrumb: `Home / Request Documents`.
3. Hero: eyebrow, H1 and one-sentence purpose.
4. Three-step cue: Your Details, Request Details, Human Review.
5. Minimum-information warning.
6. Conditional editable prefill review; omit completely when empty.
7. Your Details field group.
8. Request Details field group.
9. Review rows containing only supplied values.
10. Privacy statement followed by the single page-body submit action.
11. Validation/submission outcome state.
12. Shared Footer.

No Buyer Clean governance labels, readiness flags, release blockers or placeholder legal copy may render.

## 4. Ownership and dependency matrix

| Dependency | Implementation owner | CONV-DOC responsibility | Failure classification |
|---|---|---|---|
| Request Documents page/form | `conv_doc_owner` | Implement page-local route, content, form, state and metadata | Gate 9/page release blocker |
| Receiver and operational owner | `conv_doc_owner` plus verified business owner | Integrate, document actual data flow, require positive receipt | Gate 9/page release blocker |
| Privacy Policy route/body | Independent Legal/Privacy owner | Render approved short notice/link; supply actual form data-flow facts; consume readiness | Cross-page Gate 9/release blocker |
| Shared Header/Footer/Mobile Menu | Global Chrome owner | Consume shared components; no local clone | Shared release blocker |
| Cookie/CMP/consent state | Shared Legal/Consent owner | Consume applicable state for local measurement; do not implement platform | Shared Gate 9/release blocker |
| Product/Application/Document upstream pages | Their page owners | Accept allowlisted context; do not implement upstream pages | Complete-site integration blocker where required |
| Market pages | Market owners | Accept source attribution only; never map Market to Country/document fields | Integration acceptance item |
| Production logos | Brand/Global Chrome owner | Reference approved shared assets | Shared asset blocker |

Missing dependencies stay internal and block the appropriate later gate/release. They do not produce hidden, disabled, fallback or governance-heavy public UI.

## 5. Global Chrome consumption

Consume `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` and the current Home shared component-state authority.

- Desktop Header: 84px.
- Mobile Header: 64px.
- Request a Quote stays visible in Desktop Header, Mobile Header, Mobile Menu and both Footers and points to `/request-a-quote/`.
- Request Documents is not a first-level navigation item.
- This Conversion route has no false current parent and never gives the global RFQ `aria-current="page"`.
- Footer and Mobile Menu are shared references, not page-local markup authorities.

## 6. `site_scope=tio2-my` isolation

All page records, queries, routing, cache keys, menus, metadata, Schema, media, form configuration, receiver mapping, logs and prefill normalization must be scoped to `tio2-my`.

No TIOVAR, frozen site or other scope may supply fallback content, media, recipient, endpoint, route, canonical, menu, metadata, error text or success state. Missing scoped data fails closed and is reported internally.

## 7. Privacy and data minimization

Collect only the eight approved fields. Do not add telephone, address, quantity, price, packaging, shipping, port, batch/order number, password, upload, government ID, payment detail, confidential formulation or marketing-consent fields.

Render the exact approved short notice and `/privacy-policy/` link. The Legal/Privacy owner controls full disclosure. The CONV-DOC implementation owner supplies verified actual receiver, processor, retention and transfer facts to that owner for parity review.

No consent checkbox is part of this form. Local analytics must not receive form values, errors, Grade, document selections, email, country or free text.

## 8. Gate boundary

Project control closed `CONV-DOC-G7-PCR-01` with `PROJECT_CONTROL_REVIEW_PASS / CLOSED` on 2026-09-03 and designated `CONV-DOC-G7-HANDOFF-01` as the sole Request Documents Gate 8 development baseline. Gate 8 and development remain locked until a development-task receipt and separate authorization are recorded. This package contains no code, branch, deployment, production write or release action.
