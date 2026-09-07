# DOC-000 SEO, GEO and Schema Contract V0.5

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Gate | Gate 2 — targeted final-reader revision |
| Review ID | `DOC-000-G2-V11-COPY-02` |
| Status | `APPROVED / CLOSED` |
| Checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED` |
| Approval date | 2026-09-01 |
| Approval source | Explicit user confirmation of `DOC-000 Gate 2 COPY-02` |
| Keyword / mapping | `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE` |
| Content source | `DOC-000_CONTENT_ARCHITECTURE_V0.6.md` |

V0.5 supersedes SEO/GEO/Schema V0.4 as the current Gate 2 candidate. V0.4 remains historical and non-current.

## 1. Metadata candidates

| Field | Candidate | State / boundary |
|---|---|---|
| SEO Title | `Documents for Product Qualification | TiO2 Malaysia` | Candidate; no forced primary keyword |
| Meta Description | `Explore documentation categories, select a titanium dioxide product grade, and continue to Request Documents for product and supplier review.` | Candidate; aligned with visible Hero and next step |
| H1 | `Documents for Product & Supplier Qualification` | Exact visible H1 |
| Canonical | `https://tio2malaysia.com/documents/` | Candidate; verify production host and route before publication |
| Robots | `index,follow` | Conditional candidate after route, canonical, content and release verification |
| Language | `en` | Matches visible English request note |
| Open Graph title | Same as SEO Title | No alternate claim expansion |
| Open Graph description | Same as Meta Description | No alternate claim expansion |

## 2. Keyword and cannibalization boundary

| Field | Contract |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Search intent | Navigation and controlled-request preparation |
| Secondary semantics | TDS, SDS, COA, COO and REACH remain search-architecture context only |
| DOC-000 owns | Hub identity, three review scenarios, four category choices, Grade selection and Request Documents handoff |
| DOC-000 does not own | Individual document-depth intent, exact Grade product intent, Market intent or request-form transaction intent |
| Child boundary | DOC-REACH, DOC-TDS and DOC-COO identities remain unchanged and are not linked by this candidate |
| Conversion boundary | `/request-documents/` owns request capture; DOC-000 owns selection and handoff only |

## 3. Visible entity and relationship model

```text
TiO2 Malaysia WebSite
└── WebPage /documents/
    ├── visible breadcrumb: Home / Documents
    ├── review scenarios: 3 visible labels
    ├── documentation categories: 4 visible labels
    ├── selectable Grade identifiers: 14 visible labels
    ├── Buyer Questions: 6 visible Q&A pairs
    └── next step: /request-documents/ after valid Grade selection
```

The Grade relationship represents request context only. It creates no Grade-to-file, availability, market, approval or delivery relationship.

## 4. GEO answer source

There is no separate Quick Answers module. GEO answers must be extracted only from the final visible Buyer Questions in Content Architecture V0.6.

| Visible question | Eligible concise answer |
|---|---|
| What is the Documents Hub? | It helps buyers choose a documentation category and Product Grade before continuing to Request Documents. |
| How do I request documentation? | Select a Product Grade, continue to Request Documents and add the documentation requirements on the request page. |
| Which documentation category should I choose? | Choose technical/product, safety, quality/COA, or origin/supplier qualification according to the review being prepared. |
| What if I am not sure which Product Grade applies? | Use Explore Products, then return to select the Grade most relevant to the request. |
| Can I change the Product Grade on the request page? | Yes. The selected Grade is carried into Request Documents as an editable value. |
| What language is used for document requests? | Requests are currently handled in English. |

Machine summaries may shorten wording only if the buyer meaning and next step remain unchanged.

## 5. Schema candidate

Eligible page-owned JSON-LD types:

- `WebPage` for `/documents/`.
- `BreadcrumbList` for the visible `Home / Documents` breadcrumb.
- `FAQPage` only when the final six Buyer Questions and answers are visibly rendered, accessible, content-identical and eligible under search-engine policy at publication time.
- `isPartOf` may reference the verified site-level `WebSite` entity.

Required properties:

| Property | Source |
|---|---|
| `url` | Verified canonical route |
| `name` | Visible H1 or approved SEO Title |
| `description` | Visible/meta description parity |
| `inLanguage` | `en` |
| `breadcrumb` | Visible breadcrumb only |
| `mainEntity` | Final visible Buyer Questions only when FAQPage conditions pass |

## 6. Prohibited structured relationships

- No `ItemList` for files, categories or Grade-document results.
- No `DigitalDocument`, file URL, revision/date, `DownloadAction` or `ViewAction`.
- No Grade-to-file, market-to-file, language-to-file, availability or eligibility relation.
- No Product capability inferred from selector labels.
- No Offer, Service, certification, registration, approval or delivery claim.
- No fifth/catch-all category or non-visible entity.
- No duplicated Q&A from the superseded Quick Answers module.
- No `potentialAction` until the Request Documents route and editable Grade-prefill behavior are verified.

## 7. Visible = machine parity

| Visible state | Machine output |
|---|---|
| WebPage with visible breadcrumb | `WebPage` plus matching `BreadcrumbList` |
| Four informational category cards | Ordinary visible WebPage text; no ItemList or file entities |
| 14 Grade selector values | No Product-document or availability relationships |
| Six final Buyer Questions | Conditional FAQPage only when all conditions pass |
| Selected Grade handoff | Plain visible link/action after valid selection; no unverified potentialAction |
| No public file inventory | Zero file entities, actions, URLs, revisions and counts |

## 8. Shared Footer and legal relations

Privacy Policy, Terms of Use, Cookie Policy and Cookie Settings are shared final-site Footer controls. DOC-000 may expose only the shared visible links/interactions supplied by Global Chrome. It does not create page-owned legal entities, copy or Schema merely because those controls appear in the Footer.

## 9. Release gates

Before publication, verify:

1. `/documents/` and its self-canonical resolve on the final HTTPS host.
2. `/request-documents/` accepts a validated Grade and keeps the receiving field editable.
3. Shared Footer legal routes and Cookie Settings interaction are present and functional.
4. Buyer Clean content matches the approved copy version.
5. No hidden file inventory, unsupported category or duplicated Q&A enters HTML or JSON-LD.
6. Final index approval is recorded before applying the robots candidate.

These are internal release checks and must not render as Buyer Clean status messages.

## 10. Gate 2 conclusion

This contract is `APPROVED / CLOSED`; checkpoint=`FULL_COPY_AND_MODULE_ORDER_CONFIRMED / APPROVED`, dated 2026-09-01. It is not a publication instruction and creates no Gate 3+ authority.
