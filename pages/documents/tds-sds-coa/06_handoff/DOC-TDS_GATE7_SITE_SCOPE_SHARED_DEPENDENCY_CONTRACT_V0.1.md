# DOC-TDS Gate 7 Site-Scope and Shared-Dependency Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-TDS-G7-HANDOFF-01` |
| Page / route | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Required scope | `tio2-my` |
| Gate 8 | `NOT_AUTHORIZED` |

## 1. Exact scope isolation

Every operation requires exact `site_scope=tio2-my`, including:

- page records/revisions and route resolution;
- menu, Footer, current-navigation and Logo binding;
- media and optional social asset references;
- related-page and conversion-route eligibility;
- SEO, Canonical, robots and Schema records;
- cache keys, server-rendered output and revalidation;
- prefill normalization and trusted source context;
- analytics configuration and receiver relationship.

Missing/wrong scope fails closed. It never widens to a global/default query and never falls back to TIOVAR or another site.

## 2. Cache and generation dimensions

| Surface | Minimum key dimensions |
|---|---|
| Page data / HTML | `site_scope`, page ID/route, locale, content revision |
| Route eligibility | `site_scope`, route-map version, destination key |
| Global Chrome / Footer | shared owner version, `site_scope`, locale |
| SEO / Schema / social | `site_scope`, route, locale, content revision, approved shared asset version if used |
| Request prefill adapter | `site_scope`, source page ID, receiver contract version |

Purging/revalidating another scope must not replace, expose or invalidate DOC-TDS incorrectly. Foreign/stale scope data is a release blocker.

## 3. Shared Global Chrome

Global Chrome supplies:

- Desktop Header/navigation;
- Mobile Header/Mobile Menu behavior;
- Production SVG Logo;
- persistent Request a Quote actions;
- Deep Navy Footer and legal utility row.

DOC-TDS supplies only `current_navigation_key=Documents`. It does not own or copy navigation arrays, Footer columns, Logo assets, RFQ routes, legal links or Cookie Settings configuration.

## 4. Legal utilities

| Label/control | Current authority |
|---|---|
| Privacy Policy | `/privacy-policy/` |
| Dasar Privasi (BM) | `/ms/privacy-policy/` |
| Cookie Policy | `/cookie-policy/` |
| Cookie Settings | semantic button reopening the shared Consent Manager; no route |

There is no approved Terms of Use route or Footer item. Do not query, render, sitemap, Canonicalize or validate `/terms-of-use/` or `/legal/privacy-policy/` for this page.

## 5. Route dependencies

| Dependency | Owner | DOC-TDS behavior if not eligible |
|---|---|---|
| `/request-documents/` | CONV-DOC | Remove all page primary request actions and machine-readable request relationships; block complete conversion-path release |
| `/documents/` | DOC-000 | Omit secondary actions/Hub card atomically |
| `/documents/reach/` | DOC-REACH | Omit complete related card atomically |
| `/documents/certificate-of-origin/` | DOC-COO | Omit complete related card atomically |
| `/request-a-quote/` | CONV-RFQ / Global Chrome | Shared complete-site release blocker; page does not replace or hide shared RFQ |
| Legal/Consent controls | Legal/Privacy / Shared Consent | Shared complete-site release blocker when required controls are absent/broken |

No missing destination falls back to Contact, an email, phone, another conversion workflow, another scope or a disabled pseudo-action.

## 6. CONV-DOC ownership and current blockers

CONV-DOC owns receiver fields, validation, privacy, submission, retry, receipt-only success and actual data flow. DOC-TDS owns only the informational page and approved editable prefill initiation.

Current CONV-DOC release controls remain external to this Gate 7 package:

- production-equivalent access key and approved-recipient binding;
- provider server-side access/network conditions;
- one labeled test and actual mailbox receipt;
- production WordPress singleton application/read-back;
- Privacy processor/actual data-flow parity;
- Gate 10 release/indexing authorization.

DOC-TDS must not claim these are complete.

## 7. Evidence holds

- Claim Register decisions remain field-level release controls.
- `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN` cannot be bypassed through a related link or metadata.
- `SITE_WIDE_CROSS_PAGE_MALAYSIA_ORIGIN_CLAIM_HOLD=OPEN` remains binding for visible and machine-readable origin relationships.
- Related-page eligibility does not prove the related page's claims, files or release status.

## 8. Acceptance

Gate 9 must verify:

- exact scoped content/route/cache queries;
- wrong/missing-scope negative tests;
- no foreign menu, Logo, media, metadata, Schema, receiver or cache fallback;
- one shared Chrome assembly and no page-local fork;
- correct legal paths and no Terms route;
- atomic related/action omission by eligibility;
- no preview/staging URL leakage;
- no cross-scope source attribution or analytics leakage.

## 9. Boundary

This contract is implementation-neutral and does not authorize D16 access or work. Gate 8 remains separately user-controlled.
