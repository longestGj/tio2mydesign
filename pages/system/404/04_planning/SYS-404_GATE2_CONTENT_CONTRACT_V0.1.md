# SYS-404 Gate 2 Stable Content Contract V0.1

## 1. Control and identity

| Field | Contract |
|---|---|
| Date / dispatch | `2026-09-08` / `G2-SYS404-EXEC-20260908-01` |
| Page ID / type | `SYS-404` / Global system recovery page |
| Language / market | EN / GLOBAL |
| Route / site scope | `RUNTIME_FALLBACK` for genuine unknown TiO2 Malaysia URLs / `tio2-my` |
| Search ownership | `NO_PRIMARY_KEYWORD`; no commercial or GEO answer target |
| Current B source | [Full Buyer Clean Copy V0.1](SYS-404_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md), locations `BC-01`–`BC-08` |
| Status | `READY_FOR_BUYER_REVIEW / NOT_APPROVED` |
| Authority boundary | Candidate only; no Gate 2 approval, Gate 3 start, implementation, deployment, publication or index opening |

This C artifact records stable page-specific behavior and machine semantics. It does not duplicate the Buyer Copy or the shared owner contracts.

## 2. Page-specific action contract

| ID / B location | Buyer-visible action | Target owner / URL | Page-specific context and result |
|---|---|---|---|
| `ACT-01` / `BC-04` | `Explore Products` | `PRODUCT-000` / `/products/` | Primary link; click navigates only. No Grade, market or previous-path context is passed. |
| `ACT-02` / `BC-05` | `Go to Homepage` | `HOME-001` / `/` | Primary link; click navigates only. No automatic redirect. |
| `ACT-03` / `BC-06` | `Request Documents` | `CONV-DOC` / `/request-documents/` | Supporting link; click opens the request entry. It does not assert download, availability, receipt or delivery. |
| `ACT-04` / `BC-07` | `Contact Our Team` | `CONTACT-001` / `/contact/` | Supporting link; click opens the contact page. No contact details, response time or service result is added here. |
| `ACT-05` / `BC-08` | `Request a Quote` | `CONV-RFQ` / `/request-a-quote/` | Supporting link; click opens the RFQ entry. It is not a quotation request submission or conversion event. |

All five actions are ordinary navigation links. Parameters, prefill, query forwarding and fragment forwarding are `NONE`. The unknown path must not be used to infer buyer identity, product, market, application, document or purchasing intent.

## 3. Content order, ownership and conditional rendering

The page-owned order is fixed as eyebrow → H1 → body → two Primary actions → three Supporting actions. Shared Header precedes the page-owned content and Shared Footer follows it.

| Condition / boundary | Required result |
|---|---|
| Genuine unknown `tio2-my` route | Render `BC-01`–`BC-08` and return real HTTP `404` |
| Valid registered route | Must not be intercepted or rendered as not found |
| Navigation current state | Each Desktop/Mobile navigation surface has zero current links; no false parent is inferred from an invalid path prefix |
| Shared chrome | Consume Global Chrome V0.5, Production SVG Logo Manifest V1.0 and fixed RFQ; no page-local fork or new asset key |
| Shared legal utilities | Consume Footer Legal Utility Addendum V1.0 and No-Terms Decision V1.0; Privacy EN/BM, Cookie Policy and Cookie Settings remain; no Terms link |
| Excluded page features | No search, FAQ, form, long SEO copy, recommendation, help center, visitor-blame copy, dynamic promise, product list or internal governance text |

## 4. SEO, GEO and Schema contract

