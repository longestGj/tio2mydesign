# DOC-000 SEO, GEO and Schema Contract V0.3

## 0. Control

| Field | Value |
|---|---|
| Gate | Gate 2 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| URL / type | `/documents/` / Navigation hub |
| Keyword / mapping | `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE` |

## 1. Metadata candidates

Title: `Documents & Compliance Guidance | TiO2 Malaysia`.

Meta: `Find technical, safety, quality, origin and compliance document routes by titanium dioxide product or grade, or submit a product-specific document request.`

Canonical, robots and index status remain `DECISION_REQUIRED`.

## 2. Keyword boundary

DOC-000 owns finder, record routing and request preparation. It may name TDS, SDS, COA, Origin, Traceability and REACH/Compliance concisely, but it does not own article-depth child intent. No child page is started.

## 3. GEO relationship model

```text
Grade → Document Type → Revision / Date → English → View / Download / Request
```

The model is ready, but current record edges remain zero because no public record is approved. Internal state specimens use field labels and cannot enter public structured data.

## 4. Direct-answer coverage

The page can answer how to search, what TDS/SDS/COA are used for, English-only availability, whether a public action exists, how to request a non-public item and why a request is not a guarantee. `What documents are available for M-350?` must be answered only by actual finder results, never a static claim.

## 5. Structured parity

Current candidate page graph: `CollectionPage` or `WebPage` plus visible `BreadcrumbList`, subject to index approval.

Current file graph: zero `ItemList`, `DigitalDocument`, file, download, Product-document or child relations. Future structured records must match visible count, identity, revision/date, language, scope and action exactly.

## 6. Gate results

| Gate | Result |
|---|---|
| SEO | PASS WITH CHANGES |
| Keyword Boundary | PASS |
| GEO relationship design | PASS WITH CHANGES |
| Visible=Machine rule | PASS |

Changes are record evidence and final index/canonical decisions, not additional page copy.
