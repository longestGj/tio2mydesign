# DOC-000 SEO, GEO and Schema Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page ID | `DOC-000` |
| Gate | Gate 2 |
| Version / date | V0.1 / 2026-09-01 |
| Status | `DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED` |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Mapping | `PLANNED_ARCHITECTURE` |
| Verification | `NO_DIRECT_KEYWORD_TARGET` |
| Current inventory state | Zero eligible document records |

## 1. Search responsibility

DOC-000 is a navigation and selection Hub. It may use TDS, SDS, COA, COO, traceability and REACH as category language, but it does not own the primary search intent for those topics.

| Search intent | Owner |
|---|---|
| `titanium dioxide reach registration` | `DOC-REACH` |
| `titanium dioxide tds` plus SDS/COA cluster | `DOC-TDS` |
| `titanium dioxide country of origin certificate` | `DOC-COO` |
| request action | `CONV-DOC` |
| company origin/manufacturing/traceability trust | `ABOUT-001` |

## 2. Metadata candidates

These values are review candidates. Indexing remains an explicit unresolved gate.

| Field | Candidate |
|---|---|
| Title | `Documents & Compliance Guidance | TiO2 Malaysia` |
| Meta description | `Understand the purpose and scope of TDS, SDS, COA, origin, traceability and compliance documentation before making a product-specific request.` |
| H1 | `Documents & Compliance Guidance` |
| Canonical | `https://tio2malaysia.com/documents/` — candidate self-reference; release requires URL/index approval |
| Robots | `DECISION_REQUIRED`; recommended candidate `index,follow` only after page/route approval |
| Sitemap | Include only if INDEX, Canonical and route are approved |
| Hreflang | `NOT_APPLICABLE` for current EN-only page |
| Open Graph type | `website` |
| Open Graph title | Same semantic direction as Title |
| Open Graph description | Same claims and scope as visible Hero; no availability language |

## 3. On-page SEO controls

- H1 and Title describe guidance/selection, not a file library.
- Category words appear once in their relevant row and naturally in the Hero/FAQ.
- No repetitive keyword list in Footer, ALT, Meta or hidden content.
- Child primary terms are excluded from URL, H1 and article-depth sections.
- The Hub does not use `download`, `supplier`, `registration`, `certificate available` or `all grades` as acquisition claims.
- The current no-file state does not generate a negative search claim that documents do not exist.

## 4. GEO entities and answer blocks

### 4.1 Primary entity

`TiO2 Malaysia Documents & Compliance Hub` as a page/entity relationship, not as a claimed document provider inventory.

### 4.2 Related visible concepts

- Technical Data Sheet;
- Safety Data Sheet;
- Certificate of Analysis;
- Certificate of Origin and origin documents;
- traceability information;
- REACH and compliance information;
- product/grade, destination/language, order/batch context.

These are category concepts. No company-specific file, registration, certificate, product-document mapping or availability relation is created.

### 4.3 Answer-ready blocks

| Answer ID | Visible question | Approved factual ceiling |
|---|---|---|
| DOC-GEO-A01 | Which document should I choose? | General category-purpose distinction only |
| DOC-GEO-A02 | Does one document cover every grade or market? | No general coverage is stated; scope may vary |
| DOC-GEO-A03 | Can I download documents here? | No files are listed on this Hub |
| DOC-GEO-A04 | Does request receipt mean approval? | Receipt and review are distinct; no approval/delivery implication |

Answers must remain visible and word-for-word aligned with the content architecture before any structured representation is considered.

## 5. Schema contract

### 5.1 Current candidate graph

Subject to INDEX and route approval:

- one `CollectionPage` or `WebPage` node for DOC-000;
- one `BreadcrumbList` representing visible `Home > Documents`;
- publisher/brand relations only if they reuse independently verified global entity data and do not add a document capability claim.

### 5.2 Current zero-record omissions

The current graph must contain zero:

- `ItemList` entries;
- `DigitalDocument` or `MediaObject` nodes representing files;
- `hasPart` relations to DOC-REACH, DOC-TDS or DOC-COO;
- download URLs;
- CONV-DOC action relation;
- `Product`, `Offer`, certification, REACH-registration, origin or traceability claim;
- FAQPage/QAPage/HowTo unless separately approved against current search-engine requirements.

### 5.3 Future partial/full rule

Only an item that is visible, evidence-qualified, scope-qualified and route-eligible may enter an `ItemList` or `hasPart` relationship. Visible order, name, URL and scope must match structured output exactly. If the visible item is removed, its structured relation is removed in the same release.

## 6. Machine-readable QA

- [ ] INDEX/NOINDEX and Canonical approved before release.
- [ ] Page type matches visible Hub purpose.
- [ ] Breadcrumb matches visible navigation.
- [ ] Zero eligible records produces zero item/document relations.
- [ ] No provisional child URL enters JSON-LD, sitemap or GEO answers.
- [ ] No document availability, download, coverage, compliance, origin or traceability claim is inferred.
- [ ] Meta, OG, ALT and Schema remain within visible Buyer Clean claims.
- [ ] Buyer-visible `CURRENT` word count remains zero; semantic current mapping follows Global Chrome V0.5.

## 7. Gate status

`DRAFT_FOR_GATE_4_REVIEW / NOT_APPROVED`. Indexing, Canonical activation, route publication and implementation remain unresolved and outside this task.
