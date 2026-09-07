# ABOUT-001 Gate 7 Route / Scope / Release Dependencies V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G7-PCR-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Route Matrix

| Purpose | Required route | Gate 8 behavior | Release condition |
|---|---|---|---|
| About canonical | `/about/` | Implement exact route and canonical | Required |
| Breadcrumb / broad supplier link | `/` | Link Home | Required |
| Products Hub | `/products/` | Link Hero/product facts | Required |
| Markets Hub | `/markets/` | Hub fallback and View All | Required |
| EU | `/markets/european-union/` | Use when owner route verified; otherwise Hub fallback | No broken link |
| UK | `/markets/united-kingdom/` | Use when owner route verified; otherwise Hub fallback | No broken link |
| India | `/markets/india/` | Use when owner route verified; otherwise Hub fallback | No broken link |
| Brazil | `/markets/brazil/` | Use when owner route verified; otherwise Hub fallback | No broken link |
| Applications Hub | `/applications/` | Default/fallback for cards and inline marks | Required |
| Application children | Registered child paths | Use only after path/content/route approval; otherwise Hub | No provisional broken link |
| Documents Hub | `/documents/` | TDS and SDS | Required |
| Request Documents | `/request-documents/` | Other Documents | Required when action is visible |
| Request a Quote | `/request-a-quote/` | Global and body RFQ | Required; false readiness is release blocker |
| Contact | `/contact/` | Body secondary CTA | Required when action is visible |

The removed legacy `/documents/tds-sds-coa/` route is not an ABOUT-001 target.

## 2. Route Failure Behavior

- Do not render a broken anchor, disabled fake card, empty action slot, `RFQ OFF` or Contact fallback for RFQ.
- Market/Application child relations use the approved Hub fallback while the child route is ineligible.
- If RFQ, Contact, Request Documents or another required visible action is unavailable, retain the approved UI contract and block release until the route works.
- Link text and destination Page ID are server-rendered consistently; client hydration must not swap owners.

## 3. `site_scope=tio2-my` Isolation

The external implementation must enforce scope isolation for:

- page queries and slugs;
- navigation and Footer data;
- related Market/Application/Document Page IDs;
- media and ALT records;
- SEO/social metadata and JSON-LD;
- API and preview endpoints;
- cache keys, invalidation and ISR/revalidation;
- form prefill and destination fields.

No Malaysia record may fall back to TIOVAR, another active site or a frozen site. A missing Malaysia record fails closed.

## 4. Media Rights Dependencies

Every body image shown by the approved visual requires an exact source/right/usage record. Missing rights block use of that asset. Because the approved visual requires those images, release remains blocked until the assets are cleared or the user/project control later approves a different visual state.

`og:image`, `twitter:image`, Schema `image`, `ImageObject` and `primaryImageOfPage` remain absent until an eligible asset is separately recorded.

## 5. Environment and Indexing

- Preview/staging: `noindex, nofollow`; use non-production canonical safeguards defined by the external project.
- Production intent: canonical About URL and `index, follow` only after explicit release/indexing authorization.
- A successful build or Gate 9 QA does not authorize publication or indexing.
- No DNS, domain, mailbox or production data operation is authorized by Gate 7.

## 6. Gate 8 Implementation Requirements

When separately authorized, external development must implement:

1. scoped CMS/API retrieval and caching;
2. semantic body components and shared Global Chrome consumption;
3. exact Source Map copy and internal links;
4. metadata, social metadata and JSON-LD from the same records;
5. responsive and accessibility behavior;
6. route readiness/fallback behavior;
7. media-rights eligibility gates;
8. environment robots/canonical controls.

This project does not prescribe framework code or perform implementation.

## 7. Gate 9 Read-Only QA

Gate 9 must verify:

- public route, canonical, status and robots;
- all internal links and fallbacks;
- HTML/metadata/Schema visible-fact parity;
- `site_scope` isolation and cache behavior;
- shared Header/Footer/current state/fixed RFQ;
- frozen facts absent;
- media source/right/ALT/OG/Schema eligibility;
- visual, responsive and accessibility acceptance.

Failures return to the external development project; this planning project does not patch code.
