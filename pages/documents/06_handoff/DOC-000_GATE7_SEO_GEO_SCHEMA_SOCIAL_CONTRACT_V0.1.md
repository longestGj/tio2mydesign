# DOC-000 Gate 7 SEO / GEO / Schema / Social Metadata Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Package ID | `DOC-000-G7-HANDOFF-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Source | Content Architecture V0.9 and Gate 6 SEO Review V0.2 |

## 1. Exact metadata

| Field | Required value | Release rule |
|---|---|---|
| `<title>` / SEO title | `Documents for Product Qualification | TiO2 Malaysia` | exact value; one title |
| Meta description | `Request technical, safety, quality, COA, origin and supplier-qualification documentation for a selected titanium dioxide grade.` | exact value; one tag |
| H1 | `Documents for Product & Supplier Qualification` | exact visible value; one H1 |
| Canonical | `https://tio2malaysia.com/documents/` | emit only on verified production-equivalent host/path |
| Robots | `index,follow` | production release candidate only after all listed blockers close |
| HTML `lang` | `en` | required |
| Current navigation key | `Documents` | shared semantic state; not page metadata copy |

`NO_PRIMARY_KEYWORD` means no artificial commercial keyword target. It does not automatically mean `noindex`.

## 2. Open Graph and Twitter single-source mapping

| Output | Source / exact rule |
|---|---|
| `og:title` | derive from the exact SEO title; no separate editable copy |
| `og:description` | derive from the exact Meta description; no separate editable copy |
| `og:url` | derive from the verified production Canonical |
| `og:type` | exact `website` |
| `twitter:title` | derive from the exact SEO title |
| `twitter:description` | derive from the exact Meta description |

Do not emit a preview/staging URL as Canonical or `og:url`.

No fact-bearing social image is approved. Two acceptable Gate 8 outcomes exist:

1. use a shared Brand/SEO owner-approved default social-image asset key that resolves within the authorized shared binding for `tio2-my`; or
2. omit social image tags intentionally.

Never use a guessed image, preview media, decorative Hero media as a factual image, or another `site_scope` media record as fallback.

## 3. Initial HTML/DOM requirements

The initial production-equivalent HTML/DOM contains:

1. one H1, Hero paragraph and English note;
2. visible `Home / Documents` breadcrumb;
3. native Hero link with real `/request-documents/` href;
4. selector label, prompt, all 14 option labels, helper, validation container and visible Continue;
5. all module headings and approved body copy;
6. all six FAQ questions and answers;
7. Closing CTA content and initial action;
8. native Explore Products link when its route is valid;
9. shared Header/Footer links supplied by Global Chrome.

FAQ answers may be programmatically collapsed but remain in DOM. They are not fetched only after activation. Hydration must not replace approved content with empty shells or alter link destinations.

## 4. GEO answer and entity boundary

Only visible approved copy is eligible as a GEO answer source. The six exact FAQ pairs come from the same objects used for visible rendering.

Do not add generated claims about:

- document existence, revision, currentness or availability;
- direct download or approval;
- REACH registration or certification;
- universal product, Grade or market coverage;
- response or delivery time;
- origin, traceability or supplier qualification beyond the visible request-purpose wording.

## 5. Schema graph

### Eligible after route/entity verification

- `WebPage` for `https://tio2malaysia.com/documents/`.
- `BreadcrumbList` matching visible Home then Documents.
- `isPartOf` relationship to the verified site-level `WebSite` entity.

### Conditional

- `FAQPage` only when all six visible FAQ pairs are present, accessible and generated from the identical content objects. Any visible/schema difference disables FAQ Schema and blocks release until parity is restored.

### Prohibited

- inventory-implying `CollectionPage`;
- `ItemList`, `DigitalDocument`, `MediaObject` or file entities;
- file URL, date, revision, language coverage, count or availability;
- `DownloadAction`, `ViewAction`, `Offer`, certification, registration or compliance relation;
- Product-document, Grade-file or market-document relationships;
- `potentialAction` before Request Documents route and editable prefill are production-verified;
- fact-bearing `ImageObject` for decorative or unapproved social media.

## 6. Breadcrumb JSON-LD parity

The visible breadcrumb is:

1. Home → `https://tio2malaysia.com/`.
2. Documents → `https://tio2malaysia.com/documents/`.

JSON-LD order, labels and URLs match exactly. Preview/staging hosts never enter production JSON-LD.

## 7. Canonical, alternates and indexing

- Self-Canonical path is exactly `/documents/`.
- Canonical does not point to CONV-DOC, a child Document page or any old proposed Hub URL.
- No DOC-000 hreflang is emitted until a localized equivalent is separately approved.
- The English request note is not permission to invent a localized route.
- `index,follow` activates only after route, content, shared Chrome/legal, Canonical, DOM and schema parity checks pass.

## 8. Legal metadata boundary

The shared Footer links to `/privacy-policy/`, `/ms/privacy-policy/`, `/cookie-policy/` and exposes Cookie Settings as a non-page control. `/terms-of-use/` does not enter sitemap, Canonical, hreflang, schema, metadata, Footer or QA inventory.

## 9. Gate 8/9 acceptance

- status 200 and stable self-Canonical;
- exact title, description, H1 and `lang=en`;
- Canonical equals `og:url` on production;
- OG/Twitter title/description source parity;
- approved shared social-image key or intentional omission;
- required initial DOM present without client-only fetch;
- FAQ visible/schema parity or FAQ Schema absent;
- prohibited schema/entity count zero;
- no preview host or cross-scope SEO/media leakage;
- robots changes remain subject to release authorization.

## 10. Boundary

Status remains `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. This contract does not authorize implementation, indexing or publication.
