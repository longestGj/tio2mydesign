# RES-000 SEO, GEO and Schema Contract V0.1

## Control

| Field | Value |
|---|---|
| Page | `RES-000` / `/resources/` |
| Date | 2026-08-31 |
| Status | `DRAFT_FOR_GATE_2_REVIEW` |
| Keyword authority | `research/keyword/11_page_keyword_master.csv` |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Search intent | `N` with informational Hub utility |

## Metadata

| Field | Candidate value |
|---|---|
| Title | `Titanium Dioxide Procurement Resources | TiO2 Malaysia` |
| Meta description | `Explore titanium dioxide buying guides, technical evaluation principles and dated market or trade updates for sourcing decisions across the EU, UK, India and Brazil.` |
| Canonical | `https://tio2malaysia.com/resources/` |
| H1 | `Resources for Titanium Dioxide Procurement Decisions` |
| Hreflang | `NOT_APPLICABLE` in the current EN-only registry |
| Robots | Final index/follow decision at Gate 7; visual draft does not authorize indexing |

## Search-intent Boundaries

- The Hub uses `buying guides`, `technical guides` and `market trade updates` only as content-type language.
- It does not target any child guide's primary keyword.
- It does not target supplier/commercial phrases owned by Home or Markets.
- It does not target grade, process or application phrases owned by Product/Application pages.
- The exact RES-ORIGIN Page Name may appear once as a Featured title after eligibility; that does not transfer its primary keyword to the Hub.

## GEO Answer Blocks

| Block | Extractable answer |
|---|---|
| Hub definition | TiO2 Malaysia Resources is a procurement research hub for titanium dioxide sourcing, technical evaluation and dated market or trade information. |
| Technical evaluation | Grade evaluation should use application and processing requirements, current technical documentation, comparable criteria and buyer validation; a comparison does not prove equivalence. |
| Application relevance | Coatings, plastics, masterbatch, printing inks and paper can require different evaluation criteria; the Hub does not recommend a grade. |
| Trade freshness | Time-sensitive titanium dioxide trade information should identify the official source, applicable scope, source date and review date. |
| Market context | Destination-market information is organized around the European Union, United Kingdom, India and Brazil without inferring a trade outcome. |

## Machine-readable Contract

### Always eligible after page approval

- `WebPage`/`CollectionPage` identity for `/resources/`.
- `BreadcrumbList`: Home → Resources.
- Organization/brand reference only through the approved global entity contract.

### Conditional

- `ItemList` exists only when one or more complete public Resource cards render.
- Item position, name and URL must match visible cards.
- A Resource removed for freshness, route or claim failure is removed from ItemList in the same release.

### Prohibited

- No fake Article/NewsArticle from the Hub.
- No Product, Offer, Review, AggregateRating, FAQPage or QAPage.
- No hidden candidate, planned Trade page, fake date, fake author, `CURRENT` status or cross-site route.
- No grade/application/process relation absent from visible, approved content.

## Internal-link Matrix

| Source block | Destination | Anchor direction | Gate |
|---|---|---|---|
| Featured | RES-ORIGIN | `Read the sourcing guide` | Child content + claim + `tio2-my` route + public eligibility |
| BQ-05 | Market pages | `EU/UK/India/Brazil titanium dioxide market` | Each route approved/live |
| Future technical item | Product/Application pages | Descriptive technical/application anchor | Evidence-supported relation only |
| Footer/Header | Registered global routes | Shared fixed contract | No page-local anchors |

## Acceptance

- [x] One H1; no invented primary keyword.
- [x] Child keyword appears only in the child title candidate.
- [x] Concrete TiO2 entities strengthen answer quality without keyword stuffing.
- [x] No named grade recommendation or PRODUCT V0.3 row relation.
- [x] Trade markets appear only as destination context; no policy conclusion.
- [x] ItemList remains 0 in the current public state.
- [x] Schema mirrors visible eligible content only.

