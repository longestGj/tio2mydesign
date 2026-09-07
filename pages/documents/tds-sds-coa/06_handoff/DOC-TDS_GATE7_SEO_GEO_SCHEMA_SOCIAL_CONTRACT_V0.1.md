# DOC-TDS Gate 7 SEO, GEO, Schema and Social Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-TDS-G7-HANDOFF-01` |
| Page / route | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Site scope | `tio2-my` |
| Gate 8 | `NOT_AUTHORIZED` |

## 1. Exact metadata

| Element | Required value |
|---|---|
| Title | `Titanium Dioxide TDS, SDS & COA: What to Request | TiO2 Malaysia` |
| Meta description | `Understand the difference between titanium dioxide TDS, SDS and COA, add the relevant product or batch context, and request the documents needed for review.` |
| H1 | `Titanium Dioxide TDS, SDS & COA: What to Request` |
| Canonical candidate | `https://tio2malaysia.com/documents/tds-sds-coa/` |
| Language | `en` |
| Hreflang | None |
| Breadcrumb | `Home / Documents / TDS, SDS & COA` |
| Primary keyword | `titanium dioxide tds` |
| Robots | Gate 10 controlled; non-production must remain non-indexable |

Query/prefill variants use the same clean query-free Canonical and never change Title, Meta, H1, robots, Schema IDs or social metadata.

## 2. Search intent and cannibalization

DOC-TDS owns document-choice support for TDS/SDS/COA. It does not own:

- exact Grade primary terms;
- country-supplier terms;
- REACH registration/information intent;
- Certificate-of-Origin information intent;
- Request Documents transaction intent;
- public PDF/download intent;
- Grade-document availability queries.

The primary term appears naturally in the H1/Title. Supporting SDS/COA terminology deepens the same buyer decision rather than creating separate competing pages.

## 3. GEO answer contract

The visible Direct Answer must remain extractable in this meaning:

`TDS → Grade-level technical evaluation; SDS → product + jurisdiction + language safety/handling context; COA → specific lot/batch results`.

The comparison, checklist, four-step process and FAQ may be quoted only within the approved visible context. No AI-facing field may claim that a file exists, is current, is available, establishes compliance or will be delivered.

## 4. Schema allowlist

Render only:

- one `WebPage` for DOC-TDS;
- one `BreadcrumbList` matching the visible breadcrumb;
- references to existing approved site-wide `WebSite` and `Organization` IDs without extending their facts.

Required `WebPage` values:

| Property | Source |
|---|---|
| `@id` | clean Canonical plus approved page fragment convention |
| `url` | clean Canonical |
| `name` | exact SEO Title or approved page-name convention without factual expansion |
| `description` | exact Meta description |
| `inLanguage` | `en` |
| `breadcrumb` | DOC-TDS BreadcrumbList ID |

Breadcrumb items:

1. Home → `https://tio2malaysia.com/`;
2. Documents → `https://tio2malaysia.com/documents/`;
3. TDS, SDS & COA → current clean Canonical.

## 5. Prohibited machine-readable output

Do not render:

- `FAQPage`, `QAPage`, `HowTo`, `Product`, `Offer`, `DigitalDocument`, `MediaObject` for files, `DownloadAction` or `SearchAction`;
- document filenames, URLs, revisions, currentness, availability or download relations;
- Grade-document, Grade-compliance or Grade-jurisdiction relationships;
- certification, REACH registration, origin, conformity, stock, price, delivery or response-time facts;
- buyer selections, query values, hidden source attribution, buyer-entered context, form errors or receiver outcomes;
- hidden FAQs or text not present in the visible approved page.

If a visible eligible route is suppressed, no corresponding machine-readable relationship may remain. This package does not authorize a new action node.

## 6. Social metadata

- `og:title` and `twitter:title` use the exact SEO Title source.
- `og:description` and `twitter:description` use the exact Meta description source.
- `og:url` uses the clean Canonical.
- `og:type` is `website`.
- Query values never enter social metadata.
- A social image may be used only through an approved shared Brand/SEO asset key valid for `tio2-my`.
- Without an approved shared key, omit image tags. Do not create a page-local factory, certificate, PDF, document or origin image solely for metadata.

## 7. Initial DOM and crawlability

- One H1 and ordered headings.
- All ten modules appear in server-rendered HTML when eligible.
- FAQ answers remain in initial DOM even when visually collapsed.
- Primary content is text, not image-rendered text.
- Descriptive anchors identify Documents Hub, REACH and Origin topics.
- Hidden responsive navigation is excluded from the accessibility tree and does not duplicate crawlable current-state meaning.

## 8. Gate 8/9/10

- Gate 8 implements exact values from the scoped source with no cross-scope fallback.
- Gate 9 inspects rendered head/HTML/JSON-LD, query Canonical behavior, visible/machine parity and prohibited nodes.
- Gate 10 alone authorizes production Canonical/robots/indexing and public release.
