# SYS-404 Gate 2 Content Skeleton Inheritance Map V0.1

## 1. Control and result

| Field | Value |
|---|---|
| Date | `2026-09-08` |
| Dispatch | `G2-SYS404-EXEC-20260908-01` |
| Page / Gate | `SYS-404` / Gate 2 |
| Executor | `/root/sys404_gate2_execute` |
| Processing mode | `APPROVED_CONTENT_ADAPTATION` |
| Result | `EQUIVALENT_SAME_PAGE_SKELETON_CONFIRMED` |
| Candidate status | `READY_FOR_BUYER_REVIEW / NOT_APPROVED` |
| Stop boundary | Independent Buyer Review, then Project Control review and user Gate 2 decision; Gate 3 and external implementation remain unauthorized |

This A artifact maps the approved page organization into the current Gate 2 candidate. It is not a second editable copy source. The complete page-owned buyer copy is maintained only in [Full Buyer Clean Copy V0.1](SYS-404_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md).

## 2. Equivalent Skeleton decision

The approved design is a valid same-page equivalent Skeleton, so Gate 2 may proceed directly to the Full Copy candidate without asking the user to approve the same structure again.

| Test | Evidence | Result |
|---|---|---|
| Same page identity | Approved Design V0.1 §3 and Addition Decision V1.0 §3 both identify `SYS-404`, EN/GLOBAL, `RUNTIME_FALLBACK`, `tio2-my` | PASS |
| Actual core copy | Approved Design V0.1 §4.1 fixes the exact eyebrow, H1 and body | PASS |
| Page organization | Approved Design V0.1 §4.1 fixes content order and separates two Primary actions from three Supporting actions; §9 fixes shared Header/Footer consumption | PASS |
| Action behavior | All five labels and targets are exact; no prefill, form, receiver or automatic redirect belongs to this page | PASS |
| Exclusions | Approved Design V0.1 §4.2 excludes search, FAQ, form, long SEO copy, dynamic recommendations, visitor blame and internal governance text | PASS |
| Gate 1 continuity | Gate 1 independent review found no required Finding; the user then confirmed the intent and closed Gate 1 without changing copy or actions | PASS |
| Current authorization | Current Manifest V0.2 and Gate 2 Parallel Control V1.0 authorize approved-content adaptation for this page | PASS |

No conflicting current source, missing content decision or new page arrangement was found. The source text remains owned by Approved Design V0.1; this artifact records how it is consumed.

## 3. A structure and inheritance map

| Order | Surface / block | Buyer task | Exact inheritance | Current B location |
|---:|---|---|---|---|
| 0 | Shared Header | Retain site-wide navigation and fixed RFQ | Global Chrome V0.5 plus Production SVG Logo Manifest V1.0; no page-local copy or component fork | Assembled outside the page-owned Buyer Copy; `current_navigation_key=NONE` |
| 1 | Error identifier | Recognize that the requested page was not found | Approved Design V0.1 §4.1 eyebrow, unchanged | `BC-01` |
| 2 | Recovery message | Understand the situation and available recovery choices | Approved Design V0.1 §4.1 H1 and body, unchanged; preserve `may have moved` qualifier | `BC-02` and `BC-03` |
| 3 | Primary action group | Continue to products or restart from the homepage | `Explore Products` → `/products/`; `Go to Homepage` → `/` | `BC-04` and `BC-05` |
| 4 | Supporting action group | Continue to documents, contact or quotation tasks | `Request Documents` → `/request-documents/`; `Contact Our Team` → `/contact/`; `Request a Quote` → `/request-a-quote/` | `BC-06` through `BC-08` |
| 5 | Shared Footer | Retain legal and consent utilities | Global Footer Legal Utility Addendum V1.0 plus No-Terms Decision V1.0; no page-local legal copy | Assembled outside the page-owned Buyer Copy |

No breadcrumb, site search, recommendation module, FAQ, form, help-center block, product list, dynamic message or automatic redirect is added.

## 4. Page task and machine direction inherited into Gate 2

| Area | Locked direction |
|---|---|
| Page task | Explain the not-found state without diagnosing a cause, then offer the five approved recovery destinations |
| Search ownership | `NO_PRIMARY_KEYWORD`; no commercial query or GEO answer target |
| Title | `Page Not Found | TiO2 Malaysia` |
| HTTP / robots | Real HTTP `404`; `noindex, follow` |
| Sitemap | Excluded |
| Canonical | No page-specific or indexable canonical for arbitrary unknown URLs |
| Schema | No page-specific Schema |
| Hreflang | Not applicable for the current EN-only runtime fallback |
| Shared navigation | Zero current links on each navigation surface; no buyer-visible `CURRENT` label |

## 5. Adaptation delta and open decisions

The visible-copy delta is zero. Gate 2 adds only the controlled A/B/C organization and confirms the suggested title as the page title. It does not rewrite, shorten, expand or reorder the approved reader-visible material.

There is no remaining user content decision for this execution candidate. Runtime dependencies DEP01–DEP07 remain `NOT_TESTED` with their existing owners and acceptance conditions; they do not establish implementation and do not prevent independent Buyer Review of the content candidate.

