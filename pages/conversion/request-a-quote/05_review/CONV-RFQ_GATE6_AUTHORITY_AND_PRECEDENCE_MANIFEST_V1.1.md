# CONV-RFQ Gate 6 Authority and Precedence Manifest V1.1

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 6 — project-control quality review |
| Review ID | `CONV-RFQ-G6-PCR-02` |
| Date | 2026-09-01 |
| Status | `TARGETED_REVISION / DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Parent review | `CONV-RFQ-G6-PCR-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| Sole return | `P0-01_COMPLETE_SITE_SIBLING_ROUTES` |
| Gate 5 | `USER_APPROVED / CLOSED` |
| Gate 7 / development | `LOCKED / NOT_AUTHORIZED` |

V1.1 supersedes V1.0 as the current Gate 6 authority. It changes only the complete-site classification of the two approved sibling request routes/links.

## 1. Authority order

1. User decisions, including approved Gate 5 and Gate 6 authorization.
2. Root `D:\23MySec\AGENTS.md`, especially complete-site/final-reader and change-control rules.
3. `CONV-RFQ_GATE5_APPROVED_BASELINE_MANIFEST_V1.0.md` and exact approved assets.
4. `WEBSITE_LEGAL_PRIVACY_FRAMEWORK_ADOPTION_V1.0.md`.
5. `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` and production SVG Logo authority.
6. PRODUCT V0.3 matrix and its three approved audits.
7. Approved Gate 2/3/4 page-specific content/SEO/structure/visual decisions.
8. Conversion Playbook where it does not conflict with higher/later approved decisions.
9. Registry, keyword master and PRD.
10. Historical files for traceability only.

## 2. Page identity lock

| Contract | Value |
|---|---|
| Page ID / route | `CONV-RFQ` / `/request-a-quote/` |
| Page type | RFQ conversion page |
| Language / priority | `en` / P0 |
| Primary keyword | `titanium dioxide quote supplier` |
| Buyer stage | RFQ / Purchase |
| Site scope | `tio2-my` |

## 3. Complete-site sibling-route ruling

The user-approved Gate 5 final-reader baseline contains both entries:

| Link | Final-system status | Not-ready behavior |
|---|---|---|
| `Request a Sample` → `/request-sample/` | `REQUIRED_FINAL_SYSTEM_ROUTE_AND_LINK` | Gate 8 implementation dependency and Gate 9/release blocker; never hide, disable or relink Contact |
| `Request Documents` → `/request-documents/` | `REQUIRED_FINAL_SYSTEM_ROUTE_AND_LINK` | Gate 8 implementation dependency and Gate 9/release blocker; never hide, disable or relink Contact |

Parallel route work does not invalidate Gate 5 or block Gate 6. It must converge before complete-site release. A conditional renderer is not an approved substitute.

Removing either entry, changing its destination or merging workflows requires user-approved page change control because it changes approved Gate 5 content, page relationships and conversion behavior.

## 4. Other conflict rulings retained

- Use approved SEO Title `Request a Titanium Dioxide Quote | TiO2 Malaysia`; early exact-match title is historical.
- Privacy route/data-flow readiness is a Gate 7/8/9/release dependency, not a Buyer Clean placeholder.
- Desktop left/right composition and rejected grade-first Hero are historical and unauthorized.
- `NO_PUBLIC_MAPPING` never means not applicable, unsuitable or unavailable.
- Shared Header/Footer/Mobile Menu remain shared authority; no page-local fork.

## 5. Gate boundary

Gate 6 remains not approved pending PCR-02. Gate 7, handoff, implementation, testing, deployment and any D16 action remain locked.

