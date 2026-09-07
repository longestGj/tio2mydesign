# DOC-000 Post-Gate 9 FAQ Grade Alignment Decision V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-000` / `/documents/` |
| Decision ID | `DOC-000-HUB-FAQ-GRADE-ALIGN-01` |
| Decision date | 2026-09-05 |
| Decision source | Explicit user approval in the current project-control conversation |
| Status | `USER_APPROVED_TARGETED_COPY_CORRECTION / PENDING_EXTERNAL_IMPLEMENTATION` |
| Current Buyer Clean authority | `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.10.md` |
| Current Buyer Clean SHA-256 | `019881F75517F87B75283A4A14FA7BEA3163B740DB6196B3B5F3778B84164326` |
| Existing implementation | Gate 9-approved implementation retains the previous answer until separately corrected by the external development project |
| Gate 10 | `NOT_AUTHORIZED` |

## 1. Approved replacement

Question retained:

> Do I need to know the Product Grade?

Previous answer, now historical:

> Yes. Select the Product Grade the documents should relate to. If you are not sure, explore Products before continuing.

Current approved answer:

> You can start a document request without a preselected Grade, but a Product Grade is required before submission.

## 2. Reason and cross-page effect

The replacement distinguishes two valid states:

1. DOC-000 Hero and DOC-TDS may open `/request-documents/` without a preselected Grade.
2. CONV-DOC still requires one allowlisted Product Grade before the buyer can submit the form.

This removes the apparent conflict between the Hub direct-request path, DOC-TDS optional prefill and the receiving form's required Grade field. It changes no Grade allowlist, request validation, route, selector behavior, document category, SEO/GEO/Schema boundary or evidence control.

## 3. Version and implementation boundary

- `DOC-000_CONTENT_ARCHITECTURE_V0.9.md`, Gate 5 raster assets, the Gate 7 package and Gate 9 closure remain preserved as pre-correction evidence.
- V0.10 supersedes V0.9 only for current Buyer Clean consumption.
- The external WordPress/Next.js project must apply the one-answer correction to the Hub CMS/runtime contract and return the rendered result for targeted read-only QA before release.
- This record does not authorize changes in `D:\16Wordpress_nextjs`, deployment, publication, DNS or indexing.

`DOC-000-HUB-FAQ-GRADE-ALIGN-01 = USER_APPROVED / COPY AUTHORITY UPDATED / EXTERNAL IMPLEMENTATION OPEN`
