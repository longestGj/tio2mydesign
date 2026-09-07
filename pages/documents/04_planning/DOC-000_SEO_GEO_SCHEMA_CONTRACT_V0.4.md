# DOC-000 SEO, GEO and Schema Contract V0.4

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Gate | Gate 2 |
| Review ID | `DOC-000-G2-V11-COPY-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Checkpoint | `FULL_COPY_AND_MODULE_ORDER_CONFIRMED_PENDING_USER_CONFIRMATION` |
| Keyword / mapping | `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE` |
| Upstream | Approved Gate 1 four-group contract |

## 1. Metadata candidates

| Field | Candidate | State / boundary |
|---|---|---|
| SEO Title | `Documents for Product Qualification | TiO2 Malaysia` | Candidate; no forced primary keyword |
| Meta Description | `Review documentation categories for titanium dioxide products, select a product grade, and continue to the controlled Request Documents process.` | Candidate; no availability or download claim |
| H1 | `Documents for Product & Supplier Qualification` | Must equal visible H1 |
| Canonical | `https://tio2malaysia.com/documents/` | Candidate; verify production host and route before publication |
| Robots | `index,follow` | Conditional candidate only after route, content, canonical and release blockers pass |
| Language | `en` | English-only visible service |
| Open Graph title | Same as SEO Title | No alternate claim expansion |
| Open Graph description | Same as Meta Description | No alternate claim expansion |

No metadata field may use `download`, public-library, file-availability, certification, approval, market-coverage or delivery language.

## 2. Keyword and cannibalization boundary

| Field | Contract |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Secondary semantics | TDS, SDS, COA, COO and REACH remain architectural/search-context terms only |
| Search intent | Navigation and controlled-request preparation |
| DOC-000 owns | Hub identity, review-scenario navigation, four-group selection, Product Grade selection and Request Documents handoff |
| DOC-000 does not own | Individual document-depth intent, exact Grade product intent, country supplier intent, application intent or request-form transaction intent |
| Child boundaries | DOC-REACH, DOC-TDS and DOC-COO retain registered identities; this page neither starts nor links them |
| Conversion boundary | `/request-documents/` owns request capture; DOC-000 owns only the Grade-first handoff |

The page must not be optimized around an unsupported fifth capability merely because a related secondary term remains in the keyword architecture.

## 3. Visible entity and relationship model

Eligible visible relationships:

```text
TiO2 Malaysia website
└── WebPage: /documents/
    ├── purpose: prepare a product documentation request
    ├── review scenarios: 3 visible labels
    ├── documentation groups: 4 visible labels
    ├── selectable product identifiers: 14 visible Grade labels
    └── next page: /request-documents/ after valid Grade selection
```

The Grade selector establishes request context only. It does not establish that a Grade has a TDS, SDS, COA, COO, origin record, supplier record or any other file.

## 4. Direct-answer / GEO blocks

The following answers are eligible only when rendered visibly with the approved Gate 2 copy:

| Buyer question | Approved concise answer |
|---|---|
| What is the Documents Hub? | It helps a buyer choose a documentation category and Product Grade before continuing to Request Documents. |
| How do I request documentation? | Select a Product Grade, continue to Request Documents, then review or edit the prefilled Grade before submitting requirements. |
| Does every request result in documents? | No. A request is reviewed against its product and context and does not guarantee availability, approval or delivery. |
| Can documents be downloaded here? | No. The Hub has no public downloads or public file list. |
| What language is supported? | The current documentation request service is English only. |

GEO extraction must preserve the qualifying clauses. Shortened answers may not remove `does not guarantee`, `if any`, context or English-only limitations.

## 5. Schema candidate

Eligible page-owned JSON-LD types, subject to visible parity and release validation:

- `WebPage` for `/documents/`.
- `BreadcrumbList` for visible `Home / Documents`.
- `FAQPage` only if all six approved questions and answers render visibly, remain accessible and current search-engine policy permits its use at publication time.
- `isPartOf` may reference the verified site-level `WebSite` entity.

Required page properties:

| Property | Source |
|---|---|
| `url` | Verified canonical route |
| `name` | Visible H1 or approved SEO Title, without claim expansion |
| `description` | Visible/meta description parity |
| `inLanguage` | `en` |
| `breadcrumb` | Visible breadcrumb only |
| `mainEntity` | Visible FAQ only when FAQPage eligibility conditions pass |

## 6. Prohibited structured relationships

Do not emit:

- `ItemList` for documents, documentation groups or Product-to-document results.
- `DigitalDocument`, `MediaObject`, `DownloadAction`, `ViewAction` or file URLs.
- Grade-to-file, market-to-file, language-to-file, revision/date, availability or eligibility relations.
- `Product` claims derived only from selector labels.
- `Offer`, `Service`, `AggregateOffer`, certification, approval, registration or delivery claims.
- a fifth documentation-group entity, catch-all group or non-visible category.
- child-page relationships that are not visibly linked and verified.
- `potentialAction` for Request Documents until the receiver route and Grade-prefill behavior are verified live.

## 7. Visible = machine parity table

| Visible state | Machine output |
|---|---|
| Four documentation cards | No ItemList; labels may remain ordinary visible WebPage text only |
| 14 Grade options | No Product/document relationships; no implied availability |
| Request route ready and visible | Plain page link is eligible; action Schema still requires separate verification |
| Request route unavailable | No request action relation; route is a release blocker |
| No public file inventory | Zero file entities, URLs, actions, revisions and counts |
| FAQ collapsed/expanded | FAQ text must remain present and accessible to qualify for FAQPage |

## 8. Canonical, robots and release gates

The metadata above remains candidate-level. Before publication, verify:

1. `/documents/` resolves on the production host without redirect ambiguity.
2. Canonical is self-referential and uses the final HTTPS host.
3. `/request-documents/` is live and accepts a validated Grade while keeping the field editable.
4. Buyer Clean content matches this approved copy version.
5. No hidden file inventory or unsupported capability enters rendered HTML or JSON-LD.
6. Final index approval is recorded; otherwise do not infer `index,follow` from this Gate 2 candidate.

## 9. Gate 2 conclusion

This contract is `DRAFT_FOR_PROJECT_CONTROL_REVIEW`. It is a metadata and relationship candidate, not a publication instruction. Checkpoint=`FULL_COPY_AND_MODULE_ORDER_CONFIRMED_PENDING_USER_CONFIRMATION`; Gate 3+ remains unauthorized.
