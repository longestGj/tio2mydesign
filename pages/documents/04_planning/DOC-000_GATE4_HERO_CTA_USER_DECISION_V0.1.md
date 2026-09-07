# DOC-000 Gate 4 Hero CTA User Decision V0.1

## 0. Decision record

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Decision ID | `DOC-000-G4-HERO-CTA-02` |
| Decision date | 2026-09-02 |
| Decision source | User explicit confirmation relayed by project control |
| Content status | `USER_APPROVED_FOR_EXTERNAL_USE / ACTIVE` |
| Interaction status | `USER_APPROVED / ACTIVE_FOR_GATE4` |
| Gate 4 stage | Remains `NOT_APPROVED`; project-control re-review required |
| Gate 5 | `NOT_AUTHORIZED` |

## 1. Approved Hero CTA

| Property | Approved value |
|---|---|
| Visible copy | `Start a Document Request` |
| Semantic role | Ordinary accessible link |
| Destination | `/request-documents/` |
| Query parameter | None |
| In-page scroll or anchor | None |
| Product Grade transfer | None |
| Default Grade | None |
| Navigation | Native link navigation; not JS-only |

Reference semantic form:

```html
<a href="/request-documents/">Start a Document Request</a>
```

The reference expresses semantics and destination only; it is not development authorization.

## 2. Two-path contract

### Path A — direct request

`Hero: Start a Document Request`
→ `/request-documents/`
→ Request Documents renders with no preselected Grade
→ the user selects a Grade in that form when required.

### Path B — Grade-first request

`Product Grade Selector`
→ user selects one of the 14 approved Grades
→ `Continue to Request Documents`
→ `/request-documents/?product={GRADE}`
→ the receiving Grade is prefilled and remains editable.

The two paths coexist and must not be merged. Hero CTA never triggers, focuses or scrolls to the Hub Selector. Selector Continue never becomes the Hero direct-request action.

## 3. Receiver contract

- `/request-documents/` owns document-type selection and request submission.
- With no `product` parameter, the form must not auto-select a default Grade.
- With a valid `product` parameter, the Grade may be prefilled but remains editable.
- No path implies document availability, approval, downloadability, scope or delivery timing.

## 4. Approval boundary

The user approved this exact external copy and interaction contract. This decision does not approve the Gate 4 visual package, authorize Gate 5, reopen child Document pages or authorize development, D16 access, deployment, publication, DNS or indexing.
