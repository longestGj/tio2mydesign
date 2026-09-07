# DOC-000 Gate 6 SEO, GEO, Schema, Social Metadata and DOM Review V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Review ID | `DOC-000-G6-PCR-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Keyword / mapping | `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE` |
| Sole current visible-copy source | `DOC-000_CONTENT_ARCHITECTURE_V0.9.md` |
| Current normalized Brief | `DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.6.md` |
| Historical inputs | Preserved but excluded from current Gate 7 consumption |

## 1. Metadata review candidate

| Field | Candidate | Boundary |
|---|---|---|
| SEO title | `Documents for Product Qualification | TiO2 Malaysia` | Navigation/qualification language; no forced child keyword |
| Meta description | `Request technical, safety, quality, COA, origin and supplier-qualification documentation for a selected titanium dioxide grade.` | Visible scope without availability promise |
| H1 | `Documents for Product & Supplier Qualification` | Exact visible H1 |
| Canonical | `https://tio2malaysia.com/documents/` | Self-reference only after production host/path verification |
| Robots | `index,follow` | Release candidate only after route, canonical, content and shared Footer parity |
| HTML language | `en` | Matches visible English request statement |
| Current navigation key | `Documents` | Shared Chrome semantic mapping |

`NO_PRIMARY_KEYWORD` prevents artificial commercial targeting; it does not automatically require `noindex`.

## 2. Social metadata single-source contract

| Field | Required value/source |
|---|---|
| `og:title` | exact same stored/rendered value as SEO title |
| `og:description` | exact same stored/rendered value as Meta description |
| `og:url` | exact same verified absolute value as production canonical |
| `og:type` | `website` |
| `twitter:title` | exact same stored/rendered value as SEO title |
| `twitter:description` | exact same stored/rendered value as Meta description |

There must not be parallel editable title or description copy that can drift from SEO metadata. `og:url` is omitted on unverified preview/staging hosts rather than populated with a preview URL.

No fact-bearing social image is approved for DOC-000. A social image must not imply a verified document, certificate, factory, origin, inventory, compliance scope or market coverage. If the shared Brand/SEO owner supplies a default social image, Gate 7 may reference only its approved asset key under `site_scope=tio2-my`; it may not copy or fall back to another scope's media record. If no approved key is ready, image tags are intentionally omitted and Gate 8/9 records that result; an unapproved fallback is a failure.

## 3. Search intent and cannibalization

DOC-000 owns selection/navigation among visible documentation purposes, optional Product Grade context and the transition to CONV-DOC. It does not own REACH information, TDS/SDS/COA article/file intent, COO/origin-document information, exact Grade primary terms, market/country supplier intent, form-submission transaction intent or public download/PDF intent.

Category words may appear only as visible explanatory language; they do not create hidden keyword lists or machine-readable document entities.

## 4. Initial HTML/DOM contract

The production-equivalent initial response contains:

1. one H1 and complete Hero paragraph/note;
2. native Hero link to `/request-documents/`;
3. selector label, prompt, 14 options, helper, validation container and visible Continue;
4. all module headings and body copy;
5. all six FAQ questions and answers;
6. Closing CTA copy and current action label;
7. visible breadcrumb links;
8. shared Header/Footer links supplied by Global Chrome.

Collapsed FAQ answers remain in DOM and are accessibly associated. Approved content must not be replaced by empty hydration shells. Hero and Explore Products links remain usable without client JavaScript.

## 5. Visible GEO answer source

Only the six exact FAQ answers in Content Architecture V0.9 are page-owned GEO answer sources. No generated summary may add availability, direct download, approval, regulatory coverage, response time, revision or universal Grade/market scope.

## 6. Schema graph candidate

Eligible after route/entity verification:

- `WebPage` for `/documents/`;
- `BreadcrumbList` matching visible `Home / Documents`;
- `isPartOf` to the verified site-level `WebSite` entity.

Conditionally eligible:

- `FAQPage` only when all six visible pairs are accessible and generated from the same current content objects.

Not eligible:

- `CollectionPage` that implies a document inventory;
- `ItemList`, `DigitalDocument`, `MediaObject`, file URL, revision, date or count;
- `DownloadAction`, `ViewAction`, `Offer`, certification, registration or compliance coverage;
- Product-to-document, Grade-to-file, market-to-document or availability relation;
- `potentialAction` before receiver and editable Grade prefill verification;
- `ImageObject` assigning factual meaning to decorative or social media.

## 7. Visible/machine parity and legal boundary

- Four categories remain ordinary visible WebPage text only.
- Fourteen Grade options remain request-context labels only.
- Six FAQ pairs may become conditional `FAQPage` from the same objects.
- No public file list means zero file entities, actions and counts.
- Decorative/social media carries no factual document or compliance relation.
- Footer legal links and routes follow `LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md`, `PAGE_REGISTRY_V0.2.md` and `GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`.
- `/terms-of-use/` is prohibited from Canonical, sitemap, hreflang, schema, social metadata or release dependencies.

## 8. Canonical, robots and alternate boundaries

- Production canonical resolves exactly to `/documents/` on `tio2malaysia.com`.
- Preview/staging URLs never become canonical or `og:url`.
- Canonical never points to CONV-DOC, a child Document page or an earlier proposed Hub URL.
- No DOC-000 hreflang is emitted until a localized equivalent is approved.
- `index,follow` activates only after route, canonical, content, shared Footer and machine parity pass.

## 9. Gate 8/9 acceptance

Verify status 200, stable canonical, matching `og:url`, title/description single-source parity, initial DOM content, valid/invalid Grade handoff, editable receiver prefill, FAQ/schema parity, legal links, Cookie Settings, prohibited-schema count zero and `site_scope=tio2-my` isolation.

For social media, verify either:

1. an approved shared asset key supplied by the shared owner and resolved within allowed scope; or
2. intentional omission of image tags.

Reject factual, guessed, preview-host or cross-scope image fallback.

## 10. Requested disposition

This review is submitted under `DOC-000-G6-PCR-02`. It remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` and grants no Gate 7, implementation, release or indexing authority.
