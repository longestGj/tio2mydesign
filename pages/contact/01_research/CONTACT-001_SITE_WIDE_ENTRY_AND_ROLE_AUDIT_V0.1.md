# CONTACT-001 Site-wide Entry and Role Audit V0.1

## 0. Control

| Field | Value |
|---|---|
| Page ID / route | `CONTACT-001` / `/contact/` |
| Date | `2026-09-10` |
| Scope | Current 59-page architecture, approved shared Chrome and the 58-object prerelease internal-link result |
| Status | `PROJECT_CONTROL_REVIEWED / USER_DIRECTION_CONFIRMED` |
| User decision | The user approved the recommended `GENERAL_CONTACT_FIRST_WITH_SPECIALIST_ROUTING_SUPPORT` direction on 2026-09-10 |
| Gate effect | Confirms the Page Intent Card direction; does not by itself close Gate 1 or authorize Gate 2 |

## 1. Question

Which parts of the complete website need CONTACT-001, what user task brings the reader there, and what should Contact therefore own without becoming a universal fallback form?

## 2. Verified incoming use

| Source surface | Current relationship | Reader need | Contact responsibility |
|---|---|---|---|
| ABOUT-001 Hero | `Contact Us` → `/contact/` | Ask a company, partnership or general business question after reading the company story | Show a direct general-contact path and clear company identity |
| ABOUT-001 final CTA | `Contact Us` → `/contact/` | Continue a company/trust conversation | Offer email and/or a general inquiry without forcing a quotation workflow |
| SYS-404 recovery panel | `Contact Our Team` → `/contact/` | Obtain human help when the expected destination cannot be found | Provide an understandable general-help path without carrying unknown URL context into a specialist form |
| Shared Footer | Contact may become a normal Information item once its own route is approved and available | Find company contact information from any page | Serve as the site-wide general contact utility; never replace fixed RFQ |
| Direct branded/navigation visit | Registered secondary phrases `contact TiO2 Malaysia` and `contact IKHLAS Titanium` | Find the operating company, contact channel or a way to send a general question | Answer contact intent directly without targeting a supplier/manufacturer keyword |

The current runtime inventory found exactly three body-link instances: two from ABOUT-001 and one from SYS-404. All other pages consume Contact only through the future shared Footer relationship unless a later approved page contract adds an explicit body link.

## 3. Surfaces that must not use Contact as a substitute

| Page family | Correct owner/action | Why Contact is not the fallback |
|---|---|---|
| Products / Grades / Process | Product navigation, RFQ, Sample or Documents as approved | Contact must not collect product selection, quantity or technical workflow data |
| Applications | Approved Application/Grade relations and specialist actions | General inquiry must not replace an unavailable Application or Grade destination |
| Markets | Market content and RFQ | Contact must not imply market availability, local service or quotation readiness |
| Documents / Resources | Document information, Request Documents or the approved resource destination | Contact must not act as a fake download, unavailable-document or route fallback |
| Request a Quote | Its own validation, receiver, retry and success/failure states | A failed quotation must retain its data and retry; Contact cannot silently downgrade the task |
| Request a Sample | Its own validation, receiver, retry and success/failure states | A failed sample request is not a general inquiry |
| Request Documents | Its own validation, receiver, retry and success/failure states | A failed document request is not a general inquiry |
| Privacy / Cookie | The approved direct privacy contact and legal architecture | Privacy rights/questions should not be mixed into a generic business form unless separately approved |
| Shared Thank You | Return to Quote, Sample or Documents according to the approved result context | The success page must not invent a new Contact conversion |

## 4. Design consequence

The former `ROUTE_FIRST_GENERAL_CONTACT_UTILITY` order is not the best match for the actual incoming traffic. Readers arriving from About, 404, the Footer or a branded contact search expect a contact channel first. Making three other request pages dominate the first task would turn Contact into a routing directory and postpone the answer they came for.

The approved direction is:

`GENERAL_CONTACT_FIRST_WITH_SPECIALIST_ROUTING_SUPPORT`

1. Identify `Contact TiO2 Malaysia` and the operating company.
2. Provide a visible general-contact channel and a clear `Send a General Inquiry` action.
3. Immediately explain that quotation, document and sample requests have dedicated workflows.
4. Present those three specialist routes as supporting choices, not as the primary purpose of Contact.
5. Provide a compact general-inquiry form that excludes specialist data.
6. Explain what happens after submission and link the approved Privacy Policy.
7. Consume the shared Header/Footer without creating a page-local fork.

This is a Gate 1 direction and priority decision, not final Gate 2 copy or a locked final module order.

## 5. Impact, risk and rollback

- Page ID, URL, `NO_PRIMARY_KEYWORD`, indexing candidate and specialist route ownership do not change.
- ABOUT-001 and SYS-404 approved link text/targets do not need rewriting.
- Global Header navigation does not gain a Contact item; Contact continues to map to About active treatment with no visible `CURRENT` text.
- Shared Footer may add its already-contracted ordinary Contact link after route readiness; fixed RFQ remains independent and permanently visible.
- Main risk: an unrestricted form could attract quotation, sample or document submissions. The mitigation is concise route guidance plus exclusion of specialist fields, not putting specialist routes ahead of the contact answer.
- Rollback reference: the 2026-09-07 route-first draft remains available in Git history and the V0.1 execution submission; it is not the current approved direction.

## 6. Evidence

- `docs/architecture/internal-link-review/PRERELEASE_58_INTERNAL_LINK_RUNTIME_REVIEW_V1.0.md`, especially the three `/contact/` instances and release-closing condition.
- `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` and inherited V0.3 Footer contract.
- `docs/page-briefs/ABOUT-001_ABOUT_TIO2_MALAYSIA_BRIEF_V0.6.md`.
- `docs/architecture/SYS_404_CONV_THANK_PAGE_ADDITION_DECISION_V1.0.md`.
- `PROJECT_CONTEXT.md`, Registry V0.2 and the current keyword-master CONTACT-001 row.

