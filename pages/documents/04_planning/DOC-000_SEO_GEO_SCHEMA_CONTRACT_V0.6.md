# DOC-000 Reader-Rework SEO, GEO and Schema Contract V0.6

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Rework ID | `DOC-000-G2-G3-READER-COPY-WF-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / NOT_APPROVED` |
| Keyword / mapping | `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE` |
| Content source | `DOC-000_CONTENT_ARCHITECTURE_V0.7.md` |
| Previous authority | SEO/GEO/Schema V0.5 remains historical approved input |

## 1. Metadata candidates

| Field | Candidate | Boundary |
|---|---|---|
| SEO Title | `Documents for Product Qualification | TiO2 Malaysia` | Unchanged; no forced primary keyword |
| Meta Description | `Request technical, safety, quality, COA, origin and supplier-qualification documentation for a selected titanium dioxide grade.` | Mirrors visible reader-focused scope; no availability promise |
| H1 | `Documents for Product & Supplier Qualification` | Unchanged exact visible H1 |
| Canonical | `https://tio2malaysia.com/documents/` | Candidate pending final route verification |
| Robots | `index,follow` | Conditional release candidate only |
| Language | `en` | Matches visible request-language statement |

## 2. Page and cannibalization boundary

DOC-000 remains a navigation/selection Hub without a primary keyword. It owns the visible four documentation families, three review scenarios, one selected Grade and the transition to Request Documents. It does not own file-detail, Product-detail, Market, regulatory-registration or request-form transaction intent.

The reader-focused mentions of technical, safety, quality, COA, origin and supplier qualification are visible category semantics, not new child-page targeting or proof that a document exists.

## 3. Visible entity model

```text
TiO2 Malaysia WebSite
└── WebPage /documents/
    ├── Breadcrumb: Home / Documents
    ├── Review scenarios: 3 visible descriptions
    ├── Documentation request categories: 4 visible descriptions
    ├── Product Grade request context: 1 of 14 selectable identifiers
    ├── Buyer Questions: 6 visible Q&A pairs
    └── Next step: Request Documents after valid Grade selection
```

The Grade relationship is request context only. It does not create a Grade-to-file, applicability, availability, approval, market or delivery relation.

## 4. GEO / FAQ source

Only the six visible Buyer Questions in Content Architecture V0.7 may source page-owned FAQ/GEO answers:

1. Four requestable documentation families.
2. A Grade is required; uncertain buyers are directed to Explore Products.
3. The Request Documents form permits selecting more than one document type.
4. The prefilled Grade remains editable before submission.
5. Documents are handled on request because materials differ by product and review purpose.
6. Requests are currently handled in English.

No machine summary may add direct-download, availability, response-time, approval, coverage or verified-file claims.

## 5. Schema candidate

- `WebPage` for `/documents/`.
- `BreadcrumbList` only for the visible `Home / Documents` trail.
- `FAQPage` only when all six final visible Q&A pairs are accessible, content-identical and eligible at publication time.
- `isPartOf` may reference the verified site-level `WebSite` entity.

Prohibited outputs remain: `ItemList`, `DigitalDocument`, file URL, revision/date, count, `DownloadAction`, `ViewAction`, Product-document relationship, availability, eligibility, Offer, certification, registration, approval or delivery claim. `potentialAction` remains blocked until the receiving route and editable prefill are verified.

## 6. Visible/machine parity

| Visible content | Machine boundary |
|---|---|
| Four documentation-category descriptions | Ordinary WebPage text only; no file entities or ItemList |
| Fourteen Grade options | Request-context identifiers only |
| Six Buyer Questions | Conditional FAQPage with identical answers only |
| Media region | No ImageObject or image fact until a final verified visible asset is approved |
| No inventory/download | Zero file entities, actions, URLs, revisions and counts |

## 7. Release checks

Before publication, verify the canonical route, Request Documents Grade prefill/editability, document-type multi-select behavior, shared Footer legal controls, final visible copy parity and final FAQ eligibility. These checks do not render as Buyer Clean status language.

## 8. Gate boundary

Status=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION / NOT_APPROVED`. This candidate changes visible-copy parity and FAQ source only. It does not change page identity, keyword ownership or evidence boundaries and does not authorize Gate 4/5, development or release.
