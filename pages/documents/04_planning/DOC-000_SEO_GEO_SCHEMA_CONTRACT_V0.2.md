# DOC-000 SEO, GEO and Schema Contract V0.2

## 0. Control

| Field | Value |
|---|---|
| Gate | Gate 2 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| URL / type | `/documents/` / Navigation hub |
| Keyword / mapping | `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE` |

## 1. Metadata candidates

| Field | Candidate / status |
|---|---|
| Title | `Documents & Compliance Guidance | TiO2 Malaysia` |
| Meta | `Choose the technical, safety, quality, origin or compliance document needed for a product-specific titanium dioxide procurement review.` |
| H1 | `Documents & Compliance Guidance` |
| Canonical | `https://tio2malaysia.com/documents/` candidate; `DECISION_REQUIRED` |
| Robots | `DECISION_REQUIRED`; no index action in this task |
| Hreflang | None proposed; current page/service is English only |
| Sitemap | Only after index, canonical and route approval |

## 2. Keyword boundary

The Hub may naturally name TDS, SDS, COA, Origin, Traceability and REACH/Compliance, but it does not own article-depth searches for them. DOC-REACH, DOC-TDS and DOC-COO remain the planned owners and were not started. CONV-DOC owns request capture.

## 3. GEO entity graph

```text
Titanium Dioxide Documents
→ TDS / SDS / COA / Origin / Traceability / Compliance
→ Purpose
→ Product or Grade / Destination Market / Order or Batch Context
→ English document service
→ Request Documents
```

No edge asserts that a specific file exists, applies, is approved or is available.

## 4. Required direct answers

| Question | Visible answer ceiling |
|---|---|
| Which document do I need? | Six concise category-purpose distinctions |
| What determines document scope? | Product/grade, destination market, order/batch context |
| What language is available? | Documents are currently supplied in English |
| Does one document apply everywhere? | No; scope may vary |
| Does a request guarantee availability? | No; it does not confirm availability, approval or coverage |
| How do I request documents? | Provide product/grade, category, destination and relevant order/batch context, then submit Request Documents |

## 5. Schema contract

Current candidate graph, subject to index and route approval:

- one `CollectionPage` or `WebPage` node;
- one visible `BreadcrumbList` for Home → Documents;
- independently verified global Organization/Brand relations only.

Current omissions:

- no `ItemList` or `DigitalDocument` because visible public records = 0;
- no file, filename, download URL, product-document relation, certification, REACH status, origin or traceability fact;
- no `hasPart` to unstarted child pages;
- no request-action relation until `/request-documents/` is approved and live;
- no FAQPage/HowTo unless separately approved against current search-engine requirements.

Future visible records must equal machine records by count, name, order, URL, language and scope.

## 6. Verification

| Gate | Result | Open change |
|---|---|---|
| SEO | `PASS WITH CHANGES` | Final canonical, robots and index decision |
| Keyword boundary | `PASS` | None within this revision |
| GEO | `PASS` | No unverified entity edges added |
| Evidence parity | `PASS WITH CHANGES` | Re-evaluate only when visible records or live request action become eligible |

No technical implementation, JSON-LD emission or indexing action is authorised.
