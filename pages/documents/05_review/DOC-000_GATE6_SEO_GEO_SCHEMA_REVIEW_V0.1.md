# DOC-000 Gate 6 SEO, GEO, Schema and DOM Review V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Review ID | `DOC-000-G6-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Keyword / mapping | `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE` |
| Visible-copy source | Content Architecture V0.8 plus later Hero decision `DOC-000-G4-HERO-CTA-02` |
| Superseded input note | SEO/GEO/Schema V0.6 remains preserved but its V0.7 source reference and pre-confirmation status are not current control |

## 1. Metadata review candidate

| Field | Candidate | Boundary |
|---|---|---|
| SEO title | `Documents for Product Qualification | TiO2 Malaysia` | Navigation/qualification language; no forced child keyword |
| Meta description | `Request technical, safety, quality, COA, origin and supplier-qualification documentation for a selected titanium dioxide grade.` | Matches visible scope without availability promise |
| H1 | `Documents for Product & Supplier Qualification` | Exact visible H1 |
| Canonical | `https://tio2malaysia.com/documents/` | Self-reference only after production host/path verification |
| Robots | `index,follow` | Release candidate only; requires canonical, route and content parity |
| HTML language | `en` | Matches the approved English request statement |
| Current navigation key | `Documents` | Shared Chrome semantic mapping; not metadata copy |

`NO_PRIMARY_KEYWORD` prevents artificial commercial targeting; it does not automatically require `noindex`.

## 2. Search-intent and cannibalization boundary

DOC-000 owns selection and navigation among visible documentation purposes, one Product Grade request context and the transition to CONV-DOC. It does not own:

- REACH registration/compliance information intent;
- TDS, SDS or COA article/file intent;
- COO or origin-document information intent;
- exact Grade primary terms;
- Market/country supplier intent;
- form-submission transaction intent;
- public file-library, download or PDF intent.

Category words may appear in visible explanatory text and FAQ answers but must not be expanded into article-depth sections, hidden keyword lists or machine-readable document entities.

## 3. Initial HTML/DOM contract

The production-equivalent initial response must contain:

1. one H1 and the complete Hero paragraph/note;
2. native Hero link to `/request-documents/`;
3. selector label, prompt, 14 option labels, helper, validation container and visible Continue control;
4. all module headings and body copy;
5. all six FAQ questions and answers;
6. Closing CTA copy and current action label;
7. visible breadcrumb links;
8. shared Header/Footer navigation links supplied by Global Chrome.

Collapsed FAQ answers remain in DOM and are associated with their disclosure buttons. They may be hidden by an accessible collapsed state but cannot exist only in client memory or be fetched after the first click.

Hydration must not temporarily replace approved content with empty shells or change link destinations. Hero and Explore Products remain usable when client JavaScript is unavailable.

## 4. Visible GEO answer source

Only these visible scoped answers are page-owned:

| Question | Exact answer source |
|---|---|
| What documents can I request? | `You can request technical/product, safety, quality/COA, and origin/supplier-qualification documentation.` |
| Do I need to know the Product Grade? | `Yes. Select the Product Grade the documents should relate to. If you are not sure, explore Products before continuing.` |
| Can I request more than one document type? | `Yes. On the Request Documents form, you can select the document types your team needs.` |
| Can I change the prefilled Product Grade? | `Yes. The selected Product Grade is prefilled on the request form and can be changed before submission.` |
| Why are documents provided on request? | `Documentation can differ by product and review purpose. A request helps match the materials to the selected Grade and your team's needs.` |
| What language is used for document requests? | `Requests are currently handled in English.` |

No generated summary may add availability, direct download, approval, regulatory coverage, response time, current revision or universal Grade/market scope.

## 5. Schema graph candidate

### Always eligible after route/entity verification

- `WebPage` for the visible `/documents/` page.
- `BreadcrumbList` matching visible `Home / Documents`.
- `isPartOf` to the verified site-level `WebSite` entity.

### Conditionally eligible

- `FAQPage` only when all six visible question/answer pairs are present, accessible and byte-for-byte/content-equivalent to the generated FAQ structured data at publication time.

### Not eligible

- `CollectionPage` that implies a document inventory;
- `ItemList`, `DigitalDocument`, `MediaObject`, file URL, revision, date, download count or file count;
- `DownloadAction`, `ViewAction`, `Offer`, certification, registration or compliance relation;
- Product-to-document, Grade-to-file, market-to-document or availability relation;
- `potentialAction` before Request Documents route, form receiver and editable Grade prefill are verified;
- `ImageObject` that assigns factual document, certificate, factory, origin or compliance meaning to decorative Hero media.

## 6. Visible/machine parity matrix

| Visible element | Allowed machine expression |
|---|---|
| Page identity and H1 | `WebPage` name/headline consistent with visible content |
| Home / Documents breadcrumb | same two-item `BreadcrumbList` and URLs |
| Four documentation categories | ordinary visible WebPage text only |
| Fourteen Grade options | form/request-context labels only; no Product or file relation |
| Six FAQ pairs | conditional `FAQPage` from the same content objects |
| Hero direct link | ordinary HTML link; no verified `potentialAction` yet |
| No public file list | zero file entities, file relations, actions and counts |
| Decorative media | decorative/empty ALT; no factual schema relation |

## 7. Canonical, robots and alternate boundaries

- Canonical path must resolve exactly to `/documents/` on the production `tio2malaysia.com` host.
- Preview, staging or alternate host URLs must not become the production canonical.
- No canonical may point to `/request-documents/`, a child Document page or an earlier `/document-hub/` suggestion.
- No hreflang is emitted for DOC-000 until an approved localized equivalent exists; English-only service copy is not a language-site architecture decision.
- `index,follow` is enabled only after the production-equivalent route, canonical, content, shared Footer and machine parity checks pass.

## 8. Release validation

Before indexing or production release, verify:

- status 200 and stable self-canonical;
- initial HTML contains H1, body, six FAQ pairs and real links;
- valid/invalid Grade handoff and editable receiver prefill;
- FAQ disclosure accessibility and structured parity;
- shared legal Footer links and Cookie Settings behavior;
- no prohibited schema nodes or hidden document claims;
- `site_scope=tio2-my` isolation for SEO records, route data and cached HTML.

These are release checks, not Buyer Clean text and not automatic Gate 6 blockers.

## 9. Requested disposition

Project control should approve, revise or reject this normalization as part of `DOC-000-G6-PCR-01`. Until then its status remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

