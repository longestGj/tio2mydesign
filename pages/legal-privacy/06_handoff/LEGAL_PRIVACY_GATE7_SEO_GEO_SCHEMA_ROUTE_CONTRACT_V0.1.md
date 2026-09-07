# Legal / Privacy Gate 7 SEO / GEO / Schema / Route Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package | `LEGAL-PRIVACY-G7-HANDOFF-01` |
| Review | `LEGAL-PRIVACY-G7-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED / BM_META_USER_APPROVED` |
| Primary-keyword role | All three pages are `NO_PRIMARY_KEYWORD` Legal utilities |

## 1. Exact metadata

| Page ID | Title | Meta description | Canonical | Robots direction |
|---|---|---|---|---|
| `LEGAL-PRIV-EN` | `Privacy Policy | TiO2 Malaysia` | `Learn how TiO2 Malaysia handles business inquiry data, service providers, retention, Cookies and applicable privacy choices.` | `https://tio2malaysia.com/privacy-policy/` | `index,follow`, subject to Gate 10 review |
| `LEGAL-PRIV-MS` | `Dasar Privasi | TiO2 Malaysia` | `Ketahui cara TiO2 Malaysia mengendalikan data pertanyaan perniagaan, penyedia perkhidmatan, tempoh penyimpanan, kuki dan pilihan privasi yang berkenaan.` | `https://tio2malaysia.com/ms/privacy-policy/` | `index,follow`, subject to Gate 10 review |
| `LEGAL-COOKIE-EN` | `Cookie Policy | TiO2 Malaysia` | `Learn which Cookies and similar technologies TiO2 Malaysia uses and how to review or change available Analytics preferences.` | `https://tio2malaysia.com/cookie-policy/` | `index,follow`, subject to Gate 10 review |

User-approved Option A:

`Ketahui cara TiO2 Malaysia mengendalikan data pertanyaan perniagaan, penyedia perkhidmatan, tempoh penyimpanan, kuki dan pilihan privasi yang berkenaan.`

The user approved this exact Buyer-visible metadata on 2026-09-02. It remains subject to the same BM human-equivalence review as the page body before release.

## 2. Language alternates

For both Privacy pages, emit on each page:

| `hreflang` | URL |
|---|---|
| `en` | `https://tio2malaysia.com/privacy-policy/` |
| `ms-MY` | `https://tio2malaysia.com/ms/privacy-policy/` |
| `x-default` | `https://tio2malaysia.com/privacy-policy/` |

The links are reciprocal and appear in the initial HTML. Cookie Policy has no alternate-language relationship until a separately approved BM Cookie page exists.

## 3. Route and sitemap contract

| Route key | Path | Page ID | Sitemap eligibility |
|---|---|---|---|
| `PRIVACY_EN` | `/privacy-policy/` | `LEGAL-PRIV-EN` | yes after Gate 10 index authorization |
| `PRIVACY_MS` | `/ms/privacy-policy/` | `LEGAL-PRIV-MS` | yes after Gate 10 index authorization |
| `COOKIE_POLICY_EN` | `/cookie-policy/` | `LEGAL-COOKIE-EN` | yes after Gate 10 index authorization |
| `OPEN_COOKIE_SETTINGS` | no URL | `SHARED-CONSENT-TIO2-MY` | never; runtime control only |

No approved route, redirect, sitemap entry, Canonical, hreflang, Breadcrumb or QA dependency exists for `/terms-of-use/` or `/legal/privacy-policy/`. Internal code/tests that still use the old Privacy route must be corrected only inside a separately authorized Gate 8 task.

## 4. Structured data

Each page emits one visible-copy-equivalent `WebPage` node and one `BreadcrumbList` node in the initial HTML.

Required `WebPage` mapping:

```text
@type: WebPage
@id: <canonical>#webpage
url: <canonical>
name: <exact Title without unsupported additions>
description: <exact Meta description>
inLanguage: en | ms-MY
dateModified: <visible effective/update date in ISO form>
isPartOf: <same-site WebSite entity reference>
about: <visible Organization/controller reference where present>
breadcrumb: <same-page BreadcrumbList @id>
```

Required `BreadcrumbList` mapping:

- position 1: visible Home label and same-site home URL;
- position 2: visible current-page label and exact Canonical URL.

Do not emit `FAQPage`, `Article`, `LegalService`, `TermsOfService`, ratings, certifications, DPO, EU/UK representative, legal jurisdiction or other unsupported entities. Machine-readable relationships must not exceed visible copy.

## 5. GEO and answer-ready boundary

- The primary controller entity is `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` operating the TiO2 Malaysia site.
- The visible Privacy copy supplies concise answer-ready blocks for controller/contact, data categories, purposes, providers/international processing, retention, Cookies/Analytics and applicable rights.
- The Cookie page supplies verified current technology/category/inventory and preference behavior only.
- Web3Forms/Web3Creative and other providers appear only at the specificity supported by approved visible copy and current evidence.
- No commercial supplier, product, market, application or document keyword is targeted by these pages.

## 6. Initial HTML and parity acceptance

- H1, body, metadata, Canonical, hreflang and JSON-LD are available without user activation.
- Cookie Settings UI may be runtime-rendered, but policy links and current disclosure remain available in initial page HTML.
- Canonical host is exact `https://tio2malaysia.com`; no preview, WordPress, TITAN or alternate-site host leaks.
- Browser-visible Title/Meta, Open Graph/Twitter text if implemented, and Schema descriptions use the same approved facts and language.
- Any release-state-dependent Cookie wording and `dateModified` must change atomically with the production-observed inventory.

## 7. Boundary

This contract does not authorize indexing. Robots and sitemap activation remain subject to Gate 10 publication/index approval.
