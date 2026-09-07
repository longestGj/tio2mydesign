# DOC-000 Wireframe V0.2

## 0. Control

| Field | Value |
|---|---|
| Gate | Gate 3 |
| Status | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
| Scope | Desktop, 390px, Mobile Menu and target-state conversion flow |

## 1. Desktop structure

```text
[84px inherited Header: Logo | fixed nav (Documents current) | Request a Quote]

[Hero 7/5]
Breadcrumb + H1 + buyer answer
[Request Documents] [Browse Document Types]
Document Language: English      Six-category index motif

[Choose the Document You Need]
TDS + Request TDS              Origin + Request Origin Documents
SDS + Request SDS              Traceability + Request Traceability Documents
COA + Request COA              Compliance + Request Compliance Information

[Scope, three columns]
Product/Grade | Destination Market | Order/Batch Context
English service note

[Deep Navy, three request steps + non-guarantee]

[Prepare Your Document Request: four context items]

[Deep Navy primary conversion]
Request Documents for Your Product and Purchasing Context
                                      [Request Documents]

[Buyer Questions: four rows]
[light final Request Documents link]

[Inherited Deep Navy Footer with global Request a Quote]
```

## 2. 390px structure

```text
[64px Logo | RFQ | Menu]
[Hero copy]
[full Request Documents]
[full Browse Document Types]
[Document Language: English]
[six full-width category rows, each with secondary request link]
[three stacked scope blocks]
[three stacked request steps + non-guarantee]
[Prepare Request checklist]
[Deep Navy conversion + full-width Request Documents]
[four FAQ rows]
[light final link]
[stacked Footer + Request a Quote]
```

No carousel, horizontal table, truncated category name, language selector or competing body RFQ.

## 3. Conversion flow and prefill

```text
Hero Request Documents
→ Choose document type
→ Confirm scope
→ Prepare context
→ Request Documents
→ Qualified Document Request
```

| Entry | Prefill |
|---|---|
| Request TDS | Document Type = TDS |
| Request SDS | Document Type = SDS |
| Request COA | Document Type = COA |
| Request Origin Documents | Document Type = Origin |
| Request Traceability Documents | Document Type = Traceability |
| Request Compliance Information | Document Type = Compliance |
| Product detail request | Product / Grade when supplied by the upstream owner |

## 4. Interaction and state matrix

| State | Wireframe behavior |
|---|---|
| Public inventory = 0 | Guidance and request routing remain complete; no file row or empty library |
| Partial/complete approved inventory | Render only eligible public records; visible set equals machine set |
| Controlled file | Request action only; never a false download |
| Request route not release-ready | Release is blocked; Buyer Clean design does not show internal route copy or fallback |
| Long category/record name | Wrap in full without ellipsis or tooltip dependency |
| No image | Layout remains complete; no placeholder |
| Hover/focus | Links receive restrained hover and visible 3px focus; information remains visible by default |
| Mobile Menu | Inherited fixed order and Documents marker; RFQ remains visible |

## 5. Gate 3 verification

- [x] Real copy-length hierarchy represented.
- [x] Desktop and 390px semantic parity.
- [x] ≥44px mobile actions.
- [x] Conversion exists after Prepare and after FAQ.
- [x] No Header/Menu/Footer redesign.
- [x] No child page or form surface created.

Gate 3: `SUBMITTED / NOT APPROVED`.