| Field | Exact Gate 2 contract |
|---|---|
| SEO title | `Page Not Found | TiO2 Malaysia` |
| Page-specific meta description | `NONE`; no separate promotional or acquisition description is created. If a shared runtime template emits a description, it may only use the same not-found/recovery meaning already visible in `BC-03` and must not add a new claim. |
| HTTP status | Real `404` for the actual unknown request |
| Robots | `noindex, follow` |
| Sitemap | Excluded |
| Canonical | No page-specific or indexable canonical is emitted for an arbitrary unknown URL; no separate `/404/` acquisition route exists |
| Hreflang | `NOT_APPLICABLE` for the approved EN-only runtime fallback |
| Open Graph / social | No page-specific campaign or acquisition metadata. Shared defaults, if technically required, must remain within the visible not-found/recovery semantics. |
| GEO | No answer-ready block, FAQ target, location assertion, company capability claim or product recommendation |
| Schema | No page-specific Schema; do not represent the response as a Product, Article, WebPage acquisition target, quotation, document delivery or successful conversion |

Machine-readable output must not claim more than the visible content. `noindex, follow` is a directive target, not a guarantee about crawling, ranking or link equity.

## 5. Fact and source boundary

| Proposition / B location | Allowed expression | Boundary |
|---|---|---|
| Not-found explanation / `BC-03` | `may have moved or is no longer available` | Preserve `may`; do not claim a verified move, permanent deletion, cause, date or replacement URL |
| Products/documents/contact recovery / `BC-03`–`BC-08` | Exact approved words and registered destinations | Navigation availability and registered ownership do not prove live availability, document delivery, contact response or quotation outcome |
| Third-party sourcing | None | B contains no named external company, brand, external link, regulation, statistic or source-attribution expression; conditional third-party source precision review is not triggered |

No new enterprise, product, origin, certificate, inventory, delivery-time, regulatory or commercial-result fact is introduced.

## 6. Stable downstream acceptance dependencies

These are future acceptance conditions, not current implementation claims.

| Dependency | Owner / verification stage | Acceptance condition | Current state |
|---|---|---|---|
| `DEP01` | Gate 6 mapping; Gate 8 implementation; Gate 9 runtime verification | Representative unknown routes return HTTP 404 and render exact copy; representative valid routes are not intercepted | `NOT_TESTED` |
| `DEP02` | Target owners and Gate 8; Gate 9 link verification | All five exact destinations resolve inside `tio2-my`; clicks only navigate | `NOT_TESTED` |
| `DEP03` | Gate 6/8 SEO owner; Gate 9 response/DOM/sitemap verification | Robots is `noindex, follow`; sitemap excludes the page; no indexable unknown-URL canonical or page-specific Schema is emitted | `NOT_TESTED` |
| `DEP04` | Global Chrome / Legal owners; Gate 3/4 assembly; Gate 8/9 implementation and verification | Shared Header, Mobile Menu, Footer, production Logo, fixed RFQ and legal utilities are present; each navigation surface has zero current links | `NOT_TESTED` |
| `DEP05` | Gate 3/4 structure and visual; Gate 9 runtime evidence | 1440/768/390 complete views; keyboard reachability, visible focus, logical 44×44px targets at 390, usable 200% zoom and no horizontal overflow; wrapped content retains all actions | `NOT_TESTED` |
| `DEP06` | Gate 6 contract; Gate 8 implementation; Gate 9 isolation verification | Route, query, cache, menu, SEO, media, shared components and analytics stay within `site_scope=tio2-my`; no cross-scope fallback | `NOT_TESTED` |
| `DEP07` | Analytics/Consent owner; Gate 6/8/9 | Any 404 event uses a sanitized path without query/fragment sensitive data, follows approved consent, keeps remarketing disabled and is never treated as form success | `NOT_TESTED` |

The dependencies have explicit owners and observable acceptance conditions. They remain open for later authorized stages and do not block the present content candidate.

## 7. Acceptance and change boundary

Gate 2 content acceptance requires exact `BC-01`–`BC-08`, the fixed action hierarchy, the exclusions, and §4 machine semantics to remain aligned. Any change to action target/behavior, page order, conditional rendering, facts, SEO/GEO/Schema meaning, shared-owner difference or unknown-route scope requires a new C version and the applicable review/approval. Grammar or formatting changes that preserve those answers do not by themselves require a C version change.

